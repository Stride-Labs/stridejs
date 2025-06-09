import * as _2 from "./app/runtime/v1alpha1/module";
import * as _3 from "./app/v1alpha1/config";
import * as _4 from "./app/v1alpha1/module";
import * as _5 from "./app/v1alpha1/query";
import * as _6 from "./auth/module/v1/module";
import * as _7 from "./auth/v1beta1/auth";
import * as _8 from "./auth/v1beta1/genesis";
import * as _9 from "./auth/v1beta1/query";
import * as _10 from "./auth/v1beta1/tx";
import * as _11 from "./authz/module/v1/module";
import * as _12 from "./authz/v1beta1/authz";
import * as _13 from "./authz/v1beta1/event";
import * as _14 from "./authz/v1beta1/genesis";
import * as _15 from "./authz/v1beta1/query";
import * as _16 from "./authz/v1beta1/tx";
import * as _17 from "./autocli/v1/options";
import * as _18 from "./autocli/v1/query";
import * as _19 from "./bank/module/v1/module";
import * as _20 from "./bank/v1beta1/authz";
import * as _21 from "./bank/v1beta1/bank";
import * as _22 from "./bank/v1beta1/genesis";
import * as _23 from "./bank/v1beta1/query";
import * as _24 from "./bank/v1beta1/tx";
import * as _25 from "./base/abci/v1beta1/abci";
import * as _26 from "./base/kv/v1beta1/kv";
import * as _27 from "./base/node/v1beta1/query";
import * as _28 from "./base/query/v1beta1/pagination";
import * as _29 from "./base/reflection/v1beta1/reflection";
import * as _30 from "./base/reflection/v2alpha1/reflection";
import * as _31 from "./base/snapshots/v1beta1/snapshot";
import * as _32 from "./base/store/v1beta1/commit_info";
import * as _33 from "./base/store/v1beta1/listening";
import * as _34 from "./base/tendermint/v1beta1/query";
import * as _35 from "./base/tendermint/v1beta1/types";
import * as _36 from "./base/v1beta1/coin";
import * as _37 from "./capability/module/v1/module";
import * as _38 from "./capability/v1beta1/capability";
import * as _39 from "./capability/v1beta1/genesis";
import * as _40 from "./consensus/module/v1/module";
import * as _41 from "./consensus/v1/query";
import * as _42 from "./consensus/v1/tx";
import * as _43 from "./crisis/module/v1/module";
import * as _44 from "./crisis/v1beta1/genesis";
import * as _45 from "./crisis/v1beta1/tx";
import * as _46 from "./crypto/ed25519/keys";
import * as _47 from "./crypto/hd/v1/hd";
import * as _48 from "./crypto/keyring/v1/record";
import * as _49 from "./crypto/multisig/keys";
import * as _50 from "./crypto/secp256k1/keys";
import * as _51 from "./crypto/secp256r1/keys";
import * as _52 from "./distribution/module/v1/module";
import * as _53 from "./distribution/v1beta1/distribution";
import * as _54 from "./distribution/v1beta1/genesis";
import * as _55 from "./distribution/v1beta1/query";
import * as _56 from "./distribution/v1beta1/tx";
import * as _57 from "./evidence/module/v1/module";
import * as _58 from "./evidence/v1beta1/evidence";
import * as _59 from "./evidence/v1beta1/genesis";
import * as _60 from "./evidence/v1beta1/query";
import * as _61 from "./evidence/v1beta1/tx";
import * as _62 from "./feegrant/module/v1/module";
import * as _63 from "./feegrant/v1beta1/feegrant";
import * as _64 from "./feegrant/v1beta1/genesis";
import * as _65 from "./feegrant/v1beta1/query";
import * as _66 from "./feegrant/v1beta1/tx";
import * as _67 from "./genutil/module/v1/module";
import * as _68 from "./genutil/v1beta1/genesis";
import * as _69 from "./gov/module/v1/module";
import * as _70 from "./gov/v1/genesis";
import * as _71 from "./gov/v1/gov";
import * as _72 from "./gov/v1/query";
import * as _73 from "./gov/v1/tx";
import * as _74 from "./gov/v1beta1/genesis";
import * as _75 from "./gov/v1beta1/gov";
import * as _76 from "./gov/v1beta1/query";
import * as _77 from "./gov/v1beta1/tx";
import * as _78 from "./group/module/v1/module";
import * as _79 from "./group/v1/events";
import * as _80 from "./group/v1/genesis";
import * as _81 from "./group/v1/query";
import * as _82 from "./group/v1/tx";
import * as _83 from "./group/v1/types";
import * as _84 from "./ics23/v1/proofs";
import * as _85 from "./mint/module/v1/module";
import * as _86 from "./mint/v1beta1/genesis";
import * as _87 from "./mint/v1beta1/mint";
import * as _88 from "./mint/v1beta1/query";
import * as _89 from "./mint/v1beta1/tx";
import * as _91 from "./nft/module/v1/module";
import * as _92 from "./nft/v1beta1/event";
import * as _93 from "./nft/v1beta1/genesis";
import * as _94 from "./nft/v1beta1/nft";
import * as _95 from "./nft/v1beta1/query";
import * as _96 from "./nft/v1beta1/tx";
import * as _97 from "./orm/module/v1alpha1/module";
import * as _98 from "./orm/query/v1alpha1/query";
import * as _99 from "./orm/v1/orm";
import * as _100 from "./orm/v1alpha1/schema";
import * as _101 from "./params/module/v1/module";
import * as _102 from "./params/v1beta1/params";
import * as _103 from "./params/v1beta1/query";
import * as _105 from "./reflection/v1/reflection";
import * as _106 from "./slashing/module/v1/module";
import * as _107 from "./slashing/v1beta1/genesis";
import * as _108 from "./slashing/v1beta1/query";
import * as _109 from "./slashing/v1beta1/slashing";
import * as _110 from "./slashing/v1beta1/tx";
import * as _111 from "./staking/module/v1/module";
import * as _112 from "./staking/v1beta1/authz";
import * as _113 from "./staking/v1beta1/genesis";
import * as _114 from "./staking/v1beta1/query";
import * as _115 from "./staking/v1beta1/staking";
import * as _116 from "./staking/v1beta1/tx";
import * as _117 from "./tx/config/v1/config";
import * as _118 from "./tx/signing/v1beta1/signing";
import * as _119 from "./tx/v1beta1/service";
import * as _120 from "./tx/v1beta1/tx";
import * as _121 from "./upgrade/module/v1/module";
import * as _122 from "./upgrade/v1beta1/query";
import * as _123 from "./upgrade/v1beta1/tx";
import * as _124 from "./upgrade/v1beta1/upgrade";
import * as _125 from "./vesting/module/v1/module";
import * as _126 from "./vesting/v1beta1/tx";
import * as _127 from "./vesting/v1beta1/vesting";
import * as _299 from "./app/v1alpha1/query.rpc.Query";
import * as _300 from "./auth/v1beta1/query.rpc.Query";
import * as _301 from "./authz/v1beta1/query.rpc.Query";
import * as _302 from "./autocli/v1/query.rpc.Query";
import * as _303 from "./bank/v1beta1/query.rpc.Query";
import * as _304 from "./base/node/v1beta1/query.rpc.Service";
import * as _305 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _306 from "./consensus/v1/query.rpc.Query";
import * as _307 from "./distribution/v1beta1/query.rpc.Query";
import * as _308 from "./evidence/v1beta1/query.rpc.Query";
import * as _309 from "./feegrant/v1beta1/query.rpc.Query";
import * as _310 from "./gov/v1/query.rpc.Query";
import * as _311 from "./gov/v1beta1/query.rpc.Query";
import * as _312 from "./group/v1/query.rpc.Query";
import * as _313 from "./mint/v1beta1/query.rpc.Query";
import * as _314 from "./nft/v1beta1/query.rpc.Query";
import * as _315 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _316 from "./params/v1beta1/query.rpc.Query";
import * as _317 from "./slashing/v1beta1/query.rpc.Query";
import * as _318 from "./staking/v1beta1/query.rpc.Query";
import * as _319 from "./tx/v1beta1/service.rpc.Service";
import * as _320 from "./upgrade/v1beta1/query.rpc.Query";
import * as _321 from "./auth/v1beta1/tx.rpc.msg";
import * as _322 from "./authz/v1beta1/tx.rpc.msg";
import * as _323 from "./bank/v1beta1/tx.rpc.msg";
import * as _324 from "./consensus/v1/tx.rpc.msg";
import * as _325 from "./crisis/v1beta1/tx.rpc.msg";
import * as _326 from "./distribution/v1beta1/tx.rpc.msg";
import * as _327 from "./evidence/v1beta1/tx.rpc.msg";
import * as _328 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _329 from "./gov/v1/tx.rpc.msg";
import * as _330 from "./gov/v1beta1/tx.rpc.msg";
import * as _331 from "./group/v1/tx.rpc.msg";
import * as _332 from "./mint/v1beta1/tx.rpc.msg";
import * as _333 from "./nft/v1beta1/tx.rpc.msg";
import * as _334 from "./slashing/v1beta1/tx.rpc.msg";
import * as _335 from "./staking/v1beta1/tx.rpc.msg";
import * as _336 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _337 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(message: _2.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _2.Module;
                    fromPartial(object: Partial<_2.Module>): _2.Module;
                    fromAmino(object: _2.ModuleAmino): _2.Module;
                    toAmino(message: _2.Module): _2.ModuleAmino;
                    fromAminoMsg(object: _2.ModuleAminoMsg): _2.Module;
                    toAminoMsg(message: _2.Module): _2.ModuleAminoMsg;
                    fromProtoMsg(message: _2.ModuleProtoMsg): _2.Module;
                    toProto(message: _2.Module): Uint8Array;
                    toProtoMsg(message: _2.Module): _2.ModuleProtoMsg;
                };
                StoreKeyConfig: {
                    typeUrl: string;
                    encode(message: _2.StoreKeyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _2.StoreKeyConfig;
                    fromPartial(object: Partial<_2.StoreKeyConfig>): _2.StoreKeyConfig;
                    fromAmino(object: _2.StoreKeyConfigAmino): _2.StoreKeyConfig;
                    toAmino(message: _2.StoreKeyConfig): _2.StoreKeyConfigAmino;
                    fromAminoMsg(object: _2.StoreKeyConfigAminoMsg): _2.StoreKeyConfig;
                    toAminoMsg(message: _2.StoreKeyConfig): _2.StoreKeyConfigAminoMsg;
                    fromProtoMsg(message: _2.StoreKeyConfigProtoMsg): _2.StoreKeyConfig;
                    toProto(message: _2.StoreKeyConfig): Uint8Array;
                    toProtoMsg(message: _2.StoreKeyConfig): _2.StoreKeyConfigProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _299.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _5.QueryConfigRequest): Promise<_5.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _5.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryConfigRequest;
                fromPartial(_: Partial<_5.QueryConfigRequest>): _5.QueryConfigRequest;
                fromAmino(_: _5.QueryConfigRequestAmino): _5.QueryConfigRequest;
                toAmino(_: _5.QueryConfigRequest): _5.QueryConfigRequestAmino;
                fromAminoMsg(object: _5.QueryConfigRequestAminoMsg): _5.QueryConfigRequest;
                toAminoMsg(message: _5.QueryConfigRequest): _5.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _5.QueryConfigRequestProtoMsg): _5.QueryConfigRequest;
                toProto(message: _5.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _5.QueryConfigRequest): _5.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _5.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryConfigResponse;
                fromPartial(object: Partial<_5.QueryConfigResponse>): _5.QueryConfigResponse;
                fromAmino(object: _5.QueryConfigResponseAmino): _5.QueryConfigResponse;
                toAmino(message: _5.QueryConfigResponse): _5.QueryConfigResponseAmino;
                fromAminoMsg(object: _5.QueryConfigResponseAminoMsg): _5.QueryConfigResponse;
                toAminoMsg(message: _5.QueryConfigResponse): _5.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _5.QueryConfigResponseProtoMsg): _5.QueryConfigResponse;
                toProto(message: _5.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _5.QueryConfigResponse): _5.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _4.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _4.ModuleDescriptor;
                fromPartial(object: Partial<_4.ModuleDescriptor>): _4.ModuleDescriptor;
                fromAmino(object: _4.ModuleDescriptorAmino): _4.ModuleDescriptor;
                toAmino(message: _4.ModuleDescriptor): _4.ModuleDescriptorAmino;
                fromAminoMsg(object: _4.ModuleDescriptorAminoMsg): _4.ModuleDescriptor;
                toAminoMsg(message: _4.ModuleDescriptor): _4.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _4.ModuleDescriptorProtoMsg): _4.ModuleDescriptor;
                toProto(message: _4.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _4.ModuleDescriptor): _4.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _4.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _4.PackageReference;
                fromPartial(object: Partial<_4.PackageReference>): _4.PackageReference;
                fromAmino(object: _4.PackageReferenceAmino): _4.PackageReference;
                toAmino(message: _4.PackageReference): _4.PackageReferenceAmino;
                fromAminoMsg(object: _4.PackageReferenceAminoMsg): _4.PackageReference;
                toAminoMsg(message: _4.PackageReference): _4.PackageReferenceAminoMsg;
                fromProtoMsg(message: _4.PackageReferenceProtoMsg): _4.PackageReference;
                toProto(message: _4.PackageReference): Uint8Array;
                toProtoMsg(message: _4.PackageReference): _4.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _4.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _4.MigrateFromInfo;
                fromPartial(object: Partial<_4.MigrateFromInfo>): _4.MigrateFromInfo;
                fromAmino(object: _4.MigrateFromInfoAmino): _4.MigrateFromInfo;
                toAmino(message: _4.MigrateFromInfo): _4.MigrateFromInfoAmino;
                fromAminoMsg(object: _4.MigrateFromInfoAminoMsg): _4.MigrateFromInfo;
                toAminoMsg(message: _4.MigrateFromInfo): _4.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _4.MigrateFromInfoProtoMsg): _4.MigrateFromInfo;
                toProto(message: _4.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _4.MigrateFromInfo): _4.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _3.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.Config;
                fromPartial(object: Partial<_3.Config>): _3.Config;
                fromAmino(object: _3.ConfigAmino): _3.Config;
                toAmino(message: _3.Config): _3.ConfigAmino;
                fromAminoMsg(object: _3.ConfigAminoMsg): _3.Config;
                toAminoMsg(message: _3.Config): _3.ConfigAminoMsg;
                fromProtoMsg(message: _3.ConfigProtoMsg): _3.Config;
                toProto(message: _3.Config): Uint8Array;
                toProtoMsg(message: _3.Config): _3.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _3.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.ModuleConfig;
                fromPartial(object: Partial<_3.ModuleConfig>): _3.ModuleConfig;
                fromAmino(object: _3.ModuleConfigAmino): _3.ModuleConfig;
                toAmino(message: _3.ModuleConfig): _3.ModuleConfigAmino;
                fromAminoMsg(object: _3.ModuleConfigAminoMsg): _3.ModuleConfig;
                toAminoMsg(message: _3.ModuleConfig): _3.ModuleConfigAminoMsg;
                fromProtoMsg(message: _3.ModuleConfigProtoMsg): _3.ModuleConfig;
                toProto(message: _3.ModuleConfig): Uint8Array;
                toProtoMsg(message: _3.ModuleConfig): _3.ModuleConfigProtoMsg;
            };
            GolangBinding: {
                typeUrl: string;
                encode(message: _3.GolangBinding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.GolangBinding;
                fromPartial(object: Partial<_3.GolangBinding>): _3.GolangBinding;
                fromAmino(object: _3.GolangBindingAmino): _3.GolangBinding;
                toAmino(message: _3.GolangBinding): _3.GolangBindingAmino;
                fromAminoMsg(object: _3.GolangBindingAminoMsg): _3.GolangBinding;
                toAminoMsg(message: _3.GolangBinding): _3.GolangBindingAminoMsg;
                fromProtoMsg(message: _3.GolangBindingProtoMsg): _3.GolangBinding;
                toProto(message: _3.GolangBinding): Uint8Array;
                toProtoMsg(message: _3.GolangBinding): _3.GolangBindingProtoMsg;
            };
        };
    }
    namespace auth {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _6.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _6.Module;
                    fromPartial(object: Partial<_6.Module>): _6.Module;
                    fromAmino(object: _6.ModuleAmino): _6.Module;
                    toAmino(message: _6.Module): _6.ModuleAmino;
                    fromAminoMsg(object: _6.ModuleAminoMsg): _6.Module;
                    toAminoMsg(message: _6.Module): _6.ModuleAminoMsg;
                    fromProtoMsg(message: _6.ModuleProtoMsg): _6.Module;
                    toProto(message: _6.Module): Uint8Array;
                    toProtoMsg(message: _6.Module): _6.ModuleProtoMsg;
                };
                ModuleAccountPermission: {
                    typeUrl: string;
                    encode(message: _6.ModuleAccountPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _6.ModuleAccountPermission;
                    fromPartial(object: Partial<_6.ModuleAccountPermission>): _6.ModuleAccountPermission;
                    fromAmino(object: _6.ModuleAccountPermissionAmino): _6.ModuleAccountPermission;
                    toAmino(message: _6.ModuleAccountPermission): _6.ModuleAccountPermissionAmino;
                    fromAminoMsg(object: _6.ModuleAccountPermissionAminoMsg): _6.ModuleAccountPermission;
                    toAminoMsg(message: _6.ModuleAccountPermission): _6.ModuleAccountPermissionAminoMsg;
                    fromProtoMsg(message: _6.ModuleAccountPermissionProtoMsg): _6.ModuleAccountPermission;
                    toProto(message: _6.ModuleAccountPermission): Uint8Array;
                    toProtoMsg(message: _6.ModuleAccountPermission): _6.ModuleAccountPermissionProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _321.MsgClientImpl;
            QueryClientImpl: typeof _300.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _9.QueryAccountsRequest): Promise<_9.QueryAccountsResponse>;
                account(request: _9.QueryAccountRequest): Promise<_9.QueryAccountResponse>;
                accountAddressByID(request: _9.QueryAccountAddressByIDRequest): Promise<_9.QueryAccountAddressByIDResponse>;
                params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
                moduleAccounts(request?: _9.QueryModuleAccountsRequest): Promise<_9.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _9.QueryModuleAccountByNameRequest): Promise<_9.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _9.Bech32PrefixRequest): Promise<_9.Bech32PrefixResponse>;
                addressBytesToString(request: _9.AddressBytesToStringRequest): Promise<_9.AddressBytesToStringResponse>;
                addressStringToBytes(request: _9.AddressStringToBytesRequest): Promise<_9.AddressStringToBytesResponse>;
                accountInfo(request: _9.QueryAccountInfoRequest): Promise<_9.QueryAccountInfoResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _10.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _10.MsgUpdateParams): {
                        typeUrl: string;
                        value: _10.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _10.MsgUpdateParams): {
                        typeUrl: string;
                        value: _10.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _10.MsgUpdateParams) => _10.MsgUpdateParamsAmino;
                    fromAmino: (object: _10.MsgUpdateParamsAmino) => _10.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _10.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgUpdateParams;
                fromPartial(object: Partial<_10.MsgUpdateParams>): _10.MsgUpdateParams;
                fromAmino(object: _10.MsgUpdateParamsAmino): _10.MsgUpdateParams;
                toAmino(message: _10.MsgUpdateParams): _10.MsgUpdateParamsAmino;
                fromAminoMsg(object: _10.MsgUpdateParamsAminoMsg): _10.MsgUpdateParams;
                toAminoMsg(message: _10.MsgUpdateParams): _10.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _10.MsgUpdateParamsProtoMsg): _10.MsgUpdateParams;
                toProto(message: _10.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _10.MsgUpdateParams): _10.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _10.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_10.MsgUpdateParamsResponse>): _10.MsgUpdateParamsResponse;
                fromAmino(_: _10.MsgUpdateParamsResponseAmino): _10.MsgUpdateParamsResponse;
                toAmino(_: _10.MsgUpdateParamsResponse): _10.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _10.MsgUpdateParamsResponseAminoMsg): _10.MsgUpdateParamsResponse;
                toAminoMsg(message: _10.MsgUpdateParamsResponse): _10.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _10.MsgUpdateParamsResponseProtoMsg): _10.MsgUpdateParamsResponse;
                toProto(message: _10.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _10.MsgUpdateParamsResponse): _10.MsgUpdateParamsResponseProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _9.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryAccountsRequest;
                fromPartial(object: Partial<_9.QueryAccountsRequest>): _9.QueryAccountsRequest;
                fromAmino(object: _9.QueryAccountsRequestAmino): _9.QueryAccountsRequest;
                toAmino(message: _9.QueryAccountsRequest): _9.QueryAccountsRequestAmino;
                fromAminoMsg(object: _9.QueryAccountsRequestAminoMsg): _9.QueryAccountsRequest;
                toAminoMsg(message: _9.QueryAccountsRequest): _9.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _9.QueryAccountsRequestProtoMsg): _9.QueryAccountsRequest;
                toProto(message: _9.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryAccountsRequest): _9.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _9.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryAccountsResponse;
                fromPartial(object: Partial<_9.QueryAccountsResponse>): _9.QueryAccountsResponse;
                fromAmino(object: _9.QueryAccountsResponseAmino): _9.QueryAccountsResponse;
                toAmino(message: _9.QueryAccountsResponse): _9.QueryAccountsResponseAmino;
                fromAminoMsg(object: _9.QueryAccountsResponseAminoMsg): _9.QueryAccountsResponse;
                toAminoMsg(message: _9.QueryAccountsResponse): _9.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _9.QueryAccountsResponseProtoMsg): _9.QueryAccountsResponse;
                toProto(message: _9.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryAccountsResponse): _9.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _9.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryAccountRequest;
                fromPartial(object: Partial<_9.QueryAccountRequest>): _9.QueryAccountRequest;
                fromAmino(object: _9.QueryAccountRequestAmino): _9.QueryAccountRequest;
                toAmino(message: _9.QueryAccountRequest): _9.QueryAccountRequestAmino;
                fromAminoMsg(object: _9.QueryAccountRequestAminoMsg): _9.QueryAccountRequest;
                toAminoMsg(message: _9.QueryAccountRequest): _9.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _9.QueryAccountRequestProtoMsg): _9.QueryAccountRequest;
                toProto(message: _9.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _9.QueryAccountRequest): _9.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _9.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryAccountResponse;
                fromPartial(object: Partial<_9.QueryAccountResponse>): _9.QueryAccountResponse;
                fromAmino(object: _9.QueryAccountResponseAmino): _9.QueryAccountResponse;
                toAmino(message: _9.QueryAccountResponse): _9.QueryAccountResponseAmino;
                fromAminoMsg(object: _9.QueryAccountResponseAminoMsg): _9.QueryAccountResponse;
                toAminoMsg(message: _9.QueryAccountResponse): _9.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _9.QueryAccountResponseProtoMsg): _9.QueryAccountResponse;
                toProto(message: _9.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _9.QueryAccountResponse): _9.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _9.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryParamsRequest;
                fromPartial(_: Partial<_9.QueryParamsRequest>): _9.QueryParamsRequest;
                fromAmino(_: _9.QueryParamsRequestAmino): _9.QueryParamsRequest;
                toAmino(_: _9.QueryParamsRequest): _9.QueryParamsRequestAmino;
                fromAminoMsg(object: _9.QueryParamsRequestAminoMsg): _9.QueryParamsRequest;
                toAminoMsg(message: _9.QueryParamsRequest): _9.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _9.QueryParamsRequestProtoMsg): _9.QueryParamsRequest;
                toProto(message: _9.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryParamsRequest): _9.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _9.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryParamsResponse;
                fromPartial(object: Partial<_9.QueryParamsResponse>): _9.QueryParamsResponse;
                fromAmino(object: _9.QueryParamsResponseAmino): _9.QueryParamsResponse;
                toAmino(message: _9.QueryParamsResponse): _9.QueryParamsResponseAmino;
                fromAminoMsg(object: _9.QueryParamsResponseAminoMsg): _9.QueryParamsResponse;
                toAminoMsg(message: _9.QueryParamsResponse): _9.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _9.QueryParamsResponseProtoMsg): _9.QueryParamsResponse;
                toProto(message: _9.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryParamsResponse): _9.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _9.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_9.QueryModuleAccountsRequest>): _9.QueryModuleAccountsRequest;
                fromAmino(_: _9.QueryModuleAccountsRequestAmino): _9.QueryModuleAccountsRequest;
                toAmino(_: _9.QueryModuleAccountsRequest): _9.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _9.QueryModuleAccountsRequestAminoMsg): _9.QueryModuleAccountsRequest;
                toAminoMsg(message: _9.QueryModuleAccountsRequest): _9.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _9.QueryModuleAccountsRequestProtoMsg): _9.QueryModuleAccountsRequest;
                toProto(message: _9.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryModuleAccountsRequest): _9.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _9.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_9.QueryModuleAccountsResponse>): _9.QueryModuleAccountsResponse;
                fromAmino(object: _9.QueryModuleAccountsResponseAmino): _9.QueryModuleAccountsResponse;
                toAmino(message: _9.QueryModuleAccountsResponse): _9.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _9.QueryModuleAccountsResponseAminoMsg): _9.QueryModuleAccountsResponse;
                toAminoMsg(message: _9.QueryModuleAccountsResponse): _9.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _9.QueryModuleAccountsResponseProtoMsg): _9.QueryModuleAccountsResponse;
                toProto(message: _9.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryModuleAccountsResponse): _9.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _9.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_9.QueryModuleAccountByNameRequest>): _9.QueryModuleAccountByNameRequest;
                fromAmino(object: _9.QueryModuleAccountByNameRequestAmino): _9.QueryModuleAccountByNameRequest;
                toAmino(message: _9.QueryModuleAccountByNameRequest): _9.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _9.QueryModuleAccountByNameRequestAminoMsg): _9.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _9.QueryModuleAccountByNameRequest): _9.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _9.QueryModuleAccountByNameRequestProtoMsg): _9.QueryModuleAccountByNameRequest;
                toProto(message: _9.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _9.QueryModuleAccountByNameRequest): _9.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _9.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_9.QueryModuleAccountByNameResponse>): _9.QueryModuleAccountByNameResponse;
                fromAmino(object: _9.QueryModuleAccountByNameResponseAmino): _9.QueryModuleAccountByNameResponse;
                toAmino(message: _9.QueryModuleAccountByNameResponse): _9.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _9.QueryModuleAccountByNameResponseAminoMsg): _9.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _9.QueryModuleAccountByNameResponse): _9.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _9.QueryModuleAccountByNameResponseProtoMsg): _9.QueryModuleAccountByNameResponse;
                toProto(message: _9.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _9.QueryModuleAccountByNameResponse): _9.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _9.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.Bech32PrefixRequest;
                fromPartial(_: Partial<_9.Bech32PrefixRequest>): _9.Bech32PrefixRequest;
                fromAmino(_: _9.Bech32PrefixRequestAmino): _9.Bech32PrefixRequest;
                toAmino(_: _9.Bech32PrefixRequest): _9.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _9.Bech32PrefixRequestAminoMsg): _9.Bech32PrefixRequest;
                toAminoMsg(message: _9.Bech32PrefixRequest): _9.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _9.Bech32PrefixRequestProtoMsg): _9.Bech32PrefixRequest;
                toProto(message: _9.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _9.Bech32PrefixRequest): _9.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _9.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.Bech32PrefixResponse;
                fromPartial(object: Partial<_9.Bech32PrefixResponse>): _9.Bech32PrefixResponse;
                fromAmino(object: _9.Bech32PrefixResponseAmino): _9.Bech32PrefixResponse;
                toAmino(message: _9.Bech32PrefixResponse): _9.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _9.Bech32PrefixResponseAminoMsg): _9.Bech32PrefixResponse;
                toAminoMsg(message: _9.Bech32PrefixResponse): _9.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _9.Bech32PrefixResponseProtoMsg): _9.Bech32PrefixResponse;
                toProto(message: _9.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _9.Bech32PrefixResponse): _9.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _9.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.AddressBytesToStringRequest;
                fromPartial(object: Partial<_9.AddressBytesToStringRequest>): _9.AddressBytesToStringRequest;
                fromAmino(object: _9.AddressBytesToStringRequestAmino): _9.AddressBytesToStringRequest;
                toAmino(message: _9.AddressBytesToStringRequest): _9.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _9.AddressBytesToStringRequestAminoMsg): _9.AddressBytesToStringRequest;
                toAminoMsg(message: _9.AddressBytesToStringRequest): _9.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _9.AddressBytesToStringRequestProtoMsg): _9.AddressBytesToStringRequest;
                toProto(message: _9.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _9.AddressBytesToStringRequest): _9.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _9.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.AddressBytesToStringResponse;
                fromPartial(object: Partial<_9.AddressBytesToStringResponse>): _9.AddressBytesToStringResponse;
                fromAmino(object: _9.AddressBytesToStringResponseAmino): _9.AddressBytesToStringResponse;
                toAmino(message: _9.AddressBytesToStringResponse): _9.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _9.AddressBytesToStringResponseAminoMsg): _9.AddressBytesToStringResponse;
                toAminoMsg(message: _9.AddressBytesToStringResponse): _9.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _9.AddressBytesToStringResponseProtoMsg): _9.AddressBytesToStringResponse;
                toProto(message: _9.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _9.AddressBytesToStringResponse): _9.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _9.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.AddressStringToBytesRequest;
                fromPartial(object: Partial<_9.AddressStringToBytesRequest>): _9.AddressStringToBytesRequest;
                fromAmino(object: _9.AddressStringToBytesRequestAmino): _9.AddressStringToBytesRequest;
                toAmino(message: _9.AddressStringToBytesRequest): _9.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _9.AddressStringToBytesRequestAminoMsg): _9.AddressStringToBytesRequest;
                toAminoMsg(message: _9.AddressStringToBytesRequest): _9.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _9.AddressStringToBytesRequestProtoMsg): _9.AddressStringToBytesRequest;
                toProto(message: _9.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _9.AddressStringToBytesRequest): _9.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _9.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.AddressStringToBytesResponse;
                fromPartial(object: Partial<_9.AddressStringToBytesResponse>): _9.AddressStringToBytesResponse;
                fromAmino(object: _9.AddressStringToBytesResponseAmino): _9.AddressStringToBytesResponse;
                toAmino(message: _9.AddressStringToBytesResponse): _9.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _9.AddressStringToBytesResponseAminoMsg): _9.AddressStringToBytesResponse;
                toAminoMsg(message: _9.AddressStringToBytesResponse): _9.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _9.AddressStringToBytesResponseProtoMsg): _9.AddressStringToBytesResponse;
                toProto(message: _9.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _9.AddressStringToBytesResponse): _9.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _9.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_9.QueryAccountAddressByIDRequest>): _9.QueryAccountAddressByIDRequest;
                fromAmino(object: _9.QueryAccountAddressByIDRequestAmino): _9.QueryAccountAddressByIDRequest;
                toAmino(message: _9.QueryAccountAddressByIDRequest): _9.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _9.QueryAccountAddressByIDRequestAminoMsg): _9.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _9.QueryAccountAddressByIDRequest): _9.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _9.QueryAccountAddressByIDRequestProtoMsg): _9.QueryAccountAddressByIDRequest;
                toProto(message: _9.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _9.QueryAccountAddressByIDRequest): _9.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _9.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_9.QueryAccountAddressByIDResponse>): _9.QueryAccountAddressByIDResponse;
                fromAmino(object: _9.QueryAccountAddressByIDResponseAmino): _9.QueryAccountAddressByIDResponse;
                toAmino(message: _9.QueryAccountAddressByIDResponse): _9.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _9.QueryAccountAddressByIDResponseAminoMsg): _9.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _9.QueryAccountAddressByIDResponse): _9.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _9.QueryAccountAddressByIDResponseProtoMsg): _9.QueryAccountAddressByIDResponse;
                toProto(message: _9.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _9.QueryAccountAddressByIDResponse): _9.QueryAccountAddressByIDResponseProtoMsg;
            };
            QueryAccountInfoRequest: {
                typeUrl: string;
                encode(message: _9.QueryAccountInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryAccountInfoRequest;
                fromPartial(object: Partial<_9.QueryAccountInfoRequest>): _9.QueryAccountInfoRequest;
                fromAmino(object: _9.QueryAccountInfoRequestAmino): _9.QueryAccountInfoRequest;
                toAmino(message: _9.QueryAccountInfoRequest): _9.QueryAccountInfoRequestAmino;
                fromAminoMsg(object: _9.QueryAccountInfoRequestAminoMsg): _9.QueryAccountInfoRequest;
                toAminoMsg(message: _9.QueryAccountInfoRequest): _9.QueryAccountInfoRequestAminoMsg;
                fromProtoMsg(message: _9.QueryAccountInfoRequestProtoMsg): _9.QueryAccountInfoRequest;
                toProto(message: _9.QueryAccountInfoRequest): Uint8Array;
                toProtoMsg(message: _9.QueryAccountInfoRequest): _9.QueryAccountInfoRequestProtoMsg;
            };
            QueryAccountInfoResponse: {
                typeUrl: string;
                encode(message: _9.QueryAccountInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryAccountInfoResponse;
                fromPartial(object: Partial<_9.QueryAccountInfoResponse>): _9.QueryAccountInfoResponse;
                fromAmino(object: _9.QueryAccountInfoResponseAmino): _9.QueryAccountInfoResponse;
                toAmino(message: _9.QueryAccountInfoResponse): _9.QueryAccountInfoResponseAmino;
                fromAminoMsg(object: _9.QueryAccountInfoResponseAminoMsg): _9.QueryAccountInfoResponse;
                toAminoMsg(message: _9.QueryAccountInfoResponse): _9.QueryAccountInfoResponseAminoMsg;
                fromProtoMsg(message: _9.QueryAccountInfoResponseProtoMsg): _9.QueryAccountInfoResponse;
                toProto(message: _9.QueryAccountInfoResponse): Uint8Array;
                toProtoMsg(message: _9.QueryAccountInfoResponse): _9.QueryAccountInfoResponseProtoMsg;
            };
            Cosmos_authv1beta1AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _7.BaseAccount;
            Cosmos_authv1beta1AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _7.ModuleAccount;
            Cosmos_authv1beta1ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
            BaseAccount: {
                typeUrl: string;
                encode(message: _7.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.BaseAccount;
                fromPartial(object: Partial<_7.BaseAccount>): _7.BaseAccount;
                fromAmino(object: _7.BaseAccountAmino): _7.BaseAccount;
                toAmino(message: _7.BaseAccount): _7.BaseAccountAmino;
                fromAminoMsg(object: _7.BaseAccountAminoMsg): _7.BaseAccount;
                toAminoMsg(message: _7.BaseAccount): _7.BaseAccountAminoMsg;
                fromProtoMsg(message: _7.BaseAccountProtoMsg): _7.BaseAccount;
                toProto(message: _7.BaseAccount): Uint8Array;
                toProtoMsg(message: _7.BaseAccount): _7.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _7.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.ModuleAccount;
                fromPartial(object: Partial<_7.ModuleAccount>): _7.ModuleAccount;
                fromAmino(object: _7.ModuleAccountAmino): _7.ModuleAccount;
                toAmino(message: _7.ModuleAccount): _7.ModuleAccountAmino;
                fromAminoMsg(object: _7.ModuleAccountAminoMsg): _7.ModuleAccount;
                toAminoMsg(message: _7.ModuleAccount): _7.ModuleAccountAminoMsg;
                fromProtoMsg(message: _7.ModuleAccountProtoMsg): _7.ModuleAccount;
                toProto(message: _7.ModuleAccount): Uint8Array;
                toProtoMsg(message: _7.ModuleAccount): _7.ModuleAccountProtoMsg;
            };
            ModuleCredential: {
                typeUrl: string;
                encode(message: _7.ModuleCredential, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.ModuleCredential;
                fromPartial(object: Partial<_7.ModuleCredential>): _7.ModuleCredential;
                fromAmino(object: _7.ModuleCredentialAmino): _7.ModuleCredential;
                toAmino(message: _7.ModuleCredential): _7.ModuleCredentialAmino;
                fromAminoMsg(object: _7.ModuleCredentialAminoMsg): _7.ModuleCredential;
                toAminoMsg(message: _7.ModuleCredential): _7.ModuleCredentialAminoMsg;
                fromProtoMsg(message: _7.ModuleCredentialProtoMsg): _7.ModuleCredential;
                toProto(message: _7.ModuleCredential): Uint8Array;
                toProtoMsg(message: _7.ModuleCredential): _7.ModuleCredentialProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _7.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.Params;
                fromPartial(object: Partial<_7.Params>): _7.Params;
                fromAmino(object: _7.ParamsAmino): _7.Params;
                toAmino(message: _7.Params): _7.ParamsAmino;
                fromAminoMsg(object: _7.ParamsAminoMsg): _7.Params;
                toAminoMsg(message: _7.Params): _7.ParamsAminoMsg;
                fromProtoMsg(message: _7.ParamsProtoMsg): _7.Params;
                toProto(message: _7.Params): Uint8Array;
                toProtoMsg(message: _7.Params): _7.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _11.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.Module;
                    fromPartial(_: Partial<_11.Module>): _11.Module;
                    fromAmino(_: _11.ModuleAmino): _11.Module;
                    toAmino(_: _11.Module): _11.ModuleAmino;
                    fromAminoMsg(object: _11.ModuleAminoMsg): _11.Module;
                    toAminoMsg(message: _11.Module): _11.ModuleAminoMsg;
                    fromProtoMsg(message: _11.ModuleProtoMsg): _11.Module;
                    toProto(message: _11.Module): Uint8Array;
                    toProtoMsg(message: _11.Module): _11.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _322.MsgClientImpl;
            QueryClientImpl: typeof _301.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _15.QueryGrantsRequest): Promise<_15.QueryGrantsResponse>;
                granterGrants(request: _15.QueryGranterGrantsRequest): Promise<_15.QueryGranterGrantsResponse>;
                granteeGrants(request: _15.QueryGranteeGrantsRequest): Promise<_15.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _16.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _16.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _16.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _16.MsgGrant): {
                        typeUrl: string;
                        value: _16.MsgGrant;
                    };
                    exec(value: _16.MsgExec): {
                        typeUrl: string;
                        value: _16.MsgExec;
                    };
                    revoke(value: _16.MsgRevoke): {
                        typeUrl: string;
                        value: _16.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _16.MsgGrant): {
                        typeUrl: string;
                        value: _16.MsgGrant;
                    };
                    exec(value: _16.MsgExec): {
                        typeUrl: string;
                        value: _16.MsgExec;
                    };
                    revoke(value: _16.MsgRevoke): {
                        typeUrl: string;
                        value: _16.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _16.MsgGrant) => _16.MsgGrantAmino;
                    fromAmino: (object: _16.MsgGrantAmino) => _16.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _16.MsgExec) => _16.MsgExecAmino;
                    fromAmino: (object: _16.MsgExecAmino) => _16.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _16.MsgRevoke) => _16.MsgRevokeAmino;
                    fromAmino: (object: _16.MsgRevokeAmino) => _16.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _16.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.MsgGrant;
                fromPartial(object: Partial<_16.MsgGrant>): _16.MsgGrant;
                fromAmino(object: _16.MsgGrantAmino): _16.MsgGrant;
                toAmino(message: _16.MsgGrant): _16.MsgGrantAmino;
                fromAminoMsg(object: _16.MsgGrantAminoMsg): _16.MsgGrant;
                toAminoMsg(message: _16.MsgGrant): _16.MsgGrantAminoMsg;
                fromProtoMsg(message: _16.MsgGrantProtoMsg): _16.MsgGrant;
                toProto(message: _16.MsgGrant): Uint8Array;
                toProtoMsg(message: _16.MsgGrant): _16.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _16.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.MsgExecResponse;
                fromPartial(object: Partial<_16.MsgExecResponse>): _16.MsgExecResponse;
                fromAmino(object: _16.MsgExecResponseAmino): _16.MsgExecResponse;
                toAmino(message: _16.MsgExecResponse): _16.MsgExecResponseAmino;
                fromAminoMsg(object: _16.MsgExecResponseAminoMsg): _16.MsgExecResponse;
                toAminoMsg(message: _16.MsgExecResponse): _16.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _16.MsgExecResponseProtoMsg): _16.MsgExecResponse;
                toProto(message: _16.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _16.MsgExecResponse): _16.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _16.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.MsgExec;
                fromPartial(object: Partial<_16.MsgExec>): _16.MsgExec;
                fromAmino(object: _16.MsgExecAmino): _16.MsgExec;
                toAmino(message: _16.MsgExec): _16.MsgExecAmino;
                fromAminoMsg(object: _16.MsgExecAminoMsg): _16.MsgExec;
                toAminoMsg(message: _16.MsgExec): _16.MsgExecAminoMsg;
                fromProtoMsg(message: _16.MsgExecProtoMsg): _16.MsgExec;
                toProto(message: _16.MsgExec): Uint8Array;
                toProtoMsg(message: _16.MsgExec): _16.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _16.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.MsgGrantResponse;
                fromPartial(_: Partial<_16.MsgGrantResponse>): _16.MsgGrantResponse;
                fromAmino(_: _16.MsgGrantResponseAmino): _16.MsgGrantResponse;
                toAmino(_: _16.MsgGrantResponse): _16.MsgGrantResponseAmino;
                fromAminoMsg(object: _16.MsgGrantResponseAminoMsg): _16.MsgGrantResponse;
                toAminoMsg(message: _16.MsgGrantResponse): _16.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _16.MsgGrantResponseProtoMsg): _16.MsgGrantResponse;
                toProto(message: _16.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _16.MsgGrantResponse): _16.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _16.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.MsgRevoke;
                fromPartial(object: Partial<_16.MsgRevoke>): _16.MsgRevoke;
                fromAmino(object: _16.MsgRevokeAmino): _16.MsgRevoke;
                toAmino(message: _16.MsgRevoke): _16.MsgRevokeAmino;
                fromAminoMsg(object: _16.MsgRevokeAminoMsg): _16.MsgRevoke;
                toAminoMsg(message: _16.MsgRevoke): _16.MsgRevokeAminoMsg;
                fromProtoMsg(message: _16.MsgRevokeProtoMsg): _16.MsgRevoke;
                toProto(message: _16.MsgRevoke): Uint8Array;
                toProtoMsg(message: _16.MsgRevoke): _16.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _16.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.MsgRevokeResponse;
                fromPartial(_: Partial<_16.MsgRevokeResponse>): _16.MsgRevokeResponse;
                fromAmino(_: _16.MsgRevokeResponseAmino): _16.MsgRevokeResponse;
                toAmino(_: _16.MsgRevokeResponse): _16.MsgRevokeResponseAmino;
                fromAminoMsg(object: _16.MsgRevokeResponseAminoMsg): _16.MsgRevokeResponse;
                toAminoMsg(message: _16.MsgRevokeResponse): _16.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _16.MsgRevokeResponseProtoMsg): _16.MsgRevokeResponse;
                toProto(message: _16.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _16.MsgRevokeResponse): _16.MsgRevokeResponseProtoMsg;
            };
            Cosmos_basev1beta1Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _15.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.QueryGrantsRequest;
                fromPartial(object: Partial<_15.QueryGrantsRequest>): _15.QueryGrantsRequest;
                fromAmino(object: _15.QueryGrantsRequestAmino): _15.QueryGrantsRequest;
                toAmino(message: _15.QueryGrantsRequest): _15.QueryGrantsRequestAmino;
                fromAminoMsg(object: _15.QueryGrantsRequestAminoMsg): _15.QueryGrantsRequest;
                toAminoMsg(message: _15.QueryGrantsRequest): _15.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _15.QueryGrantsRequestProtoMsg): _15.QueryGrantsRequest;
                toProto(message: _15.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _15.QueryGrantsRequest): _15.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _15.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.QueryGrantsResponse;
                fromPartial(object: Partial<_15.QueryGrantsResponse>): _15.QueryGrantsResponse;
                fromAmino(object: _15.QueryGrantsResponseAmino): _15.QueryGrantsResponse;
                toAmino(message: _15.QueryGrantsResponse): _15.QueryGrantsResponseAmino;
                fromAminoMsg(object: _15.QueryGrantsResponseAminoMsg): _15.QueryGrantsResponse;
                toAminoMsg(message: _15.QueryGrantsResponse): _15.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _15.QueryGrantsResponseProtoMsg): _15.QueryGrantsResponse;
                toProto(message: _15.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _15.QueryGrantsResponse): _15.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _15.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_15.QueryGranterGrantsRequest>): _15.QueryGranterGrantsRequest;
                fromAmino(object: _15.QueryGranterGrantsRequestAmino): _15.QueryGranterGrantsRequest;
                toAmino(message: _15.QueryGranterGrantsRequest): _15.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _15.QueryGranterGrantsRequestAminoMsg): _15.QueryGranterGrantsRequest;
                toAminoMsg(message: _15.QueryGranterGrantsRequest): _15.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _15.QueryGranterGrantsRequestProtoMsg): _15.QueryGranterGrantsRequest;
                toProto(message: _15.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _15.QueryGranterGrantsRequest): _15.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _15.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_15.QueryGranterGrantsResponse>): _15.QueryGranterGrantsResponse;
                fromAmino(object: _15.QueryGranterGrantsResponseAmino): _15.QueryGranterGrantsResponse;
                toAmino(message: _15.QueryGranterGrantsResponse): _15.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _15.QueryGranterGrantsResponseAminoMsg): _15.QueryGranterGrantsResponse;
                toAminoMsg(message: _15.QueryGranterGrantsResponse): _15.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _15.QueryGranterGrantsResponseProtoMsg): _15.QueryGranterGrantsResponse;
                toProto(message: _15.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _15.QueryGranterGrantsResponse): _15.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _15.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_15.QueryGranteeGrantsRequest>): _15.QueryGranteeGrantsRequest;
                fromAmino(object: _15.QueryGranteeGrantsRequestAmino): _15.QueryGranteeGrantsRequest;
                toAmino(message: _15.QueryGranteeGrantsRequest): _15.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _15.QueryGranteeGrantsRequestAminoMsg): _15.QueryGranteeGrantsRequest;
                toAminoMsg(message: _15.QueryGranteeGrantsRequest): _15.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _15.QueryGranteeGrantsRequestProtoMsg): _15.QueryGranteeGrantsRequest;
                toProto(message: _15.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _15.QueryGranteeGrantsRequest): _15.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _15.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_15.QueryGranteeGrantsResponse>): _15.QueryGranteeGrantsResponse;
                fromAmino(object: _15.QueryGranteeGrantsResponseAmino): _15.QueryGranteeGrantsResponse;
                toAmino(message: _15.QueryGranteeGrantsResponse): _15.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _15.QueryGranteeGrantsResponseAminoMsg): _15.QueryGranteeGrantsResponse;
                toAminoMsg(message: _15.QueryGranteeGrantsResponse): _15.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _15.QueryGranteeGrantsResponseProtoMsg): _15.QueryGranteeGrantsResponse;
                toProto(message: _15.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _15.QueryGranteeGrantsResponse): _15.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _14.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.GenesisState;
                fromPartial(object: Partial<_14.GenesisState>): _14.GenesisState;
                fromAmino(object: _14.GenesisStateAmino): _14.GenesisState;
                toAmino(message: _14.GenesisState): _14.GenesisStateAmino;
                fromAminoMsg(object: _14.GenesisStateAminoMsg): _14.GenesisState;
                toAminoMsg(message: _14.GenesisState): _14.GenesisStateAminoMsg;
                fromProtoMsg(message: _14.GenesisStateProtoMsg): _14.GenesisState;
                toProto(message: _14.GenesisState): Uint8Array;
                toProtoMsg(message: _14.GenesisState): _14.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _13.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _13.EventGrant;
                fromPartial(object: Partial<_13.EventGrant>): _13.EventGrant;
                fromAmino(object: _13.EventGrantAmino): _13.EventGrant;
                toAmino(message: _13.EventGrant): _13.EventGrantAmino;
                fromAminoMsg(object: _13.EventGrantAminoMsg): _13.EventGrant;
                toAminoMsg(message: _13.EventGrant): _13.EventGrantAminoMsg;
                fromProtoMsg(message: _13.EventGrantProtoMsg): _13.EventGrant;
                toProto(message: _13.EventGrant): Uint8Array;
                toProtoMsg(message: _13.EventGrant): _13.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _13.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _13.EventRevoke;
                fromPartial(object: Partial<_13.EventRevoke>): _13.EventRevoke;
                fromAmino(object: _13.EventRevokeAmino): _13.EventRevoke;
                toAmino(message: _13.EventRevoke): _13.EventRevokeAmino;
                fromAminoMsg(object: _13.EventRevokeAminoMsg): _13.EventRevoke;
                toAminoMsg(message: _13.EventRevoke): _13.EventRevokeAminoMsg;
                fromProtoMsg(message: _13.EventRevokeProtoMsg): _13.EventRevoke;
                toProto(message: _13.EventRevoke): Uint8Array;
                toProtoMsg(message: _13.EventRevoke): _13.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _12.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.GenericAuthorization;
                fromPartial(object: Partial<_12.GenericAuthorization>): _12.GenericAuthorization;
                fromAmino(object: _12.GenericAuthorizationAmino): _12.GenericAuthorization;
                toAmino(message: _12.GenericAuthorization): _12.GenericAuthorizationAmino;
                fromAminoMsg(object: _12.GenericAuthorizationAminoMsg): _12.GenericAuthorization;
                toAminoMsg(message: _12.GenericAuthorization): _12.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _12.GenericAuthorizationProtoMsg): _12.GenericAuthorization;
                toProto(message: _12.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _12.GenericAuthorization): _12.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _12.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.Grant;
                fromPartial(object: Partial<_12.Grant>): _12.Grant;
                fromAmino(object: _12.GrantAmino): _12.Grant;
                toAmino(message: _12.Grant): _12.GrantAmino;
                fromAminoMsg(object: _12.GrantAminoMsg): _12.Grant;
                toAminoMsg(message: _12.Grant): _12.GrantAminoMsg;
                fromProtoMsg(message: _12.GrantProtoMsg): _12.Grant;
                toProto(message: _12.Grant): Uint8Array;
                toProtoMsg(message: _12.Grant): _12.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _12.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.GrantAuthorization;
                fromPartial(object: Partial<_12.GrantAuthorization>): _12.GrantAuthorization;
                fromAmino(object: _12.GrantAuthorizationAmino): _12.GrantAuthorization;
                toAmino(message: _12.GrantAuthorization): _12.GrantAuthorizationAmino;
                fromAminoMsg(object: _12.GrantAuthorizationAminoMsg): _12.GrantAuthorization;
                toAminoMsg(message: _12.GrantAuthorization): _12.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _12.GrantAuthorizationProtoMsg): _12.GrantAuthorization;
                toProto(message: _12.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _12.GrantAuthorization): _12.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _12.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.GrantQueueItem;
                fromPartial(object: Partial<_12.GrantQueueItem>): _12.GrantQueueItem;
                fromAmino(object: _12.GrantQueueItemAmino): _12.GrantQueueItem;
                toAmino(message: _12.GrantQueueItem): _12.GrantQueueItemAmino;
                fromAminoMsg(object: _12.GrantQueueItemAminoMsg): _12.GrantQueueItem;
                toAminoMsg(message: _12.GrantQueueItem): _12.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _12.GrantQueueItemProtoMsg): _12.GrantQueueItem;
                toProto(message: _12.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _12.GrantQueueItem): _12.GrantQueueItemProtoMsg;
            };
            Cosmos_authzv1beta1Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _20.SendAuthorization | _112.StakeAuthorization | import("../cosmwasm/wasm/v1/authz").StoreCodeAuthorization | import("../cosmwasm/wasm/v1/authz").ContractExecutionAuthorization | import("../cosmwasm/wasm/v1/authz").ContractMigrationAuthorization | import("../ibc/applications/transfer/v1/authz").TransferAuthorization | _12.GenericAuthorization;
            Cosmos_authzv1beta1Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authzv1beta1Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _302.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                appOptions(request?: _18.AppOptionsRequest): Promise<_18.AppOptionsResponse>;
            };
            AppOptionsRequest: {
                typeUrl: string;
                encode(_: _18.AppOptionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.AppOptionsRequest;
                fromPartial(_: Partial<_18.AppOptionsRequest>): _18.AppOptionsRequest;
                fromAmino(_: _18.AppOptionsRequestAmino): _18.AppOptionsRequest;
                toAmino(_: _18.AppOptionsRequest): _18.AppOptionsRequestAmino;
                fromAminoMsg(object: _18.AppOptionsRequestAminoMsg): _18.AppOptionsRequest;
                toAminoMsg(message: _18.AppOptionsRequest): _18.AppOptionsRequestAminoMsg;
                fromProtoMsg(message: _18.AppOptionsRequestProtoMsg): _18.AppOptionsRequest;
                toProto(message: _18.AppOptionsRequest): Uint8Array;
                toProtoMsg(message: _18.AppOptionsRequest): _18.AppOptionsRequestProtoMsg;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _18.AppOptionsResponse_ModuleOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.AppOptionsResponse_ModuleOptionsEntry;
                fromPartial(object: Partial<_18.AppOptionsResponse_ModuleOptionsEntry>): _18.AppOptionsResponse_ModuleOptionsEntry;
                fromAmino(object: _18.AppOptionsResponse_ModuleOptionsEntryAmino): _18.AppOptionsResponse_ModuleOptionsEntry;
                toAmino(message: _18.AppOptionsResponse_ModuleOptionsEntry): _18.AppOptionsResponse_ModuleOptionsEntryAmino;
                fromAminoMsg(object: _18.AppOptionsResponse_ModuleOptionsEntryAminoMsg): _18.AppOptionsResponse_ModuleOptionsEntry;
                fromProtoMsg(message: _18.AppOptionsResponse_ModuleOptionsEntryProtoMsg): _18.AppOptionsResponse_ModuleOptionsEntry;
                toProto(message: _18.AppOptionsResponse_ModuleOptionsEntry): Uint8Array;
            };
            AppOptionsResponse: {
                typeUrl: string;
                encode(message: _18.AppOptionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.AppOptionsResponse;
                fromPartial(object: Partial<_18.AppOptionsResponse>): _18.AppOptionsResponse;
                fromAmino(object: _18.AppOptionsResponseAmino): _18.AppOptionsResponse;
                toAmino(message: _18.AppOptionsResponse): _18.AppOptionsResponseAmino;
                fromAminoMsg(object: _18.AppOptionsResponseAminoMsg): _18.AppOptionsResponse;
                toAminoMsg(message: _18.AppOptionsResponse): _18.AppOptionsResponseAminoMsg;
                fromProtoMsg(message: _18.AppOptionsResponseProtoMsg): _18.AppOptionsResponse;
                toProto(message: _18.AppOptionsResponse): Uint8Array;
                toProtoMsg(message: _18.AppOptionsResponse): _18.AppOptionsResponseProtoMsg;
            };
            ModuleOptions: {
                typeUrl: string;
                encode(message: _17.ModuleOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.ModuleOptions;
                fromPartial(object: Partial<_17.ModuleOptions>): _17.ModuleOptions;
                fromAmino(object: _17.ModuleOptionsAmino): _17.ModuleOptions;
                toAmino(message: _17.ModuleOptions): _17.ModuleOptionsAmino;
                fromAminoMsg(object: _17.ModuleOptionsAminoMsg): _17.ModuleOptions;
                toAminoMsg(message: _17.ModuleOptions): _17.ModuleOptionsAminoMsg;
                fromProtoMsg(message: _17.ModuleOptionsProtoMsg): _17.ModuleOptions;
                toProto(message: _17.ModuleOptions): Uint8Array;
                toProtoMsg(message: _17.ModuleOptions): _17.ModuleOptionsProtoMsg;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _17.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.ServiceCommandDescriptor_SubCommandsEntry;
                fromPartial(object: Partial<_17.ServiceCommandDescriptor_SubCommandsEntry>): _17.ServiceCommandDescriptor_SubCommandsEntry;
                fromAmino(object: _17.ServiceCommandDescriptor_SubCommandsEntryAmino): _17.ServiceCommandDescriptor_SubCommandsEntry;
                toAmino(message: _17.ServiceCommandDescriptor_SubCommandsEntry): _17.ServiceCommandDescriptor_SubCommandsEntryAmino;
                fromAminoMsg(object: _17.ServiceCommandDescriptor_SubCommandsEntryAminoMsg): _17.ServiceCommandDescriptor_SubCommandsEntry;
                fromProtoMsg(message: _17.ServiceCommandDescriptor_SubCommandsEntryProtoMsg): _17.ServiceCommandDescriptor_SubCommandsEntry;
                toProto(message: _17.ServiceCommandDescriptor_SubCommandsEntry): Uint8Array;
            };
            ServiceCommandDescriptor: {
                typeUrl: string;
                encode(message: _17.ServiceCommandDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.ServiceCommandDescriptor;
                fromPartial(object: Partial<_17.ServiceCommandDescriptor>): _17.ServiceCommandDescriptor;
                fromAmino(object: _17.ServiceCommandDescriptorAmino): _17.ServiceCommandDescriptor;
                toAmino(message: _17.ServiceCommandDescriptor): _17.ServiceCommandDescriptorAmino;
                fromAminoMsg(object: _17.ServiceCommandDescriptorAminoMsg): _17.ServiceCommandDescriptor;
                toAminoMsg(message: _17.ServiceCommandDescriptor): _17.ServiceCommandDescriptorAminoMsg;
                fromProtoMsg(message: _17.ServiceCommandDescriptorProtoMsg): _17.ServiceCommandDescriptor;
                toProto(message: _17.ServiceCommandDescriptor): Uint8Array;
                toProtoMsg(message: _17.ServiceCommandDescriptor): _17.ServiceCommandDescriptorProtoMsg;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _17.RpcCommandOptions_FlagOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.RpcCommandOptions_FlagOptionsEntry;
                fromPartial(object: Partial<_17.RpcCommandOptions_FlagOptionsEntry>): _17.RpcCommandOptions_FlagOptionsEntry;
                fromAmino(object: _17.RpcCommandOptions_FlagOptionsEntryAmino): _17.RpcCommandOptions_FlagOptionsEntry;
                toAmino(message: _17.RpcCommandOptions_FlagOptionsEntry): _17.RpcCommandOptions_FlagOptionsEntryAmino;
                fromAminoMsg(object: _17.RpcCommandOptions_FlagOptionsEntryAminoMsg): _17.RpcCommandOptions_FlagOptionsEntry;
                fromProtoMsg(message: _17.RpcCommandOptions_FlagOptionsEntryProtoMsg): _17.RpcCommandOptions_FlagOptionsEntry;
                toProto(message: _17.RpcCommandOptions_FlagOptionsEntry): Uint8Array;
            };
            RpcCommandOptions: {
                typeUrl: string;
                encode(message: _17.RpcCommandOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.RpcCommandOptions;
                fromPartial(object: Partial<_17.RpcCommandOptions>): _17.RpcCommandOptions;
                fromAmino(object: _17.RpcCommandOptionsAmino): _17.RpcCommandOptions;
                toAmino(message: _17.RpcCommandOptions): _17.RpcCommandOptionsAmino;
                fromAminoMsg(object: _17.RpcCommandOptionsAminoMsg): _17.RpcCommandOptions;
                toAminoMsg(message: _17.RpcCommandOptions): _17.RpcCommandOptionsAminoMsg;
                fromProtoMsg(message: _17.RpcCommandOptionsProtoMsg): _17.RpcCommandOptions;
                toProto(message: _17.RpcCommandOptions): Uint8Array;
                toProtoMsg(message: _17.RpcCommandOptions): _17.RpcCommandOptionsProtoMsg;
            };
            FlagOptions: {
                typeUrl: string;
                encode(message: _17.FlagOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.FlagOptions;
                fromPartial(object: Partial<_17.FlagOptions>): _17.FlagOptions;
                fromAmino(object: _17.FlagOptionsAmino): _17.FlagOptions;
                toAmino(message: _17.FlagOptions): _17.FlagOptionsAmino;
                fromAminoMsg(object: _17.FlagOptionsAminoMsg): _17.FlagOptions;
                toAminoMsg(message: _17.FlagOptions): _17.FlagOptionsAminoMsg;
                fromProtoMsg(message: _17.FlagOptionsProtoMsg): _17.FlagOptions;
                toProto(message: _17.FlagOptions): Uint8Array;
                toProtoMsg(message: _17.FlagOptions): _17.FlagOptionsProtoMsg;
            };
            PositionalArgDescriptor: {
                typeUrl: string;
                encode(message: _17.PositionalArgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.PositionalArgDescriptor;
                fromPartial(object: Partial<_17.PositionalArgDescriptor>): _17.PositionalArgDescriptor;
                fromAmino(object: _17.PositionalArgDescriptorAmino): _17.PositionalArgDescriptor;
                toAmino(message: _17.PositionalArgDescriptor): _17.PositionalArgDescriptorAmino;
                fromAminoMsg(object: _17.PositionalArgDescriptorAminoMsg): _17.PositionalArgDescriptor;
                toAminoMsg(message: _17.PositionalArgDescriptor): _17.PositionalArgDescriptorAminoMsg;
                fromProtoMsg(message: _17.PositionalArgDescriptorProtoMsg): _17.PositionalArgDescriptor;
                toProto(message: _17.PositionalArgDescriptor): Uint8Array;
                toProtoMsg(message: _17.PositionalArgDescriptor): _17.PositionalArgDescriptorProtoMsg;
            };
        };
    }
    namespace bank {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _19.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.Module;
                    fromPartial(object: Partial<_19.Module>): _19.Module;
                    fromAmino(object: _19.ModuleAmino): _19.Module;
                    toAmino(message: _19.Module): _19.ModuleAmino;
                    fromAminoMsg(object: _19.ModuleAminoMsg): _19.Module;
                    toAminoMsg(message: _19.Module): _19.ModuleAminoMsg;
                    fromProtoMsg(message: _19.ModuleProtoMsg): _19.Module;
                    toProto(message: _19.Module): Uint8Array;
                    toProtoMsg(message: _19.Module): _19.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _323.MsgClientImpl;
            QueryClientImpl: typeof _303.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _23.QueryBalanceRequest): Promise<_23.QueryBalanceResponse>;
                allBalances(request: _23.QueryAllBalancesRequest): Promise<_23.QueryAllBalancesResponse>;
                spendableBalances(request: _23.QuerySpendableBalancesRequest): Promise<_23.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _23.QuerySpendableBalanceByDenomRequest): Promise<_23.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _23.QueryTotalSupplyRequest): Promise<_23.QueryTotalSupplyResponse>;
                supplyOf(request: _23.QuerySupplyOfRequest): Promise<_23.QuerySupplyOfResponse>;
                params(request?: _23.QueryParamsRequest): Promise<_23.QueryParamsResponse>;
                denomMetadata(request: _23.QueryDenomMetadataRequest): Promise<_23.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _23.QueryDenomsMetadataRequest): Promise<_23.QueryDenomsMetadataResponse>;
                denomOwners(request: _23.QueryDenomOwnersRequest): Promise<_23.QueryDenomOwnersResponse>;
                sendEnabled(request: _23.QuerySendEnabledRequest): Promise<_23.QuerySendEnabledResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _24.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _24.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _24.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _24.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _24.MsgSend): {
                        typeUrl: string;
                        value: _24.MsgSend;
                    };
                    multiSend(value: _24.MsgMultiSend): {
                        typeUrl: string;
                        value: _24.MsgMultiSend;
                    };
                    updateParams(value: _24.MsgUpdateParams): {
                        typeUrl: string;
                        value: _24.MsgUpdateParams;
                    };
                    setSendEnabled(value: _24.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _24.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _24.MsgSend): {
                        typeUrl: string;
                        value: _24.MsgSend;
                    };
                    multiSend(value: _24.MsgMultiSend): {
                        typeUrl: string;
                        value: _24.MsgMultiSend;
                    };
                    updateParams(value: _24.MsgUpdateParams): {
                        typeUrl: string;
                        value: _24.MsgUpdateParams;
                    };
                    setSendEnabled(value: _24.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _24.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _24.MsgSend) => _24.MsgSendAmino;
                    fromAmino: (object: _24.MsgSendAmino) => _24.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _24.MsgMultiSend) => _24.MsgMultiSendAmino;
                    fromAmino: (object: _24.MsgMultiSendAmino) => _24.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _24.MsgUpdateParams) => _24.MsgUpdateParamsAmino;
                    fromAmino: (object: _24.MsgUpdateParamsAmino) => _24.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: (message: _24.MsgSetSendEnabled) => _24.MsgSetSendEnabledAmino;
                    fromAmino: (object: _24.MsgSetSendEnabledAmino) => _24.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _24.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.MsgSend;
                fromPartial(object: Partial<_24.MsgSend>): _24.MsgSend;
                fromAmino(object: _24.MsgSendAmino): _24.MsgSend;
                toAmino(message: _24.MsgSend): _24.MsgSendAmino;
                fromAminoMsg(object: _24.MsgSendAminoMsg): _24.MsgSend;
                toAminoMsg(message: _24.MsgSend): _24.MsgSendAminoMsg;
                fromProtoMsg(message: _24.MsgSendProtoMsg): _24.MsgSend;
                toProto(message: _24.MsgSend): Uint8Array;
                toProtoMsg(message: _24.MsgSend): _24.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _24.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.MsgSendResponse;
                fromPartial(_: Partial<_24.MsgSendResponse>): _24.MsgSendResponse;
                fromAmino(_: _24.MsgSendResponseAmino): _24.MsgSendResponse;
                toAmino(_: _24.MsgSendResponse): _24.MsgSendResponseAmino;
                fromAminoMsg(object: _24.MsgSendResponseAminoMsg): _24.MsgSendResponse;
                toAminoMsg(message: _24.MsgSendResponse): _24.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _24.MsgSendResponseProtoMsg): _24.MsgSendResponse;
                toProto(message: _24.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _24.MsgSendResponse): _24.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _24.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.MsgMultiSend;
                fromPartial(object: Partial<_24.MsgMultiSend>): _24.MsgMultiSend;
                fromAmino(object: _24.MsgMultiSendAmino): _24.MsgMultiSend;
                toAmino(message: _24.MsgMultiSend): _24.MsgMultiSendAmino;
                fromAminoMsg(object: _24.MsgMultiSendAminoMsg): _24.MsgMultiSend;
                toAminoMsg(message: _24.MsgMultiSend): _24.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _24.MsgMultiSendProtoMsg): _24.MsgMultiSend;
                toProto(message: _24.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _24.MsgMultiSend): _24.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _24.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.MsgMultiSendResponse;
                fromPartial(_: Partial<_24.MsgMultiSendResponse>): _24.MsgMultiSendResponse;
                fromAmino(_: _24.MsgMultiSendResponseAmino): _24.MsgMultiSendResponse;
                toAmino(_: _24.MsgMultiSendResponse): _24.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _24.MsgMultiSendResponseAminoMsg): _24.MsgMultiSendResponse;
                toAminoMsg(message: _24.MsgMultiSendResponse): _24.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _24.MsgMultiSendResponseProtoMsg): _24.MsgMultiSendResponse;
                toProto(message: _24.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _24.MsgMultiSendResponse): _24.MsgMultiSendResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _24.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.MsgUpdateParams;
                fromPartial(object: Partial<_24.MsgUpdateParams>): _24.MsgUpdateParams;
                fromAmino(object: _24.MsgUpdateParamsAmino): _24.MsgUpdateParams;
                toAmino(message: _24.MsgUpdateParams): _24.MsgUpdateParamsAmino;
                fromAminoMsg(object: _24.MsgUpdateParamsAminoMsg): _24.MsgUpdateParams;
                toAminoMsg(message: _24.MsgUpdateParams): _24.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _24.MsgUpdateParamsProtoMsg): _24.MsgUpdateParams;
                toProto(message: _24.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _24.MsgUpdateParams): _24.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _24.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_24.MsgUpdateParamsResponse>): _24.MsgUpdateParamsResponse;
                fromAmino(_: _24.MsgUpdateParamsResponseAmino): _24.MsgUpdateParamsResponse;
                toAmino(_: _24.MsgUpdateParamsResponse): _24.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _24.MsgUpdateParamsResponseAminoMsg): _24.MsgUpdateParamsResponse;
                toAminoMsg(message: _24.MsgUpdateParamsResponse): _24.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _24.MsgUpdateParamsResponseProtoMsg): _24.MsgUpdateParamsResponse;
                toProto(message: _24.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _24.MsgUpdateParamsResponse): _24.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSetSendEnabled: {
                typeUrl: string;
                encode(message: _24.MsgSetSendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.MsgSetSendEnabled;
                fromPartial(object: Partial<_24.MsgSetSendEnabled>): _24.MsgSetSendEnabled;
                fromAmino(object: _24.MsgSetSendEnabledAmino): _24.MsgSetSendEnabled;
                toAmino(message: _24.MsgSetSendEnabled): _24.MsgSetSendEnabledAmino;
                fromAminoMsg(object: _24.MsgSetSendEnabledAminoMsg): _24.MsgSetSendEnabled;
                toAminoMsg(message: _24.MsgSetSendEnabled): _24.MsgSetSendEnabledAminoMsg;
                fromProtoMsg(message: _24.MsgSetSendEnabledProtoMsg): _24.MsgSetSendEnabled;
                toProto(message: _24.MsgSetSendEnabled): Uint8Array;
                toProtoMsg(message: _24.MsgSetSendEnabled): _24.MsgSetSendEnabledProtoMsg;
            };
            MsgSetSendEnabledResponse: {
                typeUrl: string;
                encode(_: _24.MsgSetSendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.MsgSetSendEnabledResponse;
                fromPartial(_: Partial<_24.MsgSetSendEnabledResponse>): _24.MsgSetSendEnabledResponse;
                fromAmino(_: _24.MsgSetSendEnabledResponseAmino): _24.MsgSetSendEnabledResponse;
                toAmino(_: _24.MsgSetSendEnabledResponse): _24.MsgSetSendEnabledResponseAmino;
                fromAminoMsg(object: _24.MsgSetSendEnabledResponseAminoMsg): _24.MsgSetSendEnabledResponse;
                toAminoMsg(message: _24.MsgSetSendEnabledResponse): _24.MsgSetSendEnabledResponseAminoMsg;
                fromProtoMsg(message: _24.MsgSetSendEnabledResponseProtoMsg): _24.MsgSetSendEnabledResponse;
                toProto(message: _24.MsgSetSendEnabledResponse): Uint8Array;
                toProtoMsg(message: _24.MsgSetSendEnabledResponse): _24.MsgSetSendEnabledResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _23.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QueryBalanceRequest;
                fromPartial(object: Partial<_23.QueryBalanceRequest>): _23.QueryBalanceRequest;
                fromAmino(object: _23.QueryBalanceRequestAmino): _23.QueryBalanceRequest;
                toAmino(message: _23.QueryBalanceRequest): _23.QueryBalanceRequestAmino;
                fromAminoMsg(object: _23.QueryBalanceRequestAminoMsg): _23.QueryBalanceRequest;
                toAminoMsg(message: _23.QueryBalanceRequest): _23.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _23.QueryBalanceRequestProtoMsg): _23.QueryBalanceRequest;
                toProto(message: _23.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _23.QueryBalanceRequest): _23.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _23.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QueryBalanceResponse;
                fromPartial(object: Partial<_23.QueryBalanceResponse>): _23.QueryBalanceResponse;
                fromAmino(object: _23.QueryBalanceResponseAmino): _23.QueryBalanceResponse;
                toAmino(message: _23.QueryBalanceResponse): _23.QueryBalanceResponseAmino;
                fromAminoMsg(object: _23.QueryBalanceResponseAminoMsg): _23.QueryBalanceResponse;
                toAminoMsg(message: _23.QueryBalanceResponse): _23.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _23.QueryBalanceResponseProtoMsg): _23.QueryBalanceResponse;
                toProto(message: _23.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _23.QueryBalanceResponse): _23.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _23.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QueryAllBalancesRequest;
                fromPartial(object: Partial<_23.QueryAllBalancesRequest>): _23.QueryAllBalancesRequest;
                fromAmino(object: _23.QueryAllBalancesRequestAmino): _23.QueryAllBalancesRequest;
                toAmino(message: _23.QueryAllBalancesRequest): _23.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _23.QueryAllBalancesRequestAminoMsg): _23.QueryAllBalancesRequest;
                toAminoMsg(message: _23.QueryAllBalancesRequest): _23.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _23.QueryAllBalancesRequestProtoMsg): _23.QueryAllBalancesRequest;
                toProto(message: _23.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _23.QueryAllBalancesRequest): _23.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _23.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QueryAllBalancesResponse;
                fromPartial(object: Partial<_23.QueryAllBalancesResponse>): _23.QueryAllBalancesResponse;
                fromAmino(object: _23.QueryAllBalancesResponseAmino): _23.QueryAllBalancesResponse;
                toAmino(message: _23.QueryAllBalancesResponse): _23.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _23.QueryAllBalancesResponseAminoMsg): _23.QueryAllBalancesResponse;
                toAminoMsg(message: _23.QueryAllBalancesResponse): _23.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _23.QueryAllBalancesResponseProtoMsg): _23.QueryAllBalancesResponse;
                toProto(message: _23.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _23.QueryAllBalancesResponse): _23.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _23.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_23.QuerySpendableBalancesRequest>): _23.QuerySpendableBalancesRequest;
                fromAmino(object: _23.QuerySpendableBalancesRequestAmino): _23.QuerySpendableBalancesRequest;
                toAmino(message: _23.QuerySpendableBalancesRequest): _23.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _23.QuerySpendableBalancesRequestAminoMsg): _23.QuerySpendableBalancesRequest;
                toAminoMsg(message: _23.QuerySpendableBalancesRequest): _23.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _23.QuerySpendableBalancesRequestProtoMsg): _23.QuerySpendableBalancesRequest;
                toProto(message: _23.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _23.QuerySpendableBalancesRequest): _23.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _23.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_23.QuerySpendableBalancesResponse>): _23.QuerySpendableBalancesResponse;
                fromAmino(object: _23.QuerySpendableBalancesResponseAmino): _23.QuerySpendableBalancesResponse;
                toAmino(message: _23.QuerySpendableBalancesResponse): _23.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _23.QuerySpendableBalancesResponseAminoMsg): _23.QuerySpendableBalancesResponse;
                toAminoMsg(message: _23.QuerySpendableBalancesResponse): _23.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _23.QuerySpendableBalancesResponseProtoMsg): _23.QuerySpendableBalancesResponse;
                toProto(message: _23.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _23.QuerySpendableBalancesResponse): _23.QuerySpendableBalancesResponseProtoMsg;
            };
            QuerySpendableBalanceByDenomRequest: {
                typeUrl: string;
                encode(message: _23.QuerySpendableBalanceByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QuerySpendableBalanceByDenomRequest;
                fromPartial(object: Partial<_23.QuerySpendableBalanceByDenomRequest>): _23.QuerySpendableBalanceByDenomRequest;
                fromAmino(object: _23.QuerySpendableBalanceByDenomRequestAmino): _23.QuerySpendableBalanceByDenomRequest;
                toAmino(message: _23.QuerySpendableBalanceByDenomRequest): _23.QuerySpendableBalanceByDenomRequestAmino;
                fromAminoMsg(object: _23.QuerySpendableBalanceByDenomRequestAminoMsg): _23.QuerySpendableBalanceByDenomRequest;
                toAminoMsg(message: _23.QuerySpendableBalanceByDenomRequest): _23.QuerySpendableBalanceByDenomRequestAminoMsg;
                fromProtoMsg(message: _23.QuerySpendableBalanceByDenomRequestProtoMsg): _23.QuerySpendableBalanceByDenomRequest;
                toProto(message: _23.QuerySpendableBalanceByDenomRequest): Uint8Array;
                toProtoMsg(message: _23.QuerySpendableBalanceByDenomRequest): _23.QuerySpendableBalanceByDenomRequestProtoMsg;
            };
            QuerySpendableBalanceByDenomResponse: {
                typeUrl: string;
                encode(message: _23.QuerySpendableBalanceByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QuerySpendableBalanceByDenomResponse;
                fromPartial(object: Partial<_23.QuerySpendableBalanceByDenomResponse>): _23.QuerySpendableBalanceByDenomResponse;
                fromAmino(object: _23.QuerySpendableBalanceByDenomResponseAmino): _23.QuerySpendableBalanceByDenomResponse;
                toAmino(message: _23.QuerySpendableBalanceByDenomResponse): _23.QuerySpendableBalanceByDenomResponseAmino;
                fromAminoMsg(object: _23.QuerySpendableBalanceByDenomResponseAminoMsg): _23.QuerySpendableBalanceByDenomResponse;
                toAminoMsg(message: _23.QuerySpendableBalanceByDenomResponse): _23.QuerySpendableBalanceByDenomResponseAminoMsg;
                fromProtoMsg(message: _23.QuerySpendableBalanceByDenomResponseProtoMsg): _23.QuerySpendableBalanceByDenomResponse;
                toProto(message: _23.QuerySpendableBalanceByDenomResponse): Uint8Array;
                toProtoMsg(message: _23.QuerySpendableBalanceByDenomResponse): _23.QuerySpendableBalanceByDenomResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _23.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_23.QueryTotalSupplyRequest>): _23.QueryTotalSupplyRequest;
                fromAmino(object: _23.QueryTotalSupplyRequestAmino): _23.QueryTotalSupplyRequest;
                toAmino(message: _23.QueryTotalSupplyRequest): _23.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _23.QueryTotalSupplyRequestAminoMsg): _23.QueryTotalSupplyRequest;
                toAminoMsg(message: _23.QueryTotalSupplyRequest): _23.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _23.QueryTotalSupplyRequestProtoMsg): _23.QueryTotalSupplyRequest;
                toProto(message: _23.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _23.QueryTotalSupplyRequest): _23.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _23.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_23.QueryTotalSupplyResponse>): _23.QueryTotalSupplyResponse;
                fromAmino(object: _23.QueryTotalSupplyResponseAmino): _23.QueryTotalSupplyResponse;
                toAmino(message: _23.QueryTotalSupplyResponse): _23.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _23.QueryTotalSupplyResponseAminoMsg): _23.QueryTotalSupplyResponse;
                toAminoMsg(message: _23.QueryTotalSupplyResponse): _23.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _23.QueryTotalSupplyResponseProtoMsg): _23.QueryTotalSupplyResponse;
                toProto(message: _23.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _23.QueryTotalSupplyResponse): _23.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _23.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QuerySupplyOfRequest;
                fromPartial(object: Partial<_23.QuerySupplyOfRequest>): _23.QuerySupplyOfRequest;
                fromAmino(object: _23.QuerySupplyOfRequestAmino): _23.QuerySupplyOfRequest;
                toAmino(message: _23.QuerySupplyOfRequest): _23.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _23.QuerySupplyOfRequestAminoMsg): _23.QuerySupplyOfRequest;
                toAminoMsg(message: _23.QuerySupplyOfRequest): _23.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _23.QuerySupplyOfRequestProtoMsg): _23.QuerySupplyOfRequest;
                toProto(message: _23.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _23.QuerySupplyOfRequest): _23.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _23.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QuerySupplyOfResponse;
                fromPartial(object: Partial<_23.QuerySupplyOfResponse>): _23.QuerySupplyOfResponse;
                fromAmino(object: _23.QuerySupplyOfResponseAmino): _23.QuerySupplyOfResponse;
                toAmino(message: _23.QuerySupplyOfResponse): _23.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _23.QuerySupplyOfResponseAminoMsg): _23.QuerySupplyOfResponse;
                toAminoMsg(message: _23.QuerySupplyOfResponse): _23.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _23.QuerySupplyOfResponseProtoMsg): _23.QuerySupplyOfResponse;
                toProto(message: _23.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _23.QuerySupplyOfResponse): _23.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _23.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QueryParamsRequest;
                fromPartial(_: Partial<_23.QueryParamsRequest>): _23.QueryParamsRequest;
                fromAmino(_: _23.QueryParamsRequestAmino): _23.QueryParamsRequest;
                toAmino(_: _23.QueryParamsRequest): _23.QueryParamsRequestAmino;
                fromAminoMsg(object: _23.QueryParamsRequestAminoMsg): _23.QueryParamsRequest;
                toAminoMsg(message: _23.QueryParamsRequest): _23.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _23.QueryParamsRequestProtoMsg): _23.QueryParamsRequest;
                toProto(message: _23.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _23.QueryParamsRequest): _23.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _23.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QueryParamsResponse;
                fromPartial(object: Partial<_23.QueryParamsResponse>): _23.QueryParamsResponse;
                fromAmino(object: _23.QueryParamsResponseAmino): _23.QueryParamsResponse;
                toAmino(message: _23.QueryParamsResponse): _23.QueryParamsResponseAmino;
                fromAminoMsg(object: _23.QueryParamsResponseAminoMsg): _23.QueryParamsResponse;
                toAminoMsg(message: _23.QueryParamsResponse): _23.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _23.QueryParamsResponseProtoMsg): _23.QueryParamsResponse;
                toProto(message: _23.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _23.QueryParamsResponse): _23.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _23.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_23.QueryDenomsMetadataRequest>): _23.QueryDenomsMetadataRequest;
                fromAmino(object: _23.QueryDenomsMetadataRequestAmino): _23.QueryDenomsMetadataRequest;
                toAmino(message: _23.QueryDenomsMetadataRequest): _23.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _23.QueryDenomsMetadataRequestAminoMsg): _23.QueryDenomsMetadataRequest;
                toAminoMsg(message: _23.QueryDenomsMetadataRequest): _23.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _23.QueryDenomsMetadataRequestProtoMsg): _23.QueryDenomsMetadataRequest;
                toProto(message: _23.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _23.QueryDenomsMetadataRequest): _23.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _23.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_23.QueryDenomsMetadataResponse>): _23.QueryDenomsMetadataResponse;
                fromAmino(object: _23.QueryDenomsMetadataResponseAmino): _23.QueryDenomsMetadataResponse;
                toAmino(message: _23.QueryDenomsMetadataResponse): _23.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _23.QueryDenomsMetadataResponseAminoMsg): _23.QueryDenomsMetadataResponse;
                toAminoMsg(message: _23.QueryDenomsMetadataResponse): _23.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _23.QueryDenomsMetadataResponseProtoMsg): _23.QueryDenomsMetadataResponse;
                toProto(message: _23.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _23.QueryDenomsMetadataResponse): _23.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _23.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_23.QueryDenomMetadataRequest>): _23.QueryDenomMetadataRequest;
                fromAmino(object: _23.QueryDenomMetadataRequestAmino): _23.QueryDenomMetadataRequest;
                toAmino(message: _23.QueryDenomMetadataRequest): _23.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _23.QueryDenomMetadataRequestAminoMsg): _23.QueryDenomMetadataRequest;
                toAminoMsg(message: _23.QueryDenomMetadataRequest): _23.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _23.QueryDenomMetadataRequestProtoMsg): _23.QueryDenomMetadataRequest;
                toProto(message: _23.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _23.QueryDenomMetadataRequest): _23.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _23.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_23.QueryDenomMetadataResponse>): _23.QueryDenomMetadataResponse;
                fromAmino(object: _23.QueryDenomMetadataResponseAmino): _23.QueryDenomMetadataResponse;
                toAmino(message: _23.QueryDenomMetadataResponse): _23.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _23.QueryDenomMetadataResponseAminoMsg): _23.QueryDenomMetadataResponse;
                toAminoMsg(message: _23.QueryDenomMetadataResponse): _23.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _23.QueryDenomMetadataResponseProtoMsg): _23.QueryDenomMetadataResponse;
                toProto(message: _23.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _23.QueryDenomMetadataResponse): _23.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _23.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_23.QueryDenomOwnersRequest>): _23.QueryDenomOwnersRequest;
                fromAmino(object: _23.QueryDenomOwnersRequestAmino): _23.QueryDenomOwnersRequest;
                toAmino(message: _23.QueryDenomOwnersRequest): _23.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _23.QueryDenomOwnersRequestAminoMsg): _23.QueryDenomOwnersRequest;
                toAminoMsg(message: _23.QueryDenomOwnersRequest): _23.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _23.QueryDenomOwnersRequestProtoMsg): _23.QueryDenomOwnersRequest;
                toProto(message: _23.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _23.QueryDenomOwnersRequest): _23.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _23.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.DenomOwner;
                fromPartial(object: Partial<_23.DenomOwner>): _23.DenomOwner;
                fromAmino(object: _23.DenomOwnerAmino): _23.DenomOwner;
                toAmino(message: _23.DenomOwner): _23.DenomOwnerAmino;
                fromAminoMsg(object: _23.DenomOwnerAminoMsg): _23.DenomOwner;
                toAminoMsg(message: _23.DenomOwner): _23.DenomOwnerAminoMsg;
                fromProtoMsg(message: _23.DenomOwnerProtoMsg): _23.DenomOwner;
                toProto(message: _23.DenomOwner): Uint8Array;
                toProtoMsg(message: _23.DenomOwner): _23.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _23.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_23.QueryDenomOwnersResponse>): _23.QueryDenomOwnersResponse;
                fromAmino(object: _23.QueryDenomOwnersResponseAmino): _23.QueryDenomOwnersResponse;
                toAmino(message: _23.QueryDenomOwnersResponse): _23.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _23.QueryDenomOwnersResponseAminoMsg): _23.QueryDenomOwnersResponse;
                toAminoMsg(message: _23.QueryDenomOwnersResponse): _23.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _23.QueryDenomOwnersResponseProtoMsg): _23.QueryDenomOwnersResponse;
                toProto(message: _23.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _23.QueryDenomOwnersResponse): _23.QueryDenomOwnersResponseProtoMsg;
            };
            QuerySendEnabledRequest: {
                typeUrl: string;
                encode(message: _23.QuerySendEnabledRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QuerySendEnabledRequest;
                fromPartial(object: Partial<_23.QuerySendEnabledRequest>): _23.QuerySendEnabledRequest;
                fromAmino(object: _23.QuerySendEnabledRequestAmino): _23.QuerySendEnabledRequest;
                toAmino(message: _23.QuerySendEnabledRequest): _23.QuerySendEnabledRequestAmino;
                fromAminoMsg(object: _23.QuerySendEnabledRequestAminoMsg): _23.QuerySendEnabledRequest;
                toAminoMsg(message: _23.QuerySendEnabledRequest): _23.QuerySendEnabledRequestAminoMsg;
                fromProtoMsg(message: _23.QuerySendEnabledRequestProtoMsg): _23.QuerySendEnabledRequest;
                toProto(message: _23.QuerySendEnabledRequest): Uint8Array;
                toProtoMsg(message: _23.QuerySendEnabledRequest): _23.QuerySendEnabledRequestProtoMsg;
            };
            QuerySendEnabledResponse: {
                typeUrl: string;
                encode(message: _23.QuerySendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QuerySendEnabledResponse;
                fromPartial(object: Partial<_23.QuerySendEnabledResponse>): _23.QuerySendEnabledResponse;
                fromAmino(object: _23.QuerySendEnabledResponseAmino): _23.QuerySendEnabledResponse;
                toAmino(message: _23.QuerySendEnabledResponse): _23.QuerySendEnabledResponseAmino;
                fromAminoMsg(object: _23.QuerySendEnabledResponseAminoMsg): _23.QuerySendEnabledResponse;
                toAminoMsg(message: _23.QuerySendEnabledResponse): _23.QuerySendEnabledResponseAminoMsg;
                fromProtoMsg(message: _23.QuerySendEnabledResponseProtoMsg): _23.QuerySendEnabledResponse;
                toProto(message: _23.QuerySendEnabledResponse): Uint8Array;
                toProtoMsg(message: _23.QuerySendEnabledResponse): _23.QuerySendEnabledResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _22.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _22.GenesisState;
                fromPartial(object: Partial<_22.GenesisState>): _22.GenesisState;
                fromAmino(object: _22.GenesisStateAmino): _22.GenesisState;
                toAmino(message: _22.GenesisState): _22.GenesisStateAmino;
                fromAminoMsg(object: _22.GenesisStateAminoMsg): _22.GenesisState;
                toAminoMsg(message: _22.GenesisState): _22.GenesisStateAminoMsg;
                fromProtoMsg(message: _22.GenesisStateProtoMsg): _22.GenesisState;
                toProto(message: _22.GenesisState): Uint8Array;
                toProtoMsg(message: _22.GenesisState): _22.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _22.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _22.Balance;
                fromPartial(object: Partial<_22.Balance>): _22.Balance;
                fromAmino(object: _22.BalanceAmino): _22.Balance;
                toAmino(message: _22.Balance): _22.BalanceAmino;
                fromAminoMsg(object: _22.BalanceAminoMsg): _22.Balance;
                toAminoMsg(message: _22.Balance): _22.BalanceAminoMsg;
                fromProtoMsg(message: _22.BalanceProtoMsg): _22.Balance;
                toProto(message: _22.Balance): Uint8Array;
                toProtoMsg(message: _22.Balance): _22.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _21.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.Params;
                fromPartial(object: Partial<_21.Params>): _21.Params;
                fromAmino(object: _21.ParamsAmino): _21.Params;
                toAmino(message: _21.Params): _21.ParamsAmino;
                fromAminoMsg(object: _21.ParamsAminoMsg): _21.Params;
                toAminoMsg(message: _21.Params): _21.ParamsAminoMsg;
                fromProtoMsg(message: _21.ParamsProtoMsg): _21.Params;
                toProto(message: _21.Params): Uint8Array;
                toProtoMsg(message: _21.Params): _21.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _21.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.SendEnabled;
                fromPartial(object: Partial<_21.SendEnabled>): _21.SendEnabled;
                fromAmino(object: _21.SendEnabledAmino): _21.SendEnabled;
                toAmino(message: _21.SendEnabled): _21.SendEnabledAmino;
                fromAminoMsg(object: _21.SendEnabledAminoMsg): _21.SendEnabled;
                toAminoMsg(message: _21.SendEnabled): _21.SendEnabledAminoMsg;
                fromProtoMsg(message: _21.SendEnabledProtoMsg): _21.SendEnabled;
                toProto(message: _21.SendEnabled): Uint8Array;
                toProtoMsg(message: _21.SendEnabled): _21.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _21.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.Input;
                fromPartial(object: Partial<_21.Input>): _21.Input;
                fromAmino(object: _21.InputAmino): _21.Input;
                toAmino(message: _21.Input): _21.InputAmino;
                fromAminoMsg(object: _21.InputAminoMsg): _21.Input;
                toAminoMsg(message: _21.Input): _21.InputAminoMsg;
                fromProtoMsg(message: _21.InputProtoMsg): _21.Input;
                toProto(message: _21.Input): Uint8Array;
                toProtoMsg(message: _21.Input): _21.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _21.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.Output;
                fromPartial(object: Partial<_21.Output>): _21.Output;
                fromAmino(object: _21.OutputAmino): _21.Output;
                toAmino(message: _21.Output): _21.OutputAmino;
                fromAminoMsg(object: _21.OutputAminoMsg): _21.Output;
                toAminoMsg(message: _21.Output): _21.OutputAminoMsg;
                fromProtoMsg(message: _21.OutputProtoMsg): _21.Output;
                toProto(message: _21.Output): Uint8Array;
                toProtoMsg(message: _21.Output): _21.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _21.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.Supply;
                fromPartial(object: Partial<_21.Supply>): _21.Supply;
                fromAmino(object: _21.SupplyAmino): _21.Supply;
                toAmino(message: _21.Supply): _21.SupplyAmino;
                fromAminoMsg(object: _21.SupplyAminoMsg): _21.Supply;
                toAminoMsg(message: _21.Supply): _21.SupplyAminoMsg;
                fromProtoMsg(message: _21.SupplyProtoMsg): _21.Supply;
                toProto(message: _21.Supply): Uint8Array;
                toProtoMsg(message: _21.Supply): _21.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _21.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.DenomUnit;
                fromPartial(object: Partial<_21.DenomUnit>): _21.DenomUnit;
                fromAmino(object: _21.DenomUnitAmino): _21.DenomUnit;
                toAmino(message: _21.DenomUnit): _21.DenomUnitAmino;
                fromAminoMsg(object: _21.DenomUnitAminoMsg): _21.DenomUnit;
                toAminoMsg(message: _21.DenomUnit): _21.DenomUnitAminoMsg;
                fromProtoMsg(message: _21.DenomUnitProtoMsg): _21.DenomUnit;
                toProto(message: _21.DenomUnit): Uint8Array;
                toProtoMsg(message: _21.DenomUnit): _21.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _21.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.Metadata;
                fromPartial(object: Partial<_21.Metadata>): _21.Metadata;
                fromAmino(object: _21.MetadataAmino): _21.Metadata;
                toAmino(message: _21.Metadata): _21.MetadataAmino;
                fromAminoMsg(object: _21.MetadataAminoMsg): _21.Metadata;
                toAminoMsg(message: _21.Metadata): _21.MetadataAminoMsg;
                fromProtoMsg(message: _21.MetadataProtoMsg): _21.Metadata;
                toProto(message: _21.Metadata): Uint8Array;
                toProtoMsg(message: _21.Metadata): _21.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _20.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _20.SendAuthorization;
                fromPartial(object: Partial<_20.SendAuthorization>): _20.SendAuthorization;
                fromAmino(object: _20.SendAuthorizationAmino): _20.SendAuthorization;
                toAmino(message: _20.SendAuthorization): _20.SendAuthorizationAmino;
                fromAminoMsg(object: _20.SendAuthorizationAminoMsg): _20.SendAuthorization;
                toAminoMsg(message: _20.SendAuthorization): _20.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _20.SendAuthorizationProtoMsg): _20.SendAuthorization;
                toProto(message: _20.SendAuthorization): Uint8Array;
                toProtoMsg(message: _20.SendAuthorization): _20.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _25.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.TxResponse;
                    fromPartial(object: Partial<_25.TxResponse>): _25.TxResponse;
                    fromAmino(object: _25.TxResponseAmino): _25.TxResponse;
                    toAmino(message: _25.TxResponse): _25.TxResponseAmino;
                    fromAminoMsg(object: _25.TxResponseAminoMsg): _25.TxResponse;
                    toAminoMsg(message: _25.TxResponse): _25.TxResponseAminoMsg;
                    fromProtoMsg(message: _25.TxResponseProtoMsg): _25.TxResponse;
                    toProto(message: _25.TxResponse): Uint8Array;
                    toProtoMsg(message: _25.TxResponse): _25.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _25.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.ABCIMessageLog;
                    fromPartial(object: Partial<_25.ABCIMessageLog>): _25.ABCIMessageLog;
                    fromAmino(object: _25.ABCIMessageLogAmino): _25.ABCIMessageLog;
                    toAmino(message: _25.ABCIMessageLog): _25.ABCIMessageLogAmino;
                    fromAminoMsg(object: _25.ABCIMessageLogAminoMsg): _25.ABCIMessageLog;
                    toAminoMsg(message: _25.ABCIMessageLog): _25.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _25.ABCIMessageLogProtoMsg): _25.ABCIMessageLog;
                    toProto(message: _25.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _25.ABCIMessageLog): _25.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _25.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.StringEvent;
                    fromPartial(object: Partial<_25.StringEvent>): _25.StringEvent;
                    fromAmino(object: _25.StringEventAmino): _25.StringEvent;
                    toAmino(message: _25.StringEvent): _25.StringEventAmino;
                    fromAminoMsg(object: _25.StringEventAminoMsg): _25.StringEvent;
                    toAminoMsg(message: _25.StringEvent): _25.StringEventAminoMsg;
                    fromProtoMsg(message: _25.StringEventProtoMsg): _25.StringEvent;
                    toProto(message: _25.StringEvent): Uint8Array;
                    toProtoMsg(message: _25.StringEvent): _25.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _25.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.Attribute;
                    fromPartial(object: Partial<_25.Attribute>): _25.Attribute;
                    fromAmino(object: _25.AttributeAmino): _25.Attribute;
                    toAmino(message: _25.Attribute): _25.AttributeAmino;
                    fromAminoMsg(object: _25.AttributeAminoMsg): _25.Attribute;
                    toAminoMsg(message: _25.Attribute): _25.AttributeAminoMsg;
                    fromProtoMsg(message: _25.AttributeProtoMsg): _25.Attribute;
                    toProto(message: _25.Attribute): Uint8Array;
                    toProtoMsg(message: _25.Attribute): _25.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _25.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.GasInfo;
                    fromPartial(object: Partial<_25.GasInfo>): _25.GasInfo;
                    fromAmino(object: _25.GasInfoAmino): _25.GasInfo;
                    toAmino(message: _25.GasInfo): _25.GasInfoAmino;
                    fromAminoMsg(object: _25.GasInfoAminoMsg): _25.GasInfo;
                    toAminoMsg(message: _25.GasInfo): _25.GasInfoAminoMsg;
                    fromProtoMsg(message: _25.GasInfoProtoMsg): _25.GasInfo;
                    toProto(message: _25.GasInfo): Uint8Array;
                    toProtoMsg(message: _25.GasInfo): _25.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _25.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.Result;
                    fromPartial(object: Partial<_25.Result>): _25.Result;
                    fromAmino(object: _25.ResultAmino): _25.Result;
                    toAmino(message: _25.Result): _25.ResultAmino;
                    fromAminoMsg(object: _25.ResultAminoMsg): _25.Result;
                    toAminoMsg(message: _25.Result): _25.ResultAminoMsg;
                    fromProtoMsg(message: _25.ResultProtoMsg): _25.Result;
                    toProto(message: _25.Result): Uint8Array;
                    toProtoMsg(message: _25.Result): _25.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _25.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.SimulationResponse;
                    fromPartial(object: Partial<_25.SimulationResponse>): _25.SimulationResponse;
                    fromAmino(object: _25.SimulationResponseAmino): _25.SimulationResponse;
                    toAmino(message: _25.SimulationResponse): _25.SimulationResponseAmino;
                    fromAminoMsg(object: _25.SimulationResponseAminoMsg): _25.SimulationResponse;
                    toAminoMsg(message: _25.SimulationResponse): _25.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _25.SimulationResponseProtoMsg): _25.SimulationResponse;
                    toProto(message: _25.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _25.SimulationResponse): _25.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _25.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.MsgData;
                    fromPartial(object: Partial<_25.MsgData>): _25.MsgData;
                    fromAmino(object: _25.MsgDataAmino): _25.MsgData;
                    toAmino(message: _25.MsgData): _25.MsgDataAmino;
                    fromAminoMsg(object: _25.MsgDataAminoMsg): _25.MsgData;
                    toAminoMsg(message: _25.MsgData): _25.MsgDataAminoMsg;
                    fromProtoMsg(message: _25.MsgDataProtoMsg): _25.MsgData;
                    toProto(message: _25.MsgData): Uint8Array;
                    toProtoMsg(message: _25.MsgData): _25.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _25.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.TxMsgData;
                    fromPartial(object: Partial<_25.TxMsgData>): _25.TxMsgData;
                    fromAmino(object: _25.TxMsgDataAmino): _25.TxMsgData;
                    toAmino(message: _25.TxMsgData): _25.TxMsgDataAmino;
                    fromAminoMsg(object: _25.TxMsgDataAminoMsg): _25.TxMsgData;
                    toAminoMsg(message: _25.TxMsgData): _25.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _25.TxMsgDataProtoMsg): _25.TxMsgData;
                    toProto(message: _25.TxMsgData): Uint8Array;
                    toProtoMsg(message: _25.TxMsgData): _25.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _25.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.SearchTxsResult;
                    fromPartial(object: Partial<_25.SearchTxsResult>): _25.SearchTxsResult;
                    fromAmino(object: _25.SearchTxsResultAmino): _25.SearchTxsResult;
                    toAmino(message: _25.SearchTxsResult): _25.SearchTxsResultAmino;
                    fromAminoMsg(object: _25.SearchTxsResultAminoMsg): _25.SearchTxsResult;
                    toAminoMsg(message: _25.SearchTxsResult): _25.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _25.SearchTxsResultProtoMsg): _25.SearchTxsResult;
                    toProto(message: _25.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _25.SearchTxsResult): _25.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _26.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.Pairs;
                    fromPartial(object: Partial<_26.Pairs>): _26.Pairs;
                    fromAmino(object: _26.PairsAmino): _26.Pairs;
                    toAmino(message: _26.Pairs): _26.PairsAmino;
                    fromAminoMsg(object: _26.PairsAminoMsg): _26.Pairs;
                    toAminoMsg(message: _26.Pairs): _26.PairsAminoMsg;
                    fromProtoMsg(message: _26.PairsProtoMsg): _26.Pairs;
                    toProto(message: _26.Pairs): Uint8Array;
                    toProtoMsg(message: _26.Pairs): _26.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _26.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.Pair;
                    fromPartial(object: Partial<_26.Pair>): _26.Pair;
                    fromAmino(object: _26.PairAmino): _26.Pair;
                    toAmino(message: _26.Pair): _26.PairAmino;
                    fromAminoMsg(object: _26.PairAminoMsg): _26.Pair;
                    toAminoMsg(message: _26.Pair): _26.PairAminoMsg;
                    fromProtoMsg(message: _26.PairProtoMsg): _26.Pair;
                    toProto(message: _26.Pair): Uint8Array;
                    toProtoMsg(message: _26.Pair): _26.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _304.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _27.ConfigRequest): Promise<_27.ConfigResponse>;
                };
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _27.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.ConfigRequest;
                    fromPartial(_: Partial<_27.ConfigRequest>): _27.ConfigRequest;
                    fromAmino(_: _27.ConfigRequestAmino): _27.ConfigRequest;
                    toAmino(_: _27.ConfigRequest): _27.ConfigRequestAmino;
                    fromAminoMsg(object: _27.ConfigRequestAminoMsg): _27.ConfigRequest;
                    toAminoMsg(message: _27.ConfigRequest): _27.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _27.ConfigRequestProtoMsg): _27.ConfigRequest;
                    toProto(message: _27.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _27.ConfigRequest): _27.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _27.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.ConfigResponse;
                    fromPartial(object: Partial<_27.ConfigResponse>): _27.ConfigResponse;
                    fromAmino(object: _27.ConfigResponseAmino): _27.ConfigResponse;
                    toAmino(message: _27.ConfigResponse): _27.ConfigResponseAmino;
                    fromAminoMsg(object: _27.ConfigResponseAminoMsg): _27.ConfigResponse;
                    toAminoMsg(message: _27.ConfigResponse): _27.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _27.ConfigResponseProtoMsg): _27.ConfigResponse;
                    toProto(message: _27.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _27.ConfigResponse): _27.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _28.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.PageRequest;
                    fromPartial(object: Partial<_28.PageRequest>): _28.PageRequest;
                    fromAmino(object: _28.PageRequestAmino): _28.PageRequest;
                    toAmino(message: _28.PageRequest): _28.PageRequestAmino;
                    fromAminoMsg(object: _28.PageRequestAminoMsg): _28.PageRequest;
                    toAminoMsg(message: _28.PageRequest): _28.PageRequestAminoMsg;
                    fromProtoMsg(message: _28.PageRequestProtoMsg): _28.PageRequest;
                    toProto(message: _28.PageRequest): Uint8Array;
                    toProtoMsg(message: _28.PageRequest): _28.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _28.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.PageResponse;
                    fromPartial(object: Partial<_28.PageResponse>): _28.PageResponse;
                    fromAmino(object: _28.PageResponseAmino): _28.PageResponse;
                    toAmino(message: _28.PageResponse): _28.PageResponseAmino;
                    fromAminoMsg(object: _28.PageResponseAminoMsg): _28.PageResponse;
                    toAminoMsg(message: _28.PageResponse): _28.PageResponseAminoMsg;
                    fromProtoMsg(message: _28.PageResponseProtoMsg): _28.PageResponse;
                    toProto(message: _28.PageResponse): Uint8Array;
                    toProtoMsg(message: _28.PageResponse): _28.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _29.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_29.ListAllInterfacesRequest>): _29.ListAllInterfacesRequest;
                    fromAmino(_: _29.ListAllInterfacesRequestAmino): _29.ListAllInterfacesRequest;
                    toAmino(_: _29.ListAllInterfacesRequest): _29.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _29.ListAllInterfacesRequestAminoMsg): _29.ListAllInterfacesRequest;
                    toAminoMsg(message: _29.ListAllInterfacesRequest): _29.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _29.ListAllInterfacesRequestProtoMsg): _29.ListAllInterfacesRequest;
                    toProto(message: _29.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _29.ListAllInterfacesRequest): _29.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _29.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_29.ListAllInterfacesResponse>): _29.ListAllInterfacesResponse;
                    fromAmino(object: _29.ListAllInterfacesResponseAmino): _29.ListAllInterfacesResponse;
                    toAmino(message: _29.ListAllInterfacesResponse): _29.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _29.ListAllInterfacesResponseAminoMsg): _29.ListAllInterfacesResponse;
                    toAminoMsg(message: _29.ListAllInterfacesResponse): _29.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _29.ListAllInterfacesResponseProtoMsg): _29.ListAllInterfacesResponse;
                    toProto(message: _29.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _29.ListAllInterfacesResponse): _29.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _29.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.ListImplementationsRequest;
                    fromPartial(object: Partial<_29.ListImplementationsRequest>): _29.ListImplementationsRequest;
                    fromAmino(object: _29.ListImplementationsRequestAmino): _29.ListImplementationsRequest;
                    toAmino(message: _29.ListImplementationsRequest): _29.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _29.ListImplementationsRequestAminoMsg): _29.ListImplementationsRequest;
                    toAminoMsg(message: _29.ListImplementationsRequest): _29.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _29.ListImplementationsRequestProtoMsg): _29.ListImplementationsRequest;
                    toProto(message: _29.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _29.ListImplementationsRequest): _29.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _29.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.ListImplementationsResponse;
                    fromPartial(object: Partial<_29.ListImplementationsResponse>): _29.ListImplementationsResponse;
                    fromAmino(object: _29.ListImplementationsResponseAmino): _29.ListImplementationsResponse;
                    toAmino(message: _29.ListImplementationsResponse): _29.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _29.ListImplementationsResponseAminoMsg): _29.ListImplementationsResponse;
                    toAminoMsg(message: _29.ListImplementationsResponse): _29.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _29.ListImplementationsResponseProtoMsg): _29.ListImplementationsResponse;
                    toProto(message: _29.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _29.ListImplementationsResponse): _29.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _30.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.AppDescriptor;
                    fromPartial(object: Partial<_30.AppDescriptor>): _30.AppDescriptor;
                    fromAmino(object: _30.AppDescriptorAmino): _30.AppDescriptor;
                    toAmino(message: _30.AppDescriptor): _30.AppDescriptorAmino;
                    fromAminoMsg(object: _30.AppDescriptorAminoMsg): _30.AppDescriptor;
                    toAminoMsg(message: _30.AppDescriptor): _30.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _30.AppDescriptorProtoMsg): _30.AppDescriptor;
                    toProto(message: _30.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _30.AppDescriptor): _30.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _30.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.TxDescriptor;
                    fromPartial(object: Partial<_30.TxDescriptor>): _30.TxDescriptor;
                    fromAmino(object: _30.TxDescriptorAmino): _30.TxDescriptor;
                    toAmino(message: _30.TxDescriptor): _30.TxDescriptorAmino;
                    fromAminoMsg(object: _30.TxDescriptorAminoMsg): _30.TxDescriptor;
                    toAminoMsg(message: _30.TxDescriptor): _30.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _30.TxDescriptorProtoMsg): _30.TxDescriptor;
                    toProto(message: _30.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _30.TxDescriptor): _30.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _30.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.AuthnDescriptor;
                    fromPartial(object: Partial<_30.AuthnDescriptor>): _30.AuthnDescriptor;
                    fromAmino(object: _30.AuthnDescriptorAmino): _30.AuthnDescriptor;
                    toAmino(message: _30.AuthnDescriptor): _30.AuthnDescriptorAmino;
                    fromAminoMsg(object: _30.AuthnDescriptorAminoMsg): _30.AuthnDescriptor;
                    toAminoMsg(message: _30.AuthnDescriptor): _30.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _30.AuthnDescriptorProtoMsg): _30.AuthnDescriptor;
                    toProto(message: _30.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _30.AuthnDescriptor): _30.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _30.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.SigningModeDescriptor;
                    fromPartial(object: Partial<_30.SigningModeDescriptor>): _30.SigningModeDescriptor;
                    fromAmino(object: _30.SigningModeDescriptorAmino): _30.SigningModeDescriptor;
                    toAmino(message: _30.SigningModeDescriptor): _30.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _30.SigningModeDescriptorAminoMsg): _30.SigningModeDescriptor;
                    toAminoMsg(message: _30.SigningModeDescriptor): _30.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _30.SigningModeDescriptorProtoMsg): _30.SigningModeDescriptor;
                    toProto(message: _30.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _30.SigningModeDescriptor): _30.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _30.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.ChainDescriptor;
                    fromPartial(object: Partial<_30.ChainDescriptor>): _30.ChainDescriptor;
                    fromAmino(object: _30.ChainDescriptorAmino): _30.ChainDescriptor;
                    toAmino(message: _30.ChainDescriptor): _30.ChainDescriptorAmino;
                    fromAminoMsg(object: _30.ChainDescriptorAminoMsg): _30.ChainDescriptor;
                    toAminoMsg(message: _30.ChainDescriptor): _30.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _30.ChainDescriptorProtoMsg): _30.ChainDescriptor;
                    toProto(message: _30.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _30.ChainDescriptor): _30.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _30.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.CodecDescriptor;
                    fromPartial(object: Partial<_30.CodecDescriptor>): _30.CodecDescriptor;
                    fromAmino(object: _30.CodecDescriptorAmino): _30.CodecDescriptor;
                    toAmino(message: _30.CodecDescriptor): _30.CodecDescriptorAmino;
                    fromAminoMsg(object: _30.CodecDescriptorAminoMsg): _30.CodecDescriptor;
                    toAminoMsg(message: _30.CodecDescriptor): _30.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _30.CodecDescriptorProtoMsg): _30.CodecDescriptor;
                    toProto(message: _30.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _30.CodecDescriptor): _30.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _30.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.InterfaceDescriptor;
                    fromPartial(object: Partial<_30.InterfaceDescriptor>): _30.InterfaceDescriptor;
                    fromAmino(object: _30.InterfaceDescriptorAmino): _30.InterfaceDescriptor;
                    toAmino(message: _30.InterfaceDescriptor): _30.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _30.InterfaceDescriptorAminoMsg): _30.InterfaceDescriptor;
                    toAminoMsg(message: _30.InterfaceDescriptor): _30.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _30.InterfaceDescriptorProtoMsg): _30.InterfaceDescriptor;
                    toProto(message: _30.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _30.InterfaceDescriptor): _30.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _30.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_30.InterfaceImplementerDescriptor>): _30.InterfaceImplementerDescriptor;
                    fromAmino(object: _30.InterfaceImplementerDescriptorAmino): _30.InterfaceImplementerDescriptor;
                    toAmino(message: _30.InterfaceImplementerDescriptor): _30.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _30.InterfaceImplementerDescriptorAminoMsg): _30.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _30.InterfaceImplementerDescriptor): _30.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _30.InterfaceImplementerDescriptorProtoMsg): _30.InterfaceImplementerDescriptor;
                    toProto(message: _30.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _30.InterfaceImplementerDescriptor): _30.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _30.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_30.InterfaceAcceptingMessageDescriptor>): _30.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _30.InterfaceAcceptingMessageDescriptorAmino): _30.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _30.InterfaceAcceptingMessageDescriptor): _30.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _30.InterfaceAcceptingMessageDescriptorAminoMsg): _30.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _30.InterfaceAcceptingMessageDescriptor): _30.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _30.InterfaceAcceptingMessageDescriptorProtoMsg): _30.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _30.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _30.InterfaceAcceptingMessageDescriptor): _30.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _30.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.ConfigurationDescriptor;
                    fromPartial(object: Partial<_30.ConfigurationDescriptor>): _30.ConfigurationDescriptor;
                    fromAmino(object: _30.ConfigurationDescriptorAmino): _30.ConfigurationDescriptor;
                    toAmino(message: _30.ConfigurationDescriptor): _30.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _30.ConfigurationDescriptorAminoMsg): _30.ConfigurationDescriptor;
                    toAminoMsg(message: _30.ConfigurationDescriptor): _30.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _30.ConfigurationDescriptorProtoMsg): _30.ConfigurationDescriptor;
                    toProto(message: _30.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _30.ConfigurationDescriptor): _30.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _30.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.MsgDescriptor;
                    fromPartial(object: Partial<_30.MsgDescriptor>): _30.MsgDescriptor;
                    fromAmino(object: _30.MsgDescriptorAmino): _30.MsgDescriptor;
                    toAmino(message: _30.MsgDescriptor): _30.MsgDescriptorAmino;
                    fromAminoMsg(object: _30.MsgDescriptorAminoMsg): _30.MsgDescriptor;
                    toAminoMsg(message: _30.MsgDescriptor): _30.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _30.MsgDescriptorProtoMsg): _30.MsgDescriptor;
                    toProto(message: _30.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _30.MsgDescriptor): _30.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _30.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_30.GetAuthnDescriptorRequest>): _30.GetAuthnDescriptorRequest;
                    fromAmino(_: _30.GetAuthnDescriptorRequestAmino): _30.GetAuthnDescriptorRequest;
                    toAmino(_: _30.GetAuthnDescriptorRequest): _30.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _30.GetAuthnDescriptorRequestAminoMsg): _30.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _30.GetAuthnDescriptorRequest): _30.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _30.GetAuthnDescriptorRequestProtoMsg): _30.GetAuthnDescriptorRequest;
                    toProto(message: _30.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _30.GetAuthnDescriptorRequest): _30.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _30.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_30.GetAuthnDescriptorResponse>): _30.GetAuthnDescriptorResponse;
                    fromAmino(object: _30.GetAuthnDescriptorResponseAmino): _30.GetAuthnDescriptorResponse;
                    toAmino(message: _30.GetAuthnDescriptorResponse): _30.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _30.GetAuthnDescriptorResponseAminoMsg): _30.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _30.GetAuthnDescriptorResponse): _30.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _30.GetAuthnDescriptorResponseProtoMsg): _30.GetAuthnDescriptorResponse;
                    toProto(message: _30.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _30.GetAuthnDescriptorResponse): _30.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _30.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_30.GetChainDescriptorRequest>): _30.GetChainDescriptorRequest;
                    fromAmino(_: _30.GetChainDescriptorRequestAmino): _30.GetChainDescriptorRequest;
                    toAmino(_: _30.GetChainDescriptorRequest): _30.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _30.GetChainDescriptorRequestAminoMsg): _30.GetChainDescriptorRequest;
                    toAminoMsg(message: _30.GetChainDescriptorRequest): _30.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _30.GetChainDescriptorRequestProtoMsg): _30.GetChainDescriptorRequest;
                    toProto(message: _30.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _30.GetChainDescriptorRequest): _30.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _30.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_30.GetChainDescriptorResponse>): _30.GetChainDescriptorResponse;
                    fromAmino(object: _30.GetChainDescriptorResponseAmino): _30.GetChainDescriptorResponse;
                    toAmino(message: _30.GetChainDescriptorResponse): _30.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _30.GetChainDescriptorResponseAminoMsg): _30.GetChainDescriptorResponse;
                    toAminoMsg(message: _30.GetChainDescriptorResponse): _30.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _30.GetChainDescriptorResponseProtoMsg): _30.GetChainDescriptorResponse;
                    toProto(message: _30.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _30.GetChainDescriptorResponse): _30.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _30.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_30.GetCodecDescriptorRequest>): _30.GetCodecDescriptorRequest;
                    fromAmino(_: _30.GetCodecDescriptorRequestAmino): _30.GetCodecDescriptorRequest;
                    toAmino(_: _30.GetCodecDescriptorRequest): _30.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _30.GetCodecDescriptorRequestAminoMsg): _30.GetCodecDescriptorRequest;
                    toAminoMsg(message: _30.GetCodecDescriptorRequest): _30.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _30.GetCodecDescriptorRequestProtoMsg): _30.GetCodecDescriptorRequest;
                    toProto(message: _30.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _30.GetCodecDescriptorRequest): _30.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _30.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_30.GetCodecDescriptorResponse>): _30.GetCodecDescriptorResponse;
                    fromAmino(object: _30.GetCodecDescriptorResponseAmino): _30.GetCodecDescriptorResponse;
                    toAmino(message: _30.GetCodecDescriptorResponse): _30.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _30.GetCodecDescriptorResponseAminoMsg): _30.GetCodecDescriptorResponse;
                    toAminoMsg(message: _30.GetCodecDescriptorResponse): _30.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _30.GetCodecDescriptorResponseProtoMsg): _30.GetCodecDescriptorResponse;
                    toProto(message: _30.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _30.GetCodecDescriptorResponse): _30.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _30.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_30.GetConfigurationDescriptorRequest>): _30.GetConfigurationDescriptorRequest;
                    fromAmino(_: _30.GetConfigurationDescriptorRequestAmino): _30.GetConfigurationDescriptorRequest;
                    toAmino(_: _30.GetConfigurationDescriptorRequest): _30.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _30.GetConfigurationDescriptorRequestAminoMsg): _30.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _30.GetConfigurationDescriptorRequest): _30.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _30.GetConfigurationDescriptorRequestProtoMsg): _30.GetConfigurationDescriptorRequest;
                    toProto(message: _30.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _30.GetConfigurationDescriptorRequest): _30.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _30.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_30.GetConfigurationDescriptorResponse>): _30.GetConfigurationDescriptorResponse;
                    fromAmino(object: _30.GetConfigurationDescriptorResponseAmino): _30.GetConfigurationDescriptorResponse;
                    toAmino(message: _30.GetConfigurationDescriptorResponse): _30.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _30.GetConfigurationDescriptorResponseAminoMsg): _30.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _30.GetConfigurationDescriptorResponse): _30.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _30.GetConfigurationDescriptorResponseProtoMsg): _30.GetConfigurationDescriptorResponse;
                    toProto(message: _30.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _30.GetConfigurationDescriptorResponse): _30.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _30.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_30.GetQueryServicesDescriptorRequest>): _30.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _30.GetQueryServicesDescriptorRequestAmino): _30.GetQueryServicesDescriptorRequest;
                    toAmino(_: _30.GetQueryServicesDescriptorRequest): _30.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _30.GetQueryServicesDescriptorRequestAminoMsg): _30.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _30.GetQueryServicesDescriptorRequest): _30.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _30.GetQueryServicesDescriptorRequestProtoMsg): _30.GetQueryServicesDescriptorRequest;
                    toProto(message: _30.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _30.GetQueryServicesDescriptorRequest): _30.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _30.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_30.GetQueryServicesDescriptorResponse>): _30.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _30.GetQueryServicesDescriptorResponseAmino): _30.GetQueryServicesDescriptorResponse;
                    toAmino(message: _30.GetQueryServicesDescriptorResponse): _30.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _30.GetQueryServicesDescriptorResponseAminoMsg): _30.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _30.GetQueryServicesDescriptorResponse): _30.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _30.GetQueryServicesDescriptorResponseProtoMsg): _30.GetQueryServicesDescriptorResponse;
                    toProto(message: _30.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _30.GetQueryServicesDescriptorResponse): _30.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _30.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_30.GetTxDescriptorRequest>): _30.GetTxDescriptorRequest;
                    fromAmino(_: _30.GetTxDescriptorRequestAmino): _30.GetTxDescriptorRequest;
                    toAmino(_: _30.GetTxDescriptorRequest): _30.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _30.GetTxDescriptorRequestAminoMsg): _30.GetTxDescriptorRequest;
                    toAminoMsg(message: _30.GetTxDescriptorRequest): _30.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _30.GetTxDescriptorRequestProtoMsg): _30.GetTxDescriptorRequest;
                    toProto(message: _30.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _30.GetTxDescriptorRequest): _30.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _30.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_30.GetTxDescriptorResponse>): _30.GetTxDescriptorResponse;
                    fromAmino(object: _30.GetTxDescriptorResponseAmino): _30.GetTxDescriptorResponse;
                    toAmino(message: _30.GetTxDescriptorResponse): _30.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _30.GetTxDescriptorResponseAminoMsg): _30.GetTxDescriptorResponse;
                    toAminoMsg(message: _30.GetTxDescriptorResponse): _30.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _30.GetTxDescriptorResponseProtoMsg): _30.GetTxDescriptorResponse;
                    toProto(message: _30.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _30.GetTxDescriptorResponse): _30.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _30.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.QueryServicesDescriptor;
                    fromPartial(object: Partial<_30.QueryServicesDescriptor>): _30.QueryServicesDescriptor;
                    fromAmino(object: _30.QueryServicesDescriptorAmino): _30.QueryServicesDescriptor;
                    toAmino(message: _30.QueryServicesDescriptor): _30.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _30.QueryServicesDescriptorAminoMsg): _30.QueryServicesDescriptor;
                    toAminoMsg(message: _30.QueryServicesDescriptor): _30.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _30.QueryServicesDescriptorProtoMsg): _30.QueryServicesDescriptor;
                    toProto(message: _30.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _30.QueryServicesDescriptor): _30.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _30.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.QueryServiceDescriptor;
                    fromPartial(object: Partial<_30.QueryServiceDescriptor>): _30.QueryServiceDescriptor;
                    fromAmino(object: _30.QueryServiceDescriptorAmino): _30.QueryServiceDescriptor;
                    toAmino(message: _30.QueryServiceDescriptor): _30.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _30.QueryServiceDescriptorAminoMsg): _30.QueryServiceDescriptor;
                    toAminoMsg(message: _30.QueryServiceDescriptor): _30.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _30.QueryServiceDescriptorProtoMsg): _30.QueryServiceDescriptor;
                    toProto(message: _30.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _30.QueryServiceDescriptor): _30.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _30.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.QueryMethodDescriptor;
                    fromPartial(object: Partial<_30.QueryMethodDescriptor>): _30.QueryMethodDescriptor;
                    fromAmino(object: _30.QueryMethodDescriptorAmino): _30.QueryMethodDescriptor;
                    toAmino(message: _30.QueryMethodDescriptor): _30.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _30.QueryMethodDescriptorAminoMsg): _30.QueryMethodDescriptor;
                    toAminoMsg(message: _30.QueryMethodDescriptor): _30.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _30.QueryMethodDescriptorProtoMsg): _30.QueryMethodDescriptor;
                    toProto(message: _30.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _30.QueryMethodDescriptor): _30.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _31.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.Snapshot;
                    fromPartial(object: Partial<_31.Snapshot>): _31.Snapshot;
                    fromAmino(object: _31.SnapshotAmino): _31.Snapshot;
                    toAmino(message: _31.Snapshot): _31.SnapshotAmino;
                    fromAminoMsg(object: _31.SnapshotAminoMsg): _31.Snapshot;
                    toAminoMsg(message: _31.Snapshot): _31.SnapshotAminoMsg;
                    fromProtoMsg(message: _31.SnapshotProtoMsg): _31.Snapshot;
                    toProto(message: _31.Snapshot): Uint8Array;
                    toProtoMsg(message: _31.Snapshot): _31.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _31.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.Metadata;
                    fromPartial(object: Partial<_31.Metadata>): _31.Metadata;
                    fromAmino(object: _31.MetadataAmino): _31.Metadata;
                    toAmino(message: _31.Metadata): _31.MetadataAmino;
                    fromAminoMsg(object: _31.MetadataAminoMsg): _31.Metadata;
                    toAminoMsg(message: _31.Metadata): _31.MetadataAminoMsg;
                    fromProtoMsg(message: _31.MetadataProtoMsg): _31.Metadata;
                    toProto(message: _31.Metadata): Uint8Array;
                    toProtoMsg(message: _31.Metadata): _31.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _31.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.SnapshotItem;
                    fromPartial(object: Partial<_31.SnapshotItem>): _31.SnapshotItem;
                    fromAmino(object: _31.SnapshotItemAmino): _31.SnapshotItem;
                    toAmino(message: _31.SnapshotItem): _31.SnapshotItemAmino;
                    fromAminoMsg(object: _31.SnapshotItemAminoMsg): _31.SnapshotItem;
                    toAminoMsg(message: _31.SnapshotItem): _31.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _31.SnapshotItemProtoMsg): _31.SnapshotItem;
                    toProto(message: _31.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _31.SnapshotItem): _31.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _31.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.SnapshotStoreItem;
                    fromPartial(object: Partial<_31.SnapshotStoreItem>): _31.SnapshotStoreItem;
                    fromAmino(object: _31.SnapshotStoreItemAmino): _31.SnapshotStoreItem;
                    toAmino(message: _31.SnapshotStoreItem): _31.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _31.SnapshotStoreItemAminoMsg): _31.SnapshotStoreItem;
                    toAminoMsg(message: _31.SnapshotStoreItem): _31.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _31.SnapshotStoreItemProtoMsg): _31.SnapshotStoreItem;
                    toProto(message: _31.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _31.SnapshotStoreItem): _31.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _31.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.SnapshotIAVLItem;
                    fromPartial(object: Partial<_31.SnapshotIAVLItem>): _31.SnapshotIAVLItem;
                    fromAmino(object: _31.SnapshotIAVLItemAmino): _31.SnapshotIAVLItem;
                    toAmino(message: _31.SnapshotIAVLItem): _31.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _31.SnapshotIAVLItemAminoMsg): _31.SnapshotIAVLItem;
                    toAminoMsg(message: _31.SnapshotIAVLItem): _31.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _31.SnapshotIAVLItemProtoMsg): _31.SnapshotIAVLItem;
                    toProto(message: _31.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _31.SnapshotIAVLItem): _31.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _31.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_31.SnapshotExtensionMeta>): _31.SnapshotExtensionMeta;
                    fromAmino(object: _31.SnapshotExtensionMetaAmino): _31.SnapshotExtensionMeta;
                    toAmino(message: _31.SnapshotExtensionMeta): _31.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _31.SnapshotExtensionMetaAminoMsg): _31.SnapshotExtensionMeta;
                    toAminoMsg(message: _31.SnapshotExtensionMeta): _31.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _31.SnapshotExtensionMetaProtoMsg): _31.SnapshotExtensionMeta;
                    toProto(message: _31.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _31.SnapshotExtensionMeta): _31.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _31.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_31.SnapshotExtensionPayload>): _31.SnapshotExtensionPayload;
                    fromAmino(object: _31.SnapshotExtensionPayloadAmino): _31.SnapshotExtensionPayload;
                    toAmino(message: _31.SnapshotExtensionPayload): _31.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _31.SnapshotExtensionPayloadAminoMsg): _31.SnapshotExtensionPayload;
                    toAminoMsg(message: _31.SnapshotExtensionPayload): _31.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _31.SnapshotExtensionPayloadProtoMsg): _31.SnapshotExtensionPayload;
                    toProto(message: _31.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _31.SnapshotExtensionPayload): _31.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _31.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.SnapshotKVItem;
                    fromPartial(object: Partial<_31.SnapshotKVItem>): _31.SnapshotKVItem;
                    fromAmino(object: _31.SnapshotKVItemAmino): _31.SnapshotKVItem;
                    toAmino(message: _31.SnapshotKVItem): _31.SnapshotKVItemAmino;
                    fromAminoMsg(object: _31.SnapshotKVItemAminoMsg): _31.SnapshotKVItem;
                    toAminoMsg(message: _31.SnapshotKVItem): _31.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _31.SnapshotKVItemProtoMsg): _31.SnapshotKVItem;
                    toProto(message: _31.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _31.SnapshotKVItem): _31.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _31.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.SnapshotSchema;
                    fromPartial(object: Partial<_31.SnapshotSchema>): _31.SnapshotSchema;
                    fromAmino(object: _31.SnapshotSchemaAmino): _31.SnapshotSchema;
                    toAmino(message: _31.SnapshotSchema): _31.SnapshotSchemaAmino;
                    fromAminoMsg(object: _31.SnapshotSchemaAminoMsg): _31.SnapshotSchema;
                    toAminoMsg(message: _31.SnapshotSchema): _31.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _31.SnapshotSchemaProtoMsg): _31.SnapshotSchema;
                    toProto(message: _31.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _31.SnapshotSchema): _31.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _33.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.StoreKVPair;
                    fromPartial(object: Partial<_33.StoreKVPair>): _33.StoreKVPair;
                    fromAmino(object: _33.StoreKVPairAmino): _33.StoreKVPair;
                    toAmino(message: _33.StoreKVPair): _33.StoreKVPairAmino;
                    fromAminoMsg(object: _33.StoreKVPairAminoMsg): _33.StoreKVPair;
                    toAminoMsg(message: _33.StoreKVPair): _33.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _33.StoreKVPairProtoMsg): _33.StoreKVPair;
                    toProto(message: _33.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _33.StoreKVPair): _33.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _33.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.BlockMetadata;
                    fromPartial(object: Partial<_33.BlockMetadata>): _33.BlockMetadata;
                    fromAmino(object: _33.BlockMetadataAmino): _33.BlockMetadata;
                    toAmino(message: _33.BlockMetadata): _33.BlockMetadataAmino;
                    fromAminoMsg(object: _33.BlockMetadataAminoMsg): _33.BlockMetadata;
                    toAminoMsg(message: _33.BlockMetadata): _33.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _33.BlockMetadataProtoMsg): _33.BlockMetadata;
                    toProto(message: _33.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _33.BlockMetadata): _33.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _33.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_33.BlockMetadata_DeliverTx>): _33.BlockMetadata_DeliverTx;
                    fromAmino(object: _33.BlockMetadata_DeliverTxAmino): _33.BlockMetadata_DeliverTx;
                    toAmino(message: _33.BlockMetadata_DeliverTx): _33.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _33.BlockMetadata_DeliverTxAminoMsg): _33.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _33.BlockMetadata_DeliverTx): _33.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _33.BlockMetadata_DeliverTxProtoMsg): _33.BlockMetadata_DeliverTx;
                    toProto(message: _33.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _33.BlockMetadata_DeliverTx): _33.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _32.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.CommitInfo;
                    fromPartial(object: Partial<_32.CommitInfo>): _32.CommitInfo;
                    fromAmino(object: _32.CommitInfoAmino): _32.CommitInfo;
                    toAmino(message: _32.CommitInfo): _32.CommitInfoAmino;
                    fromAminoMsg(object: _32.CommitInfoAminoMsg): _32.CommitInfo;
                    toAminoMsg(message: _32.CommitInfo): _32.CommitInfoAminoMsg;
                    fromProtoMsg(message: _32.CommitInfoProtoMsg): _32.CommitInfo;
                    toProto(message: _32.CommitInfo): Uint8Array;
                    toProtoMsg(message: _32.CommitInfo): _32.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _32.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.StoreInfo;
                    fromPartial(object: Partial<_32.StoreInfo>): _32.StoreInfo;
                    fromAmino(object: _32.StoreInfoAmino): _32.StoreInfo;
                    toAmino(message: _32.StoreInfo): _32.StoreInfoAmino;
                    fromAminoMsg(object: _32.StoreInfoAminoMsg): _32.StoreInfo;
                    toAminoMsg(message: _32.StoreInfo): _32.StoreInfoAminoMsg;
                    fromProtoMsg(message: _32.StoreInfoProtoMsg): _32.StoreInfo;
                    toProto(message: _32.StoreInfo): Uint8Array;
                    toProtoMsg(message: _32.StoreInfo): _32.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _32.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.CommitID;
                    fromPartial(object: Partial<_32.CommitID>): _32.CommitID;
                    fromAmino(object: _32.CommitIDAmino): _32.CommitID;
                    toAmino(message: _32.CommitID): _32.CommitIDAmino;
                    fromAminoMsg(object: _32.CommitIDAminoMsg): _32.CommitID;
                    toAminoMsg(message: _32.CommitID): _32.CommitIDAminoMsg;
                    fromProtoMsg(message: _32.CommitIDProtoMsg): _32.CommitID;
                    toProto(message: _32.CommitID): Uint8Array;
                    toProtoMsg(message: _32.CommitID): _32.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _305.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _34.GetNodeInfoRequest): Promise<_34.GetNodeInfoResponse>;
                    getSyncing(request?: _34.GetSyncingRequest): Promise<_34.GetSyncingResponse>;
                    getLatestBlock(request?: _34.GetLatestBlockRequest): Promise<_34.GetLatestBlockResponse>;
                    getBlockByHeight(request: _34.GetBlockByHeightRequest): Promise<_34.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _34.GetLatestValidatorSetRequest): Promise<_34.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _34.GetValidatorSetByHeightRequest): Promise<_34.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _34.ABCIQueryRequest): Promise<_34.ABCIQueryResponse>;
                };
                Block: {
                    typeUrl: string;
                    encode(message: _35.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.Block;
                    fromPartial(object: Partial<_35.Block>): _35.Block;
                    fromAmino(object: _35.BlockAmino): _35.Block;
                    toAmino(message: _35.Block): _35.BlockAmino;
                    fromAminoMsg(object: _35.BlockAminoMsg): _35.Block;
                    toAminoMsg(message: _35.Block): _35.BlockAminoMsg;
                    fromProtoMsg(message: _35.BlockProtoMsg): _35.Block;
                    toProto(message: _35.Block): Uint8Array;
                    toProtoMsg(message: _35.Block): _35.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _35.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.Header;
                    fromPartial(object: Partial<_35.Header>): _35.Header;
                    fromAmino(object: _35.HeaderAmino): _35.Header;
                    toAmino(message: _35.Header): _35.HeaderAmino;
                    fromAminoMsg(object: _35.HeaderAminoMsg): _35.Header;
                    toAminoMsg(message: _35.Header): _35.HeaderAminoMsg;
                    fromProtoMsg(message: _35.HeaderProtoMsg): _35.Header;
                    toProto(message: _35.Header): Uint8Array;
                    toProtoMsg(message: _35.Header): _35.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _34.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_34.GetValidatorSetByHeightRequest>): _34.GetValidatorSetByHeightRequest;
                    fromAmino(object: _34.GetValidatorSetByHeightRequestAmino): _34.GetValidatorSetByHeightRequest;
                    toAmino(message: _34.GetValidatorSetByHeightRequest): _34.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _34.GetValidatorSetByHeightRequestAminoMsg): _34.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _34.GetValidatorSetByHeightRequest): _34.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _34.GetValidatorSetByHeightRequestProtoMsg): _34.GetValidatorSetByHeightRequest;
                    toProto(message: _34.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _34.GetValidatorSetByHeightRequest): _34.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _34.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_34.GetValidatorSetByHeightResponse>): _34.GetValidatorSetByHeightResponse;
                    fromAmino(object: _34.GetValidatorSetByHeightResponseAmino): _34.GetValidatorSetByHeightResponse;
                    toAmino(message: _34.GetValidatorSetByHeightResponse): _34.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _34.GetValidatorSetByHeightResponseAminoMsg): _34.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _34.GetValidatorSetByHeightResponse): _34.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _34.GetValidatorSetByHeightResponseProtoMsg): _34.GetValidatorSetByHeightResponse;
                    toProto(message: _34.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _34.GetValidatorSetByHeightResponse): _34.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _34.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_34.GetLatestValidatorSetRequest>): _34.GetLatestValidatorSetRequest;
                    fromAmino(object: _34.GetLatestValidatorSetRequestAmino): _34.GetLatestValidatorSetRequest;
                    toAmino(message: _34.GetLatestValidatorSetRequest): _34.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _34.GetLatestValidatorSetRequestAminoMsg): _34.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _34.GetLatestValidatorSetRequest): _34.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _34.GetLatestValidatorSetRequestProtoMsg): _34.GetLatestValidatorSetRequest;
                    toProto(message: _34.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _34.GetLatestValidatorSetRequest): _34.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _34.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_34.GetLatestValidatorSetResponse>): _34.GetLatestValidatorSetResponse;
                    fromAmino(object: _34.GetLatestValidatorSetResponseAmino): _34.GetLatestValidatorSetResponse;
                    toAmino(message: _34.GetLatestValidatorSetResponse): _34.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _34.GetLatestValidatorSetResponseAminoMsg): _34.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _34.GetLatestValidatorSetResponse): _34.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _34.GetLatestValidatorSetResponseProtoMsg): _34.GetLatestValidatorSetResponse;
                    toProto(message: _34.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _34.GetLatestValidatorSetResponse): _34.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _34.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.Validator;
                    fromPartial(object: Partial<_34.Validator>): _34.Validator;
                    fromAmino(object: _34.ValidatorAmino): _34.Validator;
                    toAmino(message: _34.Validator): _34.ValidatorAmino;
                    fromAminoMsg(object: _34.ValidatorAminoMsg): _34.Validator;
                    toAminoMsg(message: _34.Validator): _34.ValidatorAminoMsg;
                    fromProtoMsg(message: _34.ValidatorProtoMsg): _34.Validator;
                    toProto(message: _34.Validator): Uint8Array;
                    toProtoMsg(message: _34.Validator): _34.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _34.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_34.GetBlockByHeightRequest>): _34.GetBlockByHeightRequest;
                    fromAmino(object: _34.GetBlockByHeightRequestAmino): _34.GetBlockByHeightRequest;
                    toAmino(message: _34.GetBlockByHeightRequest): _34.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _34.GetBlockByHeightRequestAminoMsg): _34.GetBlockByHeightRequest;
                    toAminoMsg(message: _34.GetBlockByHeightRequest): _34.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _34.GetBlockByHeightRequestProtoMsg): _34.GetBlockByHeightRequest;
                    toProto(message: _34.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _34.GetBlockByHeightRequest): _34.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _34.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_34.GetBlockByHeightResponse>): _34.GetBlockByHeightResponse;
                    fromAmino(object: _34.GetBlockByHeightResponseAmino): _34.GetBlockByHeightResponse;
                    toAmino(message: _34.GetBlockByHeightResponse): _34.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _34.GetBlockByHeightResponseAminoMsg): _34.GetBlockByHeightResponse;
                    toAminoMsg(message: _34.GetBlockByHeightResponse): _34.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _34.GetBlockByHeightResponseProtoMsg): _34.GetBlockByHeightResponse;
                    toProto(message: _34.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _34.GetBlockByHeightResponse): _34.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _34.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.GetLatestBlockRequest;
                    fromPartial(_: Partial<_34.GetLatestBlockRequest>): _34.GetLatestBlockRequest;
                    fromAmino(_: _34.GetLatestBlockRequestAmino): _34.GetLatestBlockRequest;
                    toAmino(_: _34.GetLatestBlockRequest): _34.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _34.GetLatestBlockRequestAminoMsg): _34.GetLatestBlockRequest;
                    toAminoMsg(message: _34.GetLatestBlockRequest): _34.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _34.GetLatestBlockRequestProtoMsg): _34.GetLatestBlockRequest;
                    toProto(message: _34.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _34.GetLatestBlockRequest): _34.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _34.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.GetLatestBlockResponse;
                    fromPartial(object: Partial<_34.GetLatestBlockResponse>): _34.GetLatestBlockResponse;
                    fromAmino(object: _34.GetLatestBlockResponseAmino): _34.GetLatestBlockResponse;
                    toAmino(message: _34.GetLatestBlockResponse): _34.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _34.GetLatestBlockResponseAminoMsg): _34.GetLatestBlockResponse;
                    toAminoMsg(message: _34.GetLatestBlockResponse): _34.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _34.GetLatestBlockResponseProtoMsg): _34.GetLatestBlockResponse;
                    toProto(message: _34.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _34.GetLatestBlockResponse): _34.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _34.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.GetSyncingRequest;
                    fromPartial(_: Partial<_34.GetSyncingRequest>): _34.GetSyncingRequest;
                    fromAmino(_: _34.GetSyncingRequestAmino): _34.GetSyncingRequest;
                    toAmino(_: _34.GetSyncingRequest): _34.GetSyncingRequestAmino;
                    fromAminoMsg(object: _34.GetSyncingRequestAminoMsg): _34.GetSyncingRequest;
                    toAminoMsg(message: _34.GetSyncingRequest): _34.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _34.GetSyncingRequestProtoMsg): _34.GetSyncingRequest;
                    toProto(message: _34.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _34.GetSyncingRequest): _34.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _34.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.GetSyncingResponse;
                    fromPartial(object: Partial<_34.GetSyncingResponse>): _34.GetSyncingResponse;
                    fromAmino(object: _34.GetSyncingResponseAmino): _34.GetSyncingResponse;
                    toAmino(message: _34.GetSyncingResponse): _34.GetSyncingResponseAmino;
                    fromAminoMsg(object: _34.GetSyncingResponseAminoMsg): _34.GetSyncingResponse;
                    toAminoMsg(message: _34.GetSyncingResponse): _34.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _34.GetSyncingResponseProtoMsg): _34.GetSyncingResponse;
                    toProto(message: _34.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _34.GetSyncingResponse): _34.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _34.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.GetNodeInfoRequest;
                    fromPartial(_: Partial<_34.GetNodeInfoRequest>): _34.GetNodeInfoRequest;
                    fromAmino(_: _34.GetNodeInfoRequestAmino): _34.GetNodeInfoRequest;
                    toAmino(_: _34.GetNodeInfoRequest): _34.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _34.GetNodeInfoRequestAminoMsg): _34.GetNodeInfoRequest;
                    toAminoMsg(message: _34.GetNodeInfoRequest): _34.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _34.GetNodeInfoRequestProtoMsg): _34.GetNodeInfoRequest;
                    toProto(message: _34.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _34.GetNodeInfoRequest): _34.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _34.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.GetNodeInfoResponse;
                    fromPartial(object: Partial<_34.GetNodeInfoResponse>): _34.GetNodeInfoResponse;
                    fromAmino(object: _34.GetNodeInfoResponseAmino): _34.GetNodeInfoResponse;
                    toAmino(message: _34.GetNodeInfoResponse): _34.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _34.GetNodeInfoResponseAminoMsg): _34.GetNodeInfoResponse;
                    toAminoMsg(message: _34.GetNodeInfoResponse): _34.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _34.GetNodeInfoResponseProtoMsg): _34.GetNodeInfoResponse;
                    toProto(message: _34.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _34.GetNodeInfoResponse): _34.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _34.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.VersionInfo;
                    fromPartial(object: Partial<_34.VersionInfo>): _34.VersionInfo;
                    fromAmino(object: _34.VersionInfoAmino): _34.VersionInfo;
                    toAmino(message: _34.VersionInfo): _34.VersionInfoAmino;
                    fromAminoMsg(object: _34.VersionInfoAminoMsg): _34.VersionInfo;
                    toAminoMsg(message: _34.VersionInfo): _34.VersionInfoAminoMsg;
                    fromProtoMsg(message: _34.VersionInfoProtoMsg): _34.VersionInfo;
                    toProto(message: _34.VersionInfo): Uint8Array;
                    toProtoMsg(message: _34.VersionInfo): _34.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _34.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.Module;
                    fromPartial(object: Partial<_34.Module>): _34.Module;
                    fromAmino(object: _34.ModuleAmino): _34.Module;
                    toAmino(message: _34.Module): _34.ModuleAmino;
                    fromAminoMsg(object: _34.ModuleAminoMsg): _34.Module;
                    toAminoMsg(message: _34.Module): _34.ModuleAminoMsg;
                    fromProtoMsg(message: _34.ModuleProtoMsg): _34.Module;
                    toProto(message: _34.Module): Uint8Array;
                    toProtoMsg(message: _34.Module): _34.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _34.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.ABCIQueryRequest;
                    fromPartial(object: Partial<_34.ABCIQueryRequest>): _34.ABCIQueryRequest;
                    fromAmino(object: _34.ABCIQueryRequestAmino): _34.ABCIQueryRequest;
                    toAmino(message: _34.ABCIQueryRequest): _34.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _34.ABCIQueryRequestAminoMsg): _34.ABCIQueryRequest;
                    toAminoMsg(message: _34.ABCIQueryRequest): _34.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _34.ABCIQueryRequestProtoMsg): _34.ABCIQueryRequest;
                    toProto(message: _34.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _34.ABCIQueryRequest): _34.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _34.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.ABCIQueryResponse;
                    fromPartial(object: Partial<_34.ABCIQueryResponse>): _34.ABCIQueryResponse;
                    fromAmino(object: _34.ABCIQueryResponseAmino): _34.ABCIQueryResponse;
                    toAmino(message: _34.ABCIQueryResponse): _34.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _34.ABCIQueryResponseAminoMsg): _34.ABCIQueryResponse;
                    toAminoMsg(message: _34.ABCIQueryResponse): _34.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _34.ABCIQueryResponseProtoMsg): _34.ABCIQueryResponse;
                    toProto(message: _34.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _34.ABCIQueryResponse): _34.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _34.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.ProofOp;
                    fromPartial(object: Partial<_34.ProofOp>): _34.ProofOp;
                    fromAmino(object: _34.ProofOpAmino): _34.ProofOp;
                    toAmino(message: _34.ProofOp): _34.ProofOpAmino;
                    fromAminoMsg(object: _34.ProofOpAminoMsg): _34.ProofOp;
                    toAminoMsg(message: _34.ProofOp): _34.ProofOpAminoMsg;
                    fromProtoMsg(message: _34.ProofOpProtoMsg): _34.ProofOp;
                    toProto(message: _34.ProofOp): Uint8Array;
                    toProtoMsg(message: _34.ProofOp): _34.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _34.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.ProofOps;
                    fromPartial(object: Partial<_34.ProofOps>): _34.ProofOps;
                    fromAmino(object: _34.ProofOpsAmino): _34.ProofOps;
                    toAmino(message: _34.ProofOps): _34.ProofOpsAmino;
                    fromAminoMsg(object: _34.ProofOpsAminoMsg): _34.ProofOps;
                    toAminoMsg(message: _34.ProofOps): _34.ProofOpsAminoMsg;
                    fromProtoMsg(message: _34.ProofOpsProtoMsg): _34.ProofOps;
                    toProto(message: _34.ProofOps): Uint8Array;
                    toProtoMsg(message: _34.ProofOps): _34.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _36.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.Coin;
                fromPartial(object: Partial<_36.Coin>): _36.Coin;
                fromAmino(object: _36.CoinAmino): _36.Coin;
                toAmino(message: _36.Coin): _36.CoinAmino;
                fromAminoMsg(object: _36.CoinAminoMsg): _36.Coin;
                toAminoMsg(message: _36.Coin): _36.CoinAminoMsg;
                fromProtoMsg(message: _36.CoinProtoMsg): _36.Coin;
                toProto(message: _36.Coin): Uint8Array;
                toProtoMsg(message: _36.Coin): _36.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _36.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.DecCoin;
                fromPartial(object: Partial<_36.DecCoin>): _36.DecCoin;
                fromAmino(object: _36.DecCoinAmino): _36.DecCoin;
                toAmino(message: _36.DecCoin): _36.DecCoinAmino;
                fromAminoMsg(object: _36.DecCoinAminoMsg): _36.DecCoin;
                toAminoMsg(message: _36.DecCoin): _36.DecCoinAminoMsg;
                fromProtoMsg(message: _36.DecCoinProtoMsg): _36.DecCoin;
                toProto(message: _36.DecCoin): Uint8Array;
                toProtoMsg(message: _36.DecCoin): _36.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _36.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.IntProto;
                fromPartial(object: Partial<_36.IntProto>): _36.IntProto;
                fromAmino(object: _36.IntProtoAmino): _36.IntProto;
                toAmino(message: _36.IntProto): _36.IntProtoAmino;
                fromAminoMsg(object: _36.IntProtoAminoMsg): _36.IntProto;
                toAminoMsg(message: _36.IntProto): _36.IntProtoAminoMsg;
                fromProtoMsg(message: _36.IntProtoProtoMsg): _36.IntProto;
                toProto(message: _36.IntProto): Uint8Array;
                toProtoMsg(message: _36.IntProto): _36.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _36.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.DecProto;
                fromPartial(object: Partial<_36.DecProto>): _36.DecProto;
                fromAmino(object: _36.DecProtoAmino): _36.DecProto;
                toAmino(message: _36.DecProto): _36.DecProtoAmino;
                fromAminoMsg(object: _36.DecProtoAminoMsg): _36.DecProto;
                toAminoMsg(message: _36.DecProto): _36.DecProtoAminoMsg;
                fromProtoMsg(message: _36.DecProtoProtoMsg): _36.DecProto;
                toProto(message: _36.DecProto): Uint8Array;
                toProtoMsg(message: _36.DecProto): _36.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _37.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.Module;
                    fromPartial(object: Partial<_37.Module>): _37.Module;
                    fromAmino(object: _37.ModuleAmino): _37.Module;
                    toAmino(message: _37.Module): _37.ModuleAmino;
                    fromAminoMsg(object: _37.ModuleAminoMsg): _37.Module;
                    toAminoMsg(message: _37.Module): _37.ModuleAminoMsg;
                    fromProtoMsg(message: _37.ModuleProtoMsg): _37.Module;
                    toProto(message: _37.Module): Uint8Array;
                    toProtoMsg(message: _37.Module): _37.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _39.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _39.GenesisOwners;
                fromPartial(object: Partial<_39.GenesisOwners>): _39.GenesisOwners;
                fromAmino(object: _39.GenesisOwnersAmino): _39.GenesisOwners;
                toAmino(message: _39.GenesisOwners): _39.GenesisOwnersAmino;
                fromAminoMsg(object: _39.GenesisOwnersAminoMsg): _39.GenesisOwners;
                toAminoMsg(message: _39.GenesisOwners): _39.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _39.GenesisOwnersProtoMsg): _39.GenesisOwners;
                toProto(message: _39.GenesisOwners): Uint8Array;
                toProtoMsg(message: _39.GenesisOwners): _39.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _39.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _39.GenesisState;
                fromPartial(object: Partial<_39.GenesisState>): _39.GenesisState;
                fromAmino(object: _39.GenesisStateAmino): _39.GenesisState;
                toAmino(message: _39.GenesisState): _39.GenesisStateAmino;
                fromAminoMsg(object: _39.GenesisStateAminoMsg): _39.GenesisState;
                toAminoMsg(message: _39.GenesisState): _39.GenesisStateAminoMsg;
                fromProtoMsg(message: _39.GenesisStateProtoMsg): _39.GenesisState;
                toProto(message: _39.GenesisState): Uint8Array;
                toProtoMsg(message: _39.GenesisState): _39.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _38.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.Capability;
                fromPartial(object: Partial<_38.Capability>): _38.Capability;
                fromAmino(object: _38.CapabilityAmino): _38.Capability;
                toAmino(message: _38.Capability): _38.CapabilityAmino;
                fromAminoMsg(object: _38.CapabilityAminoMsg): _38.Capability;
                toAminoMsg(message: _38.Capability): _38.CapabilityAminoMsg;
                fromProtoMsg(message: _38.CapabilityProtoMsg): _38.Capability;
                toProto(message: _38.Capability): Uint8Array;
                toProtoMsg(message: _38.Capability): _38.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _38.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.Owner;
                fromPartial(object: Partial<_38.Owner>): _38.Owner;
                fromAmino(object: _38.OwnerAmino): _38.Owner;
                toAmino(message: _38.Owner): _38.OwnerAmino;
                fromAminoMsg(object: _38.OwnerAminoMsg): _38.Owner;
                toAminoMsg(message: _38.Owner): _38.OwnerAminoMsg;
                fromProtoMsg(message: _38.OwnerProtoMsg): _38.Owner;
                toProto(message: _38.Owner): Uint8Array;
                toProtoMsg(message: _38.Owner): _38.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _38.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.CapabilityOwners;
                fromPartial(object: Partial<_38.CapabilityOwners>): _38.CapabilityOwners;
                fromAmino(object: _38.CapabilityOwnersAmino): _38.CapabilityOwners;
                toAmino(message: _38.CapabilityOwners): _38.CapabilityOwnersAmino;
                fromAminoMsg(object: _38.CapabilityOwnersAminoMsg): _38.CapabilityOwners;
                toAminoMsg(message: _38.CapabilityOwners): _38.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _38.CapabilityOwnersProtoMsg): _38.CapabilityOwners;
                toProto(message: _38.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _38.CapabilityOwners): _38.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace consensus {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _40.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.Module;
                    fromPartial(object: Partial<_40.Module>): _40.Module;
                    fromAmino(object: _40.ModuleAmino): _40.Module;
                    toAmino(message: _40.Module): _40.ModuleAmino;
                    fromAminoMsg(object: _40.ModuleAminoMsg): _40.Module;
                    toAminoMsg(message: _40.Module): _40.ModuleAminoMsg;
                    fromProtoMsg(message: _40.ModuleProtoMsg): _40.Module;
                    toProto(message: _40.Module): Uint8Array;
                    toProtoMsg(message: _40.Module): _40.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _324.MsgClientImpl;
            QueryClientImpl: typeof _306.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _42.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _42.MsgUpdateParams): {
                        typeUrl: string;
                        value: _42.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _42.MsgUpdateParams): {
                        typeUrl: string;
                        value: _42.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _42.MsgUpdateParams) => _42.MsgUpdateParamsAmino;
                    fromAmino: (object: _42.MsgUpdateParamsAmino) => _42.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _42.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.MsgUpdateParams;
                fromPartial(object: Partial<_42.MsgUpdateParams>): _42.MsgUpdateParams;
                fromAmino(object: _42.MsgUpdateParamsAmino): _42.MsgUpdateParams;
                toAmino(message: _42.MsgUpdateParams): _42.MsgUpdateParamsAmino;
                fromAminoMsg(object: _42.MsgUpdateParamsAminoMsg): _42.MsgUpdateParams;
                toAminoMsg(message: _42.MsgUpdateParams): _42.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _42.MsgUpdateParamsProtoMsg): _42.MsgUpdateParams;
                toProto(message: _42.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _42.MsgUpdateParams): _42.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _42.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_42.MsgUpdateParamsResponse>): _42.MsgUpdateParamsResponse;
                fromAmino(_: _42.MsgUpdateParamsResponseAmino): _42.MsgUpdateParamsResponse;
                toAmino(_: _42.MsgUpdateParamsResponse): _42.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _42.MsgUpdateParamsResponseAminoMsg): _42.MsgUpdateParamsResponse;
                toAminoMsg(message: _42.MsgUpdateParamsResponse): _42.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _42.MsgUpdateParamsResponseProtoMsg): _42.MsgUpdateParamsResponse;
                toProto(message: _42.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _42.MsgUpdateParamsResponse): _42.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _41.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.QueryParamsRequest;
                fromPartial(_: Partial<_41.QueryParamsRequest>): _41.QueryParamsRequest;
                fromAmino(_: _41.QueryParamsRequestAmino): _41.QueryParamsRequest;
                toAmino(_: _41.QueryParamsRequest): _41.QueryParamsRequestAmino;
                fromAminoMsg(object: _41.QueryParamsRequestAminoMsg): _41.QueryParamsRequest;
                toAminoMsg(message: _41.QueryParamsRequest): _41.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _41.QueryParamsRequestProtoMsg): _41.QueryParamsRequest;
                toProto(message: _41.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _41.QueryParamsRequest): _41.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _41.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.QueryParamsResponse;
                fromPartial(object: Partial<_41.QueryParamsResponse>): _41.QueryParamsResponse;
                fromAmino(object: _41.QueryParamsResponseAmino): _41.QueryParamsResponse;
                toAmino(message: _41.QueryParamsResponse): _41.QueryParamsResponseAmino;
                fromAminoMsg(object: _41.QueryParamsResponseAminoMsg): _41.QueryParamsResponse;
                toAminoMsg(message: _41.QueryParamsResponse): _41.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _41.QueryParamsResponseProtoMsg): _41.QueryParamsResponse;
                toProto(message: _41.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _41.QueryParamsResponse): _41.QueryParamsResponseProtoMsg;
            };
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _43.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _43.Module;
                    fromPartial(object: Partial<_43.Module>): _43.Module;
                    fromAmino(object: _43.ModuleAmino): _43.Module;
                    toAmino(message: _43.Module): _43.ModuleAmino;
                    fromAminoMsg(object: _43.ModuleAminoMsg): _43.Module;
                    toAminoMsg(message: _43.Module): _43.ModuleAminoMsg;
                    fromProtoMsg(message: _43.ModuleProtoMsg): _43.Module;
                    toProto(message: _43.Module): Uint8Array;
                    toProtoMsg(message: _43.Module): _43.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _325.MsgClientImpl;
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _45.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _45.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _45.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _45.MsgVerifyInvariant;
                    };
                    updateParams(value: _45.MsgUpdateParams): {
                        typeUrl: string;
                        value: _45.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _45.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _45.MsgVerifyInvariant;
                    };
                    updateParams(value: _45.MsgUpdateParams): {
                        typeUrl: string;
                        value: _45.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _45.MsgVerifyInvariant) => _45.MsgVerifyInvariantAmino;
                    fromAmino: (object: _45.MsgVerifyInvariantAmino) => _45.MsgVerifyInvariant;
                };
                "/cosmos.crisis.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _45.MsgUpdateParams) => _45.MsgUpdateParamsAmino;
                    fromAmino: (object: _45.MsgUpdateParamsAmino) => _45.MsgUpdateParams;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _45.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.MsgVerifyInvariant;
                fromPartial(object: Partial<_45.MsgVerifyInvariant>): _45.MsgVerifyInvariant;
                fromAmino(object: _45.MsgVerifyInvariantAmino): _45.MsgVerifyInvariant;
                toAmino(message: _45.MsgVerifyInvariant): _45.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _45.MsgVerifyInvariantAminoMsg): _45.MsgVerifyInvariant;
                toAminoMsg(message: _45.MsgVerifyInvariant): _45.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _45.MsgVerifyInvariantProtoMsg): _45.MsgVerifyInvariant;
                toProto(message: _45.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _45.MsgVerifyInvariant): _45.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _45.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_45.MsgVerifyInvariantResponse>): _45.MsgVerifyInvariantResponse;
                fromAmino(_: _45.MsgVerifyInvariantResponseAmino): _45.MsgVerifyInvariantResponse;
                toAmino(_: _45.MsgVerifyInvariantResponse): _45.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _45.MsgVerifyInvariantResponseAminoMsg): _45.MsgVerifyInvariantResponse;
                toAminoMsg(message: _45.MsgVerifyInvariantResponse): _45.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _45.MsgVerifyInvariantResponseProtoMsg): _45.MsgVerifyInvariantResponse;
                toProto(message: _45.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _45.MsgVerifyInvariantResponse): _45.MsgVerifyInvariantResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _45.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.MsgUpdateParams;
                fromPartial(object: Partial<_45.MsgUpdateParams>): _45.MsgUpdateParams;
                fromAmino(object: _45.MsgUpdateParamsAmino): _45.MsgUpdateParams;
                toAmino(message: _45.MsgUpdateParams): _45.MsgUpdateParamsAmino;
                fromAminoMsg(object: _45.MsgUpdateParamsAminoMsg): _45.MsgUpdateParams;
                toAminoMsg(message: _45.MsgUpdateParams): _45.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _45.MsgUpdateParamsProtoMsg): _45.MsgUpdateParams;
                toProto(message: _45.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _45.MsgUpdateParams): _45.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _45.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_45.MsgUpdateParamsResponse>): _45.MsgUpdateParamsResponse;
                fromAmino(_: _45.MsgUpdateParamsResponseAmino): _45.MsgUpdateParamsResponse;
                toAmino(_: _45.MsgUpdateParamsResponse): _45.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _45.MsgUpdateParamsResponseAminoMsg): _45.MsgUpdateParamsResponse;
                toAminoMsg(message: _45.MsgUpdateParamsResponse): _45.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _45.MsgUpdateParamsResponseProtoMsg): _45.MsgUpdateParamsResponse;
                toProto(message: _45.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _45.MsgUpdateParamsResponse): _45.MsgUpdateParamsResponseProtoMsg;
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
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _46.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.PubKey;
                fromPartial(object: Partial<_46.PubKey>): _46.PubKey;
                fromAmino(object: _46.PubKeyAmino): _46.PubKey;
                toAmino(message: _46.PubKey): _46.PubKeyAmino;
                fromAminoMsg(object: _46.PubKeyAminoMsg): _46.PubKey;
                toAminoMsg(message: _46.PubKey): _46.PubKeyAminoMsg;
                fromProtoMsg(message: _46.PubKeyProtoMsg): _46.PubKey;
                toProto(message: _46.PubKey): Uint8Array;
                toProtoMsg(message: _46.PubKey): _46.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _46.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.PrivKey;
                fromPartial(object: Partial<_46.PrivKey>): _46.PrivKey;
                fromAmino(object: _46.PrivKeyAmino): _46.PrivKey;
                toAmino(message: _46.PrivKey): _46.PrivKeyAmino;
                fromAminoMsg(object: _46.PrivKeyAminoMsg): _46.PrivKey;
                toAminoMsg(message: _46.PrivKey): _46.PrivKeyAminoMsg;
                fromProtoMsg(message: _46.PrivKeyProtoMsg): _46.PrivKey;
                toProto(message: _46.PrivKey): Uint8Array;
                toProtoMsg(message: _46.PrivKey): _46.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _47.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.BIP44Params;
                    fromPartial(object: Partial<_47.BIP44Params>): _47.BIP44Params;
                    fromAmino(object: _47.BIP44ParamsAmino): _47.BIP44Params;
                    toAmino(message: _47.BIP44Params): _47.BIP44ParamsAmino;
                    fromAminoMsg(object: _47.BIP44ParamsAminoMsg): _47.BIP44Params;
                    toAminoMsg(message: _47.BIP44Params): _47.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _47.BIP44ParamsProtoMsg): _47.BIP44Params;
                    toProto(message: _47.BIP44Params): Uint8Array;
                    toProtoMsg(message: _47.BIP44Params): _47.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _48.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.Record;
                    fromPartial(object: Partial<_48.Record>): _48.Record;
                    fromAmino(object: _48.RecordAmino): _48.Record;
                    toAmino(message: _48.Record): _48.RecordAmino;
                    fromAminoMsg(object: _48.RecordAminoMsg): _48.Record;
                    toAminoMsg(message: _48.Record): _48.RecordAminoMsg;
                    fromProtoMsg(message: _48.RecordProtoMsg): _48.Record;
                    toProto(message: _48.Record): Uint8Array;
                    toProtoMsg(message: _48.Record): _48.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _48.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.Record_Local;
                    fromPartial(object: Partial<_48.Record_Local>): _48.Record_Local;
                    fromAmino(object: _48.Record_LocalAmino): _48.Record_Local;
                    toAmino(message: _48.Record_Local): _48.Record_LocalAmino;
                    fromAminoMsg(object: _48.Record_LocalAminoMsg): _48.Record_Local;
                    toAminoMsg(message: _48.Record_Local): _48.Record_LocalAminoMsg;
                    fromProtoMsg(message: _48.Record_LocalProtoMsg): _48.Record_Local;
                    toProto(message: _48.Record_Local): Uint8Array;
                    toProtoMsg(message: _48.Record_Local): _48.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _48.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.Record_Ledger;
                    fromPartial(object: Partial<_48.Record_Ledger>): _48.Record_Ledger;
                    fromAmino(object: _48.Record_LedgerAmino): _48.Record_Ledger;
                    toAmino(message: _48.Record_Ledger): _48.Record_LedgerAmino;
                    fromAminoMsg(object: _48.Record_LedgerAminoMsg): _48.Record_Ledger;
                    toAminoMsg(message: _48.Record_Ledger): _48.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _48.Record_LedgerProtoMsg): _48.Record_Ledger;
                    toProto(message: _48.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _48.Record_Ledger): _48.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _48.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.Record_Multi;
                    fromPartial(_: Partial<_48.Record_Multi>): _48.Record_Multi;
                    fromAmino(_: _48.Record_MultiAmino): _48.Record_Multi;
                    toAmino(_: _48.Record_Multi): _48.Record_MultiAmino;
                    fromAminoMsg(object: _48.Record_MultiAminoMsg): _48.Record_Multi;
                    toAminoMsg(message: _48.Record_Multi): _48.Record_MultiAminoMsg;
                    fromProtoMsg(message: _48.Record_MultiProtoMsg): _48.Record_Multi;
                    toProto(message: _48.Record_Multi): Uint8Array;
                    toProtoMsg(message: _48.Record_Multi): _48.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _48.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.Record_Offline;
                    fromPartial(_: Partial<_48.Record_Offline>): _48.Record_Offline;
                    fromAmino(_: _48.Record_OfflineAmino): _48.Record_Offline;
                    toAmino(_: _48.Record_Offline): _48.Record_OfflineAmino;
                    fromAminoMsg(object: _48.Record_OfflineAminoMsg): _48.Record_Offline;
                    toAminoMsg(message: _48.Record_Offline): _48.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _48.Record_OfflineProtoMsg): _48.Record_Offline;
                    toProto(message: _48.Record_Offline): Uint8Array;
                    toProtoMsg(message: _48.Record_Offline): _48.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _49.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.LegacyAminoPubKey;
                fromPartial(object: Partial<_49.LegacyAminoPubKey>): _49.LegacyAminoPubKey;
                fromAmino(object: _49.LegacyAminoPubKeyAmino): _49.LegacyAminoPubKey;
                toAmino(message: _49.LegacyAminoPubKey): _49.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _49.LegacyAminoPubKeyAminoMsg): _49.LegacyAminoPubKey;
                toAminoMsg(message: _49.LegacyAminoPubKey): _49.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _49.LegacyAminoPubKeyProtoMsg): _49.LegacyAminoPubKey;
                toProto(message: _49.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _49.LegacyAminoPubKey): _49.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _50.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.PubKey;
                fromPartial(object: Partial<_50.PubKey>): _50.PubKey;
                fromAmino(object: _50.PubKeyAmino): _50.PubKey;
                toAmino(message: _50.PubKey): _50.PubKeyAmino;
                fromAminoMsg(object: _50.PubKeyAminoMsg): _50.PubKey;
                toAminoMsg(message: _50.PubKey): _50.PubKeyAminoMsg;
                fromProtoMsg(message: _50.PubKeyProtoMsg): _50.PubKey;
                toProto(message: _50.PubKey): Uint8Array;
                toProtoMsg(message: _50.PubKey): _50.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _50.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.PrivKey;
                fromPartial(object: Partial<_50.PrivKey>): _50.PrivKey;
                fromAmino(object: _50.PrivKeyAmino): _50.PrivKey;
                toAmino(message: _50.PrivKey): _50.PrivKeyAmino;
                fromAminoMsg(object: _50.PrivKeyAminoMsg): _50.PrivKey;
                toAminoMsg(message: _50.PrivKey): _50.PrivKeyAminoMsg;
                fromProtoMsg(message: _50.PrivKeyProtoMsg): _50.PrivKey;
                toProto(message: _50.PrivKey): Uint8Array;
                toProtoMsg(message: _50.PrivKey): _50.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _51.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.PubKey;
                fromPartial(object: Partial<_51.PubKey>): _51.PubKey;
                fromAmino(object: _51.PubKeyAmino): _51.PubKey;
                toAmino(message: _51.PubKey): _51.PubKeyAmino;
                fromAminoMsg(object: _51.PubKeyAminoMsg): _51.PubKey;
                toAminoMsg(message: _51.PubKey): _51.PubKeyAminoMsg;
                fromProtoMsg(message: _51.PubKeyProtoMsg): _51.PubKey;
                toProto(message: _51.PubKey): Uint8Array;
                toProtoMsg(message: _51.PubKey): _51.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _51.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.PrivKey;
                fromPartial(object: Partial<_51.PrivKey>): _51.PrivKey;
                fromAmino(object: _51.PrivKeyAmino): _51.PrivKey;
                toAmino(message: _51.PrivKey): _51.PrivKeyAmino;
                fromAminoMsg(object: _51.PrivKeyAminoMsg): _51.PrivKey;
                toAminoMsg(message: _51.PrivKey): _51.PrivKeyAminoMsg;
                fromProtoMsg(message: _51.PrivKeyProtoMsg): _51.PrivKey;
                toProto(message: _51.PrivKey): Uint8Array;
                toProtoMsg(message: _51.PrivKey): _51.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _52.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.Module;
                    fromPartial(object: Partial<_52.Module>): _52.Module;
                    fromAmino(object: _52.ModuleAmino): _52.Module;
                    toAmino(message: _52.Module): _52.ModuleAmino;
                    fromAminoMsg(object: _52.ModuleAminoMsg): _52.Module;
                    toAminoMsg(message: _52.Module): _52.ModuleAminoMsg;
                    fromProtoMsg(message: _52.ModuleProtoMsg): _52.Module;
                    toProto(message: _52.Module): Uint8Array;
                    toProtoMsg(message: _52.Module): _52.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _326.MsgClientImpl;
            QueryClientImpl: typeof _307.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                validatorDistributionInfo(request: _55.QueryValidatorDistributionInfoRequest): Promise<_55.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _55.QueryValidatorOutstandingRewardsRequest): Promise<_55.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _55.QueryValidatorCommissionRequest): Promise<_55.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _55.QueryValidatorSlashesRequest): Promise<_55.QueryValidatorSlashesResponse>;
                delegationRewards(request: _55.QueryDelegationRewardsRequest): Promise<_55.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _55.QueryDelegationTotalRewardsRequest): Promise<_55.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _55.QueryDelegatorValidatorsRequest): Promise<_55.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _55.QueryDelegatorWithdrawAddressRequest): Promise<_55.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _55.QueryCommunityPoolRequest): Promise<_55.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _56.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _56.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _56.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _56.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _56.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _56.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _56.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _56.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _56.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _56.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _56.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _56.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _56.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _56.MsgFundCommunityPool;
                    };
                    updateParams(value: _56.MsgUpdateParams): {
                        typeUrl: string;
                        value: _56.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _56.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _56.MsgCommunityPoolSpend;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _56.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _56.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _56.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _56.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _56.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _56.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _56.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _56.MsgFundCommunityPool;
                    };
                    updateParams(value: _56.MsgUpdateParams): {
                        typeUrl: string;
                        value: _56.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _56.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _56.MsgCommunityPoolSpend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _56.MsgSetWithdrawAddress) => _56.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _56.MsgSetWithdrawAddressAmino) => _56.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _56.MsgWithdrawDelegatorReward) => _56.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _56.MsgWithdrawDelegatorRewardAmino) => _56.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _56.MsgWithdrawValidatorCommission) => _56.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _56.MsgWithdrawValidatorCommissionAmino) => _56.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _56.MsgFundCommunityPool) => _56.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _56.MsgFundCommunityPoolAmino) => _56.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _56.MsgUpdateParams) => _56.MsgUpdateParamsAmino;
                    fromAmino: (object: _56.MsgUpdateParamsAmino) => _56.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: (message: _56.MsgCommunityPoolSpend) => _56.MsgCommunityPoolSpendAmino;
                    fromAmino: (object: _56.MsgCommunityPoolSpendAmino) => _56.MsgCommunityPoolSpend;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _56.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_56.MsgSetWithdrawAddress>): _56.MsgSetWithdrawAddress;
                fromAmino(object: _56.MsgSetWithdrawAddressAmino): _56.MsgSetWithdrawAddress;
                toAmino(message: _56.MsgSetWithdrawAddress): _56.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _56.MsgSetWithdrawAddressAminoMsg): _56.MsgSetWithdrawAddress;
                toAminoMsg(message: _56.MsgSetWithdrawAddress): _56.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _56.MsgSetWithdrawAddressProtoMsg): _56.MsgSetWithdrawAddress;
                toProto(message: _56.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _56.MsgSetWithdrawAddress): _56.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _56.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_56.MsgSetWithdrawAddressResponse>): _56.MsgSetWithdrawAddressResponse;
                fromAmino(_: _56.MsgSetWithdrawAddressResponseAmino): _56.MsgSetWithdrawAddressResponse;
                toAmino(_: _56.MsgSetWithdrawAddressResponse): _56.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _56.MsgSetWithdrawAddressResponseAminoMsg): _56.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _56.MsgSetWithdrawAddressResponse): _56.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _56.MsgSetWithdrawAddressResponseProtoMsg): _56.MsgSetWithdrawAddressResponse;
                toProto(message: _56.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _56.MsgSetWithdrawAddressResponse): _56.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _56.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_56.MsgWithdrawDelegatorReward>): _56.MsgWithdrawDelegatorReward;
                fromAmino(object: _56.MsgWithdrawDelegatorRewardAmino): _56.MsgWithdrawDelegatorReward;
                toAmino(message: _56.MsgWithdrawDelegatorReward): _56.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _56.MsgWithdrawDelegatorRewardAminoMsg): _56.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _56.MsgWithdrawDelegatorReward): _56.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _56.MsgWithdrawDelegatorRewardProtoMsg): _56.MsgWithdrawDelegatorReward;
                toProto(message: _56.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _56.MsgWithdrawDelegatorReward): _56.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _56.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_56.MsgWithdrawDelegatorRewardResponse>): _56.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _56.MsgWithdrawDelegatorRewardResponseAmino): _56.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _56.MsgWithdrawDelegatorRewardResponse): _56.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _56.MsgWithdrawDelegatorRewardResponseAminoMsg): _56.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _56.MsgWithdrawDelegatorRewardResponse): _56.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _56.MsgWithdrawDelegatorRewardResponseProtoMsg): _56.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _56.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _56.MsgWithdrawDelegatorRewardResponse): _56.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _56.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_56.MsgWithdrawValidatorCommission>): _56.MsgWithdrawValidatorCommission;
                fromAmino(object: _56.MsgWithdrawValidatorCommissionAmino): _56.MsgWithdrawValidatorCommission;
                toAmino(message: _56.MsgWithdrawValidatorCommission): _56.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _56.MsgWithdrawValidatorCommissionAminoMsg): _56.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _56.MsgWithdrawValidatorCommission): _56.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _56.MsgWithdrawValidatorCommissionProtoMsg): _56.MsgWithdrawValidatorCommission;
                toProto(message: _56.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _56.MsgWithdrawValidatorCommission): _56.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _56.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_56.MsgWithdrawValidatorCommissionResponse>): _56.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _56.MsgWithdrawValidatorCommissionResponseAmino): _56.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _56.MsgWithdrawValidatorCommissionResponse): _56.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _56.MsgWithdrawValidatorCommissionResponseAminoMsg): _56.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _56.MsgWithdrawValidatorCommissionResponse): _56.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _56.MsgWithdrawValidatorCommissionResponseProtoMsg): _56.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _56.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _56.MsgWithdrawValidatorCommissionResponse): _56.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _56.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.MsgFundCommunityPool;
                fromPartial(object: Partial<_56.MsgFundCommunityPool>): _56.MsgFundCommunityPool;
                fromAmino(object: _56.MsgFundCommunityPoolAmino): _56.MsgFundCommunityPool;
                toAmino(message: _56.MsgFundCommunityPool): _56.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _56.MsgFundCommunityPoolAminoMsg): _56.MsgFundCommunityPool;
                toAminoMsg(message: _56.MsgFundCommunityPool): _56.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _56.MsgFundCommunityPoolProtoMsg): _56.MsgFundCommunityPool;
                toProto(message: _56.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _56.MsgFundCommunityPool): _56.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _56.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_56.MsgFundCommunityPoolResponse>): _56.MsgFundCommunityPoolResponse;
                fromAmino(_: _56.MsgFundCommunityPoolResponseAmino): _56.MsgFundCommunityPoolResponse;
                toAmino(_: _56.MsgFundCommunityPoolResponse): _56.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _56.MsgFundCommunityPoolResponseAminoMsg): _56.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _56.MsgFundCommunityPoolResponse): _56.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _56.MsgFundCommunityPoolResponseProtoMsg): _56.MsgFundCommunityPoolResponse;
                toProto(message: _56.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _56.MsgFundCommunityPoolResponse): _56.MsgFundCommunityPoolResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _56.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.MsgUpdateParams;
                fromPartial(object: Partial<_56.MsgUpdateParams>): _56.MsgUpdateParams;
                fromAmino(object: _56.MsgUpdateParamsAmino): _56.MsgUpdateParams;
                toAmino(message: _56.MsgUpdateParams): _56.MsgUpdateParamsAmino;
                fromAminoMsg(object: _56.MsgUpdateParamsAminoMsg): _56.MsgUpdateParams;
                toAminoMsg(message: _56.MsgUpdateParams): _56.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _56.MsgUpdateParamsProtoMsg): _56.MsgUpdateParams;
                toProto(message: _56.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _56.MsgUpdateParams): _56.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _56.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_56.MsgUpdateParamsResponse>): _56.MsgUpdateParamsResponse;
                fromAmino(_: _56.MsgUpdateParamsResponseAmino): _56.MsgUpdateParamsResponse;
                toAmino(_: _56.MsgUpdateParamsResponse): _56.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _56.MsgUpdateParamsResponseAminoMsg): _56.MsgUpdateParamsResponse;
                toAminoMsg(message: _56.MsgUpdateParamsResponse): _56.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _56.MsgUpdateParamsResponseProtoMsg): _56.MsgUpdateParamsResponse;
                toProto(message: _56.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _56.MsgUpdateParamsResponse): _56.MsgUpdateParamsResponseProtoMsg;
            };
            MsgCommunityPoolSpend: {
                typeUrl: string;
                encode(message: _56.MsgCommunityPoolSpend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.MsgCommunityPoolSpend;
                fromPartial(object: Partial<_56.MsgCommunityPoolSpend>): _56.MsgCommunityPoolSpend;
                fromAmino(object: _56.MsgCommunityPoolSpendAmino): _56.MsgCommunityPoolSpend;
                toAmino(message: _56.MsgCommunityPoolSpend): _56.MsgCommunityPoolSpendAmino;
                fromAminoMsg(object: _56.MsgCommunityPoolSpendAminoMsg): _56.MsgCommunityPoolSpend;
                toAminoMsg(message: _56.MsgCommunityPoolSpend): _56.MsgCommunityPoolSpendAminoMsg;
                fromProtoMsg(message: _56.MsgCommunityPoolSpendProtoMsg): _56.MsgCommunityPoolSpend;
                toProto(message: _56.MsgCommunityPoolSpend): Uint8Array;
                toProtoMsg(message: _56.MsgCommunityPoolSpend): _56.MsgCommunityPoolSpendProtoMsg;
            };
            MsgCommunityPoolSpendResponse: {
                typeUrl: string;
                encode(_: _56.MsgCommunityPoolSpendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.MsgCommunityPoolSpendResponse;
                fromPartial(_: Partial<_56.MsgCommunityPoolSpendResponse>): _56.MsgCommunityPoolSpendResponse;
                fromAmino(_: _56.MsgCommunityPoolSpendResponseAmino): _56.MsgCommunityPoolSpendResponse;
                toAmino(_: _56.MsgCommunityPoolSpendResponse): _56.MsgCommunityPoolSpendResponseAmino;
                fromAminoMsg(object: _56.MsgCommunityPoolSpendResponseAminoMsg): _56.MsgCommunityPoolSpendResponse;
                toAminoMsg(message: _56.MsgCommunityPoolSpendResponse): _56.MsgCommunityPoolSpendResponseAminoMsg;
                fromProtoMsg(message: _56.MsgCommunityPoolSpendResponseProtoMsg): _56.MsgCommunityPoolSpendResponse;
                toProto(message: _56.MsgCommunityPoolSpendResponse): Uint8Array;
                toProtoMsg(message: _56.MsgCommunityPoolSpendResponse): _56.MsgCommunityPoolSpendResponseProtoMsg;
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
            QueryValidatorDistributionInfoRequest: {
                typeUrl: string;
                encode(message: _55.QueryValidatorDistributionInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.QueryValidatorDistributionInfoRequest;
                fromPartial(object: Partial<_55.QueryValidatorDistributionInfoRequest>): _55.QueryValidatorDistributionInfoRequest;
                fromAmino(object: _55.QueryValidatorDistributionInfoRequestAmino): _55.QueryValidatorDistributionInfoRequest;
                toAmino(message: _55.QueryValidatorDistributionInfoRequest): _55.QueryValidatorDistributionInfoRequestAmino;
                fromAminoMsg(object: _55.QueryValidatorDistributionInfoRequestAminoMsg): _55.QueryValidatorDistributionInfoRequest;
                toAminoMsg(message: _55.QueryValidatorDistributionInfoRequest): _55.QueryValidatorDistributionInfoRequestAminoMsg;
                fromProtoMsg(message: _55.QueryValidatorDistributionInfoRequestProtoMsg): _55.QueryValidatorDistributionInfoRequest;
                toProto(message: _55.QueryValidatorDistributionInfoRequest): Uint8Array;
                toProtoMsg(message: _55.QueryValidatorDistributionInfoRequest): _55.QueryValidatorDistributionInfoRequestProtoMsg;
            };
            QueryValidatorDistributionInfoResponse: {
                typeUrl: string;
                encode(message: _55.QueryValidatorDistributionInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.QueryValidatorDistributionInfoResponse;
                fromPartial(object: Partial<_55.QueryValidatorDistributionInfoResponse>): _55.QueryValidatorDistributionInfoResponse;
                fromAmino(object: _55.QueryValidatorDistributionInfoResponseAmino): _55.QueryValidatorDistributionInfoResponse;
                toAmino(message: _55.QueryValidatorDistributionInfoResponse): _55.QueryValidatorDistributionInfoResponseAmino;
                fromAminoMsg(object: _55.QueryValidatorDistributionInfoResponseAminoMsg): _55.QueryValidatorDistributionInfoResponse;
                toAminoMsg(message: _55.QueryValidatorDistributionInfoResponse): _55.QueryValidatorDistributionInfoResponseAminoMsg;
                fromProtoMsg(message: _55.QueryValidatorDistributionInfoResponseProtoMsg): _55.QueryValidatorDistributionInfoResponse;
                toProto(message: _55.QueryValidatorDistributionInfoResponse): Uint8Array;
                toProtoMsg(message: _55.QueryValidatorDistributionInfoResponse): _55.QueryValidatorDistributionInfoResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _55.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_55.QueryValidatorOutstandingRewardsRequest>): _55.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _55.QueryValidatorOutstandingRewardsRequestAmino): _55.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _55.QueryValidatorOutstandingRewardsRequest): _55.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _55.QueryValidatorOutstandingRewardsRequestAminoMsg): _55.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _55.QueryValidatorOutstandingRewardsRequest): _55.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _55.QueryValidatorOutstandingRewardsRequestProtoMsg): _55.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _55.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _55.QueryValidatorOutstandingRewardsRequest): _55.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _55.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_55.QueryValidatorOutstandingRewardsResponse>): _55.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _55.QueryValidatorOutstandingRewardsResponseAmino): _55.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _55.QueryValidatorOutstandingRewardsResponse): _55.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _55.QueryValidatorOutstandingRewardsResponseAminoMsg): _55.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _55.QueryValidatorOutstandingRewardsResponse): _55.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _55.QueryValidatorOutstandingRewardsResponseProtoMsg): _55.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _55.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _55.QueryValidatorOutstandingRewardsResponse): _55.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _55.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_55.QueryValidatorCommissionRequest>): _55.QueryValidatorCommissionRequest;
                fromAmino(object: _55.QueryValidatorCommissionRequestAmino): _55.QueryValidatorCommissionRequest;
                toAmino(message: _55.QueryValidatorCommissionRequest): _55.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _55.QueryValidatorCommissionRequestAminoMsg): _55.QueryValidatorCommissionRequest;
                toAminoMsg(message: _55.QueryValidatorCommissionRequest): _55.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _55.QueryValidatorCommissionRequestProtoMsg): _55.QueryValidatorCommissionRequest;
                toProto(message: _55.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _55.QueryValidatorCommissionRequest): _55.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _55.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_55.QueryValidatorCommissionResponse>): _55.QueryValidatorCommissionResponse;
                fromAmino(object: _55.QueryValidatorCommissionResponseAmino): _55.QueryValidatorCommissionResponse;
                toAmino(message: _55.QueryValidatorCommissionResponse): _55.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _55.QueryValidatorCommissionResponseAminoMsg): _55.QueryValidatorCommissionResponse;
                toAminoMsg(message: _55.QueryValidatorCommissionResponse): _55.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _55.QueryValidatorCommissionResponseProtoMsg): _55.QueryValidatorCommissionResponse;
                toProto(message: _55.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _55.QueryValidatorCommissionResponse): _55.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _55.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_55.QueryValidatorSlashesRequest>): _55.QueryValidatorSlashesRequest;
                fromAmino(object: _55.QueryValidatorSlashesRequestAmino): _55.QueryValidatorSlashesRequest;
                toAmino(message: _55.QueryValidatorSlashesRequest): _55.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _55.QueryValidatorSlashesRequestAminoMsg): _55.QueryValidatorSlashesRequest;
                toAminoMsg(message: _55.QueryValidatorSlashesRequest): _55.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _55.QueryValidatorSlashesRequestProtoMsg): _55.QueryValidatorSlashesRequest;
                toProto(message: _55.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _55.QueryValidatorSlashesRequest): _55.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _55.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_55.QueryValidatorSlashesResponse>): _55.QueryValidatorSlashesResponse;
                fromAmino(object: _55.QueryValidatorSlashesResponseAmino): _55.QueryValidatorSlashesResponse;
                toAmino(message: _55.QueryValidatorSlashesResponse): _55.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _55.QueryValidatorSlashesResponseAminoMsg): _55.QueryValidatorSlashesResponse;
                toAminoMsg(message: _55.QueryValidatorSlashesResponse): _55.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _55.QueryValidatorSlashesResponseProtoMsg): _55.QueryValidatorSlashesResponse;
                toProto(message: _55.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _55.QueryValidatorSlashesResponse): _55.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _55.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_55.QueryDelegationRewardsRequest>): _55.QueryDelegationRewardsRequest;
                fromAmino(object: _55.QueryDelegationRewardsRequestAmino): _55.QueryDelegationRewardsRequest;
                toAmino(message: _55.QueryDelegationRewardsRequest): _55.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _55.QueryDelegationRewardsRequestAminoMsg): _55.QueryDelegationRewardsRequest;
                toAminoMsg(message: _55.QueryDelegationRewardsRequest): _55.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _55.QueryDelegationRewardsRequestProtoMsg): _55.QueryDelegationRewardsRequest;
                toProto(message: _55.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _55.QueryDelegationRewardsRequest): _55.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _55.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_55.QueryDelegationRewardsResponse>): _55.QueryDelegationRewardsResponse;
                fromAmino(object: _55.QueryDelegationRewardsResponseAmino): _55.QueryDelegationRewardsResponse;
                toAmino(message: _55.QueryDelegationRewardsResponse): _55.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _55.QueryDelegationRewardsResponseAminoMsg): _55.QueryDelegationRewardsResponse;
                toAminoMsg(message: _55.QueryDelegationRewardsResponse): _55.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _55.QueryDelegationRewardsResponseProtoMsg): _55.QueryDelegationRewardsResponse;
                toProto(message: _55.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _55.QueryDelegationRewardsResponse): _55.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _55.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_55.QueryDelegationTotalRewardsRequest>): _55.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _55.QueryDelegationTotalRewardsRequestAmino): _55.QueryDelegationTotalRewardsRequest;
                toAmino(message: _55.QueryDelegationTotalRewardsRequest): _55.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _55.QueryDelegationTotalRewardsRequestAminoMsg): _55.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _55.QueryDelegationTotalRewardsRequest): _55.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _55.QueryDelegationTotalRewardsRequestProtoMsg): _55.QueryDelegationTotalRewardsRequest;
                toProto(message: _55.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _55.QueryDelegationTotalRewardsRequest): _55.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _55.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_55.QueryDelegationTotalRewardsResponse>): _55.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _55.QueryDelegationTotalRewardsResponseAmino): _55.QueryDelegationTotalRewardsResponse;
                toAmino(message: _55.QueryDelegationTotalRewardsResponse): _55.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _55.QueryDelegationTotalRewardsResponseAminoMsg): _55.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _55.QueryDelegationTotalRewardsResponse): _55.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _55.QueryDelegationTotalRewardsResponseProtoMsg): _55.QueryDelegationTotalRewardsResponse;
                toProto(message: _55.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _55.QueryDelegationTotalRewardsResponse): _55.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _55.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_55.QueryDelegatorValidatorsRequest>): _55.QueryDelegatorValidatorsRequest;
                fromAmino(object: _55.QueryDelegatorValidatorsRequestAmino): _55.QueryDelegatorValidatorsRequest;
                toAmino(message: _55.QueryDelegatorValidatorsRequest): _55.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _55.QueryDelegatorValidatorsRequestAminoMsg): _55.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _55.QueryDelegatorValidatorsRequest): _55.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _55.QueryDelegatorValidatorsRequestProtoMsg): _55.QueryDelegatorValidatorsRequest;
                toProto(message: _55.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _55.QueryDelegatorValidatorsRequest): _55.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _55.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_55.QueryDelegatorValidatorsResponse>): _55.QueryDelegatorValidatorsResponse;
                fromAmino(object: _55.QueryDelegatorValidatorsResponseAmino): _55.QueryDelegatorValidatorsResponse;
                toAmino(message: _55.QueryDelegatorValidatorsResponse): _55.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _55.QueryDelegatorValidatorsResponseAminoMsg): _55.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _55.QueryDelegatorValidatorsResponse): _55.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _55.QueryDelegatorValidatorsResponseProtoMsg): _55.QueryDelegatorValidatorsResponse;
                toProto(message: _55.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _55.QueryDelegatorValidatorsResponse): _55.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _55.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_55.QueryDelegatorWithdrawAddressRequest>): _55.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _55.QueryDelegatorWithdrawAddressRequestAmino): _55.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _55.QueryDelegatorWithdrawAddressRequest): _55.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _55.QueryDelegatorWithdrawAddressRequestAminoMsg): _55.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _55.QueryDelegatorWithdrawAddressRequest): _55.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _55.QueryDelegatorWithdrawAddressRequestProtoMsg): _55.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _55.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _55.QueryDelegatorWithdrawAddressRequest): _55.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _55.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_55.QueryDelegatorWithdrawAddressResponse>): _55.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _55.QueryDelegatorWithdrawAddressResponseAmino): _55.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _55.QueryDelegatorWithdrawAddressResponse): _55.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _55.QueryDelegatorWithdrawAddressResponseAminoMsg): _55.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _55.QueryDelegatorWithdrawAddressResponse): _55.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _55.QueryDelegatorWithdrawAddressResponseProtoMsg): _55.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _55.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _55.QueryDelegatorWithdrawAddressResponse): _55.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _55.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_55.QueryCommunityPoolRequest>): _55.QueryCommunityPoolRequest;
                fromAmino(_: _55.QueryCommunityPoolRequestAmino): _55.QueryCommunityPoolRequest;
                toAmino(_: _55.QueryCommunityPoolRequest): _55.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _55.QueryCommunityPoolRequestAminoMsg): _55.QueryCommunityPoolRequest;
                toAminoMsg(message: _55.QueryCommunityPoolRequest): _55.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _55.QueryCommunityPoolRequestProtoMsg): _55.QueryCommunityPoolRequest;
                toProto(message: _55.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _55.QueryCommunityPoolRequest): _55.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _55.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_55.QueryCommunityPoolResponse>): _55.QueryCommunityPoolResponse;
                fromAmino(object: _55.QueryCommunityPoolResponseAmino): _55.QueryCommunityPoolResponse;
                toAmino(message: _55.QueryCommunityPoolResponse): _55.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _55.QueryCommunityPoolResponseAminoMsg): _55.QueryCommunityPoolResponse;
                toAminoMsg(message: _55.QueryCommunityPoolResponse): _55.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _55.QueryCommunityPoolResponseProtoMsg): _55.QueryCommunityPoolResponse;
                toProto(message: _55.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _55.QueryCommunityPoolResponse): _55.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _54.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_54.DelegatorWithdrawInfo>): _54.DelegatorWithdrawInfo;
                fromAmino(object: _54.DelegatorWithdrawInfoAmino): _54.DelegatorWithdrawInfo;
                toAmino(message: _54.DelegatorWithdrawInfo): _54.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _54.DelegatorWithdrawInfoAminoMsg): _54.DelegatorWithdrawInfo;
                toAminoMsg(message: _54.DelegatorWithdrawInfo): _54.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _54.DelegatorWithdrawInfoProtoMsg): _54.DelegatorWithdrawInfo;
                toProto(message: _54.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _54.DelegatorWithdrawInfo): _54.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _54.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_54.ValidatorOutstandingRewardsRecord>): _54.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _54.ValidatorOutstandingRewardsRecordAmino): _54.ValidatorOutstandingRewardsRecord;
                toAmino(message: _54.ValidatorOutstandingRewardsRecord): _54.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _54.ValidatorOutstandingRewardsRecordAminoMsg): _54.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _54.ValidatorOutstandingRewardsRecord): _54.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _54.ValidatorOutstandingRewardsRecordProtoMsg): _54.ValidatorOutstandingRewardsRecord;
                toProto(message: _54.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _54.ValidatorOutstandingRewardsRecord): _54.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _54.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_54.ValidatorAccumulatedCommissionRecord>): _54.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _54.ValidatorAccumulatedCommissionRecordAmino): _54.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _54.ValidatorAccumulatedCommissionRecord): _54.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _54.ValidatorAccumulatedCommissionRecordAminoMsg): _54.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _54.ValidatorAccumulatedCommissionRecord): _54.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _54.ValidatorAccumulatedCommissionRecordProtoMsg): _54.ValidatorAccumulatedCommissionRecord;
                toProto(message: _54.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _54.ValidatorAccumulatedCommissionRecord): _54.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _54.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_54.ValidatorHistoricalRewardsRecord>): _54.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _54.ValidatorHistoricalRewardsRecordAmino): _54.ValidatorHistoricalRewardsRecord;
                toAmino(message: _54.ValidatorHistoricalRewardsRecord): _54.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _54.ValidatorHistoricalRewardsRecordAminoMsg): _54.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _54.ValidatorHistoricalRewardsRecord): _54.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _54.ValidatorHistoricalRewardsRecordProtoMsg): _54.ValidatorHistoricalRewardsRecord;
                toProto(message: _54.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _54.ValidatorHistoricalRewardsRecord): _54.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _54.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_54.ValidatorCurrentRewardsRecord>): _54.ValidatorCurrentRewardsRecord;
                fromAmino(object: _54.ValidatorCurrentRewardsRecordAmino): _54.ValidatorCurrentRewardsRecord;
                toAmino(message: _54.ValidatorCurrentRewardsRecord): _54.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _54.ValidatorCurrentRewardsRecordAminoMsg): _54.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _54.ValidatorCurrentRewardsRecord): _54.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _54.ValidatorCurrentRewardsRecordProtoMsg): _54.ValidatorCurrentRewardsRecord;
                toProto(message: _54.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _54.ValidatorCurrentRewardsRecord): _54.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _54.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_54.DelegatorStartingInfoRecord>): _54.DelegatorStartingInfoRecord;
                fromAmino(object: _54.DelegatorStartingInfoRecordAmino): _54.DelegatorStartingInfoRecord;
                toAmino(message: _54.DelegatorStartingInfoRecord): _54.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _54.DelegatorStartingInfoRecordAminoMsg): _54.DelegatorStartingInfoRecord;
                toAminoMsg(message: _54.DelegatorStartingInfoRecord): _54.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _54.DelegatorStartingInfoRecordProtoMsg): _54.DelegatorStartingInfoRecord;
                toProto(message: _54.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _54.DelegatorStartingInfoRecord): _54.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _54.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_54.ValidatorSlashEventRecord>): _54.ValidatorSlashEventRecord;
                fromAmino(object: _54.ValidatorSlashEventRecordAmino): _54.ValidatorSlashEventRecord;
                toAmino(message: _54.ValidatorSlashEventRecord): _54.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _54.ValidatorSlashEventRecordAminoMsg): _54.ValidatorSlashEventRecord;
                toAminoMsg(message: _54.ValidatorSlashEventRecord): _54.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _54.ValidatorSlashEventRecordProtoMsg): _54.ValidatorSlashEventRecord;
                toProto(message: _54.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _54.ValidatorSlashEventRecord): _54.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _54.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.GenesisState;
                fromPartial(object: Partial<_54.GenesisState>): _54.GenesisState;
                fromAmino(object: _54.GenesisStateAmino): _54.GenesisState;
                toAmino(message: _54.GenesisState): _54.GenesisStateAmino;
                fromAminoMsg(object: _54.GenesisStateAminoMsg): _54.GenesisState;
                toAminoMsg(message: _54.GenesisState): _54.GenesisStateAminoMsg;
                fromProtoMsg(message: _54.GenesisStateProtoMsg): _54.GenesisState;
                toProto(message: _54.GenesisState): Uint8Array;
                toProtoMsg(message: _54.GenesisState): _54.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _53.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.Params;
                fromPartial(object: Partial<_53.Params>): _53.Params;
                fromAmino(object: _53.ParamsAmino): _53.Params;
                toAmino(message: _53.Params): _53.ParamsAmino;
                fromAminoMsg(object: _53.ParamsAminoMsg): _53.Params;
                toAminoMsg(message: _53.Params): _53.ParamsAminoMsg;
                fromProtoMsg(message: _53.ParamsProtoMsg): _53.Params;
                toProto(message: _53.Params): Uint8Array;
                toProtoMsg(message: _53.Params): _53.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _53.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_53.ValidatorHistoricalRewards>): _53.ValidatorHistoricalRewards;
                fromAmino(object: _53.ValidatorHistoricalRewardsAmino): _53.ValidatorHistoricalRewards;
                toAmino(message: _53.ValidatorHistoricalRewards): _53.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _53.ValidatorHistoricalRewardsAminoMsg): _53.ValidatorHistoricalRewards;
                toAminoMsg(message: _53.ValidatorHistoricalRewards): _53.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _53.ValidatorHistoricalRewardsProtoMsg): _53.ValidatorHistoricalRewards;
                toProto(message: _53.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _53.ValidatorHistoricalRewards): _53.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _53.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.ValidatorCurrentRewards;
                fromPartial(object: Partial<_53.ValidatorCurrentRewards>): _53.ValidatorCurrentRewards;
                fromAmino(object: _53.ValidatorCurrentRewardsAmino): _53.ValidatorCurrentRewards;
                toAmino(message: _53.ValidatorCurrentRewards): _53.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _53.ValidatorCurrentRewardsAminoMsg): _53.ValidatorCurrentRewards;
                toAminoMsg(message: _53.ValidatorCurrentRewards): _53.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _53.ValidatorCurrentRewardsProtoMsg): _53.ValidatorCurrentRewards;
                toProto(message: _53.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _53.ValidatorCurrentRewards): _53.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _53.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_53.ValidatorAccumulatedCommission>): _53.ValidatorAccumulatedCommission;
                fromAmino(object: _53.ValidatorAccumulatedCommissionAmino): _53.ValidatorAccumulatedCommission;
                toAmino(message: _53.ValidatorAccumulatedCommission): _53.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _53.ValidatorAccumulatedCommissionAminoMsg): _53.ValidatorAccumulatedCommission;
                toAminoMsg(message: _53.ValidatorAccumulatedCommission): _53.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _53.ValidatorAccumulatedCommissionProtoMsg): _53.ValidatorAccumulatedCommission;
                toProto(message: _53.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _53.ValidatorAccumulatedCommission): _53.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _53.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_53.ValidatorOutstandingRewards>): _53.ValidatorOutstandingRewards;
                fromAmino(object: _53.ValidatorOutstandingRewardsAmino): _53.ValidatorOutstandingRewards;
                toAmino(message: _53.ValidatorOutstandingRewards): _53.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _53.ValidatorOutstandingRewardsAminoMsg): _53.ValidatorOutstandingRewards;
                toAminoMsg(message: _53.ValidatorOutstandingRewards): _53.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _53.ValidatorOutstandingRewardsProtoMsg): _53.ValidatorOutstandingRewards;
                toProto(message: _53.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _53.ValidatorOutstandingRewards): _53.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _53.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.ValidatorSlashEvent;
                fromPartial(object: Partial<_53.ValidatorSlashEvent>): _53.ValidatorSlashEvent;
                fromAmino(object: _53.ValidatorSlashEventAmino): _53.ValidatorSlashEvent;
                toAmino(message: _53.ValidatorSlashEvent): _53.ValidatorSlashEventAmino;
                fromAminoMsg(object: _53.ValidatorSlashEventAminoMsg): _53.ValidatorSlashEvent;
                toAminoMsg(message: _53.ValidatorSlashEvent): _53.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _53.ValidatorSlashEventProtoMsg): _53.ValidatorSlashEvent;
                toProto(message: _53.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _53.ValidatorSlashEvent): _53.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _53.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.ValidatorSlashEvents;
                fromPartial(object: Partial<_53.ValidatorSlashEvents>): _53.ValidatorSlashEvents;
                fromAmino(object: _53.ValidatorSlashEventsAmino): _53.ValidatorSlashEvents;
                toAmino(message: _53.ValidatorSlashEvents): _53.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _53.ValidatorSlashEventsAminoMsg): _53.ValidatorSlashEvents;
                toAminoMsg(message: _53.ValidatorSlashEvents): _53.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _53.ValidatorSlashEventsProtoMsg): _53.ValidatorSlashEvents;
                toProto(message: _53.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _53.ValidatorSlashEvents): _53.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _53.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.FeePool;
                fromPartial(object: Partial<_53.FeePool>): _53.FeePool;
                fromAmino(object: _53.FeePoolAmino): _53.FeePool;
                toAmino(message: _53.FeePool): _53.FeePoolAmino;
                fromAminoMsg(object: _53.FeePoolAminoMsg): _53.FeePool;
                toAminoMsg(message: _53.FeePool): _53.FeePoolAminoMsg;
                fromProtoMsg(message: _53.FeePoolProtoMsg): _53.FeePool;
                toProto(message: _53.FeePool): Uint8Array;
                toProtoMsg(message: _53.FeePool): _53.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _53.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_53.CommunityPoolSpendProposal>): _53.CommunityPoolSpendProposal;
                fromAmino(object: _53.CommunityPoolSpendProposalAmino): _53.CommunityPoolSpendProposal;
                toAmino(message: _53.CommunityPoolSpendProposal): _53.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _53.CommunityPoolSpendProposalAminoMsg): _53.CommunityPoolSpendProposal;
                toAminoMsg(message: _53.CommunityPoolSpendProposal): _53.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _53.CommunityPoolSpendProposalProtoMsg): _53.CommunityPoolSpendProposal;
                toProto(message: _53.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _53.CommunityPoolSpendProposal): _53.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _53.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.DelegatorStartingInfo;
                fromPartial(object: Partial<_53.DelegatorStartingInfo>): _53.DelegatorStartingInfo;
                fromAmino(object: _53.DelegatorStartingInfoAmino): _53.DelegatorStartingInfo;
                toAmino(message: _53.DelegatorStartingInfo): _53.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _53.DelegatorStartingInfoAminoMsg): _53.DelegatorStartingInfo;
                toAminoMsg(message: _53.DelegatorStartingInfo): _53.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _53.DelegatorStartingInfoProtoMsg): _53.DelegatorStartingInfo;
                toProto(message: _53.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _53.DelegatorStartingInfo): _53.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _53.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.DelegationDelegatorReward;
                fromPartial(object: Partial<_53.DelegationDelegatorReward>): _53.DelegationDelegatorReward;
                fromAmino(object: _53.DelegationDelegatorRewardAmino): _53.DelegationDelegatorReward;
                toAmino(message: _53.DelegationDelegatorReward): _53.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _53.DelegationDelegatorRewardAminoMsg): _53.DelegationDelegatorReward;
                toAminoMsg(message: _53.DelegationDelegatorReward): _53.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _53.DelegationDelegatorRewardProtoMsg): _53.DelegationDelegatorReward;
                toProto(message: _53.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _53.DelegationDelegatorReward): _53.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _53.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_53.CommunityPoolSpendProposalWithDeposit>): _53.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _53.CommunityPoolSpendProposalWithDepositAmino): _53.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _53.CommunityPoolSpendProposalWithDeposit): _53.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _53.CommunityPoolSpendProposalWithDepositAminoMsg): _53.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _53.CommunityPoolSpendProposalWithDeposit): _53.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _53.CommunityPoolSpendProposalWithDepositProtoMsg): _53.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _53.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _53.CommunityPoolSpendProposalWithDeposit): _53.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _57.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.Module;
                    fromPartial(_: Partial<_57.Module>): _57.Module;
                    fromAmino(_: _57.ModuleAmino): _57.Module;
                    toAmino(_: _57.Module): _57.ModuleAmino;
                    fromAminoMsg(object: _57.ModuleAminoMsg): _57.Module;
                    toAminoMsg(message: _57.Module): _57.ModuleAminoMsg;
                    fromProtoMsg(message: _57.ModuleProtoMsg): _57.Module;
                    toProto(message: _57.Module): Uint8Array;
                    toProtoMsg(message: _57.Module): _57.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _327.MsgClientImpl;
            QueryClientImpl: typeof _308.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _60.QueryEvidenceRequest): Promise<_60.QueryEvidenceResponse>;
                allEvidence(request?: _60.QueryAllEvidenceRequest): Promise<_60.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _61.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _61.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _61.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _61.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _61.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _61.MsgSubmitEvidence) => _61.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _61.MsgSubmitEvidenceAmino) => _61.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _61.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.MsgSubmitEvidence;
                fromPartial(object: Partial<_61.MsgSubmitEvidence>): _61.MsgSubmitEvidence;
                fromAmino(object: _61.MsgSubmitEvidenceAmino): _61.MsgSubmitEvidence;
                toAmino(message: _61.MsgSubmitEvidence): _61.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _61.MsgSubmitEvidenceAminoMsg): _61.MsgSubmitEvidence;
                toAminoMsg(message: _61.MsgSubmitEvidence): _61.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _61.MsgSubmitEvidenceProtoMsg): _61.MsgSubmitEvidence;
                toProto(message: _61.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _61.MsgSubmitEvidence): _61.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _61.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_61.MsgSubmitEvidenceResponse>): _61.MsgSubmitEvidenceResponse;
                fromAmino(object: _61.MsgSubmitEvidenceResponseAmino): _61.MsgSubmitEvidenceResponse;
                toAmino(message: _61.MsgSubmitEvidenceResponse): _61.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _61.MsgSubmitEvidenceResponseAminoMsg): _61.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _61.MsgSubmitEvidenceResponse): _61.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _61.MsgSubmitEvidenceResponseProtoMsg): _61.MsgSubmitEvidenceResponse;
                toProto(message: _61.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _61.MsgSubmitEvidenceResponse): _61.MsgSubmitEvidenceResponseProtoMsg;
            };
            Cosmos_evidencev1beta1Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _60.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.QueryEvidenceRequest;
                fromPartial(object: Partial<_60.QueryEvidenceRequest>): _60.QueryEvidenceRequest;
                fromAmino(object: _60.QueryEvidenceRequestAmino): _60.QueryEvidenceRequest;
                toAmino(message: _60.QueryEvidenceRequest): _60.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _60.QueryEvidenceRequestAminoMsg): _60.QueryEvidenceRequest;
                toAminoMsg(message: _60.QueryEvidenceRequest): _60.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _60.QueryEvidenceRequestProtoMsg): _60.QueryEvidenceRequest;
                toProto(message: _60.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _60.QueryEvidenceRequest): _60.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _60.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.QueryEvidenceResponse;
                fromPartial(object: Partial<_60.QueryEvidenceResponse>): _60.QueryEvidenceResponse;
                fromAmino(object: _60.QueryEvidenceResponseAmino): _60.QueryEvidenceResponse;
                toAmino(message: _60.QueryEvidenceResponse): _60.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _60.QueryEvidenceResponseAminoMsg): _60.QueryEvidenceResponse;
                toAminoMsg(message: _60.QueryEvidenceResponse): _60.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _60.QueryEvidenceResponseProtoMsg): _60.QueryEvidenceResponse;
                toProto(message: _60.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _60.QueryEvidenceResponse): _60.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _60.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_60.QueryAllEvidenceRequest>): _60.QueryAllEvidenceRequest;
                fromAmino(object: _60.QueryAllEvidenceRequestAmino): _60.QueryAllEvidenceRequest;
                toAmino(message: _60.QueryAllEvidenceRequest): _60.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _60.QueryAllEvidenceRequestAminoMsg): _60.QueryAllEvidenceRequest;
                toAminoMsg(message: _60.QueryAllEvidenceRequest): _60.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _60.QueryAllEvidenceRequestProtoMsg): _60.QueryAllEvidenceRequest;
                toProto(message: _60.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _60.QueryAllEvidenceRequest): _60.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _60.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_60.QueryAllEvidenceResponse>): _60.QueryAllEvidenceResponse;
                fromAmino(object: _60.QueryAllEvidenceResponseAmino): _60.QueryAllEvidenceResponse;
                toAmino(message: _60.QueryAllEvidenceResponse): _60.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _60.QueryAllEvidenceResponseAminoMsg): _60.QueryAllEvidenceResponse;
                toAminoMsg(message: _60.QueryAllEvidenceResponse): _60.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _60.QueryAllEvidenceResponseProtoMsg): _60.QueryAllEvidenceResponse;
                toProto(message: _60.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _60.QueryAllEvidenceResponse): _60.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _58.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.Equivocation;
                fromPartial(object: Partial<_58.Equivocation>): _58.Equivocation;
                fromAmino(object: _58.EquivocationAmino): _58.Equivocation;
                toAmino(message: _58.Equivocation): _58.EquivocationAmino;
                fromAminoMsg(object: _58.EquivocationAminoMsg): _58.Equivocation;
                toAminoMsg(message: _58.Equivocation): _58.EquivocationAminoMsg;
                fromProtoMsg(message: _58.EquivocationProtoMsg): _58.Equivocation;
                toProto(message: _58.Equivocation): Uint8Array;
                toProtoMsg(message: _58.Equivocation): _58.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _62.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _62.Module;
                    fromPartial(_: Partial<_62.Module>): _62.Module;
                    fromAmino(_: _62.ModuleAmino): _62.Module;
                    toAmino(_: _62.Module): _62.ModuleAmino;
                    fromAminoMsg(object: _62.ModuleAminoMsg): _62.Module;
                    toAminoMsg(message: _62.Module): _62.ModuleAminoMsg;
                    fromProtoMsg(message: _62.ModuleProtoMsg): _62.Module;
                    toProto(message: _62.Module): Uint8Array;
                    toProtoMsg(message: _62.Module): _62.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _328.MsgClientImpl;
            QueryClientImpl: typeof _309.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _65.QueryAllowanceRequest): Promise<_65.QueryAllowanceResponse>;
                allowances(request: _65.QueryAllowancesRequest): Promise<_65.QueryAllowancesResponse>;
                allowancesByGranter(request: _65.QueryAllowancesByGranterRequest): Promise<_65.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _66.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _66.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _66.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _66.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _66.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _66.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _66.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _66.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _66.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _66.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _66.MsgGrantAllowance) => _66.MsgGrantAllowanceAmino;
                    fromAmino: (object: _66.MsgGrantAllowanceAmino) => _66.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _66.MsgRevokeAllowance) => _66.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _66.MsgRevokeAllowanceAmino) => _66.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _66.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.MsgGrantAllowance;
                fromPartial(object: Partial<_66.MsgGrantAllowance>): _66.MsgGrantAllowance;
                fromAmino(object: _66.MsgGrantAllowanceAmino): _66.MsgGrantAllowance;
                toAmino(message: _66.MsgGrantAllowance): _66.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _66.MsgGrantAllowanceAminoMsg): _66.MsgGrantAllowance;
                toAminoMsg(message: _66.MsgGrantAllowance): _66.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _66.MsgGrantAllowanceProtoMsg): _66.MsgGrantAllowance;
                toProto(message: _66.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _66.MsgGrantAllowance): _66.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _66.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_66.MsgGrantAllowanceResponse>): _66.MsgGrantAllowanceResponse;
                fromAmino(_: _66.MsgGrantAllowanceResponseAmino): _66.MsgGrantAllowanceResponse;
                toAmino(_: _66.MsgGrantAllowanceResponse): _66.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _66.MsgGrantAllowanceResponseAminoMsg): _66.MsgGrantAllowanceResponse;
                toAminoMsg(message: _66.MsgGrantAllowanceResponse): _66.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _66.MsgGrantAllowanceResponseProtoMsg): _66.MsgGrantAllowanceResponse;
                toProto(message: _66.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _66.MsgGrantAllowanceResponse): _66.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _66.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.MsgRevokeAllowance;
                fromPartial(object: Partial<_66.MsgRevokeAllowance>): _66.MsgRevokeAllowance;
                fromAmino(object: _66.MsgRevokeAllowanceAmino): _66.MsgRevokeAllowance;
                toAmino(message: _66.MsgRevokeAllowance): _66.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _66.MsgRevokeAllowanceAminoMsg): _66.MsgRevokeAllowance;
                toAminoMsg(message: _66.MsgRevokeAllowance): _66.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _66.MsgRevokeAllowanceProtoMsg): _66.MsgRevokeAllowance;
                toProto(message: _66.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _66.MsgRevokeAllowance): _66.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _66.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_66.MsgRevokeAllowanceResponse>): _66.MsgRevokeAllowanceResponse;
                fromAmino(_: _66.MsgRevokeAllowanceResponseAmino): _66.MsgRevokeAllowanceResponse;
                toAmino(_: _66.MsgRevokeAllowanceResponse): _66.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _66.MsgRevokeAllowanceResponseAminoMsg): _66.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _66.MsgRevokeAllowanceResponse): _66.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _66.MsgRevokeAllowanceResponseProtoMsg): _66.MsgRevokeAllowanceResponse;
                toProto(message: _66.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _66.MsgRevokeAllowanceResponse): _66.MsgRevokeAllowanceResponseProtoMsg;
            };
            Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _63.BasicAllowance | _63.PeriodicAllowance | _63.AllowedMsgAllowance;
            Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _65.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.QueryAllowanceRequest;
                fromPartial(object: Partial<_65.QueryAllowanceRequest>): _65.QueryAllowanceRequest;
                fromAmino(object: _65.QueryAllowanceRequestAmino): _65.QueryAllowanceRequest;
                toAmino(message: _65.QueryAllowanceRequest): _65.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _65.QueryAllowanceRequestAminoMsg): _65.QueryAllowanceRequest;
                toAminoMsg(message: _65.QueryAllowanceRequest): _65.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _65.QueryAllowanceRequestProtoMsg): _65.QueryAllowanceRequest;
                toProto(message: _65.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _65.QueryAllowanceRequest): _65.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _65.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.QueryAllowanceResponse;
                fromPartial(object: Partial<_65.QueryAllowanceResponse>): _65.QueryAllowanceResponse;
                fromAmino(object: _65.QueryAllowanceResponseAmino): _65.QueryAllowanceResponse;
                toAmino(message: _65.QueryAllowanceResponse): _65.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _65.QueryAllowanceResponseAminoMsg): _65.QueryAllowanceResponse;
                toAminoMsg(message: _65.QueryAllowanceResponse): _65.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _65.QueryAllowanceResponseProtoMsg): _65.QueryAllowanceResponse;
                toProto(message: _65.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _65.QueryAllowanceResponse): _65.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _65.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.QueryAllowancesRequest;
                fromPartial(object: Partial<_65.QueryAllowancesRequest>): _65.QueryAllowancesRequest;
                fromAmino(object: _65.QueryAllowancesRequestAmino): _65.QueryAllowancesRequest;
                toAmino(message: _65.QueryAllowancesRequest): _65.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _65.QueryAllowancesRequestAminoMsg): _65.QueryAllowancesRequest;
                toAminoMsg(message: _65.QueryAllowancesRequest): _65.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _65.QueryAllowancesRequestProtoMsg): _65.QueryAllowancesRequest;
                toProto(message: _65.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _65.QueryAllowancesRequest): _65.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _65.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.QueryAllowancesResponse;
                fromPartial(object: Partial<_65.QueryAllowancesResponse>): _65.QueryAllowancesResponse;
                fromAmino(object: _65.QueryAllowancesResponseAmino): _65.QueryAllowancesResponse;
                toAmino(message: _65.QueryAllowancesResponse): _65.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _65.QueryAllowancesResponseAminoMsg): _65.QueryAllowancesResponse;
                toAminoMsg(message: _65.QueryAllowancesResponse): _65.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _65.QueryAllowancesResponseProtoMsg): _65.QueryAllowancesResponse;
                toProto(message: _65.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _65.QueryAllowancesResponse): _65.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _65.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_65.QueryAllowancesByGranterRequest>): _65.QueryAllowancesByGranterRequest;
                fromAmino(object: _65.QueryAllowancesByGranterRequestAmino): _65.QueryAllowancesByGranterRequest;
                toAmino(message: _65.QueryAllowancesByGranterRequest): _65.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _65.QueryAllowancesByGranterRequestAminoMsg): _65.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _65.QueryAllowancesByGranterRequest): _65.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _65.QueryAllowancesByGranterRequestProtoMsg): _65.QueryAllowancesByGranterRequest;
                toProto(message: _65.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _65.QueryAllowancesByGranterRequest): _65.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _65.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_65.QueryAllowancesByGranterResponse>): _65.QueryAllowancesByGranterResponse;
                fromAmino(object: _65.QueryAllowancesByGranterResponseAmino): _65.QueryAllowancesByGranterResponse;
                toAmino(message: _65.QueryAllowancesByGranterResponse): _65.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _65.QueryAllowancesByGranterResponseAminoMsg): _65.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _65.QueryAllowancesByGranterResponse): _65.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _65.QueryAllowancesByGranterResponseProtoMsg): _65.QueryAllowancesByGranterResponse;
                toProto(message: _65.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _65.QueryAllowancesByGranterResponse): _65.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _63.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.BasicAllowance;
                fromPartial(object: Partial<_63.BasicAllowance>): _63.BasicAllowance;
                fromAmino(object: _63.BasicAllowanceAmino): _63.BasicAllowance;
                toAmino(message: _63.BasicAllowance): _63.BasicAllowanceAmino;
                fromAminoMsg(object: _63.BasicAllowanceAminoMsg): _63.BasicAllowance;
                toAminoMsg(message: _63.BasicAllowance): _63.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _63.BasicAllowanceProtoMsg): _63.BasicAllowance;
                toProto(message: _63.BasicAllowance): Uint8Array;
                toProtoMsg(message: _63.BasicAllowance): _63.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _63.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.PeriodicAllowance;
                fromPartial(object: Partial<_63.PeriodicAllowance>): _63.PeriodicAllowance;
                fromAmino(object: _63.PeriodicAllowanceAmino): _63.PeriodicAllowance;
                toAmino(message: _63.PeriodicAllowance): _63.PeriodicAllowanceAmino;
                fromAminoMsg(object: _63.PeriodicAllowanceAminoMsg): _63.PeriodicAllowance;
                toAminoMsg(message: _63.PeriodicAllowance): _63.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _63.PeriodicAllowanceProtoMsg): _63.PeriodicAllowance;
                toProto(message: _63.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _63.PeriodicAllowance): _63.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _63.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.AllowedMsgAllowance;
                fromPartial(object: Partial<_63.AllowedMsgAllowance>): _63.AllowedMsgAllowance;
                fromAmino(object: _63.AllowedMsgAllowanceAmino): _63.AllowedMsgAllowance;
                toAmino(message: _63.AllowedMsgAllowance): _63.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _63.AllowedMsgAllowanceAminoMsg): _63.AllowedMsgAllowance;
                toAminoMsg(message: _63.AllowedMsgAllowance): _63.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _63.AllowedMsgAllowanceProtoMsg): _63.AllowedMsgAllowance;
                toProto(message: _63.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _63.AllowedMsgAllowance): _63.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _63.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.Grant;
                fromPartial(object: Partial<_63.Grant>): _63.Grant;
                fromAmino(object: _63.GrantAmino): _63.Grant;
                toAmino(message: _63.Grant): _63.GrantAmino;
                fromAminoMsg(object: _63.GrantAminoMsg): _63.Grant;
                toAminoMsg(message: _63.Grant): _63.GrantAminoMsg;
                fromProtoMsg(message: _63.GrantProtoMsg): _63.Grant;
                toProto(message: _63.Grant): Uint8Array;
                toProtoMsg(message: _63.Grant): _63.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _67.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.Module;
                    fromPartial(_: Partial<_67.Module>): _67.Module;
                    fromAmino(_: _67.ModuleAmino): _67.Module;
                    toAmino(_: _67.Module): _67.ModuleAmino;
                    fromAminoMsg(object: _67.ModuleAminoMsg): _67.Module;
                    toAminoMsg(message: _67.Module): _67.ModuleAminoMsg;
                    fromProtoMsg(message: _67.ModuleProtoMsg): _67.Module;
                    toProto(message: _67.Module): Uint8Array;
                    toProtoMsg(message: _67.Module): _67.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            GenesisState: {
                typeUrl: string;
                encode(message: _68.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.GenesisState;
                fromPartial(object: Partial<_68.GenesisState>): _68.GenesisState;
                fromAmino(object: _68.GenesisStateAmino): _68.GenesisState;
                toAmino(message: _68.GenesisState): _68.GenesisStateAmino;
                fromAminoMsg(object: _68.GenesisStateAminoMsg): _68.GenesisState;
                toAminoMsg(message: _68.GenesisState): _68.GenesisStateAminoMsg;
                fromProtoMsg(message: _68.GenesisStateProtoMsg): _68.GenesisState;
                toProto(message: _68.GenesisState): Uint8Array;
                toProtoMsg(message: _68.GenesisState): _68.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _69.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.Module;
                    fromPartial(object: Partial<_69.Module>): _69.Module;
                    fromAmino(object: _69.ModuleAmino): _69.Module;
                    toAmino(message: _69.Module): _69.ModuleAmino;
                    fromAminoMsg(object: _69.ModuleAminoMsg): _69.Module;
                    toAminoMsg(message: _69.Module): _69.ModuleAminoMsg;
                    fromProtoMsg(message: _69.ModuleProtoMsg): _69.Module;
                    toProto(message: _69.Module): Uint8Array;
                    toProtoMsg(message: _69.Module): _69.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _329.MsgClientImpl;
            QueryClientImpl: typeof _310.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _72.QueryProposalRequest): Promise<_72.QueryProposalResponse>;
                proposals(request: _72.QueryProposalsRequest): Promise<_72.QueryProposalsResponse>;
                vote(request: _72.QueryVoteRequest): Promise<_72.QueryVoteResponse>;
                votes(request: _72.QueryVotesRequest): Promise<_72.QueryVotesResponse>;
                params(request: _72.QueryParamsRequest): Promise<_72.QueryParamsResponse>;
                deposit(request: _72.QueryDepositRequest): Promise<_72.QueryDepositResponse>;
                deposits(request: _72.QueryDepositsRequest): Promise<_72.QueryDepositsResponse>;
                tallyResult(request: _72.QueryTallyResultRequest): Promise<_72.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _73.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _73.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _73.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _73.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _73.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _73.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _73.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _73.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _73.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _73.MsgExecLegacyContent;
                    };
                    vote(value: _73.MsgVote): {
                        typeUrl: string;
                        value: _73.MsgVote;
                    };
                    voteWeighted(value: _73.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _73.MsgVoteWeighted;
                    };
                    deposit(value: _73.MsgDeposit): {
                        typeUrl: string;
                        value: _73.MsgDeposit;
                    };
                    updateParams(value: _73.MsgUpdateParams): {
                        typeUrl: string;
                        value: _73.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    submitProposal(value: _73.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _73.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _73.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _73.MsgExecLegacyContent;
                    };
                    vote(value: _73.MsgVote): {
                        typeUrl: string;
                        value: _73.MsgVote;
                    };
                    voteWeighted(value: _73.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _73.MsgVoteWeighted;
                    };
                    deposit(value: _73.MsgDeposit): {
                        typeUrl: string;
                        value: _73.MsgDeposit;
                    };
                    updateParams(value: _73.MsgUpdateParams): {
                        typeUrl: string;
                        value: _73.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _73.MsgSubmitProposal) => _73.MsgSubmitProposalAmino;
                    fromAmino: (object: _73.MsgSubmitProposalAmino) => _73.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _73.MsgExecLegacyContent) => _73.MsgExecLegacyContentAmino;
                    fromAmino: (object: _73.MsgExecLegacyContentAmino) => _73.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _73.MsgVote) => _73.MsgVoteAmino;
                    fromAmino: (object: _73.MsgVoteAmino) => _73.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _73.MsgVoteWeighted) => _73.MsgVoteWeightedAmino;
                    fromAmino: (object: _73.MsgVoteWeightedAmino) => _73.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _73.MsgDeposit) => _73.MsgDepositAmino;
                    fromAmino: (object: _73.MsgDepositAmino) => _73.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _73.MsgUpdateParams) => _73.MsgUpdateParamsAmino;
                    fromAmino: (object: _73.MsgUpdateParamsAmino) => _73.MsgUpdateParams;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _73.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.MsgSubmitProposal;
                fromPartial(object: Partial<_73.MsgSubmitProposal>): _73.MsgSubmitProposal;
                fromAmino(object: _73.MsgSubmitProposalAmino): _73.MsgSubmitProposal;
                toAmino(message: _73.MsgSubmitProposal): _73.MsgSubmitProposalAmino;
                fromAminoMsg(object: _73.MsgSubmitProposalAminoMsg): _73.MsgSubmitProposal;
                toAminoMsg(message: _73.MsgSubmitProposal): _73.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _73.MsgSubmitProposalProtoMsg): _73.MsgSubmitProposal;
                toProto(message: _73.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _73.MsgSubmitProposal): _73.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _73.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_73.MsgSubmitProposalResponse>): _73.MsgSubmitProposalResponse;
                fromAmino(object: _73.MsgSubmitProposalResponseAmino): _73.MsgSubmitProposalResponse;
                toAmino(message: _73.MsgSubmitProposalResponse): _73.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _73.MsgSubmitProposalResponseAminoMsg): _73.MsgSubmitProposalResponse;
                toAminoMsg(message: _73.MsgSubmitProposalResponse): _73.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _73.MsgSubmitProposalResponseProtoMsg): _73.MsgSubmitProposalResponse;
                toProto(message: _73.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _73.MsgSubmitProposalResponse): _73.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _73.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.MsgExecLegacyContent;
                fromPartial(object: Partial<_73.MsgExecLegacyContent>): _73.MsgExecLegacyContent;
                fromAmino(object: _73.MsgExecLegacyContentAmino): _73.MsgExecLegacyContent;
                toAmino(message: _73.MsgExecLegacyContent): _73.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _73.MsgExecLegacyContentAminoMsg): _73.MsgExecLegacyContent;
                toAminoMsg(message: _73.MsgExecLegacyContent): _73.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _73.MsgExecLegacyContentProtoMsg): _73.MsgExecLegacyContent;
                toProto(message: _73.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _73.MsgExecLegacyContent): _73.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _73.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_73.MsgExecLegacyContentResponse>): _73.MsgExecLegacyContentResponse;
                fromAmino(_: _73.MsgExecLegacyContentResponseAmino): _73.MsgExecLegacyContentResponse;
                toAmino(_: _73.MsgExecLegacyContentResponse): _73.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _73.MsgExecLegacyContentResponseAminoMsg): _73.MsgExecLegacyContentResponse;
                toAminoMsg(message: _73.MsgExecLegacyContentResponse): _73.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _73.MsgExecLegacyContentResponseProtoMsg): _73.MsgExecLegacyContentResponse;
                toProto(message: _73.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _73.MsgExecLegacyContentResponse): _73.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _73.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.MsgVote;
                fromPartial(object: Partial<_73.MsgVote>): _73.MsgVote;
                fromAmino(object: _73.MsgVoteAmino): _73.MsgVote;
                toAmino(message: _73.MsgVote): _73.MsgVoteAmino;
                fromAminoMsg(object: _73.MsgVoteAminoMsg): _73.MsgVote;
                toAminoMsg(message: _73.MsgVote): _73.MsgVoteAminoMsg;
                fromProtoMsg(message: _73.MsgVoteProtoMsg): _73.MsgVote;
                toProto(message: _73.MsgVote): Uint8Array;
                toProtoMsg(message: _73.MsgVote): _73.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _73.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.MsgVoteResponse;
                fromPartial(_: Partial<_73.MsgVoteResponse>): _73.MsgVoteResponse;
                fromAmino(_: _73.MsgVoteResponseAmino): _73.MsgVoteResponse;
                toAmino(_: _73.MsgVoteResponse): _73.MsgVoteResponseAmino;
                fromAminoMsg(object: _73.MsgVoteResponseAminoMsg): _73.MsgVoteResponse;
                toAminoMsg(message: _73.MsgVoteResponse): _73.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _73.MsgVoteResponseProtoMsg): _73.MsgVoteResponse;
                toProto(message: _73.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _73.MsgVoteResponse): _73.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _73.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.MsgVoteWeighted;
                fromPartial(object: Partial<_73.MsgVoteWeighted>): _73.MsgVoteWeighted;
                fromAmino(object: _73.MsgVoteWeightedAmino): _73.MsgVoteWeighted;
                toAmino(message: _73.MsgVoteWeighted): _73.MsgVoteWeightedAmino;
                fromAminoMsg(object: _73.MsgVoteWeightedAminoMsg): _73.MsgVoteWeighted;
                toAminoMsg(message: _73.MsgVoteWeighted): _73.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _73.MsgVoteWeightedProtoMsg): _73.MsgVoteWeighted;
                toProto(message: _73.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _73.MsgVoteWeighted): _73.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _73.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_73.MsgVoteWeightedResponse>): _73.MsgVoteWeightedResponse;
                fromAmino(_: _73.MsgVoteWeightedResponseAmino): _73.MsgVoteWeightedResponse;
                toAmino(_: _73.MsgVoteWeightedResponse): _73.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _73.MsgVoteWeightedResponseAminoMsg): _73.MsgVoteWeightedResponse;
                toAminoMsg(message: _73.MsgVoteWeightedResponse): _73.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _73.MsgVoteWeightedResponseProtoMsg): _73.MsgVoteWeightedResponse;
                toProto(message: _73.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _73.MsgVoteWeightedResponse): _73.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _73.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.MsgDeposit;
                fromPartial(object: Partial<_73.MsgDeposit>): _73.MsgDeposit;
                fromAmino(object: _73.MsgDepositAmino): _73.MsgDeposit;
                toAmino(message: _73.MsgDeposit): _73.MsgDepositAmino;
                fromAminoMsg(object: _73.MsgDepositAminoMsg): _73.MsgDeposit;
                toAminoMsg(message: _73.MsgDeposit): _73.MsgDepositAminoMsg;
                fromProtoMsg(message: _73.MsgDepositProtoMsg): _73.MsgDeposit;
                toProto(message: _73.MsgDeposit): Uint8Array;
                toProtoMsg(message: _73.MsgDeposit): _73.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _73.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.MsgDepositResponse;
                fromPartial(_: Partial<_73.MsgDepositResponse>): _73.MsgDepositResponse;
                fromAmino(_: _73.MsgDepositResponseAmino): _73.MsgDepositResponse;
                toAmino(_: _73.MsgDepositResponse): _73.MsgDepositResponseAmino;
                fromAminoMsg(object: _73.MsgDepositResponseAminoMsg): _73.MsgDepositResponse;
                toAminoMsg(message: _73.MsgDepositResponse): _73.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _73.MsgDepositResponseProtoMsg): _73.MsgDepositResponse;
                toProto(message: _73.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _73.MsgDepositResponse): _73.MsgDepositResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _73.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.MsgUpdateParams;
                fromPartial(object: Partial<_73.MsgUpdateParams>): _73.MsgUpdateParams;
                fromAmino(object: _73.MsgUpdateParamsAmino): _73.MsgUpdateParams;
                toAmino(message: _73.MsgUpdateParams): _73.MsgUpdateParamsAmino;
                fromAminoMsg(object: _73.MsgUpdateParamsAminoMsg): _73.MsgUpdateParams;
                toAminoMsg(message: _73.MsgUpdateParams): _73.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _73.MsgUpdateParamsProtoMsg): _73.MsgUpdateParams;
                toProto(message: _73.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _73.MsgUpdateParams): _73.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _73.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_73.MsgUpdateParamsResponse>): _73.MsgUpdateParamsResponse;
                fromAmino(_: _73.MsgUpdateParamsResponseAmino): _73.MsgUpdateParamsResponse;
                toAmino(_: _73.MsgUpdateParamsResponse): _73.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _73.MsgUpdateParamsResponseAminoMsg): _73.MsgUpdateParamsResponse;
                toAminoMsg(message: _73.MsgUpdateParamsResponse): _73.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _73.MsgUpdateParamsResponseProtoMsg): _73.MsgUpdateParamsResponse;
                toProto(message: _73.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _73.MsgUpdateParamsResponse): _73.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _53.CommunityPoolSpendProposal | _53.CommunityPoolSpendProposalWithDeposit | _102.ParameterChangeProposal | _124.SoftwareUpgradeProposal | _124.CancelSoftwareUpgradeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreCodeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContract2Proposal | import("../cosmwasm/wasm/v1/proposal_legacy").MigrateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").SudoContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ExecuteContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ClearAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").PinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UnpinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateInstantiateConfigProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreAndInstantiateContractProposal | import("../ibc/core/client/v1/client").ClientUpdateProposal | import("../ibc/core/client/v1/client").UpgradeProposal | _75.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _72.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryProposalRequest;
                fromPartial(object: Partial<_72.QueryProposalRequest>): _72.QueryProposalRequest;
                fromAmino(object: _72.QueryProposalRequestAmino): _72.QueryProposalRequest;
                toAmino(message: _72.QueryProposalRequest): _72.QueryProposalRequestAmino;
                fromAminoMsg(object: _72.QueryProposalRequestAminoMsg): _72.QueryProposalRequest;
                toAminoMsg(message: _72.QueryProposalRequest): _72.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _72.QueryProposalRequestProtoMsg): _72.QueryProposalRequest;
                toProto(message: _72.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _72.QueryProposalRequest): _72.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _72.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryProposalResponse;
                fromPartial(object: Partial<_72.QueryProposalResponse>): _72.QueryProposalResponse;
                fromAmino(object: _72.QueryProposalResponseAmino): _72.QueryProposalResponse;
                toAmino(message: _72.QueryProposalResponse): _72.QueryProposalResponseAmino;
                fromAminoMsg(object: _72.QueryProposalResponseAminoMsg): _72.QueryProposalResponse;
                toAminoMsg(message: _72.QueryProposalResponse): _72.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _72.QueryProposalResponseProtoMsg): _72.QueryProposalResponse;
                toProto(message: _72.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _72.QueryProposalResponse): _72.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _72.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryProposalsRequest;
                fromPartial(object: Partial<_72.QueryProposalsRequest>): _72.QueryProposalsRequest;
                fromAmino(object: _72.QueryProposalsRequestAmino): _72.QueryProposalsRequest;
                toAmino(message: _72.QueryProposalsRequest): _72.QueryProposalsRequestAmino;
                fromAminoMsg(object: _72.QueryProposalsRequestAminoMsg): _72.QueryProposalsRequest;
                toAminoMsg(message: _72.QueryProposalsRequest): _72.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _72.QueryProposalsRequestProtoMsg): _72.QueryProposalsRequest;
                toProto(message: _72.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _72.QueryProposalsRequest): _72.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _72.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryProposalsResponse;
                fromPartial(object: Partial<_72.QueryProposalsResponse>): _72.QueryProposalsResponse;
                fromAmino(object: _72.QueryProposalsResponseAmino): _72.QueryProposalsResponse;
                toAmino(message: _72.QueryProposalsResponse): _72.QueryProposalsResponseAmino;
                fromAminoMsg(object: _72.QueryProposalsResponseAminoMsg): _72.QueryProposalsResponse;
                toAminoMsg(message: _72.QueryProposalsResponse): _72.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _72.QueryProposalsResponseProtoMsg): _72.QueryProposalsResponse;
                toProto(message: _72.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _72.QueryProposalsResponse): _72.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _72.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryVoteRequest;
                fromPartial(object: Partial<_72.QueryVoteRequest>): _72.QueryVoteRequest;
                fromAmino(object: _72.QueryVoteRequestAmino): _72.QueryVoteRequest;
                toAmino(message: _72.QueryVoteRequest): _72.QueryVoteRequestAmino;
                fromAminoMsg(object: _72.QueryVoteRequestAminoMsg): _72.QueryVoteRequest;
                toAminoMsg(message: _72.QueryVoteRequest): _72.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _72.QueryVoteRequestProtoMsg): _72.QueryVoteRequest;
                toProto(message: _72.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _72.QueryVoteRequest): _72.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _72.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryVoteResponse;
                fromPartial(object: Partial<_72.QueryVoteResponse>): _72.QueryVoteResponse;
                fromAmino(object: _72.QueryVoteResponseAmino): _72.QueryVoteResponse;
                toAmino(message: _72.QueryVoteResponse): _72.QueryVoteResponseAmino;
                fromAminoMsg(object: _72.QueryVoteResponseAminoMsg): _72.QueryVoteResponse;
                toAminoMsg(message: _72.QueryVoteResponse): _72.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _72.QueryVoteResponseProtoMsg): _72.QueryVoteResponse;
                toProto(message: _72.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _72.QueryVoteResponse): _72.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _72.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryVotesRequest;
                fromPartial(object: Partial<_72.QueryVotesRequest>): _72.QueryVotesRequest;
                fromAmino(object: _72.QueryVotesRequestAmino): _72.QueryVotesRequest;
                toAmino(message: _72.QueryVotesRequest): _72.QueryVotesRequestAmino;
                fromAminoMsg(object: _72.QueryVotesRequestAminoMsg): _72.QueryVotesRequest;
                toAminoMsg(message: _72.QueryVotesRequest): _72.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _72.QueryVotesRequestProtoMsg): _72.QueryVotesRequest;
                toProto(message: _72.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _72.QueryVotesRequest): _72.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _72.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryVotesResponse;
                fromPartial(object: Partial<_72.QueryVotesResponse>): _72.QueryVotesResponse;
                fromAmino(object: _72.QueryVotesResponseAmino): _72.QueryVotesResponse;
                toAmino(message: _72.QueryVotesResponse): _72.QueryVotesResponseAmino;
                fromAminoMsg(object: _72.QueryVotesResponseAminoMsg): _72.QueryVotesResponse;
                toAminoMsg(message: _72.QueryVotesResponse): _72.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _72.QueryVotesResponseProtoMsg): _72.QueryVotesResponse;
                toProto(message: _72.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _72.QueryVotesResponse): _72.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _72.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryParamsRequest;
                fromPartial(object: Partial<_72.QueryParamsRequest>): _72.QueryParamsRequest;
                fromAmino(object: _72.QueryParamsRequestAmino): _72.QueryParamsRequest;
                toAmino(message: _72.QueryParamsRequest): _72.QueryParamsRequestAmino;
                fromAminoMsg(object: _72.QueryParamsRequestAminoMsg): _72.QueryParamsRequest;
                toAminoMsg(message: _72.QueryParamsRequest): _72.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _72.QueryParamsRequestProtoMsg): _72.QueryParamsRequest;
                toProto(message: _72.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _72.QueryParamsRequest): _72.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _72.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryParamsResponse;
                fromPartial(object: Partial<_72.QueryParamsResponse>): _72.QueryParamsResponse;
                fromAmino(object: _72.QueryParamsResponseAmino): _72.QueryParamsResponse;
                toAmino(message: _72.QueryParamsResponse): _72.QueryParamsResponseAmino;
                fromAminoMsg(object: _72.QueryParamsResponseAminoMsg): _72.QueryParamsResponse;
                toAminoMsg(message: _72.QueryParamsResponse): _72.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _72.QueryParamsResponseProtoMsg): _72.QueryParamsResponse;
                toProto(message: _72.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _72.QueryParamsResponse): _72.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _72.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryDepositRequest;
                fromPartial(object: Partial<_72.QueryDepositRequest>): _72.QueryDepositRequest;
                fromAmino(object: _72.QueryDepositRequestAmino): _72.QueryDepositRequest;
                toAmino(message: _72.QueryDepositRequest): _72.QueryDepositRequestAmino;
                fromAminoMsg(object: _72.QueryDepositRequestAminoMsg): _72.QueryDepositRequest;
                toAminoMsg(message: _72.QueryDepositRequest): _72.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _72.QueryDepositRequestProtoMsg): _72.QueryDepositRequest;
                toProto(message: _72.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _72.QueryDepositRequest): _72.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _72.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryDepositResponse;
                fromPartial(object: Partial<_72.QueryDepositResponse>): _72.QueryDepositResponse;
                fromAmino(object: _72.QueryDepositResponseAmino): _72.QueryDepositResponse;
                toAmino(message: _72.QueryDepositResponse): _72.QueryDepositResponseAmino;
                fromAminoMsg(object: _72.QueryDepositResponseAminoMsg): _72.QueryDepositResponse;
                toAminoMsg(message: _72.QueryDepositResponse): _72.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _72.QueryDepositResponseProtoMsg): _72.QueryDepositResponse;
                toProto(message: _72.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _72.QueryDepositResponse): _72.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _72.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryDepositsRequest;
                fromPartial(object: Partial<_72.QueryDepositsRequest>): _72.QueryDepositsRequest;
                fromAmino(object: _72.QueryDepositsRequestAmino): _72.QueryDepositsRequest;
                toAmino(message: _72.QueryDepositsRequest): _72.QueryDepositsRequestAmino;
                fromAminoMsg(object: _72.QueryDepositsRequestAminoMsg): _72.QueryDepositsRequest;
                toAminoMsg(message: _72.QueryDepositsRequest): _72.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _72.QueryDepositsRequestProtoMsg): _72.QueryDepositsRequest;
                toProto(message: _72.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _72.QueryDepositsRequest): _72.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _72.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryDepositsResponse;
                fromPartial(object: Partial<_72.QueryDepositsResponse>): _72.QueryDepositsResponse;
                fromAmino(object: _72.QueryDepositsResponseAmino): _72.QueryDepositsResponse;
                toAmino(message: _72.QueryDepositsResponse): _72.QueryDepositsResponseAmino;
                fromAminoMsg(object: _72.QueryDepositsResponseAminoMsg): _72.QueryDepositsResponse;
                toAminoMsg(message: _72.QueryDepositsResponse): _72.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _72.QueryDepositsResponseProtoMsg): _72.QueryDepositsResponse;
                toProto(message: _72.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _72.QueryDepositsResponse): _72.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _72.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryTallyResultRequest;
                fromPartial(object: Partial<_72.QueryTallyResultRequest>): _72.QueryTallyResultRequest;
                fromAmino(object: _72.QueryTallyResultRequestAmino): _72.QueryTallyResultRequest;
                toAmino(message: _72.QueryTallyResultRequest): _72.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _72.QueryTallyResultRequestAminoMsg): _72.QueryTallyResultRequest;
                toAminoMsg(message: _72.QueryTallyResultRequest): _72.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _72.QueryTallyResultRequestProtoMsg): _72.QueryTallyResultRequest;
                toProto(message: _72.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _72.QueryTallyResultRequest): _72.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _72.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryTallyResultResponse;
                fromPartial(object: Partial<_72.QueryTallyResultResponse>): _72.QueryTallyResultResponse;
                fromAmino(object: _72.QueryTallyResultResponseAmino): _72.QueryTallyResultResponse;
                toAmino(message: _72.QueryTallyResultResponse): _72.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _72.QueryTallyResultResponseAminoMsg): _72.QueryTallyResultResponse;
                toAminoMsg(message: _72.QueryTallyResultResponse): _72.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _72.QueryTallyResultResponseProtoMsg): _72.QueryTallyResultResponse;
                toProto(message: _72.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _72.QueryTallyResultResponse): _72.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _71.VoteOption;
            voteOptionToJSON(object: _71.VoteOption): string;
            proposalStatusFromJSON(object: any): _71.ProposalStatus;
            proposalStatusToJSON(object: _71.ProposalStatus): string;
            VoteOption: typeof _71.VoteOption;
            VoteOptionSDKType: typeof _71.VoteOption;
            VoteOptionAmino: typeof _71.VoteOption;
            ProposalStatus: typeof _71.ProposalStatus;
            ProposalStatusSDKType: typeof _71.ProposalStatus;
            ProposalStatusAmino: typeof _71.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _71.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.WeightedVoteOption;
                fromPartial(object: Partial<_71.WeightedVoteOption>): _71.WeightedVoteOption;
                fromAmino(object: _71.WeightedVoteOptionAmino): _71.WeightedVoteOption;
                toAmino(message: _71.WeightedVoteOption): _71.WeightedVoteOptionAmino;
                fromAminoMsg(object: _71.WeightedVoteOptionAminoMsg): _71.WeightedVoteOption;
                toAminoMsg(message: _71.WeightedVoteOption): _71.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _71.WeightedVoteOptionProtoMsg): _71.WeightedVoteOption;
                toProto(message: _71.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _71.WeightedVoteOption): _71.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _71.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.Deposit;
                fromPartial(object: Partial<_71.Deposit>): _71.Deposit;
                fromAmino(object: _71.DepositAmino): _71.Deposit;
                toAmino(message: _71.Deposit): _71.DepositAmino;
                fromAminoMsg(object: _71.DepositAminoMsg): _71.Deposit;
                toAminoMsg(message: _71.Deposit): _71.DepositAminoMsg;
                fromProtoMsg(message: _71.DepositProtoMsg): _71.Deposit;
                toProto(message: _71.Deposit): Uint8Array;
                toProtoMsg(message: _71.Deposit): _71.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _71.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.Proposal;
                fromPartial(object: Partial<_71.Proposal>): _71.Proposal;
                fromAmino(object: _71.ProposalAmino): _71.Proposal;
                toAmino(message: _71.Proposal): _71.ProposalAmino;
                fromAminoMsg(object: _71.ProposalAminoMsg): _71.Proposal;
                toAminoMsg(message: _71.Proposal): _71.ProposalAminoMsg;
                fromProtoMsg(message: _71.ProposalProtoMsg): _71.Proposal;
                toProto(message: _71.Proposal): Uint8Array;
                toProtoMsg(message: _71.Proposal): _71.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _71.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.TallyResult;
                fromPartial(object: Partial<_71.TallyResult>): _71.TallyResult;
                fromAmino(object: _71.TallyResultAmino): _71.TallyResult;
                toAmino(message: _71.TallyResult): _71.TallyResultAmino;
                fromAminoMsg(object: _71.TallyResultAminoMsg): _71.TallyResult;
                toAminoMsg(message: _71.TallyResult): _71.TallyResultAminoMsg;
                fromProtoMsg(message: _71.TallyResultProtoMsg): _71.TallyResult;
                toProto(message: _71.TallyResult): Uint8Array;
                toProtoMsg(message: _71.TallyResult): _71.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _71.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.Vote;
                fromPartial(object: Partial<_71.Vote>): _71.Vote;
                fromAmino(object: _71.VoteAmino): _71.Vote;
                toAmino(message: _71.Vote): _71.VoteAmino;
                fromAminoMsg(object: _71.VoteAminoMsg): _71.Vote;
                toAminoMsg(message: _71.Vote): _71.VoteAminoMsg;
                fromProtoMsg(message: _71.VoteProtoMsg): _71.Vote;
                toProto(message: _71.Vote): Uint8Array;
                toProtoMsg(message: _71.Vote): _71.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _71.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.DepositParams;
                fromPartial(object: Partial<_71.DepositParams>): _71.DepositParams;
                fromAmino(object: _71.DepositParamsAmino): _71.DepositParams;
                toAmino(message: _71.DepositParams): _71.DepositParamsAmino;
                fromAminoMsg(object: _71.DepositParamsAminoMsg): _71.DepositParams;
                toAminoMsg(message: _71.DepositParams): _71.DepositParamsAminoMsg;
                fromProtoMsg(message: _71.DepositParamsProtoMsg): _71.DepositParams;
                toProto(message: _71.DepositParams): Uint8Array;
                toProtoMsg(message: _71.DepositParams): _71.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _71.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.VotingParams;
                fromPartial(object: Partial<_71.VotingParams>): _71.VotingParams;
                fromAmino(object: _71.VotingParamsAmino): _71.VotingParams;
                toAmino(message: _71.VotingParams): _71.VotingParamsAmino;
                fromAminoMsg(object: _71.VotingParamsAminoMsg): _71.VotingParams;
                toAminoMsg(message: _71.VotingParams): _71.VotingParamsAminoMsg;
                fromProtoMsg(message: _71.VotingParamsProtoMsg): _71.VotingParams;
                toProto(message: _71.VotingParams): Uint8Array;
                toProtoMsg(message: _71.VotingParams): _71.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _71.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.TallyParams;
                fromPartial(object: Partial<_71.TallyParams>): _71.TallyParams;
                fromAmino(object: _71.TallyParamsAmino): _71.TallyParams;
                toAmino(message: _71.TallyParams): _71.TallyParamsAmino;
                fromAminoMsg(object: _71.TallyParamsAminoMsg): _71.TallyParams;
                toAminoMsg(message: _71.TallyParams): _71.TallyParamsAminoMsg;
                fromProtoMsg(message: _71.TallyParamsProtoMsg): _71.TallyParams;
                toProto(message: _71.TallyParams): Uint8Array;
                toProtoMsg(message: _71.TallyParams): _71.TallyParamsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _71.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.Params;
                fromPartial(object: Partial<_71.Params>): _71.Params;
                fromAmino(object: _71.ParamsAmino): _71.Params;
                toAmino(message: _71.Params): _71.ParamsAmino;
                fromAminoMsg(object: _71.ParamsAminoMsg): _71.Params;
                toAminoMsg(message: _71.Params): _71.ParamsAminoMsg;
                fromProtoMsg(message: _71.ParamsProtoMsg): _71.Params;
                toProto(message: _71.Params): Uint8Array;
                toProtoMsg(message: _71.Params): _71.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _70.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.GenesisState;
                fromPartial(object: Partial<_70.GenesisState>): _70.GenesisState;
                fromAmino(object: _70.GenesisStateAmino): _70.GenesisState;
                toAmino(message: _70.GenesisState): _70.GenesisStateAmino;
                fromAminoMsg(object: _70.GenesisStateAminoMsg): _70.GenesisState;
                toAminoMsg(message: _70.GenesisState): _70.GenesisStateAminoMsg;
                fromProtoMsg(message: _70.GenesisStateProtoMsg): _70.GenesisState;
                toProto(message: _70.GenesisState): Uint8Array;
                toProtoMsg(message: _70.GenesisState): _70.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _330.MsgClientImpl;
            QueryClientImpl: typeof _311.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _76.QueryProposalRequest): Promise<_76.QueryProposalResponse>;
                proposals(request: _76.QueryProposalsRequest): Promise<_76.QueryProposalsResponse>;
                vote(request: _76.QueryVoteRequest): Promise<_76.QueryVoteResponse>;
                votes(request: _76.QueryVotesRequest): Promise<_76.QueryVotesResponse>;
                params(request: _76.QueryParamsRequest): Promise<_76.QueryParamsResponse>;
                deposit(request: _76.QueryDepositRequest): Promise<_76.QueryDepositResponse>;
                deposits(request: _76.QueryDepositsRequest): Promise<_76.QueryDepositsResponse>;
                tallyResult(request: _76.QueryTallyResultRequest): Promise<_76.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _77.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _77.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _77.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _77.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _77.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _77.MsgSubmitProposal;
                    };
                    vote(value: _77.MsgVote): {
                        typeUrl: string;
                        value: _77.MsgVote;
                    };
                    voteWeighted(value: _77.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _77.MsgVoteWeighted;
                    };
                    deposit(value: _77.MsgDeposit): {
                        typeUrl: string;
                        value: _77.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _77.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _77.MsgSubmitProposal;
                    };
                    vote(value: _77.MsgVote): {
                        typeUrl: string;
                        value: _77.MsgVote;
                    };
                    voteWeighted(value: _77.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _77.MsgVoteWeighted;
                    };
                    deposit(value: _77.MsgDeposit): {
                        typeUrl: string;
                        value: _77.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _77.MsgSubmitProposal) => _77.MsgSubmitProposalAmino;
                    fromAmino: (object: _77.MsgSubmitProposalAmino) => _77.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _77.MsgVote) => _77.MsgVoteAmino;
                    fromAmino: (object: _77.MsgVoteAmino) => _77.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _77.MsgVoteWeighted) => _77.MsgVoteWeightedAmino;
                    fromAmino: (object: _77.MsgVoteWeightedAmino) => _77.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _77.MsgDeposit) => _77.MsgDepositAmino;
                    fromAmino: (object: _77.MsgDepositAmino) => _77.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _77.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.MsgSubmitProposal;
                fromPartial(object: Partial<_77.MsgSubmitProposal>): _77.MsgSubmitProposal;
                fromAmino(object: _77.MsgSubmitProposalAmino): _77.MsgSubmitProposal;
                toAmino(message: _77.MsgSubmitProposal): _77.MsgSubmitProposalAmino;
                fromAminoMsg(object: _77.MsgSubmitProposalAminoMsg): _77.MsgSubmitProposal;
                toAminoMsg(message: _77.MsgSubmitProposal): _77.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _77.MsgSubmitProposalProtoMsg): _77.MsgSubmitProposal;
                toProto(message: _77.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _77.MsgSubmitProposal): _77.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _77.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_77.MsgSubmitProposalResponse>): _77.MsgSubmitProposalResponse;
                fromAmino(object: _77.MsgSubmitProposalResponseAmino): _77.MsgSubmitProposalResponse;
                toAmino(message: _77.MsgSubmitProposalResponse): _77.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _77.MsgSubmitProposalResponseAminoMsg): _77.MsgSubmitProposalResponse;
                toAminoMsg(message: _77.MsgSubmitProposalResponse): _77.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _77.MsgSubmitProposalResponseProtoMsg): _77.MsgSubmitProposalResponse;
                toProto(message: _77.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _77.MsgSubmitProposalResponse): _77.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _77.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.MsgVote;
                fromPartial(object: Partial<_77.MsgVote>): _77.MsgVote;
                fromAmino(object: _77.MsgVoteAmino): _77.MsgVote;
                toAmino(message: _77.MsgVote): _77.MsgVoteAmino;
                fromAminoMsg(object: _77.MsgVoteAminoMsg): _77.MsgVote;
                toAminoMsg(message: _77.MsgVote): _77.MsgVoteAminoMsg;
                fromProtoMsg(message: _77.MsgVoteProtoMsg): _77.MsgVote;
                toProto(message: _77.MsgVote): Uint8Array;
                toProtoMsg(message: _77.MsgVote): _77.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _77.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.MsgVoteResponse;
                fromPartial(_: Partial<_77.MsgVoteResponse>): _77.MsgVoteResponse;
                fromAmino(_: _77.MsgVoteResponseAmino): _77.MsgVoteResponse;
                toAmino(_: _77.MsgVoteResponse): _77.MsgVoteResponseAmino;
                fromAminoMsg(object: _77.MsgVoteResponseAminoMsg): _77.MsgVoteResponse;
                toAminoMsg(message: _77.MsgVoteResponse): _77.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _77.MsgVoteResponseProtoMsg): _77.MsgVoteResponse;
                toProto(message: _77.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _77.MsgVoteResponse): _77.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _77.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.MsgVoteWeighted;
                fromPartial(object: Partial<_77.MsgVoteWeighted>): _77.MsgVoteWeighted;
                fromAmino(object: _77.MsgVoteWeightedAmino): _77.MsgVoteWeighted;
                toAmino(message: _77.MsgVoteWeighted): _77.MsgVoteWeightedAmino;
                fromAminoMsg(object: _77.MsgVoteWeightedAminoMsg): _77.MsgVoteWeighted;
                toAminoMsg(message: _77.MsgVoteWeighted): _77.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _77.MsgVoteWeightedProtoMsg): _77.MsgVoteWeighted;
                toProto(message: _77.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _77.MsgVoteWeighted): _77.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _77.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_77.MsgVoteWeightedResponse>): _77.MsgVoteWeightedResponse;
                fromAmino(_: _77.MsgVoteWeightedResponseAmino): _77.MsgVoteWeightedResponse;
                toAmino(_: _77.MsgVoteWeightedResponse): _77.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _77.MsgVoteWeightedResponseAminoMsg): _77.MsgVoteWeightedResponse;
                toAminoMsg(message: _77.MsgVoteWeightedResponse): _77.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _77.MsgVoteWeightedResponseProtoMsg): _77.MsgVoteWeightedResponse;
                toProto(message: _77.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _77.MsgVoteWeightedResponse): _77.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _77.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.MsgDeposit;
                fromPartial(object: Partial<_77.MsgDeposit>): _77.MsgDeposit;
                fromAmino(object: _77.MsgDepositAmino): _77.MsgDeposit;
                toAmino(message: _77.MsgDeposit): _77.MsgDepositAmino;
                fromAminoMsg(object: _77.MsgDepositAminoMsg): _77.MsgDeposit;
                toAminoMsg(message: _77.MsgDeposit): _77.MsgDepositAminoMsg;
                fromProtoMsg(message: _77.MsgDepositProtoMsg): _77.MsgDeposit;
                toProto(message: _77.MsgDeposit): Uint8Array;
                toProtoMsg(message: _77.MsgDeposit): _77.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _77.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.MsgDepositResponse;
                fromPartial(_: Partial<_77.MsgDepositResponse>): _77.MsgDepositResponse;
                fromAmino(_: _77.MsgDepositResponseAmino): _77.MsgDepositResponse;
                toAmino(_: _77.MsgDepositResponse): _77.MsgDepositResponseAmino;
                fromAminoMsg(object: _77.MsgDepositResponseAminoMsg): _77.MsgDepositResponse;
                toAminoMsg(message: _77.MsgDepositResponse): _77.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _77.MsgDepositResponseProtoMsg): _77.MsgDepositResponse;
                toProto(message: _77.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _77.MsgDepositResponse): _77.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _53.CommunityPoolSpendProposal | _53.CommunityPoolSpendProposalWithDeposit | _102.ParameterChangeProposal | _124.SoftwareUpgradeProposal | _124.CancelSoftwareUpgradeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreCodeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContract2Proposal | import("../cosmwasm/wasm/v1/proposal_legacy").MigrateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").SudoContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ExecuteContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ClearAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").PinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UnpinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateInstantiateConfigProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreAndInstantiateContractProposal | import("../ibc/core/client/v1/client").ClientUpdateProposal | import("../ibc/core/client/v1/client").UpgradeProposal | _75.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _76.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryProposalRequest;
                fromPartial(object: Partial<_76.QueryProposalRequest>): _76.QueryProposalRequest;
                fromAmino(object: _76.QueryProposalRequestAmino): _76.QueryProposalRequest;
                toAmino(message: _76.QueryProposalRequest): _76.QueryProposalRequestAmino;
                fromAminoMsg(object: _76.QueryProposalRequestAminoMsg): _76.QueryProposalRequest;
                toAminoMsg(message: _76.QueryProposalRequest): _76.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _76.QueryProposalRequestProtoMsg): _76.QueryProposalRequest;
                toProto(message: _76.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _76.QueryProposalRequest): _76.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _76.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryProposalResponse;
                fromPartial(object: Partial<_76.QueryProposalResponse>): _76.QueryProposalResponse;
                fromAmino(object: _76.QueryProposalResponseAmino): _76.QueryProposalResponse;
                toAmino(message: _76.QueryProposalResponse): _76.QueryProposalResponseAmino;
                fromAminoMsg(object: _76.QueryProposalResponseAminoMsg): _76.QueryProposalResponse;
                toAminoMsg(message: _76.QueryProposalResponse): _76.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _76.QueryProposalResponseProtoMsg): _76.QueryProposalResponse;
                toProto(message: _76.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _76.QueryProposalResponse): _76.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _76.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryProposalsRequest;
                fromPartial(object: Partial<_76.QueryProposalsRequest>): _76.QueryProposalsRequest;
                fromAmino(object: _76.QueryProposalsRequestAmino): _76.QueryProposalsRequest;
                toAmino(message: _76.QueryProposalsRequest): _76.QueryProposalsRequestAmino;
                fromAminoMsg(object: _76.QueryProposalsRequestAminoMsg): _76.QueryProposalsRequest;
                toAminoMsg(message: _76.QueryProposalsRequest): _76.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _76.QueryProposalsRequestProtoMsg): _76.QueryProposalsRequest;
                toProto(message: _76.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _76.QueryProposalsRequest): _76.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _76.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryProposalsResponse;
                fromPartial(object: Partial<_76.QueryProposalsResponse>): _76.QueryProposalsResponse;
                fromAmino(object: _76.QueryProposalsResponseAmino): _76.QueryProposalsResponse;
                toAmino(message: _76.QueryProposalsResponse): _76.QueryProposalsResponseAmino;
                fromAminoMsg(object: _76.QueryProposalsResponseAminoMsg): _76.QueryProposalsResponse;
                toAminoMsg(message: _76.QueryProposalsResponse): _76.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _76.QueryProposalsResponseProtoMsg): _76.QueryProposalsResponse;
                toProto(message: _76.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _76.QueryProposalsResponse): _76.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _76.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryVoteRequest;
                fromPartial(object: Partial<_76.QueryVoteRequest>): _76.QueryVoteRequest;
                fromAmino(object: _76.QueryVoteRequestAmino): _76.QueryVoteRequest;
                toAmino(message: _76.QueryVoteRequest): _76.QueryVoteRequestAmino;
                fromAminoMsg(object: _76.QueryVoteRequestAminoMsg): _76.QueryVoteRequest;
                toAminoMsg(message: _76.QueryVoteRequest): _76.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _76.QueryVoteRequestProtoMsg): _76.QueryVoteRequest;
                toProto(message: _76.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _76.QueryVoteRequest): _76.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _76.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryVoteResponse;
                fromPartial(object: Partial<_76.QueryVoteResponse>): _76.QueryVoteResponse;
                fromAmino(object: _76.QueryVoteResponseAmino): _76.QueryVoteResponse;
                toAmino(message: _76.QueryVoteResponse): _76.QueryVoteResponseAmino;
                fromAminoMsg(object: _76.QueryVoteResponseAminoMsg): _76.QueryVoteResponse;
                toAminoMsg(message: _76.QueryVoteResponse): _76.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _76.QueryVoteResponseProtoMsg): _76.QueryVoteResponse;
                toProto(message: _76.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _76.QueryVoteResponse): _76.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _76.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryVotesRequest;
                fromPartial(object: Partial<_76.QueryVotesRequest>): _76.QueryVotesRequest;
                fromAmino(object: _76.QueryVotesRequestAmino): _76.QueryVotesRequest;
                toAmino(message: _76.QueryVotesRequest): _76.QueryVotesRequestAmino;
                fromAminoMsg(object: _76.QueryVotesRequestAminoMsg): _76.QueryVotesRequest;
                toAminoMsg(message: _76.QueryVotesRequest): _76.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _76.QueryVotesRequestProtoMsg): _76.QueryVotesRequest;
                toProto(message: _76.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _76.QueryVotesRequest): _76.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _76.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryVotesResponse;
                fromPartial(object: Partial<_76.QueryVotesResponse>): _76.QueryVotesResponse;
                fromAmino(object: _76.QueryVotesResponseAmino): _76.QueryVotesResponse;
                toAmino(message: _76.QueryVotesResponse): _76.QueryVotesResponseAmino;
                fromAminoMsg(object: _76.QueryVotesResponseAminoMsg): _76.QueryVotesResponse;
                toAminoMsg(message: _76.QueryVotesResponse): _76.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _76.QueryVotesResponseProtoMsg): _76.QueryVotesResponse;
                toProto(message: _76.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _76.QueryVotesResponse): _76.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _76.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryParamsRequest;
                fromPartial(object: Partial<_76.QueryParamsRequest>): _76.QueryParamsRequest;
                fromAmino(object: _76.QueryParamsRequestAmino): _76.QueryParamsRequest;
                toAmino(message: _76.QueryParamsRequest): _76.QueryParamsRequestAmino;
                fromAminoMsg(object: _76.QueryParamsRequestAminoMsg): _76.QueryParamsRequest;
                toAminoMsg(message: _76.QueryParamsRequest): _76.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _76.QueryParamsRequestProtoMsg): _76.QueryParamsRequest;
                toProto(message: _76.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _76.QueryParamsRequest): _76.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _76.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryParamsResponse;
                fromPartial(object: Partial<_76.QueryParamsResponse>): _76.QueryParamsResponse;
                fromAmino(object: _76.QueryParamsResponseAmino): _76.QueryParamsResponse;
                toAmino(message: _76.QueryParamsResponse): _76.QueryParamsResponseAmino;
                fromAminoMsg(object: _76.QueryParamsResponseAminoMsg): _76.QueryParamsResponse;
                toAminoMsg(message: _76.QueryParamsResponse): _76.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _76.QueryParamsResponseProtoMsg): _76.QueryParamsResponse;
                toProto(message: _76.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _76.QueryParamsResponse): _76.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _76.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryDepositRequest;
                fromPartial(object: Partial<_76.QueryDepositRequest>): _76.QueryDepositRequest;
                fromAmino(object: _76.QueryDepositRequestAmino): _76.QueryDepositRequest;
                toAmino(message: _76.QueryDepositRequest): _76.QueryDepositRequestAmino;
                fromAminoMsg(object: _76.QueryDepositRequestAminoMsg): _76.QueryDepositRequest;
                toAminoMsg(message: _76.QueryDepositRequest): _76.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _76.QueryDepositRequestProtoMsg): _76.QueryDepositRequest;
                toProto(message: _76.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _76.QueryDepositRequest): _76.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _76.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryDepositResponse;
                fromPartial(object: Partial<_76.QueryDepositResponse>): _76.QueryDepositResponse;
                fromAmino(object: _76.QueryDepositResponseAmino): _76.QueryDepositResponse;
                toAmino(message: _76.QueryDepositResponse): _76.QueryDepositResponseAmino;
                fromAminoMsg(object: _76.QueryDepositResponseAminoMsg): _76.QueryDepositResponse;
                toAminoMsg(message: _76.QueryDepositResponse): _76.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _76.QueryDepositResponseProtoMsg): _76.QueryDepositResponse;
                toProto(message: _76.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _76.QueryDepositResponse): _76.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _76.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryDepositsRequest;
                fromPartial(object: Partial<_76.QueryDepositsRequest>): _76.QueryDepositsRequest;
                fromAmino(object: _76.QueryDepositsRequestAmino): _76.QueryDepositsRequest;
                toAmino(message: _76.QueryDepositsRequest): _76.QueryDepositsRequestAmino;
                fromAminoMsg(object: _76.QueryDepositsRequestAminoMsg): _76.QueryDepositsRequest;
                toAminoMsg(message: _76.QueryDepositsRequest): _76.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _76.QueryDepositsRequestProtoMsg): _76.QueryDepositsRequest;
                toProto(message: _76.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _76.QueryDepositsRequest): _76.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _76.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryDepositsResponse;
                fromPartial(object: Partial<_76.QueryDepositsResponse>): _76.QueryDepositsResponse;
                fromAmino(object: _76.QueryDepositsResponseAmino): _76.QueryDepositsResponse;
                toAmino(message: _76.QueryDepositsResponse): _76.QueryDepositsResponseAmino;
                fromAminoMsg(object: _76.QueryDepositsResponseAminoMsg): _76.QueryDepositsResponse;
                toAminoMsg(message: _76.QueryDepositsResponse): _76.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _76.QueryDepositsResponseProtoMsg): _76.QueryDepositsResponse;
                toProto(message: _76.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _76.QueryDepositsResponse): _76.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _76.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryTallyResultRequest;
                fromPartial(object: Partial<_76.QueryTallyResultRequest>): _76.QueryTallyResultRequest;
                fromAmino(object: _76.QueryTallyResultRequestAmino): _76.QueryTallyResultRequest;
                toAmino(message: _76.QueryTallyResultRequest): _76.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _76.QueryTallyResultRequestAminoMsg): _76.QueryTallyResultRequest;
                toAminoMsg(message: _76.QueryTallyResultRequest): _76.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _76.QueryTallyResultRequestProtoMsg): _76.QueryTallyResultRequest;
                toProto(message: _76.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _76.QueryTallyResultRequest): _76.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _76.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryTallyResultResponse;
                fromPartial(object: Partial<_76.QueryTallyResultResponse>): _76.QueryTallyResultResponse;
                fromAmino(object: _76.QueryTallyResultResponseAmino): _76.QueryTallyResultResponse;
                toAmino(message: _76.QueryTallyResultResponse): _76.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _76.QueryTallyResultResponseAminoMsg): _76.QueryTallyResultResponse;
                toAminoMsg(message: _76.QueryTallyResultResponse): _76.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _76.QueryTallyResultResponseProtoMsg): _76.QueryTallyResultResponse;
                toProto(message: _76.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _76.QueryTallyResultResponse): _76.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _75.VoteOption;
            voteOptionToJSON(object: _75.VoteOption): string;
            proposalStatusFromJSON(object: any): _75.ProposalStatus;
            proposalStatusToJSON(object: _75.ProposalStatus): string;
            VoteOption: typeof _75.VoteOption;
            VoteOptionSDKType: typeof _75.VoteOption;
            VoteOptionAmino: typeof _75.VoteOption;
            ProposalStatus: typeof _75.ProposalStatus;
            ProposalStatusSDKType: typeof _75.ProposalStatus;
            ProposalStatusAmino: typeof _75.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _75.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.WeightedVoteOption;
                fromPartial(object: Partial<_75.WeightedVoteOption>): _75.WeightedVoteOption;
                fromAmino(object: _75.WeightedVoteOptionAmino): _75.WeightedVoteOption;
                toAmino(message: _75.WeightedVoteOption): _75.WeightedVoteOptionAmino;
                fromAminoMsg(object: _75.WeightedVoteOptionAminoMsg): _75.WeightedVoteOption;
                toAminoMsg(message: _75.WeightedVoteOption): _75.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _75.WeightedVoteOptionProtoMsg): _75.WeightedVoteOption;
                toProto(message: _75.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _75.WeightedVoteOption): _75.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _75.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.TextProposal;
                fromPartial(object: Partial<_75.TextProposal>): _75.TextProposal;
                fromAmino(object: _75.TextProposalAmino): _75.TextProposal;
                toAmino(message: _75.TextProposal): _75.TextProposalAmino;
                fromAminoMsg(object: _75.TextProposalAminoMsg): _75.TextProposal;
                toAminoMsg(message: _75.TextProposal): _75.TextProposalAminoMsg;
                fromProtoMsg(message: _75.TextProposalProtoMsg): _75.TextProposal;
                toProto(message: _75.TextProposal): Uint8Array;
                toProtoMsg(message: _75.TextProposal): _75.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _75.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.Deposit;
                fromPartial(object: Partial<_75.Deposit>): _75.Deposit;
                fromAmino(object: _75.DepositAmino): _75.Deposit;
                toAmino(message: _75.Deposit): _75.DepositAmino;
                fromAminoMsg(object: _75.DepositAminoMsg): _75.Deposit;
                toAminoMsg(message: _75.Deposit): _75.DepositAminoMsg;
                fromProtoMsg(message: _75.DepositProtoMsg): _75.Deposit;
                toProto(message: _75.Deposit): Uint8Array;
                toProtoMsg(message: _75.Deposit): _75.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _75.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.Proposal;
                fromPartial(object: Partial<_75.Proposal>): _75.Proposal;
                fromAmino(object: _75.ProposalAmino): _75.Proposal;
                toAmino(message: _75.Proposal): _75.ProposalAmino;
                fromAminoMsg(object: _75.ProposalAminoMsg): _75.Proposal;
                toAminoMsg(message: _75.Proposal): _75.ProposalAminoMsg;
                fromProtoMsg(message: _75.ProposalProtoMsg): _75.Proposal;
                toProto(message: _75.Proposal): Uint8Array;
                toProtoMsg(message: _75.Proposal): _75.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _75.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.TallyResult;
                fromPartial(object: Partial<_75.TallyResult>): _75.TallyResult;
                fromAmino(object: _75.TallyResultAmino): _75.TallyResult;
                toAmino(message: _75.TallyResult): _75.TallyResultAmino;
                fromAminoMsg(object: _75.TallyResultAminoMsg): _75.TallyResult;
                toAminoMsg(message: _75.TallyResult): _75.TallyResultAminoMsg;
                fromProtoMsg(message: _75.TallyResultProtoMsg): _75.TallyResult;
                toProto(message: _75.TallyResult): Uint8Array;
                toProtoMsg(message: _75.TallyResult): _75.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _75.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.Vote;
                fromPartial(object: Partial<_75.Vote>): _75.Vote;
                fromAmino(object: _75.VoteAmino): _75.Vote;
                toAmino(message: _75.Vote): _75.VoteAmino;
                fromAminoMsg(object: _75.VoteAminoMsg): _75.Vote;
                toAminoMsg(message: _75.Vote): _75.VoteAminoMsg;
                fromProtoMsg(message: _75.VoteProtoMsg): _75.Vote;
                toProto(message: _75.Vote): Uint8Array;
                toProtoMsg(message: _75.Vote): _75.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _75.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.DepositParams;
                fromPartial(object: Partial<_75.DepositParams>): _75.DepositParams;
                fromAmino(object: _75.DepositParamsAmino): _75.DepositParams;
                toAmino(message: _75.DepositParams): _75.DepositParamsAmino;
                fromAminoMsg(object: _75.DepositParamsAminoMsg): _75.DepositParams;
                toAminoMsg(message: _75.DepositParams): _75.DepositParamsAminoMsg;
                fromProtoMsg(message: _75.DepositParamsProtoMsg): _75.DepositParams;
                toProto(message: _75.DepositParams): Uint8Array;
                toProtoMsg(message: _75.DepositParams): _75.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _75.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.VotingParams;
                fromPartial(object: Partial<_75.VotingParams>): _75.VotingParams;
                fromAmino(object: _75.VotingParamsAmino): _75.VotingParams;
                toAmino(message: _75.VotingParams): _75.VotingParamsAmino;
                fromAminoMsg(object: _75.VotingParamsAminoMsg): _75.VotingParams;
                toAminoMsg(message: _75.VotingParams): _75.VotingParamsAminoMsg;
                fromProtoMsg(message: _75.VotingParamsProtoMsg): _75.VotingParams;
                toProto(message: _75.VotingParams): Uint8Array;
                toProtoMsg(message: _75.VotingParams): _75.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _75.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.TallyParams;
                fromPartial(object: Partial<_75.TallyParams>): _75.TallyParams;
                fromAmino(object: _75.TallyParamsAmino): _75.TallyParams;
                toAmino(message: _75.TallyParams): _75.TallyParamsAmino;
                fromAminoMsg(object: _75.TallyParamsAminoMsg): _75.TallyParams;
                toAminoMsg(message: _75.TallyParams): _75.TallyParamsAminoMsg;
                fromProtoMsg(message: _75.TallyParamsProtoMsg): _75.TallyParams;
                toProto(message: _75.TallyParams): Uint8Array;
                toProtoMsg(message: _75.TallyParams): _75.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _74.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.GenesisState;
                fromPartial(object: Partial<_74.GenesisState>): _74.GenesisState;
                fromAmino(object: _74.GenesisStateAmino): _74.GenesisState;
                toAmino(message: _74.GenesisState): _74.GenesisStateAmino;
                fromAminoMsg(object: _74.GenesisStateAminoMsg): _74.GenesisState;
                toAminoMsg(message: _74.GenesisState): _74.GenesisStateAminoMsg;
                fromProtoMsg(message: _74.GenesisStateProtoMsg): _74.GenesisState;
                toProto(message: _74.GenesisState): Uint8Array;
                toProtoMsg(message: _74.GenesisState): _74.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _78.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.Module;
                    fromPartial(object: Partial<_78.Module>): _78.Module;
                    fromAmino(object: _78.ModuleAmino): _78.Module;
                    toAmino(message: _78.Module): _78.ModuleAmino;
                    fromAminoMsg(object: _78.ModuleAminoMsg): _78.Module;
                    toAminoMsg(message: _78.Module): _78.ModuleAminoMsg;
                    fromProtoMsg(message: _78.ModuleProtoMsg): _78.Module;
                    toProto(message: _78.Module): Uint8Array;
                    toProtoMsg(message: _78.Module): _78.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _331.MsgClientImpl;
            QueryClientImpl: typeof _312.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _81.QueryGroupInfoRequest): Promise<_81.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _81.QueryGroupPolicyInfoRequest): Promise<_81.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _81.QueryGroupMembersRequest): Promise<_81.QueryGroupMembersResponse>;
                groupsByAdmin(request: _81.QueryGroupsByAdminRequest): Promise<_81.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _81.QueryGroupPoliciesByGroupRequest): Promise<_81.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _81.QueryGroupPoliciesByAdminRequest): Promise<_81.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _81.QueryProposalRequest): Promise<_81.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _81.QueryProposalsByGroupPolicyRequest): Promise<_81.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _81.QueryVoteByProposalVoterRequest): Promise<_81.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _81.QueryVotesByProposalRequest): Promise<_81.QueryVotesByProposalResponse>;
                votesByVoter(request: _81.QueryVotesByVoterRequest): Promise<_81.QueryVotesByVoterResponse>;
                groupsByMember(request: _81.QueryGroupsByMemberRequest): Promise<_81.QueryGroupsByMemberResponse>;
                tallyResult(request: _81.QueryTallyResultRequest): Promise<_81.QueryTallyResultResponse>;
                groups(request?: _81.QueryGroupsRequest): Promise<_81.QueryGroupsResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _82.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _82.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _82.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _82.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _82.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _82.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _82.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _82.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _82.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _82.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _82.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _82.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _82.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _82.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _82.MsgCreateGroup): {
                        typeUrl: string;
                        value: _82.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _82.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _82.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _82.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _82.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _82.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _82.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _82.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _82.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _82.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _82.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _82.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _82.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _82.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _82.MsgWithdrawProposal;
                    };
                    vote(value: _82.MsgVote): {
                        typeUrl: string;
                        value: _82.MsgVote;
                    };
                    exec(value: _82.MsgExec): {
                        typeUrl: string;
                        value: _82.MsgExec;
                    };
                    leaveGroup(value: _82.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _82.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _82.MsgCreateGroup): {
                        typeUrl: string;
                        value: _82.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _82.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _82.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _82.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _82.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _82.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _82.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _82.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _82.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _82.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _82.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _82.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _82.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _82.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _82.MsgWithdrawProposal;
                    };
                    vote(value: _82.MsgVote): {
                        typeUrl: string;
                        value: _82.MsgVote;
                    };
                    exec(value: _82.MsgExec): {
                        typeUrl: string;
                        value: _82.MsgExec;
                    };
                    leaveGroup(value: _82.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _82.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _82.MsgCreateGroup) => _82.MsgCreateGroupAmino;
                    fromAmino: (object: _82.MsgCreateGroupAmino) => _82.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _82.MsgUpdateGroupMembers) => _82.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _82.MsgUpdateGroupMembersAmino) => _82.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _82.MsgUpdateGroupAdmin) => _82.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _82.MsgUpdateGroupAdminAmino) => _82.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _82.MsgUpdateGroupMetadata) => _82.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _82.MsgUpdateGroupMetadataAmino) => _82.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _82.MsgCreateGroupPolicy) => _82.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _82.MsgCreateGroupPolicyAmino) => _82.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _82.MsgCreateGroupWithPolicy) => _82.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _82.MsgCreateGroupWithPolicyAmino) => _82.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _82.MsgUpdateGroupPolicyAdmin) => _82.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _82.MsgUpdateGroupPolicyAdminAmino) => _82.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _82.MsgUpdateGroupPolicyDecisionPolicy) => _82.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _82.MsgUpdateGroupPolicyDecisionPolicyAmino) => _82.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _82.MsgUpdateGroupPolicyMetadata) => _82.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _82.MsgUpdateGroupPolicyMetadataAmino) => _82.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _82.MsgSubmitProposal) => _82.MsgSubmitProposalAmino;
                    fromAmino: (object: _82.MsgSubmitProposalAmino) => _82.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _82.MsgWithdrawProposal) => _82.MsgWithdrawProposalAmino;
                    fromAmino: (object: _82.MsgWithdrawProposalAmino) => _82.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _82.MsgVote) => _82.MsgVoteAmino;
                    fromAmino: (object: _82.MsgVoteAmino) => _82.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _82.MsgExec) => _82.MsgExecAmino;
                    fromAmino: (object: _82.MsgExecAmino) => _82.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _82.MsgLeaveGroup) => _82.MsgLeaveGroupAmino;
                    fromAmino: (object: _82.MsgLeaveGroupAmino) => _82.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _83.VoteOption;
            voteOptionToJSON(object: _83.VoteOption): string;
            proposalStatusFromJSON(object: any): _83.ProposalStatus;
            proposalStatusToJSON(object: _83.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _83.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _83.ProposalExecutorResult): string;
            VoteOption: typeof _83.VoteOption;
            VoteOptionSDKType: typeof _83.VoteOption;
            VoteOptionAmino: typeof _83.VoteOption;
            ProposalStatus: typeof _83.ProposalStatus;
            ProposalStatusSDKType: typeof _83.ProposalStatus;
            ProposalStatusAmino: typeof _83.ProposalStatus;
            ProposalExecutorResult: typeof _83.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _83.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _83.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _83.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.Member;
                fromPartial(object: Partial<_83.Member>): _83.Member;
                fromAmino(object: _83.MemberAmino): _83.Member;
                toAmino(message: _83.Member): _83.MemberAmino;
                fromAminoMsg(object: _83.MemberAminoMsg): _83.Member;
                toAminoMsg(message: _83.Member): _83.MemberAminoMsg;
                fromProtoMsg(message: _83.MemberProtoMsg): _83.Member;
                toProto(message: _83.Member): Uint8Array;
                toProtoMsg(message: _83.Member): _83.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _83.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.MemberRequest;
                fromPartial(object: Partial<_83.MemberRequest>): _83.MemberRequest;
                fromAmino(object: _83.MemberRequestAmino): _83.MemberRequest;
                toAmino(message: _83.MemberRequest): _83.MemberRequestAmino;
                fromAminoMsg(object: _83.MemberRequestAminoMsg): _83.MemberRequest;
                toAminoMsg(message: _83.MemberRequest): _83.MemberRequestAminoMsg;
                fromProtoMsg(message: _83.MemberRequestProtoMsg): _83.MemberRequest;
                toProto(message: _83.MemberRequest): Uint8Array;
                toProtoMsg(message: _83.MemberRequest): _83.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _83.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_83.ThresholdDecisionPolicy>): _83.ThresholdDecisionPolicy;
                fromAmino(object: _83.ThresholdDecisionPolicyAmino): _83.ThresholdDecisionPolicy;
                toAmino(message: _83.ThresholdDecisionPolicy): _83.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _83.ThresholdDecisionPolicyAminoMsg): _83.ThresholdDecisionPolicy;
                toAminoMsg(message: _83.ThresholdDecisionPolicy): _83.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _83.ThresholdDecisionPolicyProtoMsg): _83.ThresholdDecisionPolicy;
                toProto(message: _83.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _83.ThresholdDecisionPolicy): _83.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _83.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.PercentageDecisionPolicy;
                fromPartial(object: Partial<_83.PercentageDecisionPolicy>): _83.PercentageDecisionPolicy;
                fromAmino(object: _83.PercentageDecisionPolicyAmino): _83.PercentageDecisionPolicy;
                toAmino(message: _83.PercentageDecisionPolicy): _83.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _83.PercentageDecisionPolicyAminoMsg): _83.PercentageDecisionPolicy;
                toAminoMsg(message: _83.PercentageDecisionPolicy): _83.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _83.PercentageDecisionPolicyProtoMsg): _83.PercentageDecisionPolicy;
                toProto(message: _83.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _83.PercentageDecisionPolicy): _83.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _83.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.DecisionPolicyWindows;
                fromPartial(object: Partial<_83.DecisionPolicyWindows>): _83.DecisionPolicyWindows;
                fromAmino(object: _83.DecisionPolicyWindowsAmino): _83.DecisionPolicyWindows;
                toAmino(message: _83.DecisionPolicyWindows): _83.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _83.DecisionPolicyWindowsAminoMsg): _83.DecisionPolicyWindows;
                toAminoMsg(message: _83.DecisionPolicyWindows): _83.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _83.DecisionPolicyWindowsProtoMsg): _83.DecisionPolicyWindows;
                toProto(message: _83.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _83.DecisionPolicyWindows): _83.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _83.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.GroupInfo;
                fromPartial(object: Partial<_83.GroupInfo>): _83.GroupInfo;
                fromAmino(object: _83.GroupInfoAmino): _83.GroupInfo;
                toAmino(message: _83.GroupInfo): _83.GroupInfoAmino;
                fromAminoMsg(object: _83.GroupInfoAminoMsg): _83.GroupInfo;
                toAminoMsg(message: _83.GroupInfo): _83.GroupInfoAminoMsg;
                fromProtoMsg(message: _83.GroupInfoProtoMsg): _83.GroupInfo;
                toProto(message: _83.GroupInfo): Uint8Array;
                toProtoMsg(message: _83.GroupInfo): _83.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _83.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.GroupMember;
                fromPartial(object: Partial<_83.GroupMember>): _83.GroupMember;
                fromAmino(object: _83.GroupMemberAmino): _83.GroupMember;
                toAmino(message: _83.GroupMember): _83.GroupMemberAmino;
                fromAminoMsg(object: _83.GroupMemberAminoMsg): _83.GroupMember;
                toAminoMsg(message: _83.GroupMember): _83.GroupMemberAminoMsg;
                fromProtoMsg(message: _83.GroupMemberProtoMsg): _83.GroupMember;
                toProto(message: _83.GroupMember): Uint8Array;
                toProtoMsg(message: _83.GroupMember): _83.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _83.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.GroupPolicyInfo;
                fromPartial(object: Partial<_83.GroupPolicyInfo>): _83.GroupPolicyInfo;
                fromAmino(object: _83.GroupPolicyInfoAmino): _83.GroupPolicyInfo;
                toAmino(message: _83.GroupPolicyInfo): _83.GroupPolicyInfoAmino;
                fromAminoMsg(object: _83.GroupPolicyInfoAminoMsg): _83.GroupPolicyInfo;
                toAminoMsg(message: _83.GroupPolicyInfo): _83.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _83.GroupPolicyInfoProtoMsg): _83.GroupPolicyInfo;
                toProto(message: _83.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _83.GroupPolicyInfo): _83.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _83.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.Proposal;
                fromPartial(object: Partial<_83.Proposal>): _83.Proposal;
                fromAmino(object: _83.ProposalAmino): _83.Proposal;
                toAmino(message: _83.Proposal): _83.ProposalAmino;
                fromAminoMsg(object: _83.ProposalAminoMsg): _83.Proposal;
                toAminoMsg(message: _83.Proposal): _83.ProposalAminoMsg;
                fromProtoMsg(message: _83.ProposalProtoMsg): _83.Proposal;
                toProto(message: _83.Proposal): Uint8Array;
                toProtoMsg(message: _83.Proposal): _83.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _83.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.TallyResult;
                fromPartial(object: Partial<_83.TallyResult>): _83.TallyResult;
                fromAmino(object: _83.TallyResultAmino): _83.TallyResult;
                toAmino(message: _83.TallyResult): _83.TallyResultAmino;
                fromAminoMsg(object: _83.TallyResultAminoMsg): _83.TallyResult;
                toAminoMsg(message: _83.TallyResult): _83.TallyResultAminoMsg;
                fromProtoMsg(message: _83.TallyResultProtoMsg): _83.TallyResult;
                toProto(message: _83.TallyResult): Uint8Array;
                toProtoMsg(message: _83.TallyResult): _83.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _83.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.Vote;
                fromPartial(object: Partial<_83.Vote>): _83.Vote;
                fromAmino(object: _83.VoteAmino): _83.Vote;
                toAmino(message: _83.Vote): _83.VoteAmino;
                fromAminoMsg(object: _83.VoteAminoMsg): _83.Vote;
                toAminoMsg(message: _83.Vote): _83.VoteAminoMsg;
                fromProtoMsg(message: _83.VoteProtoMsg): _83.Vote;
                toProto(message: _83.Vote): Uint8Array;
                toProtoMsg(message: _83.Vote): _83.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _83.ThresholdDecisionPolicy | _83.PercentageDecisionPolicy;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _82.Exec;
            execToJSON(object: _82.Exec): string;
            Exec: typeof _82.Exec;
            ExecSDKType: typeof _82.Exec;
            ExecAmino: typeof _82.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _82.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgCreateGroup;
                fromPartial(object: Partial<_82.MsgCreateGroup>): _82.MsgCreateGroup;
                fromAmino(object: _82.MsgCreateGroupAmino): _82.MsgCreateGroup;
                toAmino(message: _82.MsgCreateGroup): _82.MsgCreateGroupAmino;
                fromAminoMsg(object: _82.MsgCreateGroupAminoMsg): _82.MsgCreateGroup;
                toAminoMsg(message: _82.MsgCreateGroup): _82.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _82.MsgCreateGroupProtoMsg): _82.MsgCreateGroup;
                toProto(message: _82.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _82.MsgCreateGroup): _82.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _82.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgCreateGroupResponse;
                fromPartial(object: Partial<_82.MsgCreateGroupResponse>): _82.MsgCreateGroupResponse;
                fromAmino(object: _82.MsgCreateGroupResponseAmino): _82.MsgCreateGroupResponse;
                toAmino(message: _82.MsgCreateGroupResponse): _82.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _82.MsgCreateGroupResponseAminoMsg): _82.MsgCreateGroupResponse;
                toAminoMsg(message: _82.MsgCreateGroupResponse): _82.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _82.MsgCreateGroupResponseProtoMsg): _82.MsgCreateGroupResponse;
                toProto(message: _82.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _82.MsgCreateGroupResponse): _82.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _82.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_82.MsgUpdateGroupMembers>): _82.MsgUpdateGroupMembers;
                fromAmino(object: _82.MsgUpdateGroupMembersAmino): _82.MsgUpdateGroupMembers;
                toAmino(message: _82.MsgUpdateGroupMembers): _82.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _82.MsgUpdateGroupMembersAminoMsg): _82.MsgUpdateGroupMembers;
                toAminoMsg(message: _82.MsgUpdateGroupMembers): _82.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _82.MsgUpdateGroupMembersProtoMsg): _82.MsgUpdateGroupMembers;
                toProto(message: _82.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _82.MsgUpdateGroupMembers): _82.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _82.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_82.MsgUpdateGroupMembersResponse>): _82.MsgUpdateGroupMembersResponse;
                fromAmino(_: _82.MsgUpdateGroupMembersResponseAmino): _82.MsgUpdateGroupMembersResponse;
                toAmino(_: _82.MsgUpdateGroupMembersResponse): _82.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _82.MsgUpdateGroupMembersResponseAminoMsg): _82.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _82.MsgUpdateGroupMembersResponse): _82.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _82.MsgUpdateGroupMembersResponseProtoMsg): _82.MsgUpdateGroupMembersResponse;
                toProto(message: _82.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _82.MsgUpdateGroupMembersResponse): _82.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _82.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_82.MsgUpdateGroupAdmin>): _82.MsgUpdateGroupAdmin;
                fromAmino(object: _82.MsgUpdateGroupAdminAmino): _82.MsgUpdateGroupAdmin;
                toAmino(message: _82.MsgUpdateGroupAdmin): _82.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _82.MsgUpdateGroupAdminAminoMsg): _82.MsgUpdateGroupAdmin;
                toAminoMsg(message: _82.MsgUpdateGroupAdmin): _82.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _82.MsgUpdateGroupAdminProtoMsg): _82.MsgUpdateGroupAdmin;
                toProto(message: _82.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _82.MsgUpdateGroupAdmin): _82.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _82.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_82.MsgUpdateGroupAdminResponse>): _82.MsgUpdateGroupAdminResponse;
                fromAmino(_: _82.MsgUpdateGroupAdminResponseAmino): _82.MsgUpdateGroupAdminResponse;
                toAmino(_: _82.MsgUpdateGroupAdminResponse): _82.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _82.MsgUpdateGroupAdminResponseAminoMsg): _82.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _82.MsgUpdateGroupAdminResponse): _82.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _82.MsgUpdateGroupAdminResponseProtoMsg): _82.MsgUpdateGroupAdminResponse;
                toProto(message: _82.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _82.MsgUpdateGroupAdminResponse): _82.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _82.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_82.MsgUpdateGroupMetadata>): _82.MsgUpdateGroupMetadata;
                fromAmino(object: _82.MsgUpdateGroupMetadataAmino): _82.MsgUpdateGroupMetadata;
                toAmino(message: _82.MsgUpdateGroupMetadata): _82.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _82.MsgUpdateGroupMetadataAminoMsg): _82.MsgUpdateGroupMetadata;
                toAminoMsg(message: _82.MsgUpdateGroupMetadata): _82.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _82.MsgUpdateGroupMetadataProtoMsg): _82.MsgUpdateGroupMetadata;
                toProto(message: _82.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _82.MsgUpdateGroupMetadata): _82.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _82.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_82.MsgUpdateGroupMetadataResponse>): _82.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _82.MsgUpdateGroupMetadataResponseAmino): _82.MsgUpdateGroupMetadataResponse;
                toAmino(_: _82.MsgUpdateGroupMetadataResponse): _82.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _82.MsgUpdateGroupMetadataResponseAminoMsg): _82.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _82.MsgUpdateGroupMetadataResponse): _82.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _82.MsgUpdateGroupMetadataResponseProtoMsg): _82.MsgUpdateGroupMetadataResponse;
                toProto(message: _82.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _82.MsgUpdateGroupMetadataResponse): _82.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _82.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_82.MsgCreateGroupPolicy>): _82.MsgCreateGroupPolicy;
                fromAmino(object: _82.MsgCreateGroupPolicyAmino): _82.MsgCreateGroupPolicy;
                toAmino(message: _82.MsgCreateGroupPolicy): _82.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _82.MsgCreateGroupPolicyAminoMsg): _82.MsgCreateGroupPolicy;
                toAminoMsg(message: _82.MsgCreateGroupPolicy): _82.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _82.MsgCreateGroupPolicyProtoMsg): _82.MsgCreateGroupPolicy;
                toProto(message: _82.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _82.MsgCreateGroupPolicy): _82.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _82.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_82.MsgCreateGroupPolicyResponse>): _82.MsgCreateGroupPolicyResponse;
                fromAmino(object: _82.MsgCreateGroupPolicyResponseAmino): _82.MsgCreateGroupPolicyResponse;
                toAmino(message: _82.MsgCreateGroupPolicyResponse): _82.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _82.MsgCreateGroupPolicyResponseAminoMsg): _82.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _82.MsgCreateGroupPolicyResponse): _82.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _82.MsgCreateGroupPolicyResponseProtoMsg): _82.MsgCreateGroupPolicyResponse;
                toProto(message: _82.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _82.MsgCreateGroupPolicyResponse): _82.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _82.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_82.MsgUpdateGroupPolicyAdmin>): _82.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _82.MsgUpdateGroupPolicyAdminAmino): _82.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _82.MsgUpdateGroupPolicyAdmin): _82.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _82.MsgUpdateGroupPolicyAdminAminoMsg): _82.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _82.MsgUpdateGroupPolicyAdmin): _82.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _82.MsgUpdateGroupPolicyAdminProtoMsg): _82.MsgUpdateGroupPolicyAdmin;
                toProto(message: _82.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _82.MsgUpdateGroupPolicyAdmin): _82.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _82.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_82.MsgUpdateGroupPolicyAdminResponse>): _82.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _82.MsgUpdateGroupPolicyAdminResponseAmino): _82.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _82.MsgUpdateGroupPolicyAdminResponse): _82.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _82.MsgUpdateGroupPolicyAdminResponseAminoMsg): _82.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _82.MsgUpdateGroupPolicyAdminResponse): _82.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _82.MsgUpdateGroupPolicyAdminResponseProtoMsg): _82.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _82.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _82.MsgUpdateGroupPolicyAdminResponse): _82.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _82.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_82.MsgCreateGroupWithPolicy>): _82.MsgCreateGroupWithPolicy;
                fromAmino(object: _82.MsgCreateGroupWithPolicyAmino): _82.MsgCreateGroupWithPolicy;
                toAmino(message: _82.MsgCreateGroupWithPolicy): _82.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _82.MsgCreateGroupWithPolicyAminoMsg): _82.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _82.MsgCreateGroupWithPolicy): _82.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _82.MsgCreateGroupWithPolicyProtoMsg): _82.MsgCreateGroupWithPolicy;
                toProto(message: _82.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _82.MsgCreateGroupWithPolicy): _82.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _82.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_82.MsgCreateGroupWithPolicyResponse>): _82.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _82.MsgCreateGroupWithPolicyResponseAmino): _82.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _82.MsgCreateGroupWithPolicyResponse): _82.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _82.MsgCreateGroupWithPolicyResponseAminoMsg): _82.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _82.MsgCreateGroupWithPolicyResponse): _82.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _82.MsgCreateGroupWithPolicyResponseProtoMsg): _82.MsgCreateGroupWithPolicyResponse;
                toProto(message: _82.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _82.MsgCreateGroupWithPolicyResponse): _82.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _82.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_82.MsgUpdateGroupPolicyDecisionPolicy>): _82.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _82.MsgUpdateGroupPolicyDecisionPolicyAmino): _82.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _82.MsgUpdateGroupPolicyDecisionPolicy): _82.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _82.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _82.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _82.MsgUpdateGroupPolicyDecisionPolicy): _82.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _82.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _82.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _82.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _82.MsgUpdateGroupPolicyDecisionPolicy): _82.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _82.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_82.MsgUpdateGroupPolicyDecisionPolicyResponse>): _82.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _82.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _82.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _82.MsgUpdateGroupPolicyDecisionPolicyResponse): _82.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _82.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _82.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _82.MsgUpdateGroupPolicyDecisionPolicyResponse): _82.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _82.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _82.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _82.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _82.MsgUpdateGroupPolicyDecisionPolicyResponse): _82.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _82.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_82.MsgUpdateGroupPolicyMetadata>): _82.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _82.MsgUpdateGroupPolicyMetadataAmino): _82.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _82.MsgUpdateGroupPolicyMetadata): _82.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _82.MsgUpdateGroupPolicyMetadataAminoMsg): _82.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _82.MsgUpdateGroupPolicyMetadata): _82.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _82.MsgUpdateGroupPolicyMetadataProtoMsg): _82.MsgUpdateGroupPolicyMetadata;
                toProto(message: _82.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _82.MsgUpdateGroupPolicyMetadata): _82.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _82.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_82.MsgUpdateGroupPolicyMetadataResponse>): _82.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _82.MsgUpdateGroupPolicyMetadataResponseAmino): _82.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _82.MsgUpdateGroupPolicyMetadataResponse): _82.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _82.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _82.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _82.MsgUpdateGroupPolicyMetadataResponse): _82.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _82.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _82.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _82.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _82.MsgUpdateGroupPolicyMetadataResponse): _82.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _82.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgSubmitProposal;
                fromPartial(object: Partial<_82.MsgSubmitProposal>): _82.MsgSubmitProposal;
                fromAmino(object: _82.MsgSubmitProposalAmino): _82.MsgSubmitProposal;
                toAmino(message: _82.MsgSubmitProposal): _82.MsgSubmitProposalAmino;
                fromAminoMsg(object: _82.MsgSubmitProposalAminoMsg): _82.MsgSubmitProposal;
                toAminoMsg(message: _82.MsgSubmitProposal): _82.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _82.MsgSubmitProposalProtoMsg): _82.MsgSubmitProposal;
                toProto(message: _82.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _82.MsgSubmitProposal): _82.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _82.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_82.MsgSubmitProposalResponse>): _82.MsgSubmitProposalResponse;
                fromAmino(object: _82.MsgSubmitProposalResponseAmino): _82.MsgSubmitProposalResponse;
                toAmino(message: _82.MsgSubmitProposalResponse): _82.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _82.MsgSubmitProposalResponseAminoMsg): _82.MsgSubmitProposalResponse;
                toAminoMsg(message: _82.MsgSubmitProposalResponse): _82.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _82.MsgSubmitProposalResponseProtoMsg): _82.MsgSubmitProposalResponse;
                toProto(message: _82.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _82.MsgSubmitProposalResponse): _82.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _82.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgWithdrawProposal;
                fromPartial(object: Partial<_82.MsgWithdrawProposal>): _82.MsgWithdrawProposal;
                fromAmino(object: _82.MsgWithdrawProposalAmino): _82.MsgWithdrawProposal;
                toAmino(message: _82.MsgWithdrawProposal): _82.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _82.MsgWithdrawProposalAminoMsg): _82.MsgWithdrawProposal;
                toAminoMsg(message: _82.MsgWithdrawProposal): _82.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _82.MsgWithdrawProposalProtoMsg): _82.MsgWithdrawProposal;
                toProto(message: _82.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _82.MsgWithdrawProposal): _82.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _82.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_82.MsgWithdrawProposalResponse>): _82.MsgWithdrawProposalResponse;
                fromAmino(_: _82.MsgWithdrawProposalResponseAmino): _82.MsgWithdrawProposalResponse;
                toAmino(_: _82.MsgWithdrawProposalResponse): _82.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _82.MsgWithdrawProposalResponseAminoMsg): _82.MsgWithdrawProposalResponse;
                toAminoMsg(message: _82.MsgWithdrawProposalResponse): _82.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _82.MsgWithdrawProposalResponseProtoMsg): _82.MsgWithdrawProposalResponse;
                toProto(message: _82.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _82.MsgWithdrawProposalResponse): _82.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _82.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgVote;
                fromPartial(object: Partial<_82.MsgVote>): _82.MsgVote;
                fromAmino(object: _82.MsgVoteAmino): _82.MsgVote;
                toAmino(message: _82.MsgVote): _82.MsgVoteAmino;
                fromAminoMsg(object: _82.MsgVoteAminoMsg): _82.MsgVote;
                toAminoMsg(message: _82.MsgVote): _82.MsgVoteAminoMsg;
                fromProtoMsg(message: _82.MsgVoteProtoMsg): _82.MsgVote;
                toProto(message: _82.MsgVote): Uint8Array;
                toProtoMsg(message: _82.MsgVote): _82.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _82.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgVoteResponse;
                fromPartial(_: Partial<_82.MsgVoteResponse>): _82.MsgVoteResponse;
                fromAmino(_: _82.MsgVoteResponseAmino): _82.MsgVoteResponse;
                toAmino(_: _82.MsgVoteResponse): _82.MsgVoteResponseAmino;
                fromAminoMsg(object: _82.MsgVoteResponseAminoMsg): _82.MsgVoteResponse;
                toAminoMsg(message: _82.MsgVoteResponse): _82.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _82.MsgVoteResponseProtoMsg): _82.MsgVoteResponse;
                toProto(message: _82.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _82.MsgVoteResponse): _82.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _82.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgExec;
                fromPartial(object: Partial<_82.MsgExec>): _82.MsgExec;
                fromAmino(object: _82.MsgExecAmino): _82.MsgExec;
                toAmino(message: _82.MsgExec): _82.MsgExecAmino;
                fromAminoMsg(object: _82.MsgExecAminoMsg): _82.MsgExec;
                toAminoMsg(message: _82.MsgExec): _82.MsgExecAminoMsg;
                fromProtoMsg(message: _82.MsgExecProtoMsg): _82.MsgExec;
                toProto(message: _82.MsgExec): Uint8Array;
                toProtoMsg(message: _82.MsgExec): _82.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _82.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgExecResponse;
                fromPartial(object: Partial<_82.MsgExecResponse>): _82.MsgExecResponse;
                fromAmino(object: _82.MsgExecResponseAmino): _82.MsgExecResponse;
                toAmino(message: _82.MsgExecResponse): _82.MsgExecResponseAmino;
                fromAminoMsg(object: _82.MsgExecResponseAminoMsg): _82.MsgExecResponse;
                toAminoMsg(message: _82.MsgExecResponse): _82.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _82.MsgExecResponseProtoMsg): _82.MsgExecResponse;
                toProto(message: _82.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _82.MsgExecResponse): _82.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _82.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgLeaveGroup;
                fromPartial(object: Partial<_82.MsgLeaveGroup>): _82.MsgLeaveGroup;
                fromAmino(object: _82.MsgLeaveGroupAmino): _82.MsgLeaveGroup;
                toAmino(message: _82.MsgLeaveGroup): _82.MsgLeaveGroupAmino;
                fromAminoMsg(object: _82.MsgLeaveGroupAminoMsg): _82.MsgLeaveGroup;
                toAminoMsg(message: _82.MsgLeaveGroup): _82.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _82.MsgLeaveGroupProtoMsg): _82.MsgLeaveGroup;
                toProto(message: _82.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _82.MsgLeaveGroup): _82.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _82.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_82.MsgLeaveGroupResponse>): _82.MsgLeaveGroupResponse;
                fromAmino(_: _82.MsgLeaveGroupResponseAmino): _82.MsgLeaveGroupResponse;
                toAmino(_: _82.MsgLeaveGroupResponse): _82.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _82.MsgLeaveGroupResponseAminoMsg): _82.MsgLeaveGroupResponse;
                toAminoMsg(message: _82.MsgLeaveGroupResponse): _82.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _82.MsgLeaveGroupResponseProtoMsg): _82.MsgLeaveGroupResponse;
                toProto(message: _82.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _82.MsgLeaveGroupResponse): _82.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _81.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryGroupInfoRequest;
                fromPartial(object: Partial<_81.QueryGroupInfoRequest>): _81.QueryGroupInfoRequest;
                fromAmino(object: _81.QueryGroupInfoRequestAmino): _81.QueryGroupInfoRequest;
                toAmino(message: _81.QueryGroupInfoRequest): _81.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _81.QueryGroupInfoRequestAminoMsg): _81.QueryGroupInfoRequest;
                toAminoMsg(message: _81.QueryGroupInfoRequest): _81.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _81.QueryGroupInfoRequestProtoMsg): _81.QueryGroupInfoRequest;
                toProto(message: _81.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _81.QueryGroupInfoRequest): _81.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _81.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryGroupInfoResponse;
                fromPartial(object: Partial<_81.QueryGroupInfoResponse>): _81.QueryGroupInfoResponse;
                fromAmino(object: _81.QueryGroupInfoResponseAmino): _81.QueryGroupInfoResponse;
                toAmino(message: _81.QueryGroupInfoResponse): _81.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _81.QueryGroupInfoResponseAminoMsg): _81.QueryGroupInfoResponse;
                toAminoMsg(message: _81.QueryGroupInfoResponse): _81.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _81.QueryGroupInfoResponseProtoMsg): _81.QueryGroupInfoResponse;
                toProto(message: _81.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _81.QueryGroupInfoResponse): _81.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _81.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_81.QueryGroupPolicyInfoRequest>): _81.QueryGroupPolicyInfoRequest;
                fromAmino(object: _81.QueryGroupPolicyInfoRequestAmino): _81.QueryGroupPolicyInfoRequest;
                toAmino(message: _81.QueryGroupPolicyInfoRequest): _81.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _81.QueryGroupPolicyInfoRequestAminoMsg): _81.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _81.QueryGroupPolicyInfoRequest): _81.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _81.QueryGroupPolicyInfoRequestProtoMsg): _81.QueryGroupPolicyInfoRequest;
                toProto(message: _81.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _81.QueryGroupPolicyInfoRequest): _81.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _81.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_81.QueryGroupPolicyInfoResponse>): _81.QueryGroupPolicyInfoResponse;
                fromAmino(object: _81.QueryGroupPolicyInfoResponseAmino): _81.QueryGroupPolicyInfoResponse;
                toAmino(message: _81.QueryGroupPolicyInfoResponse): _81.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _81.QueryGroupPolicyInfoResponseAminoMsg): _81.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _81.QueryGroupPolicyInfoResponse): _81.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _81.QueryGroupPolicyInfoResponseProtoMsg): _81.QueryGroupPolicyInfoResponse;
                toProto(message: _81.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _81.QueryGroupPolicyInfoResponse): _81.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _81.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryGroupMembersRequest;
                fromPartial(object: Partial<_81.QueryGroupMembersRequest>): _81.QueryGroupMembersRequest;
                fromAmino(object: _81.QueryGroupMembersRequestAmino): _81.QueryGroupMembersRequest;
                toAmino(message: _81.QueryGroupMembersRequest): _81.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _81.QueryGroupMembersRequestAminoMsg): _81.QueryGroupMembersRequest;
                toAminoMsg(message: _81.QueryGroupMembersRequest): _81.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _81.QueryGroupMembersRequestProtoMsg): _81.QueryGroupMembersRequest;
                toProto(message: _81.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _81.QueryGroupMembersRequest): _81.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _81.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryGroupMembersResponse;
                fromPartial(object: Partial<_81.QueryGroupMembersResponse>): _81.QueryGroupMembersResponse;
                fromAmino(object: _81.QueryGroupMembersResponseAmino): _81.QueryGroupMembersResponse;
                toAmino(message: _81.QueryGroupMembersResponse): _81.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _81.QueryGroupMembersResponseAminoMsg): _81.QueryGroupMembersResponse;
                toAminoMsg(message: _81.QueryGroupMembersResponse): _81.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _81.QueryGroupMembersResponseProtoMsg): _81.QueryGroupMembersResponse;
                toProto(message: _81.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _81.QueryGroupMembersResponse): _81.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _81.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_81.QueryGroupsByAdminRequest>): _81.QueryGroupsByAdminRequest;
                fromAmino(object: _81.QueryGroupsByAdminRequestAmino): _81.QueryGroupsByAdminRequest;
                toAmino(message: _81.QueryGroupsByAdminRequest): _81.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _81.QueryGroupsByAdminRequestAminoMsg): _81.QueryGroupsByAdminRequest;
                toAminoMsg(message: _81.QueryGroupsByAdminRequest): _81.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _81.QueryGroupsByAdminRequestProtoMsg): _81.QueryGroupsByAdminRequest;
                toProto(message: _81.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _81.QueryGroupsByAdminRequest): _81.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _81.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_81.QueryGroupsByAdminResponse>): _81.QueryGroupsByAdminResponse;
                fromAmino(object: _81.QueryGroupsByAdminResponseAmino): _81.QueryGroupsByAdminResponse;
                toAmino(message: _81.QueryGroupsByAdminResponse): _81.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _81.QueryGroupsByAdminResponseAminoMsg): _81.QueryGroupsByAdminResponse;
                toAminoMsg(message: _81.QueryGroupsByAdminResponse): _81.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _81.QueryGroupsByAdminResponseProtoMsg): _81.QueryGroupsByAdminResponse;
                toProto(message: _81.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _81.QueryGroupsByAdminResponse): _81.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _81.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_81.QueryGroupPoliciesByGroupRequest>): _81.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _81.QueryGroupPoliciesByGroupRequestAmino): _81.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _81.QueryGroupPoliciesByGroupRequest): _81.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _81.QueryGroupPoliciesByGroupRequestAminoMsg): _81.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _81.QueryGroupPoliciesByGroupRequest): _81.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _81.QueryGroupPoliciesByGroupRequestProtoMsg): _81.QueryGroupPoliciesByGroupRequest;
                toProto(message: _81.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _81.QueryGroupPoliciesByGroupRequest): _81.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _81.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_81.QueryGroupPoliciesByGroupResponse>): _81.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _81.QueryGroupPoliciesByGroupResponseAmino): _81.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _81.QueryGroupPoliciesByGroupResponse): _81.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _81.QueryGroupPoliciesByGroupResponseAminoMsg): _81.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _81.QueryGroupPoliciesByGroupResponse): _81.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _81.QueryGroupPoliciesByGroupResponseProtoMsg): _81.QueryGroupPoliciesByGroupResponse;
                toProto(message: _81.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _81.QueryGroupPoliciesByGroupResponse): _81.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _81.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_81.QueryGroupPoliciesByAdminRequest>): _81.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _81.QueryGroupPoliciesByAdminRequestAmino): _81.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _81.QueryGroupPoliciesByAdminRequest): _81.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _81.QueryGroupPoliciesByAdminRequestAminoMsg): _81.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _81.QueryGroupPoliciesByAdminRequest): _81.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _81.QueryGroupPoliciesByAdminRequestProtoMsg): _81.QueryGroupPoliciesByAdminRequest;
                toProto(message: _81.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _81.QueryGroupPoliciesByAdminRequest): _81.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _81.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_81.QueryGroupPoliciesByAdminResponse>): _81.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _81.QueryGroupPoliciesByAdminResponseAmino): _81.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _81.QueryGroupPoliciesByAdminResponse): _81.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _81.QueryGroupPoliciesByAdminResponseAminoMsg): _81.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _81.QueryGroupPoliciesByAdminResponse): _81.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _81.QueryGroupPoliciesByAdminResponseProtoMsg): _81.QueryGroupPoliciesByAdminResponse;
                toProto(message: _81.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _81.QueryGroupPoliciesByAdminResponse): _81.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _81.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryProposalRequest;
                fromPartial(object: Partial<_81.QueryProposalRequest>): _81.QueryProposalRequest;
                fromAmino(object: _81.QueryProposalRequestAmino): _81.QueryProposalRequest;
                toAmino(message: _81.QueryProposalRequest): _81.QueryProposalRequestAmino;
                fromAminoMsg(object: _81.QueryProposalRequestAminoMsg): _81.QueryProposalRequest;
                toAminoMsg(message: _81.QueryProposalRequest): _81.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _81.QueryProposalRequestProtoMsg): _81.QueryProposalRequest;
                toProto(message: _81.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _81.QueryProposalRequest): _81.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _81.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryProposalResponse;
                fromPartial(object: Partial<_81.QueryProposalResponse>): _81.QueryProposalResponse;
                fromAmino(object: _81.QueryProposalResponseAmino): _81.QueryProposalResponse;
                toAmino(message: _81.QueryProposalResponse): _81.QueryProposalResponseAmino;
                fromAminoMsg(object: _81.QueryProposalResponseAminoMsg): _81.QueryProposalResponse;
                toAminoMsg(message: _81.QueryProposalResponse): _81.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _81.QueryProposalResponseProtoMsg): _81.QueryProposalResponse;
                toProto(message: _81.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _81.QueryProposalResponse): _81.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _81.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_81.QueryProposalsByGroupPolicyRequest>): _81.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _81.QueryProposalsByGroupPolicyRequestAmino): _81.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _81.QueryProposalsByGroupPolicyRequest): _81.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _81.QueryProposalsByGroupPolicyRequestAminoMsg): _81.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _81.QueryProposalsByGroupPolicyRequest): _81.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _81.QueryProposalsByGroupPolicyRequestProtoMsg): _81.QueryProposalsByGroupPolicyRequest;
                toProto(message: _81.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _81.QueryProposalsByGroupPolicyRequest): _81.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _81.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_81.QueryProposalsByGroupPolicyResponse>): _81.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _81.QueryProposalsByGroupPolicyResponseAmino): _81.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _81.QueryProposalsByGroupPolicyResponse): _81.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _81.QueryProposalsByGroupPolicyResponseAminoMsg): _81.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _81.QueryProposalsByGroupPolicyResponse): _81.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _81.QueryProposalsByGroupPolicyResponseProtoMsg): _81.QueryProposalsByGroupPolicyResponse;
                toProto(message: _81.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _81.QueryProposalsByGroupPolicyResponse): _81.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _81.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_81.QueryVoteByProposalVoterRequest>): _81.QueryVoteByProposalVoterRequest;
                fromAmino(object: _81.QueryVoteByProposalVoterRequestAmino): _81.QueryVoteByProposalVoterRequest;
                toAmino(message: _81.QueryVoteByProposalVoterRequest): _81.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _81.QueryVoteByProposalVoterRequestAminoMsg): _81.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _81.QueryVoteByProposalVoterRequest): _81.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _81.QueryVoteByProposalVoterRequestProtoMsg): _81.QueryVoteByProposalVoterRequest;
                toProto(message: _81.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _81.QueryVoteByProposalVoterRequest): _81.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _81.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_81.QueryVoteByProposalVoterResponse>): _81.QueryVoteByProposalVoterResponse;
                fromAmino(object: _81.QueryVoteByProposalVoterResponseAmino): _81.QueryVoteByProposalVoterResponse;
                toAmino(message: _81.QueryVoteByProposalVoterResponse): _81.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _81.QueryVoteByProposalVoterResponseAminoMsg): _81.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _81.QueryVoteByProposalVoterResponse): _81.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _81.QueryVoteByProposalVoterResponseProtoMsg): _81.QueryVoteByProposalVoterResponse;
                toProto(message: _81.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _81.QueryVoteByProposalVoterResponse): _81.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _81.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_81.QueryVotesByProposalRequest>): _81.QueryVotesByProposalRequest;
                fromAmino(object: _81.QueryVotesByProposalRequestAmino): _81.QueryVotesByProposalRequest;
                toAmino(message: _81.QueryVotesByProposalRequest): _81.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _81.QueryVotesByProposalRequestAminoMsg): _81.QueryVotesByProposalRequest;
                toAminoMsg(message: _81.QueryVotesByProposalRequest): _81.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _81.QueryVotesByProposalRequestProtoMsg): _81.QueryVotesByProposalRequest;
                toProto(message: _81.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _81.QueryVotesByProposalRequest): _81.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _81.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_81.QueryVotesByProposalResponse>): _81.QueryVotesByProposalResponse;
                fromAmino(object: _81.QueryVotesByProposalResponseAmino): _81.QueryVotesByProposalResponse;
                toAmino(message: _81.QueryVotesByProposalResponse): _81.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _81.QueryVotesByProposalResponseAminoMsg): _81.QueryVotesByProposalResponse;
                toAminoMsg(message: _81.QueryVotesByProposalResponse): _81.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _81.QueryVotesByProposalResponseProtoMsg): _81.QueryVotesByProposalResponse;
                toProto(message: _81.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _81.QueryVotesByProposalResponse): _81.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _81.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_81.QueryVotesByVoterRequest>): _81.QueryVotesByVoterRequest;
                fromAmino(object: _81.QueryVotesByVoterRequestAmino): _81.QueryVotesByVoterRequest;
                toAmino(message: _81.QueryVotesByVoterRequest): _81.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _81.QueryVotesByVoterRequestAminoMsg): _81.QueryVotesByVoterRequest;
                toAminoMsg(message: _81.QueryVotesByVoterRequest): _81.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _81.QueryVotesByVoterRequestProtoMsg): _81.QueryVotesByVoterRequest;
                toProto(message: _81.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _81.QueryVotesByVoterRequest): _81.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _81.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_81.QueryVotesByVoterResponse>): _81.QueryVotesByVoterResponse;
                fromAmino(object: _81.QueryVotesByVoterResponseAmino): _81.QueryVotesByVoterResponse;
                toAmino(message: _81.QueryVotesByVoterResponse): _81.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _81.QueryVotesByVoterResponseAminoMsg): _81.QueryVotesByVoterResponse;
                toAminoMsg(message: _81.QueryVotesByVoterResponse): _81.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _81.QueryVotesByVoterResponseProtoMsg): _81.QueryVotesByVoterResponse;
                toProto(message: _81.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _81.QueryVotesByVoterResponse): _81.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _81.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_81.QueryGroupsByMemberRequest>): _81.QueryGroupsByMemberRequest;
                fromAmino(object: _81.QueryGroupsByMemberRequestAmino): _81.QueryGroupsByMemberRequest;
                toAmino(message: _81.QueryGroupsByMemberRequest): _81.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _81.QueryGroupsByMemberRequestAminoMsg): _81.QueryGroupsByMemberRequest;
                toAminoMsg(message: _81.QueryGroupsByMemberRequest): _81.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _81.QueryGroupsByMemberRequestProtoMsg): _81.QueryGroupsByMemberRequest;
                toProto(message: _81.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _81.QueryGroupsByMemberRequest): _81.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _81.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_81.QueryGroupsByMemberResponse>): _81.QueryGroupsByMemberResponse;
                fromAmino(object: _81.QueryGroupsByMemberResponseAmino): _81.QueryGroupsByMemberResponse;
                toAmino(message: _81.QueryGroupsByMemberResponse): _81.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _81.QueryGroupsByMemberResponseAminoMsg): _81.QueryGroupsByMemberResponse;
                toAminoMsg(message: _81.QueryGroupsByMemberResponse): _81.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _81.QueryGroupsByMemberResponseProtoMsg): _81.QueryGroupsByMemberResponse;
                toProto(message: _81.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _81.QueryGroupsByMemberResponse): _81.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _81.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryTallyResultRequest;
                fromPartial(object: Partial<_81.QueryTallyResultRequest>): _81.QueryTallyResultRequest;
                fromAmino(object: _81.QueryTallyResultRequestAmino): _81.QueryTallyResultRequest;
                toAmino(message: _81.QueryTallyResultRequest): _81.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _81.QueryTallyResultRequestAminoMsg): _81.QueryTallyResultRequest;
                toAminoMsg(message: _81.QueryTallyResultRequest): _81.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _81.QueryTallyResultRequestProtoMsg): _81.QueryTallyResultRequest;
                toProto(message: _81.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _81.QueryTallyResultRequest): _81.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _81.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryTallyResultResponse;
                fromPartial(object: Partial<_81.QueryTallyResultResponse>): _81.QueryTallyResultResponse;
                fromAmino(object: _81.QueryTallyResultResponseAmino): _81.QueryTallyResultResponse;
                toAmino(message: _81.QueryTallyResultResponse): _81.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _81.QueryTallyResultResponseAminoMsg): _81.QueryTallyResultResponse;
                toAminoMsg(message: _81.QueryTallyResultResponse): _81.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _81.QueryTallyResultResponseProtoMsg): _81.QueryTallyResultResponse;
                toProto(message: _81.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _81.QueryTallyResultResponse): _81.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _81.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryGroupsRequest;
                fromPartial(object: Partial<_81.QueryGroupsRequest>): _81.QueryGroupsRequest;
                fromAmino(object: _81.QueryGroupsRequestAmino): _81.QueryGroupsRequest;
                toAmino(message: _81.QueryGroupsRequest): _81.QueryGroupsRequestAmino;
                fromAminoMsg(object: _81.QueryGroupsRequestAminoMsg): _81.QueryGroupsRequest;
                toAminoMsg(message: _81.QueryGroupsRequest): _81.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _81.QueryGroupsRequestProtoMsg): _81.QueryGroupsRequest;
                toProto(message: _81.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryGroupsRequest): _81.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _81.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.QueryGroupsResponse;
                fromPartial(object: Partial<_81.QueryGroupsResponse>): _81.QueryGroupsResponse;
                fromAmino(object: _81.QueryGroupsResponseAmino): _81.QueryGroupsResponse;
                toAmino(message: _81.QueryGroupsResponse): _81.QueryGroupsResponseAmino;
                fromAminoMsg(object: _81.QueryGroupsResponseAminoMsg): _81.QueryGroupsResponse;
                toAminoMsg(message: _81.QueryGroupsResponse): _81.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _81.QueryGroupsResponseProtoMsg): _81.QueryGroupsResponse;
                toProto(message: _81.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryGroupsResponse): _81.QueryGroupsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _80.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.GenesisState;
                fromPartial(object: Partial<_80.GenesisState>): _80.GenesisState;
                fromAmino(object: _80.GenesisStateAmino): _80.GenesisState;
                toAmino(message: _80.GenesisState): _80.GenesisStateAmino;
                fromAminoMsg(object: _80.GenesisStateAminoMsg): _80.GenesisState;
                toAminoMsg(message: _80.GenesisState): _80.GenesisStateAminoMsg;
                fromProtoMsg(message: _80.GenesisStateProtoMsg): _80.GenesisState;
                toProto(message: _80.GenesisState): Uint8Array;
                toProtoMsg(message: _80.GenesisState): _80.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _79.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.EventCreateGroup;
                fromPartial(object: Partial<_79.EventCreateGroup>): _79.EventCreateGroup;
                fromAmino(object: _79.EventCreateGroupAmino): _79.EventCreateGroup;
                toAmino(message: _79.EventCreateGroup): _79.EventCreateGroupAmino;
                fromAminoMsg(object: _79.EventCreateGroupAminoMsg): _79.EventCreateGroup;
                toAminoMsg(message: _79.EventCreateGroup): _79.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _79.EventCreateGroupProtoMsg): _79.EventCreateGroup;
                toProto(message: _79.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _79.EventCreateGroup): _79.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _79.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.EventUpdateGroup;
                fromPartial(object: Partial<_79.EventUpdateGroup>): _79.EventUpdateGroup;
                fromAmino(object: _79.EventUpdateGroupAmino): _79.EventUpdateGroup;
                toAmino(message: _79.EventUpdateGroup): _79.EventUpdateGroupAmino;
                fromAminoMsg(object: _79.EventUpdateGroupAminoMsg): _79.EventUpdateGroup;
                toAminoMsg(message: _79.EventUpdateGroup): _79.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _79.EventUpdateGroupProtoMsg): _79.EventUpdateGroup;
                toProto(message: _79.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _79.EventUpdateGroup): _79.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _79.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.EventCreateGroupPolicy;
                fromPartial(object: Partial<_79.EventCreateGroupPolicy>): _79.EventCreateGroupPolicy;
                fromAmino(object: _79.EventCreateGroupPolicyAmino): _79.EventCreateGroupPolicy;
                toAmino(message: _79.EventCreateGroupPolicy): _79.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _79.EventCreateGroupPolicyAminoMsg): _79.EventCreateGroupPolicy;
                toAminoMsg(message: _79.EventCreateGroupPolicy): _79.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _79.EventCreateGroupPolicyProtoMsg): _79.EventCreateGroupPolicy;
                toProto(message: _79.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _79.EventCreateGroupPolicy): _79.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _79.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_79.EventUpdateGroupPolicy>): _79.EventUpdateGroupPolicy;
                fromAmino(object: _79.EventUpdateGroupPolicyAmino): _79.EventUpdateGroupPolicy;
                toAmino(message: _79.EventUpdateGroupPolicy): _79.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _79.EventUpdateGroupPolicyAminoMsg): _79.EventUpdateGroupPolicy;
                toAminoMsg(message: _79.EventUpdateGroupPolicy): _79.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _79.EventUpdateGroupPolicyProtoMsg): _79.EventUpdateGroupPolicy;
                toProto(message: _79.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _79.EventUpdateGroupPolicy): _79.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _79.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.EventSubmitProposal;
                fromPartial(object: Partial<_79.EventSubmitProposal>): _79.EventSubmitProposal;
                fromAmino(object: _79.EventSubmitProposalAmino): _79.EventSubmitProposal;
                toAmino(message: _79.EventSubmitProposal): _79.EventSubmitProposalAmino;
                fromAminoMsg(object: _79.EventSubmitProposalAminoMsg): _79.EventSubmitProposal;
                toAminoMsg(message: _79.EventSubmitProposal): _79.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _79.EventSubmitProposalProtoMsg): _79.EventSubmitProposal;
                toProto(message: _79.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _79.EventSubmitProposal): _79.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _79.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.EventWithdrawProposal;
                fromPartial(object: Partial<_79.EventWithdrawProposal>): _79.EventWithdrawProposal;
                fromAmino(object: _79.EventWithdrawProposalAmino): _79.EventWithdrawProposal;
                toAmino(message: _79.EventWithdrawProposal): _79.EventWithdrawProposalAmino;
                fromAminoMsg(object: _79.EventWithdrawProposalAminoMsg): _79.EventWithdrawProposal;
                toAminoMsg(message: _79.EventWithdrawProposal): _79.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _79.EventWithdrawProposalProtoMsg): _79.EventWithdrawProposal;
                toProto(message: _79.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _79.EventWithdrawProposal): _79.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _79.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.EventVote;
                fromPartial(object: Partial<_79.EventVote>): _79.EventVote;
                fromAmino(object: _79.EventVoteAmino): _79.EventVote;
                toAmino(message: _79.EventVote): _79.EventVoteAmino;
                fromAminoMsg(object: _79.EventVoteAminoMsg): _79.EventVote;
                toAminoMsg(message: _79.EventVote): _79.EventVoteAminoMsg;
                fromProtoMsg(message: _79.EventVoteProtoMsg): _79.EventVote;
                toProto(message: _79.EventVote): Uint8Array;
                toProtoMsg(message: _79.EventVote): _79.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _79.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.EventExec;
                fromPartial(object: Partial<_79.EventExec>): _79.EventExec;
                fromAmino(object: _79.EventExecAmino): _79.EventExec;
                toAmino(message: _79.EventExec): _79.EventExecAmino;
                fromAminoMsg(object: _79.EventExecAminoMsg): _79.EventExec;
                toAminoMsg(message: _79.EventExec): _79.EventExecAminoMsg;
                fromProtoMsg(message: _79.EventExecProtoMsg): _79.EventExec;
                toProto(message: _79.EventExec): Uint8Array;
                toProtoMsg(message: _79.EventExec): _79.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _79.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.EventLeaveGroup;
                fromPartial(object: Partial<_79.EventLeaveGroup>): _79.EventLeaveGroup;
                fromAmino(object: _79.EventLeaveGroupAmino): _79.EventLeaveGroup;
                toAmino(message: _79.EventLeaveGroup): _79.EventLeaveGroupAmino;
                fromAminoMsg(object: _79.EventLeaveGroupAminoMsg): _79.EventLeaveGroup;
                toAminoMsg(message: _79.EventLeaveGroup): _79.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _79.EventLeaveGroupProtoMsg): _79.EventLeaveGroup;
                toProto(message: _79.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _79.EventLeaveGroup): _79.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _79.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.EventProposalPruned;
                fromPartial(object: Partial<_79.EventProposalPruned>): _79.EventProposalPruned;
                fromAmino(object: _79.EventProposalPrunedAmino): _79.EventProposalPruned;
                toAmino(message: _79.EventProposalPruned): _79.EventProposalPrunedAmino;
                fromAminoMsg(object: _79.EventProposalPrunedAminoMsg): _79.EventProposalPruned;
                toAminoMsg(message: _79.EventProposalPruned): _79.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _79.EventProposalPrunedProtoMsg): _79.EventProposalPruned;
                toProto(message: _79.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _79.EventProposalPruned): _79.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace ics23 {
        const v1: {
            hashOpFromJSON(object: any): _84.HashOp;
            hashOpToJSON(object: _84.HashOp): string;
            lengthOpFromJSON(object: any): _84.LengthOp;
            lengthOpToJSON(object: _84.LengthOp): string;
            HashOp: typeof _84.HashOp;
            HashOpSDKType: typeof _84.HashOp;
            HashOpAmino: typeof _84.HashOp;
            LengthOp: typeof _84.LengthOp;
            LengthOpSDKType: typeof _84.LengthOp;
            LengthOpAmino: typeof _84.LengthOp;
            ExistenceProof: {
                typeUrl: string;
                encode(message: _84.ExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.ExistenceProof;
                fromPartial(object: Partial<_84.ExistenceProof>): _84.ExistenceProof;
                fromAmino(object: _84.ExistenceProofAmino): _84.ExistenceProof;
                toAmino(message: _84.ExistenceProof): _84.ExistenceProofAmino;
                fromAminoMsg(object: _84.ExistenceProofAminoMsg): _84.ExistenceProof;
                toAminoMsg(message: _84.ExistenceProof): _84.ExistenceProofAminoMsg;
                fromProtoMsg(message: _84.ExistenceProofProtoMsg): _84.ExistenceProof;
                toProto(message: _84.ExistenceProof): Uint8Array;
                toProtoMsg(message: _84.ExistenceProof): _84.ExistenceProofProtoMsg;
            };
            NonExistenceProof: {
                typeUrl: string;
                encode(message: _84.NonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.NonExistenceProof;
                fromPartial(object: Partial<_84.NonExistenceProof>): _84.NonExistenceProof;
                fromAmino(object: _84.NonExistenceProofAmino): _84.NonExistenceProof;
                toAmino(message: _84.NonExistenceProof): _84.NonExistenceProofAmino;
                fromAminoMsg(object: _84.NonExistenceProofAminoMsg): _84.NonExistenceProof;
                toAminoMsg(message: _84.NonExistenceProof): _84.NonExistenceProofAminoMsg;
                fromProtoMsg(message: _84.NonExistenceProofProtoMsg): _84.NonExistenceProof;
                toProto(message: _84.NonExistenceProof): Uint8Array;
                toProtoMsg(message: _84.NonExistenceProof): _84.NonExistenceProofProtoMsg;
            };
            CommitmentProof: {
                typeUrl: string;
                encode(message: _84.CommitmentProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.CommitmentProof;
                fromPartial(object: Partial<_84.CommitmentProof>): _84.CommitmentProof;
                fromAmino(object: _84.CommitmentProofAmino): _84.CommitmentProof;
                toAmino(message: _84.CommitmentProof): _84.CommitmentProofAmino;
                fromAminoMsg(object: _84.CommitmentProofAminoMsg): _84.CommitmentProof;
                toAminoMsg(message: _84.CommitmentProof): _84.CommitmentProofAminoMsg;
                fromProtoMsg(message: _84.CommitmentProofProtoMsg): _84.CommitmentProof;
                toProto(message: _84.CommitmentProof): Uint8Array;
                toProtoMsg(message: _84.CommitmentProof): _84.CommitmentProofProtoMsg;
            };
            LeafOp: {
                typeUrl: string;
                encode(message: _84.LeafOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.LeafOp;
                fromPartial(object: Partial<_84.LeafOp>): _84.LeafOp;
                fromAmino(object: _84.LeafOpAmino): _84.LeafOp;
                toAmino(message: _84.LeafOp): _84.LeafOpAmino;
                fromAminoMsg(object: _84.LeafOpAminoMsg): _84.LeafOp;
                toAminoMsg(message: _84.LeafOp): _84.LeafOpAminoMsg;
                fromProtoMsg(message: _84.LeafOpProtoMsg): _84.LeafOp;
                toProto(message: _84.LeafOp): Uint8Array;
                toProtoMsg(message: _84.LeafOp): _84.LeafOpProtoMsg;
            };
            InnerOp: {
                typeUrl: string;
                encode(message: _84.InnerOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.InnerOp;
                fromPartial(object: Partial<_84.InnerOp>): _84.InnerOp;
                fromAmino(object: _84.InnerOpAmino): _84.InnerOp;
                toAmino(message: _84.InnerOp): _84.InnerOpAmino;
                fromAminoMsg(object: _84.InnerOpAminoMsg): _84.InnerOp;
                toAminoMsg(message: _84.InnerOp): _84.InnerOpAminoMsg;
                fromProtoMsg(message: _84.InnerOpProtoMsg): _84.InnerOp;
                toProto(message: _84.InnerOp): Uint8Array;
                toProtoMsg(message: _84.InnerOp): _84.InnerOpProtoMsg;
            };
            ProofSpec: {
                typeUrl: string;
                encode(message: _84.ProofSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.ProofSpec;
                fromPartial(object: Partial<_84.ProofSpec>): _84.ProofSpec;
                fromAmino(object: _84.ProofSpecAmino): _84.ProofSpec;
                toAmino(message: _84.ProofSpec): _84.ProofSpecAmino;
                fromAminoMsg(object: _84.ProofSpecAminoMsg): _84.ProofSpec;
                toAminoMsg(message: _84.ProofSpec): _84.ProofSpecAminoMsg;
                fromProtoMsg(message: _84.ProofSpecProtoMsg): _84.ProofSpec;
                toProto(message: _84.ProofSpec): Uint8Array;
                toProtoMsg(message: _84.ProofSpec): _84.ProofSpecProtoMsg;
            };
            InnerSpec: {
                typeUrl: string;
                encode(message: _84.InnerSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.InnerSpec;
                fromPartial(object: Partial<_84.InnerSpec>): _84.InnerSpec;
                fromAmino(object: _84.InnerSpecAmino): _84.InnerSpec;
                toAmino(message: _84.InnerSpec): _84.InnerSpecAmino;
                fromAminoMsg(object: _84.InnerSpecAminoMsg): _84.InnerSpec;
                toAminoMsg(message: _84.InnerSpec): _84.InnerSpecAminoMsg;
                fromProtoMsg(message: _84.InnerSpecProtoMsg): _84.InnerSpec;
                toProto(message: _84.InnerSpec): Uint8Array;
                toProtoMsg(message: _84.InnerSpec): _84.InnerSpecProtoMsg;
            };
            BatchProof: {
                typeUrl: string;
                encode(message: _84.BatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.BatchProof;
                fromPartial(object: Partial<_84.BatchProof>): _84.BatchProof;
                fromAmino(object: _84.BatchProofAmino): _84.BatchProof;
                toAmino(message: _84.BatchProof): _84.BatchProofAmino;
                fromAminoMsg(object: _84.BatchProofAminoMsg): _84.BatchProof;
                toAminoMsg(message: _84.BatchProof): _84.BatchProofAminoMsg;
                fromProtoMsg(message: _84.BatchProofProtoMsg): _84.BatchProof;
                toProto(message: _84.BatchProof): Uint8Array;
                toProtoMsg(message: _84.BatchProof): _84.BatchProofProtoMsg;
            };
            BatchEntry: {
                typeUrl: string;
                encode(message: _84.BatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.BatchEntry;
                fromPartial(object: Partial<_84.BatchEntry>): _84.BatchEntry;
                fromAmino(object: _84.BatchEntryAmino): _84.BatchEntry;
                toAmino(message: _84.BatchEntry): _84.BatchEntryAmino;
                fromAminoMsg(object: _84.BatchEntryAminoMsg): _84.BatchEntry;
                toAminoMsg(message: _84.BatchEntry): _84.BatchEntryAminoMsg;
                fromProtoMsg(message: _84.BatchEntryProtoMsg): _84.BatchEntry;
                toProto(message: _84.BatchEntry): Uint8Array;
                toProtoMsg(message: _84.BatchEntry): _84.BatchEntryProtoMsg;
            };
            CompressedBatchProof: {
                typeUrl: string;
                encode(message: _84.CompressedBatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.CompressedBatchProof;
                fromPartial(object: Partial<_84.CompressedBatchProof>): _84.CompressedBatchProof;
                fromAmino(object: _84.CompressedBatchProofAmino): _84.CompressedBatchProof;
                toAmino(message: _84.CompressedBatchProof): _84.CompressedBatchProofAmino;
                fromAminoMsg(object: _84.CompressedBatchProofAminoMsg): _84.CompressedBatchProof;
                toAminoMsg(message: _84.CompressedBatchProof): _84.CompressedBatchProofAminoMsg;
                fromProtoMsg(message: _84.CompressedBatchProofProtoMsg): _84.CompressedBatchProof;
                toProto(message: _84.CompressedBatchProof): Uint8Array;
                toProtoMsg(message: _84.CompressedBatchProof): _84.CompressedBatchProofProtoMsg;
            };
            CompressedBatchEntry: {
                typeUrl: string;
                encode(message: _84.CompressedBatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.CompressedBatchEntry;
                fromPartial(object: Partial<_84.CompressedBatchEntry>): _84.CompressedBatchEntry;
                fromAmino(object: _84.CompressedBatchEntryAmino): _84.CompressedBatchEntry;
                toAmino(message: _84.CompressedBatchEntry): _84.CompressedBatchEntryAmino;
                fromAminoMsg(object: _84.CompressedBatchEntryAminoMsg): _84.CompressedBatchEntry;
                toAminoMsg(message: _84.CompressedBatchEntry): _84.CompressedBatchEntryAminoMsg;
                fromProtoMsg(message: _84.CompressedBatchEntryProtoMsg): _84.CompressedBatchEntry;
                toProto(message: _84.CompressedBatchEntry): Uint8Array;
                toProtoMsg(message: _84.CompressedBatchEntry): _84.CompressedBatchEntryProtoMsg;
            };
            CompressedExistenceProof: {
                typeUrl: string;
                encode(message: _84.CompressedExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.CompressedExistenceProof;
                fromPartial(object: Partial<_84.CompressedExistenceProof>): _84.CompressedExistenceProof;
                fromAmino(object: _84.CompressedExistenceProofAmino): _84.CompressedExistenceProof;
                toAmino(message: _84.CompressedExistenceProof): _84.CompressedExistenceProofAmino;
                fromAminoMsg(object: _84.CompressedExistenceProofAminoMsg): _84.CompressedExistenceProof;
                toAminoMsg(message: _84.CompressedExistenceProof): _84.CompressedExistenceProofAminoMsg;
                fromProtoMsg(message: _84.CompressedExistenceProofProtoMsg): _84.CompressedExistenceProof;
                toProto(message: _84.CompressedExistenceProof): Uint8Array;
                toProtoMsg(message: _84.CompressedExistenceProof): _84.CompressedExistenceProofProtoMsg;
            };
            CompressedNonExistenceProof: {
                typeUrl: string;
                encode(message: _84.CompressedNonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.CompressedNonExistenceProof;
                fromPartial(object: Partial<_84.CompressedNonExistenceProof>): _84.CompressedNonExistenceProof;
                fromAmino(object: _84.CompressedNonExistenceProofAmino): _84.CompressedNonExistenceProof;
                toAmino(message: _84.CompressedNonExistenceProof): _84.CompressedNonExistenceProofAmino;
                fromAminoMsg(object: _84.CompressedNonExistenceProofAminoMsg): _84.CompressedNonExistenceProof;
                toAminoMsg(message: _84.CompressedNonExistenceProof): _84.CompressedNonExistenceProofAminoMsg;
                fromProtoMsg(message: _84.CompressedNonExistenceProofProtoMsg): _84.CompressedNonExistenceProof;
                toProto(message: _84.CompressedNonExistenceProof): Uint8Array;
                toProtoMsg(message: _84.CompressedNonExistenceProof): _84.CompressedNonExistenceProofProtoMsg;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _85.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.Module;
                    fromPartial(object: Partial<_85.Module>): _85.Module;
                    fromAmino(object: _85.ModuleAmino): _85.Module;
                    toAmino(message: _85.Module): _85.ModuleAmino;
                    fromAminoMsg(object: _85.ModuleAminoMsg): _85.Module;
                    toAminoMsg(message: _85.Module): _85.ModuleAminoMsg;
                    fromProtoMsg(message: _85.ModuleProtoMsg): _85.Module;
                    toProto(message: _85.Module): Uint8Array;
                    toProtoMsg(message: _85.Module): _85.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _332.MsgClientImpl;
            QueryClientImpl: typeof _313.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _88.QueryParamsRequest): Promise<_88.QueryParamsResponse>;
                inflation(request?: _88.QueryInflationRequest): Promise<_88.QueryInflationResponse>;
                annualProvisions(request?: _88.QueryAnnualProvisionsRequest): Promise<_88.QueryAnnualProvisionsResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _89.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _89.MsgUpdateParams): {
                        typeUrl: string;
                        value: _89.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _89.MsgUpdateParams): {
                        typeUrl: string;
                        value: _89.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _89.MsgUpdateParams) => _89.MsgUpdateParamsAmino;
                    fromAmino: (object: _89.MsgUpdateParamsAmino) => _89.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _89.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.MsgUpdateParams;
                fromPartial(object: Partial<_89.MsgUpdateParams>): _89.MsgUpdateParams;
                fromAmino(object: _89.MsgUpdateParamsAmino): _89.MsgUpdateParams;
                toAmino(message: _89.MsgUpdateParams): _89.MsgUpdateParamsAmino;
                fromAminoMsg(object: _89.MsgUpdateParamsAminoMsg): _89.MsgUpdateParams;
                toAminoMsg(message: _89.MsgUpdateParams): _89.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _89.MsgUpdateParamsProtoMsg): _89.MsgUpdateParams;
                toProto(message: _89.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _89.MsgUpdateParams): _89.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _89.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_89.MsgUpdateParamsResponse>): _89.MsgUpdateParamsResponse;
                fromAmino(_: _89.MsgUpdateParamsResponseAmino): _89.MsgUpdateParamsResponse;
                toAmino(_: _89.MsgUpdateParamsResponse): _89.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _89.MsgUpdateParamsResponseAminoMsg): _89.MsgUpdateParamsResponse;
                toAminoMsg(message: _89.MsgUpdateParamsResponse): _89.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _89.MsgUpdateParamsResponseProtoMsg): _89.MsgUpdateParamsResponse;
                toProto(message: _89.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _89.MsgUpdateParamsResponse): _89.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _88.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.QueryParamsRequest;
                fromPartial(_: Partial<_88.QueryParamsRequest>): _88.QueryParamsRequest;
                fromAmino(_: _88.QueryParamsRequestAmino): _88.QueryParamsRequest;
                toAmino(_: _88.QueryParamsRequest): _88.QueryParamsRequestAmino;
                fromAminoMsg(object: _88.QueryParamsRequestAminoMsg): _88.QueryParamsRequest;
                toAminoMsg(message: _88.QueryParamsRequest): _88.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _88.QueryParamsRequestProtoMsg): _88.QueryParamsRequest;
                toProto(message: _88.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _88.QueryParamsRequest): _88.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _88.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.QueryParamsResponse;
                fromPartial(object: Partial<_88.QueryParamsResponse>): _88.QueryParamsResponse;
                fromAmino(object: _88.QueryParamsResponseAmino): _88.QueryParamsResponse;
                toAmino(message: _88.QueryParamsResponse): _88.QueryParamsResponseAmino;
                fromAminoMsg(object: _88.QueryParamsResponseAminoMsg): _88.QueryParamsResponse;
                toAminoMsg(message: _88.QueryParamsResponse): _88.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _88.QueryParamsResponseProtoMsg): _88.QueryParamsResponse;
                toProto(message: _88.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _88.QueryParamsResponse): _88.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _88.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.QueryInflationRequest;
                fromPartial(_: Partial<_88.QueryInflationRequest>): _88.QueryInflationRequest;
                fromAmino(_: _88.QueryInflationRequestAmino): _88.QueryInflationRequest;
                toAmino(_: _88.QueryInflationRequest): _88.QueryInflationRequestAmino;
                fromAminoMsg(object: _88.QueryInflationRequestAminoMsg): _88.QueryInflationRequest;
                toAminoMsg(message: _88.QueryInflationRequest): _88.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _88.QueryInflationRequestProtoMsg): _88.QueryInflationRequest;
                toProto(message: _88.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _88.QueryInflationRequest): _88.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _88.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.QueryInflationResponse;
                fromPartial(object: Partial<_88.QueryInflationResponse>): _88.QueryInflationResponse;
                fromAmino(object: _88.QueryInflationResponseAmino): _88.QueryInflationResponse;
                toAmino(message: _88.QueryInflationResponse): _88.QueryInflationResponseAmino;
                fromAminoMsg(object: _88.QueryInflationResponseAminoMsg): _88.QueryInflationResponse;
                toAminoMsg(message: _88.QueryInflationResponse): _88.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _88.QueryInflationResponseProtoMsg): _88.QueryInflationResponse;
                toProto(message: _88.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _88.QueryInflationResponse): _88.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _88.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_88.QueryAnnualProvisionsRequest>): _88.QueryAnnualProvisionsRequest;
                fromAmino(_: _88.QueryAnnualProvisionsRequestAmino): _88.QueryAnnualProvisionsRequest;
                toAmino(_: _88.QueryAnnualProvisionsRequest): _88.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _88.QueryAnnualProvisionsRequestAminoMsg): _88.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _88.QueryAnnualProvisionsRequest): _88.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _88.QueryAnnualProvisionsRequestProtoMsg): _88.QueryAnnualProvisionsRequest;
                toProto(message: _88.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _88.QueryAnnualProvisionsRequest): _88.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _88.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_88.QueryAnnualProvisionsResponse>): _88.QueryAnnualProvisionsResponse;
                fromAmino(object: _88.QueryAnnualProvisionsResponseAmino): _88.QueryAnnualProvisionsResponse;
                toAmino(message: _88.QueryAnnualProvisionsResponse): _88.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _88.QueryAnnualProvisionsResponseAminoMsg): _88.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _88.QueryAnnualProvisionsResponse): _88.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _88.QueryAnnualProvisionsResponseProtoMsg): _88.QueryAnnualProvisionsResponse;
                toProto(message: _88.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _88.QueryAnnualProvisionsResponse): _88.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _87.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.Minter;
                fromPartial(object: Partial<_87.Minter>): _87.Minter;
                fromAmino(object: _87.MinterAmino): _87.Minter;
                toAmino(message: _87.Minter): _87.MinterAmino;
                fromAminoMsg(object: _87.MinterAminoMsg): _87.Minter;
                toAminoMsg(message: _87.Minter): _87.MinterAminoMsg;
                fromProtoMsg(message: _87.MinterProtoMsg): _87.Minter;
                toProto(message: _87.Minter): Uint8Array;
                toProtoMsg(message: _87.Minter): _87.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _87.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.Params;
                fromPartial(object: Partial<_87.Params>): _87.Params;
                fromAmino(object: _87.ParamsAmino): _87.Params;
                toAmino(message: _87.Params): _87.ParamsAmino;
                fromAminoMsg(object: _87.ParamsAminoMsg): _87.Params;
                toAminoMsg(message: _87.Params): _87.ParamsAminoMsg;
                fromProtoMsg(message: _87.ParamsProtoMsg): _87.Params;
                toProto(message: _87.Params): Uint8Array;
                toProtoMsg(message: _87.Params): _87.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _86.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.GenesisState;
                fromPartial(object: Partial<_86.GenesisState>): _86.GenesisState;
                fromAmino(object: _86.GenesisStateAmino): _86.GenesisState;
                toAmino(message: _86.GenesisState): _86.GenesisStateAmino;
                fromAminoMsg(object: _86.GenesisStateAminoMsg): _86.GenesisState;
                toAminoMsg(message: _86.GenesisState): _86.GenesisStateAminoMsg;
                fromProtoMsg(message: _86.GenesisStateProtoMsg): _86.GenesisState;
                toProto(message: _86.GenesisState): Uint8Array;
                toProtoMsg(message: _86.GenesisState): _86.GenesisStateProtoMsg;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _91.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.Module;
                    fromPartial(_: Partial<_91.Module>): _91.Module;
                    fromAmino(_: _91.ModuleAmino): _91.Module;
                    toAmino(_: _91.Module): _91.ModuleAmino;
                    fromAminoMsg(object: _91.ModuleAminoMsg): _91.Module;
                    toAminoMsg(message: _91.Module): _91.ModuleAminoMsg;
                    fromProtoMsg(message: _91.ModuleProtoMsg): _91.Module;
                    toProto(message: _91.Module): Uint8Array;
                    toProtoMsg(message: _91.Module): _91.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _333.MsgClientImpl;
            QueryClientImpl: typeof _314.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _95.QueryBalanceRequest): Promise<_95.QueryBalanceResponse>;
                owner(request: _95.QueryOwnerRequest): Promise<_95.QueryOwnerResponse>;
                supply(request: _95.QuerySupplyRequest): Promise<_95.QuerySupplyResponse>;
                nFTs(request: _95.QueryNFTsRequest): Promise<_95.QueryNFTsResponse>;
                nFT(request: _95.QueryNFTRequest): Promise<_95.QueryNFTResponse>;
                class(request: _95.QueryClassRequest): Promise<_95.QueryClassResponse>;
                classes(request?: _95.QueryClassesRequest): Promise<_95.QueryClassesResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _96.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _96.MsgSend): {
                        typeUrl: string;
                        value: _96.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _96.MsgSend): {
                        typeUrl: string;
                        value: _96.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _96.MsgSend) => _96.MsgSendAmino;
                    fromAmino: (object: _96.MsgSendAmino) => _96.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _96.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.MsgSend;
                fromPartial(object: Partial<_96.MsgSend>): _96.MsgSend;
                fromAmino(object: _96.MsgSendAmino): _96.MsgSend;
                toAmino(message: _96.MsgSend): _96.MsgSendAmino;
                fromAminoMsg(object: _96.MsgSendAminoMsg): _96.MsgSend;
                toAminoMsg(message: _96.MsgSend): _96.MsgSendAminoMsg;
                fromProtoMsg(message: _96.MsgSendProtoMsg): _96.MsgSend;
                toProto(message: _96.MsgSend): Uint8Array;
                toProtoMsg(message: _96.MsgSend): _96.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _96.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.MsgSendResponse;
                fromPartial(_: Partial<_96.MsgSendResponse>): _96.MsgSendResponse;
                fromAmino(_: _96.MsgSendResponseAmino): _96.MsgSendResponse;
                toAmino(_: _96.MsgSendResponse): _96.MsgSendResponseAmino;
                fromAminoMsg(object: _96.MsgSendResponseAminoMsg): _96.MsgSendResponse;
                toAminoMsg(message: _96.MsgSendResponse): _96.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _96.MsgSendResponseProtoMsg): _96.MsgSendResponse;
                toProto(message: _96.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _96.MsgSendResponse): _96.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _95.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QueryBalanceRequest;
                fromPartial(object: Partial<_95.QueryBalanceRequest>): _95.QueryBalanceRequest;
                fromAmino(object: _95.QueryBalanceRequestAmino): _95.QueryBalanceRequest;
                toAmino(message: _95.QueryBalanceRequest): _95.QueryBalanceRequestAmino;
                fromAminoMsg(object: _95.QueryBalanceRequestAminoMsg): _95.QueryBalanceRequest;
                toAminoMsg(message: _95.QueryBalanceRequest): _95.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _95.QueryBalanceRequestProtoMsg): _95.QueryBalanceRequest;
                toProto(message: _95.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _95.QueryBalanceRequest): _95.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _95.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QueryBalanceResponse;
                fromPartial(object: Partial<_95.QueryBalanceResponse>): _95.QueryBalanceResponse;
                fromAmino(object: _95.QueryBalanceResponseAmino): _95.QueryBalanceResponse;
                toAmino(message: _95.QueryBalanceResponse): _95.QueryBalanceResponseAmino;
                fromAminoMsg(object: _95.QueryBalanceResponseAminoMsg): _95.QueryBalanceResponse;
                toAminoMsg(message: _95.QueryBalanceResponse): _95.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _95.QueryBalanceResponseProtoMsg): _95.QueryBalanceResponse;
                toProto(message: _95.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _95.QueryBalanceResponse): _95.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _95.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QueryOwnerRequest;
                fromPartial(object: Partial<_95.QueryOwnerRequest>): _95.QueryOwnerRequest;
                fromAmino(object: _95.QueryOwnerRequestAmino): _95.QueryOwnerRequest;
                toAmino(message: _95.QueryOwnerRequest): _95.QueryOwnerRequestAmino;
                fromAminoMsg(object: _95.QueryOwnerRequestAminoMsg): _95.QueryOwnerRequest;
                toAminoMsg(message: _95.QueryOwnerRequest): _95.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _95.QueryOwnerRequestProtoMsg): _95.QueryOwnerRequest;
                toProto(message: _95.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _95.QueryOwnerRequest): _95.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _95.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QueryOwnerResponse;
                fromPartial(object: Partial<_95.QueryOwnerResponse>): _95.QueryOwnerResponse;
                fromAmino(object: _95.QueryOwnerResponseAmino): _95.QueryOwnerResponse;
                toAmino(message: _95.QueryOwnerResponse): _95.QueryOwnerResponseAmino;
                fromAminoMsg(object: _95.QueryOwnerResponseAminoMsg): _95.QueryOwnerResponse;
                toAminoMsg(message: _95.QueryOwnerResponse): _95.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _95.QueryOwnerResponseProtoMsg): _95.QueryOwnerResponse;
                toProto(message: _95.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _95.QueryOwnerResponse): _95.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _95.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QuerySupplyRequest;
                fromPartial(object: Partial<_95.QuerySupplyRequest>): _95.QuerySupplyRequest;
                fromAmino(object: _95.QuerySupplyRequestAmino): _95.QuerySupplyRequest;
                toAmino(message: _95.QuerySupplyRequest): _95.QuerySupplyRequestAmino;
                fromAminoMsg(object: _95.QuerySupplyRequestAminoMsg): _95.QuerySupplyRequest;
                toAminoMsg(message: _95.QuerySupplyRequest): _95.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _95.QuerySupplyRequestProtoMsg): _95.QuerySupplyRequest;
                toProto(message: _95.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _95.QuerySupplyRequest): _95.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _95.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QuerySupplyResponse;
                fromPartial(object: Partial<_95.QuerySupplyResponse>): _95.QuerySupplyResponse;
                fromAmino(object: _95.QuerySupplyResponseAmino): _95.QuerySupplyResponse;
                toAmino(message: _95.QuerySupplyResponse): _95.QuerySupplyResponseAmino;
                fromAminoMsg(object: _95.QuerySupplyResponseAminoMsg): _95.QuerySupplyResponse;
                toAminoMsg(message: _95.QuerySupplyResponse): _95.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _95.QuerySupplyResponseProtoMsg): _95.QuerySupplyResponse;
                toProto(message: _95.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _95.QuerySupplyResponse): _95.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _95.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QueryNFTsRequest;
                fromPartial(object: Partial<_95.QueryNFTsRequest>): _95.QueryNFTsRequest;
                fromAmino(object: _95.QueryNFTsRequestAmino): _95.QueryNFTsRequest;
                toAmino(message: _95.QueryNFTsRequest): _95.QueryNFTsRequestAmino;
                fromAminoMsg(object: _95.QueryNFTsRequestAminoMsg): _95.QueryNFTsRequest;
                toAminoMsg(message: _95.QueryNFTsRequest): _95.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _95.QueryNFTsRequestProtoMsg): _95.QueryNFTsRequest;
                toProto(message: _95.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _95.QueryNFTsRequest): _95.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _95.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QueryNFTsResponse;
                fromPartial(object: Partial<_95.QueryNFTsResponse>): _95.QueryNFTsResponse;
                fromAmino(object: _95.QueryNFTsResponseAmino): _95.QueryNFTsResponse;
                toAmino(message: _95.QueryNFTsResponse): _95.QueryNFTsResponseAmino;
                fromAminoMsg(object: _95.QueryNFTsResponseAminoMsg): _95.QueryNFTsResponse;
                toAminoMsg(message: _95.QueryNFTsResponse): _95.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _95.QueryNFTsResponseProtoMsg): _95.QueryNFTsResponse;
                toProto(message: _95.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _95.QueryNFTsResponse): _95.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _95.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QueryNFTRequest;
                fromPartial(object: Partial<_95.QueryNFTRequest>): _95.QueryNFTRequest;
                fromAmino(object: _95.QueryNFTRequestAmino): _95.QueryNFTRequest;
                toAmino(message: _95.QueryNFTRequest): _95.QueryNFTRequestAmino;
                fromAminoMsg(object: _95.QueryNFTRequestAminoMsg): _95.QueryNFTRequest;
                toAminoMsg(message: _95.QueryNFTRequest): _95.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _95.QueryNFTRequestProtoMsg): _95.QueryNFTRequest;
                toProto(message: _95.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _95.QueryNFTRequest): _95.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _95.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QueryNFTResponse;
                fromPartial(object: Partial<_95.QueryNFTResponse>): _95.QueryNFTResponse;
                fromAmino(object: _95.QueryNFTResponseAmino): _95.QueryNFTResponse;
                toAmino(message: _95.QueryNFTResponse): _95.QueryNFTResponseAmino;
                fromAminoMsg(object: _95.QueryNFTResponseAminoMsg): _95.QueryNFTResponse;
                toAminoMsg(message: _95.QueryNFTResponse): _95.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _95.QueryNFTResponseProtoMsg): _95.QueryNFTResponse;
                toProto(message: _95.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _95.QueryNFTResponse): _95.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _95.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QueryClassRequest;
                fromPartial(object: Partial<_95.QueryClassRequest>): _95.QueryClassRequest;
                fromAmino(object: _95.QueryClassRequestAmino): _95.QueryClassRequest;
                toAmino(message: _95.QueryClassRequest): _95.QueryClassRequestAmino;
                fromAminoMsg(object: _95.QueryClassRequestAminoMsg): _95.QueryClassRequest;
                toAminoMsg(message: _95.QueryClassRequest): _95.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _95.QueryClassRequestProtoMsg): _95.QueryClassRequest;
                toProto(message: _95.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _95.QueryClassRequest): _95.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _95.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QueryClassResponse;
                fromPartial(object: Partial<_95.QueryClassResponse>): _95.QueryClassResponse;
                fromAmino(object: _95.QueryClassResponseAmino): _95.QueryClassResponse;
                toAmino(message: _95.QueryClassResponse): _95.QueryClassResponseAmino;
                fromAminoMsg(object: _95.QueryClassResponseAminoMsg): _95.QueryClassResponse;
                toAminoMsg(message: _95.QueryClassResponse): _95.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _95.QueryClassResponseProtoMsg): _95.QueryClassResponse;
                toProto(message: _95.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _95.QueryClassResponse): _95.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _95.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QueryClassesRequest;
                fromPartial(object: Partial<_95.QueryClassesRequest>): _95.QueryClassesRequest;
                fromAmino(object: _95.QueryClassesRequestAmino): _95.QueryClassesRequest;
                toAmino(message: _95.QueryClassesRequest): _95.QueryClassesRequestAmino;
                fromAminoMsg(object: _95.QueryClassesRequestAminoMsg): _95.QueryClassesRequest;
                toAminoMsg(message: _95.QueryClassesRequest): _95.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _95.QueryClassesRequestProtoMsg): _95.QueryClassesRequest;
                toProto(message: _95.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _95.QueryClassesRequest): _95.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _95.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QueryClassesResponse;
                fromPartial(object: Partial<_95.QueryClassesResponse>): _95.QueryClassesResponse;
                fromAmino(object: _95.QueryClassesResponseAmino): _95.QueryClassesResponse;
                toAmino(message: _95.QueryClassesResponse): _95.QueryClassesResponseAmino;
                fromAminoMsg(object: _95.QueryClassesResponseAminoMsg): _95.QueryClassesResponse;
                toAminoMsg(message: _95.QueryClassesResponse): _95.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _95.QueryClassesResponseProtoMsg): _95.QueryClassesResponse;
                toProto(message: _95.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _95.QueryClassesResponse): _95.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _94.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.Class;
                fromPartial(object: Partial<_94.Class>): _94.Class;
                fromAmino(object: _94.ClassAmino): _94.Class;
                toAmino(message: _94.Class): _94.ClassAmino;
                fromAminoMsg(object: _94.ClassAminoMsg): _94.Class;
                toAminoMsg(message: _94.Class): _94.ClassAminoMsg;
                fromProtoMsg(message: _94.ClassProtoMsg): _94.Class;
                toProto(message: _94.Class): Uint8Array;
                toProtoMsg(message: _94.Class): _94.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _94.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.NFT;
                fromPartial(object: Partial<_94.NFT>): _94.NFT;
                fromAmino(object: _94.NFTAmino): _94.NFT;
                toAmino(message: _94.NFT): _94.NFTAmino;
                fromAminoMsg(object: _94.NFTAminoMsg): _94.NFT;
                toAminoMsg(message: _94.NFT): _94.NFTAminoMsg;
                fromProtoMsg(message: _94.NFTProtoMsg): _94.NFT;
                toProto(message: _94.NFT): Uint8Array;
                toProtoMsg(message: _94.NFT): _94.NFTProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _93.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.GenesisState;
                fromPartial(object: Partial<_93.GenesisState>): _93.GenesisState;
                fromAmino(object: _93.GenesisStateAmino): _93.GenesisState;
                toAmino(message: _93.GenesisState): _93.GenesisStateAmino;
                fromAminoMsg(object: _93.GenesisStateAminoMsg): _93.GenesisState;
                toAminoMsg(message: _93.GenesisState): _93.GenesisStateAminoMsg;
                fromProtoMsg(message: _93.GenesisStateProtoMsg): _93.GenesisState;
                toProto(message: _93.GenesisState): Uint8Array;
                toProtoMsg(message: _93.GenesisState): _93.GenesisStateProtoMsg;
            };
            Entry: {
                typeUrl: string;
                encode(message: _93.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.Entry;
                fromPartial(object: Partial<_93.Entry>): _93.Entry;
                fromAmino(object: _93.EntryAmino): _93.Entry;
                toAmino(message: _93.Entry): _93.EntryAmino;
                fromAminoMsg(object: _93.EntryAminoMsg): _93.Entry;
                toAminoMsg(message: _93.Entry): _93.EntryAminoMsg;
                fromProtoMsg(message: _93.EntryProtoMsg): _93.Entry;
                toProto(message: _93.Entry): Uint8Array;
                toProtoMsg(message: _93.Entry): _93.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _92.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.EventSend;
                fromPartial(object: Partial<_92.EventSend>): _92.EventSend;
                fromAmino(object: _92.EventSendAmino): _92.EventSend;
                toAmino(message: _92.EventSend): _92.EventSendAmino;
                fromAminoMsg(object: _92.EventSendAminoMsg): _92.EventSend;
                toAminoMsg(message: _92.EventSend): _92.EventSendAminoMsg;
                fromProtoMsg(message: _92.EventSendProtoMsg): _92.EventSend;
                toProto(message: _92.EventSend): Uint8Array;
                toProtoMsg(message: _92.EventSend): _92.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _92.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.EventMint;
                fromPartial(object: Partial<_92.EventMint>): _92.EventMint;
                fromAmino(object: _92.EventMintAmino): _92.EventMint;
                toAmino(message: _92.EventMint): _92.EventMintAmino;
                fromAminoMsg(object: _92.EventMintAminoMsg): _92.EventMint;
                toAminoMsg(message: _92.EventMint): _92.EventMintAminoMsg;
                fromProtoMsg(message: _92.EventMintProtoMsg): _92.EventMint;
                toProto(message: _92.EventMint): Uint8Array;
                toProtoMsg(message: _92.EventMint): _92.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _92.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.EventBurn;
                fromPartial(object: Partial<_92.EventBurn>): _92.EventBurn;
                fromAmino(object: _92.EventBurnAmino): _92.EventBurn;
                toAmino(message: _92.EventBurn): _92.EventBurnAmino;
                fromAminoMsg(object: _92.EventBurnAminoMsg): _92.EventBurn;
                toAminoMsg(message: _92.EventBurn): _92.EventBurnAminoMsg;
                fromProtoMsg(message: _92.EventBurnProtoMsg): _92.EventBurn;
                toProto(message: _92.EventBurn): Uint8Array;
                toProtoMsg(message: _92.EventBurn): _92.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _97.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.Module;
                    fromPartial(_: Partial<_97.Module>): _97.Module;
                    fromAmino(_: _97.ModuleAmino): _97.Module;
                    toAmino(_: _97.Module): _97.ModuleAmino;
                    fromAminoMsg(object: _97.ModuleAminoMsg): _97.Module;
                    toAminoMsg(message: _97.Module): _97.ModuleAminoMsg;
                    fromProtoMsg(message: _97.ModuleProtoMsg): _97.Module;
                    toProto(message: _97.Module): Uint8Array;
                    toProtoMsg(message: _97.Module): _97.ModuleProtoMsg;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _315.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    get(request: _98.GetRequest): Promise<_98.GetResponse>;
                    list(request: _98.ListRequest): Promise<_98.ListResponse>;
                };
                GetRequest: {
                    typeUrl: string;
                    encode(message: _98.GetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.GetRequest;
                    fromPartial(object: Partial<_98.GetRequest>): _98.GetRequest;
                    fromAmino(object: _98.GetRequestAmino): _98.GetRequest;
                    toAmino(message: _98.GetRequest): _98.GetRequestAmino;
                    fromAminoMsg(object: _98.GetRequestAminoMsg): _98.GetRequest;
                    toAminoMsg(message: _98.GetRequest): _98.GetRequestAminoMsg;
                    fromProtoMsg(message: _98.GetRequestProtoMsg): _98.GetRequest;
                    toProto(message: _98.GetRequest): Uint8Array;
                    toProtoMsg(message: _98.GetRequest): _98.GetRequestProtoMsg;
                };
                GetResponse: {
                    typeUrl: string;
                    encode(message: _98.GetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.GetResponse;
                    fromPartial(object: Partial<_98.GetResponse>): _98.GetResponse;
                    fromAmino(object: _98.GetResponseAmino): _98.GetResponse;
                    toAmino(message: _98.GetResponse): _98.GetResponseAmino;
                    fromAminoMsg(object: _98.GetResponseAminoMsg): _98.GetResponse;
                    toAminoMsg(message: _98.GetResponse): _98.GetResponseAminoMsg;
                    fromProtoMsg(message: _98.GetResponseProtoMsg): _98.GetResponse;
                    toProto(message: _98.GetResponse): Uint8Array;
                    toProtoMsg(message: _98.GetResponse): _98.GetResponseProtoMsg;
                };
                ListRequest: {
                    typeUrl: string;
                    encode(message: _98.ListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.ListRequest;
                    fromPartial(object: Partial<_98.ListRequest>): _98.ListRequest;
                    fromAmino(object: _98.ListRequestAmino): _98.ListRequest;
                    toAmino(message: _98.ListRequest): _98.ListRequestAmino;
                    fromAminoMsg(object: _98.ListRequestAminoMsg): _98.ListRequest;
                    toAminoMsg(message: _98.ListRequest): _98.ListRequestAminoMsg;
                    fromProtoMsg(message: _98.ListRequestProtoMsg): _98.ListRequest;
                    toProto(message: _98.ListRequest): Uint8Array;
                    toProtoMsg(message: _98.ListRequest): _98.ListRequestProtoMsg;
                };
                ListRequest_Prefix: {
                    typeUrl: string;
                    encode(message: _98.ListRequest_Prefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.ListRequest_Prefix;
                    fromPartial(object: Partial<_98.ListRequest_Prefix>): _98.ListRequest_Prefix;
                    fromAmino(object: _98.ListRequest_PrefixAmino): _98.ListRequest_Prefix;
                    toAmino(message: _98.ListRequest_Prefix): _98.ListRequest_PrefixAmino;
                    fromAminoMsg(object: _98.ListRequest_PrefixAminoMsg): _98.ListRequest_Prefix;
                    toAminoMsg(message: _98.ListRequest_Prefix): _98.ListRequest_PrefixAminoMsg;
                    fromProtoMsg(message: _98.ListRequest_PrefixProtoMsg): _98.ListRequest_Prefix;
                    toProto(message: _98.ListRequest_Prefix): Uint8Array;
                    toProtoMsg(message: _98.ListRequest_Prefix): _98.ListRequest_PrefixProtoMsg;
                };
                ListRequest_Range: {
                    typeUrl: string;
                    encode(message: _98.ListRequest_Range, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.ListRequest_Range;
                    fromPartial(object: Partial<_98.ListRequest_Range>): _98.ListRequest_Range;
                    fromAmino(object: _98.ListRequest_RangeAmino): _98.ListRequest_Range;
                    toAmino(message: _98.ListRequest_Range): _98.ListRequest_RangeAmino;
                    fromAminoMsg(object: _98.ListRequest_RangeAminoMsg): _98.ListRequest_Range;
                    toAminoMsg(message: _98.ListRequest_Range): _98.ListRequest_RangeAminoMsg;
                    fromProtoMsg(message: _98.ListRequest_RangeProtoMsg): _98.ListRequest_Range;
                    toProto(message: _98.ListRequest_Range): Uint8Array;
                    toProtoMsg(message: _98.ListRequest_Range): _98.ListRequest_RangeProtoMsg;
                };
                ListResponse: {
                    typeUrl: string;
                    encode(message: _98.ListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.ListResponse;
                    fromPartial(object: Partial<_98.ListResponse>): _98.ListResponse;
                    fromAmino(object: _98.ListResponseAmino): _98.ListResponse;
                    toAmino(message: _98.ListResponse): _98.ListResponseAmino;
                    fromAminoMsg(object: _98.ListResponseAminoMsg): _98.ListResponse;
                    toAminoMsg(message: _98.ListResponse): _98.ListResponseAminoMsg;
                    fromProtoMsg(message: _98.ListResponseProtoMsg): _98.ListResponse;
                    toProto(message: _98.ListResponse): Uint8Array;
                    toProtoMsg(message: _98.ListResponse): _98.ListResponseProtoMsg;
                };
                IndexValue: {
                    typeUrl: string;
                    encode(message: _98.IndexValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.IndexValue;
                    fromPartial(object: Partial<_98.IndexValue>): _98.IndexValue;
                    fromAmino(object: _98.IndexValueAmino): _98.IndexValue;
                    toAmino(message: _98.IndexValue): _98.IndexValueAmino;
                    fromAminoMsg(object: _98.IndexValueAminoMsg): _98.IndexValue;
                    toAminoMsg(message: _98.IndexValue): _98.IndexValueAminoMsg;
                    fromProtoMsg(message: _98.IndexValueProtoMsg): _98.IndexValue;
                    toProto(message: _98.IndexValue): Uint8Array;
                    toProtoMsg(message: _98.IndexValue): _98.IndexValueProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _99.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.TableDescriptor;
                fromPartial(object: Partial<_99.TableDescriptor>): _99.TableDescriptor;
                fromAmino(object: _99.TableDescriptorAmino): _99.TableDescriptor;
                toAmino(message: _99.TableDescriptor): _99.TableDescriptorAmino;
                fromAminoMsg(object: _99.TableDescriptorAminoMsg): _99.TableDescriptor;
                toAminoMsg(message: _99.TableDescriptor): _99.TableDescriptorAminoMsg;
                fromProtoMsg(message: _99.TableDescriptorProtoMsg): _99.TableDescriptor;
                toProto(message: _99.TableDescriptor): Uint8Array;
                toProtoMsg(message: _99.TableDescriptor): _99.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _99.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_99.PrimaryKeyDescriptor>): _99.PrimaryKeyDescriptor;
                fromAmino(object: _99.PrimaryKeyDescriptorAmino): _99.PrimaryKeyDescriptor;
                toAmino(message: _99.PrimaryKeyDescriptor): _99.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _99.PrimaryKeyDescriptorAminoMsg): _99.PrimaryKeyDescriptor;
                toAminoMsg(message: _99.PrimaryKeyDescriptor): _99.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _99.PrimaryKeyDescriptorProtoMsg): _99.PrimaryKeyDescriptor;
                toProto(message: _99.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _99.PrimaryKeyDescriptor): _99.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _99.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_99.SecondaryIndexDescriptor>): _99.SecondaryIndexDescriptor;
                fromAmino(object: _99.SecondaryIndexDescriptorAmino): _99.SecondaryIndexDescriptor;
                toAmino(message: _99.SecondaryIndexDescriptor): _99.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _99.SecondaryIndexDescriptorAminoMsg): _99.SecondaryIndexDescriptor;
                toAminoMsg(message: _99.SecondaryIndexDescriptor): _99.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _99.SecondaryIndexDescriptorProtoMsg): _99.SecondaryIndexDescriptor;
                toProto(message: _99.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _99.SecondaryIndexDescriptor): _99.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _99.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.SingletonDescriptor;
                fromPartial(object: Partial<_99.SingletonDescriptor>): _99.SingletonDescriptor;
                fromAmino(object: _99.SingletonDescriptorAmino): _99.SingletonDescriptor;
                toAmino(message: _99.SingletonDescriptor): _99.SingletonDescriptorAmino;
                fromAminoMsg(object: _99.SingletonDescriptorAminoMsg): _99.SingletonDescriptor;
                toAminoMsg(message: _99.SingletonDescriptor): _99.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _99.SingletonDescriptorProtoMsg): _99.SingletonDescriptor;
                toProto(message: _99.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _99.SingletonDescriptor): _99.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _100.StorageType;
            storageTypeToJSON(object: _100.StorageType): string;
            StorageType: typeof _100.StorageType;
            StorageTypeSDKType: typeof _100.StorageType;
            StorageTypeAmino: typeof _100.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _100.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_100.ModuleSchemaDescriptor>): _100.ModuleSchemaDescriptor;
                fromAmino(object: _100.ModuleSchemaDescriptorAmino): _100.ModuleSchemaDescriptor;
                toAmino(message: _100.ModuleSchemaDescriptor): _100.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _100.ModuleSchemaDescriptorAminoMsg): _100.ModuleSchemaDescriptor;
                toAminoMsg(message: _100.ModuleSchemaDescriptor): _100.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _100.ModuleSchemaDescriptorProtoMsg): _100.ModuleSchemaDescriptor;
                toProto(message: _100.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _100.ModuleSchemaDescriptor): _100.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _100.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_100.ModuleSchemaDescriptor_FileEntry>): _100.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _100.ModuleSchemaDescriptor_FileEntryAmino): _100.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _100.ModuleSchemaDescriptor_FileEntry): _100.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _100.ModuleSchemaDescriptor_FileEntryAminoMsg): _100.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _100.ModuleSchemaDescriptor_FileEntry): _100.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _100.ModuleSchemaDescriptor_FileEntryProtoMsg): _100.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _100.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _100.ModuleSchemaDescriptor_FileEntry): _100.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _101.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.Module;
                    fromPartial(_: Partial<_101.Module>): _101.Module;
                    fromAmino(_: _101.ModuleAmino): _101.Module;
                    toAmino(_: _101.Module): _101.ModuleAmino;
                    fromAminoMsg(object: _101.ModuleAminoMsg): _101.Module;
                    toAminoMsg(message: _101.Module): _101.ModuleAminoMsg;
                    fromProtoMsg(message: _101.ModuleProtoMsg): _101.Module;
                    toProto(message: _101.Module): Uint8Array;
                    toProtoMsg(message: _101.Module): _101.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _316.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                subspaces(request?: _103.QuerySubspacesRequest): Promise<_103.QuerySubspacesResponse>;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _103.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.QueryParamsRequest;
                fromPartial(object: Partial<_103.QueryParamsRequest>): _103.QueryParamsRequest;
                fromAmino(object: _103.QueryParamsRequestAmino): _103.QueryParamsRequest;
                toAmino(message: _103.QueryParamsRequest): _103.QueryParamsRequestAmino;
                fromAminoMsg(object: _103.QueryParamsRequestAminoMsg): _103.QueryParamsRequest;
                toAminoMsg(message: _103.QueryParamsRequest): _103.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _103.QueryParamsRequestProtoMsg): _103.QueryParamsRequest;
                toProto(message: _103.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _103.QueryParamsRequest): _103.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _103.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.QueryParamsResponse;
                fromPartial(object: Partial<_103.QueryParamsResponse>): _103.QueryParamsResponse;
                fromAmino(object: _103.QueryParamsResponseAmino): _103.QueryParamsResponse;
                toAmino(message: _103.QueryParamsResponse): _103.QueryParamsResponseAmino;
                fromAminoMsg(object: _103.QueryParamsResponseAminoMsg): _103.QueryParamsResponse;
                toAminoMsg(message: _103.QueryParamsResponse): _103.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _103.QueryParamsResponseProtoMsg): _103.QueryParamsResponse;
                toProto(message: _103.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _103.QueryParamsResponse): _103.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _103.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.QuerySubspacesRequest;
                fromPartial(_: Partial<_103.QuerySubspacesRequest>): _103.QuerySubspacesRequest;
                fromAmino(_: _103.QuerySubspacesRequestAmino): _103.QuerySubspacesRequest;
                toAmino(_: _103.QuerySubspacesRequest): _103.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _103.QuerySubspacesRequestAminoMsg): _103.QuerySubspacesRequest;
                toAminoMsg(message: _103.QuerySubspacesRequest): _103.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _103.QuerySubspacesRequestProtoMsg): _103.QuerySubspacesRequest;
                toProto(message: _103.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _103.QuerySubspacesRequest): _103.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _103.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.QuerySubspacesResponse;
                fromPartial(object: Partial<_103.QuerySubspacesResponse>): _103.QuerySubspacesResponse;
                fromAmino(object: _103.QuerySubspacesResponseAmino): _103.QuerySubspacesResponse;
                toAmino(message: _103.QuerySubspacesResponse): _103.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _103.QuerySubspacesResponseAminoMsg): _103.QuerySubspacesResponse;
                toAminoMsg(message: _103.QuerySubspacesResponse): _103.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _103.QuerySubspacesResponseProtoMsg): _103.QuerySubspacesResponse;
                toProto(message: _103.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _103.QuerySubspacesResponse): _103.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _103.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Subspace;
                fromPartial(object: Partial<_103.Subspace>): _103.Subspace;
                fromAmino(object: _103.SubspaceAmino): _103.Subspace;
                toAmino(message: _103.Subspace): _103.SubspaceAmino;
                fromAminoMsg(object: _103.SubspaceAminoMsg): _103.Subspace;
                toAminoMsg(message: _103.Subspace): _103.SubspaceAminoMsg;
                fromProtoMsg(message: _103.SubspaceProtoMsg): _103.Subspace;
                toProto(message: _103.Subspace): Uint8Array;
                toProtoMsg(message: _103.Subspace): _103.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _102.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.ParameterChangeProposal;
                fromPartial(object: Partial<_102.ParameterChangeProposal>): _102.ParameterChangeProposal;
                fromAmino(object: _102.ParameterChangeProposalAmino): _102.ParameterChangeProposal;
                toAmino(message: _102.ParameterChangeProposal): _102.ParameterChangeProposalAmino;
                fromAminoMsg(object: _102.ParameterChangeProposalAminoMsg): _102.ParameterChangeProposal;
                toAminoMsg(message: _102.ParameterChangeProposal): _102.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _102.ParameterChangeProposalProtoMsg): _102.ParameterChangeProposal;
                toProto(message: _102.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _102.ParameterChangeProposal): _102.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _102.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.ParamChange;
                fromPartial(object: Partial<_102.ParamChange>): _102.ParamChange;
                fromAmino(object: _102.ParamChangeAmino): _102.ParamChange;
                toAmino(message: _102.ParamChange): _102.ParamChangeAmino;
                fromAminoMsg(object: _102.ParamChangeAminoMsg): _102.ParamChange;
                toAminoMsg(message: _102.ParamChange): _102.ParamChangeAminoMsg;
                fromProtoMsg(message: _102.ParamChangeProtoMsg): _102.ParamChange;
                toProto(message: _102.ParamChange): Uint8Array;
                toProtoMsg(message: _102.ParamChange): _102.ParamChangeProtoMsg;
            };
        };
    }
    namespace query {
        const v1: {};
    }
    namespace reflection {
        const v1: {
            FileDescriptorsRequest: {
                typeUrl: string;
                encode(_: _105.FileDescriptorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.FileDescriptorsRequest;
                fromPartial(_: Partial<_105.FileDescriptorsRequest>): _105.FileDescriptorsRequest;
                fromAmino(_: _105.FileDescriptorsRequestAmino): _105.FileDescriptorsRequest;
                toAmino(_: _105.FileDescriptorsRequest): _105.FileDescriptorsRequestAmino;
                fromAminoMsg(object: _105.FileDescriptorsRequestAminoMsg): _105.FileDescriptorsRequest;
                toAminoMsg(message: _105.FileDescriptorsRequest): _105.FileDescriptorsRequestAminoMsg;
                fromProtoMsg(message: _105.FileDescriptorsRequestProtoMsg): _105.FileDescriptorsRequest;
                toProto(message: _105.FileDescriptorsRequest): Uint8Array;
                toProtoMsg(message: _105.FileDescriptorsRequest): _105.FileDescriptorsRequestProtoMsg;
            };
            FileDescriptorsResponse: {
                typeUrl: string;
                encode(message: _105.FileDescriptorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.FileDescriptorsResponse;
                fromPartial(object: Partial<_105.FileDescriptorsResponse>): _105.FileDescriptorsResponse;
                fromAmino(object: _105.FileDescriptorsResponseAmino): _105.FileDescriptorsResponse;
                toAmino(message: _105.FileDescriptorsResponse): _105.FileDescriptorsResponseAmino;
                fromAminoMsg(object: _105.FileDescriptorsResponseAminoMsg): _105.FileDescriptorsResponse;
                toAminoMsg(message: _105.FileDescriptorsResponse): _105.FileDescriptorsResponseAminoMsg;
                fromProtoMsg(message: _105.FileDescriptorsResponseProtoMsg): _105.FileDescriptorsResponse;
                toProto(message: _105.FileDescriptorsResponse): Uint8Array;
                toProtoMsg(message: _105.FileDescriptorsResponse): _105.FileDescriptorsResponseProtoMsg;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _106.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.Module;
                    fromPartial(object: Partial<_106.Module>): _106.Module;
                    fromAmino(object: _106.ModuleAmino): _106.Module;
                    toAmino(message: _106.Module): _106.ModuleAmino;
                    fromAminoMsg(object: _106.ModuleAminoMsg): _106.Module;
                    toAminoMsg(message: _106.Module): _106.ModuleAminoMsg;
                    fromProtoMsg(message: _106.ModuleProtoMsg): _106.Module;
                    toProto(message: _106.Module): Uint8Array;
                    toProtoMsg(message: _106.Module): _106.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _334.MsgClientImpl;
            QueryClientImpl: typeof _317.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _108.QueryParamsRequest): Promise<_108.QueryParamsResponse>;
                signingInfo(request: _108.QuerySigningInfoRequest): Promise<_108.QuerySigningInfoResponse>;
                signingInfos(request?: _108.QuerySigningInfosRequest): Promise<_108.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _110.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _110.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _110.MsgUnjail): {
                        typeUrl: string;
                        value: _110.MsgUnjail;
                    };
                    updateParams(value: _110.MsgUpdateParams): {
                        typeUrl: string;
                        value: _110.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    unjail(value: _110.MsgUnjail): {
                        typeUrl: string;
                        value: _110.MsgUnjail;
                    };
                    updateParams(value: _110.MsgUpdateParams): {
                        typeUrl: string;
                        value: _110.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _110.MsgUnjail) => _110.MsgUnjailAmino;
                    fromAmino: (object: _110.MsgUnjailAmino) => _110.MsgUnjail;
                };
                "/cosmos.slashing.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _110.MsgUpdateParams) => _110.MsgUpdateParamsAmino;
                    fromAmino: (object: _110.MsgUpdateParamsAmino) => _110.MsgUpdateParams;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _110.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.MsgUnjail;
                fromPartial(object: Partial<_110.MsgUnjail>): _110.MsgUnjail;
                fromAmino(object: _110.MsgUnjailAmino): _110.MsgUnjail;
                toAmino(message: _110.MsgUnjail): _110.MsgUnjailAmino;
                fromAminoMsg(object: _110.MsgUnjailAminoMsg): _110.MsgUnjail;
                toAminoMsg(message: _110.MsgUnjail): _110.MsgUnjailAminoMsg;
                fromProtoMsg(message: _110.MsgUnjailProtoMsg): _110.MsgUnjail;
                toProto(message: _110.MsgUnjail): Uint8Array;
                toProtoMsg(message: _110.MsgUnjail): _110.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _110.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.MsgUnjailResponse;
                fromPartial(_: Partial<_110.MsgUnjailResponse>): _110.MsgUnjailResponse;
                fromAmino(_: _110.MsgUnjailResponseAmino): _110.MsgUnjailResponse;
                toAmino(_: _110.MsgUnjailResponse): _110.MsgUnjailResponseAmino;
                fromAminoMsg(object: _110.MsgUnjailResponseAminoMsg): _110.MsgUnjailResponse;
                toAminoMsg(message: _110.MsgUnjailResponse): _110.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _110.MsgUnjailResponseProtoMsg): _110.MsgUnjailResponse;
                toProto(message: _110.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _110.MsgUnjailResponse): _110.MsgUnjailResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _110.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.MsgUpdateParams;
                fromPartial(object: Partial<_110.MsgUpdateParams>): _110.MsgUpdateParams;
                fromAmino(object: _110.MsgUpdateParamsAmino): _110.MsgUpdateParams;
                toAmino(message: _110.MsgUpdateParams): _110.MsgUpdateParamsAmino;
                fromAminoMsg(object: _110.MsgUpdateParamsAminoMsg): _110.MsgUpdateParams;
                toAminoMsg(message: _110.MsgUpdateParams): _110.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _110.MsgUpdateParamsProtoMsg): _110.MsgUpdateParams;
                toProto(message: _110.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _110.MsgUpdateParams): _110.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _110.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_110.MsgUpdateParamsResponse>): _110.MsgUpdateParamsResponse;
                fromAmino(_: _110.MsgUpdateParamsResponseAmino): _110.MsgUpdateParamsResponse;
                toAmino(_: _110.MsgUpdateParamsResponse): _110.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _110.MsgUpdateParamsResponseAminoMsg): _110.MsgUpdateParamsResponse;
                toAminoMsg(message: _110.MsgUpdateParamsResponse): _110.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _110.MsgUpdateParamsResponseProtoMsg): _110.MsgUpdateParamsResponse;
                toProto(message: _110.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _110.MsgUpdateParamsResponse): _110.MsgUpdateParamsResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _109.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.ValidatorSigningInfo;
                fromPartial(object: Partial<_109.ValidatorSigningInfo>): _109.ValidatorSigningInfo;
                fromAmino(object: _109.ValidatorSigningInfoAmino): _109.ValidatorSigningInfo;
                toAmino(message: _109.ValidatorSigningInfo): _109.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _109.ValidatorSigningInfoAminoMsg): _109.ValidatorSigningInfo;
                toAminoMsg(message: _109.ValidatorSigningInfo): _109.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _109.ValidatorSigningInfoProtoMsg): _109.ValidatorSigningInfo;
                toProto(message: _109.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _109.ValidatorSigningInfo): _109.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _109.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Params;
                fromPartial(object: Partial<_109.Params>): _109.Params;
                fromAmino(object: _109.ParamsAmino): _109.Params;
                toAmino(message: _109.Params): _109.ParamsAmino;
                fromAminoMsg(object: _109.ParamsAminoMsg): _109.Params;
                toAminoMsg(message: _109.Params): _109.ParamsAminoMsg;
                fromProtoMsg(message: _109.ParamsProtoMsg): _109.Params;
                toProto(message: _109.Params): Uint8Array;
                toProtoMsg(message: _109.Params): _109.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _108.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.QueryParamsRequest;
                fromPartial(_: Partial<_108.QueryParamsRequest>): _108.QueryParamsRequest;
                fromAmino(_: _108.QueryParamsRequestAmino): _108.QueryParamsRequest;
                toAmino(_: _108.QueryParamsRequest): _108.QueryParamsRequestAmino;
                fromAminoMsg(object: _108.QueryParamsRequestAminoMsg): _108.QueryParamsRequest;
                toAminoMsg(message: _108.QueryParamsRequest): _108.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _108.QueryParamsRequestProtoMsg): _108.QueryParamsRequest;
                toProto(message: _108.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _108.QueryParamsRequest): _108.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _108.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.QueryParamsResponse;
                fromPartial(object: Partial<_108.QueryParamsResponse>): _108.QueryParamsResponse;
                fromAmino(object: _108.QueryParamsResponseAmino): _108.QueryParamsResponse;
                toAmino(message: _108.QueryParamsResponse): _108.QueryParamsResponseAmino;
                fromAminoMsg(object: _108.QueryParamsResponseAminoMsg): _108.QueryParamsResponse;
                toAminoMsg(message: _108.QueryParamsResponse): _108.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _108.QueryParamsResponseProtoMsg): _108.QueryParamsResponse;
                toProto(message: _108.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _108.QueryParamsResponse): _108.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _108.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.QuerySigningInfoRequest;
                fromPartial(object: Partial<_108.QuerySigningInfoRequest>): _108.QuerySigningInfoRequest;
                fromAmino(object: _108.QuerySigningInfoRequestAmino): _108.QuerySigningInfoRequest;
                toAmino(message: _108.QuerySigningInfoRequest): _108.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _108.QuerySigningInfoRequestAminoMsg): _108.QuerySigningInfoRequest;
                toAminoMsg(message: _108.QuerySigningInfoRequest): _108.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _108.QuerySigningInfoRequestProtoMsg): _108.QuerySigningInfoRequest;
                toProto(message: _108.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _108.QuerySigningInfoRequest): _108.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _108.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.QuerySigningInfoResponse;
                fromPartial(object: Partial<_108.QuerySigningInfoResponse>): _108.QuerySigningInfoResponse;
                fromAmino(object: _108.QuerySigningInfoResponseAmino): _108.QuerySigningInfoResponse;
                toAmino(message: _108.QuerySigningInfoResponse): _108.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _108.QuerySigningInfoResponseAminoMsg): _108.QuerySigningInfoResponse;
                toAminoMsg(message: _108.QuerySigningInfoResponse): _108.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _108.QuerySigningInfoResponseProtoMsg): _108.QuerySigningInfoResponse;
                toProto(message: _108.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _108.QuerySigningInfoResponse): _108.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _108.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.QuerySigningInfosRequest;
                fromPartial(object: Partial<_108.QuerySigningInfosRequest>): _108.QuerySigningInfosRequest;
                fromAmino(object: _108.QuerySigningInfosRequestAmino): _108.QuerySigningInfosRequest;
                toAmino(message: _108.QuerySigningInfosRequest): _108.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _108.QuerySigningInfosRequestAminoMsg): _108.QuerySigningInfosRequest;
                toAminoMsg(message: _108.QuerySigningInfosRequest): _108.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _108.QuerySigningInfosRequestProtoMsg): _108.QuerySigningInfosRequest;
                toProto(message: _108.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _108.QuerySigningInfosRequest): _108.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _108.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.QuerySigningInfosResponse;
                fromPartial(object: Partial<_108.QuerySigningInfosResponse>): _108.QuerySigningInfosResponse;
                fromAmino(object: _108.QuerySigningInfosResponseAmino): _108.QuerySigningInfosResponse;
                toAmino(message: _108.QuerySigningInfosResponse): _108.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _108.QuerySigningInfosResponseAminoMsg): _108.QuerySigningInfosResponse;
                toAminoMsg(message: _108.QuerySigningInfosResponse): _108.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _108.QuerySigningInfosResponseProtoMsg): _108.QuerySigningInfosResponse;
                toProto(message: _108.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _108.QuerySigningInfosResponse): _108.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _107.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.GenesisState;
                fromPartial(object: Partial<_107.GenesisState>): _107.GenesisState;
                fromAmino(object: _107.GenesisStateAmino): _107.GenesisState;
                toAmino(message: _107.GenesisState): _107.GenesisStateAmino;
                fromAminoMsg(object: _107.GenesisStateAminoMsg): _107.GenesisState;
                toAminoMsg(message: _107.GenesisState): _107.GenesisStateAminoMsg;
                fromProtoMsg(message: _107.GenesisStateProtoMsg): _107.GenesisState;
                toProto(message: _107.GenesisState): Uint8Array;
                toProtoMsg(message: _107.GenesisState): _107.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _107.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.SigningInfo;
                fromPartial(object: Partial<_107.SigningInfo>): _107.SigningInfo;
                fromAmino(object: _107.SigningInfoAmino): _107.SigningInfo;
                toAmino(message: _107.SigningInfo): _107.SigningInfoAmino;
                fromAminoMsg(object: _107.SigningInfoAminoMsg): _107.SigningInfo;
                toAminoMsg(message: _107.SigningInfo): _107.SigningInfoAminoMsg;
                fromProtoMsg(message: _107.SigningInfoProtoMsg): _107.SigningInfo;
                toProto(message: _107.SigningInfo): Uint8Array;
                toProtoMsg(message: _107.SigningInfo): _107.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _107.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.ValidatorMissedBlocks;
                fromPartial(object: Partial<_107.ValidatorMissedBlocks>): _107.ValidatorMissedBlocks;
                fromAmino(object: _107.ValidatorMissedBlocksAmino): _107.ValidatorMissedBlocks;
                toAmino(message: _107.ValidatorMissedBlocks): _107.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _107.ValidatorMissedBlocksAminoMsg): _107.ValidatorMissedBlocks;
                toAminoMsg(message: _107.ValidatorMissedBlocks): _107.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _107.ValidatorMissedBlocksProtoMsg): _107.ValidatorMissedBlocks;
                toProto(message: _107.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _107.ValidatorMissedBlocks): _107.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _107.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MissedBlock;
                fromPartial(object: Partial<_107.MissedBlock>): _107.MissedBlock;
                fromAmino(object: _107.MissedBlockAmino): _107.MissedBlock;
                toAmino(message: _107.MissedBlock): _107.MissedBlockAmino;
                fromAminoMsg(object: _107.MissedBlockAminoMsg): _107.MissedBlock;
                toAminoMsg(message: _107.MissedBlock): _107.MissedBlockAminoMsg;
                fromProtoMsg(message: _107.MissedBlockProtoMsg): _107.MissedBlock;
                toProto(message: _107.MissedBlock): Uint8Array;
                toProtoMsg(message: _107.MissedBlock): _107.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _111.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.Module;
                    fromPartial(object: Partial<_111.Module>): _111.Module;
                    fromAmino(object: _111.ModuleAmino): _111.Module;
                    toAmino(message: _111.Module): _111.ModuleAmino;
                    fromAminoMsg(object: _111.ModuleAminoMsg): _111.Module;
                    toAminoMsg(message: _111.Module): _111.ModuleAminoMsg;
                    fromProtoMsg(message: _111.ModuleProtoMsg): _111.Module;
                    toProto(message: _111.Module): Uint8Array;
                    toProtoMsg(message: _111.Module): _111.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _335.MsgClientImpl;
            QueryClientImpl: typeof _318.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _114.QueryValidatorsRequest): Promise<_114.QueryValidatorsResponse>;
                validator(request: _114.QueryValidatorRequest): Promise<_114.QueryValidatorResponse>;
                validatorDelegations(request: _114.QueryValidatorDelegationsRequest): Promise<_114.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _114.QueryValidatorUnbondingDelegationsRequest): Promise<_114.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _114.QueryDelegationRequest): Promise<_114.QueryDelegationResponse>;
                unbondingDelegation(request: _114.QueryUnbondingDelegationRequest): Promise<_114.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _114.QueryDelegatorDelegationsRequest): Promise<_114.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _114.QueryDelegatorUnbondingDelegationsRequest): Promise<_114.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _114.QueryRedelegationsRequest): Promise<_114.QueryRedelegationsResponse>;
                delegatorValidators(request: _114.QueryDelegatorValidatorsRequest): Promise<_114.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _114.QueryDelegatorValidatorRequest): Promise<_114.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _114.QueryHistoricalInfoRequest): Promise<_114.QueryHistoricalInfoResponse>;
                pool(request?: _114.QueryPoolRequest): Promise<_114.QueryPoolResponse>;
                params(request?: _114.QueryParamsRequest): Promise<_114.QueryParamsResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _116.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _116.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _116.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _116.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _116.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _116.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _116.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _116.MsgCreateValidator): {
                        typeUrl: string;
                        value: _116.MsgCreateValidator;
                    };
                    editValidator(value: _116.MsgEditValidator): {
                        typeUrl: string;
                        value: _116.MsgEditValidator;
                    };
                    delegate(value: _116.MsgDelegate): {
                        typeUrl: string;
                        value: _116.MsgDelegate;
                    };
                    beginRedelegate(value: _116.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _116.MsgBeginRedelegate;
                    };
                    undelegate(value: _116.MsgUndelegate): {
                        typeUrl: string;
                        value: _116.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _116.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _116.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _116.MsgUpdateParams): {
                        typeUrl: string;
                        value: _116.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _116.MsgCreateValidator): {
                        typeUrl: string;
                        value: _116.MsgCreateValidator;
                    };
                    editValidator(value: _116.MsgEditValidator): {
                        typeUrl: string;
                        value: _116.MsgEditValidator;
                    };
                    delegate(value: _116.MsgDelegate): {
                        typeUrl: string;
                        value: _116.MsgDelegate;
                    };
                    beginRedelegate(value: _116.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _116.MsgBeginRedelegate;
                    };
                    undelegate(value: _116.MsgUndelegate): {
                        typeUrl: string;
                        value: _116.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _116.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _116.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _116.MsgUpdateParams): {
                        typeUrl: string;
                        value: _116.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _116.MsgCreateValidator) => _116.MsgCreateValidatorAmino;
                    fromAmino: (object: _116.MsgCreateValidatorAmino) => _116.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _116.MsgEditValidator) => _116.MsgEditValidatorAmino;
                    fromAmino: (object: _116.MsgEditValidatorAmino) => _116.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _116.MsgDelegate) => _116.MsgDelegateAmino;
                    fromAmino: (object: _116.MsgDelegateAmino) => _116.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _116.MsgBeginRedelegate) => _116.MsgBeginRedelegateAmino;
                    fromAmino: (object: _116.MsgBeginRedelegateAmino) => _116.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _116.MsgUndelegate) => _116.MsgUndelegateAmino;
                    fromAmino: (object: _116.MsgUndelegateAmino) => _116.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _116.MsgCancelUnbondingDelegation) => _116.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _116.MsgCancelUnbondingDelegationAmino) => _116.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _116.MsgUpdateParams) => _116.MsgUpdateParamsAmino;
                    fromAmino: (object: _116.MsgUpdateParamsAmino) => _116.MsgUpdateParams;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _116.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgCreateValidator;
                fromPartial(object: Partial<_116.MsgCreateValidator>): _116.MsgCreateValidator;
                fromAmino(object: _116.MsgCreateValidatorAmino): _116.MsgCreateValidator;
                toAmino(message: _116.MsgCreateValidator): _116.MsgCreateValidatorAmino;
                fromAminoMsg(object: _116.MsgCreateValidatorAminoMsg): _116.MsgCreateValidator;
                toAminoMsg(message: _116.MsgCreateValidator): _116.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _116.MsgCreateValidatorProtoMsg): _116.MsgCreateValidator;
                toProto(message: _116.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _116.MsgCreateValidator): _116.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _116.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_116.MsgCreateValidatorResponse>): _116.MsgCreateValidatorResponse;
                fromAmino(_: _116.MsgCreateValidatorResponseAmino): _116.MsgCreateValidatorResponse;
                toAmino(_: _116.MsgCreateValidatorResponse): _116.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _116.MsgCreateValidatorResponseAminoMsg): _116.MsgCreateValidatorResponse;
                toAminoMsg(message: _116.MsgCreateValidatorResponse): _116.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _116.MsgCreateValidatorResponseProtoMsg): _116.MsgCreateValidatorResponse;
                toProto(message: _116.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _116.MsgCreateValidatorResponse): _116.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _116.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgEditValidator;
                fromPartial(object: Partial<_116.MsgEditValidator>): _116.MsgEditValidator;
                fromAmino(object: _116.MsgEditValidatorAmino): _116.MsgEditValidator;
                toAmino(message: _116.MsgEditValidator): _116.MsgEditValidatorAmino;
                fromAminoMsg(object: _116.MsgEditValidatorAminoMsg): _116.MsgEditValidator;
                toAminoMsg(message: _116.MsgEditValidator): _116.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _116.MsgEditValidatorProtoMsg): _116.MsgEditValidator;
                toProto(message: _116.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _116.MsgEditValidator): _116.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _116.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgEditValidatorResponse;
                fromPartial(_: Partial<_116.MsgEditValidatorResponse>): _116.MsgEditValidatorResponse;
                fromAmino(_: _116.MsgEditValidatorResponseAmino): _116.MsgEditValidatorResponse;
                toAmino(_: _116.MsgEditValidatorResponse): _116.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _116.MsgEditValidatorResponseAminoMsg): _116.MsgEditValidatorResponse;
                toAminoMsg(message: _116.MsgEditValidatorResponse): _116.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _116.MsgEditValidatorResponseProtoMsg): _116.MsgEditValidatorResponse;
                toProto(message: _116.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _116.MsgEditValidatorResponse): _116.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _116.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgDelegate;
                fromPartial(object: Partial<_116.MsgDelegate>): _116.MsgDelegate;
                fromAmino(object: _116.MsgDelegateAmino): _116.MsgDelegate;
                toAmino(message: _116.MsgDelegate): _116.MsgDelegateAmino;
                fromAminoMsg(object: _116.MsgDelegateAminoMsg): _116.MsgDelegate;
                toAminoMsg(message: _116.MsgDelegate): _116.MsgDelegateAminoMsg;
                fromProtoMsg(message: _116.MsgDelegateProtoMsg): _116.MsgDelegate;
                toProto(message: _116.MsgDelegate): Uint8Array;
                toProtoMsg(message: _116.MsgDelegate): _116.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _116.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgDelegateResponse;
                fromPartial(_: Partial<_116.MsgDelegateResponse>): _116.MsgDelegateResponse;
                fromAmino(_: _116.MsgDelegateResponseAmino): _116.MsgDelegateResponse;
                toAmino(_: _116.MsgDelegateResponse): _116.MsgDelegateResponseAmino;
                fromAminoMsg(object: _116.MsgDelegateResponseAminoMsg): _116.MsgDelegateResponse;
                toAminoMsg(message: _116.MsgDelegateResponse): _116.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _116.MsgDelegateResponseProtoMsg): _116.MsgDelegateResponse;
                toProto(message: _116.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _116.MsgDelegateResponse): _116.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _116.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgBeginRedelegate;
                fromPartial(object: Partial<_116.MsgBeginRedelegate>): _116.MsgBeginRedelegate;
                fromAmino(object: _116.MsgBeginRedelegateAmino): _116.MsgBeginRedelegate;
                toAmino(message: _116.MsgBeginRedelegate): _116.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _116.MsgBeginRedelegateAminoMsg): _116.MsgBeginRedelegate;
                toAminoMsg(message: _116.MsgBeginRedelegate): _116.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _116.MsgBeginRedelegateProtoMsg): _116.MsgBeginRedelegate;
                toProto(message: _116.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _116.MsgBeginRedelegate): _116.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _116.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_116.MsgBeginRedelegateResponse>): _116.MsgBeginRedelegateResponse;
                fromAmino(object: _116.MsgBeginRedelegateResponseAmino): _116.MsgBeginRedelegateResponse;
                toAmino(message: _116.MsgBeginRedelegateResponse): _116.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _116.MsgBeginRedelegateResponseAminoMsg): _116.MsgBeginRedelegateResponse;
                toAminoMsg(message: _116.MsgBeginRedelegateResponse): _116.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _116.MsgBeginRedelegateResponseProtoMsg): _116.MsgBeginRedelegateResponse;
                toProto(message: _116.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _116.MsgBeginRedelegateResponse): _116.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _116.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgUndelegate;
                fromPartial(object: Partial<_116.MsgUndelegate>): _116.MsgUndelegate;
                fromAmino(object: _116.MsgUndelegateAmino): _116.MsgUndelegate;
                toAmino(message: _116.MsgUndelegate): _116.MsgUndelegateAmino;
                fromAminoMsg(object: _116.MsgUndelegateAminoMsg): _116.MsgUndelegate;
                toAminoMsg(message: _116.MsgUndelegate): _116.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _116.MsgUndelegateProtoMsg): _116.MsgUndelegate;
                toProto(message: _116.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _116.MsgUndelegate): _116.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _116.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgUndelegateResponse;
                fromPartial(object: Partial<_116.MsgUndelegateResponse>): _116.MsgUndelegateResponse;
                fromAmino(object: _116.MsgUndelegateResponseAmino): _116.MsgUndelegateResponse;
                toAmino(message: _116.MsgUndelegateResponse): _116.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _116.MsgUndelegateResponseAminoMsg): _116.MsgUndelegateResponse;
                toAminoMsg(message: _116.MsgUndelegateResponse): _116.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _116.MsgUndelegateResponseProtoMsg): _116.MsgUndelegateResponse;
                toProto(message: _116.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _116.MsgUndelegateResponse): _116.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _116.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_116.MsgCancelUnbondingDelegation>): _116.MsgCancelUnbondingDelegation;
                fromAmino(object: _116.MsgCancelUnbondingDelegationAmino): _116.MsgCancelUnbondingDelegation;
                toAmino(message: _116.MsgCancelUnbondingDelegation): _116.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _116.MsgCancelUnbondingDelegationAminoMsg): _116.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _116.MsgCancelUnbondingDelegation): _116.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _116.MsgCancelUnbondingDelegationProtoMsg): _116.MsgCancelUnbondingDelegation;
                toProto(message: _116.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _116.MsgCancelUnbondingDelegation): _116.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _116.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_116.MsgCancelUnbondingDelegationResponse>): _116.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _116.MsgCancelUnbondingDelegationResponseAmino): _116.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _116.MsgCancelUnbondingDelegationResponse): _116.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _116.MsgCancelUnbondingDelegationResponseAminoMsg): _116.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _116.MsgCancelUnbondingDelegationResponse): _116.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _116.MsgCancelUnbondingDelegationResponseProtoMsg): _116.MsgCancelUnbondingDelegationResponse;
                toProto(message: _116.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _116.MsgCancelUnbondingDelegationResponse): _116.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _116.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgUpdateParams;
                fromPartial(object: Partial<_116.MsgUpdateParams>): _116.MsgUpdateParams;
                fromAmino(object: _116.MsgUpdateParamsAmino): _116.MsgUpdateParams;
                toAmino(message: _116.MsgUpdateParams): _116.MsgUpdateParamsAmino;
                fromAminoMsg(object: _116.MsgUpdateParamsAminoMsg): _116.MsgUpdateParams;
                toAminoMsg(message: _116.MsgUpdateParams): _116.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _116.MsgUpdateParamsProtoMsg): _116.MsgUpdateParams;
                toProto(message: _116.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _116.MsgUpdateParams): _116.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _116.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_116.MsgUpdateParamsResponse>): _116.MsgUpdateParamsResponse;
                fromAmino(_: _116.MsgUpdateParamsResponseAmino): _116.MsgUpdateParamsResponse;
                toAmino(_: _116.MsgUpdateParamsResponse): _116.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _116.MsgUpdateParamsResponseAminoMsg): _116.MsgUpdateParamsResponse;
                toAminoMsg(message: _116.MsgUpdateParamsResponse): _116.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _116.MsgUpdateParamsResponseProtoMsg): _116.MsgUpdateParamsResponse;
                toProto(message: _116.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _116.MsgUpdateParamsResponse): _116.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _115.BondStatus;
            bondStatusToJSON(object: _115.BondStatus): string;
            infractionFromJSON(object: any): _115.Infraction;
            infractionToJSON(object: _115.Infraction): string;
            BondStatus: typeof _115.BondStatus;
            BondStatusSDKType: typeof _115.BondStatus;
            BondStatusAmino: typeof _115.BondStatus;
            Infraction: typeof _115.Infraction;
            InfractionSDKType: typeof _115.Infraction;
            InfractionAmino: typeof _115.Infraction;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _115.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.HistoricalInfo;
                fromPartial(object: Partial<_115.HistoricalInfo>): _115.HistoricalInfo;
                fromAmino(object: _115.HistoricalInfoAmino): _115.HistoricalInfo;
                toAmino(message: _115.HistoricalInfo): _115.HistoricalInfoAmino;
                fromAminoMsg(object: _115.HistoricalInfoAminoMsg): _115.HistoricalInfo;
                toAminoMsg(message: _115.HistoricalInfo): _115.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _115.HistoricalInfoProtoMsg): _115.HistoricalInfo;
                toProto(message: _115.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _115.HistoricalInfo): _115.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _115.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.CommissionRates;
                fromPartial(object: Partial<_115.CommissionRates>): _115.CommissionRates;
                fromAmino(object: _115.CommissionRatesAmino): _115.CommissionRates;
                toAmino(message: _115.CommissionRates): _115.CommissionRatesAmino;
                fromAminoMsg(object: _115.CommissionRatesAminoMsg): _115.CommissionRates;
                toAminoMsg(message: _115.CommissionRates): _115.CommissionRatesAminoMsg;
                fromProtoMsg(message: _115.CommissionRatesProtoMsg): _115.CommissionRates;
                toProto(message: _115.CommissionRates): Uint8Array;
                toProtoMsg(message: _115.CommissionRates): _115.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _115.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.Commission;
                fromPartial(object: Partial<_115.Commission>): _115.Commission;
                fromAmino(object: _115.CommissionAmino): _115.Commission;
                toAmino(message: _115.Commission): _115.CommissionAmino;
                fromAminoMsg(object: _115.CommissionAminoMsg): _115.Commission;
                toAminoMsg(message: _115.Commission): _115.CommissionAminoMsg;
                fromProtoMsg(message: _115.CommissionProtoMsg): _115.Commission;
                toProto(message: _115.Commission): Uint8Array;
                toProtoMsg(message: _115.Commission): _115.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _115.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.Description;
                fromPartial(object: Partial<_115.Description>): _115.Description;
                fromAmino(object: _115.DescriptionAmino): _115.Description;
                toAmino(message: _115.Description): _115.DescriptionAmino;
                fromAminoMsg(object: _115.DescriptionAminoMsg): _115.Description;
                toAminoMsg(message: _115.Description): _115.DescriptionAminoMsg;
                fromProtoMsg(message: _115.DescriptionProtoMsg): _115.Description;
                toProto(message: _115.Description): Uint8Array;
                toProtoMsg(message: _115.Description): _115.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _115.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.Validator;
                fromPartial(object: Partial<_115.Validator>): _115.Validator;
                fromAmino(object: _115.ValidatorAmino): _115.Validator;
                toAmino(message: _115.Validator): _115.ValidatorAmino;
                fromAminoMsg(object: _115.ValidatorAminoMsg): _115.Validator;
                toAminoMsg(message: _115.Validator): _115.ValidatorAminoMsg;
                fromProtoMsg(message: _115.ValidatorProtoMsg): _115.Validator;
                toProto(message: _115.Validator): Uint8Array;
                toProtoMsg(message: _115.Validator): _115.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _115.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.ValAddresses;
                fromPartial(object: Partial<_115.ValAddresses>): _115.ValAddresses;
                fromAmino(object: _115.ValAddressesAmino): _115.ValAddresses;
                toAmino(message: _115.ValAddresses): _115.ValAddressesAmino;
                fromAminoMsg(object: _115.ValAddressesAminoMsg): _115.ValAddresses;
                toAminoMsg(message: _115.ValAddresses): _115.ValAddressesAminoMsg;
                fromProtoMsg(message: _115.ValAddressesProtoMsg): _115.ValAddresses;
                toProto(message: _115.ValAddresses): Uint8Array;
                toProtoMsg(message: _115.ValAddresses): _115.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _115.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.DVPair;
                fromPartial(object: Partial<_115.DVPair>): _115.DVPair;
                fromAmino(object: _115.DVPairAmino): _115.DVPair;
                toAmino(message: _115.DVPair): _115.DVPairAmino;
                fromAminoMsg(object: _115.DVPairAminoMsg): _115.DVPair;
                toAminoMsg(message: _115.DVPair): _115.DVPairAminoMsg;
                fromProtoMsg(message: _115.DVPairProtoMsg): _115.DVPair;
                toProto(message: _115.DVPair): Uint8Array;
                toProtoMsg(message: _115.DVPair): _115.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _115.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.DVPairs;
                fromPartial(object: Partial<_115.DVPairs>): _115.DVPairs;
                fromAmino(object: _115.DVPairsAmino): _115.DVPairs;
                toAmino(message: _115.DVPairs): _115.DVPairsAmino;
                fromAminoMsg(object: _115.DVPairsAminoMsg): _115.DVPairs;
                toAminoMsg(message: _115.DVPairs): _115.DVPairsAminoMsg;
                fromProtoMsg(message: _115.DVPairsProtoMsg): _115.DVPairs;
                toProto(message: _115.DVPairs): Uint8Array;
                toProtoMsg(message: _115.DVPairs): _115.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _115.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.DVVTriplet;
                fromPartial(object: Partial<_115.DVVTriplet>): _115.DVVTriplet;
                fromAmino(object: _115.DVVTripletAmino): _115.DVVTriplet;
                toAmino(message: _115.DVVTriplet): _115.DVVTripletAmino;
                fromAminoMsg(object: _115.DVVTripletAminoMsg): _115.DVVTriplet;
                toAminoMsg(message: _115.DVVTriplet): _115.DVVTripletAminoMsg;
                fromProtoMsg(message: _115.DVVTripletProtoMsg): _115.DVVTriplet;
                toProto(message: _115.DVVTriplet): Uint8Array;
                toProtoMsg(message: _115.DVVTriplet): _115.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _115.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.DVVTriplets;
                fromPartial(object: Partial<_115.DVVTriplets>): _115.DVVTriplets;
                fromAmino(object: _115.DVVTripletsAmino): _115.DVVTriplets;
                toAmino(message: _115.DVVTriplets): _115.DVVTripletsAmino;
                fromAminoMsg(object: _115.DVVTripletsAminoMsg): _115.DVVTriplets;
                toAminoMsg(message: _115.DVVTriplets): _115.DVVTripletsAminoMsg;
                fromProtoMsg(message: _115.DVVTripletsProtoMsg): _115.DVVTriplets;
                toProto(message: _115.DVVTriplets): Uint8Array;
                toProtoMsg(message: _115.DVVTriplets): _115.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _115.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.Delegation;
                fromPartial(object: Partial<_115.Delegation>): _115.Delegation;
                fromAmino(object: _115.DelegationAmino): _115.Delegation;
                toAmino(message: _115.Delegation): _115.DelegationAmino;
                fromAminoMsg(object: _115.DelegationAminoMsg): _115.Delegation;
                toAminoMsg(message: _115.Delegation): _115.DelegationAminoMsg;
                fromProtoMsg(message: _115.DelegationProtoMsg): _115.Delegation;
                toProto(message: _115.Delegation): Uint8Array;
                toProtoMsg(message: _115.Delegation): _115.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _115.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.UnbondingDelegation;
                fromPartial(object: Partial<_115.UnbondingDelegation>): _115.UnbondingDelegation;
                fromAmino(object: _115.UnbondingDelegationAmino): _115.UnbondingDelegation;
                toAmino(message: _115.UnbondingDelegation): _115.UnbondingDelegationAmino;
                fromAminoMsg(object: _115.UnbondingDelegationAminoMsg): _115.UnbondingDelegation;
                toAminoMsg(message: _115.UnbondingDelegation): _115.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _115.UnbondingDelegationProtoMsg): _115.UnbondingDelegation;
                toProto(message: _115.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _115.UnbondingDelegation): _115.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _115.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.UnbondingDelegationEntry;
                fromPartial(object: Partial<_115.UnbondingDelegationEntry>): _115.UnbondingDelegationEntry;
                fromAmino(object: _115.UnbondingDelegationEntryAmino): _115.UnbondingDelegationEntry;
                toAmino(message: _115.UnbondingDelegationEntry): _115.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _115.UnbondingDelegationEntryAminoMsg): _115.UnbondingDelegationEntry;
                toAminoMsg(message: _115.UnbondingDelegationEntry): _115.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _115.UnbondingDelegationEntryProtoMsg): _115.UnbondingDelegationEntry;
                toProto(message: _115.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _115.UnbondingDelegationEntry): _115.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _115.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.RedelegationEntry;
                fromPartial(object: Partial<_115.RedelegationEntry>): _115.RedelegationEntry;
                fromAmino(object: _115.RedelegationEntryAmino): _115.RedelegationEntry;
                toAmino(message: _115.RedelegationEntry): _115.RedelegationEntryAmino;
                fromAminoMsg(object: _115.RedelegationEntryAminoMsg): _115.RedelegationEntry;
                toAminoMsg(message: _115.RedelegationEntry): _115.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _115.RedelegationEntryProtoMsg): _115.RedelegationEntry;
                toProto(message: _115.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _115.RedelegationEntry): _115.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _115.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.Redelegation;
                fromPartial(object: Partial<_115.Redelegation>): _115.Redelegation;
                fromAmino(object: _115.RedelegationAmino): _115.Redelegation;
                toAmino(message: _115.Redelegation): _115.RedelegationAmino;
                fromAminoMsg(object: _115.RedelegationAminoMsg): _115.Redelegation;
                toAminoMsg(message: _115.Redelegation): _115.RedelegationAminoMsg;
                fromProtoMsg(message: _115.RedelegationProtoMsg): _115.Redelegation;
                toProto(message: _115.Redelegation): Uint8Array;
                toProtoMsg(message: _115.Redelegation): _115.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _115.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.Params;
                fromPartial(object: Partial<_115.Params>): _115.Params;
                fromAmino(object: _115.ParamsAmino): _115.Params;
                toAmino(message: _115.Params): _115.ParamsAmino;
                fromAminoMsg(object: _115.ParamsAminoMsg): _115.Params;
                toAminoMsg(message: _115.Params): _115.ParamsAminoMsg;
                fromProtoMsg(message: _115.ParamsProtoMsg): _115.Params;
                toProto(message: _115.Params): Uint8Array;
                toProtoMsg(message: _115.Params): _115.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _115.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.DelegationResponse;
                fromPartial(object: Partial<_115.DelegationResponse>): _115.DelegationResponse;
                fromAmino(object: _115.DelegationResponseAmino): _115.DelegationResponse;
                toAmino(message: _115.DelegationResponse): _115.DelegationResponseAmino;
                fromAminoMsg(object: _115.DelegationResponseAminoMsg): _115.DelegationResponse;
                toAminoMsg(message: _115.DelegationResponse): _115.DelegationResponseAminoMsg;
                fromProtoMsg(message: _115.DelegationResponseProtoMsg): _115.DelegationResponse;
                toProto(message: _115.DelegationResponse): Uint8Array;
                toProtoMsg(message: _115.DelegationResponse): _115.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _115.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.RedelegationEntryResponse;
                fromPartial(object: Partial<_115.RedelegationEntryResponse>): _115.RedelegationEntryResponse;
                fromAmino(object: _115.RedelegationEntryResponseAmino): _115.RedelegationEntryResponse;
                toAmino(message: _115.RedelegationEntryResponse): _115.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _115.RedelegationEntryResponseAminoMsg): _115.RedelegationEntryResponse;
                toAminoMsg(message: _115.RedelegationEntryResponse): _115.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _115.RedelegationEntryResponseProtoMsg): _115.RedelegationEntryResponse;
                toProto(message: _115.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _115.RedelegationEntryResponse): _115.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _115.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.RedelegationResponse;
                fromPartial(object: Partial<_115.RedelegationResponse>): _115.RedelegationResponse;
                fromAmino(object: _115.RedelegationResponseAmino): _115.RedelegationResponse;
                toAmino(message: _115.RedelegationResponse): _115.RedelegationResponseAmino;
                fromAminoMsg(object: _115.RedelegationResponseAminoMsg): _115.RedelegationResponse;
                toAminoMsg(message: _115.RedelegationResponse): _115.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _115.RedelegationResponseProtoMsg): _115.RedelegationResponse;
                toProto(message: _115.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _115.RedelegationResponse): _115.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _115.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.Pool;
                fromPartial(object: Partial<_115.Pool>): _115.Pool;
                fromAmino(object: _115.PoolAmino): _115.Pool;
                toAmino(message: _115.Pool): _115.PoolAmino;
                fromAminoMsg(object: _115.PoolAminoMsg): _115.Pool;
                toAminoMsg(message: _115.Pool): _115.PoolAminoMsg;
                fromProtoMsg(message: _115.PoolProtoMsg): _115.Pool;
                toProto(message: _115.Pool): Uint8Array;
                toProtoMsg(message: _115.Pool): _115.PoolProtoMsg;
            };
            ValidatorUpdates: {
                typeUrl: string;
                encode(message: _115.ValidatorUpdates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.ValidatorUpdates;
                fromPartial(object: Partial<_115.ValidatorUpdates>): _115.ValidatorUpdates;
                fromAmino(object: _115.ValidatorUpdatesAmino): _115.ValidatorUpdates;
                toAmino(message: _115.ValidatorUpdates): _115.ValidatorUpdatesAmino;
                fromAminoMsg(object: _115.ValidatorUpdatesAminoMsg): _115.ValidatorUpdates;
                toAminoMsg(message: _115.ValidatorUpdates): _115.ValidatorUpdatesAminoMsg;
                fromProtoMsg(message: _115.ValidatorUpdatesProtoMsg): _115.ValidatorUpdates;
                toProto(message: _115.ValidatorUpdates): Uint8Array;
                toProtoMsg(message: _115.ValidatorUpdates): _115.ValidatorUpdatesProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _114.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryValidatorsRequest;
                fromPartial(object: Partial<_114.QueryValidatorsRequest>): _114.QueryValidatorsRequest;
                fromAmino(object: _114.QueryValidatorsRequestAmino): _114.QueryValidatorsRequest;
                toAmino(message: _114.QueryValidatorsRequest): _114.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _114.QueryValidatorsRequestAminoMsg): _114.QueryValidatorsRequest;
                toAminoMsg(message: _114.QueryValidatorsRequest): _114.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _114.QueryValidatorsRequestProtoMsg): _114.QueryValidatorsRequest;
                toProto(message: _114.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _114.QueryValidatorsRequest): _114.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _114.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryValidatorsResponse;
                fromPartial(object: Partial<_114.QueryValidatorsResponse>): _114.QueryValidatorsResponse;
                fromAmino(object: _114.QueryValidatorsResponseAmino): _114.QueryValidatorsResponse;
                toAmino(message: _114.QueryValidatorsResponse): _114.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _114.QueryValidatorsResponseAminoMsg): _114.QueryValidatorsResponse;
                toAminoMsg(message: _114.QueryValidatorsResponse): _114.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _114.QueryValidatorsResponseProtoMsg): _114.QueryValidatorsResponse;
                toProto(message: _114.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _114.QueryValidatorsResponse): _114.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _114.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryValidatorRequest;
                fromPartial(object: Partial<_114.QueryValidatorRequest>): _114.QueryValidatorRequest;
                fromAmino(object: _114.QueryValidatorRequestAmino): _114.QueryValidatorRequest;
                toAmino(message: _114.QueryValidatorRequest): _114.QueryValidatorRequestAmino;
                fromAminoMsg(object: _114.QueryValidatorRequestAminoMsg): _114.QueryValidatorRequest;
                toAminoMsg(message: _114.QueryValidatorRequest): _114.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _114.QueryValidatorRequestProtoMsg): _114.QueryValidatorRequest;
                toProto(message: _114.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _114.QueryValidatorRequest): _114.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _114.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryValidatorResponse;
                fromPartial(object: Partial<_114.QueryValidatorResponse>): _114.QueryValidatorResponse;
                fromAmino(object: _114.QueryValidatorResponseAmino): _114.QueryValidatorResponse;
                toAmino(message: _114.QueryValidatorResponse): _114.QueryValidatorResponseAmino;
                fromAminoMsg(object: _114.QueryValidatorResponseAminoMsg): _114.QueryValidatorResponse;
                toAminoMsg(message: _114.QueryValidatorResponse): _114.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _114.QueryValidatorResponseProtoMsg): _114.QueryValidatorResponse;
                toProto(message: _114.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _114.QueryValidatorResponse): _114.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _114.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_114.QueryValidatorDelegationsRequest>): _114.QueryValidatorDelegationsRequest;
                fromAmino(object: _114.QueryValidatorDelegationsRequestAmino): _114.QueryValidatorDelegationsRequest;
                toAmino(message: _114.QueryValidatorDelegationsRequest): _114.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _114.QueryValidatorDelegationsRequestAminoMsg): _114.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _114.QueryValidatorDelegationsRequest): _114.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _114.QueryValidatorDelegationsRequestProtoMsg): _114.QueryValidatorDelegationsRequest;
                toProto(message: _114.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _114.QueryValidatorDelegationsRequest): _114.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _114.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_114.QueryValidatorDelegationsResponse>): _114.QueryValidatorDelegationsResponse;
                fromAmino(object: _114.QueryValidatorDelegationsResponseAmino): _114.QueryValidatorDelegationsResponse;
                toAmino(message: _114.QueryValidatorDelegationsResponse): _114.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _114.QueryValidatorDelegationsResponseAminoMsg): _114.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _114.QueryValidatorDelegationsResponse): _114.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _114.QueryValidatorDelegationsResponseProtoMsg): _114.QueryValidatorDelegationsResponse;
                toProto(message: _114.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _114.QueryValidatorDelegationsResponse): _114.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _114.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_114.QueryValidatorUnbondingDelegationsRequest>): _114.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _114.QueryValidatorUnbondingDelegationsRequestAmino): _114.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _114.QueryValidatorUnbondingDelegationsRequest): _114.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _114.QueryValidatorUnbondingDelegationsRequestAminoMsg): _114.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _114.QueryValidatorUnbondingDelegationsRequest): _114.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _114.QueryValidatorUnbondingDelegationsRequestProtoMsg): _114.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _114.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _114.QueryValidatorUnbondingDelegationsRequest): _114.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _114.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_114.QueryValidatorUnbondingDelegationsResponse>): _114.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _114.QueryValidatorUnbondingDelegationsResponseAmino): _114.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _114.QueryValidatorUnbondingDelegationsResponse): _114.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _114.QueryValidatorUnbondingDelegationsResponseAminoMsg): _114.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _114.QueryValidatorUnbondingDelegationsResponse): _114.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _114.QueryValidatorUnbondingDelegationsResponseProtoMsg): _114.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _114.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _114.QueryValidatorUnbondingDelegationsResponse): _114.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _114.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryDelegationRequest;
                fromPartial(object: Partial<_114.QueryDelegationRequest>): _114.QueryDelegationRequest;
                fromAmino(object: _114.QueryDelegationRequestAmino): _114.QueryDelegationRequest;
                toAmino(message: _114.QueryDelegationRequest): _114.QueryDelegationRequestAmino;
                fromAminoMsg(object: _114.QueryDelegationRequestAminoMsg): _114.QueryDelegationRequest;
                toAminoMsg(message: _114.QueryDelegationRequest): _114.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _114.QueryDelegationRequestProtoMsg): _114.QueryDelegationRequest;
                toProto(message: _114.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _114.QueryDelegationRequest): _114.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _114.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryDelegationResponse;
                fromPartial(object: Partial<_114.QueryDelegationResponse>): _114.QueryDelegationResponse;
                fromAmino(object: _114.QueryDelegationResponseAmino): _114.QueryDelegationResponse;
                toAmino(message: _114.QueryDelegationResponse): _114.QueryDelegationResponseAmino;
                fromAminoMsg(object: _114.QueryDelegationResponseAminoMsg): _114.QueryDelegationResponse;
                toAminoMsg(message: _114.QueryDelegationResponse): _114.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _114.QueryDelegationResponseProtoMsg): _114.QueryDelegationResponse;
                toProto(message: _114.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _114.QueryDelegationResponse): _114.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _114.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_114.QueryUnbondingDelegationRequest>): _114.QueryUnbondingDelegationRequest;
                fromAmino(object: _114.QueryUnbondingDelegationRequestAmino): _114.QueryUnbondingDelegationRequest;
                toAmino(message: _114.QueryUnbondingDelegationRequest): _114.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _114.QueryUnbondingDelegationRequestAminoMsg): _114.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _114.QueryUnbondingDelegationRequest): _114.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _114.QueryUnbondingDelegationRequestProtoMsg): _114.QueryUnbondingDelegationRequest;
                toProto(message: _114.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _114.QueryUnbondingDelegationRequest): _114.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _114.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_114.QueryUnbondingDelegationResponse>): _114.QueryUnbondingDelegationResponse;
                fromAmino(object: _114.QueryUnbondingDelegationResponseAmino): _114.QueryUnbondingDelegationResponse;
                toAmino(message: _114.QueryUnbondingDelegationResponse): _114.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _114.QueryUnbondingDelegationResponseAminoMsg): _114.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _114.QueryUnbondingDelegationResponse): _114.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _114.QueryUnbondingDelegationResponseProtoMsg): _114.QueryUnbondingDelegationResponse;
                toProto(message: _114.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _114.QueryUnbondingDelegationResponse): _114.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _114.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_114.QueryDelegatorDelegationsRequest>): _114.QueryDelegatorDelegationsRequest;
                fromAmino(object: _114.QueryDelegatorDelegationsRequestAmino): _114.QueryDelegatorDelegationsRequest;
                toAmino(message: _114.QueryDelegatorDelegationsRequest): _114.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _114.QueryDelegatorDelegationsRequestAminoMsg): _114.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _114.QueryDelegatorDelegationsRequest): _114.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _114.QueryDelegatorDelegationsRequestProtoMsg): _114.QueryDelegatorDelegationsRequest;
                toProto(message: _114.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _114.QueryDelegatorDelegationsRequest): _114.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _114.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_114.QueryDelegatorDelegationsResponse>): _114.QueryDelegatorDelegationsResponse;
                fromAmino(object: _114.QueryDelegatorDelegationsResponseAmino): _114.QueryDelegatorDelegationsResponse;
                toAmino(message: _114.QueryDelegatorDelegationsResponse): _114.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _114.QueryDelegatorDelegationsResponseAminoMsg): _114.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _114.QueryDelegatorDelegationsResponse): _114.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _114.QueryDelegatorDelegationsResponseProtoMsg): _114.QueryDelegatorDelegationsResponse;
                toProto(message: _114.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _114.QueryDelegatorDelegationsResponse): _114.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _114.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_114.QueryDelegatorUnbondingDelegationsRequest>): _114.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _114.QueryDelegatorUnbondingDelegationsRequestAmino): _114.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _114.QueryDelegatorUnbondingDelegationsRequest): _114.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _114.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _114.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _114.QueryDelegatorUnbondingDelegationsRequest): _114.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _114.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _114.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _114.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _114.QueryDelegatorUnbondingDelegationsRequest): _114.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _114.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_114.QueryDelegatorUnbondingDelegationsResponse>): _114.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _114.QueryDelegatorUnbondingDelegationsResponseAmino): _114.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _114.QueryDelegatorUnbondingDelegationsResponse): _114.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _114.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _114.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _114.QueryDelegatorUnbondingDelegationsResponse): _114.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _114.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _114.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _114.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _114.QueryDelegatorUnbondingDelegationsResponse): _114.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _114.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryRedelegationsRequest;
                fromPartial(object: Partial<_114.QueryRedelegationsRequest>): _114.QueryRedelegationsRequest;
                fromAmino(object: _114.QueryRedelegationsRequestAmino): _114.QueryRedelegationsRequest;
                toAmino(message: _114.QueryRedelegationsRequest): _114.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _114.QueryRedelegationsRequestAminoMsg): _114.QueryRedelegationsRequest;
                toAminoMsg(message: _114.QueryRedelegationsRequest): _114.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _114.QueryRedelegationsRequestProtoMsg): _114.QueryRedelegationsRequest;
                toProto(message: _114.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _114.QueryRedelegationsRequest): _114.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _114.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryRedelegationsResponse;
                fromPartial(object: Partial<_114.QueryRedelegationsResponse>): _114.QueryRedelegationsResponse;
                fromAmino(object: _114.QueryRedelegationsResponseAmino): _114.QueryRedelegationsResponse;
                toAmino(message: _114.QueryRedelegationsResponse): _114.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _114.QueryRedelegationsResponseAminoMsg): _114.QueryRedelegationsResponse;
                toAminoMsg(message: _114.QueryRedelegationsResponse): _114.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _114.QueryRedelegationsResponseProtoMsg): _114.QueryRedelegationsResponse;
                toProto(message: _114.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _114.QueryRedelegationsResponse): _114.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _114.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_114.QueryDelegatorValidatorsRequest>): _114.QueryDelegatorValidatorsRequest;
                fromAmino(object: _114.QueryDelegatorValidatorsRequestAmino): _114.QueryDelegatorValidatorsRequest;
                toAmino(message: _114.QueryDelegatorValidatorsRequest): _114.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _114.QueryDelegatorValidatorsRequestAminoMsg): _114.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _114.QueryDelegatorValidatorsRequest): _114.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _114.QueryDelegatorValidatorsRequestProtoMsg): _114.QueryDelegatorValidatorsRequest;
                toProto(message: _114.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _114.QueryDelegatorValidatorsRequest): _114.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _114.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_114.QueryDelegatorValidatorsResponse>): _114.QueryDelegatorValidatorsResponse;
                fromAmino(object: _114.QueryDelegatorValidatorsResponseAmino): _114.QueryDelegatorValidatorsResponse;
                toAmino(message: _114.QueryDelegatorValidatorsResponse): _114.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _114.QueryDelegatorValidatorsResponseAminoMsg): _114.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _114.QueryDelegatorValidatorsResponse): _114.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _114.QueryDelegatorValidatorsResponseProtoMsg): _114.QueryDelegatorValidatorsResponse;
                toProto(message: _114.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _114.QueryDelegatorValidatorsResponse): _114.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _114.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_114.QueryDelegatorValidatorRequest>): _114.QueryDelegatorValidatorRequest;
                fromAmino(object: _114.QueryDelegatorValidatorRequestAmino): _114.QueryDelegatorValidatorRequest;
                toAmino(message: _114.QueryDelegatorValidatorRequest): _114.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _114.QueryDelegatorValidatorRequestAminoMsg): _114.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _114.QueryDelegatorValidatorRequest): _114.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _114.QueryDelegatorValidatorRequestProtoMsg): _114.QueryDelegatorValidatorRequest;
                toProto(message: _114.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _114.QueryDelegatorValidatorRequest): _114.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _114.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_114.QueryDelegatorValidatorResponse>): _114.QueryDelegatorValidatorResponse;
                fromAmino(object: _114.QueryDelegatorValidatorResponseAmino): _114.QueryDelegatorValidatorResponse;
                toAmino(message: _114.QueryDelegatorValidatorResponse): _114.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _114.QueryDelegatorValidatorResponseAminoMsg): _114.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _114.QueryDelegatorValidatorResponse): _114.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _114.QueryDelegatorValidatorResponseProtoMsg): _114.QueryDelegatorValidatorResponse;
                toProto(message: _114.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _114.QueryDelegatorValidatorResponse): _114.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _114.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_114.QueryHistoricalInfoRequest>): _114.QueryHistoricalInfoRequest;
                fromAmino(object: _114.QueryHistoricalInfoRequestAmino): _114.QueryHistoricalInfoRequest;
                toAmino(message: _114.QueryHistoricalInfoRequest): _114.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _114.QueryHistoricalInfoRequestAminoMsg): _114.QueryHistoricalInfoRequest;
                toAminoMsg(message: _114.QueryHistoricalInfoRequest): _114.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _114.QueryHistoricalInfoRequestProtoMsg): _114.QueryHistoricalInfoRequest;
                toProto(message: _114.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _114.QueryHistoricalInfoRequest): _114.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _114.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_114.QueryHistoricalInfoResponse>): _114.QueryHistoricalInfoResponse;
                fromAmino(object: _114.QueryHistoricalInfoResponseAmino): _114.QueryHistoricalInfoResponse;
                toAmino(message: _114.QueryHistoricalInfoResponse): _114.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _114.QueryHistoricalInfoResponseAminoMsg): _114.QueryHistoricalInfoResponse;
                toAminoMsg(message: _114.QueryHistoricalInfoResponse): _114.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _114.QueryHistoricalInfoResponseProtoMsg): _114.QueryHistoricalInfoResponse;
                toProto(message: _114.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _114.QueryHistoricalInfoResponse): _114.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _114.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryPoolRequest;
                fromPartial(_: Partial<_114.QueryPoolRequest>): _114.QueryPoolRequest;
                fromAmino(_: _114.QueryPoolRequestAmino): _114.QueryPoolRequest;
                toAmino(_: _114.QueryPoolRequest): _114.QueryPoolRequestAmino;
                fromAminoMsg(object: _114.QueryPoolRequestAminoMsg): _114.QueryPoolRequest;
                toAminoMsg(message: _114.QueryPoolRequest): _114.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _114.QueryPoolRequestProtoMsg): _114.QueryPoolRequest;
                toProto(message: _114.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _114.QueryPoolRequest): _114.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _114.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryPoolResponse;
                fromPartial(object: Partial<_114.QueryPoolResponse>): _114.QueryPoolResponse;
                fromAmino(object: _114.QueryPoolResponseAmino): _114.QueryPoolResponse;
                toAmino(message: _114.QueryPoolResponse): _114.QueryPoolResponseAmino;
                fromAminoMsg(object: _114.QueryPoolResponseAminoMsg): _114.QueryPoolResponse;
                toAminoMsg(message: _114.QueryPoolResponse): _114.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _114.QueryPoolResponseProtoMsg): _114.QueryPoolResponse;
                toProto(message: _114.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _114.QueryPoolResponse): _114.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _114.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryParamsRequest;
                fromPartial(_: Partial<_114.QueryParamsRequest>): _114.QueryParamsRequest;
                fromAmino(_: _114.QueryParamsRequestAmino): _114.QueryParamsRequest;
                toAmino(_: _114.QueryParamsRequest): _114.QueryParamsRequestAmino;
                fromAminoMsg(object: _114.QueryParamsRequestAminoMsg): _114.QueryParamsRequest;
                toAminoMsg(message: _114.QueryParamsRequest): _114.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _114.QueryParamsRequestProtoMsg): _114.QueryParamsRequest;
                toProto(message: _114.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _114.QueryParamsRequest): _114.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _114.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryParamsResponse;
                fromPartial(object: Partial<_114.QueryParamsResponse>): _114.QueryParamsResponse;
                fromAmino(object: _114.QueryParamsResponseAmino): _114.QueryParamsResponse;
                toAmino(message: _114.QueryParamsResponse): _114.QueryParamsResponseAmino;
                fromAminoMsg(object: _114.QueryParamsResponseAminoMsg): _114.QueryParamsResponse;
                toAminoMsg(message: _114.QueryParamsResponse): _114.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _114.QueryParamsResponseProtoMsg): _114.QueryParamsResponse;
                toProto(message: _114.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _114.QueryParamsResponse): _114.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _113.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.GenesisState;
                fromPartial(object: Partial<_113.GenesisState>): _113.GenesisState;
                fromAmino(object: _113.GenesisStateAmino): _113.GenesisState;
                toAmino(message: _113.GenesisState): _113.GenesisStateAmino;
                fromAminoMsg(object: _113.GenesisStateAminoMsg): _113.GenesisState;
                toAminoMsg(message: _113.GenesisState): _113.GenesisStateAminoMsg;
                fromProtoMsg(message: _113.GenesisStateProtoMsg): _113.GenesisState;
                toProto(message: _113.GenesisState): Uint8Array;
                toProtoMsg(message: _113.GenesisState): _113.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _113.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.LastValidatorPower;
                fromPartial(object: Partial<_113.LastValidatorPower>): _113.LastValidatorPower;
                fromAmino(object: _113.LastValidatorPowerAmino): _113.LastValidatorPower;
                toAmino(message: _113.LastValidatorPower): _113.LastValidatorPowerAmino;
                fromAminoMsg(object: _113.LastValidatorPowerAminoMsg): _113.LastValidatorPower;
                toAminoMsg(message: _113.LastValidatorPower): _113.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _113.LastValidatorPowerProtoMsg): _113.LastValidatorPower;
                toProto(message: _113.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _113.LastValidatorPower): _113.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _112.AuthorizationType;
            authorizationTypeToJSON(object: _112.AuthorizationType): string;
            AuthorizationType: typeof _112.AuthorizationType;
            AuthorizationTypeSDKType: typeof _112.AuthorizationType;
            AuthorizationTypeAmino: typeof _112.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _112.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.StakeAuthorization;
                fromPartial(object: Partial<_112.StakeAuthorization>): _112.StakeAuthorization;
                fromAmino(object: _112.StakeAuthorizationAmino): _112.StakeAuthorization;
                toAmino(message: _112.StakeAuthorization): _112.StakeAuthorizationAmino;
                fromAminoMsg(object: _112.StakeAuthorizationAminoMsg): _112.StakeAuthorization;
                toAminoMsg(message: _112.StakeAuthorization): _112.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _112.StakeAuthorizationProtoMsg): _112.StakeAuthorization;
                toProto(message: _112.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _112.StakeAuthorization): _112.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _112.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.StakeAuthorization_Validators;
                fromPartial(object: Partial<_112.StakeAuthorization_Validators>): _112.StakeAuthorization_Validators;
                fromAmino(object: _112.StakeAuthorization_ValidatorsAmino): _112.StakeAuthorization_Validators;
                toAmino(message: _112.StakeAuthorization_Validators): _112.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _112.StakeAuthorization_ValidatorsAminoMsg): _112.StakeAuthorization_Validators;
                toAminoMsg(message: _112.StakeAuthorization_Validators): _112.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _112.StakeAuthorization_ValidatorsProtoMsg): _112.StakeAuthorization_Validators;
                toProto(message: _112.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _112.StakeAuthorization_Validators): _112.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    typeUrl: string;
                    encode(message: _117.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.Config;
                    fromPartial(object: Partial<_117.Config>): _117.Config;
                    fromAmino(object: _117.ConfigAmino): _117.Config;
                    toAmino(message: _117.Config): _117.ConfigAmino;
                    fromAminoMsg(object: _117.ConfigAminoMsg): _117.Config;
                    toAminoMsg(message: _117.Config): _117.ConfigAminoMsg;
                    fromProtoMsg(message: _117.ConfigProtoMsg): _117.Config;
                    toProto(message: _117.Config): Uint8Array;
                    toProtoMsg(message: _117.Config): _117.ConfigProtoMsg;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _118.SignMode;
                signModeToJSON(object: _118.SignMode): string;
                SignMode: typeof _118.SignMode;
                SignModeSDKType: typeof _118.SignMode;
                SignModeAmino: typeof _118.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _118.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.SignatureDescriptors;
                    fromPartial(object: Partial<_118.SignatureDescriptors>): _118.SignatureDescriptors;
                    fromAmino(object: _118.SignatureDescriptorsAmino): _118.SignatureDescriptors;
                    toAmino(message: _118.SignatureDescriptors): _118.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _118.SignatureDescriptorsAminoMsg): _118.SignatureDescriptors;
                    toAminoMsg(message: _118.SignatureDescriptors): _118.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _118.SignatureDescriptorsProtoMsg): _118.SignatureDescriptors;
                    toProto(message: _118.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _118.SignatureDescriptors): _118.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _118.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.SignatureDescriptor;
                    fromPartial(object: Partial<_118.SignatureDescriptor>): _118.SignatureDescriptor;
                    fromAmino(object: _118.SignatureDescriptorAmino): _118.SignatureDescriptor;
                    toAmino(message: _118.SignatureDescriptor): _118.SignatureDescriptorAmino;
                    fromAminoMsg(object: _118.SignatureDescriptorAminoMsg): _118.SignatureDescriptor;
                    toAminoMsg(message: _118.SignatureDescriptor): _118.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _118.SignatureDescriptorProtoMsg): _118.SignatureDescriptor;
                    toProto(message: _118.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _118.SignatureDescriptor): _118.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _118.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_118.SignatureDescriptor_Data>): _118.SignatureDescriptor_Data;
                    fromAmino(object: _118.SignatureDescriptor_DataAmino): _118.SignatureDescriptor_Data;
                    toAmino(message: _118.SignatureDescriptor_Data): _118.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _118.SignatureDescriptor_DataAminoMsg): _118.SignatureDescriptor_Data;
                    toAminoMsg(message: _118.SignatureDescriptor_Data): _118.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _118.SignatureDescriptor_DataProtoMsg): _118.SignatureDescriptor_Data;
                    toProto(message: _118.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _118.SignatureDescriptor_Data): _118.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _118.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_118.SignatureDescriptor_Data_Single>): _118.SignatureDescriptor_Data_Single;
                    fromAmino(object: _118.SignatureDescriptor_Data_SingleAmino): _118.SignatureDescriptor_Data_Single;
                    toAmino(message: _118.SignatureDescriptor_Data_Single): _118.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _118.SignatureDescriptor_Data_SingleAminoMsg): _118.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _118.SignatureDescriptor_Data_Single): _118.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _118.SignatureDescriptor_Data_SingleProtoMsg): _118.SignatureDescriptor_Data_Single;
                    toProto(message: _118.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _118.SignatureDescriptor_Data_Single): _118.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _118.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_118.SignatureDescriptor_Data_Multi>): _118.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _118.SignatureDescriptor_Data_MultiAmino): _118.SignatureDescriptor_Data_Multi;
                    toAmino(message: _118.SignatureDescriptor_Data_Multi): _118.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _118.SignatureDescriptor_Data_MultiAminoMsg): _118.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _118.SignatureDescriptor_Data_Multi): _118.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _118.SignatureDescriptor_Data_MultiProtoMsg): _118.SignatureDescriptor_Data_Multi;
                    toProto(message: _118.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _118.SignatureDescriptor_Data_Multi): _118.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _319.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _119.SimulateRequest): Promise<_119.SimulateResponse>;
                getTx(request: _119.GetTxRequest): Promise<_119.GetTxResponse>;
                broadcastTx(request: _119.BroadcastTxRequest): Promise<_119.BroadcastTxResponse>;
                getTxsEvent(request: _119.GetTxsEventRequest): Promise<_119.GetTxsEventResponse>;
                getBlockWithTxs(request: _119.GetBlockWithTxsRequest): Promise<_119.GetBlockWithTxsResponse>;
                txDecode(request: _119.TxDecodeRequest): Promise<_119.TxDecodeResponse>;
                txEncode(request: _119.TxEncodeRequest): Promise<_119.TxEncodeResponse>;
                txEncodeAmino(request: _119.TxEncodeAminoRequest): Promise<_119.TxEncodeAminoResponse>;
                txDecodeAmino(request: _119.TxDecodeAminoRequest): Promise<_119.TxDecodeAminoResponse>;
            };
            Tx: {
                typeUrl: string;
                encode(message: _120.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.Tx;
                fromPartial(object: Partial<_120.Tx>): _120.Tx;
                fromAmino(object: _120.TxAmino): _120.Tx;
                toAmino(message: _120.Tx): _120.TxAmino;
                fromAminoMsg(object: _120.TxAminoMsg): _120.Tx;
                toAminoMsg(message: _120.Tx): _120.TxAminoMsg;
                fromProtoMsg(message: _120.TxProtoMsg): _120.Tx;
                toProto(message: _120.Tx): Uint8Array;
                toProtoMsg(message: _120.Tx): _120.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _120.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.TxRaw;
                fromPartial(object: Partial<_120.TxRaw>): _120.TxRaw;
                fromAmino(object: _120.TxRawAmino): _120.TxRaw;
                toAmino(message: _120.TxRaw): _120.TxRawAmino;
                fromAminoMsg(object: _120.TxRawAminoMsg): _120.TxRaw;
                toAminoMsg(message: _120.TxRaw): _120.TxRawAminoMsg;
                fromProtoMsg(message: _120.TxRawProtoMsg): _120.TxRaw;
                toProto(message: _120.TxRaw): Uint8Array;
                toProtoMsg(message: _120.TxRaw): _120.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _120.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.SignDoc;
                fromPartial(object: Partial<_120.SignDoc>): _120.SignDoc;
                fromAmino(object: _120.SignDocAmino): _120.SignDoc;
                toAmino(message: _120.SignDoc): _120.SignDocAmino;
                fromAminoMsg(object: _120.SignDocAminoMsg): _120.SignDoc;
                toAminoMsg(message: _120.SignDoc): _120.SignDocAminoMsg;
                fromProtoMsg(message: _120.SignDocProtoMsg): _120.SignDoc;
                toProto(message: _120.SignDoc): Uint8Array;
                toProtoMsg(message: _120.SignDoc): _120.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _120.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.SignDocDirectAux;
                fromPartial(object: Partial<_120.SignDocDirectAux>): _120.SignDocDirectAux;
                fromAmino(object: _120.SignDocDirectAuxAmino): _120.SignDocDirectAux;
                toAmino(message: _120.SignDocDirectAux): _120.SignDocDirectAuxAmino;
                fromAminoMsg(object: _120.SignDocDirectAuxAminoMsg): _120.SignDocDirectAux;
                toAminoMsg(message: _120.SignDocDirectAux): _120.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _120.SignDocDirectAuxProtoMsg): _120.SignDocDirectAux;
                toProto(message: _120.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _120.SignDocDirectAux): _120.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _120.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.TxBody;
                fromPartial(object: Partial<_120.TxBody>): _120.TxBody;
                fromAmino(object: _120.TxBodyAmino): _120.TxBody;
                toAmino(message: _120.TxBody): _120.TxBodyAmino;
                fromAminoMsg(object: _120.TxBodyAminoMsg): _120.TxBody;
                toAminoMsg(message: _120.TxBody): _120.TxBodyAminoMsg;
                fromProtoMsg(message: _120.TxBodyProtoMsg): _120.TxBody;
                toProto(message: _120.TxBody): Uint8Array;
                toProtoMsg(message: _120.TxBody): _120.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _120.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.AuthInfo;
                fromPartial(object: Partial<_120.AuthInfo>): _120.AuthInfo;
                fromAmino(object: _120.AuthInfoAmino): _120.AuthInfo;
                toAmino(message: _120.AuthInfo): _120.AuthInfoAmino;
                fromAminoMsg(object: _120.AuthInfoAminoMsg): _120.AuthInfo;
                toAminoMsg(message: _120.AuthInfo): _120.AuthInfoAminoMsg;
                fromProtoMsg(message: _120.AuthInfoProtoMsg): _120.AuthInfo;
                toProto(message: _120.AuthInfo): Uint8Array;
                toProtoMsg(message: _120.AuthInfo): _120.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _120.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.SignerInfo;
                fromPartial(object: Partial<_120.SignerInfo>): _120.SignerInfo;
                fromAmino(object: _120.SignerInfoAmino): _120.SignerInfo;
                toAmino(message: _120.SignerInfo): _120.SignerInfoAmino;
                fromAminoMsg(object: _120.SignerInfoAminoMsg): _120.SignerInfo;
                toAminoMsg(message: _120.SignerInfo): _120.SignerInfoAminoMsg;
                fromProtoMsg(message: _120.SignerInfoProtoMsg): _120.SignerInfo;
                toProto(message: _120.SignerInfo): Uint8Array;
                toProtoMsg(message: _120.SignerInfo): _120.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _120.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.ModeInfo;
                fromPartial(object: Partial<_120.ModeInfo>): _120.ModeInfo;
                fromAmino(object: _120.ModeInfoAmino): _120.ModeInfo;
                toAmino(message: _120.ModeInfo): _120.ModeInfoAmino;
                fromAminoMsg(object: _120.ModeInfoAminoMsg): _120.ModeInfo;
                toAminoMsg(message: _120.ModeInfo): _120.ModeInfoAminoMsg;
                fromProtoMsg(message: _120.ModeInfoProtoMsg): _120.ModeInfo;
                toProto(message: _120.ModeInfo): Uint8Array;
                toProtoMsg(message: _120.ModeInfo): _120.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _120.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.ModeInfo_Single;
                fromPartial(object: Partial<_120.ModeInfo_Single>): _120.ModeInfo_Single;
                fromAmino(object: _120.ModeInfo_SingleAmino): _120.ModeInfo_Single;
                toAmino(message: _120.ModeInfo_Single): _120.ModeInfo_SingleAmino;
                fromAminoMsg(object: _120.ModeInfo_SingleAminoMsg): _120.ModeInfo_Single;
                toAminoMsg(message: _120.ModeInfo_Single): _120.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _120.ModeInfo_SingleProtoMsg): _120.ModeInfo_Single;
                toProto(message: _120.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _120.ModeInfo_Single): _120.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _120.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.ModeInfo_Multi;
                fromPartial(object: Partial<_120.ModeInfo_Multi>): _120.ModeInfo_Multi;
                fromAmino(object: _120.ModeInfo_MultiAmino): _120.ModeInfo_Multi;
                toAmino(message: _120.ModeInfo_Multi): _120.ModeInfo_MultiAmino;
                fromAminoMsg(object: _120.ModeInfo_MultiAminoMsg): _120.ModeInfo_Multi;
                toAminoMsg(message: _120.ModeInfo_Multi): _120.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _120.ModeInfo_MultiProtoMsg): _120.ModeInfo_Multi;
                toProto(message: _120.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _120.ModeInfo_Multi): _120.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _120.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.Fee;
                fromPartial(object: Partial<_120.Fee>): _120.Fee;
                fromAmino(object: _120.FeeAmino): _120.Fee;
                toAmino(message: _120.Fee): _120.FeeAmino;
                fromAminoMsg(object: _120.FeeAminoMsg): _120.Fee;
                toAminoMsg(message: _120.Fee): _120.FeeAminoMsg;
                fromProtoMsg(message: _120.FeeProtoMsg): _120.Fee;
                toProto(message: _120.Fee): Uint8Array;
                toProtoMsg(message: _120.Fee): _120.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _120.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.Tip;
                fromPartial(object: Partial<_120.Tip>): _120.Tip;
                fromAmino(object: _120.TipAmino): _120.Tip;
                toAmino(message: _120.Tip): _120.TipAmino;
                fromAminoMsg(object: _120.TipAminoMsg): _120.Tip;
                toAminoMsg(message: _120.Tip): _120.TipAminoMsg;
                fromProtoMsg(message: _120.TipProtoMsg): _120.Tip;
                toProto(message: _120.Tip): Uint8Array;
                toProtoMsg(message: _120.Tip): _120.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _120.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.AuxSignerData;
                fromPartial(object: Partial<_120.AuxSignerData>): _120.AuxSignerData;
                fromAmino(object: _120.AuxSignerDataAmino): _120.AuxSignerData;
                toAmino(message: _120.AuxSignerData): _120.AuxSignerDataAmino;
                fromAminoMsg(object: _120.AuxSignerDataAminoMsg): _120.AuxSignerData;
                toAminoMsg(message: _120.AuxSignerData): _120.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _120.AuxSignerDataProtoMsg): _120.AuxSignerData;
                toProto(message: _120.AuxSignerData): Uint8Array;
                toProtoMsg(message: _120.AuxSignerData): _120.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _119.OrderBy;
            orderByToJSON(object: _119.OrderBy): string;
            broadcastModeFromJSON(object: any): _119.BroadcastMode;
            broadcastModeToJSON(object: _119.BroadcastMode): string;
            OrderBy: typeof _119.OrderBy;
            OrderBySDKType: typeof _119.OrderBy;
            OrderByAmino: typeof _119.OrderBy;
            BroadcastMode: typeof _119.BroadcastMode;
            BroadcastModeSDKType: typeof _119.BroadcastMode;
            BroadcastModeAmino: typeof _119.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _119.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.GetTxsEventRequest;
                fromPartial(object: Partial<_119.GetTxsEventRequest>): _119.GetTxsEventRequest;
                fromAmino(object: _119.GetTxsEventRequestAmino): _119.GetTxsEventRequest;
                toAmino(message: _119.GetTxsEventRequest): _119.GetTxsEventRequestAmino;
                fromAminoMsg(object: _119.GetTxsEventRequestAminoMsg): _119.GetTxsEventRequest;
                toAminoMsg(message: _119.GetTxsEventRequest): _119.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _119.GetTxsEventRequestProtoMsg): _119.GetTxsEventRequest;
                toProto(message: _119.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _119.GetTxsEventRequest): _119.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _119.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.GetTxsEventResponse;
                fromPartial(object: Partial<_119.GetTxsEventResponse>): _119.GetTxsEventResponse;
                fromAmino(object: _119.GetTxsEventResponseAmino): _119.GetTxsEventResponse;
                toAmino(message: _119.GetTxsEventResponse): _119.GetTxsEventResponseAmino;
                fromAminoMsg(object: _119.GetTxsEventResponseAminoMsg): _119.GetTxsEventResponse;
                toAminoMsg(message: _119.GetTxsEventResponse): _119.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _119.GetTxsEventResponseProtoMsg): _119.GetTxsEventResponse;
                toProto(message: _119.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _119.GetTxsEventResponse): _119.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _119.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.BroadcastTxRequest;
                fromPartial(object: Partial<_119.BroadcastTxRequest>): _119.BroadcastTxRequest;
                fromAmino(object: _119.BroadcastTxRequestAmino): _119.BroadcastTxRequest;
                toAmino(message: _119.BroadcastTxRequest): _119.BroadcastTxRequestAmino;
                fromAminoMsg(object: _119.BroadcastTxRequestAminoMsg): _119.BroadcastTxRequest;
                toAminoMsg(message: _119.BroadcastTxRequest): _119.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _119.BroadcastTxRequestProtoMsg): _119.BroadcastTxRequest;
                toProto(message: _119.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _119.BroadcastTxRequest): _119.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _119.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.BroadcastTxResponse;
                fromPartial(object: Partial<_119.BroadcastTxResponse>): _119.BroadcastTxResponse;
                fromAmino(object: _119.BroadcastTxResponseAmino): _119.BroadcastTxResponse;
                toAmino(message: _119.BroadcastTxResponse): _119.BroadcastTxResponseAmino;
                fromAminoMsg(object: _119.BroadcastTxResponseAminoMsg): _119.BroadcastTxResponse;
                toAminoMsg(message: _119.BroadcastTxResponse): _119.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _119.BroadcastTxResponseProtoMsg): _119.BroadcastTxResponse;
                toProto(message: _119.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _119.BroadcastTxResponse): _119.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _119.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.SimulateRequest;
                fromPartial(object: Partial<_119.SimulateRequest>): _119.SimulateRequest;
                fromAmino(object: _119.SimulateRequestAmino): _119.SimulateRequest;
                toAmino(message: _119.SimulateRequest): _119.SimulateRequestAmino;
                fromAminoMsg(object: _119.SimulateRequestAminoMsg): _119.SimulateRequest;
                toAminoMsg(message: _119.SimulateRequest): _119.SimulateRequestAminoMsg;
                fromProtoMsg(message: _119.SimulateRequestProtoMsg): _119.SimulateRequest;
                toProto(message: _119.SimulateRequest): Uint8Array;
                toProtoMsg(message: _119.SimulateRequest): _119.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _119.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.SimulateResponse;
                fromPartial(object: Partial<_119.SimulateResponse>): _119.SimulateResponse;
                fromAmino(object: _119.SimulateResponseAmino): _119.SimulateResponse;
                toAmino(message: _119.SimulateResponse): _119.SimulateResponseAmino;
                fromAminoMsg(object: _119.SimulateResponseAminoMsg): _119.SimulateResponse;
                toAminoMsg(message: _119.SimulateResponse): _119.SimulateResponseAminoMsg;
                fromProtoMsg(message: _119.SimulateResponseProtoMsg): _119.SimulateResponse;
                toProto(message: _119.SimulateResponse): Uint8Array;
                toProtoMsg(message: _119.SimulateResponse): _119.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _119.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.GetTxRequest;
                fromPartial(object: Partial<_119.GetTxRequest>): _119.GetTxRequest;
                fromAmino(object: _119.GetTxRequestAmino): _119.GetTxRequest;
                toAmino(message: _119.GetTxRequest): _119.GetTxRequestAmino;
                fromAminoMsg(object: _119.GetTxRequestAminoMsg): _119.GetTxRequest;
                toAminoMsg(message: _119.GetTxRequest): _119.GetTxRequestAminoMsg;
                fromProtoMsg(message: _119.GetTxRequestProtoMsg): _119.GetTxRequest;
                toProto(message: _119.GetTxRequest): Uint8Array;
                toProtoMsg(message: _119.GetTxRequest): _119.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _119.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.GetTxResponse;
                fromPartial(object: Partial<_119.GetTxResponse>): _119.GetTxResponse;
                fromAmino(object: _119.GetTxResponseAmino): _119.GetTxResponse;
                toAmino(message: _119.GetTxResponse): _119.GetTxResponseAmino;
                fromAminoMsg(object: _119.GetTxResponseAminoMsg): _119.GetTxResponse;
                toAminoMsg(message: _119.GetTxResponse): _119.GetTxResponseAminoMsg;
                fromProtoMsg(message: _119.GetTxResponseProtoMsg): _119.GetTxResponse;
                toProto(message: _119.GetTxResponse): Uint8Array;
                toProtoMsg(message: _119.GetTxResponse): _119.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _119.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_119.GetBlockWithTxsRequest>): _119.GetBlockWithTxsRequest;
                fromAmino(object: _119.GetBlockWithTxsRequestAmino): _119.GetBlockWithTxsRequest;
                toAmino(message: _119.GetBlockWithTxsRequest): _119.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _119.GetBlockWithTxsRequestAminoMsg): _119.GetBlockWithTxsRequest;
                toAminoMsg(message: _119.GetBlockWithTxsRequest): _119.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _119.GetBlockWithTxsRequestProtoMsg): _119.GetBlockWithTxsRequest;
                toProto(message: _119.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _119.GetBlockWithTxsRequest): _119.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _119.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_119.GetBlockWithTxsResponse>): _119.GetBlockWithTxsResponse;
                fromAmino(object: _119.GetBlockWithTxsResponseAmino): _119.GetBlockWithTxsResponse;
                toAmino(message: _119.GetBlockWithTxsResponse): _119.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _119.GetBlockWithTxsResponseAminoMsg): _119.GetBlockWithTxsResponse;
                toAminoMsg(message: _119.GetBlockWithTxsResponse): _119.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _119.GetBlockWithTxsResponseProtoMsg): _119.GetBlockWithTxsResponse;
                toProto(message: _119.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _119.GetBlockWithTxsResponse): _119.GetBlockWithTxsResponseProtoMsg;
            };
            TxDecodeRequest: {
                typeUrl: string;
                encode(message: _119.TxDecodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.TxDecodeRequest;
                fromPartial(object: Partial<_119.TxDecodeRequest>): _119.TxDecodeRequest;
                fromAmino(object: _119.TxDecodeRequestAmino): _119.TxDecodeRequest;
                toAmino(message: _119.TxDecodeRequest): _119.TxDecodeRequestAmino;
                fromAminoMsg(object: _119.TxDecodeRequestAminoMsg): _119.TxDecodeRequest;
                toAminoMsg(message: _119.TxDecodeRequest): _119.TxDecodeRequestAminoMsg;
                fromProtoMsg(message: _119.TxDecodeRequestProtoMsg): _119.TxDecodeRequest;
                toProto(message: _119.TxDecodeRequest): Uint8Array;
                toProtoMsg(message: _119.TxDecodeRequest): _119.TxDecodeRequestProtoMsg;
            };
            TxDecodeResponse: {
                typeUrl: string;
                encode(message: _119.TxDecodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.TxDecodeResponse;
                fromPartial(object: Partial<_119.TxDecodeResponse>): _119.TxDecodeResponse;
                fromAmino(object: _119.TxDecodeResponseAmino): _119.TxDecodeResponse;
                toAmino(message: _119.TxDecodeResponse): _119.TxDecodeResponseAmino;
                fromAminoMsg(object: _119.TxDecodeResponseAminoMsg): _119.TxDecodeResponse;
                toAminoMsg(message: _119.TxDecodeResponse): _119.TxDecodeResponseAminoMsg;
                fromProtoMsg(message: _119.TxDecodeResponseProtoMsg): _119.TxDecodeResponse;
                toProto(message: _119.TxDecodeResponse): Uint8Array;
                toProtoMsg(message: _119.TxDecodeResponse): _119.TxDecodeResponseProtoMsg;
            };
            TxEncodeRequest: {
                typeUrl: string;
                encode(message: _119.TxEncodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.TxEncodeRequest;
                fromPartial(object: Partial<_119.TxEncodeRequest>): _119.TxEncodeRequest;
                fromAmino(object: _119.TxEncodeRequestAmino): _119.TxEncodeRequest;
                toAmino(message: _119.TxEncodeRequest): _119.TxEncodeRequestAmino;
                fromAminoMsg(object: _119.TxEncodeRequestAminoMsg): _119.TxEncodeRequest;
                toAminoMsg(message: _119.TxEncodeRequest): _119.TxEncodeRequestAminoMsg;
                fromProtoMsg(message: _119.TxEncodeRequestProtoMsg): _119.TxEncodeRequest;
                toProto(message: _119.TxEncodeRequest): Uint8Array;
                toProtoMsg(message: _119.TxEncodeRequest): _119.TxEncodeRequestProtoMsg;
            };
            TxEncodeResponse: {
                typeUrl: string;
                encode(message: _119.TxEncodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.TxEncodeResponse;
                fromPartial(object: Partial<_119.TxEncodeResponse>): _119.TxEncodeResponse;
                fromAmino(object: _119.TxEncodeResponseAmino): _119.TxEncodeResponse;
                toAmino(message: _119.TxEncodeResponse): _119.TxEncodeResponseAmino;
                fromAminoMsg(object: _119.TxEncodeResponseAminoMsg): _119.TxEncodeResponse;
                toAminoMsg(message: _119.TxEncodeResponse): _119.TxEncodeResponseAminoMsg;
                fromProtoMsg(message: _119.TxEncodeResponseProtoMsg): _119.TxEncodeResponse;
                toProto(message: _119.TxEncodeResponse): Uint8Array;
                toProtoMsg(message: _119.TxEncodeResponse): _119.TxEncodeResponseProtoMsg;
            };
            TxEncodeAminoRequest: {
                typeUrl: string;
                encode(message: _119.TxEncodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.TxEncodeAminoRequest;
                fromPartial(object: Partial<_119.TxEncodeAminoRequest>): _119.TxEncodeAminoRequest;
                fromAmino(object: _119.TxEncodeAminoRequestAmino): _119.TxEncodeAminoRequest;
                toAmino(message: _119.TxEncodeAminoRequest): _119.TxEncodeAminoRequestAmino;
                fromAminoMsg(object: _119.TxEncodeAminoRequestAminoMsg): _119.TxEncodeAminoRequest;
                toAminoMsg(message: _119.TxEncodeAminoRequest): _119.TxEncodeAminoRequestAminoMsg;
                fromProtoMsg(message: _119.TxEncodeAminoRequestProtoMsg): _119.TxEncodeAminoRequest;
                toProto(message: _119.TxEncodeAminoRequest): Uint8Array;
                toProtoMsg(message: _119.TxEncodeAminoRequest): _119.TxEncodeAminoRequestProtoMsg;
            };
            TxEncodeAminoResponse: {
                typeUrl: string;
                encode(message: _119.TxEncodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.TxEncodeAminoResponse;
                fromPartial(object: Partial<_119.TxEncodeAminoResponse>): _119.TxEncodeAminoResponse;
                fromAmino(object: _119.TxEncodeAminoResponseAmino): _119.TxEncodeAminoResponse;
                toAmino(message: _119.TxEncodeAminoResponse): _119.TxEncodeAminoResponseAmino;
                fromAminoMsg(object: _119.TxEncodeAminoResponseAminoMsg): _119.TxEncodeAminoResponse;
                toAminoMsg(message: _119.TxEncodeAminoResponse): _119.TxEncodeAminoResponseAminoMsg;
                fromProtoMsg(message: _119.TxEncodeAminoResponseProtoMsg): _119.TxEncodeAminoResponse;
                toProto(message: _119.TxEncodeAminoResponse): Uint8Array;
                toProtoMsg(message: _119.TxEncodeAminoResponse): _119.TxEncodeAminoResponseProtoMsg;
            };
            TxDecodeAminoRequest: {
                typeUrl: string;
                encode(message: _119.TxDecodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.TxDecodeAminoRequest;
                fromPartial(object: Partial<_119.TxDecodeAminoRequest>): _119.TxDecodeAminoRequest;
                fromAmino(object: _119.TxDecodeAminoRequestAmino): _119.TxDecodeAminoRequest;
                toAmino(message: _119.TxDecodeAminoRequest): _119.TxDecodeAminoRequestAmino;
                fromAminoMsg(object: _119.TxDecodeAminoRequestAminoMsg): _119.TxDecodeAminoRequest;
                toAminoMsg(message: _119.TxDecodeAminoRequest): _119.TxDecodeAminoRequestAminoMsg;
                fromProtoMsg(message: _119.TxDecodeAminoRequestProtoMsg): _119.TxDecodeAminoRequest;
                toProto(message: _119.TxDecodeAminoRequest): Uint8Array;
                toProtoMsg(message: _119.TxDecodeAminoRequest): _119.TxDecodeAminoRequestProtoMsg;
            };
            TxDecodeAminoResponse: {
                typeUrl: string;
                encode(message: _119.TxDecodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.TxDecodeAminoResponse;
                fromPartial(object: Partial<_119.TxDecodeAminoResponse>): _119.TxDecodeAminoResponse;
                fromAmino(object: _119.TxDecodeAminoResponseAmino): _119.TxDecodeAminoResponse;
                toAmino(message: _119.TxDecodeAminoResponse): _119.TxDecodeAminoResponseAmino;
                fromAminoMsg(object: _119.TxDecodeAminoResponseAminoMsg): _119.TxDecodeAminoResponse;
                toAminoMsg(message: _119.TxDecodeAminoResponse): _119.TxDecodeAminoResponseAminoMsg;
                fromProtoMsg(message: _119.TxDecodeAminoResponseProtoMsg): _119.TxDecodeAminoResponse;
                toProto(message: _119.TxDecodeAminoResponse): Uint8Array;
                toProtoMsg(message: _119.TxDecodeAminoResponse): _119.TxDecodeAminoResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _121.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.Module;
                    fromPartial(object: Partial<_121.Module>): _121.Module;
                    fromAmino(object: _121.ModuleAmino): _121.Module;
                    toAmino(message: _121.Module): _121.ModuleAmino;
                    fromAminoMsg(object: _121.ModuleAminoMsg): _121.Module;
                    toAminoMsg(message: _121.Module): _121.ModuleAminoMsg;
                    fromProtoMsg(message: _121.ModuleProtoMsg): _121.Module;
                    toProto(message: _121.Module): Uint8Array;
                    toProtoMsg(message: _121.Module): _121.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _336.MsgClientImpl;
            QueryClientImpl: typeof _320.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _122.QueryCurrentPlanRequest): Promise<_122.QueryCurrentPlanResponse>;
                appliedPlan(request: _122.QueryAppliedPlanRequest): Promise<_122.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _122.QueryUpgradedConsensusStateRequest): Promise<_122.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _122.QueryModuleVersionsRequest): Promise<_122.QueryModuleVersionsResponse>;
                authority(request?: _122.QueryAuthorityRequest): Promise<_122.QueryAuthorityResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _123.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _123.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _123.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _123.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _123.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _123.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _123.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _123.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _123.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _123.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _123.MsgSoftwareUpgrade) => _123.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _123.MsgSoftwareUpgradeAmino) => _123.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _123.MsgCancelUpgrade) => _123.MsgCancelUpgradeAmino;
                    fromAmino: (object: _123.MsgCancelUpgradeAmino) => _123.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _124.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.Plan;
                fromPartial(object: Partial<_124.Plan>): _124.Plan;
                fromAmino(object: _124.PlanAmino): _124.Plan;
                toAmino(message: _124.Plan): _124.PlanAmino;
                fromAminoMsg(object: _124.PlanAminoMsg): _124.Plan;
                toAminoMsg(message: _124.Plan): _124.PlanAminoMsg;
                fromProtoMsg(message: _124.PlanProtoMsg): _124.Plan;
                toProto(message: _124.Plan): Uint8Array;
                toProtoMsg(message: _124.Plan): _124.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _124.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_124.SoftwareUpgradeProposal>): _124.SoftwareUpgradeProposal;
                fromAmino(object: _124.SoftwareUpgradeProposalAmino): _124.SoftwareUpgradeProposal;
                toAmino(message: _124.SoftwareUpgradeProposal): _124.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _124.SoftwareUpgradeProposalAminoMsg): _124.SoftwareUpgradeProposal;
                toAminoMsg(message: _124.SoftwareUpgradeProposal): _124.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _124.SoftwareUpgradeProposalProtoMsg): _124.SoftwareUpgradeProposal;
                toProto(message: _124.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _124.SoftwareUpgradeProposal): _124.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _124.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_124.CancelSoftwareUpgradeProposal>): _124.CancelSoftwareUpgradeProposal;
                fromAmino(object: _124.CancelSoftwareUpgradeProposalAmino): _124.CancelSoftwareUpgradeProposal;
                toAmino(message: _124.CancelSoftwareUpgradeProposal): _124.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _124.CancelSoftwareUpgradeProposalAminoMsg): _124.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _124.CancelSoftwareUpgradeProposal): _124.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _124.CancelSoftwareUpgradeProposalProtoMsg): _124.CancelSoftwareUpgradeProposal;
                toProto(message: _124.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _124.CancelSoftwareUpgradeProposal): _124.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _124.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.ModuleVersion;
                fromPartial(object: Partial<_124.ModuleVersion>): _124.ModuleVersion;
                fromAmino(object: _124.ModuleVersionAmino): _124.ModuleVersion;
                toAmino(message: _124.ModuleVersion): _124.ModuleVersionAmino;
                fromAminoMsg(object: _124.ModuleVersionAminoMsg): _124.ModuleVersion;
                toAminoMsg(message: _124.ModuleVersion): _124.ModuleVersionAminoMsg;
                fromProtoMsg(message: _124.ModuleVersionProtoMsg): _124.ModuleVersion;
                toProto(message: _124.ModuleVersion): Uint8Array;
                toProtoMsg(message: _124.ModuleVersion): _124.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _123.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_123.MsgSoftwareUpgrade>): _123.MsgSoftwareUpgrade;
                fromAmino(object: _123.MsgSoftwareUpgradeAmino): _123.MsgSoftwareUpgrade;
                toAmino(message: _123.MsgSoftwareUpgrade): _123.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _123.MsgSoftwareUpgradeAminoMsg): _123.MsgSoftwareUpgrade;
                toAminoMsg(message: _123.MsgSoftwareUpgrade): _123.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _123.MsgSoftwareUpgradeProtoMsg): _123.MsgSoftwareUpgrade;
                toProto(message: _123.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _123.MsgSoftwareUpgrade): _123.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _123.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_123.MsgSoftwareUpgradeResponse>): _123.MsgSoftwareUpgradeResponse;
                fromAmino(_: _123.MsgSoftwareUpgradeResponseAmino): _123.MsgSoftwareUpgradeResponse;
                toAmino(_: _123.MsgSoftwareUpgradeResponse): _123.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _123.MsgSoftwareUpgradeResponseAminoMsg): _123.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _123.MsgSoftwareUpgradeResponse): _123.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _123.MsgSoftwareUpgradeResponseProtoMsg): _123.MsgSoftwareUpgradeResponse;
                toProto(message: _123.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _123.MsgSoftwareUpgradeResponse): _123.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _123.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.MsgCancelUpgrade;
                fromPartial(object: Partial<_123.MsgCancelUpgrade>): _123.MsgCancelUpgrade;
                fromAmino(object: _123.MsgCancelUpgradeAmino): _123.MsgCancelUpgrade;
                toAmino(message: _123.MsgCancelUpgrade): _123.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _123.MsgCancelUpgradeAminoMsg): _123.MsgCancelUpgrade;
                toAminoMsg(message: _123.MsgCancelUpgrade): _123.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _123.MsgCancelUpgradeProtoMsg): _123.MsgCancelUpgrade;
                toProto(message: _123.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _123.MsgCancelUpgrade): _123.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _123.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_123.MsgCancelUpgradeResponse>): _123.MsgCancelUpgradeResponse;
                fromAmino(_: _123.MsgCancelUpgradeResponseAmino): _123.MsgCancelUpgradeResponse;
                toAmino(_: _123.MsgCancelUpgradeResponse): _123.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _123.MsgCancelUpgradeResponseAminoMsg): _123.MsgCancelUpgradeResponse;
                toAminoMsg(message: _123.MsgCancelUpgradeResponse): _123.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _123.MsgCancelUpgradeResponseProtoMsg): _123.MsgCancelUpgradeResponse;
                toProto(message: _123.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _123.MsgCancelUpgradeResponse): _123.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _122.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_122.QueryCurrentPlanRequest>): _122.QueryCurrentPlanRequest;
                fromAmino(_: _122.QueryCurrentPlanRequestAmino): _122.QueryCurrentPlanRequest;
                toAmino(_: _122.QueryCurrentPlanRequest): _122.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _122.QueryCurrentPlanRequestAminoMsg): _122.QueryCurrentPlanRequest;
                toAminoMsg(message: _122.QueryCurrentPlanRequest): _122.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _122.QueryCurrentPlanRequestProtoMsg): _122.QueryCurrentPlanRequest;
                toProto(message: _122.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _122.QueryCurrentPlanRequest): _122.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _122.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_122.QueryCurrentPlanResponse>): _122.QueryCurrentPlanResponse;
                fromAmino(object: _122.QueryCurrentPlanResponseAmino): _122.QueryCurrentPlanResponse;
                toAmino(message: _122.QueryCurrentPlanResponse): _122.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _122.QueryCurrentPlanResponseAminoMsg): _122.QueryCurrentPlanResponse;
                toAminoMsg(message: _122.QueryCurrentPlanResponse): _122.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _122.QueryCurrentPlanResponseProtoMsg): _122.QueryCurrentPlanResponse;
                toProto(message: _122.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _122.QueryCurrentPlanResponse): _122.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _122.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_122.QueryAppliedPlanRequest>): _122.QueryAppliedPlanRequest;
                fromAmino(object: _122.QueryAppliedPlanRequestAmino): _122.QueryAppliedPlanRequest;
                toAmino(message: _122.QueryAppliedPlanRequest): _122.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _122.QueryAppliedPlanRequestAminoMsg): _122.QueryAppliedPlanRequest;
                toAminoMsg(message: _122.QueryAppliedPlanRequest): _122.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _122.QueryAppliedPlanRequestProtoMsg): _122.QueryAppliedPlanRequest;
                toProto(message: _122.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _122.QueryAppliedPlanRequest): _122.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _122.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_122.QueryAppliedPlanResponse>): _122.QueryAppliedPlanResponse;
                fromAmino(object: _122.QueryAppliedPlanResponseAmino): _122.QueryAppliedPlanResponse;
                toAmino(message: _122.QueryAppliedPlanResponse): _122.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _122.QueryAppliedPlanResponseAminoMsg): _122.QueryAppliedPlanResponse;
                toAminoMsg(message: _122.QueryAppliedPlanResponse): _122.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _122.QueryAppliedPlanResponseProtoMsg): _122.QueryAppliedPlanResponse;
                toProto(message: _122.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _122.QueryAppliedPlanResponse): _122.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _122.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_122.QueryUpgradedConsensusStateRequest>): _122.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _122.QueryUpgradedConsensusStateRequestAmino): _122.QueryUpgradedConsensusStateRequest;
                toAmino(message: _122.QueryUpgradedConsensusStateRequest): _122.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _122.QueryUpgradedConsensusStateRequestAminoMsg): _122.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _122.QueryUpgradedConsensusStateRequest): _122.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _122.QueryUpgradedConsensusStateRequestProtoMsg): _122.QueryUpgradedConsensusStateRequest;
                toProto(message: _122.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _122.QueryUpgradedConsensusStateRequest): _122.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _122.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_122.QueryUpgradedConsensusStateResponse>): _122.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _122.QueryUpgradedConsensusStateResponseAmino): _122.QueryUpgradedConsensusStateResponse;
                toAmino(message: _122.QueryUpgradedConsensusStateResponse): _122.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _122.QueryUpgradedConsensusStateResponseAminoMsg): _122.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _122.QueryUpgradedConsensusStateResponse): _122.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _122.QueryUpgradedConsensusStateResponseProtoMsg): _122.QueryUpgradedConsensusStateResponse;
                toProto(message: _122.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _122.QueryUpgradedConsensusStateResponse): _122.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _122.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_122.QueryModuleVersionsRequest>): _122.QueryModuleVersionsRequest;
                fromAmino(object: _122.QueryModuleVersionsRequestAmino): _122.QueryModuleVersionsRequest;
                toAmino(message: _122.QueryModuleVersionsRequest): _122.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _122.QueryModuleVersionsRequestAminoMsg): _122.QueryModuleVersionsRequest;
                toAminoMsg(message: _122.QueryModuleVersionsRequest): _122.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _122.QueryModuleVersionsRequestProtoMsg): _122.QueryModuleVersionsRequest;
                toProto(message: _122.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _122.QueryModuleVersionsRequest): _122.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _122.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_122.QueryModuleVersionsResponse>): _122.QueryModuleVersionsResponse;
                fromAmino(object: _122.QueryModuleVersionsResponseAmino): _122.QueryModuleVersionsResponse;
                toAmino(message: _122.QueryModuleVersionsResponse): _122.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _122.QueryModuleVersionsResponseAminoMsg): _122.QueryModuleVersionsResponse;
                toAminoMsg(message: _122.QueryModuleVersionsResponse): _122.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _122.QueryModuleVersionsResponseProtoMsg): _122.QueryModuleVersionsResponse;
                toProto(message: _122.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _122.QueryModuleVersionsResponse): _122.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _122.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.QueryAuthorityRequest;
                fromPartial(_: Partial<_122.QueryAuthorityRequest>): _122.QueryAuthorityRequest;
                fromAmino(_: _122.QueryAuthorityRequestAmino): _122.QueryAuthorityRequest;
                toAmino(_: _122.QueryAuthorityRequest): _122.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _122.QueryAuthorityRequestAminoMsg): _122.QueryAuthorityRequest;
                toAminoMsg(message: _122.QueryAuthorityRequest): _122.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _122.QueryAuthorityRequestProtoMsg): _122.QueryAuthorityRequest;
                toProto(message: _122.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _122.QueryAuthorityRequest): _122.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _122.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.QueryAuthorityResponse;
                fromPartial(object: Partial<_122.QueryAuthorityResponse>): _122.QueryAuthorityResponse;
                fromAmino(object: _122.QueryAuthorityResponseAmino): _122.QueryAuthorityResponse;
                toAmino(message: _122.QueryAuthorityResponse): _122.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _122.QueryAuthorityResponseAminoMsg): _122.QueryAuthorityResponse;
                toAminoMsg(message: _122.QueryAuthorityResponse): _122.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _122.QueryAuthorityResponseProtoMsg): _122.QueryAuthorityResponse;
                toProto(message: _122.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _122.QueryAuthorityResponse): _122.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _125.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.Module;
                    fromPartial(_: Partial<_125.Module>): _125.Module;
                    fromAmino(_: _125.ModuleAmino): _125.Module;
                    toAmino(_: _125.Module): _125.ModuleAmino;
                    fromAminoMsg(object: _125.ModuleAminoMsg): _125.Module;
                    toAminoMsg(message: _125.Module): _125.ModuleAminoMsg;
                    fromProtoMsg(message: _125.ModuleProtoMsg): _125.Module;
                    toProto(message: _125.Module): Uint8Array;
                    toProtoMsg(message: _125.Module): _125.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _337.MsgClientImpl;
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _126.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _126.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _126.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _126.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _126.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _126.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _126.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _126.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _126.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _126.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _126.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _126.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _126.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _126.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _126.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _126.MsgCreateVestingAccount) => _126.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _126.MsgCreateVestingAccountAmino) => _126.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _126.MsgCreatePermanentLockedAccount) => _126.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _126.MsgCreatePermanentLockedAccountAmino) => _126.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _126.MsgCreatePeriodicVestingAccount) => _126.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _126.MsgCreatePeriodicVestingAccountAmino) => _126.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _127.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.BaseVestingAccount;
                fromPartial(object: Partial<_127.BaseVestingAccount>): _127.BaseVestingAccount;
                fromAmino(object: _127.BaseVestingAccountAmino): _127.BaseVestingAccount;
                toAmino(message: _127.BaseVestingAccount): _127.BaseVestingAccountAmino;
                fromAminoMsg(object: _127.BaseVestingAccountAminoMsg): _127.BaseVestingAccount;
                toAminoMsg(message: _127.BaseVestingAccount): _127.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _127.BaseVestingAccountProtoMsg): _127.BaseVestingAccount;
                toProto(message: _127.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _127.BaseVestingAccount): _127.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _127.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.ContinuousVestingAccount;
                fromPartial(object: Partial<_127.ContinuousVestingAccount>): _127.ContinuousVestingAccount;
                fromAmino(object: _127.ContinuousVestingAccountAmino): _127.ContinuousVestingAccount;
                toAmino(message: _127.ContinuousVestingAccount): _127.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _127.ContinuousVestingAccountAminoMsg): _127.ContinuousVestingAccount;
                toAminoMsg(message: _127.ContinuousVestingAccount): _127.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _127.ContinuousVestingAccountProtoMsg): _127.ContinuousVestingAccount;
                toProto(message: _127.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _127.ContinuousVestingAccount): _127.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _127.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.DelayedVestingAccount;
                fromPartial(object: Partial<_127.DelayedVestingAccount>): _127.DelayedVestingAccount;
                fromAmino(object: _127.DelayedVestingAccountAmino): _127.DelayedVestingAccount;
                toAmino(message: _127.DelayedVestingAccount): _127.DelayedVestingAccountAmino;
                fromAminoMsg(object: _127.DelayedVestingAccountAminoMsg): _127.DelayedVestingAccount;
                toAminoMsg(message: _127.DelayedVestingAccount): _127.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _127.DelayedVestingAccountProtoMsg): _127.DelayedVestingAccount;
                toProto(message: _127.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _127.DelayedVestingAccount): _127.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _127.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.Period;
                fromPartial(object: Partial<_127.Period>): _127.Period;
                fromAmino(object: _127.PeriodAmino): _127.Period;
                toAmino(message: _127.Period): _127.PeriodAmino;
                fromAminoMsg(object: _127.PeriodAminoMsg): _127.Period;
                toAminoMsg(message: _127.Period): _127.PeriodAminoMsg;
                fromProtoMsg(message: _127.PeriodProtoMsg): _127.Period;
                toProto(message: _127.Period): Uint8Array;
                toProtoMsg(message: _127.Period): _127.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _127.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.PeriodicVestingAccount;
                fromPartial(object: Partial<_127.PeriodicVestingAccount>): _127.PeriodicVestingAccount;
                fromAmino(object: _127.PeriodicVestingAccountAmino): _127.PeriodicVestingAccount;
                toAmino(message: _127.PeriodicVestingAccount): _127.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _127.PeriodicVestingAccountAminoMsg): _127.PeriodicVestingAccount;
                toAminoMsg(message: _127.PeriodicVestingAccount): _127.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _127.PeriodicVestingAccountProtoMsg): _127.PeriodicVestingAccount;
                toProto(message: _127.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _127.PeriodicVestingAccount): _127.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _127.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.PermanentLockedAccount;
                fromPartial(object: Partial<_127.PermanentLockedAccount>): _127.PermanentLockedAccount;
                fromAmino(object: _127.PermanentLockedAccountAmino): _127.PermanentLockedAccount;
                toAmino(message: _127.PermanentLockedAccount): _127.PermanentLockedAccountAmino;
                fromAminoMsg(object: _127.PermanentLockedAccountAminoMsg): _127.PermanentLockedAccount;
                toAminoMsg(message: _127.PermanentLockedAccount): _127.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _127.PermanentLockedAccountProtoMsg): _127.PermanentLockedAccount;
                toProto(message: _127.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _127.PermanentLockedAccount): _127.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _126.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.MsgCreateVestingAccount;
                fromPartial(object: Partial<_126.MsgCreateVestingAccount>): _126.MsgCreateVestingAccount;
                fromAmino(object: _126.MsgCreateVestingAccountAmino): _126.MsgCreateVestingAccount;
                toAmino(message: _126.MsgCreateVestingAccount): _126.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _126.MsgCreateVestingAccountAminoMsg): _126.MsgCreateVestingAccount;
                toAminoMsg(message: _126.MsgCreateVestingAccount): _126.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _126.MsgCreateVestingAccountProtoMsg): _126.MsgCreateVestingAccount;
                toProto(message: _126.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _126.MsgCreateVestingAccount): _126.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _126.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_126.MsgCreateVestingAccountResponse>): _126.MsgCreateVestingAccountResponse;
                fromAmino(_: _126.MsgCreateVestingAccountResponseAmino): _126.MsgCreateVestingAccountResponse;
                toAmino(_: _126.MsgCreateVestingAccountResponse): _126.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _126.MsgCreateVestingAccountResponseAminoMsg): _126.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _126.MsgCreateVestingAccountResponse): _126.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _126.MsgCreateVestingAccountResponseProtoMsg): _126.MsgCreateVestingAccountResponse;
                toProto(message: _126.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _126.MsgCreateVestingAccountResponse): _126.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _126.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_126.MsgCreatePermanentLockedAccount>): _126.MsgCreatePermanentLockedAccount;
                fromAmino(object: _126.MsgCreatePermanentLockedAccountAmino): _126.MsgCreatePermanentLockedAccount;
                toAmino(message: _126.MsgCreatePermanentLockedAccount): _126.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _126.MsgCreatePermanentLockedAccountAminoMsg): _126.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _126.MsgCreatePermanentLockedAccount): _126.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _126.MsgCreatePermanentLockedAccountProtoMsg): _126.MsgCreatePermanentLockedAccount;
                toProto(message: _126.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _126.MsgCreatePermanentLockedAccount): _126.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _126.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_126.MsgCreatePermanentLockedAccountResponse>): _126.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _126.MsgCreatePermanentLockedAccountResponseAmino): _126.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _126.MsgCreatePermanentLockedAccountResponse): _126.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _126.MsgCreatePermanentLockedAccountResponseAminoMsg): _126.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _126.MsgCreatePermanentLockedAccountResponse): _126.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _126.MsgCreatePermanentLockedAccountResponseProtoMsg): _126.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _126.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _126.MsgCreatePermanentLockedAccountResponse): _126.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _126.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_126.MsgCreatePeriodicVestingAccount>): _126.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _126.MsgCreatePeriodicVestingAccountAmino): _126.MsgCreatePeriodicVestingAccount;
                toAmino(message: _126.MsgCreatePeriodicVestingAccount): _126.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _126.MsgCreatePeriodicVestingAccountAminoMsg): _126.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _126.MsgCreatePeriodicVestingAccount): _126.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _126.MsgCreatePeriodicVestingAccountProtoMsg): _126.MsgCreatePeriodicVestingAccount;
                toProto(message: _126.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _126.MsgCreatePeriodicVestingAccount): _126.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _126.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_126.MsgCreatePeriodicVestingAccountResponse>): _126.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _126.MsgCreatePeriodicVestingAccountResponseAmino): _126.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _126.MsgCreatePeriodicVestingAccountResponse): _126.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _126.MsgCreatePeriodicVestingAccountResponseAminoMsg): _126.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _126.MsgCreatePeriodicVestingAccountResponse): _126.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _126.MsgCreatePeriodicVestingAccountResponseProtoMsg): _126.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _126.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _126.MsgCreatePeriodicVestingAccountResponse): _126.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _321.MsgClientImpl;
                };
                authz: {
                    v1beta1: _322.MsgClientImpl;
                };
                bank: {
                    v1beta1: _323.MsgClientImpl;
                };
                consensus: {
                    v1: _324.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _325.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _326.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _327.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _328.MsgClientImpl;
                };
                gov: {
                    v1: _329.MsgClientImpl;
                    v1beta1: _330.MsgClientImpl;
                };
                group: {
                    v1: _331.MsgClientImpl;
                };
                mint: {
                    v1beta1: _332.MsgClientImpl;
                };
                nft: {
                    v1beta1: _333.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _334.MsgClientImpl;
                };
                staking: {
                    v1beta1: _335.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _336.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _337.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _5.QueryConfigRequest): Promise<_5.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _9.QueryAccountsRequest): Promise<_9.QueryAccountsResponse>;
                        account(request: _9.QueryAccountRequest): Promise<_9.QueryAccountResponse>;
                        accountAddressByID(request: _9.QueryAccountAddressByIDRequest): Promise<_9.QueryAccountAddressByIDResponse>;
                        params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
                        moduleAccounts(request?: _9.QueryModuleAccountsRequest): Promise<_9.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _9.QueryModuleAccountByNameRequest): Promise<_9.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _9.Bech32PrefixRequest): Promise<_9.Bech32PrefixResponse>;
                        addressBytesToString(request: _9.AddressBytesToStringRequest): Promise<_9.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _9.AddressStringToBytesRequest): Promise<_9.AddressStringToBytesResponse>;
                        accountInfo(request: _9.QueryAccountInfoRequest): Promise<_9.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _15.QueryGrantsRequest): Promise<_15.QueryGrantsResponse>;
                        granterGrants(request: _15.QueryGranterGrantsRequest): Promise<_15.QueryGranterGrantsResponse>;
                        granteeGrants(request: _15.QueryGranteeGrantsRequest): Promise<_15.QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: _18.AppOptionsRequest): Promise<_18.AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _23.QueryBalanceRequest): Promise<_23.QueryBalanceResponse>;
                        allBalances(request: _23.QueryAllBalancesRequest): Promise<_23.QueryAllBalancesResponse>;
                        spendableBalances(request: _23.QuerySpendableBalancesRequest): Promise<_23.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _23.QuerySpendableBalanceByDenomRequest): Promise<_23.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _23.QueryTotalSupplyRequest): Promise<_23.QueryTotalSupplyResponse>;
                        supplyOf(request: _23.QuerySupplyOfRequest): Promise<_23.QuerySupplyOfResponse>;
                        params(request?: _23.QueryParamsRequest): Promise<_23.QueryParamsResponse>;
                        denomMetadata(request: _23.QueryDenomMetadataRequest): Promise<_23.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _23.QueryDenomsMetadataRequest): Promise<_23.QueryDenomsMetadataResponse>;
                        denomOwners(request: _23.QueryDenomOwnersRequest): Promise<_23.QueryDenomOwnersResponse>;
                        sendEnabled(request: _23.QuerySendEnabledRequest): Promise<_23.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _27.ConfigRequest): Promise<_27.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _34.GetNodeInfoRequest): Promise<_34.GetNodeInfoResponse>;
                            getSyncing(request?: _34.GetSyncingRequest): Promise<_34.GetSyncingResponse>;
                            getLatestBlock(request?: _34.GetLatestBlockRequest): Promise<_34.GetLatestBlockResponse>;
                            getBlockByHeight(request: _34.GetBlockByHeightRequest): Promise<_34.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _34.GetLatestValidatorSetRequest): Promise<_34.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _34.GetValidatorSetByHeightRequest): Promise<_34.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _34.ABCIQueryRequest): Promise<_34.ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                        validatorDistributionInfo(request: _55.QueryValidatorDistributionInfoRequest): Promise<_55.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _55.QueryValidatorOutstandingRewardsRequest): Promise<_55.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _55.QueryValidatorCommissionRequest): Promise<_55.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _55.QueryValidatorSlashesRequest): Promise<_55.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _55.QueryDelegationRewardsRequest): Promise<_55.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _55.QueryDelegationTotalRewardsRequest): Promise<_55.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _55.QueryDelegatorValidatorsRequest): Promise<_55.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _55.QueryDelegatorWithdrawAddressRequest): Promise<_55.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _55.QueryCommunityPoolRequest): Promise<_55.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _60.QueryEvidenceRequest): Promise<_60.QueryEvidenceResponse>;
                        allEvidence(request?: _60.QueryAllEvidenceRequest): Promise<_60.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _65.QueryAllowanceRequest): Promise<_65.QueryAllowanceResponse>;
                        allowances(request: _65.QueryAllowancesRequest): Promise<_65.QueryAllowancesResponse>;
                        allowancesByGranter(request: _65.QueryAllowancesByGranterRequest): Promise<_65.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _72.QueryProposalRequest): Promise<_72.QueryProposalResponse>;
                        proposals(request: _72.QueryProposalsRequest): Promise<_72.QueryProposalsResponse>;
                        vote(request: _72.QueryVoteRequest): Promise<_72.QueryVoteResponse>;
                        votes(request: _72.QueryVotesRequest): Promise<_72.QueryVotesResponse>;
                        params(request: _72.QueryParamsRequest): Promise<_72.QueryParamsResponse>;
                        deposit(request: _72.QueryDepositRequest): Promise<_72.QueryDepositResponse>;
                        deposits(request: _72.QueryDepositsRequest): Promise<_72.QueryDepositsResponse>;
                        tallyResult(request: _72.QueryTallyResultRequest): Promise<_72.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _76.QueryProposalRequest): Promise<_76.QueryProposalResponse>;
                        proposals(request: _76.QueryProposalsRequest): Promise<_76.QueryProposalsResponse>;
                        vote(request: _76.QueryVoteRequest): Promise<_76.QueryVoteResponse>;
                        votes(request: _76.QueryVotesRequest): Promise<_76.QueryVotesResponse>;
                        params(request: _76.QueryParamsRequest): Promise<_76.QueryParamsResponse>;
                        deposit(request: _76.QueryDepositRequest): Promise<_76.QueryDepositResponse>;
                        deposits(request: _76.QueryDepositsRequest): Promise<_76.QueryDepositsResponse>;
                        tallyResult(request: _76.QueryTallyResultRequest): Promise<_76.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _81.QueryGroupInfoRequest): Promise<_81.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _81.QueryGroupPolicyInfoRequest): Promise<_81.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _81.QueryGroupMembersRequest): Promise<_81.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _81.QueryGroupsByAdminRequest): Promise<_81.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _81.QueryGroupPoliciesByGroupRequest): Promise<_81.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _81.QueryGroupPoliciesByAdminRequest): Promise<_81.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _81.QueryProposalRequest): Promise<_81.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _81.QueryProposalsByGroupPolicyRequest): Promise<_81.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _81.QueryVoteByProposalVoterRequest): Promise<_81.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _81.QueryVotesByProposalRequest): Promise<_81.QueryVotesByProposalResponse>;
                        votesByVoter(request: _81.QueryVotesByVoterRequest): Promise<_81.QueryVotesByVoterResponse>;
                        groupsByMember(request: _81.QueryGroupsByMemberRequest): Promise<_81.QueryGroupsByMemberResponse>;
                        tallyResult(request: _81.QueryTallyResultRequest): Promise<_81.QueryTallyResultResponse>;
                        groups(request?: _81.QueryGroupsRequest): Promise<_81.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _88.QueryParamsRequest): Promise<_88.QueryParamsResponse>;
                        inflation(request?: _88.QueryInflationRequest): Promise<_88.QueryInflationResponse>;
                        annualProvisions(request?: _88.QueryAnnualProvisionsRequest): Promise<_88.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _95.QueryBalanceRequest): Promise<_95.QueryBalanceResponse>;
                        owner(request: _95.QueryOwnerRequest): Promise<_95.QueryOwnerResponse>;
                        supply(request: _95.QuerySupplyRequest): Promise<_95.QuerySupplyResponse>;
                        nFTs(request: _95.QueryNFTsRequest): Promise<_95.QueryNFTsResponse>;
                        nFT(request: _95.QueryNFTRequest): Promise<_95.QueryNFTResponse>;
                        class(request: _95.QueryClassRequest): Promise<_95.QueryClassResponse>;
                        classes(request?: _95.QueryClassesRequest): Promise<_95.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _98.GetRequest): Promise<_98.GetResponse>;
                            list(request: _98.ListRequest): Promise<_98.ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                        subspaces(request?: _103.QuerySubspacesRequest): Promise<_103.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _108.QueryParamsRequest): Promise<_108.QueryParamsResponse>;
                        signingInfo(request: _108.QuerySigningInfoRequest): Promise<_108.QuerySigningInfoResponse>;
                        signingInfos(request?: _108.QuerySigningInfosRequest): Promise<_108.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _114.QueryValidatorsRequest): Promise<_114.QueryValidatorsResponse>;
                        validator(request: _114.QueryValidatorRequest): Promise<_114.QueryValidatorResponse>;
                        validatorDelegations(request: _114.QueryValidatorDelegationsRequest): Promise<_114.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _114.QueryValidatorUnbondingDelegationsRequest): Promise<_114.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _114.QueryDelegationRequest): Promise<_114.QueryDelegationResponse>;
                        unbondingDelegation(request: _114.QueryUnbondingDelegationRequest): Promise<_114.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _114.QueryDelegatorDelegationsRequest): Promise<_114.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _114.QueryDelegatorUnbondingDelegationsRequest): Promise<_114.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _114.QueryRedelegationsRequest): Promise<_114.QueryRedelegationsResponse>;
                        delegatorValidators(request: _114.QueryDelegatorValidatorsRequest): Promise<_114.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _114.QueryDelegatorValidatorRequest): Promise<_114.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _114.QueryHistoricalInfoRequest): Promise<_114.QueryHistoricalInfoResponse>;
                        pool(request?: _114.QueryPoolRequest): Promise<_114.QueryPoolResponse>;
                        params(request?: _114.QueryParamsRequest): Promise<_114.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _119.SimulateRequest): Promise<_119.SimulateResponse>;
                        getTx(request: _119.GetTxRequest): Promise<_119.GetTxResponse>;
                        broadcastTx(request: _119.BroadcastTxRequest): Promise<_119.BroadcastTxResponse>;
                        getTxsEvent(request: _119.GetTxsEventRequest): Promise<_119.GetTxsEventResponse>;
                        getBlockWithTxs(request: _119.GetBlockWithTxsRequest): Promise<_119.GetBlockWithTxsResponse>;
                        txDecode(request: _119.TxDecodeRequest): Promise<_119.TxDecodeResponse>;
                        txEncode(request: _119.TxEncodeRequest): Promise<_119.TxEncodeResponse>;
                        txEncodeAmino(request: _119.TxEncodeAminoRequest): Promise<_119.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _119.TxDecodeAminoRequest): Promise<_119.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _122.QueryCurrentPlanRequest): Promise<_122.QueryCurrentPlanResponse>;
                        appliedPlan(request: _122.QueryAppliedPlanRequest): Promise<_122.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _122.QueryUpgradedConsensusStateRequest): Promise<_122.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _122.QueryModuleVersionsRequest): Promise<_122.QueryModuleVersionsResponse>;
                        authority(request?: _122.QueryAuthorityRequest): Promise<_122.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
