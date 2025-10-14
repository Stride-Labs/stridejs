import * as _200 from "./airdrop/airdrop";
import * as _201 from "./airdrop/genesis";
import * as _202 from "./airdrop/query";
import * as _203 from "./airdrop/tx";
import * as _204 from "./auction/auction";
import * as _205 from "./auction/genesis";
import * as _206 from "./auction/query";
import * as _207 from "./auction/tx";
import * as _208 from "./autopilot/genesis";
import * as _209 from "./autopilot/params";
import * as _210 from "./autopilot/query";
import * as _211 from "./claim/claim";
import * as _212 from "./claim/genesis";
import * as _213 from "./claim/params";
import * as _214 from "./claim/query";
import * as _215 from "./claim/tx";
import * as _216 from "./epochs/genesis";
import * as _217 from "./epochs/query";
import * as _218 from "./icacallbacks/callback_data";
import * as _219 from "./icacallbacks/genesis";
import * as _220 from "./icacallbacks/packet";
import * as _221 from "./icacallbacks/params";
import * as _222 from "./icacallbacks/query";
import * as _223 from "./icaoracle/callbacks";
import * as _224 from "./icaoracle/contract";
import * as _225 from "./icaoracle/genesis";
import * as _226 from "./icaoracle/icaoracle";
import * as _227 from "./icaoracle/query";
import * as _228 from "./icaoracle/tx";
import * as _229 from "./icqoracle/genesis";
import * as _230 from "./icqoracle/icqoracle";
import * as _231 from "./icqoracle/query";
import * as _232 from "./icqoracle/tx";
import * as _233 from "./interchainquery/v1/genesis";
import * as _234 from "./interchainquery/v1/query";
import * as _235 from "./interchainquery/v1/tx";
import * as _236 from "./mint/v1beta1/genesis";
import * as _237 from "./mint/v1beta1/mint";
import * as _238 from "./mint/v1beta1/query";
import * as _239 from "./records/callbacks";
import * as _240 from "./records/genesis";
import * as _241 from "./records/params";
import * as _242 from "./records/query";
import * as _243 from "./records/records";
import * as _244 from "./stakedym/genesis";
import * as _245 from "./stakedym/query";
import * as _246 from "./stakedym/stakedym";
import * as _247 from "./stakedym/tx";
import * as _248 from "./stakeibc/address_unbonding";
import * as _249 from "./stakeibc/callbacks";
import * as _250 from "./stakeibc/epoch_tracker";
import * as _251 from "./stakeibc/genesis";
import * as _252 from "./stakeibc/gov";
import * as _253 from "./stakeibc/host_zone";
import * as _254 from "./stakeibc/ica_account";
import * as _255 from "./stakeibc/packet";
import * as _256 from "./stakeibc/params";
import * as _257 from "./stakeibc/query";
import * as _258 from "./stakeibc/trade_route";
import * as _259 from "./stakeibc/tx";
import * as _260 from "./stakeibc/validator";
import * as _261 from "./staketia/genesis";
import * as _262 from "./staketia/query";
import * as _263 from "./staketia/staketia";
import * as _264 from "./staketia/tx";
import * as _265 from "./strdburner/genesis";
import * as _266 from "./strdburner/query";
import * as _267 from "./strdburner/tx";
import * as _268 from "./vesting/vesting";
import * as _417 from "./airdrop/query.rpc.Query";
import * as _418 from "./auction/query.rpc.Query";
import * as _419 from "./autopilot/query.rpc.Query";
import * as _420 from "./claim/query.rpc.Query";
import * as _421 from "./epochs/query.rpc.Query";
import * as _422 from "./icacallbacks/query.rpc.Query";
import * as _423 from "./icaoracle/query.rpc.Query";
import * as _424 from "./icqoracle/query.rpc.Query";
import * as _425 from "./mint/v1beta1/query.rpc.Query";
import * as _426 from "./records/query.rpc.Query";
import * as _427 from "./stakedym/query.rpc.Query";
import * as _428 from "./stakeibc/query.rpc.Query";
import * as _429 from "./staketia/query.rpc.Query";
import * as _430 from "./strdburner/query.rpc.Query";
import * as _431 from "./airdrop/tx.rpc.msg";
import * as _432 from "./auction/tx.rpc.msg";
import * as _433 from "./claim/tx.rpc.msg";
import * as _434 from "./icaoracle/tx.rpc.msg";
import * as _435 from "./icqoracle/tx.rpc.msg";
import * as _436 from "./interchainquery/v1/tx.rpc.msg";
import * as _437 from "./stakedym/tx.rpc.msg";
import * as _438 from "./stakeibc/tx.rpc.msg";
import * as _439 from "./staketia/tx.rpc.msg";
import * as _440 from "./strdburner/tx.rpc.msg";
export declare namespace stride {
    const airdrop: {
        MsgClientImpl: typeof _431.MsgClientImpl;
        QueryClientImpl: typeof _417.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            airdrop(request: _202.QueryAirdropRequest): Promise<_202.QueryAirdropResponse>;
            allAirdrops(request?: _202.QueryAllAirdropsRequest): Promise<_202.QueryAllAirdropsResponse>;
            userAllocation(request: _202.QueryUserAllocationRequest): Promise<_202.QueryUserAllocationResponse>;
            userAllocations(request: _202.QueryUserAllocationsRequest): Promise<_202.QueryUserAllocationsResponse>;
            allAllocations(request: _202.QueryAllAllocationsRequest): Promise<_202.QueryAllAllocationsResponse>;
            userSummary(request: _202.QueryUserSummaryRequest): Promise<_202.QueryUserSummaryResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                claimDaily(value: _203.MsgClaimDaily): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimEarly(value: _203.MsgClaimEarly): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAirdrop(value: _203.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateAirdrop(value: _203.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addAllocations(value: _203.MsgAddAllocations): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateUserAllocation(value: _203.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                linkAddresses(value: _203.MsgLinkAddresses): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                claimDaily(value: _203.MsgClaimDaily): {
                    typeUrl: string;
                    value: _203.MsgClaimDaily;
                };
                claimEarly(value: _203.MsgClaimEarly): {
                    typeUrl: string;
                    value: _203.MsgClaimEarly;
                };
                createAirdrop(value: _203.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _203.MsgCreateAirdrop;
                };
                updateAirdrop(value: _203.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: _203.MsgUpdateAirdrop;
                };
                addAllocations(value: _203.MsgAddAllocations): {
                    typeUrl: string;
                    value: _203.MsgAddAllocations;
                };
                updateUserAllocation(value: _203.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: _203.MsgUpdateUserAllocation;
                };
                linkAddresses(value: _203.MsgLinkAddresses): {
                    typeUrl: string;
                    value: _203.MsgLinkAddresses;
                };
            };
            fromPartial: {
                claimDaily(value: _203.MsgClaimDaily): {
                    typeUrl: string;
                    value: _203.MsgClaimDaily;
                };
                claimEarly(value: _203.MsgClaimEarly): {
                    typeUrl: string;
                    value: _203.MsgClaimEarly;
                };
                createAirdrop(value: _203.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _203.MsgCreateAirdrop;
                };
                updateAirdrop(value: _203.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: _203.MsgUpdateAirdrop;
                };
                addAllocations(value: _203.MsgAddAllocations): {
                    typeUrl: string;
                    value: _203.MsgAddAllocations;
                };
                updateUserAllocation(value: _203.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: _203.MsgUpdateUserAllocation;
                };
                linkAddresses(value: _203.MsgLinkAddresses): {
                    typeUrl: string;
                    value: _203.MsgLinkAddresses;
                };
            };
        };
        AminoConverter: {
            "/stride.airdrop.MsgClaimDaily": {
                aminoType: string;
                toAmino: (message: _203.MsgClaimDaily) => _203.MsgClaimDailyAmino;
                fromAmino: (object: _203.MsgClaimDailyAmino) => _203.MsgClaimDaily;
            };
            "/stride.airdrop.MsgClaimEarly": {
                aminoType: string;
                toAmino: (message: _203.MsgClaimEarly) => _203.MsgClaimEarlyAmino;
                fromAmino: (object: _203.MsgClaimEarlyAmino) => _203.MsgClaimEarly;
            };
            "/stride.airdrop.MsgCreateAirdrop": {
                aminoType: string;
                toAmino: (message: _203.MsgCreateAirdrop) => _203.MsgCreateAirdropAmino;
                fromAmino: (object: _203.MsgCreateAirdropAmino) => _203.MsgCreateAirdrop;
            };
            "/stride.airdrop.MsgUpdateAirdrop": {
                aminoType: string;
                toAmino: (message: _203.MsgUpdateAirdrop) => _203.MsgUpdateAirdropAmino;
                fromAmino: (object: _203.MsgUpdateAirdropAmino) => _203.MsgUpdateAirdrop;
            };
            "/stride.airdrop.MsgAddAllocations": {
                aminoType: string;
                toAmino: (message: _203.MsgAddAllocations) => _203.MsgAddAllocationsAmino;
                fromAmino: (object: _203.MsgAddAllocationsAmino) => _203.MsgAddAllocations;
            };
            "/stride.airdrop.MsgUpdateUserAllocation": {
                aminoType: string;
                toAmino: (message: _203.MsgUpdateUserAllocation) => _203.MsgUpdateUserAllocationAmino;
                fromAmino: (object: _203.MsgUpdateUserAllocationAmino) => _203.MsgUpdateUserAllocation;
            };
            "/stride.airdrop.MsgLinkAddresses": {
                aminoType: string;
                toAmino: (message: _203.MsgLinkAddresses) => _203.MsgLinkAddressesAmino;
                fromAmino: (object: _203.MsgLinkAddressesAmino) => _203.MsgLinkAddresses;
            };
        };
        MsgClaimDaily: {
            typeUrl: string;
            encode(message: _203.MsgClaimDaily, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgClaimDaily;
            fromPartial(object: Partial<_203.MsgClaimDaily>): _203.MsgClaimDaily;
            fromAmino(object: _203.MsgClaimDailyAmino): _203.MsgClaimDaily;
            toAmino(message: _203.MsgClaimDaily): _203.MsgClaimDailyAmino;
            fromAminoMsg(object: _203.MsgClaimDailyAminoMsg): _203.MsgClaimDaily;
            toAminoMsg(message: _203.MsgClaimDaily): _203.MsgClaimDailyAminoMsg;
            fromProtoMsg(message: _203.MsgClaimDailyProtoMsg): _203.MsgClaimDaily;
            toProto(message: _203.MsgClaimDaily): Uint8Array;
            toProtoMsg(message: _203.MsgClaimDaily): _203.MsgClaimDailyProtoMsg;
        };
        MsgClaimDailyResponse: {
            typeUrl: string;
            encode(_: _203.MsgClaimDailyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgClaimDailyResponse;
            fromPartial(_: Partial<_203.MsgClaimDailyResponse>): _203.MsgClaimDailyResponse;
            fromAmino(_: _203.MsgClaimDailyResponseAmino): _203.MsgClaimDailyResponse;
            toAmino(_: _203.MsgClaimDailyResponse): _203.MsgClaimDailyResponseAmino;
            fromAminoMsg(object: _203.MsgClaimDailyResponseAminoMsg): _203.MsgClaimDailyResponse;
            fromProtoMsg(message: _203.MsgClaimDailyResponseProtoMsg): _203.MsgClaimDailyResponse;
            toProto(message: _203.MsgClaimDailyResponse): Uint8Array;
            toProtoMsg(message: _203.MsgClaimDailyResponse): _203.MsgClaimDailyResponseProtoMsg;
        };
        MsgClaimEarly: {
            typeUrl: string;
            encode(message: _203.MsgClaimEarly, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgClaimEarly;
            fromPartial(object: Partial<_203.MsgClaimEarly>): _203.MsgClaimEarly;
            fromAmino(object: _203.MsgClaimEarlyAmino): _203.MsgClaimEarly;
            toAmino(message: _203.MsgClaimEarly): _203.MsgClaimEarlyAmino;
            fromAminoMsg(object: _203.MsgClaimEarlyAminoMsg): _203.MsgClaimEarly;
            toAminoMsg(message: _203.MsgClaimEarly): _203.MsgClaimEarlyAminoMsg;
            fromProtoMsg(message: _203.MsgClaimEarlyProtoMsg): _203.MsgClaimEarly;
            toProto(message: _203.MsgClaimEarly): Uint8Array;
            toProtoMsg(message: _203.MsgClaimEarly): _203.MsgClaimEarlyProtoMsg;
        };
        MsgClaimEarlyResponse: {
            typeUrl: string;
            encode(_: _203.MsgClaimEarlyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgClaimEarlyResponse;
            fromPartial(_: Partial<_203.MsgClaimEarlyResponse>): _203.MsgClaimEarlyResponse;
            fromAmino(_: _203.MsgClaimEarlyResponseAmino): _203.MsgClaimEarlyResponse;
            toAmino(_: _203.MsgClaimEarlyResponse): _203.MsgClaimEarlyResponseAmino;
            fromAminoMsg(object: _203.MsgClaimEarlyResponseAminoMsg): _203.MsgClaimEarlyResponse;
            fromProtoMsg(message: _203.MsgClaimEarlyResponseProtoMsg): _203.MsgClaimEarlyResponse;
            toProto(message: _203.MsgClaimEarlyResponse): Uint8Array;
            toProtoMsg(message: _203.MsgClaimEarlyResponse): _203.MsgClaimEarlyResponseProtoMsg;
        };
        MsgCreateAirdrop: {
            typeUrl: string;
            encode(message: _203.MsgCreateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgCreateAirdrop;
            fromPartial(object: Partial<_203.MsgCreateAirdrop>): _203.MsgCreateAirdrop;
            fromAmino(object: _203.MsgCreateAirdropAmino): _203.MsgCreateAirdrop;
            toAmino(message: _203.MsgCreateAirdrop): _203.MsgCreateAirdropAmino;
            fromAminoMsg(object: _203.MsgCreateAirdropAminoMsg): _203.MsgCreateAirdrop;
            toAminoMsg(message: _203.MsgCreateAirdrop): _203.MsgCreateAirdropAminoMsg;
            fromProtoMsg(message: _203.MsgCreateAirdropProtoMsg): _203.MsgCreateAirdrop;
            toProto(message: _203.MsgCreateAirdrop): Uint8Array;
            toProtoMsg(message: _203.MsgCreateAirdrop): _203.MsgCreateAirdropProtoMsg;
        };
        MsgCreateAirdropResponse: {
            typeUrl: string;
            encode(_: _203.MsgCreateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgCreateAirdropResponse;
            fromPartial(_: Partial<_203.MsgCreateAirdropResponse>): _203.MsgCreateAirdropResponse;
            fromAmino(_: _203.MsgCreateAirdropResponseAmino): _203.MsgCreateAirdropResponse;
            toAmino(_: _203.MsgCreateAirdropResponse): _203.MsgCreateAirdropResponseAmino;
            fromAminoMsg(object: _203.MsgCreateAirdropResponseAminoMsg): _203.MsgCreateAirdropResponse;
            fromProtoMsg(message: _203.MsgCreateAirdropResponseProtoMsg): _203.MsgCreateAirdropResponse;
            toProto(message: _203.MsgCreateAirdropResponse): Uint8Array;
            toProtoMsg(message: _203.MsgCreateAirdropResponse): _203.MsgCreateAirdropResponseProtoMsg;
        };
        MsgUpdateAirdrop: {
            typeUrl: string;
            encode(message: _203.MsgUpdateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgUpdateAirdrop;
            fromPartial(object: Partial<_203.MsgUpdateAirdrop>): _203.MsgUpdateAirdrop;
            fromAmino(object: _203.MsgUpdateAirdropAmino): _203.MsgUpdateAirdrop;
            toAmino(message: _203.MsgUpdateAirdrop): _203.MsgUpdateAirdropAmino;
            fromAminoMsg(object: _203.MsgUpdateAirdropAminoMsg): _203.MsgUpdateAirdrop;
            toAminoMsg(message: _203.MsgUpdateAirdrop): _203.MsgUpdateAirdropAminoMsg;
            fromProtoMsg(message: _203.MsgUpdateAirdropProtoMsg): _203.MsgUpdateAirdrop;
            toProto(message: _203.MsgUpdateAirdrop): Uint8Array;
            toProtoMsg(message: _203.MsgUpdateAirdrop): _203.MsgUpdateAirdropProtoMsg;
        };
        MsgUpdateAirdropResponse: {
            typeUrl: string;
            encode(_: _203.MsgUpdateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgUpdateAirdropResponse;
            fromPartial(_: Partial<_203.MsgUpdateAirdropResponse>): _203.MsgUpdateAirdropResponse;
            fromAmino(_: _203.MsgUpdateAirdropResponseAmino): _203.MsgUpdateAirdropResponse;
            toAmino(_: _203.MsgUpdateAirdropResponse): _203.MsgUpdateAirdropResponseAmino;
            fromAminoMsg(object: _203.MsgUpdateAirdropResponseAminoMsg): _203.MsgUpdateAirdropResponse;
            fromProtoMsg(message: _203.MsgUpdateAirdropResponseProtoMsg): _203.MsgUpdateAirdropResponse;
            toProto(message: _203.MsgUpdateAirdropResponse): Uint8Array;
            toProtoMsg(message: _203.MsgUpdateAirdropResponse): _203.MsgUpdateAirdropResponseProtoMsg;
        };
        RawAllocation: {
            typeUrl: string;
            encode(message: _203.RawAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.RawAllocation;
            fromPartial(object: Partial<_203.RawAllocation>): _203.RawAllocation;
            fromAmino(object: _203.RawAllocationAmino): _203.RawAllocation;
            toAmino(message: _203.RawAllocation): _203.RawAllocationAmino;
            fromAminoMsg(object: _203.RawAllocationAminoMsg): _203.RawAllocation;
            fromProtoMsg(message: _203.RawAllocationProtoMsg): _203.RawAllocation;
            toProto(message: _203.RawAllocation): Uint8Array;
            toProtoMsg(message: _203.RawAllocation): _203.RawAllocationProtoMsg;
        };
        MsgAddAllocations: {
            typeUrl: string;
            encode(message: _203.MsgAddAllocations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgAddAllocations;
            fromPartial(object: Partial<_203.MsgAddAllocations>): _203.MsgAddAllocations;
            fromAmino(object: _203.MsgAddAllocationsAmino): _203.MsgAddAllocations;
            toAmino(message: _203.MsgAddAllocations): _203.MsgAddAllocationsAmino;
            fromAminoMsg(object: _203.MsgAddAllocationsAminoMsg): _203.MsgAddAllocations;
            toAminoMsg(message: _203.MsgAddAllocations): _203.MsgAddAllocationsAminoMsg;
            fromProtoMsg(message: _203.MsgAddAllocationsProtoMsg): _203.MsgAddAllocations;
            toProto(message: _203.MsgAddAllocations): Uint8Array;
            toProtoMsg(message: _203.MsgAddAllocations): _203.MsgAddAllocationsProtoMsg;
        };
        MsgAddAllocationsResponse: {
            typeUrl: string;
            encode(_: _203.MsgAddAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgAddAllocationsResponse;
            fromPartial(_: Partial<_203.MsgAddAllocationsResponse>): _203.MsgAddAllocationsResponse;
            fromAmino(_: _203.MsgAddAllocationsResponseAmino): _203.MsgAddAllocationsResponse;
            toAmino(_: _203.MsgAddAllocationsResponse): _203.MsgAddAllocationsResponseAmino;
            fromAminoMsg(object: _203.MsgAddAllocationsResponseAminoMsg): _203.MsgAddAllocationsResponse;
            fromProtoMsg(message: _203.MsgAddAllocationsResponseProtoMsg): _203.MsgAddAllocationsResponse;
            toProto(message: _203.MsgAddAllocationsResponse): Uint8Array;
            toProtoMsg(message: _203.MsgAddAllocationsResponse): _203.MsgAddAllocationsResponseProtoMsg;
        };
        MsgUpdateUserAllocation: {
            typeUrl: string;
            encode(message: _203.MsgUpdateUserAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgUpdateUserAllocation;
            fromPartial(object: Partial<_203.MsgUpdateUserAllocation>): _203.MsgUpdateUserAllocation;
            fromAmino(object: _203.MsgUpdateUserAllocationAmino): _203.MsgUpdateUserAllocation;
            toAmino(message: _203.MsgUpdateUserAllocation): _203.MsgUpdateUserAllocationAmino;
            fromAminoMsg(object: _203.MsgUpdateUserAllocationAminoMsg): _203.MsgUpdateUserAllocation;
            toAminoMsg(message: _203.MsgUpdateUserAllocation): _203.MsgUpdateUserAllocationAminoMsg;
            fromProtoMsg(message: _203.MsgUpdateUserAllocationProtoMsg): _203.MsgUpdateUserAllocation;
            toProto(message: _203.MsgUpdateUserAllocation): Uint8Array;
            toProtoMsg(message: _203.MsgUpdateUserAllocation): _203.MsgUpdateUserAllocationProtoMsg;
        };
        MsgUpdateUserAllocationResponse: {
            typeUrl: string;
            encode(_: _203.MsgUpdateUserAllocationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgUpdateUserAllocationResponse;
            fromPartial(_: Partial<_203.MsgUpdateUserAllocationResponse>): _203.MsgUpdateUserAllocationResponse;
            fromAmino(_: _203.MsgUpdateUserAllocationResponseAmino): _203.MsgUpdateUserAllocationResponse;
            toAmino(_: _203.MsgUpdateUserAllocationResponse): _203.MsgUpdateUserAllocationResponseAmino;
            fromAminoMsg(object: _203.MsgUpdateUserAllocationResponseAminoMsg): _203.MsgUpdateUserAllocationResponse;
            fromProtoMsg(message: _203.MsgUpdateUserAllocationResponseProtoMsg): _203.MsgUpdateUserAllocationResponse;
            toProto(message: _203.MsgUpdateUserAllocationResponse): Uint8Array;
            toProtoMsg(message: _203.MsgUpdateUserAllocationResponse): _203.MsgUpdateUserAllocationResponseProtoMsg;
        };
        MsgLinkAddresses: {
            typeUrl: string;
            encode(message: _203.MsgLinkAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgLinkAddresses;
            fromPartial(object: Partial<_203.MsgLinkAddresses>): _203.MsgLinkAddresses;
            fromAmino(object: _203.MsgLinkAddressesAmino): _203.MsgLinkAddresses;
            toAmino(message: _203.MsgLinkAddresses): _203.MsgLinkAddressesAmino;
            fromAminoMsg(object: _203.MsgLinkAddressesAminoMsg): _203.MsgLinkAddresses;
            toAminoMsg(message: _203.MsgLinkAddresses): _203.MsgLinkAddressesAminoMsg;
            fromProtoMsg(message: _203.MsgLinkAddressesProtoMsg): _203.MsgLinkAddresses;
            toProto(message: _203.MsgLinkAddresses): Uint8Array;
            toProtoMsg(message: _203.MsgLinkAddresses): _203.MsgLinkAddressesProtoMsg;
        };
        MsgLinkAddressesResponse: {
            typeUrl: string;
            encode(_: _203.MsgLinkAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgLinkAddressesResponse;
            fromPartial(_: Partial<_203.MsgLinkAddressesResponse>): _203.MsgLinkAddressesResponse;
            fromAmino(_: _203.MsgLinkAddressesResponseAmino): _203.MsgLinkAddressesResponse;
            toAmino(_: _203.MsgLinkAddressesResponse): _203.MsgLinkAddressesResponseAmino;
            fromAminoMsg(object: _203.MsgLinkAddressesResponseAminoMsg): _203.MsgLinkAddressesResponse;
            fromProtoMsg(message: _203.MsgLinkAddressesResponseProtoMsg): _203.MsgLinkAddressesResponse;
            toProto(message: _203.MsgLinkAddressesResponse): Uint8Array;
            toProtoMsg(message: _203.MsgLinkAddressesResponse): _203.MsgLinkAddressesResponseProtoMsg;
        };
        QueryAirdropRequest: {
            typeUrl: string;
            encode(message: _202.QueryAirdropRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.QueryAirdropRequest;
            fromPartial(object: Partial<_202.QueryAirdropRequest>): _202.QueryAirdropRequest;
            fromAmino(object: _202.QueryAirdropRequestAmino): _202.QueryAirdropRequest;
            toAmino(message: _202.QueryAirdropRequest): _202.QueryAirdropRequestAmino;
            fromAminoMsg(object: _202.QueryAirdropRequestAminoMsg): _202.QueryAirdropRequest;
            fromProtoMsg(message: _202.QueryAirdropRequestProtoMsg): _202.QueryAirdropRequest;
            toProto(message: _202.QueryAirdropRequest): Uint8Array;
            toProtoMsg(message: _202.QueryAirdropRequest): _202.QueryAirdropRequestProtoMsg;
        };
        QueryAirdropResponse: {
            typeUrl: string;
            encode(message: _202.QueryAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.QueryAirdropResponse;
            fromPartial(object: Partial<_202.QueryAirdropResponse>): _202.QueryAirdropResponse;
            fromAmino(object: _202.QueryAirdropResponseAmino): _202.QueryAirdropResponse;
            toAmino(message: _202.QueryAirdropResponse): _202.QueryAirdropResponseAmino;
            fromAminoMsg(object: _202.QueryAirdropResponseAminoMsg): _202.QueryAirdropResponse;
            fromProtoMsg(message: _202.QueryAirdropResponseProtoMsg): _202.QueryAirdropResponse;
            toProto(message: _202.QueryAirdropResponse): Uint8Array;
            toProtoMsg(message: _202.QueryAirdropResponse): _202.QueryAirdropResponseProtoMsg;
        };
        QueryAllAirdropsRequest: {
            typeUrl: string;
            encode(_: _202.QueryAllAirdropsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.QueryAllAirdropsRequest;
            fromPartial(_: Partial<_202.QueryAllAirdropsRequest>): _202.QueryAllAirdropsRequest;
            fromAmino(_: _202.QueryAllAirdropsRequestAmino): _202.QueryAllAirdropsRequest;
            toAmino(_: _202.QueryAllAirdropsRequest): _202.QueryAllAirdropsRequestAmino;
            fromAminoMsg(object: _202.QueryAllAirdropsRequestAminoMsg): _202.QueryAllAirdropsRequest;
            fromProtoMsg(message: _202.QueryAllAirdropsRequestProtoMsg): _202.QueryAllAirdropsRequest;
            toProto(message: _202.QueryAllAirdropsRequest): Uint8Array;
            toProtoMsg(message: _202.QueryAllAirdropsRequest): _202.QueryAllAirdropsRequestProtoMsg;
        };
        QueryAllAirdropsResponse: {
            typeUrl: string;
            encode(message: _202.QueryAllAirdropsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.QueryAllAirdropsResponse;
            fromPartial(object: Partial<_202.QueryAllAirdropsResponse>): _202.QueryAllAirdropsResponse;
            fromAmino(object: _202.QueryAllAirdropsResponseAmino): _202.QueryAllAirdropsResponse;
            toAmino(message: _202.QueryAllAirdropsResponse): _202.QueryAllAirdropsResponseAmino;
            fromAminoMsg(object: _202.QueryAllAirdropsResponseAminoMsg): _202.QueryAllAirdropsResponse;
            fromProtoMsg(message: _202.QueryAllAirdropsResponseProtoMsg): _202.QueryAllAirdropsResponse;
            toProto(message: _202.QueryAllAirdropsResponse): Uint8Array;
            toProtoMsg(message: _202.QueryAllAirdropsResponse): _202.QueryAllAirdropsResponseProtoMsg;
        };
        QueryUserAllocationRequest: {
            typeUrl: string;
            encode(message: _202.QueryUserAllocationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.QueryUserAllocationRequest;
            fromPartial(object: Partial<_202.QueryUserAllocationRequest>): _202.QueryUserAllocationRequest;
            fromAmino(object: _202.QueryUserAllocationRequestAmino): _202.QueryUserAllocationRequest;
            toAmino(message: _202.QueryUserAllocationRequest): _202.QueryUserAllocationRequestAmino;
            fromAminoMsg(object: _202.QueryUserAllocationRequestAminoMsg): _202.QueryUserAllocationRequest;
            fromProtoMsg(message: _202.QueryUserAllocationRequestProtoMsg): _202.QueryUserAllocationRequest;
            toProto(message: _202.QueryUserAllocationRequest): Uint8Array;
            toProtoMsg(message: _202.QueryUserAllocationRequest): _202.QueryUserAllocationRequestProtoMsg;
        };
        QueryUserAllocationResponse: {
            typeUrl: string;
            encode(message: _202.QueryUserAllocationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.QueryUserAllocationResponse;
            fromPartial(object: Partial<_202.QueryUserAllocationResponse>): _202.QueryUserAllocationResponse;
            fromAmino(object: _202.QueryUserAllocationResponseAmino): _202.QueryUserAllocationResponse;
            toAmino(message: _202.QueryUserAllocationResponse): _202.QueryUserAllocationResponseAmino;
            fromAminoMsg(object: _202.QueryUserAllocationResponseAminoMsg): _202.QueryUserAllocationResponse;
            fromProtoMsg(message: _202.QueryUserAllocationResponseProtoMsg): _202.QueryUserAllocationResponse;
            toProto(message: _202.QueryUserAllocationResponse): Uint8Array;
            toProtoMsg(message: _202.QueryUserAllocationResponse): _202.QueryUserAllocationResponseProtoMsg;
        };
        QueryUserAllocationsRequest: {
            typeUrl: string;
            encode(message: _202.QueryUserAllocationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.QueryUserAllocationsRequest;
            fromPartial(object: Partial<_202.QueryUserAllocationsRequest>): _202.QueryUserAllocationsRequest;
            fromAmino(object: _202.QueryUserAllocationsRequestAmino): _202.QueryUserAllocationsRequest;
            toAmino(message: _202.QueryUserAllocationsRequest): _202.QueryUserAllocationsRequestAmino;
            fromAminoMsg(object: _202.QueryUserAllocationsRequestAminoMsg): _202.QueryUserAllocationsRequest;
            fromProtoMsg(message: _202.QueryUserAllocationsRequestProtoMsg): _202.QueryUserAllocationsRequest;
            toProto(message: _202.QueryUserAllocationsRequest): Uint8Array;
            toProtoMsg(message: _202.QueryUserAllocationsRequest): _202.QueryUserAllocationsRequestProtoMsg;
        };
        QueryUserAllocationsResponse: {
            typeUrl: string;
            encode(message: _202.QueryUserAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.QueryUserAllocationsResponse;
            fromPartial(object: Partial<_202.QueryUserAllocationsResponse>): _202.QueryUserAllocationsResponse;
            fromAmino(object: _202.QueryUserAllocationsResponseAmino): _202.QueryUserAllocationsResponse;
            toAmino(message: _202.QueryUserAllocationsResponse): _202.QueryUserAllocationsResponseAmino;
            fromAminoMsg(object: _202.QueryUserAllocationsResponseAminoMsg): _202.QueryUserAllocationsResponse;
            fromProtoMsg(message: _202.QueryUserAllocationsResponseProtoMsg): _202.QueryUserAllocationsResponse;
            toProto(message: _202.QueryUserAllocationsResponse): Uint8Array;
            toProtoMsg(message: _202.QueryUserAllocationsResponse): _202.QueryUserAllocationsResponseProtoMsg;
        };
        QueryAllAllocationsRequest: {
            typeUrl: string;
            encode(message: _202.QueryAllAllocationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.QueryAllAllocationsRequest;
            fromPartial(object: Partial<_202.QueryAllAllocationsRequest>): _202.QueryAllAllocationsRequest;
            fromAmino(object: _202.QueryAllAllocationsRequestAmino): _202.QueryAllAllocationsRequest;
            toAmino(message: _202.QueryAllAllocationsRequest): _202.QueryAllAllocationsRequestAmino;
            fromAminoMsg(object: _202.QueryAllAllocationsRequestAminoMsg): _202.QueryAllAllocationsRequest;
            fromProtoMsg(message: _202.QueryAllAllocationsRequestProtoMsg): _202.QueryAllAllocationsRequest;
            toProto(message: _202.QueryAllAllocationsRequest): Uint8Array;
            toProtoMsg(message: _202.QueryAllAllocationsRequest): _202.QueryAllAllocationsRequestProtoMsg;
        };
        QueryAllAllocationsResponse: {
            typeUrl: string;
            encode(message: _202.QueryAllAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.QueryAllAllocationsResponse;
            fromPartial(object: Partial<_202.QueryAllAllocationsResponse>): _202.QueryAllAllocationsResponse;
            fromAmino(object: _202.QueryAllAllocationsResponseAmino): _202.QueryAllAllocationsResponse;
            toAmino(message: _202.QueryAllAllocationsResponse): _202.QueryAllAllocationsResponseAmino;
            fromAminoMsg(object: _202.QueryAllAllocationsResponseAminoMsg): _202.QueryAllAllocationsResponse;
            fromProtoMsg(message: _202.QueryAllAllocationsResponseProtoMsg): _202.QueryAllAllocationsResponse;
            toProto(message: _202.QueryAllAllocationsResponse): Uint8Array;
            toProtoMsg(message: _202.QueryAllAllocationsResponse): _202.QueryAllAllocationsResponseProtoMsg;
        };
        QueryUserSummaryRequest: {
            typeUrl: string;
            encode(message: _202.QueryUserSummaryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.QueryUserSummaryRequest;
            fromPartial(object: Partial<_202.QueryUserSummaryRequest>): _202.QueryUserSummaryRequest;
            fromAmino(object: _202.QueryUserSummaryRequestAmino): _202.QueryUserSummaryRequest;
            toAmino(message: _202.QueryUserSummaryRequest): _202.QueryUserSummaryRequestAmino;
            fromAminoMsg(object: _202.QueryUserSummaryRequestAminoMsg): _202.QueryUserSummaryRequest;
            fromProtoMsg(message: _202.QueryUserSummaryRequestProtoMsg): _202.QueryUserSummaryRequest;
            toProto(message: _202.QueryUserSummaryRequest): Uint8Array;
            toProtoMsg(message: _202.QueryUserSummaryRequest): _202.QueryUserSummaryRequestProtoMsg;
        };
        QueryUserSummaryResponse: {
            typeUrl: string;
            encode(message: _202.QueryUserSummaryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.QueryUserSummaryResponse;
            fromPartial(object: Partial<_202.QueryUserSummaryResponse>): _202.QueryUserSummaryResponse;
            fromAmino(object: _202.QueryUserSummaryResponseAmino): _202.QueryUserSummaryResponse;
            toAmino(message: _202.QueryUserSummaryResponse): _202.QueryUserSummaryResponseAmino;
            fromAminoMsg(object: _202.QueryUserSummaryResponseAminoMsg): _202.QueryUserSummaryResponse;
            fromProtoMsg(message: _202.QueryUserSummaryResponseProtoMsg): _202.QueryUserSummaryResponse;
            toProto(message: _202.QueryUserSummaryResponse): Uint8Array;
            toProtoMsg(message: _202.QueryUserSummaryResponse): _202.QueryUserSummaryResponseProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _201.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.GenesisState;
            fromPartial(object: Partial<_201.GenesisState>): _201.GenesisState;
            fromAmino(object: _201.GenesisStateAmino): _201.GenesisState;
            toAmino(message: _201.GenesisState): _201.GenesisStateAmino;
            fromAminoMsg(object: _201.GenesisStateAminoMsg): _201.GenesisState;
            fromProtoMsg(message: _201.GenesisStateProtoMsg): _201.GenesisState;
            toProto(message: _201.GenesisState): Uint8Array;
            toProtoMsg(message: _201.GenesisState): _201.GenesisStateProtoMsg;
        };
        claimTypeFromJSON(object: any): _200.ClaimType;
        claimTypeToJSON(object: _200.ClaimType): string;
        ClaimType: typeof _200.ClaimType;
        ClaimTypeSDKType: typeof _200.ClaimType;
        ClaimTypeAmino: typeof _200.ClaimType;
        Params: {
            typeUrl: string;
            encode(message: _200.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.Params;
            fromPartial(object: Partial<_200.Params>): _200.Params;
            fromAmino(object: _200.ParamsAmino): _200.Params;
            toAmino(message: _200.Params): _200.ParamsAmino;
            fromAminoMsg(object: _200.ParamsAminoMsg): _200.Params;
            fromProtoMsg(message: _200.ParamsProtoMsg): _200.Params;
            toProto(message: _200.Params): Uint8Array;
            toProtoMsg(message: _200.Params): _200.ParamsProtoMsg;
        };
        UserAllocation: {
            typeUrl: string;
            encode(message: _200.UserAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.UserAllocation;
            fromPartial(object: Partial<_200.UserAllocation>): _200.UserAllocation;
            fromAmino(object: _200.UserAllocationAmino): _200.UserAllocation;
            toAmino(message: _200.UserAllocation): _200.UserAllocationAmino;
            fromAminoMsg(object: _200.UserAllocationAminoMsg): _200.UserAllocation;
            fromProtoMsg(message: _200.UserAllocationProtoMsg): _200.UserAllocation;
            toProto(message: _200.UserAllocation): Uint8Array;
            toProtoMsg(message: _200.UserAllocation): _200.UserAllocationProtoMsg;
        };
        Airdrop: {
            typeUrl: string;
            encode(message: _200.Airdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.Airdrop;
            fromPartial(object: Partial<_200.Airdrop>): _200.Airdrop;
            fromAmino(object: _200.AirdropAmino): _200.Airdrop;
            toAmino(message: _200.Airdrop): _200.AirdropAmino;
            fromAminoMsg(object: _200.AirdropAminoMsg): _200.Airdrop;
            fromProtoMsg(message: _200.AirdropProtoMsg): _200.Airdrop;
            toProto(message: _200.Airdrop): Uint8Array;
            toProtoMsg(message: _200.Airdrop): _200.AirdropProtoMsg;
        };
    };
    const auction: {
        MsgClientImpl: typeof _432.MsgClientImpl;
        QueryClientImpl: typeof _418.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            auction(request: _206.QueryAuctionRequest): Promise<_206.QueryAuctionResponse>;
            auctions(request?: _206.QueryAuctionsRequest): Promise<_206.QueryAuctionsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                placeBid(value: _207.MsgPlaceBid): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAuction(value: _207.MsgCreateAuction): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateAuction(value: _207.MsgUpdateAuction): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                placeBid(value: _207.MsgPlaceBid): {
                    typeUrl: string;
                    value: _207.MsgPlaceBid;
                };
                createAuction(value: _207.MsgCreateAuction): {
                    typeUrl: string;
                    value: _207.MsgCreateAuction;
                };
                updateAuction(value: _207.MsgUpdateAuction): {
                    typeUrl: string;
                    value: _207.MsgUpdateAuction;
                };
            };
            fromPartial: {
                placeBid(value: _207.MsgPlaceBid): {
                    typeUrl: string;
                    value: _207.MsgPlaceBid;
                };
                createAuction(value: _207.MsgCreateAuction): {
                    typeUrl: string;
                    value: _207.MsgCreateAuction;
                };
                updateAuction(value: _207.MsgUpdateAuction): {
                    typeUrl: string;
                    value: _207.MsgUpdateAuction;
                };
            };
        };
        AminoConverter: {
            "/stride.auction.MsgPlaceBid": {
                aminoType: string;
                toAmino: (message: _207.MsgPlaceBid) => _207.MsgPlaceBidAmino;
                fromAmino: (object: _207.MsgPlaceBidAmino) => _207.MsgPlaceBid;
            };
            "/stride.auction.MsgCreateAuction": {
                aminoType: string;
                toAmino: (message: _207.MsgCreateAuction) => _207.MsgCreateAuctionAmino;
                fromAmino: (object: _207.MsgCreateAuctionAmino) => _207.MsgCreateAuction;
            };
            "/stride.auction.MsgUpdateAuction": {
                aminoType: string;
                toAmino: (message: _207.MsgUpdateAuction) => _207.MsgUpdateAuctionAmino;
                fromAmino: (object: _207.MsgUpdateAuctionAmino) => _207.MsgUpdateAuction;
            };
        };
        MsgPlaceBid: {
            typeUrl: string;
            encode(message: _207.MsgPlaceBid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.MsgPlaceBid;
            fromPartial(object: Partial<_207.MsgPlaceBid>): _207.MsgPlaceBid;
            fromAmino(object: _207.MsgPlaceBidAmino): _207.MsgPlaceBid;
            toAmino(message: _207.MsgPlaceBid): _207.MsgPlaceBidAmino;
            fromAminoMsg(object: _207.MsgPlaceBidAminoMsg): _207.MsgPlaceBid;
            toAminoMsg(message: _207.MsgPlaceBid): _207.MsgPlaceBidAminoMsg;
            fromProtoMsg(message: _207.MsgPlaceBidProtoMsg): _207.MsgPlaceBid;
            toProto(message: _207.MsgPlaceBid): Uint8Array;
            toProtoMsg(message: _207.MsgPlaceBid): _207.MsgPlaceBidProtoMsg;
        };
        MsgPlaceBidResponse: {
            typeUrl: string;
            encode(_: _207.MsgPlaceBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.MsgPlaceBidResponse;
            fromPartial(_: Partial<_207.MsgPlaceBidResponse>): _207.MsgPlaceBidResponse;
            fromAmino(_: _207.MsgPlaceBidResponseAmino): _207.MsgPlaceBidResponse;
            toAmino(_: _207.MsgPlaceBidResponse): _207.MsgPlaceBidResponseAmino;
            fromAminoMsg(object: _207.MsgPlaceBidResponseAminoMsg): _207.MsgPlaceBidResponse;
            fromProtoMsg(message: _207.MsgPlaceBidResponseProtoMsg): _207.MsgPlaceBidResponse;
            toProto(message: _207.MsgPlaceBidResponse): Uint8Array;
            toProtoMsg(message: _207.MsgPlaceBidResponse): _207.MsgPlaceBidResponseProtoMsg;
        };
        MsgCreateAuction: {
            typeUrl: string;
            encode(message: _207.MsgCreateAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.MsgCreateAuction;
            fromPartial(object: Partial<_207.MsgCreateAuction>): _207.MsgCreateAuction;
            fromAmino(object: _207.MsgCreateAuctionAmino): _207.MsgCreateAuction;
            toAmino(message: _207.MsgCreateAuction): _207.MsgCreateAuctionAmino;
            fromAminoMsg(object: _207.MsgCreateAuctionAminoMsg): _207.MsgCreateAuction;
            toAminoMsg(message: _207.MsgCreateAuction): _207.MsgCreateAuctionAminoMsg;
            fromProtoMsg(message: _207.MsgCreateAuctionProtoMsg): _207.MsgCreateAuction;
            toProto(message: _207.MsgCreateAuction): Uint8Array;
            toProtoMsg(message: _207.MsgCreateAuction): _207.MsgCreateAuctionProtoMsg;
        };
        MsgCreateAuctionResponse: {
            typeUrl: string;
            encode(_: _207.MsgCreateAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.MsgCreateAuctionResponse;
            fromPartial(_: Partial<_207.MsgCreateAuctionResponse>): _207.MsgCreateAuctionResponse;
            fromAmino(_: _207.MsgCreateAuctionResponseAmino): _207.MsgCreateAuctionResponse;
            toAmino(_: _207.MsgCreateAuctionResponse): _207.MsgCreateAuctionResponseAmino;
            fromAminoMsg(object: _207.MsgCreateAuctionResponseAminoMsg): _207.MsgCreateAuctionResponse;
            fromProtoMsg(message: _207.MsgCreateAuctionResponseProtoMsg): _207.MsgCreateAuctionResponse;
            toProto(message: _207.MsgCreateAuctionResponse): Uint8Array;
            toProtoMsg(message: _207.MsgCreateAuctionResponse): _207.MsgCreateAuctionResponseProtoMsg;
        };
        MsgUpdateAuction: {
            typeUrl: string;
            encode(message: _207.MsgUpdateAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.MsgUpdateAuction;
            fromPartial(object: Partial<_207.MsgUpdateAuction>): _207.MsgUpdateAuction;
            fromAmino(object: _207.MsgUpdateAuctionAmino): _207.MsgUpdateAuction;
            toAmino(message: _207.MsgUpdateAuction): _207.MsgUpdateAuctionAmino;
            fromAminoMsg(object: _207.MsgUpdateAuctionAminoMsg): _207.MsgUpdateAuction;
            toAminoMsg(message: _207.MsgUpdateAuction): _207.MsgUpdateAuctionAminoMsg;
            fromProtoMsg(message: _207.MsgUpdateAuctionProtoMsg): _207.MsgUpdateAuction;
            toProto(message: _207.MsgUpdateAuction): Uint8Array;
            toProtoMsg(message: _207.MsgUpdateAuction): _207.MsgUpdateAuctionProtoMsg;
        };
        MsgUpdateAuctionResponse: {
            typeUrl: string;
            encode(_: _207.MsgUpdateAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.MsgUpdateAuctionResponse;
            fromPartial(_: Partial<_207.MsgUpdateAuctionResponse>): _207.MsgUpdateAuctionResponse;
            fromAmino(_: _207.MsgUpdateAuctionResponseAmino): _207.MsgUpdateAuctionResponse;
            toAmino(_: _207.MsgUpdateAuctionResponse): _207.MsgUpdateAuctionResponseAmino;
            fromAminoMsg(object: _207.MsgUpdateAuctionResponseAminoMsg): _207.MsgUpdateAuctionResponse;
            fromProtoMsg(message: _207.MsgUpdateAuctionResponseProtoMsg): _207.MsgUpdateAuctionResponse;
            toProto(message: _207.MsgUpdateAuctionResponse): Uint8Array;
            toProtoMsg(message: _207.MsgUpdateAuctionResponse): _207.MsgUpdateAuctionResponseProtoMsg;
        };
        QueryAuctionRequest: {
            typeUrl: string;
            encode(message: _206.QueryAuctionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryAuctionRequest;
            fromPartial(object: Partial<_206.QueryAuctionRequest>): _206.QueryAuctionRequest;
            fromAmino(object: _206.QueryAuctionRequestAmino): _206.QueryAuctionRequest;
            toAmino(message: _206.QueryAuctionRequest): _206.QueryAuctionRequestAmino;
            fromAminoMsg(object: _206.QueryAuctionRequestAminoMsg): _206.QueryAuctionRequest;
            fromProtoMsg(message: _206.QueryAuctionRequestProtoMsg): _206.QueryAuctionRequest;
            toProto(message: _206.QueryAuctionRequest): Uint8Array;
            toProtoMsg(message: _206.QueryAuctionRequest): _206.QueryAuctionRequestProtoMsg;
        };
        QueryAuctionResponse: {
            typeUrl: string;
            encode(message: _206.QueryAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryAuctionResponse;
            fromPartial(object: Partial<_206.QueryAuctionResponse>): _206.QueryAuctionResponse;
            fromAmino(object: _206.QueryAuctionResponseAmino): _206.QueryAuctionResponse;
            toAmino(message: _206.QueryAuctionResponse): _206.QueryAuctionResponseAmino;
            fromAminoMsg(object: _206.QueryAuctionResponseAminoMsg): _206.QueryAuctionResponse;
            fromProtoMsg(message: _206.QueryAuctionResponseProtoMsg): _206.QueryAuctionResponse;
            toProto(message: _206.QueryAuctionResponse): Uint8Array;
            toProtoMsg(message: _206.QueryAuctionResponse): _206.QueryAuctionResponseProtoMsg;
        };
        QueryAuctionsRequest: {
            typeUrl: string;
            encode(message: _206.QueryAuctionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryAuctionsRequest;
            fromPartial(object: Partial<_206.QueryAuctionsRequest>): _206.QueryAuctionsRequest;
            fromAmino(object: _206.QueryAuctionsRequestAmino): _206.QueryAuctionsRequest;
            toAmino(message: _206.QueryAuctionsRequest): _206.QueryAuctionsRequestAmino;
            fromAminoMsg(object: _206.QueryAuctionsRequestAminoMsg): _206.QueryAuctionsRequest;
            fromProtoMsg(message: _206.QueryAuctionsRequestProtoMsg): _206.QueryAuctionsRequest;
            toProto(message: _206.QueryAuctionsRequest): Uint8Array;
            toProtoMsg(message: _206.QueryAuctionsRequest): _206.QueryAuctionsRequestProtoMsg;
        };
        QueryAuctionsResponse: {
            typeUrl: string;
            encode(message: _206.QueryAuctionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryAuctionsResponse;
            fromPartial(object: Partial<_206.QueryAuctionsResponse>): _206.QueryAuctionsResponse;
            fromAmino(object: _206.QueryAuctionsResponseAmino): _206.QueryAuctionsResponse;
            toAmino(message: _206.QueryAuctionsResponse): _206.QueryAuctionsResponseAmino;
            fromAminoMsg(object: _206.QueryAuctionsResponseAminoMsg): _206.QueryAuctionsResponse;
            fromProtoMsg(message: _206.QueryAuctionsResponseProtoMsg): _206.QueryAuctionsResponse;
            toProto(message: _206.QueryAuctionsResponse): Uint8Array;
            toProtoMsg(message: _206.QueryAuctionsResponse): _206.QueryAuctionsResponseProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _205.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.GenesisState;
            fromPartial(object: Partial<_205.GenesisState>): _205.GenesisState;
            fromAmino(object: _205.GenesisStateAmino): _205.GenesisState;
            toAmino(message: _205.GenesisState): _205.GenesisStateAmino;
            fromAminoMsg(object: _205.GenesisStateAminoMsg): _205.GenesisState;
            fromProtoMsg(message: _205.GenesisStateProtoMsg): _205.GenesisState;
            toProto(message: _205.GenesisState): Uint8Array;
            toProtoMsg(message: _205.GenesisState): _205.GenesisStateProtoMsg;
        };
        auctionTypeFromJSON(object: any): _204.AuctionType;
        auctionTypeToJSON(object: _204.AuctionType): string;
        AuctionType: typeof _204.AuctionType;
        AuctionTypeSDKType: typeof _204.AuctionType;
        AuctionTypeAmino: typeof _204.AuctionType;
        Params: {
            typeUrl: string;
            encode(_: _204.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.Params;
            fromPartial(_: Partial<_204.Params>): _204.Params;
            fromAmino(_: _204.ParamsAmino): _204.Params;
            toAmino(_: _204.Params): _204.ParamsAmino;
            fromAminoMsg(object: _204.ParamsAminoMsg): _204.Params;
            fromProtoMsg(message: _204.ParamsProtoMsg): _204.Params;
            toProto(message: _204.Params): Uint8Array;
            toProtoMsg(message: _204.Params): _204.ParamsProtoMsg;
        };
        Auction: {
            typeUrl: string;
            encode(message: _204.Auction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.Auction;
            fromPartial(object: Partial<_204.Auction>): _204.Auction;
            fromAmino(object: _204.AuctionAmino): _204.Auction;
            toAmino(message: _204.Auction): _204.AuctionAmino;
            fromAminoMsg(object: _204.AuctionAminoMsg): _204.Auction;
            fromProtoMsg(message: _204.AuctionProtoMsg): _204.Auction;
            toProto(message: _204.Auction): Uint8Array;
            toProtoMsg(message: _204.Auction): _204.AuctionProtoMsg;
        };
    };
    const autopilot: {
        QueryClientImpl: typeof _419.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _210.QueryParamsRequest): Promise<_210.QueryParamsResponse>;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _210.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.QueryParamsRequest;
            fromPartial(_: Partial<_210.QueryParamsRequest>): _210.QueryParamsRequest;
            fromAmino(_: _210.QueryParamsRequestAmino): _210.QueryParamsRequest;
            toAmino(_: _210.QueryParamsRequest): _210.QueryParamsRequestAmino;
            fromAminoMsg(object: _210.QueryParamsRequestAminoMsg): _210.QueryParamsRequest;
            fromProtoMsg(message: _210.QueryParamsRequestProtoMsg): _210.QueryParamsRequest;
            toProto(message: _210.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _210.QueryParamsRequest): _210.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _210.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.QueryParamsResponse;
            fromPartial(object: Partial<_210.QueryParamsResponse>): _210.QueryParamsResponse;
            fromAmino(object: _210.QueryParamsResponseAmino): _210.QueryParamsResponse;
            toAmino(message: _210.QueryParamsResponse): _210.QueryParamsResponseAmino;
            fromAminoMsg(object: _210.QueryParamsResponseAminoMsg): _210.QueryParamsResponse;
            fromProtoMsg(message: _210.QueryParamsResponseProtoMsg): _210.QueryParamsResponse;
            toProto(message: _210.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _210.QueryParamsResponse): _210.QueryParamsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _209.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.Params;
            fromPartial(object: Partial<_209.Params>): _209.Params;
            fromAmino(object: _209.ParamsAmino): _209.Params;
            toAmino(message: _209.Params): _209.ParamsAmino;
            fromAminoMsg(object: _209.ParamsAminoMsg): _209.Params;
            fromProtoMsg(message: _209.ParamsProtoMsg): _209.Params;
            toProto(message: _209.Params): Uint8Array;
            toProtoMsg(message: _209.Params): _209.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _208.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.GenesisState;
            fromPartial(object: Partial<_208.GenesisState>): _208.GenesisState;
            fromAmino(object: _208.GenesisStateAmino): _208.GenesisState;
            toAmino(message: _208.GenesisState): _208.GenesisStateAmino;
            fromAminoMsg(object: _208.GenesisStateAminoMsg): _208.GenesisState;
            fromProtoMsg(message: _208.GenesisStateProtoMsg): _208.GenesisState;
            toProto(message: _208.GenesisState): Uint8Array;
            toProtoMsg(message: _208.GenesisState): _208.GenesisStateProtoMsg;
        };
    };
    const claim: {
        MsgClientImpl: typeof _433.MsgClientImpl;
        QueryClientImpl: typeof _420.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            distributorAccountBalance(request: _214.QueryDistributorAccountBalanceRequest): Promise<_214.QueryDistributorAccountBalanceResponse>;
            params(request?: _214.QueryParamsRequest): Promise<_214.QueryParamsResponse>;
            claimRecord(request: _214.QueryClaimRecordRequest): Promise<_214.QueryClaimRecordResponse>;
            claimableForAction(request: _214.QueryClaimableForActionRequest): Promise<_214.QueryClaimableForActionResponse>;
            totalClaimable(request: _214.QueryTotalClaimableRequest): Promise<_214.QueryTotalClaimableResponse>;
            userVestings(request: _214.QueryUserVestingsRequest): Promise<_214.QueryUserVestingsResponse>;
            claimStatus(request: _214.QueryClaimStatusRequest): Promise<_214.QueryClaimStatusResponse>;
            claimMetadata(request?: _214.QueryClaimMetadataRequest): Promise<_214.QueryClaimMetadataResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                setAirdropAllocations(value: _215.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimFreeAmount(value: _215.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAirdrop(value: _215.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteAirdrop(value: _215.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                setAirdropAllocations(value: _215.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _215.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _215.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _215.MsgClaimFreeAmount;
                };
                createAirdrop(value: _215.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _215.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _215.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _215.MsgDeleteAirdrop;
                };
            };
            fromPartial: {
                setAirdropAllocations(value: _215.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _215.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _215.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _215.MsgClaimFreeAmount;
                };
                createAirdrop(value: _215.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _215.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _215.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _215.MsgDeleteAirdrop;
                };
            };
        };
        AminoConverter: {
            "/stride.claim.MsgSetAirdropAllocations": {
                aminoType: string;
                toAmino: (message: _215.MsgSetAirdropAllocations) => _215.MsgSetAirdropAllocationsAmino;
                fromAmino: (object: _215.MsgSetAirdropAllocationsAmino) => _215.MsgSetAirdropAllocations;
            };
            "/stride.claim.MsgClaimFreeAmount": {
                aminoType: string;
                toAmino: (message: _215.MsgClaimFreeAmount) => _215.MsgClaimFreeAmountAmino;
                fromAmino: (object: _215.MsgClaimFreeAmountAmino) => _215.MsgClaimFreeAmount;
            };
            "/stride.claim.MsgCreateAirdrop": {
                aminoType: string;
                toAmino: (message: _215.MsgCreateAirdrop) => _215.MsgCreateAirdropAmino;
                fromAmino: (object: _215.MsgCreateAirdropAmino) => _215.MsgCreateAirdrop;
            };
            "/stride.claim.MsgDeleteAirdrop": {
                aminoType: string;
                toAmino: (message: _215.MsgDeleteAirdrop) => _215.MsgDeleteAirdropAmino;
                fromAmino: (object: _215.MsgDeleteAirdropAmino) => _215.MsgDeleteAirdrop;
            };
        };
        MsgSetAirdropAllocations: {
            typeUrl: string;
            encode(message: _215.MsgSetAirdropAllocations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgSetAirdropAllocations;
            fromPartial(object: Partial<_215.MsgSetAirdropAllocations>): _215.MsgSetAirdropAllocations;
            fromAmino(object: _215.MsgSetAirdropAllocationsAmino): _215.MsgSetAirdropAllocations;
            toAmino(message: _215.MsgSetAirdropAllocations): _215.MsgSetAirdropAllocationsAmino;
            fromAminoMsg(object: _215.MsgSetAirdropAllocationsAminoMsg): _215.MsgSetAirdropAllocations;
            toAminoMsg(message: _215.MsgSetAirdropAllocations): _215.MsgSetAirdropAllocationsAminoMsg;
            fromProtoMsg(message: _215.MsgSetAirdropAllocationsProtoMsg): _215.MsgSetAirdropAllocations;
            toProto(message: _215.MsgSetAirdropAllocations): Uint8Array;
            toProtoMsg(message: _215.MsgSetAirdropAllocations): _215.MsgSetAirdropAllocationsProtoMsg;
        };
        MsgSetAirdropAllocationsResponse: {
            typeUrl: string;
            encode(_: _215.MsgSetAirdropAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgSetAirdropAllocationsResponse;
            fromPartial(_: Partial<_215.MsgSetAirdropAllocationsResponse>): _215.MsgSetAirdropAllocationsResponse;
            fromAmino(_: _215.MsgSetAirdropAllocationsResponseAmino): _215.MsgSetAirdropAllocationsResponse;
            toAmino(_: _215.MsgSetAirdropAllocationsResponse): _215.MsgSetAirdropAllocationsResponseAmino;
            fromAminoMsg(object: _215.MsgSetAirdropAllocationsResponseAminoMsg): _215.MsgSetAirdropAllocationsResponse;
            fromProtoMsg(message: _215.MsgSetAirdropAllocationsResponseProtoMsg): _215.MsgSetAirdropAllocationsResponse;
            toProto(message: _215.MsgSetAirdropAllocationsResponse): Uint8Array;
            toProtoMsg(message: _215.MsgSetAirdropAllocationsResponse): _215.MsgSetAirdropAllocationsResponseProtoMsg;
        };
        MsgClaimFreeAmount: {
            typeUrl: string;
            encode(message: _215.MsgClaimFreeAmount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgClaimFreeAmount;
            fromPartial(object: Partial<_215.MsgClaimFreeAmount>): _215.MsgClaimFreeAmount;
            fromAmino(object: _215.MsgClaimFreeAmountAmino): _215.MsgClaimFreeAmount;
            toAmino(message: _215.MsgClaimFreeAmount): _215.MsgClaimFreeAmountAmino;
            fromAminoMsg(object: _215.MsgClaimFreeAmountAminoMsg): _215.MsgClaimFreeAmount;
            toAminoMsg(message: _215.MsgClaimFreeAmount): _215.MsgClaimFreeAmountAminoMsg;
            fromProtoMsg(message: _215.MsgClaimFreeAmountProtoMsg): _215.MsgClaimFreeAmount;
            toProto(message: _215.MsgClaimFreeAmount): Uint8Array;
            toProtoMsg(message: _215.MsgClaimFreeAmount): _215.MsgClaimFreeAmountProtoMsg;
        };
        MsgClaimFreeAmountResponse: {
            typeUrl: string;
            encode(message: _215.MsgClaimFreeAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgClaimFreeAmountResponse;
            fromPartial(object: Partial<_215.MsgClaimFreeAmountResponse>): _215.MsgClaimFreeAmountResponse;
            fromAmino(object: _215.MsgClaimFreeAmountResponseAmino): _215.MsgClaimFreeAmountResponse;
            toAmino(message: _215.MsgClaimFreeAmountResponse): _215.MsgClaimFreeAmountResponseAmino;
            fromAminoMsg(object: _215.MsgClaimFreeAmountResponseAminoMsg): _215.MsgClaimFreeAmountResponse;
            fromProtoMsg(message: _215.MsgClaimFreeAmountResponseProtoMsg): _215.MsgClaimFreeAmountResponse;
            toProto(message: _215.MsgClaimFreeAmountResponse): Uint8Array;
            toProtoMsg(message: _215.MsgClaimFreeAmountResponse): _215.MsgClaimFreeAmountResponseProtoMsg;
        };
        MsgCreateAirdrop: {
            typeUrl: string;
            encode(message: _215.MsgCreateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgCreateAirdrop;
            fromPartial(object: Partial<_215.MsgCreateAirdrop>): _215.MsgCreateAirdrop;
            fromAmino(object: _215.MsgCreateAirdropAmino): _215.MsgCreateAirdrop;
            toAmino(message: _215.MsgCreateAirdrop): _215.MsgCreateAirdropAmino;
            fromAminoMsg(object: _215.MsgCreateAirdropAminoMsg): _215.MsgCreateAirdrop;
            toAminoMsg(message: _215.MsgCreateAirdrop): _215.MsgCreateAirdropAminoMsg;
            fromProtoMsg(message: _215.MsgCreateAirdropProtoMsg): _215.MsgCreateAirdrop;
            toProto(message: _215.MsgCreateAirdrop): Uint8Array;
            toProtoMsg(message: _215.MsgCreateAirdrop): _215.MsgCreateAirdropProtoMsg;
        };
        MsgCreateAirdropResponse: {
            typeUrl: string;
            encode(_: _215.MsgCreateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgCreateAirdropResponse;
            fromPartial(_: Partial<_215.MsgCreateAirdropResponse>): _215.MsgCreateAirdropResponse;
            fromAmino(_: _215.MsgCreateAirdropResponseAmino): _215.MsgCreateAirdropResponse;
            toAmino(_: _215.MsgCreateAirdropResponse): _215.MsgCreateAirdropResponseAmino;
            fromAminoMsg(object: _215.MsgCreateAirdropResponseAminoMsg): _215.MsgCreateAirdropResponse;
            fromProtoMsg(message: _215.MsgCreateAirdropResponseProtoMsg): _215.MsgCreateAirdropResponse;
            toProto(message: _215.MsgCreateAirdropResponse): Uint8Array;
            toProtoMsg(message: _215.MsgCreateAirdropResponse): _215.MsgCreateAirdropResponseProtoMsg;
        };
        MsgDeleteAirdrop: {
            typeUrl: string;
            encode(message: _215.MsgDeleteAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgDeleteAirdrop;
            fromPartial(object: Partial<_215.MsgDeleteAirdrop>): _215.MsgDeleteAirdrop;
            fromAmino(object: _215.MsgDeleteAirdropAmino): _215.MsgDeleteAirdrop;
            toAmino(message: _215.MsgDeleteAirdrop): _215.MsgDeleteAirdropAmino;
            fromAminoMsg(object: _215.MsgDeleteAirdropAminoMsg): _215.MsgDeleteAirdrop;
            toAminoMsg(message: _215.MsgDeleteAirdrop): _215.MsgDeleteAirdropAminoMsg;
            fromProtoMsg(message: _215.MsgDeleteAirdropProtoMsg): _215.MsgDeleteAirdrop;
            toProto(message: _215.MsgDeleteAirdrop): Uint8Array;
            toProtoMsg(message: _215.MsgDeleteAirdrop): _215.MsgDeleteAirdropProtoMsg;
        };
        MsgDeleteAirdropResponse: {
            typeUrl: string;
            encode(_: _215.MsgDeleteAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgDeleteAirdropResponse;
            fromPartial(_: Partial<_215.MsgDeleteAirdropResponse>): _215.MsgDeleteAirdropResponse;
            fromAmino(_: _215.MsgDeleteAirdropResponseAmino): _215.MsgDeleteAirdropResponse;
            toAmino(_: _215.MsgDeleteAirdropResponse): _215.MsgDeleteAirdropResponseAmino;
            fromAminoMsg(object: _215.MsgDeleteAirdropResponseAminoMsg): _215.MsgDeleteAirdropResponse;
            fromProtoMsg(message: _215.MsgDeleteAirdropResponseProtoMsg): _215.MsgDeleteAirdropResponse;
            toProto(message: _215.MsgDeleteAirdropResponse): Uint8Array;
            toProtoMsg(message: _215.MsgDeleteAirdropResponse): _215.MsgDeleteAirdropResponseProtoMsg;
        };
        ClaimStatus: {
            typeUrl: string;
            encode(message: _214.ClaimStatus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.ClaimStatus;
            fromPartial(object: Partial<_214.ClaimStatus>): _214.ClaimStatus;
            fromAmino(object: _214.ClaimStatusAmino): _214.ClaimStatus;
            toAmino(message: _214.ClaimStatus): _214.ClaimStatusAmino;
            fromAminoMsg(object: _214.ClaimStatusAminoMsg): _214.ClaimStatus;
            fromProtoMsg(message: _214.ClaimStatusProtoMsg): _214.ClaimStatus;
            toProto(message: _214.ClaimStatus): Uint8Array;
            toProtoMsg(message: _214.ClaimStatus): _214.ClaimStatusProtoMsg;
        };
        QueryClaimStatusRequest: {
            typeUrl: string;
            encode(message: _214.QueryClaimStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryClaimStatusRequest;
            fromPartial(object: Partial<_214.QueryClaimStatusRequest>): _214.QueryClaimStatusRequest;
            fromAmino(object: _214.QueryClaimStatusRequestAmino): _214.QueryClaimStatusRequest;
            toAmino(message: _214.QueryClaimStatusRequest): _214.QueryClaimStatusRequestAmino;
            fromAminoMsg(object: _214.QueryClaimStatusRequestAminoMsg): _214.QueryClaimStatusRequest;
            fromProtoMsg(message: _214.QueryClaimStatusRequestProtoMsg): _214.QueryClaimStatusRequest;
            toProto(message: _214.QueryClaimStatusRequest): Uint8Array;
            toProtoMsg(message: _214.QueryClaimStatusRequest): _214.QueryClaimStatusRequestProtoMsg;
        };
        QueryClaimStatusResponse: {
            typeUrl: string;
            encode(message: _214.QueryClaimStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryClaimStatusResponse;
            fromPartial(object: Partial<_214.QueryClaimStatusResponse>): _214.QueryClaimStatusResponse;
            fromAmino(object: _214.QueryClaimStatusResponseAmino): _214.QueryClaimStatusResponse;
            toAmino(message: _214.QueryClaimStatusResponse): _214.QueryClaimStatusResponseAmino;
            fromAminoMsg(object: _214.QueryClaimStatusResponseAminoMsg): _214.QueryClaimStatusResponse;
            fromProtoMsg(message: _214.QueryClaimStatusResponseProtoMsg): _214.QueryClaimStatusResponse;
            toProto(message: _214.QueryClaimStatusResponse): Uint8Array;
            toProtoMsg(message: _214.QueryClaimStatusResponse): _214.QueryClaimStatusResponseProtoMsg;
        };
        ClaimMetadata: {
            typeUrl: string;
            encode(message: _214.ClaimMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.ClaimMetadata;
            fromPartial(object: Partial<_214.ClaimMetadata>): _214.ClaimMetadata;
            fromAmino(object: _214.ClaimMetadataAmino): _214.ClaimMetadata;
            toAmino(message: _214.ClaimMetadata): _214.ClaimMetadataAmino;
            fromAminoMsg(object: _214.ClaimMetadataAminoMsg): _214.ClaimMetadata;
            fromProtoMsg(message: _214.ClaimMetadataProtoMsg): _214.ClaimMetadata;
            toProto(message: _214.ClaimMetadata): Uint8Array;
            toProtoMsg(message: _214.ClaimMetadata): _214.ClaimMetadataProtoMsg;
        };
        QueryClaimMetadataRequest: {
            typeUrl: string;
            encode(_: _214.QueryClaimMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryClaimMetadataRequest;
            fromPartial(_: Partial<_214.QueryClaimMetadataRequest>): _214.QueryClaimMetadataRequest;
            fromAmino(_: _214.QueryClaimMetadataRequestAmino): _214.QueryClaimMetadataRequest;
            toAmino(_: _214.QueryClaimMetadataRequest): _214.QueryClaimMetadataRequestAmino;
            fromAminoMsg(object: _214.QueryClaimMetadataRequestAminoMsg): _214.QueryClaimMetadataRequest;
            fromProtoMsg(message: _214.QueryClaimMetadataRequestProtoMsg): _214.QueryClaimMetadataRequest;
            toProto(message: _214.QueryClaimMetadataRequest): Uint8Array;
            toProtoMsg(message: _214.QueryClaimMetadataRequest): _214.QueryClaimMetadataRequestProtoMsg;
        };
        QueryClaimMetadataResponse: {
            typeUrl: string;
            encode(message: _214.QueryClaimMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryClaimMetadataResponse;
            fromPartial(object: Partial<_214.QueryClaimMetadataResponse>): _214.QueryClaimMetadataResponse;
            fromAmino(object: _214.QueryClaimMetadataResponseAmino): _214.QueryClaimMetadataResponse;
            toAmino(message: _214.QueryClaimMetadataResponse): _214.QueryClaimMetadataResponseAmino;
            fromAminoMsg(object: _214.QueryClaimMetadataResponseAminoMsg): _214.QueryClaimMetadataResponse;
            fromProtoMsg(message: _214.QueryClaimMetadataResponseProtoMsg): _214.QueryClaimMetadataResponse;
            toProto(message: _214.QueryClaimMetadataResponse): Uint8Array;
            toProtoMsg(message: _214.QueryClaimMetadataResponse): _214.QueryClaimMetadataResponseProtoMsg;
        };
        QueryDistributorAccountBalanceRequest: {
            typeUrl: string;
            encode(message: _214.QueryDistributorAccountBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryDistributorAccountBalanceRequest;
            fromPartial(object: Partial<_214.QueryDistributorAccountBalanceRequest>): _214.QueryDistributorAccountBalanceRequest;
            fromAmino(object: _214.QueryDistributorAccountBalanceRequestAmino): _214.QueryDistributorAccountBalanceRequest;
            toAmino(message: _214.QueryDistributorAccountBalanceRequest): _214.QueryDistributorAccountBalanceRequestAmino;
            fromAminoMsg(object: _214.QueryDistributorAccountBalanceRequestAminoMsg): _214.QueryDistributorAccountBalanceRequest;
            fromProtoMsg(message: _214.QueryDistributorAccountBalanceRequestProtoMsg): _214.QueryDistributorAccountBalanceRequest;
            toProto(message: _214.QueryDistributorAccountBalanceRequest): Uint8Array;
            toProtoMsg(message: _214.QueryDistributorAccountBalanceRequest): _214.QueryDistributorAccountBalanceRequestProtoMsg;
        };
        QueryDistributorAccountBalanceResponse: {
            typeUrl: string;
            encode(message: _214.QueryDistributorAccountBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryDistributorAccountBalanceResponse;
            fromPartial(object: Partial<_214.QueryDistributorAccountBalanceResponse>): _214.QueryDistributorAccountBalanceResponse;
            fromAmino(object: _214.QueryDistributorAccountBalanceResponseAmino): _214.QueryDistributorAccountBalanceResponse;
            toAmino(message: _214.QueryDistributorAccountBalanceResponse): _214.QueryDistributorAccountBalanceResponseAmino;
            fromAminoMsg(object: _214.QueryDistributorAccountBalanceResponseAminoMsg): _214.QueryDistributorAccountBalanceResponse;
            fromProtoMsg(message: _214.QueryDistributorAccountBalanceResponseProtoMsg): _214.QueryDistributorAccountBalanceResponse;
            toProto(message: _214.QueryDistributorAccountBalanceResponse): Uint8Array;
            toProtoMsg(message: _214.QueryDistributorAccountBalanceResponse): _214.QueryDistributorAccountBalanceResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _214.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryParamsRequest;
            fromPartial(_: Partial<_214.QueryParamsRequest>): _214.QueryParamsRequest;
            fromAmino(_: _214.QueryParamsRequestAmino): _214.QueryParamsRequest;
            toAmino(_: _214.QueryParamsRequest): _214.QueryParamsRequestAmino;
            fromAminoMsg(object: _214.QueryParamsRequestAminoMsg): _214.QueryParamsRequest;
            fromProtoMsg(message: _214.QueryParamsRequestProtoMsg): _214.QueryParamsRequest;
            toProto(message: _214.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _214.QueryParamsRequest): _214.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _214.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryParamsResponse;
            fromPartial(object: Partial<_214.QueryParamsResponse>): _214.QueryParamsResponse;
            fromAmino(object: _214.QueryParamsResponseAmino): _214.QueryParamsResponse;
            toAmino(message: _214.QueryParamsResponse): _214.QueryParamsResponseAmino;
            fromAminoMsg(object: _214.QueryParamsResponseAminoMsg): _214.QueryParamsResponse;
            fromProtoMsg(message: _214.QueryParamsResponseProtoMsg): _214.QueryParamsResponse;
            toProto(message: _214.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _214.QueryParamsResponse): _214.QueryParamsResponseProtoMsg;
        };
        QueryClaimRecordRequest: {
            typeUrl: string;
            encode(message: _214.QueryClaimRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryClaimRecordRequest;
            fromPartial(object: Partial<_214.QueryClaimRecordRequest>): _214.QueryClaimRecordRequest;
            fromAmino(object: _214.QueryClaimRecordRequestAmino): _214.QueryClaimRecordRequest;
            toAmino(message: _214.QueryClaimRecordRequest): _214.QueryClaimRecordRequestAmino;
            fromAminoMsg(object: _214.QueryClaimRecordRequestAminoMsg): _214.QueryClaimRecordRequest;
            fromProtoMsg(message: _214.QueryClaimRecordRequestProtoMsg): _214.QueryClaimRecordRequest;
            toProto(message: _214.QueryClaimRecordRequest): Uint8Array;
            toProtoMsg(message: _214.QueryClaimRecordRequest): _214.QueryClaimRecordRequestProtoMsg;
        };
        QueryClaimRecordResponse: {
            typeUrl: string;
            encode(message: _214.QueryClaimRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryClaimRecordResponse;
            fromPartial(object: Partial<_214.QueryClaimRecordResponse>): _214.QueryClaimRecordResponse;
            fromAmino(object: _214.QueryClaimRecordResponseAmino): _214.QueryClaimRecordResponse;
            toAmino(message: _214.QueryClaimRecordResponse): _214.QueryClaimRecordResponseAmino;
            fromAminoMsg(object: _214.QueryClaimRecordResponseAminoMsg): _214.QueryClaimRecordResponse;
            fromProtoMsg(message: _214.QueryClaimRecordResponseProtoMsg): _214.QueryClaimRecordResponse;
            toProto(message: _214.QueryClaimRecordResponse): Uint8Array;
            toProtoMsg(message: _214.QueryClaimRecordResponse): _214.QueryClaimRecordResponseProtoMsg;
        };
        QueryClaimableForActionRequest: {
            typeUrl: string;
            encode(message: _214.QueryClaimableForActionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryClaimableForActionRequest;
            fromPartial(object: Partial<_214.QueryClaimableForActionRequest>): _214.QueryClaimableForActionRequest;
            fromAmino(object: _214.QueryClaimableForActionRequestAmino): _214.QueryClaimableForActionRequest;
            toAmino(message: _214.QueryClaimableForActionRequest): _214.QueryClaimableForActionRequestAmino;
            fromAminoMsg(object: _214.QueryClaimableForActionRequestAminoMsg): _214.QueryClaimableForActionRequest;
            fromProtoMsg(message: _214.QueryClaimableForActionRequestProtoMsg): _214.QueryClaimableForActionRequest;
            toProto(message: _214.QueryClaimableForActionRequest): Uint8Array;
            toProtoMsg(message: _214.QueryClaimableForActionRequest): _214.QueryClaimableForActionRequestProtoMsg;
        };
        QueryClaimableForActionResponse: {
            typeUrl: string;
            encode(message: _214.QueryClaimableForActionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryClaimableForActionResponse;
            fromPartial(object: Partial<_214.QueryClaimableForActionResponse>): _214.QueryClaimableForActionResponse;
            fromAmino(object: _214.QueryClaimableForActionResponseAmino): _214.QueryClaimableForActionResponse;
            toAmino(message: _214.QueryClaimableForActionResponse): _214.QueryClaimableForActionResponseAmino;
            fromAminoMsg(object: _214.QueryClaimableForActionResponseAminoMsg): _214.QueryClaimableForActionResponse;
            fromProtoMsg(message: _214.QueryClaimableForActionResponseProtoMsg): _214.QueryClaimableForActionResponse;
            toProto(message: _214.QueryClaimableForActionResponse): Uint8Array;
            toProtoMsg(message: _214.QueryClaimableForActionResponse): _214.QueryClaimableForActionResponseProtoMsg;
        };
        QueryTotalClaimableRequest: {
            typeUrl: string;
            encode(message: _214.QueryTotalClaimableRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryTotalClaimableRequest;
            fromPartial(object: Partial<_214.QueryTotalClaimableRequest>): _214.QueryTotalClaimableRequest;
            fromAmino(object: _214.QueryTotalClaimableRequestAmino): _214.QueryTotalClaimableRequest;
            toAmino(message: _214.QueryTotalClaimableRequest): _214.QueryTotalClaimableRequestAmino;
            fromAminoMsg(object: _214.QueryTotalClaimableRequestAminoMsg): _214.QueryTotalClaimableRequest;
            fromProtoMsg(message: _214.QueryTotalClaimableRequestProtoMsg): _214.QueryTotalClaimableRequest;
            toProto(message: _214.QueryTotalClaimableRequest): Uint8Array;
            toProtoMsg(message: _214.QueryTotalClaimableRequest): _214.QueryTotalClaimableRequestProtoMsg;
        };
        QueryTotalClaimableResponse: {
            typeUrl: string;
            encode(message: _214.QueryTotalClaimableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryTotalClaimableResponse;
            fromPartial(object: Partial<_214.QueryTotalClaimableResponse>): _214.QueryTotalClaimableResponse;
            fromAmino(object: _214.QueryTotalClaimableResponseAmino): _214.QueryTotalClaimableResponse;
            toAmino(message: _214.QueryTotalClaimableResponse): _214.QueryTotalClaimableResponseAmino;
            fromAminoMsg(object: _214.QueryTotalClaimableResponseAminoMsg): _214.QueryTotalClaimableResponse;
            fromProtoMsg(message: _214.QueryTotalClaimableResponseProtoMsg): _214.QueryTotalClaimableResponse;
            toProto(message: _214.QueryTotalClaimableResponse): Uint8Array;
            toProtoMsg(message: _214.QueryTotalClaimableResponse): _214.QueryTotalClaimableResponseProtoMsg;
        };
        QueryUserVestingsRequest: {
            typeUrl: string;
            encode(message: _214.QueryUserVestingsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryUserVestingsRequest;
            fromPartial(object: Partial<_214.QueryUserVestingsRequest>): _214.QueryUserVestingsRequest;
            fromAmino(object: _214.QueryUserVestingsRequestAmino): _214.QueryUserVestingsRequest;
            toAmino(message: _214.QueryUserVestingsRequest): _214.QueryUserVestingsRequestAmino;
            fromAminoMsg(object: _214.QueryUserVestingsRequestAminoMsg): _214.QueryUserVestingsRequest;
            fromProtoMsg(message: _214.QueryUserVestingsRequestProtoMsg): _214.QueryUserVestingsRequest;
            toProto(message: _214.QueryUserVestingsRequest): Uint8Array;
            toProtoMsg(message: _214.QueryUserVestingsRequest): _214.QueryUserVestingsRequestProtoMsg;
        };
        QueryUserVestingsResponse: {
            typeUrl: string;
            encode(message: _214.QueryUserVestingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryUserVestingsResponse;
            fromPartial(object: Partial<_214.QueryUserVestingsResponse>): _214.QueryUserVestingsResponse;
            fromAmino(object: _214.QueryUserVestingsResponseAmino): _214.QueryUserVestingsResponse;
            toAmino(message: _214.QueryUserVestingsResponse): _214.QueryUserVestingsResponseAmino;
            fromAminoMsg(object: _214.QueryUserVestingsResponseAminoMsg): _214.QueryUserVestingsResponse;
            fromProtoMsg(message: _214.QueryUserVestingsResponseProtoMsg): _214.QueryUserVestingsResponse;
            toProto(message: _214.QueryUserVestingsResponse): Uint8Array;
            toProtoMsg(message: _214.QueryUserVestingsResponse): _214.QueryUserVestingsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _213.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.Params;
            fromPartial(object: Partial<_213.Params>): _213.Params;
            fromAmino(object: _213.ParamsAmino): _213.Params;
            toAmino(message: _213.Params): _213.ParamsAmino;
            fromAminoMsg(object: _213.ParamsAminoMsg): _213.Params;
            fromProtoMsg(message: _213.ParamsProtoMsg): _213.Params;
            toProto(message: _213.Params): Uint8Array;
            toProtoMsg(message: _213.Params): _213.ParamsProtoMsg;
        };
        Airdrop: {
            typeUrl: string;
            encode(message: _213.Airdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.Airdrop;
            fromPartial(object: Partial<_213.Airdrop>): _213.Airdrop;
            fromAmino(object: _213.AirdropAmino): _213.Airdrop;
            toAmino(message: _213.Airdrop): _213.AirdropAmino;
            fromAminoMsg(object: _213.AirdropAminoMsg): _213.Airdrop;
            fromProtoMsg(message: _213.AirdropProtoMsg): _213.Airdrop;
            toProto(message: _213.Airdrop): Uint8Array;
            toProtoMsg(message: _213.Airdrop): _213.AirdropProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _212.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.GenesisState;
            fromPartial(object: Partial<_212.GenesisState>): _212.GenesisState;
            fromAmino(object: _212.GenesisStateAmino): _212.GenesisState;
            toAmino(message: _212.GenesisState): _212.GenesisStateAmino;
            fromAminoMsg(object: _212.GenesisStateAminoMsg): _212.GenesisState;
            fromProtoMsg(message: _212.GenesisStateProtoMsg): _212.GenesisState;
            toProto(message: _212.GenesisState): Uint8Array;
            toProtoMsg(message: _212.GenesisState): _212.GenesisStateProtoMsg;
        };
        actionFromJSON(object: any): _211.Action;
        actionToJSON(object: _211.Action): string;
        Action: typeof _211.Action;
        ActionSDKType: typeof _211.Action;
        ActionAmino: typeof _211.Action;
        ClaimRecord: {
            typeUrl: string;
            encode(message: _211.ClaimRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.ClaimRecord;
            fromPartial(object: Partial<_211.ClaimRecord>): _211.ClaimRecord;
            fromAmino(object: _211.ClaimRecordAmino): _211.ClaimRecord;
            toAmino(message: _211.ClaimRecord): _211.ClaimRecordAmino;
            fromAminoMsg(object: _211.ClaimRecordAminoMsg): _211.ClaimRecord;
            fromProtoMsg(message: _211.ClaimRecordProtoMsg): _211.ClaimRecord;
            toProto(message: _211.ClaimRecord): Uint8Array;
            toProtoMsg(message: _211.ClaimRecord): _211.ClaimRecordProtoMsg;
        };
    };
    const epochs: {
        QueryClientImpl: typeof _421.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            epochInfos(request?: _217.QueryEpochsInfoRequest): Promise<_217.QueryEpochsInfoResponse>;
            currentEpoch(request: _217.QueryCurrentEpochRequest): Promise<_217.QueryCurrentEpochResponse>;
            epochInfo(request: _217.QueryEpochInfoRequest): Promise<_217.QueryEpochInfoResponse>;
        };
        QueryEpochsInfoRequest: {
            typeUrl: string;
            encode(message: _217.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.QueryEpochsInfoRequest;
            fromPartial(object: Partial<_217.QueryEpochsInfoRequest>): _217.QueryEpochsInfoRequest;
            fromAmino(object: _217.QueryEpochsInfoRequestAmino): _217.QueryEpochsInfoRequest;
            toAmino(message: _217.QueryEpochsInfoRequest): _217.QueryEpochsInfoRequestAmino;
            fromAminoMsg(object: _217.QueryEpochsInfoRequestAminoMsg): _217.QueryEpochsInfoRequest;
            fromProtoMsg(message: _217.QueryEpochsInfoRequestProtoMsg): _217.QueryEpochsInfoRequest;
            toProto(message: _217.QueryEpochsInfoRequest): Uint8Array;
            toProtoMsg(message: _217.QueryEpochsInfoRequest): _217.QueryEpochsInfoRequestProtoMsg;
        };
        QueryEpochsInfoResponse: {
            typeUrl: string;
            encode(message: _217.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.QueryEpochsInfoResponse;
            fromPartial(object: Partial<_217.QueryEpochsInfoResponse>): _217.QueryEpochsInfoResponse;
            fromAmino(object: _217.QueryEpochsInfoResponseAmino): _217.QueryEpochsInfoResponse;
            toAmino(message: _217.QueryEpochsInfoResponse): _217.QueryEpochsInfoResponseAmino;
            fromAminoMsg(object: _217.QueryEpochsInfoResponseAminoMsg): _217.QueryEpochsInfoResponse;
            fromProtoMsg(message: _217.QueryEpochsInfoResponseProtoMsg): _217.QueryEpochsInfoResponse;
            toProto(message: _217.QueryEpochsInfoResponse): Uint8Array;
            toProtoMsg(message: _217.QueryEpochsInfoResponse): _217.QueryEpochsInfoResponseProtoMsg;
        };
        QueryCurrentEpochRequest: {
            typeUrl: string;
            encode(message: _217.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.QueryCurrentEpochRequest;
            fromPartial(object: Partial<_217.QueryCurrentEpochRequest>): _217.QueryCurrentEpochRequest;
            fromAmino(object: _217.QueryCurrentEpochRequestAmino): _217.QueryCurrentEpochRequest;
            toAmino(message: _217.QueryCurrentEpochRequest): _217.QueryCurrentEpochRequestAmino;
            fromAminoMsg(object: _217.QueryCurrentEpochRequestAminoMsg): _217.QueryCurrentEpochRequest;
            fromProtoMsg(message: _217.QueryCurrentEpochRequestProtoMsg): _217.QueryCurrentEpochRequest;
            toProto(message: _217.QueryCurrentEpochRequest): Uint8Array;
            toProtoMsg(message: _217.QueryCurrentEpochRequest): _217.QueryCurrentEpochRequestProtoMsg;
        };
        QueryCurrentEpochResponse: {
            typeUrl: string;
            encode(message: _217.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.QueryCurrentEpochResponse;
            fromPartial(object: Partial<_217.QueryCurrentEpochResponse>): _217.QueryCurrentEpochResponse;
            fromAmino(object: _217.QueryCurrentEpochResponseAmino): _217.QueryCurrentEpochResponse;
            toAmino(message: _217.QueryCurrentEpochResponse): _217.QueryCurrentEpochResponseAmino;
            fromAminoMsg(object: _217.QueryCurrentEpochResponseAminoMsg): _217.QueryCurrentEpochResponse;
            fromProtoMsg(message: _217.QueryCurrentEpochResponseProtoMsg): _217.QueryCurrentEpochResponse;
            toProto(message: _217.QueryCurrentEpochResponse): Uint8Array;
            toProtoMsg(message: _217.QueryCurrentEpochResponse): _217.QueryCurrentEpochResponseProtoMsg;
        };
        QueryEpochInfoRequest: {
            typeUrl: string;
            encode(message: _217.QueryEpochInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.QueryEpochInfoRequest;
            fromPartial(object: Partial<_217.QueryEpochInfoRequest>): _217.QueryEpochInfoRequest;
            fromAmino(object: _217.QueryEpochInfoRequestAmino): _217.QueryEpochInfoRequest;
            toAmino(message: _217.QueryEpochInfoRequest): _217.QueryEpochInfoRequestAmino;
            fromAminoMsg(object: _217.QueryEpochInfoRequestAminoMsg): _217.QueryEpochInfoRequest;
            fromProtoMsg(message: _217.QueryEpochInfoRequestProtoMsg): _217.QueryEpochInfoRequest;
            toProto(message: _217.QueryEpochInfoRequest): Uint8Array;
            toProtoMsg(message: _217.QueryEpochInfoRequest): _217.QueryEpochInfoRequestProtoMsg;
        };
        QueryEpochInfoResponse: {
            typeUrl: string;
            encode(message: _217.QueryEpochInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.QueryEpochInfoResponse;
            fromPartial(object: Partial<_217.QueryEpochInfoResponse>): _217.QueryEpochInfoResponse;
            fromAmino(object: _217.QueryEpochInfoResponseAmino): _217.QueryEpochInfoResponse;
            toAmino(message: _217.QueryEpochInfoResponse): _217.QueryEpochInfoResponseAmino;
            fromAminoMsg(object: _217.QueryEpochInfoResponseAminoMsg): _217.QueryEpochInfoResponse;
            fromProtoMsg(message: _217.QueryEpochInfoResponseProtoMsg): _217.QueryEpochInfoResponse;
            toProto(message: _217.QueryEpochInfoResponse): Uint8Array;
            toProtoMsg(message: _217.QueryEpochInfoResponse): _217.QueryEpochInfoResponseProtoMsg;
        };
        EpochInfo: {
            typeUrl: string;
            encode(message: _216.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.EpochInfo;
            fromPartial(object: Partial<_216.EpochInfo>): _216.EpochInfo;
            fromAmino(object: _216.EpochInfoAmino): _216.EpochInfo;
            toAmino(message: _216.EpochInfo): _216.EpochInfoAmino;
            fromAminoMsg(object: _216.EpochInfoAminoMsg): _216.EpochInfo;
            fromProtoMsg(message: _216.EpochInfoProtoMsg): _216.EpochInfo;
            toProto(message: _216.EpochInfo): Uint8Array;
            toProtoMsg(message: _216.EpochInfo): _216.EpochInfoProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _216.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.GenesisState;
            fromPartial(object: Partial<_216.GenesisState>): _216.GenesisState;
            fromAmino(object: _216.GenesisStateAmino): _216.GenesisState;
            toAmino(message: _216.GenesisState): _216.GenesisStateAmino;
            fromAminoMsg(object: _216.GenesisStateAminoMsg): _216.GenesisState;
            fromProtoMsg(message: _216.GenesisStateProtoMsg): _216.GenesisState;
            toProto(message: _216.GenesisState): Uint8Array;
            toProtoMsg(message: _216.GenesisState): _216.GenesisStateProtoMsg;
        };
    };
    const icacallbacks: {
        QueryClientImpl: typeof _422.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _222.QueryParamsRequest): Promise<_222.QueryParamsResponse>;
            callbackData(request: _222.QueryGetCallbackDataRequest): Promise<_222.QueryGetCallbackDataResponse>;
            callbackDataAll(request?: _222.QueryAllCallbackDataRequest): Promise<_222.QueryAllCallbackDataResponse>;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _222.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.QueryParamsRequest;
            fromPartial(_: Partial<_222.QueryParamsRequest>): _222.QueryParamsRequest;
            fromAmino(_: _222.QueryParamsRequestAmino): _222.QueryParamsRequest;
            toAmino(_: _222.QueryParamsRequest): _222.QueryParamsRequestAmino;
            fromAminoMsg(object: _222.QueryParamsRequestAminoMsg): _222.QueryParamsRequest;
            fromProtoMsg(message: _222.QueryParamsRequestProtoMsg): _222.QueryParamsRequest;
            toProto(message: _222.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _222.QueryParamsRequest): _222.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _222.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.QueryParamsResponse;
            fromPartial(object: Partial<_222.QueryParamsResponse>): _222.QueryParamsResponse;
            fromAmino(object: _222.QueryParamsResponseAmino): _222.QueryParamsResponse;
            toAmino(message: _222.QueryParamsResponse): _222.QueryParamsResponseAmino;
            fromAminoMsg(object: _222.QueryParamsResponseAminoMsg): _222.QueryParamsResponse;
            fromProtoMsg(message: _222.QueryParamsResponseProtoMsg): _222.QueryParamsResponse;
            toProto(message: _222.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _222.QueryParamsResponse): _222.QueryParamsResponseProtoMsg;
        };
        QueryGetCallbackDataRequest: {
            typeUrl: string;
            encode(message: _222.QueryGetCallbackDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.QueryGetCallbackDataRequest;
            fromPartial(object: Partial<_222.QueryGetCallbackDataRequest>): _222.QueryGetCallbackDataRequest;
            fromAmino(object: _222.QueryGetCallbackDataRequestAmino): _222.QueryGetCallbackDataRequest;
            toAmino(message: _222.QueryGetCallbackDataRequest): _222.QueryGetCallbackDataRequestAmino;
            fromAminoMsg(object: _222.QueryGetCallbackDataRequestAminoMsg): _222.QueryGetCallbackDataRequest;
            fromProtoMsg(message: _222.QueryGetCallbackDataRequestProtoMsg): _222.QueryGetCallbackDataRequest;
            toProto(message: _222.QueryGetCallbackDataRequest): Uint8Array;
            toProtoMsg(message: _222.QueryGetCallbackDataRequest): _222.QueryGetCallbackDataRequestProtoMsg;
        };
        QueryGetCallbackDataResponse: {
            typeUrl: string;
            encode(message: _222.QueryGetCallbackDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.QueryGetCallbackDataResponse;
            fromPartial(object: Partial<_222.QueryGetCallbackDataResponse>): _222.QueryGetCallbackDataResponse;
            fromAmino(object: _222.QueryGetCallbackDataResponseAmino): _222.QueryGetCallbackDataResponse;
            toAmino(message: _222.QueryGetCallbackDataResponse): _222.QueryGetCallbackDataResponseAmino;
            fromAminoMsg(object: _222.QueryGetCallbackDataResponseAminoMsg): _222.QueryGetCallbackDataResponse;
            fromProtoMsg(message: _222.QueryGetCallbackDataResponseProtoMsg): _222.QueryGetCallbackDataResponse;
            toProto(message: _222.QueryGetCallbackDataResponse): Uint8Array;
            toProtoMsg(message: _222.QueryGetCallbackDataResponse): _222.QueryGetCallbackDataResponseProtoMsg;
        };
        QueryAllCallbackDataRequest: {
            typeUrl: string;
            encode(message: _222.QueryAllCallbackDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.QueryAllCallbackDataRequest;
            fromPartial(object: Partial<_222.QueryAllCallbackDataRequest>): _222.QueryAllCallbackDataRequest;
            fromAmino(object: _222.QueryAllCallbackDataRequestAmino): _222.QueryAllCallbackDataRequest;
            toAmino(message: _222.QueryAllCallbackDataRequest): _222.QueryAllCallbackDataRequestAmino;
            fromAminoMsg(object: _222.QueryAllCallbackDataRequestAminoMsg): _222.QueryAllCallbackDataRequest;
            fromProtoMsg(message: _222.QueryAllCallbackDataRequestProtoMsg): _222.QueryAllCallbackDataRequest;
            toProto(message: _222.QueryAllCallbackDataRequest): Uint8Array;
            toProtoMsg(message: _222.QueryAllCallbackDataRequest): _222.QueryAllCallbackDataRequestProtoMsg;
        };
        QueryAllCallbackDataResponse: {
            typeUrl: string;
            encode(message: _222.QueryAllCallbackDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.QueryAllCallbackDataResponse;
            fromPartial(object: Partial<_222.QueryAllCallbackDataResponse>): _222.QueryAllCallbackDataResponse;
            fromAmino(object: _222.QueryAllCallbackDataResponseAmino): _222.QueryAllCallbackDataResponse;
            toAmino(message: _222.QueryAllCallbackDataResponse): _222.QueryAllCallbackDataResponseAmino;
            fromAminoMsg(object: _222.QueryAllCallbackDataResponseAminoMsg): _222.QueryAllCallbackDataResponse;
            fromProtoMsg(message: _222.QueryAllCallbackDataResponseProtoMsg): _222.QueryAllCallbackDataResponse;
            toProto(message: _222.QueryAllCallbackDataResponse): Uint8Array;
            toProtoMsg(message: _222.QueryAllCallbackDataResponse): _222.QueryAllCallbackDataResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _221.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.Params;
            fromPartial(_: Partial<_221.Params>): _221.Params;
            fromAmino(_: _221.ParamsAmino): _221.Params;
            toAmino(_: _221.Params): _221.ParamsAmino;
            fromAminoMsg(object: _221.ParamsAminoMsg): _221.Params;
            fromProtoMsg(message: _221.ParamsProtoMsg): _221.Params;
            toProto(message: _221.Params): Uint8Array;
            toProtoMsg(message: _221.Params): _221.ParamsProtoMsg;
        };
        IcacallbacksPacketData: {
            typeUrl: string;
            encode(message: _220.IcacallbacksPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _220.IcacallbacksPacketData;
            fromPartial(object: Partial<_220.IcacallbacksPacketData>): _220.IcacallbacksPacketData;
            fromAmino(object: _220.IcacallbacksPacketDataAmino): _220.IcacallbacksPacketData;
            toAmino(message: _220.IcacallbacksPacketData): _220.IcacallbacksPacketDataAmino;
            fromAminoMsg(object: _220.IcacallbacksPacketDataAminoMsg): _220.IcacallbacksPacketData;
            fromProtoMsg(message: _220.IcacallbacksPacketDataProtoMsg): _220.IcacallbacksPacketData;
            toProto(message: _220.IcacallbacksPacketData): Uint8Array;
            toProtoMsg(message: _220.IcacallbacksPacketData): _220.IcacallbacksPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _220.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _220.NoData;
            fromPartial(_: Partial<_220.NoData>): _220.NoData;
            fromAmino(_: _220.NoDataAmino): _220.NoData;
            toAmino(_: _220.NoData): _220.NoDataAmino;
            fromAminoMsg(object: _220.NoDataAminoMsg): _220.NoData;
            fromProtoMsg(message: _220.NoDataProtoMsg): _220.NoData;
            toProto(message: _220.NoData): Uint8Array;
            toProtoMsg(message: _220.NoData): _220.NoDataProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _219.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.GenesisState;
            fromPartial(object: Partial<_219.GenesisState>): _219.GenesisState;
            fromAmino(object: _219.GenesisStateAmino): _219.GenesisState;
            toAmino(message: _219.GenesisState): _219.GenesisStateAmino;
            fromAminoMsg(object: _219.GenesisStateAminoMsg): _219.GenesisState;
            fromProtoMsg(message: _219.GenesisStateProtoMsg): _219.GenesisState;
            toProto(message: _219.GenesisState): Uint8Array;
            toProtoMsg(message: _219.GenesisState): _219.GenesisStateProtoMsg;
        };
        CallbackData: {
            typeUrl: string;
            encode(message: _218.CallbackData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.CallbackData;
            fromPartial(object: Partial<_218.CallbackData>): _218.CallbackData;
            fromAmino(object: _218.CallbackDataAmino): _218.CallbackData;
            toAmino(message: _218.CallbackData): _218.CallbackDataAmino;
            fromAminoMsg(object: _218.CallbackDataAminoMsg): _218.CallbackData;
            fromProtoMsg(message: _218.CallbackDataProtoMsg): _218.CallbackData;
            toProto(message: _218.CallbackData): Uint8Array;
            toProtoMsg(message: _218.CallbackData): _218.CallbackDataProtoMsg;
        };
    };
    const icaoracle: {
        MsgClientImpl: typeof _434.MsgClientImpl;
        QueryClientImpl: typeof _423.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            oracle(request: _227.QueryOracleRequest): Promise<_227.QueryOracleResponse>;
            allOracles(request?: _227.QueryAllOraclesRequest): Promise<_227.QueryAllOraclesResponse>;
            activeOracles(request: _227.QueryActiveOraclesRequest): Promise<_227.QueryActiveOraclesResponse>;
            metrics(request: _227.QueryMetricsRequest): Promise<_227.QueryMetricsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                addOracle(value: _228.MsgAddOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                instantiateOracle(value: _228.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreOracleICA(value: _228.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                toggleOracle(value: _228.MsgToggleOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeOracle(value: _228.MsgRemoveOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                addOracle(value: _228.MsgAddOracle): {
                    typeUrl: string;
                    value: _228.MsgAddOracle;
                };
                instantiateOracle(value: _228.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: _228.MsgInstantiateOracle;
                };
                restoreOracleICA(value: _228.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: _228.MsgRestoreOracleICA;
                };
                toggleOracle(value: _228.MsgToggleOracle): {
                    typeUrl: string;
                    value: _228.MsgToggleOracle;
                };
                removeOracle(value: _228.MsgRemoveOracle): {
                    typeUrl: string;
                    value: _228.MsgRemoveOracle;
                };
            };
            fromPartial: {
                addOracle(value: _228.MsgAddOracle): {
                    typeUrl: string;
                    value: _228.MsgAddOracle;
                };
                instantiateOracle(value: _228.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: _228.MsgInstantiateOracle;
                };
                restoreOracleICA(value: _228.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: _228.MsgRestoreOracleICA;
                };
                toggleOracle(value: _228.MsgToggleOracle): {
                    typeUrl: string;
                    value: _228.MsgToggleOracle;
                };
                removeOracle(value: _228.MsgRemoveOracle): {
                    typeUrl: string;
                    value: _228.MsgRemoveOracle;
                };
            };
        };
        AminoConverter: {
            "/stride.icaoracle.MsgAddOracle": {
                aminoType: string;
                toAmino: (message: _228.MsgAddOracle) => _228.MsgAddOracleAmino;
                fromAmino: (object: _228.MsgAddOracleAmino) => _228.MsgAddOracle;
            };
            "/stride.icaoracle.MsgInstantiateOracle": {
                aminoType: string;
                toAmino: (message: _228.MsgInstantiateOracle) => _228.MsgInstantiateOracleAmino;
                fromAmino: (object: _228.MsgInstantiateOracleAmino) => _228.MsgInstantiateOracle;
            };
            "/stride.icaoracle.MsgRestoreOracleICA": {
                aminoType: string;
                toAmino: (message: _228.MsgRestoreOracleICA) => _228.MsgRestoreOracleICAAmino;
                fromAmino: (object: _228.MsgRestoreOracleICAAmino) => _228.MsgRestoreOracleICA;
            };
            "/stride.icaoracle.MsgToggleOracle": {
                aminoType: string;
                toAmino: (message: _228.MsgToggleOracle) => _228.MsgToggleOracleAmino;
                fromAmino: (object: _228.MsgToggleOracleAmino) => _228.MsgToggleOracle;
            };
            "/stride.icaoracle.MsgRemoveOracle": {
                aminoType: string;
                toAmino: (message: _228.MsgRemoveOracle) => _228.MsgRemoveOracleAmino;
                fromAmino: (object: _228.MsgRemoveOracleAmino) => _228.MsgRemoveOracle;
            };
        };
        MsgAddOracle: {
            typeUrl: string;
            encode(message: _228.MsgAddOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgAddOracle;
            fromPartial(object: Partial<_228.MsgAddOracle>): _228.MsgAddOracle;
            fromAmino(object: _228.MsgAddOracleAmino): _228.MsgAddOracle;
            toAmino(message: _228.MsgAddOracle): _228.MsgAddOracleAmino;
            fromAminoMsg(object: _228.MsgAddOracleAminoMsg): _228.MsgAddOracle;
            toAminoMsg(message: _228.MsgAddOracle): _228.MsgAddOracleAminoMsg;
            fromProtoMsg(message: _228.MsgAddOracleProtoMsg): _228.MsgAddOracle;
            toProto(message: _228.MsgAddOracle): Uint8Array;
            toProtoMsg(message: _228.MsgAddOracle): _228.MsgAddOracleProtoMsg;
        };
        MsgAddOracleResponse: {
            typeUrl: string;
            encode(_: _228.MsgAddOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgAddOracleResponse;
            fromPartial(_: Partial<_228.MsgAddOracleResponse>): _228.MsgAddOracleResponse;
            fromAmino(_: _228.MsgAddOracleResponseAmino): _228.MsgAddOracleResponse;
            toAmino(_: _228.MsgAddOracleResponse): _228.MsgAddOracleResponseAmino;
            fromAminoMsg(object: _228.MsgAddOracleResponseAminoMsg): _228.MsgAddOracleResponse;
            fromProtoMsg(message: _228.MsgAddOracleResponseProtoMsg): _228.MsgAddOracleResponse;
            toProto(message: _228.MsgAddOracleResponse): Uint8Array;
            toProtoMsg(message: _228.MsgAddOracleResponse): _228.MsgAddOracleResponseProtoMsg;
        };
        MsgInstantiateOracle: {
            typeUrl: string;
            encode(message: _228.MsgInstantiateOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgInstantiateOracle;
            fromPartial(object: Partial<_228.MsgInstantiateOracle>): _228.MsgInstantiateOracle;
            fromAmino(object: _228.MsgInstantiateOracleAmino): _228.MsgInstantiateOracle;
            toAmino(message: _228.MsgInstantiateOracle): _228.MsgInstantiateOracleAmino;
            fromAminoMsg(object: _228.MsgInstantiateOracleAminoMsg): _228.MsgInstantiateOracle;
            toAminoMsg(message: _228.MsgInstantiateOracle): _228.MsgInstantiateOracleAminoMsg;
            fromProtoMsg(message: _228.MsgInstantiateOracleProtoMsg): _228.MsgInstantiateOracle;
            toProto(message: _228.MsgInstantiateOracle): Uint8Array;
            toProtoMsg(message: _228.MsgInstantiateOracle): _228.MsgInstantiateOracleProtoMsg;
        };
        MsgInstantiateOracleResponse: {
            typeUrl: string;
            encode(_: _228.MsgInstantiateOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgInstantiateOracleResponse;
            fromPartial(_: Partial<_228.MsgInstantiateOracleResponse>): _228.MsgInstantiateOracleResponse;
            fromAmino(_: _228.MsgInstantiateOracleResponseAmino): _228.MsgInstantiateOracleResponse;
            toAmino(_: _228.MsgInstantiateOracleResponse): _228.MsgInstantiateOracleResponseAmino;
            fromAminoMsg(object: _228.MsgInstantiateOracleResponseAminoMsg): _228.MsgInstantiateOracleResponse;
            fromProtoMsg(message: _228.MsgInstantiateOracleResponseProtoMsg): _228.MsgInstantiateOracleResponse;
            toProto(message: _228.MsgInstantiateOracleResponse): Uint8Array;
            toProtoMsg(message: _228.MsgInstantiateOracleResponse): _228.MsgInstantiateOracleResponseProtoMsg;
        };
        MsgRestoreOracleICA: {
            typeUrl: string;
            encode(message: _228.MsgRestoreOracleICA, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgRestoreOracleICA;
            fromPartial(object: Partial<_228.MsgRestoreOracleICA>): _228.MsgRestoreOracleICA;
            fromAmino(object: _228.MsgRestoreOracleICAAmino): _228.MsgRestoreOracleICA;
            toAmino(message: _228.MsgRestoreOracleICA): _228.MsgRestoreOracleICAAmino;
            fromAminoMsg(object: _228.MsgRestoreOracleICAAminoMsg): _228.MsgRestoreOracleICA;
            toAminoMsg(message: _228.MsgRestoreOracleICA): _228.MsgRestoreOracleICAAminoMsg;
            fromProtoMsg(message: _228.MsgRestoreOracleICAProtoMsg): _228.MsgRestoreOracleICA;
            toProto(message: _228.MsgRestoreOracleICA): Uint8Array;
            toProtoMsg(message: _228.MsgRestoreOracleICA): _228.MsgRestoreOracleICAProtoMsg;
        };
        MsgRestoreOracleICAResponse: {
            typeUrl: string;
            encode(_: _228.MsgRestoreOracleICAResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgRestoreOracleICAResponse;
            fromPartial(_: Partial<_228.MsgRestoreOracleICAResponse>): _228.MsgRestoreOracleICAResponse;
            fromAmino(_: _228.MsgRestoreOracleICAResponseAmino): _228.MsgRestoreOracleICAResponse;
            toAmino(_: _228.MsgRestoreOracleICAResponse): _228.MsgRestoreOracleICAResponseAmino;
            fromAminoMsg(object: _228.MsgRestoreOracleICAResponseAminoMsg): _228.MsgRestoreOracleICAResponse;
            fromProtoMsg(message: _228.MsgRestoreOracleICAResponseProtoMsg): _228.MsgRestoreOracleICAResponse;
            toProto(message: _228.MsgRestoreOracleICAResponse): Uint8Array;
            toProtoMsg(message: _228.MsgRestoreOracleICAResponse): _228.MsgRestoreOracleICAResponseProtoMsg;
        };
        MsgToggleOracle: {
            typeUrl: string;
            encode(message: _228.MsgToggleOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgToggleOracle;
            fromPartial(object: Partial<_228.MsgToggleOracle>): _228.MsgToggleOracle;
            fromAmino(object: _228.MsgToggleOracleAmino): _228.MsgToggleOracle;
            toAmino(message: _228.MsgToggleOracle): _228.MsgToggleOracleAmino;
            fromAminoMsg(object: _228.MsgToggleOracleAminoMsg): _228.MsgToggleOracle;
            toAminoMsg(message: _228.MsgToggleOracle): _228.MsgToggleOracleAminoMsg;
            fromProtoMsg(message: _228.MsgToggleOracleProtoMsg): _228.MsgToggleOracle;
            toProto(message: _228.MsgToggleOracle): Uint8Array;
            toProtoMsg(message: _228.MsgToggleOracle): _228.MsgToggleOracleProtoMsg;
        };
        MsgToggleOracleResponse: {
            typeUrl: string;
            encode(_: _228.MsgToggleOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgToggleOracleResponse;
            fromPartial(_: Partial<_228.MsgToggleOracleResponse>): _228.MsgToggleOracleResponse;
            fromAmino(_: _228.MsgToggleOracleResponseAmino): _228.MsgToggleOracleResponse;
            toAmino(_: _228.MsgToggleOracleResponse): _228.MsgToggleOracleResponseAmino;
            fromAminoMsg(object: _228.MsgToggleOracleResponseAminoMsg): _228.MsgToggleOracleResponse;
            fromProtoMsg(message: _228.MsgToggleOracleResponseProtoMsg): _228.MsgToggleOracleResponse;
            toProto(message: _228.MsgToggleOracleResponse): Uint8Array;
            toProtoMsg(message: _228.MsgToggleOracleResponse): _228.MsgToggleOracleResponseProtoMsg;
        };
        MsgRemoveOracle: {
            typeUrl: string;
            encode(message: _228.MsgRemoveOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgRemoveOracle;
            fromPartial(object: Partial<_228.MsgRemoveOracle>): _228.MsgRemoveOracle;
            fromAmino(object: _228.MsgRemoveOracleAmino): _228.MsgRemoveOracle;
            toAmino(message: _228.MsgRemoveOracle): _228.MsgRemoveOracleAmino;
            fromAminoMsg(object: _228.MsgRemoveOracleAminoMsg): _228.MsgRemoveOracle;
            toAminoMsg(message: _228.MsgRemoveOracle): _228.MsgRemoveOracleAminoMsg;
            fromProtoMsg(message: _228.MsgRemoveOracleProtoMsg): _228.MsgRemoveOracle;
            toProto(message: _228.MsgRemoveOracle): Uint8Array;
            toProtoMsg(message: _228.MsgRemoveOracle): _228.MsgRemoveOracleProtoMsg;
        };
        MsgRemoveOracleResponse: {
            typeUrl: string;
            encode(_: _228.MsgRemoveOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgRemoveOracleResponse;
            fromPartial(_: Partial<_228.MsgRemoveOracleResponse>): _228.MsgRemoveOracleResponse;
            fromAmino(_: _228.MsgRemoveOracleResponseAmino): _228.MsgRemoveOracleResponse;
            toAmino(_: _228.MsgRemoveOracleResponse): _228.MsgRemoveOracleResponseAmino;
            fromAminoMsg(object: _228.MsgRemoveOracleResponseAminoMsg): _228.MsgRemoveOracleResponse;
            fromProtoMsg(message: _228.MsgRemoveOracleResponseProtoMsg): _228.MsgRemoveOracleResponse;
            toProto(message: _228.MsgRemoveOracleResponse): Uint8Array;
            toProtoMsg(message: _228.MsgRemoveOracleResponse): _228.MsgRemoveOracleResponseProtoMsg;
        };
        QueryOracleRequest: {
            typeUrl: string;
            encode(message: _227.QueryOracleRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryOracleRequest;
            fromPartial(object: Partial<_227.QueryOracleRequest>): _227.QueryOracleRequest;
            fromAmino(object: _227.QueryOracleRequestAmino): _227.QueryOracleRequest;
            toAmino(message: _227.QueryOracleRequest): _227.QueryOracleRequestAmino;
            fromAminoMsg(object: _227.QueryOracleRequestAminoMsg): _227.QueryOracleRequest;
            fromProtoMsg(message: _227.QueryOracleRequestProtoMsg): _227.QueryOracleRequest;
            toProto(message: _227.QueryOracleRequest): Uint8Array;
            toProtoMsg(message: _227.QueryOracleRequest): _227.QueryOracleRequestProtoMsg;
        };
        QueryOracleResponse: {
            typeUrl: string;
            encode(message: _227.QueryOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryOracleResponse;
            fromPartial(object: Partial<_227.QueryOracleResponse>): _227.QueryOracleResponse;
            fromAmino(object: _227.QueryOracleResponseAmino): _227.QueryOracleResponse;
            toAmino(message: _227.QueryOracleResponse): _227.QueryOracleResponseAmino;
            fromAminoMsg(object: _227.QueryOracleResponseAminoMsg): _227.QueryOracleResponse;
            fromProtoMsg(message: _227.QueryOracleResponseProtoMsg): _227.QueryOracleResponse;
            toProto(message: _227.QueryOracleResponse): Uint8Array;
            toProtoMsg(message: _227.QueryOracleResponse): _227.QueryOracleResponseProtoMsg;
        };
        QueryAllOraclesRequest: {
            typeUrl: string;
            encode(_: _227.QueryAllOraclesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryAllOraclesRequest;
            fromPartial(_: Partial<_227.QueryAllOraclesRequest>): _227.QueryAllOraclesRequest;
            fromAmino(_: _227.QueryAllOraclesRequestAmino): _227.QueryAllOraclesRequest;
            toAmino(_: _227.QueryAllOraclesRequest): _227.QueryAllOraclesRequestAmino;
            fromAminoMsg(object: _227.QueryAllOraclesRequestAminoMsg): _227.QueryAllOraclesRequest;
            fromProtoMsg(message: _227.QueryAllOraclesRequestProtoMsg): _227.QueryAllOraclesRequest;
            toProto(message: _227.QueryAllOraclesRequest): Uint8Array;
            toProtoMsg(message: _227.QueryAllOraclesRequest): _227.QueryAllOraclesRequestProtoMsg;
        };
        QueryAllOraclesResponse: {
            typeUrl: string;
            encode(message: _227.QueryAllOraclesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryAllOraclesResponse;
            fromPartial(object: Partial<_227.QueryAllOraclesResponse>): _227.QueryAllOraclesResponse;
            fromAmino(object: _227.QueryAllOraclesResponseAmino): _227.QueryAllOraclesResponse;
            toAmino(message: _227.QueryAllOraclesResponse): _227.QueryAllOraclesResponseAmino;
            fromAminoMsg(object: _227.QueryAllOraclesResponseAminoMsg): _227.QueryAllOraclesResponse;
            fromProtoMsg(message: _227.QueryAllOraclesResponseProtoMsg): _227.QueryAllOraclesResponse;
            toProto(message: _227.QueryAllOraclesResponse): Uint8Array;
            toProtoMsg(message: _227.QueryAllOraclesResponse): _227.QueryAllOraclesResponseProtoMsg;
        };
        QueryActiveOraclesRequest: {
            typeUrl: string;
            encode(message: _227.QueryActiveOraclesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryActiveOraclesRequest;
            fromPartial(object: Partial<_227.QueryActiveOraclesRequest>): _227.QueryActiveOraclesRequest;
            fromAmino(object: _227.QueryActiveOraclesRequestAmino): _227.QueryActiveOraclesRequest;
            toAmino(message: _227.QueryActiveOraclesRequest): _227.QueryActiveOraclesRequestAmino;
            fromAminoMsg(object: _227.QueryActiveOraclesRequestAminoMsg): _227.QueryActiveOraclesRequest;
            fromProtoMsg(message: _227.QueryActiveOraclesRequestProtoMsg): _227.QueryActiveOraclesRequest;
            toProto(message: _227.QueryActiveOraclesRequest): Uint8Array;
            toProtoMsg(message: _227.QueryActiveOraclesRequest): _227.QueryActiveOraclesRequestProtoMsg;
        };
        QueryActiveOraclesResponse: {
            typeUrl: string;
            encode(message: _227.QueryActiveOraclesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryActiveOraclesResponse;
            fromPartial(object: Partial<_227.QueryActiveOraclesResponse>): _227.QueryActiveOraclesResponse;
            fromAmino(object: _227.QueryActiveOraclesResponseAmino): _227.QueryActiveOraclesResponse;
            toAmino(message: _227.QueryActiveOraclesResponse): _227.QueryActiveOraclesResponseAmino;
            fromAminoMsg(object: _227.QueryActiveOraclesResponseAminoMsg): _227.QueryActiveOraclesResponse;
            fromProtoMsg(message: _227.QueryActiveOraclesResponseProtoMsg): _227.QueryActiveOraclesResponse;
            toProto(message: _227.QueryActiveOraclesResponse): Uint8Array;
            toProtoMsg(message: _227.QueryActiveOraclesResponse): _227.QueryActiveOraclesResponseProtoMsg;
        };
        QueryMetricsRequest: {
            typeUrl: string;
            encode(message: _227.QueryMetricsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryMetricsRequest;
            fromPartial(object: Partial<_227.QueryMetricsRequest>): _227.QueryMetricsRequest;
            fromAmino(object: _227.QueryMetricsRequestAmino): _227.QueryMetricsRequest;
            toAmino(message: _227.QueryMetricsRequest): _227.QueryMetricsRequestAmino;
            fromAminoMsg(object: _227.QueryMetricsRequestAminoMsg): _227.QueryMetricsRequest;
            fromProtoMsg(message: _227.QueryMetricsRequestProtoMsg): _227.QueryMetricsRequest;
            toProto(message: _227.QueryMetricsRequest): Uint8Array;
            toProtoMsg(message: _227.QueryMetricsRequest): _227.QueryMetricsRequestProtoMsg;
        };
        QueryMetricsResponse: {
            typeUrl: string;
            encode(message: _227.QueryMetricsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryMetricsResponse;
            fromPartial(object: Partial<_227.QueryMetricsResponse>): _227.QueryMetricsResponse;
            fromAmino(object: _227.QueryMetricsResponseAmino): _227.QueryMetricsResponse;
            toAmino(message: _227.QueryMetricsResponse): _227.QueryMetricsResponseAmino;
            fromAminoMsg(object: _227.QueryMetricsResponseAminoMsg): _227.QueryMetricsResponse;
            fromProtoMsg(message: _227.QueryMetricsResponseProtoMsg): _227.QueryMetricsResponse;
            toProto(message: _227.QueryMetricsResponse): Uint8Array;
            toProtoMsg(message: _227.QueryMetricsResponse): _227.QueryMetricsResponseProtoMsg;
        };
        metricStatusFromJSON(object: any): _226.MetricStatus;
        metricStatusToJSON(object: _226.MetricStatus): string;
        MetricStatus: typeof _226.MetricStatus;
        MetricStatusSDKType: typeof _226.MetricStatus;
        MetricStatusAmino: typeof _226.MetricStatus;
        Oracle: {
            typeUrl: string;
            encode(message: _226.Oracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.Oracle;
            fromPartial(object: Partial<_226.Oracle>): _226.Oracle;
            fromAmino(object: _226.OracleAmino): _226.Oracle;
            toAmino(message: _226.Oracle): _226.OracleAmino;
            fromAminoMsg(object: _226.OracleAminoMsg): _226.Oracle;
            fromProtoMsg(message: _226.OracleProtoMsg): _226.Oracle;
            toProto(message: _226.Oracle): Uint8Array;
            toProtoMsg(message: _226.Oracle): _226.OracleProtoMsg;
        };
        Metric: {
            typeUrl: string;
            encode(message: _226.Metric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.Metric;
            fromPartial(object: Partial<_226.Metric>): _226.Metric;
            fromAmino(object: _226.MetricAmino): _226.Metric;
            toAmino(message: _226.Metric): _226.MetricAmino;
            fromAminoMsg(object: _226.MetricAminoMsg): _226.Metric;
            fromProtoMsg(message: _226.MetricProtoMsg): _226.Metric;
            toProto(message: _226.Metric): Uint8Array;
            toProtoMsg(message: _226.Metric): _226.MetricProtoMsg;
        };
        RedemptionRateAttributes: {
            typeUrl: string;
            encode(message: _226.RedemptionRateAttributes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.RedemptionRateAttributes;
            fromPartial(object: Partial<_226.RedemptionRateAttributes>): _226.RedemptionRateAttributes;
            fromAmino(object: _226.RedemptionRateAttributesAmino): _226.RedemptionRateAttributes;
            toAmino(message: _226.RedemptionRateAttributes): _226.RedemptionRateAttributesAmino;
            fromAminoMsg(object: _226.RedemptionRateAttributesAminoMsg): _226.RedemptionRateAttributes;
            fromProtoMsg(message: _226.RedemptionRateAttributesProtoMsg): _226.RedemptionRateAttributes;
            toProto(message: _226.RedemptionRateAttributes): Uint8Array;
            toProtoMsg(message: _226.RedemptionRateAttributes): _226.RedemptionRateAttributesProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _225.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.Params;
            fromPartial(_: Partial<_225.Params>): _225.Params;
            fromAmino(_: _225.ParamsAmino): _225.Params;
            toAmino(_: _225.Params): _225.ParamsAmino;
            fromAminoMsg(object: _225.ParamsAminoMsg): _225.Params;
            fromProtoMsg(message: _225.ParamsProtoMsg): _225.Params;
            toProto(message: _225.Params): Uint8Array;
            toProtoMsg(message: _225.Params): _225.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _225.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.GenesisState;
            fromPartial(object: Partial<_225.GenesisState>): _225.GenesisState;
            fromAmino(object: _225.GenesisStateAmino): _225.GenesisState;
            toAmino(message: _225.GenesisState): _225.GenesisStateAmino;
            fromAminoMsg(object: _225.GenesisStateAminoMsg): _225.GenesisState;
            fromProtoMsg(message: _225.GenesisStateProtoMsg): _225.GenesisState;
            toProto(message: _225.GenesisState): Uint8Array;
            toProtoMsg(message: _225.GenesisState): _225.GenesisStateProtoMsg;
        };
        MsgInstantiateOracleContract: {
            typeUrl: string;
            encode(message: _224.MsgInstantiateOracleContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgInstantiateOracleContract;
            fromPartial(object: Partial<_224.MsgInstantiateOracleContract>): _224.MsgInstantiateOracleContract;
            fromAmino(object: _224.MsgInstantiateOracleContractAmino): _224.MsgInstantiateOracleContract;
            toAmino(message: _224.MsgInstantiateOracleContract): _224.MsgInstantiateOracleContractAmino;
            fromAminoMsg(object: _224.MsgInstantiateOracleContractAminoMsg): _224.MsgInstantiateOracleContract;
            fromProtoMsg(message: _224.MsgInstantiateOracleContractProtoMsg): _224.MsgInstantiateOracleContract;
            toProto(message: _224.MsgInstantiateOracleContract): Uint8Array;
            toProtoMsg(message: _224.MsgInstantiateOracleContract): _224.MsgInstantiateOracleContractProtoMsg;
        };
        MsgExecuteContractPostMetric: {
            typeUrl: string;
            encode(message: _224.MsgExecuteContractPostMetric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgExecuteContractPostMetric;
            fromPartial(object: Partial<_224.MsgExecuteContractPostMetric>): _224.MsgExecuteContractPostMetric;
            fromAmino(object: _224.MsgExecuteContractPostMetricAmino): _224.MsgExecuteContractPostMetric;
            toAmino(message: _224.MsgExecuteContractPostMetric): _224.MsgExecuteContractPostMetricAmino;
            fromAminoMsg(object: _224.MsgExecuteContractPostMetricAminoMsg): _224.MsgExecuteContractPostMetric;
            fromProtoMsg(message: _224.MsgExecuteContractPostMetricProtoMsg): _224.MsgExecuteContractPostMetric;
            toProto(message: _224.MsgExecuteContractPostMetric): Uint8Array;
            toProtoMsg(message: _224.MsgExecuteContractPostMetric): _224.MsgExecuteContractPostMetricProtoMsg;
        };
        MsgPostMetric: {
            typeUrl: string;
            encode(message: _224.MsgPostMetric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgPostMetric;
            fromPartial(object: Partial<_224.MsgPostMetric>): _224.MsgPostMetric;
            fromAmino(object: _224.MsgPostMetricAmino): _224.MsgPostMetric;
            toAmino(message: _224.MsgPostMetric): _224.MsgPostMetricAmino;
            fromAminoMsg(object: _224.MsgPostMetricAminoMsg): _224.MsgPostMetric;
            fromProtoMsg(message: _224.MsgPostMetricProtoMsg): _224.MsgPostMetric;
            toProto(message: _224.MsgPostMetric): Uint8Array;
            toProtoMsg(message: _224.MsgPostMetric): _224.MsgPostMetricProtoMsg;
        };
        InstantiateOracleCallback: {
            typeUrl: string;
            encode(message: _223.InstantiateOracleCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.InstantiateOracleCallback;
            fromPartial(object: Partial<_223.InstantiateOracleCallback>): _223.InstantiateOracleCallback;
            fromAmino(object: _223.InstantiateOracleCallbackAmino): _223.InstantiateOracleCallback;
            toAmino(message: _223.InstantiateOracleCallback): _223.InstantiateOracleCallbackAmino;
            fromAminoMsg(object: _223.InstantiateOracleCallbackAminoMsg): _223.InstantiateOracleCallback;
            fromProtoMsg(message: _223.InstantiateOracleCallbackProtoMsg): _223.InstantiateOracleCallback;
            toProto(message: _223.InstantiateOracleCallback): Uint8Array;
            toProtoMsg(message: _223.InstantiateOracleCallback): _223.InstantiateOracleCallbackProtoMsg;
        };
        UpdateOracleCallback: {
            typeUrl: string;
            encode(message: _223.UpdateOracleCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.UpdateOracleCallback;
            fromPartial(object: Partial<_223.UpdateOracleCallback>): _223.UpdateOracleCallback;
            fromAmino(object: _223.UpdateOracleCallbackAmino): _223.UpdateOracleCallback;
            toAmino(message: _223.UpdateOracleCallback): _223.UpdateOracleCallbackAmino;
            fromAminoMsg(object: _223.UpdateOracleCallbackAminoMsg): _223.UpdateOracleCallback;
            fromProtoMsg(message: _223.UpdateOracleCallbackProtoMsg): _223.UpdateOracleCallback;
            toProto(message: _223.UpdateOracleCallback): Uint8Array;
            toProtoMsg(message: _223.UpdateOracleCallback): _223.UpdateOracleCallbackProtoMsg;
        };
    };
    const icqoracle: {
        MsgClientImpl: typeof _435.MsgClientImpl;
        QueryClientImpl: typeof _424.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            tokenPrice(request: _231.QueryTokenPriceRequest): Promise<_231.TokenPriceResponse>;
            tokenPrices(request?: _231.QueryTokenPricesRequest): Promise<_231.QueryTokenPricesResponse>;
            params(request?: _231.QueryParamsRequest): Promise<_231.QueryParamsResponse>;
            tokenPriceForQuoteDenom(request: _231.QueryTokenPriceForQuoteDenomRequest): Promise<_231.QueryTokenPriceForQuoteDenomResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                registerTokenPriceQuery(value: _232.MsgRegisterTokenPriceQuery): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeTokenPriceQuery(value: _232.MsgRemoveTokenPriceQuery): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateParams(value: _232.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                registerTokenPriceQuery(value: _232.MsgRegisterTokenPriceQuery): {
                    typeUrl: string;
                    value: _232.MsgRegisterTokenPriceQuery;
                };
                removeTokenPriceQuery(value: _232.MsgRemoveTokenPriceQuery): {
                    typeUrl: string;
                    value: _232.MsgRemoveTokenPriceQuery;
                };
                updateParams(value: _232.MsgUpdateParams): {
                    typeUrl: string;
                    value: _232.MsgUpdateParams;
                };
            };
            fromPartial: {
                registerTokenPriceQuery(value: _232.MsgRegisterTokenPriceQuery): {
                    typeUrl: string;
                    value: _232.MsgRegisterTokenPriceQuery;
                };
                removeTokenPriceQuery(value: _232.MsgRemoveTokenPriceQuery): {
                    typeUrl: string;
                    value: _232.MsgRemoveTokenPriceQuery;
                };
                updateParams(value: _232.MsgUpdateParams): {
                    typeUrl: string;
                    value: _232.MsgUpdateParams;
                };
            };
        };
        AminoConverter: {
            "/stride.icqoracle.MsgRegisterTokenPriceQuery": {
                aminoType: string;
                toAmino: (message: _232.MsgRegisterTokenPriceQuery) => _232.MsgRegisterTokenPriceQueryAmino;
                fromAmino: (object: _232.MsgRegisterTokenPriceQueryAmino) => _232.MsgRegisterTokenPriceQuery;
            };
            "/stride.icqoracle.MsgRemoveTokenPriceQuery": {
                aminoType: string;
                toAmino: (message: _232.MsgRemoveTokenPriceQuery) => _232.MsgRemoveTokenPriceQueryAmino;
                fromAmino: (object: _232.MsgRemoveTokenPriceQueryAmino) => _232.MsgRemoveTokenPriceQuery;
            };
            "/stride.icqoracle.MsgUpdateParams": {
                aminoType: string;
                toAmino: (message: _232.MsgUpdateParams) => _232.MsgUpdateParamsAmino;
                fromAmino: (object: _232.MsgUpdateParamsAmino) => _232.MsgUpdateParams;
            };
        };
        MsgRegisterTokenPriceQuery: {
            typeUrl: string;
            encode(message: _232.MsgRegisterTokenPriceQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgRegisterTokenPriceQuery;
            fromPartial(object: Partial<_232.MsgRegisterTokenPriceQuery>): _232.MsgRegisterTokenPriceQuery;
            fromAmino(object: _232.MsgRegisterTokenPriceQueryAmino): _232.MsgRegisterTokenPriceQuery;
            toAmino(message: _232.MsgRegisterTokenPriceQuery): _232.MsgRegisterTokenPriceQueryAmino;
            fromAminoMsg(object: _232.MsgRegisterTokenPriceQueryAminoMsg): _232.MsgRegisterTokenPriceQuery;
            toAminoMsg(message: _232.MsgRegisterTokenPriceQuery): _232.MsgRegisterTokenPriceQueryAminoMsg;
            fromProtoMsg(message: _232.MsgRegisterTokenPriceQueryProtoMsg): _232.MsgRegisterTokenPriceQuery;
            toProto(message: _232.MsgRegisterTokenPriceQuery): Uint8Array;
            toProtoMsg(message: _232.MsgRegisterTokenPriceQuery): _232.MsgRegisterTokenPriceQueryProtoMsg;
        };
        MsgRegisterTokenPriceQueryResponse: {
            typeUrl: string;
            encode(_: _232.MsgRegisterTokenPriceQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgRegisterTokenPriceQueryResponse;
            fromPartial(_: Partial<_232.MsgRegisterTokenPriceQueryResponse>): _232.MsgRegisterTokenPriceQueryResponse;
            fromAmino(_: _232.MsgRegisterTokenPriceQueryResponseAmino): _232.MsgRegisterTokenPriceQueryResponse;
            toAmino(_: _232.MsgRegisterTokenPriceQueryResponse): _232.MsgRegisterTokenPriceQueryResponseAmino;
            fromAminoMsg(object: _232.MsgRegisterTokenPriceQueryResponseAminoMsg): _232.MsgRegisterTokenPriceQueryResponse;
            fromProtoMsg(message: _232.MsgRegisterTokenPriceQueryResponseProtoMsg): _232.MsgRegisterTokenPriceQueryResponse;
            toProto(message: _232.MsgRegisterTokenPriceQueryResponse): Uint8Array;
            toProtoMsg(message: _232.MsgRegisterTokenPriceQueryResponse): _232.MsgRegisterTokenPriceQueryResponseProtoMsg;
        };
        MsgRemoveTokenPriceQuery: {
            typeUrl: string;
            encode(message: _232.MsgRemoveTokenPriceQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgRemoveTokenPriceQuery;
            fromPartial(object: Partial<_232.MsgRemoveTokenPriceQuery>): _232.MsgRemoveTokenPriceQuery;
            fromAmino(object: _232.MsgRemoveTokenPriceQueryAmino): _232.MsgRemoveTokenPriceQuery;
            toAmino(message: _232.MsgRemoveTokenPriceQuery): _232.MsgRemoveTokenPriceQueryAmino;
            fromAminoMsg(object: _232.MsgRemoveTokenPriceQueryAminoMsg): _232.MsgRemoveTokenPriceQuery;
            toAminoMsg(message: _232.MsgRemoveTokenPriceQuery): _232.MsgRemoveTokenPriceQueryAminoMsg;
            fromProtoMsg(message: _232.MsgRemoveTokenPriceQueryProtoMsg): _232.MsgRemoveTokenPriceQuery;
            toProto(message: _232.MsgRemoveTokenPriceQuery): Uint8Array;
            toProtoMsg(message: _232.MsgRemoveTokenPriceQuery): _232.MsgRemoveTokenPriceQueryProtoMsg;
        };
        MsgRemoveTokenPriceQueryResponse: {
            typeUrl: string;
            encode(_: _232.MsgRemoveTokenPriceQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgRemoveTokenPriceQueryResponse;
            fromPartial(_: Partial<_232.MsgRemoveTokenPriceQueryResponse>): _232.MsgRemoveTokenPriceQueryResponse;
            fromAmino(_: _232.MsgRemoveTokenPriceQueryResponseAmino): _232.MsgRemoveTokenPriceQueryResponse;
            toAmino(_: _232.MsgRemoveTokenPriceQueryResponse): _232.MsgRemoveTokenPriceQueryResponseAmino;
            fromAminoMsg(object: _232.MsgRemoveTokenPriceQueryResponseAminoMsg): _232.MsgRemoveTokenPriceQueryResponse;
            fromProtoMsg(message: _232.MsgRemoveTokenPriceQueryResponseProtoMsg): _232.MsgRemoveTokenPriceQueryResponse;
            toProto(message: _232.MsgRemoveTokenPriceQueryResponse): Uint8Array;
            toProtoMsg(message: _232.MsgRemoveTokenPriceQueryResponse): _232.MsgRemoveTokenPriceQueryResponseProtoMsg;
        };
        MsgUpdateParams: {
            typeUrl: string;
            encode(message: _232.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgUpdateParams;
            fromPartial(object: Partial<_232.MsgUpdateParams>): _232.MsgUpdateParams;
            fromAmino(object: _232.MsgUpdateParamsAmino): _232.MsgUpdateParams;
            toAmino(message: _232.MsgUpdateParams): _232.MsgUpdateParamsAmino;
            fromAminoMsg(object: _232.MsgUpdateParamsAminoMsg): _232.MsgUpdateParams;
            toAminoMsg(message: _232.MsgUpdateParams): _232.MsgUpdateParamsAminoMsg;
            fromProtoMsg(message: _232.MsgUpdateParamsProtoMsg): _232.MsgUpdateParams;
            toProto(message: _232.MsgUpdateParams): Uint8Array;
            toProtoMsg(message: _232.MsgUpdateParams): _232.MsgUpdateParamsProtoMsg;
        };
        MsgUpdateParamsResponse: {
            typeUrl: string;
            encode(_: _232.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgUpdateParamsResponse;
            fromPartial(_: Partial<_232.MsgUpdateParamsResponse>): _232.MsgUpdateParamsResponse;
            fromAmino(_: _232.MsgUpdateParamsResponseAmino): _232.MsgUpdateParamsResponse;
            toAmino(_: _232.MsgUpdateParamsResponse): _232.MsgUpdateParamsResponseAmino;
            fromAminoMsg(object: _232.MsgUpdateParamsResponseAminoMsg): _232.MsgUpdateParamsResponse;
            fromProtoMsg(message: _232.MsgUpdateParamsResponseProtoMsg): _232.MsgUpdateParamsResponse;
            toProto(message: _232.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _232.MsgUpdateParamsResponse): _232.MsgUpdateParamsResponseProtoMsg;
        };
        QueryTokenPriceRequest: {
            typeUrl: string;
            encode(message: _231.QueryTokenPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.QueryTokenPriceRequest;
            fromPartial(object: Partial<_231.QueryTokenPriceRequest>): _231.QueryTokenPriceRequest;
            fromAmino(object: _231.QueryTokenPriceRequestAmino): _231.QueryTokenPriceRequest;
            toAmino(message: _231.QueryTokenPriceRequest): _231.QueryTokenPriceRequestAmino;
            fromAminoMsg(object: _231.QueryTokenPriceRequestAminoMsg): _231.QueryTokenPriceRequest;
            fromProtoMsg(message: _231.QueryTokenPriceRequestProtoMsg): _231.QueryTokenPriceRequest;
            toProto(message: _231.QueryTokenPriceRequest): Uint8Array;
            toProtoMsg(message: _231.QueryTokenPriceRequest): _231.QueryTokenPriceRequestProtoMsg;
        };
        QueryTokenPricesRequest: {
            typeUrl: string;
            encode(message: _231.QueryTokenPricesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.QueryTokenPricesRequest;
            fromPartial(object: Partial<_231.QueryTokenPricesRequest>): _231.QueryTokenPricesRequest;
            fromAmino(object: _231.QueryTokenPricesRequestAmino): _231.QueryTokenPricesRequest;
            toAmino(message: _231.QueryTokenPricesRequest): _231.QueryTokenPricesRequestAmino;
            fromAminoMsg(object: _231.QueryTokenPricesRequestAminoMsg): _231.QueryTokenPricesRequest;
            fromProtoMsg(message: _231.QueryTokenPricesRequestProtoMsg): _231.QueryTokenPricesRequest;
            toProto(message: _231.QueryTokenPricesRequest): Uint8Array;
            toProtoMsg(message: _231.QueryTokenPricesRequest): _231.QueryTokenPricesRequestProtoMsg;
        };
        TokenPriceResponse: {
            typeUrl: string;
            encode(message: _231.TokenPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.TokenPriceResponse;
            fromPartial(object: Partial<_231.TokenPriceResponse>): _231.TokenPriceResponse;
            fromAmino(object: _231.TokenPriceResponseAmino): _231.TokenPriceResponse;
            toAmino(message: _231.TokenPriceResponse): _231.TokenPriceResponseAmino;
            fromAminoMsg(object: _231.TokenPriceResponseAminoMsg): _231.TokenPriceResponse;
            fromProtoMsg(message: _231.TokenPriceResponseProtoMsg): _231.TokenPriceResponse;
            toProto(message: _231.TokenPriceResponse): Uint8Array;
            toProtoMsg(message: _231.TokenPriceResponse): _231.TokenPriceResponseProtoMsg;
        };
        QueryTokenPricesResponse: {
            typeUrl: string;
            encode(message: _231.QueryTokenPricesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.QueryTokenPricesResponse;
            fromPartial(object: Partial<_231.QueryTokenPricesResponse>): _231.QueryTokenPricesResponse;
            fromAmino(object: _231.QueryTokenPricesResponseAmino): _231.QueryTokenPricesResponse;
            toAmino(message: _231.QueryTokenPricesResponse): _231.QueryTokenPricesResponseAmino;
            fromAminoMsg(object: _231.QueryTokenPricesResponseAminoMsg): _231.QueryTokenPricesResponse;
            fromProtoMsg(message: _231.QueryTokenPricesResponseProtoMsg): _231.QueryTokenPricesResponse;
            toProto(message: _231.QueryTokenPricesResponse): Uint8Array;
            toProtoMsg(message: _231.QueryTokenPricesResponse): _231.QueryTokenPricesResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _231.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.QueryParamsRequest;
            fromPartial(_: Partial<_231.QueryParamsRequest>): _231.QueryParamsRequest;
            fromAmino(_: _231.QueryParamsRequestAmino): _231.QueryParamsRequest;
            toAmino(_: _231.QueryParamsRequest): _231.QueryParamsRequestAmino;
            fromAminoMsg(object: _231.QueryParamsRequestAminoMsg): _231.QueryParamsRequest;
            fromProtoMsg(message: _231.QueryParamsRequestProtoMsg): _231.QueryParamsRequest;
            toProto(message: _231.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _231.QueryParamsRequest): _231.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _231.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.QueryParamsResponse;
            fromPartial(object: Partial<_231.QueryParamsResponse>): _231.QueryParamsResponse;
            fromAmino(object: _231.QueryParamsResponseAmino): _231.QueryParamsResponse;
            toAmino(message: _231.QueryParamsResponse): _231.QueryParamsResponseAmino;
            fromAminoMsg(object: _231.QueryParamsResponseAminoMsg): _231.QueryParamsResponse;
            fromProtoMsg(message: _231.QueryParamsResponseProtoMsg): _231.QueryParamsResponse;
            toProto(message: _231.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _231.QueryParamsResponse): _231.QueryParamsResponseProtoMsg;
        };
        QueryTokenPriceForQuoteDenomRequest: {
            typeUrl: string;
            encode(message: _231.QueryTokenPriceForQuoteDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.QueryTokenPriceForQuoteDenomRequest;
            fromPartial(object: Partial<_231.QueryTokenPriceForQuoteDenomRequest>): _231.QueryTokenPriceForQuoteDenomRequest;
            fromAmino(object: _231.QueryTokenPriceForQuoteDenomRequestAmino): _231.QueryTokenPriceForQuoteDenomRequest;
            toAmino(message: _231.QueryTokenPriceForQuoteDenomRequest): _231.QueryTokenPriceForQuoteDenomRequestAmino;
            fromAminoMsg(object: _231.QueryTokenPriceForQuoteDenomRequestAminoMsg): _231.QueryTokenPriceForQuoteDenomRequest;
            fromProtoMsg(message: _231.QueryTokenPriceForQuoteDenomRequestProtoMsg): _231.QueryTokenPriceForQuoteDenomRequest;
            toProto(message: _231.QueryTokenPriceForQuoteDenomRequest): Uint8Array;
            toProtoMsg(message: _231.QueryTokenPriceForQuoteDenomRequest): _231.QueryTokenPriceForQuoteDenomRequestProtoMsg;
        };
        QueryTokenPriceForQuoteDenomResponse: {
            typeUrl: string;
            encode(message: _231.QueryTokenPriceForQuoteDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.QueryTokenPriceForQuoteDenomResponse;
            fromPartial(object: Partial<_231.QueryTokenPriceForQuoteDenomResponse>): _231.QueryTokenPriceForQuoteDenomResponse;
            fromAmino(object: _231.QueryTokenPriceForQuoteDenomResponseAmino): _231.QueryTokenPriceForQuoteDenomResponse;
            toAmino(message: _231.QueryTokenPriceForQuoteDenomResponse): _231.QueryTokenPriceForQuoteDenomResponseAmino;
            fromAminoMsg(object: _231.QueryTokenPriceForQuoteDenomResponseAminoMsg): _231.QueryTokenPriceForQuoteDenomResponse;
            fromProtoMsg(message: _231.QueryTokenPriceForQuoteDenomResponseProtoMsg): _231.QueryTokenPriceForQuoteDenomResponse;
            toProto(message: _231.QueryTokenPriceForQuoteDenomResponse): Uint8Array;
            toProtoMsg(message: _231.QueryTokenPriceForQuoteDenomResponse): _231.QueryTokenPriceForQuoteDenomResponseProtoMsg;
        };
        TokenPrice: {
            typeUrl: string;
            encode(message: _230.TokenPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.TokenPrice;
            fromPartial(object: Partial<_230.TokenPrice>): _230.TokenPrice;
            fromAmino(object: _230.TokenPriceAmino): _230.TokenPrice;
            toAmino(message: _230.TokenPrice): _230.TokenPriceAmino;
            fromAminoMsg(object: _230.TokenPriceAminoMsg): _230.TokenPrice;
            fromProtoMsg(message: _230.TokenPriceProtoMsg): _230.TokenPrice;
            toProto(message: _230.TokenPrice): Uint8Array;
            toProtoMsg(message: _230.TokenPrice): _230.TokenPriceProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _230.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.Params;
            fromPartial(object: Partial<_230.Params>): _230.Params;
            fromAmino(object: _230.ParamsAmino): _230.Params;
            toAmino(message: _230.Params): _230.ParamsAmino;
            fromAminoMsg(object: _230.ParamsAminoMsg): _230.Params;
            fromProtoMsg(message: _230.ParamsProtoMsg): _230.Params;
            toProto(message: _230.Params): Uint8Array;
            toProtoMsg(message: _230.Params): _230.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _229.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.GenesisState;
            fromPartial(object: Partial<_229.GenesisState>): _229.GenesisState;
            fromAmino(object: _229.GenesisStateAmino): _229.GenesisState;
            toAmino(message: _229.GenesisState): _229.GenesisStateAmino;
            fromAminoMsg(object: _229.GenesisStateAminoMsg): _229.GenesisState;
            fromProtoMsg(message: _229.GenesisStateProtoMsg): _229.GenesisState;
            toProto(message: _229.GenesisState): Uint8Array;
            toProtoMsg(message: _229.GenesisState): _229.GenesisStateProtoMsg;
        };
    };
    namespace interchainquery {
        const v1: {
            MsgClientImpl: typeof _436.MsgClientImpl;
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitQueryResponse(value: _235.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitQueryResponse(value: _235.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _235.MsgSubmitQueryResponse;
                    };
                };
                fromPartial: {
                    submitQueryResponse(value: _235.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _235.MsgSubmitQueryResponse;
                    };
                };
            };
            AminoConverter: {
                "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
                    aminoType: string;
                    toAmino: (message: _235.MsgSubmitQueryResponse) => _235.MsgSubmitQueryResponseAmino;
                    fromAmino: (object: _235.MsgSubmitQueryResponseAmino) => _235.MsgSubmitQueryResponse;
                };
            };
            MsgSubmitQueryResponse: {
                typeUrl: string;
                encode(message: _235.MsgSubmitQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgSubmitQueryResponse;
                fromPartial(object: Partial<_235.MsgSubmitQueryResponse>): _235.MsgSubmitQueryResponse;
                fromAmino(object: _235.MsgSubmitQueryResponseAmino): _235.MsgSubmitQueryResponse;
                toAmino(message: _235.MsgSubmitQueryResponse): _235.MsgSubmitQueryResponseAmino;
                fromAminoMsg(object: _235.MsgSubmitQueryResponseAminoMsg): _235.MsgSubmitQueryResponse;
                toAminoMsg(message: _235.MsgSubmitQueryResponse): _235.MsgSubmitQueryResponseAminoMsg;
                fromProtoMsg(message: _235.MsgSubmitQueryResponseProtoMsg): _235.MsgSubmitQueryResponse;
                toProto(message: _235.MsgSubmitQueryResponse): Uint8Array;
                toProtoMsg(message: _235.MsgSubmitQueryResponse): _235.MsgSubmitQueryResponseProtoMsg;
            };
            MsgSubmitQueryResponseResponse: {
                typeUrl: string;
                encode(_: _235.MsgSubmitQueryResponseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgSubmitQueryResponseResponse;
                fromPartial(_: Partial<_235.MsgSubmitQueryResponseResponse>): _235.MsgSubmitQueryResponseResponse;
                fromAmino(_: _235.MsgSubmitQueryResponseResponseAmino): _235.MsgSubmitQueryResponseResponse;
                toAmino(_: _235.MsgSubmitQueryResponseResponse): _235.MsgSubmitQueryResponseResponseAmino;
                fromAminoMsg(object: _235.MsgSubmitQueryResponseResponseAminoMsg): _235.MsgSubmitQueryResponseResponse;
                fromProtoMsg(message: _235.MsgSubmitQueryResponseResponseProtoMsg): _235.MsgSubmitQueryResponseResponse;
                toProto(message: _235.MsgSubmitQueryResponseResponse): Uint8Array;
                toProtoMsg(message: _235.MsgSubmitQueryResponseResponse): _235.MsgSubmitQueryResponseResponseProtoMsg;
            };
            QueryPendingQueriesRequest: {
                typeUrl: string;
                encode(_: _234.QueryPendingQueriesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.QueryPendingQueriesRequest;
                fromPartial(_: Partial<_234.QueryPendingQueriesRequest>): _234.QueryPendingQueriesRequest;
                fromAmino(_: _234.QueryPendingQueriesRequestAmino): _234.QueryPendingQueriesRequest;
                toAmino(_: _234.QueryPendingQueriesRequest): _234.QueryPendingQueriesRequestAmino;
                fromAminoMsg(object: _234.QueryPendingQueriesRequestAminoMsg): _234.QueryPendingQueriesRequest;
                fromProtoMsg(message: _234.QueryPendingQueriesRequestProtoMsg): _234.QueryPendingQueriesRequest;
                toProto(message: _234.QueryPendingQueriesRequest): Uint8Array;
                toProtoMsg(message: _234.QueryPendingQueriesRequest): _234.QueryPendingQueriesRequestProtoMsg;
            };
            QueryPendingQueriesResponse: {
                typeUrl: string;
                encode(message: _234.QueryPendingQueriesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.QueryPendingQueriesResponse;
                fromPartial(object: Partial<_234.QueryPendingQueriesResponse>): _234.QueryPendingQueriesResponse;
                fromAmino(object: _234.QueryPendingQueriesResponseAmino): _234.QueryPendingQueriesResponse;
                toAmino(message: _234.QueryPendingQueriesResponse): _234.QueryPendingQueriesResponseAmino;
                fromAminoMsg(object: _234.QueryPendingQueriesResponseAminoMsg): _234.QueryPendingQueriesResponse;
                fromProtoMsg(message: _234.QueryPendingQueriesResponseProtoMsg): _234.QueryPendingQueriesResponse;
                toProto(message: _234.QueryPendingQueriesResponse): Uint8Array;
                toProtoMsg(message: _234.QueryPendingQueriesResponse): _234.QueryPendingQueriesResponseProtoMsg;
            };
            timeoutPolicyFromJSON(object: any): _233.TimeoutPolicy;
            timeoutPolicyToJSON(object: _233.TimeoutPolicy): string;
            TimeoutPolicy: typeof _233.TimeoutPolicy;
            TimeoutPolicySDKType: typeof _233.TimeoutPolicy;
            TimeoutPolicyAmino: typeof _233.TimeoutPolicy;
            Query: {
                typeUrl: string;
                encode(message: _233.Query, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.Query;
                fromPartial(object: Partial<_233.Query>): _233.Query;
                fromAmino(object: _233.QueryAmino): _233.Query;
                toAmino(message: _233.Query): _233.QueryAmino;
                fromAminoMsg(object: _233.QueryAminoMsg): _233.Query;
                fromProtoMsg(message: _233.QueryProtoMsg): _233.Query;
                toProto(message: _233.Query): Uint8Array;
                toProtoMsg(message: _233.Query): _233.QueryProtoMsg;
            };
            DataPoint: {
                typeUrl: string;
                encode(message: _233.DataPoint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.DataPoint;
                fromPartial(object: Partial<_233.DataPoint>): _233.DataPoint;
                fromAmino(object: _233.DataPointAmino): _233.DataPoint;
                toAmino(message: _233.DataPoint): _233.DataPointAmino;
                fromAminoMsg(object: _233.DataPointAminoMsg): _233.DataPoint;
                fromProtoMsg(message: _233.DataPointProtoMsg): _233.DataPoint;
                toProto(message: _233.DataPoint): Uint8Array;
                toProtoMsg(message: _233.DataPoint): _233.DataPointProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _233.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.GenesisState;
                fromPartial(object: Partial<_233.GenesisState>): _233.GenesisState;
                fromAmino(object: _233.GenesisStateAmino): _233.GenesisState;
                toAmino(message: _233.GenesisState): _233.GenesisStateAmino;
                fromAminoMsg(object: _233.GenesisStateAminoMsg): _233.GenesisState;
                fromProtoMsg(message: _233.GenesisStateProtoMsg): _233.GenesisState;
                toProto(message: _233.GenesisState): Uint8Array;
                toProtoMsg(message: _233.GenesisState): _233.GenesisStateProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _425.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _238.QueryParamsRequest): Promise<_238.QueryParamsResponse>;
                epochProvisions(request?: _238.QueryEpochProvisionsRequest): Promise<_238.QueryEpochProvisionsResponse>;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _238.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.QueryParamsRequest;
                fromPartial(_: Partial<_238.QueryParamsRequest>): _238.QueryParamsRequest;
                fromAmino(_: _238.QueryParamsRequestAmino): _238.QueryParamsRequest;
                toAmino(_: _238.QueryParamsRequest): _238.QueryParamsRequestAmino;
                fromAminoMsg(object: _238.QueryParamsRequestAminoMsg): _238.QueryParamsRequest;
                fromProtoMsg(message: _238.QueryParamsRequestProtoMsg): _238.QueryParamsRequest;
                toProto(message: _238.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _238.QueryParamsRequest): _238.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _238.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.QueryParamsResponse;
                fromPartial(object: Partial<_238.QueryParamsResponse>): _238.QueryParamsResponse;
                fromAmino(object: _238.QueryParamsResponseAmino): _238.QueryParamsResponse;
                toAmino(message: _238.QueryParamsResponse): _238.QueryParamsResponseAmino;
                fromAminoMsg(object: _238.QueryParamsResponseAminoMsg): _238.QueryParamsResponse;
                fromProtoMsg(message: _238.QueryParamsResponseProtoMsg): _238.QueryParamsResponse;
                toProto(message: _238.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _238.QueryParamsResponse): _238.QueryParamsResponseProtoMsg;
            };
            QueryEpochProvisionsRequest: {
                typeUrl: string;
                encode(_: _238.QueryEpochProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_238.QueryEpochProvisionsRequest>): _238.QueryEpochProvisionsRequest;
                fromAmino(_: _238.QueryEpochProvisionsRequestAmino): _238.QueryEpochProvisionsRequest;
                toAmino(_: _238.QueryEpochProvisionsRequest): _238.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _238.QueryEpochProvisionsRequestAminoMsg): _238.QueryEpochProvisionsRequest;
                fromProtoMsg(message: _238.QueryEpochProvisionsRequestProtoMsg): _238.QueryEpochProvisionsRequest;
                toProto(message: _238.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _238.QueryEpochProvisionsRequest): _238.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                typeUrl: string;
                encode(message: _238.QueryEpochProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_238.QueryEpochProvisionsResponse>): _238.QueryEpochProvisionsResponse;
                fromAmino(object: _238.QueryEpochProvisionsResponseAmino): _238.QueryEpochProvisionsResponse;
                toAmino(message: _238.QueryEpochProvisionsResponse): _238.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _238.QueryEpochProvisionsResponseAminoMsg): _238.QueryEpochProvisionsResponse;
                fromProtoMsg(message: _238.QueryEpochProvisionsResponseProtoMsg): _238.QueryEpochProvisionsResponse;
                toProto(message: _238.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _238.QueryEpochProvisionsResponse): _238.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _237.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _237.Minter;
                fromPartial(object: Partial<_237.Minter>): _237.Minter;
                fromAmino(object: _237.MinterAmino): _237.Minter;
                toAmino(message: _237.Minter): _237.MinterAmino;
                fromAminoMsg(object: _237.MinterAminoMsg): _237.Minter;
                fromProtoMsg(message: _237.MinterProtoMsg): _237.Minter;
                toProto(message: _237.Minter): Uint8Array;
                toProtoMsg(message: _237.Minter): _237.MinterProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                encode(message: _237.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _237.DistributionProportions;
                fromPartial(object: Partial<_237.DistributionProportions>): _237.DistributionProportions;
                fromAmino(object: _237.DistributionProportionsAmino): _237.DistributionProportions;
                toAmino(message: _237.DistributionProportions): _237.DistributionProportionsAmino;
                fromAminoMsg(object: _237.DistributionProportionsAminoMsg): _237.DistributionProportions;
                fromProtoMsg(message: _237.DistributionProportionsProtoMsg): _237.DistributionProportions;
                toProto(message: _237.DistributionProportions): Uint8Array;
                toProtoMsg(message: _237.DistributionProportions): _237.DistributionProportionsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _237.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _237.Params;
                fromPartial(object: Partial<_237.Params>): _237.Params;
                fromAmino(object: _237.ParamsAmino): _237.Params;
                toAmino(message: _237.Params): _237.ParamsAmino;
                fromAminoMsg(object: _237.ParamsAminoMsg): _237.Params;
                fromProtoMsg(message: _237.ParamsProtoMsg): _237.Params;
                toProto(message: _237.Params): Uint8Array;
                toProtoMsg(message: _237.Params): _237.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _236.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.GenesisState;
                fromPartial(object: Partial<_236.GenesisState>): _236.GenesisState;
                fromAmino(object: _236.GenesisStateAmino): _236.GenesisState;
                toAmino(message: _236.GenesisState): _236.GenesisStateAmino;
                fromAminoMsg(object: _236.GenesisStateAminoMsg): _236.GenesisState;
                fromProtoMsg(message: _236.GenesisStateProtoMsg): _236.GenesisState;
                toProto(message: _236.GenesisState): Uint8Array;
                toProtoMsg(message: _236.GenesisState): _236.GenesisStateProtoMsg;
            };
        };
    }
    const records: {
        QueryClientImpl: typeof _426.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _242.QueryParamsRequest): Promise<_242.QueryParamsResponse>;
            userRedemptionRecord(request: _242.QueryGetUserRedemptionRecordRequest): Promise<_242.QueryGetUserRedemptionRecordResponse>;
            userRedemptionRecordAll(request?: _242.QueryAllUserRedemptionRecordRequest): Promise<_242.QueryAllUserRedemptionRecordResponse>;
            userRedemptionRecordForUser(request: _242.QueryAllUserRedemptionRecordForUserRequest): Promise<_242.QueryAllUserRedemptionRecordForUserResponse>;
            epochUnbondingRecord(request: _242.QueryGetEpochUnbondingRecordRequest): Promise<_242.QueryGetEpochUnbondingRecordResponse>;
            epochUnbondingRecordAll(request?: _242.QueryAllEpochUnbondingRecordRequest): Promise<_242.QueryAllEpochUnbondingRecordResponse>;
            depositRecord(request: _242.QueryGetDepositRecordRequest): Promise<_242.QueryGetDepositRecordResponse>;
            depositRecordAll(request?: _242.QueryAllDepositRecordRequest): Promise<_242.QueryAllDepositRecordResponse>;
            depositRecordByHost(request: _242.QueryDepositRecordByHostRequest): Promise<_242.QueryDepositRecordByHostResponse>;
            lSMDeposit(request: _242.QueryLSMDepositRequest): Promise<_242.QueryLSMDepositResponse>;
            lSMDeposits(request: _242.QueryLSMDepositsRequest): Promise<_242.QueryLSMDepositsResponse>;
        };
        depositRecord_StatusFromJSON(object: any): _243.DepositRecord_Status;
        depositRecord_StatusToJSON(object: _243.DepositRecord_Status): string;
        depositRecord_SourceFromJSON(object: any): _243.DepositRecord_Source;
        depositRecord_SourceToJSON(object: _243.DepositRecord_Source): string;
        hostZoneUnbonding_StatusFromJSON(object: any): _243.HostZoneUnbonding_Status;
        hostZoneUnbonding_StatusToJSON(object: _243.HostZoneUnbonding_Status): string;
        lSMTokenDeposit_StatusFromJSON(object: any): _243.LSMTokenDeposit_Status;
        lSMTokenDeposit_StatusToJSON(object: _243.LSMTokenDeposit_Status): string;
        DepositRecord_Status: typeof _243.DepositRecord_Status;
        DepositRecord_StatusSDKType: typeof _243.DepositRecord_Status;
        DepositRecord_StatusAmino: typeof _243.DepositRecord_Status;
        DepositRecord_Source: typeof _243.DepositRecord_Source;
        DepositRecord_SourceSDKType: typeof _243.DepositRecord_Source;
        DepositRecord_SourceAmino: typeof _243.DepositRecord_Source;
        HostZoneUnbonding_Status: typeof _243.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusSDKType: typeof _243.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusAmino: typeof _243.HostZoneUnbonding_Status;
        LSMTokenDeposit_Status: typeof _243.LSMTokenDeposit_Status;
        LSMTokenDeposit_StatusSDKType: typeof _243.LSMTokenDeposit_Status;
        LSMTokenDeposit_StatusAmino: typeof _243.LSMTokenDeposit_Status;
        UserRedemptionRecord: {
            typeUrl: string;
            encode(message: _243.UserRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.UserRedemptionRecord;
            fromPartial(object: Partial<_243.UserRedemptionRecord>): _243.UserRedemptionRecord;
            fromAmino(object: _243.UserRedemptionRecordAmino): _243.UserRedemptionRecord;
            toAmino(message: _243.UserRedemptionRecord): _243.UserRedemptionRecordAmino;
            fromAminoMsg(object: _243.UserRedemptionRecordAminoMsg): _243.UserRedemptionRecord;
            fromProtoMsg(message: _243.UserRedemptionRecordProtoMsg): _243.UserRedemptionRecord;
            toProto(message: _243.UserRedemptionRecord): Uint8Array;
            toProtoMsg(message: _243.UserRedemptionRecord): _243.UserRedemptionRecordProtoMsg;
        };
        DepositRecord: {
            typeUrl: string;
            encode(message: _243.DepositRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.DepositRecord;
            fromPartial(object: Partial<_243.DepositRecord>): _243.DepositRecord;
            fromAmino(object: _243.DepositRecordAmino): _243.DepositRecord;
            toAmino(message: _243.DepositRecord): _243.DepositRecordAmino;
            fromAminoMsg(object: _243.DepositRecordAminoMsg): _243.DepositRecord;
            fromProtoMsg(message: _243.DepositRecordProtoMsg): _243.DepositRecord;
            toProto(message: _243.DepositRecord): Uint8Array;
            toProtoMsg(message: _243.DepositRecord): _243.DepositRecordProtoMsg;
        };
        HostZoneUnbonding: {
            typeUrl: string;
            encode(message: _243.HostZoneUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.HostZoneUnbonding;
            fromPartial(object: Partial<_243.HostZoneUnbonding>): _243.HostZoneUnbonding;
            fromAmino(object: _243.HostZoneUnbondingAmino): _243.HostZoneUnbonding;
            toAmino(message: _243.HostZoneUnbonding): _243.HostZoneUnbondingAmino;
            fromAminoMsg(object: _243.HostZoneUnbondingAminoMsg): _243.HostZoneUnbonding;
            fromProtoMsg(message: _243.HostZoneUnbondingProtoMsg): _243.HostZoneUnbonding;
            toProto(message: _243.HostZoneUnbonding): Uint8Array;
            toProtoMsg(message: _243.HostZoneUnbonding): _243.HostZoneUnbondingProtoMsg;
        };
        EpochUnbondingRecord: {
            typeUrl: string;
            encode(message: _243.EpochUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.EpochUnbondingRecord;
            fromPartial(object: Partial<_243.EpochUnbondingRecord>): _243.EpochUnbondingRecord;
            fromAmino(object: _243.EpochUnbondingRecordAmino): _243.EpochUnbondingRecord;
            toAmino(message: _243.EpochUnbondingRecord): _243.EpochUnbondingRecordAmino;
            fromAminoMsg(object: _243.EpochUnbondingRecordAminoMsg): _243.EpochUnbondingRecord;
            fromProtoMsg(message: _243.EpochUnbondingRecordProtoMsg): _243.EpochUnbondingRecord;
            toProto(message: _243.EpochUnbondingRecord): Uint8Array;
            toProtoMsg(message: _243.EpochUnbondingRecord): _243.EpochUnbondingRecordProtoMsg;
        };
        LSMTokenDeposit: {
            typeUrl: string;
            encode(message: _243.LSMTokenDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.LSMTokenDeposit;
            fromPartial(object: Partial<_243.LSMTokenDeposit>): _243.LSMTokenDeposit;
            fromAmino(object: _243.LSMTokenDepositAmino): _243.LSMTokenDeposit;
            toAmino(message: _243.LSMTokenDeposit): _243.LSMTokenDepositAmino;
            fromAminoMsg(object: _243.LSMTokenDepositAminoMsg): _243.LSMTokenDeposit;
            fromProtoMsg(message: _243.LSMTokenDepositProtoMsg): _243.LSMTokenDeposit;
            toProto(message: _243.LSMTokenDeposit): Uint8Array;
            toProtoMsg(message: _243.LSMTokenDeposit): _243.LSMTokenDepositProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _242.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryParamsRequest;
            fromPartial(_: Partial<_242.QueryParamsRequest>): _242.QueryParamsRequest;
            fromAmino(_: _242.QueryParamsRequestAmino): _242.QueryParamsRequest;
            toAmino(_: _242.QueryParamsRequest): _242.QueryParamsRequestAmino;
            fromAminoMsg(object: _242.QueryParamsRequestAminoMsg): _242.QueryParamsRequest;
            fromProtoMsg(message: _242.QueryParamsRequestProtoMsg): _242.QueryParamsRequest;
            toProto(message: _242.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _242.QueryParamsRequest): _242.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _242.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryParamsResponse;
            fromPartial(object: Partial<_242.QueryParamsResponse>): _242.QueryParamsResponse;
            fromAmino(object: _242.QueryParamsResponseAmino): _242.QueryParamsResponse;
            toAmino(message: _242.QueryParamsResponse): _242.QueryParamsResponseAmino;
            fromAminoMsg(object: _242.QueryParamsResponseAminoMsg): _242.QueryParamsResponse;
            fromProtoMsg(message: _242.QueryParamsResponseProtoMsg): _242.QueryParamsResponse;
            toProto(message: _242.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _242.QueryParamsResponse): _242.QueryParamsResponseProtoMsg;
        };
        QueryGetDepositRecordRequest: {
            typeUrl: string;
            encode(message: _242.QueryGetDepositRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryGetDepositRecordRequest;
            fromPartial(object: Partial<_242.QueryGetDepositRecordRequest>): _242.QueryGetDepositRecordRequest;
            fromAmino(object: _242.QueryGetDepositRecordRequestAmino): _242.QueryGetDepositRecordRequest;
            toAmino(message: _242.QueryGetDepositRecordRequest): _242.QueryGetDepositRecordRequestAmino;
            fromAminoMsg(object: _242.QueryGetDepositRecordRequestAminoMsg): _242.QueryGetDepositRecordRequest;
            fromProtoMsg(message: _242.QueryGetDepositRecordRequestProtoMsg): _242.QueryGetDepositRecordRequest;
            toProto(message: _242.QueryGetDepositRecordRequest): Uint8Array;
            toProtoMsg(message: _242.QueryGetDepositRecordRequest): _242.QueryGetDepositRecordRequestProtoMsg;
        };
        QueryGetDepositRecordResponse: {
            typeUrl: string;
            encode(message: _242.QueryGetDepositRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryGetDepositRecordResponse;
            fromPartial(object: Partial<_242.QueryGetDepositRecordResponse>): _242.QueryGetDepositRecordResponse;
            fromAmino(object: _242.QueryGetDepositRecordResponseAmino): _242.QueryGetDepositRecordResponse;
            toAmino(message: _242.QueryGetDepositRecordResponse): _242.QueryGetDepositRecordResponseAmino;
            fromAminoMsg(object: _242.QueryGetDepositRecordResponseAminoMsg): _242.QueryGetDepositRecordResponse;
            fromProtoMsg(message: _242.QueryGetDepositRecordResponseProtoMsg): _242.QueryGetDepositRecordResponse;
            toProto(message: _242.QueryGetDepositRecordResponse): Uint8Array;
            toProtoMsg(message: _242.QueryGetDepositRecordResponse): _242.QueryGetDepositRecordResponseProtoMsg;
        };
        QueryAllDepositRecordRequest: {
            typeUrl: string;
            encode(message: _242.QueryAllDepositRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryAllDepositRecordRequest;
            fromPartial(object: Partial<_242.QueryAllDepositRecordRequest>): _242.QueryAllDepositRecordRequest;
            fromAmino(object: _242.QueryAllDepositRecordRequestAmino): _242.QueryAllDepositRecordRequest;
            toAmino(message: _242.QueryAllDepositRecordRequest): _242.QueryAllDepositRecordRequestAmino;
            fromAminoMsg(object: _242.QueryAllDepositRecordRequestAminoMsg): _242.QueryAllDepositRecordRequest;
            fromProtoMsg(message: _242.QueryAllDepositRecordRequestProtoMsg): _242.QueryAllDepositRecordRequest;
            toProto(message: _242.QueryAllDepositRecordRequest): Uint8Array;
            toProtoMsg(message: _242.QueryAllDepositRecordRequest): _242.QueryAllDepositRecordRequestProtoMsg;
        };
        QueryAllDepositRecordResponse: {
            typeUrl: string;
            encode(message: _242.QueryAllDepositRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryAllDepositRecordResponse;
            fromPartial(object: Partial<_242.QueryAllDepositRecordResponse>): _242.QueryAllDepositRecordResponse;
            fromAmino(object: _242.QueryAllDepositRecordResponseAmino): _242.QueryAllDepositRecordResponse;
            toAmino(message: _242.QueryAllDepositRecordResponse): _242.QueryAllDepositRecordResponseAmino;
            fromAminoMsg(object: _242.QueryAllDepositRecordResponseAminoMsg): _242.QueryAllDepositRecordResponse;
            fromProtoMsg(message: _242.QueryAllDepositRecordResponseProtoMsg): _242.QueryAllDepositRecordResponse;
            toProto(message: _242.QueryAllDepositRecordResponse): Uint8Array;
            toProtoMsg(message: _242.QueryAllDepositRecordResponse): _242.QueryAllDepositRecordResponseProtoMsg;
        };
        QueryDepositRecordByHostRequest: {
            typeUrl: string;
            encode(message: _242.QueryDepositRecordByHostRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryDepositRecordByHostRequest;
            fromPartial(object: Partial<_242.QueryDepositRecordByHostRequest>): _242.QueryDepositRecordByHostRequest;
            fromAmino(object: _242.QueryDepositRecordByHostRequestAmino): _242.QueryDepositRecordByHostRequest;
            toAmino(message: _242.QueryDepositRecordByHostRequest): _242.QueryDepositRecordByHostRequestAmino;
            fromAminoMsg(object: _242.QueryDepositRecordByHostRequestAminoMsg): _242.QueryDepositRecordByHostRequest;
            fromProtoMsg(message: _242.QueryDepositRecordByHostRequestProtoMsg): _242.QueryDepositRecordByHostRequest;
            toProto(message: _242.QueryDepositRecordByHostRequest): Uint8Array;
            toProtoMsg(message: _242.QueryDepositRecordByHostRequest): _242.QueryDepositRecordByHostRequestProtoMsg;
        };
        QueryDepositRecordByHostResponse: {
            typeUrl: string;
            encode(message: _242.QueryDepositRecordByHostResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryDepositRecordByHostResponse;
            fromPartial(object: Partial<_242.QueryDepositRecordByHostResponse>): _242.QueryDepositRecordByHostResponse;
            fromAmino(object: _242.QueryDepositRecordByHostResponseAmino): _242.QueryDepositRecordByHostResponse;
            toAmino(message: _242.QueryDepositRecordByHostResponse): _242.QueryDepositRecordByHostResponseAmino;
            fromAminoMsg(object: _242.QueryDepositRecordByHostResponseAminoMsg): _242.QueryDepositRecordByHostResponse;
            fromProtoMsg(message: _242.QueryDepositRecordByHostResponseProtoMsg): _242.QueryDepositRecordByHostResponse;
            toProto(message: _242.QueryDepositRecordByHostResponse): Uint8Array;
            toProtoMsg(message: _242.QueryDepositRecordByHostResponse): _242.QueryDepositRecordByHostResponseProtoMsg;
        };
        QueryGetUserRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _242.QueryGetUserRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryGetUserRedemptionRecordRequest;
            fromPartial(object: Partial<_242.QueryGetUserRedemptionRecordRequest>): _242.QueryGetUserRedemptionRecordRequest;
            fromAmino(object: _242.QueryGetUserRedemptionRecordRequestAmino): _242.QueryGetUserRedemptionRecordRequest;
            toAmino(message: _242.QueryGetUserRedemptionRecordRequest): _242.QueryGetUserRedemptionRecordRequestAmino;
            fromAminoMsg(object: _242.QueryGetUserRedemptionRecordRequestAminoMsg): _242.QueryGetUserRedemptionRecordRequest;
            fromProtoMsg(message: _242.QueryGetUserRedemptionRecordRequestProtoMsg): _242.QueryGetUserRedemptionRecordRequest;
            toProto(message: _242.QueryGetUserRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _242.QueryGetUserRedemptionRecordRequest): _242.QueryGetUserRedemptionRecordRequestProtoMsg;
        };
        QueryGetUserRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _242.QueryGetUserRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryGetUserRedemptionRecordResponse;
            fromPartial(object: Partial<_242.QueryGetUserRedemptionRecordResponse>): _242.QueryGetUserRedemptionRecordResponse;
            fromAmino(object: _242.QueryGetUserRedemptionRecordResponseAmino): _242.QueryGetUserRedemptionRecordResponse;
            toAmino(message: _242.QueryGetUserRedemptionRecordResponse): _242.QueryGetUserRedemptionRecordResponseAmino;
            fromAminoMsg(object: _242.QueryGetUserRedemptionRecordResponseAminoMsg): _242.QueryGetUserRedemptionRecordResponse;
            fromProtoMsg(message: _242.QueryGetUserRedemptionRecordResponseProtoMsg): _242.QueryGetUserRedemptionRecordResponse;
            toProto(message: _242.QueryGetUserRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _242.QueryGetUserRedemptionRecordResponse): _242.QueryGetUserRedemptionRecordResponseProtoMsg;
        };
        QueryAllUserRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _242.QueryAllUserRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryAllUserRedemptionRecordRequest;
            fromPartial(object: Partial<_242.QueryAllUserRedemptionRecordRequest>): _242.QueryAllUserRedemptionRecordRequest;
            fromAmino(object: _242.QueryAllUserRedemptionRecordRequestAmino): _242.QueryAllUserRedemptionRecordRequest;
            toAmino(message: _242.QueryAllUserRedemptionRecordRequest): _242.QueryAllUserRedemptionRecordRequestAmino;
            fromAminoMsg(object: _242.QueryAllUserRedemptionRecordRequestAminoMsg): _242.QueryAllUserRedemptionRecordRequest;
            fromProtoMsg(message: _242.QueryAllUserRedemptionRecordRequestProtoMsg): _242.QueryAllUserRedemptionRecordRequest;
            toProto(message: _242.QueryAllUserRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _242.QueryAllUserRedemptionRecordRequest): _242.QueryAllUserRedemptionRecordRequestProtoMsg;
        };
        QueryAllUserRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _242.QueryAllUserRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryAllUserRedemptionRecordResponse;
            fromPartial(object: Partial<_242.QueryAllUserRedemptionRecordResponse>): _242.QueryAllUserRedemptionRecordResponse;
            fromAmino(object: _242.QueryAllUserRedemptionRecordResponseAmino): _242.QueryAllUserRedemptionRecordResponse;
            toAmino(message: _242.QueryAllUserRedemptionRecordResponse): _242.QueryAllUserRedemptionRecordResponseAmino;
            fromAminoMsg(object: _242.QueryAllUserRedemptionRecordResponseAminoMsg): _242.QueryAllUserRedemptionRecordResponse;
            fromProtoMsg(message: _242.QueryAllUserRedemptionRecordResponseProtoMsg): _242.QueryAllUserRedemptionRecordResponse;
            toProto(message: _242.QueryAllUserRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _242.QueryAllUserRedemptionRecordResponse): _242.QueryAllUserRedemptionRecordResponseProtoMsg;
        };
        QueryAllUserRedemptionRecordForUserRequest: {
            typeUrl: string;
            encode(message: _242.QueryAllUserRedemptionRecordForUserRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryAllUserRedemptionRecordForUserRequest;
            fromPartial(object: Partial<_242.QueryAllUserRedemptionRecordForUserRequest>): _242.QueryAllUserRedemptionRecordForUserRequest;
            fromAmino(object: _242.QueryAllUserRedemptionRecordForUserRequestAmino): _242.QueryAllUserRedemptionRecordForUserRequest;
            toAmino(message: _242.QueryAllUserRedemptionRecordForUserRequest): _242.QueryAllUserRedemptionRecordForUserRequestAmino;
            fromAminoMsg(object: _242.QueryAllUserRedemptionRecordForUserRequestAminoMsg): _242.QueryAllUserRedemptionRecordForUserRequest;
            fromProtoMsg(message: _242.QueryAllUserRedemptionRecordForUserRequestProtoMsg): _242.QueryAllUserRedemptionRecordForUserRequest;
            toProto(message: _242.QueryAllUserRedemptionRecordForUserRequest): Uint8Array;
            toProtoMsg(message: _242.QueryAllUserRedemptionRecordForUserRequest): _242.QueryAllUserRedemptionRecordForUserRequestProtoMsg;
        };
        QueryAllUserRedemptionRecordForUserResponse: {
            typeUrl: string;
            encode(message: _242.QueryAllUserRedemptionRecordForUserResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryAllUserRedemptionRecordForUserResponse;
            fromPartial(object: Partial<_242.QueryAllUserRedemptionRecordForUserResponse>): _242.QueryAllUserRedemptionRecordForUserResponse;
            fromAmino(object: _242.QueryAllUserRedemptionRecordForUserResponseAmino): _242.QueryAllUserRedemptionRecordForUserResponse;
            toAmino(message: _242.QueryAllUserRedemptionRecordForUserResponse): _242.QueryAllUserRedemptionRecordForUserResponseAmino;
            fromAminoMsg(object: _242.QueryAllUserRedemptionRecordForUserResponseAminoMsg): _242.QueryAllUserRedemptionRecordForUserResponse;
            fromProtoMsg(message: _242.QueryAllUserRedemptionRecordForUserResponseProtoMsg): _242.QueryAllUserRedemptionRecordForUserResponse;
            toProto(message: _242.QueryAllUserRedemptionRecordForUserResponse): Uint8Array;
            toProtoMsg(message: _242.QueryAllUserRedemptionRecordForUserResponse): _242.QueryAllUserRedemptionRecordForUserResponseProtoMsg;
        };
        QueryGetEpochUnbondingRecordRequest: {
            typeUrl: string;
            encode(message: _242.QueryGetEpochUnbondingRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryGetEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_242.QueryGetEpochUnbondingRecordRequest>): _242.QueryGetEpochUnbondingRecordRequest;
            fromAmino(object: _242.QueryGetEpochUnbondingRecordRequestAmino): _242.QueryGetEpochUnbondingRecordRequest;
            toAmino(message: _242.QueryGetEpochUnbondingRecordRequest): _242.QueryGetEpochUnbondingRecordRequestAmino;
            fromAminoMsg(object: _242.QueryGetEpochUnbondingRecordRequestAminoMsg): _242.QueryGetEpochUnbondingRecordRequest;
            fromProtoMsg(message: _242.QueryGetEpochUnbondingRecordRequestProtoMsg): _242.QueryGetEpochUnbondingRecordRequest;
            toProto(message: _242.QueryGetEpochUnbondingRecordRequest): Uint8Array;
            toProtoMsg(message: _242.QueryGetEpochUnbondingRecordRequest): _242.QueryGetEpochUnbondingRecordRequestProtoMsg;
        };
        QueryGetEpochUnbondingRecordResponse: {
            typeUrl: string;
            encode(message: _242.QueryGetEpochUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryGetEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_242.QueryGetEpochUnbondingRecordResponse>): _242.QueryGetEpochUnbondingRecordResponse;
            fromAmino(object: _242.QueryGetEpochUnbondingRecordResponseAmino): _242.QueryGetEpochUnbondingRecordResponse;
            toAmino(message: _242.QueryGetEpochUnbondingRecordResponse): _242.QueryGetEpochUnbondingRecordResponseAmino;
            fromAminoMsg(object: _242.QueryGetEpochUnbondingRecordResponseAminoMsg): _242.QueryGetEpochUnbondingRecordResponse;
            fromProtoMsg(message: _242.QueryGetEpochUnbondingRecordResponseProtoMsg): _242.QueryGetEpochUnbondingRecordResponse;
            toProto(message: _242.QueryGetEpochUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _242.QueryGetEpochUnbondingRecordResponse): _242.QueryGetEpochUnbondingRecordResponseProtoMsg;
        };
        QueryAllEpochUnbondingRecordRequest: {
            typeUrl: string;
            encode(message: _242.QueryAllEpochUnbondingRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryAllEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_242.QueryAllEpochUnbondingRecordRequest>): _242.QueryAllEpochUnbondingRecordRequest;
            fromAmino(object: _242.QueryAllEpochUnbondingRecordRequestAmino): _242.QueryAllEpochUnbondingRecordRequest;
            toAmino(message: _242.QueryAllEpochUnbondingRecordRequest): _242.QueryAllEpochUnbondingRecordRequestAmino;
            fromAminoMsg(object: _242.QueryAllEpochUnbondingRecordRequestAminoMsg): _242.QueryAllEpochUnbondingRecordRequest;
            fromProtoMsg(message: _242.QueryAllEpochUnbondingRecordRequestProtoMsg): _242.QueryAllEpochUnbondingRecordRequest;
            toProto(message: _242.QueryAllEpochUnbondingRecordRequest): Uint8Array;
            toProtoMsg(message: _242.QueryAllEpochUnbondingRecordRequest): _242.QueryAllEpochUnbondingRecordRequestProtoMsg;
        };
        QueryAllEpochUnbondingRecordResponse: {
            typeUrl: string;
            encode(message: _242.QueryAllEpochUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryAllEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_242.QueryAllEpochUnbondingRecordResponse>): _242.QueryAllEpochUnbondingRecordResponse;
            fromAmino(object: _242.QueryAllEpochUnbondingRecordResponseAmino): _242.QueryAllEpochUnbondingRecordResponse;
            toAmino(message: _242.QueryAllEpochUnbondingRecordResponse): _242.QueryAllEpochUnbondingRecordResponseAmino;
            fromAminoMsg(object: _242.QueryAllEpochUnbondingRecordResponseAminoMsg): _242.QueryAllEpochUnbondingRecordResponse;
            fromProtoMsg(message: _242.QueryAllEpochUnbondingRecordResponseProtoMsg): _242.QueryAllEpochUnbondingRecordResponse;
            toProto(message: _242.QueryAllEpochUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _242.QueryAllEpochUnbondingRecordResponse): _242.QueryAllEpochUnbondingRecordResponseProtoMsg;
        };
        QueryLSMDepositRequest: {
            typeUrl: string;
            encode(message: _242.QueryLSMDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryLSMDepositRequest;
            fromPartial(object: Partial<_242.QueryLSMDepositRequest>): _242.QueryLSMDepositRequest;
            fromAmino(object: _242.QueryLSMDepositRequestAmino): _242.QueryLSMDepositRequest;
            toAmino(message: _242.QueryLSMDepositRequest): _242.QueryLSMDepositRequestAmino;
            fromAminoMsg(object: _242.QueryLSMDepositRequestAminoMsg): _242.QueryLSMDepositRequest;
            fromProtoMsg(message: _242.QueryLSMDepositRequestProtoMsg): _242.QueryLSMDepositRequest;
            toProto(message: _242.QueryLSMDepositRequest): Uint8Array;
            toProtoMsg(message: _242.QueryLSMDepositRequest): _242.QueryLSMDepositRequestProtoMsg;
        };
        QueryLSMDepositResponse: {
            typeUrl: string;
            encode(message: _242.QueryLSMDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryLSMDepositResponse;
            fromPartial(object: Partial<_242.QueryLSMDepositResponse>): _242.QueryLSMDepositResponse;
            fromAmino(object: _242.QueryLSMDepositResponseAmino): _242.QueryLSMDepositResponse;
            toAmino(message: _242.QueryLSMDepositResponse): _242.QueryLSMDepositResponseAmino;
            fromAminoMsg(object: _242.QueryLSMDepositResponseAminoMsg): _242.QueryLSMDepositResponse;
            fromProtoMsg(message: _242.QueryLSMDepositResponseProtoMsg): _242.QueryLSMDepositResponse;
            toProto(message: _242.QueryLSMDepositResponse): Uint8Array;
            toProtoMsg(message: _242.QueryLSMDepositResponse): _242.QueryLSMDepositResponseProtoMsg;
        };
        QueryLSMDepositsRequest: {
            typeUrl: string;
            encode(message: _242.QueryLSMDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryLSMDepositsRequest;
            fromPartial(object: Partial<_242.QueryLSMDepositsRequest>): _242.QueryLSMDepositsRequest;
            fromAmino(object: _242.QueryLSMDepositsRequestAmino): _242.QueryLSMDepositsRequest;
            toAmino(message: _242.QueryLSMDepositsRequest): _242.QueryLSMDepositsRequestAmino;
            fromAminoMsg(object: _242.QueryLSMDepositsRequestAminoMsg): _242.QueryLSMDepositsRequest;
            fromProtoMsg(message: _242.QueryLSMDepositsRequestProtoMsg): _242.QueryLSMDepositsRequest;
            toProto(message: _242.QueryLSMDepositsRequest): Uint8Array;
            toProtoMsg(message: _242.QueryLSMDepositsRequest): _242.QueryLSMDepositsRequestProtoMsg;
        };
        QueryLSMDepositsResponse: {
            typeUrl: string;
            encode(message: _242.QueryLSMDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryLSMDepositsResponse;
            fromPartial(object: Partial<_242.QueryLSMDepositsResponse>): _242.QueryLSMDepositsResponse;
            fromAmino(object: _242.QueryLSMDepositsResponseAmino): _242.QueryLSMDepositsResponse;
            toAmino(message: _242.QueryLSMDepositsResponse): _242.QueryLSMDepositsResponseAmino;
            fromAminoMsg(object: _242.QueryLSMDepositsResponseAminoMsg): _242.QueryLSMDepositsResponse;
            fromProtoMsg(message: _242.QueryLSMDepositsResponseProtoMsg): _242.QueryLSMDepositsResponse;
            toProto(message: _242.QueryLSMDepositsResponse): Uint8Array;
            toProtoMsg(message: _242.QueryLSMDepositsResponse): _242.QueryLSMDepositsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _241.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.Params;
            fromPartial(_: Partial<_241.Params>): _241.Params;
            fromAmino(_: _241.ParamsAmino): _241.Params;
            toAmino(_: _241.Params): _241.ParamsAmino;
            fromAminoMsg(object: _241.ParamsAminoMsg): _241.Params;
            fromProtoMsg(message: _241.ParamsProtoMsg): _241.Params;
            toProto(message: _241.Params): Uint8Array;
            toProtoMsg(message: _241.Params): _241.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _240.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.GenesisState;
            fromPartial(object: Partial<_240.GenesisState>): _240.GenesisState;
            fromAmino(object: _240.GenesisStateAmino): _240.GenesisState;
            toAmino(message: _240.GenesisState): _240.GenesisStateAmino;
            fromAminoMsg(object: _240.GenesisStateAminoMsg): _240.GenesisState;
            fromProtoMsg(message: _240.GenesisStateProtoMsg): _240.GenesisState;
            toProto(message: _240.GenesisState): Uint8Array;
            toProtoMsg(message: _240.GenesisState): _240.GenesisStateProtoMsg;
        };
        TransferCallback: {
            typeUrl: string;
            encode(message: _239.TransferCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _239.TransferCallback;
            fromPartial(object: Partial<_239.TransferCallback>): _239.TransferCallback;
            fromAmino(object: _239.TransferCallbackAmino): _239.TransferCallback;
            toAmino(message: _239.TransferCallback): _239.TransferCallbackAmino;
            fromAminoMsg(object: _239.TransferCallbackAminoMsg): _239.TransferCallback;
            fromProtoMsg(message: _239.TransferCallbackProtoMsg): _239.TransferCallback;
            toProto(message: _239.TransferCallback): Uint8Array;
            toProtoMsg(message: _239.TransferCallback): _239.TransferCallbackProtoMsg;
        };
        TransferLSMTokenCallback: {
            typeUrl: string;
            encode(message: _239.TransferLSMTokenCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _239.TransferLSMTokenCallback;
            fromPartial(object: Partial<_239.TransferLSMTokenCallback>): _239.TransferLSMTokenCallback;
            fromAmino(object: _239.TransferLSMTokenCallbackAmino): _239.TransferLSMTokenCallback;
            toAmino(message: _239.TransferLSMTokenCallback): _239.TransferLSMTokenCallbackAmino;
            fromAminoMsg(object: _239.TransferLSMTokenCallbackAminoMsg): _239.TransferLSMTokenCallback;
            fromProtoMsg(message: _239.TransferLSMTokenCallbackProtoMsg): _239.TransferLSMTokenCallback;
            toProto(message: _239.TransferLSMTokenCallback): Uint8Array;
            toProtoMsg(message: _239.TransferLSMTokenCallback): _239.TransferLSMTokenCallbackProtoMsg;
        };
    };
    const stakedym: {
        MsgClientImpl: typeof _437.MsgClientImpl;
        QueryClientImpl: typeof _427.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            hostZone(request?: _245.QueryHostZoneRequest): Promise<_245.QueryHostZoneResponse>;
            delegationRecords(request: _245.QueryDelegationRecordsRequest): Promise<_245.QueryDelegationRecordsResponse>;
            unbondingRecords(request: _245.QueryUnbondingRecordsRequest): Promise<_245.QueryUnbondingRecordsResponse>;
            redemptionRecord(request: _245.QueryRedemptionRecordRequest): Promise<_245.QueryRedemptionRecordResponse>;
            redemptionRecords(request: _245.QueryRedemptionRecordsRequest): Promise<_245.QueryRedemptionRecordsResponse>;
            slashRecords(request?: _245.QuerySlashRecordsRequest): Promise<_245.QuerySlashRecordsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _247.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _247.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmDelegation(value: _247.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUndelegation(value: _247.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUnbondedTokenSweep(value: _247.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                adjustDelegatedBalance(value: _247.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _247.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _247.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                refreshRedemptionRate(value: _247.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteDelegationRecord(value: _247.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteUnbondingRecord(value: _247.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteRedemptionRecord(value: _247.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOperatorAddress(value: _247.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _247.MsgLiquidStake): {
                    typeUrl: string;
                    value: _247.MsgLiquidStake;
                };
                redeemStake(value: _247.MsgRedeemStake): {
                    typeUrl: string;
                    value: _247.MsgRedeemStake;
                };
                confirmDelegation(value: _247.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _247.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _247.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _247.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _247.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _247.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _247.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _247.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _247.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _247.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _247.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _247.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _247.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _247.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _247.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _247.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _247.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _247.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _247.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _247.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _247.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _247.MsgSetOperatorAddress;
                };
            };
            fromPartial: {
                liquidStake(value: _247.MsgLiquidStake): {
                    typeUrl: string;
                    value: _247.MsgLiquidStake;
                };
                redeemStake(value: _247.MsgRedeemStake): {
                    typeUrl: string;
                    value: _247.MsgRedeemStake;
                };
                confirmDelegation(value: _247.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _247.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _247.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _247.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _247.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _247.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _247.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _247.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _247.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _247.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _247.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _247.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _247.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _247.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _247.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _247.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _247.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _247.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _247.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _247.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _247.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _247.MsgSetOperatorAddress;
                };
            };
        };
        AminoConverter: {
            "/stride.stakedym.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _247.MsgLiquidStake) => _247.MsgLiquidStakeAmino;
                fromAmino: (object: _247.MsgLiquidStakeAmino) => _247.MsgLiquidStake;
            };
            "/stride.stakedym.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _247.MsgRedeemStake) => _247.MsgRedeemStakeAmino;
                fromAmino: (object: _247.MsgRedeemStakeAmino) => _247.MsgRedeemStake;
            };
            "/stride.stakedym.MsgConfirmDelegation": {
                aminoType: string;
                toAmino: (message: _247.MsgConfirmDelegation) => _247.MsgConfirmDelegationAmino;
                fromAmino: (object: _247.MsgConfirmDelegationAmino) => _247.MsgConfirmDelegation;
            };
            "/stride.stakedym.MsgConfirmUndelegation": {
                aminoType: string;
                toAmino: (message: _247.MsgConfirmUndelegation) => _247.MsgConfirmUndelegationAmino;
                fromAmino: (object: _247.MsgConfirmUndelegationAmino) => _247.MsgConfirmUndelegation;
            };
            "/stride.stakedym.MsgConfirmUnbondedTokenSweep": {
                aminoType: string;
                toAmino: (message: _247.MsgConfirmUnbondedTokenSweep) => _247.MsgConfirmUnbondedTokenSweepAmino;
                fromAmino: (object: _247.MsgConfirmUnbondedTokenSweepAmino) => _247.MsgConfirmUnbondedTokenSweep;
            };
            "/stride.stakedym.MsgAdjustDelegatedBalance": {
                aminoType: string;
                toAmino: (message: _247.MsgAdjustDelegatedBalance) => _247.MsgAdjustDelegatedBalanceAmino;
                fromAmino: (object: _247.MsgAdjustDelegatedBalanceAmino) => _247.MsgAdjustDelegatedBalance;
            };
            "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _247.MsgUpdateInnerRedemptionRateBounds) => _247.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _247.MsgUpdateInnerRedemptionRateBoundsAmino) => _247.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.stakedym.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _247.MsgResumeHostZone) => _247.MsgResumeHostZoneAmino;
                fromAmino: (object: _247.MsgResumeHostZoneAmino) => _247.MsgResumeHostZone;
            };
            "/stride.stakedym.MsgRefreshRedemptionRate": {
                aminoType: string;
                toAmino: (message: _247.MsgRefreshRedemptionRate) => _247.MsgRefreshRedemptionRateAmino;
                fromAmino: (object: _247.MsgRefreshRedemptionRateAmino) => _247.MsgRefreshRedemptionRate;
            };
            "/stride.stakedym.MsgOverwriteDelegationRecord": {
                aminoType: string;
                toAmino: (message: _247.MsgOverwriteDelegationRecord) => _247.MsgOverwriteDelegationRecordAmino;
                fromAmino: (object: _247.MsgOverwriteDelegationRecordAmino) => _247.MsgOverwriteDelegationRecord;
            };
            "/stride.stakedym.MsgOverwriteUnbondingRecord": {
                aminoType: string;
                toAmino: (message: _247.MsgOverwriteUnbondingRecord) => _247.MsgOverwriteUnbondingRecordAmino;
                fromAmino: (object: _247.MsgOverwriteUnbondingRecordAmino) => _247.MsgOverwriteUnbondingRecord;
            };
            "/stride.stakedym.MsgOverwriteRedemptionRecord": {
                aminoType: string;
                toAmino: (message: _247.MsgOverwriteRedemptionRecord) => _247.MsgOverwriteRedemptionRecordAmino;
                fromAmino: (object: _247.MsgOverwriteRedemptionRecordAmino) => _247.MsgOverwriteRedemptionRecord;
            };
            "/stride.stakedym.MsgSetOperatorAddress": {
                aminoType: string;
                toAmino: (message: _247.MsgSetOperatorAddress) => _247.MsgSetOperatorAddressAmino;
                fromAmino: (object: _247.MsgSetOperatorAddressAmino) => _247.MsgSetOperatorAddress;
            };
        };
        overwritableRecordTypeFromJSON(object: any): _247.OverwritableRecordType;
        overwritableRecordTypeToJSON(object: _247.OverwritableRecordType): string;
        OverwritableRecordType: typeof _247.OverwritableRecordType;
        OverwritableRecordTypeSDKType: typeof _247.OverwritableRecordType;
        OverwritableRecordTypeAmino: typeof _247.OverwritableRecordType;
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _247.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.MsgLiquidStake;
            fromPartial(object: Partial<_247.MsgLiquidStake>): _247.MsgLiquidStake;
            fromAmino(object: _247.MsgLiquidStakeAmino): _247.MsgLiquidStake;
            toAmino(message: _247.MsgLiquidStake): _247.MsgLiquidStakeAmino;
            fromAminoMsg(object: _247.MsgLiquidStakeAminoMsg): _247.MsgLiquidStake;
            toAminoMsg(message: _247.MsgLiquidStake): _247.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _247.MsgLiquidStakeProtoMsg): _247.MsgLiquidStake;
            toProto(message: _247.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _247.MsgLiquidStake): _247.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _247.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_247.MsgLiquidStakeResponse>): _247.MsgLiquidStakeResponse;
            fromAmino(object: _247.MsgLiquidStakeResponseAmino): _247.MsgLiquidStakeResponse;
            toAmino(message: _247.MsgLiquidStakeResponse): _247.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _247.MsgLiquidStakeResponseAminoMsg): _247.MsgLiquidStakeResponse;
            fromProtoMsg(message: _247.MsgLiquidStakeResponseProtoMsg): _247.MsgLiquidStakeResponse;
            toProto(message: _247.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _247.MsgLiquidStakeResponse): _247.MsgLiquidStakeResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _247.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.MsgRedeemStake;
            fromPartial(object: Partial<_247.MsgRedeemStake>): _247.MsgRedeemStake;
            fromAmino(object: _247.MsgRedeemStakeAmino): _247.MsgRedeemStake;
            toAmino(message: _247.MsgRedeemStake): _247.MsgRedeemStakeAmino;
            fromAminoMsg(object: _247.MsgRedeemStakeAminoMsg): _247.MsgRedeemStake;
            toAminoMsg(message: _247.MsgRedeemStake): _247.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _247.MsgRedeemStakeProtoMsg): _247.MsgRedeemStake;
            toProto(message: _247.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _247.MsgRedeemStake): _247.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(message: _247.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.MsgRedeemStakeResponse;
            fromPartial(object: Partial<_247.MsgRedeemStakeResponse>): _247.MsgRedeemStakeResponse;
            fromAmino(object: _247.MsgRedeemStakeResponseAmino): _247.MsgRedeemStakeResponse;
            toAmino(message: _247.MsgRedeemStakeResponse): _247.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _247.MsgRedeemStakeResponseAminoMsg): _247.MsgRedeemStakeResponse;
            fromProtoMsg(message: _247.MsgRedeemStakeResponseProtoMsg): _247.MsgRedeemStakeResponse;
            toProto(message: _247.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _247.MsgRedeemStakeResponse): _247.MsgRedeemStakeResponseProtoMsg;
        };
        MsgConfirmDelegation: {
            typeUrl: string;
            encode(message: _247.MsgConfirmDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.MsgConfirmDelegation;
            fromPartial(object: Partial<_247.MsgConfirmDelegation>): _247.MsgConfirmDelegation;
            fromAmino(object: _247.MsgConfirmDelegationAmino): _247.MsgConfirmDelegation;
            toAmino(message: _247.MsgConfirmDelegation): _247.MsgConfirmDelegationAmino;
            fromAminoMsg(object: _247.MsgConfirmDelegationAminoMsg): _247.MsgConfirmDelegation;
            toAminoMsg(message: _247.MsgConfirmDelegation): _247.MsgConfirmDelegationAminoMsg;
            fromProtoMsg(message: _247.MsgConfirmDelegationProtoMsg): _247.MsgConfirmDelegation;
            toProto(message: _247.MsgConfirmDelegation): Uint8Array;
            toProtoMsg(message: _247.MsgConfirmDelegation): _247.MsgConfirmDelegationProtoMsg;
        };
        MsgConfirmDelegationResponse: {
            typeUrl: string;
            encode(_: _247.MsgConfirmDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.MsgConfirmDelegationResponse;
            fromPartial(_: Partial<_247.MsgConfirmDelegationResponse>): _247.MsgConfirmDelegationResponse;
            fromAmino(_: _247.MsgConfirmDelegationResponseAmino): _247.MsgConfirmDelegationResponse;
            toAmino(_: _247.MsgConfirmDelegationResponse): _247.MsgConfirmDelegationResponseAmino;
            fromAminoMsg(object: _247.MsgConfirmDelegationResponseAminoMsg): _247.MsgConfirmDelegationResponse;
            fromProtoMsg(message: _247.MsgConfirmDelegationResponseProtoMsg): _247.MsgConfirmDelegationResponse;
            toProto(message: _247.MsgConfirmDelegationResponse): Uint8Array;
            toProtoMsg(message: _247.MsgConfirmDelegationResponse): _247.MsgConfirmDelegationResponseProtoMsg;
        };
        MsgConfirmUndelegation: {
            typeUrl: string;
            encode(message: _247.MsgConfirmUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.MsgConfirmUndelegation;
            fromPartial(object: Partial<_247.MsgConfirmUndelegation>): _247.MsgConfirmUndelegation;
            fromAmino(object: _247.MsgConfirmUndelegationAmino): _247.MsgConfirmUndelegation;
            toAmino(message: _247.MsgConfirmUndelegation): _247.MsgConfirmUndelegationAmino;
            fromAminoMsg(object: _247.MsgConfirmUndelegationAminoMsg): _247.MsgConfirmUndelegation;
            toAminoMsg(message: _247.MsgConfirmUndelegation): _247.MsgConfirmUndelegationAminoMsg;
            fromProtoMsg(message: _247.MsgConfirmUndelegationProtoMsg): _247.MsgConfirmUndelegation;
            toProto(message: _247.MsgConfirmUndelegation): Uint8Array;
            toProtoMsg(message: _247.MsgConfirmUndelegation): _247.MsgConfirmUndelegationProtoMsg;
        };
        MsgConfirmUndelegationResponse: {
            typeUrl: string;
            encode(_: _247.MsgConfirmUndelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.MsgConfirmUndelegationResponse;
            fromPartial(_: Partial<_247.MsgConfirmUndelegationResponse>): _247.MsgConfirmUndelegationResponse;
            fromAmino(_: _247.MsgConfirmUndelegationResponseAmino): _247.MsgConfirmUndelegationResponse;
            toAmino(_: _247.MsgConfirmUndelegationResponse): _247.MsgConfirmUndelegationResponseAmino;
            fromAminoMsg(object: _247.MsgConfirmUndelegationResponseAminoMsg): _247.MsgConfirmUndelegationResponse;
            fromProtoMsg(message: _247.MsgConfirmUndelegationResponseProtoMsg): _247.MsgConfirmUndelegationResponse;
            toProto(message: _247.MsgConfirmUndelegationResponse): Uint8Array;
            toProtoMsg(message: _247.MsgConfirmUndelegationResponse): _247.MsgConfirmUndelegationResponseProtoMsg;
        };
        MsgConfirmUnbondedTokenSweep: {
            typeUrl: string;
            encode(message: _247.MsgConfirmUnbondedTokenSweep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.MsgConfirmUnbondedTokenSweep;
            fromPartial(object: Partial<_247.MsgConfirmUnbondedTokenSweep>): _247.MsgConfirmUnbondedTokenSweep;
            fromAmino(object: _247.MsgConfirmUnbondedTokenSweepAmino): _247.MsgConfirmUnbondedTokenSweep;
            toAmino(message: _247.MsgConfirmUnbondedTokenSweep): _247.MsgConfirmUnbondedTokenSweepAmino;
            fromAminoMsg(object: _247.MsgConfirmUnbondedTokenSweepAminoMsg): _247.MsgConfirmUnbondedTokenSweep;
            toAminoMsg(message: _247.MsgConfirmUnbondedTokenSweep): _247.MsgConfirmUnbondedTokenSweepAminoMsg;
            fromProtoMsg(message: _247.MsgConfirmUnbondedTokenSweepProtoMsg): _247.MsgConfirmUnbondedTokenSweep;
            toProto(message: _247.MsgConfirmUnbondedTokenSweep): Uint8Array;
            toProtoMsg(message: _247.MsgConfirmUnbondedTokenSweep): _247.MsgConfirmUnbondedTokenSweepProtoMsg;
        };
        MsgConfirmUnbondedTokenSweepResponse: {
            typeUrl: string;
            encode(_: _247.MsgConfirmUnbondedTokenSweepResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.MsgConfirmUnbondedTokenSweepResponse;
            fromPartial(_: Partial<_247.MsgConfirmUnbondedTokenSweepResponse>): _247.MsgConfirmUnbondedTokenSweepResponse;
            fromAmino(_: _247.MsgConfirmUnbondedTokenSweepResponseAmino): _247.MsgConfirmUnbondedTokenSweepResponse;
            toAmino(_: _247.MsgConfirmUnbondedTokenSweepResponse): _247.MsgConfirmUnbondedTokenSweepResponseAmino;
            fromAminoMsg(object: _247.MsgConfirmUnbondedTokenSweepResponseAminoMsg): _247.MsgConfirmUnbondedTokenSweepResponse;
            fromProtoMsg(message: _247.MsgConfirmUnbondedTokenSweepResponseProtoMsg): _247.MsgConfirmUnbondedTokenSweepResponse;
            toProto(message: _247.MsgConfirmUnbondedTokenSweepResponse): Uint8Array;
            toProtoMsg(message: _247.MsgConfirmUnbondedTokenSweepResponse): _247.MsgConfirmUnbondedTokenSweepResponseProtoMsg;
        };
        MsgAdjustDelegatedBalance: {
            typeUrl: string;
            encode(message: _247.MsgAdjustDelegatedBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.MsgAdjustDelegatedBalance;
            fromPartial(object: Partial<_247.MsgAdjustDelegatedBalance>): _247.MsgAdjustDelegatedBalance;
            fromAmino(object: _247.MsgAdjustDelegatedBalanceAmino): _247.MsgAdjustDelegatedBalance;
            toAmino(message: _247.MsgAdjustDelegatedBalance): _247.MsgAdjustDelegatedBalanceAmino;
            fromAminoMsg(object: _247.MsgAdjustDelegatedBalanceAminoMsg): _247.MsgAdjustDelegatedBalance;
            toAminoMsg(message: _247.MsgAdjustDelegatedBalance): _247.MsgAdjustDelegatedBalanceAminoMsg;
            fromProtoMsg(message: _247.MsgAdjustDelegatedBalanceProtoMsg): _247.MsgAdjustDelegatedBalance;
            toProto(message: _247.MsgAdjustDelegatedBalance): Uint8Array;
            toProtoMsg(message: _247.MsgAdjustDelegatedBalance): _247.MsgAdjustDelegatedBalanceProtoMsg;
        };
        MsgAdjustDelegatedBalanceResponse: {
            typeUrl: string;
            encode(_: _247.MsgAdjustDelegatedBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.MsgAdjustDelegatedBalanceResponse;
            fromPartial(_: Partial<_247.MsgAdjustDelegatedBalanceResponse>): _247.MsgAdjustDelegatedBalanceResponse;
            fromAmino(_: _247.MsgAdjustDelegatedBalanceResponseAmino): _247.MsgAdjustDelegatedBalanceResponse;
            toAmino(_: _247.MsgAdjustDelegatedBalanceResponse): _247.MsgAdjustDelegatedBalanceResponseAmino;
            fromAminoMsg(object: _247.MsgAdjustDelegatedBalanceResponseAminoMsg): _247.MsgAdjustDelegatedBalanceResponse;
            fromProtoMsg(message: _247.MsgAdjustDelegatedBalanceResponseProtoMsg): _247.MsgAdjustDelegatedBalanceResponse;
            toProto(message: _247.MsgAdjustDelegatedBalanceResponse): Uint8Array;
            toProtoMsg(message: _247.MsgAdjustDelegatedBalanceResponse): _247.MsgAdjustDelegatedBalanceResponseProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _247.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_247.MsgUpdateInnerRedemptionRateBounds>): _247.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _247.MsgUpdateInnerRedemptionRateBoundsAmino): _247.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _247.MsgUpdateInnerRedemptionRateBounds): _247.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _247.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _247.MsgUpdateInnerRedemptionRateBounds;
            toAminoMsg(message: _247.MsgUpdateInnerRedemptionRateBounds): _247.MsgUpdateInnerRedemptionRateBoundsAminoMsg;
            fromProtoMsg(message: _247.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _247.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _247.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _247.MsgUpdateInnerRedemptionRateBounds): _247.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _247.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_247.MsgUpdateInnerRedemptionRateBoundsResponse>): _247.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _247.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _247.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _247.MsgUpdateInnerRedemptionRateBoundsResponse): _247.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _247.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _247.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _247.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _247.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _247.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _247.MsgUpdateInnerRedemptionRateBoundsResponse): _247.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _247.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.MsgResumeHostZone;
            fromPartial(object: Partial<_247.MsgResumeHostZone>): _247.MsgResumeHostZone;
            fromAmino(object: _247.MsgResumeHostZoneAmino): _247.MsgResumeHostZone;
            toAmino(message: _247.MsgResumeHostZone): _247.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _247.MsgResumeHostZoneAminoMsg): _247.MsgResumeHostZone;
            toAminoMsg(message: _247.MsgResumeHostZone): _247.MsgResumeHostZoneAminoMsg;
            fromProtoMsg(message: _247.MsgResumeHostZoneProtoMsg): _247.MsgResumeHostZone;
            toProto(message: _247.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _247.MsgResumeHostZone): _247.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _247.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_247.MsgResumeHostZoneResponse>): _247.MsgResumeHostZoneResponse;
            fromAmino(_: _247.MsgResumeHostZoneResponseAmino): _247.MsgResumeHostZoneResponse;
            toAmino(_: _247.MsgResumeHostZoneResponse): _247.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _247.MsgResumeHostZoneResponseAminoMsg): _247.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _247.MsgResumeHostZoneResponseProtoMsg): _247.MsgResumeHostZoneResponse;
            toProto(message: _247.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _247.MsgResumeHostZoneResponse): _247.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgRefreshRedemptionRate: {
            typeUrl: string;
            encode(message: _247.MsgRefreshRedemptionRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.MsgRefreshRedemptionRate;
            fromPartial(object: Partial<_247.MsgRefreshRedemptionRate>): _247.MsgRefreshRedemptionRate;
            fromAmino(object: _247.MsgRefreshRedemptionRateAmino): _247.MsgRefreshRedemptionRate;
            toAmino(message: _247.MsgRefreshRedemptionRate): _247.MsgRefreshRedemptionRateAmino;
            fromAminoMsg(object: _247.MsgRefreshRedemptionRateAminoMsg): _247.MsgRefreshRedemptionRate;
            toAminoMsg(message: _247.MsgRefreshRedemptionRate): _247.MsgRefreshRedemptionRateAminoMsg;
            fromProtoMsg(message: _247.MsgRefreshRedemptionRateProtoMsg): _247.MsgRefreshRedemptionRate;
            toProto(message: _247.MsgRefreshRedemptionRate): Uint8Array;
            toProtoMsg(message: _247.MsgRefreshRedemptionRate): _247.MsgRefreshRedemptionRateProtoMsg;
        };
        MsgRefreshRedemptionRateResponse: {
            typeUrl: string;
            encode(_: _247.MsgRefreshRedemptionRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.MsgRefreshRedemptionRateResponse;
            fromPartial(_: Partial<_247.MsgRefreshRedemptionRateResponse>): _247.MsgRefreshRedemptionRateResponse;
            fromAmino(_: _247.MsgRefreshRedemptionRateResponseAmino): _247.MsgRefreshRedemptionRateResponse;
            toAmino(_: _247.MsgRefreshRedemptionRateResponse): _247.MsgRefreshRedemptionRateResponseAmino;
            fromAminoMsg(object: _247.MsgRefreshRedemptionRateResponseAminoMsg): _247.MsgRefreshRedemptionRateResponse;
            fromProtoMsg(message: _247.MsgRefreshRedemptionRateResponseProtoMsg): _247.MsgRefreshRedemptionRateResponse;
            toProto(message: _247.MsgRefreshRedemptionRateResponse): Uint8Array;
            toProtoMsg(message: _247.MsgRefreshRedemptionRateResponse): _247.MsgRefreshRedemptionRateResponseProtoMsg;
        };
        MsgOverwriteDelegationRecord: {
            typeUrl: string;
            encode(message: _247.MsgOverwriteDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.MsgOverwriteDelegationRecord;
            fromPartial(object: Partial<_247.MsgOverwriteDelegationRecord>): _247.MsgOverwriteDelegationRecord;
            fromAmino(object: _247.MsgOverwriteDelegationRecordAmino): _247.MsgOverwriteDelegationRecord;
            toAmino(message: _247.MsgOverwriteDelegationRecord): _247.MsgOverwriteDelegationRecordAmino;
            fromAminoMsg(object: _247.MsgOverwriteDelegationRecordAminoMsg): _247.MsgOverwriteDelegationRecord;
            toAminoMsg(message: _247.MsgOverwriteDelegationRecord): _247.MsgOverwriteDelegationRecordAminoMsg;
            fromProtoMsg(message: _247.MsgOverwriteDelegationRecordProtoMsg): _247.MsgOverwriteDelegationRecord;
            toProto(message: _247.MsgOverwriteDelegationRecord): Uint8Array;
            toProtoMsg(message: _247.MsgOverwriteDelegationRecord): _247.MsgOverwriteDelegationRecordProtoMsg;
        };
        MsgOverwriteDelegationRecordResponse: {
            typeUrl: string;
            encode(_: _247.MsgOverwriteDelegationRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.MsgOverwriteDelegationRecordResponse;
            fromPartial(_: Partial<_247.MsgOverwriteDelegationRecordResponse>): _247.MsgOverwriteDelegationRecordResponse;
            fromAmino(_: _247.MsgOverwriteDelegationRecordResponseAmino): _247.MsgOverwriteDelegationRecordResponse;
            toAmino(_: _247.MsgOverwriteDelegationRecordResponse): _247.MsgOverwriteDelegationRecordResponseAmino;
            fromAminoMsg(object: _247.MsgOverwriteDelegationRecordResponseAminoMsg): _247.MsgOverwriteDelegationRecordResponse;
            fromProtoMsg(message: _247.MsgOverwriteDelegationRecordResponseProtoMsg): _247.MsgOverwriteDelegationRecordResponse;
            toProto(message: _247.MsgOverwriteDelegationRecordResponse): Uint8Array;
            toProtoMsg(message: _247.MsgOverwriteDelegationRecordResponse): _247.MsgOverwriteDelegationRecordResponseProtoMsg;
        };
        MsgOverwriteUnbondingRecord: {
            typeUrl: string;
            encode(message: _247.MsgOverwriteUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.MsgOverwriteUnbondingRecord;
            fromPartial(object: Partial<_247.MsgOverwriteUnbondingRecord>): _247.MsgOverwriteUnbondingRecord;
            fromAmino(object: _247.MsgOverwriteUnbondingRecordAmino): _247.MsgOverwriteUnbondingRecord;
            toAmino(message: _247.MsgOverwriteUnbondingRecord): _247.MsgOverwriteUnbondingRecordAmino;
            fromAminoMsg(object: _247.MsgOverwriteUnbondingRecordAminoMsg): _247.MsgOverwriteUnbondingRecord;
            toAminoMsg(message: _247.MsgOverwriteUnbondingRecord): _247.MsgOverwriteUnbondingRecordAminoMsg;
            fromProtoMsg(message: _247.MsgOverwriteUnbondingRecordProtoMsg): _247.MsgOverwriteUnbondingRecord;
            toProto(message: _247.MsgOverwriteUnbondingRecord): Uint8Array;
            toProtoMsg(message: _247.MsgOverwriteUnbondingRecord): _247.MsgOverwriteUnbondingRecordProtoMsg;
        };
        MsgOverwriteUnbondingRecordResponse: {
            typeUrl: string;
            encode(_: _247.MsgOverwriteUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.MsgOverwriteUnbondingRecordResponse;
            fromPartial(_: Partial<_247.MsgOverwriteUnbondingRecordResponse>): _247.MsgOverwriteUnbondingRecordResponse;
            fromAmino(_: _247.MsgOverwriteUnbondingRecordResponseAmino): _247.MsgOverwriteUnbondingRecordResponse;
            toAmino(_: _247.MsgOverwriteUnbondingRecordResponse): _247.MsgOverwriteUnbondingRecordResponseAmino;
            fromAminoMsg(object: _247.MsgOverwriteUnbondingRecordResponseAminoMsg): _247.MsgOverwriteUnbondingRecordResponse;
            fromProtoMsg(message: _247.MsgOverwriteUnbondingRecordResponseProtoMsg): _247.MsgOverwriteUnbondingRecordResponse;
            toProto(message: _247.MsgOverwriteUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _247.MsgOverwriteUnbondingRecordResponse): _247.MsgOverwriteUnbondingRecordResponseProtoMsg;
        };
        MsgOverwriteRedemptionRecord: {
            typeUrl: string;
            encode(message: _247.MsgOverwriteRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.MsgOverwriteRedemptionRecord;
            fromPartial(object: Partial<_247.MsgOverwriteRedemptionRecord>): _247.MsgOverwriteRedemptionRecord;
            fromAmino(object: _247.MsgOverwriteRedemptionRecordAmino): _247.MsgOverwriteRedemptionRecord;
            toAmino(message: _247.MsgOverwriteRedemptionRecord): _247.MsgOverwriteRedemptionRecordAmino;
            fromAminoMsg(object: _247.MsgOverwriteRedemptionRecordAminoMsg): _247.MsgOverwriteRedemptionRecord;
            toAminoMsg(message: _247.MsgOverwriteRedemptionRecord): _247.MsgOverwriteRedemptionRecordAminoMsg;
            fromProtoMsg(message: _247.MsgOverwriteRedemptionRecordProtoMsg): _247.MsgOverwriteRedemptionRecord;
            toProto(message: _247.MsgOverwriteRedemptionRecord): Uint8Array;
            toProtoMsg(message: _247.MsgOverwriteRedemptionRecord): _247.MsgOverwriteRedemptionRecordProtoMsg;
        };
        MsgOverwriteRedemptionRecordResponse: {
            typeUrl: string;
            encode(_: _247.MsgOverwriteRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.MsgOverwriteRedemptionRecordResponse;
            fromPartial(_: Partial<_247.MsgOverwriteRedemptionRecordResponse>): _247.MsgOverwriteRedemptionRecordResponse;
            fromAmino(_: _247.MsgOverwriteRedemptionRecordResponseAmino): _247.MsgOverwriteRedemptionRecordResponse;
            toAmino(_: _247.MsgOverwriteRedemptionRecordResponse): _247.MsgOverwriteRedemptionRecordResponseAmino;
            fromAminoMsg(object: _247.MsgOverwriteRedemptionRecordResponseAminoMsg): _247.MsgOverwriteRedemptionRecordResponse;
            fromProtoMsg(message: _247.MsgOverwriteRedemptionRecordResponseProtoMsg): _247.MsgOverwriteRedemptionRecordResponse;
            toProto(message: _247.MsgOverwriteRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _247.MsgOverwriteRedemptionRecordResponse): _247.MsgOverwriteRedemptionRecordResponseProtoMsg;
        };
        MsgSetOperatorAddress: {
            typeUrl: string;
            encode(message: _247.MsgSetOperatorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.MsgSetOperatorAddress;
            fromPartial(object: Partial<_247.MsgSetOperatorAddress>): _247.MsgSetOperatorAddress;
            fromAmino(object: _247.MsgSetOperatorAddressAmino): _247.MsgSetOperatorAddress;
            toAmino(message: _247.MsgSetOperatorAddress): _247.MsgSetOperatorAddressAmino;
            fromAminoMsg(object: _247.MsgSetOperatorAddressAminoMsg): _247.MsgSetOperatorAddress;
            toAminoMsg(message: _247.MsgSetOperatorAddress): _247.MsgSetOperatorAddressAminoMsg;
            fromProtoMsg(message: _247.MsgSetOperatorAddressProtoMsg): _247.MsgSetOperatorAddress;
            toProto(message: _247.MsgSetOperatorAddress): Uint8Array;
            toProtoMsg(message: _247.MsgSetOperatorAddress): _247.MsgSetOperatorAddressProtoMsg;
        };
        MsgSetOperatorAddressResponse: {
            typeUrl: string;
            encode(_: _247.MsgSetOperatorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.MsgSetOperatorAddressResponse;
            fromPartial(_: Partial<_247.MsgSetOperatorAddressResponse>): _247.MsgSetOperatorAddressResponse;
            fromAmino(_: _247.MsgSetOperatorAddressResponseAmino): _247.MsgSetOperatorAddressResponse;
            toAmino(_: _247.MsgSetOperatorAddressResponse): _247.MsgSetOperatorAddressResponseAmino;
            fromAminoMsg(object: _247.MsgSetOperatorAddressResponseAminoMsg): _247.MsgSetOperatorAddressResponse;
            fromProtoMsg(message: _247.MsgSetOperatorAddressResponseProtoMsg): _247.MsgSetOperatorAddressResponse;
            toProto(message: _247.MsgSetOperatorAddressResponse): Uint8Array;
            toProtoMsg(message: _247.MsgSetOperatorAddressResponse): _247.MsgSetOperatorAddressResponseProtoMsg;
        };
        delegationRecordStatusFromJSON(object: any): _246.DelegationRecordStatus;
        delegationRecordStatusToJSON(object: _246.DelegationRecordStatus): string;
        unbondingRecordStatusFromJSON(object: any): _246.UnbondingRecordStatus;
        unbondingRecordStatusToJSON(object: _246.UnbondingRecordStatus): string;
        DelegationRecordStatus: typeof _246.DelegationRecordStatus;
        DelegationRecordStatusSDKType: typeof _246.DelegationRecordStatus;
        DelegationRecordStatusAmino: typeof _246.DelegationRecordStatus;
        UnbondingRecordStatus: typeof _246.UnbondingRecordStatus;
        UnbondingRecordStatusSDKType: typeof _246.UnbondingRecordStatus;
        UnbondingRecordStatusAmino: typeof _246.UnbondingRecordStatus;
        HostZone: {
            typeUrl: string;
            encode(message: _246.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _246.HostZone;
            fromPartial(object: Partial<_246.HostZone>): _246.HostZone;
            fromAmino(object: _246.HostZoneAmino): _246.HostZone;
            toAmino(message: _246.HostZone): _246.HostZoneAmino;
            fromAminoMsg(object: _246.HostZoneAminoMsg): _246.HostZone;
            fromProtoMsg(message: _246.HostZoneProtoMsg): _246.HostZone;
            toProto(message: _246.HostZone): Uint8Array;
            toProtoMsg(message: _246.HostZone): _246.HostZoneProtoMsg;
        };
        DelegationRecord: {
            typeUrl: string;
            encode(message: _246.DelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _246.DelegationRecord;
            fromPartial(object: Partial<_246.DelegationRecord>): _246.DelegationRecord;
            fromAmino(object: _246.DelegationRecordAmino): _246.DelegationRecord;
            toAmino(message: _246.DelegationRecord): _246.DelegationRecordAmino;
            fromAminoMsg(object: _246.DelegationRecordAminoMsg): _246.DelegationRecord;
            fromProtoMsg(message: _246.DelegationRecordProtoMsg): _246.DelegationRecord;
            toProto(message: _246.DelegationRecord): Uint8Array;
            toProtoMsg(message: _246.DelegationRecord): _246.DelegationRecordProtoMsg;
        };
        UnbondingRecord: {
            typeUrl: string;
            encode(message: _246.UnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _246.UnbondingRecord;
            fromPartial(object: Partial<_246.UnbondingRecord>): _246.UnbondingRecord;
            fromAmino(object: _246.UnbondingRecordAmino): _246.UnbondingRecord;
            toAmino(message: _246.UnbondingRecord): _246.UnbondingRecordAmino;
            fromAminoMsg(object: _246.UnbondingRecordAminoMsg): _246.UnbondingRecord;
            fromProtoMsg(message: _246.UnbondingRecordProtoMsg): _246.UnbondingRecord;
            toProto(message: _246.UnbondingRecord): Uint8Array;
            toProtoMsg(message: _246.UnbondingRecord): _246.UnbondingRecordProtoMsg;
        };
        RedemptionRecord: {
            typeUrl: string;
            encode(message: _246.RedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _246.RedemptionRecord;
            fromPartial(object: Partial<_246.RedemptionRecord>): _246.RedemptionRecord;
            fromAmino(object: _246.RedemptionRecordAmino): _246.RedemptionRecord;
            toAmino(message: _246.RedemptionRecord): _246.RedemptionRecordAmino;
            fromAminoMsg(object: _246.RedemptionRecordAminoMsg): _246.RedemptionRecord;
            fromProtoMsg(message: _246.RedemptionRecordProtoMsg): _246.RedemptionRecord;
            toProto(message: _246.RedemptionRecord): Uint8Array;
            toProtoMsg(message: _246.RedemptionRecord): _246.RedemptionRecordProtoMsg;
        };
        SlashRecord: {
            typeUrl: string;
            encode(message: _246.SlashRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _246.SlashRecord;
            fromPartial(object: Partial<_246.SlashRecord>): _246.SlashRecord;
            fromAmino(object: _246.SlashRecordAmino): _246.SlashRecord;
            toAmino(message: _246.SlashRecord): _246.SlashRecordAmino;
            fromAminoMsg(object: _246.SlashRecordAminoMsg): _246.SlashRecord;
            fromProtoMsg(message: _246.SlashRecordProtoMsg): _246.SlashRecord;
            toProto(message: _246.SlashRecord): Uint8Array;
            toProtoMsg(message: _246.SlashRecord): _246.SlashRecordProtoMsg;
        };
        QueryHostZoneRequest: {
            typeUrl: string;
            encode(_: _245.QueryHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _245.QueryHostZoneRequest;
            fromPartial(_: Partial<_245.QueryHostZoneRequest>): _245.QueryHostZoneRequest;
            fromAmino(_: _245.QueryHostZoneRequestAmino): _245.QueryHostZoneRequest;
            toAmino(_: _245.QueryHostZoneRequest): _245.QueryHostZoneRequestAmino;
            fromAminoMsg(object: _245.QueryHostZoneRequestAminoMsg): _245.QueryHostZoneRequest;
            fromProtoMsg(message: _245.QueryHostZoneRequestProtoMsg): _245.QueryHostZoneRequest;
            toProto(message: _245.QueryHostZoneRequest): Uint8Array;
            toProtoMsg(message: _245.QueryHostZoneRequest): _245.QueryHostZoneRequestProtoMsg;
        };
        QueryHostZoneResponse: {
            typeUrl: string;
            encode(message: _245.QueryHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _245.QueryHostZoneResponse;
            fromPartial(object: Partial<_245.QueryHostZoneResponse>): _245.QueryHostZoneResponse;
            fromAmino(object: _245.QueryHostZoneResponseAmino): _245.QueryHostZoneResponse;
            toAmino(message: _245.QueryHostZoneResponse): _245.QueryHostZoneResponseAmino;
            fromAminoMsg(object: _245.QueryHostZoneResponseAminoMsg): _245.QueryHostZoneResponse;
            fromProtoMsg(message: _245.QueryHostZoneResponseProtoMsg): _245.QueryHostZoneResponse;
            toProto(message: _245.QueryHostZoneResponse): Uint8Array;
            toProtoMsg(message: _245.QueryHostZoneResponse): _245.QueryHostZoneResponseProtoMsg;
        };
        QueryDelegationRecordsRequest: {
            typeUrl: string;
            encode(message: _245.QueryDelegationRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _245.QueryDelegationRecordsRequest;
            fromPartial(object: Partial<_245.QueryDelegationRecordsRequest>): _245.QueryDelegationRecordsRequest;
            fromAmino(object: _245.QueryDelegationRecordsRequestAmino): _245.QueryDelegationRecordsRequest;
            toAmino(message: _245.QueryDelegationRecordsRequest): _245.QueryDelegationRecordsRequestAmino;
            fromAminoMsg(object: _245.QueryDelegationRecordsRequestAminoMsg): _245.QueryDelegationRecordsRequest;
            fromProtoMsg(message: _245.QueryDelegationRecordsRequestProtoMsg): _245.QueryDelegationRecordsRequest;
            toProto(message: _245.QueryDelegationRecordsRequest): Uint8Array;
            toProtoMsg(message: _245.QueryDelegationRecordsRequest): _245.QueryDelegationRecordsRequestProtoMsg;
        };
        QueryDelegationRecordsResponse: {
            typeUrl: string;
            encode(message: _245.QueryDelegationRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _245.QueryDelegationRecordsResponse;
            fromPartial(object: Partial<_245.QueryDelegationRecordsResponse>): _245.QueryDelegationRecordsResponse;
            fromAmino(object: _245.QueryDelegationRecordsResponseAmino): _245.QueryDelegationRecordsResponse;
            toAmino(message: _245.QueryDelegationRecordsResponse): _245.QueryDelegationRecordsResponseAmino;
            fromAminoMsg(object: _245.QueryDelegationRecordsResponseAminoMsg): _245.QueryDelegationRecordsResponse;
            fromProtoMsg(message: _245.QueryDelegationRecordsResponseProtoMsg): _245.QueryDelegationRecordsResponse;
            toProto(message: _245.QueryDelegationRecordsResponse): Uint8Array;
            toProtoMsg(message: _245.QueryDelegationRecordsResponse): _245.QueryDelegationRecordsResponseProtoMsg;
        };
        QueryUnbondingRecordsRequest: {
            typeUrl: string;
            encode(message: _245.QueryUnbondingRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _245.QueryUnbondingRecordsRequest;
            fromPartial(object: Partial<_245.QueryUnbondingRecordsRequest>): _245.QueryUnbondingRecordsRequest;
            fromAmino(object: _245.QueryUnbondingRecordsRequestAmino): _245.QueryUnbondingRecordsRequest;
            toAmino(message: _245.QueryUnbondingRecordsRequest): _245.QueryUnbondingRecordsRequestAmino;
            fromAminoMsg(object: _245.QueryUnbondingRecordsRequestAminoMsg): _245.QueryUnbondingRecordsRequest;
            fromProtoMsg(message: _245.QueryUnbondingRecordsRequestProtoMsg): _245.QueryUnbondingRecordsRequest;
            toProto(message: _245.QueryUnbondingRecordsRequest): Uint8Array;
            toProtoMsg(message: _245.QueryUnbondingRecordsRequest): _245.QueryUnbondingRecordsRequestProtoMsg;
        };
        QueryUnbondingRecordsResponse: {
            typeUrl: string;
            encode(message: _245.QueryUnbondingRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _245.QueryUnbondingRecordsResponse;
            fromPartial(object: Partial<_245.QueryUnbondingRecordsResponse>): _245.QueryUnbondingRecordsResponse;
            fromAmino(object: _245.QueryUnbondingRecordsResponseAmino): _245.QueryUnbondingRecordsResponse;
            toAmino(message: _245.QueryUnbondingRecordsResponse): _245.QueryUnbondingRecordsResponseAmino;
            fromAminoMsg(object: _245.QueryUnbondingRecordsResponseAminoMsg): _245.QueryUnbondingRecordsResponse;
            fromProtoMsg(message: _245.QueryUnbondingRecordsResponseProtoMsg): _245.QueryUnbondingRecordsResponse;
            toProto(message: _245.QueryUnbondingRecordsResponse): Uint8Array;
            toProtoMsg(message: _245.QueryUnbondingRecordsResponse): _245.QueryUnbondingRecordsResponseProtoMsg;
        };
        QueryRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _245.QueryRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _245.QueryRedemptionRecordRequest;
            fromPartial(object: Partial<_245.QueryRedemptionRecordRequest>): _245.QueryRedemptionRecordRequest;
            fromAmino(object: _245.QueryRedemptionRecordRequestAmino): _245.QueryRedemptionRecordRequest;
            toAmino(message: _245.QueryRedemptionRecordRequest): _245.QueryRedemptionRecordRequestAmino;
            fromAminoMsg(object: _245.QueryRedemptionRecordRequestAminoMsg): _245.QueryRedemptionRecordRequest;
            fromProtoMsg(message: _245.QueryRedemptionRecordRequestProtoMsg): _245.QueryRedemptionRecordRequest;
            toProto(message: _245.QueryRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _245.QueryRedemptionRecordRequest): _245.QueryRedemptionRecordRequestProtoMsg;
        };
        QueryRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _245.QueryRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _245.QueryRedemptionRecordResponse;
            fromPartial(object: Partial<_245.QueryRedemptionRecordResponse>): _245.QueryRedemptionRecordResponse;
            fromAmino(object: _245.QueryRedemptionRecordResponseAmino): _245.QueryRedemptionRecordResponse;
            toAmino(message: _245.QueryRedemptionRecordResponse): _245.QueryRedemptionRecordResponseAmino;
            fromAminoMsg(object: _245.QueryRedemptionRecordResponseAminoMsg): _245.QueryRedemptionRecordResponse;
            fromProtoMsg(message: _245.QueryRedemptionRecordResponseProtoMsg): _245.QueryRedemptionRecordResponse;
            toProto(message: _245.QueryRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _245.QueryRedemptionRecordResponse): _245.QueryRedemptionRecordResponseProtoMsg;
        };
        QueryRedemptionRecordsRequest: {
            typeUrl: string;
            encode(message: _245.QueryRedemptionRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _245.QueryRedemptionRecordsRequest;
            fromPartial(object: Partial<_245.QueryRedemptionRecordsRequest>): _245.QueryRedemptionRecordsRequest;
            fromAmino(object: _245.QueryRedemptionRecordsRequestAmino): _245.QueryRedemptionRecordsRequest;
            toAmino(message: _245.QueryRedemptionRecordsRequest): _245.QueryRedemptionRecordsRequestAmino;
            fromAminoMsg(object: _245.QueryRedemptionRecordsRequestAminoMsg): _245.QueryRedemptionRecordsRequest;
            fromProtoMsg(message: _245.QueryRedemptionRecordsRequestProtoMsg): _245.QueryRedemptionRecordsRequest;
            toProto(message: _245.QueryRedemptionRecordsRequest): Uint8Array;
            toProtoMsg(message: _245.QueryRedemptionRecordsRequest): _245.QueryRedemptionRecordsRequestProtoMsg;
        };
        QueryRedemptionRecordsResponse: {
            typeUrl: string;
            encode(message: _245.QueryRedemptionRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _245.QueryRedemptionRecordsResponse;
            fromPartial(object: Partial<_245.QueryRedemptionRecordsResponse>): _245.QueryRedemptionRecordsResponse;
            fromAmino(object: _245.QueryRedemptionRecordsResponseAmino): _245.QueryRedemptionRecordsResponse;
            toAmino(message: _245.QueryRedemptionRecordsResponse): _245.QueryRedemptionRecordsResponseAmino;
            fromAminoMsg(object: _245.QueryRedemptionRecordsResponseAminoMsg): _245.QueryRedemptionRecordsResponse;
            fromProtoMsg(message: _245.QueryRedemptionRecordsResponseProtoMsg): _245.QueryRedemptionRecordsResponse;
            toProto(message: _245.QueryRedemptionRecordsResponse): Uint8Array;
            toProtoMsg(message: _245.QueryRedemptionRecordsResponse): _245.QueryRedemptionRecordsResponseProtoMsg;
        };
        QuerySlashRecordsRequest: {
            typeUrl: string;
            encode(_: _245.QuerySlashRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _245.QuerySlashRecordsRequest;
            fromPartial(_: Partial<_245.QuerySlashRecordsRequest>): _245.QuerySlashRecordsRequest;
            fromAmino(_: _245.QuerySlashRecordsRequestAmino): _245.QuerySlashRecordsRequest;
            toAmino(_: _245.QuerySlashRecordsRequest): _245.QuerySlashRecordsRequestAmino;
            fromAminoMsg(object: _245.QuerySlashRecordsRequestAminoMsg): _245.QuerySlashRecordsRequest;
            fromProtoMsg(message: _245.QuerySlashRecordsRequestProtoMsg): _245.QuerySlashRecordsRequest;
            toProto(message: _245.QuerySlashRecordsRequest): Uint8Array;
            toProtoMsg(message: _245.QuerySlashRecordsRequest): _245.QuerySlashRecordsRequestProtoMsg;
        };
        QuerySlashRecordsResponse: {
            typeUrl: string;
            encode(message: _245.QuerySlashRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _245.QuerySlashRecordsResponse;
            fromPartial(object: Partial<_245.QuerySlashRecordsResponse>): _245.QuerySlashRecordsResponse;
            fromAmino(object: _245.QuerySlashRecordsResponseAmino): _245.QuerySlashRecordsResponse;
            toAmino(message: _245.QuerySlashRecordsResponse): _245.QuerySlashRecordsResponseAmino;
            fromAminoMsg(object: _245.QuerySlashRecordsResponseAminoMsg): _245.QuerySlashRecordsResponse;
            fromProtoMsg(message: _245.QuerySlashRecordsResponseProtoMsg): _245.QuerySlashRecordsResponse;
            toProto(message: _245.QuerySlashRecordsResponse): Uint8Array;
            toProtoMsg(message: _245.QuerySlashRecordsResponse): _245.QuerySlashRecordsResponseProtoMsg;
        };
        RedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _245.RedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _245.RedemptionRecordResponse;
            fromPartial(object: Partial<_245.RedemptionRecordResponse>): _245.RedemptionRecordResponse;
            fromAmino(object: _245.RedemptionRecordResponseAmino): _245.RedemptionRecordResponse;
            toAmino(message: _245.RedemptionRecordResponse): _245.RedemptionRecordResponseAmino;
            fromAminoMsg(object: _245.RedemptionRecordResponseAminoMsg): _245.RedemptionRecordResponse;
            fromProtoMsg(message: _245.RedemptionRecordResponseProtoMsg): _245.RedemptionRecordResponse;
            toProto(message: _245.RedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _245.RedemptionRecordResponse): _245.RedemptionRecordResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _244.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.Params;
            fromPartial(_: Partial<_244.Params>): _244.Params;
            fromAmino(_: _244.ParamsAmino): _244.Params;
            toAmino(_: _244.Params): _244.ParamsAmino;
            fromAminoMsg(object: _244.ParamsAminoMsg): _244.Params;
            fromProtoMsg(message: _244.ParamsProtoMsg): _244.Params;
            toProto(message: _244.Params): Uint8Array;
            toProtoMsg(message: _244.Params): _244.ParamsProtoMsg;
        };
        TransferInProgressRecordIds: {
            typeUrl: string;
            encode(message: _244.TransferInProgressRecordIds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.TransferInProgressRecordIds;
            fromPartial(object: Partial<_244.TransferInProgressRecordIds>): _244.TransferInProgressRecordIds;
            fromAmino(object: _244.TransferInProgressRecordIdsAmino): _244.TransferInProgressRecordIds;
            toAmino(message: _244.TransferInProgressRecordIds): _244.TransferInProgressRecordIdsAmino;
            fromAminoMsg(object: _244.TransferInProgressRecordIdsAminoMsg): _244.TransferInProgressRecordIds;
            fromProtoMsg(message: _244.TransferInProgressRecordIdsProtoMsg): _244.TransferInProgressRecordIds;
            toProto(message: _244.TransferInProgressRecordIds): Uint8Array;
            toProtoMsg(message: _244.TransferInProgressRecordIds): _244.TransferInProgressRecordIdsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _244.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.GenesisState;
            fromPartial(object: Partial<_244.GenesisState>): _244.GenesisState;
            fromAmino(object: _244.GenesisStateAmino): _244.GenesisState;
            toAmino(message: _244.GenesisState): _244.GenesisStateAmino;
            fromAminoMsg(object: _244.GenesisStateAminoMsg): _244.GenesisState;
            fromProtoMsg(message: _244.GenesisStateProtoMsg): _244.GenesisState;
            toProto(message: _244.GenesisState): Uint8Array;
            toProtoMsg(message: _244.GenesisState): _244.GenesisStateProtoMsg;
        };
    };
    const stakeibc: {
        MsgClientImpl: typeof _438.MsgClientImpl;
        QueryClientImpl: typeof _428.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _257.QueryParamsRequest): Promise<_257.QueryParamsResponse>;
            validators(request: _257.QueryGetValidatorsRequest): Promise<_257.QueryGetValidatorsResponse>;
            hostZone(request: _257.QueryGetHostZoneRequest): Promise<_257.QueryGetHostZoneResponse>;
            hostZoneAll(request?: _257.QueryAllHostZoneRequest): Promise<_257.QueryAllHostZoneResponse>;
            moduleAddress(request: _257.QueryModuleAddressRequest): Promise<_257.QueryModuleAddressResponse>;
            interchainAccountFromAddress(request: _257.QueryInterchainAccountFromAddressRequest): Promise<_257.QueryInterchainAccountFromAddressResponse>;
            epochTracker(request: _257.QueryGetEpochTrackerRequest): Promise<_257.QueryGetEpochTrackerResponse>;
            epochTrackerAll(request?: _257.QueryAllEpochTrackerRequest): Promise<_257.QueryAllEpochTrackerResponse>;
            nextPacketSequence(request: _257.QueryGetNextPacketSequenceRequest): Promise<_257.QueryGetNextPacketSequenceResponse>;
            addressUnbondings(request: _257.QueryAddressUnbondings): Promise<_257.QueryAddressUnbondingsResponse>;
            allTradeRoutes(request?: _257.QueryAllTradeRoutes): Promise<_257.QueryAllTradeRoutesResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _259.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lSMLiquidStake(value: _259.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _259.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                registerHostZone(value: _259.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimUndelegatedTokens(value: _259.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                rebalanceValidators(value: _259.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addValidators(value: _259.MsgAddValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                changeValidatorWeight(value: _259.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteValidator(value: _259.MsgDeleteValidator): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreInterchainAccount(value: _259.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                closeDelegationChannel(value: _259.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateValidatorSharesExchRate(value: _259.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                calibrateDelegation(value: _259.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                clearBalance(value: _259.MsgClearBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _259.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _259.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createTradeRoute(value: _259.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteTradeRoute(value: _259.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateTradeRoute(value: _259.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setCommunityPoolRebate(value: _259.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                toggleTradeController(value: _259.MsgToggleTradeController): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateHostZoneParams(value: _259.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deprecateHostZone(value: _259.MsgDeprecateHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _259.MsgLiquidStake): {
                    typeUrl: string;
                    value: _259.MsgLiquidStake;
                };
                lSMLiquidStake(value: _259.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: _259.MsgLSMLiquidStake;
                };
                redeemStake(value: _259.MsgRedeemStake): {
                    typeUrl: string;
                    value: _259.MsgRedeemStake;
                };
                registerHostZone(value: _259.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _259.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _259.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _259.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _259.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _259.MsgRebalanceValidators;
                };
                addValidators(value: _259.MsgAddValidators): {
                    typeUrl: string;
                    value: _259.MsgAddValidators;
                };
                changeValidatorWeight(value: _259.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: _259.MsgChangeValidatorWeights;
                };
                deleteValidator(value: _259.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _259.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _259.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _259.MsgRestoreInterchainAccount;
                };
                closeDelegationChannel(value: _259.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: _259.MsgCloseDelegationChannel;
                };
                updateValidatorSharesExchRate(value: _259.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _259.MsgUpdateValidatorSharesExchRate;
                };
                calibrateDelegation(value: _259.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: _259.MsgCalibrateDelegation;
                };
                clearBalance(value: _259.MsgClearBalance): {
                    typeUrl: string;
                    value: _259.MsgClearBalance;
                };
                updateInnerRedemptionRateBounds(value: _259.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _259.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _259.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _259.MsgResumeHostZone;
                };
                createTradeRoute(value: _259.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: _259.MsgCreateTradeRoute;
                };
                deleteTradeRoute(value: _259.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: _259.MsgDeleteTradeRoute;
                };
                updateTradeRoute(value: _259.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: _259.MsgUpdateTradeRoute;
                };
                setCommunityPoolRebate(value: _259.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: _259.MsgSetCommunityPoolRebate;
                };
                toggleTradeController(value: _259.MsgToggleTradeController): {
                    typeUrl: string;
                    value: _259.MsgToggleTradeController;
                };
                updateHostZoneParams(value: _259.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: _259.MsgUpdateHostZoneParams;
                };
                deprecateHostZone(value: _259.MsgDeprecateHostZone): {
                    typeUrl: string;
                    value: _259.MsgDeprecateHostZone;
                };
            };
            fromPartial: {
                liquidStake(value: _259.MsgLiquidStake): {
                    typeUrl: string;
                    value: _259.MsgLiquidStake;
                };
                lSMLiquidStake(value: _259.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: _259.MsgLSMLiquidStake;
                };
                redeemStake(value: _259.MsgRedeemStake): {
                    typeUrl: string;
                    value: _259.MsgRedeemStake;
                };
                registerHostZone(value: _259.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _259.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _259.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _259.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _259.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _259.MsgRebalanceValidators;
                };
                addValidators(value: _259.MsgAddValidators): {
                    typeUrl: string;
                    value: _259.MsgAddValidators;
                };
                changeValidatorWeight(value: _259.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: _259.MsgChangeValidatorWeights;
                };
                deleteValidator(value: _259.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _259.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _259.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _259.MsgRestoreInterchainAccount;
                };
                closeDelegationChannel(value: _259.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: _259.MsgCloseDelegationChannel;
                };
                updateValidatorSharesExchRate(value: _259.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _259.MsgUpdateValidatorSharesExchRate;
                };
                calibrateDelegation(value: _259.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: _259.MsgCalibrateDelegation;
                };
                clearBalance(value: _259.MsgClearBalance): {
                    typeUrl: string;
                    value: _259.MsgClearBalance;
                };
                updateInnerRedemptionRateBounds(value: _259.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _259.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _259.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _259.MsgResumeHostZone;
                };
                createTradeRoute(value: _259.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: _259.MsgCreateTradeRoute;
                };
                deleteTradeRoute(value: _259.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: _259.MsgDeleteTradeRoute;
                };
                updateTradeRoute(value: _259.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: _259.MsgUpdateTradeRoute;
                };
                setCommunityPoolRebate(value: _259.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: _259.MsgSetCommunityPoolRebate;
                };
                toggleTradeController(value: _259.MsgToggleTradeController): {
                    typeUrl: string;
                    value: _259.MsgToggleTradeController;
                };
                updateHostZoneParams(value: _259.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: _259.MsgUpdateHostZoneParams;
                };
                deprecateHostZone(value: _259.MsgDeprecateHostZone): {
                    typeUrl: string;
                    value: _259.MsgDeprecateHostZone;
                };
            };
        };
        AminoConverter: {
            "/stride.stakeibc.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _259.MsgLiquidStake) => _259.MsgLiquidStakeAmino;
                fromAmino: (object: _259.MsgLiquidStakeAmino) => _259.MsgLiquidStake;
            };
            "/stride.stakeibc.MsgLSMLiquidStake": {
                aminoType: string;
                toAmino: (message: _259.MsgLSMLiquidStake) => _259.MsgLSMLiquidStakeAmino;
                fromAmino: (object: _259.MsgLSMLiquidStakeAmino) => _259.MsgLSMLiquidStake;
            };
            "/stride.stakeibc.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _259.MsgRedeemStake) => _259.MsgRedeemStakeAmino;
                fromAmino: (object: _259.MsgRedeemStakeAmino) => _259.MsgRedeemStake;
            };
            "/stride.stakeibc.MsgRegisterHostZone": {
                aminoType: string;
                toAmino: (message: _259.MsgRegisterHostZone) => _259.MsgRegisterHostZoneAmino;
                fromAmino: (object: _259.MsgRegisterHostZoneAmino) => _259.MsgRegisterHostZone;
            };
            "/stride.stakeibc.MsgClaimUndelegatedTokens": {
                aminoType: string;
                toAmino: (message: _259.MsgClaimUndelegatedTokens) => _259.MsgClaimUndelegatedTokensAmino;
                fromAmino: (object: _259.MsgClaimUndelegatedTokensAmino) => _259.MsgClaimUndelegatedTokens;
            };
            "/stride.stakeibc.MsgRebalanceValidators": {
                aminoType: string;
                toAmino: (message: _259.MsgRebalanceValidators) => _259.MsgRebalanceValidatorsAmino;
                fromAmino: (object: _259.MsgRebalanceValidatorsAmino) => _259.MsgRebalanceValidators;
            };
            "/stride.stakeibc.MsgAddValidators": {
                aminoType: string;
                toAmino: (message: _259.MsgAddValidators) => _259.MsgAddValidatorsAmino;
                fromAmino: (object: _259.MsgAddValidatorsAmino) => _259.MsgAddValidators;
            };
            "/stride.stakeibc.MsgChangeValidatorWeights": {
                aminoType: string;
                toAmino: (message: _259.MsgChangeValidatorWeights) => _259.MsgChangeValidatorWeightsAmino;
                fromAmino: (object: _259.MsgChangeValidatorWeightsAmino) => _259.MsgChangeValidatorWeights;
            };
            "/stride.stakeibc.MsgDeleteValidator": {
                aminoType: string;
                toAmino: (message: _259.MsgDeleteValidator) => _259.MsgDeleteValidatorAmino;
                fromAmino: (object: _259.MsgDeleteValidatorAmino) => _259.MsgDeleteValidator;
            };
            "/stride.stakeibc.MsgRestoreInterchainAccount": {
                aminoType: string;
                toAmino: (message: _259.MsgRestoreInterchainAccount) => _259.MsgRestoreInterchainAccountAmino;
                fromAmino: (object: _259.MsgRestoreInterchainAccountAmino) => _259.MsgRestoreInterchainAccount;
            };
            "/stride.stakeibc.MsgCloseDelegationChannel": {
                aminoType: string;
                toAmino: (message: _259.MsgCloseDelegationChannel) => _259.MsgCloseDelegationChannelAmino;
                fromAmino: (object: _259.MsgCloseDelegationChannelAmino) => _259.MsgCloseDelegationChannel;
            };
            "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
                aminoType: string;
                toAmino: (message: _259.MsgUpdateValidatorSharesExchRate) => _259.MsgUpdateValidatorSharesExchRateAmino;
                fromAmino: (object: _259.MsgUpdateValidatorSharesExchRateAmino) => _259.MsgUpdateValidatorSharesExchRate;
            };
            "/stride.stakeibc.MsgCalibrateDelegation": {
                aminoType: string;
                toAmino: (message: _259.MsgCalibrateDelegation) => _259.MsgCalibrateDelegationAmino;
                fromAmino: (object: _259.MsgCalibrateDelegationAmino) => _259.MsgCalibrateDelegation;
            };
            "/stride.stakeibc.MsgClearBalance": {
                aminoType: string;
                toAmino: (message: _259.MsgClearBalance) => _259.MsgClearBalanceAmino;
                fromAmino: (object: _259.MsgClearBalanceAmino) => _259.MsgClearBalance;
            };
            "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _259.MsgUpdateInnerRedemptionRateBounds) => _259.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _259.MsgUpdateInnerRedemptionRateBoundsAmino) => _259.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.stakeibc.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _259.MsgResumeHostZone) => _259.MsgResumeHostZoneAmino;
                fromAmino: (object: _259.MsgResumeHostZoneAmino) => _259.MsgResumeHostZone;
            };
            "/stride.stakeibc.MsgCreateTradeRoute": {
                aminoType: string;
                toAmino: (message: _259.MsgCreateTradeRoute) => _259.MsgCreateTradeRouteAmino;
                fromAmino: (object: _259.MsgCreateTradeRouteAmino) => _259.MsgCreateTradeRoute;
            };
            "/stride.stakeibc.MsgDeleteTradeRoute": {
                aminoType: string;
                toAmino: (message: _259.MsgDeleteTradeRoute) => _259.MsgDeleteTradeRouteAmino;
                fromAmino: (object: _259.MsgDeleteTradeRouteAmino) => _259.MsgDeleteTradeRoute;
            };
            "/stride.stakeibc.MsgUpdateTradeRoute": {
                aminoType: string;
                toAmino: (message: _259.MsgUpdateTradeRoute) => _259.MsgUpdateTradeRouteAmino;
                fromAmino: (object: _259.MsgUpdateTradeRouteAmino) => _259.MsgUpdateTradeRoute;
            };
            "/stride.stakeibc.MsgSetCommunityPoolRebate": {
                aminoType: string;
                toAmino: (message: _259.MsgSetCommunityPoolRebate) => _259.MsgSetCommunityPoolRebateAmino;
                fromAmino: (object: _259.MsgSetCommunityPoolRebateAmino) => _259.MsgSetCommunityPoolRebate;
            };
            "/stride.stakeibc.MsgToggleTradeController": {
                aminoType: string;
                toAmino: (message: _259.MsgToggleTradeController) => _259.MsgToggleTradeControllerAmino;
                fromAmino: (object: _259.MsgToggleTradeControllerAmino) => _259.MsgToggleTradeController;
            };
            "/stride.stakeibc.MsgUpdateHostZoneParams": {
                aminoType: string;
                toAmino: (message: _259.MsgUpdateHostZoneParams) => _259.MsgUpdateHostZoneParamsAmino;
                fromAmino: (object: _259.MsgUpdateHostZoneParamsAmino) => _259.MsgUpdateHostZoneParams;
            };
            "/stride.stakeibc.MsgDeprecateHostZone": {
                aminoType: string;
                toAmino: (message: _259.MsgDeprecateHostZone) => _259.MsgDeprecateHostZoneAmino;
                fromAmino: (object: _259.MsgDeprecateHostZoneAmino) => _259.MsgDeprecateHostZone;
            };
        };
        Validator: {
            typeUrl: string;
            encode(message: _260.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _260.Validator;
            fromPartial(object: Partial<_260.Validator>): _260.Validator;
            fromAmino(object: _260.ValidatorAmino): _260.Validator;
            toAmino(message: _260.Validator): _260.ValidatorAmino;
            fromAminoMsg(object: _260.ValidatorAminoMsg): _260.Validator;
            fromProtoMsg(message: _260.ValidatorProtoMsg): _260.Validator;
            toProto(message: _260.Validator): Uint8Array;
            toProtoMsg(message: _260.Validator): _260.ValidatorProtoMsg;
        };
        authzPermissionChangeFromJSON(object: any): _259.AuthzPermissionChange;
        authzPermissionChangeToJSON(object: _259.AuthzPermissionChange): string;
        AuthzPermissionChange: typeof _259.AuthzPermissionChange;
        AuthzPermissionChangeSDKType: typeof _259.AuthzPermissionChange;
        AuthzPermissionChangeAmino: typeof _259.AuthzPermissionChange;
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _259.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_259.MsgUpdateInnerRedemptionRateBounds>): _259.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _259.MsgUpdateInnerRedemptionRateBoundsAmino): _259.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _259.MsgUpdateInnerRedemptionRateBounds): _259.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _259.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _259.MsgUpdateInnerRedemptionRateBounds;
            toAminoMsg(message: _259.MsgUpdateInnerRedemptionRateBounds): _259.MsgUpdateInnerRedemptionRateBoundsAminoMsg;
            fromProtoMsg(message: _259.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _259.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _259.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _259.MsgUpdateInnerRedemptionRateBounds): _259.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _259.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_259.MsgUpdateInnerRedemptionRateBoundsResponse>): _259.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _259.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _259.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _259.MsgUpdateInnerRedemptionRateBoundsResponse): _259.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _259.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _259.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _259.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _259.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _259.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _259.MsgUpdateInnerRedemptionRateBoundsResponse): _259.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _259.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgLiquidStake;
            fromPartial(object: Partial<_259.MsgLiquidStake>): _259.MsgLiquidStake;
            fromAmino(object: _259.MsgLiquidStakeAmino): _259.MsgLiquidStake;
            toAmino(message: _259.MsgLiquidStake): _259.MsgLiquidStakeAmino;
            fromAminoMsg(object: _259.MsgLiquidStakeAminoMsg): _259.MsgLiquidStake;
            toAminoMsg(message: _259.MsgLiquidStake): _259.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _259.MsgLiquidStakeProtoMsg): _259.MsgLiquidStake;
            toProto(message: _259.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _259.MsgLiquidStake): _259.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _259.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_259.MsgLiquidStakeResponse>): _259.MsgLiquidStakeResponse;
            fromAmino(object: _259.MsgLiquidStakeResponseAmino): _259.MsgLiquidStakeResponse;
            toAmino(message: _259.MsgLiquidStakeResponse): _259.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _259.MsgLiquidStakeResponseAminoMsg): _259.MsgLiquidStakeResponse;
            fromProtoMsg(message: _259.MsgLiquidStakeResponseProtoMsg): _259.MsgLiquidStakeResponse;
            toProto(message: _259.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _259.MsgLiquidStakeResponse): _259.MsgLiquidStakeResponseProtoMsg;
        };
        MsgLSMLiquidStake: {
            typeUrl: string;
            encode(message: _259.MsgLSMLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgLSMLiquidStake;
            fromPartial(object: Partial<_259.MsgLSMLiquidStake>): _259.MsgLSMLiquidStake;
            fromAmino(object: _259.MsgLSMLiquidStakeAmino): _259.MsgLSMLiquidStake;
            toAmino(message: _259.MsgLSMLiquidStake): _259.MsgLSMLiquidStakeAmino;
            fromAminoMsg(object: _259.MsgLSMLiquidStakeAminoMsg): _259.MsgLSMLiquidStake;
            toAminoMsg(message: _259.MsgLSMLiquidStake): _259.MsgLSMLiquidStakeAminoMsg;
            fromProtoMsg(message: _259.MsgLSMLiquidStakeProtoMsg): _259.MsgLSMLiquidStake;
            toProto(message: _259.MsgLSMLiquidStake): Uint8Array;
            toProtoMsg(message: _259.MsgLSMLiquidStake): _259.MsgLSMLiquidStakeProtoMsg;
        };
        MsgLSMLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _259.MsgLSMLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgLSMLiquidStakeResponse;
            fromPartial(object: Partial<_259.MsgLSMLiquidStakeResponse>): _259.MsgLSMLiquidStakeResponse;
            fromAmino(object: _259.MsgLSMLiquidStakeResponseAmino): _259.MsgLSMLiquidStakeResponse;
            toAmino(message: _259.MsgLSMLiquidStakeResponse): _259.MsgLSMLiquidStakeResponseAmino;
            fromAminoMsg(object: _259.MsgLSMLiquidStakeResponseAminoMsg): _259.MsgLSMLiquidStakeResponse;
            fromProtoMsg(message: _259.MsgLSMLiquidStakeResponseProtoMsg): _259.MsgLSMLiquidStakeResponse;
            toProto(message: _259.MsgLSMLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _259.MsgLSMLiquidStakeResponse): _259.MsgLSMLiquidStakeResponseProtoMsg;
        };
        MsgClearBalance: {
            typeUrl: string;
            encode(message: _259.MsgClearBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgClearBalance;
            fromPartial(object: Partial<_259.MsgClearBalance>): _259.MsgClearBalance;
            fromAmino(object: _259.MsgClearBalanceAmino): _259.MsgClearBalance;
            toAmino(message: _259.MsgClearBalance): _259.MsgClearBalanceAmino;
            fromAminoMsg(object: _259.MsgClearBalanceAminoMsg): _259.MsgClearBalance;
            toAminoMsg(message: _259.MsgClearBalance): _259.MsgClearBalanceAminoMsg;
            fromProtoMsg(message: _259.MsgClearBalanceProtoMsg): _259.MsgClearBalance;
            toProto(message: _259.MsgClearBalance): Uint8Array;
            toProtoMsg(message: _259.MsgClearBalance): _259.MsgClearBalanceProtoMsg;
        };
        MsgClearBalanceResponse: {
            typeUrl: string;
            encode(_: _259.MsgClearBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgClearBalanceResponse;
            fromPartial(_: Partial<_259.MsgClearBalanceResponse>): _259.MsgClearBalanceResponse;
            fromAmino(_: _259.MsgClearBalanceResponseAmino): _259.MsgClearBalanceResponse;
            toAmino(_: _259.MsgClearBalanceResponse): _259.MsgClearBalanceResponseAmino;
            fromAminoMsg(object: _259.MsgClearBalanceResponseAminoMsg): _259.MsgClearBalanceResponse;
            fromProtoMsg(message: _259.MsgClearBalanceResponseProtoMsg): _259.MsgClearBalanceResponse;
            toProto(message: _259.MsgClearBalanceResponse): Uint8Array;
            toProtoMsg(message: _259.MsgClearBalanceResponse): _259.MsgClearBalanceResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _259.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgRedeemStake;
            fromPartial(object: Partial<_259.MsgRedeemStake>): _259.MsgRedeemStake;
            fromAmino(object: _259.MsgRedeemStakeAmino): _259.MsgRedeemStake;
            toAmino(message: _259.MsgRedeemStake): _259.MsgRedeemStakeAmino;
            fromAminoMsg(object: _259.MsgRedeemStakeAminoMsg): _259.MsgRedeemStake;
            toAminoMsg(message: _259.MsgRedeemStake): _259.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _259.MsgRedeemStakeProtoMsg): _259.MsgRedeemStake;
            toProto(message: _259.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _259.MsgRedeemStake): _259.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(_: _259.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgRedeemStakeResponse;
            fromPartial(_: Partial<_259.MsgRedeemStakeResponse>): _259.MsgRedeemStakeResponse;
            fromAmino(_: _259.MsgRedeemStakeResponseAmino): _259.MsgRedeemStakeResponse;
            toAmino(_: _259.MsgRedeemStakeResponse): _259.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _259.MsgRedeemStakeResponseAminoMsg): _259.MsgRedeemStakeResponse;
            fromProtoMsg(message: _259.MsgRedeemStakeResponseProtoMsg): _259.MsgRedeemStakeResponse;
            toProto(message: _259.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _259.MsgRedeemStakeResponse): _259.MsgRedeemStakeResponseProtoMsg;
        };
        MsgRegisterHostZone: {
            typeUrl: string;
            encode(message: _259.MsgRegisterHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgRegisterHostZone;
            fromPartial(object: Partial<_259.MsgRegisterHostZone>): _259.MsgRegisterHostZone;
            fromAmino(object: _259.MsgRegisterHostZoneAmino): _259.MsgRegisterHostZone;
            toAmino(message: _259.MsgRegisterHostZone): _259.MsgRegisterHostZoneAmino;
            fromAminoMsg(object: _259.MsgRegisterHostZoneAminoMsg): _259.MsgRegisterHostZone;
            toAminoMsg(message: _259.MsgRegisterHostZone): _259.MsgRegisterHostZoneAminoMsg;
            fromProtoMsg(message: _259.MsgRegisterHostZoneProtoMsg): _259.MsgRegisterHostZone;
            toProto(message: _259.MsgRegisterHostZone): Uint8Array;
            toProtoMsg(message: _259.MsgRegisterHostZone): _259.MsgRegisterHostZoneProtoMsg;
        };
        MsgRegisterHostZoneResponse: {
            typeUrl: string;
            encode(_: _259.MsgRegisterHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgRegisterHostZoneResponse;
            fromPartial(_: Partial<_259.MsgRegisterHostZoneResponse>): _259.MsgRegisterHostZoneResponse;
            fromAmino(_: _259.MsgRegisterHostZoneResponseAmino): _259.MsgRegisterHostZoneResponse;
            toAmino(_: _259.MsgRegisterHostZoneResponse): _259.MsgRegisterHostZoneResponseAmino;
            fromAminoMsg(object: _259.MsgRegisterHostZoneResponseAminoMsg): _259.MsgRegisterHostZoneResponse;
            fromProtoMsg(message: _259.MsgRegisterHostZoneResponseProtoMsg): _259.MsgRegisterHostZoneResponse;
            toProto(message: _259.MsgRegisterHostZoneResponse): Uint8Array;
            toProtoMsg(message: _259.MsgRegisterHostZoneResponse): _259.MsgRegisterHostZoneResponseProtoMsg;
        };
        MsgClaimUndelegatedTokens: {
            typeUrl: string;
            encode(message: _259.MsgClaimUndelegatedTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgClaimUndelegatedTokens;
            fromPartial(object: Partial<_259.MsgClaimUndelegatedTokens>): _259.MsgClaimUndelegatedTokens;
            fromAmino(object: _259.MsgClaimUndelegatedTokensAmino): _259.MsgClaimUndelegatedTokens;
            toAmino(message: _259.MsgClaimUndelegatedTokens): _259.MsgClaimUndelegatedTokensAmino;
            fromAminoMsg(object: _259.MsgClaimUndelegatedTokensAminoMsg): _259.MsgClaimUndelegatedTokens;
            toAminoMsg(message: _259.MsgClaimUndelegatedTokens): _259.MsgClaimUndelegatedTokensAminoMsg;
            fromProtoMsg(message: _259.MsgClaimUndelegatedTokensProtoMsg): _259.MsgClaimUndelegatedTokens;
            toProto(message: _259.MsgClaimUndelegatedTokens): Uint8Array;
            toProtoMsg(message: _259.MsgClaimUndelegatedTokens): _259.MsgClaimUndelegatedTokensProtoMsg;
        };
        MsgClaimUndelegatedTokensResponse: {
            typeUrl: string;
            encode(_: _259.MsgClaimUndelegatedTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgClaimUndelegatedTokensResponse;
            fromPartial(_: Partial<_259.MsgClaimUndelegatedTokensResponse>): _259.MsgClaimUndelegatedTokensResponse;
            fromAmino(_: _259.MsgClaimUndelegatedTokensResponseAmino): _259.MsgClaimUndelegatedTokensResponse;
            toAmino(_: _259.MsgClaimUndelegatedTokensResponse): _259.MsgClaimUndelegatedTokensResponseAmino;
            fromAminoMsg(object: _259.MsgClaimUndelegatedTokensResponseAminoMsg): _259.MsgClaimUndelegatedTokensResponse;
            fromProtoMsg(message: _259.MsgClaimUndelegatedTokensResponseProtoMsg): _259.MsgClaimUndelegatedTokensResponse;
            toProto(message: _259.MsgClaimUndelegatedTokensResponse): Uint8Array;
            toProtoMsg(message: _259.MsgClaimUndelegatedTokensResponse): _259.MsgClaimUndelegatedTokensResponseProtoMsg;
        };
        MsgRebalanceValidators: {
            typeUrl: string;
            encode(message: _259.MsgRebalanceValidators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgRebalanceValidators;
            fromPartial(object: Partial<_259.MsgRebalanceValidators>): _259.MsgRebalanceValidators;
            fromAmino(object: _259.MsgRebalanceValidatorsAmino): _259.MsgRebalanceValidators;
            toAmino(message: _259.MsgRebalanceValidators): _259.MsgRebalanceValidatorsAmino;
            fromAminoMsg(object: _259.MsgRebalanceValidatorsAminoMsg): _259.MsgRebalanceValidators;
            toAminoMsg(message: _259.MsgRebalanceValidators): _259.MsgRebalanceValidatorsAminoMsg;
            fromProtoMsg(message: _259.MsgRebalanceValidatorsProtoMsg): _259.MsgRebalanceValidators;
            toProto(message: _259.MsgRebalanceValidators): Uint8Array;
            toProtoMsg(message: _259.MsgRebalanceValidators): _259.MsgRebalanceValidatorsProtoMsg;
        };
        MsgRebalanceValidatorsResponse: {
            typeUrl: string;
            encode(_: _259.MsgRebalanceValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgRebalanceValidatorsResponse;
            fromPartial(_: Partial<_259.MsgRebalanceValidatorsResponse>): _259.MsgRebalanceValidatorsResponse;
            fromAmino(_: _259.MsgRebalanceValidatorsResponseAmino): _259.MsgRebalanceValidatorsResponse;
            toAmino(_: _259.MsgRebalanceValidatorsResponse): _259.MsgRebalanceValidatorsResponseAmino;
            fromAminoMsg(object: _259.MsgRebalanceValidatorsResponseAminoMsg): _259.MsgRebalanceValidatorsResponse;
            fromProtoMsg(message: _259.MsgRebalanceValidatorsResponseProtoMsg): _259.MsgRebalanceValidatorsResponse;
            toProto(message: _259.MsgRebalanceValidatorsResponse): Uint8Array;
            toProtoMsg(message: _259.MsgRebalanceValidatorsResponse): _259.MsgRebalanceValidatorsResponseProtoMsg;
        };
        MsgAddValidators: {
            typeUrl: string;
            encode(message: _259.MsgAddValidators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgAddValidators;
            fromPartial(object: Partial<_259.MsgAddValidators>): _259.MsgAddValidators;
            fromAmino(object: _259.MsgAddValidatorsAmino): _259.MsgAddValidators;
            toAmino(message: _259.MsgAddValidators): _259.MsgAddValidatorsAmino;
            fromAminoMsg(object: _259.MsgAddValidatorsAminoMsg): _259.MsgAddValidators;
            toAminoMsg(message: _259.MsgAddValidators): _259.MsgAddValidatorsAminoMsg;
            fromProtoMsg(message: _259.MsgAddValidatorsProtoMsg): _259.MsgAddValidators;
            toProto(message: _259.MsgAddValidators): Uint8Array;
            toProtoMsg(message: _259.MsgAddValidators): _259.MsgAddValidatorsProtoMsg;
        };
        MsgAddValidatorsResponse: {
            typeUrl: string;
            encode(_: _259.MsgAddValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgAddValidatorsResponse;
            fromPartial(_: Partial<_259.MsgAddValidatorsResponse>): _259.MsgAddValidatorsResponse;
            fromAmino(_: _259.MsgAddValidatorsResponseAmino): _259.MsgAddValidatorsResponse;
            toAmino(_: _259.MsgAddValidatorsResponse): _259.MsgAddValidatorsResponseAmino;
            fromAminoMsg(object: _259.MsgAddValidatorsResponseAminoMsg): _259.MsgAddValidatorsResponse;
            fromProtoMsg(message: _259.MsgAddValidatorsResponseProtoMsg): _259.MsgAddValidatorsResponse;
            toProto(message: _259.MsgAddValidatorsResponse): Uint8Array;
            toProtoMsg(message: _259.MsgAddValidatorsResponse): _259.MsgAddValidatorsResponseProtoMsg;
        };
        ValidatorWeight: {
            typeUrl: string;
            encode(message: _259.ValidatorWeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.ValidatorWeight;
            fromPartial(object: Partial<_259.ValidatorWeight>): _259.ValidatorWeight;
            fromAmino(object: _259.ValidatorWeightAmino): _259.ValidatorWeight;
            toAmino(message: _259.ValidatorWeight): _259.ValidatorWeightAmino;
            fromAminoMsg(object: _259.ValidatorWeightAminoMsg): _259.ValidatorWeight;
            fromProtoMsg(message: _259.ValidatorWeightProtoMsg): _259.ValidatorWeight;
            toProto(message: _259.ValidatorWeight): Uint8Array;
            toProtoMsg(message: _259.ValidatorWeight): _259.ValidatorWeightProtoMsg;
        };
        MsgChangeValidatorWeights: {
            typeUrl: string;
            encode(message: _259.MsgChangeValidatorWeights, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgChangeValidatorWeights;
            fromPartial(object: Partial<_259.MsgChangeValidatorWeights>): _259.MsgChangeValidatorWeights;
            fromAmino(object: _259.MsgChangeValidatorWeightsAmino): _259.MsgChangeValidatorWeights;
            toAmino(message: _259.MsgChangeValidatorWeights): _259.MsgChangeValidatorWeightsAmino;
            fromAminoMsg(object: _259.MsgChangeValidatorWeightsAminoMsg): _259.MsgChangeValidatorWeights;
            toAminoMsg(message: _259.MsgChangeValidatorWeights): _259.MsgChangeValidatorWeightsAminoMsg;
            fromProtoMsg(message: _259.MsgChangeValidatorWeightsProtoMsg): _259.MsgChangeValidatorWeights;
            toProto(message: _259.MsgChangeValidatorWeights): Uint8Array;
            toProtoMsg(message: _259.MsgChangeValidatorWeights): _259.MsgChangeValidatorWeightsProtoMsg;
        };
        MsgChangeValidatorWeightsResponse: {
            typeUrl: string;
            encode(_: _259.MsgChangeValidatorWeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgChangeValidatorWeightsResponse;
            fromPartial(_: Partial<_259.MsgChangeValidatorWeightsResponse>): _259.MsgChangeValidatorWeightsResponse;
            fromAmino(_: _259.MsgChangeValidatorWeightsResponseAmino): _259.MsgChangeValidatorWeightsResponse;
            toAmino(_: _259.MsgChangeValidatorWeightsResponse): _259.MsgChangeValidatorWeightsResponseAmino;
            fromAminoMsg(object: _259.MsgChangeValidatorWeightsResponseAminoMsg): _259.MsgChangeValidatorWeightsResponse;
            fromProtoMsg(message: _259.MsgChangeValidatorWeightsResponseProtoMsg): _259.MsgChangeValidatorWeightsResponse;
            toProto(message: _259.MsgChangeValidatorWeightsResponse): Uint8Array;
            toProtoMsg(message: _259.MsgChangeValidatorWeightsResponse): _259.MsgChangeValidatorWeightsResponseProtoMsg;
        };
        MsgDeleteValidator: {
            typeUrl: string;
            encode(message: _259.MsgDeleteValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgDeleteValidator;
            fromPartial(object: Partial<_259.MsgDeleteValidator>): _259.MsgDeleteValidator;
            fromAmino(object: _259.MsgDeleteValidatorAmino): _259.MsgDeleteValidator;
            toAmino(message: _259.MsgDeleteValidator): _259.MsgDeleteValidatorAmino;
            fromAminoMsg(object: _259.MsgDeleteValidatorAminoMsg): _259.MsgDeleteValidator;
            toAminoMsg(message: _259.MsgDeleteValidator): _259.MsgDeleteValidatorAminoMsg;
            fromProtoMsg(message: _259.MsgDeleteValidatorProtoMsg): _259.MsgDeleteValidator;
            toProto(message: _259.MsgDeleteValidator): Uint8Array;
            toProtoMsg(message: _259.MsgDeleteValidator): _259.MsgDeleteValidatorProtoMsg;
        };
        MsgDeleteValidatorResponse: {
            typeUrl: string;
            encode(_: _259.MsgDeleteValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgDeleteValidatorResponse;
            fromPartial(_: Partial<_259.MsgDeleteValidatorResponse>): _259.MsgDeleteValidatorResponse;
            fromAmino(_: _259.MsgDeleteValidatorResponseAmino): _259.MsgDeleteValidatorResponse;
            toAmino(_: _259.MsgDeleteValidatorResponse): _259.MsgDeleteValidatorResponseAmino;
            fromAminoMsg(object: _259.MsgDeleteValidatorResponseAminoMsg): _259.MsgDeleteValidatorResponse;
            fromProtoMsg(message: _259.MsgDeleteValidatorResponseProtoMsg): _259.MsgDeleteValidatorResponse;
            toProto(message: _259.MsgDeleteValidatorResponse): Uint8Array;
            toProtoMsg(message: _259.MsgDeleteValidatorResponse): _259.MsgDeleteValidatorResponseProtoMsg;
        };
        MsgRestoreInterchainAccount: {
            typeUrl: string;
            encode(message: _259.MsgRestoreInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgRestoreInterchainAccount;
            fromPartial(object: Partial<_259.MsgRestoreInterchainAccount>): _259.MsgRestoreInterchainAccount;
            fromAmino(object: _259.MsgRestoreInterchainAccountAmino): _259.MsgRestoreInterchainAccount;
            toAmino(message: _259.MsgRestoreInterchainAccount): _259.MsgRestoreInterchainAccountAmino;
            fromAminoMsg(object: _259.MsgRestoreInterchainAccountAminoMsg): _259.MsgRestoreInterchainAccount;
            toAminoMsg(message: _259.MsgRestoreInterchainAccount): _259.MsgRestoreInterchainAccountAminoMsg;
            fromProtoMsg(message: _259.MsgRestoreInterchainAccountProtoMsg): _259.MsgRestoreInterchainAccount;
            toProto(message: _259.MsgRestoreInterchainAccount): Uint8Array;
            toProtoMsg(message: _259.MsgRestoreInterchainAccount): _259.MsgRestoreInterchainAccountProtoMsg;
        };
        MsgRestoreInterchainAccountResponse: {
            typeUrl: string;
            encode(_: _259.MsgRestoreInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgRestoreInterchainAccountResponse;
            fromPartial(_: Partial<_259.MsgRestoreInterchainAccountResponse>): _259.MsgRestoreInterchainAccountResponse;
            fromAmino(_: _259.MsgRestoreInterchainAccountResponseAmino): _259.MsgRestoreInterchainAccountResponse;
            toAmino(_: _259.MsgRestoreInterchainAccountResponse): _259.MsgRestoreInterchainAccountResponseAmino;
            fromAminoMsg(object: _259.MsgRestoreInterchainAccountResponseAminoMsg): _259.MsgRestoreInterchainAccountResponse;
            fromProtoMsg(message: _259.MsgRestoreInterchainAccountResponseProtoMsg): _259.MsgRestoreInterchainAccountResponse;
            toProto(message: _259.MsgRestoreInterchainAccountResponse): Uint8Array;
            toProtoMsg(message: _259.MsgRestoreInterchainAccountResponse): _259.MsgRestoreInterchainAccountResponseProtoMsg;
        };
        MsgCloseDelegationChannel: {
            typeUrl: string;
            encode(message: _259.MsgCloseDelegationChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgCloseDelegationChannel;
            fromPartial(object: Partial<_259.MsgCloseDelegationChannel>): _259.MsgCloseDelegationChannel;
            fromAmino(object: _259.MsgCloseDelegationChannelAmino): _259.MsgCloseDelegationChannel;
            toAmino(message: _259.MsgCloseDelegationChannel): _259.MsgCloseDelegationChannelAmino;
            fromAminoMsg(object: _259.MsgCloseDelegationChannelAminoMsg): _259.MsgCloseDelegationChannel;
            toAminoMsg(message: _259.MsgCloseDelegationChannel): _259.MsgCloseDelegationChannelAminoMsg;
            fromProtoMsg(message: _259.MsgCloseDelegationChannelProtoMsg): _259.MsgCloseDelegationChannel;
            toProto(message: _259.MsgCloseDelegationChannel): Uint8Array;
            toProtoMsg(message: _259.MsgCloseDelegationChannel): _259.MsgCloseDelegationChannelProtoMsg;
        };
        MsgCloseDelegationChannelResponse: {
            typeUrl: string;
            encode(_: _259.MsgCloseDelegationChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgCloseDelegationChannelResponse;
            fromPartial(_: Partial<_259.MsgCloseDelegationChannelResponse>): _259.MsgCloseDelegationChannelResponse;
            fromAmino(_: _259.MsgCloseDelegationChannelResponseAmino): _259.MsgCloseDelegationChannelResponse;
            toAmino(_: _259.MsgCloseDelegationChannelResponse): _259.MsgCloseDelegationChannelResponseAmino;
            fromAminoMsg(object: _259.MsgCloseDelegationChannelResponseAminoMsg): _259.MsgCloseDelegationChannelResponse;
            fromProtoMsg(message: _259.MsgCloseDelegationChannelResponseProtoMsg): _259.MsgCloseDelegationChannelResponse;
            toProto(message: _259.MsgCloseDelegationChannelResponse): Uint8Array;
            toProtoMsg(message: _259.MsgCloseDelegationChannelResponse): _259.MsgCloseDelegationChannelResponseProtoMsg;
        };
        MsgUpdateValidatorSharesExchRate: {
            typeUrl: string;
            encode(message: _259.MsgUpdateValidatorSharesExchRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgUpdateValidatorSharesExchRate;
            fromPartial(object: Partial<_259.MsgUpdateValidatorSharesExchRate>): _259.MsgUpdateValidatorSharesExchRate;
            fromAmino(object: _259.MsgUpdateValidatorSharesExchRateAmino): _259.MsgUpdateValidatorSharesExchRate;
            toAmino(message: _259.MsgUpdateValidatorSharesExchRate): _259.MsgUpdateValidatorSharesExchRateAmino;
            fromAminoMsg(object: _259.MsgUpdateValidatorSharesExchRateAminoMsg): _259.MsgUpdateValidatorSharesExchRate;
            toAminoMsg(message: _259.MsgUpdateValidatorSharesExchRate): _259.MsgUpdateValidatorSharesExchRateAminoMsg;
            fromProtoMsg(message: _259.MsgUpdateValidatorSharesExchRateProtoMsg): _259.MsgUpdateValidatorSharesExchRate;
            toProto(message: _259.MsgUpdateValidatorSharesExchRate): Uint8Array;
            toProtoMsg(message: _259.MsgUpdateValidatorSharesExchRate): _259.MsgUpdateValidatorSharesExchRateProtoMsg;
        };
        MsgUpdateValidatorSharesExchRateResponse: {
            typeUrl: string;
            encode(_: _259.MsgUpdateValidatorSharesExchRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgUpdateValidatorSharesExchRateResponse;
            fromPartial(_: Partial<_259.MsgUpdateValidatorSharesExchRateResponse>): _259.MsgUpdateValidatorSharesExchRateResponse;
            fromAmino(_: _259.MsgUpdateValidatorSharesExchRateResponseAmino): _259.MsgUpdateValidatorSharesExchRateResponse;
            toAmino(_: _259.MsgUpdateValidatorSharesExchRateResponse): _259.MsgUpdateValidatorSharesExchRateResponseAmino;
            fromAminoMsg(object: _259.MsgUpdateValidatorSharesExchRateResponseAminoMsg): _259.MsgUpdateValidatorSharesExchRateResponse;
            fromProtoMsg(message: _259.MsgUpdateValidatorSharesExchRateResponseProtoMsg): _259.MsgUpdateValidatorSharesExchRateResponse;
            toProto(message: _259.MsgUpdateValidatorSharesExchRateResponse): Uint8Array;
            toProtoMsg(message: _259.MsgUpdateValidatorSharesExchRateResponse): _259.MsgUpdateValidatorSharesExchRateResponseProtoMsg;
        };
        MsgCalibrateDelegation: {
            typeUrl: string;
            encode(message: _259.MsgCalibrateDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgCalibrateDelegation;
            fromPartial(object: Partial<_259.MsgCalibrateDelegation>): _259.MsgCalibrateDelegation;
            fromAmino(object: _259.MsgCalibrateDelegationAmino): _259.MsgCalibrateDelegation;
            toAmino(message: _259.MsgCalibrateDelegation): _259.MsgCalibrateDelegationAmino;
            fromAminoMsg(object: _259.MsgCalibrateDelegationAminoMsg): _259.MsgCalibrateDelegation;
            toAminoMsg(message: _259.MsgCalibrateDelegation): _259.MsgCalibrateDelegationAminoMsg;
            fromProtoMsg(message: _259.MsgCalibrateDelegationProtoMsg): _259.MsgCalibrateDelegation;
            toProto(message: _259.MsgCalibrateDelegation): Uint8Array;
            toProtoMsg(message: _259.MsgCalibrateDelegation): _259.MsgCalibrateDelegationProtoMsg;
        };
        MsgCalibrateDelegationResponse: {
            typeUrl: string;
            encode(_: _259.MsgCalibrateDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgCalibrateDelegationResponse;
            fromPartial(_: Partial<_259.MsgCalibrateDelegationResponse>): _259.MsgCalibrateDelegationResponse;
            fromAmino(_: _259.MsgCalibrateDelegationResponseAmino): _259.MsgCalibrateDelegationResponse;
            toAmino(_: _259.MsgCalibrateDelegationResponse): _259.MsgCalibrateDelegationResponseAmino;
            fromAminoMsg(object: _259.MsgCalibrateDelegationResponseAminoMsg): _259.MsgCalibrateDelegationResponse;
            fromProtoMsg(message: _259.MsgCalibrateDelegationResponseProtoMsg): _259.MsgCalibrateDelegationResponse;
            toProto(message: _259.MsgCalibrateDelegationResponse): Uint8Array;
            toProtoMsg(message: _259.MsgCalibrateDelegationResponse): _259.MsgCalibrateDelegationResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _259.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgResumeHostZone;
            fromPartial(object: Partial<_259.MsgResumeHostZone>): _259.MsgResumeHostZone;
            fromAmino(object: _259.MsgResumeHostZoneAmino): _259.MsgResumeHostZone;
            toAmino(message: _259.MsgResumeHostZone): _259.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _259.MsgResumeHostZoneAminoMsg): _259.MsgResumeHostZone;
            toAminoMsg(message: _259.MsgResumeHostZone): _259.MsgResumeHostZoneAminoMsg;
            fromProtoMsg(message: _259.MsgResumeHostZoneProtoMsg): _259.MsgResumeHostZone;
            toProto(message: _259.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _259.MsgResumeHostZone): _259.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _259.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_259.MsgResumeHostZoneResponse>): _259.MsgResumeHostZoneResponse;
            fromAmino(_: _259.MsgResumeHostZoneResponseAmino): _259.MsgResumeHostZoneResponse;
            toAmino(_: _259.MsgResumeHostZoneResponse): _259.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _259.MsgResumeHostZoneResponseAminoMsg): _259.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _259.MsgResumeHostZoneResponseProtoMsg): _259.MsgResumeHostZoneResponse;
            toProto(message: _259.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _259.MsgResumeHostZoneResponse): _259.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgDeprecateHostZone: {
            typeUrl: string;
            encode(message: _259.MsgDeprecateHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgDeprecateHostZone;
            fromPartial(object: Partial<_259.MsgDeprecateHostZone>): _259.MsgDeprecateHostZone;
            fromAmino(object: _259.MsgDeprecateHostZoneAmino): _259.MsgDeprecateHostZone;
            toAmino(message: _259.MsgDeprecateHostZone): _259.MsgDeprecateHostZoneAmino;
            fromAminoMsg(object: _259.MsgDeprecateHostZoneAminoMsg): _259.MsgDeprecateHostZone;
            toAminoMsg(message: _259.MsgDeprecateHostZone): _259.MsgDeprecateHostZoneAminoMsg;
            fromProtoMsg(message: _259.MsgDeprecateHostZoneProtoMsg): _259.MsgDeprecateHostZone;
            toProto(message: _259.MsgDeprecateHostZone): Uint8Array;
            toProtoMsg(message: _259.MsgDeprecateHostZone): _259.MsgDeprecateHostZoneProtoMsg;
        };
        MsgDeprecateHostZoneResponse: {
            typeUrl: string;
            encode(_: _259.MsgDeprecateHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgDeprecateHostZoneResponse;
            fromPartial(_: Partial<_259.MsgDeprecateHostZoneResponse>): _259.MsgDeprecateHostZoneResponse;
            fromAmino(_: _259.MsgDeprecateHostZoneResponseAmino): _259.MsgDeprecateHostZoneResponse;
            toAmino(_: _259.MsgDeprecateHostZoneResponse): _259.MsgDeprecateHostZoneResponseAmino;
            fromAminoMsg(object: _259.MsgDeprecateHostZoneResponseAminoMsg): _259.MsgDeprecateHostZoneResponse;
            fromProtoMsg(message: _259.MsgDeprecateHostZoneResponseProtoMsg): _259.MsgDeprecateHostZoneResponse;
            toProto(message: _259.MsgDeprecateHostZoneResponse): Uint8Array;
            toProtoMsg(message: _259.MsgDeprecateHostZoneResponse): _259.MsgDeprecateHostZoneResponseProtoMsg;
        };
        MsgCreateTradeRoute: {
            typeUrl: string;
            encode(message: _259.MsgCreateTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgCreateTradeRoute;
            fromPartial(object: Partial<_259.MsgCreateTradeRoute>): _259.MsgCreateTradeRoute;
            fromAmino(object: _259.MsgCreateTradeRouteAmino): _259.MsgCreateTradeRoute;
            toAmino(message: _259.MsgCreateTradeRoute): _259.MsgCreateTradeRouteAmino;
            fromAminoMsg(object: _259.MsgCreateTradeRouteAminoMsg): _259.MsgCreateTradeRoute;
            toAminoMsg(message: _259.MsgCreateTradeRoute): _259.MsgCreateTradeRouteAminoMsg;
            fromProtoMsg(message: _259.MsgCreateTradeRouteProtoMsg): _259.MsgCreateTradeRoute;
            toProto(message: _259.MsgCreateTradeRoute): Uint8Array;
            toProtoMsg(message: _259.MsgCreateTradeRoute): _259.MsgCreateTradeRouteProtoMsg;
        };
        MsgCreateTradeRouteResponse: {
            typeUrl: string;
            encode(_: _259.MsgCreateTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgCreateTradeRouteResponse;
            fromPartial(_: Partial<_259.MsgCreateTradeRouteResponse>): _259.MsgCreateTradeRouteResponse;
            fromAmino(_: _259.MsgCreateTradeRouteResponseAmino): _259.MsgCreateTradeRouteResponse;
            toAmino(_: _259.MsgCreateTradeRouteResponse): _259.MsgCreateTradeRouteResponseAmino;
            fromAminoMsg(object: _259.MsgCreateTradeRouteResponseAminoMsg): _259.MsgCreateTradeRouteResponse;
            fromProtoMsg(message: _259.MsgCreateTradeRouteResponseProtoMsg): _259.MsgCreateTradeRouteResponse;
            toProto(message: _259.MsgCreateTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _259.MsgCreateTradeRouteResponse): _259.MsgCreateTradeRouteResponseProtoMsg;
        };
        MsgDeleteTradeRoute: {
            typeUrl: string;
            encode(message: _259.MsgDeleteTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgDeleteTradeRoute;
            fromPartial(object: Partial<_259.MsgDeleteTradeRoute>): _259.MsgDeleteTradeRoute;
            fromAmino(object: _259.MsgDeleteTradeRouteAmino): _259.MsgDeleteTradeRoute;
            toAmino(message: _259.MsgDeleteTradeRoute): _259.MsgDeleteTradeRouteAmino;
            fromAminoMsg(object: _259.MsgDeleteTradeRouteAminoMsg): _259.MsgDeleteTradeRoute;
            toAminoMsg(message: _259.MsgDeleteTradeRoute): _259.MsgDeleteTradeRouteAminoMsg;
            fromProtoMsg(message: _259.MsgDeleteTradeRouteProtoMsg): _259.MsgDeleteTradeRoute;
            toProto(message: _259.MsgDeleteTradeRoute): Uint8Array;
            toProtoMsg(message: _259.MsgDeleteTradeRoute): _259.MsgDeleteTradeRouteProtoMsg;
        };
        MsgDeleteTradeRouteResponse: {
            typeUrl: string;
            encode(_: _259.MsgDeleteTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgDeleteTradeRouteResponse;
            fromPartial(_: Partial<_259.MsgDeleteTradeRouteResponse>): _259.MsgDeleteTradeRouteResponse;
            fromAmino(_: _259.MsgDeleteTradeRouteResponseAmino): _259.MsgDeleteTradeRouteResponse;
            toAmino(_: _259.MsgDeleteTradeRouteResponse): _259.MsgDeleteTradeRouteResponseAmino;
            fromAminoMsg(object: _259.MsgDeleteTradeRouteResponseAminoMsg): _259.MsgDeleteTradeRouteResponse;
            fromProtoMsg(message: _259.MsgDeleteTradeRouteResponseProtoMsg): _259.MsgDeleteTradeRouteResponse;
            toProto(message: _259.MsgDeleteTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _259.MsgDeleteTradeRouteResponse): _259.MsgDeleteTradeRouteResponseProtoMsg;
        };
        MsgUpdateTradeRoute: {
            typeUrl: string;
            encode(message: _259.MsgUpdateTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgUpdateTradeRoute;
            fromPartial(object: Partial<_259.MsgUpdateTradeRoute>): _259.MsgUpdateTradeRoute;
            fromAmino(object: _259.MsgUpdateTradeRouteAmino): _259.MsgUpdateTradeRoute;
            toAmino(message: _259.MsgUpdateTradeRoute): _259.MsgUpdateTradeRouteAmino;
            fromAminoMsg(object: _259.MsgUpdateTradeRouteAminoMsg): _259.MsgUpdateTradeRoute;
            toAminoMsg(message: _259.MsgUpdateTradeRoute): _259.MsgUpdateTradeRouteAminoMsg;
            fromProtoMsg(message: _259.MsgUpdateTradeRouteProtoMsg): _259.MsgUpdateTradeRoute;
            toProto(message: _259.MsgUpdateTradeRoute): Uint8Array;
            toProtoMsg(message: _259.MsgUpdateTradeRoute): _259.MsgUpdateTradeRouteProtoMsg;
        };
        MsgUpdateTradeRouteResponse: {
            typeUrl: string;
            encode(_: _259.MsgUpdateTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgUpdateTradeRouteResponse;
            fromPartial(_: Partial<_259.MsgUpdateTradeRouteResponse>): _259.MsgUpdateTradeRouteResponse;
            fromAmino(_: _259.MsgUpdateTradeRouteResponseAmino): _259.MsgUpdateTradeRouteResponse;
            toAmino(_: _259.MsgUpdateTradeRouteResponse): _259.MsgUpdateTradeRouteResponseAmino;
            fromAminoMsg(object: _259.MsgUpdateTradeRouteResponseAminoMsg): _259.MsgUpdateTradeRouteResponse;
            fromProtoMsg(message: _259.MsgUpdateTradeRouteResponseProtoMsg): _259.MsgUpdateTradeRouteResponse;
            toProto(message: _259.MsgUpdateTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _259.MsgUpdateTradeRouteResponse): _259.MsgUpdateTradeRouteResponseProtoMsg;
        };
        MsgSetCommunityPoolRebate: {
            typeUrl: string;
            encode(message: _259.MsgSetCommunityPoolRebate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgSetCommunityPoolRebate;
            fromPartial(object: Partial<_259.MsgSetCommunityPoolRebate>): _259.MsgSetCommunityPoolRebate;
            fromAmino(object: _259.MsgSetCommunityPoolRebateAmino): _259.MsgSetCommunityPoolRebate;
            toAmino(message: _259.MsgSetCommunityPoolRebate): _259.MsgSetCommunityPoolRebateAmino;
            fromAminoMsg(object: _259.MsgSetCommunityPoolRebateAminoMsg): _259.MsgSetCommunityPoolRebate;
            toAminoMsg(message: _259.MsgSetCommunityPoolRebate): _259.MsgSetCommunityPoolRebateAminoMsg;
            fromProtoMsg(message: _259.MsgSetCommunityPoolRebateProtoMsg): _259.MsgSetCommunityPoolRebate;
            toProto(message: _259.MsgSetCommunityPoolRebate): Uint8Array;
            toProtoMsg(message: _259.MsgSetCommunityPoolRebate): _259.MsgSetCommunityPoolRebateProtoMsg;
        };
        MsgSetCommunityPoolRebateResponse: {
            typeUrl: string;
            encode(_: _259.MsgSetCommunityPoolRebateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgSetCommunityPoolRebateResponse;
            fromPartial(_: Partial<_259.MsgSetCommunityPoolRebateResponse>): _259.MsgSetCommunityPoolRebateResponse;
            fromAmino(_: _259.MsgSetCommunityPoolRebateResponseAmino): _259.MsgSetCommunityPoolRebateResponse;
            toAmino(_: _259.MsgSetCommunityPoolRebateResponse): _259.MsgSetCommunityPoolRebateResponseAmino;
            fromAminoMsg(object: _259.MsgSetCommunityPoolRebateResponseAminoMsg): _259.MsgSetCommunityPoolRebateResponse;
            fromProtoMsg(message: _259.MsgSetCommunityPoolRebateResponseProtoMsg): _259.MsgSetCommunityPoolRebateResponse;
            toProto(message: _259.MsgSetCommunityPoolRebateResponse): Uint8Array;
            toProtoMsg(message: _259.MsgSetCommunityPoolRebateResponse): _259.MsgSetCommunityPoolRebateResponseProtoMsg;
        };
        MsgToggleTradeController: {
            typeUrl: string;
            encode(message: _259.MsgToggleTradeController, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgToggleTradeController;
            fromPartial(object: Partial<_259.MsgToggleTradeController>): _259.MsgToggleTradeController;
            fromAmino(object: _259.MsgToggleTradeControllerAmino): _259.MsgToggleTradeController;
            toAmino(message: _259.MsgToggleTradeController): _259.MsgToggleTradeControllerAmino;
            fromAminoMsg(object: _259.MsgToggleTradeControllerAminoMsg): _259.MsgToggleTradeController;
            toAminoMsg(message: _259.MsgToggleTradeController): _259.MsgToggleTradeControllerAminoMsg;
            fromProtoMsg(message: _259.MsgToggleTradeControllerProtoMsg): _259.MsgToggleTradeController;
            toProto(message: _259.MsgToggleTradeController): Uint8Array;
            toProtoMsg(message: _259.MsgToggleTradeController): _259.MsgToggleTradeControllerProtoMsg;
        };
        MsgToggleTradeControllerResponse: {
            typeUrl: string;
            encode(_: _259.MsgToggleTradeControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgToggleTradeControllerResponse;
            fromPartial(_: Partial<_259.MsgToggleTradeControllerResponse>): _259.MsgToggleTradeControllerResponse;
            fromAmino(_: _259.MsgToggleTradeControllerResponseAmino): _259.MsgToggleTradeControllerResponse;
            toAmino(_: _259.MsgToggleTradeControllerResponse): _259.MsgToggleTradeControllerResponseAmino;
            fromAminoMsg(object: _259.MsgToggleTradeControllerResponseAminoMsg): _259.MsgToggleTradeControllerResponse;
            fromProtoMsg(message: _259.MsgToggleTradeControllerResponseProtoMsg): _259.MsgToggleTradeControllerResponse;
            toProto(message: _259.MsgToggleTradeControllerResponse): Uint8Array;
            toProtoMsg(message: _259.MsgToggleTradeControllerResponse): _259.MsgToggleTradeControllerResponseProtoMsg;
        };
        MsgUpdateHostZoneParams: {
            typeUrl: string;
            encode(message: _259.MsgUpdateHostZoneParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgUpdateHostZoneParams;
            fromPartial(object: Partial<_259.MsgUpdateHostZoneParams>): _259.MsgUpdateHostZoneParams;
            fromAmino(object: _259.MsgUpdateHostZoneParamsAmino): _259.MsgUpdateHostZoneParams;
            toAmino(message: _259.MsgUpdateHostZoneParams): _259.MsgUpdateHostZoneParamsAmino;
            fromAminoMsg(object: _259.MsgUpdateHostZoneParamsAminoMsg): _259.MsgUpdateHostZoneParams;
            toAminoMsg(message: _259.MsgUpdateHostZoneParams): _259.MsgUpdateHostZoneParamsAminoMsg;
            fromProtoMsg(message: _259.MsgUpdateHostZoneParamsProtoMsg): _259.MsgUpdateHostZoneParams;
            toProto(message: _259.MsgUpdateHostZoneParams): Uint8Array;
            toProtoMsg(message: _259.MsgUpdateHostZoneParams): _259.MsgUpdateHostZoneParamsProtoMsg;
        };
        MsgUpdateHostZoneParamsResponse: {
            typeUrl: string;
            encode(_: _259.MsgUpdateHostZoneParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.MsgUpdateHostZoneParamsResponse;
            fromPartial(_: Partial<_259.MsgUpdateHostZoneParamsResponse>): _259.MsgUpdateHostZoneParamsResponse;
            fromAmino(_: _259.MsgUpdateHostZoneParamsResponseAmino): _259.MsgUpdateHostZoneParamsResponse;
            toAmino(_: _259.MsgUpdateHostZoneParamsResponse): _259.MsgUpdateHostZoneParamsResponseAmino;
            fromAminoMsg(object: _259.MsgUpdateHostZoneParamsResponseAminoMsg): _259.MsgUpdateHostZoneParamsResponse;
            fromProtoMsg(message: _259.MsgUpdateHostZoneParamsResponseProtoMsg): _259.MsgUpdateHostZoneParamsResponse;
            toProto(message: _259.MsgUpdateHostZoneParamsResponse): Uint8Array;
            toProtoMsg(message: _259.MsgUpdateHostZoneParamsResponse): _259.MsgUpdateHostZoneParamsResponseProtoMsg;
        };
        TradeConfig: {
            typeUrl: string;
            encode(message: _258.TradeConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.TradeConfig;
            fromPartial(object: Partial<_258.TradeConfig>): _258.TradeConfig;
            fromAmino(object: _258.TradeConfigAmino): _258.TradeConfig;
            toAmino(message: _258.TradeConfig): _258.TradeConfigAmino;
            fromAminoMsg(object: _258.TradeConfigAminoMsg): _258.TradeConfig;
            fromProtoMsg(message: _258.TradeConfigProtoMsg): _258.TradeConfig;
            toProto(message: _258.TradeConfig): Uint8Array;
            toProtoMsg(message: _258.TradeConfig): _258.TradeConfigProtoMsg;
        };
        TradeRoute: {
            typeUrl: string;
            encode(message: _258.TradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.TradeRoute;
            fromPartial(object: Partial<_258.TradeRoute>): _258.TradeRoute;
            fromAmino(object: _258.TradeRouteAmino): _258.TradeRoute;
            toAmino(message: _258.TradeRoute): _258.TradeRouteAmino;
            fromAminoMsg(object: _258.TradeRouteAminoMsg): _258.TradeRoute;
            fromProtoMsg(message: _258.TradeRouteProtoMsg): _258.TradeRoute;
            toProto(message: _258.TradeRoute): Uint8Array;
            toProtoMsg(message: _258.TradeRoute): _258.TradeRouteProtoMsg;
        };
        QueryInterchainAccountFromAddressRequest: {
            typeUrl: string;
            encode(message: _257.QueryInterchainAccountFromAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.QueryInterchainAccountFromAddressRequest;
            fromPartial(object: Partial<_257.QueryInterchainAccountFromAddressRequest>): _257.QueryInterchainAccountFromAddressRequest;
            fromAmino(object: _257.QueryInterchainAccountFromAddressRequestAmino): _257.QueryInterchainAccountFromAddressRequest;
            toAmino(message: _257.QueryInterchainAccountFromAddressRequest): _257.QueryInterchainAccountFromAddressRequestAmino;
            fromAminoMsg(object: _257.QueryInterchainAccountFromAddressRequestAminoMsg): _257.QueryInterchainAccountFromAddressRequest;
            fromProtoMsg(message: _257.QueryInterchainAccountFromAddressRequestProtoMsg): _257.QueryInterchainAccountFromAddressRequest;
            toProto(message: _257.QueryInterchainAccountFromAddressRequest): Uint8Array;
            toProtoMsg(message: _257.QueryInterchainAccountFromAddressRequest): _257.QueryInterchainAccountFromAddressRequestProtoMsg;
        };
        QueryInterchainAccountFromAddressResponse: {
            typeUrl: string;
            encode(message: _257.QueryInterchainAccountFromAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.QueryInterchainAccountFromAddressResponse;
            fromPartial(object: Partial<_257.QueryInterchainAccountFromAddressResponse>): _257.QueryInterchainAccountFromAddressResponse;
            fromAmino(object: _257.QueryInterchainAccountFromAddressResponseAmino): _257.QueryInterchainAccountFromAddressResponse;
            toAmino(message: _257.QueryInterchainAccountFromAddressResponse): _257.QueryInterchainAccountFromAddressResponseAmino;
            fromAminoMsg(object: _257.QueryInterchainAccountFromAddressResponseAminoMsg): _257.QueryInterchainAccountFromAddressResponse;
            fromProtoMsg(message: _257.QueryInterchainAccountFromAddressResponseProtoMsg): _257.QueryInterchainAccountFromAddressResponse;
            toProto(message: _257.QueryInterchainAccountFromAddressResponse): Uint8Array;
            toProtoMsg(message: _257.QueryInterchainAccountFromAddressResponse): _257.QueryInterchainAccountFromAddressResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _257.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.QueryParamsRequest;
            fromPartial(_: Partial<_257.QueryParamsRequest>): _257.QueryParamsRequest;
            fromAmino(_: _257.QueryParamsRequestAmino): _257.QueryParamsRequest;
            toAmino(_: _257.QueryParamsRequest): _257.QueryParamsRequestAmino;
            fromAminoMsg(object: _257.QueryParamsRequestAminoMsg): _257.QueryParamsRequest;
            fromProtoMsg(message: _257.QueryParamsRequestProtoMsg): _257.QueryParamsRequest;
            toProto(message: _257.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _257.QueryParamsRequest): _257.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _257.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.QueryParamsResponse;
            fromPartial(object: Partial<_257.QueryParamsResponse>): _257.QueryParamsResponse;
            fromAmino(object: _257.QueryParamsResponseAmino): _257.QueryParamsResponse;
            toAmino(message: _257.QueryParamsResponse): _257.QueryParamsResponseAmino;
            fromAminoMsg(object: _257.QueryParamsResponseAminoMsg): _257.QueryParamsResponse;
            fromProtoMsg(message: _257.QueryParamsResponseProtoMsg): _257.QueryParamsResponse;
            toProto(message: _257.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _257.QueryParamsResponse): _257.QueryParamsResponseProtoMsg;
        };
        QueryGetValidatorsRequest: {
            typeUrl: string;
            encode(message: _257.QueryGetValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.QueryGetValidatorsRequest;
            fromPartial(object: Partial<_257.QueryGetValidatorsRequest>): _257.QueryGetValidatorsRequest;
            fromAmino(object: _257.QueryGetValidatorsRequestAmino): _257.QueryGetValidatorsRequest;
            toAmino(message: _257.QueryGetValidatorsRequest): _257.QueryGetValidatorsRequestAmino;
            fromAminoMsg(object: _257.QueryGetValidatorsRequestAminoMsg): _257.QueryGetValidatorsRequest;
            fromProtoMsg(message: _257.QueryGetValidatorsRequestProtoMsg): _257.QueryGetValidatorsRequest;
            toProto(message: _257.QueryGetValidatorsRequest): Uint8Array;
            toProtoMsg(message: _257.QueryGetValidatorsRequest): _257.QueryGetValidatorsRequestProtoMsg;
        };
        QueryGetValidatorsResponse: {
            typeUrl: string;
            encode(message: _257.QueryGetValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.QueryGetValidatorsResponse;
            fromPartial(object: Partial<_257.QueryGetValidatorsResponse>): _257.QueryGetValidatorsResponse;
            fromAmino(object: _257.QueryGetValidatorsResponseAmino): _257.QueryGetValidatorsResponse;
            toAmino(message: _257.QueryGetValidatorsResponse): _257.QueryGetValidatorsResponseAmino;
            fromAminoMsg(object: _257.QueryGetValidatorsResponseAminoMsg): _257.QueryGetValidatorsResponse;
            fromProtoMsg(message: _257.QueryGetValidatorsResponseProtoMsg): _257.QueryGetValidatorsResponse;
            toProto(message: _257.QueryGetValidatorsResponse): Uint8Array;
            toProtoMsg(message: _257.QueryGetValidatorsResponse): _257.QueryGetValidatorsResponseProtoMsg;
        };
        QueryGetHostZoneRequest: {
            typeUrl: string;
            encode(message: _257.QueryGetHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.QueryGetHostZoneRequest;
            fromPartial(object: Partial<_257.QueryGetHostZoneRequest>): _257.QueryGetHostZoneRequest;
            fromAmino(object: _257.QueryGetHostZoneRequestAmino): _257.QueryGetHostZoneRequest;
            toAmino(message: _257.QueryGetHostZoneRequest): _257.QueryGetHostZoneRequestAmino;
            fromAminoMsg(object: _257.QueryGetHostZoneRequestAminoMsg): _257.QueryGetHostZoneRequest;
            fromProtoMsg(message: _257.QueryGetHostZoneRequestProtoMsg): _257.QueryGetHostZoneRequest;
            toProto(message: _257.QueryGetHostZoneRequest): Uint8Array;
            toProtoMsg(message: _257.QueryGetHostZoneRequest): _257.QueryGetHostZoneRequestProtoMsg;
        };
        QueryGetHostZoneResponse: {
            typeUrl: string;
            encode(message: _257.QueryGetHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.QueryGetHostZoneResponse;
            fromPartial(object: Partial<_257.QueryGetHostZoneResponse>): _257.QueryGetHostZoneResponse;
            fromAmino(object: _257.QueryGetHostZoneResponseAmino): _257.QueryGetHostZoneResponse;
            toAmino(message: _257.QueryGetHostZoneResponse): _257.QueryGetHostZoneResponseAmino;
            fromAminoMsg(object: _257.QueryGetHostZoneResponseAminoMsg): _257.QueryGetHostZoneResponse;
            fromProtoMsg(message: _257.QueryGetHostZoneResponseProtoMsg): _257.QueryGetHostZoneResponse;
            toProto(message: _257.QueryGetHostZoneResponse): Uint8Array;
            toProtoMsg(message: _257.QueryGetHostZoneResponse): _257.QueryGetHostZoneResponseProtoMsg;
        };
        QueryAllHostZoneRequest: {
            typeUrl: string;
            encode(message: _257.QueryAllHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.QueryAllHostZoneRequest;
            fromPartial(object: Partial<_257.QueryAllHostZoneRequest>): _257.QueryAllHostZoneRequest;
            fromAmino(object: _257.QueryAllHostZoneRequestAmino): _257.QueryAllHostZoneRequest;
            toAmino(message: _257.QueryAllHostZoneRequest): _257.QueryAllHostZoneRequestAmino;
            fromAminoMsg(object: _257.QueryAllHostZoneRequestAminoMsg): _257.QueryAllHostZoneRequest;
            fromProtoMsg(message: _257.QueryAllHostZoneRequestProtoMsg): _257.QueryAllHostZoneRequest;
            toProto(message: _257.QueryAllHostZoneRequest): Uint8Array;
            toProtoMsg(message: _257.QueryAllHostZoneRequest): _257.QueryAllHostZoneRequestProtoMsg;
        };
        QueryAllHostZoneResponse: {
            typeUrl: string;
            encode(message: _257.QueryAllHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.QueryAllHostZoneResponse;
            fromPartial(object: Partial<_257.QueryAllHostZoneResponse>): _257.QueryAllHostZoneResponse;
            fromAmino(object: _257.QueryAllHostZoneResponseAmino): _257.QueryAllHostZoneResponse;
            toAmino(message: _257.QueryAllHostZoneResponse): _257.QueryAllHostZoneResponseAmino;
            fromAminoMsg(object: _257.QueryAllHostZoneResponseAminoMsg): _257.QueryAllHostZoneResponse;
            fromProtoMsg(message: _257.QueryAllHostZoneResponseProtoMsg): _257.QueryAllHostZoneResponse;
            toProto(message: _257.QueryAllHostZoneResponse): Uint8Array;
            toProtoMsg(message: _257.QueryAllHostZoneResponse): _257.QueryAllHostZoneResponseProtoMsg;
        };
        QueryModuleAddressRequest: {
            typeUrl: string;
            encode(message: _257.QueryModuleAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.QueryModuleAddressRequest;
            fromPartial(object: Partial<_257.QueryModuleAddressRequest>): _257.QueryModuleAddressRequest;
            fromAmino(object: _257.QueryModuleAddressRequestAmino): _257.QueryModuleAddressRequest;
            toAmino(message: _257.QueryModuleAddressRequest): _257.QueryModuleAddressRequestAmino;
            fromAminoMsg(object: _257.QueryModuleAddressRequestAminoMsg): _257.QueryModuleAddressRequest;
            fromProtoMsg(message: _257.QueryModuleAddressRequestProtoMsg): _257.QueryModuleAddressRequest;
            toProto(message: _257.QueryModuleAddressRequest): Uint8Array;
            toProtoMsg(message: _257.QueryModuleAddressRequest): _257.QueryModuleAddressRequestProtoMsg;
        };
        QueryModuleAddressResponse: {
            typeUrl: string;
            encode(message: _257.QueryModuleAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.QueryModuleAddressResponse;
            fromPartial(object: Partial<_257.QueryModuleAddressResponse>): _257.QueryModuleAddressResponse;
            fromAmino(object: _257.QueryModuleAddressResponseAmino): _257.QueryModuleAddressResponse;
            toAmino(message: _257.QueryModuleAddressResponse): _257.QueryModuleAddressResponseAmino;
            fromAminoMsg(object: _257.QueryModuleAddressResponseAminoMsg): _257.QueryModuleAddressResponse;
            fromProtoMsg(message: _257.QueryModuleAddressResponseProtoMsg): _257.QueryModuleAddressResponse;
            toProto(message: _257.QueryModuleAddressResponse): Uint8Array;
            toProtoMsg(message: _257.QueryModuleAddressResponse): _257.QueryModuleAddressResponseProtoMsg;
        };
        QueryGetEpochTrackerRequest: {
            typeUrl: string;
            encode(message: _257.QueryGetEpochTrackerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.QueryGetEpochTrackerRequest;
            fromPartial(object: Partial<_257.QueryGetEpochTrackerRequest>): _257.QueryGetEpochTrackerRequest;
            fromAmino(object: _257.QueryGetEpochTrackerRequestAmino): _257.QueryGetEpochTrackerRequest;
            toAmino(message: _257.QueryGetEpochTrackerRequest): _257.QueryGetEpochTrackerRequestAmino;
            fromAminoMsg(object: _257.QueryGetEpochTrackerRequestAminoMsg): _257.QueryGetEpochTrackerRequest;
            fromProtoMsg(message: _257.QueryGetEpochTrackerRequestProtoMsg): _257.QueryGetEpochTrackerRequest;
            toProto(message: _257.QueryGetEpochTrackerRequest): Uint8Array;
            toProtoMsg(message: _257.QueryGetEpochTrackerRequest): _257.QueryGetEpochTrackerRequestProtoMsg;
        };
        QueryGetEpochTrackerResponse: {
            typeUrl: string;
            encode(message: _257.QueryGetEpochTrackerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.QueryGetEpochTrackerResponse;
            fromPartial(object: Partial<_257.QueryGetEpochTrackerResponse>): _257.QueryGetEpochTrackerResponse;
            fromAmino(object: _257.QueryGetEpochTrackerResponseAmino): _257.QueryGetEpochTrackerResponse;
            toAmino(message: _257.QueryGetEpochTrackerResponse): _257.QueryGetEpochTrackerResponseAmino;
            fromAminoMsg(object: _257.QueryGetEpochTrackerResponseAminoMsg): _257.QueryGetEpochTrackerResponse;
            fromProtoMsg(message: _257.QueryGetEpochTrackerResponseProtoMsg): _257.QueryGetEpochTrackerResponse;
            toProto(message: _257.QueryGetEpochTrackerResponse): Uint8Array;
            toProtoMsg(message: _257.QueryGetEpochTrackerResponse): _257.QueryGetEpochTrackerResponseProtoMsg;
        };
        QueryAllEpochTrackerRequest: {
            typeUrl: string;
            encode(_: _257.QueryAllEpochTrackerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.QueryAllEpochTrackerRequest;
            fromPartial(_: Partial<_257.QueryAllEpochTrackerRequest>): _257.QueryAllEpochTrackerRequest;
            fromAmino(_: _257.QueryAllEpochTrackerRequestAmino): _257.QueryAllEpochTrackerRequest;
            toAmino(_: _257.QueryAllEpochTrackerRequest): _257.QueryAllEpochTrackerRequestAmino;
            fromAminoMsg(object: _257.QueryAllEpochTrackerRequestAminoMsg): _257.QueryAllEpochTrackerRequest;
            fromProtoMsg(message: _257.QueryAllEpochTrackerRequestProtoMsg): _257.QueryAllEpochTrackerRequest;
            toProto(message: _257.QueryAllEpochTrackerRequest): Uint8Array;
            toProtoMsg(message: _257.QueryAllEpochTrackerRequest): _257.QueryAllEpochTrackerRequestProtoMsg;
        };
        QueryAllEpochTrackerResponse: {
            typeUrl: string;
            encode(message: _257.QueryAllEpochTrackerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.QueryAllEpochTrackerResponse;
            fromPartial(object: Partial<_257.QueryAllEpochTrackerResponse>): _257.QueryAllEpochTrackerResponse;
            fromAmino(object: _257.QueryAllEpochTrackerResponseAmino): _257.QueryAllEpochTrackerResponse;
            toAmino(message: _257.QueryAllEpochTrackerResponse): _257.QueryAllEpochTrackerResponseAmino;
            fromAminoMsg(object: _257.QueryAllEpochTrackerResponseAminoMsg): _257.QueryAllEpochTrackerResponse;
            fromProtoMsg(message: _257.QueryAllEpochTrackerResponseProtoMsg): _257.QueryAllEpochTrackerResponse;
            toProto(message: _257.QueryAllEpochTrackerResponse): Uint8Array;
            toProtoMsg(message: _257.QueryAllEpochTrackerResponse): _257.QueryAllEpochTrackerResponseProtoMsg;
        };
        QueryGetNextPacketSequenceRequest: {
            typeUrl: string;
            encode(message: _257.QueryGetNextPacketSequenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.QueryGetNextPacketSequenceRequest;
            fromPartial(object: Partial<_257.QueryGetNextPacketSequenceRequest>): _257.QueryGetNextPacketSequenceRequest;
            fromAmino(object: _257.QueryGetNextPacketSequenceRequestAmino): _257.QueryGetNextPacketSequenceRequest;
            toAmino(message: _257.QueryGetNextPacketSequenceRequest): _257.QueryGetNextPacketSequenceRequestAmino;
            fromAminoMsg(object: _257.QueryGetNextPacketSequenceRequestAminoMsg): _257.QueryGetNextPacketSequenceRequest;
            fromProtoMsg(message: _257.QueryGetNextPacketSequenceRequestProtoMsg): _257.QueryGetNextPacketSequenceRequest;
            toProto(message: _257.QueryGetNextPacketSequenceRequest): Uint8Array;
            toProtoMsg(message: _257.QueryGetNextPacketSequenceRequest): _257.QueryGetNextPacketSequenceRequestProtoMsg;
        };
        QueryGetNextPacketSequenceResponse: {
            typeUrl: string;
            encode(message: _257.QueryGetNextPacketSequenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.QueryGetNextPacketSequenceResponse;
            fromPartial(object: Partial<_257.QueryGetNextPacketSequenceResponse>): _257.QueryGetNextPacketSequenceResponse;
            fromAmino(object: _257.QueryGetNextPacketSequenceResponseAmino): _257.QueryGetNextPacketSequenceResponse;
            toAmino(message: _257.QueryGetNextPacketSequenceResponse): _257.QueryGetNextPacketSequenceResponseAmino;
            fromAminoMsg(object: _257.QueryGetNextPacketSequenceResponseAminoMsg): _257.QueryGetNextPacketSequenceResponse;
            fromProtoMsg(message: _257.QueryGetNextPacketSequenceResponseProtoMsg): _257.QueryGetNextPacketSequenceResponse;
            toProto(message: _257.QueryGetNextPacketSequenceResponse): Uint8Array;
            toProtoMsg(message: _257.QueryGetNextPacketSequenceResponse): _257.QueryGetNextPacketSequenceResponseProtoMsg;
        };
        QueryAddressUnbondings: {
            typeUrl: string;
            encode(message: _257.QueryAddressUnbondings, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.QueryAddressUnbondings;
            fromPartial(object: Partial<_257.QueryAddressUnbondings>): _257.QueryAddressUnbondings;
            fromAmino(object: _257.QueryAddressUnbondingsAmino): _257.QueryAddressUnbondings;
            toAmino(message: _257.QueryAddressUnbondings): _257.QueryAddressUnbondingsAmino;
            fromAminoMsg(object: _257.QueryAddressUnbondingsAminoMsg): _257.QueryAddressUnbondings;
            fromProtoMsg(message: _257.QueryAddressUnbondingsProtoMsg): _257.QueryAddressUnbondings;
            toProto(message: _257.QueryAddressUnbondings): Uint8Array;
            toProtoMsg(message: _257.QueryAddressUnbondings): _257.QueryAddressUnbondingsProtoMsg;
        };
        QueryAddressUnbondingsResponse: {
            typeUrl: string;
            encode(message: _257.QueryAddressUnbondingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.QueryAddressUnbondingsResponse;
            fromPartial(object: Partial<_257.QueryAddressUnbondingsResponse>): _257.QueryAddressUnbondingsResponse;
            fromAmino(object: _257.QueryAddressUnbondingsResponseAmino): _257.QueryAddressUnbondingsResponse;
            toAmino(message: _257.QueryAddressUnbondingsResponse): _257.QueryAddressUnbondingsResponseAmino;
            fromAminoMsg(object: _257.QueryAddressUnbondingsResponseAminoMsg): _257.QueryAddressUnbondingsResponse;
            fromProtoMsg(message: _257.QueryAddressUnbondingsResponseProtoMsg): _257.QueryAddressUnbondingsResponse;
            toProto(message: _257.QueryAddressUnbondingsResponse): Uint8Array;
            toProtoMsg(message: _257.QueryAddressUnbondingsResponse): _257.QueryAddressUnbondingsResponseProtoMsg;
        };
        QueryAllTradeRoutes: {
            typeUrl: string;
            encode(_: _257.QueryAllTradeRoutes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.QueryAllTradeRoutes;
            fromPartial(_: Partial<_257.QueryAllTradeRoutes>): _257.QueryAllTradeRoutes;
            fromAmino(_: _257.QueryAllTradeRoutesAmino): _257.QueryAllTradeRoutes;
            toAmino(_: _257.QueryAllTradeRoutes): _257.QueryAllTradeRoutesAmino;
            fromAminoMsg(object: _257.QueryAllTradeRoutesAminoMsg): _257.QueryAllTradeRoutes;
            fromProtoMsg(message: _257.QueryAllTradeRoutesProtoMsg): _257.QueryAllTradeRoutes;
            toProto(message: _257.QueryAllTradeRoutes): Uint8Array;
            toProtoMsg(message: _257.QueryAllTradeRoutes): _257.QueryAllTradeRoutesProtoMsg;
        };
        QueryAllTradeRoutesResponse: {
            typeUrl: string;
            encode(message: _257.QueryAllTradeRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.QueryAllTradeRoutesResponse;
            fromPartial(object: Partial<_257.QueryAllTradeRoutesResponse>): _257.QueryAllTradeRoutesResponse;
            fromAmino(object: _257.QueryAllTradeRoutesResponseAmino): _257.QueryAllTradeRoutesResponse;
            toAmino(message: _257.QueryAllTradeRoutesResponse): _257.QueryAllTradeRoutesResponseAmino;
            fromAminoMsg(object: _257.QueryAllTradeRoutesResponseAminoMsg): _257.QueryAllTradeRoutesResponse;
            fromProtoMsg(message: _257.QueryAllTradeRoutesResponseProtoMsg): _257.QueryAllTradeRoutesResponse;
            toProto(message: _257.QueryAllTradeRoutesResponse): Uint8Array;
            toProtoMsg(message: _257.QueryAllTradeRoutesResponse): _257.QueryAllTradeRoutesResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _256.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _256.Params;
            fromPartial(object: Partial<_256.Params>): _256.Params;
            fromAmino(object: _256.ParamsAmino): _256.Params;
            toAmino(message: _256.Params): _256.ParamsAmino;
            fromAminoMsg(object: _256.ParamsAminoMsg): _256.Params;
            fromProtoMsg(message: _256.ParamsProtoMsg): _256.Params;
            toProto(message: _256.Params): Uint8Array;
            toProtoMsg(message: _256.Params): _256.ParamsProtoMsg;
        };
        StakeibcPacketData: {
            typeUrl: string;
            encode(message: _255.StakeibcPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.StakeibcPacketData;
            fromPartial(object: Partial<_255.StakeibcPacketData>): _255.StakeibcPacketData;
            fromAmino(object: _255.StakeibcPacketDataAmino): _255.StakeibcPacketData;
            toAmino(message: _255.StakeibcPacketData): _255.StakeibcPacketDataAmino;
            fromAminoMsg(object: _255.StakeibcPacketDataAminoMsg): _255.StakeibcPacketData;
            fromProtoMsg(message: _255.StakeibcPacketDataProtoMsg): _255.StakeibcPacketData;
            toProto(message: _255.StakeibcPacketData): Uint8Array;
            toProtoMsg(message: _255.StakeibcPacketData): _255.StakeibcPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _255.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.NoData;
            fromPartial(_: Partial<_255.NoData>): _255.NoData;
            fromAmino(_: _255.NoDataAmino): _255.NoData;
            toAmino(_: _255.NoData): _255.NoDataAmino;
            fromAminoMsg(object: _255.NoDataAminoMsg): _255.NoData;
            fromProtoMsg(message: _255.NoDataProtoMsg): _255.NoData;
            toProto(message: _255.NoData): Uint8Array;
            toProtoMsg(message: _255.NoData): _255.NoDataProtoMsg;
        };
        iCAAccountTypeFromJSON(object: any): _254.ICAAccountType;
        iCAAccountTypeToJSON(object: _254.ICAAccountType): string;
        ICAAccountType: typeof _254.ICAAccountType;
        ICAAccountTypeSDKType: typeof _254.ICAAccountType;
        ICAAccountTypeAmino: typeof _254.ICAAccountType;
        ICAAccount: {
            typeUrl: string;
            encode(message: _254.ICAAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _254.ICAAccount;
            fromPartial(object: Partial<_254.ICAAccount>): _254.ICAAccount;
            fromAmino(object: _254.ICAAccountAmino): _254.ICAAccount;
            toAmino(message: _254.ICAAccount): _254.ICAAccountAmino;
            fromAminoMsg(object: _254.ICAAccountAminoMsg): _254.ICAAccount;
            fromProtoMsg(message: _254.ICAAccountProtoMsg): _254.ICAAccount;
            toProto(message: _254.ICAAccount): Uint8Array;
            toProtoMsg(message: _254.ICAAccount): _254.ICAAccountProtoMsg;
        };
        CommunityPoolRebate: {
            typeUrl: string;
            encode(message: _253.CommunityPoolRebate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.CommunityPoolRebate;
            fromPartial(object: Partial<_253.CommunityPoolRebate>): _253.CommunityPoolRebate;
            fromAmino(object: _253.CommunityPoolRebateAmino): _253.CommunityPoolRebate;
            toAmino(message: _253.CommunityPoolRebate): _253.CommunityPoolRebateAmino;
            fromAminoMsg(object: _253.CommunityPoolRebateAminoMsg): _253.CommunityPoolRebate;
            fromProtoMsg(message: _253.CommunityPoolRebateProtoMsg): _253.CommunityPoolRebate;
            toProto(message: _253.CommunityPoolRebate): Uint8Array;
            toProtoMsg(message: _253.CommunityPoolRebate): _253.CommunityPoolRebateProtoMsg;
        };
        HostZone: {
            typeUrl: string;
            encode(message: _253.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.HostZone;
            fromPartial(object: Partial<_253.HostZone>): _253.HostZone;
            fromAmino(object: _253.HostZoneAmino): _253.HostZone;
            toAmino(message: _253.HostZone): _253.HostZoneAmino;
            fromAminoMsg(object: _253.HostZoneAminoMsg): _253.HostZone;
            fromProtoMsg(message: _253.HostZoneProtoMsg): _253.HostZone;
            toProto(message: _253.HostZone): Uint8Array;
            toProtoMsg(message: _253.HostZone): _253.HostZoneProtoMsg;
        };
        AddValidatorsProposal: {
            typeUrl: string;
            encode(message: _252.AddValidatorsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _252.AddValidatorsProposal;
            fromPartial(object: Partial<_252.AddValidatorsProposal>): _252.AddValidatorsProposal;
            fromAmino(object: _252.AddValidatorsProposalAmino): _252.AddValidatorsProposal;
            toAmino(message: _252.AddValidatorsProposal): _252.AddValidatorsProposalAmino;
            fromAminoMsg(object: _252.AddValidatorsProposalAminoMsg): _252.AddValidatorsProposal;
            toAminoMsg(message: _252.AddValidatorsProposal): _252.AddValidatorsProposalAminoMsg;
            fromProtoMsg(message: _252.AddValidatorsProposalProtoMsg): _252.AddValidatorsProposal;
            toProto(message: _252.AddValidatorsProposal): Uint8Array;
            toProtoMsg(message: _252.AddValidatorsProposal): _252.AddValidatorsProposalProtoMsg;
        };
        ToggleLSMProposal: {
            typeUrl: string;
            encode(message: _252.ToggleLSMProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _252.ToggleLSMProposal;
            fromPartial(object: Partial<_252.ToggleLSMProposal>): _252.ToggleLSMProposal;
            fromAmino(object: _252.ToggleLSMProposalAmino): _252.ToggleLSMProposal;
            toAmino(message: _252.ToggleLSMProposal): _252.ToggleLSMProposalAmino;
            fromAminoMsg(object: _252.ToggleLSMProposalAminoMsg): _252.ToggleLSMProposal;
            toAminoMsg(message: _252.ToggleLSMProposal): _252.ToggleLSMProposalAminoMsg;
            fromProtoMsg(message: _252.ToggleLSMProposalProtoMsg): _252.ToggleLSMProposal;
            toProto(message: _252.ToggleLSMProposal): Uint8Array;
            toProtoMsg(message: _252.ToggleLSMProposal): _252.ToggleLSMProposalProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _251.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.GenesisState;
            fromPartial(object: Partial<_251.GenesisState>): _251.GenesisState;
            fromAmino(object: _251.GenesisStateAmino): _251.GenesisState;
            toAmino(message: _251.GenesisState): _251.GenesisStateAmino;
            fromAminoMsg(object: _251.GenesisStateAminoMsg): _251.GenesisState;
            fromProtoMsg(message: _251.GenesisStateProtoMsg): _251.GenesisState;
            toProto(message: _251.GenesisState): Uint8Array;
            toProtoMsg(message: _251.GenesisState): _251.GenesisStateProtoMsg;
        };
        EpochTracker: {
            typeUrl: string;
            encode(message: _250.EpochTracker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.EpochTracker;
            fromPartial(object: Partial<_250.EpochTracker>): _250.EpochTracker;
            fromAmino(object: _250.EpochTrackerAmino): _250.EpochTracker;
            toAmino(message: _250.EpochTracker): _250.EpochTrackerAmino;
            fromAminoMsg(object: _250.EpochTrackerAminoMsg): _250.EpochTracker;
            fromProtoMsg(message: _250.EpochTrackerProtoMsg): _250.EpochTracker;
            toProto(message: _250.EpochTracker): Uint8Array;
            toProtoMsg(message: _250.EpochTracker): _250.EpochTrackerProtoMsg;
        };
        SplitDelegation: {
            typeUrl: string;
            encode(message: _249.SplitDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.SplitDelegation;
            fromPartial(object: Partial<_249.SplitDelegation>): _249.SplitDelegation;
            fromAmino(object: _249.SplitDelegationAmino): _249.SplitDelegation;
            toAmino(message: _249.SplitDelegation): _249.SplitDelegationAmino;
            fromAminoMsg(object: _249.SplitDelegationAminoMsg): _249.SplitDelegation;
            fromProtoMsg(message: _249.SplitDelegationProtoMsg): _249.SplitDelegation;
            toProto(message: _249.SplitDelegation): Uint8Array;
            toProtoMsg(message: _249.SplitDelegation): _249.SplitDelegationProtoMsg;
        };
        SplitUndelegation: {
            typeUrl: string;
            encode(message: _249.SplitUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.SplitUndelegation;
            fromPartial(object: Partial<_249.SplitUndelegation>): _249.SplitUndelegation;
            fromAmino(object: _249.SplitUndelegationAmino): _249.SplitUndelegation;
            toAmino(message: _249.SplitUndelegation): _249.SplitUndelegationAmino;
            fromAminoMsg(object: _249.SplitUndelegationAminoMsg): _249.SplitUndelegation;
            fromProtoMsg(message: _249.SplitUndelegationProtoMsg): _249.SplitUndelegation;
            toProto(message: _249.SplitUndelegation): Uint8Array;
            toProtoMsg(message: _249.SplitUndelegation): _249.SplitUndelegationProtoMsg;
        };
        DelegateCallback: {
            typeUrl: string;
            encode(message: _249.DelegateCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.DelegateCallback;
            fromPartial(object: Partial<_249.DelegateCallback>): _249.DelegateCallback;
            fromAmino(object: _249.DelegateCallbackAmino): _249.DelegateCallback;
            toAmino(message: _249.DelegateCallback): _249.DelegateCallbackAmino;
            fromAminoMsg(object: _249.DelegateCallbackAminoMsg): _249.DelegateCallback;
            fromProtoMsg(message: _249.DelegateCallbackProtoMsg): _249.DelegateCallback;
            toProto(message: _249.DelegateCallback): Uint8Array;
            toProtoMsg(message: _249.DelegateCallback): _249.DelegateCallbackProtoMsg;
        };
        ClaimCallback: {
            typeUrl: string;
            encode(message: _249.ClaimCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.ClaimCallback;
            fromPartial(object: Partial<_249.ClaimCallback>): _249.ClaimCallback;
            fromAmino(object: _249.ClaimCallbackAmino): _249.ClaimCallback;
            toAmino(message: _249.ClaimCallback): _249.ClaimCallbackAmino;
            fromAminoMsg(object: _249.ClaimCallbackAminoMsg): _249.ClaimCallback;
            fromProtoMsg(message: _249.ClaimCallbackProtoMsg): _249.ClaimCallback;
            toProto(message: _249.ClaimCallback): Uint8Array;
            toProtoMsg(message: _249.ClaimCallback): _249.ClaimCallbackProtoMsg;
        };
        ReinvestCallback: {
            typeUrl: string;
            encode(message: _249.ReinvestCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.ReinvestCallback;
            fromPartial(object: Partial<_249.ReinvestCallback>): _249.ReinvestCallback;
            fromAmino(object: _249.ReinvestCallbackAmino): _249.ReinvestCallback;
            toAmino(message: _249.ReinvestCallback): _249.ReinvestCallbackAmino;
            fromAminoMsg(object: _249.ReinvestCallbackAminoMsg): _249.ReinvestCallback;
            fromProtoMsg(message: _249.ReinvestCallbackProtoMsg): _249.ReinvestCallback;
            toProto(message: _249.ReinvestCallback): Uint8Array;
            toProtoMsg(message: _249.ReinvestCallback): _249.ReinvestCallbackProtoMsg;
        };
        UndelegateCallback: {
            typeUrl: string;
            encode(message: _249.UndelegateCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.UndelegateCallback;
            fromPartial(object: Partial<_249.UndelegateCallback>): _249.UndelegateCallback;
            fromAmino(object: _249.UndelegateCallbackAmino): _249.UndelegateCallback;
            toAmino(message: _249.UndelegateCallback): _249.UndelegateCallbackAmino;
            fromAminoMsg(object: _249.UndelegateCallbackAminoMsg): _249.UndelegateCallback;
            fromProtoMsg(message: _249.UndelegateCallbackProtoMsg): _249.UndelegateCallback;
            toProto(message: _249.UndelegateCallback): Uint8Array;
            toProtoMsg(message: _249.UndelegateCallback): _249.UndelegateCallbackProtoMsg;
        };
        RedemptionCallback: {
            typeUrl: string;
            encode(message: _249.RedemptionCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.RedemptionCallback;
            fromPartial(object: Partial<_249.RedemptionCallback>): _249.RedemptionCallback;
            fromAmino(object: _249.RedemptionCallbackAmino): _249.RedemptionCallback;
            toAmino(message: _249.RedemptionCallback): _249.RedemptionCallbackAmino;
            fromAminoMsg(object: _249.RedemptionCallbackAminoMsg): _249.RedemptionCallback;
            fromProtoMsg(message: _249.RedemptionCallbackProtoMsg): _249.RedemptionCallback;
            toProto(message: _249.RedemptionCallback): Uint8Array;
            toProtoMsg(message: _249.RedemptionCallback): _249.RedemptionCallbackProtoMsg;
        };
        Rebalancing: {
            typeUrl: string;
            encode(message: _249.Rebalancing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.Rebalancing;
            fromPartial(object: Partial<_249.Rebalancing>): _249.Rebalancing;
            fromAmino(object: _249.RebalancingAmino): _249.Rebalancing;
            toAmino(message: _249.Rebalancing): _249.RebalancingAmino;
            fromAminoMsg(object: _249.RebalancingAminoMsg): _249.Rebalancing;
            fromProtoMsg(message: _249.RebalancingProtoMsg): _249.Rebalancing;
            toProto(message: _249.Rebalancing): Uint8Array;
            toProtoMsg(message: _249.Rebalancing): _249.RebalancingProtoMsg;
        };
        RebalanceCallback: {
            typeUrl: string;
            encode(message: _249.RebalanceCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.RebalanceCallback;
            fromPartial(object: Partial<_249.RebalanceCallback>): _249.RebalanceCallback;
            fromAmino(object: _249.RebalanceCallbackAmino): _249.RebalanceCallback;
            toAmino(message: _249.RebalanceCallback): _249.RebalanceCallbackAmino;
            fromAminoMsg(object: _249.RebalanceCallbackAminoMsg): _249.RebalanceCallback;
            fromProtoMsg(message: _249.RebalanceCallbackProtoMsg): _249.RebalanceCallback;
            toProto(message: _249.RebalanceCallback): Uint8Array;
            toProtoMsg(message: _249.RebalanceCallback): _249.RebalanceCallbackProtoMsg;
        };
        DetokenizeSharesCallback: {
            typeUrl: string;
            encode(message: _249.DetokenizeSharesCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.DetokenizeSharesCallback;
            fromPartial(object: Partial<_249.DetokenizeSharesCallback>): _249.DetokenizeSharesCallback;
            fromAmino(object: _249.DetokenizeSharesCallbackAmino): _249.DetokenizeSharesCallback;
            toAmino(message: _249.DetokenizeSharesCallback): _249.DetokenizeSharesCallbackAmino;
            fromAminoMsg(object: _249.DetokenizeSharesCallbackAminoMsg): _249.DetokenizeSharesCallback;
            fromProtoMsg(message: _249.DetokenizeSharesCallbackProtoMsg): _249.DetokenizeSharesCallback;
            toProto(message: _249.DetokenizeSharesCallback): Uint8Array;
            toProtoMsg(message: _249.DetokenizeSharesCallback): _249.DetokenizeSharesCallbackProtoMsg;
        };
        LSMLiquidStake: {
            typeUrl: string;
            encode(message: _249.LSMLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.LSMLiquidStake;
            fromPartial(object: Partial<_249.LSMLiquidStake>): _249.LSMLiquidStake;
            fromAmino(object: _249.LSMLiquidStakeAmino): _249.LSMLiquidStake;
            toAmino(message: _249.LSMLiquidStake): _249.LSMLiquidStakeAmino;
            fromAminoMsg(object: _249.LSMLiquidStakeAminoMsg): _249.LSMLiquidStake;
            fromProtoMsg(message: _249.LSMLiquidStakeProtoMsg): _249.LSMLiquidStake;
            toProto(message: _249.LSMLiquidStake): Uint8Array;
            toProtoMsg(message: _249.LSMLiquidStake): _249.LSMLiquidStakeProtoMsg;
        };
        ValidatorSharesToTokensQueryCallback: {
            typeUrl: string;
            encode(message: _249.ValidatorSharesToTokensQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.ValidatorSharesToTokensQueryCallback;
            fromPartial(object: Partial<_249.ValidatorSharesToTokensQueryCallback>): _249.ValidatorSharesToTokensQueryCallback;
            fromAmino(object: _249.ValidatorSharesToTokensQueryCallbackAmino): _249.ValidatorSharesToTokensQueryCallback;
            toAmino(message: _249.ValidatorSharesToTokensQueryCallback): _249.ValidatorSharesToTokensQueryCallbackAmino;
            fromAminoMsg(object: _249.ValidatorSharesToTokensQueryCallbackAminoMsg): _249.ValidatorSharesToTokensQueryCallback;
            fromProtoMsg(message: _249.ValidatorSharesToTokensQueryCallbackProtoMsg): _249.ValidatorSharesToTokensQueryCallback;
            toProto(message: _249.ValidatorSharesToTokensQueryCallback): Uint8Array;
            toProtoMsg(message: _249.ValidatorSharesToTokensQueryCallback): _249.ValidatorSharesToTokensQueryCallbackProtoMsg;
        };
        DelegatorSharesQueryCallback: {
            typeUrl: string;
            encode(message: _249.DelegatorSharesQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.DelegatorSharesQueryCallback;
            fromPartial(object: Partial<_249.DelegatorSharesQueryCallback>): _249.DelegatorSharesQueryCallback;
            fromAmino(object: _249.DelegatorSharesQueryCallbackAmino): _249.DelegatorSharesQueryCallback;
            toAmino(message: _249.DelegatorSharesQueryCallback): _249.DelegatorSharesQueryCallbackAmino;
            fromAminoMsg(object: _249.DelegatorSharesQueryCallbackAminoMsg): _249.DelegatorSharesQueryCallback;
            fromProtoMsg(message: _249.DelegatorSharesQueryCallbackProtoMsg): _249.DelegatorSharesQueryCallback;
            toProto(message: _249.DelegatorSharesQueryCallback): Uint8Array;
            toProtoMsg(message: _249.DelegatorSharesQueryCallback): _249.DelegatorSharesQueryCallbackProtoMsg;
        };
        CommunityPoolBalanceQueryCallback: {
            typeUrl: string;
            encode(message: _249.CommunityPoolBalanceQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.CommunityPoolBalanceQueryCallback;
            fromPartial(object: Partial<_249.CommunityPoolBalanceQueryCallback>): _249.CommunityPoolBalanceQueryCallback;
            fromAmino(object: _249.CommunityPoolBalanceQueryCallbackAmino): _249.CommunityPoolBalanceQueryCallback;
            toAmino(message: _249.CommunityPoolBalanceQueryCallback): _249.CommunityPoolBalanceQueryCallbackAmino;
            fromAminoMsg(object: _249.CommunityPoolBalanceQueryCallbackAminoMsg): _249.CommunityPoolBalanceQueryCallback;
            fromProtoMsg(message: _249.CommunityPoolBalanceQueryCallbackProtoMsg): _249.CommunityPoolBalanceQueryCallback;
            toProto(message: _249.CommunityPoolBalanceQueryCallback): Uint8Array;
            toProtoMsg(message: _249.CommunityPoolBalanceQueryCallback): _249.CommunityPoolBalanceQueryCallbackProtoMsg;
        };
        TradeRouteCallback: {
            typeUrl: string;
            encode(message: _249.TradeRouteCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.TradeRouteCallback;
            fromPartial(object: Partial<_249.TradeRouteCallback>): _249.TradeRouteCallback;
            fromAmino(object: _249.TradeRouteCallbackAmino): _249.TradeRouteCallback;
            toAmino(message: _249.TradeRouteCallback): _249.TradeRouteCallbackAmino;
            fromAminoMsg(object: _249.TradeRouteCallbackAminoMsg): _249.TradeRouteCallback;
            fromProtoMsg(message: _249.TradeRouteCallbackProtoMsg): _249.TradeRouteCallback;
            toProto(message: _249.TradeRouteCallback): Uint8Array;
            toProtoMsg(message: _249.TradeRouteCallback): _249.TradeRouteCallbackProtoMsg;
        };
        AddressUnbonding: {
            typeUrl: string;
            encode(message: _248.AddressUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.AddressUnbonding;
            fromPartial(object: Partial<_248.AddressUnbonding>): _248.AddressUnbonding;
            fromAmino(object: _248.AddressUnbondingAmino): _248.AddressUnbonding;
            toAmino(message: _248.AddressUnbonding): _248.AddressUnbondingAmino;
            fromAminoMsg(object: _248.AddressUnbondingAminoMsg): _248.AddressUnbonding;
            fromProtoMsg(message: _248.AddressUnbondingProtoMsg): _248.AddressUnbonding;
            toProto(message: _248.AddressUnbonding): Uint8Array;
            toProtoMsg(message: _248.AddressUnbonding): _248.AddressUnbondingProtoMsg;
        };
    };
    const staketia: {
        MsgClientImpl: typeof _439.MsgClientImpl;
        QueryClientImpl: typeof _429.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            hostZone(request?: _262.QueryHostZoneRequest): Promise<_262.QueryHostZoneResponse>;
            delegationRecords(request: _262.QueryDelegationRecordsRequest): Promise<_262.QueryDelegationRecordsResponse>;
            unbondingRecords(request: _262.QueryUnbondingRecordsRequest): Promise<_262.QueryUnbondingRecordsResponse>;
            redemptionRecord(request: _262.QueryRedemptionRecordRequest): Promise<_262.QueryRedemptionRecordResponse>;
            redemptionRecords(request: _262.QueryRedemptionRecordsRequest): Promise<_262.QueryRedemptionRecordsResponse>;
            slashRecords(request?: _262.QuerySlashRecordsRequest): Promise<_262.QuerySlashRecordsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _264.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _264.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmDelegation(value: _264.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUndelegation(value: _264.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUnbondedTokenSweep(value: _264.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                adjustDelegatedBalance(value: _264.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _264.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _264.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                refreshRedemptionRate(value: _264.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteDelegationRecord(value: _264.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteUnbondingRecord(value: _264.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteRedemptionRecord(value: _264.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOperatorAddress(value: _264.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _264.MsgLiquidStake): {
                    typeUrl: string;
                    value: _264.MsgLiquidStake;
                };
                redeemStake(value: _264.MsgRedeemStake): {
                    typeUrl: string;
                    value: _264.MsgRedeemStake;
                };
                confirmDelegation(value: _264.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _264.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _264.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _264.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _264.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _264.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _264.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _264.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _264.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _264.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _264.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _264.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _264.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _264.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _264.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _264.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _264.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _264.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _264.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _264.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _264.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _264.MsgSetOperatorAddress;
                };
            };
            fromPartial: {
                liquidStake(value: _264.MsgLiquidStake): {
                    typeUrl: string;
                    value: _264.MsgLiquidStake;
                };
                redeemStake(value: _264.MsgRedeemStake): {
                    typeUrl: string;
                    value: _264.MsgRedeemStake;
                };
                confirmDelegation(value: _264.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _264.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _264.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _264.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _264.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _264.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _264.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _264.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _264.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _264.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _264.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _264.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _264.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _264.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _264.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _264.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _264.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _264.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _264.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _264.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _264.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _264.MsgSetOperatorAddress;
                };
            };
        };
        AminoConverter: {
            "/stride.staketia.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _264.MsgLiquidStake) => _264.MsgLiquidStakeAmino;
                fromAmino: (object: _264.MsgLiquidStakeAmino) => _264.MsgLiquidStake;
            };
            "/stride.staketia.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _264.MsgRedeemStake) => _264.MsgRedeemStakeAmino;
                fromAmino: (object: _264.MsgRedeemStakeAmino) => _264.MsgRedeemStake;
            };
            "/stride.staketia.MsgConfirmDelegation": {
                aminoType: string;
                toAmino: (message: _264.MsgConfirmDelegation) => _264.MsgConfirmDelegationAmino;
                fromAmino: (object: _264.MsgConfirmDelegationAmino) => _264.MsgConfirmDelegation;
            };
            "/stride.staketia.MsgConfirmUndelegation": {
                aminoType: string;
                toAmino: (message: _264.MsgConfirmUndelegation) => _264.MsgConfirmUndelegationAmino;
                fromAmino: (object: _264.MsgConfirmUndelegationAmino) => _264.MsgConfirmUndelegation;
            };
            "/stride.staketia.MsgConfirmUnbondedTokenSweep": {
                aminoType: string;
                toAmino: (message: _264.MsgConfirmUnbondedTokenSweep) => _264.MsgConfirmUnbondedTokenSweepAmino;
                fromAmino: (object: _264.MsgConfirmUnbondedTokenSweepAmino) => _264.MsgConfirmUnbondedTokenSweep;
            };
            "/stride.staketia.MsgAdjustDelegatedBalance": {
                aminoType: string;
                toAmino: (message: _264.MsgAdjustDelegatedBalance) => _264.MsgAdjustDelegatedBalanceAmino;
                fromAmino: (object: _264.MsgAdjustDelegatedBalanceAmino) => _264.MsgAdjustDelegatedBalance;
            };
            "/stride.staketia.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _264.MsgUpdateInnerRedemptionRateBounds) => _264.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _264.MsgUpdateInnerRedemptionRateBoundsAmino) => _264.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.staketia.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _264.MsgResumeHostZone) => _264.MsgResumeHostZoneAmino;
                fromAmino: (object: _264.MsgResumeHostZoneAmino) => _264.MsgResumeHostZone;
            };
            "/stride.staketia.MsgRefreshRedemptionRate": {
                aminoType: string;
                toAmino: (message: _264.MsgRefreshRedemptionRate) => _264.MsgRefreshRedemptionRateAmino;
                fromAmino: (object: _264.MsgRefreshRedemptionRateAmino) => _264.MsgRefreshRedemptionRate;
            };
            "/stride.staketia.MsgOverwriteDelegationRecord": {
                aminoType: string;
                toAmino: (message: _264.MsgOverwriteDelegationRecord) => _264.MsgOverwriteDelegationRecordAmino;
                fromAmino: (object: _264.MsgOverwriteDelegationRecordAmino) => _264.MsgOverwriteDelegationRecord;
            };
            "/stride.staketia.MsgOverwriteUnbondingRecord": {
                aminoType: string;
                toAmino: (message: _264.MsgOverwriteUnbondingRecord) => _264.MsgOverwriteUnbondingRecordAmino;
                fromAmino: (object: _264.MsgOverwriteUnbondingRecordAmino) => _264.MsgOverwriteUnbondingRecord;
            };
            "/stride.staketia.MsgOverwriteRedemptionRecord": {
                aminoType: string;
                toAmino: (message: _264.MsgOverwriteRedemptionRecord) => _264.MsgOverwriteRedemptionRecordAmino;
                fromAmino: (object: _264.MsgOverwriteRedemptionRecordAmino) => _264.MsgOverwriteRedemptionRecord;
            };
            "/stride.staketia.MsgSetOperatorAddress": {
                aminoType: string;
                toAmino: (message: _264.MsgSetOperatorAddress) => _264.MsgSetOperatorAddressAmino;
                fromAmino: (object: _264.MsgSetOperatorAddressAmino) => _264.MsgSetOperatorAddress;
            };
        };
        overwritableRecordTypeFromJSON(object: any): _264.OverwritableRecordType;
        overwritableRecordTypeToJSON(object: _264.OverwritableRecordType): string;
        OverwritableRecordType: typeof _264.OverwritableRecordType;
        OverwritableRecordTypeSDKType: typeof _264.OverwritableRecordType;
        OverwritableRecordTypeAmino: typeof _264.OverwritableRecordType;
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _264.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _264.MsgLiquidStake;
            fromPartial(object: Partial<_264.MsgLiquidStake>): _264.MsgLiquidStake;
            fromAmino(object: _264.MsgLiquidStakeAmino): _264.MsgLiquidStake;
            toAmino(message: _264.MsgLiquidStake): _264.MsgLiquidStakeAmino;
            fromAminoMsg(object: _264.MsgLiquidStakeAminoMsg): _264.MsgLiquidStake;
            toAminoMsg(message: _264.MsgLiquidStake): _264.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _264.MsgLiquidStakeProtoMsg): _264.MsgLiquidStake;
            toProto(message: _264.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _264.MsgLiquidStake): _264.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _264.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _264.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_264.MsgLiquidStakeResponse>): _264.MsgLiquidStakeResponse;
            fromAmino(object: _264.MsgLiquidStakeResponseAmino): _264.MsgLiquidStakeResponse;
            toAmino(message: _264.MsgLiquidStakeResponse): _264.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _264.MsgLiquidStakeResponseAminoMsg): _264.MsgLiquidStakeResponse;
            fromProtoMsg(message: _264.MsgLiquidStakeResponseProtoMsg): _264.MsgLiquidStakeResponse;
            toProto(message: _264.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _264.MsgLiquidStakeResponse): _264.MsgLiquidStakeResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _264.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _264.MsgRedeemStake;
            fromPartial(object: Partial<_264.MsgRedeemStake>): _264.MsgRedeemStake;
            fromAmino(object: _264.MsgRedeemStakeAmino): _264.MsgRedeemStake;
            toAmino(message: _264.MsgRedeemStake): _264.MsgRedeemStakeAmino;
            fromAminoMsg(object: _264.MsgRedeemStakeAminoMsg): _264.MsgRedeemStake;
            toAminoMsg(message: _264.MsgRedeemStake): _264.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _264.MsgRedeemStakeProtoMsg): _264.MsgRedeemStake;
            toProto(message: _264.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _264.MsgRedeemStake): _264.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(message: _264.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _264.MsgRedeemStakeResponse;
            fromPartial(object: Partial<_264.MsgRedeemStakeResponse>): _264.MsgRedeemStakeResponse;
            fromAmino(object: _264.MsgRedeemStakeResponseAmino): _264.MsgRedeemStakeResponse;
            toAmino(message: _264.MsgRedeemStakeResponse): _264.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _264.MsgRedeemStakeResponseAminoMsg): _264.MsgRedeemStakeResponse;
            fromProtoMsg(message: _264.MsgRedeemStakeResponseProtoMsg): _264.MsgRedeemStakeResponse;
            toProto(message: _264.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _264.MsgRedeemStakeResponse): _264.MsgRedeemStakeResponseProtoMsg;
        };
        MsgConfirmDelegation: {
            typeUrl: string;
            encode(message: _264.MsgConfirmDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _264.MsgConfirmDelegation;
            fromPartial(object: Partial<_264.MsgConfirmDelegation>): _264.MsgConfirmDelegation;
            fromAmino(object: _264.MsgConfirmDelegationAmino): _264.MsgConfirmDelegation;
            toAmino(message: _264.MsgConfirmDelegation): _264.MsgConfirmDelegationAmino;
            fromAminoMsg(object: _264.MsgConfirmDelegationAminoMsg): _264.MsgConfirmDelegation;
            toAminoMsg(message: _264.MsgConfirmDelegation): _264.MsgConfirmDelegationAminoMsg;
            fromProtoMsg(message: _264.MsgConfirmDelegationProtoMsg): _264.MsgConfirmDelegation;
            toProto(message: _264.MsgConfirmDelegation): Uint8Array;
            toProtoMsg(message: _264.MsgConfirmDelegation): _264.MsgConfirmDelegationProtoMsg;
        };
        MsgConfirmDelegationResponse: {
            typeUrl: string;
            encode(_: _264.MsgConfirmDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _264.MsgConfirmDelegationResponse;
            fromPartial(_: Partial<_264.MsgConfirmDelegationResponse>): _264.MsgConfirmDelegationResponse;
            fromAmino(_: _264.MsgConfirmDelegationResponseAmino): _264.MsgConfirmDelegationResponse;
            toAmino(_: _264.MsgConfirmDelegationResponse): _264.MsgConfirmDelegationResponseAmino;
            fromAminoMsg(object: _264.MsgConfirmDelegationResponseAminoMsg): _264.MsgConfirmDelegationResponse;
            fromProtoMsg(message: _264.MsgConfirmDelegationResponseProtoMsg): _264.MsgConfirmDelegationResponse;
            toProto(message: _264.MsgConfirmDelegationResponse): Uint8Array;
            toProtoMsg(message: _264.MsgConfirmDelegationResponse): _264.MsgConfirmDelegationResponseProtoMsg;
        };
        MsgConfirmUndelegation: {
            typeUrl: string;
            encode(message: _264.MsgConfirmUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _264.MsgConfirmUndelegation;
            fromPartial(object: Partial<_264.MsgConfirmUndelegation>): _264.MsgConfirmUndelegation;
            fromAmino(object: _264.MsgConfirmUndelegationAmino): _264.MsgConfirmUndelegation;
            toAmino(message: _264.MsgConfirmUndelegation): _264.MsgConfirmUndelegationAmino;
            fromAminoMsg(object: _264.MsgConfirmUndelegationAminoMsg): _264.MsgConfirmUndelegation;
            toAminoMsg(message: _264.MsgConfirmUndelegation): _264.MsgConfirmUndelegationAminoMsg;
            fromProtoMsg(message: _264.MsgConfirmUndelegationProtoMsg): _264.MsgConfirmUndelegation;
            toProto(message: _264.MsgConfirmUndelegation): Uint8Array;
            toProtoMsg(message: _264.MsgConfirmUndelegation): _264.MsgConfirmUndelegationProtoMsg;
        };
        MsgConfirmUndelegationResponse: {
            typeUrl: string;
            encode(_: _264.MsgConfirmUndelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _264.MsgConfirmUndelegationResponse;
            fromPartial(_: Partial<_264.MsgConfirmUndelegationResponse>): _264.MsgConfirmUndelegationResponse;
            fromAmino(_: _264.MsgConfirmUndelegationResponseAmino): _264.MsgConfirmUndelegationResponse;
            toAmino(_: _264.MsgConfirmUndelegationResponse): _264.MsgConfirmUndelegationResponseAmino;
            fromAminoMsg(object: _264.MsgConfirmUndelegationResponseAminoMsg): _264.MsgConfirmUndelegationResponse;
            fromProtoMsg(message: _264.MsgConfirmUndelegationResponseProtoMsg): _264.MsgConfirmUndelegationResponse;
            toProto(message: _264.MsgConfirmUndelegationResponse): Uint8Array;
            toProtoMsg(message: _264.MsgConfirmUndelegationResponse): _264.MsgConfirmUndelegationResponseProtoMsg;
        };
        MsgConfirmUnbondedTokenSweep: {
            typeUrl: string;
            encode(message: _264.MsgConfirmUnbondedTokenSweep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _264.MsgConfirmUnbondedTokenSweep;
            fromPartial(object: Partial<_264.MsgConfirmUnbondedTokenSweep>): _264.MsgConfirmUnbondedTokenSweep;
            fromAmino(object: _264.MsgConfirmUnbondedTokenSweepAmino): _264.MsgConfirmUnbondedTokenSweep;
            toAmino(message: _264.MsgConfirmUnbondedTokenSweep): _264.MsgConfirmUnbondedTokenSweepAmino;
            fromAminoMsg(object: _264.MsgConfirmUnbondedTokenSweepAminoMsg): _264.MsgConfirmUnbondedTokenSweep;
            toAminoMsg(message: _264.MsgConfirmUnbondedTokenSweep): _264.MsgConfirmUnbondedTokenSweepAminoMsg;
            fromProtoMsg(message: _264.MsgConfirmUnbondedTokenSweepProtoMsg): _264.MsgConfirmUnbondedTokenSweep;
            toProto(message: _264.MsgConfirmUnbondedTokenSweep): Uint8Array;
            toProtoMsg(message: _264.MsgConfirmUnbondedTokenSweep): _264.MsgConfirmUnbondedTokenSweepProtoMsg;
        };
        MsgConfirmUnbondedTokenSweepResponse: {
            typeUrl: string;
            encode(_: _264.MsgConfirmUnbondedTokenSweepResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _264.MsgConfirmUnbondedTokenSweepResponse;
            fromPartial(_: Partial<_264.MsgConfirmUnbondedTokenSweepResponse>): _264.MsgConfirmUnbondedTokenSweepResponse;
            fromAmino(_: _264.MsgConfirmUnbondedTokenSweepResponseAmino): _264.MsgConfirmUnbondedTokenSweepResponse;
            toAmino(_: _264.MsgConfirmUnbondedTokenSweepResponse): _264.MsgConfirmUnbondedTokenSweepResponseAmino;
            fromAminoMsg(object: _264.MsgConfirmUnbondedTokenSweepResponseAminoMsg): _264.MsgConfirmUnbondedTokenSweepResponse;
            fromProtoMsg(message: _264.MsgConfirmUnbondedTokenSweepResponseProtoMsg): _264.MsgConfirmUnbondedTokenSweepResponse;
            toProto(message: _264.MsgConfirmUnbondedTokenSweepResponse): Uint8Array;
            toProtoMsg(message: _264.MsgConfirmUnbondedTokenSweepResponse): _264.MsgConfirmUnbondedTokenSweepResponseProtoMsg;
        };
        MsgAdjustDelegatedBalance: {
            typeUrl: string;
            encode(message: _264.MsgAdjustDelegatedBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _264.MsgAdjustDelegatedBalance;
            fromPartial(object: Partial<_264.MsgAdjustDelegatedBalance>): _264.MsgAdjustDelegatedBalance;
            fromAmino(object: _264.MsgAdjustDelegatedBalanceAmino): _264.MsgAdjustDelegatedBalance;
            toAmino(message: _264.MsgAdjustDelegatedBalance): _264.MsgAdjustDelegatedBalanceAmino;
            fromAminoMsg(object: _264.MsgAdjustDelegatedBalanceAminoMsg): _264.MsgAdjustDelegatedBalance;
            toAminoMsg(message: _264.MsgAdjustDelegatedBalance): _264.MsgAdjustDelegatedBalanceAminoMsg;
            fromProtoMsg(message: _264.MsgAdjustDelegatedBalanceProtoMsg): _264.MsgAdjustDelegatedBalance;
            toProto(message: _264.MsgAdjustDelegatedBalance): Uint8Array;
            toProtoMsg(message: _264.MsgAdjustDelegatedBalance): _264.MsgAdjustDelegatedBalanceProtoMsg;
        };
        MsgAdjustDelegatedBalanceResponse: {
            typeUrl: string;
            encode(_: _264.MsgAdjustDelegatedBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _264.MsgAdjustDelegatedBalanceResponse;
            fromPartial(_: Partial<_264.MsgAdjustDelegatedBalanceResponse>): _264.MsgAdjustDelegatedBalanceResponse;
            fromAmino(_: _264.MsgAdjustDelegatedBalanceResponseAmino): _264.MsgAdjustDelegatedBalanceResponse;
            toAmino(_: _264.MsgAdjustDelegatedBalanceResponse): _264.MsgAdjustDelegatedBalanceResponseAmino;
            fromAminoMsg(object: _264.MsgAdjustDelegatedBalanceResponseAminoMsg): _264.MsgAdjustDelegatedBalanceResponse;
            fromProtoMsg(message: _264.MsgAdjustDelegatedBalanceResponseProtoMsg): _264.MsgAdjustDelegatedBalanceResponse;
            toProto(message: _264.MsgAdjustDelegatedBalanceResponse): Uint8Array;
            toProtoMsg(message: _264.MsgAdjustDelegatedBalanceResponse): _264.MsgAdjustDelegatedBalanceResponseProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _264.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _264.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_264.MsgUpdateInnerRedemptionRateBounds>): _264.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _264.MsgUpdateInnerRedemptionRateBoundsAmino): _264.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _264.MsgUpdateInnerRedemptionRateBounds): _264.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _264.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _264.MsgUpdateInnerRedemptionRateBounds;
            toAminoMsg(message: _264.MsgUpdateInnerRedemptionRateBounds): _264.MsgUpdateInnerRedemptionRateBoundsAminoMsg;
            fromProtoMsg(message: _264.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _264.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _264.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _264.MsgUpdateInnerRedemptionRateBounds): _264.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _264.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _264.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_264.MsgUpdateInnerRedemptionRateBoundsResponse>): _264.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _264.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _264.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _264.MsgUpdateInnerRedemptionRateBoundsResponse): _264.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _264.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _264.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _264.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _264.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _264.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _264.MsgUpdateInnerRedemptionRateBoundsResponse): _264.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _264.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _264.MsgResumeHostZone;
            fromPartial(object: Partial<_264.MsgResumeHostZone>): _264.MsgResumeHostZone;
            fromAmino(object: _264.MsgResumeHostZoneAmino): _264.MsgResumeHostZone;
            toAmino(message: _264.MsgResumeHostZone): _264.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _264.MsgResumeHostZoneAminoMsg): _264.MsgResumeHostZone;
            toAminoMsg(message: _264.MsgResumeHostZone): _264.MsgResumeHostZoneAminoMsg;
            fromProtoMsg(message: _264.MsgResumeHostZoneProtoMsg): _264.MsgResumeHostZone;
            toProto(message: _264.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _264.MsgResumeHostZone): _264.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _264.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _264.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_264.MsgResumeHostZoneResponse>): _264.MsgResumeHostZoneResponse;
            fromAmino(_: _264.MsgResumeHostZoneResponseAmino): _264.MsgResumeHostZoneResponse;
            toAmino(_: _264.MsgResumeHostZoneResponse): _264.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _264.MsgResumeHostZoneResponseAminoMsg): _264.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _264.MsgResumeHostZoneResponseProtoMsg): _264.MsgResumeHostZoneResponse;
            toProto(message: _264.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _264.MsgResumeHostZoneResponse): _264.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgRefreshRedemptionRate: {
            typeUrl: string;
            encode(message: _264.MsgRefreshRedemptionRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _264.MsgRefreshRedemptionRate;
            fromPartial(object: Partial<_264.MsgRefreshRedemptionRate>): _264.MsgRefreshRedemptionRate;
            fromAmino(object: _264.MsgRefreshRedemptionRateAmino): _264.MsgRefreshRedemptionRate;
            toAmino(message: _264.MsgRefreshRedemptionRate): _264.MsgRefreshRedemptionRateAmino;
            fromAminoMsg(object: _264.MsgRefreshRedemptionRateAminoMsg): _264.MsgRefreshRedemptionRate;
            toAminoMsg(message: _264.MsgRefreshRedemptionRate): _264.MsgRefreshRedemptionRateAminoMsg;
            fromProtoMsg(message: _264.MsgRefreshRedemptionRateProtoMsg): _264.MsgRefreshRedemptionRate;
            toProto(message: _264.MsgRefreshRedemptionRate): Uint8Array;
            toProtoMsg(message: _264.MsgRefreshRedemptionRate): _264.MsgRefreshRedemptionRateProtoMsg;
        };
        MsgRefreshRedemptionRateResponse: {
            typeUrl: string;
            encode(_: _264.MsgRefreshRedemptionRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _264.MsgRefreshRedemptionRateResponse;
            fromPartial(_: Partial<_264.MsgRefreshRedemptionRateResponse>): _264.MsgRefreshRedemptionRateResponse;
            fromAmino(_: _264.MsgRefreshRedemptionRateResponseAmino): _264.MsgRefreshRedemptionRateResponse;
            toAmino(_: _264.MsgRefreshRedemptionRateResponse): _264.MsgRefreshRedemptionRateResponseAmino;
            fromAminoMsg(object: _264.MsgRefreshRedemptionRateResponseAminoMsg): _264.MsgRefreshRedemptionRateResponse;
            fromProtoMsg(message: _264.MsgRefreshRedemptionRateResponseProtoMsg): _264.MsgRefreshRedemptionRateResponse;
            toProto(message: _264.MsgRefreshRedemptionRateResponse): Uint8Array;
            toProtoMsg(message: _264.MsgRefreshRedemptionRateResponse): _264.MsgRefreshRedemptionRateResponseProtoMsg;
        };
        MsgOverwriteDelegationRecord: {
            typeUrl: string;
            encode(message: _264.MsgOverwriteDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _264.MsgOverwriteDelegationRecord;
            fromPartial(object: Partial<_264.MsgOverwriteDelegationRecord>): _264.MsgOverwriteDelegationRecord;
            fromAmino(object: _264.MsgOverwriteDelegationRecordAmino): _264.MsgOverwriteDelegationRecord;
            toAmino(message: _264.MsgOverwriteDelegationRecord): _264.MsgOverwriteDelegationRecordAmino;
            fromAminoMsg(object: _264.MsgOverwriteDelegationRecordAminoMsg): _264.MsgOverwriteDelegationRecord;
            toAminoMsg(message: _264.MsgOverwriteDelegationRecord): _264.MsgOverwriteDelegationRecordAminoMsg;
            fromProtoMsg(message: _264.MsgOverwriteDelegationRecordProtoMsg): _264.MsgOverwriteDelegationRecord;
            toProto(message: _264.MsgOverwriteDelegationRecord): Uint8Array;
            toProtoMsg(message: _264.MsgOverwriteDelegationRecord): _264.MsgOverwriteDelegationRecordProtoMsg;
        };
        MsgOverwriteDelegationRecordResponse: {
            typeUrl: string;
            encode(_: _264.MsgOverwriteDelegationRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _264.MsgOverwriteDelegationRecordResponse;
            fromPartial(_: Partial<_264.MsgOverwriteDelegationRecordResponse>): _264.MsgOverwriteDelegationRecordResponse;
            fromAmino(_: _264.MsgOverwriteDelegationRecordResponseAmino): _264.MsgOverwriteDelegationRecordResponse;
            toAmino(_: _264.MsgOverwriteDelegationRecordResponse): _264.MsgOverwriteDelegationRecordResponseAmino;
            fromAminoMsg(object: _264.MsgOverwriteDelegationRecordResponseAminoMsg): _264.MsgOverwriteDelegationRecordResponse;
            fromProtoMsg(message: _264.MsgOverwriteDelegationRecordResponseProtoMsg): _264.MsgOverwriteDelegationRecordResponse;
            toProto(message: _264.MsgOverwriteDelegationRecordResponse): Uint8Array;
            toProtoMsg(message: _264.MsgOverwriteDelegationRecordResponse): _264.MsgOverwriteDelegationRecordResponseProtoMsg;
        };
        MsgOverwriteUnbondingRecord: {
            typeUrl: string;
            encode(message: _264.MsgOverwriteUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _264.MsgOverwriteUnbondingRecord;
            fromPartial(object: Partial<_264.MsgOverwriteUnbondingRecord>): _264.MsgOverwriteUnbondingRecord;
            fromAmino(object: _264.MsgOverwriteUnbondingRecordAmino): _264.MsgOverwriteUnbondingRecord;
            toAmino(message: _264.MsgOverwriteUnbondingRecord): _264.MsgOverwriteUnbondingRecordAmino;
            fromAminoMsg(object: _264.MsgOverwriteUnbondingRecordAminoMsg): _264.MsgOverwriteUnbondingRecord;
            toAminoMsg(message: _264.MsgOverwriteUnbondingRecord): _264.MsgOverwriteUnbondingRecordAminoMsg;
            fromProtoMsg(message: _264.MsgOverwriteUnbondingRecordProtoMsg): _264.MsgOverwriteUnbondingRecord;
            toProto(message: _264.MsgOverwriteUnbondingRecord): Uint8Array;
            toProtoMsg(message: _264.MsgOverwriteUnbondingRecord): _264.MsgOverwriteUnbondingRecordProtoMsg;
        };
        MsgOverwriteUnbondingRecordResponse: {
            typeUrl: string;
            encode(_: _264.MsgOverwriteUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _264.MsgOverwriteUnbondingRecordResponse;
            fromPartial(_: Partial<_264.MsgOverwriteUnbondingRecordResponse>): _264.MsgOverwriteUnbondingRecordResponse;
            fromAmino(_: _264.MsgOverwriteUnbondingRecordResponseAmino): _264.MsgOverwriteUnbondingRecordResponse;
            toAmino(_: _264.MsgOverwriteUnbondingRecordResponse): _264.MsgOverwriteUnbondingRecordResponseAmino;
            fromAminoMsg(object: _264.MsgOverwriteUnbondingRecordResponseAminoMsg): _264.MsgOverwriteUnbondingRecordResponse;
            fromProtoMsg(message: _264.MsgOverwriteUnbondingRecordResponseProtoMsg): _264.MsgOverwriteUnbondingRecordResponse;
            toProto(message: _264.MsgOverwriteUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _264.MsgOverwriteUnbondingRecordResponse): _264.MsgOverwriteUnbondingRecordResponseProtoMsg;
        };
        MsgOverwriteRedemptionRecord: {
            typeUrl: string;
            encode(message: _264.MsgOverwriteRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _264.MsgOverwriteRedemptionRecord;
            fromPartial(object: Partial<_264.MsgOverwriteRedemptionRecord>): _264.MsgOverwriteRedemptionRecord;
            fromAmino(object: _264.MsgOverwriteRedemptionRecordAmino): _264.MsgOverwriteRedemptionRecord;
            toAmino(message: _264.MsgOverwriteRedemptionRecord): _264.MsgOverwriteRedemptionRecordAmino;
            fromAminoMsg(object: _264.MsgOverwriteRedemptionRecordAminoMsg): _264.MsgOverwriteRedemptionRecord;
            toAminoMsg(message: _264.MsgOverwriteRedemptionRecord): _264.MsgOverwriteRedemptionRecordAminoMsg;
            fromProtoMsg(message: _264.MsgOverwriteRedemptionRecordProtoMsg): _264.MsgOverwriteRedemptionRecord;
            toProto(message: _264.MsgOverwriteRedemptionRecord): Uint8Array;
            toProtoMsg(message: _264.MsgOverwriteRedemptionRecord): _264.MsgOverwriteRedemptionRecordProtoMsg;
        };
        MsgOverwriteRedemptionRecordResponse: {
            typeUrl: string;
            encode(_: _264.MsgOverwriteRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _264.MsgOverwriteRedemptionRecordResponse;
            fromPartial(_: Partial<_264.MsgOverwriteRedemptionRecordResponse>): _264.MsgOverwriteRedemptionRecordResponse;
            fromAmino(_: _264.MsgOverwriteRedemptionRecordResponseAmino): _264.MsgOverwriteRedemptionRecordResponse;
            toAmino(_: _264.MsgOverwriteRedemptionRecordResponse): _264.MsgOverwriteRedemptionRecordResponseAmino;
            fromAminoMsg(object: _264.MsgOverwriteRedemptionRecordResponseAminoMsg): _264.MsgOverwriteRedemptionRecordResponse;
            fromProtoMsg(message: _264.MsgOverwriteRedemptionRecordResponseProtoMsg): _264.MsgOverwriteRedemptionRecordResponse;
            toProto(message: _264.MsgOverwriteRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _264.MsgOverwriteRedemptionRecordResponse): _264.MsgOverwriteRedemptionRecordResponseProtoMsg;
        };
        MsgSetOperatorAddress: {
            typeUrl: string;
            encode(message: _264.MsgSetOperatorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _264.MsgSetOperatorAddress;
            fromPartial(object: Partial<_264.MsgSetOperatorAddress>): _264.MsgSetOperatorAddress;
            fromAmino(object: _264.MsgSetOperatorAddressAmino): _264.MsgSetOperatorAddress;
            toAmino(message: _264.MsgSetOperatorAddress): _264.MsgSetOperatorAddressAmino;
            fromAminoMsg(object: _264.MsgSetOperatorAddressAminoMsg): _264.MsgSetOperatorAddress;
            toAminoMsg(message: _264.MsgSetOperatorAddress): _264.MsgSetOperatorAddressAminoMsg;
            fromProtoMsg(message: _264.MsgSetOperatorAddressProtoMsg): _264.MsgSetOperatorAddress;
            toProto(message: _264.MsgSetOperatorAddress): Uint8Array;
            toProtoMsg(message: _264.MsgSetOperatorAddress): _264.MsgSetOperatorAddressProtoMsg;
        };
        MsgSetOperatorAddressResponse: {
            typeUrl: string;
            encode(_: _264.MsgSetOperatorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _264.MsgSetOperatorAddressResponse;
            fromPartial(_: Partial<_264.MsgSetOperatorAddressResponse>): _264.MsgSetOperatorAddressResponse;
            fromAmino(_: _264.MsgSetOperatorAddressResponseAmino): _264.MsgSetOperatorAddressResponse;
            toAmino(_: _264.MsgSetOperatorAddressResponse): _264.MsgSetOperatorAddressResponseAmino;
            fromAminoMsg(object: _264.MsgSetOperatorAddressResponseAminoMsg): _264.MsgSetOperatorAddressResponse;
            fromProtoMsg(message: _264.MsgSetOperatorAddressResponseProtoMsg): _264.MsgSetOperatorAddressResponse;
            toProto(message: _264.MsgSetOperatorAddressResponse): Uint8Array;
            toProtoMsg(message: _264.MsgSetOperatorAddressResponse): _264.MsgSetOperatorAddressResponseProtoMsg;
        };
        delegationRecordStatusFromJSON(object: any): _263.DelegationRecordStatus;
        delegationRecordStatusToJSON(object: _263.DelegationRecordStatus): string;
        unbondingRecordStatusFromJSON(object: any): _263.UnbondingRecordStatus;
        unbondingRecordStatusToJSON(object: _263.UnbondingRecordStatus): string;
        DelegationRecordStatus: typeof _263.DelegationRecordStatus;
        DelegationRecordStatusSDKType: typeof _263.DelegationRecordStatus;
        DelegationRecordStatusAmino: typeof _263.DelegationRecordStatus;
        UnbondingRecordStatus: typeof _263.UnbondingRecordStatus;
        UnbondingRecordStatusSDKType: typeof _263.UnbondingRecordStatus;
        UnbondingRecordStatusAmino: typeof _263.UnbondingRecordStatus;
        HostZone: {
            typeUrl: string;
            encode(message: _263.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _263.HostZone;
            fromPartial(object: Partial<_263.HostZone>): _263.HostZone;
            fromAmino(object: _263.HostZoneAmino): _263.HostZone;
            toAmino(message: _263.HostZone): _263.HostZoneAmino;
            fromAminoMsg(object: _263.HostZoneAminoMsg): _263.HostZone;
            fromProtoMsg(message: _263.HostZoneProtoMsg): _263.HostZone;
            toProto(message: _263.HostZone): Uint8Array;
            toProtoMsg(message: _263.HostZone): _263.HostZoneProtoMsg;
        };
        DelegationRecord: {
            typeUrl: string;
            encode(message: _263.DelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _263.DelegationRecord;
            fromPartial(object: Partial<_263.DelegationRecord>): _263.DelegationRecord;
            fromAmino(object: _263.DelegationRecordAmino): _263.DelegationRecord;
            toAmino(message: _263.DelegationRecord): _263.DelegationRecordAmino;
            fromAminoMsg(object: _263.DelegationRecordAminoMsg): _263.DelegationRecord;
            fromProtoMsg(message: _263.DelegationRecordProtoMsg): _263.DelegationRecord;
            toProto(message: _263.DelegationRecord): Uint8Array;
            toProtoMsg(message: _263.DelegationRecord): _263.DelegationRecordProtoMsg;
        };
        UnbondingRecord: {
            typeUrl: string;
            encode(message: _263.UnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _263.UnbondingRecord;
            fromPartial(object: Partial<_263.UnbondingRecord>): _263.UnbondingRecord;
            fromAmino(object: _263.UnbondingRecordAmino): _263.UnbondingRecord;
            toAmino(message: _263.UnbondingRecord): _263.UnbondingRecordAmino;
            fromAminoMsg(object: _263.UnbondingRecordAminoMsg): _263.UnbondingRecord;
            fromProtoMsg(message: _263.UnbondingRecordProtoMsg): _263.UnbondingRecord;
            toProto(message: _263.UnbondingRecord): Uint8Array;
            toProtoMsg(message: _263.UnbondingRecord): _263.UnbondingRecordProtoMsg;
        };
        RedemptionRecord: {
            typeUrl: string;
            encode(message: _263.RedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _263.RedemptionRecord;
            fromPartial(object: Partial<_263.RedemptionRecord>): _263.RedemptionRecord;
            fromAmino(object: _263.RedemptionRecordAmino): _263.RedemptionRecord;
            toAmino(message: _263.RedemptionRecord): _263.RedemptionRecordAmino;
            fromAminoMsg(object: _263.RedemptionRecordAminoMsg): _263.RedemptionRecord;
            fromProtoMsg(message: _263.RedemptionRecordProtoMsg): _263.RedemptionRecord;
            toProto(message: _263.RedemptionRecord): Uint8Array;
            toProtoMsg(message: _263.RedemptionRecord): _263.RedemptionRecordProtoMsg;
        };
        SlashRecord: {
            typeUrl: string;
            encode(message: _263.SlashRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _263.SlashRecord;
            fromPartial(object: Partial<_263.SlashRecord>): _263.SlashRecord;
            fromAmino(object: _263.SlashRecordAmino): _263.SlashRecord;
            toAmino(message: _263.SlashRecord): _263.SlashRecordAmino;
            fromAminoMsg(object: _263.SlashRecordAminoMsg): _263.SlashRecord;
            fromProtoMsg(message: _263.SlashRecordProtoMsg): _263.SlashRecord;
            toProto(message: _263.SlashRecord): Uint8Array;
            toProtoMsg(message: _263.SlashRecord): _263.SlashRecordProtoMsg;
        };
        QueryHostZoneRequest: {
            typeUrl: string;
            encode(_: _262.QueryHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _262.QueryHostZoneRequest;
            fromPartial(_: Partial<_262.QueryHostZoneRequest>): _262.QueryHostZoneRequest;
            fromAmino(_: _262.QueryHostZoneRequestAmino): _262.QueryHostZoneRequest;
            toAmino(_: _262.QueryHostZoneRequest): _262.QueryHostZoneRequestAmino;
            fromAminoMsg(object: _262.QueryHostZoneRequestAminoMsg): _262.QueryHostZoneRequest;
            fromProtoMsg(message: _262.QueryHostZoneRequestProtoMsg): _262.QueryHostZoneRequest;
            toProto(message: _262.QueryHostZoneRequest): Uint8Array;
            toProtoMsg(message: _262.QueryHostZoneRequest): _262.QueryHostZoneRequestProtoMsg;
        };
        QueryHostZoneResponse: {
            typeUrl: string;
            encode(message: _262.QueryHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _262.QueryHostZoneResponse;
            fromPartial(object: Partial<_262.QueryHostZoneResponse>): _262.QueryHostZoneResponse;
            fromAmino(object: _262.QueryHostZoneResponseAmino): _262.QueryHostZoneResponse;
            toAmino(message: _262.QueryHostZoneResponse): _262.QueryHostZoneResponseAmino;
            fromAminoMsg(object: _262.QueryHostZoneResponseAminoMsg): _262.QueryHostZoneResponse;
            fromProtoMsg(message: _262.QueryHostZoneResponseProtoMsg): _262.QueryHostZoneResponse;
            toProto(message: _262.QueryHostZoneResponse): Uint8Array;
            toProtoMsg(message: _262.QueryHostZoneResponse): _262.QueryHostZoneResponseProtoMsg;
        };
        QueryDelegationRecordsRequest: {
            typeUrl: string;
            encode(message: _262.QueryDelegationRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _262.QueryDelegationRecordsRequest;
            fromPartial(object: Partial<_262.QueryDelegationRecordsRequest>): _262.QueryDelegationRecordsRequest;
            fromAmino(object: _262.QueryDelegationRecordsRequestAmino): _262.QueryDelegationRecordsRequest;
            toAmino(message: _262.QueryDelegationRecordsRequest): _262.QueryDelegationRecordsRequestAmino;
            fromAminoMsg(object: _262.QueryDelegationRecordsRequestAminoMsg): _262.QueryDelegationRecordsRequest;
            fromProtoMsg(message: _262.QueryDelegationRecordsRequestProtoMsg): _262.QueryDelegationRecordsRequest;
            toProto(message: _262.QueryDelegationRecordsRequest): Uint8Array;
            toProtoMsg(message: _262.QueryDelegationRecordsRequest): _262.QueryDelegationRecordsRequestProtoMsg;
        };
        QueryDelegationRecordsResponse: {
            typeUrl: string;
            encode(message: _262.QueryDelegationRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _262.QueryDelegationRecordsResponse;
            fromPartial(object: Partial<_262.QueryDelegationRecordsResponse>): _262.QueryDelegationRecordsResponse;
            fromAmino(object: _262.QueryDelegationRecordsResponseAmino): _262.QueryDelegationRecordsResponse;
            toAmino(message: _262.QueryDelegationRecordsResponse): _262.QueryDelegationRecordsResponseAmino;
            fromAminoMsg(object: _262.QueryDelegationRecordsResponseAminoMsg): _262.QueryDelegationRecordsResponse;
            fromProtoMsg(message: _262.QueryDelegationRecordsResponseProtoMsg): _262.QueryDelegationRecordsResponse;
            toProto(message: _262.QueryDelegationRecordsResponse): Uint8Array;
            toProtoMsg(message: _262.QueryDelegationRecordsResponse): _262.QueryDelegationRecordsResponseProtoMsg;
        };
        QueryUnbondingRecordsRequest: {
            typeUrl: string;
            encode(message: _262.QueryUnbondingRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _262.QueryUnbondingRecordsRequest;
            fromPartial(object: Partial<_262.QueryUnbondingRecordsRequest>): _262.QueryUnbondingRecordsRequest;
            fromAmino(object: _262.QueryUnbondingRecordsRequestAmino): _262.QueryUnbondingRecordsRequest;
            toAmino(message: _262.QueryUnbondingRecordsRequest): _262.QueryUnbondingRecordsRequestAmino;
            fromAminoMsg(object: _262.QueryUnbondingRecordsRequestAminoMsg): _262.QueryUnbondingRecordsRequest;
            fromProtoMsg(message: _262.QueryUnbondingRecordsRequestProtoMsg): _262.QueryUnbondingRecordsRequest;
            toProto(message: _262.QueryUnbondingRecordsRequest): Uint8Array;
            toProtoMsg(message: _262.QueryUnbondingRecordsRequest): _262.QueryUnbondingRecordsRequestProtoMsg;
        };
        QueryUnbondingRecordsResponse: {
            typeUrl: string;
            encode(message: _262.QueryUnbondingRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _262.QueryUnbondingRecordsResponse;
            fromPartial(object: Partial<_262.QueryUnbondingRecordsResponse>): _262.QueryUnbondingRecordsResponse;
            fromAmino(object: _262.QueryUnbondingRecordsResponseAmino): _262.QueryUnbondingRecordsResponse;
            toAmino(message: _262.QueryUnbondingRecordsResponse): _262.QueryUnbondingRecordsResponseAmino;
            fromAminoMsg(object: _262.QueryUnbondingRecordsResponseAminoMsg): _262.QueryUnbondingRecordsResponse;
            fromProtoMsg(message: _262.QueryUnbondingRecordsResponseProtoMsg): _262.QueryUnbondingRecordsResponse;
            toProto(message: _262.QueryUnbondingRecordsResponse): Uint8Array;
            toProtoMsg(message: _262.QueryUnbondingRecordsResponse): _262.QueryUnbondingRecordsResponseProtoMsg;
        };
        QueryRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _262.QueryRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _262.QueryRedemptionRecordRequest;
            fromPartial(object: Partial<_262.QueryRedemptionRecordRequest>): _262.QueryRedemptionRecordRequest;
            fromAmino(object: _262.QueryRedemptionRecordRequestAmino): _262.QueryRedemptionRecordRequest;
            toAmino(message: _262.QueryRedemptionRecordRequest): _262.QueryRedemptionRecordRequestAmino;
            fromAminoMsg(object: _262.QueryRedemptionRecordRequestAminoMsg): _262.QueryRedemptionRecordRequest;
            fromProtoMsg(message: _262.QueryRedemptionRecordRequestProtoMsg): _262.QueryRedemptionRecordRequest;
            toProto(message: _262.QueryRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _262.QueryRedemptionRecordRequest): _262.QueryRedemptionRecordRequestProtoMsg;
        };
        QueryRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _262.QueryRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _262.QueryRedemptionRecordResponse;
            fromPartial(object: Partial<_262.QueryRedemptionRecordResponse>): _262.QueryRedemptionRecordResponse;
            fromAmino(object: _262.QueryRedemptionRecordResponseAmino): _262.QueryRedemptionRecordResponse;
            toAmino(message: _262.QueryRedemptionRecordResponse): _262.QueryRedemptionRecordResponseAmino;
            fromAminoMsg(object: _262.QueryRedemptionRecordResponseAminoMsg): _262.QueryRedemptionRecordResponse;
            fromProtoMsg(message: _262.QueryRedemptionRecordResponseProtoMsg): _262.QueryRedemptionRecordResponse;
            toProto(message: _262.QueryRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _262.QueryRedemptionRecordResponse): _262.QueryRedemptionRecordResponseProtoMsg;
        };
        QueryRedemptionRecordsRequest: {
            typeUrl: string;
            encode(message: _262.QueryRedemptionRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _262.QueryRedemptionRecordsRequest;
            fromPartial(object: Partial<_262.QueryRedemptionRecordsRequest>): _262.QueryRedemptionRecordsRequest;
            fromAmino(object: _262.QueryRedemptionRecordsRequestAmino): _262.QueryRedemptionRecordsRequest;
            toAmino(message: _262.QueryRedemptionRecordsRequest): _262.QueryRedemptionRecordsRequestAmino;
            fromAminoMsg(object: _262.QueryRedemptionRecordsRequestAminoMsg): _262.QueryRedemptionRecordsRequest;
            fromProtoMsg(message: _262.QueryRedemptionRecordsRequestProtoMsg): _262.QueryRedemptionRecordsRequest;
            toProto(message: _262.QueryRedemptionRecordsRequest): Uint8Array;
            toProtoMsg(message: _262.QueryRedemptionRecordsRequest): _262.QueryRedemptionRecordsRequestProtoMsg;
        };
        QueryRedemptionRecordsResponse: {
            typeUrl: string;
            encode(message: _262.QueryRedemptionRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _262.QueryRedemptionRecordsResponse;
            fromPartial(object: Partial<_262.QueryRedemptionRecordsResponse>): _262.QueryRedemptionRecordsResponse;
            fromAmino(object: _262.QueryRedemptionRecordsResponseAmino): _262.QueryRedemptionRecordsResponse;
            toAmino(message: _262.QueryRedemptionRecordsResponse): _262.QueryRedemptionRecordsResponseAmino;
            fromAminoMsg(object: _262.QueryRedemptionRecordsResponseAminoMsg): _262.QueryRedemptionRecordsResponse;
            fromProtoMsg(message: _262.QueryRedemptionRecordsResponseProtoMsg): _262.QueryRedemptionRecordsResponse;
            toProto(message: _262.QueryRedemptionRecordsResponse): Uint8Array;
            toProtoMsg(message: _262.QueryRedemptionRecordsResponse): _262.QueryRedemptionRecordsResponseProtoMsg;
        };
        QuerySlashRecordsRequest: {
            typeUrl: string;
            encode(_: _262.QuerySlashRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _262.QuerySlashRecordsRequest;
            fromPartial(_: Partial<_262.QuerySlashRecordsRequest>): _262.QuerySlashRecordsRequest;
            fromAmino(_: _262.QuerySlashRecordsRequestAmino): _262.QuerySlashRecordsRequest;
            toAmino(_: _262.QuerySlashRecordsRequest): _262.QuerySlashRecordsRequestAmino;
            fromAminoMsg(object: _262.QuerySlashRecordsRequestAminoMsg): _262.QuerySlashRecordsRequest;
            fromProtoMsg(message: _262.QuerySlashRecordsRequestProtoMsg): _262.QuerySlashRecordsRequest;
            toProto(message: _262.QuerySlashRecordsRequest): Uint8Array;
            toProtoMsg(message: _262.QuerySlashRecordsRequest): _262.QuerySlashRecordsRequestProtoMsg;
        };
        QuerySlashRecordsResponse: {
            typeUrl: string;
            encode(message: _262.QuerySlashRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _262.QuerySlashRecordsResponse;
            fromPartial(object: Partial<_262.QuerySlashRecordsResponse>): _262.QuerySlashRecordsResponse;
            fromAmino(object: _262.QuerySlashRecordsResponseAmino): _262.QuerySlashRecordsResponse;
            toAmino(message: _262.QuerySlashRecordsResponse): _262.QuerySlashRecordsResponseAmino;
            fromAminoMsg(object: _262.QuerySlashRecordsResponseAminoMsg): _262.QuerySlashRecordsResponse;
            fromProtoMsg(message: _262.QuerySlashRecordsResponseProtoMsg): _262.QuerySlashRecordsResponse;
            toProto(message: _262.QuerySlashRecordsResponse): Uint8Array;
            toProtoMsg(message: _262.QuerySlashRecordsResponse): _262.QuerySlashRecordsResponseProtoMsg;
        };
        RedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _262.RedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _262.RedemptionRecordResponse;
            fromPartial(object: Partial<_262.RedemptionRecordResponse>): _262.RedemptionRecordResponse;
            fromAmino(object: _262.RedemptionRecordResponseAmino): _262.RedemptionRecordResponse;
            toAmino(message: _262.RedemptionRecordResponse): _262.RedemptionRecordResponseAmino;
            fromAminoMsg(object: _262.RedemptionRecordResponseAminoMsg): _262.RedemptionRecordResponse;
            fromProtoMsg(message: _262.RedemptionRecordResponseProtoMsg): _262.RedemptionRecordResponse;
            toProto(message: _262.RedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _262.RedemptionRecordResponse): _262.RedemptionRecordResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _261.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _261.Params;
            fromPartial(_: Partial<_261.Params>): _261.Params;
            fromAmino(_: _261.ParamsAmino): _261.Params;
            toAmino(_: _261.Params): _261.ParamsAmino;
            fromAminoMsg(object: _261.ParamsAminoMsg): _261.Params;
            fromProtoMsg(message: _261.ParamsProtoMsg): _261.Params;
            toProto(message: _261.Params): Uint8Array;
            toProtoMsg(message: _261.Params): _261.ParamsProtoMsg;
        };
        TransferInProgressRecordIds: {
            typeUrl: string;
            encode(message: _261.TransferInProgressRecordIds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _261.TransferInProgressRecordIds;
            fromPartial(object: Partial<_261.TransferInProgressRecordIds>): _261.TransferInProgressRecordIds;
            fromAmino(object: _261.TransferInProgressRecordIdsAmino): _261.TransferInProgressRecordIds;
            toAmino(message: _261.TransferInProgressRecordIds): _261.TransferInProgressRecordIdsAmino;
            fromAminoMsg(object: _261.TransferInProgressRecordIdsAminoMsg): _261.TransferInProgressRecordIds;
            fromProtoMsg(message: _261.TransferInProgressRecordIdsProtoMsg): _261.TransferInProgressRecordIds;
            toProto(message: _261.TransferInProgressRecordIds): Uint8Array;
            toProtoMsg(message: _261.TransferInProgressRecordIds): _261.TransferInProgressRecordIdsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _261.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _261.GenesisState;
            fromPartial(object: Partial<_261.GenesisState>): _261.GenesisState;
            fromAmino(object: _261.GenesisStateAmino): _261.GenesisState;
            toAmino(message: _261.GenesisState): _261.GenesisStateAmino;
            fromAminoMsg(object: _261.GenesisStateAminoMsg): _261.GenesisState;
            fromProtoMsg(message: _261.GenesisStateProtoMsg): _261.GenesisState;
            toProto(message: _261.GenesisState): Uint8Array;
            toProtoMsg(message: _261.GenesisState): _261.GenesisStateProtoMsg;
        };
    };
    const strdburner: {
        MsgClientImpl: typeof _440.MsgClientImpl;
        QueryClientImpl: typeof _430.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            strdBurnerAddress(request?: _266.QueryStrdBurnerAddressRequest): Promise<_266.QueryStrdBurnerAddressResponse>;
            totalStrdBurned(request?: _266.QueryTotalStrdBurnedRequest): Promise<_266.QueryTotalStrdBurnedResponse>;
            strdBurnedByAddress(request: _266.QueryStrdBurnedByAddressRequest): Promise<_266.QueryStrdBurnedByAddressResponse>;
            linkedAddress(request: _266.QueryLinkedAddressRequest): Promise<_266.QueryLinkedAddressResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                burn(value: _267.MsgBurn): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                link(value: _267.MsgLink): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                burn(value: _267.MsgBurn): {
                    typeUrl: string;
                    value: _267.MsgBurn;
                };
                link(value: _267.MsgLink): {
                    typeUrl: string;
                    value: _267.MsgLink;
                };
            };
            fromPartial: {
                burn(value: _267.MsgBurn): {
                    typeUrl: string;
                    value: _267.MsgBurn;
                };
                link(value: _267.MsgLink): {
                    typeUrl: string;
                    value: _267.MsgLink;
                };
            };
        };
        AminoConverter: {
            "/stride.strdburner.MsgBurn": {
                aminoType: string;
                toAmino: (message: _267.MsgBurn) => _267.MsgBurnAmino;
                fromAmino: (object: _267.MsgBurnAmino) => _267.MsgBurn;
            };
            "/stride.strdburner.MsgLink": {
                aminoType: string;
                toAmino: (message: _267.MsgLink) => _267.MsgLinkAmino;
                fromAmino: (object: _267.MsgLinkAmino) => _267.MsgLink;
            };
        };
        MsgBurn: {
            typeUrl: string;
            encode(message: _267.MsgBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _267.MsgBurn;
            fromPartial(object: Partial<_267.MsgBurn>): _267.MsgBurn;
            fromAmino(object: _267.MsgBurnAmino): _267.MsgBurn;
            toAmino(message: _267.MsgBurn): _267.MsgBurnAmino;
            fromAminoMsg(object: _267.MsgBurnAminoMsg): _267.MsgBurn;
            toAminoMsg(message: _267.MsgBurn): _267.MsgBurnAminoMsg;
            fromProtoMsg(message: _267.MsgBurnProtoMsg): _267.MsgBurn;
            toProto(message: _267.MsgBurn): Uint8Array;
            toProtoMsg(message: _267.MsgBurn): _267.MsgBurnProtoMsg;
        };
        MsgBurnResponse: {
            typeUrl: string;
            encode(_: _267.MsgBurnResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _267.MsgBurnResponse;
            fromPartial(_: Partial<_267.MsgBurnResponse>): _267.MsgBurnResponse;
            fromAmino(_: _267.MsgBurnResponseAmino): _267.MsgBurnResponse;
            toAmino(_: _267.MsgBurnResponse): _267.MsgBurnResponseAmino;
            fromAminoMsg(object: _267.MsgBurnResponseAminoMsg): _267.MsgBurnResponse;
            fromProtoMsg(message: _267.MsgBurnResponseProtoMsg): _267.MsgBurnResponse;
            toProto(message: _267.MsgBurnResponse): Uint8Array;
            toProtoMsg(message: _267.MsgBurnResponse): _267.MsgBurnResponseProtoMsg;
        };
        MsgLink: {
            typeUrl: string;
            encode(message: _267.MsgLink, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _267.MsgLink;
            fromPartial(object: Partial<_267.MsgLink>): _267.MsgLink;
            fromAmino(object: _267.MsgLinkAmino): _267.MsgLink;
            toAmino(message: _267.MsgLink): _267.MsgLinkAmino;
            fromAminoMsg(object: _267.MsgLinkAminoMsg): _267.MsgLink;
            toAminoMsg(message: _267.MsgLink): _267.MsgLinkAminoMsg;
            fromProtoMsg(message: _267.MsgLinkProtoMsg): _267.MsgLink;
            toProto(message: _267.MsgLink): Uint8Array;
            toProtoMsg(message: _267.MsgLink): _267.MsgLinkProtoMsg;
        };
        MsgLinkResponse: {
            typeUrl: string;
            encode(_: _267.MsgLinkResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _267.MsgLinkResponse;
            fromPartial(_: Partial<_267.MsgLinkResponse>): _267.MsgLinkResponse;
            fromAmino(_: _267.MsgLinkResponseAmino): _267.MsgLinkResponse;
            toAmino(_: _267.MsgLinkResponse): _267.MsgLinkResponseAmino;
            fromAminoMsg(object: _267.MsgLinkResponseAminoMsg): _267.MsgLinkResponse;
            fromProtoMsg(message: _267.MsgLinkResponseProtoMsg): _267.MsgLinkResponse;
            toProto(message: _267.MsgLinkResponse): Uint8Array;
            toProtoMsg(message: _267.MsgLinkResponse): _267.MsgLinkResponseProtoMsg;
        };
        QueryStrdBurnerAddressRequest: {
            typeUrl: string;
            encode(_: _266.QueryStrdBurnerAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _266.QueryStrdBurnerAddressRequest;
            fromPartial(_: Partial<_266.QueryStrdBurnerAddressRequest>): _266.QueryStrdBurnerAddressRequest;
            fromAmino(_: _266.QueryStrdBurnerAddressRequestAmino): _266.QueryStrdBurnerAddressRequest;
            toAmino(_: _266.QueryStrdBurnerAddressRequest): _266.QueryStrdBurnerAddressRequestAmino;
            fromAminoMsg(object: _266.QueryStrdBurnerAddressRequestAminoMsg): _266.QueryStrdBurnerAddressRequest;
            fromProtoMsg(message: _266.QueryStrdBurnerAddressRequestProtoMsg): _266.QueryStrdBurnerAddressRequest;
            toProto(message: _266.QueryStrdBurnerAddressRequest): Uint8Array;
            toProtoMsg(message: _266.QueryStrdBurnerAddressRequest): _266.QueryStrdBurnerAddressRequestProtoMsg;
        };
        QueryStrdBurnerAddressResponse: {
            typeUrl: string;
            encode(message: _266.QueryStrdBurnerAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _266.QueryStrdBurnerAddressResponse;
            fromPartial(object: Partial<_266.QueryStrdBurnerAddressResponse>): _266.QueryStrdBurnerAddressResponse;
            fromAmino(object: _266.QueryStrdBurnerAddressResponseAmino): _266.QueryStrdBurnerAddressResponse;
            toAmino(message: _266.QueryStrdBurnerAddressResponse): _266.QueryStrdBurnerAddressResponseAmino;
            fromAminoMsg(object: _266.QueryStrdBurnerAddressResponseAminoMsg): _266.QueryStrdBurnerAddressResponse;
            fromProtoMsg(message: _266.QueryStrdBurnerAddressResponseProtoMsg): _266.QueryStrdBurnerAddressResponse;
            toProto(message: _266.QueryStrdBurnerAddressResponse): Uint8Array;
            toProtoMsg(message: _266.QueryStrdBurnerAddressResponse): _266.QueryStrdBurnerAddressResponseProtoMsg;
        };
        QueryTotalStrdBurnedRequest: {
            typeUrl: string;
            encode(_: _266.QueryTotalStrdBurnedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _266.QueryTotalStrdBurnedRequest;
            fromPartial(_: Partial<_266.QueryTotalStrdBurnedRequest>): _266.QueryTotalStrdBurnedRequest;
            fromAmino(_: _266.QueryTotalStrdBurnedRequestAmino): _266.QueryTotalStrdBurnedRequest;
            toAmino(_: _266.QueryTotalStrdBurnedRequest): _266.QueryTotalStrdBurnedRequestAmino;
            fromAminoMsg(object: _266.QueryTotalStrdBurnedRequestAminoMsg): _266.QueryTotalStrdBurnedRequest;
            fromProtoMsg(message: _266.QueryTotalStrdBurnedRequestProtoMsg): _266.QueryTotalStrdBurnedRequest;
            toProto(message: _266.QueryTotalStrdBurnedRequest): Uint8Array;
            toProtoMsg(message: _266.QueryTotalStrdBurnedRequest): _266.QueryTotalStrdBurnedRequestProtoMsg;
        };
        QueryTotalStrdBurnedResponse: {
            typeUrl: string;
            encode(message: _266.QueryTotalStrdBurnedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _266.QueryTotalStrdBurnedResponse;
            fromPartial(object: Partial<_266.QueryTotalStrdBurnedResponse>): _266.QueryTotalStrdBurnedResponse;
            fromAmino(object: _266.QueryTotalStrdBurnedResponseAmino): _266.QueryTotalStrdBurnedResponse;
            toAmino(message: _266.QueryTotalStrdBurnedResponse): _266.QueryTotalStrdBurnedResponseAmino;
            fromAminoMsg(object: _266.QueryTotalStrdBurnedResponseAminoMsg): _266.QueryTotalStrdBurnedResponse;
            fromProtoMsg(message: _266.QueryTotalStrdBurnedResponseProtoMsg): _266.QueryTotalStrdBurnedResponse;
            toProto(message: _266.QueryTotalStrdBurnedResponse): Uint8Array;
            toProtoMsg(message: _266.QueryTotalStrdBurnedResponse): _266.QueryTotalStrdBurnedResponseProtoMsg;
        };
        QueryStrdBurnedByAddressRequest: {
            typeUrl: string;
            encode(message: _266.QueryStrdBurnedByAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _266.QueryStrdBurnedByAddressRequest;
            fromPartial(object: Partial<_266.QueryStrdBurnedByAddressRequest>): _266.QueryStrdBurnedByAddressRequest;
            fromAmino(object: _266.QueryStrdBurnedByAddressRequestAmino): _266.QueryStrdBurnedByAddressRequest;
            toAmino(message: _266.QueryStrdBurnedByAddressRequest): _266.QueryStrdBurnedByAddressRequestAmino;
            fromAminoMsg(object: _266.QueryStrdBurnedByAddressRequestAminoMsg): _266.QueryStrdBurnedByAddressRequest;
            fromProtoMsg(message: _266.QueryStrdBurnedByAddressRequestProtoMsg): _266.QueryStrdBurnedByAddressRequest;
            toProto(message: _266.QueryStrdBurnedByAddressRequest): Uint8Array;
            toProtoMsg(message: _266.QueryStrdBurnedByAddressRequest): _266.QueryStrdBurnedByAddressRequestProtoMsg;
        };
        QueryStrdBurnedByAddressResponse: {
            typeUrl: string;
            encode(message: _266.QueryStrdBurnedByAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _266.QueryStrdBurnedByAddressResponse;
            fromPartial(object: Partial<_266.QueryStrdBurnedByAddressResponse>): _266.QueryStrdBurnedByAddressResponse;
            fromAmino(object: _266.QueryStrdBurnedByAddressResponseAmino): _266.QueryStrdBurnedByAddressResponse;
            toAmino(message: _266.QueryStrdBurnedByAddressResponse): _266.QueryStrdBurnedByAddressResponseAmino;
            fromAminoMsg(object: _266.QueryStrdBurnedByAddressResponseAminoMsg): _266.QueryStrdBurnedByAddressResponse;
            fromProtoMsg(message: _266.QueryStrdBurnedByAddressResponseProtoMsg): _266.QueryStrdBurnedByAddressResponse;
            toProto(message: _266.QueryStrdBurnedByAddressResponse): Uint8Array;
            toProtoMsg(message: _266.QueryStrdBurnedByAddressResponse): _266.QueryStrdBurnedByAddressResponseProtoMsg;
        };
        QueryLinkedAddressRequest: {
            typeUrl: string;
            encode(message: _266.QueryLinkedAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _266.QueryLinkedAddressRequest;
            fromPartial(object: Partial<_266.QueryLinkedAddressRequest>): _266.QueryLinkedAddressRequest;
            fromAmino(object: _266.QueryLinkedAddressRequestAmino): _266.QueryLinkedAddressRequest;
            toAmino(message: _266.QueryLinkedAddressRequest): _266.QueryLinkedAddressRequestAmino;
            fromAminoMsg(object: _266.QueryLinkedAddressRequestAminoMsg): _266.QueryLinkedAddressRequest;
            fromProtoMsg(message: _266.QueryLinkedAddressRequestProtoMsg): _266.QueryLinkedAddressRequest;
            toProto(message: _266.QueryLinkedAddressRequest): Uint8Array;
            toProtoMsg(message: _266.QueryLinkedAddressRequest): _266.QueryLinkedAddressRequestProtoMsg;
        };
        QueryLinkedAddressResponse: {
            typeUrl: string;
            encode(message: _266.QueryLinkedAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _266.QueryLinkedAddressResponse;
            fromPartial(object: Partial<_266.QueryLinkedAddressResponse>): _266.QueryLinkedAddressResponse;
            fromAmino(object: _266.QueryLinkedAddressResponseAmino): _266.QueryLinkedAddressResponse;
            toAmino(message: _266.QueryLinkedAddressResponse): _266.QueryLinkedAddressResponseAmino;
            fromAminoMsg(object: _266.QueryLinkedAddressResponseAminoMsg): _266.QueryLinkedAddressResponse;
            fromProtoMsg(message: _266.QueryLinkedAddressResponseProtoMsg): _266.QueryLinkedAddressResponse;
            toProto(message: _266.QueryLinkedAddressResponse): Uint8Array;
            toProtoMsg(message: _266.QueryLinkedAddressResponse): _266.QueryLinkedAddressResponseProtoMsg;
        };
        AddressBurnedAmount: {
            typeUrl: string;
            encode(message: _265.AddressBurnedAmount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _265.AddressBurnedAmount;
            fromPartial(object: Partial<_265.AddressBurnedAmount>): _265.AddressBurnedAmount;
            fromAmino(object: _265.AddressBurnedAmountAmino): _265.AddressBurnedAmount;
            toAmino(message: _265.AddressBurnedAmount): _265.AddressBurnedAmountAmino;
            fromAminoMsg(object: _265.AddressBurnedAmountAminoMsg): _265.AddressBurnedAmount;
            fromProtoMsg(message: _265.AddressBurnedAmountProtoMsg): _265.AddressBurnedAmount;
            toProto(message: _265.AddressBurnedAmount): Uint8Array;
            toProtoMsg(message: _265.AddressBurnedAmount): _265.AddressBurnedAmountProtoMsg;
        };
        LinkedAddresses: {
            typeUrl: string;
            encode(message: _265.LinkedAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _265.LinkedAddresses;
            fromPartial(object: Partial<_265.LinkedAddresses>): _265.LinkedAddresses;
            fromAmino(object: _265.LinkedAddressesAmino): _265.LinkedAddresses;
            toAmino(message: _265.LinkedAddresses): _265.LinkedAddressesAmino;
            fromAminoMsg(object: _265.LinkedAddressesAminoMsg): _265.LinkedAddresses;
            fromProtoMsg(message: _265.LinkedAddressesProtoMsg): _265.LinkedAddresses;
            toProto(message: _265.LinkedAddresses): Uint8Array;
            toProtoMsg(message: _265.LinkedAddresses): _265.LinkedAddressesProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _265.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _265.GenesisState;
            fromPartial(object: Partial<_265.GenesisState>): _265.GenesisState;
            fromAmino(object: _265.GenesisStateAmino): _265.GenesisState;
            toAmino(message: _265.GenesisState): _265.GenesisStateAmino;
            fromAminoMsg(object: _265.GenesisStateAminoMsg): _265.GenesisState;
            fromProtoMsg(message: _265.GenesisStateProtoMsg): _265.GenesisState;
            toProto(message: _265.GenesisState): Uint8Array;
            toProtoMsg(message: _265.GenesisState): _265.GenesisStateProtoMsg;
        };
    };
    const vesting: {
        BaseVestingAccount: {
            typeUrl: string;
            encode(message: _268.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _268.BaseVestingAccount;
            fromPartial(object: Partial<_268.BaseVestingAccount>): _268.BaseVestingAccount;
            fromAmino(object: _268.BaseVestingAccountAmino): _268.BaseVestingAccount;
            toAmino(message: _268.BaseVestingAccount): _268.BaseVestingAccountAmino;
            fromAminoMsg(object: _268.BaseVestingAccountAminoMsg): _268.BaseVestingAccount;
            fromProtoMsg(message: _268.BaseVestingAccountProtoMsg): _268.BaseVestingAccount;
            toProto(message: _268.BaseVestingAccount): Uint8Array;
            toProtoMsg(message: _268.BaseVestingAccount): _268.BaseVestingAccountProtoMsg;
        };
        Period: {
            typeUrl: string;
            encode(message: _268.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _268.Period;
            fromPartial(object: Partial<_268.Period>): _268.Period;
            fromAmino(object: _268.PeriodAmino): _268.Period;
            toAmino(message: _268.Period): _268.PeriodAmino;
            fromAminoMsg(object: _268.PeriodAminoMsg): _268.Period;
            fromProtoMsg(message: _268.PeriodProtoMsg): _268.Period;
            toProto(message: _268.Period): Uint8Array;
            toProtoMsg(message: _268.Period): _268.PeriodProtoMsg;
        };
        StridePeriodicVestingAccount: {
            typeUrl: string;
            encode(message: _268.StridePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _268.StridePeriodicVestingAccount;
            fromPartial(object: Partial<_268.StridePeriodicVestingAccount>): _268.StridePeriodicVestingAccount;
            fromAmino(object: _268.StridePeriodicVestingAccountAmino): _268.StridePeriodicVestingAccount;
            toAmino(message: _268.StridePeriodicVestingAccount): _268.StridePeriodicVestingAccountAmino;
            fromAminoMsg(object: _268.StridePeriodicVestingAccountAminoMsg): _268.StridePeriodicVestingAccount;
            toAminoMsg(message: _268.StridePeriodicVestingAccount): _268.StridePeriodicVestingAccountAminoMsg;
            fromProtoMsg(message: _268.StridePeriodicVestingAccountProtoMsg): _268.StridePeriodicVestingAccount;
            toProto(message: _268.StridePeriodicVestingAccount): Uint8Array;
            toProtoMsg(message: _268.StridePeriodicVestingAccount): _268.StridePeriodicVestingAccountProtoMsg;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                circuit: {
                    v1: import("../cosmos/circuit/v1/tx.rpc.msg").MsgClientImpl;
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/tx.rpc.msg").MsgClientImpl;
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
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            stride: {
                airdrop: _431.MsgClientImpl;
                auction: _432.MsgClientImpl;
                claim: _433.MsgClientImpl;
                icaoracle: _434.MsgClientImpl;
                icqoracle: _435.MsgClientImpl;
                interchainquery: {
                    v1: _436.MsgClientImpl;
                };
                stakedym: _437.MsgClientImpl;
                stakeibc: _438.MsgClientImpl;
                staketia: _439.MsgClientImpl;
                strdburner: _440.MsgClientImpl;
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                        accountInfo(request: import("../cosmos/auth/v1beta1/query").QueryAccountInfoRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: import("../cosmos/autocli/v1/query").AppOptionsRequest): Promise<import("../cosmos/autocli/v1/query").AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomMetadataByQueryString(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataByQueryStringRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataByQueryStringResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                        denomOwnersByQuery(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersByQueryRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersByQueryResponse>;
                        sendEnabled(request: import("../cosmos/bank/v1beta1/query").QuerySendEnabledRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                            status(request?: import("../cosmos/base/node/v1beta1/query").StatusRequest): Promise<import("../cosmos/base/node/v1beta1/query").StatusResponse>;
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
                            aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>;
                        };
                    };
                };
                circuit: {
                    v1: {
                        account(request: import("../cosmos/circuit/v1/query").QueryAccountRequest): Promise<import("../cosmos/circuit/v1/query").AccountResponse>;
                        accounts(request?: import("../cosmos/circuit/v1/query").QueryAccountsRequest): Promise<import("../cosmos/circuit/v1/query").AccountsResponse>;
                        disabledList(request?: import("../cosmos/circuit/v1/query").QueryDisabledListRequest): Promise<import("../cosmos/circuit/v1/query").DisabledListResponse>;
                    };
                };
                consensus: {
                    v1: {
                        params(request?: import("../cosmos/consensus/v1/query").QueryParamsRequest): Promise<import("../cosmos/consensus/v1/query").QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorDistributionInfo(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoResponse>;
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
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        constitution(request?: import("../cosmos/gov/v1/query").QueryConstitutionRequest): Promise<import("../cosmos/gov/v1/query").QueryConstitutionResponse>;
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
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
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                        groups(request?: import("../cosmos/group/v1/query").QueryGroupsRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: import("../cosmos/orm/query/v1alpha1/query").GetRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").GetResponse>;
                            list(request: import("../cosmos/orm/query/v1alpha1/query").ListRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
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
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                        txDecode(request: import("../cosmos/tx/v1beta1/service").TxDecodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeResponse>;
                        txEncode(request: import("../cosmos/tx/v1beta1/service").TxEncodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeResponse>;
                        txEncodeAmino(request: import("../cosmos/tx/v1beta1/service").TxEncodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeAminoResponse>;
                        txDecodeAmino(request: import("../cosmos/tx/v1beta1/service").TxDecodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            stride: {
                airdrop: {
                    airdrop(request: _202.QueryAirdropRequest): Promise<_202.QueryAirdropResponse>;
                    allAirdrops(request?: _202.QueryAllAirdropsRequest): Promise<_202.QueryAllAirdropsResponse>;
                    userAllocation(request: _202.QueryUserAllocationRequest): Promise<_202.QueryUserAllocationResponse>;
                    userAllocations(request: _202.QueryUserAllocationsRequest): Promise<_202.QueryUserAllocationsResponse>;
                    allAllocations(request: _202.QueryAllAllocationsRequest): Promise<_202.QueryAllAllocationsResponse>;
                    userSummary(request: _202.QueryUserSummaryRequest): Promise<_202.QueryUserSummaryResponse>;
                };
                auction: {
                    auction(request: _206.QueryAuctionRequest): Promise<_206.QueryAuctionResponse>;
                    auctions(request?: _206.QueryAuctionsRequest): Promise<_206.QueryAuctionsResponse>;
                };
                autopilot: {
                    params(request?: _210.QueryParamsRequest): Promise<_210.QueryParamsResponse>;
                };
                claim: {
                    distributorAccountBalance(request: _214.QueryDistributorAccountBalanceRequest): Promise<_214.QueryDistributorAccountBalanceResponse>;
                    params(request?: _214.QueryParamsRequest): Promise<_214.QueryParamsResponse>;
                    claimRecord(request: _214.QueryClaimRecordRequest): Promise<_214.QueryClaimRecordResponse>;
                    claimableForAction(request: _214.QueryClaimableForActionRequest): Promise<_214.QueryClaimableForActionResponse>;
                    totalClaimable(request: _214.QueryTotalClaimableRequest): Promise<_214.QueryTotalClaimableResponse>;
                    userVestings(request: _214.QueryUserVestingsRequest): Promise<_214.QueryUserVestingsResponse>;
                    claimStatus(request: _214.QueryClaimStatusRequest): Promise<_214.QueryClaimStatusResponse>;
                    claimMetadata(request?: _214.QueryClaimMetadataRequest): Promise<_214.QueryClaimMetadataResponse>;
                };
                epochs: {
                    epochInfos(request?: _217.QueryEpochsInfoRequest): Promise<_217.QueryEpochsInfoResponse>;
                    currentEpoch(request: _217.QueryCurrentEpochRequest): Promise<_217.QueryCurrentEpochResponse>;
                    epochInfo(request: _217.QueryEpochInfoRequest): Promise<_217.QueryEpochInfoResponse>;
                };
                icacallbacks: {
                    params(request?: _222.QueryParamsRequest): Promise<_222.QueryParamsResponse>;
                    callbackData(request: _222.QueryGetCallbackDataRequest): Promise<_222.QueryGetCallbackDataResponse>;
                    callbackDataAll(request?: _222.QueryAllCallbackDataRequest): Promise<_222.QueryAllCallbackDataResponse>;
                };
                icaoracle: {
                    oracle(request: _227.QueryOracleRequest): Promise<_227.QueryOracleResponse>;
                    allOracles(request?: _227.QueryAllOraclesRequest): Promise<_227.QueryAllOraclesResponse>;
                    activeOracles(request: _227.QueryActiveOraclesRequest): Promise<_227.QueryActiveOraclesResponse>;
                    metrics(request: _227.QueryMetricsRequest): Promise<_227.QueryMetricsResponse>;
                };
                icqoracle: {
                    tokenPrice(request: _231.QueryTokenPriceRequest): Promise<_231.TokenPriceResponse>;
                    tokenPrices(request?: _231.QueryTokenPricesRequest): Promise<_231.QueryTokenPricesResponse>;
                    params(request?: _231.QueryParamsRequest): Promise<_231.QueryParamsResponse>;
                    tokenPriceForQuoteDenom(request: _231.QueryTokenPriceForQuoteDenomRequest): Promise<_231.QueryTokenPriceForQuoteDenomResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _238.QueryParamsRequest): Promise<_238.QueryParamsResponse>;
                        epochProvisions(request?: _238.QueryEpochProvisionsRequest): Promise<_238.QueryEpochProvisionsResponse>;
                    };
                };
                records: {
                    params(request?: _242.QueryParamsRequest): Promise<_242.QueryParamsResponse>;
                    userRedemptionRecord(request: _242.QueryGetUserRedemptionRecordRequest): Promise<_242.QueryGetUserRedemptionRecordResponse>;
                    userRedemptionRecordAll(request?: _242.QueryAllUserRedemptionRecordRequest): Promise<_242.QueryAllUserRedemptionRecordResponse>;
                    userRedemptionRecordForUser(request: _242.QueryAllUserRedemptionRecordForUserRequest): Promise<_242.QueryAllUserRedemptionRecordForUserResponse>;
                    epochUnbondingRecord(request: _242.QueryGetEpochUnbondingRecordRequest): Promise<_242.QueryGetEpochUnbondingRecordResponse>;
                    epochUnbondingRecordAll(request?: _242.QueryAllEpochUnbondingRecordRequest): Promise<_242.QueryAllEpochUnbondingRecordResponse>;
                    depositRecord(request: _242.QueryGetDepositRecordRequest): Promise<_242.QueryGetDepositRecordResponse>;
                    depositRecordAll(request?: _242.QueryAllDepositRecordRequest): Promise<_242.QueryAllDepositRecordResponse>;
                    depositRecordByHost(request: _242.QueryDepositRecordByHostRequest): Promise<_242.QueryDepositRecordByHostResponse>;
                    lSMDeposit(request: _242.QueryLSMDepositRequest): Promise<_242.QueryLSMDepositResponse>;
                    lSMDeposits(request: _242.QueryLSMDepositsRequest): Promise<_242.QueryLSMDepositsResponse>;
                };
                stakedym: {
                    hostZone(request?: _245.QueryHostZoneRequest): Promise<_245.QueryHostZoneResponse>;
                    delegationRecords(request: _245.QueryDelegationRecordsRequest): Promise<_245.QueryDelegationRecordsResponse>;
                    unbondingRecords(request: _245.QueryUnbondingRecordsRequest): Promise<_245.QueryUnbondingRecordsResponse>;
                    redemptionRecord(request: _245.QueryRedemptionRecordRequest): Promise<_245.QueryRedemptionRecordResponse>;
                    redemptionRecords(request: _245.QueryRedemptionRecordsRequest): Promise<_245.QueryRedemptionRecordsResponse>;
                    slashRecords(request?: _245.QuerySlashRecordsRequest): Promise<_245.QuerySlashRecordsResponse>;
                };
                stakeibc: {
                    params(request?: _257.QueryParamsRequest): Promise<_257.QueryParamsResponse>;
                    validators(request: _257.QueryGetValidatorsRequest): Promise<_257.QueryGetValidatorsResponse>;
                    hostZone(request: _257.QueryGetHostZoneRequest): Promise<_257.QueryGetHostZoneResponse>;
                    hostZoneAll(request?: _257.QueryAllHostZoneRequest): Promise<_257.QueryAllHostZoneResponse>;
                    moduleAddress(request: _257.QueryModuleAddressRequest): Promise<_257.QueryModuleAddressResponse>;
                    interchainAccountFromAddress(request: _257.QueryInterchainAccountFromAddressRequest): Promise<_257.QueryInterchainAccountFromAddressResponse>;
                    epochTracker(request: _257.QueryGetEpochTrackerRequest): Promise<_257.QueryGetEpochTrackerResponse>;
                    epochTrackerAll(request?: _257.QueryAllEpochTrackerRequest): Promise<_257.QueryAllEpochTrackerResponse>;
                    nextPacketSequence(request: _257.QueryGetNextPacketSequenceRequest): Promise<_257.QueryGetNextPacketSequenceResponse>;
                    addressUnbondings(request: _257.QueryAddressUnbondings): Promise<_257.QueryAddressUnbondingsResponse>;
                    allTradeRoutes(request?: _257.QueryAllTradeRoutes): Promise<_257.QueryAllTradeRoutesResponse>;
                };
                staketia: {
                    hostZone(request?: _262.QueryHostZoneRequest): Promise<_262.QueryHostZoneResponse>;
                    delegationRecords(request: _262.QueryDelegationRecordsRequest): Promise<_262.QueryDelegationRecordsResponse>;
                    unbondingRecords(request: _262.QueryUnbondingRecordsRequest): Promise<_262.QueryUnbondingRecordsResponse>;
                    redemptionRecord(request: _262.QueryRedemptionRecordRequest): Promise<_262.QueryRedemptionRecordResponse>;
                    redemptionRecords(request: _262.QueryRedemptionRecordsRequest): Promise<_262.QueryRedemptionRecordsResponse>;
                    slashRecords(request?: _262.QuerySlashRecordsRequest): Promise<_262.QuerySlashRecordsResponse>;
                };
                strdburner: {
                    strdBurnerAddress(request?: _266.QueryStrdBurnerAddressRequest): Promise<_266.QueryStrdBurnerAddressResponse>;
                    totalStrdBurned(request?: _266.QueryTotalStrdBurnedRequest): Promise<_266.QueryTotalStrdBurnedResponse>;
                    strdBurnedByAddress(request: _266.QueryStrdBurnedByAddressRequest): Promise<_266.QueryStrdBurnedByAddressResponse>;
                    linkedAddress(request: _266.QueryLinkedAddressRequest): Promise<_266.QueryLinkedAddressResponse>;
                };
            };
        }>;
    };
}
