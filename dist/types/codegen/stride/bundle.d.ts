import * as _194 from "./airdrop/airdrop";
import * as _195 from "./airdrop/genesis";
import * as _196 from "./airdrop/query";
import * as _197 from "./airdrop/tx";
import * as _198 from "./auction/auction";
import * as _199 from "./auction/genesis";
import * as _200 from "./auction/query";
import * as _201 from "./auction/tx";
import * as _202 from "./autopilot/genesis";
import * as _203 from "./autopilot/params";
import * as _204 from "./autopilot/query";
import * as _205 from "./claim/claim";
import * as _206 from "./claim/genesis";
import * as _207 from "./claim/params";
import * as _208 from "./claim/query";
import * as _209 from "./claim/tx";
import * as _210 from "./epochs/genesis";
import * as _211 from "./epochs/query";
import * as _212 from "./icacallbacks/callback_data";
import * as _213 from "./icacallbacks/genesis";
import * as _214 from "./icacallbacks/packet";
import * as _215 from "./icacallbacks/params";
import * as _216 from "./icacallbacks/query";
import * as _217 from "./icaoracle/callbacks";
import * as _218 from "./icaoracle/contract";
import * as _219 from "./icaoracle/genesis";
import * as _220 from "./icaoracle/icaoracle";
import * as _221 from "./icaoracle/query";
import * as _222 from "./icaoracle/tx";
import * as _223 from "./icqoracle/genesis";
import * as _224 from "./icqoracle/icqoracle";
import * as _225 from "./icqoracle/query";
import * as _226 from "./icqoracle/tx";
import * as _227 from "./interchainquery/v1/genesis";
import * as _228 from "./interchainquery/v1/query";
import * as _229 from "./interchainquery/v1/tx";
import * as _230 from "./mint/v1beta1/genesis";
import * as _231 from "./mint/v1beta1/mint";
import * as _232 from "./mint/v1beta1/query";
import * as _233 from "./records/callbacks";
import * as _234 from "./records/genesis";
import * as _235 from "./records/params";
import * as _236 from "./records/query";
import * as _237 from "./records/records";
import * as _238 from "./stakedym/genesis";
import * as _239 from "./stakedym/query";
import * as _240 from "./stakedym/stakedym";
import * as _241 from "./stakedym/tx";
import * as _242 from "./stakeibc/address_unbonding";
import * as _243 from "./stakeibc/callbacks";
import * as _244 from "./stakeibc/epoch_tracker";
import * as _245 from "./stakeibc/genesis";
import * as _246 from "./stakeibc/gov";
import * as _247 from "./stakeibc/host_zone";
import * as _248 from "./stakeibc/ica_account";
import * as _249 from "./stakeibc/packet";
import * as _250 from "./stakeibc/params";
import * as _251 from "./stakeibc/query";
import * as _252 from "./stakeibc/trade_route";
import * as _253 from "./stakeibc/tx";
import * as _254 from "./stakeibc/validator";
import * as _255 from "./staketia/genesis";
import * as _256 from "./staketia/query";
import * as _257 from "./staketia/staketia";
import * as _258 from "./staketia/tx";
import * as _259 from "./strdburner/genesis";
import * as _260 from "./strdburner/query";
import * as _261 from "./vesting/vesting";
import * as _404 from "./airdrop/query.rpc.Query";
import * as _405 from "./auction/query.rpc.Query";
import * as _406 from "./autopilot/query.rpc.Query";
import * as _407 from "./claim/query.rpc.Query";
import * as _408 from "./epochs/query.rpc.Query";
import * as _409 from "./icacallbacks/query.rpc.Query";
import * as _410 from "./icaoracle/query.rpc.Query";
import * as _411 from "./icqoracle/query.rpc.Query";
import * as _412 from "./mint/v1beta1/query.rpc.Query";
import * as _413 from "./records/query.rpc.Query";
import * as _414 from "./stakedym/query.rpc.Query";
import * as _415 from "./stakeibc/query.rpc.Query";
import * as _416 from "./staketia/query.rpc.Query";
import * as _417 from "./strdburner/query.rpc.Query";
import * as _418 from "./airdrop/tx.rpc.msg";
import * as _419 from "./auction/tx.rpc.msg";
import * as _420 from "./claim/tx.rpc.msg";
import * as _421 from "./icaoracle/tx.rpc.msg";
import * as _422 from "./icqoracle/tx.rpc.msg";
import * as _423 from "./interchainquery/v1/tx.rpc.msg";
import * as _424 from "./stakedym/tx.rpc.msg";
import * as _425 from "./stakeibc/tx.rpc.msg";
import * as _426 from "./staketia/tx.rpc.msg";
export declare namespace stride {
    const airdrop: {
        MsgClientImpl: typeof _418.MsgClientImpl;
        QueryClientImpl: typeof _404.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            airdrop(request: _196.QueryAirdropRequest): Promise<_196.QueryAirdropResponse>;
            allAirdrops(request?: _196.QueryAllAirdropsRequest): Promise<_196.QueryAllAirdropsResponse>;
            userAllocation(request: _196.QueryUserAllocationRequest): Promise<_196.QueryUserAllocationResponse>;
            userAllocations(request: _196.QueryUserAllocationsRequest): Promise<_196.QueryUserAllocationsResponse>;
            allAllocations(request: _196.QueryAllAllocationsRequest): Promise<_196.QueryAllAllocationsResponse>;
            userSummary(request: _196.QueryUserSummaryRequest): Promise<_196.QueryUserSummaryResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                claimDaily(value: _197.MsgClaimDaily): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimEarly(value: _197.MsgClaimEarly): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAirdrop(value: _197.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateAirdrop(value: _197.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addAllocations(value: _197.MsgAddAllocations): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateUserAllocation(value: _197.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                linkAddresses(value: _197.MsgLinkAddresses): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                claimDaily(value: _197.MsgClaimDaily): {
                    typeUrl: string;
                    value: _197.MsgClaimDaily;
                };
                claimEarly(value: _197.MsgClaimEarly): {
                    typeUrl: string;
                    value: _197.MsgClaimEarly;
                };
                createAirdrop(value: _197.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _197.MsgCreateAirdrop;
                };
                updateAirdrop(value: _197.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: _197.MsgUpdateAirdrop;
                };
                addAllocations(value: _197.MsgAddAllocations): {
                    typeUrl: string;
                    value: _197.MsgAddAllocations;
                };
                updateUserAllocation(value: _197.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: _197.MsgUpdateUserAllocation;
                };
                linkAddresses(value: _197.MsgLinkAddresses): {
                    typeUrl: string;
                    value: _197.MsgLinkAddresses;
                };
            };
            fromPartial: {
                claimDaily(value: _197.MsgClaimDaily): {
                    typeUrl: string;
                    value: _197.MsgClaimDaily;
                };
                claimEarly(value: _197.MsgClaimEarly): {
                    typeUrl: string;
                    value: _197.MsgClaimEarly;
                };
                createAirdrop(value: _197.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _197.MsgCreateAirdrop;
                };
                updateAirdrop(value: _197.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: _197.MsgUpdateAirdrop;
                };
                addAllocations(value: _197.MsgAddAllocations): {
                    typeUrl: string;
                    value: _197.MsgAddAllocations;
                };
                updateUserAllocation(value: _197.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: _197.MsgUpdateUserAllocation;
                };
                linkAddresses(value: _197.MsgLinkAddresses): {
                    typeUrl: string;
                    value: _197.MsgLinkAddresses;
                };
            };
        };
        AminoConverter: {
            "/stride.airdrop.MsgClaimDaily": {
                aminoType: string;
                toAmino: (message: _197.MsgClaimDaily) => _197.MsgClaimDailyAmino;
                fromAmino: (object: _197.MsgClaimDailyAmino) => _197.MsgClaimDaily;
            };
            "/stride.airdrop.MsgClaimEarly": {
                aminoType: string;
                toAmino: (message: _197.MsgClaimEarly) => _197.MsgClaimEarlyAmino;
                fromAmino: (object: _197.MsgClaimEarlyAmino) => _197.MsgClaimEarly;
            };
            "/stride.airdrop.MsgCreateAirdrop": {
                aminoType: string;
                toAmino: (message: _197.MsgCreateAirdrop) => _197.MsgCreateAirdropAmino;
                fromAmino: (object: _197.MsgCreateAirdropAmino) => _197.MsgCreateAirdrop;
            };
            "/stride.airdrop.MsgUpdateAirdrop": {
                aminoType: string;
                toAmino: (message: _197.MsgUpdateAirdrop) => _197.MsgUpdateAirdropAmino;
                fromAmino: (object: _197.MsgUpdateAirdropAmino) => _197.MsgUpdateAirdrop;
            };
            "/stride.airdrop.MsgAddAllocations": {
                aminoType: string;
                toAmino: (message: _197.MsgAddAllocations) => _197.MsgAddAllocationsAmino;
                fromAmino: (object: _197.MsgAddAllocationsAmino) => _197.MsgAddAllocations;
            };
            "/stride.airdrop.MsgUpdateUserAllocation": {
                aminoType: string;
                toAmino: (message: _197.MsgUpdateUserAllocation) => _197.MsgUpdateUserAllocationAmino;
                fromAmino: (object: _197.MsgUpdateUserAllocationAmino) => _197.MsgUpdateUserAllocation;
            };
            "/stride.airdrop.MsgLinkAddresses": {
                aminoType: string;
                toAmino: (message: _197.MsgLinkAddresses) => _197.MsgLinkAddressesAmino;
                fromAmino: (object: _197.MsgLinkAddressesAmino) => _197.MsgLinkAddresses;
            };
        };
        MsgClaimDaily: {
            typeUrl: string;
            encode(message: _197.MsgClaimDaily, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgClaimDaily;
            fromPartial(object: Partial<_197.MsgClaimDaily>): _197.MsgClaimDaily;
            fromAmino(object: _197.MsgClaimDailyAmino): _197.MsgClaimDaily;
            toAmino(message: _197.MsgClaimDaily): _197.MsgClaimDailyAmino;
            fromAminoMsg(object: _197.MsgClaimDailyAminoMsg): _197.MsgClaimDaily;
            toAminoMsg(message: _197.MsgClaimDaily): _197.MsgClaimDailyAminoMsg;
            fromProtoMsg(message: _197.MsgClaimDailyProtoMsg): _197.MsgClaimDaily;
            toProto(message: _197.MsgClaimDaily): Uint8Array;
            toProtoMsg(message: _197.MsgClaimDaily): _197.MsgClaimDailyProtoMsg;
        };
        MsgClaimDailyResponse: {
            typeUrl: string;
            encode(_: _197.MsgClaimDailyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgClaimDailyResponse;
            fromPartial(_: Partial<_197.MsgClaimDailyResponse>): _197.MsgClaimDailyResponse;
            fromAmino(_: _197.MsgClaimDailyResponseAmino): _197.MsgClaimDailyResponse;
            toAmino(_: _197.MsgClaimDailyResponse): _197.MsgClaimDailyResponseAmino;
            fromAminoMsg(object: _197.MsgClaimDailyResponseAminoMsg): _197.MsgClaimDailyResponse;
            fromProtoMsg(message: _197.MsgClaimDailyResponseProtoMsg): _197.MsgClaimDailyResponse;
            toProto(message: _197.MsgClaimDailyResponse): Uint8Array;
            toProtoMsg(message: _197.MsgClaimDailyResponse): _197.MsgClaimDailyResponseProtoMsg;
        };
        MsgClaimEarly: {
            typeUrl: string;
            encode(message: _197.MsgClaimEarly, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgClaimEarly;
            fromPartial(object: Partial<_197.MsgClaimEarly>): _197.MsgClaimEarly;
            fromAmino(object: _197.MsgClaimEarlyAmino): _197.MsgClaimEarly;
            toAmino(message: _197.MsgClaimEarly): _197.MsgClaimEarlyAmino;
            fromAminoMsg(object: _197.MsgClaimEarlyAminoMsg): _197.MsgClaimEarly;
            toAminoMsg(message: _197.MsgClaimEarly): _197.MsgClaimEarlyAminoMsg;
            fromProtoMsg(message: _197.MsgClaimEarlyProtoMsg): _197.MsgClaimEarly;
            toProto(message: _197.MsgClaimEarly): Uint8Array;
            toProtoMsg(message: _197.MsgClaimEarly): _197.MsgClaimEarlyProtoMsg;
        };
        MsgClaimEarlyResponse: {
            typeUrl: string;
            encode(_: _197.MsgClaimEarlyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgClaimEarlyResponse;
            fromPartial(_: Partial<_197.MsgClaimEarlyResponse>): _197.MsgClaimEarlyResponse;
            fromAmino(_: _197.MsgClaimEarlyResponseAmino): _197.MsgClaimEarlyResponse;
            toAmino(_: _197.MsgClaimEarlyResponse): _197.MsgClaimEarlyResponseAmino;
            fromAminoMsg(object: _197.MsgClaimEarlyResponseAminoMsg): _197.MsgClaimEarlyResponse;
            fromProtoMsg(message: _197.MsgClaimEarlyResponseProtoMsg): _197.MsgClaimEarlyResponse;
            toProto(message: _197.MsgClaimEarlyResponse): Uint8Array;
            toProtoMsg(message: _197.MsgClaimEarlyResponse): _197.MsgClaimEarlyResponseProtoMsg;
        };
        MsgCreateAirdrop: {
            typeUrl: string;
            encode(message: _197.MsgCreateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgCreateAirdrop;
            fromPartial(object: Partial<_197.MsgCreateAirdrop>): _197.MsgCreateAirdrop;
            fromAmino(object: _197.MsgCreateAirdropAmino): _197.MsgCreateAirdrop;
            toAmino(message: _197.MsgCreateAirdrop): _197.MsgCreateAirdropAmino;
            fromAminoMsg(object: _197.MsgCreateAirdropAminoMsg): _197.MsgCreateAirdrop;
            toAminoMsg(message: _197.MsgCreateAirdrop): _197.MsgCreateAirdropAminoMsg;
            fromProtoMsg(message: _197.MsgCreateAirdropProtoMsg): _197.MsgCreateAirdrop;
            toProto(message: _197.MsgCreateAirdrop): Uint8Array;
            toProtoMsg(message: _197.MsgCreateAirdrop): _197.MsgCreateAirdropProtoMsg;
        };
        MsgCreateAirdropResponse: {
            typeUrl: string;
            encode(_: _197.MsgCreateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgCreateAirdropResponse;
            fromPartial(_: Partial<_197.MsgCreateAirdropResponse>): _197.MsgCreateAirdropResponse;
            fromAmino(_: _197.MsgCreateAirdropResponseAmino): _197.MsgCreateAirdropResponse;
            toAmino(_: _197.MsgCreateAirdropResponse): _197.MsgCreateAirdropResponseAmino;
            fromAminoMsg(object: _197.MsgCreateAirdropResponseAminoMsg): _197.MsgCreateAirdropResponse;
            fromProtoMsg(message: _197.MsgCreateAirdropResponseProtoMsg): _197.MsgCreateAirdropResponse;
            toProto(message: _197.MsgCreateAirdropResponse): Uint8Array;
            toProtoMsg(message: _197.MsgCreateAirdropResponse): _197.MsgCreateAirdropResponseProtoMsg;
        };
        MsgUpdateAirdrop: {
            typeUrl: string;
            encode(message: _197.MsgUpdateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgUpdateAirdrop;
            fromPartial(object: Partial<_197.MsgUpdateAirdrop>): _197.MsgUpdateAirdrop;
            fromAmino(object: _197.MsgUpdateAirdropAmino): _197.MsgUpdateAirdrop;
            toAmino(message: _197.MsgUpdateAirdrop): _197.MsgUpdateAirdropAmino;
            fromAminoMsg(object: _197.MsgUpdateAirdropAminoMsg): _197.MsgUpdateAirdrop;
            toAminoMsg(message: _197.MsgUpdateAirdrop): _197.MsgUpdateAirdropAminoMsg;
            fromProtoMsg(message: _197.MsgUpdateAirdropProtoMsg): _197.MsgUpdateAirdrop;
            toProto(message: _197.MsgUpdateAirdrop): Uint8Array;
            toProtoMsg(message: _197.MsgUpdateAirdrop): _197.MsgUpdateAirdropProtoMsg;
        };
        MsgUpdateAirdropResponse: {
            typeUrl: string;
            encode(_: _197.MsgUpdateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgUpdateAirdropResponse;
            fromPartial(_: Partial<_197.MsgUpdateAirdropResponse>): _197.MsgUpdateAirdropResponse;
            fromAmino(_: _197.MsgUpdateAirdropResponseAmino): _197.MsgUpdateAirdropResponse;
            toAmino(_: _197.MsgUpdateAirdropResponse): _197.MsgUpdateAirdropResponseAmino;
            fromAminoMsg(object: _197.MsgUpdateAirdropResponseAminoMsg): _197.MsgUpdateAirdropResponse;
            fromProtoMsg(message: _197.MsgUpdateAirdropResponseProtoMsg): _197.MsgUpdateAirdropResponse;
            toProto(message: _197.MsgUpdateAirdropResponse): Uint8Array;
            toProtoMsg(message: _197.MsgUpdateAirdropResponse): _197.MsgUpdateAirdropResponseProtoMsg;
        };
        RawAllocation: {
            typeUrl: string;
            encode(message: _197.RawAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.RawAllocation;
            fromPartial(object: Partial<_197.RawAllocation>): _197.RawAllocation;
            fromAmino(object: _197.RawAllocationAmino): _197.RawAllocation;
            toAmino(message: _197.RawAllocation): _197.RawAllocationAmino;
            fromAminoMsg(object: _197.RawAllocationAminoMsg): _197.RawAllocation;
            fromProtoMsg(message: _197.RawAllocationProtoMsg): _197.RawAllocation;
            toProto(message: _197.RawAllocation): Uint8Array;
            toProtoMsg(message: _197.RawAllocation): _197.RawAllocationProtoMsg;
        };
        MsgAddAllocations: {
            typeUrl: string;
            encode(message: _197.MsgAddAllocations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgAddAllocations;
            fromPartial(object: Partial<_197.MsgAddAllocations>): _197.MsgAddAllocations;
            fromAmino(object: _197.MsgAddAllocationsAmino): _197.MsgAddAllocations;
            toAmino(message: _197.MsgAddAllocations): _197.MsgAddAllocationsAmino;
            fromAminoMsg(object: _197.MsgAddAllocationsAminoMsg): _197.MsgAddAllocations;
            toAminoMsg(message: _197.MsgAddAllocations): _197.MsgAddAllocationsAminoMsg;
            fromProtoMsg(message: _197.MsgAddAllocationsProtoMsg): _197.MsgAddAllocations;
            toProto(message: _197.MsgAddAllocations): Uint8Array;
            toProtoMsg(message: _197.MsgAddAllocations): _197.MsgAddAllocationsProtoMsg;
        };
        MsgAddAllocationsResponse: {
            typeUrl: string;
            encode(_: _197.MsgAddAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgAddAllocationsResponse;
            fromPartial(_: Partial<_197.MsgAddAllocationsResponse>): _197.MsgAddAllocationsResponse;
            fromAmino(_: _197.MsgAddAllocationsResponseAmino): _197.MsgAddAllocationsResponse;
            toAmino(_: _197.MsgAddAllocationsResponse): _197.MsgAddAllocationsResponseAmino;
            fromAminoMsg(object: _197.MsgAddAllocationsResponseAminoMsg): _197.MsgAddAllocationsResponse;
            fromProtoMsg(message: _197.MsgAddAllocationsResponseProtoMsg): _197.MsgAddAllocationsResponse;
            toProto(message: _197.MsgAddAllocationsResponse): Uint8Array;
            toProtoMsg(message: _197.MsgAddAllocationsResponse): _197.MsgAddAllocationsResponseProtoMsg;
        };
        MsgUpdateUserAllocation: {
            typeUrl: string;
            encode(message: _197.MsgUpdateUserAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgUpdateUserAllocation;
            fromPartial(object: Partial<_197.MsgUpdateUserAllocation>): _197.MsgUpdateUserAllocation;
            fromAmino(object: _197.MsgUpdateUserAllocationAmino): _197.MsgUpdateUserAllocation;
            toAmino(message: _197.MsgUpdateUserAllocation): _197.MsgUpdateUserAllocationAmino;
            fromAminoMsg(object: _197.MsgUpdateUserAllocationAminoMsg): _197.MsgUpdateUserAllocation;
            toAminoMsg(message: _197.MsgUpdateUserAllocation): _197.MsgUpdateUserAllocationAminoMsg;
            fromProtoMsg(message: _197.MsgUpdateUserAllocationProtoMsg): _197.MsgUpdateUserAllocation;
            toProto(message: _197.MsgUpdateUserAllocation): Uint8Array;
            toProtoMsg(message: _197.MsgUpdateUserAllocation): _197.MsgUpdateUserAllocationProtoMsg;
        };
        MsgUpdateUserAllocationResponse: {
            typeUrl: string;
            encode(_: _197.MsgUpdateUserAllocationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgUpdateUserAllocationResponse;
            fromPartial(_: Partial<_197.MsgUpdateUserAllocationResponse>): _197.MsgUpdateUserAllocationResponse;
            fromAmino(_: _197.MsgUpdateUserAllocationResponseAmino): _197.MsgUpdateUserAllocationResponse;
            toAmino(_: _197.MsgUpdateUserAllocationResponse): _197.MsgUpdateUserAllocationResponseAmino;
            fromAminoMsg(object: _197.MsgUpdateUserAllocationResponseAminoMsg): _197.MsgUpdateUserAllocationResponse;
            fromProtoMsg(message: _197.MsgUpdateUserAllocationResponseProtoMsg): _197.MsgUpdateUserAllocationResponse;
            toProto(message: _197.MsgUpdateUserAllocationResponse): Uint8Array;
            toProtoMsg(message: _197.MsgUpdateUserAllocationResponse): _197.MsgUpdateUserAllocationResponseProtoMsg;
        };
        MsgLinkAddresses: {
            typeUrl: string;
            encode(message: _197.MsgLinkAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgLinkAddresses;
            fromPartial(object: Partial<_197.MsgLinkAddresses>): _197.MsgLinkAddresses;
            fromAmino(object: _197.MsgLinkAddressesAmino): _197.MsgLinkAddresses;
            toAmino(message: _197.MsgLinkAddresses): _197.MsgLinkAddressesAmino;
            fromAminoMsg(object: _197.MsgLinkAddressesAminoMsg): _197.MsgLinkAddresses;
            toAminoMsg(message: _197.MsgLinkAddresses): _197.MsgLinkAddressesAminoMsg;
            fromProtoMsg(message: _197.MsgLinkAddressesProtoMsg): _197.MsgLinkAddresses;
            toProto(message: _197.MsgLinkAddresses): Uint8Array;
            toProtoMsg(message: _197.MsgLinkAddresses): _197.MsgLinkAddressesProtoMsg;
        };
        MsgLinkAddressesResponse: {
            typeUrl: string;
            encode(_: _197.MsgLinkAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgLinkAddressesResponse;
            fromPartial(_: Partial<_197.MsgLinkAddressesResponse>): _197.MsgLinkAddressesResponse;
            fromAmino(_: _197.MsgLinkAddressesResponseAmino): _197.MsgLinkAddressesResponse;
            toAmino(_: _197.MsgLinkAddressesResponse): _197.MsgLinkAddressesResponseAmino;
            fromAminoMsg(object: _197.MsgLinkAddressesResponseAminoMsg): _197.MsgLinkAddressesResponse;
            fromProtoMsg(message: _197.MsgLinkAddressesResponseProtoMsg): _197.MsgLinkAddressesResponse;
            toProto(message: _197.MsgLinkAddressesResponse): Uint8Array;
            toProtoMsg(message: _197.MsgLinkAddressesResponse): _197.MsgLinkAddressesResponseProtoMsg;
        };
        QueryAirdropRequest: {
            typeUrl: string;
            encode(message: _196.QueryAirdropRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryAirdropRequest;
            fromPartial(object: Partial<_196.QueryAirdropRequest>): _196.QueryAirdropRequest;
            fromAmino(object: _196.QueryAirdropRequestAmino): _196.QueryAirdropRequest;
            toAmino(message: _196.QueryAirdropRequest): _196.QueryAirdropRequestAmino;
            fromAminoMsg(object: _196.QueryAirdropRequestAminoMsg): _196.QueryAirdropRequest;
            fromProtoMsg(message: _196.QueryAirdropRequestProtoMsg): _196.QueryAirdropRequest;
            toProto(message: _196.QueryAirdropRequest): Uint8Array;
            toProtoMsg(message: _196.QueryAirdropRequest): _196.QueryAirdropRequestProtoMsg;
        };
        QueryAirdropResponse: {
            typeUrl: string;
            encode(message: _196.QueryAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryAirdropResponse;
            fromPartial(object: Partial<_196.QueryAirdropResponse>): _196.QueryAirdropResponse;
            fromAmino(object: _196.QueryAirdropResponseAmino): _196.QueryAirdropResponse;
            toAmino(message: _196.QueryAirdropResponse): _196.QueryAirdropResponseAmino;
            fromAminoMsg(object: _196.QueryAirdropResponseAminoMsg): _196.QueryAirdropResponse;
            fromProtoMsg(message: _196.QueryAirdropResponseProtoMsg): _196.QueryAirdropResponse;
            toProto(message: _196.QueryAirdropResponse): Uint8Array;
            toProtoMsg(message: _196.QueryAirdropResponse): _196.QueryAirdropResponseProtoMsg;
        };
        QueryAllAirdropsRequest: {
            typeUrl: string;
            encode(_: _196.QueryAllAirdropsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryAllAirdropsRequest;
            fromPartial(_: Partial<_196.QueryAllAirdropsRequest>): _196.QueryAllAirdropsRequest;
            fromAmino(_: _196.QueryAllAirdropsRequestAmino): _196.QueryAllAirdropsRequest;
            toAmino(_: _196.QueryAllAirdropsRequest): _196.QueryAllAirdropsRequestAmino;
            fromAminoMsg(object: _196.QueryAllAirdropsRequestAminoMsg): _196.QueryAllAirdropsRequest;
            fromProtoMsg(message: _196.QueryAllAirdropsRequestProtoMsg): _196.QueryAllAirdropsRequest;
            toProto(message: _196.QueryAllAirdropsRequest): Uint8Array;
            toProtoMsg(message: _196.QueryAllAirdropsRequest): _196.QueryAllAirdropsRequestProtoMsg;
        };
        QueryAllAirdropsResponse: {
            typeUrl: string;
            encode(message: _196.QueryAllAirdropsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryAllAirdropsResponse;
            fromPartial(object: Partial<_196.QueryAllAirdropsResponse>): _196.QueryAllAirdropsResponse;
            fromAmino(object: _196.QueryAllAirdropsResponseAmino): _196.QueryAllAirdropsResponse;
            toAmino(message: _196.QueryAllAirdropsResponse): _196.QueryAllAirdropsResponseAmino;
            fromAminoMsg(object: _196.QueryAllAirdropsResponseAminoMsg): _196.QueryAllAirdropsResponse;
            fromProtoMsg(message: _196.QueryAllAirdropsResponseProtoMsg): _196.QueryAllAirdropsResponse;
            toProto(message: _196.QueryAllAirdropsResponse): Uint8Array;
            toProtoMsg(message: _196.QueryAllAirdropsResponse): _196.QueryAllAirdropsResponseProtoMsg;
        };
        QueryUserAllocationRequest: {
            typeUrl: string;
            encode(message: _196.QueryUserAllocationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryUserAllocationRequest;
            fromPartial(object: Partial<_196.QueryUserAllocationRequest>): _196.QueryUserAllocationRequest;
            fromAmino(object: _196.QueryUserAllocationRequestAmino): _196.QueryUserAllocationRequest;
            toAmino(message: _196.QueryUserAllocationRequest): _196.QueryUserAllocationRequestAmino;
            fromAminoMsg(object: _196.QueryUserAllocationRequestAminoMsg): _196.QueryUserAllocationRequest;
            fromProtoMsg(message: _196.QueryUserAllocationRequestProtoMsg): _196.QueryUserAllocationRequest;
            toProto(message: _196.QueryUserAllocationRequest): Uint8Array;
            toProtoMsg(message: _196.QueryUserAllocationRequest): _196.QueryUserAllocationRequestProtoMsg;
        };
        QueryUserAllocationResponse: {
            typeUrl: string;
            encode(message: _196.QueryUserAllocationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryUserAllocationResponse;
            fromPartial(object: Partial<_196.QueryUserAllocationResponse>): _196.QueryUserAllocationResponse;
            fromAmino(object: _196.QueryUserAllocationResponseAmino): _196.QueryUserAllocationResponse;
            toAmino(message: _196.QueryUserAllocationResponse): _196.QueryUserAllocationResponseAmino;
            fromAminoMsg(object: _196.QueryUserAllocationResponseAminoMsg): _196.QueryUserAllocationResponse;
            fromProtoMsg(message: _196.QueryUserAllocationResponseProtoMsg): _196.QueryUserAllocationResponse;
            toProto(message: _196.QueryUserAllocationResponse): Uint8Array;
            toProtoMsg(message: _196.QueryUserAllocationResponse): _196.QueryUserAllocationResponseProtoMsg;
        };
        QueryUserAllocationsRequest: {
            typeUrl: string;
            encode(message: _196.QueryUserAllocationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryUserAllocationsRequest;
            fromPartial(object: Partial<_196.QueryUserAllocationsRequest>): _196.QueryUserAllocationsRequest;
            fromAmino(object: _196.QueryUserAllocationsRequestAmino): _196.QueryUserAllocationsRequest;
            toAmino(message: _196.QueryUserAllocationsRequest): _196.QueryUserAllocationsRequestAmino;
            fromAminoMsg(object: _196.QueryUserAllocationsRequestAminoMsg): _196.QueryUserAllocationsRequest;
            fromProtoMsg(message: _196.QueryUserAllocationsRequestProtoMsg): _196.QueryUserAllocationsRequest;
            toProto(message: _196.QueryUserAllocationsRequest): Uint8Array;
            toProtoMsg(message: _196.QueryUserAllocationsRequest): _196.QueryUserAllocationsRequestProtoMsg;
        };
        QueryUserAllocationsResponse: {
            typeUrl: string;
            encode(message: _196.QueryUserAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryUserAllocationsResponse;
            fromPartial(object: Partial<_196.QueryUserAllocationsResponse>): _196.QueryUserAllocationsResponse;
            fromAmino(object: _196.QueryUserAllocationsResponseAmino): _196.QueryUserAllocationsResponse;
            toAmino(message: _196.QueryUserAllocationsResponse): _196.QueryUserAllocationsResponseAmino;
            fromAminoMsg(object: _196.QueryUserAllocationsResponseAminoMsg): _196.QueryUserAllocationsResponse;
            fromProtoMsg(message: _196.QueryUserAllocationsResponseProtoMsg): _196.QueryUserAllocationsResponse;
            toProto(message: _196.QueryUserAllocationsResponse): Uint8Array;
            toProtoMsg(message: _196.QueryUserAllocationsResponse): _196.QueryUserAllocationsResponseProtoMsg;
        };
        QueryAllAllocationsRequest: {
            typeUrl: string;
            encode(message: _196.QueryAllAllocationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryAllAllocationsRequest;
            fromPartial(object: Partial<_196.QueryAllAllocationsRequest>): _196.QueryAllAllocationsRequest;
            fromAmino(object: _196.QueryAllAllocationsRequestAmino): _196.QueryAllAllocationsRequest;
            toAmino(message: _196.QueryAllAllocationsRequest): _196.QueryAllAllocationsRequestAmino;
            fromAminoMsg(object: _196.QueryAllAllocationsRequestAminoMsg): _196.QueryAllAllocationsRequest;
            fromProtoMsg(message: _196.QueryAllAllocationsRequestProtoMsg): _196.QueryAllAllocationsRequest;
            toProto(message: _196.QueryAllAllocationsRequest): Uint8Array;
            toProtoMsg(message: _196.QueryAllAllocationsRequest): _196.QueryAllAllocationsRequestProtoMsg;
        };
        QueryAllAllocationsResponse: {
            typeUrl: string;
            encode(message: _196.QueryAllAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryAllAllocationsResponse;
            fromPartial(object: Partial<_196.QueryAllAllocationsResponse>): _196.QueryAllAllocationsResponse;
            fromAmino(object: _196.QueryAllAllocationsResponseAmino): _196.QueryAllAllocationsResponse;
            toAmino(message: _196.QueryAllAllocationsResponse): _196.QueryAllAllocationsResponseAmino;
            fromAminoMsg(object: _196.QueryAllAllocationsResponseAminoMsg): _196.QueryAllAllocationsResponse;
            fromProtoMsg(message: _196.QueryAllAllocationsResponseProtoMsg): _196.QueryAllAllocationsResponse;
            toProto(message: _196.QueryAllAllocationsResponse): Uint8Array;
            toProtoMsg(message: _196.QueryAllAllocationsResponse): _196.QueryAllAllocationsResponseProtoMsg;
        };
        QueryUserSummaryRequest: {
            typeUrl: string;
            encode(message: _196.QueryUserSummaryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryUserSummaryRequest;
            fromPartial(object: Partial<_196.QueryUserSummaryRequest>): _196.QueryUserSummaryRequest;
            fromAmino(object: _196.QueryUserSummaryRequestAmino): _196.QueryUserSummaryRequest;
            toAmino(message: _196.QueryUserSummaryRequest): _196.QueryUserSummaryRequestAmino;
            fromAminoMsg(object: _196.QueryUserSummaryRequestAminoMsg): _196.QueryUserSummaryRequest;
            fromProtoMsg(message: _196.QueryUserSummaryRequestProtoMsg): _196.QueryUserSummaryRequest;
            toProto(message: _196.QueryUserSummaryRequest): Uint8Array;
            toProtoMsg(message: _196.QueryUserSummaryRequest): _196.QueryUserSummaryRequestProtoMsg;
        };
        QueryUserSummaryResponse: {
            typeUrl: string;
            encode(message: _196.QueryUserSummaryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryUserSummaryResponse;
            fromPartial(object: Partial<_196.QueryUserSummaryResponse>): _196.QueryUserSummaryResponse;
            fromAmino(object: _196.QueryUserSummaryResponseAmino): _196.QueryUserSummaryResponse;
            toAmino(message: _196.QueryUserSummaryResponse): _196.QueryUserSummaryResponseAmino;
            fromAminoMsg(object: _196.QueryUserSummaryResponseAminoMsg): _196.QueryUserSummaryResponse;
            fromProtoMsg(message: _196.QueryUserSummaryResponseProtoMsg): _196.QueryUserSummaryResponse;
            toProto(message: _196.QueryUserSummaryResponse): Uint8Array;
            toProtoMsg(message: _196.QueryUserSummaryResponse): _196.QueryUserSummaryResponseProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _195.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _195.GenesisState;
            fromPartial(object: Partial<_195.GenesisState>): _195.GenesisState;
            fromAmino(object: _195.GenesisStateAmino): _195.GenesisState;
            toAmino(message: _195.GenesisState): _195.GenesisStateAmino;
            fromAminoMsg(object: _195.GenesisStateAminoMsg): _195.GenesisState;
            fromProtoMsg(message: _195.GenesisStateProtoMsg): _195.GenesisState;
            toProto(message: _195.GenesisState): Uint8Array;
            toProtoMsg(message: _195.GenesisState): _195.GenesisStateProtoMsg;
        };
        claimTypeFromJSON(object: any): _194.ClaimType;
        claimTypeToJSON(object: _194.ClaimType): string;
        ClaimType: typeof _194.ClaimType;
        ClaimTypeSDKType: typeof _194.ClaimType;
        ClaimTypeAmino: typeof _194.ClaimType;
        Params: {
            typeUrl: string;
            encode(message: _194.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _194.Params;
            fromPartial(object: Partial<_194.Params>): _194.Params;
            fromAmino(object: _194.ParamsAmino): _194.Params;
            toAmino(message: _194.Params): _194.ParamsAmino;
            fromAminoMsg(object: _194.ParamsAminoMsg): _194.Params;
            fromProtoMsg(message: _194.ParamsProtoMsg): _194.Params;
            toProto(message: _194.Params): Uint8Array;
            toProtoMsg(message: _194.Params): _194.ParamsProtoMsg;
        };
        UserAllocation: {
            typeUrl: string;
            encode(message: _194.UserAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _194.UserAllocation;
            fromPartial(object: Partial<_194.UserAllocation>): _194.UserAllocation;
            fromAmino(object: _194.UserAllocationAmino): _194.UserAllocation;
            toAmino(message: _194.UserAllocation): _194.UserAllocationAmino;
            fromAminoMsg(object: _194.UserAllocationAminoMsg): _194.UserAllocation;
            fromProtoMsg(message: _194.UserAllocationProtoMsg): _194.UserAllocation;
            toProto(message: _194.UserAllocation): Uint8Array;
            toProtoMsg(message: _194.UserAllocation): _194.UserAllocationProtoMsg;
        };
        Airdrop: {
            typeUrl: string;
            encode(message: _194.Airdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _194.Airdrop;
            fromPartial(object: Partial<_194.Airdrop>): _194.Airdrop;
            fromAmino(object: _194.AirdropAmino): _194.Airdrop;
            toAmino(message: _194.Airdrop): _194.AirdropAmino;
            fromAminoMsg(object: _194.AirdropAminoMsg): _194.Airdrop;
            fromProtoMsg(message: _194.AirdropProtoMsg): _194.Airdrop;
            toProto(message: _194.Airdrop): Uint8Array;
            toProtoMsg(message: _194.Airdrop): _194.AirdropProtoMsg;
        };
    };
    const auction: {
        MsgClientImpl: typeof _419.MsgClientImpl;
        QueryClientImpl: typeof _405.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            auction(request: _200.QueryAuctionRequest): Promise<_200.QueryAuctionResponse>;
            auctions(request?: _200.QueryAuctionsRequest): Promise<_200.QueryAuctionsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                placeBid(value: _201.MsgPlaceBid): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAuction(value: _201.MsgCreateAuction): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateAuction(value: _201.MsgUpdateAuction): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                placeBid(value: _201.MsgPlaceBid): {
                    typeUrl: string;
                    value: _201.MsgPlaceBid;
                };
                createAuction(value: _201.MsgCreateAuction): {
                    typeUrl: string;
                    value: _201.MsgCreateAuction;
                };
                updateAuction(value: _201.MsgUpdateAuction): {
                    typeUrl: string;
                    value: _201.MsgUpdateAuction;
                };
            };
            fromPartial: {
                placeBid(value: _201.MsgPlaceBid): {
                    typeUrl: string;
                    value: _201.MsgPlaceBid;
                };
                createAuction(value: _201.MsgCreateAuction): {
                    typeUrl: string;
                    value: _201.MsgCreateAuction;
                };
                updateAuction(value: _201.MsgUpdateAuction): {
                    typeUrl: string;
                    value: _201.MsgUpdateAuction;
                };
            };
        };
        AminoConverter: {
            "/stride.auction.MsgPlaceBid": {
                aminoType: string;
                toAmino: (message: _201.MsgPlaceBid) => _201.MsgPlaceBidAmino;
                fromAmino: (object: _201.MsgPlaceBidAmino) => _201.MsgPlaceBid;
            };
            "/stride.auction.MsgCreateAuction": {
                aminoType: string;
                toAmino: (message: _201.MsgCreateAuction) => _201.MsgCreateAuctionAmino;
                fromAmino: (object: _201.MsgCreateAuctionAmino) => _201.MsgCreateAuction;
            };
            "/stride.auction.MsgUpdateAuction": {
                aminoType: string;
                toAmino: (message: _201.MsgUpdateAuction) => _201.MsgUpdateAuctionAmino;
                fromAmino: (object: _201.MsgUpdateAuctionAmino) => _201.MsgUpdateAuction;
            };
        };
        MsgPlaceBid: {
            typeUrl: string;
            encode(message: _201.MsgPlaceBid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.MsgPlaceBid;
            fromPartial(object: Partial<_201.MsgPlaceBid>): _201.MsgPlaceBid;
            fromAmino(object: _201.MsgPlaceBidAmino): _201.MsgPlaceBid;
            toAmino(message: _201.MsgPlaceBid): _201.MsgPlaceBidAmino;
            fromAminoMsg(object: _201.MsgPlaceBidAminoMsg): _201.MsgPlaceBid;
            toAminoMsg(message: _201.MsgPlaceBid): _201.MsgPlaceBidAminoMsg;
            fromProtoMsg(message: _201.MsgPlaceBidProtoMsg): _201.MsgPlaceBid;
            toProto(message: _201.MsgPlaceBid): Uint8Array;
            toProtoMsg(message: _201.MsgPlaceBid): _201.MsgPlaceBidProtoMsg;
        };
        MsgPlaceBidResponse: {
            typeUrl: string;
            encode(_: _201.MsgPlaceBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.MsgPlaceBidResponse;
            fromPartial(_: Partial<_201.MsgPlaceBidResponse>): _201.MsgPlaceBidResponse;
            fromAmino(_: _201.MsgPlaceBidResponseAmino): _201.MsgPlaceBidResponse;
            toAmino(_: _201.MsgPlaceBidResponse): _201.MsgPlaceBidResponseAmino;
            fromAminoMsg(object: _201.MsgPlaceBidResponseAminoMsg): _201.MsgPlaceBidResponse;
            fromProtoMsg(message: _201.MsgPlaceBidResponseProtoMsg): _201.MsgPlaceBidResponse;
            toProto(message: _201.MsgPlaceBidResponse): Uint8Array;
            toProtoMsg(message: _201.MsgPlaceBidResponse): _201.MsgPlaceBidResponseProtoMsg;
        };
        MsgCreateAuction: {
            typeUrl: string;
            encode(message: _201.MsgCreateAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.MsgCreateAuction;
            fromPartial(object: Partial<_201.MsgCreateAuction>): _201.MsgCreateAuction;
            fromAmino(object: _201.MsgCreateAuctionAmino): _201.MsgCreateAuction;
            toAmino(message: _201.MsgCreateAuction): _201.MsgCreateAuctionAmino;
            fromAminoMsg(object: _201.MsgCreateAuctionAminoMsg): _201.MsgCreateAuction;
            toAminoMsg(message: _201.MsgCreateAuction): _201.MsgCreateAuctionAminoMsg;
            fromProtoMsg(message: _201.MsgCreateAuctionProtoMsg): _201.MsgCreateAuction;
            toProto(message: _201.MsgCreateAuction): Uint8Array;
            toProtoMsg(message: _201.MsgCreateAuction): _201.MsgCreateAuctionProtoMsg;
        };
        MsgCreateAuctionResponse: {
            typeUrl: string;
            encode(_: _201.MsgCreateAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.MsgCreateAuctionResponse;
            fromPartial(_: Partial<_201.MsgCreateAuctionResponse>): _201.MsgCreateAuctionResponse;
            fromAmino(_: _201.MsgCreateAuctionResponseAmino): _201.MsgCreateAuctionResponse;
            toAmino(_: _201.MsgCreateAuctionResponse): _201.MsgCreateAuctionResponseAmino;
            fromAminoMsg(object: _201.MsgCreateAuctionResponseAminoMsg): _201.MsgCreateAuctionResponse;
            fromProtoMsg(message: _201.MsgCreateAuctionResponseProtoMsg): _201.MsgCreateAuctionResponse;
            toProto(message: _201.MsgCreateAuctionResponse): Uint8Array;
            toProtoMsg(message: _201.MsgCreateAuctionResponse): _201.MsgCreateAuctionResponseProtoMsg;
        };
        MsgUpdateAuction: {
            typeUrl: string;
            encode(message: _201.MsgUpdateAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.MsgUpdateAuction;
            fromPartial(object: Partial<_201.MsgUpdateAuction>): _201.MsgUpdateAuction;
            fromAmino(object: _201.MsgUpdateAuctionAmino): _201.MsgUpdateAuction;
            toAmino(message: _201.MsgUpdateAuction): _201.MsgUpdateAuctionAmino;
            fromAminoMsg(object: _201.MsgUpdateAuctionAminoMsg): _201.MsgUpdateAuction;
            toAminoMsg(message: _201.MsgUpdateAuction): _201.MsgUpdateAuctionAminoMsg;
            fromProtoMsg(message: _201.MsgUpdateAuctionProtoMsg): _201.MsgUpdateAuction;
            toProto(message: _201.MsgUpdateAuction): Uint8Array;
            toProtoMsg(message: _201.MsgUpdateAuction): _201.MsgUpdateAuctionProtoMsg;
        };
        MsgUpdateAuctionResponse: {
            typeUrl: string;
            encode(_: _201.MsgUpdateAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.MsgUpdateAuctionResponse;
            fromPartial(_: Partial<_201.MsgUpdateAuctionResponse>): _201.MsgUpdateAuctionResponse;
            fromAmino(_: _201.MsgUpdateAuctionResponseAmino): _201.MsgUpdateAuctionResponse;
            toAmino(_: _201.MsgUpdateAuctionResponse): _201.MsgUpdateAuctionResponseAmino;
            fromAminoMsg(object: _201.MsgUpdateAuctionResponseAminoMsg): _201.MsgUpdateAuctionResponse;
            fromProtoMsg(message: _201.MsgUpdateAuctionResponseProtoMsg): _201.MsgUpdateAuctionResponse;
            toProto(message: _201.MsgUpdateAuctionResponse): Uint8Array;
            toProtoMsg(message: _201.MsgUpdateAuctionResponse): _201.MsgUpdateAuctionResponseProtoMsg;
        };
        QueryAuctionRequest: {
            typeUrl: string;
            encode(message: _200.QueryAuctionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.QueryAuctionRequest;
            fromPartial(object: Partial<_200.QueryAuctionRequest>): _200.QueryAuctionRequest;
            fromAmino(object: _200.QueryAuctionRequestAmino): _200.QueryAuctionRequest;
            toAmino(message: _200.QueryAuctionRequest): _200.QueryAuctionRequestAmino;
            fromAminoMsg(object: _200.QueryAuctionRequestAminoMsg): _200.QueryAuctionRequest;
            fromProtoMsg(message: _200.QueryAuctionRequestProtoMsg): _200.QueryAuctionRequest;
            toProto(message: _200.QueryAuctionRequest): Uint8Array;
            toProtoMsg(message: _200.QueryAuctionRequest): _200.QueryAuctionRequestProtoMsg;
        };
        QueryAuctionResponse: {
            typeUrl: string;
            encode(message: _200.QueryAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.QueryAuctionResponse;
            fromPartial(object: Partial<_200.QueryAuctionResponse>): _200.QueryAuctionResponse;
            fromAmino(object: _200.QueryAuctionResponseAmino): _200.QueryAuctionResponse;
            toAmino(message: _200.QueryAuctionResponse): _200.QueryAuctionResponseAmino;
            fromAminoMsg(object: _200.QueryAuctionResponseAminoMsg): _200.QueryAuctionResponse;
            fromProtoMsg(message: _200.QueryAuctionResponseProtoMsg): _200.QueryAuctionResponse;
            toProto(message: _200.QueryAuctionResponse): Uint8Array;
            toProtoMsg(message: _200.QueryAuctionResponse): _200.QueryAuctionResponseProtoMsg;
        };
        QueryAuctionsRequest: {
            typeUrl: string;
            encode(message: _200.QueryAuctionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.QueryAuctionsRequest;
            fromPartial(object: Partial<_200.QueryAuctionsRequest>): _200.QueryAuctionsRequest;
            fromAmino(object: _200.QueryAuctionsRequestAmino): _200.QueryAuctionsRequest;
            toAmino(message: _200.QueryAuctionsRequest): _200.QueryAuctionsRequestAmino;
            fromAminoMsg(object: _200.QueryAuctionsRequestAminoMsg): _200.QueryAuctionsRequest;
            fromProtoMsg(message: _200.QueryAuctionsRequestProtoMsg): _200.QueryAuctionsRequest;
            toProto(message: _200.QueryAuctionsRequest): Uint8Array;
            toProtoMsg(message: _200.QueryAuctionsRequest): _200.QueryAuctionsRequestProtoMsg;
        };
        QueryAuctionsResponse: {
            typeUrl: string;
            encode(message: _200.QueryAuctionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.QueryAuctionsResponse;
            fromPartial(object: Partial<_200.QueryAuctionsResponse>): _200.QueryAuctionsResponse;
            fromAmino(object: _200.QueryAuctionsResponseAmino): _200.QueryAuctionsResponse;
            toAmino(message: _200.QueryAuctionsResponse): _200.QueryAuctionsResponseAmino;
            fromAminoMsg(object: _200.QueryAuctionsResponseAminoMsg): _200.QueryAuctionsResponse;
            fromProtoMsg(message: _200.QueryAuctionsResponseProtoMsg): _200.QueryAuctionsResponse;
            toProto(message: _200.QueryAuctionsResponse): Uint8Array;
            toProtoMsg(message: _200.QueryAuctionsResponse): _200.QueryAuctionsResponseProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _199.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.GenesisState;
            fromPartial(object: Partial<_199.GenesisState>): _199.GenesisState;
            fromAmino(object: _199.GenesisStateAmino): _199.GenesisState;
            toAmino(message: _199.GenesisState): _199.GenesisStateAmino;
            fromAminoMsg(object: _199.GenesisStateAminoMsg): _199.GenesisState;
            fromProtoMsg(message: _199.GenesisStateProtoMsg): _199.GenesisState;
            toProto(message: _199.GenesisState): Uint8Array;
            toProtoMsg(message: _199.GenesisState): _199.GenesisStateProtoMsg;
        };
        auctionTypeFromJSON(object: any): _198.AuctionType;
        auctionTypeToJSON(object: _198.AuctionType): string;
        AuctionType: typeof _198.AuctionType;
        AuctionTypeSDKType: typeof _198.AuctionType;
        AuctionTypeAmino: typeof _198.AuctionType;
        Params: {
            typeUrl: string;
            encode(_: _198.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.Params;
            fromPartial(_: Partial<_198.Params>): _198.Params;
            fromAmino(_: _198.ParamsAmino): _198.Params;
            toAmino(_: _198.Params): _198.ParamsAmino;
            fromAminoMsg(object: _198.ParamsAminoMsg): _198.Params;
            fromProtoMsg(message: _198.ParamsProtoMsg): _198.Params;
            toProto(message: _198.Params): Uint8Array;
            toProtoMsg(message: _198.Params): _198.ParamsProtoMsg;
        };
        Auction: {
            typeUrl: string;
            encode(message: _198.Auction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.Auction;
            fromPartial(object: Partial<_198.Auction>): _198.Auction;
            fromAmino(object: _198.AuctionAmino): _198.Auction;
            toAmino(message: _198.Auction): _198.AuctionAmino;
            fromAminoMsg(object: _198.AuctionAminoMsg): _198.Auction;
            fromProtoMsg(message: _198.AuctionProtoMsg): _198.Auction;
            toProto(message: _198.Auction): Uint8Array;
            toProtoMsg(message: _198.Auction): _198.AuctionProtoMsg;
        };
    };
    const autopilot: {
        QueryClientImpl: typeof _406.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _204.QueryParamsRequest): Promise<_204.QueryParamsResponse>;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _204.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.QueryParamsRequest;
            fromPartial(_: Partial<_204.QueryParamsRequest>): _204.QueryParamsRequest;
            fromAmino(_: _204.QueryParamsRequestAmino): _204.QueryParamsRequest;
            toAmino(_: _204.QueryParamsRequest): _204.QueryParamsRequestAmino;
            fromAminoMsg(object: _204.QueryParamsRequestAminoMsg): _204.QueryParamsRequest;
            fromProtoMsg(message: _204.QueryParamsRequestProtoMsg): _204.QueryParamsRequest;
            toProto(message: _204.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _204.QueryParamsRequest): _204.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _204.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.QueryParamsResponse;
            fromPartial(object: Partial<_204.QueryParamsResponse>): _204.QueryParamsResponse;
            fromAmino(object: _204.QueryParamsResponseAmino): _204.QueryParamsResponse;
            toAmino(message: _204.QueryParamsResponse): _204.QueryParamsResponseAmino;
            fromAminoMsg(object: _204.QueryParamsResponseAminoMsg): _204.QueryParamsResponse;
            fromProtoMsg(message: _204.QueryParamsResponseProtoMsg): _204.QueryParamsResponse;
            toProto(message: _204.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _204.QueryParamsResponse): _204.QueryParamsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _203.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.Params;
            fromPartial(object: Partial<_203.Params>): _203.Params;
            fromAmino(object: _203.ParamsAmino): _203.Params;
            toAmino(message: _203.Params): _203.ParamsAmino;
            fromAminoMsg(object: _203.ParamsAminoMsg): _203.Params;
            fromProtoMsg(message: _203.ParamsProtoMsg): _203.Params;
            toProto(message: _203.Params): Uint8Array;
            toProtoMsg(message: _203.Params): _203.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _202.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.GenesisState;
            fromPartial(object: Partial<_202.GenesisState>): _202.GenesisState;
            fromAmino(object: _202.GenesisStateAmino): _202.GenesisState;
            toAmino(message: _202.GenesisState): _202.GenesisStateAmino;
            fromAminoMsg(object: _202.GenesisStateAminoMsg): _202.GenesisState;
            fromProtoMsg(message: _202.GenesisStateProtoMsg): _202.GenesisState;
            toProto(message: _202.GenesisState): Uint8Array;
            toProtoMsg(message: _202.GenesisState): _202.GenesisStateProtoMsg;
        };
    };
    const claim: {
        MsgClientImpl: typeof _420.MsgClientImpl;
        QueryClientImpl: typeof _407.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            distributorAccountBalance(request: _208.QueryDistributorAccountBalanceRequest): Promise<_208.QueryDistributorAccountBalanceResponse>;
            params(request?: _208.QueryParamsRequest): Promise<_208.QueryParamsResponse>;
            claimRecord(request: _208.QueryClaimRecordRequest): Promise<_208.QueryClaimRecordResponse>;
            claimableForAction(request: _208.QueryClaimableForActionRequest): Promise<_208.QueryClaimableForActionResponse>;
            totalClaimable(request: _208.QueryTotalClaimableRequest): Promise<_208.QueryTotalClaimableResponse>;
            userVestings(request: _208.QueryUserVestingsRequest): Promise<_208.QueryUserVestingsResponse>;
            claimStatus(request: _208.QueryClaimStatusRequest): Promise<_208.QueryClaimStatusResponse>;
            claimMetadata(request?: _208.QueryClaimMetadataRequest): Promise<_208.QueryClaimMetadataResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                setAirdropAllocations(value: _209.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimFreeAmount(value: _209.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAirdrop(value: _209.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteAirdrop(value: _209.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                setAirdropAllocations(value: _209.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _209.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _209.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _209.MsgClaimFreeAmount;
                };
                createAirdrop(value: _209.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _209.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _209.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _209.MsgDeleteAirdrop;
                };
            };
            fromPartial: {
                setAirdropAllocations(value: _209.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _209.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _209.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _209.MsgClaimFreeAmount;
                };
                createAirdrop(value: _209.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _209.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _209.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _209.MsgDeleteAirdrop;
                };
            };
        };
        AminoConverter: {
            "/stride.claim.MsgSetAirdropAllocations": {
                aminoType: string;
                toAmino: (message: _209.MsgSetAirdropAllocations) => _209.MsgSetAirdropAllocationsAmino;
                fromAmino: (object: _209.MsgSetAirdropAllocationsAmino) => _209.MsgSetAirdropAllocations;
            };
            "/stride.claim.MsgClaimFreeAmount": {
                aminoType: string;
                toAmino: (message: _209.MsgClaimFreeAmount) => _209.MsgClaimFreeAmountAmino;
                fromAmino: (object: _209.MsgClaimFreeAmountAmino) => _209.MsgClaimFreeAmount;
            };
            "/stride.claim.MsgCreateAirdrop": {
                aminoType: string;
                toAmino: (message: _209.MsgCreateAirdrop) => _209.MsgCreateAirdropAmino;
                fromAmino: (object: _209.MsgCreateAirdropAmino) => _209.MsgCreateAirdrop;
            };
            "/stride.claim.MsgDeleteAirdrop": {
                aminoType: string;
                toAmino: (message: _209.MsgDeleteAirdrop) => _209.MsgDeleteAirdropAmino;
                fromAmino: (object: _209.MsgDeleteAirdropAmino) => _209.MsgDeleteAirdrop;
            };
        };
        MsgSetAirdropAllocations: {
            typeUrl: string;
            encode(message: _209.MsgSetAirdropAllocations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.MsgSetAirdropAllocations;
            fromPartial(object: Partial<_209.MsgSetAirdropAllocations>): _209.MsgSetAirdropAllocations;
            fromAmino(object: _209.MsgSetAirdropAllocationsAmino): _209.MsgSetAirdropAllocations;
            toAmino(message: _209.MsgSetAirdropAllocations): _209.MsgSetAirdropAllocationsAmino;
            fromAminoMsg(object: _209.MsgSetAirdropAllocationsAminoMsg): _209.MsgSetAirdropAllocations;
            toAminoMsg(message: _209.MsgSetAirdropAllocations): _209.MsgSetAirdropAllocationsAminoMsg;
            fromProtoMsg(message: _209.MsgSetAirdropAllocationsProtoMsg): _209.MsgSetAirdropAllocations;
            toProto(message: _209.MsgSetAirdropAllocations): Uint8Array;
            toProtoMsg(message: _209.MsgSetAirdropAllocations): _209.MsgSetAirdropAllocationsProtoMsg;
        };
        MsgSetAirdropAllocationsResponse: {
            typeUrl: string;
            encode(_: _209.MsgSetAirdropAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.MsgSetAirdropAllocationsResponse;
            fromPartial(_: Partial<_209.MsgSetAirdropAllocationsResponse>): _209.MsgSetAirdropAllocationsResponse;
            fromAmino(_: _209.MsgSetAirdropAllocationsResponseAmino): _209.MsgSetAirdropAllocationsResponse;
            toAmino(_: _209.MsgSetAirdropAllocationsResponse): _209.MsgSetAirdropAllocationsResponseAmino;
            fromAminoMsg(object: _209.MsgSetAirdropAllocationsResponseAminoMsg): _209.MsgSetAirdropAllocationsResponse;
            fromProtoMsg(message: _209.MsgSetAirdropAllocationsResponseProtoMsg): _209.MsgSetAirdropAllocationsResponse;
            toProto(message: _209.MsgSetAirdropAllocationsResponse): Uint8Array;
            toProtoMsg(message: _209.MsgSetAirdropAllocationsResponse): _209.MsgSetAirdropAllocationsResponseProtoMsg;
        };
        MsgClaimFreeAmount: {
            typeUrl: string;
            encode(message: _209.MsgClaimFreeAmount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.MsgClaimFreeAmount;
            fromPartial(object: Partial<_209.MsgClaimFreeAmount>): _209.MsgClaimFreeAmount;
            fromAmino(object: _209.MsgClaimFreeAmountAmino): _209.MsgClaimFreeAmount;
            toAmino(message: _209.MsgClaimFreeAmount): _209.MsgClaimFreeAmountAmino;
            fromAminoMsg(object: _209.MsgClaimFreeAmountAminoMsg): _209.MsgClaimFreeAmount;
            toAminoMsg(message: _209.MsgClaimFreeAmount): _209.MsgClaimFreeAmountAminoMsg;
            fromProtoMsg(message: _209.MsgClaimFreeAmountProtoMsg): _209.MsgClaimFreeAmount;
            toProto(message: _209.MsgClaimFreeAmount): Uint8Array;
            toProtoMsg(message: _209.MsgClaimFreeAmount): _209.MsgClaimFreeAmountProtoMsg;
        };
        MsgClaimFreeAmountResponse: {
            typeUrl: string;
            encode(message: _209.MsgClaimFreeAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.MsgClaimFreeAmountResponse;
            fromPartial(object: Partial<_209.MsgClaimFreeAmountResponse>): _209.MsgClaimFreeAmountResponse;
            fromAmino(object: _209.MsgClaimFreeAmountResponseAmino): _209.MsgClaimFreeAmountResponse;
            toAmino(message: _209.MsgClaimFreeAmountResponse): _209.MsgClaimFreeAmountResponseAmino;
            fromAminoMsg(object: _209.MsgClaimFreeAmountResponseAminoMsg): _209.MsgClaimFreeAmountResponse;
            fromProtoMsg(message: _209.MsgClaimFreeAmountResponseProtoMsg): _209.MsgClaimFreeAmountResponse;
            toProto(message: _209.MsgClaimFreeAmountResponse): Uint8Array;
            toProtoMsg(message: _209.MsgClaimFreeAmountResponse): _209.MsgClaimFreeAmountResponseProtoMsg;
        };
        MsgCreateAirdrop: {
            typeUrl: string;
            encode(message: _209.MsgCreateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.MsgCreateAirdrop;
            fromPartial(object: Partial<_209.MsgCreateAirdrop>): _209.MsgCreateAirdrop;
            fromAmino(object: _209.MsgCreateAirdropAmino): _209.MsgCreateAirdrop;
            toAmino(message: _209.MsgCreateAirdrop): _209.MsgCreateAirdropAmino;
            fromAminoMsg(object: _209.MsgCreateAirdropAminoMsg): _209.MsgCreateAirdrop;
            toAminoMsg(message: _209.MsgCreateAirdrop): _209.MsgCreateAirdropAminoMsg;
            fromProtoMsg(message: _209.MsgCreateAirdropProtoMsg): _209.MsgCreateAirdrop;
            toProto(message: _209.MsgCreateAirdrop): Uint8Array;
            toProtoMsg(message: _209.MsgCreateAirdrop): _209.MsgCreateAirdropProtoMsg;
        };
        MsgCreateAirdropResponse: {
            typeUrl: string;
            encode(_: _209.MsgCreateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.MsgCreateAirdropResponse;
            fromPartial(_: Partial<_209.MsgCreateAirdropResponse>): _209.MsgCreateAirdropResponse;
            fromAmino(_: _209.MsgCreateAirdropResponseAmino): _209.MsgCreateAirdropResponse;
            toAmino(_: _209.MsgCreateAirdropResponse): _209.MsgCreateAirdropResponseAmino;
            fromAminoMsg(object: _209.MsgCreateAirdropResponseAminoMsg): _209.MsgCreateAirdropResponse;
            fromProtoMsg(message: _209.MsgCreateAirdropResponseProtoMsg): _209.MsgCreateAirdropResponse;
            toProto(message: _209.MsgCreateAirdropResponse): Uint8Array;
            toProtoMsg(message: _209.MsgCreateAirdropResponse): _209.MsgCreateAirdropResponseProtoMsg;
        };
        MsgDeleteAirdrop: {
            typeUrl: string;
            encode(message: _209.MsgDeleteAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.MsgDeleteAirdrop;
            fromPartial(object: Partial<_209.MsgDeleteAirdrop>): _209.MsgDeleteAirdrop;
            fromAmino(object: _209.MsgDeleteAirdropAmino): _209.MsgDeleteAirdrop;
            toAmino(message: _209.MsgDeleteAirdrop): _209.MsgDeleteAirdropAmino;
            fromAminoMsg(object: _209.MsgDeleteAirdropAminoMsg): _209.MsgDeleteAirdrop;
            toAminoMsg(message: _209.MsgDeleteAirdrop): _209.MsgDeleteAirdropAminoMsg;
            fromProtoMsg(message: _209.MsgDeleteAirdropProtoMsg): _209.MsgDeleteAirdrop;
            toProto(message: _209.MsgDeleteAirdrop): Uint8Array;
            toProtoMsg(message: _209.MsgDeleteAirdrop): _209.MsgDeleteAirdropProtoMsg;
        };
        MsgDeleteAirdropResponse: {
            typeUrl: string;
            encode(_: _209.MsgDeleteAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.MsgDeleteAirdropResponse;
            fromPartial(_: Partial<_209.MsgDeleteAirdropResponse>): _209.MsgDeleteAirdropResponse;
            fromAmino(_: _209.MsgDeleteAirdropResponseAmino): _209.MsgDeleteAirdropResponse;
            toAmino(_: _209.MsgDeleteAirdropResponse): _209.MsgDeleteAirdropResponseAmino;
            fromAminoMsg(object: _209.MsgDeleteAirdropResponseAminoMsg): _209.MsgDeleteAirdropResponse;
            fromProtoMsg(message: _209.MsgDeleteAirdropResponseProtoMsg): _209.MsgDeleteAirdropResponse;
            toProto(message: _209.MsgDeleteAirdropResponse): Uint8Array;
            toProtoMsg(message: _209.MsgDeleteAirdropResponse): _209.MsgDeleteAirdropResponseProtoMsg;
        };
        ClaimStatus: {
            typeUrl: string;
            encode(message: _208.ClaimStatus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.ClaimStatus;
            fromPartial(object: Partial<_208.ClaimStatus>): _208.ClaimStatus;
            fromAmino(object: _208.ClaimStatusAmino): _208.ClaimStatus;
            toAmino(message: _208.ClaimStatus): _208.ClaimStatusAmino;
            fromAminoMsg(object: _208.ClaimStatusAminoMsg): _208.ClaimStatus;
            fromProtoMsg(message: _208.ClaimStatusProtoMsg): _208.ClaimStatus;
            toProto(message: _208.ClaimStatus): Uint8Array;
            toProtoMsg(message: _208.ClaimStatus): _208.ClaimStatusProtoMsg;
        };
        QueryClaimStatusRequest: {
            typeUrl: string;
            encode(message: _208.QueryClaimStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.QueryClaimStatusRequest;
            fromPartial(object: Partial<_208.QueryClaimStatusRequest>): _208.QueryClaimStatusRequest;
            fromAmino(object: _208.QueryClaimStatusRequestAmino): _208.QueryClaimStatusRequest;
            toAmino(message: _208.QueryClaimStatusRequest): _208.QueryClaimStatusRequestAmino;
            fromAminoMsg(object: _208.QueryClaimStatusRequestAminoMsg): _208.QueryClaimStatusRequest;
            fromProtoMsg(message: _208.QueryClaimStatusRequestProtoMsg): _208.QueryClaimStatusRequest;
            toProto(message: _208.QueryClaimStatusRequest): Uint8Array;
            toProtoMsg(message: _208.QueryClaimStatusRequest): _208.QueryClaimStatusRequestProtoMsg;
        };
        QueryClaimStatusResponse: {
            typeUrl: string;
            encode(message: _208.QueryClaimStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.QueryClaimStatusResponse;
            fromPartial(object: Partial<_208.QueryClaimStatusResponse>): _208.QueryClaimStatusResponse;
            fromAmino(object: _208.QueryClaimStatusResponseAmino): _208.QueryClaimStatusResponse;
            toAmino(message: _208.QueryClaimStatusResponse): _208.QueryClaimStatusResponseAmino;
            fromAminoMsg(object: _208.QueryClaimStatusResponseAminoMsg): _208.QueryClaimStatusResponse;
            fromProtoMsg(message: _208.QueryClaimStatusResponseProtoMsg): _208.QueryClaimStatusResponse;
            toProto(message: _208.QueryClaimStatusResponse): Uint8Array;
            toProtoMsg(message: _208.QueryClaimStatusResponse): _208.QueryClaimStatusResponseProtoMsg;
        };
        ClaimMetadata: {
            typeUrl: string;
            encode(message: _208.ClaimMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.ClaimMetadata;
            fromPartial(object: Partial<_208.ClaimMetadata>): _208.ClaimMetadata;
            fromAmino(object: _208.ClaimMetadataAmino): _208.ClaimMetadata;
            toAmino(message: _208.ClaimMetadata): _208.ClaimMetadataAmino;
            fromAminoMsg(object: _208.ClaimMetadataAminoMsg): _208.ClaimMetadata;
            fromProtoMsg(message: _208.ClaimMetadataProtoMsg): _208.ClaimMetadata;
            toProto(message: _208.ClaimMetadata): Uint8Array;
            toProtoMsg(message: _208.ClaimMetadata): _208.ClaimMetadataProtoMsg;
        };
        QueryClaimMetadataRequest: {
            typeUrl: string;
            encode(_: _208.QueryClaimMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.QueryClaimMetadataRequest;
            fromPartial(_: Partial<_208.QueryClaimMetadataRequest>): _208.QueryClaimMetadataRequest;
            fromAmino(_: _208.QueryClaimMetadataRequestAmino): _208.QueryClaimMetadataRequest;
            toAmino(_: _208.QueryClaimMetadataRequest): _208.QueryClaimMetadataRequestAmino;
            fromAminoMsg(object: _208.QueryClaimMetadataRequestAminoMsg): _208.QueryClaimMetadataRequest;
            fromProtoMsg(message: _208.QueryClaimMetadataRequestProtoMsg): _208.QueryClaimMetadataRequest;
            toProto(message: _208.QueryClaimMetadataRequest): Uint8Array;
            toProtoMsg(message: _208.QueryClaimMetadataRequest): _208.QueryClaimMetadataRequestProtoMsg;
        };
        QueryClaimMetadataResponse: {
            typeUrl: string;
            encode(message: _208.QueryClaimMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.QueryClaimMetadataResponse;
            fromPartial(object: Partial<_208.QueryClaimMetadataResponse>): _208.QueryClaimMetadataResponse;
            fromAmino(object: _208.QueryClaimMetadataResponseAmino): _208.QueryClaimMetadataResponse;
            toAmino(message: _208.QueryClaimMetadataResponse): _208.QueryClaimMetadataResponseAmino;
            fromAminoMsg(object: _208.QueryClaimMetadataResponseAminoMsg): _208.QueryClaimMetadataResponse;
            fromProtoMsg(message: _208.QueryClaimMetadataResponseProtoMsg): _208.QueryClaimMetadataResponse;
            toProto(message: _208.QueryClaimMetadataResponse): Uint8Array;
            toProtoMsg(message: _208.QueryClaimMetadataResponse): _208.QueryClaimMetadataResponseProtoMsg;
        };
        QueryDistributorAccountBalanceRequest: {
            typeUrl: string;
            encode(message: _208.QueryDistributorAccountBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.QueryDistributorAccountBalanceRequest;
            fromPartial(object: Partial<_208.QueryDistributorAccountBalanceRequest>): _208.QueryDistributorAccountBalanceRequest;
            fromAmino(object: _208.QueryDistributorAccountBalanceRequestAmino): _208.QueryDistributorAccountBalanceRequest;
            toAmino(message: _208.QueryDistributorAccountBalanceRequest): _208.QueryDistributorAccountBalanceRequestAmino;
            fromAminoMsg(object: _208.QueryDistributorAccountBalanceRequestAminoMsg): _208.QueryDistributorAccountBalanceRequest;
            fromProtoMsg(message: _208.QueryDistributorAccountBalanceRequestProtoMsg): _208.QueryDistributorAccountBalanceRequest;
            toProto(message: _208.QueryDistributorAccountBalanceRequest): Uint8Array;
            toProtoMsg(message: _208.QueryDistributorAccountBalanceRequest): _208.QueryDistributorAccountBalanceRequestProtoMsg;
        };
        QueryDistributorAccountBalanceResponse: {
            typeUrl: string;
            encode(message: _208.QueryDistributorAccountBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.QueryDistributorAccountBalanceResponse;
            fromPartial(object: Partial<_208.QueryDistributorAccountBalanceResponse>): _208.QueryDistributorAccountBalanceResponse;
            fromAmino(object: _208.QueryDistributorAccountBalanceResponseAmino): _208.QueryDistributorAccountBalanceResponse;
            toAmino(message: _208.QueryDistributorAccountBalanceResponse): _208.QueryDistributorAccountBalanceResponseAmino;
            fromAminoMsg(object: _208.QueryDistributorAccountBalanceResponseAminoMsg): _208.QueryDistributorAccountBalanceResponse;
            fromProtoMsg(message: _208.QueryDistributorAccountBalanceResponseProtoMsg): _208.QueryDistributorAccountBalanceResponse;
            toProto(message: _208.QueryDistributorAccountBalanceResponse): Uint8Array;
            toProtoMsg(message: _208.QueryDistributorAccountBalanceResponse): _208.QueryDistributorAccountBalanceResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _208.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.QueryParamsRequest;
            fromPartial(_: Partial<_208.QueryParamsRequest>): _208.QueryParamsRequest;
            fromAmino(_: _208.QueryParamsRequestAmino): _208.QueryParamsRequest;
            toAmino(_: _208.QueryParamsRequest): _208.QueryParamsRequestAmino;
            fromAminoMsg(object: _208.QueryParamsRequestAminoMsg): _208.QueryParamsRequest;
            fromProtoMsg(message: _208.QueryParamsRequestProtoMsg): _208.QueryParamsRequest;
            toProto(message: _208.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _208.QueryParamsRequest): _208.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _208.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.QueryParamsResponse;
            fromPartial(object: Partial<_208.QueryParamsResponse>): _208.QueryParamsResponse;
            fromAmino(object: _208.QueryParamsResponseAmino): _208.QueryParamsResponse;
            toAmino(message: _208.QueryParamsResponse): _208.QueryParamsResponseAmino;
            fromAminoMsg(object: _208.QueryParamsResponseAminoMsg): _208.QueryParamsResponse;
            fromProtoMsg(message: _208.QueryParamsResponseProtoMsg): _208.QueryParamsResponse;
            toProto(message: _208.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _208.QueryParamsResponse): _208.QueryParamsResponseProtoMsg;
        };
        QueryClaimRecordRequest: {
            typeUrl: string;
            encode(message: _208.QueryClaimRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.QueryClaimRecordRequest;
            fromPartial(object: Partial<_208.QueryClaimRecordRequest>): _208.QueryClaimRecordRequest;
            fromAmino(object: _208.QueryClaimRecordRequestAmino): _208.QueryClaimRecordRequest;
            toAmino(message: _208.QueryClaimRecordRequest): _208.QueryClaimRecordRequestAmino;
            fromAminoMsg(object: _208.QueryClaimRecordRequestAminoMsg): _208.QueryClaimRecordRequest;
            fromProtoMsg(message: _208.QueryClaimRecordRequestProtoMsg): _208.QueryClaimRecordRequest;
            toProto(message: _208.QueryClaimRecordRequest): Uint8Array;
            toProtoMsg(message: _208.QueryClaimRecordRequest): _208.QueryClaimRecordRequestProtoMsg;
        };
        QueryClaimRecordResponse: {
            typeUrl: string;
            encode(message: _208.QueryClaimRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.QueryClaimRecordResponse;
            fromPartial(object: Partial<_208.QueryClaimRecordResponse>): _208.QueryClaimRecordResponse;
            fromAmino(object: _208.QueryClaimRecordResponseAmino): _208.QueryClaimRecordResponse;
            toAmino(message: _208.QueryClaimRecordResponse): _208.QueryClaimRecordResponseAmino;
            fromAminoMsg(object: _208.QueryClaimRecordResponseAminoMsg): _208.QueryClaimRecordResponse;
            fromProtoMsg(message: _208.QueryClaimRecordResponseProtoMsg): _208.QueryClaimRecordResponse;
            toProto(message: _208.QueryClaimRecordResponse): Uint8Array;
            toProtoMsg(message: _208.QueryClaimRecordResponse): _208.QueryClaimRecordResponseProtoMsg;
        };
        QueryClaimableForActionRequest: {
            typeUrl: string;
            encode(message: _208.QueryClaimableForActionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.QueryClaimableForActionRequest;
            fromPartial(object: Partial<_208.QueryClaimableForActionRequest>): _208.QueryClaimableForActionRequest;
            fromAmino(object: _208.QueryClaimableForActionRequestAmino): _208.QueryClaimableForActionRequest;
            toAmino(message: _208.QueryClaimableForActionRequest): _208.QueryClaimableForActionRequestAmino;
            fromAminoMsg(object: _208.QueryClaimableForActionRequestAminoMsg): _208.QueryClaimableForActionRequest;
            fromProtoMsg(message: _208.QueryClaimableForActionRequestProtoMsg): _208.QueryClaimableForActionRequest;
            toProto(message: _208.QueryClaimableForActionRequest): Uint8Array;
            toProtoMsg(message: _208.QueryClaimableForActionRequest): _208.QueryClaimableForActionRequestProtoMsg;
        };
        QueryClaimableForActionResponse: {
            typeUrl: string;
            encode(message: _208.QueryClaimableForActionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.QueryClaimableForActionResponse;
            fromPartial(object: Partial<_208.QueryClaimableForActionResponse>): _208.QueryClaimableForActionResponse;
            fromAmino(object: _208.QueryClaimableForActionResponseAmino): _208.QueryClaimableForActionResponse;
            toAmino(message: _208.QueryClaimableForActionResponse): _208.QueryClaimableForActionResponseAmino;
            fromAminoMsg(object: _208.QueryClaimableForActionResponseAminoMsg): _208.QueryClaimableForActionResponse;
            fromProtoMsg(message: _208.QueryClaimableForActionResponseProtoMsg): _208.QueryClaimableForActionResponse;
            toProto(message: _208.QueryClaimableForActionResponse): Uint8Array;
            toProtoMsg(message: _208.QueryClaimableForActionResponse): _208.QueryClaimableForActionResponseProtoMsg;
        };
        QueryTotalClaimableRequest: {
            typeUrl: string;
            encode(message: _208.QueryTotalClaimableRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.QueryTotalClaimableRequest;
            fromPartial(object: Partial<_208.QueryTotalClaimableRequest>): _208.QueryTotalClaimableRequest;
            fromAmino(object: _208.QueryTotalClaimableRequestAmino): _208.QueryTotalClaimableRequest;
            toAmino(message: _208.QueryTotalClaimableRequest): _208.QueryTotalClaimableRequestAmino;
            fromAminoMsg(object: _208.QueryTotalClaimableRequestAminoMsg): _208.QueryTotalClaimableRequest;
            fromProtoMsg(message: _208.QueryTotalClaimableRequestProtoMsg): _208.QueryTotalClaimableRequest;
            toProto(message: _208.QueryTotalClaimableRequest): Uint8Array;
            toProtoMsg(message: _208.QueryTotalClaimableRequest): _208.QueryTotalClaimableRequestProtoMsg;
        };
        QueryTotalClaimableResponse: {
            typeUrl: string;
            encode(message: _208.QueryTotalClaimableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.QueryTotalClaimableResponse;
            fromPartial(object: Partial<_208.QueryTotalClaimableResponse>): _208.QueryTotalClaimableResponse;
            fromAmino(object: _208.QueryTotalClaimableResponseAmino): _208.QueryTotalClaimableResponse;
            toAmino(message: _208.QueryTotalClaimableResponse): _208.QueryTotalClaimableResponseAmino;
            fromAminoMsg(object: _208.QueryTotalClaimableResponseAminoMsg): _208.QueryTotalClaimableResponse;
            fromProtoMsg(message: _208.QueryTotalClaimableResponseProtoMsg): _208.QueryTotalClaimableResponse;
            toProto(message: _208.QueryTotalClaimableResponse): Uint8Array;
            toProtoMsg(message: _208.QueryTotalClaimableResponse): _208.QueryTotalClaimableResponseProtoMsg;
        };
        QueryUserVestingsRequest: {
            typeUrl: string;
            encode(message: _208.QueryUserVestingsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.QueryUserVestingsRequest;
            fromPartial(object: Partial<_208.QueryUserVestingsRequest>): _208.QueryUserVestingsRequest;
            fromAmino(object: _208.QueryUserVestingsRequestAmino): _208.QueryUserVestingsRequest;
            toAmino(message: _208.QueryUserVestingsRequest): _208.QueryUserVestingsRequestAmino;
            fromAminoMsg(object: _208.QueryUserVestingsRequestAminoMsg): _208.QueryUserVestingsRequest;
            fromProtoMsg(message: _208.QueryUserVestingsRequestProtoMsg): _208.QueryUserVestingsRequest;
            toProto(message: _208.QueryUserVestingsRequest): Uint8Array;
            toProtoMsg(message: _208.QueryUserVestingsRequest): _208.QueryUserVestingsRequestProtoMsg;
        };
        QueryUserVestingsResponse: {
            typeUrl: string;
            encode(message: _208.QueryUserVestingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.QueryUserVestingsResponse;
            fromPartial(object: Partial<_208.QueryUserVestingsResponse>): _208.QueryUserVestingsResponse;
            fromAmino(object: _208.QueryUserVestingsResponseAmino): _208.QueryUserVestingsResponse;
            toAmino(message: _208.QueryUserVestingsResponse): _208.QueryUserVestingsResponseAmino;
            fromAminoMsg(object: _208.QueryUserVestingsResponseAminoMsg): _208.QueryUserVestingsResponse;
            fromProtoMsg(message: _208.QueryUserVestingsResponseProtoMsg): _208.QueryUserVestingsResponse;
            toProto(message: _208.QueryUserVestingsResponse): Uint8Array;
            toProtoMsg(message: _208.QueryUserVestingsResponse): _208.QueryUserVestingsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _207.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.Params;
            fromPartial(object: Partial<_207.Params>): _207.Params;
            fromAmino(object: _207.ParamsAmino): _207.Params;
            toAmino(message: _207.Params): _207.ParamsAmino;
            fromAminoMsg(object: _207.ParamsAminoMsg): _207.Params;
            fromProtoMsg(message: _207.ParamsProtoMsg): _207.Params;
            toProto(message: _207.Params): Uint8Array;
            toProtoMsg(message: _207.Params): _207.ParamsProtoMsg;
        };
        Airdrop: {
            typeUrl: string;
            encode(message: _207.Airdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.Airdrop;
            fromPartial(object: Partial<_207.Airdrop>): _207.Airdrop;
            fromAmino(object: _207.AirdropAmino): _207.Airdrop;
            toAmino(message: _207.Airdrop): _207.AirdropAmino;
            fromAminoMsg(object: _207.AirdropAminoMsg): _207.Airdrop;
            fromProtoMsg(message: _207.AirdropProtoMsg): _207.Airdrop;
            toProto(message: _207.Airdrop): Uint8Array;
            toProtoMsg(message: _207.Airdrop): _207.AirdropProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _206.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.GenesisState;
            fromPartial(object: Partial<_206.GenesisState>): _206.GenesisState;
            fromAmino(object: _206.GenesisStateAmino): _206.GenesisState;
            toAmino(message: _206.GenesisState): _206.GenesisStateAmino;
            fromAminoMsg(object: _206.GenesisStateAminoMsg): _206.GenesisState;
            fromProtoMsg(message: _206.GenesisStateProtoMsg): _206.GenesisState;
            toProto(message: _206.GenesisState): Uint8Array;
            toProtoMsg(message: _206.GenesisState): _206.GenesisStateProtoMsg;
        };
        actionFromJSON(object: any): _205.Action;
        actionToJSON(object: _205.Action): string;
        Action: typeof _205.Action;
        ActionSDKType: typeof _205.Action;
        ActionAmino: typeof _205.Action;
        ClaimRecord: {
            typeUrl: string;
            encode(message: _205.ClaimRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.ClaimRecord;
            fromPartial(object: Partial<_205.ClaimRecord>): _205.ClaimRecord;
            fromAmino(object: _205.ClaimRecordAmino): _205.ClaimRecord;
            toAmino(message: _205.ClaimRecord): _205.ClaimRecordAmino;
            fromAminoMsg(object: _205.ClaimRecordAminoMsg): _205.ClaimRecord;
            fromProtoMsg(message: _205.ClaimRecordProtoMsg): _205.ClaimRecord;
            toProto(message: _205.ClaimRecord): Uint8Array;
            toProtoMsg(message: _205.ClaimRecord): _205.ClaimRecordProtoMsg;
        };
    };
    const epochs: {
        QueryClientImpl: typeof _408.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            epochInfos(request?: _211.QueryEpochsInfoRequest): Promise<_211.QueryEpochsInfoResponse>;
            currentEpoch(request: _211.QueryCurrentEpochRequest): Promise<_211.QueryCurrentEpochResponse>;
            epochInfo(request: _211.QueryEpochInfoRequest): Promise<_211.QueryEpochInfoResponse>;
        };
        QueryEpochsInfoRequest: {
            typeUrl: string;
            encode(message: _211.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryEpochsInfoRequest;
            fromPartial(object: Partial<_211.QueryEpochsInfoRequest>): _211.QueryEpochsInfoRequest;
            fromAmino(object: _211.QueryEpochsInfoRequestAmino): _211.QueryEpochsInfoRequest;
            toAmino(message: _211.QueryEpochsInfoRequest): _211.QueryEpochsInfoRequestAmino;
            fromAminoMsg(object: _211.QueryEpochsInfoRequestAminoMsg): _211.QueryEpochsInfoRequest;
            fromProtoMsg(message: _211.QueryEpochsInfoRequestProtoMsg): _211.QueryEpochsInfoRequest;
            toProto(message: _211.QueryEpochsInfoRequest): Uint8Array;
            toProtoMsg(message: _211.QueryEpochsInfoRequest): _211.QueryEpochsInfoRequestProtoMsg;
        };
        QueryEpochsInfoResponse: {
            typeUrl: string;
            encode(message: _211.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryEpochsInfoResponse;
            fromPartial(object: Partial<_211.QueryEpochsInfoResponse>): _211.QueryEpochsInfoResponse;
            fromAmino(object: _211.QueryEpochsInfoResponseAmino): _211.QueryEpochsInfoResponse;
            toAmino(message: _211.QueryEpochsInfoResponse): _211.QueryEpochsInfoResponseAmino;
            fromAminoMsg(object: _211.QueryEpochsInfoResponseAminoMsg): _211.QueryEpochsInfoResponse;
            fromProtoMsg(message: _211.QueryEpochsInfoResponseProtoMsg): _211.QueryEpochsInfoResponse;
            toProto(message: _211.QueryEpochsInfoResponse): Uint8Array;
            toProtoMsg(message: _211.QueryEpochsInfoResponse): _211.QueryEpochsInfoResponseProtoMsg;
        };
        QueryCurrentEpochRequest: {
            typeUrl: string;
            encode(message: _211.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryCurrentEpochRequest;
            fromPartial(object: Partial<_211.QueryCurrentEpochRequest>): _211.QueryCurrentEpochRequest;
            fromAmino(object: _211.QueryCurrentEpochRequestAmino): _211.QueryCurrentEpochRequest;
            toAmino(message: _211.QueryCurrentEpochRequest): _211.QueryCurrentEpochRequestAmino;
            fromAminoMsg(object: _211.QueryCurrentEpochRequestAminoMsg): _211.QueryCurrentEpochRequest;
            fromProtoMsg(message: _211.QueryCurrentEpochRequestProtoMsg): _211.QueryCurrentEpochRequest;
            toProto(message: _211.QueryCurrentEpochRequest): Uint8Array;
            toProtoMsg(message: _211.QueryCurrentEpochRequest): _211.QueryCurrentEpochRequestProtoMsg;
        };
        QueryCurrentEpochResponse: {
            typeUrl: string;
            encode(message: _211.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryCurrentEpochResponse;
            fromPartial(object: Partial<_211.QueryCurrentEpochResponse>): _211.QueryCurrentEpochResponse;
            fromAmino(object: _211.QueryCurrentEpochResponseAmino): _211.QueryCurrentEpochResponse;
            toAmino(message: _211.QueryCurrentEpochResponse): _211.QueryCurrentEpochResponseAmino;
            fromAminoMsg(object: _211.QueryCurrentEpochResponseAminoMsg): _211.QueryCurrentEpochResponse;
            fromProtoMsg(message: _211.QueryCurrentEpochResponseProtoMsg): _211.QueryCurrentEpochResponse;
            toProto(message: _211.QueryCurrentEpochResponse): Uint8Array;
            toProtoMsg(message: _211.QueryCurrentEpochResponse): _211.QueryCurrentEpochResponseProtoMsg;
        };
        QueryEpochInfoRequest: {
            typeUrl: string;
            encode(message: _211.QueryEpochInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryEpochInfoRequest;
            fromPartial(object: Partial<_211.QueryEpochInfoRequest>): _211.QueryEpochInfoRequest;
            fromAmino(object: _211.QueryEpochInfoRequestAmino): _211.QueryEpochInfoRequest;
            toAmino(message: _211.QueryEpochInfoRequest): _211.QueryEpochInfoRequestAmino;
            fromAminoMsg(object: _211.QueryEpochInfoRequestAminoMsg): _211.QueryEpochInfoRequest;
            fromProtoMsg(message: _211.QueryEpochInfoRequestProtoMsg): _211.QueryEpochInfoRequest;
            toProto(message: _211.QueryEpochInfoRequest): Uint8Array;
            toProtoMsg(message: _211.QueryEpochInfoRequest): _211.QueryEpochInfoRequestProtoMsg;
        };
        QueryEpochInfoResponse: {
            typeUrl: string;
            encode(message: _211.QueryEpochInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryEpochInfoResponse;
            fromPartial(object: Partial<_211.QueryEpochInfoResponse>): _211.QueryEpochInfoResponse;
            fromAmino(object: _211.QueryEpochInfoResponseAmino): _211.QueryEpochInfoResponse;
            toAmino(message: _211.QueryEpochInfoResponse): _211.QueryEpochInfoResponseAmino;
            fromAminoMsg(object: _211.QueryEpochInfoResponseAminoMsg): _211.QueryEpochInfoResponse;
            fromProtoMsg(message: _211.QueryEpochInfoResponseProtoMsg): _211.QueryEpochInfoResponse;
            toProto(message: _211.QueryEpochInfoResponse): Uint8Array;
            toProtoMsg(message: _211.QueryEpochInfoResponse): _211.QueryEpochInfoResponseProtoMsg;
        };
        EpochInfo: {
            typeUrl: string;
            encode(message: _210.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.EpochInfo;
            fromPartial(object: Partial<_210.EpochInfo>): _210.EpochInfo;
            fromAmino(object: _210.EpochInfoAmino): _210.EpochInfo;
            toAmino(message: _210.EpochInfo): _210.EpochInfoAmino;
            fromAminoMsg(object: _210.EpochInfoAminoMsg): _210.EpochInfo;
            fromProtoMsg(message: _210.EpochInfoProtoMsg): _210.EpochInfo;
            toProto(message: _210.EpochInfo): Uint8Array;
            toProtoMsg(message: _210.EpochInfo): _210.EpochInfoProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _210.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.GenesisState;
            fromPartial(object: Partial<_210.GenesisState>): _210.GenesisState;
            fromAmino(object: _210.GenesisStateAmino): _210.GenesisState;
            toAmino(message: _210.GenesisState): _210.GenesisStateAmino;
            fromAminoMsg(object: _210.GenesisStateAminoMsg): _210.GenesisState;
            fromProtoMsg(message: _210.GenesisStateProtoMsg): _210.GenesisState;
            toProto(message: _210.GenesisState): Uint8Array;
            toProtoMsg(message: _210.GenesisState): _210.GenesisStateProtoMsg;
        };
    };
    const icacallbacks: {
        QueryClientImpl: typeof _409.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _216.QueryParamsRequest): Promise<_216.QueryParamsResponse>;
            callbackData(request: _216.QueryGetCallbackDataRequest): Promise<_216.QueryGetCallbackDataResponse>;
            callbackDataAll(request?: _216.QueryAllCallbackDataRequest): Promise<_216.QueryAllCallbackDataResponse>;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _216.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.QueryParamsRequest;
            fromPartial(_: Partial<_216.QueryParamsRequest>): _216.QueryParamsRequest;
            fromAmino(_: _216.QueryParamsRequestAmino): _216.QueryParamsRequest;
            toAmino(_: _216.QueryParamsRequest): _216.QueryParamsRequestAmino;
            fromAminoMsg(object: _216.QueryParamsRequestAminoMsg): _216.QueryParamsRequest;
            fromProtoMsg(message: _216.QueryParamsRequestProtoMsg): _216.QueryParamsRequest;
            toProto(message: _216.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _216.QueryParamsRequest): _216.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _216.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.QueryParamsResponse;
            fromPartial(object: Partial<_216.QueryParamsResponse>): _216.QueryParamsResponse;
            fromAmino(object: _216.QueryParamsResponseAmino): _216.QueryParamsResponse;
            toAmino(message: _216.QueryParamsResponse): _216.QueryParamsResponseAmino;
            fromAminoMsg(object: _216.QueryParamsResponseAminoMsg): _216.QueryParamsResponse;
            fromProtoMsg(message: _216.QueryParamsResponseProtoMsg): _216.QueryParamsResponse;
            toProto(message: _216.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _216.QueryParamsResponse): _216.QueryParamsResponseProtoMsg;
        };
        QueryGetCallbackDataRequest: {
            typeUrl: string;
            encode(message: _216.QueryGetCallbackDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.QueryGetCallbackDataRequest;
            fromPartial(object: Partial<_216.QueryGetCallbackDataRequest>): _216.QueryGetCallbackDataRequest;
            fromAmino(object: _216.QueryGetCallbackDataRequestAmino): _216.QueryGetCallbackDataRequest;
            toAmino(message: _216.QueryGetCallbackDataRequest): _216.QueryGetCallbackDataRequestAmino;
            fromAminoMsg(object: _216.QueryGetCallbackDataRequestAminoMsg): _216.QueryGetCallbackDataRequest;
            fromProtoMsg(message: _216.QueryGetCallbackDataRequestProtoMsg): _216.QueryGetCallbackDataRequest;
            toProto(message: _216.QueryGetCallbackDataRequest): Uint8Array;
            toProtoMsg(message: _216.QueryGetCallbackDataRequest): _216.QueryGetCallbackDataRequestProtoMsg;
        };
        QueryGetCallbackDataResponse: {
            typeUrl: string;
            encode(message: _216.QueryGetCallbackDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.QueryGetCallbackDataResponse;
            fromPartial(object: Partial<_216.QueryGetCallbackDataResponse>): _216.QueryGetCallbackDataResponse;
            fromAmino(object: _216.QueryGetCallbackDataResponseAmino): _216.QueryGetCallbackDataResponse;
            toAmino(message: _216.QueryGetCallbackDataResponse): _216.QueryGetCallbackDataResponseAmino;
            fromAminoMsg(object: _216.QueryGetCallbackDataResponseAminoMsg): _216.QueryGetCallbackDataResponse;
            fromProtoMsg(message: _216.QueryGetCallbackDataResponseProtoMsg): _216.QueryGetCallbackDataResponse;
            toProto(message: _216.QueryGetCallbackDataResponse): Uint8Array;
            toProtoMsg(message: _216.QueryGetCallbackDataResponse): _216.QueryGetCallbackDataResponseProtoMsg;
        };
        QueryAllCallbackDataRequest: {
            typeUrl: string;
            encode(message: _216.QueryAllCallbackDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.QueryAllCallbackDataRequest;
            fromPartial(object: Partial<_216.QueryAllCallbackDataRequest>): _216.QueryAllCallbackDataRequest;
            fromAmino(object: _216.QueryAllCallbackDataRequestAmino): _216.QueryAllCallbackDataRequest;
            toAmino(message: _216.QueryAllCallbackDataRequest): _216.QueryAllCallbackDataRequestAmino;
            fromAminoMsg(object: _216.QueryAllCallbackDataRequestAminoMsg): _216.QueryAllCallbackDataRequest;
            fromProtoMsg(message: _216.QueryAllCallbackDataRequestProtoMsg): _216.QueryAllCallbackDataRequest;
            toProto(message: _216.QueryAllCallbackDataRequest): Uint8Array;
            toProtoMsg(message: _216.QueryAllCallbackDataRequest): _216.QueryAllCallbackDataRequestProtoMsg;
        };
        QueryAllCallbackDataResponse: {
            typeUrl: string;
            encode(message: _216.QueryAllCallbackDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.QueryAllCallbackDataResponse;
            fromPartial(object: Partial<_216.QueryAllCallbackDataResponse>): _216.QueryAllCallbackDataResponse;
            fromAmino(object: _216.QueryAllCallbackDataResponseAmino): _216.QueryAllCallbackDataResponse;
            toAmino(message: _216.QueryAllCallbackDataResponse): _216.QueryAllCallbackDataResponseAmino;
            fromAminoMsg(object: _216.QueryAllCallbackDataResponseAminoMsg): _216.QueryAllCallbackDataResponse;
            fromProtoMsg(message: _216.QueryAllCallbackDataResponseProtoMsg): _216.QueryAllCallbackDataResponse;
            toProto(message: _216.QueryAllCallbackDataResponse): Uint8Array;
            toProtoMsg(message: _216.QueryAllCallbackDataResponse): _216.QueryAllCallbackDataResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _215.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.Params;
            fromPartial(_: Partial<_215.Params>): _215.Params;
            fromAmino(_: _215.ParamsAmino): _215.Params;
            toAmino(_: _215.Params): _215.ParamsAmino;
            fromAminoMsg(object: _215.ParamsAminoMsg): _215.Params;
            fromProtoMsg(message: _215.ParamsProtoMsg): _215.Params;
            toProto(message: _215.Params): Uint8Array;
            toProtoMsg(message: _215.Params): _215.ParamsProtoMsg;
        };
        IcacallbacksPacketData: {
            typeUrl: string;
            encode(message: _214.IcacallbacksPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.IcacallbacksPacketData;
            fromPartial(object: Partial<_214.IcacallbacksPacketData>): _214.IcacallbacksPacketData;
            fromAmino(object: _214.IcacallbacksPacketDataAmino): _214.IcacallbacksPacketData;
            toAmino(message: _214.IcacallbacksPacketData): _214.IcacallbacksPacketDataAmino;
            fromAminoMsg(object: _214.IcacallbacksPacketDataAminoMsg): _214.IcacallbacksPacketData;
            fromProtoMsg(message: _214.IcacallbacksPacketDataProtoMsg): _214.IcacallbacksPacketData;
            toProto(message: _214.IcacallbacksPacketData): Uint8Array;
            toProtoMsg(message: _214.IcacallbacksPacketData): _214.IcacallbacksPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _214.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.NoData;
            fromPartial(_: Partial<_214.NoData>): _214.NoData;
            fromAmino(_: _214.NoDataAmino): _214.NoData;
            toAmino(_: _214.NoData): _214.NoDataAmino;
            fromAminoMsg(object: _214.NoDataAminoMsg): _214.NoData;
            fromProtoMsg(message: _214.NoDataProtoMsg): _214.NoData;
            toProto(message: _214.NoData): Uint8Array;
            toProtoMsg(message: _214.NoData): _214.NoDataProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _213.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.GenesisState;
            fromPartial(object: Partial<_213.GenesisState>): _213.GenesisState;
            fromAmino(object: _213.GenesisStateAmino): _213.GenesisState;
            toAmino(message: _213.GenesisState): _213.GenesisStateAmino;
            fromAminoMsg(object: _213.GenesisStateAminoMsg): _213.GenesisState;
            fromProtoMsg(message: _213.GenesisStateProtoMsg): _213.GenesisState;
            toProto(message: _213.GenesisState): Uint8Array;
            toProtoMsg(message: _213.GenesisState): _213.GenesisStateProtoMsg;
        };
        CallbackData: {
            typeUrl: string;
            encode(message: _212.CallbackData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.CallbackData;
            fromPartial(object: Partial<_212.CallbackData>): _212.CallbackData;
            fromAmino(object: _212.CallbackDataAmino): _212.CallbackData;
            toAmino(message: _212.CallbackData): _212.CallbackDataAmino;
            fromAminoMsg(object: _212.CallbackDataAminoMsg): _212.CallbackData;
            fromProtoMsg(message: _212.CallbackDataProtoMsg): _212.CallbackData;
            toProto(message: _212.CallbackData): Uint8Array;
            toProtoMsg(message: _212.CallbackData): _212.CallbackDataProtoMsg;
        };
    };
    const icaoracle: {
        MsgClientImpl: typeof _421.MsgClientImpl;
        QueryClientImpl: typeof _410.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            oracle(request: _221.QueryOracleRequest): Promise<_221.QueryOracleResponse>;
            allOracles(request?: _221.QueryAllOraclesRequest): Promise<_221.QueryAllOraclesResponse>;
            activeOracles(request: _221.QueryActiveOraclesRequest): Promise<_221.QueryActiveOraclesResponse>;
            metrics(request: _221.QueryMetricsRequest): Promise<_221.QueryMetricsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                addOracle(value: _222.MsgAddOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                instantiateOracle(value: _222.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreOracleICA(value: _222.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                toggleOracle(value: _222.MsgToggleOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeOracle(value: _222.MsgRemoveOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                addOracle(value: _222.MsgAddOracle): {
                    typeUrl: string;
                    value: _222.MsgAddOracle;
                };
                instantiateOracle(value: _222.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: _222.MsgInstantiateOracle;
                };
                restoreOracleICA(value: _222.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: _222.MsgRestoreOracleICA;
                };
                toggleOracle(value: _222.MsgToggleOracle): {
                    typeUrl: string;
                    value: _222.MsgToggleOracle;
                };
                removeOracle(value: _222.MsgRemoveOracle): {
                    typeUrl: string;
                    value: _222.MsgRemoveOracle;
                };
            };
            fromPartial: {
                addOracle(value: _222.MsgAddOracle): {
                    typeUrl: string;
                    value: _222.MsgAddOracle;
                };
                instantiateOracle(value: _222.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: _222.MsgInstantiateOracle;
                };
                restoreOracleICA(value: _222.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: _222.MsgRestoreOracleICA;
                };
                toggleOracle(value: _222.MsgToggleOracle): {
                    typeUrl: string;
                    value: _222.MsgToggleOracle;
                };
                removeOracle(value: _222.MsgRemoveOracle): {
                    typeUrl: string;
                    value: _222.MsgRemoveOracle;
                };
            };
        };
        AminoConverter: {
            "/stride.icaoracle.MsgAddOracle": {
                aminoType: string;
                toAmino: (message: _222.MsgAddOracle) => _222.MsgAddOracleAmino;
                fromAmino: (object: _222.MsgAddOracleAmino) => _222.MsgAddOracle;
            };
            "/stride.icaoracle.MsgInstantiateOracle": {
                aminoType: string;
                toAmino: (message: _222.MsgInstantiateOracle) => _222.MsgInstantiateOracleAmino;
                fromAmino: (object: _222.MsgInstantiateOracleAmino) => _222.MsgInstantiateOracle;
            };
            "/stride.icaoracle.MsgRestoreOracleICA": {
                aminoType: string;
                toAmino: (message: _222.MsgRestoreOracleICA) => _222.MsgRestoreOracleICAAmino;
                fromAmino: (object: _222.MsgRestoreOracleICAAmino) => _222.MsgRestoreOracleICA;
            };
            "/stride.icaoracle.MsgToggleOracle": {
                aminoType: string;
                toAmino: (message: _222.MsgToggleOracle) => _222.MsgToggleOracleAmino;
                fromAmino: (object: _222.MsgToggleOracleAmino) => _222.MsgToggleOracle;
            };
            "/stride.icaoracle.MsgRemoveOracle": {
                aminoType: string;
                toAmino: (message: _222.MsgRemoveOracle) => _222.MsgRemoveOracleAmino;
                fromAmino: (object: _222.MsgRemoveOracleAmino) => _222.MsgRemoveOracle;
            };
        };
        MsgAddOracle: {
            typeUrl: string;
            encode(message: _222.MsgAddOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.MsgAddOracle;
            fromPartial(object: Partial<_222.MsgAddOracle>): _222.MsgAddOracle;
            fromAmino(object: _222.MsgAddOracleAmino): _222.MsgAddOracle;
            toAmino(message: _222.MsgAddOracle): _222.MsgAddOracleAmino;
            fromAminoMsg(object: _222.MsgAddOracleAminoMsg): _222.MsgAddOracle;
            toAminoMsg(message: _222.MsgAddOracle): _222.MsgAddOracleAminoMsg;
            fromProtoMsg(message: _222.MsgAddOracleProtoMsg): _222.MsgAddOracle;
            toProto(message: _222.MsgAddOracle): Uint8Array;
            toProtoMsg(message: _222.MsgAddOracle): _222.MsgAddOracleProtoMsg;
        };
        MsgAddOracleResponse: {
            typeUrl: string;
            encode(_: _222.MsgAddOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.MsgAddOracleResponse;
            fromPartial(_: Partial<_222.MsgAddOracleResponse>): _222.MsgAddOracleResponse;
            fromAmino(_: _222.MsgAddOracleResponseAmino): _222.MsgAddOracleResponse;
            toAmino(_: _222.MsgAddOracleResponse): _222.MsgAddOracleResponseAmino;
            fromAminoMsg(object: _222.MsgAddOracleResponseAminoMsg): _222.MsgAddOracleResponse;
            fromProtoMsg(message: _222.MsgAddOracleResponseProtoMsg): _222.MsgAddOracleResponse;
            toProto(message: _222.MsgAddOracleResponse): Uint8Array;
            toProtoMsg(message: _222.MsgAddOracleResponse): _222.MsgAddOracleResponseProtoMsg;
        };
        MsgInstantiateOracle: {
            typeUrl: string;
            encode(message: _222.MsgInstantiateOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.MsgInstantiateOracle;
            fromPartial(object: Partial<_222.MsgInstantiateOracle>): _222.MsgInstantiateOracle;
            fromAmino(object: _222.MsgInstantiateOracleAmino): _222.MsgInstantiateOracle;
            toAmino(message: _222.MsgInstantiateOracle): _222.MsgInstantiateOracleAmino;
            fromAminoMsg(object: _222.MsgInstantiateOracleAminoMsg): _222.MsgInstantiateOracle;
            toAminoMsg(message: _222.MsgInstantiateOracle): _222.MsgInstantiateOracleAminoMsg;
            fromProtoMsg(message: _222.MsgInstantiateOracleProtoMsg): _222.MsgInstantiateOracle;
            toProto(message: _222.MsgInstantiateOracle): Uint8Array;
            toProtoMsg(message: _222.MsgInstantiateOracle): _222.MsgInstantiateOracleProtoMsg;
        };
        MsgInstantiateOracleResponse: {
            typeUrl: string;
            encode(_: _222.MsgInstantiateOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.MsgInstantiateOracleResponse;
            fromPartial(_: Partial<_222.MsgInstantiateOracleResponse>): _222.MsgInstantiateOracleResponse;
            fromAmino(_: _222.MsgInstantiateOracleResponseAmino): _222.MsgInstantiateOracleResponse;
            toAmino(_: _222.MsgInstantiateOracleResponse): _222.MsgInstantiateOracleResponseAmino;
            fromAminoMsg(object: _222.MsgInstantiateOracleResponseAminoMsg): _222.MsgInstantiateOracleResponse;
            fromProtoMsg(message: _222.MsgInstantiateOracleResponseProtoMsg): _222.MsgInstantiateOracleResponse;
            toProto(message: _222.MsgInstantiateOracleResponse): Uint8Array;
            toProtoMsg(message: _222.MsgInstantiateOracleResponse): _222.MsgInstantiateOracleResponseProtoMsg;
        };
        MsgRestoreOracleICA: {
            typeUrl: string;
            encode(message: _222.MsgRestoreOracleICA, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.MsgRestoreOracleICA;
            fromPartial(object: Partial<_222.MsgRestoreOracleICA>): _222.MsgRestoreOracleICA;
            fromAmino(object: _222.MsgRestoreOracleICAAmino): _222.MsgRestoreOracleICA;
            toAmino(message: _222.MsgRestoreOracleICA): _222.MsgRestoreOracleICAAmino;
            fromAminoMsg(object: _222.MsgRestoreOracleICAAminoMsg): _222.MsgRestoreOracleICA;
            toAminoMsg(message: _222.MsgRestoreOracleICA): _222.MsgRestoreOracleICAAminoMsg;
            fromProtoMsg(message: _222.MsgRestoreOracleICAProtoMsg): _222.MsgRestoreOracleICA;
            toProto(message: _222.MsgRestoreOracleICA): Uint8Array;
            toProtoMsg(message: _222.MsgRestoreOracleICA): _222.MsgRestoreOracleICAProtoMsg;
        };
        MsgRestoreOracleICAResponse: {
            typeUrl: string;
            encode(_: _222.MsgRestoreOracleICAResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.MsgRestoreOracleICAResponse;
            fromPartial(_: Partial<_222.MsgRestoreOracleICAResponse>): _222.MsgRestoreOracleICAResponse;
            fromAmino(_: _222.MsgRestoreOracleICAResponseAmino): _222.MsgRestoreOracleICAResponse;
            toAmino(_: _222.MsgRestoreOracleICAResponse): _222.MsgRestoreOracleICAResponseAmino;
            fromAminoMsg(object: _222.MsgRestoreOracleICAResponseAminoMsg): _222.MsgRestoreOracleICAResponse;
            fromProtoMsg(message: _222.MsgRestoreOracleICAResponseProtoMsg): _222.MsgRestoreOracleICAResponse;
            toProto(message: _222.MsgRestoreOracleICAResponse): Uint8Array;
            toProtoMsg(message: _222.MsgRestoreOracleICAResponse): _222.MsgRestoreOracleICAResponseProtoMsg;
        };
        MsgToggleOracle: {
            typeUrl: string;
            encode(message: _222.MsgToggleOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.MsgToggleOracle;
            fromPartial(object: Partial<_222.MsgToggleOracle>): _222.MsgToggleOracle;
            fromAmino(object: _222.MsgToggleOracleAmino): _222.MsgToggleOracle;
            toAmino(message: _222.MsgToggleOracle): _222.MsgToggleOracleAmino;
            fromAminoMsg(object: _222.MsgToggleOracleAminoMsg): _222.MsgToggleOracle;
            toAminoMsg(message: _222.MsgToggleOracle): _222.MsgToggleOracleAminoMsg;
            fromProtoMsg(message: _222.MsgToggleOracleProtoMsg): _222.MsgToggleOracle;
            toProto(message: _222.MsgToggleOracle): Uint8Array;
            toProtoMsg(message: _222.MsgToggleOracle): _222.MsgToggleOracleProtoMsg;
        };
        MsgToggleOracleResponse: {
            typeUrl: string;
            encode(_: _222.MsgToggleOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.MsgToggleOracleResponse;
            fromPartial(_: Partial<_222.MsgToggleOracleResponse>): _222.MsgToggleOracleResponse;
            fromAmino(_: _222.MsgToggleOracleResponseAmino): _222.MsgToggleOracleResponse;
            toAmino(_: _222.MsgToggleOracleResponse): _222.MsgToggleOracleResponseAmino;
            fromAminoMsg(object: _222.MsgToggleOracleResponseAminoMsg): _222.MsgToggleOracleResponse;
            fromProtoMsg(message: _222.MsgToggleOracleResponseProtoMsg): _222.MsgToggleOracleResponse;
            toProto(message: _222.MsgToggleOracleResponse): Uint8Array;
            toProtoMsg(message: _222.MsgToggleOracleResponse): _222.MsgToggleOracleResponseProtoMsg;
        };
        MsgRemoveOracle: {
            typeUrl: string;
            encode(message: _222.MsgRemoveOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.MsgRemoveOracle;
            fromPartial(object: Partial<_222.MsgRemoveOracle>): _222.MsgRemoveOracle;
            fromAmino(object: _222.MsgRemoveOracleAmino): _222.MsgRemoveOracle;
            toAmino(message: _222.MsgRemoveOracle): _222.MsgRemoveOracleAmino;
            fromAminoMsg(object: _222.MsgRemoveOracleAminoMsg): _222.MsgRemoveOracle;
            toAminoMsg(message: _222.MsgRemoveOracle): _222.MsgRemoveOracleAminoMsg;
            fromProtoMsg(message: _222.MsgRemoveOracleProtoMsg): _222.MsgRemoveOracle;
            toProto(message: _222.MsgRemoveOracle): Uint8Array;
            toProtoMsg(message: _222.MsgRemoveOracle): _222.MsgRemoveOracleProtoMsg;
        };
        MsgRemoveOracleResponse: {
            typeUrl: string;
            encode(_: _222.MsgRemoveOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.MsgRemoveOracleResponse;
            fromPartial(_: Partial<_222.MsgRemoveOracleResponse>): _222.MsgRemoveOracleResponse;
            fromAmino(_: _222.MsgRemoveOracleResponseAmino): _222.MsgRemoveOracleResponse;
            toAmino(_: _222.MsgRemoveOracleResponse): _222.MsgRemoveOracleResponseAmino;
            fromAminoMsg(object: _222.MsgRemoveOracleResponseAminoMsg): _222.MsgRemoveOracleResponse;
            fromProtoMsg(message: _222.MsgRemoveOracleResponseProtoMsg): _222.MsgRemoveOracleResponse;
            toProto(message: _222.MsgRemoveOracleResponse): Uint8Array;
            toProtoMsg(message: _222.MsgRemoveOracleResponse): _222.MsgRemoveOracleResponseProtoMsg;
        };
        QueryOracleRequest: {
            typeUrl: string;
            encode(message: _221.QueryOracleRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.QueryOracleRequest;
            fromPartial(object: Partial<_221.QueryOracleRequest>): _221.QueryOracleRequest;
            fromAmino(object: _221.QueryOracleRequestAmino): _221.QueryOracleRequest;
            toAmino(message: _221.QueryOracleRequest): _221.QueryOracleRequestAmino;
            fromAminoMsg(object: _221.QueryOracleRequestAminoMsg): _221.QueryOracleRequest;
            fromProtoMsg(message: _221.QueryOracleRequestProtoMsg): _221.QueryOracleRequest;
            toProto(message: _221.QueryOracleRequest): Uint8Array;
            toProtoMsg(message: _221.QueryOracleRequest): _221.QueryOracleRequestProtoMsg;
        };
        QueryOracleResponse: {
            typeUrl: string;
            encode(message: _221.QueryOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.QueryOracleResponse;
            fromPartial(object: Partial<_221.QueryOracleResponse>): _221.QueryOracleResponse;
            fromAmino(object: _221.QueryOracleResponseAmino): _221.QueryOracleResponse;
            toAmino(message: _221.QueryOracleResponse): _221.QueryOracleResponseAmino;
            fromAminoMsg(object: _221.QueryOracleResponseAminoMsg): _221.QueryOracleResponse;
            fromProtoMsg(message: _221.QueryOracleResponseProtoMsg): _221.QueryOracleResponse;
            toProto(message: _221.QueryOracleResponse): Uint8Array;
            toProtoMsg(message: _221.QueryOracleResponse): _221.QueryOracleResponseProtoMsg;
        };
        QueryAllOraclesRequest: {
            typeUrl: string;
            encode(_: _221.QueryAllOraclesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.QueryAllOraclesRequest;
            fromPartial(_: Partial<_221.QueryAllOraclesRequest>): _221.QueryAllOraclesRequest;
            fromAmino(_: _221.QueryAllOraclesRequestAmino): _221.QueryAllOraclesRequest;
            toAmino(_: _221.QueryAllOraclesRequest): _221.QueryAllOraclesRequestAmino;
            fromAminoMsg(object: _221.QueryAllOraclesRequestAminoMsg): _221.QueryAllOraclesRequest;
            fromProtoMsg(message: _221.QueryAllOraclesRequestProtoMsg): _221.QueryAllOraclesRequest;
            toProto(message: _221.QueryAllOraclesRequest): Uint8Array;
            toProtoMsg(message: _221.QueryAllOraclesRequest): _221.QueryAllOraclesRequestProtoMsg;
        };
        QueryAllOraclesResponse: {
            typeUrl: string;
            encode(message: _221.QueryAllOraclesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.QueryAllOraclesResponse;
            fromPartial(object: Partial<_221.QueryAllOraclesResponse>): _221.QueryAllOraclesResponse;
            fromAmino(object: _221.QueryAllOraclesResponseAmino): _221.QueryAllOraclesResponse;
            toAmino(message: _221.QueryAllOraclesResponse): _221.QueryAllOraclesResponseAmino;
            fromAminoMsg(object: _221.QueryAllOraclesResponseAminoMsg): _221.QueryAllOraclesResponse;
            fromProtoMsg(message: _221.QueryAllOraclesResponseProtoMsg): _221.QueryAllOraclesResponse;
            toProto(message: _221.QueryAllOraclesResponse): Uint8Array;
            toProtoMsg(message: _221.QueryAllOraclesResponse): _221.QueryAllOraclesResponseProtoMsg;
        };
        QueryActiveOraclesRequest: {
            typeUrl: string;
            encode(message: _221.QueryActiveOraclesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.QueryActiveOraclesRequest;
            fromPartial(object: Partial<_221.QueryActiveOraclesRequest>): _221.QueryActiveOraclesRequest;
            fromAmino(object: _221.QueryActiveOraclesRequestAmino): _221.QueryActiveOraclesRequest;
            toAmino(message: _221.QueryActiveOraclesRequest): _221.QueryActiveOraclesRequestAmino;
            fromAminoMsg(object: _221.QueryActiveOraclesRequestAminoMsg): _221.QueryActiveOraclesRequest;
            fromProtoMsg(message: _221.QueryActiveOraclesRequestProtoMsg): _221.QueryActiveOraclesRequest;
            toProto(message: _221.QueryActiveOraclesRequest): Uint8Array;
            toProtoMsg(message: _221.QueryActiveOraclesRequest): _221.QueryActiveOraclesRequestProtoMsg;
        };
        QueryActiveOraclesResponse: {
            typeUrl: string;
            encode(message: _221.QueryActiveOraclesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.QueryActiveOraclesResponse;
            fromPartial(object: Partial<_221.QueryActiveOraclesResponse>): _221.QueryActiveOraclesResponse;
            fromAmino(object: _221.QueryActiveOraclesResponseAmino): _221.QueryActiveOraclesResponse;
            toAmino(message: _221.QueryActiveOraclesResponse): _221.QueryActiveOraclesResponseAmino;
            fromAminoMsg(object: _221.QueryActiveOraclesResponseAminoMsg): _221.QueryActiveOraclesResponse;
            fromProtoMsg(message: _221.QueryActiveOraclesResponseProtoMsg): _221.QueryActiveOraclesResponse;
            toProto(message: _221.QueryActiveOraclesResponse): Uint8Array;
            toProtoMsg(message: _221.QueryActiveOraclesResponse): _221.QueryActiveOraclesResponseProtoMsg;
        };
        QueryMetricsRequest: {
            typeUrl: string;
            encode(message: _221.QueryMetricsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.QueryMetricsRequest;
            fromPartial(object: Partial<_221.QueryMetricsRequest>): _221.QueryMetricsRequest;
            fromAmino(object: _221.QueryMetricsRequestAmino): _221.QueryMetricsRequest;
            toAmino(message: _221.QueryMetricsRequest): _221.QueryMetricsRequestAmino;
            fromAminoMsg(object: _221.QueryMetricsRequestAminoMsg): _221.QueryMetricsRequest;
            fromProtoMsg(message: _221.QueryMetricsRequestProtoMsg): _221.QueryMetricsRequest;
            toProto(message: _221.QueryMetricsRequest): Uint8Array;
            toProtoMsg(message: _221.QueryMetricsRequest): _221.QueryMetricsRequestProtoMsg;
        };
        QueryMetricsResponse: {
            typeUrl: string;
            encode(message: _221.QueryMetricsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.QueryMetricsResponse;
            fromPartial(object: Partial<_221.QueryMetricsResponse>): _221.QueryMetricsResponse;
            fromAmino(object: _221.QueryMetricsResponseAmino): _221.QueryMetricsResponse;
            toAmino(message: _221.QueryMetricsResponse): _221.QueryMetricsResponseAmino;
            fromAminoMsg(object: _221.QueryMetricsResponseAminoMsg): _221.QueryMetricsResponse;
            fromProtoMsg(message: _221.QueryMetricsResponseProtoMsg): _221.QueryMetricsResponse;
            toProto(message: _221.QueryMetricsResponse): Uint8Array;
            toProtoMsg(message: _221.QueryMetricsResponse): _221.QueryMetricsResponseProtoMsg;
        };
        metricStatusFromJSON(object: any): _220.MetricStatus;
        metricStatusToJSON(object: _220.MetricStatus): string;
        MetricStatus: typeof _220.MetricStatus;
        MetricStatusSDKType: typeof _220.MetricStatus;
        MetricStatusAmino: typeof _220.MetricStatus;
        Oracle: {
            typeUrl: string;
            encode(message: _220.Oracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _220.Oracle;
            fromPartial(object: Partial<_220.Oracle>): _220.Oracle;
            fromAmino(object: _220.OracleAmino): _220.Oracle;
            toAmino(message: _220.Oracle): _220.OracleAmino;
            fromAminoMsg(object: _220.OracleAminoMsg): _220.Oracle;
            fromProtoMsg(message: _220.OracleProtoMsg): _220.Oracle;
            toProto(message: _220.Oracle): Uint8Array;
            toProtoMsg(message: _220.Oracle): _220.OracleProtoMsg;
        };
        Metric: {
            typeUrl: string;
            encode(message: _220.Metric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _220.Metric;
            fromPartial(object: Partial<_220.Metric>): _220.Metric;
            fromAmino(object: _220.MetricAmino): _220.Metric;
            toAmino(message: _220.Metric): _220.MetricAmino;
            fromAminoMsg(object: _220.MetricAminoMsg): _220.Metric;
            fromProtoMsg(message: _220.MetricProtoMsg): _220.Metric;
            toProto(message: _220.Metric): Uint8Array;
            toProtoMsg(message: _220.Metric): _220.MetricProtoMsg;
        };
        RedemptionRateAttributes: {
            typeUrl: string;
            encode(message: _220.RedemptionRateAttributes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _220.RedemptionRateAttributes;
            fromPartial(object: Partial<_220.RedemptionRateAttributes>): _220.RedemptionRateAttributes;
            fromAmino(object: _220.RedemptionRateAttributesAmino): _220.RedemptionRateAttributes;
            toAmino(message: _220.RedemptionRateAttributes): _220.RedemptionRateAttributesAmino;
            fromAminoMsg(object: _220.RedemptionRateAttributesAminoMsg): _220.RedemptionRateAttributes;
            fromProtoMsg(message: _220.RedemptionRateAttributesProtoMsg): _220.RedemptionRateAttributes;
            toProto(message: _220.RedemptionRateAttributes): Uint8Array;
            toProtoMsg(message: _220.RedemptionRateAttributes): _220.RedemptionRateAttributesProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _219.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.Params;
            fromPartial(_: Partial<_219.Params>): _219.Params;
            fromAmino(_: _219.ParamsAmino): _219.Params;
            toAmino(_: _219.Params): _219.ParamsAmino;
            fromAminoMsg(object: _219.ParamsAminoMsg): _219.Params;
            fromProtoMsg(message: _219.ParamsProtoMsg): _219.Params;
            toProto(message: _219.Params): Uint8Array;
            toProtoMsg(message: _219.Params): _219.ParamsProtoMsg;
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
        MsgInstantiateOracleContract: {
            typeUrl: string;
            encode(message: _218.MsgInstantiateOracleContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.MsgInstantiateOracleContract;
            fromPartial(object: Partial<_218.MsgInstantiateOracleContract>): _218.MsgInstantiateOracleContract;
            fromAmino(object: _218.MsgInstantiateOracleContractAmino): _218.MsgInstantiateOracleContract;
            toAmino(message: _218.MsgInstantiateOracleContract): _218.MsgInstantiateOracleContractAmino;
            fromAminoMsg(object: _218.MsgInstantiateOracleContractAminoMsg): _218.MsgInstantiateOracleContract;
            fromProtoMsg(message: _218.MsgInstantiateOracleContractProtoMsg): _218.MsgInstantiateOracleContract;
            toProto(message: _218.MsgInstantiateOracleContract): Uint8Array;
            toProtoMsg(message: _218.MsgInstantiateOracleContract): _218.MsgInstantiateOracleContractProtoMsg;
        };
        MsgExecuteContractPostMetric: {
            typeUrl: string;
            encode(message: _218.MsgExecuteContractPostMetric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.MsgExecuteContractPostMetric;
            fromPartial(object: Partial<_218.MsgExecuteContractPostMetric>): _218.MsgExecuteContractPostMetric;
            fromAmino(object: _218.MsgExecuteContractPostMetricAmino): _218.MsgExecuteContractPostMetric;
            toAmino(message: _218.MsgExecuteContractPostMetric): _218.MsgExecuteContractPostMetricAmino;
            fromAminoMsg(object: _218.MsgExecuteContractPostMetricAminoMsg): _218.MsgExecuteContractPostMetric;
            fromProtoMsg(message: _218.MsgExecuteContractPostMetricProtoMsg): _218.MsgExecuteContractPostMetric;
            toProto(message: _218.MsgExecuteContractPostMetric): Uint8Array;
            toProtoMsg(message: _218.MsgExecuteContractPostMetric): _218.MsgExecuteContractPostMetricProtoMsg;
        };
        MsgPostMetric: {
            typeUrl: string;
            encode(message: _218.MsgPostMetric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.MsgPostMetric;
            fromPartial(object: Partial<_218.MsgPostMetric>): _218.MsgPostMetric;
            fromAmino(object: _218.MsgPostMetricAmino): _218.MsgPostMetric;
            toAmino(message: _218.MsgPostMetric): _218.MsgPostMetricAmino;
            fromAminoMsg(object: _218.MsgPostMetricAminoMsg): _218.MsgPostMetric;
            fromProtoMsg(message: _218.MsgPostMetricProtoMsg): _218.MsgPostMetric;
            toProto(message: _218.MsgPostMetric): Uint8Array;
            toProtoMsg(message: _218.MsgPostMetric): _218.MsgPostMetricProtoMsg;
        };
        InstantiateOracleCallback: {
            typeUrl: string;
            encode(message: _217.InstantiateOracleCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.InstantiateOracleCallback;
            fromPartial(object: Partial<_217.InstantiateOracleCallback>): _217.InstantiateOracleCallback;
            fromAmino(object: _217.InstantiateOracleCallbackAmino): _217.InstantiateOracleCallback;
            toAmino(message: _217.InstantiateOracleCallback): _217.InstantiateOracleCallbackAmino;
            fromAminoMsg(object: _217.InstantiateOracleCallbackAminoMsg): _217.InstantiateOracleCallback;
            fromProtoMsg(message: _217.InstantiateOracleCallbackProtoMsg): _217.InstantiateOracleCallback;
            toProto(message: _217.InstantiateOracleCallback): Uint8Array;
            toProtoMsg(message: _217.InstantiateOracleCallback): _217.InstantiateOracleCallbackProtoMsg;
        };
        UpdateOracleCallback: {
            typeUrl: string;
            encode(message: _217.UpdateOracleCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.UpdateOracleCallback;
            fromPartial(object: Partial<_217.UpdateOracleCallback>): _217.UpdateOracleCallback;
            fromAmino(object: _217.UpdateOracleCallbackAmino): _217.UpdateOracleCallback;
            toAmino(message: _217.UpdateOracleCallback): _217.UpdateOracleCallbackAmino;
            fromAminoMsg(object: _217.UpdateOracleCallbackAminoMsg): _217.UpdateOracleCallback;
            fromProtoMsg(message: _217.UpdateOracleCallbackProtoMsg): _217.UpdateOracleCallback;
            toProto(message: _217.UpdateOracleCallback): Uint8Array;
            toProtoMsg(message: _217.UpdateOracleCallback): _217.UpdateOracleCallbackProtoMsg;
        };
    };
    const icqoracle: {
        MsgClientImpl: typeof _422.MsgClientImpl;
        QueryClientImpl: typeof _411.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            tokenPrice(request: _225.QueryTokenPriceRequest): Promise<_225.TokenPriceResponse>;
            tokenPrices(request?: _225.QueryTokenPricesRequest): Promise<_225.QueryTokenPricesResponse>;
            params(request?: _225.QueryParamsRequest): Promise<_225.QueryParamsResponse>;
            tokenPriceForQuoteDenom(request: _225.QueryTokenPriceForQuoteDenomRequest): Promise<_225.QueryTokenPriceForQuoteDenomResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                registerTokenPriceQuery(value: _226.MsgRegisterTokenPriceQuery): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeTokenPriceQuery(value: _226.MsgRemoveTokenPriceQuery): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateParams(value: _226.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                registerTokenPriceQuery(value: _226.MsgRegisterTokenPriceQuery): {
                    typeUrl: string;
                    value: _226.MsgRegisterTokenPriceQuery;
                };
                removeTokenPriceQuery(value: _226.MsgRemoveTokenPriceQuery): {
                    typeUrl: string;
                    value: _226.MsgRemoveTokenPriceQuery;
                };
                updateParams(value: _226.MsgUpdateParams): {
                    typeUrl: string;
                    value: _226.MsgUpdateParams;
                };
            };
            fromPartial: {
                registerTokenPriceQuery(value: _226.MsgRegisterTokenPriceQuery): {
                    typeUrl: string;
                    value: _226.MsgRegisterTokenPriceQuery;
                };
                removeTokenPriceQuery(value: _226.MsgRemoveTokenPriceQuery): {
                    typeUrl: string;
                    value: _226.MsgRemoveTokenPriceQuery;
                };
                updateParams(value: _226.MsgUpdateParams): {
                    typeUrl: string;
                    value: _226.MsgUpdateParams;
                };
            };
        };
        AminoConverter: {
            "/stride.icqoracle.MsgRegisterTokenPriceQuery": {
                aminoType: string;
                toAmino: (message: _226.MsgRegisterTokenPriceQuery) => _226.MsgRegisterTokenPriceQueryAmino;
                fromAmino: (object: _226.MsgRegisterTokenPriceQueryAmino) => _226.MsgRegisterTokenPriceQuery;
            };
            "/stride.icqoracle.MsgRemoveTokenPriceQuery": {
                aminoType: string;
                toAmino: (message: _226.MsgRemoveTokenPriceQuery) => _226.MsgRemoveTokenPriceQueryAmino;
                fromAmino: (object: _226.MsgRemoveTokenPriceQueryAmino) => _226.MsgRemoveTokenPriceQuery;
            };
            "/stride.icqoracle.MsgUpdateParams": {
                aminoType: string;
                toAmino: (message: _226.MsgUpdateParams) => _226.MsgUpdateParamsAmino;
                fromAmino: (object: _226.MsgUpdateParamsAmino) => _226.MsgUpdateParams;
            };
        };
        MsgRegisterTokenPriceQuery: {
            typeUrl: string;
            encode(message: _226.MsgRegisterTokenPriceQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.MsgRegisterTokenPriceQuery;
            fromPartial(object: Partial<_226.MsgRegisterTokenPriceQuery>): _226.MsgRegisterTokenPriceQuery;
            fromAmino(object: _226.MsgRegisterTokenPriceQueryAmino): _226.MsgRegisterTokenPriceQuery;
            toAmino(message: _226.MsgRegisterTokenPriceQuery): _226.MsgRegisterTokenPriceQueryAmino;
            fromAminoMsg(object: _226.MsgRegisterTokenPriceQueryAminoMsg): _226.MsgRegisterTokenPriceQuery;
            toAminoMsg(message: _226.MsgRegisterTokenPriceQuery): _226.MsgRegisterTokenPriceQueryAminoMsg;
            fromProtoMsg(message: _226.MsgRegisterTokenPriceQueryProtoMsg): _226.MsgRegisterTokenPriceQuery;
            toProto(message: _226.MsgRegisterTokenPriceQuery): Uint8Array;
            toProtoMsg(message: _226.MsgRegisterTokenPriceQuery): _226.MsgRegisterTokenPriceQueryProtoMsg;
        };
        MsgRegisterTokenPriceQueryResponse: {
            typeUrl: string;
            encode(_: _226.MsgRegisterTokenPriceQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.MsgRegisterTokenPriceQueryResponse;
            fromPartial(_: Partial<_226.MsgRegisterTokenPriceQueryResponse>): _226.MsgRegisterTokenPriceQueryResponse;
            fromAmino(_: _226.MsgRegisterTokenPriceQueryResponseAmino): _226.MsgRegisterTokenPriceQueryResponse;
            toAmino(_: _226.MsgRegisterTokenPriceQueryResponse): _226.MsgRegisterTokenPriceQueryResponseAmino;
            fromAminoMsg(object: _226.MsgRegisterTokenPriceQueryResponseAminoMsg): _226.MsgRegisterTokenPriceQueryResponse;
            fromProtoMsg(message: _226.MsgRegisterTokenPriceQueryResponseProtoMsg): _226.MsgRegisterTokenPriceQueryResponse;
            toProto(message: _226.MsgRegisterTokenPriceQueryResponse): Uint8Array;
            toProtoMsg(message: _226.MsgRegisterTokenPriceQueryResponse): _226.MsgRegisterTokenPriceQueryResponseProtoMsg;
        };
        MsgRemoveTokenPriceQuery: {
            typeUrl: string;
            encode(message: _226.MsgRemoveTokenPriceQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.MsgRemoveTokenPriceQuery;
            fromPartial(object: Partial<_226.MsgRemoveTokenPriceQuery>): _226.MsgRemoveTokenPriceQuery;
            fromAmino(object: _226.MsgRemoveTokenPriceQueryAmino): _226.MsgRemoveTokenPriceQuery;
            toAmino(message: _226.MsgRemoveTokenPriceQuery): _226.MsgRemoveTokenPriceQueryAmino;
            fromAminoMsg(object: _226.MsgRemoveTokenPriceQueryAminoMsg): _226.MsgRemoveTokenPriceQuery;
            toAminoMsg(message: _226.MsgRemoveTokenPriceQuery): _226.MsgRemoveTokenPriceQueryAminoMsg;
            fromProtoMsg(message: _226.MsgRemoveTokenPriceQueryProtoMsg): _226.MsgRemoveTokenPriceQuery;
            toProto(message: _226.MsgRemoveTokenPriceQuery): Uint8Array;
            toProtoMsg(message: _226.MsgRemoveTokenPriceQuery): _226.MsgRemoveTokenPriceQueryProtoMsg;
        };
        MsgRemoveTokenPriceQueryResponse: {
            typeUrl: string;
            encode(_: _226.MsgRemoveTokenPriceQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.MsgRemoveTokenPriceQueryResponse;
            fromPartial(_: Partial<_226.MsgRemoveTokenPriceQueryResponse>): _226.MsgRemoveTokenPriceQueryResponse;
            fromAmino(_: _226.MsgRemoveTokenPriceQueryResponseAmino): _226.MsgRemoveTokenPriceQueryResponse;
            toAmino(_: _226.MsgRemoveTokenPriceQueryResponse): _226.MsgRemoveTokenPriceQueryResponseAmino;
            fromAminoMsg(object: _226.MsgRemoveTokenPriceQueryResponseAminoMsg): _226.MsgRemoveTokenPriceQueryResponse;
            fromProtoMsg(message: _226.MsgRemoveTokenPriceQueryResponseProtoMsg): _226.MsgRemoveTokenPriceQueryResponse;
            toProto(message: _226.MsgRemoveTokenPriceQueryResponse): Uint8Array;
            toProtoMsg(message: _226.MsgRemoveTokenPriceQueryResponse): _226.MsgRemoveTokenPriceQueryResponseProtoMsg;
        };
        MsgUpdateParams: {
            typeUrl: string;
            encode(message: _226.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.MsgUpdateParams;
            fromPartial(object: Partial<_226.MsgUpdateParams>): _226.MsgUpdateParams;
            fromAmino(object: _226.MsgUpdateParamsAmino): _226.MsgUpdateParams;
            toAmino(message: _226.MsgUpdateParams): _226.MsgUpdateParamsAmino;
            fromAminoMsg(object: _226.MsgUpdateParamsAminoMsg): _226.MsgUpdateParams;
            toAminoMsg(message: _226.MsgUpdateParams): _226.MsgUpdateParamsAminoMsg;
            fromProtoMsg(message: _226.MsgUpdateParamsProtoMsg): _226.MsgUpdateParams;
            toProto(message: _226.MsgUpdateParams): Uint8Array;
            toProtoMsg(message: _226.MsgUpdateParams): _226.MsgUpdateParamsProtoMsg;
        };
        MsgUpdateParamsResponse: {
            typeUrl: string;
            encode(_: _226.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.MsgUpdateParamsResponse;
            fromPartial(_: Partial<_226.MsgUpdateParamsResponse>): _226.MsgUpdateParamsResponse;
            fromAmino(_: _226.MsgUpdateParamsResponseAmino): _226.MsgUpdateParamsResponse;
            toAmino(_: _226.MsgUpdateParamsResponse): _226.MsgUpdateParamsResponseAmino;
            fromAminoMsg(object: _226.MsgUpdateParamsResponseAminoMsg): _226.MsgUpdateParamsResponse;
            fromProtoMsg(message: _226.MsgUpdateParamsResponseProtoMsg): _226.MsgUpdateParamsResponse;
            toProto(message: _226.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _226.MsgUpdateParamsResponse): _226.MsgUpdateParamsResponseProtoMsg;
        };
        QueryTokenPriceRequest: {
            typeUrl: string;
            encode(message: _225.QueryTokenPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryTokenPriceRequest;
            fromPartial(object: Partial<_225.QueryTokenPriceRequest>): _225.QueryTokenPriceRequest;
            fromAmino(object: _225.QueryTokenPriceRequestAmino): _225.QueryTokenPriceRequest;
            toAmino(message: _225.QueryTokenPriceRequest): _225.QueryTokenPriceRequestAmino;
            fromAminoMsg(object: _225.QueryTokenPriceRequestAminoMsg): _225.QueryTokenPriceRequest;
            fromProtoMsg(message: _225.QueryTokenPriceRequestProtoMsg): _225.QueryTokenPriceRequest;
            toProto(message: _225.QueryTokenPriceRequest): Uint8Array;
            toProtoMsg(message: _225.QueryTokenPriceRequest): _225.QueryTokenPriceRequestProtoMsg;
        };
        QueryTokenPricesRequest: {
            typeUrl: string;
            encode(message: _225.QueryTokenPricesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryTokenPricesRequest;
            fromPartial(object: Partial<_225.QueryTokenPricesRequest>): _225.QueryTokenPricesRequest;
            fromAmino(object: _225.QueryTokenPricesRequestAmino): _225.QueryTokenPricesRequest;
            toAmino(message: _225.QueryTokenPricesRequest): _225.QueryTokenPricesRequestAmino;
            fromAminoMsg(object: _225.QueryTokenPricesRequestAminoMsg): _225.QueryTokenPricesRequest;
            fromProtoMsg(message: _225.QueryTokenPricesRequestProtoMsg): _225.QueryTokenPricesRequest;
            toProto(message: _225.QueryTokenPricesRequest): Uint8Array;
            toProtoMsg(message: _225.QueryTokenPricesRequest): _225.QueryTokenPricesRequestProtoMsg;
        };
        TokenPriceResponse: {
            typeUrl: string;
            encode(message: _225.TokenPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.TokenPriceResponse;
            fromPartial(object: Partial<_225.TokenPriceResponse>): _225.TokenPriceResponse;
            fromAmino(object: _225.TokenPriceResponseAmino): _225.TokenPriceResponse;
            toAmino(message: _225.TokenPriceResponse): _225.TokenPriceResponseAmino;
            fromAminoMsg(object: _225.TokenPriceResponseAminoMsg): _225.TokenPriceResponse;
            fromProtoMsg(message: _225.TokenPriceResponseProtoMsg): _225.TokenPriceResponse;
            toProto(message: _225.TokenPriceResponse): Uint8Array;
            toProtoMsg(message: _225.TokenPriceResponse): _225.TokenPriceResponseProtoMsg;
        };
        QueryTokenPricesResponse: {
            typeUrl: string;
            encode(message: _225.QueryTokenPricesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryTokenPricesResponse;
            fromPartial(object: Partial<_225.QueryTokenPricesResponse>): _225.QueryTokenPricesResponse;
            fromAmino(object: _225.QueryTokenPricesResponseAmino): _225.QueryTokenPricesResponse;
            toAmino(message: _225.QueryTokenPricesResponse): _225.QueryTokenPricesResponseAmino;
            fromAminoMsg(object: _225.QueryTokenPricesResponseAminoMsg): _225.QueryTokenPricesResponse;
            fromProtoMsg(message: _225.QueryTokenPricesResponseProtoMsg): _225.QueryTokenPricesResponse;
            toProto(message: _225.QueryTokenPricesResponse): Uint8Array;
            toProtoMsg(message: _225.QueryTokenPricesResponse): _225.QueryTokenPricesResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _225.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryParamsRequest;
            fromPartial(_: Partial<_225.QueryParamsRequest>): _225.QueryParamsRequest;
            fromAmino(_: _225.QueryParamsRequestAmino): _225.QueryParamsRequest;
            toAmino(_: _225.QueryParamsRequest): _225.QueryParamsRequestAmino;
            fromAminoMsg(object: _225.QueryParamsRequestAminoMsg): _225.QueryParamsRequest;
            fromProtoMsg(message: _225.QueryParamsRequestProtoMsg): _225.QueryParamsRequest;
            toProto(message: _225.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _225.QueryParamsRequest): _225.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _225.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryParamsResponse;
            fromPartial(object: Partial<_225.QueryParamsResponse>): _225.QueryParamsResponse;
            fromAmino(object: _225.QueryParamsResponseAmino): _225.QueryParamsResponse;
            toAmino(message: _225.QueryParamsResponse): _225.QueryParamsResponseAmino;
            fromAminoMsg(object: _225.QueryParamsResponseAminoMsg): _225.QueryParamsResponse;
            fromProtoMsg(message: _225.QueryParamsResponseProtoMsg): _225.QueryParamsResponse;
            toProto(message: _225.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _225.QueryParamsResponse): _225.QueryParamsResponseProtoMsg;
        };
        QueryTokenPriceForQuoteDenomRequest: {
            typeUrl: string;
            encode(message: _225.QueryTokenPriceForQuoteDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryTokenPriceForQuoteDenomRequest;
            fromPartial(object: Partial<_225.QueryTokenPriceForQuoteDenomRequest>): _225.QueryTokenPriceForQuoteDenomRequest;
            fromAmino(object: _225.QueryTokenPriceForQuoteDenomRequestAmino): _225.QueryTokenPriceForQuoteDenomRequest;
            toAmino(message: _225.QueryTokenPriceForQuoteDenomRequest): _225.QueryTokenPriceForQuoteDenomRequestAmino;
            fromAminoMsg(object: _225.QueryTokenPriceForQuoteDenomRequestAminoMsg): _225.QueryTokenPriceForQuoteDenomRequest;
            fromProtoMsg(message: _225.QueryTokenPriceForQuoteDenomRequestProtoMsg): _225.QueryTokenPriceForQuoteDenomRequest;
            toProto(message: _225.QueryTokenPriceForQuoteDenomRequest): Uint8Array;
            toProtoMsg(message: _225.QueryTokenPriceForQuoteDenomRequest): _225.QueryTokenPriceForQuoteDenomRequestProtoMsg;
        };
        QueryTokenPriceForQuoteDenomResponse: {
            typeUrl: string;
            encode(message: _225.QueryTokenPriceForQuoteDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryTokenPriceForQuoteDenomResponse;
            fromPartial(object: Partial<_225.QueryTokenPriceForQuoteDenomResponse>): _225.QueryTokenPriceForQuoteDenomResponse;
            fromAmino(object: _225.QueryTokenPriceForQuoteDenomResponseAmino): _225.QueryTokenPriceForQuoteDenomResponse;
            toAmino(message: _225.QueryTokenPriceForQuoteDenomResponse): _225.QueryTokenPriceForQuoteDenomResponseAmino;
            fromAminoMsg(object: _225.QueryTokenPriceForQuoteDenomResponseAminoMsg): _225.QueryTokenPriceForQuoteDenomResponse;
            fromProtoMsg(message: _225.QueryTokenPriceForQuoteDenomResponseProtoMsg): _225.QueryTokenPriceForQuoteDenomResponse;
            toProto(message: _225.QueryTokenPriceForQuoteDenomResponse): Uint8Array;
            toProtoMsg(message: _225.QueryTokenPriceForQuoteDenomResponse): _225.QueryTokenPriceForQuoteDenomResponseProtoMsg;
        };
        TokenPrice: {
            typeUrl: string;
            encode(message: _224.TokenPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.TokenPrice;
            fromPartial(object: Partial<_224.TokenPrice>): _224.TokenPrice;
            fromAmino(object: _224.TokenPriceAmino): _224.TokenPrice;
            toAmino(message: _224.TokenPrice): _224.TokenPriceAmino;
            fromAminoMsg(object: _224.TokenPriceAminoMsg): _224.TokenPrice;
            fromProtoMsg(message: _224.TokenPriceProtoMsg): _224.TokenPrice;
            toProto(message: _224.TokenPrice): Uint8Array;
            toProtoMsg(message: _224.TokenPrice): _224.TokenPriceProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _224.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.Params;
            fromPartial(object: Partial<_224.Params>): _224.Params;
            fromAmino(object: _224.ParamsAmino): _224.Params;
            toAmino(message: _224.Params): _224.ParamsAmino;
            fromAminoMsg(object: _224.ParamsAminoMsg): _224.Params;
            fromProtoMsg(message: _224.ParamsProtoMsg): _224.Params;
            toProto(message: _224.Params): Uint8Array;
            toProtoMsg(message: _224.Params): _224.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _223.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.GenesisState;
            fromPartial(object: Partial<_223.GenesisState>): _223.GenesisState;
            fromAmino(object: _223.GenesisStateAmino): _223.GenesisState;
            toAmino(message: _223.GenesisState): _223.GenesisStateAmino;
            fromAminoMsg(object: _223.GenesisStateAminoMsg): _223.GenesisState;
            fromProtoMsg(message: _223.GenesisStateProtoMsg): _223.GenesisState;
            toProto(message: _223.GenesisState): Uint8Array;
            toProtoMsg(message: _223.GenesisState): _223.GenesisStateProtoMsg;
        };
    };
    namespace interchainquery {
        const v1: {
            MsgClientImpl: typeof _423.MsgClientImpl;
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitQueryResponse(value: _229.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitQueryResponse(value: _229.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _229.MsgSubmitQueryResponse;
                    };
                };
                fromPartial: {
                    submitQueryResponse(value: _229.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _229.MsgSubmitQueryResponse;
                    };
                };
            };
            AminoConverter: {
                "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
                    aminoType: string;
                    toAmino: (message: _229.MsgSubmitQueryResponse) => _229.MsgSubmitQueryResponseAmino;
                    fromAmino: (object: _229.MsgSubmitQueryResponseAmino) => _229.MsgSubmitQueryResponse;
                };
            };
            MsgSubmitQueryResponse: {
                typeUrl: string;
                encode(message: _229.MsgSubmitQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.MsgSubmitQueryResponse;
                fromPartial(object: Partial<_229.MsgSubmitQueryResponse>): _229.MsgSubmitQueryResponse;
                fromAmino(object: _229.MsgSubmitQueryResponseAmino): _229.MsgSubmitQueryResponse;
                toAmino(message: _229.MsgSubmitQueryResponse): _229.MsgSubmitQueryResponseAmino;
                fromAminoMsg(object: _229.MsgSubmitQueryResponseAminoMsg): _229.MsgSubmitQueryResponse;
                toAminoMsg(message: _229.MsgSubmitQueryResponse): _229.MsgSubmitQueryResponseAminoMsg;
                fromProtoMsg(message: _229.MsgSubmitQueryResponseProtoMsg): _229.MsgSubmitQueryResponse;
                toProto(message: _229.MsgSubmitQueryResponse): Uint8Array;
                toProtoMsg(message: _229.MsgSubmitQueryResponse): _229.MsgSubmitQueryResponseProtoMsg;
            };
            MsgSubmitQueryResponseResponse: {
                typeUrl: string;
                encode(_: _229.MsgSubmitQueryResponseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.MsgSubmitQueryResponseResponse;
                fromPartial(_: Partial<_229.MsgSubmitQueryResponseResponse>): _229.MsgSubmitQueryResponseResponse;
                fromAmino(_: _229.MsgSubmitQueryResponseResponseAmino): _229.MsgSubmitQueryResponseResponse;
                toAmino(_: _229.MsgSubmitQueryResponseResponse): _229.MsgSubmitQueryResponseResponseAmino;
                fromAminoMsg(object: _229.MsgSubmitQueryResponseResponseAminoMsg): _229.MsgSubmitQueryResponseResponse;
                fromProtoMsg(message: _229.MsgSubmitQueryResponseResponseProtoMsg): _229.MsgSubmitQueryResponseResponse;
                toProto(message: _229.MsgSubmitQueryResponseResponse): Uint8Array;
                toProtoMsg(message: _229.MsgSubmitQueryResponseResponse): _229.MsgSubmitQueryResponseResponseProtoMsg;
            };
            QueryPendingQueriesRequest: {
                typeUrl: string;
                encode(_: _228.QueryPendingQueriesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.QueryPendingQueriesRequest;
                fromPartial(_: Partial<_228.QueryPendingQueriesRequest>): _228.QueryPendingQueriesRequest;
                fromAmino(_: _228.QueryPendingQueriesRequestAmino): _228.QueryPendingQueriesRequest;
                toAmino(_: _228.QueryPendingQueriesRequest): _228.QueryPendingQueriesRequestAmino;
                fromAminoMsg(object: _228.QueryPendingQueriesRequestAminoMsg): _228.QueryPendingQueriesRequest;
                fromProtoMsg(message: _228.QueryPendingQueriesRequestProtoMsg): _228.QueryPendingQueriesRequest;
                toProto(message: _228.QueryPendingQueriesRequest): Uint8Array;
                toProtoMsg(message: _228.QueryPendingQueriesRequest): _228.QueryPendingQueriesRequestProtoMsg;
            };
            QueryPendingQueriesResponse: {
                typeUrl: string;
                encode(message: _228.QueryPendingQueriesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.QueryPendingQueriesResponse;
                fromPartial(object: Partial<_228.QueryPendingQueriesResponse>): _228.QueryPendingQueriesResponse;
                fromAmino(object: _228.QueryPendingQueriesResponseAmino): _228.QueryPendingQueriesResponse;
                toAmino(message: _228.QueryPendingQueriesResponse): _228.QueryPendingQueriesResponseAmino;
                fromAminoMsg(object: _228.QueryPendingQueriesResponseAminoMsg): _228.QueryPendingQueriesResponse;
                fromProtoMsg(message: _228.QueryPendingQueriesResponseProtoMsg): _228.QueryPendingQueriesResponse;
                toProto(message: _228.QueryPendingQueriesResponse): Uint8Array;
                toProtoMsg(message: _228.QueryPendingQueriesResponse): _228.QueryPendingQueriesResponseProtoMsg;
            };
            timeoutPolicyFromJSON(object: any): _227.TimeoutPolicy;
            timeoutPolicyToJSON(object: _227.TimeoutPolicy): string;
            TimeoutPolicy: typeof _227.TimeoutPolicy;
            TimeoutPolicySDKType: typeof _227.TimeoutPolicy;
            TimeoutPolicyAmino: typeof _227.TimeoutPolicy;
            Query: {
                typeUrl: string;
                encode(message: _227.Query, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.Query;
                fromPartial(object: Partial<_227.Query>): _227.Query;
                fromAmino(object: _227.QueryAmino): _227.Query;
                toAmino(message: _227.Query): _227.QueryAmino;
                fromAminoMsg(object: _227.QueryAminoMsg): _227.Query;
                fromProtoMsg(message: _227.QueryProtoMsg): _227.Query;
                toProto(message: _227.Query): Uint8Array;
                toProtoMsg(message: _227.Query): _227.QueryProtoMsg;
            };
            DataPoint: {
                typeUrl: string;
                encode(message: _227.DataPoint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.DataPoint;
                fromPartial(object: Partial<_227.DataPoint>): _227.DataPoint;
                fromAmino(object: _227.DataPointAmino): _227.DataPoint;
                toAmino(message: _227.DataPoint): _227.DataPointAmino;
                fromAminoMsg(object: _227.DataPointAminoMsg): _227.DataPoint;
                fromProtoMsg(message: _227.DataPointProtoMsg): _227.DataPoint;
                toProto(message: _227.DataPoint): Uint8Array;
                toProtoMsg(message: _227.DataPoint): _227.DataPointProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _227.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.GenesisState;
                fromPartial(object: Partial<_227.GenesisState>): _227.GenesisState;
                fromAmino(object: _227.GenesisStateAmino): _227.GenesisState;
                toAmino(message: _227.GenesisState): _227.GenesisStateAmino;
                fromAminoMsg(object: _227.GenesisStateAminoMsg): _227.GenesisState;
                fromProtoMsg(message: _227.GenesisStateProtoMsg): _227.GenesisState;
                toProto(message: _227.GenesisState): Uint8Array;
                toProtoMsg(message: _227.GenesisState): _227.GenesisStateProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _412.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _232.QueryParamsRequest): Promise<_232.QueryParamsResponse>;
                epochProvisions(request?: _232.QueryEpochProvisionsRequest): Promise<_232.QueryEpochProvisionsResponse>;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _232.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.QueryParamsRequest;
                fromPartial(_: Partial<_232.QueryParamsRequest>): _232.QueryParamsRequest;
                fromAmino(_: _232.QueryParamsRequestAmino): _232.QueryParamsRequest;
                toAmino(_: _232.QueryParamsRequest): _232.QueryParamsRequestAmino;
                fromAminoMsg(object: _232.QueryParamsRequestAminoMsg): _232.QueryParamsRequest;
                fromProtoMsg(message: _232.QueryParamsRequestProtoMsg): _232.QueryParamsRequest;
                toProto(message: _232.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _232.QueryParamsRequest): _232.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _232.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.QueryParamsResponse;
                fromPartial(object: Partial<_232.QueryParamsResponse>): _232.QueryParamsResponse;
                fromAmino(object: _232.QueryParamsResponseAmino): _232.QueryParamsResponse;
                toAmino(message: _232.QueryParamsResponse): _232.QueryParamsResponseAmino;
                fromAminoMsg(object: _232.QueryParamsResponseAminoMsg): _232.QueryParamsResponse;
                fromProtoMsg(message: _232.QueryParamsResponseProtoMsg): _232.QueryParamsResponse;
                toProto(message: _232.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _232.QueryParamsResponse): _232.QueryParamsResponseProtoMsg;
            };
            QueryEpochProvisionsRequest: {
                typeUrl: string;
                encode(_: _232.QueryEpochProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_232.QueryEpochProvisionsRequest>): _232.QueryEpochProvisionsRequest;
                fromAmino(_: _232.QueryEpochProvisionsRequestAmino): _232.QueryEpochProvisionsRequest;
                toAmino(_: _232.QueryEpochProvisionsRequest): _232.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _232.QueryEpochProvisionsRequestAminoMsg): _232.QueryEpochProvisionsRequest;
                fromProtoMsg(message: _232.QueryEpochProvisionsRequestProtoMsg): _232.QueryEpochProvisionsRequest;
                toProto(message: _232.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _232.QueryEpochProvisionsRequest): _232.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                typeUrl: string;
                encode(message: _232.QueryEpochProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_232.QueryEpochProvisionsResponse>): _232.QueryEpochProvisionsResponse;
                fromAmino(object: _232.QueryEpochProvisionsResponseAmino): _232.QueryEpochProvisionsResponse;
                toAmino(message: _232.QueryEpochProvisionsResponse): _232.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _232.QueryEpochProvisionsResponseAminoMsg): _232.QueryEpochProvisionsResponse;
                fromProtoMsg(message: _232.QueryEpochProvisionsResponseProtoMsg): _232.QueryEpochProvisionsResponse;
                toProto(message: _232.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _232.QueryEpochProvisionsResponse): _232.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _231.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.Minter;
                fromPartial(object: Partial<_231.Minter>): _231.Minter;
                fromAmino(object: _231.MinterAmino): _231.Minter;
                toAmino(message: _231.Minter): _231.MinterAmino;
                fromAminoMsg(object: _231.MinterAminoMsg): _231.Minter;
                fromProtoMsg(message: _231.MinterProtoMsg): _231.Minter;
                toProto(message: _231.Minter): Uint8Array;
                toProtoMsg(message: _231.Minter): _231.MinterProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                encode(message: _231.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.DistributionProportions;
                fromPartial(object: Partial<_231.DistributionProportions>): _231.DistributionProportions;
                fromAmino(object: _231.DistributionProportionsAmino): _231.DistributionProportions;
                toAmino(message: _231.DistributionProportions): _231.DistributionProportionsAmino;
                fromAminoMsg(object: _231.DistributionProportionsAminoMsg): _231.DistributionProportions;
                fromProtoMsg(message: _231.DistributionProportionsProtoMsg): _231.DistributionProportions;
                toProto(message: _231.DistributionProportions): Uint8Array;
                toProtoMsg(message: _231.DistributionProportions): _231.DistributionProportionsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _231.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.Params;
                fromPartial(object: Partial<_231.Params>): _231.Params;
                fromAmino(object: _231.ParamsAmino): _231.Params;
                toAmino(message: _231.Params): _231.ParamsAmino;
                fromAminoMsg(object: _231.ParamsAminoMsg): _231.Params;
                fromProtoMsg(message: _231.ParamsProtoMsg): _231.Params;
                toProto(message: _231.Params): Uint8Array;
                toProtoMsg(message: _231.Params): _231.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _230.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.GenesisState;
                fromPartial(object: Partial<_230.GenesisState>): _230.GenesisState;
                fromAmino(object: _230.GenesisStateAmino): _230.GenesisState;
                toAmino(message: _230.GenesisState): _230.GenesisStateAmino;
                fromAminoMsg(object: _230.GenesisStateAminoMsg): _230.GenesisState;
                fromProtoMsg(message: _230.GenesisStateProtoMsg): _230.GenesisState;
                toProto(message: _230.GenesisState): Uint8Array;
                toProtoMsg(message: _230.GenesisState): _230.GenesisStateProtoMsg;
            };
        };
    }
    const records: {
        QueryClientImpl: typeof _413.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _236.QueryParamsRequest): Promise<_236.QueryParamsResponse>;
            userRedemptionRecord(request: _236.QueryGetUserRedemptionRecordRequest): Promise<_236.QueryGetUserRedemptionRecordResponse>;
            userRedemptionRecordAll(request?: _236.QueryAllUserRedemptionRecordRequest): Promise<_236.QueryAllUserRedemptionRecordResponse>;
            userRedemptionRecordForUser(request: _236.QueryAllUserRedemptionRecordForUserRequest): Promise<_236.QueryAllUserRedemptionRecordForUserResponse>;
            epochUnbondingRecord(request: _236.QueryGetEpochUnbondingRecordRequest): Promise<_236.QueryGetEpochUnbondingRecordResponse>;
            epochUnbondingRecordAll(request?: _236.QueryAllEpochUnbondingRecordRequest): Promise<_236.QueryAllEpochUnbondingRecordResponse>;
            depositRecord(request: _236.QueryGetDepositRecordRequest): Promise<_236.QueryGetDepositRecordResponse>;
            depositRecordAll(request?: _236.QueryAllDepositRecordRequest): Promise<_236.QueryAllDepositRecordResponse>;
            depositRecordByHost(request: _236.QueryDepositRecordByHostRequest): Promise<_236.QueryDepositRecordByHostResponse>;
            lSMDeposit(request: _236.QueryLSMDepositRequest): Promise<_236.QueryLSMDepositResponse>;
            lSMDeposits(request: _236.QueryLSMDepositsRequest): Promise<_236.QueryLSMDepositsResponse>;
        };
        depositRecord_StatusFromJSON(object: any): _237.DepositRecord_Status;
        depositRecord_StatusToJSON(object: _237.DepositRecord_Status): string;
        depositRecord_SourceFromJSON(object: any): _237.DepositRecord_Source;
        depositRecord_SourceToJSON(object: _237.DepositRecord_Source): string;
        hostZoneUnbonding_StatusFromJSON(object: any): _237.HostZoneUnbonding_Status;
        hostZoneUnbonding_StatusToJSON(object: _237.HostZoneUnbonding_Status): string;
        lSMTokenDeposit_StatusFromJSON(object: any): _237.LSMTokenDeposit_Status;
        lSMTokenDeposit_StatusToJSON(object: _237.LSMTokenDeposit_Status): string;
        DepositRecord_Status: typeof _237.DepositRecord_Status;
        DepositRecord_StatusSDKType: typeof _237.DepositRecord_Status;
        DepositRecord_StatusAmino: typeof _237.DepositRecord_Status;
        DepositRecord_Source: typeof _237.DepositRecord_Source;
        DepositRecord_SourceSDKType: typeof _237.DepositRecord_Source;
        DepositRecord_SourceAmino: typeof _237.DepositRecord_Source;
        HostZoneUnbonding_Status: typeof _237.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusSDKType: typeof _237.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusAmino: typeof _237.HostZoneUnbonding_Status;
        LSMTokenDeposit_Status: typeof _237.LSMTokenDeposit_Status;
        LSMTokenDeposit_StatusSDKType: typeof _237.LSMTokenDeposit_Status;
        LSMTokenDeposit_StatusAmino: typeof _237.LSMTokenDeposit_Status;
        UserRedemptionRecord: {
            typeUrl: string;
            encode(message: _237.UserRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _237.UserRedemptionRecord;
            fromPartial(object: Partial<_237.UserRedemptionRecord>): _237.UserRedemptionRecord;
            fromAmino(object: _237.UserRedemptionRecordAmino): _237.UserRedemptionRecord;
            toAmino(message: _237.UserRedemptionRecord): _237.UserRedemptionRecordAmino;
            fromAminoMsg(object: _237.UserRedemptionRecordAminoMsg): _237.UserRedemptionRecord;
            fromProtoMsg(message: _237.UserRedemptionRecordProtoMsg): _237.UserRedemptionRecord;
            toProto(message: _237.UserRedemptionRecord): Uint8Array;
            toProtoMsg(message: _237.UserRedemptionRecord): _237.UserRedemptionRecordProtoMsg;
        };
        DepositRecord: {
            typeUrl: string;
            encode(message: _237.DepositRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _237.DepositRecord;
            fromPartial(object: Partial<_237.DepositRecord>): _237.DepositRecord;
            fromAmino(object: _237.DepositRecordAmino): _237.DepositRecord;
            toAmino(message: _237.DepositRecord): _237.DepositRecordAmino;
            fromAminoMsg(object: _237.DepositRecordAminoMsg): _237.DepositRecord;
            fromProtoMsg(message: _237.DepositRecordProtoMsg): _237.DepositRecord;
            toProto(message: _237.DepositRecord): Uint8Array;
            toProtoMsg(message: _237.DepositRecord): _237.DepositRecordProtoMsg;
        };
        HostZoneUnbonding: {
            typeUrl: string;
            encode(message: _237.HostZoneUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _237.HostZoneUnbonding;
            fromPartial(object: Partial<_237.HostZoneUnbonding>): _237.HostZoneUnbonding;
            fromAmino(object: _237.HostZoneUnbondingAmino): _237.HostZoneUnbonding;
            toAmino(message: _237.HostZoneUnbonding): _237.HostZoneUnbondingAmino;
            fromAminoMsg(object: _237.HostZoneUnbondingAminoMsg): _237.HostZoneUnbonding;
            fromProtoMsg(message: _237.HostZoneUnbondingProtoMsg): _237.HostZoneUnbonding;
            toProto(message: _237.HostZoneUnbonding): Uint8Array;
            toProtoMsg(message: _237.HostZoneUnbonding): _237.HostZoneUnbondingProtoMsg;
        };
        EpochUnbondingRecord: {
            typeUrl: string;
            encode(message: _237.EpochUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _237.EpochUnbondingRecord;
            fromPartial(object: Partial<_237.EpochUnbondingRecord>): _237.EpochUnbondingRecord;
            fromAmino(object: _237.EpochUnbondingRecordAmino): _237.EpochUnbondingRecord;
            toAmino(message: _237.EpochUnbondingRecord): _237.EpochUnbondingRecordAmino;
            fromAminoMsg(object: _237.EpochUnbondingRecordAminoMsg): _237.EpochUnbondingRecord;
            fromProtoMsg(message: _237.EpochUnbondingRecordProtoMsg): _237.EpochUnbondingRecord;
            toProto(message: _237.EpochUnbondingRecord): Uint8Array;
            toProtoMsg(message: _237.EpochUnbondingRecord): _237.EpochUnbondingRecordProtoMsg;
        };
        LSMTokenDeposit: {
            typeUrl: string;
            encode(message: _237.LSMTokenDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _237.LSMTokenDeposit;
            fromPartial(object: Partial<_237.LSMTokenDeposit>): _237.LSMTokenDeposit;
            fromAmino(object: _237.LSMTokenDepositAmino): _237.LSMTokenDeposit;
            toAmino(message: _237.LSMTokenDeposit): _237.LSMTokenDepositAmino;
            fromAminoMsg(object: _237.LSMTokenDepositAminoMsg): _237.LSMTokenDeposit;
            fromProtoMsg(message: _237.LSMTokenDepositProtoMsg): _237.LSMTokenDeposit;
            toProto(message: _237.LSMTokenDeposit): Uint8Array;
            toProtoMsg(message: _237.LSMTokenDeposit): _237.LSMTokenDepositProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _236.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryParamsRequest;
            fromPartial(_: Partial<_236.QueryParamsRequest>): _236.QueryParamsRequest;
            fromAmino(_: _236.QueryParamsRequestAmino): _236.QueryParamsRequest;
            toAmino(_: _236.QueryParamsRequest): _236.QueryParamsRequestAmino;
            fromAminoMsg(object: _236.QueryParamsRequestAminoMsg): _236.QueryParamsRequest;
            fromProtoMsg(message: _236.QueryParamsRequestProtoMsg): _236.QueryParamsRequest;
            toProto(message: _236.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _236.QueryParamsRequest): _236.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _236.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryParamsResponse;
            fromPartial(object: Partial<_236.QueryParamsResponse>): _236.QueryParamsResponse;
            fromAmino(object: _236.QueryParamsResponseAmino): _236.QueryParamsResponse;
            toAmino(message: _236.QueryParamsResponse): _236.QueryParamsResponseAmino;
            fromAminoMsg(object: _236.QueryParamsResponseAminoMsg): _236.QueryParamsResponse;
            fromProtoMsg(message: _236.QueryParamsResponseProtoMsg): _236.QueryParamsResponse;
            toProto(message: _236.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _236.QueryParamsResponse): _236.QueryParamsResponseProtoMsg;
        };
        QueryGetDepositRecordRequest: {
            typeUrl: string;
            encode(message: _236.QueryGetDepositRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryGetDepositRecordRequest;
            fromPartial(object: Partial<_236.QueryGetDepositRecordRequest>): _236.QueryGetDepositRecordRequest;
            fromAmino(object: _236.QueryGetDepositRecordRequestAmino): _236.QueryGetDepositRecordRequest;
            toAmino(message: _236.QueryGetDepositRecordRequest): _236.QueryGetDepositRecordRequestAmino;
            fromAminoMsg(object: _236.QueryGetDepositRecordRequestAminoMsg): _236.QueryGetDepositRecordRequest;
            fromProtoMsg(message: _236.QueryGetDepositRecordRequestProtoMsg): _236.QueryGetDepositRecordRequest;
            toProto(message: _236.QueryGetDepositRecordRequest): Uint8Array;
            toProtoMsg(message: _236.QueryGetDepositRecordRequest): _236.QueryGetDepositRecordRequestProtoMsg;
        };
        QueryGetDepositRecordResponse: {
            typeUrl: string;
            encode(message: _236.QueryGetDepositRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryGetDepositRecordResponse;
            fromPartial(object: Partial<_236.QueryGetDepositRecordResponse>): _236.QueryGetDepositRecordResponse;
            fromAmino(object: _236.QueryGetDepositRecordResponseAmino): _236.QueryGetDepositRecordResponse;
            toAmino(message: _236.QueryGetDepositRecordResponse): _236.QueryGetDepositRecordResponseAmino;
            fromAminoMsg(object: _236.QueryGetDepositRecordResponseAminoMsg): _236.QueryGetDepositRecordResponse;
            fromProtoMsg(message: _236.QueryGetDepositRecordResponseProtoMsg): _236.QueryGetDepositRecordResponse;
            toProto(message: _236.QueryGetDepositRecordResponse): Uint8Array;
            toProtoMsg(message: _236.QueryGetDepositRecordResponse): _236.QueryGetDepositRecordResponseProtoMsg;
        };
        QueryAllDepositRecordRequest: {
            typeUrl: string;
            encode(message: _236.QueryAllDepositRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryAllDepositRecordRequest;
            fromPartial(object: Partial<_236.QueryAllDepositRecordRequest>): _236.QueryAllDepositRecordRequest;
            fromAmino(object: _236.QueryAllDepositRecordRequestAmino): _236.QueryAllDepositRecordRequest;
            toAmino(message: _236.QueryAllDepositRecordRequest): _236.QueryAllDepositRecordRequestAmino;
            fromAminoMsg(object: _236.QueryAllDepositRecordRequestAminoMsg): _236.QueryAllDepositRecordRequest;
            fromProtoMsg(message: _236.QueryAllDepositRecordRequestProtoMsg): _236.QueryAllDepositRecordRequest;
            toProto(message: _236.QueryAllDepositRecordRequest): Uint8Array;
            toProtoMsg(message: _236.QueryAllDepositRecordRequest): _236.QueryAllDepositRecordRequestProtoMsg;
        };
        QueryAllDepositRecordResponse: {
            typeUrl: string;
            encode(message: _236.QueryAllDepositRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryAllDepositRecordResponse;
            fromPartial(object: Partial<_236.QueryAllDepositRecordResponse>): _236.QueryAllDepositRecordResponse;
            fromAmino(object: _236.QueryAllDepositRecordResponseAmino): _236.QueryAllDepositRecordResponse;
            toAmino(message: _236.QueryAllDepositRecordResponse): _236.QueryAllDepositRecordResponseAmino;
            fromAminoMsg(object: _236.QueryAllDepositRecordResponseAminoMsg): _236.QueryAllDepositRecordResponse;
            fromProtoMsg(message: _236.QueryAllDepositRecordResponseProtoMsg): _236.QueryAllDepositRecordResponse;
            toProto(message: _236.QueryAllDepositRecordResponse): Uint8Array;
            toProtoMsg(message: _236.QueryAllDepositRecordResponse): _236.QueryAllDepositRecordResponseProtoMsg;
        };
        QueryDepositRecordByHostRequest: {
            typeUrl: string;
            encode(message: _236.QueryDepositRecordByHostRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryDepositRecordByHostRequest;
            fromPartial(object: Partial<_236.QueryDepositRecordByHostRequest>): _236.QueryDepositRecordByHostRequest;
            fromAmino(object: _236.QueryDepositRecordByHostRequestAmino): _236.QueryDepositRecordByHostRequest;
            toAmino(message: _236.QueryDepositRecordByHostRequest): _236.QueryDepositRecordByHostRequestAmino;
            fromAminoMsg(object: _236.QueryDepositRecordByHostRequestAminoMsg): _236.QueryDepositRecordByHostRequest;
            fromProtoMsg(message: _236.QueryDepositRecordByHostRequestProtoMsg): _236.QueryDepositRecordByHostRequest;
            toProto(message: _236.QueryDepositRecordByHostRequest): Uint8Array;
            toProtoMsg(message: _236.QueryDepositRecordByHostRequest): _236.QueryDepositRecordByHostRequestProtoMsg;
        };
        QueryDepositRecordByHostResponse: {
            typeUrl: string;
            encode(message: _236.QueryDepositRecordByHostResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryDepositRecordByHostResponse;
            fromPartial(object: Partial<_236.QueryDepositRecordByHostResponse>): _236.QueryDepositRecordByHostResponse;
            fromAmino(object: _236.QueryDepositRecordByHostResponseAmino): _236.QueryDepositRecordByHostResponse;
            toAmino(message: _236.QueryDepositRecordByHostResponse): _236.QueryDepositRecordByHostResponseAmino;
            fromAminoMsg(object: _236.QueryDepositRecordByHostResponseAminoMsg): _236.QueryDepositRecordByHostResponse;
            fromProtoMsg(message: _236.QueryDepositRecordByHostResponseProtoMsg): _236.QueryDepositRecordByHostResponse;
            toProto(message: _236.QueryDepositRecordByHostResponse): Uint8Array;
            toProtoMsg(message: _236.QueryDepositRecordByHostResponse): _236.QueryDepositRecordByHostResponseProtoMsg;
        };
        QueryGetUserRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _236.QueryGetUserRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryGetUserRedemptionRecordRequest;
            fromPartial(object: Partial<_236.QueryGetUserRedemptionRecordRequest>): _236.QueryGetUserRedemptionRecordRequest;
            fromAmino(object: _236.QueryGetUserRedemptionRecordRequestAmino): _236.QueryGetUserRedemptionRecordRequest;
            toAmino(message: _236.QueryGetUserRedemptionRecordRequest): _236.QueryGetUserRedemptionRecordRequestAmino;
            fromAminoMsg(object: _236.QueryGetUserRedemptionRecordRequestAminoMsg): _236.QueryGetUserRedemptionRecordRequest;
            fromProtoMsg(message: _236.QueryGetUserRedemptionRecordRequestProtoMsg): _236.QueryGetUserRedemptionRecordRequest;
            toProto(message: _236.QueryGetUserRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _236.QueryGetUserRedemptionRecordRequest): _236.QueryGetUserRedemptionRecordRequestProtoMsg;
        };
        QueryGetUserRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _236.QueryGetUserRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryGetUserRedemptionRecordResponse;
            fromPartial(object: Partial<_236.QueryGetUserRedemptionRecordResponse>): _236.QueryGetUserRedemptionRecordResponse;
            fromAmino(object: _236.QueryGetUserRedemptionRecordResponseAmino): _236.QueryGetUserRedemptionRecordResponse;
            toAmino(message: _236.QueryGetUserRedemptionRecordResponse): _236.QueryGetUserRedemptionRecordResponseAmino;
            fromAminoMsg(object: _236.QueryGetUserRedemptionRecordResponseAminoMsg): _236.QueryGetUserRedemptionRecordResponse;
            fromProtoMsg(message: _236.QueryGetUserRedemptionRecordResponseProtoMsg): _236.QueryGetUserRedemptionRecordResponse;
            toProto(message: _236.QueryGetUserRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _236.QueryGetUserRedemptionRecordResponse): _236.QueryGetUserRedemptionRecordResponseProtoMsg;
        };
        QueryAllUserRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _236.QueryAllUserRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryAllUserRedemptionRecordRequest;
            fromPartial(object: Partial<_236.QueryAllUserRedemptionRecordRequest>): _236.QueryAllUserRedemptionRecordRequest;
            fromAmino(object: _236.QueryAllUserRedemptionRecordRequestAmino): _236.QueryAllUserRedemptionRecordRequest;
            toAmino(message: _236.QueryAllUserRedemptionRecordRequest): _236.QueryAllUserRedemptionRecordRequestAmino;
            fromAminoMsg(object: _236.QueryAllUserRedemptionRecordRequestAminoMsg): _236.QueryAllUserRedemptionRecordRequest;
            fromProtoMsg(message: _236.QueryAllUserRedemptionRecordRequestProtoMsg): _236.QueryAllUserRedemptionRecordRequest;
            toProto(message: _236.QueryAllUserRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _236.QueryAllUserRedemptionRecordRequest): _236.QueryAllUserRedemptionRecordRequestProtoMsg;
        };
        QueryAllUserRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _236.QueryAllUserRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryAllUserRedemptionRecordResponse;
            fromPartial(object: Partial<_236.QueryAllUserRedemptionRecordResponse>): _236.QueryAllUserRedemptionRecordResponse;
            fromAmino(object: _236.QueryAllUserRedemptionRecordResponseAmino): _236.QueryAllUserRedemptionRecordResponse;
            toAmino(message: _236.QueryAllUserRedemptionRecordResponse): _236.QueryAllUserRedemptionRecordResponseAmino;
            fromAminoMsg(object: _236.QueryAllUserRedemptionRecordResponseAminoMsg): _236.QueryAllUserRedemptionRecordResponse;
            fromProtoMsg(message: _236.QueryAllUserRedemptionRecordResponseProtoMsg): _236.QueryAllUserRedemptionRecordResponse;
            toProto(message: _236.QueryAllUserRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _236.QueryAllUserRedemptionRecordResponse): _236.QueryAllUserRedemptionRecordResponseProtoMsg;
        };
        QueryAllUserRedemptionRecordForUserRequest: {
            typeUrl: string;
            encode(message: _236.QueryAllUserRedemptionRecordForUserRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryAllUserRedemptionRecordForUserRequest;
            fromPartial(object: Partial<_236.QueryAllUserRedemptionRecordForUserRequest>): _236.QueryAllUserRedemptionRecordForUserRequest;
            fromAmino(object: _236.QueryAllUserRedemptionRecordForUserRequestAmino): _236.QueryAllUserRedemptionRecordForUserRequest;
            toAmino(message: _236.QueryAllUserRedemptionRecordForUserRequest): _236.QueryAllUserRedemptionRecordForUserRequestAmino;
            fromAminoMsg(object: _236.QueryAllUserRedemptionRecordForUserRequestAminoMsg): _236.QueryAllUserRedemptionRecordForUserRequest;
            fromProtoMsg(message: _236.QueryAllUserRedemptionRecordForUserRequestProtoMsg): _236.QueryAllUserRedemptionRecordForUserRequest;
            toProto(message: _236.QueryAllUserRedemptionRecordForUserRequest): Uint8Array;
            toProtoMsg(message: _236.QueryAllUserRedemptionRecordForUserRequest): _236.QueryAllUserRedemptionRecordForUserRequestProtoMsg;
        };
        QueryAllUserRedemptionRecordForUserResponse: {
            typeUrl: string;
            encode(message: _236.QueryAllUserRedemptionRecordForUserResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryAllUserRedemptionRecordForUserResponse;
            fromPartial(object: Partial<_236.QueryAllUserRedemptionRecordForUserResponse>): _236.QueryAllUserRedemptionRecordForUserResponse;
            fromAmino(object: _236.QueryAllUserRedemptionRecordForUserResponseAmino): _236.QueryAllUserRedemptionRecordForUserResponse;
            toAmino(message: _236.QueryAllUserRedemptionRecordForUserResponse): _236.QueryAllUserRedemptionRecordForUserResponseAmino;
            fromAminoMsg(object: _236.QueryAllUserRedemptionRecordForUserResponseAminoMsg): _236.QueryAllUserRedemptionRecordForUserResponse;
            fromProtoMsg(message: _236.QueryAllUserRedemptionRecordForUserResponseProtoMsg): _236.QueryAllUserRedemptionRecordForUserResponse;
            toProto(message: _236.QueryAllUserRedemptionRecordForUserResponse): Uint8Array;
            toProtoMsg(message: _236.QueryAllUserRedemptionRecordForUserResponse): _236.QueryAllUserRedemptionRecordForUserResponseProtoMsg;
        };
        QueryGetEpochUnbondingRecordRequest: {
            typeUrl: string;
            encode(message: _236.QueryGetEpochUnbondingRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryGetEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_236.QueryGetEpochUnbondingRecordRequest>): _236.QueryGetEpochUnbondingRecordRequest;
            fromAmino(object: _236.QueryGetEpochUnbondingRecordRequestAmino): _236.QueryGetEpochUnbondingRecordRequest;
            toAmino(message: _236.QueryGetEpochUnbondingRecordRequest): _236.QueryGetEpochUnbondingRecordRequestAmino;
            fromAminoMsg(object: _236.QueryGetEpochUnbondingRecordRequestAminoMsg): _236.QueryGetEpochUnbondingRecordRequest;
            fromProtoMsg(message: _236.QueryGetEpochUnbondingRecordRequestProtoMsg): _236.QueryGetEpochUnbondingRecordRequest;
            toProto(message: _236.QueryGetEpochUnbondingRecordRequest): Uint8Array;
            toProtoMsg(message: _236.QueryGetEpochUnbondingRecordRequest): _236.QueryGetEpochUnbondingRecordRequestProtoMsg;
        };
        QueryGetEpochUnbondingRecordResponse: {
            typeUrl: string;
            encode(message: _236.QueryGetEpochUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryGetEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_236.QueryGetEpochUnbondingRecordResponse>): _236.QueryGetEpochUnbondingRecordResponse;
            fromAmino(object: _236.QueryGetEpochUnbondingRecordResponseAmino): _236.QueryGetEpochUnbondingRecordResponse;
            toAmino(message: _236.QueryGetEpochUnbondingRecordResponse): _236.QueryGetEpochUnbondingRecordResponseAmino;
            fromAminoMsg(object: _236.QueryGetEpochUnbondingRecordResponseAminoMsg): _236.QueryGetEpochUnbondingRecordResponse;
            fromProtoMsg(message: _236.QueryGetEpochUnbondingRecordResponseProtoMsg): _236.QueryGetEpochUnbondingRecordResponse;
            toProto(message: _236.QueryGetEpochUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _236.QueryGetEpochUnbondingRecordResponse): _236.QueryGetEpochUnbondingRecordResponseProtoMsg;
        };
        QueryAllEpochUnbondingRecordRequest: {
            typeUrl: string;
            encode(message: _236.QueryAllEpochUnbondingRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryAllEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_236.QueryAllEpochUnbondingRecordRequest>): _236.QueryAllEpochUnbondingRecordRequest;
            fromAmino(object: _236.QueryAllEpochUnbondingRecordRequestAmino): _236.QueryAllEpochUnbondingRecordRequest;
            toAmino(message: _236.QueryAllEpochUnbondingRecordRequest): _236.QueryAllEpochUnbondingRecordRequestAmino;
            fromAminoMsg(object: _236.QueryAllEpochUnbondingRecordRequestAminoMsg): _236.QueryAllEpochUnbondingRecordRequest;
            fromProtoMsg(message: _236.QueryAllEpochUnbondingRecordRequestProtoMsg): _236.QueryAllEpochUnbondingRecordRequest;
            toProto(message: _236.QueryAllEpochUnbondingRecordRequest): Uint8Array;
            toProtoMsg(message: _236.QueryAllEpochUnbondingRecordRequest): _236.QueryAllEpochUnbondingRecordRequestProtoMsg;
        };
        QueryAllEpochUnbondingRecordResponse: {
            typeUrl: string;
            encode(message: _236.QueryAllEpochUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryAllEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_236.QueryAllEpochUnbondingRecordResponse>): _236.QueryAllEpochUnbondingRecordResponse;
            fromAmino(object: _236.QueryAllEpochUnbondingRecordResponseAmino): _236.QueryAllEpochUnbondingRecordResponse;
            toAmino(message: _236.QueryAllEpochUnbondingRecordResponse): _236.QueryAllEpochUnbondingRecordResponseAmino;
            fromAminoMsg(object: _236.QueryAllEpochUnbondingRecordResponseAminoMsg): _236.QueryAllEpochUnbondingRecordResponse;
            fromProtoMsg(message: _236.QueryAllEpochUnbondingRecordResponseProtoMsg): _236.QueryAllEpochUnbondingRecordResponse;
            toProto(message: _236.QueryAllEpochUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _236.QueryAllEpochUnbondingRecordResponse): _236.QueryAllEpochUnbondingRecordResponseProtoMsg;
        };
        QueryLSMDepositRequest: {
            typeUrl: string;
            encode(message: _236.QueryLSMDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryLSMDepositRequest;
            fromPartial(object: Partial<_236.QueryLSMDepositRequest>): _236.QueryLSMDepositRequest;
            fromAmino(object: _236.QueryLSMDepositRequestAmino): _236.QueryLSMDepositRequest;
            toAmino(message: _236.QueryLSMDepositRequest): _236.QueryLSMDepositRequestAmino;
            fromAminoMsg(object: _236.QueryLSMDepositRequestAminoMsg): _236.QueryLSMDepositRequest;
            fromProtoMsg(message: _236.QueryLSMDepositRequestProtoMsg): _236.QueryLSMDepositRequest;
            toProto(message: _236.QueryLSMDepositRequest): Uint8Array;
            toProtoMsg(message: _236.QueryLSMDepositRequest): _236.QueryLSMDepositRequestProtoMsg;
        };
        QueryLSMDepositResponse: {
            typeUrl: string;
            encode(message: _236.QueryLSMDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryLSMDepositResponse;
            fromPartial(object: Partial<_236.QueryLSMDepositResponse>): _236.QueryLSMDepositResponse;
            fromAmino(object: _236.QueryLSMDepositResponseAmino): _236.QueryLSMDepositResponse;
            toAmino(message: _236.QueryLSMDepositResponse): _236.QueryLSMDepositResponseAmino;
            fromAminoMsg(object: _236.QueryLSMDepositResponseAminoMsg): _236.QueryLSMDepositResponse;
            fromProtoMsg(message: _236.QueryLSMDepositResponseProtoMsg): _236.QueryLSMDepositResponse;
            toProto(message: _236.QueryLSMDepositResponse): Uint8Array;
            toProtoMsg(message: _236.QueryLSMDepositResponse): _236.QueryLSMDepositResponseProtoMsg;
        };
        QueryLSMDepositsRequest: {
            typeUrl: string;
            encode(message: _236.QueryLSMDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryLSMDepositsRequest;
            fromPartial(object: Partial<_236.QueryLSMDepositsRequest>): _236.QueryLSMDepositsRequest;
            fromAmino(object: _236.QueryLSMDepositsRequestAmino): _236.QueryLSMDepositsRequest;
            toAmino(message: _236.QueryLSMDepositsRequest): _236.QueryLSMDepositsRequestAmino;
            fromAminoMsg(object: _236.QueryLSMDepositsRequestAminoMsg): _236.QueryLSMDepositsRequest;
            fromProtoMsg(message: _236.QueryLSMDepositsRequestProtoMsg): _236.QueryLSMDepositsRequest;
            toProto(message: _236.QueryLSMDepositsRequest): Uint8Array;
            toProtoMsg(message: _236.QueryLSMDepositsRequest): _236.QueryLSMDepositsRequestProtoMsg;
        };
        QueryLSMDepositsResponse: {
            typeUrl: string;
            encode(message: _236.QueryLSMDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryLSMDepositsResponse;
            fromPartial(object: Partial<_236.QueryLSMDepositsResponse>): _236.QueryLSMDepositsResponse;
            fromAmino(object: _236.QueryLSMDepositsResponseAmino): _236.QueryLSMDepositsResponse;
            toAmino(message: _236.QueryLSMDepositsResponse): _236.QueryLSMDepositsResponseAmino;
            fromAminoMsg(object: _236.QueryLSMDepositsResponseAminoMsg): _236.QueryLSMDepositsResponse;
            fromProtoMsg(message: _236.QueryLSMDepositsResponseProtoMsg): _236.QueryLSMDepositsResponse;
            toProto(message: _236.QueryLSMDepositsResponse): Uint8Array;
            toProtoMsg(message: _236.QueryLSMDepositsResponse): _236.QueryLSMDepositsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _235.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.Params;
            fromPartial(_: Partial<_235.Params>): _235.Params;
            fromAmino(_: _235.ParamsAmino): _235.Params;
            toAmino(_: _235.Params): _235.ParamsAmino;
            fromAminoMsg(object: _235.ParamsAminoMsg): _235.Params;
            fromProtoMsg(message: _235.ParamsProtoMsg): _235.Params;
            toProto(message: _235.Params): Uint8Array;
            toProtoMsg(message: _235.Params): _235.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _234.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.GenesisState;
            fromPartial(object: Partial<_234.GenesisState>): _234.GenesisState;
            fromAmino(object: _234.GenesisStateAmino): _234.GenesisState;
            toAmino(message: _234.GenesisState): _234.GenesisStateAmino;
            fromAminoMsg(object: _234.GenesisStateAminoMsg): _234.GenesisState;
            fromProtoMsg(message: _234.GenesisStateProtoMsg): _234.GenesisState;
            toProto(message: _234.GenesisState): Uint8Array;
            toProtoMsg(message: _234.GenesisState): _234.GenesisStateProtoMsg;
        };
        TransferCallback: {
            typeUrl: string;
            encode(message: _233.TransferCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.TransferCallback;
            fromPartial(object: Partial<_233.TransferCallback>): _233.TransferCallback;
            fromAmino(object: _233.TransferCallbackAmino): _233.TransferCallback;
            toAmino(message: _233.TransferCallback): _233.TransferCallbackAmino;
            fromAminoMsg(object: _233.TransferCallbackAminoMsg): _233.TransferCallback;
            fromProtoMsg(message: _233.TransferCallbackProtoMsg): _233.TransferCallback;
            toProto(message: _233.TransferCallback): Uint8Array;
            toProtoMsg(message: _233.TransferCallback): _233.TransferCallbackProtoMsg;
        };
        TransferLSMTokenCallback: {
            typeUrl: string;
            encode(message: _233.TransferLSMTokenCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.TransferLSMTokenCallback;
            fromPartial(object: Partial<_233.TransferLSMTokenCallback>): _233.TransferLSMTokenCallback;
            fromAmino(object: _233.TransferLSMTokenCallbackAmino): _233.TransferLSMTokenCallback;
            toAmino(message: _233.TransferLSMTokenCallback): _233.TransferLSMTokenCallbackAmino;
            fromAminoMsg(object: _233.TransferLSMTokenCallbackAminoMsg): _233.TransferLSMTokenCallback;
            fromProtoMsg(message: _233.TransferLSMTokenCallbackProtoMsg): _233.TransferLSMTokenCallback;
            toProto(message: _233.TransferLSMTokenCallback): Uint8Array;
            toProtoMsg(message: _233.TransferLSMTokenCallback): _233.TransferLSMTokenCallbackProtoMsg;
        };
    };
    const stakedym: {
        MsgClientImpl: typeof _424.MsgClientImpl;
        QueryClientImpl: typeof _414.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            hostZone(request?: _239.QueryHostZoneRequest): Promise<_239.QueryHostZoneResponse>;
            delegationRecords(request: _239.QueryDelegationRecordsRequest): Promise<_239.QueryDelegationRecordsResponse>;
            unbondingRecords(request: _239.QueryUnbondingRecordsRequest): Promise<_239.QueryUnbondingRecordsResponse>;
            redemptionRecord(request: _239.QueryRedemptionRecordRequest): Promise<_239.QueryRedemptionRecordResponse>;
            redemptionRecords(request: _239.QueryRedemptionRecordsRequest): Promise<_239.QueryRedemptionRecordsResponse>;
            slashRecords(request?: _239.QuerySlashRecordsRequest): Promise<_239.QuerySlashRecordsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _241.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _241.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmDelegation(value: _241.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUndelegation(value: _241.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUnbondedTokenSweep(value: _241.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                adjustDelegatedBalance(value: _241.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _241.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _241.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                refreshRedemptionRate(value: _241.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteDelegationRecord(value: _241.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteUnbondingRecord(value: _241.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteRedemptionRecord(value: _241.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOperatorAddress(value: _241.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _241.MsgLiquidStake): {
                    typeUrl: string;
                    value: _241.MsgLiquidStake;
                };
                redeemStake(value: _241.MsgRedeemStake): {
                    typeUrl: string;
                    value: _241.MsgRedeemStake;
                };
                confirmDelegation(value: _241.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _241.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _241.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _241.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _241.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _241.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _241.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _241.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _241.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _241.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _241.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _241.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _241.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _241.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _241.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _241.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _241.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _241.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _241.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _241.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _241.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _241.MsgSetOperatorAddress;
                };
            };
            fromPartial: {
                liquidStake(value: _241.MsgLiquidStake): {
                    typeUrl: string;
                    value: _241.MsgLiquidStake;
                };
                redeemStake(value: _241.MsgRedeemStake): {
                    typeUrl: string;
                    value: _241.MsgRedeemStake;
                };
                confirmDelegation(value: _241.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _241.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _241.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _241.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _241.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _241.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _241.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _241.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _241.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _241.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _241.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _241.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _241.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _241.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _241.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _241.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _241.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _241.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _241.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _241.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _241.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _241.MsgSetOperatorAddress;
                };
            };
        };
        AminoConverter: {
            "/stride.stakedym.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _241.MsgLiquidStake) => _241.MsgLiquidStakeAmino;
                fromAmino: (object: _241.MsgLiquidStakeAmino) => _241.MsgLiquidStake;
            };
            "/stride.stakedym.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _241.MsgRedeemStake) => _241.MsgRedeemStakeAmino;
                fromAmino: (object: _241.MsgRedeemStakeAmino) => _241.MsgRedeemStake;
            };
            "/stride.stakedym.MsgConfirmDelegation": {
                aminoType: string;
                toAmino: (message: _241.MsgConfirmDelegation) => _241.MsgConfirmDelegationAmino;
                fromAmino: (object: _241.MsgConfirmDelegationAmino) => _241.MsgConfirmDelegation;
            };
            "/stride.stakedym.MsgConfirmUndelegation": {
                aminoType: string;
                toAmino: (message: _241.MsgConfirmUndelegation) => _241.MsgConfirmUndelegationAmino;
                fromAmino: (object: _241.MsgConfirmUndelegationAmino) => _241.MsgConfirmUndelegation;
            };
            "/stride.stakedym.MsgConfirmUnbondedTokenSweep": {
                aminoType: string;
                toAmino: (message: _241.MsgConfirmUnbondedTokenSweep) => _241.MsgConfirmUnbondedTokenSweepAmino;
                fromAmino: (object: _241.MsgConfirmUnbondedTokenSweepAmino) => _241.MsgConfirmUnbondedTokenSweep;
            };
            "/stride.stakedym.MsgAdjustDelegatedBalance": {
                aminoType: string;
                toAmino: (message: _241.MsgAdjustDelegatedBalance) => _241.MsgAdjustDelegatedBalanceAmino;
                fromAmino: (object: _241.MsgAdjustDelegatedBalanceAmino) => _241.MsgAdjustDelegatedBalance;
            };
            "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _241.MsgUpdateInnerRedemptionRateBounds) => _241.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _241.MsgUpdateInnerRedemptionRateBoundsAmino) => _241.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.stakedym.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _241.MsgResumeHostZone) => _241.MsgResumeHostZoneAmino;
                fromAmino: (object: _241.MsgResumeHostZoneAmino) => _241.MsgResumeHostZone;
            };
            "/stride.stakedym.MsgRefreshRedemptionRate": {
                aminoType: string;
                toAmino: (message: _241.MsgRefreshRedemptionRate) => _241.MsgRefreshRedemptionRateAmino;
                fromAmino: (object: _241.MsgRefreshRedemptionRateAmino) => _241.MsgRefreshRedemptionRate;
            };
            "/stride.stakedym.MsgOverwriteDelegationRecord": {
                aminoType: string;
                toAmino: (message: _241.MsgOverwriteDelegationRecord) => _241.MsgOverwriteDelegationRecordAmino;
                fromAmino: (object: _241.MsgOverwriteDelegationRecordAmino) => _241.MsgOverwriteDelegationRecord;
            };
            "/stride.stakedym.MsgOverwriteUnbondingRecord": {
                aminoType: string;
                toAmino: (message: _241.MsgOverwriteUnbondingRecord) => _241.MsgOverwriteUnbondingRecordAmino;
                fromAmino: (object: _241.MsgOverwriteUnbondingRecordAmino) => _241.MsgOverwriteUnbondingRecord;
            };
            "/stride.stakedym.MsgOverwriteRedemptionRecord": {
                aminoType: string;
                toAmino: (message: _241.MsgOverwriteRedemptionRecord) => _241.MsgOverwriteRedemptionRecordAmino;
                fromAmino: (object: _241.MsgOverwriteRedemptionRecordAmino) => _241.MsgOverwriteRedemptionRecord;
            };
            "/stride.stakedym.MsgSetOperatorAddress": {
                aminoType: string;
                toAmino: (message: _241.MsgSetOperatorAddress) => _241.MsgSetOperatorAddressAmino;
                fromAmino: (object: _241.MsgSetOperatorAddressAmino) => _241.MsgSetOperatorAddress;
            };
        };
        overwritableRecordTypeFromJSON(object: any): _241.OverwritableRecordType;
        overwritableRecordTypeToJSON(object: _241.OverwritableRecordType): string;
        OverwritableRecordType: typeof _241.OverwritableRecordType;
        OverwritableRecordTypeSDKType: typeof _241.OverwritableRecordType;
        OverwritableRecordTypeAmino: typeof _241.OverwritableRecordType;
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _241.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.MsgLiquidStake;
            fromPartial(object: Partial<_241.MsgLiquidStake>): _241.MsgLiquidStake;
            fromAmino(object: _241.MsgLiquidStakeAmino): _241.MsgLiquidStake;
            toAmino(message: _241.MsgLiquidStake): _241.MsgLiquidStakeAmino;
            fromAminoMsg(object: _241.MsgLiquidStakeAminoMsg): _241.MsgLiquidStake;
            toAminoMsg(message: _241.MsgLiquidStake): _241.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _241.MsgLiquidStakeProtoMsg): _241.MsgLiquidStake;
            toProto(message: _241.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _241.MsgLiquidStake): _241.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _241.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_241.MsgLiquidStakeResponse>): _241.MsgLiquidStakeResponse;
            fromAmino(object: _241.MsgLiquidStakeResponseAmino): _241.MsgLiquidStakeResponse;
            toAmino(message: _241.MsgLiquidStakeResponse): _241.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _241.MsgLiquidStakeResponseAminoMsg): _241.MsgLiquidStakeResponse;
            fromProtoMsg(message: _241.MsgLiquidStakeResponseProtoMsg): _241.MsgLiquidStakeResponse;
            toProto(message: _241.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _241.MsgLiquidStakeResponse): _241.MsgLiquidStakeResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _241.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.MsgRedeemStake;
            fromPartial(object: Partial<_241.MsgRedeemStake>): _241.MsgRedeemStake;
            fromAmino(object: _241.MsgRedeemStakeAmino): _241.MsgRedeemStake;
            toAmino(message: _241.MsgRedeemStake): _241.MsgRedeemStakeAmino;
            fromAminoMsg(object: _241.MsgRedeemStakeAminoMsg): _241.MsgRedeemStake;
            toAminoMsg(message: _241.MsgRedeemStake): _241.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _241.MsgRedeemStakeProtoMsg): _241.MsgRedeemStake;
            toProto(message: _241.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _241.MsgRedeemStake): _241.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(message: _241.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.MsgRedeemStakeResponse;
            fromPartial(object: Partial<_241.MsgRedeemStakeResponse>): _241.MsgRedeemStakeResponse;
            fromAmino(object: _241.MsgRedeemStakeResponseAmino): _241.MsgRedeemStakeResponse;
            toAmino(message: _241.MsgRedeemStakeResponse): _241.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _241.MsgRedeemStakeResponseAminoMsg): _241.MsgRedeemStakeResponse;
            fromProtoMsg(message: _241.MsgRedeemStakeResponseProtoMsg): _241.MsgRedeemStakeResponse;
            toProto(message: _241.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _241.MsgRedeemStakeResponse): _241.MsgRedeemStakeResponseProtoMsg;
        };
        MsgConfirmDelegation: {
            typeUrl: string;
            encode(message: _241.MsgConfirmDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.MsgConfirmDelegation;
            fromPartial(object: Partial<_241.MsgConfirmDelegation>): _241.MsgConfirmDelegation;
            fromAmino(object: _241.MsgConfirmDelegationAmino): _241.MsgConfirmDelegation;
            toAmino(message: _241.MsgConfirmDelegation): _241.MsgConfirmDelegationAmino;
            fromAminoMsg(object: _241.MsgConfirmDelegationAminoMsg): _241.MsgConfirmDelegation;
            toAminoMsg(message: _241.MsgConfirmDelegation): _241.MsgConfirmDelegationAminoMsg;
            fromProtoMsg(message: _241.MsgConfirmDelegationProtoMsg): _241.MsgConfirmDelegation;
            toProto(message: _241.MsgConfirmDelegation): Uint8Array;
            toProtoMsg(message: _241.MsgConfirmDelegation): _241.MsgConfirmDelegationProtoMsg;
        };
        MsgConfirmDelegationResponse: {
            typeUrl: string;
            encode(_: _241.MsgConfirmDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.MsgConfirmDelegationResponse;
            fromPartial(_: Partial<_241.MsgConfirmDelegationResponse>): _241.MsgConfirmDelegationResponse;
            fromAmino(_: _241.MsgConfirmDelegationResponseAmino): _241.MsgConfirmDelegationResponse;
            toAmino(_: _241.MsgConfirmDelegationResponse): _241.MsgConfirmDelegationResponseAmino;
            fromAminoMsg(object: _241.MsgConfirmDelegationResponseAminoMsg): _241.MsgConfirmDelegationResponse;
            fromProtoMsg(message: _241.MsgConfirmDelegationResponseProtoMsg): _241.MsgConfirmDelegationResponse;
            toProto(message: _241.MsgConfirmDelegationResponse): Uint8Array;
            toProtoMsg(message: _241.MsgConfirmDelegationResponse): _241.MsgConfirmDelegationResponseProtoMsg;
        };
        MsgConfirmUndelegation: {
            typeUrl: string;
            encode(message: _241.MsgConfirmUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.MsgConfirmUndelegation;
            fromPartial(object: Partial<_241.MsgConfirmUndelegation>): _241.MsgConfirmUndelegation;
            fromAmino(object: _241.MsgConfirmUndelegationAmino): _241.MsgConfirmUndelegation;
            toAmino(message: _241.MsgConfirmUndelegation): _241.MsgConfirmUndelegationAmino;
            fromAminoMsg(object: _241.MsgConfirmUndelegationAminoMsg): _241.MsgConfirmUndelegation;
            toAminoMsg(message: _241.MsgConfirmUndelegation): _241.MsgConfirmUndelegationAminoMsg;
            fromProtoMsg(message: _241.MsgConfirmUndelegationProtoMsg): _241.MsgConfirmUndelegation;
            toProto(message: _241.MsgConfirmUndelegation): Uint8Array;
            toProtoMsg(message: _241.MsgConfirmUndelegation): _241.MsgConfirmUndelegationProtoMsg;
        };
        MsgConfirmUndelegationResponse: {
            typeUrl: string;
            encode(_: _241.MsgConfirmUndelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.MsgConfirmUndelegationResponse;
            fromPartial(_: Partial<_241.MsgConfirmUndelegationResponse>): _241.MsgConfirmUndelegationResponse;
            fromAmino(_: _241.MsgConfirmUndelegationResponseAmino): _241.MsgConfirmUndelegationResponse;
            toAmino(_: _241.MsgConfirmUndelegationResponse): _241.MsgConfirmUndelegationResponseAmino;
            fromAminoMsg(object: _241.MsgConfirmUndelegationResponseAminoMsg): _241.MsgConfirmUndelegationResponse;
            fromProtoMsg(message: _241.MsgConfirmUndelegationResponseProtoMsg): _241.MsgConfirmUndelegationResponse;
            toProto(message: _241.MsgConfirmUndelegationResponse): Uint8Array;
            toProtoMsg(message: _241.MsgConfirmUndelegationResponse): _241.MsgConfirmUndelegationResponseProtoMsg;
        };
        MsgConfirmUnbondedTokenSweep: {
            typeUrl: string;
            encode(message: _241.MsgConfirmUnbondedTokenSweep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.MsgConfirmUnbondedTokenSweep;
            fromPartial(object: Partial<_241.MsgConfirmUnbondedTokenSweep>): _241.MsgConfirmUnbondedTokenSweep;
            fromAmino(object: _241.MsgConfirmUnbondedTokenSweepAmino): _241.MsgConfirmUnbondedTokenSweep;
            toAmino(message: _241.MsgConfirmUnbondedTokenSweep): _241.MsgConfirmUnbondedTokenSweepAmino;
            fromAminoMsg(object: _241.MsgConfirmUnbondedTokenSweepAminoMsg): _241.MsgConfirmUnbondedTokenSweep;
            toAminoMsg(message: _241.MsgConfirmUnbondedTokenSweep): _241.MsgConfirmUnbondedTokenSweepAminoMsg;
            fromProtoMsg(message: _241.MsgConfirmUnbondedTokenSweepProtoMsg): _241.MsgConfirmUnbondedTokenSweep;
            toProto(message: _241.MsgConfirmUnbondedTokenSweep): Uint8Array;
            toProtoMsg(message: _241.MsgConfirmUnbondedTokenSweep): _241.MsgConfirmUnbondedTokenSweepProtoMsg;
        };
        MsgConfirmUnbondedTokenSweepResponse: {
            typeUrl: string;
            encode(_: _241.MsgConfirmUnbondedTokenSweepResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.MsgConfirmUnbondedTokenSweepResponse;
            fromPartial(_: Partial<_241.MsgConfirmUnbondedTokenSweepResponse>): _241.MsgConfirmUnbondedTokenSweepResponse;
            fromAmino(_: _241.MsgConfirmUnbondedTokenSweepResponseAmino): _241.MsgConfirmUnbondedTokenSweepResponse;
            toAmino(_: _241.MsgConfirmUnbondedTokenSweepResponse): _241.MsgConfirmUnbondedTokenSweepResponseAmino;
            fromAminoMsg(object: _241.MsgConfirmUnbondedTokenSweepResponseAminoMsg): _241.MsgConfirmUnbondedTokenSweepResponse;
            fromProtoMsg(message: _241.MsgConfirmUnbondedTokenSweepResponseProtoMsg): _241.MsgConfirmUnbondedTokenSweepResponse;
            toProto(message: _241.MsgConfirmUnbondedTokenSweepResponse): Uint8Array;
            toProtoMsg(message: _241.MsgConfirmUnbondedTokenSweepResponse): _241.MsgConfirmUnbondedTokenSweepResponseProtoMsg;
        };
        MsgAdjustDelegatedBalance: {
            typeUrl: string;
            encode(message: _241.MsgAdjustDelegatedBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.MsgAdjustDelegatedBalance;
            fromPartial(object: Partial<_241.MsgAdjustDelegatedBalance>): _241.MsgAdjustDelegatedBalance;
            fromAmino(object: _241.MsgAdjustDelegatedBalanceAmino): _241.MsgAdjustDelegatedBalance;
            toAmino(message: _241.MsgAdjustDelegatedBalance): _241.MsgAdjustDelegatedBalanceAmino;
            fromAminoMsg(object: _241.MsgAdjustDelegatedBalanceAminoMsg): _241.MsgAdjustDelegatedBalance;
            toAminoMsg(message: _241.MsgAdjustDelegatedBalance): _241.MsgAdjustDelegatedBalanceAminoMsg;
            fromProtoMsg(message: _241.MsgAdjustDelegatedBalanceProtoMsg): _241.MsgAdjustDelegatedBalance;
            toProto(message: _241.MsgAdjustDelegatedBalance): Uint8Array;
            toProtoMsg(message: _241.MsgAdjustDelegatedBalance): _241.MsgAdjustDelegatedBalanceProtoMsg;
        };
        MsgAdjustDelegatedBalanceResponse: {
            typeUrl: string;
            encode(_: _241.MsgAdjustDelegatedBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.MsgAdjustDelegatedBalanceResponse;
            fromPartial(_: Partial<_241.MsgAdjustDelegatedBalanceResponse>): _241.MsgAdjustDelegatedBalanceResponse;
            fromAmino(_: _241.MsgAdjustDelegatedBalanceResponseAmino): _241.MsgAdjustDelegatedBalanceResponse;
            toAmino(_: _241.MsgAdjustDelegatedBalanceResponse): _241.MsgAdjustDelegatedBalanceResponseAmino;
            fromAminoMsg(object: _241.MsgAdjustDelegatedBalanceResponseAminoMsg): _241.MsgAdjustDelegatedBalanceResponse;
            fromProtoMsg(message: _241.MsgAdjustDelegatedBalanceResponseProtoMsg): _241.MsgAdjustDelegatedBalanceResponse;
            toProto(message: _241.MsgAdjustDelegatedBalanceResponse): Uint8Array;
            toProtoMsg(message: _241.MsgAdjustDelegatedBalanceResponse): _241.MsgAdjustDelegatedBalanceResponseProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _241.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_241.MsgUpdateInnerRedemptionRateBounds>): _241.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _241.MsgUpdateInnerRedemptionRateBoundsAmino): _241.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _241.MsgUpdateInnerRedemptionRateBounds): _241.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _241.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _241.MsgUpdateInnerRedemptionRateBounds;
            toAminoMsg(message: _241.MsgUpdateInnerRedemptionRateBounds): _241.MsgUpdateInnerRedemptionRateBoundsAminoMsg;
            fromProtoMsg(message: _241.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _241.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _241.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _241.MsgUpdateInnerRedemptionRateBounds): _241.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _241.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_241.MsgUpdateInnerRedemptionRateBoundsResponse>): _241.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _241.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _241.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _241.MsgUpdateInnerRedemptionRateBoundsResponse): _241.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _241.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _241.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _241.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _241.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _241.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _241.MsgUpdateInnerRedemptionRateBoundsResponse): _241.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _241.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.MsgResumeHostZone;
            fromPartial(object: Partial<_241.MsgResumeHostZone>): _241.MsgResumeHostZone;
            fromAmino(object: _241.MsgResumeHostZoneAmino): _241.MsgResumeHostZone;
            toAmino(message: _241.MsgResumeHostZone): _241.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _241.MsgResumeHostZoneAminoMsg): _241.MsgResumeHostZone;
            toAminoMsg(message: _241.MsgResumeHostZone): _241.MsgResumeHostZoneAminoMsg;
            fromProtoMsg(message: _241.MsgResumeHostZoneProtoMsg): _241.MsgResumeHostZone;
            toProto(message: _241.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _241.MsgResumeHostZone): _241.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _241.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_241.MsgResumeHostZoneResponse>): _241.MsgResumeHostZoneResponse;
            fromAmino(_: _241.MsgResumeHostZoneResponseAmino): _241.MsgResumeHostZoneResponse;
            toAmino(_: _241.MsgResumeHostZoneResponse): _241.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _241.MsgResumeHostZoneResponseAminoMsg): _241.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _241.MsgResumeHostZoneResponseProtoMsg): _241.MsgResumeHostZoneResponse;
            toProto(message: _241.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _241.MsgResumeHostZoneResponse): _241.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgRefreshRedemptionRate: {
            typeUrl: string;
            encode(message: _241.MsgRefreshRedemptionRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.MsgRefreshRedemptionRate;
            fromPartial(object: Partial<_241.MsgRefreshRedemptionRate>): _241.MsgRefreshRedemptionRate;
            fromAmino(object: _241.MsgRefreshRedemptionRateAmino): _241.MsgRefreshRedemptionRate;
            toAmino(message: _241.MsgRefreshRedemptionRate): _241.MsgRefreshRedemptionRateAmino;
            fromAminoMsg(object: _241.MsgRefreshRedemptionRateAminoMsg): _241.MsgRefreshRedemptionRate;
            toAminoMsg(message: _241.MsgRefreshRedemptionRate): _241.MsgRefreshRedemptionRateAminoMsg;
            fromProtoMsg(message: _241.MsgRefreshRedemptionRateProtoMsg): _241.MsgRefreshRedemptionRate;
            toProto(message: _241.MsgRefreshRedemptionRate): Uint8Array;
            toProtoMsg(message: _241.MsgRefreshRedemptionRate): _241.MsgRefreshRedemptionRateProtoMsg;
        };
        MsgRefreshRedemptionRateResponse: {
            typeUrl: string;
            encode(_: _241.MsgRefreshRedemptionRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.MsgRefreshRedemptionRateResponse;
            fromPartial(_: Partial<_241.MsgRefreshRedemptionRateResponse>): _241.MsgRefreshRedemptionRateResponse;
            fromAmino(_: _241.MsgRefreshRedemptionRateResponseAmino): _241.MsgRefreshRedemptionRateResponse;
            toAmino(_: _241.MsgRefreshRedemptionRateResponse): _241.MsgRefreshRedemptionRateResponseAmino;
            fromAminoMsg(object: _241.MsgRefreshRedemptionRateResponseAminoMsg): _241.MsgRefreshRedemptionRateResponse;
            fromProtoMsg(message: _241.MsgRefreshRedemptionRateResponseProtoMsg): _241.MsgRefreshRedemptionRateResponse;
            toProto(message: _241.MsgRefreshRedemptionRateResponse): Uint8Array;
            toProtoMsg(message: _241.MsgRefreshRedemptionRateResponse): _241.MsgRefreshRedemptionRateResponseProtoMsg;
        };
        MsgOverwriteDelegationRecord: {
            typeUrl: string;
            encode(message: _241.MsgOverwriteDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.MsgOverwriteDelegationRecord;
            fromPartial(object: Partial<_241.MsgOverwriteDelegationRecord>): _241.MsgOverwriteDelegationRecord;
            fromAmino(object: _241.MsgOverwriteDelegationRecordAmino): _241.MsgOverwriteDelegationRecord;
            toAmino(message: _241.MsgOverwriteDelegationRecord): _241.MsgOverwriteDelegationRecordAmino;
            fromAminoMsg(object: _241.MsgOverwriteDelegationRecordAminoMsg): _241.MsgOverwriteDelegationRecord;
            toAminoMsg(message: _241.MsgOverwriteDelegationRecord): _241.MsgOverwriteDelegationRecordAminoMsg;
            fromProtoMsg(message: _241.MsgOverwriteDelegationRecordProtoMsg): _241.MsgOverwriteDelegationRecord;
            toProto(message: _241.MsgOverwriteDelegationRecord): Uint8Array;
            toProtoMsg(message: _241.MsgOverwriteDelegationRecord): _241.MsgOverwriteDelegationRecordProtoMsg;
        };
        MsgOverwriteDelegationRecordResponse: {
            typeUrl: string;
            encode(_: _241.MsgOverwriteDelegationRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.MsgOverwriteDelegationRecordResponse;
            fromPartial(_: Partial<_241.MsgOverwriteDelegationRecordResponse>): _241.MsgOverwriteDelegationRecordResponse;
            fromAmino(_: _241.MsgOverwriteDelegationRecordResponseAmino): _241.MsgOverwriteDelegationRecordResponse;
            toAmino(_: _241.MsgOverwriteDelegationRecordResponse): _241.MsgOverwriteDelegationRecordResponseAmino;
            fromAminoMsg(object: _241.MsgOverwriteDelegationRecordResponseAminoMsg): _241.MsgOverwriteDelegationRecordResponse;
            fromProtoMsg(message: _241.MsgOverwriteDelegationRecordResponseProtoMsg): _241.MsgOverwriteDelegationRecordResponse;
            toProto(message: _241.MsgOverwriteDelegationRecordResponse): Uint8Array;
            toProtoMsg(message: _241.MsgOverwriteDelegationRecordResponse): _241.MsgOverwriteDelegationRecordResponseProtoMsg;
        };
        MsgOverwriteUnbondingRecord: {
            typeUrl: string;
            encode(message: _241.MsgOverwriteUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.MsgOverwriteUnbondingRecord;
            fromPartial(object: Partial<_241.MsgOverwriteUnbondingRecord>): _241.MsgOverwriteUnbondingRecord;
            fromAmino(object: _241.MsgOverwriteUnbondingRecordAmino): _241.MsgOverwriteUnbondingRecord;
            toAmino(message: _241.MsgOverwriteUnbondingRecord): _241.MsgOverwriteUnbondingRecordAmino;
            fromAminoMsg(object: _241.MsgOverwriteUnbondingRecordAminoMsg): _241.MsgOverwriteUnbondingRecord;
            toAminoMsg(message: _241.MsgOverwriteUnbondingRecord): _241.MsgOverwriteUnbondingRecordAminoMsg;
            fromProtoMsg(message: _241.MsgOverwriteUnbondingRecordProtoMsg): _241.MsgOverwriteUnbondingRecord;
            toProto(message: _241.MsgOverwriteUnbondingRecord): Uint8Array;
            toProtoMsg(message: _241.MsgOverwriteUnbondingRecord): _241.MsgOverwriteUnbondingRecordProtoMsg;
        };
        MsgOverwriteUnbondingRecordResponse: {
            typeUrl: string;
            encode(_: _241.MsgOverwriteUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.MsgOverwriteUnbondingRecordResponse;
            fromPartial(_: Partial<_241.MsgOverwriteUnbondingRecordResponse>): _241.MsgOverwriteUnbondingRecordResponse;
            fromAmino(_: _241.MsgOverwriteUnbondingRecordResponseAmino): _241.MsgOverwriteUnbondingRecordResponse;
            toAmino(_: _241.MsgOverwriteUnbondingRecordResponse): _241.MsgOverwriteUnbondingRecordResponseAmino;
            fromAminoMsg(object: _241.MsgOverwriteUnbondingRecordResponseAminoMsg): _241.MsgOverwriteUnbondingRecordResponse;
            fromProtoMsg(message: _241.MsgOverwriteUnbondingRecordResponseProtoMsg): _241.MsgOverwriteUnbondingRecordResponse;
            toProto(message: _241.MsgOverwriteUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _241.MsgOverwriteUnbondingRecordResponse): _241.MsgOverwriteUnbondingRecordResponseProtoMsg;
        };
        MsgOverwriteRedemptionRecord: {
            typeUrl: string;
            encode(message: _241.MsgOverwriteRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.MsgOverwriteRedemptionRecord;
            fromPartial(object: Partial<_241.MsgOverwriteRedemptionRecord>): _241.MsgOverwriteRedemptionRecord;
            fromAmino(object: _241.MsgOverwriteRedemptionRecordAmino): _241.MsgOverwriteRedemptionRecord;
            toAmino(message: _241.MsgOverwriteRedemptionRecord): _241.MsgOverwriteRedemptionRecordAmino;
            fromAminoMsg(object: _241.MsgOverwriteRedemptionRecordAminoMsg): _241.MsgOverwriteRedemptionRecord;
            toAminoMsg(message: _241.MsgOverwriteRedemptionRecord): _241.MsgOverwriteRedemptionRecordAminoMsg;
            fromProtoMsg(message: _241.MsgOverwriteRedemptionRecordProtoMsg): _241.MsgOverwriteRedemptionRecord;
            toProto(message: _241.MsgOverwriteRedemptionRecord): Uint8Array;
            toProtoMsg(message: _241.MsgOverwriteRedemptionRecord): _241.MsgOverwriteRedemptionRecordProtoMsg;
        };
        MsgOverwriteRedemptionRecordResponse: {
            typeUrl: string;
            encode(_: _241.MsgOverwriteRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.MsgOverwriteRedemptionRecordResponse;
            fromPartial(_: Partial<_241.MsgOverwriteRedemptionRecordResponse>): _241.MsgOverwriteRedemptionRecordResponse;
            fromAmino(_: _241.MsgOverwriteRedemptionRecordResponseAmino): _241.MsgOverwriteRedemptionRecordResponse;
            toAmino(_: _241.MsgOverwriteRedemptionRecordResponse): _241.MsgOverwriteRedemptionRecordResponseAmino;
            fromAminoMsg(object: _241.MsgOverwriteRedemptionRecordResponseAminoMsg): _241.MsgOverwriteRedemptionRecordResponse;
            fromProtoMsg(message: _241.MsgOverwriteRedemptionRecordResponseProtoMsg): _241.MsgOverwriteRedemptionRecordResponse;
            toProto(message: _241.MsgOverwriteRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _241.MsgOverwriteRedemptionRecordResponse): _241.MsgOverwriteRedemptionRecordResponseProtoMsg;
        };
        MsgSetOperatorAddress: {
            typeUrl: string;
            encode(message: _241.MsgSetOperatorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.MsgSetOperatorAddress;
            fromPartial(object: Partial<_241.MsgSetOperatorAddress>): _241.MsgSetOperatorAddress;
            fromAmino(object: _241.MsgSetOperatorAddressAmino): _241.MsgSetOperatorAddress;
            toAmino(message: _241.MsgSetOperatorAddress): _241.MsgSetOperatorAddressAmino;
            fromAminoMsg(object: _241.MsgSetOperatorAddressAminoMsg): _241.MsgSetOperatorAddress;
            toAminoMsg(message: _241.MsgSetOperatorAddress): _241.MsgSetOperatorAddressAminoMsg;
            fromProtoMsg(message: _241.MsgSetOperatorAddressProtoMsg): _241.MsgSetOperatorAddress;
            toProto(message: _241.MsgSetOperatorAddress): Uint8Array;
            toProtoMsg(message: _241.MsgSetOperatorAddress): _241.MsgSetOperatorAddressProtoMsg;
        };
        MsgSetOperatorAddressResponse: {
            typeUrl: string;
            encode(_: _241.MsgSetOperatorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.MsgSetOperatorAddressResponse;
            fromPartial(_: Partial<_241.MsgSetOperatorAddressResponse>): _241.MsgSetOperatorAddressResponse;
            fromAmino(_: _241.MsgSetOperatorAddressResponseAmino): _241.MsgSetOperatorAddressResponse;
            toAmino(_: _241.MsgSetOperatorAddressResponse): _241.MsgSetOperatorAddressResponseAmino;
            fromAminoMsg(object: _241.MsgSetOperatorAddressResponseAminoMsg): _241.MsgSetOperatorAddressResponse;
            fromProtoMsg(message: _241.MsgSetOperatorAddressResponseProtoMsg): _241.MsgSetOperatorAddressResponse;
            toProto(message: _241.MsgSetOperatorAddressResponse): Uint8Array;
            toProtoMsg(message: _241.MsgSetOperatorAddressResponse): _241.MsgSetOperatorAddressResponseProtoMsg;
        };
        delegationRecordStatusFromJSON(object: any): _240.DelegationRecordStatus;
        delegationRecordStatusToJSON(object: _240.DelegationRecordStatus): string;
        unbondingRecordStatusFromJSON(object: any): _240.UnbondingRecordStatus;
        unbondingRecordStatusToJSON(object: _240.UnbondingRecordStatus): string;
        DelegationRecordStatus: typeof _240.DelegationRecordStatus;
        DelegationRecordStatusSDKType: typeof _240.DelegationRecordStatus;
        DelegationRecordStatusAmino: typeof _240.DelegationRecordStatus;
        UnbondingRecordStatus: typeof _240.UnbondingRecordStatus;
        UnbondingRecordStatusSDKType: typeof _240.UnbondingRecordStatus;
        UnbondingRecordStatusAmino: typeof _240.UnbondingRecordStatus;
        HostZone: {
            typeUrl: string;
            encode(message: _240.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.HostZone;
            fromPartial(object: Partial<_240.HostZone>): _240.HostZone;
            fromAmino(object: _240.HostZoneAmino): _240.HostZone;
            toAmino(message: _240.HostZone): _240.HostZoneAmino;
            fromAminoMsg(object: _240.HostZoneAminoMsg): _240.HostZone;
            fromProtoMsg(message: _240.HostZoneProtoMsg): _240.HostZone;
            toProto(message: _240.HostZone): Uint8Array;
            toProtoMsg(message: _240.HostZone): _240.HostZoneProtoMsg;
        };
        DelegationRecord: {
            typeUrl: string;
            encode(message: _240.DelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.DelegationRecord;
            fromPartial(object: Partial<_240.DelegationRecord>): _240.DelegationRecord;
            fromAmino(object: _240.DelegationRecordAmino): _240.DelegationRecord;
            toAmino(message: _240.DelegationRecord): _240.DelegationRecordAmino;
            fromAminoMsg(object: _240.DelegationRecordAminoMsg): _240.DelegationRecord;
            fromProtoMsg(message: _240.DelegationRecordProtoMsg): _240.DelegationRecord;
            toProto(message: _240.DelegationRecord): Uint8Array;
            toProtoMsg(message: _240.DelegationRecord): _240.DelegationRecordProtoMsg;
        };
        UnbondingRecord: {
            typeUrl: string;
            encode(message: _240.UnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.UnbondingRecord;
            fromPartial(object: Partial<_240.UnbondingRecord>): _240.UnbondingRecord;
            fromAmino(object: _240.UnbondingRecordAmino): _240.UnbondingRecord;
            toAmino(message: _240.UnbondingRecord): _240.UnbondingRecordAmino;
            fromAminoMsg(object: _240.UnbondingRecordAminoMsg): _240.UnbondingRecord;
            fromProtoMsg(message: _240.UnbondingRecordProtoMsg): _240.UnbondingRecord;
            toProto(message: _240.UnbondingRecord): Uint8Array;
            toProtoMsg(message: _240.UnbondingRecord): _240.UnbondingRecordProtoMsg;
        };
        RedemptionRecord: {
            typeUrl: string;
            encode(message: _240.RedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.RedemptionRecord;
            fromPartial(object: Partial<_240.RedemptionRecord>): _240.RedemptionRecord;
            fromAmino(object: _240.RedemptionRecordAmino): _240.RedemptionRecord;
            toAmino(message: _240.RedemptionRecord): _240.RedemptionRecordAmino;
            fromAminoMsg(object: _240.RedemptionRecordAminoMsg): _240.RedemptionRecord;
            fromProtoMsg(message: _240.RedemptionRecordProtoMsg): _240.RedemptionRecord;
            toProto(message: _240.RedemptionRecord): Uint8Array;
            toProtoMsg(message: _240.RedemptionRecord): _240.RedemptionRecordProtoMsg;
        };
        SlashRecord: {
            typeUrl: string;
            encode(message: _240.SlashRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.SlashRecord;
            fromPartial(object: Partial<_240.SlashRecord>): _240.SlashRecord;
            fromAmino(object: _240.SlashRecordAmino): _240.SlashRecord;
            toAmino(message: _240.SlashRecord): _240.SlashRecordAmino;
            fromAminoMsg(object: _240.SlashRecordAminoMsg): _240.SlashRecord;
            fromProtoMsg(message: _240.SlashRecordProtoMsg): _240.SlashRecord;
            toProto(message: _240.SlashRecord): Uint8Array;
            toProtoMsg(message: _240.SlashRecord): _240.SlashRecordProtoMsg;
        };
        QueryHostZoneRequest: {
            typeUrl: string;
            encode(_: _239.QueryHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _239.QueryHostZoneRequest;
            fromPartial(_: Partial<_239.QueryHostZoneRequest>): _239.QueryHostZoneRequest;
            fromAmino(_: _239.QueryHostZoneRequestAmino): _239.QueryHostZoneRequest;
            toAmino(_: _239.QueryHostZoneRequest): _239.QueryHostZoneRequestAmino;
            fromAminoMsg(object: _239.QueryHostZoneRequestAminoMsg): _239.QueryHostZoneRequest;
            fromProtoMsg(message: _239.QueryHostZoneRequestProtoMsg): _239.QueryHostZoneRequest;
            toProto(message: _239.QueryHostZoneRequest): Uint8Array;
            toProtoMsg(message: _239.QueryHostZoneRequest): _239.QueryHostZoneRequestProtoMsg;
        };
        QueryHostZoneResponse: {
            typeUrl: string;
            encode(message: _239.QueryHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _239.QueryHostZoneResponse;
            fromPartial(object: Partial<_239.QueryHostZoneResponse>): _239.QueryHostZoneResponse;
            fromAmino(object: _239.QueryHostZoneResponseAmino): _239.QueryHostZoneResponse;
            toAmino(message: _239.QueryHostZoneResponse): _239.QueryHostZoneResponseAmino;
            fromAminoMsg(object: _239.QueryHostZoneResponseAminoMsg): _239.QueryHostZoneResponse;
            fromProtoMsg(message: _239.QueryHostZoneResponseProtoMsg): _239.QueryHostZoneResponse;
            toProto(message: _239.QueryHostZoneResponse): Uint8Array;
            toProtoMsg(message: _239.QueryHostZoneResponse): _239.QueryHostZoneResponseProtoMsg;
        };
        QueryDelegationRecordsRequest: {
            typeUrl: string;
            encode(message: _239.QueryDelegationRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _239.QueryDelegationRecordsRequest;
            fromPartial(object: Partial<_239.QueryDelegationRecordsRequest>): _239.QueryDelegationRecordsRequest;
            fromAmino(object: _239.QueryDelegationRecordsRequestAmino): _239.QueryDelegationRecordsRequest;
            toAmino(message: _239.QueryDelegationRecordsRequest): _239.QueryDelegationRecordsRequestAmino;
            fromAminoMsg(object: _239.QueryDelegationRecordsRequestAminoMsg): _239.QueryDelegationRecordsRequest;
            fromProtoMsg(message: _239.QueryDelegationRecordsRequestProtoMsg): _239.QueryDelegationRecordsRequest;
            toProto(message: _239.QueryDelegationRecordsRequest): Uint8Array;
            toProtoMsg(message: _239.QueryDelegationRecordsRequest): _239.QueryDelegationRecordsRequestProtoMsg;
        };
        QueryDelegationRecordsResponse: {
            typeUrl: string;
            encode(message: _239.QueryDelegationRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _239.QueryDelegationRecordsResponse;
            fromPartial(object: Partial<_239.QueryDelegationRecordsResponse>): _239.QueryDelegationRecordsResponse;
            fromAmino(object: _239.QueryDelegationRecordsResponseAmino): _239.QueryDelegationRecordsResponse;
            toAmino(message: _239.QueryDelegationRecordsResponse): _239.QueryDelegationRecordsResponseAmino;
            fromAminoMsg(object: _239.QueryDelegationRecordsResponseAminoMsg): _239.QueryDelegationRecordsResponse;
            fromProtoMsg(message: _239.QueryDelegationRecordsResponseProtoMsg): _239.QueryDelegationRecordsResponse;
            toProto(message: _239.QueryDelegationRecordsResponse): Uint8Array;
            toProtoMsg(message: _239.QueryDelegationRecordsResponse): _239.QueryDelegationRecordsResponseProtoMsg;
        };
        QueryUnbondingRecordsRequest: {
            typeUrl: string;
            encode(message: _239.QueryUnbondingRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _239.QueryUnbondingRecordsRequest;
            fromPartial(object: Partial<_239.QueryUnbondingRecordsRequest>): _239.QueryUnbondingRecordsRequest;
            fromAmino(object: _239.QueryUnbondingRecordsRequestAmino): _239.QueryUnbondingRecordsRequest;
            toAmino(message: _239.QueryUnbondingRecordsRequest): _239.QueryUnbondingRecordsRequestAmino;
            fromAminoMsg(object: _239.QueryUnbondingRecordsRequestAminoMsg): _239.QueryUnbondingRecordsRequest;
            fromProtoMsg(message: _239.QueryUnbondingRecordsRequestProtoMsg): _239.QueryUnbondingRecordsRequest;
            toProto(message: _239.QueryUnbondingRecordsRequest): Uint8Array;
            toProtoMsg(message: _239.QueryUnbondingRecordsRequest): _239.QueryUnbondingRecordsRequestProtoMsg;
        };
        QueryUnbondingRecordsResponse: {
            typeUrl: string;
            encode(message: _239.QueryUnbondingRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _239.QueryUnbondingRecordsResponse;
            fromPartial(object: Partial<_239.QueryUnbondingRecordsResponse>): _239.QueryUnbondingRecordsResponse;
            fromAmino(object: _239.QueryUnbondingRecordsResponseAmino): _239.QueryUnbondingRecordsResponse;
            toAmino(message: _239.QueryUnbondingRecordsResponse): _239.QueryUnbondingRecordsResponseAmino;
            fromAminoMsg(object: _239.QueryUnbondingRecordsResponseAminoMsg): _239.QueryUnbondingRecordsResponse;
            fromProtoMsg(message: _239.QueryUnbondingRecordsResponseProtoMsg): _239.QueryUnbondingRecordsResponse;
            toProto(message: _239.QueryUnbondingRecordsResponse): Uint8Array;
            toProtoMsg(message: _239.QueryUnbondingRecordsResponse): _239.QueryUnbondingRecordsResponseProtoMsg;
        };
        QueryRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _239.QueryRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _239.QueryRedemptionRecordRequest;
            fromPartial(object: Partial<_239.QueryRedemptionRecordRequest>): _239.QueryRedemptionRecordRequest;
            fromAmino(object: _239.QueryRedemptionRecordRequestAmino): _239.QueryRedemptionRecordRequest;
            toAmino(message: _239.QueryRedemptionRecordRequest): _239.QueryRedemptionRecordRequestAmino;
            fromAminoMsg(object: _239.QueryRedemptionRecordRequestAminoMsg): _239.QueryRedemptionRecordRequest;
            fromProtoMsg(message: _239.QueryRedemptionRecordRequestProtoMsg): _239.QueryRedemptionRecordRequest;
            toProto(message: _239.QueryRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _239.QueryRedemptionRecordRequest): _239.QueryRedemptionRecordRequestProtoMsg;
        };
        QueryRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _239.QueryRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _239.QueryRedemptionRecordResponse;
            fromPartial(object: Partial<_239.QueryRedemptionRecordResponse>): _239.QueryRedemptionRecordResponse;
            fromAmino(object: _239.QueryRedemptionRecordResponseAmino): _239.QueryRedemptionRecordResponse;
            toAmino(message: _239.QueryRedemptionRecordResponse): _239.QueryRedemptionRecordResponseAmino;
            fromAminoMsg(object: _239.QueryRedemptionRecordResponseAminoMsg): _239.QueryRedemptionRecordResponse;
            fromProtoMsg(message: _239.QueryRedemptionRecordResponseProtoMsg): _239.QueryRedemptionRecordResponse;
            toProto(message: _239.QueryRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _239.QueryRedemptionRecordResponse): _239.QueryRedemptionRecordResponseProtoMsg;
        };
        QueryRedemptionRecordsRequest: {
            typeUrl: string;
            encode(message: _239.QueryRedemptionRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _239.QueryRedemptionRecordsRequest;
            fromPartial(object: Partial<_239.QueryRedemptionRecordsRequest>): _239.QueryRedemptionRecordsRequest;
            fromAmino(object: _239.QueryRedemptionRecordsRequestAmino): _239.QueryRedemptionRecordsRequest;
            toAmino(message: _239.QueryRedemptionRecordsRequest): _239.QueryRedemptionRecordsRequestAmino;
            fromAminoMsg(object: _239.QueryRedemptionRecordsRequestAminoMsg): _239.QueryRedemptionRecordsRequest;
            fromProtoMsg(message: _239.QueryRedemptionRecordsRequestProtoMsg): _239.QueryRedemptionRecordsRequest;
            toProto(message: _239.QueryRedemptionRecordsRequest): Uint8Array;
            toProtoMsg(message: _239.QueryRedemptionRecordsRequest): _239.QueryRedemptionRecordsRequestProtoMsg;
        };
        QueryRedemptionRecordsResponse: {
            typeUrl: string;
            encode(message: _239.QueryRedemptionRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _239.QueryRedemptionRecordsResponse;
            fromPartial(object: Partial<_239.QueryRedemptionRecordsResponse>): _239.QueryRedemptionRecordsResponse;
            fromAmino(object: _239.QueryRedemptionRecordsResponseAmino): _239.QueryRedemptionRecordsResponse;
            toAmino(message: _239.QueryRedemptionRecordsResponse): _239.QueryRedemptionRecordsResponseAmino;
            fromAminoMsg(object: _239.QueryRedemptionRecordsResponseAminoMsg): _239.QueryRedemptionRecordsResponse;
            fromProtoMsg(message: _239.QueryRedemptionRecordsResponseProtoMsg): _239.QueryRedemptionRecordsResponse;
            toProto(message: _239.QueryRedemptionRecordsResponse): Uint8Array;
            toProtoMsg(message: _239.QueryRedemptionRecordsResponse): _239.QueryRedemptionRecordsResponseProtoMsg;
        };
        QuerySlashRecordsRequest: {
            typeUrl: string;
            encode(_: _239.QuerySlashRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _239.QuerySlashRecordsRequest;
            fromPartial(_: Partial<_239.QuerySlashRecordsRequest>): _239.QuerySlashRecordsRequest;
            fromAmino(_: _239.QuerySlashRecordsRequestAmino): _239.QuerySlashRecordsRequest;
            toAmino(_: _239.QuerySlashRecordsRequest): _239.QuerySlashRecordsRequestAmino;
            fromAminoMsg(object: _239.QuerySlashRecordsRequestAminoMsg): _239.QuerySlashRecordsRequest;
            fromProtoMsg(message: _239.QuerySlashRecordsRequestProtoMsg): _239.QuerySlashRecordsRequest;
            toProto(message: _239.QuerySlashRecordsRequest): Uint8Array;
            toProtoMsg(message: _239.QuerySlashRecordsRequest): _239.QuerySlashRecordsRequestProtoMsg;
        };
        QuerySlashRecordsResponse: {
            typeUrl: string;
            encode(message: _239.QuerySlashRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _239.QuerySlashRecordsResponse;
            fromPartial(object: Partial<_239.QuerySlashRecordsResponse>): _239.QuerySlashRecordsResponse;
            fromAmino(object: _239.QuerySlashRecordsResponseAmino): _239.QuerySlashRecordsResponse;
            toAmino(message: _239.QuerySlashRecordsResponse): _239.QuerySlashRecordsResponseAmino;
            fromAminoMsg(object: _239.QuerySlashRecordsResponseAminoMsg): _239.QuerySlashRecordsResponse;
            fromProtoMsg(message: _239.QuerySlashRecordsResponseProtoMsg): _239.QuerySlashRecordsResponse;
            toProto(message: _239.QuerySlashRecordsResponse): Uint8Array;
            toProtoMsg(message: _239.QuerySlashRecordsResponse): _239.QuerySlashRecordsResponseProtoMsg;
        };
        RedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _239.RedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _239.RedemptionRecordResponse;
            fromPartial(object: Partial<_239.RedemptionRecordResponse>): _239.RedemptionRecordResponse;
            fromAmino(object: _239.RedemptionRecordResponseAmino): _239.RedemptionRecordResponse;
            toAmino(message: _239.RedemptionRecordResponse): _239.RedemptionRecordResponseAmino;
            fromAminoMsg(object: _239.RedemptionRecordResponseAminoMsg): _239.RedemptionRecordResponse;
            fromProtoMsg(message: _239.RedemptionRecordResponseProtoMsg): _239.RedemptionRecordResponse;
            toProto(message: _239.RedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _239.RedemptionRecordResponse): _239.RedemptionRecordResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _238.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.Params;
            fromPartial(_: Partial<_238.Params>): _238.Params;
            fromAmino(_: _238.ParamsAmino): _238.Params;
            toAmino(_: _238.Params): _238.ParamsAmino;
            fromAminoMsg(object: _238.ParamsAminoMsg): _238.Params;
            fromProtoMsg(message: _238.ParamsProtoMsg): _238.Params;
            toProto(message: _238.Params): Uint8Array;
            toProtoMsg(message: _238.Params): _238.ParamsProtoMsg;
        };
        TransferInProgressRecordIds: {
            typeUrl: string;
            encode(message: _238.TransferInProgressRecordIds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.TransferInProgressRecordIds;
            fromPartial(object: Partial<_238.TransferInProgressRecordIds>): _238.TransferInProgressRecordIds;
            fromAmino(object: _238.TransferInProgressRecordIdsAmino): _238.TransferInProgressRecordIds;
            toAmino(message: _238.TransferInProgressRecordIds): _238.TransferInProgressRecordIdsAmino;
            fromAminoMsg(object: _238.TransferInProgressRecordIdsAminoMsg): _238.TransferInProgressRecordIds;
            fromProtoMsg(message: _238.TransferInProgressRecordIdsProtoMsg): _238.TransferInProgressRecordIds;
            toProto(message: _238.TransferInProgressRecordIds): Uint8Array;
            toProtoMsg(message: _238.TransferInProgressRecordIds): _238.TransferInProgressRecordIdsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _238.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.GenesisState;
            fromPartial(object: Partial<_238.GenesisState>): _238.GenesisState;
            fromAmino(object: _238.GenesisStateAmino): _238.GenesisState;
            toAmino(message: _238.GenesisState): _238.GenesisStateAmino;
            fromAminoMsg(object: _238.GenesisStateAminoMsg): _238.GenesisState;
            fromProtoMsg(message: _238.GenesisStateProtoMsg): _238.GenesisState;
            toProto(message: _238.GenesisState): Uint8Array;
            toProtoMsg(message: _238.GenesisState): _238.GenesisStateProtoMsg;
        };
    };
    const stakeibc: {
        MsgClientImpl: typeof _425.MsgClientImpl;
        QueryClientImpl: typeof _415.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _251.QueryParamsRequest): Promise<_251.QueryParamsResponse>;
            validators(request: _251.QueryGetValidatorsRequest): Promise<_251.QueryGetValidatorsResponse>;
            hostZone(request: _251.QueryGetHostZoneRequest): Promise<_251.QueryGetHostZoneResponse>;
            hostZoneAll(request?: _251.QueryAllHostZoneRequest): Promise<_251.QueryAllHostZoneResponse>;
            moduleAddress(request: _251.QueryModuleAddressRequest): Promise<_251.QueryModuleAddressResponse>;
            interchainAccountFromAddress(request: _251.QueryInterchainAccountFromAddressRequest): Promise<_251.QueryInterchainAccountFromAddressResponse>;
            epochTracker(request: _251.QueryGetEpochTrackerRequest): Promise<_251.QueryGetEpochTrackerResponse>;
            epochTrackerAll(request?: _251.QueryAllEpochTrackerRequest): Promise<_251.QueryAllEpochTrackerResponse>;
            nextPacketSequence(request: _251.QueryGetNextPacketSequenceRequest): Promise<_251.QueryGetNextPacketSequenceResponse>;
            addressUnbondings(request: _251.QueryAddressUnbondings): Promise<_251.QueryAddressUnbondingsResponse>;
            allTradeRoutes(request?: _251.QueryAllTradeRoutes): Promise<_251.QueryAllTradeRoutesResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _253.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lSMLiquidStake(value: _253.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _253.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                registerHostZone(value: _253.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimUndelegatedTokens(value: _253.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                rebalanceValidators(value: _253.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addValidators(value: _253.MsgAddValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                changeValidatorWeight(value: _253.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteValidator(value: _253.MsgDeleteValidator): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreInterchainAccount(value: _253.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                closeDelegationChannel(value: _253.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateValidatorSharesExchRate(value: _253.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                calibrateDelegation(value: _253.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                clearBalance(value: _253.MsgClearBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _253.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _253.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createTradeRoute(value: _253.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteTradeRoute(value: _253.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateTradeRoute(value: _253.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setCommunityPoolRebate(value: _253.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                toggleTradeController(value: _253.MsgToggleTradeController): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateHostZoneParams(value: _253.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _253.MsgLiquidStake): {
                    typeUrl: string;
                    value: _253.MsgLiquidStake;
                };
                lSMLiquidStake(value: _253.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: _253.MsgLSMLiquidStake;
                };
                redeemStake(value: _253.MsgRedeemStake): {
                    typeUrl: string;
                    value: _253.MsgRedeemStake;
                };
                registerHostZone(value: _253.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _253.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _253.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _253.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _253.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _253.MsgRebalanceValidators;
                };
                addValidators(value: _253.MsgAddValidators): {
                    typeUrl: string;
                    value: _253.MsgAddValidators;
                };
                changeValidatorWeight(value: _253.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: _253.MsgChangeValidatorWeights;
                };
                deleteValidator(value: _253.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _253.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _253.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _253.MsgRestoreInterchainAccount;
                };
                closeDelegationChannel(value: _253.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: _253.MsgCloseDelegationChannel;
                };
                updateValidatorSharesExchRate(value: _253.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _253.MsgUpdateValidatorSharesExchRate;
                };
                calibrateDelegation(value: _253.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: _253.MsgCalibrateDelegation;
                };
                clearBalance(value: _253.MsgClearBalance): {
                    typeUrl: string;
                    value: _253.MsgClearBalance;
                };
                updateInnerRedemptionRateBounds(value: _253.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _253.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _253.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _253.MsgResumeHostZone;
                };
                createTradeRoute(value: _253.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: _253.MsgCreateTradeRoute;
                };
                deleteTradeRoute(value: _253.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: _253.MsgDeleteTradeRoute;
                };
                updateTradeRoute(value: _253.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: _253.MsgUpdateTradeRoute;
                };
                setCommunityPoolRebate(value: _253.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: _253.MsgSetCommunityPoolRebate;
                };
                toggleTradeController(value: _253.MsgToggleTradeController): {
                    typeUrl: string;
                    value: _253.MsgToggleTradeController;
                };
                updateHostZoneParams(value: _253.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: _253.MsgUpdateHostZoneParams;
                };
            };
            fromPartial: {
                liquidStake(value: _253.MsgLiquidStake): {
                    typeUrl: string;
                    value: _253.MsgLiquidStake;
                };
                lSMLiquidStake(value: _253.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: _253.MsgLSMLiquidStake;
                };
                redeemStake(value: _253.MsgRedeemStake): {
                    typeUrl: string;
                    value: _253.MsgRedeemStake;
                };
                registerHostZone(value: _253.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _253.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _253.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _253.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _253.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _253.MsgRebalanceValidators;
                };
                addValidators(value: _253.MsgAddValidators): {
                    typeUrl: string;
                    value: _253.MsgAddValidators;
                };
                changeValidatorWeight(value: _253.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: _253.MsgChangeValidatorWeights;
                };
                deleteValidator(value: _253.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _253.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _253.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _253.MsgRestoreInterchainAccount;
                };
                closeDelegationChannel(value: _253.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: _253.MsgCloseDelegationChannel;
                };
                updateValidatorSharesExchRate(value: _253.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _253.MsgUpdateValidatorSharesExchRate;
                };
                calibrateDelegation(value: _253.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: _253.MsgCalibrateDelegation;
                };
                clearBalance(value: _253.MsgClearBalance): {
                    typeUrl: string;
                    value: _253.MsgClearBalance;
                };
                updateInnerRedemptionRateBounds(value: _253.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _253.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _253.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _253.MsgResumeHostZone;
                };
                createTradeRoute(value: _253.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: _253.MsgCreateTradeRoute;
                };
                deleteTradeRoute(value: _253.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: _253.MsgDeleteTradeRoute;
                };
                updateTradeRoute(value: _253.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: _253.MsgUpdateTradeRoute;
                };
                setCommunityPoolRebate(value: _253.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: _253.MsgSetCommunityPoolRebate;
                };
                toggleTradeController(value: _253.MsgToggleTradeController): {
                    typeUrl: string;
                    value: _253.MsgToggleTradeController;
                };
                updateHostZoneParams(value: _253.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: _253.MsgUpdateHostZoneParams;
                };
            };
        };
        AminoConverter: {
            "/stride.stakeibc.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _253.MsgLiquidStake) => _253.MsgLiquidStakeAmino;
                fromAmino: (object: _253.MsgLiquidStakeAmino) => _253.MsgLiquidStake;
            };
            "/stride.stakeibc.MsgLSMLiquidStake": {
                aminoType: string;
                toAmino: (message: _253.MsgLSMLiquidStake) => _253.MsgLSMLiquidStakeAmino;
                fromAmino: (object: _253.MsgLSMLiquidStakeAmino) => _253.MsgLSMLiquidStake;
            };
            "/stride.stakeibc.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _253.MsgRedeemStake) => _253.MsgRedeemStakeAmino;
                fromAmino: (object: _253.MsgRedeemStakeAmino) => _253.MsgRedeemStake;
            };
            "/stride.stakeibc.MsgRegisterHostZone": {
                aminoType: string;
                toAmino: (message: _253.MsgRegisterHostZone) => _253.MsgRegisterHostZoneAmino;
                fromAmino: (object: _253.MsgRegisterHostZoneAmino) => _253.MsgRegisterHostZone;
            };
            "/stride.stakeibc.MsgClaimUndelegatedTokens": {
                aminoType: string;
                toAmino: (message: _253.MsgClaimUndelegatedTokens) => _253.MsgClaimUndelegatedTokensAmino;
                fromAmino: (object: _253.MsgClaimUndelegatedTokensAmino) => _253.MsgClaimUndelegatedTokens;
            };
            "/stride.stakeibc.MsgRebalanceValidators": {
                aminoType: string;
                toAmino: (message: _253.MsgRebalanceValidators) => _253.MsgRebalanceValidatorsAmino;
                fromAmino: (object: _253.MsgRebalanceValidatorsAmino) => _253.MsgRebalanceValidators;
            };
            "/stride.stakeibc.MsgAddValidators": {
                aminoType: string;
                toAmino: (message: _253.MsgAddValidators) => _253.MsgAddValidatorsAmino;
                fromAmino: (object: _253.MsgAddValidatorsAmino) => _253.MsgAddValidators;
            };
            "/stride.stakeibc.MsgChangeValidatorWeights": {
                aminoType: string;
                toAmino: (message: _253.MsgChangeValidatorWeights) => _253.MsgChangeValidatorWeightsAmino;
                fromAmino: (object: _253.MsgChangeValidatorWeightsAmino) => _253.MsgChangeValidatorWeights;
            };
            "/stride.stakeibc.MsgDeleteValidator": {
                aminoType: string;
                toAmino: (message: _253.MsgDeleteValidator) => _253.MsgDeleteValidatorAmino;
                fromAmino: (object: _253.MsgDeleteValidatorAmino) => _253.MsgDeleteValidator;
            };
            "/stride.stakeibc.MsgRestoreInterchainAccount": {
                aminoType: string;
                toAmino: (message: _253.MsgRestoreInterchainAccount) => _253.MsgRestoreInterchainAccountAmino;
                fromAmino: (object: _253.MsgRestoreInterchainAccountAmino) => _253.MsgRestoreInterchainAccount;
            };
            "/stride.stakeibc.MsgCloseDelegationChannel": {
                aminoType: string;
                toAmino: (message: _253.MsgCloseDelegationChannel) => _253.MsgCloseDelegationChannelAmino;
                fromAmino: (object: _253.MsgCloseDelegationChannelAmino) => _253.MsgCloseDelegationChannel;
            };
            "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
                aminoType: string;
                toAmino: (message: _253.MsgUpdateValidatorSharesExchRate) => _253.MsgUpdateValidatorSharesExchRateAmino;
                fromAmino: (object: _253.MsgUpdateValidatorSharesExchRateAmino) => _253.MsgUpdateValidatorSharesExchRate;
            };
            "/stride.stakeibc.MsgCalibrateDelegation": {
                aminoType: string;
                toAmino: (message: _253.MsgCalibrateDelegation) => _253.MsgCalibrateDelegationAmino;
                fromAmino: (object: _253.MsgCalibrateDelegationAmino) => _253.MsgCalibrateDelegation;
            };
            "/stride.stakeibc.MsgClearBalance": {
                aminoType: string;
                toAmino: (message: _253.MsgClearBalance) => _253.MsgClearBalanceAmino;
                fromAmino: (object: _253.MsgClearBalanceAmino) => _253.MsgClearBalance;
            };
            "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _253.MsgUpdateInnerRedemptionRateBounds) => _253.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _253.MsgUpdateInnerRedemptionRateBoundsAmino) => _253.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.stakeibc.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _253.MsgResumeHostZone) => _253.MsgResumeHostZoneAmino;
                fromAmino: (object: _253.MsgResumeHostZoneAmino) => _253.MsgResumeHostZone;
            };
            "/stride.stakeibc.MsgCreateTradeRoute": {
                aminoType: string;
                toAmino: (message: _253.MsgCreateTradeRoute) => _253.MsgCreateTradeRouteAmino;
                fromAmino: (object: _253.MsgCreateTradeRouteAmino) => _253.MsgCreateTradeRoute;
            };
            "/stride.stakeibc.MsgDeleteTradeRoute": {
                aminoType: string;
                toAmino: (message: _253.MsgDeleteTradeRoute) => _253.MsgDeleteTradeRouteAmino;
                fromAmino: (object: _253.MsgDeleteTradeRouteAmino) => _253.MsgDeleteTradeRoute;
            };
            "/stride.stakeibc.MsgUpdateTradeRoute": {
                aminoType: string;
                toAmino: (message: _253.MsgUpdateTradeRoute) => _253.MsgUpdateTradeRouteAmino;
                fromAmino: (object: _253.MsgUpdateTradeRouteAmino) => _253.MsgUpdateTradeRoute;
            };
            "/stride.stakeibc.MsgSetCommunityPoolRebate": {
                aminoType: string;
                toAmino: (message: _253.MsgSetCommunityPoolRebate) => _253.MsgSetCommunityPoolRebateAmino;
                fromAmino: (object: _253.MsgSetCommunityPoolRebateAmino) => _253.MsgSetCommunityPoolRebate;
            };
            "/stride.stakeibc.MsgToggleTradeController": {
                aminoType: string;
                toAmino: (message: _253.MsgToggleTradeController) => _253.MsgToggleTradeControllerAmino;
                fromAmino: (object: _253.MsgToggleTradeControllerAmino) => _253.MsgToggleTradeController;
            };
            "/stride.stakeibc.MsgUpdateHostZoneParams": {
                aminoType: string;
                toAmino: (message: _253.MsgUpdateHostZoneParams) => _253.MsgUpdateHostZoneParamsAmino;
                fromAmino: (object: _253.MsgUpdateHostZoneParamsAmino) => _253.MsgUpdateHostZoneParams;
            };
        };
        Validator: {
            typeUrl: string;
            encode(message: _254.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _254.Validator;
            fromPartial(object: Partial<_254.Validator>): _254.Validator;
            fromAmino(object: _254.ValidatorAmino): _254.Validator;
            toAmino(message: _254.Validator): _254.ValidatorAmino;
            fromAminoMsg(object: _254.ValidatorAminoMsg): _254.Validator;
            fromProtoMsg(message: _254.ValidatorProtoMsg): _254.Validator;
            toProto(message: _254.Validator): Uint8Array;
            toProtoMsg(message: _254.Validator): _254.ValidatorProtoMsg;
        };
        authzPermissionChangeFromJSON(object: any): _253.AuthzPermissionChange;
        authzPermissionChangeToJSON(object: _253.AuthzPermissionChange): string;
        AuthzPermissionChange: typeof _253.AuthzPermissionChange;
        AuthzPermissionChangeSDKType: typeof _253.AuthzPermissionChange;
        AuthzPermissionChangeAmino: typeof _253.AuthzPermissionChange;
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _253.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_253.MsgUpdateInnerRedemptionRateBounds>): _253.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _253.MsgUpdateInnerRedemptionRateBoundsAmino): _253.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _253.MsgUpdateInnerRedemptionRateBounds): _253.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _253.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _253.MsgUpdateInnerRedemptionRateBounds;
            toAminoMsg(message: _253.MsgUpdateInnerRedemptionRateBounds): _253.MsgUpdateInnerRedemptionRateBoundsAminoMsg;
            fromProtoMsg(message: _253.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _253.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _253.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _253.MsgUpdateInnerRedemptionRateBounds): _253.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _253.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_253.MsgUpdateInnerRedemptionRateBoundsResponse>): _253.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _253.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _253.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _253.MsgUpdateInnerRedemptionRateBoundsResponse): _253.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _253.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _253.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _253.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _253.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _253.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _253.MsgUpdateInnerRedemptionRateBoundsResponse): _253.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _253.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgLiquidStake;
            fromPartial(object: Partial<_253.MsgLiquidStake>): _253.MsgLiquidStake;
            fromAmino(object: _253.MsgLiquidStakeAmino): _253.MsgLiquidStake;
            toAmino(message: _253.MsgLiquidStake): _253.MsgLiquidStakeAmino;
            fromAminoMsg(object: _253.MsgLiquidStakeAminoMsg): _253.MsgLiquidStake;
            toAminoMsg(message: _253.MsgLiquidStake): _253.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _253.MsgLiquidStakeProtoMsg): _253.MsgLiquidStake;
            toProto(message: _253.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _253.MsgLiquidStake): _253.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _253.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_253.MsgLiquidStakeResponse>): _253.MsgLiquidStakeResponse;
            fromAmino(object: _253.MsgLiquidStakeResponseAmino): _253.MsgLiquidStakeResponse;
            toAmino(message: _253.MsgLiquidStakeResponse): _253.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _253.MsgLiquidStakeResponseAminoMsg): _253.MsgLiquidStakeResponse;
            fromProtoMsg(message: _253.MsgLiquidStakeResponseProtoMsg): _253.MsgLiquidStakeResponse;
            toProto(message: _253.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _253.MsgLiquidStakeResponse): _253.MsgLiquidStakeResponseProtoMsg;
        };
        MsgLSMLiquidStake: {
            typeUrl: string;
            encode(message: _253.MsgLSMLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgLSMLiquidStake;
            fromPartial(object: Partial<_253.MsgLSMLiquidStake>): _253.MsgLSMLiquidStake;
            fromAmino(object: _253.MsgLSMLiquidStakeAmino): _253.MsgLSMLiquidStake;
            toAmino(message: _253.MsgLSMLiquidStake): _253.MsgLSMLiquidStakeAmino;
            fromAminoMsg(object: _253.MsgLSMLiquidStakeAminoMsg): _253.MsgLSMLiquidStake;
            toAminoMsg(message: _253.MsgLSMLiquidStake): _253.MsgLSMLiquidStakeAminoMsg;
            fromProtoMsg(message: _253.MsgLSMLiquidStakeProtoMsg): _253.MsgLSMLiquidStake;
            toProto(message: _253.MsgLSMLiquidStake): Uint8Array;
            toProtoMsg(message: _253.MsgLSMLiquidStake): _253.MsgLSMLiquidStakeProtoMsg;
        };
        MsgLSMLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _253.MsgLSMLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgLSMLiquidStakeResponse;
            fromPartial(object: Partial<_253.MsgLSMLiquidStakeResponse>): _253.MsgLSMLiquidStakeResponse;
            fromAmino(object: _253.MsgLSMLiquidStakeResponseAmino): _253.MsgLSMLiquidStakeResponse;
            toAmino(message: _253.MsgLSMLiquidStakeResponse): _253.MsgLSMLiquidStakeResponseAmino;
            fromAminoMsg(object: _253.MsgLSMLiquidStakeResponseAminoMsg): _253.MsgLSMLiquidStakeResponse;
            fromProtoMsg(message: _253.MsgLSMLiquidStakeResponseProtoMsg): _253.MsgLSMLiquidStakeResponse;
            toProto(message: _253.MsgLSMLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _253.MsgLSMLiquidStakeResponse): _253.MsgLSMLiquidStakeResponseProtoMsg;
        };
        MsgClearBalance: {
            typeUrl: string;
            encode(message: _253.MsgClearBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgClearBalance;
            fromPartial(object: Partial<_253.MsgClearBalance>): _253.MsgClearBalance;
            fromAmino(object: _253.MsgClearBalanceAmino): _253.MsgClearBalance;
            toAmino(message: _253.MsgClearBalance): _253.MsgClearBalanceAmino;
            fromAminoMsg(object: _253.MsgClearBalanceAminoMsg): _253.MsgClearBalance;
            toAminoMsg(message: _253.MsgClearBalance): _253.MsgClearBalanceAminoMsg;
            fromProtoMsg(message: _253.MsgClearBalanceProtoMsg): _253.MsgClearBalance;
            toProto(message: _253.MsgClearBalance): Uint8Array;
            toProtoMsg(message: _253.MsgClearBalance): _253.MsgClearBalanceProtoMsg;
        };
        MsgClearBalanceResponse: {
            typeUrl: string;
            encode(_: _253.MsgClearBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgClearBalanceResponse;
            fromPartial(_: Partial<_253.MsgClearBalanceResponse>): _253.MsgClearBalanceResponse;
            fromAmino(_: _253.MsgClearBalanceResponseAmino): _253.MsgClearBalanceResponse;
            toAmino(_: _253.MsgClearBalanceResponse): _253.MsgClearBalanceResponseAmino;
            fromAminoMsg(object: _253.MsgClearBalanceResponseAminoMsg): _253.MsgClearBalanceResponse;
            fromProtoMsg(message: _253.MsgClearBalanceResponseProtoMsg): _253.MsgClearBalanceResponse;
            toProto(message: _253.MsgClearBalanceResponse): Uint8Array;
            toProtoMsg(message: _253.MsgClearBalanceResponse): _253.MsgClearBalanceResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _253.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgRedeemStake;
            fromPartial(object: Partial<_253.MsgRedeemStake>): _253.MsgRedeemStake;
            fromAmino(object: _253.MsgRedeemStakeAmino): _253.MsgRedeemStake;
            toAmino(message: _253.MsgRedeemStake): _253.MsgRedeemStakeAmino;
            fromAminoMsg(object: _253.MsgRedeemStakeAminoMsg): _253.MsgRedeemStake;
            toAminoMsg(message: _253.MsgRedeemStake): _253.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _253.MsgRedeemStakeProtoMsg): _253.MsgRedeemStake;
            toProto(message: _253.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _253.MsgRedeemStake): _253.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(_: _253.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgRedeemStakeResponse;
            fromPartial(_: Partial<_253.MsgRedeemStakeResponse>): _253.MsgRedeemStakeResponse;
            fromAmino(_: _253.MsgRedeemStakeResponseAmino): _253.MsgRedeemStakeResponse;
            toAmino(_: _253.MsgRedeemStakeResponse): _253.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _253.MsgRedeemStakeResponseAminoMsg): _253.MsgRedeemStakeResponse;
            fromProtoMsg(message: _253.MsgRedeemStakeResponseProtoMsg): _253.MsgRedeemStakeResponse;
            toProto(message: _253.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _253.MsgRedeemStakeResponse): _253.MsgRedeemStakeResponseProtoMsg;
        };
        MsgRegisterHostZone: {
            typeUrl: string;
            encode(message: _253.MsgRegisterHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgRegisterHostZone;
            fromPartial(object: Partial<_253.MsgRegisterHostZone>): _253.MsgRegisterHostZone;
            fromAmino(object: _253.MsgRegisterHostZoneAmino): _253.MsgRegisterHostZone;
            toAmino(message: _253.MsgRegisterHostZone): _253.MsgRegisterHostZoneAmino;
            fromAminoMsg(object: _253.MsgRegisterHostZoneAminoMsg): _253.MsgRegisterHostZone;
            toAminoMsg(message: _253.MsgRegisterHostZone): _253.MsgRegisterHostZoneAminoMsg;
            fromProtoMsg(message: _253.MsgRegisterHostZoneProtoMsg): _253.MsgRegisterHostZone;
            toProto(message: _253.MsgRegisterHostZone): Uint8Array;
            toProtoMsg(message: _253.MsgRegisterHostZone): _253.MsgRegisterHostZoneProtoMsg;
        };
        MsgRegisterHostZoneResponse: {
            typeUrl: string;
            encode(_: _253.MsgRegisterHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgRegisterHostZoneResponse;
            fromPartial(_: Partial<_253.MsgRegisterHostZoneResponse>): _253.MsgRegisterHostZoneResponse;
            fromAmino(_: _253.MsgRegisterHostZoneResponseAmino): _253.MsgRegisterHostZoneResponse;
            toAmino(_: _253.MsgRegisterHostZoneResponse): _253.MsgRegisterHostZoneResponseAmino;
            fromAminoMsg(object: _253.MsgRegisterHostZoneResponseAminoMsg): _253.MsgRegisterHostZoneResponse;
            fromProtoMsg(message: _253.MsgRegisterHostZoneResponseProtoMsg): _253.MsgRegisterHostZoneResponse;
            toProto(message: _253.MsgRegisterHostZoneResponse): Uint8Array;
            toProtoMsg(message: _253.MsgRegisterHostZoneResponse): _253.MsgRegisterHostZoneResponseProtoMsg;
        };
        MsgClaimUndelegatedTokens: {
            typeUrl: string;
            encode(message: _253.MsgClaimUndelegatedTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgClaimUndelegatedTokens;
            fromPartial(object: Partial<_253.MsgClaimUndelegatedTokens>): _253.MsgClaimUndelegatedTokens;
            fromAmino(object: _253.MsgClaimUndelegatedTokensAmino): _253.MsgClaimUndelegatedTokens;
            toAmino(message: _253.MsgClaimUndelegatedTokens): _253.MsgClaimUndelegatedTokensAmino;
            fromAminoMsg(object: _253.MsgClaimUndelegatedTokensAminoMsg): _253.MsgClaimUndelegatedTokens;
            toAminoMsg(message: _253.MsgClaimUndelegatedTokens): _253.MsgClaimUndelegatedTokensAminoMsg;
            fromProtoMsg(message: _253.MsgClaimUndelegatedTokensProtoMsg): _253.MsgClaimUndelegatedTokens;
            toProto(message: _253.MsgClaimUndelegatedTokens): Uint8Array;
            toProtoMsg(message: _253.MsgClaimUndelegatedTokens): _253.MsgClaimUndelegatedTokensProtoMsg;
        };
        MsgClaimUndelegatedTokensResponse: {
            typeUrl: string;
            encode(_: _253.MsgClaimUndelegatedTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgClaimUndelegatedTokensResponse;
            fromPartial(_: Partial<_253.MsgClaimUndelegatedTokensResponse>): _253.MsgClaimUndelegatedTokensResponse;
            fromAmino(_: _253.MsgClaimUndelegatedTokensResponseAmino): _253.MsgClaimUndelegatedTokensResponse;
            toAmino(_: _253.MsgClaimUndelegatedTokensResponse): _253.MsgClaimUndelegatedTokensResponseAmino;
            fromAminoMsg(object: _253.MsgClaimUndelegatedTokensResponseAminoMsg): _253.MsgClaimUndelegatedTokensResponse;
            fromProtoMsg(message: _253.MsgClaimUndelegatedTokensResponseProtoMsg): _253.MsgClaimUndelegatedTokensResponse;
            toProto(message: _253.MsgClaimUndelegatedTokensResponse): Uint8Array;
            toProtoMsg(message: _253.MsgClaimUndelegatedTokensResponse): _253.MsgClaimUndelegatedTokensResponseProtoMsg;
        };
        MsgRebalanceValidators: {
            typeUrl: string;
            encode(message: _253.MsgRebalanceValidators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgRebalanceValidators;
            fromPartial(object: Partial<_253.MsgRebalanceValidators>): _253.MsgRebalanceValidators;
            fromAmino(object: _253.MsgRebalanceValidatorsAmino): _253.MsgRebalanceValidators;
            toAmino(message: _253.MsgRebalanceValidators): _253.MsgRebalanceValidatorsAmino;
            fromAminoMsg(object: _253.MsgRebalanceValidatorsAminoMsg): _253.MsgRebalanceValidators;
            toAminoMsg(message: _253.MsgRebalanceValidators): _253.MsgRebalanceValidatorsAminoMsg;
            fromProtoMsg(message: _253.MsgRebalanceValidatorsProtoMsg): _253.MsgRebalanceValidators;
            toProto(message: _253.MsgRebalanceValidators): Uint8Array;
            toProtoMsg(message: _253.MsgRebalanceValidators): _253.MsgRebalanceValidatorsProtoMsg;
        };
        MsgRebalanceValidatorsResponse: {
            typeUrl: string;
            encode(_: _253.MsgRebalanceValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgRebalanceValidatorsResponse;
            fromPartial(_: Partial<_253.MsgRebalanceValidatorsResponse>): _253.MsgRebalanceValidatorsResponse;
            fromAmino(_: _253.MsgRebalanceValidatorsResponseAmino): _253.MsgRebalanceValidatorsResponse;
            toAmino(_: _253.MsgRebalanceValidatorsResponse): _253.MsgRebalanceValidatorsResponseAmino;
            fromAminoMsg(object: _253.MsgRebalanceValidatorsResponseAminoMsg): _253.MsgRebalanceValidatorsResponse;
            fromProtoMsg(message: _253.MsgRebalanceValidatorsResponseProtoMsg): _253.MsgRebalanceValidatorsResponse;
            toProto(message: _253.MsgRebalanceValidatorsResponse): Uint8Array;
            toProtoMsg(message: _253.MsgRebalanceValidatorsResponse): _253.MsgRebalanceValidatorsResponseProtoMsg;
        };
        MsgAddValidators: {
            typeUrl: string;
            encode(message: _253.MsgAddValidators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgAddValidators;
            fromPartial(object: Partial<_253.MsgAddValidators>): _253.MsgAddValidators;
            fromAmino(object: _253.MsgAddValidatorsAmino): _253.MsgAddValidators;
            toAmino(message: _253.MsgAddValidators): _253.MsgAddValidatorsAmino;
            fromAminoMsg(object: _253.MsgAddValidatorsAminoMsg): _253.MsgAddValidators;
            toAminoMsg(message: _253.MsgAddValidators): _253.MsgAddValidatorsAminoMsg;
            fromProtoMsg(message: _253.MsgAddValidatorsProtoMsg): _253.MsgAddValidators;
            toProto(message: _253.MsgAddValidators): Uint8Array;
            toProtoMsg(message: _253.MsgAddValidators): _253.MsgAddValidatorsProtoMsg;
        };
        MsgAddValidatorsResponse: {
            typeUrl: string;
            encode(_: _253.MsgAddValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgAddValidatorsResponse;
            fromPartial(_: Partial<_253.MsgAddValidatorsResponse>): _253.MsgAddValidatorsResponse;
            fromAmino(_: _253.MsgAddValidatorsResponseAmino): _253.MsgAddValidatorsResponse;
            toAmino(_: _253.MsgAddValidatorsResponse): _253.MsgAddValidatorsResponseAmino;
            fromAminoMsg(object: _253.MsgAddValidatorsResponseAminoMsg): _253.MsgAddValidatorsResponse;
            fromProtoMsg(message: _253.MsgAddValidatorsResponseProtoMsg): _253.MsgAddValidatorsResponse;
            toProto(message: _253.MsgAddValidatorsResponse): Uint8Array;
            toProtoMsg(message: _253.MsgAddValidatorsResponse): _253.MsgAddValidatorsResponseProtoMsg;
        };
        ValidatorWeight: {
            typeUrl: string;
            encode(message: _253.ValidatorWeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.ValidatorWeight;
            fromPartial(object: Partial<_253.ValidatorWeight>): _253.ValidatorWeight;
            fromAmino(object: _253.ValidatorWeightAmino): _253.ValidatorWeight;
            toAmino(message: _253.ValidatorWeight): _253.ValidatorWeightAmino;
            fromAminoMsg(object: _253.ValidatorWeightAminoMsg): _253.ValidatorWeight;
            fromProtoMsg(message: _253.ValidatorWeightProtoMsg): _253.ValidatorWeight;
            toProto(message: _253.ValidatorWeight): Uint8Array;
            toProtoMsg(message: _253.ValidatorWeight): _253.ValidatorWeightProtoMsg;
        };
        MsgChangeValidatorWeights: {
            typeUrl: string;
            encode(message: _253.MsgChangeValidatorWeights, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgChangeValidatorWeights;
            fromPartial(object: Partial<_253.MsgChangeValidatorWeights>): _253.MsgChangeValidatorWeights;
            fromAmino(object: _253.MsgChangeValidatorWeightsAmino): _253.MsgChangeValidatorWeights;
            toAmino(message: _253.MsgChangeValidatorWeights): _253.MsgChangeValidatorWeightsAmino;
            fromAminoMsg(object: _253.MsgChangeValidatorWeightsAminoMsg): _253.MsgChangeValidatorWeights;
            toAminoMsg(message: _253.MsgChangeValidatorWeights): _253.MsgChangeValidatorWeightsAminoMsg;
            fromProtoMsg(message: _253.MsgChangeValidatorWeightsProtoMsg): _253.MsgChangeValidatorWeights;
            toProto(message: _253.MsgChangeValidatorWeights): Uint8Array;
            toProtoMsg(message: _253.MsgChangeValidatorWeights): _253.MsgChangeValidatorWeightsProtoMsg;
        };
        MsgChangeValidatorWeightsResponse: {
            typeUrl: string;
            encode(_: _253.MsgChangeValidatorWeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgChangeValidatorWeightsResponse;
            fromPartial(_: Partial<_253.MsgChangeValidatorWeightsResponse>): _253.MsgChangeValidatorWeightsResponse;
            fromAmino(_: _253.MsgChangeValidatorWeightsResponseAmino): _253.MsgChangeValidatorWeightsResponse;
            toAmino(_: _253.MsgChangeValidatorWeightsResponse): _253.MsgChangeValidatorWeightsResponseAmino;
            fromAminoMsg(object: _253.MsgChangeValidatorWeightsResponseAminoMsg): _253.MsgChangeValidatorWeightsResponse;
            fromProtoMsg(message: _253.MsgChangeValidatorWeightsResponseProtoMsg): _253.MsgChangeValidatorWeightsResponse;
            toProto(message: _253.MsgChangeValidatorWeightsResponse): Uint8Array;
            toProtoMsg(message: _253.MsgChangeValidatorWeightsResponse): _253.MsgChangeValidatorWeightsResponseProtoMsg;
        };
        MsgDeleteValidator: {
            typeUrl: string;
            encode(message: _253.MsgDeleteValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgDeleteValidator;
            fromPartial(object: Partial<_253.MsgDeleteValidator>): _253.MsgDeleteValidator;
            fromAmino(object: _253.MsgDeleteValidatorAmino): _253.MsgDeleteValidator;
            toAmino(message: _253.MsgDeleteValidator): _253.MsgDeleteValidatorAmino;
            fromAminoMsg(object: _253.MsgDeleteValidatorAminoMsg): _253.MsgDeleteValidator;
            toAminoMsg(message: _253.MsgDeleteValidator): _253.MsgDeleteValidatorAminoMsg;
            fromProtoMsg(message: _253.MsgDeleteValidatorProtoMsg): _253.MsgDeleteValidator;
            toProto(message: _253.MsgDeleteValidator): Uint8Array;
            toProtoMsg(message: _253.MsgDeleteValidator): _253.MsgDeleteValidatorProtoMsg;
        };
        MsgDeleteValidatorResponse: {
            typeUrl: string;
            encode(_: _253.MsgDeleteValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgDeleteValidatorResponse;
            fromPartial(_: Partial<_253.MsgDeleteValidatorResponse>): _253.MsgDeleteValidatorResponse;
            fromAmino(_: _253.MsgDeleteValidatorResponseAmino): _253.MsgDeleteValidatorResponse;
            toAmino(_: _253.MsgDeleteValidatorResponse): _253.MsgDeleteValidatorResponseAmino;
            fromAminoMsg(object: _253.MsgDeleteValidatorResponseAminoMsg): _253.MsgDeleteValidatorResponse;
            fromProtoMsg(message: _253.MsgDeleteValidatorResponseProtoMsg): _253.MsgDeleteValidatorResponse;
            toProto(message: _253.MsgDeleteValidatorResponse): Uint8Array;
            toProtoMsg(message: _253.MsgDeleteValidatorResponse): _253.MsgDeleteValidatorResponseProtoMsg;
        };
        MsgRestoreInterchainAccount: {
            typeUrl: string;
            encode(message: _253.MsgRestoreInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgRestoreInterchainAccount;
            fromPartial(object: Partial<_253.MsgRestoreInterchainAccount>): _253.MsgRestoreInterchainAccount;
            fromAmino(object: _253.MsgRestoreInterchainAccountAmino): _253.MsgRestoreInterchainAccount;
            toAmino(message: _253.MsgRestoreInterchainAccount): _253.MsgRestoreInterchainAccountAmino;
            fromAminoMsg(object: _253.MsgRestoreInterchainAccountAminoMsg): _253.MsgRestoreInterchainAccount;
            toAminoMsg(message: _253.MsgRestoreInterchainAccount): _253.MsgRestoreInterchainAccountAminoMsg;
            fromProtoMsg(message: _253.MsgRestoreInterchainAccountProtoMsg): _253.MsgRestoreInterchainAccount;
            toProto(message: _253.MsgRestoreInterchainAccount): Uint8Array;
            toProtoMsg(message: _253.MsgRestoreInterchainAccount): _253.MsgRestoreInterchainAccountProtoMsg;
        };
        MsgRestoreInterchainAccountResponse: {
            typeUrl: string;
            encode(_: _253.MsgRestoreInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgRestoreInterchainAccountResponse;
            fromPartial(_: Partial<_253.MsgRestoreInterchainAccountResponse>): _253.MsgRestoreInterchainAccountResponse;
            fromAmino(_: _253.MsgRestoreInterchainAccountResponseAmino): _253.MsgRestoreInterchainAccountResponse;
            toAmino(_: _253.MsgRestoreInterchainAccountResponse): _253.MsgRestoreInterchainAccountResponseAmino;
            fromAminoMsg(object: _253.MsgRestoreInterchainAccountResponseAminoMsg): _253.MsgRestoreInterchainAccountResponse;
            fromProtoMsg(message: _253.MsgRestoreInterchainAccountResponseProtoMsg): _253.MsgRestoreInterchainAccountResponse;
            toProto(message: _253.MsgRestoreInterchainAccountResponse): Uint8Array;
            toProtoMsg(message: _253.MsgRestoreInterchainAccountResponse): _253.MsgRestoreInterchainAccountResponseProtoMsg;
        };
        MsgCloseDelegationChannel: {
            typeUrl: string;
            encode(message: _253.MsgCloseDelegationChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgCloseDelegationChannel;
            fromPartial(object: Partial<_253.MsgCloseDelegationChannel>): _253.MsgCloseDelegationChannel;
            fromAmino(object: _253.MsgCloseDelegationChannelAmino): _253.MsgCloseDelegationChannel;
            toAmino(message: _253.MsgCloseDelegationChannel): _253.MsgCloseDelegationChannelAmino;
            fromAminoMsg(object: _253.MsgCloseDelegationChannelAminoMsg): _253.MsgCloseDelegationChannel;
            toAminoMsg(message: _253.MsgCloseDelegationChannel): _253.MsgCloseDelegationChannelAminoMsg;
            fromProtoMsg(message: _253.MsgCloseDelegationChannelProtoMsg): _253.MsgCloseDelegationChannel;
            toProto(message: _253.MsgCloseDelegationChannel): Uint8Array;
            toProtoMsg(message: _253.MsgCloseDelegationChannel): _253.MsgCloseDelegationChannelProtoMsg;
        };
        MsgCloseDelegationChannelResponse: {
            typeUrl: string;
            encode(_: _253.MsgCloseDelegationChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgCloseDelegationChannelResponse;
            fromPartial(_: Partial<_253.MsgCloseDelegationChannelResponse>): _253.MsgCloseDelegationChannelResponse;
            fromAmino(_: _253.MsgCloseDelegationChannelResponseAmino): _253.MsgCloseDelegationChannelResponse;
            toAmino(_: _253.MsgCloseDelegationChannelResponse): _253.MsgCloseDelegationChannelResponseAmino;
            fromAminoMsg(object: _253.MsgCloseDelegationChannelResponseAminoMsg): _253.MsgCloseDelegationChannelResponse;
            fromProtoMsg(message: _253.MsgCloseDelegationChannelResponseProtoMsg): _253.MsgCloseDelegationChannelResponse;
            toProto(message: _253.MsgCloseDelegationChannelResponse): Uint8Array;
            toProtoMsg(message: _253.MsgCloseDelegationChannelResponse): _253.MsgCloseDelegationChannelResponseProtoMsg;
        };
        MsgUpdateValidatorSharesExchRate: {
            typeUrl: string;
            encode(message: _253.MsgUpdateValidatorSharesExchRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgUpdateValidatorSharesExchRate;
            fromPartial(object: Partial<_253.MsgUpdateValidatorSharesExchRate>): _253.MsgUpdateValidatorSharesExchRate;
            fromAmino(object: _253.MsgUpdateValidatorSharesExchRateAmino): _253.MsgUpdateValidatorSharesExchRate;
            toAmino(message: _253.MsgUpdateValidatorSharesExchRate): _253.MsgUpdateValidatorSharesExchRateAmino;
            fromAminoMsg(object: _253.MsgUpdateValidatorSharesExchRateAminoMsg): _253.MsgUpdateValidatorSharesExchRate;
            toAminoMsg(message: _253.MsgUpdateValidatorSharesExchRate): _253.MsgUpdateValidatorSharesExchRateAminoMsg;
            fromProtoMsg(message: _253.MsgUpdateValidatorSharesExchRateProtoMsg): _253.MsgUpdateValidatorSharesExchRate;
            toProto(message: _253.MsgUpdateValidatorSharesExchRate): Uint8Array;
            toProtoMsg(message: _253.MsgUpdateValidatorSharesExchRate): _253.MsgUpdateValidatorSharesExchRateProtoMsg;
        };
        MsgUpdateValidatorSharesExchRateResponse: {
            typeUrl: string;
            encode(_: _253.MsgUpdateValidatorSharesExchRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgUpdateValidatorSharesExchRateResponse;
            fromPartial(_: Partial<_253.MsgUpdateValidatorSharesExchRateResponse>): _253.MsgUpdateValidatorSharesExchRateResponse;
            fromAmino(_: _253.MsgUpdateValidatorSharesExchRateResponseAmino): _253.MsgUpdateValidatorSharesExchRateResponse;
            toAmino(_: _253.MsgUpdateValidatorSharesExchRateResponse): _253.MsgUpdateValidatorSharesExchRateResponseAmino;
            fromAminoMsg(object: _253.MsgUpdateValidatorSharesExchRateResponseAminoMsg): _253.MsgUpdateValidatorSharesExchRateResponse;
            fromProtoMsg(message: _253.MsgUpdateValidatorSharesExchRateResponseProtoMsg): _253.MsgUpdateValidatorSharesExchRateResponse;
            toProto(message: _253.MsgUpdateValidatorSharesExchRateResponse): Uint8Array;
            toProtoMsg(message: _253.MsgUpdateValidatorSharesExchRateResponse): _253.MsgUpdateValidatorSharesExchRateResponseProtoMsg;
        };
        MsgCalibrateDelegation: {
            typeUrl: string;
            encode(message: _253.MsgCalibrateDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgCalibrateDelegation;
            fromPartial(object: Partial<_253.MsgCalibrateDelegation>): _253.MsgCalibrateDelegation;
            fromAmino(object: _253.MsgCalibrateDelegationAmino): _253.MsgCalibrateDelegation;
            toAmino(message: _253.MsgCalibrateDelegation): _253.MsgCalibrateDelegationAmino;
            fromAminoMsg(object: _253.MsgCalibrateDelegationAminoMsg): _253.MsgCalibrateDelegation;
            toAminoMsg(message: _253.MsgCalibrateDelegation): _253.MsgCalibrateDelegationAminoMsg;
            fromProtoMsg(message: _253.MsgCalibrateDelegationProtoMsg): _253.MsgCalibrateDelegation;
            toProto(message: _253.MsgCalibrateDelegation): Uint8Array;
            toProtoMsg(message: _253.MsgCalibrateDelegation): _253.MsgCalibrateDelegationProtoMsg;
        };
        MsgCalibrateDelegationResponse: {
            typeUrl: string;
            encode(_: _253.MsgCalibrateDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgCalibrateDelegationResponse;
            fromPartial(_: Partial<_253.MsgCalibrateDelegationResponse>): _253.MsgCalibrateDelegationResponse;
            fromAmino(_: _253.MsgCalibrateDelegationResponseAmino): _253.MsgCalibrateDelegationResponse;
            toAmino(_: _253.MsgCalibrateDelegationResponse): _253.MsgCalibrateDelegationResponseAmino;
            fromAminoMsg(object: _253.MsgCalibrateDelegationResponseAminoMsg): _253.MsgCalibrateDelegationResponse;
            fromProtoMsg(message: _253.MsgCalibrateDelegationResponseProtoMsg): _253.MsgCalibrateDelegationResponse;
            toProto(message: _253.MsgCalibrateDelegationResponse): Uint8Array;
            toProtoMsg(message: _253.MsgCalibrateDelegationResponse): _253.MsgCalibrateDelegationResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _253.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgResumeHostZone;
            fromPartial(object: Partial<_253.MsgResumeHostZone>): _253.MsgResumeHostZone;
            fromAmino(object: _253.MsgResumeHostZoneAmino): _253.MsgResumeHostZone;
            toAmino(message: _253.MsgResumeHostZone): _253.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _253.MsgResumeHostZoneAminoMsg): _253.MsgResumeHostZone;
            toAminoMsg(message: _253.MsgResumeHostZone): _253.MsgResumeHostZoneAminoMsg;
            fromProtoMsg(message: _253.MsgResumeHostZoneProtoMsg): _253.MsgResumeHostZone;
            toProto(message: _253.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _253.MsgResumeHostZone): _253.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _253.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_253.MsgResumeHostZoneResponse>): _253.MsgResumeHostZoneResponse;
            fromAmino(_: _253.MsgResumeHostZoneResponseAmino): _253.MsgResumeHostZoneResponse;
            toAmino(_: _253.MsgResumeHostZoneResponse): _253.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _253.MsgResumeHostZoneResponseAminoMsg): _253.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _253.MsgResumeHostZoneResponseProtoMsg): _253.MsgResumeHostZoneResponse;
            toProto(message: _253.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _253.MsgResumeHostZoneResponse): _253.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgCreateTradeRoute: {
            typeUrl: string;
            encode(message: _253.MsgCreateTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgCreateTradeRoute;
            fromPartial(object: Partial<_253.MsgCreateTradeRoute>): _253.MsgCreateTradeRoute;
            fromAmino(object: _253.MsgCreateTradeRouteAmino): _253.MsgCreateTradeRoute;
            toAmino(message: _253.MsgCreateTradeRoute): _253.MsgCreateTradeRouteAmino;
            fromAminoMsg(object: _253.MsgCreateTradeRouteAminoMsg): _253.MsgCreateTradeRoute;
            toAminoMsg(message: _253.MsgCreateTradeRoute): _253.MsgCreateTradeRouteAminoMsg;
            fromProtoMsg(message: _253.MsgCreateTradeRouteProtoMsg): _253.MsgCreateTradeRoute;
            toProto(message: _253.MsgCreateTradeRoute): Uint8Array;
            toProtoMsg(message: _253.MsgCreateTradeRoute): _253.MsgCreateTradeRouteProtoMsg;
        };
        MsgCreateTradeRouteResponse: {
            typeUrl: string;
            encode(_: _253.MsgCreateTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgCreateTradeRouteResponse;
            fromPartial(_: Partial<_253.MsgCreateTradeRouteResponse>): _253.MsgCreateTradeRouteResponse;
            fromAmino(_: _253.MsgCreateTradeRouteResponseAmino): _253.MsgCreateTradeRouteResponse;
            toAmino(_: _253.MsgCreateTradeRouteResponse): _253.MsgCreateTradeRouteResponseAmino;
            fromAminoMsg(object: _253.MsgCreateTradeRouteResponseAminoMsg): _253.MsgCreateTradeRouteResponse;
            fromProtoMsg(message: _253.MsgCreateTradeRouteResponseProtoMsg): _253.MsgCreateTradeRouteResponse;
            toProto(message: _253.MsgCreateTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _253.MsgCreateTradeRouteResponse): _253.MsgCreateTradeRouteResponseProtoMsg;
        };
        MsgDeleteTradeRoute: {
            typeUrl: string;
            encode(message: _253.MsgDeleteTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgDeleteTradeRoute;
            fromPartial(object: Partial<_253.MsgDeleteTradeRoute>): _253.MsgDeleteTradeRoute;
            fromAmino(object: _253.MsgDeleteTradeRouteAmino): _253.MsgDeleteTradeRoute;
            toAmino(message: _253.MsgDeleteTradeRoute): _253.MsgDeleteTradeRouteAmino;
            fromAminoMsg(object: _253.MsgDeleteTradeRouteAminoMsg): _253.MsgDeleteTradeRoute;
            toAminoMsg(message: _253.MsgDeleteTradeRoute): _253.MsgDeleteTradeRouteAminoMsg;
            fromProtoMsg(message: _253.MsgDeleteTradeRouteProtoMsg): _253.MsgDeleteTradeRoute;
            toProto(message: _253.MsgDeleteTradeRoute): Uint8Array;
            toProtoMsg(message: _253.MsgDeleteTradeRoute): _253.MsgDeleteTradeRouteProtoMsg;
        };
        MsgDeleteTradeRouteResponse: {
            typeUrl: string;
            encode(_: _253.MsgDeleteTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgDeleteTradeRouteResponse;
            fromPartial(_: Partial<_253.MsgDeleteTradeRouteResponse>): _253.MsgDeleteTradeRouteResponse;
            fromAmino(_: _253.MsgDeleteTradeRouteResponseAmino): _253.MsgDeleteTradeRouteResponse;
            toAmino(_: _253.MsgDeleteTradeRouteResponse): _253.MsgDeleteTradeRouteResponseAmino;
            fromAminoMsg(object: _253.MsgDeleteTradeRouteResponseAminoMsg): _253.MsgDeleteTradeRouteResponse;
            fromProtoMsg(message: _253.MsgDeleteTradeRouteResponseProtoMsg): _253.MsgDeleteTradeRouteResponse;
            toProto(message: _253.MsgDeleteTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _253.MsgDeleteTradeRouteResponse): _253.MsgDeleteTradeRouteResponseProtoMsg;
        };
        MsgUpdateTradeRoute: {
            typeUrl: string;
            encode(message: _253.MsgUpdateTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgUpdateTradeRoute;
            fromPartial(object: Partial<_253.MsgUpdateTradeRoute>): _253.MsgUpdateTradeRoute;
            fromAmino(object: _253.MsgUpdateTradeRouteAmino): _253.MsgUpdateTradeRoute;
            toAmino(message: _253.MsgUpdateTradeRoute): _253.MsgUpdateTradeRouteAmino;
            fromAminoMsg(object: _253.MsgUpdateTradeRouteAminoMsg): _253.MsgUpdateTradeRoute;
            toAminoMsg(message: _253.MsgUpdateTradeRoute): _253.MsgUpdateTradeRouteAminoMsg;
            fromProtoMsg(message: _253.MsgUpdateTradeRouteProtoMsg): _253.MsgUpdateTradeRoute;
            toProto(message: _253.MsgUpdateTradeRoute): Uint8Array;
            toProtoMsg(message: _253.MsgUpdateTradeRoute): _253.MsgUpdateTradeRouteProtoMsg;
        };
        MsgUpdateTradeRouteResponse: {
            typeUrl: string;
            encode(_: _253.MsgUpdateTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgUpdateTradeRouteResponse;
            fromPartial(_: Partial<_253.MsgUpdateTradeRouteResponse>): _253.MsgUpdateTradeRouteResponse;
            fromAmino(_: _253.MsgUpdateTradeRouteResponseAmino): _253.MsgUpdateTradeRouteResponse;
            toAmino(_: _253.MsgUpdateTradeRouteResponse): _253.MsgUpdateTradeRouteResponseAmino;
            fromAminoMsg(object: _253.MsgUpdateTradeRouteResponseAminoMsg): _253.MsgUpdateTradeRouteResponse;
            fromProtoMsg(message: _253.MsgUpdateTradeRouteResponseProtoMsg): _253.MsgUpdateTradeRouteResponse;
            toProto(message: _253.MsgUpdateTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _253.MsgUpdateTradeRouteResponse): _253.MsgUpdateTradeRouteResponseProtoMsg;
        };
        MsgSetCommunityPoolRebate: {
            typeUrl: string;
            encode(message: _253.MsgSetCommunityPoolRebate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgSetCommunityPoolRebate;
            fromPartial(object: Partial<_253.MsgSetCommunityPoolRebate>): _253.MsgSetCommunityPoolRebate;
            fromAmino(object: _253.MsgSetCommunityPoolRebateAmino): _253.MsgSetCommunityPoolRebate;
            toAmino(message: _253.MsgSetCommunityPoolRebate): _253.MsgSetCommunityPoolRebateAmino;
            fromAminoMsg(object: _253.MsgSetCommunityPoolRebateAminoMsg): _253.MsgSetCommunityPoolRebate;
            toAminoMsg(message: _253.MsgSetCommunityPoolRebate): _253.MsgSetCommunityPoolRebateAminoMsg;
            fromProtoMsg(message: _253.MsgSetCommunityPoolRebateProtoMsg): _253.MsgSetCommunityPoolRebate;
            toProto(message: _253.MsgSetCommunityPoolRebate): Uint8Array;
            toProtoMsg(message: _253.MsgSetCommunityPoolRebate): _253.MsgSetCommunityPoolRebateProtoMsg;
        };
        MsgSetCommunityPoolRebateResponse: {
            typeUrl: string;
            encode(_: _253.MsgSetCommunityPoolRebateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgSetCommunityPoolRebateResponse;
            fromPartial(_: Partial<_253.MsgSetCommunityPoolRebateResponse>): _253.MsgSetCommunityPoolRebateResponse;
            fromAmino(_: _253.MsgSetCommunityPoolRebateResponseAmino): _253.MsgSetCommunityPoolRebateResponse;
            toAmino(_: _253.MsgSetCommunityPoolRebateResponse): _253.MsgSetCommunityPoolRebateResponseAmino;
            fromAminoMsg(object: _253.MsgSetCommunityPoolRebateResponseAminoMsg): _253.MsgSetCommunityPoolRebateResponse;
            fromProtoMsg(message: _253.MsgSetCommunityPoolRebateResponseProtoMsg): _253.MsgSetCommunityPoolRebateResponse;
            toProto(message: _253.MsgSetCommunityPoolRebateResponse): Uint8Array;
            toProtoMsg(message: _253.MsgSetCommunityPoolRebateResponse): _253.MsgSetCommunityPoolRebateResponseProtoMsg;
        };
        MsgToggleTradeController: {
            typeUrl: string;
            encode(message: _253.MsgToggleTradeController, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgToggleTradeController;
            fromPartial(object: Partial<_253.MsgToggleTradeController>): _253.MsgToggleTradeController;
            fromAmino(object: _253.MsgToggleTradeControllerAmino): _253.MsgToggleTradeController;
            toAmino(message: _253.MsgToggleTradeController): _253.MsgToggleTradeControllerAmino;
            fromAminoMsg(object: _253.MsgToggleTradeControllerAminoMsg): _253.MsgToggleTradeController;
            toAminoMsg(message: _253.MsgToggleTradeController): _253.MsgToggleTradeControllerAminoMsg;
            fromProtoMsg(message: _253.MsgToggleTradeControllerProtoMsg): _253.MsgToggleTradeController;
            toProto(message: _253.MsgToggleTradeController): Uint8Array;
            toProtoMsg(message: _253.MsgToggleTradeController): _253.MsgToggleTradeControllerProtoMsg;
        };
        MsgToggleTradeControllerResponse: {
            typeUrl: string;
            encode(_: _253.MsgToggleTradeControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgToggleTradeControllerResponse;
            fromPartial(_: Partial<_253.MsgToggleTradeControllerResponse>): _253.MsgToggleTradeControllerResponse;
            fromAmino(_: _253.MsgToggleTradeControllerResponseAmino): _253.MsgToggleTradeControllerResponse;
            toAmino(_: _253.MsgToggleTradeControllerResponse): _253.MsgToggleTradeControllerResponseAmino;
            fromAminoMsg(object: _253.MsgToggleTradeControllerResponseAminoMsg): _253.MsgToggleTradeControllerResponse;
            fromProtoMsg(message: _253.MsgToggleTradeControllerResponseProtoMsg): _253.MsgToggleTradeControllerResponse;
            toProto(message: _253.MsgToggleTradeControllerResponse): Uint8Array;
            toProtoMsg(message: _253.MsgToggleTradeControllerResponse): _253.MsgToggleTradeControllerResponseProtoMsg;
        };
        MsgUpdateHostZoneParams: {
            typeUrl: string;
            encode(message: _253.MsgUpdateHostZoneParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgUpdateHostZoneParams;
            fromPartial(object: Partial<_253.MsgUpdateHostZoneParams>): _253.MsgUpdateHostZoneParams;
            fromAmino(object: _253.MsgUpdateHostZoneParamsAmino): _253.MsgUpdateHostZoneParams;
            toAmino(message: _253.MsgUpdateHostZoneParams): _253.MsgUpdateHostZoneParamsAmino;
            fromAminoMsg(object: _253.MsgUpdateHostZoneParamsAminoMsg): _253.MsgUpdateHostZoneParams;
            toAminoMsg(message: _253.MsgUpdateHostZoneParams): _253.MsgUpdateHostZoneParamsAminoMsg;
            fromProtoMsg(message: _253.MsgUpdateHostZoneParamsProtoMsg): _253.MsgUpdateHostZoneParams;
            toProto(message: _253.MsgUpdateHostZoneParams): Uint8Array;
            toProtoMsg(message: _253.MsgUpdateHostZoneParams): _253.MsgUpdateHostZoneParamsProtoMsg;
        };
        MsgUpdateHostZoneParamsResponse: {
            typeUrl: string;
            encode(_: _253.MsgUpdateHostZoneParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.MsgUpdateHostZoneParamsResponse;
            fromPartial(_: Partial<_253.MsgUpdateHostZoneParamsResponse>): _253.MsgUpdateHostZoneParamsResponse;
            fromAmino(_: _253.MsgUpdateHostZoneParamsResponseAmino): _253.MsgUpdateHostZoneParamsResponse;
            toAmino(_: _253.MsgUpdateHostZoneParamsResponse): _253.MsgUpdateHostZoneParamsResponseAmino;
            fromAminoMsg(object: _253.MsgUpdateHostZoneParamsResponseAminoMsg): _253.MsgUpdateHostZoneParamsResponse;
            fromProtoMsg(message: _253.MsgUpdateHostZoneParamsResponseProtoMsg): _253.MsgUpdateHostZoneParamsResponse;
            toProto(message: _253.MsgUpdateHostZoneParamsResponse): Uint8Array;
            toProtoMsg(message: _253.MsgUpdateHostZoneParamsResponse): _253.MsgUpdateHostZoneParamsResponseProtoMsg;
        };
        TradeConfig: {
            typeUrl: string;
            encode(message: _252.TradeConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _252.TradeConfig;
            fromPartial(object: Partial<_252.TradeConfig>): _252.TradeConfig;
            fromAmino(object: _252.TradeConfigAmino): _252.TradeConfig;
            toAmino(message: _252.TradeConfig): _252.TradeConfigAmino;
            fromAminoMsg(object: _252.TradeConfigAminoMsg): _252.TradeConfig;
            fromProtoMsg(message: _252.TradeConfigProtoMsg): _252.TradeConfig;
            toProto(message: _252.TradeConfig): Uint8Array;
            toProtoMsg(message: _252.TradeConfig): _252.TradeConfigProtoMsg;
        };
        TradeRoute: {
            typeUrl: string;
            encode(message: _252.TradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _252.TradeRoute;
            fromPartial(object: Partial<_252.TradeRoute>): _252.TradeRoute;
            fromAmino(object: _252.TradeRouteAmino): _252.TradeRoute;
            toAmino(message: _252.TradeRoute): _252.TradeRouteAmino;
            fromAminoMsg(object: _252.TradeRouteAminoMsg): _252.TradeRoute;
            fromProtoMsg(message: _252.TradeRouteProtoMsg): _252.TradeRoute;
            toProto(message: _252.TradeRoute): Uint8Array;
            toProtoMsg(message: _252.TradeRoute): _252.TradeRouteProtoMsg;
        };
        QueryInterchainAccountFromAddressRequest: {
            typeUrl: string;
            encode(message: _251.QueryInterchainAccountFromAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.QueryInterchainAccountFromAddressRequest;
            fromPartial(object: Partial<_251.QueryInterchainAccountFromAddressRequest>): _251.QueryInterchainAccountFromAddressRequest;
            fromAmino(object: _251.QueryInterchainAccountFromAddressRequestAmino): _251.QueryInterchainAccountFromAddressRequest;
            toAmino(message: _251.QueryInterchainAccountFromAddressRequest): _251.QueryInterchainAccountFromAddressRequestAmino;
            fromAminoMsg(object: _251.QueryInterchainAccountFromAddressRequestAminoMsg): _251.QueryInterchainAccountFromAddressRequest;
            fromProtoMsg(message: _251.QueryInterchainAccountFromAddressRequestProtoMsg): _251.QueryInterchainAccountFromAddressRequest;
            toProto(message: _251.QueryInterchainAccountFromAddressRequest): Uint8Array;
            toProtoMsg(message: _251.QueryInterchainAccountFromAddressRequest): _251.QueryInterchainAccountFromAddressRequestProtoMsg;
        };
        QueryInterchainAccountFromAddressResponse: {
            typeUrl: string;
            encode(message: _251.QueryInterchainAccountFromAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.QueryInterchainAccountFromAddressResponse;
            fromPartial(object: Partial<_251.QueryInterchainAccountFromAddressResponse>): _251.QueryInterchainAccountFromAddressResponse;
            fromAmino(object: _251.QueryInterchainAccountFromAddressResponseAmino): _251.QueryInterchainAccountFromAddressResponse;
            toAmino(message: _251.QueryInterchainAccountFromAddressResponse): _251.QueryInterchainAccountFromAddressResponseAmino;
            fromAminoMsg(object: _251.QueryInterchainAccountFromAddressResponseAminoMsg): _251.QueryInterchainAccountFromAddressResponse;
            fromProtoMsg(message: _251.QueryInterchainAccountFromAddressResponseProtoMsg): _251.QueryInterchainAccountFromAddressResponse;
            toProto(message: _251.QueryInterchainAccountFromAddressResponse): Uint8Array;
            toProtoMsg(message: _251.QueryInterchainAccountFromAddressResponse): _251.QueryInterchainAccountFromAddressResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _251.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.QueryParamsRequest;
            fromPartial(_: Partial<_251.QueryParamsRequest>): _251.QueryParamsRequest;
            fromAmino(_: _251.QueryParamsRequestAmino): _251.QueryParamsRequest;
            toAmino(_: _251.QueryParamsRequest): _251.QueryParamsRequestAmino;
            fromAminoMsg(object: _251.QueryParamsRequestAminoMsg): _251.QueryParamsRequest;
            fromProtoMsg(message: _251.QueryParamsRequestProtoMsg): _251.QueryParamsRequest;
            toProto(message: _251.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _251.QueryParamsRequest): _251.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _251.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.QueryParamsResponse;
            fromPartial(object: Partial<_251.QueryParamsResponse>): _251.QueryParamsResponse;
            fromAmino(object: _251.QueryParamsResponseAmino): _251.QueryParamsResponse;
            toAmino(message: _251.QueryParamsResponse): _251.QueryParamsResponseAmino;
            fromAminoMsg(object: _251.QueryParamsResponseAminoMsg): _251.QueryParamsResponse;
            fromProtoMsg(message: _251.QueryParamsResponseProtoMsg): _251.QueryParamsResponse;
            toProto(message: _251.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _251.QueryParamsResponse): _251.QueryParamsResponseProtoMsg;
        };
        QueryGetValidatorsRequest: {
            typeUrl: string;
            encode(message: _251.QueryGetValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.QueryGetValidatorsRequest;
            fromPartial(object: Partial<_251.QueryGetValidatorsRequest>): _251.QueryGetValidatorsRequest;
            fromAmino(object: _251.QueryGetValidatorsRequestAmino): _251.QueryGetValidatorsRequest;
            toAmino(message: _251.QueryGetValidatorsRequest): _251.QueryGetValidatorsRequestAmino;
            fromAminoMsg(object: _251.QueryGetValidatorsRequestAminoMsg): _251.QueryGetValidatorsRequest;
            fromProtoMsg(message: _251.QueryGetValidatorsRequestProtoMsg): _251.QueryGetValidatorsRequest;
            toProto(message: _251.QueryGetValidatorsRequest): Uint8Array;
            toProtoMsg(message: _251.QueryGetValidatorsRequest): _251.QueryGetValidatorsRequestProtoMsg;
        };
        QueryGetValidatorsResponse: {
            typeUrl: string;
            encode(message: _251.QueryGetValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.QueryGetValidatorsResponse;
            fromPartial(object: Partial<_251.QueryGetValidatorsResponse>): _251.QueryGetValidatorsResponse;
            fromAmino(object: _251.QueryGetValidatorsResponseAmino): _251.QueryGetValidatorsResponse;
            toAmino(message: _251.QueryGetValidatorsResponse): _251.QueryGetValidatorsResponseAmino;
            fromAminoMsg(object: _251.QueryGetValidatorsResponseAminoMsg): _251.QueryGetValidatorsResponse;
            fromProtoMsg(message: _251.QueryGetValidatorsResponseProtoMsg): _251.QueryGetValidatorsResponse;
            toProto(message: _251.QueryGetValidatorsResponse): Uint8Array;
            toProtoMsg(message: _251.QueryGetValidatorsResponse): _251.QueryGetValidatorsResponseProtoMsg;
        };
        QueryGetHostZoneRequest: {
            typeUrl: string;
            encode(message: _251.QueryGetHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.QueryGetHostZoneRequest;
            fromPartial(object: Partial<_251.QueryGetHostZoneRequest>): _251.QueryGetHostZoneRequest;
            fromAmino(object: _251.QueryGetHostZoneRequestAmino): _251.QueryGetHostZoneRequest;
            toAmino(message: _251.QueryGetHostZoneRequest): _251.QueryGetHostZoneRequestAmino;
            fromAminoMsg(object: _251.QueryGetHostZoneRequestAminoMsg): _251.QueryGetHostZoneRequest;
            fromProtoMsg(message: _251.QueryGetHostZoneRequestProtoMsg): _251.QueryGetHostZoneRequest;
            toProto(message: _251.QueryGetHostZoneRequest): Uint8Array;
            toProtoMsg(message: _251.QueryGetHostZoneRequest): _251.QueryGetHostZoneRequestProtoMsg;
        };
        QueryGetHostZoneResponse: {
            typeUrl: string;
            encode(message: _251.QueryGetHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.QueryGetHostZoneResponse;
            fromPartial(object: Partial<_251.QueryGetHostZoneResponse>): _251.QueryGetHostZoneResponse;
            fromAmino(object: _251.QueryGetHostZoneResponseAmino): _251.QueryGetHostZoneResponse;
            toAmino(message: _251.QueryGetHostZoneResponse): _251.QueryGetHostZoneResponseAmino;
            fromAminoMsg(object: _251.QueryGetHostZoneResponseAminoMsg): _251.QueryGetHostZoneResponse;
            fromProtoMsg(message: _251.QueryGetHostZoneResponseProtoMsg): _251.QueryGetHostZoneResponse;
            toProto(message: _251.QueryGetHostZoneResponse): Uint8Array;
            toProtoMsg(message: _251.QueryGetHostZoneResponse): _251.QueryGetHostZoneResponseProtoMsg;
        };
        QueryAllHostZoneRequest: {
            typeUrl: string;
            encode(message: _251.QueryAllHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.QueryAllHostZoneRequest;
            fromPartial(object: Partial<_251.QueryAllHostZoneRequest>): _251.QueryAllHostZoneRequest;
            fromAmino(object: _251.QueryAllHostZoneRequestAmino): _251.QueryAllHostZoneRequest;
            toAmino(message: _251.QueryAllHostZoneRequest): _251.QueryAllHostZoneRequestAmino;
            fromAminoMsg(object: _251.QueryAllHostZoneRequestAminoMsg): _251.QueryAllHostZoneRequest;
            fromProtoMsg(message: _251.QueryAllHostZoneRequestProtoMsg): _251.QueryAllHostZoneRequest;
            toProto(message: _251.QueryAllHostZoneRequest): Uint8Array;
            toProtoMsg(message: _251.QueryAllHostZoneRequest): _251.QueryAllHostZoneRequestProtoMsg;
        };
        QueryAllHostZoneResponse: {
            typeUrl: string;
            encode(message: _251.QueryAllHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.QueryAllHostZoneResponse;
            fromPartial(object: Partial<_251.QueryAllHostZoneResponse>): _251.QueryAllHostZoneResponse;
            fromAmino(object: _251.QueryAllHostZoneResponseAmino): _251.QueryAllHostZoneResponse;
            toAmino(message: _251.QueryAllHostZoneResponse): _251.QueryAllHostZoneResponseAmino;
            fromAminoMsg(object: _251.QueryAllHostZoneResponseAminoMsg): _251.QueryAllHostZoneResponse;
            fromProtoMsg(message: _251.QueryAllHostZoneResponseProtoMsg): _251.QueryAllHostZoneResponse;
            toProto(message: _251.QueryAllHostZoneResponse): Uint8Array;
            toProtoMsg(message: _251.QueryAllHostZoneResponse): _251.QueryAllHostZoneResponseProtoMsg;
        };
        QueryModuleAddressRequest: {
            typeUrl: string;
            encode(message: _251.QueryModuleAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.QueryModuleAddressRequest;
            fromPartial(object: Partial<_251.QueryModuleAddressRequest>): _251.QueryModuleAddressRequest;
            fromAmino(object: _251.QueryModuleAddressRequestAmino): _251.QueryModuleAddressRequest;
            toAmino(message: _251.QueryModuleAddressRequest): _251.QueryModuleAddressRequestAmino;
            fromAminoMsg(object: _251.QueryModuleAddressRequestAminoMsg): _251.QueryModuleAddressRequest;
            fromProtoMsg(message: _251.QueryModuleAddressRequestProtoMsg): _251.QueryModuleAddressRequest;
            toProto(message: _251.QueryModuleAddressRequest): Uint8Array;
            toProtoMsg(message: _251.QueryModuleAddressRequest): _251.QueryModuleAddressRequestProtoMsg;
        };
        QueryModuleAddressResponse: {
            typeUrl: string;
            encode(message: _251.QueryModuleAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.QueryModuleAddressResponse;
            fromPartial(object: Partial<_251.QueryModuleAddressResponse>): _251.QueryModuleAddressResponse;
            fromAmino(object: _251.QueryModuleAddressResponseAmino): _251.QueryModuleAddressResponse;
            toAmino(message: _251.QueryModuleAddressResponse): _251.QueryModuleAddressResponseAmino;
            fromAminoMsg(object: _251.QueryModuleAddressResponseAminoMsg): _251.QueryModuleAddressResponse;
            fromProtoMsg(message: _251.QueryModuleAddressResponseProtoMsg): _251.QueryModuleAddressResponse;
            toProto(message: _251.QueryModuleAddressResponse): Uint8Array;
            toProtoMsg(message: _251.QueryModuleAddressResponse): _251.QueryModuleAddressResponseProtoMsg;
        };
        QueryGetEpochTrackerRequest: {
            typeUrl: string;
            encode(message: _251.QueryGetEpochTrackerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.QueryGetEpochTrackerRequest;
            fromPartial(object: Partial<_251.QueryGetEpochTrackerRequest>): _251.QueryGetEpochTrackerRequest;
            fromAmino(object: _251.QueryGetEpochTrackerRequestAmino): _251.QueryGetEpochTrackerRequest;
            toAmino(message: _251.QueryGetEpochTrackerRequest): _251.QueryGetEpochTrackerRequestAmino;
            fromAminoMsg(object: _251.QueryGetEpochTrackerRequestAminoMsg): _251.QueryGetEpochTrackerRequest;
            fromProtoMsg(message: _251.QueryGetEpochTrackerRequestProtoMsg): _251.QueryGetEpochTrackerRequest;
            toProto(message: _251.QueryGetEpochTrackerRequest): Uint8Array;
            toProtoMsg(message: _251.QueryGetEpochTrackerRequest): _251.QueryGetEpochTrackerRequestProtoMsg;
        };
        QueryGetEpochTrackerResponse: {
            typeUrl: string;
            encode(message: _251.QueryGetEpochTrackerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.QueryGetEpochTrackerResponse;
            fromPartial(object: Partial<_251.QueryGetEpochTrackerResponse>): _251.QueryGetEpochTrackerResponse;
            fromAmino(object: _251.QueryGetEpochTrackerResponseAmino): _251.QueryGetEpochTrackerResponse;
            toAmino(message: _251.QueryGetEpochTrackerResponse): _251.QueryGetEpochTrackerResponseAmino;
            fromAminoMsg(object: _251.QueryGetEpochTrackerResponseAminoMsg): _251.QueryGetEpochTrackerResponse;
            fromProtoMsg(message: _251.QueryGetEpochTrackerResponseProtoMsg): _251.QueryGetEpochTrackerResponse;
            toProto(message: _251.QueryGetEpochTrackerResponse): Uint8Array;
            toProtoMsg(message: _251.QueryGetEpochTrackerResponse): _251.QueryGetEpochTrackerResponseProtoMsg;
        };
        QueryAllEpochTrackerRequest: {
            typeUrl: string;
            encode(_: _251.QueryAllEpochTrackerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.QueryAllEpochTrackerRequest;
            fromPartial(_: Partial<_251.QueryAllEpochTrackerRequest>): _251.QueryAllEpochTrackerRequest;
            fromAmino(_: _251.QueryAllEpochTrackerRequestAmino): _251.QueryAllEpochTrackerRequest;
            toAmino(_: _251.QueryAllEpochTrackerRequest): _251.QueryAllEpochTrackerRequestAmino;
            fromAminoMsg(object: _251.QueryAllEpochTrackerRequestAminoMsg): _251.QueryAllEpochTrackerRequest;
            fromProtoMsg(message: _251.QueryAllEpochTrackerRequestProtoMsg): _251.QueryAllEpochTrackerRequest;
            toProto(message: _251.QueryAllEpochTrackerRequest): Uint8Array;
            toProtoMsg(message: _251.QueryAllEpochTrackerRequest): _251.QueryAllEpochTrackerRequestProtoMsg;
        };
        QueryAllEpochTrackerResponse: {
            typeUrl: string;
            encode(message: _251.QueryAllEpochTrackerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.QueryAllEpochTrackerResponse;
            fromPartial(object: Partial<_251.QueryAllEpochTrackerResponse>): _251.QueryAllEpochTrackerResponse;
            fromAmino(object: _251.QueryAllEpochTrackerResponseAmino): _251.QueryAllEpochTrackerResponse;
            toAmino(message: _251.QueryAllEpochTrackerResponse): _251.QueryAllEpochTrackerResponseAmino;
            fromAminoMsg(object: _251.QueryAllEpochTrackerResponseAminoMsg): _251.QueryAllEpochTrackerResponse;
            fromProtoMsg(message: _251.QueryAllEpochTrackerResponseProtoMsg): _251.QueryAllEpochTrackerResponse;
            toProto(message: _251.QueryAllEpochTrackerResponse): Uint8Array;
            toProtoMsg(message: _251.QueryAllEpochTrackerResponse): _251.QueryAllEpochTrackerResponseProtoMsg;
        };
        QueryGetNextPacketSequenceRequest: {
            typeUrl: string;
            encode(message: _251.QueryGetNextPacketSequenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.QueryGetNextPacketSequenceRequest;
            fromPartial(object: Partial<_251.QueryGetNextPacketSequenceRequest>): _251.QueryGetNextPacketSequenceRequest;
            fromAmino(object: _251.QueryGetNextPacketSequenceRequestAmino): _251.QueryGetNextPacketSequenceRequest;
            toAmino(message: _251.QueryGetNextPacketSequenceRequest): _251.QueryGetNextPacketSequenceRequestAmino;
            fromAminoMsg(object: _251.QueryGetNextPacketSequenceRequestAminoMsg): _251.QueryGetNextPacketSequenceRequest;
            fromProtoMsg(message: _251.QueryGetNextPacketSequenceRequestProtoMsg): _251.QueryGetNextPacketSequenceRequest;
            toProto(message: _251.QueryGetNextPacketSequenceRequest): Uint8Array;
            toProtoMsg(message: _251.QueryGetNextPacketSequenceRequest): _251.QueryGetNextPacketSequenceRequestProtoMsg;
        };
        QueryGetNextPacketSequenceResponse: {
            typeUrl: string;
            encode(message: _251.QueryGetNextPacketSequenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.QueryGetNextPacketSequenceResponse;
            fromPartial(object: Partial<_251.QueryGetNextPacketSequenceResponse>): _251.QueryGetNextPacketSequenceResponse;
            fromAmino(object: _251.QueryGetNextPacketSequenceResponseAmino): _251.QueryGetNextPacketSequenceResponse;
            toAmino(message: _251.QueryGetNextPacketSequenceResponse): _251.QueryGetNextPacketSequenceResponseAmino;
            fromAminoMsg(object: _251.QueryGetNextPacketSequenceResponseAminoMsg): _251.QueryGetNextPacketSequenceResponse;
            fromProtoMsg(message: _251.QueryGetNextPacketSequenceResponseProtoMsg): _251.QueryGetNextPacketSequenceResponse;
            toProto(message: _251.QueryGetNextPacketSequenceResponse): Uint8Array;
            toProtoMsg(message: _251.QueryGetNextPacketSequenceResponse): _251.QueryGetNextPacketSequenceResponseProtoMsg;
        };
        QueryAddressUnbondings: {
            typeUrl: string;
            encode(message: _251.QueryAddressUnbondings, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.QueryAddressUnbondings;
            fromPartial(object: Partial<_251.QueryAddressUnbondings>): _251.QueryAddressUnbondings;
            fromAmino(object: _251.QueryAddressUnbondingsAmino): _251.QueryAddressUnbondings;
            toAmino(message: _251.QueryAddressUnbondings): _251.QueryAddressUnbondingsAmino;
            fromAminoMsg(object: _251.QueryAddressUnbondingsAminoMsg): _251.QueryAddressUnbondings;
            fromProtoMsg(message: _251.QueryAddressUnbondingsProtoMsg): _251.QueryAddressUnbondings;
            toProto(message: _251.QueryAddressUnbondings): Uint8Array;
            toProtoMsg(message: _251.QueryAddressUnbondings): _251.QueryAddressUnbondingsProtoMsg;
        };
        QueryAddressUnbondingsResponse: {
            typeUrl: string;
            encode(message: _251.QueryAddressUnbondingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.QueryAddressUnbondingsResponse;
            fromPartial(object: Partial<_251.QueryAddressUnbondingsResponse>): _251.QueryAddressUnbondingsResponse;
            fromAmino(object: _251.QueryAddressUnbondingsResponseAmino): _251.QueryAddressUnbondingsResponse;
            toAmino(message: _251.QueryAddressUnbondingsResponse): _251.QueryAddressUnbondingsResponseAmino;
            fromAminoMsg(object: _251.QueryAddressUnbondingsResponseAminoMsg): _251.QueryAddressUnbondingsResponse;
            fromProtoMsg(message: _251.QueryAddressUnbondingsResponseProtoMsg): _251.QueryAddressUnbondingsResponse;
            toProto(message: _251.QueryAddressUnbondingsResponse): Uint8Array;
            toProtoMsg(message: _251.QueryAddressUnbondingsResponse): _251.QueryAddressUnbondingsResponseProtoMsg;
        };
        QueryAllTradeRoutes: {
            typeUrl: string;
            encode(_: _251.QueryAllTradeRoutes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.QueryAllTradeRoutes;
            fromPartial(_: Partial<_251.QueryAllTradeRoutes>): _251.QueryAllTradeRoutes;
            fromAmino(_: _251.QueryAllTradeRoutesAmino): _251.QueryAllTradeRoutes;
            toAmino(_: _251.QueryAllTradeRoutes): _251.QueryAllTradeRoutesAmino;
            fromAminoMsg(object: _251.QueryAllTradeRoutesAminoMsg): _251.QueryAllTradeRoutes;
            fromProtoMsg(message: _251.QueryAllTradeRoutesProtoMsg): _251.QueryAllTradeRoutes;
            toProto(message: _251.QueryAllTradeRoutes): Uint8Array;
            toProtoMsg(message: _251.QueryAllTradeRoutes): _251.QueryAllTradeRoutesProtoMsg;
        };
        QueryAllTradeRoutesResponse: {
            typeUrl: string;
            encode(message: _251.QueryAllTradeRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.QueryAllTradeRoutesResponse;
            fromPartial(object: Partial<_251.QueryAllTradeRoutesResponse>): _251.QueryAllTradeRoutesResponse;
            fromAmino(object: _251.QueryAllTradeRoutesResponseAmino): _251.QueryAllTradeRoutesResponse;
            toAmino(message: _251.QueryAllTradeRoutesResponse): _251.QueryAllTradeRoutesResponseAmino;
            fromAminoMsg(object: _251.QueryAllTradeRoutesResponseAminoMsg): _251.QueryAllTradeRoutesResponse;
            fromProtoMsg(message: _251.QueryAllTradeRoutesResponseProtoMsg): _251.QueryAllTradeRoutesResponse;
            toProto(message: _251.QueryAllTradeRoutesResponse): Uint8Array;
            toProtoMsg(message: _251.QueryAllTradeRoutesResponse): _251.QueryAllTradeRoutesResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _250.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.Params;
            fromPartial(object: Partial<_250.Params>): _250.Params;
            fromAmino(object: _250.ParamsAmino): _250.Params;
            toAmino(message: _250.Params): _250.ParamsAmino;
            fromAminoMsg(object: _250.ParamsAminoMsg): _250.Params;
            fromProtoMsg(message: _250.ParamsProtoMsg): _250.Params;
            toProto(message: _250.Params): Uint8Array;
            toProtoMsg(message: _250.Params): _250.ParamsProtoMsg;
        };
        StakeibcPacketData: {
            typeUrl: string;
            encode(message: _249.StakeibcPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.StakeibcPacketData;
            fromPartial(object: Partial<_249.StakeibcPacketData>): _249.StakeibcPacketData;
            fromAmino(object: _249.StakeibcPacketDataAmino): _249.StakeibcPacketData;
            toAmino(message: _249.StakeibcPacketData): _249.StakeibcPacketDataAmino;
            fromAminoMsg(object: _249.StakeibcPacketDataAminoMsg): _249.StakeibcPacketData;
            fromProtoMsg(message: _249.StakeibcPacketDataProtoMsg): _249.StakeibcPacketData;
            toProto(message: _249.StakeibcPacketData): Uint8Array;
            toProtoMsg(message: _249.StakeibcPacketData): _249.StakeibcPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _249.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.NoData;
            fromPartial(_: Partial<_249.NoData>): _249.NoData;
            fromAmino(_: _249.NoDataAmino): _249.NoData;
            toAmino(_: _249.NoData): _249.NoDataAmino;
            fromAminoMsg(object: _249.NoDataAminoMsg): _249.NoData;
            fromProtoMsg(message: _249.NoDataProtoMsg): _249.NoData;
            toProto(message: _249.NoData): Uint8Array;
            toProtoMsg(message: _249.NoData): _249.NoDataProtoMsg;
        };
        iCAAccountTypeFromJSON(object: any): _248.ICAAccountType;
        iCAAccountTypeToJSON(object: _248.ICAAccountType): string;
        ICAAccountType: typeof _248.ICAAccountType;
        ICAAccountTypeSDKType: typeof _248.ICAAccountType;
        ICAAccountTypeAmino: typeof _248.ICAAccountType;
        ICAAccount: {
            typeUrl: string;
            encode(message: _248.ICAAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.ICAAccount;
            fromPartial(object: Partial<_248.ICAAccount>): _248.ICAAccount;
            fromAmino(object: _248.ICAAccountAmino): _248.ICAAccount;
            toAmino(message: _248.ICAAccount): _248.ICAAccountAmino;
            fromAminoMsg(object: _248.ICAAccountAminoMsg): _248.ICAAccount;
            fromProtoMsg(message: _248.ICAAccountProtoMsg): _248.ICAAccount;
            toProto(message: _248.ICAAccount): Uint8Array;
            toProtoMsg(message: _248.ICAAccount): _248.ICAAccountProtoMsg;
        };
        CommunityPoolRebate: {
            typeUrl: string;
            encode(message: _247.CommunityPoolRebate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.CommunityPoolRebate;
            fromPartial(object: Partial<_247.CommunityPoolRebate>): _247.CommunityPoolRebate;
            fromAmino(object: _247.CommunityPoolRebateAmino): _247.CommunityPoolRebate;
            toAmino(message: _247.CommunityPoolRebate): _247.CommunityPoolRebateAmino;
            fromAminoMsg(object: _247.CommunityPoolRebateAminoMsg): _247.CommunityPoolRebate;
            fromProtoMsg(message: _247.CommunityPoolRebateProtoMsg): _247.CommunityPoolRebate;
            toProto(message: _247.CommunityPoolRebate): Uint8Array;
            toProtoMsg(message: _247.CommunityPoolRebate): _247.CommunityPoolRebateProtoMsg;
        };
        HostZone: {
            typeUrl: string;
            encode(message: _247.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.HostZone;
            fromPartial(object: Partial<_247.HostZone>): _247.HostZone;
            fromAmino(object: _247.HostZoneAmino): _247.HostZone;
            toAmino(message: _247.HostZone): _247.HostZoneAmino;
            fromAminoMsg(object: _247.HostZoneAminoMsg): _247.HostZone;
            fromProtoMsg(message: _247.HostZoneProtoMsg): _247.HostZone;
            toProto(message: _247.HostZone): Uint8Array;
            toProtoMsg(message: _247.HostZone): _247.HostZoneProtoMsg;
        };
        AddValidatorsProposal: {
            typeUrl: string;
            encode(message: _246.AddValidatorsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _246.AddValidatorsProposal;
            fromPartial(object: Partial<_246.AddValidatorsProposal>): _246.AddValidatorsProposal;
            fromAmino(object: _246.AddValidatorsProposalAmino): _246.AddValidatorsProposal;
            toAmino(message: _246.AddValidatorsProposal): _246.AddValidatorsProposalAmino;
            fromAminoMsg(object: _246.AddValidatorsProposalAminoMsg): _246.AddValidatorsProposal;
            toAminoMsg(message: _246.AddValidatorsProposal): _246.AddValidatorsProposalAminoMsg;
            fromProtoMsg(message: _246.AddValidatorsProposalProtoMsg): _246.AddValidatorsProposal;
            toProto(message: _246.AddValidatorsProposal): Uint8Array;
            toProtoMsg(message: _246.AddValidatorsProposal): _246.AddValidatorsProposalProtoMsg;
        };
        ToggleLSMProposal: {
            typeUrl: string;
            encode(message: _246.ToggleLSMProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _246.ToggleLSMProposal;
            fromPartial(object: Partial<_246.ToggleLSMProposal>): _246.ToggleLSMProposal;
            fromAmino(object: _246.ToggleLSMProposalAmino): _246.ToggleLSMProposal;
            toAmino(message: _246.ToggleLSMProposal): _246.ToggleLSMProposalAmino;
            fromAminoMsg(object: _246.ToggleLSMProposalAminoMsg): _246.ToggleLSMProposal;
            toAminoMsg(message: _246.ToggleLSMProposal): _246.ToggleLSMProposalAminoMsg;
            fromProtoMsg(message: _246.ToggleLSMProposalProtoMsg): _246.ToggleLSMProposal;
            toProto(message: _246.ToggleLSMProposal): Uint8Array;
            toProtoMsg(message: _246.ToggleLSMProposal): _246.ToggleLSMProposalProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _245.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _245.GenesisState;
            fromPartial(object: Partial<_245.GenesisState>): _245.GenesisState;
            fromAmino(object: _245.GenesisStateAmino): _245.GenesisState;
            toAmino(message: _245.GenesisState): _245.GenesisStateAmino;
            fromAminoMsg(object: _245.GenesisStateAminoMsg): _245.GenesisState;
            fromProtoMsg(message: _245.GenesisStateProtoMsg): _245.GenesisState;
            toProto(message: _245.GenesisState): Uint8Array;
            toProtoMsg(message: _245.GenesisState): _245.GenesisStateProtoMsg;
        };
        EpochTracker: {
            typeUrl: string;
            encode(message: _244.EpochTracker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.EpochTracker;
            fromPartial(object: Partial<_244.EpochTracker>): _244.EpochTracker;
            fromAmino(object: _244.EpochTrackerAmino): _244.EpochTracker;
            toAmino(message: _244.EpochTracker): _244.EpochTrackerAmino;
            fromAminoMsg(object: _244.EpochTrackerAminoMsg): _244.EpochTracker;
            fromProtoMsg(message: _244.EpochTrackerProtoMsg): _244.EpochTracker;
            toProto(message: _244.EpochTracker): Uint8Array;
            toProtoMsg(message: _244.EpochTracker): _244.EpochTrackerProtoMsg;
        };
        SplitDelegation: {
            typeUrl: string;
            encode(message: _243.SplitDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.SplitDelegation;
            fromPartial(object: Partial<_243.SplitDelegation>): _243.SplitDelegation;
            fromAmino(object: _243.SplitDelegationAmino): _243.SplitDelegation;
            toAmino(message: _243.SplitDelegation): _243.SplitDelegationAmino;
            fromAminoMsg(object: _243.SplitDelegationAminoMsg): _243.SplitDelegation;
            fromProtoMsg(message: _243.SplitDelegationProtoMsg): _243.SplitDelegation;
            toProto(message: _243.SplitDelegation): Uint8Array;
            toProtoMsg(message: _243.SplitDelegation): _243.SplitDelegationProtoMsg;
        };
        SplitUndelegation: {
            typeUrl: string;
            encode(message: _243.SplitUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.SplitUndelegation;
            fromPartial(object: Partial<_243.SplitUndelegation>): _243.SplitUndelegation;
            fromAmino(object: _243.SplitUndelegationAmino): _243.SplitUndelegation;
            toAmino(message: _243.SplitUndelegation): _243.SplitUndelegationAmino;
            fromAminoMsg(object: _243.SplitUndelegationAminoMsg): _243.SplitUndelegation;
            fromProtoMsg(message: _243.SplitUndelegationProtoMsg): _243.SplitUndelegation;
            toProto(message: _243.SplitUndelegation): Uint8Array;
            toProtoMsg(message: _243.SplitUndelegation): _243.SplitUndelegationProtoMsg;
        };
        DelegateCallback: {
            typeUrl: string;
            encode(message: _243.DelegateCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.DelegateCallback;
            fromPartial(object: Partial<_243.DelegateCallback>): _243.DelegateCallback;
            fromAmino(object: _243.DelegateCallbackAmino): _243.DelegateCallback;
            toAmino(message: _243.DelegateCallback): _243.DelegateCallbackAmino;
            fromAminoMsg(object: _243.DelegateCallbackAminoMsg): _243.DelegateCallback;
            fromProtoMsg(message: _243.DelegateCallbackProtoMsg): _243.DelegateCallback;
            toProto(message: _243.DelegateCallback): Uint8Array;
            toProtoMsg(message: _243.DelegateCallback): _243.DelegateCallbackProtoMsg;
        };
        ClaimCallback: {
            typeUrl: string;
            encode(message: _243.ClaimCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.ClaimCallback;
            fromPartial(object: Partial<_243.ClaimCallback>): _243.ClaimCallback;
            fromAmino(object: _243.ClaimCallbackAmino): _243.ClaimCallback;
            toAmino(message: _243.ClaimCallback): _243.ClaimCallbackAmino;
            fromAminoMsg(object: _243.ClaimCallbackAminoMsg): _243.ClaimCallback;
            fromProtoMsg(message: _243.ClaimCallbackProtoMsg): _243.ClaimCallback;
            toProto(message: _243.ClaimCallback): Uint8Array;
            toProtoMsg(message: _243.ClaimCallback): _243.ClaimCallbackProtoMsg;
        };
        ReinvestCallback: {
            typeUrl: string;
            encode(message: _243.ReinvestCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.ReinvestCallback;
            fromPartial(object: Partial<_243.ReinvestCallback>): _243.ReinvestCallback;
            fromAmino(object: _243.ReinvestCallbackAmino): _243.ReinvestCallback;
            toAmino(message: _243.ReinvestCallback): _243.ReinvestCallbackAmino;
            fromAminoMsg(object: _243.ReinvestCallbackAminoMsg): _243.ReinvestCallback;
            fromProtoMsg(message: _243.ReinvestCallbackProtoMsg): _243.ReinvestCallback;
            toProto(message: _243.ReinvestCallback): Uint8Array;
            toProtoMsg(message: _243.ReinvestCallback): _243.ReinvestCallbackProtoMsg;
        };
        UndelegateCallback: {
            typeUrl: string;
            encode(message: _243.UndelegateCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.UndelegateCallback;
            fromPartial(object: Partial<_243.UndelegateCallback>): _243.UndelegateCallback;
            fromAmino(object: _243.UndelegateCallbackAmino): _243.UndelegateCallback;
            toAmino(message: _243.UndelegateCallback): _243.UndelegateCallbackAmino;
            fromAminoMsg(object: _243.UndelegateCallbackAminoMsg): _243.UndelegateCallback;
            fromProtoMsg(message: _243.UndelegateCallbackProtoMsg): _243.UndelegateCallback;
            toProto(message: _243.UndelegateCallback): Uint8Array;
            toProtoMsg(message: _243.UndelegateCallback): _243.UndelegateCallbackProtoMsg;
        };
        RedemptionCallback: {
            typeUrl: string;
            encode(message: _243.RedemptionCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.RedemptionCallback;
            fromPartial(object: Partial<_243.RedemptionCallback>): _243.RedemptionCallback;
            fromAmino(object: _243.RedemptionCallbackAmino): _243.RedemptionCallback;
            toAmino(message: _243.RedemptionCallback): _243.RedemptionCallbackAmino;
            fromAminoMsg(object: _243.RedemptionCallbackAminoMsg): _243.RedemptionCallback;
            fromProtoMsg(message: _243.RedemptionCallbackProtoMsg): _243.RedemptionCallback;
            toProto(message: _243.RedemptionCallback): Uint8Array;
            toProtoMsg(message: _243.RedemptionCallback): _243.RedemptionCallbackProtoMsg;
        };
        Rebalancing: {
            typeUrl: string;
            encode(message: _243.Rebalancing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.Rebalancing;
            fromPartial(object: Partial<_243.Rebalancing>): _243.Rebalancing;
            fromAmino(object: _243.RebalancingAmino): _243.Rebalancing;
            toAmino(message: _243.Rebalancing): _243.RebalancingAmino;
            fromAminoMsg(object: _243.RebalancingAminoMsg): _243.Rebalancing;
            fromProtoMsg(message: _243.RebalancingProtoMsg): _243.Rebalancing;
            toProto(message: _243.Rebalancing): Uint8Array;
            toProtoMsg(message: _243.Rebalancing): _243.RebalancingProtoMsg;
        };
        RebalanceCallback: {
            typeUrl: string;
            encode(message: _243.RebalanceCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.RebalanceCallback;
            fromPartial(object: Partial<_243.RebalanceCallback>): _243.RebalanceCallback;
            fromAmino(object: _243.RebalanceCallbackAmino): _243.RebalanceCallback;
            toAmino(message: _243.RebalanceCallback): _243.RebalanceCallbackAmino;
            fromAminoMsg(object: _243.RebalanceCallbackAminoMsg): _243.RebalanceCallback;
            fromProtoMsg(message: _243.RebalanceCallbackProtoMsg): _243.RebalanceCallback;
            toProto(message: _243.RebalanceCallback): Uint8Array;
            toProtoMsg(message: _243.RebalanceCallback): _243.RebalanceCallbackProtoMsg;
        };
        DetokenizeSharesCallback: {
            typeUrl: string;
            encode(message: _243.DetokenizeSharesCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.DetokenizeSharesCallback;
            fromPartial(object: Partial<_243.DetokenizeSharesCallback>): _243.DetokenizeSharesCallback;
            fromAmino(object: _243.DetokenizeSharesCallbackAmino): _243.DetokenizeSharesCallback;
            toAmino(message: _243.DetokenizeSharesCallback): _243.DetokenizeSharesCallbackAmino;
            fromAminoMsg(object: _243.DetokenizeSharesCallbackAminoMsg): _243.DetokenizeSharesCallback;
            fromProtoMsg(message: _243.DetokenizeSharesCallbackProtoMsg): _243.DetokenizeSharesCallback;
            toProto(message: _243.DetokenizeSharesCallback): Uint8Array;
            toProtoMsg(message: _243.DetokenizeSharesCallback): _243.DetokenizeSharesCallbackProtoMsg;
        };
        LSMLiquidStake: {
            typeUrl: string;
            encode(message: _243.LSMLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.LSMLiquidStake;
            fromPartial(object: Partial<_243.LSMLiquidStake>): _243.LSMLiquidStake;
            fromAmino(object: _243.LSMLiquidStakeAmino): _243.LSMLiquidStake;
            toAmino(message: _243.LSMLiquidStake): _243.LSMLiquidStakeAmino;
            fromAminoMsg(object: _243.LSMLiquidStakeAminoMsg): _243.LSMLiquidStake;
            fromProtoMsg(message: _243.LSMLiquidStakeProtoMsg): _243.LSMLiquidStake;
            toProto(message: _243.LSMLiquidStake): Uint8Array;
            toProtoMsg(message: _243.LSMLiquidStake): _243.LSMLiquidStakeProtoMsg;
        };
        ValidatorSharesToTokensQueryCallback: {
            typeUrl: string;
            encode(message: _243.ValidatorSharesToTokensQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.ValidatorSharesToTokensQueryCallback;
            fromPartial(object: Partial<_243.ValidatorSharesToTokensQueryCallback>): _243.ValidatorSharesToTokensQueryCallback;
            fromAmino(object: _243.ValidatorSharesToTokensQueryCallbackAmino): _243.ValidatorSharesToTokensQueryCallback;
            toAmino(message: _243.ValidatorSharesToTokensQueryCallback): _243.ValidatorSharesToTokensQueryCallbackAmino;
            fromAminoMsg(object: _243.ValidatorSharesToTokensQueryCallbackAminoMsg): _243.ValidatorSharesToTokensQueryCallback;
            fromProtoMsg(message: _243.ValidatorSharesToTokensQueryCallbackProtoMsg): _243.ValidatorSharesToTokensQueryCallback;
            toProto(message: _243.ValidatorSharesToTokensQueryCallback): Uint8Array;
            toProtoMsg(message: _243.ValidatorSharesToTokensQueryCallback): _243.ValidatorSharesToTokensQueryCallbackProtoMsg;
        };
        DelegatorSharesQueryCallback: {
            typeUrl: string;
            encode(message: _243.DelegatorSharesQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.DelegatorSharesQueryCallback;
            fromPartial(object: Partial<_243.DelegatorSharesQueryCallback>): _243.DelegatorSharesQueryCallback;
            fromAmino(object: _243.DelegatorSharesQueryCallbackAmino): _243.DelegatorSharesQueryCallback;
            toAmino(message: _243.DelegatorSharesQueryCallback): _243.DelegatorSharesQueryCallbackAmino;
            fromAminoMsg(object: _243.DelegatorSharesQueryCallbackAminoMsg): _243.DelegatorSharesQueryCallback;
            fromProtoMsg(message: _243.DelegatorSharesQueryCallbackProtoMsg): _243.DelegatorSharesQueryCallback;
            toProto(message: _243.DelegatorSharesQueryCallback): Uint8Array;
            toProtoMsg(message: _243.DelegatorSharesQueryCallback): _243.DelegatorSharesQueryCallbackProtoMsg;
        };
        CommunityPoolBalanceQueryCallback: {
            typeUrl: string;
            encode(message: _243.CommunityPoolBalanceQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.CommunityPoolBalanceQueryCallback;
            fromPartial(object: Partial<_243.CommunityPoolBalanceQueryCallback>): _243.CommunityPoolBalanceQueryCallback;
            fromAmino(object: _243.CommunityPoolBalanceQueryCallbackAmino): _243.CommunityPoolBalanceQueryCallback;
            toAmino(message: _243.CommunityPoolBalanceQueryCallback): _243.CommunityPoolBalanceQueryCallbackAmino;
            fromAminoMsg(object: _243.CommunityPoolBalanceQueryCallbackAminoMsg): _243.CommunityPoolBalanceQueryCallback;
            fromProtoMsg(message: _243.CommunityPoolBalanceQueryCallbackProtoMsg): _243.CommunityPoolBalanceQueryCallback;
            toProto(message: _243.CommunityPoolBalanceQueryCallback): Uint8Array;
            toProtoMsg(message: _243.CommunityPoolBalanceQueryCallback): _243.CommunityPoolBalanceQueryCallbackProtoMsg;
        };
        TradeRouteCallback: {
            typeUrl: string;
            encode(message: _243.TradeRouteCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.TradeRouteCallback;
            fromPartial(object: Partial<_243.TradeRouteCallback>): _243.TradeRouteCallback;
            fromAmino(object: _243.TradeRouteCallbackAmino): _243.TradeRouteCallback;
            toAmino(message: _243.TradeRouteCallback): _243.TradeRouteCallbackAmino;
            fromAminoMsg(object: _243.TradeRouteCallbackAminoMsg): _243.TradeRouteCallback;
            fromProtoMsg(message: _243.TradeRouteCallbackProtoMsg): _243.TradeRouteCallback;
            toProto(message: _243.TradeRouteCallback): Uint8Array;
            toProtoMsg(message: _243.TradeRouteCallback): _243.TradeRouteCallbackProtoMsg;
        };
        AddressUnbonding: {
            typeUrl: string;
            encode(message: _242.AddressUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.AddressUnbonding;
            fromPartial(object: Partial<_242.AddressUnbonding>): _242.AddressUnbonding;
            fromAmino(object: _242.AddressUnbondingAmino): _242.AddressUnbonding;
            toAmino(message: _242.AddressUnbonding): _242.AddressUnbondingAmino;
            fromAminoMsg(object: _242.AddressUnbondingAminoMsg): _242.AddressUnbonding;
            fromProtoMsg(message: _242.AddressUnbondingProtoMsg): _242.AddressUnbonding;
            toProto(message: _242.AddressUnbonding): Uint8Array;
            toProtoMsg(message: _242.AddressUnbonding): _242.AddressUnbondingProtoMsg;
        };
    };
    const staketia: {
        MsgClientImpl: typeof _426.MsgClientImpl;
        QueryClientImpl: typeof _416.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            hostZone(request?: _256.QueryHostZoneRequest): Promise<_256.QueryHostZoneResponse>;
            delegationRecords(request: _256.QueryDelegationRecordsRequest): Promise<_256.QueryDelegationRecordsResponse>;
            unbondingRecords(request: _256.QueryUnbondingRecordsRequest): Promise<_256.QueryUnbondingRecordsResponse>;
            redemptionRecord(request: _256.QueryRedemptionRecordRequest): Promise<_256.QueryRedemptionRecordResponse>;
            redemptionRecords(request: _256.QueryRedemptionRecordsRequest): Promise<_256.QueryRedemptionRecordsResponse>;
            slashRecords(request?: _256.QuerySlashRecordsRequest): Promise<_256.QuerySlashRecordsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _258.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _258.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmDelegation(value: _258.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUndelegation(value: _258.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUnbondedTokenSweep(value: _258.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                adjustDelegatedBalance(value: _258.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _258.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _258.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                refreshRedemptionRate(value: _258.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteDelegationRecord(value: _258.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteUnbondingRecord(value: _258.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteRedemptionRecord(value: _258.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOperatorAddress(value: _258.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _258.MsgLiquidStake): {
                    typeUrl: string;
                    value: _258.MsgLiquidStake;
                };
                redeemStake(value: _258.MsgRedeemStake): {
                    typeUrl: string;
                    value: _258.MsgRedeemStake;
                };
                confirmDelegation(value: _258.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _258.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _258.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _258.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _258.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _258.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _258.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _258.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _258.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _258.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _258.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _258.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _258.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _258.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _258.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _258.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _258.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _258.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _258.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _258.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _258.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _258.MsgSetOperatorAddress;
                };
            };
            fromPartial: {
                liquidStake(value: _258.MsgLiquidStake): {
                    typeUrl: string;
                    value: _258.MsgLiquidStake;
                };
                redeemStake(value: _258.MsgRedeemStake): {
                    typeUrl: string;
                    value: _258.MsgRedeemStake;
                };
                confirmDelegation(value: _258.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _258.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _258.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _258.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _258.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _258.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _258.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _258.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _258.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _258.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _258.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _258.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _258.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _258.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _258.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _258.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _258.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _258.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _258.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _258.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _258.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _258.MsgSetOperatorAddress;
                };
            };
        };
        AminoConverter: {
            "/stride.staketia.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _258.MsgLiquidStake) => _258.MsgLiquidStakeAmino;
                fromAmino: (object: _258.MsgLiquidStakeAmino) => _258.MsgLiquidStake;
            };
            "/stride.staketia.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _258.MsgRedeemStake) => _258.MsgRedeemStakeAmino;
                fromAmino: (object: _258.MsgRedeemStakeAmino) => _258.MsgRedeemStake;
            };
            "/stride.staketia.MsgConfirmDelegation": {
                aminoType: string;
                toAmino: (message: _258.MsgConfirmDelegation) => _258.MsgConfirmDelegationAmino;
                fromAmino: (object: _258.MsgConfirmDelegationAmino) => _258.MsgConfirmDelegation;
            };
            "/stride.staketia.MsgConfirmUndelegation": {
                aminoType: string;
                toAmino: (message: _258.MsgConfirmUndelegation) => _258.MsgConfirmUndelegationAmino;
                fromAmino: (object: _258.MsgConfirmUndelegationAmino) => _258.MsgConfirmUndelegation;
            };
            "/stride.staketia.MsgConfirmUnbondedTokenSweep": {
                aminoType: string;
                toAmino: (message: _258.MsgConfirmUnbondedTokenSweep) => _258.MsgConfirmUnbondedTokenSweepAmino;
                fromAmino: (object: _258.MsgConfirmUnbondedTokenSweepAmino) => _258.MsgConfirmUnbondedTokenSweep;
            };
            "/stride.staketia.MsgAdjustDelegatedBalance": {
                aminoType: string;
                toAmino: (message: _258.MsgAdjustDelegatedBalance) => _258.MsgAdjustDelegatedBalanceAmino;
                fromAmino: (object: _258.MsgAdjustDelegatedBalanceAmino) => _258.MsgAdjustDelegatedBalance;
            };
            "/stride.staketia.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _258.MsgUpdateInnerRedemptionRateBounds) => _258.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _258.MsgUpdateInnerRedemptionRateBoundsAmino) => _258.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.staketia.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _258.MsgResumeHostZone) => _258.MsgResumeHostZoneAmino;
                fromAmino: (object: _258.MsgResumeHostZoneAmino) => _258.MsgResumeHostZone;
            };
            "/stride.staketia.MsgRefreshRedemptionRate": {
                aminoType: string;
                toAmino: (message: _258.MsgRefreshRedemptionRate) => _258.MsgRefreshRedemptionRateAmino;
                fromAmino: (object: _258.MsgRefreshRedemptionRateAmino) => _258.MsgRefreshRedemptionRate;
            };
            "/stride.staketia.MsgOverwriteDelegationRecord": {
                aminoType: string;
                toAmino: (message: _258.MsgOverwriteDelegationRecord) => _258.MsgOverwriteDelegationRecordAmino;
                fromAmino: (object: _258.MsgOverwriteDelegationRecordAmino) => _258.MsgOverwriteDelegationRecord;
            };
            "/stride.staketia.MsgOverwriteUnbondingRecord": {
                aminoType: string;
                toAmino: (message: _258.MsgOverwriteUnbondingRecord) => _258.MsgOverwriteUnbondingRecordAmino;
                fromAmino: (object: _258.MsgOverwriteUnbondingRecordAmino) => _258.MsgOverwriteUnbondingRecord;
            };
            "/stride.staketia.MsgOverwriteRedemptionRecord": {
                aminoType: string;
                toAmino: (message: _258.MsgOverwriteRedemptionRecord) => _258.MsgOverwriteRedemptionRecordAmino;
                fromAmino: (object: _258.MsgOverwriteRedemptionRecordAmino) => _258.MsgOverwriteRedemptionRecord;
            };
            "/stride.staketia.MsgSetOperatorAddress": {
                aminoType: string;
                toAmino: (message: _258.MsgSetOperatorAddress) => _258.MsgSetOperatorAddressAmino;
                fromAmino: (object: _258.MsgSetOperatorAddressAmino) => _258.MsgSetOperatorAddress;
            };
        };
        overwritableRecordTypeFromJSON(object: any): _258.OverwritableRecordType;
        overwritableRecordTypeToJSON(object: _258.OverwritableRecordType): string;
        OverwritableRecordType: typeof _258.OverwritableRecordType;
        OverwritableRecordTypeSDKType: typeof _258.OverwritableRecordType;
        OverwritableRecordTypeAmino: typeof _258.OverwritableRecordType;
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _258.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.MsgLiquidStake;
            fromPartial(object: Partial<_258.MsgLiquidStake>): _258.MsgLiquidStake;
            fromAmino(object: _258.MsgLiquidStakeAmino): _258.MsgLiquidStake;
            toAmino(message: _258.MsgLiquidStake): _258.MsgLiquidStakeAmino;
            fromAminoMsg(object: _258.MsgLiquidStakeAminoMsg): _258.MsgLiquidStake;
            toAminoMsg(message: _258.MsgLiquidStake): _258.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _258.MsgLiquidStakeProtoMsg): _258.MsgLiquidStake;
            toProto(message: _258.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _258.MsgLiquidStake): _258.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _258.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_258.MsgLiquidStakeResponse>): _258.MsgLiquidStakeResponse;
            fromAmino(object: _258.MsgLiquidStakeResponseAmino): _258.MsgLiquidStakeResponse;
            toAmino(message: _258.MsgLiquidStakeResponse): _258.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _258.MsgLiquidStakeResponseAminoMsg): _258.MsgLiquidStakeResponse;
            fromProtoMsg(message: _258.MsgLiquidStakeResponseProtoMsg): _258.MsgLiquidStakeResponse;
            toProto(message: _258.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _258.MsgLiquidStakeResponse): _258.MsgLiquidStakeResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _258.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.MsgRedeemStake;
            fromPartial(object: Partial<_258.MsgRedeemStake>): _258.MsgRedeemStake;
            fromAmino(object: _258.MsgRedeemStakeAmino): _258.MsgRedeemStake;
            toAmino(message: _258.MsgRedeemStake): _258.MsgRedeemStakeAmino;
            fromAminoMsg(object: _258.MsgRedeemStakeAminoMsg): _258.MsgRedeemStake;
            toAminoMsg(message: _258.MsgRedeemStake): _258.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _258.MsgRedeemStakeProtoMsg): _258.MsgRedeemStake;
            toProto(message: _258.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _258.MsgRedeemStake): _258.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(message: _258.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.MsgRedeemStakeResponse;
            fromPartial(object: Partial<_258.MsgRedeemStakeResponse>): _258.MsgRedeemStakeResponse;
            fromAmino(object: _258.MsgRedeemStakeResponseAmino): _258.MsgRedeemStakeResponse;
            toAmino(message: _258.MsgRedeemStakeResponse): _258.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _258.MsgRedeemStakeResponseAminoMsg): _258.MsgRedeemStakeResponse;
            fromProtoMsg(message: _258.MsgRedeemStakeResponseProtoMsg): _258.MsgRedeemStakeResponse;
            toProto(message: _258.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _258.MsgRedeemStakeResponse): _258.MsgRedeemStakeResponseProtoMsg;
        };
        MsgConfirmDelegation: {
            typeUrl: string;
            encode(message: _258.MsgConfirmDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.MsgConfirmDelegation;
            fromPartial(object: Partial<_258.MsgConfirmDelegation>): _258.MsgConfirmDelegation;
            fromAmino(object: _258.MsgConfirmDelegationAmino): _258.MsgConfirmDelegation;
            toAmino(message: _258.MsgConfirmDelegation): _258.MsgConfirmDelegationAmino;
            fromAminoMsg(object: _258.MsgConfirmDelegationAminoMsg): _258.MsgConfirmDelegation;
            toAminoMsg(message: _258.MsgConfirmDelegation): _258.MsgConfirmDelegationAminoMsg;
            fromProtoMsg(message: _258.MsgConfirmDelegationProtoMsg): _258.MsgConfirmDelegation;
            toProto(message: _258.MsgConfirmDelegation): Uint8Array;
            toProtoMsg(message: _258.MsgConfirmDelegation): _258.MsgConfirmDelegationProtoMsg;
        };
        MsgConfirmDelegationResponse: {
            typeUrl: string;
            encode(_: _258.MsgConfirmDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.MsgConfirmDelegationResponse;
            fromPartial(_: Partial<_258.MsgConfirmDelegationResponse>): _258.MsgConfirmDelegationResponse;
            fromAmino(_: _258.MsgConfirmDelegationResponseAmino): _258.MsgConfirmDelegationResponse;
            toAmino(_: _258.MsgConfirmDelegationResponse): _258.MsgConfirmDelegationResponseAmino;
            fromAminoMsg(object: _258.MsgConfirmDelegationResponseAminoMsg): _258.MsgConfirmDelegationResponse;
            fromProtoMsg(message: _258.MsgConfirmDelegationResponseProtoMsg): _258.MsgConfirmDelegationResponse;
            toProto(message: _258.MsgConfirmDelegationResponse): Uint8Array;
            toProtoMsg(message: _258.MsgConfirmDelegationResponse): _258.MsgConfirmDelegationResponseProtoMsg;
        };
        MsgConfirmUndelegation: {
            typeUrl: string;
            encode(message: _258.MsgConfirmUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.MsgConfirmUndelegation;
            fromPartial(object: Partial<_258.MsgConfirmUndelegation>): _258.MsgConfirmUndelegation;
            fromAmino(object: _258.MsgConfirmUndelegationAmino): _258.MsgConfirmUndelegation;
            toAmino(message: _258.MsgConfirmUndelegation): _258.MsgConfirmUndelegationAmino;
            fromAminoMsg(object: _258.MsgConfirmUndelegationAminoMsg): _258.MsgConfirmUndelegation;
            toAminoMsg(message: _258.MsgConfirmUndelegation): _258.MsgConfirmUndelegationAminoMsg;
            fromProtoMsg(message: _258.MsgConfirmUndelegationProtoMsg): _258.MsgConfirmUndelegation;
            toProto(message: _258.MsgConfirmUndelegation): Uint8Array;
            toProtoMsg(message: _258.MsgConfirmUndelegation): _258.MsgConfirmUndelegationProtoMsg;
        };
        MsgConfirmUndelegationResponse: {
            typeUrl: string;
            encode(_: _258.MsgConfirmUndelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.MsgConfirmUndelegationResponse;
            fromPartial(_: Partial<_258.MsgConfirmUndelegationResponse>): _258.MsgConfirmUndelegationResponse;
            fromAmino(_: _258.MsgConfirmUndelegationResponseAmino): _258.MsgConfirmUndelegationResponse;
            toAmino(_: _258.MsgConfirmUndelegationResponse): _258.MsgConfirmUndelegationResponseAmino;
            fromAminoMsg(object: _258.MsgConfirmUndelegationResponseAminoMsg): _258.MsgConfirmUndelegationResponse;
            fromProtoMsg(message: _258.MsgConfirmUndelegationResponseProtoMsg): _258.MsgConfirmUndelegationResponse;
            toProto(message: _258.MsgConfirmUndelegationResponse): Uint8Array;
            toProtoMsg(message: _258.MsgConfirmUndelegationResponse): _258.MsgConfirmUndelegationResponseProtoMsg;
        };
        MsgConfirmUnbondedTokenSweep: {
            typeUrl: string;
            encode(message: _258.MsgConfirmUnbondedTokenSweep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.MsgConfirmUnbondedTokenSweep;
            fromPartial(object: Partial<_258.MsgConfirmUnbondedTokenSweep>): _258.MsgConfirmUnbondedTokenSweep;
            fromAmino(object: _258.MsgConfirmUnbondedTokenSweepAmino): _258.MsgConfirmUnbondedTokenSweep;
            toAmino(message: _258.MsgConfirmUnbondedTokenSweep): _258.MsgConfirmUnbondedTokenSweepAmino;
            fromAminoMsg(object: _258.MsgConfirmUnbondedTokenSweepAminoMsg): _258.MsgConfirmUnbondedTokenSweep;
            toAminoMsg(message: _258.MsgConfirmUnbondedTokenSweep): _258.MsgConfirmUnbondedTokenSweepAminoMsg;
            fromProtoMsg(message: _258.MsgConfirmUnbondedTokenSweepProtoMsg): _258.MsgConfirmUnbondedTokenSweep;
            toProto(message: _258.MsgConfirmUnbondedTokenSweep): Uint8Array;
            toProtoMsg(message: _258.MsgConfirmUnbondedTokenSweep): _258.MsgConfirmUnbondedTokenSweepProtoMsg;
        };
        MsgConfirmUnbondedTokenSweepResponse: {
            typeUrl: string;
            encode(_: _258.MsgConfirmUnbondedTokenSweepResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.MsgConfirmUnbondedTokenSweepResponse;
            fromPartial(_: Partial<_258.MsgConfirmUnbondedTokenSweepResponse>): _258.MsgConfirmUnbondedTokenSweepResponse;
            fromAmino(_: _258.MsgConfirmUnbondedTokenSweepResponseAmino): _258.MsgConfirmUnbondedTokenSweepResponse;
            toAmino(_: _258.MsgConfirmUnbondedTokenSweepResponse): _258.MsgConfirmUnbondedTokenSweepResponseAmino;
            fromAminoMsg(object: _258.MsgConfirmUnbondedTokenSweepResponseAminoMsg): _258.MsgConfirmUnbondedTokenSweepResponse;
            fromProtoMsg(message: _258.MsgConfirmUnbondedTokenSweepResponseProtoMsg): _258.MsgConfirmUnbondedTokenSweepResponse;
            toProto(message: _258.MsgConfirmUnbondedTokenSweepResponse): Uint8Array;
            toProtoMsg(message: _258.MsgConfirmUnbondedTokenSweepResponse): _258.MsgConfirmUnbondedTokenSweepResponseProtoMsg;
        };
        MsgAdjustDelegatedBalance: {
            typeUrl: string;
            encode(message: _258.MsgAdjustDelegatedBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.MsgAdjustDelegatedBalance;
            fromPartial(object: Partial<_258.MsgAdjustDelegatedBalance>): _258.MsgAdjustDelegatedBalance;
            fromAmino(object: _258.MsgAdjustDelegatedBalanceAmino): _258.MsgAdjustDelegatedBalance;
            toAmino(message: _258.MsgAdjustDelegatedBalance): _258.MsgAdjustDelegatedBalanceAmino;
            fromAminoMsg(object: _258.MsgAdjustDelegatedBalanceAminoMsg): _258.MsgAdjustDelegatedBalance;
            toAminoMsg(message: _258.MsgAdjustDelegatedBalance): _258.MsgAdjustDelegatedBalanceAminoMsg;
            fromProtoMsg(message: _258.MsgAdjustDelegatedBalanceProtoMsg): _258.MsgAdjustDelegatedBalance;
            toProto(message: _258.MsgAdjustDelegatedBalance): Uint8Array;
            toProtoMsg(message: _258.MsgAdjustDelegatedBalance): _258.MsgAdjustDelegatedBalanceProtoMsg;
        };
        MsgAdjustDelegatedBalanceResponse: {
            typeUrl: string;
            encode(_: _258.MsgAdjustDelegatedBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.MsgAdjustDelegatedBalanceResponse;
            fromPartial(_: Partial<_258.MsgAdjustDelegatedBalanceResponse>): _258.MsgAdjustDelegatedBalanceResponse;
            fromAmino(_: _258.MsgAdjustDelegatedBalanceResponseAmino): _258.MsgAdjustDelegatedBalanceResponse;
            toAmino(_: _258.MsgAdjustDelegatedBalanceResponse): _258.MsgAdjustDelegatedBalanceResponseAmino;
            fromAminoMsg(object: _258.MsgAdjustDelegatedBalanceResponseAminoMsg): _258.MsgAdjustDelegatedBalanceResponse;
            fromProtoMsg(message: _258.MsgAdjustDelegatedBalanceResponseProtoMsg): _258.MsgAdjustDelegatedBalanceResponse;
            toProto(message: _258.MsgAdjustDelegatedBalanceResponse): Uint8Array;
            toProtoMsg(message: _258.MsgAdjustDelegatedBalanceResponse): _258.MsgAdjustDelegatedBalanceResponseProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _258.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_258.MsgUpdateInnerRedemptionRateBounds>): _258.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _258.MsgUpdateInnerRedemptionRateBoundsAmino): _258.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _258.MsgUpdateInnerRedemptionRateBounds): _258.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _258.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _258.MsgUpdateInnerRedemptionRateBounds;
            toAminoMsg(message: _258.MsgUpdateInnerRedemptionRateBounds): _258.MsgUpdateInnerRedemptionRateBoundsAminoMsg;
            fromProtoMsg(message: _258.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _258.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _258.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _258.MsgUpdateInnerRedemptionRateBounds): _258.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _258.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_258.MsgUpdateInnerRedemptionRateBoundsResponse>): _258.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _258.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _258.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _258.MsgUpdateInnerRedemptionRateBoundsResponse): _258.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _258.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _258.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _258.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _258.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _258.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _258.MsgUpdateInnerRedemptionRateBoundsResponse): _258.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _258.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.MsgResumeHostZone;
            fromPartial(object: Partial<_258.MsgResumeHostZone>): _258.MsgResumeHostZone;
            fromAmino(object: _258.MsgResumeHostZoneAmino): _258.MsgResumeHostZone;
            toAmino(message: _258.MsgResumeHostZone): _258.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _258.MsgResumeHostZoneAminoMsg): _258.MsgResumeHostZone;
            toAminoMsg(message: _258.MsgResumeHostZone): _258.MsgResumeHostZoneAminoMsg;
            fromProtoMsg(message: _258.MsgResumeHostZoneProtoMsg): _258.MsgResumeHostZone;
            toProto(message: _258.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _258.MsgResumeHostZone): _258.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _258.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_258.MsgResumeHostZoneResponse>): _258.MsgResumeHostZoneResponse;
            fromAmino(_: _258.MsgResumeHostZoneResponseAmino): _258.MsgResumeHostZoneResponse;
            toAmino(_: _258.MsgResumeHostZoneResponse): _258.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _258.MsgResumeHostZoneResponseAminoMsg): _258.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _258.MsgResumeHostZoneResponseProtoMsg): _258.MsgResumeHostZoneResponse;
            toProto(message: _258.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _258.MsgResumeHostZoneResponse): _258.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgRefreshRedemptionRate: {
            typeUrl: string;
            encode(message: _258.MsgRefreshRedemptionRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.MsgRefreshRedemptionRate;
            fromPartial(object: Partial<_258.MsgRefreshRedemptionRate>): _258.MsgRefreshRedemptionRate;
            fromAmino(object: _258.MsgRefreshRedemptionRateAmino): _258.MsgRefreshRedemptionRate;
            toAmino(message: _258.MsgRefreshRedemptionRate): _258.MsgRefreshRedemptionRateAmino;
            fromAminoMsg(object: _258.MsgRefreshRedemptionRateAminoMsg): _258.MsgRefreshRedemptionRate;
            toAminoMsg(message: _258.MsgRefreshRedemptionRate): _258.MsgRefreshRedemptionRateAminoMsg;
            fromProtoMsg(message: _258.MsgRefreshRedemptionRateProtoMsg): _258.MsgRefreshRedemptionRate;
            toProto(message: _258.MsgRefreshRedemptionRate): Uint8Array;
            toProtoMsg(message: _258.MsgRefreshRedemptionRate): _258.MsgRefreshRedemptionRateProtoMsg;
        };
        MsgRefreshRedemptionRateResponse: {
            typeUrl: string;
            encode(_: _258.MsgRefreshRedemptionRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.MsgRefreshRedemptionRateResponse;
            fromPartial(_: Partial<_258.MsgRefreshRedemptionRateResponse>): _258.MsgRefreshRedemptionRateResponse;
            fromAmino(_: _258.MsgRefreshRedemptionRateResponseAmino): _258.MsgRefreshRedemptionRateResponse;
            toAmino(_: _258.MsgRefreshRedemptionRateResponse): _258.MsgRefreshRedemptionRateResponseAmino;
            fromAminoMsg(object: _258.MsgRefreshRedemptionRateResponseAminoMsg): _258.MsgRefreshRedemptionRateResponse;
            fromProtoMsg(message: _258.MsgRefreshRedemptionRateResponseProtoMsg): _258.MsgRefreshRedemptionRateResponse;
            toProto(message: _258.MsgRefreshRedemptionRateResponse): Uint8Array;
            toProtoMsg(message: _258.MsgRefreshRedemptionRateResponse): _258.MsgRefreshRedemptionRateResponseProtoMsg;
        };
        MsgOverwriteDelegationRecord: {
            typeUrl: string;
            encode(message: _258.MsgOverwriteDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.MsgOverwriteDelegationRecord;
            fromPartial(object: Partial<_258.MsgOverwriteDelegationRecord>): _258.MsgOverwriteDelegationRecord;
            fromAmino(object: _258.MsgOverwriteDelegationRecordAmino): _258.MsgOverwriteDelegationRecord;
            toAmino(message: _258.MsgOverwriteDelegationRecord): _258.MsgOverwriteDelegationRecordAmino;
            fromAminoMsg(object: _258.MsgOverwriteDelegationRecordAminoMsg): _258.MsgOverwriteDelegationRecord;
            toAminoMsg(message: _258.MsgOverwriteDelegationRecord): _258.MsgOverwriteDelegationRecordAminoMsg;
            fromProtoMsg(message: _258.MsgOverwriteDelegationRecordProtoMsg): _258.MsgOverwriteDelegationRecord;
            toProto(message: _258.MsgOverwriteDelegationRecord): Uint8Array;
            toProtoMsg(message: _258.MsgOverwriteDelegationRecord): _258.MsgOverwriteDelegationRecordProtoMsg;
        };
        MsgOverwriteDelegationRecordResponse: {
            typeUrl: string;
            encode(_: _258.MsgOverwriteDelegationRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.MsgOverwriteDelegationRecordResponse;
            fromPartial(_: Partial<_258.MsgOverwriteDelegationRecordResponse>): _258.MsgOverwriteDelegationRecordResponse;
            fromAmino(_: _258.MsgOverwriteDelegationRecordResponseAmino): _258.MsgOverwriteDelegationRecordResponse;
            toAmino(_: _258.MsgOverwriteDelegationRecordResponse): _258.MsgOverwriteDelegationRecordResponseAmino;
            fromAminoMsg(object: _258.MsgOverwriteDelegationRecordResponseAminoMsg): _258.MsgOverwriteDelegationRecordResponse;
            fromProtoMsg(message: _258.MsgOverwriteDelegationRecordResponseProtoMsg): _258.MsgOverwriteDelegationRecordResponse;
            toProto(message: _258.MsgOverwriteDelegationRecordResponse): Uint8Array;
            toProtoMsg(message: _258.MsgOverwriteDelegationRecordResponse): _258.MsgOverwriteDelegationRecordResponseProtoMsg;
        };
        MsgOverwriteUnbondingRecord: {
            typeUrl: string;
            encode(message: _258.MsgOverwriteUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.MsgOverwriteUnbondingRecord;
            fromPartial(object: Partial<_258.MsgOverwriteUnbondingRecord>): _258.MsgOverwriteUnbondingRecord;
            fromAmino(object: _258.MsgOverwriteUnbondingRecordAmino): _258.MsgOverwriteUnbondingRecord;
            toAmino(message: _258.MsgOverwriteUnbondingRecord): _258.MsgOverwriteUnbondingRecordAmino;
            fromAminoMsg(object: _258.MsgOverwriteUnbondingRecordAminoMsg): _258.MsgOverwriteUnbondingRecord;
            toAminoMsg(message: _258.MsgOverwriteUnbondingRecord): _258.MsgOverwriteUnbondingRecordAminoMsg;
            fromProtoMsg(message: _258.MsgOverwriteUnbondingRecordProtoMsg): _258.MsgOverwriteUnbondingRecord;
            toProto(message: _258.MsgOverwriteUnbondingRecord): Uint8Array;
            toProtoMsg(message: _258.MsgOverwriteUnbondingRecord): _258.MsgOverwriteUnbondingRecordProtoMsg;
        };
        MsgOverwriteUnbondingRecordResponse: {
            typeUrl: string;
            encode(_: _258.MsgOverwriteUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.MsgOverwriteUnbondingRecordResponse;
            fromPartial(_: Partial<_258.MsgOverwriteUnbondingRecordResponse>): _258.MsgOverwriteUnbondingRecordResponse;
            fromAmino(_: _258.MsgOverwriteUnbondingRecordResponseAmino): _258.MsgOverwriteUnbondingRecordResponse;
            toAmino(_: _258.MsgOverwriteUnbondingRecordResponse): _258.MsgOverwriteUnbondingRecordResponseAmino;
            fromAminoMsg(object: _258.MsgOverwriteUnbondingRecordResponseAminoMsg): _258.MsgOverwriteUnbondingRecordResponse;
            fromProtoMsg(message: _258.MsgOverwriteUnbondingRecordResponseProtoMsg): _258.MsgOverwriteUnbondingRecordResponse;
            toProto(message: _258.MsgOverwriteUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _258.MsgOverwriteUnbondingRecordResponse): _258.MsgOverwriteUnbondingRecordResponseProtoMsg;
        };
        MsgOverwriteRedemptionRecord: {
            typeUrl: string;
            encode(message: _258.MsgOverwriteRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.MsgOverwriteRedemptionRecord;
            fromPartial(object: Partial<_258.MsgOverwriteRedemptionRecord>): _258.MsgOverwriteRedemptionRecord;
            fromAmino(object: _258.MsgOverwriteRedemptionRecordAmino): _258.MsgOverwriteRedemptionRecord;
            toAmino(message: _258.MsgOverwriteRedemptionRecord): _258.MsgOverwriteRedemptionRecordAmino;
            fromAminoMsg(object: _258.MsgOverwriteRedemptionRecordAminoMsg): _258.MsgOverwriteRedemptionRecord;
            toAminoMsg(message: _258.MsgOverwriteRedemptionRecord): _258.MsgOverwriteRedemptionRecordAminoMsg;
            fromProtoMsg(message: _258.MsgOverwriteRedemptionRecordProtoMsg): _258.MsgOverwriteRedemptionRecord;
            toProto(message: _258.MsgOverwriteRedemptionRecord): Uint8Array;
            toProtoMsg(message: _258.MsgOverwriteRedemptionRecord): _258.MsgOverwriteRedemptionRecordProtoMsg;
        };
        MsgOverwriteRedemptionRecordResponse: {
            typeUrl: string;
            encode(_: _258.MsgOverwriteRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.MsgOverwriteRedemptionRecordResponse;
            fromPartial(_: Partial<_258.MsgOverwriteRedemptionRecordResponse>): _258.MsgOverwriteRedemptionRecordResponse;
            fromAmino(_: _258.MsgOverwriteRedemptionRecordResponseAmino): _258.MsgOverwriteRedemptionRecordResponse;
            toAmino(_: _258.MsgOverwriteRedemptionRecordResponse): _258.MsgOverwriteRedemptionRecordResponseAmino;
            fromAminoMsg(object: _258.MsgOverwriteRedemptionRecordResponseAminoMsg): _258.MsgOverwriteRedemptionRecordResponse;
            fromProtoMsg(message: _258.MsgOverwriteRedemptionRecordResponseProtoMsg): _258.MsgOverwriteRedemptionRecordResponse;
            toProto(message: _258.MsgOverwriteRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _258.MsgOverwriteRedemptionRecordResponse): _258.MsgOverwriteRedemptionRecordResponseProtoMsg;
        };
        MsgSetOperatorAddress: {
            typeUrl: string;
            encode(message: _258.MsgSetOperatorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.MsgSetOperatorAddress;
            fromPartial(object: Partial<_258.MsgSetOperatorAddress>): _258.MsgSetOperatorAddress;
            fromAmino(object: _258.MsgSetOperatorAddressAmino): _258.MsgSetOperatorAddress;
            toAmino(message: _258.MsgSetOperatorAddress): _258.MsgSetOperatorAddressAmino;
            fromAminoMsg(object: _258.MsgSetOperatorAddressAminoMsg): _258.MsgSetOperatorAddress;
            toAminoMsg(message: _258.MsgSetOperatorAddress): _258.MsgSetOperatorAddressAminoMsg;
            fromProtoMsg(message: _258.MsgSetOperatorAddressProtoMsg): _258.MsgSetOperatorAddress;
            toProto(message: _258.MsgSetOperatorAddress): Uint8Array;
            toProtoMsg(message: _258.MsgSetOperatorAddress): _258.MsgSetOperatorAddressProtoMsg;
        };
        MsgSetOperatorAddressResponse: {
            typeUrl: string;
            encode(_: _258.MsgSetOperatorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _258.MsgSetOperatorAddressResponse;
            fromPartial(_: Partial<_258.MsgSetOperatorAddressResponse>): _258.MsgSetOperatorAddressResponse;
            fromAmino(_: _258.MsgSetOperatorAddressResponseAmino): _258.MsgSetOperatorAddressResponse;
            toAmino(_: _258.MsgSetOperatorAddressResponse): _258.MsgSetOperatorAddressResponseAmino;
            fromAminoMsg(object: _258.MsgSetOperatorAddressResponseAminoMsg): _258.MsgSetOperatorAddressResponse;
            fromProtoMsg(message: _258.MsgSetOperatorAddressResponseProtoMsg): _258.MsgSetOperatorAddressResponse;
            toProto(message: _258.MsgSetOperatorAddressResponse): Uint8Array;
            toProtoMsg(message: _258.MsgSetOperatorAddressResponse): _258.MsgSetOperatorAddressResponseProtoMsg;
        };
        delegationRecordStatusFromJSON(object: any): _257.DelegationRecordStatus;
        delegationRecordStatusToJSON(object: _257.DelegationRecordStatus): string;
        unbondingRecordStatusFromJSON(object: any): _257.UnbondingRecordStatus;
        unbondingRecordStatusToJSON(object: _257.UnbondingRecordStatus): string;
        DelegationRecordStatus: typeof _257.DelegationRecordStatus;
        DelegationRecordStatusSDKType: typeof _257.DelegationRecordStatus;
        DelegationRecordStatusAmino: typeof _257.DelegationRecordStatus;
        UnbondingRecordStatus: typeof _257.UnbondingRecordStatus;
        UnbondingRecordStatusSDKType: typeof _257.UnbondingRecordStatus;
        UnbondingRecordStatusAmino: typeof _257.UnbondingRecordStatus;
        HostZone: {
            typeUrl: string;
            encode(message: _257.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.HostZone;
            fromPartial(object: Partial<_257.HostZone>): _257.HostZone;
            fromAmino(object: _257.HostZoneAmino): _257.HostZone;
            toAmino(message: _257.HostZone): _257.HostZoneAmino;
            fromAminoMsg(object: _257.HostZoneAminoMsg): _257.HostZone;
            fromProtoMsg(message: _257.HostZoneProtoMsg): _257.HostZone;
            toProto(message: _257.HostZone): Uint8Array;
            toProtoMsg(message: _257.HostZone): _257.HostZoneProtoMsg;
        };
        DelegationRecord: {
            typeUrl: string;
            encode(message: _257.DelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.DelegationRecord;
            fromPartial(object: Partial<_257.DelegationRecord>): _257.DelegationRecord;
            fromAmino(object: _257.DelegationRecordAmino): _257.DelegationRecord;
            toAmino(message: _257.DelegationRecord): _257.DelegationRecordAmino;
            fromAminoMsg(object: _257.DelegationRecordAminoMsg): _257.DelegationRecord;
            fromProtoMsg(message: _257.DelegationRecordProtoMsg): _257.DelegationRecord;
            toProto(message: _257.DelegationRecord): Uint8Array;
            toProtoMsg(message: _257.DelegationRecord): _257.DelegationRecordProtoMsg;
        };
        UnbondingRecord: {
            typeUrl: string;
            encode(message: _257.UnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.UnbondingRecord;
            fromPartial(object: Partial<_257.UnbondingRecord>): _257.UnbondingRecord;
            fromAmino(object: _257.UnbondingRecordAmino): _257.UnbondingRecord;
            toAmino(message: _257.UnbondingRecord): _257.UnbondingRecordAmino;
            fromAminoMsg(object: _257.UnbondingRecordAminoMsg): _257.UnbondingRecord;
            fromProtoMsg(message: _257.UnbondingRecordProtoMsg): _257.UnbondingRecord;
            toProto(message: _257.UnbondingRecord): Uint8Array;
            toProtoMsg(message: _257.UnbondingRecord): _257.UnbondingRecordProtoMsg;
        };
        RedemptionRecord: {
            typeUrl: string;
            encode(message: _257.RedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.RedemptionRecord;
            fromPartial(object: Partial<_257.RedemptionRecord>): _257.RedemptionRecord;
            fromAmino(object: _257.RedemptionRecordAmino): _257.RedemptionRecord;
            toAmino(message: _257.RedemptionRecord): _257.RedemptionRecordAmino;
            fromAminoMsg(object: _257.RedemptionRecordAminoMsg): _257.RedemptionRecord;
            fromProtoMsg(message: _257.RedemptionRecordProtoMsg): _257.RedemptionRecord;
            toProto(message: _257.RedemptionRecord): Uint8Array;
            toProtoMsg(message: _257.RedemptionRecord): _257.RedemptionRecordProtoMsg;
        };
        SlashRecord: {
            typeUrl: string;
            encode(message: _257.SlashRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.SlashRecord;
            fromPartial(object: Partial<_257.SlashRecord>): _257.SlashRecord;
            fromAmino(object: _257.SlashRecordAmino): _257.SlashRecord;
            toAmino(message: _257.SlashRecord): _257.SlashRecordAmino;
            fromAminoMsg(object: _257.SlashRecordAminoMsg): _257.SlashRecord;
            fromProtoMsg(message: _257.SlashRecordProtoMsg): _257.SlashRecord;
            toProto(message: _257.SlashRecord): Uint8Array;
            toProtoMsg(message: _257.SlashRecord): _257.SlashRecordProtoMsg;
        };
        QueryHostZoneRequest: {
            typeUrl: string;
            encode(_: _256.QueryHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _256.QueryHostZoneRequest;
            fromPartial(_: Partial<_256.QueryHostZoneRequest>): _256.QueryHostZoneRequest;
            fromAmino(_: _256.QueryHostZoneRequestAmino): _256.QueryHostZoneRequest;
            toAmino(_: _256.QueryHostZoneRequest): _256.QueryHostZoneRequestAmino;
            fromAminoMsg(object: _256.QueryHostZoneRequestAminoMsg): _256.QueryHostZoneRequest;
            fromProtoMsg(message: _256.QueryHostZoneRequestProtoMsg): _256.QueryHostZoneRequest;
            toProto(message: _256.QueryHostZoneRequest): Uint8Array;
            toProtoMsg(message: _256.QueryHostZoneRequest): _256.QueryHostZoneRequestProtoMsg;
        };
        QueryHostZoneResponse: {
            typeUrl: string;
            encode(message: _256.QueryHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _256.QueryHostZoneResponse;
            fromPartial(object: Partial<_256.QueryHostZoneResponse>): _256.QueryHostZoneResponse;
            fromAmino(object: _256.QueryHostZoneResponseAmino): _256.QueryHostZoneResponse;
            toAmino(message: _256.QueryHostZoneResponse): _256.QueryHostZoneResponseAmino;
            fromAminoMsg(object: _256.QueryHostZoneResponseAminoMsg): _256.QueryHostZoneResponse;
            fromProtoMsg(message: _256.QueryHostZoneResponseProtoMsg): _256.QueryHostZoneResponse;
            toProto(message: _256.QueryHostZoneResponse): Uint8Array;
            toProtoMsg(message: _256.QueryHostZoneResponse): _256.QueryHostZoneResponseProtoMsg;
        };
        QueryDelegationRecordsRequest: {
            typeUrl: string;
            encode(message: _256.QueryDelegationRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _256.QueryDelegationRecordsRequest;
            fromPartial(object: Partial<_256.QueryDelegationRecordsRequest>): _256.QueryDelegationRecordsRequest;
            fromAmino(object: _256.QueryDelegationRecordsRequestAmino): _256.QueryDelegationRecordsRequest;
            toAmino(message: _256.QueryDelegationRecordsRequest): _256.QueryDelegationRecordsRequestAmino;
            fromAminoMsg(object: _256.QueryDelegationRecordsRequestAminoMsg): _256.QueryDelegationRecordsRequest;
            fromProtoMsg(message: _256.QueryDelegationRecordsRequestProtoMsg): _256.QueryDelegationRecordsRequest;
            toProto(message: _256.QueryDelegationRecordsRequest): Uint8Array;
            toProtoMsg(message: _256.QueryDelegationRecordsRequest): _256.QueryDelegationRecordsRequestProtoMsg;
        };
        QueryDelegationRecordsResponse: {
            typeUrl: string;
            encode(message: _256.QueryDelegationRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _256.QueryDelegationRecordsResponse;
            fromPartial(object: Partial<_256.QueryDelegationRecordsResponse>): _256.QueryDelegationRecordsResponse;
            fromAmino(object: _256.QueryDelegationRecordsResponseAmino): _256.QueryDelegationRecordsResponse;
            toAmino(message: _256.QueryDelegationRecordsResponse): _256.QueryDelegationRecordsResponseAmino;
            fromAminoMsg(object: _256.QueryDelegationRecordsResponseAminoMsg): _256.QueryDelegationRecordsResponse;
            fromProtoMsg(message: _256.QueryDelegationRecordsResponseProtoMsg): _256.QueryDelegationRecordsResponse;
            toProto(message: _256.QueryDelegationRecordsResponse): Uint8Array;
            toProtoMsg(message: _256.QueryDelegationRecordsResponse): _256.QueryDelegationRecordsResponseProtoMsg;
        };
        QueryUnbondingRecordsRequest: {
            typeUrl: string;
            encode(message: _256.QueryUnbondingRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _256.QueryUnbondingRecordsRequest;
            fromPartial(object: Partial<_256.QueryUnbondingRecordsRequest>): _256.QueryUnbondingRecordsRequest;
            fromAmino(object: _256.QueryUnbondingRecordsRequestAmino): _256.QueryUnbondingRecordsRequest;
            toAmino(message: _256.QueryUnbondingRecordsRequest): _256.QueryUnbondingRecordsRequestAmino;
            fromAminoMsg(object: _256.QueryUnbondingRecordsRequestAminoMsg): _256.QueryUnbondingRecordsRequest;
            fromProtoMsg(message: _256.QueryUnbondingRecordsRequestProtoMsg): _256.QueryUnbondingRecordsRequest;
            toProto(message: _256.QueryUnbondingRecordsRequest): Uint8Array;
            toProtoMsg(message: _256.QueryUnbondingRecordsRequest): _256.QueryUnbondingRecordsRequestProtoMsg;
        };
        QueryUnbondingRecordsResponse: {
            typeUrl: string;
            encode(message: _256.QueryUnbondingRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _256.QueryUnbondingRecordsResponse;
            fromPartial(object: Partial<_256.QueryUnbondingRecordsResponse>): _256.QueryUnbondingRecordsResponse;
            fromAmino(object: _256.QueryUnbondingRecordsResponseAmino): _256.QueryUnbondingRecordsResponse;
            toAmino(message: _256.QueryUnbondingRecordsResponse): _256.QueryUnbondingRecordsResponseAmino;
            fromAminoMsg(object: _256.QueryUnbondingRecordsResponseAminoMsg): _256.QueryUnbondingRecordsResponse;
            fromProtoMsg(message: _256.QueryUnbondingRecordsResponseProtoMsg): _256.QueryUnbondingRecordsResponse;
            toProto(message: _256.QueryUnbondingRecordsResponse): Uint8Array;
            toProtoMsg(message: _256.QueryUnbondingRecordsResponse): _256.QueryUnbondingRecordsResponseProtoMsg;
        };
        QueryRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _256.QueryRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _256.QueryRedemptionRecordRequest;
            fromPartial(object: Partial<_256.QueryRedemptionRecordRequest>): _256.QueryRedemptionRecordRequest;
            fromAmino(object: _256.QueryRedemptionRecordRequestAmino): _256.QueryRedemptionRecordRequest;
            toAmino(message: _256.QueryRedemptionRecordRequest): _256.QueryRedemptionRecordRequestAmino;
            fromAminoMsg(object: _256.QueryRedemptionRecordRequestAminoMsg): _256.QueryRedemptionRecordRequest;
            fromProtoMsg(message: _256.QueryRedemptionRecordRequestProtoMsg): _256.QueryRedemptionRecordRequest;
            toProto(message: _256.QueryRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _256.QueryRedemptionRecordRequest): _256.QueryRedemptionRecordRequestProtoMsg;
        };
        QueryRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _256.QueryRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _256.QueryRedemptionRecordResponse;
            fromPartial(object: Partial<_256.QueryRedemptionRecordResponse>): _256.QueryRedemptionRecordResponse;
            fromAmino(object: _256.QueryRedemptionRecordResponseAmino): _256.QueryRedemptionRecordResponse;
            toAmino(message: _256.QueryRedemptionRecordResponse): _256.QueryRedemptionRecordResponseAmino;
            fromAminoMsg(object: _256.QueryRedemptionRecordResponseAminoMsg): _256.QueryRedemptionRecordResponse;
            fromProtoMsg(message: _256.QueryRedemptionRecordResponseProtoMsg): _256.QueryRedemptionRecordResponse;
            toProto(message: _256.QueryRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _256.QueryRedemptionRecordResponse): _256.QueryRedemptionRecordResponseProtoMsg;
        };
        QueryRedemptionRecordsRequest: {
            typeUrl: string;
            encode(message: _256.QueryRedemptionRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _256.QueryRedemptionRecordsRequest;
            fromPartial(object: Partial<_256.QueryRedemptionRecordsRequest>): _256.QueryRedemptionRecordsRequest;
            fromAmino(object: _256.QueryRedemptionRecordsRequestAmino): _256.QueryRedemptionRecordsRequest;
            toAmino(message: _256.QueryRedemptionRecordsRequest): _256.QueryRedemptionRecordsRequestAmino;
            fromAminoMsg(object: _256.QueryRedemptionRecordsRequestAminoMsg): _256.QueryRedemptionRecordsRequest;
            fromProtoMsg(message: _256.QueryRedemptionRecordsRequestProtoMsg): _256.QueryRedemptionRecordsRequest;
            toProto(message: _256.QueryRedemptionRecordsRequest): Uint8Array;
            toProtoMsg(message: _256.QueryRedemptionRecordsRequest): _256.QueryRedemptionRecordsRequestProtoMsg;
        };
        QueryRedemptionRecordsResponse: {
            typeUrl: string;
            encode(message: _256.QueryRedemptionRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _256.QueryRedemptionRecordsResponse;
            fromPartial(object: Partial<_256.QueryRedemptionRecordsResponse>): _256.QueryRedemptionRecordsResponse;
            fromAmino(object: _256.QueryRedemptionRecordsResponseAmino): _256.QueryRedemptionRecordsResponse;
            toAmino(message: _256.QueryRedemptionRecordsResponse): _256.QueryRedemptionRecordsResponseAmino;
            fromAminoMsg(object: _256.QueryRedemptionRecordsResponseAminoMsg): _256.QueryRedemptionRecordsResponse;
            fromProtoMsg(message: _256.QueryRedemptionRecordsResponseProtoMsg): _256.QueryRedemptionRecordsResponse;
            toProto(message: _256.QueryRedemptionRecordsResponse): Uint8Array;
            toProtoMsg(message: _256.QueryRedemptionRecordsResponse): _256.QueryRedemptionRecordsResponseProtoMsg;
        };
        QuerySlashRecordsRequest: {
            typeUrl: string;
            encode(_: _256.QuerySlashRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _256.QuerySlashRecordsRequest;
            fromPartial(_: Partial<_256.QuerySlashRecordsRequest>): _256.QuerySlashRecordsRequest;
            fromAmino(_: _256.QuerySlashRecordsRequestAmino): _256.QuerySlashRecordsRequest;
            toAmino(_: _256.QuerySlashRecordsRequest): _256.QuerySlashRecordsRequestAmino;
            fromAminoMsg(object: _256.QuerySlashRecordsRequestAminoMsg): _256.QuerySlashRecordsRequest;
            fromProtoMsg(message: _256.QuerySlashRecordsRequestProtoMsg): _256.QuerySlashRecordsRequest;
            toProto(message: _256.QuerySlashRecordsRequest): Uint8Array;
            toProtoMsg(message: _256.QuerySlashRecordsRequest): _256.QuerySlashRecordsRequestProtoMsg;
        };
        QuerySlashRecordsResponse: {
            typeUrl: string;
            encode(message: _256.QuerySlashRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _256.QuerySlashRecordsResponse;
            fromPartial(object: Partial<_256.QuerySlashRecordsResponse>): _256.QuerySlashRecordsResponse;
            fromAmino(object: _256.QuerySlashRecordsResponseAmino): _256.QuerySlashRecordsResponse;
            toAmino(message: _256.QuerySlashRecordsResponse): _256.QuerySlashRecordsResponseAmino;
            fromAminoMsg(object: _256.QuerySlashRecordsResponseAminoMsg): _256.QuerySlashRecordsResponse;
            fromProtoMsg(message: _256.QuerySlashRecordsResponseProtoMsg): _256.QuerySlashRecordsResponse;
            toProto(message: _256.QuerySlashRecordsResponse): Uint8Array;
            toProtoMsg(message: _256.QuerySlashRecordsResponse): _256.QuerySlashRecordsResponseProtoMsg;
        };
        RedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _256.RedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _256.RedemptionRecordResponse;
            fromPartial(object: Partial<_256.RedemptionRecordResponse>): _256.RedemptionRecordResponse;
            fromAmino(object: _256.RedemptionRecordResponseAmino): _256.RedemptionRecordResponse;
            toAmino(message: _256.RedemptionRecordResponse): _256.RedemptionRecordResponseAmino;
            fromAminoMsg(object: _256.RedemptionRecordResponseAminoMsg): _256.RedemptionRecordResponse;
            fromProtoMsg(message: _256.RedemptionRecordResponseProtoMsg): _256.RedemptionRecordResponse;
            toProto(message: _256.RedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _256.RedemptionRecordResponse): _256.RedemptionRecordResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _255.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.Params;
            fromPartial(_: Partial<_255.Params>): _255.Params;
            fromAmino(_: _255.ParamsAmino): _255.Params;
            toAmino(_: _255.Params): _255.ParamsAmino;
            fromAminoMsg(object: _255.ParamsAminoMsg): _255.Params;
            fromProtoMsg(message: _255.ParamsProtoMsg): _255.Params;
            toProto(message: _255.Params): Uint8Array;
            toProtoMsg(message: _255.Params): _255.ParamsProtoMsg;
        };
        TransferInProgressRecordIds: {
            typeUrl: string;
            encode(message: _255.TransferInProgressRecordIds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.TransferInProgressRecordIds;
            fromPartial(object: Partial<_255.TransferInProgressRecordIds>): _255.TransferInProgressRecordIds;
            fromAmino(object: _255.TransferInProgressRecordIdsAmino): _255.TransferInProgressRecordIds;
            toAmino(message: _255.TransferInProgressRecordIds): _255.TransferInProgressRecordIdsAmino;
            fromAminoMsg(object: _255.TransferInProgressRecordIdsAminoMsg): _255.TransferInProgressRecordIds;
            fromProtoMsg(message: _255.TransferInProgressRecordIdsProtoMsg): _255.TransferInProgressRecordIds;
            toProto(message: _255.TransferInProgressRecordIds): Uint8Array;
            toProtoMsg(message: _255.TransferInProgressRecordIds): _255.TransferInProgressRecordIdsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _255.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.GenesisState;
            fromPartial(object: Partial<_255.GenesisState>): _255.GenesisState;
            fromAmino(object: _255.GenesisStateAmino): _255.GenesisState;
            toAmino(message: _255.GenesisState): _255.GenesisStateAmino;
            fromAminoMsg(object: _255.GenesisStateAminoMsg): _255.GenesisState;
            fromProtoMsg(message: _255.GenesisStateProtoMsg): _255.GenesisState;
            toProto(message: _255.GenesisState): Uint8Array;
            toProtoMsg(message: _255.GenesisState): _255.GenesisStateProtoMsg;
        };
    };
    const strdburner: {
        QueryClientImpl: typeof _417.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            strdBurnerAddress(request?: _260.QueryStrdBurnerAddressRequest): Promise<_260.QueryStrdBurnerAddressResponse>;
            totalStrdBurned(request?: _260.QueryTotalStrdBurnedRequest): Promise<_260.QueryTotalStrdBurnedResponse>;
        };
        QueryStrdBurnerAddressRequest: {
            typeUrl: string;
            encode(_: _260.QueryStrdBurnerAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _260.QueryStrdBurnerAddressRequest;
            fromPartial(_: Partial<_260.QueryStrdBurnerAddressRequest>): _260.QueryStrdBurnerAddressRequest;
            fromAmino(_: _260.QueryStrdBurnerAddressRequestAmino): _260.QueryStrdBurnerAddressRequest;
            toAmino(_: _260.QueryStrdBurnerAddressRequest): _260.QueryStrdBurnerAddressRequestAmino;
            fromAminoMsg(object: _260.QueryStrdBurnerAddressRequestAminoMsg): _260.QueryStrdBurnerAddressRequest;
            fromProtoMsg(message: _260.QueryStrdBurnerAddressRequestProtoMsg): _260.QueryStrdBurnerAddressRequest;
            toProto(message: _260.QueryStrdBurnerAddressRequest): Uint8Array;
            toProtoMsg(message: _260.QueryStrdBurnerAddressRequest): _260.QueryStrdBurnerAddressRequestProtoMsg;
        };
        QueryStrdBurnerAddressResponse: {
            typeUrl: string;
            encode(message: _260.QueryStrdBurnerAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _260.QueryStrdBurnerAddressResponse;
            fromPartial(object: Partial<_260.QueryStrdBurnerAddressResponse>): _260.QueryStrdBurnerAddressResponse;
            fromAmino(object: _260.QueryStrdBurnerAddressResponseAmino): _260.QueryStrdBurnerAddressResponse;
            toAmino(message: _260.QueryStrdBurnerAddressResponse): _260.QueryStrdBurnerAddressResponseAmino;
            fromAminoMsg(object: _260.QueryStrdBurnerAddressResponseAminoMsg): _260.QueryStrdBurnerAddressResponse;
            fromProtoMsg(message: _260.QueryStrdBurnerAddressResponseProtoMsg): _260.QueryStrdBurnerAddressResponse;
            toProto(message: _260.QueryStrdBurnerAddressResponse): Uint8Array;
            toProtoMsg(message: _260.QueryStrdBurnerAddressResponse): _260.QueryStrdBurnerAddressResponseProtoMsg;
        };
        QueryTotalStrdBurnedRequest: {
            typeUrl: string;
            encode(_: _260.QueryTotalStrdBurnedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _260.QueryTotalStrdBurnedRequest;
            fromPartial(_: Partial<_260.QueryTotalStrdBurnedRequest>): _260.QueryTotalStrdBurnedRequest;
            fromAmino(_: _260.QueryTotalStrdBurnedRequestAmino): _260.QueryTotalStrdBurnedRequest;
            toAmino(_: _260.QueryTotalStrdBurnedRequest): _260.QueryTotalStrdBurnedRequestAmino;
            fromAminoMsg(object: _260.QueryTotalStrdBurnedRequestAminoMsg): _260.QueryTotalStrdBurnedRequest;
            fromProtoMsg(message: _260.QueryTotalStrdBurnedRequestProtoMsg): _260.QueryTotalStrdBurnedRequest;
            toProto(message: _260.QueryTotalStrdBurnedRequest): Uint8Array;
            toProtoMsg(message: _260.QueryTotalStrdBurnedRequest): _260.QueryTotalStrdBurnedRequestProtoMsg;
        };
        QueryTotalStrdBurnedResponse: {
            typeUrl: string;
            encode(message: _260.QueryTotalStrdBurnedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _260.QueryTotalStrdBurnedResponse;
            fromPartial(object: Partial<_260.QueryTotalStrdBurnedResponse>): _260.QueryTotalStrdBurnedResponse;
            fromAmino(object: _260.QueryTotalStrdBurnedResponseAmino): _260.QueryTotalStrdBurnedResponse;
            toAmino(message: _260.QueryTotalStrdBurnedResponse): _260.QueryTotalStrdBurnedResponseAmino;
            fromAminoMsg(object: _260.QueryTotalStrdBurnedResponseAminoMsg): _260.QueryTotalStrdBurnedResponse;
            fromProtoMsg(message: _260.QueryTotalStrdBurnedResponseProtoMsg): _260.QueryTotalStrdBurnedResponse;
            toProto(message: _260.QueryTotalStrdBurnedResponse): Uint8Array;
            toProtoMsg(message: _260.QueryTotalStrdBurnedResponse): _260.QueryTotalStrdBurnedResponseProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _259.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.GenesisState;
            fromPartial(object: Partial<_259.GenesisState>): _259.GenesisState;
            fromAmino(object: _259.GenesisStateAmino): _259.GenesisState;
            toAmino(message: _259.GenesisState): _259.GenesisStateAmino;
            fromAminoMsg(object: _259.GenesisStateAminoMsg): _259.GenesisState;
            fromProtoMsg(message: _259.GenesisStateProtoMsg): _259.GenesisState;
            toProto(message: _259.GenesisState): Uint8Array;
            toProtoMsg(message: _259.GenesisState): _259.GenesisStateProtoMsg;
        };
    };
    const vesting: {
        BaseVestingAccount: {
            typeUrl: string;
            encode(message: _261.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _261.BaseVestingAccount;
            fromPartial(object: Partial<_261.BaseVestingAccount>): _261.BaseVestingAccount;
            fromAmino(object: _261.BaseVestingAccountAmino): _261.BaseVestingAccount;
            toAmino(message: _261.BaseVestingAccount): _261.BaseVestingAccountAmino;
            fromAminoMsg(object: _261.BaseVestingAccountAminoMsg): _261.BaseVestingAccount;
            fromProtoMsg(message: _261.BaseVestingAccountProtoMsg): _261.BaseVestingAccount;
            toProto(message: _261.BaseVestingAccount): Uint8Array;
            toProtoMsg(message: _261.BaseVestingAccount): _261.BaseVestingAccountProtoMsg;
        };
        Period: {
            typeUrl: string;
            encode(message: _261.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _261.Period;
            fromPartial(object: Partial<_261.Period>): _261.Period;
            fromAmino(object: _261.PeriodAmino): _261.Period;
            toAmino(message: _261.Period): _261.PeriodAmino;
            fromAminoMsg(object: _261.PeriodAminoMsg): _261.Period;
            fromProtoMsg(message: _261.PeriodProtoMsg): _261.Period;
            toProto(message: _261.Period): Uint8Array;
            toProtoMsg(message: _261.Period): _261.PeriodProtoMsg;
        };
        StridePeriodicVestingAccount: {
            typeUrl: string;
            encode(message: _261.StridePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _261.StridePeriodicVestingAccount;
            fromPartial(object: Partial<_261.StridePeriodicVestingAccount>): _261.StridePeriodicVestingAccount;
            fromAmino(object: _261.StridePeriodicVestingAccountAmino): _261.StridePeriodicVestingAccount;
            toAmino(message: _261.StridePeriodicVestingAccount): _261.StridePeriodicVestingAccountAmino;
            fromAminoMsg(object: _261.StridePeriodicVestingAccountAminoMsg): _261.StridePeriodicVestingAccount;
            toAminoMsg(message: _261.StridePeriodicVestingAccount): _261.StridePeriodicVestingAccountAminoMsg;
            fromProtoMsg(message: _261.StridePeriodicVestingAccountProtoMsg): _261.StridePeriodicVestingAccount;
            toProto(message: _261.StridePeriodicVestingAccount): Uint8Array;
            toProtoMsg(message: _261.StridePeriodicVestingAccount): _261.StridePeriodicVestingAccountProtoMsg;
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
                airdrop: _418.MsgClientImpl;
                auction: _419.MsgClientImpl;
                claim: _420.MsgClientImpl;
                icaoracle: _421.MsgClientImpl;
                icqoracle: _422.MsgClientImpl;
                interchainquery: {
                    v1: _423.MsgClientImpl;
                };
                stakedym: _424.MsgClientImpl;
                stakeibc: _425.MsgClientImpl;
                staketia: _426.MsgClientImpl;
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
                    airdrop(request: _196.QueryAirdropRequest): Promise<_196.QueryAirdropResponse>;
                    allAirdrops(request?: _196.QueryAllAirdropsRequest): Promise<_196.QueryAllAirdropsResponse>;
                    userAllocation(request: _196.QueryUserAllocationRequest): Promise<_196.QueryUserAllocationResponse>;
                    userAllocations(request: _196.QueryUserAllocationsRequest): Promise<_196.QueryUserAllocationsResponse>;
                    allAllocations(request: _196.QueryAllAllocationsRequest): Promise<_196.QueryAllAllocationsResponse>;
                    userSummary(request: _196.QueryUserSummaryRequest): Promise<_196.QueryUserSummaryResponse>;
                };
                auction: {
                    auction(request: _200.QueryAuctionRequest): Promise<_200.QueryAuctionResponse>;
                    auctions(request?: _200.QueryAuctionsRequest): Promise<_200.QueryAuctionsResponse>;
                };
                autopilot: {
                    params(request?: _204.QueryParamsRequest): Promise<_204.QueryParamsResponse>;
                };
                claim: {
                    distributorAccountBalance(request: _208.QueryDistributorAccountBalanceRequest): Promise<_208.QueryDistributorAccountBalanceResponse>;
                    params(request?: _208.QueryParamsRequest): Promise<_208.QueryParamsResponse>;
                    claimRecord(request: _208.QueryClaimRecordRequest): Promise<_208.QueryClaimRecordResponse>;
                    claimableForAction(request: _208.QueryClaimableForActionRequest): Promise<_208.QueryClaimableForActionResponse>;
                    totalClaimable(request: _208.QueryTotalClaimableRequest): Promise<_208.QueryTotalClaimableResponse>;
                    userVestings(request: _208.QueryUserVestingsRequest): Promise<_208.QueryUserVestingsResponse>;
                    claimStatus(request: _208.QueryClaimStatusRequest): Promise<_208.QueryClaimStatusResponse>;
                    claimMetadata(request?: _208.QueryClaimMetadataRequest): Promise<_208.QueryClaimMetadataResponse>;
                };
                epochs: {
                    epochInfos(request?: _211.QueryEpochsInfoRequest): Promise<_211.QueryEpochsInfoResponse>;
                    currentEpoch(request: _211.QueryCurrentEpochRequest): Promise<_211.QueryCurrentEpochResponse>;
                    epochInfo(request: _211.QueryEpochInfoRequest): Promise<_211.QueryEpochInfoResponse>;
                };
                icacallbacks: {
                    params(request?: _216.QueryParamsRequest): Promise<_216.QueryParamsResponse>;
                    callbackData(request: _216.QueryGetCallbackDataRequest): Promise<_216.QueryGetCallbackDataResponse>;
                    callbackDataAll(request?: _216.QueryAllCallbackDataRequest): Promise<_216.QueryAllCallbackDataResponse>;
                };
                icaoracle: {
                    oracle(request: _221.QueryOracleRequest): Promise<_221.QueryOracleResponse>;
                    allOracles(request?: _221.QueryAllOraclesRequest): Promise<_221.QueryAllOraclesResponse>;
                    activeOracles(request: _221.QueryActiveOraclesRequest): Promise<_221.QueryActiveOraclesResponse>;
                    metrics(request: _221.QueryMetricsRequest): Promise<_221.QueryMetricsResponse>;
                };
                icqoracle: {
                    tokenPrice(request: _225.QueryTokenPriceRequest): Promise<_225.TokenPriceResponse>;
                    tokenPrices(request?: _225.QueryTokenPricesRequest): Promise<_225.QueryTokenPricesResponse>;
                    params(request?: _225.QueryParamsRequest): Promise<_225.QueryParamsResponse>;
                    tokenPriceForQuoteDenom(request: _225.QueryTokenPriceForQuoteDenomRequest): Promise<_225.QueryTokenPriceForQuoteDenomResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _232.QueryParamsRequest): Promise<_232.QueryParamsResponse>;
                        epochProvisions(request?: _232.QueryEpochProvisionsRequest): Promise<_232.QueryEpochProvisionsResponse>;
                    };
                };
                records: {
                    params(request?: _236.QueryParamsRequest): Promise<_236.QueryParamsResponse>;
                    userRedemptionRecord(request: _236.QueryGetUserRedemptionRecordRequest): Promise<_236.QueryGetUserRedemptionRecordResponse>;
                    userRedemptionRecordAll(request?: _236.QueryAllUserRedemptionRecordRequest): Promise<_236.QueryAllUserRedemptionRecordResponse>;
                    userRedemptionRecordForUser(request: _236.QueryAllUserRedemptionRecordForUserRequest): Promise<_236.QueryAllUserRedemptionRecordForUserResponse>;
                    epochUnbondingRecord(request: _236.QueryGetEpochUnbondingRecordRequest): Promise<_236.QueryGetEpochUnbondingRecordResponse>;
                    epochUnbondingRecordAll(request?: _236.QueryAllEpochUnbondingRecordRequest): Promise<_236.QueryAllEpochUnbondingRecordResponse>;
                    depositRecord(request: _236.QueryGetDepositRecordRequest): Promise<_236.QueryGetDepositRecordResponse>;
                    depositRecordAll(request?: _236.QueryAllDepositRecordRequest): Promise<_236.QueryAllDepositRecordResponse>;
                    depositRecordByHost(request: _236.QueryDepositRecordByHostRequest): Promise<_236.QueryDepositRecordByHostResponse>;
                    lSMDeposit(request: _236.QueryLSMDepositRequest): Promise<_236.QueryLSMDepositResponse>;
                    lSMDeposits(request: _236.QueryLSMDepositsRequest): Promise<_236.QueryLSMDepositsResponse>;
                };
                stakedym: {
                    hostZone(request?: _239.QueryHostZoneRequest): Promise<_239.QueryHostZoneResponse>;
                    delegationRecords(request: _239.QueryDelegationRecordsRequest): Promise<_239.QueryDelegationRecordsResponse>;
                    unbondingRecords(request: _239.QueryUnbondingRecordsRequest): Promise<_239.QueryUnbondingRecordsResponse>;
                    redemptionRecord(request: _239.QueryRedemptionRecordRequest): Promise<_239.QueryRedemptionRecordResponse>;
                    redemptionRecords(request: _239.QueryRedemptionRecordsRequest): Promise<_239.QueryRedemptionRecordsResponse>;
                    slashRecords(request?: _239.QuerySlashRecordsRequest): Promise<_239.QuerySlashRecordsResponse>;
                };
                stakeibc: {
                    params(request?: _251.QueryParamsRequest): Promise<_251.QueryParamsResponse>;
                    validators(request: _251.QueryGetValidatorsRequest): Promise<_251.QueryGetValidatorsResponse>;
                    hostZone(request: _251.QueryGetHostZoneRequest): Promise<_251.QueryGetHostZoneResponse>;
                    hostZoneAll(request?: _251.QueryAllHostZoneRequest): Promise<_251.QueryAllHostZoneResponse>;
                    moduleAddress(request: _251.QueryModuleAddressRequest): Promise<_251.QueryModuleAddressResponse>;
                    interchainAccountFromAddress(request: _251.QueryInterchainAccountFromAddressRequest): Promise<_251.QueryInterchainAccountFromAddressResponse>;
                    epochTracker(request: _251.QueryGetEpochTrackerRequest): Promise<_251.QueryGetEpochTrackerResponse>;
                    epochTrackerAll(request?: _251.QueryAllEpochTrackerRequest): Promise<_251.QueryAllEpochTrackerResponse>;
                    nextPacketSequence(request: _251.QueryGetNextPacketSequenceRequest): Promise<_251.QueryGetNextPacketSequenceResponse>;
                    addressUnbondings(request: _251.QueryAddressUnbondings): Promise<_251.QueryAddressUnbondingsResponse>;
                    allTradeRoutes(request?: _251.QueryAllTradeRoutes): Promise<_251.QueryAllTradeRoutesResponse>;
                };
                staketia: {
                    hostZone(request?: _256.QueryHostZoneRequest): Promise<_256.QueryHostZoneResponse>;
                    delegationRecords(request: _256.QueryDelegationRecordsRequest): Promise<_256.QueryDelegationRecordsResponse>;
                    unbondingRecords(request: _256.QueryUnbondingRecordsRequest): Promise<_256.QueryUnbondingRecordsResponse>;
                    redemptionRecord(request: _256.QueryRedemptionRecordRequest): Promise<_256.QueryRedemptionRecordResponse>;
                    redemptionRecords(request: _256.QueryRedemptionRecordsRequest): Promise<_256.QueryRedemptionRecordsResponse>;
                    slashRecords(request?: _256.QuerySlashRecordsRequest): Promise<_256.QuerySlashRecordsResponse>;
                };
                strdburner: {
                    strdBurnerAddress(request?: _260.QueryStrdBurnerAddressRequest): Promise<_260.QueryStrdBurnerAddressResponse>;
                    totalStrdBurned(request?: _260.QueryTotalStrdBurnedRequest): Promise<_260.QueryTotalStrdBurnedResponse>;
                };
            };
        }>;
    };
}
