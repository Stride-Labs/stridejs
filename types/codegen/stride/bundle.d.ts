import * as _175 from "./airdrop/airdrop";
import * as _176 from "./airdrop/genesis";
import * as _177 from "./airdrop/query";
import * as _178 from "./airdrop/tx";
import * as _179 from "./autopilot/genesis";
import * as _180 from "./autopilot/params";
import * as _181 from "./autopilot/query";
import * as _182 from "./claim/claim";
import * as _183 from "./claim/genesis";
import * as _184 from "./claim/params";
import * as _185 from "./claim/query";
import * as _186 from "./claim/tx";
import * as _187 from "./epochs/genesis";
import * as _188 from "./epochs/query";
import * as _189 from "./icacallbacks/callback_data";
import * as _190 from "./icacallbacks/genesis";
import * as _191 from "./icacallbacks/packet";
import * as _192 from "./icacallbacks/params";
import * as _193 from "./icacallbacks/query";
import * as _195 from "./icaoracle/callbacks";
import * as _196 from "./icaoracle/contract";
import * as _197 from "./icaoracle/genesis";
import * as _198 from "./icaoracle/icaoracle";
import * as _199 from "./icaoracle/query";
import * as _200 from "./icaoracle/tx";
import * as _201 from "./interchainquery/v1/genesis";
import * as _202 from "./interchainquery/v1/messages";
import * as _203 from "./interchainquery/v1/query";
import * as _204 from "./mint/v1beta1/genesis";
import * as _205 from "./mint/v1beta1/mint";
import * as _206 from "./mint/v1beta1/query";
import * as _207 from "./records/callbacks";
import * as _208 from "./records/genesis";
import * as _209 from "./records/params";
import * as _210 from "./records/query";
import * as _211 from "./records/records";
import * as _212 from "./stakedym/genesis";
import * as _213 from "./stakedym/query";
import * as _214 from "./stakedym/stakedym";
import * as _215 from "./stakedym/tx";
import * as _216 from "./stakeibc/address_unbonding";
import * as _217 from "./stakeibc/callbacks";
import * as _218 from "./stakeibc/epoch_tracker";
import * as _219 from "./stakeibc/genesis";
import * as _220 from "./stakeibc/gov";
import * as _221 from "./stakeibc/host_zone";
import * as _222 from "./stakeibc/ica_account";
import * as _223 from "./stakeibc/packet";
import * as _224 from "./stakeibc/params";
import * as _225 from "./stakeibc/query";
import * as _226 from "./stakeibc/trade_route";
import * as _227 from "./stakeibc/tx";
import * as _228 from "./stakeibc/validator";
import * as _229 from "./staketia/genesis";
import * as _230 from "./staketia/query";
import * as _231 from "./staketia/staketia";
import * as _232 from "./staketia/tx";
import * as _234 from "./vesting/vesting";
import * as _358 from "./airdrop/query.rpc.Query";
import * as _359 from "./autopilot/query.rpc.Query";
import * as _360 from "./claim/query.rpc.Query";
import * as _361 from "./epochs/query.rpc.Query";
import * as _362 from "./icacallbacks/query.rpc.Query";
import * as _363 from "./icaoracle/query.rpc.Query";
import * as _364 from "./mint/v1beta1/query.rpc.Query";
import * as _365 from "./records/query.rpc.Query";
import * as _366 from "./stakedym/query.rpc.Query";
import * as _367 from "./stakeibc/query.rpc.Query";
import * as _368 from "./staketia/query.rpc.Query";
import * as _369 from "./airdrop/tx.rpc.msg";
import * as _370 from "./claim/tx.rpc.msg";
import * as _371 from "./icaoracle/tx.rpc.msg";
import * as _372 from "./interchainquery/v1/messages.rpc.msg";
import * as _373 from "./stakedym/tx.rpc.msg";
import * as _374 from "./stakeibc/tx.rpc.msg";
import * as _375 from "./staketia/tx.rpc.msg";
export declare namespace stride {
    const airdrop: {
        MsgClientImpl: typeof _369.MsgClientImpl;
        QueryClientImpl: typeof _358.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            airdrop(request: _177.QueryAirdropRequest): Promise<_177.QueryAirdropResponse>;
            allAirdrops(request?: _177.QueryAllAirdropsRequest): Promise<_177.QueryAllAirdropsResponse>;
            userAllocation(request: _177.QueryUserAllocationRequest): Promise<_177.QueryUserAllocationResponse>;
            userAllocations(request: _177.QueryUserAllocationsRequest): Promise<_177.QueryUserAllocationsResponse>;
            allAllocations(request: _177.QueryAllAllocationsRequest): Promise<_177.QueryAllAllocationsResponse>;
            userSummary(request: _177.QueryUserSummaryRequest): Promise<_177.QueryUserSummaryResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                claimDaily(value: _178.MsgClaimDaily): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimEarly(value: _178.MsgClaimEarly): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAirdrop(value: _178.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateAirdrop(value: _178.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addAllocations(value: _178.MsgAddAllocations): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateUserAllocation(value: _178.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                linkAddresses(value: _178.MsgLinkAddresses): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                claimDaily(value: _178.MsgClaimDaily): {
                    typeUrl: string;
                    value: _178.MsgClaimDaily;
                };
                claimEarly(value: _178.MsgClaimEarly): {
                    typeUrl: string;
                    value: _178.MsgClaimEarly;
                };
                createAirdrop(value: _178.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _178.MsgCreateAirdrop;
                };
                updateAirdrop(value: _178.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: _178.MsgUpdateAirdrop;
                };
                addAllocations(value: _178.MsgAddAllocations): {
                    typeUrl: string;
                    value: _178.MsgAddAllocations;
                };
                updateUserAllocation(value: _178.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: _178.MsgUpdateUserAllocation;
                };
                linkAddresses(value: _178.MsgLinkAddresses): {
                    typeUrl: string;
                    value: _178.MsgLinkAddresses;
                };
            };
            fromPartial: {
                claimDaily(value: _178.MsgClaimDaily): {
                    typeUrl: string;
                    value: _178.MsgClaimDaily;
                };
                claimEarly(value: _178.MsgClaimEarly): {
                    typeUrl: string;
                    value: _178.MsgClaimEarly;
                };
                createAirdrop(value: _178.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _178.MsgCreateAirdrop;
                };
                updateAirdrop(value: _178.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: _178.MsgUpdateAirdrop;
                };
                addAllocations(value: _178.MsgAddAllocations): {
                    typeUrl: string;
                    value: _178.MsgAddAllocations;
                };
                updateUserAllocation(value: _178.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: _178.MsgUpdateUserAllocation;
                };
                linkAddresses(value: _178.MsgLinkAddresses): {
                    typeUrl: string;
                    value: _178.MsgLinkAddresses;
                };
            };
        };
        AminoConverter: {
            "/stride.airdrop.MsgClaimDaily": {
                aminoType: string;
                toAmino: (message: _178.MsgClaimDaily) => _178.MsgClaimDailyAmino;
                fromAmino: (object: _178.MsgClaimDailyAmino) => _178.MsgClaimDaily;
            };
            "/stride.airdrop.MsgClaimEarly": {
                aminoType: string;
                toAmino: (message: _178.MsgClaimEarly) => _178.MsgClaimEarlyAmino;
                fromAmino: (object: _178.MsgClaimEarlyAmino) => _178.MsgClaimEarly;
            };
            "/stride.airdrop.MsgCreateAirdrop": {
                aminoType: string;
                toAmino: (message: _178.MsgCreateAirdrop) => _178.MsgCreateAirdropAmino;
                fromAmino: (object: _178.MsgCreateAirdropAmino) => _178.MsgCreateAirdrop;
            };
            "/stride.airdrop.MsgUpdateAirdrop": {
                aminoType: string;
                toAmino: (message: _178.MsgUpdateAirdrop) => _178.MsgUpdateAirdropAmino;
                fromAmino: (object: _178.MsgUpdateAirdropAmino) => _178.MsgUpdateAirdrop;
            };
            "/stride.airdrop.MsgAddAllocations": {
                aminoType: string;
                toAmino: (message: _178.MsgAddAllocations) => _178.MsgAddAllocationsAmino;
                fromAmino: (object: _178.MsgAddAllocationsAmino) => _178.MsgAddAllocations;
            };
            "/stride.airdrop.MsgUpdateUserAllocation": {
                aminoType: string;
                toAmino: (message: _178.MsgUpdateUserAllocation) => _178.MsgUpdateUserAllocationAmino;
                fromAmino: (object: _178.MsgUpdateUserAllocationAmino) => _178.MsgUpdateUserAllocation;
            };
            "/stride.airdrop.MsgLinkAddresses": {
                aminoType: string;
                toAmino: (message: _178.MsgLinkAddresses) => _178.MsgLinkAddressesAmino;
                fromAmino: (object: _178.MsgLinkAddressesAmino) => _178.MsgLinkAddresses;
            };
        };
        MsgClaimDaily: {
            typeUrl: string;
            encode(message: _178.MsgClaimDaily, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgClaimDaily;
            fromPartial(object: Partial<_178.MsgClaimDaily>): _178.MsgClaimDaily;
            fromAmino(object: _178.MsgClaimDailyAmino): _178.MsgClaimDaily;
            toAmino(message: _178.MsgClaimDaily): _178.MsgClaimDailyAmino;
            fromAminoMsg(object: _178.MsgClaimDailyAminoMsg): _178.MsgClaimDaily;
            toAminoMsg(message: _178.MsgClaimDaily): _178.MsgClaimDailyAminoMsg;
            fromProtoMsg(message: _178.MsgClaimDailyProtoMsg): _178.MsgClaimDaily;
            toProto(message: _178.MsgClaimDaily): Uint8Array;
            toProtoMsg(message: _178.MsgClaimDaily): _178.MsgClaimDailyProtoMsg;
        };
        MsgClaimDailyResponse: {
            typeUrl: string;
            encode(_: _178.MsgClaimDailyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgClaimDailyResponse;
            fromPartial(_: Partial<_178.MsgClaimDailyResponse>): _178.MsgClaimDailyResponse;
            fromAmino(_: _178.MsgClaimDailyResponseAmino): _178.MsgClaimDailyResponse;
            toAmino(_: _178.MsgClaimDailyResponse): _178.MsgClaimDailyResponseAmino;
            fromAminoMsg(object: _178.MsgClaimDailyResponseAminoMsg): _178.MsgClaimDailyResponse;
            fromProtoMsg(message: _178.MsgClaimDailyResponseProtoMsg): _178.MsgClaimDailyResponse;
            toProto(message: _178.MsgClaimDailyResponse): Uint8Array;
            toProtoMsg(message: _178.MsgClaimDailyResponse): _178.MsgClaimDailyResponseProtoMsg;
        };
        MsgClaimEarly: {
            typeUrl: string;
            encode(message: _178.MsgClaimEarly, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgClaimEarly;
            fromPartial(object: Partial<_178.MsgClaimEarly>): _178.MsgClaimEarly;
            fromAmino(object: _178.MsgClaimEarlyAmino): _178.MsgClaimEarly;
            toAmino(message: _178.MsgClaimEarly): _178.MsgClaimEarlyAmino;
            fromAminoMsg(object: _178.MsgClaimEarlyAminoMsg): _178.MsgClaimEarly;
            toAminoMsg(message: _178.MsgClaimEarly): _178.MsgClaimEarlyAminoMsg;
            fromProtoMsg(message: _178.MsgClaimEarlyProtoMsg): _178.MsgClaimEarly;
            toProto(message: _178.MsgClaimEarly): Uint8Array;
            toProtoMsg(message: _178.MsgClaimEarly): _178.MsgClaimEarlyProtoMsg;
        };
        MsgClaimEarlyResponse: {
            typeUrl: string;
            encode(_: _178.MsgClaimEarlyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgClaimEarlyResponse;
            fromPartial(_: Partial<_178.MsgClaimEarlyResponse>): _178.MsgClaimEarlyResponse;
            fromAmino(_: _178.MsgClaimEarlyResponseAmino): _178.MsgClaimEarlyResponse;
            toAmino(_: _178.MsgClaimEarlyResponse): _178.MsgClaimEarlyResponseAmino;
            fromAminoMsg(object: _178.MsgClaimEarlyResponseAminoMsg): _178.MsgClaimEarlyResponse;
            fromProtoMsg(message: _178.MsgClaimEarlyResponseProtoMsg): _178.MsgClaimEarlyResponse;
            toProto(message: _178.MsgClaimEarlyResponse): Uint8Array;
            toProtoMsg(message: _178.MsgClaimEarlyResponse): _178.MsgClaimEarlyResponseProtoMsg;
        };
        MsgCreateAirdrop: {
            typeUrl: string;
            encode(message: _178.MsgCreateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgCreateAirdrop;
            fromPartial(object: Partial<_178.MsgCreateAirdrop>): _178.MsgCreateAirdrop;
            fromAmino(object: _178.MsgCreateAirdropAmino): _178.MsgCreateAirdrop;
            toAmino(message: _178.MsgCreateAirdrop): _178.MsgCreateAirdropAmino;
            fromAminoMsg(object: _178.MsgCreateAirdropAminoMsg): _178.MsgCreateAirdrop;
            toAminoMsg(message: _178.MsgCreateAirdrop): _178.MsgCreateAirdropAminoMsg;
            fromProtoMsg(message: _178.MsgCreateAirdropProtoMsg): _178.MsgCreateAirdrop;
            toProto(message: _178.MsgCreateAirdrop): Uint8Array;
            toProtoMsg(message: _178.MsgCreateAirdrop): _178.MsgCreateAirdropProtoMsg;
        };
        MsgCreateAirdropResponse: {
            typeUrl: string;
            encode(_: _178.MsgCreateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgCreateAirdropResponse;
            fromPartial(_: Partial<_178.MsgCreateAirdropResponse>): _178.MsgCreateAirdropResponse;
            fromAmino(_: _178.MsgCreateAirdropResponseAmino): _178.MsgCreateAirdropResponse;
            toAmino(_: _178.MsgCreateAirdropResponse): _178.MsgCreateAirdropResponseAmino;
            fromAminoMsg(object: _178.MsgCreateAirdropResponseAminoMsg): _178.MsgCreateAirdropResponse;
            fromProtoMsg(message: _178.MsgCreateAirdropResponseProtoMsg): _178.MsgCreateAirdropResponse;
            toProto(message: _178.MsgCreateAirdropResponse): Uint8Array;
            toProtoMsg(message: _178.MsgCreateAirdropResponse): _178.MsgCreateAirdropResponseProtoMsg;
        };
        MsgUpdateAirdrop: {
            typeUrl: string;
            encode(message: _178.MsgUpdateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgUpdateAirdrop;
            fromPartial(object: Partial<_178.MsgUpdateAirdrop>): _178.MsgUpdateAirdrop;
            fromAmino(object: _178.MsgUpdateAirdropAmino): _178.MsgUpdateAirdrop;
            toAmino(message: _178.MsgUpdateAirdrop): _178.MsgUpdateAirdropAmino;
            fromAminoMsg(object: _178.MsgUpdateAirdropAminoMsg): _178.MsgUpdateAirdrop;
            toAminoMsg(message: _178.MsgUpdateAirdrop): _178.MsgUpdateAirdropAminoMsg;
            fromProtoMsg(message: _178.MsgUpdateAirdropProtoMsg): _178.MsgUpdateAirdrop;
            toProto(message: _178.MsgUpdateAirdrop): Uint8Array;
            toProtoMsg(message: _178.MsgUpdateAirdrop): _178.MsgUpdateAirdropProtoMsg;
        };
        MsgUpdateAirdropResponse: {
            typeUrl: string;
            encode(_: _178.MsgUpdateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgUpdateAirdropResponse;
            fromPartial(_: Partial<_178.MsgUpdateAirdropResponse>): _178.MsgUpdateAirdropResponse;
            fromAmino(_: _178.MsgUpdateAirdropResponseAmino): _178.MsgUpdateAirdropResponse;
            toAmino(_: _178.MsgUpdateAirdropResponse): _178.MsgUpdateAirdropResponseAmino;
            fromAminoMsg(object: _178.MsgUpdateAirdropResponseAminoMsg): _178.MsgUpdateAirdropResponse;
            fromProtoMsg(message: _178.MsgUpdateAirdropResponseProtoMsg): _178.MsgUpdateAirdropResponse;
            toProto(message: _178.MsgUpdateAirdropResponse): Uint8Array;
            toProtoMsg(message: _178.MsgUpdateAirdropResponse): _178.MsgUpdateAirdropResponseProtoMsg;
        };
        RawAllocation: {
            typeUrl: string;
            encode(message: _178.RawAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.RawAllocation;
            fromPartial(object: Partial<_178.RawAllocation>): _178.RawAllocation;
            fromAmino(object: _178.RawAllocationAmino): _178.RawAllocation;
            toAmino(message: _178.RawAllocation): _178.RawAllocationAmino;
            fromAminoMsg(object: _178.RawAllocationAminoMsg): _178.RawAllocation;
            fromProtoMsg(message: _178.RawAllocationProtoMsg): _178.RawAllocation;
            toProto(message: _178.RawAllocation): Uint8Array;
            toProtoMsg(message: _178.RawAllocation): _178.RawAllocationProtoMsg;
        };
        MsgAddAllocations: {
            typeUrl: string;
            encode(message: _178.MsgAddAllocations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgAddAllocations;
            fromPartial(object: Partial<_178.MsgAddAllocations>): _178.MsgAddAllocations;
            fromAmino(object: _178.MsgAddAllocationsAmino): _178.MsgAddAllocations;
            toAmino(message: _178.MsgAddAllocations): _178.MsgAddAllocationsAmino;
            fromAminoMsg(object: _178.MsgAddAllocationsAminoMsg): _178.MsgAddAllocations;
            toAminoMsg(message: _178.MsgAddAllocations): _178.MsgAddAllocationsAminoMsg;
            fromProtoMsg(message: _178.MsgAddAllocationsProtoMsg): _178.MsgAddAllocations;
            toProto(message: _178.MsgAddAllocations): Uint8Array;
            toProtoMsg(message: _178.MsgAddAllocations): _178.MsgAddAllocationsProtoMsg;
        };
        MsgAddAllocationsResponse: {
            typeUrl: string;
            encode(_: _178.MsgAddAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgAddAllocationsResponse;
            fromPartial(_: Partial<_178.MsgAddAllocationsResponse>): _178.MsgAddAllocationsResponse;
            fromAmino(_: _178.MsgAddAllocationsResponseAmino): _178.MsgAddAllocationsResponse;
            toAmino(_: _178.MsgAddAllocationsResponse): _178.MsgAddAllocationsResponseAmino;
            fromAminoMsg(object: _178.MsgAddAllocationsResponseAminoMsg): _178.MsgAddAllocationsResponse;
            fromProtoMsg(message: _178.MsgAddAllocationsResponseProtoMsg): _178.MsgAddAllocationsResponse;
            toProto(message: _178.MsgAddAllocationsResponse): Uint8Array;
            toProtoMsg(message: _178.MsgAddAllocationsResponse): _178.MsgAddAllocationsResponseProtoMsg;
        };
        MsgUpdateUserAllocation: {
            typeUrl: string;
            encode(message: _178.MsgUpdateUserAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgUpdateUserAllocation;
            fromPartial(object: Partial<_178.MsgUpdateUserAllocation>): _178.MsgUpdateUserAllocation;
            fromAmino(object: _178.MsgUpdateUserAllocationAmino): _178.MsgUpdateUserAllocation;
            toAmino(message: _178.MsgUpdateUserAllocation): _178.MsgUpdateUserAllocationAmino;
            fromAminoMsg(object: _178.MsgUpdateUserAllocationAminoMsg): _178.MsgUpdateUserAllocation;
            toAminoMsg(message: _178.MsgUpdateUserAllocation): _178.MsgUpdateUserAllocationAminoMsg;
            fromProtoMsg(message: _178.MsgUpdateUserAllocationProtoMsg): _178.MsgUpdateUserAllocation;
            toProto(message: _178.MsgUpdateUserAllocation): Uint8Array;
            toProtoMsg(message: _178.MsgUpdateUserAllocation): _178.MsgUpdateUserAllocationProtoMsg;
        };
        MsgUpdateUserAllocationResponse: {
            typeUrl: string;
            encode(_: _178.MsgUpdateUserAllocationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgUpdateUserAllocationResponse;
            fromPartial(_: Partial<_178.MsgUpdateUserAllocationResponse>): _178.MsgUpdateUserAllocationResponse;
            fromAmino(_: _178.MsgUpdateUserAllocationResponseAmino): _178.MsgUpdateUserAllocationResponse;
            toAmino(_: _178.MsgUpdateUserAllocationResponse): _178.MsgUpdateUserAllocationResponseAmino;
            fromAminoMsg(object: _178.MsgUpdateUserAllocationResponseAminoMsg): _178.MsgUpdateUserAllocationResponse;
            fromProtoMsg(message: _178.MsgUpdateUserAllocationResponseProtoMsg): _178.MsgUpdateUserAllocationResponse;
            toProto(message: _178.MsgUpdateUserAllocationResponse): Uint8Array;
            toProtoMsg(message: _178.MsgUpdateUserAllocationResponse): _178.MsgUpdateUserAllocationResponseProtoMsg;
        };
        MsgLinkAddresses: {
            typeUrl: string;
            encode(message: _178.MsgLinkAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgLinkAddresses;
            fromPartial(object: Partial<_178.MsgLinkAddresses>): _178.MsgLinkAddresses;
            fromAmino(object: _178.MsgLinkAddressesAmino): _178.MsgLinkAddresses;
            toAmino(message: _178.MsgLinkAddresses): _178.MsgLinkAddressesAmino;
            fromAminoMsg(object: _178.MsgLinkAddressesAminoMsg): _178.MsgLinkAddresses;
            toAminoMsg(message: _178.MsgLinkAddresses): _178.MsgLinkAddressesAminoMsg;
            fromProtoMsg(message: _178.MsgLinkAddressesProtoMsg): _178.MsgLinkAddresses;
            toProto(message: _178.MsgLinkAddresses): Uint8Array;
            toProtoMsg(message: _178.MsgLinkAddresses): _178.MsgLinkAddressesProtoMsg;
        };
        MsgLinkAddressesResponse: {
            typeUrl: string;
            encode(_: _178.MsgLinkAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgLinkAddressesResponse;
            fromPartial(_: Partial<_178.MsgLinkAddressesResponse>): _178.MsgLinkAddressesResponse;
            fromAmino(_: _178.MsgLinkAddressesResponseAmino): _178.MsgLinkAddressesResponse;
            toAmino(_: _178.MsgLinkAddressesResponse): _178.MsgLinkAddressesResponseAmino;
            fromAminoMsg(object: _178.MsgLinkAddressesResponseAminoMsg): _178.MsgLinkAddressesResponse;
            fromProtoMsg(message: _178.MsgLinkAddressesResponseProtoMsg): _178.MsgLinkAddressesResponse;
            toProto(message: _178.MsgLinkAddressesResponse): Uint8Array;
            toProtoMsg(message: _178.MsgLinkAddressesResponse): _178.MsgLinkAddressesResponseProtoMsg;
        };
        QueryAirdropRequest: {
            typeUrl: string;
            encode(message: _177.QueryAirdropRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryAirdropRequest;
            fromPartial(object: Partial<_177.QueryAirdropRequest>): _177.QueryAirdropRequest;
            fromAmino(object: _177.QueryAirdropRequestAmino): _177.QueryAirdropRequest;
            toAmino(message: _177.QueryAirdropRequest): _177.QueryAirdropRequestAmino;
            fromAminoMsg(object: _177.QueryAirdropRequestAminoMsg): _177.QueryAirdropRequest;
            fromProtoMsg(message: _177.QueryAirdropRequestProtoMsg): _177.QueryAirdropRequest;
            toProto(message: _177.QueryAirdropRequest): Uint8Array;
            toProtoMsg(message: _177.QueryAirdropRequest): _177.QueryAirdropRequestProtoMsg;
        };
        QueryAirdropResponse: {
            typeUrl: string;
            encode(message: _177.QueryAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryAirdropResponse;
            fromPartial(object: Partial<_177.QueryAirdropResponse>): _177.QueryAirdropResponse;
            fromAmino(object: _177.QueryAirdropResponseAmino): _177.QueryAirdropResponse;
            toAmino(message: _177.QueryAirdropResponse): _177.QueryAirdropResponseAmino;
            fromAminoMsg(object: _177.QueryAirdropResponseAminoMsg): _177.QueryAirdropResponse;
            fromProtoMsg(message: _177.QueryAirdropResponseProtoMsg): _177.QueryAirdropResponse;
            toProto(message: _177.QueryAirdropResponse): Uint8Array;
            toProtoMsg(message: _177.QueryAirdropResponse): _177.QueryAirdropResponseProtoMsg;
        };
        QueryAllAirdropsRequest: {
            typeUrl: string;
            encode(_: _177.QueryAllAirdropsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryAllAirdropsRequest;
            fromPartial(_: Partial<_177.QueryAllAirdropsRequest>): _177.QueryAllAirdropsRequest;
            fromAmino(_: _177.QueryAllAirdropsRequestAmino): _177.QueryAllAirdropsRequest;
            toAmino(_: _177.QueryAllAirdropsRequest): _177.QueryAllAirdropsRequestAmino;
            fromAminoMsg(object: _177.QueryAllAirdropsRequestAminoMsg): _177.QueryAllAirdropsRequest;
            fromProtoMsg(message: _177.QueryAllAirdropsRequestProtoMsg): _177.QueryAllAirdropsRequest;
            toProto(message: _177.QueryAllAirdropsRequest): Uint8Array;
            toProtoMsg(message: _177.QueryAllAirdropsRequest): _177.QueryAllAirdropsRequestProtoMsg;
        };
        QueryAllAirdropsResponse: {
            typeUrl: string;
            encode(message: _177.QueryAllAirdropsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryAllAirdropsResponse;
            fromPartial(object: Partial<_177.QueryAllAirdropsResponse>): _177.QueryAllAirdropsResponse;
            fromAmino(object: _177.QueryAllAirdropsResponseAmino): _177.QueryAllAirdropsResponse;
            toAmino(message: _177.QueryAllAirdropsResponse): _177.QueryAllAirdropsResponseAmino;
            fromAminoMsg(object: _177.QueryAllAirdropsResponseAminoMsg): _177.QueryAllAirdropsResponse;
            fromProtoMsg(message: _177.QueryAllAirdropsResponseProtoMsg): _177.QueryAllAirdropsResponse;
            toProto(message: _177.QueryAllAirdropsResponse): Uint8Array;
            toProtoMsg(message: _177.QueryAllAirdropsResponse): _177.QueryAllAirdropsResponseProtoMsg;
        };
        QueryUserAllocationRequest: {
            typeUrl: string;
            encode(message: _177.QueryUserAllocationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryUserAllocationRequest;
            fromPartial(object: Partial<_177.QueryUserAllocationRequest>): _177.QueryUserAllocationRequest;
            fromAmino(object: _177.QueryUserAllocationRequestAmino): _177.QueryUserAllocationRequest;
            toAmino(message: _177.QueryUserAllocationRequest): _177.QueryUserAllocationRequestAmino;
            fromAminoMsg(object: _177.QueryUserAllocationRequestAminoMsg): _177.QueryUserAllocationRequest;
            fromProtoMsg(message: _177.QueryUserAllocationRequestProtoMsg): _177.QueryUserAllocationRequest;
            toProto(message: _177.QueryUserAllocationRequest): Uint8Array;
            toProtoMsg(message: _177.QueryUserAllocationRequest): _177.QueryUserAllocationRequestProtoMsg;
        };
        QueryUserAllocationResponse: {
            typeUrl: string;
            encode(message: _177.QueryUserAllocationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryUserAllocationResponse;
            fromPartial(object: Partial<_177.QueryUserAllocationResponse>): _177.QueryUserAllocationResponse;
            fromAmino(object: _177.QueryUserAllocationResponseAmino): _177.QueryUserAllocationResponse;
            toAmino(message: _177.QueryUserAllocationResponse): _177.QueryUserAllocationResponseAmino;
            fromAminoMsg(object: _177.QueryUserAllocationResponseAminoMsg): _177.QueryUserAllocationResponse;
            fromProtoMsg(message: _177.QueryUserAllocationResponseProtoMsg): _177.QueryUserAllocationResponse;
            toProto(message: _177.QueryUserAllocationResponse): Uint8Array;
            toProtoMsg(message: _177.QueryUserAllocationResponse): _177.QueryUserAllocationResponseProtoMsg;
        };
        QueryUserAllocationsRequest: {
            typeUrl: string;
            encode(message: _177.QueryUserAllocationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryUserAllocationsRequest;
            fromPartial(object: Partial<_177.QueryUserAllocationsRequest>): _177.QueryUserAllocationsRequest;
            fromAmino(object: _177.QueryUserAllocationsRequestAmino): _177.QueryUserAllocationsRequest;
            toAmino(message: _177.QueryUserAllocationsRequest): _177.QueryUserAllocationsRequestAmino;
            fromAminoMsg(object: _177.QueryUserAllocationsRequestAminoMsg): _177.QueryUserAllocationsRequest;
            fromProtoMsg(message: _177.QueryUserAllocationsRequestProtoMsg): _177.QueryUserAllocationsRequest;
            toProto(message: _177.QueryUserAllocationsRequest): Uint8Array;
            toProtoMsg(message: _177.QueryUserAllocationsRequest): _177.QueryUserAllocationsRequestProtoMsg;
        };
        QueryUserAllocationsResponse: {
            typeUrl: string;
            encode(message: _177.QueryUserAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryUserAllocationsResponse;
            fromPartial(object: Partial<_177.QueryUserAllocationsResponse>): _177.QueryUserAllocationsResponse;
            fromAmino(object: _177.QueryUserAllocationsResponseAmino): _177.QueryUserAllocationsResponse;
            toAmino(message: _177.QueryUserAllocationsResponse): _177.QueryUserAllocationsResponseAmino;
            fromAminoMsg(object: _177.QueryUserAllocationsResponseAminoMsg): _177.QueryUserAllocationsResponse;
            fromProtoMsg(message: _177.QueryUserAllocationsResponseProtoMsg): _177.QueryUserAllocationsResponse;
            toProto(message: _177.QueryUserAllocationsResponse): Uint8Array;
            toProtoMsg(message: _177.QueryUserAllocationsResponse): _177.QueryUserAllocationsResponseProtoMsg;
        };
        QueryAllAllocationsRequest: {
            typeUrl: string;
            encode(message: _177.QueryAllAllocationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryAllAllocationsRequest;
            fromPartial(object: Partial<_177.QueryAllAllocationsRequest>): _177.QueryAllAllocationsRequest;
            fromAmino(object: _177.QueryAllAllocationsRequestAmino): _177.QueryAllAllocationsRequest;
            toAmino(message: _177.QueryAllAllocationsRequest): _177.QueryAllAllocationsRequestAmino;
            fromAminoMsg(object: _177.QueryAllAllocationsRequestAminoMsg): _177.QueryAllAllocationsRequest;
            fromProtoMsg(message: _177.QueryAllAllocationsRequestProtoMsg): _177.QueryAllAllocationsRequest;
            toProto(message: _177.QueryAllAllocationsRequest): Uint8Array;
            toProtoMsg(message: _177.QueryAllAllocationsRequest): _177.QueryAllAllocationsRequestProtoMsg;
        };
        QueryAllAllocationsResponse: {
            typeUrl: string;
            encode(message: _177.QueryAllAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryAllAllocationsResponse;
            fromPartial(object: Partial<_177.QueryAllAllocationsResponse>): _177.QueryAllAllocationsResponse;
            fromAmino(object: _177.QueryAllAllocationsResponseAmino): _177.QueryAllAllocationsResponse;
            toAmino(message: _177.QueryAllAllocationsResponse): _177.QueryAllAllocationsResponseAmino;
            fromAminoMsg(object: _177.QueryAllAllocationsResponseAminoMsg): _177.QueryAllAllocationsResponse;
            fromProtoMsg(message: _177.QueryAllAllocationsResponseProtoMsg): _177.QueryAllAllocationsResponse;
            toProto(message: _177.QueryAllAllocationsResponse): Uint8Array;
            toProtoMsg(message: _177.QueryAllAllocationsResponse): _177.QueryAllAllocationsResponseProtoMsg;
        };
        QueryUserSummaryRequest: {
            typeUrl: string;
            encode(message: _177.QueryUserSummaryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryUserSummaryRequest;
            fromPartial(object: Partial<_177.QueryUserSummaryRequest>): _177.QueryUserSummaryRequest;
            fromAmino(object: _177.QueryUserSummaryRequestAmino): _177.QueryUserSummaryRequest;
            toAmino(message: _177.QueryUserSummaryRequest): _177.QueryUserSummaryRequestAmino;
            fromAminoMsg(object: _177.QueryUserSummaryRequestAminoMsg): _177.QueryUserSummaryRequest;
            fromProtoMsg(message: _177.QueryUserSummaryRequestProtoMsg): _177.QueryUserSummaryRequest;
            toProto(message: _177.QueryUserSummaryRequest): Uint8Array;
            toProtoMsg(message: _177.QueryUserSummaryRequest): _177.QueryUserSummaryRequestProtoMsg;
        };
        QueryUserSummaryResponse: {
            typeUrl: string;
            encode(message: _177.QueryUserSummaryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryUserSummaryResponse;
            fromPartial(object: Partial<_177.QueryUserSummaryResponse>): _177.QueryUserSummaryResponse;
            fromAmino(object: _177.QueryUserSummaryResponseAmino): _177.QueryUserSummaryResponse;
            toAmino(message: _177.QueryUserSummaryResponse): _177.QueryUserSummaryResponseAmino;
            fromAminoMsg(object: _177.QueryUserSummaryResponseAminoMsg): _177.QueryUserSummaryResponse;
            fromProtoMsg(message: _177.QueryUserSummaryResponseProtoMsg): _177.QueryUserSummaryResponse;
            toProto(message: _177.QueryUserSummaryResponse): Uint8Array;
            toProtoMsg(message: _177.QueryUserSummaryResponse): _177.QueryUserSummaryResponseProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _176.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.GenesisState;
            fromPartial(object: Partial<_176.GenesisState>): _176.GenesisState;
            fromAmino(object: _176.GenesisStateAmino): _176.GenesisState;
            toAmino(message: _176.GenesisState): _176.GenesisStateAmino;
            fromAminoMsg(object: _176.GenesisStateAminoMsg): _176.GenesisState;
            fromProtoMsg(message: _176.GenesisStateProtoMsg): _176.GenesisState;
            toProto(message: _176.GenesisState): Uint8Array;
            toProtoMsg(message: _176.GenesisState): _176.GenesisStateProtoMsg;
        };
        claimTypeFromJSON(object: any): _175.ClaimType;
        claimTypeToJSON(object: _175.ClaimType): string;
        ClaimType: typeof _175.ClaimType;
        ClaimTypeSDKType: typeof _175.ClaimType;
        ClaimTypeAmino: typeof _175.ClaimType;
        Params: {
            typeUrl: string;
            encode(message: _175.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.Params;
            fromPartial(object: Partial<_175.Params>): _175.Params;
            fromAmino(object: _175.ParamsAmino): _175.Params;
            toAmino(message: _175.Params): _175.ParamsAmino;
            fromAminoMsg(object: _175.ParamsAminoMsg): _175.Params;
            fromProtoMsg(message: _175.ParamsProtoMsg): _175.Params;
            toProto(message: _175.Params): Uint8Array;
            toProtoMsg(message: _175.Params): _175.ParamsProtoMsg;
        };
        UserAllocation: {
            typeUrl: string;
            encode(message: _175.UserAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.UserAllocation;
            fromPartial(object: Partial<_175.UserAllocation>): _175.UserAllocation;
            fromAmino(object: _175.UserAllocationAmino): _175.UserAllocation;
            toAmino(message: _175.UserAllocation): _175.UserAllocationAmino;
            fromAminoMsg(object: _175.UserAllocationAminoMsg): _175.UserAllocation;
            fromProtoMsg(message: _175.UserAllocationProtoMsg): _175.UserAllocation;
            toProto(message: _175.UserAllocation): Uint8Array;
            toProtoMsg(message: _175.UserAllocation): _175.UserAllocationProtoMsg;
        };
        Airdrop: {
            typeUrl: string;
            encode(message: _175.Airdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.Airdrop;
            fromPartial(object: Partial<_175.Airdrop>): _175.Airdrop;
            fromAmino(object: _175.AirdropAmino): _175.Airdrop;
            toAmino(message: _175.Airdrop): _175.AirdropAmino;
            fromAminoMsg(object: _175.AirdropAminoMsg): _175.Airdrop;
            fromProtoMsg(message: _175.AirdropProtoMsg): _175.Airdrop;
            toProto(message: _175.Airdrop): Uint8Array;
            toProtoMsg(message: _175.Airdrop): _175.AirdropProtoMsg;
        };
    };
    const autopilot: {
        QueryClientImpl: typeof _359.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _181.QueryParamsRequest): Promise<_181.QueryParamsResponse>;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _181.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.QueryParamsRequest;
            fromPartial(_: Partial<_181.QueryParamsRequest>): _181.QueryParamsRequest;
            fromAmino(_: _181.QueryParamsRequestAmino): _181.QueryParamsRequest;
            toAmino(_: _181.QueryParamsRequest): _181.QueryParamsRequestAmino;
            fromAminoMsg(object: _181.QueryParamsRequestAminoMsg): _181.QueryParamsRequest;
            fromProtoMsg(message: _181.QueryParamsRequestProtoMsg): _181.QueryParamsRequest;
            toProto(message: _181.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _181.QueryParamsRequest): _181.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _181.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.QueryParamsResponse;
            fromPartial(object: Partial<_181.QueryParamsResponse>): _181.QueryParamsResponse;
            fromAmino(object: _181.QueryParamsResponseAmino): _181.QueryParamsResponse;
            toAmino(message: _181.QueryParamsResponse): _181.QueryParamsResponseAmino;
            fromAminoMsg(object: _181.QueryParamsResponseAminoMsg): _181.QueryParamsResponse;
            fromProtoMsg(message: _181.QueryParamsResponseProtoMsg): _181.QueryParamsResponse;
            toProto(message: _181.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _181.QueryParamsResponse): _181.QueryParamsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _180.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.Params;
            fromPartial(object: Partial<_180.Params>): _180.Params;
            fromAmino(object: _180.ParamsAmino): _180.Params;
            toAmino(message: _180.Params): _180.ParamsAmino;
            fromAminoMsg(object: _180.ParamsAminoMsg): _180.Params;
            fromProtoMsg(message: _180.ParamsProtoMsg): _180.Params;
            toProto(message: _180.Params): Uint8Array;
            toProtoMsg(message: _180.Params): _180.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _179.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.GenesisState;
            fromPartial(object: Partial<_179.GenesisState>): _179.GenesisState;
            fromAmino(object: _179.GenesisStateAmino): _179.GenesisState;
            toAmino(message: _179.GenesisState): _179.GenesisStateAmino;
            fromAminoMsg(object: _179.GenesisStateAminoMsg): _179.GenesisState;
            fromProtoMsg(message: _179.GenesisStateProtoMsg): _179.GenesisState;
            toProto(message: _179.GenesisState): Uint8Array;
            toProtoMsg(message: _179.GenesisState): _179.GenesisStateProtoMsg;
        };
    };
    const claim: {
        MsgClientImpl: typeof _370.MsgClientImpl;
        QueryClientImpl: typeof _360.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            distributorAccountBalance(request: _185.QueryDistributorAccountBalanceRequest): Promise<_185.QueryDistributorAccountBalanceResponse>;
            params(request?: _185.QueryParamsRequest): Promise<_185.QueryParamsResponse>;
            claimRecord(request: _185.QueryClaimRecordRequest): Promise<_185.QueryClaimRecordResponse>;
            claimableForAction(request: _185.QueryClaimableForActionRequest): Promise<_185.QueryClaimableForActionResponse>;
            totalClaimable(request: _185.QueryTotalClaimableRequest): Promise<_185.QueryTotalClaimableResponse>;
            userVestings(request: _185.QueryUserVestingsRequest): Promise<_185.QueryUserVestingsResponse>;
            claimStatus(request: _185.QueryClaimStatusRequest): Promise<_185.QueryClaimStatusResponse>;
            claimMetadata(request?: _185.QueryClaimMetadataRequest): Promise<_185.QueryClaimMetadataResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                setAirdropAllocations(value: _186.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimFreeAmount(value: _186.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAirdrop(value: _186.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteAirdrop(value: _186.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                setAirdropAllocations(value: _186.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _186.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _186.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _186.MsgClaimFreeAmount;
                };
                createAirdrop(value: _186.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _186.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _186.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _186.MsgDeleteAirdrop;
                };
            };
            fromPartial: {
                setAirdropAllocations(value: _186.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _186.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _186.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _186.MsgClaimFreeAmount;
                };
                createAirdrop(value: _186.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _186.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _186.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _186.MsgDeleteAirdrop;
                };
            };
        };
        AminoConverter: {
            "/stride.claim.MsgSetAirdropAllocations": {
                aminoType: string;
                toAmino: (message: _186.MsgSetAirdropAllocations) => _186.MsgSetAirdropAllocationsAmino;
                fromAmino: (object: _186.MsgSetAirdropAllocationsAmino) => _186.MsgSetAirdropAllocations;
            };
            "/stride.claim.MsgClaimFreeAmount": {
                aminoType: string;
                toAmino: (message: _186.MsgClaimFreeAmount) => _186.MsgClaimFreeAmountAmino;
                fromAmino: (object: _186.MsgClaimFreeAmountAmino) => _186.MsgClaimFreeAmount;
            };
            "/stride.claim.MsgCreateAirdrop": {
                aminoType: string;
                toAmino: (message: _186.MsgCreateAirdrop) => _186.MsgCreateAirdropAmino;
                fromAmino: (object: _186.MsgCreateAirdropAmino) => _186.MsgCreateAirdrop;
            };
            "/stride.claim.MsgDeleteAirdrop": {
                aminoType: string;
                toAmino: (message: _186.MsgDeleteAirdrop) => _186.MsgDeleteAirdropAmino;
                fromAmino: (object: _186.MsgDeleteAirdropAmino) => _186.MsgDeleteAirdrop;
            };
        };
        MsgSetAirdropAllocations: {
            typeUrl: string;
            encode(message: _186.MsgSetAirdropAllocations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.MsgSetAirdropAllocations;
            fromPartial(object: Partial<_186.MsgSetAirdropAllocations>): _186.MsgSetAirdropAllocations;
            fromAmino(object: _186.MsgSetAirdropAllocationsAmino): _186.MsgSetAirdropAllocations;
            toAmino(message: _186.MsgSetAirdropAllocations): _186.MsgSetAirdropAllocationsAmino;
            fromAminoMsg(object: _186.MsgSetAirdropAllocationsAminoMsg): _186.MsgSetAirdropAllocations;
            fromProtoMsg(message: _186.MsgSetAirdropAllocationsProtoMsg): _186.MsgSetAirdropAllocations;
            toProto(message: _186.MsgSetAirdropAllocations): Uint8Array;
            toProtoMsg(message: _186.MsgSetAirdropAllocations): _186.MsgSetAirdropAllocationsProtoMsg;
        };
        MsgSetAirdropAllocationsResponse: {
            typeUrl: string;
            encode(_: _186.MsgSetAirdropAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.MsgSetAirdropAllocationsResponse;
            fromPartial(_: Partial<_186.MsgSetAirdropAllocationsResponse>): _186.MsgSetAirdropAllocationsResponse;
            fromAmino(_: _186.MsgSetAirdropAllocationsResponseAmino): _186.MsgSetAirdropAllocationsResponse;
            toAmino(_: _186.MsgSetAirdropAllocationsResponse): _186.MsgSetAirdropAllocationsResponseAmino;
            fromAminoMsg(object: _186.MsgSetAirdropAllocationsResponseAminoMsg): _186.MsgSetAirdropAllocationsResponse;
            fromProtoMsg(message: _186.MsgSetAirdropAllocationsResponseProtoMsg): _186.MsgSetAirdropAllocationsResponse;
            toProto(message: _186.MsgSetAirdropAllocationsResponse): Uint8Array;
            toProtoMsg(message: _186.MsgSetAirdropAllocationsResponse): _186.MsgSetAirdropAllocationsResponseProtoMsg;
        };
        MsgClaimFreeAmount: {
            typeUrl: string;
            encode(message: _186.MsgClaimFreeAmount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.MsgClaimFreeAmount;
            fromPartial(object: Partial<_186.MsgClaimFreeAmount>): _186.MsgClaimFreeAmount;
            fromAmino(object: _186.MsgClaimFreeAmountAmino): _186.MsgClaimFreeAmount;
            toAmino(message: _186.MsgClaimFreeAmount): _186.MsgClaimFreeAmountAmino;
            fromAminoMsg(object: _186.MsgClaimFreeAmountAminoMsg): _186.MsgClaimFreeAmount;
            toAminoMsg(message: _186.MsgClaimFreeAmount): _186.MsgClaimFreeAmountAminoMsg;
            fromProtoMsg(message: _186.MsgClaimFreeAmountProtoMsg): _186.MsgClaimFreeAmount;
            toProto(message: _186.MsgClaimFreeAmount): Uint8Array;
            toProtoMsg(message: _186.MsgClaimFreeAmount): _186.MsgClaimFreeAmountProtoMsg;
        };
        MsgClaimFreeAmountResponse: {
            typeUrl: string;
            encode(message: _186.MsgClaimFreeAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.MsgClaimFreeAmountResponse;
            fromPartial(object: Partial<_186.MsgClaimFreeAmountResponse>): _186.MsgClaimFreeAmountResponse;
            fromAmino(object: _186.MsgClaimFreeAmountResponseAmino): _186.MsgClaimFreeAmountResponse;
            toAmino(message: _186.MsgClaimFreeAmountResponse): _186.MsgClaimFreeAmountResponseAmino;
            fromAminoMsg(object: _186.MsgClaimFreeAmountResponseAminoMsg): _186.MsgClaimFreeAmountResponse;
            fromProtoMsg(message: _186.MsgClaimFreeAmountResponseProtoMsg): _186.MsgClaimFreeAmountResponse;
            toProto(message: _186.MsgClaimFreeAmountResponse): Uint8Array;
            toProtoMsg(message: _186.MsgClaimFreeAmountResponse): _186.MsgClaimFreeAmountResponseProtoMsg;
        };
        MsgCreateAirdrop: {
            typeUrl: string;
            encode(message: _186.MsgCreateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.MsgCreateAirdrop;
            fromPartial(object: Partial<_186.MsgCreateAirdrop>): _186.MsgCreateAirdrop;
            fromAmino(object: _186.MsgCreateAirdropAmino): _186.MsgCreateAirdrop;
            toAmino(message: _186.MsgCreateAirdrop): _186.MsgCreateAirdropAmino;
            fromAminoMsg(object: _186.MsgCreateAirdropAminoMsg): _186.MsgCreateAirdrop;
            fromProtoMsg(message: _186.MsgCreateAirdropProtoMsg): _186.MsgCreateAirdrop;
            toProto(message: _186.MsgCreateAirdrop): Uint8Array;
            toProtoMsg(message: _186.MsgCreateAirdrop): _186.MsgCreateAirdropProtoMsg;
        };
        MsgCreateAirdropResponse: {
            typeUrl: string;
            encode(_: _186.MsgCreateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.MsgCreateAirdropResponse;
            fromPartial(_: Partial<_186.MsgCreateAirdropResponse>): _186.MsgCreateAirdropResponse;
            fromAmino(_: _186.MsgCreateAirdropResponseAmino): _186.MsgCreateAirdropResponse;
            toAmino(_: _186.MsgCreateAirdropResponse): _186.MsgCreateAirdropResponseAmino;
            fromAminoMsg(object: _186.MsgCreateAirdropResponseAminoMsg): _186.MsgCreateAirdropResponse;
            fromProtoMsg(message: _186.MsgCreateAirdropResponseProtoMsg): _186.MsgCreateAirdropResponse;
            toProto(message: _186.MsgCreateAirdropResponse): Uint8Array;
            toProtoMsg(message: _186.MsgCreateAirdropResponse): _186.MsgCreateAirdropResponseProtoMsg;
        };
        MsgDeleteAirdrop: {
            typeUrl: string;
            encode(message: _186.MsgDeleteAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.MsgDeleteAirdrop;
            fromPartial(object: Partial<_186.MsgDeleteAirdrop>): _186.MsgDeleteAirdrop;
            fromAmino(object: _186.MsgDeleteAirdropAmino): _186.MsgDeleteAirdrop;
            toAmino(message: _186.MsgDeleteAirdrop): _186.MsgDeleteAirdropAmino;
            fromAminoMsg(object: _186.MsgDeleteAirdropAminoMsg): _186.MsgDeleteAirdrop;
            fromProtoMsg(message: _186.MsgDeleteAirdropProtoMsg): _186.MsgDeleteAirdrop;
            toProto(message: _186.MsgDeleteAirdrop): Uint8Array;
            toProtoMsg(message: _186.MsgDeleteAirdrop): _186.MsgDeleteAirdropProtoMsg;
        };
        MsgDeleteAirdropResponse: {
            typeUrl: string;
            encode(_: _186.MsgDeleteAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.MsgDeleteAirdropResponse;
            fromPartial(_: Partial<_186.MsgDeleteAirdropResponse>): _186.MsgDeleteAirdropResponse;
            fromAmino(_: _186.MsgDeleteAirdropResponseAmino): _186.MsgDeleteAirdropResponse;
            toAmino(_: _186.MsgDeleteAirdropResponse): _186.MsgDeleteAirdropResponseAmino;
            fromAminoMsg(object: _186.MsgDeleteAirdropResponseAminoMsg): _186.MsgDeleteAirdropResponse;
            fromProtoMsg(message: _186.MsgDeleteAirdropResponseProtoMsg): _186.MsgDeleteAirdropResponse;
            toProto(message: _186.MsgDeleteAirdropResponse): Uint8Array;
            toProtoMsg(message: _186.MsgDeleteAirdropResponse): _186.MsgDeleteAirdropResponseProtoMsg;
        };
        ClaimStatus: {
            typeUrl: string;
            encode(message: _185.ClaimStatus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.ClaimStatus;
            fromPartial(object: Partial<_185.ClaimStatus>): _185.ClaimStatus;
            fromAmino(object: _185.ClaimStatusAmino): _185.ClaimStatus;
            toAmino(message: _185.ClaimStatus): _185.ClaimStatusAmino;
            fromAminoMsg(object: _185.ClaimStatusAminoMsg): _185.ClaimStatus;
            fromProtoMsg(message: _185.ClaimStatusProtoMsg): _185.ClaimStatus;
            toProto(message: _185.ClaimStatus): Uint8Array;
            toProtoMsg(message: _185.ClaimStatus): _185.ClaimStatusProtoMsg;
        };
        QueryClaimStatusRequest: {
            typeUrl: string;
            encode(message: _185.QueryClaimStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryClaimStatusRequest;
            fromPartial(object: Partial<_185.QueryClaimStatusRequest>): _185.QueryClaimStatusRequest;
            fromAmino(object: _185.QueryClaimStatusRequestAmino): _185.QueryClaimStatusRequest;
            toAmino(message: _185.QueryClaimStatusRequest): _185.QueryClaimStatusRequestAmino;
            fromAminoMsg(object: _185.QueryClaimStatusRequestAminoMsg): _185.QueryClaimStatusRequest;
            fromProtoMsg(message: _185.QueryClaimStatusRequestProtoMsg): _185.QueryClaimStatusRequest;
            toProto(message: _185.QueryClaimStatusRequest): Uint8Array;
            toProtoMsg(message: _185.QueryClaimStatusRequest): _185.QueryClaimStatusRequestProtoMsg;
        };
        QueryClaimStatusResponse: {
            typeUrl: string;
            encode(message: _185.QueryClaimStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryClaimStatusResponse;
            fromPartial(object: Partial<_185.QueryClaimStatusResponse>): _185.QueryClaimStatusResponse;
            fromAmino(object: _185.QueryClaimStatusResponseAmino): _185.QueryClaimStatusResponse;
            toAmino(message: _185.QueryClaimStatusResponse): _185.QueryClaimStatusResponseAmino;
            fromAminoMsg(object: _185.QueryClaimStatusResponseAminoMsg): _185.QueryClaimStatusResponse;
            fromProtoMsg(message: _185.QueryClaimStatusResponseProtoMsg): _185.QueryClaimStatusResponse;
            toProto(message: _185.QueryClaimStatusResponse): Uint8Array;
            toProtoMsg(message: _185.QueryClaimStatusResponse): _185.QueryClaimStatusResponseProtoMsg;
        };
        ClaimMetadata: {
            typeUrl: string;
            encode(message: _185.ClaimMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.ClaimMetadata;
            fromPartial(object: Partial<_185.ClaimMetadata>): _185.ClaimMetadata;
            fromAmino(object: _185.ClaimMetadataAmino): _185.ClaimMetadata;
            toAmino(message: _185.ClaimMetadata): _185.ClaimMetadataAmino;
            fromAminoMsg(object: _185.ClaimMetadataAminoMsg): _185.ClaimMetadata;
            fromProtoMsg(message: _185.ClaimMetadataProtoMsg): _185.ClaimMetadata;
            toProto(message: _185.ClaimMetadata): Uint8Array;
            toProtoMsg(message: _185.ClaimMetadata): _185.ClaimMetadataProtoMsg;
        };
        QueryClaimMetadataRequest: {
            typeUrl: string;
            encode(_: _185.QueryClaimMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryClaimMetadataRequest;
            fromPartial(_: Partial<_185.QueryClaimMetadataRequest>): _185.QueryClaimMetadataRequest;
            fromAmino(_: _185.QueryClaimMetadataRequestAmino): _185.QueryClaimMetadataRequest;
            toAmino(_: _185.QueryClaimMetadataRequest): _185.QueryClaimMetadataRequestAmino;
            fromAminoMsg(object: _185.QueryClaimMetadataRequestAminoMsg): _185.QueryClaimMetadataRequest;
            fromProtoMsg(message: _185.QueryClaimMetadataRequestProtoMsg): _185.QueryClaimMetadataRequest;
            toProto(message: _185.QueryClaimMetadataRequest): Uint8Array;
            toProtoMsg(message: _185.QueryClaimMetadataRequest): _185.QueryClaimMetadataRequestProtoMsg;
        };
        QueryClaimMetadataResponse: {
            typeUrl: string;
            encode(message: _185.QueryClaimMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryClaimMetadataResponse;
            fromPartial(object: Partial<_185.QueryClaimMetadataResponse>): _185.QueryClaimMetadataResponse;
            fromAmino(object: _185.QueryClaimMetadataResponseAmino): _185.QueryClaimMetadataResponse;
            toAmino(message: _185.QueryClaimMetadataResponse): _185.QueryClaimMetadataResponseAmino;
            fromAminoMsg(object: _185.QueryClaimMetadataResponseAminoMsg): _185.QueryClaimMetadataResponse;
            fromProtoMsg(message: _185.QueryClaimMetadataResponseProtoMsg): _185.QueryClaimMetadataResponse;
            toProto(message: _185.QueryClaimMetadataResponse): Uint8Array;
            toProtoMsg(message: _185.QueryClaimMetadataResponse): _185.QueryClaimMetadataResponseProtoMsg;
        };
        QueryDistributorAccountBalanceRequest: {
            typeUrl: string;
            encode(message: _185.QueryDistributorAccountBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryDistributorAccountBalanceRequest;
            fromPartial(object: Partial<_185.QueryDistributorAccountBalanceRequest>): _185.QueryDistributorAccountBalanceRequest;
            fromAmino(object: _185.QueryDistributorAccountBalanceRequestAmino): _185.QueryDistributorAccountBalanceRequest;
            toAmino(message: _185.QueryDistributorAccountBalanceRequest): _185.QueryDistributorAccountBalanceRequestAmino;
            fromAminoMsg(object: _185.QueryDistributorAccountBalanceRequestAminoMsg): _185.QueryDistributorAccountBalanceRequest;
            fromProtoMsg(message: _185.QueryDistributorAccountBalanceRequestProtoMsg): _185.QueryDistributorAccountBalanceRequest;
            toProto(message: _185.QueryDistributorAccountBalanceRequest): Uint8Array;
            toProtoMsg(message: _185.QueryDistributorAccountBalanceRequest): _185.QueryDistributorAccountBalanceRequestProtoMsg;
        };
        QueryDistributorAccountBalanceResponse: {
            typeUrl: string;
            encode(message: _185.QueryDistributorAccountBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryDistributorAccountBalanceResponse;
            fromPartial(object: Partial<_185.QueryDistributorAccountBalanceResponse>): _185.QueryDistributorAccountBalanceResponse;
            fromAmino(object: _185.QueryDistributorAccountBalanceResponseAmino): _185.QueryDistributorAccountBalanceResponse;
            toAmino(message: _185.QueryDistributorAccountBalanceResponse): _185.QueryDistributorAccountBalanceResponseAmino;
            fromAminoMsg(object: _185.QueryDistributorAccountBalanceResponseAminoMsg): _185.QueryDistributorAccountBalanceResponse;
            fromProtoMsg(message: _185.QueryDistributorAccountBalanceResponseProtoMsg): _185.QueryDistributorAccountBalanceResponse;
            toProto(message: _185.QueryDistributorAccountBalanceResponse): Uint8Array;
            toProtoMsg(message: _185.QueryDistributorAccountBalanceResponse): _185.QueryDistributorAccountBalanceResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _185.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryParamsRequest;
            fromPartial(_: Partial<_185.QueryParamsRequest>): _185.QueryParamsRequest;
            fromAmino(_: _185.QueryParamsRequestAmino): _185.QueryParamsRequest;
            toAmino(_: _185.QueryParamsRequest): _185.QueryParamsRequestAmino;
            fromAminoMsg(object: _185.QueryParamsRequestAminoMsg): _185.QueryParamsRequest;
            fromProtoMsg(message: _185.QueryParamsRequestProtoMsg): _185.QueryParamsRequest;
            toProto(message: _185.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _185.QueryParamsRequest): _185.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _185.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryParamsResponse;
            fromPartial(object: Partial<_185.QueryParamsResponse>): _185.QueryParamsResponse;
            fromAmino(object: _185.QueryParamsResponseAmino): _185.QueryParamsResponse;
            toAmino(message: _185.QueryParamsResponse): _185.QueryParamsResponseAmino;
            fromAminoMsg(object: _185.QueryParamsResponseAminoMsg): _185.QueryParamsResponse;
            fromProtoMsg(message: _185.QueryParamsResponseProtoMsg): _185.QueryParamsResponse;
            toProto(message: _185.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _185.QueryParamsResponse): _185.QueryParamsResponseProtoMsg;
        };
        QueryClaimRecordRequest: {
            typeUrl: string;
            encode(message: _185.QueryClaimRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryClaimRecordRequest;
            fromPartial(object: Partial<_185.QueryClaimRecordRequest>): _185.QueryClaimRecordRequest;
            fromAmino(object: _185.QueryClaimRecordRequestAmino): _185.QueryClaimRecordRequest;
            toAmino(message: _185.QueryClaimRecordRequest): _185.QueryClaimRecordRequestAmino;
            fromAminoMsg(object: _185.QueryClaimRecordRequestAminoMsg): _185.QueryClaimRecordRequest;
            fromProtoMsg(message: _185.QueryClaimRecordRequestProtoMsg): _185.QueryClaimRecordRequest;
            toProto(message: _185.QueryClaimRecordRequest): Uint8Array;
            toProtoMsg(message: _185.QueryClaimRecordRequest): _185.QueryClaimRecordRequestProtoMsg;
        };
        QueryClaimRecordResponse: {
            typeUrl: string;
            encode(message: _185.QueryClaimRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryClaimRecordResponse;
            fromPartial(object: Partial<_185.QueryClaimRecordResponse>): _185.QueryClaimRecordResponse;
            fromAmino(object: _185.QueryClaimRecordResponseAmino): _185.QueryClaimRecordResponse;
            toAmino(message: _185.QueryClaimRecordResponse): _185.QueryClaimRecordResponseAmino;
            fromAminoMsg(object: _185.QueryClaimRecordResponseAminoMsg): _185.QueryClaimRecordResponse;
            fromProtoMsg(message: _185.QueryClaimRecordResponseProtoMsg): _185.QueryClaimRecordResponse;
            toProto(message: _185.QueryClaimRecordResponse): Uint8Array;
            toProtoMsg(message: _185.QueryClaimRecordResponse): _185.QueryClaimRecordResponseProtoMsg;
        };
        QueryClaimableForActionRequest: {
            typeUrl: string;
            encode(message: _185.QueryClaimableForActionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryClaimableForActionRequest;
            fromPartial(object: Partial<_185.QueryClaimableForActionRequest>): _185.QueryClaimableForActionRequest;
            fromAmino(object: _185.QueryClaimableForActionRequestAmino): _185.QueryClaimableForActionRequest;
            toAmino(message: _185.QueryClaimableForActionRequest): _185.QueryClaimableForActionRequestAmino;
            fromAminoMsg(object: _185.QueryClaimableForActionRequestAminoMsg): _185.QueryClaimableForActionRequest;
            fromProtoMsg(message: _185.QueryClaimableForActionRequestProtoMsg): _185.QueryClaimableForActionRequest;
            toProto(message: _185.QueryClaimableForActionRequest): Uint8Array;
            toProtoMsg(message: _185.QueryClaimableForActionRequest): _185.QueryClaimableForActionRequestProtoMsg;
        };
        QueryClaimableForActionResponse: {
            typeUrl: string;
            encode(message: _185.QueryClaimableForActionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryClaimableForActionResponse;
            fromPartial(object: Partial<_185.QueryClaimableForActionResponse>): _185.QueryClaimableForActionResponse;
            fromAmino(object: _185.QueryClaimableForActionResponseAmino): _185.QueryClaimableForActionResponse;
            toAmino(message: _185.QueryClaimableForActionResponse): _185.QueryClaimableForActionResponseAmino;
            fromAminoMsg(object: _185.QueryClaimableForActionResponseAminoMsg): _185.QueryClaimableForActionResponse;
            fromProtoMsg(message: _185.QueryClaimableForActionResponseProtoMsg): _185.QueryClaimableForActionResponse;
            toProto(message: _185.QueryClaimableForActionResponse): Uint8Array;
            toProtoMsg(message: _185.QueryClaimableForActionResponse): _185.QueryClaimableForActionResponseProtoMsg;
        };
        QueryTotalClaimableRequest: {
            typeUrl: string;
            encode(message: _185.QueryTotalClaimableRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryTotalClaimableRequest;
            fromPartial(object: Partial<_185.QueryTotalClaimableRequest>): _185.QueryTotalClaimableRequest;
            fromAmino(object: _185.QueryTotalClaimableRequestAmino): _185.QueryTotalClaimableRequest;
            toAmino(message: _185.QueryTotalClaimableRequest): _185.QueryTotalClaimableRequestAmino;
            fromAminoMsg(object: _185.QueryTotalClaimableRequestAminoMsg): _185.QueryTotalClaimableRequest;
            fromProtoMsg(message: _185.QueryTotalClaimableRequestProtoMsg): _185.QueryTotalClaimableRequest;
            toProto(message: _185.QueryTotalClaimableRequest): Uint8Array;
            toProtoMsg(message: _185.QueryTotalClaimableRequest): _185.QueryTotalClaimableRequestProtoMsg;
        };
        QueryTotalClaimableResponse: {
            typeUrl: string;
            encode(message: _185.QueryTotalClaimableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryTotalClaimableResponse;
            fromPartial(object: Partial<_185.QueryTotalClaimableResponse>): _185.QueryTotalClaimableResponse;
            fromAmino(object: _185.QueryTotalClaimableResponseAmino): _185.QueryTotalClaimableResponse;
            toAmino(message: _185.QueryTotalClaimableResponse): _185.QueryTotalClaimableResponseAmino;
            fromAminoMsg(object: _185.QueryTotalClaimableResponseAminoMsg): _185.QueryTotalClaimableResponse;
            fromProtoMsg(message: _185.QueryTotalClaimableResponseProtoMsg): _185.QueryTotalClaimableResponse;
            toProto(message: _185.QueryTotalClaimableResponse): Uint8Array;
            toProtoMsg(message: _185.QueryTotalClaimableResponse): _185.QueryTotalClaimableResponseProtoMsg;
        };
        QueryUserVestingsRequest: {
            typeUrl: string;
            encode(message: _185.QueryUserVestingsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryUserVestingsRequest;
            fromPartial(object: Partial<_185.QueryUserVestingsRequest>): _185.QueryUserVestingsRequest;
            fromAmino(object: _185.QueryUserVestingsRequestAmino): _185.QueryUserVestingsRequest;
            toAmino(message: _185.QueryUserVestingsRequest): _185.QueryUserVestingsRequestAmino;
            fromAminoMsg(object: _185.QueryUserVestingsRequestAminoMsg): _185.QueryUserVestingsRequest;
            fromProtoMsg(message: _185.QueryUserVestingsRequestProtoMsg): _185.QueryUserVestingsRequest;
            toProto(message: _185.QueryUserVestingsRequest): Uint8Array;
            toProtoMsg(message: _185.QueryUserVestingsRequest): _185.QueryUserVestingsRequestProtoMsg;
        };
        QueryUserVestingsResponse: {
            typeUrl: string;
            encode(message: _185.QueryUserVestingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryUserVestingsResponse;
            fromPartial(object: Partial<_185.QueryUserVestingsResponse>): _185.QueryUserVestingsResponse;
            fromAmino(object: _185.QueryUserVestingsResponseAmino): _185.QueryUserVestingsResponse;
            toAmino(message: _185.QueryUserVestingsResponse): _185.QueryUserVestingsResponseAmino;
            fromAminoMsg(object: _185.QueryUserVestingsResponseAminoMsg): _185.QueryUserVestingsResponse;
            fromProtoMsg(message: _185.QueryUserVestingsResponseProtoMsg): _185.QueryUserVestingsResponse;
            toProto(message: _185.QueryUserVestingsResponse): Uint8Array;
            toProtoMsg(message: _185.QueryUserVestingsResponse): _185.QueryUserVestingsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _184.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.Params;
            fromPartial(object: Partial<_184.Params>): _184.Params;
            fromAmino(object: _184.ParamsAmino): _184.Params;
            toAmino(message: _184.Params): _184.ParamsAmino;
            fromAminoMsg(object: _184.ParamsAminoMsg): _184.Params;
            fromProtoMsg(message: _184.ParamsProtoMsg): _184.Params;
            toProto(message: _184.Params): Uint8Array;
            toProtoMsg(message: _184.Params): _184.ParamsProtoMsg;
        };
        Airdrop: {
            typeUrl: string;
            encode(message: _184.Airdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.Airdrop;
            fromPartial(object: Partial<_184.Airdrop>): _184.Airdrop;
            fromAmino(object: _184.AirdropAmino): _184.Airdrop;
            toAmino(message: _184.Airdrop): _184.AirdropAmino;
            fromAminoMsg(object: _184.AirdropAminoMsg): _184.Airdrop;
            fromProtoMsg(message: _184.AirdropProtoMsg): _184.Airdrop;
            toProto(message: _184.Airdrop): Uint8Array;
            toProtoMsg(message: _184.Airdrop): _184.AirdropProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _183.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.GenesisState;
            fromPartial(object: Partial<_183.GenesisState>): _183.GenesisState;
            fromAmino(object: _183.GenesisStateAmino): _183.GenesisState;
            toAmino(message: _183.GenesisState): _183.GenesisStateAmino;
            fromAminoMsg(object: _183.GenesisStateAminoMsg): _183.GenesisState;
            fromProtoMsg(message: _183.GenesisStateProtoMsg): _183.GenesisState;
            toProto(message: _183.GenesisState): Uint8Array;
            toProtoMsg(message: _183.GenesisState): _183.GenesisStateProtoMsg;
        };
        actionFromJSON(object: any): _182.Action;
        actionToJSON(object: _182.Action): string;
        Action: typeof _182.Action;
        ActionSDKType: typeof _182.Action;
        ActionAmino: typeof _182.Action;
        ClaimRecord: {
            typeUrl: string;
            encode(message: _182.ClaimRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.ClaimRecord;
            fromPartial(object: Partial<_182.ClaimRecord>): _182.ClaimRecord;
            fromAmino(object: _182.ClaimRecordAmino): _182.ClaimRecord;
            toAmino(message: _182.ClaimRecord): _182.ClaimRecordAmino;
            fromAminoMsg(object: _182.ClaimRecordAminoMsg): _182.ClaimRecord;
            fromProtoMsg(message: _182.ClaimRecordProtoMsg): _182.ClaimRecord;
            toProto(message: _182.ClaimRecord): Uint8Array;
            toProtoMsg(message: _182.ClaimRecord): _182.ClaimRecordProtoMsg;
        };
    };
    const epochs: {
        QueryClientImpl: typeof _361.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            epochInfos(request?: _188.QueryEpochsInfoRequest): Promise<_188.QueryEpochsInfoResponse>;
            currentEpoch(request: _188.QueryCurrentEpochRequest): Promise<_188.QueryCurrentEpochResponse>;
            epochInfo(request: _188.QueryEpochInfoRequest): Promise<_188.QueryEpochInfoResponse>;
        };
        QueryEpochsInfoRequest: {
            typeUrl: string;
            encode(message: _188.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryEpochsInfoRequest;
            fromPartial(object: Partial<_188.QueryEpochsInfoRequest>): _188.QueryEpochsInfoRequest;
            fromAmino(object: _188.QueryEpochsInfoRequestAmino): _188.QueryEpochsInfoRequest;
            toAmino(message: _188.QueryEpochsInfoRequest): _188.QueryEpochsInfoRequestAmino;
            fromAminoMsg(object: _188.QueryEpochsInfoRequestAminoMsg): _188.QueryEpochsInfoRequest;
            fromProtoMsg(message: _188.QueryEpochsInfoRequestProtoMsg): _188.QueryEpochsInfoRequest;
            toProto(message: _188.QueryEpochsInfoRequest): Uint8Array;
            toProtoMsg(message: _188.QueryEpochsInfoRequest): _188.QueryEpochsInfoRequestProtoMsg;
        };
        QueryEpochsInfoResponse: {
            typeUrl: string;
            encode(message: _188.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryEpochsInfoResponse;
            fromPartial(object: Partial<_188.QueryEpochsInfoResponse>): _188.QueryEpochsInfoResponse;
            fromAmino(object: _188.QueryEpochsInfoResponseAmino): _188.QueryEpochsInfoResponse;
            toAmino(message: _188.QueryEpochsInfoResponse): _188.QueryEpochsInfoResponseAmino;
            fromAminoMsg(object: _188.QueryEpochsInfoResponseAminoMsg): _188.QueryEpochsInfoResponse;
            fromProtoMsg(message: _188.QueryEpochsInfoResponseProtoMsg): _188.QueryEpochsInfoResponse;
            toProto(message: _188.QueryEpochsInfoResponse): Uint8Array;
            toProtoMsg(message: _188.QueryEpochsInfoResponse): _188.QueryEpochsInfoResponseProtoMsg;
        };
        QueryCurrentEpochRequest: {
            typeUrl: string;
            encode(message: _188.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryCurrentEpochRequest;
            fromPartial(object: Partial<_188.QueryCurrentEpochRequest>): _188.QueryCurrentEpochRequest;
            fromAmino(object: _188.QueryCurrentEpochRequestAmino): _188.QueryCurrentEpochRequest;
            toAmino(message: _188.QueryCurrentEpochRequest): _188.QueryCurrentEpochRequestAmino;
            fromAminoMsg(object: _188.QueryCurrentEpochRequestAminoMsg): _188.QueryCurrentEpochRequest;
            fromProtoMsg(message: _188.QueryCurrentEpochRequestProtoMsg): _188.QueryCurrentEpochRequest;
            toProto(message: _188.QueryCurrentEpochRequest): Uint8Array;
            toProtoMsg(message: _188.QueryCurrentEpochRequest): _188.QueryCurrentEpochRequestProtoMsg;
        };
        QueryCurrentEpochResponse: {
            typeUrl: string;
            encode(message: _188.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryCurrentEpochResponse;
            fromPartial(object: Partial<_188.QueryCurrentEpochResponse>): _188.QueryCurrentEpochResponse;
            fromAmino(object: _188.QueryCurrentEpochResponseAmino): _188.QueryCurrentEpochResponse;
            toAmino(message: _188.QueryCurrentEpochResponse): _188.QueryCurrentEpochResponseAmino;
            fromAminoMsg(object: _188.QueryCurrentEpochResponseAminoMsg): _188.QueryCurrentEpochResponse;
            fromProtoMsg(message: _188.QueryCurrentEpochResponseProtoMsg): _188.QueryCurrentEpochResponse;
            toProto(message: _188.QueryCurrentEpochResponse): Uint8Array;
            toProtoMsg(message: _188.QueryCurrentEpochResponse): _188.QueryCurrentEpochResponseProtoMsg;
        };
        QueryEpochInfoRequest: {
            typeUrl: string;
            encode(message: _188.QueryEpochInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryEpochInfoRequest;
            fromPartial(object: Partial<_188.QueryEpochInfoRequest>): _188.QueryEpochInfoRequest;
            fromAmino(object: _188.QueryEpochInfoRequestAmino): _188.QueryEpochInfoRequest;
            toAmino(message: _188.QueryEpochInfoRequest): _188.QueryEpochInfoRequestAmino;
            fromAminoMsg(object: _188.QueryEpochInfoRequestAminoMsg): _188.QueryEpochInfoRequest;
            fromProtoMsg(message: _188.QueryEpochInfoRequestProtoMsg): _188.QueryEpochInfoRequest;
            toProto(message: _188.QueryEpochInfoRequest): Uint8Array;
            toProtoMsg(message: _188.QueryEpochInfoRequest): _188.QueryEpochInfoRequestProtoMsg;
        };
        QueryEpochInfoResponse: {
            typeUrl: string;
            encode(message: _188.QueryEpochInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryEpochInfoResponse;
            fromPartial(object: Partial<_188.QueryEpochInfoResponse>): _188.QueryEpochInfoResponse;
            fromAmino(object: _188.QueryEpochInfoResponseAmino): _188.QueryEpochInfoResponse;
            toAmino(message: _188.QueryEpochInfoResponse): _188.QueryEpochInfoResponseAmino;
            fromAminoMsg(object: _188.QueryEpochInfoResponseAminoMsg): _188.QueryEpochInfoResponse;
            fromProtoMsg(message: _188.QueryEpochInfoResponseProtoMsg): _188.QueryEpochInfoResponse;
            toProto(message: _188.QueryEpochInfoResponse): Uint8Array;
            toProtoMsg(message: _188.QueryEpochInfoResponse): _188.QueryEpochInfoResponseProtoMsg;
        };
        EpochInfo: {
            typeUrl: string;
            encode(message: _187.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.EpochInfo;
            fromPartial(object: Partial<_187.EpochInfo>): _187.EpochInfo;
            fromAmino(object: _187.EpochInfoAmino): _187.EpochInfo;
            toAmino(message: _187.EpochInfo): _187.EpochInfoAmino;
            fromAminoMsg(object: _187.EpochInfoAminoMsg): _187.EpochInfo;
            fromProtoMsg(message: _187.EpochInfoProtoMsg): _187.EpochInfo;
            toProto(message: _187.EpochInfo): Uint8Array;
            toProtoMsg(message: _187.EpochInfo): _187.EpochInfoProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _187.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.GenesisState;
            fromPartial(object: Partial<_187.GenesisState>): _187.GenesisState;
            fromAmino(object: _187.GenesisStateAmino): _187.GenesisState;
            toAmino(message: _187.GenesisState): _187.GenesisStateAmino;
            fromAminoMsg(object: _187.GenesisStateAminoMsg): _187.GenesisState;
            fromProtoMsg(message: _187.GenesisStateProtoMsg): _187.GenesisState;
            toProto(message: _187.GenesisState): Uint8Array;
            toProtoMsg(message: _187.GenesisState): _187.GenesisStateProtoMsg;
        };
    };
    const icacallbacks: {
        QueryClientImpl: typeof _362.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _193.QueryParamsRequest): Promise<_193.QueryParamsResponse>;
            callbackData(request: _193.QueryGetCallbackDataRequest): Promise<_193.QueryGetCallbackDataResponse>;
            callbackDataAll(request?: _193.QueryAllCallbackDataRequest): Promise<_193.QueryAllCallbackDataResponse>;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _193.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.QueryParamsRequest;
            fromPartial(_: Partial<_193.QueryParamsRequest>): _193.QueryParamsRequest;
            fromAmino(_: _193.QueryParamsRequestAmino): _193.QueryParamsRequest;
            toAmino(_: _193.QueryParamsRequest): _193.QueryParamsRequestAmino;
            fromAminoMsg(object: _193.QueryParamsRequestAminoMsg): _193.QueryParamsRequest;
            fromProtoMsg(message: _193.QueryParamsRequestProtoMsg): _193.QueryParamsRequest;
            toProto(message: _193.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _193.QueryParamsRequest): _193.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _193.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.QueryParamsResponse;
            fromPartial(object: Partial<_193.QueryParamsResponse>): _193.QueryParamsResponse;
            fromAmino(object: _193.QueryParamsResponseAmino): _193.QueryParamsResponse;
            toAmino(message: _193.QueryParamsResponse): _193.QueryParamsResponseAmino;
            fromAminoMsg(object: _193.QueryParamsResponseAminoMsg): _193.QueryParamsResponse;
            fromProtoMsg(message: _193.QueryParamsResponseProtoMsg): _193.QueryParamsResponse;
            toProto(message: _193.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _193.QueryParamsResponse): _193.QueryParamsResponseProtoMsg;
        };
        QueryGetCallbackDataRequest: {
            typeUrl: string;
            encode(message: _193.QueryGetCallbackDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.QueryGetCallbackDataRequest;
            fromPartial(object: Partial<_193.QueryGetCallbackDataRequest>): _193.QueryGetCallbackDataRequest;
            fromAmino(object: _193.QueryGetCallbackDataRequestAmino): _193.QueryGetCallbackDataRequest;
            toAmino(message: _193.QueryGetCallbackDataRequest): _193.QueryGetCallbackDataRequestAmino;
            fromAminoMsg(object: _193.QueryGetCallbackDataRequestAminoMsg): _193.QueryGetCallbackDataRequest;
            fromProtoMsg(message: _193.QueryGetCallbackDataRequestProtoMsg): _193.QueryGetCallbackDataRequest;
            toProto(message: _193.QueryGetCallbackDataRequest): Uint8Array;
            toProtoMsg(message: _193.QueryGetCallbackDataRequest): _193.QueryGetCallbackDataRequestProtoMsg;
        };
        QueryGetCallbackDataResponse: {
            typeUrl: string;
            encode(message: _193.QueryGetCallbackDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.QueryGetCallbackDataResponse;
            fromPartial(object: Partial<_193.QueryGetCallbackDataResponse>): _193.QueryGetCallbackDataResponse;
            fromAmino(object: _193.QueryGetCallbackDataResponseAmino): _193.QueryGetCallbackDataResponse;
            toAmino(message: _193.QueryGetCallbackDataResponse): _193.QueryGetCallbackDataResponseAmino;
            fromAminoMsg(object: _193.QueryGetCallbackDataResponseAminoMsg): _193.QueryGetCallbackDataResponse;
            fromProtoMsg(message: _193.QueryGetCallbackDataResponseProtoMsg): _193.QueryGetCallbackDataResponse;
            toProto(message: _193.QueryGetCallbackDataResponse): Uint8Array;
            toProtoMsg(message: _193.QueryGetCallbackDataResponse): _193.QueryGetCallbackDataResponseProtoMsg;
        };
        QueryAllCallbackDataRequest: {
            typeUrl: string;
            encode(message: _193.QueryAllCallbackDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.QueryAllCallbackDataRequest;
            fromPartial(object: Partial<_193.QueryAllCallbackDataRequest>): _193.QueryAllCallbackDataRequest;
            fromAmino(object: _193.QueryAllCallbackDataRequestAmino): _193.QueryAllCallbackDataRequest;
            toAmino(message: _193.QueryAllCallbackDataRequest): _193.QueryAllCallbackDataRequestAmino;
            fromAminoMsg(object: _193.QueryAllCallbackDataRequestAminoMsg): _193.QueryAllCallbackDataRequest;
            fromProtoMsg(message: _193.QueryAllCallbackDataRequestProtoMsg): _193.QueryAllCallbackDataRequest;
            toProto(message: _193.QueryAllCallbackDataRequest): Uint8Array;
            toProtoMsg(message: _193.QueryAllCallbackDataRequest): _193.QueryAllCallbackDataRequestProtoMsg;
        };
        QueryAllCallbackDataResponse: {
            typeUrl: string;
            encode(message: _193.QueryAllCallbackDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.QueryAllCallbackDataResponse;
            fromPartial(object: Partial<_193.QueryAllCallbackDataResponse>): _193.QueryAllCallbackDataResponse;
            fromAmino(object: _193.QueryAllCallbackDataResponseAmino): _193.QueryAllCallbackDataResponse;
            toAmino(message: _193.QueryAllCallbackDataResponse): _193.QueryAllCallbackDataResponseAmino;
            fromAminoMsg(object: _193.QueryAllCallbackDataResponseAminoMsg): _193.QueryAllCallbackDataResponse;
            fromProtoMsg(message: _193.QueryAllCallbackDataResponseProtoMsg): _193.QueryAllCallbackDataResponse;
            toProto(message: _193.QueryAllCallbackDataResponse): Uint8Array;
            toProtoMsg(message: _193.QueryAllCallbackDataResponse): _193.QueryAllCallbackDataResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _192.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.Params;
            fromPartial(_: Partial<_192.Params>): _192.Params;
            fromAmino(_: _192.ParamsAmino): _192.Params;
            toAmino(_: _192.Params): _192.ParamsAmino;
            fromAminoMsg(object: _192.ParamsAminoMsg): _192.Params;
            fromProtoMsg(message: _192.ParamsProtoMsg): _192.Params;
            toProto(message: _192.Params): Uint8Array;
            toProtoMsg(message: _192.Params): _192.ParamsProtoMsg;
        };
        IcacallbacksPacketData: {
            typeUrl: string;
            encode(message: _191.IcacallbacksPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.IcacallbacksPacketData;
            fromPartial(object: Partial<_191.IcacallbacksPacketData>): _191.IcacallbacksPacketData;
            fromAmino(object: _191.IcacallbacksPacketDataAmino): _191.IcacallbacksPacketData;
            toAmino(message: _191.IcacallbacksPacketData): _191.IcacallbacksPacketDataAmino;
            fromAminoMsg(object: _191.IcacallbacksPacketDataAminoMsg): _191.IcacallbacksPacketData;
            fromProtoMsg(message: _191.IcacallbacksPacketDataProtoMsg): _191.IcacallbacksPacketData;
            toProto(message: _191.IcacallbacksPacketData): Uint8Array;
            toProtoMsg(message: _191.IcacallbacksPacketData): _191.IcacallbacksPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _191.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.NoData;
            fromPartial(_: Partial<_191.NoData>): _191.NoData;
            fromAmino(_: _191.NoDataAmino): _191.NoData;
            toAmino(_: _191.NoData): _191.NoDataAmino;
            fromAminoMsg(object: _191.NoDataAminoMsg): _191.NoData;
            fromProtoMsg(message: _191.NoDataProtoMsg): _191.NoData;
            toProto(message: _191.NoData): Uint8Array;
            toProtoMsg(message: _191.NoData): _191.NoDataProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _190.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.GenesisState;
            fromPartial(object: Partial<_190.GenesisState>): _190.GenesisState;
            fromAmino(object: _190.GenesisStateAmino): _190.GenesisState;
            toAmino(message: _190.GenesisState): _190.GenesisStateAmino;
            fromAminoMsg(object: _190.GenesisStateAminoMsg): _190.GenesisState;
            fromProtoMsg(message: _190.GenesisStateProtoMsg): _190.GenesisState;
            toProto(message: _190.GenesisState): Uint8Array;
            toProtoMsg(message: _190.GenesisState): _190.GenesisStateProtoMsg;
        };
        CallbackData: {
            typeUrl: string;
            encode(message: _189.CallbackData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.CallbackData;
            fromPartial(object: Partial<_189.CallbackData>): _189.CallbackData;
            fromAmino(object: _189.CallbackDataAmino): _189.CallbackData;
            toAmino(message: _189.CallbackData): _189.CallbackDataAmino;
            fromAminoMsg(object: _189.CallbackDataAminoMsg): _189.CallbackData;
            fromProtoMsg(message: _189.CallbackDataProtoMsg): _189.CallbackData;
            toProto(message: _189.CallbackData): Uint8Array;
            toProtoMsg(message: _189.CallbackData): _189.CallbackDataProtoMsg;
        };
    };
    const icaoracle: {
        MsgClientImpl: typeof _371.MsgClientImpl;
        QueryClientImpl: typeof _363.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            oracle(request: _199.QueryOracleRequest): Promise<_199.QueryOracleResponse>;
            allOracles(request?: _199.QueryAllOraclesRequest): Promise<_199.QueryAllOraclesResponse>;
            activeOracles(request: _199.QueryActiveOraclesRequest): Promise<_199.QueryActiveOraclesResponse>;
            metrics(request: _199.QueryMetricsRequest): Promise<_199.QueryMetricsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                addOracle(value: _200.MsgAddOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                instantiateOracle(value: _200.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreOracleICA(value: _200.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                toggleOracle(value: _200.MsgToggleOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeOracle(value: _200.MsgRemoveOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                addOracle(value: _200.MsgAddOracle): {
                    typeUrl: string;
                    value: _200.MsgAddOracle;
                };
                instantiateOracle(value: _200.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: _200.MsgInstantiateOracle;
                };
                restoreOracleICA(value: _200.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: _200.MsgRestoreOracleICA;
                };
                toggleOracle(value: _200.MsgToggleOracle): {
                    typeUrl: string;
                    value: _200.MsgToggleOracle;
                };
                removeOracle(value: _200.MsgRemoveOracle): {
                    typeUrl: string;
                    value: _200.MsgRemoveOracle;
                };
            };
            fromPartial: {
                addOracle(value: _200.MsgAddOracle): {
                    typeUrl: string;
                    value: _200.MsgAddOracle;
                };
                instantiateOracle(value: _200.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: _200.MsgInstantiateOracle;
                };
                restoreOracleICA(value: _200.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: _200.MsgRestoreOracleICA;
                };
                toggleOracle(value: _200.MsgToggleOracle): {
                    typeUrl: string;
                    value: _200.MsgToggleOracle;
                };
                removeOracle(value: _200.MsgRemoveOracle): {
                    typeUrl: string;
                    value: _200.MsgRemoveOracle;
                };
            };
        };
        AminoConverter: {
            "/stride.icaoracle.MsgAddOracle": {
                aminoType: string;
                toAmino: (message: _200.MsgAddOracle) => _200.MsgAddOracleAmino;
                fromAmino: (object: _200.MsgAddOracleAmino) => _200.MsgAddOracle;
            };
            "/stride.icaoracle.MsgInstantiateOracle": {
                aminoType: string;
                toAmino: (message: _200.MsgInstantiateOracle) => _200.MsgInstantiateOracleAmino;
                fromAmino: (object: _200.MsgInstantiateOracleAmino) => _200.MsgInstantiateOracle;
            };
            "/stride.icaoracle.MsgRestoreOracleICA": {
                aminoType: string;
                toAmino: (message: _200.MsgRestoreOracleICA) => _200.MsgRestoreOracleICAAmino;
                fromAmino: (object: _200.MsgRestoreOracleICAAmino) => _200.MsgRestoreOracleICA;
            };
            "/stride.icaoracle.MsgToggleOracle": {
                aminoType: string;
                toAmino: (message: _200.MsgToggleOracle) => _200.MsgToggleOracleAmino;
                fromAmino: (object: _200.MsgToggleOracleAmino) => _200.MsgToggleOracle;
            };
            "/stride.icaoracle.MsgRemoveOracle": {
                aminoType: string;
                toAmino: (message: _200.MsgRemoveOracle) => _200.MsgRemoveOracleAmino;
                fromAmino: (object: _200.MsgRemoveOracleAmino) => _200.MsgRemoveOracle;
            };
        };
        MsgAddOracle: {
            typeUrl: string;
            encode(message: _200.MsgAddOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.MsgAddOracle;
            fromPartial(object: Partial<_200.MsgAddOracle>): _200.MsgAddOracle;
            fromAmino(object: _200.MsgAddOracleAmino): _200.MsgAddOracle;
            toAmino(message: _200.MsgAddOracle): _200.MsgAddOracleAmino;
            fromAminoMsg(object: _200.MsgAddOracleAminoMsg): _200.MsgAddOracle;
            toAminoMsg(message: _200.MsgAddOracle): _200.MsgAddOracleAminoMsg;
            fromProtoMsg(message: _200.MsgAddOracleProtoMsg): _200.MsgAddOracle;
            toProto(message: _200.MsgAddOracle): Uint8Array;
            toProtoMsg(message: _200.MsgAddOracle): _200.MsgAddOracleProtoMsg;
        };
        MsgAddOracleResponse: {
            typeUrl: string;
            encode(_: _200.MsgAddOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.MsgAddOracleResponse;
            fromPartial(_: Partial<_200.MsgAddOracleResponse>): _200.MsgAddOracleResponse;
            fromAmino(_: _200.MsgAddOracleResponseAmino): _200.MsgAddOracleResponse;
            toAmino(_: _200.MsgAddOracleResponse): _200.MsgAddOracleResponseAmino;
            fromAminoMsg(object: _200.MsgAddOracleResponseAminoMsg): _200.MsgAddOracleResponse;
            fromProtoMsg(message: _200.MsgAddOracleResponseProtoMsg): _200.MsgAddOracleResponse;
            toProto(message: _200.MsgAddOracleResponse): Uint8Array;
            toProtoMsg(message: _200.MsgAddOracleResponse): _200.MsgAddOracleResponseProtoMsg;
        };
        MsgInstantiateOracle: {
            typeUrl: string;
            encode(message: _200.MsgInstantiateOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.MsgInstantiateOracle;
            fromPartial(object: Partial<_200.MsgInstantiateOracle>): _200.MsgInstantiateOracle;
            fromAmino(object: _200.MsgInstantiateOracleAmino): _200.MsgInstantiateOracle;
            toAmino(message: _200.MsgInstantiateOracle): _200.MsgInstantiateOracleAmino;
            fromAminoMsg(object: _200.MsgInstantiateOracleAminoMsg): _200.MsgInstantiateOracle;
            toAminoMsg(message: _200.MsgInstantiateOracle): _200.MsgInstantiateOracleAminoMsg;
            fromProtoMsg(message: _200.MsgInstantiateOracleProtoMsg): _200.MsgInstantiateOracle;
            toProto(message: _200.MsgInstantiateOracle): Uint8Array;
            toProtoMsg(message: _200.MsgInstantiateOracle): _200.MsgInstantiateOracleProtoMsg;
        };
        MsgInstantiateOracleResponse: {
            typeUrl: string;
            encode(_: _200.MsgInstantiateOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.MsgInstantiateOracleResponse;
            fromPartial(_: Partial<_200.MsgInstantiateOracleResponse>): _200.MsgInstantiateOracleResponse;
            fromAmino(_: _200.MsgInstantiateOracleResponseAmino): _200.MsgInstantiateOracleResponse;
            toAmino(_: _200.MsgInstantiateOracleResponse): _200.MsgInstantiateOracleResponseAmino;
            fromAminoMsg(object: _200.MsgInstantiateOracleResponseAminoMsg): _200.MsgInstantiateOracleResponse;
            fromProtoMsg(message: _200.MsgInstantiateOracleResponseProtoMsg): _200.MsgInstantiateOracleResponse;
            toProto(message: _200.MsgInstantiateOracleResponse): Uint8Array;
            toProtoMsg(message: _200.MsgInstantiateOracleResponse): _200.MsgInstantiateOracleResponseProtoMsg;
        };
        MsgRestoreOracleICA: {
            typeUrl: string;
            encode(message: _200.MsgRestoreOracleICA, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.MsgRestoreOracleICA;
            fromPartial(object: Partial<_200.MsgRestoreOracleICA>): _200.MsgRestoreOracleICA;
            fromAmino(object: _200.MsgRestoreOracleICAAmino): _200.MsgRestoreOracleICA;
            toAmino(message: _200.MsgRestoreOracleICA): _200.MsgRestoreOracleICAAmino;
            fromAminoMsg(object: _200.MsgRestoreOracleICAAminoMsg): _200.MsgRestoreOracleICA;
            toAminoMsg(message: _200.MsgRestoreOracleICA): _200.MsgRestoreOracleICAAminoMsg;
            fromProtoMsg(message: _200.MsgRestoreOracleICAProtoMsg): _200.MsgRestoreOracleICA;
            toProto(message: _200.MsgRestoreOracleICA): Uint8Array;
            toProtoMsg(message: _200.MsgRestoreOracleICA): _200.MsgRestoreOracleICAProtoMsg;
        };
        MsgRestoreOracleICAResponse: {
            typeUrl: string;
            encode(_: _200.MsgRestoreOracleICAResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.MsgRestoreOracleICAResponse;
            fromPartial(_: Partial<_200.MsgRestoreOracleICAResponse>): _200.MsgRestoreOracleICAResponse;
            fromAmino(_: _200.MsgRestoreOracleICAResponseAmino): _200.MsgRestoreOracleICAResponse;
            toAmino(_: _200.MsgRestoreOracleICAResponse): _200.MsgRestoreOracleICAResponseAmino;
            fromAminoMsg(object: _200.MsgRestoreOracleICAResponseAminoMsg): _200.MsgRestoreOracleICAResponse;
            fromProtoMsg(message: _200.MsgRestoreOracleICAResponseProtoMsg): _200.MsgRestoreOracleICAResponse;
            toProto(message: _200.MsgRestoreOracleICAResponse): Uint8Array;
            toProtoMsg(message: _200.MsgRestoreOracleICAResponse): _200.MsgRestoreOracleICAResponseProtoMsg;
        };
        MsgToggleOracle: {
            typeUrl: string;
            encode(message: _200.MsgToggleOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.MsgToggleOracle;
            fromPartial(object: Partial<_200.MsgToggleOracle>): _200.MsgToggleOracle;
            fromAmino(object: _200.MsgToggleOracleAmino): _200.MsgToggleOracle;
            toAmino(message: _200.MsgToggleOracle): _200.MsgToggleOracleAmino;
            fromAminoMsg(object: _200.MsgToggleOracleAminoMsg): _200.MsgToggleOracle;
            toAminoMsg(message: _200.MsgToggleOracle): _200.MsgToggleOracleAminoMsg;
            fromProtoMsg(message: _200.MsgToggleOracleProtoMsg): _200.MsgToggleOracle;
            toProto(message: _200.MsgToggleOracle): Uint8Array;
            toProtoMsg(message: _200.MsgToggleOracle): _200.MsgToggleOracleProtoMsg;
        };
        MsgToggleOracleResponse: {
            typeUrl: string;
            encode(_: _200.MsgToggleOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.MsgToggleOracleResponse;
            fromPartial(_: Partial<_200.MsgToggleOracleResponse>): _200.MsgToggleOracleResponse;
            fromAmino(_: _200.MsgToggleOracleResponseAmino): _200.MsgToggleOracleResponse;
            toAmino(_: _200.MsgToggleOracleResponse): _200.MsgToggleOracleResponseAmino;
            fromAminoMsg(object: _200.MsgToggleOracleResponseAminoMsg): _200.MsgToggleOracleResponse;
            fromProtoMsg(message: _200.MsgToggleOracleResponseProtoMsg): _200.MsgToggleOracleResponse;
            toProto(message: _200.MsgToggleOracleResponse): Uint8Array;
            toProtoMsg(message: _200.MsgToggleOracleResponse): _200.MsgToggleOracleResponseProtoMsg;
        };
        MsgRemoveOracle: {
            typeUrl: string;
            encode(message: _200.MsgRemoveOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.MsgRemoveOracle;
            fromPartial(object: Partial<_200.MsgRemoveOracle>): _200.MsgRemoveOracle;
            fromAmino(object: _200.MsgRemoveOracleAmino): _200.MsgRemoveOracle;
            toAmino(message: _200.MsgRemoveOracle): _200.MsgRemoveOracleAmino;
            fromAminoMsg(object: _200.MsgRemoveOracleAminoMsg): _200.MsgRemoveOracle;
            toAminoMsg(message: _200.MsgRemoveOracle): _200.MsgRemoveOracleAminoMsg;
            fromProtoMsg(message: _200.MsgRemoveOracleProtoMsg): _200.MsgRemoveOracle;
            toProto(message: _200.MsgRemoveOracle): Uint8Array;
            toProtoMsg(message: _200.MsgRemoveOracle): _200.MsgRemoveOracleProtoMsg;
        };
        MsgRemoveOracleResponse: {
            typeUrl: string;
            encode(_: _200.MsgRemoveOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.MsgRemoveOracleResponse;
            fromPartial(_: Partial<_200.MsgRemoveOracleResponse>): _200.MsgRemoveOracleResponse;
            fromAmino(_: _200.MsgRemoveOracleResponseAmino): _200.MsgRemoveOracleResponse;
            toAmino(_: _200.MsgRemoveOracleResponse): _200.MsgRemoveOracleResponseAmino;
            fromAminoMsg(object: _200.MsgRemoveOracleResponseAminoMsg): _200.MsgRemoveOracleResponse;
            fromProtoMsg(message: _200.MsgRemoveOracleResponseProtoMsg): _200.MsgRemoveOracleResponse;
            toProto(message: _200.MsgRemoveOracleResponse): Uint8Array;
            toProtoMsg(message: _200.MsgRemoveOracleResponse): _200.MsgRemoveOracleResponseProtoMsg;
        };
        QueryOracleRequest: {
            typeUrl: string;
            encode(message: _199.QueryOracleRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.QueryOracleRequest;
            fromPartial(object: Partial<_199.QueryOracleRequest>): _199.QueryOracleRequest;
            fromAmino(object: _199.QueryOracleRequestAmino): _199.QueryOracleRequest;
            toAmino(message: _199.QueryOracleRequest): _199.QueryOracleRequestAmino;
            fromAminoMsg(object: _199.QueryOracleRequestAminoMsg): _199.QueryOracleRequest;
            fromProtoMsg(message: _199.QueryOracleRequestProtoMsg): _199.QueryOracleRequest;
            toProto(message: _199.QueryOracleRequest): Uint8Array;
            toProtoMsg(message: _199.QueryOracleRequest): _199.QueryOracleRequestProtoMsg;
        };
        QueryOracleResponse: {
            typeUrl: string;
            encode(message: _199.QueryOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.QueryOracleResponse;
            fromPartial(object: Partial<_199.QueryOracleResponse>): _199.QueryOracleResponse;
            fromAmino(object: _199.QueryOracleResponseAmino): _199.QueryOracleResponse;
            toAmino(message: _199.QueryOracleResponse): _199.QueryOracleResponseAmino;
            fromAminoMsg(object: _199.QueryOracleResponseAminoMsg): _199.QueryOracleResponse;
            fromProtoMsg(message: _199.QueryOracleResponseProtoMsg): _199.QueryOracleResponse;
            toProto(message: _199.QueryOracleResponse): Uint8Array;
            toProtoMsg(message: _199.QueryOracleResponse): _199.QueryOracleResponseProtoMsg;
        };
        QueryAllOraclesRequest: {
            typeUrl: string;
            encode(_: _199.QueryAllOraclesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.QueryAllOraclesRequest;
            fromPartial(_: Partial<_199.QueryAllOraclesRequest>): _199.QueryAllOraclesRequest;
            fromAmino(_: _199.QueryAllOraclesRequestAmino): _199.QueryAllOraclesRequest;
            toAmino(_: _199.QueryAllOraclesRequest): _199.QueryAllOraclesRequestAmino;
            fromAminoMsg(object: _199.QueryAllOraclesRequestAminoMsg): _199.QueryAllOraclesRequest;
            fromProtoMsg(message: _199.QueryAllOraclesRequestProtoMsg): _199.QueryAllOraclesRequest;
            toProto(message: _199.QueryAllOraclesRequest): Uint8Array;
            toProtoMsg(message: _199.QueryAllOraclesRequest): _199.QueryAllOraclesRequestProtoMsg;
        };
        QueryAllOraclesResponse: {
            typeUrl: string;
            encode(message: _199.QueryAllOraclesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.QueryAllOraclesResponse;
            fromPartial(object: Partial<_199.QueryAllOraclesResponse>): _199.QueryAllOraclesResponse;
            fromAmino(object: _199.QueryAllOraclesResponseAmino): _199.QueryAllOraclesResponse;
            toAmino(message: _199.QueryAllOraclesResponse): _199.QueryAllOraclesResponseAmino;
            fromAminoMsg(object: _199.QueryAllOraclesResponseAminoMsg): _199.QueryAllOraclesResponse;
            fromProtoMsg(message: _199.QueryAllOraclesResponseProtoMsg): _199.QueryAllOraclesResponse;
            toProto(message: _199.QueryAllOraclesResponse): Uint8Array;
            toProtoMsg(message: _199.QueryAllOraclesResponse): _199.QueryAllOraclesResponseProtoMsg;
        };
        QueryActiveOraclesRequest: {
            typeUrl: string;
            encode(message: _199.QueryActiveOraclesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.QueryActiveOraclesRequest;
            fromPartial(object: Partial<_199.QueryActiveOraclesRequest>): _199.QueryActiveOraclesRequest;
            fromAmino(object: _199.QueryActiveOraclesRequestAmino): _199.QueryActiveOraclesRequest;
            toAmino(message: _199.QueryActiveOraclesRequest): _199.QueryActiveOraclesRequestAmino;
            fromAminoMsg(object: _199.QueryActiveOraclesRequestAminoMsg): _199.QueryActiveOraclesRequest;
            fromProtoMsg(message: _199.QueryActiveOraclesRequestProtoMsg): _199.QueryActiveOraclesRequest;
            toProto(message: _199.QueryActiveOraclesRequest): Uint8Array;
            toProtoMsg(message: _199.QueryActiveOraclesRequest): _199.QueryActiveOraclesRequestProtoMsg;
        };
        QueryActiveOraclesResponse: {
            typeUrl: string;
            encode(message: _199.QueryActiveOraclesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.QueryActiveOraclesResponse;
            fromPartial(object: Partial<_199.QueryActiveOraclesResponse>): _199.QueryActiveOraclesResponse;
            fromAmino(object: _199.QueryActiveOraclesResponseAmino): _199.QueryActiveOraclesResponse;
            toAmino(message: _199.QueryActiveOraclesResponse): _199.QueryActiveOraclesResponseAmino;
            fromAminoMsg(object: _199.QueryActiveOraclesResponseAminoMsg): _199.QueryActiveOraclesResponse;
            fromProtoMsg(message: _199.QueryActiveOraclesResponseProtoMsg): _199.QueryActiveOraclesResponse;
            toProto(message: _199.QueryActiveOraclesResponse): Uint8Array;
            toProtoMsg(message: _199.QueryActiveOraclesResponse): _199.QueryActiveOraclesResponseProtoMsg;
        };
        QueryMetricsRequest: {
            typeUrl: string;
            encode(message: _199.QueryMetricsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.QueryMetricsRequest;
            fromPartial(object: Partial<_199.QueryMetricsRequest>): _199.QueryMetricsRequest;
            fromAmino(object: _199.QueryMetricsRequestAmino): _199.QueryMetricsRequest;
            toAmino(message: _199.QueryMetricsRequest): _199.QueryMetricsRequestAmino;
            fromAminoMsg(object: _199.QueryMetricsRequestAminoMsg): _199.QueryMetricsRequest;
            fromProtoMsg(message: _199.QueryMetricsRequestProtoMsg): _199.QueryMetricsRequest;
            toProto(message: _199.QueryMetricsRequest): Uint8Array;
            toProtoMsg(message: _199.QueryMetricsRequest): _199.QueryMetricsRequestProtoMsg;
        };
        QueryMetricsResponse: {
            typeUrl: string;
            encode(message: _199.QueryMetricsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.QueryMetricsResponse;
            fromPartial(object: Partial<_199.QueryMetricsResponse>): _199.QueryMetricsResponse;
            fromAmino(object: _199.QueryMetricsResponseAmino): _199.QueryMetricsResponse;
            toAmino(message: _199.QueryMetricsResponse): _199.QueryMetricsResponseAmino;
            fromAminoMsg(object: _199.QueryMetricsResponseAminoMsg): _199.QueryMetricsResponse;
            fromProtoMsg(message: _199.QueryMetricsResponseProtoMsg): _199.QueryMetricsResponse;
            toProto(message: _199.QueryMetricsResponse): Uint8Array;
            toProtoMsg(message: _199.QueryMetricsResponse): _199.QueryMetricsResponseProtoMsg;
        };
        metricStatusFromJSON(object: any): _198.MetricStatus;
        metricStatusToJSON(object: _198.MetricStatus): string;
        MetricStatus: typeof _198.MetricStatus;
        MetricStatusSDKType: typeof _198.MetricStatus;
        MetricStatusAmino: typeof _198.MetricStatus;
        Oracle: {
            typeUrl: string;
            encode(message: _198.Oracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.Oracle;
            fromPartial(object: Partial<_198.Oracle>): _198.Oracle;
            fromAmino(object: _198.OracleAmino): _198.Oracle;
            toAmino(message: _198.Oracle): _198.OracleAmino;
            fromAminoMsg(object: _198.OracleAminoMsg): _198.Oracle;
            fromProtoMsg(message: _198.OracleProtoMsg): _198.Oracle;
            toProto(message: _198.Oracle): Uint8Array;
            toProtoMsg(message: _198.Oracle): _198.OracleProtoMsg;
        };
        Metric: {
            typeUrl: string;
            encode(message: _198.Metric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.Metric;
            fromPartial(object: Partial<_198.Metric>): _198.Metric;
            fromAmino(object: _198.MetricAmino): _198.Metric;
            toAmino(message: _198.Metric): _198.MetricAmino;
            fromAminoMsg(object: _198.MetricAminoMsg): _198.Metric;
            fromProtoMsg(message: _198.MetricProtoMsg): _198.Metric;
            toProto(message: _198.Metric): Uint8Array;
            toProtoMsg(message: _198.Metric): _198.MetricProtoMsg;
        };
        RedemptionRateAttributes: {
            typeUrl: string;
            encode(message: _198.RedemptionRateAttributes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.RedemptionRateAttributes;
            fromPartial(object: Partial<_198.RedemptionRateAttributes>): _198.RedemptionRateAttributes;
            fromAmino(object: _198.RedemptionRateAttributesAmino): _198.RedemptionRateAttributes;
            toAmino(message: _198.RedemptionRateAttributes): _198.RedemptionRateAttributesAmino;
            fromAminoMsg(object: _198.RedemptionRateAttributesAminoMsg): _198.RedemptionRateAttributes;
            fromProtoMsg(message: _198.RedemptionRateAttributesProtoMsg): _198.RedemptionRateAttributes;
            toProto(message: _198.RedemptionRateAttributes): Uint8Array;
            toProtoMsg(message: _198.RedemptionRateAttributes): _198.RedemptionRateAttributesProtoMsg;
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
        GenesisState: {
            typeUrl: string;
            encode(message: _197.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.GenesisState;
            fromPartial(object: Partial<_197.GenesisState>): _197.GenesisState;
            fromAmino(object: _197.GenesisStateAmino): _197.GenesisState;
            toAmino(message: _197.GenesisState): _197.GenesisStateAmino;
            fromAminoMsg(object: _197.GenesisStateAminoMsg): _197.GenesisState;
            fromProtoMsg(message: _197.GenesisStateProtoMsg): _197.GenesisState;
            toProto(message: _197.GenesisState): Uint8Array;
            toProtoMsg(message: _197.GenesisState): _197.GenesisStateProtoMsg;
        };
        MsgInstantiateOracleContract: {
            typeUrl: string;
            encode(message: _196.MsgInstantiateOracleContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.MsgInstantiateOracleContract;
            fromPartial(object: Partial<_196.MsgInstantiateOracleContract>): _196.MsgInstantiateOracleContract;
            fromAmino(object: _196.MsgInstantiateOracleContractAmino): _196.MsgInstantiateOracleContract;
            toAmino(message: _196.MsgInstantiateOracleContract): _196.MsgInstantiateOracleContractAmino;
            fromAminoMsg(object: _196.MsgInstantiateOracleContractAminoMsg): _196.MsgInstantiateOracleContract;
            fromProtoMsg(message: _196.MsgInstantiateOracleContractProtoMsg): _196.MsgInstantiateOracleContract;
            toProto(message: _196.MsgInstantiateOracleContract): Uint8Array;
            toProtoMsg(message: _196.MsgInstantiateOracleContract): _196.MsgInstantiateOracleContractProtoMsg;
        };
        MsgExecuteContractPostMetric: {
            typeUrl: string;
            encode(message: _196.MsgExecuteContractPostMetric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.MsgExecuteContractPostMetric;
            fromPartial(object: Partial<_196.MsgExecuteContractPostMetric>): _196.MsgExecuteContractPostMetric;
            fromAmino(object: _196.MsgExecuteContractPostMetricAmino): _196.MsgExecuteContractPostMetric;
            toAmino(message: _196.MsgExecuteContractPostMetric): _196.MsgExecuteContractPostMetricAmino;
            fromAminoMsg(object: _196.MsgExecuteContractPostMetricAminoMsg): _196.MsgExecuteContractPostMetric;
            fromProtoMsg(message: _196.MsgExecuteContractPostMetricProtoMsg): _196.MsgExecuteContractPostMetric;
            toProto(message: _196.MsgExecuteContractPostMetric): Uint8Array;
            toProtoMsg(message: _196.MsgExecuteContractPostMetric): _196.MsgExecuteContractPostMetricProtoMsg;
        };
        MsgPostMetric: {
            typeUrl: string;
            encode(message: _196.MsgPostMetric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.MsgPostMetric;
            fromPartial(object: Partial<_196.MsgPostMetric>): _196.MsgPostMetric;
            fromAmino(object: _196.MsgPostMetricAmino): _196.MsgPostMetric;
            toAmino(message: _196.MsgPostMetric): _196.MsgPostMetricAmino;
            fromAminoMsg(object: _196.MsgPostMetricAminoMsg): _196.MsgPostMetric;
            fromProtoMsg(message: _196.MsgPostMetricProtoMsg): _196.MsgPostMetric;
            toProto(message: _196.MsgPostMetric): Uint8Array;
            toProtoMsg(message: _196.MsgPostMetric): _196.MsgPostMetricProtoMsg;
        };
        InstantiateOracleCallback: {
            typeUrl: string;
            encode(message: _195.InstantiateOracleCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _195.InstantiateOracleCallback;
            fromPartial(object: Partial<_195.InstantiateOracleCallback>): _195.InstantiateOracleCallback;
            fromAmino(object: _195.InstantiateOracleCallbackAmino): _195.InstantiateOracleCallback;
            toAmino(message: _195.InstantiateOracleCallback): _195.InstantiateOracleCallbackAmino;
            fromAminoMsg(object: _195.InstantiateOracleCallbackAminoMsg): _195.InstantiateOracleCallback;
            fromProtoMsg(message: _195.InstantiateOracleCallbackProtoMsg): _195.InstantiateOracleCallback;
            toProto(message: _195.InstantiateOracleCallback): Uint8Array;
            toProtoMsg(message: _195.InstantiateOracleCallback): _195.InstantiateOracleCallbackProtoMsg;
        };
        UpdateOracleCallback: {
            typeUrl: string;
            encode(message: _195.UpdateOracleCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _195.UpdateOracleCallback;
            fromPartial(object: Partial<_195.UpdateOracleCallback>): _195.UpdateOracleCallback;
            fromAmino(object: _195.UpdateOracleCallbackAmino): _195.UpdateOracleCallback;
            toAmino(message: _195.UpdateOracleCallback): _195.UpdateOracleCallbackAmino;
            fromAminoMsg(object: _195.UpdateOracleCallbackAminoMsg): _195.UpdateOracleCallback;
            fromProtoMsg(message: _195.UpdateOracleCallbackProtoMsg): _195.UpdateOracleCallback;
            toProto(message: _195.UpdateOracleCallback): Uint8Array;
            toProtoMsg(message: _195.UpdateOracleCallback): _195.UpdateOracleCallbackProtoMsg;
        };
    };
    namespace interchainquery {
        const v1: {
            MsgClientImpl: typeof _372.MsgClientImpl;
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitQueryResponse(value: _202.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitQueryResponse(value: _202.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _202.MsgSubmitQueryResponse;
                    };
                };
                fromPartial: {
                    submitQueryResponse(value: _202.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _202.MsgSubmitQueryResponse;
                    };
                };
            };
            AminoConverter: {
                "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
                    aminoType: string;
                    toAmino: (message: _202.MsgSubmitQueryResponse) => _202.MsgSubmitQueryResponseAmino;
                    fromAmino: (object: _202.MsgSubmitQueryResponseAmino) => _202.MsgSubmitQueryResponse;
                };
            };
            QueryPendingQueriesRequest: {
                typeUrl: string;
                encode(_: _203.QueryPendingQueriesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.QueryPendingQueriesRequest;
                fromPartial(_: Partial<_203.QueryPendingQueriesRequest>): _203.QueryPendingQueriesRequest;
                fromAmino(_: _203.QueryPendingQueriesRequestAmino): _203.QueryPendingQueriesRequest;
                toAmino(_: _203.QueryPendingQueriesRequest): _203.QueryPendingQueriesRequestAmino;
                fromAminoMsg(object: _203.QueryPendingQueriesRequestAminoMsg): _203.QueryPendingQueriesRequest;
                fromProtoMsg(message: _203.QueryPendingQueriesRequestProtoMsg): _203.QueryPendingQueriesRequest;
                toProto(message: _203.QueryPendingQueriesRequest): Uint8Array;
                toProtoMsg(message: _203.QueryPendingQueriesRequest): _203.QueryPendingQueriesRequestProtoMsg;
            };
            QueryPendingQueriesResponse: {
                typeUrl: string;
                encode(message: _203.QueryPendingQueriesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.QueryPendingQueriesResponse;
                fromPartial(object: Partial<_203.QueryPendingQueriesResponse>): _203.QueryPendingQueriesResponse;
                fromAmino(object: _203.QueryPendingQueriesResponseAmino): _203.QueryPendingQueriesResponse;
                toAmino(message: _203.QueryPendingQueriesResponse): _203.QueryPendingQueriesResponseAmino;
                fromAminoMsg(object: _203.QueryPendingQueriesResponseAminoMsg): _203.QueryPendingQueriesResponse;
                fromProtoMsg(message: _203.QueryPendingQueriesResponseProtoMsg): _203.QueryPendingQueriesResponse;
                toProto(message: _203.QueryPendingQueriesResponse): Uint8Array;
                toProtoMsg(message: _203.QueryPendingQueriesResponse): _203.QueryPendingQueriesResponseProtoMsg;
            };
            MsgSubmitQueryResponse: {
                typeUrl: string;
                encode(message: _202.MsgSubmitQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.MsgSubmitQueryResponse;
                fromPartial(object: Partial<_202.MsgSubmitQueryResponse>): _202.MsgSubmitQueryResponse;
                fromAmino(object: _202.MsgSubmitQueryResponseAmino): _202.MsgSubmitQueryResponse;
                toAmino(message: _202.MsgSubmitQueryResponse): _202.MsgSubmitQueryResponseAmino;
                fromAminoMsg(object: _202.MsgSubmitQueryResponseAminoMsg): _202.MsgSubmitQueryResponse;
                fromProtoMsg(message: _202.MsgSubmitQueryResponseProtoMsg): _202.MsgSubmitQueryResponse;
                toProto(message: _202.MsgSubmitQueryResponse): Uint8Array;
                toProtoMsg(message: _202.MsgSubmitQueryResponse): _202.MsgSubmitQueryResponseProtoMsg;
            };
            MsgSubmitQueryResponseResponse: {
                typeUrl: string;
                encode(_: _202.MsgSubmitQueryResponseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.MsgSubmitQueryResponseResponse;
                fromPartial(_: Partial<_202.MsgSubmitQueryResponseResponse>): _202.MsgSubmitQueryResponseResponse;
                fromAmino(_: _202.MsgSubmitQueryResponseResponseAmino): _202.MsgSubmitQueryResponseResponse;
                toAmino(_: _202.MsgSubmitQueryResponseResponse): _202.MsgSubmitQueryResponseResponseAmino;
                fromAminoMsg(object: _202.MsgSubmitQueryResponseResponseAminoMsg): _202.MsgSubmitQueryResponseResponse;
                fromProtoMsg(message: _202.MsgSubmitQueryResponseResponseProtoMsg): _202.MsgSubmitQueryResponseResponse;
                toProto(message: _202.MsgSubmitQueryResponseResponse): Uint8Array;
                toProtoMsg(message: _202.MsgSubmitQueryResponseResponse): _202.MsgSubmitQueryResponseResponseProtoMsg;
            };
            timeoutPolicyFromJSON(object: any): _201.TimeoutPolicy;
            timeoutPolicyToJSON(object: _201.TimeoutPolicy): string;
            TimeoutPolicy: typeof _201.TimeoutPolicy;
            TimeoutPolicySDKType: typeof _201.TimeoutPolicy;
            TimeoutPolicyAmino: typeof _201.TimeoutPolicy;
            Query: {
                typeUrl: string;
                encode(message: _201.Query, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.Query;
                fromPartial(object: Partial<_201.Query>): _201.Query;
                fromAmino(object: _201.QueryAmino): _201.Query;
                toAmino(message: _201.Query): _201.QueryAmino;
                fromAminoMsg(object: _201.QueryAminoMsg): _201.Query;
                fromProtoMsg(message: _201.QueryProtoMsg): _201.Query;
                toProto(message: _201.Query): Uint8Array;
                toProtoMsg(message: _201.Query): _201.QueryProtoMsg;
            };
            DataPoint: {
                typeUrl: string;
                encode(message: _201.DataPoint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.DataPoint;
                fromPartial(object: Partial<_201.DataPoint>): _201.DataPoint;
                fromAmino(object: _201.DataPointAmino): _201.DataPoint;
                toAmino(message: _201.DataPoint): _201.DataPointAmino;
                fromAminoMsg(object: _201.DataPointAminoMsg): _201.DataPoint;
                fromProtoMsg(message: _201.DataPointProtoMsg): _201.DataPoint;
                toProto(message: _201.DataPoint): Uint8Array;
                toProtoMsg(message: _201.DataPoint): _201.DataPointProtoMsg;
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
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _364.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _206.QueryParamsRequest): Promise<_206.QueryParamsResponse>;
                epochProvisions(request?: _206.QueryEpochProvisionsRequest): Promise<_206.QueryEpochProvisionsResponse>;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _206.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryParamsRequest;
                fromPartial(_: Partial<_206.QueryParamsRequest>): _206.QueryParamsRequest;
                fromAmino(_: _206.QueryParamsRequestAmino): _206.QueryParamsRequest;
                toAmino(_: _206.QueryParamsRequest): _206.QueryParamsRequestAmino;
                fromAminoMsg(object: _206.QueryParamsRequestAminoMsg): _206.QueryParamsRequest;
                fromProtoMsg(message: _206.QueryParamsRequestProtoMsg): _206.QueryParamsRequest;
                toProto(message: _206.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _206.QueryParamsRequest): _206.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _206.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryParamsResponse;
                fromPartial(object: Partial<_206.QueryParamsResponse>): _206.QueryParamsResponse;
                fromAmino(object: _206.QueryParamsResponseAmino): _206.QueryParamsResponse;
                toAmino(message: _206.QueryParamsResponse): _206.QueryParamsResponseAmino;
                fromAminoMsg(object: _206.QueryParamsResponseAminoMsg): _206.QueryParamsResponse;
                fromProtoMsg(message: _206.QueryParamsResponseProtoMsg): _206.QueryParamsResponse;
                toProto(message: _206.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _206.QueryParamsResponse): _206.QueryParamsResponseProtoMsg;
            };
            QueryEpochProvisionsRequest: {
                typeUrl: string;
                encode(_: _206.QueryEpochProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_206.QueryEpochProvisionsRequest>): _206.QueryEpochProvisionsRequest;
                fromAmino(_: _206.QueryEpochProvisionsRequestAmino): _206.QueryEpochProvisionsRequest;
                toAmino(_: _206.QueryEpochProvisionsRequest): _206.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _206.QueryEpochProvisionsRequestAminoMsg): _206.QueryEpochProvisionsRequest;
                fromProtoMsg(message: _206.QueryEpochProvisionsRequestProtoMsg): _206.QueryEpochProvisionsRequest;
                toProto(message: _206.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _206.QueryEpochProvisionsRequest): _206.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                typeUrl: string;
                encode(message: _206.QueryEpochProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_206.QueryEpochProvisionsResponse>): _206.QueryEpochProvisionsResponse;
                fromAmino(object: _206.QueryEpochProvisionsResponseAmino): _206.QueryEpochProvisionsResponse;
                toAmino(message: _206.QueryEpochProvisionsResponse): _206.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _206.QueryEpochProvisionsResponseAminoMsg): _206.QueryEpochProvisionsResponse;
                fromProtoMsg(message: _206.QueryEpochProvisionsResponseProtoMsg): _206.QueryEpochProvisionsResponse;
                toProto(message: _206.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _206.QueryEpochProvisionsResponse): _206.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _205.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.Minter;
                fromPartial(object: Partial<_205.Minter>): _205.Minter;
                fromAmino(object: _205.MinterAmino): _205.Minter;
                toAmino(message: _205.Minter): _205.MinterAmino;
                fromAminoMsg(object: _205.MinterAminoMsg): _205.Minter;
                fromProtoMsg(message: _205.MinterProtoMsg): _205.Minter;
                toProto(message: _205.Minter): Uint8Array;
                toProtoMsg(message: _205.Minter): _205.MinterProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                encode(message: _205.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.DistributionProportions;
                fromPartial(object: Partial<_205.DistributionProportions>): _205.DistributionProportions;
                fromAmino(object: _205.DistributionProportionsAmino): _205.DistributionProportions;
                toAmino(message: _205.DistributionProportions): _205.DistributionProportionsAmino;
                fromAminoMsg(object: _205.DistributionProportionsAminoMsg): _205.DistributionProportions;
                fromProtoMsg(message: _205.DistributionProportionsProtoMsg): _205.DistributionProportions;
                toProto(message: _205.DistributionProportions): Uint8Array;
                toProtoMsg(message: _205.DistributionProportions): _205.DistributionProportionsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _205.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.Params;
                fromPartial(object: Partial<_205.Params>): _205.Params;
                fromAmino(object: _205.ParamsAmino): _205.Params;
                toAmino(message: _205.Params): _205.ParamsAmino;
                fromAminoMsg(object: _205.ParamsAminoMsg): _205.Params;
                fromProtoMsg(message: _205.ParamsProtoMsg): _205.Params;
                toProto(message: _205.Params): Uint8Array;
                toProtoMsg(message: _205.Params): _205.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _204.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.GenesisState;
                fromPartial(object: Partial<_204.GenesisState>): _204.GenesisState;
                fromAmino(object: _204.GenesisStateAmino): _204.GenesisState;
                toAmino(message: _204.GenesisState): _204.GenesisStateAmino;
                fromAminoMsg(object: _204.GenesisStateAminoMsg): _204.GenesisState;
                fromProtoMsg(message: _204.GenesisStateProtoMsg): _204.GenesisState;
                toProto(message: _204.GenesisState): Uint8Array;
                toProtoMsg(message: _204.GenesisState): _204.GenesisStateProtoMsg;
            };
        };
    }
    const records: {
        QueryClientImpl: typeof _365.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _210.QueryParamsRequest): Promise<_210.QueryParamsResponse>;
            userRedemptionRecord(request: _210.QueryGetUserRedemptionRecordRequest): Promise<_210.QueryGetUserRedemptionRecordResponse>;
            userRedemptionRecordAll(request?: _210.QueryAllUserRedemptionRecordRequest): Promise<_210.QueryAllUserRedemptionRecordResponse>;
            userRedemptionRecordForUser(request: _210.QueryAllUserRedemptionRecordForUserRequest): Promise<_210.QueryAllUserRedemptionRecordForUserResponse>;
            epochUnbondingRecord(request: _210.QueryGetEpochUnbondingRecordRequest): Promise<_210.QueryGetEpochUnbondingRecordResponse>;
            epochUnbondingRecordAll(request?: _210.QueryAllEpochUnbondingRecordRequest): Promise<_210.QueryAllEpochUnbondingRecordResponse>;
            depositRecord(request: _210.QueryGetDepositRecordRequest): Promise<_210.QueryGetDepositRecordResponse>;
            depositRecordAll(request?: _210.QueryAllDepositRecordRequest): Promise<_210.QueryAllDepositRecordResponse>;
            depositRecordByHost(request: _210.QueryDepositRecordByHostRequest): Promise<_210.QueryDepositRecordByHostResponse>;
            lSMDeposit(request: _210.QueryLSMDepositRequest): Promise<_210.QueryLSMDepositResponse>;
            lSMDeposits(request: _210.QueryLSMDepositsRequest): Promise<_210.QueryLSMDepositsResponse>;
        };
        depositRecord_StatusFromJSON(object: any): _211.DepositRecord_Status;
        depositRecord_StatusToJSON(object: _211.DepositRecord_Status): string;
        depositRecord_SourceFromJSON(object: any): _211.DepositRecord_Source;
        depositRecord_SourceToJSON(object: _211.DepositRecord_Source): string;
        hostZoneUnbonding_StatusFromJSON(object: any): _211.HostZoneUnbonding_Status;
        hostZoneUnbonding_StatusToJSON(object: _211.HostZoneUnbonding_Status): string;
        lSMTokenDeposit_StatusFromJSON(object: any): _211.LSMTokenDeposit_Status;
        lSMTokenDeposit_StatusToJSON(object: _211.LSMTokenDeposit_Status): string;
        DepositRecord_Status: typeof _211.DepositRecord_Status;
        DepositRecord_StatusSDKType: typeof _211.DepositRecord_Status;
        DepositRecord_StatusAmino: typeof _211.DepositRecord_Status;
        DepositRecord_Source: typeof _211.DepositRecord_Source;
        DepositRecord_SourceSDKType: typeof _211.DepositRecord_Source;
        DepositRecord_SourceAmino: typeof _211.DepositRecord_Source;
        HostZoneUnbonding_Status: typeof _211.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusSDKType: typeof _211.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusAmino: typeof _211.HostZoneUnbonding_Status;
        LSMTokenDeposit_Status: typeof _211.LSMTokenDeposit_Status;
        LSMTokenDeposit_StatusSDKType: typeof _211.LSMTokenDeposit_Status;
        LSMTokenDeposit_StatusAmino: typeof _211.LSMTokenDeposit_Status;
        UserRedemptionRecord: {
            typeUrl: string;
            encode(message: _211.UserRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.UserRedemptionRecord;
            fromPartial(object: Partial<_211.UserRedemptionRecord>): _211.UserRedemptionRecord;
            fromAmino(object: _211.UserRedemptionRecordAmino): _211.UserRedemptionRecord;
            toAmino(message: _211.UserRedemptionRecord): _211.UserRedemptionRecordAmino;
            fromAminoMsg(object: _211.UserRedemptionRecordAminoMsg): _211.UserRedemptionRecord;
            fromProtoMsg(message: _211.UserRedemptionRecordProtoMsg): _211.UserRedemptionRecord;
            toProto(message: _211.UserRedemptionRecord): Uint8Array;
            toProtoMsg(message: _211.UserRedemptionRecord): _211.UserRedemptionRecordProtoMsg;
        };
        DepositRecord: {
            typeUrl: string;
            encode(message: _211.DepositRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.DepositRecord;
            fromPartial(object: Partial<_211.DepositRecord>): _211.DepositRecord;
            fromAmino(object: _211.DepositRecordAmino): _211.DepositRecord;
            toAmino(message: _211.DepositRecord): _211.DepositRecordAmino;
            fromAminoMsg(object: _211.DepositRecordAminoMsg): _211.DepositRecord;
            fromProtoMsg(message: _211.DepositRecordProtoMsg): _211.DepositRecord;
            toProto(message: _211.DepositRecord): Uint8Array;
            toProtoMsg(message: _211.DepositRecord): _211.DepositRecordProtoMsg;
        };
        HostZoneUnbonding: {
            typeUrl: string;
            encode(message: _211.HostZoneUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.HostZoneUnbonding;
            fromPartial(object: Partial<_211.HostZoneUnbonding>): _211.HostZoneUnbonding;
            fromAmino(object: _211.HostZoneUnbondingAmino): _211.HostZoneUnbonding;
            toAmino(message: _211.HostZoneUnbonding): _211.HostZoneUnbondingAmino;
            fromAminoMsg(object: _211.HostZoneUnbondingAminoMsg): _211.HostZoneUnbonding;
            fromProtoMsg(message: _211.HostZoneUnbondingProtoMsg): _211.HostZoneUnbonding;
            toProto(message: _211.HostZoneUnbonding): Uint8Array;
            toProtoMsg(message: _211.HostZoneUnbonding): _211.HostZoneUnbondingProtoMsg;
        };
        EpochUnbondingRecord: {
            typeUrl: string;
            encode(message: _211.EpochUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.EpochUnbondingRecord;
            fromPartial(object: Partial<_211.EpochUnbondingRecord>): _211.EpochUnbondingRecord;
            fromAmino(object: _211.EpochUnbondingRecordAmino): _211.EpochUnbondingRecord;
            toAmino(message: _211.EpochUnbondingRecord): _211.EpochUnbondingRecordAmino;
            fromAminoMsg(object: _211.EpochUnbondingRecordAminoMsg): _211.EpochUnbondingRecord;
            fromProtoMsg(message: _211.EpochUnbondingRecordProtoMsg): _211.EpochUnbondingRecord;
            toProto(message: _211.EpochUnbondingRecord): Uint8Array;
            toProtoMsg(message: _211.EpochUnbondingRecord): _211.EpochUnbondingRecordProtoMsg;
        };
        LSMTokenDeposit: {
            typeUrl: string;
            encode(message: _211.LSMTokenDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.LSMTokenDeposit;
            fromPartial(object: Partial<_211.LSMTokenDeposit>): _211.LSMTokenDeposit;
            fromAmino(object: _211.LSMTokenDepositAmino): _211.LSMTokenDeposit;
            toAmino(message: _211.LSMTokenDeposit): _211.LSMTokenDepositAmino;
            fromAminoMsg(object: _211.LSMTokenDepositAminoMsg): _211.LSMTokenDeposit;
            fromProtoMsg(message: _211.LSMTokenDepositProtoMsg): _211.LSMTokenDeposit;
            toProto(message: _211.LSMTokenDeposit): Uint8Array;
            toProtoMsg(message: _211.LSMTokenDeposit): _211.LSMTokenDepositProtoMsg;
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
        QueryGetDepositRecordRequest: {
            typeUrl: string;
            encode(message: _210.QueryGetDepositRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.QueryGetDepositRecordRequest;
            fromPartial(object: Partial<_210.QueryGetDepositRecordRequest>): _210.QueryGetDepositRecordRequest;
            fromAmino(object: _210.QueryGetDepositRecordRequestAmino): _210.QueryGetDepositRecordRequest;
            toAmino(message: _210.QueryGetDepositRecordRequest): _210.QueryGetDepositRecordRequestAmino;
            fromAminoMsg(object: _210.QueryGetDepositRecordRequestAminoMsg): _210.QueryGetDepositRecordRequest;
            fromProtoMsg(message: _210.QueryGetDepositRecordRequestProtoMsg): _210.QueryGetDepositRecordRequest;
            toProto(message: _210.QueryGetDepositRecordRequest): Uint8Array;
            toProtoMsg(message: _210.QueryGetDepositRecordRequest): _210.QueryGetDepositRecordRequestProtoMsg;
        };
        QueryGetDepositRecordResponse: {
            typeUrl: string;
            encode(message: _210.QueryGetDepositRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.QueryGetDepositRecordResponse;
            fromPartial(object: Partial<_210.QueryGetDepositRecordResponse>): _210.QueryGetDepositRecordResponse;
            fromAmino(object: _210.QueryGetDepositRecordResponseAmino): _210.QueryGetDepositRecordResponse;
            toAmino(message: _210.QueryGetDepositRecordResponse): _210.QueryGetDepositRecordResponseAmino;
            fromAminoMsg(object: _210.QueryGetDepositRecordResponseAminoMsg): _210.QueryGetDepositRecordResponse;
            fromProtoMsg(message: _210.QueryGetDepositRecordResponseProtoMsg): _210.QueryGetDepositRecordResponse;
            toProto(message: _210.QueryGetDepositRecordResponse): Uint8Array;
            toProtoMsg(message: _210.QueryGetDepositRecordResponse): _210.QueryGetDepositRecordResponseProtoMsg;
        };
        QueryAllDepositRecordRequest: {
            typeUrl: string;
            encode(message: _210.QueryAllDepositRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.QueryAllDepositRecordRequest;
            fromPartial(object: Partial<_210.QueryAllDepositRecordRequest>): _210.QueryAllDepositRecordRequest;
            fromAmino(object: _210.QueryAllDepositRecordRequestAmino): _210.QueryAllDepositRecordRequest;
            toAmino(message: _210.QueryAllDepositRecordRequest): _210.QueryAllDepositRecordRequestAmino;
            fromAminoMsg(object: _210.QueryAllDepositRecordRequestAminoMsg): _210.QueryAllDepositRecordRequest;
            fromProtoMsg(message: _210.QueryAllDepositRecordRequestProtoMsg): _210.QueryAllDepositRecordRequest;
            toProto(message: _210.QueryAllDepositRecordRequest): Uint8Array;
            toProtoMsg(message: _210.QueryAllDepositRecordRequest): _210.QueryAllDepositRecordRequestProtoMsg;
        };
        QueryAllDepositRecordResponse: {
            typeUrl: string;
            encode(message: _210.QueryAllDepositRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.QueryAllDepositRecordResponse;
            fromPartial(object: Partial<_210.QueryAllDepositRecordResponse>): _210.QueryAllDepositRecordResponse;
            fromAmino(object: _210.QueryAllDepositRecordResponseAmino): _210.QueryAllDepositRecordResponse;
            toAmino(message: _210.QueryAllDepositRecordResponse): _210.QueryAllDepositRecordResponseAmino;
            fromAminoMsg(object: _210.QueryAllDepositRecordResponseAminoMsg): _210.QueryAllDepositRecordResponse;
            fromProtoMsg(message: _210.QueryAllDepositRecordResponseProtoMsg): _210.QueryAllDepositRecordResponse;
            toProto(message: _210.QueryAllDepositRecordResponse): Uint8Array;
            toProtoMsg(message: _210.QueryAllDepositRecordResponse): _210.QueryAllDepositRecordResponseProtoMsg;
        };
        QueryDepositRecordByHostRequest: {
            typeUrl: string;
            encode(message: _210.QueryDepositRecordByHostRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.QueryDepositRecordByHostRequest;
            fromPartial(object: Partial<_210.QueryDepositRecordByHostRequest>): _210.QueryDepositRecordByHostRequest;
            fromAmino(object: _210.QueryDepositRecordByHostRequestAmino): _210.QueryDepositRecordByHostRequest;
            toAmino(message: _210.QueryDepositRecordByHostRequest): _210.QueryDepositRecordByHostRequestAmino;
            fromAminoMsg(object: _210.QueryDepositRecordByHostRequestAminoMsg): _210.QueryDepositRecordByHostRequest;
            fromProtoMsg(message: _210.QueryDepositRecordByHostRequestProtoMsg): _210.QueryDepositRecordByHostRequest;
            toProto(message: _210.QueryDepositRecordByHostRequest): Uint8Array;
            toProtoMsg(message: _210.QueryDepositRecordByHostRequest): _210.QueryDepositRecordByHostRequestProtoMsg;
        };
        QueryDepositRecordByHostResponse: {
            typeUrl: string;
            encode(message: _210.QueryDepositRecordByHostResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.QueryDepositRecordByHostResponse;
            fromPartial(object: Partial<_210.QueryDepositRecordByHostResponse>): _210.QueryDepositRecordByHostResponse;
            fromAmino(object: _210.QueryDepositRecordByHostResponseAmino): _210.QueryDepositRecordByHostResponse;
            toAmino(message: _210.QueryDepositRecordByHostResponse): _210.QueryDepositRecordByHostResponseAmino;
            fromAminoMsg(object: _210.QueryDepositRecordByHostResponseAminoMsg): _210.QueryDepositRecordByHostResponse;
            fromProtoMsg(message: _210.QueryDepositRecordByHostResponseProtoMsg): _210.QueryDepositRecordByHostResponse;
            toProto(message: _210.QueryDepositRecordByHostResponse): Uint8Array;
            toProtoMsg(message: _210.QueryDepositRecordByHostResponse): _210.QueryDepositRecordByHostResponseProtoMsg;
        };
        QueryGetUserRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _210.QueryGetUserRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.QueryGetUserRedemptionRecordRequest;
            fromPartial(object: Partial<_210.QueryGetUserRedemptionRecordRequest>): _210.QueryGetUserRedemptionRecordRequest;
            fromAmino(object: _210.QueryGetUserRedemptionRecordRequestAmino): _210.QueryGetUserRedemptionRecordRequest;
            toAmino(message: _210.QueryGetUserRedemptionRecordRequest): _210.QueryGetUserRedemptionRecordRequestAmino;
            fromAminoMsg(object: _210.QueryGetUserRedemptionRecordRequestAminoMsg): _210.QueryGetUserRedemptionRecordRequest;
            fromProtoMsg(message: _210.QueryGetUserRedemptionRecordRequestProtoMsg): _210.QueryGetUserRedemptionRecordRequest;
            toProto(message: _210.QueryGetUserRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _210.QueryGetUserRedemptionRecordRequest): _210.QueryGetUserRedemptionRecordRequestProtoMsg;
        };
        QueryGetUserRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _210.QueryGetUserRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.QueryGetUserRedemptionRecordResponse;
            fromPartial(object: Partial<_210.QueryGetUserRedemptionRecordResponse>): _210.QueryGetUserRedemptionRecordResponse;
            fromAmino(object: _210.QueryGetUserRedemptionRecordResponseAmino): _210.QueryGetUserRedemptionRecordResponse;
            toAmino(message: _210.QueryGetUserRedemptionRecordResponse): _210.QueryGetUserRedemptionRecordResponseAmino;
            fromAminoMsg(object: _210.QueryGetUserRedemptionRecordResponseAminoMsg): _210.QueryGetUserRedemptionRecordResponse;
            fromProtoMsg(message: _210.QueryGetUserRedemptionRecordResponseProtoMsg): _210.QueryGetUserRedemptionRecordResponse;
            toProto(message: _210.QueryGetUserRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _210.QueryGetUserRedemptionRecordResponse): _210.QueryGetUserRedemptionRecordResponseProtoMsg;
        };
        QueryAllUserRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _210.QueryAllUserRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.QueryAllUserRedemptionRecordRequest;
            fromPartial(object: Partial<_210.QueryAllUserRedemptionRecordRequest>): _210.QueryAllUserRedemptionRecordRequest;
            fromAmino(object: _210.QueryAllUserRedemptionRecordRequestAmino): _210.QueryAllUserRedemptionRecordRequest;
            toAmino(message: _210.QueryAllUserRedemptionRecordRequest): _210.QueryAllUserRedemptionRecordRequestAmino;
            fromAminoMsg(object: _210.QueryAllUserRedemptionRecordRequestAminoMsg): _210.QueryAllUserRedemptionRecordRequest;
            fromProtoMsg(message: _210.QueryAllUserRedemptionRecordRequestProtoMsg): _210.QueryAllUserRedemptionRecordRequest;
            toProto(message: _210.QueryAllUserRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _210.QueryAllUserRedemptionRecordRequest): _210.QueryAllUserRedemptionRecordRequestProtoMsg;
        };
        QueryAllUserRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _210.QueryAllUserRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.QueryAllUserRedemptionRecordResponse;
            fromPartial(object: Partial<_210.QueryAllUserRedemptionRecordResponse>): _210.QueryAllUserRedemptionRecordResponse;
            fromAmino(object: _210.QueryAllUserRedemptionRecordResponseAmino): _210.QueryAllUserRedemptionRecordResponse;
            toAmino(message: _210.QueryAllUserRedemptionRecordResponse): _210.QueryAllUserRedemptionRecordResponseAmino;
            fromAminoMsg(object: _210.QueryAllUserRedemptionRecordResponseAminoMsg): _210.QueryAllUserRedemptionRecordResponse;
            fromProtoMsg(message: _210.QueryAllUserRedemptionRecordResponseProtoMsg): _210.QueryAllUserRedemptionRecordResponse;
            toProto(message: _210.QueryAllUserRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _210.QueryAllUserRedemptionRecordResponse): _210.QueryAllUserRedemptionRecordResponseProtoMsg;
        };
        QueryAllUserRedemptionRecordForUserRequest: {
            typeUrl: string;
            encode(message: _210.QueryAllUserRedemptionRecordForUserRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.QueryAllUserRedemptionRecordForUserRequest;
            fromPartial(object: Partial<_210.QueryAllUserRedemptionRecordForUserRequest>): _210.QueryAllUserRedemptionRecordForUserRequest;
            fromAmino(object: _210.QueryAllUserRedemptionRecordForUserRequestAmino): _210.QueryAllUserRedemptionRecordForUserRequest;
            toAmino(message: _210.QueryAllUserRedemptionRecordForUserRequest): _210.QueryAllUserRedemptionRecordForUserRequestAmino;
            fromAminoMsg(object: _210.QueryAllUserRedemptionRecordForUserRequestAminoMsg): _210.QueryAllUserRedemptionRecordForUserRequest;
            fromProtoMsg(message: _210.QueryAllUserRedemptionRecordForUserRequestProtoMsg): _210.QueryAllUserRedemptionRecordForUserRequest;
            toProto(message: _210.QueryAllUserRedemptionRecordForUserRequest): Uint8Array;
            toProtoMsg(message: _210.QueryAllUserRedemptionRecordForUserRequest): _210.QueryAllUserRedemptionRecordForUserRequestProtoMsg;
        };
        QueryAllUserRedemptionRecordForUserResponse: {
            typeUrl: string;
            encode(message: _210.QueryAllUserRedemptionRecordForUserResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.QueryAllUserRedemptionRecordForUserResponse;
            fromPartial(object: Partial<_210.QueryAllUserRedemptionRecordForUserResponse>): _210.QueryAllUserRedemptionRecordForUserResponse;
            fromAmino(object: _210.QueryAllUserRedemptionRecordForUserResponseAmino): _210.QueryAllUserRedemptionRecordForUserResponse;
            toAmino(message: _210.QueryAllUserRedemptionRecordForUserResponse): _210.QueryAllUserRedemptionRecordForUserResponseAmino;
            fromAminoMsg(object: _210.QueryAllUserRedemptionRecordForUserResponseAminoMsg): _210.QueryAllUserRedemptionRecordForUserResponse;
            fromProtoMsg(message: _210.QueryAllUserRedemptionRecordForUserResponseProtoMsg): _210.QueryAllUserRedemptionRecordForUserResponse;
            toProto(message: _210.QueryAllUserRedemptionRecordForUserResponse): Uint8Array;
            toProtoMsg(message: _210.QueryAllUserRedemptionRecordForUserResponse): _210.QueryAllUserRedemptionRecordForUserResponseProtoMsg;
        };
        QueryGetEpochUnbondingRecordRequest: {
            typeUrl: string;
            encode(message: _210.QueryGetEpochUnbondingRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.QueryGetEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_210.QueryGetEpochUnbondingRecordRequest>): _210.QueryGetEpochUnbondingRecordRequest;
            fromAmino(object: _210.QueryGetEpochUnbondingRecordRequestAmino): _210.QueryGetEpochUnbondingRecordRequest;
            toAmino(message: _210.QueryGetEpochUnbondingRecordRequest): _210.QueryGetEpochUnbondingRecordRequestAmino;
            fromAminoMsg(object: _210.QueryGetEpochUnbondingRecordRequestAminoMsg): _210.QueryGetEpochUnbondingRecordRequest;
            fromProtoMsg(message: _210.QueryGetEpochUnbondingRecordRequestProtoMsg): _210.QueryGetEpochUnbondingRecordRequest;
            toProto(message: _210.QueryGetEpochUnbondingRecordRequest): Uint8Array;
            toProtoMsg(message: _210.QueryGetEpochUnbondingRecordRequest): _210.QueryGetEpochUnbondingRecordRequestProtoMsg;
        };
        QueryGetEpochUnbondingRecordResponse: {
            typeUrl: string;
            encode(message: _210.QueryGetEpochUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.QueryGetEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_210.QueryGetEpochUnbondingRecordResponse>): _210.QueryGetEpochUnbondingRecordResponse;
            fromAmino(object: _210.QueryGetEpochUnbondingRecordResponseAmino): _210.QueryGetEpochUnbondingRecordResponse;
            toAmino(message: _210.QueryGetEpochUnbondingRecordResponse): _210.QueryGetEpochUnbondingRecordResponseAmino;
            fromAminoMsg(object: _210.QueryGetEpochUnbondingRecordResponseAminoMsg): _210.QueryGetEpochUnbondingRecordResponse;
            fromProtoMsg(message: _210.QueryGetEpochUnbondingRecordResponseProtoMsg): _210.QueryGetEpochUnbondingRecordResponse;
            toProto(message: _210.QueryGetEpochUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _210.QueryGetEpochUnbondingRecordResponse): _210.QueryGetEpochUnbondingRecordResponseProtoMsg;
        };
        QueryAllEpochUnbondingRecordRequest: {
            typeUrl: string;
            encode(message: _210.QueryAllEpochUnbondingRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.QueryAllEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_210.QueryAllEpochUnbondingRecordRequest>): _210.QueryAllEpochUnbondingRecordRequest;
            fromAmino(object: _210.QueryAllEpochUnbondingRecordRequestAmino): _210.QueryAllEpochUnbondingRecordRequest;
            toAmino(message: _210.QueryAllEpochUnbondingRecordRequest): _210.QueryAllEpochUnbondingRecordRequestAmino;
            fromAminoMsg(object: _210.QueryAllEpochUnbondingRecordRequestAminoMsg): _210.QueryAllEpochUnbondingRecordRequest;
            fromProtoMsg(message: _210.QueryAllEpochUnbondingRecordRequestProtoMsg): _210.QueryAllEpochUnbondingRecordRequest;
            toProto(message: _210.QueryAllEpochUnbondingRecordRequest): Uint8Array;
            toProtoMsg(message: _210.QueryAllEpochUnbondingRecordRequest): _210.QueryAllEpochUnbondingRecordRequestProtoMsg;
        };
        QueryAllEpochUnbondingRecordResponse: {
            typeUrl: string;
            encode(message: _210.QueryAllEpochUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.QueryAllEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_210.QueryAllEpochUnbondingRecordResponse>): _210.QueryAllEpochUnbondingRecordResponse;
            fromAmino(object: _210.QueryAllEpochUnbondingRecordResponseAmino): _210.QueryAllEpochUnbondingRecordResponse;
            toAmino(message: _210.QueryAllEpochUnbondingRecordResponse): _210.QueryAllEpochUnbondingRecordResponseAmino;
            fromAminoMsg(object: _210.QueryAllEpochUnbondingRecordResponseAminoMsg): _210.QueryAllEpochUnbondingRecordResponse;
            fromProtoMsg(message: _210.QueryAllEpochUnbondingRecordResponseProtoMsg): _210.QueryAllEpochUnbondingRecordResponse;
            toProto(message: _210.QueryAllEpochUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _210.QueryAllEpochUnbondingRecordResponse): _210.QueryAllEpochUnbondingRecordResponseProtoMsg;
        };
        QueryLSMDepositRequest: {
            typeUrl: string;
            encode(message: _210.QueryLSMDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.QueryLSMDepositRequest;
            fromPartial(object: Partial<_210.QueryLSMDepositRequest>): _210.QueryLSMDepositRequest;
            fromAmino(object: _210.QueryLSMDepositRequestAmino): _210.QueryLSMDepositRequest;
            toAmino(message: _210.QueryLSMDepositRequest): _210.QueryLSMDepositRequestAmino;
            fromAminoMsg(object: _210.QueryLSMDepositRequestAminoMsg): _210.QueryLSMDepositRequest;
            fromProtoMsg(message: _210.QueryLSMDepositRequestProtoMsg): _210.QueryLSMDepositRequest;
            toProto(message: _210.QueryLSMDepositRequest): Uint8Array;
            toProtoMsg(message: _210.QueryLSMDepositRequest): _210.QueryLSMDepositRequestProtoMsg;
        };
        QueryLSMDepositResponse: {
            typeUrl: string;
            encode(message: _210.QueryLSMDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.QueryLSMDepositResponse;
            fromPartial(object: Partial<_210.QueryLSMDepositResponse>): _210.QueryLSMDepositResponse;
            fromAmino(object: _210.QueryLSMDepositResponseAmino): _210.QueryLSMDepositResponse;
            toAmino(message: _210.QueryLSMDepositResponse): _210.QueryLSMDepositResponseAmino;
            fromAminoMsg(object: _210.QueryLSMDepositResponseAminoMsg): _210.QueryLSMDepositResponse;
            fromProtoMsg(message: _210.QueryLSMDepositResponseProtoMsg): _210.QueryLSMDepositResponse;
            toProto(message: _210.QueryLSMDepositResponse): Uint8Array;
            toProtoMsg(message: _210.QueryLSMDepositResponse): _210.QueryLSMDepositResponseProtoMsg;
        };
        QueryLSMDepositsRequest: {
            typeUrl: string;
            encode(message: _210.QueryLSMDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.QueryLSMDepositsRequest;
            fromPartial(object: Partial<_210.QueryLSMDepositsRequest>): _210.QueryLSMDepositsRequest;
            fromAmino(object: _210.QueryLSMDepositsRequestAmino): _210.QueryLSMDepositsRequest;
            toAmino(message: _210.QueryLSMDepositsRequest): _210.QueryLSMDepositsRequestAmino;
            fromAminoMsg(object: _210.QueryLSMDepositsRequestAminoMsg): _210.QueryLSMDepositsRequest;
            fromProtoMsg(message: _210.QueryLSMDepositsRequestProtoMsg): _210.QueryLSMDepositsRequest;
            toProto(message: _210.QueryLSMDepositsRequest): Uint8Array;
            toProtoMsg(message: _210.QueryLSMDepositsRequest): _210.QueryLSMDepositsRequestProtoMsg;
        };
        QueryLSMDepositsResponse: {
            typeUrl: string;
            encode(message: _210.QueryLSMDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.QueryLSMDepositsResponse;
            fromPartial(object: Partial<_210.QueryLSMDepositsResponse>): _210.QueryLSMDepositsResponse;
            fromAmino(object: _210.QueryLSMDepositsResponseAmino): _210.QueryLSMDepositsResponse;
            toAmino(message: _210.QueryLSMDepositsResponse): _210.QueryLSMDepositsResponseAmino;
            fromAminoMsg(object: _210.QueryLSMDepositsResponseAminoMsg): _210.QueryLSMDepositsResponse;
            fromProtoMsg(message: _210.QueryLSMDepositsResponseProtoMsg): _210.QueryLSMDepositsResponse;
            toProto(message: _210.QueryLSMDepositsResponse): Uint8Array;
            toProtoMsg(message: _210.QueryLSMDepositsResponse): _210.QueryLSMDepositsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _209.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.Params;
            fromPartial(_: Partial<_209.Params>): _209.Params;
            fromAmino(_: _209.ParamsAmino): _209.Params;
            toAmino(_: _209.Params): _209.ParamsAmino;
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
        TransferCallback: {
            typeUrl: string;
            encode(message: _207.TransferCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.TransferCallback;
            fromPartial(object: Partial<_207.TransferCallback>): _207.TransferCallback;
            fromAmino(object: _207.TransferCallbackAmino): _207.TransferCallback;
            toAmino(message: _207.TransferCallback): _207.TransferCallbackAmino;
            fromAminoMsg(object: _207.TransferCallbackAminoMsg): _207.TransferCallback;
            fromProtoMsg(message: _207.TransferCallbackProtoMsg): _207.TransferCallback;
            toProto(message: _207.TransferCallback): Uint8Array;
            toProtoMsg(message: _207.TransferCallback): _207.TransferCallbackProtoMsg;
        };
        TransferLSMTokenCallback: {
            typeUrl: string;
            encode(message: _207.TransferLSMTokenCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.TransferLSMTokenCallback;
            fromPartial(object: Partial<_207.TransferLSMTokenCallback>): _207.TransferLSMTokenCallback;
            fromAmino(object: _207.TransferLSMTokenCallbackAmino): _207.TransferLSMTokenCallback;
            toAmino(message: _207.TransferLSMTokenCallback): _207.TransferLSMTokenCallbackAmino;
            fromAminoMsg(object: _207.TransferLSMTokenCallbackAminoMsg): _207.TransferLSMTokenCallback;
            fromProtoMsg(message: _207.TransferLSMTokenCallbackProtoMsg): _207.TransferLSMTokenCallback;
            toProto(message: _207.TransferLSMTokenCallback): Uint8Array;
            toProtoMsg(message: _207.TransferLSMTokenCallback): _207.TransferLSMTokenCallbackProtoMsg;
        };
    };
    const stakedym: {
        MsgClientImpl: typeof _373.MsgClientImpl;
        QueryClientImpl: typeof _366.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            hostZone(request?: _213.QueryHostZoneRequest): Promise<_213.QueryHostZoneResponse>;
            delegationRecords(request: _213.QueryDelegationRecordsRequest): Promise<_213.QueryDelegationRecordsResponse>;
            unbondingRecords(request: _213.QueryUnbondingRecordsRequest): Promise<_213.QueryUnbondingRecordsResponse>;
            redemptionRecord(request: _213.QueryRedemptionRecordRequest): Promise<_213.QueryRedemptionRecordResponse>;
            redemptionRecords(request: _213.QueryRedemptionRecordsRequest): Promise<_213.QueryRedemptionRecordsResponse>;
            slashRecords(request?: _213.QuerySlashRecordsRequest): Promise<_213.QuerySlashRecordsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _215.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _215.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmDelegation(value: _215.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUndelegation(value: _215.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUnbondedTokenSweep(value: _215.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                adjustDelegatedBalance(value: _215.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _215.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _215.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                refreshRedemptionRate(value: _215.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteDelegationRecord(value: _215.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteUnbondingRecord(value: _215.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteRedemptionRecord(value: _215.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOperatorAddress(value: _215.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _215.MsgLiquidStake): {
                    typeUrl: string;
                    value: _215.MsgLiquidStake;
                };
                redeemStake(value: _215.MsgRedeemStake): {
                    typeUrl: string;
                    value: _215.MsgRedeemStake;
                };
                confirmDelegation(value: _215.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _215.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _215.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _215.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _215.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _215.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _215.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _215.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _215.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _215.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _215.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _215.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _215.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _215.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _215.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _215.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _215.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _215.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _215.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _215.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _215.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _215.MsgSetOperatorAddress;
                };
            };
            fromPartial: {
                liquidStake(value: _215.MsgLiquidStake): {
                    typeUrl: string;
                    value: _215.MsgLiquidStake;
                };
                redeemStake(value: _215.MsgRedeemStake): {
                    typeUrl: string;
                    value: _215.MsgRedeemStake;
                };
                confirmDelegation(value: _215.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _215.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _215.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _215.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _215.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _215.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _215.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _215.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _215.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _215.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _215.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _215.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _215.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _215.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _215.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _215.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _215.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _215.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _215.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _215.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _215.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _215.MsgSetOperatorAddress;
                };
            };
        };
        AminoConverter: {
            "/stride.stakedym.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _215.MsgLiquidStake) => _215.MsgLiquidStakeAmino;
                fromAmino: (object: _215.MsgLiquidStakeAmino) => _215.MsgLiquidStake;
            };
            "/stride.stakedym.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _215.MsgRedeemStake) => _215.MsgRedeemStakeAmino;
                fromAmino: (object: _215.MsgRedeemStakeAmino) => _215.MsgRedeemStake;
            };
            "/stride.stakedym.MsgConfirmDelegation": {
                aminoType: string;
                toAmino: (message: _215.MsgConfirmDelegation) => _215.MsgConfirmDelegationAmino;
                fromAmino: (object: _215.MsgConfirmDelegationAmino) => _215.MsgConfirmDelegation;
            };
            "/stride.stakedym.MsgConfirmUndelegation": {
                aminoType: string;
                toAmino: (message: _215.MsgConfirmUndelegation) => _215.MsgConfirmUndelegationAmino;
                fromAmino: (object: _215.MsgConfirmUndelegationAmino) => _215.MsgConfirmUndelegation;
            };
            "/stride.stakedym.MsgConfirmUnbondedTokenSweep": {
                aminoType: string;
                toAmino: (message: _215.MsgConfirmUnbondedTokenSweep) => _215.MsgConfirmUnbondedTokenSweepAmino;
                fromAmino: (object: _215.MsgConfirmUnbondedTokenSweepAmino) => _215.MsgConfirmUnbondedTokenSweep;
            };
            "/stride.stakedym.MsgAdjustDelegatedBalance": {
                aminoType: string;
                toAmino: (message: _215.MsgAdjustDelegatedBalance) => _215.MsgAdjustDelegatedBalanceAmino;
                fromAmino: (object: _215.MsgAdjustDelegatedBalanceAmino) => _215.MsgAdjustDelegatedBalance;
            };
            "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _215.MsgUpdateInnerRedemptionRateBounds) => _215.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _215.MsgUpdateInnerRedemptionRateBoundsAmino) => _215.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.stakedym.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _215.MsgResumeHostZone) => _215.MsgResumeHostZoneAmino;
                fromAmino: (object: _215.MsgResumeHostZoneAmino) => _215.MsgResumeHostZone;
            };
            "/stride.stakedym.MsgRefreshRedemptionRate": {
                aminoType: string;
                toAmino: (message: _215.MsgRefreshRedemptionRate) => _215.MsgRefreshRedemptionRateAmino;
                fromAmino: (object: _215.MsgRefreshRedemptionRateAmino) => _215.MsgRefreshRedemptionRate;
            };
            "/stride.stakedym.MsgOverwriteDelegationRecord": {
                aminoType: string;
                toAmino: (message: _215.MsgOverwriteDelegationRecord) => _215.MsgOverwriteDelegationRecordAmino;
                fromAmino: (object: _215.MsgOverwriteDelegationRecordAmino) => _215.MsgOverwriteDelegationRecord;
            };
            "/stride.stakedym.MsgOverwriteUnbondingRecord": {
                aminoType: string;
                toAmino: (message: _215.MsgOverwriteUnbondingRecord) => _215.MsgOverwriteUnbondingRecordAmino;
                fromAmino: (object: _215.MsgOverwriteUnbondingRecordAmino) => _215.MsgOverwriteUnbondingRecord;
            };
            "/stride.stakedym.MsgOverwriteRedemptionRecord": {
                aminoType: string;
                toAmino: (message: _215.MsgOverwriteRedemptionRecord) => _215.MsgOverwriteRedemptionRecordAmino;
                fromAmino: (object: _215.MsgOverwriteRedemptionRecordAmino) => _215.MsgOverwriteRedemptionRecord;
            };
            "/stride.stakedym.MsgSetOperatorAddress": {
                aminoType: string;
                toAmino: (message: _215.MsgSetOperatorAddress) => _215.MsgSetOperatorAddressAmino;
                fromAmino: (object: _215.MsgSetOperatorAddressAmino) => _215.MsgSetOperatorAddress;
            };
        };
        overwritableRecordTypeFromJSON(object: any): _215.OverwritableRecordType;
        overwritableRecordTypeToJSON(object: _215.OverwritableRecordType): string;
        OverwritableRecordType: typeof _215.OverwritableRecordType;
        OverwritableRecordTypeSDKType: typeof _215.OverwritableRecordType;
        OverwritableRecordTypeAmino: typeof _215.OverwritableRecordType;
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _215.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgLiquidStake;
            fromPartial(object: Partial<_215.MsgLiquidStake>): _215.MsgLiquidStake;
            fromAmino(object: _215.MsgLiquidStakeAmino): _215.MsgLiquidStake;
            toAmino(message: _215.MsgLiquidStake): _215.MsgLiquidStakeAmino;
            fromAminoMsg(object: _215.MsgLiquidStakeAminoMsg): _215.MsgLiquidStake;
            toAminoMsg(message: _215.MsgLiquidStake): _215.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _215.MsgLiquidStakeProtoMsg): _215.MsgLiquidStake;
            toProto(message: _215.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _215.MsgLiquidStake): _215.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _215.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_215.MsgLiquidStakeResponse>): _215.MsgLiquidStakeResponse;
            fromAmino(object: _215.MsgLiquidStakeResponseAmino): _215.MsgLiquidStakeResponse;
            toAmino(message: _215.MsgLiquidStakeResponse): _215.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _215.MsgLiquidStakeResponseAminoMsg): _215.MsgLiquidStakeResponse;
            fromProtoMsg(message: _215.MsgLiquidStakeResponseProtoMsg): _215.MsgLiquidStakeResponse;
            toProto(message: _215.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _215.MsgLiquidStakeResponse): _215.MsgLiquidStakeResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _215.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgRedeemStake;
            fromPartial(object: Partial<_215.MsgRedeemStake>): _215.MsgRedeemStake;
            fromAmino(object: _215.MsgRedeemStakeAmino): _215.MsgRedeemStake;
            toAmino(message: _215.MsgRedeemStake): _215.MsgRedeemStakeAmino;
            fromAminoMsg(object: _215.MsgRedeemStakeAminoMsg): _215.MsgRedeemStake;
            toAminoMsg(message: _215.MsgRedeemStake): _215.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _215.MsgRedeemStakeProtoMsg): _215.MsgRedeemStake;
            toProto(message: _215.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _215.MsgRedeemStake): _215.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(message: _215.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgRedeemStakeResponse;
            fromPartial(object: Partial<_215.MsgRedeemStakeResponse>): _215.MsgRedeemStakeResponse;
            fromAmino(object: _215.MsgRedeemStakeResponseAmino): _215.MsgRedeemStakeResponse;
            toAmino(message: _215.MsgRedeemStakeResponse): _215.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _215.MsgRedeemStakeResponseAminoMsg): _215.MsgRedeemStakeResponse;
            fromProtoMsg(message: _215.MsgRedeemStakeResponseProtoMsg): _215.MsgRedeemStakeResponse;
            toProto(message: _215.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _215.MsgRedeemStakeResponse): _215.MsgRedeemStakeResponseProtoMsg;
        };
        MsgConfirmDelegation: {
            typeUrl: string;
            encode(message: _215.MsgConfirmDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgConfirmDelegation;
            fromPartial(object: Partial<_215.MsgConfirmDelegation>): _215.MsgConfirmDelegation;
            fromAmino(object: _215.MsgConfirmDelegationAmino): _215.MsgConfirmDelegation;
            toAmino(message: _215.MsgConfirmDelegation): _215.MsgConfirmDelegationAmino;
            fromAminoMsg(object: _215.MsgConfirmDelegationAminoMsg): _215.MsgConfirmDelegation;
            toAminoMsg(message: _215.MsgConfirmDelegation): _215.MsgConfirmDelegationAminoMsg;
            fromProtoMsg(message: _215.MsgConfirmDelegationProtoMsg): _215.MsgConfirmDelegation;
            toProto(message: _215.MsgConfirmDelegation): Uint8Array;
            toProtoMsg(message: _215.MsgConfirmDelegation): _215.MsgConfirmDelegationProtoMsg;
        };
        MsgConfirmDelegationResponse: {
            typeUrl: string;
            encode(_: _215.MsgConfirmDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgConfirmDelegationResponse;
            fromPartial(_: Partial<_215.MsgConfirmDelegationResponse>): _215.MsgConfirmDelegationResponse;
            fromAmino(_: _215.MsgConfirmDelegationResponseAmino): _215.MsgConfirmDelegationResponse;
            toAmino(_: _215.MsgConfirmDelegationResponse): _215.MsgConfirmDelegationResponseAmino;
            fromAminoMsg(object: _215.MsgConfirmDelegationResponseAminoMsg): _215.MsgConfirmDelegationResponse;
            fromProtoMsg(message: _215.MsgConfirmDelegationResponseProtoMsg): _215.MsgConfirmDelegationResponse;
            toProto(message: _215.MsgConfirmDelegationResponse): Uint8Array;
            toProtoMsg(message: _215.MsgConfirmDelegationResponse): _215.MsgConfirmDelegationResponseProtoMsg;
        };
        MsgConfirmUndelegation: {
            typeUrl: string;
            encode(message: _215.MsgConfirmUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgConfirmUndelegation;
            fromPartial(object: Partial<_215.MsgConfirmUndelegation>): _215.MsgConfirmUndelegation;
            fromAmino(object: _215.MsgConfirmUndelegationAmino): _215.MsgConfirmUndelegation;
            toAmino(message: _215.MsgConfirmUndelegation): _215.MsgConfirmUndelegationAmino;
            fromAminoMsg(object: _215.MsgConfirmUndelegationAminoMsg): _215.MsgConfirmUndelegation;
            toAminoMsg(message: _215.MsgConfirmUndelegation): _215.MsgConfirmUndelegationAminoMsg;
            fromProtoMsg(message: _215.MsgConfirmUndelegationProtoMsg): _215.MsgConfirmUndelegation;
            toProto(message: _215.MsgConfirmUndelegation): Uint8Array;
            toProtoMsg(message: _215.MsgConfirmUndelegation): _215.MsgConfirmUndelegationProtoMsg;
        };
        MsgConfirmUndelegationResponse: {
            typeUrl: string;
            encode(_: _215.MsgConfirmUndelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgConfirmUndelegationResponse;
            fromPartial(_: Partial<_215.MsgConfirmUndelegationResponse>): _215.MsgConfirmUndelegationResponse;
            fromAmino(_: _215.MsgConfirmUndelegationResponseAmino): _215.MsgConfirmUndelegationResponse;
            toAmino(_: _215.MsgConfirmUndelegationResponse): _215.MsgConfirmUndelegationResponseAmino;
            fromAminoMsg(object: _215.MsgConfirmUndelegationResponseAminoMsg): _215.MsgConfirmUndelegationResponse;
            fromProtoMsg(message: _215.MsgConfirmUndelegationResponseProtoMsg): _215.MsgConfirmUndelegationResponse;
            toProto(message: _215.MsgConfirmUndelegationResponse): Uint8Array;
            toProtoMsg(message: _215.MsgConfirmUndelegationResponse): _215.MsgConfirmUndelegationResponseProtoMsg;
        };
        MsgConfirmUnbondedTokenSweep: {
            typeUrl: string;
            encode(message: _215.MsgConfirmUnbondedTokenSweep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgConfirmUnbondedTokenSweep;
            fromPartial(object: Partial<_215.MsgConfirmUnbondedTokenSweep>): _215.MsgConfirmUnbondedTokenSweep;
            fromAmino(object: _215.MsgConfirmUnbondedTokenSweepAmino): _215.MsgConfirmUnbondedTokenSweep;
            toAmino(message: _215.MsgConfirmUnbondedTokenSweep): _215.MsgConfirmUnbondedTokenSweepAmino;
            fromAminoMsg(object: _215.MsgConfirmUnbondedTokenSweepAminoMsg): _215.MsgConfirmUnbondedTokenSweep;
            toAminoMsg(message: _215.MsgConfirmUnbondedTokenSweep): _215.MsgConfirmUnbondedTokenSweepAminoMsg;
            fromProtoMsg(message: _215.MsgConfirmUnbondedTokenSweepProtoMsg): _215.MsgConfirmUnbondedTokenSweep;
            toProto(message: _215.MsgConfirmUnbondedTokenSweep): Uint8Array;
            toProtoMsg(message: _215.MsgConfirmUnbondedTokenSweep): _215.MsgConfirmUnbondedTokenSweepProtoMsg;
        };
        MsgConfirmUnbondedTokenSweepResponse: {
            typeUrl: string;
            encode(_: _215.MsgConfirmUnbondedTokenSweepResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgConfirmUnbondedTokenSweepResponse;
            fromPartial(_: Partial<_215.MsgConfirmUnbondedTokenSweepResponse>): _215.MsgConfirmUnbondedTokenSweepResponse;
            fromAmino(_: _215.MsgConfirmUnbondedTokenSweepResponseAmino): _215.MsgConfirmUnbondedTokenSweepResponse;
            toAmino(_: _215.MsgConfirmUnbondedTokenSweepResponse): _215.MsgConfirmUnbondedTokenSweepResponseAmino;
            fromAminoMsg(object: _215.MsgConfirmUnbondedTokenSweepResponseAminoMsg): _215.MsgConfirmUnbondedTokenSweepResponse;
            fromProtoMsg(message: _215.MsgConfirmUnbondedTokenSweepResponseProtoMsg): _215.MsgConfirmUnbondedTokenSweepResponse;
            toProto(message: _215.MsgConfirmUnbondedTokenSweepResponse): Uint8Array;
            toProtoMsg(message: _215.MsgConfirmUnbondedTokenSweepResponse): _215.MsgConfirmUnbondedTokenSweepResponseProtoMsg;
        };
        MsgAdjustDelegatedBalance: {
            typeUrl: string;
            encode(message: _215.MsgAdjustDelegatedBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgAdjustDelegatedBalance;
            fromPartial(object: Partial<_215.MsgAdjustDelegatedBalance>): _215.MsgAdjustDelegatedBalance;
            fromAmino(object: _215.MsgAdjustDelegatedBalanceAmino): _215.MsgAdjustDelegatedBalance;
            toAmino(message: _215.MsgAdjustDelegatedBalance): _215.MsgAdjustDelegatedBalanceAmino;
            fromAminoMsg(object: _215.MsgAdjustDelegatedBalanceAminoMsg): _215.MsgAdjustDelegatedBalance;
            toAminoMsg(message: _215.MsgAdjustDelegatedBalance): _215.MsgAdjustDelegatedBalanceAminoMsg;
            fromProtoMsg(message: _215.MsgAdjustDelegatedBalanceProtoMsg): _215.MsgAdjustDelegatedBalance;
            toProto(message: _215.MsgAdjustDelegatedBalance): Uint8Array;
            toProtoMsg(message: _215.MsgAdjustDelegatedBalance): _215.MsgAdjustDelegatedBalanceProtoMsg;
        };
        MsgAdjustDelegatedBalanceResponse: {
            typeUrl: string;
            encode(_: _215.MsgAdjustDelegatedBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgAdjustDelegatedBalanceResponse;
            fromPartial(_: Partial<_215.MsgAdjustDelegatedBalanceResponse>): _215.MsgAdjustDelegatedBalanceResponse;
            fromAmino(_: _215.MsgAdjustDelegatedBalanceResponseAmino): _215.MsgAdjustDelegatedBalanceResponse;
            toAmino(_: _215.MsgAdjustDelegatedBalanceResponse): _215.MsgAdjustDelegatedBalanceResponseAmino;
            fromAminoMsg(object: _215.MsgAdjustDelegatedBalanceResponseAminoMsg): _215.MsgAdjustDelegatedBalanceResponse;
            fromProtoMsg(message: _215.MsgAdjustDelegatedBalanceResponseProtoMsg): _215.MsgAdjustDelegatedBalanceResponse;
            toProto(message: _215.MsgAdjustDelegatedBalanceResponse): Uint8Array;
            toProtoMsg(message: _215.MsgAdjustDelegatedBalanceResponse): _215.MsgAdjustDelegatedBalanceResponseProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _215.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_215.MsgUpdateInnerRedemptionRateBounds>): _215.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _215.MsgUpdateInnerRedemptionRateBoundsAmino): _215.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _215.MsgUpdateInnerRedemptionRateBounds): _215.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _215.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _215.MsgUpdateInnerRedemptionRateBounds;
            toAminoMsg(message: _215.MsgUpdateInnerRedemptionRateBounds): _215.MsgUpdateInnerRedemptionRateBoundsAminoMsg;
            fromProtoMsg(message: _215.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _215.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _215.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _215.MsgUpdateInnerRedemptionRateBounds): _215.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _215.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_215.MsgUpdateInnerRedemptionRateBoundsResponse>): _215.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _215.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _215.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _215.MsgUpdateInnerRedemptionRateBoundsResponse): _215.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _215.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _215.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _215.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _215.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _215.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _215.MsgUpdateInnerRedemptionRateBoundsResponse): _215.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _215.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgResumeHostZone;
            fromPartial(object: Partial<_215.MsgResumeHostZone>): _215.MsgResumeHostZone;
            fromAmino(object: _215.MsgResumeHostZoneAmino): _215.MsgResumeHostZone;
            toAmino(message: _215.MsgResumeHostZone): _215.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _215.MsgResumeHostZoneAminoMsg): _215.MsgResumeHostZone;
            toAminoMsg(message: _215.MsgResumeHostZone): _215.MsgResumeHostZoneAminoMsg;
            fromProtoMsg(message: _215.MsgResumeHostZoneProtoMsg): _215.MsgResumeHostZone;
            toProto(message: _215.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _215.MsgResumeHostZone): _215.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _215.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_215.MsgResumeHostZoneResponse>): _215.MsgResumeHostZoneResponse;
            fromAmino(_: _215.MsgResumeHostZoneResponseAmino): _215.MsgResumeHostZoneResponse;
            toAmino(_: _215.MsgResumeHostZoneResponse): _215.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _215.MsgResumeHostZoneResponseAminoMsg): _215.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _215.MsgResumeHostZoneResponseProtoMsg): _215.MsgResumeHostZoneResponse;
            toProto(message: _215.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _215.MsgResumeHostZoneResponse): _215.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgRefreshRedemptionRate: {
            typeUrl: string;
            encode(message: _215.MsgRefreshRedemptionRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgRefreshRedemptionRate;
            fromPartial(object: Partial<_215.MsgRefreshRedemptionRate>): _215.MsgRefreshRedemptionRate;
            fromAmino(object: _215.MsgRefreshRedemptionRateAmino): _215.MsgRefreshRedemptionRate;
            toAmino(message: _215.MsgRefreshRedemptionRate): _215.MsgRefreshRedemptionRateAmino;
            fromAminoMsg(object: _215.MsgRefreshRedemptionRateAminoMsg): _215.MsgRefreshRedemptionRate;
            toAminoMsg(message: _215.MsgRefreshRedemptionRate): _215.MsgRefreshRedemptionRateAminoMsg;
            fromProtoMsg(message: _215.MsgRefreshRedemptionRateProtoMsg): _215.MsgRefreshRedemptionRate;
            toProto(message: _215.MsgRefreshRedemptionRate): Uint8Array;
            toProtoMsg(message: _215.MsgRefreshRedemptionRate): _215.MsgRefreshRedemptionRateProtoMsg;
        };
        MsgRefreshRedemptionRateResponse: {
            typeUrl: string;
            encode(_: _215.MsgRefreshRedemptionRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgRefreshRedemptionRateResponse;
            fromPartial(_: Partial<_215.MsgRefreshRedemptionRateResponse>): _215.MsgRefreshRedemptionRateResponse;
            fromAmino(_: _215.MsgRefreshRedemptionRateResponseAmino): _215.MsgRefreshRedemptionRateResponse;
            toAmino(_: _215.MsgRefreshRedemptionRateResponse): _215.MsgRefreshRedemptionRateResponseAmino;
            fromAminoMsg(object: _215.MsgRefreshRedemptionRateResponseAminoMsg): _215.MsgRefreshRedemptionRateResponse;
            fromProtoMsg(message: _215.MsgRefreshRedemptionRateResponseProtoMsg): _215.MsgRefreshRedemptionRateResponse;
            toProto(message: _215.MsgRefreshRedemptionRateResponse): Uint8Array;
            toProtoMsg(message: _215.MsgRefreshRedemptionRateResponse): _215.MsgRefreshRedemptionRateResponseProtoMsg;
        };
        MsgOverwriteDelegationRecord: {
            typeUrl: string;
            encode(message: _215.MsgOverwriteDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgOverwriteDelegationRecord;
            fromPartial(object: Partial<_215.MsgOverwriteDelegationRecord>): _215.MsgOverwriteDelegationRecord;
            fromAmino(object: _215.MsgOverwriteDelegationRecordAmino): _215.MsgOverwriteDelegationRecord;
            toAmino(message: _215.MsgOverwriteDelegationRecord): _215.MsgOverwriteDelegationRecordAmino;
            fromAminoMsg(object: _215.MsgOverwriteDelegationRecordAminoMsg): _215.MsgOverwriteDelegationRecord;
            toAminoMsg(message: _215.MsgOverwriteDelegationRecord): _215.MsgOverwriteDelegationRecordAminoMsg;
            fromProtoMsg(message: _215.MsgOverwriteDelegationRecordProtoMsg): _215.MsgOverwriteDelegationRecord;
            toProto(message: _215.MsgOverwriteDelegationRecord): Uint8Array;
            toProtoMsg(message: _215.MsgOverwriteDelegationRecord): _215.MsgOverwriteDelegationRecordProtoMsg;
        };
        MsgOverwriteDelegationRecordResponse: {
            typeUrl: string;
            encode(_: _215.MsgOverwriteDelegationRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgOverwriteDelegationRecordResponse;
            fromPartial(_: Partial<_215.MsgOverwriteDelegationRecordResponse>): _215.MsgOverwriteDelegationRecordResponse;
            fromAmino(_: _215.MsgOverwriteDelegationRecordResponseAmino): _215.MsgOverwriteDelegationRecordResponse;
            toAmino(_: _215.MsgOverwriteDelegationRecordResponse): _215.MsgOverwriteDelegationRecordResponseAmino;
            fromAminoMsg(object: _215.MsgOverwriteDelegationRecordResponseAminoMsg): _215.MsgOverwriteDelegationRecordResponse;
            fromProtoMsg(message: _215.MsgOverwriteDelegationRecordResponseProtoMsg): _215.MsgOverwriteDelegationRecordResponse;
            toProto(message: _215.MsgOverwriteDelegationRecordResponse): Uint8Array;
            toProtoMsg(message: _215.MsgOverwriteDelegationRecordResponse): _215.MsgOverwriteDelegationRecordResponseProtoMsg;
        };
        MsgOverwriteUnbondingRecord: {
            typeUrl: string;
            encode(message: _215.MsgOverwriteUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgOverwriteUnbondingRecord;
            fromPartial(object: Partial<_215.MsgOverwriteUnbondingRecord>): _215.MsgOverwriteUnbondingRecord;
            fromAmino(object: _215.MsgOverwriteUnbondingRecordAmino): _215.MsgOverwriteUnbondingRecord;
            toAmino(message: _215.MsgOverwriteUnbondingRecord): _215.MsgOverwriteUnbondingRecordAmino;
            fromAminoMsg(object: _215.MsgOverwriteUnbondingRecordAminoMsg): _215.MsgOverwriteUnbondingRecord;
            toAminoMsg(message: _215.MsgOverwriteUnbondingRecord): _215.MsgOverwriteUnbondingRecordAminoMsg;
            fromProtoMsg(message: _215.MsgOverwriteUnbondingRecordProtoMsg): _215.MsgOverwriteUnbondingRecord;
            toProto(message: _215.MsgOverwriteUnbondingRecord): Uint8Array;
            toProtoMsg(message: _215.MsgOverwriteUnbondingRecord): _215.MsgOverwriteUnbondingRecordProtoMsg;
        };
        MsgOverwriteUnbondingRecordResponse: {
            typeUrl: string;
            encode(_: _215.MsgOverwriteUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgOverwriteUnbondingRecordResponse;
            fromPartial(_: Partial<_215.MsgOverwriteUnbondingRecordResponse>): _215.MsgOverwriteUnbondingRecordResponse;
            fromAmino(_: _215.MsgOverwriteUnbondingRecordResponseAmino): _215.MsgOverwriteUnbondingRecordResponse;
            toAmino(_: _215.MsgOverwriteUnbondingRecordResponse): _215.MsgOverwriteUnbondingRecordResponseAmino;
            fromAminoMsg(object: _215.MsgOverwriteUnbondingRecordResponseAminoMsg): _215.MsgOverwriteUnbondingRecordResponse;
            fromProtoMsg(message: _215.MsgOverwriteUnbondingRecordResponseProtoMsg): _215.MsgOverwriteUnbondingRecordResponse;
            toProto(message: _215.MsgOverwriteUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _215.MsgOverwriteUnbondingRecordResponse): _215.MsgOverwriteUnbondingRecordResponseProtoMsg;
        };
        MsgOverwriteRedemptionRecord: {
            typeUrl: string;
            encode(message: _215.MsgOverwriteRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgOverwriteRedemptionRecord;
            fromPartial(object: Partial<_215.MsgOverwriteRedemptionRecord>): _215.MsgOverwriteRedemptionRecord;
            fromAmino(object: _215.MsgOverwriteRedemptionRecordAmino): _215.MsgOverwriteRedemptionRecord;
            toAmino(message: _215.MsgOverwriteRedemptionRecord): _215.MsgOverwriteRedemptionRecordAmino;
            fromAminoMsg(object: _215.MsgOverwriteRedemptionRecordAminoMsg): _215.MsgOverwriteRedemptionRecord;
            toAminoMsg(message: _215.MsgOverwriteRedemptionRecord): _215.MsgOverwriteRedemptionRecordAminoMsg;
            fromProtoMsg(message: _215.MsgOverwriteRedemptionRecordProtoMsg): _215.MsgOverwriteRedemptionRecord;
            toProto(message: _215.MsgOverwriteRedemptionRecord): Uint8Array;
            toProtoMsg(message: _215.MsgOverwriteRedemptionRecord): _215.MsgOverwriteRedemptionRecordProtoMsg;
        };
        MsgOverwriteRedemptionRecordResponse: {
            typeUrl: string;
            encode(_: _215.MsgOverwriteRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgOverwriteRedemptionRecordResponse;
            fromPartial(_: Partial<_215.MsgOverwriteRedemptionRecordResponse>): _215.MsgOverwriteRedemptionRecordResponse;
            fromAmino(_: _215.MsgOverwriteRedemptionRecordResponseAmino): _215.MsgOverwriteRedemptionRecordResponse;
            toAmino(_: _215.MsgOverwriteRedemptionRecordResponse): _215.MsgOverwriteRedemptionRecordResponseAmino;
            fromAminoMsg(object: _215.MsgOverwriteRedemptionRecordResponseAminoMsg): _215.MsgOverwriteRedemptionRecordResponse;
            fromProtoMsg(message: _215.MsgOverwriteRedemptionRecordResponseProtoMsg): _215.MsgOverwriteRedemptionRecordResponse;
            toProto(message: _215.MsgOverwriteRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _215.MsgOverwriteRedemptionRecordResponse): _215.MsgOverwriteRedemptionRecordResponseProtoMsg;
        };
        MsgSetOperatorAddress: {
            typeUrl: string;
            encode(message: _215.MsgSetOperatorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgSetOperatorAddress;
            fromPartial(object: Partial<_215.MsgSetOperatorAddress>): _215.MsgSetOperatorAddress;
            fromAmino(object: _215.MsgSetOperatorAddressAmino): _215.MsgSetOperatorAddress;
            toAmino(message: _215.MsgSetOperatorAddress): _215.MsgSetOperatorAddressAmino;
            fromAminoMsg(object: _215.MsgSetOperatorAddressAminoMsg): _215.MsgSetOperatorAddress;
            toAminoMsg(message: _215.MsgSetOperatorAddress): _215.MsgSetOperatorAddressAminoMsg;
            fromProtoMsg(message: _215.MsgSetOperatorAddressProtoMsg): _215.MsgSetOperatorAddress;
            toProto(message: _215.MsgSetOperatorAddress): Uint8Array;
            toProtoMsg(message: _215.MsgSetOperatorAddress): _215.MsgSetOperatorAddressProtoMsg;
        };
        MsgSetOperatorAddressResponse: {
            typeUrl: string;
            encode(_: _215.MsgSetOperatorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.MsgSetOperatorAddressResponse;
            fromPartial(_: Partial<_215.MsgSetOperatorAddressResponse>): _215.MsgSetOperatorAddressResponse;
            fromAmino(_: _215.MsgSetOperatorAddressResponseAmino): _215.MsgSetOperatorAddressResponse;
            toAmino(_: _215.MsgSetOperatorAddressResponse): _215.MsgSetOperatorAddressResponseAmino;
            fromAminoMsg(object: _215.MsgSetOperatorAddressResponseAminoMsg): _215.MsgSetOperatorAddressResponse;
            fromProtoMsg(message: _215.MsgSetOperatorAddressResponseProtoMsg): _215.MsgSetOperatorAddressResponse;
            toProto(message: _215.MsgSetOperatorAddressResponse): Uint8Array;
            toProtoMsg(message: _215.MsgSetOperatorAddressResponse): _215.MsgSetOperatorAddressResponseProtoMsg;
        };
        delegationRecordStatusFromJSON(object: any): _214.DelegationRecordStatus;
        delegationRecordStatusToJSON(object: _214.DelegationRecordStatus): string;
        unbondingRecordStatusFromJSON(object: any): _214.UnbondingRecordStatus;
        unbondingRecordStatusToJSON(object: _214.UnbondingRecordStatus): string;
        DelegationRecordStatus: typeof _214.DelegationRecordStatus;
        DelegationRecordStatusSDKType: typeof _214.DelegationRecordStatus;
        DelegationRecordStatusAmino: typeof _214.DelegationRecordStatus;
        UnbondingRecordStatus: typeof _214.UnbondingRecordStatus;
        UnbondingRecordStatusSDKType: typeof _214.UnbondingRecordStatus;
        UnbondingRecordStatusAmino: typeof _214.UnbondingRecordStatus;
        HostZone: {
            typeUrl: string;
            encode(message: _214.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.HostZone;
            fromPartial(object: Partial<_214.HostZone>): _214.HostZone;
            fromAmino(object: _214.HostZoneAmino): _214.HostZone;
            toAmino(message: _214.HostZone): _214.HostZoneAmino;
            fromAminoMsg(object: _214.HostZoneAminoMsg): _214.HostZone;
            fromProtoMsg(message: _214.HostZoneProtoMsg): _214.HostZone;
            toProto(message: _214.HostZone): Uint8Array;
            toProtoMsg(message: _214.HostZone): _214.HostZoneProtoMsg;
        };
        DelegationRecord: {
            typeUrl: string;
            encode(message: _214.DelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.DelegationRecord;
            fromPartial(object: Partial<_214.DelegationRecord>): _214.DelegationRecord;
            fromAmino(object: _214.DelegationRecordAmino): _214.DelegationRecord;
            toAmino(message: _214.DelegationRecord): _214.DelegationRecordAmino;
            fromAminoMsg(object: _214.DelegationRecordAminoMsg): _214.DelegationRecord;
            fromProtoMsg(message: _214.DelegationRecordProtoMsg): _214.DelegationRecord;
            toProto(message: _214.DelegationRecord): Uint8Array;
            toProtoMsg(message: _214.DelegationRecord): _214.DelegationRecordProtoMsg;
        };
        UnbondingRecord: {
            typeUrl: string;
            encode(message: _214.UnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.UnbondingRecord;
            fromPartial(object: Partial<_214.UnbondingRecord>): _214.UnbondingRecord;
            fromAmino(object: _214.UnbondingRecordAmino): _214.UnbondingRecord;
            toAmino(message: _214.UnbondingRecord): _214.UnbondingRecordAmino;
            fromAminoMsg(object: _214.UnbondingRecordAminoMsg): _214.UnbondingRecord;
            fromProtoMsg(message: _214.UnbondingRecordProtoMsg): _214.UnbondingRecord;
            toProto(message: _214.UnbondingRecord): Uint8Array;
            toProtoMsg(message: _214.UnbondingRecord): _214.UnbondingRecordProtoMsg;
        };
        RedemptionRecord: {
            typeUrl: string;
            encode(message: _214.RedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.RedemptionRecord;
            fromPartial(object: Partial<_214.RedemptionRecord>): _214.RedemptionRecord;
            fromAmino(object: _214.RedemptionRecordAmino): _214.RedemptionRecord;
            toAmino(message: _214.RedemptionRecord): _214.RedemptionRecordAmino;
            fromAminoMsg(object: _214.RedemptionRecordAminoMsg): _214.RedemptionRecord;
            fromProtoMsg(message: _214.RedemptionRecordProtoMsg): _214.RedemptionRecord;
            toProto(message: _214.RedemptionRecord): Uint8Array;
            toProtoMsg(message: _214.RedemptionRecord): _214.RedemptionRecordProtoMsg;
        };
        SlashRecord: {
            typeUrl: string;
            encode(message: _214.SlashRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.SlashRecord;
            fromPartial(object: Partial<_214.SlashRecord>): _214.SlashRecord;
            fromAmino(object: _214.SlashRecordAmino): _214.SlashRecord;
            toAmino(message: _214.SlashRecord): _214.SlashRecordAmino;
            fromAminoMsg(object: _214.SlashRecordAminoMsg): _214.SlashRecord;
            fromProtoMsg(message: _214.SlashRecordProtoMsg): _214.SlashRecord;
            toProto(message: _214.SlashRecord): Uint8Array;
            toProtoMsg(message: _214.SlashRecord): _214.SlashRecordProtoMsg;
        };
        QueryHostZoneRequest: {
            typeUrl: string;
            encode(_: _213.QueryHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.QueryHostZoneRequest;
            fromPartial(_: Partial<_213.QueryHostZoneRequest>): _213.QueryHostZoneRequest;
            fromAmino(_: _213.QueryHostZoneRequestAmino): _213.QueryHostZoneRequest;
            toAmino(_: _213.QueryHostZoneRequest): _213.QueryHostZoneRequestAmino;
            fromAminoMsg(object: _213.QueryHostZoneRequestAminoMsg): _213.QueryHostZoneRequest;
            fromProtoMsg(message: _213.QueryHostZoneRequestProtoMsg): _213.QueryHostZoneRequest;
            toProto(message: _213.QueryHostZoneRequest): Uint8Array;
            toProtoMsg(message: _213.QueryHostZoneRequest): _213.QueryHostZoneRequestProtoMsg;
        };
        QueryHostZoneResponse: {
            typeUrl: string;
            encode(message: _213.QueryHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.QueryHostZoneResponse;
            fromPartial(object: Partial<_213.QueryHostZoneResponse>): _213.QueryHostZoneResponse;
            fromAmino(object: _213.QueryHostZoneResponseAmino): _213.QueryHostZoneResponse;
            toAmino(message: _213.QueryHostZoneResponse): _213.QueryHostZoneResponseAmino;
            fromAminoMsg(object: _213.QueryHostZoneResponseAminoMsg): _213.QueryHostZoneResponse;
            fromProtoMsg(message: _213.QueryHostZoneResponseProtoMsg): _213.QueryHostZoneResponse;
            toProto(message: _213.QueryHostZoneResponse): Uint8Array;
            toProtoMsg(message: _213.QueryHostZoneResponse): _213.QueryHostZoneResponseProtoMsg;
        };
        QueryDelegationRecordsRequest: {
            typeUrl: string;
            encode(message: _213.QueryDelegationRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.QueryDelegationRecordsRequest;
            fromPartial(object: Partial<_213.QueryDelegationRecordsRequest>): _213.QueryDelegationRecordsRequest;
            fromAmino(object: _213.QueryDelegationRecordsRequestAmino): _213.QueryDelegationRecordsRequest;
            toAmino(message: _213.QueryDelegationRecordsRequest): _213.QueryDelegationRecordsRequestAmino;
            fromAminoMsg(object: _213.QueryDelegationRecordsRequestAminoMsg): _213.QueryDelegationRecordsRequest;
            fromProtoMsg(message: _213.QueryDelegationRecordsRequestProtoMsg): _213.QueryDelegationRecordsRequest;
            toProto(message: _213.QueryDelegationRecordsRequest): Uint8Array;
            toProtoMsg(message: _213.QueryDelegationRecordsRequest): _213.QueryDelegationRecordsRequestProtoMsg;
        };
        QueryDelegationRecordsResponse: {
            typeUrl: string;
            encode(message: _213.QueryDelegationRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.QueryDelegationRecordsResponse;
            fromPartial(object: Partial<_213.QueryDelegationRecordsResponse>): _213.QueryDelegationRecordsResponse;
            fromAmino(object: _213.QueryDelegationRecordsResponseAmino): _213.QueryDelegationRecordsResponse;
            toAmino(message: _213.QueryDelegationRecordsResponse): _213.QueryDelegationRecordsResponseAmino;
            fromAminoMsg(object: _213.QueryDelegationRecordsResponseAminoMsg): _213.QueryDelegationRecordsResponse;
            fromProtoMsg(message: _213.QueryDelegationRecordsResponseProtoMsg): _213.QueryDelegationRecordsResponse;
            toProto(message: _213.QueryDelegationRecordsResponse): Uint8Array;
            toProtoMsg(message: _213.QueryDelegationRecordsResponse): _213.QueryDelegationRecordsResponseProtoMsg;
        };
        QueryUnbondingRecordsRequest: {
            typeUrl: string;
            encode(message: _213.QueryUnbondingRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.QueryUnbondingRecordsRequest;
            fromPartial(object: Partial<_213.QueryUnbondingRecordsRequest>): _213.QueryUnbondingRecordsRequest;
            fromAmino(object: _213.QueryUnbondingRecordsRequestAmino): _213.QueryUnbondingRecordsRequest;
            toAmino(message: _213.QueryUnbondingRecordsRequest): _213.QueryUnbondingRecordsRequestAmino;
            fromAminoMsg(object: _213.QueryUnbondingRecordsRequestAminoMsg): _213.QueryUnbondingRecordsRequest;
            fromProtoMsg(message: _213.QueryUnbondingRecordsRequestProtoMsg): _213.QueryUnbondingRecordsRequest;
            toProto(message: _213.QueryUnbondingRecordsRequest): Uint8Array;
            toProtoMsg(message: _213.QueryUnbondingRecordsRequest): _213.QueryUnbondingRecordsRequestProtoMsg;
        };
        QueryUnbondingRecordsResponse: {
            typeUrl: string;
            encode(message: _213.QueryUnbondingRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.QueryUnbondingRecordsResponse;
            fromPartial(object: Partial<_213.QueryUnbondingRecordsResponse>): _213.QueryUnbondingRecordsResponse;
            fromAmino(object: _213.QueryUnbondingRecordsResponseAmino): _213.QueryUnbondingRecordsResponse;
            toAmino(message: _213.QueryUnbondingRecordsResponse): _213.QueryUnbondingRecordsResponseAmino;
            fromAminoMsg(object: _213.QueryUnbondingRecordsResponseAminoMsg): _213.QueryUnbondingRecordsResponse;
            fromProtoMsg(message: _213.QueryUnbondingRecordsResponseProtoMsg): _213.QueryUnbondingRecordsResponse;
            toProto(message: _213.QueryUnbondingRecordsResponse): Uint8Array;
            toProtoMsg(message: _213.QueryUnbondingRecordsResponse): _213.QueryUnbondingRecordsResponseProtoMsg;
        };
        QueryRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _213.QueryRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.QueryRedemptionRecordRequest;
            fromPartial(object: Partial<_213.QueryRedemptionRecordRequest>): _213.QueryRedemptionRecordRequest;
            fromAmino(object: _213.QueryRedemptionRecordRequestAmino): _213.QueryRedemptionRecordRequest;
            toAmino(message: _213.QueryRedemptionRecordRequest): _213.QueryRedemptionRecordRequestAmino;
            fromAminoMsg(object: _213.QueryRedemptionRecordRequestAminoMsg): _213.QueryRedemptionRecordRequest;
            fromProtoMsg(message: _213.QueryRedemptionRecordRequestProtoMsg): _213.QueryRedemptionRecordRequest;
            toProto(message: _213.QueryRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _213.QueryRedemptionRecordRequest): _213.QueryRedemptionRecordRequestProtoMsg;
        };
        QueryRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _213.QueryRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.QueryRedemptionRecordResponse;
            fromPartial(object: Partial<_213.QueryRedemptionRecordResponse>): _213.QueryRedemptionRecordResponse;
            fromAmino(object: _213.QueryRedemptionRecordResponseAmino): _213.QueryRedemptionRecordResponse;
            toAmino(message: _213.QueryRedemptionRecordResponse): _213.QueryRedemptionRecordResponseAmino;
            fromAminoMsg(object: _213.QueryRedemptionRecordResponseAminoMsg): _213.QueryRedemptionRecordResponse;
            fromProtoMsg(message: _213.QueryRedemptionRecordResponseProtoMsg): _213.QueryRedemptionRecordResponse;
            toProto(message: _213.QueryRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _213.QueryRedemptionRecordResponse): _213.QueryRedemptionRecordResponseProtoMsg;
        };
        QueryRedemptionRecordsRequest: {
            typeUrl: string;
            encode(message: _213.QueryRedemptionRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.QueryRedemptionRecordsRequest;
            fromPartial(object: Partial<_213.QueryRedemptionRecordsRequest>): _213.QueryRedemptionRecordsRequest;
            fromAmino(object: _213.QueryRedemptionRecordsRequestAmino): _213.QueryRedemptionRecordsRequest;
            toAmino(message: _213.QueryRedemptionRecordsRequest): _213.QueryRedemptionRecordsRequestAmino;
            fromAminoMsg(object: _213.QueryRedemptionRecordsRequestAminoMsg): _213.QueryRedemptionRecordsRequest;
            fromProtoMsg(message: _213.QueryRedemptionRecordsRequestProtoMsg): _213.QueryRedemptionRecordsRequest;
            toProto(message: _213.QueryRedemptionRecordsRequest): Uint8Array;
            toProtoMsg(message: _213.QueryRedemptionRecordsRequest): _213.QueryRedemptionRecordsRequestProtoMsg;
        };
        QueryRedemptionRecordsResponse: {
            typeUrl: string;
            encode(message: _213.QueryRedemptionRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.QueryRedemptionRecordsResponse;
            fromPartial(object: Partial<_213.QueryRedemptionRecordsResponse>): _213.QueryRedemptionRecordsResponse;
            fromAmino(object: _213.QueryRedemptionRecordsResponseAmino): _213.QueryRedemptionRecordsResponse;
            toAmino(message: _213.QueryRedemptionRecordsResponse): _213.QueryRedemptionRecordsResponseAmino;
            fromAminoMsg(object: _213.QueryRedemptionRecordsResponseAminoMsg): _213.QueryRedemptionRecordsResponse;
            fromProtoMsg(message: _213.QueryRedemptionRecordsResponseProtoMsg): _213.QueryRedemptionRecordsResponse;
            toProto(message: _213.QueryRedemptionRecordsResponse): Uint8Array;
            toProtoMsg(message: _213.QueryRedemptionRecordsResponse): _213.QueryRedemptionRecordsResponseProtoMsg;
        };
        QuerySlashRecordsRequest: {
            typeUrl: string;
            encode(_: _213.QuerySlashRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.QuerySlashRecordsRequest;
            fromPartial(_: Partial<_213.QuerySlashRecordsRequest>): _213.QuerySlashRecordsRequest;
            fromAmino(_: _213.QuerySlashRecordsRequestAmino): _213.QuerySlashRecordsRequest;
            toAmino(_: _213.QuerySlashRecordsRequest): _213.QuerySlashRecordsRequestAmino;
            fromAminoMsg(object: _213.QuerySlashRecordsRequestAminoMsg): _213.QuerySlashRecordsRequest;
            fromProtoMsg(message: _213.QuerySlashRecordsRequestProtoMsg): _213.QuerySlashRecordsRequest;
            toProto(message: _213.QuerySlashRecordsRequest): Uint8Array;
            toProtoMsg(message: _213.QuerySlashRecordsRequest): _213.QuerySlashRecordsRequestProtoMsg;
        };
        QuerySlashRecordsResponse: {
            typeUrl: string;
            encode(message: _213.QuerySlashRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.QuerySlashRecordsResponse;
            fromPartial(object: Partial<_213.QuerySlashRecordsResponse>): _213.QuerySlashRecordsResponse;
            fromAmino(object: _213.QuerySlashRecordsResponseAmino): _213.QuerySlashRecordsResponse;
            toAmino(message: _213.QuerySlashRecordsResponse): _213.QuerySlashRecordsResponseAmino;
            fromAminoMsg(object: _213.QuerySlashRecordsResponseAminoMsg): _213.QuerySlashRecordsResponse;
            fromProtoMsg(message: _213.QuerySlashRecordsResponseProtoMsg): _213.QuerySlashRecordsResponse;
            toProto(message: _213.QuerySlashRecordsResponse): Uint8Array;
            toProtoMsg(message: _213.QuerySlashRecordsResponse): _213.QuerySlashRecordsResponseProtoMsg;
        };
        RedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _213.RedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.RedemptionRecordResponse;
            fromPartial(object: Partial<_213.RedemptionRecordResponse>): _213.RedemptionRecordResponse;
            fromAmino(object: _213.RedemptionRecordResponseAmino): _213.RedemptionRecordResponse;
            toAmino(message: _213.RedemptionRecordResponse): _213.RedemptionRecordResponseAmino;
            fromAminoMsg(object: _213.RedemptionRecordResponseAminoMsg): _213.RedemptionRecordResponse;
            fromProtoMsg(message: _213.RedemptionRecordResponseProtoMsg): _213.RedemptionRecordResponse;
            toProto(message: _213.RedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _213.RedemptionRecordResponse): _213.RedemptionRecordResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _212.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.Params;
            fromPartial(_: Partial<_212.Params>): _212.Params;
            fromAmino(_: _212.ParamsAmino): _212.Params;
            toAmino(_: _212.Params): _212.ParamsAmino;
            fromAminoMsg(object: _212.ParamsAminoMsg): _212.Params;
            fromProtoMsg(message: _212.ParamsProtoMsg): _212.Params;
            toProto(message: _212.Params): Uint8Array;
            toProtoMsg(message: _212.Params): _212.ParamsProtoMsg;
        };
        TransferInProgressRecordIds: {
            typeUrl: string;
            encode(message: _212.TransferInProgressRecordIds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.TransferInProgressRecordIds;
            fromPartial(object: Partial<_212.TransferInProgressRecordIds>): _212.TransferInProgressRecordIds;
            fromAmino(object: _212.TransferInProgressRecordIdsAmino): _212.TransferInProgressRecordIds;
            toAmino(message: _212.TransferInProgressRecordIds): _212.TransferInProgressRecordIdsAmino;
            fromAminoMsg(object: _212.TransferInProgressRecordIdsAminoMsg): _212.TransferInProgressRecordIds;
            fromProtoMsg(message: _212.TransferInProgressRecordIdsProtoMsg): _212.TransferInProgressRecordIds;
            toProto(message: _212.TransferInProgressRecordIds): Uint8Array;
            toProtoMsg(message: _212.TransferInProgressRecordIds): _212.TransferInProgressRecordIdsProtoMsg;
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
    };
    const stakeibc: {
        MsgClientImpl: typeof _374.MsgClientImpl;
        QueryClientImpl: typeof _367.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _225.QueryParamsRequest): Promise<_225.QueryParamsResponse>;
            validators(request: _225.QueryGetValidatorsRequest): Promise<_225.QueryGetValidatorsResponse>;
            hostZone(request: _225.QueryGetHostZoneRequest): Promise<_225.QueryGetHostZoneResponse>;
            hostZoneAll(request?: _225.QueryAllHostZoneRequest): Promise<_225.QueryAllHostZoneResponse>;
            moduleAddress(request: _225.QueryModuleAddressRequest): Promise<_225.QueryModuleAddressResponse>;
            interchainAccountFromAddress(request: _225.QueryInterchainAccountFromAddressRequest): Promise<_225.QueryInterchainAccountFromAddressResponse>;
            epochTracker(request: _225.QueryGetEpochTrackerRequest): Promise<_225.QueryGetEpochTrackerResponse>;
            epochTrackerAll(request?: _225.QueryAllEpochTrackerRequest): Promise<_225.QueryAllEpochTrackerResponse>;
            nextPacketSequence(request: _225.QueryGetNextPacketSequenceRequest): Promise<_225.QueryGetNextPacketSequenceResponse>;
            addressUnbondings(request: _225.QueryAddressUnbondings): Promise<_225.QueryAddressUnbondingsResponse>;
            allTradeRoutes(request?: _225.QueryAllTradeRoutes): Promise<_225.QueryAllTradeRoutesResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _227.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lSMLiquidStake(value: _227.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _227.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                registerHostZone(value: _227.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimUndelegatedTokens(value: _227.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                rebalanceValidators(value: _227.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addValidators(value: _227.MsgAddValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                changeValidatorWeight(value: _227.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteValidator(value: _227.MsgDeleteValidator): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreInterchainAccount(value: _227.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                closeDelegationChannel(value: _227.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateValidatorSharesExchRate(value: _227.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                calibrateDelegation(value: _227.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                clearBalance(value: _227.MsgClearBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _227.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _227.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createTradeRoute(value: _227.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteTradeRoute(value: _227.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateTradeRoute(value: _227.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setCommunityPoolRebate(value: _227.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                toggleTradeController(value: _227.MsgToggleTradeController): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateHostZoneParams(value: _227.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _227.MsgLiquidStake): {
                    typeUrl: string;
                    value: _227.MsgLiquidStake;
                };
                lSMLiquidStake(value: _227.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: _227.MsgLSMLiquidStake;
                };
                redeemStake(value: _227.MsgRedeemStake): {
                    typeUrl: string;
                    value: _227.MsgRedeemStake;
                };
                registerHostZone(value: _227.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _227.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _227.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _227.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _227.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _227.MsgRebalanceValidators;
                };
                addValidators(value: _227.MsgAddValidators): {
                    typeUrl: string;
                    value: _227.MsgAddValidators;
                };
                changeValidatorWeight(value: _227.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: _227.MsgChangeValidatorWeights;
                };
                deleteValidator(value: _227.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _227.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _227.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _227.MsgRestoreInterchainAccount;
                };
                closeDelegationChannel(value: _227.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: _227.MsgCloseDelegationChannel;
                };
                updateValidatorSharesExchRate(value: _227.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _227.MsgUpdateValidatorSharesExchRate;
                };
                calibrateDelegation(value: _227.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: _227.MsgCalibrateDelegation;
                };
                clearBalance(value: _227.MsgClearBalance): {
                    typeUrl: string;
                    value: _227.MsgClearBalance;
                };
                updateInnerRedemptionRateBounds(value: _227.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _227.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _227.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _227.MsgResumeHostZone;
                };
                createTradeRoute(value: _227.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: _227.MsgCreateTradeRoute;
                };
                deleteTradeRoute(value: _227.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: _227.MsgDeleteTradeRoute;
                };
                updateTradeRoute(value: _227.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: _227.MsgUpdateTradeRoute;
                };
                setCommunityPoolRebate(value: _227.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: _227.MsgSetCommunityPoolRebate;
                };
                toggleTradeController(value: _227.MsgToggleTradeController): {
                    typeUrl: string;
                    value: _227.MsgToggleTradeController;
                };
                updateHostZoneParams(value: _227.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: _227.MsgUpdateHostZoneParams;
                };
            };
            fromPartial: {
                liquidStake(value: _227.MsgLiquidStake): {
                    typeUrl: string;
                    value: _227.MsgLiquidStake;
                };
                lSMLiquidStake(value: _227.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: _227.MsgLSMLiquidStake;
                };
                redeemStake(value: _227.MsgRedeemStake): {
                    typeUrl: string;
                    value: _227.MsgRedeemStake;
                };
                registerHostZone(value: _227.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _227.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _227.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _227.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _227.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _227.MsgRebalanceValidators;
                };
                addValidators(value: _227.MsgAddValidators): {
                    typeUrl: string;
                    value: _227.MsgAddValidators;
                };
                changeValidatorWeight(value: _227.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: _227.MsgChangeValidatorWeights;
                };
                deleteValidator(value: _227.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _227.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _227.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _227.MsgRestoreInterchainAccount;
                };
                closeDelegationChannel(value: _227.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: _227.MsgCloseDelegationChannel;
                };
                updateValidatorSharesExchRate(value: _227.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _227.MsgUpdateValidatorSharesExchRate;
                };
                calibrateDelegation(value: _227.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: _227.MsgCalibrateDelegation;
                };
                clearBalance(value: _227.MsgClearBalance): {
                    typeUrl: string;
                    value: _227.MsgClearBalance;
                };
                updateInnerRedemptionRateBounds(value: _227.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _227.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _227.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _227.MsgResumeHostZone;
                };
                createTradeRoute(value: _227.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: _227.MsgCreateTradeRoute;
                };
                deleteTradeRoute(value: _227.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: _227.MsgDeleteTradeRoute;
                };
                updateTradeRoute(value: _227.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: _227.MsgUpdateTradeRoute;
                };
                setCommunityPoolRebate(value: _227.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: _227.MsgSetCommunityPoolRebate;
                };
                toggleTradeController(value: _227.MsgToggleTradeController): {
                    typeUrl: string;
                    value: _227.MsgToggleTradeController;
                };
                updateHostZoneParams(value: _227.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: _227.MsgUpdateHostZoneParams;
                };
            };
        };
        AminoConverter: {
            "/stride.stakeibc.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _227.MsgLiquidStake) => _227.MsgLiquidStakeAmino;
                fromAmino: (object: _227.MsgLiquidStakeAmino) => _227.MsgLiquidStake;
            };
            "/stride.stakeibc.MsgLSMLiquidStake": {
                aminoType: string;
                toAmino: (message: _227.MsgLSMLiquidStake) => _227.MsgLSMLiquidStakeAmino;
                fromAmino: (object: _227.MsgLSMLiquidStakeAmino) => _227.MsgLSMLiquidStake;
            };
            "/stride.stakeibc.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _227.MsgRedeemStake) => _227.MsgRedeemStakeAmino;
                fromAmino: (object: _227.MsgRedeemStakeAmino) => _227.MsgRedeemStake;
            };
            "/stride.stakeibc.MsgRegisterHostZone": {
                aminoType: string;
                toAmino: (message: _227.MsgRegisterHostZone) => _227.MsgRegisterHostZoneAmino;
                fromAmino: (object: _227.MsgRegisterHostZoneAmino) => _227.MsgRegisterHostZone;
            };
            "/stride.stakeibc.MsgClaimUndelegatedTokens": {
                aminoType: string;
                toAmino: (message: _227.MsgClaimUndelegatedTokens) => _227.MsgClaimUndelegatedTokensAmino;
                fromAmino: (object: _227.MsgClaimUndelegatedTokensAmino) => _227.MsgClaimUndelegatedTokens;
            };
            "/stride.stakeibc.MsgRebalanceValidators": {
                aminoType: string;
                toAmino: (message: _227.MsgRebalanceValidators) => _227.MsgRebalanceValidatorsAmino;
                fromAmino: (object: _227.MsgRebalanceValidatorsAmino) => _227.MsgRebalanceValidators;
            };
            "/stride.stakeibc.MsgAddValidators": {
                aminoType: string;
                toAmino: (message: _227.MsgAddValidators) => _227.MsgAddValidatorsAmino;
                fromAmino: (object: _227.MsgAddValidatorsAmino) => _227.MsgAddValidators;
            };
            "/stride.stakeibc.MsgChangeValidatorWeights": {
                aminoType: string;
                toAmino: (message: _227.MsgChangeValidatorWeights) => _227.MsgChangeValidatorWeightsAmino;
                fromAmino: (object: _227.MsgChangeValidatorWeightsAmino) => _227.MsgChangeValidatorWeights;
            };
            "/stride.stakeibc.MsgDeleteValidator": {
                aminoType: string;
                toAmino: (message: _227.MsgDeleteValidator) => _227.MsgDeleteValidatorAmino;
                fromAmino: (object: _227.MsgDeleteValidatorAmino) => _227.MsgDeleteValidator;
            };
            "/stride.stakeibc.MsgRestoreInterchainAccount": {
                aminoType: string;
                toAmino: (message: _227.MsgRestoreInterchainAccount) => _227.MsgRestoreInterchainAccountAmino;
                fromAmino: (object: _227.MsgRestoreInterchainAccountAmino) => _227.MsgRestoreInterchainAccount;
            };
            "/stride.stakeibc.MsgCloseDelegationChannel": {
                aminoType: string;
                toAmino: (message: _227.MsgCloseDelegationChannel) => _227.MsgCloseDelegationChannelAmino;
                fromAmino: (object: _227.MsgCloseDelegationChannelAmino) => _227.MsgCloseDelegationChannel;
            };
            "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
                aminoType: string;
                toAmino: (message: _227.MsgUpdateValidatorSharesExchRate) => _227.MsgUpdateValidatorSharesExchRateAmino;
                fromAmino: (object: _227.MsgUpdateValidatorSharesExchRateAmino) => _227.MsgUpdateValidatorSharesExchRate;
            };
            "/stride.stakeibc.MsgCalibrateDelegation": {
                aminoType: string;
                toAmino: (message: _227.MsgCalibrateDelegation) => _227.MsgCalibrateDelegationAmino;
                fromAmino: (object: _227.MsgCalibrateDelegationAmino) => _227.MsgCalibrateDelegation;
            };
            "/stride.stakeibc.MsgClearBalance": {
                aminoType: string;
                toAmino: (message: _227.MsgClearBalance) => _227.MsgClearBalanceAmino;
                fromAmino: (object: _227.MsgClearBalanceAmino) => _227.MsgClearBalance;
            };
            "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _227.MsgUpdateInnerRedemptionRateBounds) => _227.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _227.MsgUpdateInnerRedemptionRateBoundsAmino) => _227.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.stakeibc.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _227.MsgResumeHostZone) => _227.MsgResumeHostZoneAmino;
                fromAmino: (object: _227.MsgResumeHostZoneAmino) => _227.MsgResumeHostZone;
            };
            "/stride.stakeibc.MsgCreateTradeRoute": {
                aminoType: string;
                toAmino: (message: _227.MsgCreateTradeRoute) => _227.MsgCreateTradeRouteAmino;
                fromAmino: (object: _227.MsgCreateTradeRouteAmino) => _227.MsgCreateTradeRoute;
            };
            "/stride.stakeibc.MsgDeleteTradeRoute": {
                aminoType: string;
                toAmino: (message: _227.MsgDeleteTradeRoute) => _227.MsgDeleteTradeRouteAmino;
                fromAmino: (object: _227.MsgDeleteTradeRouteAmino) => _227.MsgDeleteTradeRoute;
            };
            "/stride.stakeibc.MsgUpdateTradeRoute": {
                aminoType: string;
                toAmino: (message: _227.MsgUpdateTradeRoute) => _227.MsgUpdateTradeRouteAmino;
                fromAmino: (object: _227.MsgUpdateTradeRouteAmino) => _227.MsgUpdateTradeRoute;
            };
            "/stride.stakeibc.MsgSetCommunityPoolRebate": {
                aminoType: string;
                toAmino: (message: _227.MsgSetCommunityPoolRebate) => _227.MsgSetCommunityPoolRebateAmino;
                fromAmino: (object: _227.MsgSetCommunityPoolRebateAmino) => _227.MsgSetCommunityPoolRebate;
            };
            "/stride.stakeibc.MsgToggleTradeController": {
                aminoType: string;
                toAmino: (message: _227.MsgToggleTradeController) => _227.MsgToggleTradeControllerAmino;
                fromAmino: (object: _227.MsgToggleTradeControllerAmino) => _227.MsgToggleTradeController;
            };
            "/stride.stakeibc.MsgUpdateHostZoneParams": {
                aminoType: string;
                toAmino: (message: _227.MsgUpdateHostZoneParams) => _227.MsgUpdateHostZoneParamsAmino;
                fromAmino: (object: _227.MsgUpdateHostZoneParamsAmino) => _227.MsgUpdateHostZoneParams;
            };
        };
        Validator: {
            typeUrl: string;
            encode(message: _228.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.Validator;
            fromPartial(object: Partial<_228.Validator>): _228.Validator;
            fromAmino(object: _228.ValidatorAmino): _228.Validator;
            toAmino(message: _228.Validator): _228.ValidatorAmino;
            fromAminoMsg(object: _228.ValidatorAminoMsg): _228.Validator;
            fromProtoMsg(message: _228.ValidatorProtoMsg): _228.Validator;
            toProto(message: _228.Validator): Uint8Array;
            toProtoMsg(message: _228.Validator): _228.ValidatorProtoMsg;
        };
        authzPermissionChangeFromJSON(object: any): _227.AuthzPermissionChange;
        authzPermissionChangeToJSON(object: _227.AuthzPermissionChange): string;
        AuthzPermissionChange: typeof _227.AuthzPermissionChange;
        AuthzPermissionChangeSDKType: typeof _227.AuthzPermissionChange;
        AuthzPermissionChangeAmino: typeof _227.AuthzPermissionChange;
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _227.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_227.MsgUpdateInnerRedemptionRateBounds>): _227.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _227.MsgUpdateInnerRedemptionRateBoundsAmino): _227.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _227.MsgUpdateInnerRedemptionRateBounds): _227.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _227.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _227.MsgUpdateInnerRedemptionRateBounds;
            fromProtoMsg(message: _227.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _227.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _227.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _227.MsgUpdateInnerRedemptionRateBounds): _227.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _227.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_227.MsgUpdateInnerRedemptionRateBoundsResponse>): _227.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _227.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _227.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _227.MsgUpdateInnerRedemptionRateBoundsResponse): _227.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _227.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _227.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _227.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _227.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _227.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _227.MsgUpdateInnerRedemptionRateBoundsResponse): _227.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _227.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgLiquidStake;
            fromPartial(object: Partial<_227.MsgLiquidStake>): _227.MsgLiquidStake;
            fromAmino(object: _227.MsgLiquidStakeAmino): _227.MsgLiquidStake;
            toAmino(message: _227.MsgLiquidStake): _227.MsgLiquidStakeAmino;
            fromAminoMsg(object: _227.MsgLiquidStakeAminoMsg): _227.MsgLiquidStake;
            toAminoMsg(message: _227.MsgLiquidStake): _227.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _227.MsgLiquidStakeProtoMsg): _227.MsgLiquidStake;
            toProto(message: _227.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _227.MsgLiquidStake): _227.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _227.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_227.MsgLiquidStakeResponse>): _227.MsgLiquidStakeResponse;
            fromAmino(object: _227.MsgLiquidStakeResponseAmino): _227.MsgLiquidStakeResponse;
            toAmino(message: _227.MsgLiquidStakeResponse): _227.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _227.MsgLiquidStakeResponseAminoMsg): _227.MsgLiquidStakeResponse;
            fromProtoMsg(message: _227.MsgLiquidStakeResponseProtoMsg): _227.MsgLiquidStakeResponse;
            toProto(message: _227.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _227.MsgLiquidStakeResponse): _227.MsgLiquidStakeResponseProtoMsg;
        };
        MsgLSMLiquidStake: {
            typeUrl: string;
            encode(message: _227.MsgLSMLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgLSMLiquidStake;
            fromPartial(object: Partial<_227.MsgLSMLiquidStake>): _227.MsgLSMLiquidStake;
            fromAmino(object: _227.MsgLSMLiquidStakeAmino): _227.MsgLSMLiquidStake;
            toAmino(message: _227.MsgLSMLiquidStake): _227.MsgLSMLiquidStakeAmino;
            fromAminoMsg(object: _227.MsgLSMLiquidStakeAminoMsg): _227.MsgLSMLiquidStake;
            toAminoMsg(message: _227.MsgLSMLiquidStake): _227.MsgLSMLiquidStakeAminoMsg;
            fromProtoMsg(message: _227.MsgLSMLiquidStakeProtoMsg): _227.MsgLSMLiquidStake;
            toProto(message: _227.MsgLSMLiquidStake): Uint8Array;
            toProtoMsg(message: _227.MsgLSMLiquidStake): _227.MsgLSMLiquidStakeProtoMsg;
        };
        MsgLSMLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _227.MsgLSMLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgLSMLiquidStakeResponse;
            fromPartial(object: Partial<_227.MsgLSMLiquidStakeResponse>): _227.MsgLSMLiquidStakeResponse;
            fromAmino(object: _227.MsgLSMLiquidStakeResponseAmino): _227.MsgLSMLiquidStakeResponse;
            toAmino(message: _227.MsgLSMLiquidStakeResponse): _227.MsgLSMLiquidStakeResponseAmino;
            fromAminoMsg(object: _227.MsgLSMLiquidStakeResponseAminoMsg): _227.MsgLSMLiquidStakeResponse;
            fromProtoMsg(message: _227.MsgLSMLiquidStakeResponseProtoMsg): _227.MsgLSMLiquidStakeResponse;
            toProto(message: _227.MsgLSMLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _227.MsgLSMLiquidStakeResponse): _227.MsgLSMLiquidStakeResponseProtoMsg;
        };
        MsgClearBalance: {
            typeUrl: string;
            encode(message: _227.MsgClearBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgClearBalance;
            fromPartial(object: Partial<_227.MsgClearBalance>): _227.MsgClearBalance;
            fromAmino(object: _227.MsgClearBalanceAmino): _227.MsgClearBalance;
            toAmino(message: _227.MsgClearBalance): _227.MsgClearBalanceAmino;
            fromAminoMsg(object: _227.MsgClearBalanceAminoMsg): _227.MsgClearBalance;
            toAminoMsg(message: _227.MsgClearBalance): _227.MsgClearBalanceAminoMsg;
            fromProtoMsg(message: _227.MsgClearBalanceProtoMsg): _227.MsgClearBalance;
            toProto(message: _227.MsgClearBalance): Uint8Array;
            toProtoMsg(message: _227.MsgClearBalance): _227.MsgClearBalanceProtoMsg;
        };
        MsgClearBalanceResponse: {
            typeUrl: string;
            encode(_: _227.MsgClearBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgClearBalanceResponse;
            fromPartial(_: Partial<_227.MsgClearBalanceResponse>): _227.MsgClearBalanceResponse;
            fromAmino(_: _227.MsgClearBalanceResponseAmino): _227.MsgClearBalanceResponse;
            toAmino(_: _227.MsgClearBalanceResponse): _227.MsgClearBalanceResponseAmino;
            fromAminoMsg(object: _227.MsgClearBalanceResponseAminoMsg): _227.MsgClearBalanceResponse;
            fromProtoMsg(message: _227.MsgClearBalanceResponseProtoMsg): _227.MsgClearBalanceResponse;
            toProto(message: _227.MsgClearBalanceResponse): Uint8Array;
            toProtoMsg(message: _227.MsgClearBalanceResponse): _227.MsgClearBalanceResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _227.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgRedeemStake;
            fromPartial(object: Partial<_227.MsgRedeemStake>): _227.MsgRedeemStake;
            fromAmino(object: _227.MsgRedeemStakeAmino): _227.MsgRedeemStake;
            toAmino(message: _227.MsgRedeemStake): _227.MsgRedeemStakeAmino;
            fromAminoMsg(object: _227.MsgRedeemStakeAminoMsg): _227.MsgRedeemStake;
            toAminoMsg(message: _227.MsgRedeemStake): _227.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _227.MsgRedeemStakeProtoMsg): _227.MsgRedeemStake;
            toProto(message: _227.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _227.MsgRedeemStake): _227.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(_: _227.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgRedeemStakeResponse;
            fromPartial(_: Partial<_227.MsgRedeemStakeResponse>): _227.MsgRedeemStakeResponse;
            fromAmino(_: _227.MsgRedeemStakeResponseAmino): _227.MsgRedeemStakeResponse;
            toAmino(_: _227.MsgRedeemStakeResponse): _227.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _227.MsgRedeemStakeResponseAminoMsg): _227.MsgRedeemStakeResponse;
            fromProtoMsg(message: _227.MsgRedeemStakeResponseProtoMsg): _227.MsgRedeemStakeResponse;
            toProto(message: _227.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _227.MsgRedeemStakeResponse): _227.MsgRedeemStakeResponseProtoMsg;
        };
        MsgRegisterHostZone: {
            typeUrl: string;
            encode(message: _227.MsgRegisterHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgRegisterHostZone;
            fromPartial(object: Partial<_227.MsgRegisterHostZone>): _227.MsgRegisterHostZone;
            fromAmino(object: _227.MsgRegisterHostZoneAmino): _227.MsgRegisterHostZone;
            toAmino(message: _227.MsgRegisterHostZone): _227.MsgRegisterHostZoneAmino;
            fromAminoMsg(object: _227.MsgRegisterHostZoneAminoMsg): _227.MsgRegisterHostZone;
            toAminoMsg(message: _227.MsgRegisterHostZone): _227.MsgRegisterHostZoneAminoMsg;
            fromProtoMsg(message: _227.MsgRegisterHostZoneProtoMsg): _227.MsgRegisterHostZone;
            toProto(message: _227.MsgRegisterHostZone): Uint8Array;
            toProtoMsg(message: _227.MsgRegisterHostZone): _227.MsgRegisterHostZoneProtoMsg;
        };
        MsgRegisterHostZoneResponse: {
            typeUrl: string;
            encode(_: _227.MsgRegisterHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgRegisterHostZoneResponse;
            fromPartial(_: Partial<_227.MsgRegisterHostZoneResponse>): _227.MsgRegisterHostZoneResponse;
            fromAmino(_: _227.MsgRegisterHostZoneResponseAmino): _227.MsgRegisterHostZoneResponse;
            toAmino(_: _227.MsgRegisterHostZoneResponse): _227.MsgRegisterHostZoneResponseAmino;
            fromAminoMsg(object: _227.MsgRegisterHostZoneResponseAminoMsg): _227.MsgRegisterHostZoneResponse;
            fromProtoMsg(message: _227.MsgRegisterHostZoneResponseProtoMsg): _227.MsgRegisterHostZoneResponse;
            toProto(message: _227.MsgRegisterHostZoneResponse): Uint8Array;
            toProtoMsg(message: _227.MsgRegisterHostZoneResponse): _227.MsgRegisterHostZoneResponseProtoMsg;
        };
        MsgClaimUndelegatedTokens: {
            typeUrl: string;
            encode(message: _227.MsgClaimUndelegatedTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgClaimUndelegatedTokens;
            fromPartial(object: Partial<_227.MsgClaimUndelegatedTokens>): _227.MsgClaimUndelegatedTokens;
            fromAmino(object: _227.MsgClaimUndelegatedTokensAmino): _227.MsgClaimUndelegatedTokens;
            toAmino(message: _227.MsgClaimUndelegatedTokens): _227.MsgClaimUndelegatedTokensAmino;
            fromAminoMsg(object: _227.MsgClaimUndelegatedTokensAminoMsg): _227.MsgClaimUndelegatedTokens;
            toAminoMsg(message: _227.MsgClaimUndelegatedTokens): _227.MsgClaimUndelegatedTokensAminoMsg;
            fromProtoMsg(message: _227.MsgClaimUndelegatedTokensProtoMsg): _227.MsgClaimUndelegatedTokens;
            toProto(message: _227.MsgClaimUndelegatedTokens): Uint8Array;
            toProtoMsg(message: _227.MsgClaimUndelegatedTokens): _227.MsgClaimUndelegatedTokensProtoMsg;
        };
        MsgClaimUndelegatedTokensResponse: {
            typeUrl: string;
            encode(_: _227.MsgClaimUndelegatedTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgClaimUndelegatedTokensResponse;
            fromPartial(_: Partial<_227.MsgClaimUndelegatedTokensResponse>): _227.MsgClaimUndelegatedTokensResponse;
            fromAmino(_: _227.MsgClaimUndelegatedTokensResponseAmino): _227.MsgClaimUndelegatedTokensResponse;
            toAmino(_: _227.MsgClaimUndelegatedTokensResponse): _227.MsgClaimUndelegatedTokensResponseAmino;
            fromAminoMsg(object: _227.MsgClaimUndelegatedTokensResponseAminoMsg): _227.MsgClaimUndelegatedTokensResponse;
            fromProtoMsg(message: _227.MsgClaimUndelegatedTokensResponseProtoMsg): _227.MsgClaimUndelegatedTokensResponse;
            toProto(message: _227.MsgClaimUndelegatedTokensResponse): Uint8Array;
            toProtoMsg(message: _227.MsgClaimUndelegatedTokensResponse): _227.MsgClaimUndelegatedTokensResponseProtoMsg;
        };
        MsgRebalanceValidators: {
            typeUrl: string;
            encode(message: _227.MsgRebalanceValidators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgRebalanceValidators;
            fromPartial(object: Partial<_227.MsgRebalanceValidators>): _227.MsgRebalanceValidators;
            fromAmino(object: _227.MsgRebalanceValidatorsAmino): _227.MsgRebalanceValidators;
            toAmino(message: _227.MsgRebalanceValidators): _227.MsgRebalanceValidatorsAmino;
            fromAminoMsg(object: _227.MsgRebalanceValidatorsAminoMsg): _227.MsgRebalanceValidators;
            toAminoMsg(message: _227.MsgRebalanceValidators): _227.MsgRebalanceValidatorsAminoMsg;
            fromProtoMsg(message: _227.MsgRebalanceValidatorsProtoMsg): _227.MsgRebalanceValidators;
            toProto(message: _227.MsgRebalanceValidators): Uint8Array;
            toProtoMsg(message: _227.MsgRebalanceValidators): _227.MsgRebalanceValidatorsProtoMsg;
        };
        MsgRebalanceValidatorsResponse: {
            typeUrl: string;
            encode(_: _227.MsgRebalanceValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgRebalanceValidatorsResponse;
            fromPartial(_: Partial<_227.MsgRebalanceValidatorsResponse>): _227.MsgRebalanceValidatorsResponse;
            fromAmino(_: _227.MsgRebalanceValidatorsResponseAmino): _227.MsgRebalanceValidatorsResponse;
            toAmino(_: _227.MsgRebalanceValidatorsResponse): _227.MsgRebalanceValidatorsResponseAmino;
            fromAminoMsg(object: _227.MsgRebalanceValidatorsResponseAminoMsg): _227.MsgRebalanceValidatorsResponse;
            fromProtoMsg(message: _227.MsgRebalanceValidatorsResponseProtoMsg): _227.MsgRebalanceValidatorsResponse;
            toProto(message: _227.MsgRebalanceValidatorsResponse): Uint8Array;
            toProtoMsg(message: _227.MsgRebalanceValidatorsResponse): _227.MsgRebalanceValidatorsResponseProtoMsg;
        };
        MsgAddValidators: {
            typeUrl: string;
            encode(message: _227.MsgAddValidators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgAddValidators;
            fromPartial(object: Partial<_227.MsgAddValidators>): _227.MsgAddValidators;
            fromAmino(object: _227.MsgAddValidatorsAmino): _227.MsgAddValidators;
            toAmino(message: _227.MsgAddValidators): _227.MsgAddValidatorsAmino;
            fromAminoMsg(object: _227.MsgAddValidatorsAminoMsg): _227.MsgAddValidators;
            fromProtoMsg(message: _227.MsgAddValidatorsProtoMsg): _227.MsgAddValidators;
            toProto(message: _227.MsgAddValidators): Uint8Array;
            toProtoMsg(message: _227.MsgAddValidators): _227.MsgAddValidatorsProtoMsg;
        };
        MsgAddValidatorsResponse: {
            typeUrl: string;
            encode(_: _227.MsgAddValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgAddValidatorsResponse;
            fromPartial(_: Partial<_227.MsgAddValidatorsResponse>): _227.MsgAddValidatorsResponse;
            fromAmino(_: _227.MsgAddValidatorsResponseAmino): _227.MsgAddValidatorsResponse;
            toAmino(_: _227.MsgAddValidatorsResponse): _227.MsgAddValidatorsResponseAmino;
            fromAminoMsg(object: _227.MsgAddValidatorsResponseAminoMsg): _227.MsgAddValidatorsResponse;
            fromProtoMsg(message: _227.MsgAddValidatorsResponseProtoMsg): _227.MsgAddValidatorsResponse;
            toProto(message: _227.MsgAddValidatorsResponse): Uint8Array;
            toProtoMsg(message: _227.MsgAddValidatorsResponse): _227.MsgAddValidatorsResponseProtoMsg;
        };
        ValidatorWeight: {
            typeUrl: string;
            encode(message: _227.ValidatorWeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.ValidatorWeight;
            fromPartial(object: Partial<_227.ValidatorWeight>): _227.ValidatorWeight;
            fromAmino(object: _227.ValidatorWeightAmino): _227.ValidatorWeight;
            toAmino(message: _227.ValidatorWeight): _227.ValidatorWeightAmino;
            fromAminoMsg(object: _227.ValidatorWeightAminoMsg): _227.ValidatorWeight;
            fromProtoMsg(message: _227.ValidatorWeightProtoMsg): _227.ValidatorWeight;
            toProto(message: _227.ValidatorWeight): Uint8Array;
            toProtoMsg(message: _227.ValidatorWeight): _227.ValidatorWeightProtoMsg;
        };
        MsgChangeValidatorWeights: {
            typeUrl: string;
            encode(message: _227.MsgChangeValidatorWeights, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgChangeValidatorWeights;
            fromPartial(object: Partial<_227.MsgChangeValidatorWeights>): _227.MsgChangeValidatorWeights;
            fromAmino(object: _227.MsgChangeValidatorWeightsAmino): _227.MsgChangeValidatorWeights;
            toAmino(message: _227.MsgChangeValidatorWeights): _227.MsgChangeValidatorWeightsAmino;
            fromAminoMsg(object: _227.MsgChangeValidatorWeightsAminoMsg): _227.MsgChangeValidatorWeights;
            fromProtoMsg(message: _227.MsgChangeValidatorWeightsProtoMsg): _227.MsgChangeValidatorWeights;
            toProto(message: _227.MsgChangeValidatorWeights): Uint8Array;
            toProtoMsg(message: _227.MsgChangeValidatorWeights): _227.MsgChangeValidatorWeightsProtoMsg;
        };
        MsgChangeValidatorWeightsResponse: {
            typeUrl: string;
            encode(_: _227.MsgChangeValidatorWeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgChangeValidatorWeightsResponse;
            fromPartial(_: Partial<_227.MsgChangeValidatorWeightsResponse>): _227.MsgChangeValidatorWeightsResponse;
            fromAmino(_: _227.MsgChangeValidatorWeightsResponseAmino): _227.MsgChangeValidatorWeightsResponse;
            toAmino(_: _227.MsgChangeValidatorWeightsResponse): _227.MsgChangeValidatorWeightsResponseAmino;
            fromAminoMsg(object: _227.MsgChangeValidatorWeightsResponseAminoMsg): _227.MsgChangeValidatorWeightsResponse;
            fromProtoMsg(message: _227.MsgChangeValidatorWeightsResponseProtoMsg): _227.MsgChangeValidatorWeightsResponse;
            toProto(message: _227.MsgChangeValidatorWeightsResponse): Uint8Array;
            toProtoMsg(message: _227.MsgChangeValidatorWeightsResponse): _227.MsgChangeValidatorWeightsResponseProtoMsg;
        };
        MsgDeleteValidator: {
            typeUrl: string;
            encode(message: _227.MsgDeleteValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgDeleteValidator;
            fromPartial(object: Partial<_227.MsgDeleteValidator>): _227.MsgDeleteValidator;
            fromAmino(object: _227.MsgDeleteValidatorAmino): _227.MsgDeleteValidator;
            toAmino(message: _227.MsgDeleteValidator): _227.MsgDeleteValidatorAmino;
            fromAminoMsg(object: _227.MsgDeleteValidatorAminoMsg): _227.MsgDeleteValidator;
            toAminoMsg(message: _227.MsgDeleteValidator): _227.MsgDeleteValidatorAminoMsg;
            fromProtoMsg(message: _227.MsgDeleteValidatorProtoMsg): _227.MsgDeleteValidator;
            toProto(message: _227.MsgDeleteValidator): Uint8Array;
            toProtoMsg(message: _227.MsgDeleteValidator): _227.MsgDeleteValidatorProtoMsg;
        };
        MsgDeleteValidatorResponse: {
            typeUrl: string;
            encode(_: _227.MsgDeleteValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgDeleteValidatorResponse;
            fromPartial(_: Partial<_227.MsgDeleteValidatorResponse>): _227.MsgDeleteValidatorResponse;
            fromAmino(_: _227.MsgDeleteValidatorResponseAmino): _227.MsgDeleteValidatorResponse;
            toAmino(_: _227.MsgDeleteValidatorResponse): _227.MsgDeleteValidatorResponseAmino;
            fromAminoMsg(object: _227.MsgDeleteValidatorResponseAminoMsg): _227.MsgDeleteValidatorResponse;
            fromProtoMsg(message: _227.MsgDeleteValidatorResponseProtoMsg): _227.MsgDeleteValidatorResponse;
            toProto(message: _227.MsgDeleteValidatorResponse): Uint8Array;
            toProtoMsg(message: _227.MsgDeleteValidatorResponse): _227.MsgDeleteValidatorResponseProtoMsg;
        };
        MsgRestoreInterchainAccount: {
            typeUrl: string;
            encode(message: _227.MsgRestoreInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgRestoreInterchainAccount;
            fromPartial(object: Partial<_227.MsgRestoreInterchainAccount>): _227.MsgRestoreInterchainAccount;
            fromAmino(object: _227.MsgRestoreInterchainAccountAmino): _227.MsgRestoreInterchainAccount;
            toAmino(message: _227.MsgRestoreInterchainAccount): _227.MsgRestoreInterchainAccountAmino;
            fromAminoMsg(object: _227.MsgRestoreInterchainAccountAminoMsg): _227.MsgRestoreInterchainAccount;
            toAminoMsg(message: _227.MsgRestoreInterchainAccount): _227.MsgRestoreInterchainAccountAminoMsg;
            fromProtoMsg(message: _227.MsgRestoreInterchainAccountProtoMsg): _227.MsgRestoreInterchainAccount;
            toProto(message: _227.MsgRestoreInterchainAccount): Uint8Array;
            toProtoMsg(message: _227.MsgRestoreInterchainAccount): _227.MsgRestoreInterchainAccountProtoMsg;
        };
        MsgRestoreInterchainAccountResponse: {
            typeUrl: string;
            encode(_: _227.MsgRestoreInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgRestoreInterchainAccountResponse;
            fromPartial(_: Partial<_227.MsgRestoreInterchainAccountResponse>): _227.MsgRestoreInterchainAccountResponse;
            fromAmino(_: _227.MsgRestoreInterchainAccountResponseAmino): _227.MsgRestoreInterchainAccountResponse;
            toAmino(_: _227.MsgRestoreInterchainAccountResponse): _227.MsgRestoreInterchainAccountResponseAmino;
            fromAminoMsg(object: _227.MsgRestoreInterchainAccountResponseAminoMsg): _227.MsgRestoreInterchainAccountResponse;
            fromProtoMsg(message: _227.MsgRestoreInterchainAccountResponseProtoMsg): _227.MsgRestoreInterchainAccountResponse;
            toProto(message: _227.MsgRestoreInterchainAccountResponse): Uint8Array;
            toProtoMsg(message: _227.MsgRestoreInterchainAccountResponse): _227.MsgRestoreInterchainAccountResponseProtoMsg;
        };
        MsgCloseDelegationChannel: {
            typeUrl: string;
            encode(message: _227.MsgCloseDelegationChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgCloseDelegationChannel;
            fromPartial(object: Partial<_227.MsgCloseDelegationChannel>): _227.MsgCloseDelegationChannel;
            fromAmino(object: _227.MsgCloseDelegationChannelAmino): _227.MsgCloseDelegationChannel;
            toAmino(message: _227.MsgCloseDelegationChannel): _227.MsgCloseDelegationChannelAmino;
            fromAminoMsg(object: _227.MsgCloseDelegationChannelAminoMsg): _227.MsgCloseDelegationChannel;
            fromProtoMsg(message: _227.MsgCloseDelegationChannelProtoMsg): _227.MsgCloseDelegationChannel;
            toProto(message: _227.MsgCloseDelegationChannel): Uint8Array;
            toProtoMsg(message: _227.MsgCloseDelegationChannel): _227.MsgCloseDelegationChannelProtoMsg;
        };
        MsgCloseDelegationChannelResponse: {
            typeUrl: string;
            encode(_: _227.MsgCloseDelegationChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgCloseDelegationChannelResponse;
            fromPartial(_: Partial<_227.MsgCloseDelegationChannelResponse>): _227.MsgCloseDelegationChannelResponse;
            fromAmino(_: _227.MsgCloseDelegationChannelResponseAmino): _227.MsgCloseDelegationChannelResponse;
            toAmino(_: _227.MsgCloseDelegationChannelResponse): _227.MsgCloseDelegationChannelResponseAmino;
            fromAminoMsg(object: _227.MsgCloseDelegationChannelResponseAminoMsg): _227.MsgCloseDelegationChannelResponse;
            fromProtoMsg(message: _227.MsgCloseDelegationChannelResponseProtoMsg): _227.MsgCloseDelegationChannelResponse;
            toProto(message: _227.MsgCloseDelegationChannelResponse): Uint8Array;
            toProtoMsg(message: _227.MsgCloseDelegationChannelResponse): _227.MsgCloseDelegationChannelResponseProtoMsg;
        };
        MsgUpdateValidatorSharesExchRate: {
            typeUrl: string;
            encode(message: _227.MsgUpdateValidatorSharesExchRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgUpdateValidatorSharesExchRate;
            fromPartial(object: Partial<_227.MsgUpdateValidatorSharesExchRate>): _227.MsgUpdateValidatorSharesExchRate;
            fromAmino(object: _227.MsgUpdateValidatorSharesExchRateAmino): _227.MsgUpdateValidatorSharesExchRate;
            toAmino(message: _227.MsgUpdateValidatorSharesExchRate): _227.MsgUpdateValidatorSharesExchRateAmino;
            fromAminoMsg(object: _227.MsgUpdateValidatorSharesExchRateAminoMsg): _227.MsgUpdateValidatorSharesExchRate;
            toAminoMsg(message: _227.MsgUpdateValidatorSharesExchRate): _227.MsgUpdateValidatorSharesExchRateAminoMsg;
            fromProtoMsg(message: _227.MsgUpdateValidatorSharesExchRateProtoMsg): _227.MsgUpdateValidatorSharesExchRate;
            toProto(message: _227.MsgUpdateValidatorSharesExchRate): Uint8Array;
            toProtoMsg(message: _227.MsgUpdateValidatorSharesExchRate): _227.MsgUpdateValidatorSharesExchRateProtoMsg;
        };
        MsgUpdateValidatorSharesExchRateResponse: {
            typeUrl: string;
            encode(_: _227.MsgUpdateValidatorSharesExchRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgUpdateValidatorSharesExchRateResponse;
            fromPartial(_: Partial<_227.MsgUpdateValidatorSharesExchRateResponse>): _227.MsgUpdateValidatorSharesExchRateResponse;
            fromAmino(_: _227.MsgUpdateValidatorSharesExchRateResponseAmino): _227.MsgUpdateValidatorSharesExchRateResponse;
            toAmino(_: _227.MsgUpdateValidatorSharesExchRateResponse): _227.MsgUpdateValidatorSharesExchRateResponseAmino;
            fromAminoMsg(object: _227.MsgUpdateValidatorSharesExchRateResponseAminoMsg): _227.MsgUpdateValidatorSharesExchRateResponse;
            fromProtoMsg(message: _227.MsgUpdateValidatorSharesExchRateResponseProtoMsg): _227.MsgUpdateValidatorSharesExchRateResponse;
            toProto(message: _227.MsgUpdateValidatorSharesExchRateResponse): Uint8Array;
            toProtoMsg(message: _227.MsgUpdateValidatorSharesExchRateResponse): _227.MsgUpdateValidatorSharesExchRateResponseProtoMsg;
        };
        MsgCalibrateDelegation: {
            typeUrl: string;
            encode(message: _227.MsgCalibrateDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgCalibrateDelegation;
            fromPartial(object: Partial<_227.MsgCalibrateDelegation>): _227.MsgCalibrateDelegation;
            fromAmino(object: _227.MsgCalibrateDelegationAmino): _227.MsgCalibrateDelegation;
            toAmino(message: _227.MsgCalibrateDelegation): _227.MsgCalibrateDelegationAmino;
            fromAminoMsg(object: _227.MsgCalibrateDelegationAminoMsg): _227.MsgCalibrateDelegation;
            fromProtoMsg(message: _227.MsgCalibrateDelegationProtoMsg): _227.MsgCalibrateDelegation;
            toProto(message: _227.MsgCalibrateDelegation): Uint8Array;
            toProtoMsg(message: _227.MsgCalibrateDelegation): _227.MsgCalibrateDelegationProtoMsg;
        };
        MsgCalibrateDelegationResponse: {
            typeUrl: string;
            encode(_: _227.MsgCalibrateDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgCalibrateDelegationResponse;
            fromPartial(_: Partial<_227.MsgCalibrateDelegationResponse>): _227.MsgCalibrateDelegationResponse;
            fromAmino(_: _227.MsgCalibrateDelegationResponseAmino): _227.MsgCalibrateDelegationResponse;
            toAmino(_: _227.MsgCalibrateDelegationResponse): _227.MsgCalibrateDelegationResponseAmino;
            fromAminoMsg(object: _227.MsgCalibrateDelegationResponseAminoMsg): _227.MsgCalibrateDelegationResponse;
            fromProtoMsg(message: _227.MsgCalibrateDelegationResponseProtoMsg): _227.MsgCalibrateDelegationResponse;
            toProto(message: _227.MsgCalibrateDelegationResponse): Uint8Array;
            toProtoMsg(message: _227.MsgCalibrateDelegationResponse): _227.MsgCalibrateDelegationResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _227.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgResumeHostZone;
            fromPartial(object: Partial<_227.MsgResumeHostZone>): _227.MsgResumeHostZone;
            fromAmino(object: _227.MsgResumeHostZoneAmino): _227.MsgResumeHostZone;
            toAmino(message: _227.MsgResumeHostZone): _227.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _227.MsgResumeHostZoneAminoMsg): _227.MsgResumeHostZone;
            fromProtoMsg(message: _227.MsgResumeHostZoneProtoMsg): _227.MsgResumeHostZone;
            toProto(message: _227.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _227.MsgResumeHostZone): _227.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _227.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_227.MsgResumeHostZoneResponse>): _227.MsgResumeHostZoneResponse;
            fromAmino(_: _227.MsgResumeHostZoneResponseAmino): _227.MsgResumeHostZoneResponse;
            toAmino(_: _227.MsgResumeHostZoneResponse): _227.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _227.MsgResumeHostZoneResponseAminoMsg): _227.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _227.MsgResumeHostZoneResponseProtoMsg): _227.MsgResumeHostZoneResponse;
            toProto(message: _227.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _227.MsgResumeHostZoneResponse): _227.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgCreateTradeRoute: {
            typeUrl: string;
            encode(message: _227.MsgCreateTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgCreateTradeRoute;
            fromPartial(object: Partial<_227.MsgCreateTradeRoute>): _227.MsgCreateTradeRoute;
            fromAmino(object: _227.MsgCreateTradeRouteAmino): _227.MsgCreateTradeRoute;
            toAmino(message: _227.MsgCreateTradeRoute): _227.MsgCreateTradeRouteAmino;
            fromAminoMsg(object: _227.MsgCreateTradeRouteAminoMsg): _227.MsgCreateTradeRoute;
            toAminoMsg(message: _227.MsgCreateTradeRoute): _227.MsgCreateTradeRouteAminoMsg;
            fromProtoMsg(message: _227.MsgCreateTradeRouteProtoMsg): _227.MsgCreateTradeRoute;
            toProto(message: _227.MsgCreateTradeRoute): Uint8Array;
            toProtoMsg(message: _227.MsgCreateTradeRoute): _227.MsgCreateTradeRouteProtoMsg;
        };
        MsgCreateTradeRouteResponse: {
            typeUrl: string;
            encode(_: _227.MsgCreateTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgCreateTradeRouteResponse;
            fromPartial(_: Partial<_227.MsgCreateTradeRouteResponse>): _227.MsgCreateTradeRouteResponse;
            fromAmino(_: _227.MsgCreateTradeRouteResponseAmino): _227.MsgCreateTradeRouteResponse;
            toAmino(_: _227.MsgCreateTradeRouteResponse): _227.MsgCreateTradeRouteResponseAmino;
            fromAminoMsg(object: _227.MsgCreateTradeRouteResponseAminoMsg): _227.MsgCreateTradeRouteResponse;
            fromProtoMsg(message: _227.MsgCreateTradeRouteResponseProtoMsg): _227.MsgCreateTradeRouteResponse;
            toProto(message: _227.MsgCreateTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _227.MsgCreateTradeRouteResponse): _227.MsgCreateTradeRouteResponseProtoMsg;
        };
        MsgDeleteTradeRoute: {
            typeUrl: string;
            encode(message: _227.MsgDeleteTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgDeleteTradeRoute;
            fromPartial(object: Partial<_227.MsgDeleteTradeRoute>): _227.MsgDeleteTradeRoute;
            fromAmino(object: _227.MsgDeleteTradeRouteAmino): _227.MsgDeleteTradeRoute;
            toAmino(message: _227.MsgDeleteTradeRoute): _227.MsgDeleteTradeRouteAmino;
            fromAminoMsg(object: _227.MsgDeleteTradeRouteAminoMsg): _227.MsgDeleteTradeRoute;
            toAminoMsg(message: _227.MsgDeleteTradeRoute): _227.MsgDeleteTradeRouteAminoMsg;
            fromProtoMsg(message: _227.MsgDeleteTradeRouteProtoMsg): _227.MsgDeleteTradeRoute;
            toProto(message: _227.MsgDeleteTradeRoute): Uint8Array;
            toProtoMsg(message: _227.MsgDeleteTradeRoute): _227.MsgDeleteTradeRouteProtoMsg;
        };
        MsgDeleteTradeRouteResponse: {
            typeUrl: string;
            encode(_: _227.MsgDeleteTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgDeleteTradeRouteResponse;
            fromPartial(_: Partial<_227.MsgDeleteTradeRouteResponse>): _227.MsgDeleteTradeRouteResponse;
            fromAmino(_: _227.MsgDeleteTradeRouteResponseAmino): _227.MsgDeleteTradeRouteResponse;
            toAmino(_: _227.MsgDeleteTradeRouteResponse): _227.MsgDeleteTradeRouteResponseAmino;
            fromAminoMsg(object: _227.MsgDeleteTradeRouteResponseAminoMsg): _227.MsgDeleteTradeRouteResponse;
            fromProtoMsg(message: _227.MsgDeleteTradeRouteResponseProtoMsg): _227.MsgDeleteTradeRouteResponse;
            toProto(message: _227.MsgDeleteTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _227.MsgDeleteTradeRouteResponse): _227.MsgDeleteTradeRouteResponseProtoMsg;
        };
        MsgUpdateTradeRoute: {
            typeUrl: string;
            encode(message: _227.MsgUpdateTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgUpdateTradeRoute;
            fromPartial(object: Partial<_227.MsgUpdateTradeRoute>): _227.MsgUpdateTradeRoute;
            fromAmino(object: _227.MsgUpdateTradeRouteAmino): _227.MsgUpdateTradeRoute;
            toAmino(message: _227.MsgUpdateTradeRoute): _227.MsgUpdateTradeRouteAmino;
            fromAminoMsg(object: _227.MsgUpdateTradeRouteAminoMsg): _227.MsgUpdateTradeRoute;
            toAminoMsg(message: _227.MsgUpdateTradeRoute): _227.MsgUpdateTradeRouteAminoMsg;
            fromProtoMsg(message: _227.MsgUpdateTradeRouteProtoMsg): _227.MsgUpdateTradeRoute;
            toProto(message: _227.MsgUpdateTradeRoute): Uint8Array;
            toProtoMsg(message: _227.MsgUpdateTradeRoute): _227.MsgUpdateTradeRouteProtoMsg;
        };
        MsgUpdateTradeRouteResponse: {
            typeUrl: string;
            encode(_: _227.MsgUpdateTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgUpdateTradeRouteResponse;
            fromPartial(_: Partial<_227.MsgUpdateTradeRouteResponse>): _227.MsgUpdateTradeRouteResponse;
            fromAmino(_: _227.MsgUpdateTradeRouteResponseAmino): _227.MsgUpdateTradeRouteResponse;
            toAmino(_: _227.MsgUpdateTradeRouteResponse): _227.MsgUpdateTradeRouteResponseAmino;
            fromAminoMsg(object: _227.MsgUpdateTradeRouteResponseAminoMsg): _227.MsgUpdateTradeRouteResponse;
            fromProtoMsg(message: _227.MsgUpdateTradeRouteResponseProtoMsg): _227.MsgUpdateTradeRouteResponse;
            toProto(message: _227.MsgUpdateTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _227.MsgUpdateTradeRouteResponse): _227.MsgUpdateTradeRouteResponseProtoMsg;
        };
        MsgSetCommunityPoolRebate: {
            typeUrl: string;
            encode(message: _227.MsgSetCommunityPoolRebate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgSetCommunityPoolRebate;
            fromPartial(object: Partial<_227.MsgSetCommunityPoolRebate>): _227.MsgSetCommunityPoolRebate;
            fromAmino(object: _227.MsgSetCommunityPoolRebateAmino): _227.MsgSetCommunityPoolRebate;
            toAmino(message: _227.MsgSetCommunityPoolRebate): _227.MsgSetCommunityPoolRebateAmino;
            fromAminoMsg(object: _227.MsgSetCommunityPoolRebateAminoMsg): _227.MsgSetCommunityPoolRebate;
            toAminoMsg(message: _227.MsgSetCommunityPoolRebate): _227.MsgSetCommunityPoolRebateAminoMsg;
            fromProtoMsg(message: _227.MsgSetCommunityPoolRebateProtoMsg): _227.MsgSetCommunityPoolRebate;
            toProto(message: _227.MsgSetCommunityPoolRebate): Uint8Array;
            toProtoMsg(message: _227.MsgSetCommunityPoolRebate): _227.MsgSetCommunityPoolRebateProtoMsg;
        };
        MsgSetCommunityPoolRebateResponse: {
            typeUrl: string;
            encode(_: _227.MsgSetCommunityPoolRebateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgSetCommunityPoolRebateResponse;
            fromPartial(_: Partial<_227.MsgSetCommunityPoolRebateResponse>): _227.MsgSetCommunityPoolRebateResponse;
            fromAmino(_: _227.MsgSetCommunityPoolRebateResponseAmino): _227.MsgSetCommunityPoolRebateResponse;
            toAmino(_: _227.MsgSetCommunityPoolRebateResponse): _227.MsgSetCommunityPoolRebateResponseAmino;
            fromAminoMsg(object: _227.MsgSetCommunityPoolRebateResponseAminoMsg): _227.MsgSetCommunityPoolRebateResponse;
            fromProtoMsg(message: _227.MsgSetCommunityPoolRebateResponseProtoMsg): _227.MsgSetCommunityPoolRebateResponse;
            toProto(message: _227.MsgSetCommunityPoolRebateResponse): Uint8Array;
            toProtoMsg(message: _227.MsgSetCommunityPoolRebateResponse): _227.MsgSetCommunityPoolRebateResponseProtoMsg;
        };
        MsgToggleTradeController: {
            typeUrl: string;
            encode(message: _227.MsgToggleTradeController, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgToggleTradeController;
            fromPartial(object: Partial<_227.MsgToggleTradeController>): _227.MsgToggleTradeController;
            fromAmino(object: _227.MsgToggleTradeControllerAmino): _227.MsgToggleTradeController;
            toAmino(message: _227.MsgToggleTradeController): _227.MsgToggleTradeControllerAmino;
            fromAminoMsg(object: _227.MsgToggleTradeControllerAminoMsg): _227.MsgToggleTradeController;
            toAminoMsg(message: _227.MsgToggleTradeController): _227.MsgToggleTradeControllerAminoMsg;
            fromProtoMsg(message: _227.MsgToggleTradeControllerProtoMsg): _227.MsgToggleTradeController;
            toProto(message: _227.MsgToggleTradeController): Uint8Array;
            toProtoMsg(message: _227.MsgToggleTradeController): _227.MsgToggleTradeControllerProtoMsg;
        };
        MsgToggleTradeControllerResponse: {
            typeUrl: string;
            encode(_: _227.MsgToggleTradeControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgToggleTradeControllerResponse;
            fromPartial(_: Partial<_227.MsgToggleTradeControllerResponse>): _227.MsgToggleTradeControllerResponse;
            fromAmino(_: _227.MsgToggleTradeControllerResponseAmino): _227.MsgToggleTradeControllerResponse;
            toAmino(_: _227.MsgToggleTradeControllerResponse): _227.MsgToggleTradeControllerResponseAmino;
            fromAminoMsg(object: _227.MsgToggleTradeControllerResponseAminoMsg): _227.MsgToggleTradeControllerResponse;
            fromProtoMsg(message: _227.MsgToggleTradeControllerResponseProtoMsg): _227.MsgToggleTradeControllerResponse;
            toProto(message: _227.MsgToggleTradeControllerResponse): Uint8Array;
            toProtoMsg(message: _227.MsgToggleTradeControllerResponse): _227.MsgToggleTradeControllerResponseProtoMsg;
        };
        MsgUpdateHostZoneParams: {
            typeUrl: string;
            encode(message: _227.MsgUpdateHostZoneParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgUpdateHostZoneParams;
            fromPartial(object: Partial<_227.MsgUpdateHostZoneParams>): _227.MsgUpdateHostZoneParams;
            fromAmino(object: _227.MsgUpdateHostZoneParamsAmino): _227.MsgUpdateHostZoneParams;
            toAmino(message: _227.MsgUpdateHostZoneParams): _227.MsgUpdateHostZoneParamsAmino;
            fromAminoMsg(object: _227.MsgUpdateHostZoneParamsAminoMsg): _227.MsgUpdateHostZoneParams;
            toAminoMsg(message: _227.MsgUpdateHostZoneParams): _227.MsgUpdateHostZoneParamsAminoMsg;
            fromProtoMsg(message: _227.MsgUpdateHostZoneParamsProtoMsg): _227.MsgUpdateHostZoneParams;
            toProto(message: _227.MsgUpdateHostZoneParams): Uint8Array;
            toProtoMsg(message: _227.MsgUpdateHostZoneParams): _227.MsgUpdateHostZoneParamsProtoMsg;
        };
        MsgUpdateHostZoneParamsResponse: {
            typeUrl: string;
            encode(_: _227.MsgUpdateHostZoneParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.MsgUpdateHostZoneParamsResponse;
            fromPartial(_: Partial<_227.MsgUpdateHostZoneParamsResponse>): _227.MsgUpdateHostZoneParamsResponse;
            fromAmino(_: _227.MsgUpdateHostZoneParamsResponseAmino): _227.MsgUpdateHostZoneParamsResponse;
            toAmino(_: _227.MsgUpdateHostZoneParamsResponse): _227.MsgUpdateHostZoneParamsResponseAmino;
            fromAminoMsg(object: _227.MsgUpdateHostZoneParamsResponseAminoMsg): _227.MsgUpdateHostZoneParamsResponse;
            fromProtoMsg(message: _227.MsgUpdateHostZoneParamsResponseProtoMsg): _227.MsgUpdateHostZoneParamsResponse;
            toProto(message: _227.MsgUpdateHostZoneParamsResponse): Uint8Array;
            toProtoMsg(message: _227.MsgUpdateHostZoneParamsResponse): _227.MsgUpdateHostZoneParamsResponseProtoMsg;
        };
        TradeConfig: {
            typeUrl: string;
            encode(message: _226.TradeConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.TradeConfig;
            fromPartial(object: Partial<_226.TradeConfig>): _226.TradeConfig;
            fromAmino(object: _226.TradeConfigAmino): _226.TradeConfig;
            toAmino(message: _226.TradeConfig): _226.TradeConfigAmino;
            fromAminoMsg(object: _226.TradeConfigAminoMsg): _226.TradeConfig;
            fromProtoMsg(message: _226.TradeConfigProtoMsg): _226.TradeConfig;
            toProto(message: _226.TradeConfig): Uint8Array;
            toProtoMsg(message: _226.TradeConfig): _226.TradeConfigProtoMsg;
        };
        TradeRoute: {
            typeUrl: string;
            encode(message: _226.TradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.TradeRoute;
            fromPartial(object: Partial<_226.TradeRoute>): _226.TradeRoute;
            fromAmino(object: _226.TradeRouteAmino): _226.TradeRoute;
            toAmino(message: _226.TradeRoute): _226.TradeRouteAmino;
            fromAminoMsg(object: _226.TradeRouteAminoMsg): _226.TradeRoute;
            fromProtoMsg(message: _226.TradeRouteProtoMsg): _226.TradeRoute;
            toProto(message: _226.TradeRoute): Uint8Array;
            toProtoMsg(message: _226.TradeRoute): _226.TradeRouteProtoMsg;
        };
        QueryInterchainAccountFromAddressRequest: {
            typeUrl: string;
            encode(message: _225.QueryInterchainAccountFromAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryInterchainAccountFromAddressRequest;
            fromPartial(object: Partial<_225.QueryInterchainAccountFromAddressRequest>): _225.QueryInterchainAccountFromAddressRequest;
            fromAmino(object: _225.QueryInterchainAccountFromAddressRequestAmino): _225.QueryInterchainAccountFromAddressRequest;
            toAmino(message: _225.QueryInterchainAccountFromAddressRequest): _225.QueryInterchainAccountFromAddressRequestAmino;
            fromAminoMsg(object: _225.QueryInterchainAccountFromAddressRequestAminoMsg): _225.QueryInterchainAccountFromAddressRequest;
            fromProtoMsg(message: _225.QueryInterchainAccountFromAddressRequestProtoMsg): _225.QueryInterchainAccountFromAddressRequest;
            toProto(message: _225.QueryInterchainAccountFromAddressRequest): Uint8Array;
            toProtoMsg(message: _225.QueryInterchainAccountFromAddressRequest): _225.QueryInterchainAccountFromAddressRequestProtoMsg;
        };
        QueryInterchainAccountFromAddressResponse: {
            typeUrl: string;
            encode(message: _225.QueryInterchainAccountFromAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryInterchainAccountFromAddressResponse;
            fromPartial(object: Partial<_225.QueryInterchainAccountFromAddressResponse>): _225.QueryInterchainAccountFromAddressResponse;
            fromAmino(object: _225.QueryInterchainAccountFromAddressResponseAmino): _225.QueryInterchainAccountFromAddressResponse;
            toAmino(message: _225.QueryInterchainAccountFromAddressResponse): _225.QueryInterchainAccountFromAddressResponseAmino;
            fromAminoMsg(object: _225.QueryInterchainAccountFromAddressResponseAminoMsg): _225.QueryInterchainAccountFromAddressResponse;
            fromProtoMsg(message: _225.QueryInterchainAccountFromAddressResponseProtoMsg): _225.QueryInterchainAccountFromAddressResponse;
            toProto(message: _225.QueryInterchainAccountFromAddressResponse): Uint8Array;
            toProtoMsg(message: _225.QueryInterchainAccountFromAddressResponse): _225.QueryInterchainAccountFromAddressResponseProtoMsg;
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
        QueryGetValidatorsRequest: {
            typeUrl: string;
            encode(message: _225.QueryGetValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryGetValidatorsRequest;
            fromPartial(object: Partial<_225.QueryGetValidatorsRequest>): _225.QueryGetValidatorsRequest;
            fromAmino(object: _225.QueryGetValidatorsRequestAmino): _225.QueryGetValidatorsRequest;
            toAmino(message: _225.QueryGetValidatorsRequest): _225.QueryGetValidatorsRequestAmino;
            fromAminoMsg(object: _225.QueryGetValidatorsRequestAminoMsg): _225.QueryGetValidatorsRequest;
            fromProtoMsg(message: _225.QueryGetValidatorsRequestProtoMsg): _225.QueryGetValidatorsRequest;
            toProto(message: _225.QueryGetValidatorsRequest): Uint8Array;
            toProtoMsg(message: _225.QueryGetValidatorsRequest): _225.QueryGetValidatorsRequestProtoMsg;
        };
        QueryGetValidatorsResponse: {
            typeUrl: string;
            encode(message: _225.QueryGetValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryGetValidatorsResponse;
            fromPartial(object: Partial<_225.QueryGetValidatorsResponse>): _225.QueryGetValidatorsResponse;
            fromAmino(object: _225.QueryGetValidatorsResponseAmino): _225.QueryGetValidatorsResponse;
            toAmino(message: _225.QueryGetValidatorsResponse): _225.QueryGetValidatorsResponseAmino;
            fromAminoMsg(object: _225.QueryGetValidatorsResponseAminoMsg): _225.QueryGetValidatorsResponse;
            fromProtoMsg(message: _225.QueryGetValidatorsResponseProtoMsg): _225.QueryGetValidatorsResponse;
            toProto(message: _225.QueryGetValidatorsResponse): Uint8Array;
            toProtoMsg(message: _225.QueryGetValidatorsResponse): _225.QueryGetValidatorsResponseProtoMsg;
        };
        QueryGetHostZoneRequest: {
            typeUrl: string;
            encode(message: _225.QueryGetHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryGetHostZoneRequest;
            fromPartial(object: Partial<_225.QueryGetHostZoneRequest>): _225.QueryGetHostZoneRequest;
            fromAmino(object: _225.QueryGetHostZoneRequestAmino): _225.QueryGetHostZoneRequest;
            toAmino(message: _225.QueryGetHostZoneRequest): _225.QueryGetHostZoneRequestAmino;
            fromAminoMsg(object: _225.QueryGetHostZoneRequestAminoMsg): _225.QueryGetHostZoneRequest;
            fromProtoMsg(message: _225.QueryGetHostZoneRequestProtoMsg): _225.QueryGetHostZoneRequest;
            toProto(message: _225.QueryGetHostZoneRequest): Uint8Array;
            toProtoMsg(message: _225.QueryGetHostZoneRequest): _225.QueryGetHostZoneRequestProtoMsg;
        };
        QueryGetHostZoneResponse: {
            typeUrl: string;
            encode(message: _225.QueryGetHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryGetHostZoneResponse;
            fromPartial(object: Partial<_225.QueryGetHostZoneResponse>): _225.QueryGetHostZoneResponse;
            fromAmino(object: _225.QueryGetHostZoneResponseAmino): _225.QueryGetHostZoneResponse;
            toAmino(message: _225.QueryGetHostZoneResponse): _225.QueryGetHostZoneResponseAmino;
            fromAminoMsg(object: _225.QueryGetHostZoneResponseAminoMsg): _225.QueryGetHostZoneResponse;
            fromProtoMsg(message: _225.QueryGetHostZoneResponseProtoMsg): _225.QueryGetHostZoneResponse;
            toProto(message: _225.QueryGetHostZoneResponse): Uint8Array;
            toProtoMsg(message: _225.QueryGetHostZoneResponse): _225.QueryGetHostZoneResponseProtoMsg;
        };
        QueryAllHostZoneRequest: {
            typeUrl: string;
            encode(message: _225.QueryAllHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryAllHostZoneRequest;
            fromPartial(object: Partial<_225.QueryAllHostZoneRequest>): _225.QueryAllHostZoneRequest;
            fromAmino(object: _225.QueryAllHostZoneRequestAmino): _225.QueryAllHostZoneRequest;
            toAmino(message: _225.QueryAllHostZoneRequest): _225.QueryAllHostZoneRequestAmino;
            fromAminoMsg(object: _225.QueryAllHostZoneRequestAminoMsg): _225.QueryAllHostZoneRequest;
            fromProtoMsg(message: _225.QueryAllHostZoneRequestProtoMsg): _225.QueryAllHostZoneRequest;
            toProto(message: _225.QueryAllHostZoneRequest): Uint8Array;
            toProtoMsg(message: _225.QueryAllHostZoneRequest): _225.QueryAllHostZoneRequestProtoMsg;
        };
        QueryAllHostZoneResponse: {
            typeUrl: string;
            encode(message: _225.QueryAllHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryAllHostZoneResponse;
            fromPartial(object: Partial<_225.QueryAllHostZoneResponse>): _225.QueryAllHostZoneResponse;
            fromAmino(object: _225.QueryAllHostZoneResponseAmino): _225.QueryAllHostZoneResponse;
            toAmino(message: _225.QueryAllHostZoneResponse): _225.QueryAllHostZoneResponseAmino;
            fromAminoMsg(object: _225.QueryAllHostZoneResponseAminoMsg): _225.QueryAllHostZoneResponse;
            fromProtoMsg(message: _225.QueryAllHostZoneResponseProtoMsg): _225.QueryAllHostZoneResponse;
            toProto(message: _225.QueryAllHostZoneResponse): Uint8Array;
            toProtoMsg(message: _225.QueryAllHostZoneResponse): _225.QueryAllHostZoneResponseProtoMsg;
        };
        QueryModuleAddressRequest: {
            typeUrl: string;
            encode(message: _225.QueryModuleAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryModuleAddressRequest;
            fromPartial(object: Partial<_225.QueryModuleAddressRequest>): _225.QueryModuleAddressRequest;
            fromAmino(object: _225.QueryModuleAddressRequestAmino): _225.QueryModuleAddressRequest;
            toAmino(message: _225.QueryModuleAddressRequest): _225.QueryModuleAddressRequestAmino;
            fromAminoMsg(object: _225.QueryModuleAddressRequestAminoMsg): _225.QueryModuleAddressRequest;
            fromProtoMsg(message: _225.QueryModuleAddressRequestProtoMsg): _225.QueryModuleAddressRequest;
            toProto(message: _225.QueryModuleAddressRequest): Uint8Array;
            toProtoMsg(message: _225.QueryModuleAddressRequest): _225.QueryModuleAddressRequestProtoMsg;
        };
        QueryModuleAddressResponse: {
            typeUrl: string;
            encode(message: _225.QueryModuleAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryModuleAddressResponse;
            fromPartial(object: Partial<_225.QueryModuleAddressResponse>): _225.QueryModuleAddressResponse;
            fromAmino(object: _225.QueryModuleAddressResponseAmino): _225.QueryModuleAddressResponse;
            toAmino(message: _225.QueryModuleAddressResponse): _225.QueryModuleAddressResponseAmino;
            fromAminoMsg(object: _225.QueryModuleAddressResponseAminoMsg): _225.QueryModuleAddressResponse;
            fromProtoMsg(message: _225.QueryModuleAddressResponseProtoMsg): _225.QueryModuleAddressResponse;
            toProto(message: _225.QueryModuleAddressResponse): Uint8Array;
            toProtoMsg(message: _225.QueryModuleAddressResponse): _225.QueryModuleAddressResponseProtoMsg;
        };
        QueryGetEpochTrackerRequest: {
            typeUrl: string;
            encode(message: _225.QueryGetEpochTrackerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryGetEpochTrackerRequest;
            fromPartial(object: Partial<_225.QueryGetEpochTrackerRequest>): _225.QueryGetEpochTrackerRequest;
            fromAmino(object: _225.QueryGetEpochTrackerRequestAmino): _225.QueryGetEpochTrackerRequest;
            toAmino(message: _225.QueryGetEpochTrackerRequest): _225.QueryGetEpochTrackerRequestAmino;
            fromAminoMsg(object: _225.QueryGetEpochTrackerRequestAminoMsg): _225.QueryGetEpochTrackerRequest;
            fromProtoMsg(message: _225.QueryGetEpochTrackerRequestProtoMsg): _225.QueryGetEpochTrackerRequest;
            toProto(message: _225.QueryGetEpochTrackerRequest): Uint8Array;
            toProtoMsg(message: _225.QueryGetEpochTrackerRequest): _225.QueryGetEpochTrackerRequestProtoMsg;
        };
        QueryGetEpochTrackerResponse: {
            typeUrl: string;
            encode(message: _225.QueryGetEpochTrackerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryGetEpochTrackerResponse;
            fromPartial(object: Partial<_225.QueryGetEpochTrackerResponse>): _225.QueryGetEpochTrackerResponse;
            fromAmino(object: _225.QueryGetEpochTrackerResponseAmino): _225.QueryGetEpochTrackerResponse;
            toAmino(message: _225.QueryGetEpochTrackerResponse): _225.QueryGetEpochTrackerResponseAmino;
            fromAminoMsg(object: _225.QueryGetEpochTrackerResponseAminoMsg): _225.QueryGetEpochTrackerResponse;
            fromProtoMsg(message: _225.QueryGetEpochTrackerResponseProtoMsg): _225.QueryGetEpochTrackerResponse;
            toProto(message: _225.QueryGetEpochTrackerResponse): Uint8Array;
            toProtoMsg(message: _225.QueryGetEpochTrackerResponse): _225.QueryGetEpochTrackerResponseProtoMsg;
        };
        QueryAllEpochTrackerRequest: {
            typeUrl: string;
            encode(_: _225.QueryAllEpochTrackerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryAllEpochTrackerRequest;
            fromPartial(_: Partial<_225.QueryAllEpochTrackerRequest>): _225.QueryAllEpochTrackerRequest;
            fromAmino(_: _225.QueryAllEpochTrackerRequestAmino): _225.QueryAllEpochTrackerRequest;
            toAmino(_: _225.QueryAllEpochTrackerRequest): _225.QueryAllEpochTrackerRequestAmino;
            fromAminoMsg(object: _225.QueryAllEpochTrackerRequestAminoMsg): _225.QueryAllEpochTrackerRequest;
            fromProtoMsg(message: _225.QueryAllEpochTrackerRequestProtoMsg): _225.QueryAllEpochTrackerRequest;
            toProto(message: _225.QueryAllEpochTrackerRequest): Uint8Array;
            toProtoMsg(message: _225.QueryAllEpochTrackerRequest): _225.QueryAllEpochTrackerRequestProtoMsg;
        };
        QueryAllEpochTrackerResponse: {
            typeUrl: string;
            encode(message: _225.QueryAllEpochTrackerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryAllEpochTrackerResponse;
            fromPartial(object: Partial<_225.QueryAllEpochTrackerResponse>): _225.QueryAllEpochTrackerResponse;
            fromAmino(object: _225.QueryAllEpochTrackerResponseAmino): _225.QueryAllEpochTrackerResponse;
            toAmino(message: _225.QueryAllEpochTrackerResponse): _225.QueryAllEpochTrackerResponseAmino;
            fromAminoMsg(object: _225.QueryAllEpochTrackerResponseAminoMsg): _225.QueryAllEpochTrackerResponse;
            fromProtoMsg(message: _225.QueryAllEpochTrackerResponseProtoMsg): _225.QueryAllEpochTrackerResponse;
            toProto(message: _225.QueryAllEpochTrackerResponse): Uint8Array;
            toProtoMsg(message: _225.QueryAllEpochTrackerResponse): _225.QueryAllEpochTrackerResponseProtoMsg;
        };
        QueryGetNextPacketSequenceRequest: {
            typeUrl: string;
            encode(message: _225.QueryGetNextPacketSequenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryGetNextPacketSequenceRequest;
            fromPartial(object: Partial<_225.QueryGetNextPacketSequenceRequest>): _225.QueryGetNextPacketSequenceRequest;
            fromAmino(object: _225.QueryGetNextPacketSequenceRequestAmino): _225.QueryGetNextPacketSequenceRequest;
            toAmino(message: _225.QueryGetNextPacketSequenceRequest): _225.QueryGetNextPacketSequenceRequestAmino;
            fromAminoMsg(object: _225.QueryGetNextPacketSequenceRequestAminoMsg): _225.QueryGetNextPacketSequenceRequest;
            fromProtoMsg(message: _225.QueryGetNextPacketSequenceRequestProtoMsg): _225.QueryGetNextPacketSequenceRequest;
            toProto(message: _225.QueryGetNextPacketSequenceRequest): Uint8Array;
            toProtoMsg(message: _225.QueryGetNextPacketSequenceRequest): _225.QueryGetNextPacketSequenceRequestProtoMsg;
        };
        QueryGetNextPacketSequenceResponse: {
            typeUrl: string;
            encode(message: _225.QueryGetNextPacketSequenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryGetNextPacketSequenceResponse;
            fromPartial(object: Partial<_225.QueryGetNextPacketSequenceResponse>): _225.QueryGetNextPacketSequenceResponse;
            fromAmino(object: _225.QueryGetNextPacketSequenceResponseAmino): _225.QueryGetNextPacketSequenceResponse;
            toAmino(message: _225.QueryGetNextPacketSequenceResponse): _225.QueryGetNextPacketSequenceResponseAmino;
            fromAminoMsg(object: _225.QueryGetNextPacketSequenceResponseAminoMsg): _225.QueryGetNextPacketSequenceResponse;
            fromProtoMsg(message: _225.QueryGetNextPacketSequenceResponseProtoMsg): _225.QueryGetNextPacketSequenceResponse;
            toProto(message: _225.QueryGetNextPacketSequenceResponse): Uint8Array;
            toProtoMsg(message: _225.QueryGetNextPacketSequenceResponse): _225.QueryGetNextPacketSequenceResponseProtoMsg;
        };
        QueryAddressUnbondings: {
            typeUrl: string;
            encode(message: _225.QueryAddressUnbondings, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryAddressUnbondings;
            fromPartial(object: Partial<_225.QueryAddressUnbondings>): _225.QueryAddressUnbondings;
            fromAmino(object: _225.QueryAddressUnbondingsAmino): _225.QueryAddressUnbondings;
            toAmino(message: _225.QueryAddressUnbondings): _225.QueryAddressUnbondingsAmino;
            fromAminoMsg(object: _225.QueryAddressUnbondingsAminoMsg): _225.QueryAddressUnbondings;
            fromProtoMsg(message: _225.QueryAddressUnbondingsProtoMsg): _225.QueryAddressUnbondings;
            toProto(message: _225.QueryAddressUnbondings): Uint8Array;
            toProtoMsg(message: _225.QueryAddressUnbondings): _225.QueryAddressUnbondingsProtoMsg;
        };
        QueryAddressUnbondingsResponse: {
            typeUrl: string;
            encode(message: _225.QueryAddressUnbondingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryAddressUnbondingsResponse;
            fromPartial(object: Partial<_225.QueryAddressUnbondingsResponse>): _225.QueryAddressUnbondingsResponse;
            fromAmino(object: _225.QueryAddressUnbondingsResponseAmino): _225.QueryAddressUnbondingsResponse;
            toAmino(message: _225.QueryAddressUnbondingsResponse): _225.QueryAddressUnbondingsResponseAmino;
            fromAminoMsg(object: _225.QueryAddressUnbondingsResponseAminoMsg): _225.QueryAddressUnbondingsResponse;
            fromProtoMsg(message: _225.QueryAddressUnbondingsResponseProtoMsg): _225.QueryAddressUnbondingsResponse;
            toProto(message: _225.QueryAddressUnbondingsResponse): Uint8Array;
            toProtoMsg(message: _225.QueryAddressUnbondingsResponse): _225.QueryAddressUnbondingsResponseProtoMsg;
        };
        QueryAllTradeRoutes: {
            typeUrl: string;
            encode(_: _225.QueryAllTradeRoutes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryAllTradeRoutes;
            fromPartial(_: Partial<_225.QueryAllTradeRoutes>): _225.QueryAllTradeRoutes;
            fromAmino(_: _225.QueryAllTradeRoutesAmino): _225.QueryAllTradeRoutes;
            toAmino(_: _225.QueryAllTradeRoutes): _225.QueryAllTradeRoutesAmino;
            fromAminoMsg(object: _225.QueryAllTradeRoutesAminoMsg): _225.QueryAllTradeRoutes;
            fromProtoMsg(message: _225.QueryAllTradeRoutesProtoMsg): _225.QueryAllTradeRoutes;
            toProto(message: _225.QueryAllTradeRoutes): Uint8Array;
            toProtoMsg(message: _225.QueryAllTradeRoutes): _225.QueryAllTradeRoutesProtoMsg;
        };
        QueryAllTradeRoutesResponse: {
            typeUrl: string;
            encode(message: _225.QueryAllTradeRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.QueryAllTradeRoutesResponse;
            fromPartial(object: Partial<_225.QueryAllTradeRoutesResponse>): _225.QueryAllTradeRoutesResponse;
            fromAmino(object: _225.QueryAllTradeRoutesResponseAmino): _225.QueryAllTradeRoutesResponse;
            toAmino(message: _225.QueryAllTradeRoutesResponse): _225.QueryAllTradeRoutesResponseAmino;
            fromAminoMsg(object: _225.QueryAllTradeRoutesResponseAminoMsg): _225.QueryAllTradeRoutesResponse;
            fromProtoMsg(message: _225.QueryAllTradeRoutesResponseProtoMsg): _225.QueryAllTradeRoutesResponse;
            toProto(message: _225.QueryAllTradeRoutesResponse): Uint8Array;
            toProtoMsg(message: _225.QueryAllTradeRoutesResponse): _225.QueryAllTradeRoutesResponseProtoMsg;
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
        StakeibcPacketData: {
            typeUrl: string;
            encode(message: _223.StakeibcPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.StakeibcPacketData;
            fromPartial(object: Partial<_223.StakeibcPacketData>): _223.StakeibcPacketData;
            fromAmino(object: _223.StakeibcPacketDataAmino): _223.StakeibcPacketData;
            toAmino(message: _223.StakeibcPacketData): _223.StakeibcPacketDataAmino;
            fromAminoMsg(object: _223.StakeibcPacketDataAminoMsg): _223.StakeibcPacketData;
            fromProtoMsg(message: _223.StakeibcPacketDataProtoMsg): _223.StakeibcPacketData;
            toProto(message: _223.StakeibcPacketData): Uint8Array;
            toProtoMsg(message: _223.StakeibcPacketData): _223.StakeibcPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _223.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.NoData;
            fromPartial(_: Partial<_223.NoData>): _223.NoData;
            fromAmino(_: _223.NoDataAmino): _223.NoData;
            toAmino(_: _223.NoData): _223.NoDataAmino;
            fromAminoMsg(object: _223.NoDataAminoMsg): _223.NoData;
            fromProtoMsg(message: _223.NoDataProtoMsg): _223.NoData;
            toProto(message: _223.NoData): Uint8Array;
            toProtoMsg(message: _223.NoData): _223.NoDataProtoMsg;
        };
        iCAAccountTypeFromJSON(object: any): _222.ICAAccountType;
        iCAAccountTypeToJSON(object: _222.ICAAccountType): string;
        ICAAccountType: typeof _222.ICAAccountType;
        ICAAccountTypeSDKType: typeof _222.ICAAccountType;
        ICAAccountTypeAmino: typeof _222.ICAAccountType;
        ICAAccount: {
            typeUrl: string;
            encode(message: _222.ICAAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.ICAAccount;
            fromPartial(object: Partial<_222.ICAAccount>): _222.ICAAccount;
            fromAmino(object: _222.ICAAccountAmino): _222.ICAAccount;
            toAmino(message: _222.ICAAccount): _222.ICAAccountAmino;
            fromAminoMsg(object: _222.ICAAccountAminoMsg): _222.ICAAccount;
            fromProtoMsg(message: _222.ICAAccountProtoMsg): _222.ICAAccount;
            toProto(message: _222.ICAAccount): Uint8Array;
            toProtoMsg(message: _222.ICAAccount): _222.ICAAccountProtoMsg;
        };
        CommunityPoolRebate: {
            typeUrl: string;
            encode(message: _221.CommunityPoolRebate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.CommunityPoolRebate;
            fromPartial(object: Partial<_221.CommunityPoolRebate>): _221.CommunityPoolRebate;
            fromAmino(object: _221.CommunityPoolRebateAmino): _221.CommunityPoolRebate;
            toAmino(message: _221.CommunityPoolRebate): _221.CommunityPoolRebateAmino;
            fromAminoMsg(object: _221.CommunityPoolRebateAminoMsg): _221.CommunityPoolRebate;
            fromProtoMsg(message: _221.CommunityPoolRebateProtoMsg): _221.CommunityPoolRebate;
            toProto(message: _221.CommunityPoolRebate): Uint8Array;
            toProtoMsg(message: _221.CommunityPoolRebate): _221.CommunityPoolRebateProtoMsg;
        };
        HostZone: {
            typeUrl: string;
            encode(message: _221.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.HostZone;
            fromPartial(object: Partial<_221.HostZone>): _221.HostZone;
            fromAmino(object: _221.HostZoneAmino): _221.HostZone;
            toAmino(message: _221.HostZone): _221.HostZoneAmino;
            fromAminoMsg(object: _221.HostZoneAminoMsg): _221.HostZone;
            fromProtoMsg(message: _221.HostZoneProtoMsg): _221.HostZone;
            toProto(message: _221.HostZone): Uint8Array;
            toProtoMsg(message: _221.HostZone): _221.HostZoneProtoMsg;
        };
        AddValidatorsProposal: {
            typeUrl: string;
            encode(message: _220.AddValidatorsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _220.AddValidatorsProposal;
            fromPartial(object: Partial<_220.AddValidatorsProposal>): _220.AddValidatorsProposal;
            fromAmino(object: _220.AddValidatorsProposalAmino): _220.AddValidatorsProposal;
            toAmino(message: _220.AddValidatorsProposal): _220.AddValidatorsProposalAmino;
            fromAminoMsg(object: _220.AddValidatorsProposalAminoMsg): _220.AddValidatorsProposal;
            fromProtoMsg(message: _220.AddValidatorsProposalProtoMsg): _220.AddValidatorsProposal;
            toProto(message: _220.AddValidatorsProposal): Uint8Array;
            toProtoMsg(message: _220.AddValidatorsProposal): _220.AddValidatorsProposalProtoMsg;
        };
        ToggleLSMProposal: {
            typeUrl: string;
            encode(message: _220.ToggleLSMProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _220.ToggleLSMProposal;
            fromPartial(object: Partial<_220.ToggleLSMProposal>): _220.ToggleLSMProposal;
            fromAmino(object: _220.ToggleLSMProposalAmino): _220.ToggleLSMProposal;
            toAmino(message: _220.ToggleLSMProposal): _220.ToggleLSMProposalAmino;
            fromAminoMsg(object: _220.ToggleLSMProposalAminoMsg): _220.ToggleLSMProposal;
            fromProtoMsg(message: _220.ToggleLSMProposalProtoMsg): _220.ToggleLSMProposal;
            toProto(message: _220.ToggleLSMProposal): Uint8Array;
            toProtoMsg(message: _220.ToggleLSMProposal): _220.ToggleLSMProposalProtoMsg;
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
        EpochTracker: {
            typeUrl: string;
            encode(message: _218.EpochTracker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.EpochTracker;
            fromPartial(object: Partial<_218.EpochTracker>): _218.EpochTracker;
            fromAmino(object: _218.EpochTrackerAmino): _218.EpochTracker;
            toAmino(message: _218.EpochTracker): _218.EpochTrackerAmino;
            fromAminoMsg(object: _218.EpochTrackerAminoMsg): _218.EpochTracker;
            fromProtoMsg(message: _218.EpochTrackerProtoMsg): _218.EpochTracker;
            toProto(message: _218.EpochTracker): Uint8Array;
            toProtoMsg(message: _218.EpochTracker): _218.EpochTrackerProtoMsg;
        };
        SplitDelegation: {
            typeUrl: string;
            encode(message: _217.SplitDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.SplitDelegation;
            fromPartial(object: Partial<_217.SplitDelegation>): _217.SplitDelegation;
            fromAmino(object: _217.SplitDelegationAmino): _217.SplitDelegation;
            toAmino(message: _217.SplitDelegation): _217.SplitDelegationAmino;
            fromAminoMsg(object: _217.SplitDelegationAminoMsg): _217.SplitDelegation;
            fromProtoMsg(message: _217.SplitDelegationProtoMsg): _217.SplitDelegation;
            toProto(message: _217.SplitDelegation): Uint8Array;
            toProtoMsg(message: _217.SplitDelegation): _217.SplitDelegationProtoMsg;
        };
        SplitUndelegation: {
            typeUrl: string;
            encode(message: _217.SplitUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.SplitUndelegation;
            fromPartial(object: Partial<_217.SplitUndelegation>): _217.SplitUndelegation;
            fromAmino(object: _217.SplitUndelegationAmino): _217.SplitUndelegation;
            toAmino(message: _217.SplitUndelegation): _217.SplitUndelegationAmino;
            fromAminoMsg(object: _217.SplitUndelegationAminoMsg): _217.SplitUndelegation;
            fromProtoMsg(message: _217.SplitUndelegationProtoMsg): _217.SplitUndelegation;
            toProto(message: _217.SplitUndelegation): Uint8Array;
            toProtoMsg(message: _217.SplitUndelegation): _217.SplitUndelegationProtoMsg;
        };
        DelegateCallback: {
            typeUrl: string;
            encode(message: _217.DelegateCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.DelegateCallback;
            fromPartial(object: Partial<_217.DelegateCallback>): _217.DelegateCallback;
            fromAmino(object: _217.DelegateCallbackAmino): _217.DelegateCallback;
            toAmino(message: _217.DelegateCallback): _217.DelegateCallbackAmino;
            fromAminoMsg(object: _217.DelegateCallbackAminoMsg): _217.DelegateCallback;
            fromProtoMsg(message: _217.DelegateCallbackProtoMsg): _217.DelegateCallback;
            toProto(message: _217.DelegateCallback): Uint8Array;
            toProtoMsg(message: _217.DelegateCallback): _217.DelegateCallbackProtoMsg;
        };
        ClaimCallback: {
            typeUrl: string;
            encode(message: _217.ClaimCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.ClaimCallback;
            fromPartial(object: Partial<_217.ClaimCallback>): _217.ClaimCallback;
            fromAmino(object: _217.ClaimCallbackAmino): _217.ClaimCallback;
            toAmino(message: _217.ClaimCallback): _217.ClaimCallbackAmino;
            fromAminoMsg(object: _217.ClaimCallbackAminoMsg): _217.ClaimCallback;
            fromProtoMsg(message: _217.ClaimCallbackProtoMsg): _217.ClaimCallback;
            toProto(message: _217.ClaimCallback): Uint8Array;
            toProtoMsg(message: _217.ClaimCallback): _217.ClaimCallbackProtoMsg;
        };
        ReinvestCallback: {
            typeUrl: string;
            encode(message: _217.ReinvestCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.ReinvestCallback;
            fromPartial(object: Partial<_217.ReinvestCallback>): _217.ReinvestCallback;
            fromAmino(object: _217.ReinvestCallbackAmino): _217.ReinvestCallback;
            toAmino(message: _217.ReinvestCallback): _217.ReinvestCallbackAmino;
            fromAminoMsg(object: _217.ReinvestCallbackAminoMsg): _217.ReinvestCallback;
            fromProtoMsg(message: _217.ReinvestCallbackProtoMsg): _217.ReinvestCallback;
            toProto(message: _217.ReinvestCallback): Uint8Array;
            toProtoMsg(message: _217.ReinvestCallback): _217.ReinvestCallbackProtoMsg;
        };
        UndelegateCallback: {
            typeUrl: string;
            encode(message: _217.UndelegateCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.UndelegateCallback;
            fromPartial(object: Partial<_217.UndelegateCallback>): _217.UndelegateCallback;
            fromAmino(object: _217.UndelegateCallbackAmino): _217.UndelegateCallback;
            toAmino(message: _217.UndelegateCallback): _217.UndelegateCallbackAmino;
            fromAminoMsg(object: _217.UndelegateCallbackAminoMsg): _217.UndelegateCallback;
            fromProtoMsg(message: _217.UndelegateCallbackProtoMsg): _217.UndelegateCallback;
            toProto(message: _217.UndelegateCallback): Uint8Array;
            toProtoMsg(message: _217.UndelegateCallback): _217.UndelegateCallbackProtoMsg;
        };
        RedemptionCallback: {
            typeUrl: string;
            encode(message: _217.RedemptionCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.RedemptionCallback;
            fromPartial(object: Partial<_217.RedemptionCallback>): _217.RedemptionCallback;
            fromAmino(object: _217.RedemptionCallbackAmino): _217.RedemptionCallback;
            toAmino(message: _217.RedemptionCallback): _217.RedemptionCallbackAmino;
            fromAminoMsg(object: _217.RedemptionCallbackAminoMsg): _217.RedemptionCallback;
            fromProtoMsg(message: _217.RedemptionCallbackProtoMsg): _217.RedemptionCallback;
            toProto(message: _217.RedemptionCallback): Uint8Array;
            toProtoMsg(message: _217.RedemptionCallback): _217.RedemptionCallbackProtoMsg;
        };
        Rebalancing: {
            typeUrl: string;
            encode(message: _217.Rebalancing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.Rebalancing;
            fromPartial(object: Partial<_217.Rebalancing>): _217.Rebalancing;
            fromAmino(object: _217.RebalancingAmino): _217.Rebalancing;
            toAmino(message: _217.Rebalancing): _217.RebalancingAmino;
            fromAminoMsg(object: _217.RebalancingAminoMsg): _217.Rebalancing;
            fromProtoMsg(message: _217.RebalancingProtoMsg): _217.Rebalancing;
            toProto(message: _217.Rebalancing): Uint8Array;
            toProtoMsg(message: _217.Rebalancing): _217.RebalancingProtoMsg;
        };
        RebalanceCallback: {
            typeUrl: string;
            encode(message: _217.RebalanceCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.RebalanceCallback;
            fromPartial(object: Partial<_217.RebalanceCallback>): _217.RebalanceCallback;
            fromAmino(object: _217.RebalanceCallbackAmino): _217.RebalanceCallback;
            toAmino(message: _217.RebalanceCallback): _217.RebalanceCallbackAmino;
            fromAminoMsg(object: _217.RebalanceCallbackAminoMsg): _217.RebalanceCallback;
            fromProtoMsg(message: _217.RebalanceCallbackProtoMsg): _217.RebalanceCallback;
            toProto(message: _217.RebalanceCallback): Uint8Array;
            toProtoMsg(message: _217.RebalanceCallback): _217.RebalanceCallbackProtoMsg;
        };
        DetokenizeSharesCallback: {
            typeUrl: string;
            encode(message: _217.DetokenizeSharesCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.DetokenizeSharesCallback;
            fromPartial(object: Partial<_217.DetokenizeSharesCallback>): _217.DetokenizeSharesCallback;
            fromAmino(object: _217.DetokenizeSharesCallbackAmino): _217.DetokenizeSharesCallback;
            toAmino(message: _217.DetokenizeSharesCallback): _217.DetokenizeSharesCallbackAmino;
            fromAminoMsg(object: _217.DetokenizeSharesCallbackAminoMsg): _217.DetokenizeSharesCallback;
            fromProtoMsg(message: _217.DetokenizeSharesCallbackProtoMsg): _217.DetokenizeSharesCallback;
            toProto(message: _217.DetokenizeSharesCallback): Uint8Array;
            toProtoMsg(message: _217.DetokenizeSharesCallback): _217.DetokenizeSharesCallbackProtoMsg;
        };
        LSMLiquidStake: {
            typeUrl: string;
            encode(message: _217.LSMLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.LSMLiquidStake;
            fromPartial(object: Partial<_217.LSMLiquidStake>): _217.LSMLiquidStake;
            fromAmino(object: _217.LSMLiquidStakeAmino): _217.LSMLiquidStake;
            toAmino(message: _217.LSMLiquidStake): _217.LSMLiquidStakeAmino;
            fromAminoMsg(object: _217.LSMLiquidStakeAminoMsg): _217.LSMLiquidStake;
            fromProtoMsg(message: _217.LSMLiquidStakeProtoMsg): _217.LSMLiquidStake;
            toProto(message: _217.LSMLiquidStake): Uint8Array;
            toProtoMsg(message: _217.LSMLiquidStake): _217.LSMLiquidStakeProtoMsg;
        };
        ValidatorSharesToTokensQueryCallback: {
            typeUrl: string;
            encode(message: _217.ValidatorSharesToTokensQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.ValidatorSharesToTokensQueryCallback;
            fromPartial(object: Partial<_217.ValidatorSharesToTokensQueryCallback>): _217.ValidatorSharesToTokensQueryCallback;
            fromAmino(object: _217.ValidatorSharesToTokensQueryCallbackAmino): _217.ValidatorSharesToTokensQueryCallback;
            toAmino(message: _217.ValidatorSharesToTokensQueryCallback): _217.ValidatorSharesToTokensQueryCallbackAmino;
            fromAminoMsg(object: _217.ValidatorSharesToTokensQueryCallbackAminoMsg): _217.ValidatorSharesToTokensQueryCallback;
            fromProtoMsg(message: _217.ValidatorSharesToTokensQueryCallbackProtoMsg): _217.ValidatorSharesToTokensQueryCallback;
            toProto(message: _217.ValidatorSharesToTokensQueryCallback): Uint8Array;
            toProtoMsg(message: _217.ValidatorSharesToTokensQueryCallback): _217.ValidatorSharesToTokensQueryCallbackProtoMsg;
        };
        DelegatorSharesQueryCallback: {
            typeUrl: string;
            encode(message: _217.DelegatorSharesQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.DelegatorSharesQueryCallback;
            fromPartial(object: Partial<_217.DelegatorSharesQueryCallback>): _217.DelegatorSharesQueryCallback;
            fromAmino(object: _217.DelegatorSharesQueryCallbackAmino): _217.DelegatorSharesQueryCallback;
            toAmino(message: _217.DelegatorSharesQueryCallback): _217.DelegatorSharesQueryCallbackAmino;
            fromAminoMsg(object: _217.DelegatorSharesQueryCallbackAminoMsg): _217.DelegatorSharesQueryCallback;
            fromProtoMsg(message: _217.DelegatorSharesQueryCallbackProtoMsg): _217.DelegatorSharesQueryCallback;
            toProto(message: _217.DelegatorSharesQueryCallback): Uint8Array;
            toProtoMsg(message: _217.DelegatorSharesQueryCallback): _217.DelegatorSharesQueryCallbackProtoMsg;
        };
        CommunityPoolBalanceQueryCallback: {
            typeUrl: string;
            encode(message: _217.CommunityPoolBalanceQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.CommunityPoolBalanceQueryCallback;
            fromPartial(object: Partial<_217.CommunityPoolBalanceQueryCallback>): _217.CommunityPoolBalanceQueryCallback;
            fromAmino(object: _217.CommunityPoolBalanceQueryCallbackAmino): _217.CommunityPoolBalanceQueryCallback;
            toAmino(message: _217.CommunityPoolBalanceQueryCallback): _217.CommunityPoolBalanceQueryCallbackAmino;
            fromAminoMsg(object: _217.CommunityPoolBalanceQueryCallbackAminoMsg): _217.CommunityPoolBalanceQueryCallback;
            fromProtoMsg(message: _217.CommunityPoolBalanceQueryCallbackProtoMsg): _217.CommunityPoolBalanceQueryCallback;
            toProto(message: _217.CommunityPoolBalanceQueryCallback): Uint8Array;
            toProtoMsg(message: _217.CommunityPoolBalanceQueryCallback): _217.CommunityPoolBalanceQueryCallbackProtoMsg;
        };
        TradeRouteCallback: {
            typeUrl: string;
            encode(message: _217.TradeRouteCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.TradeRouteCallback;
            fromPartial(object: Partial<_217.TradeRouteCallback>): _217.TradeRouteCallback;
            fromAmino(object: _217.TradeRouteCallbackAmino): _217.TradeRouteCallback;
            toAmino(message: _217.TradeRouteCallback): _217.TradeRouteCallbackAmino;
            fromAminoMsg(object: _217.TradeRouteCallbackAminoMsg): _217.TradeRouteCallback;
            fromProtoMsg(message: _217.TradeRouteCallbackProtoMsg): _217.TradeRouteCallback;
            toProto(message: _217.TradeRouteCallback): Uint8Array;
            toProtoMsg(message: _217.TradeRouteCallback): _217.TradeRouteCallbackProtoMsg;
        };
        AddressUnbonding: {
            typeUrl: string;
            encode(message: _216.AddressUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.AddressUnbonding;
            fromPartial(object: Partial<_216.AddressUnbonding>): _216.AddressUnbonding;
            fromAmino(object: _216.AddressUnbondingAmino): _216.AddressUnbonding;
            toAmino(message: _216.AddressUnbonding): _216.AddressUnbondingAmino;
            fromAminoMsg(object: _216.AddressUnbondingAminoMsg): _216.AddressUnbonding;
            fromProtoMsg(message: _216.AddressUnbondingProtoMsg): _216.AddressUnbonding;
            toProto(message: _216.AddressUnbonding): Uint8Array;
            toProtoMsg(message: _216.AddressUnbonding): _216.AddressUnbondingProtoMsg;
        };
    };
    const staketia: {
        MsgClientImpl: typeof _375.MsgClientImpl;
        QueryClientImpl: typeof _368.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            hostZone(request?: _230.QueryHostZoneRequest): Promise<_230.QueryHostZoneResponse>;
            delegationRecords(request: _230.QueryDelegationRecordsRequest): Promise<_230.QueryDelegationRecordsResponse>;
            unbondingRecords(request: _230.QueryUnbondingRecordsRequest): Promise<_230.QueryUnbondingRecordsResponse>;
            redemptionRecord(request: _230.QueryRedemptionRecordRequest): Promise<_230.QueryRedemptionRecordResponse>;
            redemptionRecords(request: _230.QueryRedemptionRecordsRequest): Promise<_230.QueryRedemptionRecordsResponse>;
            slashRecords(request?: _230.QuerySlashRecordsRequest): Promise<_230.QuerySlashRecordsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _232.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _232.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmDelegation(value: _232.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUndelegation(value: _232.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUnbondedTokenSweep(value: _232.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                adjustDelegatedBalance(value: _232.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _232.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _232.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                refreshRedemptionRate(value: _232.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteDelegationRecord(value: _232.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteUnbondingRecord(value: _232.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteRedemptionRecord(value: _232.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOperatorAddress(value: _232.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _232.MsgLiquidStake): {
                    typeUrl: string;
                    value: _232.MsgLiquidStake;
                };
                redeemStake(value: _232.MsgRedeemStake): {
                    typeUrl: string;
                    value: _232.MsgRedeemStake;
                };
                confirmDelegation(value: _232.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _232.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _232.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _232.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _232.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _232.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _232.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _232.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _232.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _232.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _232.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _232.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _232.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _232.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _232.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _232.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _232.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _232.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _232.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _232.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _232.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _232.MsgSetOperatorAddress;
                };
            };
            fromPartial: {
                liquidStake(value: _232.MsgLiquidStake): {
                    typeUrl: string;
                    value: _232.MsgLiquidStake;
                };
                redeemStake(value: _232.MsgRedeemStake): {
                    typeUrl: string;
                    value: _232.MsgRedeemStake;
                };
                confirmDelegation(value: _232.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _232.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _232.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _232.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _232.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _232.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _232.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _232.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _232.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _232.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _232.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _232.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _232.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _232.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _232.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _232.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _232.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _232.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _232.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _232.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _232.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _232.MsgSetOperatorAddress;
                };
            };
        };
        AminoConverter: {
            "/stride.staketia.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _232.MsgLiquidStake) => _232.MsgLiquidStakeAmino;
                fromAmino: (object: _232.MsgLiquidStakeAmino) => _232.MsgLiquidStake;
            };
            "/stride.staketia.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _232.MsgRedeemStake) => _232.MsgRedeemStakeAmino;
                fromAmino: (object: _232.MsgRedeemStakeAmino) => _232.MsgRedeemStake;
            };
            "/stride.staketia.MsgConfirmDelegation": {
                aminoType: string;
                toAmino: (message: _232.MsgConfirmDelegation) => _232.MsgConfirmDelegationAmino;
                fromAmino: (object: _232.MsgConfirmDelegationAmino) => _232.MsgConfirmDelegation;
            };
            "/stride.staketia.MsgConfirmUndelegation": {
                aminoType: string;
                toAmino: (message: _232.MsgConfirmUndelegation) => _232.MsgConfirmUndelegationAmino;
                fromAmino: (object: _232.MsgConfirmUndelegationAmino) => _232.MsgConfirmUndelegation;
            };
            "/stride.staketia.MsgConfirmUnbondedTokenSweep": {
                aminoType: string;
                toAmino: (message: _232.MsgConfirmUnbondedTokenSweep) => _232.MsgConfirmUnbondedTokenSweepAmino;
                fromAmino: (object: _232.MsgConfirmUnbondedTokenSweepAmino) => _232.MsgConfirmUnbondedTokenSweep;
            };
            "/stride.staketia.MsgAdjustDelegatedBalance": {
                aminoType: string;
                toAmino: (message: _232.MsgAdjustDelegatedBalance) => _232.MsgAdjustDelegatedBalanceAmino;
                fromAmino: (object: _232.MsgAdjustDelegatedBalanceAmino) => _232.MsgAdjustDelegatedBalance;
            };
            "/stride.staketia.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _232.MsgUpdateInnerRedemptionRateBounds) => _232.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _232.MsgUpdateInnerRedemptionRateBoundsAmino) => _232.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.staketia.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _232.MsgResumeHostZone) => _232.MsgResumeHostZoneAmino;
                fromAmino: (object: _232.MsgResumeHostZoneAmino) => _232.MsgResumeHostZone;
            };
            "/stride.staketia.MsgRefreshRedemptionRate": {
                aminoType: string;
                toAmino: (message: _232.MsgRefreshRedemptionRate) => _232.MsgRefreshRedemptionRateAmino;
                fromAmino: (object: _232.MsgRefreshRedemptionRateAmino) => _232.MsgRefreshRedemptionRate;
            };
            "/stride.staketia.MsgOverwriteDelegationRecord": {
                aminoType: string;
                toAmino: (message: _232.MsgOverwriteDelegationRecord) => _232.MsgOverwriteDelegationRecordAmino;
                fromAmino: (object: _232.MsgOverwriteDelegationRecordAmino) => _232.MsgOverwriteDelegationRecord;
            };
            "/stride.staketia.MsgOverwriteUnbondingRecord": {
                aminoType: string;
                toAmino: (message: _232.MsgOverwriteUnbondingRecord) => _232.MsgOverwriteUnbondingRecordAmino;
                fromAmino: (object: _232.MsgOverwriteUnbondingRecordAmino) => _232.MsgOverwriteUnbondingRecord;
            };
            "/stride.staketia.MsgOverwriteRedemptionRecord": {
                aminoType: string;
                toAmino: (message: _232.MsgOverwriteRedemptionRecord) => _232.MsgOverwriteRedemptionRecordAmino;
                fromAmino: (object: _232.MsgOverwriteRedemptionRecordAmino) => _232.MsgOverwriteRedemptionRecord;
            };
            "/stride.staketia.MsgSetOperatorAddress": {
                aminoType: string;
                toAmino: (message: _232.MsgSetOperatorAddress) => _232.MsgSetOperatorAddressAmino;
                fromAmino: (object: _232.MsgSetOperatorAddressAmino) => _232.MsgSetOperatorAddress;
            };
        };
        overwritableRecordTypeFromJSON(object: any): _232.OverwritableRecordType;
        overwritableRecordTypeToJSON(object: _232.OverwritableRecordType): string;
        OverwritableRecordType: typeof _232.OverwritableRecordType;
        OverwritableRecordTypeSDKType: typeof _232.OverwritableRecordType;
        OverwritableRecordTypeAmino: typeof _232.OverwritableRecordType;
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _232.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgLiquidStake;
            fromPartial(object: Partial<_232.MsgLiquidStake>): _232.MsgLiquidStake;
            fromAmino(object: _232.MsgLiquidStakeAmino): _232.MsgLiquidStake;
            toAmino(message: _232.MsgLiquidStake): _232.MsgLiquidStakeAmino;
            fromAminoMsg(object: _232.MsgLiquidStakeAminoMsg): _232.MsgLiquidStake;
            toAminoMsg(message: _232.MsgLiquidStake): _232.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _232.MsgLiquidStakeProtoMsg): _232.MsgLiquidStake;
            toProto(message: _232.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _232.MsgLiquidStake): _232.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _232.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_232.MsgLiquidStakeResponse>): _232.MsgLiquidStakeResponse;
            fromAmino(object: _232.MsgLiquidStakeResponseAmino): _232.MsgLiquidStakeResponse;
            toAmino(message: _232.MsgLiquidStakeResponse): _232.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _232.MsgLiquidStakeResponseAminoMsg): _232.MsgLiquidStakeResponse;
            fromProtoMsg(message: _232.MsgLiquidStakeResponseProtoMsg): _232.MsgLiquidStakeResponse;
            toProto(message: _232.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _232.MsgLiquidStakeResponse): _232.MsgLiquidStakeResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _232.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgRedeemStake;
            fromPartial(object: Partial<_232.MsgRedeemStake>): _232.MsgRedeemStake;
            fromAmino(object: _232.MsgRedeemStakeAmino): _232.MsgRedeemStake;
            toAmino(message: _232.MsgRedeemStake): _232.MsgRedeemStakeAmino;
            fromAminoMsg(object: _232.MsgRedeemStakeAminoMsg): _232.MsgRedeemStake;
            toAminoMsg(message: _232.MsgRedeemStake): _232.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _232.MsgRedeemStakeProtoMsg): _232.MsgRedeemStake;
            toProto(message: _232.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _232.MsgRedeemStake): _232.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(message: _232.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgRedeemStakeResponse;
            fromPartial(object: Partial<_232.MsgRedeemStakeResponse>): _232.MsgRedeemStakeResponse;
            fromAmino(object: _232.MsgRedeemStakeResponseAmino): _232.MsgRedeemStakeResponse;
            toAmino(message: _232.MsgRedeemStakeResponse): _232.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _232.MsgRedeemStakeResponseAminoMsg): _232.MsgRedeemStakeResponse;
            fromProtoMsg(message: _232.MsgRedeemStakeResponseProtoMsg): _232.MsgRedeemStakeResponse;
            toProto(message: _232.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _232.MsgRedeemStakeResponse): _232.MsgRedeemStakeResponseProtoMsg;
        };
        MsgConfirmDelegation: {
            typeUrl: string;
            encode(message: _232.MsgConfirmDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgConfirmDelegation;
            fromPartial(object: Partial<_232.MsgConfirmDelegation>): _232.MsgConfirmDelegation;
            fromAmino(object: _232.MsgConfirmDelegationAmino): _232.MsgConfirmDelegation;
            toAmino(message: _232.MsgConfirmDelegation): _232.MsgConfirmDelegationAmino;
            fromAminoMsg(object: _232.MsgConfirmDelegationAminoMsg): _232.MsgConfirmDelegation;
            toAminoMsg(message: _232.MsgConfirmDelegation): _232.MsgConfirmDelegationAminoMsg;
            fromProtoMsg(message: _232.MsgConfirmDelegationProtoMsg): _232.MsgConfirmDelegation;
            toProto(message: _232.MsgConfirmDelegation): Uint8Array;
            toProtoMsg(message: _232.MsgConfirmDelegation): _232.MsgConfirmDelegationProtoMsg;
        };
        MsgConfirmDelegationResponse: {
            typeUrl: string;
            encode(_: _232.MsgConfirmDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgConfirmDelegationResponse;
            fromPartial(_: Partial<_232.MsgConfirmDelegationResponse>): _232.MsgConfirmDelegationResponse;
            fromAmino(_: _232.MsgConfirmDelegationResponseAmino): _232.MsgConfirmDelegationResponse;
            toAmino(_: _232.MsgConfirmDelegationResponse): _232.MsgConfirmDelegationResponseAmino;
            fromAminoMsg(object: _232.MsgConfirmDelegationResponseAminoMsg): _232.MsgConfirmDelegationResponse;
            fromProtoMsg(message: _232.MsgConfirmDelegationResponseProtoMsg): _232.MsgConfirmDelegationResponse;
            toProto(message: _232.MsgConfirmDelegationResponse): Uint8Array;
            toProtoMsg(message: _232.MsgConfirmDelegationResponse): _232.MsgConfirmDelegationResponseProtoMsg;
        };
        MsgConfirmUndelegation: {
            typeUrl: string;
            encode(message: _232.MsgConfirmUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgConfirmUndelegation;
            fromPartial(object: Partial<_232.MsgConfirmUndelegation>): _232.MsgConfirmUndelegation;
            fromAmino(object: _232.MsgConfirmUndelegationAmino): _232.MsgConfirmUndelegation;
            toAmino(message: _232.MsgConfirmUndelegation): _232.MsgConfirmUndelegationAmino;
            fromAminoMsg(object: _232.MsgConfirmUndelegationAminoMsg): _232.MsgConfirmUndelegation;
            toAminoMsg(message: _232.MsgConfirmUndelegation): _232.MsgConfirmUndelegationAminoMsg;
            fromProtoMsg(message: _232.MsgConfirmUndelegationProtoMsg): _232.MsgConfirmUndelegation;
            toProto(message: _232.MsgConfirmUndelegation): Uint8Array;
            toProtoMsg(message: _232.MsgConfirmUndelegation): _232.MsgConfirmUndelegationProtoMsg;
        };
        MsgConfirmUndelegationResponse: {
            typeUrl: string;
            encode(_: _232.MsgConfirmUndelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgConfirmUndelegationResponse;
            fromPartial(_: Partial<_232.MsgConfirmUndelegationResponse>): _232.MsgConfirmUndelegationResponse;
            fromAmino(_: _232.MsgConfirmUndelegationResponseAmino): _232.MsgConfirmUndelegationResponse;
            toAmino(_: _232.MsgConfirmUndelegationResponse): _232.MsgConfirmUndelegationResponseAmino;
            fromAminoMsg(object: _232.MsgConfirmUndelegationResponseAminoMsg): _232.MsgConfirmUndelegationResponse;
            fromProtoMsg(message: _232.MsgConfirmUndelegationResponseProtoMsg): _232.MsgConfirmUndelegationResponse;
            toProto(message: _232.MsgConfirmUndelegationResponse): Uint8Array;
            toProtoMsg(message: _232.MsgConfirmUndelegationResponse): _232.MsgConfirmUndelegationResponseProtoMsg;
        };
        MsgConfirmUnbondedTokenSweep: {
            typeUrl: string;
            encode(message: _232.MsgConfirmUnbondedTokenSweep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgConfirmUnbondedTokenSweep;
            fromPartial(object: Partial<_232.MsgConfirmUnbondedTokenSweep>): _232.MsgConfirmUnbondedTokenSweep;
            fromAmino(object: _232.MsgConfirmUnbondedTokenSweepAmino): _232.MsgConfirmUnbondedTokenSweep;
            toAmino(message: _232.MsgConfirmUnbondedTokenSweep): _232.MsgConfirmUnbondedTokenSweepAmino;
            fromAminoMsg(object: _232.MsgConfirmUnbondedTokenSweepAminoMsg): _232.MsgConfirmUnbondedTokenSweep;
            toAminoMsg(message: _232.MsgConfirmUnbondedTokenSweep): _232.MsgConfirmUnbondedTokenSweepAminoMsg;
            fromProtoMsg(message: _232.MsgConfirmUnbondedTokenSweepProtoMsg): _232.MsgConfirmUnbondedTokenSweep;
            toProto(message: _232.MsgConfirmUnbondedTokenSweep): Uint8Array;
            toProtoMsg(message: _232.MsgConfirmUnbondedTokenSweep): _232.MsgConfirmUnbondedTokenSweepProtoMsg;
        };
        MsgConfirmUnbondedTokenSweepResponse: {
            typeUrl: string;
            encode(_: _232.MsgConfirmUnbondedTokenSweepResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgConfirmUnbondedTokenSweepResponse;
            fromPartial(_: Partial<_232.MsgConfirmUnbondedTokenSweepResponse>): _232.MsgConfirmUnbondedTokenSweepResponse;
            fromAmino(_: _232.MsgConfirmUnbondedTokenSweepResponseAmino): _232.MsgConfirmUnbondedTokenSweepResponse;
            toAmino(_: _232.MsgConfirmUnbondedTokenSweepResponse): _232.MsgConfirmUnbondedTokenSweepResponseAmino;
            fromAminoMsg(object: _232.MsgConfirmUnbondedTokenSweepResponseAminoMsg): _232.MsgConfirmUnbondedTokenSweepResponse;
            fromProtoMsg(message: _232.MsgConfirmUnbondedTokenSweepResponseProtoMsg): _232.MsgConfirmUnbondedTokenSweepResponse;
            toProto(message: _232.MsgConfirmUnbondedTokenSweepResponse): Uint8Array;
            toProtoMsg(message: _232.MsgConfirmUnbondedTokenSweepResponse): _232.MsgConfirmUnbondedTokenSweepResponseProtoMsg;
        };
        MsgAdjustDelegatedBalance: {
            typeUrl: string;
            encode(message: _232.MsgAdjustDelegatedBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgAdjustDelegatedBalance;
            fromPartial(object: Partial<_232.MsgAdjustDelegatedBalance>): _232.MsgAdjustDelegatedBalance;
            fromAmino(object: _232.MsgAdjustDelegatedBalanceAmino): _232.MsgAdjustDelegatedBalance;
            toAmino(message: _232.MsgAdjustDelegatedBalance): _232.MsgAdjustDelegatedBalanceAmino;
            fromAminoMsg(object: _232.MsgAdjustDelegatedBalanceAminoMsg): _232.MsgAdjustDelegatedBalance;
            toAminoMsg(message: _232.MsgAdjustDelegatedBalance): _232.MsgAdjustDelegatedBalanceAminoMsg;
            fromProtoMsg(message: _232.MsgAdjustDelegatedBalanceProtoMsg): _232.MsgAdjustDelegatedBalance;
            toProto(message: _232.MsgAdjustDelegatedBalance): Uint8Array;
            toProtoMsg(message: _232.MsgAdjustDelegatedBalance): _232.MsgAdjustDelegatedBalanceProtoMsg;
        };
        MsgAdjustDelegatedBalanceResponse: {
            typeUrl: string;
            encode(_: _232.MsgAdjustDelegatedBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgAdjustDelegatedBalanceResponse;
            fromPartial(_: Partial<_232.MsgAdjustDelegatedBalanceResponse>): _232.MsgAdjustDelegatedBalanceResponse;
            fromAmino(_: _232.MsgAdjustDelegatedBalanceResponseAmino): _232.MsgAdjustDelegatedBalanceResponse;
            toAmino(_: _232.MsgAdjustDelegatedBalanceResponse): _232.MsgAdjustDelegatedBalanceResponseAmino;
            fromAminoMsg(object: _232.MsgAdjustDelegatedBalanceResponseAminoMsg): _232.MsgAdjustDelegatedBalanceResponse;
            fromProtoMsg(message: _232.MsgAdjustDelegatedBalanceResponseProtoMsg): _232.MsgAdjustDelegatedBalanceResponse;
            toProto(message: _232.MsgAdjustDelegatedBalanceResponse): Uint8Array;
            toProtoMsg(message: _232.MsgAdjustDelegatedBalanceResponse): _232.MsgAdjustDelegatedBalanceResponseProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _232.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_232.MsgUpdateInnerRedemptionRateBounds>): _232.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _232.MsgUpdateInnerRedemptionRateBoundsAmino): _232.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _232.MsgUpdateInnerRedemptionRateBounds): _232.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _232.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _232.MsgUpdateInnerRedemptionRateBounds;
            toAminoMsg(message: _232.MsgUpdateInnerRedemptionRateBounds): _232.MsgUpdateInnerRedemptionRateBoundsAminoMsg;
            fromProtoMsg(message: _232.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _232.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _232.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _232.MsgUpdateInnerRedemptionRateBounds): _232.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _232.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_232.MsgUpdateInnerRedemptionRateBoundsResponse>): _232.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _232.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _232.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _232.MsgUpdateInnerRedemptionRateBoundsResponse): _232.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _232.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _232.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _232.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _232.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _232.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _232.MsgUpdateInnerRedemptionRateBoundsResponse): _232.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _232.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgResumeHostZone;
            fromPartial(object: Partial<_232.MsgResumeHostZone>): _232.MsgResumeHostZone;
            fromAmino(object: _232.MsgResumeHostZoneAmino): _232.MsgResumeHostZone;
            toAmino(message: _232.MsgResumeHostZone): _232.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _232.MsgResumeHostZoneAminoMsg): _232.MsgResumeHostZone;
            toAminoMsg(message: _232.MsgResumeHostZone): _232.MsgResumeHostZoneAminoMsg;
            fromProtoMsg(message: _232.MsgResumeHostZoneProtoMsg): _232.MsgResumeHostZone;
            toProto(message: _232.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _232.MsgResumeHostZone): _232.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _232.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_232.MsgResumeHostZoneResponse>): _232.MsgResumeHostZoneResponse;
            fromAmino(_: _232.MsgResumeHostZoneResponseAmino): _232.MsgResumeHostZoneResponse;
            toAmino(_: _232.MsgResumeHostZoneResponse): _232.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _232.MsgResumeHostZoneResponseAminoMsg): _232.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _232.MsgResumeHostZoneResponseProtoMsg): _232.MsgResumeHostZoneResponse;
            toProto(message: _232.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _232.MsgResumeHostZoneResponse): _232.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgRefreshRedemptionRate: {
            typeUrl: string;
            encode(message: _232.MsgRefreshRedemptionRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgRefreshRedemptionRate;
            fromPartial(object: Partial<_232.MsgRefreshRedemptionRate>): _232.MsgRefreshRedemptionRate;
            fromAmino(object: _232.MsgRefreshRedemptionRateAmino): _232.MsgRefreshRedemptionRate;
            toAmino(message: _232.MsgRefreshRedemptionRate): _232.MsgRefreshRedemptionRateAmino;
            fromAminoMsg(object: _232.MsgRefreshRedemptionRateAminoMsg): _232.MsgRefreshRedemptionRate;
            toAminoMsg(message: _232.MsgRefreshRedemptionRate): _232.MsgRefreshRedemptionRateAminoMsg;
            fromProtoMsg(message: _232.MsgRefreshRedemptionRateProtoMsg): _232.MsgRefreshRedemptionRate;
            toProto(message: _232.MsgRefreshRedemptionRate): Uint8Array;
            toProtoMsg(message: _232.MsgRefreshRedemptionRate): _232.MsgRefreshRedemptionRateProtoMsg;
        };
        MsgRefreshRedemptionRateResponse: {
            typeUrl: string;
            encode(_: _232.MsgRefreshRedemptionRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgRefreshRedemptionRateResponse;
            fromPartial(_: Partial<_232.MsgRefreshRedemptionRateResponse>): _232.MsgRefreshRedemptionRateResponse;
            fromAmino(_: _232.MsgRefreshRedemptionRateResponseAmino): _232.MsgRefreshRedemptionRateResponse;
            toAmino(_: _232.MsgRefreshRedemptionRateResponse): _232.MsgRefreshRedemptionRateResponseAmino;
            fromAminoMsg(object: _232.MsgRefreshRedemptionRateResponseAminoMsg): _232.MsgRefreshRedemptionRateResponse;
            fromProtoMsg(message: _232.MsgRefreshRedemptionRateResponseProtoMsg): _232.MsgRefreshRedemptionRateResponse;
            toProto(message: _232.MsgRefreshRedemptionRateResponse): Uint8Array;
            toProtoMsg(message: _232.MsgRefreshRedemptionRateResponse): _232.MsgRefreshRedemptionRateResponseProtoMsg;
        };
        MsgOverwriteDelegationRecord: {
            typeUrl: string;
            encode(message: _232.MsgOverwriteDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgOverwriteDelegationRecord;
            fromPartial(object: Partial<_232.MsgOverwriteDelegationRecord>): _232.MsgOverwriteDelegationRecord;
            fromAmino(object: _232.MsgOverwriteDelegationRecordAmino): _232.MsgOverwriteDelegationRecord;
            toAmino(message: _232.MsgOverwriteDelegationRecord): _232.MsgOverwriteDelegationRecordAmino;
            fromAminoMsg(object: _232.MsgOverwriteDelegationRecordAminoMsg): _232.MsgOverwriteDelegationRecord;
            toAminoMsg(message: _232.MsgOverwriteDelegationRecord): _232.MsgOverwriteDelegationRecordAminoMsg;
            fromProtoMsg(message: _232.MsgOverwriteDelegationRecordProtoMsg): _232.MsgOverwriteDelegationRecord;
            toProto(message: _232.MsgOverwriteDelegationRecord): Uint8Array;
            toProtoMsg(message: _232.MsgOverwriteDelegationRecord): _232.MsgOverwriteDelegationRecordProtoMsg;
        };
        MsgOverwriteDelegationRecordResponse: {
            typeUrl: string;
            encode(_: _232.MsgOverwriteDelegationRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgOverwriteDelegationRecordResponse;
            fromPartial(_: Partial<_232.MsgOverwriteDelegationRecordResponse>): _232.MsgOverwriteDelegationRecordResponse;
            fromAmino(_: _232.MsgOverwriteDelegationRecordResponseAmino): _232.MsgOverwriteDelegationRecordResponse;
            toAmino(_: _232.MsgOverwriteDelegationRecordResponse): _232.MsgOverwriteDelegationRecordResponseAmino;
            fromAminoMsg(object: _232.MsgOverwriteDelegationRecordResponseAminoMsg): _232.MsgOverwriteDelegationRecordResponse;
            fromProtoMsg(message: _232.MsgOverwriteDelegationRecordResponseProtoMsg): _232.MsgOverwriteDelegationRecordResponse;
            toProto(message: _232.MsgOverwriteDelegationRecordResponse): Uint8Array;
            toProtoMsg(message: _232.MsgOverwriteDelegationRecordResponse): _232.MsgOverwriteDelegationRecordResponseProtoMsg;
        };
        MsgOverwriteUnbondingRecord: {
            typeUrl: string;
            encode(message: _232.MsgOverwriteUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgOverwriteUnbondingRecord;
            fromPartial(object: Partial<_232.MsgOverwriteUnbondingRecord>): _232.MsgOverwriteUnbondingRecord;
            fromAmino(object: _232.MsgOverwriteUnbondingRecordAmino): _232.MsgOverwriteUnbondingRecord;
            toAmino(message: _232.MsgOverwriteUnbondingRecord): _232.MsgOverwriteUnbondingRecordAmino;
            fromAminoMsg(object: _232.MsgOverwriteUnbondingRecordAminoMsg): _232.MsgOverwriteUnbondingRecord;
            toAminoMsg(message: _232.MsgOverwriteUnbondingRecord): _232.MsgOverwriteUnbondingRecordAminoMsg;
            fromProtoMsg(message: _232.MsgOverwriteUnbondingRecordProtoMsg): _232.MsgOverwriteUnbondingRecord;
            toProto(message: _232.MsgOverwriteUnbondingRecord): Uint8Array;
            toProtoMsg(message: _232.MsgOverwriteUnbondingRecord): _232.MsgOverwriteUnbondingRecordProtoMsg;
        };
        MsgOverwriteUnbondingRecordResponse: {
            typeUrl: string;
            encode(_: _232.MsgOverwriteUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgOverwriteUnbondingRecordResponse;
            fromPartial(_: Partial<_232.MsgOverwriteUnbondingRecordResponse>): _232.MsgOverwriteUnbondingRecordResponse;
            fromAmino(_: _232.MsgOverwriteUnbondingRecordResponseAmino): _232.MsgOverwriteUnbondingRecordResponse;
            toAmino(_: _232.MsgOverwriteUnbondingRecordResponse): _232.MsgOverwriteUnbondingRecordResponseAmino;
            fromAminoMsg(object: _232.MsgOverwriteUnbondingRecordResponseAminoMsg): _232.MsgOverwriteUnbondingRecordResponse;
            fromProtoMsg(message: _232.MsgOverwriteUnbondingRecordResponseProtoMsg): _232.MsgOverwriteUnbondingRecordResponse;
            toProto(message: _232.MsgOverwriteUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _232.MsgOverwriteUnbondingRecordResponse): _232.MsgOverwriteUnbondingRecordResponseProtoMsg;
        };
        MsgOverwriteRedemptionRecord: {
            typeUrl: string;
            encode(message: _232.MsgOverwriteRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgOverwriteRedemptionRecord;
            fromPartial(object: Partial<_232.MsgOverwriteRedemptionRecord>): _232.MsgOverwriteRedemptionRecord;
            fromAmino(object: _232.MsgOverwriteRedemptionRecordAmino): _232.MsgOverwriteRedemptionRecord;
            toAmino(message: _232.MsgOverwriteRedemptionRecord): _232.MsgOverwriteRedemptionRecordAmino;
            fromAminoMsg(object: _232.MsgOverwriteRedemptionRecordAminoMsg): _232.MsgOverwriteRedemptionRecord;
            toAminoMsg(message: _232.MsgOverwriteRedemptionRecord): _232.MsgOverwriteRedemptionRecordAminoMsg;
            fromProtoMsg(message: _232.MsgOverwriteRedemptionRecordProtoMsg): _232.MsgOverwriteRedemptionRecord;
            toProto(message: _232.MsgOverwriteRedemptionRecord): Uint8Array;
            toProtoMsg(message: _232.MsgOverwriteRedemptionRecord): _232.MsgOverwriteRedemptionRecordProtoMsg;
        };
        MsgOverwriteRedemptionRecordResponse: {
            typeUrl: string;
            encode(_: _232.MsgOverwriteRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgOverwriteRedemptionRecordResponse;
            fromPartial(_: Partial<_232.MsgOverwriteRedemptionRecordResponse>): _232.MsgOverwriteRedemptionRecordResponse;
            fromAmino(_: _232.MsgOverwriteRedemptionRecordResponseAmino): _232.MsgOverwriteRedemptionRecordResponse;
            toAmino(_: _232.MsgOverwriteRedemptionRecordResponse): _232.MsgOverwriteRedemptionRecordResponseAmino;
            fromAminoMsg(object: _232.MsgOverwriteRedemptionRecordResponseAminoMsg): _232.MsgOverwriteRedemptionRecordResponse;
            fromProtoMsg(message: _232.MsgOverwriteRedemptionRecordResponseProtoMsg): _232.MsgOverwriteRedemptionRecordResponse;
            toProto(message: _232.MsgOverwriteRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _232.MsgOverwriteRedemptionRecordResponse): _232.MsgOverwriteRedemptionRecordResponseProtoMsg;
        };
        MsgSetOperatorAddress: {
            typeUrl: string;
            encode(message: _232.MsgSetOperatorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgSetOperatorAddress;
            fromPartial(object: Partial<_232.MsgSetOperatorAddress>): _232.MsgSetOperatorAddress;
            fromAmino(object: _232.MsgSetOperatorAddressAmino): _232.MsgSetOperatorAddress;
            toAmino(message: _232.MsgSetOperatorAddress): _232.MsgSetOperatorAddressAmino;
            fromAminoMsg(object: _232.MsgSetOperatorAddressAminoMsg): _232.MsgSetOperatorAddress;
            toAminoMsg(message: _232.MsgSetOperatorAddress): _232.MsgSetOperatorAddressAminoMsg;
            fromProtoMsg(message: _232.MsgSetOperatorAddressProtoMsg): _232.MsgSetOperatorAddress;
            toProto(message: _232.MsgSetOperatorAddress): Uint8Array;
            toProtoMsg(message: _232.MsgSetOperatorAddress): _232.MsgSetOperatorAddressProtoMsg;
        };
        MsgSetOperatorAddressResponse: {
            typeUrl: string;
            encode(_: _232.MsgSetOperatorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.MsgSetOperatorAddressResponse;
            fromPartial(_: Partial<_232.MsgSetOperatorAddressResponse>): _232.MsgSetOperatorAddressResponse;
            fromAmino(_: _232.MsgSetOperatorAddressResponseAmino): _232.MsgSetOperatorAddressResponse;
            toAmino(_: _232.MsgSetOperatorAddressResponse): _232.MsgSetOperatorAddressResponseAmino;
            fromAminoMsg(object: _232.MsgSetOperatorAddressResponseAminoMsg): _232.MsgSetOperatorAddressResponse;
            fromProtoMsg(message: _232.MsgSetOperatorAddressResponseProtoMsg): _232.MsgSetOperatorAddressResponse;
            toProto(message: _232.MsgSetOperatorAddressResponse): Uint8Array;
            toProtoMsg(message: _232.MsgSetOperatorAddressResponse): _232.MsgSetOperatorAddressResponseProtoMsg;
        };
        delegationRecordStatusFromJSON(object: any): _231.DelegationRecordStatus;
        delegationRecordStatusToJSON(object: _231.DelegationRecordStatus): string;
        unbondingRecordStatusFromJSON(object: any): _231.UnbondingRecordStatus;
        unbondingRecordStatusToJSON(object: _231.UnbondingRecordStatus): string;
        DelegationRecordStatus: typeof _231.DelegationRecordStatus;
        DelegationRecordStatusSDKType: typeof _231.DelegationRecordStatus;
        DelegationRecordStatusAmino: typeof _231.DelegationRecordStatus;
        UnbondingRecordStatus: typeof _231.UnbondingRecordStatus;
        UnbondingRecordStatusSDKType: typeof _231.UnbondingRecordStatus;
        UnbondingRecordStatusAmino: typeof _231.UnbondingRecordStatus;
        HostZone: {
            typeUrl: string;
            encode(message: _231.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.HostZone;
            fromPartial(object: Partial<_231.HostZone>): _231.HostZone;
            fromAmino(object: _231.HostZoneAmino): _231.HostZone;
            toAmino(message: _231.HostZone): _231.HostZoneAmino;
            fromAminoMsg(object: _231.HostZoneAminoMsg): _231.HostZone;
            fromProtoMsg(message: _231.HostZoneProtoMsg): _231.HostZone;
            toProto(message: _231.HostZone): Uint8Array;
            toProtoMsg(message: _231.HostZone): _231.HostZoneProtoMsg;
        };
        DelegationRecord: {
            typeUrl: string;
            encode(message: _231.DelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.DelegationRecord;
            fromPartial(object: Partial<_231.DelegationRecord>): _231.DelegationRecord;
            fromAmino(object: _231.DelegationRecordAmino): _231.DelegationRecord;
            toAmino(message: _231.DelegationRecord): _231.DelegationRecordAmino;
            fromAminoMsg(object: _231.DelegationRecordAminoMsg): _231.DelegationRecord;
            fromProtoMsg(message: _231.DelegationRecordProtoMsg): _231.DelegationRecord;
            toProto(message: _231.DelegationRecord): Uint8Array;
            toProtoMsg(message: _231.DelegationRecord): _231.DelegationRecordProtoMsg;
        };
        UnbondingRecord: {
            typeUrl: string;
            encode(message: _231.UnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.UnbondingRecord;
            fromPartial(object: Partial<_231.UnbondingRecord>): _231.UnbondingRecord;
            fromAmino(object: _231.UnbondingRecordAmino): _231.UnbondingRecord;
            toAmino(message: _231.UnbondingRecord): _231.UnbondingRecordAmino;
            fromAminoMsg(object: _231.UnbondingRecordAminoMsg): _231.UnbondingRecord;
            fromProtoMsg(message: _231.UnbondingRecordProtoMsg): _231.UnbondingRecord;
            toProto(message: _231.UnbondingRecord): Uint8Array;
            toProtoMsg(message: _231.UnbondingRecord): _231.UnbondingRecordProtoMsg;
        };
        RedemptionRecord: {
            typeUrl: string;
            encode(message: _231.RedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.RedemptionRecord;
            fromPartial(object: Partial<_231.RedemptionRecord>): _231.RedemptionRecord;
            fromAmino(object: _231.RedemptionRecordAmino): _231.RedemptionRecord;
            toAmino(message: _231.RedemptionRecord): _231.RedemptionRecordAmino;
            fromAminoMsg(object: _231.RedemptionRecordAminoMsg): _231.RedemptionRecord;
            fromProtoMsg(message: _231.RedemptionRecordProtoMsg): _231.RedemptionRecord;
            toProto(message: _231.RedemptionRecord): Uint8Array;
            toProtoMsg(message: _231.RedemptionRecord): _231.RedemptionRecordProtoMsg;
        };
        SlashRecord: {
            typeUrl: string;
            encode(message: _231.SlashRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.SlashRecord;
            fromPartial(object: Partial<_231.SlashRecord>): _231.SlashRecord;
            fromAmino(object: _231.SlashRecordAmino): _231.SlashRecord;
            toAmino(message: _231.SlashRecord): _231.SlashRecordAmino;
            fromAminoMsg(object: _231.SlashRecordAminoMsg): _231.SlashRecord;
            fromProtoMsg(message: _231.SlashRecordProtoMsg): _231.SlashRecord;
            toProto(message: _231.SlashRecord): Uint8Array;
            toProtoMsg(message: _231.SlashRecord): _231.SlashRecordProtoMsg;
        };
        QueryHostZoneRequest: {
            typeUrl: string;
            encode(_: _230.QueryHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.QueryHostZoneRequest;
            fromPartial(_: Partial<_230.QueryHostZoneRequest>): _230.QueryHostZoneRequest;
            fromAmino(_: _230.QueryHostZoneRequestAmino): _230.QueryHostZoneRequest;
            toAmino(_: _230.QueryHostZoneRequest): _230.QueryHostZoneRequestAmino;
            fromAminoMsg(object: _230.QueryHostZoneRequestAminoMsg): _230.QueryHostZoneRequest;
            fromProtoMsg(message: _230.QueryHostZoneRequestProtoMsg): _230.QueryHostZoneRequest;
            toProto(message: _230.QueryHostZoneRequest): Uint8Array;
            toProtoMsg(message: _230.QueryHostZoneRequest): _230.QueryHostZoneRequestProtoMsg;
        };
        QueryHostZoneResponse: {
            typeUrl: string;
            encode(message: _230.QueryHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.QueryHostZoneResponse;
            fromPartial(object: Partial<_230.QueryHostZoneResponse>): _230.QueryHostZoneResponse;
            fromAmino(object: _230.QueryHostZoneResponseAmino): _230.QueryHostZoneResponse;
            toAmino(message: _230.QueryHostZoneResponse): _230.QueryHostZoneResponseAmino;
            fromAminoMsg(object: _230.QueryHostZoneResponseAminoMsg): _230.QueryHostZoneResponse;
            fromProtoMsg(message: _230.QueryHostZoneResponseProtoMsg): _230.QueryHostZoneResponse;
            toProto(message: _230.QueryHostZoneResponse): Uint8Array;
            toProtoMsg(message: _230.QueryHostZoneResponse): _230.QueryHostZoneResponseProtoMsg;
        };
        QueryDelegationRecordsRequest: {
            typeUrl: string;
            encode(message: _230.QueryDelegationRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.QueryDelegationRecordsRequest;
            fromPartial(object: Partial<_230.QueryDelegationRecordsRequest>): _230.QueryDelegationRecordsRequest;
            fromAmino(object: _230.QueryDelegationRecordsRequestAmino): _230.QueryDelegationRecordsRequest;
            toAmino(message: _230.QueryDelegationRecordsRequest): _230.QueryDelegationRecordsRequestAmino;
            fromAminoMsg(object: _230.QueryDelegationRecordsRequestAminoMsg): _230.QueryDelegationRecordsRequest;
            fromProtoMsg(message: _230.QueryDelegationRecordsRequestProtoMsg): _230.QueryDelegationRecordsRequest;
            toProto(message: _230.QueryDelegationRecordsRequest): Uint8Array;
            toProtoMsg(message: _230.QueryDelegationRecordsRequest): _230.QueryDelegationRecordsRequestProtoMsg;
        };
        QueryDelegationRecordsResponse: {
            typeUrl: string;
            encode(message: _230.QueryDelegationRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.QueryDelegationRecordsResponse;
            fromPartial(object: Partial<_230.QueryDelegationRecordsResponse>): _230.QueryDelegationRecordsResponse;
            fromAmino(object: _230.QueryDelegationRecordsResponseAmino): _230.QueryDelegationRecordsResponse;
            toAmino(message: _230.QueryDelegationRecordsResponse): _230.QueryDelegationRecordsResponseAmino;
            fromAminoMsg(object: _230.QueryDelegationRecordsResponseAminoMsg): _230.QueryDelegationRecordsResponse;
            fromProtoMsg(message: _230.QueryDelegationRecordsResponseProtoMsg): _230.QueryDelegationRecordsResponse;
            toProto(message: _230.QueryDelegationRecordsResponse): Uint8Array;
            toProtoMsg(message: _230.QueryDelegationRecordsResponse): _230.QueryDelegationRecordsResponseProtoMsg;
        };
        QueryUnbondingRecordsRequest: {
            typeUrl: string;
            encode(message: _230.QueryUnbondingRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.QueryUnbondingRecordsRequest;
            fromPartial(object: Partial<_230.QueryUnbondingRecordsRequest>): _230.QueryUnbondingRecordsRequest;
            fromAmino(object: _230.QueryUnbondingRecordsRequestAmino): _230.QueryUnbondingRecordsRequest;
            toAmino(message: _230.QueryUnbondingRecordsRequest): _230.QueryUnbondingRecordsRequestAmino;
            fromAminoMsg(object: _230.QueryUnbondingRecordsRequestAminoMsg): _230.QueryUnbondingRecordsRequest;
            fromProtoMsg(message: _230.QueryUnbondingRecordsRequestProtoMsg): _230.QueryUnbondingRecordsRequest;
            toProto(message: _230.QueryUnbondingRecordsRequest): Uint8Array;
            toProtoMsg(message: _230.QueryUnbondingRecordsRequest): _230.QueryUnbondingRecordsRequestProtoMsg;
        };
        QueryUnbondingRecordsResponse: {
            typeUrl: string;
            encode(message: _230.QueryUnbondingRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.QueryUnbondingRecordsResponse;
            fromPartial(object: Partial<_230.QueryUnbondingRecordsResponse>): _230.QueryUnbondingRecordsResponse;
            fromAmino(object: _230.QueryUnbondingRecordsResponseAmino): _230.QueryUnbondingRecordsResponse;
            toAmino(message: _230.QueryUnbondingRecordsResponse): _230.QueryUnbondingRecordsResponseAmino;
            fromAminoMsg(object: _230.QueryUnbondingRecordsResponseAminoMsg): _230.QueryUnbondingRecordsResponse;
            fromProtoMsg(message: _230.QueryUnbondingRecordsResponseProtoMsg): _230.QueryUnbondingRecordsResponse;
            toProto(message: _230.QueryUnbondingRecordsResponse): Uint8Array;
            toProtoMsg(message: _230.QueryUnbondingRecordsResponse): _230.QueryUnbondingRecordsResponseProtoMsg;
        };
        QueryRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _230.QueryRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.QueryRedemptionRecordRequest;
            fromPartial(object: Partial<_230.QueryRedemptionRecordRequest>): _230.QueryRedemptionRecordRequest;
            fromAmino(object: _230.QueryRedemptionRecordRequestAmino): _230.QueryRedemptionRecordRequest;
            toAmino(message: _230.QueryRedemptionRecordRequest): _230.QueryRedemptionRecordRequestAmino;
            fromAminoMsg(object: _230.QueryRedemptionRecordRequestAminoMsg): _230.QueryRedemptionRecordRequest;
            fromProtoMsg(message: _230.QueryRedemptionRecordRequestProtoMsg): _230.QueryRedemptionRecordRequest;
            toProto(message: _230.QueryRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _230.QueryRedemptionRecordRequest): _230.QueryRedemptionRecordRequestProtoMsg;
        };
        QueryRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _230.QueryRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.QueryRedemptionRecordResponse;
            fromPartial(object: Partial<_230.QueryRedemptionRecordResponse>): _230.QueryRedemptionRecordResponse;
            fromAmino(object: _230.QueryRedemptionRecordResponseAmino): _230.QueryRedemptionRecordResponse;
            toAmino(message: _230.QueryRedemptionRecordResponse): _230.QueryRedemptionRecordResponseAmino;
            fromAminoMsg(object: _230.QueryRedemptionRecordResponseAminoMsg): _230.QueryRedemptionRecordResponse;
            fromProtoMsg(message: _230.QueryRedemptionRecordResponseProtoMsg): _230.QueryRedemptionRecordResponse;
            toProto(message: _230.QueryRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _230.QueryRedemptionRecordResponse): _230.QueryRedemptionRecordResponseProtoMsg;
        };
        QueryRedemptionRecordsRequest: {
            typeUrl: string;
            encode(message: _230.QueryRedemptionRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.QueryRedemptionRecordsRequest;
            fromPartial(object: Partial<_230.QueryRedemptionRecordsRequest>): _230.QueryRedemptionRecordsRequest;
            fromAmino(object: _230.QueryRedemptionRecordsRequestAmino): _230.QueryRedemptionRecordsRequest;
            toAmino(message: _230.QueryRedemptionRecordsRequest): _230.QueryRedemptionRecordsRequestAmino;
            fromAminoMsg(object: _230.QueryRedemptionRecordsRequestAminoMsg): _230.QueryRedemptionRecordsRequest;
            fromProtoMsg(message: _230.QueryRedemptionRecordsRequestProtoMsg): _230.QueryRedemptionRecordsRequest;
            toProto(message: _230.QueryRedemptionRecordsRequest): Uint8Array;
            toProtoMsg(message: _230.QueryRedemptionRecordsRequest): _230.QueryRedemptionRecordsRequestProtoMsg;
        };
        QueryRedemptionRecordsResponse: {
            typeUrl: string;
            encode(message: _230.QueryRedemptionRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.QueryRedemptionRecordsResponse;
            fromPartial(object: Partial<_230.QueryRedemptionRecordsResponse>): _230.QueryRedemptionRecordsResponse;
            fromAmino(object: _230.QueryRedemptionRecordsResponseAmino): _230.QueryRedemptionRecordsResponse;
            toAmino(message: _230.QueryRedemptionRecordsResponse): _230.QueryRedemptionRecordsResponseAmino;
            fromAminoMsg(object: _230.QueryRedemptionRecordsResponseAminoMsg): _230.QueryRedemptionRecordsResponse;
            fromProtoMsg(message: _230.QueryRedemptionRecordsResponseProtoMsg): _230.QueryRedemptionRecordsResponse;
            toProto(message: _230.QueryRedemptionRecordsResponse): Uint8Array;
            toProtoMsg(message: _230.QueryRedemptionRecordsResponse): _230.QueryRedemptionRecordsResponseProtoMsg;
        };
        QuerySlashRecordsRequest: {
            typeUrl: string;
            encode(_: _230.QuerySlashRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.QuerySlashRecordsRequest;
            fromPartial(_: Partial<_230.QuerySlashRecordsRequest>): _230.QuerySlashRecordsRequest;
            fromAmino(_: _230.QuerySlashRecordsRequestAmino): _230.QuerySlashRecordsRequest;
            toAmino(_: _230.QuerySlashRecordsRequest): _230.QuerySlashRecordsRequestAmino;
            fromAminoMsg(object: _230.QuerySlashRecordsRequestAminoMsg): _230.QuerySlashRecordsRequest;
            fromProtoMsg(message: _230.QuerySlashRecordsRequestProtoMsg): _230.QuerySlashRecordsRequest;
            toProto(message: _230.QuerySlashRecordsRequest): Uint8Array;
            toProtoMsg(message: _230.QuerySlashRecordsRequest): _230.QuerySlashRecordsRequestProtoMsg;
        };
        QuerySlashRecordsResponse: {
            typeUrl: string;
            encode(message: _230.QuerySlashRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.QuerySlashRecordsResponse;
            fromPartial(object: Partial<_230.QuerySlashRecordsResponse>): _230.QuerySlashRecordsResponse;
            fromAmino(object: _230.QuerySlashRecordsResponseAmino): _230.QuerySlashRecordsResponse;
            toAmino(message: _230.QuerySlashRecordsResponse): _230.QuerySlashRecordsResponseAmino;
            fromAminoMsg(object: _230.QuerySlashRecordsResponseAminoMsg): _230.QuerySlashRecordsResponse;
            fromProtoMsg(message: _230.QuerySlashRecordsResponseProtoMsg): _230.QuerySlashRecordsResponse;
            toProto(message: _230.QuerySlashRecordsResponse): Uint8Array;
            toProtoMsg(message: _230.QuerySlashRecordsResponse): _230.QuerySlashRecordsResponseProtoMsg;
        };
        RedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _230.RedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.RedemptionRecordResponse;
            fromPartial(object: Partial<_230.RedemptionRecordResponse>): _230.RedemptionRecordResponse;
            fromAmino(object: _230.RedemptionRecordResponseAmino): _230.RedemptionRecordResponse;
            toAmino(message: _230.RedemptionRecordResponse): _230.RedemptionRecordResponseAmino;
            fromAminoMsg(object: _230.RedemptionRecordResponseAminoMsg): _230.RedemptionRecordResponse;
            fromProtoMsg(message: _230.RedemptionRecordResponseProtoMsg): _230.RedemptionRecordResponse;
            toProto(message: _230.RedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _230.RedemptionRecordResponse): _230.RedemptionRecordResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _229.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.Params;
            fromPartial(_: Partial<_229.Params>): _229.Params;
            fromAmino(_: _229.ParamsAmino): _229.Params;
            toAmino(_: _229.Params): _229.ParamsAmino;
            fromAminoMsg(object: _229.ParamsAminoMsg): _229.Params;
            fromProtoMsg(message: _229.ParamsProtoMsg): _229.Params;
            toProto(message: _229.Params): Uint8Array;
            toProtoMsg(message: _229.Params): _229.ParamsProtoMsg;
        };
        TransferInProgressRecordIds: {
            typeUrl: string;
            encode(message: _229.TransferInProgressRecordIds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.TransferInProgressRecordIds;
            fromPartial(object: Partial<_229.TransferInProgressRecordIds>): _229.TransferInProgressRecordIds;
            fromAmino(object: _229.TransferInProgressRecordIdsAmino): _229.TransferInProgressRecordIds;
            toAmino(message: _229.TransferInProgressRecordIds): _229.TransferInProgressRecordIdsAmino;
            fromAminoMsg(object: _229.TransferInProgressRecordIdsAminoMsg): _229.TransferInProgressRecordIds;
            fromProtoMsg(message: _229.TransferInProgressRecordIdsProtoMsg): _229.TransferInProgressRecordIds;
            toProto(message: _229.TransferInProgressRecordIds): Uint8Array;
            toProtoMsg(message: _229.TransferInProgressRecordIds): _229.TransferInProgressRecordIdsProtoMsg;
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
    const vesting: {
        BaseVestingAccount: {
            typeUrl: string;
            encode(message: _234.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.BaseVestingAccount;
            fromPartial(object: Partial<_234.BaseVestingAccount>): _234.BaseVestingAccount;
            fromAmino(object: _234.BaseVestingAccountAmino): _234.BaseVestingAccount;
            toAmino(message: _234.BaseVestingAccount): _234.BaseVestingAccountAmino;
            fromAminoMsg(object: _234.BaseVestingAccountAminoMsg): _234.BaseVestingAccount;
            fromProtoMsg(message: _234.BaseVestingAccountProtoMsg): _234.BaseVestingAccount;
            toProto(message: _234.BaseVestingAccount): Uint8Array;
            toProtoMsg(message: _234.BaseVestingAccount): _234.BaseVestingAccountProtoMsg;
        };
        Period: {
            typeUrl: string;
            encode(message: _234.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.Period;
            fromPartial(object: Partial<_234.Period>): _234.Period;
            fromAmino(object: _234.PeriodAmino): _234.Period;
            toAmino(message: _234.Period): _234.PeriodAmino;
            fromAminoMsg(object: _234.PeriodAminoMsg): _234.Period;
            fromProtoMsg(message: _234.PeriodProtoMsg): _234.Period;
            toProto(message: _234.Period): Uint8Array;
            toProtoMsg(message: _234.Period): _234.PeriodProtoMsg;
        };
        StridePeriodicVestingAccount: {
            typeUrl: string;
            encode(message: _234.StridePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.StridePeriodicVestingAccount;
            fromPartial(object: Partial<_234.StridePeriodicVestingAccount>): _234.StridePeriodicVestingAccount;
            fromAmino(object: _234.StridePeriodicVestingAccountAmino): _234.StridePeriodicVestingAccount;
            toAmino(message: _234.StridePeriodicVestingAccount): _234.StridePeriodicVestingAccountAmino;
            fromAminoMsg(object: _234.StridePeriodicVestingAccountAminoMsg): _234.StridePeriodicVestingAccount;
            fromProtoMsg(message: _234.StridePeriodicVestingAccountProtoMsg): _234.StridePeriodicVestingAccount;
            toProto(message: _234.StridePeriodicVestingAccount): Uint8Array;
            toProtoMsg(message: _234.StridePeriodicVestingAccount): _234.StridePeriodicVestingAccountProtoMsg;
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
                airdrop: _369.MsgClientImpl;
                claim: _370.MsgClientImpl;
                icaoracle: _371.MsgClientImpl;
                interchainquery: {
                    v1: _372.MsgClientImpl;
                };
                stakedym: _373.MsgClientImpl;
                stakeibc: _374.MsgClientImpl;
                staketia: _375.MsgClientImpl;
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
                    airdrop(request: _177.QueryAirdropRequest): Promise<_177.QueryAirdropResponse>;
                    allAirdrops(request?: _177.QueryAllAirdropsRequest): Promise<_177.QueryAllAirdropsResponse>;
                    userAllocation(request: _177.QueryUserAllocationRequest): Promise<_177.QueryUserAllocationResponse>;
                    userAllocations(request: _177.QueryUserAllocationsRequest): Promise<_177.QueryUserAllocationsResponse>;
                    allAllocations(request: _177.QueryAllAllocationsRequest): Promise<_177.QueryAllAllocationsResponse>;
                    userSummary(request: _177.QueryUserSummaryRequest): Promise<_177.QueryUserSummaryResponse>;
                };
                autopilot: {
                    params(request?: _181.QueryParamsRequest): Promise<_181.QueryParamsResponse>;
                };
                claim: {
                    distributorAccountBalance(request: _185.QueryDistributorAccountBalanceRequest): Promise<_185.QueryDistributorAccountBalanceResponse>;
                    params(request?: _185.QueryParamsRequest): Promise<_185.QueryParamsResponse>;
                    claimRecord(request: _185.QueryClaimRecordRequest): Promise<_185.QueryClaimRecordResponse>;
                    claimableForAction(request: _185.QueryClaimableForActionRequest): Promise<_185.QueryClaimableForActionResponse>;
                    totalClaimable(request: _185.QueryTotalClaimableRequest): Promise<_185.QueryTotalClaimableResponse>;
                    userVestings(request: _185.QueryUserVestingsRequest): Promise<_185.QueryUserVestingsResponse>;
                    claimStatus(request: _185.QueryClaimStatusRequest): Promise<_185.QueryClaimStatusResponse>;
                    claimMetadata(request?: _185.QueryClaimMetadataRequest): Promise<_185.QueryClaimMetadataResponse>;
                };
                epochs: {
                    epochInfos(request?: _188.QueryEpochsInfoRequest): Promise<_188.QueryEpochsInfoResponse>;
                    currentEpoch(request: _188.QueryCurrentEpochRequest): Promise<_188.QueryCurrentEpochResponse>;
                    epochInfo(request: _188.QueryEpochInfoRequest): Promise<_188.QueryEpochInfoResponse>;
                };
                icacallbacks: {
                    params(request?: _193.QueryParamsRequest): Promise<_193.QueryParamsResponse>;
                    callbackData(request: _193.QueryGetCallbackDataRequest): Promise<_193.QueryGetCallbackDataResponse>;
                    callbackDataAll(request?: _193.QueryAllCallbackDataRequest): Promise<_193.QueryAllCallbackDataResponse>;
                };
                icaoracle: {
                    oracle(request: _199.QueryOracleRequest): Promise<_199.QueryOracleResponse>;
                    allOracles(request?: _199.QueryAllOraclesRequest): Promise<_199.QueryAllOraclesResponse>;
                    activeOracles(request: _199.QueryActiveOraclesRequest): Promise<_199.QueryActiveOraclesResponse>;
                    metrics(request: _199.QueryMetricsRequest): Promise<_199.QueryMetricsResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _206.QueryParamsRequest): Promise<_206.QueryParamsResponse>;
                        epochProvisions(request?: _206.QueryEpochProvisionsRequest): Promise<_206.QueryEpochProvisionsResponse>;
                    };
                };
                records: {
                    params(request?: _210.QueryParamsRequest): Promise<_210.QueryParamsResponse>;
                    userRedemptionRecord(request: _210.QueryGetUserRedemptionRecordRequest): Promise<_210.QueryGetUserRedemptionRecordResponse>;
                    userRedemptionRecordAll(request?: _210.QueryAllUserRedemptionRecordRequest): Promise<_210.QueryAllUserRedemptionRecordResponse>;
                    userRedemptionRecordForUser(request: _210.QueryAllUserRedemptionRecordForUserRequest): Promise<_210.QueryAllUserRedemptionRecordForUserResponse>;
                    epochUnbondingRecord(request: _210.QueryGetEpochUnbondingRecordRequest): Promise<_210.QueryGetEpochUnbondingRecordResponse>;
                    epochUnbondingRecordAll(request?: _210.QueryAllEpochUnbondingRecordRequest): Promise<_210.QueryAllEpochUnbondingRecordResponse>;
                    depositRecord(request: _210.QueryGetDepositRecordRequest): Promise<_210.QueryGetDepositRecordResponse>;
                    depositRecordAll(request?: _210.QueryAllDepositRecordRequest): Promise<_210.QueryAllDepositRecordResponse>;
                    depositRecordByHost(request: _210.QueryDepositRecordByHostRequest): Promise<_210.QueryDepositRecordByHostResponse>;
                    lSMDeposit(request: _210.QueryLSMDepositRequest): Promise<_210.QueryLSMDepositResponse>;
                    lSMDeposits(request: _210.QueryLSMDepositsRequest): Promise<_210.QueryLSMDepositsResponse>;
                };
                stakedym: {
                    hostZone(request?: _213.QueryHostZoneRequest): Promise<_213.QueryHostZoneResponse>;
                    delegationRecords(request: _213.QueryDelegationRecordsRequest): Promise<_213.QueryDelegationRecordsResponse>;
                    unbondingRecords(request: _213.QueryUnbondingRecordsRequest): Promise<_213.QueryUnbondingRecordsResponse>;
                    redemptionRecord(request: _213.QueryRedemptionRecordRequest): Promise<_213.QueryRedemptionRecordResponse>;
                    redemptionRecords(request: _213.QueryRedemptionRecordsRequest): Promise<_213.QueryRedemptionRecordsResponse>;
                    slashRecords(request?: _213.QuerySlashRecordsRequest): Promise<_213.QuerySlashRecordsResponse>;
                };
                stakeibc: {
                    params(request?: _225.QueryParamsRequest): Promise<_225.QueryParamsResponse>;
                    validators(request: _225.QueryGetValidatorsRequest): Promise<_225.QueryGetValidatorsResponse>;
                    hostZone(request: _225.QueryGetHostZoneRequest): Promise<_225.QueryGetHostZoneResponse>;
                    hostZoneAll(request?: _225.QueryAllHostZoneRequest): Promise<_225.QueryAllHostZoneResponse>;
                    moduleAddress(request: _225.QueryModuleAddressRequest): Promise<_225.QueryModuleAddressResponse>;
                    interchainAccountFromAddress(request: _225.QueryInterchainAccountFromAddressRequest): Promise<_225.QueryInterchainAccountFromAddressResponse>;
                    epochTracker(request: _225.QueryGetEpochTrackerRequest): Promise<_225.QueryGetEpochTrackerResponse>;
                    epochTrackerAll(request?: _225.QueryAllEpochTrackerRequest): Promise<_225.QueryAllEpochTrackerResponse>;
                    nextPacketSequence(request: _225.QueryGetNextPacketSequenceRequest): Promise<_225.QueryGetNextPacketSequenceResponse>;
                    addressUnbondings(request: _225.QueryAddressUnbondings): Promise<_225.QueryAddressUnbondingsResponse>;
                    allTradeRoutes(request?: _225.QueryAllTradeRoutes): Promise<_225.QueryAllTradeRoutesResponse>;
                };
                staketia: {
                    hostZone(request?: _230.QueryHostZoneRequest): Promise<_230.QueryHostZoneResponse>;
                    delegationRecords(request: _230.QueryDelegationRecordsRequest): Promise<_230.QueryDelegationRecordsResponse>;
                    unbondingRecords(request: _230.QueryUnbondingRecordsRequest): Promise<_230.QueryUnbondingRecordsResponse>;
                    redemptionRecord(request: _230.QueryRedemptionRecordRequest): Promise<_230.QueryRedemptionRecordResponse>;
                    redemptionRecords(request: _230.QueryRedemptionRecordsRequest): Promise<_230.QueryRedemptionRecordsResponse>;
                    slashRecords(request?: _230.QuerySlashRecordsRequest): Promise<_230.QuerySlashRecordsResponse>;
                };
            };
        }>;
    };
}
