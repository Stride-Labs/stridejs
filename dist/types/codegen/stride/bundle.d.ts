import * as _184 from "./airdrop/airdrop";
import * as _185 from "./airdrop/genesis";
import * as _186 from "./airdrop/query";
import * as _187 from "./airdrop/tx";
import * as _188 from "./auction/auction";
import * as _189 from "./auction/genesis";
import * as _190 from "./auction/query";
import * as _191 from "./auction/tx";
import * as _192 from "./autopilot/genesis";
import * as _193 from "./autopilot/params";
import * as _194 from "./autopilot/query";
import * as _195 from "./claim/claim";
import * as _196 from "./claim/genesis";
import * as _197 from "./claim/params";
import * as _198 from "./claim/query";
import * as _199 from "./claim/tx";
import * as _200 from "./epochs/genesis";
import * as _201 from "./epochs/query";
import * as _202 from "./icacallbacks/callback_data";
import * as _203 from "./icacallbacks/genesis";
import * as _204 from "./icacallbacks/packet";
import * as _205 from "./icacallbacks/params";
import * as _206 from "./icacallbacks/query";
import * as _208 from "./icaoracle/callbacks";
import * as _209 from "./icaoracle/contract";
import * as _210 from "./icaoracle/genesis";
import * as _211 from "./icaoracle/icaoracle";
import * as _212 from "./icaoracle/query";
import * as _213 from "./icaoracle/tx";
import * as _214 from "./icqoracle/genesis";
import * as _215 from "./icqoracle/icqoracle";
import * as _216 from "./icqoracle/query";
import * as _217 from "./icqoracle/tx";
import * as _218 from "./interchainquery/v1/genesis";
import * as _219 from "./interchainquery/v1/messages";
import * as _220 from "./interchainquery/v1/query";
import * as _221 from "./mint/v1beta1/genesis";
import * as _222 from "./mint/v1beta1/mint";
import * as _223 from "./mint/v1beta1/query";
import * as _224 from "./records/callbacks";
import * as _225 from "./records/genesis";
import * as _226 from "./records/params";
import * as _227 from "./records/query";
import * as _228 from "./records/records";
import * as _229 from "./stakedym/genesis";
import * as _230 from "./stakedym/query";
import * as _231 from "./stakedym/stakedym";
import * as _232 from "./stakedym/tx";
import * as _233 from "./stakeibc/address_unbonding";
import * as _234 from "./stakeibc/callbacks";
import * as _235 from "./stakeibc/epoch_tracker";
import * as _236 from "./stakeibc/genesis";
import * as _237 from "./stakeibc/gov";
import * as _238 from "./stakeibc/host_zone";
import * as _239 from "./stakeibc/ica_account";
import * as _240 from "./stakeibc/packet";
import * as _241 from "./stakeibc/params";
import * as _242 from "./stakeibc/query";
import * as _243 from "./stakeibc/trade_route";
import * as _244 from "./stakeibc/tx";
import * as _245 from "./stakeibc/validator";
import * as _246 from "./staketia/genesis";
import * as _247 from "./staketia/query";
import * as _248 from "./staketia/staketia";
import * as _249 from "./staketia/tx";
import * as _250 from "./strdburner/genesis";
import * as _251 from "./strdburner/query";
import * as _253 from "./vesting/vesting";
import * as _388 from "./airdrop/query.rpc.Query";
import * as _389 from "./auction/query.rpc.Query";
import * as _390 from "./autopilot/query.rpc.Query";
import * as _391 from "./claim/query.rpc.Query";
import * as _392 from "./epochs/query.rpc.Query";
import * as _393 from "./icacallbacks/query.rpc.Query";
import * as _394 from "./icaoracle/query.rpc.Query";
import * as _395 from "./icqoracle/query.rpc.Query";
import * as _396 from "./mint/v1beta1/query.rpc.Query";
import * as _397 from "./records/query.rpc.Query";
import * as _398 from "./stakedym/query.rpc.Query";
import * as _399 from "./stakeibc/query.rpc.Query";
import * as _400 from "./staketia/query.rpc.Query";
import * as _401 from "./strdburner/query.rpc.Query";
import * as _402 from "./airdrop/tx.rpc.msg";
import * as _403 from "./auction/tx.rpc.msg";
import * as _404 from "./claim/tx.rpc.msg";
import * as _405 from "./icaoracle/tx.rpc.msg";
import * as _406 from "./icqoracle/tx.rpc.msg";
import * as _407 from "./interchainquery/v1/messages.rpc.msg";
import * as _408 from "./stakedym/tx.rpc.msg";
import * as _409 from "./stakeibc/tx.rpc.msg";
import * as _410 from "./staketia/tx.rpc.msg";
export declare namespace stride {
    const airdrop: {
        MsgClientImpl: typeof _402.MsgClientImpl;
        QueryClientImpl: typeof _388.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            airdrop(request: _186.QueryAirdropRequest): Promise<_186.QueryAirdropResponse>;
            allAirdrops(request?: _186.QueryAllAirdropsRequest): Promise<_186.QueryAllAirdropsResponse>;
            userAllocation(request: _186.QueryUserAllocationRequest): Promise<_186.QueryUserAllocationResponse>;
            userAllocations(request: _186.QueryUserAllocationsRequest): Promise<_186.QueryUserAllocationsResponse>;
            allAllocations(request: _186.QueryAllAllocationsRequest): Promise<_186.QueryAllAllocationsResponse>;
            userSummary(request: _186.QueryUserSummaryRequest): Promise<_186.QueryUserSummaryResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                claimDaily(value: _187.MsgClaimDaily): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimEarly(value: _187.MsgClaimEarly): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAirdrop(value: _187.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateAirdrop(value: _187.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addAllocations(value: _187.MsgAddAllocations): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateUserAllocation(value: _187.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                linkAddresses(value: _187.MsgLinkAddresses): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                claimDaily(value: _187.MsgClaimDaily): {
                    typeUrl: string;
                    value: _187.MsgClaimDaily;
                };
                claimEarly(value: _187.MsgClaimEarly): {
                    typeUrl: string;
                    value: _187.MsgClaimEarly;
                };
                createAirdrop(value: _187.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _187.MsgCreateAirdrop;
                };
                updateAirdrop(value: _187.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: _187.MsgUpdateAirdrop;
                };
                addAllocations(value: _187.MsgAddAllocations): {
                    typeUrl: string;
                    value: _187.MsgAddAllocations;
                };
                updateUserAllocation(value: _187.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: _187.MsgUpdateUserAllocation;
                };
                linkAddresses(value: _187.MsgLinkAddresses): {
                    typeUrl: string;
                    value: _187.MsgLinkAddresses;
                };
            };
            fromPartial: {
                claimDaily(value: _187.MsgClaimDaily): {
                    typeUrl: string;
                    value: _187.MsgClaimDaily;
                };
                claimEarly(value: _187.MsgClaimEarly): {
                    typeUrl: string;
                    value: _187.MsgClaimEarly;
                };
                createAirdrop(value: _187.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _187.MsgCreateAirdrop;
                };
                updateAirdrop(value: _187.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: _187.MsgUpdateAirdrop;
                };
                addAllocations(value: _187.MsgAddAllocations): {
                    typeUrl: string;
                    value: _187.MsgAddAllocations;
                };
                updateUserAllocation(value: _187.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: _187.MsgUpdateUserAllocation;
                };
                linkAddresses(value: _187.MsgLinkAddresses): {
                    typeUrl: string;
                    value: _187.MsgLinkAddresses;
                };
            };
        };
        AminoConverter: {
            "/stride.airdrop.MsgClaimDaily": {
                aminoType: string;
                toAmino: (message: _187.MsgClaimDaily) => _187.MsgClaimDailyAmino;
                fromAmino: (object: _187.MsgClaimDailyAmino) => _187.MsgClaimDaily;
            };
            "/stride.airdrop.MsgClaimEarly": {
                aminoType: string;
                toAmino: (message: _187.MsgClaimEarly) => _187.MsgClaimEarlyAmino;
                fromAmino: (object: _187.MsgClaimEarlyAmino) => _187.MsgClaimEarly;
            };
            "/stride.airdrop.MsgCreateAirdrop": {
                aminoType: string;
                toAmino: (message: _187.MsgCreateAirdrop) => _187.MsgCreateAirdropAmino;
                fromAmino: (object: _187.MsgCreateAirdropAmino) => _187.MsgCreateAirdrop;
            };
            "/stride.airdrop.MsgUpdateAirdrop": {
                aminoType: string;
                toAmino: (message: _187.MsgUpdateAirdrop) => _187.MsgUpdateAirdropAmino;
                fromAmino: (object: _187.MsgUpdateAirdropAmino) => _187.MsgUpdateAirdrop;
            };
            "/stride.airdrop.MsgAddAllocations": {
                aminoType: string;
                toAmino: (message: _187.MsgAddAllocations) => _187.MsgAddAllocationsAmino;
                fromAmino: (object: _187.MsgAddAllocationsAmino) => _187.MsgAddAllocations;
            };
            "/stride.airdrop.MsgUpdateUserAllocation": {
                aminoType: string;
                toAmino: (message: _187.MsgUpdateUserAllocation) => _187.MsgUpdateUserAllocationAmino;
                fromAmino: (object: _187.MsgUpdateUserAllocationAmino) => _187.MsgUpdateUserAllocation;
            };
            "/stride.airdrop.MsgLinkAddresses": {
                aminoType: string;
                toAmino: (message: _187.MsgLinkAddresses) => _187.MsgLinkAddressesAmino;
                fromAmino: (object: _187.MsgLinkAddressesAmino) => _187.MsgLinkAddresses;
            };
        };
        MsgClaimDaily: {
            typeUrl: string;
            encode(message: _187.MsgClaimDaily, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.MsgClaimDaily;
            fromPartial(object: Partial<_187.MsgClaimDaily>): _187.MsgClaimDaily;
            fromAmino(object: _187.MsgClaimDailyAmino): _187.MsgClaimDaily;
            toAmino(message: _187.MsgClaimDaily): _187.MsgClaimDailyAmino;
            fromAminoMsg(object: _187.MsgClaimDailyAminoMsg): _187.MsgClaimDaily;
            toAminoMsg(message: _187.MsgClaimDaily): _187.MsgClaimDailyAminoMsg;
            fromProtoMsg(message: _187.MsgClaimDailyProtoMsg): _187.MsgClaimDaily;
            toProto(message: _187.MsgClaimDaily): Uint8Array;
            toProtoMsg(message: _187.MsgClaimDaily): _187.MsgClaimDailyProtoMsg;
        };
        MsgClaimDailyResponse: {
            typeUrl: string;
            encode(_: _187.MsgClaimDailyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.MsgClaimDailyResponse;
            fromPartial(_: Partial<_187.MsgClaimDailyResponse>): _187.MsgClaimDailyResponse;
            fromAmino(_: _187.MsgClaimDailyResponseAmino): _187.MsgClaimDailyResponse;
            toAmino(_: _187.MsgClaimDailyResponse): _187.MsgClaimDailyResponseAmino;
            fromAminoMsg(object: _187.MsgClaimDailyResponseAminoMsg): _187.MsgClaimDailyResponse;
            fromProtoMsg(message: _187.MsgClaimDailyResponseProtoMsg): _187.MsgClaimDailyResponse;
            toProto(message: _187.MsgClaimDailyResponse): Uint8Array;
            toProtoMsg(message: _187.MsgClaimDailyResponse): _187.MsgClaimDailyResponseProtoMsg;
        };
        MsgClaimEarly: {
            typeUrl: string;
            encode(message: _187.MsgClaimEarly, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.MsgClaimEarly;
            fromPartial(object: Partial<_187.MsgClaimEarly>): _187.MsgClaimEarly;
            fromAmino(object: _187.MsgClaimEarlyAmino): _187.MsgClaimEarly;
            toAmino(message: _187.MsgClaimEarly): _187.MsgClaimEarlyAmino;
            fromAminoMsg(object: _187.MsgClaimEarlyAminoMsg): _187.MsgClaimEarly;
            toAminoMsg(message: _187.MsgClaimEarly): _187.MsgClaimEarlyAminoMsg;
            fromProtoMsg(message: _187.MsgClaimEarlyProtoMsg): _187.MsgClaimEarly;
            toProto(message: _187.MsgClaimEarly): Uint8Array;
            toProtoMsg(message: _187.MsgClaimEarly): _187.MsgClaimEarlyProtoMsg;
        };
        MsgClaimEarlyResponse: {
            typeUrl: string;
            encode(_: _187.MsgClaimEarlyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.MsgClaimEarlyResponse;
            fromPartial(_: Partial<_187.MsgClaimEarlyResponse>): _187.MsgClaimEarlyResponse;
            fromAmino(_: _187.MsgClaimEarlyResponseAmino): _187.MsgClaimEarlyResponse;
            toAmino(_: _187.MsgClaimEarlyResponse): _187.MsgClaimEarlyResponseAmino;
            fromAminoMsg(object: _187.MsgClaimEarlyResponseAminoMsg): _187.MsgClaimEarlyResponse;
            fromProtoMsg(message: _187.MsgClaimEarlyResponseProtoMsg): _187.MsgClaimEarlyResponse;
            toProto(message: _187.MsgClaimEarlyResponse): Uint8Array;
            toProtoMsg(message: _187.MsgClaimEarlyResponse): _187.MsgClaimEarlyResponseProtoMsg;
        };
        MsgCreateAirdrop: {
            typeUrl: string;
            encode(message: _187.MsgCreateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.MsgCreateAirdrop;
            fromPartial(object: Partial<_187.MsgCreateAirdrop>): _187.MsgCreateAirdrop;
            fromAmino(object: _187.MsgCreateAirdropAmino): _187.MsgCreateAirdrop;
            toAmino(message: _187.MsgCreateAirdrop): _187.MsgCreateAirdropAmino;
            fromAminoMsg(object: _187.MsgCreateAirdropAminoMsg): _187.MsgCreateAirdrop;
            toAminoMsg(message: _187.MsgCreateAirdrop): _187.MsgCreateAirdropAminoMsg;
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
        MsgUpdateAirdrop: {
            typeUrl: string;
            encode(message: _187.MsgUpdateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.MsgUpdateAirdrop;
            fromPartial(object: Partial<_187.MsgUpdateAirdrop>): _187.MsgUpdateAirdrop;
            fromAmino(object: _187.MsgUpdateAirdropAmino): _187.MsgUpdateAirdrop;
            toAmino(message: _187.MsgUpdateAirdrop): _187.MsgUpdateAirdropAmino;
            fromAminoMsg(object: _187.MsgUpdateAirdropAminoMsg): _187.MsgUpdateAirdrop;
            toAminoMsg(message: _187.MsgUpdateAirdrop): _187.MsgUpdateAirdropAminoMsg;
            fromProtoMsg(message: _187.MsgUpdateAirdropProtoMsg): _187.MsgUpdateAirdrop;
            toProto(message: _187.MsgUpdateAirdrop): Uint8Array;
            toProtoMsg(message: _187.MsgUpdateAirdrop): _187.MsgUpdateAirdropProtoMsg;
        };
        MsgUpdateAirdropResponse: {
            typeUrl: string;
            encode(_: _187.MsgUpdateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.MsgUpdateAirdropResponse;
            fromPartial(_: Partial<_187.MsgUpdateAirdropResponse>): _187.MsgUpdateAirdropResponse;
            fromAmino(_: _187.MsgUpdateAirdropResponseAmino): _187.MsgUpdateAirdropResponse;
            toAmino(_: _187.MsgUpdateAirdropResponse): _187.MsgUpdateAirdropResponseAmino;
            fromAminoMsg(object: _187.MsgUpdateAirdropResponseAminoMsg): _187.MsgUpdateAirdropResponse;
            fromProtoMsg(message: _187.MsgUpdateAirdropResponseProtoMsg): _187.MsgUpdateAirdropResponse;
            toProto(message: _187.MsgUpdateAirdropResponse): Uint8Array;
            toProtoMsg(message: _187.MsgUpdateAirdropResponse): _187.MsgUpdateAirdropResponseProtoMsg;
        };
        RawAllocation: {
            typeUrl: string;
            encode(message: _187.RawAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.RawAllocation;
            fromPartial(object: Partial<_187.RawAllocation>): _187.RawAllocation;
            fromAmino(object: _187.RawAllocationAmino): _187.RawAllocation;
            toAmino(message: _187.RawAllocation): _187.RawAllocationAmino;
            fromAminoMsg(object: _187.RawAllocationAminoMsg): _187.RawAllocation;
            fromProtoMsg(message: _187.RawAllocationProtoMsg): _187.RawAllocation;
            toProto(message: _187.RawAllocation): Uint8Array;
            toProtoMsg(message: _187.RawAllocation): _187.RawAllocationProtoMsg;
        };
        MsgAddAllocations: {
            typeUrl: string;
            encode(message: _187.MsgAddAllocations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.MsgAddAllocations;
            fromPartial(object: Partial<_187.MsgAddAllocations>): _187.MsgAddAllocations;
            fromAmino(object: _187.MsgAddAllocationsAmino): _187.MsgAddAllocations;
            toAmino(message: _187.MsgAddAllocations): _187.MsgAddAllocationsAmino;
            fromAminoMsg(object: _187.MsgAddAllocationsAminoMsg): _187.MsgAddAllocations;
            toAminoMsg(message: _187.MsgAddAllocations): _187.MsgAddAllocationsAminoMsg;
            fromProtoMsg(message: _187.MsgAddAllocationsProtoMsg): _187.MsgAddAllocations;
            toProto(message: _187.MsgAddAllocations): Uint8Array;
            toProtoMsg(message: _187.MsgAddAllocations): _187.MsgAddAllocationsProtoMsg;
        };
        MsgAddAllocationsResponse: {
            typeUrl: string;
            encode(_: _187.MsgAddAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.MsgAddAllocationsResponse;
            fromPartial(_: Partial<_187.MsgAddAllocationsResponse>): _187.MsgAddAllocationsResponse;
            fromAmino(_: _187.MsgAddAllocationsResponseAmino): _187.MsgAddAllocationsResponse;
            toAmino(_: _187.MsgAddAllocationsResponse): _187.MsgAddAllocationsResponseAmino;
            fromAminoMsg(object: _187.MsgAddAllocationsResponseAminoMsg): _187.MsgAddAllocationsResponse;
            fromProtoMsg(message: _187.MsgAddAllocationsResponseProtoMsg): _187.MsgAddAllocationsResponse;
            toProto(message: _187.MsgAddAllocationsResponse): Uint8Array;
            toProtoMsg(message: _187.MsgAddAllocationsResponse): _187.MsgAddAllocationsResponseProtoMsg;
        };
        MsgUpdateUserAllocation: {
            typeUrl: string;
            encode(message: _187.MsgUpdateUserAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.MsgUpdateUserAllocation;
            fromPartial(object: Partial<_187.MsgUpdateUserAllocation>): _187.MsgUpdateUserAllocation;
            fromAmino(object: _187.MsgUpdateUserAllocationAmino): _187.MsgUpdateUserAllocation;
            toAmino(message: _187.MsgUpdateUserAllocation): _187.MsgUpdateUserAllocationAmino;
            fromAminoMsg(object: _187.MsgUpdateUserAllocationAminoMsg): _187.MsgUpdateUserAllocation;
            toAminoMsg(message: _187.MsgUpdateUserAllocation): _187.MsgUpdateUserAllocationAminoMsg;
            fromProtoMsg(message: _187.MsgUpdateUserAllocationProtoMsg): _187.MsgUpdateUserAllocation;
            toProto(message: _187.MsgUpdateUserAllocation): Uint8Array;
            toProtoMsg(message: _187.MsgUpdateUserAllocation): _187.MsgUpdateUserAllocationProtoMsg;
        };
        MsgUpdateUserAllocationResponse: {
            typeUrl: string;
            encode(_: _187.MsgUpdateUserAllocationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.MsgUpdateUserAllocationResponse;
            fromPartial(_: Partial<_187.MsgUpdateUserAllocationResponse>): _187.MsgUpdateUserAllocationResponse;
            fromAmino(_: _187.MsgUpdateUserAllocationResponseAmino): _187.MsgUpdateUserAllocationResponse;
            toAmino(_: _187.MsgUpdateUserAllocationResponse): _187.MsgUpdateUserAllocationResponseAmino;
            fromAminoMsg(object: _187.MsgUpdateUserAllocationResponseAminoMsg): _187.MsgUpdateUserAllocationResponse;
            fromProtoMsg(message: _187.MsgUpdateUserAllocationResponseProtoMsg): _187.MsgUpdateUserAllocationResponse;
            toProto(message: _187.MsgUpdateUserAllocationResponse): Uint8Array;
            toProtoMsg(message: _187.MsgUpdateUserAllocationResponse): _187.MsgUpdateUserAllocationResponseProtoMsg;
        };
        MsgLinkAddresses: {
            typeUrl: string;
            encode(message: _187.MsgLinkAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.MsgLinkAddresses;
            fromPartial(object: Partial<_187.MsgLinkAddresses>): _187.MsgLinkAddresses;
            fromAmino(object: _187.MsgLinkAddressesAmino): _187.MsgLinkAddresses;
            toAmino(message: _187.MsgLinkAddresses): _187.MsgLinkAddressesAmino;
            fromAminoMsg(object: _187.MsgLinkAddressesAminoMsg): _187.MsgLinkAddresses;
            toAminoMsg(message: _187.MsgLinkAddresses): _187.MsgLinkAddressesAminoMsg;
            fromProtoMsg(message: _187.MsgLinkAddressesProtoMsg): _187.MsgLinkAddresses;
            toProto(message: _187.MsgLinkAddresses): Uint8Array;
            toProtoMsg(message: _187.MsgLinkAddresses): _187.MsgLinkAddressesProtoMsg;
        };
        MsgLinkAddressesResponse: {
            typeUrl: string;
            encode(_: _187.MsgLinkAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.MsgLinkAddressesResponse;
            fromPartial(_: Partial<_187.MsgLinkAddressesResponse>): _187.MsgLinkAddressesResponse;
            fromAmino(_: _187.MsgLinkAddressesResponseAmino): _187.MsgLinkAddressesResponse;
            toAmino(_: _187.MsgLinkAddressesResponse): _187.MsgLinkAddressesResponseAmino;
            fromAminoMsg(object: _187.MsgLinkAddressesResponseAminoMsg): _187.MsgLinkAddressesResponse;
            fromProtoMsg(message: _187.MsgLinkAddressesResponseProtoMsg): _187.MsgLinkAddressesResponse;
            toProto(message: _187.MsgLinkAddressesResponse): Uint8Array;
            toProtoMsg(message: _187.MsgLinkAddressesResponse): _187.MsgLinkAddressesResponseProtoMsg;
        };
        QueryAirdropRequest: {
            typeUrl: string;
            encode(message: _186.QueryAirdropRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryAirdropRequest;
            fromPartial(object: Partial<_186.QueryAirdropRequest>): _186.QueryAirdropRequest;
            fromAmino(object: _186.QueryAirdropRequestAmino): _186.QueryAirdropRequest;
            toAmino(message: _186.QueryAirdropRequest): _186.QueryAirdropRequestAmino;
            fromAminoMsg(object: _186.QueryAirdropRequestAminoMsg): _186.QueryAirdropRequest;
            fromProtoMsg(message: _186.QueryAirdropRequestProtoMsg): _186.QueryAirdropRequest;
            toProto(message: _186.QueryAirdropRequest): Uint8Array;
            toProtoMsg(message: _186.QueryAirdropRequest): _186.QueryAirdropRequestProtoMsg;
        };
        QueryAirdropResponse: {
            typeUrl: string;
            encode(message: _186.QueryAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryAirdropResponse;
            fromPartial(object: Partial<_186.QueryAirdropResponse>): _186.QueryAirdropResponse;
            fromAmino(object: _186.QueryAirdropResponseAmino): _186.QueryAirdropResponse;
            toAmino(message: _186.QueryAirdropResponse): _186.QueryAirdropResponseAmino;
            fromAminoMsg(object: _186.QueryAirdropResponseAminoMsg): _186.QueryAirdropResponse;
            fromProtoMsg(message: _186.QueryAirdropResponseProtoMsg): _186.QueryAirdropResponse;
            toProto(message: _186.QueryAirdropResponse): Uint8Array;
            toProtoMsg(message: _186.QueryAirdropResponse): _186.QueryAirdropResponseProtoMsg;
        };
        QueryAllAirdropsRequest: {
            typeUrl: string;
            encode(_: _186.QueryAllAirdropsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryAllAirdropsRequest;
            fromPartial(_: Partial<_186.QueryAllAirdropsRequest>): _186.QueryAllAirdropsRequest;
            fromAmino(_: _186.QueryAllAirdropsRequestAmino): _186.QueryAllAirdropsRequest;
            toAmino(_: _186.QueryAllAirdropsRequest): _186.QueryAllAirdropsRequestAmino;
            fromAminoMsg(object: _186.QueryAllAirdropsRequestAminoMsg): _186.QueryAllAirdropsRequest;
            fromProtoMsg(message: _186.QueryAllAirdropsRequestProtoMsg): _186.QueryAllAirdropsRequest;
            toProto(message: _186.QueryAllAirdropsRequest): Uint8Array;
            toProtoMsg(message: _186.QueryAllAirdropsRequest): _186.QueryAllAirdropsRequestProtoMsg;
        };
        QueryAllAirdropsResponse: {
            typeUrl: string;
            encode(message: _186.QueryAllAirdropsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryAllAirdropsResponse;
            fromPartial(object: Partial<_186.QueryAllAirdropsResponse>): _186.QueryAllAirdropsResponse;
            fromAmino(object: _186.QueryAllAirdropsResponseAmino): _186.QueryAllAirdropsResponse;
            toAmino(message: _186.QueryAllAirdropsResponse): _186.QueryAllAirdropsResponseAmino;
            fromAminoMsg(object: _186.QueryAllAirdropsResponseAminoMsg): _186.QueryAllAirdropsResponse;
            fromProtoMsg(message: _186.QueryAllAirdropsResponseProtoMsg): _186.QueryAllAirdropsResponse;
            toProto(message: _186.QueryAllAirdropsResponse): Uint8Array;
            toProtoMsg(message: _186.QueryAllAirdropsResponse): _186.QueryAllAirdropsResponseProtoMsg;
        };
        QueryUserAllocationRequest: {
            typeUrl: string;
            encode(message: _186.QueryUserAllocationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryUserAllocationRequest;
            fromPartial(object: Partial<_186.QueryUserAllocationRequest>): _186.QueryUserAllocationRequest;
            fromAmino(object: _186.QueryUserAllocationRequestAmino): _186.QueryUserAllocationRequest;
            toAmino(message: _186.QueryUserAllocationRequest): _186.QueryUserAllocationRequestAmino;
            fromAminoMsg(object: _186.QueryUserAllocationRequestAminoMsg): _186.QueryUserAllocationRequest;
            fromProtoMsg(message: _186.QueryUserAllocationRequestProtoMsg): _186.QueryUserAllocationRequest;
            toProto(message: _186.QueryUserAllocationRequest): Uint8Array;
            toProtoMsg(message: _186.QueryUserAllocationRequest): _186.QueryUserAllocationRequestProtoMsg;
        };
        QueryUserAllocationResponse: {
            typeUrl: string;
            encode(message: _186.QueryUserAllocationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryUserAllocationResponse;
            fromPartial(object: Partial<_186.QueryUserAllocationResponse>): _186.QueryUserAllocationResponse;
            fromAmino(object: _186.QueryUserAllocationResponseAmino): _186.QueryUserAllocationResponse;
            toAmino(message: _186.QueryUserAllocationResponse): _186.QueryUserAllocationResponseAmino;
            fromAminoMsg(object: _186.QueryUserAllocationResponseAminoMsg): _186.QueryUserAllocationResponse;
            fromProtoMsg(message: _186.QueryUserAllocationResponseProtoMsg): _186.QueryUserAllocationResponse;
            toProto(message: _186.QueryUserAllocationResponse): Uint8Array;
            toProtoMsg(message: _186.QueryUserAllocationResponse): _186.QueryUserAllocationResponseProtoMsg;
        };
        QueryUserAllocationsRequest: {
            typeUrl: string;
            encode(message: _186.QueryUserAllocationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryUserAllocationsRequest;
            fromPartial(object: Partial<_186.QueryUserAllocationsRequest>): _186.QueryUserAllocationsRequest;
            fromAmino(object: _186.QueryUserAllocationsRequestAmino): _186.QueryUserAllocationsRequest;
            toAmino(message: _186.QueryUserAllocationsRequest): _186.QueryUserAllocationsRequestAmino;
            fromAminoMsg(object: _186.QueryUserAllocationsRequestAminoMsg): _186.QueryUserAllocationsRequest;
            fromProtoMsg(message: _186.QueryUserAllocationsRequestProtoMsg): _186.QueryUserAllocationsRequest;
            toProto(message: _186.QueryUserAllocationsRequest): Uint8Array;
            toProtoMsg(message: _186.QueryUserAllocationsRequest): _186.QueryUserAllocationsRequestProtoMsg;
        };
        QueryUserAllocationsResponse: {
            typeUrl: string;
            encode(message: _186.QueryUserAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryUserAllocationsResponse;
            fromPartial(object: Partial<_186.QueryUserAllocationsResponse>): _186.QueryUserAllocationsResponse;
            fromAmino(object: _186.QueryUserAllocationsResponseAmino): _186.QueryUserAllocationsResponse;
            toAmino(message: _186.QueryUserAllocationsResponse): _186.QueryUserAllocationsResponseAmino;
            fromAminoMsg(object: _186.QueryUserAllocationsResponseAminoMsg): _186.QueryUserAllocationsResponse;
            fromProtoMsg(message: _186.QueryUserAllocationsResponseProtoMsg): _186.QueryUserAllocationsResponse;
            toProto(message: _186.QueryUserAllocationsResponse): Uint8Array;
            toProtoMsg(message: _186.QueryUserAllocationsResponse): _186.QueryUserAllocationsResponseProtoMsg;
        };
        QueryAllAllocationsRequest: {
            typeUrl: string;
            encode(message: _186.QueryAllAllocationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryAllAllocationsRequest;
            fromPartial(object: Partial<_186.QueryAllAllocationsRequest>): _186.QueryAllAllocationsRequest;
            fromAmino(object: _186.QueryAllAllocationsRequestAmino): _186.QueryAllAllocationsRequest;
            toAmino(message: _186.QueryAllAllocationsRequest): _186.QueryAllAllocationsRequestAmino;
            fromAminoMsg(object: _186.QueryAllAllocationsRequestAminoMsg): _186.QueryAllAllocationsRequest;
            fromProtoMsg(message: _186.QueryAllAllocationsRequestProtoMsg): _186.QueryAllAllocationsRequest;
            toProto(message: _186.QueryAllAllocationsRequest): Uint8Array;
            toProtoMsg(message: _186.QueryAllAllocationsRequest): _186.QueryAllAllocationsRequestProtoMsg;
        };
        QueryAllAllocationsResponse: {
            typeUrl: string;
            encode(message: _186.QueryAllAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryAllAllocationsResponse;
            fromPartial(object: Partial<_186.QueryAllAllocationsResponse>): _186.QueryAllAllocationsResponse;
            fromAmino(object: _186.QueryAllAllocationsResponseAmino): _186.QueryAllAllocationsResponse;
            toAmino(message: _186.QueryAllAllocationsResponse): _186.QueryAllAllocationsResponseAmino;
            fromAminoMsg(object: _186.QueryAllAllocationsResponseAminoMsg): _186.QueryAllAllocationsResponse;
            fromProtoMsg(message: _186.QueryAllAllocationsResponseProtoMsg): _186.QueryAllAllocationsResponse;
            toProto(message: _186.QueryAllAllocationsResponse): Uint8Array;
            toProtoMsg(message: _186.QueryAllAllocationsResponse): _186.QueryAllAllocationsResponseProtoMsg;
        };
        QueryUserSummaryRequest: {
            typeUrl: string;
            encode(message: _186.QueryUserSummaryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryUserSummaryRequest;
            fromPartial(object: Partial<_186.QueryUserSummaryRequest>): _186.QueryUserSummaryRequest;
            fromAmino(object: _186.QueryUserSummaryRequestAmino): _186.QueryUserSummaryRequest;
            toAmino(message: _186.QueryUserSummaryRequest): _186.QueryUserSummaryRequestAmino;
            fromAminoMsg(object: _186.QueryUserSummaryRequestAminoMsg): _186.QueryUserSummaryRequest;
            fromProtoMsg(message: _186.QueryUserSummaryRequestProtoMsg): _186.QueryUserSummaryRequest;
            toProto(message: _186.QueryUserSummaryRequest): Uint8Array;
            toProtoMsg(message: _186.QueryUserSummaryRequest): _186.QueryUserSummaryRequestProtoMsg;
        };
        QueryUserSummaryResponse: {
            typeUrl: string;
            encode(message: _186.QueryUserSummaryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryUserSummaryResponse;
            fromPartial(object: Partial<_186.QueryUserSummaryResponse>): _186.QueryUserSummaryResponse;
            fromAmino(object: _186.QueryUserSummaryResponseAmino): _186.QueryUserSummaryResponse;
            toAmino(message: _186.QueryUserSummaryResponse): _186.QueryUserSummaryResponseAmino;
            fromAminoMsg(object: _186.QueryUserSummaryResponseAminoMsg): _186.QueryUserSummaryResponse;
            fromProtoMsg(message: _186.QueryUserSummaryResponseProtoMsg): _186.QueryUserSummaryResponse;
            toProto(message: _186.QueryUserSummaryResponse): Uint8Array;
            toProtoMsg(message: _186.QueryUserSummaryResponse): _186.QueryUserSummaryResponseProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _185.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.GenesisState;
            fromPartial(object: Partial<_185.GenesisState>): _185.GenesisState;
            fromAmino(object: _185.GenesisStateAmino): _185.GenesisState;
            toAmino(message: _185.GenesisState): _185.GenesisStateAmino;
            fromAminoMsg(object: _185.GenesisStateAminoMsg): _185.GenesisState;
            fromProtoMsg(message: _185.GenesisStateProtoMsg): _185.GenesisState;
            toProto(message: _185.GenesisState): Uint8Array;
            toProtoMsg(message: _185.GenesisState): _185.GenesisStateProtoMsg;
        };
        claimTypeFromJSON(object: any): _184.ClaimType;
        claimTypeToJSON(object: _184.ClaimType): string;
        ClaimType: typeof _184.ClaimType;
        ClaimTypeSDKType: typeof _184.ClaimType;
        ClaimTypeAmino: typeof _184.ClaimType;
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
        UserAllocation: {
            typeUrl: string;
            encode(message: _184.UserAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.UserAllocation;
            fromPartial(object: Partial<_184.UserAllocation>): _184.UserAllocation;
            fromAmino(object: _184.UserAllocationAmino): _184.UserAllocation;
            toAmino(message: _184.UserAllocation): _184.UserAllocationAmino;
            fromAminoMsg(object: _184.UserAllocationAminoMsg): _184.UserAllocation;
            fromProtoMsg(message: _184.UserAllocationProtoMsg): _184.UserAllocation;
            toProto(message: _184.UserAllocation): Uint8Array;
            toProtoMsg(message: _184.UserAllocation): _184.UserAllocationProtoMsg;
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
    };
    const auction: {
        MsgClientImpl: typeof _403.MsgClientImpl;
        QueryClientImpl: typeof _389.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            auction(request: _190.QueryAuctionRequest): Promise<_190.QueryAuctionResponse>;
            auctions(request?: _190.QueryAuctionsRequest): Promise<_190.QueryAuctionsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                placeBid(value: _191.MsgPlaceBid): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAuction(value: _191.MsgCreateAuction): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateAuction(value: _191.MsgUpdateAuction): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                placeBid(value: _191.MsgPlaceBid): {
                    typeUrl: string;
                    value: _191.MsgPlaceBid;
                };
                createAuction(value: _191.MsgCreateAuction): {
                    typeUrl: string;
                    value: _191.MsgCreateAuction;
                };
                updateAuction(value: _191.MsgUpdateAuction): {
                    typeUrl: string;
                    value: _191.MsgUpdateAuction;
                };
            };
            fromPartial: {
                placeBid(value: _191.MsgPlaceBid): {
                    typeUrl: string;
                    value: _191.MsgPlaceBid;
                };
                createAuction(value: _191.MsgCreateAuction): {
                    typeUrl: string;
                    value: _191.MsgCreateAuction;
                };
                updateAuction(value: _191.MsgUpdateAuction): {
                    typeUrl: string;
                    value: _191.MsgUpdateAuction;
                };
            };
        };
        AminoConverter: {
            "/stride.auction.MsgPlaceBid": {
                aminoType: string;
                toAmino: (message: _191.MsgPlaceBid) => _191.MsgPlaceBidAmino;
                fromAmino: (object: _191.MsgPlaceBidAmino) => _191.MsgPlaceBid;
            };
            "/stride.auction.MsgCreateAuction": {
                aminoType: string;
                toAmino: (message: _191.MsgCreateAuction) => _191.MsgCreateAuctionAmino;
                fromAmino: (object: _191.MsgCreateAuctionAmino) => _191.MsgCreateAuction;
            };
            "/stride.auction.MsgUpdateAuction": {
                aminoType: string;
                toAmino: (message: _191.MsgUpdateAuction) => _191.MsgUpdateAuctionAmino;
                fromAmino: (object: _191.MsgUpdateAuctionAmino) => _191.MsgUpdateAuction;
            };
        };
        MsgPlaceBid: {
            typeUrl: string;
            encode(message: _191.MsgPlaceBid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.MsgPlaceBid;
            fromPartial(object: Partial<_191.MsgPlaceBid>): _191.MsgPlaceBid;
            fromAmino(object: _191.MsgPlaceBidAmino): _191.MsgPlaceBid;
            toAmino(message: _191.MsgPlaceBid): _191.MsgPlaceBidAmino;
            fromAminoMsg(object: _191.MsgPlaceBidAminoMsg): _191.MsgPlaceBid;
            toAminoMsg(message: _191.MsgPlaceBid): _191.MsgPlaceBidAminoMsg;
            fromProtoMsg(message: _191.MsgPlaceBidProtoMsg): _191.MsgPlaceBid;
            toProto(message: _191.MsgPlaceBid): Uint8Array;
            toProtoMsg(message: _191.MsgPlaceBid): _191.MsgPlaceBidProtoMsg;
        };
        MsgPlaceBidResponse: {
            typeUrl: string;
            encode(_: _191.MsgPlaceBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.MsgPlaceBidResponse;
            fromPartial(_: Partial<_191.MsgPlaceBidResponse>): _191.MsgPlaceBidResponse;
            fromAmino(_: _191.MsgPlaceBidResponseAmino): _191.MsgPlaceBidResponse;
            toAmino(_: _191.MsgPlaceBidResponse): _191.MsgPlaceBidResponseAmino;
            fromAminoMsg(object: _191.MsgPlaceBidResponseAminoMsg): _191.MsgPlaceBidResponse;
            fromProtoMsg(message: _191.MsgPlaceBidResponseProtoMsg): _191.MsgPlaceBidResponse;
            toProto(message: _191.MsgPlaceBidResponse): Uint8Array;
            toProtoMsg(message: _191.MsgPlaceBidResponse): _191.MsgPlaceBidResponseProtoMsg;
        };
        MsgCreateAuction: {
            typeUrl: string;
            encode(message: _191.MsgCreateAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.MsgCreateAuction;
            fromPartial(object: Partial<_191.MsgCreateAuction>): _191.MsgCreateAuction;
            fromAmino(object: _191.MsgCreateAuctionAmino): _191.MsgCreateAuction;
            toAmino(message: _191.MsgCreateAuction): _191.MsgCreateAuctionAmino;
            fromAminoMsg(object: _191.MsgCreateAuctionAminoMsg): _191.MsgCreateAuction;
            toAminoMsg(message: _191.MsgCreateAuction): _191.MsgCreateAuctionAminoMsg;
            fromProtoMsg(message: _191.MsgCreateAuctionProtoMsg): _191.MsgCreateAuction;
            toProto(message: _191.MsgCreateAuction): Uint8Array;
            toProtoMsg(message: _191.MsgCreateAuction): _191.MsgCreateAuctionProtoMsg;
        };
        MsgCreateAuctionResponse: {
            typeUrl: string;
            encode(_: _191.MsgCreateAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.MsgCreateAuctionResponse;
            fromPartial(_: Partial<_191.MsgCreateAuctionResponse>): _191.MsgCreateAuctionResponse;
            fromAmino(_: _191.MsgCreateAuctionResponseAmino): _191.MsgCreateAuctionResponse;
            toAmino(_: _191.MsgCreateAuctionResponse): _191.MsgCreateAuctionResponseAmino;
            fromAminoMsg(object: _191.MsgCreateAuctionResponseAminoMsg): _191.MsgCreateAuctionResponse;
            fromProtoMsg(message: _191.MsgCreateAuctionResponseProtoMsg): _191.MsgCreateAuctionResponse;
            toProto(message: _191.MsgCreateAuctionResponse): Uint8Array;
            toProtoMsg(message: _191.MsgCreateAuctionResponse): _191.MsgCreateAuctionResponseProtoMsg;
        };
        MsgUpdateAuction: {
            typeUrl: string;
            encode(message: _191.MsgUpdateAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.MsgUpdateAuction;
            fromPartial(object: Partial<_191.MsgUpdateAuction>): _191.MsgUpdateAuction;
            fromAmino(object: _191.MsgUpdateAuctionAmino): _191.MsgUpdateAuction;
            toAmino(message: _191.MsgUpdateAuction): _191.MsgUpdateAuctionAmino;
            fromAminoMsg(object: _191.MsgUpdateAuctionAminoMsg): _191.MsgUpdateAuction;
            toAminoMsg(message: _191.MsgUpdateAuction): _191.MsgUpdateAuctionAminoMsg;
            fromProtoMsg(message: _191.MsgUpdateAuctionProtoMsg): _191.MsgUpdateAuction;
            toProto(message: _191.MsgUpdateAuction): Uint8Array;
            toProtoMsg(message: _191.MsgUpdateAuction): _191.MsgUpdateAuctionProtoMsg;
        };
        MsgUpdateAuctionResponse: {
            typeUrl: string;
            encode(_: _191.MsgUpdateAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.MsgUpdateAuctionResponse;
            fromPartial(_: Partial<_191.MsgUpdateAuctionResponse>): _191.MsgUpdateAuctionResponse;
            fromAmino(_: _191.MsgUpdateAuctionResponseAmino): _191.MsgUpdateAuctionResponse;
            toAmino(_: _191.MsgUpdateAuctionResponse): _191.MsgUpdateAuctionResponseAmino;
            fromAminoMsg(object: _191.MsgUpdateAuctionResponseAminoMsg): _191.MsgUpdateAuctionResponse;
            fromProtoMsg(message: _191.MsgUpdateAuctionResponseProtoMsg): _191.MsgUpdateAuctionResponse;
            toProto(message: _191.MsgUpdateAuctionResponse): Uint8Array;
            toProtoMsg(message: _191.MsgUpdateAuctionResponse): _191.MsgUpdateAuctionResponseProtoMsg;
        };
        QueryAuctionRequest: {
            typeUrl: string;
            encode(message: _190.QueryAuctionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryAuctionRequest;
            fromPartial(object: Partial<_190.QueryAuctionRequest>): _190.QueryAuctionRequest;
            fromAmino(object: _190.QueryAuctionRequestAmino): _190.QueryAuctionRequest;
            toAmino(message: _190.QueryAuctionRequest): _190.QueryAuctionRequestAmino;
            fromAminoMsg(object: _190.QueryAuctionRequestAminoMsg): _190.QueryAuctionRequest;
            fromProtoMsg(message: _190.QueryAuctionRequestProtoMsg): _190.QueryAuctionRequest;
            toProto(message: _190.QueryAuctionRequest): Uint8Array;
            toProtoMsg(message: _190.QueryAuctionRequest): _190.QueryAuctionRequestProtoMsg;
        };
        QueryAuctionResponse: {
            typeUrl: string;
            encode(message: _190.QueryAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryAuctionResponse;
            fromPartial(object: Partial<_190.QueryAuctionResponse>): _190.QueryAuctionResponse;
            fromAmino(object: _190.QueryAuctionResponseAmino): _190.QueryAuctionResponse;
            toAmino(message: _190.QueryAuctionResponse): _190.QueryAuctionResponseAmino;
            fromAminoMsg(object: _190.QueryAuctionResponseAminoMsg): _190.QueryAuctionResponse;
            fromProtoMsg(message: _190.QueryAuctionResponseProtoMsg): _190.QueryAuctionResponse;
            toProto(message: _190.QueryAuctionResponse): Uint8Array;
            toProtoMsg(message: _190.QueryAuctionResponse): _190.QueryAuctionResponseProtoMsg;
        };
        QueryAuctionsRequest: {
            typeUrl: string;
            encode(message: _190.QueryAuctionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryAuctionsRequest;
            fromPartial(object: Partial<_190.QueryAuctionsRequest>): _190.QueryAuctionsRequest;
            fromAmino(object: _190.QueryAuctionsRequestAmino): _190.QueryAuctionsRequest;
            toAmino(message: _190.QueryAuctionsRequest): _190.QueryAuctionsRequestAmino;
            fromAminoMsg(object: _190.QueryAuctionsRequestAminoMsg): _190.QueryAuctionsRequest;
            fromProtoMsg(message: _190.QueryAuctionsRequestProtoMsg): _190.QueryAuctionsRequest;
            toProto(message: _190.QueryAuctionsRequest): Uint8Array;
            toProtoMsg(message: _190.QueryAuctionsRequest): _190.QueryAuctionsRequestProtoMsg;
        };
        QueryAuctionsResponse: {
            typeUrl: string;
            encode(message: _190.QueryAuctionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryAuctionsResponse;
            fromPartial(object: Partial<_190.QueryAuctionsResponse>): _190.QueryAuctionsResponse;
            fromAmino(object: _190.QueryAuctionsResponseAmino): _190.QueryAuctionsResponse;
            toAmino(message: _190.QueryAuctionsResponse): _190.QueryAuctionsResponseAmino;
            fromAminoMsg(object: _190.QueryAuctionsResponseAminoMsg): _190.QueryAuctionsResponse;
            fromProtoMsg(message: _190.QueryAuctionsResponseProtoMsg): _190.QueryAuctionsResponse;
            toProto(message: _190.QueryAuctionsResponse): Uint8Array;
            toProtoMsg(message: _190.QueryAuctionsResponse): _190.QueryAuctionsResponseProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _189.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.GenesisState;
            fromPartial(object: Partial<_189.GenesisState>): _189.GenesisState;
            fromAmino(object: _189.GenesisStateAmino): _189.GenesisState;
            toAmino(message: _189.GenesisState): _189.GenesisStateAmino;
            fromAminoMsg(object: _189.GenesisStateAminoMsg): _189.GenesisState;
            fromProtoMsg(message: _189.GenesisStateProtoMsg): _189.GenesisState;
            toProto(message: _189.GenesisState): Uint8Array;
            toProtoMsg(message: _189.GenesisState): _189.GenesisStateProtoMsg;
        };
        auctionTypeFromJSON(object: any): _188.AuctionType;
        auctionTypeToJSON(object: _188.AuctionType): string;
        AuctionType: typeof _188.AuctionType;
        AuctionTypeSDKType: typeof _188.AuctionType;
        AuctionTypeAmino: typeof _188.AuctionType;
        Params: {
            typeUrl: string;
            encode(_: _188.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.Params;
            fromPartial(_: Partial<_188.Params>): _188.Params;
            fromAmino(_: _188.ParamsAmino): _188.Params;
            toAmino(_: _188.Params): _188.ParamsAmino;
            fromAminoMsg(object: _188.ParamsAminoMsg): _188.Params;
            fromProtoMsg(message: _188.ParamsProtoMsg): _188.Params;
            toProto(message: _188.Params): Uint8Array;
            toProtoMsg(message: _188.Params): _188.ParamsProtoMsg;
        };
        Auction: {
            typeUrl: string;
            encode(message: _188.Auction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.Auction;
            fromPartial(object: Partial<_188.Auction>): _188.Auction;
            fromAmino(object: _188.AuctionAmino): _188.Auction;
            toAmino(message: _188.Auction): _188.AuctionAmino;
            fromAminoMsg(object: _188.AuctionAminoMsg): _188.Auction;
            fromProtoMsg(message: _188.AuctionProtoMsg): _188.Auction;
            toProto(message: _188.Auction): Uint8Array;
            toProtoMsg(message: _188.Auction): _188.AuctionProtoMsg;
        };
    };
    const autopilot: {
        QueryClientImpl: typeof _390.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _194.QueryParamsRequest): Promise<_194.QueryParamsResponse>;
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
        Params: {
            typeUrl: string;
            encode(message: _193.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.Params;
            fromPartial(object: Partial<_193.Params>): _193.Params;
            fromAmino(object: _193.ParamsAmino): _193.Params;
            toAmino(message: _193.Params): _193.ParamsAmino;
            fromAminoMsg(object: _193.ParamsAminoMsg): _193.Params;
            fromProtoMsg(message: _193.ParamsProtoMsg): _193.Params;
            toProto(message: _193.Params): Uint8Array;
            toProtoMsg(message: _193.Params): _193.ParamsProtoMsg;
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
    const claim: {
        MsgClientImpl: typeof _404.MsgClientImpl;
        QueryClientImpl: typeof _391.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            distributorAccountBalance(request: _198.QueryDistributorAccountBalanceRequest): Promise<_198.QueryDistributorAccountBalanceResponse>;
            params(request?: _198.QueryParamsRequest): Promise<_198.QueryParamsResponse>;
            claimRecord(request: _198.QueryClaimRecordRequest): Promise<_198.QueryClaimRecordResponse>;
            claimableForAction(request: _198.QueryClaimableForActionRequest): Promise<_198.QueryClaimableForActionResponse>;
            totalClaimable(request: _198.QueryTotalClaimableRequest): Promise<_198.QueryTotalClaimableResponse>;
            userVestings(request: _198.QueryUserVestingsRequest): Promise<_198.QueryUserVestingsResponse>;
            claimStatus(request: _198.QueryClaimStatusRequest): Promise<_198.QueryClaimStatusResponse>;
            claimMetadata(request?: _198.QueryClaimMetadataRequest): Promise<_198.QueryClaimMetadataResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                setAirdropAllocations(value: _199.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimFreeAmount(value: _199.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAirdrop(value: _199.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteAirdrop(value: _199.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                setAirdropAllocations(value: _199.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _199.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _199.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _199.MsgClaimFreeAmount;
                };
                createAirdrop(value: _199.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _199.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _199.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _199.MsgDeleteAirdrop;
                };
            };
            fromPartial: {
                setAirdropAllocations(value: _199.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _199.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _199.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _199.MsgClaimFreeAmount;
                };
                createAirdrop(value: _199.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _199.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _199.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _199.MsgDeleteAirdrop;
                };
            };
        };
        AminoConverter: {
            "/stride.claim.MsgSetAirdropAllocations": {
                aminoType: string;
                toAmino: (message: _199.MsgSetAirdropAllocations) => _199.MsgSetAirdropAllocationsAmino;
                fromAmino: (object: _199.MsgSetAirdropAllocationsAmino) => _199.MsgSetAirdropAllocations;
            };
            "/stride.claim.MsgClaimFreeAmount": {
                aminoType: string;
                toAmino: (message: _199.MsgClaimFreeAmount) => _199.MsgClaimFreeAmountAmino;
                fromAmino: (object: _199.MsgClaimFreeAmountAmino) => _199.MsgClaimFreeAmount;
            };
            "/stride.claim.MsgCreateAirdrop": {
                aminoType: string;
                toAmino: (message: _199.MsgCreateAirdrop) => _199.MsgCreateAirdropAmino;
                fromAmino: (object: _199.MsgCreateAirdropAmino) => _199.MsgCreateAirdrop;
            };
            "/stride.claim.MsgDeleteAirdrop": {
                aminoType: string;
                toAmino: (message: _199.MsgDeleteAirdrop) => _199.MsgDeleteAirdropAmino;
                fromAmino: (object: _199.MsgDeleteAirdropAmino) => _199.MsgDeleteAirdrop;
            };
        };
        MsgSetAirdropAllocations: {
            typeUrl: string;
            encode(message: _199.MsgSetAirdropAllocations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.MsgSetAirdropAllocations;
            fromPartial(object: Partial<_199.MsgSetAirdropAllocations>): _199.MsgSetAirdropAllocations;
            fromAmino(object: _199.MsgSetAirdropAllocationsAmino): _199.MsgSetAirdropAllocations;
            toAmino(message: _199.MsgSetAirdropAllocations): _199.MsgSetAirdropAllocationsAmino;
            fromAminoMsg(object: _199.MsgSetAirdropAllocationsAminoMsg): _199.MsgSetAirdropAllocations;
            fromProtoMsg(message: _199.MsgSetAirdropAllocationsProtoMsg): _199.MsgSetAirdropAllocations;
            toProto(message: _199.MsgSetAirdropAllocations): Uint8Array;
            toProtoMsg(message: _199.MsgSetAirdropAllocations): _199.MsgSetAirdropAllocationsProtoMsg;
        };
        MsgSetAirdropAllocationsResponse: {
            typeUrl: string;
            encode(_: _199.MsgSetAirdropAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.MsgSetAirdropAllocationsResponse;
            fromPartial(_: Partial<_199.MsgSetAirdropAllocationsResponse>): _199.MsgSetAirdropAllocationsResponse;
            fromAmino(_: _199.MsgSetAirdropAllocationsResponseAmino): _199.MsgSetAirdropAllocationsResponse;
            toAmino(_: _199.MsgSetAirdropAllocationsResponse): _199.MsgSetAirdropAllocationsResponseAmino;
            fromAminoMsg(object: _199.MsgSetAirdropAllocationsResponseAminoMsg): _199.MsgSetAirdropAllocationsResponse;
            fromProtoMsg(message: _199.MsgSetAirdropAllocationsResponseProtoMsg): _199.MsgSetAirdropAllocationsResponse;
            toProto(message: _199.MsgSetAirdropAllocationsResponse): Uint8Array;
            toProtoMsg(message: _199.MsgSetAirdropAllocationsResponse): _199.MsgSetAirdropAllocationsResponseProtoMsg;
        };
        MsgClaimFreeAmount: {
            typeUrl: string;
            encode(message: _199.MsgClaimFreeAmount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.MsgClaimFreeAmount;
            fromPartial(object: Partial<_199.MsgClaimFreeAmount>): _199.MsgClaimFreeAmount;
            fromAmino(object: _199.MsgClaimFreeAmountAmino): _199.MsgClaimFreeAmount;
            toAmino(message: _199.MsgClaimFreeAmount): _199.MsgClaimFreeAmountAmino;
            fromAminoMsg(object: _199.MsgClaimFreeAmountAminoMsg): _199.MsgClaimFreeAmount;
            toAminoMsg(message: _199.MsgClaimFreeAmount): _199.MsgClaimFreeAmountAminoMsg;
            fromProtoMsg(message: _199.MsgClaimFreeAmountProtoMsg): _199.MsgClaimFreeAmount;
            toProto(message: _199.MsgClaimFreeAmount): Uint8Array;
            toProtoMsg(message: _199.MsgClaimFreeAmount): _199.MsgClaimFreeAmountProtoMsg;
        };
        MsgClaimFreeAmountResponse: {
            typeUrl: string;
            encode(message: _199.MsgClaimFreeAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.MsgClaimFreeAmountResponse;
            fromPartial(object: Partial<_199.MsgClaimFreeAmountResponse>): _199.MsgClaimFreeAmountResponse;
            fromAmino(object: _199.MsgClaimFreeAmountResponseAmino): _199.MsgClaimFreeAmountResponse;
            toAmino(message: _199.MsgClaimFreeAmountResponse): _199.MsgClaimFreeAmountResponseAmino;
            fromAminoMsg(object: _199.MsgClaimFreeAmountResponseAminoMsg): _199.MsgClaimFreeAmountResponse;
            fromProtoMsg(message: _199.MsgClaimFreeAmountResponseProtoMsg): _199.MsgClaimFreeAmountResponse;
            toProto(message: _199.MsgClaimFreeAmountResponse): Uint8Array;
            toProtoMsg(message: _199.MsgClaimFreeAmountResponse): _199.MsgClaimFreeAmountResponseProtoMsg;
        };
        MsgCreateAirdrop: {
            typeUrl: string;
            encode(message: _199.MsgCreateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.MsgCreateAirdrop;
            fromPartial(object: Partial<_199.MsgCreateAirdrop>): _199.MsgCreateAirdrop;
            fromAmino(object: _199.MsgCreateAirdropAmino): _199.MsgCreateAirdrop;
            toAmino(message: _199.MsgCreateAirdrop): _199.MsgCreateAirdropAmino;
            fromAminoMsg(object: _199.MsgCreateAirdropAminoMsg): _199.MsgCreateAirdrop;
            fromProtoMsg(message: _199.MsgCreateAirdropProtoMsg): _199.MsgCreateAirdrop;
            toProto(message: _199.MsgCreateAirdrop): Uint8Array;
            toProtoMsg(message: _199.MsgCreateAirdrop): _199.MsgCreateAirdropProtoMsg;
        };
        MsgCreateAirdropResponse: {
            typeUrl: string;
            encode(_: _199.MsgCreateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.MsgCreateAirdropResponse;
            fromPartial(_: Partial<_199.MsgCreateAirdropResponse>): _199.MsgCreateAirdropResponse;
            fromAmino(_: _199.MsgCreateAirdropResponseAmino): _199.MsgCreateAirdropResponse;
            toAmino(_: _199.MsgCreateAirdropResponse): _199.MsgCreateAirdropResponseAmino;
            fromAminoMsg(object: _199.MsgCreateAirdropResponseAminoMsg): _199.MsgCreateAirdropResponse;
            fromProtoMsg(message: _199.MsgCreateAirdropResponseProtoMsg): _199.MsgCreateAirdropResponse;
            toProto(message: _199.MsgCreateAirdropResponse): Uint8Array;
            toProtoMsg(message: _199.MsgCreateAirdropResponse): _199.MsgCreateAirdropResponseProtoMsg;
        };
        MsgDeleteAirdrop: {
            typeUrl: string;
            encode(message: _199.MsgDeleteAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.MsgDeleteAirdrop;
            fromPartial(object: Partial<_199.MsgDeleteAirdrop>): _199.MsgDeleteAirdrop;
            fromAmino(object: _199.MsgDeleteAirdropAmino): _199.MsgDeleteAirdrop;
            toAmino(message: _199.MsgDeleteAirdrop): _199.MsgDeleteAirdropAmino;
            fromAminoMsg(object: _199.MsgDeleteAirdropAminoMsg): _199.MsgDeleteAirdrop;
            fromProtoMsg(message: _199.MsgDeleteAirdropProtoMsg): _199.MsgDeleteAirdrop;
            toProto(message: _199.MsgDeleteAirdrop): Uint8Array;
            toProtoMsg(message: _199.MsgDeleteAirdrop): _199.MsgDeleteAirdropProtoMsg;
        };
        MsgDeleteAirdropResponse: {
            typeUrl: string;
            encode(_: _199.MsgDeleteAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.MsgDeleteAirdropResponse;
            fromPartial(_: Partial<_199.MsgDeleteAirdropResponse>): _199.MsgDeleteAirdropResponse;
            fromAmino(_: _199.MsgDeleteAirdropResponseAmino): _199.MsgDeleteAirdropResponse;
            toAmino(_: _199.MsgDeleteAirdropResponse): _199.MsgDeleteAirdropResponseAmino;
            fromAminoMsg(object: _199.MsgDeleteAirdropResponseAminoMsg): _199.MsgDeleteAirdropResponse;
            fromProtoMsg(message: _199.MsgDeleteAirdropResponseProtoMsg): _199.MsgDeleteAirdropResponse;
            toProto(message: _199.MsgDeleteAirdropResponse): Uint8Array;
            toProtoMsg(message: _199.MsgDeleteAirdropResponse): _199.MsgDeleteAirdropResponseProtoMsg;
        };
        ClaimStatus: {
            typeUrl: string;
            encode(message: _198.ClaimStatus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.ClaimStatus;
            fromPartial(object: Partial<_198.ClaimStatus>): _198.ClaimStatus;
            fromAmino(object: _198.ClaimStatusAmino): _198.ClaimStatus;
            toAmino(message: _198.ClaimStatus): _198.ClaimStatusAmino;
            fromAminoMsg(object: _198.ClaimStatusAminoMsg): _198.ClaimStatus;
            fromProtoMsg(message: _198.ClaimStatusProtoMsg): _198.ClaimStatus;
            toProto(message: _198.ClaimStatus): Uint8Array;
            toProtoMsg(message: _198.ClaimStatus): _198.ClaimStatusProtoMsg;
        };
        QueryClaimStatusRequest: {
            typeUrl: string;
            encode(message: _198.QueryClaimStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryClaimStatusRequest;
            fromPartial(object: Partial<_198.QueryClaimStatusRequest>): _198.QueryClaimStatusRequest;
            fromAmino(object: _198.QueryClaimStatusRequestAmino): _198.QueryClaimStatusRequest;
            toAmino(message: _198.QueryClaimStatusRequest): _198.QueryClaimStatusRequestAmino;
            fromAminoMsg(object: _198.QueryClaimStatusRequestAminoMsg): _198.QueryClaimStatusRequest;
            fromProtoMsg(message: _198.QueryClaimStatusRequestProtoMsg): _198.QueryClaimStatusRequest;
            toProto(message: _198.QueryClaimStatusRequest): Uint8Array;
            toProtoMsg(message: _198.QueryClaimStatusRequest): _198.QueryClaimStatusRequestProtoMsg;
        };
        QueryClaimStatusResponse: {
            typeUrl: string;
            encode(message: _198.QueryClaimStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryClaimStatusResponse;
            fromPartial(object: Partial<_198.QueryClaimStatusResponse>): _198.QueryClaimStatusResponse;
            fromAmino(object: _198.QueryClaimStatusResponseAmino): _198.QueryClaimStatusResponse;
            toAmino(message: _198.QueryClaimStatusResponse): _198.QueryClaimStatusResponseAmino;
            fromAminoMsg(object: _198.QueryClaimStatusResponseAminoMsg): _198.QueryClaimStatusResponse;
            fromProtoMsg(message: _198.QueryClaimStatusResponseProtoMsg): _198.QueryClaimStatusResponse;
            toProto(message: _198.QueryClaimStatusResponse): Uint8Array;
            toProtoMsg(message: _198.QueryClaimStatusResponse): _198.QueryClaimStatusResponseProtoMsg;
        };
        ClaimMetadata: {
            typeUrl: string;
            encode(message: _198.ClaimMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.ClaimMetadata;
            fromPartial(object: Partial<_198.ClaimMetadata>): _198.ClaimMetadata;
            fromAmino(object: _198.ClaimMetadataAmino): _198.ClaimMetadata;
            toAmino(message: _198.ClaimMetadata): _198.ClaimMetadataAmino;
            fromAminoMsg(object: _198.ClaimMetadataAminoMsg): _198.ClaimMetadata;
            fromProtoMsg(message: _198.ClaimMetadataProtoMsg): _198.ClaimMetadata;
            toProto(message: _198.ClaimMetadata): Uint8Array;
            toProtoMsg(message: _198.ClaimMetadata): _198.ClaimMetadataProtoMsg;
        };
        QueryClaimMetadataRequest: {
            typeUrl: string;
            encode(_: _198.QueryClaimMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryClaimMetadataRequest;
            fromPartial(_: Partial<_198.QueryClaimMetadataRequest>): _198.QueryClaimMetadataRequest;
            fromAmino(_: _198.QueryClaimMetadataRequestAmino): _198.QueryClaimMetadataRequest;
            toAmino(_: _198.QueryClaimMetadataRequest): _198.QueryClaimMetadataRequestAmino;
            fromAminoMsg(object: _198.QueryClaimMetadataRequestAminoMsg): _198.QueryClaimMetadataRequest;
            fromProtoMsg(message: _198.QueryClaimMetadataRequestProtoMsg): _198.QueryClaimMetadataRequest;
            toProto(message: _198.QueryClaimMetadataRequest): Uint8Array;
            toProtoMsg(message: _198.QueryClaimMetadataRequest): _198.QueryClaimMetadataRequestProtoMsg;
        };
        QueryClaimMetadataResponse: {
            typeUrl: string;
            encode(message: _198.QueryClaimMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryClaimMetadataResponse;
            fromPartial(object: Partial<_198.QueryClaimMetadataResponse>): _198.QueryClaimMetadataResponse;
            fromAmino(object: _198.QueryClaimMetadataResponseAmino): _198.QueryClaimMetadataResponse;
            toAmino(message: _198.QueryClaimMetadataResponse): _198.QueryClaimMetadataResponseAmino;
            fromAminoMsg(object: _198.QueryClaimMetadataResponseAminoMsg): _198.QueryClaimMetadataResponse;
            fromProtoMsg(message: _198.QueryClaimMetadataResponseProtoMsg): _198.QueryClaimMetadataResponse;
            toProto(message: _198.QueryClaimMetadataResponse): Uint8Array;
            toProtoMsg(message: _198.QueryClaimMetadataResponse): _198.QueryClaimMetadataResponseProtoMsg;
        };
        QueryDistributorAccountBalanceRequest: {
            typeUrl: string;
            encode(message: _198.QueryDistributorAccountBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryDistributorAccountBalanceRequest;
            fromPartial(object: Partial<_198.QueryDistributorAccountBalanceRequest>): _198.QueryDistributorAccountBalanceRequest;
            fromAmino(object: _198.QueryDistributorAccountBalanceRequestAmino): _198.QueryDistributorAccountBalanceRequest;
            toAmino(message: _198.QueryDistributorAccountBalanceRequest): _198.QueryDistributorAccountBalanceRequestAmino;
            fromAminoMsg(object: _198.QueryDistributorAccountBalanceRequestAminoMsg): _198.QueryDistributorAccountBalanceRequest;
            fromProtoMsg(message: _198.QueryDistributorAccountBalanceRequestProtoMsg): _198.QueryDistributorAccountBalanceRequest;
            toProto(message: _198.QueryDistributorAccountBalanceRequest): Uint8Array;
            toProtoMsg(message: _198.QueryDistributorAccountBalanceRequest): _198.QueryDistributorAccountBalanceRequestProtoMsg;
        };
        QueryDistributorAccountBalanceResponse: {
            typeUrl: string;
            encode(message: _198.QueryDistributorAccountBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryDistributorAccountBalanceResponse;
            fromPartial(object: Partial<_198.QueryDistributorAccountBalanceResponse>): _198.QueryDistributorAccountBalanceResponse;
            fromAmino(object: _198.QueryDistributorAccountBalanceResponseAmino): _198.QueryDistributorAccountBalanceResponse;
            toAmino(message: _198.QueryDistributorAccountBalanceResponse): _198.QueryDistributorAccountBalanceResponseAmino;
            fromAminoMsg(object: _198.QueryDistributorAccountBalanceResponseAminoMsg): _198.QueryDistributorAccountBalanceResponse;
            fromProtoMsg(message: _198.QueryDistributorAccountBalanceResponseProtoMsg): _198.QueryDistributorAccountBalanceResponse;
            toProto(message: _198.QueryDistributorAccountBalanceResponse): Uint8Array;
            toProtoMsg(message: _198.QueryDistributorAccountBalanceResponse): _198.QueryDistributorAccountBalanceResponseProtoMsg;
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
        QueryClaimRecordRequest: {
            typeUrl: string;
            encode(message: _198.QueryClaimRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryClaimRecordRequest;
            fromPartial(object: Partial<_198.QueryClaimRecordRequest>): _198.QueryClaimRecordRequest;
            fromAmino(object: _198.QueryClaimRecordRequestAmino): _198.QueryClaimRecordRequest;
            toAmino(message: _198.QueryClaimRecordRequest): _198.QueryClaimRecordRequestAmino;
            fromAminoMsg(object: _198.QueryClaimRecordRequestAminoMsg): _198.QueryClaimRecordRequest;
            fromProtoMsg(message: _198.QueryClaimRecordRequestProtoMsg): _198.QueryClaimRecordRequest;
            toProto(message: _198.QueryClaimRecordRequest): Uint8Array;
            toProtoMsg(message: _198.QueryClaimRecordRequest): _198.QueryClaimRecordRequestProtoMsg;
        };
        QueryClaimRecordResponse: {
            typeUrl: string;
            encode(message: _198.QueryClaimRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryClaimRecordResponse;
            fromPartial(object: Partial<_198.QueryClaimRecordResponse>): _198.QueryClaimRecordResponse;
            fromAmino(object: _198.QueryClaimRecordResponseAmino): _198.QueryClaimRecordResponse;
            toAmino(message: _198.QueryClaimRecordResponse): _198.QueryClaimRecordResponseAmino;
            fromAminoMsg(object: _198.QueryClaimRecordResponseAminoMsg): _198.QueryClaimRecordResponse;
            fromProtoMsg(message: _198.QueryClaimRecordResponseProtoMsg): _198.QueryClaimRecordResponse;
            toProto(message: _198.QueryClaimRecordResponse): Uint8Array;
            toProtoMsg(message: _198.QueryClaimRecordResponse): _198.QueryClaimRecordResponseProtoMsg;
        };
        QueryClaimableForActionRequest: {
            typeUrl: string;
            encode(message: _198.QueryClaimableForActionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryClaimableForActionRequest;
            fromPartial(object: Partial<_198.QueryClaimableForActionRequest>): _198.QueryClaimableForActionRequest;
            fromAmino(object: _198.QueryClaimableForActionRequestAmino): _198.QueryClaimableForActionRequest;
            toAmino(message: _198.QueryClaimableForActionRequest): _198.QueryClaimableForActionRequestAmino;
            fromAminoMsg(object: _198.QueryClaimableForActionRequestAminoMsg): _198.QueryClaimableForActionRequest;
            fromProtoMsg(message: _198.QueryClaimableForActionRequestProtoMsg): _198.QueryClaimableForActionRequest;
            toProto(message: _198.QueryClaimableForActionRequest): Uint8Array;
            toProtoMsg(message: _198.QueryClaimableForActionRequest): _198.QueryClaimableForActionRequestProtoMsg;
        };
        QueryClaimableForActionResponse: {
            typeUrl: string;
            encode(message: _198.QueryClaimableForActionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryClaimableForActionResponse;
            fromPartial(object: Partial<_198.QueryClaimableForActionResponse>): _198.QueryClaimableForActionResponse;
            fromAmino(object: _198.QueryClaimableForActionResponseAmino): _198.QueryClaimableForActionResponse;
            toAmino(message: _198.QueryClaimableForActionResponse): _198.QueryClaimableForActionResponseAmino;
            fromAminoMsg(object: _198.QueryClaimableForActionResponseAminoMsg): _198.QueryClaimableForActionResponse;
            fromProtoMsg(message: _198.QueryClaimableForActionResponseProtoMsg): _198.QueryClaimableForActionResponse;
            toProto(message: _198.QueryClaimableForActionResponse): Uint8Array;
            toProtoMsg(message: _198.QueryClaimableForActionResponse): _198.QueryClaimableForActionResponseProtoMsg;
        };
        QueryTotalClaimableRequest: {
            typeUrl: string;
            encode(message: _198.QueryTotalClaimableRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryTotalClaimableRequest;
            fromPartial(object: Partial<_198.QueryTotalClaimableRequest>): _198.QueryTotalClaimableRequest;
            fromAmino(object: _198.QueryTotalClaimableRequestAmino): _198.QueryTotalClaimableRequest;
            toAmino(message: _198.QueryTotalClaimableRequest): _198.QueryTotalClaimableRequestAmino;
            fromAminoMsg(object: _198.QueryTotalClaimableRequestAminoMsg): _198.QueryTotalClaimableRequest;
            fromProtoMsg(message: _198.QueryTotalClaimableRequestProtoMsg): _198.QueryTotalClaimableRequest;
            toProto(message: _198.QueryTotalClaimableRequest): Uint8Array;
            toProtoMsg(message: _198.QueryTotalClaimableRequest): _198.QueryTotalClaimableRequestProtoMsg;
        };
        QueryTotalClaimableResponse: {
            typeUrl: string;
            encode(message: _198.QueryTotalClaimableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryTotalClaimableResponse;
            fromPartial(object: Partial<_198.QueryTotalClaimableResponse>): _198.QueryTotalClaimableResponse;
            fromAmino(object: _198.QueryTotalClaimableResponseAmino): _198.QueryTotalClaimableResponse;
            toAmino(message: _198.QueryTotalClaimableResponse): _198.QueryTotalClaimableResponseAmino;
            fromAminoMsg(object: _198.QueryTotalClaimableResponseAminoMsg): _198.QueryTotalClaimableResponse;
            fromProtoMsg(message: _198.QueryTotalClaimableResponseProtoMsg): _198.QueryTotalClaimableResponse;
            toProto(message: _198.QueryTotalClaimableResponse): Uint8Array;
            toProtoMsg(message: _198.QueryTotalClaimableResponse): _198.QueryTotalClaimableResponseProtoMsg;
        };
        QueryUserVestingsRequest: {
            typeUrl: string;
            encode(message: _198.QueryUserVestingsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryUserVestingsRequest;
            fromPartial(object: Partial<_198.QueryUserVestingsRequest>): _198.QueryUserVestingsRequest;
            fromAmino(object: _198.QueryUserVestingsRequestAmino): _198.QueryUserVestingsRequest;
            toAmino(message: _198.QueryUserVestingsRequest): _198.QueryUserVestingsRequestAmino;
            fromAminoMsg(object: _198.QueryUserVestingsRequestAminoMsg): _198.QueryUserVestingsRequest;
            fromProtoMsg(message: _198.QueryUserVestingsRequestProtoMsg): _198.QueryUserVestingsRequest;
            toProto(message: _198.QueryUserVestingsRequest): Uint8Array;
            toProtoMsg(message: _198.QueryUserVestingsRequest): _198.QueryUserVestingsRequestProtoMsg;
        };
        QueryUserVestingsResponse: {
            typeUrl: string;
            encode(message: _198.QueryUserVestingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryUserVestingsResponse;
            fromPartial(object: Partial<_198.QueryUserVestingsResponse>): _198.QueryUserVestingsResponse;
            fromAmino(object: _198.QueryUserVestingsResponseAmino): _198.QueryUserVestingsResponse;
            toAmino(message: _198.QueryUserVestingsResponse): _198.QueryUserVestingsResponseAmino;
            fromAminoMsg(object: _198.QueryUserVestingsResponseAminoMsg): _198.QueryUserVestingsResponse;
            fromProtoMsg(message: _198.QueryUserVestingsResponseProtoMsg): _198.QueryUserVestingsResponse;
            toProto(message: _198.QueryUserVestingsResponse): Uint8Array;
            toProtoMsg(message: _198.QueryUserVestingsResponse): _198.QueryUserVestingsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _197.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.Params;
            fromPartial(object: Partial<_197.Params>): _197.Params;
            fromAmino(object: _197.ParamsAmino): _197.Params;
            toAmino(message: _197.Params): _197.ParamsAmino;
            fromAminoMsg(object: _197.ParamsAminoMsg): _197.Params;
            fromProtoMsg(message: _197.ParamsProtoMsg): _197.Params;
            toProto(message: _197.Params): Uint8Array;
            toProtoMsg(message: _197.Params): _197.ParamsProtoMsg;
        };
        Airdrop: {
            typeUrl: string;
            encode(message: _197.Airdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.Airdrop;
            fromPartial(object: Partial<_197.Airdrop>): _197.Airdrop;
            fromAmino(object: _197.AirdropAmino): _197.Airdrop;
            toAmino(message: _197.Airdrop): _197.AirdropAmino;
            fromAminoMsg(object: _197.AirdropAminoMsg): _197.Airdrop;
            fromProtoMsg(message: _197.AirdropProtoMsg): _197.Airdrop;
            toProto(message: _197.Airdrop): Uint8Array;
            toProtoMsg(message: _197.Airdrop): _197.AirdropProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _196.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.GenesisState;
            fromPartial(object: Partial<_196.GenesisState>): _196.GenesisState;
            fromAmino(object: _196.GenesisStateAmino): _196.GenesisState;
            toAmino(message: _196.GenesisState): _196.GenesisStateAmino;
            fromAminoMsg(object: _196.GenesisStateAminoMsg): _196.GenesisState;
            fromProtoMsg(message: _196.GenesisStateProtoMsg): _196.GenesisState;
            toProto(message: _196.GenesisState): Uint8Array;
            toProtoMsg(message: _196.GenesisState): _196.GenesisStateProtoMsg;
        };
        actionFromJSON(object: any): _195.Action;
        actionToJSON(object: _195.Action): string;
        Action: typeof _195.Action;
        ActionSDKType: typeof _195.Action;
        ActionAmino: typeof _195.Action;
        ClaimRecord: {
            typeUrl: string;
            encode(message: _195.ClaimRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _195.ClaimRecord;
            fromPartial(object: Partial<_195.ClaimRecord>): _195.ClaimRecord;
            fromAmino(object: _195.ClaimRecordAmino): _195.ClaimRecord;
            toAmino(message: _195.ClaimRecord): _195.ClaimRecordAmino;
            fromAminoMsg(object: _195.ClaimRecordAminoMsg): _195.ClaimRecord;
            fromProtoMsg(message: _195.ClaimRecordProtoMsg): _195.ClaimRecord;
            toProto(message: _195.ClaimRecord): Uint8Array;
            toProtoMsg(message: _195.ClaimRecord): _195.ClaimRecordProtoMsg;
        };
    };
    const epochs: {
        QueryClientImpl: typeof _392.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            epochInfos(request?: _201.QueryEpochsInfoRequest): Promise<_201.QueryEpochsInfoResponse>;
            currentEpoch(request: _201.QueryCurrentEpochRequest): Promise<_201.QueryCurrentEpochResponse>;
            epochInfo(request: _201.QueryEpochInfoRequest): Promise<_201.QueryEpochInfoResponse>;
        };
        QueryEpochsInfoRequest: {
            typeUrl: string;
            encode(message: _201.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.QueryEpochsInfoRequest;
            fromPartial(object: Partial<_201.QueryEpochsInfoRequest>): _201.QueryEpochsInfoRequest;
            fromAmino(object: _201.QueryEpochsInfoRequestAmino): _201.QueryEpochsInfoRequest;
            toAmino(message: _201.QueryEpochsInfoRequest): _201.QueryEpochsInfoRequestAmino;
            fromAminoMsg(object: _201.QueryEpochsInfoRequestAminoMsg): _201.QueryEpochsInfoRequest;
            fromProtoMsg(message: _201.QueryEpochsInfoRequestProtoMsg): _201.QueryEpochsInfoRequest;
            toProto(message: _201.QueryEpochsInfoRequest): Uint8Array;
            toProtoMsg(message: _201.QueryEpochsInfoRequest): _201.QueryEpochsInfoRequestProtoMsg;
        };
        QueryEpochsInfoResponse: {
            typeUrl: string;
            encode(message: _201.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.QueryEpochsInfoResponse;
            fromPartial(object: Partial<_201.QueryEpochsInfoResponse>): _201.QueryEpochsInfoResponse;
            fromAmino(object: _201.QueryEpochsInfoResponseAmino): _201.QueryEpochsInfoResponse;
            toAmino(message: _201.QueryEpochsInfoResponse): _201.QueryEpochsInfoResponseAmino;
            fromAminoMsg(object: _201.QueryEpochsInfoResponseAminoMsg): _201.QueryEpochsInfoResponse;
            fromProtoMsg(message: _201.QueryEpochsInfoResponseProtoMsg): _201.QueryEpochsInfoResponse;
            toProto(message: _201.QueryEpochsInfoResponse): Uint8Array;
            toProtoMsg(message: _201.QueryEpochsInfoResponse): _201.QueryEpochsInfoResponseProtoMsg;
        };
        QueryCurrentEpochRequest: {
            typeUrl: string;
            encode(message: _201.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.QueryCurrentEpochRequest;
            fromPartial(object: Partial<_201.QueryCurrentEpochRequest>): _201.QueryCurrentEpochRequest;
            fromAmino(object: _201.QueryCurrentEpochRequestAmino): _201.QueryCurrentEpochRequest;
            toAmino(message: _201.QueryCurrentEpochRequest): _201.QueryCurrentEpochRequestAmino;
            fromAminoMsg(object: _201.QueryCurrentEpochRequestAminoMsg): _201.QueryCurrentEpochRequest;
            fromProtoMsg(message: _201.QueryCurrentEpochRequestProtoMsg): _201.QueryCurrentEpochRequest;
            toProto(message: _201.QueryCurrentEpochRequest): Uint8Array;
            toProtoMsg(message: _201.QueryCurrentEpochRequest): _201.QueryCurrentEpochRequestProtoMsg;
        };
        QueryCurrentEpochResponse: {
            typeUrl: string;
            encode(message: _201.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.QueryCurrentEpochResponse;
            fromPartial(object: Partial<_201.QueryCurrentEpochResponse>): _201.QueryCurrentEpochResponse;
            fromAmino(object: _201.QueryCurrentEpochResponseAmino): _201.QueryCurrentEpochResponse;
            toAmino(message: _201.QueryCurrentEpochResponse): _201.QueryCurrentEpochResponseAmino;
            fromAminoMsg(object: _201.QueryCurrentEpochResponseAminoMsg): _201.QueryCurrentEpochResponse;
            fromProtoMsg(message: _201.QueryCurrentEpochResponseProtoMsg): _201.QueryCurrentEpochResponse;
            toProto(message: _201.QueryCurrentEpochResponse): Uint8Array;
            toProtoMsg(message: _201.QueryCurrentEpochResponse): _201.QueryCurrentEpochResponseProtoMsg;
        };
        QueryEpochInfoRequest: {
            typeUrl: string;
            encode(message: _201.QueryEpochInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.QueryEpochInfoRequest;
            fromPartial(object: Partial<_201.QueryEpochInfoRequest>): _201.QueryEpochInfoRequest;
            fromAmino(object: _201.QueryEpochInfoRequestAmino): _201.QueryEpochInfoRequest;
            toAmino(message: _201.QueryEpochInfoRequest): _201.QueryEpochInfoRequestAmino;
            fromAminoMsg(object: _201.QueryEpochInfoRequestAminoMsg): _201.QueryEpochInfoRequest;
            fromProtoMsg(message: _201.QueryEpochInfoRequestProtoMsg): _201.QueryEpochInfoRequest;
            toProto(message: _201.QueryEpochInfoRequest): Uint8Array;
            toProtoMsg(message: _201.QueryEpochInfoRequest): _201.QueryEpochInfoRequestProtoMsg;
        };
        QueryEpochInfoResponse: {
            typeUrl: string;
            encode(message: _201.QueryEpochInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.QueryEpochInfoResponse;
            fromPartial(object: Partial<_201.QueryEpochInfoResponse>): _201.QueryEpochInfoResponse;
            fromAmino(object: _201.QueryEpochInfoResponseAmino): _201.QueryEpochInfoResponse;
            toAmino(message: _201.QueryEpochInfoResponse): _201.QueryEpochInfoResponseAmino;
            fromAminoMsg(object: _201.QueryEpochInfoResponseAminoMsg): _201.QueryEpochInfoResponse;
            fromProtoMsg(message: _201.QueryEpochInfoResponseProtoMsg): _201.QueryEpochInfoResponse;
            toProto(message: _201.QueryEpochInfoResponse): Uint8Array;
            toProtoMsg(message: _201.QueryEpochInfoResponse): _201.QueryEpochInfoResponseProtoMsg;
        };
        EpochInfo: {
            typeUrl: string;
            encode(message: _200.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.EpochInfo;
            fromPartial(object: Partial<_200.EpochInfo>): _200.EpochInfo;
            fromAmino(object: _200.EpochInfoAmino): _200.EpochInfo;
            toAmino(message: _200.EpochInfo): _200.EpochInfoAmino;
            fromAminoMsg(object: _200.EpochInfoAminoMsg): _200.EpochInfo;
            fromProtoMsg(message: _200.EpochInfoProtoMsg): _200.EpochInfo;
            toProto(message: _200.EpochInfo): Uint8Array;
            toProtoMsg(message: _200.EpochInfo): _200.EpochInfoProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _200.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.GenesisState;
            fromPartial(object: Partial<_200.GenesisState>): _200.GenesisState;
            fromAmino(object: _200.GenesisStateAmino): _200.GenesisState;
            toAmino(message: _200.GenesisState): _200.GenesisStateAmino;
            fromAminoMsg(object: _200.GenesisStateAminoMsg): _200.GenesisState;
            fromProtoMsg(message: _200.GenesisStateProtoMsg): _200.GenesisState;
            toProto(message: _200.GenesisState): Uint8Array;
            toProtoMsg(message: _200.GenesisState): _200.GenesisStateProtoMsg;
        };
    };
    const icacallbacks: {
        QueryClientImpl: typeof _393.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _206.QueryParamsRequest): Promise<_206.QueryParamsResponse>;
            callbackData(request: _206.QueryGetCallbackDataRequest): Promise<_206.QueryGetCallbackDataResponse>;
            callbackDataAll(request?: _206.QueryAllCallbackDataRequest): Promise<_206.QueryAllCallbackDataResponse>;
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
        QueryGetCallbackDataRequest: {
            typeUrl: string;
            encode(message: _206.QueryGetCallbackDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryGetCallbackDataRequest;
            fromPartial(object: Partial<_206.QueryGetCallbackDataRequest>): _206.QueryGetCallbackDataRequest;
            fromAmino(object: _206.QueryGetCallbackDataRequestAmino): _206.QueryGetCallbackDataRequest;
            toAmino(message: _206.QueryGetCallbackDataRequest): _206.QueryGetCallbackDataRequestAmino;
            fromAminoMsg(object: _206.QueryGetCallbackDataRequestAminoMsg): _206.QueryGetCallbackDataRequest;
            fromProtoMsg(message: _206.QueryGetCallbackDataRequestProtoMsg): _206.QueryGetCallbackDataRequest;
            toProto(message: _206.QueryGetCallbackDataRequest): Uint8Array;
            toProtoMsg(message: _206.QueryGetCallbackDataRequest): _206.QueryGetCallbackDataRequestProtoMsg;
        };
        QueryGetCallbackDataResponse: {
            typeUrl: string;
            encode(message: _206.QueryGetCallbackDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryGetCallbackDataResponse;
            fromPartial(object: Partial<_206.QueryGetCallbackDataResponse>): _206.QueryGetCallbackDataResponse;
            fromAmino(object: _206.QueryGetCallbackDataResponseAmino): _206.QueryGetCallbackDataResponse;
            toAmino(message: _206.QueryGetCallbackDataResponse): _206.QueryGetCallbackDataResponseAmino;
            fromAminoMsg(object: _206.QueryGetCallbackDataResponseAminoMsg): _206.QueryGetCallbackDataResponse;
            fromProtoMsg(message: _206.QueryGetCallbackDataResponseProtoMsg): _206.QueryGetCallbackDataResponse;
            toProto(message: _206.QueryGetCallbackDataResponse): Uint8Array;
            toProtoMsg(message: _206.QueryGetCallbackDataResponse): _206.QueryGetCallbackDataResponseProtoMsg;
        };
        QueryAllCallbackDataRequest: {
            typeUrl: string;
            encode(message: _206.QueryAllCallbackDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryAllCallbackDataRequest;
            fromPartial(object: Partial<_206.QueryAllCallbackDataRequest>): _206.QueryAllCallbackDataRequest;
            fromAmino(object: _206.QueryAllCallbackDataRequestAmino): _206.QueryAllCallbackDataRequest;
            toAmino(message: _206.QueryAllCallbackDataRequest): _206.QueryAllCallbackDataRequestAmino;
            fromAminoMsg(object: _206.QueryAllCallbackDataRequestAminoMsg): _206.QueryAllCallbackDataRequest;
            fromProtoMsg(message: _206.QueryAllCallbackDataRequestProtoMsg): _206.QueryAllCallbackDataRequest;
            toProto(message: _206.QueryAllCallbackDataRequest): Uint8Array;
            toProtoMsg(message: _206.QueryAllCallbackDataRequest): _206.QueryAllCallbackDataRequestProtoMsg;
        };
        QueryAllCallbackDataResponse: {
            typeUrl: string;
            encode(message: _206.QueryAllCallbackDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryAllCallbackDataResponse;
            fromPartial(object: Partial<_206.QueryAllCallbackDataResponse>): _206.QueryAllCallbackDataResponse;
            fromAmino(object: _206.QueryAllCallbackDataResponseAmino): _206.QueryAllCallbackDataResponse;
            toAmino(message: _206.QueryAllCallbackDataResponse): _206.QueryAllCallbackDataResponseAmino;
            fromAminoMsg(object: _206.QueryAllCallbackDataResponseAminoMsg): _206.QueryAllCallbackDataResponse;
            fromProtoMsg(message: _206.QueryAllCallbackDataResponseProtoMsg): _206.QueryAllCallbackDataResponse;
            toProto(message: _206.QueryAllCallbackDataResponse): Uint8Array;
            toProtoMsg(message: _206.QueryAllCallbackDataResponse): _206.QueryAllCallbackDataResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _205.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.Params;
            fromPartial(_: Partial<_205.Params>): _205.Params;
            fromAmino(_: _205.ParamsAmino): _205.Params;
            toAmino(_: _205.Params): _205.ParamsAmino;
            fromAminoMsg(object: _205.ParamsAminoMsg): _205.Params;
            fromProtoMsg(message: _205.ParamsProtoMsg): _205.Params;
            toProto(message: _205.Params): Uint8Array;
            toProtoMsg(message: _205.Params): _205.ParamsProtoMsg;
        };
        IcacallbacksPacketData: {
            typeUrl: string;
            encode(message: _204.IcacallbacksPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.IcacallbacksPacketData;
            fromPartial(object: Partial<_204.IcacallbacksPacketData>): _204.IcacallbacksPacketData;
            fromAmino(object: _204.IcacallbacksPacketDataAmino): _204.IcacallbacksPacketData;
            toAmino(message: _204.IcacallbacksPacketData): _204.IcacallbacksPacketDataAmino;
            fromAminoMsg(object: _204.IcacallbacksPacketDataAminoMsg): _204.IcacallbacksPacketData;
            fromProtoMsg(message: _204.IcacallbacksPacketDataProtoMsg): _204.IcacallbacksPacketData;
            toProto(message: _204.IcacallbacksPacketData): Uint8Array;
            toProtoMsg(message: _204.IcacallbacksPacketData): _204.IcacallbacksPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _204.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.NoData;
            fromPartial(_: Partial<_204.NoData>): _204.NoData;
            fromAmino(_: _204.NoDataAmino): _204.NoData;
            toAmino(_: _204.NoData): _204.NoDataAmino;
            fromAminoMsg(object: _204.NoDataAminoMsg): _204.NoData;
            fromProtoMsg(message: _204.NoDataProtoMsg): _204.NoData;
            toProto(message: _204.NoData): Uint8Array;
            toProtoMsg(message: _204.NoData): _204.NoDataProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _203.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.GenesisState;
            fromPartial(object: Partial<_203.GenesisState>): _203.GenesisState;
            fromAmino(object: _203.GenesisStateAmino): _203.GenesisState;
            toAmino(message: _203.GenesisState): _203.GenesisStateAmino;
            fromAminoMsg(object: _203.GenesisStateAminoMsg): _203.GenesisState;
            fromProtoMsg(message: _203.GenesisStateProtoMsg): _203.GenesisState;
            toProto(message: _203.GenesisState): Uint8Array;
            toProtoMsg(message: _203.GenesisState): _203.GenesisStateProtoMsg;
        };
        CallbackData: {
            typeUrl: string;
            encode(message: _202.CallbackData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.CallbackData;
            fromPartial(object: Partial<_202.CallbackData>): _202.CallbackData;
            fromAmino(object: _202.CallbackDataAmino): _202.CallbackData;
            toAmino(message: _202.CallbackData): _202.CallbackDataAmino;
            fromAminoMsg(object: _202.CallbackDataAminoMsg): _202.CallbackData;
            fromProtoMsg(message: _202.CallbackDataProtoMsg): _202.CallbackData;
            toProto(message: _202.CallbackData): Uint8Array;
            toProtoMsg(message: _202.CallbackData): _202.CallbackDataProtoMsg;
        };
    };
    const icaoracle: {
        MsgClientImpl: typeof _405.MsgClientImpl;
        QueryClientImpl: typeof _394.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            oracle(request: _212.QueryOracleRequest): Promise<_212.QueryOracleResponse>;
            allOracles(request?: _212.QueryAllOraclesRequest): Promise<_212.QueryAllOraclesResponse>;
            activeOracles(request: _212.QueryActiveOraclesRequest): Promise<_212.QueryActiveOraclesResponse>;
            metrics(request: _212.QueryMetricsRequest): Promise<_212.QueryMetricsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                addOracle(value: _213.MsgAddOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                instantiateOracle(value: _213.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreOracleICA(value: _213.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                toggleOracle(value: _213.MsgToggleOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeOracle(value: _213.MsgRemoveOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                addOracle(value: _213.MsgAddOracle): {
                    typeUrl: string;
                    value: _213.MsgAddOracle;
                };
                instantiateOracle(value: _213.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: _213.MsgInstantiateOracle;
                };
                restoreOracleICA(value: _213.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: _213.MsgRestoreOracleICA;
                };
                toggleOracle(value: _213.MsgToggleOracle): {
                    typeUrl: string;
                    value: _213.MsgToggleOracle;
                };
                removeOracle(value: _213.MsgRemoveOracle): {
                    typeUrl: string;
                    value: _213.MsgRemoveOracle;
                };
            };
            fromPartial: {
                addOracle(value: _213.MsgAddOracle): {
                    typeUrl: string;
                    value: _213.MsgAddOracle;
                };
                instantiateOracle(value: _213.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: _213.MsgInstantiateOracle;
                };
                restoreOracleICA(value: _213.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: _213.MsgRestoreOracleICA;
                };
                toggleOracle(value: _213.MsgToggleOracle): {
                    typeUrl: string;
                    value: _213.MsgToggleOracle;
                };
                removeOracle(value: _213.MsgRemoveOracle): {
                    typeUrl: string;
                    value: _213.MsgRemoveOracle;
                };
            };
        };
        AminoConverter: {
            "/stride.icaoracle.MsgAddOracle": {
                aminoType: string;
                toAmino: (message: _213.MsgAddOracle) => _213.MsgAddOracleAmino;
                fromAmino: (object: _213.MsgAddOracleAmino) => _213.MsgAddOracle;
            };
            "/stride.icaoracle.MsgInstantiateOracle": {
                aminoType: string;
                toAmino: (message: _213.MsgInstantiateOracle) => _213.MsgInstantiateOracleAmino;
                fromAmino: (object: _213.MsgInstantiateOracleAmino) => _213.MsgInstantiateOracle;
            };
            "/stride.icaoracle.MsgRestoreOracleICA": {
                aminoType: string;
                toAmino: (message: _213.MsgRestoreOracleICA) => _213.MsgRestoreOracleICAAmino;
                fromAmino: (object: _213.MsgRestoreOracleICAAmino) => _213.MsgRestoreOracleICA;
            };
            "/stride.icaoracle.MsgToggleOracle": {
                aminoType: string;
                toAmino: (message: _213.MsgToggleOracle) => _213.MsgToggleOracleAmino;
                fromAmino: (object: _213.MsgToggleOracleAmino) => _213.MsgToggleOracle;
            };
            "/stride.icaoracle.MsgRemoveOracle": {
                aminoType: string;
                toAmino: (message: _213.MsgRemoveOracle) => _213.MsgRemoveOracleAmino;
                fromAmino: (object: _213.MsgRemoveOracleAmino) => _213.MsgRemoveOracle;
            };
        };
        MsgAddOracle: {
            typeUrl: string;
            encode(message: _213.MsgAddOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgAddOracle;
            fromPartial(object: Partial<_213.MsgAddOracle>): _213.MsgAddOracle;
            fromAmino(object: _213.MsgAddOracleAmino): _213.MsgAddOracle;
            toAmino(message: _213.MsgAddOracle): _213.MsgAddOracleAmino;
            fromAminoMsg(object: _213.MsgAddOracleAminoMsg): _213.MsgAddOracle;
            toAminoMsg(message: _213.MsgAddOracle): _213.MsgAddOracleAminoMsg;
            fromProtoMsg(message: _213.MsgAddOracleProtoMsg): _213.MsgAddOracle;
            toProto(message: _213.MsgAddOracle): Uint8Array;
            toProtoMsg(message: _213.MsgAddOracle): _213.MsgAddOracleProtoMsg;
        };
        MsgAddOracleResponse: {
            typeUrl: string;
            encode(_: _213.MsgAddOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgAddOracleResponse;
            fromPartial(_: Partial<_213.MsgAddOracleResponse>): _213.MsgAddOracleResponse;
            fromAmino(_: _213.MsgAddOracleResponseAmino): _213.MsgAddOracleResponse;
            toAmino(_: _213.MsgAddOracleResponse): _213.MsgAddOracleResponseAmino;
            fromAminoMsg(object: _213.MsgAddOracleResponseAminoMsg): _213.MsgAddOracleResponse;
            fromProtoMsg(message: _213.MsgAddOracleResponseProtoMsg): _213.MsgAddOracleResponse;
            toProto(message: _213.MsgAddOracleResponse): Uint8Array;
            toProtoMsg(message: _213.MsgAddOracleResponse): _213.MsgAddOracleResponseProtoMsg;
        };
        MsgInstantiateOracle: {
            typeUrl: string;
            encode(message: _213.MsgInstantiateOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgInstantiateOracle;
            fromPartial(object: Partial<_213.MsgInstantiateOracle>): _213.MsgInstantiateOracle;
            fromAmino(object: _213.MsgInstantiateOracleAmino): _213.MsgInstantiateOracle;
            toAmino(message: _213.MsgInstantiateOracle): _213.MsgInstantiateOracleAmino;
            fromAminoMsg(object: _213.MsgInstantiateOracleAminoMsg): _213.MsgInstantiateOracle;
            toAminoMsg(message: _213.MsgInstantiateOracle): _213.MsgInstantiateOracleAminoMsg;
            fromProtoMsg(message: _213.MsgInstantiateOracleProtoMsg): _213.MsgInstantiateOracle;
            toProto(message: _213.MsgInstantiateOracle): Uint8Array;
            toProtoMsg(message: _213.MsgInstantiateOracle): _213.MsgInstantiateOracleProtoMsg;
        };
        MsgInstantiateOracleResponse: {
            typeUrl: string;
            encode(_: _213.MsgInstantiateOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgInstantiateOracleResponse;
            fromPartial(_: Partial<_213.MsgInstantiateOracleResponse>): _213.MsgInstantiateOracleResponse;
            fromAmino(_: _213.MsgInstantiateOracleResponseAmino): _213.MsgInstantiateOracleResponse;
            toAmino(_: _213.MsgInstantiateOracleResponse): _213.MsgInstantiateOracleResponseAmino;
            fromAminoMsg(object: _213.MsgInstantiateOracleResponseAminoMsg): _213.MsgInstantiateOracleResponse;
            fromProtoMsg(message: _213.MsgInstantiateOracleResponseProtoMsg): _213.MsgInstantiateOracleResponse;
            toProto(message: _213.MsgInstantiateOracleResponse): Uint8Array;
            toProtoMsg(message: _213.MsgInstantiateOracleResponse): _213.MsgInstantiateOracleResponseProtoMsg;
        };
        MsgRestoreOracleICA: {
            typeUrl: string;
            encode(message: _213.MsgRestoreOracleICA, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgRestoreOracleICA;
            fromPartial(object: Partial<_213.MsgRestoreOracleICA>): _213.MsgRestoreOracleICA;
            fromAmino(object: _213.MsgRestoreOracleICAAmino): _213.MsgRestoreOracleICA;
            toAmino(message: _213.MsgRestoreOracleICA): _213.MsgRestoreOracleICAAmino;
            fromAminoMsg(object: _213.MsgRestoreOracleICAAminoMsg): _213.MsgRestoreOracleICA;
            toAminoMsg(message: _213.MsgRestoreOracleICA): _213.MsgRestoreOracleICAAminoMsg;
            fromProtoMsg(message: _213.MsgRestoreOracleICAProtoMsg): _213.MsgRestoreOracleICA;
            toProto(message: _213.MsgRestoreOracleICA): Uint8Array;
            toProtoMsg(message: _213.MsgRestoreOracleICA): _213.MsgRestoreOracleICAProtoMsg;
        };
        MsgRestoreOracleICAResponse: {
            typeUrl: string;
            encode(_: _213.MsgRestoreOracleICAResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgRestoreOracleICAResponse;
            fromPartial(_: Partial<_213.MsgRestoreOracleICAResponse>): _213.MsgRestoreOracleICAResponse;
            fromAmino(_: _213.MsgRestoreOracleICAResponseAmino): _213.MsgRestoreOracleICAResponse;
            toAmino(_: _213.MsgRestoreOracleICAResponse): _213.MsgRestoreOracleICAResponseAmino;
            fromAminoMsg(object: _213.MsgRestoreOracleICAResponseAminoMsg): _213.MsgRestoreOracleICAResponse;
            fromProtoMsg(message: _213.MsgRestoreOracleICAResponseProtoMsg): _213.MsgRestoreOracleICAResponse;
            toProto(message: _213.MsgRestoreOracleICAResponse): Uint8Array;
            toProtoMsg(message: _213.MsgRestoreOracleICAResponse): _213.MsgRestoreOracleICAResponseProtoMsg;
        };
        MsgToggleOracle: {
            typeUrl: string;
            encode(message: _213.MsgToggleOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgToggleOracle;
            fromPartial(object: Partial<_213.MsgToggleOracle>): _213.MsgToggleOracle;
            fromAmino(object: _213.MsgToggleOracleAmino): _213.MsgToggleOracle;
            toAmino(message: _213.MsgToggleOracle): _213.MsgToggleOracleAmino;
            fromAminoMsg(object: _213.MsgToggleOracleAminoMsg): _213.MsgToggleOracle;
            toAminoMsg(message: _213.MsgToggleOracle): _213.MsgToggleOracleAminoMsg;
            fromProtoMsg(message: _213.MsgToggleOracleProtoMsg): _213.MsgToggleOracle;
            toProto(message: _213.MsgToggleOracle): Uint8Array;
            toProtoMsg(message: _213.MsgToggleOracle): _213.MsgToggleOracleProtoMsg;
        };
        MsgToggleOracleResponse: {
            typeUrl: string;
            encode(_: _213.MsgToggleOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgToggleOracleResponse;
            fromPartial(_: Partial<_213.MsgToggleOracleResponse>): _213.MsgToggleOracleResponse;
            fromAmino(_: _213.MsgToggleOracleResponseAmino): _213.MsgToggleOracleResponse;
            toAmino(_: _213.MsgToggleOracleResponse): _213.MsgToggleOracleResponseAmino;
            fromAminoMsg(object: _213.MsgToggleOracleResponseAminoMsg): _213.MsgToggleOracleResponse;
            fromProtoMsg(message: _213.MsgToggleOracleResponseProtoMsg): _213.MsgToggleOracleResponse;
            toProto(message: _213.MsgToggleOracleResponse): Uint8Array;
            toProtoMsg(message: _213.MsgToggleOracleResponse): _213.MsgToggleOracleResponseProtoMsg;
        };
        MsgRemoveOracle: {
            typeUrl: string;
            encode(message: _213.MsgRemoveOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgRemoveOracle;
            fromPartial(object: Partial<_213.MsgRemoveOracle>): _213.MsgRemoveOracle;
            fromAmino(object: _213.MsgRemoveOracleAmino): _213.MsgRemoveOracle;
            toAmino(message: _213.MsgRemoveOracle): _213.MsgRemoveOracleAmino;
            fromAminoMsg(object: _213.MsgRemoveOracleAminoMsg): _213.MsgRemoveOracle;
            toAminoMsg(message: _213.MsgRemoveOracle): _213.MsgRemoveOracleAminoMsg;
            fromProtoMsg(message: _213.MsgRemoveOracleProtoMsg): _213.MsgRemoveOracle;
            toProto(message: _213.MsgRemoveOracle): Uint8Array;
            toProtoMsg(message: _213.MsgRemoveOracle): _213.MsgRemoveOracleProtoMsg;
        };
        MsgRemoveOracleResponse: {
            typeUrl: string;
            encode(_: _213.MsgRemoveOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgRemoveOracleResponse;
            fromPartial(_: Partial<_213.MsgRemoveOracleResponse>): _213.MsgRemoveOracleResponse;
            fromAmino(_: _213.MsgRemoveOracleResponseAmino): _213.MsgRemoveOracleResponse;
            toAmino(_: _213.MsgRemoveOracleResponse): _213.MsgRemoveOracleResponseAmino;
            fromAminoMsg(object: _213.MsgRemoveOracleResponseAminoMsg): _213.MsgRemoveOracleResponse;
            fromProtoMsg(message: _213.MsgRemoveOracleResponseProtoMsg): _213.MsgRemoveOracleResponse;
            toProto(message: _213.MsgRemoveOracleResponse): Uint8Array;
            toProtoMsg(message: _213.MsgRemoveOracleResponse): _213.MsgRemoveOracleResponseProtoMsg;
        };
        QueryOracleRequest: {
            typeUrl: string;
            encode(message: _212.QueryOracleRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.QueryOracleRequest;
            fromPartial(object: Partial<_212.QueryOracleRequest>): _212.QueryOracleRequest;
            fromAmino(object: _212.QueryOracleRequestAmino): _212.QueryOracleRequest;
            toAmino(message: _212.QueryOracleRequest): _212.QueryOracleRequestAmino;
            fromAminoMsg(object: _212.QueryOracleRequestAminoMsg): _212.QueryOracleRequest;
            fromProtoMsg(message: _212.QueryOracleRequestProtoMsg): _212.QueryOracleRequest;
            toProto(message: _212.QueryOracleRequest): Uint8Array;
            toProtoMsg(message: _212.QueryOracleRequest): _212.QueryOracleRequestProtoMsg;
        };
        QueryOracleResponse: {
            typeUrl: string;
            encode(message: _212.QueryOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.QueryOracleResponse;
            fromPartial(object: Partial<_212.QueryOracleResponse>): _212.QueryOracleResponse;
            fromAmino(object: _212.QueryOracleResponseAmino): _212.QueryOracleResponse;
            toAmino(message: _212.QueryOracleResponse): _212.QueryOracleResponseAmino;
            fromAminoMsg(object: _212.QueryOracleResponseAminoMsg): _212.QueryOracleResponse;
            fromProtoMsg(message: _212.QueryOracleResponseProtoMsg): _212.QueryOracleResponse;
            toProto(message: _212.QueryOracleResponse): Uint8Array;
            toProtoMsg(message: _212.QueryOracleResponse): _212.QueryOracleResponseProtoMsg;
        };
        QueryAllOraclesRequest: {
            typeUrl: string;
            encode(_: _212.QueryAllOraclesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.QueryAllOraclesRequest;
            fromPartial(_: Partial<_212.QueryAllOraclesRequest>): _212.QueryAllOraclesRequest;
            fromAmino(_: _212.QueryAllOraclesRequestAmino): _212.QueryAllOraclesRequest;
            toAmino(_: _212.QueryAllOraclesRequest): _212.QueryAllOraclesRequestAmino;
            fromAminoMsg(object: _212.QueryAllOraclesRequestAminoMsg): _212.QueryAllOraclesRequest;
            fromProtoMsg(message: _212.QueryAllOraclesRequestProtoMsg): _212.QueryAllOraclesRequest;
            toProto(message: _212.QueryAllOraclesRequest): Uint8Array;
            toProtoMsg(message: _212.QueryAllOraclesRequest): _212.QueryAllOraclesRequestProtoMsg;
        };
        QueryAllOraclesResponse: {
            typeUrl: string;
            encode(message: _212.QueryAllOraclesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.QueryAllOraclesResponse;
            fromPartial(object: Partial<_212.QueryAllOraclesResponse>): _212.QueryAllOraclesResponse;
            fromAmino(object: _212.QueryAllOraclesResponseAmino): _212.QueryAllOraclesResponse;
            toAmino(message: _212.QueryAllOraclesResponse): _212.QueryAllOraclesResponseAmino;
            fromAminoMsg(object: _212.QueryAllOraclesResponseAminoMsg): _212.QueryAllOraclesResponse;
            fromProtoMsg(message: _212.QueryAllOraclesResponseProtoMsg): _212.QueryAllOraclesResponse;
            toProto(message: _212.QueryAllOraclesResponse): Uint8Array;
            toProtoMsg(message: _212.QueryAllOraclesResponse): _212.QueryAllOraclesResponseProtoMsg;
        };
        QueryActiveOraclesRequest: {
            typeUrl: string;
            encode(message: _212.QueryActiveOraclesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.QueryActiveOraclesRequest;
            fromPartial(object: Partial<_212.QueryActiveOraclesRequest>): _212.QueryActiveOraclesRequest;
            fromAmino(object: _212.QueryActiveOraclesRequestAmino): _212.QueryActiveOraclesRequest;
            toAmino(message: _212.QueryActiveOraclesRequest): _212.QueryActiveOraclesRequestAmino;
            fromAminoMsg(object: _212.QueryActiveOraclesRequestAminoMsg): _212.QueryActiveOraclesRequest;
            fromProtoMsg(message: _212.QueryActiveOraclesRequestProtoMsg): _212.QueryActiveOraclesRequest;
            toProto(message: _212.QueryActiveOraclesRequest): Uint8Array;
            toProtoMsg(message: _212.QueryActiveOraclesRequest): _212.QueryActiveOraclesRequestProtoMsg;
        };
        QueryActiveOraclesResponse: {
            typeUrl: string;
            encode(message: _212.QueryActiveOraclesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.QueryActiveOraclesResponse;
            fromPartial(object: Partial<_212.QueryActiveOraclesResponse>): _212.QueryActiveOraclesResponse;
            fromAmino(object: _212.QueryActiveOraclesResponseAmino): _212.QueryActiveOraclesResponse;
            toAmino(message: _212.QueryActiveOraclesResponse): _212.QueryActiveOraclesResponseAmino;
            fromAminoMsg(object: _212.QueryActiveOraclesResponseAminoMsg): _212.QueryActiveOraclesResponse;
            fromProtoMsg(message: _212.QueryActiveOraclesResponseProtoMsg): _212.QueryActiveOraclesResponse;
            toProto(message: _212.QueryActiveOraclesResponse): Uint8Array;
            toProtoMsg(message: _212.QueryActiveOraclesResponse): _212.QueryActiveOraclesResponseProtoMsg;
        };
        QueryMetricsRequest: {
            typeUrl: string;
            encode(message: _212.QueryMetricsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.QueryMetricsRequest;
            fromPartial(object: Partial<_212.QueryMetricsRequest>): _212.QueryMetricsRequest;
            fromAmino(object: _212.QueryMetricsRequestAmino): _212.QueryMetricsRequest;
            toAmino(message: _212.QueryMetricsRequest): _212.QueryMetricsRequestAmino;
            fromAminoMsg(object: _212.QueryMetricsRequestAminoMsg): _212.QueryMetricsRequest;
            fromProtoMsg(message: _212.QueryMetricsRequestProtoMsg): _212.QueryMetricsRequest;
            toProto(message: _212.QueryMetricsRequest): Uint8Array;
            toProtoMsg(message: _212.QueryMetricsRequest): _212.QueryMetricsRequestProtoMsg;
        };
        QueryMetricsResponse: {
            typeUrl: string;
            encode(message: _212.QueryMetricsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.QueryMetricsResponse;
            fromPartial(object: Partial<_212.QueryMetricsResponse>): _212.QueryMetricsResponse;
            fromAmino(object: _212.QueryMetricsResponseAmino): _212.QueryMetricsResponse;
            toAmino(message: _212.QueryMetricsResponse): _212.QueryMetricsResponseAmino;
            fromAminoMsg(object: _212.QueryMetricsResponseAminoMsg): _212.QueryMetricsResponse;
            fromProtoMsg(message: _212.QueryMetricsResponseProtoMsg): _212.QueryMetricsResponse;
            toProto(message: _212.QueryMetricsResponse): Uint8Array;
            toProtoMsg(message: _212.QueryMetricsResponse): _212.QueryMetricsResponseProtoMsg;
        };
        metricStatusFromJSON(object: any): _211.MetricStatus;
        metricStatusToJSON(object: _211.MetricStatus): string;
        MetricStatus: typeof _211.MetricStatus;
        MetricStatusSDKType: typeof _211.MetricStatus;
        MetricStatusAmino: typeof _211.MetricStatus;
        Oracle: {
            typeUrl: string;
            encode(message: _211.Oracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.Oracle;
            fromPartial(object: Partial<_211.Oracle>): _211.Oracle;
            fromAmino(object: _211.OracleAmino): _211.Oracle;
            toAmino(message: _211.Oracle): _211.OracleAmino;
            fromAminoMsg(object: _211.OracleAminoMsg): _211.Oracle;
            fromProtoMsg(message: _211.OracleProtoMsg): _211.Oracle;
            toProto(message: _211.Oracle): Uint8Array;
            toProtoMsg(message: _211.Oracle): _211.OracleProtoMsg;
        };
        Metric: {
            typeUrl: string;
            encode(message: _211.Metric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.Metric;
            fromPartial(object: Partial<_211.Metric>): _211.Metric;
            fromAmino(object: _211.MetricAmino): _211.Metric;
            toAmino(message: _211.Metric): _211.MetricAmino;
            fromAminoMsg(object: _211.MetricAminoMsg): _211.Metric;
            fromProtoMsg(message: _211.MetricProtoMsg): _211.Metric;
            toProto(message: _211.Metric): Uint8Array;
            toProtoMsg(message: _211.Metric): _211.MetricProtoMsg;
        };
        RedemptionRateAttributes: {
            typeUrl: string;
            encode(message: _211.RedemptionRateAttributes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.RedemptionRateAttributes;
            fromPartial(object: Partial<_211.RedemptionRateAttributes>): _211.RedemptionRateAttributes;
            fromAmino(object: _211.RedemptionRateAttributesAmino): _211.RedemptionRateAttributes;
            toAmino(message: _211.RedemptionRateAttributes): _211.RedemptionRateAttributesAmino;
            fromAminoMsg(object: _211.RedemptionRateAttributesAminoMsg): _211.RedemptionRateAttributes;
            fromProtoMsg(message: _211.RedemptionRateAttributesProtoMsg): _211.RedemptionRateAttributes;
            toProto(message: _211.RedemptionRateAttributes): Uint8Array;
            toProtoMsg(message: _211.RedemptionRateAttributes): _211.RedemptionRateAttributesProtoMsg;
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
        MsgInstantiateOracleContract: {
            typeUrl: string;
            encode(message: _209.MsgInstantiateOracleContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.MsgInstantiateOracleContract;
            fromPartial(object: Partial<_209.MsgInstantiateOracleContract>): _209.MsgInstantiateOracleContract;
            fromAmino(object: _209.MsgInstantiateOracleContractAmino): _209.MsgInstantiateOracleContract;
            toAmino(message: _209.MsgInstantiateOracleContract): _209.MsgInstantiateOracleContractAmino;
            fromAminoMsg(object: _209.MsgInstantiateOracleContractAminoMsg): _209.MsgInstantiateOracleContract;
            fromProtoMsg(message: _209.MsgInstantiateOracleContractProtoMsg): _209.MsgInstantiateOracleContract;
            toProto(message: _209.MsgInstantiateOracleContract): Uint8Array;
            toProtoMsg(message: _209.MsgInstantiateOracleContract): _209.MsgInstantiateOracleContractProtoMsg;
        };
        MsgExecuteContractPostMetric: {
            typeUrl: string;
            encode(message: _209.MsgExecuteContractPostMetric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.MsgExecuteContractPostMetric;
            fromPartial(object: Partial<_209.MsgExecuteContractPostMetric>): _209.MsgExecuteContractPostMetric;
            fromAmino(object: _209.MsgExecuteContractPostMetricAmino): _209.MsgExecuteContractPostMetric;
            toAmino(message: _209.MsgExecuteContractPostMetric): _209.MsgExecuteContractPostMetricAmino;
            fromAminoMsg(object: _209.MsgExecuteContractPostMetricAminoMsg): _209.MsgExecuteContractPostMetric;
            fromProtoMsg(message: _209.MsgExecuteContractPostMetricProtoMsg): _209.MsgExecuteContractPostMetric;
            toProto(message: _209.MsgExecuteContractPostMetric): Uint8Array;
            toProtoMsg(message: _209.MsgExecuteContractPostMetric): _209.MsgExecuteContractPostMetricProtoMsg;
        };
        MsgPostMetric: {
            typeUrl: string;
            encode(message: _209.MsgPostMetric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.MsgPostMetric;
            fromPartial(object: Partial<_209.MsgPostMetric>): _209.MsgPostMetric;
            fromAmino(object: _209.MsgPostMetricAmino): _209.MsgPostMetric;
            toAmino(message: _209.MsgPostMetric): _209.MsgPostMetricAmino;
            fromAminoMsg(object: _209.MsgPostMetricAminoMsg): _209.MsgPostMetric;
            fromProtoMsg(message: _209.MsgPostMetricProtoMsg): _209.MsgPostMetric;
            toProto(message: _209.MsgPostMetric): Uint8Array;
            toProtoMsg(message: _209.MsgPostMetric): _209.MsgPostMetricProtoMsg;
        };
        InstantiateOracleCallback: {
            typeUrl: string;
            encode(message: _208.InstantiateOracleCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.InstantiateOracleCallback;
            fromPartial(object: Partial<_208.InstantiateOracleCallback>): _208.InstantiateOracleCallback;
            fromAmino(object: _208.InstantiateOracleCallbackAmino): _208.InstantiateOracleCallback;
            toAmino(message: _208.InstantiateOracleCallback): _208.InstantiateOracleCallbackAmino;
            fromAminoMsg(object: _208.InstantiateOracleCallbackAminoMsg): _208.InstantiateOracleCallback;
            fromProtoMsg(message: _208.InstantiateOracleCallbackProtoMsg): _208.InstantiateOracleCallback;
            toProto(message: _208.InstantiateOracleCallback): Uint8Array;
            toProtoMsg(message: _208.InstantiateOracleCallback): _208.InstantiateOracleCallbackProtoMsg;
        };
        UpdateOracleCallback: {
            typeUrl: string;
            encode(message: _208.UpdateOracleCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.UpdateOracleCallback;
            fromPartial(object: Partial<_208.UpdateOracleCallback>): _208.UpdateOracleCallback;
            fromAmino(object: _208.UpdateOracleCallbackAmino): _208.UpdateOracleCallback;
            toAmino(message: _208.UpdateOracleCallback): _208.UpdateOracleCallbackAmino;
            fromAminoMsg(object: _208.UpdateOracleCallbackAminoMsg): _208.UpdateOracleCallback;
            fromProtoMsg(message: _208.UpdateOracleCallbackProtoMsg): _208.UpdateOracleCallback;
            toProto(message: _208.UpdateOracleCallback): Uint8Array;
            toProtoMsg(message: _208.UpdateOracleCallback): _208.UpdateOracleCallbackProtoMsg;
        };
    };
    const icqoracle: {
        MsgClientImpl: typeof _406.MsgClientImpl;
        QueryClientImpl: typeof _395.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            tokenPrice(request: _216.QueryTokenPriceRequest): Promise<_216.TokenPriceResponse>;
            tokenPrices(request?: _216.QueryTokenPricesRequest): Promise<_216.QueryTokenPricesResponse>;
            params(request?: _216.QueryParamsRequest): Promise<_216.QueryParamsResponse>;
            tokenPriceForQuoteDenom(request: _216.QueryTokenPriceForQuoteDenomRequest): Promise<_216.QueryTokenPriceForQuoteDenomResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                registerTokenPriceQuery(value: _217.MsgRegisterTokenPriceQuery): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeTokenPriceQuery(value: _217.MsgRemoveTokenPriceQuery): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateParams(value: _217.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                registerTokenPriceQuery(value: _217.MsgRegisterTokenPriceQuery): {
                    typeUrl: string;
                    value: _217.MsgRegisterTokenPriceQuery;
                };
                removeTokenPriceQuery(value: _217.MsgRemoveTokenPriceQuery): {
                    typeUrl: string;
                    value: _217.MsgRemoveTokenPriceQuery;
                };
                updateParams(value: _217.MsgUpdateParams): {
                    typeUrl: string;
                    value: _217.MsgUpdateParams;
                };
            };
            fromPartial: {
                registerTokenPriceQuery(value: _217.MsgRegisterTokenPriceQuery): {
                    typeUrl: string;
                    value: _217.MsgRegisterTokenPriceQuery;
                };
                removeTokenPriceQuery(value: _217.MsgRemoveTokenPriceQuery): {
                    typeUrl: string;
                    value: _217.MsgRemoveTokenPriceQuery;
                };
                updateParams(value: _217.MsgUpdateParams): {
                    typeUrl: string;
                    value: _217.MsgUpdateParams;
                };
            };
        };
        AminoConverter: {
            "/stride.icqoracle.MsgRegisterTokenPriceQuery": {
                aminoType: string;
                toAmino: (message: _217.MsgRegisterTokenPriceQuery) => _217.MsgRegisterTokenPriceQueryAmino;
                fromAmino: (object: _217.MsgRegisterTokenPriceQueryAmino) => _217.MsgRegisterTokenPriceQuery;
            };
            "/stride.icqoracle.MsgRemoveTokenPriceQuery": {
                aminoType: string;
                toAmino: (message: _217.MsgRemoveTokenPriceQuery) => _217.MsgRemoveTokenPriceQueryAmino;
                fromAmino: (object: _217.MsgRemoveTokenPriceQueryAmino) => _217.MsgRemoveTokenPriceQuery;
            };
            "/stride.icqoracle.MsgUpdateParams": {
                aminoType: string;
                toAmino: (message: _217.MsgUpdateParams) => _217.MsgUpdateParamsAmino;
                fromAmino: (object: _217.MsgUpdateParamsAmino) => _217.MsgUpdateParams;
            };
        };
        MsgRegisterTokenPriceQuery: {
            typeUrl: string;
            encode(message: _217.MsgRegisterTokenPriceQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.MsgRegisterTokenPriceQuery;
            fromPartial(object: Partial<_217.MsgRegisterTokenPriceQuery>): _217.MsgRegisterTokenPriceQuery;
            fromAmino(object: _217.MsgRegisterTokenPriceQueryAmino): _217.MsgRegisterTokenPriceQuery;
            toAmino(message: _217.MsgRegisterTokenPriceQuery): _217.MsgRegisterTokenPriceQueryAmino;
            fromAminoMsg(object: _217.MsgRegisterTokenPriceQueryAminoMsg): _217.MsgRegisterTokenPriceQuery;
            toAminoMsg(message: _217.MsgRegisterTokenPriceQuery): _217.MsgRegisterTokenPriceQueryAminoMsg;
            fromProtoMsg(message: _217.MsgRegisterTokenPriceQueryProtoMsg): _217.MsgRegisterTokenPriceQuery;
            toProto(message: _217.MsgRegisterTokenPriceQuery): Uint8Array;
            toProtoMsg(message: _217.MsgRegisterTokenPriceQuery): _217.MsgRegisterTokenPriceQueryProtoMsg;
        };
        MsgRegisterTokenPriceQueryResponse: {
            typeUrl: string;
            encode(_: _217.MsgRegisterTokenPriceQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.MsgRegisterTokenPriceQueryResponse;
            fromPartial(_: Partial<_217.MsgRegisterTokenPriceQueryResponse>): _217.MsgRegisterTokenPriceQueryResponse;
            fromAmino(_: _217.MsgRegisterTokenPriceQueryResponseAmino): _217.MsgRegisterTokenPriceQueryResponse;
            toAmino(_: _217.MsgRegisterTokenPriceQueryResponse): _217.MsgRegisterTokenPriceQueryResponseAmino;
            fromAminoMsg(object: _217.MsgRegisterTokenPriceQueryResponseAminoMsg): _217.MsgRegisterTokenPriceQueryResponse;
            fromProtoMsg(message: _217.MsgRegisterTokenPriceQueryResponseProtoMsg): _217.MsgRegisterTokenPriceQueryResponse;
            toProto(message: _217.MsgRegisterTokenPriceQueryResponse): Uint8Array;
            toProtoMsg(message: _217.MsgRegisterTokenPriceQueryResponse): _217.MsgRegisterTokenPriceQueryResponseProtoMsg;
        };
        MsgRemoveTokenPriceQuery: {
            typeUrl: string;
            encode(message: _217.MsgRemoveTokenPriceQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.MsgRemoveTokenPriceQuery;
            fromPartial(object: Partial<_217.MsgRemoveTokenPriceQuery>): _217.MsgRemoveTokenPriceQuery;
            fromAmino(object: _217.MsgRemoveTokenPriceQueryAmino): _217.MsgRemoveTokenPriceQuery;
            toAmino(message: _217.MsgRemoveTokenPriceQuery): _217.MsgRemoveTokenPriceQueryAmino;
            fromAminoMsg(object: _217.MsgRemoveTokenPriceQueryAminoMsg): _217.MsgRemoveTokenPriceQuery;
            toAminoMsg(message: _217.MsgRemoveTokenPriceQuery): _217.MsgRemoveTokenPriceQueryAminoMsg;
            fromProtoMsg(message: _217.MsgRemoveTokenPriceQueryProtoMsg): _217.MsgRemoveTokenPriceQuery;
            toProto(message: _217.MsgRemoveTokenPriceQuery): Uint8Array;
            toProtoMsg(message: _217.MsgRemoveTokenPriceQuery): _217.MsgRemoveTokenPriceQueryProtoMsg;
        };
        MsgRemoveTokenPriceQueryResponse: {
            typeUrl: string;
            encode(_: _217.MsgRemoveTokenPriceQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.MsgRemoveTokenPriceQueryResponse;
            fromPartial(_: Partial<_217.MsgRemoveTokenPriceQueryResponse>): _217.MsgRemoveTokenPriceQueryResponse;
            fromAmino(_: _217.MsgRemoveTokenPriceQueryResponseAmino): _217.MsgRemoveTokenPriceQueryResponse;
            toAmino(_: _217.MsgRemoveTokenPriceQueryResponse): _217.MsgRemoveTokenPriceQueryResponseAmino;
            fromAminoMsg(object: _217.MsgRemoveTokenPriceQueryResponseAminoMsg): _217.MsgRemoveTokenPriceQueryResponse;
            fromProtoMsg(message: _217.MsgRemoveTokenPriceQueryResponseProtoMsg): _217.MsgRemoveTokenPriceQueryResponse;
            toProto(message: _217.MsgRemoveTokenPriceQueryResponse): Uint8Array;
            toProtoMsg(message: _217.MsgRemoveTokenPriceQueryResponse): _217.MsgRemoveTokenPriceQueryResponseProtoMsg;
        };
        MsgUpdateParams: {
            typeUrl: string;
            encode(message: _217.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.MsgUpdateParams;
            fromPartial(object: Partial<_217.MsgUpdateParams>): _217.MsgUpdateParams;
            fromAmino(object: _217.MsgUpdateParamsAmino): _217.MsgUpdateParams;
            toAmino(message: _217.MsgUpdateParams): _217.MsgUpdateParamsAmino;
            fromAminoMsg(object: _217.MsgUpdateParamsAminoMsg): _217.MsgUpdateParams;
            toAminoMsg(message: _217.MsgUpdateParams): _217.MsgUpdateParamsAminoMsg;
            fromProtoMsg(message: _217.MsgUpdateParamsProtoMsg): _217.MsgUpdateParams;
            toProto(message: _217.MsgUpdateParams): Uint8Array;
            toProtoMsg(message: _217.MsgUpdateParams): _217.MsgUpdateParamsProtoMsg;
        };
        MsgUpdateParamsResponse: {
            typeUrl: string;
            encode(_: _217.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.MsgUpdateParamsResponse;
            fromPartial(_: Partial<_217.MsgUpdateParamsResponse>): _217.MsgUpdateParamsResponse;
            fromAmino(_: _217.MsgUpdateParamsResponseAmino): _217.MsgUpdateParamsResponse;
            toAmino(_: _217.MsgUpdateParamsResponse): _217.MsgUpdateParamsResponseAmino;
            fromAminoMsg(object: _217.MsgUpdateParamsResponseAminoMsg): _217.MsgUpdateParamsResponse;
            fromProtoMsg(message: _217.MsgUpdateParamsResponseProtoMsg): _217.MsgUpdateParamsResponse;
            toProto(message: _217.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _217.MsgUpdateParamsResponse): _217.MsgUpdateParamsResponseProtoMsg;
        };
        QueryTokenPriceRequest: {
            typeUrl: string;
            encode(message: _216.QueryTokenPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.QueryTokenPriceRequest;
            fromPartial(object: Partial<_216.QueryTokenPriceRequest>): _216.QueryTokenPriceRequest;
            fromAmino(object: _216.QueryTokenPriceRequestAmino): _216.QueryTokenPriceRequest;
            toAmino(message: _216.QueryTokenPriceRequest): _216.QueryTokenPriceRequestAmino;
            fromAminoMsg(object: _216.QueryTokenPriceRequestAminoMsg): _216.QueryTokenPriceRequest;
            fromProtoMsg(message: _216.QueryTokenPriceRequestProtoMsg): _216.QueryTokenPriceRequest;
            toProto(message: _216.QueryTokenPriceRequest): Uint8Array;
            toProtoMsg(message: _216.QueryTokenPriceRequest): _216.QueryTokenPriceRequestProtoMsg;
        };
        QueryTokenPricesRequest: {
            typeUrl: string;
            encode(message: _216.QueryTokenPricesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.QueryTokenPricesRequest;
            fromPartial(object: Partial<_216.QueryTokenPricesRequest>): _216.QueryTokenPricesRequest;
            fromAmino(object: _216.QueryTokenPricesRequestAmino): _216.QueryTokenPricesRequest;
            toAmino(message: _216.QueryTokenPricesRequest): _216.QueryTokenPricesRequestAmino;
            fromAminoMsg(object: _216.QueryTokenPricesRequestAminoMsg): _216.QueryTokenPricesRequest;
            fromProtoMsg(message: _216.QueryTokenPricesRequestProtoMsg): _216.QueryTokenPricesRequest;
            toProto(message: _216.QueryTokenPricesRequest): Uint8Array;
            toProtoMsg(message: _216.QueryTokenPricesRequest): _216.QueryTokenPricesRequestProtoMsg;
        };
        TokenPriceResponse: {
            typeUrl: string;
            encode(message: _216.TokenPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.TokenPriceResponse;
            fromPartial(object: Partial<_216.TokenPriceResponse>): _216.TokenPriceResponse;
            fromAmino(object: _216.TokenPriceResponseAmino): _216.TokenPriceResponse;
            toAmino(message: _216.TokenPriceResponse): _216.TokenPriceResponseAmino;
            fromAminoMsg(object: _216.TokenPriceResponseAminoMsg): _216.TokenPriceResponse;
            fromProtoMsg(message: _216.TokenPriceResponseProtoMsg): _216.TokenPriceResponse;
            toProto(message: _216.TokenPriceResponse): Uint8Array;
            toProtoMsg(message: _216.TokenPriceResponse): _216.TokenPriceResponseProtoMsg;
        };
        QueryTokenPricesResponse: {
            typeUrl: string;
            encode(message: _216.QueryTokenPricesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.QueryTokenPricesResponse;
            fromPartial(object: Partial<_216.QueryTokenPricesResponse>): _216.QueryTokenPricesResponse;
            fromAmino(object: _216.QueryTokenPricesResponseAmino): _216.QueryTokenPricesResponse;
            toAmino(message: _216.QueryTokenPricesResponse): _216.QueryTokenPricesResponseAmino;
            fromAminoMsg(object: _216.QueryTokenPricesResponseAminoMsg): _216.QueryTokenPricesResponse;
            fromProtoMsg(message: _216.QueryTokenPricesResponseProtoMsg): _216.QueryTokenPricesResponse;
            toProto(message: _216.QueryTokenPricesResponse): Uint8Array;
            toProtoMsg(message: _216.QueryTokenPricesResponse): _216.QueryTokenPricesResponseProtoMsg;
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
        QueryTokenPriceForQuoteDenomRequest: {
            typeUrl: string;
            encode(message: _216.QueryTokenPriceForQuoteDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.QueryTokenPriceForQuoteDenomRequest;
            fromPartial(object: Partial<_216.QueryTokenPriceForQuoteDenomRequest>): _216.QueryTokenPriceForQuoteDenomRequest;
            fromAmino(object: _216.QueryTokenPriceForQuoteDenomRequestAmino): _216.QueryTokenPriceForQuoteDenomRequest;
            toAmino(message: _216.QueryTokenPriceForQuoteDenomRequest): _216.QueryTokenPriceForQuoteDenomRequestAmino;
            fromAminoMsg(object: _216.QueryTokenPriceForQuoteDenomRequestAminoMsg): _216.QueryTokenPriceForQuoteDenomRequest;
            fromProtoMsg(message: _216.QueryTokenPriceForQuoteDenomRequestProtoMsg): _216.QueryTokenPriceForQuoteDenomRequest;
            toProto(message: _216.QueryTokenPriceForQuoteDenomRequest): Uint8Array;
            toProtoMsg(message: _216.QueryTokenPriceForQuoteDenomRequest): _216.QueryTokenPriceForQuoteDenomRequestProtoMsg;
        };
        QueryTokenPriceForQuoteDenomResponse: {
            typeUrl: string;
            encode(message: _216.QueryTokenPriceForQuoteDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.QueryTokenPriceForQuoteDenomResponse;
            fromPartial(object: Partial<_216.QueryTokenPriceForQuoteDenomResponse>): _216.QueryTokenPriceForQuoteDenomResponse;
            fromAmino(object: _216.QueryTokenPriceForQuoteDenomResponseAmino): _216.QueryTokenPriceForQuoteDenomResponse;
            toAmino(message: _216.QueryTokenPriceForQuoteDenomResponse): _216.QueryTokenPriceForQuoteDenomResponseAmino;
            fromAminoMsg(object: _216.QueryTokenPriceForQuoteDenomResponseAminoMsg): _216.QueryTokenPriceForQuoteDenomResponse;
            fromProtoMsg(message: _216.QueryTokenPriceForQuoteDenomResponseProtoMsg): _216.QueryTokenPriceForQuoteDenomResponse;
            toProto(message: _216.QueryTokenPriceForQuoteDenomResponse): Uint8Array;
            toProtoMsg(message: _216.QueryTokenPriceForQuoteDenomResponse): _216.QueryTokenPriceForQuoteDenomResponseProtoMsg;
        };
        TokenPrice: {
            typeUrl: string;
            encode(message: _215.TokenPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.TokenPrice;
            fromPartial(object: Partial<_215.TokenPrice>): _215.TokenPrice;
            fromAmino(object: _215.TokenPriceAmino): _215.TokenPrice;
            toAmino(message: _215.TokenPrice): _215.TokenPriceAmino;
            fromAminoMsg(object: _215.TokenPriceAminoMsg): _215.TokenPrice;
            fromProtoMsg(message: _215.TokenPriceProtoMsg): _215.TokenPrice;
            toProto(message: _215.TokenPrice): Uint8Array;
            toProtoMsg(message: _215.TokenPrice): _215.TokenPriceProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _215.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.Params;
            fromPartial(object: Partial<_215.Params>): _215.Params;
            fromAmino(object: _215.ParamsAmino): _215.Params;
            toAmino(message: _215.Params): _215.ParamsAmino;
            fromAminoMsg(object: _215.ParamsAminoMsg): _215.Params;
            fromProtoMsg(message: _215.ParamsProtoMsg): _215.Params;
            toProto(message: _215.Params): Uint8Array;
            toProtoMsg(message: _215.Params): _215.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _214.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.GenesisState;
            fromPartial(object: Partial<_214.GenesisState>): _214.GenesisState;
            fromAmino(object: _214.GenesisStateAmino): _214.GenesisState;
            toAmino(message: _214.GenesisState): _214.GenesisStateAmino;
            fromAminoMsg(object: _214.GenesisStateAminoMsg): _214.GenesisState;
            fromProtoMsg(message: _214.GenesisStateProtoMsg): _214.GenesisState;
            toProto(message: _214.GenesisState): Uint8Array;
            toProtoMsg(message: _214.GenesisState): _214.GenesisStateProtoMsg;
        };
    };
    namespace interchainquery {
        const v1: {
            MsgClientImpl: typeof _407.MsgClientImpl;
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitQueryResponse(value: _219.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitQueryResponse(value: _219.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _219.MsgSubmitQueryResponse;
                    };
                };
                fromPartial: {
                    submitQueryResponse(value: _219.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _219.MsgSubmitQueryResponse;
                    };
                };
            };
            AminoConverter: {
                "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
                    aminoType: string;
                    toAmino: (message: _219.MsgSubmitQueryResponse) => _219.MsgSubmitQueryResponseAmino;
                    fromAmino: (object: _219.MsgSubmitQueryResponseAmino) => _219.MsgSubmitQueryResponse;
                };
            };
            QueryPendingQueriesRequest: {
                typeUrl: string;
                encode(_: _220.QueryPendingQueriesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _220.QueryPendingQueriesRequest;
                fromPartial(_: Partial<_220.QueryPendingQueriesRequest>): _220.QueryPendingQueriesRequest;
                fromAmino(_: _220.QueryPendingQueriesRequestAmino): _220.QueryPendingQueriesRequest;
                toAmino(_: _220.QueryPendingQueriesRequest): _220.QueryPendingQueriesRequestAmino;
                fromAminoMsg(object: _220.QueryPendingQueriesRequestAminoMsg): _220.QueryPendingQueriesRequest;
                fromProtoMsg(message: _220.QueryPendingQueriesRequestProtoMsg): _220.QueryPendingQueriesRequest;
                toProto(message: _220.QueryPendingQueriesRequest): Uint8Array;
                toProtoMsg(message: _220.QueryPendingQueriesRequest): _220.QueryPendingQueriesRequestProtoMsg;
            };
            QueryPendingQueriesResponse: {
                typeUrl: string;
                encode(message: _220.QueryPendingQueriesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _220.QueryPendingQueriesResponse;
                fromPartial(object: Partial<_220.QueryPendingQueriesResponse>): _220.QueryPendingQueriesResponse;
                fromAmino(object: _220.QueryPendingQueriesResponseAmino): _220.QueryPendingQueriesResponse;
                toAmino(message: _220.QueryPendingQueriesResponse): _220.QueryPendingQueriesResponseAmino;
                fromAminoMsg(object: _220.QueryPendingQueriesResponseAminoMsg): _220.QueryPendingQueriesResponse;
                fromProtoMsg(message: _220.QueryPendingQueriesResponseProtoMsg): _220.QueryPendingQueriesResponse;
                toProto(message: _220.QueryPendingQueriesResponse): Uint8Array;
                toProtoMsg(message: _220.QueryPendingQueriesResponse): _220.QueryPendingQueriesResponseProtoMsg;
            };
            MsgSubmitQueryResponse: {
                typeUrl: string;
                encode(message: _219.MsgSubmitQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.MsgSubmitQueryResponse;
                fromPartial(object: Partial<_219.MsgSubmitQueryResponse>): _219.MsgSubmitQueryResponse;
                fromAmino(object: _219.MsgSubmitQueryResponseAmino): _219.MsgSubmitQueryResponse;
                toAmino(message: _219.MsgSubmitQueryResponse): _219.MsgSubmitQueryResponseAmino;
                fromAminoMsg(object: _219.MsgSubmitQueryResponseAminoMsg): _219.MsgSubmitQueryResponse;
                fromProtoMsg(message: _219.MsgSubmitQueryResponseProtoMsg): _219.MsgSubmitQueryResponse;
                toProto(message: _219.MsgSubmitQueryResponse): Uint8Array;
                toProtoMsg(message: _219.MsgSubmitQueryResponse): _219.MsgSubmitQueryResponseProtoMsg;
            };
            MsgSubmitQueryResponseResponse: {
                typeUrl: string;
                encode(_: _219.MsgSubmitQueryResponseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.MsgSubmitQueryResponseResponse;
                fromPartial(_: Partial<_219.MsgSubmitQueryResponseResponse>): _219.MsgSubmitQueryResponseResponse;
                fromAmino(_: _219.MsgSubmitQueryResponseResponseAmino): _219.MsgSubmitQueryResponseResponse;
                toAmino(_: _219.MsgSubmitQueryResponseResponse): _219.MsgSubmitQueryResponseResponseAmino;
                fromAminoMsg(object: _219.MsgSubmitQueryResponseResponseAminoMsg): _219.MsgSubmitQueryResponseResponse;
                fromProtoMsg(message: _219.MsgSubmitQueryResponseResponseProtoMsg): _219.MsgSubmitQueryResponseResponse;
                toProto(message: _219.MsgSubmitQueryResponseResponse): Uint8Array;
                toProtoMsg(message: _219.MsgSubmitQueryResponseResponse): _219.MsgSubmitQueryResponseResponseProtoMsg;
            };
            timeoutPolicyFromJSON(object: any): _218.TimeoutPolicy;
            timeoutPolicyToJSON(object: _218.TimeoutPolicy): string;
            TimeoutPolicy: typeof _218.TimeoutPolicy;
            TimeoutPolicySDKType: typeof _218.TimeoutPolicy;
            TimeoutPolicyAmino: typeof _218.TimeoutPolicy;
            Query: {
                typeUrl: string;
                encode(message: _218.Query, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.Query;
                fromPartial(object: Partial<_218.Query>): _218.Query;
                fromAmino(object: _218.QueryAmino): _218.Query;
                toAmino(message: _218.Query): _218.QueryAmino;
                fromAminoMsg(object: _218.QueryAminoMsg): _218.Query;
                fromProtoMsg(message: _218.QueryProtoMsg): _218.Query;
                toProto(message: _218.Query): Uint8Array;
                toProtoMsg(message: _218.Query): _218.QueryProtoMsg;
            };
            DataPoint: {
                typeUrl: string;
                encode(message: _218.DataPoint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.DataPoint;
                fromPartial(object: Partial<_218.DataPoint>): _218.DataPoint;
                fromAmino(object: _218.DataPointAmino): _218.DataPoint;
                toAmino(message: _218.DataPoint): _218.DataPointAmino;
                fromAminoMsg(object: _218.DataPointAminoMsg): _218.DataPoint;
                fromProtoMsg(message: _218.DataPointProtoMsg): _218.DataPoint;
                toProto(message: _218.DataPoint): Uint8Array;
                toProtoMsg(message: _218.DataPoint): _218.DataPointProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _218.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.GenesisState;
                fromPartial(object: Partial<_218.GenesisState>): _218.GenesisState;
                fromAmino(object: _218.GenesisStateAmino): _218.GenesisState;
                toAmino(message: _218.GenesisState): _218.GenesisStateAmino;
                fromAminoMsg(object: _218.GenesisStateAminoMsg): _218.GenesisState;
                fromProtoMsg(message: _218.GenesisStateProtoMsg): _218.GenesisState;
                toProto(message: _218.GenesisState): Uint8Array;
                toProtoMsg(message: _218.GenesisState): _218.GenesisStateProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _396.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _223.QueryParamsRequest): Promise<_223.QueryParamsResponse>;
                epochProvisions(request?: _223.QueryEpochProvisionsRequest): Promise<_223.QueryEpochProvisionsResponse>;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _223.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.QueryParamsRequest;
                fromPartial(_: Partial<_223.QueryParamsRequest>): _223.QueryParamsRequest;
                fromAmino(_: _223.QueryParamsRequestAmino): _223.QueryParamsRequest;
                toAmino(_: _223.QueryParamsRequest): _223.QueryParamsRequestAmino;
                fromAminoMsg(object: _223.QueryParamsRequestAminoMsg): _223.QueryParamsRequest;
                fromProtoMsg(message: _223.QueryParamsRequestProtoMsg): _223.QueryParamsRequest;
                toProto(message: _223.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _223.QueryParamsRequest): _223.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _223.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.QueryParamsResponse;
                fromPartial(object: Partial<_223.QueryParamsResponse>): _223.QueryParamsResponse;
                fromAmino(object: _223.QueryParamsResponseAmino): _223.QueryParamsResponse;
                toAmino(message: _223.QueryParamsResponse): _223.QueryParamsResponseAmino;
                fromAminoMsg(object: _223.QueryParamsResponseAminoMsg): _223.QueryParamsResponse;
                fromProtoMsg(message: _223.QueryParamsResponseProtoMsg): _223.QueryParamsResponse;
                toProto(message: _223.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _223.QueryParamsResponse): _223.QueryParamsResponseProtoMsg;
            };
            QueryEpochProvisionsRequest: {
                typeUrl: string;
                encode(_: _223.QueryEpochProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_223.QueryEpochProvisionsRequest>): _223.QueryEpochProvisionsRequest;
                fromAmino(_: _223.QueryEpochProvisionsRequestAmino): _223.QueryEpochProvisionsRequest;
                toAmino(_: _223.QueryEpochProvisionsRequest): _223.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _223.QueryEpochProvisionsRequestAminoMsg): _223.QueryEpochProvisionsRequest;
                fromProtoMsg(message: _223.QueryEpochProvisionsRequestProtoMsg): _223.QueryEpochProvisionsRequest;
                toProto(message: _223.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _223.QueryEpochProvisionsRequest): _223.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                typeUrl: string;
                encode(message: _223.QueryEpochProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_223.QueryEpochProvisionsResponse>): _223.QueryEpochProvisionsResponse;
                fromAmino(object: _223.QueryEpochProvisionsResponseAmino): _223.QueryEpochProvisionsResponse;
                toAmino(message: _223.QueryEpochProvisionsResponse): _223.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _223.QueryEpochProvisionsResponseAminoMsg): _223.QueryEpochProvisionsResponse;
                fromProtoMsg(message: _223.QueryEpochProvisionsResponseProtoMsg): _223.QueryEpochProvisionsResponse;
                toProto(message: _223.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _223.QueryEpochProvisionsResponse): _223.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _222.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.Minter;
                fromPartial(object: Partial<_222.Minter>): _222.Minter;
                fromAmino(object: _222.MinterAmino): _222.Minter;
                toAmino(message: _222.Minter): _222.MinterAmino;
                fromAminoMsg(object: _222.MinterAminoMsg): _222.Minter;
                fromProtoMsg(message: _222.MinterProtoMsg): _222.Minter;
                toProto(message: _222.Minter): Uint8Array;
                toProtoMsg(message: _222.Minter): _222.MinterProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                encode(message: _222.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.DistributionProportions;
                fromPartial(object: Partial<_222.DistributionProportions>): _222.DistributionProportions;
                fromAmino(object: _222.DistributionProportionsAmino): _222.DistributionProportions;
                toAmino(message: _222.DistributionProportions): _222.DistributionProportionsAmino;
                fromAminoMsg(object: _222.DistributionProportionsAminoMsg): _222.DistributionProportions;
                fromProtoMsg(message: _222.DistributionProportionsProtoMsg): _222.DistributionProportions;
                toProto(message: _222.DistributionProportions): Uint8Array;
                toProtoMsg(message: _222.DistributionProportions): _222.DistributionProportionsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _222.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.Params;
                fromPartial(object: Partial<_222.Params>): _222.Params;
                fromAmino(object: _222.ParamsAmino): _222.Params;
                toAmino(message: _222.Params): _222.ParamsAmino;
                fromAminoMsg(object: _222.ParamsAminoMsg): _222.Params;
                fromProtoMsg(message: _222.ParamsProtoMsg): _222.Params;
                toProto(message: _222.Params): Uint8Array;
                toProtoMsg(message: _222.Params): _222.ParamsProtoMsg;
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
    }
    const records: {
        QueryClientImpl: typeof _397.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _227.QueryParamsRequest): Promise<_227.QueryParamsResponse>;
            userRedemptionRecord(request: _227.QueryGetUserRedemptionRecordRequest): Promise<_227.QueryGetUserRedemptionRecordResponse>;
            userRedemptionRecordAll(request?: _227.QueryAllUserRedemptionRecordRequest): Promise<_227.QueryAllUserRedemptionRecordResponse>;
            userRedemptionRecordForUser(request: _227.QueryAllUserRedemptionRecordForUserRequest): Promise<_227.QueryAllUserRedemptionRecordForUserResponse>;
            epochUnbondingRecord(request: _227.QueryGetEpochUnbondingRecordRequest): Promise<_227.QueryGetEpochUnbondingRecordResponse>;
            epochUnbondingRecordAll(request?: _227.QueryAllEpochUnbondingRecordRequest): Promise<_227.QueryAllEpochUnbondingRecordResponse>;
            depositRecord(request: _227.QueryGetDepositRecordRequest): Promise<_227.QueryGetDepositRecordResponse>;
            depositRecordAll(request?: _227.QueryAllDepositRecordRequest): Promise<_227.QueryAllDepositRecordResponse>;
            depositRecordByHost(request: _227.QueryDepositRecordByHostRequest): Promise<_227.QueryDepositRecordByHostResponse>;
            lSMDeposit(request: _227.QueryLSMDepositRequest): Promise<_227.QueryLSMDepositResponse>;
            lSMDeposits(request: _227.QueryLSMDepositsRequest): Promise<_227.QueryLSMDepositsResponse>;
        };
        depositRecord_StatusFromJSON(object: any): _228.DepositRecord_Status;
        depositRecord_StatusToJSON(object: _228.DepositRecord_Status): string;
        depositRecord_SourceFromJSON(object: any): _228.DepositRecord_Source;
        depositRecord_SourceToJSON(object: _228.DepositRecord_Source): string;
        hostZoneUnbonding_StatusFromJSON(object: any): _228.HostZoneUnbonding_Status;
        hostZoneUnbonding_StatusToJSON(object: _228.HostZoneUnbonding_Status): string;
        lSMTokenDeposit_StatusFromJSON(object: any): _228.LSMTokenDeposit_Status;
        lSMTokenDeposit_StatusToJSON(object: _228.LSMTokenDeposit_Status): string;
        DepositRecord_Status: typeof _228.DepositRecord_Status;
        DepositRecord_StatusSDKType: typeof _228.DepositRecord_Status;
        DepositRecord_StatusAmino: typeof _228.DepositRecord_Status;
        DepositRecord_Source: typeof _228.DepositRecord_Source;
        DepositRecord_SourceSDKType: typeof _228.DepositRecord_Source;
        DepositRecord_SourceAmino: typeof _228.DepositRecord_Source;
        HostZoneUnbonding_Status: typeof _228.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusSDKType: typeof _228.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusAmino: typeof _228.HostZoneUnbonding_Status;
        LSMTokenDeposit_Status: typeof _228.LSMTokenDeposit_Status;
        LSMTokenDeposit_StatusSDKType: typeof _228.LSMTokenDeposit_Status;
        LSMTokenDeposit_StatusAmino: typeof _228.LSMTokenDeposit_Status;
        UserRedemptionRecord: {
            typeUrl: string;
            encode(message: _228.UserRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.UserRedemptionRecord;
            fromPartial(object: Partial<_228.UserRedemptionRecord>): _228.UserRedemptionRecord;
            fromAmino(object: _228.UserRedemptionRecordAmino): _228.UserRedemptionRecord;
            toAmino(message: _228.UserRedemptionRecord): _228.UserRedemptionRecordAmino;
            fromAminoMsg(object: _228.UserRedemptionRecordAminoMsg): _228.UserRedemptionRecord;
            fromProtoMsg(message: _228.UserRedemptionRecordProtoMsg): _228.UserRedemptionRecord;
            toProto(message: _228.UserRedemptionRecord): Uint8Array;
            toProtoMsg(message: _228.UserRedemptionRecord): _228.UserRedemptionRecordProtoMsg;
        };
        DepositRecord: {
            typeUrl: string;
            encode(message: _228.DepositRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.DepositRecord;
            fromPartial(object: Partial<_228.DepositRecord>): _228.DepositRecord;
            fromAmino(object: _228.DepositRecordAmino): _228.DepositRecord;
            toAmino(message: _228.DepositRecord): _228.DepositRecordAmino;
            fromAminoMsg(object: _228.DepositRecordAminoMsg): _228.DepositRecord;
            fromProtoMsg(message: _228.DepositRecordProtoMsg): _228.DepositRecord;
            toProto(message: _228.DepositRecord): Uint8Array;
            toProtoMsg(message: _228.DepositRecord): _228.DepositRecordProtoMsg;
        };
        HostZoneUnbonding: {
            typeUrl: string;
            encode(message: _228.HostZoneUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.HostZoneUnbonding;
            fromPartial(object: Partial<_228.HostZoneUnbonding>): _228.HostZoneUnbonding;
            fromAmino(object: _228.HostZoneUnbondingAmino): _228.HostZoneUnbonding;
            toAmino(message: _228.HostZoneUnbonding): _228.HostZoneUnbondingAmino;
            fromAminoMsg(object: _228.HostZoneUnbondingAminoMsg): _228.HostZoneUnbonding;
            fromProtoMsg(message: _228.HostZoneUnbondingProtoMsg): _228.HostZoneUnbonding;
            toProto(message: _228.HostZoneUnbonding): Uint8Array;
            toProtoMsg(message: _228.HostZoneUnbonding): _228.HostZoneUnbondingProtoMsg;
        };
        EpochUnbondingRecord: {
            typeUrl: string;
            encode(message: _228.EpochUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.EpochUnbondingRecord;
            fromPartial(object: Partial<_228.EpochUnbondingRecord>): _228.EpochUnbondingRecord;
            fromAmino(object: _228.EpochUnbondingRecordAmino): _228.EpochUnbondingRecord;
            toAmino(message: _228.EpochUnbondingRecord): _228.EpochUnbondingRecordAmino;
            fromAminoMsg(object: _228.EpochUnbondingRecordAminoMsg): _228.EpochUnbondingRecord;
            fromProtoMsg(message: _228.EpochUnbondingRecordProtoMsg): _228.EpochUnbondingRecord;
            toProto(message: _228.EpochUnbondingRecord): Uint8Array;
            toProtoMsg(message: _228.EpochUnbondingRecord): _228.EpochUnbondingRecordProtoMsg;
        };
        LSMTokenDeposit: {
            typeUrl: string;
            encode(message: _228.LSMTokenDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.LSMTokenDeposit;
            fromPartial(object: Partial<_228.LSMTokenDeposit>): _228.LSMTokenDeposit;
            fromAmino(object: _228.LSMTokenDepositAmino): _228.LSMTokenDeposit;
            toAmino(message: _228.LSMTokenDeposit): _228.LSMTokenDepositAmino;
            fromAminoMsg(object: _228.LSMTokenDepositAminoMsg): _228.LSMTokenDeposit;
            fromProtoMsg(message: _228.LSMTokenDepositProtoMsg): _228.LSMTokenDeposit;
            toProto(message: _228.LSMTokenDeposit): Uint8Array;
            toProtoMsg(message: _228.LSMTokenDeposit): _228.LSMTokenDepositProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _227.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryParamsRequest;
            fromPartial(_: Partial<_227.QueryParamsRequest>): _227.QueryParamsRequest;
            fromAmino(_: _227.QueryParamsRequestAmino): _227.QueryParamsRequest;
            toAmino(_: _227.QueryParamsRequest): _227.QueryParamsRequestAmino;
            fromAminoMsg(object: _227.QueryParamsRequestAminoMsg): _227.QueryParamsRequest;
            fromProtoMsg(message: _227.QueryParamsRequestProtoMsg): _227.QueryParamsRequest;
            toProto(message: _227.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _227.QueryParamsRequest): _227.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _227.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryParamsResponse;
            fromPartial(object: Partial<_227.QueryParamsResponse>): _227.QueryParamsResponse;
            fromAmino(object: _227.QueryParamsResponseAmino): _227.QueryParamsResponse;
            toAmino(message: _227.QueryParamsResponse): _227.QueryParamsResponseAmino;
            fromAminoMsg(object: _227.QueryParamsResponseAminoMsg): _227.QueryParamsResponse;
            fromProtoMsg(message: _227.QueryParamsResponseProtoMsg): _227.QueryParamsResponse;
            toProto(message: _227.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _227.QueryParamsResponse): _227.QueryParamsResponseProtoMsg;
        };
        QueryGetDepositRecordRequest: {
            typeUrl: string;
            encode(message: _227.QueryGetDepositRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryGetDepositRecordRequest;
            fromPartial(object: Partial<_227.QueryGetDepositRecordRequest>): _227.QueryGetDepositRecordRequest;
            fromAmino(object: _227.QueryGetDepositRecordRequestAmino): _227.QueryGetDepositRecordRequest;
            toAmino(message: _227.QueryGetDepositRecordRequest): _227.QueryGetDepositRecordRequestAmino;
            fromAminoMsg(object: _227.QueryGetDepositRecordRequestAminoMsg): _227.QueryGetDepositRecordRequest;
            fromProtoMsg(message: _227.QueryGetDepositRecordRequestProtoMsg): _227.QueryGetDepositRecordRequest;
            toProto(message: _227.QueryGetDepositRecordRequest): Uint8Array;
            toProtoMsg(message: _227.QueryGetDepositRecordRequest): _227.QueryGetDepositRecordRequestProtoMsg;
        };
        QueryGetDepositRecordResponse: {
            typeUrl: string;
            encode(message: _227.QueryGetDepositRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryGetDepositRecordResponse;
            fromPartial(object: Partial<_227.QueryGetDepositRecordResponse>): _227.QueryGetDepositRecordResponse;
            fromAmino(object: _227.QueryGetDepositRecordResponseAmino): _227.QueryGetDepositRecordResponse;
            toAmino(message: _227.QueryGetDepositRecordResponse): _227.QueryGetDepositRecordResponseAmino;
            fromAminoMsg(object: _227.QueryGetDepositRecordResponseAminoMsg): _227.QueryGetDepositRecordResponse;
            fromProtoMsg(message: _227.QueryGetDepositRecordResponseProtoMsg): _227.QueryGetDepositRecordResponse;
            toProto(message: _227.QueryGetDepositRecordResponse): Uint8Array;
            toProtoMsg(message: _227.QueryGetDepositRecordResponse): _227.QueryGetDepositRecordResponseProtoMsg;
        };
        QueryAllDepositRecordRequest: {
            typeUrl: string;
            encode(message: _227.QueryAllDepositRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryAllDepositRecordRequest;
            fromPartial(object: Partial<_227.QueryAllDepositRecordRequest>): _227.QueryAllDepositRecordRequest;
            fromAmino(object: _227.QueryAllDepositRecordRequestAmino): _227.QueryAllDepositRecordRequest;
            toAmino(message: _227.QueryAllDepositRecordRequest): _227.QueryAllDepositRecordRequestAmino;
            fromAminoMsg(object: _227.QueryAllDepositRecordRequestAminoMsg): _227.QueryAllDepositRecordRequest;
            fromProtoMsg(message: _227.QueryAllDepositRecordRequestProtoMsg): _227.QueryAllDepositRecordRequest;
            toProto(message: _227.QueryAllDepositRecordRequest): Uint8Array;
            toProtoMsg(message: _227.QueryAllDepositRecordRequest): _227.QueryAllDepositRecordRequestProtoMsg;
        };
        QueryAllDepositRecordResponse: {
            typeUrl: string;
            encode(message: _227.QueryAllDepositRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryAllDepositRecordResponse;
            fromPartial(object: Partial<_227.QueryAllDepositRecordResponse>): _227.QueryAllDepositRecordResponse;
            fromAmino(object: _227.QueryAllDepositRecordResponseAmino): _227.QueryAllDepositRecordResponse;
            toAmino(message: _227.QueryAllDepositRecordResponse): _227.QueryAllDepositRecordResponseAmino;
            fromAminoMsg(object: _227.QueryAllDepositRecordResponseAminoMsg): _227.QueryAllDepositRecordResponse;
            fromProtoMsg(message: _227.QueryAllDepositRecordResponseProtoMsg): _227.QueryAllDepositRecordResponse;
            toProto(message: _227.QueryAllDepositRecordResponse): Uint8Array;
            toProtoMsg(message: _227.QueryAllDepositRecordResponse): _227.QueryAllDepositRecordResponseProtoMsg;
        };
        QueryDepositRecordByHostRequest: {
            typeUrl: string;
            encode(message: _227.QueryDepositRecordByHostRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryDepositRecordByHostRequest;
            fromPartial(object: Partial<_227.QueryDepositRecordByHostRequest>): _227.QueryDepositRecordByHostRequest;
            fromAmino(object: _227.QueryDepositRecordByHostRequestAmino): _227.QueryDepositRecordByHostRequest;
            toAmino(message: _227.QueryDepositRecordByHostRequest): _227.QueryDepositRecordByHostRequestAmino;
            fromAminoMsg(object: _227.QueryDepositRecordByHostRequestAminoMsg): _227.QueryDepositRecordByHostRequest;
            fromProtoMsg(message: _227.QueryDepositRecordByHostRequestProtoMsg): _227.QueryDepositRecordByHostRequest;
            toProto(message: _227.QueryDepositRecordByHostRequest): Uint8Array;
            toProtoMsg(message: _227.QueryDepositRecordByHostRequest): _227.QueryDepositRecordByHostRequestProtoMsg;
        };
        QueryDepositRecordByHostResponse: {
            typeUrl: string;
            encode(message: _227.QueryDepositRecordByHostResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryDepositRecordByHostResponse;
            fromPartial(object: Partial<_227.QueryDepositRecordByHostResponse>): _227.QueryDepositRecordByHostResponse;
            fromAmino(object: _227.QueryDepositRecordByHostResponseAmino): _227.QueryDepositRecordByHostResponse;
            toAmino(message: _227.QueryDepositRecordByHostResponse): _227.QueryDepositRecordByHostResponseAmino;
            fromAminoMsg(object: _227.QueryDepositRecordByHostResponseAminoMsg): _227.QueryDepositRecordByHostResponse;
            fromProtoMsg(message: _227.QueryDepositRecordByHostResponseProtoMsg): _227.QueryDepositRecordByHostResponse;
            toProto(message: _227.QueryDepositRecordByHostResponse): Uint8Array;
            toProtoMsg(message: _227.QueryDepositRecordByHostResponse): _227.QueryDepositRecordByHostResponseProtoMsg;
        };
        QueryGetUserRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _227.QueryGetUserRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryGetUserRedemptionRecordRequest;
            fromPartial(object: Partial<_227.QueryGetUserRedemptionRecordRequest>): _227.QueryGetUserRedemptionRecordRequest;
            fromAmino(object: _227.QueryGetUserRedemptionRecordRequestAmino): _227.QueryGetUserRedemptionRecordRequest;
            toAmino(message: _227.QueryGetUserRedemptionRecordRequest): _227.QueryGetUserRedemptionRecordRequestAmino;
            fromAminoMsg(object: _227.QueryGetUserRedemptionRecordRequestAminoMsg): _227.QueryGetUserRedemptionRecordRequest;
            fromProtoMsg(message: _227.QueryGetUserRedemptionRecordRequestProtoMsg): _227.QueryGetUserRedemptionRecordRequest;
            toProto(message: _227.QueryGetUserRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _227.QueryGetUserRedemptionRecordRequest): _227.QueryGetUserRedemptionRecordRequestProtoMsg;
        };
        QueryGetUserRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _227.QueryGetUserRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryGetUserRedemptionRecordResponse;
            fromPartial(object: Partial<_227.QueryGetUserRedemptionRecordResponse>): _227.QueryGetUserRedemptionRecordResponse;
            fromAmino(object: _227.QueryGetUserRedemptionRecordResponseAmino): _227.QueryGetUserRedemptionRecordResponse;
            toAmino(message: _227.QueryGetUserRedemptionRecordResponse): _227.QueryGetUserRedemptionRecordResponseAmino;
            fromAminoMsg(object: _227.QueryGetUserRedemptionRecordResponseAminoMsg): _227.QueryGetUserRedemptionRecordResponse;
            fromProtoMsg(message: _227.QueryGetUserRedemptionRecordResponseProtoMsg): _227.QueryGetUserRedemptionRecordResponse;
            toProto(message: _227.QueryGetUserRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _227.QueryGetUserRedemptionRecordResponse): _227.QueryGetUserRedemptionRecordResponseProtoMsg;
        };
        QueryAllUserRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _227.QueryAllUserRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryAllUserRedemptionRecordRequest;
            fromPartial(object: Partial<_227.QueryAllUserRedemptionRecordRequest>): _227.QueryAllUserRedemptionRecordRequest;
            fromAmino(object: _227.QueryAllUserRedemptionRecordRequestAmino): _227.QueryAllUserRedemptionRecordRequest;
            toAmino(message: _227.QueryAllUserRedemptionRecordRequest): _227.QueryAllUserRedemptionRecordRequestAmino;
            fromAminoMsg(object: _227.QueryAllUserRedemptionRecordRequestAminoMsg): _227.QueryAllUserRedemptionRecordRequest;
            fromProtoMsg(message: _227.QueryAllUserRedemptionRecordRequestProtoMsg): _227.QueryAllUserRedemptionRecordRequest;
            toProto(message: _227.QueryAllUserRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _227.QueryAllUserRedemptionRecordRequest): _227.QueryAllUserRedemptionRecordRequestProtoMsg;
        };
        QueryAllUserRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _227.QueryAllUserRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryAllUserRedemptionRecordResponse;
            fromPartial(object: Partial<_227.QueryAllUserRedemptionRecordResponse>): _227.QueryAllUserRedemptionRecordResponse;
            fromAmino(object: _227.QueryAllUserRedemptionRecordResponseAmino): _227.QueryAllUserRedemptionRecordResponse;
            toAmino(message: _227.QueryAllUserRedemptionRecordResponse): _227.QueryAllUserRedemptionRecordResponseAmino;
            fromAminoMsg(object: _227.QueryAllUserRedemptionRecordResponseAminoMsg): _227.QueryAllUserRedemptionRecordResponse;
            fromProtoMsg(message: _227.QueryAllUserRedemptionRecordResponseProtoMsg): _227.QueryAllUserRedemptionRecordResponse;
            toProto(message: _227.QueryAllUserRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _227.QueryAllUserRedemptionRecordResponse): _227.QueryAllUserRedemptionRecordResponseProtoMsg;
        };
        QueryAllUserRedemptionRecordForUserRequest: {
            typeUrl: string;
            encode(message: _227.QueryAllUserRedemptionRecordForUserRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryAllUserRedemptionRecordForUserRequest;
            fromPartial(object: Partial<_227.QueryAllUserRedemptionRecordForUserRequest>): _227.QueryAllUserRedemptionRecordForUserRequest;
            fromAmino(object: _227.QueryAllUserRedemptionRecordForUserRequestAmino): _227.QueryAllUserRedemptionRecordForUserRequest;
            toAmino(message: _227.QueryAllUserRedemptionRecordForUserRequest): _227.QueryAllUserRedemptionRecordForUserRequestAmino;
            fromAminoMsg(object: _227.QueryAllUserRedemptionRecordForUserRequestAminoMsg): _227.QueryAllUserRedemptionRecordForUserRequest;
            fromProtoMsg(message: _227.QueryAllUserRedemptionRecordForUserRequestProtoMsg): _227.QueryAllUserRedemptionRecordForUserRequest;
            toProto(message: _227.QueryAllUserRedemptionRecordForUserRequest): Uint8Array;
            toProtoMsg(message: _227.QueryAllUserRedemptionRecordForUserRequest): _227.QueryAllUserRedemptionRecordForUserRequestProtoMsg;
        };
        QueryAllUserRedemptionRecordForUserResponse: {
            typeUrl: string;
            encode(message: _227.QueryAllUserRedemptionRecordForUserResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryAllUserRedemptionRecordForUserResponse;
            fromPartial(object: Partial<_227.QueryAllUserRedemptionRecordForUserResponse>): _227.QueryAllUserRedemptionRecordForUserResponse;
            fromAmino(object: _227.QueryAllUserRedemptionRecordForUserResponseAmino): _227.QueryAllUserRedemptionRecordForUserResponse;
            toAmino(message: _227.QueryAllUserRedemptionRecordForUserResponse): _227.QueryAllUserRedemptionRecordForUserResponseAmino;
            fromAminoMsg(object: _227.QueryAllUserRedemptionRecordForUserResponseAminoMsg): _227.QueryAllUserRedemptionRecordForUserResponse;
            fromProtoMsg(message: _227.QueryAllUserRedemptionRecordForUserResponseProtoMsg): _227.QueryAllUserRedemptionRecordForUserResponse;
            toProto(message: _227.QueryAllUserRedemptionRecordForUserResponse): Uint8Array;
            toProtoMsg(message: _227.QueryAllUserRedemptionRecordForUserResponse): _227.QueryAllUserRedemptionRecordForUserResponseProtoMsg;
        };
        QueryGetEpochUnbondingRecordRequest: {
            typeUrl: string;
            encode(message: _227.QueryGetEpochUnbondingRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryGetEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_227.QueryGetEpochUnbondingRecordRequest>): _227.QueryGetEpochUnbondingRecordRequest;
            fromAmino(object: _227.QueryGetEpochUnbondingRecordRequestAmino): _227.QueryGetEpochUnbondingRecordRequest;
            toAmino(message: _227.QueryGetEpochUnbondingRecordRequest): _227.QueryGetEpochUnbondingRecordRequestAmino;
            fromAminoMsg(object: _227.QueryGetEpochUnbondingRecordRequestAminoMsg): _227.QueryGetEpochUnbondingRecordRequest;
            fromProtoMsg(message: _227.QueryGetEpochUnbondingRecordRequestProtoMsg): _227.QueryGetEpochUnbondingRecordRequest;
            toProto(message: _227.QueryGetEpochUnbondingRecordRequest): Uint8Array;
            toProtoMsg(message: _227.QueryGetEpochUnbondingRecordRequest): _227.QueryGetEpochUnbondingRecordRequestProtoMsg;
        };
        QueryGetEpochUnbondingRecordResponse: {
            typeUrl: string;
            encode(message: _227.QueryGetEpochUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryGetEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_227.QueryGetEpochUnbondingRecordResponse>): _227.QueryGetEpochUnbondingRecordResponse;
            fromAmino(object: _227.QueryGetEpochUnbondingRecordResponseAmino): _227.QueryGetEpochUnbondingRecordResponse;
            toAmino(message: _227.QueryGetEpochUnbondingRecordResponse): _227.QueryGetEpochUnbondingRecordResponseAmino;
            fromAminoMsg(object: _227.QueryGetEpochUnbondingRecordResponseAminoMsg): _227.QueryGetEpochUnbondingRecordResponse;
            fromProtoMsg(message: _227.QueryGetEpochUnbondingRecordResponseProtoMsg): _227.QueryGetEpochUnbondingRecordResponse;
            toProto(message: _227.QueryGetEpochUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _227.QueryGetEpochUnbondingRecordResponse): _227.QueryGetEpochUnbondingRecordResponseProtoMsg;
        };
        QueryAllEpochUnbondingRecordRequest: {
            typeUrl: string;
            encode(message: _227.QueryAllEpochUnbondingRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryAllEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_227.QueryAllEpochUnbondingRecordRequest>): _227.QueryAllEpochUnbondingRecordRequest;
            fromAmino(object: _227.QueryAllEpochUnbondingRecordRequestAmino): _227.QueryAllEpochUnbondingRecordRequest;
            toAmino(message: _227.QueryAllEpochUnbondingRecordRequest): _227.QueryAllEpochUnbondingRecordRequestAmino;
            fromAminoMsg(object: _227.QueryAllEpochUnbondingRecordRequestAminoMsg): _227.QueryAllEpochUnbondingRecordRequest;
            fromProtoMsg(message: _227.QueryAllEpochUnbondingRecordRequestProtoMsg): _227.QueryAllEpochUnbondingRecordRequest;
            toProto(message: _227.QueryAllEpochUnbondingRecordRequest): Uint8Array;
            toProtoMsg(message: _227.QueryAllEpochUnbondingRecordRequest): _227.QueryAllEpochUnbondingRecordRequestProtoMsg;
        };
        QueryAllEpochUnbondingRecordResponse: {
            typeUrl: string;
            encode(message: _227.QueryAllEpochUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryAllEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_227.QueryAllEpochUnbondingRecordResponse>): _227.QueryAllEpochUnbondingRecordResponse;
            fromAmino(object: _227.QueryAllEpochUnbondingRecordResponseAmino): _227.QueryAllEpochUnbondingRecordResponse;
            toAmino(message: _227.QueryAllEpochUnbondingRecordResponse): _227.QueryAllEpochUnbondingRecordResponseAmino;
            fromAminoMsg(object: _227.QueryAllEpochUnbondingRecordResponseAminoMsg): _227.QueryAllEpochUnbondingRecordResponse;
            fromProtoMsg(message: _227.QueryAllEpochUnbondingRecordResponseProtoMsg): _227.QueryAllEpochUnbondingRecordResponse;
            toProto(message: _227.QueryAllEpochUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _227.QueryAllEpochUnbondingRecordResponse): _227.QueryAllEpochUnbondingRecordResponseProtoMsg;
        };
        QueryLSMDepositRequest: {
            typeUrl: string;
            encode(message: _227.QueryLSMDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryLSMDepositRequest;
            fromPartial(object: Partial<_227.QueryLSMDepositRequest>): _227.QueryLSMDepositRequest;
            fromAmino(object: _227.QueryLSMDepositRequestAmino): _227.QueryLSMDepositRequest;
            toAmino(message: _227.QueryLSMDepositRequest): _227.QueryLSMDepositRequestAmino;
            fromAminoMsg(object: _227.QueryLSMDepositRequestAminoMsg): _227.QueryLSMDepositRequest;
            fromProtoMsg(message: _227.QueryLSMDepositRequestProtoMsg): _227.QueryLSMDepositRequest;
            toProto(message: _227.QueryLSMDepositRequest): Uint8Array;
            toProtoMsg(message: _227.QueryLSMDepositRequest): _227.QueryLSMDepositRequestProtoMsg;
        };
        QueryLSMDepositResponse: {
            typeUrl: string;
            encode(message: _227.QueryLSMDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryLSMDepositResponse;
            fromPartial(object: Partial<_227.QueryLSMDepositResponse>): _227.QueryLSMDepositResponse;
            fromAmino(object: _227.QueryLSMDepositResponseAmino): _227.QueryLSMDepositResponse;
            toAmino(message: _227.QueryLSMDepositResponse): _227.QueryLSMDepositResponseAmino;
            fromAminoMsg(object: _227.QueryLSMDepositResponseAminoMsg): _227.QueryLSMDepositResponse;
            fromProtoMsg(message: _227.QueryLSMDepositResponseProtoMsg): _227.QueryLSMDepositResponse;
            toProto(message: _227.QueryLSMDepositResponse): Uint8Array;
            toProtoMsg(message: _227.QueryLSMDepositResponse): _227.QueryLSMDepositResponseProtoMsg;
        };
        QueryLSMDepositsRequest: {
            typeUrl: string;
            encode(message: _227.QueryLSMDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryLSMDepositsRequest;
            fromPartial(object: Partial<_227.QueryLSMDepositsRequest>): _227.QueryLSMDepositsRequest;
            fromAmino(object: _227.QueryLSMDepositsRequestAmino): _227.QueryLSMDepositsRequest;
            toAmino(message: _227.QueryLSMDepositsRequest): _227.QueryLSMDepositsRequestAmino;
            fromAminoMsg(object: _227.QueryLSMDepositsRequestAminoMsg): _227.QueryLSMDepositsRequest;
            fromProtoMsg(message: _227.QueryLSMDepositsRequestProtoMsg): _227.QueryLSMDepositsRequest;
            toProto(message: _227.QueryLSMDepositsRequest): Uint8Array;
            toProtoMsg(message: _227.QueryLSMDepositsRequest): _227.QueryLSMDepositsRequestProtoMsg;
        };
        QueryLSMDepositsResponse: {
            typeUrl: string;
            encode(message: _227.QueryLSMDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.QueryLSMDepositsResponse;
            fromPartial(object: Partial<_227.QueryLSMDepositsResponse>): _227.QueryLSMDepositsResponse;
            fromAmino(object: _227.QueryLSMDepositsResponseAmino): _227.QueryLSMDepositsResponse;
            toAmino(message: _227.QueryLSMDepositsResponse): _227.QueryLSMDepositsResponseAmino;
            fromAminoMsg(object: _227.QueryLSMDepositsResponseAminoMsg): _227.QueryLSMDepositsResponse;
            fromProtoMsg(message: _227.QueryLSMDepositsResponseProtoMsg): _227.QueryLSMDepositsResponse;
            toProto(message: _227.QueryLSMDepositsResponse): Uint8Array;
            toProtoMsg(message: _227.QueryLSMDepositsResponse): _227.QueryLSMDepositsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _226.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.Params;
            fromPartial(_: Partial<_226.Params>): _226.Params;
            fromAmino(_: _226.ParamsAmino): _226.Params;
            toAmino(_: _226.Params): _226.ParamsAmino;
            fromAminoMsg(object: _226.ParamsAminoMsg): _226.Params;
            fromProtoMsg(message: _226.ParamsProtoMsg): _226.Params;
            toProto(message: _226.Params): Uint8Array;
            toProtoMsg(message: _226.Params): _226.ParamsProtoMsg;
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
        TransferCallback: {
            typeUrl: string;
            encode(message: _224.TransferCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.TransferCallback;
            fromPartial(object: Partial<_224.TransferCallback>): _224.TransferCallback;
            fromAmino(object: _224.TransferCallbackAmino): _224.TransferCallback;
            toAmino(message: _224.TransferCallback): _224.TransferCallbackAmino;
            fromAminoMsg(object: _224.TransferCallbackAminoMsg): _224.TransferCallback;
            fromProtoMsg(message: _224.TransferCallbackProtoMsg): _224.TransferCallback;
            toProto(message: _224.TransferCallback): Uint8Array;
            toProtoMsg(message: _224.TransferCallback): _224.TransferCallbackProtoMsg;
        };
        TransferLSMTokenCallback: {
            typeUrl: string;
            encode(message: _224.TransferLSMTokenCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _224.TransferLSMTokenCallback;
            fromPartial(object: Partial<_224.TransferLSMTokenCallback>): _224.TransferLSMTokenCallback;
            fromAmino(object: _224.TransferLSMTokenCallbackAmino): _224.TransferLSMTokenCallback;
            toAmino(message: _224.TransferLSMTokenCallback): _224.TransferLSMTokenCallbackAmino;
            fromAminoMsg(object: _224.TransferLSMTokenCallbackAminoMsg): _224.TransferLSMTokenCallback;
            fromProtoMsg(message: _224.TransferLSMTokenCallbackProtoMsg): _224.TransferLSMTokenCallback;
            toProto(message: _224.TransferLSMTokenCallback): Uint8Array;
            toProtoMsg(message: _224.TransferLSMTokenCallback): _224.TransferLSMTokenCallbackProtoMsg;
        };
    };
    const stakedym: {
        MsgClientImpl: typeof _408.MsgClientImpl;
        QueryClientImpl: typeof _398.QueryClientImpl;
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
            "/stride.stakedym.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _232.MsgLiquidStake) => _232.MsgLiquidStakeAmino;
                fromAmino: (object: _232.MsgLiquidStakeAmino) => _232.MsgLiquidStake;
            };
            "/stride.stakedym.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _232.MsgRedeemStake) => _232.MsgRedeemStakeAmino;
                fromAmino: (object: _232.MsgRedeemStakeAmino) => _232.MsgRedeemStake;
            };
            "/stride.stakedym.MsgConfirmDelegation": {
                aminoType: string;
                toAmino: (message: _232.MsgConfirmDelegation) => _232.MsgConfirmDelegationAmino;
                fromAmino: (object: _232.MsgConfirmDelegationAmino) => _232.MsgConfirmDelegation;
            };
            "/stride.stakedym.MsgConfirmUndelegation": {
                aminoType: string;
                toAmino: (message: _232.MsgConfirmUndelegation) => _232.MsgConfirmUndelegationAmino;
                fromAmino: (object: _232.MsgConfirmUndelegationAmino) => _232.MsgConfirmUndelegation;
            };
            "/stride.stakedym.MsgConfirmUnbondedTokenSweep": {
                aminoType: string;
                toAmino: (message: _232.MsgConfirmUnbondedTokenSweep) => _232.MsgConfirmUnbondedTokenSweepAmino;
                fromAmino: (object: _232.MsgConfirmUnbondedTokenSweepAmino) => _232.MsgConfirmUnbondedTokenSweep;
            };
            "/stride.stakedym.MsgAdjustDelegatedBalance": {
                aminoType: string;
                toAmino: (message: _232.MsgAdjustDelegatedBalance) => _232.MsgAdjustDelegatedBalanceAmino;
                fromAmino: (object: _232.MsgAdjustDelegatedBalanceAmino) => _232.MsgAdjustDelegatedBalance;
            };
            "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _232.MsgUpdateInnerRedemptionRateBounds) => _232.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _232.MsgUpdateInnerRedemptionRateBoundsAmino) => _232.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.stakedym.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _232.MsgResumeHostZone) => _232.MsgResumeHostZoneAmino;
                fromAmino: (object: _232.MsgResumeHostZoneAmino) => _232.MsgResumeHostZone;
            };
            "/stride.stakedym.MsgRefreshRedemptionRate": {
                aminoType: string;
                toAmino: (message: _232.MsgRefreshRedemptionRate) => _232.MsgRefreshRedemptionRateAmino;
                fromAmino: (object: _232.MsgRefreshRedemptionRateAmino) => _232.MsgRefreshRedemptionRate;
            };
            "/stride.stakedym.MsgOverwriteDelegationRecord": {
                aminoType: string;
                toAmino: (message: _232.MsgOverwriteDelegationRecord) => _232.MsgOverwriteDelegationRecordAmino;
                fromAmino: (object: _232.MsgOverwriteDelegationRecordAmino) => _232.MsgOverwriteDelegationRecord;
            };
            "/stride.stakedym.MsgOverwriteUnbondingRecord": {
                aminoType: string;
                toAmino: (message: _232.MsgOverwriteUnbondingRecord) => _232.MsgOverwriteUnbondingRecordAmino;
                fromAmino: (object: _232.MsgOverwriteUnbondingRecordAmino) => _232.MsgOverwriteUnbondingRecord;
            };
            "/stride.stakedym.MsgOverwriteRedemptionRecord": {
                aminoType: string;
                toAmino: (message: _232.MsgOverwriteRedemptionRecord) => _232.MsgOverwriteRedemptionRecordAmino;
                fromAmino: (object: _232.MsgOverwriteRedemptionRecordAmino) => _232.MsgOverwriteRedemptionRecord;
            };
            "/stride.stakedym.MsgSetOperatorAddress": {
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
    const stakeibc: {
        MsgClientImpl: typeof _409.MsgClientImpl;
        QueryClientImpl: typeof _399.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _242.QueryParamsRequest): Promise<_242.QueryParamsResponse>;
            validators(request: _242.QueryGetValidatorsRequest): Promise<_242.QueryGetValidatorsResponse>;
            hostZone(request: _242.QueryGetHostZoneRequest): Promise<_242.QueryGetHostZoneResponse>;
            hostZoneAll(request?: _242.QueryAllHostZoneRequest): Promise<_242.QueryAllHostZoneResponse>;
            moduleAddress(request: _242.QueryModuleAddressRequest): Promise<_242.QueryModuleAddressResponse>;
            interchainAccountFromAddress(request: _242.QueryInterchainAccountFromAddressRequest): Promise<_242.QueryInterchainAccountFromAddressResponse>;
            epochTracker(request: _242.QueryGetEpochTrackerRequest): Promise<_242.QueryGetEpochTrackerResponse>;
            epochTrackerAll(request?: _242.QueryAllEpochTrackerRequest): Promise<_242.QueryAllEpochTrackerResponse>;
            nextPacketSequence(request: _242.QueryGetNextPacketSequenceRequest): Promise<_242.QueryGetNextPacketSequenceResponse>;
            addressUnbondings(request: _242.QueryAddressUnbondings): Promise<_242.QueryAddressUnbondingsResponse>;
            allTradeRoutes(request?: _242.QueryAllTradeRoutes): Promise<_242.QueryAllTradeRoutesResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _244.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lSMLiquidStake(value: _244.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _244.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                registerHostZone(value: _244.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimUndelegatedTokens(value: _244.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                rebalanceValidators(value: _244.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addValidators(value: _244.MsgAddValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                changeValidatorWeight(value: _244.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteValidator(value: _244.MsgDeleteValidator): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreInterchainAccount(value: _244.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                closeDelegationChannel(value: _244.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateValidatorSharesExchRate(value: _244.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                calibrateDelegation(value: _244.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                clearBalance(value: _244.MsgClearBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _244.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _244.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createTradeRoute(value: _244.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteTradeRoute(value: _244.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateTradeRoute(value: _244.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setCommunityPoolRebate(value: _244.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                toggleTradeController(value: _244.MsgToggleTradeController): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateHostZoneParams(value: _244.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _244.MsgLiquidStake): {
                    typeUrl: string;
                    value: _244.MsgLiquidStake;
                };
                lSMLiquidStake(value: _244.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: _244.MsgLSMLiquidStake;
                };
                redeemStake(value: _244.MsgRedeemStake): {
                    typeUrl: string;
                    value: _244.MsgRedeemStake;
                };
                registerHostZone(value: _244.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _244.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _244.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _244.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _244.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _244.MsgRebalanceValidators;
                };
                addValidators(value: _244.MsgAddValidators): {
                    typeUrl: string;
                    value: _244.MsgAddValidators;
                };
                changeValidatorWeight(value: _244.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: _244.MsgChangeValidatorWeights;
                };
                deleteValidator(value: _244.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _244.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _244.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _244.MsgRestoreInterchainAccount;
                };
                closeDelegationChannel(value: _244.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: _244.MsgCloseDelegationChannel;
                };
                updateValidatorSharesExchRate(value: _244.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _244.MsgUpdateValidatorSharesExchRate;
                };
                calibrateDelegation(value: _244.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: _244.MsgCalibrateDelegation;
                };
                clearBalance(value: _244.MsgClearBalance): {
                    typeUrl: string;
                    value: _244.MsgClearBalance;
                };
                updateInnerRedemptionRateBounds(value: _244.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _244.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _244.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _244.MsgResumeHostZone;
                };
                createTradeRoute(value: _244.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: _244.MsgCreateTradeRoute;
                };
                deleteTradeRoute(value: _244.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: _244.MsgDeleteTradeRoute;
                };
                updateTradeRoute(value: _244.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: _244.MsgUpdateTradeRoute;
                };
                setCommunityPoolRebate(value: _244.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: _244.MsgSetCommunityPoolRebate;
                };
                toggleTradeController(value: _244.MsgToggleTradeController): {
                    typeUrl: string;
                    value: _244.MsgToggleTradeController;
                };
                updateHostZoneParams(value: _244.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: _244.MsgUpdateHostZoneParams;
                };
            };
            fromPartial: {
                liquidStake(value: _244.MsgLiquidStake): {
                    typeUrl: string;
                    value: _244.MsgLiquidStake;
                };
                lSMLiquidStake(value: _244.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: _244.MsgLSMLiquidStake;
                };
                redeemStake(value: _244.MsgRedeemStake): {
                    typeUrl: string;
                    value: _244.MsgRedeemStake;
                };
                registerHostZone(value: _244.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _244.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _244.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _244.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _244.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _244.MsgRebalanceValidators;
                };
                addValidators(value: _244.MsgAddValidators): {
                    typeUrl: string;
                    value: _244.MsgAddValidators;
                };
                changeValidatorWeight(value: _244.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: _244.MsgChangeValidatorWeights;
                };
                deleteValidator(value: _244.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _244.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _244.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _244.MsgRestoreInterchainAccount;
                };
                closeDelegationChannel(value: _244.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: _244.MsgCloseDelegationChannel;
                };
                updateValidatorSharesExchRate(value: _244.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _244.MsgUpdateValidatorSharesExchRate;
                };
                calibrateDelegation(value: _244.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: _244.MsgCalibrateDelegation;
                };
                clearBalance(value: _244.MsgClearBalance): {
                    typeUrl: string;
                    value: _244.MsgClearBalance;
                };
                updateInnerRedemptionRateBounds(value: _244.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _244.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _244.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _244.MsgResumeHostZone;
                };
                createTradeRoute(value: _244.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: _244.MsgCreateTradeRoute;
                };
                deleteTradeRoute(value: _244.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: _244.MsgDeleteTradeRoute;
                };
                updateTradeRoute(value: _244.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: _244.MsgUpdateTradeRoute;
                };
                setCommunityPoolRebate(value: _244.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: _244.MsgSetCommunityPoolRebate;
                };
                toggleTradeController(value: _244.MsgToggleTradeController): {
                    typeUrl: string;
                    value: _244.MsgToggleTradeController;
                };
                updateHostZoneParams(value: _244.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: _244.MsgUpdateHostZoneParams;
                };
            };
        };
        AminoConverter: {
            "/stride.stakeibc.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _244.MsgLiquidStake) => _244.MsgLiquidStakeAmino;
                fromAmino: (object: _244.MsgLiquidStakeAmino) => _244.MsgLiquidStake;
            };
            "/stride.stakeibc.MsgLSMLiquidStake": {
                aminoType: string;
                toAmino: (message: _244.MsgLSMLiquidStake) => _244.MsgLSMLiquidStakeAmino;
                fromAmino: (object: _244.MsgLSMLiquidStakeAmino) => _244.MsgLSMLiquidStake;
            };
            "/stride.stakeibc.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _244.MsgRedeemStake) => _244.MsgRedeemStakeAmino;
                fromAmino: (object: _244.MsgRedeemStakeAmino) => _244.MsgRedeemStake;
            };
            "/stride.stakeibc.MsgRegisterHostZone": {
                aminoType: string;
                toAmino: (message: _244.MsgRegisterHostZone) => _244.MsgRegisterHostZoneAmino;
                fromAmino: (object: _244.MsgRegisterHostZoneAmino) => _244.MsgRegisterHostZone;
            };
            "/stride.stakeibc.MsgClaimUndelegatedTokens": {
                aminoType: string;
                toAmino: (message: _244.MsgClaimUndelegatedTokens) => _244.MsgClaimUndelegatedTokensAmino;
                fromAmino: (object: _244.MsgClaimUndelegatedTokensAmino) => _244.MsgClaimUndelegatedTokens;
            };
            "/stride.stakeibc.MsgRebalanceValidators": {
                aminoType: string;
                toAmino: (message: _244.MsgRebalanceValidators) => _244.MsgRebalanceValidatorsAmino;
                fromAmino: (object: _244.MsgRebalanceValidatorsAmino) => _244.MsgRebalanceValidators;
            };
            "/stride.stakeibc.MsgAddValidators": {
                aminoType: string;
                toAmino: (message: _244.MsgAddValidators) => _244.MsgAddValidatorsAmino;
                fromAmino: (object: _244.MsgAddValidatorsAmino) => _244.MsgAddValidators;
            };
            "/stride.stakeibc.MsgChangeValidatorWeights": {
                aminoType: string;
                toAmino: (message: _244.MsgChangeValidatorWeights) => _244.MsgChangeValidatorWeightsAmino;
                fromAmino: (object: _244.MsgChangeValidatorWeightsAmino) => _244.MsgChangeValidatorWeights;
            };
            "/stride.stakeibc.MsgDeleteValidator": {
                aminoType: string;
                toAmino: (message: _244.MsgDeleteValidator) => _244.MsgDeleteValidatorAmino;
                fromAmino: (object: _244.MsgDeleteValidatorAmino) => _244.MsgDeleteValidator;
            };
            "/stride.stakeibc.MsgRestoreInterchainAccount": {
                aminoType: string;
                toAmino: (message: _244.MsgRestoreInterchainAccount) => _244.MsgRestoreInterchainAccountAmino;
                fromAmino: (object: _244.MsgRestoreInterchainAccountAmino) => _244.MsgRestoreInterchainAccount;
            };
            "/stride.stakeibc.MsgCloseDelegationChannel": {
                aminoType: string;
                toAmino: (message: _244.MsgCloseDelegationChannel) => _244.MsgCloseDelegationChannelAmino;
                fromAmino: (object: _244.MsgCloseDelegationChannelAmino) => _244.MsgCloseDelegationChannel;
            };
            "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
                aminoType: string;
                toAmino: (message: _244.MsgUpdateValidatorSharesExchRate) => _244.MsgUpdateValidatorSharesExchRateAmino;
                fromAmino: (object: _244.MsgUpdateValidatorSharesExchRateAmino) => _244.MsgUpdateValidatorSharesExchRate;
            };
            "/stride.stakeibc.MsgCalibrateDelegation": {
                aminoType: string;
                toAmino: (message: _244.MsgCalibrateDelegation) => _244.MsgCalibrateDelegationAmino;
                fromAmino: (object: _244.MsgCalibrateDelegationAmino) => _244.MsgCalibrateDelegation;
            };
            "/stride.stakeibc.MsgClearBalance": {
                aminoType: string;
                toAmino: (message: _244.MsgClearBalance) => _244.MsgClearBalanceAmino;
                fromAmino: (object: _244.MsgClearBalanceAmino) => _244.MsgClearBalance;
            };
            "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _244.MsgUpdateInnerRedemptionRateBounds) => _244.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _244.MsgUpdateInnerRedemptionRateBoundsAmino) => _244.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.stakeibc.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _244.MsgResumeHostZone) => _244.MsgResumeHostZoneAmino;
                fromAmino: (object: _244.MsgResumeHostZoneAmino) => _244.MsgResumeHostZone;
            };
            "/stride.stakeibc.MsgCreateTradeRoute": {
                aminoType: string;
                toAmino: (message: _244.MsgCreateTradeRoute) => _244.MsgCreateTradeRouteAmino;
                fromAmino: (object: _244.MsgCreateTradeRouteAmino) => _244.MsgCreateTradeRoute;
            };
            "/stride.stakeibc.MsgDeleteTradeRoute": {
                aminoType: string;
                toAmino: (message: _244.MsgDeleteTradeRoute) => _244.MsgDeleteTradeRouteAmino;
                fromAmino: (object: _244.MsgDeleteTradeRouteAmino) => _244.MsgDeleteTradeRoute;
            };
            "/stride.stakeibc.MsgUpdateTradeRoute": {
                aminoType: string;
                toAmino: (message: _244.MsgUpdateTradeRoute) => _244.MsgUpdateTradeRouteAmino;
                fromAmino: (object: _244.MsgUpdateTradeRouteAmino) => _244.MsgUpdateTradeRoute;
            };
            "/stride.stakeibc.MsgSetCommunityPoolRebate": {
                aminoType: string;
                toAmino: (message: _244.MsgSetCommunityPoolRebate) => _244.MsgSetCommunityPoolRebateAmino;
                fromAmino: (object: _244.MsgSetCommunityPoolRebateAmino) => _244.MsgSetCommunityPoolRebate;
            };
            "/stride.stakeibc.MsgToggleTradeController": {
                aminoType: string;
                toAmino: (message: _244.MsgToggleTradeController) => _244.MsgToggleTradeControllerAmino;
                fromAmino: (object: _244.MsgToggleTradeControllerAmino) => _244.MsgToggleTradeController;
            };
            "/stride.stakeibc.MsgUpdateHostZoneParams": {
                aminoType: string;
                toAmino: (message: _244.MsgUpdateHostZoneParams) => _244.MsgUpdateHostZoneParamsAmino;
                fromAmino: (object: _244.MsgUpdateHostZoneParamsAmino) => _244.MsgUpdateHostZoneParams;
            };
        };
        Validator: {
            typeUrl: string;
            encode(message: _245.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _245.Validator;
            fromPartial(object: Partial<_245.Validator>): _245.Validator;
            fromAmino(object: _245.ValidatorAmino): _245.Validator;
            toAmino(message: _245.Validator): _245.ValidatorAmino;
            fromAminoMsg(object: _245.ValidatorAminoMsg): _245.Validator;
            fromProtoMsg(message: _245.ValidatorProtoMsg): _245.Validator;
            toProto(message: _245.Validator): Uint8Array;
            toProtoMsg(message: _245.Validator): _245.ValidatorProtoMsg;
        };
        authzPermissionChangeFromJSON(object: any): _244.AuthzPermissionChange;
        authzPermissionChangeToJSON(object: _244.AuthzPermissionChange): string;
        AuthzPermissionChange: typeof _244.AuthzPermissionChange;
        AuthzPermissionChangeSDKType: typeof _244.AuthzPermissionChange;
        AuthzPermissionChangeAmino: typeof _244.AuthzPermissionChange;
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _244.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_244.MsgUpdateInnerRedemptionRateBounds>): _244.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _244.MsgUpdateInnerRedemptionRateBoundsAmino): _244.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _244.MsgUpdateInnerRedemptionRateBounds): _244.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _244.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _244.MsgUpdateInnerRedemptionRateBounds;
            fromProtoMsg(message: _244.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _244.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _244.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _244.MsgUpdateInnerRedemptionRateBounds): _244.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _244.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_244.MsgUpdateInnerRedemptionRateBoundsResponse>): _244.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _244.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _244.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _244.MsgUpdateInnerRedemptionRateBoundsResponse): _244.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _244.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _244.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _244.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _244.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _244.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _244.MsgUpdateInnerRedemptionRateBoundsResponse): _244.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _244.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgLiquidStake;
            fromPartial(object: Partial<_244.MsgLiquidStake>): _244.MsgLiquidStake;
            fromAmino(object: _244.MsgLiquidStakeAmino): _244.MsgLiquidStake;
            toAmino(message: _244.MsgLiquidStake): _244.MsgLiquidStakeAmino;
            fromAminoMsg(object: _244.MsgLiquidStakeAminoMsg): _244.MsgLiquidStake;
            toAminoMsg(message: _244.MsgLiquidStake): _244.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _244.MsgLiquidStakeProtoMsg): _244.MsgLiquidStake;
            toProto(message: _244.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _244.MsgLiquidStake): _244.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _244.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_244.MsgLiquidStakeResponse>): _244.MsgLiquidStakeResponse;
            fromAmino(object: _244.MsgLiquidStakeResponseAmino): _244.MsgLiquidStakeResponse;
            toAmino(message: _244.MsgLiquidStakeResponse): _244.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _244.MsgLiquidStakeResponseAminoMsg): _244.MsgLiquidStakeResponse;
            fromProtoMsg(message: _244.MsgLiquidStakeResponseProtoMsg): _244.MsgLiquidStakeResponse;
            toProto(message: _244.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _244.MsgLiquidStakeResponse): _244.MsgLiquidStakeResponseProtoMsg;
        };
        MsgLSMLiquidStake: {
            typeUrl: string;
            encode(message: _244.MsgLSMLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgLSMLiquidStake;
            fromPartial(object: Partial<_244.MsgLSMLiquidStake>): _244.MsgLSMLiquidStake;
            fromAmino(object: _244.MsgLSMLiquidStakeAmino): _244.MsgLSMLiquidStake;
            toAmino(message: _244.MsgLSMLiquidStake): _244.MsgLSMLiquidStakeAmino;
            fromAminoMsg(object: _244.MsgLSMLiquidStakeAminoMsg): _244.MsgLSMLiquidStake;
            toAminoMsg(message: _244.MsgLSMLiquidStake): _244.MsgLSMLiquidStakeAminoMsg;
            fromProtoMsg(message: _244.MsgLSMLiquidStakeProtoMsg): _244.MsgLSMLiquidStake;
            toProto(message: _244.MsgLSMLiquidStake): Uint8Array;
            toProtoMsg(message: _244.MsgLSMLiquidStake): _244.MsgLSMLiquidStakeProtoMsg;
        };
        MsgLSMLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _244.MsgLSMLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgLSMLiquidStakeResponse;
            fromPartial(object: Partial<_244.MsgLSMLiquidStakeResponse>): _244.MsgLSMLiquidStakeResponse;
            fromAmino(object: _244.MsgLSMLiquidStakeResponseAmino): _244.MsgLSMLiquidStakeResponse;
            toAmino(message: _244.MsgLSMLiquidStakeResponse): _244.MsgLSMLiquidStakeResponseAmino;
            fromAminoMsg(object: _244.MsgLSMLiquidStakeResponseAminoMsg): _244.MsgLSMLiquidStakeResponse;
            fromProtoMsg(message: _244.MsgLSMLiquidStakeResponseProtoMsg): _244.MsgLSMLiquidStakeResponse;
            toProto(message: _244.MsgLSMLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _244.MsgLSMLiquidStakeResponse): _244.MsgLSMLiquidStakeResponseProtoMsg;
        };
        MsgClearBalance: {
            typeUrl: string;
            encode(message: _244.MsgClearBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgClearBalance;
            fromPartial(object: Partial<_244.MsgClearBalance>): _244.MsgClearBalance;
            fromAmino(object: _244.MsgClearBalanceAmino): _244.MsgClearBalance;
            toAmino(message: _244.MsgClearBalance): _244.MsgClearBalanceAmino;
            fromAminoMsg(object: _244.MsgClearBalanceAminoMsg): _244.MsgClearBalance;
            toAminoMsg(message: _244.MsgClearBalance): _244.MsgClearBalanceAminoMsg;
            fromProtoMsg(message: _244.MsgClearBalanceProtoMsg): _244.MsgClearBalance;
            toProto(message: _244.MsgClearBalance): Uint8Array;
            toProtoMsg(message: _244.MsgClearBalance): _244.MsgClearBalanceProtoMsg;
        };
        MsgClearBalanceResponse: {
            typeUrl: string;
            encode(_: _244.MsgClearBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgClearBalanceResponse;
            fromPartial(_: Partial<_244.MsgClearBalanceResponse>): _244.MsgClearBalanceResponse;
            fromAmino(_: _244.MsgClearBalanceResponseAmino): _244.MsgClearBalanceResponse;
            toAmino(_: _244.MsgClearBalanceResponse): _244.MsgClearBalanceResponseAmino;
            fromAminoMsg(object: _244.MsgClearBalanceResponseAminoMsg): _244.MsgClearBalanceResponse;
            fromProtoMsg(message: _244.MsgClearBalanceResponseProtoMsg): _244.MsgClearBalanceResponse;
            toProto(message: _244.MsgClearBalanceResponse): Uint8Array;
            toProtoMsg(message: _244.MsgClearBalanceResponse): _244.MsgClearBalanceResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _244.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgRedeemStake;
            fromPartial(object: Partial<_244.MsgRedeemStake>): _244.MsgRedeemStake;
            fromAmino(object: _244.MsgRedeemStakeAmino): _244.MsgRedeemStake;
            toAmino(message: _244.MsgRedeemStake): _244.MsgRedeemStakeAmino;
            fromAminoMsg(object: _244.MsgRedeemStakeAminoMsg): _244.MsgRedeemStake;
            toAminoMsg(message: _244.MsgRedeemStake): _244.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _244.MsgRedeemStakeProtoMsg): _244.MsgRedeemStake;
            toProto(message: _244.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _244.MsgRedeemStake): _244.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(_: _244.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgRedeemStakeResponse;
            fromPartial(_: Partial<_244.MsgRedeemStakeResponse>): _244.MsgRedeemStakeResponse;
            fromAmino(_: _244.MsgRedeemStakeResponseAmino): _244.MsgRedeemStakeResponse;
            toAmino(_: _244.MsgRedeemStakeResponse): _244.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _244.MsgRedeemStakeResponseAminoMsg): _244.MsgRedeemStakeResponse;
            fromProtoMsg(message: _244.MsgRedeemStakeResponseProtoMsg): _244.MsgRedeemStakeResponse;
            toProto(message: _244.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _244.MsgRedeemStakeResponse): _244.MsgRedeemStakeResponseProtoMsg;
        };
        MsgRegisterHostZone: {
            typeUrl: string;
            encode(message: _244.MsgRegisterHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgRegisterHostZone;
            fromPartial(object: Partial<_244.MsgRegisterHostZone>): _244.MsgRegisterHostZone;
            fromAmino(object: _244.MsgRegisterHostZoneAmino): _244.MsgRegisterHostZone;
            toAmino(message: _244.MsgRegisterHostZone): _244.MsgRegisterHostZoneAmino;
            fromAminoMsg(object: _244.MsgRegisterHostZoneAminoMsg): _244.MsgRegisterHostZone;
            toAminoMsg(message: _244.MsgRegisterHostZone): _244.MsgRegisterHostZoneAminoMsg;
            fromProtoMsg(message: _244.MsgRegisterHostZoneProtoMsg): _244.MsgRegisterHostZone;
            toProto(message: _244.MsgRegisterHostZone): Uint8Array;
            toProtoMsg(message: _244.MsgRegisterHostZone): _244.MsgRegisterHostZoneProtoMsg;
        };
        MsgRegisterHostZoneResponse: {
            typeUrl: string;
            encode(_: _244.MsgRegisterHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgRegisterHostZoneResponse;
            fromPartial(_: Partial<_244.MsgRegisterHostZoneResponse>): _244.MsgRegisterHostZoneResponse;
            fromAmino(_: _244.MsgRegisterHostZoneResponseAmino): _244.MsgRegisterHostZoneResponse;
            toAmino(_: _244.MsgRegisterHostZoneResponse): _244.MsgRegisterHostZoneResponseAmino;
            fromAminoMsg(object: _244.MsgRegisterHostZoneResponseAminoMsg): _244.MsgRegisterHostZoneResponse;
            fromProtoMsg(message: _244.MsgRegisterHostZoneResponseProtoMsg): _244.MsgRegisterHostZoneResponse;
            toProto(message: _244.MsgRegisterHostZoneResponse): Uint8Array;
            toProtoMsg(message: _244.MsgRegisterHostZoneResponse): _244.MsgRegisterHostZoneResponseProtoMsg;
        };
        MsgClaimUndelegatedTokens: {
            typeUrl: string;
            encode(message: _244.MsgClaimUndelegatedTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgClaimUndelegatedTokens;
            fromPartial(object: Partial<_244.MsgClaimUndelegatedTokens>): _244.MsgClaimUndelegatedTokens;
            fromAmino(object: _244.MsgClaimUndelegatedTokensAmino): _244.MsgClaimUndelegatedTokens;
            toAmino(message: _244.MsgClaimUndelegatedTokens): _244.MsgClaimUndelegatedTokensAmino;
            fromAminoMsg(object: _244.MsgClaimUndelegatedTokensAminoMsg): _244.MsgClaimUndelegatedTokens;
            toAminoMsg(message: _244.MsgClaimUndelegatedTokens): _244.MsgClaimUndelegatedTokensAminoMsg;
            fromProtoMsg(message: _244.MsgClaimUndelegatedTokensProtoMsg): _244.MsgClaimUndelegatedTokens;
            toProto(message: _244.MsgClaimUndelegatedTokens): Uint8Array;
            toProtoMsg(message: _244.MsgClaimUndelegatedTokens): _244.MsgClaimUndelegatedTokensProtoMsg;
        };
        MsgClaimUndelegatedTokensResponse: {
            typeUrl: string;
            encode(_: _244.MsgClaimUndelegatedTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgClaimUndelegatedTokensResponse;
            fromPartial(_: Partial<_244.MsgClaimUndelegatedTokensResponse>): _244.MsgClaimUndelegatedTokensResponse;
            fromAmino(_: _244.MsgClaimUndelegatedTokensResponseAmino): _244.MsgClaimUndelegatedTokensResponse;
            toAmino(_: _244.MsgClaimUndelegatedTokensResponse): _244.MsgClaimUndelegatedTokensResponseAmino;
            fromAminoMsg(object: _244.MsgClaimUndelegatedTokensResponseAminoMsg): _244.MsgClaimUndelegatedTokensResponse;
            fromProtoMsg(message: _244.MsgClaimUndelegatedTokensResponseProtoMsg): _244.MsgClaimUndelegatedTokensResponse;
            toProto(message: _244.MsgClaimUndelegatedTokensResponse): Uint8Array;
            toProtoMsg(message: _244.MsgClaimUndelegatedTokensResponse): _244.MsgClaimUndelegatedTokensResponseProtoMsg;
        };
        MsgRebalanceValidators: {
            typeUrl: string;
            encode(message: _244.MsgRebalanceValidators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgRebalanceValidators;
            fromPartial(object: Partial<_244.MsgRebalanceValidators>): _244.MsgRebalanceValidators;
            fromAmino(object: _244.MsgRebalanceValidatorsAmino): _244.MsgRebalanceValidators;
            toAmino(message: _244.MsgRebalanceValidators): _244.MsgRebalanceValidatorsAmino;
            fromAminoMsg(object: _244.MsgRebalanceValidatorsAminoMsg): _244.MsgRebalanceValidators;
            toAminoMsg(message: _244.MsgRebalanceValidators): _244.MsgRebalanceValidatorsAminoMsg;
            fromProtoMsg(message: _244.MsgRebalanceValidatorsProtoMsg): _244.MsgRebalanceValidators;
            toProto(message: _244.MsgRebalanceValidators): Uint8Array;
            toProtoMsg(message: _244.MsgRebalanceValidators): _244.MsgRebalanceValidatorsProtoMsg;
        };
        MsgRebalanceValidatorsResponse: {
            typeUrl: string;
            encode(_: _244.MsgRebalanceValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgRebalanceValidatorsResponse;
            fromPartial(_: Partial<_244.MsgRebalanceValidatorsResponse>): _244.MsgRebalanceValidatorsResponse;
            fromAmino(_: _244.MsgRebalanceValidatorsResponseAmino): _244.MsgRebalanceValidatorsResponse;
            toAmino(_: _244.MsgRebalanceValidatorsResponse): _244.MsgRebalanceValidatorsResponseAmino;
            fromAminoMsg(object: _244.MsgRebalanceValidatorsResponseAminoMsg): _244.MsgRebalanceValidatorsResponse;
            fromProtoMsg(message: _244.MsgRebalanceValidatorsResponseProtoMsg): _244.MsgRebalanceValidatorsResponse;
            toProto(message: _244.MsgRebalanceValidatorsResponse): Uint8Array;
            toProtoMsg(message: _244.MsgRebalanceValidatorsResponse): _244.MsgRebalanceValidatorsResponseProtoMsg;
        };
        MsgAddValidators: {
            typeUrl: string;
            encode(message: _244.MsgAddValidators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgAddValidators;
            fromPartial(object: Partial<_244.MsgAddValidators>): _244.MsgAddValidators;
            fromAmino(object: _244.MsgAddValidatorsAmino): _244.MsgAddValidators;
            toAmino(message: _244.MsgAddValidators): _244.MsgAddValidatorsAmino;
            fromAminoMsg(object: _244.MsgAddValidatorsAminoMsg): _244.MsgAddValidators;
            fromProtoMsg(message: _244.MsgAddValidatorsProtoMsg): _244.MsgAddValidators;
            toProto(message: _244.MsgAddValidators): Uint8Array;
            toProtoMsg(message: _244.MsgAddValidators): _244.MsgAddValidatorsProtoMsg;
        };
        MsgAddValidatorsResponse: {
            typeUrl: string;
            encode(_: _244.MsgAddValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgAddValidatorsResponse;
            fromPartial(_: Partial<_244.MsgAddValidatorsResponse>): _244.MsgAddValidatorsResponse;
            fromAmino(_: _244.MsgAddValidatorsResponseAmino): _244.MsgAddValidatorsResponse;
            toAmino(_: _244.MsgAddValidatorsResponse): _244.MsgAddValidatorsResponseAmino;
            fromAminoMsg(object: _244.MsgAddValidatorsResponseAminoMsg): _244.MsgAddValidatorsResponse;
            fromProtoMsg(message: _244.MsgAddValidatorsResponseProtoMsg): _244.MsgAddValidatorsResponse;
            toProto(message: _244.MsgAddValidatorsResponse): Uint8Array;
            toProtoMsg(message: _244.MsgAddValidatorsResponse): _244.MsgAddValidatorsResponseProtoMsg;
        };
        ValidatorWeight: {
            typeUrl: string;
            encode(message: _244.ValidatorWeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.ValidatorWeight;
            fromPartial(object: Partial<_244.ValidatorWeight>): _244.ValidatorWeight;
            fromAmino(object: _244.ValidatorWeightAmino): _244.ValidatorWeight;
            toAmino(message: _244.ValidatorWeight): _244.ValidatorWeightAmino;
            fromAminoMsg(object: _244.ValidatorWeightAminoMsg): _244.ValidatorWeight;
            fromProtoMsg(message: _244.ValidatorWeightProtoMsg): _244.ValidatorWeight;
            toProto(message: _244.ValidatorWeight): Uint8Array;
            toProtoMsg(message: _244.ValidatorWeight): _244.ValidatorWeightProtoMsg;
        };
        MsgChangeValidatorWeights: {
            typeUrl: string;
            encode(message: _244.MsgChangeValidatorWeights, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgChangeValidatorWeights;
            fromPartial(object: Partial<_244.MsgChangeValidatorWeights>): _244.MsgChangeValidatorWeights;
            fromAmino(object: _244.MsgChangeValidatorWeightsAmino): _244.MsgChangeValidatorWeights;
            toAmino(message: _244.MsgChangeValidatorWeights): _244.MsgChangeValidatorWeightsAmino;
            fromAminoMsg(object: _244.MsgChangeValidatorWeightsAminoMsg): _244.MsgChangeValidatorWeights;
            fromProtoMsg(message: _244.MsgChangeValidatorWeightsProtoMsg): _244.MsgChangeValidatorWeights;
            toProto(message: _244.MsgChangeValidatorWeights): Uint8Array;
            toProtoMsg(message: _244.MsgChangeValidatorWeights): _244.MsgChangeValidatorWeightsProtoMsg;
        };
        MsgChangeValidatorWeightsResponse: {
            typeUrl: string;
            encode(_: _244.MsgChangeValidatorWeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgChangeValidatorWeightsResponse;
            fromPartial(_: Partial<_244.MsgChangeValidatorWeightsResponse>): _244.MsgChangeValidatorWeightsResponse;
            fromAmino(_: _244.MsgChangeValidatorWeightsResponseAmino): _244.MsgChangeValidatorWeightsResponse;
            toAmino(_: _244.MsgChangeValidatorWeightsResponse): _244.MsgChangeValidatorWeightsResponseAmino;
            fromAminoMsg(object: _244.MsgChangeValidatorWeightsResponseAminoMsg): _244.MsgChangeValidatorWeightsResponse;
            fromProtoMsg(message: _244.MsgChangeValidatorWeightsResponseProtoMsg): _244.MsgChangeValidatorWeightsResponse;
            toProto(message: _244.MsgChangeValidatorWeightsResponse): Uint8Array;
            toProtoMsg(message: _244.MsgChangeValidatorWeightsResponse): _244.MsgChangeValidatorWeightsResponseProtoMsg;
        };
        MsgDeleteValidator: {
            typeUrl: string;
            encode(message: _244.MsgDeleteValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgDeleteValidator;
            fromPartial(object: Partial<_244.MsgDeleteValidator>): _244.MsgDeleteValidator;
            fromAmino(object: _244.MsgDeleteValidatorAmino): _244.MsgDeleteValidator;
            toAmino(message: _244.MsgDeleteValidator): _244.MsgDeleteValidatorAmino;
            fromAminoMsg(object: _244.MsgDeleteValidatorAminoMsg): _244.MsgDeleteValidator;
            toAminoMsg(message: _244.MsgDeleteValidator): _244.MsgDeleteValidatorAminoMsg;
            fromProtoMsg(message: _244.MsgDeleteValidatorProtoMsg): _244.MsgDeleteValidator;
            toProto(message: _244.MsgDeleteValidator): Uint8Array;
            toProtoMsg(message: _244.MsgDeleteValidator): _244.MsgDeleteValidatorProtoMsg;
        };
        MsgDeleteValidatorResponse: {
            typeUrl: string;
            encode(_: _244.MsgDeleteValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgDeleteValidatorResponse;
            fromPartial(_: Partial<_244.MsgDeleteValidatorResponse>): _244.MsgDeleteValidatorResponse;
            fromAmino(_: _244.MsgDeleteValidatorResponseAmino): _244.MsgDeleteValidatorResponse;
            toAmino(_: _244.MsgDeleteValidatorResponse): _244.MsgDeleteValidatorResponseAmino;
            fromAminoMsg(object: _244.MsgDeleteValidatorResponseAminoMsg): _244.MsgDeleteValidatorResponse;
            fromProtoMsg(message: _244.MsgDeleteValidatorResponseProtoMsg): _244.MsgDeleteValidatorResponse;
            toProto(message: _244.MsgDeleteValidatorResponse): Uint8Array;
            toProtoMsg(message: _244.MsgDeleteValidatorResponse): _244.MsgDeleteValidatorResponseProtoMsg;
        };
        MsgRestoreInterchainAccount: {
            typeUrl: string;
            encode(message: _244.MsgRestoreInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgRestoreInterchainAccount;
            fromPartial(object: Partial<_244.MsgRestoreInterchainAccount>): _244.MsgRestoreInterchainAccount;
            fromAmino(object: _244.MsgRestoreInterchainAccountAmino): _244.MsgRestoreInterchainAccount;
            toAmino(message: _244.MsgRestoreInterchainAccount): _244.MsgRestoreInterchainAccountAmino;
            fromAminoMsg(object: _244.MsgRestoreInterchainAccountAminoMsg): _244.MsgRestoreInterchainAccount;
            toAminoMsg(message: _244.MsgRestoreInterchainAccount): _244.MsgRestoreInterchainAccountAminoMsg;
            fromProtoMsg(message: _244.MsgRestoreInterchainAccountProtoMsg): _244.MsgRestoreInterchainAccount;
            toProto(message: _244.MsgRestoreInterchainAccount): Uint8Array;
            toProtoMsg(message: _244.MsgRestoreInterchainAccount): _244.MsgRestoreInterchainAccountProtoMsg;
        };
        MsgRestoreInterchainAccountResponse: {
            typeUrl: string;
            encode(_: _244.MsgRestoreInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgRestoreInterchainAccountResponse;
            fromPartial(_: Partial<_244.MsgRestoreInterchainAccountResponse>): _244.MsgRestoreInterchainAccountResponse;
            fromAmino(_: _244.MsgRestoreInterchainAccountResponseAmino): _244.MsgRestoreInterchainAccountResponse;
            toAmino(_: _244.MsgRestoreInterchainAccountResponse): _244.MsgRestoreInterchainAccountResponseAmino;
            fromAminoMsg(object: _244.MsgRestoreInterchainAccountResponseAminoMsg): _244.MsgRestoreInterchainAccountResponse;
            fromProtoMsg(message: _244.MsgRestoreInterchainAccountResponseProtoMsg): _244.MsgRestoreInterchainAccountResponse;
            toProto(message: _244.MsgRestoreInterchainAccountResponse): Uint8Array;
            toProtoMsg(message: _244.MsgRestoreInterchainAccountResponse): _244.MsgRestoreInterchainAccountResponseProtoMsg;
        };
        MsgCloseDelegationChannel: {
            typeUrl: string;
            encode(message: _244.MsgCloseDelegationChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgCloseDelegationChannel;
            fromPartial(object: Partial<_244.MsgCloseDelegationChannel>): _244.MsgCloseDelegationChannel;
            fromAmino(object: _244.MsgCloseDelegationChannelAmino): _244.MsgCloseDelegationChannel;
            toAmino(message: _244.MsgCloseDelegationChannel): _244.MsgCloseDelegationChannelAmino;
            fromAminoMsg(object: _244.MsgCloseDelegationChannelAminoMsg): _244.MsgCloseDelegationChannel;
            fromProtoMsg(message: _244.MsgCloseDelegationChannelProtoMsg): _244.MsgCloseDelegationChannel;
            toProto(message: _244.MsgCloseDelegationChannel): Uint8Array;
            toProtoMsg(message: _244.MsgCloseDelegationChannel): _244.MsgCloseDelegationChannelProtoMsg;
        };
        MsgCloseDelegationChannelResponse: {
            typeUrl: string;
            encode(_: _244.MsgCloseDelegationChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgCloseDelegationChannelResponse;
            fromPartial(_: Partial<_244.MsgCloseDelegationChannelResponse>): _244.MsgCloseDelegationChannelResponse;
            fromAmino(_: _244.MsgCloseDelegationChannelResponseAmino): _244.MsgCloseDelegationChannelResponse;
            toAmino(_: _244.MsgCloseDelegationChannelResponse): _244.MsgCloseDelegationChannelResponseAmino;
            fromAminoMsg(object: _244.MsgCloseDelegationChannelResponseAminoMsg): _244.MsgCloseDelegationChannelResponse;
            fromProtoMsg(message: _244.MsgCloseDelegationChannelResponseProtoMsg): _244.MsgCloseDelegationChannelResponse;
            toProto(message: _244.MsgCloseDelegationChannelResponse): Uint8Array;
            toProtoMsg(message: _244.MsgCloseDelegationChannelResponse): _244.MsgCloseDelegationChannelResponseProtoMsg;
        };
        MsgUpdateValidatorSharesExchRate: {
            typeUrl: string;
            encode(message: _244.MsgUpdateValidatorSharesExchRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgUpdateValidatorSharesExchRate;
            fromPartial(object: Partial<_244.MsgUpdateValidatorSharesExchRate>): _244.MsgUpdateValidatorSharesExchRate;
            fromAmino(object: _244.MsgUpdateValidatorSharesExchRateAmino): _244.MsgUpdateValidatorSharesExchRate;
            toAmino(message: _244.MsgUpdateValidatorSharesExchRate): _244.MsgUpdateValidatorSharesExchRateAmino;
            fromAminoMsg(object: _244.MsgUpdateValidatorSharesExchRateAminoMsg): _244.MsgUpdateValidatorSharesExchRate;
            toAminoMsg(message: _244.MsgUpdateValidatorSharesExchRate): _244.MsgUpdateValidatorSharesExchRateAminoMsg;
            fromProtoMsg(message: _244.MsgUpdateValidatorSharesExchRateProtoMsg): _244.MsgUpdateValidatorSharesExchRate;
            toProto(message: _244.MsgUpdateValidatorSharesExchRate): Uint8Array;
            toProtoMsg(message: _244.MsgUpdateValidatorSharesExchRate): _244.MsgUpdateValidatorSharesExchRateProtoMsg;
        };
        MsgUpdateValidatorSharesExchRateResponse: {
            typeUrl: string;
            encode(_: _244.MsgUpdateValidatorSharesExchRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgUpdateValidatorSharesExchRateResponse;
            fromPartial(_: Partial<_244.MsgUpdateValidatorSharesExchRateResponse>): _244.MsgUpdateValidatorSharesExchRateResponse;
            fromAmino(_: _244.MsgUpdateValidatorSharesExchRateResponseAmino): _244.MsgUpdateValidatorSharesExchRateResponse;
            toAmino(_: _244.MsgUpdateValidatorSharesExchRateResponse): _244.MsgUpdateValidatorSharesExchRateResponseAmino;
            fromAminoMsg(object: _244.MsgUpdateValidatorSharesExchRateResponseAminoMsg): _244.MsgUpdateValidatorSharesExchRateResponse;
            fromProtoMsg(message: _244.MsgUpdateValidatorSharesExchRateResponseProtoMsg): _244.MsgUpdateValidatorSharesExchRateResponse;
            toProto(message: _244.MsgUpdateValidatorSharesExchRateResponse): Uint8Array;
            toProtoMsg(message: _244.MsgUpdateValidatorSharesExchRateResponse): _244.MsgUpdateValidatorSharesExchRateResponseProtoMsg;
        };
        MsgCalibrateDelegation: {
            typeUrl: string;
            encode(message: _244.MsgCalibrateDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgCalibrateDelegation;
            fromPartial(object: Partial<_244.MsgCalibrateDelegation>): _244.MsgCalibrateDelegation;
            fromAmino(object: _244.MsgCalibrateDelegationAmino): _244.MsgCalibrateDelegation;
            toAmino(message: _244.MsgCalibrateDelegation): _244.MsgCalibrateDelegationAmino;
            fromAminoMsg(object: _244.MsgCalibrateDelegationAminoMsg): _244.MsgCalibrateDelegation;
            fromProtoMsg(message: _244.MsgCalibrateDelegationProtoMsg): _244.MsgCalibrateDelegation;
            toProto(message: _244.MsgCalibrateDelegation): Uint8Array;
            toProtoMsg(message: _244.MsgCalibrateDelegation): _244.MsgCalibrateDelegationProtoMsg;
        };
        MsgCalibrateDelegationResponse: {
            typeUrl: string;
            encode(_: _244.MsgCalibrateDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgCalibrateDelegationResponse;
            fromPartial(_: Partial<_244.MsgCalibrateDelegationResponse>): _244.MsgCalibrateDelegationResponse;
            fromAmino(_: _244.MsgCalibrateDelegationResponseAmino): _244.MsgCalibrateDelegationResponse;
            toAmino(_: _244.MsgCalibrateDelegationResponse): _244.MsgCalibrateDelegationResponseAmino;
            fromAminoMsg(object: _244.MsgCalibrateDelegationResponseAminoMsg): _244.MsgCalibrateDelegationResponse;
            fromProtoMsg(message: _244.MsgCalibrateDelegationResponseProtoMsg): _244.MsgCalibrateDelegationResponse;
            toProto(message: _244.MsgCalibrateDelegationResponse): Uint8Array;
            toProtoMsg(message: _244.MsgCalibrateDelegationResponse): _244.MsgCalibrateDelegationResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _244.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgResumeHostZone;
            fromPartial(object: Partial<_244.MsgResumeHostZone>): _244.MsgResumeHostZone;
            fromAmino(object: _244.MsgResumeHostZoneAmino): _244.MsgResumeHostZone;
            toAmino(message: _244.MsgResumeHostZone): _244.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _244.MsgResumeHostZoneAminoMsg): _244.MsgResumeHostZone;
            fromProtoMsg(message: _244.MsgResumeHostZoneProtoMsg): _244.MsgResumeHostZone;
            toProto(message: _244.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _244.MsgResumeHostZone): _244.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _244.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_244.MsgResumeHostZoneResponse>): _244.MsgResumeHostZoneResponse;
            fromAmino(_: _244.MsgResumeHostZoneResponseAmino): _244.MsgResumeHostZoneResponse;
            toAmino(_: _244.MsgResumeHostZoneResponse): _244.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _244.MsgResumeHostZoneResponseAminoMsg): _244.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _244.MsgResumeHostZoneResponseProtoMsg): _244.MsgResumeHostZoneResponse;
            toProto(message: _244.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _244.MsgResumeHostZoneResponse): _244.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgCreateTradeRoute: {
            typeUrl: string;
            encode(message: _244.MsgCreateTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgCreateTradeRoute;
            fromPartial(object: Partial<_244.MsgCreateTradeRoute>): _244.MsgCreateTradeRoute;
            fromAmino(object: _244.MsgCreateTradeRouteAmino): _244.MsgCreateTradeRoute;
            toAmino(message: _244.MsgCreateTradeRoute): _244.MsgCreateTradeRouteAmino;
            fromAminoMsg(object: _244.MsgCreateTradeRouteAminoMsg): _244.MsgCreateTradeRoute;
            toAminoMsg(message: _244.MsgCreateTradeRoute): _244.MsgCreateTradeRouteAminoMsg;
            fromProtoMsg(message: _244.MsgCreateTradeRouteProtoMsg): _244.MsgCreateTradeRoute;
            toProto(message: _244.MsgCreateTradeRoute): Uint8Array;
            toProtoMsg(message: _244.MsgCreateTradeRoute): _244.MsgCreateTradeRouteProtoMsg;
        };
        MsgCreateTradeRouteResponse: {
            typeUrl: string;
            encode(_: _244.MsgCreateTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgCreateTradeRouteResponse;
            fromPartial(_: Partial<_244.MsgCreateTradeRouteResponse>): _244.MsgCreateTradeRouteResponse;
            fromAmino(_: _244.MsgCreateTradeRouteResponseAmino): _244.MsgCreateTradeRouteResponse;
            toAmino(_: _244.MsgCreateTradeRouteResponse): _244.MsgCreateTradeRouteResponseAmino;
            fromAminoMsg(object: _244.MsgCreateTradeRouteResponseAminoMsg): _244.MsgCreateTradeRouteResponse;
            fromProtoMsg(message: _244.MsgCreateTradeRouteResponseProtoMsg): _244.MsgCreateTradeRouteResponse;
            toProto(message: _244.MsgCreateTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _244.MsgCreateTradeRouteResponse): _244.MsgCreateTradeRouteResponseProtoMsg;
        };
        MsgDeleteTradeRoute: {
            typeUrl: string;
            encode(message: _244.MsgDeleteTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgDeleteTradeRoute;
            fromPartial(object: Partial<_244.MsgDeleteTradeRoute>): _244.MsgDeleteTradeRoute;
            fromAmino(object: _244.MsgDeleteTradeRouteAmino): _244.MsgDeleteTradeRoute;
            toAmino(message: _244.MsgDeleteTradeRoute): _244.MsgDeleteTradeRouteAmino;
            fromAminoMsg(object: _244.MsgDeleteTradeRouteAminoMsg): _244.MsgDeleteTradeRoute;
            toAminoMsg(message: _244.MsgDeleteTradeRoute): _244.MsgDeleteTradeRouteAminoMsg;
            fromProtoMsg(message: _244.MsgDeleteTradeRouteProtoMsg): _244.MsgDeleteTradeRoute;
            toProto(message: _244.MsgDeleteTradeRoute): Uint8Array;
            toProtoMsg(message: _244.MsgDeleteTradeRoute): _244.MsgDeleteTradeRouteProtoMsg;
        };
        MsgDeleteTradeRouteResponse: {
            typeUrl: string;
            encode(_: _244.MsgDeleteTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgDeleteTradeRouteResponse;
            fromPartial(_: Partial<_244.MsgDeleteTradeRouteResponse>): _244.MsgDeleteTradeRouteResponse;
            fromAmino(_: _244.MsgDeleteTradeRouteResponseAmino): _244.MsgDeleteTradeRouteResponse;
            toAmino(_: _244.MsgDeleteTradeRouteResponse): _244.MsgDeleteTradeRouteResponseAmino;
            fromAminoMsg(object: _244.MsgDeleteTradeRouteResponseAminoMsg): _244.MsgDeleteTradeRouteResponse;
            fromProtoMsg(message: _244.MsgDeleteTradeRouteResponseProtoMsg): _244.MsgDeleteTradeRouteResponse;
            toProto(message: _244.MsgDeleteTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _244.MsgDeleteTradeRouteResponse): _244.MsgDeleteTradeRouteResponseProtoMsg;
        };
        MsgUpdateTradeRoute: {
            typeUrl: string;
            encode(message: _244.MsgUpdateTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgUpdateTradeRoute;
            fromPartial(object: Partial<_244.MsgUpdateTradeRoute>): _244.MsgUpdateTradeRoute;
            fromAmino(object: _244.MsgUpdateTradeRouteAmino): _244.MsgUpdateTradeRoute;
            toAmino(message: _244.MsgUpdateTradeRoute): _244.MsgUpdateTradeRouteAmino;
            fromAminoMsg(object: _244.MsgUpdateTradeRouteAminoMsg): _244.MsgUpdateTradeRoute;
            toAminoMsg(message: _244.MsgUpdateTradeRoute): _244.MsgUpdateTradeRouteAminoMsg;
            fromProtoMsg(message: _244.MsgUpdateTradeRouteProtoMsg): _244.MsgUpdateTradeRoute;
            toProto(message: _244.MsgUpdateTradeRoute): Uint8Array;
            toProtoMsg(message: _244.MsgUpdateTradeRoute): _244.MsgUpdateTradeRouteProtoMsg;
        };
        MsgUpdateTradeRouteResponse: {
            typeUrl: string;
            encode(_: _244.MsgUpdateTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgUpdateTradeRouteResponse;
            fromPartial(_: Partial<_244.MsgUpdateTradeRouteResponse>): _244.MsgUpdateTradeRouteResponse;
            fromAmino(_: _244.MsgUpdateTradeRouteResponseAmino): _244.MsgUpdateTradeRouteResponse;
            toAmino(_: _244.MsgUpdateTradeRouteResponse): _244.MsgUpdateTradeRouteResponseAmino;
            fromAminoMsg(object: _244.MsgUpdateTradeRouteResponseAminoMsg): _244.MsgUpdateTradeRouteResponse;
            fromProtoMsg(message: _244.MsgUpdateTradeRouteResponseProtoMsg): _244.MsgUpdateTradeRouteResponse;
            toProto(message: _244.MsgUpdateTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _244.MsgUpdateTradeRouteResponse): _244.MsgUpdateTradeRouteResponseProtoMsg;
        };
        MsgSetCommunityPoolRebate: {
            typeUrl: string;
            encode(message: _244.MsgSetCommunityPoolRebate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgSetCommunityPoolRebate;
            fromPartial(object: Partial<_244.MsgSetCommunityPoolRebate>): _244.MsgSetCommunityPoolRebate;
            fromAmino(object: _244.MsgSetCommunityPoolRebateAmino): _244.MsgSetCommunityPoolRebate;
            toAmino(message: _244.MsgSetCommunityPoolRebate): _244.MsgSetCommunityPoolRebateAmino;
            fromAminoMsg(object: _244.MsgSetCommunityPoolRebateAminoMsg): _244.MsgSetCommunityPoolRebate;
            toAminoMsg(message: _244.MsgSetCommunityPoolRebate): _244.MsgSetCommunityPoolRebateAminoMsg;
            fromProtoMsg(message: _244.MsgSetCommunityPoolRebateProtoMsg): _244.MsgSetCommunityPoolRebate;
            toProto(message: _244.MsgSetCommunityPoolRebate): Uint8Array;
            toProtoMsg(message: _244.MsgSetCommunityPoolRebate): _244.MsgSetCommunityPoolRebateProtoMsg;
        };
        MsgSetCommunityPoolRebateResponse: {
            typeUrl: string;
            encode(_: _244.MsgSetCommunityPoolRebateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgSetCommunityPoolRebateResponse;
            fromPartial(_: Partial<_244.MsgSetCommunityPoolRebateResponse>): _244.MsgSetCommunityPoolRebateResponse;
            fromAmino(_: _244.MsgSetCommunityPoolRebateResponseAmino): _244.MsgSetCommunityPoolRebateResponse;
            toAmino(_: _244.MsgSetCommunityPoolRebateResponse): _244.MsgSetCommunityPoolRebateResponseAmino;
            fromAminoMsg(object: _244.MsgSetCommunityPoolRebateResponseAminoMsg): _244.MsgSetCommunityPoolRebateResponse;
            fromProtoMsg(message: _244.MsgSetCommunityPoolRebateResponseProtoMsg): _244.MsgSetCommunityPoolRebateResponse;
            toProto(message: _244.MsgSetCommunityPoolRebateResponse): Uint8Array;
            toProtoMsg(message: _244.MsgSetCommunityPoolRebateResponse): _244.MsgSetCommunityPoolRebateResponseProtoMsg;
        };
        MsgToggleTradeController: {
            typeUrl: string;
            encode(message: _244.MsgToggleTradeController, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgToggleTradeController;
            fromPartial(object: Partial<_244.MsgToggleTradeController>): _244.MsgToggleTradeController;
            fromAmino(object: _244.MsgToggleTradeControllerAmino): _244.MsgToggleTradeController;
            toAmino(message: _244.MsgToggleTradeController): _244.MsgToggleTradeControllerAmino;
            fromAminoMsg(object: _244.MsgToggleTradeControllerAminoMsg): _244.MsgToggleTradeController;
            toAminoMsg(message: _244.MsgToggleTradeController): _244.MsgToggleTradeControllerAminoMsg;
            fromProtoMsg(message: _244.MsgToggleTradeControllerProtoMsg): _244.MsgToggleTradeController;
            toProto(message: _244.MsgToggleTradeController): Uint8Array;
            toProtoMsg(message: _244.MsgToggleTradeController): _244.MsgToggleTradeControllerProtoMsg;
        };
        MsgToggleTradeControllerResponse: {
            typeUrl: string;
            encode(_: _244.MsgToggleTradeControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgToggleTradeControllerResponse;
            fromPartial(_: Partial<_244.MsgToggleTradeControllerResponse>): _244.MsgToggleTradeControllerResponse;
            fromAmino(_: _244.MsgToggleTradeControllerResponseAmino): _244.MsgToggleTradeControllerResponse;
            toAmino(_: _244.MsgToggleTradeControllerResponse): _244.MsgToggleTradeControllerResponseAmino;
            fromAminoMsg(object: _244.MsgToggleTradeControllerResponseAminoMsg): _244.MsgToggleTradeControllerResponse;
            fromProtoMsg(message: _244.MsgToggleTradeControllerResponseProtoMsg): _244.MsgToggleTradeControllerResponse;
            toProto(message: _244.MsgToggleTradeControllerResponse): Uint8Array;
            toProtoMsg(message: _244.MsgToggleTradeControllerResponse): _244.MsgToggleTradeControllerResponseProtoMsg;
        };
        MsgUpdateHostZoneParams: {
            typeUrl: string;
            encode(message: _244.MsgUpdateHostZoneParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgUpdateHostZoneParams;
            fromPartial(object: Partial<_244.MsgUpdateHostZoneParams>): _244.MsgUpdateHostZoneParams;
            fromAmino(object: _244.MsgUpdateHostZoneParamsAmino): _244.MsgUpdateHostZoneParams;
            toAmino(message: _244.MsgUpdateHostZoneParams): _244.MsgUpdateHostZoneParamsAmino;
            fromAminoMsg(object: _244.MsgUpdateHostZoneParamsAminoMsg): _244.MsgUpdateHostZoneParams;
            toAminoMsg(message: _244.MsgUpdateHostZoneParams): _244.MsgUpdateHostZoneParamsAminoMsg;
            fromProtoMsg(message: _244.MsgUpdateHostZoneParamsProtoMsg): _244.MsgUpdateHostZoneParams;
            toProto(message: _244.MsgUpdateHostZoneParams): Uint8Array;
            toProtoMsg(message: _244.MsgUpdateHostZoneParams): _244.MsgUpdateHostZoneParamsProtoMsg;
        };
        MsgUpdateHostZoneParamsResponse: {
            typeUrl: string;
            encode(_: _244.MsgUpdateHostZoneParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.MsgUpdateHostZoneParamsResponse;
            fromPartial(_: Partial<_244.MsgUpdateHostZoneParamsResponse>): _244.MsgUpdateHostZoneParamsResponse;
            fromAmino(_: _244.MsgUpdateHostZoneParamsResponseAmino): _244.MsgUpdateHostZoneParamsResponse;
            toAmino(_: _244.MsgUpdateHostZoneParamsResponse): _244.MsgUpdateHostZoneParamsResponseAmino;
            fromAminoMsg(object: _244.MsgUpdateHostZoneParamsResponseAminoMsg): _244.MsgUpdateHostZoneParamsResponse;
            fromProtoMsg(message: _244.MsgUpdateHostZoneParamsResponseProtoMsg): _244.MsgUpdateHostZoneParamsResponse;
            toProto(message: _244.MsgUpdateHostZoneParamsResponse): Uint8Array;
            toProtoMsg(message: _244.MsgUpdateHostZoneParamsResponse): _244.MsgUpdateHostZoneParamsResponseProtoMsg;
        };
        TradeConfig: {
            typeUrl: string;
            encode(message: _243.TradeConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.TradeConfig;
            fromPartial(object: Partial<_243.TradeConfig>): _243.TradeConfig;
            fromAmino(object: _243.TradeConfigAmino): _243.TradeConfig;
            toAmino(message: _243.TradeConfig): _243.TradeConfigAmino;
            fromAminoMsg(object: _243.TradeConfigAminoMsg): _243.TradeConfig;
            fromProtoMsg(message: _243.TradeConfigProtoMsg): _243.TradeConfig;
            toProto(message: _243.TradeConfig): Uint8Array;
            toProtoMsg(message: _243.TradeConfig): _243.TradeConfigProtoMsg;
        };
        TradeRoute: {
            typeUrl: string;
            encode(message: _243.TradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.TradeRoute;
            fromPartial(object: Partial<_243.TradeRoute>): _243.TradeRoute;
            fromAmino(object: _243.TradeRouteAmino): _243.TradeRoute;
            toAmino(message: _243.TradeRoute): _243.TradeRouteAmino;
            fromAminoMsg(object: _243.TradeRouteAminoMsg): _243.TradeRoute;
            fromProtoMsg(message: _243.TradeRouteProtoMsg): _243.TradeRoute;
            toProto(message: _243.TradeRoute): Uint8Array;
            toProtoMsg(message: _243.TradeRoute): _243.TradeRouteProtoMsg;
        };
        QueryInterchainAccountFromAddressRequest: {
            typeUrl: string;
            encode(message: _242.QueryInterchainAccountFromAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryInterchainAccountFromAddressRequest;
            fromPartial(object: Partial<_242.QueryInterchainAccountFromAddressRequest>): _242.QueryInterchainAccountFromAddressRequest;
            fromAmino(object: _242.QueryInterchainAccountFromAddressRequestAmino): _242.QueryInterchainAccountFromAddressRequest;
            toAmino(message: _242.QueryInterchainAccountFromAddressRequest): _242.QueryInterchainAccountFromAddressRequestAmino;
            fromAminoMsg(object: _242.QueryInterchainAccountFromAddressRequestAminoMsg): _242.QueryInterchainAccountFromAddressRequest;
            fromProtoMsg(message: _242.QueryInterchainAccountFromAddressRequestProtoMsg): _242.QueryInterchainAccountFromAddressRequest;
            toProto(message: _242.QueryInterchainAccountFromAddressRequest): Uint8Array;
            toProtoMsg(message: _242.QueryInterchainAccountFromAddressRequest): _242.QueryInterchainAccountFromAddressRequestProtoMsg;
        };
        QueryInterchainAccountFromAddressResponse: {
            typeUrl: string;
            encode(message: _242.QueryInterchainAccountFromAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryInterchainAccountFromAddressResponse;
            fromPartial(object: Partial<_242.QueryInterchainAccountFromAddressResponse>): _242.QueryInterchainAccountFromAddressResponse;
            fromAmino(object: _242.QueryInterchainAccountFromAddressResponseAmino): _242.QueryInterchainAccountFromAddressResponse;
            toAmino(message: _242.QueryInterchainAccountFromAddressResponse): _242.QueryInterchainAccountFromAddressResponseAmino;
            fromAminoMsg(object: _242.QueryInterchainAccountFromAddressResponseAminoMsg): _242.QueryInterchainAccountFromAddressResponse;
            fromProtoMsg(message: _242.QueryInterchainAccountFromAddressResponseProtoMsg): _242.QueryInterchainAccountFromAddressResponse;
            toProto(message: _242.QueryInterchainAccountFromAddressResponse): Uint8Array;
            toProtoMsg(message: _242.QueryInterchainAccountFromAddressResponse): _242.QueryInterchainAccountFromAddressResponseProtoMsg;
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
        QueryGetValidatorsRequest: {
            typeUrl: string;
            encode(message: _242.QueryGetValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryGetValidatorsRequest;
            fromPartial(object: Partial<_242.QueryGetValidatorsRequest>): _242.QueryGetValidatorsRequest;
            fromAmino(object: _242.QueryGetValidatorsRequestAmino): _242.QueryGetValidatorsRequest;
            toAmino(message: _242.QueryGetValidatorsRequest): _242.QueryGetValidatorsRequestAmino;
            fromAminoMsg(object: _242.QueryGetValidatorsRequestAminoMsg): _242.QueryGetValidatorsRequest;
            fromProtoMsg(message: _242.QueryGetValidatorsRequestProtoMsg): _242.QueryGetValidatorsRequest;
            toProto(message: _242.QueryGetValidatorsRequest): Uint8Array;
            toProtoMsg(message: _242.QueryGetValidatorsRequest): _242.QueryGetValidatorsRequestProtoMsg;
        };
        QueryGetValidatorsResponse: {
            typeUrl: string;
            encode(message: _242.QueryGetValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryGetValidatorsResponse;
            fromPartial(object: Partial<_242.QueryGetValidatorsResponse>): _242.QueryGetValidatorsResponse;
            fromAmino(object: _242.QueryGetValidatorsResponseAmino): _242.QueryGetValidatorsResponse;
            toAmino(message: _242.QueryGetValidatorsResponse): _242.QueryGetValidatorsResponseAmino;
            fromAminoMsg(object: _242.QueryGetValidatorsResponseAminoMsg): _242.QueryGetValidatorsResponse;
            fromProtoMsg(message: _242.QueryGetValidatorsResponseProtoMsg): _242.QueryGetValidatorsResponse;
            toProto(message: _242.QueryGetValidatorsResponse): Uint8Array;
            toProtoMsg(message: _242.QueryGetValidatorsResponse): _242.QueryGetValidatorsResponseProtoMsg;
        };
        QueryGetHostZoneRequest: {
            typeUrl: string;
            encode(message: _242.QueryGetHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryGetHostZoneRequest;
            fromPartial(object: Partial<_242.QueryGetHostZoneRequest>): _242.QueryGetHostZoneRequest;
            fromAmino(object: _242.QueryGetHostZoneRequestAmino): _242.QueryGetHostZoneRequest;
            toAmino(message: _242.QueryGetHostZoneRequest): _242.QueryGetHostZoneRequestAmino;
            fromAminoMsg(object: _242.QueryGetHostZoneRequestAminoMsg): _242.QueryGetHostZoneRequest;
            fromProtoMsg(message: _242.QueryGetHostZoneRequestProtoMsg): _242.QueryGetHostZoneRequest;
            toProto(message: _242.QueryGetHostZoneRequest): Uint8Array;
            toProtoMsg(message: _242.QueryGetHostZoneRequest): _242.QueryGetHostZoneRequestProtoMsg;
        };
        QueryGetHostZoneResponse: {
            typeUrl: string;
            encode(message: _242.QueryGetHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryGetHostZoneResponse;
            fromPartial(object: Partial<_242.QueryGetHostZoneResponse>): _242.QueryGetHostZoneResponse;
            fromAmino(object: _242.QueryGetHostZoneResponseAmino): _242.QueryGetHostZoneResponse;
            toAmino(message: _242.QueryGetHostZoneResponse): _242.QueryGetHostZoneResponseAmino;
            fromAminoMsg(object: _242.QueryGetHostZoneResponseAminoMsg): _242.QueryGetHostZoneResponse;
            fromProtoMsg(message: _242.QueryGetHostZoneResponseProtoMsg): _242.QueryGetHostZoneResponse;
            toProto(message: _242.QueryGetHostZoneResponse): Uint8Array;
            toProtoMsg(message: _242.QueryGetHostZoneResponse): _242.QueryGetHostZoneResponseProtoMsg;
        };
        QueryAllHostZoneRequest: {
            typeUrl: string;
            encode(message: _242.QueryAllHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryAllHostZoneRequest;
            fromPartial(object: Partial<_242.QueryAllHostZoneRequest>): _242.QueryAllHostZoneRequest;
            fromAmino(object: _242.QueryAllHostZoneRequestAmino): _242.QueryAllHostZoneRequest;
            toAmino(message: _242.QueryAllHostZoneRequest): _242.QueryAllHostZoneRequestAmino;
            fromAminoMsg(object: _242.QueryAllHostZoneRequestAminoMsg): _242.QueryAllHostZoneRequest;
            fromProtoMsg(message: _242.QueryAllHostZoneRequestProtoMsg): _242.QueryAllHostZoneRequest;
            toProto(message: _242.QueryAllHostZoneRequest): Uint8Array;
            toProtoMsg(message: _242.QueryAllHostZoneRequest): _242.QueryAllHostZoneRequestProtoMsg;
        };
        QueryAllHostZoneResponse: {
            typeUrl: string;
            encode(message: _242.QueryAllHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryAllHostZoneResponse;
            fromPartial(object: Partial<_242.QueryAllHostZoneResponse>): _242.QueryAllHostZoneResponse;
            fromAmino(object: _242.QueryAllHostZoneResponseAmino): _242.QueryAllHostZoneResponse;
            toAmino(message: _242.QueryAllHostZoneResponse): _242.QueryAllHostZoneResponseAmino;
            fromAminoMsg(object: _242.QueryAllHostZoneResponseAminoMsg): _242.QueryAllHostZoneResponse;
            fromProtoMsg(message: _242.QueryAllHostZoneResponseProtoMsg): _242.QueryAllHostZoneResponse;
            toProto(message: _242.QueryAllHostZoneResponse): Uint8Array;
            toProtoMsg(message: _242.QueryAllHostZoneResponse): _242.QueryAllHostZoneResponseProtoMsg;
        };
        QueryModuleAddressRequest: {
            typeUrl: string;
            encode(message: _242.QueryModuleAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryModuleAddressRequest;
            fromPartial(object: Partial<_242.QueryModuleAddressRequest>): _242.QueryModuleAddressRequest;
            fromAmino(object: _242.QueryModuleAddressRequestAmino): _242.QueryModuleAddressRequest;
            toAmino(message: _242.QueryModuleAddressRequest): _242.QueryModuleAddressRequestAmino;
            fromAminoMsg(object: _242.QueryModuleAddressRequestAminoMsg): _242.QueryModuleAddressRequest;
            fromProtoMsg(message: _242.QueryModuleAddressRequestProtoMsg): _242.QueryModuleAddressRequest;
            toProto(message: _242.QueryModuleAddressRequest): Uint8Array;
            toProtoMsg(message: _242.QueryModuleAddressRequest): _242.QueryModuleAddressRequestProtoMsg;
        };
        QueryModuleAddressResponse: {
            typeUrl: string;
            encode(message: _242.QueryModuleAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryModuleAddressResponse;
            fromPartial(object: Partial<_242.QueryModuleAddressResponse>): _242.QueryModuleAddressResponse;
            fromAmino(object: _242.QueryModuleAddressResponseAmino): _242.QueryModuleAddressResponse;
            toAmino(message: _242.QueryModuleAddressResponse): _242.QueryModuleAddressResponseAmino;
            fromAminoMsg(object: _242.QueryModuleAddressResponseAminoMsg): _242.QueryModuleAddressResponse;
            fromProtoMsg(message: _242.QueryModuleAddressResponseProtoMsg): _242.QueryModuleAddressResponse;
            toProto(message: _242.QueryModuleAddressResponse): Uint8Array;
            toProtoMsg(message: _242.QueryModuleAddressResponse): _242.QueryModuleAddressResponseProtoMsg;
        };
        QueryGetEpochTrackerRequest: {
            typeUrl: string;
            encode(message: _242.QueryGetEpochTrackerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryGetEpochTrackerRequest;
            fromPartial(object: Partial<_242.QueryGetEpochTrackerRequest>): _242.QueryGetEpochTrackerRequest;
            fromAmino(object: _242.QueryGetEpochTrackerRequestAmino): _242.QueryGetEpochTrackerRequest;
            toAmino(message: _242.QueryGetEpochTrackerRequest): _242.QueryGetEpochTrackerRequestAmino;
            fromAminoMsg(object: _242.QueryGetEpochTrackerRequestAminoMsg): _242.QueryGetEpochTrackerRequest;
            fromProtoMsg(message: _242.QueryGetEpochTrackerRequestProtoMsg): _242.QueryGetEpochTrackerRequest;
            toProto(message: _242.QueryGetEpochTrackerRequest): Uint8Array;
            toProtoMsg(message: _242.QueryGetEpochTrackerRequest): _242.QueryGetEpochTrackerRequestProtoMsg;
        };
        QueryGetEpochTrackerResponse: {
            typeUrl: string;
            encode(message: _242.QueryGetEpochTrackerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryGetEpochTrackerResponse;
            fromPartial(object: Partial<_242.QueryGetEpochTrackerResponse>): _242.QueryGetEpochTrackerResponse;
            fromAmino(object: _242.QueryGetEpochTrackerResponseAmino): _242.QueryGetEpochTrackerResponse;
            toAmino(message: _242.QueryGetEpochTrackerResponse): _242.QueryGetEpochTrackerResponseAmino;
            fromAminoMsg(object: _242.QueryGetEpochTrackerResponseAminoMsg): _242.QueryGetEpochTrackerResponse;
            fromProtoMsg(message: _242.QueryGetEpochTrackerResponseProtoMsg): _242.QueryGetEpochTrackerResponse;
            toProto(message: _242.QueryGetEpochTrackerResponse): Uint8Array;
            toProtoMsg(message: _242.QueryGetEpochTrackerResponse): _242.QueryGetEpochTrackerResponseProtoMsg;
        };
        QueryAllEpochTrackerRequest: {
            typeUrl: string;
            encode(_: _242.QueryAllEpochTrackerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryAllEpochTrackerRequest;
            fromPartial(_: Partial<_242.QueryAllEpochTrackerRequest>): _242.QueryAllEpochTrackerRequest;
            fromAmino(_: _242.QueryAllEpochTrackerRequestAmino): _242.QueryAllEpochTrackerRequest;
            toAmino(_: _242.QueryAllEpochTrackerRequest): _242.QueryAllEpochTrackerRequestAmino;
            fromAminoMsg(object: _242.QueryAllEpochTrackerRequestAminoMsg): _242.QueryAllEpochTrackerRequest;
            fromProtoMsg(message: _242.QueryAllEpochTrackerRequestProtoMsg): _242.QueryAllEpochTrackerRequest;
            toProto(message: _242.QueryAllEpochTrackerRequest): Uint8Array;
            toProtoMsg(message: _242.QueryAllEpochTrackerRequest): _242.QueryAllEpochTrackerRequestProtoMsg;
        };
        QueryAllEpochTrackerResponse: {
            typeUrl: string;
            encode(message: _242.QueryAllEpochTrackerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryAllEpochTrackerResponse;
            fromPartial(object: Partial<_242.QueryAllEpochTrackerResponse>): _242.QueryAllEpochTrackerResponse;
            fromAmino(object: _242.QueryAllEpochTrackerResponseAmino): _242.QueryAllEpochTrackerResponse;
            toAmino(message: _242.QueryAllEpochTrackerResponse): _242.QueryAllEpochTrackerResponseAmino;
            fromAminoMsg(object: _242.QueryAllEpochTrackerResponseAminoMsg): _242.QueryAllEpochTrackerResponse;
            fromProtoMsg(message: _242.QueryAllEpochTrackerResponseProtoMsg): _242.QueryAllEpochTrackerResponse;
            toProto(message: _242.QueryAllEpochTrackerResponse): Uint8Array;
            toProtoMsg(message: _242.QueryAllEpochTrackerResponse): _242.QueryAllEpochTrackerResponseProtoMsg;
        };
        QueryGetNextPacketSequenceRequest: {
            typeUrl: string;
            encode(message: _242.QueryGetNextPacketSequenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryGetNextPacketSequenceRequest;
            fromPartial(object: Partial<_242.QueryGetNextPacketSequenceRequest>): _242.QueryGetNextPacketSequenceRequest;
            fromAmino(object: _242.QueryGetNextPacketSequenceRequestAmino): _242.QueryGetNextPacketSequenceRequest;
            toAmino(message: _242.QueryGetNextPacketSequenceRequest): _242.QueryGetNextPacketSequenceRequestAmino;
            fromAminoMsg(object: _242.QueryGetNextPacketSequenceRequestAminoMsg): _242.QueryGetNextPacketSequenceRequest;
            fromProtoMsg(message: _242.QueryGetNextPacketSequenceRequestProtoMsg): _242.QueryGetNextPacketSequenceRequest;
            toProto(message: _242.QueryGetNextPacketSequenceRequest): Uint8Array;
            toProtoMsg(message: _242.QueryGetNextPacketSequenceRequest): _242.QueryGetNextPacketSequenceRequestProtoMsg;
        };
        QueryGetNextPacketSequenceResponse: {
            typeUrl: string;
            encode(message: _242.QueryGetNextPacketSequenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryGetNextPacketSequenceResponse;
            fromPartial(object: Partial<_242.QueryGetNextPacketSequenceResponse>): _242.QueryGetNextPacketSequenceResponse;
            fromAmino(object: _242.QueryGetNextPacketSequenceResponseAmino): _242.QueryGetNextPacketSequenceResponse;
            toAmino(message: _242.QueryGetNextPacketSequenceResponse): _242.QueryGetNextPacketSequenceResponseAmino;
            fromAminoMsg(object: _242.QueryGetNextPacketSequenceResponseAminoMsg): _242.QueryGetNextPacketSequenceResponse;
            fromProtoMsg(message: _242.QueryGetNextPacketSequenceResponseProtoMsg): _242.QueryGetNextPacketSequenceResponse;
            toProto(message: _242.QueryGetNextPacketSequenceResponse): Uint8Array;
            toProtoMsg(message: _242.QueryGetNextPacketSequenceResponse): _242.QueryGetNextPacketSequenceResponseProtoMsg;
        };
        QueryAddressUnbondings: {
            typeUrl: string;
            encode(message: _242.QueryAddressUnbondings, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryAddressUnbondings;
            fromPartial(object: Partial<_242.QueryAddressUnbondings>): _242.QueryAddressUnbondings;
            fromAmino(object: _242.QueryAddressUnbondingsAmino): _242.QueryAddressUnbondings;
            toAmino(message: _242.QueryAddressUnbondings): _242.QueryAddressUnbondingsAmino;
            fromAminoMsg(object: _242.QueryAddressUnbondingsAminoMsg): _242.QueryAddressUnbondings;
            fromProtoMsg(message: _242.QueryAddressUnbondingsProtoMsg): _242.QueryAddressUnbondings;
            toProto(message: _242.QueryAddressUnbondings): Uint8Array;
            toProtoMsg(message: _242.QueryAddressUnbondings): _242.QueryAddressUnbondingsProtoMsg;
        };
        QueryAddressUnbondingsResponse: {
            typeUrl: string;
            encode(message: _242.QueryAddressUnbondingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryAddressUnbondingsResponse;
            fromPartial(object: Partial<_242.QueryAddressUnbondingsResponse>): _242.QueryAddressUnbondingsResponse;
            fromAmino(object: _242.QueryAddressUnbondingsResponseAmino): _242.QueryAddressUnbondingsResponse;
            toAmino(message: _242.QueryAddressUnbondingsResponse): _242.QueryAddressUnbondingsResponseAmino;
            fromAminoMsg(object: _242.QueryAddressUnbondingsResponseAminoMsg): _242.QueryAddressUnbondingsResponse;
            fromProtoMsg(message: _242.QueryAddressUnbondingsResponseProtoMsg): _242.QueryAddressUnbondingsResponse;
            toProto(message: _242.QueryAddressUnbondingsResponse): Uint8Array;
            toProtoMsg(message: _242.QueryAddressUnbondingsResponse): _242.QueryAddressUnbondingsResponseProtoMsg;
        };
        QueryAllTradeRoutes: {
            typeUrl: string;
            encode(_: _242.QueryAllTradeRoutes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryAllTradeRoutes;
            fromPartial(_: Partial<_242.QueryAllTradeRoutes>): _242.QueryAllTradeRoutes;
            fromAmino(_: _242.QueryAllTradeRoutesAmino): _242.QueryAllTradeRoutes;
            toAmino(_: _242.QueryAllTradeRoutes): _242.QueryAllTradeRoutesAmino;
            fromAminoMsg(object: _242.QueryAllTradeRoutesAminoMsg): _242.QueryAllTradeRoutes;
            fromProtoMsg(message: _242.QueryAllTradeRoutesProtoMsg): _242.QueryAllTradeRoutes;
            toProto(message: _242.QueryAllTradeRoutes): Uint8Array;
            toProtoMsg(message: _242.QueryAllTradeRoutes): _242.QueryAllTradeRoutesProtoMsg;
        };
        QueryAllTradeRoutesResponse: {
            typeUrl: string;
            encode(message: _242.QueryAllTradeRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.QueryAllTradeRoutesResponse;
            fromPartial(object: Partial<_242.QueryAllTradeRoutesResponse>): _242.QueryAllTradeRoutesResponse;
            fromAmino(object: _242.QueryAllTradeRoutesResponseAmino): _242.QueryAllTradeRoutesResponse;
            toAmino(message: _242.QueryAllTradeRoutesResponse): _242.QueryAllTradeRoutesResponseAmino;
            fromAminoMsg(object: _242.QueryAllTradeRoutesResponseAminoMsg): _242.QueryAllTradeRoutesResponse;
            fromProtoMsg(message: _242.QueryAllTradeRoutesResponseProtoMsg): _242.QueryAllTradeRoutesResponse;
            toProto(message: _242.QueryAllTradeRoutesResponse): Uint8Array;
            toProtoMsg(message: _242.QueryAllTradeRoutesResponse): _242.QueryAllTradeRoutesResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _241.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.Params;
            fromPartial(object: Partial<_241.Params>): _241.Params;
            fromAmino(object: _241.ParamsAmino): _241.Params;
            toAmino(message: _241.Params): _241.ParamsAmino;
            fromAminoMsg(object: _241.ParamsAminoMsg): _241.Params;
            fromProtoMsg(message: _241.ParamsProtoMsg): _241.Params;
            toProto(message: _241.Params): Uint8Array;
            toProtoMsg(message: _241.Params): _241.ParamsProtoMsg;
        };
        StakeibcPacketData: {
            typeUrl: string;
            encode(message: _240.StakeibcPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.StakeibcPacketData;
            fromPartial(object: Partial<_240.StakeibcPacketData>): _240.StakeibcPacketData;
            fromAmino(object: _240.StakeibcPacketDataAmino): _240.StakeibcPacketData;
            toAmino(message: _240.StakeibcPacketData): _240.StakeibcPacketDataAmino;
            fromAminoMsg(object: _240.StakeibcPacketDataAminoMsg): _240.StakeibcPacketData;
            fromProtoMsg(message: _240.StakeibcPacketDataProtoMsg): _240.StakeibcPacketData;
            toProto(message: _240.StakeibcPacketData): Uint8Array;
            toProtoMsg(message: _240.StakeibcPacketData): _240.StakeibcPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _240.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.NoData;
            fromPartial(_: Partial<_240.NoData>): _240.NoData;
            fromAmino(_: _240.NoDataAmino): _240.NoData;
            toAmino(_: _240.NoData): _240.NoDataAmino;
            fromAminoMsg(object: _240.NoDataAminoMsg): _240.NoData;
            fromProtoMsg(message: _240.NoDataProtoMsg): _240.NoData;
            toProto(message: _240.NoData): Uint8Array;
            toProtoMsg(message: _240.NoData): _240.NoDataProtoMsg;
        };
        iCAAccountTypeFromJSON(object: any): _239.ICAAccountType;
        iCAAccountTypeToJSON(object: _239.ICAAccountType): string;
        ICAAccountType: typeof _239.ICAAccountType;
        ICAAccountTypeSDKType: typeof _239.ICAAccountType;
        ICAAccountTypeAmino: typeof _239.ICAAccountType;
        ICAAccount: {
            typeUrl: string;
            encode(message: _239.ICAAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _239.ICAAccount;
            fromPartial(object: Partial<_239.ICAAccount>): _239.ICAAccount;
            fromAmino(object: _239.ICAAccountAmino): _239.ICAAccount;
            toAmino(message: _239.ICAAccount): _239.ICAAccountAmino;
            fromAminoMsg(object: _239.ICAAccountAminoMsg): _239.ICAAccount;
            fromProtoMsg(message: _239.ICAAccountProtoMsg): _239.ICAAccount;
            toProto(message: _239.ICAAccount): Uint8Array;
            toProtoMsg(message: _239.ICAAccount): _239.ICAAccountProtoMsg;
        };
        CommunityPoolRebate: {
            typeUrl: string;
            encode(message: _238.CommunityPoolRebate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.CommunityPoolRebate;
            fromPartial(object: Partial<_238.CommunityPoolRebate>): _238.CommunityPoolRebate;
            fromAmino(object: _238.CommunityPoolRebateAmino): _238.CommunityPoolRebate;
            toAmino(message: _238.CommunityPoolRebate): _238.CommunityPoolRebateAmino;
            fromAminoMsg(object: _238.CommunityPoolRebateAminoMsg): _238.CommunityPoolRebate;
            fromProtoMsg(message: _238.CommunityPoolRebateProtoMsg): _238.CommunityPoolRebate;
            toProto(message: _238.CommunityPoolRebate): Uint8Array;
            toProtoMsg(message: _238.CommunityPoolRebate): _238.CommunityPoolRebateProtoMsg;
        };
        HostZone: {
            typeUrl: string;
            encode(message: _238.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.HostZone;
            fromPartial(object: Partial<_238.HostZone>): _238.HostZone;
            fromAmino(object: _238.HostZoneAmino): _238.HostZone;
            toAmino(message: _238.HostZone): _238.HostZoneAmino;
            fromAminoMsg(object: _238.HostZoneAminoMsg): _238.HostZone;
            fromProtoMsg(message: _238.HostZoneProtoMsg): _238.HostZone;
            toProto(message: _238.HostZone): Uint8Array;
            toProtoMsg(message: _238.HostZone): _238.HostZoneProtoMsg;
        };
        AddValidatorsProposal: {
            typeUrl: string;
            encode(message: _237.AddValidatorsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _237.AddValidatorsProposal;
            fromPartial(object: Partial<_237.AddValidatorsProposal>): _237.AddValidatorsProposal;
            fromAmino(object: _237.AddValidatorsProposalAmino): _237.AddValidatorsProposal;
            toAmino(message: _237.AddValidatorsProposal): _237.AddValidatorsProposalAmino;
            fromAminoMsg(object: _237.AddValidatorsProposalAminoMsg): _237.AddValidatorsProposal;
            fromProtoMsg(message: _237.AddValidatorsProposalProtoMsg): _237.AddValidatorsProposal;
            toProto(message: _237.AddValidatorsProposal): Uint8Array;
            toProtoMsg(message: _237.AddValidatorsProposal): _237.AddValidatorsProposalProtoMsg;
        };
        ToggleLSMProposal: {
            typeUrl: string;
            encode(message: _237.ToggleLSMProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _237.ToggleLSMProposal;
            fromPartial(object: Partial<_237.ToggleLSMProposal>): _237.ToggleLSMProposal;
            fromAmino(object: _237.ToggleLSMProposalAmino): _237.ToggleLSMProposal;
            toAmino(message: _237.ToggleLSMProposal): _237.ToggleLSMProposalAmino;
            fromAminoMsg(object: _237.ToggleLSMProposalAminoMsg): _237.ToggleLSMProposal;
            fromProtoMsg(message: _237.ToggleLSMProposalProtoMsg): _237.ToggleLSMProposal;
            toProto(message: _237.ToggleLSMProposal): Uint8Array;
            toProtoMsg(message: _237.ToggleLSMProposal): _237.ToggleLSMProposalProtoMsg;
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
        EpochTracker: {
            typeUrl: string;
            encode(message: _235.EpochTracker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _235.EpochTracker;
            fromPartial(object: Partial<_235.EpochTracker>): _235.EpochTracker;
            fromAmino(object: _235.EpochTrackerAmino): _235.EpochTracker;
            toAmino(message: _235.EpochTracker): _235.EpochTrackerAmino;
            fromAminoMsg(object: _235.EpochTrackerAminoMsg): _235.EpochTracker;
            fromProtoMsg(message: _235.EpochTrackerProtoMsg): _235.EpochTracker;
            toProto(message: _235.EpochTracker): Uint8Array;
            toProtoMsg(message: _235.EpochTracker): _235.EpochTrackerProtoMsg;
        };
        SplitDelegation: {
            typeUrl: string;
            encode(message: _234.SplitDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.SplitDelegation;
            fromPartial(object: Partial<_234.SplitDelegation>): _234.SplitDelegation;
            fromAmino(object: _234.SplitDelegationAmino): _234.SplitDelegation;
            toAmino(message: _234.SplitDelegation): _234.SplitDelegationAmino;
            fromAminoMsg(object: _234.SplitDelegationAminoMsg): _234.SplitDelegation;
            fromProtoMsg(message: _234.SplitDelegationProtoMsg): _234.SplitDelegation;
            toProto(message: _234.SplitDelegation): Uint8Array;
            toProtoMsg(message: _234.SplitDelegation): _234.SplitDelegationProtoMsg;
        };
        SplitUndelegation: {
            typeUrl: string;
            encode(message: _234.SplitUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.SplitUndelegation;
            fromPartial(object: Partial<_234.SplitUndelegation>): _234.SplitUndelegation;
            fromAmino(object: _234.SplitUndelegationAmino): _234.SplitUndelegation;
            toAmino(message: _234.SplitUndelegation): _234.SplitUndelegationAmino;
            fromAminoMsg(object: _234.SplitUndelegationAminoMsg): _234.SplitUndelegation;
            fromProtoMsg(message: _234.SplitUndelegationProtoMsg): _234.SplitUndelegation;
            toProto(message: _234.SplitUndelegation): Uint8Array;
            toProtoMsg(message: _234.SplitUndelegation): _234.SplitUndelegationProtoMsg;
        };
        DelegateCallback: {
            typeUrl: string;
            encode(message: _234.DelegateCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.DelegateCallback;
            fromPartial(object: Partial<_234.DelegateCallback>): _234.DelegateCallback;
            fromAmino(object: _234.DelegateCallbackAmino): _234.DelegateCallback;
            toAmino(message: _234.DelegateCallback): _234.DelegateCallbackAmino;
            fromAminoMsg(object: _234.DelegateCallbackAminoMsg): _234.DelegateCallback;
            fromProtoMsg(message: _234.DelegateCallbackProtoMsg): _234.DelegateCallback;
            toProto(message: _234.DelegateCallback): Uint8Array;
            toProtoMsg(message: _234.DelegateCallback): _234.DelegateCallbackProtoMsg;
        };
        ClaimCallback: {
            typeUrl: string;
            encode(message: _234.ClaimCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.ClaimCallback;
            fromPartial(object: Partial<_234.ClaimCallback>): _234.ClaimCallback;
            fromAmino(object: _234.ClaimCallbackAmino): _234.ClaimCallback;
            toAmino(message: _234.ClaimCallback): _234.ClaimCallbackAmino;
            fromAminoMsg(object: _234.ClaimCallbackAminoMsg): _234.ClaimCallback;
            fromProtoMsg(message: _234.ClaimCallbackProtoMsg): _234.ClaimCallback;
            toProto(message: _234.ClaimCallback): Uint8Array;
            toProtoMsg(message: _234.ClaimCallback): _234.ClaimCallbackProtoMsg;
        };
        ReinvestCallback: {
            typeUrl: string;
            encode(message: _234.ReinvestCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.ReinvestCallback;
            fromPartial(object: Partial<_234.ReinvestCallback>): _234.ReinvestCallback;
            fromAmino(object: _234.ReinvestCallbackAmino): _234.ReinvestCallback;
            toAmino(message: _234.ReinvestCallback): _234.ReinvestCallbackAmino;
            fromAminoMsg(object: _234.ReinvestCallbackAminoMsg): _234.ReinvestCallback;
            fromProtoMsg(message: _234.ReinvestCallbackProtoMsg): _234.ReinvestCallback;
            toProto(message: _234.ReinvestCallback): Uint8Array;
            toProtoMsg(message: _234.ReinvestCallback): _234.ReinvestCallbackProtoMsg;
        };
        UndelegateCallback: {
            typeUrl: string;
            encode(message: _234.UndelegateCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.UndelegateCallback;
            fromPartial(object: Partial<_234.UndelegateCallback>): _234.UndelegateCallback;
            fromAmino(object: _234.UndelegateCallbackAmino): _234.UndelegateCallback;
            toAmino(message: _234.UndelegateCallback): _234.UndelegateCallbackAmino;
            fromAminoMsg(object: _234.UndelegateCallbackAminoMsg): _234.UndelegateCallback;
            fromProtoMsg(message: _234.UndelegateCallbackProtoMsg): _234.UndelegateCallback;
            toProto(message: _234.UndelegateCallback): Uint8Array;
            toProtoMsg(message: _234.UndelegateCallback): _234.UndelegateCallbackProtoMsg;
        };
        RedemptionCallback: {
            typeUrl: string;
            encode(message: _234.RedemptionCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.RedemptionCallback;
            fromPartial(object: Partial<_234.RedemptionCallback>): _234.RedemptionCallback;
            fromAmino(object: _234.RedemptionCallbackAmino): _234.RedemptionCallback;
            toAmino(message: _234.RedemptionCallback): _234.RedemptionCallbackAmino;
            fromAminoMsg(object: _234.RedemptionCallbackAminoMsg): _234.RedemptionCallback;
            fromProtoMsg(message: _234.RedemptionCallbackProtoMsg): _234.RedemptionCallback;
            toProto(message: _234.RedemptionCallback): Uint8Array;
            toProtoMsg(message: _234.RedemptionCallback): _234.RedemptionCallbackProtoMsg;
        };
        Rebalancing: {
            typeUrl: string;
            encode(message: _234.Rebalancing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.Rebalancing;
            fromPartial(object: Partial<_234.Rebalancing>): _234.Rebalancing;
            fromAmino(object: _234.RebalancingAmino): _234.Rebalancing;
            toAmino(message: _234.Rebalancing): _234.RebalancingAmino;
            fromAminoMsg(object: _234.RebalancingAminoMsg): _234.Rebalancing;
            fromProtoMsg(message: _234.RebalancingProtoMsg): _234.Rebalancing;
            toProto(message: _234.Rebalancing): Uint8Array;
            toProtoMsg(message: _234.Rebalancing): _234.RebalancingProtoMsg;
        };
        RebalanceCallback: {
            typeUrl: string;
            encode(message: _234.RebalanceCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.RebalanceCallback;
            fromPartial(object: Partial<_234.RebalanceCallback>): _234.RebalanceCallback;
            fromAmino(object: _234.RebalanceCallbackAmino): _234.RebalanceCallback;
            toAmino(message: _234.RebalanceCallback): _234.RebalanceCallbackAmino;
            fromAminoMsg(object: _234.RebalanceCallbackAminoMsg): _234.RebalanceCallback;
            fromProtoMsg(message: _234.RebalanceCallbackProtoMsg): _234.RebalanceCallback;
            toProto(message: _234.RebalanceCallback): Uint8Array;
            toProtoMsg(message: _234.RebalanceCallback): _234.RebalanceCallbackProtoMsg;
        };
        DetokenizeSharesCallback: {
            typeUrl: string;
            encode(message: _234.DetokenizeSharesCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.DetokenizeSharesCallback;
            fromPartial(object: Partial<_234.DetokenizeSharesCallback>): _234.DetokenizeSharesCallback;
            fromAmino(object: _234.DetokenizeSharesCallbackAmino): _234.DetokenizeSharesCallback;
            toAmino(message: _234.DetokenizeSharesCallback): _234.DetokenizeSharesCallbackAmino;
            fromAminoMsg(object: _234.DetokenizeSharesCallbackAminoMsg): _234.DetokenizeSharesCallback;
            fromProtoMsg(message: _234.DetokenizeSharesCallbackProtoMsg): _234.DetokenizeSharesCallback;
            toProto(message: _234.DetokenizeSharesCallback): Uint8Array;
            toProtoMsg(message: _234.DetokenizeSharesCallback): _234.DetokenizeSharesCallbackProtoMsg;
        };
        LSMLiquidStake: {
            typeUrl: string;
            encode(message: _234.LSMLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.LSMLiquidStake;
            fromPartial(object: Partial<_234.LSMLiquidStake>): _234.LSMLiquidStake;
            fromAmino(object: _234.LSMLiquidStakeAmino): _234.LSMLiquidStake;
            toAmino(message: _234.LSMLiquidStake): _234.LSMLiquidStakeAmino;
            fromAminoMsg(object: _234.LSMLiquidStakeAminoMsg): _234.LSMLiquidStake;
            fromProtoMsg(message: _234.LSMLiquidStakeProtoMsg): _234.LSMLiquidStake;
            toProto(message: _234.LSMLiquidStake): Uint8Array;
            toProtoMsg(message: _234.LSMLiquidStake): _234.LSMLiquidStakeProtoMsg;
        };
        ValidatorSharesToTokensQueryCallback: {
            typeUrl: string;
            encode(message: _234.ValidatorSharesToTokensQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.ValidatorSharesToTokensQueryCallback;
            fromPartial(object: Partial<_234.ValidatorSharesToTokensQueryCallback>): _234.ValidatorSharesToTokensQueryCallback;
            fromAmino(object: _234.ValidatorSharesToTokensQueryCallbackAmino): _234.ValidatorSharesToTokensQueryCallback;
            toAmino(message: _234.ValidatorSharesToTokensQueryCallback): _234.ValidatorSharesToTokensQueryCallbackAmino;
            fromAminoMsg(object: _234.ValidatorSharesToTokensQueryCallbackAminoMsg): _234.ValidatorSharesToTokensQueryCallback;
            fromProtoMsg(message: _234.ValidatorSharesToTokensQueryCallbackProtoMsg): _234.ValidatorSharesToTokensQueryCallback;
            toProto(message: _234.ValidatorSharesToTokensQueryCallback): Uint8Array;
            toProtoMsg(message: _234.ValidatorSharesToTokensQueryCallback): _234.ValidatorSharesToTokensQueryCallbackProtoMsg;
        };
        DelegatorSharesQueryCallback: {
            typeUrl: string;
            encode(message: _234.DelegatorSharesQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.DelegatorSharesQueryCallback;
            fromPartial(object: Partial<_234.DelegatorSharesQueryCallback>): _234.DelegatorSharesQueryCallback;
            fromAmino(object: _234.DelegatorSharesQueryCallbackAmino): _234.DelegatorSharesQueryCallback;
            toAmino(message: _234.DelegatorSharesQueryCallback): _234.DelegatorSharesQueryCallbackAmino;
            fromAminoMsg(object: _234.DelegatorSharesQueryCallbackAminoMsg): _234.DelegatorSharesQueryCallback;
            fromProtoMsg(message: _234.DelegatorSharesQueryCallbackProtoMsg): _234.DelegatorSharesQueryCallback;
            toProto(message: _234.DelegatorSharesQueryCallback): Uint8Array;
            toProtoMsg(message: _234.DelegatorSharesQueryCallback): _234.DelegatorSharesQueryCallbackProtoMsg;
        };
        CommunityPoolBalanceQueryCallback: {
            typeUrl: string;
            encode(message: _234.CommunityPoolBalanceQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.CommunityPoolBalanceQueryCallback;
            fromPartial(object: Partial<_234.CommunityPoolBalanceQueryCallback>): _234.CommunityPoolBalanceQueryCallback;
            fromAmino(object: _234.CommunityPoolBalanceQueryCallbackAmino): _234.CommunityPoolBalanceQueryCallback;
            toAmino(message: _234.CommunityPoolBalanceQueryCallback): _234.CommunityPoolBalanceQueryCallbackAmino;
            fromAminoMsg(object: _234.CommunityPoolBalanceQueryCallbackAminoMsg): _234.CommunityPoolBalanceQueryCallback;
            fromProtoMsg(message: _234.CommunityPoolBalanceQueryCallbackProtoMsg): _234.CommunityPoolBalanceQueryCallback;
            toProto(message: _234.CommunityPoolBalanceQueryCallback): Uint8Array;
            toProtoMsg(message: _234.CommunityPoolBalanceQueryCallback): _234.CommunityPoolBalanceQueryCallbackProtoMsg;
        };
        TradeRouteCallback: {
            typeUrl: string;
            encode(message: _234.TradeRouteCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.TradeRouteCallback;
            fromPartial(object: Partial<_234.TradeRouteCallback>): _234.TradeRouteCallback;
            fromAmino(object: _234.TradeRouteCallbackAmino): _234.TradeRouteCallback;
            toAmino(message: _234.TradeRouteCallback): _234.TradeRouteCallbackAmino;
            fromAminoMsg(object: _234.TradeRouteCallbackAminoMsg): _234.TradeRouteCallback;
            fromProtoMsg(message: _234.TradeRouteCallbackProtoMsg): _234.TradeRouteCallback;
            toProto(message: _234.TradeRouteCallback): Uint8Array;
            toProtoMsg(message: _234.TradeRouteCallback): _234.TradeRouteCallbackProtoMsg;
        };
        AddressUnbonding: {
            typeUrl: string;
            encode(message: _233.AddressUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.AddressUnbonding;
            fromPartial(object: Partial<_233.AddressUnbonding>): _233.AddressUnbonding;
            fromAmino(object: _233.AddressUnbondingAmino): _233.AddressUnbonding;
            toAmino(message: _233.AddressUnbonding): _233.AddressUnbondingAmino;
            fromAminoMsg(object: _233.AddressUnbondingAminoMsg): _233.AddressUnbonding;
            fromProtoMsg(message: _233.AddressUnbondingProtoMsg): _233.AddressUnbonding;
            toProto(message: _233.AddressUnbonding): Uint8Array;
            toProtoMsg(message: _233.AddressUnbonding): _233.AddressUnbondingProtoMsg;
        };
    };
    const staketia: {
        MsgClientImpl: typeof _410.MsgClientImpl;
        QueryClientImpl: typeof _400.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            hostZone(request?: _247.QueryHostZoneRequest): Promise<_247.QueryHostZoneResponse>;
            delegationRecords(request: _247.QueryDelegationRecordsRequest): Promise<_247.QueryDelegationRecordsResponse>;
            unbondingRecords(request: _247.QueryUnbondingRecordsRequest): Promise<_247.QueryUnbondingRecordsResponse>;
            redemptionRecord(request: _247.QueryRedemptionRecordRequest): Promise<_247.QueryRedemptionRecordResponse>;
            redemptionRecords(request: _247.QueryRedemptionRecordsRequest): Promise<_247.QueryRedemptionRecordsResponse>;
            slashRecords(request?: _247.QuerySlashRecordsRequest): Promise<_247.QuerySlashRecordsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _249.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _249.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmDelegation(value: _249.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUndelegation(value: _249.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUnbondedTokenSweep(value: _249.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                adjustDelegatedBalance(value: _249.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _249.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _249.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                refreshRedemptionRate(value: _249.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteDelegationRecord(value: _249.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteUnbondingRecord(value: _249.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteRedemptionRecord(value: _249.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOperatorAddress(value: _249.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _249.MsgLiquidStake): {
                    typeUrl: string;
                    value: _249.MsgLiquidStake;
                };
                redeemStake(value: _249.MsgRedeemStake): {
                    typeUrl: string;
                    value: _249.MsgRedeemStake;
                };
                confirmDelegation(value: _249.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _249.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _249.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _249.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _249.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _249.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _249.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _249.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _249.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _249.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _249.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _249.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _249.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _249.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _249.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _249.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _249.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _249.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _249.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _249.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _249.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _249.MsgSetOperatorAddress;
                };
            };
            fromPartial: {
                liquidStake(value: _249.MsgLiquidStake): {
                    typeUrl: string;
                    value: _249.MsgLiquidStake;
                };
                redeemStake(value: _249.MsgRedeemStake): {
                    typeUrl: string;
                    value: _249.MsgRedeemStake;
                };
                confirmDelegation(value: _249.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _249.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _249.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _249.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _249.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _249.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _249.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _249.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _249.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _249.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _249.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _249.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _249.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _249.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _249.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _249.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _249.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _249.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _249.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _249.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _249.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _249.MsgSetOperatorAddress;
                };
            };
        };
        AminoConverter: {
            "/stride.staketia.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _249.MsgLiquidStake) => _249.MsgLiquidStakeAmino;
                fromAmino: (object: _249.MsgLiquidStakeAmino) => _249.MsgLiquidStake;
            };
            "/stride.staketia.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _249.MsgRedeemStake) => _249.MsgRedeemStakeAmino;
                fromAmino: (object: _249.MsgRedeemStakeAmino) => _249.MsgRedeemStake;
            };
            "/stride.staketia.MsgConfirmDelegation": {
                aminoType: string;
                toAmino: (message: _249.MsgConfirmDelegation) => _249.MsgConfirmDelegationAmino;
                fromAmino: (object: _249.MsgConfirmDelegationAmino) => _249.MsgConfirmDelegation;
            };
            "/stride.staketia.MsgConfirmUndelegation": {
                aminoType: string;
                toAmino: (message: _249.MsgConfirmUndelegation) => _249.MsgConfirmUndelegationAmino;
                fromAmino: (object: _249.MsgConfirmUndelegationAmino) => _249.MsgConfirmUndelegation;
            };
            "/stride.staketia.MsgConfirmUnbondedTokenSweep": {
                aminoType: string;
                toAmino: (message: _249.MsgConfirmUnbondedTokenSweep) => _249.MsgConfirmUnbondedTokenSweepAmino;
                fromAmino: (object: _249.MsgConfirmUnbondedTokenSweepAmino) => _249.MsgConfirmUnbondedTokenSweep;
            };
            "/stride.staketia.MsgAdjustDelegatedBalance": {
                aminoType: string;
                toAmino: (message: _249.MsgAdjustDelegatedBalance) => _249.MsgAdjustDelegatedBalanceAmino;
                fromAmino: (object: _249.MsgAdjustDelegatedBalanceAmino) => _249.MsgAdjustDelegatedBalance;
            };
            "/stride.staketia.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _249.MsgUpdateInnerRedemptionRateBounds) => _249.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _249.MsgUpdateInnerRedemptionRateBoundsAmino) => _249.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.staketia.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _249.MsgResumeHostZone) => _249.MsgResumeHostZoneAmino;
                fromAmino: (object: _249.MsgResumeHostZoneAmino) => _249.MsgResumeHostZone;
            };
            "/stride.staketia.MsgRefreshRedemptionRate": {
                aminoType: string;
                toAmino: (message: _249.MsgRefreshRedemptionRate) => _249.MsgRefreshRedemptionRateAmino;
                fromAmino: (object: _249.MsgRefreshRedemptionRateAmino) => _249.MsgRefreshRedemptionRate;
            };
            "/stride.staketia.MsgOverwriteDelegationRecord": {
                aminoType: string;
                toAmino: (message: _249.MsgOverwriteDelegationRecord) => _249.MsgOverwriteDelegationRecordAmino;
                fromAmino: (object: _249.MsgOverwriteDelegationRecordAmino) => _249.MsgOverwriteDelegationRecord;
            };
            "/stride.staketia.MsgOverwriteUnbondingRecord": {
                aminoType: string;
                toAmino: (message: _249.MsgOverwriteUnbondingRecord) => _249.MsgOverwriteUnbondingRecordAmino;
                fromAmino: (object: _249.MsgOverwriteUnbondingRecordAmino) => _249.MsgOverwriteUnbondingRecord;
            };
            "/stride.staketia.MsgOverwriteRedemptionRecord": {
                aminoType: string;
                toAmino: (message: _249.MsgOverwriteRedemptionRecord) => _249.MsgOverwriteRedemptionRecordAmino;
                fromAmino: (object: _249.MsgOverwriteRedemptionRecordAmino) => _249.MsgOverwriteRedemptionRecord;
            };
            "/stride.staketia.MsgSetOperatorAddress": {
                aminoType: string;
                toAmino: (message: _249.MsgSetOperatorAddress) => _249.MsgSetOperatorAddressAmino;
                fromAmino: (object: _249.MsgSetOperatorAddressAmino) => _249.MsgSetOperatorAddress;
            };
        };
        overwritableRecordTypeFromJSON(object: any): _249.OverwritableRecordType;
        overwritableRecordTypeToJSON(object: _249.OverwritableRecordType): string;
        OverwritableRecordType: typeof _249.OverwritableRecordType;
        OverwritableRecordTypeSDKType: typeof _249.OverwritableRecordType;
        OverwritableRecordTypeAmino: typeof _249.OverwritableRecordType;
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _249.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.MsgLiquidStake;
            fromPartial(object: Partial<_249.MsgLiquidStake>): _249.MsgLiquidStake;
            fromAmino(object: _249.MsgLiquidStakeAmino): _249.MsgLiquidStake;
            toAmino(message: _249.MsgLiquidStake): _249.MsgLiquidStakeAmino;
            fromAminoMsg(object: _249.MsgLiquidStakeAminoMsg): _249.MsgLiquidStake;
            toAminoMsg(message: _249.MsgLiquidStake): _249.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _249.MsgLiquidStakeProtoMsg): _249.MsgLiquidStake;
            toProto(message: _249.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _249.MsgLiquidStake): _249.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _249.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_249.MsgLiquidStakeResponse>): _249.MsgLiquidStakeResponse;
            fromAmino(object: _249.MsgLiquidStakeResponseAmino): _249.MsgLiquidStakeResponse;
            toAmino(message: _249.MsgLiquidStakeResponse): _249.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _249.MsgLiquidStakeResponseAminoMsg): _249.MsgLiquidStakeResponse;
            fromProtoMsg(message: _249.MsgLiquidStakeResponseProtoMsg): _249.MsgLiquidStakeResponse;
            toProto(message: _249.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _249.MsgLiquidStakeResponse): _249.MsgLiquidStakeResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _249.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.MsgRedeemStake;
            fromPartial(object: Partial<_249.MsgRedeemStake>): _249.MsgRedeemStake;
            fromAmino(object: _249.MsgRedeemStakeAmino): _249.MsgRedeemStake;
            toAmino(message: _249.MsgRedeemStake): _249.MsgRedeemStakeAmino;
            fromAminoMsg(object: _249.MsgRedeemStakeAminoMsg): _249.MsgRedeemStake;
            toAminoMsg(message: _249.MsgRedeemStake): _249.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _249.MsgRedeemStakeProtoMsg): _249.MsgRedeemStake;
            toProto(message: _249.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _249.MsgRedeemStake): _249.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(message: _249.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.MsgRedeemStakeResponse;
            fromPartial(object: Partial<_249.MsgRedeemStakeResponse>): _249.MsgRedeemStakeResponse;
            fromAmino(object: _249.MsgRedeemStakeResponseAmino): _249.MsgRedeemStakeResponse;
            toAmino(message: _249.MsgRedeemStakeResponse): _249.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _249.MsgRedeemStakeResponseAminoMsg): _249.MsgRedeemStakeResponse;
            fromProtoMsg(message: _249.MsgRedeemStakeResponseProtoMsg): _249.MsgRedeemStakeResponse;
            toProto(message: _249.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _249.MsgRedeemStakeResponse): _249.MsgRedeemStakeResponseProtoMsg;
        };
        MsgConfirmDelegation: {
            typeUrl: string;
            encode(message: _249.MsgConfirmDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.MsgConfirmDelegation;
            fromPartial(object: Partial<_249.MsgConfirmDelegation>): _249.MsgConfirmDelegation;
            fromAmino(object: _249.MsgConfirmDelegationAmino): _249.MsgConfirmDelegation;
            toAmino(message: _249.MsgConfirmDelegation): _249.MsgConfirmDelegationAmino;
            fromAminoMsg(object: _249.MsgConfirmDelegationAminoMsg): _249.MsgConfirmDelegation;
            toAminoMsg(message: _249.MsgConfirmDelegation): _249.MsgConfirmDelegationAminoMsg;
            fromProtoMsg(message: _249.MsgConfirmDelegationProtoMsg): _249.MsgConfirmDelegation;
            toProto(message: _249.MsgConfirmDelegation): Uint8Array;
            toProtoMsg(message: _249.MsgConfirmDelegation): _249.MsgConfirmDelegationProtoMsg;
        };
        MsgConfirmDelegationResponse: {
            typeUrl: string;
            encode(_: _249.MsgConfirmDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.MsgConfirmDelegationResponse;
            fromPartial(_: Partial<_249.MsgConfirmDelegationResponse>): _249.MsgConfirmDelegationResponse;
            fromAmino(_: _249.MsgConfirmDelegationResponseAmino): _249.MsgConfirmDelegationResponse;
            toAmino(_: _249.MsgConfirmDelegationResponse): _249.MsgConfirmDelegationResponseAmino;
            fromAminoMsg(object: _249.MsgConfirmDelegationResponseAminoMsg): _249.MsgConfirmDelegationResponse;
            fromProtoMsg(message: _249.MsgConfirmDelegationResponseProtoMsg): _249.MsgConfirmDelegationResponse;
            toProto(message: _249.MsgConfirmDelegationResponse): Uint8Array;
            toProtoMsg(message: _249.MsgConfirmDelegationResponse): _249.MsgConfirmDelegationResponseProtoMsg;
        };
        MsgConfirmUndelegation: {
            typeUrl: string;
            encode(message: _249.MsgConfirmUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.MsgConfirmUndelegation;
            fromPartial(object: Partial<_249.MsgConfirmUndelegation>): _249.MsgConfirmUndelegation;
            fromAmino(object: _249.MsgConfirmUndelegationAmino): _249.MsgConfirmUndelegation;
            toAmino(message: _249.MsgConfirmUndelegation): _249.MsgConfirmUndelegationAmino;
            fromAminoMsg(object: _249.MsgConfirmUndelegationAminoMsg): _249.MsgConfirmUndelegation;
            toAminoMsg(message: _249.MsgConfirmUndelegation): _249.MsgConfirmUndelegationAminoMsg;
            fromProtoMsg(message: _249.MsgConfirmUndelegationProtoMsg): _249.MsgConfirmUndelegation;
            toProto(message: _249.MsgConfirmUndelegation): Uint8Array;
            toProtoMsg(message: _249.MsgConfirmUndelegation): _249.MsgConfirmUndelegationProtoMsg;
        };
        MsgConfirmUndelegationResponse: {
            typeUrl: string;
            encode(_: _249.MsgConfirmUndelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.MsgConfirmUndelegationResponse;
            fromPartial(_: Partial<_249.MsgConfirmUndelegationResponse>): _249.MsgConfirmUndelegationResponse;
            fromAmino(_: _249.MsgConfirmUndelegationResponseAmino): _249.MsgConfirmUndelegationResponse;
            toAmino(_: _249.MsgConfirmUndelegationResponse): _249.MsgConfirmUndelegationResponseAmino;
            fromAminoMsg(object: _249.MsgConfirmUndelegationResponseAminoMsg): _249.MsgConfirmUndelegationResponse;
            fromProtoMsg(message: _249.MsgConfirmUndelegationResponseProtoMsg): _249.MsgConfirmUndelegationResponse;
            toProto(message: _249.MsgConfirmUndelegationResponse): Uint8Array;
            toProtoMsg(message: _249.MsgConfirmUndelegationResponse): _249.MsgConfirmUndelegationResponseProtoMsg;
        };
        MsgConfirmUnbondedTokenSweep: {
            typeUrl: string;
            encode(message: _249.MsgConfirmUnbondedTokenSweep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.MsgConfirmUnbondedTokenSweep;
            fromPartial(object: Partial<_249.MsgConfirmUnbondedTokenSweep>): _249.MsgConfirmUnbondedTokenSweep;
            fromAmino(object: _249.MsgConfirmUnbondedTokenSweepAmino): _249.MsgConfirmUnbondedTokenSweep;
            toAmino(message: _249.MsgConfirmUnbondedTokenSweep): _249.MsgConfirmUnbondedTokenSweepAmino;
            fromAminoMsg(object: _249.MsgConfirmUnbondedTokenSweepAminoMsg): _249.MsgConfirmUnbondedTokenSweep;
            toAminoMsg(message: _249.MsgConfirmUnbondedTokenSweep): _249.MsgConfirmUnbondedTokenSweepAminoMsg;
            fromProtoMsg(message: _249.MsgConfirmUnbondedTokenSweepProtoMsg): _249.MsgConfirmUnbondedTokenSweep;
            toProto(message: _249.MsgConfirmUnbondedTokenSweep): Uint8Array;
            toProtoMsg(message: _249.MsgConfirmUnbondedTokenSweep): _249.MsgConfirmUnbondedTokenSweepProtoMsg;
        };
        MsgConfirmUnbondedTokenSweepResponse: {
            typeUrl: string;
            encode(_: _249.MsgConfirmUnbondedTokenSweepResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.MsgConfirmUnbondedTokenSweepResponse;
            fromPartial(_: Partial<_249.MsgConfirmUnbondedTokenSweepResponse>): _249.MsgConfirmUnbondedTokenSweepResponse;
            fromAmino(_: _249.MsgConfirmUnbondedTokenSweepResponseAmino): _249.MsgConfirmUnbondedTokenSweepResponse;
            toAmino(_: _249.MsgConfirmUnbondedTokenSweepResponse): _249.MsgConfirmUnbondedTokenSweepResponseAmino;
            fromAminoMsg(object: _249.MsgConfirmUnbondedTokenSweepResponseAminoMsg): _249.MsgConfirmUnbondedTokenSweepResponse;
            fromProtoMsg(message: _249.MsgConfirmUnbondedTokenSweepResponseProtoMsg): _249.MsgConfirmUnbondedTokenSweepResponse;
            toProto(message: _249.MsgConfirmUnbondedTokenSweepResponse): Uint8Array;
            toProtoMsg(message: _249.MsgConfirmUnbondedTokenSweepResponse): _249.MsgConfirmUnbondedTokenSweepResponseProtoMsg;
        };
        MsgAdjustDelegatedBalance: {
            typeUrl: string;
            encode(message: _249.MsgAdjustDelegatedBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.MsgAdjustDelegatedBalance;
            fromPartial(object: Partial<_249.MsgAdjustDelegatedBalance>): _249.MsgAdjustDelegatedBalance;
            fromAmino(object: _249.MsgAdjustDelegatedBalanceAmino): _249.MsgAdjustDelegatedBalance;
            toAmino(message: _249.MsgAdjustDelegatedBalance): _249.MsgAdjustDelegatedBalanceAmino;
            fromAminoMsg(object: _249.MsgAdjustDelegatedBalanceAminoMsg): _249.MsgAdjustDelegatedBalance;
            toAminoMsg(message: _249.MsgAdjustDelegatedBalance): _249.MsgAdjustDelegatedBalanceAminoMsg;
            fromProtoMsg(message: _249.MsgAdjustDelegatedBalanceProtoMsg): _249.MsgAdjustDelegatedBalance;
            toProto(message: _249.MsgAdjustDelegatedBalance): Uint8Array;
            toProtoMsg(message: _249.MsgAdjustDelegatedBalance): _249.MsgAdjustDelegatedBalanceProtoMsg;
        };
        MsgAdjustDelegatedBalanceResponse: {
            typeUrl: string;
            encode(_: _249.MsgAdjustDelegatedBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.MsgAdjustDelegatedBalanceResponse;
            fromPartial(_: Partial<_249.MsgAdjustDelegatedBalanceResponse>): _249.MsgAdjustDelegatedBalanceResponse;
            fromAmino(_: _249.MsgAdjustDelegatedBalanceResponseAmino): _249.MsgAdjustDelegatedBalanceResponse;
            toAmino(_: _249.MsgAdjustDelegatedBalanceResponse): _249.MsgAdjustDelegatedBalanceResponseAmino;
            fromAminoMsg(object: _249.MsgAdjustDelegatedBalanceResponseAminoMsg): _249.MsgAdjustDelegatedBalanceResponse;
            fromProtoMsg(message: _249.MsgAdjustDelegatedBalanceResponseProtoMsg): _249.MsgAdjustDelegatedBalanceResponse;
            toProto(message: _249.MsgAdjustDelegatedBalanceResponse): Uint8Array;
            toProtoMsg(message: _249.MsgAdjustDelegatedBalanceResponse): _249.MsgAdjustDelegatedBalanceResponseProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _249.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_249.MsgUpdateInnerRedemptionRateBounds>): _249.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _249.MsgUpdateInnerRedemptionRateBoundsAmino): _249.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _249.MsgUpdateInnerRedemptionRateBounds): _249.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _249.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _249.MsgUpdateInnerRedemptionRateBounds;
            toAminoMsg(message: _249.MsgUpdateInnerRedemptionRateBounds): _249.MsgUpdateInnerRedemptionRateBoundsAminoMsg;
            fromProtoMsg(message: _249.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _249.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _249.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _249.MsgUpdateInnerRedemptionRateBounds): _249.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _249.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_249.MsgUpdateInnerRedemptionRateBoundsResponse>): _249.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _249.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _249.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _249.MsgUpdateInnerRedemptionRateBoundsResponse): _249.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _249.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _249.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _249.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _249.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _249.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _249.MsgUpdateInnerRedemptionRateBoundsResponse): _249.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _249.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.MsgResumeHostZone;
            fromPartial(object: Partial<_249.MsgResumeHostZone>): _249.MsgResumeHostZone;
            fromAmino(object: _249.MsgResumeHostZoneAmino): _249.MsgResumeHostZone;
            toAmino(message: _249.MsgResumeHostZone): _249.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _249.MsgResumeHostZoneAminoMsg): _249.MsgResumeHostZone;
            toAminoMsg(message: _249.MsgResumeHostZone): _249.MsgResumeHostZoneAminoMsg;
            fromProtoMsg(message: _249.MsgResumeHostZoneProtoMsg): _249.MsgResumeHostZone;
            toProto(message: _249.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _249.MsgResumeHostZone): _249.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _249.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_249.MsgResumeHostZoneResponse>): _249.MsgResumeHostZoneResponse;
            fromAmino(_: _249.MsgResumeHostZoneResponseAmino): _249.MsgResumeHostZoneResponse;
            toAmino(_: _249.MsgResumeHostZoneResponse): _249.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _249.MsgResumeHostZoneResponseAminoMsg): _249.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _249.MsgResumeHostZoneResponseProtoMsg): _249.MsgResumeHostZoneResponse;
            toProto(message: _249.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _249.MsgResumeHostZoneResponse): _249.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgRefreshRedemptionRate: {
            typeUrl: string;
            encode(message: _249.MsgRefreshRedemptionRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.MsgRefreshRedemptionRate;
            fromPartial(object: Partial<_249.MsgRefreshRedemptionRate>): _249.MsgRefreshRedemptionRate;
            fromAmino(object: _249.MsgRefreshRedemptionRateAmino): _249.MsgRefreshRedemptionRate;
            toAmino(message: _249.MsgRefreshRedemptionRate): _249.MsgRefreshRedemptionRateAmino;
            fromAminoMsg(object: _249.MsgRefreshRedemptionRateAminoMsg): _249.MsgRefreshRedemptionRate;
            toAminoMsg(message: _249.MsgRefreshRedemptionRate): _249.MsgRefreshRedemptionRateAminoMsg;
            fromProtoMsg(message: _249.MsgRefreshRedemptionRateProtoMsg): _249.MsgRefreshRedemptionRate;
            toProto(message: _249.MsgRefreshRedemptionRate): Uint8Array;
            toProtoMsg(message: _249.MsgRefreshRedemptionRate): _249.MsgRefreshRedemptionRateProtoMsg;
        };
        MsgRefreshRedemptionRateResponse: {
            typeUrl: string;
            encode(_: _249.MsgRefreshRedemptionRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.MsgRefreshRedemptionRateResponse;
            fromPartial(_: Partial<_249.MsgRefreshRedemptionRateResponse>): _249.MsgRefreshRedemptionRateResponse;
            fromAmino(_: _249.MsgRefreshRedemptionRateResponseAmino): _249.MsgRefreshRedemptionRateResponse;
            toAmino(_: _249.MsgRefreshRedemptionRateResponse): _249.MsgRefreshRedemptionRateResponseAmino;
            fromAminoMsg(object: _249.MsgRefreshRedemptionRateResponseAminoMsg): _249.MsgRefreshRedemptionRateResponse;
            fromProtoMsg(message: _249.MsgRefreshRedemptionRateResponseProtoMsg): _249.MsgRefreshRedemptionRateResponse;
            toProto(message: _249.MsgRefreshRedemptionRateResponse): Uint8Array;
            toProtoMsg(message: _249.MsgRefreshRedemptionRateResponse): _249.MsgRefreshRedemptionRateResponseProtoMsg;
        };
        MsgOverwriteDelegationRecord: {
            typeUrl: string;
            encode(message: _249.MsgOverwriteDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.MsgOverwriteDelegationRecord;
            fromPartial(object: Partial<_249.MsgOverwriteDelegationRecord>): _249.MsgOverwriteDelegationRecord;
            fromAmino(object: _249.MsgOverwriteDelegationRecordAmino): _249.MsgOverwriteDelegationRecord;
            toAmino(message: _249.MsgOverwriteDelegationRecord): _249.MsgOverwriteDelegationRecordAmino;
            fromAminoMsg(object: _249.MsgOverwriteDelegationRecordAminoMsg): _249.MsgOverwriteDelegationRecord;
            toAminoMsg(message: _249.MsgOverwriteDelegationRecord): _249.MsgOverwriteDelegationRecordAminoMsg;
            fromProtoMsg(message: _249.MsgOverwriteDelegationRecordProtoMsg): _249.MsgOverwriteDelegationRecord;
            toProto(message: _249.MsgOverwriteDelegationRecord): Uint8Array;
            toProtoMsg(message: _249.MsgOverwriteDelegationRecord): _249.MsgOverwriteDelegationRecordProtoMsg;
        };
        MsgOverwriteDelegationRecordResponse: {
            typeUrl: string;
            encode(_: _249.MsgOverwriteDelegationRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.MsgOverwriteDelegationRecordResponse;
            fromPartial(_: Partial<_249.MsgOverwriteDelegationRecordResponse>): _249.MsgOverwriteDelegationRecordResponse;
            fromAmino(_: _249.MsgOverwriteDelegationRecordResponseAmino): _249.MsgOverwriteDelegationRecordResponse;
            toAmino(_: _249.MsgOverwriteDelegationRecordResponse): _249.MsgOverwriteDelegationRecordResponseAmino;
            fromAminoMsg(object: _249.MsgOverwriteDelegationRecordResponseAminoMsg): _249.MsgOverwriteDelegationRecordResponse;
            fromProtoMsg(message: _249.MsgOverwriteDelegationRecordResponseProtoMsg): _249.MsgOverwriteDelegationRecordResponse;
            toProto(message: _249.MsgOverwriteDelegationRecordResponse): Uint8Array;
            toProtoMsg(message: _249.MsgOverwriteDelegationRecordResponse): _249.MsgOverwriteDelegationRecordResponseProtoMsg;
        };
        MsgOverwriteUnbondingRecord: {
            typeUrl: string;
            encode(message: _249.MsgOverwriteUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.MsgOverwriteUnbondingRecord;
            fromPartial(object: Partial<_249.MsgOverwriteUnbondingRecord>): _249.MsgOverwriteUnbondingRecord;
            fromAmino(object: _249.MsgOverwriteUnbondingRecordAmino): _249.MsgOverwriteUnbondingRecord;
            toAmino(message: _249.MsgOverwriteUnbondingRecord): _249.MsgOverwriteUnbondingRecordAmino;
            fromAminoMsg(object: _249.MsgOverwriteUnbondingRecordAminoMsg): _249.MsgOverwriteUnbondingRecord;
            toAminoMsg(message: _249.MsgOverwriteUnbondingRecord): _249.MsgOverwriteUnbondingRecordAminoMsg;
            fromProtoMsg(message: _249.MsgOverwriteUnbondingRecordProtoMsg): _249.MsgOverwriteUnbondingRecord;
            toProto(message: _249.MsgOverwriteUnbondingRecord): Uint8Array;
            toProtoMsg(message: _249.MsgOverwriteUnbondingRecord): _249.MsgOverwriteUnbondingRecordProtoMsg;
        };
        MsgOverwriteUnbondingRecordResponse: {
            typeUrl: string;
            encode(_: _249.MsgOverwriteUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.MsgOverwriteUnbondingRecordResponse;
            fromPartial(_: Partial<_249.MsgOverwriteUnbondingRecordResponse>): _249.MsgOverwriteUnbondingRecordResponse;
            fromAmino(_: _249.MsgOverwriteUnbondingRecordResponseAmino): _249.MsgOverwriteUnbondingRecordResponse;
            toAmino(_: _249.MsgOverwriteUnbondingRecordResponse): _249.MsgOverwriteUnbondingRecordResponseAmino;
            fromAminoMsg(object: _249.MsgOverwriteUnbondingRecordResponseAminoMsg): _249.MsgOverwriteUnbondingRecordResponse;
            fromProtoMsg(message: _249.MsgOverwriteUnbondingRecordResponseProtoMsg): _249.MsgOverwriteUnbondingRecordResponse;
            toProto(message: _249.MsgOverwriteUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _249.MsgOverwriteUnbondingRecordResponse): _249.MsgOverwriteUnbondingRecordResponseProtoMsg;
        };
        MsgOverwriteRedemptionRecord: {
            typeUrl: string;
            encode(message: _249.MsgOverwriteRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.MsgOverwriteRedemptionRecord;
            fromPartial(object: Partial<_249.MsgOverwriteRedemptionRecord>): _249.MsgOverwriteRedemptionRecord;
            fromAmino(object: _249.MsgOverwriteRedemptionRecordAmino): _249.MsgOverwriteRedemptionRecord;
            toAmino(message: _249.MsgOverwriteRedemptionRecord): _249.MsgOverwriteRedemptionRecordAmino;
            fromAminoMsg(object: _249.MsgOverwriteRedemptionRecordAminoMsg): _249.MsgOverwriteRedemptionRecord;
            toAminoMsg(message: _249.MsgOverwriteRedemptionRecord): _249.MsgOverwriteRedemptionRecordAminoMsg;
            fromProtoMsg(message: _249.MsgOverwriteRedemptionRecordProtoMsg): _249.MsgOverwriteRedemptionRecord;
            toProto(message: _249.MsgOverwriteRedemptionRecord): Uint8Array;
            toProtoMsg(message: _249.MsgOverwriteRedemptionRecord): _249.MsgOverwriteRedemptionRecordProtoMsg;
        };
        MsgOverwriteRedemptionRecordResponse: {
            typeUrl: string;
            encode(_: _249.MsgOverwriteRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.MsgOverwriteRedemptionRecordResponse;
            fromPartial(_: Partial<_249.MsgOverwriteRedemptionRecordResponse>): _249.MsgOverwriteRedemptionRecordResponse;
            fromAmino(_: _249.MsgOverwriteRedemptionRecordResponseAmino): _249.MsgOverwriteRedemptionRecordResponse;
            toAmino(_: _249.MsgOverwriteRedemptionRecordResponse): _249.MsgOverwriteRedemptionRecordResponseAmino;
            fromAminoMsg(object: _249.MsgOverwriteRedemptionRecordResponseAminoMsg): _249.MsgOverwriteRedemptionRecordResponse;
            fromProtoMsg(message: _249.MsgOverwriteRedemptionRecordResponseProtoMsg): _249.MsgOverwriteRedemptionRecordResponse;
            toProto(message: _249.MsgOverwriteRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _249.MsgOverwriteRedemptionRecordResponse): _249.MsgOverwriteRedemptionRecordResponseProtoMsg;
        };
        MsgSetOperatorAddress: {
            typeUrl: string;
            encode(message: _249.MsgSetOperatorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.MsgSetOperatorAddress;
            fromPartial(object: Partial<_249.MsgSetOperatorAddress>): _249.MsgSetOperatorAddress;
            fromAmino(object: _249.MsgSetOperatorAddressAmino): _249.MsgSetOperatorAddress;
            toAmino(message: _249.MsgSetOperatorAddress): _249.MsgSetOperatorAddressAmino;
            fromAminoMsg(object: _249.MsgSetOperatorAddressAminoMsg): _249.MsgSetOperatorAddress;
            toAminoMsg(message: _249.MsgSetOperatorAddress): _249.MsgSetOperatorAddressAminoMsg;
            fromProtoMsg(message: _249.MsgSetOperatorAddressProtoMsg): _249.MsgSetOperatorAddress;
            toProto(message: _249.MsgSetOperatorAddress): Uint8Array;
            toProtoMsg(message: _249.MsgSetOperatorAddress): _249.MsgSetOperatorAddressProtoMsg;
        };
        MsgSetOperatorAddressResponse: {
            typeUrl: string;
            encode(_: _249.MsgSetOperatorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.MsgSetOperatorAddressResponse;
            fromPartial(_: Partial<_249.MsgSetOperatorAddressResponse>): _249.MsgSetOperatorAddressResponse;
            fromAmino(_: _249.MsgSetOperatorAddressResponseAmino): _249.MsgSetOperatorAddressResponse;
            toAmino(_: _249.MsgSetOperatorAddressResponse): _249.MsgSetOperatorAddressResponseAmino;
            fromAminoMsg(object: _249.MsgSetOperatorAddressResponseAminoMsg): _249.MsgSetOperatorAddressResponse;
            fromProtoMsg(message: _249.MsgSetOperatorAddressResponseProtoMsg): _249.MsgSetOperatorAddressResponse;
            toProto(message: _249.MsgSetOperatorAddressResponse): Uint8Array;
            toProtoMsg(message: _249.MsgSetOperatorAddressResponse): _249.MsgSetOperatorAddressResponseProtoMsg;
        };
        delegationRecordStatusFromJSON(object: any): _248.DelegationRecordStatus;
        delegationRecordStatusToJSON(object: _248.DelegationRecordStatus): string;
        unbondingRecordStatusFromJSON(object: any): _248.UnbondingRecordStatus;
        unbondingRecordStatusToJSON(object: _248.UnbondingRecordStatus): string;
        DelegationRecordStatus: typeof _248.DelegationRecordStatus;
        DelegationRecordStatusSDKType: typeof _248.DelegationRecordStatus;
        DelegationRecordStatusAmino: typeof _248.DelegationRecordStatus;
        UnbondingRecordStatus: typeof _248.UnbondingRecordStatus;
        UnbondingRecordStatusSDKType: typeof _248.UnbondingRecordStatus;
        UnbondingRecordStatusAmino: typeof _248.UnbondingRecordStatus;
        HostZone: {
            typeUrl: string;
            encode(message: _248.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.HostZone;
            fromPartial(object: Partial<_248.HostZone>): _248.HostZone;
            fromAmino(object: _248.HostZoneAmino): _248.HostZone;
            toAmino(message: _248.HostZone): _248.HostZoneAmino;
            fromAminoMsg(object: _248.HostZoneAminoMsg): _248.HostZone;
            fromProtoMsg(message: _248.HostZoneProtoMsg): _248.HostZone;
            toProto(message: _248.HostZone): Uint8Array;
            toProtoMsg(message: _248.HostZone): _248.HostZoneProtoMsg;
        };
        DelegationRecord: {
            typeUrl: string;
            encode(message: _248.DelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.DelegationRecord;
            fromPartial(object: Partial<_248.DelegationRecord>): _248.DelegationRecord;
            fromAmino(object: _248.DelegationRecordAmino): _248.DelegationRecord;
            toAmino(message: _248.DelegationRecord): _248.DelegationRecordAmino;
            fromAminoMsg(object: _248.DelegationRecordAminoMsg): _248.DelegationRecord;
            fromProtoMsg(message: _248.DelegationRecordProtoMsg): _248.DelegationRecord;
            toProto(message: _248.DelegationRecord): Uint8Array;
            toProtoMsg(message: _248.DelegationRecord): _248.DelegationRecordProtoMsg;
        };
        UnbondingRecord: {
            typeUrl: string;
            encode(message: _248.UnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.UnbondingRecord;
            fromPartial(object: Partial<_248.UnbondingRecord>): _248.UnbondingRecord;
            fromAmino(object: _248.UnbondingRecordAmino): _248.UnbondingRecord;
            toAmino(message: _248.UnbondingRecord): _248.UnbondingRecordAmino;
            fromAminoMsg(object: _248.UnbondingRecordAminoMsg): _248.UnbondingRecord;
            fromProtoMsg(message: _248.UnbondingRecordProtoMsg): _248.UnbondingRecord;
            toProto(message: _248.UnbondingRecord): Uint8Array;
            toProtoMsg(message: _248.UnbondingRecord): _248.UnbondingRecordProtoMsg;
        };
        RedemptionRecord: {
            typeUrl: string;
            encode(message: _248.RedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.RedemptionRecord;
            fromPartial(object: Partial<_248.RedemptionRecord>): _248.RedemptionRecord;
            fromAmino(object: _248.RedemptionRecordAmino): _248.RedemptionRecord;
            toAmino(message: _248.RedemptionRecord): _248.RedemptionRecordAmino;
            fromAminoMsg(object: _248.RedemptionRecordAminoMsg): _248.RedemptionRecord;
            fromProtoMsg(message: _248.RedemptionRecordProtoMsg): _248.RedemptionRecord;
            toProto(message: _248.RedemptionRecord): Uint8Array;
            toProtoMsg(message: _248.RedemptionRecord): _248.RedemptionRecordProtoMsg;
        };
        SlashRecord: {
            typeUrl: string;
            encode(message: _248.SlashRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.SlashRecord;
            fromPartial(object: Partial<_248.SlashRecord>): _248.SlashRecord;
            fromAmino(object: _248.SlashRecordAmino): _248.SlashRecord;
            toAmino(message: _248.SlashRecord): _248.SlashRecordAmino;
            fromAminoMsg(object: _248.SlashRecordAminoMsg): _248.SlashRecord;
            fromProtoMsg(message: _248.SlashRecordProtoMsg): _248.SlashRecord;
            toProto(message: _248.SlashRecord): Uint8Array;
            toProtoMsg(message: _248.SlashRecord): _248.SlashRecordProtoMsg;
        };
        QueryHostZoneRequest: {
            typeUrl: string;
            encode(_: _247.QueryHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.QueryHostZoneRequest;
            fromPartial(_: Partial<_247.QueryHostZoneRequest>): _247.QueryHostZoneRequest;
            fromAmino(_: _247.QueryHostZoneRequestAmino): _247.QueryHostZoneRequest;
            toAmino(_: _247.QueryHostZoneRequest): _247.QueryHostZoneRequestAmino;
            fromAminoMsg(object: _247.QueryHostZoneRequestAminoMsg): _247.QueryHostZoneRequest;
            fromProtoMsg(message: _247.QueryHostZoneRequestProtoMsg): _247.QueryHostZoneRequest;
            toProto(message: _247.QueryHostZoneRequest): Uint8Array;
            toProtoMsg(message: _247.QueryHostZoneRequest): _247.QueryHostZoneRequestProtoMsg;
        };
        QueryHostZoneResponse: {
            typeUrl: string;
            encode(message: _247.QueryHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.QueryHostZoneResponse;
            fromPartial(object: Partial<_247.QueryHostZoneResponse>): _247.QueryHostZoneResponse;
            fromAmino(object: _247.QueryHostZoneResponseAmino): _247.QueryHostZoneResponse;
            toAmino(message: _247.QueryHostZoneResponse): _247.QueryHostZoneResponseAmino;
            fromAminoMsg(object: _247.QueryHostZoneResponseAminoMsg): _247.QueryHostZoneResponse;
            fromProtoMsg(message: _247.QueryHostZoneResponseProtoMsg): _247.QueryHostZoneResponse;
            toProto(message: _247.QueryHostZoneResponse): Uint8Array;
            toProtoMsg(message: _247.QueryHostZoneResponse): _247.QueryHostZoneResponseProtoMsg;
        };
        QueryDelegationRecordsRequest: {
            typeUrl: string;
            encode(message: _247.QueryDelegationRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.QueryDelegationRecordsRequest;
            fromPartial(object: Partial<_247.QueryDelegationRecordsRequest>): _247.QueryDelegationRecordsRequest;
            fromAmino(object: _247.QueryDelegationRecordsRequestAmino): _247.QueryDelegationRecordsRequest;
            toAmino(message: _247.QueryDelegationRecordsRequest): _247.QueryDelegationRecordsRequestAmino;
            fromAminoMsg(object: _247.QueryDelegationRecordsRequestAminoMsg): _247.QueryDelegationRecordsRequest;
            fromProtoMsg(message: _247.QueryDelegationRecordsRequestProtoMsg): _247.QueryDelegationRecordsRequest;
            toProto(message: _247.QueryDelegationRecordsRequest): Uint8Array;
            toProtoMsg(message: _247.QueryDelegationRecordsRequest): _247.QueryDelegationRecordsRequestProtoMsg;
        };
        QueryDelegationRecordsResponse: {
            typeUrl: string;
            encode(message: _247.QueryDelegationRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.QueryDelegationRecordsResponse;
            fromPartial(object: Partial<_247.QueryDelegationRecordsResponse>): _247.QueryDelegationRecordsResponse;
            fromAmino(object: _247.QueryDelegationRecordsResponseAmino): _247.QueryDelegationRecordsResponse;
            toAmino(message: _247.QueryDelegationRecordsResponse): _247.QueryDelegationRecordsResponseAmino;
            fromAminoMsg(object: _247.QueryDelegationRecordsResponseAminoMsg): _247.QueryDelegationRecordsResponse;
            fromProtoMsg(message: _247.QueryDelegationRecordsResponseProtoMsg): _247.QueryDelegationRecordsResponse;
            toProto(message: _247.QueryDelegationRecordsResponse): Uint8Array;
            toProtoMsg(message: _247.QueryDelegationRecordsResponse): _247.QueryDelegationRecordsResponseProtoMsg;
        };
        QueryUnbondingRecordsRequest: {
            typeUrl: string;
            encode(message: _247.QueryUnbondingRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.QueryUnbondingRecordsRequest;
            fromPartial(object: Partial<_247.QueryUnbondingRecordsRequest>): _247.QueryUnbondingRecordsRequest;
            fromAmino(object: _247.QueryUnbondingRecordsRequestAmino): _247.QueryUnbondingRecordsRequest;
            toAmino(message: _247.QueryUnbondingRecordsRequest): _247.QueryUnbondingRecordsRequestAmino;
            fromAminoMsg(object: _247.QueryUnbondingRecordsRequestAminoMsg): _247.QueryUnbondingRecordsRequest;
            fromProtoMsg(message: _247.QueryUnbondingRecordsRequestProtoMsg): _247.QueryUnbondingRecordsRequest;
            toProto(message: _247.QueryUnbondingRecordsRequest): Uint8Array;
            toProtoMsg(message: _247.QueryUnbondingRecordsRequest): _247.QueryUnbondingRecordsRequestProtoMsg;
        };
        QueryUnbondingRecordsResponse: {
            typeUrl: string;
            encode(message: _247.QueryUnbondingRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.QueryUnbondingRecordsResponse;
            fromPartial(object: Partial<_247.QueryUnbondingRecordsResponse>): _247.QueryUnbondingRecordsResponse;
            fromAmino(object: _247.QueryUnbondingRecordsResponseAmino): _247.QueryUnbondingRecordsResponse;
            toAmino(message: _247.QueryUnbondingRecordsResponse): _247.QueryUnbondingRecordsResponseAmino;
            fromAminoMsg(object: _247.QueryUnbondingRecordsResponseAminoMsg): _247.QueryUnbondingRecordsResponse;
            fromProtoMsg(message: _247.QueryUnbondingRecordsResponseProtoMsg): _247.QueryUnbondingRecordsResponse;
            toProto(message: _247.QueryUnbondingRecordsResponse): Uint8Array;
            toProtoMsg(message: _247.QueryUnbondingRecordsResponse): _247.QueryUnbondingRecordsResponseProtoMsg;
        };
        QueryRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _247.QueryRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.QueryRedemptionRecordRequest;
            fromPartial(object: Partial<_247.QueryRedemptionRecordRequest>): _247.QueryRedemptionRecordRequest;
            fromAmino(object: _247.QueryRedemptionRecordRequestAmino): _247.QueryRedemptionRecordRequest;
            toAmino(message: _247.QueryRedemptionRecordRequest): _247.QueryRedemptionRecordRequestAmino;
            fromAminoMsg(object: _247.QueryRedemptionRecordRequestAminoMsg): _247.QueryRedemptionRecordRequest;
            fromProtoMsg(message: _247.QueryRedemptionRecordRequestProtoMsg): _247.QueryRedemptionRecordRequest;
            toProto(message: _247.QueryRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _247.QueryRedemptionRecordRequest): _247.QueryRedemptionRecordRequestProtoMsg;
        };
        QueryRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _247.QueryRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.QueryRedemptionRecordResponse;
            fromPartial(object: Partial<_247.QueryRedemptionRecordResponse>): _247.QueryRedemptionRecordResponse;
            fromAmino(object: _247.QueryRedemptionRecordResponseAmino): _247.QueryRedemptionRecordResponse;
            toAmino(message: _247.QueryRedemptionRecordResponse): _247.QueryRedemptionRecordResponseAmino;
            fromAminoMsg(object: _247.QueryRedemptionRecordResponseAminoMsg): _247.QueryRedemptionRecordResponse;
            fromProtoMsg(message: _247.QueryRedemptionRecordResponseProtoMsg): _247.QueryRedemptionRecordResponse;
            toProto(message: _247.QueryRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _247.QueryRedemptionRecordResponse): _247.QueryRedemptionRecordResponseProtoMsg;
        };
        QueryRedemptionRecordsRequest: {
            typeUrl: string;
            encode(message: _247.QueryRedemptionRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.QueryRedemptionRecordsRequest;
            fromPartial(object: Partial<_247.QueryRedemptionRecordsRequest>): _247.QueryRedemptionRecordsRequest;
            fromAmino(object: _247.QueryRedemptionRecordsRequestAmino): _247.QueryRedemptionRecordsRequest;
            toAmino(message: _247.QueryRedemptionRecordsRequest): _247.QueryRedemptionRecordsRequestAmino;
            fromAminoMsg(object: _247.QueryRedemptionRecordsRequestAminoMsg): _247.QueryRedemptionRecordsRequest;
            fromProtoMsg(message: _247.QueryRedemptionRecordsRequestProtoMsg): _247.QueryRedemptionRecordsRequest;
            toProto(message: _247.QueryRedemptionRecordsRequest): Uint8Array;
            toProtoMsg(message: _247.QueryRedemptionRecordsRequest): _247.QueryRedemptionRecordsRequestProtoMsg;
        };
        QueryRedemptionRecordsResponse: {
            typeUrl: string;
            encode(message: _247.QueryRedemptionRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.QueryRedemptionRecordsResponse;
            fromPartial(object: Partial<_247.QueryRedemptionRecordsResponse>): _247.QueryRedemptionRecordsResponse;
            fromAmino(object: _247.QueryRedemptionRecordsResponseAmino): _247.QueryRedemptionRecordsResponse;
            toAmino(message: _247.QueryRedemptionRecordsResponse): _247.QueryRedemptionRecordsResponseAmino;
            fromAminoMsg(object: _247.QueryRedemptionRecordsResponseAminoMsg): _247.QueryRedemptionRecordsResponse;
            fromProtoMsg(message: _247.QueryRedemptionRecordsResponseProtoMsg): _247.QueryRedemptionRecordsResponse;
            toProto(message: _247.QueryRedemptionRecordsResponse): Uint8Array;
            toProtoMsg(message: _247.QueryRedemptionRecordsResponse): _247.QueryRedemptionRecordsResponseProtoMsg;
        };
        QuerySlashRecordsRequest: {
            typeUrl: string;
            encode(_: _247.QuerySlashRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.QuerySlashRecordsRequest;
            fromPartial(_: Partial<_247.QuerySlashRecordsRequest>): _247.QuerySlashRecordsRequest;
            fromAmino(_: _247.QuerySlashRecordsRequestAmino): _247.QuerySlashRecordsRequest;
            toAmino(_: _247.QuerySlashRecordsRequest): _247.QuerySlashRecordsRequestAmino;
            fromAminoMsg(object: _247.QuerySlashRecordsRequestAminoMsg): _247.QuerySlashRecordsRequest;
            fromProtoMsg(message: _247.QuerySlashRecordsRequestProtoMsg): _247.QuerySlashRecordsRequest;
            toProto(message: _247.QuerySlashRecordsRequest): Uint8Array;
            toProtoMsg(message: _247.QuerySlashRecordsRequest): _247.QuerySlashRecordsRequestProtoMsg;
        };
        QuerySlashRecordsResponse: {
            typeUrl: string;
            encode(message: _247.QuerySlashRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.QuerySlashRecordsResponse;
            fromPartial(object: Partial<_247.QuerySlashRecordsResponse>): _247.QuerySlashRecordsResponse;
            fromAmino(object: _247.QuerySlashRecordsResponseAmino): _247.QuerySlashRecordsResponse;
            toAmino(message: _247.QuerySlashRecordsResponse): _247.QuerySlashRecordsResponseAmino;
            fromAminoMsg(object: _247.QuerySlashRecordsResponseAminoMsg): _247.QuerySlashRecordsResponse;
            fromProtoMsg(message: _247.QuerySlashRecordsResponseProtoMsg): _247.QuerySlashRecordsResponse;
            toProto(message: _247.QuerySlashRecordsResponse): Uint8Array;
            toProtoMsg(message: _247.QuerySlashRecordsResponse): _247.QuerySlashRecordsResponseProtoMsg;
        };
        RedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _247.RedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.RedemptionRecordResponse;
            fromPartial(object: Partial<_247.RedemptionRecordResponse>): _247.RedemptionRecordResponse;
            fromAmino(object: _247.RedemptionRecordResponseAmino): _247.RedemptionRecordResponse;
            toAmino(message: _247.RedemptionRecordResponse): _247.RedemptionRecordResponseAmino;
            fromAminoMsg(object: _247.RedemptionRecordResponseAminoMsg): _247.RedemptionRecordResponse;
            fromProtoMsg(message: _247.RedemptionRecordResponseProtoMsg): _247.RedemptionRecordResponse;
            toProto(message: _247.RedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _247.RedemptionRecordResponse): _247.RedemptionRecordResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _246.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _246.Params;
            fromPartial(_: Partial<_246.Params>): _246.Params;
            fromAmino(_: _246.ParamsAmino): _246.Params;
            toAmino(_: _246.Params): _246.ParamsAmino;
            fromAminoMsg(object: _246.ParamsAminoMsg): _246.Params;
            fromProtoMsg(message: _246.ParamsProtoMsg): _246.Params;
            toProto(message: _246.Params): Uint8Array;
            toProtoMsg(message: _246.Params): _246.ParamsProtoMsg;
        };
        TransferInProgressRecordIds: {
            typeUrl: string;
            encode(message: _246.TransferInProgressRecordIds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _246.TransferInProgressRecordIds;
            fromPartial(object: Partial<_246.TransferInProgressRecordIds>): _246.TransferInProgressRecordIds;
            fromAmino(object: _246.TransferInProgressRecordIdsAmino): _246.TransferInProgressRecordIds;
            toAmino(message: _246.TransferInProgressRecordIds): _246.TransferInProgressRecordIdsAmino;
            fromAminoMsg(object: _246.TransferInProgressRecordIdsAminoMsg): _246.TransferInProgressRecordIds;
            fromProtoMsg(message: _246.TransferInProgressRecordIdsProtoMsg): _246.TransferInProgressRecordIds;
            toProto(message: _246.TransferInProgressRecordIds): Uint8Array;
            toProtoMsg(message: _246.TransferInProgressRecordIds): _246.TransferInProgressRecordIdsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _246.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _246.GenesisState;
            fromPartial(object: Partial<_246.GenesisState>): _246.GenesisState;
            fromAmino(object: _246.GenesisStateAmino): _246.GenesisState;
            toAmino(message: _246.GenesisState): _246.GenesisStateAmino;
            fromAminoMsg(object: _246.GenesisStateAminoMsg): _246.GenesisState;
            fromProtoMsg(message: _246.GenesisStateProtoMsg): _246.GenesisState;
            toProto(message: _246.GenesisState): Uint8Array;
            toProtoMsg(message: _246.GenesisState): _246.GenesisStateProtoMsg;
        };
    };
    const strdburner: {
        QueryClientImpl: typeof _401.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            strdBurnerAddress(request?: _251.QueryStrdBurnerAddressRequest): Promise<_251.QueryStrdBurnerAddressResponse>;
            totalStrdBurned(request?: _251.QueryTotalStrdBurnedRequest): Promise<_251.QueryTotalStrdBurnedResponse>;
        };
        QueryStrdBurnerAddressRequest: {
            typeUrl: string;
            encode(_: _251.QueryStrdBurnerAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.QueryStrdBurnerAddressRequest;
            fromPartial(_: Partial<_251.QueryStrdBurnerAddressRequest>): _251.QueryStrdBurnerAddressRequest;
            fromAmino(_: _251.QueryStrdBurnerAddressRequestAmino): _251.QueryStrdBurnerAddressRequest;
            toAmino(_: _251.QueryStrdBurnerAddressRequest): _251.QueryStrdBurnerAddressRequestAmino;
            fromAminoMsg(object: _251.QueryStrdBurnerAddressRequestAminoMsg): _251.QueryStrdBurnerAddressRequest;
            fromProtoMsg(message: _251.QueryStrdBurnerAddressRequestProtoMsg): _251.QueryStrdBurnerAddressRequest;
            toProto(message: _251.QueryStrdBurnerAddressRequest): Uint8Array;
            toProtoMsg(message: _251.QueryStrdBurnerAddressRequest): _251.QueryStrdBurnerAddressRequestProtoMsg;
        };
        QueryStrdBurnerAddressResponse: {
            typeUrl: string;
            encode(message: _251.QueryStrdBurnerAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.QueryStrdBurnerAddressResponse;
            fromPartial(object: Partial<_251.QueryStrdBurnerAddressResponse>): _251.QueryStrdBurnerAddressResponse;
            fromAmino(object: _251.QueryStrdBurnerAddressResponseAmino): _251.QueryStrdBurnerAddressResponse;
            toAmino(message: _251.QueryStrdBurnerAddressResponse): _251.QueryStrdBurnerAddressResponseAmino;
            fromAminoMsg(object: _251.QueryStrdBurnerAddressResponseAminoMsg): _251.QueryStrdBurnerAddressResponse;
            fromProtoMsg(message: _251.QueryStrdBurnerAddressResponseProtoMsg): _251.QueryStrdBurnerAddressResponse;
            toProto(message: _251.QueryStrdBurnerAddressResponse): Uint8Array;
            toProtoMsg(message: _251.QueryStrdBurnerAddressResponse): _251.QueryStrdBurnerAddressResponseProtoMsg;
        };
        QueryTotalStrdBurnedRequest: {
            typeUrl: string;
            encode(_: _251.QueryTotalStrdBurnedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.QueryTotalStrdBurnedRequest;
            fromPartial(_: Partial<_251.QueryTotalStrdBurnedRequest>): _251.QueryTotalStrdBurnedRequest;
            fromAmino(_: _251.QueryTotalStrdBurnedRequestAmino): _251.QueryTotalStrdBurnedRequest;
            toAmino(_: _251.QueryTotalStrdBurnedRequest): _251.QueryTotalStrdBurnedRequestAmino;
            fromAminoMsg(object: _251.QueryTotalStrdBurnedRequestAminoMsg): _251.QueryTotalStrdBurnedRequest;
            fromProtoMsg(message: _251.QueryTotalStrdBurnedRequestProtoMsg): _251.QueryTotalStrdBurnedRequest;
            toProto(message: _251.QueryTotalStrdBurnedRequest): Uint8Array;
            toProtoMsg(message: _251.QueryTotalStrdBurnedRequest): _251.QueryTotalStrdBurnedRequestProtoMsg;
        };
        QueryTotalStrdBurnedResponse: {
            typeUrl: string;
            encode(message: _251.QueryTotalStrdBurnedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _251.QueryTotalStrdBurnedResponse;
            fromPartial(object: Partial<_251.QueryTotalStrdBurnedResponse>): _251.QueryTotalStrdBurnedResponse;
            fromAmino(object: _251.QueryTotalStrdBurnedResponseAmino): _251.QueryTotalStrdBurnedResponse;
            toAmino(message: _251.QueryTotalStrdBurnedResponse): _251.QueryTotalStrdBurnedResponseAmino;
            fromAminoMsg(object: _251.QueryTotalStrdBurnedResponseAminoMsg): _251.QueryTotalStrdBurnedResponse;
            fromProtoMsg(message: _251.QueryTotalStrdBurnedResponseProtoMsg): _251.QueryTotalStrdBurnedResponse;
            toProto(message: _251.QueryTotalStrdBurnedResponse): Uint8Array;
            toProtoMsg(message: _251.QueryTotalStrdBurnedResponse): _251.QueryTotalStrdBurnedResponseProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _250.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.GenesisState;
            fromPartial(object: Partial<_250.GenesisState>): _250.GenesisState;
            fromAmino(object: _250.GenesisStateAmino): _250.GenesisState;
            toAmino(message: _250.GenesisState): _250.GenesisStateAmino;
            fromAminoMsg(object: _250.GenesisStateAminoMsg): _250.GenesisState;
            fromProtoMsg(message: _250.GenesisStateProtoMsg): _250.GenesisState;
            toProto(message: _250.GenesisState): Uint8Array;
            toProtoMsg(message: _250.GenesisState): _250.GenesisStateProtoMsg;
        };
    };
    const vesting: {
        BaseVestingAccount: {
            typeUrl: string;
            encode(message: _253.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.BaseVestingAccount;
            fromPartial(object: Partial<_253.BaseVestingAccount>): _253.BaseVestingAccount;
            fromAmino(object: _253.BaseVestingAccountAmino): _253.BaseVestingAccount;
            toAmino(message: _253.BaseVestingAccount): _253.BaseVestingAccountAmino;
            fromAminoMsg(object: _253.BaseVestingAccountAminoMsg): _253.BaseVestingAccount;
            fromProtoMsg(message: _253.BaseVestingAccountProtoMsg): _253.BaseVestingAccount;
            toProto(message: _253.BaseVestingAccount): Uint8Array;
            toProtoMsg(message: _253.BaseVestingAccount): _253.BaseVestingAccountProtoMsg;
        };
        Period: {
            typeUrl: string;
            encode(message: _253.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.Period;
            fromPartial(object: Partial<_253.Period>): _253.Period;
            fromAmino(object: _253.PeriodAmino): _253.Period;
            toAmino(message: _253.Period): _253.PeriodAmino;
            fromAminoMsg(object: _253.PeriodAminoMsg): _253.Period;
            fromProtoMsg(message: _253.PeriodProtoMsg): _253.Period;
            toProto(message: _253.Period): Uint8Array;
            toProtoMsg(message: _253.Period): _253.PeriodProtoMsg;
        };
        StridePeriodicVestingAccount: {
            typeUrl: string;
            encode(message: _253.StridePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _253.StridePeriodicVestingAccount;
            fromPartial(object: Partial<_253.StridePeriodicVestingAccount>): _253.StridePeriodicVestingAccount;
            fromAmino(object: _253.StridePeriodicVestingAccountAmino): _253.StridePeriodicVestingAccount;
            toAmino(message: _253.StridePeriodicVestingAccount): _253.StridePeriodicVestingAccountAmino;
            fromAminoMsg(object: _253.StridePeriodicVestingAccountAminoMsg): _253.StridePeriodicVestingAccount;
            fromProtoMsg(message: _253.StridePeriodicVestingAccountProtoMsg): _253.StridePeriodicVestingAccount;
            toProto(message: _253.StridePeriodicVestingAccount): Uint8Array;
            toProtoMsg(message: _253.StridePeriodicVestingAccount): _253.StridePeriodicVestingAccountProtoMsg;
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
                airdrop: _402.MsgClientImpl;
                auction: _403.MsgClientImpl;
                claim: _404.MsgClientImpl;
                icaoracle: _405.MsgClientImpl;
                icqoracle: _406.MsgClientImpl;
                interchainquery: {
                    v1: _407.MsgClientImpl;
                };
                stakedym: _408.MsgClientImpl;
                stakeibc: _409.MsgClientImpl;
                staketia: _410.MsgClientImpl;
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
                    airdrop(request: _186.QueryAirdropRequest): Promise<_186.QueryAirdropResponse>;
                    allAirdrops(request?: _186.QueryAllAirdropsRequest): Promise<_186.QueryAllAirdropsResponse>;
                    userAllocation(request: _186.QueryUserAllocationRequest): Promise<_186.QueryUserAllocationResponse>;
                    userAllocations(request: _186.QueryUserAllocationsRequest): Promise<_186.QueryUserAllocationsResponse>;
                    allAllocations(request: _186.QueryAllAllocationsRequest): Promise<_186.QueryAllAllocationsResponse>;
                    userSummary(request: _186.QueryUserSummaryRequest): Promise<_186.QueryUserSummaryResponse>;
                };
                auction: {
                    auction(request: _190.QueryAuctionRequest): Promise<_190.QueryAuctionResponse>;
                    auctions(request?: _190.QueryAuctionsRequest): Promise<_190.QueryAuctionsResponse>;
                };
                autopilot: {
                    params(request?: _194.QueryParamsRequest): Promise<_194.QueryParamsResponse>;
                };
                claim: {
                    distributorAccountBalance(request: _198.QueryDistributorAccountBalanceRequest): Promise<_198.QueryDistributorAccountBalanceResponse>;
                    params(request?: _198.QueryParamsRequest): Promise<_198.QueryParamsResponse>;
                    claimRecord(request: _198.QueryClaimRecordRequest): Promise<_198.QueryClaimRecordResponse>;
                    claimableForAction(request: _198.QueryClaimableForActionRequest): Promise<_198.QueryClaimableForActionResponse>;
                    totalClaimable(request: _198.QueryTotalClaimableRequest): Promise<_198.QueryTotalClaimableResponse>;
                    userVestings(request: _198.QueryUserVestingsRequest): Promise<_198.QueryUserVestingsResponse>;
                    claimStatus(request: _198.QueryClaimStatusRequest): Promise<_198.QueryClaimStatusResponse>;
                    claimMetadata(request?: _198.QueryClaimMetadataRequest): Promise<_198.QueryClaimMetadataResponse>;
                };
                epochs: {
                    epochInfos(request?: _201.QueryEpochsInfoRequest): Promise<_201.QueryEpochsInfoResponse>;
                    currentEpoch(request: _201.QueryCurrentEpochRequest): Promise<_201.QueryCurrentEpochResponse>;
                    epochInfo(request: _201.QueryEpochInfoRequest): Promise<_201.QueryEpochInfoResponse>;
                };
                icacallbacks: {
                    params(request?: _206.QueryParamsRequest): Promise<_206.QueryParamsResponse>;
                    callbackData(request: _206.QueryGetCallbackDataRequest): Promise<_206.QueryGetCallbackDataResponse>;
                    callbackDataAll(request?: _206.QueryAllCallbackDataRequest): Promise<_206.QueryAllCallbackDataResponse>;
                };
                icaoracle: {
                    oracle(request: _212.QueryOracleRequest): Promise<_212.QueryOracleResponse>;
                    allOracles(request?: _212.QueryAllOraclesRequest): Promise<_212.QueryAllOraclesResponse>;
                    activeOracles(request: _212.QueryActiveOraclesRequest): Promise<_212.QueryActiveOraclesResponse>;
                    metrics(request: _212.QueryMetricsRequest): Promise<_212.QueryMetricsResponse>;
                };
                icqoracle: {
                    tokenPrice(request: _216.QueryTokenPriceRequest): Promise<_216.TokenPriceResponse>;
                    tokenPrices(request?: _216.QueryTokenPricesRequest): Promise<_216.QueryTokenPricesResponse>;
                    params(request?: _216.QueryParamsRequest): Promise<_216.QueryParamsResponse>;
                    tokenPriceForQuoteDenom(request: _216.QueryTokenPriceForQuoteDenomRequest): Promise<_216.QueryTokenPriceForQuoteDenomResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _223.QueryParamsRequest): Promise<_223.QueryParamsResponse>;
                        epochProvisions(request?: _223.QueryEpochProvisionsRequest): Promise<_223.QueryEpochProvisionsResponse>;
                    };
                };
                records: {
                    params(request?: _227.QueryParamsRequest): Promise<_227.QueryParamsResponse>;
                    userRedemptionRecord(request: _227.QueryGetUserRedemptionRecordRequest): Promise<_227.QueryGetUserRedemptionRecordResponse>;
                    userRedemptionRecordAll(request?: _227.QueryAllUserRedemptionRecordRequest): Promise<_227.QueryAllUserRedemptionRecordResponse>;
                    userRedemptionRecordForUser(request: _227.QueryAllUserRedemptionRecordForUserRequest): Promise<_227.QueryAllUserRedemptionRecordForUserResponse>;
                    epochUnbondingRecord(request: _227.QueryGetEpochUnbondingRecordRequest): Promise<_227.QueryGetEpochUnbondingRecordResponse>;
                    epochUnbondingRecordAll(request?: _227.QueryAllEpochUnbondingRecordRequest): Promise<_227.QueryAllEpochUnbondingRecordResponse>;
                    depositRecord(request: _227.QueryGetDepositRecordRequest): Promise<_227.QueryGetDepositRecordResponse>;
                    depositRecordAll(request?: _227.QueryAllDepositRecordRequest): Promise<_227.QueryAllDepositRecordResponse>;
                    depositRecordByHost(request: _227.QueryDepositRecordByHostRequest): Promise<_227.QueryDepositRecordByHostResponse>;
                    lSMDeposit(request: _227.QueryLSMDepositRequest): Promise<_227.QueryLSMDepositResponse>;
                    lSMDeposits(request: _227.QueryLSMDepositsRequest): Promise<_227.QueryLSMDepositsResponse>;
                };
                stakedym: {
                    hostZone(request?: _230.QueryHostZoneRequest): Promise<_230.QueryHostZoneResponse>;
                    delegationRecords(request: _230.QueryDelegationRecordsRequest): Promise<_230.QueryDelegationRecordsResponse>;
                    unbondingRecords(request: _230.QueryUnbondingRecordsRequest): Promise<_230.QueryUnbondingRecordsResponse>;
                    redemptionRecord(request: _230.QueryRedemptionRecordRequest): Promise<_230.QueryRedemptionRecordResponse>;
                    redemptionRecords(request: _230.QueryRedemptionRecordsRequest): Promise<_230.QueryRedemptionRecordsResponse>;
                    slashRecords(request?: _230.QuerySlashRecordsRequest): Promise<_230.QuerySlashRecordsResponse>;
                };
                stakeibc: {
                    params(request?: _242.QueryParamsRequest): Promise<_242.QueryParamsResponse>;
                    validators(request: _242.QueryGetValidatorsRequest): Promise<_242.QueryGetValidatorsResponse>;
                    hostZone(request: _242.QueryGetHostZoneRequest): Promise<_242.QueryGetHostZoneResponse>;
                    hostZoneAll(request?: _242.QueryAllHostZoneRequest): Promise<_242.QueryAllHostZoneResponse>;
                    moduleAddress(request: _242.QueryModuleAddressRequest): Promise<_242.QueryModuleAddressResponse>;
                    interchainAccountFromAddress(request: _242.QueryInterchainAccountFromAddressRequest): Promise<_242.QueryInterchainAccountFromAddressResponse>;
                    epochTracker(request: _242.QueryGetEpochTrackerRequest): Promise<_242.QueryGetEpochTrackerResponse>;
                    epochTrackerAll(request?: _242.QueryAllEpochTrackerRequest): Promise<_242.QueryAllEpochTrackerResponse>;
                    nextPacketSequence(request: _242.QueryGetNextPacketSequenceRequest): Promise<_242.QueryGetNextPacketSequenceResponse>;
                    addressUnbondings(request: _242.QueryAddressUnbondings): Promise<_242.QueryAddressUnbondingsResponse>;
                    allTradeRoutes(request?: _242.QueryAllTradeRoutes): Promise<_242.QueryAllTradeRoutesResponse>;
                };
                staketia: {
                    hostZone(request?: _247.QueryHostZoneRequest): Promise<_247.QueryHostZoneResponse>;
                    delegationRecords(request: _247.QueryDelegationRecordsRequest): Promise<_247.QueryDelegationRecordsResponse>;
                    unbondingRecords(request: _247.QueryUnbondingRecordsRequest): Promise<_247.QueryUnbondingRecordsResponse>;
                    redemptionRecord(request: _247.QueryRedemptionRecordRequest): Promise<_247.QueryRedemptionRecordResponse>;
                    redemptionRecords(request: _247.QueryRedemptionRecordsRequest): Promise<_247.QueryRedemptionRecordsResponse>;
                    slashRecords(request?: _247.QuerySlashRecordsRequest): Promise<_247.QuerySlashRecordsResponse>;
                };
                strdburner: {
                    strdBurnerAddress(request?: _251.QueryStrdBurnerAddressRequest): Promise<_251.QueryStrdBurnerAddressResponse>;
                    totalStrdBurned(request?: _251.QueryTotalStrdBurnedRequest): Promise<_251.QueryTotalStrdBurnedResponse>;
                };
            };
        }>;
    };
}
