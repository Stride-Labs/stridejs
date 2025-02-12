import * as _176 from "./airdrop/airdrop";
import * as _177 from "./airdrop/genesis";
import * as _178 from "./airdrop/query";
import * as _179 from "./airdrop/tx";
import * as _180 from "./auction/auction";
import * as _181 from "./auction/genesis";
import * as _182 from "./auction/query";
import * as _183 from "./auction/tx";
import * as _184 from "./autopilot/genesis";
import * as _185 from "./autopilot/params";
import * as _186 from "./autopilot/query";
import * as _187 from "./claim/claim";
import * as _188 from "./claim/genesis";
import * as _189 from "./claim/params";
import * as _190 from "./claim/query";
import * as _191 from "./claim/tx";
import * as _192 from "./epochs/genesis";
import * as _193 from "./epochs/query";
import * as _194 from "./icacallbacks/callback_data";
import * as _195 from "./icacallbacks/genesis";
import * as _196 from "./icacallbacks/packet";
import * as _197 from "./icacallbacks/params";
import * as _198 from "./icacallbacks/query";
import * as _200 from "./icaoracle/callbacks";
import * as _201 from "./icaoracle/contract";
import * as _202 from "./icaoracle/genesis";
import * as _203 from "./icaoracle/icaoracle";
import * as _204 from "./icaoracle/query";
import * as _205 from "./icaoracle/tx";
import * as _206 from "./icqoracle/genesis";
import * as _207 from "./icqoracle/icqoracle";
import * as _208 from "./icqoracle/query";
import * as _209 from "./icqoracle/tx";
import * as _210 from "./interchainquery/v1/genesis";
import * as _211 from "./interchainquery/v1/messages";
import * as _212 from "./interchainquery/v1/query";
import * as _213 from "./mint/v1beta1/genesis";
import * as _214 from "./mint/v1beta1/mint";
import * as _215 from "./mint/v1beta1/query";
import * as _216 from "./records/callbacks";
import * as _217 from "./records/genesis";
import * as _218 from "./records/params";
import * as _219 from "./records/query";
import * as _220 from "./records/records";
import * as _221 from "./stakedym/genesis";
import * as _222 from "./stakedym/query";
import * as _223 from "./stakedym/stakedym";
import * as _224 from "./stakedym/tx";
import * as _225 from "./stakeibc/address_unbonding";
import * as _226 from "./stakeibc/callbacks";
import * as _227 from "./stakeibc/epoch_tracker";
import * as _228 from "./stakeibc/genesis";
import * as _229 from "./stakeibc/gov";
import * as _230 from "./stakeibc/host_zone";
import * as _231 from "./stakeibc/ica_account";
import * as _232 from "./stakeibc/packet";
import * as _233 from "./stakeibc/params";
import * as _234 from "./stakeibc/query";
import * as _235 from "./stakeibc/trade_route";
import * as _236 from "./stakeibc/tx";
import * as _237 from "./stakeibc/validator";
import * as _238 from "./staketia/genesis";
import * as _239 from "./staketia/query";
import * as _240 from "./staketia/staketia";
import * as _241 from "./staketia/tx";
import * as _242 from "./strdburner/genesis";
import * as _243 from "./strdburner/query";
import * as _245 from "./vesting/vesting";
import * as _373 from "./airdrop/query.rpc.Query";
import * as _374 from "./auction/query.rpc.Query";
import * as _375 from "./autopilot/query.rpc.Query";
import * as _376 from "./claim/query.rpc.Query";
import * as _377 from "./epochs/query.rpc.Query";
import * as _378 from "./icacallbacks/query.rpc.Query";
import * as _379 from "./icaoracle/query.rpc.Query";
import * as _380 from "./icqoracle/query.rpc.Query";
import * as _381 from "./mint/v1beta1/query.rpc.Query";
import * as _382 from "./records/query.rpc.Query";
import * as _383 from "./stakedym/query.rpc.Query";
import * as _384 from "./stakeibc/query.rpc.Query";
import * as _385 from "./staketia/query.rpc.Query";
import * as _386 from "./strdburner/query.rpc.Query";
import * as _387 from "./airdrop/tx.rpc.msg";
import * as _388 from "./auction/tx.rpc.msg";
import * as _389 from "./claim/tx.rpc.msg";
import * as _390 from "./icaoracle/tx.rpc.msg";
import * as _391 from "./icqoracle/tx.rpc.msg";
import * as _392 from "./interchainquery/v1/messages.rpc.msg";
import * as _393 from "./stakedym/tx.rpc.msg";
import * as _394 from "./stakeibc/tx.rpc.msg";
import * as _395 from "./staketia/tx.rpc.msg";
export declare namespace stride {
    const airdrop: {
        MsgClientImpl: typeof _387.MsgClientImpl;
        QueryClientImpl: typeof _373.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            airdrop(request: _178.QueryAirdropRequest): Promise<_178.QueryAirdropResponse>;
            allAirdrops(request?: _178.QueryAllAirdropsRequest): Promise<_178.QueryAllAirdropsResponse>;
            userAllocation(request: _178.QueryUserAllocationRequest): Promise<_178.QueryUserAllocationResponse>;
            userAllocations(request: _178.QueryUserAllocationsRequest): Promise<_178.QueryUserAllocationsResponse>;
            allAllocations(request: _178.QueryAllAllocationsRequest): Promise<_178.QueryAllAllocationsResponse>;
            userSummary(request: _178.QueryUserSummaryRequest): Promise<_178.QueryUserSummaryResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                claimDaily(value: _179.MsgClaimDaily): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimEarly(value: _179.MsgClaimEarly): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAirdrop(value: _179.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateAirdrop(value: _179.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addAllocations(value: _179.MsgAddAllocations): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateUserAllocation(value: _179.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                linkAddresses(value: _179.MsgLinkAddresses): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                claimDaily(value: _179.MsgClaimDaily): {
                    typeUrl: string;
                    value: _179.MsgClaimDaily;
                };
                claimEarly(value: _179.MsgClaimEarly): {
                    typeUrl: string;
                    value: _179.MsgClaimEarly;
                };
                createAirdrop(value: _179.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _179.MsgCreateAirdrop;
                };
                updateAirdrop(value: _179.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: _179.MsgUpdateAirdrop;
                };
                addAllocations(value: _179.MsgAddAllocations): {
                    typeUrl: string;
                    value: _179.MsgAddAllocations;
                };
                updateUserAllocation(value: _179.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: _179.MsgUpdateUserAllocation;
                };
                linkAddresses(value: _179.MsgLinkAddresses): {
                    typeUrl: string;
                    value: _179.MsgLinkAddresses;
                };
            };
            fromPartial: {
                claimDaily(value: _179.MsgClaimDaily): {
                    typeUrl: string;
                    value: _179.MsgClaimDaily;
                };
                claimEarly(value: _179.MsgClaimEarly): {
                    typeUrl: string;
                    value: _179.MsgClaimEarly;
                };
                createAirdrop(value: _179.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _179.MsgCreateAirdrop;
                };
                updateAirdrop(value: _179.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: _179.MsgUpdateAirdrop;
                };
                addAllocations(value: _179.MsgAddAllocations): {
                    typeUrl: string;
                    value: _179.MsgAddAllocations;
                };
                updateUserAllocation(value: _179.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: _179.MsgUpdateUserAllocation;
                };
                linkAddresses(value: _179.MsgLinkAddresses): {
                    typeUrl: string;
                    value: _179.MsgLinkAddresses;
                };
            };
        };
        AminoConverter: {
            "/stride.airdrop.MsgClaimDaily": {
                aminoType: string;
                toAmino: (message: _179.MsgClaimDaily) => _179.MsgClaimDailyAmino;
                fromAmino: (object: _179.MsgClaimDailyAmino) => _179.MsgClaimDaily;
            };
            "/stride.airdrop.MsgClaimEarly": {
                aminoType: string;
                toAmino: (message: _179.MsgClaimEarly) => _179.MsgClaimEarlyAmino;
                fromAmino: (object: _179.MsgClaimEarlyAmino) => _179.MsgClaimEarly;
            };
            "/stride.airdrop.MsgCreateAirdrop": {
                aminoType: string;
                toAmino: (message: _179.MsgCreateAirdrop) => _179.MsgCreateAirdropAmino;
                fromAmino: (object: _179.MsgCreateAirdropAmino) => _179.MsgCreateAirdrop;
            };
            "/stride.airdrop.MsgUpdateAirdrop": {
                aminoType: string;
                toAmino: (message: _179.MsgUpdateAirdrop) => _179.MsgUpdateAirdropAmino;
                fromAmino: (object: _179.MsgUpdateAirdropAmino) => _179.MsgUpdateAirdrop;
            };
            "/stride.airdrop.MsgAddAllocations": {
                aminoType: string;
                toAmino: (message: _179.MsgAddAllocations) => _179.MsgAddAllocationsAmino;
                fromAmino: (object: _179.MsgAddAllocationsAmino) => _179.MsgAddAllocations;
            };
            "/stride.airdrop.MsgUpdateUserAllocation": {
                aminoType: string;
                toAmino: (message: _179.MsgUpdateUserAllocation) => _179.MsgUpdateUserAllocationAmino;
                fromAmino: (object: _179.MsgUpdateUserAllocationAmino) => _179.MsgUpdateUserAllocation;
            };
            "/stride.airdrop.MsgLinkAddresses": {
                aminoType: string;
                toAmino: (message: _179.MsgLinkAddresses) => _179.MsgLinkAddressesAmino;
                fromAmino: (object: _179.MsgLinkAddressesAmino) => _179.MsgLinkAddresses;
            };
        };
        MsgClaimDaily: {
            typeUrl: string;
            encode(message: _179.MsgClaimDaily, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgClaimDaily;
            fromPartial(object: Partial<_179.MsgClaimDaily>): _179.MsgClaimDaily;
            fromAmino(object: _179.MsgClaimDailyAmino): _179.MsgClaimDaily;
            toAmino(message: _179.MsgClaimDaily): _179.MsgClaimDailyAmino;
            fromAminoMsg(object: _179.MsgClaimDailyAminoMsg): _179.MsgClaimDaily;
            toAminoMsg(message: _179.MsgClaimDaily): _179.MsgClaimDailyAminoMsg;
            fromProtoMsg(message: _179.MsgClaimDailyProtoMsg): _179.MsgClaimDaily;
            toProto(message: _179.MsgClaimDaily): Uint8Array;
            toProtoMsg(message: _179.MsgClaimDaily): _179.MsgClaimDailyProtoMsg;
        };
        MsgClaimDailyResponse: {
            typeUrl: string;
            encode(_: _179.MsgClaimDailyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgClaimDailyResponse;
            fromPartial(_: Partial<_179.MsgClaimDailyResponse>): _179.MsgClaimDailyResponse;
            fromAmino(_: _179.MsgClaimDailyResponseAmino): _179.MsgClaimDailyResponse;
            toAmino(_: _179.MsgClaimDailyResponse): _179.MsgClaimDailyResponseAmino;
            fromAminoMsg(object: _179.MsgClaimDailyResponseAminoMsg): _179.MsgClaimDailyResponse;
            fromProtoMsg(message: _179.MsgClaimDailyResponseProtoMsg): _179.MsgClaimDailyResponse;
            toProto(message: _179.MsgClaimDailyResponse): Uint8Array;
            toProtoMsg(message: _179.MsgClaimDailyResponse): _179.MsgClaimDailyResponseProtoMsg;
        };
        MsgClaimEarly: {
            typeUrl: string;
            encode(message: _179.MsgClaimEarly, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgClaimEarly;
            fromPartial(object: Partial<_179.MsgClaimEarly>): _179.MsgClaimEarly;
            fromAmino(object: _179.MsgClaimEarlyAmino): _179.MsgClaimEarly;
            toAmino(message: _179.MsgClaimEarly): _179.MsgClaimEarlyAmino;
            fromAminoMsg(object: _179.MsgClaimEarlyAminoMsg): _179.MsgClaimEarly;
            toAminoMsg(message: _179.MsgClaimEarly): _179.MsgClaimEarlyAminoMsg;
            fromProtoMsg(message: _179.MsgClaimEarlyProtoMsg): _179.MsgClaimEarly;
            toProto(message: _179.MsgClaimEarly): Uint8Array;
            toProtoMsg(message: _179.MsgClaimEarly): _179.MsgClaimEarlyProtoMsg;
        };
        MsgClaimEarlyResponse: {
            typeUrl: string;
            encode(_: _179.MsgClaimEarlyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgClaimEarlyResponse;
            fromPartial(_: Partial<_179.MsgClaimEarlyResponse>): _179.MsgClaimEarlyResponse;
            fromAmino(_: _179.MsgClaimEarlyResponseAmino): _179.MsgClaimEarlyResponse;
            toAmino(_: _179.MsgClaimEarlyResponse): _179.MsgClaimEarlyResponseAmino;
            fromAminoMsg(object: _179.MsgClaimEarlyResponseAminoMsg): _179.MsgClaimEarlyResponse;
            fromProtoMsg(message: _179.MsgClaimEarlyResponseProtoMsg): _179.MsgClaimEarlyResponse;
            toProto(message: _179.MsgClaimEarlyResponse): Uint8Array;
            toProtoMsg(message: _179.MsgClaimEarlyResponse): _179.MsgClaimEarlyResponseProtoMsg;
        };
        MsgCreateAirdrop: {
            typeUrl: string;
            encode(message: _179.MsgCreateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgCreateAirdrop;
            fromPartial(object: Partial<_179.MsgCreateAirdrop>): _179.MsgCreateAirdrop;
            fromAmino(object: _179.MsgCreateAirdropAmino): _179.MsgCreateAirdrop;
            toAmino(message: _179.MsgCreateAirdrop): _179.MsgCreateAirdropAmino;
            fromAminoMsg(object: _179.MsgCreateAirdropAminoMsg): _179.MsgCreateAirdrop;
            toAminoMsg(message: _179.MsgCreateAirdrop): _179.MsgCreateAirdropAminoMsg;
            fromProtoMsg(message: _179.MsgCreateAirdropProtoMsg): _179.MsgCreateAirdrop;
            toProto(message: _179.MsgCreateAirdrop): Uint8Array;
            toProtoMsg(message: _179.MsgCreateAirdrop): _179.MsgCreateAirdropProtoMsg;
        };
        MsgCreateAirdropResponse: {
            typeUrl: string;
            encode(_: _179.MsgCreateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgCreateAirdropResponse;
            fromPartial(_: Partial<_179.MsgCreateAirdropResponse>): _179.MsgCreateAirdropResponse;
            fromAmino(_: _179.MsgCreateAirdropResponseAmino): _179.MsgCreateAirdropResponse;
            toAmino(_: _179.MsgCreateAirdropResponse): _179.MsgCreateAirdropResponseAmino;
            fromAminoMsg(object: _179.MsgCreateAirdropResponseAminoMsg): _179.MsgCreateAirdropResponse;
            fromProtoMsg(message: _179.MsgCreateAirdropResponseProtoMsg): _179.MsgCreateAirdropResponse;
            toProto(message: _179.MsgCreateAirdropResponse): Uint8Array;
            toProtoMsg(message: _179.MsgCreateAirdropResponse): _179.MsgCreateAirdropResponseProtoMsg;
        };
        MsgUpdateAirdrop: {
            typeUrl: string;
            encode(message: _179.MsgUpdateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgUpdateAirdrop;
            fromPartial(object: Partial<_179.MsgUpdateAirdrop>): _179.MsgUpdateAirdrop;
            fromAmino(object: _179.MsgUpdateAirdropAmino): _179.MsgUpdateAirdrop;
            toAmino(message: _179.MsgUpdateAirdrop): _179.MsgUpdateAirdropAmino;
            fromAminoMsg(object: _179.MsgUpdateAirdropAminoMsg): _179.MsgUpdateAirdrop;
            toAminoMsg(message: _179.MsgUpdateAirdrop): _179.MsgUpdateAirdropAminoMsg;
            fromProtoMsg(message: _179.MsgUpdateAirdropProtoMsg): _179.MsgUpdateAirdrop;
            toProto(message: _179.MsgUpdateAirdrop): Uint8Array;
            toProtoMsg(message: _179.MsgUpdateAirdrop): _179.MsgUpdateAirdropProtoMsg;
        };
        MsgUpdateAirdropResponse: {
            typeUrl: string;
            encode(_: _179.MsgUpdateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgUpdateAirdropResponse;
            fromPartial(_: Partial<_179.MsgUpdateAirdropResponse>): _179.MsgUpdateAirdropResponse;
            fromAmino(_: _179.MsgUpdateAirdropResponseAmino): _179.MsgUpdateAirdropResponse;
            toAmino(_: _179.MsgUpdateAirdropResponse): _179.MsgUpdateAirdropResponseAmino;
            fromAminoMsg(object: _179.MsgUpdateAirdropResponseAminoMsg): _179.MsgUpdateAirdropResponse;
            fromProtoMsg(message: _179.MsgUpdateAirdropResponseProtoMsg): _179.MsgUpdateAirdropResponse;
            toProto(message: _179.MsgUpdateAirdropResponse): Uint8Array;
            toProtoMsg(message: _179.MsgUpdateAirdropResponse): _179.MsgUpdateAirdropResponseProtoMsg;
        };
        RawAllocation: {
            typeUrl: string;
            encode(message: _179.RawAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.RawAllocation;
            fromPartial(object: Partial<_179.RawAllocation>): _179.RawAllocation;
            fromAmino(object: _179.RawAllocationAmino): _179.RawAllocation;
            toAmino(message: _179.RawAllocation): _179.RawAllocationAmino;
            fromAminoMsg(object: _179.RawAllocationAminoMsg): _179.RawAllocation;
            fromProtoMsg(message: _179.RawAllocationProtoMsg): _179.RawAllocation;
            toProto(message: _179.RawAllocation): Uint8Array;
            toProtoMsg(message: _179.RawAllocation): _179.RawAllocationProtoMsg;
        };
        MsgAddAllocations: {
            typeUrl: string;
            encode(message: _179.MsgAddAllocations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgAddAllocations;
            fromPartial(object: Partial<_179.MsgAddAllocations>): _179.MsgAddAllocations;
            fromAmino(object: _179.MsgAddAllocationsAmino): _179.MsgAddAllocations;
            toAmino(message: _179.MsgAddAllocations): _179.MsgAddAllocationsAmino;
            fromAminoMsg(object: _179.MsgAddAllocationsAminoMsg): _179.MsgAddAllocations;
            toAminoMsg(message: _179.MsgAddAllocations): _179.MsgAddAllocationsAminoMsg;
            fromProtoMsg(message: _179.MsgAddAllocationsProtoMsg): _179.MsgAddAllocations;
            toProto(message: _179.MsgAddAllocations): Uint8Array;
            toProtoMsg(message: _179.MsgAddAllocations): _179.MsgAddAllocationsProtoMsg;
        };
        MsgAddAllocationsResponse: {
            typeUrl: string;
            encode(_: _179.MsgAddAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgAddAllocationsResponse;
            fromPartial(_: Partial<_179.MsgAddAllocationsResponse>): _179.MsgAddAllocationsResponse;
            fromAmino(_: _179.MsgAddAllocationsResponseAmino): _179.MsgAddAllocationsResponse;
            toAmino(_: _179.MsgAddAllocationsResponse): _179.MsgAddAllocationsResponseAmino;
            fromAminoMsg(object: _179.MsgAddAllocationsResponseAminoMsg): _179.MsgAddAllocationsResponse;
            fromProtoMsg(message: _179.MsgAddAllocationsResponseProtoMsg): _179.MsgAddAllocationsResponse;
            toProto(message: _179.MsgAddAllocationsResponse): Uint8Array;
            toProtoMsg(message: _179.MsgAddAllocationsResponse): _179.MsgAddAllocationsResponseProtoMsg;
        };
        MsgUpdateUserAllocation: {
            typeUrl: string;
            encode(message: _179.MsgUpdateUserAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgUpdateUserAllocation;
            fromPartial(object: Partial<_179.MsgUpdateUserAllocation>): _179.MsgUpdateUserAllocation;
            fromAmino(object: _179.MsgUpdateUserAllocationAmino): _179.MsgUpdateUserAllocation;
            toAmino(message: _179.MsgUpdateUserAllocation): _179.MsgUpdateUserAllocationAmino;
            fromAminoMsg(object: _179.MsgUpdateUserAllocationAminoMsg): _179.MsgUpdateUserAllocation;
            toAminoMsg(message: _179.MsgUpdateUserAllocation): _179.MsgUpdateUserAllocationAminoMsg;
            fromProtoMsg(message: _179.MsgUpdateUserAllocationProtoMsg): _179.MsgUpdateUserAllocation;
            toProto(message: _179.MsgUpdateUserAllocation): Uint8Array;
            toProtoMsg(message: _179.MsgUpdateUserAllocation): _179.MsgUpdateUserAllocationProtoMsg;
        };
        MsgUpdateUserAllocationResponse: {
            typeUrl: string;
            encode(_: _179.MsgUpdateUserAllocationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgUpdateUserAllocationResponse;
            fromPartial(_: Partial<_179.MsgUpdateUserAllocationResponse>): _179.MsgUpdateUserAllocationResponse;
            fromAmino(_: _179.MsgUpdateUserAllocationResponseAmino): _179.MsgUpdateUserAllocationResponse;
            toAmino(_: _179.MsgUpdateUserAllocationResponse): _179.MsgUpdateUserAllocationResponseAmino;
            fromAminoMsg(object: _179.MsgUpdateUserAllocationResponseAminoMsg): _179.MsgUpdateUserAllocationResponse;
            fromProtoMsg(message: _179.MsgUpdateUserAllocationResponseProtoMsg): _179.MsgUpdateUserAllocationResponse;
            toProto(message: _179.MsgUpdateUserAllocationResponse): Uint8Array;
            toProtoMsg(message: _179.MsgUpdateUserAllocationResponse): _179.MsgUpdateUserAllocationResponseProtoMsg;
        };
        MsgLinkAddresses: {
            typeUrl: string;
            encode(message: _179.MsgLinkAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgLinkAddresses;
            fromPartial(object: Partial<_179.MsgLinkAddresses>): _179.MsgLinkAddresses;
            fromAmino(object: _179.MsgLinkAddressesAmino): _179.MsgLinkAddresses;
            toAmino(message: _179.MsgLinkAddresses): _179.MsgLinkAddressesAmino;
            fromAminoMsg(object: _179.MsgLinkAddressesAminoMsg): _179.MsgLinkAddresses;
            toAminoMsg(message: _179.MsgLinkAddresses): _179.MsgLinkAddressesAminoMsg;
            fromProtoMsg(message: _179.MsgLinkAddressesProtoMsg): _179.MsgLinkAddresses;
            toProto(message: _179.MsgLinkAddresses): Uint8Array;
            toProtoMsg(message: _179.MsgLinkAddresses): _179.MsgLinkAddressesProtoMsg;
        };
        MsgLinkAddressesResponse: {
            typeUrl: string;
            encode(_: _179.MsgLinkAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgLinkAddressesResponse;
            fromPartial(_: Partial<_179.MsgLinkAddressesResponse>): _179.MsgLinkAddressesResponse;
            fromAmino(_: _179.MsgLinkAddressesResponseAmino): _179.MsgLinkAddressesResponse;
            toAmino(_: _179.MsgLinkAddressesResponse): _179.MsgLinkAddressesResponseAmino;
            fromAminoMsg(object: _179.MsgLinkAddressesResponseAminoMsg): _179.MsgLinkAddressesResponse;
            fromProtoMsg(message: _179.MsgLinkAddressesResponseProtoMsg): _179.MsgLinkAddressesResponse;
            toProto(message: _179.MsgLinkAddressesResponse): Uint8Array;
            toProtoMsg(message: _179.MsgLinkAddressesResponse): _179.MsgLinkAddressesResponseProtoMsg;
        };
        QueryAirdropRequest: {
            typeUrl: string;
            encode(message: _178.QueryAirdropRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryAirdropRequest;
            fromPartial(object: Partial<_178.QueryAirdropRequest>): _178.QueryAirdropRequest;
            fromAmino(object: _178.QueryAirdropRequestAmino): _178.QueryAirdropRequest;
            toAmino(message: _178.QueryAirdropRequest): _178.QueryAirdropRequestAmino;
            fromAminoMsg(object: _178.QueryAirdropRequestAminoMsg): _178.QueryAirdropRequest;
            fromProtoMsg(message: _178.QueryAirdropRequestProtoMsg): _178.QueryAirdropRequest;
            toProto(message: _178.QueryAirdropRequest): Uint8Array;
            toProtoMsg(message: _178.QueryAirdropRequest): _178.QueryAirdropRequestProtoMsg;
        };
        QueryAirdropResponse: {
            typeUrl: string;
            encode(message: _178.QueryAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryAirdropResponse;
            fromPartial(object: Partial<_178.QueryAirdropResponse>): _178.QueryAirdropResponse;
            fromAmino(object: _178.QueryAirdropResponseAmino): _178.QueryAirdropResponse;
            toAmino(message: _178.QueryAirdropResponse): _178.QueryAirdropResponseAmino;
            fromAminoMsg(object: _178.QueryAirdropResponseAminoMsg): _178.QueryAirdropResponse;
            fromProtoMsg(message: _178.QueryAirdropResponseProtoMsg): _178.QueryAirdropResponse;
            toProto(message: _178.QueryAirdropResponse): Uint8Array;
            toProtoMsg(message: _178.QueryAirdropResponse): _178.QueryAirdropResponseProtoMsg;
        };
        QueryAllAirdropsRequest: {
            typeUrl: string;
            encode(_: _178.QueryAllAirdropsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryAllAirdropsRequest;
            fromPartial(_: Partial<_178.QueryAllAirdropsRequest>): _178.QueryAllAirdropsRequest;
            fromAmino(_: _178.QueryAllAirdropsRequestAmino): _178.QueryAllAirdropsRequest;
            toAmino(_: _178.QueryAllAirdropsRequest): _178.QueryAllAirdropsRequestAmino;
            fromAminoMsg(object: _178.QueryAllAirdropsRequestAminoMsg): _178.QueryAllAirdropsRequest;
            fromProtoMsg(message: _178.QueryAllAirdropsRequestProtoMsg): _178.QueryAllAirdropsRequest;
            toProto(message: _178.QueryAllAirdropsRequest): Uint8Array;
            toProtoMsg(message: _178.QueryAllAirdropsRequest): _178.QueryAllAirdropsRequestProtoMsg;
        };
        QueryAllAirdropsResponse: {
            typeUrl: string;
            encode(message: _178.QueryAllAirdropsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryAllAirdropsResponse;
            fromPartial(object: Partial<_178.QueryAllAirdropsResponse>): _178.QueryAllAirdropsResponse;
            fromAmino(object: _178.QueryAllAirdropsResponseAmino): _178.QueryAllAirdropsResponse;
            toAmino(message: _178.QueryAllAirdropsResponse): _178.QueryAllAirdropsResponseAmino;
            fromAminoMsg(object: _178.QueryAllAirdropsResponseAminoMsg): _178.QueryAllAirdropsResponse;
            fromProtoMsg(message: _178.QueryAllAirdropsResponseProtoMsg): _178.QueryAllAirdropsResponse;
            toProto(message: _178.QueryAllAirdropsResponse): Uint8Array;
            toProtoMsg(message: _178.QueryAllAirdropsResponse): _178.QueryAllAirdropsResponseProtoMsg;
        };
        QueryUserAllocationRequest: {
            typeUrl: string;
            encode(message: _178.QueryUserAllocationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryUserAllocationRequest;
            fromPartial(object: Partial<_178.QueryUserAllocationRequest>): _178.QueryUserAllocationRequest;
            fromAmino(object: _178.QueryUserAllocationRequestAmino): _178.QueryUserAllocationRequest;
            toAmino(message: _178.QueryUserAllocationRequest): _178.QueryUserAllocationRequestAmino;
            fromAminoMsg(object: _178.QueryUserAllocationRequestAminoMsg): _178.QueryUserAllocationRequest;
            fromProtoMsg(message: _178.QueryUserAllocationRequestProtoMsg): _178.QueryUserAllocationRequest;
            toProto(message: _178.QueryUserAllocationRequest): Uint8Array;
            toProtoMsg(message: _178.QueryUserAllocationRequest): _178.QueryUserAllocationRequestProtoMsg;
        };
        QueryUserAllocationResponse: {
            typeUrl: string;
            encode(message: _178.QueryUserAllocationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryUserAllocationResponse;
            fromPartial(object: Partial<_178.QueryUserAllocationResponse>): _178.QueryUserAllocationResponse;
            fromAmino(object: _178.QueryUserAllocationResponseAmino): _178.QueryUserAllocationResponse;
            toAmino(message: _178.QueryUserAllocationResponse): _178.QueryUserAllocationResponseAmino;
            fromAminoMsg(object: _178.QueryUserAllocationResponseAminoMsg): _178.QueryUserAllocationResponse;
            fromProtoMsg(message: _178.QueryUserAllocationResponseProtoMsg): _178.QueryUserAllocationResponse;
            toProto(message: _178.QueryUserAllocationResponse): Uint8Array;
            toProtoMsg(message: _178.QueryUserAllocationResponse): _178.QueryUserAllocationResponseProtoMsg;
        };
        QueryUserAllocationsRequest: {
            typeUrl: string;
            encode(message: _178.QueryUserAllocationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryUserAllocationsRequest;
            fromPartial(object: Partial<_178.QueryUserAllocationsRequest>): _178.QueryUserAllocationsRequest;
            fromAmino(object: _178.QueryUserAllocationsRequestAmino): _178.QueryUserAllocationsRequest;
            toAmino(message: _178.QueryUserAllocationsRequest): _178.QueryUserAllocationsRequestAmino;
            fromAminoMsg(object: _178.QueryUserAllocationsRequestAminoMsg): _178.QueryUserAllocationsRequest;
            fromProtoMsg(message: _178.QueryUserAllocationsRequestProtoMsg): _178.QueryUserAllocationsRequest;
            toProto(message: _178.QueryUserAllocationsRequest): Uint8Array;
            toProtoMsg(message: _178.QueryUserAllocationsRequest): _178.QueryUserAllocationsRequestProtoMsg;
        };
        QueryUserAllocationsResponse: {
            typeUrl: string;
            encode(message: _178.QueryUserAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryUserAllocationsResponse;
            fromPartial(object: Partial<_178.QueryUserAllocationsResponse>): _178.QueryUserAllocationsResponse;
            fromAmino(object: _178.QueryUserAllocationsResponseAmino): _178.QueryUserAllocationsResponse;
            toAmino(message: _178.QueryUserAllocationsResponse): _178.QueryUserAllocationsResponseAmino;
            fromAminoMsg(object: _178.QueryUserAllocationsResponseAminoMsg): _178.QueryUserAllocationsResponse;
            fromProtoMsg(message: _178.QueryUserAllocationsResponseProtoMsg): _178.QueryUserAllocationsResponse;
            toProto(message: _178.QueryUserAllocationsResponse): Uint8Array;
            toProtoMsg(message: _178.QueryUserAllocationsResponse): _178.QueryUserAllocationsResponseProtoMsg;
        };
        QueryAllAllocationsRequest: {
            typeUrl: string;
            encode(message: _178.QueryAllAllocationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryAllAllocationsRequest;
            fromPartial(object: Partial<_178.QueryAllAllocationsRequest>): _178.QueryAllAllocationsRequest;
            fromAmino(object: _178.QueryAllAllocationsRequestAmino): _178.QueryAllAllocationsRequest;
            toAmino(message: _178.QueryAllAllocationsRequest): _178.QueryAllAllocationsRequestAmino;
            fromAminoMsg(object: _178.QueryAllAllocationsRequestAminoMsg): _178.QueryAllAllocationsRequest;
            fromProtoMsg(message: _178.QueryAllAllocationsRequestProtoMsg): _178.QueryAllAllocationsRequest;
            toProto(message: _178.QueryAllAllocationsRequest): Uint8Array;
            toProtoMsg(message: _178.QueryAllAllocationsRequest): _178.QueryAllAllocationsRequestProtoMsg;
        };
        QueryAllAllocationsResponse: {
            typeUrl: string;
            encode(message: _178.QueryAllAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryAllAllocationsResponse;
            fromPartial(object: Partial<_178.QueryAllAllocationsResponse>): _178.QueryAllAllocationsResponse;
            fromAmino(object: _178.QueryAllAllocationsResponseAmino): _178.QueryAllAllocationsResponse;
            toAmino(message: _178.QueryAllAllocationsResponse): _178.QueryAllAllocationsResponseAmino;
            fromAminoMsg(object: _178.QueryAllAllocationsResponseAminoMsg): _178.QueryAllAllocationsResponse;
            fromProtoMsg(message: _178.QueryAllAllocationsResponseProtoMsg): _178.QueryAllAllocationsResponse;
            toProto(message: _178.QueryAllAllocationsResponse): Uint8Array;
            toProtoMsg(message: _178.QueryAllAllocationsResponse): _178.QueryAllAllocationsResponseProtoMsg;
        };
        QueryUserSummaryRequest: {
            typeUrl: string;
            encode(message: _178.QueryUserSummaryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryUserSummaryRequest;
            fromPartial(object: Partial<_178.QueryUserSummaryRequest>): _178.QueryUserSummaryRequest;
            fromAmino(object: _178.QueryUserSummaryRequestAmino): _178.QueryUserSummaryRequest;
            toAmino(message: _178.QueryUserSummaryRequest): _178.QueryUserSummaryRequestAmino;
            fromAminoMsg(object: _178.QueryUserSummaryRequestAminoMsg): _178.QueryUserSummaryRequest;
            fromProtoMsg(message: _178.QueryUserSummaryRequestProtoMsg): _178.QueryUserSummaryRequest;
            toProto(message: _178.QueryUserSummaryRequest): Uint8Array;
            toProtoMsg(message: _178.QueryUserSummaryRequest): _178.QueryUserSummaryRequestProtoMsg;
        };
        QueryUserSummaryResponse: {
            typeUrl: string;
            encode(message: _178.QueryUserSummaryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryUserSummaryResponse;
            fromPartial(object: Partial<_178.QueryUserSummaryResponse>): _178.QueryUserSummaryResponse;
            fromAmino(object: _178.QueryUserSummaryResponseAmino): _178.QueryUserSummaryResponse;
            toAmino(message: _178.QueryUserSummaryResponse): _178.QueryUserSummaryResponseAmino;
            fromAminoMsg(object: _178.QueryUserSummaryResponseAminoMsg): _178.QueryUserSummaryResponse;
            fromProtoMsg(message: _178.QueryUserSummaryResponseProtoMsg): _178.QueryUserSummaryResponse;
            toProto(message: _178.QueryUserSummaryResponse): Uint8Array;
            toProtoMsg(message: _178.QueryUserSummaryResponse): _178.QueryUserSummaryResponseProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _177.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.GenesisState;
            fromPartial(object: Partial<_177.GenesisState>): _177.GenesisState;
            fromAmino(object: _177.GenesisStateAmino): _177.GenesisState;
            toAmino(message: _177.GenesisState): _177.GenesisStateAmino;
            fromAminoMsg(object: _177.GenesisStateAminoMsg): _177.GenesisState;
            fromProtoMsg(message: _177.GenesisStateProtoMsg): _177.GenesisState;
            toProto(message: _177.GenesisState): Uint8Array;
            toProtoMsg(message: _177.GenesisState): _177.GenesisStateProtoMsg;
        };
        claimTypeFromJSON(object: any): _176.ClaimType;
        claimTypeToJSON(object: _176.ClaimType): string;
        ClaimType: typeof _176.ClaimType;
        ClaimTypeSDKType: typeof _176.ClaimType;
        ClaimTypeAmino: typeof _176.ClaimType;
        Params: {
            typeUrl: string;
            encode(message: _176.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.Params;
            fromPartial(object: Partial<_176.Params>): _176.Params;
            fromAmino(object: _176.ParamsAmino): _176.Params;
            toAmino(message: _176.Params): _176.ParamsAmino;
            fromAminoMsg(object: _176.ParamsAminoMsg): _176.Params;
            fromProtoMsg(message: _176.ParamsProtoMsg): _176.Params;
            toProto(message: _176.Params): Uint8Array;
            toProtoMsg(message: _176.Params): _176.ParamsProtoMsg;
        };
        UserAllocation: {
            typeUrl: string;
            encode(message: _176.UserAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.UserAllocation;
            fromPartial(object: Partial<_176.UserAllocation>): _176.UserAllocation;
            fromAmino(object: _176.UserAllocationAmino): _176.UserAllocation;
            toAmino(message: _176.UserAllocation): _176.UserAllocationAmino;
            fromAminoMsg(object: _176.UserAllocationAminoMsg): _176.UserAllocation;
            fromProtoMsg(message: _176.UserAllocationProtoMsg): _176.UserAllocation;
            toProto(message: _176.UserAllocation): Uint8Array;
            toProtoMsg(message: _176.UserAllocation): _176.UserAllocationProtoMsg;
        };
        Airdrop: {
            typeUrl: string;
            encode(message: _176.Airdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.Airdrop;
            fromPartial(object: Partial<_176.Airdrop>): _176.Airdrop;
            fromAmino(object: _176.AirdropAmino): _176.Airdrop;
            toAmino(message: _176.Airdrop): _176.AirdropAmino;
            fromAminoMsg(object: _176.AirdropAminoMsg): _176.Airdrop;
            fromProtoMsg(message: _176.AirdropProtoMsg): _176.Airdrop;
            toProto(message: _176.Airdrop): Uint8Array;
            toProtoMsg(message: _176.Airdrop): _176.AirdropProtoMsg;
        };
    };
    const auction: {
        MsgClientImpl: typeof _388.MsgClientImpl;
        QueryClientImpl: typeof _374.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            auction(request: _182.QueryAuctionRequest): Promise<_182.QueryAuctionResponse>;
            auctions(request?: _182.QueryAuctionsRequest): Promise<_182.QueryAuctionsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                placeBid(value: _183.MsgPlaceBid): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAuction(value: _183.MsgCreateAuction): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateAuction(value: _183.MsgUpdateAuction): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                placeBid(value: _183.MsgPlaceBid): {
                    typeUrl: string;
                    value: _183.MsgPlaceBid;
                };
                createAuction(value: _183.MsgCreateAuction): {
                    typeUrl: string;
                    value: _183.MsgCreateAuction;
                };
                updateAuction(value: _183.MsgUpdateAuction): {
                    typeUrl: string;
                    value: _183.MsgUpdateAuction;
                };
            };
            fromPartial: {
                placeBid(value: _183.MsgPlaceBid): {
                    typeUrl: string;
                    value: _183.MsgPlaceBid;
                };
                createAuction(value: _183.MsgCreateAuction): {
                    typeUrl: string;
                    value: _183.MsgCreateAuction;
                };
                updateAuction(value: _183.MsgUpdateAuction): {
                    typeUrl: string;
                    value: _183.MsgUpdateAuction;
                };
            };
        };
        AminoConverter: {
            "/stride.auction.MsgPlaceBid": {
                aminoType: string;
                toAmino: (message: _183.MsgPlaceBid) => _183.MsgPlaceBidAmino;
                fromAmino: (object: _183.MsgPlaceBidAmino) => _183.MsgPlaceBid;
            };
            "/stride.auction.MsgCreateAuction": {
                aminoType: string;
                toAmino: (message: _183.MsgCreateAuction) => _183.MsgCreateAuctionAmino;
                fromAmino: (object: _183.MsgCreateAuctionAmino) => _183.MsgCreateAuction;
            };
            "/stride.auction.MsgUpdateAuction": {
                aminoType: string;
                toAmino: (message: _183.MsgUpdateAuction) => _183.MsgUpdateAuctionAmino;
                fromAmino: (object: _183.MsgUpdateAuctionAmino) => _183.MsgUpdateAuction;
            };
        };
        MsgPlaceBid: {
            typeUrl: string;
            encode(message: _183.MsgPlaceBid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgPlaceBid;
            fromPartial(object: Partial<_183.MsgPlaceBid>): _183.MsgPlaceBid;
            fromAmino(object: _183.MsgPlaceBidAmino): _183.MsgPlaceBid;
            toAmino(message: _183.MsgPlaceBid): _183.MsgPlaceBidAmino;
            fromAminoMsg(object: _183.MsgPlaceBidAminoMsg): _183.MsgPlaceBid;
            toAminoMsg(message: _183.MsgPlaceBid): _183.MsgPlaceBidAminoMsg;
            fromProtoMsg(message: _183.MsgPlaceBidProtoMsg): _183.MsgPlaceBid;
            toProto(message: _183.MsgPlaceBid): Uint8Array;
            toProtoMsg(message: _183.MsgPlaceBid): _183.MsgPlaceBidProtoMsg;
        };
        MsgPlaceBidResponse: {
            typeUrl: string;
            encode(_: _183.MsgPlaceBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgPlaceBidResponse;
            fromPartial(_: Partial<_183.MsgPlaceBidResponse>): _183.MsgPlaceBidResponse;
            fromAmino(_: _183.MsgPlaceBidResponseAmino): _183.MsgPlaceBidResponse;
            toAmino(_: _183.MsgPlaceBidResponse): _183.MsgPlaceBidResponseAmino;
            fromAminoMsg(object: _183.MsgPlaceBidResponseAminoMsg): _183.MsgPlaceBidResponse;
            fromProtoMsg(message: _183.MsgPlaceBidResponseProtoMsg): _183.MsgPlaceBidResponse;
            toProto(message: _183.MsgPlaceBidResponse): Uint8Array;
            toProtoMsg(message: _183.MsgPlaceBidResponse): _183.MsgPlaceBidResponseProtoMsg;
        };
        MsgCreateAuction: {
            typeUrl: string;
            encode(message: _183.MsgCreateAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgCreateAuction;
            fromPartial(object: Partial<_183.MsgCreateAuction>): _183.MsgCreateAuction;
            fromAmino(object: _183.MsgCreateAuctionAmino): _183.MsgCreateAuction;
            toAmino(message: _183.MsgCreateAuction): _183.MsgCreateAuctionAmino;
            fromAminoMsg(object: _183.MsgCreateAuctionAminoMsg): _183.MsgCreateAuction;
            toAminoMsg(message: _183.MsgCreateAuction): _183.MsgCreateAuctionAminoMsg;
            fromProtoMsg(message: _183.MsgCreateAuctionProtoMsg): _183.MsgCreateAuction;
            toProto(message: _183.MsgCreateAuction): Uint8Array;
            toProtoMsg(message: _183.MsgCreateAuction): _183.MsgCreateAuctionProtoMsg;
        };
        MsgCreateAuctionResponse: {
            typeUrl: string;
            encode(_: _183.MsgCreateAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgCreateAuctionResponse;
            fromPartial(_: Partial<_183.MsgCreateAuctionResponse>): _183.MsgCreateAuctionResponse;
            fromAmino(_: _183.MsgCreateAuctionResponseAmino): _183.MsgCreateAuctionResponse;
            toAmino(_: _183.MsgCreateAuctionResponse): _183.MsgCreateAuctionResponseAmino;
            fromAminoMsg(object: _183.MsgCreateAuctionResponseAminoMsg): _183.MsgCreateAuctionResponse;
            fromProtoMsg(message: _183.MsgCreateAuctionResponseProtoMsg): _183.MsgCreateAuctionResponse;
            toProto(message: _183.MsgCreateAuctionResponse): Uint8Array;
            toProtoMsg(message: _183.MsgCreateAuctionResponse): _183.MsgCreateAuctionResponseProtoMsg;
        };
        MsgUpdateAuction: {
            typeUrl: string;
            encode(message: _183.MsgUpdateAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgUpdateAuction;
            fromPartial(object: Partial<_183.MsgUpdateAuction>): _183.MsgUpdateAuction;
            fromAmino(object: _183.MsgUpdateAuctionAmino): _183.MsgUpdateAuction;
            toAmino(message: _183.MsgUpdateAuction): _183.MsgUpdateAuctionAmino;
            fromAminoMsg(object: _183.MsgUpdateAuctionAminoMsg): _183.MsgUpdateAuction;
            toAminoMsg(message: _183.MsgUpdateAuction): _183.MsgUpdateAuctionAminoMsg;
            fromProtoMsg(message: _183.MsgUpdateAuctionProtoMsg): _183.MsgUpdateAuction;
            toProto(message: _183.MsgUpdateAuction): Uint8Array;
            toProtoMsg(message: _183.MsgUpdateAuction): _183.MsgUpdateAuctionProtoMsg;
        };
        MsgUpdateAuctionResponse: {
            typeUrl: string;
            encode(_: _183.MsgUpdateAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgUpdateAuctionResponse;
            fromPartial(_: Partial<_183.MsgUpdateAuctionResponse>): _183.MsgUpdateAuctionResponse;
            fromAmino(_: _183.MsgUpdateAuctionResponseAmino): _183.MsgUpdateAuctionResponse;
            toAmino(_: _183.MsgUpdateAuctionResponse): _183.MsgUpdateAuctionResponseAmino;
            fromAminoMsg(object: _183.MsgUpdateAuctionResponseAminoMsg): _183.MsgUpdateAuctionResponse;
            fromProtoMsg(message: _183.MsgUpdateAuctionResponseProtoMsg): _183.MsgUpdateAuctionResponse;
            toProto(message: _183.MsgUpdateAuctionResponse): Uint8Array;
            toProtoMsg(message: _183.MsgUpdateAuctionResponse): _183.MsgUpdateAuctionResponseProtoMsg;
        };
        QueryAuctionRequest: {
            typeUrl: string;
            encode(message: _182.QueryAuctionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.QueryAuctionRequest;
            fromPartial(object: Partial<_182.QueryAuctionRequest>): _182.QueryAuctionRequest;
            fromAmino(object: _182.QueryAuctionRequestAmino): _182.QueryAuctionRequest;
            toAmino(message: _182.QueryAuctionRequest): _182.QueryAuctionRequestAmino;
            fromAminoMsg(object: _182.QueryAuctionRequestAminoMsg): _182.QueryAuctionRequest;
            fromProtoMsg(message: _182.QueryAuctionRequestProtoMsg): _182.QueryAuctionRequest;
            toProto(message: _182.QueryAuctionRequest): Uint8Array;
            toProtoMsg(message: _182.QueryAuctionRequest): _182.QueryAuctionRequestProtoMsg;
        };
        QueryAuctionResponse: {
            typeUrl: string;
            encode(message: _182.QueryAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.QueryAuctionResponse;
            fromPartial(object: Partial<_182.QueryAuctionResponse>): _182.QueryAuctionResponse;
            fromAmino(object: _182.QueryAuctionResponseAmino): _182.QueryAuctionResponse;
            toAmino(message: _182.QueryAuctionResponse): _182.QueryAuctionResponseAmino;
            fromAminoMsg(object: _182.QueryAuctionResponseAminoMsg): _182.QueryAuctionResponse;
            fromProtoMsg(message: _182.QueryAuctionResponseProtoMsg): _182.QueryAuctionResponse;
            toProto(message: _182.QueryAuctionResponse): Uint8Array;
            toProtoMsg(message: _182.QueryAuctionResponse): _182.QueryAuctionResponseProtoMsg;
        };
        QueryAuctionsRequest: {
            typeUrl: string;
            encode(message: _182.QueryAuctionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.QueryAuctionsRequest;
            fromPartial(object: Partial<_182.QueryAuctionsRequest>): _182.QueryAuctionsRequest;
            fromAmino(object: _182.QueryAuctionsRequestAmino): _182.QueryAuctionsRequest;
            toAmino(message: _182.QueryAuctionsRequest): _182.QueryAuctionsRequestAmino;
            fromAminoMsg(object: _182.QueryAuctionsRequestAminoMsg): _182.QueryAuctionsRequest;
            fromProtoMsg(message: _182.QueryAuctionsRequestProtoMsg): _182.QueryAuctionsRequest;
            toProto(message: _182.QueryAuctionsRequest): Uint8Array;
            toProtoMsg(message: _182.QueryAuctionsRequest): _182.QueryAuctionsRequestProtoMsg;
        };
        QueryAuctionsResponse: {
            typeUrl: string;
            encode(message: _182.QueryAuctionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.QueryAuctionsResponse;
            fromPartial(object: Partial<_182.QueryAuctionsResponse>): _182.QueryAuctionsResponse;
            fromAmino(object: _182.QueryAuctionsResponseAmino): _182.QueryAuctionsResponse;
            toAmino(message: _182.QueryAuctionsResponse): _182.QueryAuctionsResponseAmino;
            fromAminoMsg(object: _182.QueryAuctionsResponseAminoMsg): _182.QueryAuctionsResponse;
            fromProtoMsg(message: _182.QueryAuctionsResponseProtoMsg): _182.QueryAuctionsResponse;
            toProto(message: _182.QueryAuctionsResponse): Uint8Array;
            toProtoMsg(message: _182.QueryAuctionsResponse): _182.QueryAuctionsResponseProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _181.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.GenesisState;
            fromPartial(object: Partial<_181.GenesisState>): _181.GenesisState;
            fromAmino(object: _181.GenesisStateAmino): _181.GenesisState;
            toAmino(message: _181.GenesisState): _181.GenesisStateAmino;
            fromAminoMsg(object: _181.GenesisStateAminoMsg): _181.GenesisState;
            fromProtoMsg(message: _181.GenesisStateProtoMsg): _181.GenesisState;
            toProto(message: _181.GenesisState): Uint8Array;
            toProtoMsg(message: _181.GenesisState): _181.GenesisStateProtoMsg;
        };
        auctionTypeFromJSON(object: any): _180.AuctionType;
        auctionTypeToJSON(object: _180.AuctionType): string;
        AuctionType: typeof _180.AuctionType;
        AuctionTypeSDKType: typeof _180.AuctionType;
        AuctionTypeAmino: typeof _180.AuctionType;
        Params: {
            typeUrl: string;
            encode(_: _180.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.Params;
            fromPartial(_: Partial<_180.Params>): _180.Params;
            fromAmino(_: _180.ParamsAmino): _180.Params;
            toAmino(_: _180.Params): _180.ParamsAmino;
            fromAminoMsg(object: _180.ParamsAminoMsg): _180.Params;
            fromProtoMsg(message: _180.ParamsProtoMsg): _180.Params;
            toProto(message: _180.Params): Uint8Array;
            toProtoMsg(message: _180.Params): _180.ParamsProtoMsg;
        };
        Auction: {
            typeUrl: string;
            encode(message: _180.Auction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.Auction;
            fromPartial(object: Partial<_180.Auction>): _180.Auction;
            fromAmino(object: _180.AuctionAmino): _180.Auction;
            toAmino(message: _180.Auction): _180.AuctionAmino;
            fromAminoMsg(object: _180.AuctionAminoMsg): _180.Auction;
            fromProtoMsg(message: _180.AuctionProtoMsg): _180.Auction;
            toProto(message: _180.Auction): Uint8Array;
            toProtoMsg(message: _180.Auction): _180.AuctionProtoMsg;
        };
    };
    const autopilot: {
        QueryClientImpl: typeof _375.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _186.QueryParamsRequest): Promise<_186.QueryParamsResponse>;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _186.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryParamsRequest;
            fromPartial(_: Partial<_186.QueryParamsRequest>): _186.QueryParamsRequest;
            fromAmino(_: _186.QueryParamsRequestAmino): _186.QueryParamsRequest;
            toAmino(_: _186.QueryParamsRequest): _186.QueryParamsRequestAmino;
            fromAminoMsg(object: _186.QueryParamsRequestAminoMsg): _186.QueryParamsRequest;
            fromProtoMsg(message: _186.QueryParamsRequestProtoMsg): _186.QueryParamsRequest;
            toProto(message: _186.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _186.QueryParamsRequest): _186.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _186.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryParamsResponse;
            fromPartial(object: Partial<_186.QueryParamsResponse>): _186.QueryParamsResponse;
            fromAmino(object: _186.QueryParamsResponseAmino): _186.QueryParamsResponse;
            toAmino(message: _186.QueryParamsResponse): _186.QueryParamsResponseAmino;
            fromAminoMsg(object: _186.QueryParamsResponseAminoMsg): _186.QueryParamsResponse;
            fromProtoMsg(message: _186.QueryParamsResponseProtoMsg): _186.QueryParamsResponse;
            toProto(message: _186.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _186.QueryParamsResponse): _186.QueryParamsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _185.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.Params;
            fromPartial(object: Partial<_185.Params>): _185.Params;
            fromAmino(object: _185.ParamsAmino): _185.Params;
            toAmino(message: _185.Params): _185.ParamsAmino;
            fromAminoMsg(object: _185.ParamsAminoMsg): _185.Params;
            fromProtoMsg(message: _185.ParamsProtoMsg): _185.Params;
            toProto(message: _185.Params): Uint8Array;
            toProtoMsg(message: _185.Params): _185.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _184.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.GenesisState;
            fromPartial(object: Partial<_184.GenesisState>): _184.GenesisState;
            fromAmino(object: _184.GenesisStateAmino): _184.GenesisState;
            toAmino(message: _184.GenesisState): _184.GenesisStateAmino;
            fromAminoMsg(object: _184.GenesisStateAminoMsg): _184.GenesisState;
            fromProtoMsg(message: _184.GenesisStateProtoMsg): _184.GenesisState;
            toProto(message: _184.GenesisState): Uint8Array;
            toProtoMsg(message: _184.GenesisState): _184.GenesisStateProtoMsg;
        };
    };
    const claim: {
        MsgClientImpl: typeof _389.MsgClientImpl;
        QueryClientImpl: typeof _376.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            distributorAccountBalance(request: _190.QueryDistributorAccountBalanceRequest): Promise<_190.QueryDistributorAccountBalanceResponse>;
            params(request?: _190.QueryParamsRequest): Promise<_190.QueryParamsResponse>;
            claimRecord(request: _190.QueryClaimRecordRequest): Promise<_190.QueryClaimRecordResponse>;
            claimableForAction(request: _190.QueryClaimableForActionRequest): Promise<_190.QueryClaimableForActionResponse>;
            totalClaimable(request: _190.QueryTotalClaimableRequest): Promise<_190.QueryTotalClaimableResponse>;
            userVestings(request: _190.QueryUserVestingsRequest): Promise<_190.QueryUserVestingsResponse>;
            claimStatus(request: _190.QueryClaimStatusRequest): Promise<_190.QueryClaimStatusResponse>;
            claimMetadata(request?: _190.QueryClaimMetadataRequest): Promise<_190.QueryClaimMetadataResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                setAirdropAllocations(value: _191.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimFreeAmount(value: _191.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAirdrop(value: _191.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteAirdrop(value: _191.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                setAirdropAllocations(value: _191.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _191.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _191.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _191.MsgClaimFreeAmount;
                };
                createAirdrop(value: _191.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _191.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _191.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _191.MsgDeleteAirdrop;
                };
            };
            fromPartial: {
                setAirdropAllocations(value: _191.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _191.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _191.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _191.MsgClaimFreeAmount;
                };
                createAirdrop(value: _191.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _191.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _191.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _191.MsgDeleteAirdrop;
                };
            };
        };
        AminoConverter: {
            "/stride.claim.MsgSetAirdropAllocations": {
                aminoType: string;
                toAmino: (message: _191.MsgSetAirdropAllocations) => _191.MsgSetAirdropAllocationsAmino;
                fromAmino: (object: _191.MsgSetAirdropAllocationsAmino) => _191.MsgSetAirdropAllocations;
            };
            "/stride.claim.MsgClaimFreeAmount": {
                aminoType: string;
                toAmino: (message: _191.MsgClaimFreeAmount) => _191.MsgClaimFreeAmountAmino;
                fromAmino: (object: _191.MsgClaimFreeAmountAmino) => _191.MsgClaimFreeAmount;
            };
            "/stride.claim.MsgCreateAirdrop": {
                aminoType: string;
                toAmino: (message: _191.MsgCreateAirdrop) => _191.MsgCreateAirdropAmino;
                fromAmino: (object: _191.MsgCreateAirdropAmino) => _191.MsgCreateAirdrop;
            };
            "/stride.claim.MsgDeleteAirdrop": {
                aminoType: string;
                toAmino: (message: _191.MsgDeleteAirdrop) => _191.MsgDeleteAirdropAmino;
                fromAmino: (object: _191.MsgDeleteAirdropAmino) => _191.MsgDeleteAirdrop;
            };
        };
        MsgSetAirdropAllocations: {
            typeUrl: string;
            encode(message: _191.MsgSetAirdropAllocations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.MsgSetAirdropAllocations;
            fromPartial(object: Partial<_191.MsgSetAirdropAllocations>): _191.MsgSetAirdropAllocations;
            fromAmino(object: _191.MsgSetAirdropAllocationsAmino): _191.MsgSetAirdropAllocations;
            toAmino(message: _191.MsgSetAirdropAllocations): _191.MsgSetAirdropAllocationsAmino;
            fromAminoMsg(object: _191.MsgSetAirdropAllocationsAminoMsg): _191.MsgSetAirdropAllocations;
            fromProtoMsg(message: _191.MsgSetAirdropAllocationsProtoMsg): _191.MsgSetAirdropAllocations;
            toProto(message: _191.MsgSetAirdropAllocations): Uint8Array;
            toProtoMsg(message: _191.MsgSetAirdropAllocations): _191.MsgSetAirdropAllocationsProtoMsg;
        };
        MsgSetAirdropAllocationsResponse: {
            typeUrl: string;
            encode(_: _191.MsgSetAirdropAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.MsgSetAirdropAllocationsResponse;
            fromPartial(_: Partial<_191.MsgSetAirdropAllocationsResponse>): _191.MsgSetAirdropAllocationsResponse;
            fromAmino(_: _191.MsgSetAirdropAllocationsResponseAmino): _191.MsgSetAirdropAllocationsResponse;
            toAmino(_: _191.MsgSetAirdropAllocationsResponse): _191.MsgSetAirdropAllocationsResponseAmino;
            fromAminoMsg(object: _191.MsgSetAirdropAllocationsResponseAminoMsg): _191.MsgSetAirdropAllocationsResponse;
            fromProtoMsg(message: _191.MsgSetAirdropAllocationsResponseProtoMsg): _191.MsgSetAirdropAllocationsResponse;
            toProto(message: _191.MsgSetAirdropAllocationsResponse): Uint8Array;
            toProtoMsg(message: _191.MsgSetAirdropAllocationsResponse): _191.MsgSetAirdropAllocationsResponseProtoMsg;
        };
        MsgClaimFreeAmount: {
            typeUrl: string;
            encode(message: _191.MsgClaimFreeAmount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.MsgClaimFreeAmount;
            fromPartial(object: Partial<_191.MsgClaimFreeAmount>): _191.MsgClaimFreeAmount;
            fromAmino(object: _191.MsgClaimFreeAmountAmino): _191.MsgClaimFreeAmount;
            toAmino(message: _191.MsgClaimFreeAmount): _191.MsgClaimFreeAmountAmino;
            fromAminoMsg(object: _191.MsgClaimFreeAmountAminoMsg): _191.MsgClaimFreeAmount;
            toAminoMsg(message: _191.MsgClaimFreeAmount): _191.MsgClaimFreeAmountAminoMsg;
            fromProtoMsg(message: _191.MsgClaimFreeAmountProtoMsg): _191.MsgClaimFreeAmount;
            toProto(message: _191.MsgClaimFreeAmount): Uint8Array;
            toProtoMsg(message: _191.MsgClaimFreeAmount): _191.MsgClaimFreeAmountProtoMsg;
        };
        MsgClaimFreeAmountResponse: {
            typeUrl: string;
            encode(message: _191.MsgClaimFreeAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.MsgClaimFreeAmountResponse;
            fromPartial(object: Partial<_191.MsgClaimFreeAmountResponse>): _191.MsgClaimFreeAmountResponse;
            fromAmino(object: _191.MsgClaimFreeAmountResponseAmino): _191.MsgClaimFreeAmountResponse;
            toAmino(message: _191.MsgClaimFreeAmountResponse): _191.MsgClaimFreeAmountResponseAmino;
            fromAminoMsg(object: _191.MsgClaimFreeAmountResponseAminoMsg): _191.MsgClaimFreeAmountResponse;
            fromProtoMsg(message: _191.MsgClaimFreeAmountResponseProtoMsg): _191.MsgClaimFreeAmountResponse;
            toProto(message: _191.MsgClaimFreeAmountResponse): Uint8Array;
            toProtoMsg(message: _191.MsgClaimFreeAmountResponse): _191.MsgClaimFreeAmountResponseProtoMsg;
        };
        MsgCreateAirdrop: {
            typeUrl: string;
            encode(message: _191.MsgCreateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.MsgCreateAirdrop;
            fromPartial(object: Partial<_191.MsgCreateAirdrop>): _191.MsgCreateAirdrop;
            fromAmino(object: _191.MsgCreateAirdropAmino): _191.MsgCreateAirdrop;
            toAmino(message: _191.MsgCreateAirdrop): _191.MsgCreateAirdropAmino;
            fromAminoMsg(object: _191.MsgCreateAirdropAminoMsg): _191.MsgCreateAirdrop;
            fromProtoMsg(message: _191.MsgCreateAirdropProtoMsg): _191.MsgCreateAirdrop;
            toProto(message: _191.MsgCreateAirdrop): Uint8Array;
            toProtoMsg(message: _191.MsgCreateAirdrop): _191.MsgCreateAirdropProtoMsg;
        };
        MsgCreateAirdropResponse: {
            typeUrl: string;
            encode(_: _191.MsgCreateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.MsgCreateAirdropResponse;
            fromPartial(_: Partial<_191.MsgCreateAirdropResponse>): _191.MsgCreateAirdropResponse;
            fromAmino(_: _191.MsgCreateAirdropResponseAmino): _191.MsgCreateAirdropResponse;
            toAmino(_: _191.MsgCreateAirdropResponse): _191.MsgCreateAirdropResponseAmino;
            fromAminoMsg(object: _191.MsgCreateAirdropResponseAminoMsg): _191.MsgCreateAirdropResponse;
            fromProtoMsg(message: _191.MsgCreateAirdropResponseProtoMsg): _191.MsgCreateAirdropResponse;
            toProto(message: _191.MsgCreateAirdropResponse): Uint8Array;
            toProtoMsg(message: _191.MsgCreateAirdropResponse): _191.MsgCreateAirdropResponseProtoMsg;
        };
        MsgDeleteAirdrop: {
            typeUrl: string;
            encode(message: _191.MsgDeleteAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.MsgDeleteAirdrop;
            fromPartial(object: Partial<_191.MsgDeleteAirdrop>): _191.MsgDeleteAirdrop;
            fromAmino(object: _191.MsgDeleteAirdropAmino): _191.MsgDeleteAirdrop;
            toAmino(message: _191.MsgDeleteAirdrop): _191.MsgDeleteAirdropAmino;
            fromAminoMsg(object: _191.MsgDeleteAirdropAminoMsg): _191.MsgDeleteAirdrop;
            fromProtoMsg(message: _191.MsgDeleteAirdropProtoMsg): _191.MsgDeleteAirdrop;
            toProto(message: _191.MsgDeleteAirdrop): Uint8Array;
            toProtoMsg(message: _191.MsgDeleteAirdrop): _191.MsgDeleteAirdropProtoMsg;
        };
        MsgDeleteAirdropResponse: {
            typeUrl: string;
            encode(_: _191.MsgDeleteAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.MsgDeleteAirdropResponse;
            fromPartial(_: Partial<_191.MsgDeleteAirdropResponse>): _191.MsgDeleteAirdropResponse;
            fromAmino(_: _191.MsgDeleteAirdropResponseAmino): _191.MsgDeleteAirdropResponse;
            toAmino(_: _191.MsgDeleteAirdropResponse): _191.MsgDeleteAirdropResponseAmino;
            fromAminoMsg(object: _191.MsgDeleteAirdropResponseAminoMsg): _191.MsgDeleteAirdropResponse;
            fromProtoMsg(message: _191.MsgDeleteAirdropResponseProtoMsg): _191.MsgDeleteAirdropResponse;
            toProto(message: _191.MsgDeleteAirdropResponse): Uint8Array;
            toProtoMsg(message: _191.MsgDeleteAirdropResponse): _191.MsgDeleteAirdropResponseProtoMsg;
        };
        ClaimStatus: {
            typeUrl: string;
            encode(message: _190.ClaimStatus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.ClaimStatus;
            fromPartial(object: Partial<_190.ClaimStatus>): _190.ClaimStatus;
            fromAmino(object: _190.ClaimStatusAmino): _190.ClaimStatus;
            toAmino(message: _190.ClaimStatus): _190.ClaimStatusAmino;
            fromAminoMsg(object: _190.ClaimStatusAminoMsg): _190.ClaimStatus;
            fromProtoMsg(message: _190.ClaimStatusProtoMsg): _190.ClaimStatus;
            toProto(message: _190.ClaimStatus): Uint8Array;
            toProtoMsg(message: _190.ClaimStatus): _190.ClaimStatusProtoMsg;
        };
        QueryClaimStatusRequest: {
            typeUrl: string;
            encode(message: _190.QueryClaimStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryClaimStatusRequest;
            fromPartial(object: Partial<_190.QueryClaimStatusRequest>): _190.QueryClaimStatusRequest;
            fromAmino(object: _190.QueryClaimStatusRequestAmino): _190.QueryClaimStatusRequest;
            toAmino(message: _190.QueryClaimStatusRequest): _190.QueryClaimStatusRequestAmino;
            fromAminoMsg(object: _190.QueryClaimStatusRequestAminoMsg): _190.QueryClaimStatusRequest;
            fromProtoMsg(message: _190.QueryClaimStatusRequestProtoMsg): _190.QueryClaimStatusRequest;
            toProto(message: _190.QueryClaimStatusRequest): Uint8Array;
            toProtoMsg(message: _190.QueryClaimStatusRequest): _190.QueryClaimStatusRequestProtoMsg;
        };
        QueryClaimStatusResponse: {
            typeUrl: string;
            encode(message: _190.QueryClaimStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryClaimStatusResponse;
            fromPartial(object: Partial<_190.QueryClaimStatusResponse>): _190.QueryClaimStatusResponse;
            fromAmino(object: _190.QueryClaimStatusResponseAmino): _190.QueryClaimStatusResponse;
            toAmino(message: _190.QueryClaimStatusResponse): _190.QueryClaimStatusResponseAmino;
            fromAminoMsg(object: _190.QueryClaimStatusResponseAminoMsg): _190.QueryClaimStatusResponse;
            fromProtoMsg(message: _190.QueryClaimStatusResponseProtoMsg): _190.QueryClaimStatusResponse;
            toProto(message: _190.QueryClaimStatusResponse): Uint8Array;
            toProtoMsg(message: _190.QueryClaimStatusResponse): _190.QueryClaimStatusResponseProtoMsg;
        };
        ClaimMetadata: {
            typeUrl: string;
            encode(message: _190.ClaimMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.ClaimMetadata;
            fromPartial(object: Partial<_190.ClaimMetadata>): _190.ClaimMetadata;
            fromAmino(object: _190.ClaimMetadataAmino): _190.ClaimMetadata;
            toAmino(message: _190.ClaimMetadata): _190.ClaimMetadataAmino;
            fromAminoMsg(object: _190.ClaimMetadataAminoMsg): _190.ClaimMetadata;
            fromProtoMsg(message: _190.ClaimMetadataProtoMsg): _190.ClaimMetadata;
            toProto(message: _190.ClaimMetadata): Uint8Array;
            toProtoMsg(message: _190.ClaimMetadata): _190.ClaimMetadataProtoMsg;
        };
        QueryClaimMetadataRequest: {
            typeUrl: string;
            encode(_: _190.QueryClaimMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryClaimMetadataRequest;
            fromPartial(_: Partial<_190.QueryClaimMetadataRequest>): _190.QueryClaimMetadataRequest;
            fromAmino(_: _190.QueryClaimMetadataRequestAmino): _190.QueryClaimMetadataRequest;
            toAmino(_: _190.QueryClaimMetadataRequest): _190.QueryClaimMetadataRequestAmino;
            fromAminoMsg(object: _190.QueryClaimMetadataRequestAminoMsg): _190.QueryClaimMetadataRequest;
            fromProtoMsg(message: _190.QueryClaimMetadataRequestProtoMsg): _190.QueryClaimMetadataRequest;
            toProto(message: _190.QueryClaimMetadataRequest): Uint8Array;
            toProtoMsg(message: _190.QueryClaimMetadataRequest): _190.QueryClaimMetadataRequestProtoMsg;
        };
        QueryClaimMetadataResponse: {
            typeUrl: string;
            encode(message: _190.QueryClaimMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryClaimMetadataResponse;
            fromPartial(object: Partial<_190.QueryClaimMetadataResponse>): _190.QueryClaimMetadataResponse;
            fromAmino(object: _190.QueryClaimMetadataResponseAmino): _190.QueryClaimMetadataResponse;
            toAmino(message: _190.QueryClaimMetadataResponse): _190.QueryClaimMetadataResponseAmino;
            fromAminoMsg(object: _190.QueryClaimMetadataResponseAminoMsg): _190.QueryClaimMetadataResponse;
            fromProtoMsg(message: _190.QueryClaimMetadataResponseProtoMsg): _190.QueryClaimMetadataResponse;
            toProto(message: _190.QueryClaimMetadataResponse): Uint8Array;
            toProtoMsg(message: _190.QueryClaimMetadataResponse): _190.QueryClaimMetadataResponseProtoMsg;
        };
        QueryDistributorAccountBalanceRequest: {
            typeUrl: string;
            encode(message: _190.QueryDistributorAccountBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryDistributorAccountBalanceRequest;
            fromPartial(object: Partial<_190.QueryDistributorAccountBalanceRequest>): _190.QueryDistributorAccountBalanceRequest;
            fromAmino(object: _190.QueryDistributorAccountBalanceRequestAmino): _190.QueryDistributorAccountBalanceRequest;
            toAmino(message: _190.QueryDistributorAccountBalanceRequest): _190.QueryDistributorAccountBalanceRequestAmino;
            fromAminoMsg(object: _190.QueryDistributorAccountBalanceRequestAminoMsg): _190.QueryDistributorAccountBalanceRequest;
            fromProtoMsg(message: _190.QueryDistributorAccountBalanceRequestProtoMsg): _190.QueryDistributorAccountBalanceRequest;
            toProto(message: _190.QueryDistributorAccountBalanceRequest): Uint8Array;
            toProtoMsg(message: _190.QueryDistributorAccountBalanceRequest): _190.QueryDistributorAccountBalanceRequestProtoMsg;
        };
        QueryDistributorAccountBalanceResponse: {
            typeUrl: string;
            encode(message: _190.QueryDistributorAccountBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryDistributorAccountBalanceResponse;
            fromPartial(object: Partial<_190.QueryDistributorAccountBalanceResponse>): _190.QueryDistributorAccountBalanceResponse;
            fromAmino(object: _190.QueryDistributorAccountBalanceResponseAmino): _190.QueryDistributorAccountBalanceResponse;
            toAmino(message: _190.QueryDistributorAccountBalanceResponse): _190.QueryDistributorAccountBalanceResponseAmino;
            fromAminoMsg(object: _190.QueryDistributorAccountBalanceResponseAminoMsg): _190.QueryDistributorAccountBalanceResponse;
            fromProtoMsg(message: _190.QueryDistributorAccountBalanceResponseProtoMsg): _190.QueryDistributorAccountBalanceResponse;
            toProto(message: _190.QueryDistributorAccountBalanceResponse): Uint8Array;
            toProtoMsg(message: _190.QueryDistributorAccountBalanceResponse): _190.QueryDistributorAccountBalanceResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _190.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryParamsRequest;
            fromPartial(_: Partial<_190.QueryParamsRequest>): _190.QueryParamsRequest;
            fromAmino(_: _190.QueryParamsRequestAmino): _190.QueryParamsRequest;
            toAmino(_: _190.QueryParamsRequest): _190.QueryParamsRequestAmino;
            fromAminoMsg(object: _190.QueryParamsRequestAminoMsg): _190.QueryParamsRequest;
            fromProtoMsg(message: _190.QueryParamsRequestProtoMsg): _190.QueryParamsRequest;
            toProto(message: _190.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _190.QueryParamsRequest): _190.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _190.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryParamsResponse;
            fromPartial(object: Partial<_190.QueryParamsResponse>): _190.QueryParamsResponse;
            fromAmino(object: _190.QueryParamsResponseAmino): _190.QueryParamsResponse;
            toAmino(message: _190.QueryParamsResponse): _190.QueryParamsResponseAmino;
            fromAminoMsg(object: _190.QueryParamsResponseAminoMsg): _190.QueryParamsResponse;
            fromProtoMsg(message: _190.QueryParamsResponseProtoMsg): _190.QueryParamsResponse;
            toProto(message: _190.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _190.QueryParamsResponse): _190.QueryParamsResponseProtoMsg;
        };
        QueryClaimRecordRequest: {
            typeUrl: string;
            encode(message: _190.QueryClaimRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryClaimRecordRequest;
            fromPartial(object: Partial<_190.QueryClaimRecordRequest>): _190.QueryClaimRecordRequest;
            fromAmino(object: _190.QueryClaimRecordRequestAmino): _190.QueryClaimRecordRequest;
            toAmino(message: _190.QueryClaimRecordRequest): _190.QueryClaimRecordRequestAmino;
            fromAminoMsg(object: _190.QueryClaimRecordRequestAminoMsg): _190.QueryClaimRecordRequest;
            fromProtoMsg(message: _190.QueryClaimRecordRequestProtoMsg): _190.QueryClaimRecordRequest;
            toProto(message: _190.QueryClaimRecordRequest): Uint8Array;
            toProtoMsg(message: _190.QueryClaimRecordRequest): _190.QueryClaimRecordRequestProtoMsg;
        };
        QueryClaimRecordResponse: {
            typeUrl: string;
            encode(message: _190.QueryClaimRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryClaimRecordResponse;
            fromPartial(object: Partial<_190.QueryClaimRecordResponse>): _190.QueryClaimRecordResponse;
            fromAmino(object: _190.QueryClaimRecordResponseAmino): _190.QueryClaimRecordResponse;
            toAmino(message: _190.QueryClaimRecordResponse): _190.QueryClaimRecordResponseAmino;
            fromAminoMsg(object: _190.QueryClaimRecordResponseAminoMsg): _190.QueryClaimRecordResponse;
            fromProtoMsg(message: _190.QueryClaimRecordResponseProtoMsg): _190.QueryClaimRecordResponse;
            toProto(message: _190.QueryClaimRecordResponse): Uint8Array;
            toProtoMsg(message: _190.QueryClaimRecordResponse): _190.QueryClaimRecordResponseProtoMsg;
        };
        QueryClaimableForActionRequest: {
            typeUrl: string;
            encode(message: _190.QueryClaimableForActionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryClaimableForActionRequest;
            fromPartial(object: Partial<_190.QueryClaimableForActionRequest>): _190.QueryClaimableForActionRequest;
            fromAmino(object: _190.QueryClaimableForActionRequestAmino): _190.QueryClaimableForActionRequest;
            toAmino(message: _190.QueryClaimableForActionRequest): _190.QueryClaimableForActionRequestAmino;
            fromAminoMsg(object: _190.QueryClaimableForActionRequestAminoMsg): _190.QueryClaimableForActionRequest;
            fromProtoMsg(message: _190.QueryClaimableForActionRequestProtoMsg): _190.QueryClaimableForActionRequest;
            toProto(message: _190.QueryClaimableForActionRequest): Uint8Array;
            toProtoMsg(message: _190.QueryClaimableForActionRequest): _190.QueryClaimableForActionRequestProtoMsg;
        };
        QueryClaimableForActionResponse: {
            typeUrl: string;
            encode(message: _190.QueryClaimableForActionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryClaimableForActionResponse;
            fromPartial(object: Partial<_190.QueryClaimableForActionResponse>): _190.QueryClaimableForActionResponse;
            fromAmino(object: _190.QueryClaimableForActionResponseAmino): _190.QueryClaimableForActionResponse;
            toAmino(message: _190.QueryClaimableForActionResponse): _190.QueryClaimableForActionResponseAmino;
            fromAminoMsg(object: _190.QueryClaimableForActionResponseAminoMsg): _190.QueryClaimableForActionResponse;
            fromProtoMsg(message: _190.QueryClaimableForActionResponseProtoMsg): _190.QueryClaimableForActionResponse;
            toProto(message: _190.QueryClaimableForActionResponse): Uint8Array;
            toProtoMsg(message: _190.QueryClaimableForActionResponse): _190.QueryClaimableForActionResponseProtoMsg;
        };
        QueryTotalClaimableRequest: {
            typeUrl: string;
            encode(message: _190.QueryTotalClaimableRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryTotalClaimableRequest;
            fromPartial(object: Partial<_190.QueryTotalClaimableRequest>): _190.QueryTotalClaimableRequest;
            fromAmino(object: _190.QueryTotalClaimableRequestAmino): _190.QueryTotalClaimableRequest;
            toAmino(message: _190.QueryTotalClaimableRequest): _190.QueryTotalClaimableRequestAmino;
            fromAminoMsg(object: _190.QueryTotalClaimableRequestAminoMsg): _190.QueryTotalClaimableRequest;
            fromProtoMsg(message: _190.QueryTotalClaimableRequestProtoMsg): _190.QueryTotalClaimableRequest;
            toProto(message: _190.QueryTotalClaimableRequest): Uint8Array;
            toProtoMsg(message: _190.QueryTotalClaimableRequest): _190.QueryTotalClaimableRequestProtoMsg;
        };
        QueryTotalClaimableResponse: {
            typeUrl: string;
            encode(message: _190.QueryTotalClaimableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryTotalClaimableResponse;
            fromPartial(object: Partial<_190.QueryTotalClaimableResponse>): _190.QueryTotalClaimableResponse;
            fromAmino(object: _190.QueryTotalClaimableResponseAmino): _190.QueryTotalClaimableResponse;
            toAmino(message: _190.QueryTotalClaimableResponse): _190.QueryTotalClaimableResponseAmino;
            fromAminoMsg(object: _190.QueryTotalClaimableResponseAminoMsg): _190.QueryTotalClaimableResponse;
            fromProtoMsg(message: _190.QueryTotalClaimableResponseProtoMsg): _190.QueryTotalClaimableResponse;
            toProto(message: _190.QueryTotalClaimableResponse): Uint8Array;
            toProtoMsg(message: _190.QueryTotalClaimableResponse): _190.QueryTotalClaimableResponseProtoMsg;
        };
        QueryUserVestingsRequest: {
            typeUrl: string;
            encode(message: _190.QueryUserVestingsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryUserVestingsRequest;
            fromPartial(object: Partial<_190.QueryUserVestingsRequest>): _190.QueryUserVestingsRequest;
            fromAmino(object: _190.QueryUserVestingsRequestAmino): _190.QueryUserVestingsRequest;
            toAmino(message: _190.QueryUserVestingsRequest): _190.QueryUserVestingsRequestAmino;
            fromAminoMsg(object: _190.QueryUserVestingsRequestAminoMsg): _190.QueryUserVestingsRequest;
            fromProtoMsg(message: _190.QueryUserVestingsRequestProtoMsg): _190.QueryUserVestingsRequest;
            toProto(message: _190.QueryUserVestingsRequest): Uint8Array;
            toProtoMsg(message: _190.QueryUserVestingsRequest): _190.QueryUserVestingsRequestProtoMsg;
        };
        QueryUserVestingsResponse: {
            typeUrl: string;
            encode(message: _190.QueryUserVestingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryUserVestingsResponse;
            fromPartial(object: Partial<_190.QueryUserVestingsResponse>): _190.QueryUserVestingsResponse;
            fromAmino(object: _190.QueryUserVestingsResponseAmino): _190.QueryUserVestingsResponse;
            toAmino(message: _190.QueryUserVestingsResponse): _190.QueryUserVestingsResponseAmino;
            fromAminoMsg(object: _190.QueryUserVestingsResponseAminoMsg): _190.QueryUserVestingsResponse;
            fromProtoMsg(message: _190.QueryUserVestingsResponseProtoMsg): _190.QueryUserVestingsResponse;
            toProto(message: _190.QueryUserVestingsResponse): Uint8Array;
            toProtoMsg(message: _190.QueryUserVestingsResponse): _190.QueryUserVestingsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _189.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.Params;
            fromPartial(object: Partial<_189.Params>): _189.Params;
            fromAmino(object: _189.ParamsAmino): _189.Params;
            toAmino(message: _189.Params): _189.ParamsAmino;
            fromAminoMsg(object: _189.ParamsAminoMsg): _189.Params;
            fromProtoMsg(message: _189.ParamsProtoMsg): _189.Params;
            toProto(message: _189.Params): Uint8Array;
            toProtoMsg(message: _189.Params): _189.ParamsProtoMsg;
        };
        Airdrop: {
            typeUrl: string;
            encode(message: _189.Airdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.Airdrop;
            fromPartial(object: Partial<_189.Airdrop>): _189.Airdrop;
            fromAmino(object: _189.AirdropAmino): _189.Airdrop;
            toAmino(message: _189.Airdrop): _189.AirdropAmino;
            fromAminoMsg(object: _189.AirdropAminoMsg): _189.Airdrop;
            fromProtoMsg(message: _189.AirdropProtoMsg): _189.Airdrop;
            toProto(message: _189.Airdrop): Uint8Array;
            toProtoMsg(message: _189.Airdrop): _189.AirdropProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _188.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.GenesisState;
            fromPartial(object: Partial<_188.GenesisState>): _188.GenesisState;
            fromAmino(object: _188.GenesisStateAmino): _188.GenesisState;
            toAmino(message: _188.GenesisState): _188.GenesisStateAmino;
            fromAminoMsg(object: _188.GenesisStateAminoMsg): _188.GenesisState;
            fromProtoMsg(message: _188.GenesisStateProtoMsg): _188.GenesisState;
            toProto(message: _188.GenesisState): Uint8Array;
            toProtoMsg(message: _188.GenesisState): _188.GenesisStateProtoMsg;
        };
        actionFromJSON(object: any): _187.Action;
        actionToJSON(object: _187.Action): string;
        Action: typeof _187.Action;
        ActionSDKType: typeof _187.Action;
        ActionAmino: typeof _187.Action;
        ClaimRecord: {
            typeUrl: string;
            encode(message: _187.ClaimRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.ClaimRecord;
            fromPartial(object: Partial<_187.ClaimRecord>): _187.ClaimRecord;
            fromAmino(object: _187.ClaimRecordAmino): _187.ClaimRecord;
            toAmino(message: _187.ClaimRecord): _187.ClaimRecordAmino;
            fromAminoMsg(object: _187.ClaimRecordAminoMsg): _187.ClaimRecord;
            fromProtoMsg(message: _187.ClaimRecordProtoMsg): _187.ClaimRecord;
            toProto(message: _187.ClaimRecord): Uint8Array;
            toProtoMsg(message: _187.ClaimRecord): _187.ClaimRecordProtoMsg;
        };
    };
    const epochs: {
        QueryClientImpl: typeof _377.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            epochInfos(request?: _193.QueryEpochsInfoRequest): Promise<_193.QueryEpochsInfoResponse>;
            currentEpoch(request: _193.QueryCurrentEpochRequest): Promise<_193.QueryCurrentEpochResponse>;
            epochInfo(request: _193.QueryEpochInfoRequest): Promise<_193.QueryEpochInfoResponse>;
        };
        QueryEpochsInfoRequest: {
            typeUrl: string;
            encode(message: _193.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.QueryEpochsInfoRequest;
            fromPartial(object: Partial<_193.QueryEpochsInfoRequest>): _193.QueryEpochsInfoRequest;
            fromAmino(object: _193.QueryEpochsInfoRequestAmino): _193.QueryEpochsInfoRequest;
            toAmino(message: _193.QueryEpochsInfoRequest): _193.QueryEpochsInfoRequestAmino;
            fromAminoMsg(object: _193.QueryEpochsInfoRequestAminoMsg): _193.QueryEpochsInfoRequest;
            fromProtoMsg(message: _193.QueryEpochsInfoRequestProtoMsg): _193.QueryEpochsInfoRequest;
            toProto(message: _193.QueryEpochsInfoRequest): Uint8Array;
            toProtoMsg(message: _193.QueryEpochsInfoRequest): _193.QueryEpochsInfoRequestProtoMsg;
        };
        QueryEpochsInfoResponse: {
            typeUrl: string;
            encode(message: _193.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.QueryEpochsInfoResponse;
            fromPartial(object: Partial<_193.QueryEpochsInfoResponse>): _193.QueryEpochsInfoResponse;
            fromAmino(object: _193.QueryEpochsInfoResponseAmino): _193.QueryEpochsInfoResponse;
            toAmino(message: _193.QueryEpochsInfoResponse): _193.QueryEpochsInfoResponseAmino;
            fromAminoMsg(object: _193.QueryEpochsInfoResponseAminoMsg): _193.QueryEpochsInfoResponse;
            fromProtoMsg(message: _193.QueryEpochsInfoResponseProtoMsg): _193.QueryEpochsInfoResponse;
            toProto(message: _193.QueryEpochsInfoResponse): Uint8Array;
            toProtoMsg(message: _193.QueryEpochsInfoResponse): _193.QueryEpochsInfoResponseProtoMsg;
        };
        QueryCurrentEpochRequest: {
            typeUrl: string;
            encode(message: _193.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.QueryCurrentEpochRequest;
            fromPartial(object: Partial<_193.QueryCurrentEpochRequest>): _193.QueryCurrentEpochRequest;
            fromAmino(object: _193.QueryCurrentEpochRequestAmino): _193.QueryCurrentEpochRequest;
            toAmino(message: _193.QueryCurrentEpochRequest): _193.QueryCurrentEpochRequestAmino;
            fromAminoMsg(object: _193.QueryCurrentEpochRequestAminoMsg): _193.QueryCurrentEpochRequest;
            fromProtoMsg(message: _193.QueryCurrentEpochRequestProtoMsg): _193.QueryCurrentEpochRequest;
            toProto(message: _193.QueryCurrentEpochRequest): Uint8Array;
            toProtoMsg(message: _193.QueryCurrentEpochRequest): _193.QueryCurrentEpochRequestProtoMsg;
        };
        QueryCurrentEpochResponse: {
            typeUrl: string;
            encode(message: _193.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.QueryCurrentEpochResponse;
            fromPartial(object: Partial<_193.QueryCurrentEpochResponse>): _193.QueryCurrentEpochResponse;
            fromAmino(object: _193.QueryCurrentEpochResponseAmino): _193.QueryCurrentEpochResponse;
            toAmino(message: _193.QueryCurrentEpochResponse): _193.QueryCurrentEpochResponseAmino;
            fromAminoMsg(object: _193.QueryCurrentEpochResponseAminoMsg): _193.QueryCurrentEpochResponse;
            fromProtoMsg(message: _193.QueryCurrentEpochResponseProtoMsg): _193.QueryCurrentEpochResponse;
            toProto(message: _193.QueryCurrentEpochResponse): Uint8Array;
            toProtoMsg(message: _193.QueryCurrentEpochResponse): _193.QueryCurrentEpochResponseProtoMsg;
        };
        QueryEpochInfoRequest: {
            typeUrl: string;
            encode(message: _193.QueryEpochInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.QueryEpochInfoRequest;
            fromPartial(object: Partial<_193.QueryEpochInfoRequest>): _193.QueryEpochInfoRequest;
            fromAmino(object: _193.QueryEpochInfoRequestAmino): _193.QueryEpochInfoRequest;
            toAmino(message: _193.QueryEpochInfoRequest): _193.QueryEpochInfoRequestAmino;
            fromAminoMsg(object: _193.QueryEpochInfoRequestAminoMsg): _193.QueryEpochInfoRequest;
            fromProtoMsg(message: _193.QueryEpochInfoRequestProtoMsg): _193.QueryEpochInfoRequest;
            toProto(message: _193.QueryEpochInfoRequest): Uint8Array;
            toProtoMsg(message: _193.QueryEpochInfoRequest): _193.QueryEpochInfoRequestProtoMsg;
        };
        QueryEpochInfoResponse: {
            typeUrl: string;
            encode(message: _193.QueryEpochInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.QueryEpochInfoResponse;
            fromPartial(object: Partial<_193.QueryEpochInfoResponse>): _193.QueryEpochInfoResponse;
            fromAmino(object: _193.QueryEpochInfoResponseAmino): _193.QueryEpochInfoResponse;
            toAmino(message: _193.QueryEpochInfoResponse): _193.QueryEpochInfoResponseAmino;
            fromAminoMsg(object: _193.QueryEpochInfoResponseAminoMsg): _193.QueryEpochInfoResponse;
            fromProtoMsg(message: _193.QueryEpochInfoResponseProtoMsg): _193.QueryEpochInfoResponse;
            toProto(message: _193.QueryEpochInfoResponse): Uint8Array;
            toProtoMsg(message: _193.QueryEpochInfoResponse): _193.QueryEpochInfoResponseProtoMsg;
        };
        EpochInfo: {
            typeUrl: string;
            encode(message: _192.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.EpochInfo;
            fromPartial(object: Partial<_192.EpochInfo>): _192.EpochInfo;
            fromAmino(object: _192.EpochInfoAmino): _192.EpochInfo;
            toAmino(message: _192.EpochInfo): _192.EpochInfoAmino;
            fromAminoMsg(object: _192.EpochInfoAminoMsg): _192.EpochInfo;
            fromProtoMsg(message: _192.EpochInfoProtoMsg): _192.EpochInfo;
            toProto(message: _192.EpochInfo): Uint8Array;
            toProtoMsg(message: _192.EpochInfo): _192.EpochInfoProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _192.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.GenesisState;
            fromPartial(object: Partial<_192.GenesisState>): _192.GenesisState;
            fromAmino(object: _192.GenesisStateAmino): _192.GenesisState;
            toAmino(message: _192.GenesisState): _192.GenesisStateAmino;
            fromAminoMsg(object: _192.GenesisStateAminoMsg): _192.GenesisState;
            fromProtoMsg(message: _192.GenesisStateProtoMsg): _192.GenesisState;
            toProto(message: _192.GenesisState): Uint8Array;
            toProtoMsg(message: _192.GenesisState): _192.GenesisStateProtoMsg;
        };
    };
    const icacallbacks: {
        QueryClientImpl: typeof _378.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _198.QueryParamsRequest): Promise<_198.QueryParamsResponse>;
            callbackData(request: _198.QueryGetCallbackDataRequest): Promise<_198.QueryGetCallbackDataResponse>;
            callbackDataAll(request?: _198.QueryAllCallbackDataRequest): Promise<_198.QueryAllCallbackDataResponse>;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _198.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryParamsRequest;
            fromPartial(_: Partial<_198.QueryParamsRequest>): _198.QueryParamsRequest;
            fromAmino(_: _198.QueryParamsRequestAmino): _198.QueryParamsRequest;
            toAmino(_: _198.QueryParamsRequest): _198.QueryParamsRequestAmino;
            fromAminoMsg(object: _198.QueryParamsRequestAminoMsg): _198.QueryParamsRequest;
            fromProtoMsg(message: _198.QueryParamsRequestProtoMsg): _198.QueryParamsRequest;
            toProto(message: _198.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _198.QueryParamsRequest): _198.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _198.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryParamsResponse;
            fromPartial(object: Partial<_198.QueryParamsResponse>): _198.QueryParamsResponse;
            fromAmino(object: _198.QueryParamsResponseAmino): _198.QueryParamsResponse;
            toAmino(message: _198.QueryParamsResponse): _198.QueryParamsResponseAmino;
            fromAminoMsg(object: _198.QueryParamsResponseAminoMsg): _198.QueryParamsResponse;
            fromProtoMsg(message: _198.QueryParamsResponseProtoMsg): _198.QueryParamsResponse;
            toProto(message: _198.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _198.QueryParamsResponse): _198.QueryParamsResponseProtoMsg;
        };
        QueryGetCallbackDataRequest: {
            typeUrl: string;
            encode(message: _198.QueryGetCallbackDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryGetCallbackDataRequest;
            fromPartial(object: Partial<_198.QueryGetCallbackDataRequest>): _198.QueryGetCallbackDataRequest;
            fromAmino(object: _198.QueryGetCallbackDataRequestAmino): _198.QueryGetCallbackDataRequest;
            toAmino(message: _198.QueryGetCallbackDataRequest): _198.QueryGetCallbackDataRequestAmino;
            fromAminoMsg(object: _198.QueryGetCallbackDataRequestAminoMsg): _198.QueryGetCallbackDataRequest;
            fromProtoMsg(message: _198.QueryGetCallbackDataRequestProtoMsg): _198.QueryGetCallbackDataRequest;
            toProto(message: _198.QueryGetCallbackDataRequest): Uint8Array;
            toProtoMsg(message: _198.QueryGetCallbackDataRequest): _198.QueryGetCallbackDataRequestProtoMsg;
        };
        QueryGetCallbackDataResponse: {
            typeUrl: string;
            encode(message: _198.QueryGetCallbackDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryGetCallbackDataResponse;
            fromPartial(object: Partial<_198.QueryGetCallbackDataResponse>): _198.QueryGetCallbackDataResponse;
            fromAmino(object: _198.QueryGetCallbackDataResponseAmino): _198.QueryGetCallbackDataResponse;
            toAmino(message: _198.QueryGetCallbackDataResponse): _198.QueryGetCallbackDataResponseAmino;
            fromAminoMsg(object: _198.QueryGetCallbackDataResponseAminoMsg): _198.QueryGetCallbackDataResponse;
            fromProtoMsg(message: _198.QueryGetCallbackDataResponseProtoMsg): _198.QueryGetCallbackDataResponse;
            toProto(message: _198.QueryGetCallbackDataResponse): Uint8Array;
            toProtoMsg(message: _198.QueryGetCallbackDataResponse): _198.QueryGetCallbackDataResponseProtoMsg;
        };
        QueryAllCallbackDataRequest: {
            typeUrl: string;
            encode(message: _198.QueryAllCallbackDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryAllCallbackDataRequest;
            fromPartial(object: Partial<_198.QueryAllCallbackDataRequest>): _198.QueryAllCallbackDataRequest;
            fromAmino(object: _198.QueryAllCallbackDataRequestAmino): _198.QueryAllCallbackDataRequest;
            toAmino(message: _198.QueryAllCallbackDataRequest): _198.QueryAllCallbackDataRequestAmino;
            fromAminoMsg(object: _198.QueryAllCallbackDataRequestAminoMsg): _198.QueryAllCallbackDataRequest;
            fromProtoMsg(message: _198.QueryAllCallbackDataRequestProtoMsg): _198.QueryAllCallbackDataRequest;
            toProto(message: _198.QueryAllCallbackDataRequest): Uint8Array;
            toProtoMsg(message: _198.QueryAllCallbackDataRequest): _198.QueryAllCallbackDataRequestProtoMsg;
        };
        QueryAllCallbackDataResponse: {
            typeUrl: string;
            encode(message: _198.QueryAllCallbackDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryAllCallbackDataResponse;
            fromPartial(object: Partial<_198.QueryAllCallbackDataResponse>): _198.QueryAllCallbackDataResponse;
            fromAmino(object: _198.QueryAllCallbackDataResponseAmino): _198.QueryAllCallbackDataResponse;
            toAmino(message: _198.QueryAllCallbackDataResponse): _198.QueryAllCallbackDataResponseAmino;
            fromAminoMsg(object: _198.QueryAllCallbackDataResponseAminoMsg): _198.QueryAllCallbackDataResponse;
            fromProtoMsg(message: _198.QueryAllCallbackDataResponseProtoMsg): _198.QueryAllCallbackDataResponse;
            toProto(message: _198.QueryAllCallbackDataResponse): Uint8Array;
            toProtoMsg(message: _198.QueryAllCallbackDataResponse): _198.QueryAllCallbackDataResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _197.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.Params;
            fromPartial(_: Partial<_197.Params>): _197.Params;
            fromAmino(_: _197.ParamsAmino): _197.Params;
            toAmino(_: _197.Params): _197.ParamsAmino;
            fromAminoMsg(object: _197.ParamsAminoMsg): _197.Params;
            fromProtoMsg(message: _197.ParamsProtoMsg): _197.Params;
            toProto(message: _197.Params): Uint8Array;
            toProtoMsg(message: _197.Params): _197.ParamsProtoMsg;
        };
        IcacallbacksPacketData: {
            typeUrl: string;
            encode(message: _196.IcacallbacksPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.IcacallbacksPacketData;
            fromPartial(object: Partial<_196.IcacallbacksPacketData>): _196.IcacallbacksPacketData;
            fromAmino(object: _196.IcacallbacksPacketDataAmino): _196.IcacallbacksPacketData;
            toAmino(message: _196.IcacallbacksPacketData): _196.IcacallbacksPacketDataAmino;
            fromAminoMsg(object: _196.IcacallbacksPacketDataAminoMsg): _196.IcacallbacksPacketData;
            fromProtoMsg(message: _196.IcacallbacksPacketDataProtoMsg): _196.IcacallbacksPacketData;
            toProto(message: _196.IcacallbacksPacketData): Uint8Array;
            toProtoMsg(message: _196.IcacallbacksPacketData): _196.IcacallbacksPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _196.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.NoData;
            fromPartial(_: Partial<_196.NoData>): _196.NoData;
            fromAmino(_: _196.NoDataAmino): _196.NoData;
            toAmino(_: _196.NoData): _196.NoDataAmino;
            fromAminoMsg(object: _196.NoDataAminoMsg): _196.NoData;
            fromProtoMsg(message: _196.NoDataProtoMsg): _196.NoData;
            toProto(message: _196.NoData): Uint8Array;
            toProtoMsg(message: _196.NoData): _196.NoDataProtoMsg;
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
        CallbackData: {
            typeUrl: string;
            encode(message: _194.CallbackData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _194.CallbackData;
            fromPartial(object: Partial<_194.CallbackData>): _194.CallbackData;
            fromAmino(object: _194.CallbackDataAmino): _194.CallbackData;
            toAmino(message: _194.CallbackData): _194.CallbackDataAmino;
            fromAminoMsg(object: _194.CallbackDataAminoMsg): _194.CallbackData;
            fromProtoMsg(message: _194.CallbackDataProtoMsg): _194.CallbackData;
            toProto(message: _194.CallbackData): Uint8Array;
            toProtoMsg(message: _194.CallbackData): _194.CallbackDataProtoMsg;
        };
    };
    const icaoracle: {
        MsgClientImpl: typeof _390.MsgClientImpl;
        QueryClientImpl: typeof _379.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            oracle(request: _204.QueryOracleRequest): Promise<_204.QueryOracleResponse>;
            allOracles(request?: _204.QueryAllOraclesRequest): Promise<_204.QueryAllOraclesResponse>;
            activeOracles(request: _204.QueryActiveOraclesRequest): Promise<_204.QueryActiveOraclesResponse>;
            metrics(request: _204.QueryMetricsRequest): Promise<_204.QueryMetricsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                addOracle(value: _205.MsgAddOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                instantiateOracle(value: _205.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreOracleICA(value: _205.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                toggleOracle(value: _205.MsgToggleOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeOracle(value: _205.MsgRemoveOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                addOracle(value: _205.MsgAddOracle): {
                    typeUrl: string;
                    value: _205.MsgAddOracle;
                };
                instantiateOracle(value: _205.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: _205.MsgInstantiateOracle;
                };
                restoreOracleICA(value: _205.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: _205.MsgRestoreOracleICA;
                };
                toggleOracle(value: _205.MsgToggleOracle): {
                    typeUrl: string;
                    value: _205.MsgToggleOracle;
                };
                removeOracle(value: _205.MsgRemoveOracle): {
                    typeUrl: string;
                    value: _205.MsgRemoveOracle;
                };
            };
            fromPartial: {
                addOracle(value: _205.MsgAddOracle): {
                    typeUrl: string;
                    value: _205.MsgAddOracle;
                };
                instantiateOracle(value: _205.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: _205.MsgInstantiateOracle;
                };
                restoreOracleICA(value: _205.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: _205.MsgRestoreOracleICA;
                };
                toggleOracle(value: _205.MsgToggleOracle): {
                    typeUrl: string;
                    value: _205.MsgToggleOracle;
                };
                removeOracle(value: _205.MsgRemoveOracle): {
                    typeUrl: string;
                    value: _205.MsgRemoveOracle;
                };
            };
        };
        AminoConverter: {
            "/stride.icaoracle.MsgAddOracle": {
                aminoType: string;
                toAmino: (message: _205.MsgAddOracle) => _205.MsgAddOracleAmino;
                fromAmino: (object: _205.MsgAddOracleAmino) => _205.MsgAddOracle;
            };
            "/stride.icaoracle.MsgInstantiateOracle": {
                aminoType: string;
                toAmino: (message: _205.MsgInstantiateOracle) => _205.MsgInstantiateOracleAmino;
                fromAmino: (object: _205.MsgInstantiateOracleAmino) => _205.MsgInstantiateOracle;
            };
            "/stride.icaoracle.MsgRestoreOracleICA": {
                aminoType: string;
                toAmino: (message: _205.MsgRestoreOracleICA) => _205.MsgRestoreOracleICAAmino;
                fromAmino: (object: _205.MsgRestoreOracleICAAmino) => _205.MsgRestoreOracleICA;
            };
            "/stride.icaoracle.MsgToggleOracle": {
                aminoType: string;
                toAmino: (message: _205.MsgToggleOracle) => _205.MsgToggleOracleAmino;
                fromAmino: (object: _205.MsgToggleOracleAmino) => _205.MsgToggleOracle;
            };
            "/stride.icaoracle.MsgRemoveOracle": {
                aminoType: string;
                toAmino: (message: _205.MsgRemoveOracle) => _205.MsgRemoveOracleAmino;
                fromAmino: (object: _205.MsgRemoveOracleAmino) => _205.MsgRemoveOracle;
            };
        };
        MsgAddOracle: {
            typeUrl: string;
            encode(message: _205.MsgAddOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.MsgAddOracle;
            fromPartial(object: Partial<_205.MsgAddOracle>): _205.MsgAddOracle;
            fromAmino(object: _205.MsgAddOracleAmino): _205.MsgAddOracle;
            toAmino(message: _205.MsgAddOracle): _205.MsgAddOracleAmino;
            fromAminoMsg(object: _205.MsgAddOracleAminoMsg): _205.MsgAddOracle;
            toAminoMsg(message: _205.MsgAddOracle): _205.MsgAddOracleAminoMsg;
            fromProtoMsg(message: _205.MsgAddOracleProtoMsg): _205.MsgAddOracle;
            toProto(message: _205.MsgAddOracle): Uint8Array;
            toProtoMsg(message: _205.MsgAddOracle): _205.MsgAddOracleProtoMsg;
        };
        MsgAddOracleResponse: {
            typeUrl: string;
            encode(_: _205.MsgAddOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.MsgAddOracleResponse;
            fromPartial(_: Partial<_205.MsgAddOracleResponse>): _205.MsgAddOracleResponse;
            fromAmino(_: _205.MsgAddOracleResponseAmino): _205.MsgAddOracleResponse;
            toAmino(_: _205.MsgAddOracleResponse): _205.MsgAddOracleResponseAmino;
            fromAminoMsg(object: _205.MsgAddOracleResponseAminoMsg): _205.MsgAddOracleResponse;
            fromProtoMsg(message: _205.MsgAddOracleResponseProtoMsg): _205.MsgAddOracleResponse;
            toProto(message: _205.MsgAddOracleResponse): Uint8Array;
            toProtoMsg(message: _205.MsgAddOracleResponse): _205.MsgAddOracleResponseProtoMsg;
        };
        MsgInstantiateOracle: {
            typeUrl: string;
            encode(message: _205.MsgInstantiateOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.MsgInstantiateOracle;
            fromPartial(object: Partial<_205.MsgInstantiateOracle>): _205.MsgInstantiateOracle;
            fromAmino(object: _205.MsgInstantiateOracleAmino): _205.MsgInstantiateOracle;
            toAmino(message: _205.MsgInstantiateOracle): _205.MsgInstantiateOracleAmino;
            fromAminoMsg(object: _205.MsgInstantiateOracleAminoMsg): _205.MsgInstantiateOracle;
            toAminoMsg(message: _205.MsgInstantiateOracle): _205.MsgInstantiateOracleAminoMsg;
            fromProtoMsg(message: _205.MsgInstantiateOracleProtoMsg): _205.MsgInstantiateOracle;
            toProto(message: _205.MsgInstantiateOracle): Uint8Array;
            toProtoMsg(message: _205.MsgInstantiateOracle): _205.MsgInstantiateOracleProtoMsg;
        };
        MsgInstantiateOracleResponse: {
            typeUrl: string;
            encode(_: _205.MsgInstantiateOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.MsgInstantiateOracleResponse;
            fromPartial(_: Partial<_205.MsgInstantiateOracleResponse>): _205.MsgInstantiateOracleResponse;
            fromAmino(_: _205.MsgInstantiateOracleResponseAmino): _205.MsgInstantiateOracleResponse;
            toAmino(_: _205.MsgInstantiateOracleResponse): _205.MsgInstantiateOracleResponseAmino;
            fromAminoMsg(object: _205.MsgInstantiateOracleResponseAminoMsg): _205.MsgInstantiateOracleResponse;
            fromProtoMsg(message: _205.MsgInstantiateOracleResponseProtoMsg): _205.MsgInstantiateOracleResponse;
            toProto(message: _205.MsgInstantiateOracleResponse): Uint8Array;
            toProtoMsg(message: _205.MsgInstantiateOracleResponse): _205.MsgInstantiateOracleResponseProtoMsg;
        };
        MsgRestoreOracleICA: {
            typeUrl: string;
            encode(message: _205.MsgRestoreOracleICA, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.MsgRestoreOracleICA;
            fromPartial(object: Partial<_205.MsgRestoreOracleICA>): _205.MsgRestoreOracleICA;
            fromAmino(object: _205.MsgRestoreOracleICAAmino): _205.MsgRestoreOracleICA;
            toAmino(message: _205.MsgRestoreOracleICA): _205.MsgRestoreOracleICAAmino;
            fromAminoMsg(object: _205.MsgRestoreOracleICAAminoMsg): _205.MsgRestoreOracleICA;
            toAminoMsg(message: _205.MsgRestoreOracleICA): _205.MsgRestoreOracleICAAminoMsg;
            fromProtoMsg(message: _205.MsgRestoreOracleICAProtoMsg): _205.MsgRestoreOracleICA;
            toProto(message: _205.MsgRestoreOracleICA): Uint8Array;
            toProtoMsg(message: _205.MsgRestoreOracleICA): _205.MsgRestoreOracleICAProtoMsg;
        };
        MsgRestoreOracleICAResponse: {
            typeUrl: string;
            encode(_: _205.MsgRestoreOracleICAResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.MsgRestoreOracleICAResponse;
            fromPartial(_: Partial<_205.MsgRestoreOracleICAResponse>): _205.MsgRestoreOracleICAResponse;
            fromAmino(_: _205.MsgRestoreOracleICAResponseAmino): _205.MsgRestoreOracleICAResponse;
            toAmino(_: _205.MsgRestoreOracleICAResponse): _205.MsgRestoreOracleICAResponseAmino;
            fromAminoMsg(object: _205.MsgRestoreOracleICAResponseAminoMsg): _205.MsgRestoreOracleICAResponse;
            fromProtoMsg(message: _205.MsgRestoreOracleICAResponseProtoMsg): _205.MsgRestoreOracleICAResponse;
            toProto(message: _205.MsgRestoreOracleICAResponse): Uint8Array;
            toProtoMsg(message: _205.MsgRestoreOracleICAResponse): _205.MsgRestoreOracleICAResponseProtoMsg;
        };
        MsgToggleOracle: {
            typeUrl: string;
            encode(message: _205.MsgToggleOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.MsgToggleOracle;
            fromPartial(object: Partial<_205.MsgToggleOracle>): _205.MsgToggleOracle;
            fromAmino(object: _205.MsgToggleOracleAmino): _205.MsgToggleOracle;
            toAmino(message: _205.MsgToggleOracle): _205.MsgToggleOracleAmino;
            fromAminoMsg(object: _205.MsgToggleOracleAminoMsg): _205.MsgToggleOracle;
            toAminoMsg(message: _205.MsgToggleOracle): _205.MsgToggleOracleAminoMsg;
            fromProtoMsg(message: _205.MsgToggleOracleProtoMsg): _205.MsgToggleOracle;
            toProto(message: _205.MsgToggleOracle): Uint8Array;
            toProtoMsg(message: _205.MsgToggleOracle): _205.MsgToggleOracleProtoMsg;
        };
        MsgToggleOracleResponse: {
            typeUrl: string;
            encode(_: _205.MsgToggleOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.MsgToggleOracleResponse;
            fromPartial(_: Partial<_205.MsgToggleOracleResponse>): _205.MsgToggleOracleResponse;
            fromAmino(_: _205.MsgToggleOracleResponseAmino): _205.MsgToggleOracleResponse;
            toAmino(_: _205.MsgToggleOracleResponse): _205.MsgToggleOracleResponseAmino;
            fromAminoMsg(object: _205.MsgToggleOracleResponseAminoMsg): _205.MsgToggleOracleResponse;
            fromProtoMsg(message: _205.MsgToggleOracleResponseProtoMsg): _205.MsgToggleOracleResponse;
            toProto(message: _205.MsgToggleOracleResponse): Uint8Array;
            toProtoMsg(message: _205.MsgToggleOracleResponse): _205.MsgToggleOracleResponseProtoMsg;
        };
        MsgRemoveOracle: {
            typeUrl: string;
            encode(message: _205.MsgRemoveOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.MsgRemoveOracle;
            fromPartial(object: Partial<_205.MsgRemoveOracle>): _205.MsgRemoveOracle;
            fromAmino(object: _205.MsgRemoveOracleAmino): _205.MsgRemoveOracle;
            toAmino(message: _205.MsgRemoveOracle): _205.MsgRemoveOracleAmino;
            fromAminoMsg(object: _205.MsgRemoveOracleAminoMsg): _205.MsgRemoveOracle;
            toAminoMsg(message: _205.MsgRemoveOracle): _205.MsgRemoveOracleAminoMsg;
            fromProtoMsg(message: _205.MsgRemoveOracleProtoMsg): _205.MsgRemoveOracle;
            toProto(message: _205.MsgRemoveOracle): Uint8Array;
            toProtoMsg(message: _205.MsgRemoveOracle): _205.MsgRemoveOracleProtoMsg;
        };
        MsgRemoveOracleResponse: {
            typeUrl: string;
            encode(_: _205.MsgRemoveOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.MsgRemoveOracleResponse;
            fromPartial(_: Partial<_205.MsgRemoveOracleResponse>): _205.MsgRemoveOracleResponse;
            fromAmino(_: _205.MsgRemoveOracleResponseAmino): _205.MsgRemoveOracleResponse;
            toAmino(_: _205.MsgRemoveOracleResponse): _205.MsgRemoveOracleResponseAmino;
            fromAminoMsg(object: _205.MsgRemoveOracleResponseAminoMsg): _205.MsgRemoveOracleResponse;
            fromProtoMsg(message: _205.MsgRemoveOracleResponseProtoMsg): _205.MsgRemoveOracleResponse;
            toProto(message: _205.MsgRemoveOracleResponse): Uint8Array;
            toProtoMsg(message: _205.MsgRemoveOracleResponse): _205.MsgRemoveOracleResponseProtoMsg;
        };
        QueryOracleRequest: {
            typeUrl: string;
            encode(message: _204.QueryOracleRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.QueryOracleRequest;
            fromPartial(object: Partial<_204.QueryOracleRequest>): _204.QueryOracleRequest;
            fromAmino(object: _204.QueryOracleRequestAmino): _204.QueryOracleRequest;
            toAmino(message: _204.QueryOracleRequest): _204.QueryOracleRequestAmino;
            fromAminoMsg(object: _204.QueryOracleRequestAminoMsg): _204.QueryOracleRequest;
            fromProtoMsg(message: _204.QueryOracleRequestProtoMsg): _204.QueryOracleRequest;
            toProto(message: _204.QueryOracleRequest): Uint8Array;
            toProtoMsg(message: _204.QueryOracleRequest): _204.QueryOracleRequestProtoMsg;
        };
        QueryOracleResponse: {
            typeUrl: string;
            encode(message: _204.QueryOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.QueryOracleResponse;
            fromPartial(object: Partial<_204.QueryOracleResponse>): _204.QueryOracleResponse;
            fromAmino(object: _204.QueryOracleResponseAmino): _204.QueryOracleResponse;
            toAmino(message: _204.QueryOracleResponse): _204.QueryOracleResponseAmino;
            fromAminoMsg(object: _204.QueryOracleResponseAminoMsg): _204.QueryOracleResponse;
            fromProtoMsg(message: _204.QueryOracleResponseProtoMsg): _204.QueryOracleResponse;
            toProto(message: _204.QueryOracleResponse): Uint8Array;
            toProtoMsg(message: _204.QueryOracleResponse): _204.QueryOracleResponseProtoMsg;
        };
        QueryAllOraclesRequest: {
            typeUrl: string;
            encode(_: _204.QueryAllOraclesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.QueryAllOraclesRequest;
            fromPartial(_: Partial<_204.QueryAllOraclesRequest>): _204.QueryAllOraclesRequest;
            fromAmino(_: _204.QueryAllOraclesRequestAmino): _204.QueryAllOraclesRequest;
            toAmino(_: _204.QueryAllOraclesRequest): _204.QueryAllOraclesRequestAmino;
            fromAminoMsg(object: _204.QueryAllOraclesRequestAminoMsg): _204.QueryAllOraclesRequest;
            fromProtoMsg(message: _204.QueryAllOraclesRequestProtoMsg): _204.QueryAllOraclesRequest;
            toProto(message: _204.QueryAllOraclesRequest): Uint8Array;
            toProtoMsg(message: _204.QueryAllOraclesRequest): _204.QueryAllOraclesRequestProtoMsg;
        };
        QueryAllOraclesResponse: {
            typeUrl: string;
            encode(message: _204.QueryAllOraclesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.QueryAllOraclesResponse;
            fromPartial(object: Partial<_204.QueryAllOraclesResponse>): _204.QueryAllOraclesResponse;
            fromAmino(object: _204.QueryAllOraclesResponseAmino): _204.QueryAllOraclesResponse;
            toAmino(message: _204.QueryAllOraclesResponse): _204.QueryAllOraclesResponseAmino;
            fromAminoMsg(object: _204.QueryAllOraclesResponseAminoMsg): _204.QueryAllOraclesResponse;
            fromProtoMsg(message: _204.QueryAllOraclesResponseProtoMsg): _204.QueryAllOraclesResponse;
            toProto(message: _204.QueryAllOraclesResponse): Uint8Array;
            toProtoMsg(message: _204.QueryAllOraclesResponse): _204.QueryAllOraclesResponseProtoMsg;
        };
        QueryActiveOraclesRequest: {
            typeUrl: string;
            encode(message: _204.QueryActiveOraclesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.QueryActiveOraclesRequest;
            fromPartial(object: Partial<_204.QueryActiveOraclesRequest>): _204.QueryActiveOraclesRequest;
            fromAmino(object: _204.QueryActiveOraclesRequestAmino): _204.QueryActiveOraclesRequest;
            toAmino(message: _204.QueryActiveOraclesRequest): _204.QueryActiveOraclesRequestAmino;
            fromAminoMsg(object: _204.QueryActiveOraclesRequestAminoMsg): _204.QueryActiveOraclesRequest;
            fromProtoMsg(message: _204.QueryActiveOraclesRequestProtoMsg): _204.QueryActiveOraclesRequest;
            toProto(message: _204.QueryActiveOraclesRequest): Uint8Array;
            toProtoMsg(message: _204.QueryActiveOraclesRequest): _204.QueryActiveOraclesRequestProtoMsg;
        };
        QueryActiveOraclesResponse: {
            typeUrl: string;
            encode(message: _204.QueryActiveOraclesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.QueryActiveOraclesResponse;
            fromPartial(object: Partial<_204.QueryActiveOraclesResponse>): _204.QueryActiveOraclesResponse;
            fromAmino(object: _204.QueryActiveOraclesResponseAmino): _204.QueryActiveOraclesResponse;
            toAmino(message: _204.QueryActiveOraclesResponse): _204.QueryActiveOraclesResponseAmino;
            fromAminoMsg(object: _204.QueryActiveOraclesResponseAminoMsg): _204.QueryActiveOraclesResponse;
            fromProtoMsg(message: _204.QueryActiveOraclesResponseProtoMsg): _204.QueryActiveOraclesResponse;
            toProto(message: _204.QueryActiveOraclesResponse): Uint8Array;
            toProtoMsg(message: _204.QueryActiveOraclesResponse): _204.QueryActiveOraclesResponseProtoMsg;
        };
        QueryMetricsRequest: {
            typeUrl: string;
            encode(message: _204.QueryMetricsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.QueryMetricsRequest;
            fromPartial(object: Partial<_204.QueryMetricsRequest>): _204.QueryMetricsRequest;
            fromAmino(object: _204.QueryMetricsRequestAmino): _204.QueryMetricsRequest;
            toAmino(message: _204.QueryMetricsRequest): _204.QueryMetricsRequestAmino;
            fromAminoMsg(object: _204.QueryMetricsRequestAminoMsg): _204.QueryMetricsRequest;
            fromProtoMsg(message: _204.QueryMetricsRequestProtoMsg): _204.QueryMetricsRequest;
            toProto(message: _204.QueryMetricsRequest): Uint8Array;
            toProtoMsg(message: _204.QueryMetricsRequest): _204.QueryMetricsRequestProtoMsg;
        };
        QueryMetricsResponse: {
            typeUrl: string;
            encode(message: _204.QueryMetricsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.QueryMetricsResponse;
            fromPartial(object: Partial<_204.QueryMetricsResponse>): _204.QueryMetricsResponse;
            fromAmino(object: _204.QueryMetricsResponseAmino): _204.QueryMetricsResponse;
            toAmino(message: _204.QueryMetricsResponse): _204.QueryMetricsResponseAmino;
            fromAminoMsg(object: _204.QueryMetricsResponseAminoMsg): _204.QueryMetricsResponse;
            fromProtoMsg(message: _204.QueryMetricsResponseProtoMsg): _204.QueryMetricsResponse;
            toProto(message: _204.QueryMetricsResponse): Uint8Array;
            toProtoMsg(message: _204.QueryMetricsResponse): _204.QueryMetricsResponseProtoMsg;
        };
        metricStatusFromJSON(object: any): _203.MetricStatus;
        metricStatusToJSON(object: _203.MetricStatus): string;
        MetricStatus: typeof _203.MetricStatus;
        MetricStatusSDKType: typeof _203.MetricStatus;
        MetricStatusAmino: typeof _203.MetricStatus;
        Oracle: {
            typeUrl: string;
            encode(message: _203.Oracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.Oracle;
            fromPartial(object: Partial<_203.Oracle>): _203.Oracle;
            fromAmino(object: _203.OracleAmino): _203.Oracle;
            toAmino(message: _203.Oracle): _203.OracleAmino;
            fromAminoMsg(object: _203.OracleAminoMsg): _203.Oracle;
            fromProtoMsg(message: _203.OracleProtoMsg): _203.Oracle;
            toProto(message: _203.Oracle): Uint8Array;
            toProtoMsg(message: _203.Oracle): _203.OracleProtoMsg;
        };
        Metric: {
            typeUrl: string;
            encode(message: _203.Metric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.Metric;
            fromPartial(object: Partial<_203.Metric>): _203.Metric;
            fromAmino(object: _203.MetricAmino): _203.Metric;
            toAmino(message: _203.Metric): _203.MetricAmino;
            fromAminoMsg(object: _203.MetricAminoMsg): _203.Metric;
            fromProtoMsg(message: _203.MetricProtoMsg): _203.Metric;
            toProto(message: _203.Metric): Uint8Array;
            toProtoMsg(message: _203.Metric): _203.MetricProtoMsg;
        };
        RedemptionRateAttributes: {
            typeUrl: string;
            encode(message: _203.RedemptionRateAttributes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.RedemptionRateAttributes;
            fromPartial(object: Partial<_203.RedemptionRateAttributes>): _203.RedemptionRateAttributes;
            fromAmino(object: _203.RedemptionRateAttributesAmino): _203.RedemptionRateAttributes;
            toAmino(message: _203.RedemptionRateAttributes): _203.RedemptionRateAttributesAmino;
            fromAminoMsg(object: _203.RedemptionRateAttributesAminoMsg): _203.RedemptionRateAttributes;
            fromProtoMsg(message: _203.RedemptionRateAttributesProtoMsg): _203.RedemptionRateAttributes;
            toProto(message: _203.RedemptionRateAttributes): Uint8Array;
            toProtoMsg(message: _203.RedemptionRateAttributes): _203.RedemptionRateAttributesProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _202.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.Params;
            fromPartial(_: Partial<_202.Params>): _202.Params;
            fromAmino(_: _202.ParamsAmino): _202.Params;
            toAmino(_: _202.Params): _202.ParamsAmino;
            fromAminoMsg(object: _202.ParamsAminoMsg): _202.Params;
            fromProtoMsg(message: _202.ParamsProtoMsg): _202.Params;
            toProto(message: _202.Params): Uint8Array;
            toProtoMsg(message: _202.Params): _202.ParamsProtoMsg;
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
        MsgInstantiateOracleContract: {
            typeUrl: string;
            encode(message: _201.MsgInstantiateOracleContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.MsgInstantiateOracleContract;
            fromPartial(object: Partial<_201.MsgInstantiateOracleContract>): _201.MsgInstantiateOracleContract;
            fromAmino(object: _201.MsgInstantiateOracleContractAmino): _201.MsgInstantiateOracleContract;
            toAmino(message: _201.MsgInstantiateOracleContract): _201.MsgInstantiateOracleContractAmino;
            fromAminoMsg(object: _201.MsgInstantiateOracleContractAminoMsg): _201.MsgInstantiateOracleContract;
            fromProtoMsg(message: _201.MsgInstantiateOracleContractProtoMsg): _201.MsgInstantiateOracleContract;
            toProto(message: _201.MsgInstantiateOracleContract): Uint8Array;
            toProtoMsg(message: _201.MsgInstantiateOracleContract): _201.MsgInstantiateOracleContractProtoMsg;
        };
        MsgExecuteContractPostMetric: {
            typeUrl: string;
            encode(message: _201.MsgExecuteContractPostMetric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.MsgExecuteContractPostMetric;
            fromPartial(object: Partial<_201.MsgExecuteContractPostMetric>): _201.MsgExecuteContractPostMetric;
            fromAmino(object: _201.MsgExecuteContractPostMetricAmino): _201.MsgExecuteContractPostMetric;
            toAmino(message: _201.MsgExecuteContractPostMetric): _201.MsgExecuteContractPostMetricAmino;
            fromAminoMsg(object: _201.MsgExecuteContractPostMetricAminoMsg): _201.MsgExecuteContractPostMetric;
            fromProtoMsg(message: _201.MsgExecuteContractPostMetricProtoMsg): _201.MsgExecuteContractPostMetric;
            toProto(message: _201.MsgExecuteContractPostMetric): Uint8Array;
            toProtoMsg(message: _201.MsgExecuteContractPostMetric): _201.MsgExecuteContractPostMetricProtoMsg;
        };
        MsgPostMetric: {
            typeUrl: string;
            encode(message: _201.MsgPostMetric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.MsgPostMetric;
            fromPartial(object: Partial<_201.MsgPostMetric>): _201.MsgPostMetric;
            fromAmino(object: _201.MsgPostMetricAmino): _201.MsgPostMetric;
            toAmino(message: _201.MsgPostMetric): _201.MsgPostMetricAmino;
            fromAminoMsg(object: _201.MsgPostMetricAminoMsg): _201.MsgPostMetric;
            fromProtoMsg(message: _201.MsgPostMetricProtoMsg): _201.MsgPostMetric;
            toProto(message: _201.MsgPostMetric): Uint8Array;
            toProtoMsg(message: _201.MsgPostMetric): _201.MsgPostMetricProtoMsg;
        };
        InstantiateOracleCallback: {
            typeUrl: string;
            encode(message: _200.InstantiateOracleCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.InstantiateOracleCallback;
            fromPartial(object: Partial<_200.InstantiateOracleCallback>): _200.InstantiateOracleCallback;
            fromAmino(object: _200.InstantiateOracleCallbackAmino): _200.InstantiateOracleCallback;
            toAmino(message: _200.InstantiateOracleCallback): _200.InstantiateOracleCallbackAmino;
            fromAminoMsg(object: _200.InstantiateOracleCallbackAminoMsg): _200.InstantiateOracleCallback;
            fromProtoMsg(message: _200.InstantiateOracleCallbackProtoMsg): _200.InstantiateOracleCallback;
            toProto(message: _200.InstantiateOracleCallback): Uint8Array;
            toProtoMsg(message: _200.InstantiateOracleCallback): _200.InstantiateOracleCallbackProtoMsg;
        };
        UpdateOracleCallback: {
            typeUrl: string;
            encode(message: _200.UpdateOracleCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.UpdateOracleCallback;
            fromPartial(object: Partial<_200.UpdateOracleCallback>): _200.UpdateOracleCallback;
            fromAmino(object: _200.UpdateOracleCallbackAmino): _200.UpdateOracleCallback;
            toAmino(message: _200.UpdateOracleCallback): _200.UpdateOracleCallbackAmino;
            fromAminoMsg(object: _200.UpdateOracleCallbackAminoMsg): _200.UpdateOracleCallback;
            fromProtoMsg(message: _200.UpdateOracleCallbackProtoMsg): _200.UpdateOracleCallback;
            toProto(message: _200.UpdateOracleCallback): Uint8Array;
            toProtoMsg(message: _200.UpdateOracleCallback): _200.UpdateOracleCallbackProtoMsg;
        };
    };
    const icqoracle: {
        MsgClientImpl: typeof _391.MsgClientImpl;
        QueryClientImpl: typeof _380.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            tokenPrice(request: _208.QueryTokenPriceRequest): Promise<_208.TokenPriceResponse>;
            tokenPrices(request?: _208.QueryTokenPricesRequest): Promise<_208.QueryTokenPricesResponse>;
            params(request?: _208.QueryParamsRequest): Promise<_208.QueryParamsResponse>;
            tokenPriceForQuoteDenom(request: _208.QueryTokenPriceForQuoteDenomRequest): Promise<_208.QueryTokenPriceForQuoteDenomResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                registerTokenPriceQuery(value: _209.MsgRegisterTokenPriceQuery): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeTokenPriceQuery(value: _209.MsgRemoveTokenPriceQuery): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateParams(value: _209.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                registerTokenPriceQuery(value: _209.MsgRegisterTokenPriceQuery): {
                    typeUrl: string;
                    value: _209.MsgRegisterTokenPriceQuery;
                };
                removeTokenPriceQuery(value: _209.MsgRemoveTokenPriceQuery): {
                    typeUrl: string;
                    value: _209.MsgRemoveTokenPriceQuery;
                };
                updateParams(value: _209.MsgUpdateParams): {
                    typeUrl: string;
                    value: _209.MsgUpdateParams;
                };
            };
            fromPartial: {
                registerTokenPriceQuery(value: _209.MsgRegisterTokenPriceQuery): {
                    typeUrl: string;
                    value: _209.MsgRegisterTokenPriceQuery;
                };
                removeTokenPriceQuery(value: _209.MsgRemoveTokenPriceQuery): {
                    typeUrl: string;
                    value: _209.MsgRemoveTokenPriceQuery;
                };
                updateParams(value: _209.MsgUpdateParams): {
                    typeUrl: string;
                    value: _209.MsgUpdateParams;
                };
            };
        };
        AminoConverter: {
            "/stride.icqoracle.MsgRegisterTokenPriceQuery": {
                aminoType: string;
                toAmino: (message: _209.MsgRegisterTokenPriceQuery) => _209.MsgRegisterTokenPriceQueryAmino;
                fromAmino: (object: _209.MsgRegisterTokenPriceQueryAmino) => _209.MsgRegisterTokenPriceQuery;
            };
            "/stride.icqoracle.MsgRemoveTokenPriceQuery": {
                aminoType: string;
                toAmino: (message: _209.MsgRemoveTokenPriceQuery) => _209.MsgRemoveTokenPriceQueryAmino;
                fromAmino: (object: _209.MsgRemoveTokenPriceQueryAmino) => _209.MsgRemoveTokenPriceQuery;
            };
            "/stride.icqoracle.MsgUpdateParams": {
                aminoType: string;
                toAmino: (message: _209.MsgUpdateParams) => _209.MsgUpdateParamsAmino;
                fromAmino: (object: _209.MsgUpdateParamsAmino) => _209.MsgUpdateParams;
            };
        };
        MsgRegisterTokenPriceQuery: {
            typeUrl: string;
            encode(message: _209.MsgRegisterTokenPriceQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.MsgRegisterTokenPriceQuery;
            fromPartial(object: Partial<_209.MsgRegisterTokenPriceQuery>): _209.MsgRegisterTokenPriceQuery;
            fromAmino(object: _209.MsgRegisterTokenPriceQueryAmino): _209.MsgRegisterTokenPriceQuery;
            toAmino(message: _209.MsgRegisterTokenPriceQuery): _209.MsgRegisterTokenPriceQueryAmino;
            fromAminoMsg(object: _209.MsgRegisterTokenPriceQueryAminoMsg): _209.MsgRegisterTokenPriceQuery;
            toAminoMsg(message: _209.MsgRegisterTokenPriceQuery): _209.MsgRegisterTokenPriceQueryAminoMsg;
            fromProtoMsg(message: _209.MsgRegisterTokenPriceQueryProtoMsg): _209.MsgRegisterTokenPriceQuery;
            toProto(message: _209.MsgRegisterTokenPriceQuery): Uint8Array;
            toProtoMsg(message: _209.MsgRegisterTokenPriceQuery): _209.MsgRegisterTokenPriceQueryProtoMsg;
        };
        MsgRegisterTokenPriceQueryResponse: {
            typeUrl: string;
            encode(_: _209.MsgRegisterTokenPriceQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.MsgRegisterTokenPriceQueryResponse;
            fromPartial(_: Partial<_209.MsgRegisterTokenPriceQueryResponse>): _209.MsgRegisterTokenPriceQueryResponse;
            fromAmino(_: _209.MsgRegisterTokenPriceQueryResponseAmino): _209.MsgRegisterTokenPriceQueryResponse;
            toAmino(_: _209.MsgRegisterTokenPriceQueryResponse): _209.MsgRegisterTokenPriceQueryResponseAmino;
            fromAminoMsg(object: _209.MsgRegisterTokenPriceQueryResponseAminoMsg): _209.MsgRegisterTokenPriceQueryResponse;
            fromProtoMsg(message: _209.MsgRegisterTokenPriceQueryResponseProtoMsg): _209.MsgRegisterTokenPriceQueryResponse;
            toProto(message: _209.MsgRegisterTokenPriceQueryResponse): Uint8Array;
            toProtoMsg(message: _209.MsgRegisterTokenPriceQueryResponse): _209.MsgRegisterTokenPriceQueryResponseProtoMsg;
        };
        MsgRemoveTokenPriceQuery: {
            typeUrl: string;
            encode(message: _209.MsgRemoveTokenPriceQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.MsgRemoveTokenPriceQuery;
            fromPartial(object: Partial<_209.MsgRemoveTokenPriceQuery>): _209.MsgRemoveTokenPriceQuery;
            fromAmino(object: _209.MsgRemoveTokenPriceQueryAmino): _209.MsgRemoveTokenPriceQuery;
            toAmino(message: _209.MsgRemoveTokenPriceQuery): _209.MsgRemoveTokenPriceQueryAmino;
            fromAminoMsg(object: _209.MsgRemoveTokenPriceQueryAminoMsg): _209.MsgRemoveTokenPriceQuery;
            toAminoMsg(message: _209.MsgRemoveTokenPriceQuery): _209.MsgRemoveTokenPriceQueryAminoMsg;
            fromProtoMsg(message: _209.MsgRemoveTokenPriceQueryProtoMsg): _209.MsgRemoveTokenPriceQuery;
            toProto(message: _209.MsgRemoveTokenPriceQuery): Uint8Array;
            toProtoMsg(message: _209.MsgRemoveTokenPriceQuery): _209.MsgRemoveTokenPriceQueryProtoMsg;
        };
        MsgRemoveTokenPriceQueryResponse: {
            typeUrl: string;
            encode(_: _209.MsgRemoveTokenPriceQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.MsgRemoveTokenPriceQueryResponse;
            fromPartial(_: Partial<_209.MsgRemoveTokenPriceQueryResponse>): _209.MsgRemoveTokenPriceQueryResponse;
            fromAmino(_: _209.MsgRemoveTokenPriceQueryResponseAmino): _209.MsgRemoveTokenPriceQueryResponse;
            toAmino(_: _209.MsgRemoveTokenPriceQueryResponse): _209.MsgRemoveTokenPriceQueryResponseAmino;
            fromAminoMsg(object: _209.MsgRemoveTokenPriceQueryResponseAminoMsg): _209.MsgRemoveTokenPriceQueryResponse;
            fromProtoMsg(message: _209.MsgRemoveTokenPriceQueryResponseProtoMsg): _209.MsgRemoveTokenPriceQueryResponse;
            toProto(message: _209.MsgRemoveTokenPriceQueryResponse): Uint8Array;
            toProtoMsg(message: _209.MsgRemoveTokenPriceQueryResponse): _209.MsgRemoveTokenPriceQueryResponseProtoMsg;
        };
        MsgUpdateParams: {
            typeUrl: string;
            encode(message: _209.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.MsgUpdateParams;
            fromPartial(object: Partial<_209.MsgUpdateParams>): _209.MsgUpdateParams;
            fromAmino(object: _209.MsgUpdateParamsAmino): _209.MsgUpdateParams;
            toAmino(message: _209.MsgUpdateParams): _209.MsgUpdateParamsAmino;
            fromAminoMsg(object: _209.MsgUpdateParamsAminoMsg): _209.MsgUpdateParams;
            toAminoMsg(message: _209.MsgUpdateParams): _209.MsgUpdateParamsAminoMsg;
            fromProtoMsg(message: _209.MsgUpdateParamsProtoMsg): _209.MsgUpdateParams;
            toProto(message: _209.MsgUpdateParams): Uint8Array;
            toProtoMsg(message: _209.MsgUpdateParams): _209.MsgUpdateParamsProtoMsg;
        };
        MsgUpdateParamsResponse: {
            typeUrl: string;
            encode(_: _209.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.MsgUpdateParamsResponse;
            fromPartial(_: Partial<_209.MsgUpdateParamsResponse>): _209.MsgUpdateParamsResponse;
            fromAmino(_: _209.MsgUpdateParamsResponseAmino): _209.MsgUpdateParamsResponse;
            toAmino(_: _209.MsgUpdateParamsResponse): _209.MsgUpdateParamsResponseAmino;
            fromAminoMsg(object: _209.MsgUpdateParamsResponseAminoMsg): _209.MsgUpdateParamsResponse;
            fromProtoMsg(message: _209.MsgUpdateParamsResponseProtoMsg): _209.MsgUpdateParamsResponse;
            toProto(message: _209.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _209.MsgUpdateParamsResponse): _209.MsgUpdateParamsResponseProtoMsg;
        };
        QueryTokenPriceRequest: {
            typeUrl: string;
            encode(message: _208.QueryTokenPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.QueryTokenPriceRequest;
            fromPartial(object: Partial<_208.QueryTokenPriceRequest>): _208.QueryTokenPriceRequest;
            fromAmino(object: _208.QueryTokenPriceRequestAmino): _208.QueryTokenPriceRequest;
            toAmino(message: _208.QueryTokenPriceRequest): _208.QueryTokenPriceRequestAmino;
            fromAminoMsg(object: _208.QueryTokenPriceRequestAminoMsg): _208.QueryTokenPriceRequest;
            fromProtoMsg(message: _208.QueryTokenPriceRequestProtoMsg): _208.QueryTokenPriceRequest;
            toProto(message: _208.QueryTokenPriceRequest): Uint8Array;
            toProtoMsg(message: _208.QueryTokenPriceRequest): _208.QueryTokenPriceRequestProtoMsg;
        };
        QueryTokenPricesRequest: {
            typeUrl: string;
            encode(message: _208.QueryTokenPricesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.QueryTokenPricesRequest;
            fromPartial(object: Partial<_208.QueryTokenPricesRequest>): _208.QueryTokenPricesRequest;
            fromAmino(object: _208.QueryTokenPricesRequestAmino): _208.QueryTokenPricesRequest;
            toAmino(message: _208.QueryTokenPricesRequest): _208.QueryTokenPricesRequestAmino;
            fromAminoMsg(object: _208.QueryTokenPricesRequestAminoMsg): _208.QueryTokenPricesRequest;
            fromProtoMsg(message: _208.QueryTokenPricesRequestProtoMsg): _208.QueryTokenPricesRequest;
            toProto(message: _208.QueryTokenPricesRequest): Uint8Array;
            toProtoMsg(message: _208.QueryTokenPricesRequest): _208.QueryTokenPricesRequestProtoMsg;
        };
        TokenPriceResponse: {
            typeUrl: string;
            encode(message: _208.TokenPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.TokenPriceResponse;
            fromPartial(object: Partial<_208.TokenPriceResponse>): _208.TokenPriceResponse;
            fromAmino(object: _208.TokenPriceResponseAmino): _208.TokenPriceResponse;
            toAmino(message: _208.TokenPriceResponse): _208.TokenPriceResponseAmino;
            fromAminoMsg(object: _208.TokenPriceResponseAminoMsg): _208.TokenPriceResponse;
            fromProtoMsg(message: _208.TokenPriceResponseProtoMsg): _208.TokenPriceResponse;
            toProto(message: _208.TokenPriceResponse): Uint8Array;
            toProtoMsg(message: _208.TokenPriceResponse): _208.TokenPriceResponseProtoMsg;
        };
        QueryTokenPricesResponse: {
            typeUrl: string;
            encode(message: _208.QueryTokenPricesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.QueryTokenPricesResponse;
            fromPartial(object: Partial<_208.QueryTokenPricesResponse>): _208.QueryTokenPricesResponse;
            fromAmino(object: _208.QueryTokenPricesResponseAmino): _208.QueryTokenPricesResponse;
            toAmino(message: _208.QueryTokenPricesResponse): _208.QueryTokenPricesResponseAmino;
            fromAminoMsg(object: _208.QueryTokenPricesResponseAminoMsg): _208.QueryTokenPricesResponse;
            fromProtoMsg(message: _208.QueryTokenPricesResponseProtoMsg): _208.QueryTokenPricesResponse;
            toProto(message: _208.QueryTokenPricesResponse): Uint8Array;
            toProtoMsg(message: _208.QueryTokenPricesResponse): _208.QueryTokenPricesResponseProtoMsg;
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
        QueryTokenPriceForQuoteDenomRequest: {
            typeUrl: string;
            encode(message: _208.QueryTokenPriceForQuoteDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.QueryTokenPriceForQuoteDenomRequest;
            fromPartial(object: Partial<_208.QueryTokenPriceForQuoteDenomRequest>): _208.QueryTokenPriceForQuoteDenomRequest;
            fromAmino(object: _208.QueryTokenPriceForQuoteDenomRequestAmino): _208.QueryTokenPriceForQuoteDenomRequest;
            toAmino(message: _208.QueryTokenPriceForQuoteDenomRequest): _208.QueryTokenPriceForQuoteDenomRequestAmino;
            fromAminoMsg(object: _208.QueryTokenPriceForQuoteDenomRequestAminoMsg): _208.QueryTokenPriceForQuoteDenomRequest;
            fromProtoMsg(message: _208.QueryTokenPriceForQuoteDenomRequestProtoMsg): _208.QueryTokenPriceForQuoteDenomRequest;
            toProto(message: _208.QueryTokenPriceForQuoteDenomRequest): Uint8Array;
            toProtoMsg(message: _208.QueryTokenPriceForQuoteDenomRequest): _208.QueryTokenPriceForQuoteDenomRequestProtoMsg;
        };
        QueryTokenPriceForQuoteDenomResponse: {
            typeUrl: string;
            encode(message: _208.QueryTokenPriceForQuoteDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.QueryTokenPriceForQuoteDenomResponse;
            fromPartial(object: Partial<_208.QueryTokenPriceForQuoteDenomResponse>): _208.QueryTokenPriceForQuoteDenomResponse;
            fromAmino(object: _208.QueryTokenPriceForQuoteDenomResponseAmino): _208.QueryTokenPriceForQuoteDenomResponse;
            toAmino(message: _208.QueryTokenPriceForQuoteDenomResponse): _208.QueryTokenPriceForQuoteDenomResponseAmino;
            fromAminoMsg(object: _208.QueryTokenPriceForQuoteDenomResponseAminoMsg): _208.QueryTokenPriceForQuoteDenomResponse;
            fromProtoMsg(message: _208.QueryTokenPriceForQuoteDenomResponseProtoMsg): _208.QueryTokenPriceForQuoteDenomResponse;
            toProto(message: _208.QueryTokenPriceForQuoteDenomResponse): Uint8Array;
            toProtoMsg(message: _208.QueryTokenPriceForQuoteDenomResponse): _208.QueryTokenPriceForQuoteDenomResponseProtoMsg;
        };
        TokenPrice: {
            typeUrl: string;
            encode(message: _207.TokenPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.TokenPrice;
            fromPartial(object: Partial<_207.TokenPrice>): _207.TokenPrice;
            fromAmino(object: _207.TokenPriceAmino): _207.TokenPrice;
            toAmino(message: _207.TokenPrice): _207.TokenPriceAmino;
            fromAminoMsg(object: _207.TokenPriceAminoMsg): _207.TokenPrice;
            fromProtoMsg(message: _207.TokenPriceProtoMsg): _207.TokenPrice;
            toProto(message: _207.TokenPrice): Uint8Array;
            toProtoMsg(message: _207.TokenPrice): _207.TokenPriceProtoMsg;
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
    namespace interchainquery {
        const v1: {
            MsgClientImpl: typeof _392.MsgClientImpl;
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitQueryResponse(value: _211.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitQueryResponse(value: _211.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _211.MsgSubmitQueryResponse;
                    };
                };
                fromPartial: {
                    submitQueryResponse(value: _211.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _211.MsgSubmitQueryResponse;
                    };
                };
            };
            AminoConverter: {
                "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
                    aminoType: string;
                    toAmino: (message: _211.MsgSubmitQueryResponse) => _211.MsgSubmitQueryResponseAmino;
                    fromAmino: (object: _211.MsgSubmitQueryResponseAmino) => _211.MsgSubmitQueryResponse;
                };
            };
            QueryPendingQueriesRequest: {
                typeUrl: string;
                encode(_: _212.QueryPendingQueriesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.QueryPendingQueriesRequest;
                fromPartial(_: Partial<_212.QueryPendingQueriesRequest>): _212.QueryPendingQueriesRequest;
                fromAmino(_: _212.QueryPendingQueriesRequestAmino): _212.QueryPendingQueriesRequest;
                toAmino(_: _212.QueryPendingQueriesRequest): _212.QueryPendingQueriesRequestAmino;
                fromAminoMsg(object: _212.QueryPendingQueriesRequestAminoMsg): _212.QueryPendingQueriesRequest;
                fromProtoMsg(message: _212.QueryPendingQueriesRequestProtoMsg): _212.QueryPendingQueriesRequest;
                toProto(message: _212.QueryPendingQueriesRequest): Uint8Array;
                toProtoMsg(message: _212.QueryPendingQueriesRequest): _212.QueryPendingQueriesRequestProtoMsg;
            };
            QueryPendingQueriesResponse: {
                typeUrl: string;
                encode(message: _212.QueryPendingQueriesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.QueryPendingQueriesResponse;
                fromPartial(object: Partial<_212.QueryPendingQueriesResponse>): _212.QueryPendingQueriesResponse;
                fromAmino(object: _212.QueryPendingQueriesResponseAmino): _212.QueryPendingQueriesResponse;
                toAmino(message: _212.QueryPendingQueriesResponse): _212.QueryPendingQueriesResponseAmino;
                fromAminoMsg(object: _212.QueryPendingQueriesResponseAminoMsg): _212.QueryPendingQueriesResponse;
                fromProtoMsg(message: _212.QueryPendingQueriesResponseProtoMsg): _212.QueryPendingQueriesResponse;
                toProto(message: _212.QueryPendingQueriesResponse): Uint8Array;
                toProtoMsg(message: _212.QueryPendingQueriesResponse): _212.QueryPendingQueriesResponseProtoMsg;
            };
            MsgSubmitQueryResponse: {
                typeUrl: string;
                encode(message: _211.MsgSubmitQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.MsgSubmitQueryResponse;
                fromPartial(object: Partial<_211.MsgSubmitQueryResponse>): _211.MsgSubmitQueryResponse;
                fromAmino(object: _211.MsgSubmitQueryResponseAmino): _211.MsgSubmitQueryResponse;
                toAmino(message: _211.MsgSubmitQueryResponse): _211.MsgSubmitQueryResponseAmino;
                fromAminoMsg(object: _211.MsgSubmitQueryResponseAminoMsg): _211.MsgSubmitQueryResponse;
                fromProtoMsg(message: _211.MsgSubmitQueryResponseProtoMsg): _211.MsgSubmitQueryResponse;
                toProto(message: _211.MsgSubmitQueryResponse): Uint8Array;
                toProtoMsg(message: _211.MsgSubmitQueryResponse): _211.MsgSubmitQueryResponseProtoMsg;
            };
            MsgSubmitQueryResponseResponse: {
                typeUrl: string;
                encode(_: _211.MsgSubmitQueryResponseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.MsgSubmitQueryResponseResponse;
                fromPartial(_: Partial<_211.MsgSubmitQueryResponseResponse>): _211.MsgSubmitQueryResponseResponse;
                fromAmino(_: _211.MsgSubmitQueryResponseResponseAmino): _211.MsgSubmitQueryResponseResponse;
                toAmino(_: _211.MsgSubmitQueryResponseResponse): _211.MsgSubmitQueryResponseResponseAmino;
                fromAminoMsg(object: _211.MsgSubmitQueryResponseResponseAminoMsg): _211.MsgSubmitQueryResponseResponse;
                fromProtoMsg(message: _211.MsgSubmitQueryResponseResponseProtoMsg): _211.MsgSubmitQueryResponseResponse;
                toProto(message: _211.MsgSubmitQueryResponseResponse): Uint8Array;
                toProtoMsg(message: _211.MsgSubmitQueryResponseResponse): _211.MsgSubmitQueryResponseResponseProtoMsg;
            };
            timeoutPolicyFromJSON(object: any): _210.TimeoutPolicy;
            timeoutPolicyToJSON(object: _210.TimeoutPolicy): string;
            TimeoutPolicy: typeof _210.TimeoutPolicy;
            TimeoutPolicySDKType: typeof _210.TimeoutPolicy;
            TimeoutPolicyAmino: typeof _210.TimeoutPolicy;
            Query: {
                typeUrl: string;
                encode(message: _210.Query, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.Query;
                fromPartial(object: Partial<_210.Query>): _210.Query;
                fromAmino(object: _210.QueryAmino): _210.Query;
                toAmino(message: _210.Query): _210.QueryAmino;
                fromAminoMsg(object: _210.QueryAminoMsg): _210.Query;
                fromProtoMsg(message: _210.QueryProtoMsg): _210.Query;
                toProto(message: _210.Query): Uint8Array;
                toProtoMsg(message: _210.Query): _210.QueryProtoMsg;
            };
            DataPoint: {
                typeUrl: string;
                encode(message: _210.DataPoint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.DataPoint;
                fromPartial(object: Partial<_210.DataPoint>): _210.DataPoint;
                fromAmino(object: _210.DataPointAmino): _210.DataPoint;
                toAmino(message: _210.DataPoint): _210.DataPointAmino;
                fromAminoMsg(object: _210.DataPointAminoMsg): _210.DataPoint;
                fromProtoMsg(message: _210.DataPointProtoMsg): _210.DataPoint;
                toProto(message: _210.DataPoint): Uint8Array;
                toProtoMsg(message: _210.DataPoint): _210.DataPointProtoMsg;
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
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _381.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _215.QueryParamsRequest): Promise<_215.QueryParamsResponse>;
                epochProvisions(request?: _215.QueryEpochProvisionsRequest): Promise<_215.QueryEpochProvisionsResponse>;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _215.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.QueryParamsRequest;
                fromPartial(_: Partial<_215.QueryParamsRequest>): _215.QueryParamsRequest;
                fromAmino(_: _215.QueryParamsRequestAmino): _215.QueryParamsRequest;
                toAmino(_: _215.QueryParamsRequest): _215.QueryParamsRequestAmino;
                fromAminoMsg(object: _215.QueryParamsRequestAminoMsg): _215.QueryParamsRequest;
                fromProtoMsg(message: _215.QueryParamsRequestProtoMsg): _215.QueryParamsRequest;
                toProto(message: _215.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _215.QueryParamsRequest): _215.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _215.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.QueryParamsResponse;
                fromPartial(object: Partial<_215.QueryParamsResponse>): _215.QueryParamsResponse;
                fromAmino(object: _215.QueryParamsResponseAmino): _215.QueryParamsResponse;
                toAmino(message: _215.QueryParamsResponse): _215.QueryParamsResponseAmino;
                fromAminoMsg(object: _215.QueryParamsResponseAminoMsg): _215.QueryParamsResponse;
                fromProtoMsg(message: _215.QueryParamsResponseProtoMsg): _215.QueryParamsResponse;
                toProto(message: _215.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _215.QueryParamsResponse): _215.QueryParamsResponseProtoMsg;
            };
            QueryEpochProvisionsRequest: {
                typeUrl: string;
                encode(_: _215.QueryEpochProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_215.QueryEpochProvisionsRequest>): _215.QueryEpochProvisionsRequest;
                fromAmino(_: _215.QueryEpochProvisionsRequestAmino): _215.QueryEpochProvisionsRequest;
                toAmino(_: _215.QueryEpochProvisionsRequest): _215.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _215.QueryEpochProvisionsRequestAminoMsg): _215.QueryEpochProvisionsRequest;
                fromProtoMsg(message: _215.QueryEpochProvisionsRequestProtoMsg): _215.QueryEpochProvisionsRequest;
                toProto(message: _215.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _215.QueryEpochProvisionsRequest): _215.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                typeUrl: string;
                encode(message: _215.QueryEpochProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_215.QueryEpochProvisionsResponse>): _215.QueryEpochProvisionsResponse;
                fromAmino(object: _215.QueryEpochProvisionsResponseAmino): _215.QueryEpochProvisionsResponse;
                toAmino(message: _215.QueryEpochProvisionsResponse): _215.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _215.QueryEpochProvisionsResponseAminoMsg): _215.QueryEpochProvisionsResponse;
                fromProtoMsg(message: _215.QueryEpochProvisionsResponseProtoMsg): _215.QueryEpochProvisionsResponse;
                toProto(message: _215.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _215.QueryEpochProvisionsResponse): _215.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _214.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.Minter;
                fromPartial(object: Partial<_214.Minter>): _214.Minter;
                fromAmino(object: _214.MinterAmino): _214.Minter;
                toAmino(message: _214.Minter): _214.MinterAmino;
                fromAminoMsg(object: _214.MinterAminoMsg): _214.Minter;
                fromProtoMsg(message: _214.MinterProtoMsg): _214.Minter;
                toProto(message: _214.Minter): Uint8Array;
                toProtoMsg(message: _214.Minter): _214.MinterProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                encode(message: _214.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.DistributionProportions;
                fromPartial(object: Partial<_214.DistributionProportions>): _214.DistributionProportions;
                fromAmino(object: _214.DistributionProportionsAmino): _214.DistributionProportions;
                toAmino(message: _214.DistributionProportions): _214.DistributionProportionsAmino;
                fromAminoMsg(object: _214.DistributionProportionsAminoMsg): _214.DistributionProportions;
                fromProtoMsg(message: _214.DistributionProportionsProtoMsg): _214.DistributionProportions;
                toProto(message: _214.DistributionProportions): Uint8Array;
                toProtoMsg(message: _214.DistributionProportions): _214.DistributionProportionsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _214.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.Params;
                fromPartial(object: Partial<_214.Params>): _214.Params;
                fromAmino(object: _214.ParamsAmino): _214.Params;
                toAmino(message: _214.Params): _214.ParamsAmino;
                fromAminoMsg(object: _214.ParamsAminoMsg): _214.Params;
                fromProtoMsg(message: _214.ParamsProtoMsg): _214.Params;
                toProto(message: _214.Params): Uint8Array;
                toProtoMsg(message: _214.Params): _214.ParamsProtoMsg;
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
        };
    }
    const records: {
        QueryClientImpl: typeof _382.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _219.QueryParamsRequest): Promise<_219.QueryParamsResponse>;
            userRedemptionRecord(request: _219.QueryGetUserRedemptionRecordRequest): Promise<_219.QueryGetUserRedemptionRecordResponse>;
            userRedemptionRecordAll(request?: _219.QueryAllUserRedemptionRecordRequest): Promise<_219.QueryAllUserRedemptionRecordResponse>;
            userRedemptionRecordForUser(request: _219.QueryAllUserRedemptionRecordForUserRequest): Promise<_219.QueryAllUserRedemptionRecordForUserResponse>;
            epochUnbondingRecord(request: _219.QueryGetEpochUnbondingRecordRequest): Promise<_219.QueryGetEpochUnbondingRecordResponse>;
            epochUnbondingRecordAll(request?: _219.QueryAllEpochUnbondingRecordRequest): Promise<_219.QueryAllEpochUnbondingRecordResponse>;
            depositRecord(request: _219.QueryGetDepositRecordRequest): Promise<_219.QueryGetDepositRecordResponse>;
            depositRecordAll(request?: _219.QueryAllDepositRecordRequest): Promise<_219.QueryAllDepositRecordResponse>;
            depositRecordByHost(request: _219.QueryDepositRecordByHostRequest): Promise<_219.QueryDepositRecordByHostResponse>;
            lSMDeposit(request: _219.QueryLSMDepositRequest): Promise<_219.QueryLSMDepositResponse>;
            lSMDeposits(request: _219.QueryLSMDepositsRequest): Promise<_219.QueryLSMDepositsResponse>;
        };
        depositRecord_StatusFromJSON(object: any): _220.DepositRecord_Status;
        depositRecord_StatusToJSON(object: _220.DepositRecord_Status): string;
        depositRecord_SourceFromJSON(object: any): _220.DepositRecord_Source;
        depositRecord_SourceToJSON(object: _220.DepositRecord_Source): string;
        hostZoneUnbonding_StatusFromJSON(object: any): _220.HostZoneUnbonding_Status;
        hostZoneUnbonding_StatusToJSON(object: _220.HostZoneUnbonding_Status): string;
        lSMTokenDeposit_StatusFromJSON(object: any): _220.LSMTokenDeposit_Status;
        lSMTokenDeposit_StatusToJSON(object: _220.LSMTokenDeposit_Status): string;
        DepositRecord_Status: typeof _220.DepositRecord_Status;
        DepositRecord_StatusSDKType: typeof _220.DepositRecord_Status;
        DepositRecord_StatusAmino: typeof _220.DepositRecord_Status;
        DepositRecord_Source: typeof _220.DepositRecord_Source;
        DepositRecord_SourceSDKType: typeof _220.DepositRecord_Source;
        DepositRecord_SourceAmino: typeof _220.DepositRecord_Source;
        HostZoneUnbonding_Status: typeof _220.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusSDKType: typeof _220.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusAmino: typeof _220.HostZoneUnbonding_Status;
        LSMTokenDeposit_Status: typeof _220.LSMTokenDeposit_Status;
        LSMTokenDeposit_StatusSDKType: typeof _220.LSMTokenDeposit_Status;
        LSMTokenDeposit_StatusAmino: typeof _220.LSMTokenDeposit_Status;
        UserRedemptionRecord: {
            typeUrl: string;
            encode(message: _220.UserRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _220.UserRedemptionRecord;
            fromPartial(object: Partial<_220.UserRedemptionRecord>): _220.UserRedemptionRecord;
            fromAmino(object: _220.UserRedemptionRecordAmino): _220.UserRedemptionRecord;
            toAmino(message: _220.UserRedemptionRecord): _220.UserRedemptionRecordAmino;
            fromAminoMsg(object: _220.UserRedemptionRecordAminoMsg): _220.UserRedemptionRecord;
            fromProtoMsg(message: _220.UserRedemptionRecordProtoMsg): _220.UserRedemptionRecord;
            toProto(message: _220.UserRedemptionRecord): Uint8Array;
            toProtoMsg(message: _220.UserRedemptionRecord): _220.UserRedemptionRecordProtoMsg;
        };
        DepositRecord: {
            typeUrl: string;
            encode(message: _220.DepositRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _220.DepositRecord;
            fromPartial(object: Partial<_220.DepositRecord>): _220.DepositRecord;
            fromAmino(object: _220.DepositRecordAmino): _220.DepositRecord;
            toAmino(message: _220.DepositRecord): _220.DepositRecordAmino;
            fromAminoMsg(object: _220.DepositRecordAminoMsg): _220.DepositRecord;
            fromProtoMsg(message: _220.DepositRecordProtoMsg): _220.DepositRecord;
            toProto(message: _220.DepositRecord): Uint8Array;
            toProtoMsg(message: _220.DepositRecord): _220.DepositRecordProtoMsg;
        };
        HostZoneUnbonding: {
            typeUrl: string;
            encode(message: _220.HostZoneUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _220.HostZoneUnbonding;
            fromPartial(object: Partial<_220.HostZoneUnbonding>): _220.HostZoneUnbonding;
            fromAmino(object: _220.HostZoneUnbondingAmino): _220.HostZoneUnbonding;
            toAmino(message: _220.HostZoneUnbonding): _220.HostZoneUnbondingAmino;
            fromAminoMsg(object: _220.HostZoneUnbondingAminoMsg): _220.HostZoneUnbonding;
            fromProtoMsg(message: _220.HostZoneUnbondingProtoMsg): _220.HostZoneUnbonding;
            toProto(message: _220.HostZoneUnbonding): Uint8Array;
            toProtoMsg(message: _220.HostZoneUnbonding): _220.HostZoneUnbondingProtoMsg;
        };
        EpochUnbondingRecord: {
            typeUrl: string;
            encode(message: _220.EpochUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _220.EpochUnbondingRecord;
            fromPartial(object: Partial<_220.EpochUnbondingRecord>): _220.EpochUnbondingRecord;
            fromAmino(object: _220.EpochUnbondingRecordAmino): _220.EpochUnbondingRecord;
            toAmino(message: _220.EpochUnbondingRecord): _220.EpochUnbondingRecordAmino;
            fromAminoMsg(object: _220.EpochUnbondingRecordAminoMsg): _220.EpochUnbondingRecord;
            fromProtoMsg(message: _220.EpochUnbondingRecordProtoMsg): _220.EpochUnbondingRecord;
            toProto(message: _220.EpochUnbondingRecord): Uint8Array;
            toProtoMsg(message: _220.EpochUnbondingRecord): _220.EpochUnbondingRecordProtoMsg;
        };
        LSMTokenDeposit: {
            typeUrl: string;
            encode(message: _220.LSMTokenDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _220.LSMTokenDeposit;
            fromPartial(object: Partial<_220.LSMTokenDeposit>): _220.LSMTokenDeposit;
            fromAmino(object: _220.LSMTokenDepositAmino): _220.LSMTokenDeposit;
            toAmino(message: _220.LSMTokenDeposit): _220.LSMTokenDepositAmino;
            fromAminoMsg(object: _220.LSMTokenDepositAminoMsg): _220.LSMTokenDeposit;
            fromProtoMsg(message: _220.LSMTokenDepositProtoMsg): _220.LSMTokenDeposit;
            toProto(message: _220.LSMTokenDeposit): Uint8Array;
            toProtoMsg(message: _220.LSMTokenDeposit): _220.LSMTokenDepositProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _219.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.QueryParamsRequest;
            fromPartial(_: Partial<_219.QueryParamsRequest>): _219.QueryParamsRequest;
            fromAmino(_: _219.QueryParamsRequestAmino): _219.QueryParamsRequest;
            toAmino(_: _219.QueryParamsRequest): _219.QueryParamsRequestAmino;
            fromAminoMsg(object: _219.QueryParamsRequestAminoMsg): _219.QueryParamsRequest;
            fromProtoMsg(message: _219.QueryParamsRequestProtoMsg): _219.QueryParamsRequest;
            toProto(message: _219.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _219.QueryParamsRequest): _219.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _219.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.QueryParamsResponse;
            fromPartial(object: Partial<_219.QueryParamsResponse>): _219.QueryParamsResponse;
            fromAmino(object: _219.QueryParamsResponseAmino): _219.QueryParamsResponse;
            toAmino(message: _219.QueryParamsResponse): _219.QueryParamsResponseAmino;
            fromAminoMsg(object: _219.QueryParamsResponseAminoMsg): _219.QueryParamsResponse;
            fromProtoMsg(message: _219.QueryParamsResponseProtoMsg): _219.QueryParamsResponse;
            toProto(message: _219.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _219.QueryParamsResponse): _219.QueryParamsResponseProtoMsg;
        };
        QueryGetDepositRecordRequest: {
            typeUrl: string;
            encode(message: _219.QueryGetDepositRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.QueryGetDepositRecordRequest;
            fromPartial(object: Partial<_219.QueryGetDepositRecordRequest>): _219.QueryGetDepositRecordRequest;
            fromAmino(object: _219.QueryGetDepositRecordRequestAmino): _219.QueryGetDepositRecordRequest;
            toAmino(message: _219.QueryGetDepositRecordRequest): _219.QueryGetDepositRecordRequestAmino;
            fromAminoMsg(object: _219.QueryGetDepositRecordRequestAminoMsg): _219.QueryGetDepositRecordRequest;
            fromProtoMsg(message: _219.QueryGetDepositRecordRequestProtoMsg): _219.QueryGetDepositRecordRequest;
            toProto(message: _219.QueryGetDepositRecordRequest): Uint8Array;
            toProtoMsg(message: _219.QueryGetDepositRecordRequest): _219.QueryGetDepositRecordRequestProtoMsg;
        };
        QueryGetDepositRecordResponse: {
            typeUrl: string;
            encode(message: _219.QueryGetDepositRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.QueryGetDepositRecordResponse;
            fromPartial(object: Partial<_219.QueryGetDepositRecordResponse>): _219.QueryGetDepositRecordResponse;
            fromAmino(object: _219.QueryGetDepositRecordResponseAmino): _219.QueryGetDepositRecordResponse;
            toAmino(message: _219.QueryGetDepositRecordResponse): _219.QueryGetDepositRecordResponseAmino;
            fromAminoMsg(object: _219.QueryGetDepositRecordResponseAminoMsg): _219.QueryGetDepositRecordResponse;
            fromProtoMsg(message: _219.QueryGetDepositRecordResponseProtoMsg): _219.QueryGetDepositRecordResponse;
            toProto(message: _219.QueryGetDepositRecordResponse): Uint8Array;
            toProtoMsg(message: _219.QueryGetDepositRecordResponse): _219.QueryGetDepositRecordResponseProtoMsg;
        };
        QueryAllDepositRecordRequest: {
            typeUrl: string;
            encode(message: _219.QueryAllDepositRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.QueryAllDepositRecordRequest;
            fromPartial(object: Partial<_219.QueryAllDepositRecordRequest>): _219.QueryAllDepositRecordRequest;
            fromAmino(object: _219.QueryAllDepositRecordRequestAmino): _219.QueryAllDepositRecordRequest;
            toAmino(message: _219.QueryAllDepositRecordRequest): _219.QueryAllDepositRecordRequestAmino;
            fromAminoMsg(object: _219.QueryAllDepositRecordRequestAminoMsg): _219.QueryAllDepositRecordRequest;
            fromProtoMsg(message: _219.QueryAllDepositRecordRequestProtoMsg): _219.QueryAllDepositRecordRequest;
            toProto(message: _219.QueryAllDepositRecordRequest): Uint8Array;
            toProtoMsg(message: _219.QueryAllDepositRecordRequest): _219.QueryAllDepositRecordRequestProtoMsg;
        };
        QueryAllDepositRecordResponse: {
            typeUrl: string;
            encode(message: _219.QueryAllDepositRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.QueryAllDepositRecordResponse;
            fromPartial(object: Partial<_219.QueryAllDepositRecordResponse>): _219.QueryAllDepositRecordResponse;
            fromAmino(object: _219.QueryAllDepositRecordResponseAmino): _219.QueryAllDepositRecordResponse;
            toAmino(message: _219.QueryAllDepositRecordResponse): _219.QueryAllDepositRecordResponseAmino;
            fromAminoMsg(object: _219.QueryAllDepositRecordResponseAminoMsg): _219.QueryAllDepositRecordResponse;
            fromProtoMsg(message: _219.QueryAllDepositRecordResponseProtoMsg): _219.QueryAllDepositRecordResponse;
            toProto(message: _219.QueryAllDepositRecordResponse): Uint8Array;
            toProtoMsg(message: _219.QueryAllDepositRecordResponse): _219.QueryAllDepositRecordResponseProtoMsg;
        };
        QueryDepositRecordByHostRequest: {
            typeUrl: string;
            encode(message: _219.QueryDepositRecordByHostRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.QueryDepositRecordByHostRequest;
            fromPartial(object: Partial<_219.QueryDepositRecordByHostRequest>): _219.QueryDepositRecordByHostRequest;
            fromAmino(object: _219.QueryDepositRecordByHostRequestAmino): _219.QueryDepositRecordByHostRequest;
            toAmino(message: _219.QueryDepositRecordByHostRequest): _219.QueryDepositRecordByHostRequestAmino;
            fromAminoMsg(object: _219.QueryDepositRecordByHostRequestAminoMsg): _219.QueryDepositRecordByHostRequest;
            fromProtoMsg(message: _219.QueryDepositRecordByHostRequestProtoMsg): _219.QueryDepositRecordByHostRequest;
            toProto(message: _219.QueryDepositRecordByHostRequest): Uint8Array;
            toProtoMsg(message: _219.QueryDepositRecordByHostRequest): _219.QueryDepositRecordByHostRequestProtoMsg;
        };
        QueryDepositRecordByHostResponse: {
            typeUrl: string;
            encode(message: _219.QueryDepositRecordByHostResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.QueryDepositRecordByHostResponse;
            fromPartial(object: Partial<_219.QueryDepositRecordByHostResponse>): _219.QueryDepositRecordByHostResponse;
            fromAmino(object: _219.QueryDepositRecordByHostResponseAmino): _219.QueryDepositRecordByHostResponse;
            toAmino(message: _219.QueryDepositRecordByHostResponse): _219.QueryDepositRecordByHostResponseAmino;
            fromAminoMsg(object: _219.QueryDepositRecordByHostResponseAminoMsg): _219.QueryDepositRecordByHostResponse;
            fromProtoMsg(message: _219.QueryDepositRecordByHostResponseProtoMsg): _219.QueryDepositRecordByHostResponse;
            toProto(message: _219.QueryDepositRecordByHostResponse): Uint8Array;
            toProtoMsg(message: _219.QueryDepositRecordByHostResponse): _219.QueryDepositRecordByHostResponseProtoMsg;
        };
        QueryGetUserRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _219.QueryGetUserRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.QueryGetUserRedemptionRecordRequest;
            fromPartial(object: Partial<_219.QueryGetUserRedemptionRecordRequest>): _219.QueryGetUserRedemptionRecordRequest;
            fromAmino(object: _219.QueryGetUserRedemptionRecordRequestAmino): _219.QueryGetUserRedemptionRecordRequest;
            toAmino(message: _219.QueryGetUserRedemptionRecordRequest): _219.QueryGetUserRedemptionRecordRequestAmino;
            fromAminoMsg(object: _219.QueryGetUserRedemptionRecordRequestAminoMsg): _219.QueryGetUserRedemptionRecordRequest;
            fromProtoMsg(message: _219.QueryGetUserRedemptionRecordRequestProtoMsg): _219.QueryGetUserRedemptionRecordRequest;
            toProto(message: _219.QueryGetUserRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _219.QueryGetUserRedemptionRecordRequest): _219.QueryGetUserRedemptionRecordRequestProtoMsg;
        };
        QueryGetUserRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _219.QueryGetUserRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.QueryGetUserRedemptionRecordResponse;
            fromPartial(object: Partial<_219.QueryGetUserRedemptionRecordResponse>): _219.QueryGetUserRedemptionRecordResponse;
            fromAmino(object: _219.QueryGetUserRedemptionRecordResponseAmino): _219.QueryGetUserRedemptionRecordResponse;
            toAmino(message: _219.QueryGetUserRedemptionRecordResponse): _219.QueryGetUserRedemptionRecordResponseAmino;
            fromAminoMsg(object: _219.QueryGetUserRedemptionRecordResponseAminoMsg): _219.QueryGetUserRedemptionRecordResponse;
            fromProtoMsg(message: _219.QueryGetUserRedemptionRecordResponseProtoMsg): _219.QueryGetUserRedemptionRecordResponse;
            toProto(message: _219.QueryGetUserRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _219.QueryGetUserRedemptionRecordResponse): _219.QueryGetUserRedemptionRecordResponseProtoMsg;
        };
        QueryAllUserRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _219.QueryAllUserRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.QueryAllUserRedemptionRecordRequest;
            fromPartial(object: Partial<_219.QueryAllUserRedemptionRecordRequest>): _219.QueryAllUserRedemptionRecordRequest;
            fromAmino(object: _219.QueryAllUserRedemptionRecordRequestAmino): _219.QueryAllUserRedemptionRecordRequest;
            toAmino(message: _219.QueryAllUserRedemptionRecordRequest): _219.QueryAllUserRedemptionRecordRequestAmino;
            fromAminoMsg(object: _219.QueryAllUserRedemptionRecordRequestAminoMsg): _219.QueryAllUserRedemptionRecordRequest;
            fromProtoMsg(message: _219.QueryAllUserRedemptionRecordRequestProtoMsg): _219.QueryAllUserRedemptionRecordRequest;
            toProto(message: _219.QueryAllUserRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _219.QueryAllUserRedemptionRecordRequest): _219.QueryAllUserRedemptionRecordRequestProtoMsg;
        };
        QueryAllUserRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _219.QueryAllUserRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.QueryAllUserRedemptionRecordResponse;
            fromPartial(object: Partial<_219.QueryAllUserRedemptionRecordResponse>): _219.QueryAllUserRedemptionRecordResponse;
            fromAmino(object: _219.QueryAllUserRedemptionRecordResponseAmino): _219.QueryAllUserRedemptionRecordResponse;
            toAmino(message: _219.QueryAllUserRedemptionRecordResponse): _219.QueryAllUserRedemptionRecordResponseAmino;
            fromAminoMsg(object: _219.QueryAllUserRedemptionRecordResponseAminoMsg): _219.QueryAllUserRedemptionRecordResponse;
            fromProtoMsg(message: _219.QueryAllUserRedemptionRecordResponseProtoMsg): _219.QueryAllUserRedemptionRecordResponse;
            toProto(message: _219.QueryAllUserRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _219.QueryAllUserRedemptionRecordResponse): _219.QueryAllUserRedemptionRecordResponseProtoMsg;
        };
        QueryAllUserRedemptionRecordForUserRequest: {
            typeUrl: string;
            encode(message: _219.QueryAllUserRedemptionRecordForUserRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.QueryAllUserRedemptionRecordForUserRequest;
            fromPartial(object: Partial<_219.QueryAllUserRedemptionRecordForUserRequest>): _219.QueryAllUserRedemptionRecordForUserRequest;
            fromAmino(object: _219.QueryAllUserRedemptionRecordForUserRequestAmino): _219.QueryAllUserRedemptionRecordForUserRequest;
            toAmino(message: _219.QueryAllUserRedemptionRecordForUserRequest): _219.QueryAllUserRedemptionRecordForUserRequestAmino;
            fromAminoMsg(object: _219.QueryAllUserRedemptionRecordForUserRequestAminoMsg): _219.QueryAllUserRedemptionRecordForUserRequest;
            fromProtoMsg(message: _219.QueryAllUserRedemptionRecordForUserRequestProtoMsg): _219.QueryAllUserRedemptionRecordForUserRequest;
            toProto(message: _219.QueryAllUserRedemptionRecordForUserRequest): Uint8Array;
            toProtoMsg(message: _219.QueryAllUserRedemptionRecordForUserRequest): _219.QueryAllUserRedemptionRecordForUserRequestProtoMsg;
        };
        QueryAllUserRedemptionRecordForUserResponse: {
            typeUrl: string;
            encode(message: _219.QueryAllUserRedemptionRecordForUserResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.QueryAllUserRedemptionRecordForUserResponse;
            fromPartial(object: Partial<_219.QueryAllUserRedemptionRecordForUserResponse>): _219.QueryAllUserRedemptionRecordForUserResponse;
            fromAmino(object: _219.QueryAllUserRedemptionRecordForUserResponseAmino): _219.QueryAllUserRedemptionRecordForUserResponse;
            toAmino(message: _219.QueryAllUserRedemptionRecordForUserResponse): _219.QueryAllUserRedemptionRecordForUserResponseAmino;
            fromAminoMsg(object: _219.QueryAllUserRedemptionRecordForUserResponseAminoMsg): _219.QueryAllUserRedemptionRecordForUserResponse;
            fromProtoMsg(message: _219.QueryAllUserRedemptionRecordForUserResponseProtoMsg): _219.QueryAllUserRedemptionRecordForUserResponse;
            toProto(message: _219.QueryAllUserRedemptionRecordForUserResponse): Uint8Array;
            toProtoMsg(message: _219.QueryAllUserRedemptionRecordForUserResponse): _219.QueryAllUserRedemptionRecordForUserResponseProtoMsg;
        };
        QueryGetEpochUnbondingRecordRequest: {
            typeUrl: string;
            encode(message: _219.QueryGetEpochUnbondingRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.QueryGetEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_219.QueryGetEpochUnbondingRecordRequest>): _219.QueryGetEpochUnbondingRecordRequest;
            fromAmino(object: _219.QueryGetEpochUnbondingRecordRequestAmino): _219.QueryGetEpochUnbondingRecordRequest;
            toAmino(message: _219.QueryGetEpochUnbondingRecordRequest): _219.QueryGetEpochUnbondingRecordRequestAmino;
            fromAminoMsg(object: _219.QueryGetEpochUnbondingRecordRequestAminoMsg): _219.QueryGetEpochUnbondingRecordRequest;
            fromProtoMsg(message: _219.QueryGetEpochUnbondingRecordRequestProtoMsg): _219.QueryGetEpochUnbondingRecordRequest;
            toProto(message: _219.QueryGetEpochUnbondingRecordRequest): Uint8Array;
            toProtoMsg(message: _219.QueryGetEpochUnbondingRecordRequest): _219.QueryGetEpochUnbondingRecordRequestProtoMsg;
        };
        QueryGetEpochUnbondingRecordResponse: {
            typeUrl: string;
            encode(message: _219.QueryGetEpochUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.QueryGetEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_219.QueryGetEpochUnbondingRecordResponse>): _219.QueryGetEpochUnbondingRecordResponse;
            fromAmino(object: _219.QueryGetEpochUnbondingRecordResponseAmino): _219.QueryGetEpochUnbondingRecordResponse;
            toAmino(message: _219.QueryGetEpochUnbondingRecordResponse): _219.QueryGetEpochUnbondingRecordResponseAmino;
            fromAminoMsg(object: _219.QueryGetEpochUnbondingRecordResponseAminoMsg): _219.QueryGetEpochUnbondingRecordResponse;
            fromProtoMsg(message: _219.QueryGetEpochUnbondingRecordResponseProtoMsg): _219.QueryGetEpochUnbondingRecordResponse;
            toProto(message: _219.QueryGetEpochUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _219.QueryGetEpochUnbondingRecordResponse): _219.QueryGetEpochUnbondingRecordResponseProtoMsg;
        };
        QueryAllEpochUnbondingRecordRequest: {
            typeUrl: string;
            encode(message: _219.QueryAllEpochUnbondingRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.QueryAllEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_219.QueryAllEpochUnbondingRecordRequest>): _219.QueryAllEpochUnbondingRecordRequest;
            fromAmino(object: _219.QueryAllEpochUnbondingRecordRequestAmino): _219.QueryAllEpochUnbondingRecordRequest;
            toAmino(message: _219.QueryAllEpochUnbondingRecordRequest): _219.QueryAllEpochUnbondingRecordRequestAmino;
            fromAminoMsg(object: _219.QueryAllEpochUnbondingRecordRequestAminoMsg): _219.QueryAllEpochUnbondingRecordRequest;
            fromProtoMsg(message: _219.QueryAllEpochUnbondingRecordRequestProtoMsg): _219.QueryAllEpochUnbondingRecordRequest;
            toProto(message: _219.QueryAllEpochUnbondingRecordRequest): Uint8Array;
            toProtoMsg(message: _219.QueryAllEpochUnbondingRecordRequest): _219.QueryAllEpochUnbondingRecordRequestProtoMsg;
        };
        QueryAllEpochUnbondingRecordResponse: {
            typeUrl: string;
            encode(message: _219.QueryAllEpochUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.QueryAllEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_219.QueryAllEpochUnbondingRecordResponse>): _219.QueryAllEpochUnbondingRecordResponse;
            fromAmino(object: _219.QueryAllEpochUnbondingRecordResponseAmino): _219.QueryAllEpochUnbondingRecordResponse;
            toAmino(message: _219.QueryAllEpochUnbondingRecordResponse): _219.QueryAllEpochUnbondingRecordResponseAmino;
            fromAminoMsg(object: _219.QueryAllEpochUnbondingRecordResponseAminoMsg): _219.QueryAllEpochUnbondingRecordResponse;
            fromProtoMsg(message: _219.QueryAllEpochUnbondingRecordResponseProtoMsg): _219.QueryAllEpochUnbondingRecordResponse;
            toProto(message: _219.QueryAllEpochUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _219.QueryAllEpochUnbondingRecordResponse): _219.QueryAllEpochUnbondingRecordResponseProtoMsg;
        };
        QueryLSMDepositRequest: {
            typeUrl: string;
            encode(message: _219.QueryLSMDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.QueryLSMDepositRequest;
            fromPartial(object: Partial<_219.QueryLSMDepositRequest>): _219.QueryLSMDepositRequest;
            fromAmino(object: _219.QueryLSMDepositRequestAmino): _219.QueryLSMDepositRequest;
            toAmino(message: _219.QueryLSMDepositRequest): _219.QueryLSMDepositRequestAmino;
            fromAminoMsg(object: _219.QueryLSMDepositRequestAminoMsg): _219.QueryLSMDepositRequest;
            fromProtoMsg(message: _219.QueryLSMDepositRequestProtoMsg): _219.QueryLSMDepositRequest;
            toProto(message: _219.QueryLSMDepositRequest): Uint8Array;
            toProtoMsg(message: _219.QueryLSMDepositRequest): _219.QueryLSMDepositRequestProtoMsg;
        };
        QueryLSMDepositResponse: {
            typeUrl: string;
            encode(message: _219.QueryLSMDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.QueryLSMDepositResponse;
            fromPartial(object: Partial<_219.QueryLSMDepositResponse>): _219.QueryLSMDepositResponse;
            fromAmino(object: _219.QueryLSMDepositResponseAmino): _219.QueryLSMDepositResponse;
            toAmino(message: _219.QueryLSMDepositResponse): _219.QueryLSMDepositResponseAmino;
            fromAminoMsg(object: _219.QueryLSMDepositResponseAminoMsg): _219.QueryLSMDepositResponse;
            fromProtoMsg(message: _219.QueryLSMDepositResponseProtoMsg): _219.QueryLSMDepositResponse;
            toProto(message: _219.QueryLSMDepositResponse): Uint8Array;
            toProtoMsg(message: _219.QueryLSMDepositResponse): _219.QueryLSMDepositResponseProtoMsg;
        };
        QueryLSMDepositsRequest: {
            typeUrl: string;
            encode(message: _219.QueryLSMDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.QueryLSMDepositsRequest;
            fromPartial(object: Partial<_219.QueryLSMDepositsRequest>): _219.QueryLSMDepositsRequest;
            fromAmino(object: _219.QueryLSMDepositsRequestAmino): _219.QueryLSMDepositsRequest;
            toAmino(message: _219.QueryLSMDepositsRequest): _219.QueryLSMDepositsRequestAmino;
            fromAminoMsg(object: _219.QueryLSMDepositsRequestAminoMsg): _219.QueryLSMDepositsRequest;
            fromProtoMsg(message: _219.QueryLSMDepositsRequestProtoMsg): _219.QueryLSMDepositsRequest;
            toProto(message: _219.QueryLSMDepositsRequest): Uint8Array;
            toProtoMsg(message: _219.QueryLSMDepositsRequest): _219.QueryLSMDepositsRequestProtoMsg;
        };
        QueryLSMDepositsResponse: {
            typeUrl: string;
            encode(message: _219.QueryLSMDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.QueryLSMDepositsResponse;
            fromPartial(object: Partial<_219.QueryLSMDepositsResponse>): _219.QueryLSMDepositsResponse;
            fromAmino(object: _219.QueryLSMDepositsResponseAmino): _219.QueryLSMDepositsResponse;
            toAmino(message: _219.QueryLSMDepositsResponse): _219.QueryLSMDepositsResponseAmino;
            fromAminoMsg(object: _219.QueryLSMDepositsResponseAminoMsg): _219.QueryLSMDepositsResponse;
            fromProtoMsg(message: _219.QueryLSMDepositsResponseProtoMsg): _219.QueryLSMDepositsResponse;
            toProto(message: _219.QueryLSMDepositsResponse): Uint8Array;
            toProtoMsg(message: _219.QueryLSMDepositsResponse): _219.QueryLSMDepositsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _218.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.Params;
            fromPartial(_: Partial<_218.Params>): _218.Params;
            fromAmino(_: _218.ParamsAmino): _218.Params;
            toAmino(_: _218.Params): _218.ParamsAmino;
            fromAminoMsg(object: _218.ParamsAminoMsg): _218.Params;
            fromProtoMsg(message: _218.ParamsProtoMsg): _218.Params;
            toProto(message: _218.Params): Uint8Array;
            toProtoMsg(message: _218.Params): _218.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _217.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.GenesisState;
            fromPartial(object: Partial<_217.GenesisState>): _217.GenesisState;
            fromAmino(object: _217.GenesisStateAmino): _217.GenesisState;
            toAmino(message: _217.GenesisState): _217.GenesisStateAmino;
            fromAminoMsg(object: _217.GenesisStateAminoMsg): _217.GenesisState;
            fromProtoMsg(message: _217.GenesisStateProtoMsg): _217.GenesisState;
            toProto(message: _217.GenesisState): Uint8Array;
            toProtoMsg(message: _217.GenesisState): _217.GenesisStateProtoMsg;
        };
        TransferCallback: {
            typeUrl: string;
            encode(message: _216.TransferCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.TransferCallback;
            fromPartial(object: Partial<_216.TransferCallback>): _216.TransferCallback;
            fromAmino(object: _216.TransferCallbackAmino): _216.TransferCallback;
            toAmino(message: _216.TransferCallback): _216.TransferCallbackAmino;
            fromAminoMsg(object: _216.TransferCallbackAminoMsg): _216.TransferCallback;
            fromProtoMsg(message: _216.TransferCallbackProtoMsg): _216.TransferCallback;
            toProto(message: _216.TransferCallback): Uint8Array;
            toProtoMsg(message: _216.TransferCallback): _216.TransferCallbackProtoMsg;
        };
        TransferLSMTokenCallback: {
            typeUrl: string;
            encode(message: _216.TransferLSMTokenCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.TransferLSMTokenCallback;
            fromPartial(object: Partial<_216.TransferLSMTokenCallback>): _216.TransferLSMTokenCallback;
            fromAmino(object: _216.TransferLSMTokenCallbackAmino): _216.TransferLSMTokenCallback;
            toAmino(message: _216.TransferLSMTokenCallback): _216.TransferLSMTokenCallbackAmino;
            fromAminoMsg(object: _216.TransferLSMTokenCallbackAminoMsg): _216.TransferLSMTokenCallback;
            fromProtoMsg(message: _216.TransferLSMTokenCallbackProtoMsg): _216.TransferLSMTokenCallback;
            toProto(message: _216.TransferLSMTokenCallback): Uint8Array;
            toProtoMsg(message: _216.TransferLSMTokenCallback): _216.TransferLSMTokenCallbackProtoMsg;
        };
    };
    const stakedym: {
        MsgClientImpl: typeof _393.MsgClientImpl;
        QueryClientImpl: typeof _383.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            hostZone(request?: _222.QueryHostZoneRequest): Promise<_222.QueryHostZoneResponse>;
            delegationRecords(request: _222.QueryDelegationRecordsRequest): Promise<_222.QueryDelegationRecordsResponse>;
            unbondingRecords(request: _222.QueryUnbondingRecordsRequest): Promise<_222.QueryUnbondingRecordsResponse>;
            redemptionRecord(request: _222.QueryRedemptionRecordRequest): Promise<_222.QueryRedemptionRecordResponse>;
            redemptionRecords(request: _222.QueryRedemptionRecordsRequest): Promise<_222.QueryRedemptionRecordsResponse>;
            slashRecords(request?: _222.QuerySlashRecordsRequest): Promise<_222.QuerySlashRecordsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _224.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _224.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmDelegation(value: _224.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUndelegation(value: _224.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUnbondedTokenSweep(value: _224.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                adjustDelegatedBalance(value: _224.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _224.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _224.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                refreshRedemptionRate(value: _224.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteDelegationRecord(value: _224.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteUnbondingRecord(value: _224.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteRedemptionRecord(value: _224.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOperatorAddress(value: _224.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _224.MsgLiquidStake): {
                    typeUrl: string;
                    value: _224.MsgLiquidStake;
                };
                redeemStake(value: _224.MsgRedeemStake): {
                    typeUrl: string;
                    value: _224.MsgRedeemStake;
                };
                confirmDelegation(value: _224.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _224.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _224.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _224.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _224.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _224.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _224.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _224.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _224.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _224.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _224.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _224.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _224.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _224.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _224.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _224.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _224.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _224.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _224.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _224.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _224.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _224.MsgSetOperatorAddress;
                };
            };
            fromPartial: {
                liquidStake(value: _224.MsgLiquidStake): {
                    typeUrl: string;
                    value: _224.MsgLiquidStake;
                };
                redeemStake(value: _224.MsgRedeemStake): {
                    typeUrl: string;
                    value: _224.MsgRedeemStake;
                };
                confirmDelegation(value: _224.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _224.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _224.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _224.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _224.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _224.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _224.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _224.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _224.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _224.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _224.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _224.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _224.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _224.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _224.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _224.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _224.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _224.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _224.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _224.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _224.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _224.MsgSetOperatorAddress;
                };
            };
        };
        AminoConverter: {
            "/stride.stakedym.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _224.MsgLiquidStake) => _224.MsgLiquidStakeAmino;
                fromAmino: (object: _224.MsgLiquidStakeAmino) => _224.MsgLiquidStake;
            };
            "/stride.stakedym.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _224.MsgRedeemStake) => _224.MsgRedeemStakeAmino;
                fromAmino: (object: _224.MsgRedeemStakeAmino) => _224.MsgRedeemStake;
            };
            "/stride.stakedym.MsgConfirmDelegation": {
                aminoType: string;
                toAmino: (message: _224.MsgConfirmDelegation) => _224.MsgConfirmDelegationAmino;
                fromAmino: (object: _224.MsgConfirmDelegationAmino) => _224.MsgConfirmDelegation;
            };
            "/stride.stakedym.MsgConfirmUndelegation": {
                aminoType: string;
                toAmino: (message: _224.MsgConfirmUndelegation) => _224.MsgConfirmUndelegationAmino;
                fromAmino: (object: _224.MsgConfirmUndelegationAmino) => _224.MsgConfirmUndelegation;
            };
            "/stride.stakedym.MsgConfirmUnbondedTokenSweep": {
                aminoType: string;
                toAmino: (message: _224.MsgConfirmUnbondedTokenSweep) => _224.MsgConfirmUnbondedTokenSweepAmino;
                fromAmino: (object: _224.MsgConfirmUnbondedTokenSweepAmino) => _224.MsgConfirmUnbondedTokenSweep;
            };
            "/stride.stakedym.MsgAdjustDelegatedBalance": {
                aminoType: string;
                toAmino: (message: _224.MsgAdjustDelegatedBalance) => _224.MsgAdjustDelegatedBalanceAmino;
                fromAmino: (object: _224.MsgAdjustDelegatedBalanceAmino) => _224.MsgAdjustDelegatedBalance;
            };
            "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _224.MsgUpdateInnerRedemptionRateBounds) => _224.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _224.MsgUpdateInnerRedemptionRateBoundsAmino) => _224.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.stakedym.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _224.MsgResumeHostZone) => _224.MsgResumeHostZoneAmino;
                fromAmino: (object: _224.MsgResumeHostZoneAmino) => _224.MsgResumeHostZone;
            };
            "/stride.stakedym.MsgRefreshRedemptionRate": {
                aminoType: string;
                toAmino: (message: _224.MsgRefreshRedemptionRate) => _224.MsgRefreshRedemptionRateAmino;
                fromAmino: (object: _224.MsgRefreshRedemptionRateAmino) => _224.MsgRefreshRedemptionRate;
            };
            "/stride.stakedym.MsgOverwriteDelegationRecord": {
                aminoType: string;
                toAmino: (message: _224.MsgOverwriteDelegationRecord) => _224.MsgOverwriteDelegationRecordAmino;
                fromAmino: (object: _224.MsgOverwriteDelegationRecordAmino) => _224.MsgOverwriteDelegationRecord;
            };
            "/stride.stakedym.MsgOverwriteUnbondingRecord": {
                aminoType: string;
                toAmino: (message: _224.MsgOverwriteUnbondingRecord) => _224.MsgOverwriteUnbondingRecordAmino;
                fromAmino: (object: _224.MsgOverwriteUnbondingRecordAmino) => _224.MsgOverwriteUnbondingRecord;
            };
            "/stride.stakedym.MsgOverwriteRedemptionRecord": {
                aminoType: string;
                toAmino: (message: _224.MsgOverwriteRedemptionRecord) => _224.MsgOverwriteRedemptionRecordAmino;
                fromAmino: (object: _224.MsgOverwriteRedemptionRecordAmino) => _224.MsgOverwriteRedemptionRecord;
            };
            "/stride.stakedym.MsgSetOperatorAddress": {
                aminoType: string;
                toAmino: (message: _224.MsgSetOperatorAddress) => _224.MsgSetOperatorAddressAmino;
                fromAmino: (object: _224.MsgSetOperatorAddressAmino) => _224.MsgSetOperatorAddress;
            };
        };
        overwritableRecordTypeFromJSON(object: any): _224.OverwritableRecordType;
        overwritableRecordTypeToJSON(object: _224.OverwritableRecordType): string;
        OverwritableRecordType: typeof _224.OverwritableRecordType;
        OverwritableRecordTypeSDKType: typeof _224.OverwritableRecordType;
        OverwritableRecordTypeAmino: typeof _224.OverwritableRecordType;
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _224.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgLiquidStake;
            fromPartial(object: Partial<_224.MsgLiquidStake>): _224.MsgLiquidStake;
            fromAmino(object: _224.MsgLiquidStakeAmino): _224.MsgLiquidStake;
            toAmino(message: _224.MsgLiquidStake): _224.MsgLiquidStakeAmino;
            fromAminoMsg(object: _224.MsgLiquidStakeAminoMsg): _224.MsgLiquidStake;
            toAminoMsg(message: _224.MsgLiquidStake): _224.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _224.MsgLiquidStakeProtoMsg): _224.MsgLiquidStake;
            toProto(message: _224.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _224.MsgLiquidStake): _224.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _224.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_224.MsgLiquidStakeResponse>): _224.MsgLiquidStakeResponse;
            fromAmino(object: _224.MsgLiquidStakeResponseAmino): _224.MsgLiquidStakeResponse;
            toAmino(message: _224.MsgLiquidStakeResponse): _224.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _224.MsgLiquidStakeResponseAminoMsg): _224.MsgLiquidStakeResponse;
            fromProtoMsg(message: _224.MsgLiquidStakeResponseProtoMsg): _224.MsgLiquidStakeResponse;
            toProto(message: _224.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _224.MsgLiquidStakeResponse): _224.MsgLiquidStakeResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _224.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgRedeemStake;
            fromPartial(object: Partial<_224.MsgRedeemStake>): _224.MsgRedeemStake;
            fromAmino(object: _224.MsgRedeemStakeAmino): _224.MsgRedeemStake;
            toAmino(message: _224.MsgRedeemStake): _224.MsgRedeemStakeAmino;
            fromAminoMsg(object: _224.MsgRedeemStakeAminoMsg): _224.MsgRedeemStake;
            toAminoMsg(message: _224.MsgRedeemStake): _224.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _224.MsgRedeemStakeProtoMsg): _224.MsgRedeemStake;
            toProto(message: _224.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _224.MsgRedeemStake): _224.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(message: _224.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgRedeemStakeResponse;
            fromPartial(object: Partial<_224.MsgRedeemStakeResponse>): _224.MsgRedeemStakeResponse;
            fromAmino(object: _224.MsgRedeemStakeResponseAmino): _224.MsgRedeemStakeResponse;
            toAmino(message: _224.MsgRedeemStakeResponse): _224.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _224.MsgRedeemStakeResponseAminoMsg): _224.MsgRedeemStakeResponse;
            fromProtoMsg(message: _224.MsgRedeemStakeResponseProtoMsg): _224.MsgRedeemStakeResponse;
            toProto(message: _224.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _224.MsgRedeemStakeResponse): _224.MsgRedeemStakeResponseProtoMsg;
        };
        MsgConfirmDelegation: {
            typeUrl: string;
            encode(message: _224.MsgConfirmDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgConfirmDelegation;
            fromPartial(object: Partial<_224.MsgConfirmDelegation>): _224.MsgConfirmDelegation;
            fromAmino(object: _224.MsgConfirmDelegationAmino): _224.MsgConfirmDelegation;
            toAmino(message: _224.MsgConfirmDelegation): _224.MsgConfirmDelegationAmino;
            fromAminoMsg(object: _224.MsgConfirmDelegationAminoMsg): _224.MsgConfirmDelegation;
            toAminoMsg(message: _224.MsgConfirmDelegation): _224.MsgConfirmDelegationAminoMsg;
            fromProtoMsg(message: _224.MsgConfirmDelegationProtoMsg): _224.MsgConfirmDelegation;
            toProto(message: _224.MsgConfirmDelegation): Uint8Array;
            toProtoMsg(message: _224.MsgConfirmDelegation): _224.MsgConfirmDelegationProtoMsg;
        };
        MsgConfirmDelegationResponse: {
            typeUrl: string;
            encode(_: _224.MsgConfirmDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgConfirmDelegationResponse;
            fromPartial(_: Partial<_224.MsgConfirmDelegationResponse>): _224.MsgConfirmDelegationResponse;
            fromAmino(_: _224.MsgConfirmDelegationResponseAmino): _224.MsgConfirmDelegationResponse;
            toAmino(_: _224.MsgConfirmDelegationResponse): _224.MsgConfirmDelegationResponseAmino;
            fromAminoMsg(object: _224.MsgConfirmDelegationResponseAminoMsg): _224.MsgConfirmDelegationResponse;
            fromProtoMsg(message: _224.MsgConfirmDelegationResponseProtoMsg): _224.MsgConfirmDelegationResponse;
            toProto(message: _224.MsgConfirmDelegationResponse): Uint8Array;
            toProtoMsg(message: _224.MsgConfirmDelegationResponse): _224.MsgConfirmDelegationResponseProtoMsg;
        };
        MsgConfirmUndelegation: {
            typeUrl: string;
            encode(message: _224.MsgConfirmUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgConfirmUndelegation;
            fromPartial(object: Partial<_224.MsgConfirmUndelegation>): _224.MsgConfirmUndelegation;
            fromAmino(object: _224.MsgConfirmUndelegationAmino): _224.MsgConfirmUndelegation;
            toAmino(message: _224.MsgConfirmUndelegation): _224.MsgConfirmUndelegationAmino;
            fromAminoMsg(object: _224.MsgConfirmUndelegationAminoMsg): _224.MsgConfirmUndelegation;
            toAminoMsg(message: _224.MsgConfirmUndelegation): _224.MsgConfirmUndelegationAminoMsg;
            fromProtoMsg(message: _224.MsgConfirmUndelegationProtoMsg): _224.MsgConfirmUndelegation;
            toProto(message: _224.MsgConfirmUndelegation): Uint8Array;
            toProtoMsg(message: _224.MsgConfirmUndelegation): _224.MsgConfirmUndelegationProtoMsg;
        };
        MsgConfirmUndelegationResponse: {
            typeUrl: string;
            encode(_: _224.MsgConfirmUndelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgConfirmUndelegationResponse;
            fromPartial(_: Partial<_224.MsgConfirmUndelegationResponse>): _224.MsgConfirmUndelegationResponse;
            fromAmino(_: _224.MsgConfirmUndelegationResponseAmino): _224.MsgConfirmUndelegationResponse;
            toAmino(_: _224.MsgConfirmUndelegationResponse): _224.MsgConfirmUndelegationResponseAmino;
            fromAminoMsg(object: _224.MsgConfirmUndelegationResponseAminoMsg): _224.MsgConfirmUndelegationResponse;
            fromProtoMsg(message: _224.MsgConfirmUndelegationResponseProtoMsg): _224.MsgConfirmUndelegationResponse;
            toProto(message: _224.MsgConfirmUndelegationResponse): Uint8Array;
            toProtoMsg(message: _224.MsgConfirmUndelegationResponse): _224.MsgConfirmUndelegationResponseProtoMsg;
        };
        MsgConfirmUnbondedTokenSweep: {
            typeUrl: string;
            encode(message: _224.MsgConfirmUnbondedTokenSweep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgConfirmUnbondedTokenSweep;
            fromPartial(object: Partial<_224.MsgConfirmUnbondedTokenSweep>): _224.MsgConfirmUnbondedTokenSweep;
            fromAmino(object: _224.MsgConfirmUnbondedTokenSweepAmino): _224.MsgConfirmUnbondedTokenSweep;
            toAmino(message: _224.MsgConfirmUnbondedTokenSweep): _224.MsgConfirmUnbondedTokenSweepAmino;
            fromAminoMsg(object: _224.MsgConfirmUnbondedTokenSweepAminoMsg): _224.MsgConfirmUnbondedTokenSweep;
            toAminoMsg(message: _224.MsgConfirmUnbondedTokenSweep): _224.MsgConfirmUnbondedTokenSweepAminoMsg;
            fromProtoMsg(message: _224.MsgConfirmUnbondedTokenSweepProtoMsg): _224.MsgConfirmUnbondedTokenSweep;
            toProto(message: _224.MsgConfirmUnbondedTokenSweep): Uint8Array;
            toProtoMsg(message: _224.MsgConfirmUnbondedTokenSweep): _224.MsgConfirmUnbondedTokenSweepProtoMsg;
        };
        MsgConfirmUnbondedTokenSweepResponse: {
            typeUrl: string;
            encode(_: _224.MsgConfirmUnbondedTokenSweepResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgConfirmUnbondedTokenSweepResponse;
            fromPartial(_: Partial<_224.MsgConfirmUnbondedTokenSweepResponse>): _224.MsgConfirmUnbondedTokenSweepResponse;
            fromAmino(_: _224.MsgConfirmUnbondedTokenSweepResponseAmino): _224.MsgConfirmUnbondedTokenSweepResponse;
            toAmino(_: _224.MsgConfirmUnbondedTokenSweepResponse): _224.MsgConfirmUnbondedTokenSweepResponseAmino;
            fromAminoMsg(object: _224.MsgConfirmUnbondedTokenSweepResponseAminoMsg): _224.MsgConfirmUnbondedTokenSweepResponse;
            fromProtoMsg(message: _224.MsgConfirmUnbondedTokenSweepResponseProtoMsg): _224.MsgConfirmUnbondedTokenSweepResponse;
            toProto(message: _224.MsgConfirmUnbondedTokenSweepResponse): Uint8Array;
            toProtoMsg(message: _224.MsgConfirmUnbondedTokenSweepResponse): _224.MsgConfirmUnbondedTokenSweepResponseProtoMsg;
        };
        MsgAdjustDelegatedBalance: {
            typeUrl: string;
            encode(message: _224.MsgAdjustDelegatedBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgAdjustDelegatedBalance;
            fromPartial(object: Partial<_224.MsgAdjustDelegatedBalance>): _224.MsgAdjustDelegatedBalance;
            fromAmino(object: _224.MsgAdjustDelegatedBalanceAmino): _224.MsgAdjustDelegatedBalance;
            toAmino(message: _224.MsgAdjustDelegatedBalance): _224.MsgAdjustDelegatedBalanceAmino;
            fromAminoMsg(object: _224.MsgAdjustDelegatedBalanceAminoMsg): _224.MsgAdjustDelegatedBalance;
            toAminoMsg(message: _224.MsgAdjustDelegatedBalance): _224.MsgAdjustDelegatedBalanceAminoMsg;
            fromProtoMsg(message: _224.MsgAdjustDelegatedBalanceProtoMsg): _224.MsgAdjustDelegatedBalance;
            toProto(message: _224.MsgAdjustDelegatedBalance): Uint8Array;
            toProtoMsg(message: _224.MsgAdjustDelegatedBalance): _224.MsgAdjustDelegatedBalanceProtoMsg;
        };
        MsgAdjustDelegatedBalanceResponse: {
            typeUrl: string;
            encode(_: _224.MsgAdjustDelegatedBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgAdjustDelegatedBalanceResponse;
            fromPartial(_: Partial<_224.MsgAdjustDelegatedBalanceResponse>): _224.MsgAdjustDelegatedBalanceResponse;
            fromAmino(_: _224.MsgAdjustDelegatedBalanceResponseAmino): _224.MsgAdjustDelegatedBalanceResponse;
            toAmino(_: _224.MsgAdjustDelegatedBalanceResponse): _224.MsgAdjustDelegatedBalanceResponseAmino;
            fromAminoMsg(object: _224.MsgAdjustDelegatedBalanceResponseAminoMsg): _224.MsgAdjustDelegatedBalanceResponse;
            fromProtoMsg(message: _224.MsgAdjustDelegatedBalanceResponseProtoMsg): _224.MsgAdjustDelegatedBalanceResponse;
            toProto(message: _224.MsgAdjustDelegatedBalanceResponse): Uint8Array;
            toProtoMsg(message: _224.MsgAdjustDelegatedBalanceResponse): _224.MsgAdjustDelegatedBalanceResponseProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _224.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_224.MsgUpdateInnerRedemptionRateBounds>): _224.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _224.MsgUpdateInnerRedemptionRateBoundsAmino): _224.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _224.MsgUpdateInnerRedemptionRateBounds): _224.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _224.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _224.MsgUpdateInnerRedemptionRateBounds;
            toAminoMsg(message: _224.MsgUpdateInnerRedemptionRateBounds): _224.MsgUpdateInnerRedemptionRateBoundsAminoMsg;
            fromProtoMsg(message: _224.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _224.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _224.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _224.MsgUpdateInnerRedemptionRateBounds): _224.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _224.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_224.MsgUpdateInnerRedemptionRateBoundsResponse>): _224.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _224.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _224.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _224.MsgUpdateInnerRedemptionRateBoundsResponse): _224.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _224.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _224.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _224.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _224.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _224.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _224.MsgUpdateInnerRedemptionRateBoundsResponse): _224.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _224.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgResumeHostZone;
            fromPartial(object: Partial<_224.MsgResumeHostZone>): _224.MsgResumeHostZone;
            fromAmino(object: _224.MsgResumeHostZoneAmino): _224.MsgResumeHostZone;
            toAmino(message: _224.MsgResumeHostZone): _224.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _224.MsgResumeHostZoneAminoMsg): _224.MsgResumeHostZone;
            toAminoMsg(message: _224.MsgResumeHostZone): _224.MsgResumeHostZoneAminoMsg;
            fromProtoMsg(message: _224.MsgResumeHostZoneProtoMsg): _224.MsgResumeHostZone;
            toProto(message: _224.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _224.MsgResumeHostZone): _224.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _224.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_224.MsgResumeHostZoneResponse>): _224.MsgResumeHostZoneResponse;
            fromAmino(_: _224.MsgResumeHostZoneResponseAmino): _224.MsgResumeHostZoneResponse;
            toAmino(_: _224.MsgResumeHostZoneResponse): _224.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _224.MsgResumeHostZoneResponseAminoMsg): _224.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _224.MsgResumeHostZoneResponseProtoMsg): _224.MsgResumeHostZoneResponse;
            toProto(message: _224.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _224.MsgResumeHostZoneResponse): _224.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgRefreshRedemptionRate: {
            typeUrl: string;
            encode(message: _224.MsgRefreshRedemptionRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgRefreshRedemptionRate;
            fromPartial(object: Partial<_224.MsgRefreshRedemptionRate>): _224.MsgRefreshRedemptionRate;
            fromAmino(object: _224.MsgRefreshRedemptionRateAmino): _224.MsgRefreshRedemptionRate;
            toAmino(message: _224.MsgRefreshRedemptionRate): _224.MsgRefreshRedemptionRateAmino;
            fromAminoMsg(object: _224.MsgRefreshRedemptionRateAminoMsg): _224.MsgRefreshRedemptionRate;
            toAminoMsg(message: _224.MsgRefreshRedemptionRate): _224.MsgRefreshRedemptionRateAminoMsg;
            fromProtoMsg(message: _224.MsgRefreshRedemptionRateProtoMsg): _224.MsgRefreshRedemptionRate;
            toProto(message: _224.MsgRefreshRedemptionRate): Uint8Array;
            toProtoMsg(message: _224.MsgRefreshRedemptionRate): _224.MsgRefreshRedemptionRateProtoMsg;
        };
        MsgRefreshRedemptionRateResponse: {
            typeUrl: string;
            encode(_: _224.MsgRefreshRedemptionRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgRefreshRedemptionRateResponse;
            fromPartial(_: Partial<_224.MsgRefreshRedemptionRateResponse>): _224.MsgRefreshRedemptionRateResponse;
            fromAmino(_: _224.MsgRefreshRedemptionRateResponseAmino): _224.MsgRefreshRedemptionRateResponse;
            toAmino(_: _224.MsgRefreshRedemptionRateResponse): _224.MsgRefreshRedemptionRateResponseAmino;
            fromAminoMsg(object: _224.MsgRefreshRedemptionRateResponseAminoMsg): _224.MsgRefreshRedemptionRateResponse;
            fromProtoMsg(message: _224.MsgRefreshRedemptionRateResponseProtoMsg): _224.MsgRefreshRedemptionRateResponse;
            toProto(message: _224.MsgRefreshRedemptionRateResponse): Uint8Array;
            toProtoMsg(message: _224.MsgRefreshRedemptionRateResponse): _224.MsgRefreshRedemptionRateResponseProtoMsg;
        };
        MsgOverwriteDelegationRecord: {
            typeUrl: string;
            encode(message: _224.MsgOverwriteDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgOverwriteDelegationRecord;
            fromPartial(object: Partial<_224.MsgOverwriteDelegationRecord>): _224.MsgOverwriteDelegationRecord;
            fromAmino(object: _224.MsgOverwriteDelegationRecordAmino): _224.MsgOverwriteDelegationRecord;
            toAmino(message: _224.MsgOverwriteDelegationRecord): _224.MsgOverwriteDelegationRecordAmino;
            fromAminoMsg(object: _224.MsgOverwriteDelegationRecordAminoMsg): _224.MsgOverwriteDelegationRecord;
            toAminoMsg(message: _224.MsgOverwriteDelegationRecord): _224.MsgOverwriteDelegationRecordAminoMsg;
            fromProtoMsg(message: _224.MsgOverwriteDelegationRecordProtoMsg): _224.MsgOverwriteDelegationRecord;
            toProto(message: _224.MsgOverwriteDelegationRecord): Uint8Array;
            toProtoMsg(message: _224.MsgOverwriteDelegationRecord): _224.MsgOverwriteDelegationRecordProtoMsg;
        };
        MsgOverwriteDelegationRecordResponse: {
            typeUrl: string;
            encode(_: _224.MsgOverwriteDelegationRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgOverwriteDelegationRecordResponse;
            fromPartial(_: Partial<_224.MsgOverwriteDelegationRecordResponse>): _224.MsgOverwriteDelegationRecordResponse;
            fromAmino(_: _224.MsgOverwriteDelegationRecordResponseAmino): _224.MsgOverwriteDelegationRecordResponse;
            toAmino(_: _224.MsgOverwriteDelegationRecordResponse): _224.MsgOverwriteDelegationRecordResponseAmino;
            fromAminoMsg(object: _224.MsgOverwriteDelegationRecordResponseAminoMsg): _224.MsgOverwriteDelegationRecordResponse;
            fromProtoMsg(message: _224.MsgOverwriteDelegationRecordResponseProtoMsg): _224.MsgOverwriteDelegationRecordResponse;
            toProto(message: _224.MsgOverwriteDelegationRecordResponse): Uint8Array;
            toProtoMsg(message: _224.MsgOverwriteDelegationRecordResponse): _224.MsgOverwriteDelegationRecordResponseProtoMsg;
        };
        MsgOverwriteUnbondingRecord: {
            typeUrl: string;
            encode(message: _224.MsgOverwriteUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgOverwriteUnbondingRecord;
            fromPartial(object: Partial<_224.MsgOverwriteUnbondingRecord>): _224.MsgOverwriteUnbondingRecord;
            fromAmino(object: _224.MsgOverwriteUnbondingRecordAmino): _224.MsgOverwriteUnbondingRecord;
            toAmino(message: _224.MsgOverwriteUnbondingRecord): _224.MsgOverwriteUnbondingRecordAmino;
            fromAminoMsg(object: _224.MsgOverwriteUnbondingRecordAminoMsg): _224.MsgOverwriteUnbondingRecord;
            toAminoMsg(message: _224.MsgOverwriteUnbondingRecord): _224.MsgOverwriteUnbondingRecordAminoMsg;
            fromProtoMsg(message: _224.MsgOverwriteUnbondingRecordProtoMsg): _224.MsgOverwriteUnbondingRecord;
            toProto(message: _224.MsgOverwriteUnbondingRecord): Uint8Array;
            toProtoMsg(message: _224.MsgOverwriteUnbondingRecord): _224.MsgOverwriteUnbondingRecordProtoMsg;
        };
        MsgOverwriteUnbondingRecordResponse: {
            typeUrl: string;
            encode(_: _224.MsgOverwriteUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgOverwriteUnbondingRecordResponse;
            fromPartial(_: Partial<_224.MsgOverwriteUnbondingRecordResponse>): _224.MsgOverwriteUnbondingRecordResponse;
            fromAmino(_: _224.MsgOverwriteUnbondingRecordResponseAmino): _224.MsgOverwriteUnbondingRecordResponse;
            toAmino(_: _224.MsgOverwriteUnbondingRecordResponse): _224.MsgOverwriteUnbondingRecordResponseAmino;
            fromAminoMsg(object: _224.MsgOverwriteUnbondingRecordResponseAminoMsg): _224.MsgOverwriteUnbondingRecordResponse;
            fromProtoMsg(message: _224.MsgOverwriteUnbondingRecordResponseProtoMsg): _224.MsgOverwriteUnbondingRecordResponse;
            toProto(message: _224.MsgOverwriteUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _224.MsgOverwriteUnbondingRecordResponse): _224.MsgOverwriteUnbondingRecordResponseProtoMsg;
        };
        MsgOverwriteRedemptionRecord: {
            typeUrl: string;
            encode(message: _224.MsgOverwriteRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgOverwriteRedemptionRecord;
            fromPartial(object: Partial<_224.MsgOverwriteRedemptionRecord>): _224.MsgOverwriteRedemptionRecord;
            fromAmino(object: _224.MsgOverwriteRedemptionRecordAmino): _224.MsgOverwriteRedemptionRecord;
            toAmino(message: _224.MsgOverwriteRedemptionRecord): _224.MsgOverwriteRedemptionRecordAmino;
            fromAminoMsg(object: _224.MsgOverwriteRedemptionRecordAminoMsg): _224.MsgOverwriteRedemptionRecord;
            toAminoMsg(message: _224.MsgOverwriteRedemptionRecord): _224.MsgOverwriteRedemptionRecordAminoMsg;
            fromProtoMsg(message: _224.MsgOverwriteRedemptionRecordProtoMsg): _224.MsgOverwriteRedemptionRecord;
            toProto(message: _224.MsgOverwriteRedemptionRecord): Uint8Array;
            toProtoMsg(message: _224.MsgOverwriteRedemptionRecord): _224.MsgOverwriteRedemptionRecordProtoMsg;
        };
        MsgOverwriteRedemptionRecordResponse: {
            typeUrl: string;
            encode(_: _224.MsgOverwriteRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgOverwriteRedemptionRecordResponse;
            fromPartial(_: Partial<_224.MsgOverwriteRedemptionRecordResponse>): _224.MsgOverwriteRedemptionRecordResponse;
            fromAmino(_: _224.MsgOverwriteRedemptionRecordResponseAmino): _224.MsgOverwriteRedemptionRecordResponse;
            toAmino(_: _224.MsgOverwriteRedemptionRecordResponse): _224.MsgOverwriteRedemptionRecordResponseAmino;
            fromAminoMsg(object: _224.MsgOverwriteRedemptionRecordResponseAminoMsg): _224.MsgOverwriteRedemptionRecordResponse;
            fromProtoMsg(message: _224.MsgOverwriteRedemptionRecordResponseProtoMsg): _224.MsgOverwriteRedemptionRecordResponse;
            toProto(message: _224.MsgOverwriteRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _224.MsgOverwriteRedemptionRecordResponse): _224.MsgOverwriteRedemptionRecordResponseProtoMsg;
        };
        MsgSetOperatorAddress: {
            typeUrl: string;
            encode(message: _224.MsgSetOperatorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgSetOperatorAddress;
            fromPartial(object: Partial<_224.MsgSetOperatorAddress>): _224.MsgSetOperatorAddress;
            fromAmino(object: _224.MsgSetOperatorAddressAmino): _224.MsgSetOperatorAddress;
            toAmino(message: _224.MsgSetOperatorAddress): _224.MsgSetOperatorAddressAmino;
            fromAminoMsg(object: _224.MsgSetOperatorAddressAminoMsg): _224.MsgSetOperatorAddress;
            toAminoMsg(message: _224.MsgSetOperatorAddress): _224.MsgSetOperatorAddressAminoMsg;
            fromProtoMsg(message: _224.MsgSetOperatorAddressProtoMsg): _224.MsgSetOperatorAddress;
            toProto(message: _224.MsgSetOperatorAddress): Uint8Array;
            toProtoMsg(message: _224.MsgSetOperatorAddress): _224.MsgSetOperatorAddressProtoMsg;
        };
        MsgSetOperatorAddressResponse: {
            typeUrl: string;
            encode(_: _224.MsgSetOperatorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.MsgSetOperatorAddressResponse;
            fromPartial(_: Partial<_224.MsgSetOperatorAddressResponse>): _224.MsgSetOperatorAddressResponse;
            fromAmino(_: _224.MsgSetOperatorAddressResponseAmino): _224.MsgSetOperatorAddressResponse;
            toAmino(_: _224.MsgSetOperatorAddressResponse): _224.MsgSetOperatorAddressResponseAmino;
            fromAminoMsg(object: _224.MsgSetOperatorAddressResponseAminoMsg): _224.MsgSetOperatorAddressResponse;
            fromProtoMsg(message: _224.MsgSetOperatorAddressResponseProtoMsg): _224.MsgSetOperatorAddressResponse;
            toProto(message: _224.MsgSetOperatorAddressResponse): Uint8Array;
            toProtoMsg(message: _224.MsgSetOperatorAddressResponse): _224.MsgSetOperatorAddressResponseProtoMsg;
        };
        delegationRecordStatusFromJSON(object: any): _223.DelegationRecordStatus;
        delegationRecordStatusToJSON(object: _223.DelegationRecordStatus): string;
        unbondingRecordStatusFromJSON(object: any): _223.UnbondingRecordStatus;
        unbondingRecordStatusToJSON(object: _223.UnbondingRecordStatus): string;
        DelegationRecordStatus: typeof _223.DelegationRecordStatus;
        DelegationRecordStatusSDKType: typeof _223.DelegationRecordStatus;
        DelegationRecordStatusAmino: typeof _223.DelegationRecordStatus;
        UnbondingRecordStatus: typeof _223.UnbondingRecordStatus;
        UnbondingRecordStatusSDKType: typeof _223.UnbondingRecordStatus;
        UnbondingRecordStatusAmino: typeof _223.UnbondingRecordStatus;
        HostZone: {
            typeUrl: string;
            encode(message: _223.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.HostZone;
            fromPartial(object: Partial<_223.HostZone>): _223.HostZone;
            fromAmino(object: _223.HostZoneAmino): _223.HostZone;
            toAmino(message: _223.HostZone): _223.HostZoneAmino;
            fromAminoMsg(object: _223.HostZoneAminoMsg): _223.HostZone;
            fromProtoMsg(message: _223.HostZoneProtoMsg): _223.HostZone;
            toProto(message: _223.HostZone): Uint8Array;
            toProtoMsg(message: _223.HostZone): _223.HostZoneProtoMsg;
        };
        DelegationRecord: {
            typeUrl: string;
            encode(message: _223.DelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.DelegationRecord;
            fromPartial(object: Partial<_223.DelegationRecord>): _223.DelegationRecord;
            fromAmino(object: _223.DelegationRecordAmino): _223.DelegationRecord;
            toAmino(message: _223.DelegationRecord): _223.DelegationRecordAmino;
            fromAminoMsg(object: _223.DelegationRecordAminoMsg): _223.DelegationRecord;
            fromProtoMsg(message: _223.DelegationRecordProtoMsg): _223.DelegationRecord;
            toProto(message: _223.DelegationRecord): Uint8Array;
            toProtoMsg(message: _223.DelegationRecord): _223.DelegationRecordProtoMsg;
        };
        UnbondingRecord: {
            typeUrl: string;
            encode(message: _223.UnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.UnbondingRecord;
            fromPartial(object: Partial<_223.UnbondingRecord>): _223.UnbondingRecord;
            fromAmino(object: _223.UnbondingRecordAmino): _223.UnbondingRecord;
            toAmino(message: _223.UnbondingRecord): _223.UnbondingRecordAmino;
            fromAminoMsg(object: _223.UnbondingRecordAminoMsg): _223.UnbondingRecord;
            fromProtoMsg(message: _223.UnbondingRecordProtoMsg): _223.UnbondingRecord;
            toProto(message: _223.UnbondingRecord): Uint8Array;
            toProtoMsg(message: _223.UnbondingRecord): _223.UnbondingRecordProtoMsg;
        };
        RedemptionRecord: {
            typeUrl: string;
            encode(message: _223.RedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.RedemptionRecord;
            fromPartial(object: Partial<_223.RedemptionRecord>): _223.RedemptionRecord;
            fromAmino(object: _223.RedemptionRecordAmino): _223.RedemptionRecord;
            toAmino(message: _223.RedemptionRecord): _223.RedemptionRecordAmino;
            fromAminoMsg(object: _223.RedemptionRecordAminoMsg): _223.RedemptionRecord;
            fromProtoMsg(message: _223.RedemptionRecordProtoMsg): _223.RedemptionRecord;
            toProto(message: _223.RedemptionRecord): Uint8Array;
            toProtoMsg(message: _223.RedemptionRecord): _223.RedemptionRecordProtoMsg;
        };
        SlashRecord: {
            typeUrl: string;
            encode(message: _223.SlashRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.SlashRecord;
            fromPartial(object: Partial<_223.SlashRecord>): _223.SlashRecord;
            fromAmino(object: _223.SlashRecordAmino): _223.SlashRecord;
            toAmino(message: _223.SlashRecord): _223.SlashRecordAmino;
            fromAminoMsg(object: _223.SlashRecordAminoMsg): _223.SlashRecord;
            fromProtoMsg(message: _223.SlashRecordProtoMsg): _223.SlashRecord;
            toProto(message: _223.SlashRecord): Uint8Array;
            toProtoMsg(message: _223.SlashRecord): _223.SlashRecordProtoMsg;
        };
        QueryHostZoneRequest: {
            typeUrl: string;
            encode(_: _222.QueryHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.QueryHostZoneRequest;
            fromPartial(_: Partial<_222.QueryHostZoneRequest>): _222.QueryHostZoneRequest;
            fromAmino(_: _222.QueryHostZoneRequestAmino): _222.QueryHostZoneRequest;
            toAmino(_: _222.QueryHostZoneRequest): _222.QueryHostZoneRequestAmino;
            fromAminoMsg(object: _222.QueryHostZoneRequestAminoMsg): _222.QueryHostZoneRequest;
            fromProtoMsg(message: _222.QueryHostZoneRequestProtoMsg): _222.QueryHostZoneRequest;
            toProto(message: _222.QueryHostZoneRequest): Uint8Array;
            toProtoMsg(message: _222.QueryHostZoneRequest): _222.QueryHostZoneRequestProtoMsg;
        };
        QueryHostZoneResponse: {
            typeUrl: string;
            encode(message: _222.QueryHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.QueryHostZoneResponse;
            fromPartial(object: Partial<_222.QueryHostZoneResponse>): _222.QueryHostZoneResponse;
            fromAmino(object: _222.QueryHostZoneResponseAmino): _222.QueryHostZoneResponse;
            toAmino(message: _222.QueryHostZoneResponse): _222.QueryHostZoneResponseAmino;
            fromAminoMsg(object: _222.QueryHostZoneResponseAminoMsg): _222.QueryHostZoneResponse;
            fromProtoMsg(message: _222.QueryHostZoneResponseProtoMsg): _222.QueryHostZoneResponse;
            toProto(message: _222.QueryHostZoneResponse): Uint8Array;
            toProtoMsg(message: _222.QueryHostZoneResponse): _222.QueryHostZoneResponseProtoMsg;
        };
        QueryDelegationRecordsRequest: {
            typeUrl: string;
            encode(message: _222.QueryDelegationRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.QueryDelegationRecordsRequest;
            fromPartial(object: Partial<_222.QueryDelegationRecordsRequest>): _222.QueryDelegationRecordsRequest;
            fromAmino(object: _222.QueryDelegationRecordsRequestAmino): _222.QueryDelegationRecordsRequest;
            toAmino(message: _222.QueryDelegationRecordsRequest): _222.QueryDelegationRecordsRequestAmino;
            fromAminoMsg(object: _222.QueryDelegationRecordsRequestAminoMsg): _222.QueryDelegationRecordsRequest;
            fromProtoMsg(message: _222.QueryDelegationRecordsRequestProtoMsg): _222.QueryDelegationRecordsRequest;
            toProto(message: _222.QueryDelegationRecordsRequest): Uint8Array;
            toProtoMsg(message: _222.QueryDelegationRecordsRequest): _222.QueryDelegationRecordsRequestProtoMsg;
        };
        QueryDelegationRecordsResponse: {
            typeUrl: string;
            encode(message: _222.QueryDelegationRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.QueryDelegationRecordsResponse;
            fromPartial(object: Partial<_222.QueryDelegationRecordsResponse>): _222.QueryDelegationRecordsResponse;
            fromAmino(object: _222.QueryDelegationRecordsResponseAmino): _222.QueryDelegationRecordsResponse;
            toAmino(message: _222.QueryDelegationRecordsResponse): _222.QueryDelegationRecordsResponseAmino;
            fromAminoMsg(object: _222.QueryDelegationRecordsResponseAminoMsg): _222.QueryDelegationRecordsResponse;
            fromProtoMsg(message: _222.QueryDelegationRecordsResponseProtoMsg): _222.QueryDelegationRecordsResponse;
            toProto(message: _222.QueryDelegationRecordsResponse): Uint8Array;
            toProtoMsg(message: _222.QueryDelegationRecordsResponse): _222.QueryDelegationRecordsResponseProtoMsg;
        };
        QueryUnbondingRecordsRequest: {
            typeUrl: string;
            encode(message: _222.QueryUnbondingRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.QueryUnbondingRecordsRequest;
            fromPartial(object: Partial<_222.QueryUnbondingRecordsRequest>): _222.QueryUnbondingRecordsRequest;
            fromAmino(object: _222.QueryUnbondingRecordsRequestAmino): _222.QueryUnbondingRecordsRequest;
            toAmino(message: _222.QueryUnbondingRecordsRequest): _222.QueryUnbondingRecordsRequestAmino;
            fromAminoMsg(object: _222.QueryUnbondingRecordsRequestAminoMsg): _222.QueryUnbondingRecordsRequest;
            fromProtoMsg(message: _222.QueryUnbondingRecordsRequestProtoMsg): _222.QueryUnbondingRecordsRequest;
            toProto(message: _222.QueryUnbondingRecordsRequest): Uint8Array;
            toProtoMsg(message: _222.QueryUnbondingRecordsRequest): _222.QueryUnbondingRecordsRequestProtoMsg;
        };
        QueryUnbondingRecordsResponse: {
            typeUrl: string;
            encode(message: _222.QueryUnbondingRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.QueryUnbondingRecordsResponse;
            fromPartial(object: Partial<_222.QueryUnbondingRecordsResponse>): _222.QueryUnbondingRecordsResponse;
            fromAmino(object: _222.QueryUnbondingRecordsResponseAmino): _222.QueryUnbondingRecordsResponse;
            toAmino(message: _222.QueryUnbondingRecordsResponse): _222.QueryUnbondingRecordsResponseAmino;
            fromAminoMsg(object: _222.QueryUnbondingRecordsResponseAminoMsg): _222.QueryUnbondingRecordsResponse;
            fromProtoMsg(message: _222.QueryUnbondingRecordsResponseProtoMsg): _222.QueryUnbondingRecordsResponse;
            toProto(message: _222.QueryUnbondingRecordsResponse): Uint8Array;
            toProtoMsg(message: _222.QueryUnbondingRecordsResponse): _222.QueryUnbondingRecordsResponseProtoMsg;
        };
        QueryRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _222.QueryRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.QueryRedemptionRecordRequest;
            fromPartial(object: Partial<_222.QueryRedemptionRecordRequest>): _222.QueryRedemptionRecordRequest;
            fromAmino(object: _222.QueryRedemptionRecordRequestAmino): _222.QueryRedemptionRecordRequest;
            toAmino(message: _222.QueryRedemptionRecordRequest): _222.QueryRedemptionRecordRequestAmino;
            fromAminoMsg(object: _222.QueryRedemptionRecordRequestAminoMsg): _222.QueryRedemptionRecordRequest;
            fromProtoMsg(message: _222.QueryRedemptionRecordRequestProtoMsg): _222.QueryRedemptionRecordRequest;
            toProto(message: _222.QueryRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _222.QueryRedemptionRecordRequest): _222.QueryRedemptionRecordRequestProtoMsg;
        };
        QueryRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _222.QueryRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.QueryRedemptionRecordResponse;
            fromPartial(object: Partial<_222.QueryRedemptionRecordResponse>): _222.QueryRedemptionRecordResponse;
            fromAmino(object: _222.QueryRedemptionRecordResponseAmino): _222.QueryRedemptionRecordResponse;
            toAmino(message: _222.QueryRedemptionRecordResponse): _222.QueryRedemptionRecordResponseAmino;
            fromAminoMsg(object: _222.QueryRedemptionRecordResponseAminoMsg): _222.QueryRedemptionRecordResponse;
            fromProtoMsg(message: _222.QueryRedemptionRecordResponseProtoMsg): _222.QueryRedemptionRecordResponse;
            toProto(message: _222.QueryRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _222.QueryRedemptionRecordResponse): _222.QueryRedemptionRecordResponseProtoMsg;
        };
        QueryRedemptionRecordsRequest: {
            typeUrl: string;
            encode(message: _222.QueryRedemptionRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.QueryRedemptionRecordsRequest;
            fromPartial(object: Partial<_222.QueryRedemptionRecordsRequest>): _222.QueryRedemptionRecordsRequest;
            fromAmino(object: _222.QueryRedemptionRecordsRequestAmino): _222.QueryRedemptionRecordsRequest;
            toAmino(message: _222.QueryRedemptionRecordsRequest): _222.QueryRedemptionRecordsRequestAmino;
            fromAminoMsg(object: _222.QueryRedemptionRecordsRequestAminoMsg): _222.QueryRedemptionRecordsRequest;
            fromProtoMsg(message: _222.QueryRedemptionRecordsRequestProtoMsg): _222.QueryRedemptionRecordsRequest;
            toProto(message: _222.QueryRedemptionRecordsRequest): Uint8Array;
            toProtoMsg(message: _222.QueryRedemptionRecordsRequest): _222.QueryRedemptionRecordsRequestProtoMsg;
        };
        QueryRedemptionRecordsResponse: {
            typeUrl: string;
            encode(message: _222.QueryRedemptionRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.QueryRedemptionRecordsResponse;
            fromPartial(object: Partial<_222.QueryRedemptionRecordsResponse>): _222.QueryRedemptionRecordsResponse;
            fromAmino(object: _222.QueryRedemptionRecordsResponseAmino): _222.QueryRedemptionRecordsResponse;
            toAmino(message: _222.QueryRedemptionRecordsResponse): _222.QueryRedemptionRecordsResponseAmino;
            fromAminoMsg(object: _222.QueryRedemptionRecordsResponseAminoMsg): _222.QueryRedemptionRecordsResponse;
            fromProtoMsg(message: _222.QueryRedemptionRecordsResponseProtoMsg): _222.QueryRedemptionRecordsResponse;
            toProto(message: _222.QueryRedemptionRecordsResponse): Uint8Array;
            toProtoMsg(message: _222.QueryRedemptionRecordsResponse): _222.QueryRedemptionRecordsResponseProtoMsg;
        };
        QuerySlashRecordsRequest: {
            typeUrl: string;
            encode(_: _222.QuerySlashRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.QuerySlashRecordsRequest;
            fromPartial(_: Partial<_222.QuerySlashRecordsRequest>): _222.QuerySlashRecordsRequest;
            fromAmino(_: _222.QuerySlashRecordsRequestAmino): _222.QuerySlashRecordsRequest;
            toAmino(_: _222.QuerySlashRecordsRequest): _222.QuerySlashRecordsRequestAmino;
            fromAminoMsg(object: _222.QuerySlashRecordsRequestAminoMsg): _222.QuerySlashRecordsRequest;
            fromProtoMsg(message: _222.QuerySlashRecordsRequestProtoMsg): _222.QuerySlashRecordsRequest;
            toProto(message: _222.QuerySlashRecordsRequest): Uint8Array;
            toProtoMsg(message: _222.QuerySlashRecordsRequest): _222.QuerySlashRecordsRequestProtoMsg;
        };
        QuerySlashRecordsResponse: {
            typeUrl: string;
            encode(message: _222.QuerySlashRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.QuerySlashRecordsResponse;
            fromPartial(object: Partial<_222.QuerySlashRecordsResponse>): _222.QuerySlashRecordsResponse;
            fromAmino(object: _222.QuerySlashRecordsResponseAmino): _222.QuerySlashRecordsResponse;
            toAmino(message: _222.QuerySlashRecordsResponse): _222.QuerySlashRecordsResponseAmino;
            fromAminoMsg(object: _222.QuerySlashRecordsResponseAminoMsg): _222.QuerySlashRecordsResponse;
            fromProtoMsg(message: _222.QuerySlashRecordsResponseProtoMsg): _222.QuerySlashRecordsResponse;
            toProto(message: _222.QuerySlashRecordsResponse): Uint8Array;
            toProtoMsg(message: _222.QuerySlashRecordsResponse): _222.QuerySlashRecordsResponseProtoMsg;
        };
        RedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _222.RedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.RedemptionRecordResponse;
            fromPartial(object: Partial<_222.RedemptionRecordResponse>): _222.RedemptionRecordResponse;
            fromAmino(object: _222.RedemptionRecordResponseAmino): _222.RedemptionRecordResponse;
            toAmino(message: _222.RedemptionRecordResponse): _222.RedemptionRecordResponseAmino;
            fromAminoMsg(object: _222.RedemptionRecordResponseAminoMsg): _222.RedemptionRecordResponse;
            fromProtoMsg(message: _222.RedemptionRecordResponseProtoMsg): _222.RedemptionRecordResponse;
            toProto(message: _222.RedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _222.RedemptionRecordResponse): _222.RedemptionRecordResponseProtoMsg;
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
        TransferInProgressRecordIds: {
            typeUrl: string;
            encode(message: _221.TransferInProgressRecordIds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.TransferInProgressRecordIds;
            fromPartial(object: Partial<_221.TransferInProgressRecordIds>): _221.TransferInProgressRecordIds;
            fromAmino(object: _221.TransferInProgressRecordIdsAmino): _221.TransferInProgressRecordIds;
            toAmino(message: _221.TransferInProgressRecordIds): _221.TransferInProgressRecordIdsAmino;
            fromAminoMsg(object: _221.TransferInProgressRecordIdsAminoMsg): _221.TransferInProgressRecordIds;
            fromProtoMsg(message: _221.TransferInProgressRecordIdsProtoMsg): _221.TransferInProgressRecordIds;
            toProto(message: _221.TransferInProgressRecordIds): Uint8Array;
            toProtoMsg(message: _221.TransferInProgressRecordIds): _221.TransferInProgressRecordIdsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _221.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.GenesisState;
            fromPartial(object: Partial<_221.GenesisState>): _221.GenesisState;
            fromAmino(object: _221.GenesisStateAmino): _221.GenesisState;
            toAmino(message: _221.GenesisState): _221.GenesisStateAmino;
            fromAminoMsg(object: _221.GenesisStateAminoMsg): _221.GenesisState;
            fromProtoMsg(message: _221.GenesisStateProtoMsg): _221.GenesisState;
            toProto(message: _221.GenesisState): Uint8Array;
            toProtoMsg(message: _221.GenesisState): _221.GenesisStateProtoMsg;
        };
    };
    const stakeibc: {
        MsgClientImpl: typeof _394.MsgClientImpl;
        QueryClientImpl: typeof _384.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _234.QueryParamsRequest): Promise<_234.QueryParamsResponse>;
            validators(request: _234.QueryGetValidatorsRequest): Promise<_234.QueryGetValidatorsResponse>;
            hostZone(request: _234.QueryGetHostZoneRequest): Promise<_234.QueryGetHostZoneResponse>;
            hostZoneAll(request?: _234.QueryAllHostZoneRequest): Promise<_234.QueryAllHostZoneResponse>;
            moduleAddress(request: _234.QueryModuleAddressRequest): Promise<_234.QueryModuleAddressResponse>;
            interchainAccountFromAddress(request: _234.QueryInterchainAccountFromAddressRequest): Promise<_234.QueryInterchainAccountFromAddressResponse>;
            epochTracker(request: _234.QueryGetEpochTrackerRequest): Promise<_234.QueryGetEpochTrackerResponse>;
            epochTrackerAll(request?: _234.QueryAllEpochTrackerRequest): Promise<_234.QueryAllEpochTrackerResponse>;
            nextPacketSequence(request: _234.QueryGetNextPacketSequenceRequest): Promise<_234.QueryGetNextPacketSequenceResponse>;
            addressUnbondings(request: _234.QueryAddressUnbondings): Promise<_234.QueryAddressUnbondingsResponse>;
            allTradeRoutes(request?: _234.QueryAllTradeRoutes): Promise<_234.QueryAllTradeRoutesResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _236.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lSMLiquidStake(value: _236.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _236.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                registerHostZone(value: _236.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimUndelegatedTokens(value: _236.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                rebalanceValidators(value: _236.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addValidators(value: _236.MsgAddValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                changeValidatorWeight(value: _236.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteValidator(value: _236.MsgDeleteValidator): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreInterchainAccount(value: _236.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                closeDelegationChannel(value: _236.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateValidatorSharesExchRate(value: _236.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                calibrateDelegation(value: _236.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                clearBalance(value: _236.MsgClearBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _236.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _236.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createTradeRoute(value: _236.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteTradeRoute(value: _236.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateTradeRoute(value: _236.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setCommunityPoolRebate(value: _236.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                toggleTradeController(value: _236.MsgToggleTradeController): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateHostZoneParams(value: _236.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _236.MsgLiquidStake): {
                    typeUrl: string;
                    value: _236.MsgLiquidStake;
                };
                lSMLiquidStake(value: _236.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: _236.MsgLSMLiquidStake;
                };
                redeemStake(value: _236.MsgRedeemStake): {
                    typeUrl: string;
                    value: _236.MsgRedeemStake;
                };
                registerHostZone(value: _236.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _236.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _236.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _236.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _236.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _236.MsgRebalanceValidators;
                };
                addValidators(value: _236.MsgAddValidators): {
                    typeUrl: string;
                    value: _236.MsgAddValidators;
                };
                changeValidatorWeight(value: _236.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: _236.MsgChangeValidatorWeights;
                };
                deleteValidator(value: _236.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _236.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _236.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _236.MsgRestoreInterchainAccount;
                };
                closeDelegationChannel(value: _236.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: _236.MsgCloseDelegationChannel;
                };
                updateValidatorSharesExchRate(value: _236.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _236.MsgUpdateValidatorSharesExchRate;
                };
                calibrateDelegation(value: _236.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: _236.MsgCalibrateDelegation;
                };
                clearBalance(value: _236.MsgClearBalance): {
                    typeUrl: string;
                    value: _236.MsgClearBalance;
                };
                updateInnerRedemptionRateBounds(value: _236.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _236.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _236.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _236.MsgResumeHostZone;
                };
                createTradeRoute(value: _236.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: _236.MsgCreateTradeRoute;
                };
                deleteTradeRoute(value: _236.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: _236.MsgDeleteTradeRoute;
                };
                updateTradeRoute(value: _236.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: _236.MsgUpdateTradeRoute;
                };
                setCommunityPoolRebate(value: _236.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: _236.MsgSetCommunityPoolRebate;
                };
                toggleTradeController(value: _236.MsgToggleTradeController): {
                    typeUrl: string;
                    value: _236.MsgToggleTradeController;
                };
                updateHostZoneParams(value: _236.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: _236.MsgUpdateHostZoneParams;
                };
            };
            fromPartial: {
                liquidStake(value: _236.MsgLiquidStake): {
                    typeUrl: string;
                    value: _236.MsgLiquidStake;
                };
                lSMLiquidStake(value: _236.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: _236.MsgLSMLiquidStake;
                };
                redeemStake(value: _236.MsgRedeemStake): {
                    typeUrl: string;
                    value: _236.MsgRedeemStake;
                };
                registerHostZone(value: _236.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _236.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _236.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _236.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _236.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _236.MsgRebalanceValidators;
                };
                addValidators(value: _236.MsgAddValidators): {
                    typeUrl: string;
                    value: _236.MsgAddValidators;
                };
                changeValidatorWeight(value: _236.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: _236.MsgChangeValidatorWeights;
                };
                deleteValidator(value: _236.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _236.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _236.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _236.MsgRestoreInterchainAccount;
                };
                closeDelegationChannel(value: _236.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: _236.MsgCloseDelegationChannel;
                };
                updateValidatorSharesExchRate(value: _236.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _236.MsgUpdateValidatorSharesExchRate;
                };
                calibrateDelegation(value: _236.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: _236.MsgCalibrateDelegation;
                };
                clearBalance(value: _236.MsgClearBalance): {
                    typeUrl: string;
                    value: _236.MsgClearBalance;
                };
                updateInnerRedemptionRateBounds(value: _236.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _236.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _236.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _236.MsgResumeHostZone;
                };
                createTradeRoute(value: _236.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: _236.MsgCreateTradeRoute;
                };
                deleteTradeRoute(value: _236.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: _236.MsgDeleteTradeRoute;
                };
                updateTradeRoute(value: _236.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: _236.MsgUpdateTradeRoute;
                };
                setCommunityPoolRebate(value: _236.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: _236.MsgSetCommunityPoolRebate;
                };
                toggleTradeController(value: _236.MsgToggleTradeController): {
                    typeUrl: string;
                    value: _236.MsgToggleTradeController;
                };
                updateHostZoneParams(value: _236.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: _236.MsgUpdateHostZoneParams;
                };
            };
        };
        AminoConverter: {
            "/stride.stakeibc.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _236.MsgLiquidStake) => _236.MsgLiquidStakeAmino;
                fromAmino: (object: _236.MsgLiquidStakeAmino) => _236.MsgLiquidStake;
            };
            "/stride.stakeibc.MsgLSMLiquidStake": {
                aminoType: string;
                toAmino: (message: _236.MsgLSMLiquidStake) => _236.MsgLSMLiquidStakeAmino;
                fromAmino: (object: _236.MsgLSMLiquidStakeAmino) => _236.MsgLSMLiquidStake;
            };
            "/stride.stakeibc.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _236.MsgRedeemStake) => _236.MsgRedeemStakeAmino;
                fromAmino: (object: _236.MsgRedeemStakeAmino) => _236.MsgRedeemStake;
            };
            "/stride.stakeibc.MsgRegisterHostZone": {
                aminoType: string;
                toAmino: (message: _236.MsgRegisterHostZone) => _236.MsgRegisterHostZoneAmino;
                fromAmino: (object: _236.MsgRegisterHostZoneAmino) => _236.MsgRegisterHostZone;
            };
            "/stride.stakeibc.MsgClaimUndelegatedTokens": {
                aminoType: string;
                toAmino: (message: _236.MsgClaimUndelegatedTokens) => _236.MsgClaimUndelegatedTokensAmino;
                fromAmino: (object: _236.MsgClaimUndelegatedTokensAmino) => _236.MsgClaimUndelegatedTokens;
            };
            "/stride.stakeibc.MsgRebalanceValidators": {
                aminoType: string;
                toAmino: (message: _236.MsgRebalanceValidators) => _236.MsgRebalanceValidatorsAmino;
                fromAmino: (object: _236.MsgRebalanceValidatorsAmino) => _236.MsgRebalanceValidators;
            };
            "/stride.stakeibc.MsgAddValidators": {
                aminoType: string;
                toAmino: (message: _236.MsgAddValidators) => _236.MsgAddValidatorsAmino;
                fromAmino: (object: _236.MsgAddValidatorsAmino) => _236.MsgAddValidators;
            };
            "/stride.stakeibc.MsgChangeValidatorWeights": {
                aminoType: string;
                toAmino: (message: _236.MsgChangeValidatorWeights) => _236.MsgChangeValidatorWeightsAmino;
                fromAmino: (object: _236.MsgChangeValidatorWeightsAmino) => _236.MsgChangeValidatorWeights;
            };
            "/stride.stakeibc.MsgDeleteValidator": {
                aminoType: string;
                toAmino: (message: _236.MsgDeleteValidator) => _236.MsgDeleteValidatorAmino;
                fromAmino: (object: _236.MsgDeleteValidatorAmino) => _236.MsgDeleteValidator;
            };
            "/stride.stakeibc.MsgRestoreInterchainAccount": {
                aminoType: string;
                toAmino: (message: _236.MsgRestoreInterchainAccount) => _236.MsgRestoreInterchainAccountAmino;
                fromAmino: (object: _236.MsgRestoreInterchainAccountAmino) => _236.MsgRestoreInterchainAccount;
            };
            "/stride.stakeibc.MsgCloseDelegationChannel": {
                aminoType: string;
                toAmino: (message: _236.MsgCloseDelegationChannel) => _236.MsgCloseDelegationChannelAmino;
                fromAmino: (object: _236.MsgCloseDelegationChannelAmino) => _236.MsgCloseDelegationChannel;
            };
            "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
                aminoType: string;
                toAmino: (message: _236.MsgUpdateValidatorSharesExchRate) => _236.MsgUpdateValidatorSharesExchRateAmino;
                fromAmino: (object: _236.MsgUpdateValidatorSharesExchRateAmino) => _236.MsgUpdateValidatorSharesExchRate;
            };
            "/stride.stakeibc.MsgCalibrateDelegation": {
                aminoType: string;
                toAmino: (message: _236.MsgCalibrateDelegation) => _236.MsgCalibrateDelegationAmino;
                fromAmino: (object: _236.MsgCalibrateDelegationAmino) => _236.MsgCalibrateDelegation;
            };
            "/stride.stakeibc.MsgClearBalance": {
                aminoType: string;
                toAmino: (message: _236.MsgClearBalance) => _236.MsgClearBalanceAmino;
                fromAmino: (object: _236.MsgClearBalanceAmino) => _236.MsgClearBalance;
            };
            "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _236.MsgUpdateInnerRedemptionRateBounds) => _236.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _236.MsgUpdateInnerRedemptionRateBoundsAmino) => _236.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.stakeibc.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _236.MsgResumeHostZone) => _236.MsgResumeHostZoneAmino;
                fromAmino: (object: _236.MsgResumeHostZoneAmino) => _236.MsgResumeHostZone;
            };
            "/stride.stakeibc.MsgCreateTradeRoute": {
                aminoType: string;
                toAmino: (message: _236.MsgCreateTradeRoute) => _236.MsgCreateTradeRouteAmino;
                fromAmino: (object: _236.MsgCreateTradeRouteAmino) => _236.MsgCreateTradeRoute;
            };
            "/stride.stakeibc.MsgDeleteTradeRoute": {
                aminoType: string;
                toAmino: (message: _236.MsgDeleteTradeRoute) => _236.MsgDeleteTradeRouteAmino;
                fromAmino: (object: _236.MsgDeleteTradeRouteAmino) => _236.MsgDeleteTradeRoute;
            };
            "/stride.stakeibc.MsgUpdateTradeRoute": {
                aminoType: string;
                toAmino: (message: _236.MsgUpdateTradeRoute) => _236.MsgUpdateTradeRouteAmino;
                fromAmino: (object: _236.MsgUpdateTradeRouteAmino) => _236.MsgUpdateTradeRoute;
            };
            "/stride.stakeibc.MsgSetCommunityPoolRebate": {
                aminoType: string;
                toAmino: (message: _236.MsgSetCommunityPoolRebate) => _236.MsgSetCommunityPoolRebateAmino;
                fromAmino: (object: _236.MsgSetCommunityPoolRebateAmino) => _236.MsgSetCommunityPoolRebate;
            };
            "/stride.stakeibc.MsgToggleTradeController": {
                aminoType: string;
                toAmino: (message: _236.MsgToggleTradeController) => _236.MsgToggleTradeControllerAmino;
                fromAmino: (object: _236.MsgToggleTradeControllerAmino) => _236.MsgToggleTradeController;
            };
            "/stride.stakeibc.MsgUpdateHostZoneParams": {
                aminoType: string;
                toAmino: (message: _236.MsgUpdateHostZoneParams) => _236.MsgUpdateHostZoneParamsAmino;
                fromAmino: (object: _236.MsgUpdateHostZoneParamsAmino) => _236.MsgUpdateHostZoneParams;
            };
        };
        Validator: {
            typeUrl: string;
            encode(message: _237.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _237.Validator;
            fromPartial(object: Partial<_237.Validator>): _237.Validator;
            fromAmino(object: _237.ValidatorAmino): _237.Validator;
            toAmino(message: _237.Validator): _237.ValidatorAmino;
            fromAminoMsg(object: _237.ValidatorAminoMsg): _237.Validator;
            fromProtoMsg(message: _237.ValidatorProtoMsg): _237.Validator;
            toProto(message: _237.Validator): Uint8Array;
            toProtoMsg(message: _237.Validator): _237.ValidatorProtoMsg;
        };
        authzPermissionChangeFromJSON(object: any): _236.AuthzPermissionChange;
        authzPermissionChangeToJSON(object: _236.AuthzPermissionChange): string;
        AuthzPermissionChange: typeof _236.AuthzPermissionChange;
        AuthzPermissionChangeSDKType: typeof _236.AuthzPermissionChange;
        AuthzPermissionChangeAmino: typeof _236.AuthzPermissionChange;
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _236.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_236.MsgUpdateInnerRedemptionRateBounds>): _236.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _236.MsgUpdateInnerRedemptionRateBoundsAmino): _236.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _236.MsgUpdateInnerRedemptionRateBounds): _236.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _236.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _236.MsgUpdateInnerRedemptionRateBounds;
            fromProtoMsg(message: _236.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _236.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _236.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _236.MsgUpdateInnerRedemptionRateBounds): _236.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _236.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_236.MsgUpdateInnerRedemptionRateBoundsResponse>): _236.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _236.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _236.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _236.MsgUpdateInnerRedemptionRateBoundsResponse): _236.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _236.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _236.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _236.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _236.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _236.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _236.MsgUpdateInnerRedemptionRateBoundsResponse): _236.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _236.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgLiquidStake;
            fromPartial(object: Partial<_236.MsgLiquidStake>): _236.MsgLiquidStake;
            fromAmino(object: _236.MsgLiquidStakeAmino): _236.MsgLiquidStake;
            toAmino(message: _236.MsgLiquidStake): _236.MsgLiquidStakeAmino;
            fromAminoMsg(object: _236.MsgLiquidStakeAminoMsg): _236.MsgLiquidStake;
            toAminoMsg(message: _236.MsgLiquidStake): _236.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _236.MsgLiquidStakeProtoMsg): _236.MsgLiquidStake;
            toProto(message: _236.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _236.MsgLiquidStake): _236.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _236.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_236.MsgLiquidStakeResponse>): _236.MsgLiquidStakeResponse;
            fromAmino(object: _236.MsgLiquidStakeResponseAmino): _236.MsgLiquidStakeResponse;
            toAmino(message: _236.MsgLiquidStakeResponse): _236.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _236.MsgLiquidStakeResponseAminoMsg): _236.MsgLiquidStakeResponse;
            fromProtoMsg(message: _236.MsgLiquidStakeResponseProtoMsg): _236.MsgLiquidStakeResponse;
            toProto(message: _236.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _236.MsgLiquidStakeResponse): _236.MsgLiquidStakeResponseProtoMsg;
        };
        MsgLSMLiquidStake: {
            typeUrl: string;
            encode(message: _236.MsgLSMLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgLSMLiquidStake;
            fromPartial(object: Partial<_236.MsgLSMLiquidStake>): _236.MsgLSMLiquidStake;
            fromAmino(object: _236.MsgLSMLiquidStakeAmino): _236.MsgLSMLiquidStake;
            toAmino(message: _236.MsgLSMLiquidStake): _236.MsgLSMLiquidStakeAmino;
            fromAminoMsg(object: _236.MsgLSMLiquidStakeAminoMsg): _236.MsgLSMLiquidStake;
            toAminoMsg(message: _236.MsgLSMLiquidStake): _236.MsgLSMLiquidStakeAminoMsg;
            fromProtoMsg(message: _236.MsgLSMLiquidStakeProtoMsg): _236.MsgLSMLiquidStake;
            toProto(message: _236.MsgLSMLiquidStake): Uint8Array;
            toProtoMsg(message: _236.MsgLSMLiquidStake): _236.MsgLSMLiquidStakeProtoMsg;
        };
        MsgLSMLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _236.MsgLSMLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgLSMLiquidStakeResponse;
            fromPartial(object: Partial<_236.MsgLSMLiquidStakeResponse>): _236.MsgLSMLiquidStakeResponse;
            fromAmino(object: _236.MsgLSMLiquidStakeResponseAmino): _236.MsgLSMLiquidStakeResponse;
            toAmino(message: _236.MsgLSMLiquidStakeResponse): _236.MsgLSMLiquidStakeResponseAmino;
            fromAminoMsg(object: _236.MsgLSMLiquidStakeResponseAminoMsg): _236.MsgLSMLiquidStakeResponse;
            fromProtoMsg(message: _236.MsgLSMLiquidStakeResponseProtoMsg): _236.MsgLSMLiquidStakeResponse;
            toProto(message: _236.MsgLSMLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _236.MsgLSMLiquidStakeResponse): _236.MsgLSMLiquidStakeResponseProtoMsg;
        };
        MsgClearBalance: {
            typeUrl: string;
            encode(message: _236.MsgClearBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgClearBalance;
            fromPartial(object: Partial<_236.MsgClearBalance>): _236.MsgClearBalance;
            fromAmino(object: _236.MsgClearBalanceAmino): _236.MsgClearBalance;
            toAmino(message: _236.MsgClearBalance): _236.MsgClearBalanceAmino;
            fromAminoMsg(object: _236.MsgClearBalanceAminoMsg): _236.MsgClearBalance;
            toAminoMsg(message: _236.MsgClearBalance): _236.MsgClearBalanceAminoMsg;
            fromProtoMsg(message: _236.MsgClearBalanceProtoMsg): _236.MsgClearBalance;
            toProto(message: _236.MsgClearBalance): Uint8Array;
            toProtoMsg(message: _236.MsgClearBalance): _236.MsgClearBalanceProtoMsg;
        };
        MsgClearBalanceResponse: {
            typeUrl: string;
            encode(_: _236.MsgClearBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgClearBalanceResponse;
            fromPartial(_: Partial<_236.MsgClearBalanceResponse>): _236.MsgClearBalanceResponse;
            fromAmino(_: _236.MsgClearBalanceResponseAmino): _236.MsgClearBalanceResponse;
            toAmino(_: _236.MsgClearBalanceResponse): _236.MsgClearBalanceResponseAmino;
            fromAminoMsg(object: _236.MsgClearBalanceResponseAminoMsg): _236.MsgClearBalanceResponse;
            fromProtoMsg(message: _236.MsgClearBalanceResponseProtoMsg): _236.MsgClearBalanceResponse;
            toProto(message: _236.MsgClearBalanceResponse): Uint8Array;
            toProtoMsg(message: _236.MsgClearBalanceResponse): _236.MsgClearBalanceResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _236.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgRedeemStake;
            fromPartial(object: Partial<_236.MsgRedeemStake>): _236.MsgRedeemStake;
            fromAmino(object: _236.MsgRedeemStakeAmino): _236.MsgRedeemStake;
            toAmino(message: _236.MsgRedeemStake): _236.MsgRedeemStakeAmino;
            fromAminoMsg(object: _236.MsgRedeemStakeAminoMsg): _236.MsgRedeemStake;
            toAminoMsg(message: _236.MsgRedeemStake): _236.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _236.MsgRedeemStakeProtoMsg): _236.MsgRedeemStake;
            toProto(message: _236.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _236.MsgRedeemStake): _236.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(_: _236.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgRedeemStakeResponse;
            fromPartial(_: Partial<_236.MsgRedeemStakeResponse>): _236.MsgRedeemStakeResponse;
            fromAmino(_: _236.MsgRedeemStakeResponseAmino): _236.MsgRedeemStakeResponse;
            toAmino(_: _236.MsgRedeemStakeResponse): _236.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _236.MsgRedeemStakeResponseAminoMsg): _236.MsgRedeemStakeResponse;
            fromProtoMsg(message: _236.MsgRedeemStakeResponseProtoMsg): _236.MsgRedeemStakeResponse;
            toProto(message: _236.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _236.MsgRedeemStakeResponse): _236.MsgRedeemStakeResponseProtoMsg;
        };
        MsgRegisterHostZone: {
            typeUrl: string;
            encode(message: _236.MsgRegisterHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgRegisterHostZone;
            fromPartial(object: Partial<_236.MsgRegisterHostZone>): _236.MsgRegisterHostZone;
            fromAmino(object: _236.MsgRegisterHostZoneAmino): _236.MsgRegisterHostZone;
            toAmino(message: _236.MsgRegisterHostZone): _236.MsgRegisterHostZoneAmino;
            fromAminoMsg(object: _236.MsgRegisterHostZoneAminoMsg): _236.MsgRegisterHostZone;
            toAminoMsg(message: _236.MsgRegisterHostZone): _236.MsgRegisterHostZoneAminoMsg;
            fromProtoMsg(message: _236.MsgRegisterHostZoneProtoMsg): _236.MsgRegisterHostZone;
            toProto(message: _236.MsgRegisterHostZone): Uint8Array;
            toProtoMsg(message: _236.MsgRegisterHostZone): _236.MsgRegisterHostZoneProtoMsg;
        };
        MsgRegisterHostZoneResponse: {
            typeUrl: string;
            encode(_: _236.MsgRegisterHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgRegisterHostZoneResponse;
            fromPartial(_: Partial<_236.MsgRegisterHostZoneResponse>): _236.MsgRegisterHostZoneResponse;
            fromAmino(_: _236.MsgRegisterHostZoneResponseAmino): _236.MsgRegisterHostZoneResponse;
            toAmino(_: _236.MsgRegisterHostZoneResponse): _236.MsgRegisterHostZoneResponseAmino;
            fromAminoMsg(object: _236.MsgRegisterHostZoneResponseAminoMsg): _236.MsgRegisterHostZoneResponse;
            fromProtoMsg(message: _236.MsgRegisterHostZoneResponseProtoMsg): _236.MsgRegisterHostZoneResponse;
            toProto(message: _236.MsgRegisterHostZoneResponse): Uint8Array;
            toProtoMsg(message: _236.MsgRegisterHostZoneResponse): _236.MsgRegisterHostZoneResponseProtoMsg;
        };
        MsgClaimUndelegatedTokens: {
            typeUrl: string;
            encode(message: _236.MsgClaimUndelegatedTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgClaimUndelegatedTokens;
            fromPartial(object: Partial<_236.MsgClaimUndelegatedTokens>): _236.MsgClaimUndelegatedTokens;
            fromAmino(object: _236.MsgClaimUndelegatedTokensAmino): _236.MsgClaimUndelegatedTokens;
            toAmino(message: _236.MsgClaimUndelegatedTokens): _236.MsgClaimUndelegatedTokensAmino;
            fromAminoMsg(object: _236.MsgClaimUndelegatedTokensAminoMsg): _236.MsgClaimUndelegatedTokens;
            toAminoMsg(message: _236.MsgClaimUndelegatedTokens): _236.MsgClaimUndelegatedTokensAminoMsg;
            fromProtoMsg(message: _236.MsgClaimUndelegatedTokensProtoMsg): _236.MsgClaimUndelegatedTokens;
            toProto(message: _236.MsgClaimUndelegatedTokens): Uint8Array;
            toProtoMsg(message: _236.MsgClaimUndelegatedTokens): _236.MsgClaimUndelegatedTokensProtoMsg;
        };
        MsgClaimUndelegatedTokensResponse: {
            typeUrl: string;
            encode(_: _236.MsgClaimUndelegatedTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgClaimUndelegatedTokensResponse;
            fromPartial(_: Partial<_236.MsgClaimUndelegatedTokensResponse>): _236.MsgClaimUndelegatedTokensResponse;
            fromAmino(_: _236.MsgClaimUndelegatedTokensResponseAmino): _236.MsgClaimUndelegatedTokensResponse;
            toAmino(_: _236.MsgClaimUndelegatedTokensResponse): _236.MsgClaimUndelegatedTokensResponseAmino;
            fromAminoMsg(object: _236.MsgClaimUndelegatedTokensResponseAminoMsg): _236.MsgClaimUndelegatedTokensResponse;
            fromProtoMsg(message: _236.MsgClaimUndelegatedTokensResponseProtoMsg): _236.MsgClaimUndelegatedTokensResponse;
            toProto(message: _236.MsgClaimUndelegatedTokensResponse): Uint8Array;
            toProtoMsg(message: _236.MsgClaimUndelegatedTokensResponse): _236.MsgClaimUndelegatedTokensResponseProtoMsg;
        };
        MsgRebalanceValidators: {
            typeUrl: string;
            encode(message: _236.MsgRebalanceValidators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgRebalanceValidators;
            fromPartial(object: Partial<_236.MsgRebalanceValidators>): _236.MsgRebalanceValidators;
            fromAmino(object: _236.MsgRebalanceValidatorsAmino): _236.MsgRebalanceValidators;
            toAmino(message: _236.MsgRebalanceValidators): _236.MsgRebalanceValidatorsAmino;
            fromAminoMsg(object: _236.MsgRebalanceValidatorsAminoMsg): _236.MsgRebalanceValidators;
            toAminoMsg(message: _236.MsgRebalanceValidators): _236.MsgRebalanceValidatorsAminoMsg;
            fromProtoMsg(message: _236.MsgRebalanceValidatorsProtoMsg): _236.MsgRebalanceValidators;
            toProto(message: _236.MsgRebalanceValidators): Uint8Array;
            toProtoMsg(message: _236.MsgRebalanceValidators): _236.MsgRebalanceValidatorsProtoMsg;
        };
        MsgRebalanceValidatorsResponse: {
            typeUrl: string;
            encode(_: _236.MsgRebalanceValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgRebalanceValidatorsResponse;
            fromPartial(_: Partial<_236.MsgRebalanceValidatorsResponse>): _236.MsgRebalanceValidatorsResponse;
            fromAmino(_: _236.MsgRebalanceValidatorsResponseAmino): _236.MsgRebalanceValidatorsResponse;
            toAmino(_: _236.MsgRebalanceValidatorsResponse): _236.MsgRebalanceValidatorsResponseAmino;
            fromAminoMsg(object: _236.MsgRebalanceValidatorsResponseAminoMsg): _236.MsgRebalanceValidatorsResponse;
            fromProtoMsg(message: _236.MsgRebalanceValidatorsResponseProtoMsg): _236.MsgRebalanceValidatorsResponse;
            toProto(message: _236.MsgRebalanceValidatorsResponse): Uint8Array;
            toProtoMsg(message: _236.MsgRebalanceValidatorsResponse): _236.MsgRebalanceValidatorsResponseProtoMsg;
        };
        MsgAddValidators: {
            typeUrl: string;
            encode(message: _236.MsgAddValidators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgAddValidators;
            fromPartial(object: Partial<_236.MsgAddValidators>): _236.MsgAddValidators;
            fromAmino(object: _236.MsgAddValidatorsAmino): _236.MsgAddValidators;
            toAmino(message: _236.MsgAddValidators): _236.MsgAddValidatorsAmino;
            fromAminoMsg(object: _236.MsgAddValidatorsAminoMsg): _236.MsgAddValidators;
            fromProtoMsg(message: _236.MsgAddValidatorsProtoMsg): _236.MsgAddValidators;
            toProto(message: _236.MsgAddValidators): Uint8Array;
            toProtoMsg(message: _236.MsgAddValidators): _236.MsgAddValidatorsProtoMsg;
        };
        MsgAddValidatorsResponse: {
            typeUrl: string;
            encode(_: _236.MsgAddValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgAddValidatorsResponse;
            fromPartial(_: Partial<_236.MsgAddValidatorsResponse>): _236.MsgAddValidatorsResponse;
            fromAmino(_: _236.MsgAddValidatorsResponseAmino): _236.MsgAddValidatorsResponse;
            toAmino(_: _236.MsgAddValidatorsResponse): _236.MsgAddValidatorsResponseAmino;
            fromAminoMsg(object: _236.MsgAddValidatorsResponseAminoMsg): _236.MsgAddValidatorsResponse;
            fromProtoMsg(message: _236.MsgAddValidatorsResponseProtoMsg): _236.MsgAddValidatorsResponse;
            toProto(message: _236.MsgAddValidatorsResponse): Uint8Array;
            toProtoMsg(message: _236.MsgAddValidatorsResponse): _236.MsgAddValidatorsResponseProtoMsg;
        };
        ValidatorWeight: {
            typeUrl: string;
            encode(message: _236.ValidatorWeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.ValidatorWeight;
            fromPartial(object: Partial<_236.ValidatorWeight>): _236.ValidatorWeight;
            fromAmino(object: _236.ValidatorWeightAmino): _236.ValidatorWeight;
            toAmino(message: _236.ValidatorWeight): _236.ValidatorWeightAmino;
            fromAminoMsg(object: _236.ValidatorWeightAminoMsg): _236.ValidatorWeight;
            fromProtoMsg(message: _236.ValidatorWeightProtoMsg): _236.ValidatorWeight;
            toProto(message: _236.ValidatorWeight): Uint8Array;
            toProtoMsg(message: _236.ValidatorWeight): _236.ValidatorWeightProtoMsg;
        };
        MsgChangeValidatorWeights: {
            typeUrl: string;
            encode(message: _236.MsgChangeValidatorWeights, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgChangeValidatorWeights;
            fromPartial(object: Partial<_236.MsgChangeValidatorWeights>): _236.MsgChangeValidatorWeights;
            fromAmino(object: _236.MsgChangeValidatorWeightsAmino): _236.MsgChangeValidatorWeights;
            toAmino(message: _236.MsgChangeValidatorWeights): _236.MsgChangeValidatorWeightsAmino;
            fromAminoMsg(object: _236.MsgChangeValidatorWeightsAminoMsg): _236.MsgChangeValidatorWeights;
            fromProtoMsg(message: _236.MsgChangeValidatorWeightsProtoMsg): _236.MsgChangeValidatorWeights;
            toProto(message: _236.MsgChangeValidatorWeights): Uint8Array;
            toProtoMsg(message: _236.MsgChangeValidatorWeights): _236.MsgChangeValidatorWeightsProtoMsg;
        };
        MsgChangeValidatorWeightsResponse: {
            typeUrl: string;
            encode(_: _236.MsgChangeValidatorWeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgChangeValidatorWeightsResponse;
            fromPartial(_: Partial<_236.MsgChangeValidatorWeightsResponse>): _236.MsgChangeValidatorWeightsResponse;
            fromAmino(_: _236.MsgChangeValidatorWeightsResponseAmino): _236.MsgChangeValidatorWeightsResponse;
            toAmino(_: _236.MsgChangeValidatorWeightsResponse): _236.MsgChangeValidatorWeightsResponseAmino;
            fromAminoMsg(object: _236.MsgChangeValidatorWeightsResponseAminoMsg): _236.MsgChangeValidatorWeightsResponse;
            fromProtoMsg(message: _236.MsgChangeValidatorWeightsResponseProtoMsg): _236.MsgChangeValidatorWeightsResponse;
            toProto(message: _236.MsgChangeValidatorWeightsResponse): Uint8Array;
            toProtoMsg(message: _236.MsgChangeValidatorWeightsResponse): _236.MsgChangeValidatorWeightsResponseProtoMsg;
        };
        MsgDeleteValidator: {
            typeUrl: string;
            encode(message: _236.MsgDeleteValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgDeleteValidator;
            fromPartial(object: Partial<_236.MsgDeleteValidator>): _236.MsgDeleteValidator;
            fromAmino(object: _236.MsgDeleteValidatorAmino): _236.MsgDeleteValidator;
            toAmino(message: _236.MsgDeleteValidator): _236.MsgDeleteValidatorAmino;
            fromAminoMsg(object: _236.MsgDeleteValidatorAminoMsg): _236.MsgDeleteValidator;
            toAminoMsg(message: _236.MsgDeleteValidator): _236.MsgDeleteValidatorAminoMsg;
            fromProtoMsg(message: _236.MsgDeleteValidatorProtoMsg): _236.MsgDeleteValidator;
            toProto(message: _236.MsgDeleteValidator): Uint8Array;
            toProtoMsg(message: _236.MsgDeleteValidator): _236.MsgDeleteValidatorProtoMsg;
        };
        MsgDeleteValidatorResponse: {
            typeUrl: string;
            encode(_: _236.MsgDeleteValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgDeleteValidatorResponse;
            fromPartial(_: Partial<_236.MsgDeleteValidatorResponse>): _236.MsgDeleteValidatorResponse;
            fromAmino(_: _236.MsgDeleteValidatorResponseAmino): _236.MsgDeleteValidatorResponse;
            toAmino(_: _236.MsgDeleteValidatorResponse): _236.MsgDeleteValidatorResponseAmino;
            fromAminoMsg(object: _236.MsgDeleteValidatorResponseAminoMsg): _236.MsgDeleteValidatorResponse;
            fromProtoMsg(message: _236.MsgDeleteValidatorResponseProtoMsg): _236.MsgDeleteValidatorResponse;
            toProto(message: _236.MsgDeleteValidatorResponse): Uint8Array;
            toProtoMsg(message: _236.MsgDeleteValidatorResponse): _236.MsgDeleteValidatorResponseProtoMsg;
        };
        MsgRestoreInterchainAccount: {
            typeUrl: string;
            encode(message: _236.MsgRestoreInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgRestoreInterchainAccount;
            fromPartial(object: Partial<_236.MsgRestoreInterchainAccount>): _236.MsgRestoreInterchainAccount;
            fromAmino(object: _236.MsgRestoreInterchainAccountAmino): _236.MsgRestoreInterchainAccount;
            toAmino(message: _236.MsgRestoreInterchainAccount): _236.MsgRestoreInterchainAccountAmino;
            fromAminoMsg(object: _236.MsgRestoreInterchainAccountAminoMsg): _236.MsgRestoreInterchainAccount;
            toAminoMsg(message: _236.MsgRestoreInterchainAccount): _236.MsgRestoreInterchainAccountAminoMsg;
            fromProtoMsg(message: _236.MsgRestoreInterchainAccountProtoMsg): _236.MsgRestoreInterchainAccount;
            toProto(message: _236.MsgRestoreInterchainAccount): Uint8Array;
            toProtoMsg(message: _236.MsgRestoreInterchainAccount): _236.MsgRestoreInterchainAccountProtoMsg;
        };
        MsgRestoreInterchainAccountResponse: {
            typeUrl: string;
            encode(_: _236.MsgRestoreInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgRestoreInterchainAccountResponse;
            fromPartial(_: Partial<_236.MsgRestoreInterchainAccountResponse>): _236.MsgRestoreInterchainAccountResponse;
            fromAmino(_: _236.MsgRestoreInterchainAccountResponseAmino): _236.MsgRestoreInterchainAccountResponse;
            toAmino(_: _236.MsgRestoreInterchainAccountResponse): _236.MsgRestoreInterchainAccountResponseAmino;
            fromAminoMsg(object: _236.MsgRestoreInterchainAccountResponseAminoMsg): _236.MsgRestoreInterchainAccountResponse;
            fromProtoMsg(message: _236.MsgRestoreInterchainAccountResponseProtoMsg): _236.MsgRestoreInterchainAccountResponse;
            toProto(message: _236.MsgRestoreInterchainAccountResponse): Uint8Array;
            toProtoMsg(message: _236.MsgRestoreInterchainAccountResponse): _236.MsgRestoreInterchainAccountResponseProtoMsg;
        };
        MsgCloseDelegationChannel: {
            typeUrl: string;
            encode(message: _236.MsgCloseDelegationChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgCloseDelegationChannel;
            fromPartial(object: Partial<_236.MsgCloseDelegationChannel>): _236.MsgCloseDelegationChannel;
            fromAmino(object: _236.MsgCloseDelegationChannelAmino): _236.MsgCloseDelegationChannel;
            toAmino(message: _236.MsgCloseDelegationChannel): _236.MsgCloseDelegationChannelAmino;
            fromAminoMsg(object: _236.MsgCloseDelegationChannelAminoMsg): _236.MsgCloseDelegationChannel;
            fromProtoMsg(message: _236.MsgCloseDelegationChannelProtoMsg): _236.MsgCloseDelegationChannel;
            toProto(message: _236.MsgCloseDelegationChannel): Uint8Array;
            toProtoMsg(message: _236.MsgCloseDelegationChannel): _236.MsgCloseDelegationChannelProtoMsg;
        };
        MsgCloseDelegationChannelResponse: {
            typeUrl: string;
            encode(_: _236.MsgCloseDelegationChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgCloseDelegationChannelResponse;
            fromPartial(_: Partial<_236.MsgCloseDelegationChannelResponse>): _236.MsgCloseDelegationChannelResponse;
            fromAmino(_: _236.MsgCloseDelegationChannelResponseAmino): _236.MsgCloseDelegationChannelResponse;
            toAmino(_: _236.MsgCloseDelegationChannelResponse): _236.MsgCloseDelegationChannelResponseAmino;
            fromAminoMsg(object: _236.MsgCloseDelegationChannelResponseAminoMsg): _236.MsgCloseDelegationChannelResponse;
            fromProtoMsg(message: _236.MsgCloseDelegationChannelResponseProtoMsg): _236.MsgCloseDelegationChannelResponse;
            toProto(message: _236.MsgCloseDelegationChannelResponse): Uint8Array;
            toProtoMsg(message: _236.MsgCloseDelegationChannelResponse): _236.MsgCloseDelegationChannelResponseProtoMsg;
        };
        MsgUpdateValidatorSharesExchRate: {
            typeUrl: string;
            encode(message: _236.MsgUpdateValidatorSharesExchRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgUpdateValidatorSharesExchRate;
            fromPartial(object: Partial<_236.MsgUpdateValidatorSharesExchRate>): _236.MsgUpdateValidatorSharesExchRate;
            fromAmino(object: _236.MsgUpdateValidatorSharesExchRateAmino): _236.MsgUpdateValidatorSharesExchRate;
            toAmino(message: _236.MsgUpdateValidatorSharesExchRate): _236.MsgUpdateValidatorSharesExchRateAmino;
            fromAminoMsg(object: _236.MsgUpdateValidatorSharesExchRateAminoMsg): _236.MsgUpdateValidatorSharesExchRate;
            toAminoMsg(message: _236.MsgUpdateValidatorSharesExchRate): _236.MsgUpdateValidatorSharesExchRateAminoMsg;
            fromProtoMsg(message: _236.MsgUpdateValidatorSharesExchRateProtoMsg): _236.MsgUpdateValidatorSharesExchRate;
            toProto(message: _236.MsgUpdateValidatorSharesExchRate): Uint8Array;
            toProtoMsg(message: _236.MsgUpdateValidatorSharesExchRate): _236.MsgUpdateValidatorSharesExchRateProtoMsg;
        };
        MsgUpdateValidatorSharesExchRateResponse: {
            typeUrl: string;
            encode(_: _236.MsgUpdateValidatorSharesExchRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgUpdateValidatorSharesExchRateResponse;
            fromPartial(_: Partial<_236.MsgUpdateValidatorSharesExchRateResponse>): _236.MsgUpdateValidatorSharesExchRateResponse;
            fromAmino(_: _236.MsgUpdateValidatorSharesExchRateResponseAmino): _236.MsgUpdateValidatorSharesExchRateResponse;
            toAmino(_: _236.MsgUpdateValidatorSharesExchRateResponse): _236.MsgUpdateValidatorSharesExchRateResponseAmino;
            fromAminoMsg(object: _236.MsgUpdateValidatorSharesExchRateResponseAminoMsg): _236.MsgUpdateValidatorSharesExchRateResponse;
            fromProtoMsg(message: _236.MsgUpdateValidatorSharesExchRateResponseProtoMsg): _236.MsgUpdateValidatorSharesExchRateResponse;
            toProto(message: _236.MsgUpdateValidatorSharesExchRateResponse): Uint8Array;
            toProtoMsg(message: _236.MsgUpdateValidatorSharesExchRateResponse): _236.MsgUpdateValidatorSharesExchRateResponseProtoMsg;
        };
        MsgCalibrateDelegation: {
            typeUrl: string;
            encode(message: _236.MsgCalibrateDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgCalibrateDelegation;
            fromPartial(object: Partial<_236.MsgCalibrateDelegation>): _236.MsgCalibrateDelegation;
            fromAmino(object: _236.MsgCalibrateDelegationAmino): _236.MsgCalibrateDelegation;
            toAmino(message: _236.MsgCalibrateDelegation): _236.MsgCalibrateDelegationAmino;
            fromAminoMsg(object: _236.MsgCalibrateDelegationAminoMsg): _236.MsgCalibrateDelegation;
            fromProtoMsg(message: _236.MsgCalibrateDelegationProtoMsg): _236.MsgCalibrateDelegation;
            toProto(message: _236.MsgCalibrateDelegation): Uint8Array;
            toProtoMsg(message: _236.MsgCalibrateDelegation): _236.MsgCalibrateDelegationProtoMsg;
        };
        MsgCalibrateDelegationResponse: {
            typeUrl: string;
            encode(_: _236.MsgCalibrateDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgCalibrateDelegationResponse;
            fromPartial(_: Partial<_236.MsgCalibrateDelegationResponse>): _236.MsgCalibrateDelegationResponse;
            fromAmino(_: _236.MsgCalibrateDelegationResponseAmino): _236.MsgCalibrateDelegationResponse;
            toAmino(_: _236.MsgCalibrateDelegationResponse): _236.MsgCalibrateDelegationResponseAmino;
            fromAminoMsg(object: _236.MsgCalibrateDelegationResponseAminoMsg): _236.MsgCalibrateDelegationResponse;
            fromProtoMsg(message: _236.MsgCalibrateDelegationResponseProtoMsg): _236.MsgCalibrateDelegationResponse;
            toProto(message: _236.MsgCalibrateDelegationResponse): Uint8Array;
            toProtoMsg(message: _236.MsgCalibrateDelegationResponse): _236.MsgCalibrateDelegationResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _236.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgResumeHostZone;
            fromPartial(object: Partial<_236.MsgResumeHostZone>): _236.MsgResumeHostZone;
            fromAmino(object: _236.MsgResumeHostZoneAmino): _236.MsgResumeHostZone;
            toAmino(message: _236.MsgResumeHostZone): _236.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _236.MsgResumeHostZoneAminoMsg): _236.MsgResumeHostZone;
            fromProtoMsg(message: _236.MsgResumeHostZoneProtoMsg): _236.MsgResumeHostZone;
            toProto(message: _236.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _236.MsgResumeHostZone): _236.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _236.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_236.MsgResumeHostZoneResponse>): _236.MsgResumeHostZoneResponse;
            fromAmino(_: _236.MsgResumeHostZoneResponseAmino): _236.MsgResumeHostZoneResponse;
            toAmino(_: _236.MsgResumeHostZoneResponse): _236.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _236.MsgResumeHostZoneResponseAminoMsg): _236.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _236.MsgResumeHostZoneResponseProtoMsg): _236.MsgResumeHostZoneResponse;
            toProto(message: _236.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _236.MsgResumeHostZoneResponse): _236.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgCreateTradeRoute: {
            typeUrl: string;
            encode(message: _236.MsgCreateTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgCreateTradeRoute;
            fromPartial(object: Partial<_236.MsgCreateTradeRoute>): _236.MsgCreateTradeRoute;
            fromAmino(object: _236.MsgCreateTradeRouteAmino): _236.MsgCreateTradeRoute;
            toAmino(message: _236.MsgCreateTradeRoute): _236.MsgCreateTradeRouteAmino;
            fromAminoMsg(object: _236.MsgCreateTradeRouteAminoMsg): _236.MsgCreateTradeRoute;
            toAminoMsg(message: _236.MsgCreateTradeRoute): _236.MsgCreateTradeRouteAminoMsg;
            fromProtoMsg(message: _236.MsgCreateTradeRouteProtoMsg): _236.MsgCreateTradeRoute;
            toProto(message: _236.MsgCreateTradeRoute): Uint8Array;
            toProtoMsg(message: _236.MsgCreateTradeRoute): _236.MsgCreateTradeRouteProtoMsg;
        };
        MsgCreateTradeRouteResponse: {
            typeUrl: string;
            encode(_: _236.MsgCreateTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgCreateTradeRouteResponse;
            fromPartial(_: Partial<_236.MsgCreateTradeRouteResponse>): _236.MsgCreateTradeRouteResponse;
            fromAmino(_: _236.MsgCreateTradeRouteResponseAmino): _236.MsgCreateTradeRouteResponse;
            toAmino(_: _236.MsgCreateTradeRouteResponse): _236.MsgCreateTradeRouteResponseAmino;
            fromAminoMsg(object: _236.MsgCreateTradeRouteResponseAminoMsg): _236.MsgCreateTradeRouteResponse;
            fromProtoMsg(message: _236.MsgCreateTradeRouteResponseProtoMsg): _236.MsgCreateTradeRouteResponse;
            toProto(message: _236.MsgCreateTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _236.MsgCreateTradeRouteResponse): _236.MsgCreateTradeRouteResponseProtoMsg;
        };
        MsgDeleteTradeRoute: {
            typeUrl: string;
            encode(message: _236.MsgDeleteTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgDeleteTradeRoute;
            fromPartial(object: Partial<_236.MsgDeleteTradeRoute>): _236.MsgDeleteTradeRoute;
            fromAmino(object: _236.MsgDeleteTradeRouteAmino): _236.MsgDeleteTradeRoute;
            toAmino(message: _236.MsgDeleteTradeRoute): _236.MsgDeleteTradeRouteAmino;
            fromAminoMsg(object: _236.MsgDeleteTradeRouteAminoMsg): _236.MsgDeleteTradeRoute;
            toAminoMsg(message: _236.MsgDeleteTradeRoute): _236.MsgDeleteTradeRouteAminoMsg;
            fromProtoMsg(message: _236.MsgDeleteTradeRouteProtoMsg): _236.MsgDeleteTradeRoute;
            toProto(message: _236.MsgDeleteTradeRoute): Uint8Array;
            toProtoMsg(message: _236.MsgDeleteTradeRoute): _236.MsgDeleteTradeRouteProtoMsg;
        };
        MsgDeleteTradeRouteResponse: {
            typeUrl: string;
            encode(_: _236.MsgDeleteTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgDeleteTradeRouteResponse;
            fromPartial(_: Partial<_236.MsgDeleteTradeRouteResponse>): _236.MsgDeleteTradeRouteResponse;
            fromAmino(_: _236.MsgDeleteTradeRouteResponseAmino): _236.MsgDeleteTradeRouteResponse;
            toAmino(_: _236.MsgDeleteTradeRouteResponse): _236.MsgDeleteTradeRouteResponseAmino;
            fromAminoMsg(object: _236.MsgDeleteTradeRouteResponseAminoMsg): _236.MsgDeleteTradeRouteResponse;
            fromProtoMsg(message: _236.MsgDeleteTradeRouteResponseProtoMsg): _236.MsgDeleteTradeRouteResponse;
            toProto(message: _236.MsgDeleteTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _236.MsgDeleteTradeRouteResponse): _236.MsgDeleteTradeRouteResponseProtoMsg;
        };
        MsgUpdateTradeRoute: {
            typeUrl: string;
            encode(message: _236.MsgUpdateTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgUpdateTradeRoute;
            fromPartial(object: Partial<_236.MsgUpdateTradeRoute>): _236.MsgUpdateTradeRoute;
            fromAmino(object: _236.MsgUpdateTradeRouteAmino): _236.MsgUpdateTradeRoute;
            toAmino(message: _236.MsgUpdateTradeRoute): _236.MsgUpdateTradeRouteAmino;
            fromAminoMsg(object: _236.MsgUpdateTradeRouteAminoMsg): _236.MsgUpdateTradeRoute;
            toAminoMsg(message: _236.MsgUpdateTradeRoute): _236.MsgUpdateTradeRouteAminoMsg;
            fromProtoMsg(message: _236.MsgUpdateTradeRouteProtoMsg): _236.MsgUpdateTradeRoute;
            toProto(message: _236.MsgUpdateTradeRoute): Uint8Array;
            toProtoMsg(message: _236.MsgUpdateTradeRoute): _236.MsgUpdateTradeRouteProtoMsg;
        };
        MsgUpdateTradeRouteResponse: {
            typeUrl: string;
            encode(_: _236.MsgUpdateTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgUpdateTradeRouteResponse;
            fromPartial(_: Partial<_236.MsgUpdateTradeRouteResponse>): _236.MsgUpdateTradeRouteResponse;
            fromAmino(_: _236.MsgUpdateTradeRouteResponseAmino): _236.MsgUpdateTradeRouteResponse;
            toAmino(_: _236.MsgUpdateTradeRouteResponse): _236.MsgUpdateTradeRouteResponseAmino;
            fromAminoMsg(object: _236.MsgUpdateTradeRouteResponseAminoMsg): _236.MsgUpdateTradeRouteResponse;
            fromProtoMsg(message: _236.MsgUpdateTradeRouteResponseProtoMsg): _236.MsgUpdateTradeRouteResponse;
            toProto(message: _236.MsgUpdateTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _236.MsgUpdateTradeRouteResponse): _236.MsgUpdateTradeRouteResponseProtoMsg;
        };
        MsgSetCommunityPoolRebate: {
            typeUrl: string;
            encode(message: _236.MsgSetCommunityPoolRebate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgSetCommunityPoolRebate;
            fromPartial(object: Partial<_236.MsgSetCommunityPoolRebate>): _236.MsgSetCommunityPoolRebate;
            fromAmino(object: _236.MsgSetCommunityPoolRebateAmino): _236.MsgSetCommunityPoolRebate;
            toAmino(message: _236.MsgSetCommunityPoolRebate): _236.MsgSetCommunityPoolRebateAmino;
            fromAminoMsg(object: _236.MsgSetCommunityPoolRebateAminoMsg): _236.MsgSetCommunityPoolRebate;
            toAminoMsg(message: _236.MsgSetCommunityPoolRebate): _236.MsgSetCommunityPoolRebateAminoMsg;
            fromProtoMsg(message: _236.MsgSetCommunityPoolRebateProtoMsg): _236.MsgSetCommunityPoolRebate;
            toProto(message: _236.MsgSetCommunityPoolRebate): Uint8Array;
            toProtoMsg(message: _236.MsgSetCommunityPoolRebate): _236.MsgSetCommunityPoolRebateProtoMsg;
        };
        MsgSetCommunityPoolRebateResponse: {
            typeUrl: string;
            encode(_: _236.MsgSetCommunityPoolRebateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgSetCommunityPoolRebateResponse;
            fromPartial(_: Partial<_236.MsgSetCommunityPoolRebateResponse>): _236.MsgSetCommunityPoolRebateResponse;
            fromAmino(_: _236.MsgSetCommunityPoolRebateResponseAmino): _236.MsgSetCommunityPoolRebateResponse;
            toAmino(_: _236.MsgSetCommunityPoolRebateResponse): _236.MsgSetCommunityPoolRebateResponseAmino;
            fromAminoMsg(object: _236.MsgSetCommunityPoolRebateResponseAminoMsg): _236.MsgSetCommunityPoolRebateResponse;
            fromProtoMsg(message: _236.MsgSetCommunityPoolRebateResponseProtoMsg): _236.MsgSetCommunityPoolRebateResponse;
            toProto(message: _236.MsgSetCommunityPoolRebateResponse): Uint8Array;
            toProtoMsg(message: _236.MsgSetCommunityPoolRebateResponse): _236.MsgSetCommunityPoolRebateResponseProtoMsg;
        };
        MsgToggleTradeController: {
            typeUrl: string;
            encode(message: _236.MsgToggleTradeController, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgToggleTradeController;
            fromPartial(object: Partial<_236.MsgToggleTradeController>): _236.MsgToggleTradeController;
            fromAmino(object: _236.MsgToggleTradeControllerAmino): _236.MsgToggleTradeController;
            toAmino(message: _236.MsgToggleTradeController): _236.MsgToggleTradeControllerAmino;
            fromAminoMsg(object: _236.MsgToggleTradeControllerAminoMsg): _236.MsgToggleTradeController;
            toAminoMsg(message: _236.MsgToggleTradeController): _236.MsgToggleTradeControllerAminoMsg;
            fromProtoMsg(message: _236.MsgToggleTradeControllerProtoMsg): _236.MsgToggleTradeController;
            toProto(message: _236.MsgToggleTradeController): Uint8Array;
            toProtoMsg(message: _236.MsgToggleTradeController): _236.MsgToggleTradeControllerProtoMsg;
        };
        MsgToggleTradeControllerResponse: {
            typeUrl: string;
            encode(_: _236.MsgToggleTradeControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgToggleTradeControllerResponse;
            fromPartial(_: Partial<_236.MsgToggleTradeControllerResponse>): _236.MsgToggleTradeControllerResponse;
            fromAmino(_: _236.MsgToggleTradeControllerResponseAmino): _236.MsgToggleTradeControllerResponse;
            toAmino(_: _236.MsgToggleTradeControllerResponse): _236.MsgToggleTradeControllerResponseAmino;
            fromAminoMsg(object: _236.MsgToggleTradeControllerResponseAminoMsg): _236.MsgToggleTradeControllerResponse;
            fromProtoMsg(message: _236.MsgToggleTradeControllerResponseProtoMsg): _236.MsgToggleTradeControllerResponse;
            toProto(message: _236.MsgToggleTradeControllerResponse): Uint8Array;
            toProtoMsg(message: _236.MsgToggleTradeControllerResponse): _236.MsgToggleTradeControllerResponseProtoMsg;
        };
        MsgUpdateHostZoneParams: {
            typeUrl: string;
            encode(message: _236.MsgUpdateHostZoneParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgUpdateHostZoneParams;
            fromPartial(object: Partial<_236.MsgUpdateHostZoneParams>): _236.MsgUpdateHostZoneParams;
            fromAmino(object: _236.MsgUpdateHostZoneParamsAmino): _236.MsgUpdateHostZoneParams;
            toAmino(message: _236.MsgUpdateHostZoneParams): _236.MsgUpdateHostZoneParamsAmino;
            fromAminoMsg(object: _236.MsgUpdateHostZoneParamsAminoMsg): _236.MsgUpdateHostZoneParams;
            toAminoMsg(message: _236.MsgUpdateHostZoneParams): _236.MsgUpdateHostZoneParamsAminoMsg;
            fromProtoMsg(message: _236.MsgUpdateHostZoneParamsProtoMsg): _236.MsgUpdateHostZoneParams;
            toProto(message: _236.MsgUpdateHostZoneParams): Uint8Array;
            toProtoMsg(message: _236.MsgUpdateHostZoneParams): _236.MsgUpdateHostZoneParamsProtoMsg;
        };
        MsgUpdateHostZoneParamsResponse: {
            typeUrl: string;
            encode(_: _236.MsgUpdateHostZoneParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.MsgUpdateHostZoneParamsResponse;
            fromPartial(_: Partial<_236.MsgUpdateHostZoneParamsResponse>): _236.MsgUpdateHostZoneParamsResponse;
            fromAmino(_: _236.MsgUpdateHostZoneParamsResponseAmino): _236.MsgUpdateHostZoneParamsResponse;
            toAmino(_: _236.MsgUpdateHostZoneParamsResponse): _236.MsgUpdateHostZoneParamsResponseAmino;
            fromAminoMsg(object: _236.MsgUpdateHostZoneParamsResponseAminoMsg): _236.MsgUpdateHostZoneParamsResponse;
            fromProtoMsg(message: _236.MsgUpdateHostZoneParamsResponseProtoMsg): _236.MsgUpdateHostZoneParamsResponse;
            toProto(message: _236.MsgUpdateHostZoneParamsResponse): Uint8Array;
            toProtoMsg(message: _236.MsgUpdateHostZoneParamsResponse): _236.MsgUpdateHostZoneParamsResponseProtoMsg;
        };
        TradeConfig: {
            typeUrl: string;
            encode(message: _235.TradeConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.TradeConfig;
            fromPartial(object: Partial<_235.TradeConfig>): _235.TradeConfig;
            fromAmino(object: _235.TradeConfigAmino): _235.TradeConfig;
            toAmino(message: _235.TradeConfig): _235.TradeConfigAmino;
            fromAminoMsg(object: _235.TradeConfigAminoMsg): _235.TradeConfig;
            fromProtoMsg(message: _235.TradeConfigProtoMsg): _235.TradeConfig;
            toProto(message: _235.TradeConfig): Uint8Array;
            toProtoMsg(message: _235.TradeConfig): _235.TradeConfigProtoMsg;
        };
        TradeRoute: {
            typeUrl: string;
            encode(message: _235.TradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.TradeRoute;
            fromPartial(object: Partial<_235.TradeRoute>): _235.TradeRoute;
            fromAmino(object: _235.TradeRouteAmino): _235.TradeRoute;
            toAmino(message: _235.TradeRoute): _235.TradeRouteAmino;
            fromAminoMsg(object: _235.TradeRouteAminoMsg): _235.TradeRoute;
            fromProtoMsg(message: _235.TradeRouteProtoMsg): _235.TradeRoute;
            toProto(message: _235.TradeRoute): Uint8Array;
            toProtoMsg(message: _235.TradeRoute): _235.TradeRouteProtoMsg;
        };
        QueryInterchainAccountFromAddressRequest: {
            typeUrl: string;
            encode(message: _234.QueryInterchainAccountFromAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.QueryInterchainAccountFromAddressRequest;
            fromPartial(object: Partial<_234.QueryInterchainAccountFromAddressRequest>): _234.QueryInterchainAccountFromAddressRequest;
            fromAmino(object: _234.QueryInterchainAccountFromAddressRequestAmino): _234.QueryInterchainAccountFromAddressRequest;
            toAmino(message: _234.QueryInterchainAccountFromAddressRequest): _234.QueryInterchainAccountFromAddressRequestAmino;
            fromAminoMsg(object: _234.QueryInterchainAccountFromAddressRequestAminoMsg): _234.QueryInterchainAccountFromAddressRequest;
            fromProtoMsg(message: _234.QueryInterchainAccountFromAddressRequestProtoMsg): _234.QueryInterchainAccountFromAddressRequest;
            toProto(message: _234.QueryInterchainAccountFromAddressRequest): Uint8Array;
            toProtoMsg(message: _234.QueryInterchainAccountFromAddressRequest): _234.QueryInterchainAccountFromAddressRequestProtoMsg;
        };
        QueryInterchainAccountFromAddressResponse: {
            typeUrl: string;
            encode(message: _234.QueryInterchainAccountFromAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.QueryInterchainAccountFromAddressResponse;
            fromPartial(object: Partial<_234.QueryInterchainAccountFromAddressResponse>): _234.QueryInterchainAccountFromAddressResponse;
            fromAmino(object: _234.QueryInterchainAccountFromAddressResponseAmino): _234.QueryInterchainAccountFromAddressResponse;
            toAmino(message: _234.QueryInterchainAccountFromAddressResponse): _234.QueryInterchainAccountFromAddressResponseAmino;
            fromAminoMsg(object: _234.QueryInterchainAccountFromAddressResponseAminoMsg): _234.QueryInterchainAccountFromAddressResponse;
            fromProtoMsg(message: _234.QueryInterchainAccountFromAddressResponseProtoMsg): _234.QueryInterchainAccountFromAddressResponse;
            toProto(message: _234.QueryInterchainAccountFromAddressResponse): Uint8Array;
            toProtoMsg(message: _234.QueryInterchainAccountFromAddressResponse): _234.QueryInterchainAccountFromAddressResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _234.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.QueryParamsRequest;
            fromPartial(_: Partial<_234.QueryParamsRequest>): _234.QueryParamsRequest;
            fromAmino(_: _234.QueryParamsRequestAmino): _234.QueryParamsRequest;
            toAmino(_: _234.QueryParamsRequest): _234.QueryParamsRequestAmino;
            fromAminoMsg(object: _234.QueryParamsRequestAminoMsg): _234.QueryParamsRequest;
            fromProtoMsg(message: _234.QueryParamsRequestProtoMsg): _234.QueryParamsRequest;
            toProto(message: _234.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _234.QueryParamsRequest): _234.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _234.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.QueryParamsResponse;
            fromPartial(object: Partial<_234.QueryParamsResponse>): _234.QueryParamsResponse;
            fromAmino(object: _234.QueryParamsResponseAmino): _234.QueryParamsResponse;
            toAmino(message: _234.QueryParamsResponse): _234.QueryParamsResponseAmino;
            fromAminoMsg(object: _234.QueryParamsResponseAminoMsg): _234.QueryParamsResponse;
            fromProtoMsg(message: _234.QueryParamsResponseProtoMsg): _234.QueryParamsResponse;
            toProto(message: _234.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _234.QueryParamsResponse): _234.QueryParamsResponseProtoMsg;
        };
        QueryGetValidatorsRequest: {
            typeUrl: string;
            encode(message: _234.QueryGetValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.QueryGetValidatorsRequest;
            fromPartial(object: Partial<_234.QueryGetValidatorsRequest>): _234.QueryGetValidatorsRequest;
            fromAmino(object: _234.QueryGetValidatorsRequestAmino): _234.QueryGetValidatorsRequest;
            toAmino(message: _234.QueryGetValidatorsRequest): _234.QueryGetValidatorsRequestAmino;
            fromAminoMsg(object: _234.QueryGetValidatorsRequestAminoMsg): _234.QueryGetValidatorsRequest;
            fromProtoMsg(message: _234.QueryGetValidatorsRequestProtoMsg): _234.QueryGetValidatorsRequest;
            toProto(message: _234.QueryGetValidatorsRequest): Uint8Array;
            toProtoMsg(message: _234.QueryGetValidatorsRequest): _234.QueryGetValidatorsRequestProtoMsg;
        };
        QueryGetValidatorsResponse: {
            typeUrl: string;
            encode(message: _234.QueryGetValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.QueryGetValidatorsResponse;
            fromPartial(object: Partial<_234.QueryGetValidatorsResponse>): _234.QueryGetValidatorsResponse;
            fromAmino(object: _234.QueryGetValidatorsResponseAmino): _234.QueryGetValidatorsResponse;
            toAmino(message: _234.QueryGetValidatorsResponse): _234.QueryGetValidatorsResponseAmino;
            fromAminoMsg(object: _234.QueryGetValidatorsResponseAminoMsg): _234.QueryGetValidatorsResponse;
            fromProtoMsg(message: _234.QueryGetValidatorsResponseProtoMsg): _234.QueryGetValidatorsResponse;
            toProto(message: _234.QueryGetValidatorsResponse): Uint8Array;
            toProtoMsg(message: _234.QueryGetValidatorsResponse): _234.QueryGetValidatorsResponseProtoMsg;
        };
        QueryGetHostZoneRequest: {
            typeUrl: string;
            encode(message: _234.QueryGetHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.QueryGetHostZoneRequest;
            fromPartial(object: Partial<_234.QueryGetHostZoneRequest>): _234.QueryGetHostZoneRequest;
            fromAmino(object: _234.QueryGetHostZoneRequestAmino): _234.QueryGetHostZoneRequest;
            toAmino(message: _234.QueryGetHostZoneRequest): _234.QueryGetHostZoneRequestAmino;
            fromAminoMsg(object: _234.QueryGetHostZoneRequestAminoMsg): _234.QueryGetHostZoneRequest;
            fromProtoMsg(message: _234.QueryGetHostZoneRequestProtoMsg): _234.QueryGetHostZoneRequest;
            toProto(message: _234.QueryGetHostZoneRequest): Uint8Array;
            toProtoMsg(message: _234.QueryGetHostZoneRequest): _234.QueryGetHostZoneRequestProtoMsg;
        };
        QueryGetHostZoneResponse: {
            typeUrl: string;
            encode(message: _234.QueryGetHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.QueryGetHostZoneResponse;
            fromPartial(object: Partial<_234.QueryGetHostZoneResponse>): _234.QueryGetHostZoneResponse;
            fromAmino(object: _234.QueryGetHostZoneResponseAmino): _234.QueryGetHostZoneResponse;
            toAmino(message: _234.QueryGetHostZoneResponse): _234.QueryGetHostZoneResponseAmino;
            fromAminoMsg(object: _234.QueryGetHostZoneResponseAminoMsg): _234.QueryGetHostZoneResponse;
            fromProtoMsg(message: _234.QueryGetHostZoneResponseProtoMsg): _234.QueryGetHostZoneResponse;
            toProto(message: _234.QueryGetHostZoneResponse): Uint8Array;
            toProtoMsg(message: _234.QueryGetHostZoneResponse): _234.QueryGetHostZoneResponseProtoMsg;
        };
        QueryAllHostZoneRequest: {
            typeUrl: string;
            encode(message: _234.QueryAllHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.QueryAllHostZoneRequest;
            fromPartial(object: Partial<_234.QueryAllHostZoneRequest>): _234.QueryAllHostZoneRequest;
            fromAmino(object: _234.QueryAllHostZoneRequestAmino): _234.QueryAllHostZoneRequest;
            toAmino(message: _234.QueryAllHostZoneRequest): _234.QueryAllHostZoneRequestAmino;
            fromAminoMsg(object: _234.QueryAllHostZoneRequestAminoMsg): _234.QueryAllHostZoneRequest;
            fromProtoMsg(message: _234.QueryAllHostZoneRequestProtoMsg): _234.QueryAllHostZoneRequest;
            toProto(message: _234.QueryAllHostZoneRequest): Uint8Array;
            toProtoMsg(message: _234.QueryAllHostZoneRequest): _234.QueryAllHostZoneRequestProtoMsg;
        };
        QueryAllHostZoneResponse: {
            typeUrl: string;
            encode(message: _234.QueryAllHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.QueryAllHostZoneResponse;
            fromPartial(object: Partial<_234.QueryAllHostZoneResponse>): _234.QueryAllHostZoneResponse;
            fromAmino(object: _234.QueryAllHostZoneResponseAmino): _234.QueryAllHostZoneResponse;
            toAmino(message: _234.QueryAllHostZoneResponse): _234.QueryAllHostZoneResponseAmino;
            fromAminoMsg(object: _234.QueryAllHostZoneResponseAminoMsg): _234.QueryAllHostZoneResponse;
            fromProtoMsg(message: _234.QueryAllHostZoneResponseProtoMsg): _234.QueryAllHostZoneResponse;
            toProto(message: _234.QueryAllHostZoneResponse): Uint8Array;
            toProtoMsg(message: _234.QueryAllHostZoneResponse): _234.QueryAllHostZoneResponseProtoMsg;
        };
        QueryModuleAddressRequest: {
            typeUrl: string;
            encode(message: _234.QueryModuleAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.QueryModuleAddressRequest;
            fromPartial(object: Partial<_234.QueryModuleAddressRequest>): _234.QueryModuleAddressRequest;
            fromAmino(object: _234.QueryModuleAddressRequestAmino): _234.QueryModuleAddressRequest;
            toAmino(message: _234.QueryModuleAddressRequest): _234.QueryModuleAddressRequestAmino;
            fromAminoMsg(object: _234.QueryModuleAddressRequestAminoMsg): _234.QueryModuleAddressRequest;
            fromProtoMsg(message: _234.QueryModuleAddressRequestProtoMsg): _234.QueryModuleAddressRequest;
            toProto(message: _234.QueryModuleAddressRequest): Uint8Array;
            toProtoMsg(message: _234.QueryModuleAddressRequest): _234.QueryModuleAddressRequestProtoMsg;
        };
        QueryModuleAddressResponse: {
            typeUrl: string;
            encode(message: _234.QueryModuleAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.QueryModuleAddressResponse;
            fromPartial(object: Partial<_234.QueryModuleAddressResponse>): _234.QueryModuleAddressResponse;
            fromAmino(object: _234.QueryModuleAddressResponseAmino): _234.QueryModuleAddressResponse;
            toAmino(message: _234.QueryModuleAddressResponse): _234.QueryModuleAddressResponseAmino;
            fromAminoMsg(object: _234.QueryModuleAddressResponseAminoMsg): _234.QueryModuleAddressResponse;
            fromProtoMsg(message: _234.QueryModuleAddressResponseProtoMsg): _234.QueryModuleAddressResponse;
            toProto(message: _234.QueryModuleAddressResponse): Uint8Array;
            toProtoMsg(message: _234.QueryModuleAddressResponse): _234.QueryModuleAddressResponseProtoMsg;
        };
        QueryGetEpochTrackerRequest: {
            typeUrl: string;
            encode(message: _234.QueryGetEpochTrackerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.QueryGetEpochTrackerRequest;
            fromPartial(object: Partial<_234.QueryGetEpochTrackerRequest>): _234.QueryGetEpochTrackerRequest;
            fromAmino(object: _234.QueryGetEpochTrackerRequestAmino): _234.QueryGetEpochTrackerRequest;
            toAmino(message: _234.QueryGetEpochTrackerRequest): _234.QueryGetEpochTrackerRequestAmino;
            fromAminoMsg(object: _234.QueryGetEpochTrackerRequestAminoMsg): _234.QueryGetEpochTrackerRequest;
            fromProtoMsg(message: _234.QueryGetEpochTrackerRequestProtoMsg): _234.QueryGetEpochTrackerRequest;
            toProto(message: _234.QueryGetEpochTrackerRequest): Uint8Array;
            toProtoMsg(message: _234.QueryGetEpochTrackerRequest): _234.QueryGetEpochTrackerRequestProtoMsg;
        };
        QueryGetEpochTrackerResponse: {
            typeUrl: string;
            encode(message: _234.QueryGetEpochTrackerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.QueryGetEpochTrackerResponse;
            fromPartial(object: Partial<_234.QueryGetEpochTrackerResponse>): _234.QueryGetEpochTrackerResponse;
            fromAmino(object: _234.QueryGetEpochTrackerResponseAmino): _234.QueryGetEpochTrackerResponse;
            toAmino(message: _234.QueryGetEpochTrackerResponse): _234.QueryGetEpochTrackerResponseAmino;
            fromAminoMsg(object: _234.QueryGetEpochTrackerResponseAminoMsg): _234.QueryGetEpochTrackerResponse;
            fromProtoMsg(message: _234.QueryGetEpochTrackerResponseProtoMsg): _234.QueryGetEpochTrackerResponse;
            toProto(message: _234.QueryGetEpochTrackerResponse): Uint8Array;
            toProtoMsg(message: _234.QueryGetEpochTrackerResponse): _234.QueryGetEpochTrackerResponseProtoMsg;
        };
        QueryAllEpochTrackerRequest: {
            typeUrl: string;
            encode(_: _234.QueryAllEpochTrackerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.QueryAllEpochTrackerRequest;
            fromPartial(_: Partial<_234.QueryAllEpochTrackerRequest>): _234.QueryAllEpochTrackerRequest;
            fromAmino(_: _234.QueryAllEpochTrackerRequestAmino): _234.QueryAllEpochTrackerRequest;
            toAmino(_: _234.QueryAllEpochTrackerRequest): _234.QueryAllEpochTrackerRequestAmino;
            fromAminoMsg(object: _234.QueryAllEpochTrackerRequestAminoMsg): _234.QueryAllEpochTrackerRequest;
            fromProtoMsg(message: _234.QueryAllEpochTrackerRequestProtoMsg): _234.QueryAllEpochTrackerRequest;
            toProto(message: _234.QueryAllEpochTrackerRequest): Uint8Array;
            toProtoMsg(message: _234.QueryAllEpochTrackerRequest): _234.QueryAllEpochTrackerRequestProtoMsg;
        };
        QueryAllEpochTrackerResponse: {
            typeUrl: string;
            encode(message: _234.QueryAllEpochTrackerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.QueryAllEpochTrackerResponse;
            fromPartial(object: Partial<_234.QueryAllEpochTrackerResponse>): _234.QueryAllEpochTrackerResponse;
            fromAmino(object: _234.QueryAllEpochTrackerResponseAmino): _234.QueryAllEpochTrackerResponse;
            toAmino(message: _234.QueryAllEpochTrackerResponse): _234.QueryAllEpochTrackerResponseAmino;
            fromAminoMsg(object: _234.QueryAllEpochTrackerResponseAminoMsg): _234.QueryAllEpochTrackerResponse;
            fromProtoMsg(message: _234.QueryAllEpochTrackerResponseProtoMsg): _234.QueryAllEpochTrackerResponse;
            toProto(message: _234.QueryAllEpochTrackerResponse): Uint8Array;
            toProtoMsg(message: _234.QueryAllEpochTrackerResponse): _234.QueryAllEpochTrackerResponseProtoMsg;
        };
        QueryGetNextPacketSequenceRequest: {
            typeUrl: string;
            encode(message: _234.QueryGetNextPacketSequenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.QueryGetNextPacketSequenceRequest;
            fromPartial(object: Partial<_234.QueryGetNextPacketSequenceRequest>): _234.QueryGetNextPacketSequenceRequest;
            fromAmino(object: _234.QueryGetNextPacketSequenceRequestAmino): _234.QueryGetNextPacketSequenceRequest;
            toAmino(message: _234.QueryGetNextPacketSequenceRequest): _234.QueryGetNextPacketSequenceRequestAmino;
            fromAminoMsg(object: _234.QueryGetNextPacketSequenceRequestAminoMsg): _234.QueryGetNextPacketSequenceRequest;
            fromProtoMsg(message: _234.QueryGetNextPacketSequenceRequestProtoMsg): _234.QueryGetNextPacketSequenceRequest;
            toProto(message: _234.QueryGetNextPacketSequenceRequest): Uint8Array;
            toProtoMsg(message: _234.QueryGetNextPacketSequenceRequest): _234.QueryGetNextPacketSequenceRequestProtoMsg;
        };
        QueryGetNextPacketSequenceResponse: {
            typeUrl: string;
            encode(message: _234.QueryGetNextPacketSequenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.QueryGetNextPacketSequenceResponse;
            fromPartial(object: Partial<_234.QueryGetNextPacketSequenceResponse>): _234.QueryGetNextPacketSequenceResponse;
            fromAmino(object: _234.QueryGetNextPacketSequenceResponseAmino): _234.QueryGetNextPacketSequenceResponse;
            toAmino(message: _234.QueryGetNextPacketSequenceResponse): _234.QueryGetNextPacketSequenceResponseAmino;
            fromAminoMsg(object: _234.QueryGetNextPacketSequenceResponseAminoMsg): _234.QueryGetNextPacketSequenceResponse;
            fromProtoMsg(message: _234.QueryGetNextPacketSequenceResponseProtoMsg): _234.QueryGetNextPacketSequenceResponse;
            toProto(message: _234.QueryGetNextPacketSequenceResponse): Uint8Array;
            toProtoMsg(message: _234.QueryGetNextPacketSequenceResponse): _234.QueryGetNextPacketSequenceResponseProtoMsg;
        };
        QueryAddressUnbondings: {
            typeUrl: string;
            encode(message: _234.QueryAddressUnbondings, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.QueryAddressUnbondings;
            fromPartial(object: Partial<_234.QueryAddressUnbondings>): _234.QueryAddressUnbondings;
            fromAmino(object: _234.QueryAddressUnbondingsAmino): _234.QueryAddressUnbondings;
            toAmino(message: _234.QueryAddressUnbondings): _234.QueryAddressUnbondingsAmino;
            fromAminoMsg(object: _234.QueryAddressUnbondingsAminoMsg): _234.QueryAddressUnbondings;
            fromProtoMsg(message: _234.QueryAddressUnbondingsProtoMsg): _234.QueryAddressUnbondings;
            toProto(message: _234.QueryAddressUnbondings): Uint8Array;
            toProtoMsg(message: _234.QueryAddressUnbondings): _234.QueryAddressUnbondingsProtoMsg;
        };
        QueryAddressUnbondingsResponse: {
            typeUrl: string;
            encode(message: _234.QueryAddressUnbondingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.QueryAddressUnbondingsResponse;
            fromPartial(object: Partial<_234.QueryAddressUnbondingsResponse>): _234.QueryAddressUnbondingsResponse;
            fromAmino(object: _234.QueryAddressUnbondingsResponseAmino): _234.QueryAddressUnbondingsResponse;
            toAmino(message: _234.QueryAddressUnbondingsResponse): _234.QueryAddressUnbondingsResponseAmino;
            fromAminoMsg(object: _234.QueryAddressUnbondingsResponseAminoMsg): _234.QueryAddressUnbondingsResponse;
            fromProtoMsg(message: _234.QueryAddressUnbondingsResponseProtoMsg): _234.QueryAddressUnbondingsResponse;
            toProto(message: _234.QueryAddressUnbondingsResponse): Uint8Array;
            toProtoMsg(message: _234.QueryAddressUnbondingsResponse): _234.QueryAddressUnbondingsResponseProtoMsg;
        };
        QueryAllTradeRoutes: {
            typeUrl: string;
            encode(_: _234.QueryAllTradeRoutes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.QueryAllTradeRoutes;
            fromPartial(_: Partial<_234.QueryAllTradeRoutes>): _234.QueryAllTradeRoutes;
            fromAmino(_: _234.QueryAllTradeRoutesAmino): _234.QueryAllTradeRoutes;
            toAmino(_: _234.QueryAllTradeRoutes): _234.QueryAllTradeRoutesAmino;
            fromAminoMsg(object: _234.QueryAllTradeRoutesAminoMsg): _234.QueryAllTradeRoutes;
            fromProtoMsg(message: _234.QueryAllTradeRoutesProtoMsg): _234.QueryAllTradeRoutes;
            toProto(message: _234.QueryAllTradeRoutes): Uint8Array;
            toProtoMsg(message: _234.QueryAllTradeRoutes): _234.QueryAllTradeRoutesProtoMsg;
        };
        QueryAllTradeRoutesResponse: {
            typeUrl: string;
            encode(message: _234.QueryAllTradeRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.QueryAllTradeRoutesResponse;
            fromPartial(object: Partial<_234.QueryAllTradeRoutesResponse>): _234.QueryAllTradeRoutesResponse;
            fromAmino(object: _234.QueryAllTradeRoutesResponseAmino): _234.QueryAllTradeRoutesResponse;
            toAmino(message: _234.QueryAllTradeRoutesResponse): _234.QueryAllTradeRoutesResponseAmino;
            fromAminoMsg(object: _234.QueryAllTradeRoutesResponseAminoMsg): _234.QueryAllTradeRoutesResponse;
            fromProtoMsg(message: _234.QueryAllTradeRoutesResponseProtoMsg): _234.QueryAllTradeRoutesResponse;
            toProto(message: _234.QueryAllTradeRoutesResponse): Uint8Array;
            toProtoMsg(message: _234.QueryAllTradeRoutesResponse): _234.QueryAllTradeRoutesResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _233.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.Params;
            fromPartial(object: Partial<_233.Params>): _233.Params;
            fromAmino(object: _233.ParamsAmino): _233.Params;
            toAmino(message: _233.Params): _233.ParamsAmino;
            fromAminoMsg(object: _233.ParamsAminoMsg): _233.Params;
            fromProtoMsg(message: _233.ParamsProtoMsg): _233.Params;
            toProto(message: _233.Params): Uint8Array;
            toProtoMsg(message: _233.Params): _233.ParamsProtoMsg;
        };
        StakeibcPacketData: {
            typeUrl: string;
            encode(message: _232.StakeibcPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.StakeibcPacketData;
            fromPartial(object: Partial<_232.StakeibcPacketData>): _232.StakeibcPacketData;
            fromAmino(object: _232.StakeibcPacketDataAmino): _232.StakeibcPacketData;
            toAmino(message: _232.StakeibcPacketData): _232.StakeibcPacketDataAmino;
            fromAminoMsg(object: _232.StakeibcPacketDataAminoMsg): _232.StakeibcPacketData;
            fromProtoMsg(message: _232.StakeibcPacketDataProtoMsg): _232.StakeibcPacketData;
            toProto(message: _232.StakeibcPacketData): Uint8Array;
            toProtoMsg(message: _232.StakeibcPacketData): _232.StakeibcPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _232.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.NoData;
            fromPartial(_: Partial<_232.NoData>): _232.NoData;
            fromAmino(_: _232.NoDataAmino): _232.NoData;
            toAmino(_: _232.NoData): _232.NoDataAmino;
            fromAminoMsg(object: _232.NoDataAminoMsg): _232.NoData;
            fromProtoMsg(message: _232.NoDataProtoMsg): _232.NoData;
            toProto(message: _232.NoData): Uint8Array;
            toProtoMsg(message: _232.NoData): _232.NoDataProtoMsg;
        };
        iCAAccountTypeFromJSON(object: any): _231.ICAAccountType;
        iCAAccountTypeToJSON(object: _231.ICAAccountType): string;
        ICAAccountType: typeof _231.ICAAccountType;
        ICAAccountTypeSDKType: typeof _231.ICAAccountType;
        ICAAccountTypeAmino: typeof _231.ICAAccountType;
        ICAAccount: {
            typeUrl: string;
            encode(message: _231.ICAAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.ICAAccount;
            fromPartial(object: Partial<_231.ICAAccount>): _231.ICAAccount;
            fromAmino(object: _231.ICAAccountAmino): _231.ICAAccount;
            toAmino(message: _231.ICAAccount): _231.ICAAccountAmino;
            fromAminoMsg(object: _231.ICAAccountAminoMsg): _231.ICAAccount;
            fromProtoMsg(message: _231.ICAAccountProtoMsg): _231.ICAAccount;
            toProto(message: _231.ICAAccount): Uint8Array;
            toProtoMsg(message: _231.ICAAccount): _231.ICAAccountProtoMsg;
        };
        CommunityPoolRebate: {
            typeUrl: string;
            encode(message: _230.CommunityPoolRebate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.CommunityPoolRebate;
            fromPartial(object: Partial<_230.CommunityPoolRebate>): _230.CommunityPoolRebate;
            fromAmino(object: _230.CommunityPoolRebateAmino): _230.CommunityPoolRebate;
            toAmino(message: _230.CommunityPoolRebate): _230.CommunityPoolRebateAmino;
            fromAminoMsg(object: _230.CommunityPoolRebateAminoMsg): _230.CommunityPoolRebate;
            fromProtoMsg(message: _230.CommunityPoolRebateProtoMsg): _230.CommunityPoolRebate;
            toProto(message: _230.CommunityPoolRebate): Uint8Array;
            toProtoMsg(message: _230.CommunityPoolRebate): _230.CommunityPoolRebateProtoMsg;
        };
        HostZone: {
            typeUrl: string;
            encode(message: _230.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.HostZone;
            fromPartial(object: Partial<_230.HostZone>): _230.HostZone;
            fromAmino(object: _230.HostZoneAmino): _230.HostZone;
            toAmino(message: _230.HostZone): _230.HostZoneAmino;
            fromAminoMsg(object: _230.HostZoneAminoMsg): _230.HostZone;
            fromProtoMsg(message: _230.HostZoneProtoMsg): _230.HostZone;
            toProto(message: _230.HostZone): Uint8Array;
            toProtoMsg(message: _230.HostZone): _230.HostZoneProtoMsg;
        };
        AddValidatorsProposal: {
            typeUrl: string;
            encode(message: _229.AddValidatorsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.AddValidatorsProposal;
            fromPartial(object: Partial<_229.AddValidatorsProposal>): _229.AddValidatorsProposal;
            fromAmino(object: _229.AddValidatorsProposalAmino): _229.AddValidatorsProposal;
            toAmino(message: _229.AddValidatorsProposal): _229.AddValidatorsProposalAmino;
            fromAminoMsg(object: _229.AddValidatorsProposalAminoMsg): _229.AddValidatorsProposal;
            fromProtoMsg(message: _229.AddValidatorsProposalProtoMsg): _229.AddValidatorsProposal;
            toProto(message: _229.AddValidatorsProposal): Uint8Array;
            toProtoMsg(message: _229.AddValidatorsProposal): _229.AddValidatorsProposalProtoMsg;
        };
        ToggleLSMProposal: {
            typeUrl: string;
            encode(message: _229.ToggleLSMProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.ToggleLSMProposal;
            fromPartial(object: Partial<_229.ToggleLSMProposal>): _229.ToggleLSMProposal;
            fromAmino(object: _229.ToggleLSMProposalAmino): _229.ToggleLSMProposal;
            toAmino(message: _229.ToggleLSMProposal): _229.ToggleLSMProposalAmino;
            fromAminoMsg(object: _229.ToggleLSMProposalAminoMsg): _229.ToggleLSMProposal;
            fromProtoMsg(message: _229.ToggleLSMProposalProtoMsg): _229.ToggleLSMProposal;
            toProto(message: _229.ToggleLSMProposal): Uint8Array;
            toProtoMsg(message: _229.ToggleLSMProposal): _229.ToggleLSMProposalProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _228.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.GenesisState;
            fromPartial(object: Partial<_228.GenesisState>): _228.GenesisState;
            fromAmino(object: _228.GenesisStateAmino): _228.GenesisState;
            toAmino(message: _228.GenesisState): _228.GenesisStateAmino;
            fromAminoMsg(object: _228.GenesisStateAminoMsg): _228.GenesisState;
            fromProtoMsg(message: _228.GenesisStateProtoMsg): _228.GenesisState;
            toProto(message: _228.GenesisState): Uint8Array;
            toProtoMsg(message: _228.GenesisState): _228.GenesisStateProtoMsg;
        };
        EpochTracker: {
            typeUrl: string;
            encode(message: _227.EpochTracker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.EpochTracker;
            fromPartial(object: Partial<_227.EpochTracker>): _227.EpochTracker;
            fromAmino(object: _227.EpochTrackerAmino): _227.EpochTracker;
            toAmino(message: _227.EpochTracker): _227.EpochTrackerAmino;
            fromAminoMsg(object: _227.EpochTrackerAminoMsg): _227.EpochTracker;
            fromProtoMsg(message: _227.EpochTrackerProtoMsg): _227.EpochTracker;
            toProto(message: _227.EpochTracker): Uint8Array;
            toProtoMsg(message: _227.EpochTracker): _227.EpochTrackerProtoMsg;
        };
        SplitDelegation: {
            typeUrl: string;
            encode(message: _226.SplitDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.SplitDelegation;
            fromPartial(object: Partial<_226.SplitDelegation>): _226.SplitDelegation;
            fromAmino(object: _226.SplitDelegationAmino): _226.SplitDelegation;
            toAmino(message: _226.SplitDelegation): _226.SplitDelegationAmino;
            fromAminoMsg(object: _226.SplitDelegationAminoMsg): _226.SplitDelegation;
            fromProtoMsg(message: _226.SplitDelegationProtoMsg): _226.SplitDelegation;
            toProto(message: _226.SplitDelegation): Uint8Array;
            toProtoMsg(message: _226.SplitDelegation): _226.SplitDelegationProtoMsg;
        };
        SplitUndelegation: {
            typeUrl: string;
            encode(message: _226.SplitUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.SplitUndelegation;
            fromPartial(object: Partial<_226.SplitUndelegation>): _226.SplitUndelegation;
            fromAmino(object: _226.SplitUndelegationAmino): _226.SplitUndelegation;
            toAmino(message: _226.SplitUndelegation): _226.SplitUndelegationAmino;
            fromAminoMsg(object: _226.SplitUndelegationAminoMsg): _226.SplitUndelegation;
            fromProtoMsg(message: _226.SplitUndelegationProtoMsg): _226.SplitUndelegation;
            toProto(message: _226.SplitUndelegation): Uint8Array;
            toProtoMsg(message: _226.SplitUndelegation): _226.SplitUndelegationProtoMsg;
        };
        DelegateCallback: {
            typeUrl: string;
            encode(message: _226.DelegateCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.DelegateCallback;
            fromPartial(object: Partial<_226.DelegateCallback>): _226.DelegateCallback;
            fromAmino(object: _226.DelegateCallbackAmino): _226.DelegateCallback;
            toAmino(message: _226.DelegateCallback): _226.DelegateCallbackAmino;
            fromAminoMsg(object: _226.DelegateCallbackAminoMsg): _226.DelegateCallback;
            fromProtoMsg(message: _226.DelegateCallbackProtoMsg): _226.DelegateCallback;
            toProto(message: _226.DelegateCallback): Uint8Array;
            toProtoMsg(message: _226.DelegateCallback): _226.DelegateCallbackProtoMsg;
        };
        ClaimCallback: {
            typeUrl: string;
            encode(message: _226.ClaimCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.ClaimCallback;
            fromPartial(object: Partial<_226.ClaimCallback>): _226.ClaimCallback;
            fromAmino(object: _226.ClaimCallbackAmino): _226.ClaimCallback;
            toAmino(message: _226.ClaimCallback): _226.ClaimCallbackAmino;
            fromAminoMsg(object: _226.ClaimCallbackAminoMsg): _226.ClaimCallback;
            fromProtoMsg(message: _226.ClaimCallbackProtoMsg): _226.ClaimCallback;
            toProto(message: _226.ClaimCallback): Uint8Array;
            toProtoMsg(message: _226.ClaimCallback): _226.ClaimCallbackProtoMsg;
        };
        ReinvestCallback: {
            typeUrl: string;
            encode(message: _226.ReinvestCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.ReinvestCallback;
            fromPartial(object: Partial<_226.ReinvestCallback>): _226.ReinvestCallback;
            fromAmino(object: _226.ReinvestCallbackAmino): _226.ReinvestCallback;
            toAmino(message: _226.ReinvestCallback): _226.ReinvestCallbackAmino;
            fromAminoMsg(object: _226.ReinvestCallbackAminoMsg): _226.ReinvestCallback;
            fromProtoMsg(message: _226.ReinvestCallbackProtoMsg): _226.ReinvestCallback;
            toProto(message: _226.ReinvestCallback): Uint8Array;
            toProtoMsg(message: _226.ReinvestCallback): _226.ReinvestCallbackProtoMsg;
        };
        UndelegateCallback: {
            typeUrl: string;
            encode(message: _226.UndelegateCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.UndelegateCallback;
            fromPartial(object: Partial<_226.UndelegateCallback>): _226.UndelegateCallback;
            fromAmino(object: _226.UndelegateCallbackAmino): _226.UndelegateCallback;
            toAmino(message: _226.UndelegateCallback): _226.UndelegateCallbackAmino;
            fromAminoMsg(object: _226.UndelegateCallbackAminoMsg): _226.UndelegateCallback;
            fromProtoMsg(message: _226.UndelegateCallbackProtoMsg): _226.UndelegateCallback;
            toProto(message: _226.UndelegateCallback): Uint8Array;
            toProtoMsg(message: _226.UndelegateCallback): _226.UndelegateCallbackProtoMsg;
        };
        RedemptionCallback: {
            typeUrl: string;
            encode(message: _226.RedemptionCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.RedemptionCallback;
            fromPartial(object: Partial<_226.RedemptionCallback>): _226.RedemptionCallback;
            fromAmino(object: _226.RedemptionCallbackAmino): _226.RedemptionCallback;
            toAmino(message: _226.RedemptionCallback): _226.RedemptionCallbackAmino;
            fromAminoMsg(object: _226.RedemptionCallbackAminoMsg): _226.RedemptionCallback;
            fromProtoMsg(message: _226.RedemptionCallbackProtoMsg): _226.RedemptionCallback;
            toProto(message: _226.RedemptionCallback): Uint8Array;
            toProtoMsg(message: _226.RedemptionCallback): _226.RedemptionCallbackProtoMsg;
        };
        Rebalancing: {
            typeUrl: string;
            encode(message: _226.Rebalancing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.Rebalancing;
            fromPartial(object: Partial<_226.Rebalancing>): _226.Rebalancing;
            fromAmino(object: _226.RebalancingAmino): _226.Rebalancing;
            toAmino(message: _226.Rebalancing): _226.RebalancingAmino;
            fromAminoMsg(object: _226.RebalancingAminoMsg): _226.Rebalancing;
            fromProtoMsg(message: _226.RebalancingProtoMsg): _226.Rebalancing;
            toProto(message: _226.Rebalancing): Uint8Array;
            toProtoMsg(message: _226.Rebalancing): _226.RebalancingProtoMsg;
        };
        RebalanceCallback: {
            typeUrl: string;
            encode(message: _226.RebalanceCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.RebalanceCallback;
            fromPartial(object: Partial<_226.RebalanceCallback>): _226.RebalanceCallback;
            fromAmino(object: _226.RebalanceCallbackAmino): _226.RebalanceCallback;
            toAmino(message: _226.RebalanceCallback): _226.RebalanceCallbackAmino;
            fromAminoMsg(object: _226.RebalanceCallbackAminoMsg): _226.RebalanceCallback;
            fromProtoMsg(message: _226.RebalanceCallbackProtoMsg): _226.RebalanceCallback;
            toProto(message: _226.RebalanceCallback): Uint8Array;
            toProtoMsg(message: _226.RebalanceCallback): _226.RebalanceCallbackProtoMsg;
        };
        DetokenizeSharesCallback: {
            typeUrl: string;
            encode(message: _226.DetokenizeSharesCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.DetokenizeSharesCallback;
            fromPartial(object: Partial<_226.DetokenizeSharesCallback>): _226.DetokenizeSharesCallback;
            fromAmino(object: _226.DetokenizeSharesCallbackAmino): _226.DetokenizeSharesCallback;
            toAmino(message: _226.DetokenizeSharesCallback): _226.DetokenizeSharesCallbackAmino;
            fromAminoMsg(object: _226.DetokenizeSharesCallbackAminoMsg): _226.DetokenizeSharesCallback;
            fromProtoMsg(message: _226.DetokenizeSharesCallbackProtoMsg): _226.DetokenizeSharesCallback;
            toProto(message: _226.DetokenizeSharesCallback): Uint8Array;
            toProtoMsg(message: _226.DetokenizeSharesCallback): _226.DetokenizeSharesCallbackProtoMsg;
        };
        LSMLiquidStake: {
            typeUrl: string;
            encode(message: _226.LSMLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.LSMLiquidStake;
            fromPartial(object: Partial<_226.LSMLiquidStake>): _226.LSMLiquidStake;
            fromAmino(object: _226.LSMLiquidStakeAmino): _226.LSMLiquidStake;
            toAmino(message: _226.LSMLiquidStake): _226.LSMLiquidStakeAmino;
            fromAminoMsg(object: _226.LSMLiquidStakeAminoMsg): _226.LSMLiquidStake;
            fromProtoMsg(message: _226.LSMLiquidStakeProtoMsg): _226.LSMLiquidStake;
            toProto(message: _226.LSMLiquidStake): Uint8Array;
            toProtoMsg(message: _226.LSMLiquidStake): _226.LSMLiquidStakeProtoMsg;
        };
        ValidatorSharesToTokensQueryCallback: {
            typeUrl: string;
            encode(message: _226.ValidatorSharesToTokensQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.ValidatorSharesToTokensQueryCallback;
            fromPartial(object: Partial<_226.ValidatorSharesToTokensQueryCallback>): _226.ValidatorSharesToTokensQueryCallback;
            fromAmino(object: _226.ValidatorSharesToTokensQueryCallbackAmino): _226.ValidatorSharesToTokensQueryCallback;
            toAmino(message: _226.ValidatorSharesToTokensQueryCallback): _226.ValidatorSharesToTokensQueryCallbackAmino;
            fromAminoMsg(object: _226.ValidatorSharesToTokensQueryCallbackAminoMsg): _226.ValidatorSharesToTokensQueryCallback;
            fromProtoMsg(message: _226.ValidatorSharesToTokensQueryCallbackProtoMsg): _226.ValidatorSharesToTokensQueryCallback;
            toProto(message: _226.ValidatorSharesToTokensQueryCallback): Uint8Array;
            toProtoMsg(message: _226.ValidatorSharesToTokensQueryCallback): _226.ValidatorSharesToTokensQueryCallbackProtoMsg;
        };
        DelegatorSharesQueryCallback: {
            typeUrl: string;
            encode(message: _226.DelegatorSharesQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.DelegatorSharesQueryCallback;
            fromPartial(object: Partial<_226.DelegatorSharesQueryCallback>): _226.DelegatorSharesQueryCallback;
            fromAmino(object: _226.DelegatorSharesQueryCallbackAmino): _226.DelegatorSharesQueryCallback;
            toAmino(message: _226.DelegatorSharesQueryCallback): _226.DelegatorSharesQueryCallbackAmino;
            fromAminoMsg(object: _226.DelegatorSharesQueryCallbackAminoMsg): _226.DelegatorSharesQueryCallback;
            fromProtoMsg(message: _226.DelegatorSharesQueryCallbackProtoMsg): _226.DelegatorSharesQueryCallback;
            toProto(message: _226.DelegatorSharesQueryCallback): Uint8Array;
            toProtoMsg(message: _226.DelegatorSharesQueryCallback): _226.DelegatorSharesQueryCallbackProtoMsg;
        };
        CommunityPoolBalanceQueryCallback: {
            typeUrl: string;
            encode(message: _226.CommunityPoolBalanceQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.CommunityPoolBalanceQueryCallback;
            fromPartial(object: Partial<_226.CommunityPoolBalanceQueryCallback>): _226.CommunityPoolBalanceQueryCallback;
            fromAmino(object: _226.CommunityPoolBalanceQueryCallbackAmino): _226.CommunityPoolBalanceQueryCallback;
            toAmino(message: _226.CommunityPoolBalanceQueryCallback): _226.CommunityPoolBalanceQueryCallbackAmino;
            fromAminoMsg(object: _226.CommunityPoolBalanceQueryCallbackAminoMsg): _226.CommunityPoolBalanceQueryCallback;
            fromProtoMsg(message: _226.CommunityPoolBalanceQueryCallbackProtoMsg): _226.CommunityPoolBalanceQueryCallback;
            toProto(message: _226.CommunityPoolBalanceQueryCallback): Uint8Array;
            toProtoMsg(message: _226.CommunityPoolBalanceQueryCallback): _226.CommunityPoolBalanceQueryCallbackProtoMsg;
        };
        TradeRouteCallback: {
            typeUrl: string;
            encode(message: _226.TradeRouteCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.TradeRouteCallback;
            fromPartial(object: Partial<_226.TradeRouteCallback>): _226.TradeRouteCallback;
            fromAmino(object: _226.TradeRouteCallbackAmino): _226.TradeRouteCallback;
            toAmino(message: _226.TradeRouteCallback): _226.TradeRouteCallbackAmino;
            fromAminoMsg(object: _226.TradeRouteCallbackAminoMsg): _226.TradeRouteCallback;
            fromProtoMsg(message: _226.TradeRouteCallbackProtoMsg): _226.TradeRouteCallback;
            toProto(message: _226.TradeRouteCallback): Uint8Array;
            toProtoMsg(message: _226.TradeRouteCallback): _226.TradeRouteCallbackProtoMsg;
        };
        AddressUnbonding: {
            typeUrl: string;
            encode(message: _225.AddressUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.AddressUnbonding;
            fromPartial(object: Partial<_225.AddressUnbonding>): _225.AddressUnbonding;
            fromAmino(object: _225.AddressUnbondingAmino): _225.AddressUnbonding;
            toAmino(message: _225.AddressUnbonding): _225.AddressUnbondingAmino;
            fromAminoMsg(object: _225.AddressUnbondingAminoMsg): _225.AddressUnbonding;
            fromProtoMsg(message: _225.AddressUnbondingProtoMsg): _225.AddressUnbonding;
            toProto(message: _225.AddressUnbonding): Uint8Array;
            toProtoMsg(message: _225.AddressUnbonding): _225.AddressUnbondingProtoMsg;
        };
    };
    const staketia: {
        MsgClientImpl: typeof _395.MsgClientImpl;
        QueryClientImpl: typeof _385.QueryClientImpl;
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
            "/stride.staketia.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _241.MsgLiquidStake) => _241.MsgLiquidStakeAmino;
                fromAmino: (object: _241.MsgLiquidStakeAmino) => _241.MsgLiquidStake;
            };
            "/stride.staketia.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _241.MsgRedeemStake) => _241.MsgRedeemStakeAmino;
                fromAmino: (object: _241.MsgRedeemStakeAmino) => _241.MsgRedeemStake;
            };
            "/stride.staketia.MsgConfirmDelegation": {
                aminoType: string;
                toAmino: (message: _241.MsgConfirmDelegation) => _241.MsgConfirmDelegationAmino;
                fromAmino: (object: _241.MsgConfirmDelegationAmino) => _241.MsgConfirmDelegation;
            };
            "/stride.staketia.MsgConfirmUndelegation": {
                aminoType: string;
                toAmino: (message: _241.MsgConfirmUndelegation) => _241.MsgConfirmUndelegationAmino;
                fromAmino: (object: _241.MsgConfirmUndelegationAmino) => _241.MsgConfirmUndelegation;
            };
            "/stride.staketia.MsgConfirmUnbondedTokenSweep": {
                aminoType: string;
                toAmino: (message: _241.MsgConfirmUnbondedTokenSweep) => _241.MsgConfirmUnbondedTokenSweepAmino;
                fromAmino: (object: _241.MsgConfirmUnbondedTokenSweepAmino) => _241.MsgConfirmUnbondedTokenSweep;
            };
            "/stride.staketia.MsgAdjustDelegatedBalance": {
                aminoType: string;
                toAmino: (message: _241.MsgAdjustDelegatedBalance) => _241.MsgAdjustDelegatedBalanceAmino;
                fromAmino: (object: _241.MsgAdjustDelegatedBalanceAmino) => _241.MsgAdjustDelegatedBalance;
            };
            "/stride.staketia.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _241.MsgUpdateInnerRedemptionRateBounds) => _241.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _241.MsgUpdateInnerRedemptionRateBoundsAmino) => _241.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.staketia.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _241.MsgResumeHostZone) => _241.MsgResumeHostZoneAmino;
                fromAmino: (object: _241.MsgResumeHostZoneAmino) => _241.MsgResumeHostZone;
            };
            "/stride.staketia.MsgRefreshRedemptionRate": {
                aminoType: string;
                toAmino: (message: _241.MsgRefreshRedemptionRate) => _241.MsgRefreshRedemptionRateAmino;
                fromAmino: (object: _241.MsgRefreshRedemptionRateAmino) => _241.MsgRefreshRedemptionRate;
            };
            "/stride.staketia.MsgOverwriteDelegationRecord": {
                aminoType: string;
                toAmino: (message: _241.MsgOverwriteDelegationRecord) => _241.MsgOverwriteDelegationRecordAmino;
                fromAmino: (object: _241.MsgOverwriteDelegationRecordAmino) => _241.MsgOverwriteDelegationRecord;
            };
            "/stride.staketia.MsgOverwriteUnbondingRecord": {
                aminoType: string;
                toAmino: (message: _241.MsgOverwriteUnbondingRecord) => _241.MsgOverwriteUnbondingRecordAmino;
                fromAmino: (object: _241.MsgOverwriteUnbondingRecordAmino) => _241.MsgOverwriteUnbondingRecord;
            };
            "/stride.staketia.MsgOverwriteRedemptionRecord": {
                aminoType: string;
                toAmino: (message: _241.MsgOverwriteRedemptionRecord) => _241.MsgOverwriteRedemptionRecordAmino;
                fromAmino: (object: _241.MsgOverwriteRedemptionRecordAmino) => _241.MsgOverwriteRedemptionRecord;
            };
            "/stride.staketia.MsgSetOperatorAddress": {
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
    const strdburner: {
        QueryClientImpl: typeof _386.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            strdBurnerAddress(request?: _243.QueryStrdBurnerAddressRequest): Promise<_243.QueryStrdBurnerAddressResponse>;
            totalStrdBurned(request?: _243.QueryTotalStrdBurnedRequest): Promise<_243.QueryTotalStrdBurnedResponse>;
        };
        QueryStrdBurnerAddressRequest: {
            typeUrl: string;
            encode(_: _243.QueryStrdBurnerAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.QueryStrdBurnerAddressRequest;
            fromPartial(_: Partial<_243.QueryStrdBurnerAddressRequest>): _243.QueryStrdBurnerAddressRequest;
            fromAmino(_: _243.QueryStrdBurnerAddressRequestAmino): _243.QueryStrdBurnerAddressRequest;
            toAmino(_: _243.QueryStrdBurnerAddressRequest): _243.QueryStrdBurnerAddressRequestAmino;
            fromAminoMsg(object: _243.QueryStrdBurnerAddressRequestAminoMsg): _243.QueryStrdBurnerAddressRequest;
            fromProtoMsg(message: _243.QueryStrdBurnerAddressRequestProtoMsg): _243.QueryStrdBurnerAddressRequest;
            toProto(message: _243.QueryStrdBurnerAddressRequest): Uint8Array;
            toProtoMsg(message: _243.QueryStrdBurnerAddressRequest): _243.QueryStrdBurnerAddressRequestProtoMsg;
        };
        QueryStrdBurnerAddressResponse: {
            typeUrl: string;
            encode(message: _243.QueryStrdBurnerAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.QueryStrdBurnerAddressResponse;
            fromPartial(object: Partial<_243.QueryStrdBurnerAddressResponse>): _243.QueryStrdBurnerAddressResponse;
            fromAmino(object: _243.QueryStrdBurnerAddressResponseAmino): _243.QueryStrdBurnerAddressResponse;
            toAmino(message: _243.QueryStrdBurnerAddressResponse): _243.QueryStrdBurnerAddressResponseAmino;
            fromAminoMsg(object: _243.QueryStrdBurnerAddressResponseAminoMsg): _243.QueryStrdBurnerAddressResponse;
            fromProtoMsg(message: _243.QueryStrdBurnerAddressResponseProtoMsg): _243.QueryStrdBurnerAddressResponse;
            toProto(message: _243.QueryStrdBurnerAddressResponse): Uint8Array;
            toProtoMsg(message: _243.QueryStrdBurnerAddressResponse): _243.QueryStrdBurnerAddressResponseProtoMsg;
        };
        QueryTotalStrdBurnedRequest: {
            typeUrl: string;
            encode(_: _243.QueryTotalStrdBurnedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.QueryTotalStrdBurnedRequest;
            fromPartial(_: Partial<_243.QueryTotalStrdBurnedRequest>): _243.QueryTotalStrdBurnedRequest;
            fromAmino(_: _243.QueryTotalStrdBurnedRequestAmino): _243.QueryTotalStrdBurnedRequest;
            toAmino(_: _243.QueryTotalStrdBurnedRequest): _243.QueryTotalStrdBurnedRequestAmino;
            fromAminoMsg(object: _243.QueryTotalStrdBurnedRequestAminoMsg): _243.QueryTotalStrdBurnedRequest;
            fromProtoMsg(message: _243.QueryTotalStrdBurnedRequestProtoMsg): _243.QueryTotalStrdBurnedRequest;
            toProto(message: _243.QueryTotalStrdBurnedRequest): Uint8Array;
            toProtoMsg(message: _243.QueryTotalStrdBurnedRequest): _243.QueryTotalStrdBurnedRequestProtoMsg;
        };
        QueryTotalStrdBurnedResponse: {
            typeUrl: string;
            encode(message: _243.QueryTotalStrdBurnedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.QueryTotalStrdBurnedResponse;
            fromPartial(object: Partial<_243.QueryTotalStrdBurnedResponse>): _243.QueryTotalStrdBurnedResponse;
            fromAmino(object: _243.QueryTotalStrdBurnedResponseAmino): _243.QueryTotalStrdBurnedResponse;
            toAmino(message: _243.QueryTotalStrdBurnedResponse): _243.QueryTotalStrdBurnedResponseAmino;
            fromAminoMsg(object: _243.QueryTotalStrdBurnedResponseAminoMsg): _243.QueryTotalStrdBurnedResponse;
            fromProtoMsg(message: _243.QueryTotalStrdBurnedResponseProtoMsg): _243.QueryTotalStrdBurnedResponse;
            toProto(message: _243.QueryTotalStrdBurnedResponse): Uint8Array;
            toProtoMsg(message: _243.QueryTotalStrdBurnedResponse): _243.QueryTotalStrdBurnedResponseProtoMsg;
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
    };
    const vesting: {
        BaseVestingAccount: {
            typeUrl: string;
            encode(message: _245.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _245.BaseVestingAccount;
            fromPartial(object: Partial<_245.BaseVestingAccount>): _245.BaseVestingAccount;
            fromAmino(object: _245.BaseVestingAccountAmino): _245.BaseVestingAccount;
            toAmino(message: _245.BaseVestingAccount): _245.BaseVestingAccountAmino;
            fromAminoMsg(object: _245.BaseVestingAccountAminoMsg): _245.BaseVestingAccount;
            fromProtoMsg(message: _245.BaseVestingAccountProtoMsg): _245.BaseVestingAccount;
            toProto(message: _245.BaseVestingAccount): Uint8Array;
            toProtoMsg(message: _245.BaseVestingAccount): _245.BaseVestingAccountProtoMsg;
        };
        Period: {
            typeUrl: string;
            encode(message: _245.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _245.Period;
            fromPartial(object: Partial<_245.Period>): _245.Period;
            fromAmino(object: _245.PeriodAmino): _245.Period;
            toAmino(message: _245.Period): _245.PeriodAmino;
            fromAminoMsg(object: _245.PeriodAminoMsg): _245.Period;
            fromProtoMsg(message: _245.PeriodProtoMsg): _245.Period;
            toProto(message: _245.Period): Uint8Array;
            toProtoMsg(message: _245.Period): _245.PeriodProtoMsg;
        };
        StridePeriodicVestingAccount: {
            typeUrl: string;
            encode(message: _245.StridePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _245.StridePeriodicVestingAccount;
            fromPartial(object: Partial<_245.StridePeriodicVestingAccount>): _245.StridePeriodicVestingAccount;
            fromAmino(object: _245.StridePeriodicVestingAccountAmino): _245.StridePeriodicVestingAccount;
            toAmino(message: _245.StridePeriodicVestingAccount): _245.StridePeriodicVestingAccountAmino;
            fromAminoMsg(object: _245.StridePeriodicVestingAccountAminoMsg): _245.StridePeriodicVestingAccount;
            fromProtoMsg(message: _245.StridePeriodicVestingAccountProtoMsg): _245.StridePeriodicVestingAccount;
            toProto(message: _245.StridePeriodicVestingAccount): Uint8Array;
            toProtoMsg(message: _245.StridePeriodicVestingAccount): _245.StridePeriodicVestingAccountProtoMsg;
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
                airdrop: _387.MsgClientImpl;
                auction: _388.MsgClientImpl;
                claim: _389.MsgClientImpl;
                icaoracle: _390.MsgClientImpl;
                icqoracle: _391.MsgClientImpl;
                interchainquery: {
                    v1: _392.MsgClientImpl;
                };
                stakedym: _393.MsgClientImpl;
                stakeibc: _394.MsgClientImpl;
                staketia: _395.MsgClientImpl;
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
                    airdrop(request: _178.QueryAirdropRequest): Promise<_178.QueryAirdropResponse>;
                    allAirdrops(request?: _178.QueryAllAirdropsRequest): Promise<_178.QueryAllAirdropsResponse>;
                    userAllocation(request: _178.QueryUserAllocationRequest): Promise<_178.QueryUserAllocationResponse>;
                    userAllocations(request: _178.QueryUserAllocationsRequest): Promise<_178.QueryUserAllocationsResponse>;
                    allAllocations(request: _178.QueryAllAllocationsRequest): Promise<_178.QueryAllAllocationsResponse>;
                    userSummary(request: _178.QueryUserSummaryRequest): Promise<_178.QueryUserSummaryResponse>;
                };
                auction: {
                    auction(request: _182.QueryAuctionRequest): Promise<_182.QueryAuctionResponse>;
                    auctions(request?: _182.QueryAuctionsRequest): Promise<_182.QueryAuctionsResponse>;
                };
                autopilot: {
                    params(request?: _186.QueryParamsRequest): Promise<_186.QueryParamsResponse>;
                };
                claim: {
                    distributorAccountBalance(request: _190.QueryDistributorAccountBalanceRequest): Promise<_190.QueryDistributorAccountBalanceResponse>;
                    params(request?: _190.QueryParamsRequest): Promise<_190.QueryParamsResponse>;
                    claimRecord(request: _190.QueryClaimRecordRequest): Promise<_190.QueryClaimRecordResponse>;
                    claimableForAction(request: _190.QueryClaimableForActionRequest): Promise<_190.QueryClaimableForActionResponse>;
                    totalClaimable(request: _190.QueryTotalClaimableRequest): Promise<_190.QueryTotalClaimableResponse>;
                    userVestings(request: _190.QueryUserVestingsRequest): Promise<_190.QueryUserVestingsResponse>;
                    claimStatus(request: _190.QueryClaimStatusRequest): Promise<_190.QueryClaimStatusResponse>;
                    claimMetadata(request?: _190.QueryClaimMetadataRequest): Promise<_190.QueryClaimMetadataResponse>;
                };
                epochs: {
                    epochInfos(request?: _193.QueryEpochsInfoRequest): Promise<_193.QueryEpochsInfoResponse>;
                    currentEpoch(request: _193.QueryCurrentEpochRequest): Promise<_193.QueryCurrentEpochResponse>;
                    epochInfo(request: _193.QueryEpochInfoRequest): Promise<_193.QueryEpochInfoResponse>;
                };
                icacallbacks: {
                    params(request?: _198.QueryParamsRequest): Promise<_198.QueryParamsResponse>;
                    callbackData(request: _198.QueryGetCallbackDataRequest): Promise<_198.QueryGetCallbackDataResponse>;
                    callbackDataAll(request?: _198.QueryAllCallbackDataRequest): Promise<_198.QueryAllCallbackDataResponse>;
                };
                icaoracle: {
                    oracle(request: _204.QueryOracleRequest): Promise<_204.QueryOracleResponse>;
                    allOracles(request?: _204.QueryAllOraclesRequest): Promise<_204.QueryAllOraclesResponse>;
                    activeOracles(request: _204.QueryActiveOraclesRequest): Promise<_204.QueryActiveOraclesResponse>;
                    metrics(request: _204.QueryMetricsRequest): Promise<_204.QueryMetricsResponse>;
                };
                icqoracle: {
                    tokenPrice(request: _208.QueryTokenPriceRequest): Promise<_208.TokenPriceResponse>;
                    tokenPrices(request?: _208.QueryTokenPricesRequest): Promise<_208.QueryTokenPricesResponse>;
                    params(request?: _208.QueryParamsRequest): Promise<_208.QueryParamsResponse>;
                    tokenPriceForQuoteDenom(request: _208.QueryTokenPriceForQuoteDenomRequest): Promise<_208.QueryTokenPriceForQuoteDenomResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _215.QueryParamsRequest): Promise<_215.QueryParamsResponse>;
                        epochProvisions(request?: _215.QueryEpochProvisionsRequest): Promise<_215.QueryEpochProvisionsResponse>;
                    };
                };
                records: {
                    params(request?: _219.QueryParamsRequest): Promise<_219.QueryParamsResponse>;
                    userRedemptionRecord(request: _219.QueryGetUserRedemptionRecordRequest): Promise<_219.QueryGetUserRedemptionRecordResponse>;
                    userRedemptionRecordAll(request?: _219.QueryAllUserRedemptionRecordRequest): Promise<_219.QueryAllUserRedemptionRecordResponse>;
                    userRedemptionRecordForUser(request: _219.QueryAllUserRedemptionRecordForUserRequest): Promise<_219.QueryAllUserRedemptionRecordForUserResponse>;
                    epochUnbondingRecord(request: _219.QueryGetEpochUnbondingRecordRequest): Promise<_219.QueryGetEpochUnbondingRecordResponse>;
                    epochUnbondingRecordAll(request?: _219.QueryAllEpochUnbondingRecordRequest): Promise<_219.QueryAllEpochUnbondingRecordResponse>;
                    depositRecord(request: _219.QueryGetDepositRecordRequest): Promise<_219.QueryGetDepositRecordResponse>;
                    depositRecordAll(request?: _219.QueryAllDepositRecordRequest): Promise<_219.QueryAllDepositRecordResponse>;
                    depositRecordByHost(request: _219.QueryDepositRecordByHostRequest): Promise<_219.QueryDepositRecordByHostResponse>;
                    lSMDeposit(request: _219.QueryLSMDepositRequest): Promise<_219.QueryLSMDepositResponse>;
                    lSMDeposits(request: _219.QueryLSMDepositsRequest): Promise<_219.QueryLSMDepositsResponse>;
                };
                stakedym: {
                    hostZone(request?: _222.QueryHostZoneRequest): Promise<_222.QueryHostZoneResponse>;
                    delegationRecords(request: _222.QueryDelegationRecordsRequest): Promise<_222.QueryDelegationRecordsResponse>;
                    unbondingRecords(request: _222.QueryUnbondingRecordsRequest): Promise<_222.QueryUnbondingRecordsResponse>;
                    redemptionRecord(request: _222.QueryRedemptionRecordRequest): Promise<_222.QueryRedemptionRecordResponse>;
                    redemptionRecords(request: _222.QueryRedemptionRecordsRequest): Promise<_222.QueryRedemptionRecordsResponse>;
                    slashRecords(request?: _222.QuerySlashRecordsRequest): Promise<_222.QuerySlashRecordsResponse>;
                };
                stakeibc: {
                    params(request?: _234.QueryParamsRequest): Promise<_234.QueryParamsResponse>;
                    validators(request: _234.QueryGetValidatorsRequest): Promise<_234.QueryGetValidatorsResponse>;
                    hostZone(request: _234.QueryGetHostZoneRequest): Promise<_234.QueryGetHostZoneResponse>;
                    hostZoneAll(request?: _234.QueryAllHostZoneRequest): Promise<_234.QueryAllHostZoneResponse>;
                    moduleAddress(request: _234.QueryModuleAddressRequest): Promise<_234.QueryModuleAddressResponse>;
                    interchainAccountFromAddress(request: _234.QueryInterchainAccountFromAddressRequest): Promise<_234.QueryInterchainAccountFromAddressResponse>;
                    epochTracker(request: _234.QueryGetEpochTrackerRequest): Promise<_234.QueryGetEpochTrackerResponse>;
                    epochTrackerAll(request?: _234.QueryAllEpochTrackerRequest): Promise<_234.QueryAllEpochTrackerResponse>;
                    nextPacketSequence(request: _234.QueryGetNextPacketSequenceRequest): Promise<_234.QueryGetNextPacketSequenceResponse>;
                    addressUnbondings(request: _234.QueryAddressUnbondings): Promise<_234.QueryAddressUnbondingsResponse>;
                    allTradeRoutes(request?: _234.QueryAllTradeRoutes): Promise<_234.QueryAllTradeRoutesResponse>;
                };
                staketia: {
                    hostZone(request?: _239.QueryHostZoneRequest): Promise<_239.QueryHostZoneResponse>;
                    delegationRecords(request: _239.QueryDelegationRecordsRequest): Promise<_239.QueryDelegationRecordsResponse>;
                    unbondingRecords(request: _239.QueryUnbondingRecordsRequest): Promise<_239.QueryUnbondingRecordsResponse>;
                    redemptionRecord(request: _239.QueryRedemptionRecordRequest): Promise<_239.QueryRedemptionRecordResponse>;
                    redemptionRecords(request: _239.QueryRedemptionRecordsRequest): Promise<_239.QueryRedemptionRecordsResponse>;
                    slashRecords(request?: _239.QuerySlashRecordsRequest): Promise<_239.QuerySlashRecordsResponse>;
                };
                strdburner: {
                    strdBurnerAddress(request?: _243.QueryStrdBurnerAddressRequest): Promise<_243.QueryStrdBurnerAddressResponse>;
                    totalStrdBurned(request?: _243.QueryTotalStrdBurnedRequest): Promise<_243.QueryTotalStrdBurnedResponse>;
                };
            };
        }>;
    };
}
