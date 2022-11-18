import * as _8 from "./auth/v1beta1/auth";
import * as _9 from "./auth/v1beta1/genesis";
import * as _10 from "./auth/v1beta1/query";
import * as _11 from "./authz/v1beta1/authz";
import * as _12 from "./authz/v1beta1/event";
import * as _13 from "./authz/v1beta1/genesis";
import * as _14 from "./authz/v1beta1/query";
import * as _15 from "./authz/v1beta1/tx";
import * as _16 from "./bank/v1beta1/authz";
import * as _17 from "./bank/v1beta1/bank";
import * as _18 from "./bank/v1beta1/genesis";
import * as _19 from "./bank/v1beta1/query";
import * as _20 from "./bank/v1beta1/tx";
import * as _21 from "./base/abci/v1beta1/abci";
import * as _22 from "./base/kv/v1beta1/kv";
import * as _23 from "./base/query/v1beta1/pagination";
import * as _24 from "./base/reflection/v1beta1/reflection";
import * as _25 from "./base/reflection/v2alpha1/reflection";
import * as _26 from "./base/snapshots/v1beta1/snapshot";
import * as _27 from "./base/store/v1beta1/commit_info";
import * as _28 from "./base/store/v1beta1/listening";
import * as _29 from "./base/store/v1beta1/snapshot";
import * as _30 from "./base/tendermint/v1beta1/query";
import * as _31 from "./base/v1beta1/coin";
import * as _32 from "./capability/v1beta1/capability";
import * as _33 from "./capability/v1beta1/genesis";
import * as _34 from "./crisis/v1beta1/genesis";
import * as _35 from "./crisis/v1beta1/tx";
import * as _36 from "./crypto/ed25519/keys";
import * as _37 from "./crypto/multisig/keys";
import * as _38 from "./crypto/secp256k1/keys";
import * as _39 from "./crypto/secp256r1/keys";
import * as _40 from "./distribution/v1beta1/distribution";
import * as _41 from "./distribution/v1beta1/genesis";
import * as _42 from "./distribution/v1beta1/query";
import * as _43 from "./distribution/v1beta1/tx";
import * as _44 from "./evidence/v1beta1/evidence";
import * as _45 from "./evidence/v1beta1/genesis";
import * as _46 from "./evidence/v1beta1/query";
import * as _47 from "./evidence/v1beta1/tx";
import * as _48 from "./feegrant/v1beta1/feegrant";
import * as _49 from "./feegrant/v1beta1/genesis";
import * as _50 from "./feegrant/v1beta1/query";
import * as _51 from "./feegrant/v1beta1/tx";
import * as _52 from "./genutil/v1beta1/genesis";
import * as _53 from "./gov/v1beta1/genesis";
import * as _54 from "./gov/v1beta1/gov";
import * as _55 from "./gov/v1beta1/query";
import * as _56 from "./gov/v1beta1/tx";
import * as _57 from "./mint/v1beta1/genesis";
import * as _58 from "./mint/v1beta1/mint";
import * as _59 from "./mint/v1beta1/query";
import * as _60 from "./params/v1beta1/params";
import * as _61 from "./params/v1beta1/query";
import * as _62 from "./slashing/v1beta1/genesis";
import * as _63 from "./slashing/v1beta1/query";
import * as _64 from "./slashing/v1beta1/slashing";
import * as _65 from "./slashing/v1beta1/tx";
import * as _66 from "./staking/v1beta1/authz";
import * as _67 from "./staking/v1beta1/genesis";
import * as _68 from "./staking/v1beta1/query";
import * as _69 from "./staking/v1beta1/staking";
import * as _70 from "./staking/v1beta1/tx";
import * as _71 from "./tx/signing/v1beta1/signing";
import * as _72 from "./tx/v1beta1/service";
import * as _73 from "./tx/v1beta1/tx";
import * as _74 from "./upgrade/v1beta1/query";
import * as _75 from "./upgrade/v1beta1/upgrade";
import * as _76 from "./vesting/v1beta1/tx";
import * as _77 from "./vesting/v1beta1/vesting";
import * as _155 from "./auth/v1beta1/query.lcd";
import * as _156 from "./authz/v1beta1/query.lcd";
import * as _157 from "./bank/v1beta1/query.lcd";
import * as _158 from "./base/tendermint/v1beta1/query.lcd";
import * as _159 from "./distribution/v1beta1/query.lcd";
import * as _160 from "./evidence/v1beta1/query.lcd";
import * as _161 from "./feegrant/v1beta1/query.lcd";
import * as _162 from "./gov/v1beta1/query.lcd";
import * as _163 from "./mint/v1beta1/query.lcd";
import * as _164 from "./params/v1beta1/query.lcd";
import * as _165 from "./slashing/v1beta1/query.lcd";
import * as _166 from "./staking/v1beta1/query.lcd";
import * as _167 from "./tx/v1beta1/service.lcd";
import * as _168 from "./upgrade/v1beta1/query.lcd";
import * as _169 from "./auth/v1beta1/query.rpc.query";
import * as _170 from "./authz/v1beta1/query.rpc.query";
import * as _171 from "./bank/v1beta1/query.rpc.query";
import * as _172 from "./base/tendermint/v1beta1/query.rpc.svc";
import * as _173 from "./distribution/v1beta1/query.rpc.query";
import * as _174 from "./evidence/v1beta1/query.rpc.query";
import * as _175 from "./feegrant/v1beta1/query.rpc.query";
import * as _176 from "./gov/v1beta1/query.rpc.query";
import * as _177 from "./mint/v1beta1/query.rpc.query";
import * as _178 from "./params/v1beta1/query.rpc.query";
import * as _179 from "./slashing/v1beta1/query.rpc.query";
import * as _180 from "./staking/v1beta1/query.rpc.query";
import * as _181 from "./tx/v1beta1/service.rpc.svc";
import * as _182 from "./upgrade/v1beta1/query.rpc.query";
import * as _183 from "./authz/v1beta1/tx.rpc.msg";
import * as _184 from "./bank/v1beta1/tx.rpc.msg";
import * as _185 from "./crisis/v1beta1/tx.rpc.msg";
import * as _186 from "./distribution/v1beta1/tx.rpc.msg";
import * as _187 from "./evidence/v1beta1/tx.rpc.msg";
import * as _188 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _189 from "./gov/v1beta1/tx.rpc.msg";
import * as _190 from "./slashing/v1beta1/tx.rpc.msg";
import * as _191 from "./staking/v1beta1/tx.rpc.msg";
import * as _192 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _169.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _10.QueryAccountsRequest): Promise<_10.QueryAccountsResponse>;
                account(request: _10.QueryAccountRequest): Promise<_10.QueryAccountResponse>;
                params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _155.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _10.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryAccountsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _10.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _10.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryAccountsResponse;
                fromPartial(object: {
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _10.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _10.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryAccountRequest;
                fromPartial(object: {
                    address?: string;
                }): _10.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _10.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryAccountResponse;
                fromPartial(object: {
                    account?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _10.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _10.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryParamsRequest;
                fromPartial(_: {}): _10.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _10.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: any;
                        txSigLimit?: any;
                        txSizeCostPerByte?: any;
                        sigVerifyCostEd25519?: any;
                        sigVerifyCostSecp256k1?: any;
                    };
                }): _10.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _9.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.GenesisState;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: any;
                        txSigLimit?: any;
                        txSizeCostPerByte?: any;
                        sigVerifyCostEd25519?: any;
                        sigVerifyCostSecp256k1?: any;
                    };
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _9.GenesisState;
            };
            BaseAccount: {
                encode(message: _8.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.BaseAccount;
                fromPartial(object: {
                    address?: string;
                    pubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    accountNumber?: any;
                    sequence?: any;
                }): _8.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _8.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.ModuleAccount;
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
                    name?: string;
                    permissions?: string[];
                }): _8.ModuleAccount;
            };
            Params: {
                encode(message: _8.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Params;
                fromPartial(object: {
                    maxMemoCharacters?: any;
                    txSigLimit?: any;
                    txSizeCostPerByte?: any;
                    sigVerifyCostEd25519?: any;
                    sigVerifyCostSecp256k1?: any;
                }): _8.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _183.MsgClientImpl;
            QueryClientImpl: typeof _170.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _14.QueryGrantsRequest): Promise<_14.QueryGrantsResponse>;
            };
            LCDQueryClient: typeof _156.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _15.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _15.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _15.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _15.MsgGrant): {
                        typeUrl: string;
                        value: _15.MsgGrant;
                    };
                    exec(value: _15.MsgExec): {
                        typeUrl: string;
                        value: _15.MsgExec;
                    };
                    revoke(value: _15.MsgRevoke): {
                        typeUrl: string;
                        value: _15.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _15.MsgGrant): {
                        typeUrl: string;
                        value: _15.MsgGrant;
                    };
                    exec(value: _15.MsgExec): {
                        typeUrl: string;
                        value: _15.MsgExec;
                    };
                    revoke(value: _15.MsgRevoke): {
                        typeUrl: string;
                        value: _15.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _15.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _15.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _15.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _15.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _15.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _15.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _15.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgGrant;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    grant?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    };
                }): _15.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _15.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgExecResponse;
                fromPartial(object: {
                    results?: Uint8Array[];
                }): _15.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _15.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgExec;
                fromPartial(object: {
                    grantee?: string;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _15.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _15.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgGrantResponse;
                fromPartial(_: {}): _15.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _15.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgRevoke;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                }): _15.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _15.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgRevokeResponse;
                fromPartial(_: {}): _15.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _14.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryGrantsRequest;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _14.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _14.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryGrantsResponse;
                fromPartial(object: {
                    grants?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _14.QueryGrantsResponse;
            };
            GenesisState: {
                encode(message: _13.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.GenesisState;
                fromPartial(object: {
                    authorization?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                }): _13.GenesisState;
            };
            GrantAuthorization: {
                encode(message: _13.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.GrantAuthorization;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    expiration?: Date;
                }): _13.GrantAuthorization;
            };
            EventGrant: {
                encode(message: _12.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.EventGrant;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _12.EventGrant;
            };
            EventRevoke: {
                encode(message: _12.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.EventRevoke;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _12.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _11.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.GenericAuthorization;
                fromPartial(object: {
                    msg?: string;
                }): _11.GenericAuthorization;
            };
            Grant: {
                encode(message: _11.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Grant;
                fromPartial(object: {
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    expiration?: Date;
                }): _11.Grant;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _184.MsgClientImpl;
            QueryClientImpl: typeof _171.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _19.QueryBalanceRequest): Promise<_19.QueryBalanceResponse>;
                allBalances(request: _19.QueryAllBalancesRequest): Promise<_19.QueryAllBalancesResponse>;
                totalSupply(request?: _19.QueryTotalSupplyRequest): Promise<_19.QueryTotalSupplyResponse>;
                supplyOf(request: _19.QuerySupplyOfRequest): Promise<_19.QuerySupplyOfResponse>;
                params(request?: _19.QueryParamsRequest): Promise<_19.QueryParamsResponse>;
                denomMetadata(request: _19.QueryDenomMetadataRequest): Promise<_19.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _19.QueryDenomsMetadataRequest): Promise<_19.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _157.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _20.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _20.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _20.MsgSend): {
                        typeUrl: string;
                        value: _20.MsgSend;
                    };
                    multiSend(value: _20.MsgMultiSend): {
                        typeUrl: string;
                        value: _20.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _20.MsgSend): {
                        typeUrl: string;
                        value: _20.MsgSend;
                    };
                    multiSend(value: _20.MsgMultiSend): {
                        typeUrl: string;
                        value: _20.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _20.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _20.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _20.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _20.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _20.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.MsgSend;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _20.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _20.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.MsgSendResponse;
                fromPartial(_: {}): _20.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _20.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.MsgMultiSend;
                fromPartial(object: {
                    inputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    outputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _20.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _20.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.MsgMultiSendResponse;
                fromPartial(_: {}): _20.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _19.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.QueryBalanceRequest;
                fromPartial(object: {
                    address?: string;
                    denom?: string;
                }): _19.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _19.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.QueryBalanceResponse;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _19.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _19.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.QueryAllBalancesRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _19.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _19.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.QueryAllBalancesResponse;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _19.QueryAllBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _19.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.QueryTotalSupplyRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _19.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _19.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.QueryTotalSupplyResponse;
                fromPartial(object: {
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _19.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _19.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.QuerySupplyOfRequest;
                fromPartial(object: {
                    denom?: string;
                }): _19.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _19.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.QuerySupplyOfResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _19.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _19.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.QueryParamsRequest;
                fromPartial(_: {}): _19.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _19.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                }): _19.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _19.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.QueryDenomsMetadataRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _19.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _19.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.QueryDenomsMetadataResponse;
                fromPartial(object: {
                    metadatas?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _19.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _19.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.QueryDenomMetadataRequest;
                fromPartial(object: {
                    denom?: string;
                }): _19.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _19.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.QueryDenomMetadataResponse;
                fromPartial(object: {
                    metadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                    };
                }): _19.QueryDenomMetadataResponse;
            };
            GenesisState: {
                encode(message: _18.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GenesisState;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                    balances?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    denomMetadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                    }[];
                }): _18.GenesisState;
            };
            Balance: {
                encode(message: _18.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Balance;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _18.Balance;
            };
            Params: {
                encode(message: _17.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.Params;
                fromPartial(object: {
                    sendEnabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    defaultSendEnabled?: boolean;
                }): _17.Params;
            };
            SendEnabled: {
                encode(message: _17.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.SendEnabled;
                fromPartial(object: {
                    denom?: string;
                    enabled?: boolean;
                }): _17.SendEnabled;
            };
            Input: {
                encode(message: _17.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.Input;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _17.Input;
            };
            Output: {
                encode(message: _17.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.Output;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _17.Output;
            };
            Supply: {
                encode(message: _17.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.Supply;
                fromPartial(object: {
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _17.Supply;
            };
            DenomUnit: {
                encode(message: _17.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.DenomUnit;
                fromPartial(object: {
                    denom?: string;
                    exponent?: number;
                    aliases?: string[];
                }): _17.DenomUnit;
            };
            Metadata: {
                encode(message: _17.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.Metadata;
                fromPartial(object: {
                    description?: string;
                    denomUnits?: {
                        denom?: string;
                        exponent?: number;
                        aliases?: string[];
                    }[];
                    base?: string;
                    display?: string;
                    name?: string;
                    symbol?: string;
                }): _17.Metadata;
            };
            SendAuthorization: {
                encode(message: _16.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.SendAuthorization;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _16.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _21.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.TxResponse;
                    fromPartial(object: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                    }): _21.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _21.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ABCIMessageLog;
                    fromPartial(object: {
                        msgIndex?: number;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        }[];
                    }): _21.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _21.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.StringEvent;
                    fromPartial(object: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }): _21.StringEvent;
                };
                Attribute: {
                    encode(message: _21.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Attribute;
                    fromPartial(object: {
                        key?: string;
                        value?: string;
                    }): _21.Attribute;
                };
                GasInfo: {
                    encode(message: _21.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GasInfo;
                    fromPartial(object: {
                        gasWanted?: any;
                        gasUsed?: any;
                    }): _21.GasInfo;
                };
                Result: {
                    encode(message: _21.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Result;
                    fromPartial(object: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }): _21.Result;
                };
                SimulationResponse: {
                    encode(message: _21.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.SimulationResponse;
                    fromPartial(object: {
                        gasInfo?: {
                            gasWanted?: any;
                            gasUsed?: any;
                        };
                        result?: {
                            data?: Uint8Array;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                        };
                    }): _21.SimulationResponse;
                };
                MsgData: {
                    encode(message: _21.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgData;
                    fromPartial(object: {
                        msgType?: string;
                        data?: Uint8Array;
                    }): _21.MsgData;
                };
                TxMsgData: {
                    encode(message: _21.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.TxMsgData;
                    fromPartial(object: {
                        data?: {
                            msgType?: string;
                            data?: Uint8Array;
                        }[];
                    }): _21.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _21.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.SearchTxsResult;
                    fromPartial(object: {
                        totalCount?: any;
                        count?: any;
                        pageNumber?: any;
                        pageTotal?: any;
                        limit?: any;
                        txs?: {
                            height?: any;
                            txhash?: string;
                            codespace?: string;
                            code?: number;
                            data?: string;
                            rawLog?: string;
                            logs?: {
                                msgIndex?: number;
                                log?: string;
                                events?: {
                                    type?: string;
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                }[];
                            }[];
                            info?: string;
                            gasWanted?: any;
                            gasUsed?: any;
                            tx?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            timestamp?: string;
                        }[];
                    }): _21.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _22.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Pairs;
                    fromPartial(object: {
                        pairs?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _22.Pairs;
                };
                Pair: {
                    encode(message: _22.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Pair;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _22.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _23.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.PageRequest;
                    fromPartial(object: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    }): _23.PageRequest;
                };
                PageResponse: {
                    encode(message: _23.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.PageResponse;
                    fromPartial(object: {
                        nextKey?: Uint8Array;
                        total?: any;
                    }): _23.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _24.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ListAllInterfacesRequest;
                    fromPartial(_: {}): _24.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _24.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ListAllInterfacesResponse;
                    fromPartial(object: {
                        interfaceNames?: string[];
                    }): _24.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _24.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ListImplementationsRequest;
                    fromPartial(object: {
                        interfaceName?: string;
                    }): _24.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _24.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ListImplementationsResponse;
                    fromPartial(object: {
                        implementationMessageNames?: string[];
                    }): _24.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _25.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AppDescriptor;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                        chain?: {
                            id?: string;
                        };
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                        configuration?: {
                            bech32AccountAddressPrefix?: string;
                        };
                        queryServices?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _25.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _25.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.TxDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        msgs?: {
                            msgTypeUrl?: string;
                        }[];
                    }): _25.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _25.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AuthnDescriptor;
                    fromPartial(object: {
                        signModes?: {
                            name?: string;
                            number?: number;
                            authnInfoProviderMethodFullname?: string;
                        }[];
                    }): _25.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _25.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.SigningModeDescriptor;
                    fromPartial(object: {
                        name?: string;
                        number?: number;
                        authnInfoProviderMethodFullname?: string;
                    }): _25.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _25.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ChainDescriptor;
                    fromPartial(object: {
                        id?: string;
                    }): _25.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _25.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.CodecDescriptor;
                    fromPartial(object: {
                        interfaces?: {
                            fullname?: string;
                            interfaceAcceptingMessages?: {
                                fullname?: string;
                                fieldDescriptorNames?: string[];
                            }[];
                            interfaceImplementers?: {
                                fullname?: string;
                                typeUrl?: string;
                            }[];
                        }[];
                    }): _25.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _25.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.InterfaceDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        interfaceAcceptingMessages?: {
                            fullname?: string;
                            fieldDescriptorNames?: string[];
                        }[];
                        interfaceImplementers?: {
                            fullname?: string;
                            typeUrl?: string;
                        }[];
                    }): _25.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _25.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.InterfaceImplementerDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        typeUrl?: string;
                    }): _25.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _25.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        fieldDescriptorNames?: string[];
                    }): _25.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _25.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ConfigurationDescriptor;
                    fromPartial(object: {
                        bech32AccountAddressPrefix?: string;
                    }): _25.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _25.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgDescriptor;
                    fromPartial(object: {
                        msgTypeUrl?: string;
                    }): _25.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _25.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetAuthnDescriptorRequest;
                    fromPartial(_: {}): _25.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _25.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetAuthnDescriptorResponse;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                    }): _25.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _25.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetChainDescriptorRequest;
                    fromPartial(_: {}): _25.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _25.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetChainDescriptorResponse;
                    fromPartial(object: {
                        chain?: {
                            id?: string;
                        };
                    }): _25.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _25.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetCodecDescriptorRequest;
                    fromPartial(_: {}): _25.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _25.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetCodecDescriptorResponse;
                    fromPartial(object: {
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                    }): _25.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _25.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetConfigurationDescriptorRequest;
                    fromPartial(_: {}): _25.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _25.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetConfigurationDescriptorResponse;
                    fromPartial(object: {
                        config?: {
                            bech32AccountAddressPrefix?: string;
                        };
                    }): _25.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _25.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetQueryServicesDescriptorRequest;
                    fromPartial(_: {}): _25.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _25.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetQueryServicesDescriptorResponse;
                    fromPartial(object: {
                        queries?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                    }): _25.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _25.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetTxDescriptorRequest;
                    fromPartial(_: {}): _25.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _25.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetTxDescriptorResponse;
                    fromPartial(object: {
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _25.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _25.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryServicesDescriptor;
                    fromPartial(object: {
                        queryServices?: {
                            fullname?: string;
                            isModule?: boolean;
                            methods?: {
                                name?: string;
                                fullQueryPath?: string;
                            }[];
                        }[];
                    }): _25.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _25.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryServiceDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        isModule?: boolean;
                        methods?: {
                            name?: string;
                            fullQueryPath?: string;
                        }[];
                    }): _25.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _25.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryMethodDescriptor;
                    fromPartial(object: {
                        name?: string;
                        fullQueryPath?: string;
                    }): _25.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _26.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Snapshot;
                    fromPartial(object: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: {
                            chunkHashes?: Uint8Array[];
                        };
                    }): _26.Snapshot;
                };
                Metadata: {
                    encode(message: _26.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Metadata;
                    fromPartial(object: {
                        chunkHashes?: Uint8Array[];
                    }): _26.Metadata;
                };
            };
        }
        namespace store {
            const v1beta1: {
                SnapshotItem: {
                    encode(message: _29.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SnapshotItem;
                    fromPartial(object: {
                        store?: {
                            name?: string;
                        };
                        iavl?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            version?: any;
                            height?: number;
                        };
                    }): _29.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _29.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SnapshotStoreItem;
                    fromPartial(object: {
                        name?: string;
                    }): _29.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _29.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SnapshotIAVLItem;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        version?: any;
                        height?: number;
                    }): _29.SnapshotIAVLItem;
                };
                StoreKVPair: {
                    encode(message: _28.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.StoreKVPair;
                    fromPartial(object: {
                        storeKey?: string;
                        delete?: boolean;
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _28.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _27.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.CommitInfo;
                    fromPartial(object: {
                        version?: any;
                        storeInfos?: {
                            name?: string;
                            commitId?: {
                                version?: any;
                                hash?: Uint8Array;
                            };
                        }[];
                    }): _27.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _27.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.StoreInfo;
                    fromPartial(object: {
                        name?: string;
                        commitId?: {
                            version?: any;
                            hash?: Uint8Array;
                        };
                    }): _27.StoreInfo;
                };
                CommitID: {
                    encode(message: _27.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.CommitID;
                    fromPartial(object: {
                        version?: any;
                        hash?: Uint8Array;
                    }): _27.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                QueryClientImpl: typeof _172.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _30.GetNodeInfoRequest): Promise<_30.GetNodeInfoResponse>;
                    getSyncing(request?: _30.GetSyncingRequest): Promise<_30.GetSyncingResponse>;
                    getLatestBlock(request?: _30.GetLatestBlockRequest): Promise<_30.GetLatestBlockResponse>;
                    getBlockByHeight(request: _30.GetBlockByHeightRequest): Promise<_30.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _30.GetLatestValidatorSetRequest): Promise<_30.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _30.GetValidatorSetByHeightRequest): Promise<_30.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _158.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    encode(message: _30.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetValidatorSetByHeightRequest;
                    fromPartial(object: {
                        height?: any;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _30.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _30.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetValidatorSetByHeightResponse;
                    fromPartial(object: {
                        blockHeight?: any;
                        validators?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _30.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _30.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetLatestValidatorSetRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _30.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _30.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetLatestValidatorSetResponse;
                    fromPartial(object: {
                        blockHeight?: any;
                        validators?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _30.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _30.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Validator;
                    fromPartial(object: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }): _30.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _30.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetBlockByHeightRequest;
                    fromPartial(object: {
                        height?: any;
                    }): _30.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _30.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetBlockByHeightResponse;
                    fromPartial(object: {
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        block?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            data?: {
                                txs?: Uint8Array[];
                            };
                            evidence?: {
                                evidence?: {
                                    duplicateVoteEvidence?: {
                                        voteA?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        voteB?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        totalVotingPower?: any;
                                        validatorPower?: any;
                                        timestamp?: Date;
                                    };
                                    lightClientAttackEvidence?: {
                                        conflictingBlock?: {
                                            signedHeader?: {
                                                header?: {
                                                    version?: {
                                                        block?: any;
                                                        app?: any;
                                                    };
                                                    chainId?: string;
                                                    height?: any;
                                                    time?: Date;
                                                    lastBlockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    lastCommitHash?: Uint8Array;
                                                    dataHash?: Uint8Array;
                                                    validatorsHash?: Uint8Array;
                                                    nextValidatorsHash?: Uint8Array;
                                                    consensusHash?: Uint8Array;
                                                    appHash?: Uint8Array;
                                                    lastResultsHash?: Uint8Array;
                                                    evidenceHash?: Uint8Array;
                                                    proposerAddress?: Uint8Array;
                                                };
                                                commit?: {
                                                    height?: any;
                                                    round?: number;
                                                    blockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    signatures?: {
                                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                        validatorAddress?: Uint8Array;
                                                        timestamp?: Date;
                                                        signature?: Uint8Array;
                                                    }[];
                                                };
                                            };
                                            validatorSet?: {
                                                validators?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: any;
                                                    proposerPriority?: any;
                                                }[];
                                                proposer?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: any;
                                                    proposerPriority?: any;
                                                };
                                                totalVotingPower?: any;
                                            };
                                        };
                                        commonHeight?: any;
                                        byzantineValidators?: {
                                            address?: Uint8Array;
                                            pubKey?: {
                                                ed25519?: Uint8Array;
                                                secp256k1?: Uint8Array;
                                            };
                                            votingPower?: any;
                                            proposerPriority?: any;
                                        }[];
                                        totalVotingPower?: any;
                                        timestamp?: Date;
                                    };
                                }[];
                            };
                            lastCommit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                    }): _30.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _30.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetLatestBlockRequest;
                    fromPartial(_: {}): _30.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _30.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetLatestBlockResponse;
                    fromPartial(object: {
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        block?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            data?: {
                                txs?: Uint8Array[];
                            };
                            evidence?: {
                                evidence?: {
                                    duplicateVoteEvidence?: {
                                        voteA?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        voteB?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        totalVotingPower?: any;
                                        validatorPower?: any;
                                        timestamp?: Date;
                                    };
                                    lightClientAttackEvidence?: {
                                        conflictingBlock?: {
                                            signedHeader?: {
                                                header?: {
                                                    version?: {
                                                        block?: any;
                                                        app?: any;
                                                    };
                                                    chainId?: string;
                                                    height?: any;
                                                    time?: Date;
                                                    lastBlockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    lastCommitHash?: Uint8Array;
                                                    dataHash?: Uint8Array;
                                                    validatorsHash?: Uint8Array;
                                                    nextValidatorsHash?: Uint8Array;
                                                    consensusHash?: Uint8Array;
                                                    appHash?: Uint8Array;
                                                    lastResultsHash?: Uint8Array;
                                                    evidenceHash?: Uint8Array;
                                                    proposerAddress?: Uint8Array;
                                                };
                                                commit?: {
                                                    height?: any;
                                                    round?: number;
                                                    blockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    signatures?: {
                                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                        validatorAddress?: Uint8Array;
                                                        timestamp?: Date;
                                                        signature?: Uint8Array;
                                                    }[];
                                                };
                                            };
                                            validatorSet?: {
                                                validators?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: any;
                                                    proposerPriority?: any;
                                                }[];
                                                proposer?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: any;
                                                    proposerPriority?: any;
                                                };
                                                totalVotingPower?: any;
                                            };
                                        };
                                        commonHeight?: any;
                                        byzantineValidators?: {
                                            address?: Uint8Array;
                                            pubKey?: {
                                                ed25519?: Uint8Array;
                                                secp256k1?: Uint8Array;
                                            };
                                            votingPower?: any;
                                            proposerPriority?: any;
                                        }[];
                                        totalVotingPower?: any;
                                        timestamp?: Date;
                                    };
                                }[];
                            };
                            lastCommit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                    }): _30.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _30.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetSyncingRequest;
                    fromPartial(_: {}): _30.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _30.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetSyncingResponse;
                    fromPartial(object: {
                        syncing?: boolean;
                    }): _30.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _30.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetNodeInfoRequest;
                    fromPartial(_: {}): _30.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _30.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetNodeInfoResponse;
                    fromPartial(object: {
                        defaultNodeInfo?: {
                            protocolVersion?: {
                                p2p?: any;
                                block?: any;
                                app?: any;
                            };
                            defaultNodeId?: string;
                            listenAddr?: string;
                            network?: string;
                            version?: string;
                            channels?: Uint8Array;
                            moniker?: string;
                            other?: {
                                txIndex?: string;
                                rpcAddress?: string;
                            };
                        };
                        applicationVersion?: {
                            name?: string;
                            appName?: string;
                            version?: string;
                            gitCommit?: string;
                            buildTags?: string;
                            goVersion?: string;
                            buildDeps?: {
                                path?: string;
                                version?: string;
                                sum?: string;
                            }[];
                            cosmosSdkVersion?: string;
                        };
                    }): _30.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _30.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.VersionInfo;
                    fromPartial(object: {
                        name?: string;
                        appName?: string;
                        version?: string;
                        gitCommit?: string;
                        buildTags?: string;
                        goVersion?: string;
                        buildDeps?: {
                            path?: string;
                            version?: string;
                            sum?: string;
                        }[];
                        cosmosSdkVersion?: string;
                    }): _30.VersionInfo;
                };
                Module: {
                    encode(message: _30.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Module;
                    fromPartial(object: {
                        path?: string;
                        version?: string;
                        sum?: string;
                    }): _30.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _31.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Coin;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _31.Coin;
            };
            DecCoin: {
                encode(message: _31.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.DecCoin;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _31.DecCoin;
            };
            IntProto: {
                encode(message: _31.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.IntProto;
                fromPartial(object: {
                    int?: string;
                }): _31.IntProto;
            };
            DecProto: {
                encode(message: _31.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.DecProto;
                fromPartial(object: {
                    dec?: string;
                }): _31.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _33.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GenesisOwners;
                fromPartial(object: {
                    index?: any;
                    indexOwners?: {
                        owners?: {
                            module?: string;
                            name?: string;
                        }[];
                    };
                }): _33.GenesisOwners;
            };
            GenesisState: {
                encode(message: _33.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GenesisState;
                fromPartial(object: {
                    index?: any;
                    owners?: {
                        index?: any;
                        indexOwners?: {
                            owners?: {
                                module?: string;
                                name?: string;
                            }[];
                        };
                    }[];
                }): _33.GenesisState;
            };
            Capability: {
                encode(message: _32.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.Capability;
                fromPartial(object: {
                    index?: any;
                }): _32.Capability;
            };
            Owner: {
                encode(message: _32.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.Owner;
                fromPartial(object: {
                    module?: string;
                    name?: string;
                }): _32.Owner;
            };
            CapabilityOwners: {
                encode(message: _32.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.CapabilityOwners;
                fromPartial(object: {
                    owners?: {
                        module?: string;
                        name?: string;
                    }[];
                }): _32.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _185.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _35.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _35.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _35.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _35.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _35.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _35.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _35.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _35.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgVerifyInvariant;
                fromPartial(object: {
                    sender?: string;
                    invariantModuleName?: string;
                    invariantRoute?: string;
                }): _35.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _35.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgVerifyInvariantResponse;
                fromPartial(_: {}): _35.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _34.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.GenesisState;
                fromPartial(object: {
                    constantFee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _34.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _36.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _36.PubKey;
            };
            PrivKey: {
                encode(message: _36.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.PrivKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _36.PrivKey;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _37.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.LegacyAminoPubKey;
                fromPartial(object: {
                    threshold?: number;
                    publicKeys?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _37.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _38.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _38.PubKey;
            };
            PrivKey: {
                encode(message: _38.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.PrivKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _38.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _39.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _39.PubKey;
            };
            PrivKey: {
                encode(message: _39.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.PrivKey;
                fromPartial(object: {
                    secret?: Uint8Array;
                }): _39.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _186.MsgClientImpl;
            QueryClientImpl: typeof _173.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _42.QueryParamsRequest): Promise<_42.QueryParamsResponse>;
                validatorOutstandingRewards(request: _42.QueryValidatorOutstandingRewardsRequest): Promise<_42.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _42.QueryValidatorCommissionRequest): Promise<_42.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _42.QueryValidatorSlashesRequest): Promise<_42.QueryValidatorSlashesResponse>;
                delegationRewards(request: _42.QueryDelegationRewardsRequest): Promise<_42.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _42.QueryDelegationTotalRewardsRequest): Promise<_42.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _42.QueryDelegatorValidatorsRequest): Promise<_42.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _42.QueryDelegatorWithdrawAddressRequest): Promise<_42.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _42.QueryCommunityPoolRequest): Promise<_42.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _159.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _43.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _43.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _43.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _43.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _43.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _43.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _43.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _43.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _43.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _43.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _43.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _43.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _43.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _43.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _43.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _43.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _43.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _43.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _43.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _43.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _43.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _43.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _43.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _43.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _43.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _43.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _43.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _43.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _43.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgSetWithdrawAddress;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _43.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _43.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgSetWithdrawAddressResponse;
                fromPartial(_: {}): _43.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _43.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgWithdrawDelegatorReward;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _43.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(_: _43.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: {}): _43.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _43.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgWithdrawValidatorCommission;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _43.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(_: _43.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: {}): _43.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _43.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgFundCommunityPool;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    depositor?: string;
                }): _43.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _43.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgFundCommunityPoolResponse;
                fromPartial(_: {}): _43.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _42.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryParamsRequest;
                fromPartial(_: {}): _42.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _42.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                }): _42.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _42.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _42.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _42.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _42.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _42.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryValidatorCommissionRequest;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _42.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _42.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryValidatorCommissionResponse;
                fromPartial(object: {
                    commission?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _42.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _42.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryValidatorSlashesRequest;
                fromPartial(object: {
                    validatorAddress?: string;
                    startingHeight?: any;
                    endingHeight?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _42.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _42.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryValidatorSlashesResponse;
                fromPartial(object: {
                    slashes?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _42.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _42.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryDelegationRewardsRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _42.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _42.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryDelegationRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _42.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _42.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryDelegationTotalRewardsRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _42.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _42.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryDelegationTotalRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        validatorAddress?: string;
                        reward?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _42.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _42.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryDelegatorValidatorsRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _42.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _42.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryDelegatorValidatorsResponse;
                fromPartial(object: {
                    validators?: string[];
                }): _42.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _42.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _42.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _42.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: {
                    withdrawAddress?: string;
                }): _42.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _42.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryCommunityPoolRequest;
                fromPartial(_: {}): _42.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _42.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryCommunityPoolResponse;
                fromPartial(object: {
                    pool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _42.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _41.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.DelegatorWithdrawInfo;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _41.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _41.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ValidatorOutstandingRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    outstandingRewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _41.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _41.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    accumulated?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _41.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _41.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ValidatorHistoricalRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    period?: any;
                    rewards?: {
                        cumulativeRewardRatio?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        referenceCount?: number;
                    };
                }): _41.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _41.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ValidatorCurrentRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        period?: any;
                    };
                }): _41.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _41.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.DelegatorStartingInfoRecord;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    startingInfo?: {
                        previousPeriod?: any;
                        stake?: string;
                        height?: any;
                    };
                }): _41.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _41.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ValidatorSlashEventRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    height?: any;
                    period?: any;
                    validatorSlashEvent?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    };
                }): _41.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _41.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GenesisState;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                    feePool?: {
                        communityPool?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    delegatorWithdrawInfos?: {
                        delegatorAddress?: string;
                        withdrawAddress?: string;
                    }[];
                    previousProposer?: string;
                    outstandingRewards?: {
                        validatorAddress?: string;
                        outstandingRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    validatorAccumulatedCommissions?: {
                        validatorAddress?: string;
                        accumulated?: {
                            commission?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                    validatorHistoricalRewards?: {
                        validatorAddress?: string;
                        period?: any;
                        rewards?: {
                            cumulativeRewardRatio?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            referenceCount?: number;
                        };
                    }[];
                    validatorCurrentRewards?: {
                        validatorAddress?: string;
                        rewards?: {
                            rewards?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            period?: any;
                        };
                    }[];
                    delegatorStartingInfos?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        startingInfo?: {
                            previousPeriod?: any;
                            stake?: string;
                            height?: any;
                        };
                    }[];
                    validatorSlashEvents?: {
                        validatorAddress?: string;
                        height?: any;
                        period?: any;
                        validatorSlashEvent?: {
                            validatorPeriod?: any;
                            fraction?: string;
                        };
                    }[];
                }): _41.GenesisState;
            };
            Params: {
                encode(message: _40.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Params;
                fromPartial(object: {
                    communityTax?: string;
                    baseProposerReward?: string;
                    bonusProposerReward?: string;
                    withdrawAddrEnabled?: boolean;
                }): _40.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _40.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorHistoricalRewards;
                fromPartial(object: {
                    cumulativeRewardRatio?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    referenceCount?: number;
                }): _40.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _40.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorCurrentRewards;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    period?: any;
                }): _40.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _40.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorAccumulatedCommission;
                fromPartial(object: {
                    commission?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _40.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _40.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorOutstandingRewards;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _40.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _40.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorSlashEvent;
                fromPartial(object: {
                    validatorPeriod?: any;
                    fraction?: string;
                }): _40.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _40.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorSlashEvents;
                fromPartial(object: {
                    validatorSlashEvents?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    }[];
                }): _40.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _40.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.FeePool;
                fromPartial(object: {
                    communityPool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _40.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _40.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.CommunityPoolSpendProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _40.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _40.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.DelegatorStartingInfo;
                fromPartial(object: {
                    previousPeriod?: any;
                    stake?: string;
                    height?: any;
                }): _40.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _40.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.DelegationDelegatorReward;
                fromPartial(object: {
                    validatorAddress?: string;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _40.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _40.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: string;
                    deposit?: string;
                }): _40.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _187.MsgClientImpl;
            QueryClientImpl: typeof _174.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _46.QueryEvidenceRequest): Promise<_46.QueryEvidenceResponse>;
                allEvidence(request?: _46.QueryAllEvidenceRequest): Promise<_46.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _160.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _47.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _47.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _47.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _47.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _47.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _47.MsgSubmitEvidence) => {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ submitter, evidence }: {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _47.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _47.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgSubmitEvidence;
                fromPartial(object: {
                    submitter?: string;
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _47.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _47.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgSubmitEvidenceResponse;
                fromPartial(object: {
                    hash?: Uint8Array;
                }): _47.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _46.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryEvidenceRequest;
                fromPartial(object: {
                    evidenceHash?: Uint8Array;
                }): _46.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _46.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryEvidenceResponse;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _46.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _46.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryAllEvidenceRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _46.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _46.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryAllEvidenceResponse;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _46.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _45.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GenesisState;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _45.GenesisState;
            };
            Equivocation: {
                encode(message: _44.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Equivocation;
                fromPartial(object: {
                    height?: any;
                    time?: Date;
                    power?: any;
                    consensusAddress?: string;
                }): _44.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _188.MsgClientImpl;
            QueryClientImpl: typeof _175.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _50.QueryAllowanceRequest): Promise<_50.QueryAllowanceResponse>;
                allowances(request: _50.QueryAllowancesRequest): Promise<_50.QueryAllowancesResponse>;
            };
            LCDQueryClient: typeof _161.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _51.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _51.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _51.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _51.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _51.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _51.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _51.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _51.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _51.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _51.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _51.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _51.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _51.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _51.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _51.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgGrantAllowance;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _51.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _51.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgGrantAllowanceResponse;
                fromPartial(_: {}): _51.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _51.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgRevokeAllowance;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _51.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _51.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgRevokeAllowanceResponse;
                fromPartial(_: {}): _51.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _50.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryAllowanceRequest;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _50.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _50.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryAllowanceResponse;
                fromPartial(object: {
                    allowance?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _50.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _50.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryAllowancesRequest;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _50.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _50.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryAllowancesResponse;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _50.QueryAllowancesResponse;
            };
            GenesisState: {
                encode(message: _49.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.GenesisState;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _49.GenesisState;
            };
            BasicAllowance: {
                encode(message: _48.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.BasicAllowance;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    expiration?: Date;
                }): _48.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _48.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.PeriodicAllowance;
                fromPartial(object: {
                    basic?: {
                        spendLimit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        expiration?: Date;
                    };
                    period?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    periodSpendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    periodCanSpend?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    periodReset?: Date;
                }): _48.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _48.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.AllowedMsgAllowance;
                fromPartial(object: {
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    allowedMessages?: string[];
                }): _48.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _48.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Grant;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _48.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _52.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.GenesisState;
                fromPartial(object: {
                    genTxs?: Uint8Array[];
                }): _52.GenesisState;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _189.MsgClientImpl;
            QueryClientImpl: typeof _176.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _55.QueryProposalRequest): Promise<_55.QueryProposalResponse>;
                proposals(request: _55.QueryProposalsRequest): Promise<_55.QueryProposalsResponse>;
                vote(request: _55.QueryVoteRequest): Promise<_55.QueryVoteResponse>;
                votes(request: _55.QueryVotesRequest): Promise<_55.QueryVotesResponse>;
                params(request: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                deposit(request: _55.QueryDepositRequest): Promise<_55.QueryDepositResponse>;
                deposits(request: _55.QueryDepositsRequest): Promise<_55.QueryDepositsResponse>;
                tallyResult(request: _55.QueryTallyResultRequest): Promise<_55.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _162.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _56.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _56.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _56.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _56.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _56.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _56.MsgSubmitProposal;
                    };
                    vote(value: _56.MsgVote): {
                        typeUrl: string;
                        value: _56.MsgVote;
                    };
                    voteWeighted(value: _56.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _56.MsgVoteWeighted;
                    };
                    deposit(value: _56.MsgDeposit): {
                        typeUrl: string;
                        value: _56.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _56.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _56.MsgSubmitProposal;
                    };
                    vote(value: _56.MsgVote): {
                        typeUrl: string;
                        value: _56.MsgVote;
                    };
                    voteWeighted(value: _56.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _56.MsgVoteWeighted;
                    };
                    deposit(value: _56.MsgDeposit): {
                        typeUrl: string;
                        value: _56.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _56.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _56.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _56.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _56.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _56.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _56.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _56.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _56.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _56.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgSubmitProposal;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                }): _56.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _56.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgSubmitProposalResponse;
                fromPartial(object: {
                    proposalId?: any;
                }): _56.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _56.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgVote;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _54.VoteOption;
                }): _56.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _56.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgVoteResponse;
                fromPartial(_: {}): _56.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _56.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgVoteWeighted;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    options?: {
                        option?: _54.VoteOption;
                        weight?: string;
                    }[];
                }): _56.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _56.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgVoteWeightedResponse;
                fromPartial(_: {}): _56.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _56.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgDeposit;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _56.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _56.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgDepositResponse;
                fromPartial(_: {}): _56.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _55.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryProposalRequest;
                fromPartial(object: {
                    proposalId?: any;
                }): _55.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _55.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryProposalResponse;
                fromPartial(object: {
                    proposal?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _54.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    };
                }): _55.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _55.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryProposalsRequest;
                fromPartial(object: {
                    proposalStatus?: _54.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _55.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _55.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryProposalsResponse;
                fromPartial(object: {
                    proposals?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _54.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _55.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _55.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryVoteRequest;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _55.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _55.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryVoteResponse;
                fromPartial(object: {
                    vote?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _54.VoteOption;
                        options?: {
                            option?: _54.VoteOption;
                            weight?: string;
                        }[];
                    };
                }): _55.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _55.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryVotesRequest;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _55.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _55.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryVotesResponse;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _54.VoteOption;
                        options?: {
                            option?: _54.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _55.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _55.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryParamsRequest;
                fromPartial(object: {
                    paramsType?: string;
                }): _55.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _55.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryParamsResponse;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _55.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _55.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryDepositRequest;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                }): _55.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _55.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryDepositResponse;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _55.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _55.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryDepositsRequest;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _55.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _55.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryDepositsResponse;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _55.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _55.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryTallyResultRequest;
                fromPartial(object: {
                    proposalId?: any;
                }): _55.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _55.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryTallyResultResponse;
                fromPartial(object: {
                    tally?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                }): _55.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _54.VoteOption;
            voteOptionToJSON(object: _54.VoteOption): string;
            proposalStatusFromJSON(object: any): _54.ProposalStatus;
            proposalStatusToJSON(object: _54.ProposalStatus): string;
            VoteOption: typeof _54.VoteOption;
            VoteOptionSDKType: typeof _54.VoteOptionSDKType;
            ProposalStatus: typeof _54.ProposalStatus;
            ProposalStatusSDKType: typeof _54.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _54.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.WeightedVoteOption;
                fromPartial(object: {
                    option?: _54.VoteOption;
                    weight?: string;
                }): _54.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _54.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.TextProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _54.TextProposal;
            };
            Deposit: {
                encode(message: _54.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.Deposit;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _54.Deposit;
            };
            Proposal: {
                encode(message: _54.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.Proposal;
                fromPartial(object: {
                    proposalId?: any;
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    status?: _54.ProposalStatus;
                    finalTallyResult?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                    submitTime?: Date;
                    depositEndTime?: Date;
                    totalDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    votingStartTime?: Date;
                    votingEndTime?: Date;
                }): _54.Proposal;
            };
            TallyResult: {
                encode(message: _54.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.TallyResult;
                fromPartial(object: {
                    yes?: string;
                    abstain?: string;
                    no?: string;
                    noWithVeto?: string;
                }): _54.TallyResult;
            };
            Vote: {
                encode(message: _54.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.Vote;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _54.VoteOption;
                    options?: {
                        option?: _54.VoteOption;
                        weight?: string;
                    }[];
                }): _54.Vote;
            };
            DepositParams: {
                encode(message: _54.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.DepositParams;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _54.DepositParams;
            };
            VotingParams: {
                encode(message: _54.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.VotingParams;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _54.VotingParams;
            };
            TallyParams: {
                encode(message: _54.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.TallyParams;
                fromPartial(object: {
                    quorum?: Uint8Array;
                    threshold?: Uint8Array;
                    vetoThreshold?: Uint8Array;
                }): _54.TallyParams;
            };
            GenesisState: {
                encode(message: _53.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.GenesisState;
                fromPartial(object: {
                    startingProposalId?: any;
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _54.VoteOption;
                        options?: {
                            option?: _54.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    proposals?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _54.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    }[];
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _53.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _177.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _59.QueryParamsRequest): Promise<_59.QueryParamsResponse>;
                inflation(request?: _59.QueryInflationRequest): Promise<_59.QueryInflationResponse>;
                annualProvisions(request?: _59.QueryAnnualProvisionsRequest): Promise<_59.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _163.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _59.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryParamsRequest;
                fromPartial(_: {}): _59.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _59.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        inflationRateChange?: string;
                        inflationMax?: string;
                        inflationMin?: string;
                        goalBonded?: string;
                        blocksPerYear?: any;
                    };
                }): _59.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _59.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryInflationRequest;
                fromPartial(_: {}): _59.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _59.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryInflationResponse;
                fromPartial(object: {
                    inflation?: Uint8Array;
                }): _59.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _59.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryAnnualProvisionsRequest;
                fromPartial(_: {}): _59.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _59.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryAnnualProvisionsResponse;
                fromPartial(object: {
                    annualProvisions?: Uint8Array;
                }): _59.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _58.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Minter;
                fromPartial(object: {
                    inflation?: string;
                    annualProvisions?: string;
                }): _58.Minter;
            };
            Params: {
                encode(message: _58.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Params;
                fromPartial(object: {
                    mintDenom?: string;
                    inflationRateChange?: string;
                    inflationMax?: string;
                    inflationMin?: string;
                    goalBonded?: string;
                    blocksPerYear?: any;
                }): _58.Params;
            };
            GenesisState: {
                encode(message: _57.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.GenesisState;
                fromPartial(object: {
                    minter?: {
                        inflation?: string;
                        annualProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        inflationRateChange?: string;
                        inflationMax?: string;
                        inflationMin?: string;
                        goalBonded?: string;
                        blocksPerYear?: any;
                    };
                }): _57.GenesisState;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _178.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _164.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _61.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryParamsRequest;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                }): _61.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _61.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryParamsResponse;
                fromPartial(object: {
                    param?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    };
                }): _61.QueryParamsResponse;
            };
            ParameterChangeProposal: {
                encode(message: _60.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.ParameterChangeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    changes?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    }[];
                }): _60.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _60.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.ParamChange;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                    value?: string;
                }): _60.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _190.MsgClientImpl;
            QueryClientImpl: typeof _179.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _63.QueryParamsRequest): Promise<_63.QueryParamsResponse>;
                signingInfo(request: _63.QuerySigningInfoRequest): Promise<_63.QuerySigningInfoResponse>;
                signingInfos(request?: _63.QuerySigningInfosRequest): Promise<_63.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _165.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _65.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _65.MsgUnjail): {
                        typeUrl: string;
                        value: _65.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _65.MsgUnjail): {
                        typeUrl: string;
                        value: _65.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _65.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _65.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _65.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgUnjail;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _65.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _65.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgUnjailResponse;
                fromPartial(_: {}): _65.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _64.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ValidatorSigningInfo;
                fromPartial(object: {
                    address?: string;
                    startHeight?: any;
                    indexOffset?: any;
                    jailedUntil?: Date;
                    tombstoned?: boolean;
                    missedBlocksCounter?: any;
                }): _64.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _64.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Params;
                fromPartial(object: {
                    signedBlocksWindow?: any;
                    minSignedPerWindow?: Uint8Array;
                    downtimeJailDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    slashFractionDoubleSign?: Uint8Array;
                    slashFractionDowntime?: Uint8Array;
                }): _64.Params;
            };
            QueryParamsRequest: {
                encode(_: _63.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryParamsRequest;
                fromPartial(_: {}): _63.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _63.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        signedBlocksWindow?: any;
                        minSignedPerWindow?: Uint8Array;
                        downtimeJailDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        slashFractionDoubleSign?: Uint8Array;
                        slashFractionDowntime?: Uint8Array;
                    };
                }): _63.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _63.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QuerySigningInfoRequest;
                fromPartial(object: {
                    consAddress?: string;
                }): _63.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _63.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QuerySigningInfoResponse;
                fromPartial(object: {
                    valSigningInfo?: {
                        address?: string;
                        startHeight?: any;
                        indexOffset?: any;
                        jailedUntil?: Date;
                        tombstoned?: boolean;
                        missedBlocksCounter?: any;
                    };
                }): _63.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _63.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QuerySigningInfosRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _63.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _63.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QuerySigningInfosResponse;
                fromPartial(object: {
                    info?: {
                        address?: string;
                        startHeight?: any;
                        indexOffset?: any;
                        jailedUntil?: Date;
                        tombstoned?: boolean;
                        missedBlocksCounter?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _63.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _62.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GenesisState;
                fromPartial(object: {
                    params?: {
                        signedBlocksWindow?: any;
                        minSignedPerWindow?: Uint8Array;
                        downtimeJailDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        slashFractionDoubleSign?: Uint8Array;
                        slashFractionDowntime?: Uint8Array;
                    };
                    signingInfos?: {
                        address?: string;
                        validatorSigningInfo?: {
                            address?: string;
                            startHeight?: any;
                            indexOffset?: any;
                            jailedUntil?: Date;
                            tombstoned?: boolean;
                            missedBlocksCounter?: any;
                        };
                    }[];
                    missedBlocks?: {
                        address?: string;
                        missedBlocks?: {
                            index?: any;
                            missed?: boolean;
                        }[];
                    }[];
                }): _62.GenesisState;
            };
            SigningInfo: {
                encode(message: _62.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.SigningInfo;
                fromPartial(object: {
                    address?: string;
                    validatorSigningInfo?: {
                        address?: string;
                        startHeight?: any;
                        indexOffset?: any;
                        jailedUntil?: Date;
                        tombstoned?: boolean;
                        missedBlocksCounter?: any;
                    };
                }): _62.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _62.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ValidatorMissedBlocks;
                fromPartial(object: {
                    address?: string;
                    missedBlocks?: {
                        index?: any;
                        missed?: boolean;
                    }[];
                }): _62.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _62.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MissedBlock;
                fromPartial(object: {
                    index?: any;
                    missed?: boolean;
                }): _62.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _191.MsgClientImpl;
            QueryClientImpl: typeof _180.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _68.QueryValidatorsRequest): Promise<_68.QueryValidatorsResponse>;
                validator(request: _68.QueryValidatorRequest): Promise<_68.QueryValidatorResponse>;
                validatorDelegations(request: _68.QueryValidatorDelegationsRequest): Promise<_68.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _68.QueryValidatorUnbondingDelegationsRequest): Promise<_68.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _68.QueryDelegationRequest): Promise<_68.QueryDelegationResponse>;
                unbondingDelegation(request: _68.QueryUnbondingDelegationRequest): Promise<_68.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _68.QueryDelegatorDelegationsRequest): Promise<_68.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _68.QueryDelegatorUnbondingDelegationsRequest): Promise<_68.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _68.QueryRedelegationsRequest): Promise<_68.QueryRedelegationsResponse>;
                delegatorValidators(request: _68.QueryDelegatorValidatorsRequest): Promise<_68.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _68.QueryDelegatorValidatorRequest): Promise<_68.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _68.QueryHistoricalInfoRequest): Promise<_68.QueryHistoricalInfoResponse>;
                pool(request?: _68.QueryPoolRequest): Promise<_68.QueryPoolResponse>;
                params(request?: _68.QueryParamsRequest): Promise<_68.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _166.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _70.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _70.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _70.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _70.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _70.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _70.MsgCreateValidator): {
                        typeUrl: string;
                        value: _70.MsgCreateValidator;
                    };
                    editValidator(value: _70.MsgEditValidator): {
                        typeUrl: string;
                        value: _70.MsgEditValidator;
                    };
                    delegate(value: _70.MsgDelegate): {
                        typeUrl: string;
                        value: _70.MsgDelegate;
                    };
                    beginRedelegate(value: _70.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _70.MsgBeginRedelegate;
                    };
                    undelegate(value: _70.MsgUndelegate): {
                        typeUrl: string;
                        value: _70.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _70.MsgCreateValidator): {
                        typeUrl: string;
                        value: _70.MsgCreateValidator;
                    };
                    editValidator(value: _70.MsgEditValidator): {
                        typeUrl: string;
                        value: _70.MsgEditValidator;
                    };
                    delegate(value: _70.MsgDelegate): {
                        typeUrl: string;
                        value: _70.MsgDelegate;
                    };
                    beginRedelegate(value: _70.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _70.MsgBeginRedelegate;
                    };
                    undelegate(value: _70.MsgUndelegate): {
                        typeUrl: string;
                        value: _70.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _70.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _70.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _70.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _70.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _70.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _70.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _70.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _70.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _70.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _70.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _70.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgCreateValidator;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    commission?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    minSelfDelegation?: string;
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    pubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    value?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _70.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _70.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgCreateValidatorResponse;
                fromPartial(_: {}): _70.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _70.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgEditValidator;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    validatorAddress?: string;
                    commissionRate?: string;
                    minSelfDelegation?: string;
                }): _70.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _70.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgEditValidatorResponse;
                fromPartial(_: {}): _70.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _70.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgDelegate;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _70.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _70.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgDelegateResponse;
                fromPartial(_: {}): _70.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _70.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgBeginRedelegate;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _70.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _70.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgBeginRedelegateResponse;
                fromPartial(object: {
                    completionTime?: Date;
                }): _70.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _70.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgUndelegate;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _70.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _70.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgUndelegateResponse;
                fromPartial(object: {
                    completionTime?: Date;
                }): _70.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _69.BondStatus;
            bondStatusToJSON(object: _69.BondStatus): string;
            BondStatus: typeof _69.BondStatus;
            BondStatusSDKType: typeof _69.BondStatusSDKType;
            HistoricalInfo: {
                encode(message: _69.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.HistoricalInfo;
                fromPartial(object: {
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    valset?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _69.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                }): _69.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _69.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.CommissionRates;
                fromPartial(object: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                }): _69.CommissionRates;
            };
            Commission: {
                encode(message: _69.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Commission;
                fromPartial(object: {
                    commissionRates?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    updateTime?: Date;
                }): _69.Commission;
            };
            Description: {
                encode(message: _69.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Description;
                fromPartial(object: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    securityContact?: string;
                    details?: string;
                }): _69.Description;
            };
            Validator: {
                encode(message: _69.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Validator;
                fromPartial(object: {
                    operatorAddress?: string;
                    consensusPubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    jailed?: boolean;
                    status?: _69.BondStatus;
                    tokens?: string;
                    delegatorShares?: string;
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    unbondingHeight?: any;
                    unbondingTime?: Date;
                    commission?: {
                        commissionRates?: {
                            rate?: string;
                            maxRate?: string;
                            maxChangeRate?: string;
                        };
                        updateTime?: Date;
                    };
                    minSelfDelegation?: string;
                }): _69.Validator;
            };
            ValAddresses: {
                encode(message: _69.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.ValAddresses;
                fromPartial(object: {
                    addresses?: string[];
                }): _69.ValAddresses;
            };
            DVPair: {
                encode(message: _69.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.DVPair;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _69.DVPair;
            };
            DVPairs: {
                encode(message: _69.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.DVPairs;
                fromPartial(object: {
                    pairs?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                    }[];
                }): _69.DVPairs;
            };
            DVVTriplet: {
                encode(message: _69.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.DVVTriplet;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                }): _69.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _69.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.DVVTriplets;
                fromPartial(object: {
                    triplets?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                    }[];
                }): _69.DVVTriplets;
            };
            Delegation: {
                encode(message: _69.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Delegation;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    shares?: string;
                }): _69.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _69.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.UnbondingDelegation;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    entries?: {
                        creationHeight?: any;
                        completionTime?: Date;
                        initialBalance?: string;
                        balance?: string;
                    }[];
                }): _69.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _69.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.UnbondingDelegationEntry;
                fromPartial(object: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    balance?: string;
                }): _69.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _69.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.RedelegationEntry;
                fromPartial(object: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                }): _69.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _69.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Redelegation;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    entries?: {
                        creationHeight?: any;
                        completionTime?: Date;
                        initialBalance?: string;
                        sharesDst?: string;
                    }[];
                }): _69.Redelegation;
            };
            Params: {
                encode(message: _69.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Params;
                fromPartial(object: {
                    unbondingTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    maxValidators?: number;
                    maxEntries?: number;
                    historicalEntries?: number;
                    bondDenom?: string;
                }): _69.Params;
            };
            DelegationResponse: {
                encode(message: _69.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.DelegationResponse;
                fromPartial(object: {
                    delegation?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    };
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _69.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _69.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.RedelegationEntryResponse;
                fromPartial(object: {
                    redelegationEntry?: {
                        creationHeight?: any;
                        completionTime?: Date;
                        initialBalance?: string;
                        sharesDst?: string;
                    };
                    balance?: string;
                }): _69.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _69.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.RedelegationResponse;
                fromPartial(object: {
                    redelegation?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    };
                    entries?: {
                        redelegationEntry?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        };
                        balance?: string;
                    }[];
                }): _69.RedelegationResponse;
            };
            Pool: {
                encode(message: _69.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Pool;
                fromPartial(object: {
                    notBondedTokens?: string;
                    bondedTokens?: string;
                }): _69.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _68.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryValidatorsRequest;
                fromPartial(object: {
                    status?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _68.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _68.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryValidatorsResponse;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _69.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _68.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _68.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryValidatorRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _68.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _68.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryValidatorResponse;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _69.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    };
                }): _68.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _68.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryValidatorDelegationsRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _68.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _68.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryValidatorDelegationsResponse;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _68.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _68.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _68.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _68.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _68.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _68.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDelegationRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _68.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _68.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDelegationResponse;
                fromPartial(object: {
                    delegationResponse?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _68.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _68.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryUnbondingDelegationRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _68.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _68.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryUnbondingDelegationResponse;
                fromPartial(object: {
                    unbond?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    };
                }): _68.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _68.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDelegatorDelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _68.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _68.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDelegatorDelegationsResponse;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _68.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _68.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _68.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _68.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _68.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _68.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryRedelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    srcValidatorAddr?: string;
                    dstValidatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _68.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _68.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryRedelegationsResponse;
                fromPartial(object: {
                    redelegationResponses?: {
                        redelegation?: {
                            delegatorAddress?: string;
                            validatorSrcAddress?: string;
                            validatorDstAddress?: string;
                            entries?: {
                                creationHeight?: any;
                                completionTime?: Date;
                                initialBalance?: string;
                                sharesDst?: string;
                            }[];
                        };
                        entries?: {
                            redelegationEntry?: {
                                creationHeight?: any;
                                completionTime?: Date;
                                initialBalance?: string;
                                sharesDst?: string;
                            };
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _68.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _68.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDelegatorValidatorsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _68.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _68.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDelegatorValidatorsResponse;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _69.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _68.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _68.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDelegatorValidatorRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _68.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _68.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDelegatorValidatorResponse;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _69.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    };
                }): _68.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _68.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryHistoricalInfoRequest;
                fromPartial(object: {
                    height?: any;
                }): _68.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _68.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryHistoricalInfoResponse;
                fromPartial(object: {
                    hist?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chainId?: string;
                            height?: any;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        valset?: {
                            operatorAddress?: string;
                            consensusPubkey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            jailed?: boolean;
                            status?: _69.BondStatus;
                            tokens?: string;
                            delegatorShares?: string;
                            description?: {
                                moniker?: string;
                                identity?: string;
                                website?: string;
                                securityContact?: string;
                                details?: string;
                            };
                            unbondingHeight?: any;
                            unbondingTime?: Date;
                            commission?: {
                                commissionRates?: {
                                    rate?: string;
                                    maxRate?: string;
                                    maxChangeRate?: string;
                                };
                                updateTime?: Date;
                            };
                            minSelfDelegation?: string;
                        }[];
                    };
                }): _68.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _68.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryPoolRequest;
                fromPartial(_: {}): _68.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _68.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryPoolResponse;
                fromPartial(object: {
                    pool?: {
                        notBondedTokens?: string;
                        bondedTokens?: string;
                    };
                }): _68.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _68.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryParamsRequest;
                fromPartial(_: {}): _68.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _68.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                    };
                }): _68.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _67.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.GenesisState;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                    };
                    lastTotalPower?: Uint8Array;
                    lastValidatorPowers?: {
                        address?: string;
                        power?: any;
                    }[];
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _69.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    delegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    }[];
                    unbondingDelegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    redelegations?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    }[];
                    exported?: boolean;
                }): _67.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _67.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.LastValidatorPower;
                fromPartial(object: {
                    address?: string;
                    power?: any;
                }): _67.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _66.AuthorizationType;
            authorizationTypeToJSON(object: _66.AuthorizationType): string;
            AuthorizationType: typeof _66.AuthorizationType;
            AuthorizationTypeSDKType: typeof _66.AuthorizationTypeSDKType;
            StakeAuthorization: {
                encode(message: _66.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.StakeAuthorization;
                fromPartial(object: {
                    maxTokens?: {
                        denom?: string;
                        amount?: string;
                    };
                    allowList?: {
                        address?: string[];
                    };
                    denyList?: {
                        address?: string[];
                    };
                    authorizationType?: _66.AuthorizationType;
                }): _66.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _66.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.StakeAuthorization_Validators;
                fromPartial(object: {
                    address?: string[];
                }): _66.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _71.SignMode;
                signModeToJSON(object: _71.SignMode): string;
                SignMode: typeof _71.SignMode;
                SignModeSDKType: typeof _71.SignModeSDKType;
                SignatureDescriptors: {
                    encode(message: _71.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.SignatureDescriptors;
                    fromPartial(object: {
                        signatures?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            data?: {
                                single?: {
                                    mode?: _71.SignMode;
                                    signature?: Uint8Array;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    signatures?: any[];
                                };
                            };
                            sequence?: any;
                        }[];
                    }): _71.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _71.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.SignatureDescriptor;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        data?: {
                            single?: {
                                mode?: _71.SignMode;
                                signature?: Uint8Array;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                signatures?: any[];
                            };
                        };
                        sequence?: any;
                    }): _71.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _71.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.SignatureDescriptor_Data;
                    fromPartial(object: {
                        single?: {
                            mode?: _71.SignMode;
                            signature?: Uint8Array;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            signatures?: any[];
                        };
                    }): _71.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _71.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.SignatureDescriptor_Data_Single;
                    fromPartial(object: {
                        mode?: _71.SignMode;
                        signature?: Uint8Array;
                    }): _71.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _71.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.SignatureDescriptor_Data_Multi;
                    fromPartial(object: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        signatures?: any[];
                    }): _71.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _181.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _72.SimulateRequest): Promise<_72.SimulateResponse>;
                getTx(request: _72.GetTxRequest): Promise<_72.GetTxResponse>;
                broadcastTx(request: _72.BroadcastTxRequest): Promise<_72.BroadcastTxResponse>;
                getTxsEvent(request: _72.GetTxsEventRequest): Promise<_72.GetTxsEventResponse>;
            };
            LCDQueryClient: typeof _167.LCDQueryClient;
            Tx: {
                encode(message: _73.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Tx;
                fromPartial(object: {
                    body?: {
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        memo?: string;
                        timeoutHeight?: any;
                        extensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        nonCriticalExtensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                    authInfo?: {
                        signerInfos?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            modeInfo?: {
                                single?: {
                                    mode?: _71.SignMode;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    modeInfos?: any[];
                                };
                            };
                            sequence?: any;
                        }[];
                        fee?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            gasLimit?: any;
                            payer?: string;
                            granter?: string;
                        };
                    };
                    signatures?: Uint8Array[];
                }): _73.Tx;
            };
            TxRaw: {
                encode(message: _73.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.TxRaw;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    signatures?: Uint8Array[];
                }): _73.TxRaw;
            };
            SignDoc: {
                encode(message: _73.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.SignDoc;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    chainId?: string;
                    accountNumber?: any;
                }): _73.SignDoc;
            };
            TxBody: {
                encode(message: _73.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.TxBody;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    memo?: string;
                    timeoutHeight?: any;
                    extensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    nonCriticalExtensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _73.TxBody;
            };
            AuthInfo: {
                encode(message: _73.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.AuthInfo;
                fromPartial(object: {
                    signerInfos?: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        modeInfo?: {
                            single?: {
                                mode?: _71.SignMode;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                modeInfos?: any[];
                            };
                        };
                        sequence?: any;
                    }[];
                    fee?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        gasLimit?: any;
                        payer?: string;
                        granter?: string;
                    };
                }): _73.AuthInfo;
            };
            SignerInfo: {
                encode(message: _73.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.SignerInfo;
                fromPartial(object: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: _71.SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }): _73.SignerInfo;
            };
            ModeInfo: {
                encode(message: _73.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ModeInfo;
                fromPartial(object: {
                    single?: {
                        mode?: _71.SignMode;
                    };
                    multi?: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        modeInfos?: any[];
                    };
                }): _73.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _73.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ModeInfo_Single;
                fromPartial(object: {
                    mode?: _71.SignMode;
                }): _73.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _73.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ModeInfo_Multi;
                fromPartial(object: {
                    bitarray?: {
                        extraBitsStored?: number;
                        elems?: Uint8Array;
                    };
                    modeInfos?: any[];
                }): _73.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _73.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Fee;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                }): _73.Fee;
            };
            orderByFromJSON(object: any): _72.OrderBy;
            orderByToJSON(object: _72.OrderBy): string;
            broadcastModeFromJSON(object: any): _72.BroadcastMode;
            broadcastModeToJSON(object: _72.BroadcastMode): string;
            OrderBy: typeof _72.OrderBy;
            OrderBySDKType: typeof _72.OrderBySDKType;
            BroadcastMode: typeof _72.BroadcastMode;
            BroadcastModeSDKType: typeof _72.BroadcastModeSDKType;
            GetTxsEventRequest: {
                encode(message: _72.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GetTxsEventRequest;
                fromPartial(object: {
                    events?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                    orderBy?: _72.OrderBy;
                }): _72.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _72.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GetTxsEventResponse;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _71.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    txResponses?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _72.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _72.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.BroadcastTxRequest;
                fromPartial(object: {
                    txBytes?: Uint8Array;
                    mode?: _72.BroadcastMode;
                }): _72.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _72.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.BroadcastTxResponse;
                fromPartial(object: {
                    txResponse?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                    };
                }): _72.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _72.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.SimulateRequest;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _71.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txBytes?: Uint8Array;
                }): _72.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _72.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.SimulateResponse;
                fromPartial(object: {
                    gasInfo?: {
                        gasWanted?: any;
                        gasUsed?: any;
                    };
                    result?: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _72.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _72.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GetTxRequest;
                fromPartial(object: {
                    hash?: string;
                }): _72.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _72.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GetTxResponse;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _71.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txResponse?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                    };
                }): _72.GetTxResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _182.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _74.QueryCurrentPlanRequest): Promise<_74.QueryCurrentPlanResponse>;
                appliedPlan(request: _74.QueryAppliedPlanRequest): Promise<_74.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _74.QueryUpgradedConsensusStateRequest): Promise<_74.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _74.QueryModuleVersionsRequest): Promise<_74.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _168.LCDQueryClient;
            Plan: {
                encode(message: _75.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Plan;
                fromPartial(object: {
                    name?: string;
                    time?: Date;
                    height?: any;
                    info?: string;
                    upgradedClientState?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _75.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _75.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.SoftwareUpgradeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: any;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _75.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _75.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.CancelSoftwareUpgradeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _75.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _75.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ModuleVersion;
                fromPartial(object: {
                    name?: string;
                    version?: any;
                }): _75.ModuleVersion;
            };
            QueryCurrentPlanRequest: {
                encode(_: _74.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryCurrentPlanRequest;
                fromPartial(_: {}): _74.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _74.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryCurrentPlanResponse;
                fromPartial(object: {
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: any;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _74.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _74.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryAppliedPlanRequest;
                fromPartial(object: {
                    name?: string;
                }): _74.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _74.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryAppliedPlanResponse;
                fromPartial(object: {
                    height?: any;
                }): _74.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _74.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryUpgradedConsensusStateRequest;
                fromPartial(object: {
                    lastHeight?: any;
                }): _74.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _74.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryUpgradedConsensusStateResponse;
                fromPartial(object: {
                    upgradedConsensusState?: Uint8Array;
                }): _74.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _74.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryModuleVersionsRequest;
                fromPartial(object: {
                    moduleName?: string;
                }): _74.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _74.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryModuleVersionsResponse;
                fromPartial(object: {
                    moduleVersions?: {
                        name?: string;
                        version?: any;
                    }[];
                }): _74.QueryModuleVersionsResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _192.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _76.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _76.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _76.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _76.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _76.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _76.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    }) => _76.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _77.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.BaseVestingAccount;
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
                }): _77.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _77.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.ContinuousVestingAccount;
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
                    startTime?: any;
                }): _77.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _77.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.DelayedVestingAccount;
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
                }): _77.DelayedVestingAccount;
            };
            Period: {
                encode(message: _77.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Period;
                fromPartial(object: {
                    length?: any;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _77.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _77.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.PeriodicVestingAccount;
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
                    startTime?: any;
                    vestingPeriods?: {
                        length?: any;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _77.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _77.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.PermanentLockedAccount;
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
                }): _77.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _76.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgCreateVestingAccount;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    endTime?: any;
                    delayed?: boolean;
                }): _76.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _76.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgCreateVestingAccountResponse;
                fromPartial(_: {}): _76.MsgCreateVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _183.MsgClientImpl;
                };
                bank: {
                    v1beta1: _184.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _185.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _186.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _187.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _188.MsgClientImpl;
                };
                gov: {
                    v1beta1: _189.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _190.MsgClientImpl;
                };
                staking: {
                    v1beta1: _191.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _192.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _10.QueryAccountsRequest): Promise<_10.QueryAccountsResponse>;
                        account(request: _10.QueryAccountRequest): Promise<_10.QueryAccountResponse>;
                        params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _14.QueryGrantsRequest): Promise<_14.QueryGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _19.QueryBalanceRequest): Promise<_19.QueryBalanceResponse>;
                        allBalances(request: _19.QueryAllBalancesRequest): Promise<_19.QueryAllBalancesResponse>;
                        totalSupply(request?: _19.QueryTotalSupplyRequest): Promise<_19.QueryTotalSupplyResponse>;
                        supplyOf(request: _19.QuerySupplyOfRequest): Promise<_19.QuerySupplyOfResponse>;
                        params(request?: _19.QueryParamsRequest): Promise<_19.QueryParamsResponse>;
                        denomMetadata(request: _19.QueryDenomMetadataRequest): Promise<_19.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _19.QueryDenomsMetadataRequest): Promise<_19.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _30.GetNodeInfoRequest): Promise<_30.GetNodeInfoResponse>;
                            getSyncing(request?: _30.GetSyncingRequest): Promise<_30.GetSyncingResponse>;
                            getLatestBlock(request?: _30.GetLatestBlockRequest): Promise<_30.GetLatestBlockResponse>;
                            getBlockByHeight(request: _30.GetBlockByHeightRequest): Promise<_30.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _30.GetLatestValidatorSetRequest): Promise<_30.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _30.GetValidatorSetByHeightRequest): Promise<_30.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _42.QueryParamsRequest): Promise<_42.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _42.QueryValidatorOutstandingRewardsRequest): Promise<_42.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _42.QueryValidatorCommissionRequest): Promise<_42.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _42.QueryValidatorSlashesRequest): Promise<_42.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _42.QueryDelegationRewardsRequest): Promise<_42.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _42.QueryDelegationTotalRewardsRequest): Promise<_42.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _42.QueryDelegatorValidatorsRequest): Promise<_42.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _42.QueryDelegatorWithdrawAddressRequest): Promise<_42.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _42.QueryCommunityPoolRequest): Promise<_42.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _46.QueryEvidenceRequest): Promise<_46.QueryEvidenceResponse>;
                        allEvidence(request?: _46.QueryAllEvidenceRequest): Promise<_46.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _50.QueryAllowanceRequest): Promise<_50.QueryAllowanceResponse>;
                        allowances(request: _50.QueryAllowancesRequest): Promise<_50.QueryAllowancesResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _55.QueryProposalRequest): Promise<_55.QueryProposalResponse>;
                        proposals(request: _55.QueryProposalsRequest): Promise<_55.QueryProposalsResponse>;
                        vote(request: _55.QueryVoteRequest): Promise<_55.QueryVoteResponse>;
                        votes(request: _55.QueryVotesRequest): Promise<_55.QueryVotesResponse>;
                        params(request: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                        deposit(request: _55.QueryDepositRequest): Promise<_55.QueryDepositResponse>;
                        deposits(request: _55.QueryDepositsRequest): Promise<_55.QueryDepositsResponse>;
                        tallyResult(request: _55.QueryTallyResultRequest): Promise<_55.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _59.QueryParamsRequest): Promise<_59.QueryParamsResponse>;
                        inflation(request?: _59.QueryInflationRequest): Promise<_59.QueryInflationResponse>;
                        annualProvisions(request?: _59.QueryAnnualProvisionsRequest): Promise<_59.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _63.QueryParamsRequest): Promise<_63.QueryParamsResponse>;
                        signingInfo(request: _63.QuerySigningInfoRequest): Promise<_63.QuerySigningInfoResponse>;
                        signingInfos(request?: _63.QuerySigningInfosRequest): Promise<_63.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _68.QueryValidatorsRequest): Promise<_68.QueryValidatorsResponse>;
                        validator(request: _68.QueryValidatorRequest): Promise<_68.QueryValidatorResponse>;
                        validatorDelegations(request: _68.QueryValidatorDelegationsRequest): Promise<_68.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _68.QueryValidatorUnbondingDelegationsRequest): Promise<_68.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _68.QueryDelegationRequest): Promise<_68.QueryDelegationResponse>;
                        unbondingDelegation(request: _68.QueryUnbondingDelegationRequest): Promise<_68.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _68.QueryDelegatorDelegationsRequest): Promise<_68.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _68.QueryDelegatorUnbondingDelegationsRequest): Promise<_68.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _68.QueryRedelegationsRequest): Promise<_68.QueryRedelegationsResponse>;
                        delegatorValidators(request: _68.QueryDelegatorValidatorsRequest): Promise<_68.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _68.QueryDelegatorValidatorRequest): Promise<_68.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _68.QueryHistoricalInfoRequest): Promise<_68.QueryHistoricalInfoResponse>;
                        pool(request?: _68.QueryPoolRequest): Promise<_68.QueryPoolResponse>;
                        params(request?: _68.QueryParamsRequest): Promise<_68.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _72.SimulateRequest): Promise<_72.SimulateResponse>;
                        getTx(request: _72.GetTxRequest): Promise<_72.GetTxResponse>;
                        broadcastTx(request: _72.BroadcastTxRequest): Promise<_72.BroadcastTxResponse>;
                        getTxsEvent(request: _72.GetTxsEventRequest): Promise<_72.GetTxsEventResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _74.QueryCurrentPlanRequest): Promise<_74.QueryCurrentPlanResponse>;
                        appliedPlan(request: _74.QueryAppliedPlanRequest): Promise<_74.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _74.QueryUpgradedConsensusStateRequest): Promise<_74.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _74.QueryModuleVersionsRequest): Promise<_74.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _155.LCDQueryClient;
                };
                authz: {
                    v1beta1: _156.LCDQueryClient;
                };
                bank: {
                    v1beta1: _157.LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: _158.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _159.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _160.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _161.LCDQueryClient;
                };
                gov: {
                    v1beta1: _162.LCDQueryClient;
                };
                mint: {
                    v1beta1: _163.LCDQueryClient;
                };
                params: {
                    v1beta1: _164.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _165.LCDQueryClient;
                };
                staking: {
                    v1beta1: _166.LCDQueryClient;
                };
                tx: {
                    v1beta1: _167.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _168.LCDQueryClient;
                };
            };
        }>;
    };
}
