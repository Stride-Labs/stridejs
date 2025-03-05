import * as _3 from "./auth/v1beta1/auth";
import * as _4 from "./auth/v1beta1/genesis";
import * as _5 from "./auth/v1beta1/query";
import * as _6 from "./authz/v1beta1/authz";
import * as _7 from "./authz/v1beta1/event";
import * as _8 from "./authz/v1beta1/genesis";
import * as _9 from "./authz/v1beta1/query";
import * as _10 from "./authz/v1beta1/tx";
import * as _11 from "./bank/v1beta1/authz";
import * as _12 from "./bank/v1beta1/bank";
import * as _13 from "./bank/v1beta1/genesis";
import * as _14 from "./bank/v1beta1/query";
import * as _15 from "./bank/v1beta1/tx";
import * as _16 from "./base/abci/v1beta1/abci";
import * as _17 from "./base/kv/v1beta1/kv";
import * as _18 from "./base/node/v1beta1/query";
import * as _19 from "./base/query/v1beta1/pagination";
import * as _20 from "./base/reflection/v1beta1/reflection";
import * as _21 from "./base/reflection/v2alpha1/reflection";
import * as _22 from "./base/snapshots/v1beta1/snapshot";
import * as _23 from "./base/store/v1beta1/commit_info";
import * as _24 from "./base/store/v1beta1/listening";
import * as _25 from "./base/tendermint/v1beta1/query";
import * as _26 from "./base/v1beta1/coin";
import * as _27 from "./capability/v1beta1/capability";
import * as _28 from "./capability/v1beta1/genesis";
import * as _29 from "./crisis/v1beta1/genesis";
import * as _30 from "./crisis/v1beta1/tx";
import * as _31 from "./crypto/ed25519/keys";
import * as _32 from "./crypto/multisig/keys";
import * as _33 from "./crypto/secp256k1/keys";
import * as _34 from "./crypto/secp256r1/keys";
import * as _35 from "./distribution/v1beta1/distribution";
import * as _36 from "./distribution/v1beta1/genesis";
import * as _37 from "./distribution/v1beta1/query";
import * as _38 from "./distribution/v1beta1/tx";
import * as _39 from "./evidence/v1beta1/evidence";
import * as _40 from "./evidence/v1beta1/genesis";
import * as _41 from "./evidence/v1beta1/query";
import * as _42 from "./evidence/v1beta1/tx";
import * as _43 from "./feegrant/v1beta1/feegrant";
import * as _44 from "./feegrant/v1beta1/genesis";
import * as _45 from "./feegrant/v1beta1/query";
import * as _46 from "./feegrant/v1beta1/tx";
import * as _47 from "./genutil/v1beta1/genesis";
import * as _48 from "./gov/v1beta1/genesis";
import * as _49 from "./gov/v1beta1/gov";
import * as _50 from "./gov/v1beta1/query";
import * as _51 from "./gov/v1beta1/tx";
import * as _52 from "./ics23/v1/proofs";
import * as _53 from "./mint/v1beta1/genesis";
import * as _54 from "./mint/v1beta1/mint";
import * as _55 from "./mint/v1beta1/query";
import * as _57 from "./params/v1beta1/params";
import * as _58 from "./params/v1beta1/query";
import * as _59 from "./slashing/v1beta1/genesis";
import * as _60 from "./slashing/v1beta1/query";
import * as _61 from "./slashing/v1beta1/slashing";
import * as _62 from "./slashing/v1beta1/tx";
import * as _63 from "./staking/v1beta1/authz";
import * as _64 from "./staking/v1beta1/genesis";
import * as _66 from "./staking/v1beta1/query";
import * as _67 from "./staking/v1beta1/staking";
import * as _68 from "./staking/v1beta1/tx";
import * as _69 from "./tx/signing/v1beta1/signing";
import * as _70 from "./tx/v1beta1/service";
import * as _71 from "./tx/v1beta1/tx";
import * as _72 from "./upgrade/v1beta1/query";
import * as _73 from "./upgrade/v1beta1/upgrade";
import * as _74 from "./vesting/v1beta1/tx";
import * as _75 from "./vesting/v1beta1/vesting";
import * as _214 from "./auth/v1beta1/query.rpc.Query";
import * as _215 from "./authz/v1beta1/query.rpc.Query";
import * as _216 from "./bank/v1beta1/query.rpc.Query";
import * as _217 from "./base/node/v1beta1/query.rpc.Service";
import * as _218 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _219 from "./distribution/v1beta1/query.rpc.Query";
import * as _220 from "./evidence/v1beta1/query.rpc.Query";
import * as _221 from "./feegrant/v1beta1/query.rpc.Query";
import * as _222 from "./gov/v1beta1/query.rpc.Query";
import * as _223 from "./mint/v1beta1/query.rpc.Query";
import * as _224 from "./params/v1beta1/query.rpc.Query";
import * as _225 from "./slashing/v1beta1/query.rpc.Query";
import * as _226 from "./staking/v1beta1/query.rpc.Query";
import * as _227 from "./tx/v1beta1/service.rpc.Service";
import * as _228 from "./upgrade/v1beta1/query.rpc.Query";
import * as _229 from "./authz/v1beta1/tx.rpc.msg";
import * as _230 from "./bank/v1beta1/tx.rpc.msg";
import * as _231 from "./crisis/v1beta1/tx.rpc.msg";
import * as _232 from "./distribution/v1beta1/tx.rpc.msg";
import * as _233 from "./evidence/v1beta1/tx.rpc.msg";
import * as _234 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _235 from "./gov/v1beta1/tx.rpc.msg";
import * as _236 from "./slashing/v1beta1/tx.rpc.msg";
import * as _237 from "./staking/v1beta1/tx.rpc.msg";
import * as _238 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _214.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _5.QueryAccountsRequest): Promise<_5.QueryAccountsResponse>;
                account(request: _5.QueryAccountRequest): Promise<_5.QueryAccountResponse>;
                params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
                moduleAccountByName(request: _5.QueryModuleAccountByNameRequest): Promise<_5.QueryModuleAccountByNameResponse>;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _5.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryAccountsRequest;
                fromPartial(object: Partial<_5.QueryAccountsRequest>): _5.QueryAccountsRequest;
                fromAmino(object: _5.QueryAccountsRequestAmino): _5.QueryAccountsRequest;
                toAmino(message: _5.QueryAccountsRequest): _5.QueryAccountsRequestAmino;
                fromAminoMsg(object: _5.QueryAccountsRequestAminoMsg): _5.QueryAccountsRequest;
                toAminoMsg(message: _5.QueryAccountsRequest): _5.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _5.QueryAccountsRequestProtoMsg): _5.QueryAccountsRequest;
                toProto(message: _5.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _5.QueryAccountsRequest): _5.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _5.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryAccountsResponse;
                fromPartial(object: Partial<_5.QueryAccountsResponse>): _5.QueryAccountsResponse;
                fromAmino(object: _5.QueryAccountsResponseAmino): _5.QueryAccountsResponse;
                toAmino(message: _5.QueryAccountsResponse): _5.QueryAccountsResponseAmino;
                fromAminoMsg(object: _5.QueryAccountsResponseAminoMsg): _5.QueryAccountsResponse;
                toAminoMsg(message: _5.QueryAccountsResponse): _5.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _5.QueryAccountsResponseProtoMsg): _5.QueryAccountsResponse;
                toProto(message: _5.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _5.QueryAccountsResponse): _5.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _5.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryAccountRequest;
                fromPartial(object: Partial<_5.QueryAccountRequest>): _5.QueryAccountRequest;
                fromAmino(object: _5.QueryAccountRequestAmino): _5.QueryAccountRequest;
                toAmino(message: _5.QueryAccountRequest): _5.QueryAccountRequestAmino;
                fromAminoMsg(object: _5.QueryAccountRequestAminoMsg): _5.QueryAccountRequest;
                toAminoMsg(message: _5.QueryAccountRequest): _5.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _5.QueryAccountRequestProtoMsg): _5.QueryAccountRequest;
                toProto(message: _5.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _5.QueryAccountRequest): _5.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _5.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryAccountResponse;
                fromPartial(object: Partial<_5.QueryAccountResponse>): _5.QueryAccountResponse;
                fromAmino(object: _5.QueryAccountResponseAmino): _5.QueryAccountResponse;
                toAmino(message: _5.QueryAccountResponse): _5.QueryAccountResponseAmino;
                fromAminoMsg(object: _5.QueryAccountResponseAminoMsg): _5.QueryAccountResponse;
                toAminoMsg(message: _5.QueryAccountResponse): _5.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _5.QueryAccountResponseProtoMsg): _5.QueryAccountResponse;
                toProto(message: _5.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _5.QueryAccountResponse): _5.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _5.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryParamsRequest;
                fromPartial(_: Partial<_5.QueryParamsRequest>): _5.QueryParamsRequest;
                fromAmino(_: _5.QueryParamsRequestAmino): _5.QueryParamsRequest;
                toAmino(_: _5.QueryParamsRequest): _5.QueryParamsRequestAmino;
                fromAminoMsg(object: _5.QueryParamsRequestAminoMsg): _5.QueryParamsRequest;
                toAminoMsg(message: _5.QueryParamsRequest): _5.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _5.QueryParamsRequestProtoMsg): _5.QueryParamsRequest;
                toProto(message: _5.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _5.QueryParamsRequest): _5.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _5.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryParamsResponse;
                fromPartial(object: Partial<_5.QueryParamsResponse>): _5.QueryParamsResponse;
                fromAmino(object: _5.QueryParamsResponseAmino): _5.QueryParamsResponse;
                toAmino(message: _5.QueryParamsResponse): _5.QueryParamsResponseAmino;
                fromAminoMsg(object: _5.QueryParamsResponseAminoMsg): _5.QueryParamsResponse;
                toAminoMsg(message: _5.QueryParamsResponse): _5.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _5.QueryParamsResponseProtoMsg): _5.QueryParamsResponse;
                toProto(message: _5.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _5.QueryParamsResponse): _5.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _5.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_5.QueryModuleAccountByNameRequest>): _5.QueryModuleAccountByNameRequest;
                fromAmino(object: _5.QueryModuleAccountByNameRequestAmino): _5.QueryModuleAccountByNameRequest;
                toAmino(message: _5.QueryModuleAccountByNameRequest): _5.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _5.QueryModuleAccountByNameRequestAminoMsg): _5.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _5.QueryModuleAccountByNameRequest): _5.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _5.QueryModuleAccountByNameRequestProtoMsg): _5.QueryModuleAccountByNameRequest;
                toProto(message: _5.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _5.QueryModuleAccountByNameRequest): _5.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _5.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_5.QueryModuleAccountByNameResponse>): _5.QueryModuleAccountByNameResponse;
                fromAmino(object: _5.QueryModuleAccountByNameResponseAmino): _5.QueryModuleAccountByNameResponse;
                toAmino(message: _5.QueryModuleAccountByNameResponse): _5.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _5.QueryModuleAccountByNameResponseAminoMsg): _5.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _5.QueryModuleAccountByNameResponse): _5.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _5.QueryModuleAccountByNameResponseProtoMsg): _5.QueryModuleAccountByNameResponse;
                toProto(message: _5.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _5.QueryModuleAccountByNameResponse): _5.QueryModuleAccountByNameResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _4.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _4.GenesisState;
                fromPartial(object: Partial<_4.GenesisState>): _4.GenesisState;
                fromAmino(object: _4.GenesisStateAmino): _4.GenesisState;
                toAmino(message: _4.GenesisState): _4.GenesisStateAmino;
                fromAminoMsg(object: _4.GenesisStateAminoMsg): _4.GenesisState;
                toAminoMsg(message: _4.GenesisState): _4.GenesisStateAminoMsg;
                fromProtoMsg(message: _4.GenesisStateProtoMsg): _4.GenesisState;
                toProto(message: _4.GenesisState): Uint8Array;
                toProtoMsg(message: _4.GenesisState): _4.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _3.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.BaseAccount;
                fromPartial(object: Partial<_3.BaseAccount>): _3.BaseAccount;
                fromAmino(object: _3.BaseAccountAmino): _3.BaseAccount;
                toAmino(message: _3.BaseAccount): _3.BaseAccountAmino;
                fromAminoMsg(object: _3.BaseAccountAminoMsg): _3.BaseAccount;
                toAminoMsg(message: _3.BaseAccount): _3.BaseAccountAminoMsg;
                fromProtoMsg(message: _3.BaseAccountProtoMsg): _3.BaseAccount;
                toProto(message: _3.BaseAccount): Uint8Array;
                toProtoMsg(message: _3.BaseAccount): _3.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _3.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.ModuleAccount;
                fromPartial(object: Partial<_3.ModuleAccount>): _3.ModuleAccount;
                fromAmino(object: _3.ModuleAccountAmino): _3.ModuleAccount;
                toAmino(message: _3.ModuleAccount): _3.ModuleAccountAmino;
                fromAminoMsg(object: _3.ModuleAccountAminoMsg): _3.ModuleAccount;
                toAminoMsg(message: _3.ModuleAccount): _3.ModuleAccountAminoMsg;
                fromProtoMsg(message: _3.ModuleAccountProtoMsg): _3.ModuleAccount;
                toProto(message: _3.ModuleAccount): Uint8Array;
                toProtoMsg(message: _3.ModuleAccount): _3.ModuleAccountProtoMsg;
            };
            ModuleCredential: {
                typeUrl: string;
                encode(message: _3.ModuleCredential, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.ModuleCredential;
                fromPartial(object: Partial<_3.ModuleCredential>): _3.ModuleCredential;
                fromAmino(object: _3.ModuleCredentialAmino): _3.ModuleCredential;
                toAmino(message: _3.ModuleCredential): _3.ModuleCredentialAmino;
                fromAminoMsg(object: _3.ModuleCredentialAminoMsg): _3.ModuleCredential;
                toAminoMsg(message: _3.ModuleCredential): _3.ModuleCredentialAminoMsg;
                fromProtoMsg(message: _3.ModuleCredentialProtoMsg): _3.ModuleCredential;
                toProto(message: _3.ModuleCredential): Uint8Array;
                toProtoMsg(message: _3.ModuleCredential): _3.ModuleCredentialProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _3.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.Params;
                fromPartial(object: Partial<_3.Params>): _3.Params;
                fromAmino(object: _3.ParamsAmino): _3.Params;
                toAmino(message: _3.Params): _3.ParamsAmino;
                fromAminoMsg(object: _3.ParamsAminoMsg): _3.Params;
                toAminoMsg(message: _3.Params): _3.ParamsAminoMsg;
                fromProtoMsg(message: _3.ParamsProtoMsg): _3.Params;
                toProto(message: _3.Params): Uint8Array;
                toProtoMsg(message: _3.Params): _3.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _229.MsgClientImpl;
            QueryClientImpl: typeof _215.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _9.QueryGrantsRequest): Promise<_9.QueryGrantsResponse>;
                granterGrants(request: _9.QueryGranterGrantsRequest): Promise<_9.QueryGranterGrantsResponse>;
                granteeGrants(request: _9.QueryGranteeGrantsRequest): Promise<_9.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _10.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _10.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _10.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _10.MsgGrant): {
                        typeUrl: string;
                        value: _10.MsgGrant;
                    };
                    exec(value: _10.MsgExec): {
                        typeUrl: string;
                        value: _10.MsgExec;
                    };
                    revoke(value: _10.MsgRevoke): {
                        typeUrl: string;
                        value: _10.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _10.MsgGrant): {
                        typeUrl: string;
                        value: _10.MsgGrant;
                    };
                    exec(value: _10.MsgExec): {
                        typeUrl: string;
                        value: _10.MsgExec;
                    };
                    revoke(value: _10.MsgRevoke): {
                        typeUrl: string;
                        value: _10.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _10.MsgGrant) => _10.MsgGrantAmino;
                    fromAmino: (object: _10.MsgGrantAmino) => _10.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _10.MsgExec) => _10.MsgExecAmino;
                    fromAmino: (object: _10.MsgExecAmino) => _10.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _10.MsgRevoke) => _10.MsgRevokeAmino;
                    fromAmino: (object: _10.MsgRevokeAmino) => _10.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _10.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgGrant;
                fromPartial(object: Partial<_10.MsgGrant>): _10.MsgGrant;
                fromAmino(object: _10.MsgGrantAmino): _10.MsgGrant;
                toAmino(message: _10.MsgGrant): _10.MsgGrantAmino;
                fromAminoMsg(object: _10.MsgGrantAminoMsg): _10.MsgGrant;
                toAminoMsg(message: _10.MsgGrant): _10.MsgGrantAminoMsg;
                fromProtoMsg(message: _10.MsgGrantProtoMsg): _10.MsgGrant;
                toProto(message: _10.MsgGrant): Uint8Array;
                toProtoMsg(message: _10.MsgGrant): _10.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _10.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgExecResponse;
                fromPartial(object: Partial<_10.MsgExecResponse>): _10.MsgExecResponse;
                fromAmino(object: _10.MsgExecResponseAmino): _10.MsgExecResponse;
                toAmino(message: _10.MsgExecResponse): _10.MsgExecResponseAmino;
                fromAminoMsg(object: _10.MsgExecResponseAminoMsg): _10.MsgExecResponse;
                toAminoMsg(message: _10.MsgExecResponse): _10.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _10.MsgExecResponseProtoMsg): _10.MsgExecResponse;
                toProto(message: _10.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _10.MsgExecResponse): _10.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _10.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgExec;
                fromPartial(object: Partial<_10.MsgExec>): _10.MsgExec;
                fromAmino(object: _10.MsgExecAmino): _10.MsgExec;
                toAmino(message: _10.MsgExec): _10.MsgExecAmino;
                fromAminoMsg(object: _10.MsgExecAminoMsg): _10.MsgExec;
                toAminoMsg(message: _10.MsgExec): _10.MsgExecAminoMsg;
                fromProtoMsg(message: _10.MsgExecProtoMsg): _10.MsgExec;
                toProto(message: _10.MsgExec): Uint8Array;
                toProtoMsg(message: _10.MsgExec): _10.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _10.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgGrantResponse;
                fromPartial(_: Partial<_10.MsgGrantResponse>): _10.MsgGrantResponse;
                fromAmino(_: _10.MsgGrantResponseAmino): _10.MsgGrantResponse;
                toAmino(_: _10.MsgGrantResponse): _10.MsgGrantResponseAmino;
                fromAminoMsg(object: _10.MsgGrantResponseAminoMsg): _10.MsgGrantResponse;
                toAminoMsg(message: _10.MsgGrantResponse): _10.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _10.MsgGrantResponseProtoMsg): _10.MsgGrantResponse;
                toProto(message: _10.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _10.MsgGrantResponse): _10.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _10.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgRevoke;
                fromPartial(object: Partial<_10.MsgRevoke>): _10.MsgRevoke;
                fromAmino(object: _10.MsgRevokeAmino): _10.MsgRevoke;
                toAmino(message: _10.MsgRevoke): _10.MsgRevokeAmino;
                fromAminoMsg(object: _10.MsgRevokeAminoMsg): _10.MsgRevoke;
                toAminoMsg(message: _10.MsgRevoke): _10.MsgRevokeAminoMsg;
                fromProtoMsg(message: _10.MsgRevokeProtoMsg): _10.MsgRevoke;
                toProto(message: _10.MsgRevoke): Uint8Array;
                toProtoMsg(message: _10.MsgRevoke): _10.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _10.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgRevokeResponse;
                fromPartial(_: Partial<_10.MsgRevokeResponse>): _10.MsgRevokeResponse;
                fromAmino(_: _10.MsgRevokeResponseAmino): _10.MsgRevokeResponse;
                toAmino(_: _10.MsgRevokeResponse): _10.MsgRevokeResponseAmino;
                fromAminoMsg(object: _10.MsgRevokeResponseAminoMsg): _10.MsgRevokeResponse;
                toAminoMsg(message: _10.MsgRevokeResponse): _10.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _10.MsgRevokeResponseProtoMsg): _10.MsgRevokeResponse;
                toProto(message: _10.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _10.MsgRevokeResponse): _10.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _9.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryGrantsRequest;
                fromPartial(object: Partial<_9.QueryGrantsRequest>): _9.QueryGrantsRequest;
                fromAmino(object: _9.QueryGrantsRequestAmino): _9.QueryGrantsRequest;
                toAmino(message: _9.QueryGrantsRequest): _9.QueryGrantsRequestAmino;
                fromAminoMsg(object: _9.QueryGrantsRequestAminoMsg): _9.QueryGrantsRequest;
                toAminoMsg(message: _9.QueryGrantsRequest): _9.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _9.QueryGrantsRequestProtoMsg): _9.QueryGrantsRequest;
                toProto(message: _9.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryGrantsRequest): _9.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _9.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryGrantsResponse;
                fromPartial(object: Partial<_9.QueryGrantsResponse>): _9.QueryGrantsResponse;
                fromAmino(object: _9.QueryGrantsResponseAmino): _9.QueryGrantsResponse;
                toAmino(message: _9.QueryGrantsResponse): _9.QueryGrantsResponseAmino;
                fromAminoMsg(object: _9.QueryGrantsResponseAminoMsg): _9.QueryGrantsResponse;
                toAminoMsg(message: _9.QueryGrantsResponse): _9.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _9.QueryGrantsResponseProtoMsg): _9.QueryGrantsResponse;
                toProto(message: _9.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryGrantsResponse): _9.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _9.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_9.QueryGranterGrantsRequest>): _9.QueryGranterGrantsRequest;
                fromAmino(object: _9.QueryGranterGrantsRequestAmino): _9.QueryGranterGrantsRequest;
                toAmino(message: _9.QueryGranterGrantsRequest): _9.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _9.QueryGranterGrantsRequestAminoMsg): _9.QueryGranterGrantsRequest;
                toAminoMsg(message: _9.QueryGranterGrantsRequest): _9.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _9.QueryGranterGrantsRequestProtoMsg): _9.QueryGranterGrantsRequest;
                toProto(message: _9.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryGranterGrantsRequest): _9.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _9.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_9.QueryGranterGrantsResponse>): _9.QueryGranterGrantsResponse;
                fromAmino(object: _9.QueryGranterGrantsResponseAmino): _9.QueryGranterGrantsResponse;
                toAmino(message: _9.QueryGranterGrantsResponse): _9.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _9.QueryGranterGrantsResponseAminoMsg): _9.QueryGranterGrantsResponse;
                toAminoMsg(message: _9.QueryGranterGrantsResponse): _9.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _9.QueryGranterGrantsResponseProtoMsg): _9.QueryGranterGrantsResponse;
                toProto(message: _9.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryGranterGrantsResponse): _9.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _9.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_9.QueryGranteeGrantsRequest>): _9.QueryGranteeGrantsRequest;
                fromAmino(object: _9.QueryGranteeGrantsRequestAmino): _9.QueryGranteeGrantsRequest;
                toAmino(message: _9.QueryGranteeGrantsRequest): _9.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _9.QueryGranteeGrantsRequestAminoMsg): _9.QueryGranteeGrantsRequest;
                toAminoMsg(message: _9.QueryGranteeGrantsRequest): _9.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _9.QueryGranteeGrantsRequestProtoMsg): _9.QueryGranteeGrantsRequest;
                toProto(message: _9.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryGranteeGrantsRequest): _9.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _9.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_9.QueryGranteeGrantsResponse>): _9.QueryGranteeGrantsResponse;
                fromAmino(object: _9.QueryGranteeGrantsResponseAmino): _9.QueryGranteeGrantsResponse;
                toAmino(message: _9.QueryGranteeGrantsResponse): _9.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _9.QueryGranteeGrantsResponseAminoMsg): _9.QueryGranteeGrantsResponse;
                toAminoMsg(message: _9.QueryGranteeGrantsResponse): _9.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _9.QueryGranteeGrantsResponseProtoMsg): _9.QueryGranteeGrantsResponse;
                toProto(message: _9.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryGranteeGrantsResponse): _9.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _8.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _8.GenesisState;
                fromPartial(object: Partial<_8.GenesisState>): _8.GenesisState;
                fromAmino(object: _8.GenesisStateAmino): _8.GenesisState;
                toAmino(message: _8.GenesisState): _8.GenesisStateAmino;
                fromAminoMsg(object: _8.GenesisStateAminoMsg): _8.GenesisState;
                toAminoMsg(message: _8.GenesisState): _8.GenesisStateAminoMsg;
                fromProtoMsg(message: _8.GenesisStateProtoMsg): _8.GenesisState;
                toProto(message: _8.GenesisState): Uint8Array;
                toProtoMsg(message: _8.GenesisState): _8.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _7.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.EventGrant;
                fromPartial(object: Partial<_7.EventGrant>): _7.EventGrant;
                fromAmino(object: _7.EventGrantAmino): _7.EventGrant;
                toAmino(message: _7.EventGrant): _7.EventGrantAmino;
                fromAminoMsg(object: _7.EventGrantAminoMsg): _7.EventGrant;
                toAminoMsg(message: _7.EventGrant): _7.EventGrantAminoMsg;
                fromProtoMsg(message: _7.EventGrantProtoMsg): _7.EventGrant;
                toProto(message: _7.EventGrant): Uint8Array;
                toProtoMsg(message: _7.EventGrant): _7.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _7.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.EventRevoke;
                fromPartial(object: Partial<_7.EventRevoke>): _7.EventRevoke;
                fromAmino(object: _7.EventRevokeAmino): _7.EventRevoke;
                toAmino(message: _7.EventRevoke): _7.EventRevokeAmino;
                fromAminoMsg(object: _7.EventRevokeAminoMsg): _7.EventRevoke;
                toAminoMsg(message: _7.EventRevoke): _7.EventRevokeAminoMsg;
                fromProtoMsg(message: _7.EventRevokeProtoMsg): _7.EventRevoke;
                toProto(message: _7.EventRevoke): Uint8Array;
                toProtoMsg(message: _7.EventRevoke): _7.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _6.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _6.GenericAuthorization;
                fromPartial(object: Partial<_6.GenericAuthorization>): _6.GenericAuthorization;
                fromAmino(object: _6.GenericAuthorizationAmino): _6.GenericAuthorization;
                toAmino(message: _6.GenericAuthorization): _6.GenericAuthorizationAmino;
                fromAminoMsg(object: _6.GenericAuthorizationAminoMsg): _6.GenericAuthorization;
                toAminoMsg(message: _6.GenericAuthorization): _6.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _6.GenericAuthorizationProtoMsg): _6.GenericAuthorization;
                toProto(message: _6.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _6.GenericAuthorization): _6.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _6.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _6.Grant;
                fromPartial(object: Partial<_6.Grant>): _6.Grant;
                fromAmino(object: _6.GrantAmino): _6.Grant;
                toAmino(message: _6.Grant): _6.GrantAmino;
                fromAminoMsg(object: _6.GrantAminoMsg): _6.Grant;
                toAminoMsg(message: _6.Grant): _6.GrantAminoMsg;
                fromProtoMsg(message: _6.GrantProtoMsg): _6.Grant;
                toProto(message: _6.Grant): Uint8Array;
                toProtoMsg(message: _6.Grant): _6.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _6.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _6.GrantAuthorization;
                fromPartial(object: Partial<_6.GrantAuthorization>): _6.GrantAuthorization;
                fromAmino(object: _6.GrantAuthorizationAmino): _6.GrantAuthorization;
                toAmino(message: _6.GrantAuthorization): _6.GrantAuthorizationAmino;
                fromAminoMsg(object: _6.GrantAuthorizationAminoMsg): _6.GrantAuthorization;
                toAminoMsg(message: _6.GrantAuthorization): _6.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _6.GrantAuthorizationProtoMsg): _6.GrantAuthorization;
                toProto(message: _6.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _6.GrantAuthorization): _6.GrantAuthorizationProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _11.SendAuthorization | _63.StakeAuthorization | _6.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _230.MsgClientImpl;
            QueryClientImpl: typeof _216.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _14.QueryBalanceRequest): Promise<_14.QueryBalanceResponse>;
                allBalances(request: _14.QueryAllBalancesRequest): Promise<_14.QueryAllBalancesResponse>;
                spendableBalances(request: _14.QuerySpendableBalancesRequest): Promise<_14.QuerySpendableBalancesResponse>;
                totalSupply(request?: _14.QueryTotalSupplyRequest): Promise<_14.QueryTotalSupplyResponse>;
                supplyOf(request: _14.QuerySupplyOfRequest): Promise<_14.QuerySupplyOfResponse>;
                params(request?: _14.QueryParamsRequest): Promise<_14.QueryParamsResponse>;
                denomMetadata(request: _14.QueryDenomMetadataRequest): Promise<_14.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _14.QueryDenomsMetadataRequest): Promise<_14.QueryDenomsMetadataResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _15.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _15.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _15.MsgSend): {
                        typeUrl: string;
                        value: _15.MsgSend;
                    };
                    multiSend(value: _15.MsgMultiSend): {
                        typeUrl: string;
                        value: _15.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _15.MsgSend): {
                        typeUrl: string;
                        value: _15.MsgSend;
                    };
                    multiSend(value: _15.MsgMultiSend): {
                        typeUrl: string;
                        value: _15.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _15.MsgSend) => _15.MsgSendAmino;
                    fromAmino: (object: _15.MsgSendAmino) => _15.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _15.MsgMultiSend) => _15.MsgMultiSendAmino;
                    fromAmino: (object: _15.MsgMultiSendAmino) => _15.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _15.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.MsgSend;
                fromPartial(object: Partial<_15.MsgSend>): _15.MsgSend;
                fromAmino(object: _15.MsgSendAmino): _15.MsgSend;
                toAmino(message: _15.MsgSend): _15.MsgSendAmino;
                fromAminoMsg(object: _15.MsgSendAminoMsg): _15.MsgSend;
                toAminoMsg(message: _15.MsgSend): _15.MsgSendAminoMsg;
                fromProtoMsg(message: _15.MsgSendProtoMsg): _15.MsgSend;
                toProto(message: _15.MsgSend): Uint8Array;
                toProtoMsg(message: _15.MsgSend): _15.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _15.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.MsgSendResponse;
                fromPartial(_: Partial<_15.MsgSendResponse>): _15.MsgSendResponse;
                fromAmino(_: _15.MsgSendResponseAmino): _15.MsgSendResponse;
                toAmino(_: _15.MsgSendResponse): _15.MsgSendResponseAmino;
                fromAminoMsg(object: _15.MsgSendResponseAminoMsg): _15.MsgSendResponse;
                toAminoMsg(message: _15.MsgSendResponse): _15.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _15.MsgSendResponseProtoMsg): _15.MsgSendResponse;
                toProto(message: _15.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _15.MsgSendResponse): _15.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _15.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.MsgMultiSend;
                fromPartial(object: Partial<_15.MsgMultiSend>): _15.MsgMultiSend;
                fromAmino(object: _15.MsgMultiSendAmino): _15.MsgMultiSend;
                toAmino(message: _15.MsgMultiSend): _15.MsgMultiSendAmino;
                fromAminoMsg(object: _15.MsgMultiSendAminoMsg): _15.MsgMultiSend;
                toAminoMsg(message: _15.MsgMultiSend): _15.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _15.MsgMultiSendProtoMsg): _15.MsgMultiSend;
                toProto(message: _15.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _15.MsgMultiSend): _15.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _15.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.MsgMultiSendResponse;
                fromPartial(_: Partial<_15.MsgMultiSendResponse>): _15.MsgMultiSendResponse;
                fromAmino(_: _15.MsgMultiSendResponseAmino): _15.MsgMultiSendResponse;
                toAmino(_: _15.MsgMultiSendResponse): _15.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _15.MsgMultiSendResponseAminoMsg): _15.MsgMultiSendResponse;
                toAminoMsg(message: _15.MsgMultiSendResponse): _15.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _15.MsgMultiSendResponseProtoMsg): _15.MsgMultiSendResponse;
                toProto(message: _15.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _15.MsgMultiSendResponse): _15.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _14.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryBalanceRequest;
                fromPartial(object: Partial<_14.QueryBalanceRequest>): _14.QueryBalanceRequest;
                fromAmino(object: _14.QueryBalanceRequestAmino): _14.QueryBalanceRequest;
                toAmino(message: _14.QueryBalanceRequest): _14.QueryBalanceRequestAmino;
                fromAminoMsg(object: _14.QueryBalanceRequestAminoMsg): _14.QueryBalanceRequest;
                toAminoMsg(message: _14.QueryBalanceRequest): _14.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _14.QueryBalanceRequestProtoMsg): _14.QueryBalanceRequest;
                toProto(message: _14.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _14.QueryBalanceRequest): _14.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _14.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryBalanceResponse;
                fromPartial(object: Partial<_14.QueryBalanceResponse>): _14.QueryBalanceResponse;
                fromAmino(object: _14.QueryBalanceResponseAmino): _14.QueryBalanceResponse;
                toAmino(message: _14.QueryBalanceResponse): _14.QueryBalanceResponseAmino;
                fromAminoMsg(object: _14.QueryBalanceResponseAminoMsg): _14.QueryBalanceResponse;
                toAminoMsg(message: _14.QueryBalanceResponse): _14.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _14.QueryBalanceResponseProtoMsg): _14.QueryBalanceResponse;
                toProto(message: _14.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _14.QueryBalanceResponse): _14.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _14.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryAllBalancesRequest;
                fromPartial(object: Partial<_14.QueryAllBalancesRequest>): _14.QueryAllBalancesRequest;
                fromAmino(object: _14.QueryAllBalancesRequestAmino): _14.QueryAllBalancesRequest;
                toAmino(message: _14.QueryAllBalancesRequest): _14.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _14.QueryAllBalancesRequestAminoMsg): _14.QueryAllBalancesRequest;
                toAminoMsg(message: _14.QueryAllBalancesRequest): _14.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _14.QueryAllBalancesRequestProtoMsg): _14.QueryAllBalancesRequest;
                toProto(message: _14.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _14.QueryAllBalancesRequest): _14.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _14.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryAllBalancesResponse;
                fromPartial(object: Partial<_14.QueryAllBalancesResponse>): _14.QueryAllBalancesResponse;
                fromAmino(object: _14.QueryAllBalancesResponseAmino): _14.QueryAllBalancesResponse;
                toAmino(message: _14.QueryAllBalancesResponse): _14.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _14.QueryAllBalancesResponseAminoMsg): _14.QueryAllBalancesResponse;
                toAminoMsg(message: _14.QueryAllBalancesResponse): _14.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _14.QueryAllBalancesResponseProtoMsg): _14.QueryAllBalancesResponse;
                toProto(message: _14.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _14.QueryAllBalancesResponse): _14.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _14.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_14.QuerySpendableBalancesRequest>): _14.QuerySpendableBalancesRequest;
                fromAmino(object: _14.QuerySpendableBalancesRequestAmino): _14.QuerySpendableBalancesRequest;
                toAmino(message: _14.QuerySpendableBalancesRequest): _14.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _14.QuerySpendableBalancesRequestAminoMsg): _14.QuerySpendableBalancesRequest;
                toAminoMsg(message: _14.QuerySpendableBalancesRequest): _14.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _14.QuerySpendableBalancesRequestProtoMsg): _14.QuerySpendableBalancesRequest;
                toProto(message: _14.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _14.QuerySpendableBalancesRequest): _14.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _14.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_14.QuerySpendableBalancesResponse>): _14.QuerySpendableBalancesResponse;
                fromAmino(object: _14.QuerySpendableBalancesResponseAmino): _14.QuerySpendableBalancesResponse;
                toAmino(message: _14.QuerySpendableBalancesResponse): _14.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _14.QuerySpendableBalancesResponseAminoMsg): _14.QuerySpendableBalancesResponse;
                toAminoMsg(message: _14.QuerySpendableBalancesResponse): _14.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _14.QuerySpendableBalancesResponseProtoMsg): _14.QuerySpendableBalancesResponse;
                toProto(message: _14.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _14.QuerySpendableBalancesResponse): _14.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _14.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_14.QueryTotalSupplyRequest>): _14.QueryTotalSupplyRequest;
                fromAmino(object: _14.QueryTotalSupplyRequestAmino): _14.QueryTotalSupplyRequest;
                toAmino(message: _14.QueryTotalSupplyRequest): _14.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _14.QueryTotalSupplyRequestAminoMsg): _14.QueryTotalSupplyRequest;
                toAminoMsg(message: _14.QueryTotalSupplyRequest): _14.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _14.QueryTotalSupplyRequestProtoMsg): _14.QueryTotalSupplyRequest;
                toProto(message: _14.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _14.QueryTotalSupplyRequest): _14.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _14.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_14.QueryTotalSupplyResponse>): _14.QueryTotalSupplyResponse;
                fromAmino(object: _14.QueryTotalSupplyResponseAmino): _14.QueryTotalSupplyResponse;
                toAmino(message: _14.QueryTotalSupplyResponse): _14.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _14.QueryTotalSupplyResponseAminoMsg): _14.QueryTotalSupplyResponse;
                toAminoMsg(message: _14.QueryTotalSupplyResponse): _14.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _14.QueryTotalSupplyResponseProtoMsg): _14.QueryTotalSupplyResponse;
                toProto(message: _14.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _14.QueryTotalSupplyResponse): _14.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _14.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QuerySupplyOfRequest;
                fromPartial(object: Partial<_14.QuerySupplyOfRequest>): _14.QuerySupplyOfRequest;
                fromAmino(object: _14.QuerySupplyOfRequestAmino): _14.QuerySupplyOfRequest;
                toAmino(message: _14.QuerySupplyOfRequest): _14.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _14.QuerySupplyOfRequestAminoMsg): _14.QuerySupplyOfRequest;
                toAminoMsg(message: _14.QuerySupplyOfRequest): _14.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _14.QuerySupplyOfRequestProtoMsg): _14.QuerySupplyOfRequest;
                toProto(message: _14.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _14.QuerySupplyOfRequest): _14.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _14.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QuerySupplyOfResponse;
                fromPartial(object: Partial<_14.QuerySupplyOfResponse>): _14.QuerySupplyOfResponse;
                fromAmino(object: _14.QuerySupplyOfResponseAmino): _14.QuerySupplyOfResponse;
                toAmino(message: _14.QuerySupplyOfResponse): _14.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _14.QuerySupplyOfResponseAminoMsg): _14.QuerySupplyOfResponse;
                toAminoMsg(message: _14.QuerySupplyOfResponse): _14.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _14.QuerySupplyOfResponseProtoMsg): _14.QuerySupplyOfResponse;
                toProto(message: _14.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _14.QuerySupplyOfResponse): _14.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _14.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryParamsRequest;
                fromPartial(_: Partial<_14.QueryParamsRequest>): _14.QueryParamsRequest;
                fromAmino(_: _14.QueryParamsRequestAmino): _14.QueryParamsRequest;
                toAmino(_: _14.QueryParamsRequest): _14.QueryParamsRequestAmino;
                fromAminoMsg(object: _14.QueryParamsRequestAminoMsg): _14.QueryParamsRequest;
                toAminoMsg(message: _14.QueryParamsRequest): _14.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _14.QueryParamsRequestProtoMsg): _14.QueryParamsRequest;
                toProto(message: _14.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _14.QueryParamsRequest): _14.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _14.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryParamsResponse;
                fromPartial(object: Partial<_14.QueryParamsResponse>): _14.QueryParamsResponse;
                fromAmino(object: _14.QueryParamsResponseAmino): _14.QueryParamsResponse;
                toAmino(message: _14.QueryParamsResponse): _14.QueryParamsResponseAmino;
                fromAminoMsg(object: _14.QueryParamsResponseAminoMsg): _14.QueryParamsResponse;
                toAminoMsg(message: _14.QueryParamsResponse): _14.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _14.QueryParamsResponseProtoMsg): _14.QueryParamsResponse;
                toProto(message: _14.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _14.QueryParamsResponse): _14.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _14.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_14.QueryDenomsMetadataRequest>): _14.QueryDenomsMetadataRequest;
                fromAmino(object: _14.QueryDenomsMetadataRequestAmino): _14.QueryDenomsMetadataRequest;
                toAmino(message: _14.QueryDenomsMetadataRequest): _14.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _14.QueryDenomsMetadataRequestAminoMsg): _14.QueryDenomsMetadataRequest;
                toAminoMsg(message: _14.QueryDenomsMetadataRequest): _14.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _14.QueryDenomsMetadataRequestProtoMsg): _14.QueryDenomsMetadataRequest;
                toProto(message: _14.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _14.QueryDenomsMetadataRequest): _14.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _14.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_14.QueryDenomsMetadataResponse>): _14.QueryDenomsMetadataResponse;
                fromAmino(object: _14.QueryDenomsMetadataResponseAmino): _14.QueryDenomsMetadataResponse;
                toAmino(message: _14.QueryDenomsMetadataResponse): _14.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _14.QueryDenomsMetadataResponseAminoMsg): _14.QueryDenomsMetadataResponse;
                toAminoMsg(message: _14.QueryDenomsMetadataResponse): _14.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _14.QueryDenomsMetadataResponseProtoMsg): _14.QueryDenomsMetadataResponse;
                toProto(message: _14.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _14.QueryDenomsMetadataResponse): _14.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _14.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_14.QueryDenomMetadataRequest>): _14.QueryDenomMetadataRequest;
                fromAmino(object: _14.QueryDenomMetadataRequestAmino): _14.QueryDenomMetadataRequest;
                toAmino(message: _14.QueryDenomMetadataRequest): _14.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _14.QueryDenomMetadataRequestAminoMsg): _14.QueryDenomMetadataRequest;
                toAminoMsg(message: _14.QueryDenomMetadataRequest): _14.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _14.QueryDenomMetadataRequestProtoMsg): _14.QueryDenomMetadataRequest;
                toProto(message: _14.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _14.QueryDenomMetadataRequest): _14.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _14.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_14.QueryDenomMetadataResponse>): _14.QueryDenomMetadataResponse;
                fromAmino(object: _14.QueryDenomMetadataResponseAmino): _14.QueryDenomMetadataResponse;
                toAmino(message: _14.QueryDenomMetadataResponse): _14.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _14.QueryDenomMetadataResponseAminoMsg): _14.QueryDenomMetadataResponse;
                toAminoMsg(message: _14.QueryDenomMetadataResponse): _14.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _14.QueryDenomMetadataResponseProtoMsg): _14.QueryDenomMetadataResponse;
                toProto(message: _14.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _14.QueryDenomMetadataResponse): _14.QueryDenomMetadataResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _13.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _13.GenesisState;
                fromPartial(object: Partial<_13.GenesisState>): _13.GenesisState;
                fromAmino(object: _13.GenesisStateAmino): _13.GenesisState;
                toAmino(message: _13.GenesisState): _13.GenesisStateAmino;
                fromAminoMsg(object: _13.GenesisStateAminoMsg): _13.GenesisState;
                toAminoMsg(message: _13.GenesisState): _13.GenesisStateAminoMsg;
                fromProtoMsg(message: _13.GenesisStateProtoMsg): _13.GenesisState;
                toProto(message: _13.GenesisState): Uint8Array;
                toProtoMsg(message: _13.GenesisState): _13.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _13.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _13.Balance;
                fromPartial(object: Partial<_13.Balance>): _13.Balance;
                fromAmino(object: _13.BalanceAmino): _13.Balance;
                toAmino(message: _13.Balance): _13.BalanceAmino;
                fromAminoMsg(object: _13.BalanceAminoMsg): _13.Balance;
                toAminoMsg(message: _13.Balance): _13.BalanceAminoMsg;
                fromProtoMsg(message: _13.BalanceProtoMsg): _13.Balance;
                toProto(message: _13.Balance): Uint8Array;
                toProtoMsg(message: _13.Balance): _13.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _12.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.Params;
                fromPartial(object: Partial<_12.Params>): _12.Params;
                fromAmino(object: _12.ParamsAmino): _12.Params;
                toAmino(message: _12.Params): _12.ParamsAmino;
                fromAminoMsg(object: _12.ParamsAminoMsg): _12.Params;
                toAminoMsg(message: _12.Params): _12.ParamsAminoMsg;
                fromProtoMsg(message: _12.ParamsProtoMsg): _12.Params;
                toProto(message: _12.Params): Uint8Array;
                toProtoMsg(message: _12.Params): _12.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _12.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.SendEnabled;
                fromPartial(object: Partial<_12.SendEnabled>): _12.SendEnabled;
                fromAmino(object: _12.SendEnabledAmino): _12.SendEnabled;
                toAmino(message: _12.SendEnabled): _12.SendEnabledAmino;
                fromAminoMsg(object: _12.SendEnabledAminoMsg): _12.SendEnabled;
                toAminoMsg(message: _12.SendEnabled): _12.SendEnabledAminoMsg;
                fromProtoMsg(message: _12.SendEnabledProtoMsg): _12.SendEnabled;
                toProto(message: _12.SendEnabled): Uint8Array;
                toProtoMsg(message: _12.SendEnabled): _12.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _12.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.Input;
                fromPartial(object: Partial<_12.Input>): _12.Input;
                fromAmino(object: _12.InputAmino): _12.Input;
                toAmino(message: _12.Input): _12.InputAmino;
                fromAminoMsg(object: _12.InputAminoMsg): _12.Input;
                toAminoMsg(message: _12.Input): _12.InputAminoMsg;
                fromProtoMsg(message: _12.InputProtoMsg): _12.Input;
                toProto(message: _12.Input): Uint8Array;
                toProtoMsg(message: _12.Input): _12.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _12.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.Output;
                fromPartial(object: Partial<_12.Output>): _12.Output;
                fromAmino(object: _12.OutputAmino): _12.Output;
                toAmino(message: _12.Output): _12.OutputAmino;
                fromAminoMsg(object: _12.OutputAminoMsg): _12.Output;
                toAminoMsg(message: _12.Output): _12.OutputAminoMsg;
                fromProtoMsg(message: _12.OutputProtoMsg): _12.Output;
                toProto(message: _12.Output): Uint8Array;
                toProtoMsg(message: _12.Output): _12.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _12.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.Supply;
                fromPartial(object: Partial<_12.Supply>): _12.Supply;
                fromAmino(object: _12.SupplyAmino): _12.Supply;
                toAmino(message: _12.Supply): _12.SupplyAmino;
                fromAminoMsg(object: _12.SupplyAminoMsg): _12.Supply;
                toAminoMsg(message: _12.Supply): _12.SupplyAminoMsg;
                fromProtoMsg(message: _12.SupplyProtoMsg): _12.Supply;
                toProto(message: _12.Supply): Uint8Array;
                toProtoMsg(message: _12.Supply): _12.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _12.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.DenomUnit;
                fromPartial(object: Partial<_12.DenomUnit>): _12.DenomUnit;
                fromAmino(object: _12.DenomUnitAmino): _12.DenomUnit;
                toAmino(message: _12.DenomUnit): _12.DenomUnitAmino;
                fromAminoMsg(object: _12.DenomUnitAminoMsg): _12.DenomUnit;
                toAminoMsg(message: _12.DenomUnit): _12.DenomUnitAminoMsg;
                fromProtoMsg(message: _12.DenomUnitProtoMsg): _12.DenomUnit;
                toProto(message: _12.DenomUnit): Uint8Array;
                toProtoMsg(message: _12.DenomUnit): _12.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _12.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.Metadata;
                fromPartial(object: Partial<_12.Metadata>): _12.Metadata;
                fromAmino(object: _12.MetadataAmino): _12.Metadata;
                toAmino(message: _12.Metadata): _12.MetadataAmino;
                fromAminoMsg(object: _12.MetadataAminoMsg): _12.Metadata;
                toAminoMsg(message: _12.Metadata): _12.MetadataAminoMsg;
                fromProtoMsg(message: _12.MetadataProtoMsg): _12.Metadata;
                toProto(message: _12.Metadata): Uint8Array;
                toProtoMsg(message: _12.Metadata): _12.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _11.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.SendAuthorization;
                fromPartial(object: Partial<_11.SendAuthorization>): _11.SendAuthorization;
                fromAmino(object: _11.SendAuthorizationAmino): _11.SendAuthorization;
                toAmino(message: _11.SendAuthorization): _11.SendAuthorizationAmino;
                fromAminoMsg(object: _11.SendAuthorizationAminoMsg): _11.SendAuthorization;
                toAminoMsg(message: _11.SendAuthorization): _11.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _11.SendAuthorizationProtoMsg): _11.SendAuthorization;
                toProto(message: _11.SendAuthorization): Uint8Array;
                toProtoMsg(message: _11.SendAuthorization): _11.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _16.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.TxResponse;
                    fromPartial(object: Partial<_16.TxResponse>): _16.TxResponse;
                    fromAmino(object: _16.TxResponseAmino): _16.TxResponse;
                    toAmino(message: _16.TxResponse): _16.TxResponseAmino;
                    fromAminoMsg(object: _16.TxResponseAminoMsg): _16.TxResponse;
                    toAminoMsg(message: _16.TxResponse): _16.TxResponseAminoMsg;
                    fromProtoMsg(message: _16.TxResponseProtoMsg): _16.TxResponse;
                    toProto(message: _16.TxResponse): Uint8Array;
                    toProtoMsg(message: _16.TxResponse): _16.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _16.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.ABCIMessageLog;
                    fromPartial(object: Partial<_16.ABCIMessageLog>): _16.ABCIMessageLog;
                    fromAmino(object: _16.ABCIMessageLogAmino): _16.ABCIMessageLog;
                    toAmino(message: _16.ABCIMessageLog): _16.ABCIMessageLogAmino;
                    fromAminoMsg(object: _16.ABCIMessageLogAminoMsg): _16.ABCIMessageLog;
                    toAminoMsg(message: _16.ABCIMessageLog): _16.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _16.ABCIMessageLogProtoMsg): _16.ABCIMessageLog;
                    toProto(message: _16.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _16.ABCIMessageLog): _16.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _16.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.StringEvent;
                    fromPartial(object: Partial<_16.StringEvent>): _16.StringEvent;
                    fromAmino(object: _16.StringEventAmino): _16.StringEvent;
                    toAmino(message: _16.StringEvent): _16.StringEventAmino;
                    fromAminoMsg(object: _16.StringEventAminoMsg): _16.StringEvent;
                    toAminoMsg(message: _16.StringEvent): _16.StringEventAminoMsg;
                    fromProtoMsg(message: _16.StringEventProtoMsg): _16.StringEvent;
                    toProto(message: _16.StringEvent): Uint8Array;
                    toProtoMsg(message: _16.StringEvent): _16.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _16.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.Attribute;
                    fromPartial(object: Partial<_16.Attribute>): _16.Attribute;
                    fromAmino(object: _16.AttributeAmino): _16.Attribute;
                    toAmino(message: _16.Attribute): _16.AttributeAmino;
                    fromAminoMsg(object: _16.AttributeAminoMsg): _16.Attribute;
                    toAminoMsg(message: _16.Attribute): _16.AttributeAminoMsg;
                    fromProtoMsg(message: _16.AttributeProtoMsg): _16.Attribute;
                    toProto(message: _16.Attribute): Uint8Array;
                    toProtoMsg(message: _16.Attribute): _16.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _16.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.GasInfo;
                    fromPartial(object: Partial<_16.GasInfo>): _16.GasInfo;
                    fromAmino(object: _16.GasInfoAmino): _16.GasInfo;
                    toAmino(message: _16.GasInfo): _16.GasInfoAmino;
                    fromAminoMsg(object: _16.GasInfoAminoMsg): _16.GasInfo;
                    toAminoMsg(message: _16.GasInfo): _16.GasInfoAminoMsg;
                    fromProtoMsg(message: _16.GasInfoProtoMsg): _16.GasInfo;
                    toProto(message: _16.GasInfo): Uint8Array;
                    toProtoMsg(message: _16.GasInfo): _16.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _16.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.Result;
                    fromPartial(object: Partial<_16.Result>): _16.Result;
                    fromAmino(object: _16.ResultAmino): _16.Result;
                    toAmino(message: _16.Result): _16.ResultAmino;
                    fromAminoMsg(object: _16.ResultAminoMsg): _16.Result;
                    toAminoMsg(message: _16.Result): _16.ResultAminoMsg;
                    fromProtoMsg(message: _16.ResultProtoMsg): _16.Result;
                    toProto(message: _16.Result): Uint8Array;
                    toProtoMsg(message: _16.Result): _16.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _16.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.SimulationResponse;
                    fromPartial(object: Partial<_16.SimulationResponse>): _16.SimulationResponse;
                    fromAmino(object: _16.SimulationResponseAmino): _16.SimulationResponse;
                    toAmino(message: _16.SimulationResponse): _16.SimulationResponseAmino;
                    fromAminoMsg(object: _16.SimulationResponseAminoMsg): _16.SimulationResponse;
                    toAminoMsg(message: _16.SimulationResponse): _16.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _16.SimulationResponseProtoMsg): _16.SimulationResponse;
                    toProto(message: _16.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _16.SimulationResponse): _16.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _16.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.MsgData;
                    fromPartial(object: Partial<_16.MsgData>): _16.MsgData;
                    fromAmino(object: _16.MsgDataAmino): _16.MsgData;
                    toAmino(message: _16.MsgData): _16.MsgDataAmino;
                    fromAminoMsg(object: _16.MsgDataAminoMsg): _16.MsgData;
                    toAminoMsg(message: _16.MsgData): _16.MsgDataAminoMsg;
                    fromProtoMsg(message: _16.MsgDataProtoMsg): _16.MsgData;
                    toProto(message: _16.MsgData): Uint8Array;
                    toProtoMsg(message: _16.MsgData): _16.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _16.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.TxMsgData;
                    fromPartial(object: Partial<_16.TxMsgData>): _16.TxMsgData;
                    fromAmino(object: _16.TxMsgDataAmino): _16.TxMsgData;
                    toAmino(message: _16.TxMsgData): _16.TxMsgDataAmino;
                    fromAminoMsg(object: _16.TxMsgDataAminoMsg): _16.TxMsgData;
                    toAminoMsg(message: _16.TxMsgData): _16.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _16.TxMsgDataProtoMsg): _16.TxMsgData;
                    toProto(message: _16.TxMsgData): Uint8Array;
                    toProtoMsg(message: _16.TxMsgData): _16.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _16.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.SearchTxsResult;
                    fromPartial(object: Partial<_16.SearchTxsResult>): _16.SearchTxsResult;
                    fromAmino(object: _16.SearchTxsResultAmino): _16.SearchTxsResult;
                    toAmino(message: _16.SearchTxsResult): _16.SearchTxsResultAmino;
                    fromAminoMsg(object: _16.SearchTxsResultAminoMsg): _16.SearchTxsResult;
                    toAminoMsg(message: _16.SearchTxsResult): _16.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _16.SearchTxsResultProtoMsg): _16.SearchTxsResult;
                    toProto(message: _16.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _16.SearchTxsResult): _16.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _17.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.Pairs;
                    fromPartial(object: Partial<_17.Pairs>): _17.Pairs;
                    fromAmino(object: _17.PairsAmino): _17.Pairs;
                    toAmino(message: _17.Pairs): _17.PairsAmino;
                    fromAminoMsg(object: _17.PairsAminoMsg): _17.Pairs;
                    toAminoMsg(message: _17.Pairs): _17.PairsAminoMsg;
                    fromProtoMsg(message: _17.PairsProtoMsg): _17.Pairs;
                    toProto(message: _17.Pairs): Uint8Array;
                    toProtoMsg(message: _17.Pairs): _17.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _17.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.Pair;
                    fromPartial(object: Partial<_17.Pair>): _17.Pair;
                    fromAmino(object: _17.PairAmino): _17.Pair;
                    toAmino(message: _17.Pair): _17.PairAmino;
                    fromAminoMsg(object: _17.PairAminoMsg): _17.Pair;
                    toAminoMsg(message: _17.Pair): _17.PairAminoMsg;
                    fromProtoMsg(message: _17.PairProtoMsg): _17.Pair;
                    toProto(message: _17.Pair): Uint8Array;
                    toProtoMsg(message: _17.Pair): _17.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _217.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _18.ConfigRequest): Promise<_18.ConfigResponse>;
                };
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _18.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.ConfigRequest;
                    fromPartial(_: Partial<_18.ConfigRequest>): _18.ConfigRequest;
                    fromAmino(_: _18.ConfigRequestAmino): _18.ConfigRequest;
                    toAmino(_: _18.ConfigRequest): _18.ConfigRequestAmino;
                    fromAminoMsg(object: _18.ConfigRequestAminoMsg): _18.ConfigRequest;
                    toAminoMsg(message: _18.ConfigRequest): _18.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _18.ConfigRequestProtoMsg): _18.ConfigRequest;
                    toProto(message: _18.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _18.ConfigRequest): _18.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _18.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.ConfigResponse;
                    fromPartial(object: Partial<_18.ConfigResponse>): _18.ConfigResponse;
                    fromAmino(object: _18.ConfigResponseAmino): _18.ConfigResponse;
                    toAmino(message: _18.ConfigResponse): _18.ConfigResponseAmino;
                    fromAminoMsg(object: _18.ConfigResponseAminoMsg): _18.ConfigResponse;
                    toAminoMsg(message: _18.ConfigResponse): _18.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _18.ConfigResponseProtoMsg): _18.ConfigResponse;
                    toProto(message: _18.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _18.ConfigResponse): _18.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _19.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.PageRequest;
                    fromPartial(object: Partial<_19.PageRequest>): _19.PageRequest;
                    fromAmino(object: _19.PageRequestAmino): _19.PageRequest;
                    toAmino(message: _19.PageRequest): _19.PageRequestAmino;
                    fromAminoMsg(object: _19.PageRequestAminoMsg): _19.PageRequest;
                    toAminoMsg(message: _19.PageRequest): _19.PageRequestAminoMsg;
                    fromProtoMsg(message: _19.PageRequestProtoMsg): _19.PageRequest;
                    toProto(message: _19.PageRequest): Uint8Array;
                    toProtoMsg(message: _19.PageRequest): _19.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _19.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.PageResponse;
                    fromPartial(object: Partial<_19.PageResponse>): _19.PageResponse;
                    fromAmino(object: _19.PageResponseAmino): _19.PageResponse;
                    toAmino(message: _19.PageResponse): _19.PageResponseAmino;
                    fromAminoMsg(object: _19.PageResponseAminoMsg): _19.PageResponse;
                    toAminoMsg(message: _19.PageResponse): _19.PageResponseAminoMsg;
                    fromProtoMsg(message: _19.PageResponseProtoMsg): _19.PageResponse;
                    toProto(message: _19.PageResponse): Uint8Array;
                    toProtoMsg(message: _19.PageResponse): _19.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _20.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _20.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_20.ListAllInterfacesRequest>): _20.ListAllInterfacesRequest;
                    fromAmino(_: _20.ListAllInterfacesRequestAmino): _20.ListAllInterfacesRequest;
                    toAmino(_: _20.ListAllInterfacesRequest): _20.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _20.ListAllInterfacesRequestAminoMsg): _20.ListAllInterfacesRequest;
                    toAminoMsg(message: _20.ListAllInterfacesRequest): _20.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _20.ListAllInterfacesRequestProtoMsg): _20.ListAllInterfacesRequest;
                    toProto(message: _20.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _20.ListAllInterfacesRequest): _20.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _20.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _20.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_20.ListAllInterfacesResponse>): _20.ListAllInterfacesResponse;
                    fromAmino(object: _20.ListAllInterfacesResponseAmino): _20.ListAllInterfacesResponse;
                    toAmino(message: _20.ListAllInterfacesResponse): _20.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _20.ListAllInterfacesResponseAminoMsg): _20.ListAllInterfacesResponse;
                    toAminoMsg(message: _20.ListAllInterfacesResponse): _20.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _20.ListAllInterfacesResponseProtoMsg): _20.ListAllInterfacesResponse;
                    toProto(message: _20.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _20.ListAllInterfacesResponse): _20.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _20.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _20.ListImplementationsRequest;
                    fromPartial(object: Partial<_20.ListImplementationsRequest>): _20.ListImplementationsRequest;
                    fromAmino(object: _20.ListImplementationsRequestAmino): _20.ListImplementationsRequest;
                    toAmino(message: _20.ListImplementationsRequest): _20.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _20.ListImplementationsRequestAminoMsg): _20.ListImplementationsRequest;
                    toAminoMsg(message: _20.ListImplementationsRequest): _20.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _20.ListImplementationsRequestProtoMsg): _20.ListImplementationsRequest;
                    toProto(message: _20.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _20.ListImplementationsRequest): _20.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _20.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _20.ListImplementationsResponse;
                    fromPartial(object: Partial<_20.ListImplementationsResponse>): _20.ListImplementationsResponse;
                    fromAmino(object: _20.ListImplementationsResponseAmino): _20.ListImplementationsResponse;
                    toAmino(message: _20.ListImplementationsResponse): _20.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _20.ListImplementationsResponseAminoMsg): _20.ListImplementationsResponse;
                    toAminoMsg(message: _20.ListImplementationsResponse): _20.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _20.ListImplementationsResponseProtoMsg): _20.ListImplementationsResponse;
                    toProto(message: _20.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _20.ListImplementationsResponse): _20.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _21.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.AppDescriptor;
                    fromPartial(object: Partial<_21.AppDescriptor>): _21.AppDescriptor;
                    fromAmino(object: _21.AppDescriptorAmino): _21.AppDescriptor;
                    toAmino(message: _21.AppDescriptor): _21.AppDescriptorAmino;
                    fromAminoMsg(object: _21.AppDescriptorAminoMsg): _21.AppDescriptor;
                    toAminoMsg(message: _21.AppDescriptor): _21.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _21.AppDescriptorProtoMsg): _21.AppDescriptor;
                    toProto(message: _21.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _21.AppDescriptor): _21.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _21.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.TxDescriptor;
                    fromPartial(object: Partial<_21.TxDescriptor>): _21.TxDescriptor;
                    fromAmino(object: _21.TxDescriptorAmino): _21.TxDescriptor;
                    toAmino(message: _21.TxDescriptor): _21.TxDescriptorAmino;
                    fromAminoMsg(object: _21.TxDescriptorAminoMsg): _21.TxDescriptor;
                    toAminoMsg(message: _21.TxDescriptor): _21.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _21.TxDescriptorProtoMsg): _21.TxDescriptor;
                    toProto(message: _21.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _21.TxDescriptor): _21.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _21.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.AuthnDescriptor;
                    fromPartial(object: Partial<_21.AuthnDescriptor>): _21.AuthnDescriptor;
                    fromAmino(object: _21.AuthnDescriptorAmino): _21.AuthnDescriptor;
                    toAmino(message: _21.AuthnDescriptor): _21.AuthnDescriptorAmino;
                    fromAminoMsg(object: _21.AuthnDescriptorAminoMsg): _21.AuthnDescriptor;
                    toAminoMsg(message: _21.AuthnDescriptor): _21.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _21.AuthnDescriptorProtoMsg): _21.AuthnDescriptor;
                    toProto(message: _21.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _21.AuthnDescriptor): _21.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _21.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.SigningModeDescriptor;
                    fromPartial(object: Partial<_21.SigningModeDescriptor>): _21.SigningModeDescriptor;
                    fromAmino(object: _21.SigningModeDescriptorAmino): _21.SigningModeDescriptor;
                    toAmino(message: _21.SigningModeDescriptor): _21.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _21.SigningModeDescriptorAminoMsg): _21.SigningModeDescriptor;
                    toAminoMsg(message: _21.SigningModeDescriptor): _21.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _21.SigningModeDescriptorProtoMsg): _21.SigningModeDescriptor;
                    toProto(message: _21.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _21.SigningModeDescriptor): _21.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _21.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.ChainDescriptor;
                    fromPartial(object: Partial<_21.ChainDescriptor>): _21.ChainDescriptor;
                    fromAmino(object: _21.ChainDescriptorAmino): _21.ChainDescriptor;
                    toAmino(message: _21.ChainDescriptor): _21.ChainDescriptorAmino;
                    fromAminoMsg(object: _21.ChainDescriptorAminoMsg): _21.ChainDescriptor;
                    toAminoMsg(message: _21.ChainDescriptor): _21.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _21.ChainDescriptorProtoMsg): _21.ChainDescriptor;
                    toProto(message: _21.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _21.ChainDescriptor): _21.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _21.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.CodecDescriptor;
                    fromPartial(object: Partial<_21.CodecDescriptor>): _21.CodecDescriptor;
                    fromAmino(object: _21.CodecDescriptorAmino): _21.CodecDescriptor;
                    toAmino(message: _21.CodecDescriptor): _21.CodecDescriptorAmino;
                    fromAminoMsg(object: _21.CodecDescriptorAminoMsg): _21.CodecDescriptor;
                    toAminoMsg(message: _21.CodecDescriptor): _21.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _21.CodecDescriptorProtoMsg): _21.CodecDescriptor;
                    toProto(message: _21.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _21.CodecDescriptor): _21.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _21.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.InterfaceDescriptor;
                    fromPartial(object: Partial<_21.InterfaceDescriptor>): _21.InterfaceDescriptor;
                    fromAmino(object: _21.InterfaceDescriptorAmino): _21.InterfaceDescriptor;
                    toAmino(message: _21.InterfaceDescriptor): _21.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _21.InterfaceDescriptorAminoMsg): _21.InterfaceDescriptor;
                    toAminoMsg(message: _21.InterfaceDescriptor): _21.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _21.InterfaceDescriptorProtoMsg): _21.InterfaceDescriptor;
                    toProto(message: _21.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _21.InterfaceDescriptor): _21.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _21.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_21.InterfaceImplementerDescriptor>): _21.InterfaceImplementerDescriptor;
                    fromAmino(object: _21.InterfaceImplementerDescriptorAmino): _21.InterfaceImplementerDescriptor;
                    toAmino(message: _21.InterfaceImplementerDescriptor): _21.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _21.InterfaceImplementerDescriptorAminoMsg): _21.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _21.InterfaceImplementerDescriptor): _21.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _21.InterfaceImplementerDescriptorProtoMsg): _21.InterfaceImplementerDescriptor;
                    toProto(message: _21.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _21.InterfaceImplementerDescriptor): _21.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _21.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_21.InterfaceAcceptingMessageDescriptor>): _21.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _21.InterfaceAcceptingMessageDescriptorAmino): _21.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _21.InterfaceAcceptingMessageDescriptor): _21.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _21.InterfaceAcceptingMessageDescriptorAminoMsg): _21.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _21.InterfaceAcceptingMessageDescriptor): _21.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _21.InterfaceAcceptingMessageDescriptorProtoMsg): _21.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _21.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _21.InterfaceAcceptingMessageDescriptor): _21.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _21.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.ConfigurationDescriptor;
                    fromPartial(object: Partial<_21.ConfigurationDescriptor>): _21.ConfigurationDescriptor;
                    fromAmino(object: _21.ConfigurationDescriptorAmino): _21.ConfigurationDescriptor;
                    toAmino(message: _21.ConfigurationDescriptor): _21.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _21.ConfigurationDescriptorAminoMsg): _21.ConfigurationDescriptor;
                    toAminoMsg(message: _21.ConfigurationDescriptor): _21.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _21.ConfigurationDescriptorProtoMsg): _21.ConfigurationDescriptor;
                    toProto(message: _21.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _21.ConfigurationDescriptor): _21.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _21.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.MsgDescriptor;
                    fromPartial(object: Partial<_21.MsgDescriptor>): _21.MsgDescriptor;
                    fromAmino(object: _21.MsgDescriptorAmino): _21.MsgDescriptor;
                    toAmino(message: _21.MsgDescriptor): _21.MsgDescriptorAmino;
                    fromAminoMsg(object: _21.MsgDescriptorAminoMsg): _21.MsgDescriptor;
                    toAminoMsg(message: _21.MsgDescriptor): _21.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _21.MsgDescriptorProtoMsg): _21.MsgDescriptor;
                    toProto(message: _21.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _21.MsgDescriptor): _21.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _21.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_21.GetAuthnDescriptorRequest>): _21.GetAuthnDescriptorRequest;
                    fromAmino(_: _21.GetAuthnDescriptorRequestAmino): _21.GetAuthnDescriptorRequest;
                    toAmino(_: _21.GetAuthnDescriptorRequest): _21.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _21.GetAuthnDescriptorRequestAminoMsg): _21.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _21.GetAuthnDescriptorRequest): _21.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _21.GetAuthnDescriptorRequestProtoMsg): _21.GetAuthnDescriptorRequest;
                    toProto(message: _21.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _21.GetAuthnDescriptorRequest): _21.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _21.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_21.GetAuthnDescriptorResponse>): _21.GetAuthnDescriptorResponse;
                    fromAmino(object: _21.GetAuthnDescriptorResponseAmino): _21.GetAuthnDescriptorResponse;
                    toAmino(message: _21.GetAuthnDescriptorResponse): _21.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _21.GetAuthnDescriptorResponseAminoMsg): _21.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _21.GetAuthnDescriptorResponse): _21.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _21.GetAuthnDescriptorResponseProtoMsg): _21.GetAuthnDescriptorResponse;
                    toProto(message: _21.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _21.GetAuthnDescriptorResponse): _21.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _21.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_21.GetChainDescriptorRequest>): _21.GetChainDescriptorRequest;
                    fromAmino(_: _21.GetChainDescriptorRequestAmino): _21.GetChainDescriptorRequest;
                    toAmino(_: _21.GetChainDescriptorRequest): _21.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _21.GetChainDescriptorRequestAminoMsg): _21.GetChainDescriptorRequest;
                    toAminoMsg(message: _21.GetChainDescriptorRequest): _21.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _21.GetChainDescriptorRequestProtoMsg): _21.GetChainDescriptorRequest;
                    toProto(message: _21.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _21.GetChainDescriptorRequest): _21.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _21.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_21.GetChainDescriptorResponse>): _21.GetChainDescriptorResponse;
                    fromAmino(object: _21.GetChainDescriptorResponseAmino): _21.GetChainDescriptorResponse;
                    toAmino(message: _21.GetChainDescriptorResponse): _21.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _21.GetChainDescriptorResponseAminoMsg): _21.GetChainDescriptorResponse;
                    toAminoMsg(message: _21.GetChainDescriptorResponse): _21.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _21.GetChainDescriptorResponseProtoMsg): _21.GetChainDescriptorResponse;
                    toProto(message: _21.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _21.GetChainDescriptorResponse): _21.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _21.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_21.GetCodecDescriptorRequest>): _21.GetCodecDescriptorRequest;
                    fromAmino(_: _21.GetCodecDescriptorRequestAmino): _21.GetCodecDescriptorRequest;
                    toAmino(_: _21.GetCodecDescriptorRequest): _21.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _21.GetCodecDescriptorRequestAminoMsg): _21.GetCodecDescriptorRequest;
                    toAminoMsg(message: _21.GetCodecDescriptorRequest): _21.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _21.GetCodecDescriptorRequestProtoMsg): _21.GetCodecDescriptorRequest;
                    toProto(message: _21.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _21.GetCodecDescriptorRequest): _21.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _21.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_21.GetCodecDescriptorResponse>): _21.GetCodecDescriptorResponse;
                    fromAmino(object: _21.GetCodecDescriptorResponseAmino): _21.GetCodecDescriptorResponse;
                    toAmino(message: _21.GetCodecDescriptorResponse): _21.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _21.GetCodecDescriptorResponseAminoMsg): _21.GetCodecDescriptorResponse;
                    toAminoMsg(message: _21.GetCodecDescriptorResponse): _21.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _21.GetCodecDescriptorResponseProtoMsg): _21.GetCodecDescriptorResponse;
                    toProto(message: _21.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _21.GetCodecDescriptorResponse): _21.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _21.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_21.GetConfigurationDescriptorRequest>): _21.GetConfigurationDescriptorRequest;
                    fromAmino(_: _21.GetConfigurationDescriptorRequestAmino): _21.GetConfigurationDescriptorRequest;
                    toAmino(_: _21.GetConfigurationDescriptorRequest): _21.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _21.GetConfigurationDescriptorRequestAminoMsg): _21.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _21.GetConfigurationDescriptorRequest): _21.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _21.GetConfigurationDescriptorRequestProtoMsg): _21.GetConfigurationDescriptorRequest;
                    toProto(message: _21.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _21.GetConfigurationDescriptorRequest): _21.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _21.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_21.GetConfigurationDescriptorResponse>): _21.GetConfigurationDescriptorResponse;
                    fromAmino(object: _21.GetConfigurationDescriptorResponseAmino): _21.GetConfigurationDescriptorResponse;
                    toAmino(message: _21.GetConfigurationDescriptorResponse): _21.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _21.GetConfigurationDescriptorResponseAminoMsg): _21.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _21.GetConfigurationDescriptorResponse): _21.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _21.GetConfigurationDescriptorResponseProtoMsg): _21.GetConfigurationDescriptorResponse;
                    toProto(message: _21.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _21.GetConfigurationDescriptorResponse): _21.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _21.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_21.GetQueryServicesDescriptorRequest>): _21.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _21.GetQueryServicesDescriptorRequestAmino): _21.GetQueryServicesDescriptorRequest;
                    toAmino(_: _21.GetQueryServicesDescriptorRequest): _21.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _21.GetQueryServicesDescriptorRequestAminoMsg): _21.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _21.GetQueryServicesDescriptorRequest): _21.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _21.GetQueryServicesDescriptorRequestProtoMsg): _21.GetQueryServicesDescriptorRequest;
                    toProto(message: _21.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _21.GetQueryServicesDescriptorRequest): _21.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _21.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_21.GetQueryServicesDescriptorResponse>): _21.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _21.GetQueryServicesDescriptorResponseAmino): _21.GetQueryServicesDescriptorResponse;
                    toAmino(message: _21.GetQueryServicesDescriptorResponse): _21.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _21.GetQueryServicesDescriptorResponseAminoMsg): _21.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _21.GetQueryServicesDescriptorResponse): _21.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _21.GetQueryServicesDescriptorResponseProtoMsg): _21.GetQueryServicesDescriptorResponse;
                    toProto(message: _21.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _21.GetQueryServicesDescriptorResponse): _21.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _21.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_21.GetTxDescriptorRequest>): _21.GetTxDescriptorRequest;
                    fromAmino(_: _21.GetTxDescriptorRequestAmino): _21.GetTxDescriptorRequest;
                    toAmino(_: _21.GetTxDescriptorRequest): _21.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _21.GetTxDescriptorRequestAminoMsg): _21.GetTxDescriptorRequest;
                    toAminoMsg(message: _21.GetTxDescriptorRequest): _21.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _21.GetTxDescriptorRequestProtoMsg): _21.GetTxDescriptorRequest;
                    toProto(message: _21.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _21.GetTxDescriptorRequest): _21.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _21.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_21.GetTxDescriptorResponse>): _21.GetTxDescriptorResponse;
                    fromAmino(object: _21.GetTxDescriptorResponseAmino): _21.GetTxDescriptorResponse;
                    toAmino(message: _21.GetTxDescriptorResponse): _21.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _21.GetTxDescriptorResponseAminoMsg): _21.GetTxDescriptorResponse;
                    toAminoMsg(message: _21.GetTxDescriptorResponse): _21.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _21.GetTxDescriptorResponseProtoMsg): _21.GetTxDescriptorResponse;
                    toProto(message: _21.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _21.GetTxDescriptorResponse): _21.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _21.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.QueryServicesDescriptor;
                    fromPartial(object: Partial<_21.QueryServicesDescriptor>): _21.QueryServicesDescriptor;
                    fromAmino(object: _21.QueryServicesDescriptorAmino): _21.QueryServicesDescriptor;
                    toAmino(message: _21.QueryServicesDescriptor): _21.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _21.QueryServicesDescriptorAminoMsg): _21.QueryServicesDescriptor;
                    toAminoMsg(message: _21.QueryServicesDescriptor): _21.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _21.QueryServicesDescriptorProtoMsg): _21.QueryServicesDescriptor;
                    toProto(message: _21.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _21.QueryServicesDescriptor): _21.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _21.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.QueryServiceDescriptor;
                    fromPartial(object: Partial<_21.QueryServiceDescriptor>): _21.QueryServiceDescriptor;
                    fromAmino(object: _21.QueryServiceDescriptorAmino): _21.QueryServiceDescriptor;
                    toAmino(message: _21.QueryServiceDescriptor): _21.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _21.QueryServiceDescriptorAminoMsg): _21.QueryServiceDescriptor;
                    toAminoMsg(message: _21.QueryServiceDescriptor): _21.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _21.QueryServiceDescriptorProtoMsg): _21.QueryServiceDescriptor;
                    toProto(message: _21.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _21.QueryServiceDescriptor): _21.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _21.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.QueryMethodDescriptor;
                    fromPartial(object: Partial<_21.QueryMethodDescriptor>): _21.QueryMethodDescriptor;
                    fromAmino(object: _21.QueryMethodDescriptorAmino): _21.QueryMethodDescriptor;
                    toAmino(message: _21.QueryMethodDescriptor): _21.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _21.QueryMethodDescriptorAminoMsg): _21.QueryMethodDescriptor;
                    toAminoMsg(message: _21.QueryMethodDescriptor): _21.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _21.QueryMethodDescriptorProtoMsg): _21.QueryMethodDescriptor;
                    toProto(message: _21.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _21.QueryMethodDescriptor): _21.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _22.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _22.Snapshot;
                    fromPartial(object: Partial<_22.Snapshot>): _22.Snapshot;
                    fromAmino(object: _22.SnapshotAmino): _22.Snapshot;
                    toAmino(message: _22.Snapshot): _22.SnapshotAmino;
                    fromAminoMsg(object: _22.SnapshotAminoMsg): _22.Snapshot;
                    toAminoMsg(message: _22.Snapshot): _22.SnapshotAminoMsg;
                    fromProtoMsg(message: _22.SnapshotProtoMsg): _22.Snapshot;
                    toProto(message: _22.Snapshot): Uint8Array;
                    toProtoMsg(message: _22.Snapshot): _22.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _22.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _22.Metadata;
                    fromPartial(object: Partial<_22.Metadata>): _22.Metadata;
                    fromAmino(object: _22.MetadataAmino): _22.Metadata;
                    toAmino(message: _22.Metadata): _22.MetadataAmino;
                    fromAminoMsg(object: _22.MetadataAminoMsg): _22.Metadata;
                    toAminoMsg(message: _22.Metadata): _22.MetadataAminoMsg;
                    fromProtoMsg(message: _22.MetadataProtoMsg): _22.Metadata;
                    toProto(message: _22.Metadata): Uint8Array;
                    toProtoMsg(message: _22.Metadata): _22.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _22.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _22.SnapshotItem;
                    fromPartial(object: Partial<_22.SnapshotItem>): _22.SnapshotItem;
                    fromAmino(object: _22.SnapshotItemAmino): _22.SnapshotItem;
                    toAmino(message: _22.SnapshotItem): _22.SnapshotItemAmino;
                    fromAminoMsg(object: _22.SnapshotItemAminoMsg): _22.SnapshotItem;
                    toAminoMsg(message: _22.SnapshotItem): _22.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _22.SnapshotItemProtoMsg): _22.SnapshotItem;
                    toProto(message: _22.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _22.SnapshotItem): _22.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _22.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _22.SnapshotStoreItem;
                    fromPartial(object: Partial<_22.SnapshotStoreItem>): _22.SnapshotStoreItem;
                    fromAmino(object: _22.SnapshotStoreItemAmino): _22.SnapshotStoreItem;
                    toAmino(message: _22.SnapshotStoreItem): _22.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _22.SnapshotStoreItemAminoMsg): _22.SnapshotStoreItem;
                    toAminoMsg(message: _22.SnapshotStoreItem): _22.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _22.SnapshotStoreItemProtoMsg): _22.SnapshotStoreItem;
                    toProto(message: _22.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _22.SnapshotStoreItem): _22.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _22.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _22.SnapshotIAVLItem;
                    fromPartial(object: Partial<_22.SnapshotIAVLItem>): _22.SnapshotIAVLItem;
                    fromAmino(object: _22.SnapshotIAVLItemAmino): _22.SnapshotIAVLItem;
                    toAmino(message: _22.SnapshotIAVLItem): _22.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _22.SnapshotIAVLItemAminoMsg): _22.SnapshotIAVLItem;
                    toAminoMsg(message: _22.SnapshotIAVLItem): _22.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _22.SnapshotIAVLItemProtoMsg): _22.SnapshotIAVLItem;
                    toProto(message: _22.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _22.SnapshotIAVLItem): _22.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _22.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _22.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_22.SnapshotExtensionMeta>): _22.SnapshotExtensionMeta;
                    fromAmino(object: _22.SnapshotExtensionMetaAmino): _22.SnapshotExtensionMeta;
                    toAmino(message: _22.SnapshotExtensionMeta): _22.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _22.SnapshotExtensionMetaAminoMsg): _22.SnapshotExtensionMeta;
                    toAminoMsg(message: _22.SnapshotExtensionMeta): _22.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _22.SnapshotExtensionMetaProtoMsg): _22.SnapshotExtensionMeta;
                    toProto(message: _22.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _22.SnapshotExtensionMeta): _22.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _22.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _22.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_22.SnapshotExtensionPayload>): _22.SnapshotExtensionPayload;
                    fromAmino(object: _22.SnapshotExtensionPayloadAmino): _22.SnapshotExtensionPayload;
                    toAmino(message: _22.SnapshotExtensionPayload): _22.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _22.SnapshotExtensionPayloadAminoMsg): _22.SnapshotExtensionPayload;
                    toAminoMsg(message: _22.SnapshotExtensionPayload): _22.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _22.SnapshotExtensionPayloadProtoMsg): _22.SnapshotExtensionPayload;
                    toProto(message: _22.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _22.SnapshotExtensionPayload): _22.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _24.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.StoreKVPair;
                    fromPartial(object: Partial<_24.StoreKVPair>): _24.StoreKVPair;
                    fromAmino(object: _24.StoreKVPairAmino): _24.StoreKVPair;
                    toAmino(message: _24.StoreKVPair): _24.StoreKVPairAmino;
                    fromAminoMsg(object: _24.StoreKVPairAminoMsg): _24.StoreKVPair;
                    toAminoMsg(message: _24.StoreKVPair): _24.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _24.StoreKVPairProtoMsg): _24.StoreKVPair;
                    toProto(message: _24.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _24.StoreKVPair): _24.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _24.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.BlockMetadata;
                    fromPartial(object: Partial<_24.BlockMetadata>): _24.BlockMetadata;
                    fromAmino(object: _24.BlockMetadataAmino): _24.BlockMetadata;
                    toAmino(message: _24.BlockMetadata): _24.BlockMetadataAmino;
                    fromAminoMsg(object: _24.BlockMetadataAminoMsg): _24.BlockMetadata;
                    toAminoMsg(message: _24.BlockMetadata): _24.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _24.BlockMetadataProtoMsg): _24.BlockMetadata;
                    toProto(message: _24.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _24.BlockMetadata): _24.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _24.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_24.BlockMetadata_DeliverTx>): _24.BlockMetadata_DeliverTx;
                    fromAmino(object: _24.BlockMetadata_DeliverTxAmino): _24.BlockMetadata_DeliverTx;
                    toAmino(message: _24.BlockMetadata_DeliverTx): _24.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _24.BlockMetadata_DeliverTxAminoMsg): _24.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _24.BlockMetadata_DeliverTx): _24.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _24.BlockMetadata_DeliverTxProtoMsg): _24.BlockMetadata_DeliverTx;
                    toProto(message: _24.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _24.BlockMetadata_DeliverTx): _24.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _23.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.CommitInfo;
                    fromPartial(object: Partial<_23.CommitInfo>): _23.CommitInfo;
                    fromAmino(object: _23.CommitInfoAmino): _23.CommitInfo;
                    toAmino(message: _23.CommitInfo): _23.CommitInfoAmino;
                    fromAminoMsg(object: _23.CommitInfoAminoMsg): _23.CommitInfo;
                    toAminoMsg(message: _23.CommitInfo): _23.CommitInfoAminoMsg;
                    fromProtoMsg(message: _23.CommitInfoProtoMsg): _23.CommitInfo;
                    toProto(message: _23.CommitInfo): Uint8Array;
                    toProtoMsg(message: _23.CommitInfo): _23.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _23.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.StoreInfo;
                    fromPartial(object: Partial<_23.StoreInfo>): _23.StoreInfo;
                    fromAmino(object: _23.StoreInfoAmino): _23.StoreInfo;
                    toAmino(message: _23.StoreInfo): _23.StoreInfoAmino;
                    fromAminoMsg(object: _23.StoreInfoAminoMsg): _23.StoreInfo;
                    toAminoMsg(message: _23.StoreInfo): _23.StoreInfoAminoMsg;
                    fromProtoMsg(message: _23.StoreInfoProtoMsg): _23.StoreInfo;
                    toProto(message: _23.StoreInfo): Uint8Array;
                    toProtoMsg(message: _23.StoreInfo): _23.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _23.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.CommitID;
                    fromPartial(object: Partial<_23.CommitID>): _23.CommitID;
                    fromAmino(object: _23.CommitIDAmino): _23.CommitID;
                    toAmino(message: _23.CommitID): _23.CommitIDAmino;
                    fromAminoMsg(object: _23.CommitIDAminoMsg): _23.CommitID;
                    toAminoMsg(message: _23.CommitID): _23.CommitIDAminoMsg;
                    fromProtoMsg(message: _23.CommitIDProtoMsg): _23.CommitID;
                    toProto(message: _23.CommitID): Uint8Array;
                    toProtoMsg(message: _23.CommitID): _23.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _218.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _25.GetNodeInfoRequest): Promise<_25.GetNodeInfoResponse>;
                    getSyncing(request?: _25.GetSyncingRequest): Promise<_25.GetSyncingResponse>;
                    getLatestBlock(request?: _25.GetLatestBlockRequest): Promise<_25.GetLatestBlockResponse>;
                    getBlockByHeight(request: _25.GetBlockByHeightRequest): Promise<_25.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _25.GetLatestValidatorSetRequest): Promise<_25.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _25.GetValidatorSetByHeightRequest): Promise<_25.GetValidatorSetByHeightResponse>;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _25.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_25.GetValidatorSetByHeightRequest>): _25.GetValidatorSetByHeightRequest;
                    fromAmino(object: _25.GetValidatorSetByHeightRequestAmino): _25.GetValidatorSetByHeightRequest;
                    toAmino(message: _25.GetValidatorSetByHeightRequest): _25.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _25.GetValidatorSetByHeightRequestAminoMsg): _25.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _25.GetValidatorSetByHeightRequest): _25.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _25.GetValidatorSetByHeightRequestProtoMsg): _25.GetValidatorSetByHeightRequest;
                    toProto(message: _25.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _25.GetValidatorSetByHeightRequest): _25.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _25.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_25.GetValidatorSetByHeightResponse>): _25.GetValidatorSetByHeightResponse;
                    fromAmino(object: _25.GetValidatorSetByHeightResponseAmino): _25.GetValidatorSetByHeightResponse;
                    toAmino(message: _25.GetValidatorSetByHeightResponse): _25.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _25.GetValidatorSetByHeightResponseAminoMsg): _25.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _25.GetValidatorSetByHeightResponse): _25.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _25.GetValidatorSetByHeightResponseProtoMsg): _25.GetValidatorSetByHeightResponse;
                    toProto(message: _25.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _25.GetValidatorSetByHeightResponse): _25.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _25.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_25.GetLatestValidatorSetRequest>): _25.GetLatestValidatorSetRequest;
                    fromAmino(object: _25.GetLatestValidatorSetRequestAmino): _25.GetLatestValidatorSetRequest;
                    toAmino(message: _25.GetLatestValidatorSetRequest): _25.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _25.GetLatestValidatorSetRequestAminoMsg): _25.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _25.GetLatestValidatorSetRequest): _25.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _25.GetLatestValidatorSetRequestProtoMsg): _25.GetLatestValidatorSetRequest;
                    toProto(message: _25.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _25.GetLatestValidatorSetRequest): _25.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _25.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_25.GetLatestValidatorSetResponse>): _25.GetLatestValidatorSetResponse;
                    fromAmino(object: _25.GetLatestValidatorSetResponseAmino): _25.GetLatestValidatorSetResponse;
                    toAmino(message: _25.GetLatestValidatorSetResponse): _25.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _25.GetLatestValidatorSetResponseAminoMsg): _25.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _25.GetLatestValidatorSetResponse): _25.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _25.GetLatestValidatorSetResponseProtoMsg): _25.GetLatestValidatorSetResponse;
                    toProto(message: _25.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _25.GetLatestValidatorSetResponse): _25.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _25.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.Validator;
                    fromPartial(object: Partial<_25.Validator>): _25.Validator;
                    fromAmino(object: _25.ValidatorAmino): _25.Validator;
                    toAmino(message: _25.Validator): _25.ValidatorAmino;
                    fromAminoMsg(object: _25.ValidatorAminoMsg): _25.Validator;
                    toAminoMsg(message: _25.Validator): _25.ValidatorAminoMsg;
                    fromProtoMsg(message: _25.ValidatorProtoMsg): _25.Validator;
                    toProto(message: _25.Validator): Uint8Array;
                    toProtoMsg(message: _25.Validator): _25.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _25.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_25.GetBlockByHeightRequest>): _25.GetBlockByHeightRequest;
                    fromAmino(object: _25.GetBlockByHeightRequestAmino): _25.GetBlockByHeightRequest;
                    toAmino(message: _25.GetBlockByHeightRequest): _25.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _25.GetBlockByHeightRequestAminoMsg): _25.GetBlockByHeightRequest;
                    toAminoMsg(message: _25.GetBlockByHeightRequest): _25.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _25.GetBlockByHeightRequestProtoMsg): _25.GetBlockByHeightRequest;
                    toProto(message: _25.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _25.GetBlockByHeightRequest): _25.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _25.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_25.GetBlockByHeightResponse>): _25.GetBlockByHeightResponse;
                    fromAmino(object: _25.GetBlockByHeightResponseAmino): _25.GetBlockByHeightResponse;
                    toAmino(message: _25.GetBlockByHeightResponse): _25.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _25.GetBlockByHeightResponseAminoMsg): _25.GetBlockByHeightResponse;
                    toAminoMsg(message: _25.GetBlockByHeightResponse): _25.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _25.GetBlockByHeightResponseProtoMsg): _25.GetBlockByHeightResponse;
                    toProto(message: _25.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _25.GetBlockByHeightResponse): _25.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _25.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.GetLatestBlockRequest;
                    fromPartial(_: Partial<_25.GetLatestBlockRequest>): _25.GetLatestBlockRequest;
                    fromAmino(_: _25.GetLatestBlockRequestAmino): _25.GetLatestBlockRequest;
                    toAmino(_: _25.GetLatestBlockRequest): _25.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _25.GetLatestBlockRequestAminoMsg): _25.GetLatestBlockRequest;
                    toAminoMsg(message: _25.GetLatestBlockRequest): _25.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _25.GetLatestBlockRequestProtoMsg): _25.GetLatestBlockRequest;
                    toProto(message: _25.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _25.GetLatestBlockRequest): _25.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _25.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.GetLatestBlockResponse;
                    fromPartial(object: Partial<_25.GetLatestBlockResponse>): _25.GetLatestBlockResponse;
                    fromAmino(object: _25.GetLatestBlockResponseAmino): _25.GetLatestBlockResponse;
                    toAmino(message: _25.GetLatestBlockResponse): _25.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _25.GetLatestBlockResponseAminoMsg): _25.GetLatestBlockResponse;
                    toAminoMsg(message: _25.GetLatestBlockResponse): _25.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _25.GetLatestBlockResponseProtoMsg): _25.GetLatestBlockResponse;
                    toProto(message: _25.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _25.GetLatestBlockResponse): _25.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _25.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.GetSyncingRequest;
                    fromPartial(_: Partial<_25.GetSyncingRequest>): _25.GetSyncingRequest;
                    fromAmino(_: _25.GetSyncingRequestAmino): _25.GetSyncingRequest;
                    toAmino(_: _25.GetSyncingRequest): _25.GetSyncingRequestAmino;
                    fromAminoMsg(object: _25.GetSyncingRequestAminoMsg): _25.GetSyncingRequest;
                    toAminoMsg(message: _25.GetSyncingRequest): _25.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _25.GetSyncingRequestProtoMsg): _25.GetSyncingRequest;
                    toProto(message: _25.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _25.GetSyncingRequest): _25.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _25.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.GetSyncingResponse;
                    fromPartial(object: Partial<_25.GetSyncingResponse>): _25.GetSyncingResponse;
                    fromAmino(object: _25.GetSyncingResponseAmino): _25.GetSyncingResponse;
                    toAmino(message: _25.GetSyncingResponse): _25.GetSyncingResponseAmino;
                    fromAminoMsg(object: _25.GetSyncingResponseAminoMsg): _25.GetSyncingResponse;
                    toAminoMsg(message: _25.GetSyncingResponse): _25.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _25.GetSyncingResponseProtoMsg): _25.GetSyncingResponse;
                    toProto(message: _25.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _25.GetSyncingResponse): _25.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _25.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.GetNodeInfoRequest;
                    fromPartial(_: Partial<_25.GetNodeInfoRequest>): _25.GetNodeInfoRequest;
                    fromAmino(_: _25.GetNodeInfoRequestAmino): _25.GetNodeInfoRequest;
                    toAmino(_: _25.GetNodeInfoRequest): _25.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _25.GetNodeInfoRequestAminoMsg): _25.GetNodeInfoRequest;
                    toAminoMsg(message: _25.GetNodeInfoRequest): _25.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _25.GetNodeInfoRequestProtoMsg): _25.GetNodeInfoRequest;
                    toProto(message: _25.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _25.GetNodeInfoRequest): _25.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _25.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.GetNodeInfoResponse;
                    fromPartial(object: Partial<_25.GetNodeInfoResponse>): _25.GetNodeInfoResponse;
                    fromAmino(object: _25.GetNodeInfoResponseAmino): _25.GetNodeInfoResponse;
                    toAmino(message: _25.GetNodeInfoResponse): _25.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _25.GetNodeInfoResponseAminoMsg): _25.GetNodeInfoResponse;
                    toAminoMsg(message: _25.GetNodeInfoResponse): _25.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _25.GetNodeInfoResponseProtoMsg): _25.GetNodeInfoResponse;
                    toProto(message: _25.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _25.GetNodeInfoResponse): _25.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _25.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.VersionInfo;
                    fromPartial(object: Partial<_25.VersionInfo>): _25.VersionInfo;
                    fromAmino(object: _25.VersionInfoAmino): _25.VersionInfo;
                    toAmino(message: _25.VersionInfo): _25.VersionInfoAmino;
                    fromAminoMsg(object: _25.VersionInfoAminoMsg): _25.VersionInfo;
                    toAminoMsg(message: _25.VersionInfo): _25.VersionInfoAminoMsg;
                    fromProtoMsg(message: _25.VersionInfoProtoMsg): _25.VersionInfo;
                    toProto(message: _25.VersionInfo): Uint8Array;
                    toProtoMsg(message: _25.VersionInfo): _25.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _25.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.Module;
                    fromPartial(object: Partial<_25.Module>): _25.Module;
                    fromAmino(object: _25.ModuleAmino): _25.Module;
                    toAmino(message: _25.Module): _25.ModuleAmino;
                    fromAminoMsg(object: _25.ModuleAminoMsg): _25.Module;
                    toAminoMsg(message: _25.Module): _25.ModuleAminoMsg;
                    fromProtoMsg(message: _25.ModuleProtoMsg): _25.Module;
                    toProto(message: _25.Module): Uint8Array;
                    toProtoMsg(message: _25.Module): _25.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _26.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.Coin;
                fromPartial(object: Partial<_26.Coin>): _26.Coin;
                fromAmino(object: _26.CoinAmino): _26.Coin;
                toAmino(message: _26.Coin): _26.CoinAmino;
                fromAminoMsg(object: _26.CoinAminoMsg): _26.Coin;
                toAminoMsg(message: _26.Coin): _26.CoinAminoMsg;
                fromProtoMsg(message: _26.CoinProtoMsg): _26.Coin;
                toProto(message: _26.Coin): Uint8Array;
                toProtoMsg(message: _26.Coin): _26.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _26.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.DecCoin;
                fromPartial(object: Partial<_26.DecCoin>): _26.DecCoin;
                fromAmino(object: _26.DecCoinAmino): _26.DecCoin;
                toAmino(message: _26.DecCoin): _26.DecCoinAmino;
                fromAminoMsg(object: _26.DecCoinAminoMsg): _26.DecCoin;
                toAminoMsg(message: _26.DecCoin): _26.DecCoinAminoMsg;
                fromProtoMsg(message: _26.DecCoinProtoMsg): _26.DecCoin;
                toProto(message: _26.DecCoin): Uint8Array;
                toProtoMsg(message: _26.DecCoin): _26.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _26.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.IntProto;
                fromPartial(object: Partial<_26.IntProto>): _26.IntProto;
                fromAmino(object: _26.IntProtoAmino): _26.IntProto;
                toAmino(message: _26.IntProto): _26.IntProtoAmino;
                fromAminoMsg(object: _26.IntProtoAminoMsg): _26.IntProto;
                toAminoMsg(message: _26.IntProto): _26.IntProtoAminoMsg;
                fromProtoMsg(message: _26.IntProtoProtoMsg): _26.IntProto;
                toProto(message: _26.IntProto): Uint8Array;
                toProtoMsg(message: _26.IntProto): _26.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _26.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.DecProto;
                fromPartial(object: Partial<_26.DecProto>): _26.DecProto;
                fromAmino(object: _26.DecProtoAmino): _26.DecProto;
                toAmino(message: _26.DecProto): _26.DecProtoAmino;
                fromAminoMsg(object: _26.DecProtoAminoMsg): _26.DecProto;
                toAminoMsg(message: _26.DecProto): _26.DecProtoAminoMsg;
                fromProtoMsg(message: _26.DecProtoProtoMsg): _26.DecProto;
                toProto(message: _26.DecProto): Uint8Array;
                toProtoMsg(message: _26.DecProto): _26.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _28.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.GenesisOwners;
                fromPartial(object: Partial<_28.GenesisOwners>): _28.GenesisOwners;
                fromAmino(object: _28.GenesisOwnersAmino): _28.GenesisOwners;
                toAmino(message: _28.GenesisOwners): _28.GenesisOwnersAmino;
                fromAminoMsg(object: _28.GenesisOwnersAminoMsg): _28.GenesisOwners;
                toAminoMsg(message: _28.GenesisOwners): _28.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _28.GenesisOwnersProtoMsg): _28.GenesisOwners;
                toProto(message: _28.GenesisOwners): Uint8Array;
                toProtoMsg(message: _28.GenesisOwners): _28.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _28.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.GenesisState;
                fromPartial(object: Partial<_28.GenesisState>): _28.GenesisState;
                fromAmino(object: _28.GenesisStateAmino): _28.GenesisState;
                toAmino(message: _28.GenesisState): _28.GenesisStateAmino;
                fromAminoMsg(object: _28.GenesisStateAminoMsg): _28.GenesisState;
                toAminoMsg(message: _28.GenesisState): _28.GenesisStateAminoMsg;
                fromProtoMsg(message: _28.GenesisStateProtoMsg): _28.GenesisState;
                toProto(message: _28.GenesisState): Uint8Array;
                toProtoMsg(message: _28.GenesisState): _28.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _27.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.Capability;
                fromPartial(object: Partial<_27.Capability>): _27.Capability;
                fromAmino(object: _27.CapabilityAmino): _27.Capability;
                toAmino(message: _27.Capability): _27.CapabilityAmino;
                fromAminoMsg(object: _27.CapabilityAminoMsg): _27.Capability;
                toAminoMsg(message: _27.Capability): _27.CapabilityAminoMsg;
                fromProtoMsg(message: _27.CapabilityProtoMsg): _27.Capability;
                toProto(message: _27.Capability): Uint8Array;
                toProtoMsg(message: _27.Capability): _27.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _27.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.Owner;
                fromPartial(object: Partial<_27.Owner>): _27.Owner;
                fromAmino(object: _27.OwnerAmino): _27.Owner;
                toAmino(message: _27.Owner): _27.OwnerAmino;
                fromAminoMsg(object: _27.OwnerAminoMsg): _27.Owner;
                toAminoMsg(message: _27.Owner): _27.OwnerAminoMsg;
                fromProtoMsg(message: _27.OwnerProtoMsg): _27.Owner;
                toProto(message: _27.Owner): Uint8Array;
                toProtoMsg(message: _27.Owner): _27.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _27.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.CapabilityOwners;
                fromPartial(object: Partial<_27.CapabilityOwners>): _27.CapabilityOwners;
                fromAmino(object: _27.CapabilityOwnersAmino): _27.CapabilityOwners;
                toAmino(message: _27.CapabilityOwners): _27.CapabilityOwnersAmino;
                fromAminoMsg(object: _27.CapabilityOwnersAminoMsg): _27.CapabilityOwners;
                toAminoMsg(message: _27.CapabilityOwners): _27.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _27.CapabilityOwnersProtoMsg): _27.CapabilityOwners;
                toProto(message: _27.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _27.CapabilityOwners): _27.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _231.MsgClientImpl;
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _30.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _30.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _30.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _30.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _30.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _30.MsgVerifyInvariant) => _30.MsgVerifyInvariantAmino;
                    fromAmino: (object: _30.MsgVerifyInvariantAmino) => _30.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _30.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.MsgVerifyInvariant;
                fromPartial(object: Partial<_30.MsgVerifyInvariant>): _30.MsgVerifyInvariant;
                fromAmino(object: _30.MsgVerifyInvariantAmino): _30.MsgVerifyInvariant;
                toAmino(message: _30.MsgVerifyInvariant): _30.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _30.MsgVerifyInvariantAminoMsg): _30.MsgVerifyInvariant;
                toAminoMsg(message: _30.MsgVerifyInvariant): _30.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _30.MsgVerifyInvariantProtoMsg): _30.MsgVerifyInvariant;
                toProto(message: _30.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _30.MsgVerifyInvariant): _30.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _30.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_30.MsgVerifyInvariantResponse>): _30.MsgVerifyInvariantResponse;
                fromAmino(_: _30.MsgVerifyInvariantResponseAmino): _30.MsgVerifyInvariantResponse;
                toAmino(_: _30.MsgVerifyInvariantResponse): _30.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _30.MsgVerifyInvariantResponseAminoMsg): _30.MsgVerifyInvariantResponse;
                toAminoMsg(message: _30.MsgVerifyInvariantResponse): _30.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _30.MsgVerifyInvariantResponseProtoMsg): _30.MsgVerifyInvariantResponse;
                toProto(message: _30.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _30.MsgVerifyInvariantResponse): _30.MsgVerifyInvariantResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _29.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.GenesisState;
                fromPartial(object: Partial<_29.GenesisState>): _29.GenesisState;
                fromAmino(object: _29.GenesisStateAmino): _29.GenesisState;
                toAmino(message: _29.GenesisState): _29.GenesisStateAmino;
                fromAminoMsg(object: _29.GenesisStateAminoMsg): _29.GenesisState;
                toAminoMsg(message: _29.GenesisState): _29.GenesisStateAminoMsg;
                fromProtoMsg(message: _29.GenesisStateProtoMsg): _29.GenesisState;
                toProto(message: _29.GenesisState): Uint8Array;
                toProtoMsg(message: _29.GenesisState): _29.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _31.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.PubKey;
                fromPartial(object: Partial<_31.PubKey>): _31.PubKey;
                fromAmino(object: _31.PubKeyAmino): _31.PubKey;
                toAmino(message: _31.PubKey): _31.PubKeyAmino;
                fromAminoMsg(object: _31.PubKeyAminoMsg): _31.PubKey;
                toAminoMsg(message: _31.PubKey): _31.PubKeyAminoMsg;
                fromProtoMsg(message: _31.PubKeyProtoMsg): _31.PubKey;
                toProto(message: _31.PubKey): Uint8Array;
                toProtoMsg(message: _31.PubKey): _31.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _31.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.PrivKey;
                fromPartial(object: Partial<_31.PrivKey>): _31.PrivKey;
                fromAmino(object: _31.PrivKeyAmino): _31.PrivKey;
                toAmino(message: _31.PrivKey): _31.PrivKeyAmino;
                fromAminoMsg(object: _31.PrivKeyAminoMsg): _31.PrivKey;
                toAminoMsg(message: _31.PrivKey): _31.PrivKeyAminoMsg;
                fromProtoMsg(message: _31.PrivKeyProtoMsg): _31.PrivKey;
                toProto(message: _31.PrivKey): Uint8Array;
                toProtoMsg(message: _31.PrivKey): _31.PrivKeyProtoMsg;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _32.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.LegacyAminoPubKey;
                fromPartial(object: Partial<_32.LegacyAminoPubKey>): _32.LegacyAminoPubKey;
                fromAmino(object: _32.LegacyAminoPubKeyAmino): _32.LegacyAminoPubKey;
                toAmino(message: _32.LegacyAminoPubKey): _32.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _32.LegacyAminoPubKeyAminoMsg): _32.LegacyAminoPubKey;
                toAminoMsg(message: _32.LegacyAminoPubKey): _32.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _32.LegacyAminoPubKeyProtoMsg): _32.LegacyAminoPubKey;
                toProto(message: _32.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _32.LegacyAminoPubKey): _32.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _33.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.PubKey;
                fromPartial(object: Partial<_33.PubKey>): _33.PubKey;
                fromAmino(object: _33.PubKeyAmino): _33.PubKey;
                toAmino(message: _33.PubKey): _33.PubKeyAmino;
                fromAminoMsg(object: _33.PubKeyAminoMsg): _33.PubKey;
                toAminoMsg(message: _33.PubKey): _33.PubKeyAminoMsg;
                fromProtoMsg(message: _33.PubKeyProtoMsg): _33.PubKey;
                toProto(message: _33.PubKey): Uint8Array;
                toProtoMsg(message: _33.PubKey): _33.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _33.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.PrivKey;
                fromPartial(object: Partial<_33.PrivKey>): _33.PrivKey;
                fromAmino(object: _33.PrivKeyAmino): _33.PrivKey;
                toAmino(message: _33.PrivKey): _33.PrivKeyAmino;
                fromAminoMsg(object: _33.PrivKeyAminoMsg): _33.PrivKey;
                toAminoMsg(message: _33.PrivKey): _33.PrivKeyAminoMsg;
                fromProtoMsg(message: _33.PrivKeyProtoMsg): _33.PrivKey;
                toProto(message: _33.PrivKey): Uint8Array;
                toProtoMsg(message: _33.PrivKey): _33.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _34.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.PubKey;
                fromPartial(object: Partial<_34.PubKey>): _34.PubKey;
                fromAmino(object: _34.PubKeyAmino): _34.PubKey;
                toAmino(message: _34.PubKey): _34.PubKeyAmino;
                fromAminoMsg(object: _34.PubKeyAminoMsg): _34.PubKey;
                toAminoMsg(message: _34.PubKey): _34.PubKeyAminoMsg;
                fromProtoMsg(message: _34.PubKeyProtoMsg): _34.PubKey;
                toProto(message: _34.PubKey): Uint8Array;
                toProtoMsg(message: _34.PubKey): _34.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _34.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.PrivKey;
                fromPartial(object: Partial<_34.PrivKey>): _34.PrivKey;
                fromAmino(object: _34.PrivKeyAmino): _34.PrivKey;
                toAmino(message: _34.PrivKey): _34.PrivKeyAmino;
                fromAminoMsg(object: _34.PrivKeyAminoMsg): _34.PrivKey;
                toAminoMsg(message: _34.PrivKey): _34.PrivKeyAminoMsg;
                fromProtoMsg(message: _34.PrivKeyProtoMsg): _34.PrivKey;
                toProto(message: _34.PrivKey): Uint8Array;
                toProtoMsg(message: _34.PrivKey): _34.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _232.MsgClientImpl;
            QueryClientImpl: typeof _219.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _37.QueryParamsRequest): Promise<_37.QueryParamsResponse>;
                validatorOutstandingRewards(request: _37.QueryValidatorOutstandingRewardsRequest): Promise<_37.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _37.QueryValidatorCommissionRequest): Promise<_37.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _37.QueryValidatorSlashesRequest): Promise<_37.QueryValidatorSlashesResponse>;
                delegationRewards(request: _37.QueryDelegationRewardsRequest): Promise<_37.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _37.QueryDelegationTotalRewardsRequest): Promise<_37.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _37.QueryDelegatorValidatorsRequest): Promise<_37.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _37.QueryDelegatorWithdrawAddressRequest): Promise<_37.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _37.QueryCommunityPoolRequest): Promise<_37.QueryCommunityPoolResponse>;
                tokenizeShareRecordReward(request: _37.QueryTokenizeShareRecordRewardRequest): Promise<_37.QueryTokenizeShareRecordRewardResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _38.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _38.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _38.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawTokenizeShareRecordReward(value: _38.MsgWithdrawTokenizeShareRecordReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawAllTokenizeShareRecordReward(value: _38.MsgWithdrawAllTokenizeShareRecordReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _38.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _38.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _38.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _38.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _38.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _38.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _38.MsgWithdrawValidatorCommission;
                    };
                    withdrawTokenizeShareRecordReward(value: _38.MsgWithdrawTokenizeShareRecordReward): {
                        typeUrl: string;
                        value: _38.MsgWithdrawTokenizeShareRecordReward;
                    };
                    withdrawAllTokenizeShareRecordReward(value: _38.MsgWithdrawAllTokenizeShareRecordReward): {
                        typeUrl: string;
                        value: _38.MsgWithdrawAllTokenizeShareRecordReward;
                    };
                    fundCommunityPool(value: _38.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _38.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _38.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _38.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _38.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _38.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _38.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _38.MsgWithdrawValidatorCommission;
                    };
                    withdrawTokenizeShareRecordReward(value: _38.MsgWithdrawTokenizeShareRecordReward): {
                        typeUrl: string;
                        value: _38.MsgWithdrawTokenizeShareRecordReward;
                    };
                    withdrawAllTokenizeShareRecordReward(value: _38.MsgWithdrawAllTokenizeShareRecordReward): {
                        typeUrl: string;
                        value: _38.MsgWithdrawAllTokenizeShareRecordReward;
                    };
                    fundCommunityPool(value: _38.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _38.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _38.MsgSetWithdrawAddress) => _38.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _38.MsgSetWithdrawAddressAmino) => _38.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _38.MsgWithdrawDelegatorReward) => _38.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _38.MsgWithdrawDelegatorRewardAmino) => _38.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _38.MsgWithdrawValidatorCommission) => _38.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _38.MsgWithdrawValidatorCommissionAmino) => _38.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawTokenizeShareRecordReward": {
                    aminoType: string;
                    toAmino: (message: _38.MsgWithdrawTokenizeShareRecordReward) => _38.MsgWithdrawTokenizeShareRecordRewardAmino;
                    fromAmino: (object: _38.MsgWithdrawTokenizeShareRecordRewardAmino) => _38.MsgWithdrawTokenizeShareRecordReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawAllTokenizeShareRecordReward": {
                    aminoType: string;
                    toAmino: (message: _38.MsgWithdrawAllTokenizeShareRecordReward) => _38.MsgWithdrawAllTokenizeShareRecordRewardAmino;
                    fromAmino: (object: _38.MsgWithdrawAllTokenizeShareRecordRewardAmino) => _38.MsgWithdrawAllTokenizeShareRecordReward;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _38.MsgFundCommunityPool) => _38.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _38.MsgFundCommunityPoolAmino) => _38.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _38.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_38.MsgSetWithdrawAddress>): _38.MsgSetWithdrawAddress;
                fromAmino(object: _38.MsgSetWithdrawAddressAmino): _38.MsgSetWithdrawAddress;
                toAmino(message: _38.MsgSetWithdrawAddress): _38.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _38.MsgSetWithdrawAddressAminoMsg): _38.MsgSetWithdrawAddress;
                toAminoMsg(message: _38.MsgSetWithdrawAddress): _38.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _38.MsgSetWithdrawAddressProtoMsg): _38.MsgSetWithdrawAddress;
                toProto(message: _38.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _38.MsgSetWithdrawAddress): _38.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _38.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_38.MsgSetWithdrawAddressResponse>): _38.MsgSetWithdrawAddressResponse;
                fromAmino(_: _38.MsgSetWithdrawAddressResponseAmino): _38.MsgSetWithdrawAddressResponse;
                toAmino(_: _38.MsgSetWithdrawAddressResponse): _38.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _38.MsgSetWithdrawAddressResponseAminoMsg): _38.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _38.MsgSetWithdrawAddressResponse): _38.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _38.MsgSetWithdrawAddressResponseProtoMsg): _38.MsgSetWithdrawAddressResponse;
                toProto(message: _38.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _38.MsgSetWithdrawAddressResponse): _38.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _38.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_38.MsgWithdrawDelegatorReward>): _38.MsgWithdrawDelegatorReward;
                fromAmino(object: _38.MsgWithdrawDelegatorRewardAmino): _38.MsgWithdrawDelegatorReward;
                toAmino(message: _38.MsgWithdrawDelegatorReward): _38.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _38.MsgWithdrawDelegatorRewardAminoMsg): _38.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _38.MsgWithdrawDelegatorReward): _38.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _38.MsgWithdrawDelegatorRewardProtoMsg): _38.MsgWithdrawDelegatorReward;
                toProto(message: _38.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _38.MsgWithdrawDelegatorReward): _38.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _38.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_38.MsgWithdrawDelegatorRewardResponse>): _38.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _38.MsgWithdrawDelegatorRewardResponseAmino): _38.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _38.MsgWithdrawDelegatorRewardResponse): _38.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _38.MsgWithdrawDelegatorRewardResponseAminoMsg): _38.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _38.MsgWithdrawDelegatorRewardResponse): _38.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _38.MsgWithdrawDelegatorRewardResponseProtoMsg): _38.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _38.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _38.MsgWithdrawDelegatorRewardResponse): _38.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _38.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_38.MsgWithdrawValidatorCommission>): _38.MsgWithdrawValidatorCommission;
                fromAmino(object: _38.MsgWithdrawValidatorCommissionAmino): _38.MsgWithdrawValidatorCommission;
                toAmino(message: _38.MsgWithdrawValidatorCommission): _38.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _38.MsgWithdrawValidatorCommissionAminoMsg): _38.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _38.MsgWithdrawValidatorCommission): _38.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _38.MsgWithdrawValidatorCommissionProtoMsg): _38.MsgWithdrawValidatorCommission;
                toProto(message: _38.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _38.MsgWithdrawValidatorCommission): _38.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _38.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_38.MsgWithdrawValidatorCommissionResponse>): _38.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _38.MsgWithdrawValidatorCommissionResponseAmino): _38.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _38.MsgWithdrawValidatorCommissionResponse): _38.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _38.MsgWithdrawValidatorCommissionResponseAminoMsg): _38.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _38.MsgWithdrawValidatorCommissionResponse): _38.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _38.MsgWithdrawValidatorCommissionResponseProtoMsg): _38.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _38.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _38.MsgWithdrawValidatorCommissionResponse): _38.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgWithdrawTokenizeShareRecordReward: {
                typeUrl: string;
                encode(message: _38.MsgWithdrawTokenizeShareRecordReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgWithdrawTokenizeShareRecordReward;
                fromPartial(object: Partial<_38.MsgWithdrawTokenizeShareRecordReward>): _38.MsgWithdrawTokenizeShareRecordReward;
                fromAmino(object: _38.MsgWithdrawTokenizeShareRecordRewardAmino): _38.MsgWithdrawTokenizeShareRecordReward;
                toAmino(message: _38.MsgWithdrawTokenizeShareRecordReward): _38.MsgWithdrawTokenizeShareRecordRewardAmino;
                fromAminoMsg(object: _38.MsgWithdrawTokenizeShareRecordRewardAminoMsg): _38.MsgWithdrawTokenizeShareRecordReward;
                toAminoMsg(message: _38.MsgWithdrawTokenizeShareRecordReward): _38.MsgWithdrawTokenizeShareRecordRewardAminoMsg;
                fromProtoMsg(message: _38.MsgWithdrawTokenizeShareRecordRewardProtoMsg): _38.MsgWithdrawTokenizeShareRecordReward;
                toProto(message: _38.MsgWithdrawTokenizeShareRecordReward): Uint8Array;
                toProtoMsg(message: _38.MsgWithdrawTokenizeShareRecordReward): _38.MsgWithdrawTokenizeShareRecordRewardProtoMsg;
            };
            MsgWithdrawTokenizeShareRecordRewardResponse: {
                typeUrl: string;
                encode(_: _38.MsgWithdrawTokenizeShareRecordRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgWithdrawTokenizeShareRecordRewardResponse;
                fromPartial(_: Partial<_38.MsgWithdrawTokenizeShareRecordRewardResponse>): _38.MsgWithdrawTokenizeShareRecordRewardResponse;
                fromAmino(_: _38.MsgWithdrawTokenizeShareRecordRewardResponseAmino): _38.MsgWithdrawTokenizeShareRecordRewardResponse;
                toAmino(_: _38.MsgWithdrawTokenizeShareRecordRewardResponse): _38.MsgWithdrawTokenizeShareRecordRewardResponseAmino;
                fromAminoMsg(object: _38.MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg): _38.MsgWithdrawTokenizeShareRecordRewardResponse;
                toAminoMsg(message: _38.MsgWithdrawTokenizeShareRecordRewardResponse): _38.MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg;
                fromProtoMsg(message: _38.MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg): _38.MsgWithdrawTokenizeShareRecordRewardResponse;
                toProto(message: _38.MsgWithdrawTokenizeShareRecordRewardResponse): Uint8Array;
                toProtoMsg(message: _38.MsgWithdrawTokenizeShareRecordRewardResponse): _38.MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg;
            };
            MsgWithdrawAllTokenizeShareRecordReward: {
                typeUrl: string;
                encode(message: _38.MsgWithdrawAllTokenizeShareRecordReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgWithdrawAllTokenizeShareRecordReward;
                fromPartial(object: Partial<_38.MsgWithdrawAllTokenizeShareRecordReward>): _38.MsgWithdrawAllTokenizeShareRecordReward;
                fromAmino(object: _38.MsgWithdrawAllTokenizeShareRecordRewardAmino): _38.MsgWithdrawAllTokenizeShareRecordReward;
                toAmino(message: _38.MsgWithdrawAllTokenizeShareRecordReward): _38.MsgWithdrawAllTokenizeShareRecordRewardAmino;
                fromAminoMsg(object: _38.MsgWithdrawAllTokenizeShareRecordRewardAminoMsg): _38.MsgWithdrawAllTokenizeShareRecordReward;
                toAminoMsg(message: _38.MsgWithdrawAllTokenizeShareRecordReward): _38.MsgWithdrawAllTokenizeShareRecordRewardAminoMsg;
                fromProtoMsg(message: _38.MsgWithdrawAllTokenizeShareRecordRewardProtoMsg): _38.MsgWithdrawAllTokenizeShareRecordReward;
                toProto(message: _38.MsgWithdrawAllTokenizeShareRecordReward): Uint8Array;
                toProtoMsg(message: _38.MsgWithdrawAllTokenizeShareRecordReward): _38.MsgWithdrawAllTokenizeShareRecordRewardProtoMsg;
            };
            MsgWithdrawAllTokenizeShareRecordRewardResponse: {
                typeUrl: string;
                encode(_: _38.MsgWithdrawAllTokenizeShareRecordRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                fromPartial(_: Partial<_38.MsgWithdrawAllTokenizeShareRecordRewardResponse>): _38.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                fromAmino(_: _38.MsgWithdrawAllTokenizeShareRecordRewardResponseAmino): _38.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                toAmino(_: _38.MsgWithdrawAllTokenizeShareRecordRewardResponse): _38.MsgWithdrawAllTokenizeShareRecordRewardResponseAmino;
                fromAminoMsg(object: _38.MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg): _38.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                toAminoMsg(message: _38.MsgWithdrawAllTokenizeShareRecordRewardResponse): _38.MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg;
                fromProtoMsg(message: _38.MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg): _38.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                toProto(message: _38.MsgWithdrawAllTokenizeShareRecordRewardResponse): Uint8Array;
                toProtoMsg(message: _38.MsgWithdrawAllTokenizeShareRecordRewardResponse): _38.MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _38.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgFundCommunityPool;
                fromPartial(object: Partial<_38.MsgFundCommunityPool>): _38.MsgFundCommunityPool;
                fromAmino(object: _38.MsgFundCommunityPoolAmino): _38.MsgFundCommunityPool;
                toAmino(message: _38.MsgFundCommunityPool): _38.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _38.MsgFundCommunityPoolAminoMsg): _38.MsgFundCommunityPool;
                toAminoMsg(message: _38.MsgFundCommunityPool): _38.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _38.MsgFundCommunityPoolProtoMsg): _38.MsgFundCommunityPool;
                toProto(message: _38.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _38.MsgFundCommunityPool): _38.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _38.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_38.MsgFundCommunityPoolResponse>): _38.MsgFundCommunityPoolResponse;
                fromAmino(_: _38.MsgFundCommunityPoolResponseAmino): _38.MsgFundCommunityPoolResponse;
                toAmino(_: _38.MsgFundCommunityPoolResponse): _38.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _38.MsgFundCommunityPoolResponseAminoMsg): _38.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _38.MsgFundCommunityPoolResponse): _38.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _38.MsgFundCommunityPoolResponseProtoMsg): _38.MsgFundCommunityPoolResponse;
                toProto(message: _38.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _38.MsgFundCommunityPoolResponse): _38.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _37.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryParamsRequest;
                fromPartial(_: Partial<_37.QueryParamsRequest>): _37.QueryParamsRequest;
                fromAmino(_: _37.QueryParamsRequestAmino): _37.QueryParamsRequest;
                toAmino(_: _37.QueryParamsRequest): _37.QueryParamsRequestAmino;
                fromAminoMsg(object: _37.QueryParamsRequestAminoMsg): _37.QueryParamsRequest;
                toAminoMsg(message: _37.QueryParamsRequest): _37.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _37.QueryParamsRequestProtoMsg): _37.QueryParamsRequest;
                toProto(message: _37.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _37.QueryParamsRequest): _37.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _37.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryParamsResponse;
                fromPartial(object: Partial<_37.QueryParamsResponse>): _37.QueryParamsResponse;
                fromAmino(object: _37.QueryParamsResponseAmino): _37.QueryParamsResponse;
                toAmino(message: _37.QueryParamsResponse): _37.QueryParamsResponseAmino;
                fromAminoMsg(object: _37.QueryParamsResponseAminoMsg): _37.QueryParamsResponse;
                toAminoMsg(message: _37.QueryParamsResponse): _37.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _37.QueryParamsResponseProtoMsg): _37.QueryParamsResponse;
                toProto(message: _37.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _37.QueryParamsResponse): _37.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _37.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_37.QueryValidatorOutstandingRewardsRequest>): _37.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _37.QueryValidatorOutstandingRewardsRequestAmino): _37.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _37.QueryValidatorOutstandingRewardsRequest): _37.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _37.QueryValidatorOutstandingRewardsRequestAminoMsg): _37.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _37.QueryValidatorOutstandingRewardsRequest): _37.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _37.QueryValidatorOutstandingRewardsRequestProtoMsg): _37.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _37.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _37.QueryValidatorOutstandingRewardsRequest): _37.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _37.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_37.QueryValidatorOutstandingRewardsResponse>): _37.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _37.QueryValidatorOutstandingRewardsResponseAmino): _37.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _37.QueryValidatorOutstandingRewardsResponse): _37.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _37.QueryValidatorOutstandingRewardsResponseAminoMsg): _37.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _37.QueryValidatorOutstandingRewardsResponse): _37.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _37.QueryValidatorOutstandingRewardsResponseProtoMsg): _37.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _37.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _37.QueryValidatorOutstandingRewardsResponse): _37.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _37.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_37.QueryValidatorCommissionRequest>): _37.QueryValidatorCommissionRequest;
                fromAmino(object: _37.QueryValidatorCommissionRequestAmino): _37.QueryValidatorCommissionRequest;
                toAmino(message: _37.QueryValidatorCommissionRequest): _37.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _37.QueryValidatorCommissionRequestAminoMsg): _37.QueryValidatorCommissionRequest;
                toAminoMsg(message: _37.QueryValidatorCommissionRequest): _37.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _37.QueryValidatorCommissionRequestProtoMsg): _37.QueryValidatorCommissionRequest;
                toProto(message: _37.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _37.QueryValidatorCommissionRequest): _37.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _37.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_37.QueryValidatorCommissionResponse>): _37.QueryValidatorCommissionResponse;
                fromAmino(object: _37.QueryValidatorCommissionResponseAmino): _37.QueryValidatorCommissionResponse;
                toAmino(message: _37.QueryValidatorCommissionResponse): _37.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _37.QueryValidatorCommissionResponseAminoMsg): _37.QueryValidatorCommissionResponse;
                toAminoMsg(message: _37.QueryValidatorCommissionResponse): _37.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _37.QueryValidatorCommissionResponseProtoMsg): _37.QueryValidatorCommissionResponse;
                toProto(message: _37.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _37.QueryValidatorCommissionResponse): _37.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _37.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_37.QueryValidatorSlashesRequest>): _37.QueryValidatorSlashesRequest;
                fromAmino(object: _37.QueryValidatorSlashesRequestAmino): _37.QueryValidatorSlashesRequest;
                toAmino(message: _37.QueryValidatorSlashesRequest): _37.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _37.QueryValidatorSlashesRequestAminoMsg): _37.QueryValidatorSlashesRequest;
                toAminoMsg(message: _37.QueryValidatorSlashesRequest): _37.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _37.QueryValidatorSlashesRequestProtoMsg): _37.QueryValidatorSlashesRequest;
                toProto(message: _37.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _37.QueryValidatorSlashesRequest): _37.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _37.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_37.QueryValidatorSlashesResponse>): _37.QueryValidatorSlashesResponse;
                fromAmino(object: _37.QueryValidatorSlashesResponseAmino): _37.QueryValidatorSlashesResponse;
                toAmino(message: _37.QueryValidatorSlashesResponse): _37.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _37.QueryValidatorSlashesResponseAminoMsg): _37.QueryValidatorSlashesResponse;
                toAminoMsg(message: _37.QueryValidatorSlashesResponse): _37.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _37.QueryValidatorSlashesResponseProtoMsg): _37.QueryValidatorSlashesResponse;
                toProto(message: _37.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _37.QueryValidatorSlashesResponse): _37.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _37.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_37.QueryDelegationRewardsRequest>): _37.QueryDelegationRewardsRequest;
                fromAmino(object: _37.QueryDelegationRewardsRequestAmino): _37.QueryDelegationRewardsRequest;
                toAmino(message: _37.QueryDelegationRewardsRequest): _37.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _37.QueryDelegationRewardsRequestAminoMsg): _37.QueryDelegationRewardsRequest;
                toAminoMsg(message: _37.QueryDelegationRewardsRequest): _37.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _37.QueryDelegationRewardsRequestProtoMsg): _37.QueryDelegationRewardsRequest;
                toProto(message: _37.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _37.QueryDelegationRewardsRequest): _37.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _37.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_37.QueryDelegationRewardsResponse>): _37.QueryDelegationRewardsResponse;
                fromAmino(object: _37.QueryDelegationRewardsResponseAmino): _37.QueryDelegationRewardsResponse;
                toAmino(message: _37.QueryDelegationRewardsResponse): _37.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _37.QueryDelegationRewardsResponseAminoMsg): _37.QueryDelegationRewardsResponse;
                toAminoMsg(message: _37.QueryDelegationRewardsResponse): _37.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _37.QueryDelegationRewardsResponseProtoMsg): _37.QueryDelegationRewardsResponse;
                toProto(message: _37.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _37.QueryDelegationRewardsResponse): _37.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _37.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_37.QueryDelegationTotalRewardsRequest>): _37.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _37.QueryDelegationTotalRewardsRequestAmino): _37.QueryDelegationTotalRewardsRequest;
                toAmino(message: _37.QueryDelegationTotalRewardsRequest): _37.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _37.QueryDelegationTotalRewardsRequestAminoMsg): _37.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _37.QueryDelegationTotalRewardsRequest): _37.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _37.QueryDelegationTotalRewardsRequestProtoMsg): _37.QueryDelegationTotalRewardsRequest;
                toProto(message: _37.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _37.QueryDelegationTotalRewardsRequest): _37.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _37.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_37.QueryDelegationTotalRewardsResponse>): _37.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _37.QueryDelegationTotalRewardsResponseAmino): _37.QueryDelegationTotalRewardsResponse;
                toAmino(message: _37.QueryDelegationTotalRewardsResponse): _37.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _37.QueryDelegationTotalRewardsResponseAminoMsg): _37.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _37.QueryDelegationTotalRewardsResponse): _37.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _37.QueryDelegationTotalRewardsResponseProtoMsg): _37.QueryDelegationTotalRewardsResponse;
                toProto(message: _37.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _37.QueryDelegationTotalRewardsResponse): _37.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _37.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_37.QueryDelegatorValidatorsRequest>): _37.QueryDelegatorValidatorsRequest;
                fromAmino(object: _37.QueryDelegatorValidatorsRequestAmino): _37.QueryDelegatorValidatorsRequest;
                toAmino(message: _37.QueryDelegatorValidatorsRequest): _37.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _37.QueryDelegatorValidatorsRequestAminoMsg): _37.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _37.QueryDelegatorValidatorsRequest): _37.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _37.QueryDelegatorValidatorsRequestProtoMsg): _37.QueryDelegatorValidatorsRequest;
                toProto(message: _37.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _37.QueryDelegatorValidatorsRequest): _37.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _37.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_37.QueryDelegatorValidatorsResponse>): _37.QueryDelegatorValidatorsResponse;
                fromAmino(object: _37.QueryDelegatorValidatorsResponseAmino): _37.QueryDelegatorValidatorsResponse;
                toAmino(message: _37.QueryDelegatorValidatorsResponse): _37.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _37.QueryDelegatorValidatorsResponseAminoMsg): _37.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _37.QueryDelegatorValidatorsResponse): _37.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _37.QueryDelegatorValidatorsResponseProtoMsg): _37.QueryDelegatorValidatorsResponse;
                toProto(message: _37.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _37.QueryDelegatorValidatorsResponse): _37.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _37.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_37.QueryDelegatorWithdrawAddressRequest>): _37.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _37.QueryDelegatorWithdrawAddressRequestAmino): _37.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _37.QueryDelegatorWithdrawAddressRequest): _37.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _37.QueryDelegatorWithdrawAddressRequestAminoMsg): _37.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _37.QueryDelegatorWithdrawAddressRequest): _37.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _37.QueryDelegatorWithdrawAddressRequestProtoMsg): _37.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _37.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _37.QueryDelegatorWithdrawAddressRequest): _37.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _37.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_37.QueryDelegatorWithdrawAddressResponse>): _37.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _37.QueryDelegatorWithdrawAddressResponseAmino): _37.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _37.QueryDelegatorWithdrawAddressResponse): _37.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _37.QueryDelegatorWithdrawAddressResponseAminoMsg): _37.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _37.QueryDelegatorWithdrawAddressResponse): _37.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _37.QueryDelegatorWithdrawAddressResponseProtoMsg): _37.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _37.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _37.QueryDelegatorWithdrawAddressResponse): _37.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _37.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_37.QueryCommunityPoolRequest>): _37.QueryCommunityPoolRequest;
                fromAmino(_: _37.QueryCommunityPoolRequestAmino): _37.QueryCommunityPoolRequest;
                toAmino(_: _37.QueryCommunityPoolRequest): _37.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _37.QueryCommunityPoolRequestAminoMsg): _37.QueryCommunityPoolRequest;
                toAminoMsg(message: _37.QueryCommunityPoolRequest): _37.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _37.QueryCommunityPoolRequestProtoMsg): _37.QueryCommunityPoolRequest;
                toProto(message: _37.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _37.QueryCommunityPoolRequest): _37.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _37.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_37.QueryCommunityPoolResponse>): _37.QueryCommunityPoolResponse;
                fromAmino(object: _37.QueryCommunityPoolResponseAmino): _37.QueryCommunityPoolResponse;
                toAmino(message: _37.QueryCommunityPoolResponse): _37.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _37.QueryCommunityPoolResponseAminoMsg): _37.QueryCommunityPoolResponse;
                toAminoMsg(message: _37.QueryCommunityPoolResponse): _37.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _37.QueryCommunityPoolResponseProtoMsg): _37.QueryCommunityPoolResponse;
                toProto(message: _37.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _37.QueryCommunityPoolResponse): _37.QueryCommunityPoolResponseProtoMsg;
            };
            QueryTokenizeShareRecordRewardRequest: {
                typeUrl: string;
                encode(message: _37.QueryTokenizeShareRecordRewardRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryTokenizeShareRecordRewardRequest;
                fromPartial(object: Partial<_37.QueryTokenizeShareRecordRewardRequest>): _37.QueryTokenizeShareRecordRewardRequest;
                fromAmino(object: _37.QueryTokenizeShareRecordRewardRequestAmino): _37.QueryTokenizeShareRecordRewardRequest;
                toAmino(message: _37.QueryTokenizeShareRecordRewardRequest): _37.QueryTokenizeShareRecordRewardRequestAmino;
                fromAminoMsg(object: _37.QueryTokenizeShareRecordRewardRequestAminoMsg): _37.QueryTokenizeShareRecordRewardRequest;
                toAminoMsg(message: _37.QueryTokenizeShareRecordRewardRequest): _37.QueryTokenizeShareRecordRewardRequestAminoMsg;
                fromProtoMsg(message: _37.QueryTokenizeShareRecordRewardRequestProtoMsg): _37.QueryTokenizeShareRecordRewardRequest;
                toProto(message: _37.QueryTokenizeShareRecordRewardRequest): Uint8Array;
                toProtoMsg(message: _37.QueryTokenizeShareRecordRewardRequest): _37.QueryTokenizeShareRecordRewardRequestProtoMsg;
            };
            QueryTokenizeShareRecordRewardResponse: {
                typeUrl: string;
                encode(message: _37.QueryTokenizeShareRecordRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryTokenizeShareRecordRewardResponse;
                fromPartial(object: Partial<_37.QueryTokenizeShareRecordRewardResponse>): _37.QueryTokenizeShareRecordRewardResponse;
                fromAmino(object: _37.QueryTokenizeShareRecordRewardResponseAmino): _37.QueryTokenizeShareRecordRewardResponse;
                toAmino(message: _37.QueryTokenizeShareRecordRewardResponse): _37.QueryTokenizeShareRecordRewardResponseAmino;
                fromAminoMsg(object: _37.QueryTokenizeShareRecordRewardResponseAminoMsg): _37.QueryTokenizeShareRecordRewardResponse;
                toAminoMsg(message: _37.QueryTokenizeShareRecordRewardResponse): _37.QueryTokenizeShareRecordRewardResponseAminoMsg;
                fromProtoMsg(message: _37.QueryTokenizeShareRecordRewardResponseProtoMsg): _37.QueryTokenizeShareRecordRewardResponse;
                toProto(message: _37.QueryTokenizeShareRecordRewardResponse): Uint8Array;
                toProtoMsg(message: _37.QueryTokenizeShareRecordRewardResponse): _37.QueryTokenizeShareRecordRewardResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _36.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_36.DelegatorWithdrawInfo>): _36.DelegatorWithdrawInfo;
                fromAmino(object: _36.DelegatorWithdrawInfoAmino): _36.DelegatorWithdrawInfo;
                toAmino(message: _36.DelegatorWithdrawInfo): _36.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _36.DelegatorWithdrawInfoAminoMsg): _36.DelegatorWithdrawInfo;
                toAminoMsg(message: _36.DelegatorWithdrawInfo): _36.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _36.DelegatorWithdrawInfoProtoMsg): _36.DelegatorWithdrawInfo;
                toProto(message: _36.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _36.DelegatorWithdrawInfo): _36.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _36.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_36.ValidatorOutstandingRewardsRecord>): _36.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _36.ValidatorOutstandingRewardsRecordAmino): _36.ValidatorOutstandingRewardsRecord;
                toAmino(message: _36.ValidatorOutstandingRewardsRecord): _36.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _36.ValidatorOutstandingRewardsRecordAminoMsg): _36.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _36.ValidatorOutstandingRewardsRecord): _36.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _36.ValidatorOutstandingRewardsRecordProtoMsg): _36.ValidatorOutstandingRewardsRecord;
                toProto(message: _36.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _36.ValidatorOutstandingRewardsRecord): _36.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _36.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_36.ValidatorAccumulatedCommissionRecord>): _36.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _36.ValidatorAccumulatedCommissionRecordAmino): _36.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _36.ValidatorAccumulatedCommissionRecord): _36.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _36.ValidatorAccumulatedCommissionRecordAminoMsg): _36.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _36.ValidatorAccumulatedCommissionRecord): _36.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _36.ValidatorAccumulatedCommissionRecordProtoMsg): _36.ValidatorAccumulatedCommissionRecord;
                toProto(message: _36.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _36.ValidatorAccumulatedCommissionRecord): _36.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _36.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_36.ValidatorHistoricalRewardsRecord>): _36.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _36.ValidatorHistoricalRewardsRecordAmino): _36.ValidatorHistoricalRewardsRecord;
                toAmino(message: _36.ValidatorHistoricalRewardsRecord): _36.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _36.ValidatorHistoricalRewardsRecordAminoMsg): _36.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _36.ValidatorHistoricalRewardsRecord): _36.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _36.ValidatorHistoricalRewardsRecordProtoMsg): _36.ValidatorHistoricalRewardsRecord;
                toProto(message: _36.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _36.ValidatorHistoricalRewardsRecord): _36.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _36.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_36.ValidatorCurrentRewardsRecord>): _36.ValidatorCurrentRewardsRecord;
                fromAmino(object: _36.ValidatorCurrentRewardsRecordAmino): _36.ValidatorCurrentRewardsRecord;
                toAmino(message: _36.ValidatorCurrentRewardsRecord): _36.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _36.ValidatorCurrentRewardsRecordAminoMsg): _36.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _36.ValidatorCurrentRewardsRecord): _36.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _36.ValidatorCurrentRewardsRecordProtoMsg): _36.ValidatorCurrentRewardsRecord;
                toProto(message: _36.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _36.ValidatorCurrentRewardsRecord): _36.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _36.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_36.DelegatorStartingInfoRecord>): _36.DelegatorStartingInfoRecord;
                fromAmino(object: _36.DelegatorStartingInfoRecordAmino): _36.DelegatorStartingInfoRecord;
                toAmino(message: _36.DelegatorStartingInfoRecord): _36.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _36.DelegatorStartingInfoRecordAminoMsg): _36.DelegatorStartingInfoRecord;
                toAminoMsg(message: _36.DelegatorStartingInfoRecord): _36.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _36.DelegatorStartingInfoRecordProtoMsg): _36.DelegatorStartingInfoRecord;
                toProto(message: _36.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _36.DelegatorStartingInfoRecord): _36.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _36.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_36.ValidatorSlashEventRecord>): _36.ValidatorSlashEventRecord;
                fromAmino(object: _36.ValidatorSlashEventRecordAmino): _36.ValidatorSlashEventRecord;
                toAmino(message: _36.ValidatorSlashEventRecord): _36.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _36.ValidatorSlashEventRecordAminoMsg): _36.ValidatorSlashEventRecord;
                toAminoMsg(message: _36.ValidatorSlashEventRecord): _36.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _36.ValidatorSlashEventRecordProtoMsg): _36.ValidatorSlashEventRecord;
                toProto(message: _36.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _36.ValidatorSlashEventRecord): _36.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _36.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.GenesisState;
                fromPartial(object: Partial<_36.GenesisState>): _36.GenesisState;
                fromAmino(object: _36.GenesisStateAmino): _36.GenesisState;
                toAmino(message: _36.GenesisState): _36.GenesisStateAmino;
                fromAminoMsg(object: _36.GenesisStateAminoMsg): _36.GenesisState;
                toAminoMsg(message: _36.GenesisState): _36.GenesisStateAminoMsg;
                fromProtoMsg(message: _36.GenesisStateProtoMsg): _36.GenesisState;
                toProto(message: _36.GenesisState): Uint8Array;
                toProtoMsg(message: _36.GenesisState): _36.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _35.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.Params;
                fromPartial(object: Partial<_35.Params>): _35.Params;
                fromAmino(object: _35.ParamsAmino): _35.Params;
                toAmino(message: _35.Params): _35.ParamsAmino;
                fromAminoMsg(object: _35.ParamsAminoMsg): _35.Params;
                toAminoMsg(message: _35.Params): _35.ParamsAminoMsg;
                fromProtoMsg(message: _35.ParamsProtoMsg): _35.Params;
                toProto(message: _35.Params): Uint8Array;
                toProtoMsg(message: _35.Params): _35.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _35.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_35.ValidatorHistoricalRewards>): _35.ValidatorHistoricalRewards;
                fromAmino(object: _35.ValidatorHistoricalRewardsAmino): _35.ValidatorHistoricalRewards;
                toAmino(message: _35.ValidatorHistoricalRewards): _35.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _35.ValidatorHistoricalRewardsAminoMsg): _35.ValidatorHistoricalRewards;
                toAminoMsg(message: _35.ValidatorHistoricalRewards): _35.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _35.ValidatorHistoricalRewardsProtoMsg): _35.ValidatorHistoricalRewards;
                toProto(message: _35.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _35.ValidatorHistoricalRewards): _35.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _35.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.ValidatorCurrentRewards;
                fromPartial(object: Partial<_35.ValidatorCurrentRewards>): _35.ValidatorCurrentRewards;
                fromAmino(object: _35.ValidatorCurrentRewardsAmino): _35.ValidatorCurrentRewards;
                toAmino(message: _35.ValidatorCurrentRewards): _35.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _35.ValidatorCurrentRewardsAminoMsg): _35.ValidatorCurrentRewards;
                toAminoMsg(message: _35.ValidatorCurrentRewards): _35.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _35.ValidatorCurrentRewardsProtoMsg): _35.ValidatorCurrentRewards;
                toProto(message: _35.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _35.ValidatorCurrentRewards): _35.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _35.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_35.ValidatorAccumulatedCommission>): _35.ValidatorAccumulatedCommission;
                fromAmino(object: _35.ValidatorAccumulatedCommissionAmino): _35.ValidatorAccumulatedCommission;
                toAmino(message: _35.ValidatorAccumulatedCommission): _35.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _35.ValidatorAccumulatedCommissionAminoMsg): _35.ValidatorAccumulatedCommission;
                toAminoMsg(message: _35.ValidatorAccumulatedCommission): _35.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _35.ValidatorAccumulatedCommissionProtoMsg): _35.ValidatorAccumulatedCommission;
                toProto(message: _35.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _35.ValidatorAccumulatedCommission): _35.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _35.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_35.ValidatorOutstandingRewards>): _35.ValidatorOutstandingRewards;
                fromAmino(object: _35.ValidatorOutstandingRewardsAmino): _35.ValidatorOutstandingRewards;
                toAmino(message: _35.ValidatorOutstandingRewards): _35.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _35.ValidatorOutstandingRewardsAminoMsg): _35.ValidatorOutstandingRewards;
                toAminoMsg(message: _35.ValidatorOutstandingRewards): _35.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _35.ValidatorOutstandingRewardsProtoMsg): _35.ValidatorOutstandingRewards;
                toProto(message: _35.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _35.ValidatorOutstandingRewards): _35.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _35.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.ValidatorSlashEvent;
                fromPartial(object: Partial<_35.ValidatorSlashEvent>): _35.ValidatorSlashEvent;
                fromAmino(object: _35.ValidatorSlashEventAmino): _35.ValidatorSlashEvent;
                toAmino(message: _35.ValidatorSlashEvent): _35.ValidatorSlashEventAmino;
                fromAminoMsg(object: _35.ValidatorSlashEventAminoMsg): _35.ValidatorSlashEvent;
                toAminoMsg(message: _35.ValidatorSlashEvent): _35.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _35.ValidatorSlashEventProtoMsg): _35.ValidatorSlashEvent;
                toProto(message: _35.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _35.ValidatorSlashEvent): _35.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _35.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.ValidatorSlashEvents;
                fromPartial(object: Partial<_35.ValidatorSlashEvents>): _35.ValidatorSlashEvents;
                fromAmino(object: _35.ValidatorSlashEventsAmino): _35.ValidatorSlashEvents;
                toAmino(message: _35.ValidatorSlashEvents): _35.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _35.ValidatorSlashEventsAminoMsg): _35.ValidatorSlashEvents;
                toAminoMsg(message: _35.ValidatorSlashEvents): _35.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _35.ValidatorSlashEventsProtoMsg): _35.ValidatorSlashEvents;
                toProto(message: _35.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _35.ValidatorSlashEvents): _35.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _35.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.FeePool;
                fromPartial(object: Partial<_35.FeePool>): _35.FeePool;
                fromAmino(object: _35.FeePoolAmino): _35.FeePool;
                toAmino(message: _35.FeePool): _35.FeePoolAmino;
                fromAminoMsg(object: _35.FeePoolAminoMsg): _35.FeePool;
                toAminoMsg(message: _35.FeePool): _35.FeePoolAminoMsg;
                fromProtoMsg(message: _35.FeePoolProtoMsg): _35.FeePool;
                toProto(message: _35.FeePool): Uint8Array;
                toProtoMsg(message: _35.FeePool): _35.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _35.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_35.CommunityPoolSpendProposal>): _35.CommunityPoolSpendProposal;
                fromAmino(object: _35.CommunityPoolSpendProposalAmino): _35.CommunityPoolSpendProposal;
                toAmino(message: _35.CommunityPoolSpendProposal): _35.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _35.CommunityPoolSpendProposalAminoMsg): _35.CommunityPoolSpendProposal;
                toAminoMsg(message: _35.CommunityPoolSpendProposal): _35.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _35.CommunityPoolSpendProposalProtoMsg): _35.CommunityPoolSpendProposal;
                toProto(message: _35.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _35.CommunityPoolSpendProposal): _35.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _35.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.DelegatorStartingInfo;
                fromPartial(object: Partial<_35.DelegatorStartingInfo>): _35.DelegatorStartingInfo;
                fromAmino(object: _35.DelegatorStartingInfoAmino): _35.DelegatorStartingInfo;
                toAmino(message: _35.DelegatorStartingInfo): _35.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _35.DelegatorStartingInfoAminoMsg): _35.DelegatorStartingInfo;
                toAminoMsg(message: _35.DelegatorStartingInfo): _35.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _35.DelegatorStartingInfoProtoMsg): _35.DelegatorStartingInfo;
                toProto(message: _35.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _35.DelegatorStartingInfo): _35.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _35.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.DelegationDelegatorReward;
                fromPartial(object: Partial<_35.DelegationDelegatorReward>): _35.DelegationDelegatorReward;
                fromAmino(object: _35.DelegationDelegatorRewardAmino): _35.DelegationDelegatorReward;
                toAmino(message: _35.DelegationDelegatorReward): _35.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _35.DelegationDelegatorRewardAminoMsg): _35.DelegationDelegatorReward;
                toAminoMsg(message: _35.DelegationDelegatorReward): _35.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _35.DelegationDelegatorRewardProtoMsg): _35.DelegationDelegatorReward;
                toProto(message: _35.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _35.DelegationDelegatorReward): _35.DelegationDelegatorRewardProtoMsg;
            };
            TokenizeShareRecordReward: {
                typeUrl: string;
                encode(message: _35.TokenizeShareRecordReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.TokenizeShareRecordReward;
                fromPartial(object: Partial<_35.TokenizeShareRecordReward>): _35.TokenizeShareRecordReward;
                fromAmino(object: _35.TokenizeShareRecordRewardAmino): _35.TokenizeShareRecordReward;
                toAmino(message: _35.TokenizeShareRecordReward): _35.TokenizeShareRecordRewardAmino;
                fromAminoMsg(object: _35.TokenizeShareRecordRewardAminoMsg): _35.TokenizeShareRecordReward;
                toAminoMsg(message: _35.TokenizeShareRecordReward): _35.TokenizeShareRecordRewardAminoMsg;
                fromProtoMsg(message: _35.TokenizeShareRecordRewardProtoMsg): _35.TokenizeShareRecordReward;
                toProto(message: _35.TokenizeShareRecordReward): Uint8Array;
                toProtoMsg(message: _35.TokenizeShareRecordReward): _35.TokenizeShareRecordRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _35.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_35.CommunityPoolSpendProposalWithDeposit>): _35.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _35.CommunityPoolSpendProposalWithDepositAmino): _35.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _35.CommunityPoolSpendProposalWithDeposit): _35.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _35.CommunityPoolSpendProposalWithDepositAminoMsg): _35.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _35.CommunityPoolSpendProposalWithDeposit): _35.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _35.CommunityPoolSpendProposalWithDepositProtoMsg): _35.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _35.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _35.CommunityPoolSpendProposalWithDeposit): _35.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _233.MsgClientImpl;
            QueryClientImpl: typeof _220.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _41.QueryEvidenceRequest): Promise<_41.QueryEvidenceResponse>;
                allEvidence(request?: _41.QueryAllEvidenceRequest): Promise<_41.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _42.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _42.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _42.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _42.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _42.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _42.MsgSubmitEvidence) => _42.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _42.MsgSubmitEvidenceAmino) => _42.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _42.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.MsgSubmitEvidence;
                fromPartial(object: Partial<_42.MsgSubmitEvidence>): _42.MsgSubmitEvidence;
                fromAmino(object: _42.MsgSubmitEvidenceAmino): _42.MsgSubmitEvidence;
                toAmino(message: _42.MsgSubmitEvidence): _42.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _42.MsgSubmitEvidenceAminoMsg): _42.MsgSubmitEvidence;
                toAminoMsg(message: _42.MsgSubmitEvidence): _42.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _42.MsgSubmitEvidenceProtoMsg): _42.MsgSubmitEvidence;
                toProto(message: _42.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _42.MsgSubmitEvidence): _42.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _42.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_42.MsgSubmitEvidenceResponse>): _42.MsgSubmitEvidenceResponse;
                fromAmino(object: _42.MsgSubmitEvidenceResponseAmino): _42.MsgSubmitEvidenceResponse;
                toAmino(message: _42.MsgSubmitEvidenceResponse): _42.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _42.MsgSubmitEvidenceResponseAminoMsg): _42.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _42.MsgSubmitEvidenceResponse): _42.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _42.MsgSubmitEvidenceResponseProtoMsg): _42.MsgSubmitEvidenceResponse;
                toProto(message: _42.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _42.MsgSubmitEvidenceResponse): _42.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _41.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.QueryEvidenceRequest;
                fromPartial(object: Partial<_41.QueryEvidenceRequest>): _41.QueryEvidenceRequest;
                fromAmino(object: _41.QueryEvidenceRequestAmino): _41.QueryEvidenceRequest;
                toAmino(message: _41.QueryEvidenceRequest): _41.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _41.QueryEvidenceRequestAminoMsg): _41.QueryEvidenceRequest;
                toAminoMsg(message: _41.QueryEvidenceRequest): _41.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _41.QueryEvidenceRequestProtoMsg): _41.QueryEvidenceRequest;
                toProto(message: _41.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _41.QueryEvidenceRequest): _41.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _41.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.QueryEvidenceResponse;
                fromPartial(object: Partial<_41.QueryEvidenceResponse>): _41.QueryEvidenceResponse;
                fromAmino(object: _41.QueryEvidenceResponseAmino): _41.QueryEvidenceResponse;
                toAmino(message: _41.QueryEvidenceResponse): _41.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _41.QueryEvidenceResponseAminoMsg): _41.QueryEvidenceResponse;
                toAminoMsg(message: _41.QueryEvidenceResponse): _41.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _41.QueryEvidenceResponseProtoMsg): _41.QueryEvidenceResponse;
                toProto(message: _41.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _41.QueryEvidenceResponse): _41.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _41.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_41.QueryAllEvidenceRequest>): _41.QueryAllEvidenceRequest;
                fromAmino(object: _41.QueryAllEvidenceRequestAmino): _41.QueryAllEvidenceRequest;
                toAmino(message: _41.QueryAllEvidenceRequest): _41.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _41.QueryAllEvidenceRequestAminoMsg): _41.QueryAllEvidenceRequest;
                toAminoMsg(message: _41.QueryAllEvidenceRequest): _41.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _41.QueryAllEvidenceRequestProtoMsg): _41.QueryAllEvidenceRequest;
                toProto(message: _41.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _41.QueryAllEvidenceRequest): _41.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _41.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_41.QueryAllEvidenceResponse>): _41.QueryAllEvidenceResponse;
                fromAmino(object: _41.QueryAllEvidenceResponseAmino): _41.QueryAllEvidenceResponse;
                toAmino(message: _41.QueryAllEvidenceResponse): _41.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _41.QueryAllEvidenceResponseAminoMsg): _41.QueryAllEvidenceResponse;
                toAminoMsg(message: _41.QueryAllEvidenceResponse): _41.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _41.QueryAllEvidenceResponseProtoMsg): _41.QueryAllEvidenceResponse;
                toProto(message: _41.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _41.QueryAllEvidenceResponse): _41.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _40.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.GenesisState;
                fromPartial(object: Partial<_40.GenesisState>): _40.GenesisState;
                fromAmino(object: _40.GenesisStateAmino): _40.GenesisState;
                toAmino(message: _40.GenesisState): _40.GenesisStateAmino;
                fromAminoMsg(object: _40.GenesisStateAminoMsg): _40.GenesisState;
                toAminoMsg(message: _40.GenesisState): _40.GenesisStateAminoMsg;
                fromProtoMsg(message: _40.GenesisStateProtoMsg): _40.GenesisState;
                toProto(message: _40.GenesisState): Uint8Array;
                toProtoMsg(message: _40.GenesisState): _40.GenesisStateProtoMsg;
            };
            Equivocation: {
                typeUrl: string;
                encode(message: _39.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _39.Equivocation;
                fromPartial(object: Partial<_39.Equivocation>): _39.Equivocation;
                fromAmino(object: _39.EquivocationAmino): _39.Equivocation;
                toAmino(message: _39.Equivocation): _39.EquivocationAmino;
                fromAminoMsg(object: _39.EquivocationAminoMsg): _39.Equivocation;
                toAminoMsg(message: _39.Equivocation): _39.EquivocationAminoMsg;
                fromProtoMsg(message: _39.EquivocationProtoMsg): _39.Equivocation;
                toProto(message: _39.Equivocation): Uint8Array;
                toProtoMsg(message: _39.Equivocation): _39.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _234.MsgClientImpl;
            QueryClientImpl: typeof _221.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _45.QueryAllowanceRequest): Promise<_45.QueryAllowanceResponse>;
                allowances(request: _45.QueryAllowancesRequest): Promise<_45.QueryAllowancesResponse>;
                allowancesByGranter(request: _45.QueryAllowancesByGranterRequest): Promise<_45.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _46.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _46.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _46.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _46.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _46.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _46.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _46.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _46.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _46.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _46.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _46.MsgGrantAllowance) => _46.MsgGrantAllowanceAmino;
                    fromAmino: (object: _46.MsgGrantAllowanceAmino) => _46.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _46.MsgRevokeAllowance) => _46.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _46.MsgRevokeAllowanceAmino) => _46.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _46.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgGrantAllowance;
                fromPartial(object: Partial<_46.MsgGrantAllowance>): _46.MsgGrantAllowance;
                fromAmino(object: _46.MsgGrantAllowanceAmino): _46.MsgGrantAllowance;
                toAmino(message: _46.MsgGrantAllowance): _46.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _46.MsgGrantAllowanceAminoMsg): _46.MsgGrantAllowance;
                toAminoMsg(message: _46.MsgGrantAllowance): _46.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _46.MsgGrantAllowanceProtoMsg): _46.MsgGrantAllowance;
                toProto(message: _46.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _46.MsgGrantAllowance): _46.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _46.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_46.MsgGrantAllowanceResponse>): _46.MsgGrantAllowanceResponse;
                fromAmino(_: _46.MsgGrantAllowanceResponseAmino): _46.MsgGrantAllowanceResponse;
                toAmino(_: _46.MsgGrantAllowanceResponse): _46.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _46.MsgGrantAllowanceResponseAminoMsg): _46.MsgGrantAllowanceResponse;
                toAminoMsg(message: _46.MsgGrantAllowanceResponse): _46.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _46.MsgGrantAllowanceResponseProtoMsg): _46.MsgGrantAllowanceResponse;
                toProto(message: _46.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _46.MsgGrantAllowanceResponse): _46.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _46.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgRevokeAllowance;
                fromPartial(object: Partial<_46.MsgRevokeAllowance>): _46.MsgRevokeAllowance;
                fromAmino(object: _46.MsgRevokeAllowanceAmino): _46.MsgRevokeAllowance;
                toAmino(message: _46.MsgRevokeAllowance): _46.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _46.MsgRevokeAllowanceAminoMsg): _46.MsgRevokeAllowance;
                toAminoMsg(message: _46.MsgRevokeAllowance): _46.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _46.MsgRevokeAllowanceProtoMsg): _46.MsgRevokeAllowance;
                toProto(message: _46.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _46.MsgRevokeAllowance): _46.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _46.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_46.MsgRevokeAllowanceResponse>): _46.MsgRevokeAllowanceResponse;
                fromAmino(_: _46.MsgRevokeAllowanceResponseAmino): _46.MsgRevokeAllowanceResponse;
                toAmino(_: _46.MsgRevokeAllowanceResponse): _46.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _46.MsgRevokeAllowanceResponseAminoMsg): _46.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _46.MsgRevokeAllowanceResponse): _46.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _46.MsgRevokeAllowanceResponseProtoMsg): _46.MsgRevokeAllowanceResponse;
                toProto(message: _46.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _46.MsgRevokeAllowanceResponse): _46.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _43.BasicAllowance | _43.PeriodicAllowance | _43.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _45.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryAllowanceRequest;
                fromPartial(object: Partial<_45.QueryAllowanceRequest>): _45.QueryAllowanceRequest;
                fromAmino(object: _45.QueryAllowanceRequestAmino): _45.QueryAllowanceRequest;
                toAmino(message: _45.QueryAllowanceRequest): _45.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _45.QueryAllowanceRequestAminoMsg): _45.QueryAllowanceRequest;
                toAminoMsg(message: _45.QueryAllowanceRequest): _45.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _45.QueryAllowanceRequestProtoMsg): _45.QueryAllowanceRequest;
                toProto(message: _45.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _45.QueryAllowanceRequest): _45.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _45.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryAllowanceResponse;
                fromPartial(object: Partial<_45.QueryAllowanceResponse>): _45.QueryAllowanceResponse;
                fromAmino(object: _45.QueryAllowanceResponseAmino): _45.QueryAllowanceResponse;
                toAmino(message: _45.QueryAllowanceResponse): _45.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _45.QueryAllowanceResponseAminoMsg): _45.QueryAllowanceResponse;
                toAminoMsg(message: _45.QueryAllowanceResponse): _45.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _45.QueryAllowanceResponseProtoMsg): _45.QueryAllowanceResponse;
                toProto(message: _45.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _45.QueryAllowanceResponse): _45.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _45.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryAllowancesRequest;
                fromPartial(object: Partial<_45.QueryAllowancesRequest>): _45.QueryAllowancesRequest;
                fromAmino(object: _45.QueryAllowancesRequestAmino): _45.QueryAllowancesRequest;
                toAmino(message: _45.QueryAllowancesRequest): _45.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _45.QueryAllowancesRequestAminoMsg): _45.QueryAllowancesRequest;
                toAminoMsg(message: _45.QueryAllowancesRequest): _45.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _45.QueryAllowancesRequestProtoMsg): _45.QueryAllowancesRequest;
                toProto(message: _45.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _45.QueryAllowancesRequest): _45.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _45.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryAllowancesResponse;
                fromPartial(object: Partial<_45.QueryAllowancesResponse>): _45.QueryAllowancesResponse;
                fromAmino(object: _45.QueryAllowancesResponseAmino): _45.QueryAllowancesResponse;
                toAmino(message: _45.QueryAllowancesResponse): _45.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _45.QueryAllowancesResponseAminoMsg): _45.QueryAllowancesResponse;
                toAminoMsg(message: _45.QueryAllowancesResponse): _45.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _45.QueryAllowancesResponseProtoMsg): _45.QueryAllowancesResponse;
                toProto(message: _45.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _45.QueryAllowancesResponse): _45.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _45.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_45.QueryAllowancesByGranterRequest>): _45.QueryAllowancesByGranterRequest;
                fromAmino(object: _45.QueryAllowancesByGranterRequestAmino): _45.QueryAllowancesByGranterRequest;
                toAmino(message: _45.QueryAllowancesByGranterRequest): _45.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _45.QueryAllowancesByGranterRequestAminoMsg): _45.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _45.QueryAllowancesByGranterRequest): _45.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _45.QueryAllowancesByGranterRequestProtoMsg): _45.QueryAllowancesByGranterRequest;
                toProto(message: _45.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _45.QueryAllowancesByGranterRequest): _45.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _45.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_45.QueryAllowancesByGranterResponse>): _45.QueryAllowancesByGranterResponse;
                fromAmino(object: _45.QueryAllowancesByGranterResponseAmino): _45.QueryAllowancesByGranterResponse;
                toAmino(message: _45.QueryAllowancesByGranterResponse): _45.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _45.QueryAllowancesByGranterResponseAminoMsg): _45.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _45.QueryAllowancesByGranterResponse): _45.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _45.QueryAllowancesByGranterResponseProtoMsg): _45.QueryAllowancesByGranterResponse;
                toProto(message: _45.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _45.QueryAllowancesByGranterResponse): _45.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _44.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _44.GenesisState;
                fromPartial(object: Partial<_44.GenesisState>): _44.GenesisState;
                fromAmino(object: _44.GenesisStateAmino): _44.GenesisState;
                toAmino(message: _44.GenesisState): _44.GenesisStateAmino;
                fromAminoMsg(object: _44.GenesisStateAminoMsg): _44.GenesisState;
                toAminoMsg(message: _44.GenesisState): _44.GenesisStateAminoMsg;
                fromProtoMsg(message: _44.GenesisStateProtoMsg): _44.GenesisState;
                toProto(message: _44.GenesisState): Uint8Array;
                toProtoMsg(message: _44.GenesisState): _44.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _43.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _43.BasicAllowance;
                fromPartial(object: Partial<_43.BasicAllowance>): _43.BasicAllowance;
                fromAmino(object: _43.BasicAllowanceAmino): _43.BasicAllowance;
                toAmino(message: _43.BasicAllowance): _43.BasicAllowanceAmino;
                fromAminoMsg(object: _43.BasicAllowanceAminoMsg): _43.BasicAllowance;
                toAminoMsg(message: _43.BasicAllowance): _43.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _43.BasicAllowanceProtoMsg): _43.BasicAllowance;
                toProto(message: _43.BasicAllowance): Uint8Array;
                toProtoMsg(message: _43.BasicAllowance): _43.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _43.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _43.PeriodicAllowance;
                fromPartial(object: Partial<_43.PeriodicAllowance>): _43.PeriodicAllowance;
                fromAmino(object: _43.PeriodicAllowanceAmino): _43.PeriodicAllowance;
                toAmino(message: _43.PeriodicAllowance): _43.PeriodicAllowanceAmino;
                fromAminoMsg(object: _43.PeriodicAllowanceAminoMsg): _43.PeriodicAllowance;
                toAminoMsg(message: _43.PeriodicAllowance): _43.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _43.PeriodicAllowanceProtoMsg): _43.PeriodicAllowance;
                toProto(message: _43.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _43.PeriodicAllowance): _43.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _43.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _43.AllowedMsgAllowance;
                fromPartial(object: Partial<_43.AllowedMsgAllowance>): _43.AllowedMsgAllowance;
                fromAmino(object: _43.AllowedMsgAllowanceAmino): _43.AllowedMsgAllowance;
                toAmino(message: _43.AllowedMsgAllowance): _43.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _43.AllowedMsgAllowanceAminoMsg): _43.AllowedMsgAllowance;
                toAminoMsg(message: _43.AllowedMsgAllowance): _43.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _43.AllowedMsgAllowanceProtoMsg): _43.AllowedMsgAllowance;
                toProto(message: _43.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _43.AllowedMsgAllowance): _43.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _43.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _43.Grant;
                fromPartial(object: Partial<_43.Grant>): _43.Grant;
                fromAmino(object: _43.GrantAmino): _43.Grant;
                toAmino(message: _43.Grant): _43.GrantAmino;
                fromAminoMsg(object: _43.GrantAminoMsg): _43.Grant;
                toAminoMsg(message: _43.Grant): _43.GrantAminoMsg;
                fromProtoMsg(message: _43.GrantProtoMsg): _43.Grant;
                toProto(message: _43.Grant): Uint8Array;
                toProtoMsg(message: _43.Grant): _43.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                typeUrl: string;
                encode(message: _47.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.GenesisState;
                fromPartial(object: Partial<_47.GenesisState>): _47.GenesisState;
                fromAmino(object: _47.GenesisStateAmino): _47.GenesisState;
                toAmino(message: _47.GenesisState): _47.GenesisStateAmino;
                fromAminoMsg(object: _47.GenesisStateAminoMsg): _47.GenesisState;
                toAminoMsg(message: _47.GenesisState): _47.GenesisStateAminoMsg;
                fromProtoMsg(message: _47.GenesisStateProtoMsg): _47.GenesisState;
                toProto(message: _47.GenesisState): Uint8Array;
                toProtoMsg(message: _47.GenesisState): _47.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _235.MsgClientImpl;
            QueryClientImpl: typeof _222.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _50.QueryProposalRequest): Promise<_50.QueryProposalResponse>;
                proposals(request: _50.QueryProposalsRequest): Promise<_50.QueryProposalsResponse>;
                vote(request: _50.QueryVoteRequest): Promise<_50.QueryVoteResponse>;
                votes(request: _50.QueryVotesRequest): Promise<_50.QueryVotesResponse>;
                params(request: _50.QueryParamsRequest): Promise<_50.QueryParamsResponse>;
                deposit(request: _50.QueryDepositRequest): Promise<_50.QueryDepositResponse>;
                deposits(request: _50.QueryDepositsRequest): Promise<_50.QueryDepositsResponse>;
                tallyResult(request: _50.QueryTallyResultRequest): Promise<_50.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _51.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _51.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _51.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _51.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _51.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _51.MsgSubmitProposal;
                    };
                    vote(value: _51.MsgVote): {
                        typeUrl: string;
                        value: _51.MsgVote;
                    };
                    voteWeighted(value: _51.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _51.MsgVoteWeighted;
                    };
                    deposit(value: _51.MsgDeposit): {
                        typeUrl: string;
                        value: _51.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _51.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _51.MsgSubmitProposal;
                    };
                    vote(value: _51.MsgVote): {
                        typeUrl: string;
                        value: _51.MsgVote;
                    };
                    voteWeighted(value: _51.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _51.MsgVoteWeighted;
                    };
                    deposit(value: _51.MsgDeposit): {
                        typeUrl: string;
                        value: _51.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _51.MsgSubmitProposal) => _51.MsgSubmitProposalAmino;
                    fromAmino: (object: _51.MsgSubmitProposalAmino) => _51.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _51.MsgVote) => _51.MsgVoteAmino;
                    fromAmino: (object: _51.MsgVoteAmino) => _51.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _51.MsgVoteWeighted) => _51.MsgVoteWeightedAmino;
                    fromAmino: (object: _51.MsgVoteWeightedAmino) => _51.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _51.MsgDeposit) => _51.MsgDepositAmino;
                    fromAmino: (object: _51.MsgDepositAmino) => _51.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _51.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.MsgSubmitProposal;
                fromPartial(object: Partial<_51.MsgSubmitProposal>): _51.MsgSubmitProposal;
                fromAmino(object: _51.MsgSubmitProposalAmino): _51.MsgSubmitProposal;
                toAmino(message: _51.MsgSubmitProposal): _51.MsgSubmitProposalAmino;
                fromAminoMsg(object: _51.MsgSubmitProposalAminoMsg): _51.MsgSubmitProposal;
                toAminoMsg(message: _51.MsgSubmitProposal): _51.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _51.MsgSubmitProposalProtoMsg): _51.MsgSubmitProposal;
                toProto(message: _51.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _51.MsgSubmitProposal): _51.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _51.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_51.MsgSubmitProposalResponse>): _51.MsgSubmitProposalResponse;
                fromAmino(object: _51.MsgSubmitProposalResponseAmino): _51.MsgSubmitProposalResponse;
                toAmino(message: _51.MsgSubmitProposalResponse): _51.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _51.MsgSubmitProposalResponseAminoMsg): _51.MsgSubmitProposalResponse;
                toAminoMsg(message: _51.MsgSubmitProposalResponse): _51.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _51.MsgSubmitProposalResponseProtoMsg): _51.MsgSubmitProposalResponse;
                toProto(message: _51.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _51.MsgSubmitProposalResponse): _51.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _51.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.MsgVote;
                fromPartial(object: Partial<_51.MsgVote>): _51.MsgVote;
                fromAmino(object: _51.MsgVoteAmino): _51.MsgVote;
                toAmino(message: _51.MsgVote): _51.MsgVoteAmino;
                fromAminoMsg(object: _51.MsgVoteAminoMsg): _51.MsgVote;
                toAminoMsg(message: _51.MsgVote): _51.MsgVoteAminoMsg;
                fromProtoMsg(message: _51.MsgVoteProtoMsg): _51.MsgVote;
                toProto(message: _51.MsgVote): Uint8Array;
                toProtoMsg(message: _51.MsgVote): _51.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _51.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.MsgVoteResponse;
                fromPartial(_: Partial<_51.MsgVoteResponse>): _51.MsgVoteResponse;
                fromAmino(_: _51.MsgVoteResponseAmino): _51.MsgVoteResponse;
                toAmino(_: _51.MsgVoteResponse): _51.MsgVoteResponseAmino;
                fromAminoMsg(object: _51.MsgVoteResponseAminoMsg): _51.MsgVoteResponse;
                toAminoMsg(message: _51.MsgVoteResponse): _51.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _51.MsgVoteResponseProtoMsg): _51.MsgVoteResponse;
                toProto(message: _51.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _51.MsgVoteResponse): _51.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _51.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.MsgVoteWeighted;
                fromPartial(object: Partial<_51.MsgVoteWeighted>): _51.MsgVoteWeighted;
                fromAmino(object: _51.MsgVoteWeightedAmino): _51.MsgVoteWeighted;
                toAmino(message: _51.MsgVoteWeighted): _51.MsgVoteWeightedAmino;
                fromAminoMsg(object: _51.MsgVoteWeightedAminoMsg): _51.MsgVoteWeighted;
                toAminoMsg(message: _51.MsgVoteWeighted): _51.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _51.MsgVoteWeightedProtoMsg): _51.MsgVoteWeighted;
                toProto(message: _51.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _51.MsgVoteWeighted): _51.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _51.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_51.MsgVoteWeightedResponse>): _51.MsgVoteWeightedResponse;
                fromAmino(_: _51.MsgVoteWeightedResponseAmino): _51.MsgVoteWeightedResponse;
                toAmino(_: _51.MsgVoteWeightedResponse): _51.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _51.MsgVoteWeightedResponseAminoMsg): _51.MsgVoteWeightedResponse;
                toAminoMsg(message: _51.MsgVoteWeightedResponse): _51.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _51.MsgVoteWeightedResponseProtoMsg): _51.MsgVoteWeightedResponse;
                toProto(message: _51.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _51.MsgVoteWeightedResponse): _51.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _51.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.MsgDeposit;
                fromPartial(object: Partial<_51.MsgDeposit>): _51.MsgDeposit;
                fromAmino(object: _51.MsgDepositAmino): _51.MsgDeposit;
                toAmino(message: _51.MsgDeposit): _51.MsgDepositAmino;
                fromAminoMsg(object: _51.MsgDepositAminoMsg): _51.MsgDeposit;
                toAminoMsg(message: _51.MsgDeposit): _51.MsgDepositAminoMsg;
                fromProtoMsg(message: _51.MsgDepositProtoMsg): _51.MsgDeposit;
                toProto(message: _51.MsgDeposit): Uint8Array;
                toProtoMsg(message: _51.MsgDeposit): _51.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _51.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.MsgDepositResponse;
                fromPartial(_: Partial<_51.MsgDepositResponse>): _51.MsgDepositResponse;
                fromAmino(_: _51.MsgDepositResponseAmino): _51.MsgDepositResponse;
                toAmino(_: _51.MsgDepositResponse): _51.MsgDepositResponseAmino;
                fromAminoMsg(object: _51.MsgDepositResponseAminoMsg): _51.MsgDepositResponse;
                toAminoMsg(message: _51.MsgDepositResponse): _51.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _51.MsgDepositResponseProtoMsg): _51.MsgDepositResponse;
                toProto(message: _51.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _51.MsgDepositResponse): _51.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _49.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _50.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.QueryProposalRequest;
                fromPartial(object: Partial<_50.QueryProposalRequest>): _50.QueryProposalRequest;
                fromAmino(object: _50.QueryProposalRequestAmino): _50.QueryProposalRequest;
                toAmino(message: _50.QueryProposalRequest): _50.QueryProposalRequestAmino;
                fromAminoMsg(object: _50.QueryProposalRequestAminoMsg): _50.QueryProposalRequest;
                toAminoMsg(message: _50.QueryProposalRequest): _50.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _50.QueryProposalRequestProtoMsg): _50.QueryProposalRequest;
                toProto(message: _50.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _50.QueryProposalRequest): _50.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _50.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.QueryProposalResponse;
                fromPartial(object: Partial<_50.QueryProposalResponse>): _50.QueryProposalResponse;
                fromAmino(object: _50.QueryProposalResponseAmino): _50.QueryProposalResponse;
                toAmino(message: _50.QueryProposalResponse): _50.QueryProposalResponseAmino;
                fromAminoMsg(object: _50.QueryProposalResponseAminoMsg): _50.QueryProposalResponse;
                toAminoMsg(message: _50.QueryProposalResponse): _50.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _50.QueryProposalResponseProtoMsg): _50.QueryProposalResponse;
                toProto(message: _50.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _50.QueryProposalResponse): _50.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _50.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.QueryProposalsRequest;
                fromPartial(object: Partial<_50.QueryProposalsRequest>): _50.QueryProposalsRequest;
                fromAmino(object: _50.QueryProposalsRequestAmino): _50.QueryProposalsRequest;
                toAmino(message: _50.QueryProposalsRequest): _50.QueryProposalsRequestAmino;
                fromAminoMsg(object: _50.QueryProposalsRequestAminoMsg): _50.QueryProposalsRequest;
                toAminoMsg(message: _50.QueryProposalsRequest): _50.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _50.QueryProposalsRequestProtoMsg): _50.QueryProposalsRequest;
                toProto(message: _50.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _50.QueryProposalsRequest): _50.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _50.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.QueryProposalsResponse;
                fromPartial(object: Partial<_50.QueryProposalsResponse>): _50.QueryProposalsResponse;
                fromAmino(object: _50.QueryProposalsResponseAmino): _50.QueryProposalsResponse;
                toAmino(message: _50.QueryProposalsResponse): _50.QueryProposalsResponseAmino;
                fromAminoMsg(object: _50.QueryProposalsResponseAminoMsg): _50.QueryProposalsResponse;
                toAminoMsg(message: _50.QueryProposalsResponse): _50.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _50.QueryProposalsResponseProtoMsg): _50.QueryProposalsResponse;
                toProto(message: _50.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _50.QueryProposalsResponse): _50.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _50.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.QueryVoteRequest;
                fromPartial(object: Partial<_50.QueryVoteRequest>): _50.QueryVoteRequest;
                fromAmino(object: _50.QueryVoteRequestAmino): _50.QueryVoteRequest;
                toAmino(message: _50.QueryVoteRequest): _50.QueryVoteRequestAmino;
                fromAminoMsg(object: _50.QueryVoteRequestAminoMsg): _50.QueryVoteRequest;
                toAminoMsg(message: _50.QueryVoteRequest): _50.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _50.QueryVoteRequestProtoMsg): _50.QueryVoteRequest;
                toProto(message: _50.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _50.QueryVoteRequest): _50.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _50.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.QueryVoteResponse;
                fromPartial(object: Partial<_50.QueryVoteResponse>): _50.QueryVoteResponse;
                fromAmino(object: _50.QueryVoteResponseAmino): _50.QueryVoteResponse;
                toAmino(message: _50.QueryVoteResponse): _50.QueryVoteResponseAmino;
                fromAminoMsg(object: _50.QueryVoteResponseAminoMsg): _50.QueryVoteResponse;
                toAminoMsg(message: _50.QueryVoteResponse): _50.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _50.QueryVoteResponseProtoMsg): _50.QueryVoteResponse;
                toProto(message: _50.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _50.QueryVoteResponse): _50.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _50.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.QueryVotesRequest;
                fromPartial(object: Partial<_50.QueryVotesRequest>): _50.QueryVotesRequest;
                fromAmino(object: _50.QueryVotesRequestAmino): _50.QueryVotesRequest;
                toAmino(message: _50.QueryVotesRequest): _50.QueryVotesRequestAmino;
                fromAminoMsg(object: _50.QueryVotesRequestAminoMsg): _50.QueryVotesRequest;
                toAminoMsg(message: _50.QueryVotesRequest): _50.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _50.QueryVotesRequestProtoMsg): _50.QueryVotesRequest;
                toProto(message: _50.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _50.QueryVotesRequest): _50.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _50.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.QueryVotesResponse;
                fromPartial(object: Partial<_50.QueryVotesResponse>): _50.QueryVotesResponse;
                fromAmino(object: _50.QueryVotesResponseAmino): _50.QueryVotesResponse;
                toAmino(message: _50.QueryVotesResponse): _50.QueryVotesResponseAmino;
                fromAminoMsg(object: _50.QueryVotesResponseAminoMsg): _50.QueryVotesResponse;
                toAminoMsg(message: _50.QueryVotesResponse): _50.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _50.QueryVotesResponseProtoMsg): _50.QueryVotesResponse;
                toProto(message: _50.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _50.QueryVotesResponse): _50.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _50.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.QueryParamsRequest;
                fromPartial(object: Partial<_50.QueryParamsRequest>): _50.QueryParamsRequest;
                fromAmino(object: _50.QueryParamsRequestAmino): _50.QueryParamsRequest;
                toAmino(message: _50.QueryParamsRequest): _50.QueryParamsRequestAmino;
                fromAminoMsg(object: _50.QueryParamsRequestAminoMsg): _50.QueryParamsRequest;
                toAminoMsg(message: _50.QueryParamsRequest): _50.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _50.QueryParamsRequestProtoMsg): _50.QueryParamsRequest;
                toProto(message: _50.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _50.QueryParamsRequest): _50.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _50.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.QueryParamsResponse;
                fromPartial(object: Partial<_50.QueryParamsResponse>): _50.QueryParamsResponse;
                fromAmino(object: _50.QueryParamsResponseAmino): _50.QueryParamsResponse;
                toAmino(message: _50.QueryParamsResponse): _50.QueryParamsResponseAmino;
                fromAminoMsg(object: _50.QueryParamsResponseAminoMsg): _50.QueryParamsResponse;
                toAminoMsg(message: _50.QueryParamsResponse): _50.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _50.QueryParamsResponseProtoMsg): _50.QueryParamsResponse;
                toProto(message: _50.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _50.QueryParamsResponse): _50.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _50.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.QueryDepositRequest;
                fromPartial(object: Partial<_50.QueryDepositRequest>): _50.QueryDepositRequest;
                fromAmino(object: _50.QueryDepositRequestAmino): _50.QueryDepositRequest;
                toAmino(message: _50.QueryDepositRequest): _50.QueryDepositRequestAmino;
                fromAminoMsg(object: _50.QueryDepositRequestAminoMsg): _50.QueryDepositRequest;
                toAminoMsg(message: _50.QueryDepositRequest): _50.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _50.QueryDepositRequestProtoMsg): _50.QueryDepositRequest;
                toProto(message: _50.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _50.QueryDepositRequest): _50.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _50.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.QueryDepositResponse;
                fromPartial(object: Partial<_50.QueryDepositResponse>): _50.QueryDepositResponse;
                fromAmino(object: _50.QueryDepositResponseAmino): _50.QueryDepositResponse;
                toAmino(message: _50.QueryDepositResponse): _50.QueryDepositResponseAmino;
                fromAminoMsg(object: _50.QueryDepositResponseAminoMsg): _50.QueryDepositResponse;
                toAminoMsg(message: _50.QueryDepositResponse): _50.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _50.QueryDepositResponseProtoMsg): _50.QueryDepositResponse;
                toProto(message: _50.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _50.QueryDepositResponse): _50.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _50.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.QueryDepositsRequest;
                fromPartial(object: Partial<_50.QueryDepositsRequest>): _50.QueryDepositsRequest;
                fromAmino(object: _50.QueryDepositsRequestAmino): _50.QueryDepositsRequest;
                toAmino(message: _50.QueryDepositsRequest): _50.QueryDepositsRequestAmino;
                fromAminoMsg(object: _50.QueryDepositsRequestAminoMsg): _50.QueryDepositsRequest;
                toAminoMsg(message: _50.QueryDepositsRequest): _50.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _50.QueryDepositsRequestProtoMsg): _50.QueryDepositsRequest;
                toProto(message: _50.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _50.QueryDepositsRequest): _50.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _50.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.QueryDepositsResponse;
                fromPartial(object: Partial<_50.QueryDepositsResponse>): _50.QueryDepositsResponse;
                fromAmino(object: _50.QueryDepositsResponseAmino): _50.QueryDepositsResponse;
                toAmino(message: _50.QueryDepositsResponse): _50.QueryDepositsResponseAmino;
                fromAminoMsg(object: _50.QueryDepositsResponseAminoMsg): _50.QueryDepositsResponse;
                toAminoMsg(message: _50.QueryDepositsResponse): _50.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _50.QueryDepositsResponseProtoMsg): _50.QueryDepositsResponse;
                toProto(message: _50.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _50.QueryDepositsResponse): _50.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _50.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.QueryTallyResultRequest;
                fromPartial(object: Partial<_50.QueryTallyResultRequest>): _50.QueryTallyResultRequest;
                fromAmino(object: _50.QueryTallyResultRequestAmino): _50.QueryTallyResultRequest;
                toAmino(message: _50.QueryTallyResultRequest): _50.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _50.QueryTallyResultRequestAminoMsg): _50.QueryTallyResultRequest;
                toAminoMsg(message: _50.QueryTallyResultRequest): _50.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _50.QueryTallyResultRequestProtoMsg): _50.QueryTallyResultRequest;
                toProto(message: _50.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _50.QueryTallyResultRequest): _50.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _50.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.QueryTallyResultResponse;
                fromPartial(object: Partial<_50.QueryTallyResultResponse>): _50.QueryTallyResultResponse;
                fromAmino(object: _50.QueryTallyResultResponseAmino): _50.QueryTallyResultResponse;
                toAmino(message: _50.QueryTallyResultResponse): _50.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _50.QueryTallyResultResponseAminoMsg): _50.QueryTallyResultResponse;
                toAminoMsg(message: _50.QueryTallyResultResponse): _50.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _50.QueryTallyResultResponseProtoMsg): _50.QueryTallyResultResponse;
                toProto(message: _50.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _50.QueryTallyResultResponse): _50.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _49.VoteOption;
            voteOptionToJSON(object: _49.VoteOption): string;
            proposalStatusFromJSON(object: any): _49.ProposalStatus;
            proposalStatusToJSON(object: _49.ProposalStatus): string;
            VoteOption: typeof _49.VoteOption;
            VoteOptionSDKType: typeof _49.VoteOption;
            VoteOptionAmino: typeof _49.VoteOption;
            ProposalStatus: typeof _49.ProposalStatus;
            ProposalStatusSDKType: typeof _49.ProposalStatus;
            ProposalStatusAmino: typeof _49.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _49.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.WeightedVoteOption;
                fromPartial(object: Partial<_49.WeightedVoteOption>): _49.WeightedVoteOption;
                fromAmino(object: _49.WeightedVoteOptionAmino): _49.WeightedVoteOption;
                toAmino(message: _49.WeightedVoteOption): _49.WeightedVoteOptionAmino;
                fromAminoMsg(object: _49.WeightedVoteOptionAminoMsg): _49.WeightedVoteOption;
                toAminoMsg(message: _49.WeightedVoteOption): _49.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _49.WeightedVoteOptionProtoMsg): _49.WeightedVoteOption;
                toProto(message: _49.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _49.WeightedVoteOption): _49.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _49.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.TextProposal;
                fromPartial(object: Partial<_49.TextProposal>): _49.TextProposal;
                fromAmino(object: _49.TextProposalAmino): _49.TextProposal;
                toAmino(message: _49.TextProposal): _49.TextProposalAmino;
                fromAminoMsg(object: _49.TextProposalAminoMsg): _49.TextProposal;
                toAminoMsg(message: _49.TextProposal): _49.TextProposalAminoMsg;
                fromProtoMsg(message: _49.TextProposalProtoMsg): _49.TextProposal;
                toProto(message: _49.TextProposal): Uint8Array;
                toProtoMsg(message: _49.TextProposal): _49.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _49.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.Deposit;
                fromPartial(object: Partial<_49.Deposit>): _49.Deposit;
                fromAmino(object: _49.DepositAmino): _49.Deposit;
                toAmino(message: _49.Deposit): _49.DepositAmino;
                fromAminoMsg(object: _49.DepositAminoMsg): _49.Deposit;
                toAminoMsg(message: _49.Deposit): _49.DepositAminoMsg;
                fromProtoMsg(message: _49.DepositProtoMsg): _49.Deposit;
                toProto(message: _49.Deposit): Uint8Array;
                toProtoMsg(message: _49.Deposit): _49.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _49.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.Proposal;
                fromPartial(object: Partial<_49.Proposal>): _49.Proposal;
                fromAmino(object: _49.ProposalAmino): _49.Proposal;
                toAmino(message: _49.Proposal): _49.ProposalAmino;
                fromAminoMsg(object: _49.ProposalAminoMsg): _49.Proposal;
                toAminoMsg(message: _49.Proposal): _49.ProposalAminoMsg;
                fromProtoMsg(message: _49.ProposalProtoMsg): _49.Proposal;
                toProto(message: _49.Proposal): Uint8Array;
                toProtoMsg(message: _49.Proposal): _49.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _49.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.TallyResult;
                fromPartial(object: Partial<_49.TallyResult>): _49.TallyResult;
                fromAmino(object: _49.TallyResultAmino): _49.TallyResult;
                toAmino(message: _49.TallyResult): _49.TallyResultAmino;
                fromAminoMsg(object: _49.TallyResultAminoMsg): _49.TallyResult;
                toAminoMsg(message: _49.TallyResult): _49.TallyResultAminoMsg;
                fromProtoMsg(message: _49.TallyResultProtoMsg): _49.TallyResult;
                toProto(message: _49.TallyResult): Uint8Array;
                toProtoMsg(message: _49.TallyResult): _49.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _49.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.Vote;
                fromPartial(object: Partial<_49.Vote>): _49.Vote;
                fromAmino(object: _49.VoteAmino): _49.Vote;
                toAmino(message: _49.Vote): _49.VoteAmino;
                fromAminoMsg(object: _49.VoteAminoMsg): _49.Vote;
                toAminoMsg(message: _49.Vote): _49.VoteAminoMsg;
                fromProtoMsg(message: _49.VoteProtoMsg): _49.Vote;
                toProto(message: _49.Vote): Uint8Array;
                toProtoMsg(message: _49.Vote): _49.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _49.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.DepositParams;
                fromPartial(object: Partial<_49.DepositParams>): _49.DepositParams;
                fromAmino(object: _49.DepositParamsAmino): _49.DepositParams;
                toAmino(message: _49.DepositParams): _49.DepositParamsAmino;
                fromAminoMsg(object: _49.DepositParamsAminoMsg): _49.DepositParams;
                toAminoMsg(message: _49.DepositParams): _49.DepositParamsAminoMsg;
                fromProtoMsg(message: _49.DepositParamsProtoMsg): _49.DepositParams;
                toProto(message: _49.DepositParams): Uint8Array;
                toProtoMsg(message: _49.DepositParams): _49.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _49.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.VotingParams;
                fromPartial(object: Partial<_49.VotingParams>): _49.VotingParams;
                fromAmino(object: _49.VotingParamsAmino): _49.VotingParams;
                toAmino(message: _49.VotingParams): _49.VotingParamsAmino;
                fromAminoMsg(object: _49.VotingParamsAminoMsg): _49.VotingParams;
                toAminoMsg(message: _49.VotingParams): _49.VotingParamsAminoMsg;
                fromProtoMsg(message: _49.VotingParamsProtoMsg): _49.VotingParams;
                toProto(message: _49.VotingParams): Uint8Array;
                toProtoMsg(message: _49.VotingParams): _49.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _49.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.TallyParams;
                fromPartial(object: Partial<_49.TallyParams>): _49.TallyParams;
                fromAmino(object: _49.TallyParamsAmino): _49.TallyParams;
                toAmino(message: _49.TallyParams): _49.TallyParamsAmino;
                fromAminoMsg(object: _49.TallyParamsAminoMsg): _49.TallyParams;
                toAminoMsg(message: _49.TallyParams): _49.TallyParamsAminoMsg;
                fromProtoMsg(message: _49.TallyParamsProtoMsg): _49.TallyParams;
                toProto(message: _49.TallyParams): Uint8Array;
                toProtoMsg(message: _49.TallyParams): _49.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _48.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.GenesisState;
                fromPartial(object: Partial<_48.GenesisState>): _48.GenesisState;
                fromAmino(object: _48.GenesisStateAmino): _48.GenesisState;
                toAmino(message: _48.GenesisState): _48.GenesisStateAmino;
                fromAminoMsg(object: _48.GenesisStateAminoMsg): _48.GenesisState;
                toAminoMsg(message: _48.GenesisState): _48.GenesisStateAminoMsg;
                fromProtoMsg(message: _48.GenesisStateProtoMsg): _48.GenesisState;
                toProto(message: _48.GenesisState): Uint8Array;
                toProtoMsg(message: _48.GenesisState): _48.GenesisStateProtoMsg;
            };
        };
    }
    namespace ics23 {
        const v1: {
            hashOpFromJSON(object: any): _52.HashOp;
            hashOpToJSON(object: _52.HashOp): string;
            lengthOpFromJSON(object: any): _52.LengthOp;
            lengthOpToJSON(object: _52.LengthOp): string;
            HashOp: typeof _52.HashOp;
            HashOpSDKType: typeof _52.HashOp;
            HashOpAmino: typeof _52.HashOp;
            LengthOp: typeof _52.LengthOp;
            LengthOpSDKType: typeof _52.LengthOp;
            LengthOpAmino: typeof _52.LengthOp;
            ExistenceProof: {
                typeUrl: string;
                encode(message: _52.ExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.ExistenceProof;
                fromPartial(object: Partial<_52.ExistenceProof>): _52.ExistenceProof;
                fromAmino(object: _52.ExistenceProofAmino): _52.ExistenceProof;
                toAmino(message: _52.ExistenceProof): _52.ExistenceProofAmino;
                fromAminoMsg(object: _52.ExistenceProofAminoMsg): _52.ExistenceProof;
                toAminoMsg(message: _52.ExistenceProof): _52.ExistenceProofAminoMsg;
                fromProtoMsg(message: _52.ExistenceProofProtoMsg): _52.ExistenceProof;
                toProto(message: _52.ExistenceProof): Uint8Array;
                toProtoMsg(message: _52.ExistenceProof): _52.ExistenceProofProtoMsg;
            };
            NonExistenceProof: {
                typeUrl: string;
                encode(message: _52.NonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.NonExistenceProof;
                fromPartial(object: Partial<_52.NonExistenceProof>): _52.NonExistenceProof;
                fromAmino(object: _52.NonExistenceProofAmino): _52.NonExistenceProof;
                toAmino(message: _52.NonExistenceProof): _52.NonExistenceProofAmino;
                fromAminoMsg(object: _52.NonExistenceProofAminoMsg): _52.NonExistenceProof;
                toAminoMsg(message: _52.NonExistenceProof): _52.NonExistenceProofAminoMsg;
                fromProtoMsg(message: _52.NonExistenceProofProtoMsg): _52.NonExistenceProof;
                toProto(message: _52.NonExistenceProof): Uint8Array;
                toProtoMsg(message: _52.NonExistenceProof): _52.NonExistenceProofProtoMsg;
            };
            CommitmentProof: {
                typeUrl: string;
                encode(message: _52.CommitmentProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.CommitmentProof;
                fromPartial(object: Partial<_52.CommitmentProof>): _52.CommitmentProof;
                fromAmino(object: _52.CommitmentProofAmino): _52.CommitmentProof;
                toAmino(message: _52.CommitmentProof): _52.CommitmentProofAmino;
                fromAminoMsg(object: _52.CommitmentProofAminoMsg): _52.CommitmentProof;
                toAminoMsg(message: _52.CommitmentProof): _52.CommitmentProofAminoMsg;
                fromProtoMsg(message: _52.CommitmentProofProtoMsg): _52.CommitmentProof;
                toProto(message: _52.CommitmentProof): Uint8Array;
                toProtoMsg(message: _52.CommitmentProof): _52.CommitmentProofProtoMsg;
            };
            LeafOp: {
                typeUrl: string;
                encode(message: _52.LeafOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.LeafOp;
                fromPartial(object: Partial<_52.LeafOp>): _52.LeafOp;
                fromAmino(object: _52.LeafOpAmino): _52.LeafOp;
                toAmino(message: _52.LeafOp): _52.LeafOpAmino;
                fromAminoMsg(object: _52.LeafOpAminoMsg): _52.LeafOp;
                toAminoMsg(message: _52.LeafOp): _52.LeafOpAminoMsg;
                fromProtoMsg(message: _52.LeafOpProtoMsg): _52.LeafOp;
                toProto(message: _52.LeafOp): Uint8Array;
                toProtoMsg(message: _52.LeafOp): _52.LeafOpProtoMsg;
            };
            InnerOp: {
                typeUrl: string;
                encode(message: _52.InnerOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.InnerOp;
                fromPartial(object: Partial<_52.InnerOp>): _52.InnerOp;
                fromAmino(object: _52.InnerOpAmino): _52.InnerOp;
                toAmino(message: _52.InnerOp): _52.InnerOpAmino;
                fromAminoMsg(object: _52.InnerOpAminoMsg): _52.InnerOp;
                toAminoMsg(message: _52.InnerOp): _52.InnerOpAminoMsg;
                fromProtoMsg(message: _52.InnerOpProtoMsg): _52.InnerOp;
                toProto(message: _52.InnerOp): Uint8Array;
                toProtoMsg(message: _52.InnerOp): _52.InnerOpProtoMsg;
            };
            ProofSpec: {
                typeUrl: string;
                encode(message: _52.ProofSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.ProofSpec;
                fromPartial(object: Partial<_52.ProofSpec>): _52.ProofSpec;
                fromAmino(object: _52.ProofSpecAmino): _52.ProofSpec;
                toAmino(message: _52.ProofSpec): _52.ProofSpecAmino;
                fromAminoMsg(object: _52.ProofSpecAminoMsg): _52.ProofSpec;
                toAminoMsg(message: _52.ProofSpec): _52.ProofSpecAminoMsg;
                fromProtoMsg(message: _52.ProofSpecProtoMsg): _52.ProofSpec;
                toProto(message: _52.ProofSpec): Uint8Array;
                toProtoMsg(message: _52.ProofSpec): _52.ProofSpecProtoMsg;
            };
            InnerSpec: {
                typeUrl: string;
                encode(message: _52.InnerSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.InnerSpec;
                fromPartial(object: Partial<_52.InnerSpec>): _52.InnerSpec;
                fromAmino(object: _52.InnerSpecAmino): _52.InnerSpec;
                toAmino(message: _52.InnerSpec): _52.InnerSpecAmino;
                fromAminoMsg(object: _52.InnerSpecAminoMsg): _52.InnerSpec;
                toAminoMsg(message: _52.InnerSpec): _52.InnerSpecAminoMsg;
                fromProtoMsg(message: _52.InnerSpecProtoMsg): _52.InnerSpec;
                toProto(message: _52.InnerSpec): Uint8Array;
                toProtoMsg(message: _52.InnerSpec): _52.InnerSpecProtoMsg;
            };
            BatchProof: {
                typeUrl: string;
                encode(message: _52.BatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.BatchProof;
                fromPartial(object: Partial<_52.BatchProof>): _52.BatchProof;
                fromAmino(object: _52.BatchProofAmino): _52.BatchProof;
                toAmino(message: _52.BatchProof): _52.BatchProofAmino;
                fromAminoMsg(object: _52.BatchProofAminoMsg): _52.BatchProof;
                toAminoMsg(message: _52.BatchProof): _52.BatchProofAminoMsg;
                fromProtoMsg(message: _52.BatchProofProtoMsg): _52.BatchProof;
                toProto(message: _52.BatchProof): Uint8Array;
                toProtoMsg(message: _52.BatchProof): _52.BatchProofProtoMsg;
            };
            BatchEntry: {
                typeUrl: string;
                encode(message: _52.BatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.BatchEntry;
                fromPartial(object: Partial<_52.BatchEntry>): _52.BatchEntry;
                fromAmino(object: _52.BatchEntryAmino): _52.BatchEntry;
                toAmino(message: _52.BatchEntry): _52.BatchEntryAmino;
                fromAminoMsg(object: _52.BatchEntryAminoMsg): _52.BatchEntry;
                toAminoMsg(message: _52.BatchEntry): _52.BatchEntryAminoMsg;
                fromProtoMsg(message: _52.BatchEntryProtoMsg): _52.BatchEntry;
                toProto(message: _52.BatchEntry): Uint8Array;
                toProtoMsg(message: _52.BatchEntry): _52.BatchEntryProtoMsg;
            };
            CompressedBatchProof: {
                typeUrl: string;
                encode(message: _52.CompressedBatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.CompressedBatchProof;
                fromPartial(object: Partial<_52.CompressedBatchProof>): _52.CompressedBatchProof;
                fromAmino(object: _52.CompressedBatchProofAmino): _52.CompressedBatchProof;
                toAmino(message: _52.CompressedBatchProof): _52.CompressedBatchProofAmino;
                fromAminoMsg(object: _52.CompressedBatchProofAminoMsg): _52.CompressedBatchProof;
                toAminoMsg(message: _52.CompressedBatchProof): _52.CompressedBatchProofAminoMsg;
                fromProtoMsg(message: _52.CompressedBatchProofProtoMsg): _52.CompressedBatchProof;
                toProto(message: _52.CompressedBatchProof): Uint8Array;
                toProtoMsg(message: _52.CompressedBatchProof): _52.CompressedBatchProofProtoMsg;
            };
            CompressedBatchEntry: {
                typeUrl: string;
                encode(message: _52.CompressedBatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.CompressedBatchEntry;
                fromPartial(object: Partial<_52.CompressedBatchEntry>): _52.CompressedBatchEntry;
                fromAmino(object: _52.CompressedBatchEntryAmino): _52.CompressedBatchEntry;
                toAmino(message: _52.CompressedBatchEntry): _52.CompressedBatchEntryAmino;
                fromAminoMsg(object: _52.CompressedBatchEntryAminoMsg): _52.CompressedBatchEntry;
                toAminoMsg(message: _52.CompressedBatchEntry): _52.CompressedBatchEntryAminoMsg;
                fromProtoMsg(message: _52.CompressedBatchEntryProtoMsg): _52.CompressedBatchEntry;
                toProto(message: _52.CompressedBatchEntry): Uint8Array;
                toProtoMsg(message: _52.CompressedBatchEntry): _52.CompressedBatchEntryProtoMsg;
            };
            CompressedExistenceProof: {
                typeUrl: string;
                encode(message: _52.CompressedExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.CompressedExistenceProof;
                fromPartial(object: Partial<_52.CompressedExistenceProof>): _52.CompressedExistenceProof;
                fromAmino(object: _52.CompressedExistenceProofAmino): _52.CompressedExistenceProof;
                toAmino(message: _52.CompressedExistenceProof): _52.CompressedExistenceProofAmino;
                fromAminoMsg(object: _52.CompressedExistenceProofAminoMsg): _52.CompressedExistenceProof;
                toAminoMsg(message: _52.CompressedExistenceProof): _52.CompressedExistenceProofAminoMsg;
                fromProtoMsg(message: _52.CompressedExistenceProofProtoMsg): _52.CompressedExistenceProof;
                toProto(message: _52.CompressedExistenceProof): Uint8Array;
                toProtoMsg(message: _52.CompressedExistenceProof): _52.CompressedExistenceProofProtoMsg;
            };
            CompressedNonExistenceProof: {
                typeUrl: string;
                encode(message: _52.CompressedNonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.CompressedNonExistenceProof;
                fromPartial(object: Partial<_52.CompressedNonExistenceProof>): _52.CompressedNonExistenceProof;
                fromAmino(object: _52.CompressedNonExistenceProofAmino): _52.CompressedNonExistenceProof;
                toAmino(message: _52.CompressedNonExistenceProof): _52.CompressedNonExistenceProofAmino;
                fromAminoMsg(object: _52.CompressedNonExistenceProofAminoMsg): _52.CompressedNonExistenceProof;
                toAminoMsg(message: _52.CompressedNonExistenceProof): _52.CompressedNonExistenceProofAminoMsg;
                fromProtoMsg(message: _52.CompressedNonExistenceProofProtoMsg): _52.CompressedNonExistenceProof;
                toProto(message: _52.CompressedNonExistenceProof): Uint8Array;
                toProtoMsg(message: _52.CompressedNonExistenceProof): _52.CompressedNonExistenceProofProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _223.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                inflation(request?: _55.QueryInflationRequest): Promise<_55.QueryInflationResponse>;
                annualProvisions(request?: _55.QueryAnnualProvisionsRequest): Promise<_55.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _55.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.QueryParamsRequest;
                fromPartial(_: Partial<_55.QueryParamsRequest>): _55.QueryParamsRequest;
                fromAmino(_: _55.QueryParamsRequestAmino): _55.QueryParamsRequest;
                toAmino(_: _55.QueryParamsRequest): _55.QueryParamsRequestAmino;
                fromAminoMsg(object: _55.QueryParamsRequestAminoMsg): _55.QueryParamsRequest;
                toAminoMsg(message: _55.QueryParamsRequest): _55.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _55.QueryParamsRequestProtoMsg): _55.QueryParamsRequest;
                toProto(message: _55.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _55.QueryParamsRequest): _55.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _55.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.QueryParamsResponse;
                fromPartial(object: Partial<_55.QueryParamsResponse>): _55.QueryParamsResponse;
                fromAmino(object: _55.QueryParamsResponseAmino): _55.QueryParamsResponse;
                toAmino(message: _55.QueryParamsResponse): _55.QueryParamsResponseAmino;
                fromAminoMsg(object: _55.QueryParamsResponseAminoMsg): _55.QueryParamsResponse;
                toAminoMsg(message: _55.QueryParamsResponse): _55.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _55.QueryParamsResponseProtoMsg): _55.QueryParamsResponse;
                toProto(message: _55.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _55.QueryParamsResponse): _55.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _55.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.QueryInflationRequest;
                fromPartial(_: Partial<_55.QueryInflationRequest>): _55.QueryInflationRequest;
                fromAmino(_: _55.QueryInflationRequestAmino): _55.QueryInflationRequest;
                toAmino(_: _55.QueryInflationRequest): _55.QueryInflationRequestAmino;
                fromAminoMsg(object: _55.QueryInflationRequestAminoMsg): _55.QueryInflationRequest;
                toAminoMsg(message: _55.QueryInflationRequest): _55.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _55.QueryInflationRequestProtoMsg): _55.QueryInflationRequest;
                toProto(message: _55.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _55.QueryInflationRequest): _55.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _55.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.QueryInflationResponse;
                fromPartial(object: Partial<_55.QueryInflationResponse>): _55.QueryInflationResponse;
                fromAmino(object: _55.QueryInflationResponseAmino): _55.QueryInflationResponse;
                toAmino(message: _55.QueryInflationResponse): _55.QueryInflationResponseAmino;
                fromAminoMsg(object: _55.QueryInflationResponseAminoMsg): _55.QueryInflationResponse;
                toAminoMsg(message: _55.QueryInflationResponse): _55.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _55.QueryInflationResponseProtoMsg): _55.QueryInflationResponse;
                toProto(message: _55.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _55.QueryInflationResponse): _55.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _55.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_55.QueryAnnualProvisionsRequest>): _55.QueryAnnualProvisionsRequest;
                fromAmino(_: _55.QueryAnnualProvisionsRequestAmino): _55.QueryAnnualProvisionsRequest;
                toAmino(_: _55.QueryAnnualProvisionsRequest): _55.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _55.QueryAnnualProvisionsRequestAminoMsg): _55.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _55.QueryAnnualProvisionsRequest): _55.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _55.QueryAnnualProvisionsRequestProtoMsg): _55.QueryAnnualProvisionsRequest;
                toProto(message: _55.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _55.QueryAnnualProvisionsRequest): _55.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _55.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_55.QueryAnnualProvisionsResponse>): _55.QueryAnnualProvisionsResponse;
                fromAmino(object: _55.QueryAnnualProvisionsResponseAmino): _55.QueryAnnualProvisionsResponse;
                toAmino(message: _55.QueryAnnualProvisionsResponse): _55.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _55.QueryAnnualProvisionsResponseAminoMsg): _55.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _55.QueryAnnualProvisionsResponse): _55.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _55.QueryAnnualProvisionsResponseProtoMsg): _55.QueryAnnualProvisionsResponse;
                toProto(message: _55.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _55.QueryAnnualProvisionsResponse): _55.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _54.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.Minter;
                fromPartial(object: Partial<_54.Minter>): _54.Minter;
                fromAmino(object: _54.MinterAmino): _54.Minter;
                toAmino(message: _54.Minter): _54.MinterAmino;
                fromAminoMsg(object: _54.MinterAminoMsg): _54.Minter;
                toAminoMsg(message: _54.Minter): _54.MinterAminoMsg;
                fromProtoMsg(message: _54.MinterProtoMsg): _54.Minter;
                toProto(message: _54.Minter): Uint8Array;
                toProtoMsg(message: _54.Minter): _54.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _54.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.Params;
                fromPartial(object: Partial<_54.Params>): _54.Params;
                fromAmino(object: _54.ParamsAmino): _54.Params;
                toAmino(message: _54.Params): _54.ParamsAmino;
                fromAminoMsg(object: _54.ParamsAminoMsg): _54.Params;
                toAminoMsg(message: _54.Params): _54.ParamsAminoMsg;
                fromProtoMsg(message: _54.ParamsProtoMsg): _54.Params;
                toProto(message: _54.Params): Uint8Array;
                toProtoMsg(message: _54.Params): _54.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _53.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.GenesisState;
                fromPartial(object: Partial<_53.GenesisState>): _53.GenesisState;
                fromAmino(object: _53.GenesisStateAmino): _53.GenesisState;
                toAmino(message: _53.GenesisState): _53.GenesisStateAmino;
                fromAminoMsg(object: _53.GenesisStateAminoMsg): _53.GenesisState;
                toAminoMsg(message: _53.GenesisState): _53.GenesisStateAminoMsg;
                fromProtoMsg(message: _53.GenesisStateProtoMsg): _53.GenesisState;
                toProto(message: _53.GenesisState): Uint8Array;
                toProtoMsg(message: _53.GenesisState): _53.GenesisStateProtoMsg;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _224.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _58.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.QueryParamsRequest;
                fromPartial(object: Partial<_58.QueryParamsRequest>): _58.QueryParamsRequest;
                fromAmino(object: _58.QueryParamsRequestAmino): _58.QueryParamsRequest;
                toAmino(message: _58.QueryParamsRequest): _58.QueryParamsRequestAmino;
                fromAminoMsg(object: _58.QueryParamsRequestAminoMsg): _58.QueryParamsRequest;
                toAminoMsg(message: _58.QueryParamsRequest): _58.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryParamsRequestProtoMsg): _58.QueryParamsRequest;
                toProto(message: _58.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryParamsRequest): _58.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _58.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.QueryParamsResponse;
                fromPartial(object: Partial<_58.QueryParamsResponse>): _58.QueryParamsResponse;
                fromAmino(object: _58.QueryParamsResponseAmino): _58.QueryParamsResponse;
                toAmino(message: _58.QueryParamsResponse): _58.QueryParamsResponseAmino;
                fromAminoMsg(object: _58.QueryParamsResponseAminoMsg): _58.QueryParamsResponse;
                toAminoMsg(message: _58.QueryParamsResponse): _58.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryParamsResponseProtoMsg): _58.QueryParamsResponse;
                toProto(message: _58.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryParamsResponse): _58.QueryParamsResponseProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _57.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.ParameterChangeProposal;
                fromPartial(object: Partial<_57.ParameterChangeProposal>): _57.ParameterChangeProposal;
                fromAmino(object: _57.ParameterChangeProposalAmino): _57.ParameterChangeProposal;
                toAmino(message: _57.ParameterChangeProposal): _57.ParameterChangeProposalAmino;
                fromAminoMsg(object: _57.ParameterChangeProposalAminoMsg): _57.ParameterChangeProposal;
                toAminoMsg(message: _57.ParameterChangeProposal): _57.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _57.ParameterChangeProposalProtoMsg): _57.ParameterChangeProposal;
                toProto(message: _57.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _57.ParameterChangeProposal): _57.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _57.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.ParamChange;
                fromPartial(object: Partial<_57.ParamChange>): _57.ParamChange;
                fromAmino(object: _57.ParamChangeAmino): _57.ParamChange;
                toAmino(message: _57.ParamChange): _57.ParamChangeAmino;
                fromAminoMsg(object: _57.ParamChangeAminoMsg): _57.ParamChange;
                toAminoMsg(message: _57.ParamChange): _57.ParamChangeAminoMsg;
                fromProtoMsg(message: _57.ParamChangeProtoMsg): _57.ParamChange;
                toProto(message: _57.ParamChange): Uint8Array;
                toProtoMsg(message: _57.ParamChange): _57.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _236.MsgClientImpl;
            QueryClientImpl: typeof _225.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                signingInfo(request: _60.QuerySigningInfoRequest): Promise<_60.QuerySigningInfoResponse>;
                signingInfos(request?: _60.QuerySigningInfosRequest): Promise<_60.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _62.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _62.MsgUnjail): {
                        typeUrl: string;
                        value: _62.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _62.MsgUnjail): {
                        typeUrl: string;
                        value: _62.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _62.MsgUnjail) => _62.MsgUnjailAmino;
                    fromAmino: (object: _62.MsgUnjailAmino) => _62.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _62.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _62.MsgUnjail;
                fromPartial(object: Partial<_62.MsgUnjail>): _62.MsgUnjail;
                fromAmino(object: _62.MsgUnjailAmino): _62.MsgUnjail;
                toAmino(message: _62.MsgUnjail): _62.MsgUnjailAmino;
                fromAminoMsg(object: _62.MsgUnjailAminoMsg): _62.MsgUnjail;
                toAminoMsg(message: _62.MsgUnjail): _62.MsgUnjailAminoMsg;
                fromProtoMsg(message: _62.MsgUnjailProtoMsg): _62.MsgUnjail;
                toProto(message: _62.MsgUnjail): Uint8Array;
                toProtoMsg(message: _62.MsgUnjail): _62.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _62.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _62.MsgUnjailResponse;
                fromPartial(_: Partial<_62.MsgUnjailResponse>): _62.MsgUnjailResponse;
                fromAmino(_: _62.MsgUnjailResponseAmino): _62.MsgUnjailResponse;
                toAmino(_: _62.MsgUnjailResponse): _62.MsgUnjailResponseAmino;
                fromAminoMsg(object: _62.MsgUnjailResponseAminoMsg): _62.MsgUnjailResponse;
                toAminoMsg(message: _62.MsgUnjailResponse): _62.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _62.MsgUnjailResponseProtoMsg): _62.MsgUnjailResponse;
                toProto(message: _62.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _62.MsgUnjailResponse): _62.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _61.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.ValidatorSigningInfo;
                fromPartial(object: Partial<_61.ValidatorSigningInfo>): _61.ValidatorSigningInfo;
                fromAmino(object: _61.ValidatorSigningInfoAmino): _61.ValidatorSigningInfo;
                toAmino(message: _61.ValidatorSigningInfo): _61.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _61.ValidatorSigningInfoAminoMsg): _61.ValidatorSigningInfo;
                toAminoMsg(message: _61.ValidatorSigningInfo): _61.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _61.ValidatorSigningInfoProtoMsg): _61.ValidatorSigningInfo;
                toProto(message: _61.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _61.ValidatorSigningInfo): _61.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _61.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.Params;
                fromPartial(object: Partial<_61.Params>): _61.Params;
                fromAmino(object: _61.ParamsAmino): _61.Params;
                toAmino(message: _61.Params): _61.ParamsAmino;
                fromAminoMsg(object: _61.ParamsAminoMsg): _61.Params;
                toAminoMsg(message: _61.Params): _61.ParamsAminoMsg;
                fromProtoMsg(message: _61.ParamsProtoMsg): _61.Params;
                toProto(message: _61.Params): Uint8Array;
                toProtoMsg(message: _61.Params): _61.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _60.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.QueryParamsRequest;
                fromPartial(_: Partial<_60.QueryParamsRequest>): _60.QueryParamsRequest;
                fromAmino(_: _60.QueryParamsRequestAmino): _60.QueryParamsRequest;
                toAmino(_: _60.QueryParamsRequest): _60.QueryParamsRequestAmino;
                fromAminoMsg(object: _60.QueryParamsRequestAminoMsg): _60.QueryParamsRequest;
                toAminoMsg(message: _60.QueryParamsRequest): _60.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryParamsRequestProtoMsg): _60.QueryParamsRequest;
                toProto(message: _60.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryParamsRequest): _60.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _60.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.QueryParamsResponse;
                fromPartial(object: Partial<_60.QueryParamsResponse>): _60.QueryParamsResponse;
                fromAmino(object: _60.QueryParamsResponseAmino): _60.QueryParamsResponse;
                toAmino(message: _60.QueryParamsResponse): _60.QueryParamsResponseAmino;
                fromAminoMsg(object: _60.QueryParamsResponseAminoMsg): _60.QueryParamsResponse;
                toAminoMsg(message: _60.QueryParamsResponse): _60.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryParamsResponseProtoMsg): _60.QueryParamsResponse;
                toProto(message: _60.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryParamsResponse): _60.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _60.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.QuerySigningInfoRequest;
                fromPartial(object: Partial<_60.QuerySigningInfoRequest>): _60.QuerySigningInfoRequest;
                fromAmino(object: _60.QuerySigningInfoRequestAmino): _60.QuerySigningInfoRequest;
                toAmino(message: _60.QuerySigningInfoRequest): _60.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _60.QuerySigningInfoRequestAminoMsg): _60.QuerySigningInfoRequest;
                toAminoMsg(message: _60.QuerySigningInfoRequest): _60.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _60.QuerySigningInfoRequestProtoMsg): _60.QuerySigningInfoRequest;
                toProto(message: _60.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _60.QuerySigningInfoRequest): _60.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _60.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.QuerySigningInfoResponse;
                fromPartial(object: Partial<_60.QuerySigningInfoResponse>): _60.QuerySigningInfoResponse;
                fromAmino(object: _60.QuerySigningInfoResponseAmino): _60.QuerySigningInfoResponse;
                toAmino(message: _60.QuerySigningInfoResponse): _60.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _60.QuerySigningInfoResponseAminoMsg): _60.QuerySigningInfoResponse;
                toAminoMsg(message: _60.QuerySigningInfoResponse): _60.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _60.QuerySigningInfoResponseProtoMsg): _60.QuerySigningInfoResponse;
                toProto(message: _60.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _60.QuerySigningInfoResponse): _60.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _60.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.QuerySigningInfosRequest;
                fromPartial(object: Partial<_60.QuerySigningInfosRequest>): _60.QuerySigningInfosRequest;
                fromAmino(object: _60.QuerySigningInfosRequestAmino): _60.QuerySigningInfosRequest;
                toAmino(message: _60.QuerySigningInfosRequest): _60.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _60.QuerySigningInfosRequestAminoMsg): _60.QuerySigningInfosRequest;
                toAminoMsg(message: _60.QuerySigningInfosRequest): _60.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _60.QuerySigningInfosRequestProtoMsg): _60.QuerySigningInfosRequest;
                toProto(message: _60.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _60.QuerySigningInfosRequest): _60.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _60.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.QuerySigningInfosResponse;
                fromPartial(object: Partial<_60.QuerySigningInfosResponse>): _60.QuerySigningInfosResponse;
                fromAmino(object: _60.QuerySigningInfosResponseAmino): _60.QuerySigningInfosResponse;
                toAmino(message: _60.QuerySigningInfosResponse): _60.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _60.QuerySigningInfosResponseAminoMsg): _60.QuerySigningInfosResponse;
                toAminoMsg(message: _60.QuerySigningInfosResponse): _60.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _60.QuerySigningInfosResponseProtoMsg): _60.QuerySigningInfosResponse;
                toProto(message: _60.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _60.QuerySigningInfosResponse): _60.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _59.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.GenesisState;
                fromPartial(object: Partial<_59.GenesisState>): _59.GenesisState;
                fromAmino(object: _59.GenesisStateAmino): _59.GenesisState;
                toAmino(message: _59.GenesisState): _59.GenesisStateAmino;
                fromAminoMsg(object: _59.GenesisStateAminoMsg): _59.GenesisState;
                toAminoMsg(message: _59.GenesisState): _59.GenesisStateAminoMsg;
                fromProtoMsg(message: _59.GenesisStateProtoMsg): _59.GenesisState;
                toProto(message: _59.GenesisState): Uint8Array;
                toProtoMsg(message: _59.GenesisState): _59.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _59.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.SigningInfo;
                fromPartial(object: Partial<_59.SigningInfo>): _59.SigningInfo;
                fromAmino(object: _59.SigningInfoAmino): _59.SigningInfo;
                toAmino(message: _59.SigningInfo): _59.SigningInfoAmino;
                fromAminoMsg(object: _59.SigningInfoAminoMsg): _59.SigningInfo;
                toAminoMsg(message: _59.SigningInfo): _59.SigningInfoAminoMsg;
                fromProtoMsg(message: _59.SigningInfoProtoMsg): _59.SigningInfo;
                toProto(message: _59.SigningInfo): Uint8Array;
                toProtoMsg(message: _59.SigningInfo): _59.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _59.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.ValidatorMissedBlocks;
                fromPartial(object: Partial<_59.ValidatorMissedBlocks>): _59.ValidatorMissedBlocks;
                fromAmino(object: _59.ValidatorMissedBlocksAmino): _59.ValidatorMissedBlocks;
                toAmino(message: _59.ValidatorMissedBlocks): _59.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _59.ValidatorMissedBlocksAminoMsg): _59.ValidatorMissedBlocks;
                toAminoMsg(message: _59.ValidatorMissedBlocks): _59.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _59.ValidatorMissedBlocksProtoMsg): _59.ValidatorMissedBlocks;
                toProto(message: _59.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _59.ValidatorMissedBlocks): _59.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _59.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.MissedBlock;
                fromPartial(object: Partial<_59.MissedBlock>): _59.MissedBlock;
                fromAmino(object: _59.MissedBlockAmino): _59.MissedBlock;
                toAmino(message: _59.MissedBlock): _59.MissedBlockAmino;
                fromAminoMsg(object: _59.MissedBlockAminoMsg): _59.MissedBlock;
                toAminoMsg(message: _59.MissedBlock): _59.MissedBlockAminoMsg;
                fromProtoMsg(message: _59.MissedBlockProtoMsg): _59.MissedBlock;
                toProto(message: _59.MissedBlock): Uint8Array;
                toProtoMsg(message: _59.MissedBlock): _59.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _237.MsgClientImpl;
            QueryClientImpl: typeof _226.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _66.QueryValidatorsRequest): Promise<_66.QueryValidatorsResponse>;
                validator(request: _66.QueryValidatorRequest): Promise<_66.QueryValidatorResponse>;
                validatorDelegations(request: _66.QueryValidatorDelegationsRequest): Promise<_66.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _66.QueryValidatorUnbondingDelegationsRequest): Promise<_66.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _66.QueryDelegationRequest): Promise<_66.QueryDelegationResponse>;
                unbondingDelegation(request: _66.QueryUnbondingDelegationRequest): Promise<_66.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _66.QueryDelegatorDelegationsRequest): Promise<_66.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _66.QueryDelegatorUnbondingDelegationsRequest): Promise<_66.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _66.QueryRedelegationsRequest): Promise<_66.QueryRedelegationsResponse>;
                delegatorValidators(request: _66.QueryDelegatorValidatorsRequest): Promise<_66.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _66.QueryDelegatorValidatorRequest): Promise<_66.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _66.QueryHistoricalInfoRequest): Promise<_66.QueryHistoricalInfoResponse>;
                pool(request?: _66.QueryPoolRequest): Promise<_66.QueryPoolResponse>;
                params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                tokenizeShareRecordById(request: _66.QueryTokenizeShareRecordByIdRequest): Promise<_66.QueryTokenizeShareRecordByIdResponse>;
                tokenizeShareRecordByDenom(request: _66.QueryTokenizeShareRecordByDenomRequest): Promise<_66.QueryTokenizeShareRecordByDenomResponse>;
                tokenizeShareRecordsOwned(request: _66.QueryTokenizeShareRecordsOwnedRequest): Promise<_66.QueryTokenizeShareRecordsOwnedResponse>;
                allTokenizeShareRecords(request?: _66.QueryAllTokenizeShareRecordsRequest): Promise<_66.QueryAllTokenizeShareRecordsResponse>;
                lastTokenizeShareRecordId(request?: _66.QueryLastTokenizeShareRecordIdRequest): Promise<_66.QueryLastTokenizeShareRecordIdResponse>;
                totalTokenizeSharedAssets(request?: _66.QueryTotalTokenizeSharedAssetsRequest): Promise<_66.QueryTotalTokenizeSharedAssetsResponse>;
                totalLiquidStaked(request?: _66.QueryTotalLiquidStaked): Promise<_66.QueryTotalLiquidStakedResponse>;
                tokenizeShareLockInfo(request: _66.QueryTokenizeShareLockInfo): Promise<_66.QueryTokenizeShareLockInfoResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _68.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _68.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _68.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _68.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _68.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unbondValidator(value: _68.MsgUnbondValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _68.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    tokenizeShares(value: _68.MsgTokenizeShares): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redeemTokensForShares(value: _68.MsgRedeemTokensForShares): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    transferTokenizeShareRecord(value: _68.MsgTransferTokenizeShareRecord): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    disableTokenizeShares(value: _68.MsgDisableTokenizeShares): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    enableTokenizeShares(value: _68.MsgEnableTokenizeShares): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    validatorBond(value: _68.MsgValidatorBond): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _68.MsgCreateValidator): {
                        typeUrl: string;
                        value: _68.MsgCreateValidator;
                    };
                    editValidator(value: _68.MsgEditValidator): {
                        typeUrl: string;
                        value: _68.MsgEditValidator;
                    };
                    delegate(value: _68.MsgDelegate): {
                        typeUrl: string;
                        value: _68.MsgDelegate;
                    };
                    beginRedelegate(value: _68.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _68.MsgBeginRedelegate;
                    };
                    undelegate(value: _68.MsgUndelegate): {
                        typeUrl: string;
                        value: _68.MsgUndelegate;
                    };
                    unbondValidator(value: _68.MsgUnbondValidator): {
                        typeUrl: string;
                        value: _68.MsgUnbondValidator;
                    };
                    cancelUnbondingDelegation(value: _68.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _68.MsgCancelUnbondingDelegation;
                    };
                    tokenizeShares(value: _68.MsgTokenizeShares): {
                        typeUrl: string;
                        value: _68.MsgTokenizeShares;
                    };
                    redeemTokensForShares(value: _68.MsgRedeemTokensForShares): {
                        typeUrl: string;
                        value: _68.MsgRedeemTokensForShares;
                    };
                    transferTokenizeShareRecord(value: _68.MsgTransferTokenizeShareRecord): {
                        typeUrl: string;
                        value: _68.MsgTransferTokenizeShareRecord;
                    };
                    disableTokenizeShares(value: _68.MsgDisableTokenizeShares): {
                        typeUrl: string;
                        value: _68.MsgDisableTokenizeShares;
                    };
                    enableTokenizeShares(value: _68.MsgEnableTokenizeShares): {
                        typeUrl: string;
                        value: _68.MsgEnableTokenizeShares;
                    };
                    validatorBond(value: _68.MsgValidatorBond): {
                        typeUrl: string;
                        value: _68.MsgValidatorBond;
                    };
                };
                fromPartial: {
                    createValidator(value: _68.MsgCreateValidator): {
                        typeUrl: string;
                        value: _68.MsgCreateValidator;
                    };
                    editValidator(value: _68.MsgEditValidator): {
                        typeUrl: string;
                        value: _68.MsgEditValidator;
                    };
                    delegate(value: _68.MsgDelegate): {
                        typeUrl: string;
                        value: _68.MsgDelegate;
                    };
                    beginRedelegate(value: _68.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _68.MsgBeginRedelegate;
                    };
                    undelegate(value: _68.MsgUndelegate): {
                        typeUrl: string;
                        value: _68.MsgUndelegate;
                    };
                    unbondValidator(value: _68.MsgUnbondValidator): {
                        typeUrl: string;
                        value: _68.MsgUnbondValidator;
                    };
                    cancelUnbondingDelegation(value: _68.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _68.MsgCancelUnbondingDelegation;
                    };
                    tokenizeShares(value: _68.MsgTokenizeShares): {
                        typeUrl: string;
                        value: _68.MsgTokenizeShares;
                    };
                    redeemTokensForShares(value: _68.MsgRedeemTokensForShares): {
                        typeUrl: string;
                        value: _68.MsgRedeemTokensForShares;
                    };
                    transferTokenizeShareRecord(value: _68.MsgTransferTokenizeShareRecord): {
                        typeUrl: string;
                        value: _68.MsgTransferTokenizeShareRecord;
                    };
                    disableTokenizeShares(value: _68.MsgDisableTokenizeShares): {
                        typeUrl: string;
                        value: _68.MsgDisableTokenizeShares;
                    };
                    enableTokenizeShares(value: _68.MsgEnableTokenizeShares): {
                        typeUrl: string;
                        value: _68.MsgEnableTokenizeShares;
                    };
                    validatorBond(value: _68.MsgValidatorBond): {
                        typeUrl: string;
                        value: _68.MsgValidatorBond;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _68.MsgCreateValidator) => _68.MsgCreateValidatorAmino;
                    fromAmino: (object: _68.MsgCreateValidatorAmino) => _68.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _68.MsgEditValidator) => _68.MsgEditValidatorAmino;
                    fromAmino: (object: _68.MsgEditValidatorAmino) => _68.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _68.MsgDelegate) => _68.MsgDelegateAmino;
                    fromAmino: (object: _68.MsgDelegateAmino) => _68.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _68.MsgBeginRedelegate) => _68.MsgBeginRedelegateAmino;
                    fromAmino: (object: _68.MsgBeginRedelegateAmino) => _68.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _68.MsgUndelegate) => _68.MsgUndelegateAmino;
                    fromAmino: (object: _68.MsgUndelegateAmino) => _68.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgUnbondValidator": {
                    aminoType: string;
                    toAmino: (message: _68.MsgUnbondValidator) => _68.MsgUnbondValidatorAmino;
                    fromAmino: (object: _68.MsgUnbondValidatorAmino) => _68.MsgUnbondValidator;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _68.MsgCancelUnbondingDelegation) => _68.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _68.MsgCancelUnbondingDelegationAmino) => _68.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgTokenizeShares": {
                    aminoType: string;
                    toAmino: (message: _68.MsgTokenizeShares) => _68.MsgTokenizeSharesAmino;
                    fromAmino: (object: _68.MsgTokenizeSharesAmino) => _68.MsgTokenizeShares;
                };
                "/cosmos.staking.v1beta1.MsgRedeemTokensForShares": {
                    aminoType: string;
                    toAmino: (message: _68.MsgRedeemTokensForShares) => _68.MsgRedeemTokensForSharesAmino;
                    fromAmino: (object: _68.MsgRedeemTokensForSharesAmino) => _68.MsgRedeemTokensForShares;
                };
                "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord": {
                    aminoType: string;
                    toAmino: (message: _68.MsgTransferTokenizeShareRecord) => _68.MsgTransferTokenizeShareRecordAmino;
                    fromAmino: (object: _68.MsgTransferTokenizeShareRecordAmino) => _68.MsgTransferTokenizeShareRecord;
                };
                "/cosmos.staking.v1beta1.MsgDisableTokenizeShares": {
                    aminoType: string;
                    toAmino: (message: _68.MsgDisableTokenizeShares) => _68.MsgDisableTokenizeSharesAmino;
                    fromAmino: (object: _68.MsgDisableTokenizeSharesAmino) => _68.MsgDisableTokenizeShares;
                };
                "/cosmos.staking.v1beta1.MsgEnableTokenizeShares": {
                    aminoType: string;
                    toAmino: (message: _68.MsgEnableTokenizeShares) => _68.MsgEnableTokenizeSharesAmino;
                    fromAmino: (object: _68.MsgEnableTokenizeSharesAmino) => _68.MsgEnableTokenizeShares;
                };
                "/cosmos.staking.v1beta1.MsgValidatorBond": {
                    aminoType: string;
                    toAmino: (message: _68.MsgValidatorBond) => _68.MsgValidatorBondAmino;
                    fromAmino: (object: _68.MsgValidatorBondAmino) => _68.MsgValidatorBond;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _68.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgCreateValidator;
                fromPartial(object: Partial<_68.MsgCreateValidator>): _68.MsgCreateValidator;
                fromAmino(object: _68.MsgCreateValidatorAmino): _68.MsgCreateValidator;
                toAmino(message: _68.MsgCreateValidator): _68.MsgCreateValidatorAmino;
                fromAminoMsg(object: _68.MsgCreateValidatorAminoMsg): _68.MsgCreateValidator;
                toAminoMsg(message: _68.MsgCreateValidator): _68.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _68.MsgCreateValidatorProtoMsg): _68.MsgCreateValidator;
                toProto(message: _68.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _68.MsgCreateValidator): _68.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _68.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_68.MsgCreateValidatorResponse>): _68.MsgCreateValidatorResponse;
                fromAmino(_: _68.MsgCreateValidatorResponseAmino): _68.MsgCreateValidatorResponse;
                toAmino(_: _68.MsgCreateValidatorResponse): _68.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _68.MsgCreateValidatorResponseAminoMsg): _68.MsgCreateValidatorResponse;
                toAminoMsg(message: _68.MsgCreateValidatorResponse): _68.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _68.MsgCreateValidatorResponseProtoMsg): _68.MsgCreateValidatorResponse;
                toProto(message: _68.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _68.MsgCreateValidatorResponse): _68.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _68.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgEditValidator;
                fromPartial(object: Partial<_68.MsgEditValidator>): _68.MsgEditValidator;
                fromAmino(object: _68.MsgEditValidatorAmino): _68.MsgEditValidator;
                toAmino(message: _68.MsgEditValidator): _68.MsgEditValidatorAmino;
                fromAminoMsg(object: _68.MsgEditValidatorAminoMsg): _68.MsgEditValidator;
                toAminoMsg(message: _68.MsgEditValidator): _68.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _68.MsgEditValidatorProtoMsg): _68.MsgEditValidator;
                toProto(message: _68.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _68.MsgEditValidator): _68.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _68.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgEditValidatorResponse;
                fromPartial(_: Partial<_68.MsgEditValidatorResponse>): _68.MsgEditValidatorResponse;
                fromAmino(_: _68.MsgEditValidatorResponseAmino): _68.MsgEditValidatorResponse;
                toAmino(_: _68.MsgEditValidatorResponse): _68.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _68.MsgEditValidatorResponseAminoMsg): _68.MsgEditValidatorResponse;
                toAminoMsg(message: _68.MsgEditValidatorResponse): _68.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _68.MsgEditValidatorResponseProtoMsg): _68.MsgEditValidatorResponse;
                toProto(message: _68.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _68.MsgEditValidatorResponse): _68.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _68.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgDelegate;
                fromPartial(object: Partial<_68.MsgDelegate>): _68.MsgDelegate;
                fromAmino(object: _68.MsgDelegateAmino): _68.MsgDelegate;
                toAmino(message: _68.MsgDelegate): _68.MsgDelegateAmino;
                fromAminoMsg(object: _68.MsgDelegateAminoMsg): _68.MsgDelegate;
                toAminoMsg(message: _68.MsgDelegate): _68.MsgDelegateAminoMsg;
                fromProtoMsg(message: _68.MsgDelegateProtoMsg): _68.MsgDelegate;
                toProto(message: _68.MsgDelegate): Uint8Array;
                toProtoMsg(message: _68.MsgDelegate): _68.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _68.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgDelegateResponse;
                fromPartial(_: Partial<_68.MsgDelegateResponse>): _68.MsgDelegateResponse;
                fromAmino(_: _68.MsgDelegateResponseAmino): _68.MsgDelegateResponse;
                toAmino(_: _68.MsgDelegateResponse): _68.MsgDelegateResponseAmino;
                fromAminoMsg(object: _68.MsgDelegateResponseAminoMsg): _68.MsgDelegateResponse;
                toAminoMsg(message: _68.MsgDelegateResponse): _68.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _68.MsgDelegateResponseProtoMsg): _68.MsgDelegateResponse;
                toProto(message: _68.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _68.MsgDelegateResponse): _68.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _68.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgBeginRedelegate;
                fromPartial(object: Partial<_68.MsgBeginRedelegate>): _68.MsgBeginRedelegate;
                fromAmino(object: _68.MsgBeginRedelegateAmino): _68.MsgBeginRedelegate;
                toAmino(message: _68.MsgBeginRedelegate): _68.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _68.MsgBeginRedelegateAminoMsg): _68.MsgBeginRedelegate;
                toAminoMsg(message: _68.MsgBeginRedelegate): _68.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _68.MsgBeginRedelegateProtoMsg): _68.MsgBeginRedelegate;
                toProto(message: _68.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _68.MsgBeginRedelegate): _68.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _68.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_68.MsgBeginRedelegateResponse>): _68.MsgBeginRedelegateResponse;
                fromAmino(object: _68.MsgBeginRedelegateResponseAmino): _68.MsgBeginRedelegateResponse;
                toAmino(message: _68.MsgBeginRedelegateResponse): _68.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _68.MsgBeginRedelegateResponseAminoMsg): _68.MsgBeginRedelegateResponse;
                toAminoMsg(message: _68.MsgBeginRedelegateResponse): _68.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _68.MsgBeginRedelegateResponseProtoMsg): _68.MsgBeginRedelegateResponse;
                toProto(message: _68.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _68.MsgBeginRedelegateResponse): _68.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _68.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgUndelegate;
                fromPartial(object: Partial<_68.MsgUndelegate>): _68.MsgUndelegate;
                fromAmino(object: _68.MsgUndelegateAmino): _68.MsgUndelegate;
                toAmino(message: _68.MsgUndelegate): _68.MsgUndelegateAmino;
                fromAminoMsg(object: _68.MsgUndelegateAminoMsg): _68.MsgUndelegate;
                toAminoMsg(message: _68.MsgUndelegate): _68.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _68.MsgUndelegateProtoMsg): _68.MsgUndelegate;
                toProto(message: _68.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _68.MsgUndelegate): _68.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _68.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgUndelegateResponse;
                fromPartial(object: Partial<_68.MsgUndelegateResponse>): _68.MsgUndelegateResponse;
                fromAmino(object: _68.MsgUndelegateResponseAmino): _68.MsgUndelegateResponse;
                toAmino(message: _68.MsgUndelegateResponse): _68.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _68.MsgUndelegateResponseAminoMsg): _68.MsgUndelegateResponse;
                toAminoMsg(message: _68.MsgUndelegateResponse): _68.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _68.MsgUndelegateResponseProtoMsg): _68.MsgUndelegateResponse;
                toProto(message: _68.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _68.MsgUndelegateResponse): _68.MsgUndelegateResponseProtoMsg;
            };
            MsgUnbondValidator: {
                typeUrl: string;
                encode(message: _68.MsgUnbondValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgUnbondValidator;
                fromPartial(object: Partial<_68.MsgUnbondValidator>): _68.MsgUnbondValidator;
                fromAmino(object: _68.MsgUnbondValidatorAmino): _68.MsgUnbondValidator;
                toAmino(message: _68.MsgUnbondValidator): _68.MsgUnbondValidatorAmino;
                fromAminoMsg(object: _68.MsgUnbondValidatorAminoMsg): _68.MsgUnbondValidator;
                toAminoMsg(message: _68.MsgUnbondValidator): _68.MsgUnbondValidatorAminoMsg;
                fromProtoMsg(message: _68.MsgUnbondValidatorProtoMsg): _68.MsgUnbondValidator;
                toProto(message: _68.MsgUnbondValidator): Uint8Array;
                toProtoMsg(message: _68.MsgUnbondValidator): _68.MsgUnbondValidatorProtoMsg;
            };
            MsgUnbondValidatorResponse: {
                typeUrl: string;
                encode(_: _68.MsgUnbondValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgUnbondValidatorResponse;
                fromPartial(_: Partial<_68.MsgUnbondValidatorResponse>): _68.MsgUnbondValidatorResponse;
                fromAmino(_: _68.MsgUnbondValidatorResponseAmino): _68.MsgUnbondValidatorResponse;
                toAmino(_: _68.MsgUnbondValidatorResponse): _68.MsgUnbondValidatorResponseAmino;
                fromAminoMsg(object: _68.MsgUnbondValidatorResponseAminoMsg): _68.MsgUnbondValidatorResponse;
                toAminoMsg(message: _68.MsgUnbondValidatorResponse): _68.MsgUnbondValidatorResponseAminoMsg;
                fromProtoMsg(message: _68.MsgUnbondValidatorResponseProtoMsg): _68.MsgUnbondValidatorResponse;
                toProto(message: _68.MsgUnbondValidatorResponse): Uint8Array;
                toProtoMsg(message: _68.MsgUnbondValidatorResponse): _68.MsgUnbondValidatorResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _68.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_68.MsgCancelUnbondingDelegation>): _68.MsgCancelUnbondingDelegation;
                fromAmino(object: _68.MsgCancelUnbondingDelegationAmino): _68.MsgCancelUnbondingDelegation;
                toAmino(message: _68.MsgCancelUnbondingDelegation): _68.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _68.MsgCancelUnbondingDelegationAminoMsg): _68.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _68.MsgCancelUnbondingDelegation): _68.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _68.MsgCancelUnbondingDelegationProtoMsg): _68.MsgCancelUnbondingDelegation;
                toProto(message: _68.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _68.MsgCancelUnbondingDelegation): _68.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _68.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_68.MsgCancelUnbondingDelegationResponse>): _68.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _68.MsgCancelUnbondingDelegationResponseAmino): _68.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _68.MsgCancelUnbondingDelegationResponse): _68.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _68.MsgCancelUnbondingDelegationResponseAminoMsg): _68.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _68.MsgCancelUnbondingDelegationResponse): _68.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _68.MsgCancelUnbondingDelegationResponseProtoMsg): _68.MsgCancelUnbondingDelegationResponse;
                toProto(message: _68.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _68.MsgCancelUnbondingDelegationResponse): _68.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            MsgTokenizeShares: {
                typeUrl: string;
                encode(message: _68.MsgTokenizeShares, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgTokenizeShares;
                fromPartial(object: Partial<_68.MsgTokenizeShares>): _68.MsgTokenizeShares;
                fromAmino(object: _68.MsgTokenizeSharesAmino): _68.MsgTokenizeShares;
                toAmino(message: _68.MsgTokenizeShares): _68.MsgTokenizeSharesAmino;
                fromAminoMsg(object: _68.MsgTokenizeSharesAminoMsg): _68.MsgTokenizeShares;
                toAminoMsg(message: _68.MsgTokenizeShares): _68.MsgTokenizeSharesAminoMsg;
                fromProtoMsg(message: _68.MsgTokenizeSharesProtoMsg): _68.MsgTokenizeShares;
                toProto(message: _68.MsgTokenizeShares): Uint8Array;
                toProtoMsg(message: _68.MsgTokenizeShares): _68.MsgTokenizeSharesProtoMsg;
            };
            MsgTokenizeSharesResponse: {
                typeUrl: string;
                encode(message: _68.MsgTokenizeSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgTokenizeSharesResponse;
                fromPartial(object: Partial<_68.MsgTokenizeSharesResponse>): _68.MsgTokenizeSharesResponse;
                fromAmino(object: _68.MsgTokenizeSharesResponseAmino): _68.MsgTokenizeSharesResponse;
                toAmino(message: _68.MsgTokenizeSharesResponse): _68.MsgTokenizeSharesResponseAmino;
                fromAminoMsg(object: _68.MsgTokenizeSharesResponseAminoMsg): _68.MsgTokenizeSharesResponse;
                toAminoMsg(message: _68.MsgTokenizeSharesResponse): _68.MsgTokenizeSharesResponseAminoMsg;
                fromProtoMsg(message: _68.MsgTokenizeSharesResponseProtoMsg): _68.MsgTokenizeSharesResponse;
                toProto(message: _68.MsgTokenizeSharesResponse): Uint8Array;
                toProtoMsg(message: _68.MsgTokenizeSharesResponse): _68.MsgTokenizeSharesResponseProtoMsg;
            };
            MsgRedeemTokensForShares: {
                typeUrl: string;
                encode(message: _68.MsgRedeemTokensForShares, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgRedeemTokensForShares;
                fromPartial(object: Partial<_68.MsgRedeemTokensForShares>): _68.MsgRedeemTokensForShares;
                fromAmino(object: _68.MsgRedeemTokensForSharesAmino): _68.MsgRedeemTokensForShares;
                toAmino(message: _68.MsgRedeemTokensForShares): _68.MsgRedeemTokensForSharesAmino;
                fromAminoMsg(object: _68.MsgRedeemTokensForSharesAminoMsg): _68.MsgRedeemTokensForShares;
                toAminoMsg(message: _68.MsgRedeemTokensForShares): _68.MsgRedeemTokensForSharesAminoMsg;
                fromProtoMsg(message: _68.MsgRedeemTokensForSharesProtoMsg): _68.MsgRedeemTokensForShares;
                toProto(message: _68.MsgRedeemTokensForShares): Uint8Array;
                toProtoMsg(message: _68.MsgRedeemTokensForShares): _68.MsgRedeemTokensForSharesProtoMsg;
            };
            MsgRedeemTokensForSharesResponse: {
                typeUrl: string;
                encode(message: _68.MsgRedeemTokensForSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgRedeemTokensForSharesResponse;
                fromPartial(object: Partial<_68.MsgRedeemTokensForSharesResponse>): _68.MsgRedeemTokensForSharesResponse;
                fromAmino(object: _68.MsgRedeemTokensForSharesResponseAmino): _68.MsgRedeemTokensForSharesResponse;
                toAmino(message: _68.MsgRedeemTokensForSharesResponse): _68.MsgRedeemTokensForSharesResponseAmino;
                fromAminoMsg(object: _68.MsgRedeemTokensForSharesResponseAminoMsg): _68.MsgRedeemTokensForSharesResponse;
                toAminoMsg(message: _68.MsgRedeemTokensForSharesResponse): _68.MsgRedeemTokensForSharesResponseAminoMsg;
                fromProtoMsg(message: _68.MsgRedeemTokensForSharesResponseProtoMsg): _68.MsgRedeemTokensForSharesResponse;
                toProto(message: _68.MsgRedeemTokensForSharesResponse): Uint8Array;
                toProtoMsg(message: _68.MsgRedeemTokensForSharesResponse): _68.MsgRedeemTokensForSharesResponseProtoMsg;
            };
            MsgTransferTokenizeShareRecord: {
                typeUrl: string;
                encode(message: _68.MsgTransferTokenizeShareRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgTransferTokenizeShareRecord;
                fromPartial(object: Partial<_68.MsgTransferTokenizeShareRecord>): _68.MsgTransferTokenizeShareRecord;
                fromAmino(object: _68.MsgTransferTokenizeShareRecordAmino): _68.MsgTransferTokenizeShareRecord;
                toAmino(message: _68.MsgTransferTokenizeShareRecord): _68.MsgTransferTokenizeShareRecordAmino;
                fromAminoMsg(object: _68.MsgTransferTokenizeShareRecordAminoMsg): _68.MsgTransferTokenizeShareRecord;
                toAminoMsg(message: _68.MsgTransferTokenizeShareRecord): _68.MsgTransferTokenizeShareRecordAminoMsg;
                fromProtoMsg(message: _68.MsgTransferTokenizeShareRecordProtoMsg): _68.MsgTransferTokenizeShareRecord;
                toProto(message: _68.MsgTransferTokenizeShareRecord): Uint8Array;
                toProtoMsg(message: _68.MsgTransferTokenizeShareRecord): _68.MsgTransferTokenizeShareRecordProtoMsg;
            };
            MsgTransferTokenizeShareRecordResponse: {
                typeUrl: string;
                encode(_: _68.MsgTransferTokenizeShareRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgTransferTokenizeShareRecordResponse;
                fromPartial(_: Partial<_68.MsgTransferTokenizeShareRecordResponse>): _68.MsgTransferTokenizeShareRecordResponse;
                fromAmino(_: _68.MsgTransferTokenizeShareRecordResponseAmino): _68.MsgTransferTokenizeShareRecordResponse;
                toAmino(_: _68.MsgTransferTokenizeShareRecordResponse): _68.MsgTransferTokenizeShareRecordResponseAmino;
                fromAminoMsg(object: _68.MsgTransferTokenizeShareRecordResponseAminoMsg): _68.MsgTransferTokenizeShareRecordResponse;
                toAminoMsg(message: _68.MsgTransferTokenizeShareRecordResponse): _68.MsgTransferTokenizeShareRecordResponseAminoMsg;
                fromProtoMsg(message: _68.MsgTransferTokenizeShareRecordResponseProtoMsg): _68.MsgTransferTokenizeShareRecordResponse;
                toProto(message: _68.MsgTransferTokenizeShareRecordResponse): Uint8Array;
                toProtoMsg(message: _68.MsgTransferTokenizeShareRecordResponse): _68.MsgTransferTokenizeShareRecordResponseProtoMsg;
            };
            MsgDisableTokenizeShares: {
                typeUrl: string;
                encode(message: _68.MsgDisableTokenizeShares, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgDisableTokenizeShares;
                fromPartial(object: Partial<_68.MsgDisableTokenizeShares>): _68.MsgDisableTokenizeShares;
                fromAmino(object: _68.MsgDisableTokenizeSharesAmino): _68.MsgDisableTokenizeShares;
                toAmino(message: _68.MsgDisableTokenizeShares): _68.MsgDisableTokenizeSharesAmino;
                fromAminoMsg(object: _68.MsgDisableTokenizeSharesAminoMsg): _68.MsgDisableTokenizeShares;
                toAminoMsg(message: _68.MsgDisableTokenizeShares): _68.MsgDisableTokenizeSharesAminoMsg;
                fromProtoMsg(message: _68.MsgDisableTokenizeSharesProtoMsg): _68.MsgDisableTokenizeShares;
                toProto(message: _68.MsgDisableTokenizeShares): Uint8Array;
                toProtoMsg(message: _68.MsgDisableTokenizeShares): _68.MsgDisableTokenizeSharesProtoMsg;
            };
            MsgDisableTokenizeSharesResponse: {
                typeUrl: string;
                encode(_: _68.MsgDisableTokenizeSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgDisableTokenizeSharesResponse;
                fromPartial(_: Partial<_68.MsgDisableTokenizeSharesResponse>): _68.MsgDisableTokenizeSharesResponse;
                fromAmino(_: _68.MsgDisableTokenizeSharesResponseAmino): _68.MsgDisableTokenizeSharesResponse;
                toAmino(_: _68.MsgDisableTokenizeSharesResponse): _68.MsgDisableTokenizeSharesResponseAmino;
                fromAminoMsg(object: _68.MsgDisableTokenizeSharesResponseAminoMsg): _68.MsgDisableTokenizeSharesResponse;
                toAminoMsg(message: _68.MsgDisableTokenizeSharesResponse): _68.MsgDisableTokenizeSharesResponseAminoMsg;
                fromProtoMsg(message: _68.MsgDisableTokenizeSharesResponseProtoMsg): _68.MsgDisableTokenizeSharesResponse;
                toProto(message: _68.MsgDisableTokenizeSharesResponse): Uint8Array;
                toProtoMsg(message: _68.MsgDisableTokenizeSharesResponse): _68.MsgDisableTokenizeSharesResponseProtoMsg;
            };
            MsgEnableTokenizeShares: {
                typeUrl: string;
                encode(message: _68.MsgEnableTokenizeShares, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgEnableTokenizeShares;
                fromPartial(object: Partial<_68.MsgEnableTokenizeShares>): _68.MsgEnableTokenizeShares;
                fromAmino(object: _68.MsgEnableTokenizeSharesAmino): _68.MsgEnableTokenizeShares;
                toAmino(message: _68.MsgEnableTokenizeShares): _68.MsgEnableTokenizeSharesAmino;
                fromAminoMsg(object: _68.MsgEnableTokenizeSharesAminoMsg): _68.MsgEnableTokenizeShares;
                toAminoMsg(message: _68.MsgEnableTokenizeShares): _68.MsgEnableTokenizeSharesAminoMsg;
                fromProtoMsg(message: _68.MsgEnableTokenizeSharesProtoMsg): _68.MsgEnableTokenizeShares;
                toProto(message: _68.MsgEnableTokenizeShares): Uint8Array;
                toProtoMsg(message: _68.MsgEnableTokenizeShares): _68.MsgEnableTokenizeSharesProtoMsg;
            };
            MsgEnableTokenizeSharesResponse: {
                typeUrl: string;
                encode(message: _68.MsgEnableTokenizeSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgEnableTokenizeSharesResponse;
                fromPartial(object: Partial<_68.MsgEnableTokenizeSharesResponse>): _68.MsgEnableTokenizeSharesResponse;
                fromAmino(object: _68.MsgEnableTokenizeSharesResponseAmino): _68.MsgEnableTokenizeSharesResponse;
                toAmino(message: _68.MsgEnableTokenizeSharesResponse): _68.MsgEnableTokenizeSharesResponseAmino;
                fromAminoMsg(object: _68.MsgEnableTokenizeSharesResponseAminoMsg): _68.MsgEnableTokenizeSharesResponse;
                toAminoMsg(message: _68.MsgEnableTokenizeSharesResponse): _68.MsgEnableTokenizeSharesResponseAminoMsg;
                fromProtoMsg(message: _68.MsgEnableTokenizeSharesResponseProtoMsg): _68.MsgEnableTokenizeSharesResponse;
                toProto(message: _68.MsgEnableTokenizeSharesResponse): Uint8Array;
                toProtoMsg(message: _68.MsgEnableTokenizeSharesResponse): _68.MsgEnableTokenizeSharesResponseProtoMsg;
            };
            MsgValidatorBond: {
                typeUrl: string;
                encode(message: _68.MsgValidatorBond, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgValidatorBond;
                fromPartial(object: Partial<_68.MsgValidatorBond>): _68.MsgValidatorBond;
                fromAmino(object: _68.MsgValidatorBondAmino): _68.MsgValidatorBond;
                toAmino(message: _68.MsgValidatorBond): _68.MsgValidatorBondAmino;
                fromAminoMsg(object: _68.MsgValidatorBondAminoMsg): _68.MsgValidatorBond;
                toAminoMsg(message: _68.MsgValidatorBond): _68.MsgValidatorBondAminoMsg;
                fromProtoMsg(message: _68.MsgValidatorBondProtoMsg): _68.MsgValidatorBond;
                toProto(message: _68.MsgValidatorBond): Uint8Array;
                toProtoMsg(message: _68.MsgValidatorBond): _68.MsgValidatorBondProtoMsg;
            };
            MsgValidatorBondResponse: {
                typeUrl: string;
                encode(_: _68.MsgValidatorBondResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgValidatorBondResponse;
                fromPartial(_: Partial<_68.MsgValidatorBondResponse>): _68.MsgValidatorBondResponse;
                fromAmino(_: _68.MsgValidatorBondResponseAmino): _68.MsgValidatorBondResponse;
                toAmino(_: _68.MsgValidatorBondResponse): _68.MsgValidatorBondResponseAmino;
                fromAminoMsg(object: _68.MsgValidatorBondResponseAminoMsg): _68.MsgValidatorBondResponse;
                toAminoMsg(message: _68.MsgValidatorBondResponse): _68.MsgValidatorBondResponseAminoMsg;
                fromProtoMsg(message: _68.MsgValidatorBondResponseProtoMsg): _68.MsgValidatorBondResponse;
                toProto(message: _68.MsgValidatorBondResponse): Uint8Array;
                toProtoMsg(message: _68.MsgValidatorBondResponse): _68.MsgValidatorBondResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _67.BondStatus;
            bondStatusToJSON(object: _67.BondStatus): string;
            infractionTypeFromJSON(object: any): _67.InfractionType;
            infractionTypeToJSON(object: _67.InfractionType): string;
            tokenizeShareLockStatusFromJSON(object: any): _67.TokenizeShareLockStatus;
            tokenizeShareLockStatusToJSON(object: _67.TokenizeShareLockStatus): string;
            BondStatus: typeof _67.BondStatus;
            BondStatusSDKType: typeof _67.BondStatus;
            BondStatusAmino: typeof _67.BondStatus;
            InfractionType: typeof _67.InfractionType;
            InfractionTypeSDKType: typeof _67.InfractionType;
            InfractionTypeAmino: typeof _67.InfractionType;
            TokenizeShareLockStatus: typeof _67.TokenizeShareLockStatus;
            TokenizeShareLockStatusSDKType: typeof _67.TokenizeShareLockStatus;
            TokenizeShareLockStatusAmino: typeof _67.TokenizeShareLockStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _67.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.HistoricalInfo;
                fromPartial(object: Partial<_67.HistoricalInfo>): _67.HistoricalInfo;
                fromAmino(object: _67.HistoricalInfoAmino): _67.HistoricalInfo;
                toAmino(message: _67.HistoricalInfo): _67.HistoricalInfoAmino;
                fromAminoMsg(object: _67.HistoricalInfoAminoMsg): _67.HistoricalInfo;
                toAminoMsg(message: _67.HistoricalInfo): _67.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _67.HistoricalInfoProtoMsg): _67.HistoricalInfo;
                toProto(message: _67.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _67.HistoricalInfo): _67.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _67.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.CommissionRates;
                fromPartial(object: Partial<_67.CommissionRates>): _67.CommissionRates;
                fromAmino(object: _67.CommissionRatesAmino): _67.CommissionRates;
                toAmino(message: _67.CommissionRates): _67.CommissionRatesAmino;
                fromAminoMsg(object: _67.CommissionRatesAminoMsg): _67.CommissionRates;
                toAminoMsg(message: _67.CommissionRates): _67.CommissionRatesAminoMsg;
                fromProtoMsg(message: _67.CommissionRatesProtoMsg): _67.CommissionRates;
                toProto(message: _67.CommissionRates): Uint8Array;
                toProtoMsg(message: _67.CommissionRates): _67.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _67.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.Commission;
                fromPartial(object: Partial<_67.Commission>): _67.Commission;
                fromAmino(object: _67.CommissionAmino): _67.Commission;
                toAmino(message: _67.Commission): _67.CommissionAmino;
                fromAminoMsg(object: _67.CommissionAminoMsg): _67.Commission;
                toAminoMsg(message: _67.Commission): _67.CommissionAminoMsg;
                fromProtoMsg(message: _67.CommissionProtoMsg): _67.Commission;
                toProto(message: _67.Commission): Uint8Array;
                toProtoMsg(message: _67.Commission): _67.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _67.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.Description;
                fromPartial(object: Partial<_67.Description>): _67.Description;
                fromAmino(object: _67.DescriptionAmino): _67.Description;
                toAmino(message: _67.Description): _67.DescriptionAmino;
                fromAminoMsg(object: _67.DescriptionAminoMsg): _67.Description;
                toAminoMsg(message: _67.Description): _67.DescriptionAminoMsg;
                fromProtoMsg(message: _67.DescriptionProtoMsg): _67.Description;
                toProto(message: _67.Description): Uint8Array;
                toProtoMsg(message: _67.Description): _67.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _67.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.Validator;
                fromPartial(object: Partial<_67.Validator>): _67.Validator;
                fromAmino(object: _67.ValidatorAmino): _67.Validator;
                toAmino(message: _67.Validator): _67.ValidatorAmino;
                fromAminoMsg(object: _67.ValidatorAminoMsg): _67.Validator;
                toAminoMsg(message: _67.Validator): _67.ValidatorAminoMsg;
                fromProtoMsg(message: _67.ValidatorProtoMsg): _67.Validator;
                toProto(message: _67.Validator): Uint8Array;
                toProtoMsg(message: _67.Validator): _67.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _67.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.ValAddresses;
                fromPartial(object: Partial<_67.ValAddresses>): _67.ValAddresses;
                fromAmino(object: _67.ValAddressesAmino): _67.ValAddresses;
                toAmino(message: _67.ValAddresses): _67.ValAddressesAmino;
                fromAminoMsg(object: _67.ValAddressesAminoMsg): _67.ValAddresses;
                toAminoMsg(message: _67.ValAddresses): _67.ValAddressesAminoMsg;
                fromProtoMsg(message: _67.ValAddressesProtoMsg): _67.ValAddresses;
                toProto(message: _67.ValAddresses): Uint8Array;
                toProtoMsg(message: _67.ValAddresses): _67.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _67.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.DVPair;
                fromPartial(object: Partial<_67.DVPair>): _67.DVPair;
                fromAmino(object: _67.DVPairAmino): _67.DVPair;
                toAmino(message: _67.DVPair): _67.DVPairAmino;
                fromAminoMsg(object: _67.DVPairAminoMsg): _67.DVPair;
                toAminoMsg(message: _67.DVPair): _67.DVPairAminoMsg;
                fromProtoMsg(message: _67.DVPairProtoMsg): _67.DVPair;
                toProto(message: _67.DVPair): Uint8Array;
                toProtoMsg(message: _67.DVPair): _67.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _67.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.DVPairs;
                fromPartial(object: Partial<_67.DVPairs>): _67.DVPairs;
                fromAmino(object: _67.DVPairsAmino): _67.DVPairs;
                toAmino(message: _67.DVPairs): _67.DVPairsAmino;
                fromAminoMsg(object: _67.DVPairsAminoMsg): _67.DVPairs;
                toAminoMsg(message: _67.DVPairs): _67.DVPairsAminoMsg;
                fromProtoMsg(message: _67.DVPairsProtoMsg): _67.DVPairs;
                toProto(message: _67.DVPairs): Uint8Array;
                toProtoMsg(message: _67.DVPairs): _67.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _67.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.DVVTriplet;
                fromPartial(object: Partial<_67.DVVTriplet>): _67.DVVTriplet;
                fromAmino(object: _67.DVVTripletAmino): _67.DVVTriplet;
                toAmino(message: _67.DVVTriplet): _67.DVVTripletAmino;
                fromAminoMsg(object: _67.DVVTripletAminoMsg): _67.DVVTriplet;
                toAminoMsg(message: _67.DVVTriplet): _67.DVVTripletAminoMsg;
                fromProtoMsg(message: _67.DVVTripletProtoMsg): _67.DVVTriplet;
                toProto(message: _67.DVVTriplet): Uint8Array;
                toProtoMsg(message: _67.DVVTriplet): _67.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _67.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.DVVTriplets;
                fromPartial(object: Partial<_67.DVVTriplets>): _67.DVVTriplets;
                fromAmino(object: _67.DVVTripletsAmino): _67.DVVTriplets;
                toAmino(message: _67.DVVTriplets): _67.DVVTripletsAmino;
                fromAminoMsg(object: _67.DVVTripletsAminoMsg): _67.DVVTriplets;
                toAminoMsg(message: _67.DVVTriplets): _67.DVVTripletsAminoMsg;
                fromProtoMsg(message: _67.DVVTripletsProtoMsg): _67.DVVTriplets;
                toProto(message: _67.DVVTriplets): Uint8Array;
                toProtoMsg(message: _67.DVVTriplets): _67.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _67.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.Delegation;
                fromPartial(object: Partial<_67.Delegation>): _67.Delegation;
                fromAmino(object: _67.DelegationAmino): _67.Delegation;
                toAmino(message: _67.Delegation): _67.DelegationAmino;
                fromAminoMsg(object: _67.DelegationAminoMsg): _67.Delegation;
                toAminoMsg(message: _67.Delegation): _67.DelegationAminoMsg;
                fromProtoMsg(message: _67.DelegationProtoMsg): _67.Delegation;
                toProto(message: _67.Delegation): Uint8Array;
                toProtoMsg(message: _67.Delegation): _67.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _67.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.UnbondingDelegation;
                fromPartial(object: Partial<_67.UnbondingDelegation>): _67.UnbondingDelegation;
                fromAmino(object: _67.UnbondingDelegationAmino): _67.UnbondingDelegation;
                toAmino(message: _67.UnbondingDelegation): _67.UnbondingDelegationAmino;
                fromAminoMsg(object: _67.UnbondingDelegationAminoMsg): _67.UnbondingDelegation;
                toAminoMsg(message: _67.UnbondingDelegation): _67.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _67.UnbondingDelegationProtoMsg): _67.UnbondingDelegation;
                toProto(message: _67.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _67.UnbondingDelegation): _67.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _67.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.UnbondingDelegationEntry;
                fromPartial(object: Partial<_67.UnbondingDelegationEntry>): _67.UnbondingDelegationEntry;
                fromAmino(object: _67.UnbondingDelegationEntryAmino): _67.UnbondingDelegationEntry;
                toAmino(message: _67.UnbondingDelegationEntry): _67.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _67.UnbondingDelegationEntryAminoMsg): _67.UnbondingDelegationEntry;
                toAminoMsg(message: _67.UnbondingDelegationEntry): _67.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _67.UnbondingDelegationEntryProtoMsg): _67.UnbondingDelegationEntry;
                toProto(message: _67.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _67.UnbondingDelegationEntry): _67.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _67.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.RedelegationEntry;
                fromPartial(object: Partial<_67.RedelegationEntry>): _67.RedelegationEntry;
                fromAmino(object: _67.RedelegationEntryAmino): _67.RedelegationEntry;
                toAmino(message: _67.RedelegationEntry): _67.RedelegationEntryAmino;
                fromAminoMsg(object: _67.RedelegationEntryAminoMsg): _67.RedelegationEntry;
                toAminoMsg(message: _67.RedelegationEntry): _67.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _67.RedelegationEntryProtoMsg): _67.RedelegationEntry;
                toProto(message: _67.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _67.RedelegationEntry): _67.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _67.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.Redelegation;
                fromPartial(object: Partial<_67.Redelegation>): _67.Redelegation;
                fromAmino(object: _67.RedelegationAmino): _67.Redelegation;
                toAmino(message: _67.Redelegation): _67.RedelegationAmino;
                fromAminoMsg(object: _67.RedelegationAminoMsg): _67.Redelegation;
                toAminoMsg(message: _67.Redelegation): _67.RedelegationAminoMsg;
                fromProtoMsg(message: _67.RedelegationProtoMsg): _67.Redelegation;
                toProto(message: _67.Redelegation): Uint8Array;
                toProtoMsg(message: _67.Redelegation): _67.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _67.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.Params;
                fromPartial(object: Partial<_67.Params>): _67.Params;
                fromAmino(object: _67.ParamsAmino): _67.Params;
                toAmino(message: _67.Params): _67.ParamsAmino;
                fromAminoMsg(object: _67.ParamsAminoMsg): _67.Params;
                toAminoMsg(message: _67.Params): _67.ParamsAminoMsg;
                fromProtoMsg(message: _67.ParamsProtoMsg): _67.Params;
                toProto(message: _67.Params): Uint8Array;
                toProtoMsg(message: _67.Params): _67.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _67.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.DelegationResponse;
                fromPartial(object: Partial<_67.DelegationResponse>): _67.DelegationResponse;
                fromAmino(object: _67.DelegationResponseAmino): _67.DelegationResponse;
                toAmino(message: _67.DelegationResponse): _67.DelegationResponseAmino;
                fromAminoMsg(object: _67.DelegationResponseAminoMsg): _67.DelegationResponse;
                toAminoMsg(message: _67.DelegationResponse): _67.DelegationResponseAminoMsg;
                fromProtoMsg(message: _67.DelegationResponseProtoMsg): _67.DelegationResponse;
                toProto(message: _67.DelegationResponse): Uint8Array;
                toProtoMsg(message: _67.DelegationResponse): _67.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _67.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.RedelegationEntryResponse;
                fromPartial(object: Partial<_67.RedelegationEntryResponse>): _67.RedelegationEntryResponse;
                fromAmino(object: _67.RedelegationEntryResponseAmino): _67.RedelegationEntryResponse;
                toAmino(message: _67.RedelegationEntryResponse): _67.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _67.RedelegationEntryResponseAminoMsg): _67.RedelegationEntryResponse;
                toAminoMsg(message: _67.RedelegationEntryResponse): _67.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _67.RedelegationEntryResponseProtoMsg): _67.RedelegationEntryResponse;
                toProto(message: _67.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _67.RedelegationEntryResponse): _67.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _67.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.RedelegationResponse;
                fromPartial(object: Partial<_67.RedelegationResponse>): _67.RedelegationResponse;
                fromAmino(object: _67.RedelegationResponseAmino): _67.RedelegationResponse;
                toAmino(message: _67.RedelegationResponse): _67.RedelegationResponseAmino;
                fromAminoMsg(object: _67.RedelegationResponseAminoMsg): _67.RedelegationResponse;
                toAminoMsg(message: _67.RedelegationResponse): _67.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _67.RedelegationResponseProtoMsg): _67.RedelegationResponse;
                toProto(message: _67.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _67.RedelegationResponse): _67.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _67.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.Pool;
                fromPartial(object: Partial<_67.Pool>): _67.Pool;
                fromAmino(object: _67.PoolAmino): _67.Pool;
                toAmino(message: _67.Pool): _67.PoolAmino;
                fromAminoMsg(object: _67.PoolAminoMsg): _67.Pool;
                toAminoMsg(message: _67.Pool): _67.PoolAminoMsg;
                fromProtoMsg(message: _67.PoolProtoMsg): _67.Pool;
                toProto(message: _67.Pool): Uint8Array;
                toProtoMsg(message: _67.Pool): _67.PoolProtoMsg;
            };
            ValidatorUpdates: {
                typeUrl: string;
                encode(message: _67.ValidatorUpdates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.ValidatorUpdates;
                fromPartial(object: Partial<_67.ValidatorUpdates>): _67.ValidatorUpdates;
                fromAmino(object: _67.ValidatorUpdatesAmino): _67.ValidatorUpdates;
                toAmino(message: _67.ValidatorUpdates): _67.ValidatorUpdatesAmino;
                fromAminoMsg(object: _67.ValidatorUpdatesAminoMsg): _67.ValidatorUpdates;
                toAminoMsg(message: _67.ValidatorUpdates): _67.ValidatorUpdatesAminoMsg;
                fromProtoMsg(message: _67.ValidatorUpdatesProtoMsg): _67.ValidatorUpdates;
                toProto(message: _67.ValidatorUpdates): Uint8Array;
                toProtoMsg(message: _67.ValidatorUpdates): _67.ValidatorUpdatesProtoMsg;
            };
            TokenizeShareRecord: {
                typeUrl: string;
                encode(message: _67.TokenizeShareRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.TokenizeShareRecord;
                fromPartial(object: Partial<_67.TokenizeShareRecord>): _67.TokenizeShareRecord;
                fromAmino(object: _67.TokenizeShareRecordAmino): _67.TokenizeShareRecord;
                toAmino(message: _67.TokenizeShareRecord): _67.TokenizeShareRecordAmino;
                fromAminoMsg(object: _67.TokenizeShareRecordAminoMsg): _67.TokenizeShareRecord;
                toAminoMsg(message: _67.TokenizeShareRecord): _67.TokenizeShareRecordAminoMsg;
                fromProtoMsg(message: _67.TokenizeShareRecordProtoMsg): _67.TokenizeShareRecord;
                toProto(message: _67.TokenizeShareRecord): Uint8Array;
                toProtoMsg(message: _67.TokenizeShareRecord): _67.TokenizeShareRecordProtoMsg;
            };
            PendingTokenizeShareAuthorizations: {
                typeUrl: string;
                encode(message: _67.PendingTokenizeShareAuthorizations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.PendingTokenizeShareAuthorizations;
                fromPartial(object: Partial<_67.PendingTokenizeShareAuthorizations>): _67.PendingTokenizeShareAuthorizations;
                fromAmino(object: _67.PendingTokenizeShareAuthorizationsAmino): _67.PendingTokenizeShareAuthorizations;
                toAmino(message: _67.PendingTokenizeShareAuthorizations): _67.PendingTokenizeShareAuthorizationsAmino;
                fromAminoMsg(object: _67.PendingTokenizeShareAuthorizationsAminoMsg): _67.PendingTokenizeShareAuthorizations;
                toAminoMsg(message: _67.PendingTokenizeShareAuthorizations): _67.PendingTokenizeShareAuthorizationsAminoMsg;
                fromProtoMsg(message: _67.PendingTokenizeShareAuthorizationsProtoMsg): _67.PendingTokenizeShareAuthorizations;
                toProto(message: _67.PendingTokenizeShareAuthorizations): Uint8Array;
                toProtoMsg(message: _67.PendingTokenizeShareAuthorizations): _67.PendingTokenizeShareAuthorizationsProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _66.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryValidatorsRequest;
                fromPartial(object: Partial<_66.QueryValidatorsRequest>): _66.QueryValidatorsRequest;
                fromAmino(object: _66.QueryValidatorsRequestAmino): _66.QueryValidatorsRequest;
                toAmino(message: _66.QueryValidatorsRequest): _66.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _66.QueryValidatorsRequestAminoMsg): _66.QueryValidatorsRequest;
                toAminoMsg(message: _66.QueryValidatorsRequest): _66.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryValidatorsRequestProtoMsg): _66.QueryValidatorsRequest;
                toProto(message: _66.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryValidatorsRequest): _66.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _66.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryValidatorsResponse;
                fromPartial(object: Partial<_66.QueryValidatorsResponse>): _66.QueryValidatorsResponse;
                fromAmino(object: _66.QueryValidatorsResponseAmino): _66.QueryValidatorsResponse;
                toAmino(message: _66.QueryValidatorsResponse): _66.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _66.QueryValidatorsResponseAminoMsg): _66.QueryValidatorsResponse;
                toAminoMsg(message: _66.QueryValidatorsResponse): _66.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryValidatorsResponseProtoMsg): _66.QueryValidatorsResponse;
                toProto(message: _66.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryValidatorsResponse): _66.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _66.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryValidatorRequest;
                fromPartial(object: Partial<_66.QueryValidatorRequest>): _66.QueryValidatorRequest;
                fromAmino(object: _66.QueryValidatorRequestAmino): _66.QueryValidatorRequest;
                toAmino(message: _66.QueryValidatorRequest): _66.QueryValidatorRequestAmino;
                fromAminoMsg(object: _66.QueryValidatorRequestAminoMsg): _66.QueryValidatorRequest;
                toAminoMsg(message: _66.QueryValidatorRequest): _66.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _66.QueryValidatorRequestProtoMsg): _66.QueryValidatorRequest;
                toProto(message: _66.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _66.QueryValidatorRequest): _66.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _66.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryValidatorResponse;
                fromPartial(object: Partial<_66.QueryValidatorResponse>): _66.QueryValidatorResponse;
                fromAmino(object: _66.QueryValidatorResponseAmino): _66.QueryValidatorResponse;
                toAmino(message: _66.QueryValidatorResponse): _66.QueryValidatorResponseAmino;
                fromAminoMsg(object: _66.QueryValidatorResponseAminoMsg): _66.QueryValidatorResponse;
                toAminoMsg(message: _66.QueryValidatorResponse): _66.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _66.QueryValidatorResponseProtoMsg): _66.QueryValidatorResponse;
                toProto(message: _66.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _66.QueryValidatorResponse): _66.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _66.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_66.QueryValidatorDelegationsRequest>): _66.QueryValidatorDelegationsRequest;
                fromAmino(object: _66.QueryValidatorDelegationsRequestAmino): _66.QueryValidatorDelegationsRequest;
                toAmino(message: _66.QueryValidatorDelegationsRequest): _66.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _66.QueryValidatorDelegationsRequestAminoMsg): _66.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _66.QueryValidatorDelegationsRequest): _66.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryValidatorDelegationsRequestProtoMsg): _66.QueryValidatorDelegationsRequest;
                toProto(message: _66.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryValidatorDelegationsRequest): _66.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _66.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_66.QueryValidatorDelegationsResponse>): _66.QueryValidatorDelegationsResponse;
                fromAmino(object: _66.QueryValidatorDelegationsResponseAmino): _66.QueryValidatorDelegationsResponse;
                toAmino(message: _66.QueryValidatorDelegationsResponse): _66.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _66.QueryValidatorDelegationsResponseAminoMsg): _66.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _66.QueryValidatorDelegationsResponse): _66.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryValidatorDelegationsResponseProtoMsg): _66.QueryValidatorDelegationsResponse;
                toProto(message: _66.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryValidatorDelegationsResponse): _66.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _66.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_66.QueryValidatorUnbondingDelegationsRequest>): _66.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _66.QueryValidatorUnbondingDelegationsRequestAmino): _66.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _66.QueryValidatorUnbondingDelegationsRequest): _66.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _66.QueryValidatorUnbondingDelegationsRequestAminoMsg): _66.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _66.QueryValidatorUnbondingDelegationsRequest): _66.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryValidatorUnbondingDelegationsRequestProtoMsg): _66.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _66.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryValidatorUnbondingDelegationsRequest): _66.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _66.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_66.QueryValidatorUnbondingDelegationsResponse>): _66.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _66.QueryValidatorUnbondingDelegationsResponseAmino): _66.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _66.QueryValidatorUnbondingDelegationsResponse): _66.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _66.QueryValidatorUnbondingDelegationsResponseAminoMsg): _66.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _66.QueryValidatorUnbondingDelegationsResponse): _66.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryValidatorUnbondingDelegationsResponseProtoMsg): _66.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _66.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryValidatorUnbondingDelegationsResponse): _66.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _66.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryDelegationRequest;
                fromPartial(object: Partial<_66.QueryDelegationRequest>): _66.QueryDelegationRequest;
                fromAmino(object: _66.QueryDelegationRequestAmino): _66.QueryDelegationRequest;
                toAmino(message: _66.QueryDelegationRequest): _66.QueryDelegationRequestAmino;
                fromAminoMsg(object: _66.QueryDelegationRequestAminoMsg): _66.QueryDelegationRequest;
                toAminoMsg(message: _66.QueryDelegationRequest): _66.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _66.QueryDelegationRequestProtoMsg): _66.QueryDelegationRequest;
                toProto(message: _66.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _66.QueryDelegationRequest): _66.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _66.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryDelegationResponse;
                fromPartial(object: Partial<_66.QueryDelegationResponse>): _66.QueryDelegationResponse;
                fromAmino(object: _66.QueryDelegationResponseAmino): _66.QueryDelegationResponse;
                toAmino(message: _66.QueryDelegationResponse): _66.QueryDelegationResponseAmino;
                fromAminoMsg(object: _66.QueryDelegationResponseAminoMsg): _66.QueryDelegationResponse;
                toAminoMsg(message: _66.QueryDelegationResponse): _66.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _66.QueryDelegationResponseProtoMsg): _66.QueryDelegationResponse;
                toProto(message: _66.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _66.QueryDelegationResponse): _66.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _66.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_66.QueryUnbondingDelegationRequest>): _66.QueryUnbondingDelegationRequest;
                fromAmino(object: _66.QueryUnbondingDelegationRequestAmino): _66.QueryUnbondingDelegationRequest;
                toAmino(message: _66.QueryUnbondingDelegationRequest): _66.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _66.QueryUnbondingDelegationRequestAminoMsg): _66.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _66.QueryUnbondingDelegationRequest): _66.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _66.QueryUnbondingDelegationRequestProtoMsg): _66.QueryUnbondingDelegationRequest;
                toProto(message: _66.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _66.QueryUnbondingDelegationRequest): _66.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _66.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_66.QueryUnbondingDelegationResponse>): _66.QueryUnbondingDelegationResponse;
                fromAmino(object: _66.QueryUnbondingDelegationResponseAmino): _66.QueryUnbondingDelegationResponse;
                toAmino(message: _66.QueryUnbondingDelegationResponse): _66.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _66.QueryUnbondingDelegationResponseAminoMsg): _66.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _66.QueryUnbondingDelegationResponse): _66.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _66.QueryUnbondingDelegationResponseProtoMsg): _66.QueryUnbondingDelegationResponse;
                toProto(message: _66.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _66.QueryUnbondingDelegationResponse): _66.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _66.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_66.QueryDelegatorDelegationsRequest>): _66.QueryDelegatorDelegationsRequest;
                fromAmino(object: _66.QueryDelegatorDelegationsRequestAmino): _66.QueryDelegatorDelegationsRequest;
                toAmino(message: _66.QueryDelegatorDelegationsRequest): _66.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _66.QueryDelegatorDelegationsRequestAminoMsg): _66.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _66.QueryDelegatorDelegationsRequest): _66.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryDelegatorDelegationsRequestProtoMsg): _66.QueryDelegatorDelegationsRequest;
                toProto(message: _66.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryDelegatorDelegationsRequest): _66.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _66.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_66.QueryDelegatorDelegationsResponse>): _66.QueryDelegatorDelegationsResponse;
                fromAmino(object: _66.QueryDelegatorDelegationsResponseAmino): _66.QueryDelegatorDelegationsResponse;
                toAmino(message: _66.QueryDelegatorDelegationsResponse): _66.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _66.QueryDelegatorDelegationsResponseAminoMsg): _66.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _66.QueryDelegatorDelegationsResponse): _66.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryDelegatorDelegationsResponseProtoMsg): _66.QueryDelegatorDelegationsResponse;
                toProto(message: _66.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryDelegatorDelegationsResponse): _66.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _66.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_66.QueryDelegatorUnbondingDelegationsRequest>): _66.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _66.QueryDelegatorUnbondingDelegationsRequestAmino): _66.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _66.QueryDelegatorUnbondingDelegationsRequest): _66.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _66.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _66.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _66.QueryDelegatorUnbondingDelegationsRequest): _66.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _66.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _66.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryDelegatorUnbondingDelegationsRequest): _66.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _66.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_66.QueryDelegatorUnbondingDelegationsResponse>): _66.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _66.QueryDelegatorUnbondingDelegationsResponseAmino): _66.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _66.QueryDelegatorUnbondingDelegationsResponse): _66.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _66.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _66.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _66.QueryDelegatorUnbondingDelegationsResponse): _66.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _66.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _66.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryDelegatorUnbondingDelegationsResponse): _66.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _66.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryRedelegationsRequest;
                fromPartial(object: Partial<_66.QueryRedelegationsRequest>): _66.QueryRedelegationsRequest;
                fromAmino(object: _66.QueryRedelegationsRequestAmino): _66.QueryRedelegationsRequest;
                toAmino(message: _66.QueryRedelegationsRequest): _66.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _66.QueryRedelegationsRequestAminoMsg): _66.QueryRedelegationsRequest;
                toAminoMsg(message: _66.QueryRedelegationsRequest): _66.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryRedelegationsRequestProtoMsg): _66.QueryRedelegationsRequest;
                toProto(message: _66.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryRedelegationsRequest): _66.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _66.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryRedelegationsResponse;
                fromPartial(object: Partial<_66.QueryRedelegationsResponse>): _66.QueryRedelegationsResponse;
                fromAmino(object: _66.QueryRedelegationsResponseAmino): _66.QueryRedelegationsResponse;
                toAmino(message: _66.QueryRedelegationsResponse): _66.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _66.QueryRedelegationsResponseAminoMsg): _66.QueryRedelegationsResponse;
                toAminoMsg(message: _66.QueryRedelegationsResponse): _66.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryRedelegationsResponseProtoMsg): _66.QueryRedelegationsResponse;
                toProto(message: _66.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryRedelegationsResponse): _66.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _66.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_66.QueryDelegatorValidatorsRequest>): _66.QueryDelegatorValidatorsRequest;
                fromAmino(object: _66.QueryDelegatorValidatorsRequestAmino): _66.QueryDelegatorValidatorsRequest;
                toAmino(message: _66.QueryDelegatorValidatorsRequest): _66.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _66.QueryDelegatorValidatorsRequestAminoMsg): _66.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _66.QueryDelegatorValidatorsRequest): _66.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryDelegatorValidatorsRequestProtoMsg): _66.QueryDelegatorValidatorsRequest;
                toProto(message: _66.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryDelegatorValidatorsRequest): _66.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _66.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_66.QueryDelegatorValidatorsResponse>): _66.QueryDelegatorValidatorsResponse;
                fromAmino(object: _66.QueryDelegatorValidatorsResponseAmino): _66.QueryDelegatorValidatorsResponse;
                toAmino(message: _66.QueryDelegatorValidatorsResponse): _66.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _66.QueryDelegatorValidatorsResponseAminoMsg): _66.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _66.QueryDelegatorValidatorsResponse): _66.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryDelegatorValidatorsResponseProtoMsg): _66.QueryDelegatorValidatorsResponse;
                toProto(message: _66.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryDelegatorValidatorsResponse): _66.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _66.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_66.QueryDelegatorValidatorRequest>): _66.QueryDelegatorValidatorRequest;
                fromAmino(object: _66.QueryDelegatorValidatorRequestAmino): _66.QueryDelegatorValidatorRequest;
                toAmino(message: _66.QueryDelegatorValidatorRequest): _66.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _66.QueryDelegatorValidatorRequestAminoMsg): _66.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _66.QueryDelegatorValidatorRequest): _66.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _66.QueryDelegatorValidatorRequestProtoMsg): _66.QueryDelegatorValidatorRequest;
                toProto(message: _66.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _66.QueryDelegatorValidatorRequest): _66.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _66.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_66.QueryDelegatorValidatorResponse>): _66.QueryDelegatorValidatorResponse;
                fromAmino(object: _66.QueryDelegatorValidatorResponseAmino): _66.QueryDelegatorValidatorResponse;
                toAmino(message: _66.QueryDelegatorValidatorResponse): _66.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _66.QueryDelegatorValidatorResponseAminoMsg): _66.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _66.QueryDelegatorValidatorResponse): _66.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _66.QueryDelegatorValidatorResponseProtoMsg): _66.QueryDelegatorValidatorResponse;
                toProto(message: _66.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _66.QueryDelegatorValidatorResponse): _66.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _66.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_66.QueryHistoricalInfoRequest>): _66.QueryHistoricalInfoRequest;
                fromAmino(object: _66.QueryHistoricalInfoRequestAmino): _66.QueryHistoricalInfoRequest;
                toAmino(message: _66.QueryHistoricalInfoRequest): _66.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _66.QueryHistoricalInfoRequestAminoMsg): _66.QueryHistoricalInfoRequest;
                toAminoMsg(message: _66.QueryHistoricalInfoRequest): _66.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _66.QueryHistoricalInfoRequestProtoMsg): _66.QueryHistoricalInfoRequest;
                toProto(message: _66.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _66.QueryHistoricalInfoRequest): _66.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _66.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_66.QueryHistoricalInfoResponse>): _66.QueryHistoricalInfoResponse;
                fromAmino(object: _66.QueryHistoricalInfoResponseAmino): _66.QueryHistoricalInfoResponse;
                toAmino(message: _66.QueryHistoricalInfoResponse): _66.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _66.QueryHistoricalInfoResponseAminoMsg): _66.QueryHistoricalInfoResponse;
                toAminoMsg(message: _66.QueryHistoricalInfoResponse): _66.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _66.QueryHistoricalInfoResponseProtoMsg): _66.QueryHistoricalInfoResponse;
                toProto(message: _66.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _66.QueryHistoricalInfoResponse): _66.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _66.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryPoolRequest;
                fromPartial(_: Partial<_66.QueryPoolRequest>): _66.QueryPoolRequest;
                fromAmino(_: _66.QueryPoolRequestAmino): _66.QueryPoolRequest;
                toAmino(_: _66.QueryPoolRequest): _66.QueryPoolRequestAmino;
                fromAminoMsg(object: _66.QueryPoolRequestAminoMsg): _66.QueryPoolRequest;
                toAminoMsg(message: _66.QueryPoolRequest): _66.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _66.QueryPoolRequestProtoMsg): _66.QueryPoolRequest;
                toProto(message: _66.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _66.QueryPoolRequest): _66.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _66.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryPoolResponse;
                fromPartial(object: Partial<_66.QueryPoolResponse>): _66.QueryPoolResponse;
                fromAmino(object: _66.QueryPoolResponseAmino): _66.QueryPoolResponse;
                toAmino(message: _66.QueryPoolResponse): _66.QueryPoolResponseAmino;
                fromAminoMsg(object: _66.QueryPoolResponseAminoMsg): _66.QueryPoolResponse;
                toAminoMsg(message: _66.QueryPoolResponse): _66.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _66.QueryPoolResponseProtoMsg): _66.QueryPoolResponse;
                toProto(message: _66.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _66.QueryPoolResponse): _66.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _66.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryParamsRequest;
                fromPartial(_: Partial<_66.QueryParamsRequest>): _66.QueryParamsRequest;
                fromAmino(_: _66.QueryParamsRequestAmino): _66.QueryParamsRequest;
                toAmino(_: _66.QueryParamsRequest): _66.QueryParamsRequestAmino;
                fromAminoMsg(object: _66.QueryParamsRequestAminoMsg): _66.QueryParamsRequest;
                toAminoMsg(message: _66.QueryParamsRequest): _66.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryParamsRequestProtoMsg): _66.QueryParamsRequest;
                toProto(message: _66.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryParamsRequest): _66.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _66.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryParamsResponse;
                fromPartial(object: Partial<_66.QueryParamsResponse>): _66.QueryParamsResponse;
                fromAmino(object: _66.QueryParamsResponseAmino): _66.QueryParamsResponse;
                toAmino(message: _66.QueryParamsResponse): _66.QueryParamsResponseAmino;
                fromAminoMsg(object: _66.QueryParamsResponseAminoMsg): _66.QueryParamsResponse;
                toAminoMsg(message: _66.QueryParamsResponse): _66.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryParamsResponseProtoMsg): _66.QueryParamsResponse;
                toProto(message: _66.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryParamsResponse): _66.QueryParamsResponseProtoMsg;
            };
            QueryTokenizeShareRecordByIdRequest: {
                typeUrl: string;
                encode(message: _66.QueryTokenizeShareRecordByIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryTokenizeShareRecordByIdRequest;
                fromPartial(object: Partial<_66.QueryTokenizeShareRecordByIdRequest>): _66.QueryTokenizeShareRecordByIdRequest;
                fromAmino(object: _66.QueryTokenizeShareRecordByIdRequestAmino): _66.QueryTokenizeShareRecordByIdRequest;
                toAmino(message: _66.QueryTokenizeShareRecordByIdRequest): _66.QueryTokenizeShareRecordByIdRequestAmino;
                fromAminoMsg(object: _66.QueryTokenizeShareRecordByIdRequestAminoMsg): _66.QueryTokenizeShareRecordByIdRequest;
                toAminoMsg(message: _66.QueryTokenizeShareRecordByIdRequest): _66.QueryTokenizeShareRecordByIdRequestAminoMsg;
                fromProtoMsg(message: _66.QueryTokenizeShareRecordByIdRequestProtoMsg): _66.QueryTokenizeShareRecordByIdRequest;
                toProto(message: _66.QueryTokenizeShareRecordByIdRequest): Uint8Array;
                toProtoMsg(message: _66.QueryTokenizeShareRecordByIdRequest): _66.QueryTokenizeShareRecordByIdRequestProtoMsg;
            };
            QueryTokenizeShareRecordByIdResponse: {
                typeUrl: string;
                encode(message: _66.QueryTokenizeShareRecordByIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryTokenizeShareRecordByIdResponse;
                fromPartial(object: Partial<_66.QueryTokenizeShareRecordByIdResponse>): _66.QueryTokenizeShareRecordByIdResponse;
                fromAmino(object: _66.QueryTokenizeShareRecordByIdResponseAmino): _66.QueryTokenizeShareRecordByIdResponse;
                toAmino(message: _66.QueryTokenizeShareRecordByIdResponse): _66.QueryTokenizeShareRecordByIdResponseAmino;
                fromAminoMsg(object: _66.QueryTokenizeShareRecordByIdResponseAminoMsg): _66.QueryTokenizeShareRecordByIdResponse;
                toAminoMsg(message: _66.QueryTokenizeShareRecordByIdResponse): _66.QueryTokenizeShareRecordByIdResponseAminoMsg;
                fromProtoMsg(message: _66.QueryTokenizeShareRecordByIdResponseProtoMsg): _66.QueryTokenizeShareRecordByIdResponse;
                toProto(message: _66.QueryTokenizeShareRecordByIdResponse): Uint8Array;
                toProtoMsg(message: _66.QueryTokenizeShareRecordByIdResponse): _66.QueryTokenizeShareRecordByIdResponseProtoMsg;
            };
            QueryTokenizeShareRecordByDenomRequest: {
                typeUrl: string;
                encode(message: _66.QueryTokenizeShareRecordByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryTokenizeShareRecordByDenomRequest;
                fromPartial(object: Partial<_66.QueryTokenizeShareRecordByDenomRequest>): _66.QueryTokenizeShareRecordByDenomRequest;
                fromAmino(object: _66.QueryTokenizeShareRecordByDenomRequestAmino): _66.QueryTokenizeShareRecordByDenomRequest;
                toAmino(message: _66.QueryTokenizeShareRecordByDenomRequest): _66.QueryTokenizeShareRecordByDenomRequestAmino;
                fromAminoMsg(object: _66.QueryTokenizeShareRecordByDenomRequestAminoMsg): _66.QueryTokenizeShareRecordByDenomRequest;
                toAminoMsg(message: _66.QueryTokenizeShareRecordByDenomRequest): _66.QueryTokenizeShareRecordByDenomRequestAminoMsg;
                fromProtoMsg(message: _66.QueryTokenizeShareRecordByDenomRequestProtoMsg): _66.QueryTokenizeShareRecordByDenomRequest;
                toProto(message: _66.QueryTokenizeShareRecordByDenomRequest): Uint8Array;
                toProtoMsg(message: _66.QueryTokenizeShareRecordByDenomRequest): _66.QueryTokenizeShareRecordByDenomRequestProtoMsg;
            };
            QueryTokenizeShareRecordByDenomResponse: {
                typeUrl: string;
                encode(message: _66.QueryTokenizeShareRecordByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryTokenizeShareRecordByDenomResponse;
                fromPartial(object: Partial<_66.QueryTokenizeShareRecordByDenomResponse>): _66.QueryTokenizeShareRecordByDenomResponse;
                fromAmino(object: _66.QueryTokenizeShareRecordByDenomResponseAmino): _66.QueryTokenizeShareRecordByDenomResponse;
                toAmino(message: _66.QueryTokenizeShareRecordByDenomResponse): _66.QueryTokenizeShareRecordByDenomResponseAmino;
                fromAminoMsg(object: _66.QueryTokenizeShareRecordByDenomResponseAminoMsg): _66.QueryTokenizeShareRecordByDenomResponse;
                toAminoMsg(message: _66.QueryTokenizeShareRecordByDenomResponse): _66.QueryTokenizeShareRecordByDenomResponseAminoMsg;
                fromProtoMsg(message: _66.QueryTokenizeShareRecordByDenomResponseProtoMsg): _66.QueryTokenizeShareRecordByDenomResponse;
                toProto(message: _66.QueryTokenizeShareRecordByDenomResponse): Uint8Array;
                toProtoMsg(message: _66.QueryTokenizeShareRecordByDenomResponse): _66.QueryTokenizeShareRecordByDenomResponseProtoMsg;
            };
            QueryTokenizeShareRecordsOwnedRequest: {
                typeUrl: string;
                encode(message: _66.QueryTokenizeShareRecordsOwnedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryTokenizeShareRecordsOwnedRequest;
                fromPartial(object: Partial<_66.QueryTokenizeShareRecordsOwnedRequest>): _66.QueryTokenizeShareRecordsOwnedRequest;
                fromAmino(object: _66.QueryTokenizeShareRecordsOwnedRequestAmino): _66.QueryTokenizeShareRecordsOwnedRequest;
                toAmino(message: _66.QueryTokenizeShareRecordsOwnedRequest): _66.QueryTokenizeShareRecordsOwnedRequestAmino;
                fromAminoMsg(object: _66.QueryTokenizeShareRecordsOwnedRequestAminoMsg): _66.QueryTokenizeShareRecordsOwnedRequest;
                toAminoMsg(message: _66.QueryTokenizeShareRecordsOwnedRequest): _66.QueryTokenizeShareRecordsOwnedRequestAminoMsg;
                fromProtoMsg(message: _66.QueryTokenizeShareRecordsOwnedRequestProtoMsg): _66.QueryTokenizeShareRecordsOwnedRequest;
                toProto(message: _66.QueryTokenizeShareRecordsOwnedRequest): Uint8Array;
                toProtoMsg(message: _66.QueryTokenizeShareRecordsOwnedRequest): _66.QueryTokenizeShareRecordsOwnedRequestProtoMsg;
            };
            QueryTokenizeShareRecordsOwnedResponse: {
                typeUrl: string;
                encode(message: _66.QueryTokenizeShareRecordsOwnedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryTokenizeShareRecordsOwnedResponse;
                fromPartial(object: Partial<_66.QueryTokenizeShareRecordsOwnedResponse>): _66.QueryTokenizeShareRecordsOwnedResponse;
                fromAmino(object: _66.QueryTokenizeShareRecordsOwnedResponseAmino): _66.QueryTokenizeShareRecordsOwnedResponse;
                toAmino(message: _66.QueryTokenizeShareRecordsOwnedResponse): _66.QueryTokenizeShareRecordsOwnedResponseAmino;
                fromAminoMsg(object: _66.QueryTokenizeShareRecordsOwnedResponseAminoMsg): _66.QueryTokenizeShareRecordsOwnedResponse;
                toAminoMsg(message: _66.QueryTokenizeShareRecordsOwnedResponse): _66.QueryTokenizeShareRecordsOwnedResponseAminoMsg;
                fromProtoMsg(message: _66.QueryTokenizeShareRecordsOwnedResponseProtoMsg): _66.QueryTokenizeShareRecordsOwnedResponse;
                toProto(message: _66.QueryTokenizeShareRecordsOwnedResponse): Uint8Array;
                toProtoMsg(message: _66.QueryTokenizeShareRecordsOwnedResponse): _66.QueryTokenizeShareRecordsOwnedResponseProtoMsg;
            };
            QueryAllTokenizeShareRecordsRequest: {
                typeUrl: string;
                encode(message: _66.QueryAllTokenizeShareRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryAllTokenizeShareRecordsRequest;
                fromPartial(object: Partial<_66.QueryAllTokenizeShareRecordsRequest>): _66.QueryAllTokenizeShareRecordsRequest;
                fromAmino(object: _66.QueryAllTokenizeShareRecordsRequestAmino): _66.QueryAllTokenizeShareRecordsRequest;
                toAmino(message: _66.QueryAllTokenizeShareRecordsRequest): _66.QueryAllTokenizeShareRecordsRequestAmino;
                fromAminoMsg(object: _66.QueryAllTokenizeShareRecordsRequestAminoMsg): _66.QueryAllTokenizeShareRecordsRequest;
                toAminoMsg(message: _66.QueryAllTokenizeShareRecordsRequest): _66.QueryAllTokenizeShareRecordsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryAllTokenizeShareRecordsRequestProtoMsg): _66.QueryAllTokenizeShareRecordsRequest;
                toProto(message: _66.QueryAllTokenizeShareRecordsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryAllTokenizeShareRecordsRequest): _66.QueryAllTokenizeShareRecordsRequestProtoMsg;
            };
            QueryAllTokenizeShareRecordsResponse: {
                typeUrl: string;
                encode(message: _66.QueryAllTokenizeShareRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryAllTokenizeShareRecordsResponse;
                fromPartial(object: Partial<_66.QueryAllTokenizeShareRecordsResponse>): _66.QueryAllTokenizeShareRecordsResponse;
                fromAmino(object: _66.QueryAllTokenizeShareRecordsResponseAmino): _66.QueryAllTokenizeShareRecordsResponse;
                toAmino(message: _66.QueryAllTokenizeShareRecordsResponse): _66.QueryAllTokenizeShareRecordsResponseAmino;
                fromAminoMsg(object: _66.QueryAllTokenizeShareRecordsResponseAminoMsg): _66.QueryAllTokenizeShareRecordsResponse;
                toAminoMsg(message: _66.QueryAllTokenizeShareRecordsResponse): _66.QueryAllTokenizeShareRecordsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryAllTokenizeShareRecordsResponseProtoMsg): _66.QueryAllTokenizeShareRecordsResponse;
                toProto(message: _66.QueryAllTokenizeShareRecordsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryAllTokenizeShareRecordsResponse): _66.QueryAllTokenizeShareRecordsResponseProtoMsg;
            };
            QueryLastTokenizeShareRecordIdRequest: {
                typeUrl: string;
                encode(_: _66.QueryLastTokenizeShareRecordIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryLastTokenizeShareRecordIdRequest;
                fromPartial(_: Partial<_66.QueryLastTokenizeShareRecordIdRequest>): _66.QueryLastTokenizeShareRecordIdRequest;
                fromAmino(_: _66.QueryLastTokenizeShareRecordIdRequestAmino): _66.QueryLastTokenizeShareRecordIdRequest;
                toAmino(_: _66.QueryLastTokenizeShareRecordIdRequest): _66.QueryLastTokenizeShareRecordIdRequestAmino;
                fromAminoMsg(object: _66.QueryLastTokenizeShareRecordIdRequestAminoMsg): _66.QueryLastTokenizeShareRecordIdRequest;
                toAminoMsg(message: _66.QueryLastTokenizeShareRecordIdRequest): _66.QueryLastTokenizeShareRecordIdRequestAminoMsg;
                fromProtoMsg(message: _66.QueryLastTokenizeShareRecordIdRequestProtoMsg): _66.QueryLastTokenizeShareRecordIdRequest;
                toProto(message: _66.QueryLastTokenizeShareRecordIdRequest): Uint8Array;
                toProtoMsg(message: _66.QueryLastTokenizeShareRecordIdRequest): _66.QueryLastTokenizeShareRecordIdRequestProtoMsg;
            };
            QueryLastTokenizeShareRecordIdResponse: {
                typeUrl: string;
                encode(message: _66.QueryLastTokenizeShareRecordIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryLastTokenizeShareRecordIdResponse;
                fromPartial(object: Partial<_66.QueryLastTokenizeShareRecordIdResponse>): _66.QueryLastTokenizeShareRecordIdResponse;
                fromAmino(object: _66.QueryLastTokenizeShareRecordIdResponseAmino): _66.QueryLastTokenizeShareRecordIdResponse;
                toAmino(message: _66.QueryLastTokenizeShareRecordIdResponse): _66.QueryLastTokenizeShareRecordIdResponseAmino;
                fromAminoMsg(object: _66.QueryLastTokenizeShareRecordIdResponseAminoMsg): _66.QueryLastTokenizeShareRecordIdResponse;
                toAminoMsg(message: _66.QueryLastTokenizeShareRecordIdResponse): _66.QueryLastTokenizeShareRecordIdResponseAminoMsg;
                fromProtoMsg(message: _66.QueryLastTokenizeShareRecordIdResponseProtoMsg): _66.QueryLastTokenizeShareRecordIdResponse;
                toProto(message: _66.QueryLastTokenizeShareRecordIdResponse): Uint8Array;
                toProtoMsg(message: _66.QueryLastTokenizeShareRecordIdResponse): _66.QueryLastTokenizeShareRecordIdResponseProtoMsg;
            };
            QueryTotalTokenizeSharedAssetsRequest: {
                typeUrl: string;
                encode(_: _66.QueryTotalTokenizeSharedAssetsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryTotalTokenizeSharedAssetsRequest;
                fromPartial(_: Partial<_66.QueryTotalTokenizeSharedAssetsRequest>): _66.QueryTotalTokenizeSharedAssetsRequest;
                fromAmino(_: _66.QueryTotalTokenizeSharedAssetsRequestAmino): _66.QueryTotalTokenizeSharedAssetsRequest;
                toAmino(_: _66.QueryTotalTokenizeSharedAssetsRequest): _66.QueryTotalTokenizeSharedAssetsRequestAmino;
                fromAminoMsg(object: _66.QueryTotalTokenizeSharedAssetsRequestAminoMsg): _66.QueryTotalTokenizeSharedAssetsRequest;
                toAminoMsg(message: _66.QueryTotalTokenizeSharedAssetsRequest): _66.QueryTotalTokenizeSharedAssetsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryTotalTokenizeSharedAssetsRequestProtoMsg): _66.QueryTotalTokenizeSharedAssetsRequest;
                toProto(message: _66.QueryTotalTokenizeSharedAssetsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryTotalTokenizeSharedAssetsRequest): _66.QueryTotalTokenizeSharedAssetsRequestProtoMsg;
            };
            QueryTotalTokenizeSharedAssetsResponse: {
                typeUrl: string;
                encode(message: _66.QueryTotalTokenizeSharedAssetsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryTotalTokenizeSharedAssetsResponse;
                fromPartial(object: Partial<_66.QueryTotalTokenizeSharedAssetsResponse>): _66.QueryTotalTokenizeSharedAssetsResponse;
                fromAmino(object: _66.QueryTotalTokenizeSharedAssetsResponseAmino): _66.QueryTotalTokenizeSharedAssetsResponse;
                toAmino(message: _66.QueryTotalTokenizeSharedAssetsResponse): _66.QueryTotalTokenizeSharedAssetsResponseAmino;
                fromAminoMsg(object: _66.QueryTotalTokenizeSharedAssetsResponseAminoMsg): _66.QueryTotalTokenizeSharedAssetsResponse;
                toAminoMsg(message: _66.QueryTotalTokenizeSharedAssetsResponse): _66.QueryTotalTokenizeSharedAssetsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryTotalTokenizeSharedAssetsResponseProtoMsg): _66.QueryTotalTokenizeSharedAssetsResponse;
                toProto(message: _66.QueryTotalTokenizeSharedAssetsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryTotalTokenizeSharedAssetsResponse): _66.QueryTotalTokenizeSharedAssetsResponseProtoMsg;
            };
            QueryTotalLiquidStaked: {
                typeUrl: string;
                encode(_: _66.QueryTotalLiquidStaked, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryTotalLiquidStaked;
                fromPartial(_: Partial<_66.QueryTotalLiquidStaked>): _66.QueryTotalLiquidStaked;
                fromAmino(_: _66.QueryTotalLiquidStakedAmino): _66.QueryTotalLiquidStaked;
                toAmino(_: _66.QueryTotalLiquidStaked): _66.QueryTotalLiquidStakedAmino;
                fromAminoMsg(object: _66.QueryTotalLiquidStakedAminoMsg): _66.QueryTotalLiquidStaked;
                toAminoMsg(message: _66.QueryTotalLiquidStaked): _66.QueryTotalLiquidStakedAminoMsg;
                fromProtoMsg(message: _66.QueryTotalLiquidStakedProtoMsg): _66.QueryTotalLiquidStaked;
                toProto(message: _66.QueryTotalLiquidStaked): Uint8Array;
                toProtoMsg(message: _66.QueryTotalLiquidStaked): _66.QueryTotalLiquidStakedProtoMsg;
            };
            QueryTotalLiquidStakedResponse: {
                typeUrl: string;
                encode(message: _66.QueryTotalLiquidStakedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryTotalLiquidStakedResponse;
                fromPartial(object: Partial<_66.QueryTotalLiquidStakedResponse>): _66.QueryTotalLiquidStakedResponse;
                fromAmino(object: _66.QueryTotalLiquidStakedResponseAmino): _66.QueryTotalLiquidStakedResponse;
                toAmino(message: _66.QueryTotalLiquidStakedResponse): _66.QueryTotalLiquidStakedResponseAmino;
                fromAminoMsg(object: _66.QueryTotalLiquidStakedResponseAminoMsg): _66.QueryTotalLiquidStakedResponse;
                toAminoMsg(message: _66.QueryTotalLiquidStakedResponse): _66.QueryTotalLiquidStakedResponseAminoMsg;
                fromProtoMsg(message: _66.QueryTotalLiquidStakedResponseProtoMsg): _66.QueryTotalLiquidStakedResponse;
                toProto(message: _66.QueryTotalLiquidStakedResponse): Uint8Array;
                toProtoMsg(message: _66.QueryTotalLiquidStakedResponse): _66.QueryTotalLiquidStakedResponseProtoMsg;
            };
            QueryTokenizeShareLockInfo: {
                typeUrl: string;
                encode(message: _66.QueryTokenizeShareLockInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryTokenizeShareLockInfo;
                fromPartial(object: Partial<_66.QueryTokenizeShareLockInfo>): _66.QueryTokenizeShareLockInfo;
                fromAmino(object: _66.QueryTokenizeShareLockInfoAmino): _66.QueryTokenizeShareLockInfo;
                toAmino(message: _66.QueryTokenizeShareLockInfo): _66.QueryTokenizeShareLockInfoAmino;
                fromAminoMsg(object: _66.QueryTokenizeShareLockInfoAminoMsg): _66.QueryTokenizeShareLockInfo;
                toAminoMsg(message: _66.QueryTokenizeShareLockInfo): _66.QueryTokenizeShareLockInfoAminoMsg;
                fromProtoMsg(message: _66.QueryTokenizeShareLockInfoProtoMsg): _66.QueryTokenizeShareLockInfo;
                toProto(message: _66.QueryTokenizeShareLockInfo): Uint8Array;
                toProtoMsg(message: _66.QueryTokenizeShareLockInfo): _66.QueryTokenizeShareLockInfoProtoMsg;
            };
            QueryTokenizeShareLockInfoResponse: {
                typeUrl: string;
                encode(message: _66.QueryTokenizeShareLockInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryTokenizeShareLockInfoResponse;
                fromPartial(object: Partial<_66.QueryTokenizeShareLockInfoResponse>): _66.QueryTokenizeShareLockInfoResponse;
                fromAmino(object: _66.QueryTokenizeShareLockInfoResponseAmino): _66.QueryTokenizeShareLockInfoResponse;
                toAmino(message: _66.QueryTokenizeShareLockInfoResponse): _66.QueryTokenizeShareLockInfoResponseAmino;
                fromAminoMsg(object: _66.QueryTokenizeShareLockInfoResponseAminoMsg): _66.QueryTokenizeShareLockInfoResponse;
                toAminoMsg(message: _66.QueryTokenizeShareLockInfoResponse): _66.QueryTokenizeShareLockInfoResponseAminoMsg;
                fromProtoMsg(message: _66.QueryTokenizeShareLockInfoResponseProtoMsg): _66.QueryTokenizeShareLockInfoResponse;
                toProto(message: _66.QueryTokenizeShareLockInfoResponse): Uint8Array;
                toProtoMsg(message: _66.QueryTokenizeShareLockInfoResponse): _66.QueryTokenizeShareLockInfoResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _64.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.GenesisState;
                fromPartial(object: Partial<_64.GenesisState>): _64.GenesisState;
                fromAmino(object: _64.GenesisStateAmino): _64.GenesisState;
                toAmino(message: _64.GenesisState): _64.GenesisStateAmino;
                fromAminoMsg(object: _64.GenesisStateAminoMsg): _64.GenesisState;
                toAminoMsg(message: _64.GenesisState): _64.GenesisStateAminoMsg;
                fromProtoMsg(message: _64.GenesisStateProtoMsg): _64.GenesisState;
                toProto(message: _64.GenesisState): Uint8Array;
                toProtoMsg(message: _64.GenesisState): _64.GenesisStateProtoMsg;
            };
            TokenizeShareLock: {
                typeUrl: string;
                encode(message: _64.TokenizeShareLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.TokenizeShareLock;
                fromPartial(object: Partial<_64.TokenizeShareLock>): _64.TokenizeShareLock;
                fromAmino(object: _64.TokenizeShareLockAmino): _64.TokenizeShareLock;
                toAmino(message: _64.TokenizeShareLock): _64.TokenizeShareLockAmino;
                fromAminoMsg(object: _64.TokenizeShareLockAminoMsg): _64.TokenizeShareLock;
                toAminoMsg(message: _64.TokenizeShareLock): _64.TokenizeShareLockAminoMsg;
                fromProtoMsg(message: _64.TokenizeShareLockProtoMsg): _64.TokenizeShareLock;
                toProto(message: _64.TokenizeShareLock): Uint8Array;
                toProtoMsg(message: _64.TokenizeShareLock): _64.TokenizeShareLockProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _64.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.LastValidatorPower;
                fromPartial(object: Partial<_64.LastValidatorPower>): _64.LastValidatorPower;
                fromAmino(object: _64.LastValidatorPowerAmino): _64.LastValidatorPower;
                toAmino(message: _64.LastValidatorPower): _64.LastValidatorPowerAmino;
                fromAminoMsg(object: _64.LastValidatorPowerAminoMsg): _64.LastValidatorPower;
                toAminoMsg(message: _64.LastValidatorPower): _64.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _64.LastValidatorPowerProtoMsg): _64.LastValidatorPower;
                toProto(message: _64.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _64.LastValidatorPower): _64.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _63.AuthorizationType;
            authorizationTypeToJSON(object: _63.AuthorizationType): string;
            AuthorizationType: typeof _63.AuthorizationType;
            AuthorizationTypeSDKType: typeof _63.AuthorizationType;
            AuthorizationTypeAmino: typeof _63.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _63.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.StakeAuthorization;
                fromPartial(object: Partial<_63.StakeAuthorization>): _63.StakeAuthorization;
                fromAmino(object: _63.StakeAuthorizationAmino): _63.StakeAuthorization;
                toAmino(message: _63.StakeAuthorization): _63.StakeAuthorizationAmino;
                fromAminoMsg(object: _63.StakeAuthorizationAminoMsg): _63.StakeAuthorization;
                toAminoMsg(message: _63.StakeAuthorization): _63.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _63.StakeAuthorizationProtoMsg): _63.StakeAuthorization;
                toProto(message: _63.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _63.StakeAuthorization): _63.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _63.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.StakeAuthorization_Validators;
                fromPartial(object: Partial<_63.StakeAuthorization_Validators>): _63.StakeAuthorization_Validators;
                fromAmino(object: _63.StakeAuthorization_ValidatorsAmino): _63.StakeAuthorization_Validators;
                toAmino(message: _63.StakeAuthorization_Validators): _63.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _63.StakeAuthorization_ValidatorsAminoMsg): _63.StakeAuthorization_Validators;
                toAminoMsg(message: _63.StakeAuthorization_Validators): _63.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _63.StakeAuthorization_ValidatorsProtoMsg): _63.StakeAuthorization_Validators;
                toProto(message: _63.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _63.StakeAuthorization_Validators): _63.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _69.SignMode;
                signModeToJSON(object: _69.SignMode): string;
                SignMode: typeof _69.SignMode;
                SignModeSDKType: typeof _69.SignMode;
                SignModeAmino: typeof _69.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _69.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.SignatureDescriptors;
                    fromPartial(object: Partial<_69.SignatureDescriptors>): _69.SignatureDescriptors;
                    fromAmino(object: _69.SignatureDescriptorsAmino): _69.SignatureDescriptors;
                    toAmino(message: _69.SignatureDescriptors): _69.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _69.SignatureDescriptorsAminoMsg): _69.SignatureDescriptors;
                    toAminoMsg(message: _69.SignatureDescriptors): _69.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _69.SignatureDescriptorsProtoMsg): _69.SignatureDescriptors;
                    toProto(message: _69.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _69.SignatureDescriptors): _69.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _69.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.SignatureDescriptor;
                    fromPartial(object: Partial<_69.SignatureDescriptor>): _69.SignatureDescriptor;
                    fromAmino(object: _69.SignatureDescriptorAmino): _69.SignatureDescriptor;
                    toAmino(message: _69.SignatureDescriptor): _69.SignatureDescriptorAmino;
                    fromAminoMsg(object: _69.SignatureDescriptorAminoMsg): _69.SignatureDescriptor;
                    toAminoMsg(message: _69.SignatureDescriptor): _69.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _69.SignatureDescriptorProtoMsg): _69.SignatureDescriptor;
                    toProto(message: _69.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _69.SignatureDescriptor): _69.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _69.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_69.SignatureDescriptor_Data>): _69.SignatureDescriptor_Data;
                    fromAmino(object: _69.SignatureDescriptor_DataAmino): _69.SignatureDescriptor_Data;
                    toAmino(message: _69.SignatureDescriptor_Data): _69.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _69.SignatureDescriptor_DataAminoMsg): _69.SignatureDescriptor_Data;
                    toAminoMsg(message: _69.SignatureDescriptor_Data): _69.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _69.SignatureDescriptor_DataProtoMsg): _69.SignatureDescriptor_Data;
                    toProto(message: _69.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _69.SignatureDescriptor_Data): _69.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _69.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_69.SignatureDescriptor_Data_Single>): _69.SignatureDescriptor_Data_Single;
                    fromAmino(object: _69.SignatureDescriptor_Data_SingleAmino): _69.SignatureDescriptor_Data_Single;
                    toAmino(message: _69.SignatureDescriptor_Data_Single): _69.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _69.SignatureDescriptor_Data_SingleAminoMsg): _69.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _69.SignatureDescriptor_Data_Single): _69.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _69.SignatureDescriptor_Data_SingleProtoMsg): _69.SignatureDescriptor_Data_Single;
                    toProto(message: _69.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _69.SignatureDescriptor_Data_Single): _69.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _69.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_69.SignatureDescriptor_Data_Multi>): _69.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _69.SignatureDescriptor_Data_MultiAmino): _69.SignatureDescriptor_Data_Multi;
                    toAmino(message: _69.SignatureDescriptor_Data_Multi): _69.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _69.SignatureDescriptor_Data_MultiAminoMsg): _69.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _69.SignatureDescriptor_Data_Multi): _69.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _69.SignatureDescriptor_Data_MultiProtoMsg): _69.SignatureDescriptor_Data_Multi;
                    toProto(message: _69.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _69.SignatureDescriptor_Data_Multi): _69.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _227.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _70.SimulateRequest): Promise<_70.SimulateResponse>;
                getTx(request: _70.GetTxRequest): Promise<_70.GetTxResponse>;
                broadcastTx(request: _70.BroadcastTxRequest): Promise<_70.BroadcastTxResponse>;
                getTxsEvent(request: _70.GetTxsEventRequest): Promise<_70.GetTxsEventResponse>;
                getBlockWithTxs(request: _70.GetBlockWithTxsRequest): Promise<_70.GetBlockWithTxsResponse>;
            };
            Tx: {
                typeUrl: string;
                encode(message: _71.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.Tx;
                fromPartial(object: Partial<_71.Tx>): _71.Tx;
                fromAmino(object: _71.TxAmino): _71.Tx;
                toAmino(message: _71.Tx): _71.TxAmino;
                fromAminoMsg(object: _71.TxAminoMsg): _71.Tx;
                toAminoMsg(message: _71.Tx): _71.TxAminoMsg;
                fromProtoMsg(message: _71.TxProtoMsg): _71.Tx;
                toProto(message: _71.Tx): Uint8Array;
                toProtoMsg(message: _71.Tx): _71.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _71.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.TxRaw;
                fromPartial(object: Partial<_71.TxRaw>): _71.TxRaw;
                fromAmino(object: _71.TxRawAmino): _71.TxRaw;
                toAmino(message: _71.TxRaw): _71.TxRawAmino;
                fromAminoMsg(object: _71.TxRawAminoMsg): _71.TxRaw;
                toAminoMsg(message: _71.TxRaw): _71.TxRawAminoMsg;
                fromProtoMsg(message: _71.TxRawProtoMsg): _71.TxRaw;
                toProto(message: _71.TxRaw): Uint8Array;
                toProtoMsg(message: _71.TxRaw): _71.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _71.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.SignDoc;
                fromPartial(object: Partial<_71.SignDoc>): _71.SignDoc;
                fromAmino(object: _71.SignDocAmino): _71.SignDoc;
                toAmino(message: _71.SignDoc): _71.SignDocAmino;
                fromAminoMsg(object: _71.SignDocAminoMsg): _71.SignDoc;
                toAminoMsg(message: _71.SignDoc): _71.SignDocAminoMsg;
                fromProtoMsg(message: _71.SignDocProtoMsg): _71.SignDoc;
                toProto(message: _71.SignDoc): Uint8Array;
                toProtoMsg(message: _71.SignDoc): _71.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _71.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.TxBody;
                fromPartial(object: Partial<_71.TxBody>): _71.TxBody;
                fromAmino(object: _71.TxBodyAmino): _71.TxBody;
                toAmino(message: _71.TxBody): _71.TxBodyAmino;
                fromAminoMsg(object: _71.TxBodyAminoMsg): _71.TxBody;
                toAminoMsg(message: _71.TxBody): _71.TxBodyAminoMsg;
                fromProtoMsg(message: _71.TxBodyProtoMsg): _71.TxBody;
                toProto(message: _71.TxBody): Uint8Array;
                toProtoMsg(message: _71.TxBody): _71.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _71.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.AuthInfo;
                fromPartial(object: Partial<_71.AuthInfo>): _71.AuthInfo;
                fromAmino(object: _71.AuthInfoAmino): _71.AuthInfo;
                toAmino(message: _71.AuthInfo): _71.AuthInfoAmino;
                fromAminoMsg(object: _71.AuthInfoAminoMsg): _71.AuthInfo;
                toAminoMsg(message: _71.AuthInfo): _71.AuthInfoAminoMsg;
                fromProtoMsg(message: _71.AuthInfoProtoMsg): _71.AuthInfo;
                toProto(message: _71.AuthInfo): Uint8Array;
                toProtoMsg(message: _71.AuthInfo): _71.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _71.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.SignerInfo;
                fromPartial(object: Partial<_71.SignerInfo>): _71.SignerInfo;
                fromAmino(object: _71.SignerInfoAmino): _71.SignerInfo;
                toAmino(message: _71.SignerInfo): _71.SignerInfoAmino;
                fromAminoMsg(object: _71.SignerInfoAminoMsg): _71.SignerInfo;
                toAminoMsg(message: _71.SignerInfo): _71.SignerInfoAminoMsg;
                fromProtoMsg(message: _71.SignerInfoProtoMsg): _71.SignerInfo;
                toProto(message: _71.SignerInfo): Uint8Array;
                toProtoMsg(message: _71.SignerInfo): _71.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _71.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.ModeInfo;
                fromPartial(object: Partial<_71.ModeInfo>): _71.ModeInfo;
                fromAmino(object: _71.ModeInfoAmino): _71.ModeInfo;
                toAmino(message: _71.ModeInfo): _71.ModeInfoAmino;
                fromAminoMsg(object: _71.ModeInfoAminoMsg): _71.ModeInfo;
                toAminoMsg(message: _71.ModeInfo): _71.ModeInfoAminoMsg;
                fromProtoMsg(message: _71.ModeInfoProtoMsg): _71.ModeInfo;
                toProto(message: _71.ModeInfo): Uint8Array;
                toProtoMsg(message: _71.ModeInfo): _71.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _71.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.ModeInfo_Single;
                fromPartial(object: Partial<_71.ModeInfo_Single>): _71.ModeInfo_Single;
                fromAmino(object: _71.ModeInfo_SingleAmino): _71.ModeInfo_Single;
                toAmino(message: _71.ModeInfo_Single): _71.ModeInfo_SingleAmino;
                fromAminoMsg(object: _71.ModeInfo_SingleAminoMsg): _71.ModeInfo_Single;
                toAminoMsg(message: _71.ModeInfo_Single): _71.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _71.ModeInfo_SingleProtoMsg): _71.ModeInfo_Single;
                toProto(message: _71.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _71.ModeInfo_Single): _71.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _71.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.ModeInfo_Multi;
                fromPartial(object: Partial<_71.ModeInfo_Multi>): _71.ModeInfo_Multi;
                fromAmino(object: _71.ModeInfo_MultiAmino): _71.ModeInfo_Multi;
                toAmino(message: _71.ModeInfo_Multi): _71.ModeInfo_MultiAmino;
                fromAminoMsg(object: _71.ModeInfo_MultiAminoMsg): _71.ModeInfo_Multi;
                toAminoMsg(message: _71.ModeInfo_Multi): _71.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _71.ModeInfo_MultiProtoMsg): _71.ModeInfo_Multi;
                toProto(message: _71.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _71.ModeInfo_Multi): _71.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _71.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.Fee;
                fromPartial(object: Partial<_71.Fee>): _71.Fee;
                fromAmino(object: _71.FeeAmino): _71.Fee;
                toAmino(message: _71.Fee): _71.FeeAmino;
                fromAminoMsg(object: _71.FeeAminoMsg): _71.Fee;
                toAminoMsg(message: _71.Fee): _71.FeeAminoMsg;
                fromProtoMsg(message: _71.FeeProtoMsg): _71.Fee;
                toProto(message: _71.Fee): Uint8Array;
                toProtoMsg(message: _71.Fee): _71.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _70.OrderBy;
            orderByToJSON(object: _70.OrderBy): string;
            broadcastModeFromJSON(object: any): _70.BroadcastMode;
            broadcastModeToJSON(object: _70.BroadcastMode): string;
            OrderBy: typeof _70.OrderBy;
            OrderBySDKType: typeof _70.OrderBy;
            OrderByAmino: typeof _70.OrderBy;
            BroadcastMode: typeof _70.BroadcastMode;
            BroadcastModeSDKType: typeof _70.BroadcastMode;
            BroadcastModeAmino: typeof _70.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _70.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.GetTxsEventRequest;
                fromPartial(object: Partial<_70.GetTxsEventRequest>): _70.GetTxsEventRequest;
                fromAmino(object: _70.GetTxsEventRequestAmino): _70.GetTxsEventRequest;
                toAmino(message: _70.GetTxsEventRequest): _70.GetTxsEventRequestAmino;
                fromAminoMsg(object: _70.GetTxsEventRequestAminoMsg): _70.GetTxsEventRequest;
                toAminoMsg(message: _70.GetTxsEventRequest): _70.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _70.GetTxsEventRequestProtoMsg): _70.GetTxsEventRequest;
                toProto(message: _70.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _70.GetTxsEventRequest): _70.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _70.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.GetTxsEventResponse;
                fromPartial(object: Partial<_70.GetTxsEventResponse>): _70.GetTxsEventResponse;
                fromAmino(object: _70.GetTxsEventResponseAmino): _70.GetTxsEventResponse;
                toAmino(message: _70.GetTxsEventResponse): _70.GetTxsEventResponseAmino;
                fromAminoMsg(object: _70.GetTxsEventResponseAminoMsg): _70.GetTxsEventResponse;
                toAminoMsg(message: _70.GetTxsEventResponse): _70.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _70.GetTxsEventResponseProtoMsg): _70.GetTxsEventResponse;
                toProto(message: _70.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _70.GetTxsEventResponse): _70.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _70.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.BroadcastTxRequest;
                fromPartial(object: Partial<_70.BroadcastTxRequest>): _70.BroadcastTxRequest;
                fromAmino(object: _70.BroadcastTxRequestAmino): _70.BroadcastTxRequest;
                toAmino(message: _70.BroadcastTxRequest): _70.BroadcastTxRequestAmino;
                fromAminoMsg(object: _70.BroadcastTxRequestAminoMsg): _70.BroadcastTxRequest;
                toAminoMsg(message: _70.BroadcastTxRequest): _70.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _70.BroadcastTxRequestProtoMsg): _70.BroadcastTxRequest;
                toProto(message: _70.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _70.BroadcastTxRequest): _70.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _70.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.BroadcastTxResponse;
                fromPartial(object: Partial<_70.BroadcastTxResponse>): _70.BroadcastTxResponse;
                fromAmino(object: _70.BroadcastTxResponseAmino): _70.BroadcastTxResponse;
                toAmino(message: _70.BroadcastTxResponse): _70.BroadcastTxResponseAmino;
                fromAminoMsg(object: _70.BroadcastTxResponseAminoMsg): _70.BroadcastTxResponse;
                toAminoMsg(message: _70.BroadcastTxResponse): _70.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _70.BroadcastTxResponseProtoMsg): _70.BroadcastTxResponse;
                toProto(message: _70.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _70.BroadcastTxResponse): _70.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _70.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.SimulateRequest;
                fromPartial(object: Partial<_70.SimulateRequest>): _70.SimulateRequest;
                fromAmino(object: _70.SimulateRequestAmino): _70.SimulateRequest;
                toAmino(message: _70.SimulateRequest): _70.SimulateRequestAmino;
                fromAminoMsg(object: _70.SimulateRequestAminoMsg): _70.SimulateRequest;
                toAminoMsg(message: _70.SimulateRequest): _70.SimulateRequestAminoMsg;
                fromProtoMsg(message: _70.SimulateRequestProtoMsg): _70.SimulateRequest;
                toProto(message: _70.SimulateRequest): Uint8Array;
                toProtoMsg(message: _70.SimulateRequest): _70.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _70.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.SimulateResponse;
                fromPartial(object: Partial<_70.SimulateResponse>): _70.SimulateResponse;
                fromAmino(object: _70.SimulateResponseAmino): _70.SimulateResponse;
                toAmino(message: _70.SimulateResponse): _70.SimulateResponseAmino;
                fromAminoMsg(object: _70.SimulateResponseAminoMsg): _70.SimulateResponse;
                toAminoMsg(message: _70.SimulateResponse): _70.SimulateResponseAminoMsg;
                fromProtoMsg(message: _70.SimulateResponseProtoMsg): _70.SimulateResponse;
                toProto(message: _70.SimulateResponse): Uint8Array;
                toProtoMsg(message: _70.SimulateResponse): _70.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _70.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.GetTxRequest;
                fromPartial(object: Partial<_70.GetTxRequest>): _70.GetTxRequest;
                fromAmino(object: _70.GetTxRequestAmino): _70.GetTxRequest;
                toAmino(message: _70.GetTxRequest): _70.GetTxRequestAmino;
                fromAminoMsg(object: _70.GetTxRequestAminoMsg): _70.GetTxRequest;
                toAminoMsg(message: _70.GetTxRequest): _70.GetTxRequestAminoMsg;
                fromProtoMsg(message: _70.GetTxRequestProtoMsg): _70.GetTxRequest;
                toProto(message: _70.GetTxRequest): Uint8Array;
                toProtoMsg(message: _70.GetTxRequest): _70.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _70.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.GetTxResponse;
                fromPartial(object: Partial<_70.GetTxResponse>): _70.GetTxResponse;
                fromAmino(object: _70.GetTxResponseAmino): _70.GetTxResponse;
                toAmino(message: _70.GetTxResponse): _70.GetTxResponseAmino;
                fromAminoMsg(object: _70.GetTxResponseAminoMsg): _70.GetTxResponse;
                toAminoMsg(message: _70.GetTxResponse): _70.GetTxResponseAminoMsg;
                fromProtoMsg(message: _70.GetTxResponseProtoMsg): _70.GetTxResponse;
                toProto(message: _70.GetTxResponse): Uint8Array;
                toProtoMsg(message: _70.GetTxResponse): _70.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _70.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_70.GetBlockWithTxsRequest>): _70.GetBlockWithTxsRequest;
                fromAmino(object: _70.GetBlockWithTxsRequestAmino): _70.GetBlockWithTxsRequest;
                toAmino(message: _70.GetBlockWithTxsRequest): _70.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _70.GetBlockWithTxsRequestAminoMsg): _70.GetBlockWithTxsRequest;
                toAminoMsg(message: _70.GetBlockWithTxsRequest): _70.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _70.GetBlockWithTxsRequestProtoMsg): _70.GetBlockWithTxsRequest;
                toProto(message: _70.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _70.GetBlockWithTxsRequest): _70.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _70.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_70.GetBlockWithTxsResponse>): _70.GetBlockWithTxsResponse;
                fromAmino(object: _70.GetBlockWithTxsResponseAmino): _70.GetBlockWithTxsResponse;
                toAmino(message: _70.GetBlockWithTxsResponse): _70.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _70.GetBlockWithTxsResponseAminoMsg): _70.GetBlockWithTxsResponse;
                toAminoMsg(message: _70.GetBlockWithTxsResponse): _70.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _70.GetBlockWithTxsResponseProtoMsg): _70.GetBlockWithTxsResponse;
                toProto(message: _70.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _70.GetBlockWithTxsResponse): _70.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _228.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _72.QueryCurrentPlanRequest): Promise<_72.QueryCurrentPlanResponse>;
                appliedPlan(request: _72.QueryAppliedPlanRequest): Promise<_72.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _72.QueryUpgradedConsensusStateRequest): Promise<_72.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _72.QueryModuleVersionsRequest): Promise<_72.QueryModuleVersionsResponse>;
            };
            Plan: {
                typeUrl: string;
                encode(message: _73.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.Plan;
                fromPartial(object: Partial<_73.Plan>): _73.Plan;
                fromAmino(object: _73.PlanAmino): _73.Plan;
                toAmino(message: _73.Plan): _73.PlanAmino;
                fromAminoMsg(object: _73.PlanAminoMsg): _73.Plan;
                toAminoMsg(message: _73.Plan): _73.PlanAminoMsg;
                fromProtoMsg(message: _73.PlanProtoMsg): _73.Plan;
                toProto(message: _73.Plan): Uint8Array;
                toProtoMsg(message: _73.Plan): _73.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _73.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_73.SoftwareUpgradeProposal>): _73.SoftwareUpgradeProposal;
                fromAmino(object: _73.SoftwareUpgradeProposalAmino): _73.SoftwareUpgradeProposal;
                toAmino(message: _73.SoftwareUpgradeProposal): _73.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _73.SoftwareUpgradeProposalAminoMsg): _73.SoftwareUpgradeProposal;
                toAminoMsg(message: _73.SoftwareUpgradeProposal): _73.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _73.SoftwareUpgradeProposalProtoMsg): _73.SoftwareUpgradeProposal;
                toProto(message: _73.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _73.SoftwareUpgradeProposal): _73.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _73.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_73.CancelSoftwareUpgradeProposal>): _73.CancelSoftwareUpgradeProposal;
                fromAmino(object: _73.CancelSoftwareUpgradeProposalAmino): _73.CancelSoftwareUpgradeProposal;
                toAmino(message: _73.CancelSoftwareUpgradeProposal): _73.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _73.CancelSoftwareUpgradeProposalAminoMsg): _73.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _73.CancelSoftwareUpgradeProposal): _73.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _73.CancelSoftwareUpgradeProposalProtoMsg): _73.CancelSoftwareUpgradeProposal;
                toProto(message: _73.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _73.CancelSoftwareUpgradeProposal): _73.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _73.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.ModuleVersion;
                fromPartial(object: Partial<_73.ModuleVersion>): _73.ModuleVersion;
                fromAmino(object: _73.ModuleVersionAmino): _73.ModuleVersion;
                toAmino(message: _73.ModuleVersion): _73.ModuleVersionAmino;
                fromAminoMsg(object: _73.ModuleVersionAminoMsg): _73.ModuleVersion;
                toAminoMsg(message: _73.ModuleVersion): _73.ModuleVersionAminoMsg;
                fromProtoMsg(message: _73.ModuleVersionProtoMsg): _73.ModuleVersion;
                toProto(message: _73.ModuleVersion): Uint8Array;
                toProtoMsg(message: _73.ModuleVersion): _73.ModuleVersionProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _72.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_72.QueryCurrentPlanRequest>): _72.QueryCurrentPlanRequest;
                fromAmino(_: _72.QueryCurrentPlanRequestAmino): _72.QueryCurrentPlanRequest;
                toAmino(_: _72.QueryCurrentPlanRequest): _72.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _72.QueryCurrentPlanRequestAminoMsg): _72.QueryCurrentPlanRequest;
                toAminoMsg(message: _72.QueryCurrentPlanRequest): _72.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _72.QueryCurrentPlanRequestProtoMsg): _72.QueryCurrentPlanRequest;
                toProto(message: _72.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _72.QueryCurrentPlanRequest): _72.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _72.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_72.QueryCurrentPlanResponse>): _72.QueryCurrentPlanResponse;
                fromAmino(object: _72.QueryCurrentPlanResponseAmino): _72.QueryCurrentPlanResponse;
                toAmino(message: _72.QueryCurrentPlanResponse): _72.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _72.QueryCurrentPlanResponseAminoMsg): _72.QueryCurrentPlanResponse;
                toAminoMsg(message: _72.QueryCurrentPlanResponse): _72.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _72.QueryCurrentPlanResponseProtoMsg): _72.QueryCurrentPlanResponse;
                toProto(message: _72.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _72.QueryCurrentPlanResponse): _72.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _72.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_72.QueryAppliedPlanRequest>): _72.QueryAppliedPlanRequest;
                fromAmino(object: _72.QueryAppliedPlanRequestAmino): _72.QueryAppliedPlanRequest;
                toAmino(message: _72.QueryAppliedPlanRequest): _72.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _72.QueryAppliedPlanRequestAminoMsg): _72.QueryAppliedPlanRequest;
                toAminoMsg(message: _72.QueryAppliedPlanRequest): _72.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _72.QueryAppliedPlanRequestProtoMsg): _72.QueryAppliedPlanRequest;
                toProto(message: _72.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _72.QueryAppliedPlanRequest): _72.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _72.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_72.QueryAppliedPlanResponse>): _72.QueryAppliedPlanResponse;
                fromAmino(object: _72.QueryAppliedPlanResponseAmino): _72.QueryAppliedPlanResponse;
                toAmino(message: _72.QueryAppliedPlanResponse): _72.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _72.QueryAppliedPlanResponseAminoMsg): _72.QueryAppliedPlanResponse;
                toAminoMsg(message: _72.QueryAppliedPlanResponse): _72.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _72.QueryAppliedPlanResponseProtoMsg): _72.QueryAppliedPlanResponse;
                toProto(message: _72.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _72.QueryAppliedPlanResponse): _72.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _72.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_72.QueryUpgradedConsensusStateRequest>): _72.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _72.QueryUpgradedConsensusStateRequestAmino): _72.QueryUpgradedConsensusStateRequest;
                toAmino(message: _72.QueryUpgradedConsensusStateRequest): _72.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _72.QueryUpgradedConsensusStateRequestAminoMsg): _72.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _72.QueryUpgradedConsensusStateRequest): _72.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _72.QueryUpgradedConsensusStateRequestProtoMsg): _72.QueryUpgradedConsensusStateRequest;
                toProto(message: _72.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _72.QueryUpgradedConsensusStateRequest): _72.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _72.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_72.QueryUpgradedConsensusStateResponse>): _72.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _72.QueryUpgradedConsensusStateResponseAmino): _72.QueryUpgradedConsensusStateResponse;
                toAmino(message: _72.QueryUpgradedConsensusStateResponse): _72.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _72.QueryUpgradedConsensusStateResponseAminoMsg): _72.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _72.QueryUpgradedConsensusStateResponse): _72.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _72.QueryUpgradedConsensusStateResponseProtoMsg): _72.QueryUpgradedConsensusStateResponse;
                toProto(message: _72.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _72.QueryUpgradedConsensusStateResponse): _72.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _72.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_72.QueryModuleVersionsRequest>): _72.QueryModuleVersionsRequest;
                fromAmino(object: _72.QueryModuleVersionsRequestAmino): _72.QueryModuleVersionsRequest;
                toAmino(message: _72.QueryModuleVersionsRequest): _72.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _72.QueryModuleVersionsRequestAminoMsg): _72.QueryModuleVersionsRequest;
                toAminoMsg(message: _72.QueryModuleVersionsRequest): _72.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _72.QueryModuleVersionsRequestProtoMsg): _72.QueryModuleVersionsRequest;
                toProto(message: _72.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _72.QueryModuleVersionsRequest): _72.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _72.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_72.QueryModuleVersionsResponse>): _72.QueryModuleVersionsResponse;
                fromAmino(object: _72.QueryModuleVersionsResponseAmino): _72.QueryModuleVersionsResponse;
                toAmino(message: _72.QueryModuleVersionsResponse): _72.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _72.QueryModuleVersionsResponseAminoMsg): _72.QueryModuleVersionsResponse;
                toAminoMsg(message: _72.QueryModuleVersionsResponse): _72.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _72.QueryModuleVersionsResponseProtoMsg): _72.QueryModuleVersionsResponse;
                toProto(message: _72.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _72.QueryModuleVersionsResponse): _72.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _238.MsgClientImpl;
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _74.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _74.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _74.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _74.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _74.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _74.MsgCreateVestingAccount) => _74.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _74.MsgCreateVestingAccountAmino) => _74.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _75.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.BaseVestingAccount;
                fromPartial(object: Partial<_75.BaseVestingAccount>): _75.BaseVestingAccount;
                fromAmino(object: _75.BaseVestingAccountAmino): _75.BaseVestingAccount;
                toAmino(message: _75.BaseVestingAccount): _75.BaseVestingAccountAmino;
                fromAminoMsg(object: _75.BaseVestingAccountAminoMsg): _75.BaseVestingAccount;
                toAminoMsg(message: _75.BaseVestingAccount): _75.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _75.BaseVestingAccountProtoMsg): _75.BaseVestingAccount;
                toProto(message: _75.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _75.BaseVestingAccount): _75.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _75.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.ContinuousVestingAccount;
                fromPartial(object: Partial<_75.ContinuousVestingAccount>): _75.ContinuousVestingAccount;
                fromAmino(object: _75.ContinuousVestingAccountAmino): _75.ContinuousVestingAccount;
                toAmino(message: _75.ContinuousVestingAccount): _75.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _75.ContinuousVestingAccountAminoMsg): _75.ContinuousVestingAccount;
                toAminoMsg(message: _75.ContinuousVestingAccount): _75.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _75.ContinuousVestingAccountProtoMsg): _75.ContinuousVestingAccount;
                toProto(message: _75.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _75.ContinuousVestingAccount): _75.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _75.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.DelayedVestingAccount;
                fromPartial(object: Partial<_75.DelayedVestingAccount>): _75.DelayedVestingAccount;
                fromAmino(object: _75.DelayedVestingAccountAmino): _75.DelayedVestingAccount;
                toAmino(message: _75.DelayedVestingAccount): _75.DelayedVestingAccountAmino;
                fromAminoMsg(object: _75.DelayedVestingAccountAminoMsg): _75.DelayedVestingAccount;
                toAminoMsg(message: _75.DelayedVestingAccount): _75.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _75.DelayedVestingAccountProtoMsg): _75.DelayedVestingAccount;
                toProto(message: _75.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _75.DelayedVestingAccount): _75.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _75.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.Period;
                fromPartial(object: Partial<_75.Period>): _75.Period;
                fromAmino(object: _75.PeriodAmino): _75.Period;
                toAmino(message: _75.Period): _75.PeriodAmino;
                fromAminoMsg(object: _75.PeriodAminoMsg): _75.Period;
                toAminoMsg(message: _75.Period): _75.PeriodAminoMsg;
                fromProtoMsg(message: _75.PeriodProtoMsg): _75.Period;
                toProto(message: _75.Period): Uint8Array;
                toProtoMsg(message: _75.Period): _75.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _75.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.PeriodicVestingAccount;
                fromPartial(object: Partial<_75.PeriodicVestingAccount>): _75.PeriodicVestingAccount;
                fromAmino(object: _75.PeriodicVestingAccountAmino): _75.PeriodicVestingAccount;
                toAmino(message: _75.PeriodicVestingAccount): _75.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _75.PeriodicVestingAccountAminoMsg): _75.PeriodicVestingAccount;
                toAminoMsg(message: _75.PeriodicVestingAccount): _75.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _75.PeriodicVestingAccountProtoMsg): _75.PeriodicVestingAccount;
                toProto(message: _75.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _75.PeriodicVestingAccount): _75.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _75.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.PermanentLockedAccount;
                fromPartial(object: Partial<_75.PermanentLockedAccount>): _75.PermanentLockedAccount;
                fromAmino(object: _75.PermanentLockedAccountAmino): _75.PermanentLockedAccount;
                toAmino(message: _75.PermanentLockedAccount): _75.PermanentLockedAccountAmino;
                fromAminoMsg(object: _75.PermanentLockedAccountAminoMsg): _75.PermanentLockedAccount;
                toAminoMsg(message: _75.PermanentLockedAccount): _75.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _75.PermanentLockedAccountProtoMsg): _75.PermanentLockedAccount;
                toProto(message: _75.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _75.PermanentLockedAccount): _75.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _74.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.MsgCreateVestingAccount;
                fromPartial(object: Partial<_74.MsgCreateVestingAccount>): _74.MsgCreateVestingAccount;
                fromAmino(object: _74.MsgCreateVestingAccountAmino): _74.MsgCreateVestingAccount;
                toAmino(message: _74.MsgCreateVestingAccount): _74.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _74.MsgCreateVestingAccountAminoMsg): _74.MsgCreateVestingAccount;
                toAminoMsg(message: _74.MsgCreateVestingAccount): _74.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _74.MsgCreateVestingAccountProtoMsg): _74.MsgCreateVestingAccount;
                toProto(message: _74.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _74.MsgCreateVestingAccount): _74.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _74.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_74.MsgCreateVestingAccountResponse>): _74.MsgCreateVestingAccountResponse;
                fromAmino(_: _74.MsgCreateVestingAccountResponseAmino): _74.MsgCreateVestingAccountResponse;
                toAmino(_: _74.MsgCreateVestingAccountResponse): _74.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _74.MsgCreateVestingAccountResponseAminoMsg): _74.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _74.MsgCreateVestingAccountResponse): _74.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _74.MsgCreateVestingAccountResponseProtoMsg): _74.MsgCreateVestingAccountResponse;
                toProto(message: _74.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _74.MsgCreateVestingAccountResponse): _74.MsgCreateVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _229.MsgClientImpl;
                };
                bank: {
                    v1beta1: _230.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _231.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _232.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _233.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _234.MsgClientImpl;
                };
                gov: {
                    v1beta1: _235.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _236.MsgClientImpl;
                };
                staking: {
                    v1beta1: _237.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _238.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _5.QueryAccountsRequest): Promise<_5.QueryAccountsResponse>;
                        account(request: _5.QueryAccountRequest): Promise<_5.QueryAccountResponse>;
                        params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
                        moduleAccountByName(request: _5.QueryModuleAccountByNameRequest): Promise<_5.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _9.QueryGrantsRequest): Promise<_9.QueryGrantsResponse>;
                        granterGrants(request: _9.QueryGranterGrantsRequest): Promise<_9.QueryGranterGrantsResponse>;
                        granteeGrants(request: _9.QueryGranteeGrantsRequest): Promise<_9.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _14.QueryBalanceRequest): Promise<_14.QueryBalanceResponse>;
                        allBalances(request: _14.QueryAllBalancesRequest): Promise<_14.QueryAllBalancesResponse>;
                        spendableBalances(request: _14.QuerySpendableBalancesRequest): Promise<_14.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _14.QueryTotalSupplyRequest): Promise<_14.QueryTotalSupplyResponse>;
                        supplyOf(request: _14.QuerySupplyOfRequest): Promise<_14.QuerySupplyOfResponse>;
                        params(request?: _14.QueryParamsRequest): Promise<_14.QueryParamsResponse>;
                        denomMetadata(request: _14.QueryDenomMetadataRequest): Promise<_14.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _14.QueryDenomsMetadataRequest): Promise<_14.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _18.ConfigRequest): Promise<_18.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _25.GetNodeInfoRequest): Promise<_25.GetNodeInfoResponse>;
                            getSyncing(request?: _25.GetSyncingRequest): Promise<_25.GetSyncingResponse>;
                            getLatestBlock(request?: _25.GetLatestBlockRequest): Promise<_25.GetLatestBlockResponse>;
                            getBlockByHeight(request: _25.GetBlockByHeightRequest): Promise<_25.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _25.GetLatestValidatorSetRequest): Promise<_25.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _25.GetValidatorSetByHeightRequest): Promise<_25.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _37.QueryParamsRequest): Promise<_37.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _37.QueryValidatorOutstandingRewardsRequest): Promise<_37.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _37.QueryValidatorCommissionRequest): Promise<_37.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _37.QueryValidatorSlashesRequest): Promise<_37.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _37.QueryDelegationRewardsRequest): Promise<_37.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _37.QueryDelegationTotalRewardsRequest): Promise<_37.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _37.QueryDelegatorValidatorsRequest): Promise<_37.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _37.QueryDelegatorWithdrawAddressRequest): Promise<_37.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _37.QueryCommunityPoolRequest): Promise<_37.QueryCommunityPoolResponse>;
                        tokenizeShareRecordReward(request: _37.QueryTokenizeShareRecordRewardRequest): Promise<_37.QueryTokenizeShareRecordRewardResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _41.QueryEvidenceRequest): Promise<_41.QueryEvidenceResponse>;
                        allEvidence(request?: _41.QueryAllEvidenceRequest): Promise<_41.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _45.QueryAllowanceRequest): Promise<_45.QueryAllowanceResponse>;
                        allowances(request: _45.QueryAllowancesRequest): Promise<_45.QueryAllowancesResponse>;
                        allowancesByGranter(request: _45.QueryAllowancesByGranterRequest): Promise<_45.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _50.QueryProposalRequest): Promise<_50.QueryProposalResponse>;
                        proposals(request: _50.QueryProposalsRequest): Promise<_50.QueryProposalsResponse>;
                        vote(request: _50.QueryVoteRequest): Promise<_50.QueryVoteResponse>;
                        votes(request: _50.QueryVotesRequest): Promise<_50.QueryVotesResponse>;
                        params(request: _50.QueryParamsRequest): Promise<_50.QueryParamsResponse>;
                        deposit(request: _50.QueryDepositRequest): Promise<_50.QueryDepositResponse>;
                        deposits(request: _50.QueryDepositsRequest): Promise<_50.QueryDepositsResponse>;
                        tallyResult(request: _50.QueryTallyResultRequest): Promise<_50.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                        inflation(request?: _55.QueryInflationRequest): Promise<_55.QueryInflationResponse>;
                        annualProvisions(request?: _55.QueryAnnualProvisionsRequest): Promise<_55.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                        signingInfo(request: _60.QuerySigningInfoRequest): Promise<_60.QuerySigningInfoResponse>;
                        signingInfos(request?: _60.QuerySigningInfosRequest): Promise<_60.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _66.QueryValidatorsRequest): Promise<_66.QueryValidatorsResponse>;
                        validator(request: _66.QueryValidatorRequest): Promise<_66.QueryValidatorResponse>;
                        validatorDelegations(request: _66.QueryValidatorDelegationsRequest): Promise<_66.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _66.QueryValidatorUnbondingDelegationsRequest): Promise<_66.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _66.QueryDelegationRequest): Promise<_66.QueryDelegationResponse>;
                        unbondingDelegation(request: _66.QueryUnbondingDelegationRequest): Promise<_66.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _66.QueryDelegatorDelegationsRequest): Promise<_66.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _66.QueryDelegatorUnbondingDelegationsRequest): Promise<_66.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _66.QueryRedelegationsRequest): Promise<_66.QueryRedelegationsResponse>;
                        delegatorValidators(request: _66.QueryDelegatorValidatorsRequest): Promise<_66.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _66.QueryDelegatorValidatorRequest): Promise<_66.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _66.QueryHistoricalInfoRequest): Promise<_66.QueryHistoricalInfoResponse>;
                        pool(request?: _66.QueryPoolRequest): Promise<_66.QueryPoolResponse>;
                        params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                        tokenizeShareRecordById(request: _66.QueryTokenizeShareRecordByIdRequest): Promise<_66.QueryTokenizeShareRecordByIdResponse>;
                        tokenizeShareRecordByDenom(request: _66.QueryTokenizeShareRecordByDenomRequest): Promise<_66.QueryTokenizeShareRecordByDenomResponse>;
                        tokenizeShareRecordsOwned(request: _66.QueryTokenizeShareRecordsOwnedRequest): Promise<_66.QueryTokenizeShareRecordsOwnedResponse>;
                        allTokenizeShareRecords(request?: _66.QueryAllTokenizeShareRecordsRequest): Promise<_66.QueryAllTokenizeShareRecordsResponse>;
                        lastTokenizeShareRecordId(request?: _66.QueryLastTokenizeShareRecordIdRequest): Promise<_66.QueryLastTokenizeShareRecordIdResponse>;
                        totalTokenizeSharedAssets(request?: _66.QueryTotalTokenizeSharedAssetsRequest): Promise<_66.QueryTotalTokenizeSharedAssetsResponse>;
                        totalLiquidStaked(request?: _66.QueryTotalLiquidStaked): Promise<_66.QueryTotalLiquidStakedResponse>;
                        tokenizeShareLockInfo(request: _66.QueryTokenizeShareLockInfo): Promise<_66.QueryTokenizeShareLockInfoResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _70.SimulateRequest): Promise<_70.SimulateResponse>;
                        getTx(request: _70.GetTxRequest): Promise<_70.GetTxResponse>;
                        broadcastTx(request: _70.BroadcastTxRequest): Promise<_70.BroadcastTxResponse>;
                        getTxsEvent(request: _70.GetTxsEventRequest): Promise<_70.GetTxsEventResponse>;
                        getBlockWithTxs(request: _70.GetBlockWithTxsRequest): Promise<_70.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _72.QueryCurrentPlanRequest): Promise<_72.QueryCurrentPlanResponse>;
                        appliedPlan(request: _72.QueryAppliedPlanRequest): Promise<_72.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _72.QueryUpgradedConsensusStateRequest): Promise<_72.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _72.QueryModuleVersionsRequest): Promise<_72.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
    };
}
