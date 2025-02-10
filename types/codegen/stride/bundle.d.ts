import * as _175 from "./airdrop/airdrop";
import * as _176 from "./airdrop/genesis";
import * as _177 from "./airdrop/query";
import * as _178 from "./airdrop/tx";
import * as _179 from "./auction/auction";
import * as _180 from "./auction/genesis";
import * as _181 from "./auction/query";
import * as _182 from "./auction/tx";
import * as _183 from "./autopilot/genesis";
import * as _184 from "./autopilot/params";
import * as _185 from "./autopilot/query";
import * as _186 from "./claim/claim";
import * as _187 from "./claim/genesis";
import * as _188 from "./claim/params";
import * as _189 from "./claim/query";
import * as _190 from "./claim/tx";
import * as _191 from "./epochs/genesis";
import * as _192 from "./epochs/query";
import * as _193 from "./icacallbacks/callback_data";
import * as _194 from "./icacallbacks/genesis";
import * as _195 from "./icacallbacks/packet";
import * as _196 from "./icacallbacks/params";
import * as _197 from "./icacallbacks/query";
import * as _199 from "./icaoracle/callbacks";
import * as _200 from "./icaoracle/contract";
import * as _201 from "./icaoracle/genesis";
import * as _202 from "./icaoracle/icaoracle";
import * as _203 from "./icaoracle/query";
import * as _204 from "./icaoracle/tx";
import * as _205 from "./icqoracle/genesis";
import * as _206 from "./icqoracle/icqoracle";
import * as _207 from "./icqoracle/query";
import * as _208 from "./icqoracle/tx";
import * as _209 from "./interchainquery/v1/genesis";
import * as _210 from "./interchainquery/v1/messages";
import * as _211 from "./interchainquery/v1/query";
import * as _212 from "./mint/v1beta1/genesis";
import * as _213 from "./mint/v1beta1/mint";
import * as _214 from "./mint/v1beta1/query";
import * as _215 from "./records/callbacks";
import * as _216 from "./records/genesis";
import * as _217 from "./records/params";
import * as _218 from "./records/query";
import * as _219 from "./records/records";
import * as _220 from "./stakedym/genesis";
import * as _221 from "./stakedym/query";
import * as _222 from "./stakedym/stakedym";
import * as _223 from "./stakedym/tx";
import * as _224 from "./stakeibc/address_unbonding";
import * as _225 from "./stakeibc/callbacks";
import * as _226 from "./stakeibc/epoch_tracker";
import * as _227 from "./stakeibc/genesis";
import * as _228 from "./stakeibc/gov";
import * as _229 from "./stakeibc/host_zone";
import * as _230 from "./stakeibc/ica_account";
import * as _231 from "./stakeibc/packet";
import * as _232 from "./stakeibc/params";
import * as _233 from "./stakeibc/query";
import * as _234 from "./stakeibc/trade_route";
import * as _235 from "./stakeibc/tx";
import * as _236 from "./stakeibc/validator";
import * as _237 from "./staketia/genesis";
import * as _238 from "./staketia/query";
import * as _239 from "./staketia/staketia";
import * as _240 from "./staketia/tx";
import * as _241 from "./strdburner/genesis";
import * as _242 from "./strdburner/query";
import * as _244 from "./vesting/vesting";
import * as _372 from "./airdrop/query.rpc.Query";
import * as _373 from "./auction/query.rpc.Query";
import * as _374 from "./autopilot/query.rpc.Query";
import * as _375 from "./claim/query.rpc.Query";
import * as _376 from "./epochs/query.rpc.Query";
import * as _377 from "./icacallbacks/query.rpc.Query";
import * as _378 from "./icaoracle/query.rpc.Query";
import * as _379 from "./icqoracle/query.rpc.Query";
import * as _380 from "./mint/v1beta1/query.rpc.Query";
import * as _381 from "./records/query.rpc.Query";
import * as _382 from "./stakedym/query.rpc.Query";
import * as _383 from "./stakeibc/query.rpc.Query";
import * as _384 from "./staketia/query.rpc.Query";
import * as _385 from "./strdburner/query.rpc.Query";
import * as _386 from "./airdrop/tx.rpc.msg";
import * as _387 from "./auction/tx.rpc.msg";
import * as _388 from "./claim/tx.rpc.msg";
import * as _389 from "./icaoracle/tx.rpc.msg";
import * as _390 from "./icqoracle/tx.rpc.msg";
import * as _391 from "./interchainquery/v1/messages.rpc.msg";
import * as _392 from "./stakedym/tx.rpc.msg";
import * as _393 from "./stakeibc/tx.rpc.msg";
import * as _394 from "./staketia/tx.rpc.msg";
export declare namespace stride {
    const airdrop: {
        MsgClientImpl: typeof _386.MsgClientImpl;
        QueryClientImpl: typeof _372.QueryClientImpl;
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
    const auction: {
        MsgClientImpl: typeof _387.MsgClientImpl;
        QueryClientImpl: typeof _373.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            auction(request: _181.QueryAuctionRequest): Promise<_181.QueryAuctionResponse>;
            auctions(request?: _181.QueryAuctionsRequest): Promise<_181.QueryAuctionsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                placeBid(value: _182.MsgPlaceBid): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAuction(value: _182.MsgCreateAuction): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateAuction(value: _182.MsgUpdateAuction): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                placeBid(value: _182.MsgPlaceBid): {
                    typeUrl: string;
                    value: _182.MsgPlaceBid;
                };
                createAuction(value: _182.MsgCreateAuction): {
                    typeUrl: string;
                    value: _182.MsgCreateAuction;
                };
                updateAuction(value: _182.MsgUpdateAuction): {
                    typeUrl: string;
                    value: _182.MsgUpdateAuction;
                };
            };
            fromPartial: {
                placeBid(value: _182.MsgPlaceBid): {
                    typeUrl: string;
                    value: _182.MsgPlaceBid;
                };
                createAuction(value: _182.MsgCreateAuction): {
                    typeUrl: string;
                    value: _182.MsgCreateAuction;
                };
                updateAuction(value: _182.MsgUpdateAuction): {
                    typeUrl: string;
                    value: _182.MsgUpdateAuction;
                };
            };
        };
        AminoConverter: {
            "/stride.auction.MsgPlaceBid": {
                aminoType: string;
                toAmino: (message: _182.MsgPlaceBid) => _182.MsgPlaceBidAmino;
                fromAmino: (object: _182.MsgPlaceBidAmino) => _182.MsgPlaceBid;
            };
            "/stride.auction.MsgCreateAuction": {
                aminoType: string;
                toAmino: (message: _182.MsgCreateAuction) => _182.MsgCreateAuctionAmino;
                fromAmino: (object: _182.MsgCreateAuctionAmino) => _182.MsgCreateAuction;
            };
            "/stride.auction.MsgUpdateAuction": {
                aminoType: string;
                toAmino: (message: _182.MsgUpdateAuction) => _182.MsgUpdateAuctionAmino;
                fromAmino: (object: _182.MsgUpdateAuctionAmino) => _182.MsgUpdateAuction;
            };
        };
        MsgPlaceBid: {
            typeUrl: string;
            encode(message: _182.MsgPlaceBid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.MsgPlaceBid;
            fromPartial(object: Partial<_182.MsgPlaceBid>): _182.MsgPlaceBid;
            fromAmino(object: _182.MsgPlaceBidAmino): _182.MsgPlaceBid;
            toAmino(message: _182.MsgPlaceBid): _182.MsgPlaceBidAmino;
            fromAminoMsg(object: _182.MsgPlaceBidAminoMsg): _182.MsgPlaceBid;
            toAminoMsg(message: _182.MsgPlaceBid): _182.MsgPlaceBidAminoMsg;
            fromProtoMsg(message: _182.MsgPlaceBidProtoMsg): _182.MsgPlaceBid;
            toProto(message: _182.MsgPlaceBid): Uint8Array;
            toProtoMsg(message: _182.MsgPlaceBid): _182.MsgPlaceBidProtoMsg;
        };
        MsgPlaceBidResponse: {
            typeUrl: string;
            encode(_: _182.MsgPlaceBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.MsgPlaceBidResponse;
            fromPartial(_: Partial<_182.MsgPlaceBidResponse>): _182.MsgPlaceBidResponse;
            fromAmino(_: _182.MsgPlaceBidResponseAmino): _182.MsgPlaceBidResponse;
            toAmino(_: _182.MsgPlaceBidResponse): _182.MsgPlaceBidResponseAmino;
            fromAminoMsg(object: _182.MsgPlaceBidResponseAminoMsg): _182.MsgPlaceBidResponse;
            fromProtoMsg(message: _182.MsgPlaceBidResponseProtoMsg): _182.MsgPlaceBidResponse;
            toProto(message: _182.MsgPlaceBidResponse): Uint8Array;
            toProtoMsg(message: _182.MsgPlaceBidResponse): _182.MsgPlaceBidResponseProtoMsg;
        };
        MsgCreateAuction: {
            typeUrl: string;
            encode(message: _182.MsgCreateAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.MsgCreateAuction;
            fromPartial(object: Partial<_182.MsgCreateAuction>): _182.MsgCreateAuction;
            fromAmino(object: _182.MsgCreateAuctionAmino): _182.MsgCreateAuction;
            toAmino(message: _182.MsgCreateAuction): _182.MsgCreateAuctionAmino;
            fromAminoMsg(object: _182.MsgCreateAuctionAminoMsg): _182.MsgCreateAuction;
            toAminoMsg(message: _182.MsgCreateAuction): _182.MsgCreateAuctionAminoMsg;
            fromProtoMsg(message: _182.MsgCreateAuctionProtoMsg): _182.MsgCreateAuction;
            toProto(message: _182.MsgCreateAuction): Uint8Array;
            toProtoMsg(message: _182.MsgCreateAuction): _182.MsgCreateAuctionProtoMsg;
        };
        MsgCreateAuctionResponse: {
            typeUrl: string;
            encode(_: _182.MsgCreateAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.MsgCreateAuctionResponse;
            fromPartial(_: Partial<_182.MsgCreateAuctionResponse>): _182.MsgCreateAuctionResponse;
            fromAmino(_: _182.MsgCreateAuctionResponseAmino): _182.MsgCreateAuctionResponse;
            toAmino(_: _182.MsgCreateAuctionResponse): _182.MsgCreateAuctionResponseAmino;
            fromAminoMsg(object: _182.MsgCreateAuctionResponseAminoMsg): _182.MsgCreateAuctionResponse;
            fromProtoMsg(message: _182.MsgCreateAuctionResponseProtoMsg): _182.MsgCreateAuctionResponse;
            toProto(message: _182.MsgCreateAuctionResponse): Uint8Array;
            toProtoMsg(message: _182.MsgCreateAuctionResponse): _182.MsgCreateAuctionResponseProtoMsg;
        };
        MsgUpdateAuction: {
            typeUrl: string;
            encode(message: _182.MsgUpdateAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.MsgUpdateAuction;
            fromPartial(object: Partial<_182.MsgUpdateAuction>): _182.MsgUpdateAuction;
            fromAmino(object: _182.MsgUpdateAuctionAmino): _182.MsgUpdateAuction;
            toAmino(message: _182.MsgUpdateAuction): _182.MsgUpdateAuctionAmino;
            fromAminoMsg(object: _182.MsgUpdateAuctionAminoMsg): _182.MsgUpdateAuction;
            toAminoMsg(message: _182.MsgUpdateAuction): _182.MsgUpdateAuctionAminoMsg;
            fromProtoMsg(message: _182.MsgUpdateAuctionProtoMsg): _182.MsgUpdateAuction;
            toProto(message: _182.MsgUpdateAuction): Uint8Array;
            toProtoMsg(message: _182.MsgUpdateAuction): _182.MsgUpdateAuctionProtoMsg;
        };
        MsgUpdateAuctionResponse: {
            typeUrl: string;
            encode(_: _182.MsgUpdateAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.MsgUpdateAuctionResponse;
            fromPartial(_: Partial<_182.MsgUpdateAuctionResponse>): _182.MsgUpdateAuctionResponse;
            fromAmino(_: _182.MsgUpdateAuctionResponseAmino): _182.MsgUpdateAuctionResponse;
            toAmino(_: _182.MsgUpdateAuctionResponse): _182.MsgUpdateAuctionResponseAmino;
            fromAminoMsg(object: _182.MsgUpdateAuctionResponseAminoMsg): _182.MsgUpdateAuctionResponse;
            fromProtoMsg(message: _182.MsgUpdateAuctionResponseProtoMsg): _182.MsgUpdateAuctionResponse;
            toProto(message: _182.MsgUpdateAuctionResponse): Uint8Array;
            toProtoMsg(message: _182.MsgUpdateAuctionResponse): _182.MsgUpdateAuctionResponseProtoMsg;
        };
        QueryAuctionRequest: {
            typeUrl: string;
            encode(message: _181.QueryAuctionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.QueryAuctionRequest;
            fromPartial(object: Partial<_181.QueryAuctionRequest>): _181.QueryAuctionRequest;
            fromAmino(object: _181.QueryAuctionRequestAmino): _181.QueryAuctionRequest;
            toAmino(message: _181.QueryAuctionRequest): _181.QueryAuctionRequestAmino;
            fromAminoMsg(object: _181.QueryAuctionRequestAminoMsg): _181.QueryAuctionRequest;
            fromProtoMsg(message: _181.QueryAuctionRequestProtoMsg): _181.QueryAuctionRequest;
            toProto(message: _181.QueryAuctionRequest): Uint8Array;
            toProtoMsg(message: _181.QueryAuctionRequest): _181.QueryAuctionRequestProtoMsg;
        };
        QueryAuctionResponse: {
            typeUrl: string;
            encode(message: _181.QueryAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.QueryAuctionResponse;
            fromPartial(object: Partial<_181.QueryAuctionResponse>): _181.QueryAuctionResponse;
            fromAmino(object: _181.QueryAuctionResponseAmino): _181.QueryAuctionResponse;
            toAmino(message: _181.QueryAuctionResponse): _181.QueryAuctionResponseAmino;
            fromAminoMsg(object: _181.QueryAuctionResponseAminoMsg): _181.QueryAuctionResponse;
            fromProtoMsg(message: _181.QueryAuctionResponseProtoMsg): _181.QueryAuctionResponse;
            toProto(message: _181.QueryAuctionResponse): Uint8Array;
            toProtoMsg(message: _181.QueryAuctionResponse): _181.QueryAuctionResponseProtoMsg;
        };
        QueryAuctionsRequest: {
            typeUrl: string;
            encode(message: _181.QueryAuctionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.QueryAuctionsRequest;
            fromPartial(object: Partial<_181.QueryAuctionsRequest>): _181.QueryAuctionsRequest;
            fromAmino(object: _181.QueryAuctionsRequestAmino): _181.QueryAuctionsRequest;
            toAmino(message: _181.QueryAuctionsRequest): _181.QueryAuctionsRequestAmino;
            fromAminoMsg(object: _181.QueryAuctionsRequestAminoMsg): _181.QueryAuctionsRequest;
            fromProtoMsg(message: _181.QueryAuctionsRequestProtoMsg): _181.QueryAuctionsRequest;
            toProto(message: _181.QueryAuctionsRequest): Uint8Array;
            toProtoMsg(message: _181.QueryAuctionsRequest): _181.QueryAuctionsRequestProtoMsg;
        };
        QueryAuctionsResponse: {
            typeUrl: string;
            encode(message: _181.QueryAuctionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.QueryAuctionsResponse;
            fromPartial(object: Partial<_181.QueryAuctionsResponse>): _181.QueryAuctionsResponse;
            fromAmino(object: _181.QueryAuctionsResponseAmino): _181.QueryAuctionsResponse;
            toAmino(message: _181.QueryAuctionsResponse): _181.QueryAuctionsResponseAmino;
            fromAminoMsg(object: _181.QueryAuctionsResponseAminoMsg): _181.QueryAuctionsResponse;
            fromProtoMsg(message: _181.QueryAuctionsResponseProtoMsg): _181.QueryAuctionsResponse;
            toProto(message: _181.QueryAuctionsResponse): Uint8Array;
            toProtoMsg(message: _181.QueryAuctionsResponse): _181.QueryAuctionsResponseProtoMsg;
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
        auctionTypeFromJSON(object: any): _179.AuctionType;
        auctionTypeToJSON(object: _179.AuctionType): string;
        AuctionType: typeof _179.AuctionType;
        AuctionTypeSDKType: typeof _179.AuctionType;
        AuctionTypeAmino: typeof _179.AuctionType;
        Params: {
            typeUrl: string;
            encode(_: _179.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.Params;
            fromPartial(_: Partial<_179.Params>): _179.Params;
            fromAmino(_: _179.ParamsAmino): _179.Params;
            toAmino(_: _179.Params): _179.ParamsAmino;
            fromAminoMsg(object: _179.ParamsAminoMsg): _179.Params;
            fromProtoMsg(message: _179.ParamsProtoMsg): _179.Params;
            toProto(message: _179.Params): Uint8Array;
            toProtoMsg(message: _179.Params): _179.ParamsProtoMsg;
        };
        Auction: {
            typeUrl: string;
            encode(message: _179.Auction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.Auction;
            fromPartial(object: Partial<_179.Auction>): _179.Auction;
            fromAmino(object: _179.AuctionAmino): _179.Auction;
            toAmino(message: _179.Auction): _179.AuctionAmino;
            fromAminoMsg(object: _179.AuctionAminoMsg): _179.Auction;
            fromProtoMsg(message: _179.AuctionProtoMsg): _179.Auction;
            toProto(message: _179.Auction): Uint8Array;
            toProtoMsg(message: _179.Auction): _179.AuctionProtoMsg;
        };
    };
    const autopilot: {
        QueryClientImpl: typeof _374.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _185.QueryParamsRequest): Promise<_185.QueryParamsResponse>;
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
    };
    const claim: {
        MsgClientImpl: typeof _388.MsgClientImpl;
        QueryClientImpl: typeof _375.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            distributorAccountBalance(request: _189.QueryDistributorAccountBalanceRequest): Promise<_189.QueryDistributorAccountBalanceResponse>;
            params(request?: _189.QueryParamsRequest): Promise<_189.QueryParamsResponse>;
            claimRecord(request: _189.QueryClaimRecordRequest): Promise<_189.QueryClaimRecordResponse>;
            claimableForAction(request: _189.QueryClaimableForActionRequest): Promise<_189.QueryClaimableForActionResponse>;
            totalClaimable(request: _189.QueryTotalClaimableRequest): Promise<_189.QueryTotalClaimableResponse>;
            userVestings(request: _189.QueryUserVestingsRequest): Promise<_189.QueryUserVestingsResponse>;
            claimStatus(request: _189.QueryClaimStatusRequest): Promise<_189.QueryClaimStatusResponse>;
            claimMetadata(request?: _189.QueryClaimMetadataRequest): Promise<_189.QueryClaimMetadataResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                setAirdropAllocations(value: _190.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimFreeAmount(value: _190.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAirdrop(value: _190.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteAirdrop(value: _190.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                setAirdropAllocations(value: _190.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _190.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _190.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _190.MsgClaimFreeAmount;
                };
                createAirdrop(value: _190.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _190.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _190.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _190.MsgDeleteAirdrop;
                };
            };
            fromPartial: {
                setAirdropAllocations(value: _190.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _190.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _190.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _190.MsgClaimFreeAmount;
                };
                createAirdrop(value: _190.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _190.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _190.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _190.MsgDeleteAirdrop;
                };
            };
        };
        AminoConverter: {
            "/stride.claim.MsgSetAirdropAllocations": {
                aminoType: string;
                toAmino: (message: _190.MsgSetAirdropAllocations) => _190.MsgSetAirdropAllocationsAmino;
                fromAmino: (object: _190.MsgSetAirdropAllocationsAmino) => _190.MsgSetAirdropAllocations;
            };
            "/stride.claim.MsgClaimFreeAmount": {
                aminoType: string;
                toAmino: (message: _190.MsgClaimFreeAmount) => _190.MsgClaimFreeAmountAmino;
                fromAmino: (object: _190.MsgClaimFreeAmountAmino) => _190.MsgClaimFreeAmount;
            };
            "/stride.claim.MsgCreateAirdrop": {
                aminoType: string;
                toAmino: (message: _190.MsgCreateAirdrop) => _190.MsgCreateAirdropAmino;
                fromAmino: (object: _190.MsgCreateAirdropAmino) => _190.MsgCreateAirdrop;
            };
            "/stride.claim.MsgDeleteAirdrop": {
                aminoType: string;
                toAmino: (message: _190.MsgDeleteAirdrop) => _190.MsgDeleteAirdropAmino;
                fromAmino: (object: _190.MsgDeleteAirdropAmino) => _190.MsgDeleteAirdrop;
            };
        };
        MsgSetAirdropAllocations: {
            typeUrl: string;
            encode(message: _190.MsgSetAirdropAllocations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.MsgSetAirdropAllocations;
            fromPartial(object: Partial<_190.MsgSetAirdropAllocations>): _190.MsgSetAirdropAllocations;
            fromAmino(object: _190.MsgSetAirdropAllocationsAmino): _190.MsgSetAirdropAllocations;
            toAmino(message: _190.MsgSetAirdropAllocations): _190.MsgSetAirdropAllocationsAmino;
            fromAminoMsg(object: _190.MsgSetAirdropAllocationsAminoMsg): _190.MsgSetAirdropAllocations;
            fromProtoMsg(message: _190.MsgSetAirdropAllocationsProtoMsg): _190.MsgSetAirdropAllocations;
            toProto(message: _190.MsgSetAirdropAllocations): Uint8Array;
            toProtoMsg(message: _190.MsgSetAirdropAllocations): _190.MsgSetAirdropAllocationsProtoMsg;
        };
        MsgSetAirdropAllocationsResponse: {
            typeUrl: string;
            encode(_: _190.MsgSetAirdropAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.MsgSetAirdropAllocationsResponse;
            fromPartial(_: Partial<_190.MsgSetAirdropAllocationsResponse>): _190.MsgSetAirdropAllocationsResponse;
            fromAmino(_: _190.MsgSetAirdropAllocationsResponseAmino): _190.MsgSetAirdropAllocationsResponse;
            toAmino(_: _190.MsgSetAirdropAllocationsResponse): _190.MsgSetAirdropAllocationsResponseAmino;
            fromAminoMsg(object: _190.MsgSetAirdropAllocationsResponseAminoMsg): _190.MsgSetAirdropAllocationsResponse;
            fromProtoMsg(message: _190.MsgSetAirdropAllocationsResponseProtoMsg): _190.MsgSetAirdropAllocationsResponse;
            toProto(message: _190.MsgSetAirdropAllocationsResponse): Uint8Array;
            toProtoMsg(message: _190.MsgSetAirdropAllocationsResponse): _190.MsgSetAirdropAllocationsResponseProtoMsg;
        };
        MsgClaimFreeAmount: {
            typeUrl: string;
            encode(message: _190.MsgClaimFreeAmount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.MsgClaimFreeAmount;
            fromPartial(object: Partial<_190.MsgClaimFreeAmount>): _190.MsgClaimFreeAmount;
            fromAmino(object: _190.MsgClaimFreeAmountAmino): _190.MsgClaimFreeAmount;
            toAmino(message: _190.MsgClaimFreeAmount): _190.MsgClaimFreeAmountAmino;
            fromAminoMsg(object: _190.MsgClaimFreeAmountAminoMsg): _190.MsgClaimFreeAmount;
            toAminoMsg(message: _190.MsgClaimFreeAmount): _190.MsgClaimFreeAmountAminoMsg;
            fromProtoMsg(message: _190.MsgClaimFreeAmountProtoMsg): _190.MsgClaimFreeAmount;
            toProto(message: _190.MsgClaimFreeAmount): Uint8Array;
            toProtoMsg(message: _190.MsgClaimFreeAmount): _190.MsgClaimFreeAmountProtoMsg;
        };
        MsgClaimFreeAmountResponse: {
            typeUrl: string;
            encode(message: _190.MsgClaimFreeAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.MsgClaimFreeAmountResponse;
            fromPartial(object: Partial<_190.MsgClaimFreeAmountResponse>): _190.MsgClaimFreeAmountResponse;
            fromAmino(object: _190.MsgClaimFreeAmountResponseAmino): _190.MsgClaimFreeAmountResponse;
            toAmino(message: _190.MsgClaimFreeAmountResponse): _190.MsgClaimFreeAmountResponseAmino;
            fromAminoMsg(object: _190.MsgClaimFreeAmountResponseAminoMsg): _190.MsgClaimFreeAmountResponse;
            fromProtoMsg(message: _190.MsgClaimFreeAmountResponseProtoMsg): _190.MsgClaimFreeAmountResponse;
            toProto(message: _190.MsgClaimFreeAmountResponse): Uint8Array;
            toProtoMsg(message: _190.MsgClaimFreeAmountResponse): _190.MsgClaimFreeAmountResponseProtoMsg;
        };
        MsgCreateAirdrop: {
            typeUrl: string;
            encode(message: _190.MsgCreateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.MsgCreateAirdrop;
            fromPartial(object: Partial<_190.MsgCreateAirdrop>): _190.MsgCreateAirdrop;
            fromAmino(object: _190.MsgCreateAirdropAmino): _190.MsgCreateAirdrop;
            toAmino(message: _190.MsgCreateAirdrop): _190.MsgCreateAirdropAmino;
            fromAminoMsg(object: _190.MsgCreateAirdropAminoMsg): _190.MsgCreateAirdrop;
            fromProtoMsg(message: _190.MsgCreateAirdropProtoMsg): _190.MsgCreateAirdrop;
            toProto(message: _190.MsgCreateAirdrop): Uint8Array;
            toProtoMsg(message: _190.MsgCreateAirdrop): _190.MsgCreateAirdropProtoMsg;
        };
        MsgCreateAirdropResponse: {
            typeUrl: string;
            encode(_: _190.MsgCreateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.MsgCreateAirdropResponse;
            fromPartial(_: Partial<_190.MsgCreateAirdropResponse>): _190.MsgCreateAirdropResponse;
            fromAmino(_: _190.MsgCreateAirdropResponseAmino): _190.MsgCreateAirdropResponse;
            toAmino(_: _190.MsgCreateAirdropResponse): _190.MsgCreateAirdropResponseAmino;
            fromAminoMsg(object: _190.MsgCreateAirdropResponseAminoMsg): _190.MsgCreateAirdropResponse;
            fromProtoMsg(message: _190.MsgCreateAirdropResponseProtoMsg): _190.MsgCreateAirdropResponse;
            toProto(message: _190.MsgCreateAirdropResponse): Uint8Array;
            toProtoMsg(message: _190.MsgCreateAirdropResponse): _190.MsgCreateAirdropResponseProtoMsg;
        };
        MsgDeleteAirdrop: {
            typeUrl: string;
            encode(message: _190.MsgDeleteAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.MsgDeleteAirdrop;
            fromPartial(object: Partial<_190.MsgDeleteAirdrop>): _190.MsgDeleteAirdrop;
            fromAmino(object: _190.MsgDeleteAirdropAmino): _190.MsgDeleteAirdrop;
            toAmino(message: _190.MsgDeleteAirdrop): _190.MsgDeleteAirdropAmino;
            fromAminoMsg(object: _190.MsgDeleteAirdropAminoMsg): _190.MsgDeleteAirdrop;
            fromProtoMsg(message: _190.MsgDeleteAirdropProtoMsg): _190.MsgDeleteAirdrop;
            toProto(message: _190.MsgDeleteAirdrop): Uint8Array;
            toProtoMsg(message: _190.MsgDeleteAirdrop): _190.MsgDeleteAirdropProtoMsg;
        };
        MsgDeleteAirdropResponse: {
            typeUrl: string;
            encode(_: _190.MsgDeleteAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.MsgDeleteAirdropResponse;
            fromPartial(_: Partial<_190.MsgDeleteAirdropResponse>): _190.MsgDeleteAirdropResponse;
            fromAmino(_: _190.MsgDeleteAirdropResponseAmino): _190.MsgDeleteAirdropResponse;
            toAmino(_: _190.MsgDeleteAirdropResponse): _190.MsgDeleteAirdropResponseAmino;
            fromAminoMsg(object: _190.MsgDeleteAirdropResponseAminoMsg): _190.MsgDeleteAirdropResponse;
            fromProtoMsg(message: _190.MsgDeleteAirdropResponseProtoMsg): _190.MsgDeleteAirdropResponse;
            toProto(message: _190.MsgDeleteAirdropResponse): Uint8Array;
            toProtoMsg(message: _190.MsgDeleteAirdropResponse): _190.MsgDeleteAirdropResponseProtoMsg;
        };
        ClaimStatus: {
            typeUrl: string;
            encode(message: _189.ClaimStatus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.ClaimStatus;
            fromPartial(object: Partial<_189.ClaimStatus>): _189.ClaimStatus;
            fromAmino(object: _189.ClaimStatusAmino): _189.ClaimStatus;
            toAmino(message: _189.ClaimStatus): _189.ClaimStatusAmino;
            fromAminoMsg(object: _189.ClaimStatusAminoMsg): _189.ClaimStatus;
            fromProtoMsg(message: _189.ClaimStatusProtoMsg): _189.ClaimStatus;
            toProto(message: _189.ClaimStatus): Uint8Array;
            toProtoMsg(message: _189.ClaimStatus): _189.ClaimStatusProtoMsg;
        };
        QueryClaimStatusRequest: {
            typeUrl: string;
            encode(message: _189.QueryClaimStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.QueryClaimStatusRequest;
            fromPartial(object: Partial<_189.QueryClaimStatusRequest>): _189.QueryClaimStatusRequest;
            fromAmino(object: _189.QueryClaimStatusRequestAmino): _189.QueryClaimStatusRequest;
            toAmino(message: _189.QueryClaimStatusRequest): _189.QueryClaimStatusRequestAmino;
            fromAminoMsg(object: _189.QueryClaimStatusRequestAminoMsg): _189.QueryClaimStatusRequest;
            fromProtoMsg(message: _189.QueryClaimStatusRequestProtoMsg): _189.QueryClaimStatusRequest;
            toProto(message: _189.QueryClaimStatusRequest): Uint8Array;
            toProtoMsg(message: _189.QueryClaimStatusRequest): _189.QueryClaimStatusRequestProtoMsg;
        };
        QueryClaimStatusResponse: {
            typeUrl: string;
            encode(message: _189.QueryClaimStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.QueryClaimStatusResponse;
            fromPartial(object: Partial<_189.QueryClaimStatusResponse>): _189.QueryClaimStatusResponse;
            fromAmino(object: _189.QueryClaimStatusResponseAmino): _189.QueryClaimStatusResponse;
            toAmino(message: _189.QueryClaimStatusResponse): _189.QueryClaimStatusResponseAmino;
            fromAminoMsg(object: _189.QueryClaimStatusResponseAminoMsg): _189.QueryClaimStatusResponse;
            fromProtoMsg(message: _189.QueryClaimStatusResponseProtoMsg): _189.QueryClaimStatusResponse;
            toProto(message: _189.QueryClaimStatusResponse): Uint8Array;
            toProtoMsg(message: _189.QueryClaimStatusResponse): _189.QueryClaimStatusResponseProtoMsg;
        };
        ClaimMetadata: {
            typeUrl: string;
            encode(message: _189.ClaimMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.ClaimMetadata;
            fromPartial(object: Partial<_189.ClaimMetadata>): _189.ClaimMetadata;
            fromAmino(object: _189.ClaimMetadataAmino): _189.ClaimMetadata;
            toAmino(message: _189.ClaimMetadata): _189.ClaimMetadataAmino;
            fromAminoMsg(object: _189.ClaimMetadataAminoMsg): _189.ClaimMetadata;
            fromProtoMsg(message: _189.ClaimMetadataProtoMsg): _189.ClaimMetadata;
            toProto(message: _189.ClaimMetadata): Uint8Array;
            toProtoMsg(message: _189.ClaimMetadata): _189.ClaimMetadataProtoMsg;
        };
        QueryClaimMetadataRequest: {
            typeUrl: string;
            encode(_: _189.QueryClaimMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.QueryClaimMetadataRequest;
            fromPartial(_: Partial<_189.QueryClaimMetadataRequest>): _189.QueryClaimMetadataRequest;
            fromAmino(_: _189.QueryClaimMetadataRequestAmino): _189.QueryClaimMetadataRequest;
            toAmino(_: _189.QueryClaimMetadataRequest): _189.QueryClaimMetadataRequestAmino;
            fromAminoMsg(object: _189.QueryClaimMetadataRequestAminoMsg): _189.QueryClaimMetadataRequest;
            fromProtoMsg(message: _189.QueryClaimMetadataRequestProtoMsg): _189.QueryClaimMetadataRequest;
            toProto(message: _189.QueryClaimMetadataRequest): Uint8Array;
            toProtoMsg(message: _189.QueryClaimMetadataRequest): _189.QueryClaimMetadataRequestProtoMsg;
        };
        QueryClaimMetadataResponse: {
            typeUrl: string;
            encode(message: _189.QueryClaimMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.QueryClaimMetadataResponse;
            fromPartial(object: Partial<_189.QueryClaimMetadataResponse>): _189.QueryClaimMetadataResponse;
            fromAmino(object: _189.QueryClaimMetadataResponseAmino): _189.QueryClaimMetadataResponse;
            toAmino(message: _189.QueryClaimMetadataResponse): _189.QueryClaimMetadataResponseAmino;
            fromAminoMsg(object: _189.QueryClaimMetadataResponseAminoMsg): _189.QueryClaimMetadataResponse;
            fromProtoMsg(message: _189.QueryClaimMetadataResponseProtoMsg): _189.QueryClaimMetadataResponse;
            toProto(message: _189.QueryClaimMetadataResponse): Uint8Array;
            toProtoMsg(message: _189.QueryClaimMetadataResponse): _189.QueryClaimMetadataResponseProtoMsg;
        };
        QueryDistributorAccountBalanceRequest: {
            typeUrl: string;
            encode(message: _189.QueryDistributorAccountBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.QueryDistributorAccountBalanceRequest;
            fromPartial(object: Partial<_189.QueryDistributorAccountBalanceRequest>): _189.QueryDistributorAccountBalanceRequest;
            fromAmino(object: _189.QueryDistributorAccountBalanceRequestAmino): _189.QueryDistributorAccountBalanceRequest;
            toAmino(message: _189.QueryDistributorAccountBalanceRequest): _189.QueryDistributorAccountBalanceRequestAmino;
            fromAminoMsg(object: _189.QueryDistributorAccountBalanceRequestAminoMsg): _189.QueryDistributorAccountBalanceRequest;
            fromProtoMsg(message: _189.QueryDistributorAccountBalanceRequestProtoMsg): _189.QueryDistributorAccountBalanceRequest;
            toProto(message: _189.QueryDistributorAccountBalanceRequest): Uint8Array;
            toProtoMsg(message: _189.QueryDistributorAccountBalanceRequest): _189.QueryDistributorAccountBalanceRequestProtoMsg;
        };
        QueryDistributorAccountBalanceResponse: {
            typeUrl: string;
            encode(message: _189.QueryDistributorAccountBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.QueryDistributorAccountBalanceResponse;
            fromPartial(object: Partial<_189.QueryDistributorAccountBalanceResponse>): _189.QueryDistributorAccountBalanceResponse;
            fromAmino(object: _189.QueryDistributorAccountBalanceResponseAmino): _189.QueryDistributorAccountBalanceResponse;
            toAmino(message: _189.QueryDistributorAccountBalanceResponse): _189.QueryDistributorAccountBalanceResponseAmino;
            fromAminoMsg(object: _189.QueryDistributorAccountBalanceResponseAminoMsg): _189.QueryDistributorAccountBalanceResponse;
            fromProtoMsg(message: _189.QueryDistributorAccountBalanceResponseProtoMsg): _189.QueryDistributorAccountBalanceResponse;
            toProto(message: _189.QueryDistributorAccountBalanceResponse): Uint8Array;
            toProtoMsg(message: _189.QueryDistributorAccountBalanceResponse): _189.QueryDistributorAccountBalanceResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _189.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.QueryParamsRequest;
            fromPartial(_: Partial<_189.QueryParamsRequest>): _189.QueryParamsRequest;
            fromAmino(_: _189.QueryParamsRequestAmino): _189.QueryParamsRequest;
            toAmino(_: _189.QueryParamsRequest): _189.QueryParamsRequestAmino;
            fromAminoMsg(object: _189.QueryParamsRequestAminoMsg): _189.QueryParamsRequest;
            fromProtoMsg(message: _189.QueryParamsRequestProtoMsg): _189.QueryParamsRequest;
            toProto(message: _189.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _189.QueryParamsRequest): _189.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _189.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.QueryParamsResponse;
            fromPartial(object: Partial<_189.QueryParamsResponse>): _189.QueryParamsResponse;
            fromAmino(object: _189.QueryParamsResponseAmino): _189.QueryParamsResponse;
            toAmino(message: _189.QueryParamsResponse): _189.QueryParamsResponseAmino;
            fromAminoMsg(object: _189.QueryParamsResponseAminoMsg): _189.QueryParamsResponse;
            fromProtoMsg(message: _189.QueryParamsResponseProtoMsg): _189.QueryParamsResponse;
            toProto(message: _189.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _189.QueryParamsResponse): _189.QueryParamsResponseProtoMsg;
        };
        QueryClaimRecordRequest: {
            typeUrl: string;
            encode(message: _189.QueryClaimRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.QueryClaimRecordRequest;
            fromPartial(object: Partial<_189.QueryClaimRecordRequest>): _189.QueryClaimRecordRequest;
            fromAmino(object: _189.QueryClaimRecordRequestAmino): _189.QueryClaimRecordRequest;
            toAmino(message: _189.QueryClaimRecordRequest): _189.QueryClaimRecordRequestAmino;
            fromAminoMsg(object: _189.QueryClaimRecordRequestAminoMsg): _189.QueryClaimRecordRequest;
            fromProtoMsg(message: _189.QueryClaimRecordRequestProtoMsg): _189.QueryClaimRecordRequest;
            toProto(message: _189.QueryClaimRecordRequest): Uint8Array;
            toProtoMsg(message: _189.QueryClaimRecordRequest): _189.QueryClaimRecordRequestProtoMsg;
        };
        QueryClaimRecordResponse: {
            typeUrl: string;
            encode(message: _189.QueryClaimRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.QueryClaimRecordResponse;
            fromPartial(object: Partial<_189.QueryClaimRecordResponse>): _189.QueryClaimRecordResponse;
            fromAmino(object: _189.QueryClaimRecordResponseAmino): _189.QueryClaimRecordResponse;
            toAmino(message: _189.QueryClaimRecordResponse): _189.QueryClaimRecordResponseAmino;
            fromAminoMsg(object: _189.QueryClaimRecordResponseAminoMsg): _189.QueryClaimRecordResponse;
            fromProtoMsg(message: _189.QueryClaimRecordResponseProtoMsg): _189.QueryClaimRecordResponse;
            toProto(message: _189.QueryClaimRecordResponse): Uint8Array;
            toProtoMsg(message: _189.QueryClaimRecordResponse): _189.QueryClaimRecordResponseProtoMsg;
        };
        QueryClaimableForActionRequest: {
            typeUrl: string;
            encode(message: _189.QueryClaimableForActionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.QueryClaimableForActionRequest;
            fromPartial(object: Partial<_189.QueryClaimableForActionRequest>): _189.QueryClaimableForActionRequest;
            fromAmino(object: _189.QueryClaimableForActionRequestAmino): _189.QueryClaimableForActionRequest;
            toAmino(message: _189.QueryClaimableForActionRequest): _189.QueryClaimableForActionRequestAmino;
            fromAminoMsg(object: _189.QueryClaimableForActionRequestAminoMsg): _189.QueryClaimableForActionRequest;
            fromProtoMsg(message: _189.QueryClaimableForActionRequestProtoMsg): _189.QueryClaimableForActionRequest;
            toProto(message: _189.QueryClaimableForActionRequest): Uint8Array;
            toProtoMsg(message: _189.QueryClaimableForActionRequest): _189.QueryClaimableForActionRequestProtoMsg;
        };
        QueryClaimableForActionResponse: {
            typeUrl: string;
            encode(message: _189.QueryClaimableForActionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.QueryClaimableForActionResponse;
            fromPartial(object: Partial<_189.QueryClaimableForActionResponse>): _189.QueryClaimableForActionResponse;
            fromAmino(object: _189.QueryClaimableForActionResponseAmino): _189.QueryClaimableForActionResponse;
            toAmino(message: _189.QueryClaimableForActionResponse): _189.QueryClaimableForActionResponseAmino;
            fromAminoMsg(object: _189.QueryClaimableForActionResponseAminoMsg): _189.QueryClaimableForActionResponse;
            fromProtoMsg(message: _189.QueryClaimableForActionResponseProtoMsg): _189.QueryClaimableForActionResponse;
            toProto(message: _189.QueryClaimableForActionResponse): Uint8Array;
            toProtoMsg(message: _189.QueryClaimableForActionResponse): _189.QueryClaimableForActionResponseProtoMsg;
        };
        QueryTotalClaimableRequest: {
            typeUrl: string;
            encode(message: _189.QueryTotalClaimableRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.QueryTotalClaimableRequest;
            fromPartial(object: Partial<_189.QueryTotalClaimableRequest>): _189.QueryTotalClaimableRequest;
            fromAmino(object: _189.QueryTotalClaimableRequestAmino): _189.QueryTotalClaimableRequest;
            toAmino(message: _189.QueryTotalClaimableRequest): _189.QueryTotalClaimableRequestAmino;
            fromAminoMsg(object: _189.QueryTotalClaimableRequestAminoMsg): _189.QueryTotalClaimableRequest;
            fromProtoMsg(message: _189.QueryTotalClaimableRequestProtoMsg): _189.QueryTotalClaimableRequest;
            toProto(message: _189.QueryTotalClaimableRequest): Uint8Array;
            toProtoMsg(message: _189.QueryTotalClaimableRequest): _189.QueryTotalClaimableRequestProtoMsg;
        };
        QueryTotalClaimableResponse: {
            typeUrl: string;
            encode(message: _189.QueryTotalClaimableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.QueryTotalClaimableResponse;
            fromPartial(object: Partial<_189.QueryTotalClaimableResponse>): _189.QueryTotalClaimableResponse;
            fromAmino(object: _189.QueryTotalClaimableResponseAmino): _189.QueryTotalClaimableResponse;
            toAmino(message: _189.QueryTotalClaimableResponse): _189.QueryTotalClaimableResponseAmino;
            fromAminoMsg(object: _189.QueryTotalClaimableResponseAminoMsg): _189.QueryTotalClaimableResponse;
            fromProtoMsg(message: _189.QueryTotalClaimableResponseProtoMsg): _189.QueryTotalClaimableResponse;
            toProto(message: _189.QueryTotalClaimableResponse): Uint8Array;
            toProtoMsg(message: _189.QueryTotalClaimableResponse): _189.QueryTotalClaimableResponseProtoMsg;
        };
        QueryUserVestingsRequest: {
            typeUrl: string;
            encode(message: _189.QueryUserVestingsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.QueryUserVestingsRequest;
            fromPartial(object: Partial<_189.QueryUserVestingsRequest>): _189.QueryUserVestingsRequest;
            fromAmino(object: _189.QueryUserVestingsRequestAmino): _189.QueryUserVestingsRequest;
            toAmino(message: _189.QueryUserVestingsRequest): _189.QueryUserVestingsRequestAmino;
            fromAminoMsg(object: _189.QueryUserVestingsRequestAminoMsg): _189.QueryUserVestingsRequest;
            fromProtoMsg(message: _189.QueryUserVestingsRequestProtoMsg): _189.QueryUserVestingsRequest;
            toProto(message: _189.QueryUserVestingsRequest): Uint8Array;
            toProtoMsg(message: _189.QueryUserVestingsRequest): _189.QueryUserVestingsRequestProtoMsg;
        };
        QueryUserVestingsResponse: {
            typeUrl: string;
            encode(message: _189.QueryUserVestingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.QueryUserVestingsResponse;
            fromPartial(object: Partial<_189.QueryUserVestingsResponse>): _189.QueryUserVestingsResponse;
            fromAmino(object: _189.QueryUserVestingsResponseAmino): _189.QueryUserVestingsResponse;
            toAmino(message: _189.QueryUserVestingsResponse): _189.QueryUserVestingsResponseAmino;
            fromAminoMsg(object: _189.QueryUserVestingsResponseAminoMsg): _189.QueryUserVestingsResponse;
            fromProtoMsg(message: _189.QueryUserVestingsResponseProtoMsg): _189.QueryUserVestingsResponse;
            toProto(message: _189.QueryUserVestingsResponse): Uint8Array;
            toProtoMsg(message: _189.QueryUserVestingsResponse): _189.QueryUserVestingsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _188.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.Params;
            fromPartial(object: Partial<_188.Params>): _188.Params;
            fromAmino(object: _188.ParamsAmino): _188.Params;
            toAmino(message: _188.Params): _188.ParamsAmino;
            fromAminoMsg(object: _188.ParamsAminoMsg): _188.Params;
            fromProtoMsg(message: _188.ParamsProtoMsg): _188.Params;
            toProto(message: _188.Params): Uint8Array;
            toProtoMsg(message: _188.Params): _188.ParamsProtoMsg;
        };
        Airdrop: {
            typeUrl: string;
            encode(message: _188.Airdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.Airdrop;
            fromPartial(object: Partial<_188.Airdrop>): _188.Airdrop;
            fromAmino(object: _188.AirdropAmino): _188.Airdrop;
            toAmino(message: _188.Airdrop): _188.AirdropAmino;
            fromAminoMsg(object: _188.AirdropAminoMsg): _188.Airdrop;
            fromProtoMsg(message: _188.AirdropProtoMsg): _188.Airdrop;
            toProto(message: _188.Airdrop): Uint8Array;
            toProtoMsg(message: _188.Airdrop): _188.AirdropProtoMsg;
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
        actionFromJSON(object: any): _186.Action;
        actionToJSON(object: _186.Action): string;
        Action: typeof _186.Action;
        ActionSDKType: typeof _186.Action;
        ActionAmino: typeof _186.Action;
        ClaimRecord: {
            typeUrl: string;
            encode(message: _186.ClaimRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.ClaimRecord;
            fromPartial(object: Partial<_186.ClaimRecord>): _186.ClaimRecord;
            fromAmino(object: _186.ClaimRecordAmino): _186.ClaimRecord;
            toAmino(message: _186.ClaimRecord): _186.ClaimRecordAmino;
            fromAminoMsg(object: _186.ClaimRecordAminoMsg): _186.ClaimRecord;
            fromProtoMsg(message: _186.ClaimRecordProtoMsg): _186.ClaimRecord;
            toProto(message: _186.ClaimRecord): Uint8Array;
            toProtoMsg(message: _186.ClaimRecord): _186.ClaimRecordProtoMsg;
        };
    };
    const epochs: {
        QueryClientImpl: typeof _376.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            epochInfos(request?: _192.QueryEpochsInfoRequest): Promise<_192.QueryEpochsInfoResponse>;
            currentEpoch(request: _192.QueryCurrentEpochRequest): Promise<_192.QueryCurrentEpochResponse>;
            epochInfo(request: _192.QueryEpochInfoRequest): Promise<_192.QueryEpochInfoResponse>;
        };
        QueryEpochsInfoRequest: {
            typeUrl: string;
            encode(message: _192.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.QueryEpochsInfoRequest;
            fromPartial(object: Partial<_192.QueryEpochsInfoRequest>): _192.QueryEpochsInfoRequest;
            fromAmino(object: _192.QueryEpochsInfoRequestAmino): _192.QueryEpochsInfoRequest;
            toAmino(message: _192.QueryEpochsInfoRequest): _192.QueryEpochsInfoRequestAmino;
            fromAminoMsg(object: _192.QueryEpochsInfoRequestAminoMsg): _192.QueryEpochsInfoRequest;
            fromProtoMsg(message: _192.QueryEpochsInfoRequestProtoMsg): _192.QueryEpochsInfoRequest;
            toProto(message: _192.QueryEpochsInfoRequest): Uint8Array;
            toProtoMsg(message: _192.QueryEpochsInfoRequest): _192.QueryEpochsInfoRequestProtoMsg;
        };
        QueryEpochsInfoResponse: {
            typeUrl: string;
            encode(message: _192.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.QueryEpochsInfoResponse;
            fromPartial(object: Partial<_192.QueryEpochsInfoResponse>): _192.QueryEpochsInfoResponse;
            fromAmino(object: _192.QueryEpochsInfoResponseAmino): _192.QueryEpochsInfoResponse;
            toAmino(message: _192.QueryEpochsInfoResponse): _192.QueryEpochsInfoResponseAmino;
            fromAminoMsg(object: _192.QueryEpochsInfoResponseAminoMsg): _192.QueryEpochsInfoResponse;
            fromProtoMsg(message: _192.QueryEpochsInfoResponseProtoMsg): _192.QueryEpochsInfoResponse;
            toProto(message: _192.QueryEpochsInfoResponse): Uint8Array;
            toProtoMsg(message: _192.QueryEpochsInfoResponse): _192.QueryEpochsInfoResponseProtoMsg;
        };
        QueryCurrentEpochRequest: {
            typeUrl: string;
            encode(message: _192.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.QueryCurrentEpochRequest;
            fromPartial(object: Partial<_192.QueryCurrentEpochRequest>): _192.QueryCurrentEpochRequest;
            fromAmino(object: _192.QueryCurrentEpochRequestAmino): _192.QueryCurrentEpochRequest;
            toAmino(message: _192.QueryCurrentEpochRequest): _192.QueryCurrentEpochRequestAmino;
            fromAminoMsg(object: _192.QueryCurrentEpochRequestAminoMsg): _192.QueryCurrentEpochRequest;
            fromProtoMsg(message: _192.QueryCurrentEpochRequestProtoMsg): _192.QueryCurrentEpochRequest;
            toProto(message: _192.QueryCurrentEpochRequest): Uint8Array;
            toProtoMsg(message: _192.QueryCurrentEpochRequest): _192.QueryCurrentEpochRequestProtoMsg;
        };
        QueryCurrentEpochResponse: {
            typeUrl: string;
            encode(message: _192.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.QueryCurrentEpochResponse;
            fromPartial(object: Partial<_192.QueryCurrentEpochResponse>): _192.QueryCurrentEpochResponse;
            fromAmino(object: _192.QueryCurrentEpochResponseAmino): _192.QueryCurrentEpochResponse;
            toAmino(message: _192.QueryCurrentEpochResponse): _192.QueryCurrentEpochResponseAmino;
            fromAminoMsg(object: _192.QueryCurrentEpochResponseAminoMsg): _192.QueryCurrentEpochResponse;
            fromProtoMsg(message: _192.QueryCurrentEpochResponseProtoMsg): _192.QueryCurrentEpochResponse;
            toProto(message: _192.QueryCurrentEpochResponse): Uint8Array;
            toProtoMsg(message: _192.QueryCurrentEpochResponse): _192.QueryCurrentEpochResponseProtoMsg;
        };
        QueryEpochInfoRequest: {
            typeUrl: string;
            encode(message: _192.QueryEpochInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.QueryEpochInfoRequest;
            fromPartial(object: Partial<_192.QueryEpochInfoRequest>): _192.QueryEpochInfoRequest;
            fromAmino(object: _192.QueryEpochInfoRequestAmino): _192.QueryEpochInfoRequest;
            toAmino(message: _192.QueryEpochInfoRequest): _192.QueryEpochInfoRequestAmino;
            fromAminoMsg(object: _192.QueryEpochInfoRequestAminoMsg): _192.QueryEpochInfoRequest;
            fromProtoMsg(message: _192.QueryEpochInfoRequestProtoMsg): _192.QueryEpochInfoRequest;
            toProto(message: _192.QueryEpochInfoRequest): Uint8Array;
            toProtoMsg(message: _192.QueryEpochInfoRequest): _192.QueryEpochInfoRequestProtoMsg;
        };
        QueryEpochInfoResponse: {
            typeUrl: string;
            encode(message: _192.QueryEpochInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.QueryEpochInfoResponse;
            fromPartial(object: Partial<_192.QueryEpochInfoResponse>): _192.QueryEpochInfoResponse;
            fromAmino(object: _192.QueryEpochInfoResponseAmino): _192.QueryEpochInfoResponse;
            toAmino(message: _192.QueryEpochInfoResponse): _192.QueryEpochInfoResponseAmino;
            fromAminoMsg(object: _192.QueryEpochInfoResponseAminoMsg): _192.QueryEpochInfoResponse;
            fromProtoMsg(message: _192.QueryEpochInfoResponseProtoMsg): _192.QueryEpochInfoResponse;
            toProto(message: _192.QueryEpochInfoResponse): Uint8Array;
            toProtoMsg(message: _192.QueryEpochInfoResponse): _192.QueryEpochInfoResponseProtoMsg;
        };
        EpochInfo: {
            typeUrl: string;
            encode(message: _191.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.EpochInfo;
            fromPartial(object: Partial<_191.EpochInfo>): _191.EpochInfo;
            fromAmino(object: _191.EpochInfoAmino): _191.EpochInfo;
            toAmino(message: _191.EpochInfo): _191.EpochInfoAmino;
            fromAminoMsg(object: _191.EpochInfoAminoMsg): _191.EpochInfo;
            fromProtoMsg(message: _191.EpochInfoProtoMsg): _191.EpochInfo;
            toProto(message: _191.EpochInfo): Uint8Array;
            toProtoMsg(message: _191.EpochInfo): _191.EpochInfoProtoMsg;
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
    };
    const icacallbacks: {
        QueryClientImpl: typeof _377.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _197.QueryParamsRequest): Promise<_197.QueryParamsResponse>;
            callbackData(request: _197.QueryGetCallbackDataRequest): Promise<_197.QueryGetCallbackDataResponse>;
            callbackDataAll(request?: _197.QueryAllCallbackDataRequest): Promise<_197.QueryAllCallbackDataResponse>;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _197.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.QueryParamsRequest;
            fromPartial(_: Partial<_197.QueryParamsRequest>): _197.QueryParamsRequest;
            fromAmino(_: _197.QueryParamsRequestAmino): _197.QueryParamsRequest;
            toAmino(_: _197.QueryParamsRequest): _197.QueryParamsRequestAmino;
            fromAminoMsg(object: _197.QueryParamsRequestAminoMsg): _197.QueryParamsRequest;
            fromProtoMsg(message: _197.QueryParamsRequestProtoMsg): _197.QueryParamsRequest;
            toProto(message: _197.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _197.QueryParamsRequest): _197.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _197.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.QueryParamsResponse;
            fromPartial(object: Partial<_197.QueryParamsResponse>): _197.QueryParamsResponse;
            fromAmino(object: _197.QueryParamsResponseAmino): _197.QueryParamsResponse;
            toAmino(message: _197.QueryParamsResponse): _197.QueryParamsResponseAmino;
            fromAminoMsg(object: _197.QueryParamsResponseAminoMsg): _197.QueryParamsResponse;
            fromProtoMsg(message: _197.QueryParamsResponseProtoMsg): _197.QueryParamsResponse;
            toProto(message: _197.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _197.QueryParamsResponse): _197.QueryParamsResponseProtoMsg;
        };
        QueryGetCallbackDataRequest: {
            typeUrl: string;
            encode(message: _197.QueryGetCallbackDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.QueryGetCallbackDataRequest;
            fromPartial(object: Partial<_197.QueryGetCallbackDataRequest>): _197.QueryGetCallbackDataRequest;
            fromAmino(object: _197.QueryGetCallbackDataRequestAmino): _197.QueryGetCallbackDataRequest;
            toAmino(message: _197.QueryGetCallbackDataRequest): _197.QueryGetCallbackDataRequestAmino;
            fromAminoMsg(object: _197.QueryGetCallbackDataRequestAminoMsg): _197.QueryGetCallbackDataRequest;
            fromProtoMsg(message: _197.QueryGetCallbackDataRequestProtoMsg): _197.QueryGetCallbackDataRequest;
            toProto(message: _197.QueryGetCallbackDataRequest): Uint8Array;
            toProtoMsg(message: _197.QueryGetCallbackDataRequest): _197.QueryGetCallbackDataRequestProtoMsg;
        };
        QueryGetCallbackDataResponse: {
            typeUrl: string;
            encode(message: _197.QueryGetCallbackDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.QueryGetCallbackDataResponse;
            fromPartial(object: Partial<_197.QueryGetCallbackDataResponse>): _197.QueryGetCallbackDataResponse;
            fromAmino(object: _197.QueryGetCallbackDataResponseAmino): _197.QueryGetCallbackDataResponse;
            toAmino(message: _197.QueryGetCallbackDataResponse): _197.QueryGetCallbackDataResponseAmino;
            fromAminoMsg(object: _197.QueryGetCallbackDataResponseAminoMsg): _197.QueryGetCallbackDataResponse;
            fromProtoMsg(message: _197.QueryGetCallbackDataResponseProtoMsg): _197.QueryGetCallbackDataResponse;
            toProto(message: _197.QueryGetCallbackDataResponse): Uint8Array;
            toProtoMsg(message: _197.QueryGetCallbackDataResponse): _197.QueryGetCallbackDataResponseProtoMsg;
        };
        QueryAllCallbackDataRequest: {
            typeUrl: string;
            encode(message: _197.QueryAllCallbackDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.QueryAllCallbackDataRequest;
            fromPartial(object: Partial<_197.QueryAllCallbackDataRequest>): _197.QueryAllCallbackDataRequest;
            fromAmino(object: _197.QueryAllCallbackDataRequestAmino): _197.QueryAllCallbackDataRequest;
            toAmino(message: _197.QueryAllCallbackDataRequest): _197.QueryAllCallbackDataRequestAmino;
            fromAminoMsg(object: _197.QueryAllCallbackDataRequestAminoMsg): _197.QueryAllCallbackDataRequest;
            fromProtoMsg(message: _197.QueryAllCallbackDataRequestProtoMsg): _197.QueryAllCallbackDataRequest;
            toProto(message: _197.QueryAllCallbackDataRequest): Uint8Array;
            toProtoMsg(message: _197.QueryAllCallbackDataRequest): _197.QueryAllCallbackDataRequestProtoMsg;
        };
        QueryAllCallbackDataResponse: {
            typeUrl: string;
            encode(message: _197.QueryAllCallbackDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.QueryAllCallbackDataResponse;
            fromPartial(object: Partial<_197.QueryAllCallbackDataResponse>): _197.QueryAllCallbackDataResponse;
            fromAmino(object: _197.QueryAllCallbackDataResponseAmino): _197.QueryAllCallbackDataResponse;
            toAmino(message: _197.QueryAllCallbackDataResponse): _197.QueryAllCallbackDataResponseAmino;
            fromAminoMsg(object: _197.QueryAllCallbackDataResponseAminoMsg): _197.QueryAllCallbackDataResponse;
            fromProtoMsg(message: _197.QueryAllCallbackDataResponseProtoMsg): _197.QueryAllCallbackDataResponse;
            toProto(message: _197.QueryAllCallbackDataResponse): Uint8Array;
            toProtoMsg(message: _197.QueryAllCallbackDataResponse): _197.QueryAllCallbackDataResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _196.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.Params;
            fromPartial(_: Partial<_196.Params>): _196.Params;
            fromAmino(_: _196.ParamsAmino): _196.Params;
            toAmino(_: _196.Params): _196.ParamsAmino;
            fromAminoMsg(object: _196.ParamsAminoMsg): _196.Params;
            fromProtoMsg(message: _196.ParamsProtoMsg): _196.Params;
            toProto(message: _196.Params): Uint8Array;
            toProtoMsg(message: _196.Params): _196.ParamsProtoMsg;
        };
        IcacallbacksPacketData: {
            typeUrl: string;
            encode(message: _195.IcacallbacksPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _195.IcacallbacksPacketData;
            fromPartial(object: Partial<_195.IcacallbacksPacketData>): _195.IcacallbacksPacketData;
            fromAmino(object: _195.IcacallbacksPacketDataAmino): _195.IcacallbacksPacketData;
            toAmino(message: _195.IcacallbacksPacketData): _195.IcacallbacksPacketDataAmino;
            fromAminoMsg(object: _195.IcacallbacksPacketDataAminoMsg): _195.IcacallbacksPacketData;
            fromProtoMsg(message: _195.IcacallbacksPacketDataProtoMsg): _195.IcacallbacksPacketData;
            toProto(message: _195.IcacallbacksPacketData): Uint8Array;
            toProtoMsg(message: _195.IcacallbacksPacketData): _195.IcacallbacksPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _195.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _195.NoData;
            fromPartial(_: Partial<_195.NoData>): _195.NoData;
            fromAmino(_: _195.NoDataAmino): _195.NoData;
            toAmino(_: _195.NoData): _195.NoDataAmino;
            fromAminoMsg(object: _195.NoDataAminoMsg): _195.NoData;
            fromProtoMsg(message: _195.NoDataProtoMsg): _195.NoData;
            toProto(message: _195.NoData): Uint8Array;
            toProtoMsg(message: _195.NoData): _195.NoDataProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _194.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _194.GenesisState;
            fromPartial(object: Partial<_194.GenesisState>): _194.GenesisState;
            fromAmino(object: _194.GenesisStateAmino): _194.GenesisState;
            toAmino(message: _194.GenesisState): _194.GenesisStateAmino;
            fromAminoMsg(object: _194.GenesisStateAminoMsg): _194.GenesisState;
            fromProtoMsg(message: _194.GenesisStateProtoMsg): _194.GenesisState;
            toProto(message: _194.GenesisState): Uint8Array;
            toProtoMsg(message: _194.GenesisState): _194.GenesisStateProtoMsg;
        };
        CallbackData: {
            typeUrl: string;
            encode(message: _193.CallbackData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.CallbackData;
            fromPartial(object: Partial<_193.CallbackData>): _193.CallbackData;
            fromAmino(object: _193.CallbackDataAmino): _193.CallbackData;
            toAmino(message: _193.CallbackData): _193.CallbackDataAmino;
            fromAminoMsg(object: _193.CallbackDataAminoMsg): _193.CallbackData;
            fromProtoMsg(message: _193.CallbackDataProtoMsg): _193.CallbackData;
            toProto(message: _193.CallbackData): Uint8Array;
            toProtoMsg(message: _193.CallbackData): _193.CallbackDataProtoMsg;
        };
    };
    const icaoracle: {
        MsgClientImpl: typeof _389.MsgClientImpl;
        QueryClientImpl: typeof _378.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            oracle(request: _203.QueryOracleRequest): Promise<_203.QueryOracleResponse>;
            allOracles(request?: _203.QueryAllOraclesRequest): Promise<_203.QueryAllOraclesResponse>;
            activeOracles(request: _203.QueryActiveOraclesRequest): Promise<_203.QueryActiveOraclesResponse>;
            metrics(request: _203.QueryMetricsRequest): Promise<_203.QueryMetricsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                addOracle(value: _204.MsgAddOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                instantiateOracle(value: _204.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreOracleICA(value: _204.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                toggleOracle(value: _204.MsgToggleOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeOracle(value: _204.MsgRemoveOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                addOracle(value: _204.MsgAddOracle): {
                    typeUrl: string;
                    value: _204.MsgAddOracle;
                };
                instantiateOracle(value: _204.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: _204.MsgInstantiateOracle;
                };
                restoreOracleICA(value: _204.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: _204.MsgRestoreOracleICA;
                };
                toggleOracle(value: _204.MsgToggleOracle): {
                    typeUrl: string;
                    value: _204.MsgToggleOracle;
                };
                removeOracle(value: _204.MsgRemoveOracle): {
                    typeUrl: string;
                    value: _204.MsgRemoveOracle;
                };
            };
            fromPartial: {
                addOracle(value: _204.MsgAddOracle): {
                    typeUrl: string;
                    value: _204.MsgAddOracle;
                };
                instantiateOracle(value: _204.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: _204.MsgInstantiateOracle;
                };
                restoreOracleICA(value: _204.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: _204.MsgRestoreOracleICA;
                };
                toggleOracle(value: _204.MsgToggleOracle): {
                    typeUrl: string;
                    value: _204.MsgToggleOracle;
                };
                removeOracle(value: _204.MsgRemoveOracle): {
                    typeUrl: string;
                    value: _204.MsgRemoveOracle;
                };
            };
        };
        AminoConverter: {
            "/stride.icaoracle.MsgAddOracle": {
                aminoType: string;
                toAmino: (message: _204.MsgAddOracle) => _204.MsgAddOracleAmino;
                fromAmino: (object: _204.MsgAddOracleAmino) => _204.MsgAddOracle;
            };
            "/stride.icaoracle.MsgInstantiateOracle": {
                aminoType: string;
                toAmino: (message: _204.MsgInstantiateOracle) => _204.MsgInstantiateOracleAmino;
                fromAmino: (object: _204.MsgInstantiateOracleAmino) => _204.MsgInstantiateOracle;
            };
            "/stride.icaoracle.MsgRestoreOracleICA": {
                aminoType: string;
                toAmino: (message: _204.MsgRestoreOracleICA) => _204.MsgRestoreOracleICAAmino;
                fromAmino: (object: _204.MsgRestoreOracleICAAmino) => _204.MsgRestoreOracleICA;
            };
            "/stride.icaoracle.MsgToggleOracle": {
                aminoType: string;
                toAmino: (message: _204.MsgToggleOracle) => _204.MsgToggleOracleAmino;
                fromAmino: (object: _204.MsgToggleOracleAmino) => _204.MsgToggleOracle;
            };
            "/stride.icaoracle.MsgRemoveOracle": {
                aminoType: string;
                toAmino: (message: _204.MsgRemoveOracle) => _204.MsgRemoveOracleAmino;
                fromAmino: (object: _204.MsgRemoveOracleAmino) => _204.MsgRemoveOracle;
            };
        };
        MsgAddOracle: {
            typeUrl: string;
            encode(message: _204.MsgAddOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.MsgAddOracle;
            fromPartial(object: Partial<_204.MsgAddOracle>): _204.MsgAddOracle;
            fromAmino(object: _204.MsgAddOracleAmino): _204.MsgAddOracle;
            toAmino(message: _204.MsgAddOracle): _204.MsgAddOracleAmino;
            fromAminoMsg(object: _204.MsgAddOracleAminoMsg): _204.MsgAddOracle;
            toAminoMsg(message: _204.MsgAddOracle): _204.MsgAddOracleAminoMsg;
            fromProtoMsg(message: _204.MsgAddOracleProtoMsg): _204.MsgAddOracle;
            toProto(message: _204.MsgAddOracle): Uint8Array;
            toProtoMsg(message: _204.MsgAddOracle): _204.MsgAddOracleProtoMsg;
        };
        MsgAddOracleResponse: {
            typeUrl: string;
            encode(_: _204.MsgAddOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.MsgAddOracleResponse;
            fromPartial(_: Partial<_204.MsgAddOracleResponse>): _204.MsgAddOracleResponse;
            fromAmino(_: _204.MsgAddOracleResponseAmino): _204.MsgAddOracleResponse;
            toAmino(_: _204.MsgAddOracleResponse): _204.MsgAddOracleResponseAmino;
            fromAminoMsg(object: _204.MsgAddOracleResponseAminoMsg): _204.MsgAddOracleResponse;
            fromProtoMsg(message: _204.MsgAddOracleResponseProtoMsg): _204.MsgAddOracleResponse;
            toProto(message: _204.MsgAddOracleResponse): Uint8Array;
            toProtoMsg(message: _204.MsgAddOracleResponse): _204.MsgAddOracleResponseProtoMsg;
        };
        MsgInstantiateOracle: {
            typeUrl: string;
            encode(message: _204.MsgInstantiateOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.MsgInstantiateOracle;
            fromPartial(object: Partial<_204.MsgInstantiateOracle>): _204.MsgInstantiateOracle;
            fromAmino(object: _204.MsgInstantiateOracleAmino): _204.MsgInstantiateOracle;
            toAmino(message: _204.MsgInstantiateOracle): _204.MsgInstantiateOracleAmino;
            fromAminoMsg(object: _204.MsgInstantiateOracleAminoMsg): _204.MsgInstantiateOracle;
            toAminoMsg(message: _204.MsgInstantiateOracle): _204.MsgInstantiateOracleAminoMsg;
            fromProtoMsg(message: _204.MsgInstantiateOracleProtoMsg): _204.MsgInstantiateOracle;
            toProto(message: _204.MsgInstantiateOracle): Uint8Array;
            toProtoMsg(message: _204.MsgInstantiateOracle): _204.MsgInstantiateOracleProtoMsg;
        };
        MsgInstantiateOracleResponse: {
            typeUrl: string;
            encode(_: _204.MsgInstantiateOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.MsgInstantiateOracleResponse;
            fromPartial(_: Partial<_204.MsgInstantiateOracleResponse>): _204.MsgInstantiateOracleResponse;
            fromAmino(_: _204.MsgInstantiateOracleResponseAmino): _204.MsgInstantiateOracleResponse;
            toAmino(_: _204.MsgInstantiateOracleResponse): _204.MsgInstantiateOracleResponseAmino;
            fromAminoMsg(object: _204.MsgInstantiateOracleResponseAminoMsg): _204.MsgInstantiateOracleResponse;
            fromProtoMsg(message: _204.MsgInstantiateOracleResponseProtoMsg): _204.MsgInstantiateOracleResponse;
            toProto(message: _204.MsgInstantiateOracleResponse): Uint8Array;
            toProtoMsg(message: _204.MsgInstantiateOracleResponse): _204.MsgInstantiateOracleResponseProtoMsg;
        };
        MsgRestoreOracleICA: {
            typeUrl: string;
            encode(message: _204.MsgRestoreOracleICA, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.MsgRestoreOracleICA;
            fromPartial(object: Partial<_204.MsgRestoreOracleICA>): _204.MsgRestoreOracleICA;
            fromAmino(object: _204.MsgRestoreOracleICAAmino): _204.MsgRestoreOracleICA;
            toAmino(message: _204.MsgRestoreOracleICA): _204.MsgRestoreOracleICAAmino;
            fromAminoMsg(object: _204.MsgRestoreOracleICAAminoMsg): _204.MsgRestoreOracleICA;
            toAminoMsg(message: _204.MsgRestoreOracleICA): _204.MsgRestoreOracleICAAminoMsg;
            fromProtoMsg(message: _204.MsgRestoreOracleICAProtoMsg): _204.MsgRestoreOracleICA;
            toProto(message: _204.MsgRestoreOracleICA): Uint8Array;
            toProtoMsg(message: _204.MsgRestoreOracleICA): _204.MsgRestoreOracleICAProtoMsg;
        };
        MsgRestoreOracleICAResponse: {
            typeUrl: string;
            encode(_: _204.MsgRestoreOracleICAResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.MsgRestoreOracleICAResponse;
            fromPartial(_: Partial<_204.MsgRestoreOracleICAResponse>): _204.MsgRestoreOracleICAResponse;
            fromAmino(_: _204.MsgRestoreOracleICAResponseAmino): _204.MsgRestoreOracleICAResponse;
            toAmino(_: _204.MsgRestoreOracleICAResponse): _204.MsgRestoreOracleICAResponseAmino;
            fromAminoMsg(object: _204.MsgRestoreOracleICAResponseAminoMsg): _204.MsgRestoreOracleICAResponse;
            fromProtoMsg(message: _204.MsgRestoreOracleICAResponseProtoMsg): _204.MsgRestoreOracleICAResponse;
            toProto(message: _204.MsgRestoreOracleICAResponse): Uint8Array;
            toProtoMsg(message: _204.MsgRestoreOracleICAResponse): _204.MsgRestoreOracleICAResponseProtoMsg;
        };
        MsgToggleOracle: {
            typeUrl: string;
            encode(message: _204.MsgToggleOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.MsgToggleOracle;
            fromPartial(object: Partial<_204.MsgToggleOracle>): _204.MsgToggleOracle;
            fromAmino(object: _204.MsgToggleOracleAmino): _204.MsgToggleOracle;
            toAmino(message: _204.MsgToggleOracle): _204.MsgToggleOracleAmino;
            fromAminoMsg(object: _204.MsgToggleOracleAminoMsg): _204.MsgToggleOracle;
            toAminoMsg(message: _204.MsgToggleOracle): _204.MsgToggleOracleAminoMsg;
            fromProtoMsg(message: _204.MsgToggleOracleProtoMsg): _204.MsgToggleOracle;
            toProto(message: _204.MsgToggleOracle): Uint8Array;
            toProtoMsg(message: _204.MsgToggleOracle): _204.MsgToggleOracleProtoMsg;
        };
        MsgToggleOracleResponse: {
            typeUrl: string;
            encode(_: _204.MsgToggleOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.MsgToggleOracleResponse;
            fromPartial(_: Partial<_204.MsgToggleOracleResponse>): _204.MsgToggleOracleResponse;
            fromAmino(_: _204.MsgToggleOracleResponseAmino): _204.MsgToggleOracleResponse;
            toAmino(_: _204.MsgToggleOracleResponse): _204.MsgToggleOracleResponseAmino;
            fromAminoMsg(object: _204.MsgToggleOracleResponseAminoMsg): _204.MsgToggleOracleResponse;
            fromProtoMsg(message: _204.MsgToggleOracleResponseProtoMsg): _204.MsgToggleOracleResponse;
            toProto(message: _204.MsgToggleOracleResponse): Uint8Array;
            toProtoMsg(message: _204.MsgToggleOracleResponse): _204.MsgToggleOracleResponseProtoMsg;
        };
        MsgRemoveOracle: {
            typeUrl: string;
            encode(message: _204.MsgRemoveOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.MsgRemoveOracle;
            fromPartial(object: Partial<_204.MsgRemoveOracle>): _204.MsgRemoveOracle;
            fromAmino(object: _204.MsgRemoveOracleAmino): _204.MsgRemoveOracle;
            toAmino(message: _204.MsgRemoveOracle): _204.MsgRemoveOracleAmino;
            fromAminoMsg(object: _204.MsgRemoveOracleAminoMsg): _204.MsgRemoveOracle;
            toAminoMsg(message: _204.MsgRemoveOracle): _204.MsgRemoveOracleAminoMsg;
            fromProtoMsg(message: _204.MsgRemoveOracleProtoMsg): _204.MsgRemoveOracle;
            toProto(message: _204.MsgRemoveOracle): Uint8Array;
            toProtoMsg(message: _204.MsgRemoveOracle): _204.MsgRemoveOracleProtoMsg;
        };
        MsgRemoveOracleResponse: {
            typeUrl: string;
            encode(_: _204.MsgRemoveOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.MsgRemoveOracleResponse;
            fromPartial(_: Partial<_204.MsgRemoveOracleResponse>): _204.MsgRemoveOracleResponse;
            fromAmino(_: _204.MsgRemoveOracleResponseAmino): _204.MsgRemoveOracleResponse;
            toAmino(_: _204.MsgRemoveOracleResponse): _204.MsgRemoveOracleResponseAmino;
            fromAminoMsg(object: _204.MsgRemoveOracleResponseAminoMsg): _204.MsgRemoveOracleResponse;
            fromProtoMsg(message: _204.MsgRemoveOracleResponseProtoMsg): _204.MsgRemoveOracleResponse;
            toProto(message: _204.MsgRemoveOracleResponse): Uint8Array;
            toProtoMsg(message: _204.MsgRemoveOracleResponse): _204.MsgRemoveOracleResponseProtoMsg;
        };
        QueryOracleRequest: {
            typeUrl: string;
            encode(message: _203.QueryOracleRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.QueryOracleRequest;
            fromPartial(object: Partial<_203.QueryOracleRequest>): _203.QueryOracleRequest;
            fromAmino(object: _203.QueryOracleRequestAmino): _203.QueryOracleRequest;
            toAmino(message: _203.QueryOracleRequest): _203.QueryOracleRequestAmino;
            fromAminoMsg(object: _203.QueryOracleRequestAminoMsg): _203.QueryOracleRequest;
            fromProtoMsg(message: _203.QueryOracleRequestProtoMsg): _203.QueryOracleRequest;
            toProto(message: _203.QueryOracleRequest): Uint8Array;
            toProtoMsg(message: _203.QueryOracleRequest): _203.QueryOracleRequestProtoMsg;
        };
        QueryOracleResponse: {
            typeUrl: string;
            encode(message: _203.QueryOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.QueryOracleResponse;
            fromPartial(object: Partial<_203.QueryOracleResponse>): _203.QueryOracleResponse;
            fromAmino(object: _203.QueryOracleResponseAmino): _203.QueryOracleResponse;
            toAmino(message: _203.QueryOracleResponse): _203.QueryOracleResponseAmino;
            fromAminoMsg(object: _203.QueryOracleResponseAminoMsg): _203.QueryOracleResponse;
            fromProtoMsg(message: _203.QueryOracleResponseProtoMsg): _203.QueryOracleResponse;
            toProto(message: _203.QueryOracleResponse): Uint8Array;
            toProtoMsg(message: _203.QueryOracleResponse): _203.QueryOracleResponseProtoMsg;
        };
        QueryAllOraclesRequest: {
            typeUrl: string;
            encode(_: _203.QueryAllOraclesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.QueryAllOraclesRequest;
            fromPartial(_: Partial<_203.QueryAllOraclesRequest>): _203.QueryAllOraclesRequest;
            fromAmino(_: _203.QueryAllOraclesRequestAmino): _203.QueryAllOraclesRequest;
            toAmino(_: _203.QueryAllOraclesRequest): _203.QueryAllOraclesRequestAmino;
            fromAminoMsg(object: _203.QueryAllOraclesRequestAminoMsg): _203.QueryAllOraclesRequest;
            fromProtoMsg(message: _203.QueryAllOraclesRequestProtoMsg): _203.QueryAllOraclesRequest;
            toProto(message: _203.QueryAllOraclesRequest): Uint8Array;
            toProtoMsg(message: _203.QueryAllOraclesRequest): _203.QueryAllOraclesRequestProtoMsg;
        };
        QueryAllOraclesResponse: {
            typeUrl: string;
            encode(message: _203.QueryAllOraclesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.QueryAllOraclesResponse;
            fromPartial(object: Partial<_203.QueryAllOraclesResponse>): _203.QueryAllOraclesResponse;
            fromAmino(object: _203.QueryAllOraclesResponseAmino): _203.QueryAllOraclesResponse;
            toAmino(message: _203.QueryAllOraclesResponse): _203.QueryAllOraclesResponseAmino;
            fromAminoMsg(object: _203.QueryAllOraclesResponseAminoMsg): _203.QueryAllOraclesResponse;
            fromProtoMsg(message: _203.QueryAllOraclesResponseProtoMsg): _203.QueryAllOraclesResponse;
            toProto(message: _203.QueryAllOraclesResponse): Uint8Array;
            toProtoMsg(message: _203.QueryAllOraclesResponse): _203.QueryAllOraclesResponseProtoMsg;
        };
        QueryActiveOraclesRequest: {
            typeUrl: string;
            encode(message: _203.QueryActiveOraclesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.QueryActiveOraclesRequest;
            fromPartial(object: Partial<_203.QueryActiveOraclesRequest>): _203.QueryActiveOraclesRequest;
            fromAmino(object: _203.QueryActiveOraclesRequestAmino): _203.QueryActiveOraclesRequest;
            toAmino(message: _203.QueryActiveOraclesRequest): _203.QueryActiveOraclesRequestAmino;
            fromAminoMsg(object: _203.QueryActiveOraclesRequestAminoMsg): _203.QueryActiveOraclesRequest;
            fromProtoMsg(message: _203.QueryActiveOraclesRequestProtoMsg): _203.QueryActiveOraclesRequest;
            toProto(message: _203.QueryActiveOraclesRequest): Uint8Array;
            toProtoMsg(message: _203.QueryActiveOraclesRequest): _203.QueryActiveOraclesRequestProtoMsg;
        };
        QueryActiveOraclesResponse: {
            typeUrl: string;
            encode(message: _203.QueryActiveOraclesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.QueryActiveOraclesResponse;
            fromPartial(object: Partial<_203.QueryActiveOraclesResponse>): _203.QueryActiveOraclesResponse;
            fromAmino(object: _203.QueryActiveOraclesResponseAmino): _203.QueryActiveOraclesResponse;
            toAmino(message: _203.QueryActiveOraclesResponse): _203.QueryActiveOraclesResponseAmino;
            fromAminoMsg(object: _203.QueryActiveOraclesResponseAminoMsg): _203.QueryActiveOraclesResponse;
            fromProtoMsg(message: _203.QueryActiveOraclesResponseProtoMsg): _203.QueryActiveOraclesResponse;
            toProto(message: _203.QueryActiveOraclesResponse): Uint8Array;
            toProtoMsg(message: _203.QueryActiveOraclesResponse): _203.QueryActiveOraclesResponseProtoMsg;
        };
        QueryMetricsRequest: {
            typeUrl: string;
            encode(message: _203.QueryMetricsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.QueryMetricsRequest;
            fromPartial(object: Partial<_203.QueryMetricsRequest>): _203.QueryMetricsRequest;
            fromAmino(object: _203.QueryMetricsRequestAmino): _203.QueryMetricsRequest;
            toAmino(message: _203.QueryMetricsRequest): _203.QueryMetricsRequestAmino;
            fromAminoMsg(object: _203.QueryMetricsRequestAminoMsg): _203.QueryMetricsRequest;
            fromProtoMsg(message: _203.QueryMetricsRequestProtoMsg): _203.QueryMetricsRequest;
            toProto(message: _203.QueryMetricsRequest): Uint8Array;
            toProtoMsg(message: _203.QueryMetricsRequest): _203.QueryMetricsRequestProtoMsg;
        };
        QueryMetricsResponse: {
            typeUrl: string;
            encode(message: _203.QueryMetricsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.QueryMetricsResponse;
            fromPartial(object: Partial<_203.QueryMetricsResponse>): _203.QueryMetricsResponse;
            fromAmino(object: _203.QueryMetricsResponseAmino): _203.QueryMetricsResponse;
            toAmino(message: _203.QueryMetricsResponse): _203.QueryMetricsResponseAmino;
            fromAminoMsg(object: _203.QueryMetricsResponseAminoMsg): _203.QueryMetricsResponse;
            fromProtoMsg(message: _203.QueryMetricsResponseProtoMsg): _203.QueryMetricsResponse;
            toProto(message: _203.QueryMetricsResponse): Uint8Array;
            toProtoMsg(message: _203.QueryMetricsResponse): _203.QueryMetricsResponseProtoMsg;
        };
        metricStatusFromJSON(object: any): _202.MetricStatus;
        metricStatusToJSON(object: _202.MetricStatus): string;
        MetricStatus: typeof _202.MetricStatus;
        MetricStatusSDKType: typeof _202.MetricStatus;
        MetricStatusAmino: typeof _202.MetricStatus;
        Oracle: {
            typeUrl: string;
            encode(message: _202.Oracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.Oracle;
            fromPartial(object: Partial<_202.Oracle>): _202.Oracle;
            fromAmino(object: _202.OracleAmino): _202.Oracle;
            toAmino(message: _202.Oracle): _202.OracleAmino;
            fromAminoMsg(object: _202.OracleAminoMsg): _202.Oracle;
            fromProtoMsg(message: _202.OracleProtoMsg): _202.Oracle;
            toProto(message: _202.Oracle): Uint8Array;
            toProtoMsg(message: _202.Oracle): _202.OracleProtoMsg;
        };
        Metric: {
            typeUrl: string;
            encode(message: _202.Metric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.Metric;
            fromPartial(object: Partial<_202.Metric>): _202.Metric;
            fromAmino(object: _202.MetricAmino): _202.Metric;
            toAmino(message: _202.Metric): _202.MetricAmino;
            fromAminoMsg(object: _202.MetricAminoMsg): _202.Metric;
            fromProtoMsg(message: _202.MetricProtoMsg): _202.Metric;
            toProto(message: _202.Metric): Uint8Array;
            toProtoMsg(message: _202.Metric): _202.MetricProtoMsg;
        };
        RedemptionRateAttributes: {
            typeUrl: string;
            encode(message: _202.RedemptionRateAttributes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.RedemptionRateAttributes;
            fromPartial(object: Partial<_202.RedemptionRateAttributes>): _202.RedemptionRateAttributes;
            fromAmino(object: _202.RedemptionRateAttributesAmino): _202.RedemptionRateAttributes;
            toAmino(message: _202.RedemptionRateAttributes): _202.RedemptionRateAttributesAmino;
            fromAminoMsg(object: _202.RedemptionRateAttributesAminoMsg): _202.RedemptionRateAttributes;
            fromProtoMsg(message: _202.RedemptionRateAttributesProtoMsg): _202.RedemptionRateAttributes;
            toProto(message: _202.RedemptionRateAttributes): Uint8Array;
            toProtoMsg(message: _202.RedemptionRateAttributes): _202.RedemptionRateAttributesProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _201.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.Params;
            fromPartial(_: Partial<_201.Params>): _201.Params;
            fromAmino(_: _201.ParamsAmino): _201.Params;
            toAmino(_: _201.Params): _201.ParamsAmino;
            fromAminoMsg(object: _201.ParamsAminoMsg): _201.Params;
            fromProtoMsg(message: _201.ParamsProtoMsg): _201.Params;
            toProto(message: _201.Params): Uint8Array;
            toProtoMsg(message: _201.Params): _201.ParamsProtoMsg;
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
        MsgInstantiateOracleContract: {
            typeUrl: string;
            encode(message: _200.MsgInstantiateOracleContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.MsgInstantiateOracleContract;
            fromPartial(object: Partial<_200.MsgInstantiateOracleContract>): _200.MsgInstantiateOracleContract;
            fromAmino(object: _200.MsgInstantiateOracleContractAmino): _200.MsgInstantiateOracleContract;
            toAmino(message: _200.MsgInstantiateOracleContract): _200.MsgInstantiateOracleContractAmino;
            fromAminoMsg(object: _200.MsgInstantiateOracleContractAminoMsg): _200.MsgInstantiateOracleContract;
            fromProtoMsg(message: _200.MsgInstantiateOracleContractProtoMsg): _200.MsgInstantiateOracleContract;
            toProto(message: _200.MsgInstantiateOracleContract): Uint8Array;
            toProtoMsg(message: _200.MsgInstantiateOracleContract): _200.MsgInstantiateOracleContractProtoMsg;
        };
        MsgExecuteContractPostMetric: {
            typeUrl: string;
            encode(message: _200.MsgExecuteContractPostMetric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.MsgExecuteContractPostMetric;
            fromPartial(object: Partial<_200.MsgExecuteContractPostMetric>): _200.MsgExecuteContractPostMetric;
            fromAmino(object: _200.MsgExecuteContractPostMetricAmino): _200.MsgExecuteContractPostMetric;
            toAmino(message: _200.MsgExecuteContractPostMetric): _200.MsgExecuteContractPostMetricAmino;
            fromAminoMsg(object: _200.MsgExecuteContractPostMetricAminoMsg): _200.MsgExecuteContractPostMetric;
            fromProtoMsg(message: _200.MsgExecuteContractPostMetricProtoMsg): _200.MsgExecuteContractPostMetric;
            toProto(message: _200.MsgExecuteContractPostMetric): Uint8Array;
            toProtoMsg(message: _200.MsgExecuteContractPostMetric): _200.MsgExecuteContractPostMetricProtoMsg;
        };
        MsgPostMetric: {
            typeUrl: string;
            encode(message: _200.MsgPostMetric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.MsgPostMetric;
            fromPartial(object: Partial<_200.MsgPostMetric>): _200.MsgPostMetric;
            fromAmino(object: _200.MsgPostMetricAmino): _200.MsgPostMetric;
            toAmino(message: _200.MsgPostMetric): _200.MsgPostMetricAmino;
            fromAminoMsg(object: _200.MsgPostMetricAminoMsg): _200.MsgPostMetric;
            fromProtoMsg(message: _200.MsgPostMetricProtoMsg): _200.MsgPostMetric;
            toProto(message: _200.MsgPostMetric): Uint8Array;
            toProtoMsg(message: _200.MsgPostMetric): _200.MsgPostMetricProtoMsg;
        };
        InstantiateOracleCallback: {
            typeUrl: string;
            encode(message: _199.InstantiateOracleCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.InstantiateOracleCallback;
            fromPartial(object: Partial<_199.InstantiateOracleCallback>): _199.InstantiateOracleCallback;
            fromAmino(object: _199.InstantiateOracleCallbackAmino): _199.InstantiateOracleCallback;
            toAmino(message: _199.InstantiateOracleCallback): _199.InstantiateOracleCallbackAmino;
            fromAminoMsg(object: _199.InstantiateOracleCallbackAminoMsg): _199.InstantiateOracleCallback;
            fromProtoMsg(message: _199.InstantiateOracleCallbackProtoMsg): _199.InstantiateOracleCallback;
            toProto(message: _199.InstantiateOracleCallback): Uint8Array;
            toProtoMsg(message: _199.InstantiateOracleCallback): _199.InstantiateOracleCallbackProtoMsg;
        };
        UpdateOracleCallback: {
            typeUrl: string;
            encode(message: _199.UpdateOracleCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.UpdateOracleCallback;
            fromPartial(object: Partial<_199.UpdateOracleCallback>): _199.UpdateOracleCallback;
            fromAmino(object: _199.UpdateOracleCallbackAmino): _199.UpdateOracleCallback;
            toAmino(message: _199.UpdateOracleCallback): _199.UpdateOracleCallbackAmino;
            fromAminoMsg(object: _199.UpdateOracleCallbackAminoMsg): _199.UpdateOracleCallback;
            fromProtoMsg(message: _199.UpdateOracleCallbackProtoMsg): _199.UpdateOracleCallback;
            toProto(message: _199.UpdateOracleCallback): Uint8Array;
            toProtoMsg(message: _199.UpdateOracleCallback): _199.UpdateOracleCallbackProtoMsg;
        };
    };
    const icqoracle: {
        MsgClientImpl: typeof _390.MsgClientImpl;
        QueryClientImpl: typeof _379.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            tokenPrice(request: _207.QueryTokenPriceRequest): Promise<_207.QueryTokenPriceResponse>;
            tokenPrices(request?: _207.QueryTokenPricesRequest): Promise<_207.QueryTokenPricesResponse>;
            params(request?: _207.QueryParamsRequest): Promise<_207.QueryParamsResponse>;
            tokenPriceForQuoteDenom(request: _207.QueryTokenPriceForQuoteDenomRequest): Promise<_207.QueryTokenPriceForQuoteDenomResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                registerTokenPriceQuery(value: _208.MsgRegisterTokenPriceQuery): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeTokenPriceQuery(value: _208.MsgRemoveTokenPriceQuery): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateParams(value: _208.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                registerTokenPriceQuery(value: _208.MsgRegisterTokenPriceQuery): {
                    typeUrl: string;
                    value: _208.MsgRegisterTokenPriceQuery;
                };
                removeTokenPriceQuery(value: _208.MsgRemoveTokenPriceQuery): {
                    typeUrl: string;
                    value: _208.MsgRemoveTokenPriceQuery;
                };
                updateParams(value: _208.MsgUpdateParams): {
                    typeUrl: string;
                    value: _208.MsgUpdateParams;
                };
            };
            fromPartial: {
                registerTokenPriceQuery(value: _208.MsgRegisterTokenPriceQuery): {
                    typeUrl: string;
                    value: _208.MsgRegisterTokenPriceQuery;
                };
                removeTokenPriceQuery(value: _208.MsgRemoveTokenPriceQuery): {
                    typeUrl: string;
                    value: _208.MsgRemoveTokenPriceQuery;
                };
                updateParams(value: _208.MsgUpdateParams): {
                    typeUrl: string;
                    value: _208.MsgUpdateParams;
                };
            };
        };
        AminoConverter: {
            "/stride.icqoracle.MsgRegisterTokenPriceQuery": {
                aminoType: string;
                toAmino: (message: _208.MsgRegisterTokenPriceQuery) => _208.MsgRegisterTokenPriceQueryAmino;
                fromAmino: (object: _208.MsgRegisterTokenPriceQueryAmino) => _208.MsgRegisterTokenPriceQuery;
            };
            "/stride.icqoracle.MsgRemoveTokenPriceQuery": {
                aminoType: string;
                toAmino: (message: _208.MsgRemoveTokenPriceQuery) => _208.MsgRemoveTokenPriceQueryAmino;
                fromAmino: (object: _208.MsgRemoveTokenPriceQueryAmino) => _208.MsgRemoveTokenPriceQuery;
            };
            "/stride.icqoracle.MsgUpdateParams": {
                aminoType: string;
                toAmino: (message: _208.MsgUpdateParams) => _208.MsgUpdateParamsAmino;
                fromAmino: (object: _208.MsgUpdateParamsAmino) => _208.MsgUpdateParams;
            };
        };
        MsgRegisterTokenPriceQuery: {
            typeUrl: string;
            encode(message: _208.MsgRegisterTokenPriceQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.MsgRegisterTokenPriceQuery;
            fromPartial(object: Partial<_208.MsgRegisterTokenPriceQuery>): _208.MsgRegisterTokenPriceQuery;
            fromAmino(object: _208.MsgRegisterTokenPriceQueryAmino): _208.MsgRegisterTokenPriceQuery;
            toAmino(message: _208.MsgRegisterTokenPriceQuery): _208.MsgRegisterTokenPriceQueryAmino;
            fromAminoMsg(object: _208.MsgRegisterTokenPriceQueryAminoMsg): _208.MsgRegisterTokenPriceQuery;
            toAminoMsg(message: _208.MsgRegisterTokenPriceQuery): _208.MsgRegisterTokenPriceQueryAminoMsg;
            fromProtoMsg(message: _208.MsgRegisterTokenPriceQueryProtoMsg): _208.MsgRegisterTokenPriceQuery;
            toProto(message: _208.MsgRegisterTokenPriceQuery): Uint8Array;
            toProtoMsg(message: _208.MsgRegisterTokenPriceQuery): _208.MsgRegisterTokenPriceQueryProtoMsg;
        };
        MsgRegisterTokenPriceQueryResponse: {
            typeUrl: string;
            encode(_: _208.MsgRegisterTokenPriceQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.MsgRegisterTokenPriceQueryResponse;
            fromPartial(_: Partial<_208.MsgRegisterTokenPriceQueryResponse>): _208.MsgRegisterTokenPriceQueryResponse;
            fromAmino(_: _208.MsgRegisterTokenPriceQueryResponseAmino): _208.MsgRegisterTokenPriceQueryResponse;
            toAmino(_: _208.MsgRegisterTokenPriceQueryResponse): _208.MsgRegisterTokenPriceQueryResponseAmino;
            fromAminoMsg(object: _208.MsgRegisterTokenPriceQueryResponseAminoMsg): _208.MsgRegisterTokenPriceQueryResponse;
            fromProtoMsg(message: _208.MsgRegisterTokenPriceQueryResponseProtoMsg): _208.MsgRegisterTokenPriceQueryResponse;
            toProto(message: _208.MsgRegisterTokenPriceQueryResponse): Uint8Array;
            toProtoMsg(message: _208.MsgRegisterTokenPriceQueryResponse): _208.MsgRegisterTokenPriceQueryResponseProtoMsg;
        };
        MsgRemoveTokenPriceQuery: {
            typeUrl: string;
            encode(message: _208.MsgRemoveTokenPriceQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.MsgRemoveTokenPriceQuery;
            fromPartial(object: Partial<_208.MsgRemoveTokenPriceQuery>): _208.MsgRemoveTokenPriceQuery;
            fromAmino(object: _208.MsgRemoveTokenPriceQueryAmino): _208.MsgRemoveTokenPriceQuery;
            toAmino(message: _208.MsgRemoveTokenPriceQuery): _208.MsgRemoveTokenPriceQueryAmino;
            fromAminoMsg(object: _208.MsgRemoveTokenPriceQueryAminoMsg): _208.MsgRemoveTokenPriceQuery;
            toAminoMsg(message: _208.MsgRemoveTokenPriceQuery): _208.MsgRemoveTokenPriceQueryAminoMsg;
            fromProtoMsg(message: _208.MsgRemoveTokenPriceQueryProtoMsg): _208.MsgRemoveTokenPriceQuery;
            toProto(message: _208.MsgRemoveTokenPriceQuery): Uint8Array;
            toProtoMsg(message: _208.MsgRemoveTokenPriceQuery): _208.MsgRemoveTokenPriceQueryProtoMsg;
        };
        MsgRemoveTokenPriceQueryResponse: {
            typeUrl: string;
            encode(_: _208.MsgRemoveTokenPriceQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.MsgRemoveTokenPriceQueryResponse;
            fromPartial(_: Partial<_208.MsgRemoveTokenPriceQueryResponse>): _208.MsgRemoveTokenPriceQueryResponse;
            fromAmino(_: _208.MsgRemoveTokenPriceQueryResponseAmino): _208.MsgRemoveTokenPriceQueryResponse;
            toAmino(_: _208.MsgRemoveTokenPriceQueryResponse): _208.MsgRemoveTokenPriceQueryResponseAmino;
            fromAminoMsg(object: _208.MsgRemoveTokenPriceQueryResponseAminoMsg): _208.MsgRemoveTokenPriceQueryResponse;
            fromProtoMsg(message: _208.MsgRemoveTokenPriceQueryResponseProtoMsg): _208.MsgRemoveTokenPriceQueryResponse;
            toProto(message: _208.MsgRemoveTokenPriceQueryResponse): Uint8Array;
            toProtoMsg(message: _208.MsgRemoveTokenPriceQueryResponse): _208.MsgRemoveTokenPriceQueryResponseProtoMsg;
        };
        MsgUpdateParams: {
            typeUrl: string;
            encode(message: _208.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.MsgUpdateParams;
            fromPartial(object: Partial<_208.MsgUpdateParams>): _208.MsgUpdateParams;
            fromAmino(object: _208.MsgUpdateParamsAmino): _208.MsgUpdateParams;
            toAmino(message: _208.MsgUpdateParams): _208.MsgUpdateParamsAmino;
            fromAminoMsg(object: _208.MsgUpdateParamsAminoMsg): _208.MsgUpdateParams;
            toAminoMsg(message: _208.MsgUpdateParams): _208.MsgUpdateParamsAminoMsg;
            fromProtoMsg(message: _208.MsgUpdateParamsProtoMsg): _208.MsgUpdateParams;
            toProto(message: _208.MsgUpdateParams): Uint8Array;
            toProtoMsg(message: _208.MsgUpdateParams): _208.MsgUpdateParamsProtoMsg;
        };
        MsgUpdateParamsResponse: {
            typeUrl: string;
            encode(_: _208.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.MsgUpdateParamsResponse;
            fromPartial(_: Partial<_208.MsgUpdateParamsResponse>): _208.MsgUpdateParamsResponse;
            fromAmino(_: _208.MsgUpdateParamsResponseAmino): _208.MsgUpdateParamsResponse;
            toAmino(_: _208.MsgUpdateParamsResponse): _208.MsgUpdateParamsResponseAmino;
            fromAminoMsg(object: _208.MsgUpdateParamsResponseAminoMsg): _208.MsgUpdateParamsResponse;
            fromProtoMsg(message: _208.MsgUpdateParamsResponseProtoMsg): _208.MsgUpdateParamsResponse;
            toProto(message: _208.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _208.MsgUpdateParamsResponse): _208.MsgUpdateParamsResponseProtoMsg;
        };
        QueryTokenPriceRequest: {
            typeUrl: string;
            encode(message: _207.QueryTokenPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.QueryTokenPriceRequest;
            fromPartial(object: Partial<_207.QueryTokenPriceRequest>): _207.QueryTokenPriceRequest;
            fromAmino(object: _207.QueryTokenPriceRequestAmino): _207.QueryTokenPriceRequest;
            toAmino(message: _207.QueryTokenPriceRequest): _207.QueryTokenPriceRequestAmino;
            fromAminoMsg(object: _207.QueryTokenPriceRequestAminoMsg): _207.QueryTokenPriceRequest;
            fromProtoMsg(message: _207.QueryTokenPriceRequestProtoMsg): _207.QueryTokenPriceRequest;
            toProto(message: _207.QueryTokenPriceRequest): Uint8Array;
            toProtoMsg(message: _207.QueryTokenPriceRequest): _207.QueryTokenPriceRequestProtoMsg;
        };
        QueryTokenPriceResponse: {
            typeUrl: string;
            encode(message: _207.QueryTokenPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.QueryTokenPriceResponse;
            fromPartial(object: Partial<_207.QueryTokenPriceResponse>): _207.QueryTokenPriceResponse;
            fromAmino(object: _207.QueryTokenPriceResponseAmino): _207.QueryTokenPriceResponse;
            toAmino(message: _207.QueryTokenPriceResponse): _207.QueryTokenPriceResponseAmino;
            fromAminoMsg(object: _207.QueryTokenPriceResponseAminoMsg): _207.QueryTokenPriceResponse;
            fromProtoMsg(message: _207.QueryTokenPriceResponseProtoMsg): _207.QueryTokenPriceResponse;
            toProto(message: _207.QueryTokenPriceResponse): Uint8Array;
            toProtoMsg(message: _207.QueryTokenPriceResponse): _207.QueryTokenPriceResponseProtoMsg;
        };
        QueryTokenPricesRequest: {
            typeUrl: string;
            encode(message: _207.QueryTokenPricesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.QueryTokenPricesRequest;
            fromPartial(object: Partial<_207.QueryTokenPricesRequest>): _207.QueryTokenPricesRequest;
            fromAmino(object: _207.QueryTokenPricesRequestAmino): _207.QueryTokenPricesRequest;
            toAmino(message: _207.QueryTokenPricesRequest): _207.QueryTokenPricesRequestAmino;
            fromAminoMsg(object: _207.QueryTokenPricesRequestAminoMsg): _207.QueryTokenPricesRequest;
            fromProtoMsg(message: _207.QueryTokenPricesRequestProtoMsg): _207.QueryTokenPricesRequest;
            toProto(message: _207.QueryTokenPricesRequest): Uint8Array;
            toProtoMsg(message: _207.QueryTokenPricesRequest): _207.QueryTokenPricesRequestProtoMsg;
        };
        QueryTokenPricesResponse: {
            typeUrl: string;
            encode(message: _207.QueryTokenPricesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.QueryTokenPricesResponse;
            fromPartial(object: Partial<_207.QueryTokenPricesResponse>): _207.QueryTokenPricesResponse;
            fromAmino(object: _207.QueryTokenPricesResponseAmino): _207.QueryTokenPricesResponse;
            toAmino(message: _207.QueryTokenPricesResponse): _207.QueryTokenPricesResponseAmino;
            fromAminoMsg(object: _207.QueryTokenPricesResponseAminoMsg): _207.QueryTokenPricesResponse;
            fromProtoMsg(message: _207.QueryTokenPricesResponseProtoMsg): _207.QueryTokenPricesResponse;
            toProto(message: _207.QueryTokenPricesResponse): Uint8Array;
            toProtoMsg(message: _207.QueryTokenPricesResponse): _207.QueryTokenPricesResponseProtoMsg;
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
        QueryTokenPriceForQuoteDenomRequest: {
            typeUrl: string;
            encode(message: _207.QueryTokenPriceForQuoteDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.QueryTokenPriceForQuoteDenomRequest;
            fromPartial(object: Partial<_207.QueryTokenPriceForQuoteDenomRequest>): _207.QueryTokenPriceForQuoteDenomRequest;
            fromAmino(object: _207.QueryTokenPriceForQuoteDenomRequestAmino): _207.QueryTokenPriceForQuoteDenomRequest;
            toAmino(message: _207.QueryTokenPriceForQuoteDenomRequest): _207.QueryTokenPriceForQuoteDenomRequestAmino;
            fromAminoMsg(object: _207.QueryTokenPriceForQuoteDenomRequestAminoMsg): _207.QueryTokenPriceForQuoteDenomRequest;
            fromProtoMsg(message: _207.QueryTokenPriceForQuoteDenomRequestProtoMsg): _207.QueryTokenPriceForQuoteDenomRequest;
            toProto(message: _207.QueryTokenPriceForQuoteDenomRequest): Uint8Array;
            toProtoMsg(message: _207.QueryTokenPriceForQuoteDenomRequest): _207.QueryTokenPriceForQuoteDenomRequestProtoMsg;
        };
        QueryTokenPriceForQuoteDenomResponse: {
            typeUrl: string;
            encode(message: _207.QueryTokenPriceForQuoteDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.QueryTokenPriceForQuoteDenomResponse;
            fromPartial(object: Partial<_207.QueryTokenPriceForQuoteDenomResponse>): _207.QueryTokenPriceForQuoteDenomResponse;
            fromAmino(object: _207.QueryTokenPriceForQuoteDenomResponseAmino): _207.QueryTokenPriceForQuoteDenomResponse;
            toAmino(message: _207.QueryTokenPriceForQuoteDenomResponse): _207.QueryTokenPriceForQuoteDenomResponseAmino;
            fromAminoMsg(object: _207.QueryTokenPriceForQuoteDenomResponseAminoMsg): _207.QueryTokenPriceForQuoteDenomResponse;
            fromProtoMsg(message: _207.QueryTokenPriceForQuoteDenomResponseProtoMsg): _207.QueryTokenPriceForQuoteDenomResponse;
            toProto(message: _207.QueryTokenPriceForQuoteDenomResponse): Uint8Array;
            toProtoMsg(message: _207.QueryTokenPriceForQuoteDenomResponse): _207.QueryTokenPriceForQuoteDenomResponseProtoMsg;
        };
        TokenPriceResponse: {
            typeUrl: string;
            encode(message: _207.TokenPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.TokenPriceResponse;
            fromPartial(object: Partial<_207.TokenPriceResponse>): _207.TokenPriceResponse;
            fromAmino(object: _207.TokenPriceResponseAmino): _207.TokenPriceResponse;
            toAmino(message: _207.TokenPriceResponse): _207.TokenPriceResponseAmino;
            fromAminoMsg(object: _207.TokenPriceResponseAminoMsg): _207.TokenPriceResponse;
            fromProtoMsg(message: _207.TokenPriceResponseProtoMsg): _207.TokenPriceResponse;
            toProto(message: _207.TokenPriceResponse): Uint8Array;
            toProtoMsg(message: _207.TokenPriceResponse): _207.TokenPriceResponseProtoMsg;
        };
        TokenPrice: {
            typeUrl: string;
            encode(message: _206.TokenPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.TokenPrice;
            fromPartial(object: Partial<_206.TokenPrice>): _206.TokenPrice;
            fromAmino(object: _206.TokenPriceAmino): _206.TokenPrice;
            toAmino(message: _206.TokenPrice): _206.TokenPriceAmino;
            fromAminoMsg(object: _206.TokenPriceAminoMsg): _206.TokenPrice;
            fromProtoMsg(message: _206.TokenPriceProtoMsg): _206.TokenPrice;
            toProto(message: _206.TokenPrice): Uint8Array;
            toProtoMsg(message: _206.TokenPrice): _206.TokenPriceProtoMsg;
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
    namespace interchainquery {
        const v1: {
            MsgClientImpl: typeof _391.MsgClientImpl;
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitQueryResponse(value: _210.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitQueryResponse(value: _210.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _210.MsgSubmitQueryResponse;
                    };
                };
                fromPartial: {
                    submitQueryResponse(value: _210.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _210.MsgSubmitQueryResponse;
                    };
                };
            };
            AminoConverter: {
                "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
                    aminoType: string;
                    toAmino: (message: _210.MsgSubmitQueryResponse) => _210.MsgSubmitQueryResponseAmino;
                    fromAmino: (object: _210.MsgSubmitQueryResponseAmino) => _210.MsgSubmitQueryResponse;
                };
            };
            QueryPendingQueriesRequest: {
                typeUrl: string;
                encode(_: _211.QueryPendingQueriesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryPendingQueriesRequest;
                fromPartial(_: Partial<_211.QueryPendingQueriesRequest>): _211.QueryPendingQueriesRequest;
                fromAmino(_: _211.QueryPendingQueriesRequestAmino): _211.QueryPendingQueriesRequest;
                toAmino(_: _211.QueryPendingQueriesRequest): _211.QueryPendingQueriesRequestAmino;
                fromAminoMsg(object: _211.QueryPendingQueriesRequestAminoMsg): _211.QueryPendingQueriesRequest;
                fromProtoMsg(message: _211.QueryPendingQueriesRequestProtoMsg): _211.QueryPendingQueriesRequest;
                toProto(message: _211.QueryPendingQueriesRequest): Uint8Array;
                toProtoMsg(message: _211.QueryPendingQueriesRequest): _211.QueryPendingQueriesRequestProtoMsg;
            };
            QueryPendingQueriesResponse: {
                typeUrl: string;
                encode(message: _211.QueryPendingQueriesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryPendingQueriesResponse;
                fromPartial(object: Partial<_211.QueryPendingQueriesResponse>): _211.QueryPendingQueriesResponse;
                fromAmino(object: _211.QueryPendingQueriesResponseAmino): _211.QueryPendingQueriesResponse;
                toAmino(message: _211.QueryPendingQueriesResponse): _211.QueryPendingQueriesResponseAmino;
                fromAminoMsg(object: _211.QueryPendingQueriesResponseAminoMsg): _211.QueryPendingQueriesResponse;
                fromProtoMsg(message: _211.QueryPendingQueriesResponseProtoMsg): _211.QueryPendingQueriesResponse;
                toProto(message: _211.QueryPendingQueriesResponse): Uint8Array;
                toProtoMsg(message: _211.QueryPendingQueriesResponse): _211.QueryPendingQueriesResponseProtoMsg;
            };
            MsgSubmitQueryResponse: {
                typeUrl: string;
                encode(message: _210.MsgSubmitQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.MsgSubmitQueryResponse;
                fromPartial(object: Partial<_210.MsgSubmitQueryResponse>): _210.MsgSubmitQueryResponse;
                fromAmino(object: _210.MsgSubmitQueryResponseAmino): _210.MsgSubmitQueryResponse;
                toAmino(message: _210.MsgSubmitQueryResponse): _210.MsgSubmitQueryResponseAmino;
                fromAminoMsg(object: _210.MsgSubmitQueryResponseAminoMsg): _210.MsgSubmitQueryResponse;
                fromProtoMsg(message: _210.MsgSubmitQueryResponseProtoMsg): _210.MsgSubmitQueryResponse;
                toProto(message: _210.MsgSubmitQueryResponse): Uint8Array;
                toProtoMsg(message: _210.MsgSubmitQueryResponse): _210.MsgSubmitQueryResponseProtoMsg;
            };
            MsgSubmitQueryResponseResponse: {
                typeUrl: string;
                encode(_: _210.MsgSubmitQueryResponseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.MsgSubmitQueryResponseResponse;
                fromPartial(_: Partial<_210.MsgSubmitQueryResponseResponse>): _210.MsgSubmitQueryResponseResponse;
                fromAmino(_: _210.MsgSubmitQueryResponseResponseAmino): _210.MsgSubmitQueryResponseResponse;
                toAmino(_: _210.MsgSubmitQueryResponseResponse): _210.MsgSubmitQueryResponseResponseAmino;
                fromAminoMsg(object: _210.MsgSubmitQueryResponseResponseAminoMsg): _210.MsgSubmitQueryResponseResponse;
                fromProtoMsg(message: _210.MsgSubmitQueryResponseResponseProtoMsg): _210.MsgSubmitQueryResponseResponse;
                toProto(message: _210.MsgSubmitQueryResponseResponse): Uint8Array;
                toProtoMsg(message: _210.MsgSubmitQueryResponseResponse): _210.MsgSubmitQueryResponseResponseProtoMsg;
            };
            timeoutPolicyFromJSON(object: any): _209.TimeoutPolicy;
            timeoutPolicyToJSON(object: _209.TimeoutPolicy): string;
            TimeoutPolicy: typeof _209.TimeoutPolicy;
            TimeoutPolicySDKType: typeof _209.TimeoutPolicy;
            TimeoutPolicyAmino: typeof _209.TimeoutPolicy;
            Query: {
                typeUrl: string;
                encode(message: _209.Query, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.Query;
                fromPartial(object: Partial<_209.Query>): _209.Query;
                fromAmino(object: _209.QueryAmino): _209.Query;
                toAmino(message: _209.Query): _209.QueryAmino;
                fromAminoMsg(object: _209.QueryAminoMsg): _209.Query;
                fromProtoMsg(message: _209.QueryProtoMsg): _209.Query;
                toProto(message: _209.Query): Uint8Array;
                toProtoMsg(message: _209.Query): _209.QueryProtoMsg;
            };
            DataPoint: {
                typeUrl: string;
                encode(message: _209.DataPoint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.DataPoint;
                fromPartial(object: Partial<_209.DataPoint>): _209.DataPoint;
                fromAmino(object: _209.DataPointAmino): _209.DataPoint;
                toAmino(message: _209.DataPoint): _209.DataPointAmino;
                fromAminoMsg(object: _209.DataPointAminoMsg): _209.DataPoint;
                fromProtoMsg(message: _209.DataPointProtoMsg): _209.DataPoint;
                toProto(message: _209.DataPoint): Uint8Array;
                toProtoMsg(message: _209.DataPoint): _209.DataPointProtoMsg;
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
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _380.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _214.QueryParamsRequest): Promise<_214.QueryParamsResponse>;
                epochProvisions(request?: _214.QueryEpochProvisionsRequest): Promise<_214.QueryEpochProvisionsResponse>;
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
            QueryEpochProvisionsRequest: {
                typeUrl: string;
                encode(_: _214.QueryEpochProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_214.QueryEpochProvisionsRequest>): _214.QueryEpochProvisionsRequest;
                fromAmino(_: _214.QueryEpochProvisionsRequestAmino): _214.QueryEpochProvisionsRequest;
                toAmino(_: _214.QueryEpochProvisionsRequest): _214.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _214.QueryEpochProvisionsRequestAminoMsg): _214.QueryEpochProvisionsRequest;
                fromProtoMsg(message: _214.QueryEpochProvisionsRequestProtoMsg): _214.QueryEpochProvisionsRequest;
                toProto(message: _214.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _214.QueryEpochProvisionsRequest): _214.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                typeUrl: string;
                encode(message: _214.QueryEpochProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_214.QueryEpochProvisionsResponse>): _214.QueryEpochProvisionsResponse;
                fromAmino(object: _214.QueryEpochProvisionsResponseAmino): _214.QueryEpochProvisionsResponse;
                toAmino(message: _214.QueryEpochProvisionsResponse): _214.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _214.QueryEpochProvisionsResponseAminoMsg): _214.QueryEpochProvisionsResponse;
                fromProtoMsg(message: _214.QueryEpochProvisionsResponseProtoMsg): _214.QueryEpochProvisionsResponse;
                toProto(message: _214.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _214.QueryEpochProvisionsResponse): _214.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _213.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.Minter;
                fromPartial(object: Partial<_213.Minter>): _213.Minter;
                fromAmino(object: _213.MinterAmino): _213.Minter;
                toAmino(message: _213.Minter): _213.MinterAmino;
                fromAminoMsg(object: _213.MinterAminoMsg): _213.Minter;
                fromProtoMsg(message: _213.MinterProtoMsg): _213.Minter;
                toProto(message: _213.Minter): Uint8Array;
                toProtoMsg(message: _213.Minter): _213.MinterProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                encode(message: _213.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.DistributionProportions;
                fromPartial(object: Partial<_213.DistributionProportions>): _213.DistributionProportions;
                fromAmino(object: _213.DistributionProportionsAmino): _213.DistributionProportions;
                toAmino(message: _213.DistributionProportions): _213.DistributionProportionsAmino;
                fromAminoMsg(object: _213.DistributionProportionsAminoMsg): _213.DistributionProportions;
                fromProtoMsg(message: _213.DistributionProportionsProtoMsg): _213.DistributionProportions;
                toProto(message: _213.DistributionProportions): Uint8Array;
                toProtoMsg(message: _213.DistributionProportions): _213.DistributionProportionsProtoMsg;
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
    }
    const records: {
        QueryClientImpl: typeof _381.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _218.QueryParamsRequest): Promise<_218.QueryParamsResponse>;
            userRedemptionRecord(request: _218.QueryGetUserRedemptionRecordRequest): Promise<_218.QueryGetUserRedemptionRecordResponse>;
            userRedemptionRecordAll(request?: _218.QueryAllUserRedemptionRecordRequest): Promise<_218.QueryAllUserRedemptionRecordResponse>;
            userRedemptionRecordForUser(request: _218.QueryAllUserRedemptionRecordForUserRequest): Promise<_218.QueryAllUserRedemptionRecordForUserResponse>;
            epochUnbondingRecord(request: _218.QueryGetEpochUnbondingRecordRequest): Promise<_218.QueryGetEpochUnbondingRecordResponse>;
            epochUnbondingRecordAll(request?: _218.QueryAllEpochUnbondingRecordRequest): Promise<_218.QueryAllEpochUnbondingRecordResponse>;
            depositRecord(request: _218.QueryGetDepositRecordRequest): Promise<_218.QueryGetDepositRecordResponse>;
            depositRecordAll(request?: _218.QueryAllDepositRecordRequest): Promise<_218.QueryAllDepositRecordResponse>;
            depositRecordByHost(request: _218.QueryDepositRecordByHostRequest): Promise<_218.QueryDepositRecordByHostResponse>;
            lSMDeposit(request: _218.QueryLSMDepositRequest): Promise<_218.QueryLSMDepositResponse>;
            lSMDeposits(request: _218.QueryLSMDepositsRequest): Promise<_218.QueryLSMDepositsResponse>;
        };
        depositRecord_StatusFromJSON(object: any): _219.DepositRecord_Status;
        depositRecord_StatusToJSON(object: _219.DepositRecord_Status): string;
        depositRecord_SourceFromJSON(object: any): _219.DepositRecord_Source;
        depositRecord_SourceToJSON(object: _219.DepositRecord_Source): string;
        hostZoneUnbonding_StatusFromJSON(object: any): _219.HostZoneUnbonding_Status;
        hostZoneUnbonding_StatusToJSON(object: _219.HostZoneUnbonding_Status): string;
        lSMTokenDeposit_StatusFromJSON(object: any): _219.LSMTokenDeposit_Status;
        lSMTokenDeposit_StatusToJSON(object: _219.LSMTokenDeposit_Status): string;
        DepositRecord_Status: typeof _219.DepositRecord_Status;
        DepositRecord_StatusSDKType: typeof _219.DepositRecord_Status;
        DepositRecord_StatusAmino: typeof _219.DepositRecord_Status;
        DepositRecord_Source: typeof _219.DepositRecord_Source;
        DepositRecord_SourceSDKType: typeof _219.DepositRecord_Source;
        DepositRecord_SourceAmino: typeof _219.DepositRecord_Source;
        HostZoneUnbonding_Status: typeof _219.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusSDKType: typeof _219.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusAmino: typeof _219.HostZoneUnbonding_Status;
        LSMTokenDeposit_Status: typeof _219.LSMTokenDeposit_Status;
        LSMTokenDeposit_StatusSDKType: typeof _219.LSMTokenDeposit_Status;
        LSMTokenDeposit_StatusAmino: typeof _219.LSMTokenDeposit_Status;
        UserRedemptionRecord: {
            typeUrl: string;
            encode(message: _219.UserRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.UserRedemptionRecord;
            fromPartial(object: Partial<_219.UserRedemptionRecord>): _219.UserRedemptionRecord;
            fromAmino(object: _219.UserRedemptionRecordAmino): _219.UserRedemptionRecord;
            toAmino(message: _219.UserRedemptionRecord): _219.UserRedemptionRecordAmino;
            fromAminoMsg(object: _219.UserRedemptionRecordAminoMsg): _219.UserRedemptionRecord;
            fromProtoMsg(message: _219.UserRedemptionRecordProtoMsg): _219.UserRedemptionRecord;
            toProto(message: _219.UserRedemptionRecord): Uint8Array;
            toProtoMsg(message: _219.UserRedemptionRecord): _219.UserRedemptionRecordProtoMsg;
        };
        DepositRecord: {
            typeUrl: string;
            encode(message: _219.DepositRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.DepositRecord;
            fromPartial(object: Partial<_219.DepositRecord>): _219.DepositRecord;
            fromAmino(object: _219.DepositRecordAmino): _219.DepositRecord;
            toAmino(message: _219.DepositRecord): _219.DepositRecordAmino;
            fromAminoMsg(object: _219.DepositRecordAminoMsg): _219.DepositRecord;
            fromProtoMsg(message: _219.DepositRecordProtoMsg): _219.DepositRecord;
            toProto(message: _219.DepositRecord): Uint8Array;
            toProtoMsg(message: _219.DepositRecord): _219.DepositRecordProtoMsg;
        };
        HostZoneUnbonding: {
            typeUrl: string;
            encode(message: _219.HostZoneUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.HostZoneUnbonding;
            fromPartial(object: Partial<_219.HostZoneUnbonding>): _219.HostZoneUnbonding;
            fromAmino(object: _219.HostZoneUnbondingAmino): _219.HostZoneUnbonding;
            toAmino(message: _219.HostZoneUnbonding): _219.HostZoneUnbondingAmino;
            fromAminoMsg(object: _219.HostZoneUnbondingAminoMsg): _219.HostZoneUnbonding;
            fromProtoMsg(message: _219.HostZoneUnbondingProtoMsg): _219.HostZoneUnbonding;
            toProto(message: _219.HostZoneUnbonding): Uint8Array;
            toProtoMsg(message: _219.HostZoneUnbonding): _219.HostZoneUnbondingProtoMsg;
        };
        EpochUnbondingRecord: {
            typeUrl: string;
            encode(message: _219.EpochUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.EpochUnbondingRecord;
            fromPartial(object: Partial<_219.EpochUnbondingRecord>): _219.EpochUnbondingRecord;
            fromAmino(object: _219.EpochUnbondingRecordAmino): _219.EpochUnbondingRecord;
            toAmino(message: _219.EpochUnbondingRecord): _219.EpochUnbondingRecordAmino;
            fromAminoMsg(object: _219.EpochUnbondingRecordAminoMsg): _219.EpochUnbondingRecord;
            fromProtoMsg(message: _219.EpochUnbondingRecordProtoMsg): _219.EpochUnbondingRecord;
            toProto(message: _219.EpochUnbondingRecord): Uint8Array;
            toProtoMsg(message: _219.EpochUnbondingRecord): _219.EpochUnbondingRecordProtoMsg;
        };
        LSMTokenDeposit: {
            typeUrl: string;
            encode(message: _219.LSMTokenDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.LSMTokenDeposit;
            fromPartial(object: Partial<_219.LSMTokenDeposit>): _219.LSMTokenDeposit;
            fromAmino(object: _219.LSMTokenDepositAmino): _219.LSMTokenDeposit;
            toAmino(message: _219.LSMTokenDeposit): _219.LSMTokenDepositAmino;
            fromAminoMsg(object: _219.LSMTokenDepositAminoMsg): _219.LSMTokenDeposit;
            fromProtoMsg(message: _219.LSMTokenDepositProtoMsg): _219.LSMTokenDeposit;
            toProto(message: _219.LSMTokenDeposit): Uint8Array;
            toProtoMsg(message: _219.LSMTokenDeposit): _219.LSMTokenDepositProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _218.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryParamsRequest;
            fromPartial(_: Partial<_218.QueryParamsRequest>): _218.QueryParamsRequest;
            fromAmino(_: _218.QueryParamsRequestAmino): _218.QueryParamsRequest;
            toAmino(_: _218.QueryParamsRequest): _218.QueryParamsRequestAmino;
            fromAminoMsg(object: _218.QueryParamsRequestAminoMsg): _218.QueryParamsRequest;
            fromProtoMsg(message: _218.QueryParamsRequestProtoMsg): _218.QueryParamsRequest;
            toProto(message: _218.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _218.QueryParamsRequest): _218.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _218.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryParamsResponse;
            fromPartial(object: Partial<_218.QueryParamsResponse>): _218.QueryParamsResponse;
            fromAmino(object: _218.QueryParamsResponseAmino): _218.QueryParamsResponse;
            toAmino(message: _218.QueryParamsResponse): _218.QueryParamsResponseAmino;
            fromAminoMsg(object: _218.QueryParamsResponseAminoMsg): _218.QueryParamsResponse;
            fromProtoMsg(message: _218.QueryParamsResponseProtoMsg): _218.QueryParamsResponse;
            toProto(message: _218.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _218.QueryParamsResponse): _218.QueryParamsResponseProtoMsg;
        };
        QueryGetDepositRecordRequest: {
            typeUrl: string;
            encode(message: _218.QueryGetDepositRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryGetDepositRecordRequest;
            fromPartial(object: Partial<_218.QueryGetDepositRecordRequest>): _218.QueryGetDepositRecordRequest;
            fromAmino(object: _218.QueryGetDepositRecordRequestAmino): _218.QueryGetDepositRecordRequest;
            toAmino(message: _218.QueryGetDepositRecordRequest): _218.QueryGetDepositRecordRequestAmino;
            fromAminoMsg(object: _218.QueryGetDepositRecordRequestAminoMsg): _218.QueryGetDepositRecordRequest;
            fromProtoMsg(message: _218.QueryGetDepositRecordRequestProtoMsg): _218.QueryGetDepositRecordRequest;
            toProto(message: _218.QueryGetDepositRecordRequest): Uint8Array;
            toProtoMsg(message: _218.QueryGetDepositRecordRequest): _218.QueryGetDepositRecordRequestProtoMsg;
        };
        QueryGetDepositRecordResponse: {
            typeUrl: string;
            encode(message: _218.QueryGetDepositRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryGetDepositRecordResponse;
            fromPartial(object: Partial<_218.QueryGetDepositRecordResponse>): _218.QueryGetDepositRecordResponse;
            fromAmino(object: _218.QueryGetDepositRecordResponseAmino): _218.QueryGetDepositRecordResponse;
            toAmino(message: _218.QueryGetDepositRecordResponse): _218.QueryGetDepositRecordResponseAmino;
            fromAminoMsg(object: _218.QueryGetDepositRecordResponseAminoMsg): _218.QueryGetDepositRecordResponse;
            fromProtoMsg(message: _218.QueryGetDepositRecordResponseProtoMsg): _218.QueryGetDepositRecordResponse;
            toProto(message: _218.QueryGetDepositRecordResponse): Uint8Array;
            toProtoMsg(message: _218.QueryGetDepositRecordResponse): _218.QueryGetDepositRecordResponseProtoMsg;
        };
        QueryAllDepositRecordRequest: {
            typeUrl: string;
            encode(message: _218.QueryAllDepositRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryAllDepositRecordRequest;
            fromPartial(object: Partial<_218.QueryAllDepositRecordRequest>): _218.QueryAllDepositRecordRequest;
            fromAmino(object: _218.QueryAllDepositRecordRequestAmino): _218.QueryAllDepositRecordRequest;
            toAmino(message: _218.QueryAllDepositRecordRequest): _218.QueryAllDepositRecordRequestAmino;
            fromAminoMsg(object: _218.QueryAllDepositRecordRequestAminoMsg): _218.QueryAllDepositRecordRequest;
            fromProtoMsg(message: _218.QueryAllDepositRecordRequestProtoMsg): _218.QueryAllDepositRecordRequest;
            toProto(message: _218.QueryAllDepositRecordRequest): Uint8Array;
            toProtoMsg(message: _218.QueryAllDepositRecordRequest): _218.QueryAllDepositRecordRequestProtoMsg;
        };
        QueryAllDepositRecordResponse: {
            typeUrl: string;
            encode(message: _218.QueryAllDepositRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryAllDepositRecordResponse;
            fromPartial(object: Partial<_218.QueryAllDepositRecordResponse>): _218.QueryAllDepositRecordResponse;
            fromAmino(object: _218.QueryAllDepositRecordResponseAmino): _218.QueryAllDepositRecordResponse;
            toAmino(message: _218.QueryAllDepositRecordResponse): _218.QueryAllDepositRecordResponseAmino;
            fromAminoMsg(object: _218.QueryAllDepositRecordResponseAminoMsg): _218.QueryAllDepositRecordResponse;
            fromProtoMsg(message: _218.QueryAllDepositRecordResponseProtoMsg): _218.QueryAllDepositRecordResponse;
            toProto(message: _218.QueryAllDepositRecordResponse): Uint8Array;
            toProtoMsg(message: _218.QueryAllDepositRecordResponse): _218.QueryAllDepositRecordResponseProtoMsg;
        };
        QueryDepositRecordByHostRequest: {
            typeUrl: string;
            encode(message: _218.QueryDepositRecordByHostRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryDepositRecordByHostRequest;
            fromPartial(object: Partial<_218.QueryDepositRecordByHostRequest>): _218.QueryDepositRecordByHostRequest;
            fromAmino(object: _218.QueryDepositRecordByHostRequestAmino): _218.QueryDepositRecordByHostRequest;
            toAmino(message: _218.QueryDepositRecordByHostRequest): _218.QueryDepositRecordByHostRequestAmino;
            fromAminoMsg(object: _218.QueryDepositRecordByHostRequestAminoMsg): _218.QueryDepositRecordByHostRequest;
            fromProtoMsg(message: _218.QueryDepositRecordByHostRequestProtoMsg): _218.QueryDepositRecordByHostRequest;
            toProto(message: _218.QueryDepositRecordByHostRequest): Uint8Array;
            toProtoMsg(message: _218.QueryDepositRecordByHostRequest): _218.QueryDepositRecordByHostRequestProtoMsg;
        };
        QueryDepositRecordByHostResponse: {
            typeUrl: string;
            encode(message: _218.QueryDepositRecordByHostResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryDepositRecordByHostResponse;
            fromPartial(object: Partial<_218.QueryDepositRecordByHostResponse>): _218.QueryDepositRecordByHostResponse;
            fromAmino(object: _218.QueryDepositRecordByHostResponseAmino): _218.QueryDepositRecordByHostResponse;
            toAmino(message: _218.QueryDepositRecordByHostResponse): _218.QueryDepositRecordByHostResponseAmino;
            fromAminoMsg(object: _218.QueryDepositRecordByHostResponseAminoMsg): _218.QueryDepositRecordByHostResponse;
            fromProtoMsg(message: _218.QueryDepositRecordByHostResponseProtoMsg): _218.QueryDepositRecordByHostResponse;
            toProto(message: _218.QueryDepositRecordByHostResponse): Uint8Array;
            toProtoMsg(message: _218.QueryDepositRecordByHostResponse): _218.QueryDepositRecordByHostResponseProtoMsg;
        };
        QueryGetUserRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _218.QueryGetUserRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryGetUserRedemptionRecordRequest;
            fromPartial(object: Partial<_218.QueryGetUserRedemptionRecordRequest>): _218.QueryGetUserRedemptionRecordRequest;
            fromAmino(object: _218.QueryGetUserRedemptionRecordRequestAmino): _218.QueryGetUserRedemptionRecordRequest;
            toAmino(message: _218.QueryGetUserRedemptionRecordRequest): _218.QueryGetUserRedemptionRecordRequestAmino;
            fromAminoMsg(object: _218.QueryGetUserRedemptionRecordRequestAminoMsg): _218.QueryGetUserRedemptionRecordRequest;
            fromProtoMsg(message: _218.QueryGetUserRedemptionRecordRequestProtoMsg): _218.QueryGetUserRedemptionRecordRequest;
            toProto(message: _218.QueryGetUserRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _218.QueryGetUserRedemptionRecordRequest): _218.QueryGetUserRedemptionRecordRequestProtoMsg;
        };
        QueryGetUserRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _218.QueryGetUserRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryGetUserRedemptionRecordResponse;
            fromPartial(object: Partial<_218.QueryGetUserRedemptionRecordResponse>): _218.QueryGetUserRedemptionRecordResponse;
            fromAmino(object: _218.QueryGetUserRedemptionRecordResponseAmino): _218.QueryGetUserRedemptionRecordResponse;
            toAmino(message: _218.QueryGetUserRedemptionRecordResponse): _218.QueryGetUserRedemptionRecordResponseAmino;
            fromAminoMsg(object: _218.QueryGetUserRedemptionRecordResponseAminoMsg): _218.QueryGetUserRedemptionRecordResponse;
            fromProtoMsg(message: _218.QueryGetUserRedemptionRecordResponseProtoMsg): _218.QueryGetUserRedemptionRecordResponse;
            toProto(message: _218.QueryGetUserRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _218.QueryGetUserRedemptionRecordResponse): _218.QueryGetUserRedemptionRecordResponseProtoMsg;
        };
        QueryAllUserRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _218.QueryAllUserRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryAllUserRedemptionRecordRequest;
            fromPartial(object: Partial<_218.QueryAllUserRedemptionRecordRequest>): _218.QueryAllUserRedemptionRecordRequest;
            fromAmino(object: _218.QueryAllUserRedemptionRecordRequestAmino): _218.QueryAllUserRedemptionRecordRequest;
            toAmino(message: _218.QueryAllUserRedemptionRecordRequest): _218.QueryAllUserRedemptionRecordRequestAmino;
            fromAminoMsg(object: _218.QueryAllUserRedemptionRecordRequestAminoMsg): _218.QueryAllUserRedemptionRecordRequest;
            fromProtoMsg(message: _218.QueryAllUserRedemptionRecordRequestProtoMsg): _218.QueryAllUserRedemptionRecordRequest;
            toProto(message: _218.QueryAllUserRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _218.QueryAllUserRedemptionRecordRequest): _218.QueryAllUserRedemptionRecordRequestProtoMsg;
        };
        QueryAllUserRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _218.QueryAllUserRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryAllUserRedemptionRecordResponse;
            fromPartial(object: Partial<_218.QueryAllUserRedemptionRecordResponse>): _218.QueryAllUserRedemptionRecordResponse;
            fromAmino(object: _218.QueryAllUserRedemptionRecordResponseAmino): _218.QueryAllUserRedemptionRecordResponse;
            toAmino(message: _218.QueryAllUserRedemptionRecordResponse): _218.QueryAllUserRedemptionRecordResponseAmino;
            fromAminoMsg(object: _218.QueryAllUserRedemptionRecordResponseAminoMsg): _218.QueryAllUserRedemptionRecordResponse;
            fromProtoMsg(message: _218.QueryAllUserRedemptionRecordResponseProtoMsg): _218.QueryAllUserRedemptionRecordResponse;
            toProto(message: _218.QueryAllUserRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _218.QueryAllUserRedemptionRecordResponse): _218.QueryAllUserRedemptionRecordResponseProtoMsg;
        };
        QueryAllUserRedemptionRecordForUserRequest: {
            typeUrl: string;
            encode(message: _218.QueryAllUserRedemptionRecordForUserRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryAllUserRedemptionRecordForUserRequest;
            fromPartial(object: Partial<_218.QueryAllUserRedemptionRecordForUserRequest>): _218.QueryAllUserRedemptionRecordForUserRequest;
            fromAmino(object: _218.QueryAllUserRedemptionRecordForUserRequestAmino): _218.QueryAllUserRedemptionRecordForUserRequest;
            toAmino(message: _218.QueryAllUserRedemptionRecordForUserRequest): _218.QueryAllUserRedemptionRecordForUserRequestAmino;
            fromAminoMsg(object: _218.QueryAllUserRedemptionRecordForUserRequestAminoMsg): _218.QueryAllUserRedemptionRecordForUserRequest;
            fromProtoMsg(message: _218.QueryAllUserRedemptionRecordForUserRequestProtoMsg): _218.QueryAllUserRedemptionRecordForUserRequest;
            toProto(message: _218.QueryAllUserRedemptionRecordForUserRequest): Uint8Array;
            toProtoMsg(message: _218.QueryAllUserRedemptionRecordForUserRequest): _218.QueryAllUserRedemptionRecordForUserRequestProtoMsg;
        };
        QueryAllUserRedemptionRecordForUserResponse: {
            typeUrl: string;
            encode(message: _218.QueryAllUserRedemptionRecordForUserResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryAllUserRedemptionRecordForUserResponse;
            fromPartial(object: Partial<_218.QueryAllUserRedemptionRecordForUserResponse>): _218.QueryAllUserRedemptionRecordForUserResponse;
            fromAmino(object: _218.QueryAllUserRedemptionRecordForUserResponseAmino): _218.QueryAllUserRedemptionRecordForUserResponse;
            toAmino(message: _218.QueryAllUserRedemptionRecordForUserResponse): _218.QueryAllUserRedemptionRecordForUserResponseAmino;
            fromAminoMsg(object: _218.QueryAllUserRedemptionRecordForUserResponseAminoMsg): _218.QueryAllUserRedemptionRecordForUserResponse;
            fromProtoMsg(message: _218.QueryAllUserRedemptionRecordForUserResponseProtoMsg): _218.QueryAllUserRedemptionRecordForUserResponse;
            toProto(message: _218.QueryAllUserRedemptionRecordForUserResponse): Uint8Array;
            toProtoMsg(message: _218.QueryAllUserRedemptionRecordForUserResponse): _218.QueryAllUserRedemptionRecordForUserResponseProtoMsg;
        };
        QueryGetEpochUnbondingRecordRequest: {
            typeUrl: string;
            encode(message: _218.QueryGetEpochUnbondingRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryGetEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_218.QueryGetEpochUnbondingRecordRequest>): _218.QueryGetEpochUnbondingRecordRequest;
            fromAmino(object: _218.QueryGetEpochUnbondingRecordRequestAmino): _218.QueryGetEpochUnbondingRecordRequest;
            toAmino(message: _218.QueryGetEpochUnbondingRecordRequest): _218.QueryGetEpochUnbondingRecordRequestAmino;
            fromAminoMsg(object: _218.QueryGetEpochUnbondingRecordRequestAminoMsg): _218.QueryGetEpochUnbondingRecordRequest;
            fromProtoMsg(message: _218.QueryGetEpochUnbondingRecordRequestProtoMsg): _218.QueryGetEpochUnbondingRecordRequest;
            toProto(message: _218.QueryGetEpochUnbondingRecordRequest): Uint8Array;
            toProtoMsg(message: _218.QueryGetEpochUnbondingRecordRequest): _218.QueryGetEpochUnbondingRecordRequestProtoMsg;
        };
        QueryGetEpochUnbondingRecordResponse: {
            typeUrl: string;
            encode(message: _218.QueryGetEpochUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryGetEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_218.QueryGetEpochUnbondingRecordResponse>): _218.QueryGetEpochUnbondingRecordResponse;
            fromAmino(object: _218.QueryGetEpochUnbondingRecordResponseAmino): _218.QueryGetEpochUnbondingRecordResponse;
            toAmino(message: _218.QueryGetEpochUnbondingRecordResponse): _218.QueryGetEpochUnbondingRecordResponseAmino;
            fromAminoMsg(object: _218.QueryGetEpochUnbondingRecordResponseAminoMsg): _218.QueryGetEpochUnbondingRecordResponse;
            fromProtoMsg(message: _218.QueryGetEpochUnbondingRecordResponseProtoMsg): _218.QueryGetEpochUnbondingRecordResponse;
            toProto(message: _218.QueryGetEpochUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _218.QueryGetEpochUnbondingRecordResponse): _218.QueryGetEpochUnbondingRecordResponseProtoMsg;
        };
        QueryAllEpochUnbondingRecordRequest: {
            typeUrl: string;
            encode(message: _218.QueryAllEpochUnbondingRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryAllEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_218.QueryAllEpochUnbondingRecordRequest>): _218.QueryAllEpochUnbondingRecordRequest;
            fromAmino(object: _218.QueryAllEpochUnbondingRecordRequestAmino): _218.QueryAllEpochUnbondingRecordRequest;
            toAmino(message: _218.QueryAllEpochUnbondingRecordRequest): _218.QueryAllEpochUnbondingRecordRequestAmino;
            fromAminoMsg(object: _218.QueryAllEpochUnbondingRecordRequestAminoMsg): _218.QueryAllEpochUnbondingRecordRequest;
            fromProtoMsg(message: _218.QueryAllEpochUnbondingRecordRequestProtoMsg): _218.QueryAllEpochUnbondingRecordRequest;
            toProto(message: _218.QueryAllEpochUnbondingRecordRequest): Uint8Array;
            toProtoMsg(message: _218.QueryAllEpochUnbondingRecordRequest): _218.QueryAllEpochUnbondingRecordRequestProtoMsg;
        };
        QueryAllEpochUnbondingRecordResponse: {
            typeUrl: string;
            encode(message: _218.QueryAllEpochUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryAllEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_218.QueryAllEpochUnbondingRecordResponse>): _218.QueryAllEpochUnbondingRecordResponse;
            fromAmino(object: _218.QueryAllEpochUnbondingRecordResponseAmino): _218.QueryAllEpochUnbondingRecordResponse;
            toAmino(message: _218.QueryAllEpochUnbondingRecordResponse): _218.QueryAllEpochUnbondingRecordResponseAmino;
            fromAminoMsg(object: _218.QueryAllEpochUnbondingRecordResponseAminoMsg): _218.QueryAllEpochUnbondingRecordResponse;
            fromProtoMsg(message: _218.QueryAllEpochUnbondingRecordResponseProtoMsg): _218.QueryAllEpochUnbondingRecordResponse;
            toProto(message: _218.QueryAllEpochUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _218.QueryAllEpochUnbondingRecordResponse): _218.QueryAllEpochUnbondingRecordResponseProtoMsg;
        };
        QueryLSMDepositRequest: {
            typeUrl: string;
            encode(message: _218.QueryLSMDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryLSMDepositRequest;
            fromPartial(object: Partial<_218.QueryLSMDepositRequest>): _218.QueryLSMDepositRequest;
            fromAmino(object: _218.QueryLSMDepositRequestAmino): _218.QueryLSMDepositRequest;
            toAmino(message: _218.QueryLSMDepositRequest): _218.QueryLSMDepositRequestAmino;
            fromAminoMsg(object: _218.QueryLSMDepositRequestAminoMsg): _218.QueryLSMDepositRequest;
            fromProtoMsg(message: _218.QueryLSMDepositRequestProtoMsg): _218.QueryLSMDepositRequest;
            toProto(message: _218.QueryLSMDepositRequest): Uint8Array;
            toProtoMsg(message: _218.QueryLSMDepositRequest): _218.QueryLSMDepositRequestProtoMsg;
        };
        QueryLSMDepositResponse: {
            typeUrl: string;
            encode(message: _218.QueryLSMDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryLSMDepositResponse;
            fromPartial(object: Partial<_218.QueryLSMDepositResponse>): _218.QueryLSMDepositResponse;
            fromAmino(object: _218.QueryLSMDepositResponseAmino): _218.QueryLSMDepositResponse;
            toAmino(message: _218.QueryLSMDepositResponse): _218.QueryLSMDepositResponseAmino;
            fromAminoMsg(object: _218.QueryLSMDepositResponseAminoMsg): _218.QueryLSMDepositResponse;
            fromProtoMsg(message: _218.QueryLSMDepositResponseProtoMsg): _218.QueryLSMDepositResponse;
            toProto(message: _218.QueryLSMDepositResponse): Uint8Array;
            toProtoMsg(message: _218.QueryLSMDepositResponse): _218.QueryLSMDepositResponseProtoMsg;
        };
        QueryLSMDepositsRequest: {
            typeUrl: string;
            encode(message: _218.QueryLSMDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryLSMDepositsRequest;
            fromPartial(object: Partial<_218.QueryLSMDepositsRequest>): _218.QueryLSMDepositsRequest;
            fromAmino(object: _218.QueryLSMDepositsRequestAmino): _218.QueryLSMDepositsRequest;
            toAmino(message: _218.QueryLSMDepositsRequest): _218.QueryLSMDepositsRequestAmino;
            fromAminoMsg(object: _218.QueryLSMDepositsRequestAminoMsg): _218.QueryLSMDepositsRequest;
            fromProtoMsg(message: _218.QueryLSMDepositsRequestProtoMsg): _218.QueryLSMDepositsRequest;
            toProto(message: _218.QueryLSMDepositsRequest): Uint8Array;
            toProtoMsg(message: _218.QueryLSMDepositsRequest): _218.QueryLSMDepositsRequestProtoMsg;
        };
        QueryLSMDepositsResponse: {
            typeUrl: string;
            encode(message: _218.QueryLSMDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.QueryLSMDepositsResponse;
            fromPartial(object: Partial<_218.QueryLSMDepositsResponse>): _218.QueryLSMDepositsResponse;
            fromAmino(object: _218.QueryLSMDepositsResponseAmino): _218.QueryLSMDepositsResponse;
            toAmino(message: _218.QueryLSMDepositsResponse): _218.QueryLSMDepositsResponseAmino;
            fromAminoMsg(object: _218.QueryLSMDepositsResponseAminoMsg): _218.QueryLSMDepositsResponse;
            fromProtoMsg(message: _218.QueryLSMDepositsResponseProtoMsg): _218.QueryLSMDepositsResponse;
            toProto(message: _218.QueryLSMDepositsResponse): Uint8Array;
            toProtoMsg(message: _218.QueryLSMDepositsResponse): _218.QueryLSMDepositsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _217.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.Params;
            fromPartial(_: Partial<_217.Params>): _217.Params;
            fromAmino(_: _217.ParamsAmino): _217.Params;
            toAmino(_: _217.Params): _217.ParamsAmino;
            fromAminoMsg(object: _217.ParamsAminoMsg): _217.Params;
            fromProtoMsg(message: _217.ParamsProtoMsg): _217.Params;
            toProto(message: _217.Params): Uint8Array;
            toProtoMsg(message: _217.Params): _217.ParamsProtoMsg;
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
        TransferCallback: {
            typeUrl: string;
            encode(message: _215.TransferCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.TransferCallback;
            fromPartial(object: Partial<_215.TransferCallback>): _215.TransferCallback;
            fromAmino(object: _215.TransferCallbackAmino): _215.TransferCallback;
            toAmino(message: _215.TransferCallback): _215.TransferCallbackAmino;
            fromAminoMsg(object: _215.TransferCallbackAminoMsg): _215.TransferCallback;
            fromProtoMsg(message: _215.TransferCallbackProtoMsg): _215.TransferCallback;
            toProto(message: _215.TransferCallback): Uint8Array;
            toProtoMsg(message: _215.TransferCallback): _215.TransferCallbackProtoMsg;
        };
        TransferLSMTokenCallback: {
            typeUrl: string;
            encode(message: _215.TransferLSMTokenCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.TransferLSMTokenCallback;
            fromPartial(object: Partial<_215.TransferLSMTokenCallback>): _215.TransferLSMTokenCallback;
            fromAmino(object: _215.TransferLSMTokenCallbackAmino): _215.TransferLSMTokenCallback;
            toAmino(message: _215.TransferLSMTokenCallback): _215.TransferLSMTokenCallbackAmino;
            fromAminoMsg(object: _215.TransferLSMTokenCallbackAminoMsg): _215.TransferLSMTokenCallback;
            fromProtoMsg(message: _215.TransferLSMTokenCallbackProtoMsg): _215.TransferLSMTokenCallback;
            toProto(message: _215.TransferLSMTokenCallback): Uint8Array;
            toProtoMsg(message: _215.TransferLSMTokenCallback): _215.TransferLSMTokenCallbackProtoMsg;
        };
    };
    const stakedym: {
        MsgClientImpl: typeof _392.MsgClientImpl;
        QueryClientImpl: typeof _382.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            hostZone(request?: _221.QueryHostZoneRequest): Promise<_221.QueryHostZoneResponse>;
            delegationRecords(request: _221.QueryDelegationRecordsRequest): Promise<_221.QueryDelegationRecordsResponse>;
            unbondingRecords(request: _221.QueryUnbondingRecordsRequest): Promise<_221.QueryUnbondingRecordsResponse>;
            redemptionRecord(request: _221.QueryRedemptionRecordRequest): Promise<_221.QueryRedemptionRecordResponse>;
            redemptionRecords(request: _221.QueryRedemptionRecordsRequest): Promise<_221.QueryRedemptionRecordsResponse>;
            slashRecords(request?: _221.QuerySlashRecordsRequest): Promise<_221.QuerySlashRecordsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _223.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _223.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmDelegation(value: _223.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUndelegation(value: _223.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUnbondedTokenSweep(value: _223.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                adjustDelegatedBalance(value: _223.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _223.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _223.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                refreshRedemptionRate(value: _223.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteDelegationRecord(value: _223.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteUnbondingRecord(value: _223.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteRedemptionRecord(value: _223.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOperatorAddress(value: _223.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _223.MsgLiquidStake): {
                    typeUrl: string;
                    value: _223.MsgLiquidStake;
                };
                redeemStake(value: _223.MsgRedeemStake): {
                    typeUrl: string;
                    value: _223.MsgRedeemStake;
                };
                confirmDelegation(value: _223.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _223.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _223.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _223.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _223.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _223.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _223.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _223.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _223.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _223.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _223.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _223.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _223.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _223.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _223.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _223.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _223.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _223.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _223.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _223.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _223.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _223.MsgSetOperatorAddress;
                };
            };
            fromPartial: {
                liquidStake(value: _223.MsgLiquidStake): {
                    typeUrl: string;
                    value: _223.MsgLiquidStake;
                };
                redeemStake(value: _223.MsgRedeemStake): {
                    typeUrl: string;
                    value: _223.MsgRedeemStake;
                };
                confirmDelegation(value: _223.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _223.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _223.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _223.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _223.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _223.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _223.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _223.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _223.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _223.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _223.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _223.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _223.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _223.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _223.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _223.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _223.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _223.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _223.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _223.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _223.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _223.MsgSetOperatorAddress;
                };
            };
        };
        AminoConverter: {
            "/stride.stakedym.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _223.MsgLiquidStake) => _223.MsgLiquidStakeAmino;
                fromAmino: (object: _223.MsgLiquidStakeAmino) => _223.MsgLiquidStake;
            };
            "/stride.stakedym.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _223.MsgRedeemStake) => _223.MsgRedeemStakeAmino;
                fromAmino: (object: _223.MsgRedeemStakeAmino) => _223.MsgRedeemStake;
            };
            "/stride.stakedym.MsgConfirmDelegation": {
                aminoType: string;
                toAmino: (message: _223.MsgConfirmDelegation) => _223.MsgConfirmDelegationAmino;
                fromAmino: (object: _223.MsgConfirmDelegationAmino) => _223.MsgConfirmDelegation;
            };
            "/stride.stakedym.MsgConfirmUndelegation": {
                aminoType: string;
                toAmino: (message: _223.MsgConfirmUndelegation) => _223.MsgConfirmUndelegationAmino;
                fromAmino: (object: _223.MsgConfirmUndelegationAmino) => _223.MsgConfirmUndelegation;
            };
            "/stride.stakedym.MsgConfirmUnbondedTokenSweep": {
                aminoType: string;
                toAmino: (message: _223.MsgConfirmUnbondedTokenSweep) => _223.MsgConfirmUnbondedTokenSweepAmino;
                fromAmino: (object: _223.MsgConfirmUnbondedTokenSweepAmino) => _223.MsgConfirmUnbondedTokenSweep;
            };
            "/stride.stakedym.MsgAdjustDelegatedBalance": {
                aminoType: string;
                toAmino: (message: _223.MsgAdjustDelegatedBalance) => _223.MsgAdjustDelegatedBalanceAmino;
                fromAmino: (object: _223.MsgAdjustDelegatedBalanceAmino) => _223.MsgAdjustDelegatedBalance;
            };
            "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _223.MsgUpdateInnerRedemptionRateBounds) => _223.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _223.MsgUpdateInnerRedemptionRateBoundsAmino) => _223.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.stakedym.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _223.MsgResumeHostZone) => _223.MsgResumeHostZoneAmino;
                fromAmino: (object: _223.MsgResumeHostZoneAmino) => _223.MsgResumeHostZone;
            };
            "/stride.stakedym.MsgRefreshRedemptionRate": {
                aminoType: string;
                toAmino: (message: _223.MsgRefreshRedemptionRate) => _223.MsgRefreshRedemptionRateAmino;
                fromAmino: (object: _223.MsgRefreshRedemptionRateAmino) => _223.MsgRefreshRedemptionRate;
            };
            "/stride.stakedym.MsgOverwriteDelegationRecord": {
                aminoType: string;
                toAmino: (message: _223.MsgOverwriteDelegationRecord) => _223.MsgOverwriteDelegationRecordAmino;
                fromAmino: (object: _223.MsgOverwriteDelegationRecordAmino) => _223.MsgOverwriteDelegationRecord;
            };
            "/stride.stakedym.MsgOverwriteUnbondingRecord": {
                aminoType: string;
                toAmino: (message: _223.MsgOverwriteUnbondingRecord) => _223.MsgOverwriteUnbondingRecordAmino;
                fromAmino: (object: _223.MsgOverwriteUnbondingRecordAmino) => _223.MsgOverwriteUnbondingRecord;
            };
            "/stride.stakedym.MsgOverwriteRedemptionRecord": {
                aminoType: string;
                toAmino: (message: _223.MsgOverwriteRedemptionRecord) => _223.MsgOverwriteRedemptionRecordAmino;
                fromAmino: (object: _223.MsgOverwriteRedemptionRecordAmino) => _223.MsgOverwriteRedemptionRecord;
            };
            "/stride.stakedym.MsgSetOperatorAddress": {
                aminoType: string;
                toAmino: (message: _223.MsgSetOperatorAddress) => _223.MsgSetOperatorAddressAmino;
                fromAmino: (object: _223.MsgSetOperatorAddressAmino) => _223.MsgSetOperatorAddress;
            };
        };
        overwritableRecordTypeFromJSON(object: any): _223.OverwritableRecordType;
        overwritableRecordTypeToJSON(object: _223.OverwritableRecordType): string;
        OverwritableRecordType: typeof _223.OverwritableRecordType;
        OverwritableRecordTypeSDKType: typeof _223.OverwritableRecordType;
        OverwritableRecordTypeAmino: typeof _223.OverwritableRecordType;
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _223.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgLiquidStake;
            fromPartial(object: Partial<_223.MsgLiquidStake>): _223.MsgLiquidStake;
            fromAmino(object: _223.MsgLiquidStakeAmino): _223.MsgLiquidStake;
            toAmino(message: _223.MsgLiquidStake): _223.MsgLiquidStakeAmino;
            fromAminoMsg(object: _223.MsgLiquidStakeAminoMsg): _223.MsgLiquidStake;
            toAminoMsg(message: _223.MsgLiquidStake): _223.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _223.MsgLiquidStakeProtoMsg): _223.MsgLiquidStake;
            toProto(message: _223.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _223.MsgLiquidStake): _223.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _223.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_223.MsgLiquidStakeResponse>): _223.MsgLiquidStakeResponse;
            fromAmino(object: _223.MsgLiquidStakeResponseAmino): _223.MsgLiquidStakeResponse;
            toAmino(message: _223.MsgLiquidStakeResponse): _223.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _223.MsgLiquidStakeResponseAminoMsg): _223.MsgLiquidStakeResponse;
            fromProtoMsg(message: _223.MsgLiquidStakeResponseProtoMsg): _223.MsgLiquidStakeResponse;
            toProto(message: _223.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _223.MsgLiquidStakeResponse): _223.MsgLiquidStakeResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _223.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgRedeemStake;
            fromPartial(object: Partial<_223.MsgRedeemStake>): _223.MsgRedeemStake;
            fromAmino(object: _223.MsgRedeemStakeAmino): _223.MsgRedeemStake;
            toAmino(message: _223.MsgRedeemStake): _223.MsgRedeemStakeAmino;
            fromAminoMsg(object: _223.MsgRedeemStakeAminoMsg): _223.MsgRedeemStake;
            toAminoMsg(message: _223.MsgRedeemStake): _223.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _223.MsgRedeemStakeProtoMsg): _223.MsgRedeemStake;
            toProto(message: _223.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _223.MsgRedeemStake): _223.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(message: _223.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgRedeemStakeResponse;
            fromPartial(object: Partial<_223.MsgRedeemStakeResponse>): _223.MsgRedeemStakeResponse;
            fromAmino(object: _223.MsgRedeemStakeResponseAmino): _223.MsgRedeemStakeResponse;
            toAmino(message: _223.MsgRedeemStakeResponse): _223.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _223.MsgRedeemStakeResponseAminoMsg): _223.MsgRedeemStakeResponse;
            fromProtoMsg(message: _223.MsgRedeemStakeResponseProtoMsg): _223.MsgRedeemStakeResponse;
            toProto(message: _223.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _223.MsgRedeemStakeResponse): _223.MsgRedeemStakeResponseProtoMsg;
        };
        MsgConfirmDelegation: {
            typeUrl: string;
            encode(message: _223.MsgConfirmDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgConfirmDelegation;
            fromPartial(object: Partial<_223.MsgConfirmDelegation>): _223.MsgConfirmDelegation;
            fromAmino(object: _223.MsgConfirmDelegationAmino): _223.MsgConfirmDelegation;
            toAmino(message: _223.MsgConfirmDelegation): _223.MsgConfirmDelegationAmino;
            fromAminoMsg(object: _223.MsgConfirmDelegationAminoMsg): _223.MsgConfirmDelegation;
            toAminoMsg(message: _223.MsgConfirmDelegation): _223.MsgConfirmDelegationAminoMsg;
            fromProtoMsg(message: _223.MsgConfirmDelegationProtoMsg): _223.MsgConfirmDelegation;
            toProto(message: _223.MsgConfirmDelegation): Uint8Array;
            toProtoMsg(message: _223.MsgConfirmDelegation): _223.MsgConfirmDelegationProtoMsg;
        };
        MsgConfirmDelegationResponse: {
            typeUrl: string;
            encode(_: _223.MsgConfirmDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgConfirmDelegationResponse;
            fromPartial(_: Partial<_223.MsgConfirmDelegationResponse>): _223.MsgConfirmDelegationResponse;
            fromAmino(_: _223.MsgConfirmDelegationResponseAmino): _223.MsgConfirmDelegationResponse;
            toAmino(_: _223.MsgConfirmDelegationResponse): _223.MsgConfirmDelegationResponseAmino;
            fromAminoMsg(object: _223.MsgConfirmDelegationResponseAminoMsg): _223.MsgConfirmDelegationResponse;
            fromProtoMsg(message: _223.MsgConfirmDelegationResponseProtoMsg): _223.MsgConfirmDelegationResponse;
            toProto(message: _223.MsgConfirmDelegationResponse): Uint8Array;
            toProtoMsg(message: _223.MsgConfirmDelegationResponse): _223.MsgConfirmDelegationResponseProtoMsg;
        };
        MsgConfirmUndelegation: {
            typeUrl: string;
            encode(message: _223.MsgConfirmUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgConfirmUndelegation;
            fromPartial(object: Partial<_223.MsgConfirmUndelegation>): _223.MsgConfirmUndelegation;
            fromAmino(object: _223.MsgConfirmUndelegationAmino): _223.MsgConfirmUndelegation;
            toAmino(message: _223.MsgConfirmUndelegation): _223.MsgConfirmUndelegationAmino;
            fromAminoMsg(object: _223.MsgConfirmUndelegationAminoMsg): _223.MsgConfirmUndelegation;
            toAminoMsg(message: _223.MsgConfirmUndelegation): _223.MsgConfirmUndelegationAminoMsg;
            fromProtoMsg(message: _223.MsgConfirmUndelegationProtoMsg): _223.MsgConfirmUndelegation;
            toProto(message: _223.MsgConfirmUndelegation): Uint8Array;
            toProtoMsg(message: _223.MsgConfirmUndelegation): _223.MsgConfirmUndelegationProtoMsg;
        };
        MsgConfirmUndelegationResponse: {
            typeUrl: string;
            encode(_: _223.MsgConfirmUndelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgConfirmUndelegationResponse;
            fromPartial(_: Partial<_223.MsgConfirmUndelegationResponse>): _223.MsgConfirmUndelegationResponse;
            fromAmino(_: _223.MsgConfirmUndelegationResponseAmino): _223.MsgConfirmUndelegationResponse;
            toAmino(_: _223.MsgConfirmUndelegationResponse): _223.MsgConfirmUndelegationResponseAmino;
            fromAminoMsg(object: _223.MsgConfirmUndelegationResponseAminoMsg): _223.MsgConfirmUndelegationResponse;
            fromProtoMsg(message: _223.MsgConfirmUndelegationResponseProtoMsg): _223.MsgConfirmUndelegationResponse;
            toProto(message: _223.MsgConfirmUndelegationResponse): Uint8Array;
            toProtoMsg(message: _223.MsgConfirmUndelegationResponse): _223.MsgConfirmUndelegationResponseProtoMsg;
        };
        MsgConfirmUnbondedTokenSweep: {
            typeUrl: string;
            encode(message: _223.MsgConfirmUnbondedTokenSweep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgConfirmUnbondedTokenSweep;
            fromPartial(object: Partial<_223.MsgConfirmUnbondedTokenSweep>): _223.MsgConfirmUnbondedTokenSweep;
            fromAmino(object: _223.MsgConfirmUnbondedTokenSweepAmino): _223.MsgConfirmUnbondedTokenSweep;
            toAmino(message: _223.MsgConfirmUnbondedTokenSweep): _223.MsgConfirmUnbondedTokenSweepAmino;
            fromAminoMsg(object: _223.MsgConfirmUnbondedTokenSweepAminoMsg): _223.MsgConfirmUnbondedTokenSweep;
            toAminoMsg(message: _223.MsgConfirmUnbondedTokenSweep): _223.MsgConfirmUnbondedTokenSweepAminoMsg;
            fromProtoMsg(message: _223.MsgConfirmUnbondedTokenSweepProtoMsg): _223.MsgConfirmUnbondedTokenSweep;
            toProto(message: _223.MsgConfirmUnbondedTokenSweep): Uint8Array;
            toProtoMsg(message: _223.MsgConfirmUnbondedTokenSweep): _223.MsgConfirmUnbondedTokenSweepProtoMsg;
        };
        MsgConfirmUnbondedTokenSweepResponse: {
            typeUrl: string;
            encode(_: _223.MsgConfirmUnbondedTokenSweepResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgConfirmUnbondedTokenSweepResponse;
            fromPartial(_: Partial<_223.MsgConfirmUnbondedTokenSweepResponse>): _223.MsgConfirmUnbondedTokenSweepResponse;
            fromAmino(_: _223.MsgConfirmUnbondedTokenSweepResponseAmino): _223.MsgConfirmUnbondedTokenSweepResponse;
            toAmino(_: _223.MsgConfirmUnbondedTokenSweepResponse): _223.MsgConfirmUnbondedTokenSweepResponseAmino;
            fromAminoMsg(object: _223.MsgConfirmUnbondedTokenSweepResponseAminoMsg): _223.MsgConfirmUnbondedTokenSweepResponse;
            fromProtoMsg(message: _223.MsgConfirmUnbondedTokenSweepResponseProtoMsg): _223.MsgConfirmUnbondedTokenSweepResponse;
            toProto(message: _223.MsgConfirmUnbondedTokenSweepResponse): Uint8Array;
            toProtoMsg(message: _223.MsgConfirmUnbondedTokenSweepResponse): _223.MsgConfirmUnbondedTokenSweepResponseProtoMsg;
        };
        MsgAdjustDelegatedBalance: {
            typeUrl: string;
            encode(message: _223.MsgAdjustDelegatedBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgAdjustDelegatedBalance;
            fromPartial(object: Partial<_223.MsgAdjustDelegatedBalance>): _223.MsgAdjustDelegatedBalance;
            fromAmino(object: _223.MsgAdjustDelegatedBalanceAmino): _223.MsgAdjustDelegatedBalance;
            toAmino(message: _223.MsgAdjustDelegatedBalance): _223.MsgAdjustDelegatedBalanceAmino;
            fromAminoMsg(object: _223.MsgAdjustDelegatedBalanceAminoMsg): _223.MsgAdjustDelegatedBalance;
            toAminoMsg(message: _223.MsgAdjustDelegatedBalance): _223.MsgAdjustDelegatedBalanceAminoMsg;
            fromProtoMsg(message: _223.MsgAdjustDelegatedBalanceProtoMsg): _223.MsgAdjustDelegatedBalance;
            toProto(message: _223.MsgAdjustDelegatedBalance): Uint8Array;
            toProtoMsg(message: _223.MsgAdjustDelegatedBalance): _223.MsgAdjustDelegatedBalanceProtoMsg;
        };
        MsgAdjustDelegatedBalanceResponse: {
            typeUrl: string;
            encode(_: _223.MsgAdjustDelegatedBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgAdjustDelegatedBalanceResponse;
            fromPartial(_: Partial<_223.MsgAdjustDelegatedBalanceResponse>): _223.MsgAdjustDelegatedBalanceResponse;
            fromAmino(_: _223.MsgAdjustDelegatedBalanceResponseAmino): _223.MsgAdjustDelegatedBalanceResponse;
            toAmino(_: _223.MsgAdjustDelegatedBalanceResponse): _223.MsgAdjustDelegatedBalanceResponseAmino;
            fromAminoMsg(object: _223.MsgAdjustDelegatedBalanceResponseAminoMsg): _223.MsgAdjustDelegatedBalanceResponse;
            fromProtoMsg(message: _223.MsgAdjustDelegatedBalanceResponseProtoMsg): _223.MsgAdjustDelegatedBalanceResponse;
            toProto(message: _223.MsgAdjustDelegatedBalanceResponse): Uint8Array;
            toProtoMsg(message: _223.MsgAdjustDelegatedBalanceResponse): _223.MsgAdjustDelegatedBalanceResponseProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _223.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_223.MsgUpdateInnerRedemptionRateBounds>): _223.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _223.MsgUpdateInnerRedemptionRateBoundsAmino): _223.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _223.MsgUpdateInnerRedemptionRateBounds): _223.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _223.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _223.MsgUpdateInnerRedemptionRateBounds;
            toAminoMsg(message: _223.MsgUpdateInnerRedemptionRateBounds): _223.MsgUpdateInnerRedemptionRateBoundsAminoMsg;
            fromProtoMsg(message: _223.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _223.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _223.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _223.MsgUpdateInnerRedemptionRateBounds): _223.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _223.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_223.MsgUpdateInnerRedemptionRateBoundsResponse>): _223.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _223.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _223.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _223.MsgUpdateInnerRedemptionRateBoundsResponse): _223.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _223.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _223.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _223.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _223.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _223.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _223.MsgUpdateInnerRedemptionRateBoundsResponse): _223.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _223.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgResumeHostZone;
            fromPartial(object: Partial<_223.MsgResumeHostZone>): _223.MsgResumeHostZone;
            fromAmino(object: _223.MsgResumeHostZoneAmino): _223.MsgResumeHostZone;
            toAmino(message: _223.MsgResumeHostZone): _223.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _223.MsgResumeHostZoneAminoMsg): _223.MsgResumeHostZone;
            toAminoMsg(message: _223.MsgResumeHostZone): _223.MsgResumeHostZoneAminoMsg;
            fromProtoMsg(message: _223.MsgResumeHostZoneProtoMsg): _223.MsgResumeHostZone;
            toProto(message: _223.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _223.MsgResumeHostZone): _223.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _223.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_223.MsgResumeHostZoneResponse>): _223.MsgResumeHostZoneResponse;
            fromAmino(_: _223.MsgResumeHostZoneResponseAmino): _223.MsgResumeHostZoneResponse;
            toAmino(_: _223.MsgResumeHostZoneResponse): _223.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _223.MsgResumeHostZoneResponseAminoMsg): _223.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _223.MsgResumeHostZoneResponseProtoMsg): _223.MsgResumeHostZoneResponse;
            toProto(message: _223.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _223.MsgResumeHostZoneResponse): _223.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgRefreshRedemptionRate: {
            typeUrl: string;
            encode(message: _223.MsgRefreshRedemptionRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgRefreshRedemptionRate;
            fromPartial(object: Partial<_223.MsgRefreshRedemptionRate>): _223.MsgRefreshRedemptionRate;
            fromAmino(object: _223.MsgRefreshRedemptionRateAmino): _223.MsgRefreshRedemptionRate;
            toAmino(message: _223.MsgRefreshRedemptionRate): _223.MsgRefreshRedemptionRateAmino;
            fromAminoMsg(object: _223.MsgRefreshRedemptionRateAminoMsg): _223.MsgRefreshRedemptionRate;
            toAminoMsg(message: _223.MsgRefreshRedemptionRate): _223.MsgRefreshRedemptionRateAminoMsg;
            fromProtoMsg(message: _223.MsgRefreshRedemptionRateProtoMsg): _223.MsgRefreshRedemptionRate;
            toProto(message: _223.MsgRefreshRedemptionRate): Uint8Array;
            toProtoMsg(message: _223.MsgRefreshRedemptionRate): _223.MsgRefreshRedemptionRateProtoMsg;
        };
        MsgRefreshRedemptionRateResponse: {
            typeUrl: string;
            encode(_: _223.MsgRefreshRedemptionRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgRefreshRedemptionRateResponse;
            fromPartial(_: Partial<_223.MsgRefreshRedemptionRateResponse>): _223.MsgRefreshRedemptionRateResponse;
            fromAmino(_: _223.MsgRefreshRedemptionRateResponseAmino): _223.MsgRefreshRedemptionRateResponse;
            toAmino(_: _223.MsgRefreshRedemptionRateResponse): _223.MsgRefreshRedemptionRateResponseAmino;
            fromAminoMsg(object: _223.MsgRefreshRedemptionRateResponseAminoMsg): _223.MsgRefreshRedemptionRateResponse;
            fromProtoMsg(message: _223.MsgRefreshRedemptionRateResponseProtoMsg): _223.MsgRefreshRedemptionRateResponse;
            toProto(message: _223.MsgRefreshRedemptionRateResponse): Uint8Array;
            toProtoMsg(message: _223.MsgRefreshRedemptionRateResponse): _223.MsgRefreshRedemptionRateResponseProtoMsg;
        };
        MsgOverwriteDelegationRecord: {
            typeUrl: string;
            encode(message: _223.MsgOverwriteDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgOverwriteDelegationRecord;
            fromPartial(object: Partial<_223.MsgOverwriteDelegationRecord>): _223.MsgOverwriteDelegationRecord;
            fromAmino(object: _223.MsgOverwriteDelegationRecordAmino): _223.MsgOverwriteDelegationRecord;
            toAmino(message: _223.MsgOverwriteDelegationRecord): _223.MsgOverwriteDelegationRecordAmino;
            fromAminoMsg(object: _223.MsgOverwriteDelegationRecordAminoMsg): _223.MsgOverwriteDelegationRecord;
            toAminoMsg(message: _223.MsgOverwriteDelegationRecord): _223.MsgOverwriteDelegationRecordAminoMsg;
            fromProtoMsg(message: _223.MsgOverwriteDelegationRecordProtoMsg): _223.MsgOverwriteDelegationRecord;
            toProto(message: _223.MsgOverwriteDelegationRecord): Uint8Array;
            toProtoMsg(message: _223.MsgOverwriteDelegationRecord): _223.MsgOverwriteDelegationRecordProtoMsg;
        };
        MsgOverwriteDelegationRecordResponse: {
            typeUrl: string;
            encode(_: _223.MsgOverwriteDelegationRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgOverwriteDelegationRecordResponse;
            fromPartial(_: Partial<_223.MsgOverwriteDelegationRecordResponse>): _223.MsgOverwriteDelegationRecordResponse;
            fromAmino(_: _223.MsgOverwriteDelegationRecordResponseAmino): _223.MsgOverwriteDelegationRecordResponse;
            toAmino(_: _223.MsgOverwriteDelegationRecordResponse): _223.MsgOverwriteDelegationRecordResponseAmino;
            fromAminoMsg(object: _223.MsgOverwriteDelegationRecordResponseAminoMsg): _223.MsgOverwriteDelegationRecordResponse;
            fromProtoMsg(message: _223.MsgOverwriteDelegationRecordResponseProtoMsg): _223.MsgOverwriteDelegationRecordResponse;
            toProto(message: _223.MsgOverwriteDelegationRecordResponse): Uint8Array;
            toProtoMsg(message: _223.MsgOverwriteDelegationRecordResponse): _223.MsgOverwriteDelegationRecordResponseProtoMsg;
        };
        MsgOverwriteUnbondingRecord: {
            typeUrl: string;
            encode(message: _223.MsgOverwriteUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgOverwriteUnbondingRecord;
            fromPartial(object: Partial<_223.MsgOverwriteUnbondingRecord>): _223.MsgOverwriteUnbondingRecord;
            fromAmino(object: _223.MsgOverwriteUnbondingRecordAmino): _223.MsgOverwriteUnbondingRecord;
            toAmino(message: _223.MsgOverwriteUnbondingRecord): _223.MsgOverwriteUnbondingRecordAmino;
            fromAminoMsg(object: _223.MsgOverwriteUnbondingRecordAminoMsg): _223.MsgOverwriteUnbondingRecord;
            toAminoMsg(message: _223.MsgOverwriteUnbondingRecord): _223.MsgOverwriteUnbondingRecordAminoMsg;
            fromProtoMsg(message: _223.MsgOverwriteUnbondingRecordProtoMsg): _223.MsgOverwriteUnbondingRecord;
            toProto(message: _223.MsgOverwriteUnbondingRecord): Uint8Array;
            toProtoMsg(message: _223.MsgOverwriteUnbondingRecord): _223.MsgOverwriteUnbondingRecordProtoMsg;
        };
        MsgOverwriteUnbondingRecordResponse: {
            typeUrl: string;
            encode(_: _223.MsgOverwriteUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgOverwriteUnbondingRecordResponse;
            fromPartial(_: Partial<_223.MsgOverwriteUnbondingRecordResponse>): _223.MsgOverwriteUnbondingRecordResponse;
            fromAmino(_: _223.MsgOverwriteUnbondingRecordResponseAmino): _223.MsgOverwriteUnbondingRecordResponse;
            toAmino(_: _223.MsgOverwriteUnbondingRecordResponse): _223.MsgOverwriteUnbondingRecordResponseAmino;
            fromAminoMsg(object: _223.MsgOverwriteUnbondingRecordResponseAminoMsg): _223.MsgOverwriteUnbondingRecordResponse;
            fromProtoMsg(message: _223.MsgOverwriteUnbondingRecordResponseProtoMsg): _223.MsgOverwriteUnbondingRecordResponse;
            toProto(message: _223.MsgOverwriteUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _223.MsgOverwriteUnbondingRecordResponse): _223.MsgOverwriteUnbondingRecordResponseProtoMsg;
        };
        MsgOverwriteRedemptionRecord: {
            typeUrl: string;
            encode(message: _223.MsgOverwriteRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgOverwriteRedemptionRecord;
            fromPartial(object: Partial<_223.MsgOverwriteRedemptionRecord>): _223.MsgOverwriteRedemptionRecord;
            fromAmino(object: _223.MsgOverwriteRedemptionRecordAmino): _223.MsgOverwriteRedemptionRecord;
            toAmino(message: _223.MsgOverwriteRedemptionRecord): _223.MsgOverwriteRedemptionRecordAmino;
            fromAminoMsg(object: _223.MsgOverwriteRedemptionRecordAminoMsg): _223.MsgOverwriteRedemptionRecord;
            toAminoMsg(message: _223.MsgOverwriteRedemptionRecord): _223.MsgOverwriteRedemptionRecordAminoMsg;
            fromProtoMsg(message: _223.MsgOverwriteRedemptionRecordProtoMsg): _223.MsgOverwriteRedemptionRecord;
            toProto(message: _223.MsgOverwriteRedemptionRecord): Uint8Array;
            toProtoMsg(message: _223.MsgOverwriteRedemptionRecord): _223.MsgOverwriteRedemptionRecordProtoMsg;
        };
        MsgOverwriteRedemptionRecordResponse: {
            typeUrl: string;
            encode(_: _223.MsgOverwriteRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgOverwriteRedemptionRecordResponse;
            fromPartial(_: Partial<_223.MsgOverwriteRedemptionRecordResponse>): _223.MsgOverwriteRedemptionRecordResponse;
            fromAmino(_: _223.MsgOverwriteRedemptionRecordResponseAmino): _223.MsgOverwriteRedemptionRecordResponse;
            toAmino(_: _223.MsgOverwriteRedemptionRecordResponse): _223.MsgOverwriteRedemptionRecordResponseAmino;
            fromAminoMsg(object: _223.MsgOverwriteRedemptionRecordResponseAminoMsg): _223.MsgOverwriteRedemptionRecordResponse;
            fromProtoMsg(message: _223.MsgOverwriteRedemptionRecordResponseProtoMsg): _223.MsgOverwriteRedemptionRecordResponse;
            toProto(message: _223.MsgOverwriteRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _223.MsgOverwriteRedemptionRecordResponse): _223.MsgOverwriteRedemptionRecordResponseProtoMsg;
        };
        MsgSetOperatorAddress: {
            typeUrl: string;
            encode(message: _223.MsgSetOperatorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgSetOperatorAddress;
            fromPartial(object: Partial<_223.MsgSetOperatorAddress>): _223.MsgSetOperatorAddress;
            fromAmino(object: _223.MsgSetOperatorAddressAmino): _223.MsgSetOperatorAddress;
            toAmino(message: _223.MsgSetOperatorAddress): _223.MsgSetOperatorAddressAmino;
            fromAminoMsg(object: _223.MsgSetOperatorAddressAminoMsg): _223.MsgSetOperatorAddress;
            toAminoMsg(message: _223.MsgSetOperatorAddress): _223.MsgSetOperatorAddressAminoMsg;
            fromProtoMsg(message: _223.MsgSetOperatorAddressProtoMsg): _223.MsgSetOperatorAddress;
            toProto(message: _223.MsgSetOperatorAddress): Uint8Array;
            toProtoMsg(message: _223.MsgSetOperatorAddress): _223.MsgSetOperatorAddressProtoMsg;
        };
        MsgSetOperatorAddressResponse: {
            typeUrl: string;
            encode(_: _223.MsgSetOperatorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.MsgSetOperatorAddressResponse;
            fromPartial(_: Partial<_223.MsgSetOperatorAddressResponse>): _223.MsgSetOperatorAddressResponse;
            fromAmino(_: _223.MsgSetOperatorAddressResponseAmino): _223.MsgSetOperatorAddressResponse;
            toAmino(_: _223.MsgSetOperatorAddressResponse): _223.MsgSetOperatorAddressResponseAmino;
            fromAminoMsg(object: _223.MsgSetOperatorAddressResponseAminoMsg): _223.MsgSetOperatorAddressResponse;
            fromProtoMsg(message: _223.MsgSetOperatorAddressResponseProtoMsg): _223.MsgSetOperatorAddressResponse;
            toProto(message: _223.MsgSetOperatorAddressResponse): Uint8Array;
            toProtoMsg(message: _223.MsgSetOperatorAddressResponse): _223.MsgSetOperatorAddressResponseProtoMsg;
        };
        delegationRecordStatusFromJSON(object: any): _222.DelegationRecordStatus;
        delegationRecordStatusToJSON(object: _222.DelegationRecordStatus): string;
        unbondingRecordStatusFromJSON(object: any): _222.UnbondingRecordStatus;
        unbondingRecordStatusToJSON(object: _222.UnbondingRecordStatus): string;
        DelegationRecordStatus: typeof _222.DelegationRecordStatus;
        DelegationRecordStatusSDKType: typeof _222.DelegationRecordStatus;
        DelegationRecordStatusAmino: typeof _222.DelegationRecordStatus;
        UnbondingRecordStatus: typeof _222.UnbondingRecordStatus;
        UnbondingRecordStatusSDKType: typeof _222.UnbondingRecordStatus;
        UnbondingRecordStatusAmino: typeof _222.UnbondingRecordStatus;
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
        DelegationRecord: {
            typeUrl: string;
            encode(message: _222.DelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.DelegationRecord;
            fromPartial(object: Partial<_222.DelegationRecord>): _222.DelegationRecord;
            fromAmino(object: _222.DelegationRecordAmino): _222.DelegationRecord;
            toAmino(message: _222.DelegationRecord): _222.DelegationRecordAmino;
            fromAminoMsg(object: _222.DelegationRecordAminoMsg): _222.DelegationRecord;
            fromProtoMsg(message: _222.DelegationRecordProtoMsg): _222.DelegationRecord;
            toProto(message: _222.DelegationRecord): Uint8Array;
            toProtoMsg(message: _222.DelegationRecord): _222.DelegationRecordProtoMsg;
        };
        UnbondingRecord: {
            typeUrl: string;
            encode(message: _222.UnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.UnbondingRecord;
            fromPartial(object: Partial<_222.UnbondingRecord>): _222.UnbondingRecord;
            fromAmino(object: _222.UnbondingRecordAmino): _222.UnbondingRecord;
            toAmino(message: _222.UnbondingRecord): _222.UnbondingRecordAmino;
            fromAminoMsg(object: _222.UnbondingRecordAminoMsg): _222.UnbondingRecord;
            fromProtoMsg(message: _222.UnbondingRecordProtoMsg): _222.UnbondingRecord;
            toProto(message: _222.UnbondingRecord): Uint8Array;
            toProtoMsg(message: _222.UnbondingRecord): _222.UnbondingRecordProtoMsg;
        };
        RedemptionRecord: {
            typeUrl: string;
            encode(message: _222.RedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.RedemptionRecord;
            fromPartial(object: Partial<_222.RedemptionRecord>): _222.RedemptionRecord;
            fromAmino(object: _222.RedemptionRecordAmino): _222.RedemptionRecord;
            toAmino(message: _222.RedemptionRecord): _222.RedemptionRecordAmino;
            fromAminoMsg(object: _222.RedemptionRecordAminoMsg): _222.RedemptionRecord;
            fromProtoMsg(message: _222.RedemptionRecordProtoMsg): _222.RedemptionRecord;
            toProto(message: _222.RedemptionRecord): Uint8Array;
            toProtoMsg(message: _222.RedemptionRecord): _222.RedemptionRecordProtoMsg;
        };
        SlashRecord: {
            typeUrl: string;
            encode(message: _222.SlashRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.SlashRecord;
            fromPartial(object: Partial<_222.SlashRecord>): _222.SlashRecord;
            fromAmino(object: _222.SlashRecordAmino): _222.SlashRecord;
            toAmino(message: _222.SlashRecord): _222.SlashRecordAmino;
            fromAminoMsg(object: _222.SlashRecordAminoMsg): _222.SlashRecord;
            fromProtoMsg(message: _222.SlashRecordProtoMsg): _222.SlashRecord;
            toProto(message: _222.SlashRecord): Uint8Array;
            toProtoMsg(message: _222.SlashRecord): _222.SlashRecordProtoMsg;
        };
        QueryHostZoneRequest: {
            typeUrl: string;
            encode(_: _221.QueryHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.QueryHostZoneRequest;
            fromPartial(_: Partial<_221.QueryHostZoneRequest>): _221.QueryHostZoneRequest;
            fromAmino(_: _221.QueryHostZoneRequestAmino): _221.QueryHostZoneRequest;
            toAmino(_: _221.QueryHostZoneRequest): _221.QueryHostZoneRequestAmino;
            fromAminoMsg(object: _221.QueryHostZoneRequestAminoMsg): _221.QueryHostZoneRequest;
            fromProtoMsg(message: _221.QueryHostZoneRequestProtoMsg): _221.QueryHostZoneRequest;
            toProto(message: _221.QueryHostZoneRequest): Uint8Array;
            toProtoMsg(message: _221.QueryHostZoneRequest): _221.QueryHostZoneRequestProtoMsg;
        };
        QueryHostZoneResponse: {
            typeUrl: string;
            encode(message: _221.QueryHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.QueryHostZoneResponse;
            fromPartial(object: Partial<_221.QueryHostZoneResponse>): _221.QueryHostZoneResponse;
            fromAmino(object: _221.QueryHostZoneResponseAmino): _221.QueryHostZoneResponse;
            toAmino(message: _221.QueryHostZoneResponse): _221.QueryHostZoneResponseAmino;
            fromAminoMsg(object: _221.QueryHostZoneResponseAminoMsg): _221.QueryHostZoneResponse;
            fromProtoMsg(message: _221.QueryHostZoneResponseProtoMsg): _221.QueryHostZoneResponse;
            toProto(message: _221.QueryHostZoneResponse): Uint8Array;
            toProtoMsg(message: _221.QueryHostZoneResponse): _221.QueryHostZoneResponseProtoMsg;
        };
        QueryDelegationRecordsRequest: {
            typeUrl: string;
            encode(message: _221.QueryDelegationRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.QueryDelegationRecordsRequest;
            fromPartial(object: Partial<_221.QueryDelegationRecordsRequest>): _221.QueryDelegationRecordsRequest;
            fromAmino(object: _221.QueryDelegationRecordsRequestAmino): _221.QueryDelegationRecordsRequest;
            toAmino(message: _221.QueryDelegationRecordsRequest): _221.QueryDelegationRecordsRequestAmino;
            fromAminoMsg(object: _221.QueryDelegationRecordsRequestAminoMsg): _221.QueryDelegationRecordsRequest;
            fromProtoMsg(message: _221.QueryDelegationRecordsRequestProtoMsg): _221.QueryDelegationRecordsRequest;
            toProto(message: _221.QueryDelegationRecordsRequest): Uint8Array;
            toProtoMsg(message: _221.QueryDelegationRecordsRequest): _221.QueryDelegationRecordsRequestProtoMsg;
        };
        QueryDelegationRecordsResponse: {
            typeUrl: string;
            encode(message: _221.QueryDelegationRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.QueryDelegationRecordsResponse;
            fromPartial(object: Partial<_221.QueryDelegationRecordsResponse>): _221.QueryDelegationRecordsResponse;
            fromAmino(object: _221.QueryDelegationRecordsResponseAmino): _221.QueryDelegationRecordsResponse;
            toAmino(message: _221.QueryDelegationRecordsResponse): _221.QueryDelegationRecordsResponseAmino;
            fromAminoMsg(object: _221.QueryDelegationRecordsResponseAminoMsg): _221.QueryDelegationRecordsResponse;
            fromProtoMsg(message: _221.QueryDelegationRecordsResponseProtoMsg): _221.QueryDelegationRecordsResponse;
            toProto(message: _221.QueryDelegationRecordsResponse): Uint8Array;
            toProtoMsg(message: _221.QueryDelegationRecordsResponse): _221.QueryDelegationRecordsResponseProtoMsg;
        };
        QueryUnbondingRecordsRequest: {
            typeUrl: string;
            encode(message: _221.QueryUnbondingRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.QueryUnbondingRecordsRequest;
            fromPartial(object: Partial<_221.QueryUnbondingRecordsRequest>): _221.QueryUnbondingRecordsRequest;
            fromAmino(object: _221.QueryUnbondingRecordsRequestAmino): _221.QueryUnbondingRecordsRequest;
            toAmino(message: _221.QueryUnbondingRecordsRequest): _221.QueryUnbondingRecordsRequestAmino;
            fromAminoMsg(object: _221.QueryUnbondingRecordsRequestAminoMsg): _221.QueryUnbondingRecordsRequest;
            fromProtoMsg(message: _221.QueryUnbondingRecordsRequestProtoMsg): _221.QueryUnbondingRecordsRequest;
            toProto(message: _221.QueryUnbondingRecordsRequest): Uint8Array;
            toProtoMsg(message: _221.QueryUnbondingRecordsRequest): _221.QueryUnbondingRecordsRequestProtoMsg;
        };
        QueryUnbondingRecordsResponse: {
            typeUrl: string;
            encode(message: _221.QueryUnbondingRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.QueryUnbondingRecordsResponse;
            fromPartial(object: Partial<_221.QueryUnbondingRecordsResponse>): _221.QueryUnbondingRecordsResponse;
            fromAmino(object: _221.QueryUnbondingRecordsResponseAmino): _221.QueryUnbondingRecordsResponse;
            toAmino(message: _221.QueryUnbondingRecordsResponse): _221.QueryUnbondingRecordsResponseAmino;
            fromAminoMsg(object: _221.QueryUnbondingRecordsResponseAminoMsg): _221.QueryUnbondingRecordsResponse;
            fromProtoMsg(message: _221.QueryUnbondingRecordsResponseProtoMsg): _221.QueryUnbondingRecordsResponse;
            toProto(message: _221.QueryUnbondingRecordsResponse): Uint8Array;
            toProtoMsg(message: _221.QueryUnbondingRecordsResponse): _221.QueryUnbondingRecordsResponseProtoMsg;
        };
        QueryRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _221.QueryRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.QueryRedemptionRecordRequest;
            fromPartial(object: Partial<_221.QueryRedemptionRecordRequest>): _221.QueryRedemptionRecordRequest;
            fromAmino(object: _221.QueryRedemptionRecordRequestAmino): _221.QueryRedemptionRecordRequest;
            toAmino(message: _221.QueryRedemptionRecordRequest): _221.QueryRedemptionRecordRequestAmino;
            fromAminoMsg(object: _221.QueryRedemptionRecordRequestAminoMsg): _221.QueryRedemptionRecordRequest;
            fromProtoMsg(message: _221.QueryRedemptionRecordRequestProtoMsg): _221.QueryRedemptionRecordRequest;
            toProto(message: _221.QueryRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _221.QueryRedemptionRecordRequest): _221.QueryRedemptionRecordRequestProtoMsg;
        };
        QueryRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _221.QueryRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.QueryRedemptionRecordResponse;
            fromPartial(object: Partial<_221.QueryRedemptionRecordResponse>): _221.QueryRedemptionRecordResponse;
            fromAmino(object: _221.QueryRedemptionRecordResponseAmino): _221.QueryRedemptionRecordResponse;
            toAmino(message: _221.QueryRedemptionRecordResponse): _221.QueryRedemptionRecordResponseAmino;
            fromAminoMsg(object: _221.QueryRedemptionRecordResponseAminoMsg): _221.QueryRedemptionRecordResponse;
            fromProtoMsg(message: _221.QueryRedemptionRecordResponseProtoMsg): _221.QueryRedemptionRecordResponse;
            toProto(message: _221.QueryRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _221.QueryRedemptionRecordResponse): _221.QueryRedemptionRecordResponseProtoMsg;
        };
        QueryRedemptionRecordsRequest: {
            typeUrl: string;
            encode(message: _221.QueryRedemptionRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.QueryRedemptionRecordsRequest;
            fromPartial(object: Partial<_221.QueryRedemptionRecordsRequest>): _221.QueryRedemptionRecordsRequest;
            fromAmino(object: _221.QueryRedemptionRecordsRequestAmino): _221.QueryRedemptionRecordsRequest;
            toAmino(message: _221.QueryRedemptionRecordsRequest): _221.QueryRedemptionRecordsRequestAmino;
            fromAminoMsg(object: _221.QueryRedemptionRecordsRequestAminoMsg): _221.QueryRedemptionRecordsRequest;
            fromProtoMsg(message: _221.QueryRedemptionRecordsRequestProtoMsg): _221.QueryRedemptionRecordsRequest;
            toProto(message: _221.QueryRedemptionRecordsRequest): Uint8Array;
            toProtoMsg(message: _221.QueryRedemptionRecordsRequest): _221.QueryRedemptionRecordsRequestProtoMsg;
        };
        QueryRedemptionRecordsResponse: {
            typeUrl: string;
            encode(message: _221.QueryRedemptionRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.QueryRedemptionRecordsResponse;
            fromPartial(object: Partial<_221.QueryRedemptionRecordsResponse>): _221.QueryRedemptionRecordsResponse;
            fromAmino(object: _221.QueryRedemptionRecordsResponseAmino): _221.QueryRedemptionRecordsResponse;
            toAmino(message: _221.QueryRedemptionRecordsResponse): _221.QueryRedemptionRecordsResponseAmino;
            fromAminoMsg(object: _221.QueryRedemptionRecordsResponseAminoMsg): _221.QueryRedemptionRecordsResponse;
            fromProtoMsg(message: _221.QueryRedemptionRecordsResponseProtoMsg): _221.QueryRedemptionRecordsResponse;
            toProto(message: _221.QueryRedemptionRecordsResponse): Uint8Array;
            toProtoMsg(message: _221.QueryRedemptionRecordsResponse): _221.QueryRedemptionRecordsResponseProtoMsg;
        };
        QuerySlashRecordsRequest: {
            typeUrl: string;
            encode(_: _221.QuerySlashRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.QuerySlashRecordsRequest;
            fromPartial(_: Partial<_221.QuerySlashRecordsRequest>): _221.QuerySlashRecordsRequest;
            fromAmino(_: _221.QuerySlashRecordsRequestAmino): _221.QuerySlashRecordsRequest;
            toAmino(_: _221.QuerySlashRecordsRequest): _221.QuerySlashRecordsRequestAmino;
            fromAminoMsg(object: _221.QuerySlashRecordsRequestAminoMsg): _221.QuerySlashRecordsRequest;
            fromProtoMsg(message: _221.QuerySlashRecordsRequestProtoMsg): _221.QuerySlashRecordsRequest;
            toProto(message: _221.QuerySlashRecordsRequest): Uint8Array;
            toProtoMsg(message: _221.QuerySlashRecordsRequest): _221.QuerySlashRecordsRequestProtoMsg;
        };
        QuerySlashRecordsResponse: {
            typeUrl: string;
            encode(message: _221.QuerySlashRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.QuerySlashRecordsResponse;
            fromPartial(object: Partial<_221.QuerySlashRecordsResponse>): _221.QuerySlashRecordsResponse;
            fromAmino(object: _221.QuerySlashRecordsResponseAmino): _221.QuerySlashRecordsResponse;
            toAmino(message: _221.QuerySlashRecordsResponse): _221.QuerySlashRecordsResponseAmino;
            fromAminoMsg(object: _221.QuerySlashRecordsResponseAminoMsg): _221.QuerySlashRecordsResponse;
            fromProtoMsg(message: _221.QuerySlashRecordsResponseProtoMsg): _221.QuerySlashRecordsResponse;
            toProto(message: _221.QuerySlashRecordsResponse): Uint8Array;
            toProtoMsg(message: _221.QuerySlashRecordsResponse): _221.QuerySlashRecordsResponseProtoMsg;
        };
        RedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _221.RedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.RedemptionRecordResponse;
            fromPartial(object: Partial<_221.RedemptionRecordResponse>): _221.RedemptionRecordResponse;
            fromAmino(object: _221.RedemptionRecordResponseAmino): _221.RedemptionRecordResponse;
            toAmino(message: _221.RedemptionRecordResponse): _221.RedemptionRecordResponseAmino;
            fromAminoMsg(object: _221.RedemptionRecordResponseAminoMsg): _221.RedemptionRecordResponse;
            fromProtoMsg(message: _221.RedemptionRecordResponseProtoMsg): _221.RedemptionRecordResponse;
            toProto(message: _221.RedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _221.RedemptionRecordResponse): _221.RedemptionRecordResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _220.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _220.Params;
            fromPartial(_: Partial<_220.Params>): _220.Params;
            fromAmino(_: _220.ParamsAmino): _220.Params;
            toAmino(_: _220.Params): _220.ParamsAmino;
            fromAminoMsg(object: _220.ParamsAminoMsg): _220.Params;
            fromProtoMsg(message: _220.ParamsProtoMsg): _220.Params;
            toProto(message: _220.Params): Uint8Array;
            toProtoMsg(message: _220.Params): _220.ParamsProtoMsg;
        };
        TransferInProgressRecordIds: {
            typeUrl: string;
            encode(message: _220.TransferInProgressRecordIds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _220.TransferInProgressRecordIds;
            fromPartial(object: Partial<_220.TransferInProgressRecordIds>): _220.TransferInProgressRecordIds;
            fromAmino(object: _220.TransferInProgressRecordIdsAmino): _220.TransferInProgressRecordIds;
            toAmino(message: _220.TransferInProgressRecordIds): _220.TransferInProgressRecordIdsAmino;
            fromAminoMsg(object: _220.TransferInProgressRecordIdsAminoMsg): _220.TransferInProgressRecordIds;
            fromProtoMsg(message: _220.TransferInProgressRecordIdsProtoMsg): _220.TransferInProgressRecordIds;
            toProto(message: _220.TransferInProgressRecordIds): Uint8Array;
            toProtoMsg(message: _220.TransferInProgressRecordIds): _220.TransferInProgressRecordIdsProtoMsg;
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
    const stakeibc: {
        MsgClientImpl: typeof _393.MsgClientImpl;
        QueryClientImpl: typeof _383.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _233.QueryParamsRequest): Promise<_233.QueryParamsResponse>;
            validators(request: _233.QueryGetValidatorsRequest): Promise<_233.QueryGetValidatorsResponse>;
            hostZone(request: _233.QueryGetHostZoneRequest): Promise<_233.QueryGetHostZoneResponse>;
            hostZoneAll(request?: _233.QueryAllHostZoneRequest): Promise<_233.QueryAllHostZoneResponse>;
            moduleAddress(request: _233.QueryModuleAddressRequest): Promise<_233.QueryModuleAddressResponse>;
            interchainAccountFromAddress(request: _233.QueryInterchainAccountFromAddressRequest): Promise<_233.QueryInterchainAccountFromAddressResponse>;
            epochTracker(request: _233.QueryGetEpochTrackerRequest): Promise<_233.QueryGetEpochTrackerResponse>;
            epochTrackerAll(request?: _233.QueryAllEpochTrackerRequest): Promise<_233.QueryAllEpochTrackerResponse>;
            nextPacketSequence(request: _233.QueryGetNextPacketSequenceRequest): Promise<_233.QueryGetNextPacketSequenceResponse>;
            addressUnbondings(request: _233.QueryAddressUnbondings): Promise<_233.QueryAddressUnbondingsResponse>;
            allTradeRoutes(request?: _233.QueryAllTradeRoutes): Promise<_233.QueryAllTradeRoutesResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _235.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lSMLiquidStake(value: _235.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _235.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                registerHostZone(value: _235.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimUndelegatedTokens(value: _235.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                rebalanceValidators(value: _235.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addValidators(value: _235.MsgAddValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                changeValidatorWeight(value: _235.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteValidator(value: _235.MsgDeleteValidator): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreInterchainAccount(value: _235.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                closeDelegationChannel(value: _235.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateValidatorSharesExchRate(value: _235.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                calibrateDelegation(value: _235.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                clearBalance(value: _235.MsgClearBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _235.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _235.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createTradeRoute(value: _235.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteTradeRoute(value: _235.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateTradeRoute(value: _235.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setCommunityPoolRebate(value: _235.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                toggleTradeController(value: _235.MsgToggleTradeController): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateHostZoneParams(value: _235.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _235.MsgLiquidStake): {
                    typeUrl: string;
                    value: _235.MsgLiquidStake;
                };
                lSMLiquidStake(value: _235.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: _235.MsgLSMLiquidStake;
                };
                redeemStake(value: _235.MsgRedeemStake): {
                    typeUrl: string;
                    value: _235.MsgRedeemStake;
                };
                registerHostZone(value: _235.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _235.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _235.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _235.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _235.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _235.MsgRebalanceValidators;
                };
                addValidators(value: _235.MsgAddValidators): {
                    typeUrl: string;
                    value: _235.MsgAddValidators;
                };
                changeValidatorWeight(value: _235.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: _235.MsgChangeValidatorWeights;
                };
                deleteValidator(value: _235.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _235.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _235.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _235.MsgRestoreInterchainAccount;
                };
                closeDelegationChannel(value: _235.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: _235.MsgCloseDelegationChannel;
                };
                updateValidatorSharesExchRate(value: _235.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _235.MsgUpdateValidatorSharesExchRate;
                };
                calibrateDelegation(value: _235.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: _235.MsgCalibrateDelegation;
                };
                clearBalance(value: _235.MsgClearBalance): {
                    typeUrl: string;
                    value: _235.MsgClearBalance;
                };
                updateInnerRedemptionRateBounds(value: _235.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _235.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _235.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _235.MsgResumeHostZone;
                };
                createTradeRoute(value: _235.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: _235.MsgCreateTradeRoute;
                };
                deleteTradeRoute(value: _235.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: _235.MsgDeleteTradeRoute;
                };
                updateTradeRoute(value: _235.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: _235.MsgUpdateTradeRoute;
                };
                setCommunityPoolRebate(value: _235.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: _235.MsgSetCommunityPoolRebate;
                };
                toggleTradeController(value: _235.MsgToggleTradeController): {
                    typeUrl: string;
                    value: _235.MsgToggleTradeController;
                };
                updateHostZoneParams(value: _235.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: _235.MsgUpdateHostZoneParams;
                };
            };
            fromPartial: {
                liquidStake(value: _235.MsgLiquidStake): {
                    typeUrl: string;
                    value: _235.MsgLiquidStake;
                };
                lSMLiquidStake(value: _235.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: _235.MsgLSMLiquidStake;
                };
                redeemStake(value: _235.MsgRedeemStake): {
                    typeUrl: string;
                    value: _235.MsgRedeemStake;
                };
                registerHostZone(value: _235.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _235.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _235.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _235.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _235.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _235.MsgRebalanceValidators;
                };
                addValidators(value: _235.MsgAddValidators): {
                    typeUrl: string;
                    value: _235.MsgAddValidators;
                };
                changeValidatorWeight(value: _235.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: _235.MsgChangeValidatorWeights;
                };
                deleteValidator(value: _235.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _235.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _235.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _235.MsgRestoreInterchainAccount;
                };
                closeDelegationChannel(value: _235.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: _235.MsgCloseDelegationChannel;
                };
                updateValidatorSharesExchRate(value: _235.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _235.MsgUpdateValidatorSharesExchRate;
                };
                calibrateDelegation(value: _235.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: _235.MsgCalibrateDelegation;
                };
                clearBalance(value: _235.MsgClearBalance): {
                    typeUrl: string;
                    value: _235.MsgClearBalance;
                };
                updateInnerRedemptionRateBounds(value: _235.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _235.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _235.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _235.MsgResumeHostZone;
                };
                createTradeRoute(value: _235.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: _235.MsgCreateTradeRoute;
                };
                deleteTradeRoute(value: _235.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: _235.MsgDeleteTradeRoute;
                };
                updateTradeRoute(value: _235.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: _235.MsgUpdateTradeRoute;
                };
                setCommunityPoolRebate(value: _235.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: _235.MsgSetCommunityPoolRebate;
                };
                toggleTradeController(value: _235.MsgToggleTradeController): {
                    typeUrl: string;
                    value: _235.MsgToggleTradeController;
                };
                updateHostZoneParams(value: _235.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: _235.MsgUpdateHostZoneParams;
                };
            };
        };
        AminoConverter: {
            "/stride.stakeibc.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _235.MsgLiquidStake) => _235.MsgLiquidStakeAmino;
                fromAmino: (object: _235.MsgLiquidStakeAmino) => _235.MsgLiquidStake;
            };
            "/stride.stakeibc.MsgLSMLiquidStake": {
                aminoType: string;
                toAmino: (message: _235.MsgLSMLiquidStake) => _235.MsgLSMLiquidStakeAmino;
                fromAmino: (object: _235.MsgLSMLiquidStakeAmino) => _235.MsgLSMLiquidStake;
            };
            "/stride.stakeibc.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _235.MsgRedeemStake) => _235.MsgRedeemStakeAmino;
                fromAmino: (object: _235.MsgRedeemStakeAmino) => _235.MsgRedeemStake;
            };
            "/stride.stakeibc.MsgRegisterHostZone": {
                aminoType: string;
                toAmino: (message: _235.MsgRegisterHostZone) => _235.MsgRegisterHostZoneAmino;
                fromAmino: (object: _235.MsgRegisterHostZoneAmino) => _235.MsgRegisterHostZone;
            };
            "/stride.stakeibc.MsgClaimUndelegatedTokens": {
                aminoType: string;
                toAmino: (message: _235.MsgClaimUndelegatedTokens) => _235.MsgClaimUndelegatedTokensAmino;
                fromAmino: (object: _235.MsgClaimUndelegatedTokensAmino) => _235.MsgClaimUndelegatedTokens;
            };
            "/stride.stakeibc.MsgRebalanceValidators": {
                aminoType: string;
                toAmino: (message: _235.MsgRebalanceValidators) => _235.MsgRebalanceValidatorsAmino;
                fromAmino: (object: _235.MsgRebalanceValidatorsAmino) => _235.MsgRebalanceValidators;
            };
            "/stride.stakeibc.MsgAddValidators": {
                aminoType: string;
                toAmino: (message: _235.MsgAddValidators) => _235.MsgAddValidatorsAmino;
                fromAmino: (object: _235.MsgAddValidatorsAmino) => _235.MsgAddValidators;
            };
            "/stride.stakeibc.MsgChangeValidatorWeights": {
                aminoType: string;
                toAmino: (message: _235.MsgChangeValidatorWeights) => _235.MsgChangeValidatorWeightsAmino;
                fromAmino: (object: _235.MsgChangeValidatorWeightsAmino) => _235.MsgChangeValidatorWeights;
            };
            "/stride.stakeibc.MsgDeleteValidator": {
                aminoType: string;
                toAmino: (message: _235.MsgDeleteValidator) => _235.MsgDeleteValidatorAmino;
                fromAmino: (object: _235.MsgDeleteValidatorAmino) => _235.MsgDeleteValidator;
            };
            "/stride.stakeibc.MsgRestoreInterchainAccount": {
                aminoType: string;
                toAmino: (message: _235.MsgRestoreInterchainAccount) => _235.MsgRestoreInterchainAccountAmino;
                fromAmino: (object: _235.MsgRestoreInterchainAccountAmino) => _235.MsgRestoreInterchainAccount;
            };
            "/stride.stakeibc.MsgCloseDelegationChannel": {
                aminoType: string;
                toAmino: (message: _235.MsgCloseDelegationChannel) => _235.MsgCloseDelegationChannelAmino;
                fromAmino: (object: _235.MsgCloseDelegationChannelAmino) => _235.MsgCloseDelegationChannel;
            };
            "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
                aminoType: string;
                toAmino: (message: _235.MsgUpdateValidatorSharesExchRate) => _235.MsgUpdateValidatorSharesExchRateAmino;
                fromAmino: (object: _235.MsgUpdateValidatorSharesExchRateAmino) => _235.MsgUpdateValidatorSharesExchRate;
            };
            "/stride.stakeibc.MsgCalibrateDelegation": {
                aminoType: string;
                toAmino: (message: _235.MsgCalibrateDelegation) => _235.MsgCalibrateDelegationAmino;
                fromAmino: (object: _235.MsgCalibrateDelegationAmino) => _235.MsgCalibrateDelegation;
            };
            "/stride.stakeibc.MsgClearBalance": {
                aminoType: string;
                toAmino: (message: _235.MsgClearBalance) => _235.MsgClearBalanceAmino;
                fromAmino: (object: _235.MsgClearBalanceAmino) => _235.MsgClearBalance;
            };
            "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _235.MsgUpdateInnerRedemptionRateBounds) => _235.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _235.MsgUpdateInnerRedemptionRateBoundsAmino) => _235.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.stakeibc.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _235.MsgResumeHostZone) => _235.MsgResumeHostZoneAmino;
                fromAmino: (object: _235.MsgResumeHostZoneAmino) => _235.MsgResumeHostZone;
            };
            "/stride.stakeibc.MsgCreateTradeRoute": {
                aminoType: string;
                toAmino: (message: _235.MsgCreateTradeRoute) => _235.MsgCreateTradeRouteAmino;
                fromAmino: (object: _235.MsgCreateTradeRouteAmino) => _235.MsgCreateTradeRoute;
            };
            "/stride.stakeibc.MsgDeleteTradeRoute": {
                aminoType: string;
                toAmino: (message: _235.MsgDeleteTradeRoute) => _235.MsgDeleteTradeRouteAmino;
                fromAmino: (object: _235.MsgDeleteTradeRouteAmino) => _235.MsgDeleteTradeRoute;
            };
            "/stride.stakeibc.MsgUpdateTradeRoute": {
                aminoType: string;
                toAmino: (message: _235.MsgUpdateTradeRoute) => _235.MsgUpdateTradeRouteAmino;
                fromAmino: (object: _235.MsgUpdateTradeRouteAmino) => _235.MsgUpdateTradeRoute;
            };
            "/stride.stakeibc.MsgSetCommunityPoolRebate": {
                aminoType: string;
                toAmino: (message: _235.MsgSetCommunityPoolRebate) => _235.MsgSetCommunityPoolRebateAmino;
                fromAmino: (object: _235.MsgSetCommunityPoolRebateAmino) => _235.MsgSetCommunityPoolRebate;
            };
            "/stride.stakeibc.MsgToggleTradeController": {
                aminoType: string;
                toAmino: (message: _235.MsgToggleTradeController) => _235.MsgToggleTradeControllerAmino;
                fromAmino: (object: _235.MsgToggleTradeControllerAmino) => _235.MsgToggleTradeController;
            };
            "/stride.stakeibc.MsgUpdateHostZoneParams": {
                aminoType: string;
                toAmino: (message: _235.MsgUpdateHostZoneParams) => _235.MsgUpdateHostZoneParamsAmino;
                fromAmino: (object: _235.MsgUpdateHostZoneParamsAmino) => _235.MsgUpdateHostZoneParams;
            };
        };
        Validator: {
            typeUrl: string;
            encode(message: _236.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.Validator;
            fromPartial(object: Partial<_236.Validator>): _236.Validator;
            fromAmino(object: _236.ValidatorAmino): _236.Validator;
            toAmino(message: _236.Validator): _236.ValidatorAmino;
            fromAminoMsg(object: _236.ValidatorAminoMsg): _236.Validator;
            fromProtoMsg(message: _236.ValidatorProtoMsg): _236.Validator;
            toProto(message: _236.Validator): Uint8Array;
            toProtoMsg(message: _236.Validator): _236.ValidatorProtoMsg;
        };
        authzPermissionChangeFromJSON(object: any): _235.AuthzPermissionChange;
        authzPermissionChangeToJSON(object: _235.AuthzPermissionChange): string;
        AuthzPermissionChange: typeof _235.AuthzPermissionChange;
        AuthzPermissionChangeSDKType: typeof _235.AuthzPermissionChange;
        AuthzPermissionChangeAmino: typeof _235.AuthzPermissionChange;
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _235.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_235.MsgUpdateInnerRedemptionRateBounds>): _235.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _235.MsgUpdateInnerRedemptionRateBoundsAmino): _235.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _235.MsgUpdateInnerRedemptionRateBounds): _235.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _235.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _235.MsgUpdateInnerRedemptionRateBounds;
            fromProtoMsg(message: _235.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _235.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _235.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _235.MsgUpdateInnerRedemptionRateBounds): _235.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _235.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_235.MsgUpdateInnerRedemptionRateBoundsResponse>): _235.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _235.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _235.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _235.MsgUpdateInnerRedemptionRateBoundsResponse): _235.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _235.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _235.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _235.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _235.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _235.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _235.MsgUpdateInnerRedemptionRateBoundsResponse): _235.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _235.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgLiquidStake;
            fromPartial(object: Partial<_235.MsgLiquidStake>): _235.MsgLiquidStake;
            fromAmino(object: _235.MsgLiquidStakeAmino): _235.MsgLiquidStake;
            toAmino(message: _235.MsgLiquidStake): _235.MsgLiquidStakeAmino;
            fromAminoMsg(object: _235.MsgLiquidStakeAminoMsg): _235.MsgLiquidStake;
            toAminoMsg(message: _235.MsgLiquidStake): _235.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _235.MsgLiquidStakeProtoMsg): _235.MsgLiquidStake;
            toProto(message: _235.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _235.MsgLiquidStake): _235.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _235.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_235.MsgLiquidStakeResponse>): _235.MsgLiquidStakeResponse;
            fromAmino(object: _235.MsgLiquidStakeResponseAmino): _235.MsgLiquidStakeResponse;
            toAmino(message: _235.MsgLiquidStakeResponse): _235.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _235.MsgLiquidStakeResponseAminoMsg): _235.MsgLiquidStakeResponse;
            fromProtoMsg(message: _235.MsgLiquidStakeResponseProtoMsg): _235.MsgLiquidStakeResponse;
            toProto(message: _235.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _235.MsgLiquidStakeResponse): _235.MsgLiquidStakeResponseProtoMsg;
        };
        MsgLSMLiquidStake: {
            typeUrl: string;
            encode(message: _235.MsgLSMLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgLSMLiquidStake;
            fromPartial(object: Partial<_235.MsgLSMLiquidStake>): _235.MsgLSMLiquidStake;
            fromAmino(object: _235.MsgLSMLiquidStakeAmino): _235.MsgLSMLiquidStake;
            toAmino(message: _235.MsgLSMLiquidStake): _235.MsgLSMLiquidStakeAmino;
            fromAminoMsg(object: _235.MsgLSMLiquidStakeAminoMsg): _235.MsgLSMLiquidStake;
            toAminoMsg(message: _235.MsgLSMLiquidStake): _235.MsgLSMLiquidStakeAminoMsg;
            fromProtoMsg(message: _235.MsgLSMLiquidStakeProtoMsg): _235.MsgLSMLiquidStake;
            toProto(message: _235.MsgLSMLiquidStake): Uint8Array;
            toProtoMsg(message: _235.MsgLSMLiquidStake): _235.MsgLSMLiquidStakeProtoMsg;
        };
        MsgLSMLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _235.MsgLSMLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgLSMLiquidStakeResponse;
            fromPartial(object: Partial<_235.MsgLSMLiquidStakeResponse>): _235.MsgLSMLiquidStakeResponse;
            fromAmino(object: _235.MsgLSMLiquidStakeResponseAmino): _235.MsgLSMLiquidStakeResponse;
            toAmino(message: _235.MsgLSMLiquidStakeResponse): _235.MsgLSMLiquidStakeResponseAmino;
            fromAminoMsg(object: _235.MsgLSMLiquidStakeResponseAminoMsg): _235.MsgLSMLiquidStakeResponse;
            fromProtoMsg(message: _235.MsgLSMLiquidStakeResponseProtoMsg): _235.MsgLSMLiquidStakeResponse;
            toProto(message: _235.MsgLSMLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _235.MsgLSMLiquidStakeResponse): _235.MsgLSMLiquidStakeResponseProtoMsg;
        };
        MsgClearBalance: {
            typeUrl: string;
            encode(message: _235.MsgClearBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgClearBalance;
            fromPartial(object: Partial<_235.MsgClearBalance>): _235.MsgClearBalance;
            fromAmino(object: _235.MsgClearBalanceAmino): _235.MsgClearBalance;
            toAmino(message: _235.MsgClearBalance): _235.MsgClearBalanceAmino;
            fromAminoMsg(object: _235.MsgClearBalanceAminoMsg): _235.MsgClearBalance;
            toAminoMsg(message: _235.MsgClearBalance): _235.MsgClearBalanceAminoMsg;
            fromProtoMsg(message: _235.MsgClearBalanceProtoMsg): _235.MsgClearBalance;
            toProto(message: _235.MsgClearBalance): Uint8Array;
            toProtoMsg(message: _235.MsgClearBalance): _235.MsgClearBalanceProtoMsg;
        };
        MsgClearBalanceResponse: {
            typeUrl: string;
            encode(_: _235.MsgClearBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgClearBalanceResponse;
            fromPartial(_: Partial<_235.MsgClearBalanceResponse>): _235.MsgClearBalanceResponse;
            fromAmino(_: _235.MsgClearBalanceResponseAmino): _235.MsgClearBalanceResponse;
            toAmino(_: _235.MsgClearBalanceResponse): _235.MsgClearBalanceResponseAmino;
            fromAminoMsg(object: _235.MsgClearBalanceResponseAminoMsg): _235.MsgClearBalanceResponse;
            fromProtoMsg(message: _235.MsgClearBalanceResponseProtoMsg): _235.MsgClearBalanceResponse;
            toProto(message: _235.MsgClearBalanceResponse): Uint8Array;
            toProtoMsg(message: _235.MsgClearBalanceResponse): _235.MsgClearBalanceResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _235.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgRedeemStake;
            fromPartial(object: Partial<_235.MsgRedeemStake>): _235.MsgRedeemStake;
            fromAmino(object: _235.MsgRedeemStakeAmino): _235.MsgRedeemStake;
            toAmino(message: _235.MsgRedeemStake): _235.MsgRedeemStakeAmino;
            fromAminoMsg(object: _235.MsgRedeemStakeAminoMsg): _235.MsgRedeemStake;
            toAminoMsg(message: _235.MsgRedeemStake): _235.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _235.MsgRedeemStakeProtoMsg): _235.MsgRedeemStake;
            toProto(message: _235.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _235.MsgRedeemStake): _235.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(_: _235.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgRedeemStakeResponse;
            fromPartial(_: Partial<_235.MsgRedeemStakeResponse>): _235.MsgRedeemStakeResponse;
            fromAmino(_: _235.MsgRedeemStakeResponseAmino): _235.MsgRedeemStakeResponse;
            toAmino(_: _235.MsgRedeemStakeResponse): _235.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _235.MsgRedeemStakeResponseAminoMsg): _235.MsgRedeemStakeResponse;
            fromProtoMsg(message: _235.MsgRedeemStakeResponseProtoMsg): _235.MsgRedeemStakeResponse;
            toProto(message: _235.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _235.MsgRedeemStakeResponse): _235.MsgRedeemStakeResponseProtoMsg;
        };
        MsgRegisterHostZone: {
            typeUrl: string;
            encode(message: _235.MsgRegisterHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgRegisterHostZone;
            fromPartial(object: Partial<_235.MsgRegisterHostZone>): _235.MsgRegisterHostZone;
            fromAmino(object: _235.MsgRegisterHostZoneAmino): _235.MsgRegisterHostZone;
            toAmino(message: _235.MsgRegisterHostZone): _235.MsgRegisterHostZoneAmino;
            fromAminoMsg(object: _235.MsgRegisterHostZoneAminoMsg): _235.MsgRegisterHostZone;
            toAminoMsg(message: _235.MsgRegisterHostZone): _235.MsgRegisterHostZoneAminoMsg;
            fromProtoMsg(message: _235.MsgRegisterHostZoneProtoMsg): _235.MsgRegisterHostZone;
            toProto(message: _235.MsgRegisterHostZone): Uint8Array;
            toProtoMsg(message: _235.MsgRegisterHostZone): _235.MsgRegisterHostZoneProtoMsg;
        };
        MsgRegisterHostZoneResponse: {
            typeUrl: string;
            encode(_: _235.MsgRegisterHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgRegisterHostZoneResponse;
            fromPartial(_: Partial<_235.MsgRegisterHostZoneResponse>): _235.MsgRegisterHostZoneResponse;
            fromAmino(_: _235.MsgRegisterHostZoneResponseAmino): _235.MsgRegisterHostZoneResponse;
            toAmino(_: _235.MsgRegisterHostZoneResponse): _235.MsgRegisterHostZoneResponseAmino;
            fromAminoMsg(object: _235.MsgRegisterHostZoneResponseAminoMsg): _235.MsgRegisterHostZoneResponse;
            fromProtoMsg(message: _235.MsgRegisterHostZoneResponseProtoMsg): _235.MsgRegisterHostZoneResponse;
            toProto(message: _235.MsgRegisterHostZoneResponse): Uint8Array;
            toProtoMsg(message: _235.MsgRegisterHostZoneResponse): _235.MsgRegisterHostZoneResponseProtoMsg;
        };
        MsgClaimUndelegatedTokens: {
            typeUrl: string;
            encode(message: _235.MsgClaimUndelegatedTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgClaimUndelegatedTokens;
            fromPartial(object: Partial<_235.MsgClaimUndelegatedTokens>): _235.MsgClaimUndelegatedTokens;
            fromAmino(object: _235.MsgClaimUndelegatedTokensAmino): _235.MsgClaimUndelegatedTokens;
            toAmino(message: _235.MsgClaimUndelegatedTokens): _235.MsgClaimUndelegatedTokensAmino;
            fromAminoMsg(object: _235.MsgClaimUndelegatedTokensAminoMsg): _235.MsgClaimUndelegatedTokens;
            toAminoMsg(message: _235.MsgClaimUndelegatedTokens): _235.MsgClaimUndelegatedTokensAminoMsg;
            fromProtoMsg(message: _235.MsgClaimUndelegatedTokensProtoMsg): _235.MsgClaimUndelegatedTokens;
            toProto(message: _235.MsgClaimUndelegatedTokens): Uint8Array;
            toProtoMsg(message: _235.MsgClaimUndelegatedTokens): _235.MsgClaimUndelegatedTokensProtoMsg;
        };
        MsgClaimUndelegatedTokensResponse: {
            typeUrl: string;
            encode(_: _235.MsgClaimUndelegatedTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgClaimUndelegatedTokensResponse;
            fromPartial(_: Partial<_235.MsgClaimUndelegatedTokensResponse>): _235.MsgClaimUndelegatedTokensResponse;
            fromAmino(_: _235.MsgClaimUndelegatedTokensResponseAmino): _235.MsgClaimUndelegatedTokensResponse;
            toAmino(_: _235.MsgClaimUndelegatedTokensResponse): _235.MsgClaimUndelegatedTokensResponseAmino;
            fromAminoMsg(object: _235.MsgClaimUndelegatedTokensResponseAminoMsg): _235.MsgClaimUndelegatedTokensResponse;
            fromProtoMsg(message: _235.MsgClaimUndelegatedTokensResponseProtoMsg): _235.MsgClaimUndelegatedTokensResponse;
            toProto(message: _235.MsgClaimUndelegatedTokensResponse): Uint8Array;
            toProtoMsg(message: _235.MsgClaimUndelegatedTokensResponse): _235.MsgClaimUndelegatedTokensResponseProtoMsg;
        };
        MsgRebalanceValidators: {
            typeUrl: string;
            encode(message: _235.MsgRebalanceValidators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgRebalanceValidators;
            fromPartial(object: Partial<_235.MsgRebalanceValidators>): _235.MsgRebalanceValidators;
            fromAmino(object: _235.MsgRebalanceValidatorsAmino): _235.MsgRebalanceValidators;
            toAmino(message: _235.MsgRebalanceValidators): _235.MsgRebalanceValidatorsAmino;
            fromAminoMsg(object: _235.MsgRebalanceValidatorsAminoMsg): _235.MsgRebalanceValidators;
            toAminoMsg(message: _235.MsgRebalanceValidators): _235.MsgRebalanceValidatorsAminoMsg;
            fromProtoMsg(message: _235.MsgRebalanceValidatorsProtoMsg): _235.MsgRebalanceValidators;
            toProto(message: _235.MsgRebalanceValidators): Uint8Array;
            toProtoMsg(message: _235.MsgRebalanceValidators): _235.MsgRebalanceValidatorsProtoMsg;
        };
        MsgRebalanceValidatorsResponse: {
            typeUrl: string;
            encode(_: _235.MsgRebalanceValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgRebalanceValidatorsResponse;
            fromPartial(_: Partial<_235.MsgRebalanceValidatorsResponse>): _235.MsgRebalanceValidatorsResponse;
            fromAmino(_: _235.MsgRebalanceValidatorsResponseAmino): _235.MsgRebalanceValidatorsResponse;
            toAmino(_: _235.MsgRebalanceValidatorsResponse): _235.MsgRebalanceValidatorsResponseAmino;
            fromAminoMsg(object: _235.MsgRebalanceValidatorsResponseAminoMsg): _235.MsgRebalanceValidatorsResponse;
            fromProtoMsg(message: _235.MsgRebalanceValidatorsResponseProtoMsg): _235.MsgRebalanceValidatorsResponse;
            toProto(message: _235.MsgRebalanceValidatorsResponse): Uint8Array;
            toProtoMsg(message: _235.MsgRebalanceValidatorsResponse): _235.MsgRebalanceValidatorsResponseProtoMsg;
        };
        MsgAddValidators: {
            typeUrl: string;
            encode(message: _235.MsgAddValidators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgAddValidators;
            fromPartial(object: Partial<_235.MsgAddValidators>): _235.MsgAddValidators;
            fromAmino(object: _235.MsgAddValidatorsAmino): _235.MsgAddValidators;
            toAmino(message: _235.MsgAddValidators): _235.MsgAddValidatorsAmino;
            fromAminoMsg(object: _235.MsgAddValidatorsAminoMsg): _235.MsgAddValidators;
            fromProtoMsg(message: _235.MsgAddValidatorsProtoMsg): _235.MsgAddValidators;
            toProto(message: _235.MsgAddValidators): Uint8Array;
            toProtoMsg(message: _235.MsgAddValidators): _235.MsgAddValidatorsProtoMsg;
        };
        MsgAddValidatorsResponse: {
            typeUrl: string;
            encode(_: _235.MsgAddValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgAddValidatorsResponse;
            fromPartial(_: Partial<_235.MsgAddValidatorsResponse>): _235.MsgAddValidatorsResponse;
            fromAmino(_: _235.MsgAddValidatorsResponseAmino): _235.MsgAddValidatorsResponse;
            toAmino(_: _235.MsgAddValidatorsResponse): _235.MsgAddValidatorsResponseAmino;
            fromAminoMsg(object: _235.MsgAddValidatorsResponseAminoMsg): _235.MsgAddValidatorsResponse;
            fromProtoMsg(message: _235.MsgAddValidatorsResponseProtoMsg): _235.MsgAddValidatorsResponse;
            toProto(message: _235.MsgAddValidatorsResponse): Uint8Array;
            toProtoMsg(message: _235.MsgAddValidatorsResponse): _235.MsgAddValidatorsResponseProtoMsg;
        };
        ValidatorWeight: {
            typeUrl: string;
            encode(message: _235.ValidatorWeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.ValidatorWeight;
            fromPartial(object: Partial<_235.ValidatorWeight>): _235.ValidatorWeight;
            fromAmino(object: _235.ValidatorWeightAmino): _235.ValidatorWeight;
            toAmino(message: _235.ValidatorWeight): _235.ValidatorWeightAmino;
            fromAminoMsg(object: _235.ValidatorWeightAminoMsg): _235.ValidatorWeight;
            fromProtoMsg(message: _235.ValidatorWeightProtoMsg): _235.ValidatorWeight;
            toProto(message: _235.ValidatorWeight): Uint8Array;
            toProtoMsg(message: _235.ValidatorWeight): _235.ValidatorWeightProtoMsg;
        };
        MsgChangeValidatorWeights: {
            typeUrl: string;
            encode(message: _235.MsgChangeValidatorWeights, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgChangeValidatorWeights;
            fromPartial(object: Partial<_235.MsgChangeValidatorWeights>): _235.MsgChangeValidatorWeights;
            fromAmino(object: _235.MsgChangeValidatorWeightsAmino): _235.MsgChangeValidatorWeights;
            toAmino(message: _235.MsgChangeValidatorWeights): _235.MsgChangeValidatorWeightsAmino;
            fromAminoMsg(object: _235.MsgChangeValidatorWeightsAminoMsg): _235.MsgChangeValidatorWeights;
            fromProtoMsg(message: _235.MsgChangeValidatorWeightsProtoMsg): _235.MsgChangeValidatorWeights;
            toProto(message: _235.MsgChangeValidatorWeights): Uint8Array;
            toProtoMsg(message: _235.MsgChangeValidatorWeights): _235.MsgChangeValidatorWeightsProtoMsg;
        };
        MsgChangeValidatorWeightsResponse: {
            typeUrl: string;
            encode(_: _235.MsgChangeValidatorWeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgChangeValidatorWeightsResponse;
            fromPartial(_: Partial<_235.MsgChangeValidatorWeightsResponse>): _235.MsgChangeValidatorWeightsResponse;
            fromAmino(_: _235.MsgChangeValidatorWeightsResponseAmino): _235.MsgChangeValidatorWeightsResponse;
            toAmino(_: _235.MsgChangeValidatorWeightsResponse): _235.MsgChangeValidatorWeightsResponseAmino;
            fromAminoMsg(object: _235.MsgChangeValidatorWeightsResponseAminoMsg): _235.MsgChangeValidatorWeightsResponse;
            fromProtoMsg(message: _235.MsgChangeValidatorWeightsResponseProtoMsg): _235.MsgChangeValidatorWeightsResponse;
            toProto(message: _235.MsgChangeValidatorWeightsResponse): Uint8Array;
            toProtoMsg(message: _235.MsgChangeValidatorWeightsResponse): _235.MsgChangeValidatorWeightsResponseProtoMsg;
        };
        MsgDeleteValidator: {
            typeUrl: string;
            encode(message: _235.MsgDeleteValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgDeleteValidator;
            fromPartial(object: Partial<_235.MsgDeleteValidator>): _235.MsgDeleteValidator;
            fromAmino(object: _235.MsgDeleteValidatorAmino): _235.MsgDeleteValidator;
            toAmino(message: _235.MsgDeleteValidator): _235.MsgDeleteValidatorAmino;
            fromAminoMsg(object: _235.MsgDeleteValidatorAminoMsg): _235.MsgDeleteValidator;
            toAminoMsg(message: _235.MsgDeleteValidator): _235.MsgDeleteValidatorAminoMsg;
            fromProtoMsg(message: _235.MsgDeleteValidatorProtoMsg): _235.MsgDeleteValidator;
            toProto(message: _235.MsgDeleteValidator): Uint8Array;
            toProtoMsg(message: _235.MsgDeleteValidator): _235.MsgDeleteValidatorProtoMsg;
        };
        MsgDeleteValidatorResponse: {
            typeUrl: string;
            encode(_: _235.MsgDeleteValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgDeleteValidatorResponse;
            fromPartial(_: Partial<_235.MsgDeleteValidatorResponse>): _235.MsgDeleteValidatorResponse;
            fromAmino(_: _235.MsgDeleteValidatorResponseAmino): _235.MsgDeleteValidatorResponse;
            toAmino(_: _235.MsgDeleteValidatorResponse): _235.MsgDeleteValidatorResponseAmino;
            fromAminoMsg(object: _235.MsgDeleteValidatorResponseAminoMsg): _235.MsgDeleteValidatorResponse;
            fromProtoMsg(message: _235.MsgDeleteValidatorResponseProtoMsg): _235.MsgDeleteValidatorResponse;
            toProto(message: _235.MsgDeleteValidatorResponse): Uint8Array;
            toProtoMsg(message: _235.MsgDeleteValidatorResponse): _235.MsgDeleteValidatorResponseProtoMsg;
        };
        MsgRestoreInterchainAccount: {
            typeUrl: string;
            encode(message: _235.MsgRestoreInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgRestoreInterchainAccount;
            fromPartial(object: Partial<_235.MsgRestoreInterchainAccount>): _235.MsgRestoreInterchainAccount;
            fromAmino(object: _235.MsgRestoreInterchainAccountAmino): _235.MsgRestoreInterchainAccount;
            toAmino(message: _235.MsgRestoreInterchainAccount): _235.MsgRestoreInterchainAccountAmino;
            fromAminoMsg(object: _235.MsgRestoreInterchainAccountAminoMsg): _235.MsgRestoreInterchainAccount;
            toAminoMsg(message: _235.MsgRestoreInterchainAccount): _235.MsgRestoreInterchainAccountAminoMsg;
            fromProtoMsg(message: _235.MsgRestoreInterchainAccountProtoMsg): _235.MsgRestoreInterchainAccount;
            toProto(message: _235.MsgRestoreInterchainAccount): Uint8Array;
            toProtoMsg(message: _235.MsgRestoreInterchainAccount): _235.MsgRestoreInterchainAccountProtoMsg;
        };
        MsgRestoreInterchainAccountResponse: {
            typeUrl: string;
            encode(_: _235.MsgRestoreInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgRestoreInterchainAccountResponse;
            fromPartial(_: Partial<_235.MsgRestoreInterchainAccountResponse>): _235.MsgRestoreInterchainAccountResponse;
            fromAmino(_: _235.MsgRestoreInterchainAccountResponseAmino): _235.MsgRestoreInterchainAccountResponse;
            toAmino(_: _235.MsgRestoreInterchainAccountResponse): _235.MsgRestoreInterchainAccountResponseAmino;
            fromAminoMsg(object: _235.MsgRestoreInterchainAccountResponseAminoMsg): _235.MsgRestoreInterchainAccountResponse;
            fromProtoMsg(message: _235.MsgRestoreInterchainAccountResponseProtoMsg): _235.MsgRestoreInterchainAccountResponse;
            toProto(message: _235.MsgRestoreInterchainAccountResponse): Uint8Array;
            toProtoMsg(message: _235.MsgRestoreInterchainAccountResponse): _235.MsgRestoreInterchainAccountResponseProtoMsg;
        };
        MsgCloseDelegationChannel: {
            typeUrl: string;
            encode(message: _235.MsgCloseDelegationChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgCloseDelegationChannel;
            fromPartial(object: Partial<_235.MsgCloseDelegationChannel>): _235.MsgCloseDelegationChannel;
            fromAmino(object: _235.MsgCloseDelegationChannelAmino): _235.MsgCloseDelegationChannel;
            toAmino(message: _235.MsgCloseDelegationChannel): _235.MsgCloseDelegationChannelAmino;
            fromAminoMsg(object: _235.MsgCloseDelegationChannelAminoMsg): _235.MsgCloseDelegationChannel;
            fromProtoMsg(message: _235.MsgCloseDelegationChannelProtoMsg): _235.MsgCloseDelegationChannel;
            toProto(message: _235.MsgCloseDelegationChannel): Uint8Array;
            toProtoMsg(message: _235.MsgCloseDelegationChannel): _235.MsgCloseDelegationChannelProtoMsg;
        };
        MsgCloseDelegationChannelResponse: {
            typeUrl: string;
            encode(_: _235.MsgCloseDelegationChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgCloseDelegationChannelResponse;
            fromPartial(_: Partial<_235.MsgCloseDelegationChannelResponse>): _235.MsgCloseDelegationChannelResponse;
            fromAmino(_: _235.MsgCloseDelegationChannelResponseAmino): _235.MsgCloseDelegationChannelResponse;
            toAmino(_: _235.MsgCloseDelegationChannelResponse): _235.MsgCloseDelegationChannelResponseAmino;
            fromAminoMsg(object: _235.MsgCloseDelegationChannelResponseAminoMsg): _235.MsgCloseDelegationChannelResponse;
            fromProtoMsg(message: _235.MsgCloseDelegationChannelResponseProtoMsg): _235.MsgCloseDelegationChannelResponse;
            toProto(message: _235.MsgCloseDelegationChannelResponse): Uint8Array;
            toProtoMsg(message: _235.MsgCloseDelegationChannelResponse): _235.MsgCloseDelegationChannelResponseProtoMsg;
        };
        MsgUpdateValidatorSharesExchRate: {
            typeUrl: string;
            encode(message: _235.MsgUpdateValidatorSharesExchRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgUpdateValidatorSharesExchRate;
            fromPartial(object: Partial<_235.MsgUpdateValidatorSharesExchRate>): _235.MsgUpdateValidatorSharesExchRate;
            fromAmino(object: _235.MsgUpdateValidatorSharesExchRateAmino): _235.MsgUpdateValidatorSharesExchRate;
            toAmino(message: _235.MsgUpdateValidatorSharesExchRate): _235.MsgUpdateValidatorSharesExchRateAmino;
            fromAminoMsg(object: _235.MsgUpdateValidatorSharesExchRateAminoMsg): _235.MsgUpdateValidatorSharesExchRate;
            toAminoMsg(message: _235.MsgUpdateValidatorSharesExchRate): _235.MsgUpdateValidatorSharesExchRateAminoMsg;
            fromProtoMsg(message: _235.MsgUpdateValidatorSharesExchRateProtoMsg): _235.MsgUpdateValidatorSharesExchRate;
            toProto(message: _235.MsgUpdateValidatorSharesExchRate): Uint8Array;
            toProtoMsg(message: _235.MsgUpdateValidatorSharesExchRate): _235.MsgUpdateValidatorSharesExchRateProtoMsg;
        };
        MsgUpdateValidatorSharesExchRateResponse: {
            typeUrl: string;
            encode(_: _235.MsgUpdateValidatorSharesExchRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgUpdateValidatorSharesExchRateResponse;
            fromPartial(_: Partial<_235.MsgUpdateValidatorSharesExchRateResponse>): _235.MsgUpdateValidatorSharesExchRateResponse;
            fromAmino(_: _235.MsgUpdateValidatorSharesExchRateResponseAmino): _235.MsgUpdateValidatorSharesExchRateResponse;
            toAmino(_: _235.MsgUpdateValidatorSharesExchRateResponse): _235.MsgUpdateValidatorSharesExchRateResponseAmino;
            fromAminoMsg(object: _235.MsgUpdateValidatorSharesExchRateResponseAminoMsg): _235.MsgUpdateValidatorSharesExchRateResponse;
            fromProtoMsg(message: _235.MsgUpdateValidatorSharesExchRateResponseProtoMsg): _235.MsgUpdateValidatorSharesExchRateResponse;
            toProto(message: _235.MsgUpdateValidatorSharesExchRateResponse): Uint8Array;
            toProtoMsg(message: _235.MsgUpdateValidatorSharesExchRateResponse): _235.MsgUpdateValidatorSharesExchRateResponseProtoMsg;
        };
        MsgCalibrateDelegation: {
            typeUrl: string;
            encode(message: _235.MsgCalibrateDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgCalibrateDelegation;
            fromPartial(object: Partial<_235.MsgCalibrateDelegation>): _235.MsgCalibrateDelegation;
            fromAmino(object: _235.MsgCalibrateDelegationAmino): _235.MsgCalibrateDelegation;
            toAmino(message: _235.MsgCalibrateDelegation): _235.MsgCalibrateDelegationAmino;
            fromAminoMsg(object: _235.MsgCalibrateDelegationAminoMsg): _235.MsgCalibrateDelegation;
            fromProtoMsg(message: _235.MsgCalibrateDelegationProtoMsg): _235.MsgCalibrateDelegation;
            toProto(message: _235.MsgCalibrateDelegation): Uint8Array;
            toProtoMsg(message: _235.MsgCalibrateDelegation): _235.MsgCalibrateDelegationProtoMsg;
        };
        MsgCalibrateDelegationResponse: {
            typeUrl: string;
            encode(_: _235.MsgCalibrateDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgCalibrateDelegationResponse;
            fromPartial(_: Partial<_235.MsgCalibrateDelegationResponse>): _235.MsgCalibrateDelegationResponse;
            fromAmino(_: _235.MsgCalibrateDelegationResponseAmino): _235.MsgCalibrateDelegationResponse;
            toAmino(_: _235.MsgCalibrateDelegationResponse): _235.MsgCalibrateDelegationResponseAmino;
            fromAminoMsg(object: _235.MsgCalibrateDelegationResponseAminoMsg): _235.MsgCalibrateDelegationResponse;
            fromProtoMsg(message: _235.MsgCalibrateDelegationResponseProtoMsg): _235.MsgCalibrateDelegationResponse;
            toProto(message: _235.MsgCalibrateDelegationResponse): Uint8Array;
            toProtoMsg(message: _235.MsgCalibrateDelegationResponse): _235.MsgCalibrateDelegationResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _235.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgResumeHostZone;
            fromPartial(object: Partial<_235.MsgResumeHostZone>): _235.MsgResumeHostZone;
            fromAmino(object: _235.MsgResumeHostZoneAmino): _235.MsgResumeHostZone;
            toAmino(message: _235.MsgResumeHostZone): _235.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _235.MsgResumeHostZoneAminoMsg): _235.MsgResumeHostZone;
            fromProtoMsg(message: _235.MsgResumeHostZoneProtoMsg): _235.MsgResumeHostZone;
            toProto(message: _235.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _235.MsgResumeHostZone): _235.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _235.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_235.MsgResumeHostZoneResponse>): _235.MsgResumeHostZoneResponse;
            fromAmino(_: _235.MsgResumeHostZoneResponseAmino): _235.MsgResumeHostZoneResponse;
            toAmino(_: _235.MsgResumeHostZoneResponse): _235.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _235.MsgResumeHostZoneResponseAminoMsg): _235.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _235.MsgResumeHostZoneResponseProtoMsg): _235.MsgResumeHostZoneResponse;
            toProto(message: _235.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _235.MsgResumeHostZoneResponse): _235.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgCreateTradeRoute: {
            typeUrl: string;
            encode(message: _235.MsgCreateTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgCreateTradeRoute;
            fromPartial(object: Partial<_235.MsgCreateTradeRoute>): _235.MsgCreateTradeRoute;
            fromAmino(object: _235.MsgCreateTradeRouteAmino): _235.MsgCreateTradeRoute;
            toAmino(message: _235.MsgCreateTradeRoute): _235.MsgCreateTradeRouteAmino;
            fromAminoMsg(object: _235.MsgCreateTradeRouteAminoMsg): _235.MsgCreateTradeRoute;
            toAminoMsg(message: _235.MsgCreateTradeRoute): _235.MsgCreateTradeRouteAminoMsg;
            fromProtoMsg(message: _235.MsgCreateTradeRouteProtoMsg): _235.MsgCreateTradeRoute;
            toProto(message: _235.MsgCreateTradeRoute): Uint8Array;
            toProtoMsg(message: _235.MsgCreateTradeRoute): _235.MsgCreateTradeRouteProtoMsg;
        };
        MsgCreateTradeRouteResponse: {
            typeUrl: string;
            encode(_: _235.MsgCreateTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgCreateTradeRouteResponse;
            fromPartial(_: Partial<_235.MsgCreateTradeRouteResponse>): _235.MsgCreateTradeRouteResponse;
            fromAmino(_: _235.MsgCreateTradeRouteResponseAmino): _235.MsgCreateTradeRouteResponse;
            toAmino(_: _235.MsgCreateTradeRouteResponse): _235.MsgCreateTradeRouteResponseAmino;
            fromAminoMsg(object: _235.MsgCreateTradeRouteResponseAminoMsg): _235.MsgCreateTradeRouteResponse;
            fromProtoMsg(message: _235.MsgCreateTradeRouteResponseProtoMsg): _235.MsgCreateTradeRouteResponse;
            toProto(message: _235.MsgCreateTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _235.MsgCreateTradeRouteResponse): _235.MsgCreateTradeRouteResponseProtoMsg;
        };
        MsgDeleteTradeRoute: {
            typeUrl: string;
            encode(message: _235.MsgDeleteTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgDeleteTradeRoute;
            fromPartial(object: Partial<_235.MsgDeleteTradeRoute>): _235.MsgDeleteTradeRoute;
            fromAmino(object: _235.MsgDeleteTradeRouteAmino): _235.MsgDeleteTradeRoute;
            toAmino(message: _235.MsgDeleteTradeRoute): _235.MsgDeleteTradeRouteAmino;
            fromAminoMsg(object: _235.MsgDeleteTradeRouteAminoMsg): _235.MsgDeleteTradeRoute;
            toAminoMsg(message: _235.MsgDeleteTradeRoute): _235.MsgDeleteTradeRouteAminoMsg;
            fromProtoMsg(message: _235.MsgDeleteTradeRouteProtoMsg): _235.MsgDeleteTradeRoute;
            toProto(message: _235.MsgDeleteTradeRoute): Uint8Array;
            toProtoMsg(message: _235.MsgDeleteTradeRoute): _235.MsgDeleteTradeRouteProtoMsg;
        };
        MsgDeleteTradeRouteResponse: {
            typeUrl: string;
            encode(_: _235.MsgDeleteTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgDeleteTradeRouteResponse;
            fromPartial(_: Partial<_235.MsgDeleteTradeRouteResponse>): _235.MsgDeleteTradeRouteResponse;
            fromAmino(_: _235.MsgDeleteTradeRouteResponseAmino): _235.MsgDeleteTradeRouteResponse;
            toAmino(_: _235.MsgDeleteTradeRouteResponse): _235.MsgDeleteTradeRouteResponseAmino;
            fromAminoMsg(object: _235.MsgDeleteTradeRouteResponseAminoMsg): _235.MsgDeleteTradeRouteResponse;
            fromProtoMsg(message: _235.MsgDeleteTradeRouteResponseProtoMsg): _235.MsgDeleteTradeRouteResponse;
            toProto(message: _235.MsgDeleteTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _235.MsgDeleteTradeRouteResponse): _235.MsgDeleteTradeRouteResponseProtoMsg;
        };
        MsgUpdateTradeRoute: {
            typeUrl: string;
            encode(message: _235.MsgUpdateTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgUpdateTradeRoute;
            fromPartial(object: Partial<_235.MsgUpdateTradeRoute>): _235.MsgUpdateTradeRoute;
            fromAmino(object: _235.MsgUpdateTradeRouteAmino): _235.MsgUpdateTradeRoute;
            toAmino(message: _235.MsgUpdateTradeRoute): _235.MsgUpdateTradeRouteAmino;
            fromAminoMsg(object: _235.MsgUpdateTradeRouteAminoMsg): _235.MsgUpdateTradeRoute;
            toAminoMsg(message: _235.MsgUpdateTradeRoute): _235.MsgUpdateTradeRouteAminoMsg;
            fromProtoMsg(message: _235.MsgUpdateTradeRouteProtoMsg): _235.MsgUpdateTradeRoute;
            toProto(message: _235.MsgUpdateTradeRoute): Uint8Array;
            toProtoMsg(message: _235.MsgUpdateTradeRoute): _235.MsgUpdateTradeRouteProtoMsg;
        };
        MsgUpdateTradeRouteResponse: {
            typeUrl: string;
            encode(_: _235.MsgUpdateTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgUpdateTradeRouteResponse;
            fromPartial(_: Partial<_235.MsgUpdateTradeRouteResponse>): _235.MsgUpdateTradeRouteResponse;
            fromAmino(_: _235.MsgUpdateTradeRouteResponseAmino): _235.MsgUpdateTradeRouteResponse;
            toAmino(_: _235.MsgUpdateTradeRouteResponse): _235.MsgUpdateTradeRouteResponseAmino;
            fromAminoMsg(object: _235.MsgUpdateTradeRouteResponseAminoMsg): _235.MsgUpdateTradeRouteResponse;
            fromProtoMsg(message: _235.MsgUpdateTradeRouteResponseProtoMsg): _235.MsgUpdateTradeRouteResponse;
            toProto(message: _235.MsgUpdateTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _235.MsgUpdateTradeRouteResponse): _235.MsgUpdateTradeRouteResponseProtoMsg;
        };
        MsgSetCommunityPoolRebate: {
            typeUrl: string;
            encode(message: _235.MsgSetCommunityPoolRebate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgSetCommunityPoolRebate;
            fromPartial(object: Partial<_235.MsgSetCommunityPoolRebate>): _235.MsgSetCommunityPoolRebate;
            fromAmino(object: _235.MsgSetCommunityPoolRebateAmino): _235.MsgSetCommunityPoolRebate;
            toAmino(message: _235.MsgSetCommunityPoolRebate): _235.MsgSetCommunityPoolRebateAmino;
            fromAminoMsg(object: _235.MsgSetCommunityPoolRebateAminoMsg): _235.MsgSetCommunityPoolRebate;
            toAminoMsg(message: _235.MsgSetCommunityPoolRebate): _235.MsgSetCommunityPoolRebateAminoMsg;
            fromProtoMsg(message: _235.MsgSetCommunityPoolRebateProtoMsg): _235.MsgSetCommunityPoolRebate;
            toProto(message: _235.MsgSetCommunityPoolRebate): Uint8Array;
            toProtoMsg(message: _235.MsgSetCommunityPoolRebate): _235.MsgSetCommunityPoolRebateProtoMsg;
        };
        MsgSetCommunityPoolRebateResponse: {
            typeUrl: string;
            encode(_: _235.MsgSetCommunityPoolRebateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgSetCommunityPoolRebateResponse;
            fromPartial(_: Partial<_235.MsgSetCommunityPoolRebateResponse>): _235.MsgSetCommunityPoolRebateResponse;
            fromAmino(_: _235.MsgSetCommunityPoolRebateResponseAmino): _235.MsgSetCommunityPoolRebateResponse;
            toAmino(_: _235.MsgSetCommunityPoolRebateResponse): _235.MsgSetCommunityPoolRebateResponseAmino;
            fromAminoMsg(object: _235.MsgSetCommunityPoolRebateResponseAminoMsg): _235.MsgSetCommunityPoolRebateResponse;
            fromProtoMsg(message: _235.MsgSetCommunityPoolRebateResponseProtoMsg): _235.MsgSetCommunityPoolRebateResponse;
            toProto(message: _235.MsgSetCommunityPoolRebateResponse): Uint8Array;
            toProtoMsg(message: _235.MsgSetCommunityPoolRebateResponse): _235.MsgSetCommunityPoolRebateResponseProtoMsg;
        };
        MsgToggleTradeController: {
            typeUrl: string;
            encode(message: _235.MsgToggleTradeController, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgToggleTradeController;
            fromPartial(object: Partial<_235.MsgToggleTradeController>): _235.MsgToggleTradeController;
            fromAmino(object: _235.MsgToggleTradeControllerAmino): _235.MsgToggleTradeController;
            toAmino(message: _235.MsgToggleTradeController): _235.MsgToggleTradeControllerAmino;
            fromAminoMsg(object: _235.MsgToggleTradeControllerAminoMsg): _235.MsgToggleTradeController;
            toAminoMsg(message: _235.MsgToggleTradeController): _235.MsgToggleTradeControllerAminoMsg;
            fromProtoMsg(message: _235.MsgToggleTradeControllerProtoMsg): _235.MsgToggleTradeController;
            toProto(message: _235.MsgToggleTradeController): Uint8Array;
            toProtoMsg(message: _235.MsgToggleTradeController): _235.MsgToggleTradeControllerProtoMsg;
        };
        MsgToggleTradeControllerResponse: {
            typeUrl: string;
            encode(_: _235.MsgToggleTradeControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgToggleTradeControllerResponse;
            fromPartial(_: Partial<_235.MsgToggleTradeControllerResponse>): _235.MsgToggleTradeControllerResponse;
            fromAmino(_: _235.MsgToggleTradeControllerResponseAmino): _235.MsgToggleTradeControllerResponse;
            toAmino(_: _235.MsgToggleTradeControllerResponse): _235.MsgToggleTradeControllerResponseAmino;
            fromAminoMsg(object: _235.MsgToggleTradeControllerResponseAminoMsg): _235.MsgToggleTradeControllerResponse;
            fromProtoMsg(message: _235.MsgToggleTradeControllerResponseProtoMsg): _235.MsgToggleTradeControllerResponse;
            toProto(message: _235.MsgToggleTradeControllerResponse): Uint8Array;
            toProtoMsg(message: _235.MsgToggleTradeControllerResponse): _235.MsgToggleTradeControllerResponseProtoMsg;
        };
        MsgUpdateHostZoneParams: {
            typeUrl: string;
            encode(message: _235.MsgUpdateHostZoneParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgUpdateHostZoneParams;
            fromPartial(object: Partial<_235.MsgUpdateHostZoneParams>): _235.MsgUpdateHostZoneParams;
            fromAmino(object: _235.MsgUpdateHostZoneParamsAmino): _235.MsgUpdateHostZoneParams;
            toAmino(message: _235.MsgUpdateHostZoneParams): _235.MsgUpdateHostZoneParamsAmino;
            fromAminoMsg(object: _235.MsgUpdateHostZoneParamsAminoMsg): _235.MsgUpdateHostZoneParams;
            toAminoMsg(message: _235.MsgUpdateHostZoneParams): _235.MsgUpdateHostZoneParamsAminoMsg;
            fromProtoMsg(message: _235.MsgUpdateHostZoneParamsProtoMsg): _235.MsgUpdateHostZoneParams;
            toProto(message: _235.MsgUpdateHostZoneParams): Uint8Array;
            toProtoMsg(message: _235.MsgUpdateHostZoneParams): _235.MsgUpdateHostZoneParamsProtoMsg;
        };
        MsgUpdateHostZoneParamsResponse: {
            typeUrl: string;
            encode(_: _235.MsgUpdateHostZoneParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.MsgUpdateHostZoneParamsResponse;
            fromPartial(_: Partial<_235.MsgUpdateHostZoneParamsResponse>): _235.MsgUpdateHostZoneParamsResponse;
            fromAmino(_: _235.MsgUpdateHostZoneParamsResponseAmino): _235.MsgUpdateHostZoneParamsResponse;
            toAmino(_: _235.MsgUpdateHostZoneParamsResponse): _235.MsgUpdateHostZoneParamsResponseAmino;
            fromAminoMsg(object: _235.MsgUpdateHostZoneParamsResponseAminoMsg): _235.MsgUpdateHostZoneParamsResponse;
            fromProtoMsg(message: _235.MsgUpdateHostZoneParamsResponseProtoMsg): _235.MsgUpdateHostZoneParamsResponse;
            toProto(message: _235.MsgUpdateHostZoneParamsResponse): Uint8Array;
            toProtoMsg(message: _235.MsgUpdateHostZoneParamsResponse): _235.MsgUpdateHostZoneParamsResponseProtoMsg;
        };
        TradeConfig: {
            typeUrl: string;
            encode(message: _234.TradeConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.TradeConfig;
            fromPartial(object: Partial<_234.TradeConfig>): _234.TradeConfig;
            fromAmino(object: _234.TradeConfigAmino): _234.TradeConfig;
            toAmino(message: _234.TradeConfig): _234.TradeConfigAmino;
            fromAminoMsg(object: _234.TradeConfigAminoMsg): _234.TradeConfig;
            fromProtoMsg(message: _234.TradeConfigProtoMsg): _234.TradeConfig;
            toProto(message: _234.TradeConfig): Uint8Array;
            toProtoMsg(message: _234.TradeConfig): _234.TradeConfigProtoMsg;
        };
        TradeRoute: {
            typeUrl: string;
            encode(message: _234.TradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.TradeRoute;
            fromPartial(object: Partial<_234.TradeRoute>): _234.TradeRoute;
            fromAmino(object: _234.TradeRouteAmino): _234.TradeRoute;
            toAmino(message: _234.TradeRoute): _234.TradeRouteAmino;
            fromAminoMsg(object: _234.TradeRouteAminoMsg): _234.TradeRoute;
            fromProtoMsg(message: _234.TradeRouteProtoMsg): _234.TradeRoute;
            toProto(message: _234.TradeRoute): Uint8Array;
            toProtoMsg(message: _234.TradeRoute): _234.TradeRouteProtoMsg;
        };
        QueryInterchainAccountFromAddressRequest: {
            typeUrl: string;
            encode(message: _233.QueryInterchainAccountFromAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryInterchainAccountFromAddressRequest;
            fromPartial(object: Partial<_233.QueryInterchainAccountFromAddressRequest>): _233.QueryInterchainAccountFromAddressRequest;
            fromAmino(object: _233.QueryInterchainAccountFromAddressRequestAmino): _233.QueryInterchainAccountFromAddressRequest;
            toAmino(message: _233.QueryInterchainAccountFromAddressRequest): _233.QueryInterchainAccountFromAddressRequestAmino;
            fromAminoMsg(object: _233.QueryInterchainAccountFromAddressRequestAminoMsg): _233.QueryInterchainAccountFromAddressRequest;
            fromProtoMsg(message: _233.QueryInterchainAccountFromAddressRequestProtoMsg): _233.QueryInterchainAccountFromAddressRequest;
            toProto(message: _233.QueryInterchainAccountFromAddressRequest): Uint8Array;
            toProtoMsg(message: _233.QueryInterchainAccountFromAddressRequest): _233.QueryInterchainAccountFromAddressRequestProtoMsg;
        };
        QueryInterchainAccountFromAddressResponse: {
            typeUrl: string;
            encode(message: _233.QueryInterchainAccountFromAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryInterchainAccountFromAddressResponse;
            fromPartial(object: Partial<_233.QueryInterchainAccountFromAddressResponse>): _233.QueryInterchainAccountFromAddressResponse;
            fromAmino(object: _233.QueryInterchainAccountFromAddressResponseAmino): _233.QueryInterchainAccountFromAddressResponse;
            toAmino(message: _233.QueryInterchainAccountFromAddressResponse): _233.QueryInterchainAccountFromAddressResponseAmino;
            fromAminoMsg(object: _233.QueryInterchainAccountFromAddressResponseAminoMsg): _233.QueryInterchainAccountFromAddressResponse;
            fromProtoMsg(message: _233.QueryInterchainAccountFromAddressResponseProtoMsg): _233.QueryInterchainAccountFromAddressResponse;
            toProto(message: _233.QueryInterchainAccountFromAddressResponse): Uint8Array;
            toProtoMsg(message: _233.QueryInterchainAccountFromAddressResponse): _233.QueryInterchainAccountFromAddressResponseProtoMsg;
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
        QueryGetValidatorsRequest: {
            typeUrl: string;
            encode(message: _233.QueryGetValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryGetValidatorsRequest;
            fromPartial(object: Partial<_233.QueryGetValidatorsRequest>): _233.QueryGetValidatorsRequest;
            fromAmino(object: _233.QueryGetValidatorsRequestAmino): _233.QueryGetValidatorsRequest;
            toAmino(message: _233.QueryGetValidatorsRequest): _233.QueryGetValidatorsRequestAmino;
            fromAminoMsg(object: _233.QueryGetValidatorsRequestAminoMsg): _233.QueryGetValidatorsRequest;
            fromProtoMsg(message: _233.QueryGetValidatorsRequestProtoMsg): _233.QueryGetValidatorsRequest;
            toProto(message: _233.QueryGetValidatorsRequest): Uint8Array;
            toProtoMsg(message: _233.QueryGetValidatorsRequest): _233.QueryGetValidatorsRequestProtoMsg;
        };
        QueryGetValidatorsResponse: {
            typeUrl: string;
            encode(message: _233.QueryGetValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryGetValidatorsResponse;
            fromPartial(object: Partial<_233.QueryGetValidatorsResponse>): _233.QueryGetValidatorsResponse;
            fromAmino(object: _233.QueryGetValidatorsResponseAmino): _233.QueryGetValidatorsResponse;
            toAmino(message: _233.QueryGetValidatorsResponse): _233.QueryGetValidatorsResponseAmino;
            fromAminoMsg(object: _233.QueryGetValidatorsResponseAminoMsg): _233.QueryGetValidatorsResponse;
            fromProtoMsg(message: _233.QueryGetValidatorsResponseProtoMsg): _233.QueryGetValidatorsResponse;
            toProto(message: _233.QueryGetValidatorsResponse): Uint8Array;
            toProtoMsg(message: _233.QueryGetValidatorsResponse): _233.QueryGetValidatorsResponseProtoMsg;
        };
        QueryGetHostZoneRequest: {
            typeUrl: string;
            encode(message: _233.QueryGetHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryGetHostZoneRequest;
            fromPartial(object: Partial<_233.QueryGetHostZoneRequest>): _233.QueryGetHostZoneRequest;
            fromAmino(object: _233.QueryGetHostZoneRequestAmino): _233.QueryGetHostZoneRequest;
            toAmino(message: _233.QueryGetHostZoneRequest): _233.QueryGetHostZoneRequestAmino;
            fromAminoMsg(object: _233.QueryGetHostZoneRequestAminoMsg): _233.QueryGetHostZoneRequest;
            fromProtoMsg(message: _233.QueryGetHostZoneRequestProtoMsg): _233.QueryGetHostZoneRequest;
            toProto(message: _233.QueryGetHostZoneRequest): Uint8Array;
            toProtoMsg(message: _233.QueryGetHostZoneRequest): _233.QueryGetHostZoneRequestProtoMsg;
        };
        QueryGetHostZoneResponse: {
            typeUrl: string;
            encode(message: _233.QueryGetHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryGetHostZoneResponse;
            fromPartial(object: Partial<_233.QueryGetHostZoneResponse>): _233.QueryGetHostZoneResponse;
            fromAmino(object: _233.QueryGetHostZoneResponseAmino): _233.QueryGetHostZoneResponse;
            toAmino(message: _233.QueryGetHostZoneResponse): _233.QueryGetHostZoneResponseAmino;
            fromAminoMsg(object: _233.QueryGetHostZoneResponseAminoMsg): _233.QueryGetHostZoneResponse;
            fromProtoMsg(message: _233.QueryGetHostZoneResponseProtoMsg): _233.QueryGetHostZoneResponse;
            toProto(message: _233.QueryGetHostZoneResponse): Uint8Array;
            toProtoMsg(message: _233.QueryGetHostZoneResponse): _233.QueryGetHostZoneResponseProtoMsg;
        };
        QueryAllHostZoneRequest: {
            typeUrl: string;
            encode(message: _233.QueryAllHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryAllHostZoneRequest;
            fromPartial(object: Partial<_233.QueryAllHostZoneRequest>): _233.QueryAllHostZoneRequest;
            fromAmino(object: _233.QueryAllHostZoneRequestAmino): _233.QueryAllHostZoneRequest;
            toAmino(message: _233.QueryAllHostZoneRequest): _233.QueryAllHostZoneRequestAmino;
            fromAminoMsg(object: _233.QueryAllHostZoneRequestAminoMsg): _233.QueryAllHostZoneRequest;
            fromProtoMsg(message: _233.QueryAllHostZoneRequestProtoMsg): _233.QueryAllHostZoneRequest;
            toProto(message: _233.QueryAllHostZoneRequest): Uint8Array;
            toProtoMsg(message: _233.QueryAllHostZoneRequest): _233.QueryAllHostZoneRequestProtoMsg;
        };
        QueryAllHostZoneResponse: {
            typeUrl: string;
            encode(message: _233.QueryAllHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryAllHostZoneResponse;
            fromPartial(object: Partial<_233.QueryAllHostZoneResponse>): _233.QueryAllHostZoneResponse;
            fromAmino(object: _233.QueryAllHostZoneResponseAmino): _233.QueryAllHostZoneResponse;
            toAmino(message: _233.QueryAllHostZoneResponse): _233.QueryAllHostZoneResponseAmino;
            fromAminoMsg(object: _233.QueryAllHostZoneResponseAminoMsg): _233.QueryAllHostZoneResponse;
            fromProtoMsg(message: _233.QueryAllHostZoneResponseProtoMsg): _233.QueryAllHostZoneResponse;
            toProto(message: _233.QueryAllHostZoneResponse): Uint8Array;
            toProtoMsg(message: _233.QueryAllHostZoneResponse): _233.QueryAllHostZoneResponseProtoMsg;
        };
        QueryModuleAddressRequest: {
            typeUrl: string;
            encode(message: _233.QueryModuleAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryModuleAddressRequest;
            fromPartial(object: Partial<_233.QueryModuleAddressRequest>): _233.QueryModuleAddressRequest;
            fromAmino(object: _233.QueryModuleAddressRequestAmino): _233.QueryModuleAddressRequest;
            toAmino(message: _233.QueryModuleAddressRequest): _233.QueryModuleAddressRequestAmino;
            fromAminoMsg(object: _233.QueryModuleAddressRequestAminoMsg): _233.QueryModuleAddressRequest;
            fromProtoMsg(message: _233.QueryModuleAddressRequestProtoMsg): _233.QueryModuleAddressRequest;
            toProto(message: _233.QueryModuleAddressRequest): Uint8Array;
            toProtoMsg(message: _233.QueryModuleAddressRequest): _233.QueryModuleAddressRequestProtoMsg;
        };
        QueryModuleAddressResponse: {
            typeUrl: string;
            encode(message: _233.QueryModuleAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryModuleAddressResponse;
            fromPartial(object: Partial<_233.QueryModuleAddressResponse>): _233.QueryModuleAddressResponse;
            fromAmino(object: _233.QueryModuleAddressResponseAmino): _233.QueryModuleAddressResponse;
            toAmino(message: _233.QueryModuleAddressResponse): _233.QueryModuleAddressResponseAmino;
            fromAminoMsg(object: _233.QueryModuleAddressResponseAminoMsg): _233.QueryModuleAddressResponse;
            fromProtoMsg(message: _233.QueryModuleAddressResponseProtoMsg): _233.QueryModuleAddressResponse;
            toProto(message: _233.QueryModuleAddressResponse): Uint8Array;
            toProtoMsg(message: _233.QueryModuleAddressResponse): _233.QueryModuleAddressResponseProtoMsg;
        };
        QueryGetEpochTrackerRequest: {
            typeUrl: string;
            encode(message: _233.QueryGetEpochTrackerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryGetEpochTrackerRequest;
            fromPartial(object: Partial<_233.QueryGetEpochTrackerRequest>): _233.QueryGetEpochTrackerRequest;
            fromAmino(object: _233.QueryGetEpochTrackerRequestAmino): _233.QueryGetEpochTrackerRequest;
            toAmino(message: _233.QueryGetEpochTrackerRequest): _233.QueryGetEpochTrackerRequestAmino;
            fromAminoMsg(object: _233.QueryGetEpochTrackerRequestAminoMsg): _233.QueryGetEpochTrackerRequest;
            fromProtoMsg(message: _233.QueryGetEpochTrackerRequestProtoMsg): _233.QueryGetEpochTrackerRequest;
            toProto(message: _233.QueryGetEpochTrackerRequest): Uint8Array;
            toProtoMsg(message: _233.QueryGetEpochTrackerRequest): _233.QueryGetEpochTrackerRequestProtoMsg;
        };
        QueryGetEpochTrackerResponse: {
            typeUrl: string;
            encode(message: _233.QueryGetEpochTrackerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryGetEpochTrackerResponse;
            fromPartial(object: Partial<_233.QueryGetEpochTrackerResponse>): _233.QueryGetEpochTrackerResponse;
            fromAmino(object: _233.QueryGetEpochTrackerResponseAmino): _233.QueryGetEpochTrackerResponse;
            toAmino(message: _233.QueryGetEpochTrackerResponse): _233.QueryGetEpochTrackerResponseAmino;
            fromAminoMsg(object: _233.QueryGetEpochTrackerResponseAminoMsg): _233.QueryGetEpochTrackerResponse;
            fromProtoMsg(message: _233.QueryGetEpochTrackerResponseProtoMsg): _233.QueryGetEpochTrackerResponse;
            toProto(message: _233.QueryGetEpochTrackerResponse): Uint8Array;
            toProtoMsg(message: _233.QueryGetEpochTrackerResponse): _233.QueryGetEpochTrackerResponseProtoMsg;
        };
        QueryAllEpochTrackerRequest: {
            typeUrl: string;
            encode(_: _233.QueryAllEpochTrackerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryAllEpochTrackerRequest;
            fromPartial(_: Partial<_233.QueryAllEpochTrackerRequest>): _233.QueryAllEpochTrackerRequest;
            fromAmino(_: _233.QueryAllEpochTrackerRequestAmino): _233.QueryAllEpochTrackerRequest;
            toAmino(_: _233.QueryAllEpochTrackerRequest): _233.QueryAllEpochTrackerRequestAmino;
            fromAminoMsg(object: _233.QueryAllEpochTrackerRequestAminoMsg): _233.QueryAllEpochTrackerRequest;
            fromProtoMsg(message: _233.QueryAllEpochTrackerRequestProtoMsg): _233.QueryAllEpochTrackerRequest;
            toProto(message: _233.QueryAllEpochTrackerRequest): Uint8Array;
            toProtoMsg(message: _233.QueryAllEpochTrackerRequest): _233.QueryAllEpochTrackerRequestProtoMsg;
        };
        QueryAllEpochTrackerResponse: {
            typeUrl: string;
            encode(message: _233.QueryAllEpochTrackerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryAllEpochTrackerResponse;
            fromPartial(object: Partial<_233.QueryAllEpochTrackerResponse>): _233.QueryAllEpochTrackerResponse;
            fromAmino(object: _233.QueryAllEpochTrackerResponseAmino): _233.QueryAllEpochTrackerResponse;
            toAmino(message: _233.QueryAllEpochTrackerResponse): _233.QueryAllEpochTrackerResponseAmino;
            fromAminoMsg(object: _233.QueryAllEpochTrackerResponseAminoMsg): _233.QueryAllEpochTrackerResponse;
            fromProtoMsg(message: _233.QueryAllEpochTrackerResponseProtoMsg): _233.QueryAllEpochTrackerResponse;
            toProto(message: _233.QueryAllEpochTrackerResponse): Uint8Array;
            toProtoMsg(message: _233.QueryAllEpochTrackerResponse): _233.QueryAllEpochTrackerResponseProtoMsg;
        };
        QueryGetNextPacketSequenceRequest: {
            typeUrl: string;
            encode(message: _233.QueryGetNextPacketSequenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryGetNextPacketSequenceRequest;
            fromPartial(object: Partial<_233.QueryGetNextPacketSequenceRequest>): _233.QueryGetNextPacketSequenceRequest;
            fromAmino(object: _233.QueryGetNextPacketSequenceRequestAmino): _233.QueryGetNextPacketSequenceRequest;
            toAmino(message: _233.QueryGetNextPacketSequenceRequest): _233.QueryGetNextPacketSequenceRequestAmino;
            fromAminoMsg(object: _233.QueryGetNextPacketSequenceRequestAminoMsg): _233.QueryGetNextPacketSequenceRequest;
            fromProtoMsg(message: _233.QueryGetNextPacketSequenceRequestProtoMsg): _233.QueryGetNextPacketSequenceRequest;
            toProto(message: _233.QueryGetNextPacketSequenceRequest): Uint8Array;
            toProtoMsg(message: _233.QueryGetNextPacketSequenceRequest): _233.QueryGetNextPacketSequenceRequestProtoMsg;
        };
        QueryGetNextPacketSequenceResponse: {
            typeUrl: string;
            encode(message: _233.QueryGetNextPacketSequenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryGetNextPacketSequenceResponse;
            fromPartial(object: Partial<_233.QueryGetNextPacketSequenceResponse>): _233.QueryGetNextPacketSequenceResponse;
            fromAmino(object: _233.QueryGetNextPacketSequenceResponseAmino): _233.QueryGetNextPacketSequenceResponse;
            toAmino(message: _233.QueryGetNextPacketSequenceResponse): _233.QueryGetNextPacketSequenceResponseAmino;
            fromAminoMsg(object: _233.QueryGetNextPacketSequenceResponseAminoMsg): _233.QueryGetNextPacketSequenceResponse;
            fromProtoMsg(message: _233.QueryGetNextPacketSequenceResponseProtoMsg): _233.QueryGetNextPacketSequenceResponse;
            toProto(message: _233.QueryGetNextPacketSequenceResponse): Uint8Array;
            toProtoMsg(message: _233.QueryGetNextPacketSequenceResponse): _233.QueryGetNextPacketSequenceResponseProtoMsg;
        };
        QueryAddressUnbondings: {
            typeUrl: string;
            encode(message: _233.QueryAddressUnbondings, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryAddressUnbondings;
            fromPartial(object: Partial<_233.QueryAddressUnbondings>): _233.QueryAddressUnbondings;
            fromAmino(object: _233.QueryAddressUnbondingsAmino): _233.QueryAddressUnbondings;
            toAmino(message: _233.QueryAddressUnbondings): _233.QueryAddressUnbondingsAmino;
            fromAminoMsg(object: _233.QueryAddressUnbondingsAminoMsg): _233.QueryAddressUnbondings;
            fromProtoMsg(message: _233.QueryAddressUnbondingsProtoMsg): _233.QueryAddressUnbondings;
            toProto(message: _233.QueryAddressUnbondings): Uint8Array;
            toProtoMsg(message: _233.QueryAddressUnbondings): _233.QueryAddressUnbondingsProtoMsg;
        };
        QueryAddressUnbondingsResponse: {
            typeUrl: string;
            encode(message: _233.QueryAddressUnbondingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryAddressUnbondingsResponse;
            fromPartial(object: Partial<_233.QueryAddressUnbondingsResponse>): _233.QueryAddressUnbondingsResponse;
            fromAmino(object: _233.QueryAddressUnbondingsResponseAmino): _233.QueryAddressUnbondingsResponse;
            toAmino(message: _233.QueryAddressUnbondingsResponse): _233.QueryAddressUnbondingsResponseAmino;
            fromAminoMsg(object: _233.QueryAddressUnbondingsResponseAminoMsg): _233.QueryAddressUnbondingsResponse;
            fromProtoMsg(message: _233.QueryAddressUnbondingsResponseProtoMsg): _233.QueryAddressUnbondingsResponse;
            toProto(message: _233.QueryAddressUnbondingsResponse): Uint8Array;
            toProtoMsg(message: _233.QueryAddressUnbondingsResponse): _233.QueryAddressUnbondingsResponseProtoMsg;
        };
        QueryAllTradeRoutes: {
            typeUrl: string;
            encode(_: _233.QueryAllTradeRoutes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryAllTradeRoutes;
            fromPartial(_: Partial<_233.QueryAllTradeRoutes>): _233.QueryAllTradeRoutes;
            fromAmino(_: _233.QueryAllTradeRoutesAmino): _233.QueryAllTradeRoutes;
            toAmino(_: _233.QueryAllTradeRoutes): _233.QueryAllTradeRoutesAmino;
            fromAminoMsg(object: _233.QueryAllTradeRoutesAminoMsg): _233.QueryAllTradeRoutes;
            fromProtoMsg(message: _233.QueryAllTradeRoutesProtoMsg): _233.QueryAllTradeRoutes;
            toProto(message: _233.QueryAllTradeRoutes): Uint8Array;
            toProtoMsg(message: _233.QueryAllTradeRoutes): _233.QueryAllTradeRoutesProtoMsg;
        };
        QueryAllTradeRoutesResponse: {
            typeUrl: string;
            encode(message: _233.QueryAllTradeRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.QueryAllTradeRoutesResponse;
            fromPartial(object: Partial<_233.QueryAllTradeRoutesResponse>): _233.QueryAllTradeRoutesResponse;
            fromAmino(object: _233.QueryAllTradeRoutesResponseAmino): _233.QueryAllTradeRoutesResponse;
            toAmino(message: _233.QueryAllTradeRoutesResponse): _233.QueryAllTradeRoutesResponseAmino;
            fromAminoMsg(object: _233.QueryAllTradeRoutesResponseAminoMsg): _233.QueryAllTradeRoutesResponse;
            fromProtoMsg(message: _233.QueryAllTradeRoutesResponseProtoMsg): _233.QueryAllTradeRoutesResponse;
            toProto(message: _233.QueryAllTradeRoutesResponse): Uint8Array;
            toProtoMsg(message: _233.QueryAllTradeRoutesResponse): _233.QueryAllTradeRoutesResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _232.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.Params;
            fromPartial(object: Partial<_232.Params>): _232.Params;
            fromAmino(object: _232.ParamsAmino): _232.Params;
            toAmino(message: _232.Params): _232.ParamsAmino;
            fromAminoMsg(object: _232.ParamsAminoMsg): _232.Params;
            fromProtoMsg(message: _232.ParamsProtoMsg): _232.Params;
            toProto(message: _232.Params): Uint8Array;
            toProtoMsg(message: _232.Params): _232.ParamsProtoMsg;
        };
        StakeibcPacketData: {
            typeUrl: string;
            encode(message: _231.StakeibcPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.StakeibcPacketData;
            fromPartial(object: Partial<_231.StakeibcPacketData>): _231.StakeibcPacketData;
            fromAmino(object: _231.StakeibcPacketDataAmino): _231.StakeibcPacketData;
            toAmino(message: _231.StakeibcPacketData): _231.StakeibcPacketDataAmino;
            fromAminoMsg(object: _231.StakeibcPacketDataAminoMsg): _231.StakeibcPacketData;
            fromProtoMsg(message: _231.StakeibcPacketDataProtoMsg): _231.StakeibcPacketData;
            toProto(message: _231.StakeibcPacketData): Uint8Array;
            toProtoMsg(message: _231.StakeibcPacketData): _231.StakeibcPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _231.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.NoData;
            fromPartial(_: Partial<_231.NoData>): _231.NoData;
            fromAmino(_: _231.NoDataAmino): _231.NoData;
            toAmino(_: _231.NoData): _231.NoDataAmino;
            fromAminoMsg(object: _231.NoDataAminoMsg): _231.NoData;
            fromProtoMsg(message: _231.NoDataProtoMsg): _231.NoData;
            toProto(message: _231.NoData): Uint8Array;
            toProtoMsg(message: _231.NoData): _231.NoDataProtoMsg;
        };
        iCAAccountTypeFromJSON(object: any): _230.ICAAccountType;
        iCAAccountTypeToJSON(object: _230.ICAAccountType): string;
        ICAAccountType: typeof _230.ICAAccountType;
        ICAAccountTypeSDKType: typeof _230.ICAAccountType;
        ICAAccountTypeAmino: typeof _230.ICAAccountType;
        ICAAccount: {
            typeUrl: string;
            encode(message: _230.ICAAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.ICAAccount;
            fromPartial(object: Partial<_230.ICAAccount>): _230.ICAAccount;
            fromAmino(object: _230.ICAAccountAmino): _230.ICAAccount;
            toAmino(message: _230.ICAAccount): _230.ICAAccountAmino;
            fromAminoMsg(object: _230.ICAAccountAminoMsg): _230.ICAAccount;
            fromProtoMsg(message: _230.ICAAccountProtoMsg): _230.ICAAccount;
            toProto(message: _230.ICAAccount): Uint8Array;
            toProtoMsg(message: _230.ICAAccount): _230.ICAAccountProtoMsg;
        };
        CommunityPoolRebate: {
            typeUrl: string;
            encode(message: _229.CommunityPoolRebate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.CommunityPoolRebate;
            fromPartial(object: Partial<_229.CommunityPoolRebate>): _229.CommunityPoolRebate;
            fromAmino(object: _229.CommunityPoolRebateAmino): _229.CommunityPoolRebate;
            toAmino(message: _229.CommunityPoolRebate): _229.CommunityPoolRebateAmino;
            fromAminoMsg(object: _229.CommunityPoolRebateAminoMsg): _229.CommunityPoolRebate;
            fromProtoMsg(message: _229.CommunityPoolRebateProtoMsg): _229.CommunityPoolRebate;
            toProto(message: _229.CommunityPoolRebate): Uint8Array;
            toProtoMsg(message: _229.CommunityPoolRebate): _229.CommunityPoolRebateProtoMsg;
        };
        HostZone: {
            typeUrl: string;
            encode(message: _229.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.HostZone;
            fromPartial(object: Partial<_229.HostZone>): _229.HostZone;
            fromAmino(object: _229.HostZoneAmino): _229.HostZone;
            toAmino(message: _229.HostZone): _229.HostZoneAmino;
            fromAminoMsg(object: _229.HostZoneAminoMsg): _229.HostZone;
            fromProtoMsg(message: _229.HostZoneProtoMsg): _229.HostZone;
            toProto(message: _229.HostZone): Uint8Array;
            toProtoMsg(message: _229.HostZone): _229.HostZoneProtoMsg;
        };
        AddValidatorsProposal: {
            typeUrl: string;
            encode(message: _228.AddValidatorsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.AddValidatorsProposal;
            fromPartial(object: Partial<_228.AddValidatorsProposal>): _228.AddValidatorsProposal;
            fromAmino(object: _228.AddValidatorsProposalAmino): _228.AddValidatorsProposal;
            toAmino(message: _228.AddValidatorsProposal): _228.AddValidatorsProposalAmino;
            fromAminoMsg(object: _228.AddValidatorsProposalAminoMsg): _228.AddValidatorsProposal;
            fromProtoMsg(message: _228.AddValidatorsProposalProtoMsg): _228.AddValidatorsProposal;
            toProto(message: _228.AddValidatorsProposal): Uint8Array;
            toProtoMsg(message: _228.AddValidatorsProposal): _228.AddValidatorsProposalProtoMsg;
        };
        ToggleLSMProposal: {
            typeUrl: string;
            encode(message: _228.ToggleLSMProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.ToggleLSMProposal;
            fromPartial(object: Partial<_228.ToggleLSMProposal>): _228.ToggleLSMProposal;
            fromAmino(object: _228.ToggleLSMProposalAmino): _228.ToggleLSMProposal;
            toAmino(message: _228.ToggleLSMProposal): _228.ToggleLSMProposalAmino;
            fromAminoMsg(object: _228.ToggleLSMProposalAminoMsg): _228.ToggleLSMProposal;
            fromProtoMsg(message: _228.ToggleLSMProposalProtoMsg): _228.ToggleLSMProposal;
            toProto(message: _228.ToggleLSMProposal): Uint8Array;
            toProtoMsg(message: _228.ToggleLSMProposal): _228.ToggleLSMProposalProtoMsg;
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
        EpochTracker: {
            typeUrl: string;
            encode(message: _226.EpochTracker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.EpochTracker;
            fromPartial(object: Partial<_226.EpochTracker>): _226.EpochTracker;
            fromAmino(object: _226.EpochTrackerAmino): _226.EpochTracker;
            toAmino(message: _226.EpochTracker): _226.EpochTrackerAmino;
            fromAminoMsg(object: _226.EpochTrackerAminoMsg): _226.EpochTracker;
            fromProtoMsg(message: _226.EpochTrackerProtoMsg): _226.EpochTracker;
            toProto(message: _226.EpochTracker): Uint8Array;
            toProtoMsg(message: _226.EpochTracker): _226.EpochTrackerProtoMsg;
        };
        SplitDelegation: {
            typeUrl: string;
            encode(message: _225.SplitDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.SplitDelegation;
            fromPartial(object: Partial<_225.SplitDelegation>): _225.SplitDelegation;
            fromAmino(object: _225.SplitDelegationAmino): _225.SplitDelegation;
            toAmino(message: _225.SplitDelegation): _225.SplitDelegationAmino;
            fromAminoMsg(object: _225.SplitDelegationAminoMsg): _225.SplitDelegation;
            fromProtoMsg(message: _225.SplitDelegationProtoMsg): _225.SplitDelegation;
            toProto(message: _225.SplitDelegation): Uint8Array;
            toProtoMsg(message: _225.SplitDelegation): _225.SplitDelegationProtoMsg;
        };
        SplitUndelegation: {
            typeUrl: string;
            encode(message: _225.SplitUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.SplitUndelegation;
            fromPartial(object: Partial<_225.SplitUndelegation>): _225.SplitUndelegation;
            fromAmino(object: _225.SplitUndelegationAmino): _225.SplitUndelegation;
            toAmino(message: _225.SplitUndelegation): _225.SplitUndelegationAmino;
            fromAminoMsg(object: _225.SplitUndelegationAminoMsg): _225.SplitUndelegation;
            fromProtoMsg(message: _225.SplitUndelegationProtoMsg): _225.SplitUndelegation;
            toProto(message: _225.SplitUndelegation): Uint8Array;
            toProtoMsg(message: _225.SplitUndelegation): _225.SplitUndelegationProtoMsg;
        };
        DelegateCallback: {
            typeUrl: string;
            encode(message: _225.DelegateCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.DelegateCallback;
            fromPartial(object: Partial<_225.DelegateCallback>): _225.DelegateCallback;
            fromAmino(object: _225.DelegateCallbackAmino): _225.DelegateCallback;
            toAmino(message: _225.DelegateCallback): _225.DelegateCallbackAmino;
            fromAminoMsg(object: _225.DelegateCallbackAminoMsg): _225.DelegateCallback;
            fromProtoMsg(message: _225.DelegateCallbackProtoMsg): _225.DelegateCallback;
            toProto(message: _225.DelegateCallback): Uint8Array;
            toProtoMsg(message: _225.DelegateCallback): _225.DelegateCallbackProtoMsg;
        };
        ClaimCallback: {
            typeUrl: string;
            encode(message: _225.ClaimCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.ClaimCallback;
            fromPartial(object: Partial<_225.ClaimCallback>): _225.ClaimCallback;
            fromAmino(object: _225.ClaimCallbackAmino): _225.ClaimCallback;
            toAmino(message: _225.ClaimCallback): _225.ClaimCallbackAmino;
            fromAminoMsg(object: _225.ClaimCallbackAminoMsg): _225.ClaimCallback;
            fromProtoMsg(message: _225.ClaimCallbackProtoMsg): _225.ClaimCallback;
            toProto(message: _225.ClaimCallback): Uint8Array;
            toProtoMsg(message: _225.ClaimCallback): _225.ClaimCallbackProtoMsg;
        };
        ReinvestCallback: {
            typeUrl: string;
            encode(message: _225.ReinvestCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.ReinvestCallback;
            fromPartial(object: Partial<_225.ReinvestCallback>): _225.ReinvestCallback;
            fromAmino(object: _225.ReinvestCallbackAmino): _225.ReinvestCallback;
            toAmino(message: _225.ReinvestCallback): _225.ReinvestCallbackAmino;
            fromAminoMsg(object: _225.ReinvestCallbackAminoMsg): _225.ReinvestCallback;
            fromProtoMsg(message: _225.ReinvestCallbackProtoMsg): _225.ReinvestCallback;
            toProto(message: _225.ReinvestCallback): Uint8Array;
            toProtoMsg(message: _225.ReinvestCallback): _225.ReinvestCallbackProtoMsg;
        };
        UndelegateCallback: {
            typeUrl: string;
            encode(message: _225.UndelegateCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.UndelegateCallback;
            fromPartial(object: Partial<_225.UndelegateCallback>): _225.UndelegateCallback;
            fromAmino(object: _225.UndelegateCallbackAmino): _225.UndelegateCallback;
            toAmino(message: _225.UndelegateCallback): _225.UndelegateCallbackAmino;
            fromAminoMsg(object: _225.UndelegateCallbackAminoMsg): _225.UndelegateCallback;
            fromProtoMsg(message: _225.UndelegateCallbackProtoMsg): _225.UndelegateCallback;
            toProto(message: _225.UndelegateCallback): Uint8Array;
            toProtoMsg(message: _225.UndelegateCallback): _225.UndelegateCallbackProtoMsg;
        };
        RedemptionCallback: {
            typeUrl: string;
            encode(message: _225.RedemptionCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.RedemptionCallback;
            fromPartial(object: Partial<_225.RedemptionCallback>): _225.RedemptionCallback;
            fromAmino(object: _225.RedemptionCallbackAmino): _225.RedemptionCallback;
            toAmino(message: _225.RedemptionCallback): _225.RedemptionCallbackAmino;
            fromAminoMsg(object: _225.RedemptionCallbackAminoMsg): _225.RedemptionCallback;
            fromProtoMsg(message: _225.RedemptionCallbackProtoMsg): _225.RedemptionCallback;
            toProto(message: _225.RedemptionCallback): Uint8Array;
            toProtoMsg(message: _225.RedemptionCallback): _225.RedemptionCallbackProtoMsg;
        };
        Rebalancing: {
            typeUrl: string;
            encode(message: _225.Rebalancing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.Rebalancing;
            fromPartial(object: Partial<_225.Rebalancing>): _225.Rebalancing;
            fromAmino(object: _225.RebalancingAmino): _225.Rebalancing;
            toAmino(message: _225.Rebalancing): _225.RebalancingAmino;
            fromAminoMsg(object: _225.RebalancingAminoMsg): _225.Rebalancing;
            fromProtoMsg(message: _225.RebalancingProtoMsg): _225.Rebalancing;
            toProto(message: _225.Rebalancing): Uint8Array;
            toProtoMsg(message: _225.Rebalancing): _225.RebalancingProtoMsg;
        };
        RebalanceCallback: {
            typeUrl: string;
            encode(message: _225.RebalanceCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.RebalanceCallback;
            fromPartial(object: Partial<_225.RebalanceCallback>): _225.RebalanceCallback;
            fromAmino(object: _225.RebalanceCallbackAmino): _225.RebalanceCallback;
            toAmino(message: _225.RebalanceCallback): _225.RebalanceCallbackAmino;
            fromAminoMsg(object: _225.RebalanceCallbackAminoMsg): _225.RebalanceCallback;
            fromProtoMsg(message: _225.RebalanceCallbackProtoMsg): _225.RebalanceCallback;
            toProto(message: _225.RebalanceCallback): Uint8Array;
            toProtoMsg(message: _225.RebalanceCallback): _225.RebalanceCallbackProtoMsg;
        };
        DetokenizeSharesCallback: {
            typeUrl: string;
            encode(message: _225.DetokenizeSharesCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.DetokenizeSharesCallback;
            fromPartial(object: Partial<_225.DetokenizeSharesCallback>): _225.DetokenizeSharesCallback;
            fromAmino(object: _225.DetokenizeSharesCallbackAmino): _225.DetokenizeSharesCallback;
            toAmino(message: _225.DetokenizeSharesCallback): _225.DetokenizeSharesCallbackAmino;
            fromAminoMsg(object: _225.DetokenizeSharesCallbackAminoMsg): _225.DetokenizeSharesCallback;
            fromProtoMsg(message: _225.DetokenizeSharesCallbackProtoMsg): _225.DetokenizeSharesCallback;
            toProto(message: _225.DetokenizeSharesCallback): Uint8Array;
            toProtoMsg(message: _225.DetokenizeSharesCallback): _225.DetokenizeSharesCallbackProtoMsg;
        };
        LSMLiquidStake: {
            typeUrl: string;
            encode(message: _225.LSMLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.LSMLiquidStake;
            fromPartial(object: Partial<_225.LSMLiquidStake>): _225.LSMLiquidStake;
            fromAmino(object: _225.LSMLiquidStakeAmino): _225.LSMLiquidStake;
            toAmino(message: _225.LSMLiquidStake): _225.LSMLiquidStakeAmino;
            fromAminoMsg(object: _225.LSMLiquidStakeAminoMsg): _225.LSMLiquidStake;
            fromProtoMsg(message: _225.LSMLiquidStakeProtoMsg): _225.LSMLiquidStake;
            toProto(message: _225.LSMLiquidStake): Uint8Array;
            toProtoMsg(message: _225.LSMLiquidStake): _225.LSMLiquidStakeProtoMsg;
        };
        ValidatorSharesToTokensQueryCallback: {
            typeUrl: string;
            encode(message: _225.ValidatorSharesToTokensQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.ValidatorSharesToTokensQueryCallback;
            fromPartial(object: Partial<_225.ValidatorSharesToTokensQueryCallback>): _225.ValidatorSharesToTokensQueryCallback;
            fromAmino(object: _225.ValidatorSharesToTokensQueryCallbackAmino): _225.ValidatorSharesToTokensQueryCallback;
            toAmino(message: _225.ValidatorSharesToTokensQueryCallback): _225.ValidatorSharesToTokensQueryCallbackAmino;
            fromAminoMsg(object: _225.ValidatorSharesToTokensQueryCallbackAminoMsg): _225.ValidatorSharesToTokensQueryCallback;
            fromProtoMsg(message: _225.ValidatorSharesToTokensQueryCallbackProtoMsg): _225.ValidatorSharesToTokensQueryCallback;
            toProto(message: _225.ValidatorSharesToTokensQueryCallback): Uint8Array;
            toProtoMsg(message: _225.ValidatorSharesToTokensQueryCallback): _225.ValidatorSharesToTokensQueryCallbackProtoMsg;
        };
        DelegatorSharesQueryCallback: {
            typeUrl: string;
            encode(message: _225.DelegatorSharesQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.DelegatorSharesQueryCallback;
            fromPartial(object: Partial<_225.DelegatorSharesQueryCallback>): _225.DelegatorSharesQueryCallback;
            fromAmino(object: _225.DelegatorSharesQueryCallbackAmino): _225.DelegatorSharesQueryCallback;
            toAmino(message: _225.DelegatorSharesQueryCallback): _225.DelegatorSharesQueryCallbackAmino;
            fromAminoMsg(object: _225.DelegatorSharesQueryCallbackAminoMsg): _225.DelegatorSharesQueryCallback;
            fromProtoMsg(message: _225.DelegatorSharesQueryCallbackProtoMsg): _225.DelegatorSharesQueryCallback;
            toProto(message: _225.DelegatorSharesQueryCallback): Uint8Array;
            toProtoMsg(message: _225.DelegatorSharesQueryCallback): _225.DelegatorSharesQueryCallbackProtoMsg;
        };
        CommunityPoolBalanceQueryCallback: {
            typeUrl: string;
            encode(message: _225.CommunityPoolBalanceQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.CommunityPoolBalanceQueryCallback;
            fromPartial(object: Partial<_225.CommunityPoolBalanceQueryCallback>): _225.CommunityPoolBalanceQueryCallback;
            fromAmino(object: _225.CommunityPoolBalanceQueryCallbackAmino): _225.CommunityPoolBalanceQueryCallback;
            toAmino(message: _225.CommunityPoolBalanceQueryCallback): _225.CommunityPoolBalanceQueryCallbackAmino;
            fromAminoMsg(object: _225.CommunityPoolBalanceQueryCallbackAminoMsg): _225.CommunityPoolBalanceQueryCallback;
            fromProtoMsg(message: _225.CommunityPoolBalanceQueryCallbackProtoMsg): _225.CommunityPoolBalanceQueryCallback;
            toProto(message: _225.CommunityPoolBalanceQueryCallback): Uint8Array;
            toProtoMsg(message: _225.CommunityPoolBalanceQueryCallback): _225.CommunityPoolBalanceQueryCallbackProtoMsg;
        };
        TradeRouteCallback: {
            typeUrl: string;
            encode(message: _225.TradeRouteCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _225.TradeRouteCallback;
            fromPartial(object: Partial<_225.TradeRouteCallback>): _225.TradeRouteCallback;
            fromAmino(object: _225.TradeRouteCallbackAmino): _225.TradeRouteCallback;
            toAmino(message: _225.TradeRouteCallback): _225.TradeRouteCallbackAmino;
            fromAminoMsg(object: _225.TradeRouteCallbackAminoMsg): _225.TradeRouteCallback;
            fromProtoMsg(message: _225.TradeRouteCallbackProtoMsg): _225.TradeRouteCallback;
            toProto(message: _225.TradeRouteCallback): Uint8Array;
            toProtoMsg(message: _225.TradeRouteCallback): _225.TradeRouteCallbackProtoMsg;
        };
        AddressUnbonding: {
            typeUrl: string;
            encode(message: _224.AddressUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.AddressUnbonding;
            fromPartial(object: Partial<_224.AddressUnbonding>): _224.AddressUnbonding;
            fromAmino(object: _224.AddressUnbondingAmino): _224.AddressUnbonding;
            toAmino(message: _224.AddressUnbonding): _224.AddressUnbondingAmino;
            fromAminoMsg(object: _224.AddressUnbondingAminoMsg): _224.AddressUnbonding;
            fromProtoMsg(message: _224.AddressUnbondingProtoMsg): _224.AddressUnbonding;
            toProto(message: _224.AddressUnbonding): Uint8Array;
            toProtoMsg(message: _224.AddressUnbonding): _224.AddressUnbondingProtoMsg;
        };
    };
    const staketia: {
        MsgClientImpl: typeof _394.MsgClientImpl;
        QueryClientImpl: typeof _384.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            hostZone(request?: _238.QueryHostZoneRequest): Promise<_238.QueryHostZoneResponse>;
            delegationRecords(request: _238.QueryDelegationRecordsRequest): Promise<_238.QueryDelegationRecordsResponse>;
            unbondingRecords(request: _238.QueryUnbondingRecordsRequest): Promise<_238.QueryUnbondingRecordsResponse>;
            redemptionRecord(request: _238.QueryRedemptionRecordRequest): Promise<_238.QueryRedemptionRecordResponse>;
            redemptionRecords(request: _238.QueryRedemptionRecordsRequest): Promise<_238.QueryRedemptionRecordsResponse>;
            slashRecords(request?: _238.QuerySlashRecordsRequest): Promise<_238.QuerySlashRecordsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _240.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _240.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmDelegation(value: _240.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUndelegation(value: _240.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUnbondedTokenSweep(value: _240.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                adjustDelegatedBalance(value: _240.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _240.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _240.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                refreshRedemptionRate(value: _240.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteDelegationRecord(value: _240.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteUnbondingRecord(value: _240.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteRedemptionRecord(value: _240.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOperatorAddress(value: _240.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _240.MsgLiquidStake): {
                    typeUrl: string;
                    value: _240.MsgLiquidStake;
                };
                redeemStake(value: _240.MsgRedeemStake): {
                    typeUrl: string;
                    value: _240.MsgRedeemStake;
                };
                confirmDelegation(value: _240.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _240.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _240.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _240.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _240.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _240.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _240.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _240.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _240.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _240.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _240.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _240.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _240.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _240.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _240.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _240.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _240.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _240.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _240.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _240.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _240.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _240.MsgSetOperatorAddress;
                };
            };
            fromPartial: {
                liquidStake(value: _240.MsgLiquidStake): {
                    typeUrl: string;
                    value: _240.MsgLiquidStake;
                };
                redeemStake(value: _240.MsgRedeemStake): {
                    typeUrl: string;
                    value: _240.MsgRedeemStake;
                };
                confirmDelegation(value: _240.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _240.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _240.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _240.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _240.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _240.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _240.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _240.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _240.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _240.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _240.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _240.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _240.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _240.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _240.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _240.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _240.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _240.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _240.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _240.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _240.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _240.MsgSetOperatorAddress;
                };
            };
        };
        AminoConverter: {
            "/stride.staketia.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _240.MsgLiquidStake) => _240.MsgLiquidStakeAmino;
                fromAmino: (object: _240.MsgLiquidStakeAmino) => _240.MsgLiquidStake;
            };
            "/stride.staketia.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _240.MsgRedeemStake) => _240.MsgRedeemStakeAmino;
                fromAmino: (object: _240.MsgRedeemStakeAmino) => _240.MsgRedeemStake;
            };
            "/stride.staketia.MsgConfirmDelegation": {
                aminoType: string;
                toAmino: (message: _240.MsgConfirmDelegation) => _240.MsgConfirmDelegationAmino;
                fromAmino: (object: _240.MsgConfirmDelegationAmino) => _240.MsgConfirmDelegation;
            };
            "/stride.staketia.MsgConfirmUndelegation": {
                aminoType: string;
                toAmino: (message: _240.MsgConfirmUndelegation) => _240.MsgConfirmUndelegationAmino;
                fromAmino: (object: _240.MsgConfirmUndelegationAmino) => _240.MsgConfirmUndelegation;
            };
            "/stride.staketia.MsgConfirmUnbondedTokenSweep": {
                aminoType: string;
                toAmino: (message: _240.MsgConfirmUnbondedTokenSweep) => _240.MsgConfirmUnbondedTokenSweepAmino;
                fromAmino: (object: _240.MsgConfirmUnbondedTokenSweepAmino) => _240.MsgConfirmUnbondedTokenSweep;
            };
            "/stride.staketia.MsgAdjustDelegatedBalance": {
                aminoType: string;
                toAmino: (message: _240.MsgAdjustDelegatedBalance) => _240.MsgAdjustDelegatedBalanceAmino;
                fromAmino: (object: _240.MsgAdjustDelegatedBalanceAmino) => _240.MsgAdjustDelegatedBalance;
            };
            "/stride.staketia.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _240.MsgUpdateInnerRedemptionRateBounds) => _240.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _240.MsgUpdateInnerRedemptionRateBoundsAmino) => _240.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.staketia.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _240.MsgResumeHostZone) => _240.MsgResumeHostZoneAmino;
                fromAmino: (object: _240.MsgResumeHostZoneAmino) => _240.MsgResumeHostZone;
            };
            "/stride.staketia.MsgRefreshRedemptionRate": {
                aminoType: string;
                toAmino: (message: _240.MsgRefreshRedemptionRate) => _240.MsgRefreshRedemptionRateAmino;
                fromAmino: (object: _240.MsgRefreshRedemptionRateAmino) => _240.MsgRefreshRedemptionRate;
            };
            "/stride.staketia.MsgOverwriteDelegationRecord": {
                aminoType: string;
                toAmino: (message: _240.MsgOverwriteDelegationRecord) => _240.MsgOverwriteDelegationRecordAmino;
                fromAmino: (object: _240.MsgOverwriteDelegationRecordAmino) => _240.MsgOverwriteDelegationRecord;
            };
            "/stride.staketia.MsgOverwriteUnbondingRecord": {
                aminoType: string;
                toAmino: (message: _240.MsgOverwriteUnbondingRecord) => _240.MsgOverwriteUnbondingRecordAmino;
                fromAmino: (object: _240.MsgOverwriteUnbondingRecordAmino) => _240.MsgOverwriteUnbondingRecord;
            };
            "/stride.staketia.MsgOverwriteRedemptionRecord": {
                aminoType: string;
                toAmino: (message: _240.MsgOverwriteRedemptionRecord) => _240.MsgOverwriteRedemptionRecordAmino;
                fromAmino: (object: _240.MsgOverwriteRedemptionRecordAmino) => _240.MsgOverwriteRedemptionRecord;
            };
            "/stride.staketia.MsgSetOperatorAddress": {
                aminoType: string;
                toAmino: (message: _240.MsgSetOperatorAddress) => _240.MsgSetOperatorAddressAmino;
                fromAmino: (object: _240.MsgSetOperatorAddressAmino) => _240.MsgSetOperatorAddress;
            };
        };
        overwritableRecordTypeFromJSON(object: any): _240.OverwritableRecordType;
        overwritableRecordTypeToJSON(object: _240.OverwritableRecordType): string;
        OverwritableRecordType: typeof _240.OverwritableRecordType;
        OverwritableRecordTypeSDKType: typeof _240.OverwritableRecordType;
        OverwritableRecordTypeAmino: typeof _240.OverwritableRecordType;
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _240.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.MsgLiquidStake;
            fromPartial(object: Partial<_240.MsgLiquidStake>): _240.MsgLiquidStake;
            fromAmino(object: _240.MsgLiquidStakeAmino): _240.MsgLiquidStake;
            toAmino(message: _240.MsgLiquidStake): _240.MsgLiquidStakeAmino;
            fromAminoMsg(object: _240.MsgLiquidStakeAminoMsg): _240.MsgLiquidStake;
            toAminoMsg(message: _240.MsgLiquidStake): _240.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _240.MsgLiquidStakeProtoMsg): _240.MsgLiquidStake;
            toProto(message: _240.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _240.MsgLiquidStake): _240.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _240.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_240.MsgLiquidStakeResponse>): _240.MsgLiquidStakeResponse;
            fromAmino(object: _240.MsgLiquidStakeResponseAmino): _240.MsgLiquidStakeResponse;
            toAmino(message: _240.MsgLiquidStakeResponse): _240.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _240.MsgLiquidStakeResponseAminoMsg): _240.MsgLiquidStakeResponse;
            fromProtoMsg(message: _240.MsgLiquidStakeResponseProtoMsg): _240.MsgLiquidStakeResponse;
            toProto(message: _240.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _240.MsgLiquidStakeResponse): _240.MsgLiquidStakeResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _240.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.MsgRedeemStake;
            fromPartial(object: Partial<_240.MsgRedeemStake>): _240.MsgRedeemStake;
            fromAmino(object: _240.MsgRedeemStakeAmino): _240.MsgRedeemStake;
            toAmino(message: _240.MsgRedeemStake): _240.MsgRedeemStakeAmino;
            fromAminoMsg(object: _240.MsgRedeemStakeAminoMsg): _240.MsgRedeemStake;
            toAminoMsg(message: _240.MsgRedeemStake): _240.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _240.MsgRedeemStakeProtoMsg): _240.MsgRedeemStake;
            toProto(message: _240.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _240.MsgRedeemStake): _240.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(message: _240.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.MsgRedeemStakeResponse;
            fromPartial(object: Partial<_240.MsgRedeemStakeResponse>): _240.MsgRedeemStakeResponse;
            fromAmino(object: _240.MsgRedeemStakeResponseAmino): _240.MsgRedeemStakeResponse;
            toAmino(message: _240.MsgRedeemStakeResponse): _240.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _240.MsgRedeemStakeResponseAminoMsg): _240.MsgRedeemStakeResponse;
            fromProtoMsg(message: _240.MsgRedeemStakeResponseProtoMsg): _240.MsgRedeemStakeResponse;
            toProto(message: _240.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _240.MsgRedeemStakeResponse): _240.MsgRedeemStakeResponseProtoMsg;
        };
        MsgConfirmDelegation: {
            typeUrl: string;
            encode(message: _240.MsgConfirmDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.MsgConfirmDelegation;
            fromPartial(object: Partial<_240.MsgConfirmDelegation>): _240.MsgConfirmDelegation;
            fromAmino(object: _240.MsgConfirmDelegationAmino): _240.MsgConfirmDelegation;
            toAmino(message: _240.MsgConfirmDelegation): _240.MsgConfirmDelegationAmino;
            fromAminoMsg(object: _240.MsgConfirmDelegationAminoMsg): _240.MsgConfirmDelegation;
            toAminoMsg(message: _240.MsgConfirmDelegation): _240.MsgConfirmDelegationAminoMsg;
            fromProtoMsg(message: _240.MsgConfirmDelegationProtoMsg): _240.MsgConfirmDelegation;
            toProto(message: _240.MsgConfirmDelegation): Uint8Array;
            toProtoMsg(message: _240.MsgConfirmDelegation): _240.MsgConfirmDelegationProtoMsg;
        };
        MsgConfirmDelegationResponse: {
            typeUrl: string;
            encode(_: _240.MsgConfirmDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.MsgConfirmDelegationResponse;
            fromPartial(_: Partial<_240.MsgConfirmDelegationResponse>): _240.MsgConfirmDelegationResponse;
            fromAmino(_: _240.MsgConfirmDelegationResponseAmino): _240.MsgConfirmDelegationResponse;
            toAmino(_: _240.MsgConfirmDelegationResponse): _240.MsgConfirmDelegationResponseAmino;
            fromAminoMsg(object: _240.MsgConfirmDelegationResponseAminoMsg): _240.MsgConfirmDelegationResponse;
            fromProtoMsg(message: _240.MsgConfirmDelegationResponseProtoMsg): _240.MsgConfirmDelegationResponse;
            toProto(message: _240.MsgConfirmDelegationResponse): Uint8Array;
            toProtoMsg(message: _240.MsgConfirmDelegationResponse): _240.MsgConfirmDelegationResponseProtoMsg;
        };
        MsgConfirmUndelegation: {
            typeUrl: string;
            encode(message: _240.MsgConfirmUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.MsgConfirmUndelegation;
            fromPartial(object: Partial<_240.MsgConfirmUndelegation>): _240.MsgConfirmUndelegation;
            fromAmino(object: _240.MsgConfirmUndelegationAmino): _240.MsgConfirmUndelegation;
            toAmino(message: _240.MsgConfirmUndelegation): _240.MsgConfirmUndelegationAmino;
            fromAminoMsg(object: _240.MsgConfirmUndelegationAminoMsg): _240.MsgConfirmUndelegation;
            toAminoMsg(message: _240.MsgConfirmUndelegation): _240.MsgConfirmUndelegationAminoMsg;
            fromProtoMsg(message: _240.MsgConfirmUndelegationProtoMsg): _240.MsgConfirmUndelegation;
            toProto(message: _240.MsgConfirmUndelegation): Uint8Array;
            toProtoMsg(message: _240.MsgConfirmUndelegation): _240.MsgConfirmUndelegationProtoMsg;
        };
        MsgConfirmUndelegationResponse: {
            typeUrl: string;
            encode(_: _240.MsgConfirmUndelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.MsgConfirmUndelegationResponse;
            fromPartial(_: Partial<_240.MsgConfirmUndelegationResponse>): _240.MsgConfirmUndelegationResponse;
            fromAmino(_: _240.MsgConfirmUndelegationResponseAmino): _240.MsgConfirmUndelegationResponse;
            toAmino(_: _240.MsgConfirmUndelegationResponse): _240.MsgConfirmUndelegationResponseAmino;
            fromAminoMsg(object: _240.MsgConfirmUndelegationResponseAminoMsg): _240.MsgConfirmUndelegationResponse;
            fromProtoMsg(message: _240.MsgConfirmUndelegationResponseProtoMsg): _240.MsgConfirmUndelegationResponse;
            toProto(message: _240.MsgConfirmUndelegationResponse): Uint8Array;
            toProtoMsg(message: _240.MsgConfirmUndelegationResponse): _240.MsgConfirmUndelegationResponseProtoMsg;
        };
        MsgConfirmUnbondedTokenSweep: {
            typeUrl: string;
            encode(message: _240.MsgConfirmUnbondedTokenSweep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.MsgConfirmUnbondedTokenSweep;
            fromPartial(object: Partial<_240.MsgConfirmUnbondedTokenSweep>): _240.MsgConfirmUnbondedTokenSweep;
            fromAmino(object: _240.MsgConfirmUnbondedTokenSweepAmino): _240.MsgConfirmUnbondedTokenSweep;
            toAmino(message: _240.MsgConfirmUnbondedTokenSweep): _240.MsgConfirmUnbondedTokenSweepAmino;
            fromAminoMsg(object: _240.MsgConfirmUnbondedTokenSweepAminoMsg): _240.MsgConfirmUnbondedTokenSweep;
            toAminoMsg(message: _240.MsgConfirmUnbondedTokenSweep): _240.MsgConfirmUnbondedTokenSweepAminoMsg;
            fromProtoMsg(message: _240.MsgConfirmUnbondedTokenSweepProtoMsg): _240.MsgConfirmUnbondedTokenSweep;
            toProto(message: _240.MsgConfirmUnbondedTokenSweep): Uint8Array;
            toProtoMsg(message: _240.MsgConfirmUnbondedTokenSweep): _240.MsgConfirmUnbondedTokenSweepProtoMsg;
        };
        MsgConfirmUnbondedTokenSweepResponse: {
            typeUrl: string;
            encode(_: _240.MsgConfirmUnbondedTokenSweepResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.MsgConfirmUnbondedTokenSweepResponse;
            fromPartial(_: Partial<_240.MsgConfirmUnbondedTokenSweepResponse>): _240.MsgConfirmUnbondedTokenSweepResponse;
            fromAmino(_: _240.MsgConfirmUnbondedTokenSweepResponseAmino): _240.MsgConfirmUnbondedTokenSweepResponse;
            toAmino(_: _240.MsgConfirmUnbondedTokenSweepResponse): _240.MsgConfirmUnbondedTokenSweepResponseAmino;
            fromAminoMsg(object: _240.MsgConfirmUnbondedTokenSweepResponseAminoMsg): _240.MsgConfirmUnbondedTokenSweepResponse;
            fromProtoMsg(message: _240.MsgConfirmUnbondedTokenSweepResponseProtoMsg): _240.MsgConfirmUnbondedTokenSweepResponse;
            toProto(message: _240.MsgConfirmUnbondedTokenSweepResponse): Uint8Array;
            toProtoMsg(message: _240.MsgConfirmUnbondedTokenSweepResponse): _240.MsgConfirmUnbondedTokenSweepResponseProtoMsg;
        };
        MsgAdjustDelegatedBalance: {
            typeUrl: string;
            encode(message: _240.MsgAdjustDelegatedBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.MsgAdjustDelegatedBalance;
            fromPartial(object: Partial<_240.MsgAdjustDelegatedBalance>): _240.MsgAdjustDelegatedBalance;
            fromAmino(object: _240.MsgAdjustDelegatedBalanceAmino): _240.MsgAdjustDelegatedBalance;
            toAmino(message: _240.MsgAdjustDelegatedBalance): _240.MsgAdjustDelegatedBalanceAmino;
            fromAminoMsg(object: _240.MsgAdjustDelegatedBalanceAminoMsg): _240.MsgAdjustDelegatedBalance;
            toAminoMsg(message: _240.MsgAdjustDelegatedBalance): _240.MsgAdjustDelegatedBalanceAminoMsg;
            fromProtoMsg(message: _240.MsgAdjustDelegatedBalanceProtoMsg): _240.MsgAdjustDelegatedBalance;
            toProto(message: _240.MsgAdjustDelegatedBalance): Uint8Array;
            toProtoMsg(message: _240.MsgAdjustDelegatedBalance): _240.MsgAdjustDelegatedBalanceProtoMsg;
        };
        MsgAdjustDelegatedBalanceResponse: {
            typeUrl: string;
            encode(_: _240.MsgAdjustDelegatedBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.MsgAdjustDelegatedBalanceResponse;
            fromPartial(_: Partial<_240.MsgAdjustDelegatedBalanceResponse>): _240.MsgAdjustDelegatedBalanceResponse;
            fromAmino(_: _240.MsgAdjustDelegatedBalanceResponseAmino): _240.MsgAdjustDelegatedBalanceResponse;
            toAmino(_: _240.MsgAdjustDelegatedBalanceResponse): _240.MsgAdjustDelegatedBalanceResponseAmino;
            fromAminoMsg(object: _240.MsgAdjustDelegatedBalanceResponseAminoMsg): _240.MsgAdjustDelegatedBalanceResponse;
            fromProtoMsg(message: _240.MsgAdjustDelegatedBalanceResponseProtoMsg): _240.MsgAdjustDelegatedBalanceResponse;
            toProto(message: _240.MsgAdjustDelegatedBalanceResponse): Uint8Array;
            toProtoMsg(message: _240.MsgAdjustDelegatedBalanceResponse): _240.MsgAdjustDelegatedBalanceResponseProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _240.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_240.MsgUpdateInnerRedemptionRateBounds>): _240.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _240.MsgUpdateInnerRedemptionRateBoundsAmino): _240.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _240.MsgUpdateInnerRedemptionRateBounds): _240.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _240.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _240.MsgUpdateInnerRedemptionRateBounds;
            toAminoMsg(message: _240.MsgUpdateInnerRedemptionRateBounds): _240.MsgUpdateInnerRedemptionRateBoundsAminoMsg;
            fromProtoMsg(message: _240.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _240.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _240.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _240.MsgUpdateInnerRedemptionRateBounds): _240.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _240.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_240.MsgUpdateInnerRedemptionRateBoundsResponse>): _240.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _240.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _240.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _240.MsgUpdateInnerRedemptionRateBoundsResponse): _240.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _240.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _240.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _240.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _240.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _240.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _240.MsgUpdateInnerRedemptionRateBoundsResponse): _240.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _240.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.MsgResumeHostZone;
            fromPartial(object: Partial<_240.MsgResumeHostZone>): _240.MsgResumeHostZone;
            fromAmino(object: _240.MsgResumeHostZoneAmino): _240.MsgResumeHostZone;
            toAmino(message: _240.MsgResumeHostZone): _240.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _240.MsgResumeHostZoneAminoMsg): _240.MsgResumeHostZone;
            toAminoMsg(message: _240.MsgResumeHostZone): _240.MsgResumeHostZoneAminoMsg;
            fromProtoMsg(message: _240.MsgResumeHostZoneProtoMsg): _240.MsgResumeHostZone;
            toProto(message: _240.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _240.MsgResumeHostZone): _240.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _240.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_240.MsgResumeHostZoneResponse>): _240.MsgResumeHostZoneResponse;
            fromAmino(_: _240.MsgResumeHostZoneResponseAmino): _240.MsgResumeHostZoneResponse;
            toAmino(_: _240.MsgResumeHostZoneResponse): _240.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _240.MsgResumeHostZoneResponseAminoMsg): _240.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _240.MsgResumeHostZoneResponseProtoMsg): _240.MsgResumeHostZoneResponse;
            toProto(message: _240.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _240.MsgResumeHostZoneResponse): _240.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgRefreshRedemptionRate: {
            typeUrl: string;
            encode(message: _240.MsgRefreshRedemptionRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.MsgRefreshRedemptionRate;
            fromPartial(object: Partial<_240.MsgRefreshRedemptionRate>): _240.MsgRefreshRedemptionRate;
            fromAmino(object: _240.MsgRefreshRedemptionRateAmino): _240.MsgRefreshRedemptionRate;
            toAmino(message: _240.MsgRefreshRedemptionRate): _240.MsgRefreshRedemptionRateAmino;
            fromAminoMsg(object: _240.MsgRefreshRedemptionRateAminoMsg): _240.MsgRefreshRedemptionRate;
            toAminoMsg(message: _240.MsgRefreshRedemptionRate): _240.MsgRefreshRedemptionRateAminoMsg;
            fromProtoMsg(message: _240.MsgRefreshRedemptionRateProtoMsg): _240.MsgRefreshRedemptionRate;
            toProto(message: _240.MsgRefreshRedemptionRate): Uint8Array;
            toProtoMsg(message: _240.MsgRefreshRedemptionRate): _240.MsgRefreshRedemptionRateProtoMsg;
        };
        MsgRefreshRedemptionRateResponse: {
            typeUrl: string;
            encode(_: _240.MsgRefreshRedemptionRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.MsgRefreshRedemptionRateResponse;
            fromPartial(_: Partial<_240.MsgRefreshRedemptionRateResponse>): _240.MsgRefreshRedemptionRateResponse;
            fromAmino(_: _240.MsgRefreshRedemptionRateResponseAmino): _240.MsgRefreshRedemptionRateResponse;
            toAmino(_: _240.MsgRefreshRedemptionRateResponse): _240.MsgRefreshRedemptionRateResponseAmino;
            fromAminoMsg(object: _240.MsgRefreshRedemptionRateResponseAminoMsg): _240.MsgRefreshRedemptionRateResponse;
            fromProtoMsg(message: _240.MsgRefreshRedemptionRateResponseProtoMsg): _240.MsgRefreshRedemptionRateResponse;
            toProto(message: _240.MsgRefreshRedemptionRateResponse): Uint8Array;
            toProtoMsg(message: _240.MsgRefreshRedemptionRateResponse): _240.MsgRefreshRedemptionRateResponseProtoMsg;
        };
        MsgOverwriteDelegationRecord: {
            typeUrl: string;
            encode(message: _240.MsgOverwriteDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.MsgOverwriteDelegationRecord;
            fromPartial(object: Partial<_240.MsgOverwriteDelegationRecord>): _240.MsgOverwriteDelegationRecord;
            fromAmino(object: _240.MsgOverwriteDelegationRecordAmino): _240.MsgOverwriteDelegationRecord;
            toAmino(message: _240.MsgOverwriteDelegationRecord): _240.MsgOverwriteDelegationRecordAmino;
            fromAminoMsg(object: _240.MsgOverwriteDelegationRecordAminoMsg): _240.MsgOverwriteDelegationRecord;
            toAminoMsg(message: _240.MsgOverwriteDelegationRecord): _240.MsgOverwriteDelegationRecordAminoMsg;
            fromProtoMsg(message: _240.MsgOverwriteDelegationRecordProtoMsg): _240.MsgOverwriteDelegationRecord;
            toProto(message: _240.MsgOverwriteDelegationRecord): Uint8Array;
            toProtoMsg(message: _240.MsgOverwriteDelegationRecord): _240.MsgOverwriteDelegationRecordProtoMsg;
        };
        MsgOverwriteDelegationRecordResponse: {
            typeUrl: string;
            encode(_: _240.MsgOverwriteDelegationRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.MsgOverwriteDelegationRecordResponse;
            fromPartial(_: Partial<_240.MsgOverwriteDelegationRecordResponse>): _240.MsgOverwriteDelegationRecordResponse;
            fromAmino(_: _240.MsgOverwriteDelegationRecordResponseAmino): _240.MsgOverwriteDelegationRecordResponse;
            toAmino(_: _240.MsgOverwriteDelegationRecordResponse): _240.MsgOverwriteDelegationRecordResponseAmino;
            fromAminoMsg(object: _240.MsgOverwriteDelegationRecordResponseAminoMsg): _240.MsgOverwriteDelegationRecordResponse;
            fromProtoMsg(message: _240.MsgOverwriteDelegationRecordResponseProtoMsg): _240.MsgOverwriteDelegationRecordResponse;
            toProto(message: _240.MsgOverwriteDelegationRecordResponse): Uint8Array;
            toProtoMsg(message: _240.MsgOverwriteDelegationRecordResponse): _240.MsgOverwriteDelegationRecordResponseProtoMsg;
        };
        MsgOverwriteUnbondingRecord: {
            typeUrl: string;
            encode(message: _240.MsgOverwriteUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.MsgOverwriteUnbondingRecord;
            fromPartial(object: Partial<_240.MsgOverwriteUnbondingRecord>): _240.MsgOverwriteUnbondingRecord;
            fromAmino(object: _240.MsgOverwriteUnbondingRecordAmino): _240.MsgOverwriteUnbondingRecord;
            toAmino(message: _240.MsgOverwriteUnbondingRecord): _240.MsgOverwriteUnbondingRecordAmino;
            fromAminoMsg(object: _240.MsgOverwriteUnbondingRecordAminoMsg): _240.MsgOverwriteUnbondingRecord;
            toAminoMsg(message: _240.MsgOverwriteUnbondingRecord): _240.MsgOverwriteUnbondingRecordAminoMsg;
            fromProtoMsg(message: _240.MsgOverwriteUnbondingRecordProtoMsg): _240.MsgOverwriteUnbondingRecord;
            toProto(message: _240.MsgOverwriteUnbondingRecord): Uint8Array;
            toProtoMsg(message: _240.MsgOverwriteUnbondingRecord): _240.MsgOverwriteUnbondingRecordProtoMsg;
        };
        MsgOverwriteUnbondingRecordResponse: {
            typeUrl: string;
            encode(_: _240.MsgOverwriteUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.MsgOverwriteUnbondingRecordResponse;
            fromPartial(_: Partial<_240.MsgOverwriteUnbondingRecordResponse>): _240.MsgOverwriteUnbondingRecordResponse;
            fromAmino(_: _240.MsgOverwriteUnbondingRecordResponseAmino): _240.MsgOverwriteUnbondingRecordResponse;
            toAmino(_: _240.MsgOverwriteUnbondingRecordResponse): _240.MsgOverwriteUnbondingRecordResponseAmino;
            fromAminoMsg(object: _240.MsgOverwriteUnbondingRecordResponseAminoMsg): _240.MsgOverwriteUnbondingRecordResponse;
            fromProtoMsg(message: _240.MsgOverwriteUnbondingRecordResponseProtoMsg): _240.MsgOverwriteUnbondingRecordResponse;
            toProto(message: _240.MsgOverwriteUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _240.MsgOverwriteUnbondingRecordResponse): _240.MsgOverwriteUnbondingRecordResponseProtoMsg;
        };
        MsgOverwriteRedemptionRecord: {
            typeUrl: string;
            encode(message: _240.MsgOverwriteRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.MsgOverwriteRedemptionRecord;
            fromPartial(object: Partial<_240.MsgOverwriteRedemptionRecord>): _240.MsgOverwriteRedemptionRecord;
            fromAmino(object: _240.MsgOverwriteRedemptionRecordAmino): _240.MsgOverwriteRedemptionRecord;
            toAmino(message: _240.MsgOverwriteRedemptionRecord): _240.MsgOverwriteRedemptionRecordAmino;
            fromAminoMsg(object: _240.MsgOverwriteRedemptionRecordAminoMsg): _240.MsgOverwriteRedemptionRecord;
            toAminoMsg(message: _240.MsgOverwriteRedemptionRecord): _240.MsgOverwriteRedemptionRecordAminoMsg;
            fromProtoMsg(message: _240.MsgOverwriteRedemptionRecordProtoMsg): _240.MsgOverwriteRedemptionRecord;
            toProto(message: _240.MsgOverwriteRedemptionRecord): Uint8Array;
            toProtoMsg(message: _240.MsgOverwriteRedemptionRecord): _240.MsgOverwriteRedemptionRecordProtoMsg;
        };
        MsgOverwriteRedemptionRecordResponse: {
            typeUrl: string;
            encode(_: _240.MsgOverwriteRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.MsgOverwriteRedemptionRecordResponse;
            fromPartial(_: Partial<_240.MsgOverwriteRedemptionRecordResponse>): _240.MsgOverwriteRedemptionRecordResponse;
            fromAmino(_: _240.MsgOverwriteRedemptionRecordResponseAmino): _240.MsgOverwriteRedemptionRecordResponse;
            toAmino(_: _240.MsgOverwriteRedemptionRecordResponse): _240.MsgOverwriteRedemptionRecordResponseAmino;
            fromAminoMsg(object: _240.MsgOverwriteRedemptionRecordResponseAminoMsg): _240.MsgOverwriteRedemptionRecordResponse;
            fromProtoMsg(message: _240.MsgOverwriteRedemptionRecordResponseProtoMsg): _240.MsgOverwriteRedemptionRecordResponse;
            toProto(message: _240.MsgOverwriteRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _240.MsgOverwriteRedemptionRecordResponse): _240.MsgOverwriteRedemptionRecordResponseProtoMsg;
        };
        MsgSetOperatorAddress: {
            typeUrl: string;
            encode(message: _240.MsgSetOperatorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.MsgSetOperatorAddress;
            fromPartial(object: Partial<_240.MsgSetOperatorAddress>): _240.MsgSetOperatorAddress;
            fromAmino(object: _240.MsgSetOperatorAddressAmino): _240.MsgSetOperatorAddress;
            toAmino(message: _240.MsgSetOperatorAddress): _240.MsgSetOperatorAddressAmino;
            fromAminoMsg(object: _240.MsgSetOperatorAddressAminoMsg): _240.MsgSetOperatorAddress;
            toAminoMsg(message: _240.MsgSetOperatorAddress): _240.MsgSetOperatorAddressAminoMsg;
            fromProtoMsg(message: _240.MsgSetOperatorAddressProtoMsg): _240.MsgSetOperatorAddress;
            toProto(message: _240.MsgSetOperatorAddress): Uint8Array;
            toProtoMsg(message: _240.MsgSetOperatorAddress): _240.MsgSetOperatorAddressProtoMsg;
        };
        MsgSetOperatorAddressResponse: {
            typeUrl: string;
            encode(_: _240.MsgSetOperatorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.MsgSetOperatorAddressResponse;
            fromPartial(_: Partial<_240.MsgSetOperatorAddressResponse>): _240.MsgSetOperatorAddressResponse;
            fromAmino(_: _240.MsgSetOperatorAddressResponseAmino): _240.MsgSetOperatorAddressResponse;
            toAmino(_: _240.MsgSetOperatorAddressResponse): _240.MsgSetOperatorAddressResponseAmino;
            fromAminoMsg(object: _240.MsgSetOperatorAddressResponseAminoMsg): _240.MsgSetOperatorAddressResponse;
            fromProtoMsg(message: _240.MsgSetOperatorAddressResponseProtoMsg): _240.MsgSetOperatorAddressResponse;
            toProto(message: _240.MsgSetOperatorAddressResponse): Uint8Array;
            toProtoMsg(message: _240.MsgSetOperatorAddressResponse): _240.MsgSetOperatorAddressResponseProtoMsg;
        };
        delegationRecordStatusFromJSON(object: any): _239.DelegationRecordStatus;
        delegationRecordStatusToJSON(object: _239.DelegationRecordStatus): string;
        unbondingRecordStatusFromJSON(object: any): _239.UnbondingRecordStatus;
        unbondingRecordStatusToJSON(object: _239.UnbondingRecordStatus): string;
        DelegationRecordStatus: typeof _239.DelegationRecordStatus;
        DelegationRecordStatusSDKType: typeof _239.DelegationRecordStatus;
        DelegationRecordStatusAmino: typeof _239.DelegationRecordStatus;
        UnbondingRecordStatus: typeof _239.UnbondingRecordStatus;
        UnbondingRecordStatusSDKType: typeof _239.UnbondingRecordStatus;
        UnbondingRecordStatusAmino: typeof _239.UnbondingRecordStatus;
        HostZone: {
            typeUrl: string;
            encode(message: _239.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _239.HostZone;
            fromPartial(object: Partial<_239.HostZone>): _239.HostZone;
            fromAmino(object: _239.HostZoneAmino): _239.HostZone;
            toAmino(message: _239.HostZone): _239.HostZoneAmino;
            fromAminoMsg(object: _239.HostZoneAminoMsg): _239.HostZone;
            fromProtoMsg(message: _239.HostZoneProtoMsg): _239.HostZone;
            toProto(message: _239.HostZone): Uint8Array;
            toProtoMsg(message: _239.HostZone): _239.HostZoneProtoMsg;
        };
        DelegationRecord: {
            typeUrl: string;
            encode(message: _239.DelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _239.DelegationRecord;
            fromPartial(object: Partial<_239.DelegationRecord>): _239.DelegationRecord;
            fromAmino(object: _239.DelegationRecordAmino): _239.DelegationRecord;
            toAmino(message: _239.DelegationRecord): _239.DelegationRecordAmino;
            fromAminoMsg(object: _239.DelegationRecordAminoMsg): _239.DelegationRecord;
            fromProtoMsg(message: _239.DelegationRecordProtoMsg): _239.DelegationRecord;
            toProto(message: _239.DelegationRecord): Uint8Array;
            toProtoMsg(message: _239.DelegationRecord): _239.DelegationRecordProtoMsg;
        };
        UnbondingRecord: {
            typeUrl: string;
            encode(message: _239.UnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _239.UnbondingRecord;
            fromPartial(object: Partial<_239.UnbondingRecord>): _239.UnbondingRecord;
            fromAmino(object: _239.UnbondingRecordAmino): _239.UnbondingRecord;
            toAmino(message: _239.UnbondingRecord): _239.UnbondingRecordAmino;
            fromAminoMsg(object: _239.UnbondingRecordAminoMsg): _239.UnbondingRecord;
            fromProtoMsg(message: _239.UnbondingRecordProtoMsg): _239.UnbondingRecord;
            toProto(message: _239.UnbondingRecord): Uint8Array;
            toProtoMsg(message: _239.UnbondingRecord): _239.UnbondingRecordProtoMsg;
        };
        RedemptionRecord: {
            typeUrl: string;
            encode(message: _239.RedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _239.RedemptionRecord;
            fromPartial(object: Partial<_239.RedemptionRecord>): _239.RedemptionRecord;
            fromAmino(object: _239.RedemptionRecordAmino): _239.RedemptionRecord;
            toAmino(message: _239.RedemptionRecord): _239.RedemptionRecordAmino;
            fromAminoMsg(object: _239.RedemptionRecordAminoMsg): _239.RedemptionRecord;
            fromProtoMsg(message: _239.RedemptionRecordProtoMsg): _239.RedemptionRecord;
            toProto(message: _239.RedemptionRecord): Uint8Array;
            toProtoMsg(message: _239.RedemptionRecord): _239.RedemptionRecordProtoMsg;
        };
        SlashRecord: {
            typeUrl: string;
            encode(message: _239.SlashRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _239.SlashRecord;
            fromPartial(object: Partial<_239.SlashRecord>): _239.SlashRecord;
            fromAmino(object: _239.SlashRecordAmino): _239.SlashRecord;
            toAmino(message: _239.SlashRecord): _239.SlashRecordAmino;
            fromAminoMsg(object: _239.SlashRecordAminoMsg): _239.SlashRecord;
            fromProtoMsg(message: _239.SlashRecordProtoMsg): _239.SlashRecord;
            toProto(message: _239.SlashRecord): Uint8Array;
            toProtoMsg(message: _239.SlashRecord): _239.SlashRecordProtoMsg;
        };
        QueryHostZoneRequest: {
            typeUrl: string;
            encode(_: _238.QueryHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.QueryHostZoneRequest;
            fromPartial(_: Partial<_238.QueryHostZoneRequest>): _238.QueryHostZoneRequest;
            fromAmino(_: _238.QueryHostZoneRequestAmino): _238.QueryHostZoneRequest;
            toAmino(_: _238.QueryHostZoneRequest): _238.QueryHostZoneRequestAmino;
            fromAminoMsg(object: _238.QueryHostZoneRequestAminoMsg): _238.QueryHostZoneRequest;
            fromProtoMsg(message: _238.QueryHostZoneRequestProtoMsg): _238.QueryHostZoneRequest;
            toProto(message: _238.QueryHostZoneRequest): Uint8Array;
            toProtoMsg(message: _238.QueryHostZoneRequest): _238.QueryHostZoneRequestProtoMsg;
        };
        QueryHostZoneResponse: {
            typeUrl: string;
            encode(message: _238.QueryHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.QueryHostZoneResponse;
            fromPartial(object: Partial<_238.QueryHostZoneResponse>): _238.QueryHostZoneResponse;
            fromAmino(object: _238.QueryHostZoneResponseAmino): _238.QueryHostZoneResponse;
            toAmino(message: _238.QueryHostZoneResponse): _238.QueryHostZoneResponseAmino;
            fromAminoMsg(object: _238.QueryHostZoneResponseAminoMsg): _238.QueryHostZoneResponse;
            fromProtoMsg(message: _238.QueryHostZoneResponseProtoMsg): _238.QueryHostZoneResponse;
            toProto(message: _238.QueryHostZoneResponse): Uint8Array;
            toProtoMsg(message: _238.QueryHostZoneResponse): _238.QueryHostZoneResponseProtoMsg;
        };
        QueryDelegationRecordsRequest: {
            typeUrl: string;
            encode(message: _238.QueryDelegationRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.QueryDelegationRecordsRequest;
            fromPartial(object: Partial<_238.QueryDelegationRecordsRequest>): _238.QueryDelegationRecordsRequest;
            fromAmino(object: _238.QueryDelegationRecordsRequestAmino): _238.QueryDelegationRecordsRequest;
            toAmino(message: _238.QueryDelegationRecordsRequest): _238.QueryDelegationRecordsRequestAmino;
            fromAminoMsg(object: _238.QueryDelegationRecordsRequestAminoMsg): _238.QueryDelegationRecordsRequest;
            fromProtoMsg(message: _238.QueryDelegationRecordsRequestProtoMsg): _238.QueryDelegationRecordsRequest;
            toProto(message: _238.QueryDelegationRecordsRequest): Uint8Array;
            toProtoMsg(message: _238.QueryDelegationRecordsRequest): _238.QueryDelegationRecordsRequestProtoMsg;
        };
        QueryDelegationRecordsResponse: {
            typeUrl: string;
            encode(message: _238.QueryDelegationRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.QueryDelegationRecordsResponse;
            fromPartial(object: Partial<_238.QueryDelegationRecordsResponse>): _238.QueryDelegationRecordsResponse;
            fromAmino(object: _238.QueryDelegationRecordsResponseAmino): _238.QueryDelegationRecordsResponse;
            toAmino(message: _238.QueryDelegationRecordsResponse): _238.QueryDelegationRecordsResponseAmino;
            fromAminoMsg(object: _238.QueryDelegationRecordsResponseAminoMsg): _238.QueryDelegationRecordsResponse;
            fromProtoMsg(message: _238.QueryDelegationRecordsResponseProtoMsg): _238.QueryDelegationRecordsResponse;
            toProto(message: _238.QueryDelegationRecordsResponse): Uint8Array;
            toProtoMsg(message: _238.QueryDelegationRecordsResponse): _238.QueryDelegationRecordsResponseProtoMsg;
        };
        QueryUnbondingRecordsRequest: {
            typeUrl: string;
            encode(message: _238.QueryUnbondingRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.QueryUnbondingRecordsRequest;
            fromPartial(object: Partial<_238.QueryUnbondingRecordsRequest>): _238.QueryUnbondingRecordsRequest;
            fromAmino(object: _238.QueryUnbondingRecordsRequestAmino): _238.QueryUnbondingRecordsRequest;
            toAmino(message: _238.QueryUnbondingRecordsRequest): _238.QueryUnbondingRecordsRequestAmino;
            fromAminoMsg(object: _238.QueryUnbondingRecordsRequestAminoMsg): _238.QueryUnbondingRecordsRequest;
            fromProtoMsg(message: _238.QueryUnbondingRecordsRequestProtoMsg): _238.QueryUnbondingRecordsRequest;
            toProto(message: _238.QueryUnbondingRecordsRequest): Uint8Array;
            toProtoMsg(message: _238.QueryUnbondingRecordsRequest): _238.QueryUnbondingRecordsRequestProtoMsg;
        };
        QueryUnbondingRecordsResponse: {
            typeUrl: string;
            encode(message: _238.QueryUnbondingRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.QueryUnbondingRecordsResponse;
            fromPartial(object: Partial<_238.QueryUnbondingRecordsResponse>): _238.QueryUnbondingRecordsResponse;
            fromAmino(object: _238.QueryUnbondingRecordsResponseAmino): _238.QueryUnbondingRecordsResponse;
            toAmino(message: _238.QueryUnbondingRecordsResponse): _238.QueryUnbondingRecordsResponseAmino;
            fromAminoMsg(object: _238.QueryUnbondingRecordsResponseAminoMsg): _238.QueryUnbondingRecordsResponse;
            fromProtoMsg(message: _238.QueryUnbondingRecordsResponseProtoMsg): _238.QueryUnbondingRecordsResponse;
            toProto(message: _238.QueryUnbondingRecordsResponse): Uint8Array;
            toProtoMsg(message: _238.QueryUnbondingRecordsResponse): _238.QueryUnbondingRecordsResponseProtoMsg;
        };
        QueryRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _238.QueryRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.QueryRedemptionRecordRequest;
            fromPartial(object: Partial<_238.QueryRedemptionRecordRequest>): _238.QueryRedemptionRecordRequest;
            fromAmino(object: _238.QueryRedemptionRecordRequestAmino): _238.QueryRedemptionRecordRequest;
            toAmino(message: _238.QueryRedemptionRecordRequest): _238.QueryRedemptionRecordRequestAmino;
            fromAminoMsg(object: _238.QueryRedemptionRecordRequestAminoMsg): _238.QueryRedemptionRecordRequest;
            fromProtoMsg(message: _238.QueryRedemptionRecordRequestProtoMsg): _238.QueryRedemptionRecordRequest;
            toProto(message: _238.QueryRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _238.QueryRedemptionRecordRequest): _238.QueryRedemptionRecordRequestProtoMsg;
        };
        QueryRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _238.QueryRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.QueryRedemptionRecordResponse;
            fromPartial(object: Partial<_238.QueryRedemptionRecordResponse>): _238.QueryRedemptionRecordResponse;
            fromAmino(object: _238.QueryRedemptionRecordResponseAmino): _238.QueryRedemptionRecordResponse;
            toAmino(message: _238.QueryRedemptionRecordResponse): _238.QueryRedemptionRecordResponseAmino;
            fromAminoMsg(object: _238.QueryRedemptionRecordResponseAminoMsg): _238.QueryRedemptionRecordResponse;
            fromProtoMsg(message: _238.QueryRedemptionRecordResponseProtoMsg): _238.QueryRedemptionRecordResponse;
            toProto(message: _238.QueryRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _238.QueryRedemptionRecordResponse): _238.QueryRedemptionRecordResponseProtoMsg;
        };
        QueryRedemptionRecordsRequest: {
            typeUrl: string;
            encode(message: _238.QueryRedemptionRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.QueryRedemptionRecordsRequest;
            fromPartial(object: Partial<_238.QueryRedemptionRecordsRequest>): _238.QueryRedemptionRecordsRequest;
            fromAmino(object: _238.QueryRedemptionRecordsRequestAmino): _238.QueryRedemptionRecordsRequest;
            toAmino(message: _238.QueryRedemptionRecordsRequest): _238.QueryRedemptionRecordsRequestAmino;
            fromAminoMsg(object: _238.QueryRedemptionRecordsRequestAminoMsg): _238.QueryRedemptionRecordsRequest;
            fromProtoMsg(message: _238.QueryRedemptionRecordsRequestProtoMsg): _238.QueryRedemptionRecordsRequest;
            toProto(message: _238.QueryRedemptionRecordsRequest): Uint8Array;
            toProtoMsg(message: _238.QueryRedemptionRecordsRequest): _238.QueryRedemptionRecordsRequestProtoMsg;
        };
        QueryRedemptionRecordsResponse: {
            typeUrl: string;
            encode(message: _238.QueryRedemptionRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.QueryRedemptionRecordsResponse;
            fromPartial(object: Partial<_238.QueryRedemptionRecordsResponse>): _238.QueryRedemptionRecordsResponse;
            fromAmino(object: _238.QueryRedemptionRecordsResponseAmino): _238.QueryRedemptionRecordsResponse;
            toAmino(message: _238.QueryRedemptionRecordsResponse): _238.QueryRedemptionRecordsResponseAmino;
            fromAminoMsg(object: _238.QueryRedemptionRecordsResponseAminoMsg): _238.QueryRedemptionRecordsResponse;
            fromProtoMsg(message: _238.QueryRedemptionRecordsResponseProtoMsg): _238.QueryRedemptionRecordsResponse;
            toProto(message: _238.QueryRedemptionRecordsResponse): Uint8Array;
            toProtoMsg(message: _238.QueryRedemptionRecordsResponse): _238.QueryRedemptionRecordsResponseProtoMsg;
        };
        QuerySlashRecordsRequest: {
            typeUrl: string;
            encode(_: _238.QuerySlashRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.QuerySlashRecordsRequest;
            fromPartial(_: Partial<_238.QuerySlashRecordsRequest>): _238.QuerySlashRecordsRequest;
            fromAmino(_: _238.QuerySlashRecordsRequestAmino): _238.QuerySlashRecordsRequest;
            toAmino(_: _238.QuerySlashRecordsRequest): _238.QuerySlashRecordsRequestAmino;
            fromAminoMsg(object: _238.QuerySlashRecordsRequestAminoMsg): _238.QuerySlashRecordsRequest;
            fromProtoMsg(message: _238.QuerySlashRecordsRequestProtoMsg): _238.QuerySlashRecordsRequest;
            toProto(message: _238.QuerySlashRecordsRequest): Uint8Array;
            toProtoMsg(message: _238.QuerySlashRecordsRequest): _238.QuerySlashRecordsRequestProtoMsg;
        };
        QuerySlashRecordsResponse: {
            typeUrl: string;
            encode(message: _238.QuerySlashRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.QuerySlashRecordsResponse;
            fromPartial(object: Partial<_238.QuerySlashRecordsResponse>): _238.QuerySlashRecordsResponse;
            fromAmino(object: _238.QuerySlashRecordsResponseAmino): _238.QuerySlashRecordsResponse;
            toAmino(message: _238.QuerySlashRecordsResponse): _238.QuerySlashRecordsResponseAmino;
            fromAminoMsg(object: _238.QuerySlashRecordsResponseAminoMsg): _238.QuerySlashRecordsResponse;
            fromProtoMsg(message: _238.QuerySlashRecordsResponseProtoMsg): _238.QuerySlashRecordsResponse;
            toProto(message: _238.QuerySlashRecordsResponse): Uint8Array;
            toProtoMsg(message: _238.QuerySlashRecordsResponse): _238.QuerySlashRecordsResponseProtoMsg;
        };
        RedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _238.RedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.RedemptionRecordResponse;
            fromPartial(object: Partial<_238.RedemptionRecordResponse>): _238.RedemptionRecordResponse;
            fromAmino(object: _238.RedemptionRecordResponseAmino): _238.RedemptionRecordResponse;
            toAmino(message: _238.RedemptionRecordResponse): _238.RedemptionRecordResponseAmino;
            fromAminoMsg(object: _238.RedemptionRecordResponseAminoMsg): _238.RedemptionRecordResponse;
            fromProtoMsg(message: _238.RedemptionRecordResponseProtoMsg): _238.RedemptionRecordResponse;
            toProto(message: _238.RedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _238.RedemptionRecordResponse): _238.RedemptionRecordResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _237.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _237.Params;
            fromPartial(_: Partial<_237.Params>): _237.Params;
            fromAmino(_: _237.ParamsAmino): _237.Params;
            toAmino(_: _237.Params): _237.ParamsAmino;
            fromAminoMsg(object: _237.ParamsAminoMsg): _237.Params;
            fromProtoMsg(message: _237.ParamsProtoMsg): _237.Params;
            toProto(message: _237.Params): Uint8Array;
            toProtoMsg(message: _237.Params): _237.ParamsProtoMsg;
        };
        TransferInProgressRecordIds: {
            typeUrl: string;
            encode(message: _237.TransferInProgressRecordIds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _237.TransferInProgressRecordIds;
            fromPartial(object: Partial<_237.TransferInProgressRecordIds>): _237.TransferInProgressRecordIds;
            fromAmino(object: _237.TransferInProgressRecordIdsAmino): _237.TransferInProgressRecordIds;
            toAmino(message: _237.TransferInProgressRecordIds): _237.TransferInProgressRecordIdsAmino;
            fromAminoMsg(object: _237.TransferInProgressRecordIdsAminoMsg): _237.TransferInProgressRecordIds;
            fromProtoMsg(message: _237.TransferInProgressRecordIdsProtoMsg): _237.TransferInProgressRecordIds;
            toProto(message: _237.TransferInProgressRecordIds): Uint8Array;
            toProtoMsg(message: _237.TransferInProgressRecordIds): _237.TransferInProgressRecordIdsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _237.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _237.GenesisState;
            fromPartial(object: Partial<_237.GenesisState>): _237.GenesisState;
            fromAmino(object: _237.GenesisStateAmino): _237.GenesisState;
            toAmino(message: _237.GenesisState): _237.GenesisStateAmino;
            fromAminoMsg(object: _237.GenesisStateAminoMsg): _237.GenesisState;
            fromProtoMsg(message: _237.GenesisStateProtoMsg): _237.GenesisState;
            toProto(message: _237.GenesisState): Uint8Array;
            toProtoMsg(message: _237.GenesisState): _237.GenesisStateProtoMsg;
        };
    };
    const strdburner: {
        QueryClientImpl: typeof _385.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            strdBurnerAddress(request?: _242.QueryStrdBurnerAddressRequest): Promise<_242.QueryStrdBurnerAddressResponse>;
            totalStrdBurned(request?: _242.QueryTotalStrdBurnedRequest): Promise<_242.QueryTotalStrdBurnedResponse>;
        };
        QueryStrdBurnerAddressRequest: {
            typeUrl: string;
            encode(_: _242.QueryStrdBurnerAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryStrdBurnerAddressRequest;
            fromPartial(_: Partial<_242.QueryStrdBurnerAddressRequest>): _242.QueryStrdBurnerAddressRequest;
            fromAmino(_: _242.QueryStrdBurnerAddressRequestAmino): _242.QueryStrdBurnerAddressRequest;
            toAmino(_: _242.QueryStrdBurnerAddressRequest): _242.QueryStrdBurnerAddressRequestAmino;
            fromAminoMsg(object: _242.QueryStrdBurnerAddressRequestAminoMsg): _242.QueryStrdBurnerAddressRequest;
            fromProtoMsg(message: _242.QueryStrdBurnerAddressRequestProtoMsg): _242.QueryStrdBurnerAddressRequest;
            toProto(message: _242.QueryStrdBurnerAddressRequest): Uint8Array;
            toProtoMsg(message: _242.QueryStrdBurnerAddressRequest): _242.QueryStrdBurnerAddressRequestProtoMsg;
        };
        QueryStrdBurnerAddressResponse: {
            typeUrl: string;
            encode(message: _242.QueryStrdBurnerAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryStrdBurnerAddressResponse;
            fromPartial(object: Partial<_242.QueryStrdBurnerAddressResponse>): _242.QueryStrdBurnerAddressResponse;
            fromAmino(object: _242.QueryStrdBurnerAddressResponseAmino): _242.QueryStrdBurnerAddressResponse;
            toAmino(message: _242.QueryStrdBurnerAddressResponse): _242.QueryStrdBurnerAddressResponseAmino;
            fromAminoMsg(object: _242.QueryStrdBurnerAddressResponseAminoMsg): _242.QueryStrdBurnerAddressResponse;
            fromProtoMsg(message: _242.QueryStrdBurnerAddressResponseProtoMsg): _242.QueryStrdBurnerAddressResponse;
            toProto(message: _242.QueryStrdBurnerAddressResponse): Uint8Array;
            toProtoMsg(message: _242.QueryStrdBurnerAddressResponse): _242.QueryStrdBurnerAddressResponseProtoMsg;
        };
        QueryTotalStrdBurnedRequest: {
            typeUrl: string;
            encode(_: _242.QueryTotalStrdBurnedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryTotalStrdBurnedRequest;
            fromPartial(_: Partial<_242.QueryTotalStrdBurnedRequest>): _242.QueryTotalStrdBurnedRequest;
            fromAmino(_: _242.QueryTotalStrdBurnedRequestAmino): _242.QueryTotalStrdBurnedRequest;
            toAmino(_: _242.QueryTotalStrdBurnedRequest): _242.QueryTotalStrdBurnedRequestAmino;
            fromAminoMsg(object: _242.QueryTotalStrdBurnedRequestAminoMsg): _242.QueryTotalStrdBurnedRequest;
            fromProtoMsg(message: _242.QueryTotalStrdBurnedRequestProtoMsg): _242.QueryTotalStrdBurnedRequest;
            toProto(message: _242.QueryTotalStrdBurnedRequest): Uint8Array;
            toProtoMsg(message: _242.QueryTotalStrdBurnedRequest): _242.QueryTotalStrdBurnedRequestProtoMsg;
        };
        QueryTotalStrdBurnedResponse: {
            typeUrl: string;
            encode(message: _242.QueryTotalStrdBurnedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryTotalStrdBurnedResponse;
            fromPartial(object: Partial<_242.QueryTotalStrdBurnedResponse>): _242.QueryTotalStrdBurnedResponse;
            fromAmino(object: _242.QueryTotalStrdBurnedResponseAmino): _242.QueryTotalStrdBurnedResponse;
            toAmino(message: _242.QueryTotalStrdBurnedResponse): _242.QueryTotalStrdBurnedResponseAmino;
            fromAminoMsg(object: _242.QueryTotalStrdBurnedResponseAminoMsg): _242.QueryTotalStrdBurnedResponse;
            fromProtoMsg(message: _242.QueryTotalStrdBurnedResponseProtoMsg): _242.QueryTotalStrdBurnedResponse;
            toProto(message: _242.QueryTotalStrdBurnedResponse): Uint8Array;
            toProtoMsg(message: _242.QueryTotalStrdBurnedResponse): _242.QueryTotalStrdBurnedResponseProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _241.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.GenesisState;
            fromPartial(object: Partial<_241.GenesisState>): _241.GenesisState;
            fromAmino(object: _241.GenesisStateAmino): _241.GenesisState;
            toAmino(message: _241.GenesisState): _241.GenesisStateAmino;
            fromAminoMsg(object: _241.GenesisStateAminoMsg): _241.GenesisState;
            fromProtoMsg(message: _241.GenesisStateProtoMsg): _241.GenesisState;
            toProto(message: _241.GenesisState): Uint8Array;
            toProtoMsg(message: _241.GenesisState): _241.GenesisStateProtoMsg;
        };
    };
    const vesting: {
        BaseVestingAccount: {
            typeUrl: string;
            encode(message: _244.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.BaseVestingAccount;
            fromPartial(object: Partial<_244.BaseVestingAccount>): _244.BaseVestingAccount;
            fromAmino(object: _244.BaseVestingAccountAmino): _244.BaseVestingAccount;
            toAmino(message: _244.BaseVestingAccount): _244.BaseVestingAccountAmino;
            fromAminoMsg(object: _244.BaseVestingAccountAminoMsg): _244.BaseVestingAccount;
            fromProtoMsg(message: _244.BaseVestingAccountProtoMsg): _244.BaseVestingAccount;
            toProto(message: _244.BaseVestingAccount): Uint8Array;
            toProtoMsg(message: _244.BaseVestingAccount): _244.BaseVestingAccountProtoMsg;
        };
        Period: {
            typeUrl: string;
            encode(message: _244.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.Period;
            fromPartial(object: Partial<_244.Period>): _244.Period;
            fromAmino(object: _244.PeriodAmino): _244.Period;
            toAmino(message: _244.Period): _244.PeriodAmino;
            fromAminoMsg(object: _244.PeriodAminoMsg): _244.Period;
            fromProtoMsg(message: _244.PeriodProtoMsg): _244.Period;
            toProto(message: _244.Period): Uint8Array;
            toProtoMsg(message: _244.Period): _244.PeriodProtoMsg;
        };
        StridePeriodicVestingAccount: {
            typeUrl: string;
            encode(message: _244.StridePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.StridePeriodicVestingAccount;
            fromPartial(object: Partial<_244.StridePeriodicVestingAccount>): _244.StridePeriodicVestingAccount;
            fromAmino(object: _244.StridePeriodicVestingAccountAmino): _244.StridePeriodicVestingAccount;
            toAmino(message: _244.StridePeriodicVestingAccount): _244.StridePeriodicVestingAccountAmino;
            fromAminoMsg(object: _244.StridePeriodicVestingAccountAminoMsg): _244.StridePeriodicVestingAccount;
            fromProtoMsg(message: _244.StridePeriodicVestingAccountProtoMsg): _244.StridePeriodicVestingAccount;
            toProto(message: _244.StridePeriodicVestingAccount): Uint8Array;
            toProtoMsg(message: _244.StridePeriodicVestingAccount): _244.StridePeriodicVestingAccountProtoMsg;
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
                airdrop: _386.MsgClientImpl;
                auction: _387.MsgClientImpl;
                claim: _388.MsgClientImpl;
                icaoracle: _389.MsgClientImpl;
                icqoracle: _390.MsgClientImpl;
                interchainquery: {
                    v1: _391.MsgClientImpl;
                };
                stakedym: _392.MsgClientImpl;
                stakeibc: _393.MsgClientImpl;
                staketia: _394.MsgClientImpl;
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
                auction: {
                    auction(request: _181.QueryAuctionRequest): Promise<_181.QueryAuctionResponse>;
                    auctions(request?: _181.QueryAuctionsRequest): Promise<_181.QueryAuctionsResponse>;
                };
                autopilot: {
                    params(request?: _185.QueryParamsRequest): Promise<_185.QueryParamsResponse>;
                };
                claim: {
                    distributorAccountBalance(request: _189.QueryDistributorAccountBalanceRequest): Promise<_189.QueryDistributorAccountBalanceResponse>;
                    params(request?: _189.QueryParamsRequest): Promise<_189.QueryParamsResponse>;
                    claimRecord(request: _189.QueryClaimRecordRequest): Promise<_189.QueryClaimRecordResponse>;
                    claimableForAction(request: _189.QueryClaimableForActionRequest): Promise<_189.QueryClaimableForActionResponse>;
                    totalClaimable(request: _189.QueryTotalClaimableRequest): Promise<_189.QueryTotalClaimableResponse>;
                    userVestings(request: _189.QueryUserVestingsRequest): Promise<_189.QueryUserVestingsResponse>;
                    claimStatus(request: _189.QueryClaimStatusRequest): Promise<_189.QueryClaimStatusResponse>;
                    claimMetadata(request?: _189.QueryClaimMetadataRequest): Promise<_189.QueryClaimMetadataResponse>;
                };
                epochs: {
                    epochInfos(request?: _192.QueryEpochsInfoRequest): Promise<_192.QueryEpochsInfoResponse>;
                    currentEpoch(request: _192.QueryCurrentEpochRequest): Promise<_192.QueryCurrentEpochResponse>;
                    epochInfo(request: _192.QueryEpochInfoRequest): Promise<_192.QueryEpochInfoResponse>;
                };
                icacallbacks: {
                    params(request?: _197.QueryParamsRequest): Promise<_197.QueryParamsResponse>;
                    callbackData(request: _197.QueryGetCallbackDataRequest): Promise<_197.QueryGetCallbackDataResponse>;
                    callbackDataAll(request?: _197.QueryAllCallbackDataRequest): Promise<_197.QueryAllCallbackDataResponse>;
                };
                icaoracle: {
                    oracle(request: _203.QueryOracleRequest): Promise<_203.QueryOracleResponse>;
                    allOracles(request?: _203.QueryAllOraclesRequest): Promise<_203.QueryAllOraclesResponse>;
                    activeOracles(request: _203.QueryActiveOraclesRequest): Promise<_203.QueryActiveOraclesResponse>;
                    metrics(request: _203.QueryMetricsRequest): Promise<_203.QueryMetricsResponse>;
                };
                icqoracle: {
                    tokenPrice(request: _207.QueryTokenPriceRequest): Promise<_207.QueryTokenPriceResponse>;
                    tokenPrices(request?: _207.QueryTokenPricesRequest): Promise<_207.QueryTokenPricesResponse>;
                    params(request?: _207.QueryParamsRequest): Promise<_207.QueryParamsResponse>;
                    tokenPriceForQuoteDenom(request: _207.QueryTokenPriceForQuoteDenomRequest): Promise<_207.QueryTokenPriceForQuoteDenomResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _214.QueryParamsRequest): Promise<_214.QueryParamsResponse>;
                        epochProvisions(request?: _214.QueryEpochProvisionsRequest): Promise<_214.QueryEpochProvisionsResponse>;
                    };
                };
                records: {
                    params(request?: _218.QueryParamsRequest): Promise<_218.QueryParamsResponse>;
                    userRedemptionRecord(request: _218.QueryGetUserRedemptionRecordRequest): Promise<_218.QueryGetUserRedemptionRecordResponse>;
                    userRedemptionRecordAll(request?: _218.QueryAllUserRedemptionRecordRequest): Promise<_218.QueryAllUserRedemptionRecordResponse>;
                    userRedemptionRecordForUser(request: _218.QueryAllUserRedemptionRecordForUserRequest): Promise<_218.QueryAllUserRedemptionRecordForUserResponse>;
                    epochUnbondingRecord(request: _218.QueryGetEpochUnbondingRecordRequest): Promise<_218.QueryGetEpochUnbondingRecordResponse>;
                    epochUnbondingRecordAll(request?: _218.QueryAllEpochUnbondingRecordRequest): Promise<_218.QueryAllEpochUnbondingRecordResponse>;
                    depositRecord(request: _218.QueryGetDepositRecordRequest): Promise<_218.QueryGetDepositRecordResponse>;
                    depositRecordAll(request?: _218.QueryAllDepositRecordRequest): Promise<_218.QueryAllDepositRecordResponse>;
                    depositRecordByHost(request: _218.QueryDepositRecordByHostRequest): Promise<_218.QueryDepositRecordByHostResponse>;
                    lSMDeposit(request: _218.QueryLSMDepositRequest): Promise<_218.QueryLSMDepositResponse>;
                    lSMDeposits(request: _218.QueryLSMDepositsRequest): Promise<_218.QueryLSMDepositsResponse>;
                };
                stakedym: {
                    hostZone(request?: _221.QueryHostZoneRequest): Promise<_221.QueryHostZoneResponse>;
                    delegationRecords(request: _221.QueryDelegationRecordsRequest): Promise<_221.QueryDelegationRecordsResponse>;
                    unbondingRecords(request: _221.QueryUnbondingRecordsRequest): Promise<_221.QueryUnbondingRecordsResponse>;
                    redemptionRecord(request: _221.QueryRedemptionRecordRequest): Promise<_221.QueryRedemptionRecordResponse>;
                    redemptionRecords(request: _221.QueryRedemptionRecordsRequest): Promise<_221.QueryRedemptionRecordsResponse>;
                    slashRecords(request?: _221.QuerySlashRecordsRequest): Promise<_221.QuerySlashRecordsResponse>;
                };
                stakeibc: {
                    params(request?: _233.QueryParamsRequest): Promise<_233.QueryParamsResponse>;
                    validators(request: _233.QueryGetValidatorsRequest): Promise<_233.QueryGetValidatorsResponse>;
                    hostZone(request: _233.QueryGetHostZoneRequest): Promise<_233.QueryGetHostZoneResponse>;
                    hostZoneAll(request?: _233.QueryAllHostZoneRequest): Promise<_233.QueryAllHostZoneResponse>;
                    moduleAddress(request: _233.QueryModuleAddressRequest): Promise<_233.QueryModuleAddressResponse>;
                    interchainAccountFromAddress(request: _233.QueryInterchainAccountFromAddressRequest): Promise<_233.QueryInterchainAccountFromAddressResponse>;
                    epochTracker(request: _233.QueryGetEpochTrackerRequest): Promise<_233.QueryGetEpochTrackerResponse>;
                    epochTrackerAll(request?: _233.QueryAllEpochTrackerRequest): Promise<_233.QueryAllEpochTrackerResponse>;
                    nextPacketSequence(request: _233.QueryGetNextPacketSequenceRequest): Promise<_233.QueryGetNextPacketSequenceResponse>;
                    addressUnbondings(request: _233.QueryAddressUnbondings): Promise<_233.QueryAddressUnbondingsResponse>;
                    allTradeRoutes(request?: _233.QueryAllTradeRoutes): Promise<_233.QueryAllTradeRoutesResponse>;
                };
                staketia: {
                    hostZone(request?: _238.QueryHostZoneRequest): Promise<_238.QueryHostZoneResponse>;
                    delegationRecords(request: _238.QueryDelegationRecordsRequest): Promise<_238.QueryDelegationRecordsResponse>;
                    unbondingRecords(request: _238.QueryUnbondingRecordsRequest): Promise<_238.QueryUnbondingRecordsResponse>;
                    redemptionRecord(request: _238.QueryRedemptionRecordRequest): Promise<_238.QueryRedemptionRecordResponse>;
                    redemptionRecords(request: _238.QueryRedemptionRecordsRequest): Promise<_238.QueryRedemptionRecordsResponse>;
                    slashRecords(request?: _238.QuerySlashRecordsRequest): Promise<_238.QuerySlashRecordsResponse>;
                };
                strdburner: {
                    strdBurnerAddress(request?: _242.QueryStrdBurnerAddressRequest): Promise<_242.QueryStrdBurnerAddressResponse>;
                    totalStrdBurned(request?: _242.QueryTotalStrdBurnedRequest): Promise<_242.QueryTotalStrdBurnedResponse>;
                };
            };
        }>;
    };
}
