import * as _190 from "./airdrop/airdrop";
import * as _191 from "./airdrop/genesis";
import * as _192 from "./airdrop/query";
import * as _193 from "./airdrop/tx";
import * as _194 from "./auction/auction";
import * as _195 from "./auction/genesis";
import * as _196 from "./auction/query";
import * as _197 from "./auction/tx";
import * as _198 from "./autopilot/genesis";
import * as _199 from "./autopilot/params";
import * as _200 from "./autopilot/query";
import * as _201 from "./claim/claim";
import * as _202 from "./claim/genesis";
import * as _203 from "./claim/params";
import * as _204 from "./claim/query";
import * as _205 from "./claim/tx";
import * as _206 from "./epochs/genesis";
import * as _207 from "./epochs/query";
import * as _208 from "./icacallbacks/callback_data";
import * as _209 from "./icacallbacks/genesis";
import * as _210 from "./icacallbacks/packet";
import * as _211 from "./icacallbacks/params";
import * as _212 from "./icacallbacks/query";
import * as _214 from "./icaoracle/callbacks";
import * as _215 from "./icaoracle/contract";
import * as _216 from "./icaoracle/genesis";
import * as _217 from "./icaoracle/icaoracle";
import * as _218 from "./icaoracle/query";
import * as _219 from "./icaoracle/tx";
import * as _220 from "./icqoracle/genesis";
import * as _221 from "./icqoracle/icqoracle";
import * as _222 from "./icqoracle/query";
import * as _223 from "./icqoracle/tx";
import * as _224 from "./interchainquery/v1/genesis";
import * as _225 from "./interchainquery/v1/messages";
import * as _226 from "./interchainquery/v1/query";
import * as _227 from "./mint/v1beta1/genesis";
import * as _228 from "./mint/v1beta1/mint";
import * as _229 from "./mint/v1beta1/query";
import * as _230 from "./records/callbacks";
import * as _231 from "./records/genesis";
import * as _232 from "./records/params";
import * as _233 from "./records/query";
import * as _234 from "./records/records";
import * as _235 from "./stakedym/genesis";
import * as _236 from "./stakedym/query";
import * as _237 from "./stakedym/stakedym";
import * as _238 from "./stakedym/tx";
import * as _239 from "./stakeibc/address_unbonding";
import * as _240 from "./stakeibc/callbacks";
import * as _241 from "./stakeibc/epoch_tracker";
import * as _242 from "./stakeibc/genesis";
import * as _243 from "./stakeibc/gov";
import * as _244 from "./stakeibc/host_zone";
import * as _245 from "./stakeibc/ica_account";
import * as _246 from "./stakeibc/packet";
import * as _247 from "./stakeibc/params";
import * as _248 from "./stakeibc/query";
import * as _249 from "./stakeibc/trade_route";
import * as _250 from "./stakeibc/tx";
import * as _251 from "./stakeibc/validator";
import * as _252 from "./staketia/genesis";
import * as _253 from "./staketia/query";
import * as _254 from "./staketia/staketia";
import * as _255 from "./staketia/tx";
import * as _256 from "./strdburner/genesis";
import * as _257 from "./strdburner/query";
import * as _259 from "./vesting/vesting";
import * as _398 from "./airdrop/query.rpc.Query";
import * as _399 from "./auction/query.rpc.Query";
import * as _400 from "./autopilot/query.rpc.Query";
import * as _401 from "./claim/query.rpc.Query";
import * as _402 from "./epochs/query.rpc.Query";
import * as _403 from "./icacallbacks/query.rpc.Query";
import * as _404 from "./icaoracle/query.rpc.Query";
import * as _405 from "./icqoracle/query.rpc.Query";
import * as _406 from "./mint/v1beta1/query.rpc.Query";
import * as _407 from "./records/query.rpc.Query";
import * as _408 from "./stakedym/query.rpc.Query";
import * as _409 from "./stakeibc/query.rpc.Query";
import * as _410 from "./staketia/query.rpc.Query";
import * as _411 from "./strdburner/query.rpc.Query";
import * as _412 from "./airdrop/tx.rpc.msg";
import * as _413 from "./auction/tx.rpc.msg";
import * as _414 from "./claim/tx.rpc.msg";
import * as _415 from "./icaoracle/tx.rpc.msg";
import * as _416 from "./icqoracle/tx.rpc.msg";
import * as _417 from "./interchainquery/v1/messages.rpc.msg";
import * as _418 from "./stakedym/tx.rpc.msg";
import * as _419 from "./stakeibc/tx.rpc.msg";
import * as _420 from "./staketia/tx.rpc.msg";
export declare namespace stride {
    const airdrop: {
        MsgClientImpl: typeof _412.MsgClientImpl;
        QueryClientImpl: typeof _398.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            airdrop(request: _192.QueryAirdropRequest): Promise<_192.QueryAirdropResponse>;
            allAirdrops(request?: _192.QueryAllAirdropsRequest): Promise<_192.QueryAllAirdropsResponse>;
            userAllocation(request: _192.QueryUserAllocationRequest): Promise<_192.QueryUserAllocationResponse>;
            userAllocations(request: _192.QueryUserAllocationsRequest): Promise<_192.QueryUserAllocationsResponse>;
            allAllocations(request: _192.QueryAllAllocationsRequest): Promise<_192.QueryAllAllocationsResponse>;
            userSummary(request: _192.QueryUserSummaryRequest): Promise<_192.QueryUserSummaryResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                claimDaily(value: _193.MsgClaimDaily): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimEarly(value: _193.MsgClaimEarly): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAirdrop(value: _193.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateAirdrop(value: _193.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addAllocations(value: _193.MsgAddAllocations): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateUserAllocation(value: _193.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                linkAddresses(value: _193.MsgLinkAddresses): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                claimDaily(value: _193.MsgClaimDaily): {
                    typeUrl: string;
                    value: _193.MsgClaimDaily;
                };
                claimEarly(value: _193.MsgClaimEarly): {
                    typeUrl: string;
                    value: _193.MsgClaimEarly;
                };
                createAirdrop(value: _193.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _193.MsgCreateAirdrop;
                };
                updateAirdrop(value: _193.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: _193.MsgUpdateAirdrop;
                };
                addAllocations(value: _193.MsgAddAllocations): {
                    typeUrl: string;
                    value: _193.MsgAddAllocations;
                };
                updateUserAllocation(value: _193.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: _193.MsgUpdateUserAllocation;
                };
                linkAddresses(value: _193.MsgLinkAddresses): {
                    typeUrl: string;
                    value: _193.MsgLinkAddresses;
                };
            };
            fromPartial: {
                claimDaily(value: _193.MsgClaimDaily): {
                    typeUrl: string;
                    value: _193.MsgClaimDaily;
                };
                claimEarly(value: _193.MsgClaimEarly): {
                    typeUrl: string;
                    value: _193.MsgClaimEarly;
                };
                createAirdrop(value: _193.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _193.MsgCreateAirdrop;
                };
                updateAirdrop(value: _193.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: _193.MsgUpdateAirdrop;
                };
                addAllocations(value: _193.MsgAddAllocations): {
                    typeUrl: string;
                    value: _193.MsgAddAllocations;
                };
                updateUserAllocation(value: _193.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: _193.MsgUpdateUserAllocation;
                };
                linkAddresses(value: _193.MsgLinkAddresses): {
                    typeUrl: string;
                    value: _193.MsgLinkAddresses;
                };
            };
        };
        AminoConverter: {
            "/stride.airdrop.MsgClaimDaily": {
                aminoType: string;
                toAmino: (message: _193.MsgClaimDaily) => _193.MsgClaimDailyAmino;
                fromAmino: (object: _193.MsgClaimDailyAmino) => _193.MsgClaimDaily;
            };
            "/stride.airdrop.MsgClaimEarly": {
                aminoType: string;
                toAmino: (message: _193.MsgClaimEarly) => _193.MsgClaimEarlyAmino;
                fromAmino: (object: _193.MsgClaimEarlyAmino) => _193.MsgClaimEarly;
            };
            "/stride.airdrop.MsgCreateAirdrop": {
                aminoType: string;
                toAmino: (message: _193.MsgCreateAirdrop) => _193.MsgCreateAirdropAmino;
                fromAmino: (object: _193.MsgCreateAirdropAmino) => _193.MsgCreateAirdrop;
            };
            "/stride.airdrop.MsgUpdateAirdrop": {
                aminoType: string;
                toAmino: (message: _193.MsgUpdateAirdrop) => _193.MsgUpdateAirdropAmino;
                fromAmino: (object: _193.MsgUpdateAirdropAmino) => _193.MsgUpdateAirdrop;
            };
            "/stride.airdrop.MsgAddAllocations": {
                aminoType: string;
                toAmino: (message: _193.MsgAddAllocations) => _193.MsgAddAllocationsAmino;
                fromAmino: (object: _193.MsgAddAllocationsAmino) => _193.MsgAddAllocations;
            };
            "/stride.airdrop.MsgUpdateUserAllocation": {
                aminoType: string;
                toAmino: (message: _193.MsgUpdateUserAllocation) => _193.MsgUpdateUserAllocationAmino;
                fromAmino: (object: _193.MsgUpdateUserAllocationAmino) => _193.MsgUpdateUserAllocation;
            };
            "/stride.airdrop.MsgLinkAddresses": {
                aminoType: string;
                toAmino: (message: _193.MsgLinkAddresses) => _193.MsgLinkAddressesAmino;
                fromAmino: (object: _193.MsgLinkAddressesAmino) => _193.MsgLinkAddresses;
            };
        };
        MsgClaimDaily: {
            typeUrl: string;
            encode(message: _193.MsgClaimDaily, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.MsgClaimDaily;
            fromPartial(object: Partial<_193.MsgClaimDaily>): _193.MsgClaimDaily;
            fromAmino(object: _193.MsgClaimDailyAmino): _193.MsgClaimDaily;
            toAmino(message: _193.MsgClaimDaily): _193.MsgClaimDailyAmino;
            fromAminoMsg(object: _193.MsgClaimDailyAminoMsg): _193.MsgClaimDaily;
            toAminoMsg(message: _193.MsgClaimDaily): _193.MsgClaimDailyAminoMsg;
            fromProtoMsg(message: _193.MsgClaimDailyProtoMsg): _193.MsgClaimDaily;
            toProto(message: _193.MsgClaimDaily): Uint8Array;
            toProtoMsg(message: _193.MsgClaimDaily): _193.MsgClaimDailyProtoMsg;
        };
        MsgClaimDailyResponse: {
            typeUrl: string;
            encode(_: _193.MsgClaimDailyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.MsgClaimDailyResponse;
            fromPartial(_: Partial<_193.MsgClaimDailyResponse>): _193.MsgClaimDailyResponse;
            fromAmino(_: _193.MsgClaimDailyResponseAmino): _193.MsgClaimDailyResponse;
            toAmino(_: _193.MsgClaimDailyResponse): _193.MsgClaimDailyResponseAmino;
            fromAminoMsg(object: _193.MsgClaimDailyResponseAminoMsg): _193.MsgClaimDailyResponse;
            fromProtoMsg(message: _193.MsgClaimDailyResponseProtoMsg): _193.MsgClaimDailyResponse;
            toProto(message: _193.MsgClaimDailyResponse): Uint8Array;
            toProtoMsg(message: _193.MsgClaimDailyResponse): _193.MsgClaimDailyResponseProtoMsg;
        };
        MsgClaimEarly: {
            typeUrl: string;
            encode(message: _193.MsgClaimEarly, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.MsgClaimEarly;
            fromPartial(object: Partial<_193.MsgClaimEarly>): _193.MsgClaimEarly;
            fromAmino(object: _193.MsgClaimEarlyAmino): _193.MsgClaimEarly;
            toAmino(message: _193.MsgClaimEarly): _193.MsgClaimEarlyAmino;
            fromAminoMsg(object: _193.MsgClaimEarlyAminoMsg): _193.MsgClaimEarly;
            toAminoMsg(message: _193.MsgClaimEarly): _193.MsgClaimEarlyAminoMsg;
            fromProtoMsg(message: _193.MsgClaimEarlyProtoMsg): _193.MsgClaimEarly;
            toProto(message: _193.MsgClaimEarly): Uint8Array;
            toProtoMsg(message: _193.MsgClaimEarly): _193.MsgClaimEarlyProtoMsg;
        };
        MsgClaimEarlyResponse: {
            typeUrl: string;
            encode(_: _193.MsgClaimEarlyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.MsgClaimEarlyResponse;
            fromPartial(_: Partial<_193.MsgClaimEarlyResponse>): _193.MsgClaimEarlyResponse;
            fromAmino(_: _193.MsgClaimEarlyResponseAmino): _193.MsgClaimEarlyResponse;
            toAmino(_: _193.MsgClaimEarlyResponse): _193.MsgClaimEarlyResponseAmino;
            fromAminoMsg(object: _193.MsgClaimEarlyResponseAminoMsg): _193.MsgClaimEarlyResponse;
            fromProtoMsg(message: _193.MsgClaimEarlyResponseProtoMsg): _193.MsgClaimEarlyResponse;
            toProto(message: _193.MsgClaimEarlyResponse): Uint8Array;
            toProtoMsg(message: _193.MsgClaimEarlyResponse): _193.MsgClaimEarlyResponseProtoMsg;
        };
        MsgCreateAirdrop: {
            typeUrl: string;
            encode(message: _193.MsgCreateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.MsgCreateAirdrop;
            fromPartial(object: Partial<_193.MsgCreateAirdrop>): _193.MsgCreateAirdrop;
            fromAmino(object: _193.MsgCreateAirdropAmino): _193.MsgCreateAirdrop;
            toAmino(message: _193.MsgCreateAirdrop): _193.MsgCreateAirdropAmino;
            fromAminoMsg(object: _193.MsgCreateAirdropAminoMsg): _193.MsgCreateAirdrop;
            toAminoMsg(message: _193.MsgCreateAirdrop): _193.MsgCreateAirdropAminoMsg;
            fromProtoMsg(message: _193.MsgCreateAirdropProtoMsg): _193.MsgCreateAirdrop;
            toProto(message: _193.MsgCreateAirdrop): Uint8Array;
            toProtoMsg(message: _193.MsgCreateAirdrop): _193.MsgCreateAirdropProtoMsg;
        };
        MsgCreateAirdropResponse: {
            typeUrl: string;
            encode(_: _193.MsgCreateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.MsgCreateAirdropResponse;
            fromPartial(_: Partial<_193.MsgCreateAirdropResponse>): _193.MsgCreateAirdropResponse;
            fromAmino(_: _193.MsgCreateAirdropResponseAmino): _193.MsgCreateAirdropResponse;
            toAmino(_: _193.MsgCreateAirdropResponse): _193.MsgCreateAirdropResponseAmino;
            fromAminoMsg(object: _193.MsgCreateAirdropResponseAminoMsg): _193.MsgCreateAirdropResponse;
            fromProtoMsg(message: _193.MsgCreateAirdropResponseProtoMsg): _193.MsgCreateAirdropResponse;
            toProto(message: _193.MsgCreateAirdropResponse): Uint8Array;
            toProtoMsg(message: _193.MsgCreateAirdropResponse): _193.MsgCreateAirdropResponseProtoMsg;
        };
        MsgUpdateAirdrop: {
            typeUrl: string;
            encode(message: _193.MsgUpdateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.MsgUpdateAirdrop;
            fromPartial(object: Partial<_193.MsgUpdateAirdrop>): _193.MsgUpdateAirdrop;
            fromAmino(object: _193.MsgUpdateAirdropAmino): _193.MsgUpdateAirdrop;
            toAmino(message: _193.MsgUpdateAirdrop): _193.MsgUpdateAirdropAmino;
            fromAminoMsg(object: _193.MsgUpdateAirdropAminoMsg): _193.MsgUpdateAirdrop;
            toAminoMsg(message: _193.MsgUpdateAirdrop): _193.MsgUpdateAirdropAminoMsg;
            fromProtoMsg(message: _193.MsgUpdateAirdropProtoMsg): _193.MsgUpdateAirdrop;
            toProto(message: _193.MsgUpdateAirdrop): Uint8Array;
            toProtoMsg(message: _193.MsgUpdateAirdrop): _193.MsgUpdateAirdropProtoMsg;
        };
        MsgUpdateAirdropResponse: {
            typeUrl: string;
            encode(_: _193.MsgUpdateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.MsgUpdateAirdropResponse;
            fromPartial(_: Partial<_193.MsgUpdateAirdropResponse>): _193.MsgUpdateAirdropResponse;
            fromAmino(_: _193.MsgUpdateAirdropResponseAmino): _193.MsgUpdateAirdropResponse;
            toAmino(_: _193.MsgUpdateAirdropResponse): _193.MsgUpdateAirdropResponseAmino;
            fromAminoMsg(object: _193.MsgUpdateAirdropResponseAminoMsg): _193.MsgUpdateAirdropResponse;
            fromProtoMsg(message: _193.MsgUpdateAirdropResponseProtoMsg): _193.MsgUpdateAirdropResponse;
            toProto(message: _193.MsgUpdateAirdropResponse): Uint8Array;
            toProtoMsg(message: _193.MsgUpdateAirdropResponse): _193.MsgUpdateAirdropResponseProtoMsg;
        };
        RawAllocation: {
            typeUrl: string;
            encode(message: _193.RawAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.RawAllocation;
            fromPartial(object: Partial<_193.RawAllocation>): _193.RawAllocation;
            fromAmino(object: _193.RawAllocationAmino): _193.RawAllocation;
            toAmino(message: _193.RawAllocation): _193.RawAllocationAmino;
            fromAminoMsg(object: _193.RawAllocationAminoMsg): _193.RawAllocation;
            fromProtoMsg(message: _193.RawAllocationProtoMsg): _193.RawAllocation;
            toProto(message: _193.RawAllocation): Uint8Array;
            toProtoMsg(message: _193.RawAllocation): _193.RawAllocationProtoMsg;
        };
        MsgAddAllocations: {
            typeUrl: string;
            encode(message: _193.MsgAddAllocations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.MsgAddAllocations;
            fromPartial(object: Partial<_193.MsgAddAllocations>): _193.MsgAddAllocations;
            fromAmino(object: _193.MsgAddAllocationsAmino): _193.MsgAddAllocations;
            toAmino(message: _193.MsgAddAllocations): _193.MsgAddAllocationsAmino;
            fromAminoMsg(object: _193.MsgAddAllocationsAminoMsg): _193.MsgAddAllocations;
            toAminoMsg(message: _193.MsgAddAllocations): _193.MsgAddAllocationsAminoMsg;
            fromProtoMsg(message: _193.MsgAddAllocationsProtoMsg): _193.MsgAddAllocations;
            toProto(message: _193.MsgAddAllocations): Uint8Array;
            toProtoMsg(message: _193.MsgAddAllocations): _193.MsgAddAllocationsProtoMsg;
        };
        MsgAddAllocationsResponse: {
            typeUrl: string;
            encode(_: _193.MsgAddAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.MsgAddAllocationsResponse;
            fromPartial(_: Partial<_193.MsgAddAllocationsResponse>): _193.MsgAddAllocationsResponse;
            fromAmino(_: _193.MsgAddAllocationsResponseAmino): _193.MsgAddAllocationsResponse;
            toAmino(_: _193.MsgAddAllocationsResponse): _193.MsgAddAllocationsResponseAmino;
            fromAminoMsg(object: _193.MsgAddAllocationsResponseAminoMsg): _193.MsgAddAllocationsResponse;
            fromProtoMsg(message: _193.MsgAddAllocationsResponseProtoMsg): _193.MsgAddAllocationsResponse;
            toProto(message: _193.MsgAddAllocationsResponse): Uint8Array;
            toProtoMsg(message: _193.MsgAddAllocationsResponse): _193.MsgAddAllocationsResponseProtoMsg;
        };
        MsgUpdateUserAllocation: {
            typeUrl: string;
            encode(message: _193.MsgUpdateUserAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.MsgUpdateUserAllocation;
            fromPartial(object: Partial<_193.MsgUpdateUserAllocation>): _193.MsgUpdateUserAllocation;
            fromAmino(object: _193.MsgUpdateUserAllocationAmino): _193.MsgUpdateUserAllocation;
            toAmino(message: _193.MsgUpdateUserAllocation): _193.MsgUpdateUserAllocationAmino;
            fromAminoMsg(object: _193.MsgUpdateUserAllocationAminoMsg): _193.MsgUpdateUserAllocation;
            toAminoMsg(message: _193.MsgUpdateUserAllocation): _193.MsgUpdateUserAllocationAminoMsg;
            fromProtoMsg(message: _193.MsgUpdateUserAllocationProtoMsg): _193.MsgUpdateUserAllocation;
            toProto(message: _193.MsgUpdateUserAllocation): Uint8Array;
            toProtoMsg(message: _193.MsgUpdateUserAllocation): _193.MsgUpdateUserAllocationProtoMsg;
        };
        MsgUpdateUserAllocationResponse: {
            typeUrl: string;
            encode(_: _193.MsgUpdateUserAllocationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.MsgUpdateUserAllocationResponse;
            fromPartial(_: Partial<_193.MsgUpdateUserAllocationResponse>): _193.MsgUpdateUserAllocationResponse;
            fromAmino(_: _193.MsgUpdateUserAllocationResponseAmino): _193.MsgUpdateUserAllocationResponse;
            toAmino(_: _193.MsgUpdateUserAllocationResponse): _193.MsgUpdateUserAllocationResponseAmino;
            fromAminoMsg(object: _193.MsgUpdateUserAllocationResponseAminoMsg): _193.MsgUpdateUserAllocationResponse;
            fromProtoMsg(message: _193.MsgUpdateUserAllocationResponseProtoMsg): _193.MsgUpdateUserAllocationResponse;
            toProto(message: _193.MsgUpdateUserAllocationResponse): Uint8Array;
            toProtoMsg(message: _193.MsgUpdateUserAllocationResponse): _193.MsgUpdateUserAllocationResponseProtoMsg;
        };
        MsgLinkAddresses: {
            typeUrl: string;
            encode(message: _193.MsgLinkAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.MsgLinkAddresses;
            fromPartial(object: Partial<_193.MsgLinkAddresses>): _193.MsgLinkAddresses;
            fromAmino(object: _193.MsgLinkAddressesAmino): _193.MsgLinkAddresses;
            toAmino(message: _193.MsgLinkAddresses): _193.MsgLinkAddressesAmino;
            fromAminoMsg(object: _193.MsgLinkAddressesAminoMsg): _193.MsgLinkAddresses;
            toAminoMsg(message: _193.MsgLinkAddresses): _193.MsgLinkAddressesAminoMsg;
            fromProtoMsg(message: _193.MsgLinkAddressesProtoMsg): _193.MsgLinkAddresses;
            toProto(message: _193.MsgLinkAddresses): Uint8Array;
            toProtoMsg(message: _193.MsgLinkAddresses): _193.MsgLinkAddressesProtoMsg;
        };
        MsgLinkAddressesResponse: {
            typeUrl: string;
            encode(_: _193.MsgLinkAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.MsgLinkAddressesResponse;
            fromPartial(_: Partial<_193.MsgLinkAddressesResponse>): _193.MsgLinkAddressesResponse;
            fromAmino(_: _193.MsgLinkAddressesResponseAmino): _193.MsgLinkAddressesResponse;
            toAmino(_: _193.MsgLinkAddressesResponse): _193.MsgLinkAddressesResponseAmino;
            fromAminoMsg(object: _193.MsgLinkAddressesResponseAminoMsg): _193.MsgLinkAddressesResponse;
            fromProtoMsg(message: _193.MsgLinkAddressesResponseProtoMsg): _193.MsgLinkAddressesResponse;
            toProto(message: _193.MsgLinkAddressesResponse): Uint8Array;
            toProtoMsg(message: _193.MsgLinkAddressesResponse): _193.MsgLinkAddressesResponseProtoMsg;
        };
        QueryAirdropRequest: {
            typeUrl: string;
            encode(message: _192.QueryAirdropRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.QueryAirdropRequest;
            fromPartial(object: Partial<_192.QueryAirdropRequest>): _192.QueryAirdropRequest;
            fromAmino(object: _192.QueryAirdropRequestAmino): _192.QueryAirdropRequest;
            toAmino(message: _192.QueryAirdropRequest): _192.QueryAirdropRequestAmino;
            fromAminoMsg(object: _192.QueryAirdropRequestAminoMsg): _192.QueryAirdropRequest;
            fromProtoMsg(message: _192.QueryAirdropRequestProtoMsg): _192.QueryAirdropRequest;
            toProto(message: _192.QueryAirdropRequest): Uint8Array;
            toProtoMsg(message: _192.QueryAirdropRequest): _192.QueryAirdropRequestProtoMsg;
        };
        QueryAirdropResponse: {
            typeUrl: string;
            encode(message: _192.QueryAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.QueryAirdropResponse;
            fromPartial(object: Partial<_192.QueryAirdropResponse>): _192.QueryAirdropResponse;
            fromAmino(object: _192.QueryAirdropResponseAmino): _192.QueryAirdropResponse;
            toAmino(message: _192.QueryAirdropResponse): _192.QueryAirdropResponseAmino;
            fromAminoMsg(object: _192.QueryAirdropResponseAminoMsg): _192.QueryAirdropResponse;
            fromProtoMsg(message: _192.QueryAirdropResponseProtoMsg): _192.QueryAirdropResponse;
            toProto(message: _192.QueryAirdropResponse): Uint8Array;
            toProtoMsg(message: _192.QueryAirdropResponse): _192.QueryAirdropResponseProtoMsg;
        };
        QueryAllAirdropsRequest: {
            typeUrl: string;
            encode(_: _192.QueryAllAirdropsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.QueryAllAirdropsRequest;
            fromPartial(_: Partial<_192.QueryAllAirdropsRequest>): _192.QueryAllAirdropsRequest;
            fromAmino(_: _192.QueryAllAirdropsRequestAmino): _192.QueryAllAirdropsRequest;
            toAmino(_: _192.QueryAllAirdropsRequest): _192.QueryAllAirdropsRequestAmino;
            fromAminoMsg(object: _192.QueryAllAirdropsRequestAminoMsg): _192.QueryAllAirdropsRequest;
            fromProtoMsg(message: _192.QueryAllAirdropsRequestProtoMsg): _192.QueryAllAirdropsRequest;
            toProto(message: _192.QueryAllAirdropsRequest): Uint8Array;
            toProtoMsg(message: _192.QueryAllAirdropsRequest): _192.QueryAllAirdropsRequestProtoMsg;
        };
        QueryAllAirdropsResponse: {
            typeUrl: string;
            encode(message: _192.QueryAllAirdropsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.QueryAllAirdropsResponse;
            fromPartial(object: Partial<_192.QueryAllAirdropsResponse>): _192.QueryAllAirdropsResponse;
            fromAmino(object: _192.QueryAllAirdropsResponseAmino): _192.QueryAllAirdropsResponse;
            toAmino(message: _192.QueryAllAirdropsResponse): _192.QueryAllAirdropsResponseAmino;
            fromAminoMsg(object: _192.QueryAllAirdropsResponseAminoMsg): _192.QueryAllAirdropsResponse;
            fromProtoMsg(message: _192.QueryAllAirdropsResponseProtoMsg): _192.QueryAllAirdropsResponse;
            toProto(message: _192.QueryAllAirdropsResponse): Uint8Array;
            toProtoMsg(message: _192.QueryAllAirdropsResponse): _192.QueryAllAirdropsResponseProtoMsg;
        };
        QueryUserAllocationRequest: {
            typeUrl: string;
            encode(message: _192.QueryUserAllocationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.QueryUserAllocationRequest;
            fromPartial(object: Partial<_192.QueryUserAllocationRequest>): _192.QueryUserAllocationRequest;
            fromAmino(object: _192.QueryUserAllocationRequestAmino): _192.QueryUserAllocationRequest;
            toAmino(message: _192.QueryUserAllocationRequest): _192.QueryUserAllocationRequestAmino;
            fromAminoMsg(object: _192.QueryUserAllocationRequestAminoMsg): _192.QueryUserAllocationRequest;
            fromProtoMsg(message: _192.QueryUserAllocationRequestProtoMsg): _192.QueryUserAllocationRequest;
            toProto(message: _192.QueryUserAllocationRequest): Uint8Array;
            toProtoMsg(message: _192.QueryUserAllocationRequest): _192.QueryUserAllocationRequestProtoMsg;
        };
        QueryUserAllocationResponse: {
            typeUrl: string;
            encode(message: _192.QueryUserAllocationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.QueryUserAllocationResponse;
            fromPartial(object: Partial<_192.QueryUserAllocationResponse>): _192.QueryUserAllocationResponse;
            fromAmino(object: _192.QueryUserAllocationResponseAmino): _192.QueryUserAllocationResponse;
            toAmino(message: _192.QueryUserAllocationResponse): _192.QueryUserAllocationResponseAmino;
            fromAminoMsg(object: _192.QueryUserAllocationResponseAminoMsg): _192.QueryUserAllocationResponse;
            fromProtoMsg(message: _192.QueryUserAllocationResponseProtoMsg): _192.QueryUserAllocationResponse;
            toProto(message: _192.QueryUserAllocationResponse): Uint8Array;
            toProtoMsg(message: _192.QueryUserAllocationResponse): _192.QueryUserAllocationResponseProtoMsg;
        };
        QueryUserAllocationsRequest: {
            typeUrl: string;
            encode(message: _192.QueryUserAllocationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.QueryUserAllocationsRequest;
            fromPartial(object: Partial<_192.QueryUserAllocationsRequest>): _192.QueryUserAllocationsRequest;
            fromAmino(object: _192.QueryUserAllocationsRequestAmino): _192.QueryUserAllocationsRequest;
            toAmino(message: _192.QueryUserAllocationsRequest): _192.QueryUserAllocationsRequestAmino;
            fromAminoMsg(object: _192.QueryUserAllocationsRequestAminoMsg): _192.QueryUserAllocationsRequest;
            fromProtoMsg(message: _192.QueryUserAllocationsRequestProtoMsg): _192.QueryUserAllocationsRequest;
            toProto(message: _192.QueryUserAllocationsRequest): Uint8Array;
            toProtoMsg(message: _192.QueryUserAllocationsRequest): _192.QueryUserAllocationsRequestProtoMsg;
        };
        QueryUserAllocationsResponse: {
            typeUrl: string;
            encode(message: _192.QueryUserAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.QueryUserAllocationsResponse;
            fromPartial(object: Partial<_192.QueryUserAllocationsResponse>): _192.QueryUserAllocationsResponse;
            fromAmino(object: _192.QueryUserAllocationsResponseAmino): _192.QueryUserAllocationsResponse;
            toAmino(message: _192.QueryUserAllocationsResponse): _192.QueryUserAllocationsResponseAmino;
            fromAminoMsg(object: _192.QueryUserAllocationsResponseAminoMsg): _192.QueryUserAllocationsResponse;
            fromProtoMsg(message: _192.QueryUserAllocationsResponseProtoMsg): _192.QueryUserAllocationsResponse;
            toProto(message: _192.QueryUserAllocationsResponse): Uint8Array;
            toProtoMsg(message: _192.QueryUserAllocationsResponse): _192.QueryUserAllocationsResponseProtoMsg;
        };
        QueryAllAllocationsRequest: {
            typeUrl: string;
            encode(message: _192.QueryAllAllocationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.QueryAllAllocationsRequest;
            fromPartial(object: Partial<_192.QueryAllAllocationsRequest>): _192.QueryAllAllocationsRequest;
            fromAmino(object: _192.QueryAllAllocationsRequestAmino): _192.QueryAllAllocationsRequest;
            toAmino(message: _192.QueryAllAllocationsRequest): _192.QueryAllAllocationsRequestAmino;
            fromAminoMsg(object: _192.QueryAllAllocationsRequestAminoMsg): _192.QueryAllAllocationsRequest;
            fromProtoMsg(message: _192.QueryAllAllocationsRequestProtoMsg): _192.QueryAllAllocationsRequest;
            toProto(message: _192.QueryAllAllocationsRequest): Uint8Array;
            toProtoMsg(message: _192.QueryAllAllocationsRequest): _192.QueryAllAllocationsRequestProtoMsg;
        };
        QueryAllAllocationsResponse: {
            typeUrl: string;
            encode(message: _192.QueryAllAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.QueryAllAllocationsResponse;
            fromPartial(object: Partial<_192.QueryAllAllocationsResponse>): _192.QueryAllAllocationsResponse;
            fromAmino(object: _192.QueryAllAllocationsResponseAmino): _192.QueryAllAllocationsResponse;
            toAmino(message: _192.QueryAllAllocationsResponse): _192.QueryAllAllocationsResponseAmino;
            fromAminoMsg(object: _192.QueryAllAllocationsResponseAminoMsg): _192.QueryAllAllocationsResponse;
            fromProtoMsg(message: _192.QueryAllAllocationsResponseProtoMsg): _192.QueryAllAllocationsResponse;
            toProto(message: _192.QueryAllAllocationsResponse): Uint8Array;
            toProtoMsg(message: _192.QueryAllAllocationsResponse): _192.QueryAllAllocationsResponseProtoMsg;
        };
        QueryUserSummaryRequest: {
            typeUrl: string;
            encode(message: _192.QueryUserSummaryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.QueryUserSummaryRequest;
            fromPartial(object: Partial<_192.QueryUserSummaryRequest>): _192.QueryUserSummaryRequest;
            fromAmino(object: _192.QueryUserSummaryRequestAmino): _192.QueryUserSummaryRequest;
            toAmino(message: _192.QueryUserSummaryRequest): _192.QueryUserSummaryRequestAmino;
            fromAminoMsg(object: _192.QueryUserSummaryRequestAminoMsg): _192.QueryUserSummaryRequest;
            fromProtoMsg(message: _192.QueryUserSummaryRequestProtoMsg): _192.QueryUserSummaryRequest;
            toProto(message: _192.QueryUserSummaryRequest): Uint8Array;
            toProtoMsg(message: _192.QueryUserSummaryRequest): _192.QueryUserSummaryRequestProtoMsg;
        };
        QueryUserSummaryResponse: {
            typeUrl: string;
            encode(message: _192.QueryUserSummaryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.QueryUserSummaryResponse;
            fromPartial(object: Partial<_192.QueryUserSummaryResponse>): _192.QueryUserSummaryResponse;
            fromAmino(object: _192.QueryUserSummaryResponseAmino): _192.QueryUserSummaryResponse;
            toAmino(message: _192.QueryUserSummaryResponse): _192.QueryUserSummaryResponseAmino;
            fromAminoMsg(object: _192.QueryUserSummaryResponseAminoMsg): _192.QueryUserSummaryResponse;
            fromProtoMsg(message: _192.QueryUserSummaryResponseProtoMsg): _192.QueryUserSummaryResponse;
            toProto(message: _192.QueryUserSummaryResponse): Uint8Array;
            toProtoMsg(message: _192.QueryUserSummaryResponse): _192.QueryUserSummaryResponseProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _191.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.GenesisState;
            fromPartial(object: Partial<_191.GenesisState>): _191.GenesisState;
            fromAmino(object: _191.GenesisStateAmino): _191.GenesisState;
            toAmino(message: _191.GenesisState): _191.GenesisStateAmino;
            fromAminoMsg(object: _191.GenesisStateAminoMsg): _191.GenesisState;
            fromProtoMsg(message: _191.GenesisStateProtoMsg): _191.GenesisState;
            toProto(message: _191.GenesisState): Uint8Array;
            toProtoMsg(message: _191.GenesisState): _191.GenesisStateProtoMsg;
        };
        claimTypeFromJSON(object: any): _190.ClaimType;
        claimTypeToJSON(object: _190.ClaimType): string;
        ClaimType: typeof _190.ClaimType;
        ClaimTypeSDKType: typeof _190.ClaimType;
        ClaimTypeAmino: typeof _190.ClaimType;
        Params: {
            typeUrl: string;
            encode(message: _190.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.Params;
            fromPartial(object: Partial<_190.Params>): _190.Params;
            fromAmino(object: _190.ParamsAmino): _190.Params;
            toAmino(message: _190.Params): _190.ParamsAmino;
            fromAminoMsg(object: _190.ParamsAminoMsg): _190.Params;
            fromProtoMsg(message: _190.ParamsProtoMsg): _190.Params;
            toProto(message: _190.Params): Uint8Array;
            toProtoMsg(message: _190.Params): _190.ParamsProtoMsg;
        };
        UserAllocation: {
            typeUrl: string;
            encode(message: _190.UserAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.UserAllocation;
            fromPartial(object: Partial<_190.UserAllocation>): _190.UserAllocation;
            fromAmino(object: _190.UserAllocationAmino): _190.UserAllocation;
            toAmino(message: _190.UserAllocation): _190.UserAllocationAmino;
            fromAminoMsg(object: _190.UserAllocationAminoMsg): _190.UserAllocation;
            fromProtoMsg(message: _190.UserAllocationProtoMsg): _190.UserAllocation;
            toProto(message: _190.UserAllocation): Uint8Array;
            toProtoMsg(message: _190.UserAllocation): _190.UserAllocationProtoMsg;
        };
        Airdrop: {
            typeUrl: string;
            encode(message: _190.Airdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.Airdrop;
            fromPartial(object: Partial<_190.Airdrop>): _190.Airdrop;
            fromAmino(object: _190.AirdropAmino): _190.Airdrop;
            toAmino(message: _190.Airdrop): _190.AirdropAmino;
            fromAminoMsg(object: _190.AirdropAminoMsg): _190.Airdrop;
            fromProtoMsg(message: _190.AirdropProtoMsg): _190.Airdrop;
            toProto(message: _190.Airdrop): Uint8Array;
            toProtoMsg(message: _190.Airdrop): _190.AirdropProtoMsg;
        };
    };
    const auction: {
        MsgClientImpl: typeof _413.MsgClientImpl;
        QueryClientImpl: typeof _399.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            auction(request: _196.QueryAuctionRequest): Promise<_196.QueryAuctionResponse>;
            auctions(request?: _196.QueryAuctionsRequest): Promise<_196.QueryAuctionsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                placeBid(value: _197.MsgPlaceBid): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAuction(value: _197.MsgCreateAuction): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateAuction(value: _197.MsgUpdateAuction): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                placeBid(value: _197.MsgPlaceBid): {
                    typeUrl: string;
                    value: _197.MsgPlaceBid;
                };
                createAuction(value: _197.MsgCreateAuction): {
                    typeUrl: string;
                    value: _197.MsgCreateAuction;
                };
                updateAuction(value: _197.MsgUpdateAuction): {
                    typeUrl: string;
                    value: _197.MsgUpdateAuction;
                };
            };
            fromPartial: {
                placeBid(value: _197.MsgPlaceBid): {
                    typeUrl: string;
                    value: _197.MsgPlaceBid;
                };
                createAuction(value: _197.MsgCreateAuction): {
                    typeUrl: string;
                    value: _197.MsgCreateAuction;
                };
                updateAuction(value: _197.MsgUpdateAuction): {
                    typeUrl: string;
                    value: _197.MsgUpdateAuction;
                };
            };
        };
        AminoConverter: {
            "/stride.auction.MsgPlaceBid": {
                aminoType: string;
                toAmino: (message: _197.MsgPlaceBid) => _197.MsgPlaceBidAmino;
                fromAmino: (object: _197.MsgPlaceBidAmino) => _197.MsgPlaceBid;
            };
            "/stride.auction.MsgCreateAuction": {
                aminoType: string;
                toAmino: (message: _197.MsgCreateAuction) => _197.MsgCreateAuctionAmino;
                fromAmino: (object: _197.MsgCreateAuctionAmino) => _197.MsgCreateAuction;
            };
            "/stride.auction.MsgUpdateAuction": {
                aminoType: string;
                toAmino: (message: _197.MsgUpdateAuction) => _197.MsgUpdateAuctionAmino;
                fromAmino: (object: _197.MsgUpdateAuctionAmino) => _197.MsgUpdateAuction;
            };
        };
        MsgPlaceBid: {
            typeUrl: string;
            encode(message: _197.MsgPlaceBid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgPlaceBid;
            fromPartial(object: Partial<_197.MsgPlaceBid>): _197.MsgPlaceBid;
            fromAmino(object: _197.MsgPlaceBidAmino): _197.MsgPlaceBid;
            toAmino(message: _197.MsgPlaceBid): _197.MsgPlaceBidAmino;
            fromAminoMsg(object: _197.MsgPlaceBidAminoMsg): _197.MsgPlaceBid;
            toAminoMsg(message: _197.MsgPlaceBid): _197.MsgPlaceBidAminoMsg;
            fromProtoMsg(message: _197.MsgPlaceBidProtoMsg): _197.MsgPlaceBid;
            toProto(message: _197.MsgPlaceBid): Uint8Array;
            toProtoMsg(message: _197.MsgPlaceBid): _197.MsgPlaceBidProtoMsg;
        };
        MsgPlaceBidResponse: {
            typeUrl: string;
            encode(_: _197.MsgPlaceBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgPlaceBidResponse;
            fromPartial(_: Partial<_197.MsgPlaceBidResponse>): _197.MsgPlaceBidResponse;
            fromAmino(_: _197.MsgPlaceBidResponseAmino): _197.MsgPlaceBidResponse;
            toAmino(_: _197.MsgPlaceBidResponse): _197.MsgPlaceBidResponseAmino;
            fromAminoMsg(object: _197.MsgPlaceBidResponseAminoMsg): _197.MsgPlaceBidResponse;
            fromProtoMsg(message: _197.MsgPlaceBidResponseProtoMsg): _197.MsgPlaceBidResponse;
            toProto(message: _197.MsgPlaceBidResponse): Uint8Array;
            toProtoMsg(message: _197.MsgPlaceBidResponse): _197.MsgPlaceBidResponseProtoMsg;
        };
        MsgCreateAuction: {
            typeUrl: string;
            encode(message: _197.MsgCreateAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgCreateAuction;
            fromPartial(object: Partial<_197.MsgCreateAuction>): _197.MsgCreateAuction;
            fromAmino(object: _197.MsgCreateAuctionAmino): _197.MsgCreateAuction;
            toAmino(message: _197.MsgCreateAuction): _197.MsgCreateAuctionAmino;
            fromAminoMsg(object: _197.MsgCreateAuctionAminoMsg): _197.MsgCreateAuction;
            toAminoMsg(message: _197.MsgCreateAuction): _197.MsgCreateAuctionAminoMsg;
            fromProtoMsg(message: _197.MsgCreateAuctionProtoMsg): _197.MsgCreateAuction;
            toProto(message: _197.MsgCreateAuction): Uint8Array;
            toProtoMsg(message: _197.MsgCreateAuction): _197.MsgCreateAuctionProtoMsg;
        };
        MsgCreateAuctionResponse: {
            typeUrl: string;
            encode(_: _197.MsgCreateAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgCreateAuctionResponse;
            fromPartial(_: Partial<_197.MsgCreateAuctionResponse>): _197.MsgCreateAuctionResponse;
            fromAmino(_: _197.MsgCreateAuctionResponseAmino): _197.MsgCreateAuctionResponse;
            toAmino(_: _197.MsgCreateAuctionResponse): _197.MsgCreateAuctionResponseAmino;
            fromAminoMsg(object: _197.MsgCreateAuctionResponseAminoMsg): _197.MsgCreateAuctionResponse;
            fromProtoMsg(message: _197.MsgCreateAuctionResponseProtoMsg): _197.MsgCreateAuctionResponse;
            toProto(message: _197.MsgCreateAuctionResponse): Uint8Array;
            toProtoMsg(message: _197.MsgCreateAuctionResponse): _197.MsgCreateAuctionResponseProtoMsg;
        };
        MsgUpdateAuction: {
            typeUrl: string;
            encode(message: _197.MsgUpdateAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgUpdateAuction;
            fromPartial(object: Partial<_197.MsgUpdateAuction>): _197.MsgUpdateAuction;
            fromAmino(object: _197.MsgUpdateAuctionAmino): _197.MsgUpdateAuction;
            toAmino(message: _197.MsgUpdateAuction): _197.MsgUpdateAuctionAmino;
            fromAminoMsg(object: _197.MsgUpdateAuctionAminoMsg): _197.MsgUpdateAuction;
            toAminoMsg(message: _197.MsgUpdateAuction): _197.MsgUpdateAuctionAminoMsg;
            fromProtoMsg(message: _197.MsgUpdateAuctionProtoMsg): _197.MsgUpdateAuction;
            toProto(message: _197.MsgUpdateAuction): Uint8Array;
            toProtoMsg(message: _197.MsgUpdateAuction): _197.MsgUpdateAuctionProtoMsg;
        };
        MsgUpdateAuctionResponse: {
            typeUrl: string;
            encode(_: _197.MsgUpdateAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgUpdateAuctionResponse;
            fromPartial(_: Partial<_197.MsgUpdateAuctionResponse>): _197.MsgUpdateAuctionResponse;
            fromAmino(_: _197.MsgUpdateAuctionResponseAmino): _197.MsgUpdateAuctionResponse;
            toAmino(_: _197.MsgUpdateAuctionResponse): _197.MsgUpdateAuctionResponseAmino;
            fromAminoMsg(object: _197.MsgUpdateAuctionResponseAminoMsg): _197.MsgUpdateAuctionResponse;
            fromProtoMsg(message: _197.MsgUpdateAuctionResponseProtoMsg): _197.MsgUpdateAuctionResponse;
            toProto(message: _197.MsgUpdateAuctionResponse): Uint8Array;
            toProtoMsg(message: _197.MsgUpdateAuctionResponse): _197.MsgUpdateAuctionResponseProtoMsg;
        };
        QueryAuctionRequest: {
            typeUrl: string;
            encode(message: _196.QueryAuctionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryAuctionRequest;
            fromPartial(object: Partial<_196.QueryAuctionRequest>): _196.QueryAuctionRequest;
            fromAmino(object: _196.QueryAuctionRequestAmino): _196.QueryAuctionRequest;
            toAmino(message: _196.QueryAuctionRequest): _196.QueryAuctionRequestAmino;
            fromAminoMsg(object: _196.QueryAuctionRequestAminoMsg): _196.QueryAuctionRequest;
            fromProtoMsg(message: _196.QueryAuctionRequestProtoMsg): _196.QueryAuctionRequest;
            toProto(message: _196.QueryAuctionRequest): Uint8Array;
            toProtoMsg(message: _196.QueryAuctionRequest): _196.QueryAuctionRequestProtoMsg;
        };
        QueryAuctionResponse: {
            typeUrl: string;
            encode(message: _196.QueryAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryAuctionResponse;
            fromPartial(object: Partial<_196.QueryAuctionResponse>): _196.QueryAuctionResponse;
            fromAmino(object: _196.QueryAuctionResponseAmino): _196.QueryAuctionResponse;
            toAmino(message: _196.QueryAuctionResponse): _196.QueryAuctionResponseAmino;
            fromAminoMsg(object: _196.QueryAuctionResponseAminoMsg): _196.QueryAuctionResponse;
            fromProtoMsg(message: _196.QueryAuctionResponseProtoMsg): _196.QueryAuctionResponse;
            toProto(message: _196.QueryAuctionResponse): Uint8Array;
            toProtoMsg(message: _196.QueryAuctionResponse): _196.QueryAuctionResponseProtoMsg;
        };
        QueryAuctionsRequest: {
            typeUrl: string;
            encode(message: _196.QueryAuctionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryAuctionsRequest;
            fromPartial(object: Partial<_196.QueryAuctionsRequest>): _196.QueryAuctionsRequest;
            fromAmino(object: _196.QueryAuctionsRequestAmino): _196.QueryAuctionsRequest;
            toAmino(message: _196.QueryAuctionsRequest): _196.QueryAuctionsRequestAmino;
            fromAminoMsg(object: _196.QueryAuctionsRequestAminoMsg): _196.QueryAuctionsRequest;
            fromProtoMsg(message: _196.QueryAuctionsRequestProtoMsg): _196.QueryAuctionsRequest;
            toProto(message: _196.QueryAuctionsRequest): Uint8Array;
            toProtoMsg(message: _196.QueryAuctionsRequest): _196.QueryAuctionsRequestProtoMsg;
        };
        QueryAuctionsResponse: {
            typeUrl: string;
            encode(message: _196.QueryAuctionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryAuctionsResponse;
            fromPartial(object: Partial<_196.QueryAuctionsResponse>): _196.QueryAuctionsResponse;
            fromAmino(object: _196.QueryAuctionsResponseAmino): _196.QueryAuctionsResponse;
            toAmino(message: _196.QueryAuctionsResponse): _196.QueryAuctionsResponseAmino;
            fromAminoMsg(object: _196.QueryAuctionsResponseAminoMsg): _196.QueryAuctionsResponse;
            fromProtoMsg(message: _196.QueryAuctionsResponseProtoMsg): _196.QueryAuctionsResponse;
            toProto(message: _196.QueryAuctionsResponse): Uint8Array;
            toProtoMsg(message: _196.QueryAuctionsResponse): _196.QueryAuctionsResponseProtoMsg;
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
        auctionTypeFromJSON(object: any): _194.AuctionType;
        auctionTypeToJSON(object: _194.AuctionType): string;
        AuctionType: typeof _194.AuctionType;
        AuctionTypeSDKType: typeof _194.AuctionType;
        AuctionTypeAmino: typeof _194.AuctionType;
        Params: {
            typeUrl: string;
            encode(_: _194.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _194.Params;
            fromPartial(_: Partial<_194.Params>): _194.Params;
            fromAmino(_: _194.ParamsAmino): _194.Params;
            toAmino(_: _194.Params): _194.ParamsAmino;
            fromAminoMsg(object: _194.ParamsAminoMsg): _194.Params;
            fromProtoMsg(message: _194.ParamsProtoMsg): _194.Params;
            toProto(message: _194.Params): Uint8Array;
            toProtoMsg(message: _194.Params): _194.ParamsProtoMsg;
        };
        Auction: {
            typeUrl: string;
            encode(message: _194.Auction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _194.Auction;
            fromPartial(object: Partial<_194.Auction>): _194.Auction;
            fromAmino(object: _194.AuctionAmino): _194.Auction;
            toAmino(message: _194.Auction): _194.AuctionAmino;
            fromAminoMsg(object: _194.AuctionAminoMsg): _194.Auction;
            fromProtoMsg(message: _194.AuctionProtoMsg): _194.Auction;
            toProto(message: _194.Auction): Uint8Array;
            toProtoMsg(message: _194.Auction): _194.AuctionProtoMsg;
        };
    };
    const autopilot: {
        QueryClientImpl: typeof _400.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _200.QueryParamsRequest): Promise<_200.QueryParamsResponse>;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _200.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.QueryParamsRequest;
            fromPartial(_: Partial<_200.QueryParamsRequest>): _200.QueryParamsRequest;
            fromAmino(_: _200.QueryParamsRequestAmino): _200.QueryParamsRequest;
            toAmino(_: _200.QueryParamsRequest): _200.QueryParamsRequestAmino;
            fromAminoMsg(object: _200.QueryParamsRequestAminoMsg): _200.QueryParamsRequest;
            fromProtoMsg(message: _200.QueryParamsRequestProtoMsg): _200.QueryParamsRequest;
            toProto(message: _200.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _200.QueryParamsRequest): _200.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _200.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.QueryParamsResponse;
            fromPartial(object: Partial<_200.QueryParamsResponse>): _200.QueryParamsResponse;
            fromAmino(object: _200.QueryParamsResponseAmino): _200.QueryParamsResponse;
            toAmino(message: _200.QueryParamsResponse): _200.QueryParamsResponseAmino;
            fromAminoMsg(object: _200.QueryParamsResponseAminoMsg): _200.QueryParamsResponse;
            fromProtoMsg(message: _200.QueryParamsResponseProtoMsg): _200.QueryParamsResponse;
            toProto(message: _200.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _200.QueryParamsResponse): _200.QueryParamsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _199.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.Params;
            fromPartial(object: Partial<_199.Params>): _199.Params;
            fromAmino(object: _199.ParamsAmino): _199.Params;
            toAmino(message: _199.Params): _199.ParamsAmino;
            fromAminoMsg(object: _199.ParamsAminoMsg): _199.Params;
            fromProtoMsg(message: _199.ParamsProtoMsg): _199.Params;
            toProto(message: _199.Params): Uint8Array;
            toProtoMsg(message: _199.Params): _199.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _198.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.GenesisState;
            fromPartial(object: Partial<_198.GenesisState>): _198.GenesisState;
            fromAmino(object: _198.GenesisStateAmino): _198.GenesisState;
            toAmino(message: _198.GenesisState): _198.GenesisStateAmino;
            fromAminoMsg(object: _198.GenesisStateAminoMsg): _198.GenesisState;
            fromProtoMsg(message: _198.GenesisStateProtoMsg): _198.GenesisState;
            toProto(message: _198.GenesisState): Uint8Array;
            toProtoMsg(message: _198.GenesisState): _198.GenesisStateProtoMsg;
        };
    };
    const claim: {
        MsgClientImpl: typeof _414.MsgClientImpl;
        QueryClientImpl: typeof _401.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            distributorAccountBalance(request: _204.QueryDistributorAccountBalanceRequest): Promise<_204.QueryDistributorAccountBalanceResponse>;
            params(request?: _204.QueryParamsRequest): Promise<_204.QueryParamsResponse>;
            claimRecord(request: _204.QueryClaimRecordRequest): Promise<_204.QueryClaimRecordResponse>;
            claimableForAction(request: _204.QueryClaimableForActionRequest): Promise<_204.QueryClaimableForActionResponse>;
            totalClaimable(request: _204.QueryTotalClaimableRequest): Promise<_204.QueryTotalClaimableResponse>;
            userVestings(request: _204.QueryUserVestingsRequest): Promise<_204.QueryUserVestingsResponse>;
            claimStatus(request: _204.QueryClaimStatusRequest): Promise<_204.QueryClaimStatusResponse>;
            claimMetadata(request?: _204.QueryClaimMetadataRequest): Promise<_204.QueryClaimMetadataResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                setAirdropAllocations(value: _205.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimFreeAmount(value: _205.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAirdrop(value: _205.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteAirdrop(value: _205.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                setAirdropAllocations(value: _205.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _205.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _205.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _205.MsgClaimFreeAmount;
                };
                createAirdrop(value: _205.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _205.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _205.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _205.MsgDeleteAirdrop;
                };
            };
            fromPartial: {
                setAirdropAllocations(value: _205.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _205.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _205.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _205.MsgClaimFreeAmount;
                };
                createAirdrop(value: _205.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _205.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _205.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _205.MsgDeleteAirdrop;
                };
            };
        };
        AminoConverter: {
            "/stride.claim.MsgSetAirdropAllocations": {
                aminoType: string;
                toAmino: (message: _205.MsgSetAirdropAllocations) => _205.MsgSetAirdropAllocationsAmino;
                fromAmino: (object: _205.MsgSetAirdropAllocationsAmino) => _205.MsgSetAirdropAllocations;
            };
            "/stride.claim.MsgClaimFreeAmount": {
                aminoType: string;
                toAmino: (message: _205.MsgClaimFreeAmount) => _205.MsgClaimFreeAmountAmino;
                fromAmino: (object: _205.MsgClaimFreeAmountAmino) => _205.MsgClaimFreeAmount;
            };
            "/stride.claim.MsgCreateAirdrop": {
                aminoType: string;
                toAmino: (message: _205.MsgCreateAirdrop) => _205.MsgCreateAirdropAmino;
                fromAmino: (object: _205.MsgCreateAirdropAmino) => _205.MsgCreateAirdrop;
            };
            "/stride.claim.MsgDeleteAirdrop": {
                aminoType: string;
                toAmino: (message: _205.MsgDeleteAirdrop) => _205.MsgDeleteAirdropAmino;
                fromAmino: (object: _205.MsgDeleteAirdropAmino) => _205.MsgDeleteAirdrop;
            };
        };
        MsgSetAirdropAllocations: {
            typeUrl: string;
            encode(message: _205.MsgSetAirdropAllocations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.MsgSetAirdropAllocations;
            fromPartial(object: Partial<_205.MsgSetAirdropAllocations>): _205.MsgSetAirdropAllocations;
            fromAmino(object: _205.MsgSetAirdropAllocationsAmino): _205.MsgSetAirdropAllocations;
            toAmino(message: _205.MsgSetAirdropAllocations): _205.MsgSetAirdropAllocationsAmino;
            fromAminoMsg(object: _205.MsgSetAirdropAllocationsAminoMsg): _205.MsgSetAirdropAllocations;
            toAminoMsg(message: _205.MsgSetAirdropAllocations): _205.MsgSetAirdropAllocationsAminoMsg;
            fromProtoMsg(message: _205.MsgSetAirdropAllocationsProtoMsg): _205.MsgSetAirdropAllocations;
            toProto(message: _205.MsgSetAirdropAllocations): Uint8Array;
            toProtoMsg(message: _205.MsgSetAirdropAllocations): _205.MsgSetAirdropAllocationsProtoMsg;
        };
        MsgSetAirdropAllocationsResponse: {
            typeUrl: string;
            encode(_: _205.MsgSetAirdropAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.MsgSetAirdropAllocationsResponse;
            fromPartial(_: Partial<_205.MsgSetAirdropAllocationsResponse>): _205.MsgSetAirdropAllocationsResponse;
            fromAmino(_: _205.MsgSetAirdropAllocationsResponseAmino): _205.MsgSetAirdropAllocationsResponse;
            toAmino(_: _205.MsgSetAirdropAllocationsResponse): _205.MsgSetAirdropAllocationsResponseAmino;
            fromAminoMsg(object: _205.MsgSetAirdropAllocationsResponseAminoMsg): _205.MsgSetAirdropAllocationsResponse;
            fromProtoMsg(message: _205.MsgSetAirdropAllocationsResponseProtoMsg): _205.MsgSetAirdropAllocationsResponse;
            toProto(message: _205.MsgSetAirdropAllocationsResponse): Uint8Array;
            toProtoMsg(message: _205.MsgSetAirdropAllocationsResponse): _205.MsgSetAirdropAllocationsResponseProtoMsg;
        };
        MsgClaimFreeAmount: {
            typeUrl: string;
            encode(message: _205.MsgClaimFreeAmount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.MsgClaimFreeAmount;
            fromPartial(object: Partial<_205.MsgClaimFreeAmount>): _205.MsgClaimFreeAmount;
            fromAmino(object: _205.MsgClaimFreeAmountAmino): _205.MsgClaimFreeAmount;
            toAmino(message: _205.MsgClaimFreeAmount): _205.MsgClaimFreeAmountAmino;
            fromAminoMsg(object: _205.MsgClaimFreeAmountAminoMsg): _205.MsgClaimFreeAmount;
            toAminoMsg(message: _205.MsgClaimFreeAmount): _205.MsgClaimFreeAmountAminoMsg;
            fromProtoMsg(message: _205.MsgClaimFreeAmountProtoMsg): _205.MsgClaimFreeAmount;
            toProto(message: _205.MsgClaimFreeAmount): Uint8Array;
            toProtoMsg(message: _205.MsgClaimFreeAmount): _205.MsgClaimFreeAmountProtoMsg;
        };
        MsgClaimFreeAmountResponse: {
            typeUrl: string;
            encode(message: _205.MsgClaimFreeAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.MsgClaimFreeAmountResponse;
            fromPartial(object: Partial<_205.MsgClaimFreeAmountResponse>): _205.MsgClaimFreeAmountResponse;
            fromAmino(object: _205.MsgClaimFreeAmountResponseAmino): _205.MsgClaimFreeAmountResponse;
            toAmino(message: _205.MsgClaimFreeAmountResponse): _205.MsgClaimFreeAmountResponseAmino;
            fromAminoMsg(object: _205.MsgClaimFreeAmountResponseAminoMsg): _205.MsgClaimFreeAmountResponse;
            fromProtoMsg(message: _205.MsgClaimFreeAmountResponseProtoMsg): _205.MsgClaimFreeAmountResponse;
            toProto(message: _205.MsgClaimFreeAmountResponse): Uint8Array;
            toProtoMsg(message: _205.MsgClaimFreeAmountResponse): _205.MsgClaimFreeAmountResponseProtoMsg;
        };
        MsgCreateAirdrop: {
            typeUrl: string;
            encode(message: _205.MsgCreateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.MsgCreateAirdrop;
            fromPartial(object: Partial<_205.MsgCreateAirdrop>): _205.MsgCreateAirdrop;
            fromAmino(object: _205.MsgCreateAirdropAmino): _205.MsgCreateAirdrop;
            toAmino(message: _205.MsgCreateAirdrop): _205.MsgCreateAirdropAmino;
            fromAminoMsg(object: _205.MsgCreateAirdropAminoMsg): _205.MsgCreateAirdrop;
            toAminoMsg(message: _205.MsgCreateAirdrop): _205.MsgCreateAirdropAminoMsg;
            fromProtoMsg(message: _205.MsgCreateAirdropProtoMsg): _205.MsgCreateAirdrop;
            toProto(message: _205.MsgCreateAirdrop): Uint8Array;
            toProtoMsg(message: _205.MsgCreateAirdrop): _205.MsgCreateAirdropProtoMsg;
        };
        MsgCreateAirdropResponse: {
            typeUrl: string;
            encode(_: _205.MsgCreateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.MsgCreateAirdropResponse;
            fromPartial(_: Partial<_205.MsgCreateAirdropResponse>): _205.MsgCreateAirdropResponse;
            fromAmino(_: _205.MsgCreateAirdropResponseAmino): _205.MsgCreateAirdropResponse;
            toAmino(_: _205.MsgCreateAirdropResponse): _205.MsgCreateAirdropResponseAmino;
            fromAminoMsg(object: _205.MsgCreateAirdropResponseAminoMsg): _205.MsgCreateAirdropResponse;
            fromProtoMsg(message: _205.MsgCreateAirdropResponseProtoMsg): _205.MsgCreateAirdropResponse;
            toProto(message: _205.MsgCreateAirdropResponse): Uint8Array;
            toProtoMsg(message: _205.MsgCreateAirdropResponse): _205.MsgCreateAirdropResponseProtoMsg;
        };
        MsgDeleteAirdrop: {
            typeUrl: string;
            encode(message: _205.MsgDeleteAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.MsgDeleteAirdrop;
            fromPartial(object: Partial<_205.MsgDeleteAirdrop>): _205.MsgDeleteAirdrop;
            fromAmino(object: _205.MsgDeleteAirdropAmino): _205.MsgDeleteAirdrop;
            toAmino(message: _205.MsgDeleteAirdrop): _205.MsgDeleteAirdropAmino;
            fromAminoMsg(object: _205.MsgDeleteAirdropAminoMsg): _205.MsgDeleteAirdrop;
            toAminoMsg(message: _205.MsgDeleteAirdrop): _205.MsgDeleteAirdropAminoMsg;
            fromProtoMsg(message: _205.MsgDeleteAirdropProtoMsg): _205.MsgDeleteAirdrop;
            toProto(message: _205.MsgDeleteAirdrop): Uint8Array;
            toProtoMsg(message: _205.MsgDeleteAirdrop): _205.MsgDeleteAirdropProtoMsg;
        };
        MsgDeleteAirdropResponse: {
            typeUrl: string;
            encode(_: _205.MsgDeleteAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.MsgDeleteAirdropResponse;
            fromPartial(_: Partial<_205.MsgDeleteAirdropResponse>): _205.MsgDeleteAirdropResponse;
            fromAmino(_: _205.MsgDeleteAirdropResponseAmino): _205.MsgDeleteAirdropResponse;
            toAmino(_: _205.MsgDeleteAirdropResponse): _205.MsgDeleteAirdropResponseAmino;
            fromAminoMsg(object: _205.MsgDeleteAirdropResponseAminoMsg): _205.MsgDeleteAirdropResponse;
            fromProtoMsg(message: _205.MsgDeleteAirdropResponseProtoMsg): _205.MsgDeleteAirdropResponse;
            toProto(message: _205.MsgDeleteAirdropResponse): Uint8Array;
            toProtoMsg(message: _205.MsgDeleteAirdropResponse): _205.MsgDeleteAirdropResponseProtoMsg;
        };
        ClaimStatus: {
            typeUrl: string;
            encode(message: _204.ClaimStatus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.ClaimStatus;
            fromPartial(object: Partial<_204.ClaimStatus>): _204.ClaimStatus;
            fromAmino(object: _204.ClaimStatusAmino): _204.ClaimStatus;
            toAmino(message: _204.ClaimStatus): _204.ClaimStatusAmino;
            fromAminoMsg(object: _204.ClaimStatusAminoMsg): _204.ClaimStatus;
            fromProtoMsg(message: _204.ClaimStatusProtoMsg): _204.ClaimStatus;
            toProto(message: _204.ClaimStatus): Uint8Array;
            toProtoMsg(message: _204.ClaimStatus): _204.ClaimStatusProtoMsg;
        };
        QueryClaimStatusRequest: {
            typeUrl: string;
            encode(message: _204.QueryClaimStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.QueryClaimStatusRequest;
            fromPartial(object: Partial<_204.QueryClaimStatusRequest>): _204.QueryClaimStatusRequest;
            fromAmino(object: _204.QueryClaimStatusRequestAmino): _204.QueryClaimStatusRequest;
            toAmino(message: _204.QueryClaimStatusRequest): _204.QueryClaimStatusRequestAmino;
            fromAminoMsg(object: _204.QueryClaimStatusRequestAminoMsg): _204.QueryClaimStatusRequest;
            fromProtoMsg(message: _204.QueryClaimStatusRequestProtoMsg): _204.QueryClaimStatusRequest;
            toProto(message: _204.QueryClaimStatusRequest): Uint8Array;
            toProtoMsg(message: _204.QueryClaimStatusRequest): _204.QueryClaimStatusRequestProtoMsg;
        };
        QueryClaimStatusResponse: {
            typeUrl: string;
            encode(message: _204.QueryClaimStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.QueryClaimStatusResponse;
            fromPartial(object: Partial<_204.QueryClaimStatusResponse>): _204.QueryClaimStatusResponse;
            fromAmino(object: _204.QueryClaimStatusResponseAmino): _204.QueryClaimStatusResponse;
            toAmino(message: _204.QueryClaimStatusResponse): _204.QueryClaimStatusResponseAmino;
            fromAminoMsg(object: _204.QueryClaimStatusResponseAminoMsg): _204.QueryClaimStatusResponse;
            fromProtoMsg(message: _204.QueryClaimStatusResponseProtoMsg): _204.QueryClaimStatusResponse;
            toProto(message: _204.QueryClaimStatusResponse): Uint8Array;
            toProtoMsg(message: _204.QueryClaimStatusResponse): _204.QueryClaimStatusResponseProtoMsg;
        };
        ClaimMetadata: {
            typeUrl: string;
            encode(message: _204.ClaimMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.ClaimMetadata;
            fromPartial(object: Partial<_204.ClaimMetadata>): _204.ClaimMetadata;
            fromAmino(object: _204.ClaimMetadataAmino): _204.ClaimMetadata;
            toAmino(message: _204.ClaimMetadata): _204.ClaimMetadataAmino;
            fromAminoMsg(object: _204.ClaimMetadataAminoMsg): _204.ClaimMetadata;
            fromProtoMsg(message: _204.ClaimMetadataProtoMsg): _204.ClaimMetadata;
            toProto(message: _204.ClaimMetadata): Uint8Array;
            toProtoMsg(message: _204.ClaimMetadata): _204.ClaimMetadataProtoMsg;
        };
        QueryClaimMetadataRequest: {
            typeUrl: string;
            encode(_: _204.QueryClaimMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.QueryClaimMetadataRequest;
            fromPartial(_: Partial<_204.QueryClaimMetadataRequest>): _204.QueryClaimMetadataRequest;
            fromAmino(_: _204.QueryClaimMetadataRequestAmino): _204.QueryClaimMetadataRequest;
            toAmino(_: _204.QueryClaimMetadataRequest): _204.QueryClaimMetadataRequestAmino;
            fromAminoMsg(object: _204.QueryClaimMetadataRequestAminoMsg): _204.QueryClaimMetadataRequest;
            fromProtoMsg(message: _204.QueryClaimMetadataRequestProtoMsg): _204.QueryClaimMetadataRequest;
            toProto(message: _204.QueryClaimMetadataRequest): Uint8Array;
            toProtoMsg(message: _204.QueryClaimMetadataRequest): _204.QueryClaimMetadataRequestProtoMsg;
        };
        QueryClaimMetadataResponse: {
            typeUrl: string;
            encode(message: _204.QueryClaimMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.QueryClaimMetadataResponse;
            fromPartial(object: Partial<_204.QueryClaimMetadataResponse>): _204.QueryClaimMetadataResponse;
            fromAmino(object: _204.QueryClaimMetadataResponseAmino): _204.QueryClaimMetadataResponse;
            toAmino(message: _204.QueryClaimMetadataResponse): _204.QueryClaimMetadataResponseAmino;
            fromAminoMsg(object: _204.QueryClaimMetadataResponseAminoMsg): _204.QueryClaimMetadataResponse;
            fromProtoMsg(message: _204.QueryClaimMetadataResponseProtoMsg): _204.QueryClaimMetadataResponse;
            toProto(message: _204.QueryClaimMetadataResponse): Uint8Array;
            toProtoMsg(message: _204.QueryClaimMetadataResponse): _204.QueryClaimMetadataResponseProtoMsg;
        };
        QueryDistributorAccountBalanceRequest: {
            typeUrl: string;
            encode(message: _204.QueryDistributorAccountBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.QueryDistributorAccountBalanceRequest;
            fromPartial(object: Partial<_204.QueryDistributorAccountBalanceRequest>): _204.QueryDistributorAccountBalanceRequest;
            fromAmino(object: _204.QueryDistributorAccountBalanceRequestAmino): _204.QueryDistributorAccountBalanceRequest;
            toAmino(message: _204.QueryDistributorAccountBalanceRequest): _204.QueryDistributorAccountBalanceRequestAmino;
            fromAminoMsg(object: _204.QueryDistributorAccountBalanceRequestAminoMsg): _204.QueryDistributorAccountBalanceRequest;
            fromProtoMsg(message: _204.QueryDistributorAccountBalanceRequestProtoMsg): _204.QueryDistributorAccountBalanceRequest;
            toProto(message: _204.QueryDistributorAccountBalanceRequest): Uint8Array;
            toProtoMsg(message: _204.QueryDistributorAccountBalanceRequest): _204.QueryDistributorAccountBalanceRequestProtoMsg;
        };
        QueryDistributorAccountBalanceResponse: {
            typeUrl: string;
            encode(message: _204.QueryDistributorAccountBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.QueryDistributorAccountBalanceResponse;
            fromPartial(object: Partial<_204.QueryDistributorAccountBalanceResponse>): _204.QueryDistributorAccountBalanceResponse;
            fromAmino(object: _204.QueryDistributorAccountBalanceResponseAmino): _204.QueryDistributorAccountBalanceResponse;
            toAmino(message: _204.QueryDistributorAccountBalanceResponse): _204.QueryDistributorAccountBalanceResponseAmino;
            fromAminoMsg(object: _204.QueryDistributorAccountBalanceResponseAminoMsg): _204.QueryDistributorAccountBalanceResponse;
            fromProtoMsg(message: _204.QueryDistributorAccountBalanceResponseProtoMsg): _204.QueryDistributorAccountBalanceResponse;
            toProto(message: _204.QueryDistributorAccountBalanceResponse): Uint8Array;
            toProtoMsg(message: _204.QueryDistributorAccountBalanceResponse): _204.QueryDistributorAccountBalanceResponseProtoMsg;
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
        QueryClaimRecordRequest: {
            typeUrl: string;
            encode(message: _204.QueryClaimRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.QueryClaimRecordRequest;
            fromPartial(object: Partial<_204.QueryClaimRecordRequest>): _204.QueryClaimRecordRequest;
            fromAmino(object: _204.QueryClaimRecordRequestAmino): _204.QueryClaimRecordRequest;
            toAmino(message: _204.QueryClaimRecordRequest): _204.QueryClaimRecordRequestAmino;
            fromAminoMsg(object: _204.QueryClaimRecordRequestAminoMsg): _204.QueryClaimRecordRequest;
            fromProtoMsg(message: _204.QueryClaimRecordRequestProtoMsg): _204.QueryClaimRecordRequest;
            toProto(message: _204.QueryClaimRecordRequest): Uint8Array;
            toProtoMsg(message: _204.QueryClaimRecordRequest): _204.QueryClaimRecordRequestProtoMsg;
        };
        QueryClaimRecordResponse: {
            typeUrl: string;
            encode(message: _204.QueryClaimRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.QueryClaimRecordResponse;
            fromPartial(object: Partial<_204.QueryClaimRecordResponse>): _204.QueryClaimRecordResponse;
            fromAmino(object: _204.QueryClaimRecordResponseAmino): _204.QueryClaimRecordResponse;
            toAmino(message: _204.QueryClaimRecordResponse): _204.QueryClaimRecordResponseAmino;
            fromAminoMsg(object: _204.QueryClaimRecordResponseAminoMsg): _204.QueryClaimRecordResponse;
            fromProtoMsg(message: _204.QueryClaimRecordResponseProtoMsg): _204.QueryClaimRecordResponse;
            toProto(message: _204.QueryClaimRecordResponse): Uint8Array;
            toProtoMsg(message: _204.QueryClaimRecordResponse): _204.QueryClaimRecordResponseProtoMsg;
        };
        QueryClaimableForActionRequest: {
            typeUrl: string;
            encode(message: _204.QueryClaimableForActionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.QueryClaimableForActionRequest;
            fromPartial(object: Partial<_204.QueryClaimableForActionRequest>): _204.QueryClaimableForActionRequest;
            fromAmino(object: _204.QueryClaimableForActionRequestAmino): _204.QueryClaimableForActionRequest;
            toAmino(message: _204.QueryClaimableForActionRequest): _204.QueryClaimableForActionRequestAmino;
            fromAminoMsg(object: _204.QueryClaimableForActionRequestAminoMsg): _204.QueryClaimableForActionRequest;
            fromProtoMsg(message: _204.QueryClaimableForActionRequestProtoMsg): _204.QueryClaimableForActionRequest;
            toProto(message: _204.QueryClaimableForActionRequest): Uint8Array;
            toProtoMsg(message: _204.QueryClaimableForActionRequest): _204.QueryClaimableForActionRequestProtoMsg;
        };
        QueryClaimableForActionResponse: {
            typeUrl: string;
            encode(message: _204.QueryClaimableForActionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.QueryClaimableForActionResponse;
            fromPartial(object: Partial<_204.QueryClaimableForActionResponse>): _204.QueryClaimableForActionResponse;
            fromAmino(object: _204.QueryClaimableForActionResponseAmino): _204.QueryClaimableForActionResponse;
            toAmino(message: _204.QueryClaimableForActionResponse): _204.QueryClaimableForActionResponseAmino;
            fromAminoMsg(object: _204.QueryClaimableForActionResponseAminoMsg): _204.QueryClaimableForActionResponse;
            fromProtoMsg(message: _204.QueryClaimableForActionResponseProtoMsg): _204.QueryClaimableForActionResponse;
            toProto(message: _204.QueryClaimableForActionResponse): Uint8Array;
            toProtoMsg(message: _204.QueryClaimableForActionResponse): _204.QueryClaimableForActionResponseProtoMsg;
        };
        QueryTotalClaimableRequest: {
            typeUrl: string;
            encode(message: _204.QueryTotalClaimableRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.QueryTotalClaimableRequest;
            fromPartial(object: Partial<_204.QueryTotalClaimableRequest>): _204.QueryTotalClaimableRequest;
            fromAmino(object: _204.QueryTotalClaimableRequestAmino): _204.QueryTotalClaimableRequest;
            toAmino(message: _204.QueryTotalClaimableRequest): _204.QueryTotalClaimableRequestAmino;
            fromAminoMsg(object: _204.QueryTotalClaimableRequestAminoMsg): _204.QueryTotalClaimableRequest;
            fromProtoMsg(message: _204.QueryTotalClaimableRequestProtoMsg): _204.QueryTotalClaimableRequest;
            toProto(message: _204.QueryTotalClaimableRequest): Uint8Array;
            toProtoMsg(message: _204.QueryTotalClaimableRequest): _204.QueryTotalClaimableRequestProtoMsg;
        };
        QueryTotalClaimableResponse: {
            typeUrl: string;
            encode(message: _204.QueryTotalClaimableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.QueryTotalClaimableResponse;
            fromPartial(object: Partial<_204.QueryTotalClaimableResponse>): _204.QueryTotalClaimableResponse;
            fromAmino(object: _204.QueryTotalClaimableResponseAmino): _204.QueryTotalClaimableResponse;
            toAmino(message: _204.QueryTotalClaimableResponse): _204.QueryTotalClaimableResponseAmino;
            fromAminoMsg(object: _204.QueryTotalClaimableResponseAminoMsg): _204.QueryTotalClaimableResponse;
            fromProtoMsg(message: _204.QueryTotalClaimableResponseProtoMsg): _204.QueryTotalClaimableResponse;
            toProto(message: _204.QueryTotalClaimableResponse): Uint8Array;
            toProtoMsg(message: _204.QueryTotalClaimableResponse): _204.QueryTotalClaimableResponseProtoMsg;
        };
        QueryUserVestingsRequest: {
            typeUrl: string;
            encode(message: _204.QueryUserVestingsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.QueryUserVestingsRequest;
            fromPartial(object: Partial<_204.QueryUserVestingsRequest>): _204.QueryUserVestingsRequest;
            fromAmino(object: _204.QueryUserVestingsRequestAmino): _204.QueryUserVestingsRequest;
            toAmino(message: _204.QueryUserVestingsRequest): _204.QueryUserVestingsRequestAmino;
            fromAminoMsg(object: _204.QueryUserVestingsRequestAminoMsg): _204.QueryUserVestingsRequest;
            fromProtoMsg(message: _204.QueryUserVestingsRequestProtoMsg): _204.QueryUserVestingsRequest;
            toProto(message: _204.QueryUserVestingsRequest): Uint8Array;
            toProtoMsg(message: _204.QueryUserVestingsRequest): _204.QueryUserVestingsRequestProtoMsg;
        };
        QueryUserVestingsResponse: {
            typeUrl: string;
            encode(message: _204.QueryUserVestingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.QueryUserVestingsResponse;
            fromPartial(object: Partial<_204.QueryUserVestingsResponse>): _204.QueryUserVestingsResponse;
            fromAmino(object: _204.QueryUserVestingsResponseAmino): _204.QueryUserVestingsResponse;
            toAmino(message: _204.QueryUserVestingsResponse): _204.QueryUserVestingsResponseAmino;
            fromAminoMsg(object: _204.QueryUserVestingsResponseAminoMsg): _204.QueryUserVestingsResponse;
            fromProtoMsg(message: _204.QueryUserVestingsResponseProtoMsg): _204.QueryUserVestingsResponse;
            toProto(message: _204.QueryUserVestingsResponse): Uint8Array;
            toProtoMsg(message: _204.QueryUserVestingsResponse): _204.QueryUserVestingsResponseProtoMsg;
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
        Airdrop: {
            typeUrl: string;
            encode(message: _203.Airdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.Airdrop;
            fromPartial(object: Partial<_203.Airdrop>): _203.Airdrop;
            fromAmino(object: _203.AirdropAmino): _203.Airdrop;
            toAmino(message: _203.Airdrop): _203.AirdropAmino;
            fromAminoMsg(object: _203.AirdropAminoMsg): _203.Airdrop;
            fromProtoMsg(message: _203.AirdropProtoMsg): _203.Airdrop;
            toProto(message: _203.Airdrop): Uint8Array;
            toProtoMsg(message: _203.Airdrop): _203.AirdropProtoMsg;
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
        actionFromJSON(object: any): _201.Action;
        actionToJSON(object: _201.Action): string;
        Action: typeof _201.Action;
        ActionSDKType: typeof _201.Action;
        ActionAmino: typeof _201.Action;
        ClaimRecord: {
            typeUrl: string;
            encode(message: _201.ClaimRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.ClaimRecord;
            fromPartial(object: Partial<_201.ClaimRecord>): _201.ClaimRecord;
            fromAmino(object: _201.ClaimRecordAmino): _201.ClaimRecord;
            toAmino(message: _201.ClaimRecord): _201.ClaimRecordAmino;
            fromAminoMsg(object: _201.ClaimRecordAminoMsg): _201.ClaimRecord;
            fromProtoMsg(message: _201.ClaimRecordProtoMsg): _201.ClaimRecord;
            toProto(message: _201.ClaimRecord): Uint8Array;
            toProtoMsg(message: _201.ClaimRecord): _201.ClaimRecordProtoMsg;
        };
    };
    const epochs: {
        QueryClientImpl: typeof _402.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            epochInfos(request?: _207.QueryEpochsInfoRequest): Promise<_207.QueryEpochsInfoResponse>;
            currentEpoch(request: _207.QueryCurrentEpochRequest): Promise<_207.QueryCurrentEpochResponse>;
            epochInfo(request: _207.QueryEpochInfoRequest): Promise<_207.QueryEpochInfoResponse>;
        };
        QueryEpochsInfoRequest: {
            typeUrl: string;
            encode(message: _207.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.QueryEpochsInfoRequest;
            fromPartial(object: Partial<_207.QueryEpochsInfoRequest>): _207.QueryEpochsInfoRequest;
            fromAmino(object: _207.QueryEpochsInfoRequestAmino): _207.QueryEpochsInfoRequest;
            toAmino(message: _207.QueryEpochsInfoRequest): _207.QueryEpochsInfoRequestAmino;
            fromAminoMsg(object: _207.QueryEpochsInfoRequestAminoMsg): _207.QueryEpochsInfoRequest;
            fromProtoMsg(message: _207.QueryEpochsInfoRequestProtoMsg): _207.QueryEpochsInfoRequest;
            toProto(message: _207.QueryEpochsInfoRequest): Uint8Array;
            toProtoMsg(message: _207.QueryEpochsInfoRequest): _207.QueryEpochsInfoRequestProtoMsg;
        };
        QueryEpochsInfoResponse: {
            typeUrl: string;
            encode(message: _207.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.QueryEpochsInfoResponse;
            fromPartial(object: Partial<_207.QueryEpochsInfoResponse>): _207.QueryEpochsInfoResponse;
            fromAmino(object: _207.QueryEpochsInfoResponseAmino): _207.QueryEpochsInfoResponse;
            toAmino(message: _207.QueryEpochsInfoResponse): _207.QueryEpochsInfoResponseAmino;
            fromAminoMsg(object: _207.QueryEpochsInfoResponseAminoMsg): _207.QueryEpochsInfoResponse;
            fromProtoMsg(message: _207.QueryEpochsInfoResponseProtoMsg): _207.QueryEpochsInfoResponse;
            toProto(message: _207.QueryEpochsInfoResponse): Uint8Array;
            toProtoMsg(message: _207.QueryEpochsInfoResponse): _207.QueryEpochsInfoResponseProtoMsg;
        };
        QueryCurrentEpochRequest: {
            typeUrl: string;
            encode(message: _207.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.QueryCurrentEpochRequest;
            fromPartial(object: Partial<_207.QueryCurrentEpochRequest>): _207.QueryCurrentEpochRequest;
            fromAmino(object: _207.QueryCurrentEpochRequestAmino): _207.QueryCurrentEpochRequest;
            toAmino(message: _207.QueryCurrentEpochRequest): _207.QueryCurrentEpochRequestAmino;
            fromAminoMsg(object: _207.QueryCurrentEpochRequestAminoMsg): _207.QueryCurrentEpochRequest;
            fromProtoMsg(message: _207.QueryCurrentEpochRequestProtoMsg): _207.QueryCurrentEpochRequest;
            toProto(message: _207.QueryCurrentEpochRequest): Uint8Array;
            toProtoMsg(message: _207.QueryCurrentEpochRequest): _207.QueryCurrentEpochRequestProtoMsg;
        };
        QueryCurrentEpochResponse: {
            typeUrl: string;
            encode(message: _207.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.QueryCurrentEpochResponse;
            fromPartial(object: Partial<_207.QueryCurrentEpochResponse>): _207.QueryCurrentEpochResponse;
            fromAmino(object: _207.QueryCurrentEpochResponseAmino): _207.QueryCurrentEpochResponse;
            toAmino(message: _207.QueryCurrentEpochResponse): _207.QueryCurrentEpochResponseAmino;
            fromAminoMsg(object: _207.QueryCurrentEpochResponseAminoMsg): _207.QueryCurrentEpochResponse;
            fromProtoMsg(message: _207.QueryCurrentEpochResponseProtoMsg): _207.QueryCurrentEpochResponse;
            toProto(message: _207.QueryCurrentEpochResponse): Uint8Array;
            toProtoMsg(message: _207.QueryCurrentEpochResponse): _207.QueryCurrentEpochResponseProtoMsg;
        };
        QueryEpochInfoRequest: {
            typeUrl: string;
            encode(message: _207.QueryEpochInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.QueryEpochInfoRequest;
            fromPartial(object: Partial<_207.QueryEpochInfoRequest>): _207.QueryEpochInfoRequest;
            fromAmino(object: _207.QueryEpochInfoRequestAmino): _207.QueryEpochInfoRequest;
            toAmino(message: _207.QueryEpochInfoRequest): _207.QueryEpochInfoRequestAmino;
            fromAminoMsg(object: _207.QueryEpochInfoRequestAminoMsg): _207.QueryEpochInfoRequest;
            fromProtoMsg(message: _207.QueryEpochInfoRequestProtoMsg): _207.QueryEpochInfoRequest;
            toProto(message: _207.QueryEpochInfoRequest): Uint8Array;
            toProtoMsg(message: _207.QueryEpochInfoRequest): _207.QueryEpochInfoRequestProtoMsg;
        };
        QueryEpochInfoResponse: {
            typeUrl: string;
            encode(message: _207.QueryEpochInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.QueryEpochInfoResponse;
            fromPartial(object: Partial<_207.QueryEpochInfoResponse>): _207.QueryEpochInfoResponse;
            fromAmino(object: _207.QueryEpochInfoResponseAmino): _207.QueryEpochInfoResponse;
            toAmino(message: _207.QueryEpochInfoResponse): _207.QueryEpochInfoResponseAmino;
            fromAminoMsg(object: _207.QueryEpochInfoResponseAminoMsg): _207.QueryEpochInfoResponse;
            fromProtoMsg(message: _207.QueryEpochInfoResponseProtoMsg): _207.QueryEpochInfoResponse;
            toProto(message: _207.QueryEpochInfoResponse): Uint8Array;
            toProtoMsg(message: _207.QueryEpochInfoResponse): _207.QueryEpochInfoResponseProtoMsg;
        };
        EpochInfo: {
            typeUrl: string;
            encode(message: _206.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.EpochInfo;
            fromPartial(object: Partial<_206.EpochInfo>): _206.EpochInfo;
            fromAmino(object: _206.EpochInfoAmino): _206.EpochInfo;
            toAmino(message: _206.EpochInfo): _206.EpochInfoAmino;
            fromAminoMsg(object: _206.EpochInfoAminoMsg): _206.EpochInfo;
            fromProtoMsg(message: _206.EpochInfoProtoMsg): _206.EpochInfo;
            toProto(message: _206.EpochInfo): Uint8Array;
            toProtoMsg(message: _206.EpochInfo): _206.EpochInfoProtoMsg;
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
    };
    const icacallbacks: {
        QueryClientImpl: typeof _403.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _212.QueryParamsRequest): Promise<_212.QueryParamsResponse>;
            callbackData(request: _212.QueryGetCallbackDataRequest): Promise<_212.QueryGetCallbackDataResponse>;
            callbackDataAll(request?: _212.QueryAllCallbackDataRequest): Promise<_212.QueryAllCallbackDataResponse>;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _212.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.QueryParamsRequest;
            fromPartial(_: Partial<_212.QueryParamsRequest>): _212.QueryParamsRequest;
            fromAmino(_: _212.QueryParamsRequestAmino): _212.QueryParamsRequest;
            toAmino(_: _212.QueryParamsRequest): _212.QueryParamsRequestAmino;
            fromAminoMsg(object: _212.QueryParamsRequestAminoMsg): _212.QueryParamsRequest;
            fromProtoMsg(message: _212.QueryParamsRequestProtoMsg): _212.QueryParamsRequest;
            toProto(message: _212.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _212.QueryParamsRequest): _212.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _212.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.QueryParamsResponse;
            fromPartial(object: Partial<_212.QueryParamsResponse>): _212.QueryParamsResponse;
            fromAmino(object: _212.QueryParamsResponseAmino): _212.QueryParamsResponse;
            toAmino(message: _212.QueryParamsResponse): _212.QueryParamsResponseAmino;
            fromAminoMsg(object: _212.QueryParamsResponseAminoMsg): _212.QueryParamsResponse;
            fromProtoMsg(message: _212.QueryParamsResponseProtoMsg): _212.QueryParamsResponse;
            toProto(message: _212.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _212.QueryParamsResponse): _212.QueryParamsResponseProtoMsg;
        };
        QueryGetCallbackDataRequest: {
            typeUrl: string;
            encode(message: _212.QueryGetCallbackDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.QueryGetCallbackDataRequest;
            fromPartial(object: Partial<_212.QueryGetCallbackDataRequest>): _212.QueryGetCallbackDataRequest;
            fromAmino(object: _212.QueryGetCallbackDataRequestAmino): _212.QueryGetCallbackDataRequest;
            toAmino(message: _212.QueryGetCallbackDataRequest): _212.QueryGetCallbackDataRequestAmino;
            fromAminoMsg(object: _212.QueryGetCallbackDataRequestAminoMsg): _212.QueryGetCallbackDataRequest;
            fromProtoMsg(message: _212.QueryGetCallbackDataRequestProtoMsg): _212.QueryGetCallbackDataRequest;
            toProto(message: _212.QueryGetCallbackDataRequest): Uint8Array;
            toProtoMsg(message: _212.QueryGetCallbackDataRequest): _212.QueryGetCallbackDataRequestProtoMsg;
        };
        QueryGetCallbackDataResponse: {
            typeUrl: string;
            encode(message: _212.QueryGetCallbackDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.QueryGetCallbackDataResponse;
            fromPartial(object: Partial<_212.QueryGetCallbackDataResponse>): _212.QueryGetCallbackDataResponse;
            fromAmino(object: _212.QueryGetCallbackDataResponseAmino): _212.QueryGetCallbackDataResponse;
            toAmino(message: _212.QueryGetCallbackDataResponse): _212.QueryGetCallbackDataResponseAmino;
            fromAminoMsg(object: _212.QueryGetCallbackDataResponseAminoMsg): _212.QueryGetCallbackDataResponse;
            fromProtoMsg(message: _212.QueryGetCallbackDataResponseProtoMsg): _212.QueryGetCallbackDataResponse;
            toProto(message: _212.QueryGetCallbackDataResponse): Uint8Array;
            toProtoMsg(message: _212.QueryGetCallbackDataResponse): _212.QueryGetCallbackDataResponseProtoMsg;
        };
        QueryAllCallbackDataRequest: {
            typeUrl: string;
            encode(message: _212.QueryAllCallbackDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.QueryAllCallbackDataRequest;
            fromPartial(object: Partial<_212.QueryAllCallbackDataRequest>): _212.QueryAllCallbackDataRequest;
            fromAmino(object: _212.QueryAllCallbackDataRequestAmino): _212.QueryAllCallbackDataRequest;
            toAmino(message: _212.QueryAllCallbackDataRequest): _212.QueryAllCallbackDataRequestAmino;
            fromAminoMsg(object: _212.QueryAllCallbackDataRequestAminoMsg): _212.QueryAllCallbackDataRequest;
            fromProtoMsg(message: _212.QueryAllCallbackDataRequestProtoMsg): _212.QueryAllCallbackDataRequest;
            toProto(message: _212.QueryAllCallbackDataRequest): Uint8Array;
            toProtoMsg(message: _212.QueryAllCallbackDataRequest): _212.QueryAllCallbackDataRequestProtoMsg;
        };
        QueryAllCallbackDataResponse: {
            typeUrl: string;
            encode(message: _212.QueryAllCallbackDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.QueryAllCallbackDataResponse;
            fromPartial(object: Partial<_212.QueryAllCallbackDataResponse>): _212.QueryAllCallbackDataResponse;
            fromAmino(object: _212.QueryAllCallbackDataResponseAmino): _212.QueryAllCallbackDataResponse;
            toAmino(message: _212.QueryAllCallbackDataResponse): _212.QueryAllCallbackDataResponseAmino;
            fromAminoMsg(object: _212.QueryAllCallbackDataResponseAminoMsg): _212.QueryAllCallbackDataResponse;
            fromProtoMsg(message: _212.QueryAllCallbackDataResponseProtoMsg): _212.QueryAllCallbackDataResponse;
            toProto(message: _212.QueryAllCallbackDataResponse): Uint8Array;
            toProtoMsg(message: _212.QueryAllCallbackDataResponse): _212.QueryAllCallbackDataResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _211.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.Params;
            fromPartial(_: Partial<_211.Params>): _211.Params;
            fromAmino(_: _211.ParamsAmino): _211.Params;
            toAmino(_: _211.Params): _211.ParamsAmino;
            fromAminoMsg(object: _211.ParamsAminoMsg): _211.Params;
            fromProtoMsg(message: _211.ParamsProtoMsg): _211.Params;
            toProto(message: _211.Params): Uint8Array;
            toProtoMsg(message: _211.Params): _211.ParamsProtoMsg;
        };
        IcacallbacksPacketData: {
            typeUrl: string;
            encode(message: _210.IcacallbacksPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.IcacallbacksPacketData;
            fromPartial(object: Partial<_210.IcacallbacksPacketData>): _210.IcacallbacksPacketData;
            fromAmino(object: _210.IcacallbacksPacketDataAmino): _210.IcacallbacksPacketData;
            toAmino(message: _210.IcacallbacksPacketData): _210.IcacallbacksPacketDataAmino;
            fromAminoMsg(object: _210.IcacallbacksPacketDataAminoMsg): _210.IcacallbacksPacketData;
            fromProtoMsg(message: _210.IcacallbacksPacketDataProtoMsg): _210.IcacallbacksPacketData;
            toProto(message: _210.IcacallbacksPacketData): Uint8Array;
            toProtoMsg(message: _210.IcacallbacksPacketData): _210.IcacallbacksPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _210.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.NoData;
            fromPartial(_: Partial<_210.NoData>): _210.NoData;
            fromAmino(_: _210.NoDataAmino): _210.NoData;
            toAmino(_: _210.NoData): _210.NoDataAmino;
            fromAminoMsg(object: _210.NoDataAminoMsg): _210.NoData;
            fromProtoMsg(message: _210.NoDataProtoMsg): _210.NoData;
            toProto(message: _210.NoData): Uint8Array;
            toProtoMsg(message: _210.NoData): _210.NoDataProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _209.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.GenesisState;
            fromPartial(object: Partial<_209.GenesisState>): _209.GenesisState;
            fromAmino(object: _209.GenesisStateAmino): _209.GenesisState;
            toAmino(message: _209.GenesisState): _209.GenesisStateAmino;
            fromAminoMsg(object: _209.GenesisStateAminoMsg): _209.GenesisState;
            fromProtoMsg(message: _209.GenesisStateProtoMsg): _209.GenesisState;
            toProto(message: _209.GenesisState): Uint8Array;
            toProtoMsg(message: _209.GenesisState): _209.GenesisStateProtoMsg;
        };
        CallbackData: {
            typeUrl: string;
            encode(message: _208.CallbackData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.CallbackData;
            fromPartial(object: Partial<_208.CallbackData>): _208.CallbackData;
            fromAmino(object: _208.CallbackDataAmino): _208.CallbackData;
            toAmino(message: _208.CallbackData): _208.CallbackDataAmino;
            fromAminoMsg(object: _208.CallbackDataAminoMsg): _208.CallbackData;
            fromProtoMsg(message: _208.CallbackDataProtoMsg): _208.CallbackData;
            toProto(message: _208.CallbackData): Uint8Array;
            toProtoMsg(message: _208.CallbackData): _208.CallbackDataProtoMsg;
        };
    };
    const icaoracle: {
        MsgClientImpl: typeof _415.MsgClientImpl;
        QueryClientImpl: typeof _404.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            oracle(request: _218.QueryOracleRequest): Promise<_218.QueryOracleResponse>;
            allOracles(request?: _218.QueryAllOraclesRequest): Promise<_218.QueryAllOraclesResponse>;
            activeOracles(request: _218.QueryActiveOraclesRequest): Promise<_218.QueryActiveOraclesResponse>;
            metrics(request: _218.QueryMetricsRequest): Promise<_218.QueryMetricsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                addOracle(value: _219.MsgAddOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                instantiateOracle(value: _219.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreOracleICA(value: _219.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                toggleOracle(value: _219.MsgToggleOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeOracle(value: _219.MsgRemoveOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                addOracle(value: _219.MsgAddOracle): {
                    typeUrl: string;
                    value: _219.MsgAddOracle;
                };
                instantiateOracle(value: _219.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: _219.MsgInstantiateOracle;
                };
                restoreOracleICA(value: _219.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: _219.MsgRestoreOracleICA;
                };
                toggleOracle(value: _219.MsgToggleOracle): {
                    typeUrl: string;
                    value: _219.MsgToggleOracle;
                };
                removeOracle(value: _219.MsgRemoveOracle): {
                    typeUrl: string;
                    value: _219.MsgRemoveOracle;
                };
            };
            fromPartial: {
                addOracle(value: _219.MsgAddOracle): {
                    typeUrl: string;
                    value: _219.MsgAddOracle;
                };
                instantiateOracle(value: _219.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: _219.MsgInstantiateOracle;
                };
                restoreOracleICA(value: _219.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: _219.MsgRestoreOracleICA;
                };
                toggleOracle(value: _219.MsgToggleOracle): {
                    typeUrl: string;
                    value: _219.MsgToggleOracle;
                };
                removeOracle(value: _219.MsgRemoveOracle): {
                    typeUrl: string;
                    value: _219.MsgRemoveOracle;
                };
            };
        };
        AminoConverter: {
            "/stride.icaoracle.MsgAddOracle": {
                aminoType: string;
                toAmino: (message: _219.MsgAddOracle) => _219.MsgAddOracleAmino;
                fromAmino: (object: _219.MsgAddOracleAmino) => _219.MsgAddOracle;
            };
            "/stride.icaoracle.MsgInstantiateOracle": {
                aminoType: string;
                toAmino: (message: _219.MsgInstantiateOracle) => _219.MsgInstantiateOracleAmino;
                fromAmino: (object: _219.MsgInstantiateOracleAmino) => _219.MsgInstantiateOracle;
            };
            "/stride.icaoracle.MsgRestoreOracleICA": {
                aminoType: string;
                toAmino: (message: _219.MsgRestoreOracleICA) => _219.MsgRestoreOracleICAAmino;
                fromAmino: (object: _219.MsgRestoreOracleICAAmino) => _219.MsgRestoreOracleICA;
            };
            "/stride.icaoracle.MsgToggleOracle": {
                aminoType: string;
                toAmino: (message: _219.MsgToggleOracle) => _219.MsgToggleOracleAmino;
                fromAmino: (object: _219.MsgToggleOracleAmino) => _219.MsgToggleOracle;
            };
            "/stride.icaoracle.MsgRemoveOracle": {
                aminoType: string;
                toAmino: (message: _219.MsgRemoveOracle) => _219.MsgRemoveOracleAmino;
                fromAmino: (object: _219.MsgRemoveOracleAmino) => _219.MsgRemoveOracle;
            };
        };
        MsgAddOracle: {
            typeUrl: string;
            encode(message: _219.MsgAddOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.MsgAddOracle;
            fromPartial(object: Partial<_219.MsgAddOracle>): _219.MsgAddOracle;
            fromAmino(object: _219.MsgAddOracleAmino): _219.MsgAddOracle;
            toAmino(message: _219.MsgAddOracle): _219.MsgAddOracleAmino;
            fromAminoMsg(object: _219.MsgAddOracleAminoMsg): _219.MsgAddOracle;
            toAminoMsg(message: _219.MsgAddOracle): _219.MsgAddOracleAminoMsg;
            fromProtoMsg(message: _219.MsgAddOracleProtoMsg): _219.MsgAddOracle;
            toProto(message: _219.MsgAddOracle): Uint8Array;
            toProtoMsg(message: _219.MsgAddOracle): _219.MsgAddOracleProtoMsg;
        };
        MsgAddOracleResponse: {
            typeUrl: string;
            encode(_: _219.MsgAddOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.MsgAddOracleResponse;
            fromPartial(_: Partial<_219.MsgAddOracleResponse>): _219.MsgAddOracleResponse;
            fromAmino(_: _219.MsgAddOracleResponseAmino): _219.MsgAddOracleResponse;
            toAmino(_: _219.MsgAddOracleResponse): _219.MsgAddOracleResponseAmino;
            fromAminoMsg(object: _219.MsgAddOracleResponseAminoMsg): _219.MsgAddOracleResponse;
            fromProtoMsg(message: _219.MsgAddOracleResponseProtoMsg): _219.MsgAddOracleResponse;
            toProto(message: _219.MsgAddOracleResponse): Uint8Array;
            toProtoMsg(message: _219.MsgAddOracleResponse): _219.MsgAddOracleResponseProtoMsg;
        };
        MsgInstantiateOracle: {
            typeUrl: string;
            encode(message: _219.MsgInstantiateOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.MsgInstantiateOracle;
            fromPartial(object: Partial<_219.MsgInstantiateOracle>): _219.MsgInstantiateOracle;
            fromAmino(object: _219.MsgInstantiateOracleAmino): _219.MsgInstantiateOracle;
            toAmino(message: _219.MsgInstantiateOracle): _219.MsgInstantiateOracleAmino;
            fromAminoMsg(object: _219.MsgInstantiateOracleAminoMsg): _219.MsgInstantiateOracle;
            toAminoMsg(message: _219.MsgInstantiateOracle): _219.MsgInstantiateOracleAminoMsg;
            fromProtoMsg(message: _219.MsgInstantiateOracleProtoMsg): _219.MsgInstantiateOracle;
            toProto(message: _219.MsgInstantiateOracle): Uint8Array;
            toProtoMsg(message: _219.MsgInstantiateOracle): _219.MsgInstantiateOracleProtoMsg;
        };
        MsgInstantiateOracleResponse: {
            typeUrl: string;
            encode(_: _219.MsgInstantiateOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.MsgInstantiateOracleResponse;
            fromPartial(_: Partial<_219.MsgInstantiateOracleResponse>): _219.MsgInstantiateOracleResponse;
            fromAmino(_: _219.MsgInstantiateOracleResponseAmino): _219.MsgInstantiateOracleResponse;
            toAmino(_: _219.MsgInstantiateOracleResponse): _219.MsgInstantiateOracleResponseAmino;
            fromAminoMsg(object: _219.MsgInstantiateOracleResponseAminoMsg): _219.MsgInstantiateOracleResponse;
            fromProtoMsg(message: _219.MsgInstantiateOracleResponseProtoMsg): _219.MsgInstantiateOracleResponse;
            toProto(message: _219.MsgInstantiateOracleResponse): Uint8Array;
            toProtoMsg(message: _219.MsgInstantiateOracleResponse): _219.MsgInstantiateOracleResponseProtoMsg;
        };
        MsgRestoreOracleICA: {
            typeUrl: string;
            encode(message: _219.MsgRestoreOracleICA, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.MsgRestoreOracleICA;
            fromPartial(object: Partial<_219.MsgRestoreOracleICA>): _219.MsgRestoreOracleICA;
            fromAmino(object: _219.MsgRestoreOracleICAAmino): _219.MsgRestoreOracleICA;
            toAmino(message: _219.MsgRestoreOracleICA): _219.MsgRestoreOracleICAAmino;
            fromAminoMsg(object: _219.MsgRestoreOracleICAAminoMsg): _219.MsgRestoreOracleICA;
            toAminoMsg(message: _219.MsgRestoreOracleICA): _219.MsgRestoreOracleICAAminoMsg;
            fromProtoMsg(message: _219.MsgRestoreOracleICAProtoMsg): _219.MsgRestoreOracleICA;
            toProto(message: _219.MsgRestoreOracleICA): Uint8Array;
            toProtoMsg(message: _219.MsgRestoreOracleICA): _219.MsgRestoreOracleICAProtoMsg;
        };
        MsgRestoreOracleICAResponse: {
            typeUrl: string;
            encode(_: _219.MsgRestoreOracleICAResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.MsgRestoreOracleICAResponse;
            fromPartial(_: Partial<_219.MsgRestoreOracleICAResponse>): _219.MsgRestoreOracleICAResponse;
            fromAmino(_: _219.MsgRestoreOracleICAResponseAmino): _219.MsgRestoreOracleICAResponse;
            toAmino(_: _219.MsgRestoreOracleICAResponse): _219.MsgRestoreOracleICAResponseAmino;
            fromAminoMsg(object: _219.MsgRestoreOracleICAResponseAminoMsg): _219.MsgRestoreOracleICAResponse;
            fromProtoMsg(message: _219.MsgRestoreOracleICAResponseProtoMsg): _219.MsgRestoreOracleICAResponse;
            toProto(message: _219.MsgRestoreOracleICAResponse): Uint8Array;
            toProtoMsg(message: _219.MsgRestoreOracleICAResponse): _219.MsgRestoreOracleICAResponseProtoMsg;
        };
        MsgToggleOracle: {
            typeUrl: string;
            encode(message: _219.MsgToggleOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.MsgToggleOracle;
            fromPartial(object: Partial<_219.MsgToggleOracle>): _219.MsgToggleOracle;
            fromAmino(object: _219.MsgToggleOracleAmino): _219.MsgToggleOracle;
            toAmino(message: _219.MsgToggleOracle): _219.MsgToggleOracleAmino;
            fromAminoMsg(object: _219.MsgToggleOracleAminoMsg): _219.MsgToggleOracle;
            toAminoMsg(message: _219.MsgToggleOracle): _219.MsgToggleOracleAminoMsg;
            fromProtoMsg(message: _219.MsgToggleOracleProtoMsg): _219.MsgToggleOracle;
            toProto(message: _219.MsgToggleOracle): Uint8Array;
            toProtoMsg(message: _219.MsgToggleOracle): _219.MsgToggleOracleProtoMsg;
        };
        MsgToggleOracleResponse: {
            typeUrl: string;
            encode(_: _219.MsgToggleOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.MsgToggleOracleResponse;
            fromPartial(_: Partial<_219.MsgToggleOracleResponse>): _219.MsgToggleOracleResponse;
            fromAmino(_: _219.MsgToggleOracleResponseAmino): _219.MsgToggleOracleResponse;
            toAmino(_: _219.MsgToggleOracleResponse): _219.MsgToggleOracleResponseAmino;
            fromAminoMsg(object: _219.MsgToggleOracleResponseAminoMsg): _219.MsgToggleOracleResponse;
            fromProtoMsg(message: _219.MsgToggleOracleResponseProtoMsg): _219.MsgToggleOracleResponse;
            toProto(message: _219.MsgToggleOracleResponse): Uint8Array;
            toProtoMsg(message: _219.MsgToggleOracleResponse): _219.MsgToggleOracleResponseProtoMsg;
        };
        MsgRemoveOracle: {
            typeUrl: string;
            encode(message: _219.MsgRemoveOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.MsgRemoveOracle;
            fromPartial(object: Partial<_219.MsgRemoveOracle>): _219.MsgRemoveOracle;
            fromAmino(object: _219.MsgRemoveOracleAmino): _219.MsgRemoveOracle;
            toAmino(message: _219.MsgRemoveOracle): _219.MsgRemoveOracleAmino;
            fromAminoMsg(object: _219.MsgRemoveOracleAminoMsg): _219.MsgRemoveOracle;
            toAminoMsg(message: _219.MsgRemoveOracle): _219.MsgRemoveOracleAminoMsg;
            fromProtoMsg(message: _219.MsgRemoveOracleProtoMsg): _219.MsgRemoveOracle;
            toProto(message: _219.MsgRemoveOracle): Uint8Array;
            toProtoMsg(message: _219.MsgRemoveOracle): _219.MsgRemoveOracleProtoMsg;
        };
        MsgRemoveOracleResponse: {
            typeUrl: string;
            encode(_: _219.MsgRemoveOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.MsgRemoveOracleResponse;
            fromPartial(_: Partial<_219.MsgRemoveOracleResponse>): _219.MsgRemoveOracleResponse;
            fromAmino(_: _219.MsgRemoveOracleResponseAmino): _219.MsgRemoveOracleResponse;
            toAmino(_: _219.MsgRemoveOracleResponse): _219.MsgRemoveOracleResponseAmino;
            fromAminoMsg(object: _219.MsgRemoveOracleResponseAminoMsg): _219.MsgRemoveOracleResponse;
            fromProtoMsg(message: _219.MsgRemoveOracleResponseProtoMsg): _219.MsgRemoveOracleResponse;
            toProto(message: _219.MsgRemoveOracleResponse): Uint8Array;
            toProtoMsg(message: _219.MsgRemoveOracleResponse): _219.MsgRemoveOracleResponseProtoMsg;
        };
        QueryOracleRequest: {
            typeUrl: string;
            encode(message: _218.QueryOracleRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryOracleRequest;
            fromPartial(object: Partial<_218.QueryOracleRequest>): _218.QueryOracleRequest;
            fromAmino(object: _218.QueryOracleRequestAmino): _218.QueryOracleRequest;
            toAmino(message: _218.QueryOracleRequest): _218.QueryOracleRequestAmino;
            fromAminoMsg(object: _218.QueryOracleRequestAminoMsg): _218.QueryOracleRequest;
            fromProtoMsg(message: _218.QueryOracleRequestProtoMsg): _218.QueryOracleRequest;
            toProto(message: _218.QueryOracleRequest): Uint8Array;
            toProtoMsg(message: _218.QueryOracleRequest): _218.QueryOracleRequestProtoMsg;
        };
        QueryOracleResponse: {
            typeUrl: string;
            encode(message: _218.QueryOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryOracleResponse;
            fromPartial(object: Partial<_218.QueryOracleResponse>): _218.QueryOracleResponse;
            fromAmino(object: _218.QueryOracleResponseAmino): _218.QueryOracleResponse;
            toAmino(message: _218.QueryOracleResponse): _218.QueryOracleResponseAmino;
            fromAminoMsg(object: _218.QueryOracleResponseAminoMsg): _218.QueryOracleResponse;
            fromProtoMsg(message: _218.QueryOracleResponseProtoMsg): _218.QueryOracleResponse;
            toProto(message: _218.QueryOracleResponse): Uint8Array;
            toProtoMsg(message: _218.QueryOracleResponse): _218.QueryOracleResponseProtoMsg;
        };
        QueryAllOraclesRequest: {
            typeUrl: string;
            encode(_: _218.QueryAllOraclesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryAllOraclesRequest;
            fromPartial(_: Partial<_218.QueryAllOraclesRequest>): _218.QueryAllOraclesRequest;
            fromAmino(_: _218.QueryAllOraclesRequestAmino): _218.QueryAllOraclesRequest;
            toAmino(_: _218.QueryAllOraclesRequest): _218.QueryAllOraclesRequestAmino;
            fromAminoMsg(object: _218.QueryAllOraclesRequestAminoMsg): _218.QueryAllOraclesRequest;
            fromProtoMsg(message: _218.QueryAllOraclesRequestProtoMsg): _218.QueryAllOraclesRequest;
            toProto(message: _218.QueryAllOraclesRequest): Uint8Array;
            toProtoMsg(message: _218.QueryAllOraclesRequest): _218.QueryAllOraclesRequestProtoMsg;
        };
        QueryAllOraclesResponse: {
            typeUrl: string;
            encode(message: _218.QueryAllOraclesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryAllOraclesResponse;
            fromPartial(object: Partial<_218.QueryAllOraclesResponse>): _218.QueryAllOraclesResponse;
            fromAmino(object: _218.QueryAllOraclesResponseAmino): _218.QueryAllOraclesResponse;
            toAmino(message: _218.QueryAllOraclesResponse): _218.QueryAllOraclesResponseAmino;
            fromAminoMsg(object: _218.QueryAllOraclesResponseAminoMsg): _218.QueryAllOraclesResponse;
            fromProtoMsg(message: _218.QueryAllOraclesResponseProtoMsg): _218.QueryAllOraclesResponse;
            toProto(message: _218.QueryAllOraclesResponse): Uint8Array;
            toProtoMsg(message: _218.QueryAllOraclesResponse): _218.QueryAllOraclesResponseProtoMsg;
        };
        QueryActiveOraclesRequest: {
            typeUrl: string;
            encode(message: _218.QueryActiveOraclesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryActiveOraclesRequest;
            fromPartial(object: Partial<_218.QueryActiveOraclesRequest>): _218.QueryActiveOraclesRequest;
            fromAmino(object: _218.QueryActiveOraclesRequestAmino): _218.QueryActiveOraclesRequest;
            toAmino(message: _218.QueryActiveOraclesRequest): _218.QueryActiveOraclesRequestAmino;
            fromAminoMsg(object: _218.QueryActiveOraclesRequestAminoMsg): _218.QueryActiveOraclesRequest;
            fromProtoMsg(message: _218.QueryActiveOraclesRequestProtoMsg): _218.QueryActiveOraclesRequest;
            toProto(message: _218.QueryActiveOraclesRequest): Uint8Array;
            toProtoMsg(message: _218.QueryActiveOraclesRequest): _218.QueryActiveOraclesRequestProtoMsg;
        };
        QueryActiveOraclesResponse: {
            typeUrl: string;
            encode(message: _218.QueryActiveOraclesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryActiveOraclesResponse;
            fromPartial(object: Partial<_218.QueryActiveOraclesResponse>): _218.QueryActiveOraclesResponse;
            fromAmino(object: _218.QueryActiveOraclesResponseAmino): _218.QueryActiveOraclesResponse;
            toAmino(message: _218.QueryActiveOraclesResponse): _218.QueryActiveOraclesResponseAmino;
            fromAminoMsg(object: _218.QueryActiveOraclesResponseAminoMsg): _218.QueryActiveOraclesResponse;
            fromProtoMsg(message: _218.QueryActiveOraclesResponseProtoMsg): _218.QueryActiveOraclesResponse;
            toProto(message: _218.QueryActiveOraclesResponse): Uint8Array;
            toProtoMsg(message: _218.QueryActiveOraclesResponse): _218.QueryActiveOraclesResponseProtoMsg;
        };
        QueryMetricsRequest: {
            typeUrl: string;
            encode(message: _218.QueryMetricsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryMetricsRequest;
            fromPartial(object: Partial<_218.QueryMetricsRequest>): _218.QueryMetricsRequest;
            fromAmino(object: _218.QueryMetricsRequestAmino): _218.QueryMetricsRequest;
            toAmino(message: _218.QueryMetricsRequest): _218.QueryMetricsRequestAmino;
            fromAminoMsg(object: _218.QueryMetricsRequestAminoMsg): _218.QueryMetricsRequest;
            fromProtoMsg(message: _218.QueryMetricsRequestProtoMsg): _218.QueryMetricsRequest;
            toProto(message: _218.QueryMetricsRequest): Uint8Array;
            toProtoMsg(message: _218.QueryMetricsRequest): _218.QueryMetricsRequestProtoMsg;
        };
        QueryMetricsResponse: {
            typeUrl: string;
            encode(message: _218.QueryMetricsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryMetricsResponse;
            fromPartial(object: Partial<_218.QueryMetricsResponse>): _218.QueryMetricsResponse;
            fromAmino(object: _218.QueryMetricsResponseAmino): _218.QueryMetricsResponse;
            toAmino(message: _218.QueryMetricsResponse): _218.QueryMetricsResponseAmino;
            fromAminoMsg(object: _218.QueryMetricsResponseAminoMsg): _218.QueryMetricsResponse;
            fromProtoMsg(message: _218.QueryMetricsResponseProtoMsg): _218.QueryMetricsResponse;
            toProto(message: _218.QueryMetricsResponse): Uint8Array;
            toProtoMsg(message: _218.QueryMetricsResponse): _218.QueryMetricsResponseProtoMsg;
        };
        metricStatusFromJSON(object: any): _217.MetricStatus;
        metricStatusToJSON(object: _217.MetricStatus): string;
        MetricStatus: typeof _217.MetricStatus;
        MetricStatusSDKType: typeof _217.MetricStatus;
        MetricStatusAmino: typeof _217.MetricStatus;
        Oracle: {
            typeUrl: string;
            encode(message: _217.Oracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.Oracle;
            fromPartial(object: Partial<_217.Oracle>): _217.Oracle;
            fromAmino(object: _217.OracleAmino): _217.Oracle;
            toAmino(message: _217.Oracle): _217.OracleAmino;
            fromAminoMsg(object: _217.OracleAminoMsg): _217.Oracle;
            fromProtoMsg(message: _217.OracleProtoMsg): _217.Oracle;
            toProto(message: _217.Oracle): Uint8Array;
            toProtoMsg(message: _217.Oracle): _217.OracleProtoMsg;
        };
        Metric: {
            typeUrl: string;
            encode(message: _217.Metric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.Metric;
            fromPartial(object: Partial<_217.Metric>): _217.Metric;
            fromAmino(object: _217.MetricAmino): _217.Metric;
            toAmino(message: _217.Metric): _217.MetricAmino;
            fromAminoMsg(object: _217.MetricAminoMsg): _217.Metric;
            fromProtoMsg(message: _217.MetricProtoMsg): _217.Metric;
            toProto(message: _217.Metric): Uint8Array;
            toProtoMsg(message: _217.Metric): _217.MetricProtoMsg;
        };
        RedemptionRateAttributes: {
            typeUrl: string;
            encode(message: _217.RedemptionRateAttributes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.RedemptionRateAttributes;
            fromPartial(object: Partial<_217.RedemptionRateAttributes>): _217.RedemptionRateAttributes;
            fromAmino(object: _217.RedemptionRateAttributesAmino): _217.RedemptionRateAttributes;
            toAmino(message: _217.RedemptionRateAttributes): _217.RedemptionRateAttributesAmino;
            fromAminoMsg(object: _217.RedemptionRateAttributesAminoMsg): _217.RedemptionRateAttributes;
            fromProtoMsg(message: _217.RedemptionRateAttributesProtoMsg): _217.RedemptionRateAttributes;
            toProto(message: _217.RedemptionRateAttributes): Uint8Array;
            toProtoMsg(message: _217.RedemptionRateAttributes): _217.RedemptionRateAttributesProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _216.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.Params;
            fromPartial(_: Partial<_216.Params>): _216.Params;
            fromAmino(_: _216.ParamsAmino): _216.Params;
            toAmino(_: _216.Params): _216.ParamsAmino;
            fromAminoMsg(object: _216.ParamsAminoMsg): _216.Params;
            fromProtoMsg(message: _216.ParamsProtoMsg): _216.Params;
            toProto(message: _216.Params): Uint8Array;
            toProtoMsg(message: _216.Params): _216.ParamsProtoMsg;
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
        MsgInstantiateOracleContract: {
            typeUrl: string;
            encode(message: _215.MsgInstantiateOracleContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgInstantiateOracleContract;
            fromPartial(object: Partial<_215.MsgInstantiateOracleContract>): _215.MsgInstantiateOracleContract;
            fromAmino(object: _215.MsgInstantiateOracleContractAmino): _215.MsgInstantiateOracleContract;
            toAmino(message: _215.MsgInstantiateOracleContract): _215.MsgInstantiateOracleContractAmino;
            fromAminoMsg(object: _215.MsgInstantiateOracleContractAminoMsg): _215.MsgInstantiateOracleContract;
            fromProtoMsg(message: _215.MsgInstantiateOracleContractProtoMsg): _215.MsgInstantiateOracleContract;
            toProto(message: _215.MsgInstantiateOracleContract): Uint8Array;
            toProtoMsg(message: _215.MsgInstantiateOracleContract): _215.MsgInstantiateOracleContractProtoMsg;
        };
        MsgExecuteContractPostMetric: {
            typeUrl: string;
            encode(message: _215.MsgExecuteContractPostMetric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgExecuteContractPostMetric;
            fromPartial(object: Partial<_215.MsgExecuteContractPostMetric>): _215.MsgExecuteContractPostMetric;
            fromAmino(object: _215.MsgExecuteContractPostMetricAmino): _215.MsgExecuteContractPostMetric;
            toAmino(message: _215.MsgExecuteContractPostMetric): _215.MsgExecuteContractPostMetricAmino;
            fromAminoMsg(object: _215.MsgExecuteContractPostMetricAminoMsg): _215.MsgExecuteContractPostMetric;
            fromProtoMsg(message: _215.MsgExecuteContractPostMetricProtoMsg): _215.MsgExecuteContractPostMetric;
            toProto(message: _215.MsgExecuteContractPostMetric): Uint8Array;
            toProtoMsg(message: _215.MsgExecuteContractPostMetric): _215.MsgExecuteContractPostMetricProtoMsg;
        };
        MsgPostMetric: {
            typeUrl: string;
            encode(message: _215.MsgPostMetric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgPostMetric;
            fromPartial(object: Partial<_215.MsgPostMetric>): _215.MsgPostMetric;
            fromAmino(object: _215.MsgPostMetricAmino): _215.MsgPostMetric;
            toAmino(message: _215.MsgPostMetric): _215.MsgPostMetricAmino;
            fromAminoMsg(object: _215.MsgPostMetricAminoMsg): _215.MsgPostMetric;
            fromProtoMsg(message: _215.MsgPostMetricProtoMsg): _215.MsgPostMetric;
            toProto(message: _215.MsgPostMetric): Uint8Array;
            toProtoMsg(message: _215.MsgPostMetric): _215.MsgPostMetricProtoMsg;
        };
        InstantiateOracleCallback: {
            typeUrl: string;
            encode(message: _214.InstantiateOracleCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.InstantiateOracleCallback;
            fromPartial(object: Partial<_214.InstantiateOracleCallback>): _214.InstantiateOracleCallback;
            fromAmino(object: _214.InstantiateOracleCallbackAmino): _214.InstantiateOracleCallback;
            toAmino(message: _214.InstantiateOracleCallback): _214.InstantiateOracleCallbackAmino;
            fromAminoMsg(object: _214.InstantiateOracleCallbackAminoMsg): _214.InstantiateOracleCallback;
            fromProtoMsg(message: _214.InstantiateOracleCallbackProtoMsg): _214.InstantiateOracleCallback;
            toProto(message: _214.InstantiateOracleCallback): Uint8Array;
            toProtoMsg(message: _214.InstantiateOracleCallback): _214.InstantiateOracleCallbackProtoMsg;
        };
        UpdateOracleCallback: {
            typeUrl: string;
            encode(message: _214.UpdateOracleCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.UpdateOracleCallback;
            fromPartial(object: Partial<_214.UpdateOracleCallback>): _214.UpdateOracleCallback;
            fromAmino(object: _214.UpdateOracleCallbackAmino): _214.UpdateOracleCallback;
            toAmino(message: _214.UpdateOracleCallback): _214.UpdateOracleCallbackAmino;
            fromAminoMsg(object: _214.UpdateOracleCallbackAminoMsg): _214.UpdateOracleCallback;
            fromProtoMsg(message: _214.UpdateOracleCallbackProtoMsg): _214.UpdateOracleCallback;
            toProto(message: _214.UpdateOracleCallback): Uint8Array;
            toProtoMsg(message: _214.UpdateOracleCallback): _214.UpdateOracleCallbackProtoMsg;
        };
    };
    const icqoracle: {
        MsgClientImpl: typeof _416.MsgClientImpl;
        QueryClientImpl: typeof _405.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            tokenPrice(request: _222.QueryTokenPriceRequest): Promise<_222.TokenPriceResponse>;
            tokenPrices(request?: _222.QueryTokenPricesRequest): Promise<_222.QueryTokenPricesResponse>;
            params(request?: _222.QueryParamsRequest): Promise<_222.QueryParamsResponse>;
            tokenPriceForQuoteDenom(request: _222.QueryTokenPriceForQuoteDenomRequest): Promise<_222.QueryTokenPriceForQuoteDenomResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                registerTokenPriceQuery(value: _223.MsgRegisterTokenPriceQuery): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeTokenPriceQuery(value: _223.MsgRemoveTokenPriceQuery): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateParams(value: _223.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                registerTokenPriceQuery(value: _223.MsgRegisterTokenPriceQuery): {
                    typeUrl: string;
                    value: _223.MsgRegisterTokenPriceQuery;
                };
                removeTokenPriceQuery(value: _223.MsgRemoveTokenPriceQuery): {
                    typeUrl: string;
                    value: _223.MsgRemoveTokenPriceQuery;
                };
                updateParams(value: _223.MsgUpdateParams): {
                    typeUrl: string;
                    value: _223.MsgUpdateParams;
                };
            };
            fromPartial: {
                registerTokenPriceQuery(value: _223.MsgRegisterTokenPriceQuery): {
                    typeUrl: string;
                    value: _223.MsgRegisterTokenPriceQuery;
                };
                removeTokenPriceQuery(value: _223.MsgRemoveTokenPriceQuery): {
                    typeUrl: string;
                    value: _223.MsgRemoveTokenPriceQuery;
                };
                updateParams(value: _223.MsgUpdateParams): {
                    typeUrl: string;
                    value: _223.MsgUpdateParams;
                };
            };
        };
        AminoConverter: {
            "/stride.icqoracle.MsgRegisterTokenPriceQuery": {
                aminoType: string;
                toAmino: (message: _223.MsgRegisterTokenPriceQuery) => _223.MsgRegisterTokenPriceQueryAmino;
                fromAmino: (object: _223.MsgRegisterTokenPriceQueryAmino) => _223.MsgRegisterTokenPriceQuery;
            };
            "/stride.icqoracle.MsgRemoveTokenPriceQuery": {
                aminoType: string;
                toAmino: (message: _223.MsgRemoveTokenPriceQuery) => _223.MsgRemoveTokenPriceQueryAmino;
                fromAmino: (object: _223.MsgRemoveTokenPriceQueryAmino) => _223.MsgRemoveTokenPriceQuery;
            };
            "/stride.icqoracle.MsgUpdateParams": {
                aminoType: string;
                toAmino: (message: _223.MsgUpdateParams) => _223.MsgUpdateParamsAmino;
                fromAmino: (object: _223.MsgUpdateParamsAmino) => _223.MsgUpdateParams;
            };
        };
        MsgRegisterTokenPriceQuery: {
            typeUrl: string;
            encode(message: _223.MsgRegisterTokenPriceQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgRegisterTokenPriceQuery;
            fromPartial(object: Partial<_223.MsgRegisterTokenPriceQuery>): _223.MsgRegisterTokenPriceQuery;
            fromAmino(object: _223.MsgRegisterTokenPriceQueryAmino): _223.MsgRegisterTokenPriceQuery;
            toAmino(message: _223.MsgRegisterTokenPriceQuery): _223.MsgRegisterTokenPriceQueryAmino;
            fromAminoMsg(object: _223.MsgRegisterTokenPriceQueryAminoMsg): _223.MsgRegisterTokenPriceQuery;
            toAminoMsg(message: _223.MsgRegisterTokenPriceQuery): _223.MsgRegisterTokenPriceQueryAminoMsg;
            fromProtoMsg(message: _223.MsgRegisterTokenPriceQueryProtoMsg): _223.MsgRegisterTokenPriceQuery;
            toProto(message: _223.MsgRegisterTokenPriceQuery): Uint8Array;
            toProtoMsg(message: _223.MsgRegisterTokenPriceQuery): _223.MsgRegisterTokenPriceQueryProtoMsg;
        };
        MsgRegisterTokenPriceQueryResponse: {
            typeUrl: string;
            encode(_: _223.MsgRegisterTokenPriceQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgRegisterTokenPriceQueryResponse;
            fromPartial(_: Partial<_223.MsgRegisterTokenPriceQueryResponse>): _223.MsgRegisterTokenPriceQueryResponse;
            fromAmino(_: _223.MsgRegisterTokenPriceQueryResponseAmino): _223.MsgRegisterTokenPriceQueryResponse;
            toAmino(_: _223.MsgRegisterTokenPriceQueryResponse): _223.MsgRegisterTokenPriceQueryResponseAmino;
            fromAminoMsg(object: _223.MsgRegisterTokenPriceQueryResponseAminoMsg): _223.MsgRegisterTokenPriceQueryResponse;
            fromProtoMsg(message: _223.MsgRegisterTokenPriceQueryResponseProtoMsg): _223.MsgRegisterTokenPriceQueryResponse;
            toProto(message: _223.MsgRegisterTokenPriceQueryResponse): Uint8Array;
            toProtoMsg(message: _223.MsgRegisterTokenPriceQueryResponse): _223.MsgRegisterTokenPriceQueryResponseProtoMsg;
        };
        MsgRemoveTokenPriceQuery: {
            typeUrl: string;
            encode(message: _223.MsgRemoveTokenPriceQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgRemoveTokenPriceQuery;
            fromPartial(object: Partial<_223.MsgRemoveTokenPriceQuery>): _223.MsgRemoveTokenPriceQuery;
            fromAmino(object: _223.MsgRemoveTokenPriceQueryAmino): _223.MsgRemoveTokenPriceQuery;
            toAmino(message: _223.MsgRemoveTokenPriceQuery): _223.MsgRemoveTokenPriceQueryAmino;
            fromAminoMsg(object: _223.MsgRemoveTokenPriceQueryAminoMsg): _223.MsgRemoveTokenPriceQuery;
            toAminoMsg(message: _223.MsgRemoveTokenPriceQuery): _223.MsgRemoveTokenPriceQueryAminoMsg;
            fromProtoMsg(message: _223.MsgRemoveTokenPriceQueryProtoMsg): _223.MsgRemoveTokenPriceQuery;
            toProto(message: _223.MsgRemoveTokenPriceQuery): Uint8Array;
            toProtoMsg(message: _223.MsgRemoveTokenPriceQuery): _223.MsgRemoveTokenPriceQueryProtoMsg;
        };
        MsgRemoveTokenPriceQueryResponse: {
            typeUrl: string;
            encode(_: _223.MsgRemoveTokenPriceQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgRemoveTokenPriceQueryResponse;
            fromPartial(_: Partial<_223.MsgRemoveTokenPriceQueryResponse>): _223.MsgRemoveTokenPriceQueryResponse;
            fromAmino(_: _223.MsgRemoveTokenPriceQueryResponseAmino): _223.MsgRemoveTokenPriceQueryResponse;
            toAmino(_: _223.MsgRemoveTokenPriceQueryResponse): _223.MsgRemoveTokenPriceQueryResponseAmino;
            fromAminoMsg(object: _223.MsgRemoveTokenPriceQueryResponseAminoMsg): _223.MsgRemoveTokenPriceQueryResponse;
            fromProtoMsg(message: _223.MsgRemoveTokenPriceQueryResponseProtoMsg): _223.MsgRemoveTokenPriceQueryResponse;
            toProto(message: _223.MsgRemoveTokenPriceQueryResponse): Uint8Array;
            toProtoMsg(message: _223.MsgRemoveTokenPriceQueryResponse): _223.MsgRemoveTokenPriceQueryResponseProtoMsg;
        };
        MsgUpdateParams: {
            typeUrl: string;
            encode(message: _223.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgUpdateParams;
            fromPartial(object: Partial<_223.MsgUpdateParams>): _223.MsgUpdateParams;
            fromAmino(object: _223.MsgUpdateParamsAmino): _223.MsgUpdateParams;
            toAmino(message: _223.MsgUpdateParams): _223.MsgUpdateParamsAmino;
            fromAminoMsg(object: _223.MsgUpdateParamsAminoMsg): _223.MsgUpdateParams;
            toAminoMsg(message: _223.MsgUpdateParams): _223.MsgUpdateParamsAminoMsg;
            fromProtoMsg(message: _223.MsgUpdateParamsProtoMsg): _223.MsgUpdateParams;
            toProto(message: _223.MsgUpdateParams): Uint8Array;
            toProtoMsg(message: _223.MsgUpdateParams): _223.MsgUpdateParamsProtoMsg;
        };
        MsgUpdateParamsResponse: {
            typeUrl: string;
            encode(_: _223.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgUpdateParamsResponse;
            fromPartial(_: Partial<_223.MsgUpdateParamsResponse>): _223.MsgUpdateParamsResponse;
            fromAmino(_: _223.MsgUpdateParamsResponseAmino): _223.MsgUpdateParamsResponse;
            toAmino(_: _223.MsgUpdateParamsResponse): _223.MsgUpdateParamsResponseAmino;
            fromAminoMsg(object: _223.MsgUpdateParamsResponseAminoMsg): _223.MsgUpdateParamsResponse;
            fromProtoMsg(message: _223.MsgUpdateParamsResponseProtoMsg): _223.MsgUpdateParamsResponse;
            toProto(message: _223.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _223.MsgUpdateParamsResponse): _223.MsgUpdateParamsResponseProtoMsg;
        };
        QueryTokenPriceRequest: {
            typeUrl: string;
            encode(message: _222.QueryTokenPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.QueryTokenPriceRequest;
            fromPartial(object: Partial<_222.QueryTokenPriceRequest>): _222.QueryTokenPriceRequest;
            fromAmino(object: _222.QueryTokenPriceRequestAmino): _222.QueryTokenPriceRequest;
            toAmino(message: _222.QueryTokenPriceRequest): _222.QueryTokenPriceRequestAmino;
            fromAminoMsg(object: _222.QueryTokenPriceRequestAminoMsg): _222.QueryTokenPriceRequest;
            fromProtoMsg(message: _222.QueryTokenPriceRequestProtoMsg): _222.QueryTokenPriceRequest;
            toProto(message: _222.QueryTokenPriceRequest): Uint8Array;
            toProtoMsg(message: _222.QueryTokenPriceRequest): _222.QueryTokenPriceRequestProtoMsg;
        };
        QueryTokenPricesRequest: {
            typeUrl: string;
            encode(message: _222.QueryTokenPricesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.QueryTokenPricesRequest;
            fromPartial(object: Partial<_222.QueryTokenPricesRequest>): _222.QueryTokenPricesRequest;
            fromAmino(object: _222.QueryTokenPricesRequestAmino): _222.QueryTokenPricesRequest;
            toAmino(message: _222.QueryTokenPricesRequest): _222.QueryTokenPricesRequestAmino;
            fromAminoMsg(object: _222.QueryTokenPricesRequestAminoMsg): _222.QueryTokenPricesRequest;
            fromProtoMsg(message: _222.QueryTokenPricesRequestProtoMsg): _222.QueryTokenPricesRequest;
            toProto(message: _222.QueryTokenPricesRequest): Uint8Array;
            toProtoMsg(message: _222.QueryTokenPricesRequest): _222.QueryTokenPricesRequestProtoMsg;
        };
        TokenPriceResponse: {
            typeUrl: string;
            encode(message: _222.TokenPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.TokenPriceResponse;
            fromPartial(object: Partial<_222.TokenPriceResponse>): _222.TokenPriceResponse;
            fromAmino(object: _222.TokenPriceResponseAmino): _222.TokenPriceResponse;
            toAmino(message: _222.TokenPriceResponse): _222.TokenPriceResponseAmino;
            fromAminoMsg(object: _222.TokenPriceResponseAminoMsg): _222.TokenPriceResponse;
            fromProtoMsg(message: _222.TokenPriceResponseProtoMsg): _222.TokenPriceResponse;
            toProto(message: _222.TokenPriceResponse): Uint8Array;
            toProtoMsg(message: _222.TokenPriceResponse): _222.TokenPriceResponseProtoMsg;
        };
        QueryTokenPricesResponse: {
            typeUrl: string;
            encode(message: _222.QueryTokenPricesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.QueryTokenPricesResponse;
            fromPartial(object: Partial<_222.QueryTokenPricesResponse>): _222.QueryTokenPricesResponse;
            fromAmino(object: _222.QueryTokenPricesResponseAmino): _222.QueryTokenPricesResponse;
            toAmino(message: _222.QueryTokenPricesResponse): _222.QueryTokenPricesResponseAmino;
            fromAminoMsg(object: _222.QueryTokenPricesResponseAminoMsg): _222.QueryTokenPricesResponse;
            fromProtoMsg(message: _222.QueryTokenPricesResponseProtoMsg): _222.QueryTokenPricesResponse;
            toProto(message: _222.QueryTokenPricesResponse): Uint8Array;
            toProtoMsg(message: _222.QueryTokenPricesResponse): _222.QueryTokenPricesResponseProtoMsg;
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
        QueryTokenPriceForQuoteDenomRequest: {
            typeUrl: string;
            encode(message: _222.QueryTokenPriceForQuoteDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.QueryTokenPriceForQuoteDenomRequest;
            fromPartial(object: Partial<_222.QueryTokenPriceForQuoteDenomRequest>): _222.QueryTokenPriceForQuoteDenomRequest;
            fromAmino(object: _222.QueryTokenPriceForQuoteDenomRequestAmino): _222.QueryTokenPriceForQuoteDenomRequest;
            toAmino(message: _222.QueryTokenPriceForQuoteDenomRequest): _222.QueryTokenPriceForQuoteDenomRequestAmino;
            fromAminoMsg(object: _222.QueryTokenPriceForQuoteDenomRequestAminoMsg): _222.QueryTokenPriceForQuoteDenomRequest;
            fromProtoMsg(message: _222.QueryTokenPriceForQuoteDenomRequestProtoMsg): _222.QueryTokenPriceForQuoteDenomRequest;
            toProto(message: _222.QueryTokenPriceForQuoteDenomRequest): Uint8Array;
            toProtoMsg(message: _222.QueryTokenPriceForQuoteDenomRequest): _222.QueryTokenPriceForQuoteDenomRequestProtoMsg;
        };
        QueryTokenPriceForQuoteDenomResponse: {
            typeUrl: string;
            encode(message: _222.QueryTokenPriceForQuoteDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.QueryTokenPriceForQuoteDenomResponse;
            fromPartial(object: Partial<_222.QueryTokenPriceForQuoteDenomResponse>): _222.QueryTokenPriceForQuoteDenomResponse;
            fromAmino(object: _222.QueryTokenPriceForQuoteDenomResponseAmino): _222.QueryTokenPriceForQuoteDenomResponse;
            toAmino(message: _222.QueryTokenPriceForQuoteDenomResponse): _222.QueryTokenPriceForQuoteDenomResponseAmino;
            fromAminoMsg(object: _222.QueryTokenPriceForQuoteDenomResponseAminoMsg): _222.QueryTokenPriceForQuoteDenomResponse;
            fromProtoMsg(message: _222.QueryTokenPriceForQuoteDenomResponseProtoMsg): _222.QueryTokenPriceForQuoteDenomResponse;
            toProto(message: _222.QueryTokenPriceForQuoteDenomResponse): Uint8Array;
            toProtoMsg(message: _222.QueryTokenPriceForQuoteDenomResponse): _222.QueryTokenPriceForQuoteDenomResponseProtoMsg;
        };
        TokenPrice: {
            typeUrl: string;
            encode(message: _221.TokenPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.TokenPrice;
            fromPartial(object: Partial<_221.TokenPrice>): _221.TokenPrice;
            fromAmino(object: _221.TokenPriceAmino): _221.TokenPrice;
            toAmino(message: _221.TokenPrice): _221.TokenPriceAmino;
            fromAminoMsg(object: _221.TokenPriceAminoMsg): _221.TokenPrice;
            fromProtoMsg(message: _221.TokenPriceProtoMsg): _221.TokenPrice;
            toProto(message: _221.TokenPrice): Uint8Array;
            toProtoMsg(message: _221.TokenPrice): _221.TokenPriceProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _221.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.Params;
            fromPartial(object: Partial<_221.Params>): _221.Params;
            fromAmino(object: _221.ParamsAmino): _221.Params;
            toAmino(message: _221.Params): _221.ParamsAmino;
            fromAminoMsg(object: _221.ParamsAminoMsg): _221.Params;
            fromProtoMsg(message: _221.ParamsProtoMsg): _221.Params;
            toProto(message: _221.Params): Uint8Array;
            toProtoMsg(message: _221.Params): _221.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _220.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _220.GenesisState;
            fromPartial(object: Partial<_220.GenesisState>): _220.GenesisState;
            fromAmino(object: _220.GenesisStateAmino): _220.GenesisState;
            toAmino(message: _220.GenesisState): _220.GenesisStateAmino;
            fromAminoMsg(object: _220.GenesisStateAminoMsg): _220.GenesisState;
            fromProtoMsg(message: _220.GenesisStateProtoMsg): _220.GenesisState;
            toProto(message: _220.GenesisState): Uint8Array;
            toProtoMsg(message: _220.GenesisState): _220.GenesisStateProtoMsg;
        };
    };
    namespace interchainquery {
        const v1: {
            MsgClientImpl: typeof _417.MsgClientImpl;
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitQueryResponse(value: _225.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitQueryResponse(value: _225.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _225.MsgSubmitQueryResponse;
                    };
                };
                fromPartial: {
                    submitQueryResponse(value: _225.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _225.MsgSubmitQueryResponse;
                    };
                };
            };
            AminoConverter: {
                "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
                    aminoType: string;
                    toAmino: (message: _225.MsgSubmitQueryResponse) => _225.MsgSubmitQueryResponseAmino;
                    fromAmino: (object: _225.MsgSubmitQueryResponseAmino) => _225.MsgSubmitQueryResponse;
                };
            };
            QueryPendingQueriesRequest: {
                typeUrl: string;
                encode(_: _226.QueryPendingQueriesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryPendingQueriesRequest;
                fromPartial(_: Partial<_226.QueryPendingQueriesRequest>): _226.QueryPendingQueriesRequest;
                fromAmino(_: _226.QueryPendingQueriesRequestAmino): _226.QueryPendingQueriesRequest;
                toAmino(_: _226.QueryPendingQueriesRequest): _226.QueryPendingQueriesRequestAmino;
                fromAminoMsg(object: _226.QueryPendingQueriesRequestAminoMsg): _226.QueryPendingQueriesRequest;
                fromProtoMsg(message: _226.QueryPendingQueriesRequestProtoMsg): _226.QueryPendingQueriesRequest;
                toProto(message: _226.QueryPendingQueriesRequest): Uint8Array;
                toProtoMsg(message: _226.QueryPendingQueriesRequest): _226.QueryPendingQueriesRequestProtoMsg;
            };
            QueryPendingQueriesResponse: {
                typeUrl: string;
                encode(message: _226.QueryPendingQueriesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryPendingQueriesResponse;
                fromPartial(object: Partial<_226.QueryPendingQueriesResponse>): _226.QueryPendingQueriesResponse;
                fromAmino(object: _226.QueryPendingQueriesResponseAmino): _226.QueryPendingQueriesResponse;
                toAmino(message: _226.QueryPendingQueriesResponse): _226.QueryPendingQueriesResponseAmino;
                fromAminoMsg(object: _226.QueryPendingQueriesResponseAminoMsg): _226.QueryPendingQueriesResponse;
                fromProtoMsg(message: _226.QueryPendingQueriesResponseProtoMsg): _226.QueryPendingQueriesResponse;
                toProto(message: _226.QueryPendingQueriesResponse): Uint8Array;
                toProtoMsg(message: _226.QueryPendingQueriesResponse): _226.QueryPendingQueriesResponseProtoMsg;
            };
            MsgSubmitQueryResponse: {
                typeUrl: string;
                encode(message: _225.MsgSubmitQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.MsgSubmitQueryResponse;
                fromPartial(object: Partial<_225.MsgSubmitQueryResponse>): _225.MsgSubmitQueryResponse;
                fromAmino(object: _225.MsgSubmitQueryResponseAmino): _225.MsgSubmitQueryResponse;
                toAmino(message: _225.MsgSubmitQueryResponse): _225.MsgSubmitQueryResponseAmino;
                fromAminoMsg(object: _225.MsgSubmitQueryResponseAminoMsg): _225.MsgSubmitQueryResponse;
                fromProtoMsg(message: _225.MsgSubmitQueryResponseProtoMsg): _225.MsgSubmitQueryResponse;
                toProto(message: _225.MsgSubmitQueryResponse): Uint8Array;
                toProtoMsg(message: _225.MsgSubmitQueryResponse): _225.MsgSubmitQueryResponseProtoMsg;
            };
            MsgSubmitQueryResponseResponse: {
                typeUrl: string;
                encode(_: _225.MsgSubmitQueryResponseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.MsgSubmitQueryResponseResponse;
                fromPartial(_: Partial<_225.MsgSubmitQueryResponseResponse>): _225.MsgSubmitQueryResponseResponse;
                fromAmino(_: _225.MsgSubmitQueryResponseResponseAmino): _225.MsgSubmitQueryResponseResponse;
                toAmino(_: _225.MsgSubmitQueryResponseResponse): _225.MsgSubmitQueryResponseResponseAmino;
                fromAminoMsg(object: _225.MsgSubmitQueryResponseResponseAminoMsg): _225.MsgSubmitQueryResponseResponse;
                fromProtoMsg(message: _225.MsgSubmitQueryResponseResponseProtoMsg): _225.MsgSubmitQueryResponseResponse;
                toProto(message: _225.MsgSubmitQueryResponseResponse): Uint8Array;
                toProtoMsg(message: _225.MsgSubmitQueryResponseResponse): _225.MsgSubmitQueryResponseResponseProtoMsg;
            };
            timeoutPolicyFromJSON(object: any): _224.TimeoutPolicy;
            timeoutPolicyToJSON(object: _224.TimeoutPolicy): string;
            TimeoutPolicy: typeof _224.TimeoutPolicy;
            TimeoutPolicySDKType: typeof _224.TimeoutPolicy;
            TimeoutPolicyAmino: typeof _224.TimeoutPolicy;
            Query: {
                typeUrl: string;
                encode(message: _224.Query, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.Query;
                fromPartial(object: Partial<_224.Query>): _224.Query;
                fromAmino(object: _224.QueryAmino): _224.Query;
                toAmino(message: _224.Query): _224.QueryAmino;
                fromAminoMsg(object: _224.QueryAminoMsg): _224.Query;
                fromProtoMsg(message: _224.QueryProtoMsg): _224.Query;
                toProto(message: _224.Query): Uint8Array;
                toProtoMsg(message: _224.Query): _224.QueryProtoMsg;
            };
            DataPoint: {
                typeUrl: string;
                encode(message: _224.DataPoint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.DataPoint;
                fromPartial(object: Partial<_224.DataPoint>): _224.DataPoint;
                fromAmino(object: _224.DataPointAmino): _224.DataPoint;
                toAmino(message: _224.DataPoint): _224.DataPointAmino;
                fromAminoMsg(object: _224.DataPointAminoMsg): _224.DataPoint;
                fromProtoMsg(message: _224.DataPointProtoMsg): _224.DataPoint;
                toProto(message: _224.DataPoint): Uint8Array;
                toProtoMsg(message: _224.DataPoint): _224.DataPointProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _224.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.GenesisState;
                fromPartial(object: Partial<_224.GenesisState>): _224.GenesisState;
                fromAmino(object: _224.GenesisStateAmino): _224.GenesisState;
                toAmino(message: _224.GenesisState): _224.GenesisStateAmino;
                fromAminoMsg(object: _224.GenesisStateAminoMsg): _224.GenesisState;
                fromProtoMsg(message: _224.GenesisStateProtoMsg): _224.GenesisState;
                toProto(message: _224.GenesisState): Uint8Array;
                toProtoMsg(message: _224.GenesisState): _224.GenesisStateProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _406.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _229.QueryParamsRequest): Promise<_229.QueryParamsResponse>;
                epochProvisions(request?: _229.QueryEpochProvisionsRequest): Promise<_229.QueryEpochProvisionsResponse>;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _229.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.QueryParamsRequest;
                fromPartial(_: Partial<_229.QueryParamsRequest>): _229.QueryParamsRequest;
                fromAmino(_: _229.QueryParamsRequestAmino): _229.QueryParamsRequest;
                toAmino(_: _229.QueryParamsRequest): _229.QueryParamsRequestAmino;
                fromAminoMsg(object: _229.QueryParamsRequestAminoMsg): _229.QueryParamsRequest;
                fromProtoMsg(message: _229.QueryParamsRequestProtoMsg): _229.QueryParamsRequest;
                toProto(message: _229.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _229.QueryParamsRequest): _229.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _229.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.QueryParamsResponse;
                fromPartial(object: Partial<_229.QueryParamsResponse>): _229.QueryParamsResponse;
                fromAmino(object: _229.QueryParamsResponseAmino): _229.QueryParamsResponse;
                toAmino(message: _229.QueryParamsResponse): _229.QueryParamsResponseAmino;
                fromAminoMsg(object: _229.QueryParamsResponseAminoMsg): _229.QueryParamsResponse;
                fromProtoMsg(message: _229.QueryParamsResponseProtoMsg): _229.QueryParamsResponse;
                toProto(message: _229.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _229.QueryParamsResponse): _229.QueryParamsResponseProtoMsg;
            };
            QueryEpochProvisionsRequest: {
                typeUrl: string;
                encode(_: _229.QueryEpochProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_229.QueryEpochProvisionsRequest>): _229.QueryEpochProvisionsRequest;
                fromAmino(_: _229.QueryEpochProvisionsRequestAmino): _229.QueryEpochProvisionsRequest;
                toAmino(_: _229.QueryEpochProvisionsRequest): _229.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _229.QueryEpochProvisionsRequestAminoMsg): _229.QueryEpochProvisionsRequest;
                fromProtoMsg(message: _229.QueryEpochProvisionsRequestProtoMsg): _229.QueryEpochProvisionsRequest;
                toProto(message: _229.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _229.QueryEpochProvisionsRequest): _229.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                typeUrl: string;
                encode(message: _229.QueryEpochProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_229.QueryEpochProvisionsResponse>): _229.QueryEpochProvisionsResponse;
                fromAmino(object: _229.QueryEpochProvisionsResponseAmino): _229.QueryEpochProvisionsResponse;
                toAmino(message: _229.QueryEpochProvisionsResponse): _229.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _229.QueryEpochProvisionsResponseAminoMsg): _229.QueryEpochProvisionsResponse;
                fromProtoMsg(message: _229.QueryEpochProvisionsResponseProtoMsg): _229.QueryEpochProvisionsResponse;
                toProto(message: _229.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _229.QueryEpochProvisionsResponse): _229.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _228.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.Minter;
                fromPartial(object: Partial<_228.Minter>): _228.Minter;
                fromAmino(object: _228.MinterAmino): _228.Minter;
                toAmino(message: _228.Minter): _228.MinterAmino;
                fromAminoMsg(object: _228.MinterAminoMsg): _228.Minter;
                fromProtoMsg(message: _228.MinterProtoMsg): _228.Minter;
                toProto(message: _228.Minter): Uint8Array;
                toProtoMsg(message: _228.Minter): _228.MinterProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                encode(message: _228.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.DistributionProportions;
                fromPartial(object: Partial<_228.DistributionProportions>): _228.DistributionProportions;
                fromAmino(object: _228.DistributionProportionsAmino): _228.DistributionProportions;
                toAmino(message: _228.DistributionProportions): _228.DistributionProportionsAmino;
                fromAminoMsg(object: _228.DistributionProportionsAminoMsg): _228.DistributionProportions;
                fromProtoMsg(message: _228.DistributionProportionsProtoMsg): _228.DistributionProportions;
                toProto(message: _228.DistributionProportions): Uint8Array;
                toProtoMsg(message: _228.DistributionProportions): _228.DistributionProportionsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _228.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.Params;
                fromPartial(object: Partial<_228.Params>): _228.Params;
                fromAmino(object: _228.ParamsAmino): _228.Params;
                toAmino(message: _228.Params): _228.ParamsAmino;
                fromAminoMsg(object: _228.ParamsAminoMsg): _228.Params;
                fromProtoMsg(message: _228.ParamsProtoMsg): _228.Params;
                toProto(message: _228.Params): Uint8Array;
                toProtoMsg(message: _228.Params): _228.ParamsProtoMsg;
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
    const records: {
        QueryClientImpl: typeof _407.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _233.QueryParamsRequest): Promise<_233.QueryParamsResponse>;
            userRedemptionRecord(request: _233.QueryGetUserRedemptionRecordRequest): Promise<_233.QueryGetUserRedemptionRecordResponse>;
            userRedemptionRecordAll(request?: _233.QueryAllUserRedemptionRecordRequest): Promise<_233.QueryAllUserRedemptionRecordResponse>;
            userRedemptionRecordForUser(request: _233.QueryAllUserRedemptionRecordForUserRequest): Promise<_233.QueryAllUserRedemptionRecordForUserResponse>;
            epochUnbondingRecord(request: _233.QueryGetEpochUnbondingRecordRequest): Promise<_233.QueryGetEpochUnbondingRecordResponse>;
            epochUnbondingRecordAll(request?: _233.QueryAllEpochUnbondingRecordRequest): Promise<_233.QueryAllEpochUnbondingRecordResponse>;
            depositRecord(request: _233.QueryGetDepositRecordRequest): Promise<_233.QueryGetDepositRecordResponse>;
            depositRecordAll(request?: _233.QueryAllDepositRecordRequest): Promise<_233.QueryAllDepositRecordResponse>;
            depositRecordByHost(request: _233.QueryDepositRecordByHostRequest): Promise<_233.QueryDepositRecordByHostResponse>;
            lSMDeposit(request: _233.QueryLSMDepositRequest): Promise<_233.QueryLSMDepositResponse>;
            lSMDeposits(request: _233.QueryLSMDepositsRequest): Promise<_233.QueryLSMDepositsResponse>;
        };
        depositRecord_StatusFromJSON(object: any): _234.DepositRecord_Status;
        depositRecord_StatusToJSON(object: _234.DepositRecord_Status): string;
        depositRecord_SourceFromJSON(object: any): _234.DepositRecord_Source;
        depositRecord_SourceToJSON(object: _234.DepositRecord_Source): string;
        hostZoneUnbonding_StatusFromJSON(object: any): _234.HostZoneUnbonding_Status;
        hostZoneUnbonding_StatusToJSON(object: _234.HostZoneUnbonding_Status): string;
        lSMTokenDeposit_StatusFromJSON(object: any): _234.LSMTokenDeposit_Status;
        lSMTokenDeposit_StatusToJSON(object: _234.LSMTokenDeposit_Status): string;
        DepositRecord_Status: typeof _234.DepositRecord_Status;
        DepositRecord_StatusSDKType: typeof _234.DepositRecord_Status;
        DepositRecord_StatusAmino: typeof _234.DepositRecord_Status;
        DepositRecord_Source: typeof _234.DepositRecord_Source;
        DepositRecord_SourceSDKType: typeof _234.DepositRecord_Source;
        DepositRecord_SourceAmino: typeof _234.DepositRecord_Source;
        HostZoneUnbonding_Status: typeof _234.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusSDKType: typeof _234.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusAmino: typeof _234.HostZoneUnbonding_Status;
        LSMTokenDeposit_Status: typeof _234.LSMTokenDeposit_Status;
        LSMTokenDeposit_StatusSDKType: typeof _234.LSMTokenDeposit_Status;
        LSMTokenDeposit_StatusAmino: typeof _234.LSMTokenDeposit_Status;
        UserRedemptionRecord: {
            typeUrl: string;
            encode(message: _234.UserRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.UserRedemptionRecord;
            fromPartial(object: Partial<_234.UserRedemptionRecord>): _234.UserRedemptionRecord;
            fromAmino(object: _234.UserRedemptionRecordAmino): _234.UserRedemptionRecord;
            toAmino(message: _234.UserRedemptionRecord): _234.UserRedemptionRecordAmino;
            fromAminoMsg(object: _234.UserRedemptionRecordAminoMsg): _234.UserRedemptionRecord;
            fromProtoMsg(message: _234.UserRedemptionRecordProtoMsg): _234.UserRedemptionRecord;
            toProto(message: _234.UserRedemptionRecord): Uint8Array;
            toProtoMsg(message: _234.UserRedemptionRecord): _234.UserRedemptionRecordProtoMsg;
        };
        DepositRecord: {
            typeUrl: string;
            encode(message: _234.DepositRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.DepositRecord;
            fromPartial(object: Partial<_234.DepositRecord>): _234.DepositRecord;
            fromAmino(object: _234.DepositRecordAmino): _234.DepositRecord;
            toAmino(message: _234.DepositRecord): _234.DepositRecordAmino;
            fromAminoMsg(object: _234.DepositRecordAminoMsg): _234.DepositRecord;
            fromProtoMsg(message: _234.DepositRecordProtoMsg): _234.DepositRecord;
            toProto(message: _234.DepositRecord): Uint8Array;
            toProtoMsg(message: _234.DepositRecord): _234.DepositRecordProtoMsg;
        };
        HostZoneUnbonding: {
            typeUrl: string;
            encode(message: _234.HostZoneUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.HostZoneUnbonding;
            fromPartial(object: Partial<_234.HostZoneUnbonding>): _234.HostZoneUnbonding;
            fromAmino(object: _234.HostZoneUnbondingAmino): _234.HostZoneUnbonding;
            toAmino(message: _234.HostZoneUnbonding): _234.HostZoneUnbondingAmino;
            fromAminoMsg(object: _234.HostZoneUnbondingAminoMsg): _234.HostZoneUnbonding;
            fromProtoMsg(message: _234.HostZoneUnbondingProtoMsg): _234.HostZoneUnbonding;
            toProto(message: _234.HostZoneUnbonding): Uint8Array;
            toProtoMsg(message: _234.HostZoneUnbonding): _234.HostZoneUnbondingProtoMsg;
        };
        EpochUnbondingRecord: {
            typeUrl: string;
            encode(message: _234.EpochUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.EpochUnbondingRecord;
            fromPartial(object: Partial<_234.EpochUnbondingRecord>): _234.EpochUnbondingRecord;
            fromAmino(object: _234.EpochUnbondingRecordAmino): _234.EpochUnbondingRecord;
            toAmino(message: _234.EpochUnbondingRecord): _234.EpochUnbondingRecordAmino;
            fromAminoMsg(object: _234.EpochUnbondingRecordAminoMsg): _234.EpochUnbondingRecord;
            fromProtoMsg(message: _234.EpochUnbondingRecordProtoMsg): _234.EpochUnbondingRecord;
            toProto(message: _234.EpochUnbondingRecord): Uint8Array;
            toProtoMsg(message: _234.EpochUnbondingRecord): _234.EpochUnbondingRecordProtoMsg;
        };
        LSMTokenDeposit: {
            typeUrl: string;
            encode(message: _234.LSMTokenDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.LSMTokenDeposit;
            fromPartial(object: Partial<_234.LSMTokenDeposit>): _234.LSMTokenDeposit;
            fromAmino(object: _234.LSMTokenDepositAmino): _234.LSMTokenDeposit;
            toAmino(message: _234.LSMTokenDeposit): _234.LSMTokenDepositAmino;
            fromAminoMsg(object: _234.LSMTokenDepositAminoMsg): _234.LSMTokenDeposit;
            fromProtoMsg(message: _234.LSMTokenDepositProtoMsg): _234.LSMTokenDeposit;
            toProto(message: _234.LSMTokenDeposit): Uint8Array;
            toProtoMsg(message: _234.LSMTokenDeposit): _234.LSMTokenDepositProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _233.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryParamsRequest;
            fromPartial(_: Partial<_233.QueryParamsRequest>): _233.QueryParamsRequest;
            fromAmino(_: _233.QueryParamsRequestAmino): _233.QueryParamsRequest;
            toAmino(_: _233.QueryParamsRequest): _233.QueryParamsRequestAmino;
            fromAminoMsg(object: _233.QueryParamsRequestAminoMsg): _233.QueryParamsRequest;
            fromProtoMsg(message: _233.QueryParamsRequestProtoMsg): _233.QueryParamsRequest;
            toProto(message: _233.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _233.QueryParamsRequest): _233.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _233.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryParamsResponse;
            fromPartial(object: Partial<_233.QueryParamsResponse>): _233.QueryParamsResponse;
            fromAmino(object: _233.QueryParamsResponseAmino): _233.QueryParamsResponse;
            toAmino(message: _233.QueryParamsResponse): _233.QueryParamsResponseAmino;
            fromAminoMsg(object: _233.QueryParamsResponseAminoMsg): _233.QueryParamsResponse;
            fromProtoMsg(message: _233.QueryParamsResponseProtoMsg): _233.QueryParamsResponse;
            toProto(message: _233.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _233.QueryParamsResponse): _233.QueryParamsResponseProtoMsg;
        };
        QueryGetDepositRecordRequest: {
            typeUrl: string;
            encode(message: _233.QueryGetDepositRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryGetDepositRecordRequest;
            fromPartial(object: Partial<_233.QueryGetDepositRecordRequest>): _233.QueryGetDepositRecordRequest;
            fromAmino(object: _233.QueryGetDepositRecordRequestAmino): _233.QueryGetDepositRecordRequest;
            toAmino(message: _233.QueryGetDepositRecordRequest): _233.QueryGetDepositRecordRequestAmino;
            fromAminoMsg(object: _233.QueryGetDepositRecordRequestAminoMsg): _233.QueryGetDepositRecordRequest;
            fromProtoMsg(message: _233.QueryGetDepositRecordRequestProtoMsg): _233.QueryGetDepositRecordRequest;
            toProto(message: _233.QueryGetDepositRecordRequest): Uint8Array;
            toProtoMsg(message: _233.QueryGetDepositRecordRequest): _233.QueryGetDepositRecordRequestProtoMsg;
        };
        QueryGetDepositRecordResponse: {
            typeUrl: string;
            encode(message: _233.QueryGetDepositRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryGetDepositRecordResponse;
            fromPartial(object: Partial<_233.QueryGetDepositRecordResponse>): _233.QueryGetDepositRecordResponse;
            fromAmino(object: _233.QueryGetDepositRecordResponseAmino): _233.QueryGetDepositRecordResponse;
            toAmino(message: _233.QueryGetDepositRecordResponse): _233.QueryGetDepositRecordResponseAmino;
            fromAminoMsg(object: _233.QueryGetDepositRecordResponseAminoMsg): _233.QueryGetDepositRecordResponse;
            fromProtoMsg(message: _233.QueryGetDepositRecordResponseProtoMsg): _233.QueryGetDepositRecordResponse;
            toProto(message: _233.QueryGetDepositRecordResponse): Uint8Array;
            toProtoMsg(message: _233.QueryGetDepositRecordResponse): _233.QueryGetDepositRecordResponseProtoMsg;
        };
        QueryAllDepositRecordRequest: {
            typeUrl: string;
            encode(message: _233.QueryAllDepositRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryAllDepositRecordRequest;
            fromPartial(object: Partial<_233.QueryAllDepositRecordRequest>): _233.QueryAllDepositRecordRequest;
            fromAmino(object: _233.QueryAllDepositRecordRequestAmino): _233.QueryAllDepositRecordRequest;
            toAmino(message: _233.QueryAllDepositRecordRequest): _233.QueryAllDepositRecordRequestAmino;
            fromAminoMsg(object: _233.QueryAllDepositRecordRequestAminoMsg): _233.QueryAllDepositRecordRequest;
            fromProtoMsg(message: _233.QueryAllDepositRecordRequestProtoMsg): _233.QueryAllDepositRecordRequest;
            toProto(message: _233.QueryAllDepositRecordRequest): Uint8Array;
            toProtoMsg(message: _233.QueryAllDepositRecordRequest): _233.QueryAllDepositRecordRequestProtoMsg;
        };
        QueryAllDepositRecordResponse: {
            typeUrl: string;
            encode(message: _233.QueryAllDepositRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryAllDepositRecordResponse;
            fromPartial(object: Partial<_233.QueryAllDepositRecordResponse>): _233.QueryAllDepositRecordResponse;
            fromAmino(object: _233.QueryAllDepositRecordResponseAmino): _233.QueryAllDepositRecordResponse;
            toAmino(message: _233.QueryAllDepositRecordResponse): _233.QueryAllDepositRecordResponseAmino;
            fromAminoMsg(object: _233.QueryAllDepositRecordResponseAminoMsg): _233.QueryAllDepositRecordResponse;
            fromProtoMsg(message: _233.QueryAllDepositRecordResponseProtoMsg): _233.QueryAllDepositRecordResponse;
            toProto(message: _233.QueryAllDepositRecordResponse): Uint8Array;
            toProtoMsg(message: _233.QueryAllDepositRecordResponse): _233.QueryAllDepositRecordResponseProtoMsg;
        };
        QueryDepositRecordByHostRequest: {
            typeUrl: string;
            encode(message: _233.QueryDepositRecordByHostRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryDepositRecordByHostRequest;
            fromPartial(object: Partial<_233.QueryDepositRecordByHostRequest>): _233.QueryDepositRecordByHostRequest;
            fromAmino(object: _233.QueryDepositRecordByHostRequestAmino): _233.QueryDepositRecordByHostRequest;
            toAmino(message: _233.QueryDepositRecordByHostRequest): _233.QueryDepositRecordByHostRequestAmino;
            fromAminoMsg(object: _233.QueryDepositRecordByHostRequestAminoMsg): _233.QueryDepositRecordByHostRequest;
            fromProtoMsg(message: _233.QueryDepositRecordByHostRequestProtoMsg): _233.QueryDepositRecordByHostRequest;
            toProto(message: _233.QueryDepositRecordByHostRequest): Uint8Array;
            toProtoMsg(message: _233.QueryDepositRecordByHostRequest): _233.QueryDepositRecordByHostRequestProtoMsg;
        };
        QueryDepositRecordByHostResponse: {
            typeUrl: string;
            encode(message: _233.QueryDepositRecordByHostResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryDepositRecordByHostResponse;
            fromPartial(object: Partial<_233.QueryDepositRecordByHostResponse>): _233.QueryDepositRecordByHostResponse;
            fromAmino(object: _233.QueryDepositRecordByHostResponseAmino): _233.QueryDepositRecordByHostResponse;
            toAmino(message: _233.QueryDepositRecordByHostResponse): _233.QueryDepositRecordByHostResponseAmino;
            fromAminoMsg(object: _233.QueryDepositRecordByHostResponseAminoMsg): _233.QueryDepositRecordByHostResponse;
            fromProtoMsg(message: _233.QueryDepositRecordByHostResponseProtoMsg): _233.QueryDepositRecordByHostResponse;
            toProto(message: _233.QueryDepositRecordByHostResponse): Uint8Array;
            toProtoMsg(message: _233.QueryDepositRecordByHostResponse): _233.QueryDepositRecordByHostResponseProtoMsg;
        };
        QueryGetUserRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _233.QueryGetUserRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryGetUserRedemptionRecordRequest;
            fromPartial(object: Partial<_233.QueryGetUserRedemptionRecordRequest>): _233.QueryGetUserRedemptionRecordRequest;
            fromAmino(object: _233.QueryGetUserRedemptionRecordRequestAmino): _233.QueryGetUserRedemptionRecordRequest;
            toAmino(message: _233.QueryGetUserRedemptionRecordRequest): _233.QueryGetUserRedemptionRecordRequestAmino;
            fromAminoMsg(object: _233.QueryGetUserRedemptionRecordRequestAminoMsg): _233.QueryGetUserRedemptionRecordRequest;
            fromProtoMsg(message: _233.QueryGetUserRedemptionRecordRequestProtoMsg): _233.QueryGetUserRedemptionRecordRequest;
            toProto(message: _233.QueryGetUserRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _233.QueryGetUserRedemptionRecordRequest): _233.QueryGetUserRedemptionRecordRequestProtoMsg;
        };
        QueryGetUserRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _233.QueryGetUserRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryGetUserRedemptionRecordResponse;
            fromPartial(object: Partial<_233.QueryGetUserRedemptionRecordResponse>): _233.QueryGetUserRedemptionRecordResponse;
            fromAmino(object: _233.QueryGetUserRedemptionRecordResponseAmino): _233.QueryGetUserRedemptionRecordResponse;
            toAmino(message: _233.QueryGetUserRedemptionRecordResponse): _233.QueryGetUserRedemptionRecordResponseAmino;
            fromAminoMsg(object: _233.QueryGetUserRedemptionRecordResponseAminoMsg): _233.QueryGetUserRedemptionRecordResponse;
            fromProtoMsg(message: _233.QueryGetUserRedemptionRecordResponseProtoMsg): _233.QueryGetUserRedemptionRecordResponse;
            toProto(message: _233.QueryGetUserRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _233.QueryGetUserRedemptionRecordResponse): _233.QueryGetUserRedemptionRecordResponseProtoMsg;
        };
        QueryAllUserRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _233.QueryAllUserRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryAllUserRedemptionRecordRequest;
            fromPartial(object: Partial<_233.QueryAllUserRedemptionRecordRequest>): _233.QueryAllUserRedemptionRecordRequest;
            fromAmino(object: _233.QueryAllUserRedemptionRecordRequestAmino): _233.QueryAllUserRedemptionRecordRequest;
            toAmino(message: _233.QueryAllUserRedemptionRecordRequest): _233.QueryAllUserRedemptionRecordRequestAmino;
            fromAminoMsg(object: _233.QueryAllUserRedemptionRecordRequestAminoMsg): _233.QueryAllUserRedemptionRecordRequest;
            fromProtoMsg(message: _233.QueryAllUserRedemptionRecordRequestProtoMsg): _233.QueryAllUserRedemptionRecordRequest;
            toProto(message: _233.QueryAllUserRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _233.QueryAllUserRedemptionRecordRequest): _233.QueryAllUserRedemptionRecordRequestProtoMsg;
        };
        QueryAllUserRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _233.QueryAllUserRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryAllUserRedemptionRecordResponse;
            fromPartial(object: Partial<_233.QueryAllUserRedemptionRecordResponse>): _233.QueryAllUserRedemptionRecordResponse;
            fromAmino(object: _233.QueryAllUserRedemptionRecordResponseAmino): _233.QueryAllUserRedemptionRecordResponse;
            toAmino(message: _233.QueryAllUserRedemptionRecordResponse): _233.QueryAllUserRedemptionRecordResponseAmino;
            fromAminoMsg(object: _233.QueryAllUserRedemptionRecordResponseAminoMsg): _233.QueryAllUserRedemptionRecordResponse;
            fromProtoMsg(message: _233.QueryAllUserRedemptionRecordResponseProtoMsg): _233.QueryAllUserRedemptionRecordResponse;
            toProto(message: _233.QueryAllUserRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _233.QueryAllUserRedemptionRecordResponse): _233.QueryAllUserRedemptionRecordResponseProtoMsg;
        };
        QueryAllUserRedemptionRecordForUserRequest: {
            typeUrl: string;
            encode(message: _233.QueryAllUserRedemptionRecordForUserRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryAllUserRedemptionRecordForUserRequest;
            fromPartial(object: Partial<_233.QueryAllUserRedemptionRecordForUserRequest>): _233.QueryAllUserRedemptionRecordForUserRequest;
            fromAmino(object: _233.QueryAllUserRedemptionRecordForUserRequestAmino): _233.QueryAllUserRedemptionRecordForUserRequest;
            toAmino(message: _233.QueryAllUserRedemptionRecordForUserRequest): _233.QueryAllUserRedemptionRecordForUserRequestAmino;
            fromAminoMsg(object: _233.QueryAllUserRedemptionRecordForUserRequestAminoMsg): _233.QueryAllUserRedemptionRecordForUserRequest;
            fromProtoMsg(message: _233.QueryAllUserRedemptionRecordForUserRequestProtoMsg): _233.QueryAllUserRedemptionRecordForUserRequest;
            toProto(message: _233.QueryAllUserRedemptionRecordForUserRequest): Uint8Array;
            toProtoMsg(message: _233.QueryAllUserRedemptionRecordForUserRequest): _233.QueryAllUserRedemptionRecordForUserRequestProtoMsg;
        };
        QueryAllUserRedemptionRecordForUserResponse: {
            typeUrl: string;
            encode(message: _233.QueryAllUserRedemptionRecordForUserResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryAllUserRedemptionRecordForUserResponse;
            fromPartial(object: Partial<_233.QueryAllUserRedemptionRecordForUserResponse>): _233.QueryAllUserRedemptionRecordForUserResponse;
            fromAmino(object: _233.QueryAllUserRedemptionRecordForUserResponseAmino): _233.QueryAllUserRedemptionRecordForUserResponse;
            toAmino(message: _233.QueryAllUserRedemptionRecordForUserResponse): _233.QueryAllUserRedemptionRecordForUserResponseAmino;
            fromAminoMsg(object: _233.QueryAllUserRedemptionRecordForUserResponseAminoMsg): _233.QueryAllUserRedemptionRecordForUserResponse;
            fromProtoMsg(message: _233.QueryAllUserRedemptionRecordForUserResponseProtoMsg): _233.QueryAllUserRedemptionRecordForUserResponse;
            toProto(message: _233.QueryAllUserRedemptionRecordForUserResponse): Uint8Array;
            toProtoMsg(message: _233.QueryAllUserRedemptionRecordForUserResponse): _233.QueryAllUserRedemptionRecordForUserResponseProtoMsg;
        };
        QueryGetEpochUnbondingRecordRequest: {
            typeUrl: string;
            encode(message: _233.QueryGetEpochUnbondingRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryGetEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_233.QueryGetEpochUnbondingRecordRequest>): _233.QueryGetEpochUnbondingRecordRequest;
            fromAmino(object: _233.QueryGetEpochUnbondingRecordRequestAmino): _233.QueryGetEpochUnbondingRecordRequest;
            toAmino(message: _233.QueryGetEpochUnbondingRecordRequest): _233.QueryGetEpochUnbondingRecordRequestAmino;
            fromAminoMsg(object: _233.QueryGetEpochUnbondingRecordRequestAminoMsg): _233.QueryGetEpochUnbondingRecordRequest;
            fromProtoMsg(message: _233.QueryGetEpochUnbondingRecordRequestProtoMsg): _233.QueryGetEpochUnbondingRecordRequest;
            toProto(message: _233.QueryGetEpochUnbondingRecordRequest): Uint8Array;
            toProtoMsg(message: _233.QueryGetEpochUnbondingRecordRequest): _233.QueryGetEpochUnbondingRecordRequestProtoMsg;
        };
        QueryGetEpochUnbondingRecordResponse: {
            typeUrl: string;
            encode(message: _233.QueryGetEpochUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryGetEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_233.QueryGetEpochUnbondingRecordResponse>): _233.QueryGetEpochUnbondingRecordResponse;
            fromAmino(object: _233.QueryGetEpochUnbondingRecordResponseAmino): _233.QueryGetEpochUnbondingRecordResponse;
            toAmino(message: _233.QueryGetEpochUnbondingRecordResponse): _233.QueryGetEpochUnbondingRecordResponseAmino;
            fromAminoMsg(object: _233.QueryGetEpochUnbondingRecordResponseAminoMsg): _233.QueryGetEpochUnbondingRecordResponse;
            fromProtoMsg(message: _233.QueryGetEpochUnbondingRecordResponseProtoMsg): _233.QueryGetEpochUnbondingRecordResponse;
            toProto(message: _233.QueryGetEpochUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _233.QueryGetEpochUnbondingRecordResponse): _233.QueryGetEpochUnbondingRecordResponseProtoMsg;
        };
        QueryAllEpochUnbondingRecordRequest: {
            typeUrl: string;
            encode(message: _233.QueryAllEpochUnbondingRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryAllEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_233.QueryAllEpochUnbondingRecordRequest>): _233.QueryAllEpochUnbondingRecordRequest;
            fromAmino(object: _233.QueryAllEpochUnbondingRecordRequestAmino): _233.QueryAllEpochUnbondingRecordRequest;
            toAmino(message: _233.QueryAllEpochUnbondingRecordRequest): _233.QueryAllEpochUnbondingRecordRequestAmino;
            fromAminoMsg(object: _233.QueryAllEpochUnbondingRecordRequestAminoMsg): _233.QueryAllEpochUnbondingRecordRequest;
            fromProtoMsg(message: _233.QueryAllEpochUnbondingRecordRequestProtoMsg): _233.QueryAllEpochUnbondingRecordRequest;
            toProto(message: _233.QueryAllEpochUnbondingRecordRequest): Uint8Array;
            toProtoMsg(message: _233.QueryAllEpochUnbondingRecordRequest): _233.QueryAllEpochUnbondingRecordRequestProtoMsg;
        };
        QueryAllEpochUnbondingRecordResponse: {
            typeUrl: string;
            encode(message: _233.QueryAllEpochUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryAllEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_233.QueryAllEpochUnbondingRecordResponse>): _233.QueryAllEpochUnbondingRecordResponse;
            fromAmino(object: _233.QueryAllEpochUnbondingRecordResponseAmino): _233.QueryAllEpochUnbondingRecordResponse;
            toAmino(message: _233.QueryAllEpochUnbondingRecordResponse): _233.QueryAllEpochUnbondingRecordResponseAmino;
            fromAminoMsg(object: _233.QueryAllEpochUnbondingRecordResponseAminoMsg): _233.QueryAllEpochUnbondingRecordResponse;
            fromProtoMsg(message: _233.QueryAllEpochUnbondingRecordResponseProtoMsg): _233.QueryAllEpochUnbondingRecordResponse;
            toProto(message: _233.QueryAllEpochUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _233.QueryAllEpochUnbondingRecordResponse): _233.QueryAllEpochUnbondingRecordResponseProtoMsg;
        };
        QueryLSMDepositRequest: {
            typeUrl: string;
            encode(message: _233.QueryLSMDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryLSMDepositRequest;
            fromPartial(object: Partial<_233.QueryLSMDepositRequest>): _233.QueryLSMDepositRequest;
            fromAmino(object: _233.QueryLSMDepositRequestAmino): _233.QueryLSMDepositRequest;
            toAmino(message: _233.QueryLSMDepositRequest): _233.QueryLSMDepositRequestAmino;
            fromAminoMsg(object: _233.QueryLSMDepositRequestAminoMsg): _233.QueryLSMDepositRequest;
            fromProtoMsg(message: _233.QueryLSMDepositRequestProtoMsg): _233.QueryLSMDepositRequest;
            toProto(message: _233.QueryLSMDepositRequest): Uint8Array;
            toProtoMsg(message: _233.QueryLSMDepositRequest): _233.QueryLSMDepositRequestProtoMsg;
        };
        QueryLSMDepositResponse: {
            typeUrl: string;
            encode(message: _233.QueryLSMDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryLSMDepositResponse;
            fromPartial(object: Partial<_233.QueryLSMDepositResponse>): _233.QueryLSMDepositResponse;
            fromAmino(object: _233.QueryLSMDepositResponseAmino): _233.QueryLSMDepositResponse;
            toAmino(message: _233.QueryLSMDepositResponse): _233.QueryLSMDepositResponseAmino;
            fromAminoMsg(object: _233.QueryLSMDepositResponseAminoMsg): _233.QueryLSMDepositResponse;
            fromProtoMsg(message: _233.QueryLSMDepositResponseProtoMsg): _233.QueryLSMDepositResponse;
            toProto(message: _233.QueryLSMDepositResponse): Uint8Array;
            toProtoMsg(message: _233.QueryLSMDepositResponse): _233.QueryLSMDepositResponseProtoMsg;
        };
        QueryLSMDepositsRequest: {
            typeUrl: string;
            encode(message: _233.QueryLSMDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryLSMDepositsRequest;
            fromPartial(object: Partial<_233.QueryLSMDepositsRequest>): _233.QueryLSMDepositsRequest;
            fromAmino(object: _233.QueryLSMDepositsRequestAmino): _233.QueryLSMDepositsRequest;
            toAmino(message: _233.QueryLSMDepositsRequest): _233.QueryLSMDepositsRequestAmino;
            fromAminoMsg(object: _233.QueryLSMDepositsRequestAminoMsg): _233.QueryLSMDepositsRequest;
            fromProtoMsg(message: _233.QueryLSMDepositsRequestProtoMsg): _233.QueryLSMDepositsRequest;
            toProto(message: _233.QueryLSMDepositsRequest): Uint8Array;
            toProtoMsg(message: _233.QueryLSMDepositsRequest): _233.QueryLSMDepositsRequestProtoMsg;
        };
        QueryLSMDepositsResponse: {
            typeUrl: string;
            encode(message: _233.QueryLSMDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryLSMDepositsResponse;
            fromPartial(object: Partial<_233.QueryLSMDepositsResponse>): _233.QueryLSMDepositsResponse;
            fromAmino(object: _233.QueryLSMDepositsResponseAmino): _233.QueryLSMDepositsResponse;
            toAmino(message: _233.QueryLSMDepositsResponse): _233.QueryLSMDepositsResponseAmino;
            fromAminoMsg(object: _233.QueryLSMDepositsResponseAminoMsg): _233.QueryLSMDepositsResponse;
            fromProtoMsg(message: _233.QueryLSMDepositsResponseProtoMsg): _233.QueryLSMDepositsResponse;
            toProto(message: _233.QueryLSMDepositsResponse): Uint8Array;
            toProtoMsg(message: _233.QueryLSMDepositsResponse): _233.QueryLSMDepositsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _232.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.Params;
            fromPartial(_: Partial<_232.Params>): _232.Params;
            fromAmino(_: _232.ParamsAmino): _232.Params;
            toAmino(_: _232.Params): _232.ParamsAmino;
            fromAminoMsg(object: _232.ParamsAminoMsg): _232.Params;
            fromProtoMsg(message: _232.ParamsProtoMsg): _232.Params;
            toProto(message: _232.Params): Uint8Array;
            toProtoMsg(message: _232.Params): _232.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _231.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.GenesisState;
            fromPartial(object: Partial<_231.GenesisState>): _231.GenesisState;
            fromAmino(object: _231.GenesisStateAmino): _231.GenesisState;
            toAmino(message: _231.GenesisState): _231.GenesisStateAmino;
            fromAminoMsg(object: _231.GenesisStateAminoMsg): _231.GenesisState;
            fromProtoMsg(message: _231.GenesisStateProtoMsg): _231.GenesisState;
            toProto(message: _231.GenesisState): Uint8Array;
            toProtoMsg(message: _231.GenesisState): _231.GenesisStateProtoMsg;
        };
        TransferCallback: {
            typeUrl: string;
            encode(message: _230.TransferCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.TransferCallback;
            fromPartial(object: Partial<_230.TransferCallback>): _230.TransferCallback;
            fromAmino(object: _230.TransferCallbackAmino): _230.TransferCallback;
            toAmino(message: _230.TransferCallback): _230.TransferCallbackAmino;
            fromAminoMsg(object: _230.TransferCallbackAminoMsg): _230.TransferCallback;
            fromProtoMsg(message: _230.TransferCallbackProtoMsg): _230.TransferCallback;
            toProto(message: _230.TransferCallback): Uint8Array;
            toProtoMsg(message: _230.TransferCallback): _230.TransferCallbackProtoMsg;
        };
        TransferLSMTokenCallback: {
            typeUrl: string;
            encode(message: _230.TransferLSMTokenCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.TransferLSMTokenCallback;
            fromPartial(object: Partial<_230.TransferLSMTokenCallback>): _230.TransferLSMTokenCallback;
            fromAmino(object: _230.TransferLSMTokenCallbackAmino): _230.TransferLSMTokenCallback;
            toAmino(message: _230.TransferLSMTokenCallback): _230.TransferLSMTokenCallbackAmino;
            fromAminoMsg(object: _230.TransferLSMTokenCallbackAminoMsg): _230.TransferLSMTokenCallback;
            fromProtoMsg(message: _230.TransferLSMTokenCallbackProtoMsg): _230.TransferLSMTokenCallback;
            toProto(message: _230.TransferLSMTokenCallback): Uint8Array;
            toProtoMsg(message: _230.TransferLSMTokenCallback): _230.TransferLSMTokenCallbackProtoMsg;
        };
    };
    const stakedym: {
        MsgClientImpl: typeof _418.MsgClientImpl;
        QueryClientImpl: typeof _408.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            hostZone(request?: _236.QueryHostZoneRequest): Promise<_236.QueryHostZoneResponse>;
            delegationRecords(request: _236.QueryDelegationRecordsRequest): Promise<_236.QueryDelegationRecordsResponse>;
            unbondingRecords(request: _236.QueryUnbondingRecordsRequest): Promise<_236.QueryUnbondingRecordsResponse>;
            redemptionRecord(request: _236.QueryRedemptionRecordRequest): Promise<_236.QueryRedemptionRecordResponse>;
            redemptionRecords(request: _236.QueryRedemptionRecordsRequest): Promise<_236.QueryRedemptionRecordsResponse>;
            slashRecords(request?: _236.QuerySlashRecordsRequest): Promise<_236.QuerySlashRecordsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _238.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _238.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmDelegation(value: _238.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUndelegation(value: _238.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUnbondedTokenSweep(value: _238.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                adjustDelegatedBalance(value: _238.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _238.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _238.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                refreshRedemptionRate(value: _238.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteDelegationRecord(value: _238.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteUnbondingRecord(value: _238.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteRedemptionRecord(value: _238.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOperatorAddress(value: _238.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _238.MsgLiquidStake): {
                    typeUrl: string;
                    value: _238.MsgLiquidStake;
                };
                redeemStake(value: _238.MsgRedeemStake): {
                    typeUrl: string;
                    value: _238.MsgRedeemStake;
                };
                confirmDelegation(value: _238.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _238.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _238.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _238.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _238.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _238.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _238.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _238.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _238.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _238.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _238.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _238.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _238.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _238.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _238.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _238.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _238.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _238.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _238.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _238.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _238.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _238.MsgSetOperatorAddress;
                };
            };
            fromPartial: {
                liquidStake(value: _238.MsgLiquidStake): {
                    typeUrl: string;
                    value: _238.MsgLiquidStake;
                };
                redeemStake(value: _238.MsgRedeemStake): {
                    typeUrl: string;
                    value: _238.MsgRedeemStake;
                };
                confirmDelegation(value: _238.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _238.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _238.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _238.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _238.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _238.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _238.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _238.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _238.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _238.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _238.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _238.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _238.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _238.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _238.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _238.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _238.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _238.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _238.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _238.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _238.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _238.MsgSetOperatorAddress;
                };
            };
        };
        AminoConverter: {
            "/stride.stakedym.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _238.MsgLiquidStake) => _238.MsgLiquidStakeAmino;
                fromAmino: (object: _238.MsgLiquidStakeAmino) => _238.MsgLiquidStake;
            };
            "/stride.stakedym.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _238.MsgRedeemStake) => _238.MsgRedeemStakeAmino;
                fromAmino: (object: _238.MsgRedeemStakeAmino) => _238.MsgRedeemStake;
            };
            "/stride.stakedym.MsgConfirmDelegation": {
                aminoType: string;
                toAmino: (message: _238.MsgConfirmDelegation) => _238.MsgConfirmDelegationAmino;
                fromAmino: (object: _238.MsgConfirmDelegationAmino) => _238.MsgConfirmDelegation;
            };
            "/stride.stakedym.MsgConfirmUndelegation": {
                aminoType: string;
                toAmino: (message: _238.MsgConfirmUndelegation) => _238.MsgConfirmUndelegationAmino;
                fromAmino: (object: _238.MsgConfirmUndelegationAmino) => _238.MsgConfirmUndelegation;
            };
            "/stride.stakedym.MsgConfirmUnbondedTokenSweep": {
                aminoType: string;
                toAmino: (message: _238.MsgConfirmUnbondedTokenSweep) => _238.MsgConfirmUnbondedTokenSweepAmino;
                fromAmino: (object: _238.MsgConfirmUnbondedTokenSweepAmino) => _238.MsgConfirmUnbondedTokenSweep;
            };
            "/stride.stakedym.MsgAdjustDelegatedBalance": {
                aminoType: string;
                toAmino: (message: _238.MsgAdjustDelegatedBalance) => _238.MsgAdjustDelegatedBalanceAmino;
                fromAmino: (object: _238.MsgAdjustDelegatedBalanceAmino) => _238.MsgAdjustDelegatedBalance;
            };
            "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _238.MsgUpdateInnerRedemptionRateBounds) => _238.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _238.MsgUpdateInnerRedemptionRateBoundsAmino) => _238.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.stakedym.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _238.MsgResumeHostZone) => _238.MsgResumeHostZoneAmino;
                fromAmino: (object: _238.MsgResumeHostZoneAmino) => _238.MsgResumeHostZone;
            };
            "/stride.stakedym.MsgRefreshRedemptionRate": {
                aminoType: string;
                toAmino: (message: _238.MsgRefreshRedemptionRate) => _238.MsgRefreshRedemptionRateAmino;
                fromAmino: (object: _238.MsgRefreshRedemptionRateAmino) => _238.MsgRefreshRedemptionRate;
            };
            "/stride.stakedym.MsgOverwriteDelegationRecord": {
                aminoType: string;
                toAmino: (message: _238.MsgOverwriteDelegationRecord) => _238.MsgOverwriteDelegationRecordAmino;
                fromAmino: (object: _238.MsgOverwriteDelegationRecordAmino) => _238.MsgOverwriteDelegationRecord;
            };
            "/stride.stakedym.MsgOverwriteUnbondingRecord": {
                aminoType: string;
                toAmino: (message: _238.MsgOverwriteUnbondingRecord) => _238.MsgOverwriteUnbondingRecordAmino;
                fromAmino: (object: _238.MsgOverwriteUnbondingRecordAmino) => _238.MsgOverwriteUnbondingRecord;
            };
            "/stride.stakedym.MsgOverwriteRedemptionRecord": {
                aminoType: string;
                toAmino: (message: _238.MsgOverwriteRedemptionRecord) => _238.MsgOverwriteRedemptionRecordAmino;
                fromAmino: (object: _238.MsgOverwriteRedemptionRecordAmino) => _238.MsgOverwriteRedemptionRecord;
            };
            "/stride.stakedym.MsgSetOperatorAddress": {
                aminoType: string;
                toAmino: (message: _238.MsgSetOperatorAddress) => _238.MsgSetOperatorAddressAmino;
                fromAmino: (object: _238.MsgSetOperatorAddressAmino) => _238.MsgSetOperatorAddress;
            };
        };
        overwritableRecordTypeFromJSON(object: any): _238.OverwritableRecordType;
        overwritableRecordTypeToJSON(object: _238.OverwritableRecordType): string;
        OverwritableRecordType: typeof _238.OverwritableRecordType;
        OverwritableRecordTypeSDKType: typeof _238.OverwritableRecordType;
        OverwritableRecordTypeAmino: typeof _238.OverwritableRecordType;
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _238.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.MsgLiquidStake;
            fromPartial(object: Partial<_238.MsgLiquidStake>): _238.MsgLiquidStake;
            fromAmino(object: _238.MsgLiquidStakeAmino): _238.MsgLiquidStake;
            toAmino(message: _238.MsgLiquidStake): _238.MsgLiquidStakeAmino;
            fromAminoMsg(object: _238.MsgLiquidStakeAminoMsg): _238.MsgLiquidStake;
            toAminoMsg(message: _238.MsgLiquidStake): _238.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _238.MsgLiquidStakeProtoMsg): _238.MsgLiquidStake;
            toProto(message: _238.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _238.MsgLiquidStake): _238.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _238.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_238.MsgLiquidStakeResponse>): _238.MsgLiquidStakeResponse;
            fromAmino(object: _238.MsgLiquidStakeResponseAmino): _238.MsgLiquidStakeResponse;
            toAmino(message: _238.MsgLiquidStakeResponse): _238.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _238.MsgLiquidStakeResponseAminoMsg): _238.MsgLiquidStakeResponse;
            fromProtoMsg(message: _238.MsgLiquidStakeResponseProtoMsg): _238.MsgLiquidStakeResponse;
            toProto(message: _238.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _238.MsgLiquidStakeResponse): _238.MsgLiquidStakeResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _238.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.MsgRedeemStake;
            fromPartial(object: Partial<_238.MsgRedeemStake>): _238.MsgRedeemStake;
            fromAmino(object: _238.MsgRedeemStakeAmino): _238.MsgRedeemStake;
            toAmino(message: _238.MsgRedeemStake): _238.MsgRedeemStakeAmino;
            fromAminoMsg(object: _238.MsgRedeemStakeAminoMsg): _238.MsgRedeemStake;
            toAminoMsg(message: _238.MsgRedeemStake): _238.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _238.MsgRedeemStakeProtoMsg): _238.MsgRedeemStake;
            toProto(message: _238.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _238.MsgRedeemStake): _238.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(message: _238.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.MsgRedeemStakeResponse;
            fromPartial(object: Partial<_238.MsgRedeemStakeResponse>): _238.MsgRedeemStakeResponse;
            fromAmino(object: _238.MsgRedeemStakeResponseAmino): _238.MsgRedeemStakeResponse;
            toAmino(message: _238.MsgRedeemStakeResponse): _238.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _238.MsgRedeemStakeResponseAminoMsg): _238.MsgRedeemStakeResponse;
            fromProtoMsg(message: _238.MsgRedeemStakeResponseProtoMsg): _238.MsgRedeemStakeResponse;
            toProto(message: _238.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _238.MsgRedeemStakeResponse): _238.MsgRedeemStakeResponseProtoMsg;
        };
        MsgConfirmDelegation: {
            typeUrl: string;
            encode(message: _238.MsgConfirmDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.MsgConfirmDelegation;
            fromPartial(object: Partial<_238.MsgConfirmDelegation>): _238.MsgConfirmDelegation;
            fromAmino(object: _238.MsgConfirmDelegationAmino): _238.MsgConfirmDelegation;
            toAmino(message: _238.MsgConfirmDelegation): _238.MsgConfirmDelegationAmino;
            fromAminoMsg(object: _238.MsgConfirmDelegationAminoMsg): _238.MsgConfirmDelegation;
            toAminoMsg(message: _238.MsgConfirmDelegation): _238.MsgConfirmDelegationAminoMsg;
            fromProtoMsg(message: _238.MsgConfirmDelegationProtoMsg): _238.MsgConfirmDelegation;
            toProto(message: _238.MsgConfirmDelegation): Uint8Array;
            toProtoMsg(message: _238.MsgConfirmDelegation): _238.MsgConfirmDelegationProtoMsg;
        };
        MsgConfirmDelegationResponse: {
            typeUrl: string;
            encode(_: _238.MsgConfirmDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.MsgConfirmDelegationResponse;
            fromPartial(_: Partial<_238.MsgConfirmDelegationResponse>): _238.MsgConfirmDelegationResponse;
            fromAmino(_: _238.MsgConfirmDelegationResponseAmino): _238.MsgConfirmDelegationResponse;
            toAmino(_: _238.MsgConfirmDelegationResponse): _238.MsgConfirmDelegationResponseAmino;
            fromAminoMsg(object: _238.MsgConfirmDelegationResponseAminoMsg): _238.MsgConfirmDelegationResponse;
            fromProtoMsg(message: _238.MsgConfirmDelegationResponseProtoMsg): _238.MsgConfirmDelegationResponse;
            toProto(message: _238.MsgConfirmDelegationResponse): Uint8Array;
            toProtoMsg(message: _238.MsgConfirmDelegationResponse): _238.MsgConfirmDelegationResponseProtoMsg;
        };
        MsgConfirmUndelegation: {
            typeUrl: string;
            encode(message: _238.MsgConfirmUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.MsgConfirmUndelegation;
            fromPartial(object: Partial<_238.MsgConfirmUndelegation>): _238.MsgConfirmUndelegation;
            fromAmino(object: _238.MsgConfirmUndelegationAmino): _238.MsgConfirmUndelegation;
            toAmino(message: _238.MsgConfirmUndelegation): _238.MsgConfirmUndelegationAmino;
            fromAminoMsg(object: _238.MsgConfirmUndelegationAminoMsg): _238.MsgConfirmUndelegation;
            toAminoMsg(message: _238.MsgConfirmUndelegation): _238.MsgConfirmUndelegationAminoMsg;
            fromProtoMsg(message: _238.MsgConfirmUndelegationProtoMsg): _238.MsgConfirmUndelegation;
            toProto(message: _238.MsgConfirmUndelegation): Uint8Array;
            toProtoMsg(message: _238.MsgConfirmUndelegation): _238.MsgConfirmUndelegationProtoMsg;
        };
        MsgConfirmUndelegationResponse: {
            typeUrl: string;
            encode(_: _238.MsgConfirmUndelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.MsgConfirmUndelegationResponse;
            fromPartial(_: Partial<_238.MsgConfirmUndelegationResponse>): _238.MsgConfirmUndelegationResponse;
            fromAmino(_: _238.MsgConfirmUndelegationResponseAmino): _238.MsgConfirmUndelegationResponse;
            toAmino(_: _238.MsgConfirmUndelegationResponse): _238.MsgConfirmUndelegationResponseAmino;
            fromAminoMsg(object: _238.MsgConfirmUndelegationResponseAminoMsg): _238.MsgConfirmUndelegationResponse;
            fromProtoMsg(message: _238.MsgConfirmUndelegationResponseProtoMsg): _238.MsgConfirmUndelegationResponse;
            toProto(message: _238.MsgConfirmUndelegationResponse): Uint8Array;
            toProtoMsg(message: _238.MsgConfirmUndelegationResponse): _238.MsgConfirmUndelegationResponseProtoMsg;
        };
        MsgConfirmUnbondedTokenSweep: {
            typeUrl: string;
            encode(message: _238.MsgConfirmUnbondedTokenSweep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.MsgConfirmUnbondedTokenSweep;
            fromPartial(object: Partial<_238.MsgConfirmUnbondedTokenSweep>): _238.MsgConfirmUnbondedTokenSweep;
            fromAmino(object: _238.MsgConfirmUnbondedTokenSweepAmino): _238.MsgConfirmUnbondedTokenSweep;
            toAmino(message: _238.MsgConfirmUnbondedTokenSweep): _238.MsgConfirmUnbondedTokenSweepAmino;
            fromAminoMsg(object: _238.MsgConfirmUnbondedTokenSweepAminoMsg): _238.MsgConfirmUnbondedTokenSweep;
            toAminoMsg(message: _238.MsgConfirmUnbondedTokenSweep): _238.MsgConfirmUnbondedTokenSweepAminoMsg;
            fromProtoMsg(message: _238.MsgConfirmUnbondedTokenSweepProtoMsg): _238.MsgConfirmUnbondedTokenSweep;
            toProto(message: _238.MsgConfirmUnbondedTokenSweep): Uint8Array;
            toProtoMsg(message: _238.MsgConfirmUnbondedTokenSweep): _238.MsgConfirmUnbondedTokenSweepProtoMsg;
        };
        MsgConfirmUnbondedTokenSweepResponse: {
            typeUrl: string;
            encode(_: _238.MsgConfirmUnbondedTokenSweepResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.MsgConfirmUnbondedTokenSweepResponse;
            fromPartial(_: Partial<_238.MsgConfirmUnbondedTokenSweepResponse>): _238.MsgConfirmUnbondedTokenSweepResponse;
            fromAmino(_: _238.MsgConfirmUnbondedTokenSweepResponseAmino): _238.MsgConfirmUnbondedTokenSweepResponse;
            toAmino(_: _238.MsgConfirmUnbondedTokenSweepResponse): _238.MsgConfirmUnbondedTokenSweepResponseAmino;
            fromAminoMsg(object: _238.MsgConfirmUnbondedTokenSweepResponseAminoMsg): _238.MsgConfirmUnbondedTokenSweepResponse;
            fromProtoMsg(message: _238.MsgConfirmUnbondedTokenSweepResponseProtoMsg): _238.MsgConfirmUnbondedTokenSweepResponse;
            toProto(message: _238.MsgConfirmUnbondedTokenSweepResponse): Uint8Array;
            toProtoMsg(message: _238.MsgConfirmUnbondedTokenSweepResponse): _238.MsgConfirmUnbondedTokenSweepResponseProtoMsg;
        };
        MsgAdjustDelegatedBalance: {
            typeUrl: string;
            encode(message: _238.MsgAdjustDelegatedBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.MsgAdjustDelegatedBalance;
            fromPartial(object: Partial<_238.MsgAdjustDelegatedBalance>): _238.MsgAdjustDelegatedBalance;
            fromAmino(object: _238.MsgAdjustDelegatedBalanceAmino): _238.MsgAdjustDelegatedBalance;
            toAmino(message: _238.MsgAdjustDelegatedBalance): _238.MsgAdjustDelegatedBalanceAmino;
            fromAminoMsg(object: _238.MsgAdjustDelegatedBalanceAminoMsg): _238.MsgAdjustDelegatedBalance;
            toAminoMsg(message: _238.MsgAdjustDelegatedBalance): _238.MsgAdjustDelegatedBalanceAminoMsg;
            fromProtoMsg(message: _238.MsgAdjustDelegatedBalanceProtoMsg): _238.MsgAdjustDelegatedBalance;
            toProto(message: _238.MsgAdjustDelegatedBalance): Uint8Array;
            toProtoMsg(message: _238.MsgAdjustDelegatedBalance): _238.MsgAdjustDelegatedBalanceProtoMsg;
        };
        MsgAdjustDelegatedBalanceResponse: {
            typeUrl: string;
            encode(_: _238.MsgAdjustDelegatedBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.MsgAdjustDelegatedBalanceResponse;
            fromPartial(_: Partial<_238.MsgAdjustDelegatedBalanceResponse>): _238.MsgAdjustDelegatedBalanceResponse;
            fromAmino(_: _238.MsgAdjustDelegatedBalanceResponseAmino): _238.MsgAdjustDelegatedBalanceResponse;
            toAmino(_: _238.MsgAdjustDelegatedBalanceResponse): _238.MsgAdjustDelegatedBalanceResponseAmino;
            fromAminoMsg(object: _238.MsgAdjustDelegatedBalanceResponseAminoMsg): _238.MsgAdjustDelegatedBalanceResponse;
            fromProtoMsg(message: _238.MsgAdjustDelegatedBalanceResponseProtoMsg): _238.MsgAdjustDelegatedBalanceResponse;
            toProto(message: _238.MsgAdjustDelegatedBalanceResponse): Uint8Array;
            toProtoMsg(message: _238.MsgAdjustDelegatedBalanceResponse): _238.MsgAdjustDelegatedBalanceResponseProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _238.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_238.MsgUpdateInnerRedemptionRateBounds>): _238.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _238.MsgUpdateInnerRedemptionRateBoundsAmino): _238.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _238.MsgUpdateInnerRedemptionRateBounds): _238.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _238.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _238.MsgUpdateInnerRedemptionRateBounds;
            toAminoMsg(message: _238.MsgUpdateInnerRedemptionRateBounds): _238.MsgUpdateInnerRedemptionRateBoundsAminoMsg;
            fromProtoMsg(message: _238.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _238.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _238.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _238.MsgUpdateInnerRedemptionRateBounds): _238.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _238.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_238.MsgUpdateInnerRedemptionRateBoundsResponse>): _238.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _238.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _238.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _238.MsgUpdateInnerRedemptionRateBoundsResponse): _238.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _238.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _238.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _238.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _238.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _238.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _238.MsgUpdateInnerRedemptionRateBoundsResponse): _238.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _238.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.MsgResumeHostZone;
            fromPartial(object: Partial<_238.MsgResumeHostZone>): _238.MsgResumeHostZone;
            fromAmino(object: _238.MsgResumeHostZoneAmino): _238.MsgResumeHostZone;
            toAmino(message: _238.MsgResumeHostZone): _238.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _238.MsgResumeHostZoneAminoMsg): _238.MsgResumeHostZone;
            toAminoMsg(message: _238.MsgResumeHostZone): _238.MsgResumeHostZoneAminoMsg;
            fromProtoMsg(message: _238.MsgResumeHostZoneProtoMsg): _238.MsgResumeHostZone;
            toProto(message: _238.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _238.MsgResumeHostZone): _238.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _238.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_238.MsgResumeHostZoneResponse>): _238.MsgResumeHostZoneResponse;
            fromAmino(_: _238.MsgResumeHostZoneResponseAmino): _238.MsgResumeHostZoneResponse;
            toAmino(_: _238.MsgResumeHostZoneResponse): _238.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _238.MsgResumeHostZoneResponseAminoMsg): _238.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _238.MsgResumeHostZoneResponseProtoMsg): _238.MsgResumeHostZoneResponse;
            toProto(message: _238.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _238.MsgResumeHostZoneResponse): _238.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgRefreshRedemptionRate: {
            typeUrl: string;
            encode(message: _238.MsgRefreshRedemptionRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.MsgRefreshRedemptionRate;
            fromPartial(object: Partial<_238.MsgRefreshRedemptionRate>): _238.MsgRefreshRedemptionRate;
            fromAmino(object: _238.MsgRefreshRedemptionRateAmino): _238.MsgRefreshRedemptionRate;
            toAmino(message: _238.MsgRefreshRedemptionRate): _238.MsgRefreshRedemptionRateAmino;
            fromAminoMsg(object: _238.MsgRefreshRedemptionRateAminoMsg): _238.MsgRefreshRedemptionRate;
            toAminoMsg(message: _238.MsgRefreshRedemptionRate): _238.MsgRefreshRedemptionRateAminoMsg;
            fromProtoMsg(message: _238.MsgRefreshRedemptionRateProtoMsg): _238.MsgRefreshRedemptionRate;
            toProto(message: _238.MsgRefreshRedemptionRate): Uint8Array;
            toProtoMsg(message: _238.MsgRefreshRedemptionRate): _238.MsgRefreshRedemptionRateProtoMsg;
        };
        MsgRefreshRedemptionRateResponse: {
            typeUrl: string;
            encode(_: _238.MsgRefreshRedemptionRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.MsgRefreshRedemptionRateResponse;
            fromPartial(_: Partial<_238.MsgRefreshRedemptionRateResponse>): _238.MsgRefreshRedemptionRateResponse;
            fromAmino(_: _238.MsgRefreshRedemptionRateResponseAmino): _238.MsgRefreshRedemptionRateResponse;
            toAmino(_: _238.MsgRefreshRedemptionRateResponse): _238.MsgRefreshRedemptionRateResponseAmino;
            fromAminoMsg(object: _238.MsgRefreshRedemptionRateResponseAminoMsg): _238.MsgRefreshRedemptionRateResponse;
            fromProtoMsg(message: _238.MsgRefreshRedemptionRateResponseProtoMsg): _238.MsgRefreshRedemptionRateResponse;
            toProto(message: _238.MsgRefreshRedemptionRateResponse): Uint8Array;
            toProtoMsg(message: _238.MsgRefreshRedemptionRateResponse): _238.MsgRefreshRedemptionRateResponseProtoMsg;
        };
        MsgOverwriteDelegationRecord: {
            typeUrl: string;
            encode(message: _238.MsgOverwriteDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.MsgOverwriteDelegationRecord;
            fromPartial(object: Partial<_238.MsgOverwriteDelegationRecord>): _238.MsgOverwriteDelegationRecord;
            fromAmino(object: _238.MsgOverwriteDelegationRecordAmino): _238.MsgOverwriteDelegationRecord;
            toAmino(message: _238.MsgOverwriteDelegationRecord): _238.MsgOverwriteDelegationRecordAmino;
            fromAminoMsg(object: _238.MsgOverwriteDelegationRecordAminoMsg): _238.MsgOverwriteDelegationRecord;
            toAminoMsg(message: _238.MsgOverwriteDelegationRecord): _238.MsgOverwriteDelegationRecordAminoMsg;
            fromProtoMsg(message: _238.MsgOverwriteDelegationRecordProtoMsg): _238.MsgOverwriteDelegationRecord;
            toProto(message: _238.MsgOverwriteDelegationRecord): Uint8Array;
            toProtoMsg(message: _238.MsgOverwriteDelegationRecord): _238.MsgOverwriteDelegationRecordProtoMsg;
        };
        MsgOverwriteDelegationRecordResponse: {
            typeUrl: string;
            encode(_: _238.MsgOverwriteDelegationRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.MsgOverwriteDelegationRecordResponse;
            fromPartial(_: Partial<_238.MsgOverwriteDelegationRecordResponse>): _238.MsgOverwriteDelegationRecordResponse;
            fromAmino(_: _238.MsgOverwriteDelegationRecordResponseAmino): _238.MsgOverwriteDelegationRecordResponse;
            toAmino(_: _238.MsgOverwriteDelegationRecordResponse): _238.MsgOverwriteDelegationRecordResponseAmino;
            fromAminoMsg(object: _238.MsgOverwriteDelegationRecordResponseAminoMsg): _238.MsgOverwriteDelegationRecordResponse;
            fromProtoMsg(message: _238.MsgOverwriteDelegationRecordResponseProtoMsg): _238.MsgOverwriteDelegationRecordResponse;
            toProto(message: _238.MsgOverwriteDelegationRecordResponse): Uint8Array;
            toProtoMsg(message: _238.MsgOverwriteDelegationRecordResponse): _238.MsgOverwriteDelegationRecordResponseProtoMsg;
        };
        MsgOverwriteUnbondingRecord: {
            typeUrl: string;
            encode(message: _238.MsgOverwriteUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.MsgOverwriteUnbondingRecord;
            fromPartial(object: Partial<_238.MsgOverwriteUnbondingRecord>): _238.MsgOverwriteUnbondingRecord;
            fromAmino(object: _238.MsgOverwriteUnbondingRecordAmino): _238.MsgOverwriteUnbondingRecord;
            toAmino(message: _238.MsgOverwriteUnbondingRecord): _238.MsgOverwriteUnbondingRecordAmino;
            fromAminoMsg(object: _238.MsgOverwriteUnbondingRecordAminoMsg): _238.MsgOverwriteUnbondingRecord;
            toAminoMsg(message: _238.MsgOverwriteUnbondingRecord): _238.MsgOverwriteUnbondingRecordAminoMsg;
            fromProtoMsg(message: _238.MsgOverwriteUnbondingRecordProtoMsg): _238.MsgOverwriteUnbondingRecord;
            toProto(message: _238.MsgOverwriteUnbondingRecord): Uint8Array;
            toProtoMsg(message: _238.MsgOverwriteUnbondingRecord): _238.MsgOverwriteUnbondingRecordProtoMsg;
        };
        MsgOverwriteUnbondingRecordResponse: {
            typeUrl: string;
            encode(_: _238.MsgOverwriteUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.MsgOverwriteUnbondingRecordResponse;
            fromPartial(_: Partial<_238.MsgOverwriteUnbondingRecordResponse>): _238.MsgOverwriteUnbondingRecordResponse;
            fromAmino(_: _238.MsgOverwriteUnbondingRecordResponseAmino): _238.MsgOverwriteUnbondingRecordResponse;
            toAmino(_: _238.MsgOverwriteUnbondingRecordResponse): _238.MsgOverwriteUnbondingRecordResponseAmino;
            fromAminoMsg(object: _238.MsgOverwriteUnbondingRecordResponseAminoMsg): _238.MsgOverwriteUnbondingRecordResponse;
            fromProtoMsg(message: _238.MsgOverwriteUnbondingRecordResponseProtoMsg): _238.MsgOverwriteUnbondingRecordResponse;
            toProto(message: _238.MsgOverwriteUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _238.MsgOverwriteUnbondingRecordResponse): _238.MsgOverwriteUnbondingRecordResponseProtoMsg;
        };
        MsgOverwriteRedemptionRecord: {
            typeUrl: string;
            encode(message: _238.MsgOverwriteRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.MsgOverwriteRedemptionRecord;
            fromPartial(object: Partial<_238.MsgOverwriteRedemptionRecord>): _238.MsgOverwriteRedemptionRecord;
            fromAmino(object: _238.MsgOverwriteRedemptionRecordAmino): _238.MsgOverwriteRedemptionRecord;
            toAmino(message: _238.MsgOverwriteRedemptionRecord): _238.MsgOverwriteRedemptionRecordAmino;
            fromAminoMsg(object: _238.MsgOverwriteRedemptionRecordAminoMsg): _238.MsgOverwriteRedemptionRecord;
            toAminoMsg(message: _238.MsgOverwriteRedemptionRecord): _238.MsgOverwriteRedemptionRecordAminoMsg;
            fromProtoMsg(message: _238.MsgOverwriteRedemptionRecordProtoMsg): _238.MsgOverwriteRedemptionRecord;
            toProto(message: _238.MsgOverwriteRedemptionRecord): Uint8Array;
            toProtoMsg(message: _238.MsgOverwriteRedemptionRecord): _238.MsgOverwriteRedemptionRecordProtoMsg;
        };
        MsgOverwriteRedemptionRecordResponse: {
            typeUrl: string;
            encode(_: _238.MsgOverwriteRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.MsgOverwriteRedemptionRecordResponse;
            fromPartial(_: Partial<_238.MsgOverwriteRedemptionRecordResponse>): _238.MsgOverwriteRedemptionRecordResponse;
            fromAmino(_: _238.MsgOverwriteRedemptionRecordResponseAmino): _238.MsgOverwriteRedemptionRecordResponse;
            toAmino(_: _238.MsgOverwriteRedemptionRecordResponse): _238.MsgOverwriteRedemptionRecordResponseAmino;
            fromAminoMsg(object: _238.MsgOverwriteRedemptionRecordResponseAminoMsg): _238.MsgOverwriteRedemptionRecordResponse;
            fromProtoMsg(message: _238.MsgOverwriteRedemptionRecordResponseProtoMsg): _238.MsgOverwriteRedemptionRecordResponse;
            toProto(message: _238.MsgOverwriteRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _238.MsgOverwriteRedemptionRecordResponse): _238.MsgOverwriteRedemptionRecordResponseProtoMsg;
        };
        MsgSetOperatorAddress: {
            typeUrl: string;
            encode(message: _238.MsgSetOperatorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.MsgSetOperatorAddress;
            fromPartial(object: Partial<_238.MsgSetOperatorAddress>): _238.MsgSetOperatorAddress;
            fromAmino(object: _238.MsgSetOperatorAddressAmino): _238.MsgSetOperatorAddress;
            toAmino(message: _238.MsgSetOperatorAddress): _238.MsgSetOperatorAddressAmino;
            fromAminoMsg(object: _238.MsgSetOperatorAddressAminoMsg): _238.MsgSetOperatorAddress;
            toAminoMsg(message: _238.MsgSetOperatorAddress): _238.MsgSetOperatorAddressAminoMsg;
            fromProtoMsg(message: _238.MsgSetOperatorAddressProtoMsg): _238.MsgSetOperatorAddress;
            toProto(message: _238.MsgSetOperatorAddress): Uint8Array;
            toProtoMsg(message: _238.MsgSetOperatorAddress): _238.MsgSetOperatorAddressProtoMsg;
        };
        MsgSetOperatorAddressResponse: {
            typeUrl: string;
            encode(_: _238.MsgSetOperatorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.MsgSetOperatorAddressResponse;
            fromPartial(_: Partial<_238.MsgSetOperatorAddressResponse>): _238.MsgSetOperatorAddressResponse;
            fromAmino(_: _238.MsgSetOperatorAddressResponseAmino): _238.MsgSetOperatorAddressResponse;
            toAmino(_: _238.MsgSetOperatorAddressResponse): _238.MsgSetOperatorAddressResponseAmino;
            fromAminoMsg(object: _238.MsgSetOperatorAddressResponseAminoMsg): _238.MsgSetOperatorAddressResponse;
            fromProtoMsg(message: _238.MsgSetOperatorAddressResponseProtoMsg): _238.MsgSetOperatorAddressResponse;
            toProto(message: _238.MsgSetOperatorAddressResponse): Uint8Array;
            toProtoMsg(message: _238.MsgSetOperatorAddressResponse): _238.MsgSetOperatorAddressResponseProtoMsg;
        };
        delegationRecordStatusFromJSON(object: any): _237.DelegationRecordStatus;
        delegationRecordStatusToJSON(object: _237.DelegationRecordStatus): string;
        unbondingRecordStatusFromJSON(object: any): _237.UnbondingRecordStatus;
        unbondingRecordStatusToJSON(object: _237.UnbondingRecordStatus): string;
        DelegationRecordStatus: typeof _237.DelegationRecordStatus;
        DelegationRecordStatusSDKType: typeof _237.DelegationRecordStatus;
        DelegationRecordStatusAmino: typeof _237.DelegationRecordStatus;
        UnbondingRecordStatus: typeof _237.UnbondingRecordStatus;
        UnbondingRecordStatusSDKType: typeof _237.UnbondingRecordStatus;
        UnbondingRecordStatusAmino: typeof _237.UnbondingRecordStatus;
        HostZone: {
            typeUrl: string;
            encode(message: _237.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _237.HostZone;
            fromPartial(object: Partial<_237.HostZone>): _237.HostZone;
            fromAmino(object: _237.HostZoneAmino): _237.HostZone;
            toAmino(message: _237.HostZone): _237.HostZoneAmino;
            fromAminoMsg(object: _237.HostZoneAminoMsg): _237.HostZone;
            fromProtoMsg(message: _237.HostZoneProtoMsg): _237.HostZone;
            toProto(message: _237.HostZone): Uint8Array;
            toProtoMsg(message: _237.HostZone): _237.HostZoneProtoMsg;
        };
        DelegationRecord: {
            typeUrl: string;
            encode(message: _237.DelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _237.DelegationRecord;
            fromPartial(object: Partial<_237.DelegationRecord>): _237.DelegationRecord;
            fromAmino(object: _237.DelegationRecordAmino): _237.DelegationRecord;
            toAmino(message: _237.DelegationRecord): _237.DelegationRecordAmino;
            fromAminoMsg(object: _237.DelegationRecordAminoMsg): _237.DelegationRecord;
            fromProtoMsg(message: _237.DelegationRecordProtoMsg): _237.DelegationRecord;
            toProto(message: _237.DelegationRecord): Uint8Array;
            toProtoMsg(message: _237.DelegationRecord): _237.DelegationRecordProtoMsg;
        };
        UnbondingRecord: {
            typeUrl: string;
            encode(message: _237.UnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _237.UnbondingRecord;
            fromPartial(object: Partial<_237.UnbondingRecord>): _237.UnbondingRecord;
            fromAmino(object: _237.UnbondingRecordAmino): _237.UnbondingRecord;
            toAmino(message: _237.UnbondingRecord): _237.UnbondingRecordAmino;
            fromAminoMsg(object: _237.UnbondingRecordAminoMsg): _237.UnbondingRecord;
            fromProtoMsg(message: _237.UnbondingRecordProtoMsg): _237.UnbondingRecord;
            toProto(message: _237.UnbondingRecord): Uint8Array;
            toProtoMsg(message: _237.UnbondingRecord): _237.UnbondingRecordProtoMsg;
        };
        RedemptionRecord: {
            typeUrl: string;
            encode(message: _237.RedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _237.RedemptionRecord;
            fromPartial(object: Partial<_237.RedemptionRecord>): _237.RedemptionRecord;
            fromAmino(object: _237.RedemptionRecordAmino): _237.RedemptionRecord;
            toAmino(message: _237.RedemptionRecord): _237.RedemptionRecordAmino;
            fromAminoMsg(object: _237.RedemptionRecordAminoMsg): _237.RedemptionRecord;
            fromProtoMsg(message: _237.RedemptionRecordProtoMsg): _237.RedemptionRecord;
            toProto(message: _237.RedemptionRecord): Uint8Array;
            toProtoMsg(message: _237.RedemptionRecord): _237.RedemptionRecordProtoMsg;
        };
        SlashRecord: {
            typeUrl: string;
            encode(message: _237.SlashRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _237.SlashRecord;
            fromPartial(object: Partial<_237.SlashRecord>): _237.SlashRecord;
            fromAmino(object: _237.SlashRecordAmino): _237.SlashRecord;
            toAmino(message: _237.SlashRecord): _237.SlashRecordAmino;
            fromAminoMsg(object: _237.SlashRecordAminoMsg): _237.SlashRecord;
            fromProtoMsg(message: _237.SlashRecordProtoMsg): _237.SlashRecord;
            toProto(message: _237.SlashRecord): Uint8Array;
            toProtoMsg(message: _237.SlashRecord): _237.SlashRecordProtoMsg;
        };
        QueryHostZoneRequest: {
            typeUrl: string;
            encode(_: _236.QueryHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryHostZoneRequest;
            fromPartial(_: Partial<_236.QueryHostZoneRequest>): _236.QueryHostZoneRequest;
            fromAmino(_: _236.QueryHostZoneRequestAmino): _236.QueryHostZoneRequest;
            toAmino(_: _236.QueryHostZoneRequest): _236.QueryHostZoneRequestAmino;
            fromAminoMsg(object: _236.QueryHostZoneRequestAminoMsg): _236.QueryHostZoneRequest;
            fromProtoMsg(message: _236.QueryHostZoneRequestProtoMsg): _236.QueryHostZoneRequest;
            toProto(message: _236.QueryHostZoneRequest): Uint8Array;
            toProtoMsg(message: _236.QueryHostZoneRequest): _236.QueryHostZoneRequestProtoMsg;
        };
        QueryHostZoneResponse: {
            typeUrl: string;
            encode(message: _236.QueryHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryHostZoneResponse;
            fromPartial(object: Partial<_236.QueryHostZoneResponse>): _236.QueryHostZoneResponse;
            fromAmino(object: _236.QueryHostZoneResponseAmino): _236.QueryHostZoneResponse;
            toAmino(message: _236.QueryHostZoneResponse): _236.QueryHostZoneResponseAmino;
            fromAminoMsg(object: _236.QueryHostZoneResponseAminoMsg): _236.QueryHostZoneResponse;
            fromProtoMsg(message: _236.QueryHostZoneResponseProtoMsg): _236.QueryHostZoneResponse;
            toProto(message: _236.QueryHostZoneResponse): Uint8Array;
            toProtoMsg(message: _236.QueryHostZoneResponse): _236.QueryHostZoneResponseProtoMsg;
        };
        QueryDelegationRecordsRequest: {
            typeUrl: string;
            encode(message: _236.QueryDelegationRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryDelegationRecordsRequest;
            fromPartial(object: Partial<_236.QueryDelegationRecordsRequest>): _236.QueryDelegationRecordsRequest;
            fromAmino(object: _236.QueryDelegationRecordsRequestAmino): _236.QueryDelegationRecordsRequest;
            toAmino(message: _236.QueryDelegationRecordsRequest): _236.QueryDelegationRecordsRequestAmino;
            fromAminoMsg(object: _236.QueryDelegationRecordsRequestAminoMsg): _236.QueryDelegationRecordsRequest;
            fromProtoMsg(message: _236.QueryDelegationRecordsRequestProtoMsg): _236.QueryDelegationRecordsRequest;
            toProto(message: _236.QueryDelegationRecordsRequest): Uint8Array;
            toProtoMsg(message: _236.QueryDelegationRecordsRequest): _236.QueryDelegationRecordsRequestProtoMsg;
        };
        QueryDelegationRecordsResponse: {
            typeUrl: string;
            encode(message: _236.QueryDelegationRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryDelegationRecordsResponse;
            fromPartial(object: Partial<_236.QueryDelegationRecordsResponse>): _236.QueryDelegationRecordsResponse;
            fromAmino(object: _236.QueryDelegationRecordsResponseAmino): _236.QueryDelegationRecordsResponse;
            toAmino(message: _236.QueryDelegationRecordsResponse): _236.QueryDelegationRecordsResponseAmino;
            fromAminoMsg(object: _236.QueryDelegationRecordsResponseAminoMsg): _236.QueryDelegationRecordsResponse;
            fromProtoMsg(message: _236.QueryDelegationRecordsResponseProtoMsg): _236.QueryDelegationRecordsResponse;
            toProto(message: _236.QueryDelegationRecordsResponse): Uint8Array;
            toProtoMsg(message: _236.QueryDelegationRecordsResponse): _236.QueryDelegationRecordsResponseProtoMsg;
        };
        QueryUnbondingRecordsRequest: {
            typeUrl: string;
            encode(message: _236.QueryUnbondingRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryUnbondingRecordsRequest;
            fromPartial(object: Partial<_236.QueryUnbondingRecordsRequest>): _236.QueryUnbondingRecordsRequest;
            fromAmino(object: _236.QueryUnbondingRecordsRequestAmino): _236.QueryUnbondingRecordsRequest;
            toAmino(message: _236.QueryUnbondingRecordsRequest): _236.QueryUnbondingRecordsRequestAmino;
            fromAminoMsg(object: _236.QueryUnbondingRecordsRequestAminoMsg): _236.QueryUnbondingRecordsRequest;
            fromProtoMsg(message: _236.QueryUnbondingRecordsRequestProtoMsg): _236.QueryUnbondingRecordsRequest;
            toProto(message: _236.QueryUnbondingRecordsRequest): Uint8Array;
            toProtoMsg(message: _236.QueryUnbondingRecordsRequest): _236.QueryUnbondingRecordsRequestProtoMsg;
        };
        QueryUnbondingRecordsResponse: {
            typeUrl: string;
            encode(message: _236.QueryUnbondingRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryUnbondingRecordsResponse;
            fromPartial(object: Partial<_236.QueryUnbondingRecordsResponse>): _236.QueryUnbondingRecordsResponse;
            fromAmino(object: _236.QueryUnbondingRecordsResponseAmino): _236.QueryUnbondingRecordsResponse;
            toAmino(message: _236.QueryUnbondingRecordsResponse): _236.QueryUnbondingRecordsResponseAmino;
            fromAminoMsg(object: _236.QueryUnbondingRecordsResponseAminoMsg): _236.QueryUnbondingRecordsResponse;
            fromProtoMsg(message: _236.QueryUnbondingRecordsResponseProtoMsg): _236.QueryUnbondingRecordsResponse;
            toProto(message: _236.QueryUnbondingRecordsResponse): Uint8Array;
            toProtoMsg(message: _236.QueryUnbondingRecordsResponse): _236.QueryUnbondingRecordsResponseProtoMsg;
        };
        QueryRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _236.QueryRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryRedemptionRecordRequest;
            fromPartial(object: Partial<_236.QueryRedemptionRecordRequest>): _236.QueryRedemptionRecordRequest;
            fromAmino(object: _236.QueryRedemptionRecordRequestAmino): _236.QueryRedemptionRecordRequest;
            toAmino(message: _236.QueryRedemptionRecordRequest): _236.QueryRedemptionRecordRequestAmino;
            fromAminoMsg(object: _236.QueryRedemptionRecordRequestAminoMsg): _236.QueryRedemptionRecordRequest;
            fromProtoMsg(message: _236.QueryRedemptionRecordRequestProtoMsg): _236.QueryRedemptionRecordRequest;
            toProto(message: _236.QueryRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _236.QueryRedemptionRecordRequest): _236.QueryRedemptionRecordRequestProtoMsg;
        };
        QueryRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _236.QueryRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryRedemptionRecordResponse;
            fromPartial(object: Partial<_236.QueryRedemptionRecordResponse>): _236.QueryRedemptionRecordResponse;
            fromAmino(object: _236.QueryRedemptionRecordResponseAmino): _236.QueryRedemptionRecordResponse;
            toAmino(message: _236.QueryRedemptionRecordResponse): _236.QueryRedemptionRecordResponseAmino;
            fromAminoMsg(object: _236.QueryRedemptionRecordResponseAminoMsg): _236.QueryRedemptionRecordResponse;
            fromProtoMsg(message: _236.QueryRedemptionRecordResponseProtoMsg): _236.QueryRedemptionRecordResponse;
            toProto(message: _236.QueryRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _236.QueryRedemptionRecordResponse): _236.QueryRedemptionRecordResponseProtoMsg;
        };
        QueryRedemptionRecordsRequest: {
            typeUrl: string;
            encode(message: _236.QueryRedemptionRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryRedemptionRecordsRequest;
            fromPartial(object: Partial<_236.QueryRedemptionRecordsRequest>): _236.QueryRedemptionRecordsRequest;
            fromAmino(object: _236.QueryRedemptionRecordsRequestAmino): _236.QueryRedemptionRecordsRequest;
            toAmino(message: _236.QueryRedemptionRecordsRequest): _236.QueryRedemptionRecordsRequestAmino;
            fromAminoMsg(object: _236.QueryRedemptionRecordsRequestAminoMsg): _236.QueryRedemptionRecordsRequest;
            fromProtoMsg(message: _236.QueryRedemptionRecordsRequestProtoMsg): _236.QueryRedemptionRecordsRequest;
            toProto(message: _236.QueryRedemptionRecordsRequest): Uint8Array;
            toProtoMsg(message: _236.QueryRedemptionRecordsRequest): _236.QueryRedemptionRecordsRequestProtoMsg;
        };
        QueryRedemptionRecordsResponse: {
            typeUrl: string;
            encode(message: _236.QueryRedemptionRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QueryRedemptionRecordsResponse;
            fromPartial(object: Partial<_236.QueryRedemptionRecordsResponse>): _236.QueryRedemptionRecordsResponse;
            fromAmino(object: _236.QueryRedemptionRecordsResponseAmino): _236.QueryRedemptionRecordsResponse;
            toAmino(message: _236.QueryRedemptionRecordsResponse): _236.QueryRedemptionRecordsResponseAmino;
            fromAminoMsg(object: _236.QueryRedemptionRecordsResponseAminoMsg): _236.QueryRedemptionRecordsResponse;
            fromProtoMsg(message: _236.QueryRedemptionRecordsResponseProtoMsg): _236.QueryRedemptionRecordsResponse;
            toProto(message: _236.QueryRedemptionRecordsResponse): Uint8Array;
            toProtoMsg(message: _236.QueryRedemptionRecordsResponse): _236.QueryRedemptionRecordsResponseProtoMsg;
        };
        QuerySlashRecordsRequest: {
            typeUrl: string;
            encode(_: _236.QuerySlashRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QuerySlashRecordsRequest;
            fromPartial(_: Partial<_236.QuerySlashRecordsRequest>): _236.QuerySlashRecordsRequest;
            fromAmino(_: _236.QuerySlashRecordsRequestAmino): _236.QuerySlashRecordsRequest;
            toAmino(_: _236.QuerySlashRecordsRequest): _236.QuerySlashRecordsRequestAmino;
            fromAminoMsg(object: _236.QuerySlashRecordsRequestAminoMsg): _236.QuerySlashRecordsRequest;
            fromProtoMsg(message: _236.QuerySlashRecordsRequestProtoMsg): _236.QuerySlashRecordsRequest;
            toProto(message: _236.QuerySlashRecordsRequest): Uint8Array;
            toProtoMsg(message: _236.QuerySlashRecordsRequest): _236.QuerySlashRecordsRequestProtoMsg;
        };
        QuerySlashRecordsResponse: {
            typeUrl: string;
            encode(message: _236.QuerySlashRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.QuerySlashRecordsResponse;
            fromPartial(object: Partial<_236.QuerySlashRecordsResponse>): _236.QuerySlashRecordsResponse;
            fromAmino(object: _236.QuerySlashRecordsResponseAmino): _236.QuerySlashRecordsResponse;
            toAmino(message: _236.QuerySlashRecordsResponse): _236.QuerySlashRecordsResponseAmino;
            fromAminoMsg(object: _236.QuerySlashRecordsResponseAminoMsg): _236.QuerySlashRecordsResponse;
            fromProtoMsg(message: _236.QuerySlashRecordsResponseProtoMsg): _236.QuerySlashRecordsResponse;
            toProto(message: _236.QuerySlashRecordsResponse): Uint8Array;
            toProtoMsg(message: _236.QuerySlashRecordsResponse): _236.QuerySlashRecordsResponseProtoMsg;
        };
        RedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _236.RedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.RedemptionRecordResponse;
            fromPartial(object: Partial<_236.RedemptionRecordResponse>): _236.RedemptionRecordResponse;
            fromAmino(object: _236.RedemptionRecordResponseAmino): _236.RedemptionRecordResponse;
            toAmino(message: _236.RedemptionRecordResponse): _236.RedemptionRecordResponseAmino;
            fromAminoMsg(object: _236.RedemptionRecordResponseAminoMsg): _236.RedemptionRecordResponse;
            fromProtoMsg(message: _236.RedemptionRecordResponseProtoMsg): _236.RedemptionRecordResponse;
            toProto(message: _236.RedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _236.RedemptionRecordResponse): _236.RedemptionRecordResponseProtoMsg;
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
        TransferInProgressRecordIds: {
            typeUrl: string;
            encode(message: _235.TransferInProgressRecordIds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.TransferInProgressRecordIds;
            fromPartial(object: Partial<_235.TransferInProgressRecordIds>): _235.TransferInProgressRecordIds;
            fromAmino(object: _235.TransferInProgressRecordIdsAmino): _235.TransferInProgressRecordIds;
            toAmino(message: _235.TransferInProgressRecordIds): _235.TransferInProgressRecordIdsAmino;
            fromAminoMsg(object: _235.TransferInProgressRecordIdsAminoMsg): _235.TransferInProgressRecordIds;
            fromProtoMsg(message: _235.TransferInProgressRecordIdsProtoMsg): _235.TransferInProgressRecordIds;
            toProto(message: _235.TransferInProgressRecordIds): Uint8Array;
            toProtoMsg(message: _235.TransferInProgressRecordIds): _235.TransferInProgressRecordIdsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _235.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.GenesisState;
            fromPartial(object: Partial<_235.GenesisState>): _235.GenesisState;
            fromAmino(object: _235.GenesisStateAmino): _235.GenesisState;
            toAmino(message: _235.GenesisState): _235.GenesisStateAmino;
            fromAminoMsg(object: _235.GenesisStateAminoMsg): _235.GenesisState;
            fromProtoMsg(message: _235.GenesisStateProtoMsg): _235.GenesisState;
            toProto(message: _235.GenesisState): Uint8Array;
            toProtoMsg(message: _235.GenesisState): _235.GenesisStateProtoMsg;
        };
    };
    const stakeibc: {
        MsgClientImpl: typeof _419.MsgClientImpl;
        QueryClientImpl: typeof _409.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _248.QueryParamsRequest): Promise<_248.QueryParamsResponse>;
            validators(request: _248.QueryGetValidatorsRequest): Promise<_248.QueryGetValidatorsResponse>;
            hostZone(request: _248.QueryGetHostZoneRequest): Promise<_248.QueryGetHostZoneResponse>;
            hostZoneAll(request?: _248.QueryAllHostZoneRequest): Promise<_248.QueryAllHostZoneResponse>;
            moduleAddress(request: _248.QueryModuleAddressRequest): Promise<_248.QueryModuleAddressResponse>;
            interchainAccountFromAddress(request: _248.QueryInterchainAccountFromAddressRequest): Promise<_248.QueryInterchainAccountFromAddressResponse>;
            epochTracker(request: _248.QueryGetEpochTrackerRequest): Promise<_248.QueryGetEpochTrackerResponse>;
            epochTrackerAll(request?: _248.QueryAllEpochTrackerRequest): Promise<_248.QueryAllEpochTrackerResponse>;
            nextPacketSequence(request: _248.QueryGetNextPacketSequenceRequest): Promise<_248.QueryGetNextPacketSequenceResponse>;
            addressUnbondings(request: _248.QueryAddressUnbondings): Promise<_248.QueryAddressUnbondingsResponse>;
            allTradeRoutes(request?: _248.QueryAllTradeRoutes): Promise<_248.QueryAllTradeRoutesResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _250.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lSMLiquidStake(value: _250.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _250.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                registerHostZone(value: _250.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimUndelegatedTokens(value: _250.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                rebalanceValidators(value: _250.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addValidators(value: _250.MsgAddValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                changeValidatorWeight(value: _250.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteValidator(value: _250.MsgDeleteValidator): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreInterchainAccount(value: _250.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                closeDelegationChannel(value: _250.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateValidatorSharesExchRate(value: _250.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                calibrateDelegation(value: _250.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                clearBalance(value: _250.MsgClearBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _250.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _250.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createTradeRoute(value: _250.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteTradeRoute(value: _250.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateTradeRoute(value: _250.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setCommunityPoolRebate(value: _250.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                toggleTradeController(value: _250.MsgToggleTradeController): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateHostZoneParams(value: _250.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _250.MsgLiquidStake): {
                    typeUrl: string;
                    value: _250.MsgLiquidStake;
                };
                lSMLiquidStake(value: _250.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: _250.MsgLSMLiquidStake;
                };
                redeemStake(value: _250.MsgRedeemStake): {
                    typeUrl: string;
                    value: _250.MsgRedeemStake;
                };
                registerHostZone(value: _250.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _250.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _250.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _250.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _250.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _250.MsgRebalanceValidators;
                };
                addValidators(value: _250.MsgAddValidators): {
                    typeUrl: string;
                    value: _250.MsgAddValidators;
                };
                changeValidatorWeight(value: _250.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: _250.MsgChangeValidatorWeights;
                };
                deleteValidator(value: _250.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _250.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _250.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _250.MsgRestoreInterchainAccount;
                };
                closeDelegationChannel(value: _250.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: _250.MsgCloseDelegationChannel;
                };
                updateValidatorSharesExchRate(value: _250.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _250.MsgUpdateValidatorSharesExchRate;
                };
                calibrateDelegation(value: _250.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: _250.MsgCalibrateDelegation;
                };
                clearBalance(value: _250.MsgClearBalance): {
                    typeUrl: string;
                    value: _250.MsgClearBalance;
                };
                updateInnerRedemptionRateBounds(value: _250.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _250.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _250.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _250.MsgResumeHostZone;
                };
                createTradeRoute(value: _250.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: _250.MsgCreateTradeRoute;
                };
                deleteTradeRoute(value: _250.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: _250.MsgDeleteTradeRoute;
                };
                updateTradeRoute(value: _250.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: _250.MsgUpdateTradeRoute;
                };
                setCommunityPoolRebate(value: _250.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: _250.MsgSetCommunityPoolRebate;
                };
                toggleTradeController(value: _250.MsgToggleTradeController): {
                    typeUrl: string;
                    value: _250.MsgToggleTradeController;
                };
                updateHostZoneParams(value: _250.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: _250.MsgUpdateHostZoneParams;
                };
            };
            fromPartial: {
                liquidStake(value: _250.MsgLiquidStake): {
                    typeUrl: string;
                    value: _250.MsgLiquidStake;
                };
                lSMLiquidStake(value: _250.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: _250.MsgLSMLiquidStake;
                };
                redeemStake(value: _250.MsgRedeemStake): {
                    typeUrl: string;
                    value: _250.MsgRedeemStake;
                };
                registerHostZone(value: _250.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _250.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _250.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _250.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _250.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _250.MsgRebalanceValidators;
                };
                addValidators(value: _250.MsgAddValidators): {
                    typeUrl: string;
                    value: _250.MsgAddValidators;
                };
                changeValidatorWeight(value: _250.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: _250.MsgChangeValidatorWeights;
                };
                deleteValidator(value: _250.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _250.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _250.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _250.MsgRestoreInterchainAccount;
                };
                closeDelegationChannel(value: _250.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: _250.MsgCloseDelegationChannel;
                };
                updateValidatorSharesExchRate(value: _250.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _250.MsgUpdateValidatorSharesExchRate;
                };
                calibrateDelegation(value: _250.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: _250.MsgCalibrateDelegation;
                };
                clearBalance(value: _250.MsgClearBalance): {
                    typeUrl: string;
                    value: _250.MsgClearBalance;
                };
                updateInnerRedemptionRateBounds(value: _250.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _250.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _250.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _250.MsgResumeHostZone;
                };
                createTradeRoute(value: _250.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: _250.MsgCreateTradeRoute;
                };
                deleteTradeRoute(value: _250.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: _250.MsgDeleteTradeRoute;
                };
                updateTradeRoute(value: _250.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: _250.MsgUpdateTradeRoute;
                };
                setCommunityPoolRebate(value: _250.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: _250.MsgSetCommunityPoolRebate;
                };
                toggleTradeController(value: _250.MsgToggleTradeController): {
                    typeUrl: string;
                    value: _250.MsgToggleTradeController;
                };
                updateHostZoneParams(value: _250.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: _250.MsgUpdateHostZoneParams;
                };
            };
        };
        AminoConverter: {
            "/stride.stakeibc.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _250.MsgLiquidStake) => _250.MsgLiquidStakeAmino;
                fromAmino: (object: _250.MsgLiquidStakeAmino) => _250.MsgLiquidStake;
            };
            "/stride.stakeibc.MsgLSMLiquidStake": {
                aminoType: string;
                toAmino: (message: _250.MsgLSMLiquidStake) => _250.MsgLSMLiquidStakeAmino;
                fromAmino: (object: _250.MsgLSMLiquidStakeAmino) => _250.MsgLSMLiquidStake;
            };
            "/stride.stakeibc.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _250.MsgRedeemStake) => _250.MsgRedeemStakeAmino;
                fromAmino: (object: _250.MsgRedeemStakeAmino) => _250.MsgRedeemStake;
            };
            "/stride.stakeibc.MsgRegisterHostZone": {
                aminoType: string;
                toAmino: (message: _250.MsgRegisterHostZone) => _250.MsgRegisterHostZoneAmino;
                fromAmino: (object: _250.MsgRegisterHostZoneAmino) => _250.MsgRegisterHostZone;
            };
            "/stride.stakeibc.MsgClaimUndelegatedTokens": {
                aminoType: string;
                toAmino: (message: _250.MsgClaimUndelegatedTokens) => _250.MsgClaimUndelegatedTokensAmino;
                fromAmino: (object: _250.MsgClaimUndelegatedTokensAmino) => _250.MsgClaimUndelegatedTokens;
            };
            "/stride.stakeibc.MsgRebalanceValidators": {
                aminoType: string;
                toAmino: (message: _250.MsgRebalanceValidators) => _250.MsgRebalanceValidatorsAmino;
                fromAmino: (object: _250.MsgRebalanceValidatorsAmino) => _250.MsgRebalanceValidators;
            };
            "/stride.stakeibc.MsgAddValidators": {
                aminoType: string;
                toAmino: (message: _250.MsgAddValidators) => _250.MsgAddValidatorsAmino;
                fromAmino: (object: _250.MsgAddValidatorsAmino) => _250.MsgAddValidators;
            };
            "/stride.stakeibc.MsgChangeValidatorWeights": {
                aminoType: string;
                toAmino: (message: _250.MsgChangeValidatorWeights) => _250.MsgChangeValidatorWeightsAmino;
                fromAmino: (object: _250.MsgChangeValidatorWeightsAmino) => _250.MsgChangeValidatorWeights;
            };
            "/stride.stakeibc.MsgDeleteValidator": {
                aminoType: string;
                toAmino: (message: _250.MsgDeleteValidator) => _250.MsgDeleteValidatorAmino;
                fromAmino: (object: _250.MsgDeleteValidatorAmino) => _250.MsgDeleteValidator;
            };
            "/stride.stakeibc.MsgRestoreInterchainAccount": {
                aminoType: string;
                toAmino: (message: _250.MsgRestoreInterchainAccount) => _250.MsgRestoreInterchainAccountAmino;
                fromAmino: (object: _250.MsgRestoreInterchainAccountAmino) => _250.MsgRestoreInterchainAccount;
            };
            "/stride.stakeibc.MsgCloseDelegationChannel": {
                aminoType: string;
                toAmino: (message: _250.MsgCloseDelegationChannel) => _250.MsgCloseDelegationChannelAmino;
                fromAmino: (object: _250.MsgCloseDelegationChannelAmino) => _250.MsgCloseDelegationChannel;
            };
            "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
                aminoType: string;
                toAmino: (message: _250.MsgUpdateValidatorSharesExchRate) => _250.MsgUpdateValidatorSharesExchRateAmino;
                fromAmino: (object: _250.MsgUpdateValidatorSharesExchRateAmino) => _250.MsgUpdateValidatorSharesExchRate;
            };
            "/stride.stakeibc.MsgCalibrateDelegation": {
                aminoType: string;
                toAmino: (message: _250.MsgCalibrateDelegation) => _250.MsgCalibrateDelegationAmino;
                fromAmino: (object: _250.MsgCalibrateDelegationAmino) => _250.MsgCalibrateDelegation;
            };
            "/stride.stakeibc.MsgClearBalance": {
                aminoType: string;
                toAmino: (message: _250.MsgClearBalance) => _250.MsgClearBalanceAmino;
                fromAmino: (object: _250.MsgClearBalanceAmino) => _250.MsgClearBalance;
            };
            "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _250.MsgUpdateInnerRedemptionRateBounds) => _250.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _250.MsgUpdateInnerRedemptionRateBoundsAmino) => _250.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.stakeibc.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _250.MsgResumeHostZone) => _250.MsgResumeHostZoneAmino;
                fromAmino: (object: _250.MsgResumeHostZoneAmino) => _250.MsgResumeHostZone;
            };
            "/stride.stakeibc.MsgCreateTradeRoute": {
                aminoType: string;
                toAmino: (message: _250.MsgCreateTradeRoute) => _250.MsgCreateTradeRouteAmino;
                fromAmino: (object: _250.MsgCreateTradeRouteAmino) => _250.MsgCreateTradeRoute;
            };
            "/stride.stakeibc.MsgDeleteTradeRoute": {
                aminoType: string;
                toAmino: (message: _250.MsgDeleteTradeRoute) => _250.MsgDeleteTradeRouteAmino;
                fromAmino: (object: _250.MsgDeleteTradeRouteAmino) => _250.MsgDeleteTradeRoute;
            };
            "/stride.stakeibc.MsgUpdateTradeRoute": {
                aminoType: string;
                toAmino: (message: _250.MsgUpdateTradeRoute) => _250.MsgUpdateTradeRouteAmino;
                fromAmino: (object: _250.MsgUpdateTradeRouteAmino) => _250.MsgUpdateTradeRoute;
            };
            "/stride.stakeibc.MsgSetCommunityPoolRebate": {
                aminoType: string;
                toAmino: (message: _250.MsgSetCommunityPoolRebate) => _250.MsgSetCommunityPoolRebateAmino;
                fromAmino: (object: _250.MsgSetCommunityPoolRebateAmino) => _250.MsgSetCommunityPoolRebate;
            };
            "/stride.stakeibc.MsgToggleTradeController": {
                aminoType: string;
                toAmino: (message: _250.MsgToggleTradeController) => _250.MsgToggleTradeControllerAmino;
                fromAmino: (object: _250.MsgToggleTradeControllerAmino) => _250.MsgToggleTradeController;
            };
            "/stride.stakeibc.MsgUpdateHostZoneParams": {
                aminoType: string;
                toAmino: (message: _250.MsgUpdateHostZoneParams) => _250.MsgUpdateHostZoneParamsAmino;
                fromAmino: (object: _250.MsgUpdateHostZoneParamsAmino) => _250.MsgUpdateHostZoneParams;
            };
        };
        Validator: {
            typeUrl: string;
            encode(message: _251.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.Validator;
            fromPartial(object: Partial<_251.Validator>): _251.Validator;
            fromAmino(object: _251.ValidatorAmino): _251.Validator;
            toAmino(message: _251.Validator): _251.ValidatorAmino;
            fromAminoMsg(object: _251.ValidatorAminoMsg): _251.Validator;
            fromProtoMsg(message: _251.ValidatorProtoMsg): _251.Validator;
            toProto(message: _251.Validator): Uint8Array;
            toProtoMsg(message: _251.Validator): _251.ValidatorProtoMsg;
        };
        authzPermissionChangeFromJSON(object: any): _250.AuthzPermissionChange;
        authzPermissionChangeToJSON(object: _250.AuthzPermissionChange): string;
        AuthzPermissionChange: typeof _250.AuthzPermissionChange;
        AuthzPermissionChangeSDKType: typeof _250.AuthzPermissionChange;
        AuthzPermissionChangeAmino: typeof _250.AuthzPermissionChange;
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _250.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_250.MsgUpdateInnerRedemptionRateBounds>): _250.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _250.MsgUpdateInnerRedemptionRateBoundsAmino): _250.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _250.MsgUpdateInnerRedemptionRateBounds): _250.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _250.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _250.MsgUpdateInnerRedemptionRateBounds;
            toAminoMsg(message: _250.MsgUpdateInnerRedemptionRateBounds): _250.MsgUpdateInnerRedemptionRateBoundsAminoMsg;
            fromProtoMsg(message: _250.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _250.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _250.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _250.MsgUpdateInnerRedemptionRateBounds): _250.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _250.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_250.MsgUpdateInnerRedemptionRateBoundsResponse>): _250.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _250.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _250.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _250.MsgUpdateInnerRedemptionRateBoundsResponse): _250.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _250.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _250.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _250.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _250.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _250.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _250.MsgUpdateInnerRedemptionRateBoundsResponse): _250.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _250.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgLiquidStake;
            fromPartial(object: Partial<_250.MsgLiquidStake>): _250.MsgLiquidStake;
            fromAmino(object: _250.MsgLiquidStakeAmino): _250.MsgLiquidStake;
            toAmino(message: _250.MsgLiquidStake): _250.MsgLiquidStakeAmino;
            fromAminoMsg(object: _250.MsgLiquidStakeAminoMsg): _250.MsgLiquidStake;
            toAminoMsg(message: _250.MsgLiquidStake): _250.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _250.MsgLiquidStakeProtoMsg): _250.MsgLiquidStake;
            toProto(message: _250.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _250.MsgLiquidStake): _250.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _250.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_250.MsgLiquidStakeResponse>): _250.MsgLiquidStakeResponse;
            fromAmino(object: _250.MsgLiquidStakeResponseAmino): _250.MsgLiquidStakeResponse;
            toAmino(message: _250.MsgLiquidStakeResponse): _250.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _250.MsgLiquidStakeResponseAminoMsg): _250.MsgLiquidStakeResponse;
            fromProtoMsg(message: _250.MsgLiquidStakeResponseProtoMsg): _250.MsgLiquidStakeResponse;
            toProto(message: _250.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _250.MsgLiquidStakeResponse): _250.MsgLiquidStakeResponseProtoMsg;
        };
        MsgLSMLiquidStake: {
            typeUrl: string;
            encode(message: _250.MsgLSMLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgLSMLiquidStake;
            fromPartial(object: Partial<_250.MsgLSMLiquidStake>): _250.MsgLSMLiquidStake;
            fromAmino(object: _250.MsgLSMLiquidStakeAmino): _250.MsgLSMLiquidStake;
            toAmino(message: _250.MsgLSMLiquidStake): _250.MsgLSMLiquidStakeAmino;
            fromAminoMsg(object: _250.MsgLSMLiquidStakeAminoMsg): _250.MsgLSMLiquidStake;
            toAminoMsg(message: _250.MsgLSMLiquidStake): _250.MsgLSMLiquidStakeAminoMsg;
            fromProtoMsg(message: _250.MsgLSMLiquidStakeProtoMsg): _250.MsgLSMLiquidStake;
            toProto(message: _250.MsgLSMLiquidStake): Uint8Array;
            toProtoMsg(message: _250.MsgLSMLiquidStake): _250.MsgLSMLiquidStakeProtoMsg;
        };
        MsgLSMLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _250.MsgLSMLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgLSMLiquidStakeResponse;
            fromPartial(object: Partial<_250.MsgLSMLiquidStakeResponse>): _250.MsgLSMLiquidStakeResponse;
            fromAmino(object: _250.MsgLSMLiquidStakeResponseAmino): _250.MsgLSMLiquidStakeResponse;
            toAmino(message: _250.MsgLSMLiquidStakeResponse): _250.MsgLSMLiquidStakeResponseAmino;
            fromAminoMsg(object: _250.MsgLSMLiquidStakeResponseAminoMsg): _250.MsgLSMLiquidStakeResponse;
            fromProtoMsg(message: _250.MsgLSMLiquidStakeResponseProtoMsg): _250.MsgLSMLiquidStakeResponse;
            toProto(message: _250.MsgLSMLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _250.MsgLSMLiquidStakeResponse): _250.MsgLSMLiquidStakeResponseProtoMsg;
        };
        MsgClearBalance: {
            typeUrl: string;
            encode(message: _250.MsgClearBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgClearBalance;
            fromPartial(object: Partial<_250.MsgClearBalance>): _250.MsgClearBalance;
            fromAmino(object: _250.MsgClearBalanceAmino): _250.MsgClearBalance;
            toAmino(message: _250.MsgClearBalance): _250.MsgClearBalanceAmino;
            fromAminoMsg(object: _250.MsgClearBalanceAminoMsg): _250.MsgClearBalance;
            toAminoMsg(message: _250.MsgClearBalance): _250.MsgClearBalanceAminoMsg;
            fromProtoMsg(message: _250.MsgClearBalanceProtoMsg): _250.MsgClearBalance;
            toProto(message: _250.MsgClearBalance): Uint8Array;
            toProtoMsg(message: _250.MsgClearBalance): _250.MsgClearBalanceProtoMsg;
        };
        MsgClearBalanceResponse: {
            typeUrl: string;
            encode(_: _250.MsgClearBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgClearBalanceResponse;
            fromPartial(_: Partial<_250.MsgClearBalanceResponse>): _250.MsgClearBalanceResponse;
            fromAmino(_: _250.MsgClearBalanceResponseAmino): _250.MsgClearBalanceResponse;
            toAmino(_: _250.MsgClearBalanceResponse): _250.MsgClearBalanceResponseAmino;
            fromAminoMsg(object: _250.MsgClearBalanceResponseAminoMsg): _250.MsgClearBalanceResponse;
            fromProtoMsg(message: _250.MsgClearBalanceResponseProtoMsg): _250.MsgClearBalanceResponse;
            toProto(message: _250.MsgClearBalanceResponse): Uint8Array;
            toProtoMsg(message: _250.MsgClearBalanceResponse): _250.MsgClearBalanceResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _250.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgRedeemStake;
            fromPartial(object: Partial<_250.MsgRedeemStake>): _250.MsgRedeemStake;
            fromAmino(object: _250.MsgRedeemStakeAmino): _250.MsgRedeemStake;
            toAmino(message: _250.MsgRedeemStake): _250.MsgRedeemStakeAmino;
            fromAminoMsg(object: _250.MsgRedeemStakeAminoMsg): _250.MsgRedeemStake;
            toAminoMsg(message: _250.MsgRedeemStake): _250.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _250.MsgRedeemStakeProtoMsg): _250.MsgRedeemStake;
            toProto(message: _250.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _250.MsgRedeemStake): _250.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(_: _250.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgRedeemStakeResponse;
            fromPartial(_: Partial<_250.MsgRedeemStakeResponse>): _250.MsgRedeemStakeResponse;
            fromAmino(_: _250.MsgRedeemStakeResponseAmino): _250.MsgRedeemStakeResponse;
            toAmino(_: _250.MsgRedeemStakeResponse): _250.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _250.MsgRedeemStakeResponseAminoMsg): _250.MsgRedeemStakeResponse;
            fromProtoMsg(message: _250.MsgRedeemStakeResponseProtoMsg): _250.MsgRedeemStakeResponse;
            toProto(message: _250.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _250.MsgRedeemStakeResponse): _250.MsgRedeemStakeResponseProtoMsg;
        };
        MsgRegisterHostZone: {
            typeUrl: string;
            encode(message: _250.MsgRegisterHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgRegisterHostZone;
            fromPartial(object: Partial<_250.MsgRegisterHostZone>): _250.MsgRegisterHostZone;
            fromAmino(object: _250.MsgRegisterHostZoneAmino): _250.MsgRegisterHostZone;
            toAmino(message: _250.MsgRegisterHostZone): _250.MsgRegisterHostZoneAmino;
            fromAminoMsg(object: _250.MsgRegisterHostZoneAminoMsg): _250.MsgRegisterHostZone;
            toAminoMsg(message: _250.MsgRegisterHostZone): _250.MsgRegisterHostZoneAminoMsg;
            fromProtoMsg(message: _250.MsgRegisterHostZoneProtoMsg): _250.MsgRegisterHostZone;
            toProto(message: _250.MsgRegisterHostZone): Uint8Array;
            toProtoMsg(message: _250.MsgRegisterHostZone): _250.MsgRegisterHostZoneProtoMsg;
        };
        MsgRegisterHostZoneResponse: {
            typeUrl: string;
            encode(_: _250.MsgRegisterHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgRegisterHostZoneResponse;
            fromPartial(_: Partial<_250.MsgRegisterHostZoneResponse>): _250.MsgRegisterHostZoneResponse;
            fromAmino(_: _250.MsgRegisterHostZoneResponseAmino): _250.MsgRegisterHostZoneResponse;
            toAmino(_: _250.MsgRegisterHostZoneResponse): _250.MsgRegisterHostZoneResponseAmino;
            fromAminoMsg(object: _250.MsgRegisterHostZoneResponseAminoMsg): _250.MsgRegisterHostZoneResponse;
            fromProtoMsg(message: _250.MsgRegisterHostZoneResponseProtoMsg): _250.MsgRegisterHostZoneResponse;
            toProto(message: _250.MsgRegisterHostZoneResponse): Uint8Array;
            toProtoMsg(message: _250.MsgRegisterHostZoneResponse): _250.MsgRegisterHostZoneResponseProtoMsg;
        };
        MsgClaimUndelegatedTokens: {
            typeUrl: string;
            encode(message: _250.MsgClaimUndelegatedTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgClaimUndelegatedTokens;
            fromPartial(object: Partial<_250.MsgClaimUndelegatedTokens>): _250.MsgClaimUndelegatedTokens;
            fromAmino(object: _250.MsgClaimUndelegatedTokensAmino): _250.MsgClaimUndelegatedTokens;
            toAmino(message: _250.MsgClaimUndelegatedTokens): _250.MsgClaimUndelegatedTokensAmino;
            fromAminoMsg(object: _250.MsgClaimUndelegatedTokensAminoMsg): _250.MsgClaimUndelegatedTokens;
            toAminoMsg(message: _250.MsgClaimUndelegatedTokens): _250.MsgClaimUndelegatedTokensAminoMsg;
            fromProtoMsg(message: _250.MsgClaimUndelegatedTokensProtoMsg): _250.MsgClaimUndelegatedTokens;
            toProto(message: _250.MsgClaimUndelegatedTokens): Uint8Array;
            toProtoMsg(message: _250.MsgClaimUndelegatedTokens): _250.MsgClaimUndelegatedTokensProtoMsg;
        };
        MsgClaimUndelegatedTokensResponse: {
            typeUrl: string;
            encode(_: _250.MsgClaimUndelegatedTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgClaimUndelegatedTokensResponse;
            fromPartial(_: Partial<_250.MsgClaimUndelegatedTokensResponse>): _250.MsgClaimUndelegatedTokensResponse;
            fromAmino(_: _250.MsgClaimUndelegatedTokensResponseAmino): _250.MsgClaimUndelegatedTokensResponse;
            toAmino(_: _250.MsgClaimUndelegatedTokensResponse): _250.MsgClaimUndelegatedTokensResponseAmino;
            fromAminoMsg(object: _250.MsgClaimUndelegatedTokensResponseAminoMsg): _250.MsgClaimUndelegatedTokensResponse;
            fromProtoMsg(message: _250.MsgClaimUndelegatedTokensResponseProtoMsg): _250.MsgClaimUndelegatedTokensResponse;
            toProto(message: _250.MsgClaimUndelegatedTokensResponse): Uint8Array;
            toProtoMsg(message: _250.MsgClaimUndelegatedTokensResponse): _250.MsgClaimUndelegatedTokensResponseProtoMsg;
        };
        MsgRebalanceValidators: {
            typeUrl: string;
            encode(message: _250.MsgRebalanceValidators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgRebalanceValidators;
            fromPartial(object: Partial<_250.MsgRebalanceValidators>): _250.MsgRebalanceValidators;
            fromAmino(object: _250.MsgRebalanceValidatorsAmino): _250.MsgRebalanceValidators;
            toAmino(message: _250.MsgRebalanceValidators): _250.MsgRebalanceValidatorsAmino;
            fromAminoMsg(object: _250.MsgRebalanceValidatorsAminoMsg): _250.MsgRebalanceValidators;
            toAminoMsg(message: _250.MsgRebalanceValidators): _250.MsgRebalanceValidatorsAminoMsg;
            fromProtoMsg(message: _250.MsgRebalanceValidatorsProtoMsg): _250.MsgRebalanceValidators;
            toProto(message: _250.MsgRebalanceValidators): Uint8Array;
            toProtoMsg(message: _250.MsgRebalanceValidators): _250.MsgRebalanceValidatorsProtoMsg;
        };
        MsgRebalanceValidatorsResponse: {
            typeUrl: string;
            encode(_: _250.MsgRebalanceValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgRebalanceValidatorsResponse;
            fromPartial(_: Partial<_250.MsgRebalanceValidatorsResponse>): _250.MsgRebalanceValidatorsResponse;
            fromAmino(_: _250.MsgRebalanceValidatorsResponseAmino): _250.MsgRebalanceValidatorsResponse;
            toAmino(_: _250.MsgRebalanceValidatorsResponse): _250.MsgRebalanceValidatorsResponseAmino;
            fromAminoMsg(object: _250.MsgRebalanceValidatorsResponseAminoMsg): _250.MsgRebalanceValidatorsResponse;
            fromProtoMsg(message: _250.MsgRebalanceValidatorsResponseProtoMsg): _250.MsgRebalanceValidatorsResponse;
            toProto(message: _250.MsgRebalanceValidatorsResponse): Uint8Array;
            toProtoMsg(message: _250.MsgRebalanceValidatorsResponse): _250.MsgRebalanceValidatorsResponseProtoMsg;
        };
        MsgAddValidators: {
            typeUrl: string;
            encode(message: _250.MsgAddValidators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgAddValidators;
            fromPartial(object: Partial<_250.MsgAddValidators>): _250.MsgAddValidators;
            fromAmino(object: _250.MsgAddValidatorsAmino): _250.MsgAddValidators;
            toAmino(message: _250.MsgAddValidators): _250.MsgAddValidatorsAmino;
            fromAminoMsg(object: _250.MsgAddValidatorsAminoMsg): _250.MsgAddValidators;
            toAminoMsg(message: _250.MsgAddValidators): _250.MsgAddValidatorsAminoMsg;
            fromProtoMsg(message: _250.MsgAddValidatorsProtoMsg): _250.MsgAddValidators;
            toProto(message: _250.MsgAddValidators): Uint8Array;
            toProtoMsg(message: _250.MsgAddValidators): _250.MsgAddValidatorsProtoMsg;
        };
        MsgAddValidatorsResponse: {
            typeUrl: string;
            encode(_: _250.MsgAddValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgAddValidatorsResponse;
            fromPartial(_: Partial<_250.MsgAddValidatorsResponse>): _250.MsgAddValidatorsResponse;
            fromAmino(_: _250.MsgAddValidatorsResponseAmino): _250.MsgAddValidatorsResponse;
            toAmino(_: _250.MsgAddValidatorsResponse): _250.MsgAddValidatorsResponseAmino;
            fromAminoMsg(object: _250.MsgAddValidatorsResponseAminoMsg): _250.MsgAddValidatorsResponse;
            fromProtoMsg(message: _250.MsgAddValidatorsResponseProtoMsg): _250.MsgAddValidatorsResponse;
            toProto(message: _250.MsgAddValidatorsResponse): Uint8Array;
            toProtoMsg(message: _250.MsgAddValidatorsResponse): _250.MsgAddValidatorsResponseProtoMsg;
        };
        ValidatorWeight: {
            typeUrl: string;
            encode(message: _250.ValidatorWeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.ValidatorWeight;
            fromPartial(object: Partial<_250.ValidatorWeight>): _250.ValidatorWeight;
            fromAmino(object: _250.ValidatorWeightAmino): _250.ValidatorWeight;
            toAmino(message: _250.ValidatorWeight): _250.ValidatorWeightAmino;
            fromAminoMsg(object: _250.ValidatorWeightAminoMsg): _250.ValidatorWeight;
            fromProtoMsg(message: _250.ValidatorWeightProtoMsg): _250.ValidatorWeight;
            toProto(message: _250.ValidatorWeight): Uint8Array;
            toProtoMsg(message: _250.ValidatorWeight): _250.ValidatorWeightProtoMsg;
        };
        MsgChangeValidatorWeights: {
            typeUrl: string;
            encode(message: _250.MsgChangeValidatorWeights, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgChangeValidatorWeights;
            fromPartial(object: Partial<_250.MsgChangeValidatorWeights>): _250.MsgChangeValidatorWeights;
            fromAmino(object: _250.MsgChangeValidatorWeightsAmino): _250.MsgChangeValidatorWeights;
            toAmino(message: _250.MsgChangeValidatorWeights): _250.MsgChangeValidatorWeightsAmino;
            fromAminoMsg(object: _250.MsgChangeValidatorWeightsAminoMsg): _250.MsgChangeValidatorWeights;
            toAminoMsg(message: _250.MsgChangeValidatorWeights): _250.MsgChangeValidatorWeightsAminoMsg;
            fromProtoMsg(message: _250.MsgChangeValidatorWeightsProtoMsg): _250.MsgChangeValidatorWeights;
            toProto(message: _250.MsgChangeValidatorWeights): Uint8Array;
            toProtoMsg(message: _250.MsgChangeValidatorWeights): _250.MsgChangeValidatorWeightsProtoMsg;
        };
        MsgChangeValidatorWeightsResponse: {
            typeUrl: string;
            encode(_: _250.MsgChangeValidatorWeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgChangeValidatorWeightsResponse;
            fromPartial(_: Partial<_250.MsgChangeValidatorWeightsResponse>): _250.MsgChangeValidatorWeightsResponse;
            fromAmino(_: _250.MsgChangeValidatorWeightsResponseAmino): _250.MsgChangeValidatorWeightsResponse;
            toAmino(_: _250.MsgChangeValidatorWeightsResponse): _250.MsgChangeValidatorWeightsResponseAmino;
            fromAminoMsg(object: _250.MsgChangeValidatorWeightsResponseAminoMsg): _250.MsgChangeValidatorWeightsResponse;
            fromProtoMsg(message: _250.MsgChangeValidatorWeightsResponseProtoMsg): _250.MsgChangeValidatorWeightsResponse;
            toProto(message: _250.MsgChangeValidatorWeightsResponse): Uint8Array;
            toProtoMsg(message: _250.MsgChangeValidatorWeightsResponse): _250.MsgChangeValidatorWeightsResponseProtoMsg;
        };
        MsgDeleteValidator: {
            typeUrl: string;
            encode(message: _250.MsgDeleteValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgDeleteValidator;
            fromPartial(object: Partial<_250.MsgDeleteValidator>): _250.MsgDeleteValidator;
            fromAmino(object: _250.MsgDeleteValidatorAmino): _250.MsgDeleteValidator;
            toAmino(message: _250.MsgDeleteValidator): _250.MsgDeleteValidatorAmino;
            fromAminoMsg(object: _250.MsgDeleteValidatorAminoMsg): _250.MsgDeleteValidator;
            toAminoMsg(message: _250.MsgDeleteValidator): _250.MsgDeleteValidatorAminoMsg;
            fromProtoMsg(message: _250.MsgDeleteValidatorProtoMsg): _250.MsgDeleteValidator;
            toProto(message: _250.MsgDeleteValidator): Uint8Array;
            toProtoMsg(message: _250.MsgDeleteValidator): _250.MsgDeleteValidatorProtoMsg;
        };
        MsgDeleteValidatorResponse: {
            typeUrl: string;
            encode(_: _250.MsgDeleteValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgDeleteValidatorResponse;
            fromPartial(_: Partial<_250.MsgDeleteValidatorResponse>): _250.MsgDeleteValidatorResponse;
            fromAmino(_: _250.MsgDeleteValidatorResponseAmino): _250.MsgDeleteValidatorResponse;
            toAmino(_: _250.MsgDeleteValidatorResponse): _250.MsgDeleteValidatorResponseAmino;
            fromAminoMsg(object: _250.MsgDeleteValidatorResponseAminoMsg): _250.MsgDeleteValidatorResponse;
            fromProtoMsg(message: _250.MsgDeleteValidatorResponseProtoMsg): _250.MsgDeleteValidatorResponse;
            toProto(message: _250.MsgDeleteValidatorResponse): Uint8Array;
            toProtoMsg(message: _250.MsgDeleteValidatorResponse): _250.MsgDeleteValidatorResponseProtoMsg;
        };
        MsgRestoreInterchainAccount: {
            typeUrl: string;
            encode(message: _250.MsgRestoreInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgRestoreInterchainAccount;
            fromPartial(object: Partial<_250.MsgRestoreInterchainAccount>): _250.MsgRestoreInterchainAccount;
            fromAmino(object: _250.MsgRestoreInterchainAccountAmino): _250.MsgRestoreInterchainAccount;
            toAmino(message: _250.MsgRestoreInterchainAccount): _250.MsgRestoreInterchainAccountAmino;
            fromAminoMsg(object: _250.MsgRestoreInterchainAccountAminoMsg): _250.MsgRestoreInterchainAccount;
            toAminoMsg(message: _250.MsgRestoreInterchainAccount): _250.MsgRestoreInterchainAccountAminoMsg;
            fromProtoMsg(message: _250.MsgRestoreInterchainAccountProtoMsg): _250.MsgRestoreInterchainAccount;
            toProto(message: _250.MsgRestoreInterchainAccount): Uint8Array;
            toProtoMsg(message: _250.MsgRestoreInterchainAccount): _250.MsgRestoreInterchainAccountProtoMsg;
        };
        MsgRestoreInterchainAccountResponse: {
            typeUrl: string;
            encode(_: _250.MsgRestoreInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgRestoreInterchainAccountResponse;
            fromPartial(_: Partial<_250.MsgRestoreInterchainAccountResponse>): _250.MsgRestoreInterchainAccountResponse;
            fromAmino(_: _250.MsgRestoreInterchainAccountResponseAmino): _250.MsgRestoreInterchainAccountResponse;
            toAmino(_: _250.MsgRestoreInterchainAccountResponse): _250.MsgRestoreInterchainAccountResponseAmino;
            fromAminoMsg(object: _250.MsgRestoreInterchainAccountResponseAminoMsg): _250.MsgRestoreInterchainAccountResponse;
            fromProtoMsg(message: _250.MsgRestoreInterchainAccountResponseProtoMsg): _250.MsgRestoreInterchainAccountResponse;
            toProto(message: _250.MsgRestoreInterchainAccountResponse): Uint8Array;
            toProtoMsg(message: _250.MsgRestoreInterchainAccountResponse): _250.MsgRestoreInterchainAccountResponseProtoMsg;
        };
        MsgCloseDelegationChannel: {
            typeUrl: string;
            encode(message: _250.MsgCloseDelegationChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgCloseDelegationChannel;
            fromPartial(object: Partial<_250.MsgCloseDelegationChannel>): _250.MsgCloseDelegationChannel;
            fromAmino(object: _250.MsgCloseDelegationChannelAmino): _250.MsgCloseDelegationChannel;
            toAmino(message: _250.MsgCloseDelegationChannel): _250.MsgCloseDelegationChannelAmino;
            fromAminoMsg(object: _250.MsgCloseDelegationChannelAminoMsg): _250.MsgCloseDelegationChannel;
            toAminoMsg(message: _250.MsgCloseDelegationChannel): _250.MsgCloseDelegationChannelAminoMsg;
            fromProtoMsg(message: _250.MsgCloseDelegationChannelProtoMsg): _250.MsgCloseDelegationChannel;
            toProto(message: _250.MsgCloseDelegationChannel): Uint8Array;
            toProtoMsg(message: _250.MsgCloseDelegationChannel): _250.MsgCloseDelegationChannelProtoMsg;
        };
        MsgCloseDelegationChannelResponse: {
            typeUrl: string;
            encode(_: _250.MsgCloseDelegationChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgCloseDelegationChannelResponse;
            fromPartial(_: Partial<_250.MsgCloseDelegationChannelResponse>): _250.MsgCloseDelegationChannelResponse;
            fromAmino(_: _250.MsgCloseDelegationChannelResponseAmino): _250.MsgCloseDelegationChannelResponse;
            toAmino(_: _250.MsgCloseDelegationChannelResponse): _250.MsgCloseDelegationChannelResponseAmino;
            fromAminoMsg(object: _250.MsgCloseDelegationChannelResponseAminoMsg): _250.MsgCloseDelegationChannelResponse;
            fromProtoMsg(message: _250.MsgCloseDelegationChannelResponseProtoMsg): _250.MsgCloseDelegationChannelResponse;
            toProto(message: _250.MsgCloseDelegationChannelResponse): Uint8Array;
            toProtoMsg(message: _250.MsgCloseDelegationChannelResponse): _250.MsgCloseDelegationChannelResponseProtoMsg;
        };
        MsgUpdateValidatorSharesExchRate: {
            typeUrl: string;
            encode(message: _250.MsgUpdateValidatorSharesExchRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgUpdateValidatorSharesExchRate;
            fromPartial(object: Partial<_250.MsgUpdateValidatorSharesExchRate>): _250.MsgUpdateValidatorSharesExchRate;
            fromAmino(object: _250.MsgUpdateValidatorSharesExchRateAmino): _250.MsgUpdateValidatorSharesExchRate;
            toAmino(message: _250.MsgUpdateValidatorSharesExchRate): _250.MsgUpdateValidatorSharesExchRateAmino;
            fromAminoMsg(object: _250.MsgUpdateValidatorSharesExchRateAminoMsg): _250.MsgUpdateValidatorSharesExchRate;
            toAminoMsg(message: _250.MsgUpdateValidatorSharesExchRate): _250.MsgUpdateValidatorSharesExchRateAminoMsg;
            fromProtoMsg(message: _250.MsgUpdateValidatorSharesExchRateProtoMsg): _250.MsgUpdateValidatorSharesExchRate;
            toProto(message: _250.MsgUpdateValidatorSharesExchRate): Uint8Array;
            toProtoMsg(message: _250.MsgUpdateValidatorSharesExchRate): _250.MsgUpdateValidatorSharesExchRateProtoMsg;
        };
        MsgUpdateValidatorSharesExchRateResponse: {
            typeUrl: string;
            encode(_: _250.MsgUpdateValidatorSharesExchRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgUpdateValidatorSharesExchRateResponse;
            fromPartial(_: Partial<_250.MsgUpdateValidatorSharesExchRateResponse>): _250.MsgUpdateValidatorSharesExchRateResponse;
            fromAmino(_: _250.MsgUpdateValidatorSharesExchRateResponseAmino): _250.MsgUpdateValidatorSharesExchRateResponse;
            toAmino(_: _250.MsgUpdateValidatorSharesExchRateResponse): _250.MsgUpdateValidatorSharesExchRateResponseAmino;
            fromAminoMsg(object: _250.MsgUpdateValidatorSharesExchRateResponseAminoMsg): _250.MsgUpdateValidatorSharesExchRateResponse;
            fromProtoMsg(message: _250.MsgUpdateValidatorSharesExchRateResponseProtoMsg): _250.MsgUpdateValidatorSharesExchRateResponse;
            toProto(message: _250.MsgUpdateValidatorSharesExchRateResponse): Uint8Array;
            toProtoMsg(message: _250.MsgUpdateValidatorSharesExchRateResponse): _250.MsgUpdateValidatorSharesExchRateResponseProtoMsg;
        };
        MsgCalibrateDelegation: {
            typeUrl: string;
            encode(message: _250.MsgCalibrateDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgCalibrateDelegation;
            fromPartial(object: Partial<_250.MsgCalibrateDelegation>): _250.MsgCalibrateDelegation;
            fromAmino(object: _250.MsgCalibrateDelegationAmino): _250.MsgCalibrateDelegation;
            toAmino(message: _250.MsgCalibrateDelegation): _250.MsgCalibrateDelegationAmino;
            fromAminoMsg(object: _250.MsgCalibrateDelegationAminoMsg): _250.MsgCalibrateDelegation;
            toAminoMsg(message: _250.MsgCalibrateDelegation): _250.MsgCalibrateDelegationAminoMsg;
            fromProtoMsg(message: _250.MsgCalibrateDelegationProtoMsg): _250.MsgCalibrateDelegation;
            toProto(message: _250.MsgCalibrateDelegation): Uint8Array;
            toProtoMsg(message: _250.MsgCalibrateDelegation): _250.MsgCalibrateDelegationProtoMsg;
        };
        MsgCalibrateDelegationResponse: {
            typeUrl: string;
            encode(_: _250.MsgCalibrateDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgCalibrateDelegationResponse;
            fromPartial(_: Partial<_250.MsgCalibrateDelegationResponse>): _250.MsgCalibrateDelegationResponse;
            fromAmino(_: _250.MsgCalibrateDelegationResponseAmino): _250.MsgCalibrateDelegationResponse;
            toAmino(_: _250.MsgCalibrateDelegationResponse): _250.MsgCalibrateDelegationResponseAmino;
            fromAminoMsg(object: _250.MsgCalibrateDelegationResponseAminoMsg): _250.MsgCalibrateDelegationResponse;
            fromProtoMsg(message: _250.MsgCalibrateDelegationResponseProtoMsg): _250.MsgCalibrateDelegationResponse;
            toProto(message: _250.MsgCalibrateDelegationResponse): Uint8Array;
            toProtoMsg(message: _250.MsgCalibrateDelegationResponse): _250.MsgCalibrateDelegationResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _250.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgResumeHostZone;
            fromPartial(object: Partial<_250.MsgResumeHostZone>): _250.MsgResumeHostZone;
            fromAmino(object: _250.MsgResumeHostZoneAmino): _250.MsgResumeHostZone;
            toAmino(message: _250.MsgResumeHostZone): _250.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _250.MsgResumeHostZoneAminoMsg): _250.MsgResumeHostZone;
            toAminoMsg(message: _250.MsgResumeHostZone): _250.MsgResumeHostZoneAminoMsg;
            fromProtoMsg(message: _250.MsgResumeHostZoneProtoMsg): _250.MsgResumeHostZone;
            toProto(message: _250.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _250.MsgResumeHostZone): _250.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _250.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_250.MsgResumeHostZoneResponse>): _250.MsgResumeHostZoneResponse;
            fromAmino(_: _250.MsgResumeHostZoneResponseAmino): _250.MsgResumeHostZoneResponse;
            toAmino(_: _250.MsgResumeHostZoneResponse): _250.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _250.MsgResumeHostZoneResponseAminoMsg): _250.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _250.MsgResumeHostZoneResponseProtoMsg): _250.MsgResumeHostZoneResponse;
            toProto(message: _250.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _250.MsgResumeHostZoneResponse): _250.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgCreateTradeRoute: {
            typeUrl: string;
            encode(message: _250.MsgCreateTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgCreateTradeRoute;
            fromPartial(object: Partial<_250.MsgCreateTradeRoute>): _250.MsgCreateTradeRoute;
            fromAmino(object: _250.MsgCreateTradeRouteAmino): _250.MsgCreateTradeRoute;
            toAmino(message: _250.MsgCreateTradeRoute): _250.MsgCreateTradeRouteAmino;
            fromAminoMsg(object: _250.MsgCreateTradeRouteAminoMsg): _250.MsgCreateTradeRoute;
            toAminoMsg(message: _250.MsgCreateTradeRoute): _250.MsgCreateTradeRouteAminoMsg;
            fromProtoMsg(message: _250.MsgCreateTradeRouteProtoMsg): _250.MsgCreateTradeRoute;
            toProto(message: _250.MsgCreateTradeRoute): Uint8Array;
            toProtoMsg(message: _250.MsgCreateTradeRoute): _250.MsgCreateTradeRouteProtoMsg;
        };
        MsgCreateTradeRouteResponse: {
            typeUrl: string;
            encode(_: _250.MsgCreateTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgCreateTradeRouteResponse;
            fromPartial(_: Partial<_250.MsgCreateTradeRouteResponse>): _250.MsgCreateTradeRouteResponse;
            fromAmino(_: _250.MsgCreateTradeRouteResponseAmino): _250.MsgCreateTradeRouteResponse;
            toAmino(_: _250.MsgCreateTradeRouteResponse): _250.MsgCreateTradeRouteResponseAmino;
            fromAminoMsg(object: _250.MsgCreateTradeRouteResponseAminoMsg): _250.MsgCreateTradeRouteResponse;
            fromProtoMsg(message: _250.MsgCreateTradeRouteResponseProtoMsg): _250.MsgCreateTradeRouteResponse;
            toProto(message: _250.MsgCreateTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _250.MsgCreateTradeRouteResponse): _250.MsgCreateTradeRouteResponseProtoMsg;
        };
        MsgDeleteTradeRoute: {
            typeUrl: string;
            encode(message: _250.MsgDeleteTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgDeleteTradeRoute;
            fromPartial(object: Partial<_250.MsgDeleteTradeRoute>): _250.MsgDeleteTradeRoute;
            fromAmino(object: _250.MsgDeleteTradeRouteAmino): _250.MsgDeleteTradeRoute;
            toAmino(message: _250.MsgDeleteTradeRoute): _250.MsgDeleteTradeRouteAmino;
            fromAminoMsg(object: _250.MsgDeleteTradeRouteAminoMsg): _250.MsgDeleteTradeRoute;
            toAminoMsg(message: _250.MsgDeleteTradeRoute): _250.MsgDeleteTradeRouteAminoMsg;
            fromProtoMsg(message: _250.MsgDeleteTradeRouteProtoMsg): _250.MsgDeleteTradeRoute;
            toProto(message: _250.MsgDeleteTradeRoute): Uint8Array;
            toProtoMsg(message: _250.MsgDeleteTradeRoute): _250.MsgDeleteTradeRouteProtoMsg;
        };
        MsgDeleteTradeRouteResponse: {
            typeUrl: string;
            encode(_: _250.MsgDeleteTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgDeleteTradeRouteResponse;
            fromPartial(_: Partial<_250.MsgDeleteTradeRouteResponse>): _250.MsgDeleteTradeRouteResponse;
            fromAmino(_: _250.MsgDeleteTradeRouteResponseAmino): _250.MsgDeleteTradeRouteResponse;
            toAmino(_: _250.MsgDeleteTradeRouteResponse): _250.MsgDeleteTradeRouteResponseAmino;
            fromAminoMsg(object: _250.MsgDeleteTradeRouteResponseAminoMsg): _250.MsgDeleteTradeRouteResponse;
            fromProtoMsg(message: _250.MsgDeleteTradeRouteResponseProtoMsg): _250.MsgDeleteTradeRouteResponse;
            toProto(message: _250.MsgDeleteTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _250.MsgDeleteTradeRouteResponse): _250.MsgDeleteTradeRouteResponseProtoMsg;
        };
        MsgUpdateTradeRoute: {
            typeUrl: string;
            encode(message: _250.MsgUpdateTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgUpdateTradeRoute;
            fromPartial(object: Partial<_250.MsgUpdateTradeRoute>): _250.MsgUpdateTradeRoute;
            fromAmino(object: _250.MsgUpdateTradeRouteAmino): _250.MsgUpdateTradeRoute;
            toAmino(message: _250.MsgUpdateTradeRoute): _250.MsgUpdateTradeRouteAmino;
            fromAminoMsg(object: _250.MsgUpdateTradeRouteAminoMsg): _250.MsgUpdateTradeRoute;
            toAminoMsg(message: _250.MsgUpdateTradeRoute): _250.MsgUpdateTradeRouteAminoMsg;
            fromProtoMsg(message: _250.MsgUpdateTradeRouteProtoMsg): _250.MsgUpdateTradeRoute;
            toProto(message: _250.MsgUpdateTradeRoute): Uint8Array;
            toProtoMsg(message: _250.MsgUpdateTradeRoute): _250.MsgUpdateTradeRouteProtoMsg;
        };
        MsgUpdateTradeRouteResponse: {
            typeUrl: string;
            encode(_: _250.MsgUpdateTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgUpdateTradeRouteResponse;
            fromPartial(_: Partial<_250.MsgUpdateTradeRouteResponse>): _250.MsgUpdateTradeRouteResponse;
            fromAmino(_: _250.MsgUpdateTradeRouteResponseAmino): _250.MsgUpdateTradeRouteResponse;
            toAmino(_: _250.MsgUpdateTradeRouteResponse): _250.MsgUpdateTradeRouteResponseAmino;
            fromAminoMsg(object: _250.MsgUpdateTradeRouteResponseAminoMsg): _250.MsgUpdateTradeRouteResponse;
            fromProtoMsg(message: _250.MsgUpdateTradeRouteResponseProtoMsg): _250.MsgUpdateTradeRouteResponse;
            toProto(message: _250.MsgUpdateTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _250.MsgUpdateTradeRouteResponse): _250.MsgUpdateTradeRouteResponseProtoMsg;
        };
        MsgSetCommunityPoolRebate: {
            typeUrl: string;
            encode(message: _250.MsgSetCommunityPoolRebate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgSetCommunityPoolRebate;
            fromPartial(object: Partial<_250.MsgSetCommunityPoolRebate>): _250.MsgSetCommunityPoolRebate;
            fromAmino(object: _250.MsgSetCommunityPoolRebateAmino): _250.MsgSetCommunityPoolRebate;
            toAmino(message: _250.MsgSetCommunityPoolRebate): _250.MsgSetCommunityPoolRebateAmino;
            fromAminoMsg(object: _250.MsgSetCommunityPoolRebateAminoMsg): _250.MsgSetCommunityPoolRebate;
            toAminoMsg(message: _250.MsgSetCommunityPoolRebate): _250.MsgSetCommunityPoolRebateAminoMsg;
            fromProtoMsg(message: _250.MsgSetCommunityPoolRebateProtoMsg): _250.MsgSetCommunityPoolRebate;
            toProto(message: _250.MsgSetCommunityPoolRebate): Uint8Array;
            toProtoMsg(message: _250.MsgSetCommunityPoolRebate): _250.MsgSetCommunityPoolRebateProtoMsg;
        };
        MsgSetCommunityPoolRebateResponse: {
            typeUrl: string;
            encode(_: _250.MsgSetCommunityPoolRebateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgSetCommunityPoolRebateResponse;
            fromPartial(_: Partial<_250.MsgSetCommunityPoolRebateResponse>): _250.MsgSetCommunityPoolRebateResponse;
            fromAmino(_: _250.MsgSetCommunityPoolRebateResponseAmino): _250.MsgSetCommunityPoolRebateResponse;
            toAmino(_: _250.MsgSetCommunityPoolRebateResponse): _250.MsgSetCommunityPoolRebateResponseAmino;
            fromAminoMsg(object: _250.MsgSetCommunityPoolRebateResponseAminoMsg): _250.MsgSetCommunityPoolRebateResponse;
            fromProtoMsg(message: _250.MsgSetCommunityPoolRebateResponseProtoMsg): _250.MsgSetCommunityPoolRebateResponse;
            toProto(message: _250.MsgSetCommunityPoolRebateResponse): Uint8Array;
            toProtoMsg(message: _250.MsgSetCommunityPoolRebateResponse): _250.MsgSetCommunityPoolRebateResponseProtoMsg;
        };
        MsgToggleTradeController: {
            typeUrl: string;
            encode(message: _250.MsgToggleTradeController, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgToggleTradeController;
            fromPartial(object: Partial<_250.MsgToggleTradeController>): _250.MsgToggleTradeController;
            fromAmino(object: _250.MsgToggleTradeControllerAmino): _250.MsgToggleTradeController;
            toAmino(message: _250.MsgToggleTradeController): _250.MsgToggleTradeControllerAmino;
            fromAminoMsg(object: _250.MsgToggleTradeControllerAminoMsg): _250.MsgToggleTradeController;
            toAminoMsg(message: _250.MsgToggleTradeController): _250.MsgToggleTradeControllerAminoMsg;
            fromProtoMsg(message: _250.MsgToggleTradeControllerProtoMsg): _250.MsgToggleTradeController;
            toProto(message: _250.MsgToggleTradeController): Uint8Array;
            toProtoMsg(message: _250.MsgToggleTradeController): _250.MsgToggleTradeControllerProtoMsg;
        };
        MsgToggleTradeControllerResponse: {
            typeUrl: string;
            encode(_: _250.MsgToggleTradeControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgToggleTradeControllerResponse;
            fromPartial(_: Partial<_250.MsgToggleTradeControllerResponse>): _250.MsgToggleTradeControllerResponse;
            fromAmino(_: _250.MsgToggleTradeControllerResponseAmino): _250.MsgToggleTradeControllerResponse;
            toAmino(_: _250.MsgToggleTradeControllerResponse): _250.MsgToggleTradeControllerResponseAmino;
            fromAminoMsg(object: _250.MsgToggleTradeControllerResponseAminoMsg): _250.MsgToggleTradeControllerResponse;
            fromProtoMsg(message: _250.MsgToggleTradeControllerResponseProtoMsg): _250.MsgToggleTradeControllerResponse;
            toProto(message: _250.MsgToggleTradeControllerResponse): Uint8Array;
            toProtoMsg(message: _250.MsgToggleTradeControllerResponse): _250.MsgToggleTradeControllerResponseProtoMsg;
        };
        MsgUpdateHostZoneParams: {
            typeUrl: string;
            encode(message: _250.MsgUpdateHostZoneParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgUpdateHostZoneParams;
            fromPartial(object: Partial<_250.MsgUpdateHostZoneParams>): _250.MsgUpdateHostZoneParams;
            fromAmino(object: _250.MsgUpdateHostZoneParamsAmino): _250.MsgUpdateHostZoneParams;
            toAmino(message: _250.MsgUpdateHostZoneParams): _250.MsgUpdateHostZoneParamsAmino;
            fromAminoMsg(object: _250.MsgUpdateHostZoneParamsAminoMsg): _250.MsgUpdateHostZoneParams;
            toAminoMsg(message: _250.MsgUpdateHostZoneParams): _250.MsgUpdateHostZoneParamsAminoMsg;
            fromProtoMsg(message: _250.MsgUpdateHostZoneParamsProtoMsg): _250.MsgUpdateHostZoneParams;
            toProto(message: _250.MsgUpdateHostZoneParams): Uint8Array;
            toProtoMsg(message: _250.MsgUpdateHostZoneParams): _250.MsgUpdateHostZoneParamsProtoMsg;
        };
        MsgUpdateHostZoneParamsResponse: {
            typeUrl: string;
            encode(_: _250.MsgUpdateHostZoneParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.MsgUpdateHostZoneParamsResponse;
            fromPartial(_: Partial<_250.MsgUpdateHostZoneParamsResponse>): _250.MsgUpdateHostZoneParamsResponse;
            fromAmino(_: _250.MsgUpdateHostZoneParamsResponseAmino): _250.MsgUpdateHostZoneParamsResponse;
            toAmino(_: _250.MsgUpdateHostZoneParamsResponse): _250.MsgUpdateHostZoneParamsResponseAmino;
            fromAminoMsg(object: _250.MsgUpdateHostZoneParamsResponseAminoMsg): _250.MsgUpdateHostZoneParamsResponse;
            fromProtoMsg(message: _250.MsgUpdateHostZoneParamsResponseProtoMsg): _250.MsgUpdateHostZoneParamsResponse;
            toProto(message: _250.MsgUpdateHostZoneParamsResponse): Uint8Array;
            toProtoMsg(message: _250.MsgUpdateHostZoneParamsResponse): _250.MsgUpdateHostZoneParamsResponseProtoMsg;
        };
        TradeConfig: {
            typeUrl: string;
            encode(message: _249.TradeConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.TradeConfig;
            fromPartial(object: Partial<_249.TradeConfig>): _249.TradeConfig;
            fromAmino(object: _249.TradeConfigAmino): _249.TradeConfig;
            toAmino(message: _249.TradeConfig): _249.TradeConfigAmino;
            fromAminoMsg(object: _249.TradeConfigAminoMsg): _249.TradeConfig;
            fromProtoMsg(message: _249.TradeConfigProtoMsg): _249.TradeConfig;
            toProto(message: _249.TradeConfig): Uint8Array;
            toProtoMsg(message: _249.TradeConfig): _249.TradeConfigProtoMsg;
        };
        TradeRoute: {
            typeUrl: string;
            encode(message: _249.TradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.TradeRoute;
            fromPartial(object: Partial<_249.TradeRoute>): _249.TradeRoute;
            fromAmino(object: _249.TradeRouteAmino): _249.TradeRoute;
            toAmino(message: _249.TradeRoute): _249.TradeRouteAmino;
            fromAminoMsg(object: _249.TradeRouteAminoMsg): _249.TradeRoute;
            fromProtoMsg(message: _249.TradeRouteProtoMsg): _249.TradeRoute;
            toProto(message: _249.TradeRoute): Uint8Array;
            toProtoMsg(message: _249.TradeRoute): _249.TradeRouteProtoMsg;
        };
        QueryInterchainAccountFromAddressRequest: {
            typeUrl: string;
            encode(message: _248.QueryInterchainAccountFromAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.QueryInterchainAccountFromAddressRequest;
            fromPartial(object: Partial<_248.QueryInterchainAccountFromAddressRequest>): _248.QueryInterchainAccountFromAddressRequest;
            fromAmino(object: _248.QueryInterchainAccountFromAddressRequestAmino): _248.QueryInterchainAccountFromAddressRequest;
            toAmino(message: _248.QueryInterchainAccountFromAddressRequest): _248.QueryInterchainAccountFromAddressRequestAmino;
            fromAminoMsg(object: _248.QueryInterchainAccountFromAddressRequestAminoMsg): _248.QueryInterchainAccountFromAddressRequest;
            fromProtoMsg(message: _248.QueryInterchainAccountFromAddressRequestProtoMsg): _248.QueryInterchainAccountFromAddressRequest;
            toProto(message: _248.QueryInterchainAccountFromAddressRequest): Uint8Array;
            toProtoMsg(message: _248.QueryInterchainAccountFromAddressRequest): _248.QueryInterchainAccountFromAddressRequestProtoMsg;
        };
        QueryInterchainAccountFromAddressResponse: {
            typeUrl: string;
            encode(message: _248.QueryInterchainAccountFromAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.QueryInterchainAccountFromAddressResponse;
            fromPartial(object: Partial<_248.QueryInterchainAccountFromAddressResponse>): _248.QueryInterchainAccountFromAddressResponse;
            fromAmino(object: _248.QueryInterchainAccountFromAddressResponseAmino): _248.QueryInterchainAccountFromAddressResponse;
            toAmino(message: _248.QueryInterchainAccountFromAddressResponse): _248.QueryInterchainAccountFromAddressResponseAmino;
            fromAminoMsg(object: _248.QueryInterchainAccountFromAddressResponseAminoMsg): _248.QueryInterchainAccountFromAddressResponse;
            fromProtoMsg(message: _248.QueryInterchainAccountFromAddressResponseProtoMsg): _248.QueryInterchainAccountFromAddressResponse;
            toProto(message: _248.QueryInterchainAccountFromAddressResponse): Uint8Array;
            toProtoMsg(message: _248.QueryInterchainAccountFromAddressResponse): _248.QueryInterchainAccountFromAddressResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _248.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.QueryParamsRequest;
            fromPartial(_: Partial<_248.QueryParamsRequest>): _248.QueryParamsRequest;
            fromAmino(_: _248.QueryParamsRequestAmino): _248.QueryParamsRequest;
            toAmino(_: _248.QueryParamsRequest): _248.QueryParamsRequestAmino;
            fromAminoMsg(object: _248.QueryParamsRequestAminoMsg): _248.QueryParamsRequest;
            fromProtoMsg(message: _248.QueryParamsRequestProtoMsg): _248.QueryParamsRequest;
            toProto(message: _248.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _248.QueryParamsRequest): _248.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _248.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.QueryParamsResponse;
            fromPartial(object: Partial<_248.QueryParamsResponse>): _248.QueryParamsResponse;
            fromAmino(object: _248.QueryParamsResponseAmino): _248.QueryParamsResponse;
            toAmino(message: _248.QueryParamsResponse): _248.QueryParamsResponseAmino;
            fromAminoMsg(object: _248.QueryParamsResponseAminoMsg): _248.QueryParamsResponse;
            fromProtoMsg(message: _248.QueryParamsResponseProtoMsg): _248.QueryParamsResponse;
            toProto(message: _248.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _248.QueryParamsResponse): _248.QueryParamsResponseProtoMsg;
        };
        QueryGetValidatorsRequest: {
            typeUrl: string;
            encode(message: _248.QueryGetValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.QueryGetValidatorsRequest;
            fromPartial(object: Partial<_248.QueryGetValidatorsRequest>): _248.QueryGetValidatorsRequest;
            fromAmino(object: _248.QueryGetValidatorsRequestAmino): _248.QueryGetValidatorsRequest;
            toAmino(message: _248.QueryGetValidatorsRequest): _248.QueryGetValidatorsRequestAmino;
            fromAminoMsg(object: _248.QueryGetValidatorsRequestAminoMsg): _248.QueryGetValidatorsRequest;
            fromProtoMsg(message: _248.QueryGetValidatorsRequestProtoMsg): _248.QueryGetValidatorsRequest;
            toProto(message: _248.QueryGetValidatorsRequest): Uint8Array;
            toProtoMsg(message: _248.QueryGetValidatorsRequest): _248.QueryGetValidatorsRequestProtoMsg;
        };
        QueryGetValidatorsResponse: {
            typeUrl: string;
            encode(message: _248.QueryGetValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.QueryGetValidatorsResponse;
            fromPartial(object: Partial<_248.QueryGetValidatorsResponse>): _248.QueryGetValidatorsResponse;
            fromAmino(object: _248.QueryGetValidatorsResponseAmino): _248.QueryGetValidatorsResponse;
            toAmino(message: _248.QueryGetValidatorsResponse): _248.QueryGetValidatorsResponseAmino;
            fromAminoMsg(object: _248.QueryGetValidatorsResponseAminoMsg): _248.QueryGetValidatorsResponse;
            fromProtoMsg(message: _248.QueryGetValidatorsResponseProtoMsg): _248.QueryGetValidatorsResponse;
            toProto(message: _248.QueryGetValidatorsResponse): Uint8Array;
            toProtoMsg(message: _248.QueryGetValidatorsResponse): _248.QueryGetValidatorsResponseProtoMsg;
        };
        QueryGetHostZoneRequest: {
            typeUrl: string;
            encode(message: _248.QueryGetHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.QueryGetHostZoneRequest;
            fromPartial(object: Partial<_248.QueryGetHostZoneRequest>): _248.QueryGetHostZoneRequest;
            fromAmino(object: _248.QueryGetHostZoneRequestAmino): _248.QueryGetHostZoneRequest;
            toAmino(message: _248.QueryGetHostZoneRequest): _248.QueryGetHostZoneRequestAmino;
            fromAminoMsg(object: _248.QueryGetHostZoneRequestAminoMsg): _248.QueryGetHostZoneRequest;
            fromProtoMsg(message: _248.QueryGetHostZoneRequestProtoMsg): _248.QueryGetHostZoneRequest;
            toProto(message: _248.QueryGetHostZoneRequest): Uint8Array;
            toProtoMsg(message: _248.QueryGetHostZoneRequest): _248.QueryGetHostZoneRequestProtoMsg;
        };
        QueryGetHostZoneResponse: {
            typeUrl: string;
            encode(message: _248.QueryGetHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.QueryGetHostZoneResponse;
            fromPartial(object: Partial<_248.QueryGetHostZoneResponse>): _248.QueryGetHostZoneResponse;
            fromAmino(object: _248.QueryGetHostZoneResponseAmino): _248.QueryGetHostZoneResponse;
            toAmino(message: _248.QueryGetHostZoneResponse): _248.QueryGetHostZoneResponseAmino;
            fromAminoMsg(object: _248.QueryGetHostZoneResponseAminoMsg): _248.QueryGetHostZoneResponse;
            fromProtoMsg(message: _248.QueryGetHostZoneResponseProtoMsg): _248.QueryGetHostZoneResponse;
            toProto(message: _248.QueryGetHostZoneResponse): Uint8Array;
            toProtoMsg(message: _248.QueryGetHostZoneResponse): _248.QueryGetHostZoneResponseProtoMsg;
        };
        QueryAllHostZoneRequest: {
            typeUrl: string;
            encode(message: _248.QueryAllHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.QueryAllHostZoneRequest;
            fromPartial(object: Partial<_248.QueryAllHostZoneRequest>): _248.QueryAllHostZoneRequest;
            fromAmino(object: _248.QueryAllHostZoneRequestAmino): _248.QueryAllHostZoneRequest;
            toAmino(message: _248.QueryAllHostZoneRequest): _248.QueryAllHostZoneRequestAmino;
            fromAminoMsg(object: _248.QueryAllHostZoneRequestAminoMsg): _248.QueryAllHostZoneRequest;
            fromProtoMsg(message: _248.QueryAllHostZoneRequestProtoMsg): _248.QueryAllHostZoneRequest;
            toProto(message: _248.QueryAllHostZoneRequest): Uint8Array;
            toProtoMsg(message: _248.QueryAllHostZoneRequest): _248.QueryAllHostZoneRequestProtoMsg;
        };
        QueryAllHostZoneResponse: {
            typeUrl: string;
            encode(message: _248.QueryAllHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.QueryAllHostZoneResponse;
            fromPartial(object: Partial<_248.QueryAllHostZoneResponse>): _248.QueryAllHostZoneResponse;
            fromAmino(object: _248.QueryAllHostZoneResponseAmino): _248.QueryAllHostZoneResponse;
            toAmino(message: _248.QueryAllHostZoneResponse): _248.QueryAllHostZoneResponseAmino;
            fromAminoMsg(object: _248.QueryAllHostZoneResponseAminoMsg): _248.QueryAllHostZoneResponse;
            fromProtoMsg(message: _248.QueryAllHostZoneResponseProtoMsg): _248.QueryAllHostZoneResponse;
            toProto(message: _248.QueryAllHostZoneResponse): Uint8Array;
            toProtoMsg(message: _248.QueryAllHostZoneResponse): _248.QueryAllHostZoneResponseProtoMsg;
        };
        QueryModuleAddressRequest: {
            typeUrl: string;
            encode(message: _248.QueryModuleAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.QueryModuleAddressRequest;
            fromPartial(object: Partial<_248.QueryModuleAddressRequest>): _248.QueryModuleAddressRequest;
            fromAmino(object: _248.QueryModuleAddressRequestAmino): _248.QueryModuleAddressRequest;
            toAmino(message: _248.QueryModuleAddressRequest): _248.QueryModuleAddressRequestAmino;
            fromAminoMsg(object: _248.QueryModuleAddressRequestAminoMsg): _248.QueryModuleAddressRequest;
            fromProtoMsg(message: _248.QueryModuleAddressRequestProtoMsg): _248.QueryModuleAddressRequest;
            toProto(message: _248.QueryModuleAddressRequest): Uint8Array;
            toProtoMsg(message: _248.QueryModuleAddressRequest): _248.QueryModuleAddressRequestProtoMsg;
        };
        QueryModuleAddressResponse: {
            typeUrl: string;
            encode(message: _248.QueryModuleAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.QueryModuleAddressResponse;
            fromPartial(object: Partial<_248.QueryModuleAddressResponse>): _248.QueryModuleAddressResponse;
            fromAmino(object: _248.QueryModuleAddressResponseAmino): _248.QueryModuleAddressResponse;
            toAmino(message: _248.QueryModuleAddressResponse): _248.QueryModuleAddressResponseAmino;
            fromAminoMsg(object: _248.QueryModuleAddressResponseAminoMsg): _248.QueryModuleAddressResponse;
            fromProtoMsg(message: _248.QueryModuleAddressResponseProtoMsg): _248.QueryModuleAddressResponse;
            toProto(message: _248.QueryModuleAddressResponse): Uint8Array;
            toProtoMsg(message: _248.QueryModuleAddressResponse): _248.QueryModuleAddressResponseProtoMsg;
        };
        QueryGetEpochTrackerRequest: {
            typeUrl: string;
            encode(message: _248.QueryGetEpochTrackerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.QueryGetEpochTrackerRequest;
            fromPartial(object: Partial<_248.QueryGetEpochTrackerRequest>): _248.QueryGetEpochTrackerRequest;
            fromAmino(object: _248.QueryGetEpochTrackerRequestAmino): _248.QueryGetEpochTrackerRequest;
            toAmino(message: _248.QueryGetEpochTrackerRequest): _248.QueryGetEpochTrackerRequestAmino;
            fromAminoMsg(object: _248.QueryGetEpochTrackerRequestAminoMsg): _248.QueryGetEpochTrackerRequest;
            fromProtoMsg(message: _248.QueryGetEpochTrackerRequestProtoMsg): _248.QueryGetEpochTrackerRequest;
            toProto(message: _248.QueryGetEpochTrackerRequest): Uint8Array;
            toProtoMsg(message: _248.QueryGetEpochTrackerRequest): _248.QueryGetEpochTrackerRequestProtoMsg;
        };
        QueryGetEpochTrackerResponse: {
            typeUrl: string;
            encode(message: _248.QueryGetEpochTrackerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.QueryGetEpochTrackerResponse;
            fromPartial(object: Partial<_248.QueryGetEpochTrackerResponse>): _248.QueryGetEpochTrackerResponse;
            fromAmino(object: _248.QueryGetEpochTrackerResponseAmino): _248.QueryGetEpochTrackerResponse;
            toAmino(message: _248.QueryGetEpochTrackerResponse): _248.QueryGetEpochTrackerResponseAmino;
            fromAminoMsg(object: _248.QueryGetEpochTrackerResponseAminoMsg): _248.QueryGetEpochTrackerResponse;
            fromProtoMsg(message: _248.QueryGetEpochTrackerResponseProtoMsg): _248.QueryGetEpochTrackerResponse;
            toProto(message: _248.QueryGetEpochTrackerResponse): Uint8Array;
            toProtoMsg(message: _248.QueryGetEpochTrackerResponse): _248.QueryGetEpochTrackerResponseProtoMsg;
        };
        QueryAllEpochTrackerRequest: {
            typeUrl: string;
            encode(_: _248.QueryAllEpochTrackerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.QueryAllEpochTrackerRequest;
            fromPartial(_: Partial<_248.QueryAllEpochTrackerRequest>): _248.QueryAllEpochTrackerRequest;
            fromAmino(_: _248.QueryAllEpochTrackerRequestAmino): _248.QueryAllEpochTrackerRequest;
            toAmino(_: _248.QueryAllEpochTrackerRequest): _248.QueryAllEpochTrackerRequestAmino;
            fromAminoMsg(object: _248.QueryAllEpochTrackerRequestAminoMsg): _248.QueryAllEpochTrackerRequest;
            fromProtoMsg(message: _248.QueryAllEpochTrackerRequestProtoMsg): _248.QueryAllEpochTrackerRequest;
            toProto(message: _248.QueryAllEpochTrackerRequest): Uint8Array;
            toProtoMsg(message: _248.QueryAllEpochTrackerRequest): _248.QueryAllEpochTrackerRequestProtoMsg;
        };
        QueryAllEpochTrackerResponse: {
            typeUrl: string;
            encode(message: _248.QueryAllEpochTrackerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.QueryAllEpochTrackerResponse;
            fromPartial(object: Partial<_248.QueryAllEpochTrackerResponse>): _248.QueryAllEpochTrackerResponse;
            fromAmino(object: _248.QueryAllEpochTrackerResponseAmino): _248.QueryAllEpochTrackerResponse;
            toAmino(message: _248.QueryAllEpochTrackerResponse): _248.QueryAllEpochTrackerResponseAmino;
            fromAminoMsg(object: _248.QueryAllEpochTrackerResponseAminoMsg): _248.QueryAllEpochTrackerResponse;
            fromProtoMsg(message: _248.QueryAllEpochTrackerResponseProtoMsg): _248.QueryAllEpochTrackerResponse;
            toProto(message: _248.QueryAllEpochTrackerResponse): Uint8Array;
            toProtoMsg(message: _248.QueryAllEpochTrackerResponse): _248.QueryAllEpochTrackerResponseProtoMsg;
        };
        QueryGetNextPacketSequenceRequest: {
            typeUrl: string;
            encode(message: _248.QueryGetNextPacketSequenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.QueryGetNextPacketSequenceRequest;
            fromPartial(object: Partial<_248.QueryGetNextPacketSequenceRequest>): _248.QueryGetNextPacketSequenceRequest;
            fromAmino(object: _248.QueryGetNextPacketSequenceRequestAmino): _248.QueryGetNextPacketSequenceRequest;
            toAmino(message: _248.QueryGetNextPacketSequenceRequest): _248.QueryGetNextPacketSequenceRequestAmino;
            fromAminoMsg(object: _248.QueryGetNextPacketSequenceRequestAminoMsg): _248.QueryGetNextPacketSequenceRequest;
            fromProtoMsg(message: _248.QueryGetNextPacketSequenceRequestProtoMsg): _248.QueryGetNextPacketSequenceRequest;
            toProto(message: _248.QueryGetNextPacketSequenceRequest): Uint8Array;
            toProtoMsg(message: _248.QueryGetNextPacketSequenceRequest): _248.QueryGetNextPacketSequenceRequestProtoMsg;
        };
        QueryGetNextPacketSequenceResponse: {
            typeUrl: string;
            encode(message: _248.QueryGetNextPacketSequenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.QueryGetNextPacketSequenceResponse;
            fromPartial(object: Partial<_248.QueryGetNextPacketSequenceResponse>): _248.QueryGetNextPacketSequenceResponse;
            fromAmino(object: _248.QueryGetNextPacketSequenceResponseAmino): _248.QueryGetNextPacketSequenceResponse;
            toAmino(message: _248.QueryGetNextPacketSequenceResponse): _248.QueryGetNextPacketSequenceResponseAmino;
            fromAminoMsg(object: _248.QueryGetNextPacketSequenceResponseAminoMsg): _248.QueryGetNextPacketSequenceResponse;
            fromProtoMsg(message: _248.QueryGetNextPacketSequenceResponseProtoMsg): _248.QueryGetNextPacketSequenceResponse;
            toProto(message: _248.QueryGetNextPacketSequenceResponse): Uint8Array;
            toProtoMsg(message: _248.QueryGetNextPacketSequenceResponse): _248.QueryGetNextPacketSequenceResponseProtoMsg;
        };
        QueryAddressUnbondings: {
            typeUrl: string;
            encode(message: _248.QueryAddressUnbondings, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.QueryAddressUnbondings;
            fromPartial(object: Partial<_248.QueryAddressUnbondings>): _248.QueryAddressUnbondings;
            fromAmino(object: _248.QueryAddressUnbondingsAmino): _248.QueryAddressUnbondings;
            toAmino(message: _248.QueryAddressUnbondings): _248.QueryAddressUnbondingsAmino;
            fromAminoMsg(object: _248.QueryAddressUnbondingsAminoMsg): _248.QueryAddressUnbondings;
            fromProtoMsg(message: _248.QueryAddressUnbondingsProtoMsg): _248.QueryAddressUnbondings;
            toProto(message: _248.QueryAddressUnbondings): Uint8Array;
            toProtoMsg(message: _248.QueryAddressUnbondings): _248.QueryAddressUnbondingsProtoMsg;
        };
        QueryAddressUnbondingsResponse: {
            typeUrl: string;
            encode(message: _248.QueryAddressUnbondingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.QueryAddressUnbondingsResponse;
            fromPartial(object: Partial<_248.QueryAddressUnbondingsResponse>): _248.QueryAddressUnbondingsResponse;
            fromAmino(object: _248.QueryAddressUnbondingsResponseAmino): _248.QueryAddressUnbondingsResponse;
            toAmino(message: _248.QueryAddressUnbondingsResponse): _248.QueryAddressUnbondingsResponseAmino;
            fromAminoMsg(object: _248.QueryAddressUnbondingsResponseAminoMsg): _248.QueryAddressUnbondingsResponse;
            fromProtoMsg(message: _248.QueryAddressUnbondingsResponseProtoMsg): _248.QueryAddressUnbondingsResponse;
            toProto(message: _248.QueryAddressUnbondingsResponse): Uint8Array;
            toProtoMsg(message: _248.QueryAddressUnbondingsResponse): _248.QueryAddressUnbondingsResponseProtoMsg;
        };
        QueryAllTradeRoutes: {
            typeUrl: string;
            encode(_: _248.QueryAllTradeRoutes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.QueryAllTradeRoutes;
            fromPartial(_: Partial<_248.QueryAllTradeRoutes>): _248.QueryAllTradeRoutes;
            fromAmino(_: _248.QueryAllTradeRoutesAmino): _248.QueryAllTradeRoutes;
            toAmino(_: _248.QueryAllTradeRoutes): _248.QueryAllTradeRoutesAmino;
            fromAminoMsg(object: _248.QueryAllTradeRoutesAminoMsg): _248.QueryAllTradeRoutes;
            fromProtoMsg(message: _248.QueryAllTradeRoutesProtoMsg): _248.QueryAllTradeRoutes;
            toProto(message: _248.QueryAllTradeRoutes): Uint8Array;
            toProtoMsg(message: _248.QueryAllTradeRoutes): _248.QueryAllTradeRoutesProtoMsg;
        };
        QueryAllTradeRoutesResponse: {
            typeUrl: string;
            encode(message: _248.QueryAllTradeRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.QueryAllTradeRoutesResponse;
            fromPartial(object: Partial<_248.QueryAllTradeRoutesResponse>): _248.QueryAllTradeRoutesResponse;
            fromAmino(object: _248.QueryAllTradeRoutesResponseAmino): _248.QueryAllTradeRoutesResponse;
            toAmino(message: _248.QueryAllTradeRoutesResponse): _248.QueryAllTradeRoutesResponseAmino;
            fromAminoMsg(object: _248.QueryAllTradeRoutesResponseAminoMsg): _248.QueryAllTradeRoutesResponse;
            fromProtoMsg(message: _248.QueryAllTradeRoutesResponseProtoMsg): _248.QueryAllTradeRoutesResponse;
            toProto(message: _248.QueryAllTradeRoutesResponse): Uint8Array;
            toProtoMsg(message: _248.QueryAllTradeRoutesResponse): _248.QueryAllTradeRoutesResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _247.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.Params;
            fromPartial(object: Partial<_247.Params>): _247.Params;
            fromAmino(object: _247.ParamsAmino): _247.Params;
            toAmino(message: _247.Params): _247.ParamsAmino;
            fromAminoMsg(object: _247.ParamsAminoMsg): _247.Params;
            fromProtoMsg(message: _247.ParamsProtoMsg): _247.Params;
            toProto(message: _247.Params): Uint8Array;
            toProtoMsg(message: _247.Params): _247.ParamsProtoMsg;
        };
        StakeibcPacketData: {
            typeUrl: string;
            encode(message: _246.StakeibcPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _246.StakeibcPacketData;
            fromPartial(object: Partial<_246.StakeibcPacketData>): _246.StakeibcPacketData;
            fromAmino(object: _246.StakeibcPacketDataAmino): _246.StakeibcPacketData;
            toAmino(message: _246.StakeibcPacketData): _246.StakeibcPacketDataAmino;
            fromAminoMsg(object: _246.StakeibcPacketDataAminoMsg): _246.StakeibcPacketData;
            fromProtoMsg(message: _246.StakeibcPacketDataProtoMsg): _246.StakeibcPacketData;
            toProto(message: _246.StakeibcPacketData): Uint8Array;
            toProtoMsg(message: _246.StakeibcPacketData): _246.StakeibcPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _246.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _246.NoData;
            fromPartial(_: Partial<_246.NoData>): _246.NoData;
            fromAmino(_: _246.NoDataAmino): _246.NoData;
            toAmino(_: _246.NoData): _246.NoDataAmino;
            fromAminoMsg(object: _246.NoDataAminoMsg): _246.NoData;
            fromProtoMsg(message: _246.NoDataProtoMsg): _246.NoData;
            toProto(message: _246.NoData): Uint8Array;
            toProtoMsg(message: _246.NoData): _246.NoDataProtoMsg;
        };
        iCAAccountTypeFromJSON(object: any): _245.ICAAccountType;
        iCAAccountTypeToJSON(object: _245.ICAAccountType): string;
        ICAAccountType: typeof _245.ICAAccountType;
        ICAAccountTypeSDKType: typeof _245.ICAAccountType;
        ICAAccountTypeAmino: typeof _245.ICAAccountType;
        ICAAccount: {
            typeUrl: string;
            encode(message: _245.ICAAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _245.ICAAccount;
            fromPartial(object: Partial<_245.ICAAccount>): _245.ICAAccount;
            fromAmino(object: _245.ICAAccountAmino): _245.ICAAccount;
            toAmino(message: _245.ICAAccount): _245.ICAAccountAmino;
            fromAminoMsg(object: _245.ICAAccountAminoMsg): _245.ICAAccount;
            fromProtoMsg(message: _245.ICAAccountProtoMsg): _245.ICAAccount;
            toProto(message: _245.ICAAccount): Uint8Array;
            toProtoMsg(message: _245.ICAAccount): _245.ICAAccountProtoMsg;
        };
        CommunityPoolRebate: {
            typeUrl: string;
            encode(message: _244.CommunityPoolRebate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.CommunityPoolRebate;
            fromPartial(object: Partial<_244.CommunityPoolRebate>): _244.CommunityPoolRebate;
            fromAmino(object: _244.CommunityPoolRebateAmino): _244.CommunityPoolRebate;
            toAmino(message: _244.CommunityPoolRebate): _244.CommunityPoolRebateAmino;
            fromAminoMsg(object: _244.CommunityPoolRebateAminoMsg): _244.CommunityPoolRebate;
            fromProtoMsg(message: _244.CommunityPoolRebateProtoMsg): _244.CommunityPoolRebate;
            toProto(message: _244.CommunityPoolRebate): Uint8Array;
            toProtoMsg(message: _244.CommunityPoolRebate): _244.CommunityPoolRebateProtoMsg;
        };
        HostZone: {
            typeUrl: string;
            encode(message: _244.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.HostZone;
            fromPartial(object: Partial<_244.HostZone>): _244.HostZone;
            fromAmino(object: _244.HostZoneAmino): _244.HostZone;
            toAmino(message: _244.HostZone): _244.HostZoneAmino;
            fromAminoMsg(object: _244.HostZoneAminoMsg): _244.HostZone;
            fromProtoMsg(message: _244.HostZoneProtoMsg): _244.HostZone;
            toProto(message: _244.HostZone): Uint8Array;
            toProtoMsg(message: _244.HostZone): _244.HostZoneProtoMsg;
        };
        AddValidatorsProposal: {
            typeUrl: string;
            encode(message: _243.AddValidatorsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.AddValidatorsProposal;
            fromPartial(object: Partial<_243.AddValidatorsProposal>): _243.AddValidatorsProposal;
            fromAmino(object: _243.AddValidatorsProposalAmino): _243.AddValidatorsProposal;
            toAmino(message: _243.AddValidatorsProposal): _243.AddValidatorsProposalAmino;
            fromAminoMsg(object: _243.AddValidatorsProposalAminoMsg): _243.AddValidatorsProposal;
            toAminoMsg(message: _243.AddValidatorsProposal): _243.AddValidatorsProposalAminoMsg;
            fromProtoMsg(message: _243.AddValidatorsProposalProtoMsg): _243.AddValidatorsProposal;
            toProto(message: _243.AddValidatorsProposal): Uint8Array;
            toProtoMsg(message: _243.AddValidatorsProposal): _243.AddValidatorsProposalProtoMsg;
        };
        ToggleLSMProposal: {
            typeUrl: string;
            encode(message: _243.ToggleLSMProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.ToggleLSMProposal;
            fromPartial(object: Partial<_243.ToggleLSMProposal>): _243.ToggleLSMProposal;
            fromAmino(object: _243.ToggleLSMProposalAmino): _243.ToggleLSMProposal;
            toAmino(message: _243.ToggleLSMProposal): _243.ToggleLSMProposalAmino;
            fromAminoMsg(object: _243.ToggleLSMProposalAminoMsg): _243.ToggleLSMProposal;
            toAminoMsg(message: _243.ToggleLSMProposal): _243.ToggleLSMProposalAminoMsg;
            fromProtoMsg(message: _243.ToggleLSMProposalProtoMsg): _243.ToggleLSMProposal;
            toProto(message: _243.ToggleLSMProposal): Uint8Array;
            toProtoMsg(message: _243.ToggleLSMProposal): _243.ToggleLSMProposalProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _242.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.GenesisState;
            fromPartial(object: Partial<_242.GenesisState>): _242.GenesisState;
            fromAmino(object: _242.GenesisStateAmino): _242.GenesisState;
            toAmino(message: _242.GenesisState): _242.GenesisStateAmino;
            fromAminoMsg(object: _242.GenesisStateAminoMsg): _242.GenesisState;
            fromProtoMsg(message: _242.GenesisStateProtoMsg): _242.GenesisState;
            toProto(message: _242.GenesisState): Uint8Array;
            toProtoMsg(message: _242.GenesisState): _242.GenesisStateProtoMsg;
        };
        EpochTracker: {
            typeUrl: string;
            encode(message: _241.EpochTracker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.EpochTracker;
            fromPartial(object: Partial<_241.EpochTracker>): _241.EpochTracker;
            fromAmino(object: _241.EpochTrackerAmino): _241.EpochTracker;
            toAmino(message: _241.EpochTracker): _241.EpochTrackerAmino;
            fromAminoMsg(object: _241.EpochTrackerAminoMsg): _241.EpochTracker;
            fromProtoMsg(message: _241.EpochTrackerProtoMsg): _241.EpochTracker;
            toProto(message: _241.EpochTracker): Uint8Array;
            toProtoMsg(message: _241.EpochTracker): _241.EpochTrackerProtoMsg;
        };
        SplitDelegation: {
            typeUrl: string;
            encode(message: _240.SplitDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.SplitDelegation;
            fromPartial(object: Partial<_240.SplitDelegation>): _240.SplitDelegation;
            fromAmino(object: _240.SplitDelegationAmino): _240.SplitDelegation;
            toAmino(message: _240.SplitDelegation): _240.SplitDelegationAmino;
            fromAminoMsg(object: _240.SplitDelegationAminoMsg): _240.SplitDelegation;
            fromProtoMsg(message: _240.SplitDelegationProtoMsg): _240.SplitDelegation;
            toProto(message: _240.SplitDelegation): Uint8Array;
            toProtoMsg(message: _240.SplitDelegation): _240.SplitDelegationProtoMsg;
        };
        SplitUndelegation: {
            typeUrl: string;
            encode(message: _240.SplitUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.SplitUndelegation;
            fromPartial(object: Partial<_240.SplitUndelegation>): _240.SplitUndelegation;
            fromAmino(object: _240.SplitUndelegationAmino): _240.SplitUndelegation;
            toAmino(message: _240.SplitUndelegation): _240.SplitUndelegationAmino;
            fromAminoMsg(object: _240.SplitUndelegationAminoMsg): _240.SplitUndelegation;
            fromProtoMsg(message: _240.SplitUndelegationProtoMsg): _240.SplitUndelegation;
            toProto(message: _240.SplitUndelegation): Uint8Array;
            toProtoMsg(message: _240.SplitUndelegation): _240.SplitUndelegationProtoMsg;
        };
        DelegateCallback: {
            typeUrl: string;
            encode(message: _240.DelegateCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.DelegateCallback;
            fromPartial(object: Partial<_240.DelegateCallback>): _240.DelegateCallback;
            fromAmino(object: _240.DelegateCallbackAmino): _240.DelegateCallback;
            toAmino(message: _240.DelegateCallback): _240.DelegateCallbackAmino;
            fromAminoMsg(object: _240.DelegateCallbackAminoMsg): _240.DelegateCallback;
            fromProtoMsg(message: _240.DelegateCallbackProtoMsg): _240.DelegateCallback;
            toProto(message: _240.DelegateCallback): Uint8Array;
            toProtoMsg(message: _240.DelegateCallback): _240.DelegateCallbackProtoMsg;
        };
        ClaimCallback: {
            typeUrl: string;
            encode(message: _240.ClaimCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.ClaimCallback;
            fromPartial(object: Partial<_240.ClaimCallback>): _240.ClaimCallback;
            fromAmino(object: _240.ClaimCallbackAmino): _240.ClaimCallback;
            toAmino(message: _240.ClaimCallback): _240.ClaimCallbackAmino;
            fromAminoMsg(object: _240.ClaimCallbackAminoMsg): _240.ClaimCallback;
            fromProtoMsg(message: _240.ClaimCallbackProtoMsg): _240.ClaimCallback;
            toProto(message: _240.ClaimCallback): Uint8Array;
            toProtoMsg(message: _240.ClaimCallback): _240.ClaimCallbackProtoMsg;
        };
        ReinvestCallback: {
            typeUrl: string;
            encode(message: _240.ReinvestCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.ReinvestCallback;
            fromPartial(object: Partial<_240.ReinvestCallback>): _240.ReinvestCallback;
            fromAmino(object: _240.ReinvestCallbackAmino): _240.ReinvestCallback;
            toAmino(message: _240.ReinvestCallback): _240.ReinvestCallbackAmino;
            fromAminoMsg(object: _240.ReinvestCallbackAminoMsg): _240.ReinvestCallback;
            fromProtoMsg(message: _240.ReinvestCallbackProtoMsg): _240.ReinvestCallback;
            toProto(message: _240.ReinvestCallback): Uint8Array;
            toProtoMsg(message: _240.ReinvestCallback): _240.ReinvestCallbackProtoMsg;
        };
        UndelegateCallback: {
            typeUrl: string;
            encode(message: _240.UndelegateCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.UndelegateCallback;
            fromPartial(object: Partial<_240.UndelegateCallback>): _240.UndelegateCallback;
            fromAmino(object: _240.UndelegateCallbackAmino): _240.UndelegateCallback;
            toAmino(message: _240.UndelegateCallback): _240.UndelegateCallbackAmino;
            fromAminoMsg(object: _240.UndelegateCallbackAminoMsg): _240.UndelegateCallback;
            fromProtoMsg(message: _240.UndelegateCallbackProtoMsg): _240.UndelegateCallback;
            toProto(message: _240.UndelegateCallback): Uint8Array;
            toProtoMsg(message: _240.UndelegateCallback): _240.UndelegateCallbackProtoMsg;
        };
        RedemptionCallback: {
            typeUrl: string;
            encode(message: _240.RedemptionCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.RedemptionCallback;
            fromPartial(object: Partial<_240.RedemptionCallback>): _240.RedemptionCallback;
            fromAmino(object: _240.RedemptionCallbackAmino): _240.RedemptionCallback;
            toAmino(message: _240.RedemptionCallback): _240.RedemptionCallbackAmino;
            fromAminoMsg(object: _240.RedemptionCallbackAminoMsg): _240.RedemptionCallback;
            fromProtoMsg(message: _240.RedemptionCallbackProtoMsg): _240.RedemptionCallback;
            toProto(message: _240.RedemptionCallback): Uint8Array;
            toProtoMsg(message: _240.RedemptionCallback): _240.RedemptionCallbackProtoMsg;
        };
        Rebalancing: {
            typeUrl: string;
            encode(message: _240.Rebalancing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.Rebalancing;
            fromPartial(object: Partial<_240.Rebalancing>): _240.Rebalancing;
            fromAmino(object: _240.RebalancingAmino): _240.Rebalancing;
            toAmino(message: _240.Rebalancing): _240.RebalancingAmino;
            fromAminoMsg(object: _240.RebalancingAminoMsg): _240.Rebalancing;
            fromProtoMsg(message: _240.RebalancingProtoMsg): _240.Rebalancing;
            toProto(message: _240.Rebalancing): Uint8Array;
            toProtoMsg(message: _240.Rebalancing): _240.RebalancingProtoMsg;
        };
        RebalanceCallback: {
            typeUrl: string;
            encode(message: _240.RebalanceCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.RebalanceCallback;
            fromPartial(object: Partial<_240.RebalanceCallback>): _240.RebalanceCallback;
            fromAmino(object: _240.RebalanceCallbackAmino): _240.RebalanceCallback;
            toAmino(message: _240.RebalanceCallback): _240.RebalanceCallbackAmino;
            fromAminoMsg(object: _240.RebalanceCallbackAminoMsg): _240.RebalanceCallback;
            fromProtoMsg(message: _240.RebalanceCallbackProtoMsg): _240.RebalanceCallback;
            toProto(message: _240.RebalanceCallback): Uint8Array;
            toProtoMsg(message: _240.RebalanceCallback): _240.RebalanceCallbackProtoMsg;
        };
        DetokenizeSharesCallback: {
            typeUrl: string;
            encode(message: _240.DetokenizeSharesCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.DetokenizeSharesCallback;
            fromPartial(object: Partial<_240.DetokenizeSharesCallback>): _240.DetokenizeSharesCallback;
            fromAmino(object: _240.DetokenizeSharesCallbackAmino): _240.DetokenizeSharesCallback;
            toAmino(message: _240.DetokenizeSharesCallback): _240.DetokenizeSharesCallbackAmino;
            fromAminoMsg(object: _240.DetokenizeSharesCallbackAminoMsg): _240.DetokenizeSharesCallback;
            fromProtoMsg(message: _240.DetokenizeSharesCallbackProtoMsg): _240.DetokenizeSharesCallback;
            toProto(message: _240.DetokenizeSharesCallback): Uint8Array;
            toProtoMsg(message: _240.DetokenizeSharesCallback): _240.DetokenizeSharesCallbackProtoMsg;
        };
        LSMLiquidStake: {
            typeUrl: string;
            encode(message: _240.LSMLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.LSMLiquidStake;
            fromPartial(object: Partial<_240.LSMLiquidStake>): _240.LSMLiquidStake;
            fromAmino(object: _240.LSMLiquidStakeAmino): _240.LSMLiquidStake;
            toAmino(message: _240.LSMLiquidStake): _240.LSMLiquidStakeAmino;
            fromAminoMsg(object: _240.LSMLiquidStakeAminoMsg): _240.LSMLiquidStake;
            fromProtoMsg(message: _240.LSMLiquidStakeProtoMsg): _240.LSMLiquidStake;
            toProto(message: _240.LSMLiquidStake): Uint8Array;
            toProtoMsg(message: _240.LSMLiquidStake): _240.LSMLiquidStakeProtoMsg;
        };
        ValidatorSharesToTokensQueryCallback: {
            typeUrl: string;
            encode(message: _240.ValidatorSharesToTokensQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.ValidatorSharesToTokensQueryCallback;
            fromPartial(object: Partial<_240.ValidatorSharesToTokensQueryCallback>): _240.ValidatorSharesToTokensQueryCallback;
            fromAmino(object: _240.ValidatorSharesToTokensQueryCallbackAmino): _240.ValidatorSharesToTokensQueryCallback;
            toAmino(message: _240.ValidatorSharesToTokensQueryCallback): _240.ValidatorSharesToTokensQueryCallbackAmino;
            fromAminoMsg(object: _240.ValidatorSharesToTokensQueryCallbackAminoMsg): _240.ValidatorSharesToTokensQueryCallback;
            fromProtoMsg(message: _240.ValidatorSharesToTokensQueryCallbackProtoMsg): _240.ValidatorSharesToTokensQueryCallback;
            toProto(message: _240.ValidatorSharesToTokensQueryCallback): Uint8Array;
            toProtoMsg(message: _240.ValidatorSharesToTokensQueryCallback): _240.ValidatorSharesToTokensQueryCallbackProtoMsg;
        };
        DelegatorSharesQueryCallback: {
            typeUrl: string;
            encode(message: _240.DelegatorSharesQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.DelegatorSharesQueryCallback;
            fromPartial(object: Partial<_240.DelegatorSharesQueryCallback>): _240.DelegatorSharesQueryCallback;
            fromAmino(object: _240.DelegatorSharesQueryCallbackAmino): _240.DelegatorSharesQueryCallback;
            toAmino(message: _240.DelegatorSharesQueryCallback): _240.DelegatorSharesQueryCallbackAmino;
            fromAminoMsg(object: _240.DelegatorSharesQueryCallbackAminoMsg): _240.DelegatorSharesQueryCallback;
            fromProtoMsg(message: _240.DelegatorSharesQueryCallbackProtoMsg): _240.DelegatorSharesQueryCallback;
            toProto(message: _240.DelegatorSharesQueryCallback): Uint8Array;
            toProtoMsg(message: _240.DelegatorSharesQueryCallback): _240.DelegatorSharesQueryCallbackProtoMsg;
        };
        CommunityPoolBalanceQueryCallback: {
            typeUrl: string;
            encode(message: _240.CommunityPoolBalanceQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.CommunityPoolBalanceQueryCallback;
            fromPartial(object: Partial<_240.CommunityPoolBalanceQueryCallback>): _240.CommunityPoolBalanceQueryCallback;
            fromAmino(object: _240.CommunityPoolBalanceQueryCallbackAmino): _240.CommunityPoolBalanceQueryCallback;
            toAmino(message: _240.CommunityPoolBalanceQueryCallback): _240.CommunityPoolBalanceQueryCallbackAmino;
            fromAminoMsg(object: _240.CommunityPoolBalanceQueryCallbackAminoMsg): _240.CommunityPoolBalanceQueryCallback;
            fromProtoMsg(message: _240.CommunityPoolBalanceQueryCallbackProtoMsg): _240.CommunityPoolBalanceQueryCallback;
            toProto(message: _240.CommunityPoolBalanceQueryCallback): Uint8Array;
            toProtoMsg(message: _240.CommunityPoolBalanceQueryCallback): _240.CommunityPoolBalanceQueryCallbackProtoMsg;
        };
        TradeRouteCallback: {
            typeUrl: string;
            encode(message: _240.TradeRouteCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.TradeRouteCallback;
            fromPartial(object: Partial<_240.TradeRouteCallback>): _240.TradeRouteCallback;
            fromAmino(object: _240.TradeRouteCallbackAmino): _240.TradeRouteCallback;
            toAmino(message: _240.TradeRouteCallback): _240.TradeRouteCallbackAmino;
            fromAminoMsg(object: _240.TradeRouteCallbackAminoMsg): _240.TradeRouteCallback;
            fromProtoMsg(message: _240.TradeRouteCallbackProtoMsg): _240.TradeRouteCallback;
            toProto(message: _240.TradeRouteCallback): Uint8Array;
            toProtoMsg(message: _240.TradeRouteCallback): _240.TradeRouteCallbackProtoMsg;
        };
        AddressUnbonding: {
            typeUrl: string;
            encode(message: _239.AddressUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _239.AddressUnbonding;
            fromPartial(object: Partial<_239.AddressUnbonding>): _239.AddressUnbonding;
            fromAmino(object: _239.AddressUnbondingAmino): _239.AddressUnbonding;
            toAmino(message: _239.AddressUnbonding): _239.AddressUnbondingAmino;
            fromAminoMsg(object: _239.AddressUnbondingAminoMsg): _239.AddressUnbonding;
            fromProtoMsg(message: _239.AddressUnbondingProtoMsg): _239.AddressUnbonding;
            toProto(message: _239.AddressUnbonding): Uint8Array;
            toProtoMsg(message: _239.AddressUnbonding): _239.AddressUnbondingProtoMsg;
        };
    };
    const staketia: {
        MsgClientImpl: typeof _420.MsgClientImpl;
        QueryClientImpl: typeof _410.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            hostZone(request?: _253.QueryHostZoneRequest): Promise<_253.QueryHostZoneResponse>;
            delegationRecords(request: _253.QueryDelegationRecordsRequest): Promise<_253.QueryDelegationRecordsResponse>;
            unbondingRecords(request: _253.QueryUnbondingRecordsRequest): Promise<_253.QueryUnbondingRecordsResponse>;
            redemptionRecord(request: _253.QueryRedemptionRecordRequest): Promise<_253.QueryRedemptionRecordResponse>;
            redemptionRecords(request: _253.QueryRedemptionRecordsRequest): Promise<_253.QueryRedemptionRecordsResponse>;
            slashRecords(request?: _253.QuerySlashRecordsRequest): Promise<_253.QuerySlashRecordsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _255.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _255.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmDelegation(value: _255.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUndelegation(value: _255.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUnbondedTokenSweep(value: _255.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                adjustDelegatedBalance(value: _255.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _255.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _255.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                refreshRedemptionRate(value: _255.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteDelegationRecord(value: _255.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteUnbondingRecord(value: _255.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteRedemptionRecord(value: _255.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOperatorAddress(value: _255.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _255.MsgLiquidStake): {
                    typeUrl: string;
                    value: _255.MsgLiquidStake;
                };
                redeemStake(value: _255.MsgRedeemStake): {
                    typeUrl: string;
                    value: _255.MsgRedeemStake;
                };
                confirmDelegation(value: _255.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _255.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _255.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _255.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _255.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _255.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _255.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _255.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _255.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _255.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _255.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _255.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _255.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _255.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _255.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _255.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _255.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _255.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _255.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _255.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _255.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _255.MsgSetOperatorAddress;
                };
            };
            fromPartial: {
                liquidStake(value: _255.MsgLiquidStake): {
                    typeUrl: string;
                    value: _255.MsgLiquidStake;
                };
                redeemStake(value: _255.MsgRedeemStake): {
                    typeUrl: string;
                    value: _255.MsgRedeemStake;
                };
                confirmDelegation(value: _255.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _255.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _255.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _255.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _255.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _255.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _255.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _255.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _255.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _255.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _255.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _255.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _255.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _255.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _255.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _255.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _255.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _255.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _255.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _255.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _255.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _255.MsgSetOperatorAddress;
                };
            };
        };
        AminoConverter: {
            "/stride.staketia.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _255.MsgLiquidStake) => _255.MsgLiquidStakeAmino;
                fromAmino: (object: _255.MsgLiquidStakeAmino) => _255.MsgLiquidStake;
            };
            "/stride.staketia.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _255.MsgRedeemStake) => _255.MsgRedeemStakeAmino;
                fromAmino: (object: _255.MsgRedeemStakeAmino) => _255.MsgRedeemStake;
            };
            "/stride.staketia.MsgConfirmDelegation": {
                aminoType: string;
                toAmino: (message: _255.MsgConfirmDelegation) => _255.MsgConfirmDelegationAmino;
                fromAmino: (object: _255.MsgConfirmDelegationAmino) => _255.MsgConfirmDelegation;
            };
            "/stride.staketia.MsgConfirmUndelegation": {
                aminoType: string;
                toAmino: (message: _255.MsgConfirmUndelegation) => _255.MsgConfirmUndelegationAmino;
                fromAmino: (object: _255.MsgConfirmUndelegationAmino) => _255.MsgConfirmUndelegation;
            };
            "/stride.staketia.MsgConfirmUnbondedTokenSweep": {
                aminoType: string;
                toAmino: (message: _255.MsgConfirmUnbondedTokenSweep) => _255.MsgConfirmUnbondedTokenSweepAmino;
                fromAmino: (object: _255.MsgConfirmUnbondedTokenSweepAmino) => _255.MsgConfirmUnbondedTokenSweep;
            };
            "/stride.staketia.MsgAdjustDelegatedBalance": {
                aminoType: string;
                toAmino: (message: _255.MsgAdjustDelegatedBalance) => _255.MsgAdjustDelegatedBalanceAmino;
                fromAmino: (object: _255.MsgAdjustDelegatedBalanceAmino) => _255.MsgAdjustDelegatedBalance;
            };
            "/stride.staketia.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _255.MsgUpdateInnerRedemptionRateBounds) => _255.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _255.MsgUpdateInnerRedemptionRateBoundsAmino) => _255.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.staketia.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _255.MsgResumeHostZone) => _255.MsgResumeHostZoneAmino;
                fromAmino: (object: _255.MsgResumeHostZoneAmino) => _255.MsgResumeHostZone;
            };
            "/stride.staketia.MsgRefreshRedemptionRate": {
                aminoType: string;
                toAmino: (message: _255.MsgRefreshRedemptionRate) => _255.MsgRefreshRedemptionRateAmino;
                fromAmino: (object: _255.MsgRefreshRedemptionRateAmino) => _255.MsgRefreshRedemptionRate;
            };
            "/stride.staketia.MsgOverwriteDelegationRecord": {
                aminoType: string;
                toAmino: (message: _255.MsgOverwriteDelegationRecord) => _255.MsgOverwriteDelegationRecordAmino;
                fromAmino: (object: _255.MsgOverwriteDelegationRecordAmino) => _255.MsgOverwriteDelegationRecord;
            };
            "/stride.staketia.MsgOverwriteUnbondingRecord": {
                aminoType: string;
                toAmino: (message: _255.MsgOverwriteUnbondingRecord) => _255.MsgOverwriteUnbondingRecordAmino;
                fromAmino: (object: _255.MsgOverwriteUnbondingRecordAmino) => _255.MsgOverwriteUnbondingRecord;
            };
            "/stride.staketia.MsgOverwriteRedemptionRecord": {
                aminoType: string;
                toAmino: (message: _255.MsgOverwriteRedemptionRecord) => _255.MsgOverwriteRedemptionRecordAmino;
                fromAmino: (object: _255.MsgOverwriteRedemptionRecordAmino) => _255.MsgOverwriteRedemptionRecord;
            };
            "/stride.staketia.MsgSetOperatorAddress": {
                aminoType: string;
                toAmino: (message: _255.MsgSetOperatorAddress) => _255.MsgSetOperatorAddressAmino;
                fromAmino: (object: _255.MsgSetOperatorAddressAmino) => _255.MsgSetOperatorAddress;
            };
        };
        overwritableRecordTypeFromJSON(object: any): _255.OverwritableRecordType;
        overwritableRecordTypeToJSON(object: _255.OverwritableRecordType): string;
        OverwritableRecordType: typeof _255.OverwritableRecordType;
        OverwritableRecordTypeSDKType: typeof _255.OverwritableRecordType;
        OverwritableRecordTypeAmino: typeof _255.OverwritableRecordType;
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _255.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.MsgLiquidStake;
            fromPartial(object: Partial<_255.MsgLiquidStake>): _255.MsgLiquidStake;
            fromAmino(object: _255.MsgLiquidStakeAmino): _255.MsgLiquidStake;
            toAmino(message: _255.MsgLiquidStake): _255.MsgLiquidStakeAmino;
            fromAminoMsg(object: _255.MsgLiquidStakeAminoMsg): _255.MsgLiquidStake;
            toAminoMsg(message: _255.MsgLiquidStake): _255.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _255.MsgLiquidStakeProtoMsg): _255.MsgLiquidStake;
            toProto(message: _255.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _255.MsgLiquidStake): _255.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _255.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_255.MsgLiquidStakeResponse>): _255.MsgLiquidStakeResponse;
            fromAmino(object: _255.MsgLiquidStakeResponseAmino): _255.MsgLiquidStakeResponse;
            toAmino(message: _255.MsgLiquidStakeResponse): _255.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _255.MsgLiquidStakeResponseAminoMsg): _255.MsgLiquidStakeResponse;
            fromProtoMsg(message: _255.MsgLiquidStakeResponseProtoMsg): _255.MsgLiquidStakeResponse;
            toProto(message: _255.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _255.MsgLiquidStakeResponse): _255.MsgLiquidStakeResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _255.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.MsgRedeemStake;
            fromPartial(object: Partial<_255.MsgRedeemStake>): _255.MsgRedeemStake;
            fromAmino(object: _255.MsgRedeemStakeAmino): _255.MsgRedeemStake;
            toAmino(message: _255.MsgRedeemStake): _255.MsgRedeemStakeAmino;
            fromAminoMsg(object: _255.MsgRedeemStakeAminoMsg): _255.MsgRedeemStake;
            toAminoMsg(message: _255.MsgRedeemStake): _255.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _255.MsgRedeemStakeProtoMsg): _255.MsgRedeemStake;
            toProto(message: _255.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _255.MsgRedeemStake): _255.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(message: _255.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.MsgRedeemStakeResponse;
            fromPartial(object: Partial<_255.MsgRedeemStakeResponse>): _255.MsgRedeemStakeResponse;
            fromAmino(object: _255.MsgRedeemStakeResponseAmino): _255.MsgRedeemStakeResponse;
            toAmino(message: _255.MsgRedeemStakeResponse): _255.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _255.MsgRedeemStakeResponseAminoMsg): _255.MsgRedeemStakeResponse;
            fromProtoMsg(message: _255.MsgRedeemStakeResponseProtoMsg): _255.MsgRedeemStakeResponse;
            toProto(message: _255.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _255.MsgRedeemStakeResponse): _255.MsgRedeemStakeResponseProtoMsg;
        };
        MsgConfirmDelegation: {
            typeUrl: string;
            encode(message: _255.MsgConfirmDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.MsgConfirmDelegation;
            fromPartial(object: Partial<_255.MsgConfirmDelegation>): _255.MsgConfirmDelegation;
            fromAmino(object: _255.MsgConfirmDelegationAmino): _255.MsgConfirmDelegation;
            toAmino(message: _255.MsgConfirmDelegation): _255.MsgConfirmDelegationAmino;
            fromAminoMsg(object: _255.MsgConfirmDelegationAminoMsg): _255.MsgConfirmDelegation;
            toAminoMsg(message: _255.MsgConfirmDelegation): _255.MsgConfirmDelegationAminoMsg;
            fromProtoMsg(message: _255.MsgConfirmDelegationProtoMsg): _255.MsgConfirmDelegation;
            toProto(message: _255.MsgConfirmDelegation): Uint8Array;
            toProtoMsg(message: _255.MsgConfirmDelegation): _255.MsgConfirmDelegationProtoMsg;
        };
        MsgConfirmDelegationResponse: {
            typeUrl: string;
            encode(_: _255.MsgConfirmDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.MsgConfirmDelegationResponse;
            fromPartial(_: Partial<_255.MsgConfirmDelegationResponse>): _255.MsgConfirmDelegationResponse;
            fromAmino(_: _255.MsgConfirmDelegationResponseAmino): _255.MsgConfirmDelegationResponse;
            toAmino(_: _255.MsgConfirmDelegationResponse): _255.MsgConfirmDelegationResponseAmino;
            fromAminoMsg(object: _255.MsgConfirmDelegationResponseAminoMsg): _255.MsgConfirmDelegationResponse;
            fromProtoMsg(message: _255.MsgConfirmDelegationResponseProtoMsg): _255.MsgConfirmDelegationResponse;
            toProto(message: _255.MsgConfirmDelegationResponse): Uint8Array;
            toProtoMsg(message: _255.MsgConfirmDelegationResponse): _255.MsgConfirmDelegationResponseProtoMsg;
        };
        MsgConfirmUndelegation: {
            typeUrl: string;
            encode(message: _255.MsgConfirmUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.MsgConfirmUndelegation;
            fromPartial(object: Partial<_255.MsgConfirmUndelegation>): _255.MsgConfirmUndelegation;
            fromAmino(object: _255.MsgConfirmUndelegationAmino): _255.MsgConfirmUndelegation;
            toAmino(message: _255.MsgConfirmUndelegation): _255.MsgConfirmUndelegationAmino;
            fromAminoMsg(object: _255.MsgConfirmUndelegationAminoMsg): _255.MsgConfirmUndelegation;
            toAminoMsg(message: _255.MsgConfirmUndelegation): _255.MsgConfirmUndelegationAminoMsg;
            fromProtoMsg(message: _255.MsgConfirmUndelegationProtoMsg): _255.MsgConfirmUndelegation;
            toProto(message: _255.MsgConfirmUndelegation): Uint8Array;
            toProtoMsg(message: _255.MsgConfirmUndelegation): _255.MsgConfirmUndelegationProtoMsg;
        };
        MsgConfirmUndelegationResponse: {
            typeUrl: string;
            encode(_: _255.MsgConfirmUndelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.MsgConfirmUndelegationResponse;
            fromPartial(_: Partial<_255.MsgConfirmUndelegationResponse>): _255.MsgConfirmUndelegationResponse;
            fromAmino(_: _255.MsgConfirmUndelegationResponseAmino): _255.MsgConfirmUndelegationResponse;
            toAmino(_: _255.MsgConfirmUndelegationResponse): _255.MsgConfirmUndelegationResponseAmino;
            fromAminoMsg(object: _255.MsgConfirmUndelegationResponseAminoMsg): _255.MsgConfirmUndelegationResponse;
            fromProtoMsg(message: _255.MsgConfirmUndelegationResponseProtoMsg): _255.MsgConfirmUndelegationResponse;
            toProto(message: _255.MsgConfirmUndelegationResponse): Uint8Array;
            toProtoMsg(message: _255.MsgConfirmUndelegationResponse): _255.MsgConfirmUndelegationResponseProtoMsg;
        };
        MsgConfirmUnbondedTokenSweep: {
            typeUrl: string;
            encode(message: _255.MsgConfirmUnbondedTokenSweep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.MsgConfirmUnbondedTokenSweep;
            fromPartial(object: Partial<_255.MsgConfirmUnbondedTokenSweep>): _255.MsgConfirmUnbondedTokenSweep;
            fromAmino(object: _255.MsgConfirmUnbondedTokenSweepAmino): _255.MsgConfirmUnbondedTokenSweep;
            toAmino(message: _255.MsgConfirmUnbondedTokenSweep): _255.MsgConfirmUnbondedTokenSweepAmino;
            fromAminoMsg(object: _255.MsgConfirmUnbondedTokenSweepAminoMsg): _255.MsgConfirmUnbondedTokenSweep;
            toAminoMsg(message: _255.MsgConfirmUnbondedTokenSweep): _255.MsgConfirmUnbondedTokenSweepAminoMsg;
            fromProtoMsg(message: _255.MsgConfirmUnbondedTokenSweepProtoMsg): _255.MsgConfirmUnbondedTokenSweep;
            toProto(message: _255.MsgConfirmUnbondedTokenSweep): Uint8Array;
            toProtoMsg(message: _255.MsgConfirmUnbondedTokenSweep): _255.MsgConfirmUnbondedTokenSweepProtoMsg;
        };
        MsgConfirmUnbondedTokenSweepResponse: {
            typeUrl: string;
            encode(_: _255.MsgConfirmUnbondedTokenSweepResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.MsgConfirmUnbondedTokenSweepResponse;
            fromPartial(_: Partial<_255.MsgConfirmUnbondedTokenSweepResponse>): _255.MsgConfirmUnbondedTokenSweepResponse;
            fromAmino(_: _255.MsgConfirmUnbondedTokenSweepResponseAmino): _255.MsgConfirmUnbondedTokenSweepResponse;
            toAmino(_: _255.MsgConfirmUnbondedTokenSweepResponse): _255.MsgConfirmUnbondedTokenSweepResponseAmino;
            fromAminoMsg(object: _255.MsgConfirmUnbondedTokenSweepResponseAminoMsg): _255.MsgConfirmUnbondedTokenSweepResponse;
            fromProtoMsg(message: _255.MsgConfirmUnbondedTokenSweepResponseProtoMsg): _255.MsgConfirmUnbondedTokenSweepResponse;
            toProto(message: _255.MsgConfirmUnbondedTokenSweepResponse): Uint8Array;
            toProtoMsg(message: _255.MsgConfirmUnbondedTokenSweepResponse): _255.MsgConfirmUnbondedTokenSweepResponseProtoMsg;
        };
        MsgAdjustDelegatedBalance: {
            typeUrl: string;
            encode(message: _255.MsgAdjustDelegatedBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.MsgAdjustDelegatedBalance;
            fromPartial(object: Partial<_255.MsgAdjustDelegatedBalance>): _255.MsgAdjustDelegatedBalance;
            fromAmino(object: _255.MsgAdjustDelegatedBalanceAmino): _255.MsgAdjustDelegatedBalance;
            toAmino(message: _255.MsgAdjustDelegatedBalance): _255.MsgAdjustDelegatedBalanceAmino;
            fromAminoMsg(object: _255.MsgAdjustDelegatedBalanceAminoMsg): _255.MsgAdjustDelegatedBalance;
            toAminoMsg(message: _255.MsgAdjustDelegatedBalance): _255.MsgAdjustDelegatedBalanceAminoMsg;
            fromProtoMsg(message: _255.MsgAdjustDelegatedBalanceProtoMsg): _255.MsgAdjustDelegatedBalance;
            toProto(message: _255.MsgAdjustDelegatedBalance): Uint8Array;
            toProtoMsg(message: _255.MsgAdjustDelegatedBalance): _255.MsgAdjustDelegatedBalanceProtoMsg;
        };
        MsgAdjustDelegatedBalanceResponse: {
            typeUrl: string;
            encode(_: _255.MsgAdjustDelegatedBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.MsgAdjustDelegatedBalanceResponse;
            fromPartial(_: Partial<_255.MsgAdjustDelegatedBalanceResponse>): _255.MsgAdjustDelegatedBalanceResponse;
            fromAmino(_: _255.MsgAdjustDelegatedBalanceResponseAmino): _255.MsgAdjustDelegatedBalanceResponse;
            toAmino(_: _255.MsgAdjustDelegatedBalanceResponse): _255.MsgAdjustDelegatedBalanceResponseAmino;
            fromAminoMsg(object: _255.MsgAdjustDelegatedBalanceResponseAminoMsg): _255.MsgAdjustDelegatedBalanceResponse;
            fromProtoMsg(message: _255.MsgAdjustDelegatedBalanceResponseProtoMsg): _255.MsgAdjustDelegatedBalanceResponse;
            toProto(message: _255.MsgAdjustDelegatedBalanceResponse): Uint8Array;
            toProtoMsg(message: _255.MsgAdjustDelegatedBalanceResponse): _255.MsgAdjustDelegatedBalanceResponseProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _255.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_255.MsgUpdateInnerRedemptionRateBounds>): _255.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _255.MsgUpdateInnerRedemptionRateBoundsAmino): _255.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _255.MsgUpdateInnerRedemptionRateBounds): _255.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _255.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _255.MsgUpdateInnerRedemptionRateBounds;
            toAminoMsg(message: _255.MsgUpdateInnerRedemptionRateBounds): _255.MsgUpdateInnerRedemptionRateBoundsAminoMsg;
            fromProtoMsg(message: _255.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _255.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _255.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _255.MsgUpdateInnerRedemptionRateBounds): _255.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _255.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_255.MsgUpdateInnerRedemptionRateBoundsResponse>): _255.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _255.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _255.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _255.MsgUpdateInnerRedemptionRateBoundsResponse): _255.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _255.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _255.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _255.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _255.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _255.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _255.MsgUpdateInnerRedemptionRateBoundsResponse): _255.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _255.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.MsgResumeHostZone;
            fromPartial(object: Partial<_255.MsgResumeHostZone>): _255.MsgResumeHostZone;
            fromAmino(object: _255.MsgResumeHostZoneAmino): _255.MsgResumeHostZone;
            toAmino(message: _255.MsgResumeHostZone): _255.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _255.MsgResumeHostZoneAminoMsg): _255.MsgResumeHostZone;
            toAminoMsg(message: _255.MsgResumeHostZone): _255.MsgResumeHostZoneAminoMsg;
            fromProtoMsg(message: _255.MsgResumeHostZoneProtoMsg): _255.MsgResumeHostZone;
            toProto(message: _255.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _255.MsgResumeHostZone): _255.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _255.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_255.MsgResumeHostZoneResponse>): _255.MsgResumeHostZoneResponse;
            fromAmino(_: _255.MsgResumeHostZoneResponseAmino): _255.MsgResumeHostZoneResponse;
            toAmino(_: _255.MsgResumeHostZoneResponse): _255.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _255.MsgResumeHostZoneResponseAminoMsg): _255.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _255.MsgResumeHostZoneResponseProtoMsg): _255.MsgResumeHostZoneResponse;
            toProto(message: _255.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _255.MsgResumeHostZoneResponse): _255.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgRefreshRedemptionRate: {
            typeUrl: string;
            encode(message: _255.MsgRefreshRedemptionRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.MsgRefreshRedemptionRate;
            fromPartial(object: Partial<_255.MsgRefreshRedemptionRate>): _255.MsgRefreshRedemptionRate;
            fromAmino(object: _255.MsgRefreshRedemptionRateAmino): _255.MsgRefreshRedemptionRate;
            toAmino(message: _255.MsgRefreshRedemptionRate): _255.MsgRefreshRedemptionRateAmino;
            fromAminoMsg(object: _255.MsgRefreshRedemptionRateAminoMsg): _255.MsgRefreshRedemptionRate;
            toAminoMsg(message: _255.MsgRefreshRedemptionRate): _255.MsgRefreshRedemptionRateAminoMsg;
            fromProtoMsg(message: _255.MsgRefreshRedemptionRateProtoMsg): _255.MsgRefreshRedemptionRate;
            toProto(message: _255.MsgRefreshRedemptionRate): Uint8Array;
            toProtoMsg(message: _255.MsgRefreshRedemptionRate): _255.MsgRefreshRedemptionRateProtoMsg;
        };
        MsgRefreshRedemptionRateResponse: {
            typeUrl: string;
            encode(_: _255.MsgRefreshRedemptionRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.MsgRefreshRedemptionRateResponse;
            fromPartial(_: Partial<_255.MsgRefreshRedemptionRateResponse>): _255.MsgRefreshRedemptionRateResponse;
            fromAmino(_: _255.MsgRefreshRedemptionRateResponseAmino): _255.MsgRefreshRedemptionRateResponse;
            toAmino(_: _255.MsgRefreshRedemptionRateResponse): _255.MsgRefreshRedemptionRateResponseAmino;
            fromAminoMsg(object: _255.MsgRefreshRedemptionRateResponseAminoMsg): _255.MsgRefreshRedemptionRateResponse;
            fromProtoMsg(message: _255.MsgRefreshRedemptionRateResponseProtoMsg): _255.MsgRefreshRedemptionRateResponse;
            toProto(message: _255.MsgRefreshRedemptionRateResponse): Uint8Array;
            toProtoMsg(message: _255.MsgRefreshRedemptionRateResponse): _255.MsgRefreshRedemptionRateResponseProtoMsg;
        };
        MsgOverwriteDelegationRecord: {
            typeUrl: string;
            encode(message: _255.MsgOverwriteDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.MsgOverwriteDelegationRecord;
            fromPartial(object: Partial<_255.MsgOverwriteDelegationRecord>): _255.MsgOverwriteDelegationRecord;
            fromAmino(object: _255.MsgOverwriteDelegationRecordAmino): _255.MsgOverwriteDelegationRecord;
            toAmino(message: _255.MsgOverwriteDelegationRecord): _255.MsgOverwriteDelegationRecordAmino;
            fromAminoMsg(object: _255.MsgOverwriteDelegationRecordAminoMsg): _255.MsgOverwriteDelegationRecord;
            toAminoMsg(message: _255.MsgOverwriteDelegationRecord): _255.MsgOverwriteDelegationRecordAminoMsg;
            fromProtoMsg(message: _255.MsgOverwriteDelegationRecordProtoMsg): _255.MsgOverwriteDelegationRecord;
            toProto(message: _255.MsgOverwriteDelegationRecord): Uint8Array;
            toProtoMsg(message: _255.MsgOverwriteDelegationRecord): _255.MsgOverwriteDelegationRecordProtoMsg;
        };
        MsgOverwriteDelegationRecordResponse: {
            typeUrl: string;
            encode(_: _255.MsgOverwriteDelegationRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.MsgOverwriteDelegationRecordResponse;
            fromPartial(_: Partial<_255.MsgOverwriteDelegationRecordResponse>): _255.MsgOverwriteDelegationRecordResponse;
            fromAmino(_: _255.MsgOverwriteDelegationRecordResponseAmino): _255.MsgOverwriteDelegationRecordResponse;
            toAmino(_: _255.MsgOverwriteDelegationRecordResponse): _255.MsgOverwriteDelegationRecordResponseAmino;
            fromAminoMsg(object: _255.MsgOverwriteDelegationRecordResponseAminoMsg): _255.MsgOverwriteDelegationRecordResponse;
            fromProtoMsg(message: _255.MsgOverwriteDelegationRecordResponseProtoMsg): _255.MsgOverwriteDelegationRecordResponse;
            toProto(message: _255.MsgOverwriteDelegationRecordResponse): Uint8Array;
            toProtoMsg(message: _255.MsgOverwriteDelegationRecordResponse): _255.MsgOverwriteDelegationRecordResponseProtoMsg;
        };
        MsgOverwriteUnbondingRecord: {
            typeUrl: string;
            encode(message: _255.MsgOverwriteUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.MsgOverwriteUnbondingRecord;
            fromPartial(object: Partial<_255.MsgOverwriteUnbondingRecord>): _255.MsgOverwriteUnbondingRecord;
            fromAmino(object: _255.MsgOverwriteUnbondingRecordAmino): _255.MsgOverwriteUnbondingRecord;
            toAmino(message: _255.MsgOverwriteUnbondingRecord): _255.MsgOverwriteUnbondingRecordAmino;
            fromAminoMsg(object: _255.MsgOverwriteUnbondingRecordAminoMsg): _255.MsgOverwriteUnbondingRecord;
            toAminoMsg(message: _255.MsgOverwriteUnbondingRecord): _255.MsgOverwriteUnbondingRecordAminoMsg;
            fromProtoMsg(message: _255.MsgOverwriteUnbondingRecordProtoMsg): _255.MsgOverwriteUnbondingRecord;
            toProto(message: _255.MsgOverwriteUnbondingRecord): Uint8Array;
            toProtoMsg(message: _255.MsgOverwriteUnbondingRecord): _255.MsgOverwriteUnbondingRecordProtoMsg;
        };
        MsgOverwriteUnbondingRecordResponse: {
            typeUrl: string;
            encode(_: _255.MsgOverwriteUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.MsgOverwriteUnbondingRecordResponse;
            fromPartial(_: Partial<_255.MsgOverwriteUnbondingRecordResponse>): _255.MsgOverwriteUnbondingRecordResponse;
            fromAmino(_: _255.MsgOverwriteUnbondingRecordResponseAmino): _255.MsgOverwriteUnbondingRecordResponse;
            toAmino(_: _255.MsgOverwriteUnbondingRecordResponse): _255.MsgOverwriteUnbondingRecordResponseAmino;
            fromAminoMsg(object: _255.MsgOverwriteUnbondingRecordResponseAminoMsg): _255.MsgOverwriteUnbondingRecordResponse;
            fromProtoMsg(message: _255.MsgOverwriteUnbondingRecordResponseProtoMsg): _255.MsgOverwriteUnbondingRecordResponse;
            toProto(message: _255.MsgOverwriteUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _255.MsgOverwriteUnbondingRecordResponse): _255.MsgOverwriteUnbondingRecordResponseProtoMsg;
        };
        MsgOverwriteRedemptionRecord: {
            typeUrl: string;
            encode(message: _255.MsgOverwriteRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.MsgOverwriteRedemptionRecord;
            fromPartial(object: Partial<_255.MsgOverwriteRedemptionRecord>): _255.MsgOverwriteRedemptionRecord;
            fromAmino(object: _255.MsgOverwriteRedemptionRecordAmino): _255.MsgOverwriteRedemptionRecord;
            toAmino(message: _255.MsgOverwriteRedemptionRecord): _255.MsgOverwriteRedemptionRecordAmino;
            fromAminoMsg(object: _255.MsgOverwriteRedemptionRecordAminoMsg): _255.MsgOverwriteRedemptionRecord;
            toAminoMsg(message: _255.MsgOverwriteRedemptionRecord): _255.MsgOverwriteRedemptionRecordAminoMsg;
            fromProtoMsg(message: _255.MsgOverwriteRedemptionRecordProtoMsg): _255.MsgOverwriteRedemptionRecord;
            toProto(message: _255.MsgOverwriteRedemptionRecord): Uint8Array;
            toProtoMsg(message: _255.MsgOverwriteRedemptionRecord): _255.MsgOverwriteRedemptionRecordProtoMsg;
        };
        MsgOverwriteRedemptionRecordResponse: {
            typeUrl: string;
            encode(_: _255.MsgOverwriteRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.MsgOverwriteRedemptionRecordResponse;
            fromPartial(_: Partial<_255.MsgOverwriteRedemptionRecordResponse>): _255.MsgOverwriteRedemptionRecordResponse;
            fromAmino(_: _255.MsgOverwriteRedemptionRecordResponseAmino): _255.MsgOverwriteRedemptionRecordResponse;
            toAmino(_: _255.MsgOverwriteRedemptionRecordResponse): _255.MsgOverwriteRedemptionRecordResponseAmino;
            fromAminoMsg(object: _255.MsgOverwriteRedemptionRecordResponseAminoMsg): _255.MsgOverwriteRedemptionRecordResponse;
            fromProtoMsg(message: _255.MsgOverwriteRedemptionRecordResponseProtoMsg): _255.MsgOverwriteRedemptionRecordResponse;
            toProto(message: _255.MsgOverwriteRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _255.MsgOverwriteRedemptionRecordResponse): _255.MsgOverwriteRedemptionRecordResponseProtoMsg;
        };
        MsgSetOperatorAddress: {
            typeUrl: string;
            encode(message: _255.MsgSetOperatorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.MsgSetOperatorAddress;
            fromPartial(object: Partial<_255.MsgSetOperatorAddress>): _255.MsgSetOperatorAddress;
            fromAmino(object: _255.MsgSetOperatorAddressAmino): _255.MsgSetOperatorAddress;
            toAmino(message: _255.MsgSetOperatorAddress): _255.MsgSetOperatorAddressAmino;
            fromAminoMsg(object: _255.MsgSetOperatorAddressAminoMsg): _255.MsgSetOperatorAddress;
            toAminoMsg(message: _255.MsgSetOperatorAddress): _255.MsgSetOperatorAddressAminoMsg;
            fromProtoMsg(message: _255.MsgSetOperatorAddressProtoMsg): _255.MsgSetOperatorAddress;
            toProto(message: _255.MsgSetOperatorAddress): Uint8Array;
            toProtoMsg(message: _255.MsgSetOperatorAddress): _255.MsgSetOperatorAddressProtoMsg;
        };
        MsgSetOperatorAddressResponse: {
            typeUrl: string;
            encode(_: _255.MsgSetOperatorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _255.MsgSetOperatorAddressResponse;
            fromPartial(_: Partial<_255.MsgSetOperatorAddressResponse>): _255.MsgSetOperatorAddressResponse;
            fromAmino(_: _255.MsgSetOperatorAddressResponseAmino): _255.MsgSetOperatorAddressResponse;
            toAmino(_: _255.MsgSetOperatorAddressResponse): _255.MsgSetOperatorAddressResponseAmino;
            fromAminoMsg(object: _255.MsgSetOperatorAddressResponseAminoMsg): _255.MsgSetOperatorAddressResponse;
            fromProtoMsg(message: _255.MsgSetOperatorAddressResponseProtoMsg): _255.MsgSetOperatorAddressResponse;
            toProto(message: _255.MsgSetOperatorAddressResponse): Uint8Array;
            toProtoMsg(message: _255.MsgSetOperatorAddressResponse): _255.MsgSetOperatorAddressResponseProtoMsg;
        };
        delegationRecordStatusFromJSON(object: any): _254.DelegationRecordStatus;
        delegationRecordStatusToJSON(object: _254.DelegationRecordStatus): string;
        unbondingRecordStatusFromJSON(object: any): _254.UnbondingRecordStatus;
        unbondingRecordStatusToJSON(object: _254.UnbondingRecordStatus): string;
        DelegationRecordStatus: typeof _254.DelegationRecordStatus;
        DelegationRecordStatusSDKType: typeof _254.DelegationRecordStatus;
        DelegationRecordStatusAmino: typeof _254.DelegationRecordStatus;
        UnbondingRecordStatus: typeof _254.UnbondingRecordStatus;
        UnbondingRecordStatusSDKType: typeof _254.UnbondingRecordStatus;
        UnbondingRecordStatusAmino: typeof _254.UnbondingRecordStatus;
        HostZone: {
            typeUrl: string;
            encode(message: _254.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _254.HostZone;
            fromPartial(object: Partial<_254.HostZone>): _254.HostZone;
            fromAmino(object: _254.HostZoneAmino): _254.HostZone;
            toAmino(message: _254.HostZone): _254.HostZoneAmino;
            fromAminoMsg(object: _254.HostZoneAminoMsg): _254.HostZone;
            fromProtoMsg(message: _254.HostZoneProtoMsg): _254.HostZone;
            toProto(message: _254.HostZone): Uint8Array;
            toProtoMsg(message: _254.HostZone): _254.HostZoneProtoMsg;
        };
        DelegationRecord: {
            typeUrl: string;
            encode(message: _254.DelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _254.DelegationRecord;
            fromPartial(object: Partial<_254.DelegationRecord>): _254.DelegationRecord;
            fromAmino(object: _254.DelegationRecordAmino): _254.DelegationRecord;
            toAmino(message: _254.DelegationRecord): _254.DelegationRecordAmino;
            fromAminoMsg(object: _254.DelegationRecordAminoMsg): _254.DelegationRecord;
            fromProtoMsg(message: _254.DelegationRecordProtoMsg): _254.DelegationRecord;
            toProto(message: _254.DelegationRecord): Uint8Array;
            toProtoMsg(message: _254.DelegationRecord): _254.DelegationRecordProtoMsg;
        };
        UnbondingRecord: {
            typeUrl: string;
            encode(message: _254.UnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _254.UnbondingRecord;
            fromPartial(object: Partial<_254.UnbondingRecord>): _254.UnbondingRecord;
            fromAmino(object: _254.UnbondingRecordAmino): _254.UnbondingRecord;
            toAmino(message: _254.UnbondingRecord): _254.UnbondingRecordAmino;
            fromAminoMsg(object: _254.UnbondingRecordAminoMsg): _254.UnbondingRecord;
            fromProtoMsg(message: _254.UnbondingRecordProtoMsg): _254.UnbondingRecord;
            toProto(message: _254.UnbondingRecord): Uint8Array;
            toProtoMsg(message: _254.UnbondingRecord): _254.UnbondingRecordProtoMsg;
        };
        RedemptionRecord: {
            typeUrl: string;
            encode(message: _254.RedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _254.RedemptionRecord;
            fromPartial(object: Partial<_254.RedemptionRecord>): _254.RedemptionRecord;
            fromAmino(object: _254.RedemptionRecordAmino): _254.RedemptionRecord;
            toAmino(message: _254.RedemptionRecord): _254.RedemptionRecordAmino;
            fromAminoMsg(object: _254.RedemptionRecordAminoMsg): _254.RedemptionRecord;
            fromProtoMsg(message: _254.RedemptionRecordProtoMsg): _254.RedemptionRecord;
            toProto(message: _254.RedemptionRecord): Uint8Array;
            toProtoMsg(message: _254.RedemptionRecord): _254.RedemptionRecordProtoMsg;
        };
        SlashRecord: {
            typeUrl: string;
            encode(message: _254.SlashRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _254.SlashRecord;
            fromPartial(object: Partial<_254.SlashRecord>): _254.SlashRecord;
            fromAmino(object: _254.SlashRecordAmino): _254.SlashRecord;
            toAmino(message: _254.SlashRecord): _254.SlashRecordAmino;
            fromAminoMsg(object: _254.SlashRecordAminoMsg): _254.SlashRecord;
            fromProtoMsg(message: _254.SlashRecordProtoMsg): _254.SlashRecord;
            toProto(message: _254.SlashRecord): Uint8Array;
            toProtoMsg(message: _254.SlashRecord): _254.SlashRecordProtoMsg;
        };
        QueryHostZoneRequest: {
            typeUrl: string;
            encode(_: _253.QueryHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.QueryHostZoneRequest;
            fromPartial(_: Partial<_253.QueryHostZoneRequest>): _253.QueryHostZoneRequest;
            fromAmino(_: _253.QueryHostZoneRequestAmino): _253.QueryHostZoneRequest;
            toAmino(_: _253.QueryHostZoneRequest): _253.QueryHostZoneRequestAmino;
            fromAminoMsg(object: _253.QueryHostZoneRequestAminoMsg): _253.QueryHostZoneRequest;
            fromProtoMsg(message: _253.QueryHostZoneRequestProtoMsg): _253.QueryHostZoneRequest;
            toProto(message: _253.QueryHostZoneRequest): Uint8Array;
            toProtoMsg(message: _253.QueryHostZoneRequest): _253.QueryHostZoneRequestProtoMsg;
        };
        QueryHostZoneResponse: {
            typeUrl: string;
            encode(message: _253.QueryHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.QueryHostZoneResponse;
            fromPartial(object: Partial<_253.QueryHostZoneResponse>): _253.QueryHostZoneResponse;
            fromAmino(object: _253.QueryHostZoneResponseAmino): _253.QueryHostZoneResponse;
            toAmino(message: _253.QueryHostZoneResponse): _253.QueryHostZoneResponseAmino;
            fromAminoMsg(object: _253.QueryHostZoneResponseAminoMsg): _253.QueryHostZoneResponse;
            fromProtoMsg(message: _253.QueryHostZoneResponseProtoMsg): _253.QueryHostZoneResponse;
            toProto(message: _253.QueryHostZoneResponse): Uint8Array;
            toProtoMsg(message: _253.QueryHostZoneResponse): _253.QueryHostZoneResponseProtoMsg;
        };
        QueryDelegationRecordsRequest: {
            typeUrl: string;
            encode(message: _253.QueryDelegationRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.QueryDelegationRecordsRequest;
            fromPartial(object: Partial<_253.QueryDelegationRecordsRequest>): _253.QueryDelegationRecordsRequest;
            fromAmino(object: _253.QueryDelegationRecordsRequestAmino): _253.QueryDelegationRecordsRequest;
            toAmino(message: _253.QueryDelegationRecordsRequest): _253.QueryDelegationRecordsRequestAmino;
            fromAminoMsg(object: _253.QueryDelegationRecordsRequestAminoMsg): _253.QueryDelegationRecordsRequest;
            fromProtoMsg(message: _253.QueryDelegationRecordsRequestProtoMsg): _253.QueryDelegationRecordsRequest;
            toProto(message: _253.QueryDelegationRecordsRequest): Uint8Array;
            toProtoMsg(message: _253.QueryDelegationRecordsRequest): _253.QueryDelegationRecordsRequestProtoMsg;
        };
        QueryDelegationRecordsResponse: {
            typeUrl: string;
            encode(message: _253.QueryDelegationRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.QueryDelegationRecordsResponse;
            fromPartial(object: Partial<_253.QueryDelegationRecordsResponse>): _253.QueryDelegationRecordsResponse;
            fromAmino(object: _253.QueryDelegationRecordsResponseAmino): _253.QueryDelegationRecordsResponse;
            toAmino(message: _253.QueryDelegationRecordsResponse): _253.QueryDelegationRecordsResponseAmino;
            fromAminoMsg(object: _253.QueryDelegationRecordsResponseAminoMsg): _253.QueryDelegationRecordsResponse;
            fromProtoMsg(message: _253.QueryDelegationRecordsResponseProtoMsg): _253.QueryDelegationRecordsResponse;
            toProto(message: _253.QueryDelegationRecordsResponse): Uint8Array;
            toProtoMsg(message: _253.QueryDelegationRecordsResponse): _253.QueryDelegationRecordsResponseProtoMsg;
        };
        QueryUnbondingRecordsRequest: {
            typeUrl: string;
            encode(message: _253.QueryUnbondingRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.QueryUnbondingRecordsRequest;
            fromPartial(object: Partial<_253.QueryUnbondingRecordsRequest>): _253.QueryUnbondingRecordsRequest;
            fromAmino(object: _253.QueryUnbondingRecordsRequestAmino): _253.QueryUnbondingRecordsRequest;
            toAmino(message: _253.QueryUnbondingRecordsRequest): _253.QueryUnbondingRecordsRequestAmino;
            fromAminoMsg(object: _253.QueryUnbondingRecordsRequestAminoMsg): _253.QueryUnbondingRecordsRequest;
            fromProtoMsg(message: _253.QueryUnbondingRecordsRequestProtoMsg): _253.QueryUnbondingRecordsRequest;
            toProto(message: _253.QueryUnbondingRecordsRequest): Uint8Array;
            toProtoMsg(message: _253.QueryUnbondingRecordsRequest): _253.QueryUnbondingRecordsRequestProtoMsg;
        };
        QueryUnbondingRecordsResponse: {
            typeUrl: string;
            encode(message: _253.QueryUnbondingRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.QueryUnbondingRecordsResponse;
            fromPartial(object: Partial<_253.QueryUnbondingRecordsResponse>): _253.QueryUnbondingRecordsResponse;
            fromAmino(object: _253.QueryUnbondingRecordsResponseAmino): _253.QueryUnbondingRecordsResponse;
            toAmino(message: _253.QueryUnbondingRecordsResponse): _253.QueryUnbondingRecordsResponseAmino;
            fromAminoMsg(object: _253.QueryUnbondingRecordsResponseAminoMsg): _253.QueryUnbondingRecordsResponse;
            fromProtoMsg(message: _253.QueryUnbondingRecordsResponseProtoMsg): _253.QueryUnbondingRecordsResponse;
            toProto(message: _253.QueryUnbondingRecordsResponse): Uint8Array;
            toProtoMsg(message: _253.QueryUnbondingRecordsResponse): _253.QueryUnbondingRecordsResponseProtoMsg;
        };
        QueryRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _253.QueryRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.QueryRedemptionRecordRequest;
            fromPartial(object: Partial<_253.QueryRedemptionRecordRequest>): _253.QueryRedemptionRecordRequest;
            fromAmino(object: _253.QueryRedemptionRecordRequestAmino): _253.QueryRedemptionRecordRequest;
            toAmino(message: _253.QueryRedemptionRecordRequest): _253.QueryRedemptionRecordRequestAmino;
            fromAminoMsg(object: _253.QueryRedemptionRecordRequestAminoMsg): _253.QueryRedemptionRecordRequest;
            fromProtoMsg(message: _253.QueryRedemptionRecordRequestProtoMsg): _253.QueryRedemptionRecordRequest;
            toProto(message: _253.QueryRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _253.QueryRedemptionRecordRequest): _253.QueryRedemptionRecordRequestProtoMsg;
        };
        QueryRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _253.QueryRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.QueryRedemptionRecordResponse;
            fromPartial(object: Partial<_253.QueryRedemptionRecordResponse>): _253.QueryRedemptionRecordResponse;
            fromAmino(object: _253.QueryRedemptionRecordResponseAmino): _253.QueryRedemptionRecordResponse;
            toAmino(message: _253.QueryRedemptionRecordResponse): _253.QueryRedemptionRecordResponseAmino;
            fromAminoMsg(object: _253.QueryRedemptionRecordResponseAminoMsg): _253.QueryRedemptionRecordResponse;
            fromProtoMsg(message: _253.QueryRedemptionRecordResponseProtoMsg): _253.QueryRedemptionRecordResponse;
            toProto(message: _253.QueryRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _253.QueryRedemptionRecordResponse): _253.QueryRedemptionRecordResponseProtoMsg;
        };
        QueryRedemptionRecordsRequest: {
            typeUrl: string;
            encode(message: _253.QueryRedemptionRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.QueryRedemptionRecordsRequest;
            fromPartial(object: Partial<_253.QueryRedemptionRecordsRequest>): _253.QueryRedemptionRecordsRequest;
            fromAmino(object: _253.QueryRedemptionRecordsRequestAmino): _253.QueryRedemptionRecordsRequest;
            toAmino(message: _253.QueryRedemptionRecordsRequest): _253.QueryRedemptionRecordsRequestAmino;
            fromAminoMsg(object: _253.QueryRedemptionRecordsRequestAminoMsg): _253.QueryRedemptionRecordsRequest;
            fromProtoMsg(message: _253.QueryRedemptionRecordsRequestProtoMsg): _253.QueryRedemptionRecordsRequest;
            toProto(message: _253.QueryRedemptionRecordsRequest): Uint8Array;
            toProtoMsg(message: _253.QueryRedemptionRecordsRequest): _253.QueryRedemptionRecordsRequestProtoMsg;
        };
        QueryRedemptionRecordsResponse: {
            typeUrl: string;
            encode(message: _253.QueryRedemptionRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.QueryRedemptionRecordsResponse;
            fromPartial(object: Partial<_253.QueryRedemptionRecordsResponse>): _253.QueryRedemptionRecordsResponse;
            fromAmino(object: _253.QueryRedemptionRecordsResponseAmino): _253.QueryRedemptionRecordsResponse;
            toAmino(message: _253.QueryRedemptionRecordsResponse): _253.QueryRedemptionRecordsResponseAmino;
            fromAminoMsg(object: _253.QueryRedemptionRecordsResponseAminoMsg): _253.QueryRedemptionRecordsResponse;
            fromProtoMsg(message: _253.QueryRedemptionRecordsResponseProtoMsg): _253.QueryRedemptionRecordsResponse;
            toProto(message: _253.QueryRedemptionRecordsResponse): Uint8Array;
            toProtoMsg(message: _253.QueryRedemptionRecordsResponse): _253.QueryRedemptionRecordsResponseProtoMsg;
        };
        QuerySlashRecordsRequest: {
            typeUrl: string;
            encode(_: _253.QuerySlashRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.QuerySlashRecordsRequest;
            fromPartial(_: Partial<_253.QuerySlashRecordsRequest>): _253.QuerySlashRecordsRequest;
            fromAmino(_: _253.QuerySlashRecordsRequestAmino): _253.QuerySlashRecordsRequest;
            toAmino(_: _253.QuerySlashRecordsRequest): _253.QuerySlashRecordsRequestAmino;
            fromAminoMsg(object: _253.QuerySlashRecordsRequestAminoMsg): _253.QuerySlashRecordsRequest;
            fromProtoMsg(message: _253.QuerySlashRecordsRequestProtoMsg): _253.QuerySlashRecordsRequest;
            toProto(message: _253.QuerySlashRecordsRequest): Uint8Array;
            toProtoMsg(message: _253.QuerySlashRecordsRequest): _253.QuerySlashRecordsRequestProtoMsg;
        };
        QuerySlashRecordsResponse: {
            typeUrl: string;
            encode(message: _253.QuerySlashRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.QuerySlashRecordsResponse;
            fromPartial(object: Partial<_253.QuerySlashRecordsResponse>): _253.QuerySlashRecordsResponse;
            fromAmino(object: _253.QuerySlashRecordsResponseAmino): _253.QuerySlashRecordsResponse;
            toAmino(message: _253.QuerySlashRecordsResponse): _253.QuerySlashRecordsResponseAmino;
            fromAminoMsg(object: _253.QuerySlashRecordsResponseAminoMsg): _253.QuerySlashRecordsResponse;
            fromProtoMsg(message: _253.QuerySlashRecordsResponseProtoMsg): _253.QuerySlashRecordsResponse;
            toProto(message: _253.QuerySlashRecordsResponse): Uint8Array;
            toProtoMsg(message: _253.QuerySlashRecordsResponse): _253.QuerySlashRecordsResponseProtoMsg;
        };
        RedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _253.RedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.RedemptionRecordResponse;
            fromPartial(object: Partial<_253.RedemptionRecordResponse>): _253.RedemptionRecordResponse;
            fromAmino(object: _253.RedemptionRecordResponseAmino): _253.RedemptionRecordResponse;
            toAmino(message: _253.RedemptionRecordResponse): _253.RedemptionRecordResponseAmino;
            fromAminoMsg(object: _253.RedemptionRecordResponseAminoMsg): _253.RedemptionRecordResponse;
            fromProtoMsg(message: _253.RedemptionRecordResponseProtoMsg): _253.RedemptionRecordResponse;
            toProto(message: _253.RedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _253.RedemptionRecordResponse): _253.RedemptionRecordResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _252.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _252.Params;
            fromPartial(_: Partial<_252.Params>): _252.Params;
            fromAmino(_: _252.ParamsAmino): _252.Params;
            toAmino(_: _252.Params): _252.ParamsAmino;
            fromAminoMsg(object: _252.ParamsAminoMsg): _252.Params;
            fromProtoMsg(message: _252.ParamsProtoMsg): _252.Params;
            toProto(message: _252.Params): Uint8Array;
            toProtoMsg(message: _252.Params): _252.ParamsProtoMsg;
        };
        TransferInProgressRecordIds: {
            typeUrl: string;
            encode(message: _252.TransferInProgressRecordIds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _252.TransferInProgressRecordIds;
            fromPartial(object: Partial<_252.TransferInProgressRecordIds>): _252.TransferInProgressRecordIds;
            fromAmino(object: _252.TransferInProgressRecordIdsAmino): _252.TransferInProgressRecordIds;
            toAmino(message: _252.TransferInProgressRecordIds): _252.TransferInProgressRecordIdsAmino;
            fromAminoMsg(object: _252.TransferInProgressRecordIdsAminoMsg): _252.TransferInProgressRecordIds;
            fromProtoMsg(message: _252.TransferInProgressRecordIdsProtoMsg): _252.TransferInProgressRecordIds;
            toProto(message: _252.TransferInProgressRecordIds): Uint8Array;
            toProtoMsg(message: _252.TransferInProgressRecordIds): _252.TransferInProgressRecordIdsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _252.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _252.GenesisState;
            fromPartial(object: Partial<_252.GenesisState>): _252.GenesisState;
            fromAmino(object: _252.GenesisStateAmino): _252.GenesisState;
            toAmino(message: _252.GenesisState): _252.GenesisStateAmino;
            fromAminoMsg(object: _252.GenesisStateAminoMsg): _252.GenesisState;
            fromProtoMsg(message: _252.GenesisStateProtoMsg): _252.GenesisState;
            toProto(message: _252.GenesisState): Uint8Array;
            toProtoMsg(message: _252.GenesisState): _252.GenesisStateProtoMsg;
        };
    };
    const strdburner: {
        QueryClientImpl: typeof _411.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            strdBurnerAddress(request?: _257.QueryStrdBurnerAddressRequest): Promise<_257.QueryStrdBurnerAddressResponse>;
            totalStrdBurned(request?: _257.QueryTotalStrdBurnedRequest): Promise<_257.QueryTotalStrdBurnedResponse>;
        };
        QueryStrdBurnerAddressRequest: {
            typeUrl: string;
            encode(_: _257.QueryStrdBurnerAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.QueryStrdBurnerAddressRequest;
            fromPartial(_: Partial<_257.QueryStrdBurnerAddressRequest>): _257.QueryStrdBurnerAddressRequest;
            fromAmino(_: _257.QueryStrdBurnerAddressRequestAmino): _257.QueryStrdBurnerAddressRequest;
            toAmino(_: _257.QueryStrdBurnerAddressRequest): _257.QueryStrdBurnerAddressRequestAmino;
            fromAminoMsg(object: _257.QueryStrdBurnerAddressRequestAminoMsg): _257.QueryStrdBurnerAddressRequest;
            fromProtoMsg(message: _257.QueryStrdBurnerAddressRequestProtoMsg): _257.QueryStrdBurnerAddressRequest;
            toProto(message: _257.QueryStrdBurnerAddressRequest): Uint8Array;
            toProtoMsg(message: _257.QueryStrdBurnerAddressRequest): _257.QueryStrdBurnerAddressRequestProtoMsg;
        };
        QueryStrdBurnerAddressResponse: {
            typeUrl: string;
            encode(message: _257.QueryStrdBurnerAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.QueryStrdBurnerAddressResponse;
            fromPartial(object: Partial<_257.QueryStrdBurnerAddressResponse>): _257.QueryStrdBurnerAddressResponse;
            fromAmino(object: _257.QueryStrdBurnerAddressResponseAmino): _257.QueryStrdBurnerAddressResponse;
            toAmino(message: _257.QueryStrdBurnerAddressResponse): _257.QueryStrdBurnerAddressResponseAmino;
            fromAminoMsg(object: _257.QueryStrdBurnerAddressResponseAminoMsg): _257.QueryStrdBurnerAddressResponse;
            fromProtoMsg(message: _257.QueryStrdBurnerAddressResponseProtoMsg): _257.QueryStrdBurnerAddressResponse;
            toProto(message: _257.QueryStrdBurnerAddressResponse): Uint8Array;
            toProtoMsg(message: _257.QueryStrdBurnerAddressResponse): _257.QueryStrdBurnerAddressResponseProtoMsg;
        };
        QueryTotalStrdBurnedRequest: {
            typeUrl: string;
            encode(_: _257.QueryTotalStrdBurnedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.QueryTotalStrdBurnedRequest;
            fromPartial(_: Partial<_257.QueryTotalStrdBurnedRequest>): _257.QueryTotalStrdBurnedRequest;
            fromAmino(_: _257.QueryTotalStrdBurnedRequestAmino): _257.QueryTotalStrdBurnedRequest;
            toAmino(_: _257.QueryTotalStrdBurnedRequest): _257.QueryTotalStrdBurnedRequestAmino;
            fromAminoMsg(object: _257.QueryTotalStrdBurnedRequestAminoMsg): _257.QueryTotalStrdBurnedRequest;
            fromProtoMsg(message: _257.QueryTotalStrdBurnedRequestProtoMsg): _257.QueryTotalStrdBurnedRequest;
            toProto(message: _257.QueryTotalStrdBurnedRequest): Uint8Array;
            toProtoMsg(message: _257.QueryTotalStrdBurnedRequest): _257.QueryTotalStrdBurnedRequestProtoMsg;
        };
        QueryTotalStrdBurnedResponse: {
            typeUrl: string;
            encode(message: _257.QueryTotalStrdBurnedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _257.QueryTotalStrdBurnedResponse;
            fromPartial(object: Partial<_257.QueryTotalStrdBurnedResponse>): _257.QueryTotalStrdBurnedResponse;
            fromAmino(object: _257.QueryTotalStrdBurnedResponseAmino): _257.QueryTotalStrdBurnedResponse;
            toAmino(message: _257.QueryTotalStrdBurnedResponse): _257.QueryTotalStrdBurnedResponseAmino;
            fromAminoMsg(object: _257.QueryTotalStrdBurnedResponseAminoMsg): _257.QueryTotalStrdBurnedResponse;
            fromProtoMsg(message: _257.QueryTotalStrdBurnedResponseProtoMsg): _257.QueryTotalStrdBurnedResponse;
            toProto(message: _257.QueryTotalStrdBurnedResponse): Uint8Array;
            toProtoMsg(message: _257.QueryTotalStrdBurnedResponse): _257.QueryTotalStrdBurnedResponseProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _256.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _256.GenesisState;
            fromPartial(object: Partial<_256.GenesisState>): _256.GenesisState;
            fromAmino(object: _256.GenesisStateAmino): _256.GenesisState;
            toAmino(message: _256.GenesisState): _256.GenesisStateAmino;
            fromAminoMsg(object: _256.GenesisStateAminoMsg): _256.GenesisState;
            fromProtoMsg(message: _256.GenesisStateProtoMsg): _256.GenesisState;
            toProto(message: _256.GenesisState): Uint8Array;
            toProtoMsg(message: _256.GenesisState): _256.GenesisStateProtoMsg;
        };
    };
    const vesting: {
        BaseVestingAccount: {
            typeUrl: string;
            encode(message: _259.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.BaseVestingAccount;
            fromPartial(object: Partial<_259.BaseVestingAccount>): _259.BaseVestingAccount;
            fromAmino(object: _259.BaseVestingAccountAmino): _259.BaseVestingAccount;
            toAmino(message: _259.BaseVestingAccount): _259.BaseVestingAccountAmino;
            fromAminoMsg(object: _259.BaseVestingAccountAminoMsg): _259.BaseVestingAccount;
            fromProtoMsg(message: _259.BaseVestingAccountProtoMsg): _259.BaseVestingAccount;
            toProto(message: _259.BaseVestingAccount): Uint8Array;
            toProtoMsg(message: _259.BaseVestingAccount): _259.BaseVestingAccountProtoMsg;
        };
        Period: {
            typeUrl: string;
            encode(message: _259.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.Period;
            fromPartial(object: Partial<_259.Period>): _259.Period;
            fromAmino(object: _259.PeriodAmino): _259.Period;
            toAmino(message: _259.Period): _259.PeriodAmino;
            fromAminoMsg(object: _259.PeriodAminoMsg): _259.Period;
            fromProtoMsg(message: _259.PeriodProtoMsg): _259.Period;
            toProto(message: _259.Period): Uint8Array;
            toProtoMsg(message: _259.Period): _259.PeriodProtoMsg;
        };
        StridePeriodicVestingAccount: {
            typeUrl: string;
            encode(message: _259.StridePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _259.StridePeriodicVestingAccount;
            fromPartial(object: Partial<_259.StridePeriodicVestingAccount>): _259.StridePeriodicVestingAccount;
            fromAmino(object: _259.StridePeriodicVestingAccountAmino): _259.StridePeriodicVestingAccount;
            toAmino(message: _259.StridePeriodicVestingAccount): _259.StridePeriodicVestingAccountAmino;
            fromAminoMsg(object: _259.StridePeriodicVestingAccountAminoMsg): _259.StridePeriodicVestingAccount;
            toAminoMsg(message: _259.StridePeriodicVestingAccount): _259.StridePeriodicVestingAccountAminoMsg;
            fromProtoMsg(message: _259.StridePeriodicVestingAccountProtoMsg): _259.StridePeriodicVestingAccount;
            toProto(message: _259.StridePeriodicVestingAccount): Uint8Array;
            toProtoMsg(message: _259.StridePeriodicVestingAccount): _259.StridePeriodicVestingAccountProtoMsg;
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
                airdrop: _412.MsgClientImpl;
                auction: _413.MsgClientImpl;
                claim: _414.MsgClientImpl;
                icaoracle: _415.MsgClientImpl;
                icqoracle: _416.MsgClientImpl;
                interchainquery: {
                    v1: _417.MsgClientImpl;
                };
                stakedym: _418.MsgClientImpl;
                stakeibc: _419.MsgClientImpl;
                staketia: _420.MsgClientImpl;
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
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                        sendEnabled(request: import("../cosmos/bank/v1beta1/query").QuerySendEnabledRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySendEnabledResponse>;
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
                            aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>;
                        };
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
                    airdrop(request: _192.QueryAirdropRequest): Promise<_192.QueryAirdropResponse>;
                    allAirdrops(request?: _192.QueryAllAirdropsRequest): Promise<_192.QueryAllAirdropsResponse>;
                    userAllocation(request: _192.QueryUserAllocationRequest): Promise<_192.QueryUserAllocationResponse>;
                    userAllocations(request: _192.QueryUserAllocationsRequest): Promise<_192.QueryUserAllocationsResponse>;
                    allAllocations(request: _192.QueryAllAllocationsRequest): Promise<_192.QueryAllAllocationsResponse>;
                    userSummary(request: _192.QueryUserSummaryRequest): Promise<_192.QueryUserSummaryResponse>;
                };
                auction: {
                    auction(request: _196.QueryAuctionRequest): Promise<_196.QueryAuctionResponse>;
                    auctions(request?: _196.QueryAuctionsRequest): Promise<_196.QueryAuctionsResponse>;
                };
                autopilot: {
                    params(request?: _200.QueryParamsRequest): Promise<_200.QueryParamsResponse>;
                };
                claim: {
                    distributorAccountBalance(request: _204.QueryDistributorAccountBalanceRequest): Promise<_204.QueryDistributorAccountBalanceResponse>;
                    params(request?: _204.QueryParamsRequest): Promise<_204.QueryParamsResponse>;
                    claimRecord(request: _204.QueryClaimRecordRequest): Promise<_204.QueryClaimRecordResponse>;
                    claimableForAction(request: _204.QueryClaimableForActionRequest): Promise<_204.QueryClaimableForActionResponse>;
                    totalClaimable(request: _204.QueryTotalClaimableRequest): Promise<_204.QueryTotalClaimableResponse>;
                    userVestings(request: _204.QueryUserVestingsRequest): Promise<_204.QueryUserVestingsResponse>;
                    claimStatus(request: _204.QueryClaimStatusRequest): Promise<_204.QueryClaimStatusResponse>;
                    claimMetadata(request?: _204.QueryClaimMetadataRequest): Promise<_204.QueryClaimMetadataResponse>;
                };
                epochs: {
                    epochInfos(request?: _207.QueryEpochsInfoRequest): Promise<_207.QueryEpochsInfoResponse>;
                    currentEpoch(request: _207.QueryCurrentEpochRequest): Promise<_207.QueryCurrentEpochResponse>;
                    epochInfo(request: _207.QueryEpochInfoRequest): Promise<_207.QueryEpochInfoResponse>;
                };
                icacallbacks: {
                    params(request?: _212.QueryParamsRequest): Promise<_212.QueryParamsResponse>;
                    callbackData(request: _212.QueryGetCallbackDataRequest): Promise<_212.QueryGetCallbackDataResponse>;
                    callbackDataAll(request?: _212.QueryAllCallbackDataRequest): Promise<_212.QueryAllCallbackDataResponse>;
                };
                icaoracle: {
                    oracle(request: _218.QueryOracleRequest): Promise<_218.QueryOracleResponse>;
                    allOracles(request?: _218.QueryAllOraclesRequest): Promise<_218.QueryAllOraclesResponse>;
                    activeOracles(request: _218.QueryActiveOraclesRequest): Promise<_218.QueryActiveOraclesResponse>;
                    metrics(request: _218.QueryMetricsRequest): Promise<_218.QueryMetricsResponse>;
                };
                icqoracle: {
                    tokenPrice(request: _222.QueryTokenPriceRequest): Promise<_222.TokenPriceResponse>;
                    tokenPrices(request?: _222.QueryTokenPricesRequest): Promise<_222.QueryTokenPricesResponse>;
                    params(request?: _222.QueryParamsRequest): Promise<_222.QueryParamsResponse>;
                    tokenPriceForQuoteDenom(request: _222.QueryTokenPriceForQuoteDenomRequest): Promise<_222.QueryTokenPriceForQuoteDenomResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _229.QueryParamsRequest): Promise<_229.QueryParamsResponse>;
                        epochProvisions(request?: _229.QueryEpochProvisionsRequest): Promise<_229.QueryEpochProvisionsResponse>;
                    };
                };
                records: {
                    params(request?: _233.QueryParamsRequest): Promise<_233.QueryParamsResponse>;
                    userRedemptionRecord(request: _233.QueryGetUserRedemptionRecordRequest): Promise<_233.QueryGetUserRedemptionRecordResponse>;
                    userRedemptionRecordAll(request?: _233.QueryAllUserRedemptionRecordRequest): Promise<_233.QueryAllUserRedemptionRecordResponse>;
                    userRedemptionRecordForUser(request: _233.QueryAllUserRedemptionRecordForUserRequest): Promise<_233.QueryAllUserRedemptionRecordForUserResponse>;
                    epochUnbondingRecord(request: _233.QueryGetEpochUnbondingRecordRequest): Promise<_233.QueryGetEpochUnbondingRecordResponse>;
                    epochUnbondingRecordAll(request?: _233.QueryAllEpochUnbondingRecordRequest): Promise<_233.QueryAllEpochUnbondingRecordResponse>;
                    depositRecord(request: _233.QueryGetDepositRecordRequest): Promise<_233.QueryGetDepositRecordResponse>;
                    depositRecordAll(request?: _233.QueryAllDepositRecordRequest): Promise<_233.QueryAllDepositRecordResponse>;
                    depositRecordByHost(request: _233.QueryDepositRecordByHostRequest): Promise<_233.QueryDepositRecordByHostResponse>;
                    lSMDeposit(request: _233.QueryLSMDepositRequest): Promise<_233.QueryLSMDepositResponse>;
                    lSMDeposits(request: _233.QueryLSMDepositsRequest): Promise<_233.QueryLSMDepositsResponse>;
                };
                stakedym: {
                    hostZone(request?: _236.QueryHostZoneRequest): Promise<_236.QueryHostZoneResponse>;
                    delegationRecords(request: _236.QueryDelegationRecordsRequest): Promise<_236.QueryDelegationRecordsResponse>;
                    unbondingRecords(request: _236.QueryUnbondingRecordsRequest): Promise<_236.QueryUnbondingRecordsResponse>;
                    redemptionRecord(request: _236.QueryRedemptionRecordRequest): Promise<_236.QueryRedemptionRecordResponse>;
                    redemptionRecords(request: _236.QueryRedemptionRecordsRequest): Promise<_236.QueryRedemptionRecordsResponse>;
                    slashRecords(request?: _236.QuerySlashRecordsRequest): Promise<_236.QuerySlashRecordsResponse>;
                };
                stakeibc: {
                    params(request?: _248.QueryParamsRequest): Promise<_248.QueryParamsResponse>;
                    validators(request: _248.QueryGetValidatorsRequest): Promise<_248.QueryGetValidatorsResponse>;
                    hostZone(request: _248.QueryGetHostZoneRequest): Promise<_248.QueryGetHostZoneResponse>;
                    hostZoneAll(request?: _248.QueryAllHostZoneRequest): Promise<_248.QueryAllHostZoneResponse>;
                    moduleAddress(request: _248.QueryModuleAddressRequest): Promise<_248.QueryModuleAddressResponse>;
                    interchainAccountFromAddress(request: _248.QueryInterchainAccountFromAddressRequest): Promise<_248.QueryInterchainAccountFromAddressResponse>;
                    epochTracker(request: _248.QueryGetEpochTrackerRequest): Promise<_248.QueryGetEpochTrackerResponse>;
                    epochTrackerAll(request?: _248.QueryAllEpochTrackerRequest): Promise<_248.QueryAllEpochTrackerResponse>;
                    nextPacketSequence(request: _248.QueryGetNextPacketSequenceRequest): Promise<_248.QueryGetNextPacketSequenceResponse>;
                    addressUnbondings(request: _248.QueryAddressUnbondings): Promise<_248.QueryAddressUnbondingsResponse>;
                    allTradeRoutes(request?: _248.QueryAllTradeRoutes): Promise<_248.QueryAllTradeRoutesResponse>;
                };
                staketia: {
                    hostZone(request?: _253.QueryHostZoneRequest): Promise<_253.QueryHostZoneResponse>;
                    delegationRecords(request: _253.QueryDelegationRecordsRequest): Promise<_253.QueryDelegationRecordsResponse>;
                    unbondingRecords(request: _253.QueryUnbondingRecordsRequest): Promise<_253.QueryUnbondingRecordsResponse>;
                    redemptionRecord(request: _253.QueryRedemptionRecordRequest): Promise<_253.QueryRedemptionRecordResponse>;
                    redemptionRecords(request: _253.QueryRedemptionRecordsRequest): Promise<_253.QueryRedemptionRecordsResponse>;
                    slashRecords(request?: _253.QuerySlashRecordsRequest): Promise<_253.QuerySlashRecordsResponse>;
                };
                strdburner: {
                    strdBurnerAddress(request?: _257.QueryStrdBurnerAddressRequest): Promise<_257.QueryStrdBurnerAddressResponse>;
                    totalStrdBurned(request?: _257.QueryTotalStrdBurnedRequest): Promise<_257.QueryTotalStrdBurnedResponse>;
                };
            };
        }>;
    };
}
