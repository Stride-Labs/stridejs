import * as _183 from "./airdrop/airdrop";
import * as _184 from "./airdrop/genesis";
import * as _185 from "./airdrop/query";
import * as _186 from "./airdrop/tx";
import * as _187 from "./auction/auction";
import * as _188 from "./auction/genesis";
import * as _189 from "./auction/query";
import * as _190 from "./auction/tx";
import * as _191 from "./autopilot/genesis";
import * as _192 from "./autopilot/params";
import * as _193 from "./autopilot/query";
import * as _194 from "./claim/claim";
import * as _195 from "./claim/genesis";
import * as _196 from "./claim/params";
import * as _197 from "./claim/query";
import * as _198 from "./claim/tx";
import * as _199 from "./epochs/genesis";
import * as _200 from "./epochs/query";
import * as _201 from "./icacallbacks/callback_data";
import * as _202 from "./icacallbacks/genesis";
import * as _203 from "./icacallbacks/packet";
import * as _204 from "./icacallbacks/params";
import * as _205 from "./icacallbacks/query";
import * as _207 from "./icaoracle/callbacks";
import * as _208 from "./icaoracle/contract";
import * as _209 from "./icaoracle/genesis";
import * as _210 from "./icaoracle/icaoracle";
import * as _211 from "./icaoracle/query";
import * as _212 from "./icaoracle/tx";
import * as _213 from "./icqoracle/genesis";
import * as _214 from "./icqoracle/icqoracle";
import * as _215 from "./icqoracle/query";
import * as _216 from "./icqoracle/tx";
import * as _217 from "./interchainquery/v1/genesis";
import * as _218 from "./interchainquery/v1/messages";
import * as _219 from "./interchainquery/v1/query";
import * as _220 from "./mint/v1beta1/genesis";
import * as _221 from "./mint/v1beta1/mint";
import * as _222 from "./mint/v1beta1/query";
import * as _223 from "./records/callbacks";
import * as _224 from "./records/genesis";
import * as _225 from "./records/params";
import * as _226 from "./records/query";
import * as _227 from "./records/records";
import * as _228 from "./stakedym/genesis";
import * as _229 from "./stakedym/query";
import * as _230 from "./stakedym/stakedym";
import * as _231 from "./stakedym/tx";
import * as _232 from "./stakeibc/address_unbonding";
import * as _233 from "./stakeibc/callbacks";
import * as _234 from "./stakeibc/epoch_tracker";
import * as _235 from "./stakeibc/genesis";
import * as _236 from "./stakeibc/gov";
import * as _237 from "./stakeibc/host_zone";
import * as _238 from "./stakeibc/ica_account";
import * as _239 from "./stakeibc/packet";
import * as _240 from "./stakeibc/params";
import * as _241 from "./stakeibc/query";
import * as _242 from "./stakeibc/trade_route";
import * as _243 from "./stakeibc/tx";
import * as _244 from "./stakeibc/validator";
import * as _245 from "./staketia/genesis";
import * as _246 from "./staketia/query";
import * as _247 from "./staketia/staketia";
import * as _248 from "./staketia/tx";
import * as _249 from "./strdburner/genesis";
import * as _250 from "./strdburner/query";
import * as _252 from "./vesting/vesting";
import * as _384 from "./airdrop/query.rpc.Query";
import * as _385 from "./auction/query.rpc.Query";
import * as _386 from "./autopilot/query.rpc.Query";
import * as _387 from "./claim/query.rpc.Query";
import * as _388 from "./epochs/query.rpc.Query";
import * as _389 from "./icacallbacks/query.rpc.Query";
import * as _390 from "./icaoracle/query.rpc.Query";
import * as _391 from "./icqoracle/query.rpc.Query";
import * as _392 from "./mint/v1beta1/query.rpc.Query";
import * as _393 from "./records/query.rpc.Query";
import * as _394 from "./stakedym/query.rpc.Query";
import * as _395 from "./stakeibc/query.rpc.Query";
import * as _396 from "./staketia/query.rpc.Query";
import * as _397 from "./strdburner/query.rpc.Query";
import * as _398 from "./airdrop/tx.rpc.msg";
import * as _399 from "./auction/tx.rpc.msg";
import * as _400 from "./claim/tx.rpc.msg";
import * as _401 from "./icaoracle/tx.rpc.msg";
import * as _402 from "./icqoracle/tx.rpc.msg";
import * as _403 from "./interchainquery/v1/messages.rpc.msg";
import * as _404 from "./stakedym/tx.rpc.msg";
import * as _405 from "./stakeibc/tx.rpc.msg";
import * as _406 from "./staketia/tx.rpc.msg";
export declare namespace stride {
    const airdrop: {
        MsgClientImpl: typeof _398.MsgClientImpl;
        QueryClientImpl: typeof _384.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            airdrop(request: _185.QueryAirdropRequest): Promise<_185.QueryAirdropResponse>;
            allAirdrops(request?: _185.QueryAllAirdropsRequest): Promise<_185.QueryAllAirdropsResponse>;
            userAllocation(request: _185.QueryUserAllocationRequest): Promise<_185.QueryUserAllocationResponse>;
            userAllocations(request: _185.QueryUserAllocationsRequest): Promise<_185.QueryUserAllocationsResponse>;
            allAllocations(request: _185.QueryAllAllocationsRequest): Promise<_185.QueryAllAllocationsResponse>;
            userSummary(request: _185.QueryUserSummaryRequest): Promise<_185.QueryUserSummaryResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                claimDaily(value: _186.MsgClaimDaily): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimEarly(value: _186.MsgClaimEarly): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAirdrop(value: _186.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateAirdrop(value: _186.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addAllocations(value: _186.MsgAddAllocations): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateUserAllocation(value: _186.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                linkAddresses(value: _186.MsgLinkAddresses): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                claimDaily(value: _186.MsgClaimDaily): {
                    typeUrl: string;
                    value: _186.MsgClaimDaily;
                };
                claimEarly(value: _186.MsgClaimEarly): {
                    typeUrl: string;
                    value: _186.MsgClaimEarly;
                };
                createAirdrop(value: _186.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _186.MsgCreateAirdrop;
                };
                updateAirdrop(value: _186.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: _186.MsgUpdateAirdrop;
                };
                addAllocations(value: _186.MsgAddAllocations): {
                    typeUrl: string;
                    value: _186.MsgAddAllocations;
                };
                updateUserAllocation(value: _186.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: _186.MsgUpdateUserAllocation;
                };
                linkAddresses(value: _186.MsgLinkAddresses): {
                    typeUrl: string;
                    value: _186.MsgLinkAddresses;
                };
            };
            fromPartial: {
                claimDaily(value: _186.MsgClaimDaily): {
                    typeUrl: string;
                    value: _186.MsgClaimDaily;
                };
                claimEarly(value: _186.MsgClaimEarly): {
                    typeUrl: string;
                    value: _186.MsgClaimEarly;
                };
                createAirdrop(value: _186.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _186.MsgCreateAirdrop;
                };
                updateAirdrop(value: _186.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: _186.MsgUpdateAirdrop;
                };
                addAllocations(value: _186.MsgAddAllocations): {
                    typeUrl: string;
                    value: _186.MsgAddAllocations;
                };
                updateUserAllocation(value: _186.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: _186.MsgUpdateUserAllocation;
                };
                linkAddresses(value: _186.MsgLinkAddresses): {
                    typeUrl: string;
                    value: _186.MsgLinkAddresses;
                };
            };
        };
        AminoConverter: {
            "/stride.airdrop.MsgClaimDaily": {
                aminoType: string;
                toAmino: (message: _186.MsgClaimDaily) => _186.MsgClaimDailyAmino;
                fromAmino: (object: _186.MsgClaimDailyAmino) => _186.MsgClaimDaily;
            };
            "/stride.airdrop.MsgClaimEarly": {
                aminoType: string;
                toAmino: (message: _186.MsgClaimEarly) => _186.MsgClaimEarlyAmino;
                fromAmino: (object: _186.MsgClaimEarlyAmino) => _186.MsgClaimEarly;
            };
            "/stride.airdrop.MsgCreateAirdrop": {
                aminoType: string;
                toAmino: (message: _186.MsgCreateAirdrop) => _186.MsgCreateAirdropAmino;
                fromAmino: (object: _186.MsgCreateAirdropAmino) => _186.MsgCreateAirdrop;
            };
            "/stride.airdrop.MsgUpdateAirdrop": {
                aminoType: string;
                toAmino: (message: _186.MsgUpdateAirdrop) => _186.MsgUpdateAirdropAmino;
                fromAmino: (object: _186.MsgUpdateAirdropAmino) => _186.MsgUpdateAirdrop;
            };
            "/stride.airdrop.MsgAddAllocations": {
                aminoType: string;
                toAmino: (message: _186.MsgAddAllocations) => _186.MsgAddAllocationsAmino;
                fromAmino: (object: _186.MsgAddAllocationsAmino) => _186.MsgAddAllocations;
            };
            "/stride.airdrop.MsgUpdateUserAllocation": {
                aminoType: string;
                toAmino: (message: _186.MsgUpdateUserAllocation) => _186.MsgUpdateUserAllocationAmino;
                fromAmino: (object: _186.MsgUpdateUserAllocationAmino) => _186.MsgUpdateUserAllocation;
            };
            "/stride.airdrop.MsgLinkAddresses": {
                aminoType: string;
                toAmino: (message: _186.MsgLinkAddresses) => _186.MsgLinkAddressesAmino;
                fromAmino: (object: _186.MsgLinkAddressesAmino) => _186.MsgLinkAddresses;
            };
        };
        MsgClaimDaily: {
            typeUrl: string;
            encode(message: _186.MsgClaimDaily, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.MsgClaimDaily;
            fromPartial(object: Partial<_186.MsgClaimDaily>): _186.MsgClaimDaily;
            fromAmino(object: _186.MsgClaimDailyAmino): _186.MsgClaimDaily;
            toAmino(message: _186.MsgClaimDaily): _186.MsgClaimDailyAmino;
            fromAminoMsg(object: _186.MsgClaimDailyAminoMsg): _186.MsgClaimDaily;
            toAminoMsg(message: _186.MsgClaimDaily): _186.MsgClaimDailyAminoMsg;
            fromProtoMsg(message: _186.MsgClaimDailyProtoMsg): _186.MsgClaimDaily;
            toProto(message: _186.MsgClaimDaily): Uint8Array;
            toProtoMsg(message: _186.MsgClaimDaily): _186.MsgClaimDailyProtoMsg;
        };
        MsgClaimDailyResponse: {
            typeUrl: string;
            encode(_: _186.MsgClaimDailyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.MsgClaimDailyResponse;
            fromPartial(_: Partial<_186.MsgClaimDailyResponse>): _186.MsgClaimDailyResponse;
            fromAmino(_: _186.MsgClaimDailyResponseAmino): _186.MsgClaimDailyResponse;
            toAmino(_: _186.MsgClaimDailyResponse): _186.MsgClaimDailyResponseAmino;
            fromAminoMsg(object: _186.MsgClaimDailyResponseAminoMsg): _186.MsgClaimDailyResponse;
            fromProtoMsg(message: _186.MsgClaimDailyResponseProtoMsg): _186.MsgClaimDailyResponse;
            toProto(message: _186.MsgClaimDailyResponse): Uint8Array;
            toProtoMsg(message: _186.MsgClaimDailyResponse): _186.MsgClaimDailyResponseProtoMsg;
        };
        MsgClaimEarly: {
            typeUrl: string;
            encode(message: _186.MsgClaimEarly, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.MsgClaimEarly;
            fromPartial(object: Partial<_186.MsgClaimEarly>): _186.MsgClaimEarly;
            fromAmino(object: _186.MsgClaimEarlyAmino): _186.MsgClaimEarly;
            toAmino(message: _186.MsgClaimEarly): _186.MsgClaimEarlyAmino;
            fromAminoMsg(object: _186.MsgClaimEarlyAminoMsg): _186.MsgClaimEarly;
            toAminoMsg(message: _186.MsgClaimEarly): _186.MsgClaimEarlyAminoMsg;
            fromProtoMsg(message: _186.MsgClaimEarlyProtoMsg): _186.MsgClaimEarly;
            toProto(message: _186.MsgClaimEarly): Uint8Array;
            toProtoMsg(message: _186.MsgClaimEarly): _186.MsgClaimEarlyProtoMsg;
        };
        MsgClaimEarlyResponse: {
            typeUrl: string;
            encode(_: _186.MsgClaimEarlyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.MsgClaimEarlyResponse;
            fromPartial(_: Partial<_186.MsgClaimEarlyResponse>): _186.MsgClaimEarlyResponse;
            fromAmino(_: _186.MsgClaimEarlyResponseAmino): _186.MsgClaimEarlyResponse;
            toAmino(_: _186.MsgClaimEarlyResponse): _186.MsgClaimEarlyResponseAmino;
            fromAminoMsg(object: _186.MsgClaimEarlyResponseAminoMsg): _186.MsgClaimEarlyResponse;
            fromProtoMsg(message: _186.MsgClaimEarlyResponseProtoMsg): _186.MsgClaimEarlyResponse;
            toProto(message: _186.MsgClaimEarlyResponse): Uint8Array;
            toProtoMsg(message: _186.MsgClaimEarlyResponse): _186.MsgClaimEarlyResponseProtoMsg;
        };
        MsgCreateAirdrop: {
            typeUrl: string;
            encode(message: _186.MsgCreateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.MsgCreateAirdrop;
            fromPartial(object: Partial<_186.MsgCreateAirdrop>): _186.MsgCreateAirdrop;
            fromAmino(object: _186.MsgCreateAirdropAmino): _186.MsgCreateAirdrop;
            toAmino(message: _186.MsgCreateAirdrop): _186.MsgCreateAirdropAmino;
            fromAminoMsg(object: _186.MsgCreateAirdropAminoMsg): _186.MsgCreateAirdrop;
            toAminoMsg(message: _186.MsgCreateAirdrop): _186.MsgCreateAirdropAminoMsg;
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
        MsgUpdateAirdrop: {
            typeUrl: string;
            encode(message: _186.MsgUpdateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.MsgUpdateAirdrop;
            fromPartial(object: Partial<_186.MsgUpdateAirdrop>): _186.MsgUpdateAirdrop;
            fromAmino(object: _186.MsgUpdateAirdropAmino): _186.MsgUpdateAirdrop;
            toAmino(message: _186.MsgUpdateAirdrop): _186.MsgUpdateAirdropAmino;
            fromAminoMsg(object: _186.MsgUpdateAirdropAminoMsg): _186.MsgUpdateAirdrop;
            toAminoMsg(message: _186.MsgUpdateAirdrop): _186.MsgUpdateAirdropAminoMsg;
            fromProtoMsg(message: _186.MsgUpdateAirdropProtoMsg): _186.MsgUpdateAirdrop;
            toProto(message: _186.MsgUpdateAirdrop): Uint8Array;
            toProtoMsg(message: _186.MsgUpdateAirdrop): _186.MsgUpdateAirdropProtoMsg;
        };
        MsgUpdateAirdropResponse: {
            typeUrl: string;
            encode(_: _186.MsgUpdateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.MsgUpdateAirdropResponse;
            fromPartial(_: Partial<_186.MsgUpdateAirdropResponse>): _186.MsgUpdateAirdropResponse;
            fromAmino(_: _186.MsgUpdateAirdropResponseAmino): _186.MsgUpdateAirdropResponse;
            toAmino(_: _186.MsgUpdateAirdropResponse): _186.MsgUpdateAirdropResponseAmino;
            fromAminoMsg(object: _186.MsgUpdateAirdropResponseAminoMsg): _186.MsgUpdateAirdropResponse;
            fromProtoMsg(message: _186.MsgUpdateAirdropResponseProtoMsg): _186.MsgUpdateAirdropResponse;
            toProto(message: _186.MsgUpdateAirdropResponse): Uint8Array;
            toProtoMsg(message: _186.MsgUpdateAirdropResponse): _186.MsgUpdateAirdropResponseProtoMsg;
        };
        RawAllocation: {
            typeUrl: string;
            encode(message: _186.RawAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.RawAllocation;
            fromPartial(object: Partial<_186.RawAllocation>): _186.RawAllocation;
            fromAmino(object: _186.RawAllocationAmino): _186.RawAllocation;
            toAmino(message: _186.RawAllocation): _186.RawAllocationAmino;
            fromAminoMsg(object: _186.RawAllocationAminoMsg): _186.RawAllocation;
            fromProtoMsg(message: _186.RawAllocationProtoMsg): _186.RawAllocation;
            toProto(message: _186.RawAllocation): Uint8Array;
            toProtoMsg(message: _186.RawAllocation): _186.RawAllocationProtoMsg;
        };
        MsgAddAllocations: {
            typeUrl: string;
            encode(message: _186.MsgAddAllocations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.MsgAddAllocations;
            fromPartial(object: Partial<_186.MsgAddAllocations>): _186.MsgAddAllocations;
            fromAmino(object: _186.MsgAddAllocationsAmino): _186.MsgAddAllocations;
            toAmino(message: _186.MsgAddAllocations): _186.MsgAddAllocationsAmino;
            fromAminoMsg(object: _186.MsgAddAllocationsAminoMsg): _186.MsgAddAllocations;
            toAminoMsg(message: _186.MsgAddAllocations): _186.MsgAddAllocationsAminoMsg;
            fromProtoMsg(message: _186.MsgAddAllocationsProtoMsg): _186.MsgAddAllocations;
            toProto(message: _186.MsgAddAllocations): Uint8Array;
            toProtoMsg(message: _186.MsgAddAllocations): _186.MsgAddAllocationsProtoMsg;
        };
        MsgAddAllocationsResponse: {
            typeUrl: string;
            encode(_: _186.MsgAddAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.MsgAddAllocationsResponse;
            fromPartial(_: Partial<_186.MsgAddAllocationsResponse>): _186.MsgAddAllocationsResponse;
            fromAmino(_: _186.MsgAddAllocationsResponseAmino): _186.MsgAddAllocationsResponse;
            toAmino(_: _186.MsgAddAllocationsResponse): _186.MsgAddAllocationsResponseAmino;
            fromAminoMsg(object: _186.MsgAddAllocationsResponseAminoMsg): _186.MsgAddAllocationsResponse;
            fromProtoMsg(message: _186.MsgAddAllocationsResponseProtoMsg): _186.MsgAddAllocationsResponse;
            toProto(message: _186.MsgAddAllocationsResponse): Uint8Array;
            toProtoMsg(message: _186.MsgAddAllocationsResponse): _186.MsgAddAllocationsResponseProtoMsg;
        };
        MsgUpdateUserAllocation: {
            typeUrl: string;
            encode(message: _186.MsgUpdateUserAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.MsgUpdateUserAllocation;
            fromPartial(object: Partial<_186.MsgUpdateUserAllocation>): _186.MsgUpdateUserAllocation;
            fromAmino(object: _186.MsgUpdateUserAllocationAmino): _186.MsgUpdateUserAllocation;
            toAmino(message: _186.MsgUpdateUserAllocation): _186.MsgUpdateUserAllocationAmino;
            fromAminoMsg(object: _186.MsgUpdateUserAllocationAminoMsg): _186.MsgUpdateUserAllocation;
            toAminoMsg(message: _186.MsgUpdateUserAllocation): _186.MsgUpdateUserAllocationAminoMsg;
            fromProtoMsg(message: _186.MsgUpdateUserAllocationProtoMsg): _186.MsgUpdateUserAllocation;
            toProto(message: _186.MsgUpdateUserAllocation): Uint8Array;
            toProtoMsg(message: _186.MsgUpdateUserAllocation): _186.MsgUpdateUserAllocationProtoMsg;
        };
        MsgUpdateUserAllocationResponse: {
            typeUrl: string;
            encode(_: _186.MsgUpdateUserAllocationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.MsgUpdateUserAllocationResponse;
            fromPartial(_: Partial<_186.MsgUpdateUserAllocationResponse>): _186.MsgUpdateUserAllocationResponse;
            fromAmino(_: _186.MsgUpdateUserAllocationResponseAmino): _186.MsgUpdateUserAllocationResponse;
            toAmino(_: _186.MsgUpdateUserAllocationResponse): _186.MsgUpdateUserAllocationResponseAmino;
            fromAminoMsg(object: _186.MsgUpdateUserAllocationResponseAminoMsg): _186.MsgUpdateUserAllocationResponse;
            fromProtoMsg(message: _186.MsgUpdateUserAllocationResponseProtoMsg): _186.MsgUpdateUserAllocationResponse;
            toProto(message: _186.MsgUpdateUserAllocationResponse): Uint8Array;
            toProtoMsg(message: _186.MsgUpdateUserAllocationResponse): _186.MsgUpdateUserAllocationResponseProtoMsg;
        };
        MsgLinkAddresses: {
            typeUrl: string;
            encode(message: _186.MsgLinkAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.MsgLinkAddresses;
            fromPartial(object: Partial<_186.MsgLinkAddresses>): _186.MsgLinkAddresses;
            fromAmino(object: _186.MsgLinkAddressesAmino): _186.MsgLinkAddresses;
            toAmino(message: _186.MsgLinkAddresses): _186.MsgLinkAddressesAmino;
            fromAminoMsg(object: _186.MsgLinkAddressesAminoMsg): _186.MsgLinkAddresses;
            toAminoMsg(message: _186.MsgLinkAddresses): _186.MsgLinkAddressesAminoMsg;
            fromProtoMsg(message: _186.MsgLinkAddressesProtoMsg): _186.MsgLinkAddresses;
            toProto(message: _186.MsgLinkAddresses): Uint8Array;
            toProtoMsg(message: _186.MsgLinkAddresses): _186.MsgLinkAddressesProtoMsg;
        };
        MsgLinkAddressesResponse: {
            typeUrl: string;
            encode(_: _186.MsgLinkAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.MsgLinkAddressesResponse;
            fromPartial(_: Partial<_186.MsgLinkAddressesResponse>): _186.MsgLinkAddressesResponse;
            fromAmino(_: _186.MsgLinkAddressesResponseAmino): _186.MsgLinkAddressesResponse;
            toAmino(_: _186.MsgLinkAddressesResponse): _186.MsgLinkAddressesResponseAmino;
            fromAminoMsg(object: _186.MsgLinkAddressesResponseAminoMsg): _186.MsgLinkAddressesResponse;
            fromProtoMsg(message: _186.MsgLinkAddressesResponseProtoMsg): _186.MsgLinkAddressesResponse;
            toProto(message: _186.MsgLinkAddressesResponse): Uint8Array;
            toProtoMsg(message: _186.MsgLinkAddressesResponse): _186.MsgLinkAddressesResponseProtoMsg;
        };
        QueryAirdropRequest: {
            typeUrl: string;
            encode(message: _185.QueryAirdropRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryAirdropRequest;
            fromPartial(object: Partial<_185.QueryAirdropRequest>): _185.QueryAirdropRequest;
            fromAmino(object: _185.QueryAirdropRequestAmino): _185.QueryAirdropRequest;
            toAmino(message: _185.QueryAirdropRequest): _185.QueryAirdropRequestAmino;
            fromAminoMsg(object: _185.QueryAirdropRequestAminoMsg): _185.QueryAirdropRequest;
            fromProtoMsg(message: _185.QueryAirdropRequestProtoMsg): _185.QueryAirdropRequest;
            toProto(message: _185.QueryAirdropRequest): Uint8Array;
            toProtoMsg(message: _185.QueryAirdropRequest): _185.QueryAirdropRequestProtoMsg;
        };
        QueryAirdropResponse: {
            typeUrl: string;
            encode(message: _185.QueryAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryAirdropResponse;
            fromPartial(object: Partial<_185.QueryAirdropResponse>): _185.QueryAirdropResponse;
            fromAmino(object: _185.QueryAirdropResponseAmino): _185.QueryAirdropResponse;
            toAmino(message: _185.QueryAirdropResponse): _185.QueryAirdropResponseAmino;
            fromAminoMsg(object: _185.QueryAirdropResponseAminoMsg): _185.QueryAirdropResponse;
            fromProtoMsg(message: _185.QueryAirdropResponseProtoMsg): _185.QueryAirdropResponse;
            toProto(message: _185.QueryAirdropResponse): Uint8Array;
            toProtoMsg(message: _185.QueryAirdropResponse): _185.QueryAirdropResponseProtoMsg;
        };
        QueryAllAirdropsRequest: {
            typeUrl: string;
            encode(_: _185.QueryAllAirdropsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryAllAirdropsRequest;
            fromPartial(_: Partial<_185.QueryAllAirdropsRequest>): _185.QueryAllAirdropsRequest;
            fromAmino(_: _185.QueryAllAirdropsRequestAmino): _185.QueryAllAirdropsRequest;
            toAmino(_: _185.QueryAllAirdropsRequest): _185.QueryAllAirdropsRequestAmino;
            fromAminoMsg(object: _185.QueryAllAirdropsRequestAminoMsg): _185.QueryAllAirdropsRequest;
            fromProtoMsg(message: _185.QueryAllAirdropsRequestProtoMsg): _185.QueryAllAirdropsRequest;
            toProto(message: _185.QueryAllAirdropsRequest): Uint8Array;
            toProtoMsg(message: _185.QueryAllAirdropsRequest): _185.QueryAllAirdropsRequestProtoMsg;
        };
        QueryAllAirdropsResponse: {
            typeUrl: string;
            encode(message: _185.QueryAllAirdropsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryAllAirdropsResponse;
            fromPartial(object: Partial<_185.QueryAllAirdropsResponse>): _185.QueryAllAirdropsResponse;
            fromAmino(object: _185.QueryAllAirdropsResponseAmino): _185.QueryAllAirdropsResponse;
            toAmino(message: _185.QueryAllAirdropsResponse): _185.QueryAllAirdropsResponseAmino;
            fromAminoMsg(object: _185.QueryAllAirdropsResponseAminoMsg): _185.QueryAllAirdropsResponse;
            fromProtoMsg(message: _185.QueryAllAirdropsResponseProtoMsg): _185.QueryAllAirdropsResponse;
            toProto(message: _185.QueryAllAirdropsResponse): Uint8Array;
            toProtoMsg(message: _185.QueryAllAirdropsResponse): _185.QueryAllAirdropsResponseProtoMsg;
        };
        QueryUserAllocationRequest: {
            typeUrl: string;
            encode(message: _185.QueryUserAllocationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryUserAllocationRequest;
            fromPartial(object: Partial<_185.QueryUserAllocationRequest>): _185.QueryUserAllocationRequest;
            fromAmino(object: _185.QueryUserAllocationRequestAmino): _185.QueryUserAllocationRequest;
            toAmino(message: _185.QueryUserAllocationRequest): _185.QueryUserAllocationRequestAmino;
            fromAminoMsg(object: _185.QueryUserAllocationRequestAminoMsg): _185.QueryUserAllocationRequest;
            fromProtoMsg(message: _185.QueryUserAllocationRequestProtoMsg): _185.QueryUserAllocationRequest;
            toProto(message: _185.QueryUserAllocationRequest): Uint8Array;
            toProtoMsg(message: _185.QueryUserAllocationRequest): _185.QueryUserAllocationRequestProtoMsg;
        };
        QueryUserAllocationResponse: {
            typeUrl: string;
            encode(message: _185.QueryUserAllocationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryUserAllocationResponse;
            fromPartial(object: Partial<_185.QueryUserAllocationResponse>): _185.QueryUserAllocationResponse;
            fromAmino(object: _185.QueryUserAllocationResponseAmino): _185.QueryUserAllocationResponse;
            toAmino(message: _185.QueryUserAllocationResponse): _185.QueryUserAllocationResponseAmino;
            fromAminoMsg(object: _185.QueryUserAllocationResponseAminoMsg): _185.QueryUserAllocationResponse;
            fromProtoMsg(message: _185.QueryUserAllocationResponseProtoMsg): _185.QueryUserAllocationResponse;
            toProto(message: _185.QueryUserAllocationResponse): Uint8Array;
            toProtoMsg(message: _185.QueryUserAllocationResponse): _185.QueryUserAllocationResponseProtoMsg;
        };
        QueryUserAllocationsRequest: {
            typeUrl: string;
            encode(message: _185.QueryUserAllocationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryUserAllocationsRequest;
            fromPartial(object: Partial<_185.QueryUserAllocationsRequest>): _185.QueryUserAllocationsRequest;
            fromAmino(object: _185.QueryUserAllocationsRequestAmino): _185.QueryUserAllocationsRequest;
            toAmino(message: _185.QueryUserAllocationsRequest): _185.QueryUserAllocationsRequestAmino;
            fromAminoMsg(object: _185.QueryUserAllocationsRequestAminoMsg): _185.QueryUserAllocationsRequest;
            fromProtoMsg(message: _185.QueryUserAllocationsRequestProtoMsg): _185.QueryUserAllocationsRequest;
            toProto(message: _185.QueryUserAllocationsRequest): Uint8Array;
            toProtoMsg(message: _185.QueryUserAllocationsRequest): _185.QueryUserAllocationsRequestProtoMsg;
        };
        QueryUserAllocationsResponse: {
            typeUrl: string;
            encode(message: _185.QueryUserAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryUserAllocationsResponse;
            fromPartial(object: Partial<_185.QueryUserAllocationsResponse>): _185.QueryUserAllocationsResponse;
            fromAmino(object: _185.QueryUserAllocationsResponseAmino): _185.QueryUserAllocationsResponse;
            toAmino(message: _185.QueryUserAllocationsResponse): _185.QueryUserAllocationsResponseAmino;
            fromAminoMsg(object: _185.QueryUserAllocationsResponseAminoMsg): _185.QueryUserAllocationsResponse;
            fromProtoMsg(message: _185.QueryUserAllocationsResponseProtoMsg): _185.QueryUserAllocationsResponse;
            toProto(message: _185.QueryUserAllocationsResponse): Uint8Array;
            toProtoMsg(message: _185.QueryUserAllocationsResponse): _185.QueryUserAllocationsResponseProtoMsg;
        };
        QueryAllAllocationsRequest: {
            typeUrl: string;
            encode(message: _185.QueryAllAllocationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryAllAllocationsRequest;
            fromPartial(object: Partial<_185.QueryAllAllocationsRequest>): _185.QueryAllAllocationsRequest;
            fromAmino(object: _185.QueryAllAllocationsRequestAmino): _185.QueryAllAllocationsRequest;
            toAmino(message: _185.QueryAllAllocationsRequest): _185.QueryAllAllocationsRequestAmino;
            fromAminoMsg(object: _185.QueryAllAllocationsRequestAminoMsg): _185.QueryAllAllocationsRequest;
            fromProtoMsg(message: _185.QueryAllAllocationsRequestProtoMsg): _185.QueryAllAllocationsRequest;
            toProto(message: _185.QueryAllAllocationsRequest): Uint8Array;
            toProtoMsg(message: _185.QueryAllAllocationsRequest): _185.QueryAllAllocationsRequestProtoMsg;
        };
        QueryAllAllocationsResponse: {
            typeUrl: string;
            encode(message: _185.QueryAllAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryAllAllocationsResponse;
            fromPartial(object: Partial<_185.QueryAllAllocationsResponse>): _185.QueryAllAllocationsResponse;
            fromAmino(object: _185.QueryAllAllocationsResponseAmino): _185.QueryAllAllocationsResponse;
            toAmino(message: _185.QueryAllAllocationsResponse): _185.QueryAllAllocationsResponseAmino;
            fromAminoMsg(object: _185.QueryAllAllocationsResponseAminoMsg): _185.QueryAllAllocationsResponse;
            fromProtoMsg(message: _185.QueryAllAllocationsResponseProtoMsg): _185.QueryAllAllocationsResponse;
            toProto(message: _185.QueryAllAllocationsResponse): Uint8Array;
            toProtoMsg(message: _185.QueryAllAllocationsResponse): _185.QueryAllAllocationsResponseProtoMsg;
        };
        QueryUserSummaryRequest: {
            typeUrl: string;
            encode(message: _185.QueryUserSummaryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryUserSummaryRequest;
            fromPartial(object: Partial<_185.QueryUserSummaryRequest>): _185.QueryUserSummaryRequest;
            fromAmino(object: _185.QueryUserSummaryRequestAmino): _185.QueryUserSummaryRequest;
            toAmino(message: _185.QueryUserSummaryRequest): _185.QueryUserSummaryRequestAmino;
            fromAminoMsg(object: _185.QueryUserSummaryRequestAminoMsg): _185.QueryUserSummaryRequest;
            fromProtoMsg(message: _185.QueryUserSummaryRequestProtoMsg): _185.QueryUserSummaryRequest;
            toProto(message: _185.QueryUserSummaryRequest): Uint8Array;
            toProtoMsg(message: _185.QueryUserSummaryRequest): _185.QueryUserSummaryRequestProtoMsg;
        };
        QueryUserSummaryResponse: {
            typeUrl: string;
            encode(message: _185.QueryUserSummaryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.QueryUserSummaryResponse;
            fromPartial(object: Partial<_185.QueryUserSummaryResponse>): _185.QueryUserSummaryResponse;
            fromAmino(object: _185.QueryUserSummaryResponseAmino): _185.QueryUserSummaryResponse;
            toAmino(message: _185.QueryUserSummaryResponse): _185.QueryUserSummaryResponseAmino;
            fromAminoMsg(object: _185.QueryUserSummaryResponseAminoMsg): _185.QueryUserSummaryResponse;
            fromProtoMsg(message: _185.QueryUserSummaryResponseProtoMsg): _185.QueryUserSummaryResponse;
            toProto(message: _185.QueryUserSummaryResponse): Uint8Array;
            toProtoMsg(message: _185.QueryUserSummaryResponse): _185.QueryUserSummaryResponseProtoMsg;
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
        claimTypeFromJSON(object: any): _183.ClaimType;
        claimTypeToJSON(object: _183.ClaimType): string;
        ClaimType: typeof _183.ClaimType;
        ClaimTypeSDKType: typeof _183.ClaimType;
        ClaimTypeAmino: typeof _183.ClaimType;
        Params: {
            typeUrl: string;
            encode(message: _183.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.Params;
            fromPartial(object: Partial<_183.Params>): _183.Params;
            fromAmino(object: _183.ParamsAmino): _183.Params;
            toAmino(message: _183.Params): _183.ParamsAmino;
            fromAminoMsg(object: _183.ParamsAminoMsg): _183.Params;
            fromProtoMsg(message: _183.ParamsProtoMsg): _183.Params;
            toProto(message: _183.Params): Uint8Array;
            toProtoMsg(message: _183.Params): _183.ParamsProtoMsg;
        };
        UserAllocation: {
            typeUrl: string;
            encode(message: _183.UserAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.UserAllocation;
            fromPartial(object: Partial<_183.UserAllocation>): _183.UserAllocation;
            fromAmino(object: _183.UserAllocationAmino): _183.UserAllocation;
            toAmino(message: _183.UserAllocation): _183.UserAllocationAmino;
            fromAminoMsg(object: _183.UserAllocationAminoMsg): _183.UserAllocation;
            fromProtoMsg(message: _183.UserAllocationProtoMsg): _183.UserAllocation;
            toProto(message: _183.UserAllocation): Uint8Array;
            toProtoMsg(message: _183.UserAllocation): _183.UserAllocationProtoMsg;
        };
        Airdrop: {
            typeUrl: string;
            encode(message: _183.Airdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.Airdrop;
            fromPartial(object: Partial<_183.Airdrop>): _183.Airdrop;
            fromAmino(object: _183.AirdropAmino): _183.Airdrop;
            toAmino(message: _183.Airdrop): _183.AirdropAmino;
            fromAminoMsg(object: _183.AirdropAminoMsg): _183.Airdrop;
            fromProtoMsg(message: _183.AirdropProtoMsg): _183.Airdrop;
            toProto(message: _183.Airdrop): Uint8Array;
            toProtoMsg(message: _183.Airdrop): _183.AirdropProtoMsg;
        };
    };
    const auction: {
        MsgClientImpl: typeof _399.MsgClientImpl;
        QueryClientImpl: typeof _385.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            auction(request: _189.QueryAuctionRequest): Promise<_189.QueryAuctionResponse>;
            auctions(request?: _189.QueryAuctionsRequest): Promise<_189.QueryAuctionsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                placeBid(value: _190.MsgPlaceBid): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAuction(value: _190.MsgCreateAuction): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateAuction(value: _190.MsgUpdateAuction): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                placeBid(value: _190.MsgPlaceBid): {
                    typeUrl: string;
                    value: _190.MsgPlaceBid;
                };
                createAuction(value: _190.MsgCreateAuction): {
                    typeUrl: string;
                    value: _190.MsgCreateAuction;
                };
                updateAuction(value: _190.MsgUpdateAuction): {
                    typeUrl: string;
                    value: _190.MsgUpdateAuction;
                };
            };
            fromPartial: {
                placeBid(value: _190.MsgPlaceBid): {
                    typeUrl: string;
                    value: _190.MsgPlaceBid;
                };
                createAuction(value: _190.MsgCreateAuction): {
                    typeUrl: string;
                    value: _190.MsgCreateAuction;
                };
                updateAuction(value: _190.MsgUpdateAuction): {
                    typeUrl: string;
                    value: _190.MsgUpdateAuction;
                };
            };
        };
        AminoConverter: {
            "/stride.auction.MsgPlaceBid": {
                aminoType: string;
                toAmino: (message: _190.MsgPlaceBid) => _190.MsgPlaceBidAmino;
                fromAmino: (object: _190.MsgPlaceBidAmino) => _190.MsgPlaceBid;
            };
            "/stride.auction.MsgCreateAuction": {
                aminoType: string;
                toAmino: (message: _190.MsgCreateAuction) => _190.MsgCreateAuctionAmino;
                fromAmino: (object: _190.MsgCreateAuctionAmino) => _190.MsgCreateAuction;
            };
            "/stride.auction.MsgUpdateAuction": {
                aminoType: string;
                toAmino: (message: _190.MsgUpdateAuction) => _190.MsgUpdateAuctionAmino;
                fromAmino: (object: _190.MsgUpdateAuctionAmino) => _190.MsgUpdateAuction;
            };
        };
        MsgPlaceBid: {
            typeUrl: string;
            encode(message: _190.MsgPlaceBid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.MsgPlaceBid;
            fromPartial(object: Partial<_190.MsgPlaceBid>): _190.MsgPlaceBid;
            fromAmino(object: _190.MsgPlaceBidAmino): _190.MsgPlaceBid;
            toAmino(message: _190.MsgPlaceBid): _190.MsgPlaceBidAmino;
            fromAminoMsg(object: _190.MsgPlaceBidAminoMsg): _190.MsgPlaceBid;
            toAminoMsg(message: _190.MsgPlaceBid): _190.MsgPlaceBidAminoMsg;
            fromProtoMsg(message: _190.MsgPlaceBidProtoMsg): _190.MsgPlaceBid;
            toProto(message: _190.MsgPlaceBid): Uint8Array;
            toProtoMsg(message: _190.MsgPlaceBid): _190.MsgPlaceBidProtoMsg;
        };
        MsgPlaceBidResponse: {
            typeUrl: string;
            encode(_: _190.MsgPlaceBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.MsgPlaceBidResponse;
            fromPartial(_: Partial<_190.MsgPlaceBidResponse>): _190.MsgPlaceBidResponse;
            fromAmino(_: _190.MsgPlaceBidResponseAmino): _190.MsgPlaceBidResponse;
            toAmino(_: _190.MsgPlaceBidResponse): _190.MsgPlaceBidResponseAmino;
            fromAminoMsg(object: _190.MsgPlaceBidResponseAminoMsg): _190.MsgPlaceBidResponse;
            fromProtoMsg(message: _190.MsgPlaceBidResponseProtoMsg): _190.MsgPlaceBidResponse;
            toProto(message: _190.MsgPlaceBidResponse): Uint8Array;
            toProtoMsg(message: _190.MsgPlaceBidResponse): _190.MsgPlaceBidResponseProtoMsg;
        };
        MsgCreateAuction: {
            typeUrl: string;
            encode(message: _190.MsgCreateAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.MsgCreateAuction;
            fromPartial(object: Partial<_190.MsgCreateAuction>): _190.MsgCreateAuction;
            fromAmino(object: _190.MsgCreateAuctionAmino): _190.MsgCreateAuction;
            toAmino(message: _190.MsgCreateAuction): _190.MsgCreateAuctionAmino;
            fromAminoMsg(object: _190.MsgCreateAuctionAminoMsg): _190.MsgCreateAuction;
            toAminoMsg(message: _190.MsgCreateAuction): _190.MsgCreateAuctionAminoMsg;
            fromProtoMsg(message: _190.MsgCreateAuctionProtoMsg): _190.MsgCreateAuction;
            toProto(message: _190.MsgCreateAuction): Uint8Array;
            toProtoMsg(message: _190.MsgCreateAuction): _190.MsgCreateAuctionProtoMsg;
        };
        MsgCreateAuctionResponse: {
            typeUrl: string;
            encode(_: _190.MsgCreateAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.MsgCreateAuctionResponse;
            fromPartial(_: Partial<_190.MsgCreateAuctionResponse>): _190.MsgCreateAuctionResponse;
            fromAmino(_: _190.MsgCreateAuctionResponseAmino): _190.MsgCreateAuctionResponse;
            toAmino(_: _190.MsgCreateAuctionResponse): _190.MsgCreateAuctionResponseAmino;
            fromAminoMsg(object: _190.MsgCreateAuctionResponseAminoMsg): _190.MsgCreateAuctionResponse;
            fromProtoMsg(message: _190.MsgCreateAuctionResponseProtoMsg): _190.MsgCreateAuctionResponse;
            toProto(message: _190.MsgCreateAuctionResponse): Uint8Array;
            toProtoMsg(message: _190.MsgCreateAuctionResponse): _190.MsgCreateAuctionResponseProtoMsg;
        };
        MsgUpdateAuction: {
            typeUrl: string;
            encode(message: _190.MsgUpdateAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.MsgUpdateAuction;
            fromPartial(object: Partial<_190.MsgUpdateAuction>): _190.MsgUpdateAuction;
            fromAmino(object: _190.MsgUpdateAuctionAmino): _190.MsgUpdateAuction;
            toAmino(message: _190.MsgUpdateAuction): _190.MsgUpdateAuctionAmino;
            fromAminoMsg(object: _190.MsgUpdateAuctionAminoMsg): _190.MsgUpdateAuction;
            toAminoMsg(message: _190.MsgUpdateAuction): _190.MsgUpdateAuctionAminoMsg;
            fromProtoMsg(message: _190.MsgUpdateAuctionProtoMsg): _190.MsgUpdateAuction;
            toProto(message: _190.MsgUpdateAuction): Uint8Array;
            toProtoMsg(message: _190.MsgUpdateAuction): _190.MsgUpdateAuctionProtoMsg;
        };
        MsgUpdateAuctionResponse: {
            typeUrl: string;
            encode(_: _190.MsgUpdateAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.MsgUpdateAuctionResponse;
            fromPartial(_: Partial<_190.MsgUpdateAuctionResponse>): _190.MsgUpdateAuctionResponse;
            fromAmino(_: _190.MsgUpdateAuctionResponseAmino): _190.MsgUpdateAuctionResponse;
            toAmino(_: _190.MsgUpdateAuctionResponse): _190.MsgUpdateAuctionResponseAmino;
            fromAminoMsg(object: _190.MsgUpdateAuctionResponseAminoMsg): _190.MsgUpdateAuctionResponse;
            fromProtoMsg(message: _190.MsgUpdateAuctionResponseProtoMsg): _190.MsgUpdateAuctionResponse;
            toProto(message: _190.MsgUpdateAuctionResponse): Uint8Array;
            toProtoMsg(message: _190.MsgUpdateAuctionResponse): _190.MsgUpdateAuctionResponseProtoMsg;
        };
        QueryAuctionRequest: {
            typeUrl: string;
            encode(message: _189.QueryAuctionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.QueryAuctionRequest;
            fromPartial(object: Partial<_189.QueryAuctionRequest>): _189.QueryAuctionRequest;
            fromAmino(object: _189.QueryAuctionRequestAmino): _189.QueryAuctionRequest;
            toAmino(message: _189.QueryAuctionRequest): _189.QueryAuctionRequestAmino;
            fromAminoMsg(object: _189.QueryAuctionRequestAminoMsg): _189.QueryAuctionRequest;
            fromProtoMsg(message: _189.QueryAuctionRequestProtoMsg): _189.QueryAuctionRequest;
            toProto(message: _189.QueryAuctionRequest): Uint8Array;
            toProtoMsg(message: _189.QueryAuctionRequest): _189.QueryAuctionRequestProtoMsg;
        };
        QueryAuctionResponse: {
            typeUrl: string;
            encode(message: _189.QueryAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.QueryAuctionResponse;
            fromPartial(object: Partial<_189.QueryAuctionResponse>): _189.QueryAuctionResponse;
            fromAmino(object: _189.QueryAuctionResponseAmino): _189.QueryAuctionResponse;
            toAmino(message: _189.QueryAuctionResponse): _189.QueryAuctionResponseAmino;
            fromAminoMsg(object: _189.QueryAuctionResponseAminoMsg): _189.QueryAuctionResponse;
            fromProtoMsg(message: _189.QueryAuctionResponseProtoMsg): _189.QueryAuctionResponse;
            toProto(message: _189.QueryAuctionResponse): Uint8Array;
            toProtoMsg(message: _189.QueryAuctionResponse): _189.QueryAuctionResponseProtoMsg;
        };
        QueryAuctionsRequest: {
            typeUrl: string;
            encode(message: _189.QueryAuctionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.QueryAuctionsRequest;
            fromPartial(object: Partial<_189.QueryAuctionsRequest>): _189.QueryAuctionsRequest;
            fromAmino(object: _189.QueryAuctionsRequestAmino): _189.QueryAuctionsRequest;
            toAmino(message: _189.QueryAuctionsRequest): _189.QueryAuctionsRequestAmino;
            fromAminoMsg(object: _189.QueryAuctionsRequestAminoMsg): _189.QueryAuctionsRequest;
            fromProtoMsg(message: _189.QueryAuctionsRequestProtoMsg): _189.QueryAuctionsRequest;
            toProto(message: _189.QueryAuctionsRequest): Uint8Array;
            toProtoMsg(message: _189.QueryAuctionsRequest): _189.QueryAuctionsRequestProtoMsg;
        };
        QueryAuctionsResponse: {
            typeUrl: string;
            encode(message: _189.QueryAuctionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.QueryAuctionsResponse;
            fromPartial(object: Partial<_189.QueryAuctionsResponse>): _189.QueryAuctionsResponse;
            fromAmino(object: _189.QueryAuctionsResponseAmino): _189.QueryAuctionsResponse;
            toAmino(message: _189.QueryAuctionsResponse): _189.QueryAuctionsResponseAmino;
            fromAminoMsg(object: _189.QueryAuctionsResponseAminoMsg): _189.QueryAuctionsResponse;
            fromProtoMsg(message: _189.QueryAuctionsResponseProtoMsg): _189.QueryAuctionsResponse;
            toProto(message: _189.QueryAuctionsResponse): Uint8Array;
            toProtoMsg(message: _189.QueryAuctionsResponse): _189.QueryAuctionsResponseProtoMsg;
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
        auctionTypeFromJSON(object: any): _187.AuctionType;
        auctionTypeToJSON(object: _187.AuctionType): string;
        AuctionType: typeof _187.AuctionType;
        AuctionTypeSDKType: typeof _187.AuctionType;
        AuctionTypeAmino: typeof _187.AuctionType;
        Params: {
            typeUrl: string;
            encode(_: _187.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.Params;
            fromPartial(_: Partial<_187.Params>): _187.Params;
            fromAmino(_: _187.ParamsAmino): _187.Params;
            toAmino(_: _187.Params): _187.ParamsAmino;
            fromAminoMsg(object: _187.ParamsAminoMsg): _187.Params;
            fromProtoMsg(message: _187.ParamsProtoMsg): _187.Params;
            toProto(message: _187.Params): Uint8Array;
            toProtoMsg(message: _187.Params): _187.ParamsProtoMsg;
        };
        Auction: {
            typeUrl: string;
            encode(message: _187.Auction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.Auction;
            fromPartial(object: Partial<_187.Auction>): _187.Auction;
            fromAmino(object: _187.AuctionAmino): _187.Auction;
            toAmino(message: _187.Auction): _187.AuctionAmino;
            fromAminoMsg(object: _187.AuctionAminoMsg): _187.Auction;
            fromProtoMsg(message: _187.AuctionProtoMsg): _187.Auction;
            toProto(message: _187.Auction): Uint8Array;
            toProtoMsg(message: _187.Auction): _187.AuctionProtoMsg;
        };
    };
    const autopilot: {
        QueryClientImpl: typeof _386.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _193.QueryParamsRequest): Promise<_193.QueryParamsResponse>;
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
        Params: {
            typeUrl: string;
            encode(message: _192.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.Params;
            fromPartial(object: Partial<_192.Params>): _192.Params;
            fromAmino(object: _192.ParamsAmino): _192.Params;
            toAmino(message: _192.Params): _192.ParamsAmino;
            fromAminoMsg(object: _192.ParamsAminoMsg): _192.Params;
            fromProtoMsg(message: _192.ParamsProtoMsg): _192.Params;
            toProto(message: _192.Params): Uint8Array;
            toProtoMsg(message: _192.Params): _192.ParamsProtoMsg;
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
    const claim: {
        MsgClientImpl: typeof _400.MsgClientImpl;
        QueryClientImpl: typeof _387.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            distributorAccountBalance(request: _197.QueryDistributorAccountBalanceRequest): Promise<_197.QueryDistributorAccountBalanceResponse>;
            params(request?: _197.QueryParamsRequest): Promise<_197.QueryParamsResponse>;
            claimRecord(request: _197.QueryClaimRecordRequest): Promise<_197.QueryClaimRecordResponse>;
            claimableForAction(request: _197.QueryClaimableForActionRequest): Promise<_197.QueryClaimableForActionResponse>;
            totalClaimable(request: _197.QueryTotalClaimableRequest): Promise<_197.QueryTotalClaimableResponse>;
            userVestings(request: _197.QueryUserVestingsRequest): Promise<_197.QueryUserVestingsResponse>;
            claimStatus(request: _197.QueryClaimStatusRequest): Promise<_197.QueryClaimStatusResponse>;
            claimMetadata(request?: _197.QueryClaimMetadataRequest): Promise<_197.QueryClaimMetadataResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                setAirdropAllocations(value: _198.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimFreeAmount(value: _198.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAirdrop(value: _198.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteAirdrop(value: _198.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                setAirdropAllocations(value: _198.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _198.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _198.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _198.MsgClaimFreeAmount;
                };
                createAirdrop(value: _198.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _198.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _198.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _198.MsgDeleteAirdrop;
                };
            };
            fromPartial: {
                setAirdropAllocations(value: _198.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _198.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _198.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _198.MsgClaimFreeAmount;
                };
                createAirdrop(value: _198.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _198.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _198.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _198.MsgDeleteAirdrop;
                };
            };
        };
        AminoConverter: {
            "/stride.claim.MsgSetAirdropAllocations": {
                aminoType: string;
                toAmino: (message: _198.MsgSetAirdropAllocations) => _198.MsgSetAirdropAllocationsAmino;
                fromAmino: (object: _198.MsgSetAirdropAllocationsAmino) => _198.MsgSetAirdropAllocations;
            };
            "/stride.claim.MsgClaimFreeAmount": {
                aminoType: string;
                toAmino: (message: _198.MsgClaimFreeAmount) => _198.MsgClaimFreeAmountAmino;
                fromAmino: (object: _198.MsgClaimFreeAmountAmino) => _198.MsgClaimFreeAmount;
            };
            "/stride.claim.MsgCreateAirdrop": {
                aminoType: string;
                toAmino: (message: _198.MsgCreateAirdrop) => _198.MsgCreateAirdropAmino;
                fromAmino: (object: _198.MsgCreateAirdropAmino) => _198.MsgCreateAirdrop;
            };
            "/stride.claim.MsgDeleteAirdrop": {
                aminoType: string;
                toAmino: (message: _198.MsgDeleteAirdrop) => _198.MsgDeleteAirdropAmino;
                fromAmino: (object: _198.MsgDeleteAirdropAmino) => _198.MsgDeleteAirdrop;
            };
        };
        MsgSetAirdropAllocations: {
            typeUrl: string;
            encode(message: _198.MsgSetAirdropAllocations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.MsgSetAirdropAllocations;
            fromPartial(object: Partial<_198.MsgSetAirdropAllocations>): _198.MsgSetAirdropAllocations;
            fromAmino(object: _198.MsgSetAirdropAllocationsAmino): _198.MsgSetAirdropAllocations;
            toAmino(message: _198.MsgSetAirdropAllocations): _198.MsgSetAirdropAllocationsAmino;
            fromAminoMsg(object: _198.MsgSetAirdropAllocationsAminoMsg): _198.MsgSetAirdropAllocations;
            fromProtoMsg(message: _198.MsgSetAirdropAllocationsProtoMsg): _198.MsgSetAirdropAllocations;
            toProto(message: _198.MsgSetAirdropAllocations): Uint8Array;
            toProtoMsg(message: _198.MsgSetAirdropAllocations): _198.MsgSetAirdropAllocationsProtoMsg;
        };
        MsgSetAirdropAllocationsResponse: {
            typeUrl: string;
            encode(_: _198.MsgSetAirdropAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.MsgSetAirdropAllocationsResponse;
            fromPartial(_: Partial<_198.MsgSetAirdropAllocationsResponse>): _198.MsgSetAirdropAllocationsResponse;
            fromAmino(_: _198.MsgSetAirdropAllocationsResponseAmino): _198.MsgSetAirdropAllocationsResponse;
            toAmino(_: _198.MsgSetAirdropAllocationsResponse): _198.MsgSetAirdropAllocationsResponseAmino;
            fromAminoMsg(object: _198.MsgSetAirdropAllocationsResponseAminoMsg): _198.MsgSetAirdropAllocationsResponse;
            fromProtoMsg(message: _198.MsgSetAirdropAllocationsResponseProtoMsg): _198.MsgSetAirdropAllocationsResponse;
            toProto(message: _198.MsgSetAirdropAllocationsResponse): Uint8Array;
            toProtoMsg(message: _198.MsgSetAirdropAllocationsResponse): _198.MsgSetAirdropAllocationsResponseProtoMsg;
        };
        MsgClaimFreeAmount: {
            typeUrl: string;
            encode(message: _198.MsgClaimFreeAmount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.MsgClaimFreeAmount;
            fromPartial(object: Partial<_198.MsgClaimFreeAmount>): _198.MsgClaimFreeAmount;
            fromAmino(object: _198.MsgClaimFreeAmountAmino): _198.MsgClaimFreeAmount;
            toAmino(message: _198.MsgClaimFreeAmount): _198.MsgClaimFreeAmountAmino;
            fromAminoMsg(object: _198.MsgClaimFreeAmountAminoMsg): _198.MsgClaimFreeAmount;
            toAminoMsg(message: _198.MsgClaimFreeAmount): _198.MsgClaimFreeAmountAminoMsg;
            fromProtoMsg(message: _198.MsgClaimFreeAmountProtoMsg): _198.MsgClaimFreeAmount;
            toProto(message: _198.MsgClaimFreeAmount): Uint8Array;
            toProtoMsg(message: _198.MsgClaimFreeAmount): _198.MsgClaimFreeAmountProtoMsg;
        };
        MsgClaimFreeAmountResponse: {
            typeUrl: string;
            encode(message: _198.MsgClaimFreeAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.MsgClaimFreeAmountResponse;
            fromPartial(object: Partial<_198.MsgClaimFreeAmountResponse>): _198.MsgClaimFreeAmountResponse;
            fromAmino(object: _198.MsgClaimFreeAmountResponseAmino): _198.MsgClaimFreeAmountResponse;
            toAmino(message: _198.MsgClaimFreeAmountResponse): _198.MsgClaimFreeAmountResponseAmino;
            fromAminoMsg(object: _198.MsgClaimFreeAmountResponseAminoMsg): _198.MsgClaimFreeAmountResponse;
            fromProtoMsg(message: _198.MsgClaimFreeAmountResponseProtoMsg): _198.MsgClaimFreeAmountResponse;
            toProto(message: _198.MsgClaimFreeAmountResponse): Uint8Array;
            toProtoMsg(message: _198.MsgClaimFreeAmountResponse): _198.MsgClaimFreeAmountResponseProtoMsg;
        };
        MsgCreateAirdrop: {
            typeUrl: string;
            encode(message: _198.MsgCreateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.MsgCreateAirdrop;
            fromPartial(object: Partial<_198.MsgCreateAirdrop>): _198.MsgCreateAirdrop;
            fromAmino(object: _198.MsgCreateAirdropAmino): _198.MsgCreateAirdrop;
            toAmino(message: _198.MsgCreateAirdrop): _198.MsgCreateAirdropAmino;
            fromAminoMsg(object: _198.MsgCreateAirdropAminoMsg): _198.MsgCreateAirdrop;
            fromProtoMsg(message: _198.MsgCreateAirdropProtoMsg): _198.MsgCreateAirdrop;
            toProto(message: _198.MsgCreateAirdrop): Uint8Array;
            toProtoMsg(message: _198.MsgCreateAirdrop): _198.MsgCreateAirdropProtoMsg;
        };
        MsgCreateAirdropResponse: {
            typeUrl: string;
            encode(_: _198.MsgCreateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.MsgCreateAirdropResponse;
            fromPartial(_: Partial<_198.MsgCreateAirdropResponse>): _198.MsgCreateAirdropResponse;
            fromAmino(_: _198.MsgCreateAirdropResponseAmino): _198.MsgCreateAirdropResponse;
            toAmino(_: _198.MsgCreateAirdropResponse): _198.MsgCreateAirdropResponseAmino;
            fromAminoMsg(object: _198.MsgCreateAirdropResponseAminoMsg): _198.MsgCreateAirdropResponse;
            fromProtoMsg(message: _198.MsgCreateAirdropResponseProtoMsg): _198.MsgCreateAirdropResponse;
            toProto(message: _198.MsgCreateAirdropResponse): Uint8Array;
            toProtoMsg(message: _198.MsgCreateAirdropResponse): _198.MsgCreateAirdropResponseProtoMsg;
        };
        MsgDeleteAirdrop: {
            typeUrl: string;
            encode(message: _198.MsgDeleteAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.MsgDeleteAirdrop;
            fromPartial(object: Partial<_198.MsgDeleteAirdrop>): _198.MsgDeleteAirdrop;
            fromAmino(object: _198.MsgDeleteAirdropAmino): _198.MsgDeleteAirdrop;
            toAmino(message: _198.MsgDeleteAirdrop): _198.MsgDeleteAirdropAmino;
            fromAminoMsg(object: _198.MsgDeleteAirdropAminoMsg): _198.MsgDeleteAirdrop;
            fromProtoMsg(message: _198.MsgDeleteAirdropProtoMsg): _198.MsgDeleteAirdrop;
            toProto(message: _198.MsgDeleteAirdrop): Uint8Array;
            toProtoMsg(message: _198.MsgDeleteAirdrop): _198.MsgDeleteAirdropProtoMsg;
        };
        MsgDeleteAirdropResponse: {
            typeUrl: string;
            encode(_: _198.MsgDeleteAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.MsgDeleteAirdropResponse;
            fromPartial(_: Partial<_198.MsgDeleteAirdropResponse>): _198.MsgDeleteAirdropResponse;
            fromAmino(_: _198.MsgDeleteAirdropResponseAmino): _198.MsgDeleteAirdropResponse;
            toAmino(_: _198.MsgDeleteAirdropResponse): _198.MsgDeleteAirdropResponseAmino;
            fromAminoMsg(object: _198.MsgDeleteAirdropResponseAminoMsg): _198.MsgDeleteAirdropResponse;
            fromProtoMsg(message: _198.MsgDeleteAirdropResponseProtoMsg): _198.MsgDeleteAirdropResponse;
            toProto(message: _198.MsgDeleteAirdropResponse): Uint8Array;
            toProtoMsg(message: _198.MsgDeleteAirdropResponse): _198.MsgDeleteAirdropResponseProtoMsg;
        };
        ClaimStatus: {
            typeUrl: string;
            encode(message: _197.ClaimStatus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.ClaimStatus;
            fromPartial(object: Partial<_197.ClaimStatus>): _197.ClaimStatus;
            fromAmino(object: _197.ClaimStatusAmino): _197.ClaimStatus;
            toAmino(message: _197.ClaimStatus): _197.ClaimStatusAmino;
            fromAminoMsg(object: _197.ClaimStatusAminoMsg): _197.ClaimStatus;
            fromProtoMsg(message: _197.ClaimStatusProtoMsg): _197.ClaimStatus;
            toProto(message: _197.ClaimStatus): Uint8Array;
            toProtoMsg(message: _197.ClaimStatus): _197.ClaimStatusProtoMsg;
        };
        QueryClaimStatusRequest: {
            typeUrl: string;
            encode(message: _197.QueryClaimStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.QueryClaimStatusRequest;
            fromPartial(object: Partial<_197.QueryClaimStatusRequest>): _197.QueryClaimStatusRequest;
            fromAmino(object: _197.QueryClaimStatusRequestAmino): _197.QueryClaimStatusRequest;
            toAmino(message: _197.QueryClaimStatusRequest): _197.QueryClaimStatusRequestAmino;
            fromAminoMsg(object: _197.QueryClaimStatusRequestAminoMsg): _197.QueryClaimStatusRequest;
            fromProtoMsg(message: _197.QueryClaimStatusRequestProtoMsg): _197.QueryClaimStatusRequest;
            toProto(message: _197.QueryClaimStatusRequest): Uint8Array;
            toProtoMsg(message: _197.QueryClaimStatusRequest): _197.QueryClaimStatusRequestProtoMsg;
        };
        QueryClaimStatusResponse: {
            typeUrl: string;
            encode(message: _197.QueryClaimStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.QueryClaimStatusResponse;
            fromPartial(object: Partial<_197.QueryClaimStatusResponse>): _197.QueryClaimStatusResponse;
            fromAmino(object: _197.QueryClaimStatusResponseAmino): _197.QueryClaimStatusResponse;
            toAmino(message: _197.QueryClaimStatusResponse): _197.QueryClaimStatusResponseAmino;
            fromAminoMsg(object: _197.QueryClaimStatusResponseAminoMsg): _197.QueryClaimStatusResponse;
            fromProtoMsg(message: _197.QueryClaimStatusResponseProtoMsg): _197.QueryClaimStatusResponse;
            toProto(message: _197.QueryClaimStatusResponse): Uint8Array;
            toProtoMsg(message: _197.QueryClaimStatusResponse): _197.QueryClaimStatusResponseProtoMsg;
        };
        ClaimMetadata: {
            typeUrl: string;
            encode(message: _197.ClaimMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.ClaimMetadata;
            fromPartial(object: Partial<_197.ClaimMetadata>): _197.ClaimMetadata;
            fromAmino(object: _197.ClaimMetadataAmino): _197.ClaimMetadata;
            toAmino(message: _197.ClaimMetadata): _197.ClaimMetadataAmino;
            fromAminoMsg(object: _197.ClaimMetadataAminoMsg): _197.ClaimMetadata;
            fromProtoMsg(message: _197.ClaimMetadataProtoMsg): _197.ClaimMetadata;
            toProto(message: _197.ClaimMetadata): Uint8Array;
            toProtoMsg(message: _197.ClaimMetadata): _197.ClaimMetadataProtoMsg;
        };
        QueryClaimMetadataRequest: {
            typeUrl: string;
            encode(_: _197.QueryClaimMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.QueryClaimMetadataRequest;
            fromPartial(_: Partial<_197.QueryClaimMetadataRequest>): _197.QueryClaimMetadataRequest;
            fromAmino(_: _197.QueryClaimMetadataRequestAmino): _197.QueryClaimMetadataRequest;
            toAmino(_: _197.QueryClaimMetadataRequest): _197.QueryClaimMetadataRequestAmino;
            fromAminoMsg(object: _197.QueryClaimMetadataRequestAminoMsg): _197.QueryClaimMetadataRequest;
            fromProtoMsg(message: _197.QueryClaimMetadataRequestProtoMsg): _197.QueryClaimMetadataRequest;
            toProto(message: _197.QueryClaimMetadataRequest): Uint8Array;
            toProtoMsg(message: _197.QueryClaimMetadataRequest): _197.QueryClaimMetadataRequestProtoMsg;
        };
        QueryClaimMetadataResponse: {
            typeUrl: string;
            encode(message: _197.QueryClaimMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.QueryClaimMetadataResponse;
            fromPartial(object: Partial<_197.QueryClaimMetadataResponse>): _197.QueryClaimMetadataResponse;
            fromAmino(object: _197.QueryClaimMetadataResponseAmino): _197.QueryClaimMetadataResponse;
            toAmino(message: _197.QueryClaimMetadataResponse): _197.QueryClaimMetadataResponseAmino;
            fromAminoMsg(object: _197.QueryClaimMetadataResponseAminoMsg): _197.QueryClaimMetadataResponse;
            fromProtoMsg(message: _197.QueryClaimMetadataResponseProtoMsg): _197.QueryClaimMetadataResponse;
            toProto(message: _197.QueryClaimMetadataResponse): Uint8Array;
            toProtoMsg(message: _197.QueryClaimMetadataResponse): _197.QueryClaimMetadataResponseProtoMsg;
        };
        QueryDistributorAccountBalanceRequest: {
            typeUrl: string;
            encode(message: _197.QueryDistributorAccountBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.QueryDistributorAccountBalanceRequest;
            fromPartial(object: Partial<_197.QueryDistributorAccountBalanceRequest>): _197.QueryDistributorAccountBalanceRequest;
            fromAmino(object: _197.QueryDistributorAccountBalanceRequestAmino): _197.QueryDistributorAccountBalanceRequest;
            toAmino(message: _197.QueryDistributorAccountBalanceRequest): _197.QueryDistributorAccountBalanceRequestAmino;
            fromAminoMsg(object: _197.QueryDistributorAccountBalanceRequestAminoMsg): _197.QueryDistributorAccountBalanceRequest;
            fromProtoMsg(message: _197.QueryDistributorAccountBalanceRequestProtoMsg): _197.QueryDistributorAccountBalanceRequest;
            toProto(message: _197.QueryDistributorAccountBalanceRequest): Uint8Array;
            toProtoMsg(message: _197.QueryDistributorAccountBalanceRequest): _197.QueryDistributorAccountBalanceRequestProtoMsg;
        };
        QueryDistributorAccountBalanceResponse: {
            typeUrl: string;
            encode(message: _197.QueryDistributorAccountBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.QueryDistributorAccountBalanceResponse;
            fromPartial(object: Partial<_197.QueryDistributorAccountBalanceResponse>): _197.QueryDistributorAccountBalanceResponse;
            fromAmino(object: _197.QueryDistributorAccountBalanceResponseAmino): _197.QueryDistributorAccountBalanceResponse;
            toAmino(message: _197.QueryDistributorAccountBalanceResponse): _197.QueryDistributorAccountBalanceResponseAmino;
            fromAminoMsg(object: _197.QueryDistributorAccountBalanceResponseAminoMsg): _197.QueryDistributorAccountBalanceResponse;
            fromProtoMsg(message: _197.QueryDistributorAccountBalanceResponseProtoMsg): _197.QueryDistributorAccountBalanceResponse;
            toProto(message: _197.QueryDistributorAccountBalanceResponse): Uint8Array;
            toProtoMsg(message: _197.QueryDistributorAccountBalanceResponse): _197.QueryDistributorAccountBalanceResponseProtoMsg;
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
        QueryClaimRecordRequest: {
            typeUrl: string;
            encode(message: _197.QueryClaimRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.QueryClaimRecordRequest;
            fromPartial(object: Partial<_197.QueryClaimRecordRequest>): _197.QueryClaimRecordRequest;
            fromAmino(object: _197.QueryClaimRecordRequestAmino): _197.QueryClaimRecordRequest;
            toAmino(message: _197.QueryClaimRecordRequest): _197.QueryClaimRecordRequestAmino;
            fromAminoMsg(object: _197.QueryClaimRecordRequestAminoMsg): _197.QueryClaimRecordRequest;
            fromProtoMsg(message: _197.QueryClaimRecordRequestProtoMsg): _197.QueryClaimRecordRequest;
            toProto(message: _197.QueryClaimRecordRequest): Uint8Array;
            toProtoMsg(message: _197.QueryClaimRecordRequest): _197.QueryClaimRecordRequestProtoMsg;
        };
        QueryClaimRecordResponse: {
            typeUrl: string;
            encode(message: _197.QueryClaimRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.QueryClaimRecordResponse;
            fromPartial(object: Partial<_197.QueryClaimRecordResponse>): _197.QueryClaimRecordResponse;
            fromAmino(object: _197.QueryClaimRecordResponseAmino): _197.QueryClaimRecordResponse;
            toAmino(message: _197.QueryClaimRecordResponse): _197.QueryClaimRecordResponseAmino;
            fromAminoMsg(object: _197.QueryClaimRecordResponseAminoMsg): _197.QueryClaimRecordResponse;
            fromProtoMsg(message: _197.QueryClaimRecordResponseProtoMsg): _197.QueryClaimRecordResponse;
            toProto(message: _197.QueryClaimRecordResponse): Uint8Array;
            toProtoMsg(message: _197.QueryClaimRecordResponse): _197.QueryClaimRecordResponseProtoMsg;
        };
        QueryClaimableForActionRequest: {
            typeUrl: string;
            encode(message: _197.QueryClaimableForActionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.QueryClaimableForActionRequest;
            fromPartial(object: Partial<_197.QueryClaimableForActionRequest>): _197.QueryClaimableForActionRequest;
            fromAmino(object: _197.QueryClaimableForActionRequestAmino): _197.QueryClaimableForActionRequest;
            toAmino(message: _197.QueryClaimableForActionRequest): _197.QueryClaimableForActionRequestAmino;
            fromAminoMsg(object: _197.QueryClaimableForActionRequestAminoMsg): _197.QueryClaimableForActionRequest;
            fromProtoMsg(message: _197.QueryClaimableForActionRequestProtoMsg): _197.QueryClaimableForActionRequest;
            toProto(message: _197.QueryClaimableForActionRequest): Uint8Array;
            toProtoMsg(message: _197.QueryClaimableForActionRequest): _197.QueryClaimableForActionRequestProtoMsg;
        };
        QueryClaimableForActionResponse: {
            typeUrl: string;
            encode(message: _197.QueryClaimableForActionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.QueryClaimableForActionResponse;
            fromPartial(object: Partial<_197.QueryClaimableForActionResponse>): _197.QueryClaimableForActionResponse;
            fromAmino(object: _197.QueryClaimableForActionResponseAmino): _197.QueryClaimableForActionResponse;
            toAmino(message: _197.QueryClaimableForActionResponse): _197.QueryClaimableForActionResponseAmino;
            fromAminoMsg(object: _197.QueryClaimableForActionResponseAminoMsg): _197.QueryClaimableForActionResponse;
            fromProtoMsg(message: _197.QueryClaimableForActionResponseProtoMsg): _197.QueryClaimableForActionResponse;
            toProto(message: _197.QueryClaimableForActionResponse): Uint8Array;
            toProtoMsg(message: _197.QueryClaimableForActionResponse): _197.QueryClaimableForActionResponseProtoMsg;
        };
        QueryTotalClaimableRequest: {
            typeUrl: string;
            encode(message: _197.QueryTotalClaimableRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.QueryTotalClaimableRequest;
            fromPartial(object: Partial<_197.QueryTotalClaimableRequest>): _197.QueryTotalClaimableRequest;
            fromAmino(object: _197.QueryTotalClaimableRequestAmino): _197.QueryTotalClaimableRequest;
            toAmino(message: _197.QueryTotalClaimableRequest): _197.QueryTotalClaimableRequestAmino;
            fromAminoMsg(object: _197.QueryTotalClaimableRequestAminoMsg): _197.QueryTotalClaimableRequest;
            fromProtoMsg(message: _197.QueryTotalClaimableRequestProtoMsg): _197.QueryTotalClaimableRequest;
            toProto(message: _197.QueryTotalClaimableRequest): Uint8Array;
            toProtoMsg(message: _197.QueryTotalClaimableRequest): _197.QueryTotalClaimableRequestProtoMsg;
        };
        QueryTotalClaimableResponse: {
            typeUrl: string;
            encode(message: _197.QueryTotalClaimableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.QueryTotalClaimableResponse;
            fromPartial(object: Partial<_197.QueryTotalClaimableResponse>): _197.QueryTotalClaimableResponse;
            fromAmino(object: _197.QueryTotalClaimableResponseAmino): _197.QueryTotalClaimableResponse;
            toAmino(message: _197.QueryTotalClaimableResponse): _197.QueryTotalClaimableResponseAmino;
            fromAminoMsg(object: _197.QueryTotalClaimableResponseAminoMsg): _197.QueryTotalClaimableResponse;
            fromProtoMsg(message: _197.QueryTotalClaimableResponseProtoMsg): _197.QueryTotalClaimableResponse;
            toProto(message: _197.QueryTotalClaimableResponse): Uint8Array;
            toProtoMsg(message: _197.QueryTotalClaimableResponse): _197.QueryTotalClaimableResponseProtoMsg;
        };
        QueryUserVestingsRequest: {
            typeUrl: string;
            encode(message: _197.QueryUserVestingsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.QueryUserVestingsRequest;
            fromPartial(object: Partial<_197.QueryUserVestingsRequest>): _197.QueryUserVestingsRequest;
            fromAmino(object: _197.QueryUserVestingsRequestAmino): _197.QueryUserVestingsRequest;
            toAmino(message: _197.QueryUserVestingsRequest): _197.QueryUserVestingsRequestAmino;
            fromAminoMsg(object: _197.QueryUserVestingsRequestAminoMsg): _197.QueryUserVestingsRequest;
            fromProtoMsg(message: _197.QueryUserVestingsRequestProtoMsg): _197.QueryUserVestingsRequest;
            toProto(message: _197.QueryUserVestingsRequest): Uint8Array;
            toProtoMsg(message: _197.QueryUserVestingsRequest): _197.QueryUserVestingsRequestProtoMsg;
        };
        QueryUserVestingsResponse: {
            typeUrl: string;
            encode(message: _197.QueryUserVestingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.QueryUserVestingsResponse;
            fromPartial(object: Partial<_197.QueryUserVestingsResponse>): _197.QueryUserVestingsResponse;
            fromAmino(object: _197.QueryUserVestingsResponseAmino): _197.QueryUserVestingsResponse;
            toAmino(message: _197.QueryUserVestingsResponse): _197.QueryUserVestingsResponseAmino;
            fromAminoMsg(object: _197.QueryUserVestingsResponseAminoMsg): _197.QueryUserVestingsResponse;
            fromProtoMsg(message: _197.QueryUserVestingsResponseProtoMsg): _197.QueryUserVestingsResponse;
            toProto(message: _197.QueryUserVestingsResponse): Uint8Array;
            toProtoMsg(message: _197.QueryUserVestingsResponse): _197.QueryUserVestingsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _196.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.Params;
            fromPartial(object: Partial<_196.Params>): _196.Params;
            fromAmino(object: _196.ParamsAmino): _196.Params;
            toAmino(message: _196.Params): _196.ParamsAmino;
            fromAminoMsg(object: _196.ParamsAminoMsg): _196.Params;
            fromProtoMsg(message: _196.ParamsProtoMsg): _196.Params;
            toProto(message: _196.Params): Uint8Array;
            toProtoMsg(message: _196.Params): _196.ParamsProtoMsg;
        };
        Airdrop: {
            typeUrl: string;
            encode(message: _196.Airdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.Airdrop;
            fromPartial(object: Partial<_196.Airdrop>): _196.Airdrop;
            fromAmino(object: _196.AirdropAmino): _196.Airdrop;
            toAmino(message: _196.Airdrop): _196.AirdropAmino;
            fromAminoMsg(object: _196.AirdropAminoMsg): _196.Airdrop;
            fromProtoMsg(message: _196.AirdropProtoMsg): _196.Airdrop;
            toProto(message: _196.Airdrop): Uint8Array;
            toProtoMsg(message: _196.Airdrop): _196.AirdropProtoMsg;
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
        actionFromJSON(object: any): _194.Action;
        actionToJSON(object: _194.Action): string;
        Action: typeof _194.Action;
        ActionSDKType: typeof _194.Action;
        ActionAmino: typeof _194.Action;
        ClaimRecord: {
            typeUrl: string;
            encode(message: _194.ClaimRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _194.ClaimRecord;
            fromPartial(object: Partial<_194.ClaimRecord>): _194.ClaimRecord;
            fromAmino(object: _194.ClaimRecordAmino): _194.ClaimRecord;
            toAmino(message: _194.ClaimRecord): _194.ClaimRecordAmino;
            fromAminoMsg(object: _194.ClaimRecordAminoMsg): _194.ClaimRecord;
            fromProtoMsg(message: _194.ClaimRecordProtoMsg): _194.ClaimRecord;
            toProto(message: _194.ClaimRecord): Uint8Array;
            toProtoMsg(message: _194.ClaimRecord): _194.ClaimRecordProtoMsg;
        };
    };
    const epochs: {
        QueryClientImpl: typeof _388.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            epochInfos(request?: _200.QueryEpochsInfoRequest): Promise<_200.QueryEpochsInfoResponse>;
            currentEpoch(request: _200.QueryCurrentEpochRequest): Promise<_200.QueryCurrentEpochResponse>;
            epochInfo(request: _200.QueryEpochInfoRequest): Promise<_200.QueryEpochInfoResponse>;
        };
        QueryEpochsInfoRequest: {
            typeUrl: string;
            encode(message: _200.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.QueryEpochsInfoRequest;
            fromPartial(object: Partial<_200.QueryEpochsInfoRequest>): _200.QueryEpochsInfoRequest;
            fromAmino(object: _200.QueryEpochsInfoRequestAmino): _200.QueryEpochsInfoRequest;
            toAmino(message: _200.QueryEpochsInfoRequest): _200.QueryEpochsInfoRequestAmino;
            fromAminoMsg(object: _200.QueryEpochsInfoRequestAminoMsg): _200.QueryEpochsInfoRequest;
            fromProtoMsg(message: _200.QueryEpochsInfoRequestProtoMsg): _200.QueryEpochsInfoRequest;
            toProto(message: _200.QueryEpochsInfoRequest): Uint8Array;
            toProtoMsg(message: _200.QueryEpochsInfoRequest): _200.QueryEpochsInfoRequestProtoMsg;
        };
        QueryEpochsInfoResponse: {
            typeUrl: string;
            encode(message: _200.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.QueryEpochsInfoResponse;
            fromPartial(object: Partial<_200.QueryEpochsInfoResponse>): _200.QueryEpochsInfoResponse;
            fromAmino(object: _200.QueryEpochsInfoResponseAmino): _200.QueryEpochsInfoResponse;
            toAmino(message: _200.QueryEpochsInfoResponse): _200.QueryEpochsInfoResponseAmino;
            fromAminoMsg(object: _200.QueryEpochsInfoResponseAminoMsg): _200.QueryEpochsInfoResponse;
            fromProtoMsg(message: _200.QueryEpochsInfoResponseProtoMsg): _200.QueryEpochsInfoResponse;
            toProto(message: _200.QueryEpochsInfoResponse): Uint8Array;
            toProtoMsg(message: _200.QueryEpochsInfoResponse): _200.QueryEpochsInfoResponseProtoMsg;
        };
        QueryCurrentEpochRequest: {
            typeUrl: string;
            encode(message: _200.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.QueryCurrentEpochRequest;
            fromPartial(object: Partial<_200.QueryCurrentEpochRequest>): _200.QueryCurrentEpochRequest;
            fromAmino(object: _200.QueryCurrentEpochRequestAmino): _200.QueryCurrentEpochRequest;
            toAmino(message: _200.QueryCurrentEpochRequest): _200.QueryCurrentEpochRequestAmino;
            fromAminoMsg(object: _200.QueryCurrentEpochRequestAminoMsg): _200.QueryCurrentEpochRequest;
            fromProtoMsg(message: _200.QueryCurrentEpochRequestProtoMsg): _200.QueryCurrentEpochRequest;
            toProto(message: _200.QueryCurrentEpochRequest): Uint8Array;
            toProtoMsg(message: _200.QueryCurrentEpochRequest): _200.QueryCurrentEpochRequestProtoMsg;
        };
        QueryCurrentEpochResponse: {
            typeUrl: string;
            encode(message: _200.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.QueryCurrentEpochResponse;
            fromPartial(object: Partial<_200.QueryCurrentEpochResponse>): _200.QueryCurrentEpochResponse;
            fromAmino(object: _200.QueryCurrentEpochResponseAmino): _200.QueryCurrentEpochResponse;
            toAmino(message: _200.QueryCurrentEpochResponse): _200.QueryCurrentEpochResponseAmino;
            fromAminoMsg(object: _200.QueryCurrentEpochResponseAminoMsg): _200.QueryCurrentEpochResponse;
            fromProtoMsg(message: _200.QueryCurrentEpochResponseProtoMsg): _200.QueryCurrentEpochResponse;
            toProto(message: _200.QueryCurrentEpochResponse): Uint8Array;
            toProtoMsg(message: _200.QueryCurrentEpochResponse): _200.QueryCurrentEpochResponseProtoMsg;
        };
        QueryEpochInfoRequest: {
            typeUrl: string;
            encode(message: _200.QueryEpochInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.QueryEpochInfoRequest;
            fromPartial(object: Partial<_200.QueryEpochInfoRequest>): _200.QueryEpochInfoRequest;
            fromAmino(object: _200.QueryEpochInfoRequestAmino): _200.QueryEpochInfoRequest;
            toAmino(message: _200.QueryEpochInfoRequest): _200.QueryEpochInfoRequestAmino;
            fromAminoMsg(object: _200.QueryEpochInfoRequestAminoMsg): _200.QueryEpochInfoRequest;
            fromProtoMsg(message: _200.QueryEpochInfoRequestProtoMsg): _200.QueryEpochInfoRequest;
            toProto(message: _200.QueryEpochInfoRequest): Uint8Array;
            toProtoMsg(message: _200.QueryEpochInfoRequest): _200.QueryEpochInfoRequestProtoMsg;
        };
        QueryEpochInfoResponse: {
            typeUrl: string;
            encode(message: _200.QueryEpochInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.QueryEpochInfoResponse;
            fromPartial(object: Partial<_200.QueryEpochInfoResponse>): _200.QueryEpochInfoResponse;
            fromAmino(object: _200.QueryEpochInfoResponseAmino): _200.QueryEpochInfoResponse;
            toAmino(message: _200.QueryEpochInfoResponse): _200.QueryEpochInfoResponseAmino;
            fromAminoMsg(object: _200.QueryEpochInfoResponseAminoMsg): _200.QueryEpochInfoResponse;
            fromProtoMsg(message: _200.QueryEpochInfoResponseProtoMsg): _200.QueryEpochInfoResponse;
            toProto(message: _200.QueryEpochInfoResponse): Uint8Array;
            toProtoMsg(message: _200.QueryEpochInfoResponse): _200.QueryEpochInfoResponseProtoMsg;
        };
        EpochInfo: {
            typeUrl: string;
            encode(message: _199.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.EpochInfo;
            fromPartial(object: Partial<_199.EpochInfo>): _199.EpochInfo;
            fromAmino(object: _199.EpochInfoAmino): _199.EpochInfo;
            toAmino(message: _199.EpochInfo): _199.EpochInfoAmino;
            fromAminoMsg(object: _199.EpochInfoAminoMsg): _199.EpochInfo;
            fromProtoMsg(message: _199.EpochInfoProtoMsg): _199.EpochInfo;
            toProto(message: _199.EpochInfo): Uint8Array;
            toProtoMsg(message: _199.EpochInfo): _199.EpochInfoProtoMsg;
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
    };
    const icacallbacks: {
        QueryClientImpl: typeof _389.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _205.QueryParamsRequest): Promise<_205.QueryParamsResponse>;
            callbackData(request: _205.QueryGetCallbackDataRequest): Promise<_205.QueryGetCallbackDataResponse>;
            callbackDataAll(request?: _205.QueryAllCallbackDataRequest): Promise<_205.QueryAllCallbackDataResponse>;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _205.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.QueryParamsRequest;
            fromPartial(_: Partial<_205.QueryParamsRequest>): _205.QueryParamsRequest;
            fromAmino(_: _205.QueryParamsRequestAmino): _205.QueryParamsRequest;
            toAmino(_: _205.QueryParamsRequest): _205.QueryParamsRequestAmino;
            fromAminoMsg(object: _205.QueryParamsRequestAminoMsg): _205.QueryParamsRequest;
            fromProtoMsg(message: _205.QueryParamsRequestProtoMsg): _205.QueryParamsRequest;
            toProto(message: _205.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _205.QueryParamsRequest): _205.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _205.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.QueryParamsResponse;
            fromPartial(object: Partial<_205.QueryParamsResponse>): _205.QueryParamsResponse;
            fromAmino(object: _205.QueryParamsResponseAmino): _205.QueryParamsResponse;
            toAmino(message: _205.QueryParamsResponse): _205.QueryParamsResponseAmino;
            fromAminoMsg(object: _205.QueryParamsResponseAminoMsg): _205.QueryParamsResponse;
            fromProtoMsg(message: _205.QueryParamsResponseProtoMsg): _205.QueryParamsResponse;
            toProto(message: _205.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _205.QueryParamsResponse): _205.QueryParamsResponseProtoMsg;
        };
        QueryGetCallbackDataRequest: {
            typeUrl: string;
            encode(message: _205.QueryGetCallbackDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.QueryGetCallbackDataRequest;
            fromPartial(object: Partial<_205.QueryGetCallbackDataRequest>): _205.QueryGetCallbackDataRequest;
            fromAmino(object: _205.QueryGetCallbackDataRequestAmino): _205.QueryGetCallbackDataRequest;
            toAmino(message: _205.QueryGetCallbackDataRequest): _205.QueryGetCallbackDataRequestAmino;
            fromAminoMsg(object: _205.QueryGetCallbackDataRequestAminoMsg): _205.QueryGetCallbackDataRequest;
            fromProtoMsg(message: _205.QueryGetCallbackDataRequestProtoMsg): _205.QueryGetCallbackDataRequest;
            toProto(message: _205.QueryGetCallbackDataRequest): Uint8Array;
            toProtoMsg(message: _205.QueryGetCallbackDataRequest): _205.QueryGetCallbackDataRequestProtoMsg;
        };
        QueryGetCallbackDataResponse: {
            typeUrl: string;
            encode(message: _205.QueryGetCallbackDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.QueryGetCallbackDataResponse;
            fromPartial(object: Partial<_205.QueryGetCallbackDataResponse>): _205.QueryGetCallbackDataResponse;
            fromAmino(object: _205.QueryGetCallbackDataResponseAmino): _205.QueryGetCallbackDataResponse;
            toAmino(message: _205.QueryGetCallbackDataResponse): _205.QueryGetCallbackDataResponseAmino;
            fromAminoMsg(object: _205.QueryGetCallbackDataResponseAminoMsg): _205.QueryGetCallbackDataResponse;
            fromProtoMsg(message: _205.QueryGetCallbackDataResponseProtoMsg): _205.QueryGetCallbackDataResponse;
            toProto(message: _205.QueryGetCallbackDataResponse): Uint8Array;
            toProtoMsg(message: _205.QueryGetCallbackDataResponse): _205.QueryGetCallbackDataResponseProtoMsg;
        };
        QueryAllCallbackDataRequest: {
            typeUrl: string;
            encode(message: _205.QueryAllCallbackDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.QueryAllCallbackDataRequest;
            fromPartial(object: Partial<_205.QueryAllCallbackDataRequest>): _205.QueryAllCallbackDataRequest;
            fromAmino(object: _205.QueryAllCallbackDataRequestAmino): _205.QueryAllCallbackDataRequest;
            toAmino(message: _205.QueryAllCallbackDataRequest): _205.QueryAllCallbackDataRequestAmino;
            fromAminoMsg(object: _205.QueryAllCallbackDataRequestAminoMsg): _205.QueryAllCallbackDataRequest;
            fromProtoMsg(message: _205.QueryAllCallbackDataRequestProtoMsg): _205.QueryAllCallbackDataRequest;
            toProto(message: _205.QueryAllCallbackDataRequest): Uint8Array;
            toProtoMsg(message: _205.QueryAllCallbackDataRequest): _205.QueryAllCallbackDataRequestProtoMsg;
        };
        QueryAllCallbackDataResponse: {
            typeUrl: string;
            encode(message: _205.QueryAllCallbackDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.QueryAllCallbackDataResponse;
            fromPartial(object: Partial<_205.QueryAllCallbackDataResponse>): _205.QueryAllCallbackDataResponse;
            fromAmino(object: _205.QueryAllCallbackDataResponseAmino): _205.QueryAllCallbackDataResponse;
            toAmino(message: _205.QueryAllCallbackDataResponse): _205.QueryAllCallbackDataResponseAmino;
            fromAminoMsg(object: _205.QueryAllCallbackDataResponseAminoMsg): _205.QueryAllCallbackDataResponse;
            fromProtoMsg(message: _205.QueryAllCallbackDataResponseProtoMsg): _205.QueryAllCallbackDataResponse;
            toProto(message: _205.QueryAllCallbackDataResponse): Uint8Array;
            toProtoMsg(message: _205.QueryAllCallbackDataResponse): _205.QueryAllCallbackDataResponseProtoMsg;
        };
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
        IcacallbacksPacketData: {
            typeUrl: string;
            encode(message: _203.IcacallbacksPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.IcacallbacksPacketData;
            fromPartial(object: Partial<_203.IcacallbacksPacketData>): _203.IcacallbacksPacketData;
            fromAmino(object: _203.IcacallbacksPacketDataAmino): _203.IcacallbacksPacketData;
            toAmino(message: _203.IcacallbacksPacketData): _203.IcacallbacksPacketDataAmino;
            fromAminoMsg(object: _203.IcacallbacksPacketDataAminoMsg): _203.IcacallbacksPacketData;
            fromProtoMsg(message: _203.IcacallbacksPacketDataProtoMsg): _203.IcacallbacksPacketData;
            toProto(message: _203.IcacallbacksPacketData): Uint8Array;
            toProtoMsg(message: _203.IcacallbacksPacketData): _203.IcacallbacksPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _203.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.NoData;
            fromPartial(_: Partial<_203.NoData>): _203.NoData;
            fromAmino(_: _203.NoDataAmino): _203.NoData;
            toAmino(_: _203.NoData): _203.NoDataAmino;
            fromAminoMsg(object: _203.NoDataAminoMsg): _203.NoData;
            fromProtoMsg(message: _203.NoDataProtoMsg): _203.NoData;
            toProto(message: _203.NoData): Uint8Array;
            toProtoMsg(message: _203.NoData): _203.NoDataProtoMsg;
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
        CallbackData: {
            typeUrl: string;
            encode(message: _201.CallbackData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.CallbackData;
            fromPartial(object: Partial<_201.CallbackData>): _201.CallbackData;
            fromAmino(object: _201.CallbackDataAmino): _201.CallbackData;
            toAmino(message: _201.CallbackData): _201.CallbackDataAmino;
            fromAminoMsg(object: _201.CallbackDataAminoMsg): _201.CallbackData;
            fromProtoMsg(message: _201.CallbackDataProtoMsg): _201.CallbackData;
            toProto(message: _201.CallbackData): Uint8Array;
            toProtoMsg(message: _201.CallbackData): _201.CallbackDataProtoMsg;
        };
    };
    const icaoracle: {
        MsgClientImpl: typeof _401.MsgClientImpl;
        QueryClientImpl: typeof _390.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            oracle(request: _211.QueryOracleRequest): Promise<_211.QueryOracleResponse>;
            allOracles(request?: _211.QueryAllOraclesRequest): Promise<_211.QueryAllOraclesResponse>;
            activeOracles(request: _211.QueryActiveOraclesRequest): Promise<_211.QueryActiveOraclesResponse>;
            metrics(request: _211.QueryMetricsRequest): Promise<_211.QueryMetricsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                addOracle(value: _212.MsgAddOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                instantiateOracle(value: _212.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreOracleICA(value: _212.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                toggleOracle(value: _212.MsgToggleOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeOracle(value: _212.MsgRemoveOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                addOracle(value: _212.MsgAddOracle): {
                    typeUrl: string;
                    value: _212.MsgAddOracle;
                };
                instantiateOracle(value: _212.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: _212.MsgInstantiateOracle;
                };
                restoreOracleICA(value: _212.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: _212.MsgRestoreOracleICA;
                };
                toggleOracle(value: _212.MsgToggleOracle): {
                    typeUrl: string;
                    value: _212.MsgToggleOracle;
                };
                removeOracle(value: _212.MsgRemoveOracle): {
                    typeUrl: string;
                    value: _212.MsgRemoveOracle;
                };
            };
            fromPartial: {
                addOracle(value: _212.MsgAddOracle): {
                    typeUrl: string;
                    value: _212.MsgAddOracle;
                };
                instantiateOracle(value: _212.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: _212.MsgInstantiateOracle;
                };
                restoreOracleICA(value: _212.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: _212.MsgRestoreOracleICA;
                };
                toggleOracle(value: _212.MsgToggleOracle): {
                    typeUrl: string;
                    value: _212.MsgToggleOracle;
                };
                removeOracle(value: _212.MsgRemoveOracle): {
                    typeUrl: string;
                    value: _212.MsgRemoveOracle;
                };
            };
        };
        AminoConverter: {
            "/stride.icaoracle.MsgAddOracle": {
                aminoType: string;
                toAmino: (message: _212.MsgAddOracle) => _212.MsgAddOracleAmino;
                fromAmino: (object: _212.MsgAddOracleAmino) => _212.MsgAddOracle;
            };
            "/stride.icaoracle.MsgInstantiateOracle": {
                aminoType: string;
                toAmino: (message: _212.MsgInstantiateOracle) => _212.MsgInstantiateOracleAmino;
                fromAmino: (object: _212.MsgInstantiateOracleAmino) => _212.MsgInstantiateOracle;
            };
            "/stride.icaoracle.MsgRestoreOracleICA": {
                aminoType: string;
                toAmino: (message: _212.MsgRestoreOracleICA) => _212.MsgRestoreOracleICAAmino;
                fromAmino: (object: _212.MsgRestoreOracleICAAmino) => _212.MsgRestoreOracleICA;
            };
            "/stride.icaoracle.MsgToggleOracle": {
                aminoType: string;
                toAmino: (message: _212.MsgToggleOracle) => _212.MsgToggleOracleAmino;
                fromAmino: (object: _212.MsgToggleOracleAmino) => _212.MsgToggleOracle;
            };
            "/stride.icaoracle.MsgRemoveOracle": {
                aminoType: string;
                toAmino: (message: _212.MsgRemoveOracle) => _212.MsgRemoveOracleAmino;
                fromAmino: (object: _212.MsgRemoveOracleAmino) => _212.MsgRemoveOracle;
            };
        };
        MsgAddOracle: {
            typeUrl: string;
            encode(message: _212.MsgAddOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.MsgAddOracle;
            fromPartial(object: Partial<_212.MsgAddOracle>): _212.MsgAddOracle;
            fromAmino(object: _212.MsgAddOracleAmino): _212.MsgAddOracle;
            toAmino(message: _212.MsgAddOracle): _212.MsgAddOracleAmino;
            fromAminoMsg(object: _212.MsgAddOracleAminoMsg): _212.MsgAddOracle;
            toAminoMsg(message: _212.MsgAddOracle): _212.MsgAddOracleAminoMsg;
            fromProtoMsg(message: _212.MsgAddOracleProtoMsg): _212.MsgAddOracle;
            toProto(message: _212.MsgAddOracle): Uint8Array;
            toProtoMsg(message: _212.MsgAddOracle): _212.MsgAddOracleProtoMsg;
        };
        MsgAddOracleResponse: {
            typeUrl: string;
            encode(_: _212.MsgAddOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.MsgAddOracleResponse;
            fromPartial(_: Partial<_212.MsgAddOracleResponse>): _212.MsgAddOracleResponse;
            fromAmino(_: _212.MsgAddOracleResponseAmino): _212.MsgAddOracleResponse;
            toAmino(_: _212.MsgAddOracleResponse): _212.MsgAddOracleResponseAmino;
            fromAminoMsg(object: _212.MsgAddOracleResponseAminoMsg): _212.MsgAddOracleResponse;
            fromProtoMsg(message: _212.MsgAddOracleResponseProtoMsg): _212.MsgAddOracleResponse;
            toProto(message: _212.MsgAddOracleResponse): Uint8Array;
            toProtoMsg(message: _212.MsgAddOracleResponse): _212.MsgAddOracleResponseProtoMsg;
        };
        MsgInstantiateOracle: {
            typeUrl: string;
            encode(message: _212.MsgInstantiateOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.MsgInstantiateOracle;
            fromPartial(object: Partial<_212.MsgInstantiateOracle>): _212.MsgInstantiateOracle;
            fromAmino(object: _212.MsgInstantiateOracleAmino): _212.MsgInstantiateOracle;
            toAmino(message: _212.MsgInstantiateOracle): _212.MsgInstantiateOracleAmino;
            fromAminoMsg(object: _212.MsgInstantiateOracleAminoMsg): _212.MsgInstantiateOracle;
            toAminoMsg(message: _212.MsgInstantiateOracle): _212.MsgInstantiateOracleAminoMsg;
            fromProtoMsg(message: _212.MsgInstantiateOracleProtoMsg): _212.MsgInstantiateOracle;
            toProto(message: _212.MsgInstantiateOracle): Uint8Array;
            toProtoMsg(message: _212.MsgInstantiateOracle): _212.MsgInstantiateOracleProtoMsg;
        };
        MsgInstantiateOracleResponse: {
            typeUrl: string;
            encode(_: _212.MsgInstantiateOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.MsgInstantiateOracleResponse;
            fromPartial(_: Partial<_212.MsgInstantiateOracleResponse>): _212.MsgInstantiateOracleResponse;
            fromAmino(_: _212.MsgInstantiateOracleResponseAmino): _212.MsgInstantiateOracleResponse;
            toAmino(_: _212.MsgInstantiateOracleResponse): _212.MsgInstantiateOracleResponseAmino;
            fromAminoMsg(object: _212.MsgInstantiateOracleResponseAminoMsg): _212.MsgInstantiateOracleResponse;
            fromProtoMsg(message: _212.MsgInstantiateOracleResponseProtoMsg): _212.MsgInstantiateOracleResponse;
            toProto(message: _212.MsgInstantiateOracleResponse): Uint8Array;
            toProtoMsg(message: _212.MsgInstantiateOracleResponse): _212.MsgInstantiateOracleResponseProtoMsg;
        };
        MsgRestoreOracleICA: {
            typeUrl: string;
            encode(message: _212.MsgRestoreOracleICA, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.MsgRestoreOracleICA;
            fromPartial(object: Partial<_212.MsgRestoreOracleICA>): _212.MsgRestoreOracleICA;
            fromAmino(object: _212.MsgRestoreOracleICAAmino): _212.MsgRestoreOracleICA;
            toAmino(message: _212.MsgRestoreOracleICA): _212.MsgRestoreOracleICAAmino;
            fromAminoMsg(object: _212.MsgRestoreOracleICAAminoMsg): _212.MsgRestoreOracleICA;
            toAminoMsg(message: _212.MsgRestoreOracleICA): _212.MsgRestoreOracleICAAminoMsg;
            fromProtoMsg(message: _212.MsgRestoreOracleICAProtoMsg): _212.MsgRestoreOracleICA;
            toProto(message: _212.MsgRestoreOracleICA): Uint8Array;
            toProtoMsg(message: _212.MsgRestoreOracleICA): _212.MsgRestoreOracleICAProtoMsg;
        };
        MsgRestoreOracleICAResponse: {
            typeUrl: string;
            encode(_: _212.MsgRestoreOracleICAResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.MsgRestoreOracleICAResponse;
            fromPartial(_: Partial<_212.MsgRestoreOracleICAResponse>): _212.MsgRestoreOracleICAResponse;
            fromAmino(_: _212.MsgRestoreOracleICAResponseAmino): _212.MsgRestoreOracleICAResponse;
            toAmino(_: _212.MsgRestoreOracleICAResponse): _212.MsgRestoreOracleICAResponseAmino;
            fromAminoMsg(object: _212.MsgRestoreOracleICAResponseAminoMsg): _212.MsgRestoreOracleICAResponse;
            fromProtoMsg(message: _212.MsgRestoreOracleICAResponseProtoMsg): _212.MsgRestoreOracleICAResponse;
            toProto(message: _212.MsgRestoreOracleICAResponse): Uint8Array;
            toProtoMsg(message: _212.MsgRestoreOracleICAResponse): _212.MsgRestoreOracleICAResponseProtoMsg;
        };
        MsgToggleOracle: {
            typeUrl: string;
            encode(message: _212.MsgToggleOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.MsgToggleOracle;
            fromPartial(object: Partial<_212.MsgToggleOracle>): _212.MsgToggleOracle;
            fromAmino(object: _212.MsgToggleOracleAmino): _212.MsgToggleOracle;
            toAmino(message: _212.MsgToggleOracle): _212.MsgToggleOracleAmino;
            fromAminoMsg(object: _212.MsgToggleOracleAminoMsg): _212.MsgToggleOracle;
            toAminoMsg(message: _212.MsgToggleOracle): _212.MsgToggleOracleAminoMsg;
            fromProtoMsg(message: _212.MsgToggleOracleProtoMsg): _212.MsgToggleOracle;
            toProto(message: _212.MsgToggleOracle): Uint8Array;
            toProtoMsg(message: _212.MsgToggleOracle): _212.MsgToggleOracleProtoMsg;
        };
        MsgToggleOracleResponse: {
            typeUrl: string;
            encode(_: _212.MsgToggleOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.MsgToggleOracleResponse;
            fromPartial(_: Partial<_212.MsgToggleOracleResponse>): _212.MsgToggleOracleResponse;
            fromAmino(_: _212.MsgToggleOracleResponseAmino): _212.MsgToggleOracleResponse;
            toAmino(_: _212.MsgToggleOracleResponse): _212.MsgToggleOracleResponseAmino;
            fromAminoMsg(object: _212.MsgToggleOracleResponseAminoMsg): _212.MsgToggleOracleResponse;
            fromProtoMsg(message: _212.MsgToggleOracleResponseProtoMsg): _212.MsgToggleOracleResponse;
            toProto(message: _212.MsgToggleOracleResponse): Uint8Array;
            toProtoMsg(message: _212.MsgToggleOracleResponse): _212.MsgToggleOracleResponseProtoMsg;
        };
        MsgRemoveOracle: {
            typeUrl: string;
            encode(message: _212.MsgRemoveOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.MsgRemoveOracle;
            fromPartial(object: Partial<_212.MsgRemoveOracle>): _212.MsgRemoveOracle;
            fromAmino(object: _212.MsgRemoveOracleAmino): _212.MsgRemoveOracle;
            toAmino(message: _212.MsgRemoveOracle): _212.MsgRemoveOracleAmino;
            fromAminoMsg(object: _212.MsgRemoveOracleAminoMsg): _212.MsgRemoveOracle;
            toAminoMsg(message: _212.MsgRemoveOracle): _212.MsgRemoveOracleAminoMsg;
            fromProtoMsg(message: _212.MsgRemoveOracleProtoMsg): _212.MsgRemoveOracle;
            toProto(message: _212.MsgRemoveOracle): Uint8Array;
            toProtoMsg(message: _212.MsgRemoveOracle): _212.MsgRemoveOracleProtoMsg;
        };
        MsgRemoveOracleResponse: {
            typeUrl: string;
            encode(_: _212.MsgRemoveOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.MsgRemoveOracleResponse;
            fromPartial(_: Partial<_212.MsgRemoveOracleResponse>): _212.MsgRemoveOracleResponse;
            fromAmino(_: _212.MsgRemoveOracleResponseAmino): _212.MsgRemoveOracleResponse;
            toAmino(_: _212.MsgRemoveOracleResponse): _212.MsgRemoveOracleResponseAmino;
            fromAminoMsg(object: _212.MsgRemoveOracleResponseAminoMsg): _212.MsgRemoveOracleResponse;
            fromProtoMsg(message: _212.MsgRemoveOracleResponseProtoMsg): _212.MsgRemoveOracleResponse;
            toProto(message: _212.MsgRemoveOracleResponse): Uint8Array;
            toProtoMsg(message: _212.MsgRemoveOracleResponse): _212.MsgRemoveOracleResponseProtoMsg;
        };
        QueryOracleRequest: {
            typeUrl: string;
            encode(message: _211.QueryOracleRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryOracleRequest;
            fromPartial(object: Partial<_211.QueryOracleRequest>): _211.QueryOracleRequest;
            fromAmino(object: _211.QueryOracleRequestAmino): _211.QueryOracleRequest;
            toAmino(message: _211.QueryOracleRequest): _211.QueryOracleRequestAmino;
            fromAminoMsg(object: _211.QueryOracleRequestAminoMsg): _211.QueryOracleRequest;
            fromProtoMsg(message: _211.QueryOracleRequestProtoMsg): _211.QueryOracleRequest;
            toProto(message: _211.QueryOracleRequest): Uint8Array;
            toProtoMsg(message: _211.QueryOracleRequest): _211.QueryOracleRequestProtoMsg;
        };
        QueryOracleResponse: {
            typeUrl: string;
            encode(message: _211.QueryOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryOracleResponse;
            fromPartial(object: Partial<_211.QueryOracleResponse>): _211.QueryOracleResponse;
            fromAmino(object: _211.QueryOracleResponseAmino): _211.QueryOracleResponse;
            toAmino(message: _211.QueryOracleResponse): _211.QueryOracleResponseAmino;
            fromAminoMsg(object: _211.QueryOracleResponseAminoMsg): _211.QueryOracleResponse;
            fromProtoMsg(message: _211.QueryOracleResponseProtoMsg): _211.QueryOracleResponse;
            toProto(message: _211.QueryOracleResponse): Uint8Array;
            toProtoMsg(message: _211.QueryOracleResponse): _211.QueryOracleResponseProtoMsg;
        };
        QueryAllOraclesRequest: {
            typeUrl: string;
            encode(_: _211.QueryAllOraclesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryAllOraclesRequest;
            fromPartial(_: Partial<_211.QueryAllOraclesRequest>): _211.QueryAllOraclesRequest;
            fromAmino(_: _211.QueryAllOraclesRequestAmino): _211.QueryAllOraclesRequest;
            toAmino(_: _211.QueryAllOraclesRequest): _211.QueryAllOraclesRequestAmino;
            fromAminoMsg(object: _211.QueryAllOraclesRequestAminoMsg): _211.QueryAllOraclesRequest;
            fromProtoMsg(message: _211.QueryAllOraclesRequestProtoMsg): _211.QueryAllOraclesRequest;
            toProto(message: _211.QueryAllOraclesRequest): Uint8Array;
            toProtoMsg(message: _211.QueryAllOraclesRequest): _211.QueryAllOraclesRequestProtoMsg;
        };
        QueryAllOraclesResponse: {
            typeUrl: string;
            encode(message: _211.QueryAllOraclesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryAllOraclesResponse;
            fromPartial(object: Partial<_211.QueryAllOraclesResponse>): _211.QueryAllOraclesResponse;
            fromAmino(object: _211.QueryAllOraclesResponseAmino): _211.QueryAllOraclesResponse;
            toAmino(message: _211.QueryAllOraclesResponse): _211.QueryAllOraclesResponseAmino;
            fromAminoMsg(object: _211.QueryAllOraclesResponseAminoMsg): _211.QueryAllOraclesResponse;
            fromProtoMsg(message: _211.QueryAllOraclesResponseProtoMsg): _211.QueryAllOraclesResponse;
            toProto(message: _211.QueryAllOraclesResponse): Uint8Array;
            toProtoMsg(message: _211.QueryAllOraclesResponse): _211.QueryAllOraclesResponseProtoMsg;
        };
        QueryActiveOraclesRequest: {
            typeUrl: string;
            encode(message: _211.QueryActiveOraclesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryActiveOraclesRequest;
            fromPartial(object: Partial<_211.QueryActiveOraclesRequest>): _211.QueryActiveOraclesRequest;
            fromAmino(object: _211.QueryActiveOraclesRequestAmino): _211.QueryActiveOraclesRequest;
            toAmino(message: _211.QueryActiveOraclesRequest): _211.QueryActiveOraclesRequestAmino;
            fromAminoMsg(object: _211.QueryActiveOraclesRequestAminoMsg): _211.QueryActiveOraclesRequest;
            fromProtoMsg(message: _211.QueryActiveOraclesRequestProtoMsg): _211.QueryActiveOraclesRequest;
            toProto(message: _211.QueryActiveOraclesRequest): Uint8Array;
            toProtoMsg(message: _211.QueryActiveOraclesRequest): _211.QueryActiveOraclesRequestProtoMsg;
        };
        QueryActiveOraclesResponse: {
            typeUrl: string;
            encode(message: _211.QueryActiveOraclesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryActiveOraclesResponse;
            fromPartial(object: Partial<_211.QueryActiveOraclesResponse>): _211.QueryActiveOraclesResponse;
            fromAmino(object: _211.QueryActiveOraclesResponseAmino): _211.QueryActiveOraclesResponse;
            toAmino(message: _211.QueryActiveOraclesResponse): _211.QueryActiveOraclesResponseAmino;
            fromAminoMsg(object: _211.QueryActiveOraclesResponseAminoMsg): _211.QueryActiveOraclesResponse;
            fromProtoMsg(message: _211.QueryActiveOraclesResponseProtoMsg): _211.QueryActiveOraclesResponse;
            toProto(message: _211.QueryActiveOraclesResponse): Uint8Array;
            toProtoMsg(message: _211.QueryActiveOraclesResponse): _211.QueryActiveOraclesResponseProtoMsg;
        };
        QueryMetricsRequest: {
            typeUrl: string;
            encode(message: _211.QueryMetricsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryMetricsRequest;
            fromPartial(object: Partial<_211.QueryMetricsRequest>): _211.QueryMetricsRequest;
            fromAmino(object: _211.QueryMetricsRequestAmino): _211.QueryMetricsRequest;
            toAmino(message: _211.QueryMetricsRequest): _211.QueryMetricsRequestAmino;
            fromAminoMsg(object: _211.QueryMetricsRequestAminoMsg): _211.QueryMetricsRequest;
            fromProtoMsg(message: _211.QueryMetricsRequestProtoMsg): _211.QueryMetricsRequest;
            toProto(message: _211.QueryMetricsRequest): Uint8Array;
            toProtoMsg(message: _211.QueryMetricsRequest): _211.QueryMetricsRequestProtoMsg;
        };
        QueryMetricsResponse: {
            typeUrl: string;
            encode(message: _211.QueryMetricsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryMetricsResponse;
            fromPartial(object: Partial<_211.QueryMetricsResponse>): _211.QueryMetricsResponse;
            fromAmino(object: _211.QueryMetricsResponseAmino): _211.QueryMetricsResponse;
            toAmino(message: _211.QueryMetricsResponse): _211.QueryMetricsResponseAmino;
            fromAminoMsg(object: _211.QueryMetricsResponseAminoMsg): _211.QueryMetricsResponse;
            fromProtoMsg(message: _211.QueryMetricsResponseProtoMsg): _211.QueryMetricsResponse;
            toProto(message: _211.QueryMetricsResponse): Uint8Array;
            toProtoMsg(message: _211.QueryMetricsResponse): _211.QueryMetricsResponseProtoMsg;
        };
        metricStatusFromJSON(object: any): _210.MetricStatus;
        metricStatusToJSON(object: _210.MetricStatus): string;
        MetricStatus: typeof _210.MetricStatus;
        MetricStatusSDKType: typeof _210.MetricStatus;
        MetricStatusAmino: typeof _210.MetricStatus;
        Oracle: {
            typeUrl: string;
            encode(message: _210.Oracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.Oracle;
            fromPartial(object: Partial<_210.Oracle>): _210.Oracle;
            fromAmino(object: _210.OracleAmino): _210.Oracle;
            toAmino(message: _210.Oracle): _210.OracleAmino;
            fromAminoMsg(object: _210.OracleAminoMsg): _210.Oracle;
            fromProtoMsg(message: _210.OracleProtoMsg): _210.Oracle;
            toProto(message: _210.Oracle): Uint8Array;
            toProtoMsg(message: _210.Oracle): _210.OracleProtoMsg;
        };
        Metric: {
            typeUrl: string;
            encode(message: _210.Metric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.Metric;
            fromPartial(object: Partial<_210.Metric>): _210.Metric;
            fromAmino(object: _210.MetricAmino): _210.Metric;
            toAmino(message: _210.Metric): _210.MetricAmino;
            fromAminoMsg(object: _210.MetricAminoMsg): _210.Metric;
            fromProtoMsg(message: _210.MetricProtoMsg): _210.Metric;
            toProto(message: _210.Metric): Uint8Array;
            toProtoMsg(message: _210.Metric): _210.MetricProtoMsg;
        };
        RedemptionRateAttributes: {
            typeUrl: string;
            encode(message: _210.RedemptionRateAttributes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.RedemptionRateAttributes;
            fromPartial(object: Partial<_210.RedemptionRateAttributes>): _210.RedemptionRateAttributes;
            fromAmino(object: _210.RedemptionRateAttributesAmino): _210.RedemptionRateAttributes;
            toAmino(message: _210.RedemptionRateAttributes): _210.RedemptionRateAttributesAmino;
            fromAminoMsg(object: _210.RedemptionRateAttributesAminoMsg): _210.RedemptionRateAttributes;
            fromProtoMsg(message: _210.RedemptionRateAttributesProtoMsg): _210.RedemptionRateAttributes;
            toProto(message: _210.RedemptionRateAttributes): Uint8Array;
            toProtoMsg(message: _210.RedemptionRateAttributes): _210.RedemptionRateAttributesProtoMsg;
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
        MsgInstantiateOracleContract: {
            typeUrl: string;
            encode(message: _208.MsgInstantiateOracleContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.MsgInstantiateOracleContract;
            fromPartial(object: Partial<_208.MsgInstantiateOracleContract>): _208.MsgInstantiateOracleContract;
            fromAmino(object: _208.MsgInstantiateOracleContractAmino): _208.MsgInstantiateOracleContract;
            toAmino(message: _208.MsgInstantiateOracleContract): _208.MsgInstantiateOracleContractAmino;
            fromAminoMsg(object: _208.MsgInstantiateOracleContractAminoMsg): _208.MsgInstantiateOracleContract;
            fromProtoMsg(message: _208.MsgInstantiateOracleContractProtoMsg): _208.MsgInstantiateOracleContract;
            toProto(message: _208.MsgInstantiateOracleContract): Uint8Array;
            toProtoMsg(message: _208.MsgInstantiateOracleContract): _208.MsgInstantiateOracleContractProtoMsg;
        };
        MsgExecuteContractPostMetric: {
            typeUrl: string;
            encode(message: _208.MsgExecuteContractPostMetric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.MsgExecuteContractPostMetric;
            fromPartial(object: Partial<_208.MsgExecuteContractPostMetric>): _208.MsgExecuteContractPostMetric;
            fromAmino(object: _208.MsgExecuteContractPostMetricAmino): _208.MsgExecuteContractPostMetric;
            toAmino(message: _208.MsgExecuteContractPostMetric): _208.MsgExecuteContractPostMetricAmino;
            fromAminoMsg(object: _208.MsgExecuteContractPostMetricAminoMsg): _208.MsgExecuteContractPostMetric;
            fromProtoMsg(message: _208.MsgExecuteContractPostMetricProtoMsg): _208.MsgExecuteContractPostMetric;
            toProto(message: _208.MsgExecuteContractPostMetric): Uint8Array;
            toProtoMsg(message: _208.MsgExecuteContractPostMetric): _208.MsgExecuteContractPostMetricProtoMsg;
        };
        MsgPostMetric: {
            typeUrl: string;
            encode(message: _208.MsgPostMetric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.MsgPostMetric;
            fromPartial(object: Partial<_208.MsgPostMetric>): _208.MsgPostMetric;
            fromAmino(object: _208.MsgPostMetricAmino): _208.MsgPostMetric;
            toAmino(message: _208.MsgPostMetric): _208.MsgPostMetricAmino;
            fromAminoMsg(object: _208.MsgPostMetricAminoMsg): _208.MsgPostMetric;
            fromProtoMsg(message: _208.MsgPostMetricProtoMsg): _208.MsgPostMetric;
            toProto(message: _208.MsgPostMetric): Uint8Array;
            toProtoMsg(message: _208.MsgPostMetric): _208.MsgPostMetricProtoMsg;
        };
        InstantiateOracleCallback: {
            typeUrl: string;
            encode(message: _207.InstantiateOracleCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.InstantiateOracleCallback;
            fromPartial(object: Partial<_207.InstantiateOracleCallback>): _207.InstantiateOracleCallback;
            fromAmino(object: _207.InstantiateOracleCallbackAmino): _207.InstantiateOracleCallback;
            toAmino(message: _207.InstantiateOracleCallback): _207.InstantiateOracleCallbackAmino;
            fromAminoMsg(object: _207.InstantiateOracleCallbackAminoMsg): _207.InstantiateOracleCallback;
            fromProtoMsg(message: _207.InstantiateOracleCallbackProtoMsg): _207.InstantiateOracleCallback;
            toProto(message: _207.InstantiateOracleCallback): Uint8Array;
            toProtoMsg(message: _207.InstantiateOracleCallback): _207.InstantiateOracleCallbackProtoMsg;
        };
        UpdateOracleCallback: {
            typeUrl: string;
            encode(message: _207.UpdateOracleCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.UpdateOracleCallback;
            fromPartial(object: Partial<_207.UpdateOracleCallback>): _207.UpdateOracleCallback;
            fromAmino(object: _207.UpdateOracleCallbackAmino): _207.UpdateOracleCallback;
            toAmino(message: _207.UpdateOracleCallback): _207.UpdateOracleCallbackAmino;
            fromAminoMsg(object: _207.UpdateOracleCallbackAminoMsg): _207.UpdateOracleCallback;
            fromProtoMsg(message: _207.UpdateOracleCallbackProtoMsg): _207.UpdateOracleCallback;
            toProto(message: _207.UpdateOracleCallback): Uint8Array;
            toProtoMsg(message: _207.UpdateOracleCallback): _207.UpdateOracleCallbackProtoMsg;
        };
    };
    const icqoracle: {
        MsgClientImpl: typeof _402.MsgClientImpl;
        QueryClientImpl: typeof _391.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            tokenPrice(request: _215.QueryTokenPriceRequest): Promise<_215.TokenPriceResponse>;
            tokenPrices(request?: _215.QueryTokenPricesRequest): Promise<_215.QueryTokenPricesResponse>;
            params(request?: _215.QueryParamsRequest): Promise<_215.QueryParamsResponse>;
            tokenPriceForQuoteDenom(request: _215.QueryTokenPriceForQuoteDenomRequest): Promise<_215.QueryTokenPriceForQuoteDenomResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                registerTokenPriceQuery(value: _216.MsgRegisterTokenPriceQuery): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeTokenPriceQuery(value: _216.MsgRemoveTokenPriceQuery): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateParams(value: _216.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                registerTokenPriceQuery(value: _216.MsgRegisterTokenPriceQuery): {
                    typeUrl: string;
                    value: _216.MsgRegisterTokenPriceQuery;
                };
                removeTokenPriceQuery(value: _216.MsgRemoveTokenPriceQuery): {
                    typeUrl: string;
                    value: _216.MsgRemoveTokenPriceQuery;
                };
                updateParams(value: _216.MsgUpdateParams): {
                    typeUrl: string;
                    value: _216.MsgUpdateParams;
                };
            };
            fromPartial: {
                registerTokenPriceQuery(value: _216.MsgRegisterTokenPriceQuery): {
                    typeUrl: string;
                    value: _216.MsgRegisterTokenPriceQuery;
                };
                removeTokenPriceQuery(value: _216.MsgRemoveTokenPriceQuery): {
                    typeUrl: string;
                    value: _216.MsgRemoveTokenPriceQuery;
                };
                updateParams(value: _216.MsgUpdateParams): {
                    typeUrl: string;
                    value: _216.MsgUpdateParams;
                };
            };
        };
        AminoConverter: {
            "/stride.icqoracle.MsgRegisterTokenPriceQuery": {
                aminoType: string;
                toAmino: (message: _216.MsgRegisterTokenPriceQuery) => _216.MsgRegisterTokenPriceQueryAmino;
                fromAmino: (object: _216.MsgRegisterTokenPriceQueryAmino) => _216.MsgRegisterTokenPriceQuery;
            };
            "/stride.icqoracle.MsgRemoveTokenPriceQuery": {
                aminoType: string;
                toAmino: (message: _216.MsgRemoveTokenPriceQuery) => _216.MsgRemoveTokenPriceQueryAmino;
                fromAmino: (object: _216.MsgRemoveTokenPriceQueryAmino) => _216.MsgRemoveTokenPriceQuery;
            };
            "/stride.icqoracle.MsgUpdateParams": {
                aminoType: string;
                toAmino: (message: _216.MsgUpdateParams) => _216.MsgUpdateParamsAmino;
                fromAmino: (object: _216.MsgUpdateParamsAmino) => _216.MsgUpdateParams;
            };
        };
        MsgRegisterTokenPriceQuery: {
            typeUrl: string;
            encode(message: _216.MsgRegisterTokenPriceQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgRegisterTokenPriceQuery;
            fromPartial(object: Partial<_216.MsgRegisterTokenPriceQuery>): _216.MsgRegisterTokenPriceQuery;
            fromAmino(object: _216.MsgRegisterTokenPriceQueryAmino): _216.MsgRegisterTokenPriceQuery;
            toAmino(message: _216.MsgRegisterTokenPriceQuery): _216.MsgRegisterTokenPriceQueryAmino;
            fromAminoMsg(object: _216.MsgRegisterTokenPriceQueryAminoMsg): _216.MsgRegisterTokenPriceQuery;
            toAminoMsg(message: _216.MsgRegisterTokenPriceQuery): _216.MsgRegisterTokenPriceQueryAminoMsg;
            fromProtoMsg(message: _216.MsgRegisterTokenPriceQueryProtoMsg): _216.MsgRegisterTokenPriceQuery;
            toProto(message: _216.MsgRegisterTokenPriceQuery): Uint8Array;
            toProtoMsg(message: _216.MsgRegisterTokenPriceQuery): _216.MsgRegisterTokenPriceQueryProtoMsg;
        };
        MsgRegisterTokenPriceQueryResponse: {
            typeUrl: string;
            encode(_: _216.MsgRegisterTokenPriceQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgRegisterTokenPriceQueryResponse;
            fromPartial(_: Partial<_216.MsgRegisterTokenPriceQueryResponse>): _216.MsgRegisterTokenPriceQueryResponse;
            fromAmino(_: _216.MsgRegisterTokenPriceQueryResponseAmino): _216.MsgRegisterTokenPriceQueryResponse;
            toAmino(_: _216.MsgRegisterTokenPriceQueryResponse): _216.MsgRegisterTokenPriceQueryResponseAmino;
            fromAminoMsg(object: _216.MsgRegisterTokenPriceQueryResponseAminoMsg): _216.MsgRegisterTokenPriceQueryResponse;
            fromProtoMsg(message: _216.MsgRegisterTokenPriceQueryResponseProtoMsg): _216.MsgRegisterTokenPriceQueryResponse;
            toProto(message: _216.MsgRegisterTokenPriceQueryResponse): Uint8Array;
            toProtoMsg(message: _216.MsgRegisterTokenPriceQueryResponse): _216.MsgRegisterTokenPriceQueryResponseProtoMsg;
        };
        MsgRemoveTokenPriceQuery: {
            typeUrl: string;
            encode(message: _216.MsgRemoveTokenPriceQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgRemoveTokenPriceQuery;
            fromPartial(object: Partial<_216.MsgRemoveTokenPriceQuery>): _216.MsgRemoveTokenPriceQuery;
            fromAmino(object: _216.MsgRemoveTokenPriceQueryAmino): _216.MsgRemoveTokenPriceQuery;
            toAmino(message: _216.MsgRemoveTokenPriceQuery): _216.MsgRemoveTokenPriceQueryAmino;
            fromAminoMsg(object: _216.MsgRemoveTokenPriceQueryAminoMsg): _216.MsgRemoveTokenPriceQuery;
            toAminoMsg(message: _216.MsgRemoveTokenPriceQuery): _216.MsgRemoveTokenPriceQueryAminoMsg;
            fromProtoMsg(message: _216.MsgRemoveTokenPriceQueryProtoMsg): _216.MsgRemoveTokenPriceQuery;
            toProto(message: _216.MsgRemoveTokenPriceQuery): Uint8Array;
            toProtoMsg(message: _216.MsgRemoveTokenPriceQuery): _216.MsgRemoveTokenPriceQueryProtoMsg;
        };
        MsgRemoveTokenPriceQueryResponse: {
            typeUrl: string;
            encode(_: _216.MsgRemoveTokenPriceQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgRemoveTokenPriceQueryResponse;
            fromPartial(_: Partial<_216.MsgRemoveTokenPriceQueryResponse>): _216.MsgRemoveTokenPriceQueryResponse;
            fromAmino(_: _216.MsgRemoveTokenPriceQueryResponseAmino): _216.MsgRemoveTokenPriceQueryResponse;
            toAmino(_: _216.MsgRemoveTokenPriceQueryResponse): _216.MsgRemoveTokenPriceQueryResponseAmino;
            fromAminoMsg(object: _216.MsgRemoveTokenPriceQueryResponseAminoMsg): _216.MsgRemoveTokenPriceQueryResponse;
            fromProtoMsg(message: _216.MsgRemoveTokenPriceQueryResponseProtoMsg): _216.MsgRemoveTokenPriceQueryResponse;
            toProto(message: _216.MsgRemoveTokenPriceQueryResponse): Uint8Array;
            toProtoMsg(message: _216.MsgRemoveTokenPriceQueryResponse): _216.MsgRemoveTokenPriceQueryResponseProtoMsg;
        };
        MsgUpdateParams: {
            typeUrl: string;
            encode(message: _216.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgUpdateParams;
            fromPartial(object: Partial<_216.MsgUpdateParams>): _216.MsgUpdateParams;
            fromAmino(object: _216.MsgUpdateParamsAmino): _216.MsgUpdateParams;
            toAmino(message: _216.MsgUpdateParams): _216.MsgUpdateParamsAmino;
            fromAminoMsg(object: _216.MsgUpdateParamsAminoMsg): _216.MsgUpdateParams;
            toAminoMsg(message: _216.MsgUpdateParams): _216.MsgUpdateParamsAminoMsg;
            fromProtoMsg(message: _216.MsgUpdateParamsProtoMsg): _216.MsgUpdateParams;
            toProto(message: _216.MsgUpdateParams): Uint8Array;
            toProtoMsg(message: _216.MsgUpdateParams): _216.MsgUpdateParamsProtoMsg;
        };
        MsgUpdateParamsResponse: {
            typeUrl: string;
            encode(_: _216.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.MsgUpdateParamsResponse;
            fromPartial(_: Partial<_216.MsgUpdateParamsResponse>): _216.MsgUpdateParamsResponse;
            fromAmino(_: _216.MsgUpdateParamsResponseAmino): _216.MsgUpdateParamsResponse;
            toAmino(_: _216.MsgUpdateParamsResponse): _216.MsgUpdateParamsResponseAmino;
            fromAminoMsg(object: _216.MsgUpdateParamsResponseAminoMsg): _216.MsgUpdateParamsResponse;
            fromProtoMsg(message: _216.MsgUpdateParamsResponseProtoMsg): _216.MsgUpdateParamsResponse;
            toProto(message: _216.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _216.MsgUpdateParamsResponse): _216.MsgUpdateParamsResponseProtoMsg;
        };
        QueryTokenPriceRequest: {
            typeUrl: string;
            encode(message: _215.QueryTokenPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.QueryTokenPriceRequest;
            fromPartial(object: Partial<_215.QueryTokenPriceRequest>): _215.QueryTokenPriceRequest;
            fromAmino(object: _215.QueryTokenPriceRequestAmino): _215.QueryTokenPriceRequest;
            toAmino(message: _215.QueryTokenPriceRequest): _215.QueryTokenPriceRequestAmino;
            fromAminoMsg(object: _215.QueryTokenPriceRequestAminoMsg): _215.QueryTokenPriceRequest;
            fromProtoMsg(message: _215.QueryTokenPriceRequestProtoMsg): _215.QueryTokenPriceRequest;
            toProto(message: _215.QueryTokenPriceRequest): Uint8Array;
            toProtoMsg(message: _215.QueryTokenPriceRequest): _215.QueryTokenPriceRequestProtoMsg;
        };
        QueryTokenPricesRequest: {
            typeUrl: string;
            encode(message: _215.QueryTokenPricesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.QueryTokenPricesRequest;
            fromPartial(object: Partial<_215.QueryTokenPricesRequest>): _215.QueryTokenPricesRequest;
            fromAmino(object: _215.QueryTokenPricesRequestAmino): _215.QueryTokenPricesRequest;
            toAmino(message: _215.QueryTokenPricesRequest): _215.QueryTokenPricesRequestAmino;
            fromAminoMsg(object: _215.QueryTokenPricesRequestAminoMsg): _215.QueryTokenPricesRequest;
            fromProtoMsg(message: _215.QueryTokenPricesRequestProtoMsg): _215.QueryTokenPricesRequest;
            toProto(message: _215.QueryTokenPricesRequest): Uint8Array;
            toProtoMsg(message: _215.QueryTokenPricesRequest): _215.QueryTokenPricesRequestProtoMsg;
        };
        TokenPriceResponse: {
            typeUrl: string;
            encode(message: _215.TokenPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.TokenPriceResponse;
            fromPartial(object: Partial<_215.TokenPriceResponse>): _215.TokenPriceResponse;
            fromAmino(object: _215.TokenPriceResponseAmino): _215.TokenPriceResponse;
            toAmino(message: _215.TokenPriceResponse): _215.TokenPriceResponseAmino;
            fromAminoMsg(object: _215.TokenPriceResponseAminoMsg): _215.TokenPriceResponse;
            fromProtoMsg(message: _215.TokenPriceResponseProtoMsg): _215.TokenPriceResponse;
            toProto(message: _215.TokenPriceResponse): Uint8Array;
            toProtoMsg(message: _215.TokenPriceResponse): _215.TokenPriceResponseProtoMsg;
        };
        QueryTokenPricesResponse: {
            typeUrl: string;
            encode(message: _215.QueryTokenPricesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.QueryTokenPricesResponse;
            fromPartial(object: Partial<_215.QueryTokenPricesResponse>): _215.QueryTokenPricesResponse;
            fromAmino(object: _215.QueryTokenPricesResponseAmino): _215.QueryTokenPricesResponse;
            toAmino(message: _215.QueryTokenPricesResponse): _215.QueryTokenPricesResponseAmino;
            fromAminoMsg(object: _215.QueryTokenPricesResponseAminoMsg): _215.QueryTokenPricesResponse;
            fromProtoMsg(message: _215.QueryTokenPricesResponseProtoMsg): _215.QueryTokenPricesResponse;
            toProto(message: _215.QueryTokenPricesResponse): Uint8Array;
            toProtoMsg(message: _215.QueryTokenPricesResponse): _215.QueryTokenPricesResponseProtoMsg;
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
        QueryTokenPriceForQuoteDenomRequest: {
            typeUrl: string;
            encode(message: _215.QueryTokenPriceForQuoteDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.QueryTokenPriceForQuoteDenomRequest;
            fromPartial(object: Partial<_215.QueryTokenPriceForQuoteDenomRequest>): _215.QueryTokenPriceForQuoteDenomRequest;
            fromAmino(object: _215.QueryTokenPriceForQuoteDenomRequestAmino): _215.QueryTokenPriceForQuoteDenomRequest;
            toAmino(message: _215.QueryTokenPriceForQuoteDenomRequest): _215.QueryTokenPriceForQuoteDenomRequestAmino;
            fromAminoMsg(object: _215.QueryTokenPriceForQuoteDenomRequestAminoMsg): _215.QueryTokenPriceForQuoteDenomRequest;
            fromProtoMsg(message: _215.QueryTokenPriceForQuoteDenomRequestProtoMsg): _215.QueryTokenPriceForQuoteDenomRequest;
            toProto(message: _215.QueryTokenPriceForQuoteDenomRequest): Uint8Array;
            toProtoMsg(message: _215.QueryTokenPriceForQuoteDenomRequest): _215.QueryTokenPriceForQuoteDenomRequestProtoMsg;
        };
        QueryTokenPriceForQuoteDenomResponse: {
            typeUrl: string;
            encode(message: _215.QueryTokenPriceForQuoteDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.QueryTokenPriceForQuoteDenomResponse;
            fromPartial(object: Partial<_215.QueryTokenPriceForQuoteDenomResponse>): _215.QueryTokenPriceForQuoteDenomResponse;
            fromAmino(object: _215.QueryTokenPriceForQuoteDenomResponseAmino): _215.QueryTokenPriceForQuoteDenomResponse;
            toAmino(message: _215.QueryTokenPriceForQuoteDenomResponse): _215.QueryTokenPriceForQuoteDenomResponseAmino;
            fromAminoMsg(object: _215.QueryTokenPriceForQuoteDenomResponseAminoMsg): _215.QueryTokenPriceForQuoteDenomResponse;
            fromProtoMsg(message: _215.QueryTokenPriceForQuoteDenomResponseProtoMsg): _215.QueryTokenPriceForQuoteDenomResponse;
            toProto(message: _215.QueryTokenPriceForQuoteDenomResponse): Uint8Array;
            toProtoMsg(message: _215.QueryTokenPriceForQuoteDenomResponse): _215.QueryTokenPriceForQuoteDenomResponseProtoMsg;
        };
        TokenPrice: {
            typeUrl: string;
            encode(message: _214.TokenPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.TokenPrice;
            fromPartial(object: Partial<_214.TokenPrice>): _214.TokenPrice;
            fromAmino(object: _214.TokenPriceAmino): _214.TokenPrice;
            toAmino(message: _214.TokenPrice): _214.TokenPriceAmino;
            fromAminoMsg(object: _214.TokenPriceAminoMsg): _214.TokenPrice;
            fromProtoMsg(message: _214.TokenPriceProtoMsg): _214.TokenPrice;
            toProto(message: _214.TokenPrice): Uint8Array;
            toProtoMsg(message: _214.TokenPrice): _214.TokenPriceProtoMsg;
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
    namespace interchainquery {
        const v1: {
            MsgClientImpl: typeof _403.MsgClientImpl;
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitQueryResponse(value: _218.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitQueryResponse(value: _218.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _218.MsgSubmitQueryResponse;
                    };
                };
                fromPartial: {
                    submitQueryResponse(value: _218.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _218.MsgSubmitQueryResponse;
                    };
                };
            };
            AminoConverter: {
                "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
                    aminoType: string;
                    toAmino: (message: _218.MsgSubmitQueryResponse) => _218.MsgSubmitQueryResponseAmino;
                    fromAmino: (object: _218.MsgSubmitQueryResponseAmino) => _218.MsgSubmitQueryResponse;
                };
            };
            QueryPendingQueriesRequest: {
                typeUrl: string;
                encode(_: _219.QueryPendingQueriesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.QueryPendingQueriesRequest;
                fromPartial(_: Partial<_219.QueryPendingQueriesRequest>): _219.QueryPendingQueriesRequest;
                fromAmino(_: _219.QueryPendingQueriesRequestAmino): _219.QueryPendingQueriesRequest;
                toAmino(_: _219.QueryPendingQueriesRequest): _219.QueryPendingQueriesRequestAmino;
                fromAminoMsg(object: _219.QueryPendingQueriesRequestAminoMsg): _219.QueryPendingQueriesRequest;
                fromProtoMsg(message: _219.QueryPendingQueriesRequestProtoMsg): _219.QueryPendingQueriesRequest;
                toProto(message: _219.QueryPendingQueriesRequest): Uint8Array;
                toProtoMsg(message: _219.QueryPendingQueriesRequest): _219.QueryPendingQueriesRequestProtoMsg;
            };
            QueryPendingQueriesResponse: {
                typeUrl: string;
                encode(message: _219.QueryPendingQueriesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _219.QueryPendingQueriesResponse;
                fromPartial(object: Partial<_219.QueryPendingQueriesResponse>): _219.QueryPendingQueriesResponse;
                fromAmino(object: _219.QueryPendingQueriesResponseAmino): _219.QueryPendingQueriesResponse;
                toAmino(message: _219.QueryPendingQueriesResponse): _219.QueryPendingQueriesResponseAmino;
                fromAminoMsg(object: _219.QueryPendingQueriesResponseAminoMsg): _219.QueryPendingQueriesResponse;
                fromProtoMsg(message: _219.QueryPendingQueriesResponseProtoMsg): _219.QueryPendingQueriesResponse;
                toProto(message: _219.QueryPendingQueriesResponse): Uint8Array;
                toProtoMsg(message: _219.QueryPendingQueriesResponse): _219.QueryPendingQueriesResponseProtoMsg;
            };
            MsgSubmitQueryResponse: {
                typeUrl: string;
                encode(message: _218.MsgSubmitQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.MsgSubmitQueryResponse;
                fromPartial(object: Partial<_218.MsgSubmitQueryResponse>): _218.MsgSubmitQueryResponse;
                fromAmino(object: _218.MsgSubmitQueryResponseAmino): _218.MsgSubmitQueryResponse;
                toAmino(message: _218.MsgSubmitQueryResponse): _218.MsgSubmitQueryResponseAmino;
                fromAminoMsg(object: _218.MsgSubmitQueryResponseAminoMsg): _218.MsgSubmitQueryResponse;
                fromProtoMsg(message: _218.MsgSubmitQueryResponseProtoMsg): _218.MsgSubmitQueryResponse;
                toProto(message: _218.MsgSubmitQueryResponse): Uint8Array;
                toProtoMsg(message: _218.MsgSubmitQueryResponse): _218.MsgSubmitQueryResponseProtoMsg;
            };
            MsgSubmitQueryResponseResponse: {
                typeUrl: string;
                encode(_: _218.MsgSubmitQueryResponseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _218.MsgSubmitQueryResponseResponse;
                fromPartial(_: Partial<_218.MsgSubmitQueryResponseResponse>): _218.MsgSubmitQueryResponseResponse;
                fromAmino(_: _218.MsgSubmitQueryResponseResponseAmino): _218.MsgSubmitQueryResponseResponse;
                toAmino(_: _218.MsgSubmitQueryResponseResponse): _218.MsgSubmitQueryResponseResponseAmino;
                fromAminoMsg(object: _218.MsgSubmitQueryResponseResponseAminoMsg): _218.MsgSubmitQueryResponseResponse;
                fromProtoMsg(message: _218.MsgSubmitQueryResponseResponseProtoMsg): _218.MsgSubmitQueryResponseResponse;
                toProto(message: _218.MsgSubmitQueryResponseResponse): Uint8Array;
                toProtoMsg(message: _218.MsgSubmitQueryResponseResponse): _218.MsgSubmitQueryResponseResponseProtoMsg;
            };
            timeoutPolicyFromJSON(object: any): _217.TimeoutPolicy;
            timeoutPolicyToJSON(object: _217.TimeoutPolicy): string;
            TimeoutPolicy: typeof _217.TimeoutPolicy;
            TimeoutPolicySDKType: typeof _217.TimeoutPolicy;
            TimeoutPolicyAmino: typeof _217.TimeoutPolicy;
            Query: {
                typeUrl: string;
                encode(message: _217.Query, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.Query;
                fromPartial(object: Partial<_217.Query>): _217.Query;
                fromAmino(object: _217.QueryAmino): _217.Query;
                toAmino(message: _217.Query): _217.QueryAmino;
                fromAminoMsg(object: _217.QueryAminoMsg): _217.Query;
                fromProtoMsg(message: _217.QueryProtoMsg): _217.Query;
                toProto(message: _217.Query): Uint8Array;
                toProtoMsg(message: _217.Query): _217.QueryProtoMsg;
            };
            DataPoint: {
                typeUrl: string;
                encode(message: _217.DataPoint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _217.DataPoint;
                fromPartial(object: Partial<_217.DataPoint>): _217.DataPoint;
                fromAmino(object: _217.DataPointAmino): _217.DataPoint;
                toAmino(message: _217.DataPoint): _217.DataPointAmino;
                fromAminoMsg(object: _217.DataPointAminoMsg): _217.DataPoint;
                fromProtoMsg(message: _217.DataPointProtoMsg): _217.DataPoint;
                toProto(message: _217.DataPoint): Uint8Array;
                toProtoMsg(message: _217.DataPoint): _217.DataPointProtoMsg;
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
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _392.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _222.QueryParamsRequest): Promise<_222.QueryParamsResponse>;
                epochProvisions(request?: _222.QueryEpochProvisionsRequest): Promise<_222.QueryEpochProvisionsResponse>;
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
            QueryEpochProvisionsRequest: {
                typeUrl: string;
                encode(_: _222.QueryEpochProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_222.QueryEpochProvisionsRequest>): _222.QueryEpochProvisionsRequest;
                fromAmino(_: _222.QueryEpochProvisionsRequestAmino): _222.QueryEpochProvisionsRequest;
                toAmino(_: _222.QueryEpochProvisionsRequest): _222.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _222.QueryEpochProvisionsRequestAminoMsg): _222.QueryEpochProvisionsRequest;
                fromProtoMsg(message: _222.QueryEpochProvisionsRequestProtoMsg): _222.QueryEpochProvisionsRequest;
                toProto(message: _222.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _222.QueryEpochProvisionsRequest): _222.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                typeUrl: string;
                encode(message: _222.QueryEpochProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _222.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_222.QueryEpochProvisionsResponse>): _222.QueryEpochProvisionsResponse;
                fromAmino(object: _222.QueryEpochProvisionsResponseAmino): _222.QueryEpochProvisionsResponse;
                toAmino(message: _222.QueryEpochProvisionsResponse): _222.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _222.QueryEpochProvisionsResponseAminoMsg): _222.QueryEpochProvisionsResponse;
                fromProtoMsg(message: _222.QueryEpochProvisionsResponseProtoMsg): _222.QueryEpochProvisionsResponse;
                toProto(message: _222.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _222.QueryEpochProvisionsResponse): _222.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _221.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.Minter;
                fromPartial(object: Partial<_221.Minter>): _221.Minter;
                fromAmino(object: _221.MinterAmino): _221.Minter;
                toAmino(message: _221.Minter): _221.MinterAmino;
                fromAminoMsg(object: _221.MinterAminoMsg): _221.Minter;
                fromProtoMsg(message: _221.MinterProtoMsg): _221.Minter;
                toProto(message: _221.Minter): Uint8Array;
                toProtoMsg(message: _221.Minter): _221.MinterProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                encode(message: _221.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _221.DistributionProportions;
                fromPartial(object: Partial<_221.DistributionProportions>): _221.DistributionProportions;
                fromAmino(object: _221.DistributionProportionsAmino): _221.DistributionProportions;
                toAmino(message: _221.DistributionProportions): _221.DistributionProportionsAmino;
                fromAminoMsg(object: _221.DistributionProportionsAminoMsg): _221.DistributionProportions;
                fromProtoMsg(message: _221.DistributionProportionsProtoMsg): _221.DistributionProportions;
                toProto(message: _221.DistributionProportions): Uint8Array;
                toProtoMsg(message: _221.DistributionProportions): _221.DistributionProportionsProtoMsg;
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
    }
    const records: {
        QueryClientImpl: typeof _393.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _226.QueryParamsRequest): Promise<_226.QueryParamsResponse>;
            userRedemptionRecord(request: _226.QueryGetUserRedemptionRecordRequest): Promise<_226.QueryGetUserRedemptionRecordResponse>;
            userRedemptionRecordAll(request?: _226.QueryAllUserRedemptionRecordRequest): Promise<_226.QueryAllUserRedemptionRecordResponse>;
            userRedemptionRecordForUser(request: _226.QueryAllUserRedemptionRecordForUserRequest): Promise<_226.QueryAllUserRedemptionRecordForUserResponse>;
            epochUnbondingRecord(request: _226.QueryGetEpochUnbondingRecordRequest): Promise<_226.QueryGetEpochUnbondingRecordResponse>;
            epochUnbondingRecordAll(request?: _226.QueryAllEpochUnbondingRecordRequest): Promise<_226.QueryAllEpochUnbondingRecordResponse>;
            depositRecord(request: _226.QueryGetDepositRecordRequest): Promise<_226.QueryGetDepositRecordResponse>;
            depositRecordAll(request?: _226.QueryAllDepositRecordRequest): Promise<_226.QueryAllDepositRecordResponse>;
            depositRecordByHost(request: _226.QueryDepositRecordByHostRequest): Promise<_226.QueryDepositRecordByHostResponse>;
            lSMDeposit(request: _226.QueryLSMDepositRequest): Promise<_226.QueryLSMDepositResponse>;
            lSMDeposits(request: _226.QueryLSMDepositsRequest): Promise<_226.QueryLSMDepositsResponse>;
        };
        depositRecord_StatusFromJSON(object: any): _227.DepositRecord_Status;
        depositRecord_StatusToJSON(object: _227.DepositRecord_Status): string;
        depositRecord_SourceFromJSON(object: any): _227.DepositRecord_Source;
        depositRecord_SourceToJSON(object: _227.DepositRecord_Source): string;
        hostZoneUnbonding_StatusFromJSON(object: any): _227.HostZoneUnbonding_Status;
        hostZoneUnbonding_StatusToJSON(object: _227.HostZoneUnbonding_Status): string;
        lSMTokenDeposit_StatusFromJSON(object: any): _227.LSMTokenDeposit_Status;
        lSMTokenDeposit_StatusToJSON(object: _227.LSMTokenDeposit_Status): string;
        DepositRecord_Status: typeof _227.DepositRecord_Status;
        DepositRecord_StatusSDKType: typeof _227.DepositRecord_Status;
        DepositRecord_StatusAmino: typeof _227.DepositRecord_Status;
        DepositRecord_Source: typeof _227.DepositRecord_Source;
        DepositRecord_SourceSDKType: typeof _227.DepositRecord_Source;
        DepositRecord_SourceAmino: typeof _227.DepositRecord_Source;
        HostZoneUnbonding_Status: typeof _227.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusSDKType: typeof _227.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusAmino: typeof _227.HostZoneUnbonding_Status;
        LSMTokenDeposit_Status: typeof _227.LSMTokenDeposit_Status;
        LSMTokenDeposit_StatusSDKType: typeof _227.LSMTokenDeposit_Status;
        LSMTokenDeposit_StatusAmino: typeof _227.LSMTokenDeposit_Status;
        UserRedemptionRecord: {
            typeUrl: string;
            encode(message: _227.UserRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.UserRedemptionRecord;
            fromPartial(object: Partial<_227.UserRedemptionRecord>): _227.UserRedemptionRecord;
            fromAmino(object: _227.UserRedemptionRecordAmino): _227.UserRedemptionRecord;
            toAmino(message: _227.UserRedemptionRecord): _227.UserRedemptionRecordAmino;
            fromAminoMsg(object: _227.UserRedemptionRecordAminoMsg): _227.UserRedemptionRecord;
            fromProtoMsg(message: _227.UserRedemptionRecordProtoMsg): _227.UserRedemptionRecord;
            toProto(message: _227.UserRedemptionRecord): Uint8Array;
            toProtoMsg(message: _227.UserRedemptionRecord): _227.UserRedemptionRecordProtoMsg;
        };
        DepositRecord: {
            typeUrl: string;
            encode(message: _227.DepositRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.DepositRecord;
            fromPartial(object: Partial<_227.DepositRecord>): _227.DepositRecord;
            fromAmino(object: _227.DepositRecordAmino): _227.DepositRecord;
            toAmino(message: _227.DepositRecord): _227.DepositRecordAmino;
            fromAminoMsg(object: _227.DepositRecordAminoMsg): _227.DepositRecord;
            fromProtoMsg(message: _227.DepositRecordProtoMsg): _227.DepositRecord;
            toProto(message: _227.DepositRecord): Uint8Array;
            toProtoMsg(message: _227.DepositRecord): _227.DepositRecordProtoMsg;
        };
        HostZoneUnbonding: {
            typeUrl: string;
            encode(message: _227.HostZoneUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.HostZoneUnbonding;
            fromPartial(object: Partial<_227.HostZoneUnbonding>): _227.HostZoneUnbonding;
            fromAmino(object: _227.HostZoneUnbondingAmino): _227.HostZoneUnbonding;
            toAmino(message: _227.HostZoneUnbonding): _227.HostZoneUnbondingAmino;
            fromAminoMsg(object: _227.HostZoneUnbondingAminoMsg): _227.HostZoneUnbonding;
            fromProtoMsg(message: _227.HostZoneUnbondingProtoMsg): _227.HostZoneUnbonding;
            toProto(message: _227.HostZoneUnbonding): Uint8Array;
            toProtoMsg(message: _227.HostZoneUnbonding): _227.HostZoneUnbondingProtoMsg;
        };
        EpochUnbondingRecord: {
            typeUrl: string;
            encode(message: _227.EpochUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.EpochUnbondingRecord;
            fromPartial(object: Partial<_227.EpochUnbondingRecord>): _227.EpochUnbondingRecord;
            fromAmino(object: _227.EpochUnbondingRecordAmino): _227.EpochUnbondingRecord;
            toAmino(message: _227.EpochUnbondingRecord): _227.EpochUnbondingRecordAmino;
            fromAminoMsg(object: _227.EpochUnbondingRecordAminoMsg): _227.EpochUnbondingRecord;
            fromProtoMsg(message: _227.EpochUnbondingRecordProtoMsg): _227.EpochUnbondingRecord;
            toProto(message: _227.EpochUnbondingRecord): Uint8Array;
            toProtoMsg(message: _227.EpochUnbondingRecord): _227.EpochUnbondingRecordProtoMsg;
        };
        LSMTokenDeposit: {
            typeUrl: string;
            encode(message: _227.LSMTokenDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _227.LSMTokenDeposit;
            fromPartial(object: Partial<_227.LSMTokenDeposit>): _227.LSMTokenDeposit;
            fromAmino(object: _227.LSMTokenDepositAmino): _227.LSMTokenDeposit;
            toAmino(message: _227.LSMTokenDeposit): _227.LSMTokenDepositAmino;
            fromAminoMsg(object: _227.LSMTokenDepositAminoMsg): _227.LSMTokenDeposit;
            fromProtoMsg(message: _227.LSMTokenDepositProtoMsg): _227.LSMTokenDeposit;
            toProto(message: _227.LSMTokenDeposit): Uint8Array;
            toProtoMsg(message: _227.LSMTokenDeposit): _227.LSMTokenDepositProtoMsg;
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
        QueryGetDepositRecordRequest: {
            typeUrl: string;
            encode(message: _226.QueryGetDepositRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryGetDepositRecordRequest;
            fromPartial(object: Partial<_226.QueryGetDepositRecordRequest>): _226.QueryGetDepositRecordRequest;
            fromAmino(object: _226.QueryGetDepositRecordRequestAmino): _226.QueryGetDepositRecordRequest;
            toAmino(message: _226.QueryGetDepositRecordRequest): _226.QueryGetDepositRecordRequestAmino;
            fromAminoMsg(object: _226.QueryGetDepositRecordRequestAminoMsg): _226.QueryGetDepositRecordRequest;
            fromProtoMsg(message: _226.QueryGetDepositRecordRequestProtoMsg): _226.QueryGetDepositRecordRequest;
            toProto(message: _226.QueryGetDepositRecordRequest): Uint8Array;
            toProtoMsg(message: _226.QueryGetDepositRecordRequest): _226.QueryGetDepositRecordRequestProtoMsg;
        };
        QueryGetDepositRecordResponse: {
            typeUrl: string;
            encode(message: _226.QueryGetDepositRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryGetDepositRecordResponse;
            fromPartial(object: Partial<_226.QueryGetDepositRecordResponse>): _226.QueryGetDepositRecordResponse;
            fromAmino(object: _226.QueryGetDepositRecordResponseAmino): _226.QueryGetDepositRecordResponse;
            toAmino(message: _226.QueryGetDepositRecordResponse): _226.QueryGetDepositRecordResponseAmino;
            fromAminoMsg(object: _226.QueryGetDepositRecordResponseAminoMsg): _226.QueryGetDepositRecordResponse;
            fromProtoMsg(message: _226.QueryGetDepositRecordResponseProtoMsg): _226.QueryGetDepositRecordResponse;
            toProto(message: _226.QueryGetDepositRecordResponse): Uint8Array;
            toProtoMsg(message: _226.QueryGetDepositRecordResponse): _226.QueryGetDepositRecordResponseProtoMsg;
        };
        QueryAllDepositRecordRequest: {
            typeUrl: string;
            encode(message: _226.QueryAllDepositRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryAllDepositRecordRequest;
            fromPartial(object: Partial<_226.QueryAllDepositRecordRequest>): _226.QueryAllDepositRecordRequest;
            fromAmino(object: _226.QueryAllDepositRecordRequestAmino): _226.QueryAllDepositRecordRequest;
            toAmino(message: _226.QueryAllDepositRecordRequest): _226.QueryAllDepositRecordRequestAmino;
            fromAminoMsg(object: _226.QueryAllDepositRecordRequestAminoMsg): _226.QueryAllDepositRecordRequest;
            fromProtoMsg(message: _226.QueryAllDepositRecordRequestProtoMsg): _226.QueryAllDepositRecordRequest;
            toProto(message: _226.QueryAllDepositRecordRequest): Uint8Array;
            toProtoMsg(message: _226.QueryAllDepositRecordRequest): _226.QueryAllDepositRecordRequestProtoMsg;
        };
        QueryAllDepositRecordResponse: {
            typeUrl: string;
            encode(message: _226.QueryAllDepositRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryAllDepositRecordResponse;
            fromPartial(object: Partial<_226.QueryAllDepositRecordResponse>): _226.QueryAllDepositRecordResponse;
            fromAmino(object: _226.QueryAllDepositRecordResponseAmino): _226.QueryAllDepositRecordResponse;
            toAmino(message: _226.QueryAllDepositRecordResponse): _226.QueryAllDepositRecordResponseAmino;
            fromAminoMsg(object: _226.QueryAllDepositRecordResponseAminoMsg): _226.QueryAllDepositRecordResponse;
            fromProtoMsg(message: _226.QueryAllDepositRecordResponseProtoMsg): _226.QueryAllDepositRecordResponse;
            toProto(message: _226.QueryAllDepositRecordResponse): Uint8Array;
            toProtoMsg(message: _226.QueryAllDepositRecordResponse): _226.QueryAllDepositRecordResponseProtoMsg;
        };
        QueryDepositRecordByHostRequest: {
            typeUrl: string;
            encode(message: _226.QueryDepositRecordByHostRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryDepositRecordByHostRequest;
            fromPartial(object: Partial<_226.QueryDepositRecordByHostRequest>): _226.QueryDepositRecordByHostRequest;
            fromAmino(object: _226.QueryDepositRecordByHostRequestAmino): _226.QueryDepositRecordByHostRequest;
            toAmino(message: _226.QueryDepositRecordByHostRequest): _226.QueryDepositRecordByHostRequestAmino;
            fromAminoMsg(object: _226.QueryDepositRecordByHostRequestAminoMsg): _226.QueryDepositRecordByHostRequest;
            fromProtoMsg(message: _226.QueryDepositRecordByHostRequestProtoMsg): _226.QueryDepositRecordByHostRequest;
            toProto(message: _226.QueryDepositRecordByHostRequest): Uint8Array;
            toProtoMsg(message: _226.QueryDepositRecordByHostRequest): _226.QueryDepositRecordByHostRequestProtoMsg;
        };
        QueryDepositRecordByHostResponse: {
            typeUrl: string;
            encode(message: _226.QueryDepositRecordByHostResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryDepositRecordByHostResponse;
            fromPartial(object: Partial<_226.QueryDepositRecordByHostResponse>): _226.QueryDepositRecordByHostResponse;
            fromAmino(object: _226.QueryDepositRecordByHostResponseAmino): _226.QueryDepositRecordByHostResponse;
            toAmino(message: _226.QueryDepositRecordByHostResponse): _226.QueryDepositRecordByHostResponseAmino;
            fromAminoMsg(object: _226.QueryDepositRecordByHostResponseAminoMsg): _226.QueryDepositRecordByHostResponse;
            fromProtoMsg(message: _226.QueryDepositRecordByHostResponseProtoMsg): _226.QueryDepositRecordByHostResponse;
            toProto(message: _226.QueryDepositRecordByHostResponse): Uint8Array;
            toProtoMsg(message: _226.QueryDepositRecordByHostResponse): _226.QueryDepositRecordByHostResponseProtoMsg;
        };
        QueryGetUserRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _226.QueryGetUserRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryGetUserRedemptionRecordRequest;
            fromPartial(object: Partial<_226.QueryGetUserRedemptionRecordRequest>): _226.QueryGetUserRedemptionRecordRequest;
            fromAmino(object: _226.QueryGetUserRedemptionRecordRequestAmino): _226.QueryGetUserRedemptionRecordRequest;
            toAmino(message: _226.QueryGetUserRedemptionRecordRequest): _226.QueryGetUserRedemptionRecordRequestAmino;
            fromAminoMsg(object: _226.QueryGetUserRedemptionRecordRequestAminoMsg): _226.QueryGetUserRedemptionRecordRequest;
            fromProtoMsg(message: _226.QueryGetUserRedemptionRecordRequestProtoMsg): _226.QueryGetUserRedemptionRecordRequest;
            toProto(message: _226.QueryGetUserRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _226.QueryGetUserRedemptionRecordRequest): _226.QueryGetUserRedemptionRecordRequestProtoMsg;
        };
        QueryGetUserRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _226.QueryGetUserRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryGetUserRedemptionRecordResponse;
            fromPartial(object: Partial<_226.QueryGetUserRedemptionRecordResponse>): _226.QueryGetUserRedemptionRecordResponse;
            fromAmino(object: _226.QueryGetUserRedemptionRecordResponseAmino): _226.QueryGetUserRedemptionRecordResponse;
            toAmino(message: _226.QueryGetUserRedemptionRecordResponse): _226.QueryGetUserRedemptionRecordResponseAmino;
            fromAminoMsg(object: _226.QueryGetUserRedemptionRecordResponseAminoMsg): _226.QueryGetUserRedemptionRecordResponse;
            fromProtoMsg(message: _226.QueryGetUserRedemptionRecordResponseProtoMsg): _226.QueryGetUserRedemptionRecordResponse;
            toProto(message: _226.QueryGetUserRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _226.QueryGetUserRedemptionRecordResponse): _226.QueryGetUserRedemptionRecordResponseProtoMsg;
        };
        QueryAllUserRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _226.QueryAllUserRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryAllUserRedemptionRecordRequest;
            fromPartial(object: Partial<_226.QueryAllUserRedemptionRecordRequest>): _226.QueryAllUserRedemptionRecordRequest;
            fromAmino(object: _226.QueryAllUserRedemptionRecordRequestAmino): _226.QueryAllUserRedemptionRecordRequest;
            toAmino(message: _226.QueryAllUserRedemptionRecordRequest): _226.QueryAllUserRedemptionRecordRequestAmino;
            fromAminoMsg(object: _226.QueryAllUserRedemptionRecordRequestAminoMsg): _226.QueryAllUserRedemptionRecordRequest;
            fromProtoMsg(message: _226.QueryAllUserRedemptionRecordRequestProtoMsg): _226.QueryAllUserRedemptionRecordRequest;
            toProto(message: _226.QueryAllUserRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _226.QueryAllUserRedemptionRecordRequest): _226.QueryAllUserRedemptionRecordRequestProtoMsg;
        };
        QueryAllUserRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _226.QueryAllUserRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryAllUserRedemptionRecordResponse;
            fromPartial(object: Partial<_226.QueryAllUserRedemptionRecordResponse>): _226.QueryAllUserRedemptionRecordResponse;
            fromAmino(object: _226.QueryAllUserRedemptionRecordResponseAmino): _226.QueryAllUserRedemptionRecordResponse;
            toAmino(message: _226.QueryAllUserRedemptionRecordResponse): _226.QueryAllUserRedemptionRecordResponseAmino;
            fromAminoMsg(object: _226.QueryAllUserRedemptionRecordResponseAminoMsg): _226.QueryAllUserRedemptionRecordResponse;
            fromProtoMsg(message: _226.QueryAllUserRedemptionRecordResponseProtoMsg): _226.QueryAllUserRedemptionRecordResponse;
            toProto(message: _226.QueryAllUserRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _226.QueryAllUserRedemptionRecordResponse): _226.QueryAllUserRedemptionRecordResponseProtoMsg;
        };
        QueryAllUserRedemptionRecordForUserRequest: {
            typeUrl: string;
            encode(message: _226.QueryAllUserRedemptionRecordForUserRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryAllUserRedemptionRecordForUserRequest;
            fromPartial(object: Partial<_226.QueryAllUserRedemptionRecordForUserRequest>): _226.QueryAllUserRedemptionRecordForUserRequest;
            fromAmino(object: _226.QueryAllUserRedemptionRecordForUserRequestAmino): _226.QueryAllUserRedemptionRecordForUserRequest;
            toAmino(message: _226.QueryAllUserRedemptionRecordForUserRequest): _226.QueryAllUserRedemptionRecordForUserRequestAmino;
            fromAminoMsg(object: _226.QueryAllUserRedemptionRecordForUserRequestAminoMsg): _226.QueryAllUserRedemptionRecordForUserRequest;
            fromProtoMsg(message: _226.QueryAllUserRedemptionRecordForUserRequestProtoMsg): _226.QueryAllUserRedemptionRecordForUserRequest;
            toProto(message: _226.QueryAllUserRedemptionRecordForUserRequest): Uint8Array;
            toProtoMsg(message: _226.QueryAllUserRedemptionRecordForUserRequest): _226.QueryAllUserRedemptionRecordForUserRequestProtoMsg;
        };
        QueryAllUserRedemptionRecordForUserResponse: {
            typeUrl: string;
            encode(message: _226.QueryAllUserRedemptionRecordForUserResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryAllUserRedemptionRecordForUserResponse;
            fromPartial(object: Partial<_226.QueryAllUserRedemptionRecordForUserResponse>): _226.QueryAllUserRedemptionRecordForUserResponse;
            fromAmino(object: _226.QueryAllUserRedemptionRecordForUserResponseAmino): _226.QueryAllUserRedemptionRecordForUserResponse;
            toAmino(message: _226.QueryAllUserRedemptionRecordForUserResponse): _226.QueryAllUserRedemptionRecordForUserResponseAmino;
            fromAminoMsg(object: _226.QueryAllUserRedemptionRecordForUserResponseAminoMsg): _226.QueryAllUserRedemptionRecordForUserResponse;
            fromProtoMsg(message: _226.QueryAllUserRedemptionRecordForUserResponseProtoMsg): _226.QueryAllUserRedemptionRecordForUserResponse;
            toProto(message: _226.QueryAllUserRedemptionRecordForUserResponse): Uint8Array;
            toProtoMsg(message: _226.QueryAllUserRedemptionRecordForUserResponse): _226.QueryAllUserRedemptionRecordForUserResponseProtoMsg;
        };
        QueryGetEpochUnbondingRecordRequest: {
            typeUrl: string;
            encode(message: _226.QueryGetEpochUnbondingRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryGetEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_226.QueryGetEpochUnbondingRecordRequest>): _226.QueryGetEpochUnbondingRecordRequest;
            fromAmino(object: _226.QueryGetEpochUnbondingRecordRequestAmino): _226.QueryGetEpochUnbondingRecordRequest;
            toAmino(message: _226.QueryGetEpochUnbondingRecordRequest): _226.QueryGetEpochUnbondingRecordRequestAmino;
            fromAminoMsg(object: _226.QueryGetEpochUnbondingRecordRequestAminoMsg): _226.QueryGetEpochUnbondingRecordRequest;
            fromProtoMsg(message: _226.QueryGetEpochUnbondingRecordRequestProtoMsg): _226.QueryGetEpochUnbondingRecordRequest;
            toProto(message: _226.QueryGetEpochUnbondingRecordRequest): Uint8Array;
            toProtoMsg(message: _226.QueryGetEpochUnbondingRecordRequest): _226.QueryGetEpochUnbondingRecordRequestProtoMsg;
        };
        QueryGetEpochUnbondingRecordResponse: {
            typeUrl: string;
            encode(message: _226.QueryGetEpochUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryGetEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_226.QueryGetEpochUnbondingRecordResponse>): _226.QueryGetEpochUnbondingRecordResponse;
            fromAmino(object: _226.QueryGetEpochUnbondingRecordResponseAmino): _226.QueryGetEpochUnbondingRecordResponse;
            toAmino(message: _226.QueryGetEpochUnbondingRecordResponse): _226.QueryGetEpochUnbondingRecordResponseAmino;
            fromAminoMsg(object: _226.QueryGetEpochUnbondingRecordResponseAminoMsg): _226.QueryGetEpochUnbondingRecordResponse;
            fromProtoMsg(message: _226.QueryGetEpochUnbondingRecordResponseProtoMsg): _226.QueryGetEpochUnbondingRecordResponse;
            toProto(message: _226.QueryGetEpochUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _226.QueryGetEpochUnbondingRecordResponse): _226.QueryGetEpochUnbondingRecordResponseProtoMsg;
        };
        QueryAllEpochUnbondingRecordRequest: {
            typeUrl: string;
            encode(message: _226.QueryAllEpochUnbondingRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryAllEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_226.QueryAllEpochUnbondingRecordRequest>): _226.QueryAllEpochUnbondingRecordRequest;
            fromAmino(object: _226.QueryAllEpochUnbondingRecordRequestAmino): _226.QueryAllEpochUnbondingRecordRequest;
            toAmino(message: _226.QueryAllEpochUnbondingRecordRequest): _226.QueryAllEpochUnbondingRecordRequestAmino;
            fromAminoMsg(object: _226.QueryAllEpochUnbondingRecordRequestAminoMsg): _226.QueryAllEpochUnbondingRecordRequest;
            fromProtoMsg(message: _226.QueryAllEpochUnbondingRecordRequestProtoMsg): _226.QueryAllEpochUnbondingRecordRequest;
            toProto(message: _226.QueryAllEpochUnbondingRecordRequest): Uint8Array;
            toProtoMsg(message: _226.QueryAllEpochUnbondingRecordRequest): _226.QueryAllEpochUnbondingRecordRequestProtoMsg;
        };
        QueryAllEpochUnbondingRecordResponse: {
            typeUrl: string;
            encode(message: _226.QueryAllEpochUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryAllEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_226.QueryAllEpochUnbondingRecordResponse>): _226.QueryAllEpochUnbondingRecordResponse;
            fromAmino(object: _226.QueryAllEpochUnbondingRecordResponseAmino): _226.QueryAllEpochUnbondingRecordResponse;
            toAmino(message: _226.QueryAllEpochUnbondingRecordResponse): _226.QueryAllEpochUnbondingRecordResponseAmino;
            fromAminoMsg(object: _226.QueryAllEpochUnbondingRecordResponseAminoMsg): _226.QueryAllEpochUnbondingRecordResponse;
            fromProtoMsg(message: _226.QueryAllEpochUnbondingRecordResponseProtoMsg): _226.QueryAllEpochUnbondingRecordResponse;
            toProto(message: _226.QueryAllEpochUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _226.QueryAllEpochUnbondingRecordResponse): _226.QueryAllEpochUnbondingRecordResponseProtoMsg;
        };
        QueryLSMDepositRequest: {
            typeUrl: string;
            encode(message: _226.QueryLSMDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryLSMDepositRequest;
            fromPartial(object: Partial<_226.QueryLSMDepositRequest>): _226.QueryLSMDepositRequest;
            fromAmino(object: _226.QueryLSMDepositRequestAmino): _226.QueryLSMDepositRequest;
            toAmino(message: _226.QueryLSMDepositRequest): _226.QueryLSMDepositRequestAmino;
            fromAminoMsg(object: _226.QueryLSMDepositRequestAminoMsg): _226.QueryLSMDepositRequest;
            fromProtoMsg(message: _226.QueryLSMDepositRequestProtoMsg): _226.QueryLSMDepositRequest;
            toProto(message: _226.QueryLSMDepositRequest): Uint8Array;
            toProtoMsg(message: _226.QueryLSMDepositRequest): _226.QueryLSMDepositRequestProtoMsg;
        };
        QueryLSMDepositResponse: {
            typeUrl: string;
            encode(message: _226.QueryLSMDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryLSMDepositResponse;
            fromPartial(object: Partial<_226.QueryLSMDepositResponse>): _226.QueryLSMDepositResponse;
            fromAmino(object: _226.QueryLSMDepositResponseAmino): _226.QueryLSMDepositResponse;
            toAmino(message: _226.QueryLSMDepositResponse): _226.QueryLSMDepositResponseAmino;
            fromAminoMsg(object: _226.QueryLSMDepositResponseAminoMsg): _226.QueryLSMDepositResponse;
            fromProtoMsg(message: _226.QueryLSMDepositResponseProtoMsg): _226.QueryLSMDepositResponse;
            toProto(message: _226.QueryLSMDepositResponse): Uint8Array;
            toProtoMsg(message: _226.QueryLSMDepositResponse): _226.QueryLSMDepositResponseProtoMsg;
        };
        QueryLSMDepositsRequest: {
            typeUrl: string;
            encode(message: _226.QueryLSMDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryLSMDepositsRequest;
            fromPartial(object: Partial<_226.QueryLSMDepositsRequest>): _226.QueryLSMDepositsRequest;
            fromAmino(object: _226.QueryLSMDepositsRequestAmino): _226.QueryLSMDepositsRequest;
            toAmino(message: _226.QueryLSMDepositsRequest): _226.QueryLSMDepositsRequestAmino;
            fromAminoMsg(object: _226.QueryLSMDepositsRequestAminoMsg): _226.QueryLSMDepositsRequest;
            fromProtoMsg(message: _226.QueryLSMDepositsRequestProtoMsg): _226.QueryLSMDepositsRequest;
            toProto(message: _226.QueryLSMDepositsRequest): Uint8Array;
            toProtoMsg(message: _226.QueryLSMDepositsRequest): _226.QueryLSMDepositsRequestProtoMsg;
        };
        QueryLSMDepositsResponse: {
            typeUrl: string;
            encode(message: _226.QueryLSMDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _226.QueryLSMDepositsResponse;
            fromPartial(object: Partial<_226.QueryLSMDepositsResponse>): _226.QueryLSMDepositsResponse;
            fromAmino(object: _226.QueryLSMDepositsResponseAmino): _226.QueryLSMDepositsResponse;
            toAmino(message: _226.QueryLSMDepositsResponse): _226.QueryLSMDepositsResponseAmino;
            fromAminoMsg(object: _226.QueryLSMDepositsResponseAminoMsg): _226.QueryLSMDepositsResponse;
            fromProtoMsg(message: _226.QueryLSMDepositsResponseProtoMsg): _226.QueryLSMDepositsResponse;
            toProto(message: _226.QueryLSMDepositsResponse): Uint8Array;
            toProtoMsg(message: _226.QueryLSMDepositsResponse): _226.QueryLSMDepositsResponseProtoMsg;
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
        TransferCallback: {
            typeUrl: string;
            encode(message: _223.TransferCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.TransferCallback;
            fromPartial(object: Partial<_223.TransferCallback>): _223.TransferCallback;
            fromAmino(object: _223.TransferCallbackAmino): _223.TransferCallback;
            toAmino(message: _223.TransferCallback): _223.TransferCallbackAmino;
            fromAminoMsg(object: _223.TransferCallbackAminoMsg): _223.TransferCallback;
            fromProtoMsg(message: _223.TransferCallbackProtoMsg): _223.TransferCallback;
            toProto(message: _223.TransferCallback): Uint8Array;
            toProtoMsg(message: _223.TransferCallback): _223.TransferCallbackProtoMsg;
        };
        TransferLSMTokenCallback: {
            typeUrl: string;
            encode(message: _223.TransferLSMTokenCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _223.TransferLSMTokenCallback;
            fromPartial(object: Partial<_223.TransferLSMTokenCallback>): _223.TransferLSMTokenCallback;
            fromAmino(object: _223.TransferLSMTokenCallbackAmino): _223.TransferLSMTokenCallback;
            toAmino(message: _223.TransferLSMTokenCallback): _223.TransferLSMTokenCallbackAmino;
            fromAminoMsg(object: _223.TransferLSMTokenCallbackAminoMsg): _223.TransferLSMTokenCallback;
            fromProtoMsg(message: _223.TransferLSMTokenCallbackProtoMsg): _223.TransferLSMTokenCallback;
            toProto(message: _223.TransferLSMTokenCallback): Uint8Array;
            toProtoMsg(message: _223.TransferLSMTokenCallback): _223.TransferLSMTokenCallbackProtoMsg;
        };
    };
    const stakedym: {
        MsgClientImpl: typeof _404.MsgClientImpl;
        QueryClientImpl: typeof _394.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            hostZone(request?: _229.QueryHostZoneRequest): Promise<_229.QueryHostZoneResponse>;
            delegationRecords(request: _229.QueryDelegationRecordsRequest): Promise<_229.QueryDelegationRecordsResponse>;
            unbondingRecords(request: _229.QueryUnbondingRecordsRequest): Promise<_229.QueryUnbondingRecordsResponse>;
            redemptionRecord(request: _229.QueryRedemptionRecordRequest): Promise<_229.QueryRedemptionRecordResponse>;
            redemptionRecords(request: _229.QueryRedemptionRecordsRequest): Promise<_229.QueryRedemptionRecordsResponse>;
            slashRecords(request?: _229.QuerySlashRecordsRequest): Promise<_229.QuerySlashRecordsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _231.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _231.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmDelegation(value: _231.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUndelegation(value: _231.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUnbondedTokenSweep(value: _231.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                adjustDelegatedBalance(value: _231.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _231.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _231.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                refreshRedemptionRate(value: _231.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteDelegationRecord(value: _231.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteUnbondingRecord(value: _231.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteRedemptionRecord(value: _231.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOperatorAddress(value: _231.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _231.MsgLiquidStake): {
                    typeUrl: string;
                    value: _231.MsgLiquidStake;
                };
                redeemStake(value: _231.MsgRedeemStake): {
                    typeUrl: string;
                    value: _231.MsgRedeemStake;
                };
                confirmDelegation(value: _231.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _231.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _231.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _231.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _231.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _231.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _231.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _231.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _231.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _231.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _231.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _231.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _231.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _231.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _231.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _231.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _231.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _231.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _231.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _231.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _231.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _231.MsgSetOperatorAddress;
                };
            };
            fromPartial: {
                liquidStake(value: _231.MsgLiquidStake): {
                    typeUrl: string;
                    value: _231.MsgLiquidStake;
                };
                redeemStake(value: _231.MsgRedeemStake): {
                    typeUrl: string;
                    value: _231.MsgRedeemStake;
                };
                confirmDelegation(value: _231.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _231.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _231.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _231.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _231.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _231.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _231.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _231.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _231.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _231.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _231.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _231.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _231.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _231.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _231.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _231.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _231.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _231.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _231.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _231.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _231.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _231.MsgSetOperatorAddress;
                };
            };
        };
        AminoConverter: {
            "/stride.stakedym.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _231.MsgLiquidStake) => _231.MsgLiquidStakeAmino;
                fromAmino: (object: _231.MsgLiquidStakeAmino) => _231.MsgLiquidStake;
            };
            "/stride.stakedym.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _231.MsgRedeemStake) => _231.MsgRedeemStakeAmino;
                fromAmino: (object: _231.MsgRedeemStakeAmino) => _231.MsgRedeemStake;
            };
            "/stride.stakedym.MsgConfirmDelegation": {
                aminoType: string;
                toAmino: (message: _231.MsgConfirmDelegation) => _231.MsgConfirmDelegationAmino;
                fromAmino: (object: _231.MsgConfirmDelegationAmino) => _231.MsgConfirmDelegation;
            };
            "/stride.stakedym.MsgConfirmUndelegation": {
                aminoType: string;
                toAmino: (message: _231.MsgConfirmUndelegation) => _231.MsgConfirmUndelegationAmino;
                fromAmino: (object: _231.MsgConfirmUndelegationAmino) => _231.MsgConfirmUndelegation;
            };
            "/stride.stakedym.MsgConfirmUnbondedTokenSweep": {
                aminoType: string;
                toAmino: (message: _231.MsgConfirmUnbondedTokenSweep) => _231.MsgConfirmUnbondedTokenSweepAmino;
                fromAmino: (object: _231.MsgConfirmUnbondedTokenSweepAmino) => _231.MsgConfirmUnbondedTokenSweep;
            };
            "/stride.stakedym.MsgAdjustDelegatedBalance": {
                aminoType: string;
                toAmino: (message: _231.MsgAdjustDelegatedBalance) => _231.MsgAdjustDelegatedBalanceAmino;
                fromAmino: (object: _231.MsgAdjustDelegatedBalanceAmino) => _231.MsgAdjustDelegatedBalance;
            };
            "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _231.MsgUpdateInnerRedemptionRateBounds) => _231.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _231.MsgUpdateInnerRedemptionRateBoundsAmino) => _231.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.stakedym.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _231.MsgResumeHostZone) => _231.MsgResumeHostZoneAmino;
                fromAmino: (object: _231.MsgResumeHostZoneAmino) => _231.MsgResumeHostZone;
            };
            "/stride.stakedym.MsgRefreshRedemptionRate": {
                aminoType: string;
                toAmino: (message: _231.MsgRefreshRedemptionRate) => _231.MsgRefreshRedemptionRateAmino;
                fromAmino: (object: _231.MsgRefreshRedemptionRateAmino) => _231.MsgRefreshRedemptionRate;
            };
            "/stride.stakedym.MsgOverwriteDelegationRecord": {
                aminoType: string;
                toAmino: (message: _231.MsgOverwriteDelegationRecord) => _231.MsgOverwriteDelegationRecordAmino;
                fromAmino: (object: _231.MsgOverwriteDelegationRecordAmino) => _231.MsgOverwriteDelegationRecord;
            };
            "/stride.stakedym.MsgOverwriteUnbondingRecord": {
                aminoType: string;
                toAmino: (message: _231.MsgOverwriteUnbondingRecord) => _231.MsgOverwriteUnbondingRecordAmino;
                fromAmino: (object: _231.MsgOverwriteUnbondingRecordAmino) => _231.MsgOverwriteUnbondingRecord;
            };
            "/stride.stakedym.MsgOverwriteRedemptionRecord": {
                aminoType: string;
                toAmino: (message: _231.MsgOverwriteRedemptionRecord) => _231.MsgOverwriteRedemptionRecordAmino;
                fromAmino: (object: _231.MsgOverwriteRedemptionRecordAmino) => _231.MsgOverwriteRedemptionRecord;
            };
            "/stride.stakedym.MsgSetOperatorAddress": {
                aminoType: string;
                toAmino: (message: _231.MsgSetOperatorAddress) => _231.MsgSetOperatorAddressAmino;
                fromAmino: (object: _231.MsgSetOperatorAddressAmino) => _231.MsgSetOperatorAddress;
            };
        };
        overwritableRecordTypeFromJSON(object: any): _231.OverwritableRecordType;
        overwritableRecordTypeToJSON(object: _231.OverwritableRecordType): string;
        OverwritableRecordType: typeof _231.OverwritableRecordType;
        OverwritableRecordTypeSDKType: typeof _231.OverwritableRecordType;
        OverwritableRecordTypeAmino: typeof _231.OverwritableRecordType;
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _231.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.MsgLiquidStake;
            fromPartial(object: Partial<_231.MsgLiquidStake>): _231.MsgLiquidStake;
            fromAmino(object: _231.MsgLiquidStakeAmino): _231.MsgLiquidStake;
            toAmino(message: _231.MsgLiquidStake): _231.MsgLiquidStakeAmino;
            fromAminoMsg(object: _231.MsgLiquidStakeAminoMsg): _231.MsgLiquidStake;
            toAminoMsg(message: _231.MsgLiquidStake): _231.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _231.MsgLiquidStakeProtoMsg): _231.MsgLiquidStake;
            toProto(message: _231.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _231.MsgLiquidStake): _231.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _231.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_231.MsgLiquidStakeResponse>): _231.MsgLiquidStakeResponse;
            fromAmino(object: _231.MsgLiquidStakeResponseAmino): _231.MsgLiquidStakeResponse;
            toAmino(message: _231.MsgLiquidStakeResponse): _231.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _231.MsgLiquidStakeResponseAminoMsg): _231.MsgLiquidStakeResponse;
            fromProtoMsg(message: _231.MsgLiquidStakeResponseProtoMsg): _231.MsgLiquidStakeResponse;
            toProto(message: _231.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _231.MsgLiquidStakeResponse): _231.MsgLiquidStakeResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _231.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.MsgRedeemStake;
            fromPartial(object: Partial<_231.MsgRedeemStake>): _231.MsgRedeemStake;
            fromAmino(object: _231.MsgRedeemStakeAmino): _231.MsgRedeemStake;
            toAmino(message: _231.MsgRedeemStake): _231.MsgRedeemStakeAmino;
            fromAminoMsg(object: _231.MsgRedeemStakeAminoMsg): _231.MsgRedeemStake;
            toAminoMsg(message: _231.MsgRedeemStake): _231.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _231.MsgRedeemStakeProtoMsg): _231.MsgRedeemStake;
            toProto(message: _231.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _231.MsgRedeemStake): _231.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(message: _231.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.MsgRedeemStakeResponse;
            fromPartial(object: Partial<_231.MsgRedeemStakeResponse>): _231.MsgRedeemStakeResponse;
            fromAmino(object: _231.MsgRedeemStakeResponseAmino): _231.MsgRedeemStakeResponse;
            toAmino(message: _231.MsgRedeemStakeResponse): _231.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _231.MsgRedeemStakeResponseAminoMsg): _231.MsgRedeemStakeResponse;
            fromProtoMsg(message: _231.MsgRedeemStakeResponseProtoMsg): _231.MsgRedeemStakeResponse;
            toProto(message: _231.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _231.MsgRedeemStakeResponse): _231.MsgRedeemStakeResponseProtoMsg;
        };
        MsgConfirmDelegation: {
            typeUrl: string;
            encode(message: _231.MsgConfirmDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.MsgConfirmDelegation;
            fromPartial(object: Partial<_231.MsgConfirmDelegation>): _231.MsgConfirmDelegation;
            fromAmino(object: _231.MsgConfirmDelegationAmino): _231.MsgConfirmDelegation;
            toAmino(message: _231.MsgConfirmDelegation): _231.MsgConfirmDelegationAmino;
            fromAminoMsg(object: _231.MsgConfirmDelegationAminoMsg): _231.MsgConfirmDelegation;
            toAminoMsg(message: _231.MsgConfirmDelegation): _231.MsgConfirmDelegationAminoMsg;
            fromProtoMsg(message: _231.MsgConfirmDelegationProtoMsg): _231.MsgConfirmDelegation;
            toProto(message: _231.MsgConfirmDelegation): Uint8Array;
            toProtoMsg(message: _231.MsgConfirmDelegation): _231.MsgConfirmDelegationProtoMsg;
        };
        MsgConfirmDelegationResponse: {
            typeUrl: string;
            encode(_: _231.MsgConfirmDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.MsgConfirmDelegationResponse;
            fromPartial(_: Partial<_231.MsgConfirmDelegationResponse>): _231.MsgConfirmDelegationResponse;
            fromAmino(_: _231.MsgConfirmDelegationResponseAmino): _231.MsgConfirmDelegationResponse;
            toAmino(_: _231.MsgConfirmDelegationResponse): _231.MsgConfirmDelegationResponseAmino;
            fromAminoMsg(object: _231.MsgConfirmDelegationResponseAminoMsg): _231.MsgConfirmDelegationResponse;
            fromProtoMsg(message: _231.MsgConfirmDelegationResponseProtoMsg): _231.MsgConfirmDelegationResponse;
            toProto(message: _231.MsgConfirmDelegationResponse): Uint8Array;
            toProtoMsg(message: _231.MsgConfirmDelegationResponse): _231.MsgConfirmDelegationResponseProtoMsg;
        };
        MsgConfirmUndelegation: {
            typeUrl: string;
            encode(message: _231.MsgConfirmUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.MsgConfirmUndelegation;
            fromPartial(object: Partial<_231.MsgConfirmUndelegation>): _231.MsgConfirmUndelegation;
            fromAmino(object: _231.MsgConfirmUndelegationAmino): _231.MsgConfirmUndelegation;
            toAmino(message: _231.MsgConfirmUndelegation): _231.MsgConfirmUndelegationAmino;
            fromAminoMsg(object: _231.MsgConfirmUndelegationAminoMsg): _231.MsgConfirmUndelegation;
            toAminoMsg(message: _231.MsgConfirmUndelegation): _231.MsgConfirmUndelegationAminoMsg;
            fromProtoMsg(message: _231.MsgConfirmUndelegationProtoMsg): _231.MsgConfirmUndelegation;
            toProto(message: _231.MsgConfirmUndelegation): Uint8Array;
            toProtoMsg(message: _231.MsgConfirmUndelegation): _231.MsgConfirmUndelegationProtoMsg;
        };
        MsgConfirmUndelegationResponse: {
            typeUrl: string;
            encode(_: _231.MsgConfirmUndelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.MsgConfirmUndelegationResponse;
            fromPartial(_: Partial<_231.MsgConfirmUndelegationResponse>): _231.MsgConfirmUndelegationResponse;
            fromAmino(_: _231.MsgConfirmUndelegationResponseAmino): _231.MsgConfirmUndelegationResponse;
            toAmino(_: _231.MsgConfirmUndelegationResponse): _231.MsgConfirmUndelegationResponseAmino;
            fromAminoMsg(object: _231.MsgConfirmUndelegationResponseAminoMsg): _231.MsgConfirmUndelegationResponse;
            fromProtoMsg(message: _231.MsgConfirmUndelegationResponseProtoMsg): _231.MsgConfirmUndelegationResponse;
            toProto(message: _231.MsgConfirmUndelegationResponse): Uint8Array;
            toProtoMsg(message: _231.MsgConfirmUndelegationResponse): _231.MsgConfirmUndelegationResponseProtoMsg;
        };
        MsgConfirmUnbondedTokenSweep: {
            typeUrl: string;
            encode(message: _231.MsgConfirmUnbondedTokenSweep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.MsgConfirmUnbondedTokenSweep;
            fromPartial(object: Partial<_231.MsgConfirmUnbondedTokenSweep>): _231.MsgConfirmUnbondedTokenSweep;
            fromAmino(object: _231.MsgConfirmUnbondedTokenSweepAmino): _231.MsgConfirmUnbondedTokenSweep;
            toAmino(message: _231.MsgConfirmUnbondedTokenSweep): _231.MsgConfirmUnbondedTokenSweepAmino;
            fromAminoMsg(object: _231.MsgConfirmUnbondedTokenSweepAminoMsg): _231.MsgConfirmUnbondedTokenSweep;
            toAminoMsg(message: _231.MsgConfirmUnbondedTokenSweep): _231.MsgConfirmUnbondedTokenSweepAminoMsg;
            fromProtoMsg(message: _231.MsgConfirmUnbondedTokenSweepProtoMsg): _231.MsgConfirmUnbondedTokenSweep;
            toProto(message: _231.MsgConfirmUnbondedTokenSweep): Uint8Array;
            toProtoMsg(message: _231.MsgConfirmUnbondedTokenSweep): _231.MsgConfirmUnbondedTokenSweepProtoMsg;
        };
        MsgConfirmUnbondedTokenSweepResponse: {
            typeUrl: string;
            encode(_: _231.MsgConfirmUnbondedTokenSweepResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.MsgConfirmUnbondedTokenSweepResponse;
            fromPartial(_: Partial<_231.MsgConfirmUnbondedTokenSweepResponse>): _231.MsgConfirmUnbondedTokenSweepResponse;
            fromAmino(_: _231.MsgConfirmUnbondedTokenSweepResponseAmino): _231.MsgConfirmUnbondedTokenSweepResponse;
            toAmino(_: _231.MsgConfirmUnbondedTokenSweepResponse): _231.MsgConfirmUnbondedTokenSweepResponseAmino;
            fromAminoMsg(object: _231.MsgConfirmUnbondedTokenSweepResponseAminoMsg): _231.MsgConfirmUnbondedTokenSweepResponse;
            fromProtoMsg(message: _231.MsgConfirmUnbondedTokenSweepResponseProtoMsg): _231.MsgConfirmUnbondedTokenSweepResponse;
            toProto(message: _231.MsgConfirmUnbondedTokenSweepResponse): Uint8Array;
            toProtoMsg(message: _231.MsgConfirmUnbondedTokenSweepResponse): _231.MsgConfirmUnbondedTokenSweepResponseProtoMsg;
        };
        MsgAdjustDelegatedBalance: {
            typeUrl: string;
            encode(message: _231.MsgAdjustDelegatedBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.MsgAdjustDelegatedBalance;
            fromPartial(object: Partial<_231.MsgAdjustDelegatedBalance>): _231.MsgAdjustDelegatedBalance;
            fromAmino(object: _231.MsgAdjustDelegatedBalanceAmino): _231.MsgAdjustDelegatedBalance;
            toAmino(message: _231.MsgAdjustDelegatedBalance): _231.MsgAdjustDelegatedBalanceAmino;
            fromAminoMsg(object: _231.MsgAdjustDelegatedBalanceAminoMsg): _231.MsgAdjustDelegatedBalance;
            toAminoMsg(message: _231.MsgAdjustDelegatedBalance): _231.MsgAdjustDelegatedBalanceAminoMsg;
            fromProtoMsg(message: _231.MsgAdjustDelegatedBalanceProtoMsg): _231.MsgAdjustDelegatedBalance;
            toProto(message: _231.MsgAdjustDelegatedBalance): Uint8Array;
            toProtoMsg(message: _231.MsgAdjustDelegatedBalance): _231.MsgAdjustDelegatedBalanceProtoMsg;
        };
        MsgAdjustDelegatedBalanceResponse: {
            typeUrl: string;
            encode(_: _231.MsgAdjustDelegatedBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.MsgAdjustDelegatedBalanceResponse;
            fromPartial(_: Partial<_231.MsgAdjustDelegatedBalanceResponse>): _231.MsgAdjustDelegatedBalanceResponse;
            fromAmino(_: _231.MsgAdjustDelegatedBalanceResponseAmino): _231.MsgAdjustDelegatedBalanceResponse;
            toAmino(_: _231.MsgAdjustDelegatedBalanceResponse): _231.MsgAdjustDelegatedBalanceResponseAmino;
            fromAminoMsg(object: _231.MsgAdjustDelegatedBalanceResponseAminoMsg): _231.MsgAdjustDelegatedBalanceResponse;
            fromProtoMsg(message: _231.MsgAdjustDelegatedBalanceResponseProtoMsg): _231.MsgAdjustDelegatedBalanceResponse;
            toProto(message: _231.MsgAdjustDelegatedBalanceResponse): Uint8Array;
            toProtoMsg(message: _231.MsgAdjustDelegatedBalanceResponse): _231.MsgAdjustDelegatedBalanceResponseProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _231.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_231.MsgUpdateInnerRedemptionRateBounds>): _231.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _231.MsgUpdateInnerRedemptionRateBoundsAmino): _231.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _231.MsgUpdateInnerRedemptionRateBounds): _231.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _231.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _231.MsgUpdateInnerRedemptionRateBounds;
            toAminoMsg(message: _231.MsgUpdateInnerRedemptionRateBounds): _231.MsgUpdateInnerRedemptionRateBoundsAminoMsg;
            fromProtoMsg(message: _231.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _231.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _231.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _231.MsgUpdateInnerRedemptionRateBounds): _231.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _231.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_231.MsgUpdateInnerRedemptionRateBoundsResponse>): _231.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _231.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _231.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _231.MsgUpdateInnerRedemptionRateBoundsResponse): _231.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _231.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _231.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _231.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _231.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _231.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _231.MsgUpdateInnerRedemptionRateBoundsResponse): _231.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _231.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.MsgResumeHostZone;
            fromPartial(object: Partial<_231.MsgResumeHostZone>): _231.MsgResumeHostZone;
            fromAmino(object: _231.MsgResumeHostZoneAmino): _231.MsgResumeHostZone;
            toAmino(message: _231.MsgResumeHostZone): _231.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _231.MsgResumeHostZoneAminoMsg): _231.MsgResumeHostZone;
            toAminoMsg(message: _231.MsgResumeHostZone): _231.MsgResumeHostZoneAminoMsg;
            fromProtoMsg(message: _231.MsgResumeHostZoneProtoMsg): _231.MsgResumeHostZone;
            toProto(message: _231.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _231.MsgResumeHostZone): _231.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _231.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_231.MsgResumeHostZoneResponse>): _231.MsgResumeHostZoneResponse;
            fromAmino(_: _231.MsgResumeHostZoneResponseAmino): _231.MsgResumeHostZoneResponse;
            toAmino(_: _231.MsgResumeHostZoneResponse): _231.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _231.MsgResumeHostZoneResponseAminoMsg): _231.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _231.MsgResumeHostZoneResponseProtoMsg): _231.MsgResumeHostZoneResponse;
            toProto(message: _231.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _231.MsgResumeHostZoneResponse): _231.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgRefreshRedemptionRate: {
            typeUrl: string;
            encode(message: _231.MsgRefreshRedemptionRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.MsgRefreshRedemptionRate;
            fromPartial(object: Partial<_231.MsgRefreshRedemptionRate>): _231.MsgRefreshRedemptionRate;
            fromAmino(object: _231.MsgRefreshRedemptionRateAmino): _231.MsgRefreshRedemptionRate;
            toAmino(message: _231.MsgRefreshRedemptionRate): _231.MsgRefreshRedemptionRateAmino;
            fromAminoMsg(object: _231.MsgRefreshRedemptionRateAminoMsg): _231.MsgRefreshRedemptionRate;
            toAminoMsg(message: _231.MsgRefreshRedemptionRate): _231.MsgRefreshRedemptionRateAminoMsg;
            fromProtoMsg(message: _231.MsgRefreshRedemptionRateProtoMsg): _231.MsgRefreshRedemptionRate;
            toProto(message: _231.MsgRefreshRedemptionRate): Uint8Array;
            toProtoMsg(message: _231.MsgRefreshRedemptionRate): _231.MsgRefreshRedemptionRateProtoMsg;
        };
        MsgRefreshRedemptionRateResponse: {
            typeUrl: string;
            encode(_: _231.MsgRefreshRedemptionRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.MsgRefreshRedemptionRateResponse;
            fromPartial(_: Partial<_231.MsgRefreshRedemptionRateResponse>): _231.MsgRefreshRedemptionRateResponse;
            fromAmino(_: _231.MsgRefreshRedemptionRateResponseAmino): _231.MsgRefreshRedemptionRateResponse;
            toAmino(_: _231.MsgRefreshRedemptionRateResponse): _231.MsgRefreshRedemptionRateResponseAmino;
            fromAminoMsg(object: _231.MsgRefreshRedemptionRateResponseAminoMsg): _231.MsgRefreshRedemptionRateResponse;
            fromProtoMsg(message: _231.MsgRefreshRedemptionRateResponseProtoMsg): _231.MsgRefreshRedemptionRateResponse;
            toProto(message: _231.MsgRefreshRedemptionRateResponse): Uint8Array;
            toProtoMsg(message: _231.MsgRefreshRedemptionRateResponse): _231.MsgRefreshRedemptionRateResponseProtoMsg;
        };
        MsgOverwriteDelegationRecord: {
            typeUrl: string;
            encode(message: _231.MsgOverwriteDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.MsgOverwriteDelegationRecord;
            fromPartial(object: Partial<_231.MsgOverwriteDelegationRecord>): _231.MsgOverwriteDelegationRecord;
            fromAmino(object: _231.MsgOverwriteDelegationRecordAmino): _231.MsgOverwriteDelegationRecord;
            toAmino(message: _231.MsgOverwriteDelegationRecord): _231.MsgOverwriteDelegationRecordAmino;
            fromAminoMsg(object: _231.MsgOverwriteDelegationRecordAminoMsg): _231.MsgOverwriteDelegationRecord;
            toAminoMsg(message: _231.MsgOverwriteDelegationRecord): _231.MsgOverwriteDelegationRecordAminoMsg;
            fromProtoMsg(message: _231.MsgOverwriteDelegationRecordProtoMsg): _231.MsgOverwriteDelegationRecord;
            toProto(message: _231.MsgOverwriteDelegationRecord): Uint8Array;
            toProtoMsg(message: _231.MsgOverwriteDelegationRecord): _231.MsgOverwriteDelegationRecordProtoMsg;
        };
        MsgOverwriteDelegationRecordResponse: {
            typeUrl: string;
            encode(_: _231.MsgOverwriteDelegationRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.MsgOverwriteDelegationRecordResponse;
            fromPartial(_: Partial<_231.MsgOverwriteDelegationRecordResponse>): _231.MsgOverwriteDelegationRecordResponse;
            fromAmino(_: _231.MsgOverwriteDelegationRecordResponseAmino): _231.MsgOverwriteDelegationRecordResponse;
            toAmino(_: _231.MsgOverwriteDelegationRecordResponse): _231.MsgOverwriteDelegationRecordResponseAmino;
            fromAminoMsg(object: _231.MsgOverwriteDelegationRecordResponseAminoMsg): _231.MsgOverwriteDelegationRecordResponse;
            fromProtoMsg(message: _231.MsgOverwriteDelegationRecordResponseProtoMsg): _231.MsgOverwriteDelegationRecordResponse;
            toProto(message: _231.MsgOverwriteDelegationRecordResponse): Uint8Array;
            toProtoMsg(message: _231.MsgOverwriteDelegationRecordResponse): _231.MsgOverwriteDelegationRecordResponseProtoMsg;
        };
        MsgOverwriteUnbondingRecord: {
            typeUrl: string;
            encode(message: _231.MsgOverwriteUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.MsgOverwriteUnbondingRecord;
            fromPartial(object: Partial<_231.MsgOverwriteUnbondingRecord>): _231.MsgOverwriteUnbondingRecord;
            fromAmino(object: _231.MsgOverwriteUnbondingRecordAmino): _231.MsgOverwriteUnbondingRecord;
            toAmino(message: _231.MsgOverwriteUnbondingRecord): _231.MsgOverwriteUnbondingRecordAmino;
            fromAminoMsg(object: _231.MsgOverwriteUnbondingRecordAminoMsg): _231.MsgOverwriteUnbondingRecord;
            toAminoMsg(message: _231.MsgOverwriteUnbondingRecord): _231.MsgOverwriteUnbondingRecordAminoMsg;
            fromProtoMsg(message: _231.MsgOverwriteUnbondingRecordProtoMsg): _231.MsgOverwriteUnbondingRecord;
            toProto(message: _231.MsgOverwriteUnbondingRecord): Uint8Array;
            toProtoMsg(message: _231.MsgOverwriteUnbondingRecord): _231.MsgOverwriteUnbondingRecordProtoMsg;
        };
        MsgOverwriteUnbondingRecordResponse: {
            typeUrl: string;
            encode(_: _231.MsgOverwriteUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.MsgOverwriteUnbondingRecordResponse;
            fromPartial(_: Partial<_231.MsgOverwriteUnbondingRecordResponse>): _231.MsgOverwriteUnbondingRecordResponse;
            fromAmino(_: _231.MsgOverwriteUnbondingRecordResponseAmino): _231.MsgOverwriteUnbondingRecordResponse;
            toAmino(_: _231.MsgOverwriteUnbondingRecordResponse): _231.MsgOverwriteUnbondingRecordResponseAmino;
            fromAminoMsg(object: _231.MsgOverwriteUnbondingRecordResponseAminoMsg): _231.MsgOverwriteUnbondingRecordResponse;
            fromProtoMsg(message: _231.MsgOverwriteUnbondingRecordResponseProtoMsg): _231.MsgOverwriteUnbondingRecordResponse;
            toProto(message: _231.MsgOverwriteUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _231.MsgOverwriteUnbondingRecordResponse): _231.MsgOverwriteUnbondingRecordResponseProtoMsg;
        };
        MsgOverwriteRedemptionRecord: {
            typeUrl: string;
            encode(message: _231.MsgOverwriteRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.MsgOverwriteRedemptionRecord;
            fromPartial(object: Partial<_231.MsgOverwriteRedemptionRecord>): _231.MsgOverwriteRedemptionRecord;
            fromAmino(object: _231.MsgOverwriteRedemptionRecordAmino): _231.MsgOverwriteRedemptionRecord;
            toAmino(message: _231.MsgOverwriteRedemptionRecord): _231.MsgOverwriteRedemptionRecordAmino;
            fromAminoMsg(object: _231.MsgOverwriteRedemptionRecordAminoMsg): _231.MsgOverwriteRedemptionRecord;
            toAminoMsg(message: _231.MsgOverwriteRedemptionRecord): _231.MsgOverwriteRedemptionRecordAminoMsg;
            fromProtoMsg(message: _231.MsgOverwriteRedemptionRecordProtoMsg): _231.MsgOverwriteRedemptionRecord;
            toProto(message: _231.MsgOverwriteRedemptionRecord): Uint8Array;
            toProtoMsg(message: _231.MsgOverwriteRedemptionRecord): _231.MsgOverwriteRedemptionRecordProtoMsg;
        };
        MsgOverwriteRedemptionRecordResponse: {
            typeUrl: string;
            encode(_: _231.MsgOverwriteRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.MsgOverwriteRedemptionRecordResponse;
            fromPartial(_: Partial<_231.MsgOverwriteRedemptionRecordResponse>): _231.MsgOverwriteRedemptionRecordResponse;
            fromAmino(_: _231.MsgOverwriteRedemptionRecordResponseAmino): _231.MsgOverwriteRedemptionRecordResponse;
            toAmino(_: _231.MsgOverwriteRedemptionRecordResponse): _231.MsgOverwriteRedemptionRecordResponseAmino;
            fromAminoMsg(object: _231.MsgOverwriteRedemptionRecordResponseAminoMsg): _231.MsgOverwriteRedemptionRecordResponse;
            fromProtoMsg(message: _231.MsgOverwriteRedemptionRecordResponseProtoMsg): _231.MsgOverwriteRedemptionRecordResponse;
            toProto(message: _231.MsgOverwriteRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _231.MsgOverwriteRedemptionRecordResponse): _231.MsgOverwriteRedemptionRecordResponseProtoMsg;
        };
        MsgSetOperatorAddress: {
            typeUrl: string;
            encode(message: _231.MsgSetOperatorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.MsgSetOperatorAddress;
            fromPartial(object: Partial<_231.MsgSetOperatorAddress>): _231.MsgSetOperatorAddress;
            fromAmino(object: _231.MsgSetOperatorAddressAmino): _231.MsgSetOperatorAddress;
            toAmino(message: _231.MsgSetOperatorAddress): _231.MsgSetOperatorAddressAmino;
            fromAminoMsg(object: _231.MsgSetOperatorAddressAminoMsg): _231.MsgSetOperatorAddress;
            toAminoMsg(message: _231.MsgSetOperatorAddress): _231.MsgSetOperatorAddressAminoMsg;
            fromProtoMsg(message: _231.MsgSetOperatorAddressProtoMsg): _231.MsgSetOperatorAddress;
            toProto(message: _231.MsgSetOperatorAddress): Uint8Array;
            toProtoMsg(message: _231.MsgSetOperatorAddress): _231.MsgSetOperatorAddressProtoMsg;
        };
        MsgSetOperatorAddressResponse: {
            typeUrl: string;
            encode(_: _231.MsgSetOperatorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _231.MsgSetOperatorAddressResponse;
            fromPartial(_: Partial<_231.MsgSetOperatorAddressResponse>): _231.MsgSetOperatorAddressResponse;
            fromAmino(_: _231.MsgSetOperatorAddressResponseAmino): _231.MsgSetOperatorAddressResponse;
            toAmino(_: _231.MsgSetOperatorAddressResponse): _231.MsgSetOperatorAddressResponseAmino;
            fromAminoMsg(object: _231.MsgSetOperatorAddressResponseAminoMsg): _231.MsgSetOperatorAddressResponse;
            fromProtoMsg(message: _231.MsgSetOperatorAddressResponseProtoMsg): _231.MsgSetOperatorAddressResponse;
            toProto(message: _231.MsgSetOperatorAddressResponse): Uint8Array;
            toProtoMsg(message: _231.MsgSetOperatorAddressResponse): _231.MsgSetOperatorAddressResponseProtoMsg;
        };
        delegationRecordStatusFromJSON(object: any): _230.DelegationRecordStatus;
        delegationRecordStatusToJSON(object: _230.DelegationRecordStatus): string;
        unbondingRecordStatusFromJSON(object: any): _230.UnbondingRecordStatus;
        unbondingRecordStatusToJSON(object: _230.UnbondingRecordStatus): string;
        DelegationRecordStatus: typeof _230.DelegationRecordStatus;
        DelegationRecordStatusSDKType: typeof _230.DelegationRecordStatus;
        DelegationRecordStatusAmino: typeof _230.DelegationRecordStatus;
        UnbondingRecordStatus: typeof _230.UnbondingRecordStatus;
        UnbondingRecordStatusSDKType: typeof _230.UnbondingRecordStatus;
        UnbondingRecordStatusAmino: typeof _230.UnbondingRecordStatus;
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
        DelegationRecord: {
            typeUrl: string;
            encode(message: _230.DelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.DelegationRecord;
            fromPartial(object: Partial<_230.DelegationRecord>): _230.DelegationRecord;
            fromAmino(object: _230.DelegationRecordAmino): _230.DelegationRecord;
            toAmino(message: _230.DelegationRecord): _230.DelegationRecordAmino;
            fromAminoMsg(object: _230.DelegationRecordAminoMsg): _230.DelegationRecord;
            fromProtoMsg(message: _230.DelegationRecordProtoMsg): _230.DelegationRecord;
            toProto(message: _230.DelegationRecord): Uint8Array;
            toProtoMsg(message: _230.DelegationRecord): _230.DelegationRecordProtoMsg;
        };
        UnbondingRecord: {
            typeUrl: string;
            encode(message: _230.UnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.UnbondingRecord;
            fromPartial(object: Partial<_230.UnbondingRecord>): _230.UnbondingRecord;
            fromAmino(object: _230.UnbondingRecordAmino): _230.UnbondingRecord;
            toAmino(message: _230.UnbondingRecord): _230.UnbondingRecordAmino;
            fromAminoMsg(object: _230.UnbondingRecordAminoMsg): _230.UnbondingRecord;
            fromProtoMsg(message: _230.UnbondingRecordProtoMsg): _230.UnbondingRecord;
            toProto(message: _230.UnbondingRecord): Uint8Array;
            toProtoMsg(message: _230.UnbondingRecord): _230.UnbondingRecordProtoMsg;
        };
        RedemptionRecord: {
            typeUrl: string;
            encode(message: _230.RedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.RedemptionRecord;
            fromPartial(object: Partial<_230.RedemptionRecord>): _230.RedemptionRecord;
            fromAmino(object: _230.RedemptionRecordAmino): _230.RedemptionRecord;
            toAmino(message: _230.RedemptionRecord): _230.RedemptionRecordAmino;
            fromAminoMsg(object: _230.RedemptionRecordAminoMsg): _230.RedemptionRecord;
            fromProtoMsg(message: _230.RedemptionRecordProtoMsg): _230.RedemptionRecord;
            toProto(message: _230.RedemptionRecord): Uint8Array;
            toProtoMsg(message: _230.RedemptionRecord): _230.RedemptionRecordProtoMsg;
        };
        SlashRecord: {
            typeUrl: string;
            encode(message: _230.SlashRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _230.SlashRecord;
            fromPartial(object: Partial<_230.SlashRecord>): _230.SlashRecord;
            fromAmino(object: _230.SlashRecordAmino): _230.SlashRecord;
            toAmino(message: _230.SlashRecord): _230.SlashRecordAmino;
            fromAminoMsg(object: _230.SlashRecordAminoMsg): _230.SlashRecord;
            fromProtoMsg(message: _230.SlashRecordProtoMsg): _230.SlashRecord;
            toProto(message: _230.SlashRecord): Uint8Array;
            toProtoMsg(message: _230.SlashRecord): _230.SlashRecordProtoMsg;
        };
        QueryHostZoneRequest: {
            typeUrl: string;
            encode(_: _229.QueryHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.QueryHostZoneRequest;
            fromPartial(_: Partial<_229.QueryHostZoneRequest>): _229.QueryHostZoneRequest;
            fromAmino(_: _229.QueryHostZoneRequestAmino): _229.QueryHostZoneRequest;
            toAmino(_: _229.QueryHostZoneRequest): _229.QueryHostZoneRequestAmino;
            fromAminoMsg(object: _229.QueryHostZoneRequestAminoMsg): _229.QueryHostZoneRequest;
            fromProtoMsg(message: _229.QueryHostZoneRequestProtoMsg): _229.QueryHostZoneRequest;
            toProto(message: _229.QueryHostZoneRequest): Uint8Array;
            toProtoMsg(message: _229.QueryHostZoneRequest): _229.QueryHostZoneRequestProtoMsg;
        };
        QueryHostZoneResponse: {
            typeUrl: string;
            encode(message: _229.QueryHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.QueryHostZoneResponse;
            fromPartial(object: Partial<_229.QueryHostZoneResponse>): _229.QueryHostZoneResponse;
            fromAmino(object: _229.QueryHostZoneResponseAmino): _229.QueryHostZoneResponse;
            toAmino(message: _229.QueryHostZoneResponse): _229.QueryHostZoneResponseAmino;
            fromAminoMsg(object: _229.QueryHostZoneResponseAminoMsg): _229.QueryHostZoneResponse;
            fromProtoMsg(message: _229.QueryHostZoneResponseProtoMsg): _229.QueryHostZoneResponse;
            toProto(message: _229.QueryHostZoneResponse): Uint8Array;
            toProtoMsg(message: _229.QueryHostZoneResponse): _229.QueryHostZoneResponseProtoMsg;
        };
        QueryDelegationRecordsRequest: {
            typeUrl: string;
            encode(message: _229.QueryDelegationRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.QueryDelegationRecordsRequest;
            fromPartial(object: Partial<_229.QueryDelegationRecordsRequest>): _229.QueryDelegationRecordsRequest;
            fromAmino(object: _229.QueryDelegationRecordsRequestAmino): _229.QueryDelegationRecordsRequest;
            toAmino(message: _229.QueryDelegationRecordsRequest): _229.QueryDelegationRecordsRequestAmino;
            fromAminoMsg(object: _229.QueryDelegationRecordsRequestAminoMsg): _229.QueryDelegationRecordsRequest;
            fromProtoMsg(message: _229.QueryDelegationRecordsRequestProtoMsg): _229.QueryDelegationRecordsRequest;
            toProto(message: _229.QueryDelegationRecordsRequest): Uint8Array;
            toProtoMsg(message: _229.QueryDelegationRecordsRequest): _229.QueryDelegationRecordsRequestProtoMsg;
        };
        QueryDelegationRecordsResponse: {
            typeUrl: string;
            encode(message: _229.QueryDelegationRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.QueryDelegationRecordsResponse;
            fromPartial(object: Partial<_229.QueryDelegationRecordsResponse>): _229.QueryDelegationRecordsResponse;
            fromAmino(object: _229.QueryDelegationRecordsResponseAmino): _229.QueryDelegationRecordsResponse;
            toAmino(message: _229.QueryDelegationRecordsResponse): _229.QueryDelegationRecordsResponseAmino;
            fromAminoMsg(object: _229.QueryDelegationRecordsResponseAminoMsg): _229.QueryDelegationRecordsResponse;
            fromProtoMsg(message: _229.QueryDelegationRecordsResponseProtoMsg): _229.QueryDelegationRecordsResponse;
            toProto(message: _229.QueryDelegationRecordsResponse): Uint8Array;
            toProtoMsg(message: _229.QueryDelegationRecordsResponse): _229.QueryDelegationRecordsResponseProtoMsg;
        };
        QueryUnbondingRecordsRequest: {
            typeUrl: string;
            encode(message: _229.QueryUnbondingRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.QueryUnbondingRecordsRequest;
            fromPartial(object: Partial<_229.QueryUnbondingRecordsRequest>): _229.QueryUnbondingRecordsRequest;
            fromAmino(object: _229.QueryUnbondingRecordsRequestAmino): _229.QueryUnbondingRecordsRequest;
            toAmino(message: _229.QueryUnbondingRecordsRequest): _229.QueryUnbondingRecordsRequestAmino;
            fromAminoMsg(object: _229.QueryUnbondingRecordsRequestAminoMsg): _229.QueryUnbondingRecordsRequest;
            fromProtoMsg(message: _229.QueryUnbondingRecordsRequestProtoMsg): _229.QueryUnbondingRecordsRequest;
            toProto(message: _229.QueryUnbondingRecordsRequest): Uint8Array;
            toProtoMsg(message: _229.QueryUnbondingRecordsRequest): _229.QueryUnbondingRecordsRequestProtoMsg;
        };
        QueryUnbondingRecordsResponse: {
            typeUrl: string;
            encode(message: _229.QueryUnbondingRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.QueryUnbondingRecordsResponse;
            fromPartial(object: Partial<_229.QueryUnbondingRecordsResponse>): _229.QueryUnbondingRecordsResponse;
            fromAmino(object: _229.QueryUnbondingRecordsResponseAmino): _229.QueryUnbondingRecordsResponse;
            toAmino(message: _229.QueryUnbondingRecordsResponse): _229.QueryUnbondingRecordsResponseAmino;
            fromAminoMsg(object: _229.QueryUnbondingRecordsResponseAminoMsg): _229.QueryUnbondingRecordsResponse;
            fromProtoMsg(message: _229.QueryUnbondingRecordsResponseProtoMsg): _229.QueryUnbondingRecordsResponse;
            toProto(message: _229.QueryUnbondingRecordsResponse): Uint8Array;
            toProtoMsg(message: _229.QueryUnbondingRecordsResponse): _229.QueryUnbondingRecordsResponseProtoMsg;
        };
        QueryRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _229.QueryRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.QueryRedemptionRecordRequest;
            fromPartial(object: Partial<_229.QueryRedemptionRecordRequest>): _229.QueryRedemptionRecordRequest;
            fromAmino(object: _229.QueryRedemptionRecordRequestAmino): _229.QueryRedemptionRecordRequest;
            toAmino(message: _229.QueryRedemptionRecordRequest): _229.QueryRedemptionRecordRequestAmino;
            fromAminoMsg(object: _229.QueryRedemptionRecordRequestAminoMsg): _229.QueryRedemptionRecordRequest;
            fromProtoMsg(message: _229.QueryRedemptionRecordRequestProtoMsg): _229.QueryRedemptionRecordRequest;
            toProto(message: _229.QueryRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _229.QueryRedemptionRecordRequest): _229.QueryRedemptionRecordRequestProtoMsg;
        };
        QueryRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _229.QueryRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.QueryRedemptionRecordResponse;
            fromPartial(object: Partial<_229.QueryRedemptionRecordResponse>): _229.QueryRedemptionRecordResponse;
            fromAmino(object: _229.QueryRedemptionRecordResponseAmino): _229.QueryRedemptionRecordResponse;
            toAmino(message: _229.QueryRedemptionRecordResponse): _229.QueryRedemptionRecordResponseAmino;
            fromAminoMsg(object: _229.QueryRedemptionRecordResponseAminoMsg): _229.QueryRedemptionRecordResponse;
            fromProtoMsg(message: _229.QueryRedemptionRecordResponseProtoMsg): _229.QueryRedemptionRecordResponse;
            toProto(message: _229.QueryRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _229.QueryRedemptionRecordResponse): _229.QueryRedemptionRecordResponseProtoMsg;
        };
        QueryRedemptionRecordsRequest: {
            typeUrl: string;
            encode(message: _229.QueryRedemptionRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.QueryRedemptionRecordsRequest;
            fromPartial(object: Partial<_229.QueryRedemptionRecordsRequest>): _229.QueryRedemptionRecordsRequest;
            fromAmino(object: _229.QueryRedemptionRecordsRequestAmino): _229.QueryRedemptionRecordsRequest;
            toAmino(message: _229.QueryRedemptionRecordsRequest): _229.QueryRedemptionRecordsRequestAmino;
            fromAminoMsg(object: _229.QueryRedemptionRecordsRequestAminoMsg): _229.QueryRedemptionRecordsRequest;
            fromProtoMsg(message: _229.QueryRedemptionRecordsRequestProtoMsg): _229.QueryRedemptionRecordsRequest;
            toProto(message: _229.QueryRedemptionRecordsRequest): Uint8Array;
            toProtoMsg(message: _229.QueryRedemptionRecordsRequest): _229.QueryRedemptionRecordsRequestProtoMsg;
        };
        QueryRedemptionRecordsResponse: {
            typeUrl: string;
            encode(message: _229.QueryRedemptionRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.QueryRedemptionRecordsResponse;
            fromPartial(object: Partial<_229.QueryRedemptionRecordsResponse>): _229.QueryRedemptionRecordsResponse;
            fromAmino(object: _229.QueryRedemptionRecordsResponseAmino): _229.QueryRedemptionRecordsResponse;
            toAmino(message: _229.QueryRedemptionRecordsResponse): _229.QueryRedemptionRecordsResponseAmino;
            fromAminoMsg(object: _229.QueryRedemptionRecordsResponseAminoMsg): _229.QueryRedemptionRecordsResponse;
            fromProtoMsg(message: _229.QueryRedemptionRecordsResponseProtoMsg): _229.QueryRedemptionRecordsResponse;
            toProto(message: _229.QueryRedemptionRecordsResponse): Uint8Array;
            toProtoMsg(message: _229.QueryRedemptionRecordsResponse): _229.QueryRedemptionRecordsResponseProtoMsg;
        };
        QuerySlashRecordsRequest: {
            typeUrl: string;
            encode(_: _229.QuerySlashRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.QuerySlashRecordsRequest;
            fromPartial(_: Partial<_229.QuerySlashRecordsRequest>): _229.QuerySlashRecordsRequest;
            fromAmino(_: _229.QuerySlashRecordsRequestAmino): _229.QuerySlashRecordsRequest;
            toAmino(_: _229.QuerySlashRecordsRequest): _229.QuerySlashRecordsRequestAmino;
            fromAminoMsg(object: _229.QuerySlashRecordsRequestAminoMsg): _229.QuerySlashRecordsRequest;
            fromProtoMsg(message: _229.QuerySlashRecordsRequestProtoMsg): _229.QuerySlashRecordsRequest;
            toProto(message: _229.QuerySlashRecordsRequest): Uint8Array;
            toProtoMsg(message: _229.QuerySlashRecordsRequest): _229.QuerySlashRecordsRequestProtoMsg;
        };
        QuerySlashRecordsResponse: {
            typeUrl: string;
            encode(message: _229.QuerySlashRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.QuerySlashRecordsResponse;
            fromPartial(object: Partial<_229.QuerySlashRecordsResponse>): _229.QuerySlashRecordsResponse;
            fromAmino(object: _229.QuerySlashRecordsResponseAmino): _229.QuerySlashRecordsResponse;
            toAmino(message: _229.QuerySlashRecordsResponse): _229.QuerySlashRecordsResponseAmino;
            fromAminoMsg(object: _229.QuerySlashRecordsResponseAminoMsg): _229.QuerySlashRecordsResponse;
            fromProtoMsg(message: _229.QuerySlashRecordsResponseProtoMsg): _229.QuerySlashRecordsResponse;
            toProto(message: _229.QuerySlashRecordsResponse): Uint8Array;
            toProtoMsg(message: _229.QuerySlashRecordsResponse): _229.QuerySlashRecordsResponseProtoMsg;
        };
        RedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _229.RedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _229.RedemptionRecordResponse;
            fromPartial(object: Partial<_229.RedemptionRecordResponse>): _229.RedemptionRecordResponse;
            fromAmino(object: _229.RedemptionRecordResponseAmino): _229.RedemptionRecordResponse;
            toAmino(message: _229.RedemptionRecordResponse): _229.RedemptionRecordResponseAmino;
            fromAminoMsg(object: _229.RedemptionRecordResponseAminoMsg): _229.RedemptionRecordResponse;
            fromProtoMsg(message: _229.RedemptionRecordResponseProtoMsg): _229.RedemptionRecordResponse;
            toProto(message: _229.RedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _229.RedemptionRecordResponse): _229.RedemptionRecordResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _228.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.Params;
            fromPartial(_: Partial<_228.Params>): _228.Params;
            fromAmino(_: _228.ParamsAmino): _228.Params;
            toAmino(_: _228.Params): _228.ParamsAmino;
            fromAminoMsg(object: _228.ParamsAminoMsg): _228.Params;
            fromProtoMsg(message: _228.ParamsProtoMsg): _228.Params;
            toProto(message: _228.Params): Uint8Array;
            toProtoMsg(message: _228.Params): _228.ParamsProtoMsg;
        };
        TransferInProgressRecordIds: {
            typeUrl: string;
            encode(message: _228.TransferInProgressRecordIds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _228.TransferInProgressRecordIds;
            fromPartial(object: Partial<_228.TransferInProgressRecordIds>): _228.TransferInProgressRecordIds;
            fromAmino(object: _228.TransferInProgressRecordIdsAmino): _228.TransferInProgressRecordIds;
            toAmino(message: _228.TransferInProgressRecordIds): _228.TransferInProgressRecordIdsAmino;
            fromAminoMsg(object: _228.TransferInProgressRecordIdsAminoMsg): _228.TransferInProgressRecordIds;
            fromProtoMsg(message: _228.TransferInProgressRecordIdsProtoMsg): _228.TransferInProgressRecordIds;
            toProto(message: _228.TransferInProgressRecordIds): Uint8Array;
            toProtoMsg(message: _228.TransferInProgressRecordIds): _228.TransferInProgressRecordIdsProtoMsg;
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
    };
    const stakeibc: {
        MsgClientImpl: typeof _405.MsgClientImpl;
        QueryClientImpl: typeof _395.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _241.QueryParamsRequest): Promise<_241.QueryParamsResponse>;
            validators(request: _241.QueryGetValidatorsRequest): Promise<_241.QueryGetValidatorsResponse>;
            hostZone(request: _241.QueryGetHostZoneRequest): Promise<_241.QueryGetHostZoneResponse>;
            hostZoneAll(request?: _241.QueryAllHostZoneRequest): Promise<_241.QueryAllHostZoneResponse>;
            moduleAddress(request: _241.QueryModuleAddressRequest): Promise<_241.QueryModuleAddressResponse>;
            interchainAccountFromAddress(request: _241.QueryInterchainAccountFromAddressRequest): Promise<_241.QueryInterchainAccountFromAddressResponse>;
            epochTracker(request: _241.QueryGetEpochTrackerRequest): Promise<_241.QueryGetEpochTrackerResponse>;
            epochTrackerAll(request?: _241.QueryAllEpochTrackerRequest): Promise<_241.QueryAllEpochTrackerResponse>;
            nextPacketSequence(request: _241.QueryGetNextPacketSequenceRequest): Promise<_241.QueryGetNextPacketSequenceResponse>;
            addressUnbondings(request: _241.QueryAddressUnbondings): Promise<_241.QueryAddressUnbondingsResponse>;
            allTradeRoutes(request?: _241.QueryAllTradeRoutes): Promise<_241.QueryAllTradeRoutesResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _243.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lSMLiquidStake(value: _243.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _243.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                registerHostZone(value: _243.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimUndelegatedTokens(value: _243.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                rebalanceValidators(value: _243.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addValidators(value: _243.MsgAddValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                changeValidatorWeight(value: _243.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteValidator(value: _243.MsgDeleteValidator): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreInterchainAccount(value: _243.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                closeDelegationChannel(value: _243.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateValidatorSharesExchRate(value: _243.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                calibrateDelegation(value: _243.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                clearBalance(value: _243.MsgClearBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _243.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _243.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createTradeRoute(value: _243.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteTradeRoute(value: _243.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateTradeRoute(value: _243.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setCommunityPoolRebate(value: _243.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                toggleTradeController(value: _243.MsgToggleTradeController): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateHostZoneParams(value: _243.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _243.MsgLiquidStake): {
                    typeUrl: string;
                    value: _243.MsgLiquidStake;
                };
                lSMLiquidStake(value: _243.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: _243.MsgLSMLiquidStake;
                };
                redeemStake(value: _243.MsgRedeemStake): {
                    typeUrl: string;
                    value: _243.MsgRedeemStake;
                };
                registerHostZone(value: _243.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _243.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _243.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _243.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _243.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _243.MsgRebalanceValidators;
                };
                addValidators(value: _243.MsgAddValidators): {
                    typeUrl: string;
                    value: _243.MsgAddValidators;
                };
                changeValidatorWeight(value: _243.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: _243.MsgChangeValidatorWeights;
                };
                deleteValidator(value: _243.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _243.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _243.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _243.MsgRestoreInterchainAccount;
                };
                closeDelegationChannel(value: _243.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: _243.MsgCloseDelegationChannel;
                };
                updateValidatorSharesExchRate(value: _243.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _243.MsgUpdateValidatorSharesExchRate;
                };
                calibrateDelegation(value: _243.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: _243.MsgCalibrateDelegation;
                };
                clearBalance(value: _243.MsgClearBalance): {
                    typeUrl: string;
                    value: _243.MsgClearBalance;
                };
                updateInnerRedemptionRateBounds(value: _243.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _243.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _243.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _243.MsgResumeHostZone;
                };
                createTradeRoute(value: _243.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: _243.MsgCreateTradeRoute;
                };
                deleteTradeRoute(value: _243.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: _243.MsgDeleteTradeRoute;
                };
                updateTradeRoute(value: _243.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: _243.MsgUpdateTradeRoute;
                };
                setCommunityPoolRebate(value: _243.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: _243.MsgSetCommunityPoolRebate;
                };
                toggleTradeController(value: _243.MsgToggleTradeController): {
                    typeUrl: string;
                    value: _243.MsgToggleTradeController;
                };
                updateHostZoneParams(value: _243.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: _243.MsgUpdateHostZoneParams;
                };
            };
            fromPartial: {
                liquidStake(value: _243.MsgLiquidStake): {
                    typeUrl: string;
                    value: _243.MsgLiquidStake;
                };
                lSMLiquidStake(value: _243.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: _243.MsgLSMLiquidStake;
                };
                redeemStake(value: _243.MsgRedeemStake): {
                    typeUrl: string;
                    value: _243.MsgRedeemStake;
                };
                registerHostZone(value: _243.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _243.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _243.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _243.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _243.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _243.MsgRebalanceValidators;
                };
                addValidators(value: _243.MsgAddValidators): {
                    typeUrl: string;
                    value: _243.MsgAddValidators;
                };
                changeValidatorWeight(value: _243.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: _243.MsgChangeValidatorWeights;
                };
                deleteValidator(value: _243.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _243.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _243.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _243.MsgRestoreInterchainAccount;
                };
                closeDelegationChannel(value: _243.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: _243.MsgCloseDelegationChannel;
                };
                updateValidatorSharesExchRate(value: _243.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _243.MsgUpdateValidatorSharesExchRate;
                };
                calibrateDelegation(value: _243.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: _243.MsgCalibrateDelegation;
                };
                clearBalance(value: _243.MsgClearBalance): {
                    typeUrl: string;
                    value: _243.MsgClearBalance;
                };
                updateInnerRedemptionRateBounds(value: _243.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _243.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _243.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _243.MsgResumeHostZone;
                };
                createTradeRoute(value: _243.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: _243.MsgCreateTradeRoute;
                };
                deleteTradeRoute(value: _243.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: _243.MsgDeleteTradeRoute;
                };
                updateTradeRoute(value: _243.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: _243.MsgUpdateTradeRoute;
                };
                setCommunityPoolRebate(value: _243.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: _243.MsgSetCommunityPoolRebate;
                };
                toggleTradeController(value: _243.MsgToggleTradeController): {
                    typeUrl: string;
                    value: _243.MsgToggleTradeController;
                };
                updateHostZoneParams(value: _243.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: _243.MsgUpdateHostZoneParams;
                };
            };
        };
        AminoConverter: {
            "/stride.stakeibc.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _243.MsgLiquidStake) => _243.MsgLiquidStakeAmino;
                fromAmino: (object: _243.MsgLiquidStakeAmino) => _243.MsgLiquidStake;
            };
            "/stride.stakeibc.MsgLSMLiquidStake": {
                aminoType: string;
                toAmino: (message: _243.MsgLSMLiquidStake) => _243.MsgLSMLiquidStakeAmino;
                fromAmino: (object: _243.MsgLSMLiquidStakeAmino) => _243.MsgLSMLiquidStake;
            };
            "/stride.stakeibc.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _243.MsgRedeemStake) => _243.MsgRedeemStakeAmino;
                fromAmino: (object: _243.MsgRedeemStakeAmino) => _243.MsgRedeemStake;
            };
            "/stride.stakeibc.MsgRegisterHostZone": {
                aminoType: string;
                toAmino: (message: _243.MsgRegisterHostZone) => _243.MsgRegisterHostZoneAmino;
                fromAmino: (object: _243.MsgRegisterHostZoneAmino) => _243.MsgRegisterHostZone;
            };
            "/stride.stakeibc.MsgClaimUndelegatedTokens": {
                aminoType: string;
                toAmino: (message: _243.MsgClaimUndelegatedTokens) => _243.MsgClaimUndelegatedTokensAmino;
                fromAmino: (object: _243.MsgClaimUndelegatedTokensAmino) => _243.MsgClaimUndelegatedTokens;
            };
            "/stride.stakeibc.MsgRebalanceValidators": {
                aminoType: string;
                toAmino: (message: _243.MsgRebalanceValidators) => _243.MsgRebalanceValidatorsAmino;
                fromAmino: (object: _243.MsgRebalanceValidatorsAmino) => _243.MsgRebalanceValidators;
            };
            "/stride.stakeibc.MsgAddValidators": {
                aminoType: string;
                toAmino: (message: _243.MsgAddValidators) => _243.MsgAddValidatorsAmino;
                fromAmino: (object: _243.MsgAddValidatorsAmino) => _243.MsgAddValidators;
            };
            "/stride.stakeibc.MsgChangeValidatorWeights": {
                aminoType: string;
                toAmino: (message: _243.MsgChangeValidatorWeights) => _243.MsgChangeValidatorWeightsAmino;
                fromAmino: (object: _243.MsgChangeValidatorWeightsAmino) => _243.MsgChangeValidatorWeights;
            };
            "/stride.stakeibc.MsgDeleteValidator": {
                aminoType: string;
                toAmino: (message: _243.MsgDeleteValidator) => _243.MsgDeleteValidatorAmino;
                fromAmino: (object: _243.MsgDeleteValidatorAmino) => _243.MsgDeleteValidator;
            };
            "/stride.stakeibc.MsgRestoreInterchainAccount": {
                aminoType: string;
                toAmino: (message: _243.MsgRestoreInterchainAccount) => _243.MsgRestoreInterchainAccountAmino;
                fromAmino: (object: _243.MsgRestoreInterchainAccountAmino) => _243.MsgRestoreInterchainAccount;
            };
            "/stride.stakeibc.MsgCloseDelegationChannel": {
                aminoType: string;
                toAmino: (message: _243.MsgCloseDelegationChannel) => _243.MsgCloseDelegationChannelAmino;
                fromAmino: (object: _243.MsgCloseDelegationChannelAmino) => _243.MsgCloseDelegationChannel;
            };
            "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
                aminoType: string;
                toAmino: (message: _243.MsgUpdateValidatorSharesExchRate) => _243.MsgUpdateValidatorSharesExchRateAmino;
                fromAmino: (object: _243.MsgUpdateValidatorSharesExchRateAmino) => _243.MsgUpdateValidatorSharesExchRate;
            };
            "/stride.stakeibc.MsgCalibrateDelegation": {
                aminoType: string;
                toAmino: (message: _243.MsgCalibrateDelegation) => _243.MsgCalibrateDelegationAmino;
                fromAmino: (object: _243.MsgCalibrateDelegationAmino) => _243.MsgCalibrateDelegation;
            };
            "/stride.stakeibc.MsgClearBalance": {
                aminoType: string;
                toAmino: (message: _243.MsgClearBalance) => _243.MsgClearBalanceAmino;
                fromAmino: (object: _243.MsgClearBalanceAmino) => _243.MsgClearBalance;
            };
            "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _243.MsgUpdateInnerRedemptionRateBounds) => _243.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _243.MsgUpdateInnerRedemptionRateBoundsAmino) => _243.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.stakeibc.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _243.MsgResumeHostZone) => _243.MsgResumeHostZoneAmino;
                fromAmino: (object: _243.MsgResumeHostZoneAmino) => _243.MsgResumeHostZone;
            };
            "/stride.stakeibc.MsgCreateTradeRoute": {
                aminoType: string;
                toAmino: (message: _243.MsgCreateTradeRoute) => _243.MsgCreateTradeRouteAmino;
                fromAmino: (object: _243.MsgCreateTradeRouteAmino) => _243.MsgCreateTradeRoute;
            };
            "/stride.stakeibc.MsgDeleteTradeRoute": {
                aminoType: string;
                toAmino: (message: _243.MsgDeleteTradeRoute) => _243.MsgDeleteTradeRouteAmino;
                fromAmino: (object: _243.MsgDeleteTradeRouteAmino) => _243.MsgDeleteTradeRoute;
            };
            "/stride.stakeibc.MsgUpdateTradeRoute": {
                aminoType: string;
                toAmino: (message: _243.MsgUpdateTradeRoute) => _243.MsgUpdateTradeRouteAmino;
                fromAmino: (object: _243.MsgUpdateTradeRouteAmino) => _243.MsgUpdateTradeRoute;
            };
            "/stride.stakeibc.MsgSetCommunityPoolRebate": {
                aminoType: string;
                toAmino: (message: _243.MsgSetCommunityPoolRebate) => _243.MsgSetCommunityPoolRebateAmino;
                fromAmino: (object: _243.MsgSetCommunityPoolRebateAmino) => _243.MsgSetCommunityPoolRebate;
            };
            "/stride.stakeibc.MsgToggleTradeController": {
                aminoType: string;
                toAmino: (message: _243.MsgToggleTradeController) => _243.MsgToggleTradeControllerAmino;
                fromAmino: (object: _243.MsgToggleTradeControllerAmino) => _243.MsgToggleTradeController;
            };
            "/stride.stakeibc.MsgUpdateHostZoneParams": {
                aminoType: string;
                toAmino: (message: _243.MsgUpdateHostZoneParams) => _243.MsgUpdateHostZoneParamsAmino;
                fromAmino: (object: _243.MsgUpdateHostZoneParamsAmino) => _243.MsgUpdateHostZoneParams;
            };
        };
        Validator: {
            typeUrl: string;
            encode(message: _244.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _244.Validator;
            fromPartial(object: Partial<_244.Validator>): _244.Validator;
            fromAmino(object: _244.ValidatorAmino): _244.Validator;
            toAmino(message: _244.Validator): _244.ValidatorAmino;
            fromAminoMsg(object: _244.ValidatorAminoMsg): _244.Validator;
            fromProtoMsg(message: _244.ValidatorProtoMsg): _244.Validator;
            toProto(message: _244.Validator): Uint8Array;
            toProtoMsg(message: _244.Validator): _244.ValidatorProtoMsg;
        };
        authzPermissionChangeFromJSON(object: any): _243.AuthzPermissionChange;
        authzPermissionChangeToJSON(object: _243.AuthzPermissionChange): string;
        AuthzPermissionChange: typeof _243.AuthzPermissionChange;
        AuthzPermissionChangeSDKType: typeof _243.AuthzPermissionChange;
        AuthzPermissionChangeAmino: typeof _243.AuthzPermissionChange;
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _243.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_243.MsgUpdateInnerRedemptionRateBounds>): _243.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _243.MsgUpdateInnerRedemptionRateBoundsAmino): _243.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _243.MsgUpdateInnerRedemptionRateBounds): _243.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _243.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _243.MsgUpdateInnerRedemptionRateBounds;
            fromProtoMsg(message: _243.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _243.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _243.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _243.MsgUpdateInnerRedemptionRateBounds): _243.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _243.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_243.MsgUpdateInnerRedemptionRateBoundsResponse>): _243.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _243.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _243.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _243.MsgUpdateInnerRedemptionRateBoundsResponse): _243.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _243.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _243.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _243.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _243.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _243.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _243.MsgUpdateInnerRedemptionRateBoundsResponse): _243.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _243.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgLiquidStake;
            fromPartial(object: Partial<_243.MsgLiquidStake>): _243.MsgLiquidStake;
            fromAmino(object: _243.MsgLiquidStakeAmino): _243.MsgLiquidStake;
            toAmino(message: _243.MsgLiquidStake): _243.MsgLiquidStakeAmino;
            fromAminoMsg(object: _243.MsgLiquidStakeAminoMsg): _243.MsgLiquidStake;
            toAminoMsg(message: _243.MsgLiquidStake): _243.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _243.MsgLiquidStakeProtoMsg): _243.MsgLiquidStake;
            toProto(message: _243.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _243.MsgLiquidStake): _243.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _243.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_243.MsgLiquidStakeResponse>): _243.MsgLiquidStakeResponse;
            fromAmino(object: _243.MsgLiquidStakeResponseAmino): _243.MsgLiquidStakeResponse;
            toAmino(message: _243.MsgLiquidStakeResponse): _243.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _243.MsgLiquidStakeResponseAminoMsg): _243.MsgLiquidStakeResponse;
            fromProtoMsg(message: _243.MsgLiquidStakeResponseProtoMsg): _243.MsgLiquidStakeResponse;
            toProto(message: _243.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _243.MsgLiquidStakeResponse): _243.MsgLiquidStakeResponseProtoMsg;
        };
        MsgLSMLiquidStake: {
            typeUrl: string;
            encode(message: _243.MsgLSMLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgLSMLiquidStake;
            fromPartial(object: Partial<_243.MsgLSMLiquidStake>): _243.MsgLSMLiquidStake;
            fromAmino(object: _243.MsgLSMLiquidStakeAmino): _243.MsgLSMLiquidStake;
            toAmino(message: _243.MsgLSMLiquidStake): _243.MsgLSMLiquidStakeAmino;
            fromAminoMsg(object: _243.MsgLSMLiquidStakeAminoMsg): _243.MsgLSMLiquidStake;
            toAminoMsg(message: _243.MsgLSMLiquidStake): _243.MsgLSMLiquidStakeAminoMsg;
            fromProtoMsg(message: _243.MsgLSMLiquidStakeProtoMsg): _243.MsgLSMLiquidStake;
            toProto(message: _243.MsgLSMLiquidStake): Uint8Array;
            toProtoMsg(message: _243.MsgLSMLiquidStake): _243.MsgLSMLiquidStakeProtoMsg;
        };
        MsgLSMLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _243.MsgLSMLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgLSMLiquidStakeResponse;
            fromPartial(object: Partial<_243.MsgLSMLiquidStakeResponse>): _243.MsgLSMLiquidStakeResponse;
            fromAmino(object: _243.MsgLSMLiquidStakeResponseAmino): _243.MsgLSMLiquidStakeResponse;
            toAmino(message: _243.MsgLSMLiquidStakeResponse): _243.MsgLSMLiquidStakeResponseAmino;
            fromAminoMsg(object: _243.MsgLSMLiquidStakeResponseAminoMsg): _243.MsgLSMLiquidStakeResponse;
            fromProtoMsg(message: _243.MsgLSMLiquidStakeResponseProtoMsg): _243.MsgLSMLiquidStakeResponse;
            toProto(message: _243.MsgLSMLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _243.MsgLSMLiquidStakeResponse): _243.MsgLSMLiquidStakeResponseProtoMsg;
        };
        MsgClearBalance: {
            typeUrl: string;
            encode(message: _243.MsgClearBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgClearBalance;
            fromPartial(object: Partial<_243.MsgClearBalance>): _243.MsgClearBalance;
            fromAmino(object: _243.MsgClearBalanceAmino): _243.MsgClearBalance;
            toAmino(message: _243.MsgClearBalance): _243.MsgClearBalanceAmino;
            fromAminoMsg(object: _243.MsgClearBalanceAminoMsg): _243.MsgClearBalance;
            toAminoMsg(message: _243.MsgClearBalance): _243.MsgClearBalanceAminoMsg;
            fromProtoMsg(message: _243.MsgClearBalanceProtoMsg): _243.MsgClearBalance;
            toProto(message: _243.MsgClearBalance): Uint8Array;
            toProtoMsg(message: _243.MsgClearBalance): _243.MsgClearBalanceProtoMsg;
        };
        MsgClearBalanceResponse: {
            typeUrl: string;
            encode(_: _243.MsgClearBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgClearBalanceResponse;
            fromPartial(_: Partial<_243.MsgClearBalanceResponse>): _243.MsgClearBalanceResponse;
            fromAmino(_: _243.MsgClearBalanceResponseAmino): _243.MsgClearBalanceResponse;
            toAmino(_: _243.MsgClearBalanceResponse): _243.MsgClearBalanceResponseAmino;
            fromAminoMsg(object: _243.MsgClearBalanceResponseAminoMsg): _243.MsgClearBalanceResponse;
            fromProtoMsg(message: _243.MsgClearBalanceResponseProtoMsg): _243.MsgClearBalanceResponse;
            toProto(message: _243.MsgClearBalanceResponse): Uint8Array;
            toProtoMsg(message: _243.MsgClearBalanceResponse): _243.MsgClearBalanceResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _243.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgRedeemStake;
            fromPartial(object: Partial<_243.MsgRedeemStake>): _243.MsgRedeemStake;
            fromAmino(object: _243.MsgRedeemStakeAmino): _243.MsgRedeemStake;
            toAmino(message: _243.MsgRedeemStake): _243.MsgRedeemStakeAmino;
            fromAminoMsg(object: _243.MsgRedeemStakeAminoMsg): _243.MsgRedeemStake;
            toAminoMsg(message: _243.MsgRedeemStake): _243.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _243.MsgRedeemStakeProtoMsg): _243.MsgRedeemStake;
            toProto(message: _243.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _243.MsgRedeemStake): _243.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(_: _243.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgRedeemStakeResponse;
            fromPartial(_: Partial<_243.MsgRedeemStakeResponse>): _243.MsgRedeemStakeResponse;
            fromAmino(_: _243.MsgRedeemStakeResponseAmino): _243.MsgRedeemStakeResponse;
            toAmino(_: _243.MsgRedeemStakeResponse): _243.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _243.MsgRedeemStakeResponseAminoMsg): _243.MsgRedeemStakeResponse;
            fromProtoMsg(message: _243.MsgRedeemStakeResponseProtoMsg): _243.MsgRedeemStakeResponse;
            toProto(message: _243.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _243.MsgRedeemStakeResponse): _243.MsgRedeemStakeResponseProtoMsg;
        };
        MsgRegisterHostZone: {
            typeUrl: string;
            encode(message: _243.MsgRegisterHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgRegisterHostZone;
            fromPartial(object: Partial<_243.MsgRegisterHostZone>): _243.MsgRegisterHostZone;
            fromAmino(object: _243.MsgRegisterHostZoneAmino): _243.MsgRegisterHostZone;
            toAmino(message: _243.MsgRegisterHostZone): _243.MsgRegisterHostZoneAmino;
            fromAminoMsg(object: _243.MsgRegisterHostZoneAminoMsg): _243.MsgRegisterHostZone;
            toAminoMsg(message: _243.MsgRegisterHostZone): _243.MsgRegisterHostZoneAminoMsg;
            fromProtoMsg(message: _243.MsgRegisterHostZoneProtoMsg): _243.MsgRegisterHostZone;
            toProto(message: _243.MsgRegisterHostZone): Uint8Array;
            toProtoMsg(message: _243.MsgRegisterHostZone): _243.MsgRegisterHostZoneProtoMsg;
        };
        MsgRegisterHostZoneResponse: {
            typeUrl: string;
            encode(_: _243.MsgRegisterHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgRegisterHostZoneResponse;
            fromPartial(_: Partial<_243.MsgRegisterHostZoneResponse>): _243.MsgRegisterHostZoneResponse;
            fromAmino(_: _243.MsgRegisterHostZoneResponseAmino): _243.MsgRegisterHostZoneResponse;
            toAmino(_: _243.MsgRegisterHostZoneResponse): _243.MsgRegisterHostZoneResponseAmino;
            fromAminoMsg(object: _243.MsgRegisterHostZoneResponseAminoMsg): _243.MsgRegisterHostZoneResponse;
            fromProtoMsg(message: _243.MsgRegisterHostZoneResponseProtoMsg): _243.MsgRegisterHostZoneResponse;
            toProto(message: _243.MsgRegisterHostZoneResponse): Uint8Array;
            toProtoMsg(message: _243.MsgRegisterHostZoneResponse): _243.MsgRegisterHostZoneResponseProtoMsg;
        };
        MsgClaimUndelegatedTokens: {
            typeUrl: string;
            encode(message: _243.MsgClaimUndelegatedTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgClaimUndelegatedTokens;
            fromPartial(object: Partial<_243.MsgClaimUndelegatedTokens>): _243.MsgClaimUndelegatedTokens;
            fromAmino(object: _243.MsgClaimUndelegatedTokensAmino): _243.MsgClaimUndelegatedTokens;
            toAmino(message: _243.MsgClaimUndelegatedTokens): _243.MsgClaimUndelegatedTokensAmino;
            fromAminoMsg(object: _243.MsgClaimUndelegatedTokensAminoMsg): _243.MsgClaimUndelegatedTokens;
            toAminoMsg(message: _243.MsgClaimUndelegatedTokens): _243.MsgClaimUndelegatedTokensAminoMsg;
            fromProtoMsg(message: _243.MsgClaimUndelegatedTokensProtoMsg): _243.MsgClaimUndelegatedTokens;
            toProto(message: _243.MsgClaimUndelegatedTokens): Uint8Array;
            toProtoMsg(message: _243.MsgClaimUndelegatedTokens): _243.MsgClaimUndelegatedTokensProtoMsg;
        };
        MsgClaimUndelegatedTokensResponse: {
            typeUrl: string;
            encode(_: _243.MsgClaimUndelegatedTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgClaimUndelegatedTokensResponse;
            fromPartial(_: Partial<_243.MsgClaimUndelegatedTokensResponse>): _243.MsgClaimUndelegatedTokensResponse;
            fromAmino(_: _243.MsgClaimUndelegatedTokensResponseAmino): _243.MsgClaimUndelegatedTokensResponse;
            toAmino(_: _243.MsgClaimUndelegatedTokensResponse): _243.MsgClaimUndelegatedTokensResponseAmino;
            fromAminoMsg(object: _243.MsgClaimUndelegatedTokensResponseAminoMsg): _243.MsgClaimUndelegatedTokensResponse;
            fromProtoMsg(message: _243.MsgClaimUndelegatedTokensResponseProtoMsg): _243.MsgClaimUndelegatedTokensResponse;
            toProto(message: _243.MsgClaimUndelegatedTokensResponse): Uint8Array;
            toProtoMsg(message: _243.MsgClaimUndelegatedTokensResponse): _243.MsgClaimUndelegatedTokensResponseProtoMsg;
        };
        MsgRebalanceValidators: {
            typeUrl: string;
            encode(message: _243.MsgRebalanceValidators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgRebalanceValidators;
            fromPartial(object: Partial<_243.MsgRebalanceValidators>): _243.MsgRebalanceValidators;
            fromAmino(object: _243.MsgRebalanceValidatorsAmino): _243.MsgRebalanceValidators;
            toAmino(message: _243.MsgRebalanceValidators): _243.MsgRebalanceValidatorsAmino;
            fromAminoMsg(object: _243.MsgRebalanceValidatorsAminoMsg): _243.MsgRebalanceValidators;
            toAminoMsg(message: _243.MsgRebalanceValidators): _243.MsgRebalanceValidatorsAminoMsg;
            fromProtoMsg(message: _243.MsgRebalanceValidatorsProtoMsg): _243.MsgRebalanceValidators;
            toProto(message: _243.MsgRebalanceValidators): Uint8Array;
            toProtoMsg(message: _243.MsgRebalanceValidators): _243.MsgRebalanceValidatorsProtoMsg;
        };
        MsgRebalanceValidatorsResponse: {
            typeUrl: string;
            encode(_: _243.MsgRebalanceValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgRebalanceValidatorsResponse;
            fromPartial(_: Partial<_243.MsgRebalanceValidatorsResponse>): _243.MsgRebalanceValidatorsResponse;
            fromAmino(_: _243.MsgRebalanceValidatorsResponseAmino): _243.MsgRebalanceValidatorsResponse;
            toAmino(_: _243.MsgRebalanceValidatorsResponse): _243.MsgRebalanceValidatorsResponseAmino;
            fromAminoMsg(object: _243.MsgRebalanceValidatorsResponseAminoMsg): _243.MsgRebalanceValidatorsResponse;
            fromProtoMsg(message: _243.MsgRebalanceValidatorsResponseProtoMsg): _243.MsgRebalanceValidatorsResponse;
            toProto(message: _243.MsgRebalanceValidatorsResponse): Uint8Array;
            toProtoMsg(message: _243.MsgRebalanceValidatorsResponse): _243.MsgRebalanceValidatorsResponseProtoMsg;
        };
        MsgAddValidators: {
            typeUrl: string;
            encode(message: _243.MsgAddValidators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgAddValidators;
            fromPartial(object: Partial<_243.MsgAddValidators>): _243.MsgAddValidators;
            fromAmino(object: _243.MsgAddValidatorsAmino): _243.MsgAddValidators;
            toAmino(message: _243.MsgAddValidators): _243.MsgAddValidatorsAmino;
            fromAminoMsg(object: _243.MsgAddValidatorsAminoMsg): _243.MsgAddValidators;
            fromProtoMsg(message: _243.MsgAddValidatorsProtoMsg): _243.MsgAddValidators;
            toProto(message: _243.MsgAddValidators): Uint8Array;
            toProtoMsg(message: _243.MsgAddValidators): _243.MsgAddValidatorsProtoMsg;
        };
        MsgAddValidatorsResponse: {
            typeUrl: string;
            encode(_: _243.MsgAddValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgAddValidatorsResponse;
            fromPartial(_: Partial<_243.MsgAddValidatorsResponse>): _243.MsgAddValidatorsResponse;
            fromAmino(_: _243.MsgAddValidatorsResponseAmino): _243.MsgAddValidatorsResponse;
            toAmino(_: _243.MsgAddValidatorsResponse): _243.MsgAddValidatorsResponseAmino;
            fromAminoMsg(object: _243.MsgAddValidatorsResponseAminoMsg): _243.MsgAddValidatorsResponse;
            fromProtoMsg(message: _243.MsgAddValidatorsResponseProtoMsg): _243.MsgAddValidatorsResponse;
            toProto(message: _243.MsgAddValidatorsResponse): Uint8Array;
            toProtoMsg(message: _243.MsgAddValidatorsResponse): _243.MsgAddValidatorsResponseProtoMsg;
        };
        ValidatorWeight: {
            typeUrl: string;
            encode(message: _243.ValidatorWeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.ValidatorWeight;
            fromPartial(object: Partial<_243.ValidatorWeight>): _243.ValidatorWeight;
            fromAmino(object: _243.ValidatorWeightAmino): _243.ValidatorWeight;
            toAmino(message: _243.ValidatorWeight): _243.ValidatorWeightAmino;
            fromAminoMsg(object: _243.ValidatorWeightAminoMsg): _243.ValidatorWeight;
            fromProtoMsg(message: _243.ValidatorWeightProtoMsg): _243.ValidatorWeight;
            toProto(message: _243.ValidatorWeight): Uint8Array;
            toProtoMsg(message: _243.ValidatorWeight): _243.ValidatorWeightProtoMsg;
        };
        MsgChangeValidatorWeights: {
            typeUrl: string;
            encode(message: _243.MsgChangeValidatorWeights, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgChangeValidatorWeights;
            fromPartial(object: Partial<_243.MsgChangeValidatorWeights>): _243.MsgChangeValidatorWeights;
            fromAmino(object: _243.MsgChangeValidatorWeightsAmino): _243.MsgChangeValidatorWeights;
            toAmino(message: _243.MsgChangeValidatorWeights): _243.MsgChangeValidatorWeightsAmino;
            fromAminoMsg(object: _243.MsgChangeValidatorWeightsAminoMsg): _243.MsgChangeValidatorWeights;
            fromProtoMsg(message: _243.MsgChangeValidatorWeightsProtoMsg): _243.MsgChangeValidatorWeights;
            toProto(message: _243.MsgChangeValidatorWeights): Uint8Array;
            toProtoMsg(message: _243.MsgChangeValidatorWeights): _243.MsgChangeValidatorWeightsProtoMsg;
        };
        MsgChangeValidatorWeightsResponse: {
            typeUrl: string;
            encode(_: _243.MsgChangeValidatorWeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgChangeValidatorWeightsResponse;
            fromPartial(_: Partial<_243.MsgChangeValidatorWeightsResponse>): _243.MsgChangeValidatorWeightsResponse;
            fromAmino(_: _243.MsgChangeValidatorWeightsResponseAmino): _243.MsgChangeValidatorWeightsResponse;
            toAmino(_: _243.MsgChangeValidatorWeightsResponse): _243.MsgChangeValidatorWeightsResponseAmino;
            fromAminoMsg(object: _243.MsgChangeValidatorWeightsResponseAminoMsg): _243.MsgChangeValidatorWeightsResponse;
            fromProtoMsg(message: _243.MsgChangeValidatorWeightsResponseProtoMsg): _243.MsgChangeValidatorWeightsResponse;
            toProto(message: _243.MsgChangeValidatorWeightsResponse): Uint8Array;
            toProtoMsg(message: _243.MsgChangeValidatorWeightsResponse): _243.MsgChangeValidatorWeightsResponseProtoMsg;
        };
        MsgDeleteValidator: {
            typeUrl: string;
            encode(message: _243.MsgDeleteValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgDeleteValidator;
            fromPartial(object: Partial<_243.MsgDeleteValidator>): _243.MsgDeleteValidator;
            fromAmino(object: _243.MsgDeleteValidatorAmino): _243.MsgDeleteValidator;
            toAmino(message: _243.MsgDeleteValidator): _243.MsgDeleteValidatorAmino;
            fromAminoMsg(object: _243.MsgDeleteValidatorAminoMsg): _243.MsgDeleteValidator;
            toAminoMsg(message: _243.MsgDeleteValidator): _243.MsgDeleteValidatorAminoMsg;
            fromProtoMsg(message: _243.MsgDeleteValidatorProtoMsg): _243.MsgDeleteValidator;
            toProto(message: _243.MsgDeleteValidator): Uint8Array;
            toProtoMsg(message: _243.MsgDeleteValidator): _243.MsgDeleteValidatorProtoMsg;
        };
        MsgDeleteValidatorResponse: {
            typeUrl: string;
            encode(_: _243.MsgDeleteValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgDeleteValidatorResponse;
            fromPartial(_: Partial<_243.MsgDeleteValidatorResponse>): _243.MsgDeleteValidatorResponse;
            fromAmino(_: _243.MsgDeleteValidatorResponseAmino): _243.MsgDeleteValidatorResponse;
            toAmino(_: _243.MsgDeleteValidatorResponse): _243.MsgDeleteValidatorResponseAmino;
            fromAminoMsg(object: _243.MsgDeleteValidatorResponseAminoMsg): _243.MsgDeleteValidatorResponse;
            fromProtoMsg(message: _243.MsgDeleteValidatorResponseProtoMsg): _243.MsgDeleteValidatorResponse;
            toProto(message: _243.MsgDeleteValidatorResponse): Uint8Array;
            toProtoMsg(message: _243.MsgDeleteValidatorResponse): _243.MsgDeleteValidatorResponseProtoMsg;
        };
        MsgRestoreInterchainAccount: {
            typeUrl: string;
            encode(message: _243.MsgRestoreInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgRestoreInterchainAccount;
            fromPartial(object: Partial<_243.MsgRestoreInterchainAccount>): _243.MsgRestoreInterchainAccount;
            fromAmino(object: _243.MsgRestoreInterchainAccountAmino): _243.MsgRestoreInterchainAccount;
            toAmino(message: _243.MsgRestoreInterchainAccount): _243.MsgRestoreInterchainAccountAmino;
            fromAminoMsg(object: _243.MsgRestoreInterchainAccountAminoMsg): _243.MsgRestoreInterchainAccount;
            toAminoMsg(message: _243.MsgRestoreInterchainAccount): _243.MsgRestoreInterchainAccountAminoMsg;
            fromProtoMsg(message: _243.MsgRestoreInterchainAccountProtoMsg): _243.MsgRestoreInterchainAccount;
            toProto(message: _243.MsgRestoreInterchainAccount): Uint8Array;
            toProtoMsg(message: _243.MsgRestoreInterchainAccount): _243.MsgRestoreInterchainAccountProtoMsg;
        };
        MsgRestoreInterchainAccountResponse: {
            typeUrl: string;
            encode(_: _243.MsgRestoreInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgRestoreInterchainAccountResponse;
            fromPartial(_: Partial<_243.MsgRestoreInterchainAccountResponse>): _243.MsgRestoreInterchainAccountResponse;
            fromAmino(_: _243.MsgRestoreInterchainAccountResponseAmino): _243.MsgRestoreInterchainAccountResponse;
            toAmino(_: _243.MsgRestoreInterchainAccountResponse): _243.MsgRestoreInterchainAccountResponseAmino;
            fromAminoMsg(object: _243.MsgRestoreInterchainAccountResponseAminoMsg): _243.MsgRestoreInterchainAccountResponse;
            fromProtoMsg(message: _243.MsgRestoreInterchainAccountResponseProtoMsg): _243.MsgRestoreInterchainAccountResponse;
            toProto(message: _243.MsgRestoreInterchainAccountResponse): Uint8Array;
            toProtoMsg(message: _243.MsgRestoreInterchainAccountResponse): _243.MsgRestoreInterchainAccountResponseProtoMsg;
        };
        MsgCloseDelegationChannel: {
            typeUrl: string;
            encode(message: _243.MsgCloseDelegationChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgCloseDelegationChannel;
            fromPartial(object: Partial<_243.MsgCloseDelegationChannel>): _243.MsgCloseDelegationChannel;
            fromAmino(object: _243.MsgCloseDelegationChannelAmino): _243.MsgCloseDelegationChannel;
            toAmino(message: _243.MsgCloseDelegationChannel): _243.MsgCloseDelegationChannelAmino;
            fromAminoMsg(object: _243.MsgCloseDelegationChannelAminoMsg): _243.MsgCloseDelegationChannel;
            fromProtoMsg(message: _243.MsgCloseDelegationChannelProtoMsg): _243.MsgCloseDelegationChannel;
            toProto(message: _243.MsgCloseDelegationChannel): Uint8Array;
            toProtoMsg(message: _243.MsgCloseDelegationChannel): _243.MsgCloseDelegationChannelProtoMsg;
        };
        MsgCloseDelegationChannelResponse: {
            typeUrl: string;
            encode(_: _243.MsgCloseDelegationChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgCloseDelegationChannelResponse;
            fromPartial(_: Partial<_243.MsgCloseDelegationChannelResponse>): _243.MsgCloseDelegationChannelResponse;
            fromAmino(_: _243.MsgCloseDelegationChannelResponseAmino): _243.MsgCloseDelegationChannelResponse;
            toAmino(_: _243.MsgCloseDelegationChannelResponse): _243.MsgCloseDelegationChannelResponseAmino;
            fromAminoMsg(object: _243.MsgCloseDelegationChannelResponseAminoMsg): _243.MsgCloseDelegationChannelResponse;
            fromProtoMsg(message: _243.MsgCloseDelegationChannelResponseProtoMsg): _243.MsgCloseDelegationChannelResponse;
            toProto(message: _243.MsgCloseDelegationChannelResponse): Uint8Array;
            toProtoMsg(message: _243.MsgCloseDelegationChannelResponse): _243.MsgCloseDelegationChannelResponseProtoMsg;
        };
        MsgUpdateValidatorSharesExchRate: {
            typeUrl: string;
            encode(message: _243.MsgUpdateValidatorSharesExchRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgUpdateValidatorSharesExchRate;
            fromPartial(object: Partial<_243.MsgUpdateValidatorSharesExchRate>): _243.MsgUpdateValidatorSharesExchRate;
            fromAmino(object: _243.MsgUpdateValidatorSharesExchRateAmino): _243.MsgUpdateValidatorSharesExchRate;
            toAmino(message: _243.MsgUpdateValidatorSharesExchRate): _243.MsgUpdateValidatorSharesExchRateAmino;
            fromAminoMsg(object: _243.MsgUpdateValidatorSharesExchRateAminoMsg): _243.MsgUpdateValidatorSharesExchRate;
            toAminoMsg(message: _243.MsgUpdateValidatorSharesExchRate): _243.MsgUpdateValidatorSharesExchRateAminoMsg;
            fromProtoMsg(message: _243.MsgUpdateValidatorSharesExchRateProtoMsg): _243.MsgUpdateValidatorSharesExchRate;
            toProto(message: _243.MsgUpdateValidatorSharesExchRate): Uint8Array;
            toProtoMsg(message: _243.MsgUpdateValidatorSharesExchRate): _243.MsgUpdateValidatorSharesExchRateProtoMsg;
        };
        MsgUpdateValidatorSharesExchRateResponse: {
            typeUrl: string;
            encode(_: _243.MsgUpdateValidatorSharesExchRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgUpdateValidatorSharesExchRateResponse;
            fromPartial(_: Partial<_243.MsgUpdateValidatorSharesExchRateResponse>): _243.MsgUpdateValidatorSharesExchRateResponse;
            fromAmino(_: _243.MsgUpdateValidatorSharesExchRateResponseAmino): _243.MsgUpdateValidatorSharesExchRateResponse;
            toAmino(_: _243.MsgUpdateValidatorSharesExchRateResponse): _243.MsgUpdateValidatorSharesExchRateResponseAmino;
            fromAminoMsg(object: _243.MsgUpdateValidatorSharesExchRateResponseAminoMsg): _243.MsgUpdateValidatorSharesExchRateResponse;
            fromProtoMsg(message: _243.MsgUpdateValidatorSharesExchRateResponseProtoMsg): _243.MsgUpdateValidatorSharesExchRateResponse;
            toProto(message: _243.MsgUpdateValidatorSharesExchRateResponse): Uint8Array;
            toProtoMsg(message: _243.MsgUpdateValidatorSharesExchRateResponse): _243.MsgUpdateValidatorSharesExchRateResponseProtoMsg;
        };
        MsgCalibrateDelegation: {
            typeUrl: string;
            encode(message: _243.MsgCalibrateDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgCalibrateDelegation;
            fromPartial(object: Partial<_243.MsgCalibrateDelegation>): _243.MsgCalibrateDelegation;
            fromAmino(object: _243.MsgCalibrateDelegationAmino): _243.MsgCalibrateDelegation;
            toAmino(message: _243.MsgCalibrateDelegation): _243.MsgCalibrateDelegationAmino;
            fromAminoMsg(object: _243.MsgCalibrateDelegationAminoMsg): _243.MsgCalibrateDelegation;
            fromProtoMsg(message: _243.MsgCalibrateDelegationProtoMsg): _243.MsgCalibrateDelegation;
            toProto(message: _243.MsgCalibrateDelegation): Uint8Array;
            toProtoMsg(message: _243.MsgCalibrateDelegation): _243.MsgCalibrateDelegationProtoMsg;
        };
        MsgCalibrateDelegationResponse: {
            typeUrl: string;
            encode(_: _243.MsgCalibrateDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgCalibrateDelegationResponse;
            fromPartial(_: Partial<_243.MsgCalibrateDelegationResponse>): _243.MsgCalibrateDelegationResponse;
            fromAmino(_: _243.MsgCalibrateDelegationResponseAmino): _243.MsgCalibrateDelegationResponse;
            toAmino(_: _243.MsgCalibrateDelegationResponse): _243.MsgCalibrateDelegationResponseAmino;
            fromAminoMsg(object: _243.MsgCalibrateDelegationResponseAminoMsg): _243.MsgCalibrateDelegationResponse;
            fromProtoMsg(message: _243.MsgCalibrateDelegationResponseProtoMsg): _243.MsgCalibrateDelegationResponse;
            toProto(message: _243.MsgCalibrateDelegationResponse): Uint8Array;
            toProtoMsg(message: _243.MsgCalibrateDelegationResponse): _243.MsgCalibrateDelegationResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _243.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgResumeHostZone;
            fromPartial(object: Partial<_243.MsgResumeHostZone>): _243.MsgResumeHostZone;
            fromAmino(object: _243.MsgResumeHostZoneAmino): _243.MsgResumeHostZone;
            toAmino(message: _243.MsgResumeHostZone): _243.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _243.MsgResumeHostZoneAminoMsg): _243.MsgResumeHostZone;
            fromProtoMsg(message: _243.MsgResumeHostZoneProtoMsg): _243.MsgResumeHostZone;
            toProto(message: _243.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _243.MsgResumeHostZone): _243.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _243.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_243.MsgResumeHostZoneResponse>): _243.MsgResumeHostZoneResponse;
            fromAmino(_: _243.MsgResumeHostZoneResponseAmino): _243.MsgResumeHostZoneResponse;
            toAmino(_: _243.MsgResumeHostZoneResponse): _243.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _243.MsgResumeHostZoneResponseAminoMsg): _243.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _243.MsgResumeHostZoneResponseProtoMsg): _243.MsgResumeHostZoneResponse;
            toProto(message: _243.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _243.MsgResumeHostZoneResponse): _243.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgCreateTradeRoute: {
            typeUrl: string;
            encode(message: _243.MsgCreateTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgCreateTradeRoute;
            fromPartial(object: Partial<_243.MsgCreateTradeRoute>): _243.MsgCreateTradeRoute;
            fromAmino(object: _243.MsgCreateTradeRouteAmino): _243.MsgCreateTradeRoute;
            toAmino(message: _243.MsgCreateTradeRoute): _243.MsgCreateTradeRouteAmino;
            fromAminoMsg(object: _243.MsgCreateTradeRouteAminoMsg): _243.MsgCreateTradeRoute;
            toAminoMsg(message: _243.MsgCreateTradeRoute): _243.MsgCreateTradeRouteAminoMsg;
            fromProtoMsg(message: _243.MsgCreateTradeRouteProtoMsg): _243.MsgCreateTradeRoute;
            toProto(message: _243.MsgCreateTradeRoute): Uint8Array;
            toProtoMsg(message: _243.MsgCreateTradeRoute): _243.MsgCreateTradeRouteProtoMsg;
        };
        MsgCreateTradeRouteResponse: {
            typeUrl: string;
            encode(_: _243.MsgCreateTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgCreateTradeRouteResponse;
            fromPartial(_: Partial<_243.MsgCreateTradeRouteResponse>): _243.MsgCreateTradeRouteResponse;
            fromAmino(_: _243.MsgCreateTradeRouteResponseAmino): _243.MsgCreateTradeRouteResponse;
            toAmino(_: _243.MsgCreateTradeRouteResponse): _243.MsgCreateTradeRouteResponseAmino;
            fromAminoMsg(object: _243.MsgCreateTradeRouteResponseAminoMsg): _243.MsgCreateTradeRouteResponse;
            fromProtoMsg(message: _243.MsgCreateTradeRouteResponseProtoMsg): _243.MsgCreateTradeRouteResponse;
            toProto(message: _243.MsgCreateTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _243.MsgCreateTradeRouteResponse): _243.MsgCreateTradeRouteResponseProtoMsg;
        };
        MsgDeleteTradeRoute: {
            typeUrl: string;
            encode(message: _243.MsgDeleteTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgDeleteTradeRoute;
            fromPartial(object: Partial<_243.MsgDeleteTradeRoute>): _243.MsgDeleteTradeRoute;
            fromAmino(object: _243.MsgDeleteTradeRouteAmino): _243.MsgDeleteTradeRoute;
            toAmino(message: _243.MsgDeleteTradeRoute): _243.MsgDeleteTradeRouteAmino;
            fromAminoMsg(object: _243.MsgDeleteTradeRouteAminoMsg): _243.MsgDeleteTradeRoute;
            toAminoMsg(message: _243.MsgDeleteTradeRoute): _243.MsgDeleteTradeRouteAminoMsg;
            fromProtoMsg(message: _243.MsgDeleteTradeRouteProtoMsg): _243.MsgDeleteTradeRoute;
            toProto(message: _243.MsgDeleteTradeRoute): Uint8Array;
            toProtoMsg(message: _243.MsgDeleteTradeRoute): _243.MsgDeleteTradeRouteProtoMsg;
        };
        MsgDeleteTradeRouteResponse: {
            typeUrl: string;
            encode(_: _243.MsgDeleteTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgDeleteTradeRouteResponse;
            fromPartial(_: Partial<_243.MsgDeleteTradeRouteResponse>): _243.MsgDeleteTradeRouteResponse;
            fromAmino(_: _243.MsgDeleteTradeRouteResponseAmino): _243.MsgDeleteTradeRouteResponse;
            toAmino(_: _243.MsgDeleteTradeRouteResponse): _243.MsgDeleteTradeRouteResponseAmino;
            fromAminoMsg(object: _243.MsgDeleteTradeRouteResponseAminoMsg): _243.MsgDeleteTradeRouteResponse;
            fromProtoMsg(message: _243.MsgDeleteTradeRouteResponseProtoMsg): _243.MsgDeleteTradeRouteResponse;
            toProto(message: _243.MsgDeleteTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _243.MsgDeleteTradeRouteResponse): _243.MsgDeleteTradeRouteResponseProtoMsg;
        };
        MsgUpdateTradeRoute: {
            typeUrl: string;
            encode(message: _243.MsgUpdateTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgUpdateTradeRoute;
            fromPartial(object: Partial<_243.MsgUpdateTradeRoute>): _243.MsgUpdateTradeRoute;
            fromAmino(object: _243.MsgUpdateTradeRouteAmino): _243.MsgUpdateTradeRoute;
            toAmino(message: _243.MsgUpdateTradeRoute): _243.MsgUpdateTradeRouteAmino;
            fromAminoMsg(object: _243.MsgUpdateTradeRouteAminoMsg): _243.MsgUpdateTradeRoute;
            toAminoMsg(message: _243.MsgUpdateTradeRoute): _243.MsgUpdateTradeRouteAminoMsg;
            fromProtoMsg(message: _243.MsgUpdateTradeRouteProtoMsg): _243.MsgUpdateTradeRoute;
            toProto(message: _243.MsgUpdateTradeRoute): Uint8Array;
            toProtoMsg(message: _243.MsgUpdateTradeRoute): _243.MsgUpdateTradeRouteProtoMsg;
        };
        MsgUpdateTradeRouteResponse: {
            typeUrl: string;
            encode(_: _243.MsgUpdateTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgUpdateTradeRouteResponse;
            fromPartial(_: Partial<_243.MsgUpdateTradeRouteResponse>): _243.MsgUpdateTradeRouteResponse;
            fromAmino(_: _243.MsgUpdateTradeRouteResponseAmino): _243.MsgUpdateTradeRouteResponse;
            toAmino(_: _243.MsgUpdateTradeRouteResponse): _243.MsgUpdateTradeRouteResponseAmino;
            fromAminoMsg(object: _243.MsgUpdateTradeRouteResponseAminoMsg): _243.MsgUpdateTradeRouteResponse;
            fromProtoMsg(message: _243.MsgUpdateTradeRouteResponseProtoMsg): _243.MsgUpdateTradeRouteResponse;
            toProto(message: _243.MsgUpdateTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _243.MsgUpdateTradeRouteResponse): _243.MsgUpdateTradeRouteResponseProtoMsg;
        };
        MsgSetCommunityPoolRebate: {
            typeUrl: string;
            encode(message: _243.MsgSetCommunityPoolRebate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgSetCommunityPoolRebate;
            fromPartial(object: Partial<_243.MsgSetCommunityPoolRebate>): _243.MsgSetCommunityPoolRebate;
            fromAmino(object: _243.MsgSetCommunityPoolRebateAmino): _243.MsgSetCommunityPoolRebate;
            toAmino(message: _243.MsgSetCommunityPoolRebate): _243.MsgSetCommunityPoolRebateAmino;
            fromAminoMsg(object: _243.MsgSetCommunityPoolRebateAminoMsg): _243.MsgSetCommunityPoolRebate;
            toAminoMsg(message: _243.MsgSetCommunityPoolRebate): _243.MsgSetCommunityPoolRebateAminoMsg;
            fromProtoMsg(message: _243.MsgSetCommunityPoolRebateProtoMsg): _243.MsgSetCommunityPoolRebate;
            toProto(message: _243.MsgSetCommunityPoolRebate): Uint8Array;
            toProtoMsg(message: _243.MsgSetCommunityPoolRebate): _243.MsgSetCommunityPoolRebateProtoMsg;
        };
        MsgSetCommunityPoolRebateResponse: {
            typeUrl: string;
            encode(_: _243.MsgSetCommunityPoolRebateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgSetCommunityPoolRebateResponse;
            fromPartial(_: Partial<_243.MsgSetCommunityPoolRebateResponse>): _243.MsgSetCommunityPoolRebateResponse;
            fromAmino(_: _243.MsgSetCommunityPoolRebateResponseAmino): _243.MsgSetCommunityPoolRebateResponse;
            toAmino(_: _243.MsgSetCommunityPoolRebateResponse): _243.MsgSetCommunityPoolRebateResponseAmino;
            fromAminoMsg(object: _243.MsgSetCommunityPoolRebateResponseAminoMsg): _243.MsgSetCommunityPoolRebateResponse;
            fromProtoMsg(message: _243.MsgSetCommunityPoolRebateResponseProtoMsg): _243.MsgSetCommunityPoolRebateResponse;
            toProto(message: _243.MsgSetCommunityPoolRebateResponse): Uint8Array;
            toProtoMsg(message: _243.MsgSetCommunityPoolRebateResponse): _243.MsgSetCommunityPoolRebateResponseProtoMsg;
        };
        MsgToggleTradeController: {
            typeUrl: string;
            encode(message: _243.MsgToggleTradeController, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgToggleTradeController;
            fromPartial(object: Partial<_243.MsgToggleTradeController>): _243.MsgToggleTradeController;
            fromAmino(object: _243.MsgToggleTradeControllerAmino): _243.MsgToggleTradeController;
            toAmino(message: _243.MsgToggleTradeController): _243.MsgToggleTradeControllerAmino;
            fromAminoMsg(object: _243.MsgToggleTradeControllerAminoMsg): _243.MsgToggleTradeController;
            toAminoMsg(message: _243.MsgToggleTradeController): _243.MsgToggleTradeControllerAminoMsg;
            fromProtoMsg(message: _243.MsgToggleTradeControllerProtoMsg): _243.MsgToggleTradeController;
            toProto(message: _243.MsgToggleTradeController): Uint8Array;
            toProtoMsg(message: _243.MsgToggleTradeController): _243.MsgToggleTradeControllerProtoMsg;
        };
        MsgToggleTradeControllerResponse: {
            typeUrl: string;
            encode(_: _243.MsgToggleTradeControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgToggleTradeControllerResponse;
            fromPartial(_: Partial<_243.MsgToggleTradeControllerResponse>): _243.MsgToggleTradeControllerResponse;
            fromAmino(_: _243.MsgToggleTradeControllerResponseAmino): _243.MsgToggleTradeControllerResponse;
            toAmino(_: _243.MsgToggleTradeControllerResponse): _243.MsgToggleTradeControllerResponseAmino;
            fromAminoMsg(object: _243.MsgToggleTradeControllerResponseAminoMsg): _243.MsgToggleTradeControllerResponse;
            fromProtoMsg(message: _243.MsgToggleTradeControllerResponseProtoMsg): _243.MsgToggleTradeControllerResponse;
            toProto(message: _243.MsgToggleTradeControllerResponse): Uint8Array;
            toProtoMsg(message: _243.MsgToggleTradeControllerResponse): _243.MsgToggleTradeControllerResponseProtoMsg;
        };
        MsgUpdateHostZoneParams: {
            typeUrl: string;
            encode(message: _243.MsgUpdateHostZoneParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgUpdateHostZoneParams;
            fromPartial(object: Partial<_243.MsgUpdateHostZoneParams>): _243.MsgUpdateHostZoneParams;
            fromAmino(object: _243.MsgUpdateHostZoneParamsAmino): _243.MsgUpdateHostZoneParams;
            toAmino(message: _243.MsgUpdateHostZoneParams): _243.MsgUpdateHostZoneParamsAmino;
            fromAminoMsg(object: _243.MsgUpdateHostZoneParamsAminoMsg): _243.MsgUpdateHostZoneParams;
            toAminoMsg(message: _243.MsgUpdateHostZoneParams): _243.MsgUpdateHostZoneParamsAminoMsg;
            fromProtoMsg(message: _243.MsgUpdateHostZoneParamsProtoMsg): _243.MsgUpdateHostZoneParams;
            toProto(message: _243.MsgUpdateHostZoneParams): Uint8Array;
            toProtoMsg(message: _243.MsgUpdateHostZoneParams): _243.MsgUpdateHostZoneParamsProtoMsg;
        };
        MsgUpdateHostZoneParamsResponse: {
            typeUrl: string;
            encode(_: _243.MsgUpdateHostZoneParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _243.MsgUpdateHostZoneParamsResponse;
            fromPartial(_: Partial<_243.MsgUpdateHostZoneParamsResponse>): _243.MsgUpdateHostZoneParamsResponse;
            fromAmino(_: _243.MsgUpdateHostZoneParamsResponseAmino): _243.MsgUpdateHostZoneParamsResponse;
            toAmino(_: _243.MsgUpdateHostZoneParamsResponse): _243.MsgUpdateHostZoneParamsResponseAmino;
            fromAminoMsg(object: _243.MsgUpdateHostZoneParamsResponseAminoMsg): _243.MsgUpdateHostZoneParamsResponse;
            fromProtoMsg(message: _243.MsgUpdateHostZoneParamsResponseProtoMsg): _243.MsgUpdateHostZoneParamsResponse;
            toProto(message: _243.MsgUpdateHostZoneParamsResponse): Uint8Array;
            toProtoMsg(message: _243.MsgUpdateHostZoneParamsResponse): _243.MsgUpdateHostZoneParamsResponseProtoMsg;
        };
        TradeConfig: {
            typeUrl: string;
            encode(message: _242.TradeConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.TradeConfig;
            fromPartial(object: Partial<_242.TradeConfig>): _242.TradeConfig;
            fromAmino(object: _242.TradeConfigAmino): _242.TradeConfig;
            toAmino(message: _242.TradeConfig): _242.TradeConfigAmino;
            fromAminoMsg(object: _242.TradeConfigAminoMsg): _242.TradeConfig;
            fromProtoMsg(message: _242.TradeConfigProtoMsg): _242.TradeConfig;
            toProto(message: _242.TradeConfig): Uint8Array;
            toProtoMsg(message: _242.TradeConfig): _242.TradeConfigProtoMsg;
        };
        TradeRoute: {
            typeUrl: string;
            encode(message: _242.TradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _242.TradeRoute;
            fromPartial(object: Partial<_242.TradeRoute>): _242.TradeRoute;
            fromAmino(object: _242.TradeRouteAmino): _242.TradeRoute;
            toAmino(message: _242.TradeRoute): _242.TradeRouteAmino;
            fromAminoMsg(object: _242.TradeRouteAminoMsg): _242.TradeRoute;
            fromProtoMsg(message: _242.TradeRouteProtoMsg): _242.TradeRoute;
            toProto(message: _242.TradeRoute): Uint8Array;
            toProtoMsg(message: _242.TradeRoute): _242.TradeRouteProtoMsg;
        };
        QueryInterchainAccountFromAddressRequest: {
            typeUrl: string;
            encode(message: _241.QueryInterchainAccountFromAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.QueryInterchainAccountFromAddressRequest;
            fromPartial(object: Partial<_241.QueryInterchainAccountFromAddressRequest>): _241.QueryInterchainAccountFromAddressRequest;
            fromAmino(object: _241.QueryInterchainAccountFromAddressRequestAmino): _241.QueryInterchainAccountFromAddressRequest;
            toAmino(message: _241.QueryInterchainAccountFromAddressRequest): _241.QueryInterchainAccountFromAddressRequestAmino;
            fromAminoMsg(object: _241.QueryInterchainAccountFromAddressRequestAminoMsg): _241.QueryInterchainAccountFromAddressRequest;
            fromProtoMsg(message: _241.QueryInterchainAccountFromAddressRequestProtoMsg): _241.QueryInterchainAccountFromAddressRequest;
            toProto(message: _241.QueryInterchainAccountFromAddressRequest): Uint8Array;
            toProtoMsg(message: _241.QueryInterchainAccountFromAddressRequest): _241.QueryInterchainAccountFromAddressRequestProtoMsg;
        };
        QueryInterchainAccountFromAddressResponse: {
            typeUrl: string;
            encode(message: _241.QueryInterchainAccountFromAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.QueryInterchainAccountFromAddressResponse;
            fromPartial(object: Partial<_241.QueryInterchainAccountFromAddressResponse>): _241.QueryInterchainAccountFromAddressResponse;
            fromAmino(object: _241.QueryInterchainAccountFromAddressResponseAmino): _241.QueryInterchainAccountFromAddressResponse;
            toAmino(message: _241.QueryInterchainAccountFromAddressResponse): _241.QueryInterchainAccountFromAddressResponseAmino;
            fromAminoMsg(object: _241.QueryInterchainAccountFromAddressResponseAminoMsg): _241.QueryInterchainAccountFromAddressResponse;
            fromProtoMsg(message: _241.QueryInterchainAccountFromAddressResponseProtoMsg): _241.QueryInterchainAccountFromAddressResponse;
            toProto(message: _241.QueryInterchainAccountFromAddressResponse): Uint8Array;
            toProtoMsg(message: _241.QueryInterchainAccountFromAddressResponse): _241.QueryInterchainAccountFromAddressResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _241.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.QueryParamsRequest;
            fromPartial(_: Partial<_241.QueryParamsRequest>): _241.QueryParamsRequest;
            fromAmino(_: _241.QueryParamsRequestAmino): _241.QueryParamsRequest;
            toAmino(_: _241.QueryParamsRequest): _241.QueryParamsRequestAmino;
            fromAminoMsg(object: _241.QueryParamsRequestAminoMsg): _241.QueryParamsRequest;
            fromProtoMsg(message: _241.QueryParamsRequestProtoMsg): _241.QueryParamsRequest;
            toProto(message: _241.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _241.QueryParamsRequest): _241.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _241.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.QueryParamsResponse;
            fromPartial(object: Partial<_241.QueryParamsResponse>): _241.QueryParamsResponse;
            fromAmino(object: _241.QueryParamsResponseAmino): _241.QueryParamsResponse;
            toAmino(message: _241.QueryParamsResponse): _241.QueryParamsResponseAmino;
            fromAminoMsg(object: _241.QueryParamsResponseAminoMsg): _241.QueryParamsResponse;
            fromProtoMsg(message: _241.QueryParamsResponseProtoMsg): _241.QueryParamsResponse;
            toProto(message: _241.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _241.QueryParamsResponse): _241.QueryParamsResponseProtoMsg;
        };
        QueryGetValidatorsRequest: {
            typeUrl: string;
            encode(message: _241.QueryGetValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.QueryGetValidatorsRequest;
            fromPartial(object: Partial<_241.QueryGetValidatorsRequest>): _241.QueryGetValidatorsRequest;
            fromAmino(object: _241.QueryGetValidatorsRequestAmino): _241.QueryGetValidatorsRequest;
            toAmino(message: _241.QueryGetValidatorsRequest): _241.QueryGetValidatorsRequestAmino;
            fromAminoMsg(object: _241.QueryGetValidatorsRequestAminoMsg): _241.QueryGetValidatorsRequest;
            fromProtoMsg(message: _241.QueryGetValidatorsRequestProtoMsg): _241.QueryGetValidatorsRequest;
            toProto(message: _241.QueryGetValidatorsRequest): Uint8Array;
            toProtoMsg(message: _241.QueryGetValidatorsRequest): _241.QueryGetValidatorsRequestProtoMsg;
        };
        QueryGetValidatorsResponse: {
            typeUrl: string;
            encode(message: _241.QueryGetValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.QueryGetValidatorsResponse;
            fromPartial(object: Partial<_241.QueryGetValidatorsResponse>): _241.QueryGetValidatorsResponse;
            fromAmino(object: _241.QueryGetValidatorsResponseAmino): _241.QueryGetValidatorsResponse;
            toAmino(message: _241.QueryGetValidatorsResponse): _241.QueryGetValidatorsResponseAmino;
            fromAminoMsg(object: _241.QueryGetValidatorsResponseAminoMsg): _241.QueryGetValidatorsResponse;
            fromProtoMsg(message: _241.QueryGetValidatorsResponseProtoMsg): _241.QueryGetValidatorsResponse;
            toProto(message: _241.QueryGetValidatorsResponse): Uint8Array;
            toProtoMsg(message: _241.QueryGetValidatorsResponse): _241.QueryGetValidatorsResponseProtoMsg;
        };
        QueryGetHostZoneRequest: {
            typeUrl: string;
            encode(message: _241.QueryGetHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.QueryGetHostZoneRequest;
            fromPartial(object: Partial<_241.QueryGetHostZoneRequest>): _241.QueryGetHostZoneRequest;
            fromAmino(object: _241.QueryGetHostZoneRequestAmino): _241.QueryGetHostZoneRequest;
            toAmino(message: _241.QueryGetHostZoneRequest): _241.QueryGetHostZoneRequestAmino;
            fromAminoMsg(object: _241.QueryGetHostZoneRequestAminoMsg): _241.QueryGetHostZoneRequest;
            fromProtoMsg(message: _241.QueryGetHostZoneRequestProtoMsg): _241.QueryGetHostZoneRequest;
            toProto(message: _241.QueryGetHostZoneRequest): Uint8Array;
            toProtoMsg(message: _241.QueryGetHostZoneRequest): _241.QueryGetHostZoneRequestProtoMsg;
        };
        QueryGetHostZoneResponse: {
            typeUrl: string;
            encode(message: _241.QueryGetHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.QueryGetHostZoneResponse;
            fromPartial(object: Partial<_241.QueryGetHostZoneResponse>): _241.QueryGetHostZoneResponse;
            fromAmino(object: _241.QueryGetHostZoneResponseAmino): _241.QueryGetHostZoneResponse;
            toAmino(message: _241.QueryGetHostZoneResponse): _241.QueryGetHostZoneResponseAmino;
            fromAminoMsg(object: _241.QueryGetHostZoneResponseAminoMsg): _241.QueryGetHostZoneResponse;
            fromProtoMsg(message: _241.QueryGetHostZoneResponseProtoMsg): _241.QueryGetHostZoneResponse;
            toProto(message: _241.QueryGetHostZoneResponse): Uint8Array;
            toProtoMsg(message: _241.QueryGetHostZoneResponse): _241.QueryGetHostZoneResponseProtoMsg;
        };
        QueryAllHostZoneRequest: {
            typeUrl: string;
            encode(message: _241.QueryAllHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.QueryAllHostZoneRequest;
            fromPartial(object: Partial<_241.QueryAllHostZoneRequest>): _241.QueryAllHostZoneRequest;
            fromAmino(object: _241.QueryAllHostZoneRequestAmino): _241.QueryAllHostZoneRequest;
            toAmino(message: _241.QueryAllHostZoneRequest): _241.QueryAllHostZoneRequestAmino;
            fromAminoMsg(object: _241.QueryAllHostZoneRequestAminoMsg): _241.QueryAllHostZoneRequest;
            fromProtoMsg(message: _241.QueryAllHostZoneRequestProtoMsg): _241.QueryAllHostZoneRequest;
            toProto(message: _241.QueryAllHostZoneRequest): Uint8Array;
            toProtoMsg(message: _241.QueryAllHostZoneRequest): _241.QueryAllHostZoneRequestProtoMsg;
        };
        QueryAllHostZoneResponse: {
            typeUrl: string;
            encode(message: _241.QueryAllHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.QueryAllHostZoneResponse;
            fromPartial(object: Partial<_241.QueryAllHostZoneResponse>): _241.QueryAllHostZoneResponse;
            fromAmino(object: _241.QueryAllHostZoneResponseAmino): _241.QueryAllHostZoneResponse;
            toAmino(message: _241.QueryAllHostZoneResponse): _241.QueryAllHostZoneResponseAmino;
            fromAminoMsg(object: _241.QueryAllHostZoneResponseAminoMsg): _241.QueryAllHostZoneResponse;
            fromProtoMsg(message: _241.QueryAllHostZoneResponseProtoMsg): _241.QueryAllHostZoneResponse;
            toProto(message: _241.QueryAllHostZoneResponse): Uint8Array;
            toProtoMsg(message: _241.QueryAllHostZoneResponse): _241.QueryAllHostZoneResponseProtoMsg;
        };
        QueryModuleAddressRequest: {
            typeUrl: string;
            encode(message: _241.QueryModuleAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.QueryModuleAddressRequest;
            fromPartial(object: Partial<_241.QueryModuleAddressRequest>): _241.QueryModuleAddressRequest;
            fromAmino(object: _241.QueryModuleAddressRequestAmino): _241.QueryModuleAddressRequest;
            toAmino(message: _241.QueryModuleAddressRequest): _241.QueryModuleAddressRequestAmino;
            fromAminoMsg(object: _241.QueryModuleAddressRequestAminoMsg): _241.QueryModuleAddressRequest;
            fromProtoMsg(message: _241.QueryModuleAddressRequestProtoMsg): _241.QueryModuleAddressRequest;
            toProto(message: _241.QueryModuleAddressRequest): Uint8Array;
            toProtoMsg(message: _241.QueryModuleAddressRequest): _241.QueryModuleAddressRequestProtoMsg;
        };
        QueryModuleAddressResponse: {
            typeUrl: string;
            encode(message: _241.QueryModuleAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.QueryModuleAddressResponse;
            fromPartial(object: Partial<_241.QueryModuleAddressResponse>): _241.QueryModuleAddressResponse;
            fromAmino(object: _241.QueryModuleAddressResponseAmino): _241.QueryModuleAddressResponse;
            toAmino(message: _241.QueryModuleAddressResponse): _241.QueryModuleAddressResponseAmino;
            fromAminoMsg(object: _241.QueryModuleAddressResponseAminoMsg): _241.QueryModuleAddressResponse;
            fromProtoMsg(message: _241.QueryModuleAddressResponseProtoMsg): _241.QueryModuleAddressResponse;
            toProto(message: _241.QueryModuleAddressResponse): Uint8Array;
            toProtoMsg(message: _241.QueryModuleAddressResponse): _241.QueryModuleAddressResponseProtoMsg;
        };
        QueryGetEpochTrackerRequest: {
            typeUrl: string;
            encode(message: _241.QueryGetEpochTrackerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.QueryGetEpochTrackerRequest;
            fromPartial(object: Partial<_241.QueryGetEpochTrackerRequest>): _241.QueryGetEpochTrackerRequest;
            fromAmino(object: _241.QueryGetEpochTrackerRequestAmino): _241.QueryGetEpochTrackerRequest;
            toAmino(message: _241.QueryGetEpochTrackerRequest): _241.QueryGetEpochTrackerRequestAmino;
            fromAminoMsg(object: _241.QueryGetEpochTrackerRequestAminoMsg): _241.QueryGetEpochTrackerRequest;
            fromProtoMsg(message: _241.QueryGetEpochTrackerRequestProtoMsg): _241.QueryGetEpochTrackerRequest;
            toProto(message: _241.QueryGetEpochTrackerRequest): Uint8Array;
            toProtoMsg(message: _241.QueryGetEpochTrackerRequest): _241.QueryGetEpochTrackerRequestProtoMsg;
        };
        QueryGetEpochTrackerResponse: {
            typeUrl: string;
            encode(message: _241.QueryGetEpochTrackerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.QueryGetEpochTrackerResponse;
            fromPartial(object: Partial<_241.QueryGetEpochTrackerResponse>): _241.QueryGetEpochTrackerResponse;
            fromAmino(object: _241.QueryGetEpochTrackerResponseAmino): _241.QueryGetEpochTrackerResponse;
            toAmino(message: _241.QueryGetEpochTrackerResponse): _241.QueryGetEpochTrackerResponseAmino;
            fromAminoMsg(object: _241.QueryGetEpochTrackerResponseAminoMsg): _241.QueryGetEpochTrackerResponse;
            fromProtoMsg(message: _241.QueryGetEpochTrackerResponseProtoMsg): _241.QueryGetEpochTrackerResponse;
            toProto(message: _241.QueryGetEpochTrackerResponse): Uint8Array;
            toProtoMsg(message: _241.QueryGetEpochTrackerResponse): _241.QueryGetEpochTrackerResponseProtoMsg;
        };
        QueryAllEpochTrackerRequest: {
            typeUrl: string;
            encode(_: _241.QueryAllEpochTrackerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.QueryAllEpochTrackerRequest;
            fromPartial(_: Partial<_241.QueryAllEpochTrackerRequest>): _241.QueryAllEpochTrackerRequest;
            fromAmino(_: _241.QueryAllEpochTrackerRequestAmino): _241.QueryAllEpochTrackerRequest;
            toAmino(_: _241.QueryAllEpochTrackerRequest): _241.QueryAllEpochTrackerRequestAmino;
            fromAminoMsg(object: _241.QueryAllEpochTrackerRequestAminoMsg): _241.QueryAllEpochTrackerRequest;
            fromProtoMsg(message: _241.QueryAllEpochTrackerRequestProtoMsg): _241.QueryAllEpochTrackerRequest;
            toProto(message: _241.QueryAllEpochTrackerRequest): Uint8Array;
            toProtoMsg(message: _241.QueryAllEpochTrackerRequest): _241.QueryAllEpochTrackerRequestProtoMsg;
        };
        QueryAllEpochTrackerResponse: {
            typeUrl: string;
            encode(message: _241.QueryAllEpochTrackerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.QueryAllEpochTrackerResponse;
            fromPartial(object: Partial<_241.QueryAllEpochTrackerResponse>): _241.QueryAllEpochTrackerResponse;
            fromAmino(object: _241.QueryAllEpochTrackerResponseAmino): _241.QueryAllEpochTrackerResponse;
            toAmino(message: _241.QueryAllEpochTrackerResponse): _241.QueryAllEpochTrackerResponseAmino;
            fromAminoMsg(object: _241.QueryAllEpochTrackerResponseAminoMsg): _241.QueryAllEpochTrackerResponse;
            fromProtoMsg(message: _241.QueryAllEpochTrackerResponseProtoMsg): _241.QueryAllEpochTrackerResponse;
            toProto(message: _241.QueryAllEpochTrackerResponse): Uint8Array;
            toProtoMsg(message: _241.QueryAllEpochTrackerResponse): _241.QueryAllEpochTrackerResponseProtoMsg;
        };
        QueryGetNextPacketSequenceRequest: {
            typeUrl: string;
            encode(message: _241.QueryGetNextPacketSequenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.QueryGetNextPacketSequenceRequest;
            fromPartial(object: Partial<_241.QueryGetNextPacketSequenceRequest>): _241.QueryGetNextPacketSequenceRequest;
            fromAmino(object: _241.QueryGetNextPacketSequenceRequestAmino): _241.QueryGetNextPacketSequenceRequest;
            toAmino(message: _241.QueryGetNextPacketSequenceRequest): _241.QueryGetNextPacketSequenceRequestAmino;
            fromAminoMsg(object: _241.QueryGetNextPacketSequenceRequestAminoMsg): _241.QueryGetNextPacketSequenceRequest;
            fromProtoMsg(message: _241.QueryGetNextPacketSequenceRequestProtoMsg): _241.QueryGetNextPacketSequenceRequest;
            toProto(message: _241.QueryGetNextPacketSequenceRequest): Uint8Array;
            toProtoMsg(message: _241.QueryGetNextPacketSequenceRequest): _241.QueryGetNextPacketSequenceRequestProtoMsg;
        };
        QueryGetNextPacketSequenceResponse: {
            typeUrl: string;
            encode(message: _241.QueryGetNextPacketSequenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.QueryGetNextPacketSequenceResponse;
            fromPartial(object: Partial<_241.QueryGetNextPacketSequenceResponse>): _241.QueryGetNextPacketSequenceResponse;
            fromAmino(object: _241.QueryGetNextPacketSequenceResponseAmino): _241.QueryGetNextPacketSequenceResponse;
            toAmino(message: _241.QueryGetNextPacketSequenceResponse): _241.QueryGetNextPacketSequenceResponseAmino;
            fromAminoMsg(object: _241.QueryGetNextPacketSequenceResponseAminoMsg): _241.QueryGetNextPacketSequenceResponse;
            fromProtoMsg(message: _241.QueryGetNextPacketSequenceResponseProtoMsg): _241.QueryGetNextPacketSequenceResponse;
            toProto(message: _241.QueryGetNextPacketSequenceResponse): Uint8Array;
            toProtoMsg(message: _241.QueryGetNextPacketSequenceResponse): _241.QueryGetNextPacketSequenceResponseProtoMsg;
        };
        QueryAddressUnbondings: {
            typeUrl: string;
            encode(message: _241.QueryAddressUnbondings, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.QueryAddressUnbondings;
            fromPartial(object: Partial<_241.QueryAddressUnbondings>): _241.QueryAddressUnbondings;
            fromAmino(object: _241.QueryAddressUnbondingsAmino): _241.QueryAddressUnbondings;
            toAmino(message: _241.QueryAddressUnbondings): _241.QueryAddressUnbondingsAmino;
            fromAminoMsg(object: _241.QueryAddressUnbondingsAminoMsg): _241.QueryAddressUnbondings;
            fromProtoMsg(message: _241.QueryAddressUnbondingsProtoMsg): _241.QueryAddressUnbondings;
            toProto(message: _241.QueryAddressUnbondings): Uint8Array;
            toProtoMsg(message: _241.QueryAddressUnbondings): _241.QueryAddressUnbondingsProtoMsg;
        };
        QueryAddressUnbondingsResponse: {
            typeUrl: string;
            encode(message: _241.QueryAddressUnbondingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.QueryAddressUnbondingsResponse;
            fromPartial(object: Partial<_241.QueryAddressUnbondingsResponse>): _241.QueryAddressUnbondingsResponse;
            fromAmino(object: _241.QueryAddressUnbondingsResponseAmino): _241.QueryAddressUnbondingsResponse;
            toAmino(message: _241.QueryAddressUnbondingsResponse): _241.QueryAddressUnbondingsResponseAmino;
            fromAminoMsg(object: _241.QueryAddressUnbondingsResponseAminoMsg): _241.QueryAddressUnbondingsResponse;
            fromProtoMsg(message: _241.QueryAddressUnbondingsResponseProtoMsg): _241.QueryAddressUnbondingsResponse;
            toProto(message: _241.QueryAddressUnbondingsResponse): Uint8Array;
            toProtoMsg(message: _241.QueryAddressUnbondingsResponse): _241.QueryAddressUnbondingsResponseProtoMsg;
        };
        QueryAllTradeRoutes: {
            typeUrl: string;
            encode(_: _241.QueryAllTradeRoutes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.QueryAllTradeRoutes;
            fromPartial(_: Partial<_241.QueryAllTradeRoutes>): _241.QueryAllTradeRoutes;
            fromAmino(_: _241.QueryAllTradeRoutesAmino): _241.QueryAllTradeRoutes;
            toAmino(_: _241.QueryAllTradeRoutes): _241.QueryAllTradeRoutesAmino;
            fromAminoMsg(object: _241.QueryAllTradeRoutesAminoMsg): _241.QueryAllTradeRoutes;
            fromProtoMsg(message: _241.QueryAllTradeRoutesProtoMsg): _241.QueryAllTradeRoutes;
            toProto(message: _241.QueryAllTradeRoutes): Uint8Array;
            toProtoMsg(message: _241.QueryAllTradeRoutes): _241.QueryAllTradeRoutesProtoMsg;
        };
        QueryAllTradeRoutesResponse: {
            typeUrl: string;
            encode(message: _241.QueryAllTradeRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _241.QueryAllTradeRoutesResponse;
            fromPartial(object: Partial<_241.QueryAllTradeRoutesResponse>): _241.QueryAllTradeRoutesResponse;
            fromAmino(object: _241.QueryAllTradeRoutesResponseAmino): _241.QueryAllTradeRoutesResponse;
            toAmino(message: _241.QueryAllTradeRoutesResponse): _241.QueryAllTradeRoutesResponseAmino;
            fromAminoMsg(object: _241.QueryAllTradeRoutesResponseAminoMsg): _241.QueryAllTradeRoutesResponse;
            fromProtoMsg(message: _241.QueryAllTradeRoutesResponseProtoMsg): _241.QueryAllTradeRoutesResponse;
            toProto(message: _241.QueryAllTradeRoutesResponse): Uint8Array;
            toProtoMsg(message: _241.QueryAllTradeRoutesResponse): _241.QueryAllTradeRoutesResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _240.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _240.Params;
            fromPartial(object: Partial<_240.Params>): _240.Params;
            fromAmino(object: _240.ParamsAmino): _240.Params;
            toAmino(message: _240.Params): _240.ParamsAmino;
            fromAminoMsg(object: _240.ParamsAminoMsg): _240.Params;
            fromProtoMsg(message: _240.ParamsProtoMsg): _240.Params;
            toProto(message: _240.Params): Uint8Array;
            toProtoMsg(message: _240.Params): _240.ParamsProtoMsg;
        };
        StakeibcPacketData: {
            typeUrl: string;
            encode(message: _239.StakeibcPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _239.StakeibcPacketData;
            fromPartial(object: Partial<_239.StakeibcPacketData>): _239.StakeibcPacketData;
            fromAmino(object: _239.StakeibcPacketDataAmino): _239.StakeibcPacketData;
            toAmino(message: _239.StakeibcPacketData): _239.StakeibcPacketDataAmino;
            fromAminoMsg(object: _239.StakeibcPacketDataAminoMsg): _239.StakeibcPacketData;
            fromProtoMsg(message: _239.StakeibcPacketDataProtoMsg): _239.StakeibcPacketData;
            toProto(message: _239.StakeibcPacketData): Uint8Array;
            toProtoMsg(message: _239.StakeibcPacketData): _239.StakeibcPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _239.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _239.NoData;
            fromPartial(_: Partial<_239.NoData>): _239.NoData;
            fromAmino(_: _239.NoDataAmino): _239.NoData;
            toAmino(_: _239.NoData): _239.NoDataAmino;
            fromAminoMsg(object: _239.NoDataAminoMsg): _239.NoData;
            fromProtoMsg(message: _239.NoDataProtoMsg): _239.NoData;
            toProto(message: _239.NoData): Uint8Array;
            toProtoMsg(message: _239.NoData): _239.NoDataProtoMsg;
        };
        iCAAccountTypeFromJSON(object: any): _238.ICAAccountType;
        iCAAccountTypeToJSON(object: _238.ICAAccountType): string;
        ICAAccountType: typeof _238.ICAAccountType;
        ICAAccountTypeSDKType: typeof _238.ICAAccountType;
        ICAAccountTypeAmino: typeof _238.ICAAccountType;
        ICAAccount: {
            typeUrl: string;
            encode(message: _238.ICAAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _238.ICAAccount;
            fromPartial(object: Partial<_238.ICAAccount>): _238.ICAAccount;
            fromAmino(object: _238.ICAAccountAmino): _238.ICAAccount;
            toAmino(message: _238.ICAAccount): _238.ICAAccountAmino;
            fromAminoMsg(object: _238.ICAAccountAminoMsg): _238.ICAAccount;
            fromProtoMsg(message: _238.ICAAccountProtoMsg): _238.ICAAccount;
            toProto(message: _238.ICAAccount): Uint8Array;
            toProtoMsg(message: _238.ICAAccount): _238.ICAAccountProtoMsg;
        };
        CommunityPoolRebate: {
            typeUrl: string;
            encode(message: _237.CommunityPoolRebate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _237.CommunityPoolRebate;
            fromPartial(object: Partial<_237.CommunityPoolRebate>): _237.CommunityPoolRebate;
            fromAmino(object: _237.CommunityPoolRebateAmino): _237.CommunityPoolRebate;
            toAmino(message: _237.CommunityPoolRebate): _237.CommunityPoolRebateAmino;
            fromAminoMsg(object: _237.CommunityPoolRebateAminoMsg): _237.CommunityPoolRebate;
            fromProtoMsg(message: _237.CommunityPoolRebateProtoMsg): _237.CommunityPoolRebate;
            toProto(message: _237.CommunityPoolRebate): Uint8Array;
            toProtoMsg(message: _237.CommunityPoolRebate): _237.CommunityPoolRebateProtoMsg;
        };
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
        AddValidatorsProposal: {
            typeUrl: string;
            encode(message: _236.AddValidatorsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.AddValidatorsProposal;
            fromPartial(object: Partial<_236.AddValidatorsProposal>): _236.AddValidatorsProposal;
            fromAmino(object: _236.AddValidatorsProposalAmino): _236.AddValidatorsProposal;
            toAmino(message: _236.AddValidatorsProposal): _236.AddValidatorsProposalAmino;
            fromAminoMsg(object: _236.AddValidatorsProposalAminoMsg): _236.AddValidatorsProposal;
            fromProtoMsg(message: _236.AddValidatorsProposalProtoMsg): _236.AddValidatorsProposal;
            toProto(message: _236.AddValidatorsProposal): Uint8Array;
            toProtoMsg(message: _236.AddValidatorsProposal): _236.AddValidatorsProposalProtoMsg;
        };
        ToggleLSMProposal: {
            typeUrl: string;
            encode(message: _236.ToggleLSMProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _236.ToggleLSMProposal;
            fromPartial(object: Partial<_236.ToggleLSMProposal>): _236.ToggleLSMProposal;
            fromAmino(object: _236.ToggleLSMProposalAmino): _236.ToggleLSMProposal;
            toAmino(message: _236.ToggleLSMProposal): _236.ToggleLSMProposalAmino;
            fromAminoMsg(object: _236.ToggleLSMProposalAminoMsg): _236.ToggleLSMProposal;
            fromProtoMsg(message: _236.ToggleLSMProposalProtoMsg): _236.ToggleLSMProposal;
            toProto(message: _236.ToggleLSMProposal): Uint8Array;
            toProtoMsg(message: _236.ToggleLSMProposal): _236.ToggleLSMProposalProtoMsg;
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
        EpochTracker: {
            typeUrl: string;
            encode(message: _234.EpochTracker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _234.EpochTracker;
            fromPartial(object: Partial<_234.EpochTracker>): _234.EpochTracker;
            fromAmino(object: _234.EpochTrackerAmino): _234.EpochTracker;
            toAmino(message: _234.EpochTracker): _234.EpochTrackerAmino;
            fromAminoMsg(object: _234.EpochTrackerAminoMsg): _234.EpochTracker;
            fromProtoMsg(message: _234.EpochTrackerProtoMsg): _234.EpochTracker;
            toProto(message: _234.EpochTracker): Uint8Array;
            toProtoMsg(message: _234.EpochTracker): _234.EpochTrackerProtoMsg;
        };
        SplitDelegation: {
            typeUrl: string;
            encode(message: _233.SplitDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.SplitDelegation;
            fromPartial(object: Partial<_233.SplitDelegation>): _233.SplitDelegation;
            fromAmino(object: _233.SplitDelegationAmino): _233.SplitDelegation;
            toAmino(message: _233.SplitDelegation): _233.SplitDelegationAmino;
            fromAminoMsg(object: _233.SplitDelegationAminoMsg): _233.SplitDelegation;
            fromProtoMsg(message: _233.SplitDelegationProtoMsg): _233.SplitDelegation;
            toProto(message: _233.SplitDelegation): Uint8Array;
            toProtoMsg(message: _233.SplitDelegation): _233.SplitDelegationProtoMsg;
        };
        SplitUndelegation: {
            typeUrl: string;
            encode(message: _233.SplitUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.SplitUndelegation;
            fromPartial(object: Partial<_233.SplitUndelegation>): _233.SplitUndelegation;
            fromAmino(object: _233.SplitUndelegationAmino): _233.SplitUndelegation;
            toAmino(message: _233.SplitUndelegation): _233.SplitUndelegationAmino;
            fromAminoMsg(object: _233.SplitUndelegationAminoMsg): _233.SplitUndelegation;
            fromProtoMsg(message: _233.SplitUndelegationProtoMsg): _233.SplitUndelegation;
            toProto(message: _233.SplitUndelegation): Uint8Array;
            toProtoMsg(message: _233.SplitUndelegation): _233.SplitUndelegationProtoMsg;
        };
        DelegateCallback: {
            typeUrl: string;
            encode(message: _233.DelegateCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.DelegateCallback;
            fromPartial(object: Partial<_233.DelegateCallback>): _233.DelegateCallback;
            fromAmino(object: _233.DelegateCallbackAmino): _233.DelegateCallback;
            toAmino(message: _233.DelegateCallback): _233.DelegateCallbackAmino;
            fromAminoMsg(object: _233.DelegateCallbackAminoMsg): _233.DelegateCallback;
            fromProtoMsg(message: _233.DelegateCallbackProtoMsg): _233.DelegateCallback;
            toProto(message: _233.DelegateCallback): Uint8Array;
            toProtoMsg(message: _233.DelegateCallback): _233.DelegateCallbackProtoMsg;
        };
        ClaimCallback: {
            typeUrl: string;
            encode(message: _233.ClaimCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.ClaimCallback;
            fromPartial(object: Partial<_233.ClaimCallback>): _233.ClaimCallback;
            fromAmino(object: _233.ClaimCallbackAmino): _233.ClaimCallback;
            toAmino(message: _233.ClaimCallback): _233.ClaimCallbackAmino;
            fromAminoMsg(object: _233.ClaimCallbackAminoMsg): _233.ClaimCallback;
            fromProtoMsg(message: _233.ClaimCallbackProtoMsg): _233.ClaimCallback;
            toProto(message: _233.ClaimCallback): Uint8Array;
            toProtoMsg(message: _233.ClaimCallback): _233.ClaimCallbackProtoMsg;
        };
        ReinvestCallback: {
            typeUrl: string;
            encode(message: _233.ReinvestCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.ReinvestCallback;
            fromPartial(object: Partial<_233.ReinvestCallback>): _233.ReinvestCallback;
            fromAmino(object: _233.ReinvestCallbackAmino): _233.ReinvestCallback;
            toAmino(message: _233.ReinvestCallback): _233.ReinvestCallbackAmino;
            fromAminoMsg(object: _233.ReinvestCallbackAminoMsg): _233.ReinvestCallback;
            fromProtoMsg(message: _233.ReinvestCallbackProtoMsg): _233.ReinvestCallback;
            toProto(message: _233.ReinvestCallback): Uint8Array;
            toProtoMsg(message: _233.ReinvestCallback): _233.ReinvestCallbackProtoMsg;
        };
        UndelegateCallback: {
            typeUrl: string;
            encode(message: _233.UndelegateCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.UndelegateCallback;
            fromPartial(object: Partial<_233.UndelegateCallback>): _233.UndelegateCallback;
            fromAmino(object: _233.UndelegateCallbackAmino): _233.UndelegateCallback;
            toAmino(message: _233.UndelegateCallback): _233.UndelegateCallbackAmino;
            fromAminoMsg(object: _233.UndelegateCallbackAminoMsg): _233.UndelegateCallback;
            fromProtoMsg(message: _233.UndelegateCallbackProtoMsg): _233.UndelegateCallback;
            toProto(message: _233.UndelegateCallback): Uint8Array;
            toProtoMsg(message: _233.UndelegateCallback): _233.UndelegateCallbackProtoMsg;
        };
        RedemptionCallback: {
            typeUrl: string;
            encode(message: _233.RedemptionCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.RedemptionCallback;
            fromPartial(object: Partial<_233.RedemptionCallback>): _233.RedemptionCallback;
            fromAmino(object: _233.RedemptionCallbackAmino): _233.RedemptionCallback;
            toAmino(message: _233.RedemptionCallback): _233.RedemptionCallbackAmino;
            fromAminoMsg(object: _233.RedemptionCallbackAminoMsg): _233.RedemptionCallback;
            fromProtoMsg(message: _233.RedemptionCallbackProtoMsg): _233.RedemptionCallback;
            toProto(message: _233.RedemptionCallback): Uint8Array;
            toProtoMsg(message: _233.RedemptionCallback): _233.RedemptionCallbackProtoMsg;
        };
        Rebalancing: {
            typeUrl: string;
            encode(message: _233.Rebalancing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.Rebalancing;
            fromPartial(object: Partial<_233.Rebalancing>): _233.Rebalancing;
            fromAmino(object: _233.RebalancingAmino): _233.Rebalancing;
            toAmino(message: _233.Rebalancing): _233.RebalancingAmino;
            fromAminoMsg(object: _233.RebalancingAminoMsg): _233.Rebalancing;
            fromProtoMsg(message: _233.RebalancingProtoMsg): _233.Rebalancing;
            toProto(message: _233.Rebalancing): Uint8Array;
            toProtoMsg(message: _233.Rebalancing): _233.RebalancingProtoMsg;
        };
        RebalanceCallback: {
            typeUrl: string;
            encode(message: _233.RebalanceCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.RebalanceCallback;
            fromPartial(object: Partial<_233.RebalanceCallback>): _233.RebalanceCallback;
            fromAmino(object: _233.RebalanceCallbackAmino): _233.RebalanceCallback;
            toAmino(message: _233.RebalanceCallback): _233.RebalanceCallbackAmino;
            fromAminoMsg(object: _233.RebalanceCallbackAminoMsg): _233.RebalanceCallback;
            fromProtoMsg(message: _233.RebalanceCallbackProtoMsg): _233.RebalanceCallback;
            toProto(message: _233.RebalanceCallback): Uint8Array;
            toProtoMsg(message: _233.RebalanceCallback): _233.RebalanceCallbackProtoMsg;
        };
        DetokenizeSharesCallback: {
            typeUrl: string;
            encode(message: _233.DetokenizeSharesCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.DetokenizeSharesCallback;
            fromPartial(object: Partial<_233.DetokenizeSharesCallback>): _233.DetokenizeSharesCallback;
            fromAmino(object: _233.DetokenizeSharesCallbackAmino): _233.DetokenizeSharesCallback;
            toAmino(message: _233.DetokenizeSharesCallback): _233.DetokenizeSharesCallbackAmino;
            fromAminoMsg(object: _233.DetokenizeSharesCallbackAminoMsg): _233.DetokenizeSharesCallback;
            fromProtoMsg(message: _233.DetokenizeSharesCallbackProtoMsg): _233.DetokenizeSharesCallback;
            toProto(message: _233.DetokenizeSharesCallback): Uint8Array;
            toProtoMsg(message: _233.DetokenizeSharesCallback): _233.DetokenizeSharesCallbackProtoMsg;
        };
        LSMLiquidStake: {
            typeUrl: string;
            encode(message: _233.LSMLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.LSMLiquidStake;
            fromPartial(object: Partial<_233.LSMLiquidStake>): _233.LSMLiquidStake;
            fromAmino(object: _233.LSMLiquidStakeAmino): _233.LSMLiquidStake;
            toAmino(message: _233.LSMLiquidStake): _233.LSMLiquidStakeAmino;
            fromAminoMsg(object: _233.LSMLiquidStakeAminoMsg): _233.LSMLiquidStake;
            fromProtoMsg(message: _233.LSMLiquidStakeProtoMsg): _233.LSMLiquidStake;
            toProto(message: _233.LSMLiquidStake): Uint8Array;
            toProtoMsg(message: _233.LSMLiquidStake): _233.LSMLiquidStakeProtoMsg;
        };
        ValidatorSharesToTokensQueryCallback: {
            typeUrl: string;
            encode(message: _233.ValidatorSharesToTokensQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.ValidatorSharesToTokensQueryCallback;
            fromPartial(object: Partial<_233.ValidatorSharesToTokensQueryCallback>): _233.ValidatorSharesToTokensQueryCallback;
            fromAmino(object: _233.ValidatorSharesToTokensQueryCallbackAmino): _233.ValidatorSharesToTokensQueryCallback;
            toAmino(message: _233.ValidatorSharesToTokensQueryCallback): _233.ValidatorSharesToTokensQueryCallbackAmino;
            fromAminoMsg(object: _233.ValidatorSharesToTokensQueryCallbackAminoMsg): _233.ValidatorSharesToTokensQueryCallback;
            fromProtoMsg(message: _233.ValidatorSharesToTokensQueryCallbackProtoMsg): _233.ValidatorSharesToTokensQueryCallback;
            toProto(message: _233.ValidatorSharesToTokensQueryCallback): Uint8Array;
            toProtoMsg(message: _233.ValidatorSharesToTokensQueryCallback): _233.ValidatorSharesToTokensQueryCallbackProtoMsg;
        };
        DelegatorSharesQueryCallback: {
            typeUrl: string;
            encode(message: _233.DelegatorSharesQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.DelegatorSharesQueryCallback;
            fromPartial(object: Partial<_233.DelegatorSharesQueryCallback>): _233.DelegatorSharesQueryCallback;
            fromAmino(object: _233.DelegatorSharesQueryCallbackAmino): _233.DelegatorSharesQueryCallback;
            toAmino(message: _233.DelegatorSharesQueryCallback): _233.DelegatorSharesQueryCallbackAmino;
            fromAminoMsg(object: _233.DelegatorSharesQueryCallbackAminoMsg): _233.DelegatorSharesQueryCallback;
            fromProtoMsg(message: _233.DelegatorSharesQueryCallbackProtoMsg): _233.DelegatorSharesQueryCallback;
            toProto(message: _233.DelegatorSharesQueryCallback): Uint8Array;
            toProtoMsg(message: _233.DelegatorSharesQueryCallback): _233.DelegatorSharesQueryCallbackProtoMsg;
        };
        CommunityPoolBalanceQueryCallback: {
            typeUrl: string;
            encode(message: _233.CommunityPoolBalanceQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.CommunityPoolBalanceQueryCallback;
            fromPartial(object: Partial<_233.CommunityPoolBalanceQueryCallback>): _233.CommunityPoolBalanceQueryCallback;
            fromAmino(object: _233.CommunityPoolBalanceQueryCallbackAmino): _233.CommunityPoolBalanceQueryCallback;
            toAmino(message: _233.CommunityPoolBalanceQueryCallback): _233.CommunityPoolBalanceQueryCallbackAmino;
            fromAminoMsg(object: _233.CommunityPoolBalanceQueryCallbackAminoMsg): _233.CommunityPoolBalanceQueryCallback;
            fromProtoMsg(message: _233.CommunityPoolBalanceQueryCallbackProtoMsg): _233.CommunityPoolBalanceQueryCallback;
            toProto(message: _233.CommunityPoolBalanceQueryCallback): Uint8Array;
            toProtoMsg(message: _233.CommunityPoolBalanceQueryCallback): _233.CommunityPoolBalanceQueryCallbackProtoMsg;
        };
        TradeRouteCallback: {
            typeUrl: string;
            encode(message: _233.TradeRouteCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _233.TradeRouteCallback;
            fromPartial(object: Partial<_233.TradeRouteCallback>): _233.TradeRouteCallback;
            fromAmino(object: _233.TradeRouteCallbackAmino): _233.TradeRouteCallback;
            toAmino(message: _233.TradeRouteCallback): _233.TradeRouteCallbackAmino;
            fromAminoMsg(object: _233.TradeRouteCallbackAminoMsg): _233.TradeRouteCallback;
            fromProtoMsg(message: _233.TradeRouteCallbackProtoMsg): _233.TradeRouteCallback;
            toProto(message: _233.TradeRouteCallback): Uint8Array;
            toProtoMsg(message: _233.TradeRouteCallback): _233.TradeRouteCallbackProtoMsg;
        };
        AddressUnbonding: {
            typeUrl: string;
            encode(message: _232.AddressUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _232.AddressUnbonding;
            fromPartial(object: Partial<_232.AddressUnbonding>): _232.AddressUnbonding;
            fromAmino(object: _232.AddressUnbondingAmino): _232.AddressUnbonding;
            toAmino(message: _232.AddressUnbonding): _232.AddressUnbondingAmino;
            fromAminoMsg(object: _232.AddressUnbondingAminoMsg): _232.AddressUnbonding;
            fromProtoMsg(message: _232.AddressUnbondingProtoMsg): _232.AddressUnbonding;
            toProto(message: _232.AddressUnbonding): Uint8Array;
            toProtoMsg(message: _232.AddressUnbonding): _232.AddressUnbondingProtoMsg;
        };
    };
    const staketia: {
        MsgClientImpl: typeof _406.MsgClientImpl;
        QueryClientImpl: typeof _396.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            hostZone(request?: _246.QueryHostZoneRequest): Promise<_246.QueryHostZoneResponse>;
            delegationRecords(request: _246.QueryDelegationRecordsRequest): Promise<_246.QueryDelegationRecordsResponse>;
            unbondingRecords(request: _246.QueryUnbondingRecordsRequest): Promise<_246.QueryUnbondingRecordsResponse>;
            redemptionRecord(request: _246.QueryRedemptionRecordRequest): Promise<_246.QueryRedemptionRecordResponse>;
            redemptionRecords(request: _246.QueryRedemptionRecordsRequest): Promise<_246.QueryRedemptionRecordsResponse>;
            slashRecords(request?: _246.QuerySlashRecordsRequest): Promise<_246.QuerySlashRecordsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _248.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _248.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmDelegation(value: _248.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUndelegation(value: _248.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUnbondedTokenSweep(value: _248.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                adjustDelegatedBalance(value: _248.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _248.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _248.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                refreshRedemptionRate(value: _248.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteDelegationRecord(value: _248.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteUnbondingRecord(value: _248.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteRedemptionRecord(value: _248.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOperatorAddress(value: _248.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _248.MsgLiquidStake): {
                    typeUrl: string;
                    value: _248.MsgLiquidStake;
                };
                redeemStake(value: _248.MsgRedeemStake): {
                    typeUrl: string;
                    value: _248.MsgRedeemStake;
                };
                confirmDelegation(value: _248.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _248.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _248.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _248.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _248.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _248.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _248.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _248.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _248.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _248.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _248.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _248.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _248.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _248.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _248.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _248.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _248.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _248.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _248.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _248.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _248.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _248.MsgSetOperatorAddress;
                };
            };
            fromPartial: {
                liquidStake(value: _248.MsgLiquidStake): {
                    typeUrl: string;
                    value: _248.MsgLiquidStake;
                };
                redeemStake(value: _248.MsgRedeemStake): {
                    typeUrl: string;
                    value: _248.MsgRedeemStake;
                };
                confirmDelegation(value: _248.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _248.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _248.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _248.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _248.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _248.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _248.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _248.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _248.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _248.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _248.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _248.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _248.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _248.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _248.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _248.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _248.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _248.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _248.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _248.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _248.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _248.MsgSetOperatorAddress;
                };
            };
        };
        AminoConverter: {
            "/stride.staketia.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _248.MsgLiquidStake) => _248.MsgLiquidStakeAmino;
                fromAmino: (object: _248.MsgLiquidStakeAmino) => _248.MsgLiquidStake;
            };
            "/stride.staketia.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _248.MsgRedeemStake) => _248.MsgRedeemStakeAmino;
                fromAmino: (object: _248.MsgRedeemStakeAmino) => _248.MsgRedeemStake;
            };
            "/stride.staketia.MsgConfirmDelegation": {
                aminoType: string;
                toAmino: (message: _248.MsgConfirmDelegation) => _248.MsgConfirmDelegationAmino;
                fromAmino: (object: _248.MsgConfirmDelegationAmino) => _248.MsgConfirmDelegation;
            };
            "/stride.staketia.MsgConfirmUndelegation": {
                aminoType: string;
                toAmino: (message: _248.MsgConfirmUndelegation) => _248.MsgConfirmUndelegationAmino;
                fromAmino: (object: _248.MsgConfirmUndelegationAmino) => _248.MsgConfirmUndelegation;
            };
            "/stride.staketia.MsgConfirmUnbondedTokenSweep": {
                aminoType: string;
                toAmino: (message: _248.MsgConfirmUnbondedTokenSweep) => _248.MsgConfirmUnbondedTokenSweepAmino;
                fromAmino: (object: _248.MsgConfirmUnbondedTokenSweepAmino) => _248.MsgConfirmUnbondedTokenSweep;
            };
            "/stride.staketia.MsgAdjustDelegatedBalance": {
                aminoType: string;
                toAmino: (message: _248.MsgAdjustDelegatedBalance) => _248.MsgAdjustDelegatedBalanceAmino;
                fromAmino: (object: _248.MsgAdjustDelegatedBalanceAmino) => _248.MsgAdjustDelegatedBalance;
            };
            "/stride.staketia.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _248.MsgUpdateInnerRedemptionRateBounds) => _248.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _248.MsgUpdateInnerRedemptionRateBoundsAmino) => _248.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.staketia.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _248.MsgResumeHostZone) => _248.MsgResumeHostZoneAmino;
                fromAmino: (object: _248.MsgResumeHostZoneAmino) => _248.MsgResumeHostZone;
            };
            "/stride.staketia.MsgRefreshRedemptionRate": {
                aminoType: string;
                toAmino: (message: _248.MsgRefreshRedemptionRate) => _248.MsgRefreshRedemptionRateAmino;
                fromAmino: (object: _248.MsgRefreshRedemptionRateAmino) => _248.MsgRefreshRedemptionRate;
            };
            "/stride.staketia.MsgOverwriteDelegationRecord": {
                aminoType: string;
                toAmino: (message: _248.MsgOverwriteDelegationRecord) => _248.MsgOverwriteDelegationRecordAmino;
                fromAmino: (object: _248.MsgOverwriteDelegationRecordAmino) => _248.MsgOverwriteDelegationRecord;
            };
            "/stride.staketia.MsgOverwriteUnbondingRecord": {
                aminoType: string;
                toAmino: (message: _248.MsgOverwriteUnbondingRecord) => _248.MsgOverwriteUnbondingRecordAmino;
                fromAmino: (object: _248.MsgOverwriteUnbondingRecordAmino) => _248.MsgOverwriteUnbondingRecord;
            };
            "/stride.staketia.MsgOverwriteRedemptionRecord": {
                aminoType: string;
                toAmino: (message: _248.MsgOverwriteRedemptionRecord) => _248.MsgOverwriteRedemptionRecordAmino;
                fromAmino: (object: _248.MsgOverwriteRedemptionRecordAmino) => _248.MsgOverwriteRedemptionRecord;
            };
            "/stride.staketia.MsgSetOperatorAddress": {
                aminoType: string;
                toAmino: (message: _248.MsgSetOperatorAddress) => _248.MsgSetOperatorAddressAmino;
                fromAmino: (object: _248.MsgSetOperatorAddressAmino) => _248.MsgSetOperatorAddress;
            };
        };
        overwritableRecordTypeFromJSON(object: any): _248.OverwritableRecordType;
        overwritableRecordTypeToJSON(object: _248.OverwritableRecordType): string;
        OverwritableRecordType: typeof _248.OverwritableRecordType;
        OverwritableRecordTypeSDKType: typeof _248.OverwritableRecordType;
        OverwritableRecordTypeAmino: typeof _248.OverwritableRecordType;
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _248.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.MsgLiquidStake;
            fromPartial(object: Partial<_248.MsgLiquidStake>): _248.MsgLiquidStake;
            fromAmino(object: _248.MsgLiquidStakeAmino): _248.MsgLiquidStake;
            toAmino(message: _248.MsgLiquidStake): _248.MsgLiquidStakeAmino;
            fromAminoMsg(object: _248.MsgLiquidStakeAminoMsg): _248.MsgLiquidStake;
            toAminoMsg(message: _248.MsgLiquidStake): _248.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _248.MsgLiquidStakeProtoMsg): _248.MsgLiquidStake;
            toProto(message: _248.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _248.MsgLiquidStake): _248.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _248.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_248.MsgLiquidStakeResponse>): _248.MsgLiquidStakeResponse;
            fromAmino(object: _248.MsgLiquidStakeResponseAmino): _248.MsgLiquidStakeResponse;
            toAmino(message: _248.MsgLiquidStakeResponse): _248.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _248.MsgLiquidStakeResponseAminoMsg): _248.MsgLiquidStakeResponse;
            fromProtoMsg(message: _248.MsgLiquidStakeResponseProtoMsg): _248.MsgLiquidStakeResponse;
            toProto(message: _248.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _248.MsgLiquidStakeResponse): _248.MsgLiquidStakeResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _248.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.MsgRedeemStake;
            fromPartial(object: Partial<_248.MsgRedeemStake>): _248.MsgRedeemStake;
            fromAmino(object: _248.MsgRedeemStakeAmino): _248.MsgRedeemStake;
            toAmino(message: _248.MsgRedeemStake): _248.MsgRedeemStakeAmino;
            fromAminoMsg(object: _248.MsgRedeemStakeAminoMsg): _248.MsgRedeemStake;
            toAminoMsg(message: _248.MsgRedeemStake): _248.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _248.MsgRedeemStakeProtoMsg): _248.MsgRedeemStake;
            toProto(message: _248.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _248.MsgRedeemStake): _248.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(message: _248.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.MsgRedeemStakeResponse;
            fromPartial(object: Partial<_248.MsgRedeemStakeResponse>): _248.MsgRedeemStakeResponse;
            fromAmino(object: _248.MsgRedeemStakeResponseAmino): _248.MsgRedeemStakeResponse;
            toAmino(message: _248.MsgRedeemStakeResponse): _248.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _248.MsgRedeemStakeResponseAminoMsg): _248.MsgRedeemStakeResponse;
            fromProtoMsg(message: _248.MsgRedeemStakeResponseProtoMsg): _248.MsgRedeemStakeResponse;
            toProto(message: _248.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _248.MsgRedeemStakeResponse): _248.MsgRedeemStakeResponseProtoMsg;
        };
        MsgConfirmDelegation: {
            typeUrl: string;
            encode(message: _248.MsgConfirmDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.MsgConfirmDelegation;
            fromPartial(object: Partial<_248.MsgConfirmDelegation>): _248.MsgConfirmDelegation;
            fromAmino(object: _248.MsgConfirmDelegationAmino): _248.MsgConfirmDelegation;
            toAmino(message: _248.MsgConfirmDelegation): _248.MsgConfirmDelegationAmino;
            fromAminoMsg(object: _248.MsgConfirmDelegationAminoMsg): _248.MsgConfirmDelegation;
            toAminoMsg(message: _248.MsgConfirmDelegation): _248.MsgConfirmDelegationAminoMsg;
            fromProtoMsg(message: _248.MsgConfirmDelegationProtoMsg): _248.MsgConfirmDelegation;
            toProto(message: _248.MsgConfirmDelegation): Uint8Array;
            toProtoMsg(message: _248.MsgConfirmDelegation): _248.MsgConfirmDelegationProtoMsg;
        };
        MsgConfirmDelegationResponse: {
            typeUrl: string;
            encode(_: _248.MsgConfirmDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.MsgConfirmDelegationResponse;
            fromPartial(_: Partial<_248.MsgConfirmDelegationResponse>): _248.MsgConfirmDelegationResponse;
            fromAmino(_: _248.MsgConfirmDelegationResponseAmino): _248.MsgConfirmDelegationResponse;
            toAmino(_: _248.MsgConfirmDelegationResponse): _248.MsgConfirmDelegationResponseAmino;
            fromAminoMsg(object: _248.MsgConfirmDelegationResponseAminoMsg): _248.MsgConfirmDelegationResponse;
            fromProtoMsg(message: _248.MsgConfirmDelegationResponseProtoMsg): _248.MsgConfirmDelegationResponse;
            toProto(message: _248.MsgConfirmDelegationResponse): Uint8Array;
            toProtoMsg(message: _248.MsgConfirmDelegationResponse): _248.MsgConfirmDelegationResponseProtoMsg;
        };
        MsgConfirmUndelegation: {
            typeUrl: string;
            encode(message: _248.MsgConfirmUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.MsgConfirmUndelegation;
            fromPartial(object: Partial<_248.MsgConfirmUndelegation>): _248.MsgConfirmUndelegation;
            fromAmino(object: _248.MsgConfirmUndelegationAmino): _248.MsgConfirmUndelegation;
            toAmino(message: _248.MsgConfirmUndelegation): _248.MsgConfirmUndelegationAmino;
            fromAminoMsg(object: _248.MsgConfirmUndelegationAminoMsg): _248.MsgConfirmUndelegation;
            toAminoMsg(message: _248.MsgConfirmUndelegation): _248.MsgConfirmUndelegationAminoMsg;
            fromProtoMsg(message: _248.MsgConfirmUndelegationProtoMsg): _248.MsgConfirmUndelegation;
            toProto(message: _248.MsgConfirmUndelegation): Uint8Array;
            toProtoMsg(message: _248.MsgConfirmUndelegation): _248.MsgConfirmUndelegationProtoMsg;
        };
        MsgConfirmUndelegationResponse: {
            typeUrl: string;
            encode(_: _248.MsgConfirmUndelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.MsgConfirmUndelegationResponse;
            fromPartial(_: Partial<_248.MsgConfirmUndelegationResponse>): _248.MsgConfirmUndelegationResponse;
            fromAmino(_: _248.MsgConfirmUndelegationResponseAmino): _248.MsgConfirmUndelegationResponse;
            toAmino(_: _248.MsgConfirmUndelegationResponse): _248.MsgConfirmUndelegationResponseAmino;
            fromAminoMsg(object: _248.MsgConfirmUndelegationResponseAminoMsg): _248.MsgConfirmUndelegationResponse;
            fromProtoMsg(message: _248.MsgConfirmUndelegationResponseProtoMsg): _248.MsgConfirmUndelegationResponse;
            toProto(message: _248.MsgConfirmUndelegationResponse): Uint8Array;
            toProtoMsg(message: _248.MsgConfirmUndelegationResponse): _248.MsgConfirmUndelegationResponseProtoMsg;
        };
        MsgConfirmUnbondedTokenSweep: {
            typeUrl: string;
            encode(message: _248.MsgConfirmUnbondedTokenSweep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.MsgConfirmUnbondedTokenSweep;
            fromPartial(object: Partial<_248.MsgConfirmUnbondedTokenSweep>): _248.MsgConfirmUnbondedTokenSweep;
            fromAmino(object: _248.MsgConfirmUnbondedTokenSweepAmino): _248.MsgConfirmUnbondedTokenSweep;
            toAmino(message: _248.MsgConfirmUnbondedTokenSweep): _248.MsgConfirmUnbondedTokenSweepAmino;
            fromAminoMsg(object: _248.MsgConfirmUnbondedTokenSweepAminoMsg): _248.MsgConfirmUnbondedTokenSweep;
            toAminoMsg(message: _248.MsgConfirmUnbondedTokenSweep): _248.MsgConfirmUnbondedTokenSweepAminoMsg;
            fromProtoMsg(message: _248.MsgConfirmUnbondedTokenSweepProtoMsg): _248.MsgConfirmUnbondedTokenSweep;
            toProto(message: _248.MsgConfirmUnbondedTokenSweep): Uint8Array;
            toProtoMsg(message: _248.MsgConfirmUnbondedTokenSweep): _248.MsgConfirmUnbondedTokenSweepProtoMsg;
        };
        MsgConfirmUnbondedTokenSweepResponse: {
            typeUrl: string;
            encode(_: _248.MsgConfirmUnbondedTokenSweepResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.MsgConfirmUnbondedTokenSweepResponse;
            fromPartial(_: Partial<_248.MsgConfirmUnbondedTokenSweepResponse>): _248.MsgConfirmUnbondedTokenSweepResponse;
            fromAmino(_: _248.MsgConfirmUnbondedTokenSweepResponseAmino): _248.MsgConfirmUnbondedTokenSweepResponse;
            toAmino(_: _248.MsgConfirmUnbondedTokenSweepResponse): _248.MsgConfirmUnbondedTokenSweepResponseAmino;
            fromAminoMsg(object: _248.MsgConfirmUnbondedTokenSweepResponseAminoMsg): _248.MsgConfirmUnbondedTokenSweepResponse;
            fromProtoMsg(message: _248.MsgConfirmUnbondedTokenSweepResponseProtoMsg): _248.MsgConfirmUnbondedTokenSweepResponse;
            toProto(message: _248.MsgConfirmUnbondedTokenSweepResponse): Uint8Array;
            toProtoMsg(message: _248.MsgConfirmUnbondedTokenSweepResponse): _248.MsgConfirmUnbondedTokenSweepResponseProtoMsg;
        };
        MsgAdjustDelegatedBalance: {
            typeUrl: string;
            encode(message: _248.MsgAdjustDelegatedBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.MsgAdjustDelegatedBalance;
            fromPartial(object: Partial<_248.MsgAdjustDelegatedBalance>): _248.MsgAdjustDelegatedBalance;
            fromAmino(object: _248.MsgAdjustDelegatedBalanceAmino): _248.MsgAdjustDelegatedBalance;
            toAmino(message: _248.MsgAdjustDelegatedBalance): _248.MsgAdjustDelegatedBalanceAmino;
            fromAminoMsg(object: _248.MsgAdjustDelegatedBalanceAminoMsg): _248.MsgAdjustDelegatedBalance;
            toAminoMsg(message: _248.MsgAdjustDelegatedBalance): _248.MsgAdjustDelegatedBalanceAminoMsg;
            fromProtoMsg(message: _248.MsgAdjustDelegatedBalanceProtoMsg): _248.MsgAdjustDelegatedBalance;
            toProto(message: _248.MsgAdjustDelegatedBalance): Uint8Array;
            toProtoMsg(message: _248.MsgAdjustDelegatedBalance): _248.MsgAdjustDelegatedBalanceProtoMsg;
        };
        MsgAdjustDelegatedBalanceResponse: {
            typeUrl: string;
            encode(_: _248.MsgAdjustDelegatedBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.MsgAdjustDelegatedBalanceResponse;
            fromPartial(_: Partial<_248.MsgAdjustDelegatedBalanceResponse>): _248.MsgAdjustDelegatedBalanceResponse;
            fromAmino(_: _248.MsgAdjustDelegatedBalanceResponseAmino): _248.MsgAdjustDelegatedBalanceResponse;
            toAmino(_: _248.MsgAdjustDelegatedBalanceResponse): _248.MsgAdjustDelegatedBalanceResponseAmino;
            fromAminoMsg(object: _248.MsgAdjustDelegatedBalanceResponseAminoMsg): _248.MsgAdjustDelegatedBalanceResponse;
            fromProtoMsg(message: _248.MsgAdjustDelegatedBalanceResponseProtoMsg): _248.MsgAdjustDelegatedBalanceResponse;
            toProto(message: _248.MsgAdjustDelegatedBalanceResponse): Uint8Array;
            toProtoMsg(message: _248.MsgAdjustDelegatedBalanceResponse): _248.MsgAdjustDelegatedBalanceResponseProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _248.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_248.MsgUpdateInnerRedemptionRateBounds>): _248.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _248.MsgUpdateInnerRedemptionRateBoundsAmino): _248.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _248.MsgUpdateInnerRedemptionRateBounds): _248.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _248.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _248.MsgUpdateInnerRedemptionRateBounds;
            toAminoMsg(message: _248.MsgUpdateInnerRedemptionRateBounds): _248.MsgUpdateInnerRedemptionRateBoundsAminoMsg;
            fromProtoMsg(message: _248.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _248.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _248.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _248.MsgUpdateInnerRedemptionRateBounds): _248.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _248.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_248.MsgUpdateInnerRedemptionRateBoundsResponse>): _248.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _248.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _248.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _248.MsgUpdateInnerRedemptionRateBoundsResponse): _248.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _248.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _248.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _248.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _248.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _248.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _248.MsgUpdateInnerRedemptionRateBoundsResponse): _248.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _248.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.MsgResumeHostZone;
            fromPartial(object: Partial<_248.MsgResumeHostZone>): _248.MsgResumeHostZone;
            fromAmino(object: _248.MsgResumeHostZoneAmino): _248.MsgResumeHostZone;
            toAmino(message: _248.MsgResumeHostZone): _248.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _248.MsgResumeHostZoneAminoMsg): _248.MsgResumeHostZone;
            toAminoMsg(message: _248.MsgResumeHostZone): _248.MsgResumeHostZoneAminoMsg;
            fromProtoMsg(message: _248.MsgResumeHostZoneProtoMsg): _248.MsgResumeHostZone;
            toProto(message: _248.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _248.MsgResumeHostZone): _248.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _248.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_248.MsgResumeHostZoneResponse>): _248.MsgResumeHostZoneResponse;
            fromAmino(_: _248.MsgResumeHostZoneResponseAmino): _248.MsgResumeHostZoneResponse;
            toAmino(_: _248.MsgResumeHostZoneResponse): _248.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _248.MsgResumeHostZoneResponseAminoMsg): _248.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _248.MsgResumeHostZoneResponseProtoMsg): _248.MsgResumeHostZoneResponse;
            toProto(message: _248.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _248.MsgResumeHostZoneResponse): _248.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgRefreshRedemptionRate: {
            typeUrl: string;
            encode(message: _248.MsgRefreshRedemptionRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.MsgRefreshRedemptionRate;
            fromPartial(object: Partial<_248.MsgRefreshRedemptionRate>): _248.MsgRefreshRedemptionRate;
            fromAmino(object: _248.MsgRefreshRedemptionRateAmino): _248.MsgRefreshRedemptionRate;
            toAmino(message: _248.MsgRefreshRedemptionRate): _248.MsgRefreshRedemptionRateAmino;
            fromAminoMsg(object: _248.MsgRefreshRedemptionRateAminoMsg): _248.MsgRefreshRedemptionRate;
            toAminoMsg(message: _248.MsgRefreshRedemptionRate): _248.MsgRefreshRedemptionRateAminoMsg;
            fromProtoMsg(message: _248.MsgRefreshRedemptionRateProtoMsg): _248.MsgRefreshRedemptionRate;
            toProto(message: _248.MsgRefreshRedemptionRate): Uint8Array;
            toProtoMsg(message: _248.MsgRefreshRedemptionRate): _248.MsgRefreshRedemptionRateProtoMsg;
        };
        MsgRefreshRedemptionRateResponse: {
            typeUrl: string;
            encode(_: _248.MsgRefreshRedemptionRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.MsgRefreshRedemptionRateResponse;
            fromPartial(_: Partial<_248.MsgRefreshRedemptionRateResponse>): _248.MsgRefreshRedemptionRateResponse;
            fromAmino(_: _248.MsgRefreshRedemptionRateResponseAmino): _248.MsgRefreshRedemptionRateResponse;
            toAmino(_: _248.MsgRefreshRedemptionRateResponse): _248.MsgRefreshRedemptionRateResponseAmino;
            fromAminoMsg(object: _248.MsgRefreshRedemptionRateResponseAminoMsg): _248.MsgRefreshRedemptionRateResponse;
            fromProtoMsg(message: _248.MsgRefreshRedemptionRateResponseProtoMsg): _248.MsgRefreshRedemptionRateResponse;
            toProto(message: _248.MsgRefreshRedemptionRateResponse): Uint8Array;
            toProtoMsg(message: _248.MsgRefreshRedemptionRateResponse): _248.MsgRefreshRedemptionRateResponseProtoMsg;
        };
        MsgOverwriteDelegationRecord: {
            typeUrl: string;
            encode(message: _248.MsgOverwriteDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.MsgOverwriteDelegationRecord;
            fromPartial(object: Partial<_248.MsgOverwriteDelegationRecord>): _248.MsgOverwriteDelegationRecord;
            fromAmino(object: _248.MsgOverwriteDelegationRecordAmino): _248.MsgOverwriteDelegationRecord;
            toAmino(message: _248.MsgOverwriteDelegationRecord): _248.MsgOverwriteDelegationRecordAmino;
            fromAminoMsg(object: _248.MsgOverwriteDelegationRecordAminoMsg): _248.MsgOverwriteDelegationRecord;
            toAminoMsg(message: _248.MsgOverwriteDelegationRecord): _248.MsgOverwriteDelegationRecordAminoMsg;
            fromProtoMsg(message: _248.MsgOverwriteDelegationRecordProtoMsg): _248.MsgOverwriteDelegationRecord;
            toProto(message: _248.MsgOverwriteDelegationRecord): Uint8Array;
            toProtoMsg(message: _248.MsgOverwriteDelegationRecord): _248.MsgOverwriteDelegationRecordProtoMsg;
        };
        MsgOverwriteDelegationRecordResponse: {
            typeUrl: string;
            encode(_: _248.MsgOverwriteDelegationRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.MsgOverwriteDelegationRecordResponse;
            fromPartial(_: Partial<_248.MsgOverwriteDelegationRecordResponse>): _248.MsgOverwriteDelegationRecordResponse;
            fromAmino(_: _248.MsgOverwriteDelegationRecordResponseAmino): _248.MsgOverwriteDelegationRecordResponse;
            toAmino(_: _248.MsgOverwriteDelegationRecordResponse): _248.MsgOverwriteDelegationRecordResponseAmino;
            fromAminoMsg(object: _248.MsgOverwriteDelegationRecordResponseAminoMsg): _248.MsgOverwriteDelegationRecordResponse;
            fromProtoMsg(message: _248.MsgOverwriteDelegationRecordResponseProtoMsg): _248.MsgOverwriteDelegationRecordResponse;
            toProto(message: _248.MsgOverwriteDelegationRecordResponse): Uint8Array;
            toProtoMsg(message: _248.MsgOverwriteDelegationRecordResponse): _248.MsgOverwriteDelegationRecordResponseProtoMsg;
        };
        MsgOverwriteUnbondingRecord: {
            typeUrl: string;
            encode(message: _248.MsgOverwriteUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.MsgOverwriteUnbondingRecord;
            fromPartial(object: Partial<_248.MsgOverwriteUnbondingRecord>): _248.MsgOverwriteUnbondingRecord;
            fromAmino(object: _248.MsgOverwriteUnbondingRecordAmino): _248.MsgOverwriteUnbondingRecord;
            toAmino(message: _248.MsgOverwriteUnbondingRecord): _248.MsgOverwriteUnbondingRecordAmino;
            fromAminoMsg(object: _248.MsgOverwriteUnbondingRecordAminoMsg): _248.MsgOverwriteUnbondingRecord;
            toAminoMsg(message: _248.MsgOverwriteUnbondingRecord): _248.MsgOverwriteUnbondingRecordAminoMsg;
            fromProtoMsg(message: _248.MsgOverwriteUnbondingRecordProtoMsg): _248.MsgOverwriteUnbondingRecord;
            toProto(message: _248.MsgOverwriteUnbondingRecord): Uint8Array;
            toProtoMsg(message: _248.MsgOverwriteUnbondingRecord): _248.MsgOverwriteUnbondingRecordProtoMsg;
        };
        MsgOverwriteUnbondingRecordResponse: {
            typeUrl: string;
            encode(_: _248.MsgOverwriteUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.MsgOverwriteUnbondingRecordResponse;
            fromPartial(_: Partial<_248.MsgOverwriteUnbondingRecordResponse>): _248.MsgOverwriteUnbondingRecordResponse;
            fromAmino(_: _248.MsgOverwriteUnbondingRecordResponseAmino): _248.MsgOverwriteUnbondingRecordResponse;
            toAmino(_: _248.MsgOverwriteUnbondingRecordResponse): _248.MsgOverwriteUnbondingRecordResponseAmino;
            fromAminoMsg(object: _248.MsgOverwriteUnbondingRecordResponseAminoMsg): _248.MsgOverwriteUnbondingRecordResponse;
            fromProtoMsg(message: _248.MsgOverwriteUnbondingRecordResponseProtoMsg): _248.MsgOverwriteUnbondingRecordResponse;
            toProto(message: _248.MsgOverwriteUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _248.MsgOverwriteUnbondingRecordResponse): _248.MsgOverwriteUnbondingRecordResponseProtoMsg;
        };
        MsgOverwriteRedemptionRecord: {
            typeUrl: string;
            encode(message: _248.MsgOverwriteRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.MsgOverwriteRedemptionRecord;
            fromPartial(object: Partial<_248.MsgOverwriteRedemptionRecord>): _248.MsgOverwriteRedemptionRecord;
            fromAmino(object: _248.MsgOverwriteRedemptionRecordAmino): _248.MsgOverwriteRedemptionRecord;
            toAmino(message: _248.MsgOverwriteRedemptionRecord): _248.MsgOverwriteRedemptionRecordAmino;
            fromAminoMsg(object: _248.MsgOverwriteRedemptionRecordAminoMsg): _248.MsgOverwriteRedemptionRecord;
            toAminoMsg(message: _248.MsgOverwriteRedemptionRecord): _248.MsgOverwriteRedemptionRecordAminoMsg;
            fromProtoMsg(message: _248.MsgOverwriteRedemptionRecordProtoMsg): _248.MsgOverwriteRedemptionRecord;
            toProto(message: _248.MsgOverwriteRedemptionRecord): Uint8Array;
            toProtoMsg(message: _248.MsgOverwriteRedemptionRecord): _248.MsgOverwriteRedemptionRecordProtoMsg;
        };
        MsgOverwriteRedemptionRecordResponse: {
            typeUrl: string;
            encode(_: _248.MsgOverwriteRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.MsgOverwriteRedemptionRecordResponse;
            fromPartial(_: Partial<_248.MsgOverwriteRedemptionRecordResponse>): _248.MsgOverwriteRedemptionRecordResponse;
            fromAmino(_: _248.MsgOverwriteRedemptionRecordResponseAmino): _248.MsgOverwriteRedemptionRecordResponse;
            toAmino(_: _248.MsgOverwriteRedemptionRecordResponse): _248.MsgOverwriteRedemptionRecordResponseAmino;
            fromAminoMsg(object: _248.MsgOverwriteRedemptionRecordResponseAminoMsg): _248.MsgOverwriteRedemptionRecordResponse;
            fromProtoMsg(message: _248.MsgOverwriteRedemptionRecordResponseProtoMsg): _248.MsgOverwriteRedemptionRecordResponse;
            toProto(message: _248.MsgOverwriteRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _248.MsgOverwriteRedemptionRecordResponse): _248.MsgOverwriteRedemptionRecordResponseProtoMsg;
        };
        MsgSetOperatorAddress: {
            typeUrl: string;
            encode(message: _248.MsgSetOperatorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.MsgSetOperatorAddress;
            fromPartial(object: Partial<_248.MsgSetOperatorAddress>): _248.MsgSetOperatorAddress;
            fromAmino(object: _248.MsgSetOperatorAddressAmino): _248.MsgSetOperatorAddress;
            toAmino(message: _248.MsgSetOperatorAddress): _248.MsgSetOperatorAddressAmino;
            fromAminoMsg(object: _248.MsgSetOperatorAddressAminoMsg): _248.MsgSetOperatorAddress;
            toAminoMsg(message: _248.MsgSetOperatorAddress): _248.MsgSetOperatorAddressAminoMsg;
            fromProtoMsg(message: _248.MsgSetOperatorAddressProtoMsg): _248.MsgSetOperatorAddress;
            toProto(message: _248.MsgSetOperatorAddress): Uint8Array;
            toProtoMsg(message: _248.MsgSetOperatorAddress): _248.MsgSetOperatorAddressProtoMsg;
        };
        MsgSetOperatorAddressResponse: {
            typeUrl: string;
            encode(_: _248.MsgSetOperatorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _248.MsgSetOperatorAddressResponse;
            fromPartial(_: Partial<_248.MsgSetOperatorAddressResponse>): _248.MsgSetOperatorAddressResponse;
            fromAmino(_: _248.MsgSetOperatorAddressResponseAmino): _248.MsgSetOperatorAddressResponse;
            toAmino(_: _248.MsgSetOperatorAddressResponse): _248.MsgSetOperatorAddressResponseAmino;
            fromAminoMsg(object: _248.MsgSetOperatorAddressResponseAminoMsg): _248.MsgSetOperatorAddressResponse;
            fromProtoMsg(message: _248.MsgSetOperatorAddressResponseProtoMsg): _248.MsgSetOperatorAddressResponse;
            toProto(message: _248.MsgSetOperatorAddressResponse): Uint8Array;
            toProtoMsg(message: _248.MsgSetOperatorAddressResponse): _248.MsgSetOperatorAddressResponseProtoMsg;
        };
        delegationRecordStatusFromJSON(object: any): _247.DelegationRecordStatus;
        delegationRecordStatusToJSON(object: _247.DelegationRecordStatus): string;
        unbondingRecordStatusFromJSON(object: any): _247.UnbondingRecordStatus;
        unbondingRecordStatusToJSON(object: _247.UnbondingRecordStatus): string;
        DelegationRecordStatus: typeof _247.DelegationRecordStatus;
        DelegationRecordStatusSDKType: typeof _247.DelegationRecordStatus;
        DelegationRecordStatusAmino: typeof _247.DelegationRecordStatus;
        UnbondingRecordStatus: typeof _247.UnbondingRecordStatus;
        UnbondingRecordStatusSDKType: typeof _247.UnbondingRecordStatus;
        UnbondingRecordStatusAmino: typeof _247.UnbondingRecordStatus;
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
        DelegationRecord: {
            typeUrl: string;
            encode(message: _247.DelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.DelegationRecord;
            fromPartial(object: Partial<_247.DelegationRecord>): _247.DelegationRecord;
            fromAmino(object: _247.DelegationRecordAmino): _247.DelegationRecord;
            toAmino(message: _247.DelegationRecord): _247.DelegationRecordAmino;
            fromAminoMsg(object: _247.DelegationRecordAminoMsg): _247.DelegationRecord;
            fromProtoMsg(message: _247.DelegationRecordProtoMsg): _247.DelegationRecord;
            toProto(message: _247.DelegationRecord): Uint8Array;
            toProtoMsg(message: _247.DelegationRecord): _247.DelegationRecordProtoMsg;
        };
        UnbondingRecord: {
            typeUrl: string;
            encode(message: _247.UnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.UnbondingRecord;
            fromPartial(object: Partial<_247.UnbondingRecord>): _247.UnbondingRecord;
            fromAmino(object: _247.UnbondingRecordAmino): _247.UnbondingRecord;
            toAmino(message: _247.UnbondingRecord): _247.UnbondingRecordAmino;
            fromAminoMsg(object: _247.UnbondingRecordAminoMsg): _247.UnbondingRecord;
            fromProtoMsg(message: _247.UnbondingRecordProtoMsg): _247.UnbondingRecord;
            toProto(message: _247.UnbondingRecord): Uint8Array;
            toProtoMsg(message: _247.UnbondingRecord): _247.UnbondingRecordProtoMsg;
        };
        RedemptionRecord: {
            typeUrl: string;
            encode(message: _247.RedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.RedemptionRecord;
            fromPartial(object: Partial<_247.RedemptionRecord>): _247.RedemptionRecord;
            fromAmino(object: _247.RedemptionRecordAmino): _247.RedemptionRecord;
            toAmino(message: _247.RedemptionRecord): _247.RedemptionRecordAmino;
            fromAminoMsg(object: _247.RedemptionRecordAminoMsg): _247.RedemptionRecord;
            fromProtoMsg(message: _247.RedemptionRecordProtoMsg): _247.RedemptionRecord;
            toProto(message: _247.RedemptionRecord): Uint8Array;
            toProtoMsg(message: _247.RedemptionRecord): _247.RedemptionRecordProtoMsg;
        };
        SlashRecord: {
            typeUrl: string;
            encode(message: _247.SlashRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _247.SlashRecord;
            fromPartial(object: Partial<_247.SlashRecord>): _247.SlashRecord;
            fromAmino(object: _247.SlashRecordAmino): _247.SlashRecord;
            toAmino(message: _247.SlashRecord): _247.SlashRecordAmino;
            fromAminoMsg(object: _247.SlashRecordAminoMsg): _247.SlashRecord;
            fromProtoMsg(message: _247.SlashRecordProtoMsg): _247.SlashRecord;
            toProto(message: _247.SlashRecord): Uint8Array;
            toProtoMsg(message: _247.SlashRecord): _247.SlashRecordProtoMsg;
        };
        QueryHostZoneRequest: {
            typeUrl: string;
            encode(_: _246.QueryHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _246.QueryHostZoneRequest;
            fromPartial(_: Partial<_246.QueryHostZoneRequest>): _246.QueryHostZoneRequest;
            fromAmino(_: _246.QueryHostZoneRequestAmino): _246.QueryHostZoneRequest;
            toAmino(_: _246.QueryHostZoneRequest): _246.QueryHostZoneRequestAmino;
            fromAminoMsg(object: _246.QueryHostZoneRequestAminoMsg): _246.QueryHostZoneRequest;
            fromProtoMsg(message: _246.QueryHostZoneRequestProtoMsg): _246.QueryHostZoneRequest;
            toProto(message: _246.QueryHostZoneRequest): Uint8Array;
            toProtoMsg(message: _246.QueryHostZoneRequest): _246.QueryHostZoneRequestProtoMsg;
        };
        QueryHostZoneResponse: {
            typeUrl: string;
            encode(message: _246.QueryHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _246.QueryHostZoneResponse;
            fromPartial(object: Partial<_246.QueryHostZoneResponse>): _246.QueryHostZoneResponse;
            fromAmino(object: _246.QueryHostZoneResponseAmino): _246.QueryHostZoneResponse;
            toAmino(message: _246.QueryHostZoneResponse): _246.QueryHostZoneResponseAmino;
            fromAminoMsg(object: _246.QueryHostZoneResponseAminoMsg): _246.QueryHostZoneResponse;
            fromProtoMsg(message: _246.QueryHostZoneResponseProtoMsg): _246.QueryHostZoneResponse;
            toProto(message: _246.QueryHostZoneResponse): Uint8Array;
            toProtoMsg(message: _246.QueryHostZoneResponse): _246.QueryHostZoneResponseProtoMsg;
        };
        QueryDelegationRecordsRequest: {
            typeUrl: string;
            encode(message: _246.QueryDelegationRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _246.QueryDelegationRecordsRequest;
            fromPartial(object: Partial<_246.QueryDelegationRecordsRequest>): _246.QueryDelegationRecordsRequest;
            fromAmino(object: _246.QueryDelegationRecordsRequestAmino): _246.QueryDelegationRecordsRequest;
            toAmino(message: _246.QueryDelegationRecordsRequest): _246.QueryDelegationRecordsRequestAmino;
            fromAminoMsg(object: _246.QueryDelegationRecordsRequestAminoMsg): _246.QueryDelegationRecordsRequest;
            fromProtoMsg(message: _246.QueryDelegationRecordsRequestProtoMsg): _246.QueryDelegationRecordsRequest;
            toProto(message: _246.QueryDelegationRecordsRequest): Uint8Array;
            toProtoMsg(message: _246.QueryDelegationRecordsRequest): _246.QueryDelegationRecordsRequestProtoMsg;
        };
        QueryDelegationRecordsResponse: {
            typeUrl: string;
            encode(message: _246.QueryDelegationRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _246.QueryDelegationRecordsResponse;
            fromPartial(object: Partial<_246.QueryDelegationRecordsResponse>): _246.QueryDelegationRecordsResponse;
            fromAmino(object: _246.QueryDelegationRecordsResponseAmino): _246.QueryDelegationRecordsResponse;
            toAmino(message: _246.QueryDelegationRecordsResponse): _246.QueryDelegationRecordsResponseAmino;
            fromAminoMsg(object: _246.QueryDelegationRecordsResponseAminoMsg): _246.QueryDelegationRecordsResponse;
            fromProtoMsg(message: _246.QueryDelegationRecordsResponseProtoMsg): _246.QueryDelegationRecordsResponse;
            toProto(message: _246.QueryDelegationRecordsResponse): Uint8Array;
            toProtoMsg(message: _246.QueryDelegationRecordsResponse): _246.QueryDelegationRecordsResponseProtoMsg;
        };
        QueryUnbondingRecordsRequest: {
            typeUrl: string;
            encode(message: _246.QueryUnbondingRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _246.QueryUnbondingRecordsRequest;
            fromPartial(object: Partial<_246.QueryUnbondingRecordsRequest>): _246.QueryUnbondingRecordsRequest;
            fromAmino(object: _246.QueryUnbondingRecordsRequestAmino): _246.QueryUnbondingRecordsRequest;
            toAmino(message: _246.QueryUnbondingRecordsRequest): _246.QueryUnbondingRecordsRequestAmino;
            fromAminoMsg(object: _246.QueryUnbondingRecordsRequestAminoMsg): _246.QueryUnbondingRecordsRequest;
            fromProtoMsg(message: _246.QueryUnbondingRecordsRequestProtoMsg): _246.QueryUnbondingRecordsRequest;
            toProto(message: _246.QueryUnbondingRecordsRequest): Uint8Array;
            toProtoMsg(message: _246.QueryUnbondingRecordsRequest): _246.QueryUnbondingRecordsRequestProtoMsg;
        };
        QueryUnbondingRecordsResponse: {
            typeUrl: string;
            encode(message: _246.QueryUnbondingRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _246.QueryUnbondingRecordsResponse;
            fromPartial(object: Partial<_246.QueryUnbondingRecordsResponse>): _246.QueryUnbondingRecordsResponse;
            fromAmino(object: _246.QueryUnbondingRecordsResponseAmino): _246.QueryUnbondingRecordsResponse;
            toAmino(message: _246.QueryUnbondingRecordsResponse): _246.QueryUnbondingRecordsResponseAmino;
            fromAminoMsg(object: _246.QueryUnbondingRecordsResponseAminoMsg): _246.QueryUnbondingRecordsResponse;
            fromProtoMsg(message: _246.QueryUnbondingRecordsResponseProtoMsg): _246.QueryUnbondingRecordsResponse;
            toProto(message: _246.QueryUnbondingRecordsResponse): Uint8Array;
            toProtoMsg(message: _246.QueryUnbondingRecordsResponse): _246.QueryUnbondingRecordsResponseProtoMsg;
        };
        QueryRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _246.QueryRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _246.QueryRedemptionRecordRequest;
            fromPartial(object: Partial<_246.QueryRedemptionRecordRequest>): _246.QueryRedemptionRecordRequest;
            fromAmino(object: _246.QueryRedemptionRecordRequestAmino): _246.QueryRedemptionRecordRequest;
            toAmino(message: _246.QueryRedemptionRecordRequest): _246.QueryRedemptionRecordRequestAmino;
            fromAminoMsg(object: _246.QueryRedemptionRecordRequestAminoMsg): _246.QueryRedemptionRecordRequest;
            fromProtoMsg(message: _246.QueryRedemptionRecordRequestProtoMsg): _246.QueryRedemptionRecordRequest;
            toProto(message: _246.QueryRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _246.QueryRedemptionRecordRequest): _246.QueryRedemptionRecordRequestProtoMsg;
        };
        QueryRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _246.QueryRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _246.QueryRedemptionRecordResponse;
            fromPartial(object: Partial<_246.QueryRedemptionRecordResponse>): _246.QueryRedemptionRecordResponse;
            fromAmino(object: _246.QueryRedemptionRecordResponseAmino): _246.QueryRedemptionRecordResponse;
            toAmino(message: _246.QueryRedemptionRecordResponse): _246.QueryRedemptionRecordResponseAmino;
            fromAminoMsg(object: _246.QueryRedemptionRecordResponseAminoMsg): _246.QueryRedemptionRecordResponse;
            fromProtoMsg(message: _246.QueryRedemptionRecordResponseProtoMsg): _246.QueryRedemptionRecordResponse;
            toProto(message: _246.QueryRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _246.QueryRedemptionRecordResponse): _246.QueryRedemptionRecordResponseProtoMsg;
        };
        QueryRedemptionRecordsRequest: {
            typeUrl: string;
            encode(message: _246.QueryRedemptionRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _246.QueryRedemptionRecordsRequest;
            fromPartial(object: Partial<_246.QueryRedemptionRecordsRequest>): _246.QueryRedemptionRecordsRequest;
            fromAmino(object: _246.QueryRedemptionRecordsRequestAmino): _246.QueryRedemptionRecordsRequest;
            toAmino(message: _246.QueryRedemptionRecordsRequest): _246.QueryRedemptionRecordsRequestAmino;
            fromAminoMsg(object: _246.QueryRedemptionRecordsRequestAminoMsg): _246.QueryRedemptionRecordsRequest;
            fromProtoMsg(message: _246.QueryRedemptionRecordsRequestProtoMsg): _246.QueryRedemptionRecordsRequest;
            toProto(message: _246.QueryRedemptionRecordsRequest): Uint8Array;
            toProtoMsg(message: _246.QueryRedemptionRecordsRequest): _246.QueryRedemptionRecordsRequestProtoMsg;
        };
        QueryRedemptionRecordsResponse: {
            typeUrl: string;
            encode(message: _246.QueryRedemptionRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _246.QueryRedemptionRecordsResponse;
            fromPartial(object: Partial<_246.QueryRedemptionRecordsResponse>): _246.QueryRedemptionRecordsResponse;
            fromAmino(object: _246.QueryRedemptionRecordsResponseAmino): _246.QueryRedemptionRecordsResponse;
            toAmino(message: _246.QueryRedemptionRecordsResponse): _246.QueryRedemptionRecordsResponseAmino;
            fromAminoMsg(object: _246.QueryRedemptionRecordsResponseAminoMsg): _246.QueryRedemptionRecordsResponse;
            fromProtoMsg(message: _246.QueryRedemptionRecordsResponseProtoMsg): _246.QueryRedemptionRecordsResponse;
            toProto(message: _246.QueryRedemptionRecordsResponse): Uint8Array;
            toProtoMsg(message: _246.QueryRedemptionRecordsResponse): _246.QueryRedemptionRecordsResponseProtoMsg;
        };
        QuerySlashRecordsRequest: {
            typeUrl: string;
            encode(_: _246.QuerySlashRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _246.QuerySlashRecordsRequest;
            fromPartial(_: Partial<_246.QuerySlashRecordsRequest>): _246.QuerySlashRecordsRequest;
            fromAmino(_: _246.QuerySlashRecordsRequestAmino): _246.QuerySlashRecordsRequest;
            toAmino(_: _246.QuerySlashRecordsRequest): _246.QuerySlashRecordsRequestAmino;
            fromAminoMsg(object: _246.QuerySlashRecordsRequestAminoMsg): _246.QuerySlashRecordsRequest;
            fromProtoMsg(message: _246.QuerySlashRecordsRequestProtoMsg): _246.QuerySlashRecordsRequest;
            toProto(message: _246.QuerySlashRecordsRequest): Uint8Array;
            toProtoMsg(message: _246.QuerySlashRecordsRequest): _246.QuerySlashRecordsRequestProtoMsg;
        };
        QuerySlashRecordsResponse: {
            typeUrl: string;
            encode(message: _246.QuerySlashRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _246.QuerySlashRecordsResponse;
            fromPartial(object: Partial<_246.QuerySlashRecordsResponse>): _246.QuerySlashRecordsResponse;
            fromAmino(object: _246.QuerySlashRecordsResponseAmino): _246.QuerySlashRecordsResponse;
            toAmino(message: _246.QuerySlashRecordsResponse): _246.QuerySlashRecordsResponseAmino;
            fromAminoMsg(object: _246.QuerySlashRecordsResponseAminoMsg): _246.QuerySlashRecordsResponse;
            fromProtoMsg(message: _246.QuerySlashRecordsResponseProtoMsg): _246.QuerySlashRecordsResponse;
            toProto(message: _246.QuerySlashRecordsResponse): Uint8Array;
            toProtoMsg(message: _246.QuerySlashRecordsResponse): _246.QuerySlashRecordsResponseProtoMsg;
        };
        RedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _246.RedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _246.RedemptionRecordResponse;
            fromPartial(object: Partial<_246.RedemptionRecordResponse>): _246.RedemptionRecordResponse;
            fromAmino(object: _246.RedemptionRecordResponseAmino): _246.RedemptionRecordResponse;
            toAmino(message: _246.RedemptionRecordResponse): _246.RedemptionRecordResponseAmino;
            fromAminoMsg(object: _246.RedemptionRecordResponseAminoMsg): _246.RedemptionRecordResponse;
            fromProtoMsg(message: _246.RedemptionRecordResponseProtoMsg): _246.RedemptionRecordResponse;
            toProto(message: _246.RedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _246.RedemptionRecordResponse): _246.RedemptionRecordResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _245.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _245.Params;
            fromPartial(_: Partial<_245.Params>): _245.Params;
            fromAmino(_: _245.ParamsAmino): _245.Params;
            toAmino(_: _245.Params): _245.ParamsAmino;
            fromAminoMsg(object: _245.ParamsAminoMsg): _245.Params;
            fromProtoMsg(message: _245.ParamsProtoMsg): _245.Params;
            toProto(message: _245.Params): Uint8Array;
            toProtoMsg(message: _245.Params): _245.ParamsProtoMsg;
        };
        TransferInProgressRecordIds: {
            typeUrl: string;
            encode(message: _245.TransferInProgressRecordIds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _245.TransferInProgressRecordIds;
            fromPartial(object: Partial<_245.TransferInProgressRecordIds>): _245.TransferInProgressRecordIds;
            fromAmino(object: _245.TransferInProgressRecordIdsAmino): _245.TransferInProgressRecordIds;
            toAmino(message: _245.TransferInProgressRecordIds): _245.TransferInProgressRecordIdsAmino;
            fromAminoMsg(object: _245.TransferInProgressRecordIdsAminoMsg): _245.TransferInProgressRecordIds;
            fromProtoMsg(message: _245.TransferInProgressRecordIdsProtoMsg): _245.TransferInProgressRecordIds;
            toProto(message: _245.TransferInProgressRecordIds): Uint8Array;
            toProtoMsg(message: _245.TransferInProgressRecordIds): _245.TransferInProgressRecordIdsProtoMsg;
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
    };
    const strdburner: {
        QueryClientImpl: typeof _397.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            strdBurnerAddress(request?: _250.QueryStrdBurnerAddressRequest): Promise<_250.QueryStrdBurnerAddressResponse>;
            totalStrdBurned(request?: _250.QueryTotalStrdBurnedRequest): Promise<_250.QueryTotalStrdBurnedResponse>;
        };
        QueryStrdBurnerAddressRequest: {
            typeUrl: string;
            encode(_: _250.QueryStrdBurnerAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.QueryStrdBurnerAddressRequest;
            fromPartial(_: Partial<_250.QueryStrdBurnerAddressRequest>): _250.QueryStrdBurnerAddressRequest;
            fromAmino(_: _250.QueryStrdBurnerAddressRequestAmino): _250.QueryStrdBurnerAddressRequest;
            toAmino(_: _250.QueryStrdBurnerAddressRequest): _250.QueryStrdBurnerAddressRequestAmino;
            fromAminoMsg(object: _250.QueryStrdBurnerAddressRequestAminoMsg): _250.QueryStrdBurnerAddressRequest;
            fromProtoMsg(message: _250.QueryStrdBurnerAddressRequestProtoMsg): _250.QueryStrdBurnerAddressRequest;
            toProto(message: _250.QueryStrdBurnerAddressRequest): Uint8Array;
            toProtoMsg(message: _250.QueryStrdBurnerAddressRequest): _250.QueryStrdBurnerAddressRequestProtoMsg;
        };
        QueryStrdBurnerAddressResponse: {
            typeUrl: string;
            encode(message: _250.QueryStrdBurnerAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.QueryStrdBurnerAddressResponse;
            fromPartial(object: Partial<_250.QueryStrdBurnerAddressResponse>): _250.QueryStrdBurnerAddressResponse;
            fromAmino(object: _250.QueryStrdBurnerAddressResponseAmino): _250.QueryStrdBurnerAddressResponse;
            toAmino(message: _250.QueryStrdBurnerAddressResponse): _250.QueryStrdBurnerAddressResponseAmino;
            fromAminoMsg(object: _250.QueryStrdBurnerAddressResponseAminoMsg): _250.QueryStrdBurnerAddressResponse;
            fromProtoMsg(message: _250.QueryStrdBurnerAddressResponseProtoMsg): _250.QueryStrdBurnerAddressResponse;
            toProto(message: _250.QueryStrdBurnerAddressResponse): Uint8Array;
            toProtoMsg(message: _250.QueryStrdBurnerAddressResponse): _250.QueryStrdBurnerAddressResponseProtoMsg;
        };
        QueryTotalStrdBurnedRequest: {
            typeUrl: string;
            encode(_: _250.QueryTotalStrdBurnedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.QueryTotalStrdBurnedRequest;
            fromPartial(_: Partial<_250.QueryTotalStrdBurnedRequest>): _250.QueryTotalStrdBurnedRequest;
            fromAmino(_: _250.QueryTotalStrdBurnedRequestAmino): _250.QueryTotalStrdBurnedRequest;
            toAmino(_: _250.QueryTotalStrdBurnedRequest): _250.QueryTotalStrdBurnedRequestAmino;
            fromAminoMsg(object: _250.QueryTotalStrdBurnedRequestAminoMsg): _250.QueryTotalStrdBurnedRequest;
            fromProtoMsg(message: _250.QueryTotalStrdBurnedRequestProtoMsg): _250.QueryTotalStrdBurnedRequest;
            toProto(message: _250.QueryTotalStrdBurnedRequest): Uint8Array;
            toProtoMsg(message: _250.QueryTotalStrdBurnedRequest): _250.QueryTotalStrdBurnedRequestProtoMsg;
        };
        QueryTotalStrdBurnedResponse: {
            typeUrl: string;
            encode(message: _250.QueryTotalStrdBurnedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _250.QueryTotalStrdBurnedResponse;
            fromPartial(object: Partial<_250.QueryTotalStrdBurnedResponse>): _250.QueryTotalStrdBurnedResponse;
            fromAmino(object: _250.QueryTotalStrdBurnedResponseAmino): _250.QueryTotalStrdBurnedResponse;
            toAmino(message: _250.QueryTotalStrdBurnedResponse): _250.QueryTotalStrdBurnedResponseAmino;
            fromAminoMsg(object: _250.QueryTotalStrdBurnedResponseAminoMsg): _250.QueryTotalStrdBurnedResponse;
            fromProtoMsg(message: _250.QueryTotalStrdBurnedResponseProtoMsg): _250.QueryTotalStrdBurnedResponse;
            toProto(message: _250.QueryTotalStrdBurnedResponse): Uint8Array;
            toProtoMsg(message: _250.QueryTotalStrdBurnedResponse): _250.QueryTotalStrdBurnedResponseProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _249.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _249.GenesisState;
            fromPartial(object: Partial<_249.GenesisState>): _249.GenesisState;
            fromAmino(object: _249.GenesisStateAmino): _249.GenesisState;
            toAmino(message: _249.GenesisState): _249.GenesisStateAmino;
            fromAminoMsg(object: _249.GenesisStateAminoMsg): _249.GenesisState;
            fromProtoMsg(message: _249.GenesisStateProtoMsg): _249.GenesisState;
            toProto(message: _249.GenesisState): Uint8Array;
            toProtoMsg(message: _249.GenesisState): _249.GenesisStateProtoMsg;
        };
    };
    const vesting: {
        BaseVestingAccount: {
            typeUrl: string;
            encode(message: _252.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _252.BaseVestingAccount;
            fromPartial(object: Partial<_252.BaseVestingAccount>): _252.BaseVestingAccount;
            fromAmino(object: _252.BaseVestingAccountAmino): _252.BaseVestingAccount;
            toAmino(message: _252.BaseVestingAccount): _252.BaseVestingAccountAmino;
            fromAminoMsg(object: _252.BaseVestingAccountAminoMsg): _252.BaseVestingAccount;
            fromProtoMsg(message: _252.BaseVestingAccountProtoMsg): _252.BaseVestingAccount;
            toProto(message: _252.BaseVestingAccount): Uint8Array;
            toProtoMsg(message: _252.BaseVestingAccount): _252.BaseVestingAccountProtoMsg;
        };
        Period: {
            typeUrl: string;
            encode(message: _252.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _252.Period;
            fromPartial(object: Partial<_252.Period>): _252.Period;
            fromAmino(object: _252.PeriodAmino): _252.Period;
            toAmino(message: _252.Period): _252.PeriodAmino;
            fromAminoMsg(object: _252.PeriodAminoMsg): _252.Period;
            fromProtoMsg(message: _252.PeriodProtoMsg): _252.Period;
            toProto(message: _252.Period): Uint8Array;
            toProtoMsg(message: _252.Period): _252.PeriodProtoMsg;
        };
        StridePeriodicVestingAccount: {
            typeUrl: string;
            encode(message: _252.StridePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _252.StridePeriodicVestingAccount;
            fromPartial(object: Partial<_252.StridePeriodicVestingAccount>): _252.StridePeriodicVestingAccount;
            fromAmino(object: _252.StridePeriodicVestingAccountAmino): _252.StridePeriodicVestingAccount;
            toAmino(message: _252.StridePeriodicVestingAccount): _252.StridePeriodicVestingAccountAmino;
            fromAminoMsg(object: _252.StridePeriodicVestingAccountAminoMsg): _252.StridePeriodicVestingAccount;
            fromProtoMsg(message: _252.StridePeriodicVestingAccountProtoMsg): _252.StridePeriodicVestingAccount;
            toProto(message: _252.StridePeriodicVestingAccount): Uint8Array;
            toProtoMsg(message: _252.StridePeriodicVestingAccount): _252.StridePeriodicVestingAccountProtoMsg;
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
                airdrop: _398.MsgClientImpl;
                auction: _399.MsgClientImpl;
                claim: _400.MsgClientImpl;
                icaoracle: _401.MsgClientImpl;
                icqoracle: _402.MsgClientImpl;
                interchainquery: {
                    v1: _403.MsgClientImpl;
                };
                stakedym: _404.MsgClientImpl;
                stakeibc: _405.MsgClientImpl;
                staketia: _406.MsgClientImpl;
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
                    airdrop(request: _185.QueryAirdropRequest): Promise<_185.QueryAirdropResponse>;
                    allAirdrops(request?: _185.QueryAllAirdropsRequest): Promise<_185.QueryAllAirdropsResponse>;
                    userAllocation(request: _185.QueryUserAllocationRequest): Promise<_185.QueryUserAllocationResponse>;
                    userAllocations(request: _185.QueryUserAllocationsRequest): Promise<_185.QueryUserAllocationsResponse>;
                    allAllocations(request: _185.QueryAllAllocationsRequest): Promise<_185.QueryAllAllocationsResponse>;
                    userSummary(request: _185.QueryUserSummaryRequest): Promise<_185.QueryUserSummaryResponse>;
                };
                auction: {
                    auction(request: _189.QueryAuctionRequest): Promise<_189.QueryAuctionResponse>;
                    auctions(request?: _189.QueryAuctionsRequest): Promise<_189.QueryAuctionsResponse>;
                };
                autopilot: {
                    params(request?: _193.QueryParamsRequest): Promise<_193.QueryParamsResponse>;
                };
                claim: {
                    distributorAccountBalance(request: _197.QueryDistributorAccountBalanceRequest): Promise<_197.QueryDistributorAccountBalanceResponse>;
                    params(request?: _197.QueryParamsRequest): Promise<_197.QueryParamsResponse>;
                    claimRecord(request: _197.QueryClaimRecordRequest): Promise<_197.QueryClaimRecordResponse>;
                    claimableForAction(request: _197.QueryClaimableForActionRequest): Promise<_197.QueryClaimableForActionResponse>;
                    totalClaimable(request: _197.QueryTotalClaimableRequest): Promise<_197.QueryTotalClaimableResponse>;
                    userVestings(request: _197.QueryUserVestingsRequest): Promise<_197.QueryUserVestingsResponse>;
                    claimStatus(request: _197.QueryClaimStatusRequest): Promise<_197.QueryClaimStatusResponse>;
                    claimMetadata(request?: _197.QueryClaimMetadataRequest): Promise<_197.QueryClaimMetadataResponse>;
                };
                epochs: {
                    epochInfos(request?: _200.QueryEpochsInfoRequest): Promise<_200.QueryEpochsInfoResponse>;
                    currentEpoch(request: _200.QueryCurrentEpochRequest): Promise<_200.QueryCurrentEpochResponse>;
                    epochInfo(request: _200.QueryEpochInfoRequest): Promise<_200.QueryEpochInfoResponse>;
                };
                icacallbacks: {
                    params(request?: _205.QueryParamsRequest): Promise<_205.QueryParamsResponse>;
                    callbackData(request: _205.QueryGetCallbackDataRequest): Promise<_205.QueryGetCallbackDataResponse>;
                    callbackDataAll(request?: _205.QueryAllCallbackDataRequest): Promise<_205.QueryAllCallbackDataResponse>;
                };
                icaoracle: {
                    oracle(request: _211.QueryOracleRequest): Promise<_211.QueryOracleResponse>;
                    allOracles(request?: _211.QueryAllOraclesRequest): Promise<_211.QueryAllOraclesResponse>;
                    activeOracles(request: _211.QueryActiveOraclesRequest): Promise<_211.QueryActiveOraclesResponse>;
                    metrics(request: _211.QueryMetricsRequest): Promise<_211.QueryMetricsResponse>;
                };
                icqoracle: {
                    tokenPrice(request: _215.QueryTokenPriceRequest): Promise<_215.TokenPriceResponse>;
                    tokenPrices(request?: _215.QueryTokenPricesRequest): Promise<_215.QueryTokenPricesResponse>;
                    params(request?: _215.QueryParamsRequest): Promise<_215.QueryParamsResponse>;
                    tokenPriceForQuoteDenom(request: _215.QueryTokenPriceForQuoteDenomRequest): Promise<_215.QueryTokenPriceForQuoteDenomResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _222.QueryParamsRequest): Promise<_222.QueryParamsResponse>;
                        epochProvisions(request?: _222.QueryEpochProvisionsRequest): Promise<_222.QueryEpochProvisionsResponse>;
                    };
                };
                records: {
                    params(request?: _226.QueryParamsRequest): Promise<_226.QueryParamsResponse>;
                    userRedemptionRecord(request: _226.QueryGetUserRedemptionRecordRequest): Promise<_226.QueryGetUserRedemptionRecordResponse>;
                    userRedemptionRecordAll(request?: _226.QueryAllUserRedemptionRecordRequest): Promise<_226.QueryAllUserRedemptionRecordResponse>;
                    userRedemptionRecordForUser(request: _226.QueryAllUserRedemptionRecordForUserRequest): Promise<_226.QueryAllUserRedemptionRecordForUserResponse>;
                    epochUnbondingRecord(request: _226.QueryGetEpochUnbondingRecordRequest): Promise<_226.QueryGetEpochUnbondingRecordResponse>;
                    epochUnbondingRecordAll(request?: _226.QueryAllEpochUnbondingRecordRequest): Promise<_226.QueryAllEpochUnbondingRecordResponse>;
                    depositRecord(request: _226.QueryGetDepositRecordRequest): Promise<_226.QueryGetDepositRecordResponse>;
                    depositRecordAll(request?: _226.QueryAllDepositRecordRequest): Promise<_226.QueryAllDepositRecordResponse>;
                    depositRecordByHost(request: _226.QueryDepositRecordByHostRequest): Promise<_226.QueryDepositRecordByHostResponse>;
                    lSMDeposit(request: _226.QueryLSMDepositRequest): Promise<_226.QueryLSMDepositResponse>;
                    lSMDeposits(request: _226.QueryLSMDepositsRequest): Promise<_226.QueryLSMDepositsResponse>;
                };
                stakedym: {
                    hostZone(request?: _229.QueryHostZoneRequest): Promise<_229.QueryHostZoneResponse>;
                    delegationRecords(request: _229.QueryDelegationRecordsRequest): Promise<_229.QueryDelegationRecordsResponse>;
                    unbondingRecords(request: _229.QueryUnbondingRecordsRequest): Promise<_229.QueryUnbondingRecordsResponse>;
                    redemptionRecord(request: _229.QueryRedemptionRecordRequest): Promise<_229.QueryRedemptionRecordResponse>;
                    redemptionRecords(request: _229.QueryRedemptionRecordsRequest): Promise<_229.QueryRedemptionRecordsResponse>;
                    slashRecords(request?: _229.QuerySlashRecordsRequest): Promise<_229.QuerySlashRecordsResponse>;
                };
                stakeibc: {
                    params(request?: _241.QueryParamsRequest): Promise<_241.QueryParamsResponse>;
                    validators(request: _241.QueryGetValidatorsRequest): Promise<_241.QueryGetValidatorsResponse>;
                    hostZone(request: _241.QueryGetHostZoneRequest): Promise<_241.QueryGetHostZoneResponse>;
                    hostZoneAll(request?: _241.QueryAllHostZoneRequest): Promise<_241.QueryAllHostZoneResponse>;
                    moduleAddress(request: _241.QueryModuleAddressRequest): Promise<_241.QueryModuleAddressResponse>;
                    interchainAccountFromAddress(request: _241.QueryInterchainAccountFromAddressRequest): Promise<_241.QueryInterchainAccountFromAddressResponse>;
                    epochTracker(request: _241.QueryGetEpochTrackerRequest): Promise<_241.QueryGetEpochTrackerResponse>;
                    epochTrackerAll(request?: _241.QueryAllEpochTrackerRequest): Promise<_241.QueryAllEpochTrackerResponse>;
                    nextPacketSequence(request: _241.QueryGetNextPacketSequenceRequest): Promise<_241.QueryGetNextPacketSequenceResponse>;
                    addressUnbondings(request: _241.QueryAddressUnbondings): Promise<_241.QueryAddressUnbondingsResponse>;
                    allTradeRoutes(request?: _241.QueryAllTradeRoutes): Promise<_241.QueryAllTradeRoutesResponse>;
                };
                staketia: {
                    hostZone(request?: _246.QueryHostZoneRequest): Promise<_246.QueryHostZoneResponse>;
                    delegationRecords(request: _246.QueryDelegationRecordsRequest): Promise<_246.QueryDelegationRecordsResponse>;
                    unbondingRecords(request: _246.QueryUnbondingRecordsRequest): Promise<_246.QueryUnbondingRecordsResponse>;
                    redemptionRecord(request: _246.QueryRedemptionRecordRequest): Promise<_246.QueryRedemptionRecordResponse>;
                    redemptionRecords(request: _246.QueryRedemptionRecordsRequest): Promise<_246.QueryRedemptionRecordsResponse>;
                    slashRecords(request?: _246.QuerySlashRecordsRequest): Promise<_246.QuerySlashRecordsResponse>;
                };
                strdburner: {
                    strdBurnerAddress(request?: _250.QueryStrdBurnerAddressRequest): Promise<_250.QueryStrdBurnerAddressResponse>;
                    totalStrdBurned(request?: _250.QueryTotalStrdBurnedRequest): Promise<_250.QueryTotalStrdBurnedResponse>;
                };
            };
        }>;
    };
}
