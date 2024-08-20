import * as _176 from "./airdrop/airdrop";
import * as _177 from "./airdrop/genesis";
import * as _178 from "./airdrop/query";
import * as _179 from "./airdrop/tx";
import * as _180 from "./autopilot/genesis";
import * as _181 from "./autopilot/params";
import * as _182 from "./autopilot/query";
import * as _183 from "./claim/claim";
import * as _184 from "./claim/genesis";
import * as _185 from "./claim/params";
import * as _186 from "./claim/query";
import * as _187 from "./claim/tx";
import * as _188 from "./epochs/genesis";
import * as _189 from "./epochs/query";
import * as _190 from "./icacallbacks/callback_data";
import * as _191 from "./icacallbacks/genesis";
import * as _192 from "./icacallbacks/packet";
import * as _193 from "./icacallbacks/params";
import * as _194 from "./icacallbacks/query";
import * as _196 from "./icaoracle/callbacks";
import * as _197 from "./icaoracle/contract";
import * as _198 from "./icaoracle/genesis";
import * as _199 from "./icaoracle/icaoracle";
import * as _200 from "./icaoracle/query";
import * as _201 from "./icaoracle/tx";
import * as _202 from "./interchainquery/v1/genesis";
import * as _203 from "./interchainquery/v1/messages";
import * as _204 from "./interchainquery/v1/query";
import * as _205 from "./mint/v1beta1/genesis";
import * as _206 from "./mint/v1beta1/mint";
import * as _207 from "./mint/v1beta1/query";
import * as _208 from "./records/callbacks";
import * as _209 from "./records/genesis";
import * as _210 from "./records/params";
import * as _211 from "./records/query";
import * as _212 from "./records/records";
import * as _213 from "./stakedym/genesis";
import * as _214 from "./stakedym/query";
import * as _215 from "./stakedym/stakedym";
import * as _216 from "./stakedym/tx";
import * as _217 from "./stakeibc/address_unbonding";
import * as _218 from "./stakeibc/callbacks";
import * as _219 from "./stakeibc/epoch_tracker";
import * as _220 from "./stakeibc/genesis";
import * as _221 from "./stakeibc/gov";
import * as _222 from "./stakeibc/host_zone";
import * as _223 from "./stakeibc/ica_account";
import * as _224 from "./stakeibc/packet";
import * as _225 from "./stakeibc/params";
import * as _226 from "./stakeibc/query";
import * as _227 from "./stakeibc/trade_route";
import * as _228 from "./stakeibc/tx";
import * as _229 from "./stakeibc/validator";
import * as _230 from "./staketia/genesis";
import * as _231 from "./staketia/query";
import * as _232 from "./staketia/staketia";
import * as _233 from "./staketia/tx";
import * as _235 from "./vesting/vesting";
import * as _359 from "./airdrop/query.rpc.Query";
import * as _360 from "./autopilot/query.rpc.Query";
import * as _361 from "./claim/query.rpc.Query";
import * as _362 from "./epochs/query.rpc.Query";
import * as _363 from "./icacallbacks/query.rpc.Query";
import * as _364 from "./icaoracle/query.rpc.Query";
import * as _365 from "./mint/v1beta1/query.rpc.Query";
import * as _366 from "./records/query.rpc.Query";
import * as _367 from "./stakedym/query.rpc.Query";
import * as _368 from "./stakeibc/query.rpc.Query";
import * as _369 from "./staketia/query.rpc.Query";
import * as _370 from "./airdrop/tx.rpc.msg";
import * as _371 from "./claim/tx.rpc.msg";
import * as _372 from "./icaoracle/tx.rpc.msg";
import * as _373 from "./interchainquery/v1/messages.rpc.msg";
import * as _374 from "./stakedym/tx.rpc.msg";
import * as _375 from "./stakeibc/tx.rpc.msg";
import * as _376 from "./staketia/tx.rpc.msg";
export declare namespace stride {
    const airdrop: {
        MsgClientImpl: typeof _370.MsgClientImpl;
        QueryClientImpl: typeof _359.QueryClientImpl;
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
    const autopilot: {
        QueryClientImpl: typeof _360.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _182.QueryParamsRequest): Promise<_182.QueryParamsResponse>;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _182.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.QueryParamsRequest;
            fromPartial(_: Partial<_182.QueryParamsRequest>): _182.QueryParamsRequest;
            fromAmino(_: _182.QueryParamsRequestAmino): _182.QueryParamsRequest;
            toAmino(_: _182.QueryParamsRequest): _182.QueryParamsRequestAmino;
            fromAminoMsg(object: _182.QueryParamsRequestAminoMsg): _182.QueryParamsRequest;
            fromProtoMsg(message: _182.QueryParamsRequestProtoMsg): _182.QueryParamsRequest;
            toProto(message: _182.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _182.QueryParamsRequest): _182.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _182.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.QueryParamsResponse;
            fromPartial(object: Partial<_182.QueryParamsResponse>): _182.QueryParamsResponse;
            fromAmino(object: _182.QueryParamsResponseAmino): _182.QueryParamsResponse;
            toAmino(message: _182.QueryParamsResponse): _182.QueryParamsResponseAmino;
            fromAminoMsg(object: _182.QueryParamsResponseAminoMsg): _182.QueryParamsResponse;
            fromProtoMsg(message: _182.QueryParamsResponseProtoMsg): _182.QueryParamsResponse;
            toProto(message: _182.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _182.QueryParamsResponse): _182.QueryParamsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _181.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.Params;
            fromPartial(object: Partial<_181.Params>): _181.Params;
            fromAmino(object: _181.ParamsAmino): _181.Params;
            toAmino(message: _181.Params): _181.ParamsAmino;
            fromAminoMsg(object: _181.ParamsAminoMsg): _181.Params;
            fromProtoMsg(message: _181.ParamsProtoMsg): _181.Params;
            toProto(message: _181.Params): Uint8Array;
            toProtoMsg(message: _181.Params): _181.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _180.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.GenesisState;
            fromPartial(object: Partial<_180.GenesisState>): _180.GenesisState;
            fromAmino(object: _180.GenesisStateAmino): _180.GenesisState;
            toAmino(message: _180.GenesisState): _180.GenesisStateAmino;
            fromAminoMsg(object: _180.GenesisStateAminoMsg): _180.GenesisState;
            fromProtoMsg(message: _180.GenesisStateProtoMsg): _180.GenesisState;
            toProto(message: _180.GenesisState): Uint8Array;
            toProtoMsg(message: _180.GenesisState): _180.GenesisStateProtoMsg;
        };
    };
    const claim: {
        MsgClientImpl: typeof _371.MsgClientImpl;
        QueryClientImpl: typeof _361.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            distributorAccountBalance(request: _186.QueryDistributorAccountBalanceRequest): Promise<_186.QueryDistributorAccountBalanceResponse>;
            params(request?: _186.QueryParamsRequest): Promise<_186.QueryParamsResponse>;
            claimRecord(request: _186.QueryClaimRecordRequest): Promise<_186.QueryClaimRecordResponse>;
            claimableForAction(request: _186.QueryClaimableForActionRequest): Promise<_186.QueryClaimableForActionResponse>;
            totalClaimable(request: _186.QueryTotalClaimableRequest): Promise<_186.QueryTotalClaimableResponse>;
            userVestings(request: _186.QueryUserVestingsRequest): Promise<_186.QueryUserVestingsResponse>;
            claimStatus(request: _186.QueryClaimStatusRequest): Promise<_186.QueryClaimStatusResponse>;
            claimMetadata(request?: _186.QueryClaimMetadataRequest): Promise<_186.QueryClaimMetadataResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                setAirdropAllocations(value: _187.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimFreeAmount(value: _187.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAirdrop(value: _187.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteAirdrop(value: _187.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                setAirdropAllocations(value: _187.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _187.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _187.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _187.MsgClaimFreeAmount;
                };
                createAirdrop(value: _187.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _187.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _187.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _187.MsgDeleteAirdrop;
                };
            };
            fromPartial: {
                setAirdropAllocations(value: _187.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _187.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _187.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _187.MsgClaimFreeAmount;
                };
                createAirdrop(value: _187.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _187.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _187.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _187.MsgDeleteAirdrop;
                };
            };
        };
        AminoConverter: {
            "/stride.claim.MsgSetAirdropAllocations": {
                aminoType: string;
                toAmino: (message: _187.MsgSetAirdropAllocations) => _187.MsgSetAirdropAllocationsAmino;
                fromAmino: (object: _187.MsgSetAirdropAllocationsAmino) => _187.MsgSetAirdropAllocations;
            };
            "/stride.claim.MsgClaimFreeAmount": {
                aminoType: string;
                toAmino: (message: _187.MsgClaimFreeAmount) => _187.MsgClaimFreeAmountAmino;
                fromAmino: (object: _187.MsgClaimFreeAmountAmino) => _187.MsgClaimFreeAmount;
            };
            "/stride.claim.MsgCreateAirdrop": {
                aminoType: string;
                toAmino: (message: _187.MsgCreateAirdrop) => _187.MsgCreateAirdropAmino;
                fromAmino: (object: _187.MsgCreateAirdropAmino) => _187.MsgCreateAirdrop;
            };
            "/stride.claim.MsgDeleteAirdrop": {
                aminoType: string;
                toAmino: (message: _187.MsgDeleteAirdrop) => _187.MsgDeleteAirdropAmino;
                fromAmino: (object: _187.MsgDeleteAirdropAmino) => _187.MsgDeleteAirdrop;
            };
        };
        MsgSetAirdropAllocations: {
            typeUrl: string;
            encode(message: _187.MsgSetAirdropAllocations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.MsgSetAirdropAllocations;
            fromPartial(object: Partial<_187.MsgSetAirdropAllocations>): _187.MsgSetAirdropAllocations;
            fromAmino(object: _187.MsgSetAirdropAllocationsAmino): _187.MsgSetAirdropAllocations;
            toAmino(message: _187.MsgSetAirdropAllocations): _187.MsgSetAirdropAllocationsAmino;
            fromAminoMsg(object: _187.MsgSetAirdropAllocationsAminoMsg): _187.MsgSetAirdropAllocations;
            fromProtoMsg(message: _187.MsgSetAirdropAllocationsProtoMsg): _187.MsgSetAirdropAllocations;
            toProto(message: _187.MsgSetAirdropAllocations): Uint8Array;
            toProtoMsg(message: _187.MsgSetAirdropAllocations): _187.MsgSetAirdropAllocationsProtoMsg;
        };
        MsgSetAirdropAllocationsResponse: {
            typeUrl: string;
            encode(_: _187.MsgSetAirdropAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.MsgSetAirdropAllocationsResponse;
            fromPartial(_: Partial<_187.MsgSetAirdropAllocationsResponse>): _187.MsgSetAirdropAllocationsResponse;
            fromAmino(_: _187.MsgSetAirdropAllocationsResponseAmino): _187.MsgSetAirdropAllocationsResponse;
            toAmino(_: _187.MsgSetAirdropAllocationsResponse): _187.MsgSetAirdropAllocationsResponseAmino;
            fromAminoMsg(object: _187.MsgSetAirdropAllocationsResponseAminoMsg): _187.MsgSetAirdropAllocationsResponse;
            fromProtoMsg(message: _187.MsgSetAirdropAllocationsResponseProtoMsg): _187.MsgSetAirdropAllocationsResponse;
            toProto(message: _187.MsgSetAirdropAllocationsResponse): Uint8Array;
            toProtoMsg(message: _187.MsgSetAirdropAllocationsResponse): _187.MsgSetAirdropAllocationsResponseProtoMsg;
        };
        MsgClaimFreeAmount: {
            typeUrl: string;
            encode(message: _187.MsgClaimFreeAmount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.MsgClaimFreeAmount;
            fromPartial(object: Partial<_187.MsgClaimFreeAmount>): _187.MsgClaimFreeAmount;
            fromAmino(object: _187.MsgClaimFreeAmountAmino): _187.MsgClaimFreeAmount;
            toAmino(message: _187.MsgClaimFreeAmount): _187.MsgClaimFreeAmountAmino;
            fromAminoMsg(object: _187.MsgClaimFreeAmountAminoMsg): _187.MsgClaimFreeAmount;
            toAminoMsg(message: _187.MsgClaimFreeAmount): _187.MsgClaimFreeAmountAminoMsg;
            fromProtoMsg(message: _187.MsgClaimFreeAmountProtoMsg): _187.MsgClaimFreeAmount;
            toProto(message: _187.MsgClaimFreeAmount): Uint8Array;
            toProtoMsg(message: _187.MsgClaimFreeAmount): _187.MsgClaimFreeAmountProtoMsg;
        };
        MsgClaimFreeAmountResponse: {
            typeUrl: string;
            encode(message: _187.MsgClaimFreeAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.MsgClaimFreeAmountResponse;
            fromPartial(object: Partial<_187.MsgClaimFreeAmountResponse>): _187.MsgClaimFreeAmountResponse;
            fromAmino(object: _187.MsgClaimFreeAmountResponseAmino): _187.MsgClaimFreeAmountResponse;
            toAmino(message: _187.MsgClaimFreeAmountResponse): _187.MsgClaimFreeAmountResponseAmino;
            fromAminoMsg(object: _187.MsgClaimFreeAmountResponseAminoMsg): _187.MsgClaimFreeAmountResponse;
            fromProtoMsg(message: _187.MsgClaimFreeAmountResponseProtoMsg): _187.MsgClaimFreeAmountResponse;
            toProto(message: _187.MsgClaimFreeAmountResponse): Uint8Array;
            toProtoMsg(message: _187.MsgClaimFreeAmountResponse): _187.MsgClaimFreeAmountResponseProtoMsg;
        };
        MsgCreateAirdrop: {
            typeUrl: string;
            encode(message: _187.MsgCreateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.MsgCreateAirdrop;
            fromPartial(object: Partial<_187.MsgCreateAirdrop>): _187.MsgCreateAirdrop;
            fromAmino(object: _187.MsgCreateAirdropAmino): _187.MsgCreateAirdrop;
            toAmino(message: _187.MsgCreateAirdrop): _187.MsgCreateAirdropAmino;
            fromAminoMsg(object: _187.MsgCreateAirdropAminoMsg): _187.MsgCreateAirdrop;
            fromProtoMsg(message: _187.MsgCreateAirdropProtoMsg): _187.MsgCreateAirdrop;
            toProto(message: _187.MsgCreateAirdrop): Uint8Array;
            toProtoMsg(message: _187.MsgCreateAirdrop): _187.MsgCreateAirdropProtoMsg;
        };
        MsgCreateAirdropResponse: {
            typeUrl: string;
            encode(_: _187.MsgCreateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.MsgCreateAirdropResponse;
            fromPartial(_: Partial<_187.MsgCreateAirdropResponse>): _187.MsgCreateAirdropResponse;
            fromAmino(_: _187.MsgCreateAirdropResponseAmino): _187.MsgCreateAirdropResponse;
            toAmino(_: _187.MsgCreateAirdropResponse): _187.MsgCreateAirdropResponseAmino;
            fromAminoMsg(object: _187.MsgCreateAirdropResponseAminoMsg): _187.MsgCreateAirdropResponse;
            fromProtoMsg(message: _187.MsgCreateAirdropResponseProtoMsg): _187.MsgCreateAirdropResponse;
            toProto(message: _187.MsgCreateAirdropResponse): Uint8Array;
            toProtoMsg(message: _187.MsgCreateAirdropResponse): _187.MsgCreateAirdropResponseProtoMsg;
        };
        MsgDeleteAirdrop: {
            typeUrl: string;
            encode(message: _187.MsgDeleteAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.MsgDeleteAirdrop;
            fromPartial(object: Partial<_187.MsgDeleteAirdrop>): _187.MsgDeleteAirdrop;
            fromAmino(object: _187.MsgDeleteAirdropAmino): _187.MsgDeleteAirdrop;
            toAmino(message: _187.MsgDeleteAirdrop): _187.MsgDeleteAirdropAmino;
            fromAminoMsg(object: _187.MsgDeleteAirdropAminoMsg): _187.MsgDeleteAirdrop;
            fromProtoMsg(message: _187.MsgDeleteAirdropProtoMsg): _187.MsgDeleteAirdrop;
            toProto(message: _187.MsgDeleteAirdrop): Uint8Array;
            toProtoMsg(message: _187.MsgDeleteAirdrop): _187.MsgDeleteAirdropProtoMsg;
        };
        MsgDeleteAirdropResponse: {
            typeUrl: string;
            encode(_: _187.MsgDeleteAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.MsgDeleteAirdropResponse;
            fromPartial(_: Partial<_187.MsgDeleteAirdropResponse>): _187.MsgDeleteAirdropResponse;
            fromAmino(_: _187.MsgDeleteAirdropResponseAmino): _187.MsgDeleteAirdropResponse;
            toAmino(_: _187.MsgDeleteAirdropResponse): _187.MsgDeleteAirdropResponseAmino;
            fromAminoMsg(object: _187.MsgDeleteAirdropResponseAminoMsg): _187.MsgDeleteAirdropResponse;
            fromProtoMsg(message: _187.MsgDeleteAirdropResponseProtoMsg): _187.MsgDeleteAirdropResponse;
            toProto(message: _187.MsgDeleteAirdropResponse): Uint8Array;
            toProtoMsg(message: _187.MsgDeleteAirdropResponse): _187.MsgDeleteAirdropResponseProtoMsg;
        };
        ClaimStatus: {
            typeUrl: string;
            encode(message: _186.ClaimStatus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.ClaimStatus;
            fromPartial(object: Partial<_186.ClaimStatus>): _186.ClaimStatus;
            fromAmino(object: _186.ClaimStatusAmino): _186.ClaimStatus;
            toAmino(message: _186.ClaimStatus): _186.ClaimStatusAmino;
            fromAminoMsg(object: _186.ClaimStatusAminoMsg): _186.ClaimStatus;
            fromProtoMsg(message: _186.ClaimStatusProtoMsg): _186.ClaimStatus;
            toProto(message: _186.ClaimStatus): Uint8Array;
            toProtoMsg(message: _186.ClaimStatus): _186.ClaimStatusProtoMsg;
        };
        QueryClaimStatusRequest: {
            typeUrl: string;
            encode(message: _186.QueryClaimStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryClaimStatusRequest;
            fromPartial(object: Partial<_186.QueryClaimStatusRequest>): _186.QueryClaimStatusRequest;
            fromAmino(object: _186.QueryClaimStatusRequestAmino): _186.QueryClaimStatusRequest;
            toAmino(message: _186.QueryClaimStatusRequest): _186.QueryClaimStatusRequestAmino;
            fromAminoMsg(object: _186.QueryClaimStatusRequestAminoMsg): _186.QueryClaimStatusRequest;
            fromProtoMsg(message: _186.QueryClaimStatusRequestProtoMsg): _186.QueryClaimStatusRequest;
            toProto(message: _186.QueryClaimStatusRequest): Uint8Array;
            toProtoMsg(message: _186.QueryClaimStatusRequest): _186.QueryClaimStatusRequestProtoMsg;
        };
        QueryClaimStatusResponse: {
            typeUrl: string;
            encode(message: _186.QueryClaimStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryClaimStatusResponse;
            fromPartial(object: Partial<_186.QueryClaimStatusResponse>): _186.QueryClaimStatusResponse;
            fromAmino(object: _186.QueryClaimStatusResponseAmino): _186.QueryClaimStatusResponse;
            toAmino(message: _186.QueryClaimStatusResponse): _186.QueryClaimStatusResponseAmino;
            fromAminoMsg(object: _186.QueryClaimStatusResponseAminoMsg): _186.QueryClaimStatusResponse;
            fromProtoMsg(message: _186.QueryClaimStatusResponseProtoMsg): _186.QueryClaimStatusResponse;
            toProto(message: _186.QueryClaimStatusResponse): Uint8Array;
            toProtoMsg(message: _186.QueryClaimStatusResponse): _186.QueryClaimStatusResponseProtoMsg;
        };
        ClaimMetadata: {
            typeUrl: string;
            encode(message: _186.ClaimMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.ClaimMetadata;
            fromPartial(object: Partial<_186.ClaimMetadata>): _186.ClaimMetadata;
            fromAmino(object: _186.ClaimMetadataAmino): _186.ClaimMetadata;
            toAmino(message: _186.ClaimMetadata): _186.ClaimMetadataAmino;
            fromAminoMsg(object: _186.ClaimMetadataAminoMsg): _186.ClaimMetadata;
            fromProtoMsg(message: _186.ClaimMetadataProtoMsg): _186.ClaimMetadata;
            toProto(message: _186.ClaimMetadata): Uint8Array;
            toProtoMsg(message: _186.ClaimMetadata): _186.ClaimMetadataProtoMsg;
        };
        QueryClaimMetadataRequest: {
            typeUrl: string;
            encode(_: _186.QueryClaimMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryClaimMetadataRequest;
            fromPartial(_: Partial<_186.QueryClaimMetadataRequest>): _186.QueryClaimMetadataRequest;
            fromAmino(_: _186.QueryClaimMetadataRequestAmino): _186.QueryClaimMetadataRequest;
            toAmino(_: _186.QueryClaimMetadataRequest): _186.QueryClaimMetadataRequestAmino;
            fromAminoMsg(object: _186.QueryClaimMetadataRequestAminoMsg): _186.QueryClaimMetadataRequest;
            fromProtoMsg(message: _186.QueryClaimMetadataRequestProtoMsg): _186.QueryClaimMetadataRequest;
            toProto(message: _186.QueryClaimMetadataRequest): Uint8Array;
            toProtoMsg(message: _186.QueryClaimMetadataRequest): _186.QueryClaimMetadataRequestProtoMsg;
        };
        QueryClaimMetadataResponse: {
            typeUrl: string;
            encode(message: _186.QueryClaimMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryClaimMetadataResponse;
            fromPartial(object: Partial<_186.QueryClaimMetadataResponse>): _186.QueryClaimMetadataResponse;
            fromAmino(object: _186.QueryClaimMetadataResponseAmino): _186.QueryClaimMetadataResponse;
            toAmino(message: _186.QueryClaimMetadataResponse): _186.QueryClaimMetadataResponseAmino;
            fromAminoMsg(object: _186.QueryClaimMetadataResponseAminoMsg): _186.QueryClaimMetadataResponse;
            fromProtoMsg(message: _186.QueryClaimMetadataResponseProtoMsg): _186.QueryClaimMetadataResponse;
            toProto(message: _186.QueryClaimMetadataResponse): Uint8Array;
            toProtoMsg(message: _186.QueryClaimMetadataResponse): _186.QueryClaimMetadataResponseProtoMsg;
        };
        QueryDistributorAccountBalanceRequest: {
            typeUrl: string;
            encode(message: _186.QueryDistributorAccountBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryDistributorAccountBalanceRequest;
            fromPartial(object: Partial<_186.QueryDistributorAccountBalanceRequest>): _186.QueryDistributorAccountBalanceRequest;
            fromAmino(object: _186.QueryDistributorAccountBalanceRequestAmino): _186.QueryDistributorAccountBalanceRequest;
            toAmino(message: _186.QueryDistributorAccountBalanceRequest): _186.QueryDistributorAccountBalanceRequestAmino;
            fromAminoMsg(object: _186.QueryDistributorAccountBalanceRequestAminoMsg): _186.QueryDistributorAccountBalanceRequest;
            fromProtoMsg(message: _186.QueryDistributorAccountBalanceRequestProtoMsg): _186.QueryDistributorAccountBalanceRequest;
            toProto(message: _186.QueryDistributorAccountBalanceRequest): Uint8Array;
            toProtoMsg(message: _186.QueryDistributorAccountBalanceRequest): _186.QueryDistributorAccountBalanceRequestProtoMsg;
        };
        QueryDistributorAccountBalanceResponse: {
            typeUrl: string;
            encode(message: _186.QueryDistributorAccountBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryDistributorAccountBalanceResponse;
            fromPartial(object: Partial<_186.QueryDistributorAccountBalanceResponse>): _186.QueryDistributorAccountBalanceResponse;
            fromAmino(object: _186.QueryDistributorAccountBalanceResponseAmino): _186.QueryDistributorAccountBalanceResponse;
            toAmino(message: _186.QueryDistributorAccountBalanceResponse): _186.QueryDistributorAccountBalanceResponseAmino;
            fromAminoMsg(object: _186.QueryDistributorAccountBalanceResponseAminoMsg): _186.QueryDistributorAccountBalanceResponse;
            fromProtoMsg(message: _186.QueryDistributorAccountBalanceResponseProtoMsg): _186.QueryDistributorAccountBalanceResponse;
            toProto(message: _186.QueryDistributorAccountBalanceResponse): Uint8Array;
            toProtoMsg(message: _186.QueryDistributorAccountBalanceResponse): _186.QueryDistributorAccountBalanceResponseProtoMsg;
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
        QueryClaimRecordRequest: {
            typeUrl: string;
            encode(message: _186.QueryClaimRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryClaimRecordRequest;
            fromPartial(object: Partial<_186.QueryClaimRecordRequest>): _186.QueryClaimRecordRequest;
            fromAmino(object: _186.QueryClaimRecordRequestAmino): _186.QueryClaimRecordRequest;
            toAmino(message: _186.QueryClaimRecordRequest): _186.QueryClaimRecordRequestAmino;
            fromAminoMsg(object: _186.QueryClaimRecordRequestAminoMsg): _186.QueryClaimRecordRequest;
            fromProtoMsg(message: _186.QueryClaimRecordRequestProtoMsg): _186.QueryClaimRecordRequest;
            toProto(message: _186.QueryClaimRecordRequest): Uint8Array;
            toProtoMsg(message: _186.QueryClaimRecordRequest): _186.QueryClaimRecordRequestProtoMsg;
        };
        QueryClaimRecordResponse: {
            typeUrl: string;
            encode(message: _186.QueryClaimRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryClaimRecordResponse;
            fromPartial(object: Partial<_186.QueryClaimRecordResponse>): _186.QueryClaimRecordResponse;
            fromAmino(object: _186.QueryClaimRecordResponseAmino): _186.QueryClaimRecordResponse;
            toAmino(message: _186.QueryClaimRecordResponse): _186.QueryClaimRecordResponseAmino;
            fromAminoMsg(object: _186.QueryClaimRecordResponseAminoMsg): _186.QueryClaimRecordResponse;
            fromProtoMsg(message: _186.QueryClaimRecordResponseProtoMsg): _186.QueryClaimRecordResponse;
            toProto(message: _186.QueryClaimRecordResponse): Uint8Array;
            toProtoMsg(message: _186.QueryClaimRecordResponse): _186.QueryClaimRecordResponseProtoMsg;
        };
        QueryClaimableForActionRequest: {
            typeUrl: string;
            encode(message: _186.QueryClaimableForActionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryClaimableForActionRequest;
            fromPartial(object: Partial<_186.QueryClaimableForActionRequest>): _186.QueryClaimableForActionRequest;
            fromAmino(object: _186.QueryClaimableForActionRequestAmino): _186.QueryClaimableForActionRequest;
            toAmino(message: _186.QueryClaimableForActionRequest): _186.QueryClaimableForActionRequestAmino;
            fromAminoMsg(object: _186.QueryClaimableForActionRequestAminoMsg): _186.QueryClaimableForActionRequest;
            fromProtoMsg(message: _186.QueryClaimableForActionRequestProtoMsg): _186.QueryClaimableForActionRequest;
            toProto(message: _186.QueryClaimableForActionRequest): Uint8Array;
            toProtoMsg(message: _186.QueryClaimableForActionRequest): _186.QueryClaimableForActionRequestProtoMsg;
        };
        QueryClaimableForActionResponse: {
            typeUrl: string;
            encode(message: _186.QueryClaimableForActionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryClaimableForActionResponse;
            fromPartial(object: Partial<_186.QueryClaimableForActionResponse>): _186.QueryClaimableForActionResponse;
            fromAmino(object: _186.QueryClaimableForActionResponseAmino): _186.QueryClaimableForActionResponse;
            toAmino(message: _186.QueryClaimableForActionResponse): _186.QueryClaimableForActionResponseAmino;
            fromAminoMsg(object: _186.QueryClaimableForActionResponseAminoMsg): _186.QueryClaimableForActionResponse;
            fromProtoMsg(message: _186.QueryClaimableForActionResponseProtoMsg): _186.QueryClaimableForActionResponse;
            toProto(message: _186.QueryClaimableForActionResponse): Uint8Array;
            toProtoMsg(message: _186.QueryClaimableForActionResponse): _186.QueryClaimableForActionResponseProtoMsg;
        };
        QueryTotalClaimableRequest: {
            typeUrl: string;
            encode(message: _186.QueryTotalClaimableRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryTotalClaimableRequest;
            fromPartial(object: Partial<_186.QueryTotalClaimableRequest>): _186.QueryTotalClaimableRequest;
            fromAmino(object: _186.QueryTotalClaimableRequestAmino): _186.QueryTotalClaimableRequest;
            toAmino(message: _186.QueryTotalClaimableRequest): _186.QueryTotalClaimableRequestAmino;
            fromAminoMsg(object: _186.QueryTotalClaimableRequestAminoMsg): _186.QueryTotalClaimableRequest;
            fromProtoMsg(message: _186.QueryTotalClaimableRequestProtoMsg): _186.QueryTotalClaimableRequest;
            toProto(message: _186.QueryTotalClaimableRequest): Uint8Array;
            toProtoMsg(message: _186.QueryTotalClaimableRequest): _186.QueryTotalClaimableRequestProtoMsg;
        };
        QueryTotalClaimableResponse: {
            typeUrl: string;
            encode(message: _186.QueryTotalClaimableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryTotalClaimableResponse;
            fromPartial(object: Partial<_186.QueryTotalClaimableResponse>): _186.QueryTotalClaimableResponse;
            fromAmino(object: _186.QueryTotalClaimableResponseAmino): _186.QueryTotalClaimableResponse;
            toAmino(message: _186.QueryTotalClaimableResponse): _186.QueryTotalClaimableResponseAmino;
            fromAminoMsg(object: _186.QueryTotalClaimableResponseAminoMsg): _186.QueryTotalClaimableResponse;
            fromProtoMsg(message: _186.QueryTotalClaimableResponseProtoMsg): _186.QueryTotalClaimableResponse;
            toProto(message: _186.QueryTotalClaimableResponse): Uint8Array;
            toProtoMsg(message: _186.QueryTotalClaimableResponse): _186.QueryTotalClaimableResponseProtoMsg;
        };
        QueryUserVestingsRequest: {
            typeUrl: string;
            encode(message: _186.QueryUserVestingsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryUserVestingsRequest;
            fromPartial(object: Partial<_186.QueryUserVestingsRequest>): _186.QueryUserVestingsRequest;
            fromAmino(object: _186.QueryUserVestingsRequestAmino): _186.QueryUserVestingsRequest;
            toAmino(message: _186.QueryUserVestingsRequest): _186.QueryUserVestingsRequestAmino;
            fromAminoMsg(object: _186.QueryUserVestingsRequestAminoMsg): _186.QueryUserVestingsRequest;
            fromProtoMsg(message: _186.QueryUserVestingsRequestProtoMsg): _186.QueryUserVestingsRequest;
            toProto(message: _186.QueryUserVestingsRequest): Uint8Array;
            toProtoMsg(message: _186.QueryUserVestingsRequest): _186.QueryUserVestingsRequestProtoMsg;
        };
        QueryUserVestingsResponse: {
            typeUrl: string;
            encode(message: _186.QueryUserVestingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryUserVestingsResponse;
            fromPartial(object: Partial<_186.QueryUserVestingsResponse>): _186.QueryUserVestingsResponse;
            fromAmino(object: _186.QueryUserVestingsResponseAmino): _186.QueryUserVestingsResponse;
            toAmino(message: _186.QueryUserVestingsResponse): _186.QueryUserVestingsResponseAmino;
            fromAminoMsg(object: _186.QueryUserVestingsResponseAminoMsg): _186.QueryUserVestingsResponse;
            fromProtoMsg(message: _186.QueryUserVestingsResponseProtoMsg): _186.QueryUserVestingsResponse;
            toProto(message: _186.QueryUserVestingsResponse): Uint8Array;
            toProtoMsg(message: _186.QueryUserVestingsResponse): _186.QueryUserVestingsResponseProtoMsg;
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
        Airdrop: {
            typeUrl: string;
            encode(message: _185.Airdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.Airdrop;
            fromPartial(object: Partial<_185.Airdrop>): _185.Airdrop;
            fromAmino(object: _185.AirdropAmino): _185.Airdrop;
            toAmino(message: _185.Airdrop): _185.AirdropAmino;
            fromAminoMsg(object: _185.AirdropAminoMsg): _185.Airdrop;
            fromProtoMsg(message: _185.AirdropProtoMsg): _185.Airdrop;
            toProto(message: _185.Airdrop): Uint8Array;
            toProtoMsg(message: _185.Airdrop): _185.AirdropProtoMsg;
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
        actionFromJSON(object: any): _183.Action;
        actionToJSON(object: _183.Action): string;
        Action: typeof _183.Action;
        ActionSDKType: typeof _183.Action;
        ActionAmino: typeof _183.Action;
        ClaimRecord: {
            typeUrl: string;
            encode(message: _183.ClaimRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.ClaimRecord;
            fromPartial(object: Partial<_183.ClaimRecord>): _183.ClaimRecord;
            fromAmino(object: _183.ClaimRecordAmino): _183.ClaimRecord;
            toAmino(message: _183.ClaimRecord): _183.ClaimRecordAmino;
            fromAminoMsg(object: _183.ClaimRecordAminoMsg): _183.ClaimRecord;
            fromProtoMsg(message: _183.ClaimRecordProtoMsg): _183.ClaimRecord;
            toProto(message: _183.ClaimRecord): Uint8Array;
            toProtoMsg(message: _183.ClaimRecord): _183.ClaimRecordProtoMsg;
        };
    };
    const epochs: {
        QueryClientImpl: typeof _362.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            epochInfos(request?: _189.QueryEpochsInfoRequest): Promise<_189.QueryEpochsInfoResponse>;
            currentEpoch(request: _189.QueryCurrentEpochRequest): Promise<_189.QueryCurrentEpochResponse>;
            epochInfo(request: _189.QueryEpochInfoRequest): Promise<_189.QueryEpochInfoResponse>;
        };
        QueryEpochsInfoRequest: {
            typeUrl: string;
            encode(message: _189.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.QueryEpochsInfoRequest;
            fromPartial(object: Partial<_189.QueryEpochsInfoRequest>): _189.QueryEpochsInfoRequest;
            fromAmino(object: _189.QueryEpochsInfoRequestAmino): _189.QueryEpochsInfoRequest;
            toAmino(message: _189.QueryEpochsInfoRequest): _189.QueryEpochsInfoRequestAmino;
            fromAminoMsg(object: _189.QueryEpochsInfoRequestAminoMsg): _189.QueryEpochsInfoRequest;
            fromProtoMsg(message: _189.QueryEpochsInfoRequestProtoMsg): _189.QueryEpochsInfoRequest;
            toProto(message: _189.QueryEpochsInfoRequest): Uint8Array;
            toProtoMsg(message: _189.QueryEpochsInfoRequest): _189.QueryEpochsInfoRequestProtoMsg;
        };
        QueryEpochsInfoResponse: {
            typeUrl: string;
            encode(message: _189.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.QueryEpochsInfoResponse;
            fromPartial(object: Partial<_189.QueryEpochsInfoResponse>): _189.QueryEpochsInfoResponse;
            fromAmino(object: _189.QueryEpochsInfoResponseAmino): _189.QueryEpochsInfoResponse;
            toAmino(message: _189.QueryEpochsInfoResponse): _189.QueryEpochsInfoResponseAmino;
            fromAminoMsg(object: _189.QueryEpochsInfoResponseAminoMsg): _189.QueryEpochsInfoResponse;
            fromProtoMsg(message: _189.QueryEpochsInfoResponseProtoMsg): _189.QueryEpochsInfoResponse;
            toProto(message: _189.QueryEpochsInfoResponse): Uint8Array;
            toProtoMsg(message: _189.QueryEpochsInfoResponse): _189.QueryEpochsInfoResponseProtoMsg;
        };
        QueryCurrentEpochRequest: {
            typeUrl: string;
            encode(message: _189.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.QueryCurrentEpochRequest;
            fromPartial(object: Partial<_189.QueryCurrentEpochRequest>): _189.QueryCurrentEpochRequest;
            fromAmino(object: _189.QueryCurrentEpochRequestAmino): _189.QueryCurrentEpochRequest;
            toAmino(message: _189.QueryCurrentEpochRequest): _189.QueryCurrentEpochRequestAmino;
            fromAminoMsg(object: _189.QueryCurrentEpochRequestAminoMsg): _189.QueryCurrentEpochRequest;
            fromProtoMsg(message: _189.QueryCurrentEpochRequestProtoMsg): _189.QueryCurrentEpochRequest;
            toProto(message: _189.QueryCurrentEpochRequest): Uint8Array;
            toProtoMsg(message: _189.QueryCurrentEpochRequest): _189.QueryCurrentEpochRequestProtoMsg;
        };
        QueryCurrentEpochResponse: {
            typeUrl: string;
            encode(message: _189.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.QueryCurrentEpochResponse;
            fromPartial(object: Partial<_189.QueryCurrentEpochResponse>): _189.QueryCurrentEpochResponse;
            fromAmino(object: _189.QueryCurrentEpochResponseAmino): _189.QueryCurrentEpochResponse;
            toAmino(message: _189.QueryCurrentEpochResponse): _189.QueryCurrentEpochResponseAmino;
            fromAminoMsg(object: _189.QueryCurrentEpochResponseAminoMsg): _189.QueryCurrentEpochResponse;
            fromProtoMsg(message: _189.QueryCurrentEpochResponseProtoMsg): _189.QueryCurrentEpochResponse;
            toProto(message: _189.QueryCurrentEpochResponse): Uint8Array;
            toProtoMsg(message: _189.QueryCurrentEpochResponse): _189.QueryCurrentEpochResponseProtoMsg;
        };
        QueryEpochInfoRequest: {
            typeUrl: string;
            encode(message: _189.QueryEpochInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.QueryEpochInfoRequest;
            fromPartial(object: Partial<_189.QueryEpochInfoRequest>): _189.QueryEpochInfoRequest;
            fromAmino(object: _189.QueryEpochInfoRequestAmino): _189.QueryEpochInfoRequest;
            toAmino(message: _189.QueryEpochInfoRequest): _189.QueryEpochInfoRequestAmino;
            fromAminoMsg(object: _189.QueryEpochInfoRequestAminoMsg): _189.QueryEpochInfoRequest;
            fromProtoMsg(message: _189.QueryEpochInfoRequestProtoMsg): _189.QueryEpochInfoRequest;
            toProto(message: _189.QueryEpochInfoRequest): Uint8Array;
            toProtoMsg(message: _189.QueryEpochInfoRequest): _189.QueryEpochInfoRequestProtoMsg;
        };
        QueryEpochInfoResponse: {
            typeUrl: string;
            encode(message: _189.QueryEpochInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.QueryEpochInfoResponse;
            fromPartial(object: Partial<_189.QueryEpochInfoResponse>): _189.QueryEpochInfoResponse;
            fromAmino(object: _189.QueryEpochInfoResponseAmino): _189.QueryEpochInfoResponse;
            toAmino(message: _189.QueryEpochInfoResponse): _189.QueryEpochInfoResponseAmino;
            fromAminoMsg(object: _189.QueryEpochInfoResponseAminoMsg): _189.QueryEpochInfoResponse;
            fromProtoMsg(message: _189.QueryEpochInfoResponseProtoMsg): _189.QueryEpochInfoResponse;
            toProto(message: _189.QueryEpochInfoResponse): Uint8Array;
            toProtoMsg(message: _189.QueryEpochInfoResponse): _189.QueryEpochInfoResponseProtoMsg;
        };
        EpochInfo: {
            typeUrl: string;
            encode(message: _188.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.EpochInfo;
            fromPartial(object: Partial<_188.EpochInfo>): _188.EpochInfo;
            fromAmino(object: _188.EpochInfoAmino): _188.EpochInfo;
            toAmino(message: _188.EpochInfo): _188.EpochInfoAmino;
            fromAminoMsg(object: _188.EpochInfoAminoMsg): _188.EpochInfo;
            fromProtoMsg(message: _188.EpochInfoProtoMsg): _188.EpochInfo;
            toProto(message: _188.EpochInfo): Uint8Array;
            toProtoMsg(message: _188.EpochInfo): _188.EpochInfoProtoMsg;
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
    };
    const icacallbacks: {
        QueryClientImpl: typeof _363.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _194.QueryParamsRequest): Promise<_194.QueryParamsResponse>;
            callbackData(request: _194.QueryGetCallbackDataRequest): Promise<_194.QueryGetCallbackDataResponse>;
            callbackDataAll(request?: _194.QueryAllCallbackDataRequest): Promise<_194.QueryAllCallbackDataResponse>;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _194.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _194.QueryParamsRequest;
            fromPartial(_: Partial<_194.QueryParamsRequest>): _194.QueryParamsRequest;
            fromAmino(_: _194.QueryParamsRequestAmino): _194.QueryParamsRequest;
            toAmino(_: _194.QueryParamsRequest): _194.QueryParamsRequestAmino;
            fromAminoMsg(object: _194.QueryParamsRequestAminoMsg): _194.QueryParamsRequest;
            fromProtoMsg(message: _194.QueryParamsRequestProtoMsg): _194.QueryParamsRequest;
            toProto(message: _194.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _194.QueryParamsRequest): _194.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _194.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _194.QueryParamsResponse;
            fromPartial(object: Partial<_194.QueryParamsResponse>): _194.QueryParamsResponse;
            fromAmino(object: _194.QueryParamsResponseAmino): _194.QueryParamsResponse;
            toAmino(message: _194.QueryParamsResponse): _194.QueryParamsResponseAmino;
            fromAminoMsg(object: _194.QueryParamsResponseAminoMsg): _194.QueryParamsResponse;
            fromProtoMsg(message: _194.QueryParamsResponseProtoMsg): _194.QueryParamsResponse;
            toProto(message: _194.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _194.QueryParamsResponse): _194.QueryParamsResponseProtoMsg;
        };
        QueryGetCallbackDataRequest: {
            typeUrl: string;
            encode(message: _194.QueryGetCallbackDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _194.QueryGetCallbackDataRequest;
            fromPartial(object: Partial<_194.QueryGetCallbackDataRequest>): _194.QueryGetCallbackDataRequest;
            fromAmino(object: _194.QueryGetCallbackDataRequestAmino): _194.QueryGetCallbackDataRequest;
            toAmino(message: _194.QueryGetCallbackDataRequest): _194.QueryGetCallbackDataRequestAmino;
            fromAminoMsg(object: _194.QueryGetCallbackDataRequestAminoMsg): _194.QueryGetCallbackDataRequest;
            fromProtoMsg(message: _194.QueryGetCallbackDataRequestProtoMsg): _194.QueryGetCallbackDataRequest;
            toProto(message: _194.QueryGetCallbackDataRequest): Uint8Array;
            toProtoMsg(message: _194.QueryGetCallbackDataRequest): _194.QueryGetCallbackDataRequestProtoMsg;
        };
        QueryGetCallbackDataResponse: {
            typeUrl: string;
            encode(message: _194.QueryGetCallbackDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _194.QueryGetCallbackDataResponse;
            fromPartial(object: Partial<_194.QueryGetCallbackDataResponse>): _194.QueryGetCallbackDataResponse;
            fromAmino(object: _194.QueryGetCallbackDataResponseAmino): _194.QueryGetCallbackDataResponse;
            toAmino(message: _194.QueryGetCallbackDataResponse): _194.QueryGetCallbackDataResponseAmino;
            fromAminoMsg(object: _194.QueryGetCallbackDataResponseAminoMsg): _194.QueryGetCallbackDataResponse;
            fromProtoMsg(message: _194.QueryGetCallbackDataResponseProtoMsg): _194.QueryGetCallbackDataResponse;
            toProto(message: _194.QueryGetCallbackDataResponse): Uint8Array;
            toProtoMsg(message: _194.QueryGetCallbackDataResponse): _194.QueryGetCallbackDataResponseProtoMsg;
        };
        QueryAllCallbackDataRequest: {
            typeUrl: string;
            encode(message: _194.QueryAllCallbackDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _194.QueryAllCallbackDataRequest;
            fromPartial(object: Partial<_194.QueryAllCallbackDataRequest>): _194.QueryAllCallbackDataRequest;
            fromAmino(object: _194.QueryAllCallbackDataRequestAmino): _194.QueryAllCallbackDataRequest;
            toAmino(message: _194.QueryAllCallbackDataRequest): _194.QueryAllCallbackDataRequestAmino;
            fromAminoMsg(object: _194.QueryAllCallbackDataRequestAminoMsg): _194.QueryAllCallbackDataRequest;
            fromProtoMsg(message: _194.QueryAllCallbackDataRequestProtoMsg): _194.QueryAllCallbackDataRequest;
            toProto(message: _194.QueryAllCallbackDataRequest): Uint8Array;
            toProtoMsg(message: _194.QueryAllCallbackDataRequest): _194.QueryAllCallbackDataRequestProtoMsg;
        };
        QueryAllCallbackDataResponse: {
            typeUrl: string;
            encode(message: _194.QueryAllCallbackDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _194.QueryAllCallbackDataResponse;
            fromPartial(object: Partial<_194.QueryAllCallbackDataResponse>): _194.QueryAllCallbackDataResponse;
            fromAmino(object: _194.QueryAllCallbackDataResponseAmino): _194.QueryAllCallbackDataResponse;
            toAmino(message: _194.QueryAllCallbackDataResponse): _194.QueryAllCallbackDataResponseAmino;
            fromAminoMsg(object: _194.QueryAllCallbackDataResponseAminoMsg): _194.QueryAllCallbackDataResponse;
            fromProtoMsg(message: _194.QueryAllCallbackDataResponseProtoMsg): _194.QueryAllCallbackDataResponse;
            toProto(message: _194.QueryAllCallbackDataResponse): Uint8Array;
            toProtoMsg(message: _194.QueryAllCallbackDataResponse): _194.QueryAllCallbackDataResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _193.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.Params;
            fromPartial(_: Partial<_193.Params>): _193.Params;
            fromAmino(_: _193.ParamsAmino): _193.Params;
            toAmino(_: _193.Params): _193.ParamsAmino;
            fromAminoMsg(object: _193.ParamsAminoMsg): _193.Params;
            fromProtoMsg(message: _193.ParamsProtoMsg): _193.Params;
            toProto(message: _193.Params): Uint8Array;
            toProtoMsg(message: _193.Params): _193.ParamsProtoMsg;
        };
        IcacallbacksPacketData: {
            typeUrl: string;
            encode(message: _192.IcacallbacksPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.IcacallbacksPacketData;
            fromPartial(object: Partial<_192.IcacallbacksPacketData>): _192.IcacallbacksPacketData;
            fromAmino(object: _192.IcacallbacksPacketDataAmino): _192.IcacallbacksPacketData;
            toAmino(message: _192.IcacallbacksPacketData): _192.IcacallbacksPacketDataAmino;
            fromAminoMsg(object: _192.IcacallbacksPacketDataAminoMsg): _192.IcacallbacksPacketData;
            fromProtoMsg(message: _192.IcacallbacksPacketDataProtoMsg): _192.IcacallbacksPacketData;
            toProto(message: _192.IcacallbacksPacketData): Uint8Array;
            toProtoMsg(message: _192.IcacallbacksPacketData): _192.IcacallbacksPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _192.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.NoData;
            fromPartial(_: Partial<_192.NoData>): _192.NoData;
            fromAmino(_: _192.NoDataAmino): _192.NoData;
            toAmino(_: _192.NoData): _192.NoDataAmino;
            fromAminoMsg(object: _192.NoDataAminoMsg): _192.NoData;
            fromProtoMsg(message: _192.NoDataProtoMsg): _192.NoData;
            toProto(message: _192.NoData): Uint8Array;
            toProtoMsg(message: _192.NoData): _192.NoDataProtoMsg;
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
        CallbackData: {
            typeUrl: string;
            encode(message: _190.CallbackData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.CallbackData;
            fromPartial(object: Partial<_190.CallbackData>): _190.CallbackData;
            fromAmino(object: _190.CallbackDataAmino): _190.CallbackData;
            toAmino(message: _190.CallbackData): _190.CallbackDataAmino;
            fromAminoMsg(object: _190.CallbackDataAminoMsg): _190.CallbackData;
            fromProtoMsg(message: _190.CallbackDataProtoMsg): _190.CallbackData;
            toProto(message: _190.CallbackData): Uint8Array;
            toProtoMsg(message: _190.CallbackData): _190.CallbackDataProtoMsg;
        };
    };
    const icaoracle: {
        MsgClientImpl: typeof _372.MsgClientImpl;
        QueryClientImpl: typeof _364.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            oracle(request: _200.QueryOracleRequest): Promise<_200.QueryOracleResponse>;
            allOracles(request?: _200.QueryAllOraclesRequest): Promise<_200.QueryAllOraclesResponse>;
            activeOracles(request: _200.QueryActiveOraclesRequest): Promise<_200.QueryActiveOraclesResponse>;
            metrics(request: _200.QueryMetricsRequest): Promise<_200.QueryMetricsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                addOracle(value: _201.MsgAddOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                instantiateOracle(value: _201.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreOracleICA(value: _201.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                toggleOracle(value: _201.MsgToggleOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeOracle(value: _201.MsgRemoveOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                addOracle(value: _201.MsgAddOracle): {
                    typeUrl: string;
                    value: _201.MsgAddOracle;
                };
                instantiateOracle(value: _201.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: _201.MsgInstantiateOracle;
                };
                restoreOracleICA(value: _201.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: _201.MsgRestoreOracleICA;
                };
                toggleOracle(value: _201.MsgToggleOracle): {
                    typeUrl: string;
                    value: _201.MsgToggleOracle;
                };
                removeOracle(value: _201.MsgRemoveOracle): {
                    typeUrl: string;
                    value: _201.MsgRemoveOracle;
                };
            };
            fromPartial: {
                addOracle(value: _201.MsgAddOracle): {
                    typeUrl: string;
                    value: _201.MsgAddOracle;
                };
                instantiateOracle(value: _201.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: _201.MsgInstantiateOracle;
                };
                restoreOracleICA(value: _201.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: _201.MsgRestoreOracleICA;
                };
                toggleOracle(value: _201.MsgToggleOracle): {
                    typeUrl: string;
                    value: _201.MsgToggleOracle;
                };
                removeOracle(value: _201.MsgRemoveOracle): {
                    typeUrl: string;
                    value: _201.MsgRemoveOracle;
                };
            };
        };
        AminoConverter: {
            "/stride.icaoracle.MsgAddOracle": {
                aminoType: string;
                toAmino: (message: _201.MsgAddOracle) => _201.MsgAddOracleAmino;
                fromAmino: (object: _201.MsgAddOracleAmino) => _201.MsgAddOracle;
            };
            "/stride.icaoracle.MsgInstantiateOracle": {
                aminoType: string;
                toAmino: (message: _201.MsgInstantiateOracle) => _201.MsgInstantiateOracleAmino;
                fromAmino: (object: _201.MsgInstantiateOracleAmino) => _201.MsgInstantiateOracle;
            };
            "/stride.icaoracle.MsgRestoreOracleICA": {
                aminoType: string;
                toAmino: (message: _201.MsgRestoreOracleICA) => _201.MsgRestoreOracleICAAmino;
                fromAmino: (object: _201.MsgRestoreOracleICAAmino) => _201.MsgRestoreOracleICA;
            };
            "/stride.icaoracle.MsgToggleOracle": {
                aminoType: string;
                toAmino: (message: _201.MsgToggleOracle) => _201.MsgToggleOracleAmino;
                fromAmino: (object: _201.MsgToggleOracleAmino) => _201.MsgToggleOracle;
            };
            "/stride.icaoracle.MsgRemoveOracle": {
                aminoType: string;
                toAmino: (message: _201.MsgRemoveOracle) => _201.MsgRemoveOracleAmino;
                fromAmino: (object: _201.MsgRemoveOracleAmino) => _201.MsgRemoveOracle;
            };
        };
        MsgAddOracle: {
            typeUrl: string;
            encode(message: _201.MsgAddOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.MsgAddOracle;
            fromPartial(object: Partial<_201.MsgAddOracle>): _201.MsgAddOracle;
            fromAmino(object: _201.MsgAddOracleAmino): _201.MsgAddOracle;
            toAmino(message: _201.MsgAddOracle): _201.MsgAddOracleAmino;
            fromAminoMsg(object: _201.MsgAddOracleAminoMsg): _201.MsgAddOracle;
            toAminoMsg(message: _201.MsgAddOracle): _201.MsgAddOracleAminoMsg;
            fromProtoMsg(message: _201.MsgAddOracleProtoMsg): _201.MsgAddOracle;
            toProto(message: _201.MsgAddOracle): Uint8Array;
            toProtoMsg(message: _201.MsgAddOracle): _201.MsgAddOracleProtoMsg;
        };
        MsgAddOracleResponse: {
            typeUrl: string;
            encode(_: _201.MsgAddOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.MsgAddOracleResponse;
            fromPartial(_: Partial<_201.MsgAddOracleResponse>): _201.MsgAddOracleResponse;
            fromAmino(_: _201.MsgAddOracleResponseAmino): _201.MsgAddOracleResponse;
            toAmino(_: _201.MsgAddOracleResponse): _201.MsgAddOracleResponseAmino;
            fromAminoMsg(object: _201.MsgAddOracleResponseAminoMsg): _201.MsgAddOracleResponse;
            fromProtoMsg(message: _201.MsgAddOracleResponseProtoMsg): _201.MsgAddOracleResponse;
            toProto(message: _201.MsgAddOracleResponse): Uint8Array;
            toProtoMsg(message: _201.MsgAddOracleResponse): _201.MsgAddOracleResponseProtoMsg;
        };
        MsgInstantiateOracle: {
            typeUrl: string;
            encode(message: _201.MsgInstantiateOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.MsgInstantiateOracle;
            fromPartial(object: Partial<_201.MsgInstantiateOracle>): _201.MsgInstantiateOracle;
            fromAmino(object: _201.MsgInstantiateOracleAmino): _201.MsgInstantiateOracle;
            toAmino(message: _201.MsgInstantiateOracle): _201.MsgInstantiateOracleAmino;
            fromAminoMsg(object: _201.MsgInstantiateOracleAminoMsg): _201.MsgInstantiateOracle;
            toAminoMsg(message: _201.MsgInstantiateOracle): _201.MsgInstantiateOracleAminoMsg;
            fromProtoMsg(message: _201.MsgInstantiateOracleProtoMsg): _201.MsgInstantiateOracle;
            toProto(message: _201.MsgInstantiateOracle): Uint8Array;
            toProtoMsg(message: _201.MsgInstantiateOracle): _201.MsgInstantiateOracleProtoMsg;
        };
        MsgInstantiateOracleResponse: {
            typeUrl: string;
            encode(_: _201.MsgInstantiateOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.MsgInstantiateOracleResponse;
            fromPartial(_: Partial<_201.MsgInstantiateOracleResponse>): _201.MsgInstantiateOracleResponse;
            fromAmino(_: _201.MsgInstantiateOracleResponseAmino): _201.MsgInstantiateOracleResponse;
            toAmino(_: _201.MsgInstantiateOracleResponse): _201.MsgInstantiateOracleResponseAmino;
            fromAminoMsg(object: _201.MsgInstantiateOracleResponseAminoMsg): _201.MsgInstantiateOracleResponse;
            fromProtoMsg(message: _201.MsgInstantiateOracleResponseProtoMsg): _201.MsgInstantiateOracleResponse;
            toProto(message: _201.MsgInstantiateOracleResponse): Uint8Array;
            toProtoMsg(message: _201.MsgInstantiateOracleResponse): _201.MsgInstantiateOracleResponseProtoMsg;
        };
        MsgRestoreOracleICA: {
            typeUrl: string;
            encode(message: _201.MsgRestoreOracleICA, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.MsgRestoreOracleICA;
            fromPartial(object: Partial<_201.MsgRestoreOracleICA>): _201.MsgRestoreOracleICA;
            fromAmino(object: _201.MsgRestoreOracleICAAmino): _201.MsgRestoreOracleICA;
            toAmino(message: _201.MsgRestoreOracleICA): _201.MsgRestoreOracleICAAmino;
            fromAminoMsg(object: _201.MsgRestoreOracleICAAminoMsg): _201.MsgRestoreOracleICA;
            toAminoMsg(message: _201.MsgRestoreOracleICA): _201.MsgRestoreOracleICAAminoMsg;
            fromProtoMsg(message: _201.MsgRestoreOracleICAProtoMsg): _201.MsgRestoreOracleICA;
            toProto(message: _201.MsgRestoreOracleICA): Uint8Array;
            toProtoMsg(message: _201.MsgRestoreOracleICA): _201.MsgRestoreOracleICAProtoMsg;
        };
        MsgRestoreOracleICAResponse: {
            typeUrl: string;
            encode(_: _201.MsgRestoreOracleICAResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.MsgRestoreOracleICAResponse;
            fromPartial(_: Partial<_201.MsgRestoreOracleICAResponse>): _201.MsgRestoreOracleICAResponse;
            fromAmino(_: _201.MsgRestoreOracleICAResponseAmino): _201.MsgRestoreOracleICAResponse;
            toAmino(_: _201.MsgRestoreOracleICAResponse): _201.MsgRestoreOracleICAResponseAmino;
            fromAminoMsg(object: _201.MsgRestoreOracleICAResponseAminoMsg): _201.MsgRestoreOracleICAResponse;
            fromProtoMsg(message: _201.MsgRestoreOracleICAResponseProtoMsg): _201.MsgRestoreOracleICAResponse;
            toProto(message: _201.MsgRestoreOracleICAResponse): Uint8Array;
            toProtoMsg(message: _201.MsgRestoreOracleICAResponse): _201.MsgRestoreOracleICAResponseProtoMsg;
        };
        MsgToggleOracle: {
            typeUrl: string;
            encode(message: _201.MsgToggleOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.MsgToggleOracle;
            fromPartial(object: Partial<_201.MsgToggleOracle>): _201.MsgToggleOracle;
            fromAmino(object: _201.MsgToggleOracleAmino): _201.MsgToggleOracle;
            toAmino(message: _201.MsgToggleOracle): _201.MsgToggleOracleAmino;
            fromAminoMsg(object: _201.MsgToggleOracleAminoMsg): _201.MsgToggleOracle;
            toAminoMsg(message: _201.MsgToggleOracle): _201.MsgToggleOracleAminoMsg;
            fromProtoMsg(message: _201.MsgToggleOracleProtoMsg): _201.MsgToggleOracle;
            toProto(message: _201.MsgToggleOracle): Uint8Array;
            toProtoMsg(message: _201.MsgToggleOracle): _201.MsgToggleOracleProtoMsg;
        };
        MsgToggleOracleResponse: {
            typeUrl: string;
            encode(_: _201.MsgToggleOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.MsgToggleOracleResponse;
            fromPartial(_: Partial<_201.MsgToggleOracleResponse>): _201.MsgToggleOracleResponse;
            fromAmino(_: _201.MsgToggleOracleResponseAmino): _201.MsgToggleOracleResponse;
            toAmino(_: _201.MsgToggleOracleResponse): _201.MsgToggleOracleResponseAmino;
            fromAminoMsg(object: _201.MsgToggleOracleResponseAminoMsg): _201.MsgToggleOracleResponse;
            fromProtoMsg(message: _201.MsgToggleOracleResponseProtoMsg): _201.MsgToggleOracleResponse;
            toProto(message: _201.MsgToggleOracleResponse): Uint8Array;
            toProtoMsg(message: _201.MsgToggleOracleResponse): _201.MsgToggleOracleResponseProtoMsg;
        };
        MsgRemoveOracle: {
            typeUrl: string;
            encode(message: _201.MsgRemoveOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.MsgRemoveOracle;
            fromPartial(object: Partial<_201.MsgRemoveOracle>): _201.MsgRemoveOracle;
            fromAmino(object: _201.MsgRemoveOracleAmino): _201.MsgRemoveOracle;
            toAmino(message: _201.MsgRemoveOracle): _201.MsgRemoveOracleAmino;
            fromAminoMsg(object: _201.MsgRemoveOracleAminoMsg): _201.MsgRemoveOracle;
            toAminoMsg(message: _201.MsgRemoveOracle): _201.MsgRemoveOracleAminoMsg;
            fromProtoMsg(message: _201.MsgRemoveOracleProtoMsg): _201.MsgRemoveOracle;
            toProto(message: _201.MsgRemoveOracle): Uint8Array;
            toProtoMsg(message: _201.MsgRemoveOracle): _201.MsgRemoveOracleProtoMsg;
        };
        MsgRemoveOracleResponse: {
            typeUrl: string;
            encode(_: _201.MsgRemoveOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.MsgRemoveOracleResponse;
            fromPartial(_: Partial<_201.MsgRemoveOracleResponse>): _201.MsgRemoveOracleResponse;
            fromAmino(_: _201.MsgRemoveOracleResponseAmino): _201.MsgRemoveOracleResponse;
            toAmino(_: _201.MsgRemoveOracleResponse): _201.MsgRemoveOracleResponseAmino;
            fromAminoMsg(object: _201.MsgRemoveOracleResponseAminoMsg): _201.MsgRemoveOracleResponse;
            fromProtoMsg(message: _201.MsgRemoveOracleResponseProtoMsg): _201.MsgRemoveOracleResponse;
            toProto(message: _201.MsgRemoveOracleResponse): Uint8Array;
            toProtoMsg(message: _201.MsgRemoveOracleResponse): _201.MsgRemoveOracleResponseProtoMsg;
        };
        QueryOracleRequest: {
            typeUrl: string;
            encode(message: _200.QueryOracleRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.QueryOracleRequest;
            fromPartial(object: Partial<_200.QueryOracleRequest>): _200.QueryOracleRequest;
            fromAmino(object: _200.QueryOracleRequestAmino): _200.QueryOracleRequest;
            toAmino(message: _200.QueryOracleRequest): _200.QueryOracleRequestAmino;
            fromAminoMsg(object: _200.QueryOracleRequestAminoMsg): _200.QueryOracleRequest;
            fromProtoMsg(message: _200.QueryOracleRequestProtoMsg): _200.QueryOracleRequest;
            toProto(message: _200.QueryOracleRequest): Uint8Array;
            toProtoMsg(message: _200.QueryOracleRequest): _200.QueryOracleRequestProtoMsg;
        };
        QueryOracleResponse: {
            typeUrl: string;
            encode(message: _200.QueryOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.QueryOracleResponse;
            fromPartial(object: Partial<_200.QueryOracleResponse>): _200.QueryOracleResponse;
            fromAmino(object: _200.QueryOracleResponseAmino): _200.QueryOracleResponse;
            toAmino(message: _200.QueryOracleResponse): _200.QueryOracleResponseAmino;
            fromAminoMsg(object: _200.QueryOracleResponseAminoMsg): _200.QueryOracleResponse;
            fromProtoMsg(message: _200.QueryOracleResponseProtoMsg): _200.QueryOracleResponse;
            toProto(message: _200.QueryOracleResponse): Uint8Array;
            toProtoMsg(message: _200.QueryOracleResponse): _200.QueryOracleResponseProtoMsg;
        };
        QueryAllOraclesRequest: {
            typeUrl: string;
            encode(_: _200.QueryAllOraclesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.QueryAllOraclesRequest;
            fromPartial(_: Partial<_200.QueryAllOraclesRequest>): _200.QueryAllOraclesRequest;
            fromAmino(_: _200.QueryAllOraclesRequestAmino): _200.QueryAllOraclesRequest;
            toAmino(_: _200.QueryAllOraclesRequest): _200.QueryAllOraclesRequestAmino;
            fromAminoMsg(object: _200.QueryAllOraclesRequestAminoMsg): _200.QueryAllOraclesRequest;
            fromProtoMsg(message: _200.QueryAllOraclesRequestProtoMsg): _200.QueryAllOraclesRequest;
            toProto(message: _200.QueryAllOraclesRequest): Uint8Array;
            toProtoMsg(message: _200.QueryAllOraclesRequest): _200.QueryAllOraclesRequestProtoMsg;
        };
        QueryAllOraclesResponse: {
            typeUrl: string;
            encode(message: _200.QueryAllOraclesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.QueryAllOraclesResponse;
            fromPartial(object: Partial<_200.QueryAllOraclesResponse>): _200.QueryAllOraclesResponse;
            fromAmino(object: _200.QueryAllOraclesResponseAmino): _200.QueryAllOraclesResponse;
            toAmino(message: _200.QueryAllOraclesResponse): _200.QueryAllOraclesResponseAmino;
            fromAminoMsg(object: _200.QueryAllOraclesResponseAminoMsg): _200.QueryAllOraclesResponse;
            fromProtoMsg(message: _200.QueryAllOraclesResponseProtoMsg): _200.QueryAllOraclesResponse;
            toProto(message: _200.QueryAllOraclesResponse): Uint8Array;
            toProtoMsg(message: _200.QueryAllOraclesResponse): _200.QueryAllOraclesResponseProtoMsg;
        };
        QueryActiveOraclesRequest: {
            typeUrl: string;
            encode(message: _200.QueryActiveOraclesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.QueryActiveOraclesRequest;
            fromPartial(object: Partial<_200.QueryActiveOraclesRequest>): _200.QueryActiveOraclesRequest;
            fromAmino(object: _200.QueryActiveOraclesRequestAmino): _200.QueryActiveOraclesRequest;
            toAmino(message: _200.QueryActiveOraclesRequest): _200.QueryActiveOraclesRequestAmino;
            fromAminoMsg(object: _200.QueryActiveOraclesRequestAminoMsg): _200.QueryActiveOraclesRequest;
            fromProtoMsg(message: _200.QueryActiveOraclesRequestProtoMsg): _200.QueryActiveOraclesRequest;
            toProto(message: _200.QueryActiveOraclesRequest): Uint8Array;
            toProtoMsg(message: _200.QueryActiveOraclesRequest): _200.QueryActiveOraclesRequestProtoMsg;
        };
        QueryActiveOraclesResponse: {
            typeUrl: string;
            encode(message: _200.QueryActiveOraclesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.QueryActiveOraclesResponse;
            fromPartial(object: Partial<_200.QueryActiveOraclesResponse>): _200.QueryActiveOraclesResponse;
            fromAmino(object: _200.QueryActiveOraclesResponseAmino): _200.QueryActiveOraclesResponse;
            toAmino(message: _200.QueryActiveOraclesResponse): _200.QueryActiveOraclesResponseAmino;
            fromAminoMsg(object: _200.QueryActiveOraclesResponseAminoMsg): _200.QueryActiveOraclesResponse;
            fromProtoMsg(message: _200.QueryActiveOraclesResponseProtoMsg): _200.QueryActiveOraclesResponse;
            toProto(message: _200.QueryActiveOraclesResponse): Uint8Array;
            toProtoMsg(message: _200.QueryActiveOraclesResponse): _200.QueryActiveOraclesResponseProtoMsg;
        };
        QueryMetricsRequest: {
            typeUrl: string;
            encode(message: _200.QueryMetricsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.QueryMetricsRequest;
            fromPartial(object: Partial<_200.QueryMetricsRequest>): _200.QueryMetricsRequest;
            fromAmino(object: _200.QueryMetricsRequestAmino): _200.QueryMetricsRequest;
            toAmino(message: _200.QueryMetricsRequest): _200.QueryMetricsRequestAmino;
            fromAminoMsg(object: _200.QueryMetricsRequestAminoMsg): _200.QueryMetricsRequest;
            fromProtoMsg(message: _200.QueryMetricsRequestProtoMsg): _200.QueryMetricsRequest;
            toProto(message: _200.QueryMetricsRequest): Uint8Array;
            toProtoMsg(message: _200.QueryMetricsRequest): _200.QueryMetricsRequestProtoMsg;
        };
        QueryMetricsResponse: {
            typeUrl: string;
            encode(message: _200.QueryMetricsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.QueryMetricsResponse;
            fromPartial(object: Partial<_200.QueryMetricsResponse>): _200.QueryMetricsResponse;
            fromAmino(object: _200.QueryMetricsResponseAmino): _200.QueryMetricsResponse;
            toAmino(message: _200.QueryMetricsResponse): _200.QueryMetricsResponseAmino;
            fromAminoMsg(object: _200.QueryMetricsResponseAminoMsg): _200.QueryMetricsResponse;
            fromProtoMsg(message: _200.QueryMetricsResponseProtoMsg): _200.QueryMetricsResponse;
            toProto(message: _200.QueryMetricsResponse): Uint8Array;
            toProtoMsg(message: _200.QueryMetricsResponse): _200.QueryMetricsResponseProtoMsg;
        };
        metricStatusFromJSON(object: any): _199.MetricStatus;
        metricStatusToJSON(object: _199.MetricStatus): string;
        MetricStatus: typeof _199.MetricStatus;
        MetricStatusSDKType: typeof _199.MetricStatus;
        MetricStatusAmino: typeof _199.MetricStatus;
        Oracle: {
            typeUrl: string;
            encode(message: _199.Oracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.Oracle;
            fromPartial(object: Partial<_199.Oracle>): _199.Oracle;
            fromAmino(object: _199.OracleAmino): _199.Oracle;
            toAmino(message: _199.Oracle): _199.OracleAmino;
            fromAminoMsg(object: _199.OracleAminoMsg): _199.Oracle;
            fromProtoMsg(message: _199.OracleProtoMsg): _199.Oracle;
            toProto(message: _199.Oracle): Uint8Array;
            toProtoMsg(message: _199.Oracle): _199.OracleProtoMsg;
        };
        Metric: {
            typeUrl: string;
            encode(message: _199.Metric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.Metric;
            fromPartial(object: Partial<_199.Metric>): _199.Metric;
            fromAmino(object: _199.MetricAmino): _199.Metric;
            toAmino(message: _199.Metric): _199.MetricAmino;
            fromAminoMsg(object: _199.MetricAminoMsg): _199.Metric;
            fromProtoMsg(message: _199.MetricProtoMsg): _199.Metric;
            toProto(message: _199.Metric): Uint8Array;
            toProtoMsg(message: _199.Metric): _199.MetricProtoMsg;
        };
        RedemptionRateAttributes: {
            typeUrl: string;
            encode(message: _199.RedemptionRateAttributes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.RedemptionRateAttributes;
            fromPartial(object: Partial<_199.RedemptionRateAttributes>): _199.RedemptionRateAttributes;
            fromAmino(object: _199.RedemptionRateAttributesAmino): _199.RedemptionRateAttributes;
            toAmino(message: _199.RedemptionRateAttributes): _199.RedemptionRateAttributesAmino;
            fromAminoMsg(object: _199.RedemptionRateAttributesAminoMsg): _199.RedemptionRateAttributes;
            fromProtoMsg(message: _199.RedemptionRateAttributesProtoMsg): _199.RedemptionRateAttributes;
            toProto(message: _199.RedemptionRateAttributes): Uint8Array;
            toProtoMsg(message: _199.RedemptionRateAttributes): _199.RedemptionRateAttributesProtoMsg;
        };
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
        MsgInstantiateOracleContract: {
            typeUrl: string;
            encode(message: _197.MsgInstantiateOracleContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgInstantiateOracleContract;
            fromPartial(object: Partial<_197.MsgInstantiateOracleContract>): _197.MsgInstantiateOracleContract;
            fromAmino(object: _197.MsgInstantiateOracleContractAmino): _197.MsgInstantiateOracleContract;
            toAmino(message: _197.MsgInstantiateOracleContract): _197.MsgInstantiateOracleContractAmino;
            fromAminoMsg(object: _197.MsgInstantiateOracleContractAminoMsg): _197.MsgInstantiateOracleContract;
            fromProtoMsg(message: _197.MsgInstantiateOracleContractProtoMsg): _197.MsgInstantiateOracleContract;
            toProto(message: _197.MsgInstantiateOracleContract): Uint8Array;
            toProtoMsg(message: _197.MsgInstantiateOracleContract): _197.MsgInstantiateOracleContractProtoMsg;
        };
        MsgExecuteContractPostMetric: {
            typeUrl: string;
            encode(message: _197.MsgExecuteContractPostMetric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgExecuteContractPostMetric;
            fromPartial(object: Partial<_197.MsgExecuteContractPostMetric>): _197.MsgExecuteContractPostMetric;
            fromAmino(object: _197.MsgExecuteContractPostMetricAmino): _197.MsgExecuteContractPostMetric;
            toAmino(message: _197.MsgExecuteContractPostMetric): _197.MsgExecuteContractPostMetricAmino;
            fromAminoMsg(object: _197.MsgExecuteContractPostMetricAminoMsg): _197.MsgExecuteContractPostMetric;
            fromProtoMsg(message: _197.MsgExecuteContractPostMetricProtoMsg): _197.MsgExecuteContractPostMetric;
            toProto(message: _197.MsgExecuteContractPostMetric): Uint8Array;
            toProtoMsg(message: _197.MsgExecuteContractPostMetric): _197.MsgExecuteContractPostMetricProtoMsg;
        };
        MsgPostMetric: {
            typeUrl: string;
            encode(message: _197.MsgPostMetric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgPostMetric;
            fromPartial(object: Partial<_197.MsgPostMetric>): _197.MsgPostMetric;
            fromAmino(object: _197.MsgPostMetricAmino): _197.MsgPostMetric;
            toAmino(message: _197.MsgPostMetric): _197.MsgPostMetricAmino;
            fromAminoMsg(object: _197.MsgPostMetricAminoMsg): _197.MsgPostMetric;
            fromProtoMsg(message: _197.MsgPostMetricProtoMsg): _197.MsgPostMetric;
            toProto(message: _197.MsgPostMetric): Uint8Array;
            toProtoMsg(message: _197.MsgPostMetric): _197.MsgPostMetricProtoMsg;
        };
        InstantiateOracleCallback: {
            typeUrl: string;
            encode(message: _196.InstantiateOracleCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.InstantiateOracleCallback;
            fromPartial(object: Partial<_196.InstantiateOracleCallback>): _196.InstantiateOracleCallback;
            fromAmino(object: _196.InstantiateOracleCallbackAmino): _196.InstantiateOracleCallback;
            toAmino(message: _196.InstantiateOracleCallback): _196.InstantiateOracleCallbackAmino;
            fromAminoMsg(object: _196.InstantiateOracleCallbackAminoMsg): _196.InstantiateOracleCallback;
            fromProtoMsg(message: _196.InstantiateOracleCallbackProtoMsg): _196.InstantiateOracleCallback;
            toProto(message: _196.InstantiateOracleCallback): Uint8Array;
            toProtoMsg(message: _196.InstantiateOracleCallback): _196.InstantiateOracleCallbackProtoMsg;
        };
        UpdateOracleCallback: {
            typeUrl: string;
            encode(message: _196.UpdateOracleCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.UpdateOracleCallback;
            fromPartial(object: Partial<_196.UpdateOracleCallback>): _196.UpdateOracleCallback;
            fromAmino(object: _196.UpdateOracleCallbackAmino): _196.UpdateOracleCallback;
            toAmino(message: _196.UpdateOracleCallback): _196.UpdateOracleCallbackAmino;
            fromAminoMsg(object: _196.UpdateOracleCallbackAminoMsg): _196.UpdateOracleCallback;
            fromProtoMsg(message: _196.UpdateOracleCallbackProtoMsg): _196.UpdateOracleCallback;
            toProto(message: _196.UpdateOracleCallback): Uint8Array;
            toProtoMsg(message: _196.UpdateOracleCallback): _196.UpdateOracleCallbackProtoMsg;
        };
    };
    namespace interchainquery {
        const v1: {
            MsgClientImpl: typeof _373.MsgClientImpl;
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitQueryResponse(value: _203.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitQueryResponse(value: _203.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _203.MsgSubmitQueryResponse;
                    };
                };
                fromPartial: {
                    submitQueryResponse(value: _203.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _203.MsgSubmitQueryResponse;
                    };
                };
            };
            AminoConverter: {
                "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
                    aminoType: string;
                    toAmino: (message: _203.MsgSubmitQueryResponse) => _203.MsgSubmitQueryResponseAmino;
                    fromAmino: (object: _203.MsgSubmitQueryResponseAmino) => _203.MsgSubmitQueryResponse;
                };
            };
            QueryPendingQueriesRequest: {
                typeUrl: string;
                encode(_: _204.QueryPendingQueriesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.QueryPendingQueriesRequest;
                fromPartial(_: Partial<_204.QueryPendingQueriesRequest>): _204.QueryPendingQueriesRequest;
                fromAmino(_: _204.QueryPendingQueriesRequestAmino): _204.QueryPendingQueriesRequest;
                toAmino(_: _204.QueryPendingQueriesRequest): _204.QueryPendingQueriesRequestAmino;
                fromAminoMsg(object: _204.QueryPendingQueriesRequestAminoMsg): _204.QueryPendingQueriesRequest;
                fromProtoMsg(message: _204.QueryPendingQueriesRequestProtoMsg): _204.QueryPendingQueriesRequest;
                toProto(message: _204.QueryPendingQueriesRequest): Uint8Array;
                toProtoMsg(message: _204.QueryPendingQueriesRequest): _204.QueryPendingQueriesRequestProtoMsg;
            };
            QueryPendingQueriesResponse: {
                typeUrl: string;
                encode(message: _204.QueryPendingQueriesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.QueryPendingQueriesResponse;
                fromPartial(object: Partial<_204.QueryPendingQueriesResponse>): _204.QueryPendingQueriesResponse;
                fromAmino(object: _204.QueryPendingQueriesResponseAmino): _204.QueryPendingQueriesResponse;
                toAmino(message: _204.QueryPendingQueriesResponse): _204.QueryPendingQueriesResponseAmino;
                fromAminoMsg(object: _204.QueryPendingQueriesResponseAminoMsg): _204.QueryPendingQueriesResponse;
                fromProtoMsg(message: _204.QueryPendingQueriesResponseProtoMsg): _204.QueryPendingQueriesResponse;
                toProto(message: _204.QueryPendingQueriesResponse): Uint8Array;
                toProtoMsg(message: _204.QueryPendingQueriesResponse): _204.QueryPendingQueriesResponseProtoMsg;
            };
            MsgSubmitQueryResponse: {
                typeUrl: string;
                encode(message: _203.MsgSubmitQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgSubmitQueryResponse;
                fromPartial(object: Partial<_203.MsgSubmitQueryResponse>): _203.MsgSubmitQueryResponse;
                fromAmino(object: _203.MsgSubmitQueryResponseAmino): _203.MsgSubmitQueryResponse;
                toAmino(message: _203.MsgSubmitQueryResponse): _203.MsgSubmitQueryResponseAmino;
                fromAminoMsg(object: _203.MsgSubmitQueryResponseAminoMsg): _203.MsgSubmitQueryResponse;
                fromProtoMsg(message: _203.MsgSubmitQueryResponseProtoMsg): _203.MsgSubmitQueryResponse;
                toProto(message: _203.MsgSubmitQueryResponse): Uint8Array;
                toProtoMsg(message: _203.MsgSubmitQueryResponse): _203.MsgSubmitQueryResponseProtoMsg;
            };
            MsgSubmitQueryResponseResponse: {
                typeUrl: string;
                encode(_: _203.MsgSubmitQueryResponseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgSubmitQueryResponseResponse;
                fromPartial(_: Partial<_203.MsgSubmitQueryResponseResponse>): _203.MsgSubmitQueryResponseResponse;
                fromAmino(_: _203.MsgSubmitQueryResponseResponseAmino): _203.MsgSubmitQueryResponseResponse;
                toAmino(_: _203.MsgSubmitQueryResponseResponse): _203.MsgSubmitQueryResponseResponseAmino;
                fromAminoMsg(object: _203.MsgSubmitQueryResponseResponseAminoMsg): _203.MsgSubmitQueryResponseResponse;
                fromProtoMsg(message: _203.MsgSubmitQueryResponseResponseProtoMsg): _203.MsgSubmitQueryResponseResponse;
                toProto(message: _203.MsgSubmitQueryResponseResponse): Uint8Array;
                toProtoMsg(message: _203.MsgSubmitQueryResponseResponse): _203.MsgSubmitQueryResponseResponseProtoMsg;
            };
            timeoutPolicyFromJSON(object: any): _202.TimeoutPolicy;
            timeoutPolicyToJSON(object: _202.TimeoutPolicy): string;
            TimeoutPolicy: typeof _202.TimeoutPolicy;
            TimeoutPolicySDKType: typeof _202.TimeoutPolicy;
            TimeoutPolicyAmino: typeof _202.TimeoutPolicy;
            Query: {
                typeUrl: string;
                encode(message: _202.Query, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.Query;
                fromPartial(object: Partial<_202.Query>): _202.Query;
                fromAmino(object: _202.QueryAmino): _202.Query;
                toAmino(message: _202.Query): _202.QueryAmino;
                fromAminoMsg(object: _202.QueryAminoMsg): _202.Query;
                fromProtoMsg(message: _202.QueryProtoMsg): _202.Query;
                toProto(message: _202.Query): Uint8Array;
                toProtoMsg(message: _202.Query): _202.QueryProtoMsg;
            };
            DataPoint: {
                typeUrl: string;
                encode(message: _202.DataPoint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.DataPoint;
                fromPartial(object: Partial<_202.DataPoint>): _202.DataPoint;
                fromAmino(object: _202.DataPointAmino): _202.DataPoint;
                toAmino(message: _202.DataPoint): _202.DataPointAmino;
                fromAminoMsg(object: _202.DataPointAminoMsg): _202.DataPoint;
                fromProtoMsg(message: _202.DataPointProtoMsg): _202.DataPoint;
                toProto(message: _202.DataPoint): Uint8Array;
                toProtoMsg(message: _202.DataPoint): _202.DataPointProtoMsg;
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
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _365.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _207.QueryParamsRequest): Promise<_207.QueryParamsResponse>;
                epochProvisions(request?: _207.QueryEpochProvisionsRequest): Promise<_207.QueryEpochProvisionsResponse>;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _207.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.QueryParamsRequest;
                fromPartial(_: Partial<_207.QueryParamsRequest>): _207.QueryParamsRequest;
                fromAmino(_: _207.QueryParamsRequestAmino): _207.QueryParamsRequest;
                toAmino(_: _207.QueryParamsRequest): _207.QueryParamsRequestAmino;
                fromAminoMsg(object: _207.QueryParamsRequestAminoMsg): _207.QueryParamsRequest;
                fromProtoMsg(message: _207.QueryParamsRequestProtoMsg): _207.QueryParamsRequest;
                toProto(message: _207.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _207.QueryParamsRequest): _207.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _207.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.QueryParamsResponse;
                fromPartial(object: Partial<_207.QueryParamsResponse>): _207.QueryParamsResponse;
                fromAmino(object: _207.QueryParamsResponseAmino): _207.QueryParamsResponse;
                toAmino(message: _207.QueryParamsResponse): _207.QueryParamsResponseAmino;
                fromAminoMsg(object: _207.QueryParamsResponseAminoMsg): _207.QueryParamsResponse;
                fromProtoMsg(message: _207.QueryParamsResponseProtoMsg): _207.QueryParamsResponse;
                toProto(message: _207.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _207.QueryParamsResponse): _207.QueryParamsResponseProtoMsg;
            };
            QueryEpochProvisionsRequest: {
                typeUrl: string;
                encode(_: _207.QueryEpochProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_207.QueryEpochProvisionsRequest>): _207.QueryEpochProvisionsRequest;
                fromAmino(_: _207.QueryEpochProvisionsRequestAmino): _207.QueryEpochProvisionsRequest;
                toAmino(_: _207.QueryEpochProvisionsRequest): _207.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _207.QueryEpochProvisionsRequestAminoMsg): _207.QueryEpochProvisionsRequest;
                fromProtoMsg(message: _207.QueryEpochProvisionsRequestProtoMsg): _207.QueryEpochProvisionsRequest;
                toProto(message: _207.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _207.QueryEpochProvisionsRequest): _207.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                typeUrl: string;
                encode(message: _207.QueryEpochProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_207.QueryEpochProvisionsResponse>): _207.QueryEpochProvisionsResponse;
                fromAmino(object: _207.QueryEpochProvisionsResponseAmino): _207.QueryEpochProvisionsResponse;
                toAmino(message: _207.QueryEpochProvisionsResponse): _207.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _207.QueryEpochProvisionsResponseAminoMsg): _207.QueryEpochProvisionsResponse;
                fromProtoMsg(message: _207.QueryEpochProvisionsResponseProtoMsg): _207.QueryEpochProvisionsResponse;
                toProto(message: _207.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _207.QueryEpochProvisionsResponse): _207.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _206.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.Minter;
                fromPartial(object: Partial<_206.Minter>): _206.Minter;
                fromAmino(object: _206.MinterAmino): _206.Minter;
                toAmino(message: _206.Minter): _206.MinterAmino;
                fromAminoMsg(object: _206.MinterAminoMsg): _206.Minter;
                fromProtoMsg(message: _206.MinterProtoMsg): _206.Minter;
                toProto(message: _206.Minter): Uint8Array;
                toProtoMsg(message: _206.Minter): _206.MinterProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                encode(message: _206.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.DistributionProportions;
                fromPartial(object: Partial<_206.DistributionProportions>): _206.DistributionProportions;
                fromAmino(object: _206.DistributionProportionsAmino): _206.DistributionProportions;
                toAmino(message: _206.DistributionProportions): _206.DistributionProportionsAmino;
                fromAminoMsg(object: _206.DistributionProportionsAminoMsg): _206.DistributionProportions;
                fromProtoMsg(message: _206.DistributionProportionsProtoMsg): _206.DistributionProportions;
                toProto(message: _206.DistributionProportions): Uint8Array;
                toProtoMsg(message: _206.DistributionProportions): _206.DistributionProportionsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _206.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.Params;
                fromPartial(object: Partial<_206.Params>): _206.Params;
                fromAmino(object: _206.ParamsAmino): _206.Params;
                toAmino(message: _206.Params): _206.ParamsAmino;
                fromAminoMsg(object: _206.ParamsAminoMsg): _206.Params;
                fromProtoMsg(message: _206.ParamsProtoMsg): _206.Params;
                toProto(message: _206.Params): Uint8Array;
                toProtoMsg(message: _206.Params): _206.ParamsProtoMsg;
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
        };
    }
    const records: {
        QueryClientImpl: typeof _366.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _211.QueryParamsRequest): Promise<_211.QueryParamsResponse>;
            userRedemptionRecord(request: _211.QueryGetUserRedemptionRecordRequest): Promise<_211.QueryGetUserRedemptionRecordResponse>;
            userRedemptionRecordAll(request?: _211.QueryAllUserRedemptionRecordRequest): Promise<_211.QueryAllUserRedemptionRecordResponse>;
            userRedemptionRecordForUser(request: _211.QueryAllUserRedemptionRecordForUserRequest): Promise<_211.QueryAllUserRedemptionRecordForUserResponse>;
            epochUnbondingRecord(request: _211.QueryGetEpochUnbondingRecordRequest): Promise<_211.QueryGetEpochUnbondingRecordResponse>;
            epochUnbondingRecordAll(request?: _211.QueryAllEpochUnbondingRecordRequest): Promise<_211.QueryAllEpochUnbondingRecordResponse>;
            depositRecord(request: _211.QueryGetDepositRecordRequest): Promise<_211.QueryGetDepositRecordResponse>;
            depositRecordAll(request?: _211.QueryAllDepositRecordRequest): Promise<_211.QueryAllDepositRecordResponse>;
            depositRecordByHost(request: _211.QueryDepositRecordByHostRequest): Promise<_211.QueryDepositRecordByHostResponse>;
            lSMDeposit(request: _211.QueryLSMDepositRequest): Promise<_211.QueryLSMDepositResponse>;
            lSMDeposits(request: _211.QueryLSMDepositsRequest): Promise<_211.QueryLSMDepositsResponse>;
        };
        depositRecord_StatusFromJSON(object: any): _212.DepositRecord_Status;
        depositRecord_StatusToJSON(object: _212.DepositRecord_Status): string;
        depositRecord_SourceFromJSON(object: any): _212.DepositRecord_Source;
        depositRecord_SourceToJSON(object: _212.DepositRecord_Source): string;
        hostZoneUnbonding_StatusFromJSON(object: any): _212.HostZoneUnbonding_Status;
        hostZoneUnbonding_StatusToJSON(object: _212.HostZoneUnbonding_Status): string;
        lSMTokenDeposit_StatusFromJSON(object: any): _212.LSMTokenDeposit_Status;
        lSMTokenDeposit_StatusToJSON(object: _212.LSMTokenDeposit_Status): string;
        DepositRecord_Status: typeof _212.DepositRecord_Status;
        DepositRecord_StatusSDKType: typeof _212.DepositRecord_Status;
        DepositRecord_StatusAmino: typeof _212.DepositRecord_Status;
        DepositRecord_Source: typeof _212.DepositRecord_Source;
        DepositRecord_SourceSDKType: typeof _212.DepositRecord_Source;
        DepositRecord_SourceAmino: typeof _212.DepositRecord_Source;
        HostZoneUnbonding_Status: typeof _212.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusSDKType: typeof _212.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusAmino: typeof _212.HostZoneUnbonding_Status;
        LSMTokenDeposit_Status: typeof _212.LSMTokenDeposit_Status;
        LSMTokenDeposit_StatusSDKType: typeof _212.LSMTokenDeposit_Status;
        LSMTokenDeposit_StatusAmino: typeof _212.LSMTokenDeposit_Status;
        UserRedemptionRecord: {
            typeUrl: string;
            encode(message: _212.UserRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.UserRedemptionRecord;
            fromPartial(object: Partial<_212.UserRedemptionRecord>): _212.UserRedemptionRecord;
            fromAmino(object: _212.UserRedemptionRecordAmino): _212.UserRedemptionRecord;
            toAmino(message: _212.UserRedemptionRecord): _212.UserRedemptionRecordAmino;
            fromAminoMsg(object: _212.UserRedemptionRecordAminoMsg): _212.UserRedemptionRecord;
            fromProtoMsg(message: _212.UserRedemptionRecordProtoMsg): _212.UserRedemptionRecord;
            toProto(message: _212.UserRedemptionRecord): Uint8Array;
            toProtoMsg(message: _212.UserRedemptionRecord): _212.UserRedemptionRecordProtoMsg;
        };
        DepositRecord: {
            typeUrl: string;
            encode(message: _212.DepositRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.DepositRecord;
            fromPartial(object: Partial<_212.DepositRecord>): _212.DepositRecord;
            fromAmino(object: _212.DepositRecordAmino): _212.DepositRecord;
            toAmino(message: _212.DepositRecord): _212.DepositRecordAmino;
            fromAminoMsg(object: _212.DepositRecordAminoMsg): _212.DepositRecord;
            fromProtoMsg(message: _212.DepositRecordProtoMsg): _212.DepositRecord;
            toProto(message: _212.DepositRecord): Uint8Array;
            toProtoMsg(message: _212.DepositRecord): _212.DepositRecordProtoMsg;
        };
        HostZoneUnbonding: {
            typeUrl: string;
            encode(message: _212.HostZoneUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.HostZoneUnbonding;
            fromPartial(object: Partial<_212.HostZoneUnbonding>): _212.HostZoneUnbonding;
            fromAmino(object: _212.HostZoneUnbondingAmino): _212.HostZoneUnbonding;
            toAmino(message: _212.HostZoneUnbonding): _212.HostZoneUnbondingAmino;
            fromAminoMsg(object: _212.HostZoneUnbondingAminoMsg): _212.HostZoneUnbonding;
            fromProtoMsg(message: _212.HostZoneUnbondingProtoMsg): _212.HostZoneUnbonding;
            toProto(message: _212.HostZoneUnbonding): Uint8Array;
            toProtoMsg(message: _212.HostZoneUnbonding): _212.HostZoneUnbondingProtoMsg;
        };
        EpochUnbondingRecord: {
            typeUrl: string;
            encode(message: _212.EpochUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.EpochUnbondingRecord;
            fromPartial(object: Partial<_212.EpochUnbondingRecord>): _212.EpochUnbondingRecord;
            fromAmino(object: _212.EpochUnbondingRecordAmino): _212.EpochUnbondingRecord;
            toAmino(message: _212.EpochUnbondingRecord): _212.EpochUnbondingRecordAmino;
            fromAminoMsg(object: _212.EpochUnbondingRecordAminoMsg): _212.EpochUnbondingRecord;
            fromProtoMsg(message: _212.EpochUnbondingRecordProtoMsg): _212.EpochUnbondingRecord;
            toProto(message: _212.EpochUnbondingRecord): Uint8Array;
            toProtoMsg(message: _212.EpochUnbondingRecord): _212.EpochUnbondingRecordProtoMsg;
        };
        LSMTokenDeposit: {
            typeUrl: string;
            encode(message: _212.LSMTokenDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.LSMTokenDeposit;
            fromPartial(object: Partial<_212.LSMTokenDeposit>): _212.LSMTokenDeposit;
            fromAmino(object: _212.LSMTokenDepositAmino): _212.LSMTokenDeposit;
            toAmino(message: _212.LSMTokenDeposit): _212.LSMTokenDepositAmino;
            fromAminoMsg(object: _212.LSMTokenDepositAminoMsg): _212.LSMTokenDeposit;
            fromProtoMsg(message: _212.LSMTokenDepositProtoMsg): _212.LSMTokenDeposit;
            toProto(message: _212.LSMTokenDeposit): Uint8Array;
            toProtoMsg(message: _212.LSMTokenDeposit): _212.LSMTokenDepositProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _211.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryParamsRequest;
            fromPartial(_: Partial<_211.QueryParamsRequest>): _211.QueryParamsRequest;
            fromAmino(_: _211.QueryParamsRequestAmino): _211.QueryParamsRequest;
            toAmino(_: _211.QueryParamsRequest): _211.QueryParamsRequestAmino;
            fromAminoMsg(object: _211.QueryParamsRequestAminoMsg): _211.QueryParamsRequest;
            fromProtoMsg(message: _211.QueryParamsRequestProtoMsg): _211.QueryParamsRequest;
            toProto(message: _211.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _211.QueryParamsRequest): _211.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _211.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryParamsResponse;
            fromPartial(object: Partial<_211.QueryParamsResponse>): _211.QueryParamsResponse;
            fromAmino(object: _211.QueryParamsResponseAmino): _211.QueryParamsResponse;
            toAmino(message: _211.QueryParamsResponse): _211.QueryParamsResponseAmino;
            fromAminoMsg(object: _211.QueryParamsResponseAminoMsg): _211.QueryParamsResponse;
            fromProtoMsg(message: _211.QueryParamsResponseProtoMsg): _211.QueryParamsResponse;
            toProto(message: _211.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _211.QueryParamsResponse): _211.QueryParamsResponseProtoMsg;
        };
        QueryGetDepositRecordRequest: {
            typeUrl: string;
            encode(message: _211.QueryGetDepositRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryGetDepositRecordRequest;
            fromPartial(object: Partial<_211.QueryGetDepositRecordRequest>): _211.QueryGetDepositRecordRequest;
            fromAmino(object: _211.QueryGetDepositRecordRequestAmino): _211.QueryGetDepositRecordRequest;
            toAmino(message: _211.QueryGetDepositRecordRequest): _211.QueryGetDepositRecordRequestAmino;
            fromAminoMsg(object: _211.QueryGetDepositRecordRequestAminoMsg): _211.QueryGetDepositRecordRequest;
            fromProtoMsg(message: _211.QueryGetDepositRecordRequestProtoMsg): _211.QueryGetDepositRecordRequest;
            toProto(message: _211.QueryGetDepositRecordRequest): Uint8Array;
            toProtoMsg(message: _211.QueryGetDepositRecordRequest): _211.QueryGetDepositRecordRequestProtoMsg;
        };
        QueryGetDepositRecordResponse: {
            typeUrl: string;
            encode(message: _211.QueryGetDepositRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryGetDepositRecordResponse;
            fromPartial(object: Partial<_211.QueryGetDepositRecordResponse>): _211.QueryGetDepositRecordResponse;
            fromAmino(object: _211.QueryGetDepositRecordResponseAmino): _211.QueryGetDepositRecordResponse;
            toAmino(message: _211.QueryGetDepositRecordResponse): _211.QueryGetDepositRecordResponseAmino;
            fromAminoMsg(object: _211.QueryGetDepositRecordResponseAminoMsg): _211.QueryGetDepositRecordResponse;
            fromProtoMsg(message: _211.QueryGetDepositRecordResponseProtoMsg): _211.QueryGetDepositRecordResponse;
            toProto(message: _211.QueryGetDepositRecordResponse): Uint8Array;
            toProtoMsg(message: _211.QueryGetDepositRecordResponse): _211.QueryGetDepositRecordResponseProtoMsg;
        };
        QueryAllDepositRecordRequest: {
            typeUrl: string;
            encode(message: _211.QueryAllDepositRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryAllDepositRecordRequest;
            fromPartial(object: Partial<_211.QueryAllDepositRecordRequest>): _211.QueryAllDepositRecordRequest;
            fromAmino(object: _211.QueryAllDepositRecordRequestAmino): _211.QueryAllDepositRecordRequest;
            toAmino(message: _211.QueryAllDepositRecordRequest): _211.QueryAllDepositRecordRequestAmino;
            fromAminoMsg(object: _211.QueryAllDepositRecordRequestAminoMsg): _211.QueryAllDepositRecordRequest;
            fromProtoMsg(message: _211.QueryAllDepositRecordRequestProtoMsg): _211.QueryAllDepositRecordRequest;
            toProto(message: _211.QueryAllDepositRecordRequest): Uint8Array;
            toProtoMsg(message: _211.QueryAllDepositRecordRequest): _211.QueryAllDepositRecordRequestProtoMsg;
        };
        QueryAllDepositRecordResponse: {
            typeUrl: string;
            encode(message: _211.QueryAllDepositRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryAllDepositRecordResponse;
            fromPartial(object: Partial<_211.QueryAllDepositRecordResponse>): _211.QueryAllDepositRecordResponse;
            fromAmino(object: _211.QueryAllDepositRecordResponseAmino): _211.QueryAllDepositRecordResponse;
            toAmino(message: _211.QueryAllDepositRecordResponse): _211.QueryAllDepositRecordResponseAmino;
            fromAminoMsg(object: _211.QueryAllDepositRecordResponseAminoMsg): _211.QueryAllDepositRecordResponse;
            fromProtoMsg(message: _211.QueryAllDepositRecordResponseProtoMsg): _211.QueryAllDepositRecordResponse;
            toProto(message: _211.QueryAllDepositRecordResponse): Uint8Array;
            toProtoMsg(message: _211.QueryAllDepositRecordResponse): _211.QueryAllDepositRecordResponseProtoMsg;
        };
        QueryDepositRecordByHostRequest: {
            typeUrl: string;
            encode(message: _211.QueryDepositRecordByHostRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryDepositRecordByHostRequest;
            fromPartial(object: Partial<_211.QueryDepositRecordByHostRequest>): _211.QueryDepositRecordByHostRequest;
            fromAmino(object: _211.QueryDepositRecordByHostRequestAmino): _211.QueryDepositRecordByHostRequest;
            toAmino(message: _211.QueryDepositRecordByHostRequest): _211.QueryDepositRecordByHostRequestAmino;
            fromAminoMsg(object: _211.QueryDepositRecordByHostRequestAminoMsg): _211.QueryDepositRecordByHostRequest;
            fromProtoMsg(message: _211.QueryDepositRecordByHostRequestProtoMsg): _211.QueryDepositRecordByHostRequest;
            toProto(message: _211.QueryDepositRecordByHostRequest): Uint8Array;
            toProtoMsg(message: _211.QueryDepositRecordByHostRequest): _211.QueryDepositRecordByHostRequestProtoMsg;
        };
        QueryDepositRecordByHostResponse: {
            typeUrl: string;
            encode(message: _211.QueryDepositRecordByHostResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryDepositRecordByHostResponse;
            fromPartial(object: Partial<_211.QueryDepositRecordByHostResponse>): _211.QueryDepositRecordByHostResponse;
            fromAmino(object: _211.QueryDepositRecordByHostResponseAmino): _211.QueryDepositRecordByHostResponse;
            toAmino(message: _211.QueryDepositRecordByHostResponse): _211.QueryDepositRecordByHostResponseAmino;
            fromAminoMsg(object: _211.QueryDepositRecordByHostResponseAminoMsg): _211.QueryDepositRecordByHostResponse;
            fromProtoMsg(message: _211.QueryDepositRecordByHostResponseProtoMsg): _211.QueryDepositRecordByHostResponse;
            toProto(message: _211.QueryDepositRecordByHostResponse): Uint8Array;
            toProtoMsg(message: _211.QueryDepositRecordByHostResponse): _211.QueryDepositRecordByHostResponseProtoMsg;
        };
        QueryGetUserRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _211.QueryGetUserRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryGetUserRedemptionRecordRequest;
            fromPartial(object: Partial<_211.QueryGetUserRedemptionRecordRequest>): _211.QueryGetUserRedemptionRecordRequest;
            fromAmino(object: _211.QueryGetUserRedemptionRecordRequestAmino): _211.QueryGetUserRedemptionRecordRequest;
            toAmino(message: _211.QueryGetUserRedemptionRecordRequest): _211.QueryGetUserRedemptionRecordRequestAmino;
            fromAminoMsg(object: _211.QueryGetUserRedemptionRecordRequestAminoMsg): _211.QueryGetUserRedemptionRecordRequest;
            fromProtoMsg(message: _211.QueryGetUserRedemptionRecordRequestProtoMsg): _211.QueryGetUserRedemptionRecordRequest;
            toProto(message: _211.QueryGetUserRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _211.QueryGetUserRedemptionRecordRequest): _211.QueryGetUserRedemptionRecordRequestProtoMsg;
        };
        QueryGetUserRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _211.QueryGetUserRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryGetUserRedemptionRecordResponse;
            fromPartial(object: Partial<_211.QueryGetUserRedemptionRecordResponse>): _211.QueryGetUserRedemptionRecordResponse;
            fromAmino(object: _211.QueryGetUserRedemptionRecordResponseAmino): _211.QueryGetUserRedemptionRecordResponse;
            toAmino(message: _211.QueryGetUserRedemptionRecordResponse): _211.QueryGetUserRedemptionRecordResponseAmino;
            fromAminoMsg(object: _211.QueryGetUserRedemptionRecordResponseAminoMsg): _211.QueryGetUserRedemptionRecordResponse;
            fromProtoMsg(message: _211.QueryGetUserRedemptionRecordResponseProtoMsg): _211.QueryGetUserRedemptionRecordResponse;
            toProto(message: _211.QueryGetUserRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _211.QueryGetUserRedemptionRecordResponse): _211.QueryGetUserRedemptionRecordResponseProtoMsg;
        };
        QueryAllUserRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _211.QueryAllUserRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryAllUserRedemptionRecordRequest;
            fromPartial(object: Partial<_211.QueryAllUserRedemptionRecordRequest>): _211.QueryAllUserRedemptionRecordRequest;
            fromAmino(object: _211.QueryAllUserRedemptionRecordRequestAmino): _211.QueryAllUserRedemptionRecordRequest;
            toAmino(message: _211.QueryAllUserRedemptionRecordRequest): _211.QueryAllUserRedemptionRecordRequestAmino;
            fromAminoMsg(object: _211.QueryAllUserRedemptionRecordRequestAminoMsg): _211.QueryAllUserRedemptionRecordRequest;
            fromProtoMsg(message: _211.QueryAllUserRedemptionRecordRequestProtoMsg): _211.QueryAllUserRedemptionRecordRequest;
            toProto(message: _211.QueryAllUserRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _211.QueryAllUserRedemptionRecordRequest): _211.QueryAllUserRedemptionRecordRequestProtoMsg;
        };
        QueryAllUserRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _211.QueryAllUserRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryAllUserRedemptionRecordResponse;
            fromPartial(object: Partial<_211.QueryAllUserRedemptionRecordResponse>): _211.QueryAllUserRedemptionRecordResponse;
            fromAmino(object: _211.QueryAllUserRedemptionRecordResponseAmino): _211.QueryAllUserRedemptionRecordResponse;
            toAmino(message: _211.QueryAllUserRedemptionRecordResponse): _211.QueryAllUserRedemptionRecordResponseAmino;
            fromAminoMsg(object: _211.QueryAllUserRedemptionRecordResponseAminoMsg): _211.QueryAllUserRedemptionRecordResponse;
            fromProtoMsg(message: _211.QueryAllUserRedemptionRecordResponseProtoMsg): _211.QueryAllUserRedemptionRecordResponse;
            toProto(message: _211.QueryAllUserRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _211.QueryAllUserRedemptionRecordResponse): _211.QueryAllUserRedemptionRecordResponseProtoMsg;
        };
        QueryAllUserRedemptionRecordForUserRequest: {
            typeUrl: string;
            encode(message: _211.QueryAllUserRedemptionRecordForUserRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryAllUserRedemptionRecordForUserRequest;
            fromPartial(object: Partial<_211.QueryAllUserRedemptionRecordForUserRequest>): _211.QueryAllUserRedemptionRecordForUserRequest;
            fromAmino(object: _211.QueryAllUserRedemptionRecordForUserRequestAmino): _211.QueryAllUserRedemptionRecordForUserRequest;
            toAmino(message: _211.QueryAllUserRedemptionRecordForUserRequest): _211.QueryAllUserRedemptionRecordForUserRequestAmino;
            fromAminoMsg(object: _211.QueryAllUserRedemptionRecordForUserRequestAminoMsg): _211.QueryAllUserRedemptionRecordForUserRequest;
            fromProtoMsg(message: _211.QueryAllUserRedemptionRecordForUserRequestProtoMsg): _211.QueryAllUserRedemptionRecordForUserRequest;
            toProto(message: _211.QueryAllUserRedemptionRecordForUserRequest): Uint8Array;
            toProtoMsg(message: _211.QueryAllUserRedemptionRecordForUserRequest): _211.QueryAllUserRedemptionRecordForUserRequestProtoMsg;
        };
        QueryAllUserRedemptionRecordForUserResponse: {
            typeUrl: string;
            encode(message: _211.QueryAllUserRedemptionRecordForUserResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryAllUserRedemptionRecordForUserResponse;
            fromPartial(object: Partial<_211.QueryAllUserRedemptionRecordForUserResponse>): _211.QueryAllUserRedemptionRecordForUserResponse;
            fromAmino(object: _211.QueryAllUserRedemptionRecordForUserResponseAmino): _211.QueryAllUserRedemptionRecordForUserResponse;
            toAmino(message: _211.QueryAllUserRedemptionRecordForUserResponse): _211.QueryAllUserRedemptionRecordForUserResponseAmino;
            fromAminoMsg(object: _211.QueryAllUserRedemptionRecordForUserResponseAminoMsg): _211.QueryAllUserRedemptionRecordForUserResponse;
            fromProtoMsg(message: _211.QueryAllUserRedemptionRecordForUserResponseProtoMsg): _211.QueryAllUserRedemptionRecordForUserResponse;
            toProto(message: _211.QueryAllUserRedemptionRecordForUserResponse): Uint8Array;
            toProtoMsg(message: _211.QueryAllUserRedemptionRecordForUserResponse): _211.QueryAllUserRedemptionRecordForUserResponseProtoMsg;
        };
        QueryGetEpochUnbondingRecordRequest: {
            typeUrl: string;
            encode(message: _211.QueryGetEpochUnbondingRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryGetEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_211.QueryGetEpochUnbondingRecordRequest>): _211.QueryGetEpochUnbondingRecordRequest;
            fromAmino(object: _211.QueryGetEpochUnbondingRecordRequestAmino): _211.QueryGetEpochUnbondingRecordRequest;
            toAmino(message: _211.QueryGetEpochUnbondingRecordRequest): _211.QueryGetEpochUnbondingRecordRequestAmino;
            fromAminoMsg(object: _211.QueryGetEpochUnbondingRecordRequestAminoMsg): _211.QueryGetEpochUnbondingRecordRequest;
            fromProtoMsg(message: _211.QueryGetEpochUnbondingRecordRequestProtoMsg): _211.QueryGetEpochUnbondingRecordRequest;
            toProto(message: _211.QueryGetEpochUnbondingRecordRequest): Uint8Array;
            toProtoMsg(message: _211.QueryGetEpochUnbondingRecordRequest): _211.QueryGetEpochUnbondingRecordRequestProtoMsg;
        };
        QueryGetEpochUnbondingRecordResponse: {
            typeUrl: string;
            encode(message: _211.QueryGetEpochUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryGetEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_211.QueryGetEpochUnbondingRecordResponse>): _211.QueryGetEpochUnbondingRecordResponse;
            fromAmino(object: _211.QueryGetEpochUnbondingRecordResponseAmino): _211.QueryGetEpochUnbondingRecordResponse;
            toAmino(message: _211.QueryGetEpochUnbondingRecordResponse): _211.QueryGetEpochUnbondingRecordResponseAmino;
            fromAminoMsg(object: _211.QueryGetEpochUnbondingRecordResponseAminoMsg): _211.QueryGetEpochUnbondingRecordResponse;
            fromProtoMsg(message: _211.QueryGetEpochUnbondingRecordResponseProtoMsg): _211.QueryGetEpochUnbondingRecordResponse;
            toProto(message: _211.QueryGetEpochUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _211.QueryGetEpochUnbondingRecordResponse): _211.QueryGetEpochUnbondingRecordResponseProtoMsg;
        };
        QueryAllEpochUnbondingRecordRequest: {
            typeUrl: string;
            encode(message: _211.QueryAllEpochUnbondingRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryAllEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_211.QueryAllEpochUnbondingRecordRequest>): _211.QueryAllEpochUnbondingRecordRequest;
            fromAmino(object: _211.QueryAllEpochUnbondingRecordRequestAmino): _211.QueryAllEpochUnbondingRecordRequest;
            toAmino(message: _211.QueryAllEpochUnbondingRecordRequest): _211.QueryAllEpochUnbondingRecordRequestAmino;
            fromAminoMsg(object: _211.QueryAllEpochUnbondingRecordRequestAminoMsg): _211.QueryAllEpochUnbondingRecordRequest;
            fromProtoMsg(message: _211.QueryAllEpochUnbondingRecordRequestProtoMsg): _211.QueryAllEpochUnbondingRecordRequest;
            toProto(message: _211.QueryAllEpochUnbondingRecordRequest): Uint8Array;
            toProtoMsg(message: _211.QueryAllEpochUnbondingRecordRequest): _211.QueryAllEpochUnbondingRecordRequestProtoMsg;
        };
        QueryAllEpochUnbondingRecordResponse: {
            typeUrl: string;
            encode(message: _211.QueryAllEpochUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryAllEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_211.QueryAllEpochUnbondingRecordResponse>): _211.QueryAllEpochUnbondingRecordResponse;
            fromAmino(object: _211.QueryAllEpochUnbondingRecordResponseAmino): _211.QueryAllEpochUnbondingRecordResponse;
            toAmino(message: _211.QueryAllEpochUnbondingRecordResponse): _211.QueryAllEpochUnbondingRecordResponseAmino;
            fromAminoMsg(object: _211.QueryAllEpochUnbondingRecordResponseAminoMsg): _211.QueryAllEpochUnbondingRecordResponse;
            fromProtoMsg(message: _211.QueryAllEpochUnbondingRecordResponseProtoMsg): _211.QueryAllEpochUnbondingRecordResponse;
            toProto(message: _211.QueryAllEpochUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _211.QueryAllEpochUnbondingRecordResponse): _211.QueryAllEpochUnbondingRecordResponseProtoMsg;
        };
        QueryLSMDepositRequest: {
            typeUrl: string;
            encode(message: _211.QueryLSMDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryLSMDepositRequest;
            fromPartial(object: Partial<_211.QueryLSMDepositRequest>): _211.QueryLSMDepositRequest;
            fromAmino(object: _211.QueryLSMDepositRequestAmino): _211.QueryLSMDepositRequest;
            toAmino(message: _211.QueryLSMDepositRequest): _211.QueryLSMDepositRequestAmino;
            fromAminoMsg(object: _211.QueryLSMDepositRequestAminoMsg): _211.QueryLSMDepositRequest;
            fromProtoMsg(message: _211.QueryLSMDepositRequestProtoMsg): _211.QueryLSMDepositRequest;
            toProto(message: _211.QueryLSMDepositRequest): Uint8Array;
            toProtoMsg(message: _211.QueryLSMDepositRequest): _211.QueryLSMDepositRequestProtoMsg;
        };
        QueryLSMDepositResponse: {
            typeUrl: string;
            encode(message: _211.QueryLSMDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryLSMDepositResponse;
            fromPartial(object: Partial<_211.QueryLSMDepositResponse>): _211.QueryLSMDepositResponse;
            fromAmino(object: _211.QueryLSMDepositResponseAmino): _211.QueryLSMDepositResponse;
            toAmino(message: _211.QueryLSMDepositResponse): _211.QueryLSMDepositResponseAmino;
            fromAminoMsg(object: _211.QueryLSMDepositResponseAminoMsg): _211.QueryLSMDepositResponse;
            fromProtoMsg(message: _211.QueryLSMDepositResponseProtoMsg): _211.QueryLSMDepositResponse;
            toProto(message: _211.QueryLSMDepositResponse): Uint8Array;
            toProtoMsg(message: _211.QueryLSMDepositResponse): _211.QueryLSMDepositResponseProtoMsg;
        };
        QueryLSMDepositsRequest: {
            typeUrl: string;
            encode(message: _211.QueryLSMDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryLSMDepositsRequest;
            fromPartial(object: Partial<_211.QueryLSMDepositsRequest>): _211.QueryLSMDepositsRequest;
            fromAmino(object: _211.QueryLSMDepositsRequestAmino): _211.QueryLSMDepositsRequest;
            toAmino(message: _211.QueryLSMDepositsRequest): _211.QueryLSMDepositsRequestAmino;
            fromAminoMsg(object: _211.QueryLSMDepositsRequestAminoMsg): _211.QueryLSMDepositsRequest;
            fromProtoMsg(message: _211.QueryLSMDepositsRequestProtoMsg): _211.QueryLSMDepositsRequest;
            toProto(message: _211.QueryLSMDepositsRequest): Uint8Array;
            toProtoMsg(message: _211.QueryLSMDepositsRequest): _211.QueryLSMDepositsRequestProtoMsg;
        };
        QueryLSMDepositsResponse: {
            typeUrl: string;
            encode(message: _211.QueryLSMDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryLSMDepositsResponse;
            fromPartial(object: Partial<_211.QueryLSMDepositsResponse>): _211.QueryLSMDepositsResponse;
            fromAmino(object: _211.QueryLSMDepositsResponseAmino): _211.QueryLSMDepositsResponse;
            toAmino(message: _211.QueryLSMDepositsResponse): _211.QueryLSMDepositsResponseAmino;
            fromAminoMsg(object: _211.QueryLSMDepositsResponseAminoMsg): _211.QueryLSMDepositsResponse;
            fromProtoMsg(message: _211.QueryLSMDepositsResponseProtoMsg): _211.QueryLSMDepositsResponse;
            toProto(message: _211.QueryLSMDepositsResponse): Uint8Array;
            toProtoMsg(message: _211.QueryLSMDepositsResponse): _211.QueryLSMDepositsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _210.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.Params;
            fromPartial(_: Partial<_210.Params>): _210.Params;
            fromAmino(_: _210.ParamsAmino): _210.Params;
            toAmino(_: _210.Params): _210.ParamsAmino;
            fromAminoMsg(object: _210.ParamsAminoMsg): _210.Params;
            fromProtoMsg(message: _210.ParamsProtoMsg): _210.Params;
            toProto(message: _210.Params): Uint8Array;
            toProtoMsg(message: _210.Params): _210.ParamsProtoMsg;
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
        TransferCallback: {
            typeUrl: string;
            encode(message: _208.TransferCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.TransferCallback;
            fromPartial(object: Partial<_208.TransferCallback>): _208.TransferCallback;
            fromAmino(object: _208.TransferCallbackAmino): _208.TransferCallback;
            toAmino(message: _208.TransferCallback): _208.TransferCallbackAmino;
            fromAminoMsg(object: _208.TransferCallbackAminoMsg): _208.TransferCallback;
            fromProtoMsg(message: _208.TransferCallbackProtoMsg): _208.TransferCallback;
            toProto(message: _208.TransferCallback): Uint8Array;
            toProtoMsg(message: _208.TransferCallback): _208.TransferCallbackProtoMsg;
        };
        TransferLSMTokenCallback: {
            typeUrl: string;
            encode(message: _208.TransferLSMTokenCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.TransferLSMTokenCallback;
            fromPartial(object: Partial<_208.TransferLSMTokenCallback>): _208.TransferLSMTokenCallback;
            fromAmino(object: _208.TransferLSMTokenCallbackAmino): _208.TransferLSMTokenCallback;
            toAmino(message: _208.TransferLSMTokenCallback): _208.TransferLSMTokenCallbackAmino;
            fromAminoMsg(object: _208.TransferLSMTokenCallbackAminoMsg): _208.TransferLSMTokenCallback;
            fromProtoMsg(message: _208.TransferLSMTokenCallbackProtoMsg): _208.TransferLSMTokenCallback;
            toProto(message: _208.TransferLSMTokenCallback): Uint8Array;
            toProtoMsg(message: _208.TransferLSMTokenCallback): _208.TransferLSMTokenCallbackProtoMsg;
        };
    };
    const stakedym: {
        MsgClientImpl: typeof _374.MsgClientImpl;
        QueryClientImpl: typeof _367.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            hostZone(request?: _214.QueryHostZoneRequest): Promise<_214.QueryHostZoneResponse>;
            delegationRecords(request: _214.QueryDelegationRecordsRequest): Promise<_214.QueryDelegationRecordsResponse>;
            unbondingRecords(request: _214.QueryUnbondingRecordsRequest): Promise<_214.QueryUnbondingRecordsResponse>;
            redemptionRecord(request: _214.QueryRedemptionRecordRequest): Promise<_214.QueryRedemptionRecordResponse>;
            redemptionRecords(request: _214.QueryRedemptionRecordsRequest): Promise<_214.QueryRedemptionRecordsResponse>;
            slashRecords(request?: _214.QuerySlashRecordsRequest): Promise<_214.QuerySlashRecordsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _216.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _216.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmDelegation(value: _216.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUndelegation(value: _216.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUnbondedTokenSweep(value: _216.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                adjustDelegatedBalance(value: _216.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _216.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _216.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                refreshRedemptionRate(value: _216.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteDelegationRecord(value: _216.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteUnbondingRecord(value: _216.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteRedemptionRecord(value: _216.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOperatorAddress(value: _216.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _216.MsgLiquidStake): {
                    typeUrl: string;
                    value: _216.MsgLiquidStake;
                };
                redeemStake(value: _216.MsgRedeemStake): {
                    typeUrl: string;
                    value: _216.MsgRedeemStake;
                };
                confirmDelegation(value: _216.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _216.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _216.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _216.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _216.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _216.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _216.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _216.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _216.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _216.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _216.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _216.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _216.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _216.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _216.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _216.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _216.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _216.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _216.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _216.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _216.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _216.MsgSetOperatorAddress;
                };
            };
            fromPartial: {
                liquidStake(value: _216.MsgLiquidStake): {
                    typeUrl: string;
                    value: _216.MsgLiquidStake;
                };
                redeemStake(value: _216.MsgRedeemStake): {
                    typeUrl: string;
                    value: _216.MsgRedeemStake;
                };
                confirmDelegation(value: _216.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _216.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _216.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _216.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _216.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _216.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _216.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _216.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _216.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _216.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _216.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _216.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _216.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _216.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _216.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _216.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _216.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _216.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _216.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _216.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _216.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _216.MsgSetOperatorAddress;
                };
            };
        };
        AminoConverter: {
            "/stride.stakedym.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _216.MsgLiquidStake) => _216.MsgLiquidStakeAmino;
                fromAmino: (object: _216.MsgLiquidStakeAmino) => _216.MsgLiquidStake;
            };
            "/stride.stakedym.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _216.MsgRedeemStake) => _216.MsgRedeemStakeAmino;
                fromAmino: (object: _216.MsgRedeemStakeAmino) => _216.MsgRedeemStake;
            };
            "/stride.stakedym.MsgConfirmDelegation": {
                aminoType: string;
                toAmino: (message: _216.MsgConfirmDelegation) => _216.MsgConfirmDelegationAmino;
                fromAmino: (object: _216.MsgConfirmDelegationAmino) => _216.MsgConfirmDelegation;
            };
            "/stride.stakedym.MsgConfirmUndelegation": {
                aminoType: string;
                toAmino: (message: _216.MsgConfirmUndelegation) => _216.MsgConfirmUndelegationAmino;
                fromAmino: (object: _216.MsgConfirmUndelegationAmino) => _216.MsgConfirmUndelegation;
            };
            "/stride.stakedym.MsgConfirmUnbondedTokenSweep": {
                aminoType: string;
                toAmino: (message: _216.MsgConfirmUnbondedTokenSweep) => _216.MsgConfirmUnbondedTokenSweepAmino;
                fromAmino: (object: _216.MsgConfirmUnbondedTokenSweepAmino) => _216.MsgConfirmUnbondedTokenSweep;
            };
            "/stride.stakedym.MsgAdjustDelegatedBalance": {
                aminoType: string;
                toAmino: (message: _216.MsgAdjustDelegatedBalance) => _216.MsgAdjustDelegatedBalanceAmino;
                fromAmino: (object: _216.MsgAdjustDelegatedBalanceAmino) => _216.MsgAdjustDelegatedBalance;
            };
            "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _216.MsgUpdateInnerRedemptionRateBounds) => _216.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _216.MsgUpdateInnerRedemptionRateBoundsAmino) => _216.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.stakedym.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _216.MsgResumeHostZone) => _216.MsgResumeHostZoneAmino;
                fromAmino: (object: _216.MsgResumeHostZoneAmino) => _216.MsgResumeHostZone;
            };
            "/stride.stakedym.MsgRefreshRedemptionRate": {
                aminoType: string;
                toAmino: (message: _216.MsgRefreshRedemptionRate) => _216.MsgRefreshRedemptionRateAmino;
                fromAmino: (object: _216.MsgRefreshRedemptionRateAmino) => _216.MsgRefreshRedemptionRate;
            };
            "/stride.stakedym.MsgOverwriteDelegationRecord": {
                aminoType: string;
                toAmino: (message: _216.MsgOverwriteDelegationRecord) => _216.MsgOverwriteDelegationRecordAmino;
                fromAmino: (object: _216.MsgOverwriteDelegationRecordAmino) => _216.MsgOverwriteDelegationRecord;
            };
            "/stride.stakedym.MsgOverwriteUnbondingRecord": {
                aminoType: string;
                toAmino: (message: _216.MsgOverwriteUnbondingRecord) => _216.MsgOverwriteUnbondingRecordAmino;
                fromAmino: (object: _216.MsgOverwriteUnbondingRecordAmino) => _216.MsgOverwriteUnbondingRecord;
            };
            "/stride.stakedym.MsgOverwriteRedemptionRecord": {
                aminoType: string;
                toAmino: (message: _216.MsgOverwriteRedemptionRecord) => _216.MsgOverwriteRedemptionRecordAmino;
                fromAmino: (object: _216.MsgOverwriteRedemptionRecordAmino) => _216.MsgOverwriteRedemptionRecord;
            };
            "/stride.stakedym.MsgSetOperatorAddress": {
                aminoType: string;
                toAmino: (message: _216.MsgSetOperatorAddress) => _216.MsgSetOperatorAddressAmino;
                fromAmino: (object: _216.MsgSetOperatorAddressAmino) => _216.MsgSetOperatorAddress;
            };
        };
        overwritableRecordTypeFromJSON(object: any): _216.OverwritableRecordType;
        overwritableRecordTypeToJSON(object: _216.OverwritableRecordType): string;
        OverwritableRecordType: typeof _216.OverwritableRecordType;
        OverwritableRecordTypeSDKType: typeof _216.OverwritableRecordType;
        OverwritableRecordTypeAmino: typeof _216.OverwritableRecordType;
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _216.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgLiquidStake;
            fromPartial(object: Partial<_216.MsgLiquidStake>): _216.MsgLiquidStake;
            fromAmino(object: _216.MsgLiquidStakeAmino): _216.MsgLiquidStake;
            toAmino(message: _216.MsgLiquidStake): _216.MsgLiquidStakeAmino;
            fromAminoMsg(object: _216.MsgLiquidStakeAminoMsg): _216.MsgLiquidStake;
            toAminoMsg(message: _216.MsgLiquidStake): _216.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _216.MsgLiquidStakeProtoMsg): _216.MsgLiquidStake;
            toProto(message: _216.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _216.MsgLiquidStake): _216.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _216.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_216.MsgLiquidStakeResponse>): _216.MsgLiquidStakeResponse;
            fromAmino(object: _216.MsgLiquidStakeResponseAmino): _216.MsgLiquidStakeResponse;
            toAmino(message: _216.MsgLiquidStakeResponse): _216.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _216.MsgLiquidStakeResponseAminoMsg): _216.MsgLiquidStakeResponse;
            fromProtoMsg(message: _216.MsgLiquidStakeResponseProtoMsg): _216.MsgLiquidStakeResponse;
            toProto(message: _216.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _216.MsgLiquidStakeResponse): _216.MsgLiquidStakeResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _216.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgRedeemStake;
            fromPartial(object: Partial<_216.MsgRedeemStake>): _216.MsgRedeemStake;
            fromAmino(object: _216.MsgRedeemStakeAmino): _216.MsgRedeemStake;
            toAmino(message: _216.MsgRedeemStake): _216.MsgRedeemStakeAmino;
            fromAminoMsg(object: _216.MsgRedeemStakeAminoMsg): _216.MsgRedeemStake;
            toAminoMsg(message: _216.MsgRedeemStake): _216.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _216.MsgRedeemStakeProtoMsg): _216.MsgRedeemStake;
            toProto(message: _216.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _216.MsgRedeemStake): _216.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(message: _216.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgRedeemStakeResponse;
            fromPartial(object: Partial<_216.MsgRedeemStakeResponse>): _216.MsgRedeemStakeResponse;
            fromAmino(object: _216.MsgRedeemStakeResponseAmino): _216.MsgRedeemStakeResponse;
            toAmino(message: _216.MsgRedeemStakeResponse): _216.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _216.MsgRedeemStakeResponseAminoMsg): _216.MsgRedeemStakeResponse;
            fromProtoMsg(message: _216.MsgRedeemStakeResponseProtoMsg): _216.MsgRedeemStakeResponse;
            toProto(message: _216.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _216.MsgRedeemStakeResponse): _216.MsgRedeemStakeResponseProtoMsg;
        };
        MsgConfirmDelegation: {
            typeUrl: string;
            encode(message: _216.MsgConfirmDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgConfirmDelegation;
            fromPartial(object: Partial<_216.MsgConfirmDelegation>): _216.MsgConfirmDelegation;
            fromAmino(object: _216.MsgConfirmDelegationAmino): _216.MsgConfirmDelegation;
            toAmino(message: _216.MsgConfirmDelegation): _216.MsgConfirmDelegationAmino;
            fromAminoMsg(object: _216.MsgConfirmDelegationAminoMsg): _216.MsgConfirmDelegation;
            toAminoMsg(message: _216.MsgConfirmDelegation): _216.MsgConfirmDelegationAminoMsg;
            fromProtoMsg(message: _216.MsgConfirmDelegationProtoMsg): _216.MsgConfirmDelegation;
            toProto(message: _216.MsgConfirmDelegation): Uint8Array;
            toProtoMsg(message: _216.MsgConfirmDelegation): _216.MsgConfirmDelegationProtoMsg;
        };
        MsgConfirmDelegationResponse: {
            typeUrl: string;
            encode(_: _216.MsgConfirmDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgConfirmDelegationResponse;
            fromPartial(_: Partial<_216.MsgConfirmDelegationResponse>): _216.MsgConfirmDelegationResponse;
            fromAmino(_: _216.MsgConfirmDelegationResponseAmino): _216.MsgConfirmDelegationResponse;
            toAmino(_: _216.MsgConfirmDelegationResponse): _216.MsgConfirmDelegationResponseAmino;
            fromAminoMsg(object: _216.MsgConfirmDelegationResponseAminoMsg): _216.MsgConfirmDelegationResponse;
            fromProtoMsg(message: _216.MsgConfirmDelegationResponseProtoMsg): _216.MsgConfirmDelegationResponse;
            toProto(message: _216.MsgConfirmDelegationResponse): Uint8Array;
            toProtoMsg(message: _216.MsgConfirmDelegationResponse): _216.MsgConfirmDelegationResponseProtoMsg;
        };
        MsgConfirmUndelegation: {
            typeUrl: string;
            encode(message: _216.MsgConfirmUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgConfirmUndelegation;
            fromPartial(object: Partial<_216.MsgConfirmUndelegation>): _216.MsgConfirmUndelegation;
            fromAmino(object: _216.MsgConfirmUndelegationAmino): _216.MsgConfirmUndelegation;
            toAmino(message: _216.MsgConfirmUndelegation): _216.MsgConfirmUndelegationAmino;
            fromAminoMsg(object: _216.MsgConfirmUndelegationAminoMsg): _216.MsgConfirmUndelegation;
            toAminoMsg(message: _216.MsgConfirmUndelegation): _216.MsgConfirmUndelegationAminoMsg;
            fromProtoMsg(message: _216.MsgConfirmUndelegationProtoMsg): _216.MsgConfirmUndelegation;
            toProto(message: _216.MsgConfirmUndelegation): Uint8Array;
            toProtoMsg(message: _216.MsgConfirmUndelegation): _216.MsgConfirmUndelegationProtoMsg;
        };
        MsgConfirmUndelegationResponse: {
            typeUrl: string;
            encode(_: _216.MsgConfirmUndelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgConfirmUndelegationResponse;
            fromPartial(_: Partial<_216.MsgConfirmUndelegationResponse>): _216.MsgConfirmUndelegationResponse;
            fromAmino(_: _216.MsgConfirmUndelegationResponseAmino): _216.MsgConfirmUndelegationResponse;
            toAmino(_: _216.MsgConfirmUndelegationResponse): _216.MsgConfirmUndelegationResponseAmino;
            fromAminoMsg(object: _216.MsgConfirmUndelegationResponseAminoMsg): _216.MsgConfirmUndelegationResponse;
            fromProtoMsg(message: _216.MsgConfirmUndelegationResponseProtoMsg): _216.MsgConfirmUndelegationResponse;
            toProto(message: _216.MsgConfirmUndelegationResponse): Uint8Array;
            toProtoMsg(message: _216.MsgConfirmUndelegationResponse): _216.MsgConfirmUndelegationResponseProtoMsg;
        };
        MsgConfirmUnbondedTokenSweep: {
            typeUrl: string;
            encode(message: _216.MsgConfirmUnbondedTokenSweep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgConfirmUnbondedTokenSweep;
            fromPartial(object: Partial<_216.MsgConfirmUnbondedTokenSweep>): _216.MsgConfirmUnbondedTokenSweep;
            fromAmino(object: _216.MsgConfirmUnbondedTokenSweepAmino): _216.MsgConfirmUnbondedTokenSweep;
            toAmino(message: _216.MsgConfirmUnbondedTokenSweep): _216.MsgConfirmUnbondedTokenSweepAmino;
            fromAminoMsg(object: _216.MsgConfirmUnbondedTokenSweepAminoMsg): _216.MsgConfirmUnbondedTokenSweep;
            toAminoMsg(message: _216.MsgConfirmUnbondedTokenSweep): _216.MsgConfirmUnbondedTokenSweepAminoMsg;
            fromProtoMsg(message: _216.MsgConfirmUnbondedTokenSweepProtoMsg): _216.MsgConfirmUnbondedTokenSweep;
            toProto(message: _216.MsgConfirmUnbondedTokenSweep): Uint8Array;
            toProtoMsg(message: _216.MsgConfirmUnbondedTokenSweep): _216.MsgConfirmUnbondedTokenSweepProtoMsg;
        };
        MsgConfirmUnbondedTokenSweepResponse: {
            typeUrl: string;
            encode(_: _216.MsgConfirmUnbondedTokenSweepResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgConfirmUnbondedTokenSweepResponse;
            fromPartial(_: Partial<_216.MsgConfirmUnbondedTokenSweepResponse>): _216.MsgConfirmUnbondedTokenSweepResponse;
            fromAmino(_: _216.MsgConfirmUnbondedTokenSweepResponseAmino): _216.MsgConfirmUnbondedTokenSweepResponse;
            toAmino(_: _216.MsgConfirmUnbondedTokenSweepResponse): _216.MsgConfirmUnbondedTokenSweepResponseAmino;
            fromAminoMsg(object: _216.MsgConfirmUnbondedTokenSweepResponseAminoMsg): _216.MsgConfirmUnbondedTokenSweepResponse;
            fromProtoMsg(message: _216.MsgConfirmUnbondedTokenSweepResponseProtoMsg): _216.MsgConfirmUnbondedTokenSweepResponse;
            toProto(message: _216.MsgConfirmUnbondedTokenSweepResponse): Uint8Array;
            toProtoMsg(message: _216.MsgConfirmUnbondedTokenSweepResponse): _216.MsgConfirmUnbondedTokenSweepResponseProtoMsg;
        };
        MsgAdjustDelegatedBalance: {
            typeUrl: string;
            encode(message: _216.MsgAdjustDelegatedBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgAdjustDelegatedBalance;
            fromPartial(object: Partial<_216.MsgAdjustDelegatedBalance>): _216.MsgAdjustDelegatedBalance;
            fromAmino(object: _216.MsgAdjustDelegatedBalanceAmino): _216.MsgAdjustDelegatedBalance;
            toAmino(message: _216.MsgAdjustDelegatedBalance): _216.MsgAdjustDelegatedBalanceAmino;
            fromAminoMsg(object: _216.MsgAdjustDelegatedBalanceAminoMsg): _216.MsgAdjustDelegatedBalance;
            toAminoMsg(message: _216.MsgAdjustDelegatedBalance): _216.MsgAdjustDelegatedBalanceAminoMsg;
            fromProtoMsg(message: _216.MsgAdjustDelegatedBalanceProtoMsg): _216.MsgAdjustDelegatedBalance;
            toProto(message: _216.MsgAdjustDelegatedBalance): Uint8Array;
            toProtoMsg(message: _216.MsgAdjustDelegatedBalance): _216.MsgAdjustDelegatedBalanceProtoMsg;
        };
        MsgAdjustDelegatedBalanceResponse: {
            typeUrl: string;
            encode(_: _216.MsgAdjustDelegatedBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgAdjustDelegatedBalanceResponse;
            fromPartial(_: Partial<_216.MsgAdjustDelegatedBalanceResponse>): _216.MsgAdjustDelegatedBalanceResponse;
            fromAmino(_: _216.MsgAdjustDelegatedBalanceResponseAmino): _216.MsgAdjustDelegatedBalanceResponse;
            toAmino(_: _216.MsgAdjustDelegatedBalanceResponse): _216.MsgAdjustDelegatedBalanceResponseAmino;
            fromAminoMsg(object: _216.MsgAdjustDelegatedBalanceResponseAminoMsg): _216.MsgAdjustDelegatedBalanceResponse;
            fromProtoMsg(message: _216.MsgAdjustDelegatedBalanceResponseProtoMsg): _216.MsgAdjustDelegatedBalanceResponse;
            toProto(message: _216.MsgAdjustDelegatedBalanceResponse): Uint8Array;
            toProtoMsg(message: _216.MsgAdjustDelegatedBalanceResponse): _216.MsgAdjustDelegatedBalanceResponseProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _216.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_216.MsgUpdateInnerRedemptionRateBounds>): _216.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _216.MsgUpdateInnerRedemptionRateBoundsAmino): _216.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _216.MsgUpdateInnerRedemptionRateBounds): _216.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _216.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _216.MsgUpdateInnerRedemptionRateBounds;
            toAminoMsg(message: _216.MsgUpdateInnerRedemptionRateBounds): _216.MsgUpdateInnerRedemptionRateBoundsAminoMsg;
            fromProtoMsg(message: _216.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _216.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _216.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _216.MsgUpdateInnerRedemptionRateBounds): _216.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _216.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_216.MsgUpdateInnerRedemptionRateBoundsResponse>): _216.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _216.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _216.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _216.MsgUpdateInnerRedemptionRateBoundsResponse): _216.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _216.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _216.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _216.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _216.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _216.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _216.MsgUpdateInnerRedemptionRateBoundsResponse): _216.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _216.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgResumeHostZone;
            fromPartial(object: Partial<_216.MsgResumeHostZone>): _216.MsgResumeHostZone;
            fromAmino(object: _216.MsgResumeHostZoneAmino): _216.MsgResumeHostZone;
            toAmino(message: _216.MsgResumeHostZone): _216.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _216.MsgResumeHostZoneAminoMsg): _216.MsgResumeHostZone;
            toAminoMsg(message: _216.MsgResumeHostZone): _216.MsgResumeHostZoneAminoMsg;
            fromProtoMsg(message: _216.MsgResumeHostZoneProtoMsg): _216.MsgResumeHostZone;
            toProto(message: _216.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _216.MsgResumeHostZone): _216.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _216.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_216.MsgResumeHostZoneResponse>): _216.MsgResumeHostZoneResponse;
            fromAmino(_: _216.MsgResumeHostZoneResponseAmino): _216.MsgResumeHostZoneResponse;
            toAmino(_: _216.MsgResumeHostZoneResponse): _216.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _216.MsgResumeHostZoneResponseAminoMsg): _216.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _216.MsgResumeHostZoneResponseProtoMsg): _216.MsgResumeHostZoneResponse;
            toProto(message: _216.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _216.MsgResumeHostZoneResponse): _216.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgRefreshRedemptionRate: {
            typeUrl: string;
            encode(message: _216.MsgRefreshRedemptionRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgRefreshRedemptionRate;
            fromPartial(object: Partial<_216.MsgRefreshRedemptionRate>): _216.MsgRefreshRedemptionRate;
            fromAmino(object: _216.MsgRefreshRedemptionRateAmino): _216.MsgRefreshRedemptionRate;
            toAmino(message: _216.MsgRefreshRedemptionRate): _216.MsgRefreshRedemptionRateAmino;
            fromAminoMsg(object: _216.MsgRefreshRedemptionRateAminoMsg): _216.MsgRefreshRedemptionRate;
            toAminoMsg(message: _216.MsgRefreshRedemptionRate): _216.MsgRefreshRedemptionRateAminoMsg;
            fromProtoMsg(message: _216.MsgRefreshRedemptionRateProtoMsg): _216.MsgRefreshRedemptionRate;
            toProto(message: _216.MsgRefreshRedemptionRate): Uint8Array;
            toProtoMsg(message: _216.MsgRefreshRedemptionRate): _216.MsgRefreshRedemptionRateProtoMsg;
        };
        MsgRefreshRedemptionRateResponse: {
            typeUrl: string;
            encode(_: _216.MsgRefreshRedemptionRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgRefreshRedemptionRateResponse;
            fromPartial(_: Partial<_216.MsgRefreshRedemptionRateResponse>): _216.MsgRefreshRedemptionRateResponse;
            fromAmino(_: _216.MsgRefreshRedemptionRateResponseAmino): _216.MsgRefreshRedemptionRateResponse;
            toAmino(_: _216.MsgRefreshRedemptionRateResponse): _216.MsgRefreshRedemptionRateResponseAmino;
            fromAminoMsg(object: _216.MsgRefreshRedemptionRateResponseAminoMsg): _216.MsgRefreshRedemptionRateResponse;
            fromProtoMsg(message: _216.MsgRefreshRedemptionRateResponseProtoMsg): _216.MsgRefreshRedemptionRateResponse;
            toProto(message: _216.MsgRefreshRedemptionRateResponse): Uint8Array;
            toProtoMsg(message: _216.MsgRefreshRedemptionRateResponse): _216.MsgRefreshRedemptionRateResponseProtoMsg;
        };
        MsgOverwriteDelegationRecord: {
            typeUrl: string;
            encode(message: _216.MsgOverwriteDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgOverwriteDelegationRecord;
            fromPartial(object: Partial<_216.MsgOverwriteDelegationRecord>): _216.MsgOverwriteDelegationRecord;
            fromAmino(object: _216.MsgOverwriteDelegationRecordAmino): _216.MsgOverwriteDelegationRecord;
            toAmino(message: _216.MsgOverwriteDelegationRecord): _216.MsgOverwriteDelegationRecordAmino;
            fromAminoMsg(object: _216.MsgOverwriteDelegationRecordAminoMsg): _216.MsgOverwriteDelegationRecord;
            toAminoMsg(message: _216.MsgOverwriteDelegationRecord): _216.MsgOverwriteDelegationRecordAminoMsg;
            fromProtoMsg(message: _216.MsgOverwriteDelegationRecordProtoMsg): _216.MsgOverwriteDelegationRecord;
            toProto(message: _216.MsgOverwriteDelegationRecord): Uint8Array;
            toProtoMsg(message: _216.MsgOverwriteDelegationRecord): _216.MsgOverwriteDelegationRecordProtoMsg;
        };
        MsgOverwriteDelegationRecordResponse: {
            typeUrl: string;
            encode(_: _216.MsgOverwriteDelegationRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgOverwriteDelegationRecordResponse;
            fromPartial(_: Partial<_216.MsgOverwriteDelegationRecordResponse>): _216.MsgOverwriteDelegationRecordResponse;
            fromAmino(_: _216.MsgOverwriteDelegationRecordResponseAmino): _216.MsgOverwriteDelegationRecordResponse;
            toAmino(_: _216.MsgOverwriteDelegationRecordResponse): _216.MsgOverwriteDelegationRecordResponseAmino;
            fromAminoMsg(object: _216.MsgOverwriteDelegationRecordResponseAminoMsg): _216.MsgOverwriteDelegationRecordResponse;
            fromProtoMsg(message: _216.MsgOverwriteDelegationRecordResponseProtoMsg): _216.MsgOverwriteDelegationRecordResponse;
            toProto(message: _216.MsgOverwriteDelegationRecordResponse): Uint8Array;
            toProtoMsg(message: _216.MsgOverwriteDelegationRecordResponse): _216.MsgOverwriteDelegationRecordResponseProtoMsg;
        };
        MsgOverwriteUnbondingRecord: {
            typeUrl: string;
            encode(message: _216.MsgOverwriteUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgOverwriteUnbondingRecord;
            fromPartial(object: Partial<_216.MsgOverwriteUnbondingRecord>): _216.MsgOverwriteUnbondingRecord;
            fromAmino(object: _216.MsgOverwriteUnbondingRecordAmino): _216.MsgOverwriteUnbondingRecord;
            toAmino(message: _216.MsgOverwriteUnbondingRecord): _216.MsgOverwriteUnbondingRecordAmino;
            fromAminoMsg(object: _216.MsgOverwriteUnbondingRecordAminoMsg): _216.MsgOverwriteUnbondingRecord;
            toAminoMsg(message: _216.MsgOverwriteUnbondingRecord): _216.MsgOverwriteUnbondingRecordAminoMsg;
            fromProtoMsg(message: _216.MsgOverwriteUnbondingRecordProtoMsg): _216.MsgOverwriteUnbondingRecord;
            toProto(message: _216.MsgOverwriteUnbondingRecord): Uint8Array;
            toProtoMsg(message: _216.MsgOverwriteUnbondingRecord): _216.MsgOverwriteUnbondingRecordProtoMsg;
        };
        MsgOverwriteUnbondingRecordResponse: {
            typeUrl: string;
            encode(_: _216.MsgOverwriteUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgOverwriteUnbondingRecordResponse;
            fromPartial(_: Partial<_216.MsgOverwriteUnbondingRecordResponse>): _216.MsgOverwriteUnbondingRecordResponse;
            fromAmino(_: _216.MsgOverwriteUnbondingRecordResponseAmino): _216.MsgOverwriteUnbondingRecordResponse;
            toAmino(_: _216.MsgOverwriteUnbondingRecordResponse): _216.MsgOverwriteUnbondingRecordResponseAmino;
            fromAminoMsg(object: _216.MsgOverwriteUnbondingRecordResponseAminoMsg): _216.MsgOverwriteUnbondingRecordResponse;
            fromProtoMsg(message: _216.MsgOverwriteUnbondingRecordResponseProtoMsg): _216.MsgOverwriteUnbondingRecordResponse;
            toProto(message: _216.MsgOverwriteUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _216.MsgOverwriteUnbondingRecordResponse): _216.MsgOverwriteUnbondingRecordResponseProtoMsg;
        };
        MsgOverwriteRedemptionRecord: {
            typeUrl: string;
            encode(message: _216.MsgOverwriteRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgOverwriteRedemptionRecord;
            fromPartial(object: Partial<_216.MsgOverwriteRedemptionRecord>): _216.MsgOverwriteRedemptionRecord;
            fromAmino(object: _216.MsgOverwriteRedemptionRecordAmino): _216.MsgOverwriteRedemptionRecord;
            toAmino(message: _216.MsgOverwriteRedemptionRecord): _216.MsgOverwriteRedemptionRecordAmino;
            fromAminoMsg(object: _216.MsgOverwriteRedemptionRecordAminoMsg): _216.MsgOverwriteRedemptionRecord;
            toAminoMsg(message: _216.MsgOverwriteRedemptionRecord): _216.MsgOverwriteRedemptionRecordAminoMsg;
            fromProtoMsg(message: _216.MsgOverwriteRedemptionRecordProtoMsg): _216.MsgOverwriteRedemptionRecord;
            toProto(message: _216.MsgOverwriteRedemptionRecord): Uint8Array;
            toProtoMsg(message: _216.MsgOverwriteRedemptionRecord): _216.MsgOverwriteRedemptionRecordProtoMsg;
        };
        MsgOverwriteRedemptionRecordResponse: {
            typeUrl: string;
            encode(_: _216.MsgOverwriteRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgOverwriteRedemptionRecordResponse;
            fromPartial(_: Partial<_216.MsgOverwriteRedemptionRecordResponse>): _216.MsgOverwriteRedemptionRecordResponse;
            fromAmino(_: _216.MsgOverwriteRedemptionRecordResponseAmino): _216.MsgOverwriteRedemptionRecordResponse;
            toAmino(_: _216.MsgOverwriteRedemptionRecordResponse): _216.MsgOverwriteRedemptionRecordResponseAmino;
            fromAminoMsg(object: _216.MsgOverwriteRedemptionRecordResponseAminoMsg): _216.MsgOverwriteRedemptionRecordResponse;
            fromProtoMsg(message: _216.MsgOverwriteRedemptionRecordResponseProtoMsg): _216.MsgOverwriteRedemptionRecordResponse;
            toProto(message: _216.MsgOverwriteRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _216.MsgOverwriteRedemptionRecordResponse): _216.MsgOverwriteRedemptionRecordResponseProtoMsg;
        };
        MsgSetOperatorAddress: {
            typeUrl: string;
            encode(message: _216.MsgSetOperatorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgSetOperatorAddress;
            fromPartial(object: Partial<_216.MsgSetOperatorAddress>): _216.MsgSetOperatorAddress;
            fromAmino(object: _216.MsgSetOperatorAddressAmino): _216.MsgSetOperatorAddress;
            toAmino(message: _216.MsgSetOperatorAddress): _216.MsgSetOperatorAddressAmino;
            fromAminoMsg(object: _216.MsgSetOperatorAddressAminoMsg): _216.MsgSetOperatorAddress;
            toAminoMsg(message: _216.MsgSetOperatorAddress): _216.MsgSetOperatorAddressAminoMsg;
            fromProtoMsg(message: _216.MsgSetOperatorAddressProtoMsg): _216.MsgSetOperatorAddress;
            toProto(message: _216.MsgSetOperatorAddress): Uint8Array;
            toProtoMsg(message: _216.MsgSetOperatorAddress): _216.MsgSetOperatorAddressProtoMsg;
        };
        MsgSetOperatorAddressResponse: {
            typeUrl: string;
            encode(_: _216.MsgSetOperatorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgSetOperatorAddressResponse;
            fromPartial(_: Partial<_216.MsgSetOperatorAddressResponse>): _216.MsgSetOperatorAddressResponse;
            fromAmino(_: _216.MsgSetOperatorAddressResponseAmino): _216.MsgSetOperatorAddressResponse;
            toAmino(_: _216.MsgSetOperatorAddressResponse): _216.MsgSetOperatorAddressResponseAmino;
            fromAminoMsg(object: _216.MsgSetOperatorAddressResponseAminoMsg): _216.MsgSetOperatorAddressResponse;
            fromProtoMsg(message: _216.MsgSetOperatorAddressResponseProtoMsg): _216.MsgSetOperatorAddressResponse;
            toProto(message: _216.MsgSetOperatorAddressResponse): Uint8Array;
            toProtoMsg(message: _216.MsgSetOperatorAddressResponse): _216.MsgSetOperatorAddressResponseProtoMsg;
        };
        delegationRecordStatusFromJSON(object: any): _215.DelegationRecordStatus;
        delegationRecordStatusToJSON(object: _215.DelegationRecordStatus): string;
        unbondingRecordStatusFromJSON(object: any): _215.UnbondingRecordStatus;
        unbondingRecordStatusToJSON(object: _215.UnbondingRecordStatus): string;
        DelegationRecordStatus: typeof _215.DelegationRecordStatus;
        DelegationRecordStatusSDKType: typeof _215.DelegationRecordStatus;
        DelegationRecordStatusAmino: typeof _215.DelegationRecordStatus;
        UnbondingRecordStatus: typeof _215.UnbondingRecordStatus;
        UnbondingRecordStatusSDKType: typeof _215.UnbondingRecordStatus;
        UnbondingRecordStatusAmino: typeof _215.UnbondingRecordStatus;
        HostZone: {
            typeUrl: string;
            encode(message: _215.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.HostZone;
            fromPartial(object: Partial<_215.HostZone>): _215.HostZone;
            fromAmino(object: _215.HostZoneAmino): _215.HostZone;
            toAmino(message: _215.HostZone): _215.HostZoneAmino;
            fromAminoMsg(object: _215.HostZoneAminoMsg): _215.HostZone;
            fromProtoMsg(message: _215.HostZoneProtoMsg): _215.HostZone;
            toProto(message: _215.HostZone): Uint8Array;
            toProtoMsg(message: _215.HostZone): _215.HostZoneProtoMsg;
        };
        DelegationRecord: {
            typeUrl: string;
            encode(message: _215.DelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.DelegationRecord;
            fromPartial(object: Partial<_215.DelegationRecord>): _215.DelegationRecord;
            fromAmino(object: _215.DelegationRecordAmino): _215.DelegationRecord;
            toAmino(message: _215.DelegationRecord): _215.DelegationRecordAmino;
            fromAminoMsg(object: _215.DelegationRecordAminoMsg): _215.DelegationRecord;
            fromProtoMsg(message: _215.DelegationRecordProtoMsg): _215.DelegationRecord;
            toProto(message: _215.DelegationRecord): Uint8Array;
            toProtoMsg(message: _215.DelegationRecord): _215.DelegationRecordProtoMsg;
        };
        UnbondingRecord: {
            typeUrl: string;
            encode(message: _215.UnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.UnbondingRecord;
            fromPartial(object: Partial<_215.UnbondingRecord>): _215.UnbondingRecord;
            fromAmino(object: _215.UnbondingRecordAmino): _215.UnbondingRecord;
            toAmino(message: _215.UnbondingRecord): _215.UnbondingRecordAmino;
            fromAminoMsg(object: _215.UnbondingRecordAminoMsg): _215.UnbondingRecord;
            fromProtoMsg(message: _215.UnbondingRecordProtoMsg): _215.UnbondingRecord;
            toProto(message: _215.UnbondingRecord): Uint8Array;
            toProtoMsg(message: _215.UnbondingRecord): _215.UnbondingRecordProtoMsg;
        };
        RedemptionRecord: {
            typeUrl: string;
            encode(message: _215.RedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.RedemptionRecord;
            fromPartial(object: Partial<_215.RedemptionRecord>): _215.RedemptionRecord;
            fromAmino(object: _215.RedemptionRecordAmino): _215.RedemptionRecord;
            toAmino(message: _215.RedemptionRecord): _215.RedemptionRecordAmino;
            fromAminoMsg(object: _215.RedemptionRecordAminoMsg): _215.RedemptionRecord;
            fromProtoMsg(message: _215.RedemptionRecordProtoMsg): _215.RedemptionRecord;
            toProto(message: _215.RedemptionRecord): Uint8Array;
            toProtoMsg(message: _215.RedemptionRecord): _215.RedemptionRecordProtoMsg;
        };
        SlashRecord: {
            typeUrl: string;
            encode(message: _215.SlashRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.SlashRecord;
            fromPartial(object: Partial<_215.SlashRecord>): _215.SlashRecord;
            fromAmino(object: _215.SlashRecordAmino): _215.SlashRecord;
            toAmino(message: _215.SlashRecord): _215.SlashRecordAmino;
            fromAminoMsg(object: _215.SlashRecordAminoMsg): _215.SlashRecord;
            fromProtoMsg(message: _215.SlashRecordProtoMsg): _215.SlashRecord;
            toProto(message: _215.SlashRecord): Uint8Array;
            toProtoMsg(message: _215.SlashRecord): _215.SlashRecordProtoMsg;
        };
        QueryHostZoneRequest: {
            typeUrl: string;
            encode(_: _214.QueryHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryHostZoneRequest;
            fromPartial(_: Partial<_214.QueryHostZoneRequest>): _214.QueryHostZoneRequest;
            fromAmino(_: _214.QueryHostZoneRequestAmino): _214.QueryHostZoneRequest;
            toAmino(_: _214.QueryHostZoneRequest): _214.QueryHostZoneRequestAmino;
            fromAminoMsg(object: _214.QueryHostZoneRequestAminoMsg): _214.QueryHostZoneRequest;
            fromProtoMsg(message: _214.QueryHostZoneRequestProtoMsg): _214.QueryHostZoneRequest;
            toProto(message: _214.QueryHostZoneRequest): Uint8Array;
            toProtoMsg(message: _214.QueryHostZoneRequest): _214.QueryHostZoneRequestProtoMsg;
        };
        QueryHostZoneResponse: {
            typeUrl: string;
            encode(message: _214.QueryHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryHostZoneResponse;
            fromPartial(object: Partial<_214.QueryHostZoneResponse>): _214.QueryHostZoneResponse;
            fromAmino(object: _214.QueryHostZoneResponseAmino): _214.QueryHostZoneResponse;
            toAmino(message: _214.QueryHostZoneResponse): _214.QueryHostZoneResponseAmino;
            fromAminoMsg(object: _214.QueryHostZoneResponseAminoMsg): _214.QueryHostZoneResponse;
            fromProtoMsg(message: _214.QueryHostZoneResponseProtoMsg): _214.QueryHostZoneResponse;
            toProto(message: _214.QueryHostZoneResponse): Uint8Array;
            toProtoMsg(message: _214.QueryHostZoneResponse): _214.QueryHostZoneResponseProtoMsg;
        };
        QueryDelegationRecordsRequest: {
            typeUrl: string;
            encode(message: _214.QueryDelegationRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryDelegationRecordsRequest;
            fromPartial(object: Partial<_214.QueryDelegationRecordsRequest>): _214.QueryDelegationRecordsRequest;
            fromAmino(object: _214.QueryDelegationRecordsRequestAmino): _214.QueryDelegationRecordsRequest;
            toAmino(message: _214.QueryDelegationRecordsRequest): _214.QueryDelegationRecordsRequestAmino;
            fromAminoMsg(object: _214.QueryDelegationRecordsRequestAminoMsg): _214.QueryDelegationRecordsRequest;
            fromProtoMsg(message: _214.QueryDelegationRecordsRequestProtoMsg): _214.QueryDelegationRecordsRequest;
            toProto(message: _214.QueryDelegationRecordsRequest): Uint8Array;
            toProtoMsg(message: _214.QueryDelegationRecordsRequest): _214.QueryDelegationRecordsRequestProtoMsg;
        };
        QueryDelegationRecordsResponse: {
            typeUrl: string;
            encode(message: _214.QueryDelegationRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryDelegationRecordsResponse;
            fromPartial(object: Partial<_214.QueryDelegationRecordsResponse>): _214.QueryDelegationRecordsResponse;
            fromAmino(object: _214.QueryDelegationRecordsResponseAmino): _214.QueryDelegationRecordsResponse;
            toAmino(message: _214.QueryDelegationRecordsResponse): _214.QueryDelegationRecordsResponseAmino;
            fromAminoMsg(object: _214.QueryDelegationRecordsResponseAminoMsg): _214.QueryDelegationRecordsResponse;
            fromProtoMsg(message: _214.QueryDelegationRecordsResponseProtoMsg): _214.QueryDelegationRecordsResponse;
            toProto(message: _214.QueryDelegationRecordsResponse): Uint8Array;
            toProtoMsg(message: _214.QueryDelegationRecordsResponse): _214.QueryDelegationRecordsResponseProtoMsg;
        };
        QueryUnbondingRecordsRequest: {
            typeUrl: string;
            encode(message: _214.QueryUnbondingRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryUnbondingRecordsRequest;
            fromPartial(object: Partial<_214.QueryUnbondingRecordsRequest>): _214.QueryUnbondingRecordsRequest;
            fromAmino(object: _214.QueryUnbondingRecordsRequestAmino): _214.QueryUnbondingRecordsRequest;
            toAmino(message: _214.QueryUnbondingRecordsRequest): _214.QueryUnbondingRecordsRequestAmino;
            fromAminoMsg(object: _214.QueryUnbondingRecordsRequestAminoMsg): _214.QueryUnbondingRecordsRequest;
            fromProtoMsg(message: _214.QueryUnbondingRecordsRequestProtoMsg): _214.QueryUnbondingRecordsRequest;
            toProto(message: _214.QueryUnbondingRecordsRequest): Uint8Array;
            toProtoMsg(message: _214.QueryUnbondingRecordsRequest): _214.QueryUnbondingRecordsRequestProtoMsg;
        };
        QueryUnbondingRecordsResponse: {
            typeUrl: string;
            encode(message: _214.QueryUnbondingRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryUnbondingRecordsResponse;
            fromPartial(object: Partial<_214.QueryUnbondingRecordsResponse>): _214.QueryUnbondingRecordsResponse;
            fromAmino(object: _214.QueryUnbondingRecordsResponseAmino): _214.QueryUnbondingRecordsResponse;
            toAmino(message: _214.QueryUnbondingRecordsResponse): _214.QueryUnbondingRecordsResponseAmino;
            fromAminoMsg(object: _214.QueryUnbondingRecordsResponseAminoMsg): _214.QueryUnbondingRecordsResponse;
            fromProtoMsg(message: _214.QueryUnbondingRecordsResponseProtoMsg): _214.QueryUnbondingRecordsResponse;
            toProto(message: _214.QueryUnbondingRecordsResponse): Uint8Array;
            toProtoMsg(message: _214.QueryUnbondingRecordsResponse): _214.QueryUnbondingRecordsResponseProtoMsg;
        };
        QueryRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _214.QueryRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryRedemptionRecordRequest;
            fromPartial(object: Partial<_214.QueryRedemptionRecordRequest>): _214.QueryRedemptionRecordRequest;
            fromAmino(object: _214.QueryRedemptionRecordRequestAmino): _214.QueryRedemptionRecordRequest;
            toAmino(message: _214.QueryRedemptionRecordRequest): _214.QueryRedemptionRecordRequestAmino;
            fromAminoMsg(object: _214.QueryRedemptionRecordRequestAminoMsg): _214.QueryRedemptionRecordRequest;
            fromProtoMsg(message: _214.QueryRedemptionRecordRequestProtoMsg): _214.QueryRedemptionRecordRequest;
            toProto(message: _214.QueryRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _214.QueryRedemptionRecordRequest): _214.QueryRedemptionRecordRequestProtoMsg;
        };
        QueryRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _214.QueryRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryRedemptionRecordResponse;
            fromPartial(object: Partial<_214.QueryRedemptionRecordResponse>): _214.QueryRedemptionRecordResponse;
            fromAmino(object: _214.QueryRedemptionRecordResponseAmino): _214.QueryRedemptionRecordResponse;
            toAmino(message: _214.QueryRedemptionRecordResponse): _214.QueryRedemptionRecordResponseAmino;
            fromAminoMsg(object: _214.QueryRedemptionRecordResponseAminoMsg): _214.QueryRedemptionRecordResponse;
            fromProtoMsg(message: _214.QueryRedemptionRecordResponseProtoMsg): _214.QueryRedemptionRecordResponse;
            toProto(message: _214.QueryRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _214.QueryRedemptionRecordResponse): _214.QueryRedemptionRecordResponseProtoMsg;
        };
        QueryRedemptionRecordsRequest: {
            typeUrl: string;
            encode(message: _214.QueryRedemptionRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryRedemptionRecordsRequest;
            fromPartial(object: Partial<_214.QueryRedemptionRecordsRequest>): _214.QueryRedemptionRecordsRequest;
            fromAmino(object: _214.QueryRedemptionRecordsRequestAmino): _214.QueryRedemptionRecordsRequest;
            toAmino(message: _214.QueryRedemptionRecordsRequest): _214.QueryRedemptionRecordsRequestAmino;
            fromAminoMsg(object: _214.QueryRedemptionRecordsRequestAminoMsg): _214.QueryRedemptionRecordsRequest;
            fromProtoMsg(message: _214.QueryRedemptionRecordsRequestProtoMsg): _214.QueryRedemptionRecordsRequest;
            toProto(message: _214.QueryRedemptionRecordsRequest): Uint8Array;
            toProtoMsg(message: _214.QueryRedemptionRecordsRequest): _214.QueryRedemptionRecordsRequestProtoMsg;
        };
        QueryRedemptionRecordsResponse: {
            typeUrl: string;
            encode(message: _214.QueryRedemptionRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryRedemptionRecordsResponse;
            fromPartial(object: Partial<_214.QueryRedemptionRecordsResponse>): _214.QueryRedemptionRecordsResponse;
            fromAmino(object: _214.QueryRedemptionRecordsResponseAmino): _214.QueryRedemptionRecordsResponse;
            toAmino(message: _214.QueryRedemptionRecordsResponse): _214.QueryRedemptionRecordsResponseAmino;
            fromAminoMsg(object: _214.QueryRedemptionRecordsResponseAminoMsg): _214.QueryRedemptionRecordsResponse;
            fromProtoMsg(message: _214.QueryRedemptionRecordsResponseProtoMsg): _214.QueryRedemptionRecordsResponse;
            toProto(message: _214.QueryRedemptionRecordsResponse): Uint8Array;
            toProtoMsg(message: _214.QueryRedemptionRecordsResponse): _214.QueryRedemptionRecordsResponseProtoMsg;
        };
        QuerySlashRecordsRequest: {
            typeUrl: string;
            encode(_: _214.QuerySlashRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QuerySlashRecordsRequest;
            fromPartial(_: Partial<_214.QuerySlashRecordsRequest>): _214.QuerySlashRecordsRequest;
            fromAmino(_: _214.QuerySlashRecordsRequestAmino): _214.QuerySlashRecordsRequest;
            toAmino(_: _214.QuerySlashRecordsRequest): _214.QuerySlashRecordsRequestAmino;
            fromAminoMsg(object: _214.QuerySlashRecordsRequestAminoMsg): _214.QuerySlashRecordsRequest;
            fromProtoMsg(message: _214.QuerySlashRecordsRequestProtoMsg): _214.QuerySlashRecordsRequest;
            toProto(message: _214.QuerySlashRecordsRequest): Uint8Array;
            toProtoMsg(message: _214.QuerySlashRecordsRequest): _214.QuerySlashRecordsRequestProtoMsg;
        };
        QuerySlashRecordsResponse: {
            typeUrl: string;
            encode(message: _214.QuerySlashRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QuerySlashRecordsResponse;
            fromPartial(object: Partial<_214.QuerySlashRecordsResponse>): _214.QuerySlashRecordsResponse;
            fromAmino(object: _214.QuerySlashRecordsResponseAmino): _214.QuerySlashRecordsResponse;
            toAmino(message: _214.QuerySlashRecordsResponse): _214.QuerySlashRecordsResponseAmino;
            fromAminoMsg(object: _214.QuerySlashRecordsResponseAminoMsg): _214.QuerySlashRecordsResponse;
            fromProtoMsg(message: _214.QuerySlashRecordsResponseProtoMsg): _214.QuerySlashRecordsResponse;
            toProto(message: _214.QuerySlashRecordsResponse): Uint8Array;
            toProtoMsg(message: _214.QuerySlashRecordsResponse): _214.QuerySlashRecordsResponseProtoMsg;
        };
        RedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _214.RedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.RedemptionRecordResponse;
            fromPartial(object: Partial<_214.RedemptionRecordResponse>): _214.RedemptionRecordResponse;
            fromAmino(object: _214.RedemptionRecordResponseAmino): _214.RedemptionRecordResponse;
            toAmino(message: _214.RedemptionRecordResponse): _214.RedemptionRecordResponseAmino;
            fromAminoMsg(object: _214.RedemptionRecordResponseAminoMsg): _214.RedemptionRecordResponse;
            fromProtoMsg(message: _214.RedemptionRecordResponseProtoMsg): _214.RedemptionRecordResponse;
            toProto(message: _214.RedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _214.RedemptionRecordResponse): _214.RedemptionRecordResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _213.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.Params;
            fromPartial(_: Partial<_213.Params>): _213.Params;
            fromAmino(_: _213.ParamsAmino): _213.Params;
            toAmino(_: _213.Params): _213.ParamsAmino;
            fromAminoMsg(object: _213.ParamsAminoMsg): _213.Params;
            fromProtoMsg(message: _213.ParamsProtoMsg): _213.Params;
            toProto(message: _213.Params): Uint8Array;
            toProtoMsg(message: _213.Params): _213.ParamsProtoMsg;
        };
        TransferInProgressRecordIds: {
            typeUrl: string;
            encode(message: _213.TransferInProgressRecordIds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.TransferInProgressRecordIds;
            fromPartial(object: Partial<_213.TransferInProgressRecordIds>): _213.TransferInProgressRecordIds;
            fromAmino(object: _213.TransferInProgressRecordIdsAmino): _213.TransferInProgressRecordIds;
            toAmino(message: _213.TransferInProgressRecordIds): _213.TransferInProgressRecordIdsAmino;
            fromAminoMsg(object: _213.TransferInProgressRecordIdsAminoMsg): _213.TransferInProgressRecordIds;
            fromProtoMsg(message: _213.TransferInProgressRecordIdsProtoMsg): _213.TransferInProgressRecordIds;
            toProto(message: _213.TransferInProgressRecordIds): Uint8Array;
            toProtoMsg(message: _213.TransferInProgressRecordIds): _213.TransferInProgressRecordIdsProtoMsg;
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
    const stakeibc: {
        MsgClientImpl: typeof _375.MsgClientImpl;
        QueryClientImpl: typeof _368.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _226.QueryParamsRequest): Promise<_226.QueryParamsResponse>;
            validators(request: _226.QueryGetValidatorsRequest): Promise<_226.QueryGetValidatorsResponse>;
            hostZone(request: _226.QueryGetHostZoneRequest): Promise<_226.QueryGetHostZoneResponse>;
            hostZoneAll(request?: _226.QueryAllHostZoneRequest): Promise<_226.QueryAllHostZoneResponse>;
            moduleAddress(request: _226.QueryModuleAddressRequest): Promise<_226.QueryModuleAddressResponse>;
            interchainAccountFromAddress(request: _226.QueryInterchainAccountFromAddressRequest): Promise<_226.QueryInterchainAccountFromAddressResponse>;
            epochTracker(request: _226.QueryGetEpochTrackerRequest): Promise<_226.QueryGetEpochTrackerResponse>;
            epochTrackerAll(request?: _226.QueryAllEpochTrackerRequest): Promise<_226.QueryAllEpochTrackerResponse>;
            nextPacketSequence(request: _226.QueryGetNextPacketSequenceRequest): Promise<_226.QueryGetNextPacketSequenceResponse>;
            addressUnbondings(request: _226.QueryAddressUnbondings): Promise<_226.QueryAddressUnbondingsResponse>;
            allTradeRoutes(request?: _226.QueryAllTradeRoutes): Promise<_226.QueryAllTradeRoutesResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _228.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lSMLiquidStake(value: _228.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _228.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                registerHostZone(value: _228.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimUndelegatedTokens(value: _228.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                rebalanceValidators(value: _228.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addValidators(value: _228.MsgAddValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                changeValidatorWeight(value: _228.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteValidator(value: _228.MsgDeleteValidator): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreInterchainAccount(value: _228.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateValidatorSharesExchRate(value: _228.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                calibrateDelegation(value: _228.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                clearBalance(value: _228.MsgClearBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _228.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _228.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createTradeRoute(value: _228.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteTradeRoute(value: _228.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateTradeRoute(value: _228.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setCommunityPoolRebate(value: _228.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                toggleTradeController(value: _228.MsgToggleTradeController): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateHostZoneParams(value: _228.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _228.MsgLiquidStake): {
                    typeUrl: string;
                    value: _228.MsgLiquidStake;
                };
                lSMLiquidStake(value: _228.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: _228.MsgLSMLiquidStake;
                };
                redeemStake(value: _228.MsgRedeemStake): {
                    typeUrl: string;
                    value: _228.MsgRedeemStake;
                };
                registerHostZone(value: _228.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _228.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _228.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _228.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _228.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _228.MsgRebalanceValidators;
                };
                addValidators(value: _228.MsgAddValidators): {
                    typeUrl: string;
                    value: _228.MsgAddValidators;
                };
                changeValidatorWeight(value: _228.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: _228.MsgChangeValidatorWeights;
                };
                deleteValidator(value: _228.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _228.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _228.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _228.MsgRestoreInterchainAccount;
                };
                updateValidatorSharesExchRate(value: _228.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _228.MsgUpdateValidatorSharesExchRate;
                };
                calibrateDelegation(value: _228.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: _228.MsgCalibrateDelegation;
                };
                clearBalance(value: _228.MsgClearBalance): {
                    typeUrl: string;
                    value: _228.MsgClearBalance;
                };
                updateInnerRedemptionRateBounds(value: _228.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _228.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _228.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _228.MsgResumeHostZone;
                };
                createTradeRoute(value: _228.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: _228.MsgCreateTradeRoute;
                };
                deleteTradeRoute(value: _228.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: _228.MsgDeleteTradeRoute;
                };
                updateTradeRoute(value: _228.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: _228.MsgUpdateTradeRoute;
                };
                setCommunityPoolRebate(value: _228.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: _228.MsgSetCommunityPoolRebate;
                };
                toggleTradeController(value: _228.MsgToggleTradeController): {
                    typeUrl: string;
                    value: _228.MsgToggleTradeController;
                };
                updateHostZoneParams(value: _228.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: _228.MsgUpdateHostZoneParams;
                };
            };
            fromPartial: {
                liquidStake(value: _228.MsgLiquidStake): {
                    typeUrl: string;
                    value: _228.MsgLiquidStake;
                };
                lSMLiquidStake(value: _228.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: _228.MsgLSMLiquidStake;
                };
                redeemStake(value: _228.MsgRedeemStake): {
                    typeUrl: string;
                    value: _228.MsgRedeemStake;
                };
                registerHostZone(value: _228.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _228.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _228.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _228.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _228.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _228.MsgRebalanceValidators;
                };
                addValidators(value: _228.MsgAddValidators): {
                    typeUrl: string;
                    value: _228.MsgAddValidators;
                };
                changeValidatorWeight(value: _228.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: _228.MsgChangeValidatorWeights;
                };
                deleteValidator(value: _228.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _228.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _228.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _228.MsgRestoreInterchainAccount;
                };
                updateValidatorSharesExchRate(value: _228.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _228.MsgUpdateValidatorSharesExchRate;
                };
                calibrateDelegation(value: _228.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: _228.MsgCalibrateDelegation;
                };
                clearBalance(value: _228.MsgClearBalance): {
                    typeUrl: string;
                    value: _228.MsgClearBalance;
                };
                updateInnerRedemptionRateBounds(value: _228.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _228.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _228.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _228.MsgResumeHostZone;
                };
                createTradeRoute(value: _228.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: _228.MsgCreateTradeRoute;
                };
                deleteTradeRoute(value: _228.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: _228.MsgDeleteTradeRoute;
                };
                updateTradeRoute(value: _228.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: _228.MsgUpdateTradeRoute;
                };
                setCommunityPoolRebate(value: _228.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: _228.MsgSetCommunityPoolRebate;
                };
                toggleTradeController(value: _228.MsgToggleTradeController): {
                    typeUrl: string;
                    value: _228.MsgToggleTradeController;
                };
                updateHostZoneParams(value: _228.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: _228.MsgUpdateHostZoneParams;
                };
            };
        };
        AminoConverter: {
            "/stride.stakeibc.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _228.MsgLiquidStake) => _228.MsgLiquidStakeAmino;
                fromAmino: (object: _228.MsgLiquidStakeAmino) => _228.MsgLiquidStake;
            };
            "/stride.stakeibc.MsgLSMLiquidStake": {
                aminoType: string;
                toAmino: (message: _228.MsgLSMLiquidStake) => _228.MsgLSMLiquidStakeAmino;
                fromAmino: (object: _228.MsgLSMLiquidStakeAmino) => _228.MsgLSMLiquidStake;
            };
            "/stride.stakeibc.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _228.MsgRedeemStake) => _228.MsgRedeemStakeAmino;
                fromAmino: (object: _228.MsgRedeemStakeAmino) => _228.MsgRedeemStake;
            };
            "/stride.stakeibc.MsgRegisterHostZone": {
                aminoType: string;
                toAmino: (message: _228.MsgRegisterHostZone) => _228.MsgRegisterHostZoneAmino;
                fromAmino: (object: _228.MsgRegisterHostZoneAmino) => _228.MsgRegisterHostZone;
            };
            "/stride.stakeibc.MsgClaimUndelegatedTokens": {
                aminoType: string;
                toAmino: (message: _228.MsgClaimUndelegatedTokens) => _228.MsgClaimUndelegatedTokensAmino;
                fromAmino: (object: _228.MsgClaimUndelegatedTokensAmino) => _228.MsgClaimUndelegatedTokens;
            };
            "/stride.stakeibc.MsgRebalanceValidators": {
                aminoType: string;
                toAmino: (message: _228.MsgRebalanceValidators) => _228.MsgRebalanceValidatorsAmino;
                fromAmino: (object: _228.MsgRebalanceValidatorsAmino) => _228.MsgRebalanceValidators;
            };
            "/stride.stakeibc.MsgAddValidators": {
                aminoType: string;
                toAmino: (message: _228.MsgAddValidators) => _228.MsgAddValidatorsAmino;
                fromAmino: (object: _228.MsgAddValidatorsAmino) => _228.MsgAddValidators;
            };
            "/stride.stakeibc.MsgChangeValidatorWeights": {
                aminoType: string;
                toAmino: (message: _228.MsgChangeValidatorWeights) => _228.MsgChangeValidatorWeightsAmino;
                fromAmino: (object: _228.MsgChangeValidatorWeightsAmino) => _228.MsgChangeValidatorWeights;
            };
            "/stride.stakeibc.MsgDeleteValidator": {
                aminoType: string;
                toAmino: (message: _228.MsgDeleteValidator) => _228.MsgDeleteValidatorAmino;
                fromAmino: (object: _228.MsgDeleteValidatorAmino) => _228.MsgDeleteValidator;
            };
            "/stride.stakeibc.MsgRestoreInterchainAccount": {
                aminoType: string;
                toAmino: (message: _228.MsgRestoreInterchainAccount) => _228.MsgRestoreInterchainAccountAmino;
                fromAmino: (object: _228.MsgRestoreInterchainAccountAmino) => _228.MsgRestoreInterchainAccount;
            };
            "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
                aminoType: string;
                toAmino: (message: _228.MsgUpdateValidatorSharesExchRate) => _228.MsgUpdateValidatorSharesExchRateAmino;
                fromAmino: (object: _228.MsgUpdateValidatorSharesExchRateAmino) => _228.MsgUpdateValidatorSharesExchRate;
            };
            "/stride.stakeibc.MsgCalibrateDelegation": {
                aminoType: string;
                toAmino: (message: _228.MsgCalibrateDelegation) => _228.MsgCalibrateDelegationAmino;
                fromAmino: (object: _228.MsgCalibrateDelegationAmino) => _228.MsgCalibrateDelegation;
            };
            "/stride.stakeibc.MsgClearBalance": {
                aminoType: string;
                toAmino: (message: _228.MsgClearBalance) => _228.MsgClearBalanceAmino;
                fromAmino: (object: _228.MsgClearBalanceAmino) => _228.MsgClearBalance;
            };
            "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _228.MsgUpdateInnerRedemptionRateBounds) => _228.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _228.MsgUpdateInnerRedemptionRateBoundsAmino) => _228.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.stakeibc.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _228.MsgResumeHostZone) => _228.MsgResumeHostZoneAmino;
                fromAmino: (object: _228.MsgResumeHostZoneAmino) => _228.MsgResumeHostZone;
            };
            "/stride.stakeibc.MsgCreateTradeRoute": {
                aminoType: string;
                toAmino: (message: _228.MsgCreateTradeRoute) => _228.MsgCreateTradeRouteAmino;
                fromAmino: (object: _228.MsgCreateTradeRouteAmino) => _228.MsgCreateTradeRoute;
            };
            "/stride.stakeibc.MsgDeleteTradeRoute": {
                aminoType: string;
                toAmino: (message: _228.MsgDeleteTradeRoute) => _228.MsgDeleteTradeRouteAmino;
                fromAmino: (object: _228.MsgDeleteTradeRouteAmino) => _228.MsgDeleteTradeRoute;
            };
            "/stride.stakeibc.MsgUpdateTradeRoute": {
                aminoType: string;
                toAmino: (message: _228.MsgUpdateTradeRoute) => _228.MsgUpdateTradeRouteAmino;
                fromAmino: (object: _228.MsgUpdateTradeRouteAmino) => _228.MsgUpdateTradeRoute;
            };
            "/stride.stakeibc.MsgSetCommunityPoolRebate": {
                aminoType: string;
                toAmino: (message: _228.MsgSetCommunityPoolRebate) => _228.MsgSetCommunityPoolRebateAmino;
                fromAmino: (object: _228.MsgSetCommunityPoolRebateAmino) => _228.MsgSetCommunityPoolRebate;
            };
            "/stride.stakeibc.MsgToggleTradeController": {
                aminoType: string;
                toAmino: (message: _228.MsgToggleTradeController) => _228.MsgToggleTradeControllerAmino;
                fromAmino: (object: _228.MsgToggleTradeControllerAmino) => _228.MsgToggleTradeController;
            };
            "/stride.stakeibc.MsgUpdateHostZoneParams": {
                aminoType: string;
                toAmino: (message: _228.MsgUpdateHostZoneParams) => _228.MsgUpdateHostZoneParamsAmino;
                fromAmino: (object: _228.MsgUpdateHostZoneParamsAmino) => _228.MsgUpdateHostZoneParams;
            };
        };
        Validator: {
            typeUrl: string;
            encode(message: _229.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.Validator;
            fromPartial(object: Partial<_229.Validator>): _229.Validator;
            fromAmino(object: _229.ValidatorAmino): _229.Validator;
            toAmino(message: _229.Validator): _229.ValidatorAmino;
            fromAminoMsg(object: _229.ValidatorAminoMsg): _229.Validator;
            fromProtoMsg(message: _229.ValidatorProtoMsg): _229.Validator;
            toProto(message: _229.Validator): Uint8Array;
            toProtoMsg(message: _229.Validator): _229.ValidatorProtoMsg;
        };
        authzPermissionChangeFromJSON(object: any): _228.AuthzPermissionChange;
        authzPermissionChangeToJSON(object: _228.AuthzPermissionChange): string;
        AuthzPermissionChange: typeof _228.AuthzPermissionChange;
        AuthzPermissionChangeSDKType: typeof _228.AuthzPermissionChange;
        AuthzPermissionChangeAmino: typeof _228.AuthzPermissionChange;
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _228.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_228.MsgUpdateInnerRedemptionRateBounds>): _228.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _228.MsgUpdateInnerRedemptionRateBoundsAmino): _228.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _228.MsgUpdateInnerRedemptionRateBounds): _228.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _228.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _228.MsgUpdateInnerRedemptionRateBounds;
            fromProtoMsg(message: _228.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _228.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _228.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _228.MsgUpdateInnerRedemptionRateBounds): _228.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _228.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_228.MsgUpdateInnerRedemptionRateBoundsResponse>): _228.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _228.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _228.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _228.MsgUpdateInnerRedemptionRateBoundsResponse): _228.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _228.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _228.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _228.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _228.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _228.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _228.MsgUpdateInnerRedemptionRateBoundsResponse): _228.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _228.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgLiquidStake;
            fromPartial(object: Partial<_228.MsgLiquidStake>): _228.MsgLiquidStake;
            fromAmino(object: _228.MsgLiquidStakeAmino): _228.MsgLiquidStake;
            toAmino(message: _228.MsgLiquidStake): _228.MsgLiquidStakeAmino;
            fromAminoMsg(object: _228.MsgLiquidStakeAminoMsg): _228.MsgLiquidStake;
            toAminoMsg(message: _228.MsgLiquidStake): _228.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _228.MsgLiquidStakeProtoMsg): _228.MsgLiquidStake;
            toProto(message: _228.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _228.MsgLiquidStake): _228.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _228.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_228.MsgLiquidStakeResponse>): _228.MsgLiquidStakeResponse;
            fromAmino(object: _228.MsgLiquidStakeResponseAmino): _228.MsgLiquidStakeResponse;
            toAmino(message: _228.MsgLiquidStakeResponse): _228.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _228.MsgLiquidStakeResponseAminoMsg): _228.MsgLiquidStakeResponse;
            fromProtoMsg(message: _228.MsgLiquidStakeResponseProtoMsg): _228.MsgLiquidStakeResponse;
            toProto(message: _228.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _228.MsgLiquidStakeResponse): _228.MsgLiquidStakeResponseProtoMsg;
        };
        MsgLSMLiquidStake: {
            typeUrl: string;
            encode(message: _228.MsgLSMLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgLSMLiquidStake;
            fromPartial(object: Partial<_228.MsgLSMLiquidStake>): _228.MsgLSMLiquidStake;
            fromAmino(object: _228.MsgLSMLiquidStakeAmino): _228.MsgLSMLiquidStake;
            toAmino(message: _228.MsgLSMLiquidStake): _228.MsgLSMLiquidStakeAmino;
            fromAminoMsg(object: _228.MsgLSMLiquidStakeAminoMsg): _228.MsgLSMLiquidStake;
            toAminoMsg(message: _228.MsgLSMLiquidStake): _228.MsgLSMLiquidStakeAminoMsg;
            fromProtoMsg(message: _228.MsgLSMLiquidStakeProtoMsg): _228.MsgLSMLiquidStake;
            toProto(message: _228.MsgLSMLiquidStake): Uint8Array;
            toProtoMsg(message: _228.MsgLSMLiquidStake): _228.MsgLSMLiquidStakeProtoMsg;
        };
        MsgLSMLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _228.MsgLSMLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgLSMLiquidStakeResponse;
            fromPartial(object: Partial<_228.MsgLSMLiquidStakeResponse>): _228.MsgLSMLiquidStakeResponse;
            fromAmino(object: _228.MsgLSMLiquidStakeResponseAmino): _228.MsgLSMLiquidStakeResponse;
            toAmino(message: _228.MsgLSMLiquidStakeResponse): _228.MsgLSMLiquidStakeResponseAmino;
            fromAminoMsg(object: _228.MsgLSMLiquidStakeResponseAminoMsg): _228.MsgLSMLiquidStakeResponse;
            fromProtoMsg(message: _228.MsgLSMLiquidStakeResponseProtoMsg): _228.MsgLSMLiquidStakeResponse;
            toProto(message: _228.MsgLSMLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _228.MsgLSMLiquidStakeResponse): _228.MsgLSMLiquidStakeResponseProtoMsg;
        };
        MsgClearBalance: {
            typeUrl: string;
            encode(message: _228.MsgClearBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgClearBalance;
            fromPartial(object: Partial<_228.MsgClearBalance>): _228.MsgClearBalance;
            fromAmino(object: _228.MsgClearBalanceAmino): _228.MsgClearBalance;
            toAmino(message: _228.MsgClearBalance): _228.MsgClearBalanceAmino;
            fromAminoMsg(object: _228.MsgClearBalanceAminoMsg): _228.MsgClearBalance;
            toAminoMsg(message: _228.MsgClearBalance): _228.MsgClearBalanceAminoMsg;
            fromProtoMsg(message: _228.MsgClearBalanceProtoMsg): _228.MsgClearBalance;
            toProto(message: _228.MsgClearBalance): Uint8Array;
            toProtoMsg(message: _228.MsgClearBalance): _228.MsgClearBalanceProtoMsg;
        };
        MsgClearBalanceResponse: {
            typeUrl: string;
            encode(_: _228.MsgClearBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgClearBalanceResponse;
            fromPartial(_: Partial<_228.MsgClearBalanceResponse>): _228.MsgClearBalanceResponse;
            fromAmino(_: _228.MsgClearBalanceResponseAmino): _228.MsgClearBalanceResponse;
            toAmino(_: _228.MsgClearBalanceResponse): _228.MsgClearBalanceResponseAmino;
            fromAminoMsg(object: _228.MsgClearBalanceResponseAminoMsg): _228.MsgClearBalanceResponse;
            fromProtoMsg(message: _228.MsgClearBalanceResponseProtoMsg): _228.MsgClearBalanceResponse;
            toProto(message: _228.MsgClearBalanceResponse): Uint8Array;
            toProtoMsg(message: _228.MsgClearBalanceResponse): _228.MsgClearBalanceResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _228.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgRedeemStake;
            fromPartial(object: Partial<_228.MsgRedeemStake>): _228.MsgRedeemStake;
            fromAmino(object: _228.MsgRedeemStakeAmino): _228.MsgRedeemStake;
            toAmino(message: _228.MsgRedeemStake): _228.MsgRedeemStakeAmino;
            fromAminoMsg(object: _228.MsgRedeemStakeAminoMsg): _228.MsgRedeemStake;
            toAminoMsg(message: _228.MsgRedeemStake): _228.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _228.MsgRedeemStakeProtoMsg): _228.MsgRedeemStake;
            toProto(message: _228.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _228.MsgRedeemStake): _228.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(_: _228.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgRedeemStakeResponse;
            fromPartial(_: Partial<_228.MsgRedeemStakeResponse>): _228.MsgRedeemStakeResponse;
            fromAmino(_: _228.MsgRedeemStakeResponseAmino): _228.MsgRedeemStakeResponse;
            toAmino(_: _228.MsgRedeemStakeResponse): _228.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _228.MsgRedeemStakeResponseAminoMsg): _228.MsgRedeemStakeResponse;
            fromProtoMsg(message: _228.MsgRedeemStakeResponseProtoMsg): _228.MsgRedeemStakeResponse;
            toProto(message: _228.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _228.MsgRedeemStakeResponse): _228.MsgRedeemStakeResponseProtoMsg;
        };
        MsgRegisterHostZone: {
            typeUrl: string;
            encode(message: _228.MsgRegisterHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgRegisterHostZone;
            fromPartial(object: Partial<_228.MsgRegisterHostZone>): _228.MsgRegisterHostZone;
            fromAmino(object: _228.MsgRegisterHostZoneAmino): _228.MsgRegisterHostZone;
            toAmino(message: _228.MsgRegisterHostZone): _228.MsgRegisterHostZoneAmino;
            fromAminoMsg(object: _228.MsgRegisterHostZoneAminoMsg): _228.MsgRegisterHostZone;
            toAminoMsg(message: _228.MsgRegisterHostZone): _228.MsgRegisterHostZoneAminoMsg;
            fromProtoMsg(message: _228.MsgRegisterHostZoneProtoMsg): _228.MsgRegisterHostZone;
            toProto(message: _228.MsgRegisterHostZone): Uint8Array;
            toProtoMsg(message: _228.MsgRegisterHostZone): _228.MsgRegisterHostZoneProtoMsg;
        };
        MsgRegisterHostZoneResponse: {
            typeUrl: string;
            encode(_: _228.MsgRegisterHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgRegisterHostZoneResponse;
            fromPartial(_: Partial<_228.MsgRegisterHostZoneResponse>): _228.MsgRegisterHostZoneResponse;
            fromAmino(_: _228.MsgRegisterHostZoneResponseAmino): _228.MsgRegisterHostZoneResponse;
            toAmino(_: _228.MsgRegisterHostZoneResponse): _228.MsgRegisterHostZoneResponseAmino;
            fromAminoMsg(object: _228.MsgRegisterHostZoneResponseAminoMsg): _228.MsgRegisterHostZoneResponse;
            fromProtoMsg(message: _228.MsgRegisterHostZoneResponseProtoMsg): _228.MsgRegisterHostZoneResponse;
            toProto(message: _228.MsgRegisterHostZoneResponse): Uint8Array;
            toProtoMsg(message: _228.MsgRegisterHostZoneResponse): _228.MsgRegisterHostZoneResponseProtoMsg;
        };
        MsgClaimUndelegatedTokens: {
            typeUrl: string;
            encode(message: _228.MsgClaimUndelegatedTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgClaimUndelegatedTokens;
            fromPartial(object: Partial<_228.MsgClaimUndelegatedTokens>): _228.MsgClaimUndelegatedTokens;
            fromAmino(object: _228.MsgClaimUndelegatedTokensAmino): _228.MsgClaimUndelegatedTokens;
            toAmino(message: _228.MsgClaimUndelegatedTokens): _228.MsgClaimUndelegatedTokensAmino;
            fromAminoMsg(object: _228.MsgClaimUndelegatedTokensAminoMsg): _228.MsgClaimUndelegatedTokens;
            toAminoMsg(message: _228.MsgClaimUndelegatedTokens): _228.MsgClaimUndelegatedTokensAminoMsg;
            fromProtoMsg(message: _228.MsgClaimUndelegatedTokensProtoMsg): _228.MsgClaimUndelegatedTokens;
            toProto(message: _228.MsgClaimUndelegatedTokens): Uint8Array;
            toProtoMsg(message: _228.MsgClaimUndelegatedTokens): _228.MsgClaimUndelegatedTokensProtoMsg;
        };
        MsgClaimUndelegatedTokensResponse: {
            typeUrl: string;
            encode(_: _228.MsgClaimUndelegatedTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgClaimUndelegatedTokensResponse;
            fromPartial(_: Partial<_228.MsgClaimUndelegatedTokensResponse>): _228.MsgClaimUndelegatedTokensResponse;
            fromAmino(_: _228.MsgClaimUndelegatedTokensResponseAmino): _228.MsgClaimUndelegatedTokensResponse;
            toAmino(_: _228.MsgClaimUndelegatedTokensResponse): _228.MsgClaimUndelegatedTokensResponseAmino;
            fromAminoMsg(object: _228.MsgClaimUndelegatedTokensResponseAminoMsg): _228.MsgClaimUndelegatedTokensResponse;
            fromProtoMsg(message: _228.MsgClaimUndelegatedTokensResponseProtoMsg): _228.MsgClaimUndelegatedTokensResponse;
            toProto(message: _228.MsgClaimUndelegatedTokensResponse): Uint8Array;
            toProtoMsg(message: _228.MsgClaimUndelegatedTokensResponse): _228.MsgClaimUndelegatedTokensResponseProtoMsg;
        };
        MsgRebalanceValidators: {
            typeUrl: string;
            encode(message: _228.MsgRebalanceValidators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgRebalanceValidators;
            fromPartial(object: Partial<_228.MsgRebalanceValidators>): _228.MsgRebalanceValidators;
            fromAmino(object: _228.MsgRebalanceValidatorsAmino): _228.MsgRebalanceValidators;
            toAmino(message: _228.MsgRebalanceValidators): _228.MsgRebalanceValidatorsAmino;
            fromAminoMsg(object: _228.MsgRebalanceValidatorsAminoMsg): _228.MsgRebalanceValidators;
            toAminoMsg(message: _228.MsgRebalanceValidators): _228.MsgRebalanceValidatorsAminoMsg;
            fromProtoMsg(message: _228.MsgRebalanceValidatorsProtoMsg): _228.MsgRebalanceValidators;
            toProto(message: _228.MsgRebalanceValidators): Uint8Array;
            toProtoMsg(message: _228.MsgRebalanceValidators): _228.MsgRebalanceValidatorsProtoMsg;
        };
        MsgRebalanceValidatorsResponse: {
            typeUrl: string;
            encode(_: _228.MsgRebalanceValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgRebalanceValidatorsResponse;
            fromPartial(_: Partial<_228.MsgRebalanceValidatorsResponse>): _228.MsgRebalanceValidatorsResponse;
            fromAmino(_: _228.MsgRebalanceValidatorsResponseAmino): _228.MsgRebalanceValidatorsResponse;
            toAmino(_: _228.MsgRebalanceValidatorsResponse): _228.MsgRebalanceValidatorsResponseAmino;
            fromAminoMsg(object: _228.MsgRebalanceValidatorsResponseAminoMsg): _228.MsgRebalanceValidatorsResponse;
            fromProtoMsg(message: _228.MsgRebalanceValidatorsResponseProtoMsg): _228.MsgRebalanceValidatorsResponse;
            toProto(message: _228.MsgRebalanceValidatorsResponse): Uint8Array;
            toProtoMsg(message: _228.MsgRebalanceValidatorsResponse): _228.MsgRebalanceValidatorsResponseProtoMsg;
        };
        MsgAddValidators: {
            typeUrl: string;
            encode(message: _228.MsgAddValidators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgAddValidators;
            fromPartial(object: Partial<_228.MsgAddValidators>): _228.MsgAddValidators;
            fromAmino(object: _228.MsgAddValidatorsAmino): _228.MsgAddValidators;
            toAmino(message: _228.MsgAddValidators): _228.MsgAddValidatorsAmino;
            fromAminoMsg(object: _228.MsgAddValidatorsAminoMsg): _228.MsgAddValidators;
            fromProtoMsg(message: _228.MsgAddValidatorsProtoMsg): _228.MsgAddValidators;
            toProto(message: _228.MsgAddValidators): Uint8Array;
            toProtoMsg(message: _228.MsgAddValidators): _228.MsgAddValidatorsProtoMsg;
        };
        MsgAddValidatorsResponse: {
            typeUrl: string;
            encode(_: _228.MsgAddValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgAddValidatorsResponse;
            fromPartial(_: Partial<_228.MsgAddValidatorsResponse>): _228.MsgAddValidatorsResponse;
            fromAmino(_: _228.MsgAddValidatorsResponseAmino): _228.MsgAddValidatorsResponse;
            toAmino(_: _228.MsgAddValidatorsResponse): _228.MsgAddValidatorsResponseAmino;
            fromAminoMsg(object: _228.MsgAddValidatorsResponseAminoMsg): _228.MsgAddValidatorsResponse;
            fromProtoMsg(message: _228.MsgAddValidatorsResponseProtoMsg): _228.MsgAddValidatorsResponse;
            toProto(message: _228.MsgAddValidatorsResponse): Uint8Array;
            toProtoMsg(message: _228.MsgAddValidatorsResponse): _228.MsgAddValidatorsResponseProtoMsg;
        };
        ValidatorWeight: {
            typeUrl: string;
            encode(message: _228.ValidatorWeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.ValidatorWeight;
            fromPartial(object: Partial<_228.ValidatorWeight>): _228.ValidatorWeight;
            fromAmino(object: _228.ValidatorWeightAmino): _228.ValidatorWeight;
            toAmino(message: _228.ValidatorWeight): _228.ValidatorWeightAmino;
            fromAminoMsg(object: _228.ValidatorWeightAminoMsg): _228.ValidatorWeight;
            fromProtoMsg(message: _228.ValidatorWeightProtoMsg): _228.ValidatorWeight;
            toProto(message: _228.ValidatorWeight): Uint8Array;
            toProtoMsg(message: _228.ValidatorWeight): _228.ValidatorWeightProtoMsg;
        };
        MsgChangeValidatorWeights: {
            typeUrl: string;
            encode(message: _228.MsgChangeValidatorWeights, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgChangeValidatorWeights;
            fromPartial(object: Partial<_228.MsgChangeValidatorWeights>): _228.MsgChangeValidatorWeights;
            fromAmino(object: _228.MsgChangeValidatorWeightsAmino): _228.MsgChangeValidatorWeights;
            toAmino(message: _228.MsgChangeValidatorWeights): _228.MsgChangeValidatorWeightsAmino;
            fromAminoMsg(object: _228.MsgChangeValidatorWeightsAminoMsg): _228.MsgChangeValidatorWeights;
            fromProtoMsg(message: _228.MsgChangeValidatorWeightsProtoMsg): _228.MsgChangeValidatorWeights;
            toProto(message: _228.MsgChangeValidatorWeights): Uint8Array;
            toProtoMsg(message: _228.MsgChangeValidatorWeights): _228.MsgChangeValidatorWeightsProtoMsg;
        };
        MsgChangeValidatorWeightsResponse: {
            typeUrl: string;
            encode(_: _228.MsgChangeValidatorWeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgChangeValidatorWeightsResponse;
            fromPartial(_: Partial<_228.MsgChangeValidatorWeightsResponse>): _228.MsgChangeValidatorWeightsResponse;
            fromAmino(_: _228.MsgChangeValidatorWeightsResponseAmino): _228.MsgChangeValidatorWeightsResponse;
            toAmino(_: _228.MsgChangeValidatorWeightsResponse): _228.MsgChangeValidatorWeightsResponseAmino;
            fromAminoMsg(object: _228.MsgChangeValidatorWeightsResponseAminoMsg): _228.MsgChangeValidatorWeightsResponse;
            fromProtoMsg(message: _228.MsgChangeValidatorWeightsResponseProtoMsg): _228.MsgChangeValidatorWeightsResponse;
            toProto(message: _228.MsgChangeValidatorWeightsResponse): Uint8Array;
            toProtoMsg(message: _228.MsgChangeValidatorWeightsResponse): _228.MsgChangeValidatorWeightsResponseProtoMsg;
        };
        MsgDeleteValidator: {
            typeUrl: string;
            encode(message: _228.MsgDeleteValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgDeleteValidator;
            fromPartial(object: Partial<_228.MsgDeleteValidator>): _228.MsgDeleteValidator;
            fromAmino(object: _228.MsgDeleteValidatorAmino): _228.MsgDeleteValidator;
            toAmino(message: _228.MsgDeleteValidator): _228.MsgDeleteValidatorAmino;
            fromAminoMsg(object: _228.MsgDeleteValidatorAminoMsg): _228.MsgDeleteValidator;
            toAminoMsg(message: _228.MsgDeleteValidator): _228.MsgDeleteValidatorAminoMsg;
            fromProtoMsg(message: _228.MsgDeleteValidatorProtoMsg): _228.MsgDeleteValidator;
            toProto(message: _228.MsgDeleteValidator): Uint8Array;
            toProtoMsg(message: _228.MsgDeleteValidator): _228.MsgDeleteValidatorProtoMsg;
        };
        MsgDeleteValidatorResponse: {
            typeUrl: string;
            encode(_: _228.MsgDeleteValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgDeleteValidatorResponse;
            fromPartial(_: Partial<_228.MsgDeleteValidatorResponse>): _228.MsgDeleteValidatorResponse;
            fromAmino(_: _228.MsgDeleteValidatorResponseAmino): _228.MsgDeleteValidatorResponse;
            toAmino(_: _228.MsgDeleteValidatorResponse): _228.MsgDeleteValidatorResponseAmino;
            fromAminoMsg(object: _228.MsgDeleteValidatorResponseAminoMsg): _228.MsgDeleteValidatorResponse;
            fromProtoMsg(message: _228.MsgDeleteValidatorResponseProtoMsg): _228.MsgDeleteValidatorResponse;
            toProto(message: _228.MsgDeleteValidatorResponse): Uint8Array;
            toProtoMsg(message: _228.MsgDeleteValidatorResponse): _228.MsgDeleteValidatorResponseProtoMsg;
        };
        MsgRestoreInterchainAccount: {
            typeUrl: string;
            encode(message: _228.MsgRestoreInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgRestoreInterchainAccount;
            fromPartial(object: Partial<_228.MsgRestoreInterchainAccount>): _228.MsgRestoreInterchainAccount;
            fromAmino(object: _228.MsgRestoreInterchainAccountAmino): _228.MsgRestoreInterchainAccount;
            toAmino(message: _228.MsgRestoreInterchainAccount): _228.MsgRestoreInterchainAccountAmino;
            fromAminoMsg(object: _228.MsgRestoreInterchainAccountAminoMsg): _228.MsgRestoreInterchainAccount;
            toAminoMsg(message: _228.MsgRestoreInterchainAccount): _228.MsgRestoreInterchainAccountAminoMsg;
            fromProtoMsg(message: _228.MsgRestoreInterchainAccountProtoMsg): _228.MsgRestoreInterchainAccount;
            toProto(message: _228.MsgRestoreInterchainAccount): Uint8Array;
            toProtoMsg(message: _228.MsgRestoreInterchainAccount): _228.MsgRestoreInterchainAccountProtoMsg;
        };
        MsgRestoreInterchainAccountResponse: {
            typeUrl: string;
            encode(_: _228.MsgRestoreInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgRestoreInterchainAccountResponse;
            fromPartial(_: Partial<_228.MsgRestoreInterchainAccountResponse>): _228.MsgRestoreInterchainAccountResponse;
            fromAmino(_: _228.MsgRestoreInterchainAccountResponseAmino): _228.MsgRestoreInterchainAccountResponse;
            toAmino(_: _228.MsgRestoreInterchainAccountResponse): _228.MsgRestoreInterchainAccountResponseAmino;
            fromAminoMsg(object: _228.MsgRestoreInterchainAccountResponseAminoMsg): _228.MsgRestoreInterchainAccountResponse;
            fromProtoMsg(message: _228.MsgRestoreInterchainAccountResponseProtoMsg): _228.MsgRestoreInterchainAccountResponse;
            toProto(message: _228.MsgRestoreInterchainAccountResponse): Uint8Array;
            toProtoMsg(message: _228.MsgRestoreInterchainAccountResponse): _228.MsgRestoreInterchainAccountResponseProtoMsg;
        };
        MsgUpdateValidatorSharesExchRate: {
            typeUrl: string;
            encode(message: _228.MsgUpdateValidatorSharesExchRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgUpdateValidatorSharesExchRate;
            fromPartial(object: Partial<_228.MsgUpdateValidatorSharesExchRate>): _228.MsgUpdateValidatorSharesExchRate;
            fromAmino(object: _228.MsgUpdateValidatorSharesExchRateAmino): _228.MsgUpdateValidatorSharesExchRate;
            toAmino(message: _228.MsgUpdateValidatorSharesExchRate): _228.MsgUpdateValidatorSharesExchRateAmino;
            fromAminoMsg(object: _228.MsgUpdateValidatorSharesExchRateAminoMsg): _228.MsgUpdateValidatorSharesExchRate;
            toAminoMsg(message: _228.MsgUpdateValidatorSharesExchRate): _228.MsgUpdateValidatorSharesExchRateAminoMsg;
            fromProtoMsg(message: _228.MsgUpdateValidatorSharesExchRateProtoMsg): _228.MsgUpdateValidatorSharesExchRate;
            toProto(message: _228.MsgUpdateValidatorSharesExchRate): Uint8Array;
            toProtoMsg(message: _228.MsgUpdateValidatorSharesExchRate): _228.MsgUpdateValidatorSharesExchRateProtoMsg;
        };
        MsgUpdateValidatorSharesExchRateResponse: {
            typeUrl: string;
            encode(_: _228.MsgUpdateValidatorSharesExchRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgUpdateValidatorSharesExchRateResponse;
            fromPartial(_: Partial<_228.MsgUpdateValidatorSharesExchRateResponse>): _228.MsgUpdateValidatorSharesExchRateResponse;
            fromAmino(_: _228.MsgUpdateValidatorSharesExchRateResponseAmino): _228.MsgUpdateValidatorSharesExchRateResponse;
            toAmino(_: _228.MsgUpdateValidatorSharesExchRateResponse): _228.MsgUpdateValidatorSharesExchRateResponseAmino;
            fromAminoMsg(object: _228.MsgUpdateValidatorSharesExchRateResponseAminoMsg): _228.MsgUpdateValidatorSharesExchRateResponse;
            fromProtoMsg(message: _228.MsgUpdateValidatorSharesExchRateResponseProtoMsg): _228.MsgUpdateValidatorSharesExchRateResponse;
            toProto(message: _228.MsgUpdateValidatorSharesExchRateResponse): Uint8Array;
            toProtoMsg(message: _228.MsgUpdateValidatorSharesExchRateResponse): _228.MsgUpdateValidatorSharesExchRateResponseProtoMsg;
        };
        MsgCalibrateDelegation: {
            typeUrl: string;
            encode(message: _228.MsgCalibrateDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgCalibrateDelegation;
            fromPartial(object: Partial<_228.MsgCalibrateDelegation>): _228.MsgCalibrateDelegation;
            fromAmino(object: _228.MsgCalibrateDelegationAmino): _228.MsgCalibrateDelegation;
            toAmino(message: _228.MsgCalibrateDelegation): _228.MsgCalibrateDelegationAmino;
            fromAminoMsg(object: _228.MsgCalibrateDelegationAminoMsg): _228.MsgCalibrateDelegation;
            fromProtoMsg(message: _228.MsgCalibrateDelegationProtoMsg): _228.MsgCalibrateDelegation;
            toProto(message: _228.MsgCalibrateDelegation): Uint8Array;
            toProtoMsg(message: _228.MsgCalibrateDelegation): _228.MsgCalibrateDelegationProtoMsg;
        };
        MsgCalibrateDelegationResponse: {
            typeUrl: string;
            encode(_: _228.MsgCalibrateDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgCalibrateDelegationResponse;
            fromPartial(_: Partial<_228.MsgCalibrateDelegationResponse>): _228.MsgCalibrateDelegationResponse;
            fromAmino(_: _228.MsgCalibrateDelegationResponseAmino): _228.MsgCalibrateDelegationResponse;
            toAmino(_: _228.MsgCalibrateDelegationResponse): _228.MsgCalibrateDelegationResponseAmino;
            fromAminoMsg(object: _228.MsgCalibrateDelegationResponseAminoMsg): _228.MsgCalibrateDelegationResponse;
            fromProtoMsg(message: _228.MsgCalibrateDelegationResponseProtoMsg): _228.MsgCalibrateDelegationResponse;
            toProto(message: _228.MsgCalibrateDelegationResponse): Uint8Array;
            toProtoMsg(message: _228.MsgCalibrateDelegationResponse): _228.MsgCalibrateDelegationResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _228.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgResumeHostZone;
            fromPartial(object: Partial<_228.MsgResumeHostZone>): _228.MsgResumeHostZone;
            fromAmino(object: _228.MsgResumeHostZoneAmino): _228.MsgResumeHostZone;
            toAmino(message: _228.MsgResumeHostZone): _228.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _228.MsgResumeHostZoneAminoMsg): _228.MsgResumeHostZone;
            fromProtoMsg(message: _228.MsgResumeHostZoneProtoMsg): _228.MsgResumeHostZone;
            toProto(message: _228.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _228.MsgResumeHostZone): _228.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _228.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_228.MsgResumeHostZoneResponse>): _228.MsgResumeHostZoneResponse;
            fromAmino(_: _228.MsgResumeHostZoneResponseAmino): _228.MsgResumeHostZoneResponse;
            toAmino(_: _228.MsgResumeHostZoneResponse): _228.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _228.MsgResumeHostZoneResponseAminoMsg): _228.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _228.MsgResumeHostZoneResponseProtoMsg): _228.MsgResumeHostZoneResponse;
            toProto(message: _228.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _228.MsgResumeHostZoneResponse): _228.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgCreateTradeRoute: {
            typeUrl: string;
            encode(message: _228.MsgCreateTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgCreateTradeRoute;
            fromPartial(object: Partial<_228.MsgCreateTradeRoute>): _228.MsgCreateTradeRoute;
            fromAmino(object: _228.MsgCreateTradeRouteAmino): _228.MsgCreateTradeRoute;
            toAmino(message: _228.MsgCreateTradeRoute): _228.MsgCreateTradeRouteAmino;
            fromAminoMsg(object: _228.MsgCreateTradeRouteAminoMsg): _228.MsgCreateTradeRoute;
            toAminoMsg(message: _228.MsgCreateTradeRoute): _228.MsgCreateTradeRouteAminoMsg;
            fromProtoMsg(message: _228.MsgCreateTradeRouteProtoMsg): _228.MsgCreateTradeRoute;
            toProto(message: _228.MsgCreateTradeRoute): Uint8Array;
            toProtoMsg(message: _228.MsgCreateTradeRoute): _228.MsgCreateTradeRouteProtoMsg;
        };
        MsgCreateTradeRouteResponse: {
            typeUrl: string;
            encode(_: _228.MsgCreateTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgCreateTradeRouteResponse;
            fromPartial(_: Partial<_228.MsgCreateTradeRouteResponse>): _228.MsgCreateTradeRouteResponse;
            fromAmino(_: _228.MsgCreateTradeRouteResponseAmino): _228.MsgCreateTradeRouteResponse;
            toAmino(_: _228.MsgCreateTradeRouteResponse): _228.MsgCreateTradeRouteResponseAmino;
            fromAminoMsg(object: _228.MsgCreateTradeRouteResponseAminoMsg): _228.MsgCreateTradeRouteResponse;
            fromProtoMsg(message: _228.MsgCreateTradeRouteResponseProtoMsg): _228.MsgCreateTradeRouteResponse;
            toProto(message: _228.MsgCreateTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _228.MsgCreateTradeRouteResponse): _228.MsgCreateTradeRouteResponseProtoMsg;
        };
        MsgDeleteTradeRoute: {
            typeUrl: string;
            encode(message: _228.MsgDeleteTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgDeleteTradeRoute;
            fromPartial(object: Partial<_228.MsgDeleteTradeRoute>): _228.MsgDeleteTradeRoute;
            fromAmino(object: _228.MsgDeleteTradeRouteAmino): _228.MsgDeleteTradeRoute;
            toAmino(message: _228.MsgDeleteTradeRoute): _228.MsgDeleteTradeRouteAmino;
            fromAminoMsg(object: _228.MsgDeleteTradeRouteAminoMsg): _228.MsgDeleteTradeRoute;
            toAminoMsg(message: _228.MsgDeleteTradeRoute): _228.MsgDeleteTradeRouteAminoMsg;
            fromProtoMsg(message: _228.MsgDeleteTradeRouteProtoMsg): _228.MsgDeleteTradeRoute;
            toProto(message: _228.MsgDeleteTradeRoute): Uint8Array;
            toProtoMsg(message: _228.MsgDeleteTradeRoute): _228.MsgDeleteTradeRouteProtoMsg;
        };
        MsgDeleteTradeRouteResponse: {
            typeUrl: string;
            encode(_: _228.MsgDeleteTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgDeleteTradeRouteResponse;
            fromPartial(_: Partial<_228.MsgDeleteTradeRouteResponse>): _228.MsgDeleteTradeRouteResponse;
            fromAmino(_: _228.MsgDeleteTradeRouteResponseAmino): _228.MsgDeleteTradeRouteResponse;
            toAmino(_: _228.MsgDeleteTradeRouteResponse): _228.MsgDeleteTradeRouteResponseAmino;
            fromAminoMsg(object: _228.MsgDeleteTradeRouteResponseAminoMsg): _228.MsgDeleteTradeRouteResponse;
            fromProtoMsg(message: _228.MsgDeleteTradeRouteResponseProtoMsg): _228.MsgDeleteTradeRouteResponse;
            toProto(message: _228.MsgDeleteTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _228.MsgDeleteTradeRouteResponse): _228.MsgDeleteTradeRouteResponseProtoMsg;
        };
        MsgUpdateTradeRoute: {
            typeUrl: string;
            encode(message: _228.MsgUpdateTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgUpdateTradeRoute;
            fromPartial(object: Partial<_228.MsgUpdateTradeRoute>): _228.MsgUpdateTradeRoute;
            fromAmino(object: _228.MsgUpdateTradeRouteAmino): _228.MsgUpdateTradeRoute;
            toAmino(message: _228.MsgUpdateTradeRoute): _228.MsgUpdateTradeRouteAmino;
            fromAminoMsg(object: _228.MsgUpdateTradeRouteAminoMsg): _228.MsgUpdateTradeRoute;
            toAminoMsg(message: _228.MsgUpdateTradeRoute): _228.MsgUpdateTradeRouteAminoMsg;
            fromProtoMsg(message: _228.MsgUpdateTradeRouteProtoMsg): _228.MsgUpdateTradeRoute;
            toProto(message: _228.MsgUpdateTradeRoute): Uint8Array;
            toProtoMsg(message: _228.MsgUpdateTradeRoute): _228.MsgUpdateTradeRouteProtoMsg;
        };
        MsgUpdateTradeRouteResponse: {
            typeUrl: string;
            encode(_: _228.MsgUpdateTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgUpdateTradeRouteResponse;
            fromPartial(_: Partial<_228.MsgUpdateTradeRouteResponse>): _228.MsgUpdateTradeRouteResponse;
            fromAmino(_: _228.MsgUpdateTradeRouteResponseAmino): _228.MsgUpdateTradeRouteResponse;
            toAmino(_: _228.MsgUpdateTradeRouteResponse): _228.MsgUpdateTradeRouteResponseAmino;
            fromAminoMsg(object: _228.MsgUpdateTradeRouteResponseAminoMsg): _228.MsgUpdateTradeRouteResponse;
            fromProtoMsg(message: _228.MsgUpdateTradeRouteResponseProtoMsg): _228.MsgUpdateTradeRouteResponse;
            toProto(message: _228.MsgUpdateTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _228.MsgUpdateTradeRouteResponse): _228.MsgUpdateTradeRouteResponseProtoMsg;
        };
        MsgSetCommunityPoolRebate: {
            typeUrl: string;
            encode(message: _228.MsgSetCommunityPoolRebate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgSetCommunityPoolRebate;
            fromPartial(object: Partial<_228.MsgSetCommunityPoolRebate>): _228.MsgSetCommunityPoolRebate;
            fromAmino(object: _228.MsgSetCommunityPoolRebateAmino): _228.MsgSetCommunityPoolRebate;
            toAmino(message: _228.MsgSetCommunityPoolRebate): _228.MsgSetCommunityPoolRebateAmino;
            fromAminoMsg(object: _228.MsgSetCommunityPoolRebateAminoMsg): _228.MsgSetCommunityPoolRebate;
            toAminoMsg(message: _228.MsgSetCommunityPoolRebate): _228.MsgSetCommunityPoolRebateAminoMsg;
            fromProtoMsg(message: _228.MsgSetCommunityPoolRebateProtoMsg): _228.MsgSetCommunityPoolRebate;
            toProto(message: _228.MsgSetCommunityPoolRebate): Uint8Array;
            toProtoMsg(message: _228.MsgSetCommunityPoolRebate): _228.MsgSetCommunityPoolRebateProtoMsg;
        };
        MsgSetCommunityPoolRebateResponse: {
            typeUrl: string;
            encode(_: _228.MsgSetCommunityPoolRebateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgSetCommunityPoolRebateResponse;
            fromPartial(_: Partial<_228.MsgSetCommunityPoolRebateResponse>): _228.MsgSetCommunityPoolRebateResponse;
            fromAmino(_: _228.MsgSetCommunityPoolRebateResponseAmino): _228.MsgSetCommunityPoolRebateResponse;
            toAmino(_: _228.MsgSetCommunityPoolRebateResponse): _228.MsgSetCommunityPoolRebateResponseAmino;
            fromAminoMsg(object: _228.MsgSetCommunityPoolRebateResponseAminoMsg): _228.MsgSetCommunityPoolRebateResponse;
            fromProtoMsg(message: _228.MsgSetCommunityPoolRebateResponseProtoMsg): _228.MsgSetCommunityPoolRebateResponse;
            toProto(message: _228.MsgSetCommunityPoolRebateResponse): Uint8Array;
            toProtoMsg(message: _228.MsgSetCommunityPoolRebateResponse): _228.MsgSetCommunityPoolRebateResponseProtoMsg;
        };
        MsgToggleTradeController: {
            typeUrl: string;
            encode(message: _228.MsgToggleTradeController, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgToggleTradeController;
            fromPartial(object: Partial<_228.MsgToggleTradeController>): _228.MsgToggleTradeController;
            fromAmino(object: _228.MsgToggleTradeControllerAmino): _228.MsgToggleTradeController;
            toAmino(message: _228.MsgToggleTradeController): _228.MsgToggleTradeControllerAmino;
            fromAminoMsg(object: _228.MsgToggleTradeControllerAminoMsg): _228.MsgToggleTradeController;
            toAminoMsg(message: _228.MsgToggleTradeController): _228.MsgToggleTradeControllerAminoMsg;
            fromProtoMsg(message: _228.MsgToggleTradeControllerProtoMsg): _228.MsgToggleTradeController;
            toProto(message: _228.MsgToggleTradeController): Uint8Array;
            toProtoMsg(message: _228.MsgToggleTradeController): _228.MsgToggleTradeControllerProtoMsg;
        };
        MsgToggleTradeControllerResponse: {
            typeUrl: string;
            encode(_: _228.MsgToggleTradeControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgToggleTradeControllerResponse;
            fromPartial(_: Partial<_228.MsgToggleTradeControllerResponse>): _228.MsgToggleTradeControllerResponse;
            fromAmino(_: _228.MsgToggleTradeControllerResponseAmino): _228.MsgToggleTradeControllerResponse;
            toAmino(_: _228.MsgToggleTradeControllerResponse): _228.MsgToggleTradeControllerResponseAmino;
            fromAminoMsg(object: _228.MsgToggleTradeControllerResponseAminoMsg): _228.MsgToggleTradeControllerResponse;
            fromProtoMsg(message: _228.MsgToggleTradeControllerResponseProtoMsg): _228.MsgToggleTradeControllerResponse;
            toProto(message: _228.MsgToggleTradeControllerResponse): Uint8Array;
            toProtoMsg(message: _228.MsgToggleTradeControllerResponse): _228.MsgToggleTradeControllerResponseProtoMsg;
        };
        MsgUpdateHostZoneParams: {
            typeUrl: string;
            encode(message: _228.MsgUpdateHostZoneParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgUpdateHostZoneParams;
            fromPartial(object: Partial<_228.MsgUpdateHostZoneParams>): _228.MsgUpdateHostZoneParams;
            fromAmino(object: _228.MsgUpdateHostZoneParamsAmino): _228.MsgUpdateHostZoneParams;
            toAmino(message: _228.MsgUpdateHostZoneParams): _228.MsgUpdateHostZoneParamsAmino;
            fromAminoMsg(object: _228.MsgUpdateHostZoneParamsAminoMsg): _228.MsgUpdateHostZoneParams;
            toAminoMsg(message: _228.MsgUpdateHostZoneParams): _228.MsgUpdateHostZoneParamsAminoMsg;
            fromProtoMsg(message: _228.MsgUpdateHostZoneParamsProtoMsg): _228.MsgUpdateHostZoneParams;
            toProto(message: _228.MsgUpdateHostZoneParams): Uint8Array;
            toProtoMsg(message: _228.MsgUpdateHostZoneParams): _228.MsgUpdateHostZoneParamsProtoMsg;
        };
        MsgUpdateHostZoneParamsResponse: {
            typeUrl: string;
            encode(_: _228.MsgUpdateHostZoneParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.MsgUpdateHostZoneParamsResponse;
            fromPartial(_: Partial<_228.MsgUpdateHostZoneParamsResponse>): _228.MsgUpdateHostZoneParamsResponse;
            fromAmino(_: _228.MsgUpdateHostZoneParamsResponseAmino): _228.MsgUpdateHostZoneParamsResponse;
            toAmino(_: _228.MsgUpdateHostZoneParamsResponse): _228.MsgUpdateHostZoneParamsResponseAmino;
            fromAminoMsg(object: _228.MsgUpdateHostZoneParamsResponseAminoMsg): _228.MsgUpdateHostZoneParamsResponse;
            fromProtoMsg(message: _228.MsgUpdateHostZoneParamsResponseProtoMsg): _228.MsgUpdateHostZoneParamsResponse;
            toProto(message: _228.MsgUpdateHostZoneParamsResponse): Uint8Array;
            toProtoMsg(message: _228.MsgUpdateHostZoneParamsResponse): _228.MsgUpdateHostZoneParamsResponseProtoMsg;
        };
        TradeConfig: {
            typeUrl: string;
            encode(message: _227.TradeConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.TradeConfig;
            fromPartial(object: Partial<_227.TradeConfig>): _227.TradeConfig;
            fromAmino(object: _227.TradeConfigAmino): _227.TradeConfig;
            toAmino(message: _227.TradeConfig): _227.TradeConfigAmino;
            fromAminoMsg(object: _227.TradeConfigAminoMsg): _227.TradeConfig;
            fromProtoMsg(message: _227.TradeConfigProtoMsg): _227.TradeConfig;
            toProto(message: _227.TradeConfig): Uint8Array;
            toProtoMsg(message: _227.TradeConfig): _227.TradeConfigProtoMsg;
        };
        TradeRoute: {
            typeUrl: string;
            encode(message: _227.TradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.TradeRoute;
            fromPartial(object: Partial<_227.TradeRoute>): _227.TradeRoute;
            fromAmino(object: _227.TradeRouteAmino): _227.TradeRoute;
            toAmino(message: _227.TradeRoute): _227.TradeRouteAmino;
            fromAminoMsg(object: _227.TradeRouteAminoMsg): _227.TradeRoute;
            fromProtoMsg(message: _227.TradeRouteProtoMsg): _227.TradeRoute;
            toProto(message: _227.TradeRoute): Uint8Array;
            toProtoMsg(message: _227.TradeRoute): _227.TradeRouteProtoMsg;
        };
        QueryInterchainAccountFromAddressRequest: {
            typeUrl: string;
            encode(message: _226.QueryInterchainAccountFromAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryInterchainAccountFromAddressRequest;
            fromPartial(object: Partial<_226.QueryInterchainAccountFromAddressRequest>): _226.QueryInterchainAccountFromAddressRequest;
            fromAmino(object: _226.QueryInterchainAccountFromAddressRequestAmino): _226.QueryInterchainAccountFromAddressRequest;
            toAmino(message: _226.QueryInterchainAccountFromAddressRequest): _226.QueryInterchainAccountFromAddressRequestAmino;
            fromAminoMsg(object: _226.QueryInterchainAccountFromAddressRequestAminoMsg): _226.QueryInterchainAccountFromAddressRequest;
            fromProtoMsg(message: _226.QueryInterchainAccountFromAddressRequestProtoMsg): _226.QueryInterchainAccountFromAddressRequest;
            toProto(message: _226.QueryInterchainAccountFromAddressRequest): Uint8Array;
            toProtoMsg(message: _226.QueryInterchainAccountFromAddressRequest): _226.QueryInterchainAccountFromAddressRequestProtoMsg;
        };
        QueryInterchainAccountFromAddressResponse: {
            typeUrl: string;
            encode(message: _226.QueryInterchainAccountFromAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryInterchainAccountFromAddressResponse;
            fromPartial(object: Partial<_226.QueryInterchainAccountFromAddressResponse>): _226.QueryInterchainAccountFromAddressResponse;
            fromAmino(object: _226.QueryInterchainAccountFromAddressResponseAmino): _226.QueryInterchainAccountFromAddressResponse;
            toAmino(message: _226.QueryInterchainAccountFromAddressResponse): _226.QueryInterchainAccountFromAddressResponseAmino;
            fromAminoMsg(object: _226.QueryInterchainAccountFromAddressResponseAminoMsg): _226.QueryInterchainAccountFromAddressResponse;
            fromProtoMsg(message: _226.QueryInterchainAccountFromAddressResponseProtoMsg): _226.QueryInterchainAccountFromAddressResponse;
            toProto(message: _226.QueryInterchainAccountFromAddressResponse): Uint8Array;
            toProtoMsg(message: _226.QueryInterchainAccountFromAddressResponse): _226.QueryInterchainAccountFromAddressResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _226.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryParamsRequest;
            fromPartial(_: Partial<_226.QueryParamsRequest>): _226.QueryParamsRequest;
            fromAmino(_: _226.QueryParamsRequestAmino): _226.QueryParamsRequest;
            toAmino(_: _226.QueryParamsRequest): _226.QueryParamsRequestAmino;
            fromAminoMsg(object: _226.QueryParamsRequestAminoMsg): _226.QueryParamsRequest;
            fromProtoMsg(message: _226.QueryParamsRequestProtoMsg): _226.QueryParamsRequest;
            toProto(message: _226.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _226.QueryParamsRequest): _226.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _226.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryParamsResponse;
            fromPartial(object: Partial<_226.QueryParamsResponse>): _226.QueryParamsResponse;
            fromAmino(object: _226.QueryParamsResponseAmino): _226.QueryParamsResponse;
            toAmino(message: _226.QueryParamsResponse): _226.QueryParamsResponseAmino;
            fromAminoMsg(object: _226.QueryParamsResponseAminoMsg): _226.QueryParamsResponse;
            fromProtoMsg(message: _226.QueryParamsResponseProtoMsg): _226.QueryParamsResponse;
            toProto(message: _226.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _226.QueryParamsResponse): _226.QueryParamsResponseProtoMsg;
        };
        QueryGetValidatorsRequest: {
            typeUrl: string;
            encode(message: _226.QueryGetValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryGetValidatorsRequest;
            fromPartial(object: Partial<_226.QueryGetValidatorsRequest>): _226.QueryGetValidatorsRequest;
            fromAmino(object: _226.QueryGetValidatorsRequestAmino): _226.QueryGetValidatorsRequest;
            toAmino(message: _226.QueryGetValidatorsRequest): _226.QueryGetValidatorsRequestAmino;
            fromAminoMsg(object: _226.QueryGetValidatorsRequestAminoMsg): _226.QueryGetValidatorsRequest;
            fromProtoMsg(message: _226.QueryGetValidatorsRequestProtoMsg): _226.QueryGetValidatorsRequest;
            toProto(message: _226.QueryGetValidatorsRequest): Uint8Array;
            toProtoMsg(message: _226.QueryGetValidatorsRequest): _226.QueryGetValidatorsRequestProtoMsg;
        };
        QueryGetValidatorsResponse: {
            typeUrl: string;
            encode(message: _226.QueryGetValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryGetValidatorsResponse;
            fromPartial(object: Partial<_226.QueryGetValidatorsResponse>): _226.QueryGetValidatorsResponse;
            fromAmino(object: _226.QueryGetValidatorsResponseAmino): _226.QueryGetValidatorsResponse;
            toAmino(message: _226.QueryGetValidatorsResponse): _226.QueryGetValidatorsResponseAmino;
            fromAminoMsg(object: _226.QueryGetValidatorsResponseAminoMsg): _226.QueryGetValidatorsResponse;
            fromProtoMsg(message: _226.QueryGetValidatorsResponseProtoMsg): _226.QueryGetValidatorsResponse;
            toProto(message: _226.QueryGetValidatorsResponse): Uint8Array;
            toProtoMsg(message: _226.QueryGetValidatorsResponse): _226.QueryGetValidatorsResponseProtoMsg;
        };
        QueryGetHostZoneRequest: {
            typeUrl: string;
            encode(message: _226.QueryGetHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryGetHostZoneRequest;
            fromPartial(object: Partial<_226.QueryGetHostZoneRequest>): _226.QueryGetHostZoneRequest;
            fromAmino(object: _226.QueryGetHostZoneRequestAmino): _226.QueryGetHostZoneRequest;
            toAmino(message: _226.QueryGetHostZoneRequest): _226.QueryGetHostZoneRequestAmino;
            fromAminoMsg(object: _226.QueryGetHostZoneRequestAminoMsg): _226.QueryGetHostZoneRequest;
            fromProtoMsg(message: _226.QueryGetHostZoneRequestProtoMsg): _226.QueryGetHostZoneRequest;
            toProto(message: _226.QueryGetHostZoneRequest): Uint8Array;
            toProtoMsg(message: _226.QueryGetHostZoneRequest): _226.QueryGetHostZoneRequestProtoMsg;
        };
        QueryGetHostZoneResponse: {
            typeUrl: string;
            encode(message: _226.QueryGetHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryGetHostZoneResponse;
            fromPartial(object: Partial<_226.QueryGetHostZoneResponse>): _226.QueryGetHostZoneResponse;
            fromAmino(object: _226.QueryGetHostZoneResponseAmino): _226.QueryGetHostZoneResponse;
            toAmino(message: _226.QueryGetHostZoneResponse): _226.QueryGetHostZoneResponseAmino;
            fromAminoMsg(object: _226.QueryGetHostZoneResponseAminoMsg): _226.QueryGetHostZoneResponse;
            fromProtoMsg(message: _226.QueryGetHostZoneResponseProtoMsg): _226.QueryGetHostZoneResponse;
            toProto(message: _226.QueryGetHostZoneResponse): Uint8Array;
            toProtoMsg(message: _226.QueryGetHostZoneResponse): _226.QueryGetHostZoneResponseProtoMsg;
        };
        QueryAllHostZoneRequest: {
            typeUrl: string;
            encode(message: _226.QueryAllHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryAllHostZoneRequest;
            fromPartial(object: Partial<_226.QueryAllHostZoneRequest>): _226.QueryAllHostZoneRequest;
            fromAmino(object: _226.QueryAllHostZoneRequestAmino): _226.QueryAllHostZoneRequest;
            toAmino(message: _226.QueryAllHostZoneRequest): _226.QueryAllHostZoneRequestAmino;
            fromAminoMsg(object: _226.QueryAllHostZoneRequestAminoMsg): _226.QueryAllHostZoneRequest;
            fromProtoMsg(message: _226.QueryAllHostZoneRequestProtoMsg): _226.QueryAllHostZoneRequest;
            toProto(message: _226.QueryAllHostZoneRequest): Uint8Array;
            toProtoMsg(message: _226.QueryAllHostZoneRequest): _226.QueryAllHostZoneRequestProtoMsg;
        };
        QueryAllHostZoneResponse: {
            typeUrl: string;
            encode(message: _226.QueryAllHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryAllHostZoneResponse;
            fromPartial(object: Partial<_226.QueryAllHostZoneResponse>): _226.QueryAllHostZoneResponse;
            fromAmino(object: _226.QueryAllHostZoneResponseAmino): _226.QueryAllHostZoneResponse;
            toAmino(message: _226.QueryAllHostZoneResponse): _226.QueryAllHostZoneResponseAmino;
            fromAminoMsg(object: _226.QueryAllHostZoneResponseAminoMsg): _226.QueryAllHostZoneResponse;
            fromProtoMsg(message: _226.QueryAllHostZoneResponseProtoMsg): _226.QueryAllHostZoneResponse;
            toProto(message: _226.QueryAllHostZoneResponse): Uint8Array;
            toProtoMsg(message: _226.QueryAllHostZoneResponse): _226.QueryAllHostZoneResponseProtoMsg;
        };
        QueryModuleAddressRequest: {
            typeUrl: string;
            encode(message: _226.QueryModuleAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryModuleAddressRequest;
            fromPartial(object: Partial<_226.QueryModuleAddressRequest>): _226.QueryModuleAddressRequest;
            fromAmino(object: _226.QueryModuleAddressRequestAmino): _226.QueryModuleAddressRequest;
            toAmino(message: _226.QueryModuleAddressRequest): _226.QueryModuleAddressRequestAmino;
            fromAminoMsg(object: _226.QueryModuleAddressRequestAminoMsg): _226.QueryModuleAddressRequest;
            fromProtoMsg(message: _226.QueryModuleAddressRequestProtoMsg): _226.QueryModuleAddressRequest;
            toProto(message: _226.QueryModuleAddressRequest): Uint8Array;
            toProtoMsg(message: _226.QueryModuleAddressRequest): _226.QueryModuleAddressRequestProtoMsg;
        };
        QueryModuleAddressResponse: {
            typeUrl: string;
            encode(message: _226.QueryModuleAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryModuleAddressResponse;
            fromPartial(object: Partial<_226.QueryModuleAddressResponse>): _226.QueryModuleAddressResponse;
            fromAmino(object: _226.QueryModuleAddressResponseAmino): _226.QueryModuleAddressResponse;
            toAmino(message: _226.QueryModuleAddressResponse): _226.QueryModuleAddressResponseAmino;
            fromAminoMsg(object: _226.QueryModuleAddressResponseAminoMsg): _226.QueryModuleAddressResponse;
            fromProtoMsg(message: _226.QueryModuleAddressResponseProtoMsg): _226.QueryModuleAddressResponse;
            toProto(message: _226.QueryModuleAddressResponse): Uint8Array;
            toProtoMsg(message: _226.QueryModuleAddressResponse): _226.QueryModuleAddressResponseProtoMsg;
        };
        QueryGetEpochTrackerRequest: {
            typeUrl: string;
            encode(message: _226.QueryGetEpochTrackerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryGetEpochTrackerRequest;
            fromPartial(object: Partial<_226.QueryGetEpochTrackerRequest>): _226.QueryGetEpochTrackerRequest;
            fromAmino(object: _226.QueryGetEpochTrackerRequestAmino): _226.QueryGetEpochTrackerRequest;
            toAmino(message: _226.QueryGetEpochTrackerRequest): _226.QueryGetEpochTrackerRequestAmino;
            fromAminoMsg(object: _226.QueryGetEpochTrackerRequestAminoMsg): _226.QueryGetEpochTrackerRequest;
            fromProtoMsg(message: _226.QueryGetEpochTrackerRequestProtoMsg): _226.QueryGetEpochTrackerRequest;
            toProto(message: _226.QueryGetEpochTrackerRequest): Uint8Array;
            toProtoMsg(message: _226.QueryGetEpochTrackerRequest): _226.QueryGetEpochTrackerRequestProtoMsg;
        };
        QueryGetEpochTrackerResponse: {
            typeUrl: string;
            encode(message: _226.QueryGetEpochTrackerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryGetEpochTrackerResponse;
            fromPartial(object: Partial<_226.QueryGetEpochTrackerResponse>): _226.QueryGetEpochTrackerResponse;
            fromAmino(object: _226.QueryGetEpochTrackerResponseAmino): _226.QueryGetEpochTrackerResponse;
            toAmino(message: _226.QueryGetEpochTrackerResponse): _226.QueryGetEpochTrackerResponseAmino;
            fromAminoMsg(object: _226.QueryGetEpochTrackerResponseAminoMsg): _226.QueryGetEpochTrackerResponse;
            fromProtoMsg(message: _226.QueryGetEpochTrackerResponseProtoMsg): _226.QueryGetEpochTrackerResponse;
            toProto(message: _226.QueryGetEpochTrackerResponse): Uint8Array;
            toProtoMsg(message: _226.QueryGetEpochTrackerResponse): _226.QueryGetEpochTrackerResponseProtoMsg;
        };
        QueryAllEpochTrackerRequest: {
            typeUrl: string;
            encode(_: _226.QueryAllEpochTrackerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryAllEpochTrackerRequest;
            fromPartial(_: Partial<_226.QueryAllEpochTrackerRequest>): _226.QueryAllEpochTrackerRequest;
            fromAmino(_: _226.QueryAllEpochTrackerRequestAmino): _226.QueryAllEpochTrackerRequest;
            toAmino(_: _226.QueryAllEpochTrackerRequest): _226.QueryAllEpochTrackerRequestAmino;
            fromAminoMsg(object: _226.QueryAllEpochTrackerRequestAminoMsg): _226.QueryAllEpochTrackerRequest;
            fromProtoMsg(message: _226.QueryAllEpochTrackerRequestProtoMsg): _226.QueryAllEpochTrackerRequest;
            toProto(message: _226.QueryAllEpochTrackerRequest): Uint8Array;
            toProtoMsg(message: _226.QueryAllEpochTrackerRequest): _226.QueryAllEpochTrackerRequestProtoMsg;
        };
        QueryAllEpochTrackerResponse: {
            typeUrl: string;
            encode(message: _226.QueryAllEpochTrackerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryAllEpochTrackerResponse;
            fromPartial(object: Partial<_226.QueryAllEpochTrackerResponse>): _226.QueryAllEpochTrackerResponse;
            fromAmino(object: _226.QueryAllEpochTrackerResponseAmino): _226.QueryAllEpochTrackerResponse;
            toAmino(message: _226.QueryAllEpochTrackerResponse): _226.QueryAllEpochTrackerResponseAmino;
            fromAminoMsg(object: _226.QueryAllEpochTrackerResponseAminoMsg): _226.QueryAllEpochTrackerResponse;
            fromProtoMsg(message: _226.QueryAllEpochTrackerResponseProtoMsg): _226.QueryAllEpochTrackerResponse;
            toProto(message: _226.QueryAllEpochTrackerResponse): Uint8Array;
            toProtoMsg(message: _226.QueryAllEpochTrackerResponse): _226.QueryAllEpochTrackerResponseProtoMsg;
        };
        QueryGetNextPacketSequenceRequest: {
            typeUrl: string;
            encode(message: _226.QueryGetNextPacketSequenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryGetNextPacketSequenceRequest;
            fromPartial(object: Partial<_226.QueryGetNextPacketSequenceRequest>): _226.QueryGetNextPacketSequenceRequest;
            fromAmino(object: _226.QueryGetNextPacketSequenceRequestAmino): _226.QueryGetNextPacketSequenceRequest;
            toAmino(message: _226.QueryGetNextPacketSequenceRequest): _226.QueryGetNextPacketSequenceRequestAmino;
            fromAminoMsg(object: _226.QueryGetNextPacketSequenceRequestAminoMsg): _226.QueryGetNextPacketSequenceRequest;
            fromProtoMsg(message: _226.QueryGetNextPacketSequenceRequestProtoMsg): _226.QueryGetNextPacketSequenceRequest;
            toProto(message: _226.QueryGetNextPacketSequenceRequest): Uint8Array;
            toProtoMsg(message: _226.QueryGetNextPacketSequenceRequest): _226.QueryGetNextPacketSequenceRequestProtoMsg;
        };
        QueryGetNextPacketSequenceResponse: {
            typeUrl: string;
            encode(message: _226.QueryGetNextPacketSequenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryGetNextPacketSequenceResponse;
            fromPartial(object: Partial<_226.QueryGetNextPacketSequenceResponse>): _226.QueryGetNextPacketSequenceResponse;
            fromAmino(object: _226.QueryGetNextPacketSequenceResponseAmino): _226.QueryGetNextPacketSequenceResponse;
            toAmino(message: _226.QueryGetNextPacketSequenceResponse): _226.QueryGetNextPacketSequenceResponseAmino;
            fromAminoMsg(object: _226.QueryGetNextPacketSequenceResponseAminoMsg): _226.QueryGetNextPacketSequenceResponse;
            fromProtoMsg(message: _226.QueryGetNextPacketSequenceResponseProtoMsg): _226.QueryGetNextPacketSequenceResponse;
            toProto(message: _226.QueryGetNextPacketSequenceResponse): Uint8Array;
            toProtoMsg(message: _226.QueryGetNextPacketSequenceResponse): _226.QueryGetNextPacketSequenceResponseProtoMsg;
        };
        QueryAddressUnbondings: {
            typeUrl: string;
            encode(message: _226.QueryAddressUnbondings, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryAddressUnbondings;
            fromPartial(object: Partial<_226.QueryAddressUnbondings>): _226.QueryAddressUnbondings;
            fromAmino(object: _226.QueryAddressUnbondingsAmino): _226.QueryAddressUnbondings;
            toAmino(message: _226.QueryAddressUnbondings): _226.QueryAddressUnbondingsAmino;
            fromAminoMsg(object: _226.QueryAddressUnbondingsAminoMsg): _226.QueryAddressUnbondings;
            fromProtoMsg(message: _226.QueryAddressUnbondingsProtoMsg): _226.QueryAddressUnbondings;
            toProto(message: _226.QueryAddressUnbondings): Uint8Array;
            toProtoMsg(message: _226.QueryAddressUnbondings): _226.QueryAddressUnbondingsProtoMsg;
        };
        QueryAddressUnbondingsResponse: {
            typeUrl: string;
            encode(message: _226.QueryAddressUnbondingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryAddressUnbondingsResponse;
            fromPartial(object: Partial<_226.QueryAddressUnbondingsResponse>): _226.QueryAddressUnbondingsResponse;
            fromAmino(object: _226.QueryAddressUnbondingsResponseAmino): _226.QueryAddressUnbondingsResponse;
            toAmino(message: _226.QueryAddressUnbondingsResponse): _226.QueryAddressUnbondingsResponseAmino;
            fromAminoMsg(object: _226.QueryAddressUnbondingsResponseAminoMsg): _226.QueryAddressUnbondingsResponse;
            fromProtoMsg(message: _226.QueryAddressUnbondingsResponseProtoMsg): _226.QueryAddressUnbondingsResponse;
            toProto(message: _226.QueryAddressUnbondingsResponse): Uint8Array;
            toProtoMsg(message: _226.QueryAddressUnbondingsResponse): _226.QueryAddressUnbondingsResponseProtoMsg;
        };
        QueryAllTradeRoutes: {
            typeUrl: string;
            encode(_: _226.QueryAllTradeRoutes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryAllTradeRoutes;
            fromPartial(_: Partial<_226.QueryAllTradeRoutes>): _226.QueryAllTradeRoutes;
            fromAmino(_: _226.QueryAllTradeRoutesAmino): _226.QueryAllTradeRoutes;
            toAmino(_: _226.QueryAllTradeRoutes): _226.QueryAllTradeRoutesAmino;
            fromAminoMsg(object: _226.QueryAllTradeRoutesAminoMsg): _226.QueryAllTradeRoutes;
            fromProtoMsg(message: _226.QueryAllTradeRoutesProtoMsg): _226.QueryAllTradeRoutes;
            toProto(message: _226.QueryAllTradeRoutes): Uint8Array;
            toProtoMsg(message: _226.QueryAllTradeRoutes): _226.QueryAllTradeRoutesProtoMsg;
        };
        QueryAllTradeRoutesResponse: {
            typeUrl: string;
            encode(message: _226.QueryAllTradeRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryAllTradeRoutesResponse;
            fromPartial(object: Partial<_226.QueryAllTradeRoutesResponse>): _226.QueryAllTradeRoutesResponse;
            fromAmino(object: _226.QueryAllTradeRoutesResponseAmino): _226.QueryAllTradeRoutesResponse;
            toAmino(message: _226.QueryAllTradeRoutesResponse): _226.QueryAllTradeRoutesResponseAmino;
            fromAminoMsg(object: _226.QueryAllTradeRoutesResponseAminoMsg): _226.QueryAllTradeRoutesResponse;
            fromProtoMsg(message: _226.QueryAllTradeRoutesResponseProtoMsg): _226.QueryAllTradeRoutesResponse;
            toProto(message: _226.QueryAllTradeRoutesResponse): Uint8Array;
            toProtoMsg(message: _226.QueryAllTradeRoutesResponse): _226.QueryAllTradeRoutesResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _225.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.Params;
            fromPartial(object: Partial<_225.Params>): _225.Params;
            fromAmino(object: _225.ParamsAmino): _225.Params;
            toAmino(message: _225.Params): _225.ParamsAmino;
            fromAminoMsg(object: _225.ParamsAminoMsg): _225.Params;
            fromProtoMsg(message: _225.ParamsProtoMsg): _225.Params;
            toProto(message: _225.Params): Uint8Array;
            toProtoMsg(message: _225.Params): _225.ParamsProtoMsg;
        };
        StakeibcPacketData: {
            typeUrl: string;
            encode(message: _224.StakeibcPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.StakeibcPacketData;
            fromPartial(object: Partial<_224.StakeibcPacketData>): _224.StakeibcPacketData;
            fromAmino(object: _224.StakeibcPacketDataAmino): _224.StakeibcPacketData;
            toAmino(message: _224.StakeibcPacketData): _224.StakeibcPacketDataAmino;
            fromAminoMsg(object: _224.StakeibcPacketDataAminoMsg): _224.StakeibcPacketData;
            fromProtoMsg(message: _224.StakeibcPacketDataProtoMsg): _224.StakeibcPacketData;
            toProto(message: _224.StakeibcPacketData): Uint8Array;
            toProtoMsg(message: _224.StakeibcPacketData): _224.StakeibcPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _224.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.NoData;
            fromPartial(_: Partial<_224.NoData>): _224.NoData;
            fromAmino(_: _224.NoDataAmino): _224.NoData;
            toAmino(_: _224.NoData): _224.NoDataAmino;
            fromAminoMsg(object: _224.NoDataAminoMsg): _224.NoData;
            fromProtoMsg(message: _224.NoDataProtoMsg): _224.NoData;
            toProto(message: _224.NoData): Uint8Array;
            toProtoMsg(message: _224.NoData): _224.NoDataProtoMsg;
        };
        iCAAccountTypeFromJSON(object: any): _223.ICAAccountType;
        iCAAccountTypeToJSON(object: _223.ICAAccountType): string;
        ICAAccountType: typeof _223.ICAAccountType;
        ICAAccountTypeSDKType: typeof _223.ICAAccountType;
        ICAAccountTypeAmino: typeof _223.ICAAccountType;
        ICAAccount: {
            typeUrl: string;
            encode(message: _223.ICAAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.ICAAccount;
            fromPartial(object: Partial<_223.ICAAccount>): _223.ICAAccount;
            fromAmino(object: _223.ICAAccountAmino): _223.ICAAccount;
            toAmino(message: _223.ICAAccount): _223.ICAAccountAmino;
            fromAminoMsg(object: _223.ICAAccountAminoMsg): _223.ICAAccount;
            fromProtoMsg(message: _223.ICAAccountProtoMsg): _223.ICAAccount;
            toProto(message: _223.ICAAccount): Uint8Array;
            toProtoMsg(message: _223.ICAAccount): _223.ICAAccountProtoMsg;
        };
        CommunityPoolRebate: {
            typeUrl: string;
            encode(message: _222.CommunityPoolRebate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.CommunityPoolRebate;
            fromPartial(object: Partial<_222.CommunityPoolRebate>): _222.CommunityPoolRebate;
            fromAmino(object: _222.CommunityPoolRebateAmino): _222.CommunityPoolRebate;
            toAmino(message: _222.CommunityPoolRebate): _222.CommunityPoolRebateAmino;
            fromAminoMsg(object: _222.CommunityPoolRebateAminoMsg): _222.CommunityPoolRebate;
            fromProtoMsg(message: _222.CommunityPoolRebateProtoMsg): _222.CommunityPoolRebate;
            toProto(message: _222.CommunityPoolRebate): Uint8Array;
            toProtoMsg(message: _222.CommunityPoolRebate): _222.CommunityPoolRebateProtoMsg;
        };
        HostZone: {
            typeUrl: string;
            encode(message: _222.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.HostZone;
            fromPartial(object: Partial<_222.HostZone>): _222.HostZone;
            fromAmino(object: _222.HostZoneAmino): _222.HostZone;
            toAmino(message: _222.HostZone): _222.HostZoneAmino;
            fromAminoMsg(object: _222.HostZoneAminoMsg): _222.HostZone;
            fromProtoMsg(message: _222.HostZoneProtoMsg): _222.HostZone;
            toProto(message: _222.HostZone): Uint8Array;
            toProtoMsg(message: _222.HostZone): _222.HostZoneProtoMsg;
        };
        AddValidatorsProposal: {
            typeUrl: string;
            encode(message: _221.AddValidatorsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.AddValidatorsProposal;
            fromPartial(object: Partial<_221.AddValidatorsProposal>): _221.AddValidatorsProposal;
            fromAmino(object: _221.AddValidatorsProposalAmino): _221.AddValidatorsProposal;
            toAmino(message: _221.AddValidatorsProposal): _221.AddValidatorsProposalAmino;
            fromAminoMsg(object: _221.AddValidatorsProposalAminoMsg): _221.AddValidatorsProposal;
            fromProtoMsg(message: _221.AddValidatorsProposalProtoMsg): _221.AddValidatorsProposal;
            toProto(message: _221.AddValidatorsProposal): Uint8Array;
            toProtoMsg(message: _221.AddValidatorsProposal): _221.AddValidatorsProposalProtoMsg;
        };
        ToggleLSMProposal: {
            typeUrl: string;
            encode(message: _221.ToggleLSMProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.ToggleLSMProposal;
            fromPartial(object: Partial<_221.ToggleLSMProposal>): _221.ToggleLSMProposal;
            fromAmino(object: _221.ToggleLSMProposalAmino): _221.ToggleLSMProposal;
            toAmino(message: _221.ToggleLSMProposal): _221.ToggleLSMProposalAmino;
            fromAminoMsg(object: _221.ToggleLSMProposalAminoMsg): _221.ToggleLSMProposal;
            fromProtoMsg(message: _221.ToggleLSMProposalProtoMsg): _221.ToggleLSMProposal;
            toProto(message: _221.ToggleLSMProposal): Uint8Array;
            toProtoMsg(message: _221.ToggleLSMProposal): _221.ToggleLSMProposalProtoMsg;
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
        EpochTracker: {
            typeUrl: string;
            encode(message: _219.EpochTracker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.EpochTracker;
            fromPartial(object: Partial<_219.EpochTracker>): _219.EpochTracker;
            fromAmino(object: _219.EpochTrackerAmino): _219.EpochTracker;
            toAmino(message: _219.EpochTracker): _219.EpochTrackerAmino;
            fromAminoMsg(object: _219.EpochTrackerAminoMsg): _219.EpochTracker;
            fromProtoMsg(message: _219.EpochTrackerProtoMsg): _219.EpochTracker;
            toProto(message: _219.EpochTracker): Uint8Array;
            toProtoMsg(message: _219.EpochTracker): _219.EpochTrackerProtoMsg;
        };
        SplitDelegation: {
            typeUrl: string;
            encode(message: _218.SplitDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.SplitDelegation;
            fromPartial(object: Partial<_218.SplitDelegation>): _218.SplitDelegation;
            fromAmino(object: _218.SplitDelegationAmino): _218.SplitDelegation;
            toAmino(message: _218.SplitDelegation): _218.SplitDelegationAmino;
            fromAminoMsg(object: _218.SplitDelegationAminoMsg): _218.SplitDelegation;
            fromProtoMsg(message: _218.SplitDelegationProtoMsg): _218.SplitDelegation;
            toProto(message: _218.SplitDelegation): Uint8Array;
            toProtoMsg(message: _218.SplitDelegation): _218.SplitDelegationProtoMsg;
        };
        DelegateCallback: {
            typeUrl: string;
            encode(message: _218.DelegateCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.DelegateCallback;
            fromPartial(object: Partial<_218.DelegateCallback>): _218.DelegateCallback;
            fromAmino(object: _218.DelegateCallbackAmino): _218.DelegateCallback;
            toAmino(message: _218.DelegateCallback): _218.DelegateCallbackAmino;
            fromAminoMsg(object: _218.DelegateCallbackAminoMsg): _218.DelegateCallback;
            fromProtoMsg(message: _218.DelegateCallbackProtoMsg): _218.DelegateCallback;
            toProto(message: _218.DelegateCallback): Uint8Array;
            toProtoMsg(message: _218.DelegateCallback): _218.DelegateCallbackProtoMsg;
        };
        ClaimCallback: {
            typeUrl: string;
            encode(message: _218.ClaimCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.ClaimCallback;
            fromPartial(object: Partial<_218.ClaimCallback>): _218.ClaimCallback;
            fromAmino(object: _218.ClaimCallbackAmino): _218.ClaimCallback;
            toAmino(message: _218.ClaimCallback): _218.ClaimCallbackAmino;
            fromAminoMsg(object: _218.ClaimCallbackAminoMsg): _218.ClaimCallback;
            fromProtoMsg(message: _218.ClaimCallbackProtoMsg): _218.ClaimCallback;
            toProto(message: _218.ClaimCallback): Uint8Array;
            toProtoMsg(message: _218.ClaimCallback): _218.ClaimCallbackProtoMsg;
        };
        ReinvestCallback: {
            typeUrl: string;
            encode(message: _218.ReinvestCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.ReinvestCallback;
            fromPartial(object: Partial<_218.ReinvestCallback>): _218.ReinvestCallback;
            fromAmino(object: _218.ReinvestCallbackAmino): _218.ReinvestCallback;
            toAmino(message: _218.ReinvestCallback): _218.ReinvestCallbackAmino;
            fromAminoMsg(object: _218.ReinvestCallbackAminoMsg): _218.ReinvestCallback;
            fromProtoMsg(message: _218.ReinvestCallbackProtoMsg): _218.ReinvestCallback;
            toProto(message: _218.ReinvestCallback): Uint8Array;
            toProtoMsg(message: _218.ReinvestCallback): _218.ReinvestCallbackProtoMsg;
        };
        UndelegateCallback: {
            typeUrl: string;
            encode(message: _218.UndelegateCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.UndelegateCallback;
            fromPartial(object: Partial<_218.UndelegateCallback>): _218.UndelegateCallback;
            fromAmino(object: _218.UndelegateCallbackAmino): _218.UndelegateCallback;
            toAmino(message: _218.UndelegateCallback): _218.UndelegateCallbackAmino;
            fromAminoMsg(object: _218.UndelegateCallbackAminoMsg): _218.UndelegateCallback;
            fromProtoMsg(message: _218.UndelegateCallbackProtoMsg): _218.UndelegateCallback;
            toProto(message: _218.UndelegateCallback): Uint8Array;
            toProtoMsg(message: _218.UndelegateCallback): _218.UndelegateCallbackProtoMsg;
        };
        RedemptionCallback: {
            typeUrl: string;
            encode(message: _218.RedemptionCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.RedemptionCallback;
            fromPartial(object: Partial<_218.RedemptionCallback>): _218.RedemptionCallback;
            fromAmino(object: _218.RedemptionCallbackAmino): _218.RedemptionCallback;
            toAmino(message: _218.RedemptionCallback): _218.RedemptionCallbackAmino;
            fromAminoMsg(object: _218.RedemptionCallbackAminoMsg): _218.RedemptionCallback;
            fromProtoMsg(message: _218.RedemptionCallbackProtoMsg): _218.RedemptionCallback;
            toProto(message: _218.RedemptionCallback): Uint8Array;
            toProtoMsg(message: _218.RedemptionCallback): _218.RedemptionCallbackProtoMsg;
        };
        Rebalancing: {
            typeUrl: string;
            encode(message: _218.Rebalancing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.Rebalancing;
            fromPartial(object: Partial<_218.Rebalancing>): _218.Rebalancing;
            fromAmino(object: _218.RebalancingAmino): _218.Rebalancing;
            toAmino(message: _218.Rebalancing): _218.RebalancingAmino;
            fromAminoMsg(object: _218.RebalancingAminoMsg): _218.Rebalancing;
            fromProtoMsg(message: _218.RebalancingProtoMsg): _218.Rebalancing;
            toProto(message: _218.Rebalancing): Uint8Array;
            toProtoMsg(message: _218.Rebalancing): _218.RebalancingProtoMsg;
        };
        RebalanceCallback: {
            typeUrl: string;
            encode(message: _218.RebalanceCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.RebalanceCallback;
            fromPartial(object: Partial<_218.RebalanceCallback>): _218.RebalanceCallback;
            fromAmino(object: _218.RebalanceCallbackAmino): _218.RebalanceCallback;
            toAmino(message: _218.RebalanceCallback): _218.RebalanceCallbackAmino;
            fromAminoMsg(object: _218.RebalanceCallbackAminoMsg): _218.RebalanceCallback;
            fromProtoMsg(message: _218.RebalanceCallbackProtoMsg): _218.RebalanceCallback;
            toProto(message: _218.RebalanceCallback): Uint8Array;
            toProtoMsg(message: _218.RebalanceCallback): _218.RebalanceCallbackProtoMsg;
        };
        DetokenizeSharesCallback: {
            typeUrl: string;
            encode(message: _218.DetokenizeSharesCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.DetokenizeSharesCallback;
            fromPartial(object: Partial<_218.DetokenizeSharesCallback>): _218.DetokenizeSharesCallback;
            fromAmino(object: _218.DetokenizeSharesCallbackAmino): _218.DetokenizeSharesCallback;
            toAmino(message: _218.DetokenizeSharesCallback): _218.DetokenizeSharesCallbackAmino;
            fromAminoMsg(object: _218.DetokenizeSharesCallbackAminoMsg): _218.DetokenizeSharesCallback;
            fromProtoMsg(message: _218.DetokenizeSharesCallbackProtoMsg): _218.DetokenizeSharesCallback;
            toProto(message: _218.DetokenizeSharesCallback): Uint8Array;
            toProtoMsg(message: _218.DetokenizeSharesCallback): _218.DetokenizeSharesCallbackProtoMsg;
        };
        LSMLiquidStake: {
            typeUrl: string;
            encode(message: _218.LSMLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.LSMLiquidStake;
            fromPartial(object: Partial<_218.LSMLiquidStake>): _218.LSMLiquidStake;
            fromAmino(object: _218.LSMLiquidStakeAmino): _218.LSMLiquidStake;
            toAmino(message: _218.LSMLiquidStake): _218.LSMLiquidStakeAmino;
            fromAminoMsg(object: _218.LSMLiquidStakeAminoMsg): _218.LSMLiquidStake;
            fromProtoMsg(message: _218.LSMLiquidStakeProtoMsg): _218.LSMLiquidStake;
            toProto(message: _218.LSMLiquidStake): Uint8Array;
            toProtoMsg(message: _218.LSMLiquidStake): _218.LSMLiquidStakeProtoMsg;
        };
        ValidatorSharesToTokensQueryCallback: {
            typeUrl: string;
            encode(message: _218.ValidatorSharesToTokensQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.ValidatorSharesToTokensQueryCallback;
            fromPartial(object: Partial<_218.ValidatorSharesToTokensQueryCallback>): _218.ValidatorSharesToTokensQueryCallback;
            fromAmino(object: _218.ValidatorSharesToTokensQueryCallbackAmino): _218.ValidatorSharesToTokensQueryCallback;
            toAmino(message: _218.ValidatorSharesToTokensQueryCallback): _218.ValidatorSharesToTokensQueryCallbackAmino;
            fromAminoMsg(object: _218.ValidatorSharesToTokensQueryCallbackAminoMsg): _218.ValidatorSharesToTokensQueryCallback;
            fromProtoMsg(message: _218.ValidatorSharesToTokensQueryCallbackProtoMsg): _218.ValidatorSharesToTokensQueryCallback;
            toProto(message: _218.ValidatorSharesToTokensQueryCallback): Uint8Array;
            toProtoMsg(message: _218.ValidatorSharesToTokensQueryCallback): _218.ValidatorSharesToTokensQueryCallbackProtoMsg;
        };
        DelegatorSharesQueryCallback: {
            typeUrl: string;
            encode(message: _218.DelegatorSharesQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.DelegatorSharesQueryCallback;
            fromPartial(object: Partial<_218.DelegatorSharesQueryCallback>): _218.DelegatorSharesQueryCallback;
            fromAmino(object: _218.DelegatorSharesQueryCallbackAmino): _218.DelegatorSharesQueryCallback;
            toAmino(message: _218.DelegatorSharesQueryCallback): _218.DelegatorSharesQueryCallbackAmino;
            fromAminoMsg(object: _218.DelegatorSharesQueryCallbackAminoMsg): _218.DelegatorSharesQueryCallback;
            fromProtoMsg(message: _218.DelegatorSharesQueryCallbackProtoMsg): _218.DelegatorSharesQueryCallback;
            toProto(message: _218.DelegatorSharesQueryCallback): Uint8Array;
            toProtoMsg(message: _218.DelegatorSharesQueryCallback): _218.DelegatorSharesQueryCallbackProtoMsg;
        };
        CommunityPoolBalanceQueryCallback: {
            typeUrl: string;
            encode(message: _218.CommunityPoolBalanceQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.CommunityPoolBalanceQueryCallback;
            fromPartial(object: Partial<_218.CommunityPoolBalanceQueryCallback>): _218.CommunityPoolBalanceQueryCallback;
            fromAmino(object: _218.CommunityPoolBalanceQueryCallbackAmino): _218.CommunityPoolBalanceQueryCallback;
            toAmino(message: _218.CommunityPoolBalanceQueryCallback): _218.CommunityPoolBalanceQueryCallbackAmino;
            fromAminoMsg(object: _218.CommunityPoolBalanceQueryCallbackAminoMsg): _218.CommunityPoolBalanceQueryCallback;
            fromProtoMsg(message: _218.CommunityPoolBalanceQueryCallbackProtoMsg): _218.CommunityPoolBalanceQueryCallback;
            toProto(message: _218.CommunityPoolBalanceQueryCallback): Uint8Array;
            toProtoMsg(message: _218.CommunityPoolBalanceQueryCallback): _218.CommunityPoolBalanceQueryCallbackProtoMsg;
        };
        TradeRouteCallback: {
            typeUrl: string;
            encode(message: _218.TradeRouteCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.TradeRouteCallback;
            fromPartial(object: Partial<_218.TradeRouteCallback>): _218.TradeRouteCallback;
            fromAmino(object: _218.TradeRouteCallbackAmino): _218.TradeRouteCallback;
            toAmino(message: _218.TradeRouteCallback): _218.TradeRouteCallbackAmino;
            fromAminoMsg(object: _218.TradeRouteCallbackAminoMsg): _218.TradeRouteCallback;
            fromProtoMsg(message: _218.TradeRouteCallbackProtoMsg): _218.TradeRouteCallback;
            toProto(message: _218.TradeRouteCallback): Uint8Array;
            toProtoMsg(message: _218.TradeRouteCallback): _218.TradeRouteCallbackProtoMsg;
        };
        AddressUnbonding: {
            typeUrl: string;
            encode(message: _217.AddressUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.AddressUnbonding;
            fromPartial(object: Partial<_217.AddressUnbonding>): _217.AddressUnbonding;
            fromAmino(object: _217.AddressUnbondingAmino): _217.AddressUnbonding;
            toAmino(message: _217.AddressUnbonding): _217.AddressUnbondingAmino;
            fromAminoMsg(object: _217.AddressUnbondingAminoMsg): _217.AddressUnbonding;
            fromProtoMsg(message: _217.AddressUnbondingProtoMsg): _217.AddressUnbonding;
            toProto(message: _217.AddressUnbonding): Uint8Array;
            toProtoMsg(message: _217.AddressUnbonding): _217.AddressUnbondingProtoMsg;
        };
    };
    const staketia: {
        MsgClientImpl: typeof _376.MsgClientImpl;
        QueryClientImpl: typeof _369.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            hostZone(request?: _231.QueryHostZoneRequest): Promise<_231.QueryHostZoneResponse>;
            delegationRecords(request: _231.QueryDelegationRecordsRequest): Promise<_231.QueryDelegationRecordsResponse>;
            unbondingRecords(request: _231.QueryUnbondingRecordsRequest): Promise<_231.QueryUnbondingRecordsResponse>;
            redemptionRecord(request: _231.QueryRedemptionRecordRequest): Promise<_231.QueryRedemptionRecordResponse>;
            redemptionRecords(request: _231.QueryRedemptionRecordsRequest): Promise<_231.QueryRedemptionRecordsResponse>;
            slashRecords(request?: _231.QuerySlashRecordsRequest): Promise<_231.QuerySlashRecordsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _233.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _233.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmDelegation(value: _233.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUndelegation(value: _233.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUnbondedTokenSweep(value: _233.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                adjustDelegatedBalance(value: _233.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _233.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _233.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                refreshRedemptionRate(value: _233.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteDelegationRecord(value: _233.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteUnbondingRecord(value: _233.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteRedemptionRecord(value: _233.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOperatorAddress(value: _233.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _233.MsgLiquidStake): {
                    typeUrl: string;
                    value: _233.MsgLiquidStake;
                };
                redeemStake(value: _233.MsgRedeemStake): {
                    typeUrl: string;
                    value: _233.MsgRedeemStake;
                };
                confirmDelegation(value: _233.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _233.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _233.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _233.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _233.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _233.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _233.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _233.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _233.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _233.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _233.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _233.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _233.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _233.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _233.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _233.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _233.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _233.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _233.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _233.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _233.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _233.MsgSetOperatorAddress;
                };
            };
            fromPartial: {
                liquidStake(value: _233.MsgLiquidStake): {
                    typeUrl: string;
                    value: _233.MsgLiquidStake;
                };
                redeemStake(value: _233.MsgRedeemStake): {
                    typeUrl: string;
                    value: _233.MsgRedeemStake;
                };
                confirmDelegation(value: _233.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _233.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _233.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _233.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _233.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _233.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _233.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _233.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _233.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _233.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _233.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _233.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _233.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _233.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _233.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _233.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _233.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _233.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _233.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _233.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _233.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _233.MsgSetOperatorAddress;
                };
            };
        };
        AminoConverter: {
            "/stride.staketia.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _233.MsgLiquidStake) => _233.MsgLiquidStakeAmino;
                fromAmino: (object: _233.MsgLiquidStakeAmino) => _233.MsgLiquidStake;
            };
            "/stride.staketia.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _233.MsgRedeemStake) => _233.MsgRedeemStakeAmino;
                fromAmino: (object: _233.MsgRedeemStakeAmino) => _233.MsgRedeemStake;
            };
            "/stride.staketia.MsgConfirmDelegation": {
                aminoType: string;
                toAmino: (message: _233.MsgConfirmDelegation) => _233.MsgConfirmDelegationAmino;
                fromAmino: (object: _233.MsgConfirmDelegationAmino) => _233.MsgConfirmDelegation;
            };
            "/stride.staketia.MsgConfirmUndelegation": {
                aminoType: string;
                toAmino: (message: _233.MsgConfirmUndelegation) => _233.MsgConfirmUndelegationAmino;
                fromAmino: (object: _233.MsgConfirmUndelegationAmino) => _233.MsgConfirmUndelegation;
            };
            "/stride.staketia.MsgConfirmUnbondedTokenSweep": {
                aminoType: string;
                toAmino: (message: _233.MsgConfirmUnbondedTokenSweep) => _233.MsgConfirmUnbondedTokenSweepAmino;
                fromAmino: (object: _233.MsgConfirmUnbondedTokenSweepAmino) => _233.MsgConfirmUnbondedTokenSweep;
            };
            "/stride.staketia.MsgAdjustDelegatedBalance": {
                aminoType: string;
                toAmino: (message: _233.MsgAdjustDelegatedBalance) => _233.MsgAdjustDelegatedBalanceAmino;
                fromAmino: (object: _233.MsgAdjustDelegatedBalanceAmino) => _233.MsgAdjustDelegatedBalance;
            };
            "/stride.staketia.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _233.MsgUpdateInnerRedemptionRateBounds) => _233.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _233.MsgUpdateInnerRedemptionRateBoundsAmino) => _233.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.staketia.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _233.MsgResumeHostZone) => _233.MsgResumeHostZoneAmino;
                fromAmino: (object: _233.MsgResumeHostZoneAmino) => _233.MsgResumeHostZone;
            };
            "/stride.staketia.MsgRefreshRedemptionRate": {
                aminoType: string;
                toAmino: (message: _233.MsgRefreshRedemptionRate) => _233.MsgRefreshRedemptionRateAmino;
                fromAmino: (object: _233.MsgRefreshRedemptionRateAmino) => _233.MsgRefreshRedemptionRate;
            };
            "/stride.staketia.MsgOverwriteDelegationRecord": {
                aminoType: string;
                toAmino: (message: _233.MsgOverwriteDelegationRecord) => _233.MsgOverwriteDelegationRecordAmino;
                fromAmino: (object: _233.MsgOverwriteDelegationRecordAmino) => _233.MsgOverwriteDelegationRecord;
            };
            "/stride.staketia.MsgOverwriteUnbondingRecord": {
                aminoType: string;
                toAmino: (message: _233.MsgOverwriteUnbondingRecord) => _233.MsgOverwriteUnbondingRecordAmino;
                fromAmino: (object: _233.MsgOverwriteUnbondingRecordAmino) => _233.MsgOverwriteUnbondingRecord;
            };
            "/stride.staketia.MsgOverwriteRedemptionRecord": {
                aminoType: string;
                toAmino: (message: _233.MsgOverwriteRedemptionRecord) => _233.MsgOverwriteRedemptionRecordAmino;
                fromAmino: (object: _233.MsgOverwriteRedemptionRecordAmino) => _233.MsgOverwriteRedemptionRecord;
            };
            "/stride.staketia.MsgSetOperatorAddress": {
                aminoType: string;
                toAmino: (message: _233.MsgSetOperatorAddress) => _233.MsgSetOperatorAddressAmino;
                fromAmino: (object: _233.MsgSetOperatorAddressAmino) => _233.MsgSetOperatorAddress;
            };
        };
        overwritableRecordTypeFromJSON(object: any): _233.OverwritableRecordType;
        overwritableRecordTypeToJSON(object: _233.OverwritableRecordType): string;
        OverwritableRecordType: typeof _233.OverwritableRecordType;
        OverwritableRecordTypeSDKType: typeof _233.OverwritableRecordType;
        OverwritableRecordTypeAmino: typeof _233.OverwritableRecordType;
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _233.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.MsgLiquidStake;
            fromPartial(object: Partial<_233.MsgLiquidStake>): _233.MsgLiquidStake;
            fromAmino(object: _233.MsgLiquidStakeAmino): _233.MsgLiquidStake;
            toAmino(message: _233.MsgLiquidStake): _233.MsgLiquidStakeAmino;
            fromAminoMsg(object: _233.MsgLiquidStakeAminoMsg): _233.MsgLiquidStake;
            toAminoMsg(message: _233.MsgLiquidStake): _233.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _233.MsgLiquidStakeProtoMsg): _233.MsgLiquidStake;
            toProto(message: _233.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _233.MsgLiquidStake): _233.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _233.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_233.MsgLiquidStakeResponse>): _233.MsgLiquidStakeResponse;
            fromAmino(object: _233.MsgLiquidStakeResponseAmino): _233.MsgLiquidStakeResponse;
            toAmino(message: _233.MsgLiquidStakeResponse): _233.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _233.MsgLiquidStakeResponseAminoMsg): _233.MsgLiquidStakeResponse;
            fromProtoMsg(message: _233.MsgLiquidStakeResponseProtoMsg): _233.MsgLiquidStakeResponse;
            toProto(message: _233.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _233.MsgLiquidStakeResponse): _233.MsgLiquidStakeResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _233.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.MsgRedeemStake;
            fromPartial(object: Partial<_233.MsgRedeemStake>): _233.MsgRedeemStake;
            fromAmino(object: _233.MsgRedeemStakeAmino): _233.MsgRedeemStake;
            toAmino(message: _233.MsgRedeemStake): _233.MsgRedeemStakeAmino;
            fromAminoMsg(object: _233.MsgRedeemStakeAminoMsg): _233.MsgRedeemStake;
            toAminoMsg(message: _233.MsgRedeemStake): _233.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _233.MsgRedeemStakeProtoMsg): _233.MsgRedeemStake;
            toProto(message: _233.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _233.MsgRedeemStake): _233.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(message: _233.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.MsgRedeemStakeResponse;
            fromPartial(object: Partial<_233.MsgRedeemStakeResponse>): _233.MsgRedeemStakeResponse;
            fromAmino(object: _233.MsgRedeemStakeResponseAmino): _233.MsgRedeemStakeResponse;
            toAmino(message: _233.MsgRedeemStakeResponse): _233.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _233.MsgRedeemStakeResponseAminoMsg): _233.MsgRedeemStakeResponse;
            fromProtoMsg(message: _233.MsgRedeemStakeResponseProtoMsg): _233.MsgRedeemStakeResponse;
            toProto(message: _233.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _233.MsgRedeemStakeResponse): _233.MsgRedeemStakeResponseProtoMsg;
        };
        MsgConfirmDelegation: {
            typeUrl: string;
            encode(message: _233.MsgConfirmDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.MsgConfirmDelegation;
            fromPartial(object: Partial<_233.MsgConfirmDelegation>): _233.MsgConfirmDelegation;
            fromAmino(object: _233.MsgConfirmDelegationAmino): _233.MsgConfirmDelegation;
            toAmino(message: _233.MsgConfirmDelegation): _233.MsgConfirmDelegationAmino;
            fromAminoMsg(object: _233.MsgConfirmDelegationAminoMsg): _233.MsgConfirmDelegation;
            toAminoMsg(message: _233.MsgConfirmDelegation): _233.MsgConfirmDelegationAminoMsg;
            fromProtoMsg(message: _233.MsgConfirmDelegationProtoMsg): _233.MsgConfirmDelegation;
            toProto(message: _233.MsgConfirmDelegation): Uint8Array;
            toProtoMsg(message: _233.MsgConfirmDelegation): _233.MsgConfirmDelegationProtoMsg;
        };
        MsgConfirmDelegationResponse: {
            typeUrl: string;
            encode(_: _233.MsgConfirmDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.MsgConfirmDelegationResponse;
            fromPartial(_: Partial<_233.MsgConfirmDelegationResponse>): _233.MsgConfirmDelegationResponse;
            fromAmino(_: _233.MsgConfirmDelegationResponseAmino): _233.MsgConfirmDelegationResponse;
            toAmino(_: _233.MsgConfirmDelegationResponse): _233.MsgConfirmDelegationResponseAmino;
            fromAminoMsg(object: _233.MsgConfirmDelegationResponseAminoMsg): _233.MsgConfirmDelegationResponse;
            fromProtoMsg(message: _233.MsgConfirmDelegationResponseProtoMsg): _233.MsgConfirmDelegationResponse;
            toProto(message: _233.MsgConfirmDelegationResponse): Uint8Array;
            toProtoMsg(message: _233.MsgConfirmDelegationResponse): _233.MsgConfirmDelegationResponseProtoMsg;
        };
        MsgConfirmUndelegation: {
            typeUrl: string;
            encode(message: _233.MsgConfirmUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.MsgConfirmUndelegation;
            fromPartial(object: Partial<_233.MsgConfirmUndelegation>): _233.MsgConfirmUndelegation;
            fromAmino(object: _233.MsgConfirmUndelegationAmino): _233.MsgConfirmUndelegation;
            toAmino(message: _233.MsgConfirmUndelegation): _233.MsgConfirmUndelegationAmino;
            fromAminoMsg(object: _233.MsgConfirmUndelegationAminoMsg): _233.MsgConfirmUndelegation;
            toAminoMsg(message: _233.MsgConfirmUndelegation): _233.MsgConfirmUndelegationAminoMsg;
            fromProtoMsg(message: _233.MsgConfirmUndelegationProtoMsg): _233.MsgConfirmUndelegation;
            toProto(message: _233.MsgConfirmUndelegation): Uint8Array;
            toProtoMsg(message: _233.MsgConfirmUndelegation): _233.MsgConfirmUndelegationProtoMsg;
        };
        MsgConfirmUndelegationResponse: {
            typeUrl: string;
            encode(_: _233.MsgConfirmUndelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.MsgConfirmUndelegationResponse;
            fromPartial(_: Partial<_233.MsgConfirmUndelegationResponse>): _233.MsgConfirmUndelegationResponse;
            fromAmino(_: _233.MsgConfirmUndelegationResponseAmino): _233.MsgConfirmUndelegationResponse;
            toAmino(_: _233.MsgConfirmUndelegationResponse): _233.MsgConfirmUndelegationResponseAmino;
            fromAminoMsg(object: _233.MsgConfirmUndelegationResponseAminoMsg): _233.MsgConfirmUndelegationResponse;
            fromProtoMsg(message: _233.MsgConfirmUndelegationResponseProtoMsg): _233.MsgConfirmUndelegationResponse;
            toProto(message: _233.MsgConfirmUndelegationResponse): Uint8Array;
            toProtoMsg(message: _233.MsgConfirmUndelegationResponse): _233.MsgConfirmUndelegationResponseProtoMsg;
        };
        MsgConfirmUnbondedTokenSweep: {
            typeUrl: string;
            encode(message: _233.MsgConfirmUnbondedTokenSweep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.MsgConfirmUnbondedTokenSweep;
            fromPartial(object: Partial<_233.MsgConfirmUnbondedTokenSweep>): _233.MsgConfirmUnbondedTokenSweep;
            fromAmino(object: _233.MsgConfirmUnbondedTokenSweepAmino): _233.MsgConfirmUnbondedTokenSweep;
            toAmino(message: _233.MsgConfirmUnbondedTokenSweep): _233.MsgConfirmUnbondedTokenSweepAmino;
            fromAminoMsg(object: _233.MsgConfirmUnbondedTokenSweepAminoMsg): _233.MsgConfirmUnbondedTokenSweep;
            toAminoMsg(message: _233.MsgConfirmUnbondedTokenSweep): _233.MsgConfirmUnbondedTokenSweepAminoMsg;
            fromProtoMsg(message: _233.MsgConfirmUnbondedTokenSweepProtoMsg): _233.MsgConfirmUnbondedTokenSweep;
            toProto(message: _233.MsgConfirmUnbondedTokenSweep): Uint8Array;
            toProtoMsg(message: _233.MsgConfirmUnbondedTokenSweep): _233.MsgConfirmUnbondedTokenSweepProtoMsg;
        };
        MsgConfirmUnbondedTokenSweepResponse: {
            typeUrl: string;
            encode(_: _233.MsgConfirmUnbondedTokenSweepResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.MsgConfirmUnbondedTokenSweepResponse;
            fromPartial(_: Partial<_233.MsgConfirmUnbondedTokenSweepResponse>): _233.MsgConfirmUnbondedTokenSweepResponse;
            fromAmino(_: _233.MsgConfirmUnbondedTokenSweepResponseAmino): _233.MsgConfirmUnbondedTokenSweepResponse;
            toAmino(_: _233.MsgConfirmUnbondedTokenSweepResponse): _233.MsgConfirmUnbondedTokenSweepResponseAmino;
            fromAminoMsg(object: _233.MsgConfirmUnbondedTokenSweepResponseAminoMsg): _233.MsgConfirmUnbondedTokenSweepResponse;
            fromProtoMsg(message: _233.MsgConfirmUnbondedTokenSweepResponseProtoMsg): _233.MsgConfirmUnbondedTokenSweepResponse;
            toProto(message: _233.MsgConfirmUnbondedTokenSweepResponse): Uint8Array;
            toProtoMsg(message: _233.MsgConfirmUnbondedTokenSweepResponse): _233.MsgConfirmUnbondedTokenSweepResponseProtoMsg;
        };
        MsgAdjustDelegatedBalance: {
            typeUrl: string;
            encode(message: _233.MsgAdjustDelegatedBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.MsgAdjustDelegatedBalance;
            fromPartial(object: Partial<_233.MsgAdjustDelegatedBalance>): _233.MsgAdjustDelegatedBalance;
            fromAmino(object: _233.MsgAdjustDelegatedBalanceAmino): _233.MsgAdjustDelegatedBalance;
            toAmino(message: _233.MsgAdjustDelegatedBalance): _233.MsgAdjustDelegatedBalanceAmino;
            fromAminoMsg(object: _233.MsgAdjustDelegatedBalanceAminoMsg): _233.MsgAdjustDelegatedBalance;
            toAminoMsg(message: _233.MsgAdjustDelegatedBalance): _233.MsgAdjustDelegatedBalanceAminoMsg;
            fromProtoMsg(message: _233.MsgAdjustDelegatedBalanceProtoMsg): _233.MsgAdjustDelegatedBalance;
            toProto(message: _233.MsgAdjustDelegatedBalance): Uint8Array;
            toProtoMsg(message: _233.MsgAdjustDelegatedBalance): _233.MsgAdjustDelegatedBalanceProtoMsg;
        };
        MsgAdjustDelegatedBalanceResponse: {
            typeUrl: string;
            encode(_: _233.MsgAdjustDelegatedBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.MsgAdjustDelegatedBalanceResponse;
            fromPartial(_: Partial<_233.MsgAdjustDelegatedBalanceResponse>): _233.MsgAdjustDelegatedBalanceResponse;
            fromAmino(_: _233.MsgAdjustDelegatedBalanceResponseAmino): _233.MsgAdjustDelegatedBalanceResponse;
            toAmino(_: _233.MsgAdjustDelegatedBalanceResponse): _233.MsgAdjustDelegatedBalanceResponseAmino;
            fromAminoMsg(object: _233.MsgAdjustDelegatedBalanceResponseAminoMsg): _233.MsgAdjustDelegatedBalanceResponse;
            fromProtoMsg(message: _233.MsgAdjustDelegatedBalanceResponseProtoMsg): _233.MsgAdjustDelegatedBalanceResponse;
            toProto(message: _233.MsgAdjustDelegatedBalanceResponse): Uint8Array;
            toProtoMsg(message: _233.MsgAdjustDelegatedBalanceResponse): _233.MsgAdjustDelegatedBalanceResponseProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _233.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_233.MsgUpdateInnerRedemptionRateBounds>): _233.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _233.MsgUpdateInnerRedemptionRateBoundsAmino): _233.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _233.MsgUpdateInnerRedemptionRateBounds): _233.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _233.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _233.MsgUpdateInnerRedemptionRateBounds;
            toAminoMsg(message: _233.MsgUpdateInnerRedemptionRateBounds): _233.MsgUpdateInnerRedemptionRateBoundsAminoMsg;
            fromProtoMsg(message: _233.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _233.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _233.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _233.MsgUpdateInnerRedemptionRateBounds): _233.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _233.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_233.MsgUpdateInnerRedemptionRateBoundsResponse>): _233.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _233.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _233.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _233.MsgUpdateInnerRedemptionRateBoundsResponse): _233.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _233.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _233.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _233.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _233.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _233.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _233.MsgUpdateInnerRedemptionRateBoundsResponse): _233.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _233.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.MsgResumeHostZone;
            fromPartial(object: Partial<_233.MsgResumeHostZone>): _233.MsgResumeHostZone;
            fromAmino(object: _233.MsgResumeHostZoneAmino): _233.MsgResumeHostZone;
            toAmino(message: _233.MsgResumeHostZone): _233.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _233.MsgResumeHostZoneAminoMsg): _233.MsgResumeHostZone;
            toAminoMsg(message: _233.MsgResumeHostZone): _233.MsgResumeHostZoneAminoMsg;
            fromProtoMsg(message: _233.MsgResumeHostZoneProtoMsg): _233.MsgResumeHostZone;
            toProto(message: _233.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _233.MsgResumeHostZone): _233.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _233.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_233.MsgResumeHostZoneResponse>): _233.MsgResumeHostZoneResponse;
            fromAmino(_: _233.MsgResumeHostZoneResponseAmino): _233.MsgResumeHostZoneResponse;
            toAmino(_: _233.MsgResumeHostZoneResponse): _233.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _233.MsgResumeHostZoneResponseAminoMsg): _233.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _233.MsgResumeHostZoneResponseProtoMsg): _233.MsgResumeHostZoneResponse;
            toProto(message: _233.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _233.MsgResumeHostZoneResponse): _233.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgRefreshRedemptionRate: {
            typeUrl: string;
            encode(message: _233.MsgRefreshRedemptionRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.MsgRefreshRedemptionRate;
            fromPartial(object: Partial<_233.MsgRefreshRedemptionRate>): _233.MsgRefreshRedemptionRate;
            fromAmino(object: _233.MsgRefreshRedemptionRateAmino): _233.MsgRefreshRedemptionRate;
            toAmino(message: _233.MsgRefreshRedemptionRate): _233.MsgRefreshRedemptionRateAmino;
            fromAminoMsg(object: _233.MsgRefreshRedemptionRateAminoMsg): _233.MsgRefreshRedemptionRate;
            toAminoMsg(message: _233.MsgRefreshRedemptionRate): _233.MsgRefreshRedemptionRateAminoMsg;
            fromProtoMsg(message: _233.MsgRefreshRedemptionRateProtoMsg): _233.MsgRefreshRedemptionRate;
            toProto(message: _233.MsgRefreshRedemptionRate): Uint8Array;
            toProtoMsg(message: _233.MsgRefreshRedemptionRate): _233.MsgRefreshRedemptionRateProtoMsg;
        };
        MsgRefreshRedemptionRateResponse: {
            typeUrl: string;
            encode(_: _233.MsgRefreshRedemptionRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.MsgRefreshRedemptionRateResponse;
            fromPartial(_: Partial<_233.MsgRefreshRedemptionRateResponse>): _233.MsgRefreshRedemptionRateResponse;
            fromAmino(_: _233.MsgRefreshRedemptionRateResponseAmino): _233.MsgRefreshRedemptionRateResponse;
            toAmino(_: _233.MsgRefreshRedemptionRateResponse): _233.MsgRefreshRedemptionRateResponseAmino;
            fromAminoMsg(object: _233.MsgRefreshRedemptionRateResponseAminoMsg): _233.MsgRefreshRedemptionRateResponse;
            fromProtoMsg(message: _233.MsgRefreshRedemptionRateResponseProtoMsg): _233.MsgRefreshRedemptionRateResponse;
            toProto(message: _233.MsgRefreshRedemptionRateResponse): Uint8Array;
            toProtoMsg(message: _233.MsgRefreshRedemptionRateResponse): _233.MsgRefreshRedemptionRateResponseProtoMsg;
        };
        MsgOverwriteDelegationRecord: {
            typeUrl: string;
            encode(message: _233.MsgOverwriteDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.MsgOverwriteDelegationRecord;
            fromPartial(object: Partial<_233.MsgOverwriteDelegationRecord>): _233.MsgOverwriteDelegationRecord;
            fromAmino(object: _233.MsgOverwriteDelegationRecordAmino): _233.MsgOverwriteDelegationRecord;
            toAmino(message: _233.MsgOverwriteDelegationRecord): _233.MsgOverwriteDelegationRecordAmino;
            fromAminoMsg(object: _233.MsgOverwriteDelegationRecordAminoMsg): _233.MsgOverwriteDelegationRecord;
            toAminoMsg(message: _233.MsgOverwriteDelegationRecord): _233.MsgOverwriteDelegationRecordAminoMsg;
            fromProtoMsg(message: _233.MsgOverwriteDelegationRecordProtoMsg): _233.MsgOverwriteDelegationRecord;
            toProto(message: _233.MsgOverwriteDelegationRecord): Uint8Array;
            toProtoMsg(message: _233.MsgOverwriteDelegationRecord): _233.MsgOverwriteDelegationRecordProtoMsg;
        };
        MsgOverwriteDelegationRecordResponse: {
            typeUrl: string;
            encode(_: _233.MsgOverwriteDelegationRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.MsgOverwriteDelegationRecordResponse;
            fromPartial(_: Partial<_233.MsgOverwriteDelegationRecordResponse>): _233.MsgOverwriteDelegationRecordResponse;
            fromAmino(_: _233.MsgOverwriteDelegationRecordResponseAmino): _233.MsgOverwriteDelegationRecordResponse;
            toAmino(_: _233.MsgOverwriteDelegationRecordResponse): _233.MsgOverwriteDelegationRecordResponseAmino;
            fromAminoMsg(object: _233.MsgOverwriteDelegationRecordResponseAminoMsg): _233.MsgOverwriteDelegationRecordResponse;
            fromProtoMsg(message: _233.MsgOverwriteDelegationRecordResponseProtoMsg): _233.MsgOverwriteDelegationRecordResponse;
            toProto(message: _233.MsgOverwriteDelegationRecordResponse): Uint8Array;
            toProtoMsg(message: _233.MsgOverwriteDelegationRecordResponse): _233.MsgOverwriteDelegationRecordResponseProtoMsg;
        };
        MsgOverwriteUnbondingRecord: {
            typeUrl: string;
            encode(message: _233.MsgOverwriteUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.MsgOverwriteUnbondingRecord;
            fromPartial(object: Partial<_233.MsgOverwriteUnbondingRecord>): _233.MsgOverwriteUnbondingRecord;
            fromAmino(object: _233.MsgOverwriteUnbondingRecordAmino): _233.MsgOverwriteUnbondingRecord;
            toAmino(message: _233.MsgOverwriteUnbondingRecord): _233.MsgOverwriteUnbondingRecordAmino;
            fromAminoMsg(object: _233.MsgOverwriteUnbondingRecordAminoMsg): _233.MsgOverwriteUnbondingRecord;
            toAminoMsg(message: _233.MsgOverwriteUnbondingRecord): _233.MsgOverwriteUnbondingRecordAminoMsg;
            fromProtoMsg(message: _233.MsgOverwriteUnbondingRecordProtoMsg): _233.MsgOverwriteUnbondingRecord;
            toProto(message: _233.MsgOverwriteUnbondingRecord): Uint8Array;
            toProtoMsg(message: _233.MsgOverwriteUnbondingRecord): _233.MsgOverwriteUnbondingRecordProtoMsg;
        };
        MsgOverwriteUnbondingRecordResponse: {
            typeUrl: string;
            encode(_: _233.MsgOverwriteUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.MsgOverwriteUnbondingRecordResponse;
            fromPartial(_: Partial<_233.MsgOverwriteUnbondingRecordResponse>): _233.MsgOverwriteUnbondingRecordResponse;
            fromAmino(_: _233.MsgOverwriteUnbondingRecordResponseAmino): _233.MsgOverwriteUnbondingRecordResponse;
            toAmino(_: _233.MsgOverwriteUnbondingRecordResponse): _233.MsgOverwriteUnbondingRecordResponseAmino;
            fromAminoMsg(object: _233.MsgOverwriteUnbondingRecordResponseAminoMsg): _233.MsgOverwriteUnbondingRecordResponse;
            fromProtoMsg(message: _233.MsgOverwriteUnbondingRecordResponseProtoMsg): _233.MsgOverwriteUnbondingRecordResponse;
            toProto(message: _233.MsgOverwriteUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _233.MsgOverwriteUnbondingRecordResponse): _233.MsgOverwriteUnbondingRecordResponseProtoMsg;
        };
        MsgOverwriteRedemptionRecord: {
            typeUrl: string;
            encode(message: _233.MsgOverwriteRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.MsgOverwriteRedemptionRecord;
            fromPartial(object: Partial<_233.MsgOverwriteRedemptionRecord>): _233.MsgOverwriteRedemptionRecord;
            fromAmino(object: _233.MsgOverwriteRedemptionRecordAmino): _233.MsgOverwriteRedemptionRecord;
            toAmino(message: _233.MsgOverwriteRedemptionRecord): _233.MsgOverwriteRedemptionRecordAmino;
            fromAminoMsg(object: _233.MsgOverwriteRedemptionRecordAminoMsg): _233.MsgOverwriteRedemptionRecord;
            toAminoMsg(message: _233.MsgOverwriteRedemptionRecord): _233.MsgOverwriteRedemptionRecordAminoMsg;
            fromProtoMsg(message: _233.MsgOverwriteRedemptionRecordProtoMsg): _233.MsgOverwriteRedemptionRecord;
            toProto(message: _233.MsgOverwriteRedemptionRecord): Uint8Array;
            toProtoMsg(message: _233.MsgOverwriteRedemptionRecord): _233.MsgOverwriteRedemptionRecordProtoMsg;
        };
        MsgOverwriteRedemptionRecordResponse: {
            typeUrl: string;
            encode(_: _233.MsgOverwriteRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.MsgOverwriteRedemptionRecordResponse;
            fromPartial(_: Partial<_233.MsgOverwriteRedemptionRecordResponse>): _233.MsgOverwriteRedemptionRecordResponse;
            fromAmino(_: _233.MsgOverwriteRedemptionRecordResponseAmino): _233.MsgOverwriteRedemptionRecordResponse;
            toAmino(_: _233.MsgOverwriteRedemptionRecordResponse): _233.MsgOverwriteRedemptionRecordResponseAmino;
            fromAminoMsg(object: _233.MsgOverwriteRedemptionRecordResponseAminoMsg): _233.MsgOverwriteRedemptionRecordResponse;
            fromProtoMsg(message: _233.MsgOverwriteRedemptionRecordResponseProtoMsg): _233.MsgOverwriteRedemptionRecordResponse;
            toProto(message: _233.MsgOverwriteRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _233.MsgOverwriteRedemptionRecordResponse): _233.MsgOverwriteRedemptionRecordResponseProtoMsg;
        };
        MsgSetOperatorAddress: {
            typeUrl: string;
            encode(message: _233.MsgSetOperatorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.MsgSetOperatorAddress;
            fromPartial(object: Partial<_233.MsgSetOperatorAddress>): _233.MsgSetOperatorAddress;
            fromAmino(object: _233.MsgSetOperatorAddressAmino): _233.MsgSetOperatorAddress;
            toAmino(message: _233.MsgSetOperatorAddress): _233.MsgSetOperatorAddressAmino;
            fromAminoMsg(object: _233.MsgSetOperatorAddressAminoMsg): _233.MsgSetOperatorAddress;
            toAminoMsg(message: _233.MsgSetOperatorAddress): _233.MsgSetOperatorAddressAminoMsg;
            fromProtoMsg(message: _233.MsgSetOperatorAddressProtoMsg): _233.MsgSetOperatorAddress;
            toProto(message: _233.MsgSetOperatorAddress): Uint8Array;
            toProtoMsg(message: _233.MsgSetOperatorAddress): _233.MsgSetOperatorAddressProtoMsg;
        };
        MsgSetOperatorAddressResponse: {
            typeUrl: string;
            encode(_: _233.MsgSetOperatorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.MsgSetOperatorAddressResponse;
            fromPartial(_: Partial<_233.MsgSetOperatorAddressResponse>): _233.MsgSetOperatorAddressResponse;
            fromAmino(_: _233.MsgSetOperatorAddressResponseAmino): _233.MsgSetOperatorAddressResponse;
            toAmino(_: _233.MsgSetOperatorAddressResponse): _233.MsgSetOperatorAddressResponseAmino;
            fromAminoMsg(object: _233.MsgSetOperatorAddressResponseAminoMsg): _233.MsgSetOperatorAddressResponse;
            fromProtoMsg(message: _233.MsgSetOperatorAddressResponseProtoMsg): _233.MsgSetOperatorAddressResponse;
            toProto(message: _233.MsgSetOperatorAddressResponse): Uint8Array;
            toProtoMsg(message: _233.MsgSetOperatorAddressResponse): _233.MsgSetOperatorAddressResponseProtoMsg;
        };
        delegationRecordStatusFromJSON(object: any): _232.DelegationRecordStatus;
        delegationRecordStatusToJSON(object: _232.DelegationRecordStatus): string;
        unbondingRecordStatusFromJSON(object: any): _232.UnbondingRecordStatus;
        unbondingRecordStatusToJSON(object: _232.UnbondingRecordStatus): string;
        DelegationRecordStatus: typeof _232.DelegationRecordStatus;
        DelegationRecordStatusSDKType: typeof _232.DelegationRecordStatus;
        DelegationRecordStatusAmino: typeof _232.DelegationRecordStatus;
        UnbondingRecordStatus: typeof _232.UnbondingRecordStatus;
        UnbondingRecordStatusSDKType: typeof _232.UnbondingRecordStatus;
        UnbondingRecordStatusAmino: typeof _232.UnbondingRecordStatus;
        HostZone: {
            typeUrl: string;
            encode(message: _232.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.HostZone;
            fromPartial(object: Partial<_232.HostZone>): _232.HostZone;
            fromAmino(object: _232.HostZoneAmino): _232.HostZone;
            toAmino(message: _232.HostZone): _232.HostZoneAmino;
            fromAminoMsg(object: _232.HostZoneAminoMsg): _232.HostZone;
            fromProtoMsg(message: _232.HostZoneProtoMsg): _232.HostZone;
            toProto(message: _232.HostZone): Uint8Array;
            toProtoMsg(message: _232.HostZone): _232.HostZoneProtoMsg;
        };
        DelegationRecord: {
            typeUrl: string;
            encode(message: _232.DelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.DelegationRecord;
            fromPartial(object: Partial<_232.DelegationRecord>): _232.DelegationRecord;
            fromAmino(object: _232.DelegationRecordAmino): _232.DelegationRecord;
            toAmino(message: _232.DelegationRecord): _232.DelegationRecordAmino;
            fromAminoMsg(object: _232.DelegationRecordAminoMsg): _232.DelegationRecord;
            fromProtoMsg(message: _232.DelegationRecordProtoMsg): _232.DelegationRecord;
            toProto(message: _232.DelegationRecord): Uint8Array;
            toProtoMsg(message: _232.DelegationRecord): _232.DelegationRecordProtoMsg;
        };
        UnbondingRecord: {
            typeUrl: string;
            encode(message: _232.UnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.UnbondingRecord;
            fromPartial(object: Partial<_232.UnbondingRecord>): _232.UnbondingRecord;
            fromAmino(object: _232.UnbondingRecordAmino): _232.UnbondingRecord;
            toAmino(message: _232.UnbondingRecord): _232.UnbondingRecordAmino;
            fromAminoMsg(object: _232.UnbondingRecordAminoMsg): _232.UnbondingRecord;
            fromProtoMsg(message: _232.UnbondingRecordProtoMsg): _232.UnbondingRecord;
            toProto(message: _232.UnbondingRecord): Uint8Array;
            toProtoMsg(message: _232.UnbondingRecord): _232.UnbondingRecordProtoMsg;
        };
        RedemptionRecord: {
            typeUrl: string;
            encode(message: _232.RedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.RedemptionRecord;
            fromPartial(object: Partial<_232.RedemptionRecord>): _232.RedemptionRecord;
            fromAmino(object: _232.RedemptionRecordAmino): _232.RedemptionRecord;
            toAmino(message: _232.RedemptionRecord): _232.RedemptionRecordAmino;
            fromAminoMsg(object: _232.RedemptionRecordAminoMsg): _232.RedemptionRecord;
            fromProtoMsg(message: _232.RedemptionRecordProtoMsg): _232.RedemptionRecord;
            toProto(message: _232.RedemptionRecord): Uint8Array;
            toProtoMsg(message: _232.RedemptionRecord): _232.RedemptionRecordProtoMsg;
        };
        SlashRecord: {
            typeUrl: string;
            encode(message: _232.SlashRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.SlashRecord;
            fromPartial(object: Partial<_232.SlashRecord>): _232.SlashRecord;
            fromAmino(object: _232.SlashRecordAmino): _232.SlashRecord;
            toAmino(message: _232.SlashRecord): _232.SlashRecordAmino;
            fromAminoMsg(object: _232.SlashRecordAminoMsg): _232.SlashRecord;
            fromProtoMsg(message: _232.SlashRecordProtoMsg): _232.SlashRecord;
            toProto(message: _232.SlashRecord): Uint8Array;
            toProtoMsg(message: _232.SlashRecord): _232.SlashRecordProtoMsg;
        };
        QueryHostZoneRequest: {
            typeUrl: string;
            encode(_: _231.QueryHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.QueryHostZoneRequest;
            fromPartial(_: Partial<_231.QueryHostZoneRequest>): _231.QueryHostZoneRequest;
            fromAmino(_: _231.QueryHostZoneRequestAmino): _231.QueryHostZoneRequest;
            toAmino(_: _231.QueryHostZoneRequest): _231.QueryHostZoneRequestAmino;
            fromAminoMsg(object: _231.QueryHostZoneRequestAminoMsg): _231.QueryHostZoneRequest;
            fromProtoMsg(message: _231.QueryHostZoneRequestProtoMsg): _231.QueryHostZoneRequest;
            toProto(message: _231.QueryHostZoneRequest): Uint8Array;
            toProtoMsg(message: _231.QueryHostZoneRequest): _231.QueryHostZoneRequestProtoMsg;
        };
        QueryHostZoneResponse: {
            typeUrl: string;
            encode(message: _231.QueryHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.QueryHostZoneResponse;
            fromPartial(object: Partial<_231.QueryHostZoneResponse>): _231.QueryHostZoneResponse;
            fromAmino(object: _231.QueryHostZoneResponseAmino): _231.QueryHostZoneResponse;
            toAmino(message: _231.QueryHostZoneResponse): _231.QueryHostZoneResponseAmino;
            fromAminoMsg(object: _231.QueryHostZoneResponseAminoMsg): _231.QueryHostZoneResponse;
            fromProtoMsg(message: _231.QueryHostZoneResponseProtoMsg): _231.QueryHostZoneResponse;
            toProto(message: _231.QueryHostZoneResponse): Uint8Array;
            toProtoMsg(message: _231.QueryHostZoneResponse): _231.QueryHostZoneResponseProtoMsg;
        };
        QueryDelegationRecordsRequest: {
            typeUrl: string;
            encode(message: _231.QueryDelegationRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.QueryDelegationRecordsRequest;
            fromPartial(object: Partial<_231.QueryDelegationRecordsRequest>): _231.QueryDelegationRecordsRequest;
            fromAmino(object: _231.QueryDelegationRecordsRequestAmino): _231.QueryDelegationRecordsRequest;
            toAmino(message: _231.QueryDelegationRecordsRequest): _231.QueryDelegationRecordsRequestAmino;
            fromAminoMsg(object: _231.QueryDelegationRecordsRequestAminoMsg): _231.QueryDelegationRecordsRequest;
            fromProtoMsg(message: _231.QueryDelegationRecordsRequestProtoMsg): _231.QueryDelegationRecordsRequest;
            toProto(message: _231.QueryDelegationRecordsRequest): Uint8Array;
            toProtoMsg(message: _231.QueryDelegationRecordsRequest): _231.QueryDelegationRecordsRequestProtoMsg;
        };
        QueryDelegationRecordsResponse: {
            typeUrl: string;
            encode(message: _231.QueryDelegationRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.QueryDelegationRecordsResponse;
            fromPartial(object: Partial<_231.QueryDelegationRecordsResponse>): _231.QueryDelegationRecordsResponse;
            fromAmino(object: _231.QueryDelegationRecordsResponseAmino): _231.QueryDelegationRecordsResponse;
            toAmino(message: _231.QueryDelegationRecordsResponse): _231.QueryDelegationRecordsResponseAmino;
            fromAminoMsg(object: _231.QueryDelegationRecordsResponseAminoMsg): _231.QueryDelegationRecordsResponse;
            fromProtoMsg(message: _231.QueryDelegationRecordsResponseProtoMsg): _231.QueryDelegationRecordsResponse;
            toProto(message: _231.QueryDelegationRecordsResponse): Uint8Array;
            toProtoMsg(message: _231.QueryDelegationRecordsResponse): _231.QueryDelegationRecordsResponseProtoMsg;
        };
        QueryUnbondingRecordsRequest: {
            typeUrl: string;
            encode(message: _231.QueryUnbondingRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.QueryUnbondingRecordsRequest;
            fromPartial(object: Partial<_231.QueryUnbondingRecordsRequest>): _231.QueryUnbondingRecordsRequest;
            fromAmino(object: _231.QueryUnbondingRecordsRequestAmino): _231.QueryUnbondingRecordsRequest;
            toAmino(message: _231.QueryUnbondingRecordsRequest): _231.QueryUnbondingRecordsRequestAmino;
            fromAminoMsg(object: _231.QueryUnbondingRecordsRequestAminoMsg): _231.QueryUnbondingRecordsRequest;
            fromProtoMsg(message: _231.QueryUnbondingRecordsRequestProtoMsg): _231.QueryUnbondingRecordsRequest;
            toProto(message: _231.QueryUnbondingRecordsRequest): Uint8Array;
            toProtoMsg(message: _231.QueryUnbondingRecordsRequest): _231.QueryUnbondingRecordsRequestProtoMsg;
        };
        QueryUnbondingRecordsResponse: {
            typeUrl: string;
            encode(message: _231.QueryUnbondingRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.QueryUnbondingRecordsResponse;
            fromPartial(object: Partial<_231.QueryUnbondingRecordsResponse>): _231.QueryUnbondingRecordsResponse;
            fromAmino(object: _231.QueryUnbondingRecordsResponseAmino): _231.QueryUnbondingRecordsResponse;
            toAmino(message: _231.QueryUnbondingRecordsResponse): _231.QueryUnbondingRecordsResponseAmino;
            fromAminoMsg(object: _231.QueryUnbondingRecordsResponseAminoMsg): _231.QueryUnbondingRecordsResponse;
            fromProtoMsg(message: _231.QueryUnbondingRecordsResponseProtoMsg): _231.QueryUnbondingRecordsResponse;
            toProto(message: _231.QueryUnbondingRecordsResponse): Uint8Array;
            toProtoMsg(message: _231.QueryUnbondingRecordsResponse): _231.QueryUnbondingRecordsResponseProtoMsg;
        };
        QueryRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _231.QueryRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.QueryRedemptionRecordRequest;
            fromPartial(object: Partial<_231.QueryRedemptionRecordRequest>): _231.QueryRedemptionRecordRequest;
            fromAmino(object: _231.QueryRedemptionRecordRequestAmino): _231.QueryRedemptionRecordRequest;
            toAmino(message: _231.QueryRedemptionRecordRequest): _231.QueryRedemptionRecordRequestAmino;
            fromAminoMsg(object: _231.QueryRedemptionRecordRequestAminoMsg): _231.QueryRedemptionRecordRequest;
            fromProtoMsg(message: _231.QueryRedemptionRecordRequestProtoMsg): _231.QueryRedemptionRecordRequest;
            toProto(message: _231.QueryRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _231.QueryRedemptionRecordRequest): _231.QueryRedemptionRecordRequestProtoMsg;
        };
        QueryRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _231.QueryRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.QueryRedemptionRecordResponse;
            fromPartial(object: Partial<_231.QueryRedemptionRecordResponse>): _231.QueryRedemptionRecordResponse;
            fromAmino(object: _231.QueryRedemptionRecordResponseAmino): _231.QueryRedemptionRecordResponse;
            toAmino(message: _231.QueryRedemptionRecordResponse): _231.QueryRedemptionRecordResponseAmino;
            fromAminoMsg(object: _231.QueryRedemptionRecordResponseAminoMsg): _231.QueryRedemptionRecordResponse;
            fromProtoMsg(message: _231.QueryRedemptionRecordResponseProtoMsg): _231.QueryRedemptionRecordResponse;
            toProto(message: _231.QueryRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _231.QueryRedemptionRecordResponse): _231.QueryRedemptionRecordResponseProtoMsg;
        };
        QueryRedemptionRecordsRequest: {
            typeUrl: string;
            encode(message: _231.QueryRedemptionRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.QueryRedemptionRecordsRequest;
            fromPartial(object: Partial<_231.QueryRedemptionRecordsRequest>): _231.QueryRedemptionRecordsRequest;
            fromAmino(object: _231.QueryRedemptionRecordsRequestAmino): _231.QueryRedemptionRecordsRequest;
            toAmino(message: _231.QueryRedemptionRecordsRequest): _231.QueryRedemptionRecordsRequestAmino;
            fromAminoMsg(object: _231.QueryRedemptionRecordsRequestAminoMsg): _231.QueryRedemptionRecordsRequest;
            fromProtoMsg(message: _231.QueryRedemptionRecordsRequestProtoMsg): _231.QueryRedemptionRecordsRequest;
            toProto(message: _231.QueryRedemptionRecordsRequest): Uint8Array;
            toProtoMsg(message: _231.QueryRedemptionRecordsRequest): _231.QueryRedemptionRecordsRequestProtoMsg;
        };
        QueryRedemptionRecordsResponse: {
            typeUrl: string;
            encode(message: _231.QueryRedemptionRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.QueryRedemptionRecordsResponse;
            fromPartial(object: Partial<_231.QueryRedemptionRecordsResponse>): _231.QueryRedemptionRecordsResponse;
            fromAmino(object: _231.QueryRedemptionRecordsResponseAmino): _231.QueryRedemptionRecordsResponse;
            toAmino(message: _231.QueryRedemptionRecordsResponse): _231.QueryRedemptionRecordsResponseAmino;
            fromAminoMsg(object: _231.QueryRedemptionRecordsResponseAminoMsg): _231.QueryRedemptionRecordsResponse;
            fromProtoMsg(message: _231.QueryRedemptionRecordsResponseProtoMsg): _231.QueryRedemptionRecordsResponse;
            toProto(message: _231.QueryRedemptionRecordsResponse): Uint8Array;
            toProtoMsg(message: _231.QueryRedemptionRecordsResponse): _231.QueryRedemptionRecordsResponseProtoMsg;
        };
        QuerySlashRecordsRequest: {
            typeUrl: string;
            encode(_: _231.QuerySlashRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.QuerySlashRecordsRequest;
            fromPartial(_: Partial<_231.QuerySlashRecordsRequest>): _231.QuerySlashRecordsRequest;
            fromAmino(_: _231.QuerySlashRecordsRequestAmino): _231.QuerySlashRecordsRequest;
            toAmino(_: _231.QuerySlashRecordsRequest): _231.QuerySlashRecordsRequestAmino;
            fromAminoMsg(object: _231.QuerySlashRecordsRequestAminoMsg): _231.QuerySlashRecordsRequest;
            fromProtoMsg(message: _231.QuerySlashRecordsRequestProtoMsg): _231.QuerySlashRecordsRequest;
            toProto(message: _231.QuerySlashRecordsRequest): Uint8Array;
            toProtoMsg(message: _231.QuerySlashRecordsRequest): _231.QuerySlashRecordsRequestProtoMsg;
        };
        QuerySlashRecordsResponse: {
            typeUrl: string;
            encode(message: _231.QuerySlashRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.QuerySlashRecordsResponse;
            fromPartial(object: Partial<_231.QuerySlashRecordsResponse>): _231.QuerySlashRecordsResponse;
            fromAmino(object: _231.QuerySlashRecordsResponseAmino): _231.QuerySlashRecordsResponse;
            toAmino(message: _231.QuerySlashRecordsResponse): _231.QuerySlashRecordsResponseAmino;
            fromAminoMsg(object: _231.QuerySlashRecordsResponseAminoMsg): _231.QuerySlashRecordsResponse;
            fromProtoMsg(message: _231.QuerySlashRecordsResponseProtoMsg): _231.QuerySlashRecordsResponse;
            toProto(message: _231.QuerySlashRecordsResponse): Uint8Array;
            toProtoMsg(message: _231.QuerySlashRecordsResponse): _231.QuerySlashRecordsResponseProtoMsg;
        };
        RedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _231.RedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.RedemptionRecordResponse;
            fromPartial(object: Partial<_231.RedemptionRecordResponse>): _231.RedemptionRecordResponse;
            fromAmino(object: _231.RedemptionRecordResponseAmino): _231.RedemptionRecordResponse;
            toAmino(message: _231.RedemptionRecordResponse): _231.RedemptionRecordResponseAmino;
            fromAminoMsg(object: _231.RedemptionRecordResponseAminoMsg): _231.RedemptionRecordResponse;
            fromProtoMsg(message: _231.RedemptionRecordResponseProtoMsg): _231.RedemptionRecordResponse;
            toProto(message: _231.RedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _231.RedemptionRecordResponse): _231.RedemptionRecordResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _230.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.Params;
            fromPartial(_: Partial<_230.Params>): _230.Params;
            fromAmino(_: _230.ParamsAmino): _230.Params;
            toAmino(_: _230.Params): _230.ParamsAmino;
            fromAminoMsg(object: _230.ParamsAminoMsg): _230.Params;
            fromProtoMsg(message: _230.ParamsProtoMsg): _230.Params;
            toProto(message: _230.Params): Uint8Array;
            toProtoMsg(message: _230.Params): _230.ParamsProtoMsg;
        };
        TransferInProgressRecordIds: {
            typeUrl: string;
            encode(message: _230.TransferInProgressRecordIds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.TransferInProgressRecordIds;
            fromPartial(object: Partial<_230.TransferInProgressRecordIds>): _230.TransferInProgressRecordIds;
            fromAmino(object: _230.TransferInProgressRecordIdsAmino): _230.TransferInProgressRecordIds;
            toAmino(message: _230.TransferInProgressRecordIds): _230.TransferInProgressRecordIdsAmino;
            fromAminoMsg(object: _230.TransferInProgressRecordIdsAminoMsg): _230.TransferInProgressRecordIds;
            fromProtoMsg(message: _230.TransferInProgressRecordIdsProtoMsg): _230.TransferInProgressRecordIds;
            toProto(message: _230.TransferInProgressRecordIds): Uint8Array;
            toProtoMsg(message: _230.TransferInProgressRecordIds): _230.TransferInProgressRecordIdsProtoMsg;
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
    const vesting: {
        BaseVestingAccount: {
            typeUrl: string;
            encode(message: _235.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.BaseVestingAccount;
            fromPartial(object: Partial<_235.BaseVestingAccount>): _235.BaseVestingAccount;
            fromAmino(object: _235.BaseVestingAccountAmino): _235.BaseVestingAccount;
            toAmino(message: _235.BaseVestingAccount): _235.BaseVestingAccountAmino;
            fromAminoMsg(object: _235.BaseVestingAccountAminoMsg): _235.BaseVestingAccount;
            fromProtoMsg(message: _235.BaseVestingAccountProtoMsg): _235.BaseVestingAccount;
            toProto(message: _235.BaseVestingAccount): Uint8Array;
            toProtoMsg(message: _235.BaseVestingAccount): _235.BaseVestingAccountProtoMsg;
        };
        Period: {
            typeUrl: string;
            encode(message: _235.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.Period;
            fromPartial(object: Partial<_235.Period>): _235.Period;
            fromAmino(object: _235.PeriodAmino): _235.Period;
            toAmino(message: _235.Period): _235.PeriodAmino;
            fromAminoMsg(object: _235.PeriodAminoMsg): _235.Period;
            fromProtoMsg(message: _235.PeriodProtoMsg): _235.Period;
            toProto(message: _235.Period): Uint8Array;
            toProtoMsg(message: _235.Period): _235.PeriodProtoMsg;
        };
        StridePeriodicVestingAccount: {
            typeUrl: string;
            encode(message: _235.StridePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.StridePeriodicVestingAccount;
            fromPartial(object: Partial<_235.StridePeriodicVestingAccount>): _235.StridePeriodicVestingAccount;
            fromAmino(object: _235.StridePeriodicVestingAccountAmino): _235.StridePeriodicVestingAccount;
            toAmino(message: _235.StridePeriodicVestingAccount): _235.StridePeriodicVestingAccountAmino;
            fromAminoMsg(object: _235.StridePeriodicVestingAccountAminoMsg): _235.StridePeriodicVestingAccount;
            fromProtoMsg(message: _235.StridePeriodicVestingAccountProtoMsg): _235.StridePeriodicVestingAccount;
            toProto(message: _235.StridePeriodicVestingAccount): Uint8Array;
            toProtoMsg(message: _235.StridePeriodicVestingAccount): _235.StridePeriodicVestingAccountProtoMsg;
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
                airdrop: _370.MsgClientImpl;
                claim: _371.MsgClientImpl;
                icaoracle: _372.MsgClientImpl;
                interchainquery: {
                    v1: _373.MsgClientImpl;
                };
                stakedym: _374.MsgClientImpl;
                stakeibc: _375.MsgClientImpl;
                staketia: _376.MsgClientImpl;
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
                autopilot: {
                    params(request?: _182.QueryParamsRequest): Promise<_182.QueryParamsResponse>;
                };
                claim: {
                    distributorAccountBalance(request: _186.QueryDistributorAccountBalanceRequest): Promise<_186.QueryDistributorAccountBalanceResponse>;
                    params(request?: _186.QueryParamsRequest): Promise<_186.QueryParamsResponse>;
                    claimRecord(request: _186.QueryClaimRecordRequest): Promise<_186.QueryClaimRecordResponse>;
                    claimableForAction(request: _186.QueryClaimableForActionRequest): Promise<_186.QueryClaimableForActionResponse>;
                    totalClaimable(request: _186.QueryTotalClaimableRequest): Promise<_186.QueryTotalClaimableResponse>;
                    userVestings(request: _186.QueryUserVestingsRequest): Promise<_186.QueryUserVestingsResponse>;
                    claimStatus(request: _186.QueryClaimStatusRequest): Promise<_186.QueryClaimStatusResponse>;
                    claimMetadata(request?: _186.QueryClaimMetadataRequest): Promise<_186.QueryClaimMetadataResponse>;
                };
                epochs: {
                    epochInfos(request?: _189.QueryEpochsInfoRequest): Promise<_189.QueryEpochsInfoResponse>;
                    currentEpoch(request: _189.QueryCurrentEpochRequest): Promise<_189.QueryCurrentEpochResponse>;
                    epochInfo(request: _189.QueryEpochInfoRequest): Promise<_189.QueryEpochInfoResponse>;
                };
                icacallbacks: {
                    params(request?: _194.QueryParamsRequest): Promise<_194.QueryParamsResponse>;
                    callbackData(request: _194.QueryGetCallbackDataRequest): Promise<_194.QueryGetCallbackDataResponse>;
                    callbackDataAll(request?: _194.QueryAllCallbackDataRequest): Promise<_194.QueryAllCallbackDataResponse>;
                };
                icaoracle: {
                    oracle(request: _200.QueryOracleRequest): Promise<_200.QueryOracleResponse>;
                    allOracles(request?: _200.QueryAllOraclesRequest): Promise<_200.QueryAllOraclesResponse>;
                    activeOracles(request: _200.QueryActiveOraclesRequest): Promise<_200.QueryActiveOraclesResponse>;
                    metrics(request: _200.QueryMetricsRequest): Promise<_200.QueryMetricsResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _207.QueryParamsRequest): Promise<_207.QueryParamsResponse>;
                        epochProvisions(request?: _207.QueryEpochProvisionsRequest): Promise<_207.QueryEpochProvisionsResponse>;
                    };
                };
                records: {
                    params(request?: _211.QueryParamsRequest): Promise<_211.QueryParamsResponse>;
                    userRedemptionRecord(request: _211.QueryGetUserRedemptionRecordRequest): Promise<_211.QueryGetUserRedemptionRecordResponse>;
                    userRedemptionRecordAll(request?: _211.QueryAllUserRedemptionRecordRequest): Promise<_211.QueryAllUserRedemptionRecordResponse>;
                    userRedemptionRecordForUser(request: _211.QueryAllUserRedemptionRecordForUserRequest): Promise<_211.QueryAllUserRedemptionRecordForUserResponse>;
                    epochUnbondingRecord(request: _211.QueryGetEpochUnbondingRecordRequest): Promise<_211.QueryGetEpochUnbondingRecordResponse>;
                    epochUnbondingRecordAll(request?: _211.QueryAllEpochUnbondingRecordRequest): Promise<_211.QueryAllEpochUnbondingRecordResponse>;
                    depositRecord(request: _211.QueryGetDepositRecordRequest): Promise<_211.QueryGetDepositRecordResponse>;
                    depositRecordAll(request?: _211.QueryAllDepositRecordRequest): Promise<_211.QueryAllDepositRecordResponse>;
                    depositRecordByHost(request: _211.QueryDepositRecordByHostRequest): Promise<_211.QueryDepositRecordByHostResponse>;
                    lSMDeposit(request: _211.QueryLSMDepositRequest): Promise<_211.QueryLSMDepositResponse>;
                    lSMDeposits(request: _211.QueryLSMDepositsRequest): Promise<_211.QueryLSMDepositsResponse>;
                };
                stakedym: {
                    hostZone(request?: _214.QueryHostZoneRequest): Promise<_214.QueryHostZoneResponse>;
                    delegationRecords(request: _214.QueryDelegationRecordsRequest): Promise<_214.QueryDelegationRecordsResponse>;
                    unbondingRecords(request: _214.QueryUnbondingRecordsRequest): Promise<_214.QueryUnbondingRecordsResponse>;
                    redemptionRecord(request: _214.QueryRedemptionRecordRequest): Promise<_214.QueryRedemptionRecordResponse>;
                    redemptionRecords(request: _214.QueryRedemptionRecordsRequest): Promise<_214.QueryRedemptionRecordsResponse>;
                    slashRecords(request?: _214.QuerySlashRecordsRequest): Promise<_214.QuerySlashRecordsResponse>;
                };
                stakeibc: {
                    params(request?: _226.QueryParamsRequest): Promise<_226.QueryParamsResponse>;
                    validators(request: _226.QueryGetValidatorsRequest): Promise<_226.QueryGetValidatorsResponse>;
                    hostZone(request: _226.QueryGetHostZoneRequest): Promise<_226.QueryGetHostZoneResponse>;
                    hostZoneAll(request?: _226.QueryAllHostZoneRequest): Promise<_226.QueryAllHostZoneResponse>;
                    moduleAddress(request: _226.QueryModuleAddressRequest): Promise<_226.QueryModuleAddressResponse>;
                    interchainAccountFromAddress(request: _226.QueryInterchainAccountFromAddressRequest): Promise<_226.QueryInterchainAccountFromAddressResponse>;
                    epochTracker(request: _226.QueryGetEpochTrackerRequest): Promise<_226.QueryGetEpochTrackerResponse>;
                    epochTrackerAll(request?: _226.QueryAllEpochTrackerRequest): Promise<_226.QueryAllEpochTrackerResponse>;
                    nextPacketSequence(request: _226.QueryGetNextPacketSequenceRequest): Promise<_226.QueryGetNextPacketSequenceResponse>;
                    addressUnbondings(request: _226.QueryAddressUnbondings): Promise<_226.QueryAddressUnbondingsResponse>;
                    allTradeRoutes(request?: _226.QueryAllTradeRoutes): Promise<_226.QueryAllTradeRoutesResponse>;
                };
                staketia: {
                    hostZone(request?: _231.QueryHostZoneRequest): Promise<_231.QueryHostZoneResponse>;
                    delegationRecords(request: _231.QueryDelegationRecordsRequest): Promise<_231.QueryDelegationRecordsResponse>;
                    unbondingRecords(request: _231.QueryUnbondingRecordsRequest): Promise<_231.QueryUnbondingRecordsResponse>;
                    redemptionRecord(request: _231.QueryRedemptionRecordRequest): Promise<_231.QueryRedemptionRecordResponse>;
                    redemptionRecords(request: _231.QueryRedemptionRecordsRequest): Promise<_231.QueryRedemptionRecordsResponse>;
                    slashRecords(request?: _231.QuerySlashRecordsRequest): Promise<_231.QuerySlashRecordsResponse>;
                };
            };
        }>;
    };
}
