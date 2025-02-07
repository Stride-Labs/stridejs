import * as _123 from "./airdrop/airdrop";
import * as _124 from "./airdrop/genesis";
import * as _125 from "./airdrop/query";
import * as _126 from "./airdrop/tx";
import * as _127 from "./autopilot/genesis";
import * as _128 from "./autopilot/params";
import * as _129 from "./autopilot/query";
import * as _130 from "./claim/claim";
import * as _131 from "./claim/genesis";
import * as _132 from "./claim/params";
import * as _133 from "./claim/query";
import * as _134 from "./claim/tx";
import * as _135 from "./epochs/genesis";
import * as _136 from "./epochs/query";
import * as _137 from "./icacallbacks/callback_data";
import * as _138 from "./icacallbacks/genesis";
import * as _139 from "./icacallbacks/packet";
import * as _140 from "./icacallbacks/params";
import * as _141 from "./icacallbacks/query";
import * as _143 from "./icaoracle/callbacks";
import * as _144 from "./icaoracle/contract";
import * as _145 from "./icaoracle/genesis";
import * as _146 from "./icaoracle/icaoracle";
import * as _147 from "./icaoracle/query";
import * as _148 from "./icaoracle/tx";
import * as _149 from "./interchainquery/v1/genesis";
import * as _150 from "./interchainquery/v1/messages";
import * as _151 from "./interchainquery/v1/query";
import * as _152 from "./mint/v1beta1/genesis";
import * as _153 from "./mint/v1beta1/mint";
import * as _154 from "./mint/v1beta1/query";
import * as _155 from "./records/callbacks";
import * as _156 from "./records/genesis";
import * as _157 from "./records/params";
import * as _158 from "./records/query";
import * as _159 from "./records/records";
import * as _160 from "./stakedym/genesis";
import * as _161 from "./stakedym/query";
import * as _162 from "./stakedym/stakedym";
import * as _163 from "./stakedym/tx";
import * as _164 from "./stakeibc/address_unbonding";
import * as _165 from "./stakeibc/callbacks";
import * as _166 from "./stakeibc/epoch_tracker";
import * as _167 from "./stakeibc/genesis";
import * as _168 from "./stakeibc/gov";
import * as _169 from "./stakeibc/host_zone";
import * as _170 from "./stakeibc/ica_account";
import * as _171 from "./stakeibc/packet";
import * as _172 from "./stakeibc/params";
import * as _173 from "./stakeibc/query";
import * as _174 from "./stakeibc/trade_route";
import * as _175 from "./stakeibc/tx";
import * as _176 from "./stakeibc/validator";
import * as _177 from "./staketia/genesis";
import * as _178 from "./staketia/query";
import * as _179 from "./staketia/staketia";
import * as _180 from "./staketia/tx";
import * as _182 from "./vesting/vesting";
import * as _278 from "./airdrop/query.rpc.Query";
import * as _279 from "./autopilot/query.rpc.Query";
import * as _280 from "./claim/query.rpc.Query";
import * as _281 from "./epochs/query.rpc.Query";
import * as _282 from "./icacallbacks/query.rpc.Query";
import * as _283 from "./icaoracle/query.rpc.Query";
import * as _284 from "./mint/v1beta1/query.rpc.Query";
import * as _285 from "./records/query.rpc.Query";
import * as _286 from "./stakedym/query.rpc.Query";
import * as _287 from "./stakeibc/query.rpc.Query";
import * as _288 from "./staketia/query.rpc.Query";
import * as _289 from "./airdrop/tx.rpc.msg";
import * as _290 from "./claim/tx.rpc.msg";
import * as _291 from "./icaoracle/tx.rpc.msg";
import * as _292 from "./interchainquery/v1/messages.rpc.msg";
import * as _293 from "./stakedym/tx.rpc.msg";
import * as _294 from "./stakeibc/tx.rpc.msg";
import * as _295 from "./staketia/tx.rpc.msg";
export declare namespace stride {
    const airdrop: {
        MsgClientImpl: typeof _289.MsgClientImpl;
        QueryClientImpl: typeof _278.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            airdrop(request: _125.QueryAirdropRequest): Promise<_125.QueryAirdropResponse>;
            allAirdrops(request?: _125.QueryAllAirdropsRequest): Promise<_125.QueryAllAirdropsResponse>;
            userAllocation(request: _125.QueryUserAllocationRequest): Promise<_125.QueryUserAllocationResponse>;
            userAllocations(request: _125.QueryUserAllocationsRequest): Promise<_125.QueryUserAllocationsResponse>;
            allAllocations(request: _125.QueryAllAllocationsRequest): Promise<_125.QueryAllAllocationsResponse>;
            userSummary(request: _125.QueryUserSummaryRequest): Promise<_125.QueryUserSummaryResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                claimDaily(value: _126.MsgClaimDaily): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimEarly(value: _126.MsgClaimEarly): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAirdrop(value: _126.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateAirdrop(value: _126.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addAllocations(value: _126.MsgAddAllocations): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateUserAllocation(value: _126.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                linkAddresses(value: _126.MsgLinkAddresses): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                claimDaily(value: _126.MsgClaimDaily): {
                    typeUrl: string;
                    value: _126.MsgClaimDaily;
                };
                claimEarly(value: _126.MsgClaimEarly): {
                    typeUrl: string;
                    value: _126.MsgClaimEarly;
                };
                createAirdrop(value: _126.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _126.MsgCreateAirdrop;
                };
                updateAirdrop(value: _126.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: _126.MsgUpdateAirdrop;
                };
                addAllocations(value: _126.MsgAddAllocations): {
                    typeUrl: string;
                    value: _126.MsgAddAllocations;
                };
                updateUserAllocation(value: _126.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: _126.MsgUpdateUserAllocation;
                };
                linkAddresses(value: _126.MsgLinkAddresses): {
                    typeUrl: string;
                    value: _126.MsgLinkAddresses;
                };
            };
            fromPartial: {
                claimDaily(value: _126.MsgClaimDaily): {
                    typeUrl: string;
                    value: _126.MsgClaimDaily;
                };
                claimEarly(value: _126.MsgClaimEarly): {
                    typeUrl: string;
                    value: _126.MsgClaimEarly;
                };
                createAirdrop(value: _126.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _126.MsgCreateAirdrop;
                };
                updateAirdrop(value: _126.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: _126.MsgUpdateAirdrop;
                };
                addAllocations(value: _126.MsgAddAllocations): {
                    typeUrl: string;
                    value: _126.MsgAddAllocations;
                };
                updateUserAllocation(value: _126.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: _126.MsgUpdateUserAllocation;
                };
                linkAddresses(value: _126.MsgLinkAddresses): {
                    typeUrl: string;
                    value: _126.MsgLinkAddresses;
                };
            };
        };
        AminoConverter: {
            "/stride.airdrop.MsgClaimDaily": {
                aminoType: string;
                toAmino: (message: _126.MsgClaimDaily) => _126.MsgClaimDailyAmino;
                fromAmino: (object: _126.MsgClaimDailyAmino) => _126.MsgClaimDaily;
            };
            "/stride.airdrop.MsgClaimEarly": {
                aminoType: string;
                toAmino: (message: _126.MsgClaimEarly) => _126.MsgClaimEarlyAmino;
                fromAmino: (object: _126.MsgClaimEarlyAmino) => _126.MsgClaimEarly;
            };
            "/stride.airdrop.MsgCreateAirdrop": {
                aminoType: string;
                toAmino: (message: _126.MsgCreateAirdrop) => _126.MsgCreateAirdropAmino;
                fromAmino: (object: _126.MsgCreateAirdropAmino) => _126.MsgCreateAirdrop;
            };
            "/stride.airdrop.MsgUpdateAirdrop": {
                aminoType: string;
                toAmino: (message: _126.MsgUpdateAirdrop) => _126.MsgUpdateAirdropAmino;
                fromAmino: (object: _126.MsgUpdateAirdropAmino) => _126.MsgUpdateAirdrop;
            };
            "/stride.airdrop.MsgAddAllocations": {
                aminoType: string;
                toAmino: (message: _126.MsgAddAllocations) => _126.MsgAddAllocationsAmino;
                fromAmino: (object: _126.MsgAddAllocationsAmino) => _126.MsgAddAllocations;
            };
            "/stride.airdrop.MsgUpdateUserAllocation": {
                aminoType: string;
                toAmino: (message: _126.MsgUpdateUserAllocation) => _126.MsgUpdateUserAllocationAmino;
                fromAmino: (object: _126.MsgUpdateUserAllocationAmino) => _126.MsgUpdateUserAllocation;
            };
            "/stride.airdrop.MsgLinkAddresses": {
                aminoType: string;
                toAmino: (message: _126.MsgLinkAddresses) => _126.MsgLinkAddressesAmino;
                fromAmino: (object: _126.MsgLinkAddressesAmino) => _126.MsgLinkAddresses;
            };
        };
        MsgClaimDaily: {
            typeUrl: string;
            encode(message: _126.MsgClaimDaily, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.MsgClaimDaily;
            fromPartial(object: Partial<_126.MsgClaimDaily>): _126.MsgClaimDaily;
            fromAmino(object: _126.MsgClaimDailyAmino): _126.MsgClaimDaily;
            toAmino(message: _126.MsgClaimDaily): _126.MsgClaimDailyAmino;
            fromAminoMsg(object: _126.MsgClaimDailyAminoMsg): _126.MsgClaimDaily;
            toAminoMsg(message: _126.MsgClaimDaily): _126.MsgClaimDailyAminoMsg;
            fromProtoMsg(message: _126.MsgClaimDailyProtoMsg): _126.MsgClaimDaily;
            toProto(message: _126.MsgClaimDaily): Uint8Array;
            toProtoMsg(message: _126.MsgClaimDaily): _126.MsgClaimDailyProtoMsg;
        };
        MsgClaimDailyResponse: {
            typeUrl: string;
            encode(_: _126.MsgClaimDailyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.MsgClaimDailyResponse;
            fromPartial(_: Partial<_126.MsgClaimDailyResponse>): _126.MsgClaimDailyResponse;
            fromAmino(_: _126.MsgClaimDailyResponseAmino): _126.MsgClaimDailyResponse;
            toAmino(_: _126.MsgClaimDailyResponse): _126.MsgClaimDailyResponseAmino;
            fromAminoMsg(object: _126.MsgClaimDailyResponseAminoMsg): _126.MsgClaimDailyResponse;
            fromProtoMsg(message: _126.MsgClaimDailyResponseProtoMsg): _126.MsgClaimDailyResponse;
            toProto(message: _126.MsgClaimDailyResponse): Uint8Array;
            toProtoMsg(message: _126.MsgClaimDailyResponse): _126.MsgClaimDailyResponseProtoMsg;
        };
        MsgClaimEarly: {
            typeUrl: string;
            encode(message: _126.MsgClaimEarly, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.MsgClaimEarly;
            fromPartial(object: Partial<_126.MsgClaimEarly>): _126.MsgClaimEarly;
            fromAmino(object: _126.MsgClaimEarlyAmino): _126.MsgClaimEarly;
            toAmino(message: _126.MsgClaimEarly): _126.MsgClaimEarlyAmino;
            fromAminoMsg(object: _126.MsgClaimEarlyAminoMsg): _126.MsgClaimEarly;
            toAminoMsg(message: _126.MsgClaimEarly): _126.MsgClaimEarlyAminoMsg;
            fromProtoMsg(message: _126.MsgClaimEarlyProtoMsg): _126.MsgClaimEarly;
            toProto(message: _126.MsgClaimEarly): Uint8Array;
            toProtoMsg(message: _126.MsgClaimEarly): _126.MsgClaimEarlyProtoMsg;
        };
        MsgClaimEarlyResponse: {
            typeUrl: string;
            encode(_: _126.MsgClaimEarlyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.MsgClaimEarlyResponse;
            fromPartial(_: Partial<_126.MsgClaimEarlyResponse>): _126.MsgClaimEarlyResponse;
            fromAmino(_: _126.MsgClaimEarlyResponseAmino): _126.MsgClaimEarlyResponse;
            toAmino(_: _126.MsgClaimEarlyResponse): _126.MsgClaimEarlyResponseAmino;
            fromAminoMsg(object: _126.MsgClaimEarlyResponseAminoMsg): _126.MsgClaimEarlyResponse;
            fromProtoMsg(message: _126.MsgClaimEarlyResponseProtoMsg): _126.MsgClaimEarlyResponse;
            toProto(message: _126.MsgClaimEarlyResponse): Uint8Array;
            toProtoMsg(message: _126.MsgClaimEarlyResponse): _126.MsgClaimEarlyResponseProtoMsg;
        };
        MsgCreateAirdrop: {
            typeUrl: string;
            encode(message: _126.MsgCreateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.MsgCreateAirdrop;
            fromPartial(object: Partial<_126.MsgCreateAirdrop>): _126.MsgCreateAirdrop;
            fromAmino(object: _126.MsgCreateAirdropAmino): _126.MsgCreateAirdrop;
            toAmino(message: _126.MsgCreateAirdrop): _126.MsgCreateAirdropAmino;
            fromAminoMsg(object: _126.MsgCreateAirdropAminoMsg): _126.MsgCreateAirdrop;
            toAminoMsg(message: _126.MsgCreateAirdrop): _126.MsgCreateAirdropAminoMsg;
            fromProtoMsg(message: _126.MsgCreateAirdropProtoMsg): _126.MsgCreateAirdrop;
            toProto(message: _126.MsgCreateAirdrop): Uint8Array;
            toProtoMsg(message: _126.MsgCreateAirdrop): _126.MsgCreateAirdropProtoMsg;
        };
        MsgCreateAirdropResponse: {
            typeUrl: string;
            encode(_: _126.MsgCreateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.MsgCreateAirdropResponse;
            fromPartial(_: Partial<_126.MsgCreateAirdropResponse>): _126.MsgCreateAirdropResponse;
            fromAmino(_: _126.MsgCreateAirdropResponseAmino): _126.MsgCreateAirdropResponse;
            toAmino(_: _126.MsgCreateAirdropResponse): _126.MsgCreateAirdropResponseAmino;
            fromAminoMsg(object: _126.MsgCreateAirdropResponseAminoMsg): _126.MsgCreateAirdropResponse;
            fromProtoMsg(message: _126.MsgCreateAirdropResponseProtoMsg): _126.MsgCreateAirdropResponse;
            toProto(message: _126.MsgCreateAirdropResponse): Uint8Array;
            toProtoMsg(message: _126.MsgCreateAirdropResponse): _126.MsgCreateAirdropResponseProtoMsg;
        };
        MsgUpdateAirdrop: {
            typeUrl: string;
            encode(message: _126.MsgUpdateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.MsgUpdateAirdrop;
            fromPartial(object: Partial<_126.MsgUpdateAirdrop>): _126.MsgUpdateAirdrop;
            fromAmino(object: _126.MsgUpdateAirdropAmino): _126.MsgUpdateAirdrop;
            toAmino(message: _126.MsgUpdateAirdrop): _126.MsgUpdateAirdropAmino;
            fromAminoMsg(object: _126.MsgUpdateAirdropAminoMsg): _126.MsgUpdateAirdrop;
            toAminoMsg(message: _126.MsgUpdateAirdrop): _126.MsgUpdateAirdropAminoMsg;
            fromProtoMsg(message: _126.MsgUpdateAirdropProtoMsg): _126.MsgUpdateAirdrop;
            toProto(message: _126.MsgUpdateAirdrop): Uint8Array;
            toProtoMsg(message: _126.MsgUpdateAirdrop): _126.MsgUpdateAirdropProtoMsg;
        };
        MsgUpdateAirdropResponse: {
            typeUrl: string;
            encode(_: _126.MsgUpdateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.MsgUpdateAirdropResponse;
            fromPartial(_: Partial<_126.MsgUpdateAirdropResponse>): _126.MsgUpdateAirdropResponse;
            fromAmino(_: _126.MsgUpdateAirdropResponseAmino): _126.MsgUpdateAirdropResponse;
            toAmino(_: _126.MsgUpdateAirdropResponse): _126.MsgUpdateAirdropResponseAmino;
            fromAminoMsg(object: _126.MsgUpdateAirdropResponseAminoMsg): _126.MsgUpdateAirdropResponse;
            fromProtoMsg(message: _126.MsgUpdateAirdropResponseProtoMsg): _126.MsgUpdateAirdropResponse;
            toProto(message: _126.MsgUpdateAirdropResponse): Uint8Array;
            toProtoMsg(message: _126.MsgUpdateAirdropResponse): _126.MsgUpdateAirdropResponseProtoMsg;
        };
        RawAllocation: {
            typeUrl: string;
            encode(message: _126.RawAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.RawAllocation;
            fromPartial(object: Partial<_126.RawAllocation>): _126.RawAllocation;
            fromAmino(object: _126.RawAllocationAmino): _126.RawAllocation;
            toAmino(message: _126.RawAllocation): _126.RawAllocationAmino;
            fromAminoMsg(object: _126.RawAllocationAminoMsg): _126.RawAllocation;
            fromProtoMsg(message: _126.RawAllocationProtoMsg): _126.RawAllocation;
            toProto(message: _126.RawAllocation): Uint8Array;
            toProtoMsg(message: _126.RawAllocation): _126.RawAllocationProtoMsg;
        };
        MsgAddAllocations: {
            typeUrl: string;
            encode(message: _126.MsgAddAllocations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.MsgAddAllocations;
            fromPartial(object: Partial<_126.MsgAddAllocations>): _126.MsgAddAllocations;
            fromAmino(object: _126.MsgAddAllocationsAmino): _126.MsgAddAllocations;
            toAmino(message: _126.MsgAddAllocations): _126.MsgAddAllocationsAmino;
            fromAminoMsg(object: _126.MsgAddAllocationsAminoMsg): _126.MsgAddAllocations;
            toAminoMsg(message: _126.MsgAddAllocations): _126.MsgAddAllocationsAminoMsg;
            fromProtoMsg(message: _126.MsgAddAllocationsProtoMsg): _126.MsgAddAllocations;
            toProto(message: _126.MsgAddAllocations): Uint8Array;
            toProtoMsg(message: _126.MsgAddAllocations): _126.MsgAddAllocationsProtoMsg;
        };
        MsgAddAllocationsResponse: {
            typeUrl: string;
            encode(_: _126.MsgAddAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.MsgAddAllocationsResponse;
            fromPartial(_: Partial<_126.MsgAddAllocationsResponse>): _126.MsgAddAllocationsResponse;
            fromAmino(_: _126.MsgAddAllocationsResponseAmino): _126.MsgAddAllocationsResponse;
            toAmino(_: _126.MsgAddAllocationsResponse): _126.MsgAddAllocationsResponseAmino;
            fromAminoMsg(object: _126.MsgAddAllocationsResponseAminoMsg): _126.MsgAddAllocationsResponse;
            fromProtoMsg(message: _126.MsgAddAllocationsResponseProtoMsg): _126.MsgAddAllocationsResponse;
            toProto(message: _126.MsgAddAllocationsResponse): Uint8Array;
            toProtoMsg(message: _126.MsgAddAllocationsResponse): _126.MsgAddAllocationsResponseProtoMsg;
        };
        MsgUpdateUserAllocation: {
            typeUrl: string;
            encode(message: _126.MsgUpdateUserAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.MsgUpdateUserAllocation;
            fromPartial(object: Partial<_126.MsgUpdateUserAllocation>): _126.MsgUpdateUserAllocation;
            fromAmino(object: _126.MsgUpdateUserAllocationAmino): _126.MsgUpdateUserAllocation;
            toAmino(message: _126.MsgUpdateUserAllocation): _126.MsgUpdateUserAllocationAmino;
            fromAminoMsg(object: _126.MsgUpdateUserAllocationAminoMsg): _126.MsgUpdateUserAllocation;
            toAminoMsg(message: _126.MsgUpdateUserAllocation): _126.MsgUpdateUserAllocationAminoMsg;
            fromProtoMsg(message: _126.MsgUpdateUserAllocationProtoMsg): _126.MsgUpdateUserAllocation;
            toProto(message: _126.MsgUpdateUserAllocation): Uint8Array;
            toProtoMsg(message: _126.MsgUpdateUserAllocation): _126.MsgUpdateUserAllocationProtoMsg;
        };
        MsgUpdateUserAllocationResponse: {
            typeUrl: string;
            encode(_: _126.MsgUpdateUserAllocationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.MsgUpdateUserAllocationResponse;
            fromPartial(_: Partial<_126.MsgUpdateUserAllocationResponse>): _126.MsgUpdateUserAllocationResponse;
            fromAmino(_: _126.MsgUpdateUserAllocationResponseAmino): _126.MsgUpdateUserAllocationResponse;
            toAmino(_: _126.MsgUpdateUserAllocationResponse): _126.MsgUpdateUserAllocationResponseAmino;
            fromAminoMsg(object: _126.MsgUpdateUserAllocationResponseAminoMsg): _126.MsgUpdateUserAllocationResponse;
            fromProtoMsg(message: _126.MsgUpdateUserAllocationResponseProtoMsg): _126.MsgUpdateUserAllocationResponse;
            toProto(message: _126.MsgUpdateUserAllocationResponse): Uint8Array;
            toProtoMsg(message: _126.MsgUpdateUserAllocationResponse): _126.MsgUpdateUserAllocationResponseProtoMsg;
        };
        MsgLinkAddresses: {
            typeUrl: string;
            encode(message: _126.MsgLinkAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.MsgLinkAddresses;
            fromPartial(object: Partial<_126.MsgLinkAddresses>): _126.MsgLinkAddresses;
            fromAmino(object: _126.MsgLinkAddressesAmino): _126.MsgLinkAddresses;
            toAmino(message: _126.MsgLinkAddresses): _126.MsgLinkAddressesAmino;
            fromAminoMsg(object: _126.MsgLinkAddressesAminoMsg): _126.MsgLinkAddresses;
            toAminoMsg(message: _126.MsgLinkAddresses): _126.MsgLinkAddressesAminoMsg;
            fromProtoMsg(message: _126.MsgLinkAddressesProtoMsg): _126.MsgLinkAddresses;
            toProto(message: _126.MsgLinkAddresses): Uint8Array;
            toProtoMsg(message: _126.MsgLinkAddresses): _126.MsgLinkAddressesProtoMsg;
        };
        MsgLinkAddressesResponse: {
            typeUrl: string;
            encode(_: _126.MsgLinkAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.MsgLinkAddressesResponse;
            fromPartial(_: Partial<_126.MsgLinkAddressesResponse>): _126.MsgLinkAddressesResponse;
            fromAmino(_: _126.MsgLinkAddressesResponseAmino): _126.MsgLinkAddressesResponse;
            toAmino(_: _126.MsgLinkAddressesResponse): _126.MsgLinkAddressesResponseAmino;
            fromAminoMsg(object: _126.MsgLinkAddressesResponseAminoMsg): _126.MsgLinkAddressesResponse;
            fromProtoMsg(message: _126.MsgLinkAddressesResponseProtoMsg): _126.MsgLinkAddressesResponse;
            toProto(message: _126.MsgLinkAddressesResponse): Uint8Array;
            toProtoMsg(message: _126.MsgLinkAddressesResponse): _126.MsgLinkAddressesResponseProtoMsg;
        };
        QueryAirdropRequest: {
            typeUrl: string;
            encode(message: _125.QueryAirdropRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.QueryAirdropRequest;
            fromPartial(object: Partial<_125.QueryAirdropRequest>): _125.QueryAirdropRequest;
            fromAmino(object: _125.QueryAirdropRequestAmino): _125.QueryAirdropRequest;
            toAmino(message: _125.QueryAirdropRequest): _125.QueryAirdropRequestAmino;
            fromAminoMsg(object: _125.QueryAirdropRequestAminoMsg): _125.QueryAirdropRequest;
            fromProtoMsg(message: _125.QueryAirdropRequestProtoMsg): _125.QueryAirdropRequest;
            toProto(message: _125.QueryAirdropRequest): Uint8Array;
            toProtoMsg(message: _125.QueryAirdropRequest): _125.QueryAirdropRequestProtoMsg;
        };
        QueryAirdropResponse: {
            typeUrl: string;
            encode(message: _125.QueryAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.QueryAirdropResponse;
            fromPartial(object: Partial<_125.QueryAirdropResponse>): _125.QueryAirdropResponse;
            fromAmino(object: _125.QueryAirdropResponseAmino): _125.QueryAirdropResponse;
            toAmino(message: _125.QueryAirdropResponse): _125.QueryAirdropResponseAmino;
            fromAminoMsg(object: _125.QueryAirdropResponseAminoMsg): _125.QueryAirdropResponse;
            fromProtoMsg(message: _125.QueryAirdropResponseProtoMsg): _125.QueryAirdropResponse;
            toProto(message: _125.QueryAirdropResponse): Uint8Array;
            toProtoMsg(message: _125.QueryAirdropResponse): _125.QueryAirdropResponseProtoMsg;
        };
        QueryAllAirdropsRequest: {
            typeUrl: string;
            encode(_: _125.QueryAllAirdropsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.QueryAllAirdropsRequest;
            fromPartial(_: Partial<_125.QueryAllAirdropsRequest>): _125.QueryAllAirdropsRequest;
            fromAmino(_: _125.QueryAllAirdropsRequestAmino): _125.QueryAllAirdropsRequest;
            toAmino(_: _125.QueryAllAirdropsRequest): _125.QueryAllAirdropsRequestAmino;
            fromAminoMsg(object: _125.QueryAllAirdropsRequestAminoMsg): _125.QueryAllAirdropsRequest;
            fromProtoMsg(message: _125.QueryAllAirdropsRequestProtoMsg): _125.QueryAllAirdropsRequest;
            toProto(message: _125.QueryAllAirdropsRequest): Uint8Array;
            toProtoMsg(message: _125.QueryAllAirdropsRequest): _125.QueryAllAirdropsRequestProtoMsg;
        };
        QueryAllAirdropsResponse: {
            typeUrl: string;
            encode(message: _125.QueryAllAirdropsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.QueryAllAirdropsResponse;
            fromPartial(object: Partial<_125.QueryAllAirdropsResponse>): _125.QueryAllAirdropsResponse;
            fromAmino(object: _125.QueryAllAirdropsResponseAmino): _125.QueryAllAirdropsResponse;
            toAmino(message: _125.QueryAllAirdropsResponse): _125.QueryAllAirdropsResponseAmino;
            fromAminoMsg(object: _125.QueryAllAirdropsResponseAminoMsg): _125.QueryAllAirdropsResponse;
            fromProtoMsg(message: _125.QueryAllAirdropsResponseProtoMsg): _125.QueryAllAirdropsResponse;
            toProto(message: _125.QueryAllAirdropsResponse): Uint8Array;
            toProtoMsg(message: _125.QueryAllAirdropsResponse): _125.QueryAllAirdropsResponseProtoMsg;
        };
        QueryUserAllocationRequest: {
            typeUrl: string;
            encode(message: _125.QueryUserAllocationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.QueryUserAllocationRequest;
            fromPartial(object: Partial<_125.QueryUserAllocationRequest>): _125.QueryUserAllocationRequest;
            fromAmino(object: _125.QueryUserAllocationRequestAmino): _125.QueryUserAllocationRequest;
            toAmino(message: _125.QueryUserAllocationRequest): _125.QueryUserAllocationRequestAmino;
            fromAminoMsg(object: _125.QueryUserAllocationRequestAminoMsg): _125.QueryUserAllocationRequest;
            fromProtoMsg(message: _125.QueryUserAllocationRequestProtoMsg): _125.QueryUserAllocationRequest;
            toProto(message: _125.QueryUserAllocationRequest): Uint8Array;
            toProtoMsg(message: _125.QueryUserAllocationRequest): _125.QueryUserAllocationRequestProtoMsg;
        };
        QueryUserAllocationResponse: {
            typeUrl: string;
            encode(message: _125.QueryUserAllocationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.QueryUserAllocationResponse;
            fromPartial(object: Partial<_125.QueryUserAllocationResponse>): _125.QueryUserAllocationResponse;
            fromAmino(object: _125.QueryUserAllocationResponseAmino): _125.QueryUserAllocationResponse;
            toAmino(message: _125.QueryUserAllocationResponse): _125.QueryUserAllocationResponseAmino;
            fromAminoMsg(object: _125.QueryUserAllocationResponseAminoMsg): _125.QueryUserAllocationResponse;
            fromProtoMsg(message: _125.QueryUserAllocationResponseProtoMsg): _125.QueryUserAllocationResponse;
            toProto(message: _125.QueryUserAllocationResponse): Uint8Array;
            toProtoMsg(message: _125.QueryUserAllocationResponse): _125.QueryUserAllocationResponseProtoMsg;
        };
        QueryUserAllocationsRequest: {
            typeUrl: string;
            encode(message: _125.QueryUserAllocationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.QueryUserAllocationsRequest;
            fromPartial(object: Partial<_125.QueryUserAllocationsRequest>): _125.QueryUserAllocationsRequest;
            fromAmino(object: _125.QueryUserAllocationsRequestAmino): _125.QueryUserAllocationsRequest;
            toAmino(message: _125.QueryUserAllocationsRequest): _125.QueryUserAllocationsRequestAmino;
            fromAminoMsg(object: _125.QueryUserAllocationsRequestAminoMsg): _125.QueryUserAllocationsRequest;
            fromProtoMsg(message: _125.QueryUserAllocationsRequestProtoMsg): _125.QueryUserAllocationsRequest;
            toProto(message: _125.QueryUserAllocationsRequest): Uint8Array;
            toProtoMsg(message: _125.QueryUserAllocationsRequest): _125.QueryUserAllocationsRequestProtoMsg;
        };
        QueryUserAllocationsResponse: {
            typeUrl: string;
            encode(message: _125.QueryUserAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.QueryUserAllocationsResponse;
            fromPartial(object: Partial<_125.QueryUserAllocationsResponse>): _125.QueryUserAllocationsResponse;
            fromAmino(object: _125.QueryUserAllocationsResponseAmino): _125.QueryUserAllocationsResponse;
            toAmino(message: _125.QueryUserAllocationsResponse): _125.QueryUserAllocationsResponseAmino;
            fromAminoMsg(object: _125.QueryUserAllocationsResponseAminoMsg): _125.QueryUserAllocationsResponse;
            fromProtoMsg(message: _125.QueryUserAllocationsResponseProtoMsg): _125.QueryUserAllocationsResponse;
            toProto(message: _125.QueryUserAllocationsResponse): Uint8Array;
            toProtoMsg(message: _125.QueryUserAllocationsResponse): _125.QueryUserAllocationsResponseProtoMsg;
        };
        QueryAllAllocationsRequest: {
            typeUrl: string;
            encode(message: _125.QueryAllAllocationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.QueryAllAllocationsRequest;
            fromPartial(object: Partial<_125.QueryAllAllocationsRequest>): _125.QueryAllAllocationsRequest;
            fromAmino(object: _125.QueryAllAllocationsRequestAmino): _125.QueryAllAllocationsRequest;
            toAmino(message: _125.QueryAllAllocationsRequest): _125.QueryAllAllocationsRequestAmino;
            fromAminoMsg(object: _125.QueryAllAllocationsRequestAminoMsg): _125.QueryAllAllocationsRequest;
            fromProtoMsg(message: _125.QueryAllAllocationsRequestProtoMsg): _125.QueryAllAllocationsRequest;
            toProto(message: _125.QueryAllAllocationsRequest): Uint8Array;
            toProtoMsg(message: _125.QueryAllAllocationsRequest): _125.QueryAllAllocationsRequestProtoMsg;
        };
        QueryAllAllocationsResponse: {
            typeUrl: string;
            encode(message: _125.QueryAllAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.QueryAllAllocationsResponse;
            fromPartial(object: Partial<_125.QueryAllAllocationsResponse>): _125.QueryAllAllocationsResponse;
            fromAmino(object: _125.QueryAllAllocationsResponseAmino): _125.QueryAllAllocationsResponse;
            toAmino(message: _125.QueryAllAllocationsResponse): _125.QueryAllAllocationsResponseAmino;
            fromAminoMsg(object: _125.QueryAllAllocationsResponseAminoMsg): _125.QueryAllAllocationsResponse;
            fromProtoMsg(message: _125.QueryAllAllocationsResponseProtoMsg): _125.QueryAllAllocationsResponse;
            toProto(message: _125.QueryAllAllocationsResponse): Uint8Array;
            toProtoMsg(message: _125.QueryAllAllocationsResponse): _125.QueryAllAllocationsResponseProtoMsg;
        };
        QueryUserSummaryRequest: {
            typeUrl: string;
            encode(message: _125.QueryUserSummaryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.QueryUserSummaryRequest;
            fromPartial(object: Partial<_125.QueryUserSummaryRequest>): _125.QueryUserSummaryRequest;
            fromAmino(object: _125.QueryUserSummaryRequestAmino): _125.QueryUserSummaryRequest;
            toAmino(message: _125.QueryUserSummaryRequest): _125.QueryUserSummaryRequestAmino;
            fromAminoMsg(object: _125.QueryUserSummaryRequestAminoMsg): _125.QueryUserSummaryRequest;
            fromProtoMsg(message: _125.QueryUserSummaryRequestProtoMsg): _125.QueryUserSummaryRequest;
            toProto(message: _125.QueryUserSummaryRequest): Uint8Array;
            toProtoMsg(message: _125.QueryUserSummaryRequest): _125.QueryUserSummaryRequestProtoMsg;
        };
        QueryUserSummaryResponse: {
            typeUrl: string;
            encode(message: _125.QueryUserSummaryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.QueryUserSummaryResponse;
            fromPartial(object: Partial<_125.QueryUserSummaryResponse>): _125.QueryUserSummaryResponse;
            fromAmino(object: _125.QueryUserSummaryResponseAmino): _125.QueryUserSummaryResponse;
            toAmino(message: _125.QueryUserSummaryResponse): _125.QueryUserSummaryResponseAmino;
            fromAminoMsg(object: _125.QueryUserSummaryResponseAminoMsg): _125.QueryUserSummaryResponse;
            fromProtoMsg(message: _125.QueryUserSummaryResponseProtoMsg): _125.QueryUserSummaryResponse;
            toProto(message: _125.QueryUserSummaryResponse): Uint8Array;
            toProtoMsg(message: _125.QueryUserSummaryResponse): _125.QueryUserSummaryResponseProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _124.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.GenesisState;
            fromPartial(object: Partial<_124.GenesisState>): _124.GenesisState;
            fromAmino(object: _124.GenesisStateAmino): _124.GenesisState;
            toAmino(message: _124.GenesisState): _124.GenesisStateAmino;
            fromAminoMsg(object: _124.GenesisStateAminoMsg): _124.GenesisState;
            fromProtoMsg(message: _124.GenesisStateProtoMsg): _124.GenesisState;
            toProto(message: _124.GenesisState): Uint8Array;
            toProtoMsg(message: _124.GenesisState): _124.GenesisStateProtoMsg;
        };
        claimTypeFromJSON(object: any): _123.ClaimType;
        claimTypeToJSON(object: _123.ClaimType): string;
        ClaimType: typeof _123.ClaimType;
        ClaimTypeSDKType: typeof _123.ClaimType;
        ClaimTypeAmino: typeof _123.ClaimType;
        Params: {
            typeUrl: string;
            encode(message: _123.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.Params;
            fromPartial(object: Partial<_123.Params>): _123.Params;
            fromAmino(object: _123.ParamsAmino): _123.Params;
            toAmino(message: _123.Params): _123.ParamsAmino;
            fromAminoMsg(object: _123.ParamsAminoMsg): _123.Params;
            fromProtoMsg(message: _123.ParamsProtoMsg): _123.Params;
            toProto(message: _123.Params): Uint8Array;
            toProtoMsg(message: _123.Params): _123.ParamsProtoMsg;
        };
        UserAllocation: {
            typeUrl: string;
            encode(message: _123.UserAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.UserAllocation;
            fromPartial(object: Partial<_123.UserAllocation>): _123.UserAllocation;
            fromAmino(object: _123.UserAllocationAmino): _123.UserAllocation;
            toAmino(message: _123.UserAllocation): _123.UserAllocationAmino;
            fromAminoMsg(object: _123.UserAllocationAminoMsg): _123.UserAllocation;
            fromProtoMsg(message: _123.UserAllocationProtoMsg): _123.UserAllocation;
            toProto(message: _123.UserAllocation): Uint8Array;
            toProtoMsg(message: _123.UserAllocation): _123.UserAllocationProtoMsg;
        };
        Airdrop: {
            typeUrl: string;
            encode(message: _123.Airdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.Airdrop;
            fromPartial(object: Partial<_123.Airdrop>): _123.Airdrop;
            fromAmino(object: _123.AirdropAmino): _123.Airdrop;
            toAmino(message: _123.Airdrop): _123.AirdropAmino;
            fromAminoMsg(object: _123.AirdropAminoMsg): _123.Airdrop;
            fromProtoMsg(message: _123.AirdropProtoMsg): _123.Airdrop;
            toProto(message: _123.Airdrop): Uint8Array;
            toProtoMsg(message: _123.Airdrop): _123.AirdropProtoMsg;
        };
    };
    const autopilot: {
        QueryClientImpl: typeof _279.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _129.QueryParamsRequest): Promise<_129.QueryParamsResponse>;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _129.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.QueryParamsRequest;
            fromPartial(_: Partial<_129.QueryParamsRequest>): _129.QueryParamsRequest;
            fromAmino(_: _129.QueryParamsRequestAmino): _129.QueryParamsRequest;
            toAmino(_: _129.QueryParamsRequest): _129.QueryParamsRequestAmino;
            fromAminoMsg(object: _129.QueryParamsRequestAminoMsg): _129.QueryParamsRequest;
            fromProtoMsg(message: _129.QueryParamsRequestProtoMsg): _129.QueryParamsRequest;
            toProto(message: _129.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _129.QueryParamsRequest): _129.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _129.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.QueryParamsResponse;
            fromPartial(object: Partial<_129.QueryParamsResponse>): _129.QueryParamsResponse;
            fromAmino(object: _129.QueryParamsResponseAmino): _129.QueryParamsResponse;
            toAmino(message: _129.QueryParamsResponse): _129.QueryParamsResponseAmino;
            fromAminoMsg(object: _129.QueryParamsResponseAminoMsg): _129.QueryParamsResponse;
            fromProtoMsg(message: _129.QueryParamsResponseProtoMsg): _129.QueryParamsResponse;
            toProto(message: _129.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _129.QueryParamsResponse): _129.QueryParamsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _128.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.Params;
            fromPartial(object: Partial<_128.Params>): _128.Params;
            fromAmino(object: _128.ParamsAmino): _128.Params;
            toAmino(message: _128.Params): _128.ParamsAmino;
            fromAminoMsg(object: _128.ParamsAminoMsg): _128.Params;
            fromProtoMsg(message: _128.ParamsProtoMsg): _128.Params;
            toProto(message: _128.Params): Uint8Array;
            toProtoMsg(message: _128.Params): _128.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _127.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.GenesisState;
            fromPartial(object: Partial<_127.GenesisState>): _127.GenesisState;
            fromAmino(object: _127.GenesisStateAmino): _127.GenesisState;
            toAmino(message: _127.GenesisState): _127.GenesisStateAmino;
            fromAminoMsg(object: _127.GenesisStateAminoMsg): _127.GenesisState;
            fromProtoMsg(message: _127.GenesisStateProtoMsg): _127.GenesisState;
            toProto(message: _127.GenesisState): Uint8Array;
            toProtoMsg(message: _127.GenesisState): _127.GenesisStateProtoMsg;
        };
    };
    const claim: {
        MsgClientImpl: typeof _290.MsgClientImpl;
        QueryClientImpl: typeof _280.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            distributorAccountBalance(request: _133.QueryDistributorAccountBalanceRequest): Promise<_133.QueryDistributorAccountBalanceResponse>;
            params(request?: _133.QueryParamsRequest): Promise<_133.QueryParamsResponse>;
            claimRecord(request: _133.QueryClaimRecordRequest): Promise<_133.QueryClaimRecordResponse>;
            claimableForAction(request: _133.QueryClaimableForActionRequest): Promise<_133.QueryClaimableForActionResponse>;
            totalClaimable(request: _133.QueryTotalClaimableRequest): Promise<_133.QueryTotalClaimableResponse>;
            userVestings(request: _133.QueryUserVestingsRequest): Promise<_133.QueryUserVestingsResponse>;
            claimStatus(request: _133.QueryClaimStatusRequest): Promise<_133.QueryClaimStatusResponse>;
            claimMetadata(request?: _133.QueryClaimMetadataRequest): Promise<_133.QueryClaimMetadataResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                setAirdropAllocations(value: _134.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimFreeAmount(value: _134.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAirdrop(value: _134.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteAirdrop(value: _134.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                setAirdropAllocations(value: _134.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _134.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _134.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _134.MsgClaimFreeAmount;
                };
                createAirdrop(value: _134.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _134.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _134.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _134.MsgDeleteAirdrop;
                };
            };
            fromPartial: {
                setAirdropAllocations(value: _134.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _134.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _134.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _134.MsgClaimFreeAmount;
                };
                createAirdrop(value: _134.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _134.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _134.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _134.MsgDeleteAirdrop;
                };
            };
        };
        AminoConverter: {
            "/stride.claim.MsgSetAirdropAllocations": {
                aminoType: string;
                toAmino: (message: _134.MsgSetAirdropAllocations) => _134.MsgSetAirdropAllocationsAmino;
                fromAmino: (object: _134.MsgSetAirdropAllocationsAmino) => _134.MsgSetAirdropAllocations;
            };
            "/stride.claim.MsgClaimFreeAmount": {
                aminoType: string;
                toAmino: (message: _134.MsgClaimFreeAmount) => _134.MsgClaimFreeAmountAmino;
                fromAmino: (object: _134.MsgClaimFreeAmountAmino) => _134.MsgClaimFreeAmount;
            };
            "/stride.claim.MsgCreateAirdrop": {
                aminoType: string;
                toAmino: (message: _134.MsgCreateAirdrop) => _134.MsgCreateAirdropAmino;
                fromAmino: (object: _134.MsgCreateAirdropAmino) => _134.MsgCreateAirdrop;
            };
            "/stride.claim.MsgDeleteAirdrop": {
                aminoType: string;
                toAmino: (message: _134.MsgDeleteAirdrop) => _134.MsgDeleteAirdropAmino;
                fromAmino: (object: _134.MsgDeleteAirdropAmino) => _134.MsgDeleteAirdrop;
            };
        };
        MsgSetAirdropAllocations: {
            typeUrl: string;
            encode(message: _134.MsgSetAirdropAllocations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgSetAirdropAllocations;
            fromPartial(object: Partial<_134.MsgSetAirdropAllocations>): _134.MsgSetAirdropAllocations;
            fromAmino(object: _134.MsgSetAirdropAllocationsAmino): _134.MsgSetAirdropAllocations;
            toAmino(message: _134.MsgSetAirdropAllocations): _134.MsgSetAirdropAllocationsAmino;
            fromAminoMsg(object: _134.MsgSetAirdropAllocationsAminoMsg): _134.MsgSetAirdropAllocations;
            fromProtoMsg(message: _134.MsgSetAirdropAllocationsProtoMsg): _134.MsgSetAirdropAllocations;
            toProto(message: _134.MsgSetAirdropAllocations): Uint8Array;
            toProtoMsg(message: _134.MsgSetAirdropAllocations): _134.MsgSetAirdropAllocationsProtoMsg;
        };
        MsgSetAirdropAllocationsResponse: {
            typeUrl: string;
            encode(_: _134.MsgSetAirdropAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgSetAirdropAllocationsResponse;
            fromPartial(_: Partial<_134.MsgSetAirdropAllocationsResponse>): _134.MsgSetAirdropAllocationsResponse;
            fromAmino(_: _134.MsgSetAirdropAllocationsResponseAmino): _134.MsgSetAirdropAllocationsResponse;
            toAmino(_: _134.MsgSetAirdropAllocationsResponse): _134.MsgSetAirdropAllocationsResponseAmino;
            fromAminoMsg(object: _134.MsgSetAirdropAllocationsResponseAminoMsg): _134.MsgSetAirdropAllocationsResponse;
            fromProtoMsg(message: _134.MsgSetAirdropAllocationsResponseProtoMsg): _134.MsgSetAirdropAllocationsResponse;
            toProto(message: _134.MsgSetAirdropAllocationsResponse): Uint8Array;
            toProtoMsg(message: _134.MsgSetAirdropAllocationsResponse): _134.MsgSetAirdropAllocationsResponseProtoMsg;
        };
        MsgClaimFreeAmount: {
            typeUrl: string;
            encode(message: _134.MsgClaimFreeAmount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgClaimFreeAmount;
            fromPartial(object: Partial<_134.MsgClaimFreeAmount>): _134.MsgClaimFreeAmount;
            fromAmino(object: _134.MsgClaimFreeAmountAmino): _134.MsgClaimFreeAmount;
            toAmino(message: _134.MsgClaimFreeAmount): _134.MsgClaimFreeAmountAmino;
            fromAminoMsg(object: _134.MsgClaimFreeAmountAminoMsg): _134.MsgClaimFreeAmount;
            toAminoMsg(message: _134.MsgClaimFreeAmount): _134.MsgClaimFreeAmountAminoMsg;
            fromProtoMsg(message: _134.MsgClaimFreeAmountProtoMsg): _134.MsgClaimFreeAmount;
            toProto(message: _134.MsgClaimFreeAmount): Uint8Array;
            toProtoMsg(message: _134.MsgClaimFreeAmount): _134.MsgClaimFreeAmountProtoMsg;
        };
        MsgClaimFreeAmountResponse: {
            typeUrl: string;
            encode(message: _134.MsgClaimFreeAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgClaimFreeAmountResponse;
            fromPartial(object: Partial<_134.MsgClaimFreeAmountResponse>): _134.MsgClaimFreeAmountResponse;
            fromAmino(object: _134.MsgClaimFreeAmountResponseAmino): _134.MsgClaimFreeAmountResponse;
            toAmino(message: _134.MsgClaimFreeAmountResponse): _134.MsgClaimFreeAmountResponseAmino;
            fromAminoMsg(object: _134.MsgClaimFreeAmountResponseAminoMsg): _134.MsgClaimFreeAmountResponse;
            fromProtoMsg(message: _134.MsgClaimFreeAmountResponseProtoMsg): _134.MsgClaimFreeAmountResponse;
            toProto(message: _134.MsgClaimFreeAmountResponse): Uint8Array;
            toProtoMsg(message: _134.MsgClaimFreeAmountResponse): _134.MsgClaimFreeAmountResponseProtoMsg;
        };
        MsgCreateAirdrop: {
            typeUrl: string;
            encode(message: _134.MsgCreateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgCreateAirdrop;
            fromPartial(object: Partial<_134.MsgCreateAirdrop>): _134.MsgCreateAirdrop;
            fromAmino(object: _134.MsgCreateAirdropAmino): _134.MsgCreateAirdrop;
            toAmino(message: _134.MsgCreateAirdrop): _134.MsgCreateAirdropAmino;
            fromAminoMsg(object: _134.MsgCreateAirdropAminoMsg): _134.MsgCreateAirdrop;
            fromProtoMsg(message: _134.MsgCreateAirdropProtoMsg): _134.MsgCreateAirdrop;
            toProto(message: _134.MsgCreateAirdrop): Uint8Array;
            toProtoMsg(message: _134.MsgCreateAirdrop): _134.MsgCreateAirdropProtoMsg;
        };
        MsgCreateAirdropResponse: {
            typeUrl: string;
            encode(_: _134.MsgCreateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgCreateAirdropResponse;
            fromPartial(_: Partial<_134.MsgCreateAirdropResponse>): _134.MsgCreateAirdropResponse;
            fromAmino(_: _134.MsgCreateAirdropResponseAmino): _134.MsgCreateAirdropResponse;
            toAmino(_: _134.MsgCreateAirdropResponse): _134.MsgCreateAirdropResponseAmino;
            fromAminoMsg(object: _134.MsgCreateAirdropResponseAminoMsg): _134.MsgCreateAirdropResponse;
            fromProtoMsg(message: _134.MsgCreateAirdropResponseProtoMsg): _134.MsgCreateAirdropResponse;
            toProto(message: _134.MsgCreateAirdropResponse): Uint8Array;
            toProtoMsg(message: _134.MsgCreateAirdropResponse): _134.MsgCreateAirdropResponseProtoMsg;
        };
        MsgDeleteAirdrop: {
            typeUrl: string;
            encode(message: _134.MsgDeleteAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgDeleteAirdrop;
            fromPartial(object: Partial<_134.MsgDeleteAirdrop>): _134.MsgDeleteAirdrop;
            fromAmino(object: _134.MsgDeleteAirdropAmino): _134.MsgDeleteAirdrop;
            toAmino(message: _134.MsgDeleteAirdrop): _134.MsgDeleteAirdropAmino;
            fromAminoMsg(object: _134.MsgDeleteAirdropAminoMsg): _134.MsgDeleteAirdrop;
            fromProtoMsg(message: _134.MsgDeleteAirdropProtoMsg): _134.MsgDeleteAirdrop;
            toProto(message: _134.MsgDeleteAirdrop): Uint8Array;
            toProtoMsg(message: _134.MsgDeleteAirdrop): _134.MsgDeleteAirdropProtoMsg;
        };
        MsgDeleteAirdropResponse: {
            typeUrl: string;
            encode(_: _134.MsgDeleteAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.MsgDeleteAirdropResponse;
            fromPartial(_: Partial<_134.MsgDeleteAirdropResponse>): _134.MsgDeleteAirdropResponse;
            fromAmino(_: _134.MsgDeleteAirdropResponseAmino): _134.MsgDeleteAirdropResponse;
            toAmino(_: _134.MsgDeleteAirdropResponse): _134.MsgDeleteAirdropResponseAmino;
            fromAminoMsg(object: _134.MsgDeleteAirdropResponseAminoMsg): _134.MsgDeleteAirdropResponse;
            fromProtoMsg(message: _134.MsgDeleteAirdropResponseProtoMsg): _134.MsgDeleteAirdropResponse;
            toProto(message: _134.MsgDeleteAirdropResponse): Uint8Array;
            toProtoMsg(message: _134.MsgDeleteAirdropResponse): _134.MsgDeleteAirdropResponseProtoMsg;
        };
        ClaimStatus: {
            typeUrl: string;
            encode(message: _133.ClaimStatus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.ClaimStatus;
            fromPartial(object: Partial<_133.ClaimStatus>): _133.ClaimStatus;
            fromAmino(object: _133.ClaimStatusAmino): _133.ClaimStatus;
            toAmino(message: _133.ClaimStatus): _133.ClaimStatusAmino;
            fromAminoMsg(object: _133.ClaimStatusAminoMsg): _133.ClaimStatus;
            fromProtoMsg(message: _133.ClaimStatusProtoMsg): _133.ClaimStatus;
            toProto(message: _133.ClaimStatus): Uint8Array;
            toProtoMsg(message: _133.ClaimStatus): _133.ClaimStatusProtoMsg;
        };
        QueryClaimStatusRequest: {
            typeUrl: string;
            encode(message: _133.QueryClaimStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryClaimStatusRequest;
            fromPartial(object: Partial<_133.QueryClaimStatusRequest>): _133.QueryClaimStatusRequest;
            fromAmino(object: _133.QueryClaimStatusRequestAmino): _133.QueryClaimStatusRequest;
            toAmino(message: _133.QueryClaimStatusRequest): _133.QueryClaimStatusRequestAmino;
            fromAminoMsg(object: _133.QueryClaimStatusRequestAminoMsg): _133.QueryClaimStatusRequest;
            fromProtoMsg(message: _133.QueryClaimStatusRequestProtoMsg): _133.QueryClaimStatusRequest;
            toProto(message: _133.QueryClaimStatusRequest): Uint8Array;
            toProtoMsg(message: _133.QueryClaimStatusRequest): _133.QueryClaimStatusRequestProtoMsg;
        };
        QueryClaimStatusResponse: {
            typeUrl: string;
            encode(message: _133.QueryClaimStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryClaimStatusResponse;
            fromPartial(object: Partial<_133.QueryClaimStatusResponse>): _133.QueryClaimStatusResponse;
            fromAmino(object: _133.QueryClaimStatusResponseAmino): _133.QueryClaimStatusResponse;
            toAmino(message: _133.QueryClaimStatusResponse): _133.QueryClaimStatusResponseAmino;
            fromAminoMsg(object: _133.QueryClaimStatusResponseAminoMsg): _133.QueryClaimStatusResponse;
            fromProtoMsg(message: _133.QueryClaimStatusResponseProtoMsg): _133.QueryClaimStatusResponse;
            toProto(message: _133.QueryClaimStatusResponse): Uint8Array;
            toProtoMsg(message: _133.QueryClaimStatusResponse): _133.QueryClaimStatusResponseProtoMsg;
        };
        ClaimMetadata: {
            typeUrl: string;
            encode(message: _133.ClaimMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.ClaimMetadata;
            fromPartial(object: Partial<_133.ClaimMetadata>): _133.ClaimMetadata;
            fromAmino(object: _133.ClaimMetadataAmino): _133.ClaimMetadata;
            toAmino(message: _133.ClaimMetadata): _133.ClaimMetadataAmino;
            fromAminoMsg(object: _133.ClaimMetadataAminoMsg): _133.ClaimMetadata;
            fromProtoMsg(message: _133.ClaimMetadataProtoMsg): _133.ClaimMetadata;
            toProto(message: _133.ClaimMetadata): Uint8Array;
            toProtoMsg(message: _133.ClaimMetadata): _133.ClaimMetadataProtoMsg;
        };
        QueryClaimMetadataRequest: {
            typeUrl: string;
            encode(_: _133.QueryClaimMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryClaimMetadataRequest;
            fromPartial(_: Partial<_133.QueryClaimMetadataRequest>): _133.QueryClaimMetadataRequest;
            fromAmino(_: _133.QueryClaimMetadataRequestAmino): _133.QueryClaimMetadataRequest;
            toAmino(_: _133.QueryClaimMetadataRequest): _133.QueryClaimMetadataRequestAmino;
            fromAminoMsg(object: _133.QueryClaimMetadataRequestAminoMsg): _133.QueryClaimMetadataRequest;
            fromProtoMsg(message: _133.QueryClaimMetadataRequestProtoMsg): _133.QueryClaimMetadataRequest;
            toProto(message: _133.QueryClaimMetadataRequest): Uint8Array;
            toProtoMsg(message: _133.QueryClaimMetadataRequest): _133.QueryClaimMetadataRequestProtoMsg;
        };
        QueryClaimMetadataResponse: {
            typeUrl: string;
            encode(message: _133.QueryClaimMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryClaimMetadataResponse;
            fromPartial(object: Partial<_133.QueryClaimMetadataResponse>): _133.QueryClaimMetadataResponse;
            fromAmino(object: _133.QueryClaimMetadataResponseAmino): _133.QueryClaimMetadataResponse;
            toAmino(message: _133.QueryClaimMetadataResponse): _133.QueryClaimMetadataResponseAmino;
            fromAminoMsg(object: _133.QueryClaimMetadataResponseAminoMsg): _133.QueryClaimMetadataResponse;
            fromProtoMsg(message: _133.QueryClaimMetadataResponseProtoMsg): _133.QueryClaimMetadataResponse;
            toProto(message: _133.QueryClaimMetadataResponse): Uint8Array;
            toProtoMsg(message: _133.QueryClaimMetadataResponse): _133.QueryClaimMetadataResponseProtoMsg;
        };
        QueryDistributorAccountBalanceRequest: {
            typeUrl: string;
            encode(message: _133.QueryDistributorAccountBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryDistributorAccountBalanceRequest;
            fromPartial(object: Partial<_133.QueryDistributorAccountBalanceRequest>): _133.QueryDistributorAccountBalanceRequest;
            fromAmino(object: _133.QueryDistributorAccountBalanceRequestAmino): _133.QueryDistributorAccountBalanceRequest;
            toAmino(message: _133.QueryDistributorAccountBalanceRequest): _133.QueryDistributorAccountBalanceRequestAmino;
            fromAminoMsg(object: _133.QueryDistributorAccountBalanceRequestAminoMsg): _133.QueryDistributorAccountBalanceRequest;
            fromProtoMsg(message: _133.QueryDistributorAccountBalanceRequestProtoMsg): _133.QueryDistributorAccountBalanceRequest;
            toProto(message: _133.QueryDistributorAccountBalanceRequest): Uint8Array;
            toProtoMsg(message: _133.QueryDistributorAccountBalanceRequest): _133.QueryDistributorAccountBalanceRequestProtoMsg;
        };
        QueryDistributorAccountBalanceResponse: {
            typeUrl: string;
            encode(message: _133.QueryDistributorAccountBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryDistributorAccountBalanceResponse;
            fromPartial(object: Partial<_133.QueryDistributorAccountBalanceResponse>): _133.QueryDistributorAccountBalanceResponse;
            fromAmino(object: _133.QueryDistributorAccountBalanceResponseAmino): _133.QueryDistributorAccountBalanceResponse;
            toAmino(message: _133.QueryDistributorAccountBalanceResponse): _133.QueryDistributorAccountBalanceResponseAmino;
            fromAminoMsg(object: _133.QueryDistributorAccountBalanceResponseAminoMsg): _133.QueryDistributorAccountBalanceResponse;
            fromProtoMsg(message: _133.QueryDistributorAccountBalanceResponseProtoMsg): _133.QueryDistributorAccountBalanceResponse;
            toProto(message: _133.QueryDistributorAccountBalanceResponse): Uint8Array;
            toProtoMsg(message: _133.QueryDistributorAccountBalanceResponse): _133.QueryDistributorAccountBalanceResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _133.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryParamsRequest;
            fromPartial(_: Partial<_133.QueryParamsRequest>): _133.QueryParamsRequest;
            fromAmino(_: _133.QueryParamsRequestAmino): _133.QueryParamsRequest;
            toAmino(_: _133.QueryParamsRequest): _133.QueryParamsRequestAmino;
            fromAminoMsg(object: _133.QueryParamsRequestAminoMsg): _133.QueryParamsRequest;
            fromProtoMsg(message: _133.QueryParamsRequestProtoMsg): _133.QueryParamsRequest;
            toProto(message: _133.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _133.QueryParamsRequest): _133.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _133.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryParamsResponse;
            fromPartial(object: Partial<_133.QueryParamsResponse>): _133.QueryParamsResponse;
            fromAmino(object: _133.QueryParamsResponseAmino): _133.QueryParamsResponse;
            toAmino(message: _133.QueryParamsResponse): _133.QueryParamsResponseAmino;
            fromAminoMsg(object: _133.QueryParamsResponseAminoMsg): _133.QueryParamsResponse;
            fromProtoMsg(message: _133.QueryParamsResponseProtoMsg): _133.QueryParamsResponse;
            toProto(message: _133.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _133.QueryParamsResponse): _133.QueryParamsResponseProtoMsg;
        };
        QueryClaimRecordRequest: {
            typeUrl: string;
            encode(message: _133.QueryClaimRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryClaimRecordRequest;
            fromPartial(object: Partial<_133.QueryClaimRecordRequest>): _133.QueryClaimRecordRequest;
            fromAmino(object: _133.QueryClaimRecordRequestAmino): _133.QueryClaimRecordRequest;
            toAmino(message: _133.QueryClaimRecordRequest): _133.QueryClaimRecordRequestAmino;
            fromAminoMsg(object: _133.QueryClaimRecordRequestAminoMsg): _133.QueryClaimRecordRequest;
            fromProtoMsg(message: _133.QueryClaimRecordRequestProtoMsg): _133.QueryClaimRecordRequest;
            toProto(message: _133.QueryClaimRecordRequest): Uint8Array;
            toProtoMsg(message: _133.QueryClaimRecordRequest): _133.QueryClaimRecordRequestProtoMsg;
        };
        QueryClaimRecordResponse: {
            typeUrl: string;
            encode(message: _133.QueryClaimRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryClaimRecordResponse;
            fromPartial(object: Partial<_133.QueryClaimRecordResponse>): _133.QueryClaimRecordResponse;
            fromAmino(object: _133.QueryClaimRecordResponseAmino): _133.QueryClaimRecordResponse;
            toAmino(message: _133.QueryClaimRecordResponse): _133.QueryClaimRecordResponseAmino;
            fromAminoMsg(object: _133.QueryClaimRecordResponseAminoMsg): _133.QueryClaimRecordResponse;
            fromProtoMsg(message: _133.QueryClaimRecordResponseProtoMsg): _133.QueryClaimRecordResponse;
            toProto(message: _133.QueryClaimRecordResponse): Uint8Array;
            toProtoMsg(message: _133.QueryClaimRecordResponse): _133.QueryClaimRecordResponseProtoMsg;
        };
        QueryClaimableForActionRequest: {
            typeUrl: string;
            encode(message: _133.QueryClaimableForActionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryClaimableForActionRequest;
            fromPartial(object: Partial<_133.QueryClaimableForActionRequest>): _133.QueryClaimableForActionRequest;
            fromAmino(object: _133.QueryClaimableForActionRequestAmino): _133.QueryClaimableForActionRequest;
            toAmino(message: _133.QueryClaimableForActionRequest): _133.QueryClaimableForActionRequestAmino;
            fromAminoMsg(object: _133.QueryClaimableForActionRequestAminoMsg): _133.QueryClaimableForActionRequest;
            fromProtoMsg(message: _133.QueryClaimableForActionRequestProtoMsg): _133.QueryClaimableForActionRequest;
            toProto(message: _133.QueryClaimableForActionRequest): Uint8Array;
            toProtoMsg(message: _133.QueryClaimableForActionRequest): _133.QueryClaimableForActionRequestProtoMsg;
        };
        QueryClaimableForActionResponse: {
            typeUrl: string;
            encode(message: _133.QueryClaimableForActionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryClaimableForActionResponse;
            fromPartial(object: Partial<_133.QueryClaimableForActionResponse>): _133.QueryClaimableForActionResponse;
            fromAmino(object: _133.QueryClaimableForActionResponseAmino): _133.QueryClaimableForActionResponse;
            toAmino(message: _133.QueryClaimableForActionResponse): _133.QueryClaimableForActionResponseAmino;
            fromAminoMsg(object: _133.QueryClaimableForActionResponseAminoMsg): _133.QueryClaimableForActionResponse;
            fromProtoMsg(message: _133.QueryClaimableForActionResponseProtoMsg): _133.QueryClaimableForActionResponse;
            toProto(message: _133.QueryClaimableForActionResponse): Uint8Array;
            toProtoMsg(message: _133.QueryClaimableForActionResponse): _133.QueryClaimableForActionResponseProtoMsg;
        };
        QueryTotalClaimableRequest: {
            typeUrl: string;
            encode(message: _133.QueryTotalClaimableRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryTotalClaimableRequest;
            fromPartial(object: Partial<_133.QueryTotalClaimableRequest>): _133.QueryTotalClaimableRequest;
            fromAmino(object: _133.QueryTotalClaimableRequestAmino): _133.QueryTotalClaimableRequest;
            toAmino(message: _133.QueryTotalClaimableRequest): _133.QueryTotalClaimableRequestAmino;
            fromAminoMsg(object: _133.QueryTotalClaimableRequestAminoMsg): _133.QueryTotalClaimableRequest;
            fromProtoMsg(message: _133.QueryTotalClaimableRequestProtoMsg): _133.QueryTotalClaimableRequest;
            toProto(message: _133.QueryTotalClaimableRequest): Uint8Array;
            toProtoMsg(message: _133.QueryTotalClaimableRequest): _133.QueryTotalClaimableRequestProtoMsg;
        };
        QueryTotalClaimableResponse: {
            typeUrl: string;
            encode(message: _133.QueryTotalClaimableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryTotalClaimableResponse;
            fromPartial(object: Partial<_133.QueryTotalClaimableResponse>): _133.QueryTotalClaimableResponse;
            fromAmino(object: _133.QueryTotalClaimableResponseAmino): _133.QueryTotalClaimableResponse;
            toAmino(message: _133.QueryTotalClaimableResponse): _133.QueryTotalClaimableResponseAmino;
            fromAminoMsg(object: _133.QueryTotalClaimableResponseAminoMsg): _133.QueryTotalClaimableResponse;
            fromProtoMsg(message: _133.QueryTotalClaimableResponseProtoMsg): _133.QueryTotalClaimableResponse;
            toProto(message: _133.QueryTotalClaimableResponse): Uint8Array;
            toProtoMsg(message: _133.QueryTotalClaimableResponse): _133.QueryTotalClaimableResponseProtoMsg;
        };
        QueryUserVestingsRequest: {
            typeUrl: string;
            encode(message: _133.QueryUserVestingsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryUserVestingsRequest;
            fromPartial(object: Partial<_133.QueryUserVestingsRequest>): _133.QueryUserVestingsRequest;
            fromAmino(object: _133.QueryUserVestingsRequestAmino): _133.QueryUserVestingsRequest;
            toAmino(message: _133.QueryUserVestingsRequest): _133.QueryUserVestingsRequestAmino;
            fromAminoMsg(object: _133.QueryUserVestingsRequestAminoMsg): _133.QueryUserVestingsRequest;
            fromProtoMsg(message: _133.QueryUserVestingsRequestProtoMsg): _133.QueryUserVestingsRequest;
            toProto(message: _133.QueryUserVestingsRequest): Uint8Array;
            toProtoMsg(message: _133.QueryUserVestingsRequest): _133.QueryUserVestingsRequestProtoMsg;
        };
        QueryUserVestingsResponse: {
            typeUrl: string;
            encode(message: _133.QueryUserVestingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryUserVestingsResponse;
            fromPartial(object: Partial<_133.QueryUserVestingsResponse>): _133.QueryUserVestingsResponse;
            fromAmino(object: _133.QueryUserVestingsResponseAmino): _133.QueryUserVestingsResponse;
            toAmino(message: _133.QueryUserVestingsResponse): _133.QueryUserVestingsResponseAmino;
            fromAminoMsg(object: _133.QueryUserVestingsResponseAminoMsg): _133.QueryUserVestingsResponse;
            fromProtoMsg(message: _133.QueryUserVestingsResponseProtoMsg): _133.QueryUserVestingsResponse;
            toProto(message: _133.QueryUserVestingsResponse): Uint8Array;
            toProtoMsg(message: _133.QueryUserVestingsResponse): _133.QueryUserVestingsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _132.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.Params;
            fromPartial(object: Partial<_132.Params>): _132.Params;
            fromAmino(object: _132.ParamsAmino): _132.Params;
            toAmino(message: _132.Params): _132.ParamsAmino;
            fromAminoMsg(object: _132.ParamsAminoMsg): _132.Params;
            fromProtoMsg(message: _132.ParamsProtoMsg): _132.Params;
            toProto(message: _132.Params): Uint8Array;
            toProtoMsg(message: _132.Params): _132.ParamsProtoMsg;
        };
        Airdrop: {
            typeUrl: string;
            encode(message: _132.Airdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.Airdrop;
            fromPartial(object: Partial<_132.Airdrop>): _132.Airdrop;
            fromAmino(object: _132.AirdropAmino): _132.Airdrop;
            toAmino(message: _132.Airdrop): _132.AirdropAmino;
            fromAminoMsg(object: _132.AirdropAminoMsg): _132.Airdrop;
            fromProtoMsg(message: _132.AirdropProtoMsg): _132.Airdrop;
            toProto(message: _132.Airdrop): Uint8Array;
            toProtoMsg(message: _132.Airdrop): _132.AirdropProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _131.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.GenesisState;
            fromPartial(object: Partial<_131.GenesisState>): _131.GenesisState;
            fromAmino(object: _131.GenesisStateAmino): _131.GenesisState;
            toAmino(message: _131.GenesisState): _131.GenesisStateAmino;
            fromAminoMsg(object: _131.GenesisStateAminoMsg): _131.GenesisState;
            fromProtoMsg(message: _131.GenesisStateProtoMsg): _131.GenesisState;
            toProto(message: _131.GenesisState): Uint8Array;
            toProtoMsg(message: _131.GenesisState): _131.GenesisStateProtoMsg;
        };
        actionFromJSON(object: any): _130.Action;
        actionToJSON(object: _130.Action): string;
        Action: typeof _130.Action;
        ActionSDKType: typeof _130.Action;
        ActionAmino: typeof _130.Action;
        ClaimRecord: {
            typeUrl: string;
            encode(message: _130.ClaimRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.ClaimRecord;
            fromPartial(object: Partial<_130.ClaimRecord>): _130.ClaimRecord;
            fromAmino(object: _130.ClaimRecordAmino): _130.ClaimRecord;
            toAmino(message: _130.ClaimRecord): _130.ClaimRecordAmino;
            fromAminoMsg(object: _130.ClaimRecordAminoMsg): _130.ClaimRecord;
            fromProtoMsg(message: _130.ClaimRecordProtoMsg): _130.ClaimRecord;
            toProto(message: _130.ClaimRecord): Uint8Array;
            toProtoMsg(message: _130.ClaimRecord): _130.ClaimRecordProtoMsg;
        };
    };
    const epochs: {
        QueryClientImpl: typeof _281.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            epochInfos(request?: _136.QueryEpochsInfoRequest): Promise<_136.QueryEpochsInfoResponse>;
            currentEpoch(request: _136.QueryCurrentEpochRequest): Promise<_136.QueryCurrentEpochResponse>;
            epochInfo(request: _136.QueryEpochInfoRequest): Promise<_136.QueryEpochInfoResponse>;
        };
        QueryEpochsInfoRequest: {
            typeUrl: string;
            encode(message: _136.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.QueryEpochsInfoRequest;
            fromPartial(object: Partial<_136.QueryEpochsInfoRequest>): _136.QueryEpochsInfoRequest;
            fromAmino(object: _136.QueryEpochsInfoRequestAmino): _136.QueryEpochsInfoRequest;
            toAmino(message: _136.QueryEpochsInfoRequest): _136.QueryEpochsInfoRequestAmino;
            fromAminoMsg(object: _136.QueryEpochsInfoRequestAminoMsg): _136.QueryEpochsInfoRequest;
            fromProtoMsg(message: _136.QueryEpochsInfoRequestProtoMsg): _136.QueryEpochsInfoRequest;
            toProto(message: _136.QueryEpochsInfoRequest): Uint8Array;
            toProtoMsg(message: _136.QueryEpochsInfoRequest): _136.QueryEpochsInfoRequestProtoMsg;
        };
        QueryEpochsInfoResponse: {
            typeUrl: string;
            encode(message: _136.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.QueryEpochsInfoResponse;
            fromPartial(object: Partial<_136.QueryEpochsInfoResponse>): _136.QueryEpochsInfoResponse;
            fromAmino(object: _136.QueryEpochsInfoResponseAmino): _136.QueryEpochsInfoResponse;
            toAmino(message: _136.QueryEpochsInfoResponse): _136.QueryEpochsInfoResponseAmino;
            fromAminoMsg(object: _136.QueryEpochsInfoResponseAminoMsg): _136.QueryEpochsInfoResponse;
            fromProtoMsg(message: _136.QueryEpochsInfoResponseProtoMsg): _136.QueryEpochsInfoResponse;
            toProto(message: _136.QueryEpochsInfoResponse): Uint8Array;
            toProtoMsg(message: _136.QueryEpochsInfoResponse): _136.QueryEpochsInfoResponseProtoMsg;
        };
        QueryCurrentEpochRequest: {
            typeUrl: string;
            encode(message: _136.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.QueryCurrentEpochRequest;
            fromPartial(object: Partial<_136.QueryCurrentEpochRequest>): _136.QueryCurrentEpochRequest;
            fromAmino(object: _136.QueryCurrentEpochRequestAmino): _136.QueryCurrentEpochRequest;
            toAmino(message: _136.QueryCurrentEpochRequest): _136.QueryCurrentEpochRequestAmino;
            fromAminoMsg(object: _136.QueryCurrentEpochRequestAminoMsg): _136.QueryCurrentEpochRequest;
            fromProtoMsg(message: _136.QueryCurrentEpochRequestProtoMsg): _136.QueryCurrentEpochRequest;
            toProto(message: _136.QueryCurrentEpochRequest): Uint8Array;
            toProtoMsg(message: _136.QueryCurrentEpochRequest): _136.QueryCurrentEpochRequestProtoMsg;
        };
        QueryCurrentEpochResponse: {
            typeUrl: string;
            encode(message: _136.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.QueryCurrentEpochResponse;
            fromPartial(object: Partial<_136.QueryCurrentEpochResponse>): _136.QueryCurrentEpochResponse;
            fromAmino(object: _136.QueryCurrentEpochResponseAmino): _136.QueryCurrentEpochResponse;
            toAmino(message: _136.QueryCurrentEpochResponse): _136.QueryCurrentEpochResponseAmino;
            fromAminoMsg(object: _136.QueryCurrentEpochResponseAminoMsg): _136.QueryCurrentEpochResponse;
            fromProtoMsg(message: _136.QueryCurrentEpochResponseProtoMsg): _136.QueryCurrentEpochResponse;
            toProto(message: _136.QueryCurrentEpochResponse): Uint8Array;
            toProtoMsg(message: _136.QueryCurrentEpochResponse): _136.QueryCurrentEpochResponseProtoMsg;
        };
        QueryEpochInfoRequest: {
            typeUrl: string;
            encode(message: _136.QueryEpochInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.QueryEpochInfoRequest;
            fromPartial(object: Partial<_136.QueryEpochInfoRequest>): _136.QueryEpochInfoRequest;
            fromAmino(object: _136.QueryEpochInfoRequestAmino): _136.QueryEpochInfoRequest;
            toAmino(message: _136.QueryEpochInfoRequest): _136.QueryEpochInfoRequestAmino;
            fromAminoMsg(object: _136.QueryEpochInfoRequestAminoMsg): _136.QueryEpochInfoRequest;
            fromProtoMsg(message: _136.QueryEpochInfoRequestProtoMsg): _136.QueryEpochInfoRequest;
            toProto(message: _136.QueryEpochInfoRequest): Uint8Array;
            toProtoMsg(message: _136.QueryEpochInfoRequest): _136.QueryEpochInfoRequestProtoMsg;
        };
        QueryEpochInfoResponse: {
            typeUrl: string;
            encode(message: _136.QueryEpochInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.QueryEpochInfoResponse;
            fromPartial(object: Partial<_136.QueryEpochInfoResponse>): _136.QueryEpochInfoResponse;
            fromAmino(object: _136.QueryEpochInfoResponseAmino): _136.QueryEpochInfoResponse;
            toAmino(message: _136.QueryEpochInfoResponse): _136.QueryEpochInfoResponseAmino;
            fromAminoMsg(object: _136.QueryEpochInfoResponseAminoMsg): _136.QueryEpochInfoResponse;
            fromProtoMsg(message: _136.QueryEpochInfoResponseProtoMsg): _136.QueryEpochInfoResponse;
            toProto(message: _136.QueryEpochInfoResponse): Uint8Array;
            toProtoMsg(message: _136.QueryEpochInfoResponse): _136.QueryEpochInfoResponseProtoMsg;
        };
        EpochInfo: {
            typeUrl: string;
            encode(message: _135.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.EpochInfo;
            fromPartial(object: Partial<_135.EpochInfo>): _135.EpochInfo;
            fromAmino(object: _135.EpochInfoAmino): _135.EpochInfo;
            toAmino(message: _135.EpochInfo): _135.EpochInfoAmino;
            fromAminoMsg(object: _135.EpochInfoAminoMsg): _135.EpochInfo;
            fromProtoMsg(message: _135.EpochInfoProtoMsg): _135.EpochInfo;
            toProto(message: _135.EpochInfo): Uint8Array;
            toProtoMsg(message: _135.EpochInfo): _135.EpochInfoProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _135.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.GenesisState;
            fromPartial(object: Partial<_135.GenesisState>): _135.GenesisState;
            fromAmino(object: _135.GenesisStateAmino): _135.GenesisState;
            toAmino(message: _135.GenesisState): _135.GenesisStateAmino;
            fromAminoMsg(object: _135.GenesisStateAminoMsg): _135.GenesisState;
            fromProtoMsg(message: _135.GenesisStateProtoMsg): _135.GenesisState;
            toProto(message: _135.GenesisState): Uint8Array;
            toProtoMsg(message: _135.GenesisState): _135.GenesisStateProtoMsg;
        };
    };
    const icacallbacks: {
        QueryClientImpl: typeof _282.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _141.QueryParamsRequest): Promise<_141.QueryParamsResponse>;
            callbackData(request: _141.QueryGetCallbackDataRequest): Promise<_141.QueryGetCallbackDataResponse>;
            callbackDataAll(request?: _141.QueryAllCallbackDataRequest): Promise<_141.QueryAllCallbackDataResponse>;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _141.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.QueryParamsRequest;
            fromPartial(_: Partial<_141.QueryParamsRequest>): _141.QueryParamsRequest;
            fromAmino(_: _141.QueryParamsRequestAmino): _141.QueryParamsRequest;
            toAmino(_: _141.QueryParamsRequest): _141.QueryParamsRequestAmino;
            fromAminoMsg(object: _141.QueryParamsRequestAminoMsg): _141.QueryParamsRequest;
            fromProtoMsg(message: _141.QueryParamsRequestProtoMsg): _141.QueryParamsRequest;
            toProto(message: _141.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _141.QueryParamsRequest): _141.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _141.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.QueryParamsResponse;
            fromPartial(object: Partial<_141.QueryParamsResponse>): _141.QueryParamsResponse;
            fromAmino(object: _141.QueryParamsResponseAmino): _141.QueryParamsResponse;
            toAmino(message: _141.QueryParamsResponse): _141.QueryParamsResponseAmino;
            fromAminoMsg(object: _141.QueryParamsResponseAminoMsg): _141.QueryParamsResponse;
            fromProtoMsg(message: _141.QueryParamsResponseProtoMsg): _141.QueryParamsResponse;
            toProto(message: _141.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _141.QueryParamsResponse): _141.QueryParamsResponseProtoMsg;
        };
        QueryGetCallbackDataRequest: {
            typeUrl: string;
            encode(message: _141.QueryGetCallbackDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.QueryGetCallbackDataRequest;
            fromPartial(object: Partial<_141.QueryGetCallbackDataRequest>): _141.QueryGetCallbackDataRequest;
            fromAmino(object: _141.QueryGetCallbackDataRequestAmino): _141.QueryGetCallbackDataRequest;
            toAmino(message: _141.QueryGetCallbackDataRequest): _141.QueryGetCallbackDataRequestAmino;
            fromAminoMsg(object: _141.QueryGetCallbackDataRequestAminoMsg): _141.QueryGetCallbackDataRequest;
            fromProtoMsg(message: _141.QueryGetCallbackDataRequestProtoMsg): _141.QueryGetCallbackDataRequest;
            toProto(message: _141.QueryGetCallbackDataRequest): Uint8Array;
            toProtoMsg(message: _141.QueryGetCallbackDataRequest): _141.QueryGetCallbackDataRequestProtoMsg;
        };
        QueryGetCallbackDataResponse: {
            typeUrl: string;
            encode(message: _141.QueryGetCallbackDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.QueryGetCallbackDataResponse;
            fromPartial(object: Partial<_141.QueryGetCallbackDataResponse>): _141.QueryGetCallbackDataResponse;
            fromAmino(object: _141.QueryGetCallbackDataResponseAmino): _141.QueryGetCallbackDataResponse;
            toAmino(message: _141.QueryGetCallbackDataResponse): _141.QueryGetCallbackDataResponseAmino;
            fromAminoMsg(object: _141.QueryGetCallbackDataResponseAminoMsg): _141.QueryGetCallbackDataResponse;
            fromProtoMsg(message: _141.QueryGetCallbackDataResponseProtoMsg): _141.QueryGetCallbackDataResponse;
            toProto(message: _141.QueryGetCallbackDataResponse): Uint8Array;
            toProtoMsg(message: _141.QueryGetCallbackDataResponse): _141.QueryGetCallbackDataResponseProtoMsg;
        };
        QueryAllCallbackDataRequest: {
            typeUrl: string;
            encode(message: _141.QueryAllCallbackDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.QueryAllCallbackDataRequest;
            fromPartial(object: Partial<_141.QueryAllCallbackDataRequest>): _141.QueryAllCallbackDataRequest;
            fromAmino(object: _141.QueryAllCallbackDataRequestAmino): _141.QueryAllCallbackDataRequest;
            toAmino(message: _141.QueryAllCallbackDataRequest): _141.QueryAllCallbackDataRequestAmino;
            fromAminoMsg(object: _141.QueryAllCallbackDataRequestAminoMsg): _141.QueryAllCallbackDataRequest;
            fromProtoMsg(message: _141.QueryAllCallbackDataRequestProtoMsg): _141.QueryAllCallbackDataRequest;
            toProto(message: _141.QueryAllCallbackDataRequest): Uint8Array;
            toProtoMsg(message: _141.QueryAllCallbackDataRequest): _141.QueryAllCallbackDataRequestProtoMsg;
        };
        QueryAllCallbackDataResponse: {
            typeUrl: string;
            encode(message: _141.QueryAllCallbackDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.QueryAllCallbackDataResponse;
            fromPartial(object: Partial<_141.QueryAllCallbackDataResponse>): _141.QueryAllCallbackDataResponse;
            fromAmino(object: _141.QueryAllCallbackDataResponseAmino): _141.QueryAllCallbackDataResponse;
            toAmino(message: _141.QueryAllCallbackDataResponse): _141.QueryAllCallbackDataResponseAmino;
            fromAminoMsg(object: _141.QueryAllCallbackDataResponseAminoMsg): _141.QueryAllCallbackDataResponse;
            fromProtoMsg(message: _141.QueryAllCallbackDataResponseProtoMsg): _141.QueryAllCallbackDataResponse;
            toProto(message: _141.QueryAllCallbackDataResponse): Uint8Array;
            toProtoMsg(message: _141.QueryAllCallbackDataResponse): _141.QueryAllCallbackDataResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _140.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.Params;
            fromPartial(_: Partial<_140.Params>): _140.Params;
            fromAmino(_: _140.ParamsAmino): _140.Params;
            toAmino(_: _140.Params): _140.ParamsAmino;
            fromAminoMsg(object: _140.ParamsAminoMsg): _140.Params;
            fromProtoMsg(message: _140.ParamsProtoMsg): _140.Params;
            toProto(message: _140.Params): Uint8Array;
            toProtoMsg(message: _140.Params): _140.ParamsProtoMsg;
        };
        IcacallbacksPacketData: {
            typeUrl: string;
            encode(message: _139.IcacallbacksPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.IcacallbacksPacketData;
            fromPartial(object: Partial<_139.IcacallbacksPacketData>): _139.IcacallbacksPacketData;
            fromAmino(object: _139.IcacallbacksPacketDataAmino): _139.IcacallbacksPacketData;
            toAmino(message: _139.IcacallbacksPacketData): _139.IcacallbacksPacketDataAmino;
            fromAminoMsg(object: _139.IcacallbacksPacketDataAminoMsg): _139.IcacallbacksPacketData;
            fromProtoMsg(message: _139.IcacallbacksPacketDataProtoMsg): _139.IcacallbacksPacketData;
            toProto(message: _139.IcacallbacksPacketData): Uint8Array;
            toProtoMsg(message: _139.IcacallbacksPacketData): _139.IcacallbacksPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _139.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.NoData;
            fromPartial(_: Partial<_139.NoData>): _139.NoData;
            fromAmino(_: _139.NoDataAmino): _139.NoData;
            toAmino(_: _139.NoData): _139.NoDataAmino;
            fromAminoMsg(object: _139.NoDataAminoMsg): _139.NoData;
            fromProtoMsg(message: _139.NoDataProtoMsg): _139.NoData;
            toProto(message: _139.NoData): Uint8Array;
            toProtoMsg(message: _139.NoData): _139.NoDataProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _138.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.GenesisState;
            fromPartial(object: Partial<_138.GenesisState>): _138.GenesisState;
            fromAmino(object: _138.GenesisStateAmino): _138.GenesisState;
            toAmino(message: _138.GenesisState): _138.GenesisStateAmino;
            fromAminoMsg(object: _138.GenesisStateAminoMsg): _138.GenesisState;
            fromProtoMsg(message: _138.GenesisStateProtoMsg): _138.GenesisState;
            toProto(message: _138.GenesisState): Uint8Array;
            toProtoMsg(message: _138.GenesisState): _138.GenesisStateProtoMsg;
        };
        CallbackData: {
            typeUrl: string;
            encode(message: _137.CallbackData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.CallbackData;
            fromPartial(object: Partial<_137.CallbackData>): _137.CallbackData;
            fromAmino(object: _137.CallbackDataAmino): _137.CallbackData;
            toAmino(message: _137.CallbackData): _137.CallbackDataAmino;
            fromAminoMsg(object: _137.CallbackDataAminoMsg): _137.CallbackData;
            fromProtoMsg(message: _137.CallbackDataProtoMsg): _137.CallbackData;
            toProto(message: _137.CallbackData): Uint8Array;
            toProtoMsg(message: _137.CallbackData): _137.CallbackDataProtoMsg;
        };
    };
    const icaoracle: {
        MsgClientImpl: typeof _291.MsgClientImpl;
        QueryClientImpl: typeof _283.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            oracle(request: _147.QueryOracleRequest): Promise<_147.QueryOracleResponse>;
            allOracles(request?: _147.QueryAllOraclesRequest): Promise<_147.QueryAllOraclesResponse>;
            activeOracles(request: _147.QueryActiveOraclesRequest): Promise<_147.QueryActiveOraclesResponse>;
            metrics(request: _147.QueryMetricsRequest): Promise<_147.QueryMetricsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                addOracle(value: _148.MsgAddOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                instantiateOracle(value: _148.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreOracleICA(value: _148.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                toggleOracle(value: _148.MsgToggleOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeOracle(value: _148.MsgRemoveOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                addOracle(value: _148.MsgAddOracle): {
                    typeUrl: string;
                    value: _148.MsgAddOracle;
                };
                instantiateOracle(value: _148.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: _148.MsgInstantiateOracle;
                };
                restoreOracleICA(value: _148.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: _148.MsgRestoreOracleICA;
                };
                toggleOracle(value: _148.MsgToggleOracle): {
                    typeUrl: string;
                    value: _148.MsgToggleOracle;
                };
                removeOracle(value: _148.MsgRemoveOracle): {
                    typeUrl: string;
                    value: _148.MsgRemoveOracle;
                };
            };
            fromPartial: {
                addOracle(value: _148.MsgAddOracle): {
                    typeUrl: string;
                    value: _148.MsgAddOracle;
                };
                instantiateOracle(value: _148.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: _148.MsgInstantiateOracle;
                };
                restoreOracleICA(value: _148.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: _148.MsgRestoreOracleICA;
                };
                toggleOracle(value: _148.MsgToggleOracle): {
                    typeUrl: string;
                    value: _148.MsgToggleOracle;
                };
                removeOracle(value: _148.MsgRemoveOracle): {
                    typeUrl: string;
                    value: _148.MsgRemoveOracle;
                };
            };
        };
        AminoConverter: {
            "/stride.icaoracle.MsgAddOracle": {
                aminoType: string;
                toAmino: (message: _148.MsgAddOracle) => _148.MsgAddOracleAmino;
                fromAmino: (object: _148.MsgAddOracleAmino) => _148.MsgAddOracle;
            };
            "/stride.icaoracle.MsgInstantiateOracle": {
                aminoType: string;
                toAmino: (message: _148.MsgInstantiateOracle) => _148.MsgInstantiateOracleAmino;
                fromAmino: (object: _148.MsgInstantiateOracleAmino) => _148.MsgInstantiateOracle;
            };
            "/stride.icaoracle.MsgRestoreOracleICA": {
                aminoType: string;
                toAmino: (message: _148.MsgRestoreOracleICA) => _148.MsgRestoreOracleICAAmino;
                fromAmino: (object: _148.MsgRestoreOracleICAAmino) => _148.MsgRestoreOracleICA;
            };
            "/stride.icaoracle.MsgToggleOracle": {
                aminoType: string;
                toAmino: (message: _148.MsgToggleOracle) => _148.MsgToggleOracleAmino;
                fromAmino: (object: _148.MsgToggleOracleAmino) => _148.MsgToggleOracle;
            };
            "/stride.icaoracle.MsgRemoveOracle": {
                aminoType: string;
                toAmino: (message: _148.MsgRemoveOracle) => _148.MsgRemoveOracleAmino;
                fromAmino: (object: _148.MsgRemoveOracleAmino) => _148.MsgRemoveOracle;
            };
        };
        MsgAddOracle: {
            typeUrl: string;
            encode(message: _148.MsgAddOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgAddOracle;
            fromPartial(object: Partial<_148.MsgAddOracle>): _148.MsgAddOracle;
            fromAmino(object: _148.MsgAddOracleAmino): _148.MsgAddOracle;
            toAmino(message: _148.MsgAddOracle): _148.MsgAddOracleAmino;
            fromAminoMsg(object: _148.MsgAddOracleAminoMsg): _148.MsgAddOracle;
            toAminoMsg(message: _148.MsgAddOracle): _148.MsgAddOracleAminoMsg;
            fromProtoMsg(message: _148.MsgAddOracleProtoMsg): _148.MsgAddOracle;
            toProto(message: _148.MsgAddOracle): Uint8Array;
            toProtoMsg(message: _148.MsgAddOracle): _148.MsgAddOracleProtoMsg;
        };
        MsgAddOracleResponse: {
            typeUrl: string;
            encode(_: _148.MsgAddOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgAddOracleResponse;
            fromPartial(_: Partial<_148.MsgAddOracleResponse>): _148.MsgAddOracleResponse;
            fromAmino(_: _148.MsgAddOracleResponseAmino): _148.MsgAddOracleResponse;
            toAmino(_: _148.MsgAddOracleResponse): _148.MsgAddOracleResponseAmino;
            fromAminoMsg(object: _148.MsgAddOracleResponseAminoMsg): _148.MsgAddOracleResponse;
            fromProtoMsg(message: _148.MsgAddOracleResponseProtoMsg): _148.MsgAddOracleResponse;
            toProto(message: _148.MsgAddOracleResponse): Uint8Array;
            toProtoMsg(message: _148.MsgAddOracleResponse): _148.MsgAddOracleResponseProtoMsg;
        };
        MsgInstantiateOracle: {
            typeUrl: string;
            encode(message: _148.MsgInstantiateOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgInstantiateOracle;
            fromPartial(object: Partial<_148.MsgInstantiateOracle>): _148.MsgInstantiateOracle;
            fromAmino(object: _148.MsgInstantiateOracleAmino): _148.MsgInstantiateOracle;
            toAmino(message: _148.MsgInstantiateOracle): _148.MsgInstantiateOracleAmino;
            fromAminoMsg(object: _148.MsgInstantiateOracleAminoMsg): _148.MsgInstantiateOracle;
            toAminoMsg(message: _148.MsgInstantiateOracle): _148.MsgInstantiateOracleAminoMsg;
            fromProtoMsg(message: _148.MsgInstantiateOracleProtoMsg): _148.MsgInstantiateOracle;
            toProto(message: _148.MsgInstantiateOracle): Uint8Array;
            toProtoMsg(message: _148.MsgInstantiateOracle): _148.MsgInstantiateOracleProtoMsg;
        };
        MsgInstantiateOracleResponse: {
            typeUrl: string;
            encode(_: _148.MsgInstantiateOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgInstantiateOracleResponse;
            fromPartial(_: Partial<_148.MsgInstantiateOracleResponse>): _148.MsgInstantiateOracleResponse;
            fromAmino(_: _148.MsgInstantiateOracleResponseAmino): _148.MsgInstantiateOracleResponse;
            toAmino(_: _148.MsgInstantiateOracleResponse): _148.MsgInstantiateOracleResponseAmino;
            fromAminoMsg(object: _148.MsgInstantiateOracleResponseAminoMsg): _148.MsgInstantiateOracleResponse;
            fromProtoMsg(message: _148.MsgInstantiateOracleResponseProtoMsg): _148.MsgInstantiateOracleResponse;
            toProto(message: _148.MsgInstantiateOracleResponse): Uint8Array;
            toProtoMsg(message: _148.MsgInstantiateOracleResponse): _148.MsgInstantiateOracleResponseProtoMsg;
        };
        MsgRestoreOracleICA: {
            typeUrl: string;
            encode(message: _148.MsgRestoreOracleICA, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgRestoreOracleICA;
            fromPartial(object: Partial<_148.MsgRestoreOracleICA>): _148.MsgRestoreOracleICA;
            fromAmino(object: _148.MsgRestoreOracleICAAmino): _148.MsgRestoreOracleICA;
            toAmino(message: _148.MsgRestoreOracleICA): _148.MsgRestoreOracleICAAmino;
            fromAminoMsg(object: _148.MsgRestoreOracleICAAminoMsg): _148.MsgRestoreOracleICA;
            toAminoMsg(message: _148.MsgRestoreOracleICA): _148.MsgRestoreOracleICAAminoMsg;
            fromProtoMsg(message: _148.MsgRestoreOracleICAProtoMsg): _148.MsgRestoreOracleICA;
            toProto(message: _148.MsgRestoreOracleICA): Uint8Array;
            toProtoMsg(message: _148.MsgRestoreOracleICA): _148.MsgRestoreOracleICAProtoMsg;
        };
        MsgRestoreOracleICAResponse: {
            typeUrl: string;
            encode(_: _148.MsgRestoreOracleICAResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgRestoreOracleICAResponse;
            fromPartial(_: Partial<_148.MsgRestoreOracleICAResponse>): _148.MsgRestoreOracleICAResponse;
            fromAmino(_: _148.MsgRestoreOracleICAResponseAmino): _148.MsgRestoreOracleICAResponse;
            toAmino(_: _148.MsgRestoreOracleICAResponse): _148.MsgRestoreOracleICAResponseAmino;
            fromAminoMsg(object: _148.MsgRestoreOracleICAResponseAminoMsg): _148.MsgRestoreOracleICAResponse;
            fromProtoMsg(message: _148.MsgRestoreOracleICAResponseProtoMsg): _148.MsgRestoreOracleICAResponse;
            toProto(message: _148.MsgRestoreOracleICAResponse): Uint8Array;
            toProtoMsg(message: _148.MsgRestoreOracleICAResponse): _148.MsgRestoreOracleICAResponseProtoMsg;
        };
        MsgToggleOracle: {
            typeUrl: string;
            encode(message: _148.MsgToggleOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgToggleOracle;
            fromPartial(object: Partial<_148.MsgToggleOracle>): _148.MsgToggleOracle;
            fromAmino(object: _148.MsgToggleOracleAmino): _148.MsgToggleOracle;
            toAmino(message: _148.MsgToggleOracle): _148.MsgToggleOracleAmino;
            fromAminoMsg(object: _148.MsgToggleOracleAminoMsg): _148.MsgToggleOracle;
            toAminoMsg(message: _148.MsgToggleOracle): _148.MsgToggleOracleAminoMsg;
            fromProtoMsg(message: _148.MsgToggleOracleProtoMsg): _148.MsgToggleOracle;
            toProto(message: _148.MsgToggleOracle): Uint8Array;
            toProtoMsg(message: _148.MsgToggleOracle): _148.MsgToggleOracleProtoMsg;
        };
        MsgToggleOracleResponse: {
            typeUrl: string;
            encode(_: _148.MsgToggleOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgToggleOracleResponse;
            fromPartial(_: Partial<_148.MsgToggleOracleResponse>): _148.MsgToggleOracleResponse;
            fromAmino(_: _148.MsgToggleOracleResponseAmino): _148.MsgToggleOracleResponse;
            toAmino(_: _148.MsgToggleOracleResponse): _148.MsgToggleOracleResponseAmino;
            fromAminoMsg(object: _148.MsgToggleOracleResponseAminoMsg): _148.MsgToggleOracleResponse;
            fromProtoMsg(message: _148.MsgToggleOracleResponseProtoMsg): _148.MsgToggleOracleResponse;
            toProto(message: _148.MsgToggleOracleResponse): Uint8Array;
            toProtoMsg(message: _148.MsgToggleOracleResponse): _148.MsgToggleOracleResponseProtoMsg;
        };
        MsgRemoveOracle: {
            typeUrl: string;
            encode(message: _148.MsgRemoveOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgRemoveOracle;
            fromPartial(object: Partial<_148.MsgRemoveOracle>): _148.MsgRemoveOracle;
            fromAmino(object: _148.MsgRemoveOracleAmino): _148.MsgRemoveOracle;
            toAmino(message: _148.MsgRemoveOracle): _148.MsgRemoveOracleAmino;
            fromAminoMsg(object: _148.MsgRemoveOracleAminoMsg): _148.MsgRemoveOracle;
            toAminoMsg(message: _148.MsgRemoveOracle): _148.MsgRemoveOracleAminoMsg;
            fromProtoMsg(message: _148.MsgRemoveOracleProtoMsg): _148.MsgRemoveOracle;
            toProto(message: _148.MsgRemoveOracle): Uint8Array;
            toProtoMsg(message: _148.MsgRemoveOracle): _148.MsgRemoveOracleProtoMsg;
        };
        MsgRemoveOracleResponse: {
            typeUrl: string;
            encode(_: _148.MsgRemoveOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgRemoveOracleResponse;
            fromPartial(_: Partial<_148.MsgRemoveOracleResponse>): _148.MsgRemoveOracleResponse;
            fromAmino(_: _148.MsgRemoveOracleResponseAmino): _148.MsgRemoveOracleResponse;
            toAmino(_: _148.MsgRemoveOracleResponse): _148.MsgRemoveOracleResponseAmino;
            fromAminoMsg(object: _148.MsgRemoveOracleResponseAminoMsg): _148.MsgRemoveOracleResponse;
            fromProtoMsg(message: _148.MsgRemoveOracleResponseProtoMsg): _148.MsgRemoveOracleResponse;
            toProto(message: _148.MsgRemoveOracleResponse): Uint8Array;
            toProtoMsg(message: _148.MsgRemoveOracleResponse): _148.MsgRemoveOracleResponseProtoMsg;
        };
        QueryOracleRequest: {
            typeUrl: string;
            encode(message: _147.QueryOracleRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryOracleRequest;
            fromPartial(object: Partial<_147.QueryOracleRequest>): _147.QueryOracleRequest;
            fromAmino(object: _147.QueryOracleRequestAmino): _147.QueryOracleRequest;
            toAmino(message: _147.QueryOracleRequest): _147.QueryOracleRequestAmino;
            fromAminoMsg(object: _147.QueryOracleRequestAminoMsg): _147.QueryOracleRequest;
            fromProtoMsg(message: _147.QueryOracleRequestProtoMsg): _147.QueryOracleRequest;
            toProto(message: _147.QueryOracleRequest): Uint8Array;
            toProtoMsg(message: _147.QueryOracleRequest): _147.QueryOracleRequestProtoMsg;
        };
        QueryOracleResponse: {
            typeUrl: string;
            encode(message: _147.QueryOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryOracleResponse;
            fromPartial(object: Partial<_147.QueryOracleResponse>): _147.QueryOracleResponse;
            fromAmino(object: _147.QueryOracleResponseAmino): _147.QueryOracleResponse;
            toAmino(message: _147.QueryOracleResponse): _147.QueryOracleResponseAmino;
            fromAminoMsg(object: _147.QueryOracleResponseAminoMsg): _147.QueryOracleResponse;
            fromProtoMsg(message: _147.QueryOracleResponseProtoMsg): _147.QueryOracleResponse;
            toProto(message: _147.QueryOracleResponse): Uint8Array;
            toProtoMsg(message: _147.QueryOracleResponse): _147.QueryOracleResponseProtoMsg;
        };
        QueryAllOraclesRequest: {
            typeUrl: string;
            encode(_: _147.QueryAllOraclesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryAllOraclesRequest;
            fromPartial(_: Partial<_147.QueryAllOraclesRequest>): _147.QueryAllOraclesRequest;
            fromAmino(_: _147.QueryAllOraclesRequestAmino): _147.QueryAllOraclesRequest;
            toAmino(_: _147.QueryAllOraclesRequest): _147.QueryAllOraclesRequestAmino;
            fromAminoMsg(object: _147.QueryAllOraclesRequestAminoMsg): _147.QueryAllOraclesRequest;
            fromProtoMsg(message: _147.QueryAllOraclesRequestProtoMsg): _147.QueryAllOraclesRequest;
            toProto(message: _147.QueryAllOraclesRequest): Uint8Array;
            toProtoMsg(message: _147.QueryAllOraclesRequest): _147.QueryAllOraclesRequestProtoMsg;
        };
        QueryAllOraclesResponse: {
            typeUrl: string;
            encode(message: _147.QueryAllOraclesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryAllOraclesResponse;
            fromPartial(object: Partial<_147.QueryAllOraclesResponse>): _147.QueryAllOraclesResponse;
            fromAmino(object: _147.QueryAllOraclesResponseAmino): _147.QueryAllOraclesResponse;
            toAmino(message: _147.QueryAllOraclesResponse): _147.QueryAllOraclesResponseAmino;
            fromAminoMsg(object: _147.QueryAllOraclesResponseAminoMsg): _147.QueryAllOraclesResponse;
            fromProtoMsg(message: _147.QueryAllOraclesResponseProtoMsg): _147.QueryAllOraclesResponse;
            toProto(message: _147.QueryAllOraclesResponse): Uint8Array;
            toProtoMsg(message: _147.QueryAllOraclesResponse): _147.QueryAllOraclesResponseProtoMsg;
        };
        QueryActiveOraclesRequest: {
            typeUrl: string;
            encode(message: _147.QueryActiveOraclesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryActiveOraclesRequest;
            fromPartial(object: Partial<_147.QueryActiveOraclesRequest>): _147.QueryActiveOraclesRequest;
            fromAmino(object: _147.QueryActiveOraclesRequestAmino): _147.QueryActiveOraclesRequest;
            toAmino(message: _147.QueryActiveOraclesRequest): _147.QueryActiveOraclesRequestAmino;
            fromAminoMsg(object: _147.QueryActiveOraclesRequestAminoMsg): _147.QueryActiveOraclesRequest;
            fromProtoMsg(message: _147.QueryActiveOraclesRequestProtoMsg): _147.QueryActiveOraclesRequest;
            toProto(message: _147.QueryActiveOraclesRequest): Uint8Array;
            toProtoMsg(message: _147.QueryActiveOraclesRequest): _147.QueryActiveOraclesRequestProtoMsg;
        };
        QueryActiveOraclesResponse: {
            typeUrl: string;
            encode(message: _147.QueryActiveOraclesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryActiveOraclesResponse;
            fromPartial(object: Partial<_147.QueryActiveOraclesResponse>): _147.QueryActiveOraclesResponse;
            fromAmino(object: _147.QueryActiveOraclesResponseAmino): _147.QueryActiveOraclesResponse;
            toAmino(message: _147.QueryActiveOraclesResponse): _147.QueryActiveOraclesResponseAmino;
            fromAminoMsg(object: _147.QueryActiveOraclesResponseAminoMsg): _147.QueryActiveOraclesResponse;
            fromProtoMsg(message: _147.QueryActiveOraclesResponseProtoMsg): _147.QueryActiveOraclesResponse;
            toProto(message: _147.QueryActiveOraclesResponse): Uint8Array;
            toProtoMsg(message: _147.QueryActiveOraclesResponse): _147.QueryActiveOraclesResponseProtoMsg;
        };
        QueryMetricsRequest: {
            typeUrl: string;
            encode(message: _147.QueryMetricsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryMetricsRequest;
            fromPartial(object: Partial<_147.QueryMetricsRequest>): _147.QueryMetricsRequest;
            fromAmino(object: _147.QueryMetricsRequestAmino): _147.QueryMetricsRequest;
            toAmino(message: _147.QueryMetricsRequest): _147.QueryMetricsRequestAmino;
            fromAminoMsg(object: _147.QueryMetricsRequestAminoMsg): _147.QueryMetricsRequest;
            fromProtoMsg(message: _147.QueryMetricsRequestProtoMsg): _147.QueryMetricsRequest;
            toProto(message: _147.QueryMetricsRequest): Uint8Array;
            toProtoMsg(message: _147.QueryMetricsRequest): _147.QueryMetricsRequestProtoMsg;
        };
        QueryMetricsResponse: {
            typeUrl: string;
            encode(message: _147.QueryMetricsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryMetricsResponse;
            fromPartial(object: Partial<_147.QueryMetricsResponse>): _147.QueryMetricsResponse;
            fromAmino(object: _147.QueryMetricsResponseAmino): _147.QueryMetricsResponse;
            toAmino(message: _147.QueryMetricsResponse): _147.QueryMetricsResponseAmino;
            fromAminoMsg(object: _147.QueryMetricsResponseAminoMsg): _147.QueryMetricsResponse;
            fromProtoMsg(message: _147.QueryMetricsResponseProtoMsg): _147.QueryMetricsResponse;
            toProto(message: _147.QueryMetricsResponse): Uint8Array;
            toProtoMsg(message: _147.QueryMetricsResponse): _147.QueryMetricsResponseProtoMsg;
        };
        metricStatusFromJSON(object: any): _146.MetricStatus;
        metricStatusToJSON(object: _146.MetricStatus): string;
        MetricStatus: typeof _146.MetricStatus;
        MetricStatusSDKType: typeof _146.MetricStatus;
        MetricStatusAmino: typeof _146.MetricStatus;
        Oracle: {
            typeUrl: string;
            encode(message: _146.Oracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.Oracle;
            fromPartial(object: Partial<_146.Oracle>): _146.Oracle;
            fromAmino(object: _146.OracleAmino): _146.Oracle;
            toAmino(message: _146.Oracle): _146.OracleAmino;
            fromAminoMsg(object: _146.OracleAminoMsg): _146.Oracle;
            fromProtoMsg(message: _146.OracleProtoMsg): _146.Oracle;
            toProto(message: _146.Oracle): Uint8Array;
            toProtoMsg(message: _146.Oracle): _146.OracleProtoMsg;
        };
        Metric: {
            typeUrl: string;
            encode(message: _146.Metric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.Metric;
            fromPartial(object: Partial<_146.Metric>): _146.Metric;
            fromAmino(object: _146.MetricAmino): _146.Metric;
            toAmino(message: _146.Metric): _146.MetricAmino;
            fromAminoMsg(object: _146.MetricAminoMsg): _146.Metric;
            fromProtoMsg(message: _146.MetricProtoMsg): _146.Metric;
            toProto(message: _146.Metric): Uint8Array;
            toProtoMsg(message: _146.Metric): _146.MetricProtoMsg;
        };
        RedemptionRateAttributes: {
            typeUrl: string;
            encode(message: _146.RedemptionRateAttributes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.RedemptionRateAttributes;
            fromPartial(object: Partial<_146.RedemptionRateAttributes>): _146.RedemptionRateAttributes;
            fromAmino(object: _146.RedemptionRateAttributesAmino): _146.RedemptionRateAttributes;
            toAmino(message: _146.RedemptionRateAttributes): _146.RedemptionRateAttributesAmino;
            fromAminoMsg(object: _146.RedemptionRateAttributesAminoMsg): _146.RedemptionRateAttributes;
            fromProtoMsg(message: _146.RedemptionRateAttributesProtoMsg): _146.RedemptionRateAttributes;
            toProto(message: _146.RedemptionRateAttributes): Uint8Array;
            toProtoMsg(message: _146.RedemptionRateAttributes): _146.RedemptionRateAttributesProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _145.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.Params;
            fromPartial(_: Partial<_145.Params>): _145.Params;
            fromAmino(_: _145.ParamsAmino): _145.Params;
            toAmino(_: _145.Params): _145.ParamsAmino;
            fromAminoMsg(object: _145.ParamsAminoMsg): _145.Params;
            fromProtoMsg(message: _145.ParamsProtoMsg): _145.Params;
            toProto(message: _145.Params): Uint8Array;
            toProtoMsg(message: _145.Params): _145.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _145.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.GenesisState;
            fromPartial(object: Partial<_145.GenesisState>): _145.GenesisState;
            fromAmino(object: _145.GenesisStateAmino): _145.GenesisState;
            toAmino(message: _145.GenesisState): _145.GenesisStateAmino;
            fromAminoMsg(object: _145.GenesisStateAminoMsg): _145.GenesisState;
            fromProtoMsg(message: _145.GenesisStateProtoMsg): _145.GenesisState;
            toProto(message: _145.GenesisState): Uint8Array;
            toProtoMsg(message: _145.GenesisState): _145.GenesisStateProtoMsg;
        };
        MsgInstantiateOracleContract: {
            typeUrl: string;
            encode(message: _144.MsgInstantiateOracleContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.MsgInstantiateOracleContract;
            fromPartial(object: Partial<_144.MsgInstantiateOracleContract>): _144.MsgInstantiateOracleContract;
            fromAmino(object: _144.MsgInstantiateOracleContractAmino): _144.MsgInstantiateOracleContract;
            toAmino(message: _144.MsgInstantiateOracleContract): _144.MsgInstantiateOracleContractAmino;
            fromAminoMsg(object: _144.MsgInstantiateOracleContractAminoMsg): _144.MsgInstantiateOracleContract;
            fromProtoMsg(message: _144.MsgInstantiateOracleContractProtoMsg): _144.MsgInstantiateOracleContract;
            toProto(message: _144.MsgInstantiateOracleContract): Uint8Array;
            toProtoMsg(message: _144.MsgInstantiateOracleContract): _144.MsgInstantiateOracleContractProtoMsg;
        };
        MsgExecuteContractPostMetric: {
            typeUrl: string;
            encode(message: _144.MsgExecuteContractPostMetric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.MsgExecuteContractPostMetric;
            fromPartial(object: Partial<_144.MsgExecuteContractPostMetric>): _144.MsgExecuteContractPostMetric;
            fromAmino(object: _144.MsgExecuteContractPostMetricAmino): _144.MsgExecuteContractPostMetric;
            toAmino(message: _144.MsgExecuteContractPostMetric): _144.MsgExecuteContractPostMetricAmino;
            fromAminoMsg(object: _144.MsgExecuteContractPostMetricAminoMsg): _144.MsgExecuteContractPostMetric;
            fromProtoMsg(message: _144.MsgExecuteContractPostMetricProtoMsg): _144.MsgExecuteContractPostMetric;
            toProto(message: _144.MsgExecuteContractPostMetric): Uint8Array;
            toProtoMsg(message: _144.MsgExecuteContractPostMetric): _144.MsgExecuteContractPostMetricProtoMsg;
        };
        MsgPostMetric: {
            typeUrl: string;
            encode(message: _144.MsgPostMetric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.MsgPostMetric;
            fromPartial(object: Partial<_144.MsgPostMetric>): _144.MsgPostMetric;
            fromAmino(object: _144.MsgPostMetricAmino): _144.MsgPostMetric;
            toAmino(message: _144.MsgPostMetric): _144.MsgPostMetricAmino;
            fromAminoMsg(object: _144.MsgPostMetricAminoMsg): _144.MsgPostMetric;
            fromProtoMsg(message: _144.MsgPostMetricProtoMsg): _144.MsgPostMetric;
            toProto(message: _144.MsgPostMetric): Uint8Array;
            toProtoMsg(message: _144.MsgPostMetric): _144.MsgPostMetricProtoMsg;
        };
        InstantiateOracleCallback: {
            typeUrl: string;
            encode(message: _143.InstantiateOracleCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.InstantiateOracleCallback;
            fromPartial(object: Partial<_143.InstantiateOracleCallback>): _143.InstantiateOracleCallback;
            fromAmino(object: _143.InstantiateOracleCallbackAmino): _143.InstantiateOracleCallback;
            toAmino(message: _143.InstantiateOracleCallback): _143.InstantiateOracleCallbackAmino;
            fromAminoMsg(object: _143.InstantiateOracleCallbackAminoMsg): _143.InstantiateOracleCallback;
            fromProtoMsg(message: _143.InstantiateOracleCallbackProtoMsg): _143.InstantiateOracleCallback;
            toProto(message: _143.InstantiateOracleCallback): Uint8Array;
            toProtoMsg(message: _143.InstantiateOracleCallback): _143.InstantiateOracleCallbackProtoMsg;
        };
        UpdateOracleCallback: {
            typeUrl: string;
            encode(message: _143.UpdateOracleCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.UpdateOracleCallback;
            fromPartial(object: Partial<_143.UpdateOracleCallback>): _143.UpdateOracleCallback;
            fromAmino(object: _143.UpdateOracleCallbackAmino): _143.UpdateOracleCallback;
            toAmino(message: _143.UpdateOracleCallback): _143.UpdateOracleCallbackAmino;
            fromAminoMsg(object: _143.UpdateOracleCallbackAminoMsg): _143.UpdateOracleCallback;
            fromProtoMsg(message: _143.UpdateOracleCallbackProtoMsg): _143.UpdateOracleCallback;
            toProto(message: _143.UpdateOracleCallback): Uint8Array;
            toProtoMsg(message: _143.UpdateOracleCallback): _143.UpdateOracleCallbackProtoMsg;
        };
    };
    namespace interchainquery {
        const v1: {
            MsgClientImpl: typeof _292.MsgClientImpl;
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitQueryResponse(value: _150.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitQueryResponse(value: _150.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _150.MsgSubmitQueryResponse;
                    };
                };
                fromPartial: {
                    submitQueryResponse(value: _150.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _150.MsgSubmitQueryResponse;
                    };
                };
            };
            AminoConverter: {
                "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
                    aminoType: string;
                    toAmino: (message: _150.MsgSubmitQueryResponse) => _150.MsgSubmitQueryResponseAmino;
                    fromAmino: (object: _150.MsgSubmitQueryResponseAmino) => _150.MsgSubmitQueryResponse;
                };
            };
            QueryPendingQueriesRequest: {
                typeUrl: string;
                encode(_: _151.QueryPendingQueriesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.QueryPendingQueriesRequest;
                fromPartial(_: Partial<_151.QueryPendingQueriesRequest>): _151.QueryPendingQueriesRequest;
                fromAmino(_: _151.QueryPendingQueriesRequestAmino): _151.QueryPendingQueriesRequest;
                toAmino(_: _151.QueryPendingQueriesRequest): _151.QueryPendingQueriesRequestAmino;
                fromAminoMsg(object: _151.QueryPendingQueriesRequestAminoMsg): _151.QueryPendingQueriesRequest;
                fromProtoMsg(message: _151.QueryPendingQueriesRequestProtoMsg): _151.QueryPendingQueriesRequest;
                toProto(message: _151.QueryPendingQueriesRequest): Uint8Array;
                toProtoMsg(message: _151.QueryPendingQueriesRequest): _151.QueryPendingQueriesRequestProtoMsg;
            };
            QueryPendingQueriesResponse: {
                typeUrl: string;
                encode(message: _151.QueryPendingQueriesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.QueryPendingQueriesResponse;
                fromPartial(object: Partial<_151.QueryPendingQueriesResponse>): _151.QueryPendingQueriesResponse;
                fromAmino(object: _151.QueryPendingQueriesResponseAmino): _151.QueryPendingQueriesResponse;
                toAmino(message: _151.QueryPendingQueriesResponse): _151.QueryPendingQueriesResponseAmino;
                fromAminoMsg(object: _151.QueryPendingQueriesResponseAminoMsg): _151.QueryPendingQueriesResponse;
                fromProtoMsg(message: _151.QueryPendingQueriesResponseProtoMsg): _151.QueryPendingQueriesResponse;
                toProto(message: _151.QueryPendingQueriesResponse): Uint8Array;
                toProtoMsg(message: _151.QueryPendingQueriesResponse): _151.QueryPendingQueriesResponseProtoMsg;
            };
            MsgSubmitQueryResponse: {
                typeUrl: string;
                encode(message: _150.MsgSubmitQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.MsgSubmitQueryResponse;
                fromPartial(object: Partial<_150.MsgSubmitQueryResponse>): _150.MsgSubmitQueryResponse;
                fromAmino(object: _150.MsgSubmitQueryResponseAmino): _150.MsgSubmitQueryResponse;
                toAmino(message: _150.MsgSubmitQueryResponse): _150.MsgSubmitQueryResponseAmino;
                fromAminoMsg(object: _150.MsgSubmitQueryResponseAminoMsg): _150.MsgSubmitQueryResponse;
                fromProtoMsg(message: _150.MsgSubmitQueryResponseProtoMsg): _150.MsgSubmitQueryResponse;
                toProto(message: _150.MsgSubmitQueryResponse): Uint8Array;
                toProtoMsg(message: _150.MsgSubmitQueryResponse): _150.MsgSubmitQueryResponseProtoMsg;
            };
            MsgSubmitQueryResponseResponse: {
                typeUrl: string;
                encode(_: _150.MsgSubmitQueryResponseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.MsgSubmitQueryResponseResponse;
                fromPartial(_: Partial<_150.MsgSubmitQueryResponseResponse>): _150.MsgSubmitQueryResponseResponse;
                fromAmino(_: _150.MsgSubmitQueryResponseResponseAmino): _150.MsgSubmitQueryResponseResponse;
                toAmino(_: _150.MsgSubmitQueryResponseResponse): _150.MsgSubmitQueryResponseResponseAmino;
                fromAminoMsg(object: _150.MsgSubmitQueryResponseResponseAminoMsg): _150.MsgSubmitQueryResponseResponse;
                fromProtoMsg(message: _150.MsgSubmitQueryResponseResponseProtoMsg): _150.MsgSubmitQueryResponseResponse;
                toProto(message: _150.MsgSubmitQueryResponseResponse): Uint8Array;
                toProtoMsg(message: _150.MsgSubmitQueryResponseResponse): _150.MsgSubmitQueryResponseResponseProtoMsg;
            };
            timeoutPolicyFromJSON(object: any): _149.TimeoutPolicy;
            timeoutPolicyToJSON(object: _149.TimeoutPolicy): string;
            TimeoutPolicy: typeof _149.TimeoutPolicy;
            TimeoutPolicySDKType: typeof _149.TimeoutPolicy;
            TimeoutPolicyAmino: typeof _149.TimeoutPolicy;
            Query: {
                typeUrl: string;
                encode(message: _149.Query, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.Query;
                fromPartial(object: Partial<_149.Query>): _149.Query;
                fromAmino(object: _149.QueryAmino): _149.Query;
                toAmino(message: _149.Query): _149.QueryAmino;
                fromAminoMsg(object: _149.QueryAminoMsg): _149.Query;
                fromProtoMsg(message: _149.QueryProtoMsg): _149.Query;
                toProto(message: _149.Query): Uint8Array;
                toProtoMsg(message: _149.Query): _149.QueryProtoMsg;
            };
            DataPoint: {
                typeUrl: string;
                encode(message: _149.DataPoint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.DataPoint;
                fromPartial(object: Partial<_149.DataPoint>): _149.DataPoint;
                fromAmino(object: _149.DataPointAmino): _149.DataPoint;
                toAmino(message: _149.DataPoint): _149.DataPointAmino;
                fromAminoMsg(object: _149.DataPointAminoMsg): _149.DataPoint;
                fromProtoMsg(message: _149.DataPointProtoMsg): _149.DataPoint;
                toProto(message: _149.DataPoint): Uint8Array;
                toProtoMsg(message: _149.DataPoint): _149.DataPointProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _149.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.GenesisState;
                fromPartial(object: Partial<_149.GenesisState>): _149.GenesisState;
                fromAmino(object: _149.GenesisStateAmino): _149.GenesisState;
                toAmino(message: _149.GenesisState): _149.GenesisStateAmino;
                fromAminoMsg(object: _149.GenesisStateAminoMsg): _149.GenesisState;
                fromProtoMsg(message: _149.GenesisStateProtoMsg): _149.GenesisState;
                toProto(message: _149.GenesisState): Uint8Array;
                toProtoMsg(message: _149.GenesisState): _149.GenesisStateProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _284.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _154.QueryParamsRequest): Promise<_154.QueryParamsResponse>;
                epochProvisions(request?: _154.QueryEpochProvisionsRequest): Promise<_154.QueryEpochProvisionsResponse>;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _154.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.QueryParamsRequest;
                fromPartial(_: Partial<_154.QueryParamsRequest>): _154.QueryParamsRequest;
                fromAmino(_: _154.QueryParamsRequestAmino): _154.QueryParamsRequest;
                toAmino(_: _154.QueryParamsRequest): _154.QueryParamsRequestAmino;
                fromAminoMsg(object: _154.QueryParamsRequestAminoMsg): _154.QueryParamsRequest;
                fromProtoMsg(message: _154.QueryParamsRequestProtoMsg): _154.QueryParamsRequest;
                toProto(message: _154.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _154.QueryParamsRequest): _154.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _154.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.QueryParamsResponse;
                fromPartial(object: Partial<_154.QueryParamsResponse>): _154.QueryParamsResponse;
                fromAmino(object: _154.QueryParamsResponseAmino): _154.QueryParamsResponse;
                toAmino(message: _154.QueryParamsResponse): _154.QueryParamsResponseAmino;
                fromAminoMsg(object: _154.QueryParamsResponseAminoMsg): _154.QueryParamsResponse;
                fromProtoMsg(message: _154.QueryParamsResponseProtoMsg): _154.QueryParamsResponse;
                toProto(message: _154.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _154.QueryParamsResponse): _154.QueryParamsResponseProtoMsg;
            };
            QueryEpochProvisionsRequest: {
                typeUrl: string;
                encode(_: _154.QueryEpochProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_154.QueryEpochProvisionsRequest>): _154.QueryEpochProvisionsRequest;
                fromAmino(_: _154.QueryEpochProvisionsRequestAmino): _154.QueryEpochProvisionsRequest;
                toAmino(_: _154.QueryEpochProvisionsRequest): _154.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _154.QueryEpochProvisionsRequestAminoMsg): _154.QueryEpochProvisionsRequest;
                fromProtoMsg(message: _154.QueryEpochProvisionsRequestProtoMsg): _154.QueryEpochProvisionsRequest;
                toProto(message: _154.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _154.QueryEpochProvisionsRequest): _154.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                typeUrl: string;
                encode(message: _154.QueryEpochProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_154.QueryEpochProvisionsResponse>): _154.QueryEpochProvisionsResponse;
                fromAmino(object: _154.QueryEpochProvisionsResponseAmino): _154.QueryEpochProvisionsResponse;
                toAmino(message: _154.QueryEpochProvisionsResponse): _154.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _154.QueryEpochProvisionsResponseAminoMsg): _154.QueryEpochProvisionsResponse;
                fromProtoMsg(message: _154.QueryEpochProvisionsResponseProtoMsg): _154.QueryEpochProvisionsResponse;
                toProto(message: _154.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _154.QueryEpochProvisionsResponse): _154.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _153.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.Minter;
                fromPartial(object: Partial<_153.Minter>): _153.Minter;
                fromAmino(object: _153.MinterAmino): _153.Minter;
                toAmino(message: _153.Minter): _153.MinterAmino;
                fromAminoMsg(object: _153.MinterAminoMsg): _153.Minter;
                fromProtoMsg(message: _153.MinterProtoMsg): _153.Minter;
                toProto(message: _153.Minter): Uint8Array;
                toProtoMsg(message: _153.Minter): _153.MinterProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                encode(message: _153.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.DistributionProportions;
                fromPartial(object: Partial<_153.DistributionProportions>): _153.DistributionProportions;
                fromAmino(object: _153.DistributionProportionsAmino): _153.DistributionProportions;
                toAmino(message: _153.DistributionProportions): _153.DistributionProportionsAmino;
                fromAminoMsg(object: _153.DistributionProportionsAminoMsg): _153.DistributionProportions;
                fromProtoMsg(message: _153.DistributionProportionsProtoMsg): _153.DistributionProportions;
                toProto(message: _153.DistributionProportions): Uint8Array;
                toProtoMsg(message: _153.DistributionProportions): _153.DistributionProportionsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _153.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.Params;
                fromPartial(object: Partial<_153.Params>): _153.Params;
                fromAmino(object: _153.ParamsAmino): _153.Params;
                toAmino(message: _153.Params): _153.ParamsAmino;
                fromAminoMsg(object: _153.ParamsAminoMsg): _153.Params;
                fromProtoMsg(message: _153.ParamsProtoMsg): _153.Params;
                toProto(message: _153.Params): Uint8Array;
                toProtoMsg(message: _153.Params): _153.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _152.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.GenesisState;
                fromPartial(object: Partial<_152.GenesisState>): _152.GenesisState;
                fromAmino(object: _152.GenesisStateAmino): _152.GenesisState;
                toAmino(message: _152.GenesisState): _152.GenesisStateAmino;
                fromAminoMsg(object: _152.GenesisStateAminoMsg): _152.GenesisState;
                fromProtoMsg(message: _152.GenesisStateProtoMsg): _152.GenesisState;
                toProto(message: _152.GenesisState): Uint8Array;
                toProtoMsg(message: _152.GenesisState): _152.GenesisStateProtoMsg;
            };
        };
    }
    const records: {
        QueryClientImpl: typeof _285.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _158.QueryParamsRequest): Promise<_158.QueryParamsResponse>;
            userRedemptionRecord(request: _158.QueryGetUserRedemptionRecordRequest): Promise<_158.QueryGetUserRedemptionRecordResponse>;
            userRedemptionRecordAll(request?: _158.QueryAllUserRedemptionRecordRequest): Promise<_158.QueryAllUserRedemptionRecordResponse>;
            userRedemptionRecordForUser(request: _158.QueryAllUserRedemptionRecordForUserRequest): Promise<_158.QueryAllUserRedemptionRecordForUserResponse>;
            epochUnbondingRecord(request: _158.QueryGetEpochUnbondingRecordRequest): Promise<_158.QueryGetEpochUnbondingRecordResponse>;
            epochUnbondingRecordAll(request?: _158.QueryAllEpochUnbondingRecordRequest): Promise<_158.QueryAllEpochUnbondingRecordResponse>;
            depositRecord(request: _158.QueryGetDepositRecordRequest): Promise<_158.QueryGetDepositRecordResponse>;
            depositRecordAll(request?: _158.QueryAllDepositRecordRequest): Promise<_158.QueryAllDepositRecordResponse>;
            depositRecordByHost(request: _158.QueryDepositRecordByHostRequest): Promise<_158.QueryDepositRecordByHostResponse>;
            lSMDeposit(request: _158.QueryLSMDepositRequest): Promise<_158.QueryLSMDepositResponse>;
            lSMDeposits(request: _158.QueryLSMDepositsRequest): Promise<_158.QueryLSMDepositsResponse>;
        };
        depositRecord_StatusFromJSON(object: any): _159.DepositRecord_Status;
        depositRecord_StatusToJSON(object: _159.DepositRecord_Status): string;
        depositRecord_SourceFromJSON(object: any): _159.DepositRecord_Source;
        depositRecord_SourceToJSON(object: _159.DepositRecord_Source): string;
        hostZoneUnbonding_StatusFromJSON(object: any): _159.HostZoneUnbonding_Status;
        hostZoneUnbonding_StatusToJSON(object: _159.HostZoneUnbonding_Status): string;
        lSMTokenDeposit_StatusFromJSON(object: any): _159.LSMTokenDeposit_Status;
        lSMTokenDeposit_StatusToJSON(object: _159.LSMTokenDeposit_Status): string;
        DepositRecord_Status: typeof _159.DepositRecord_Status;
        DepositRecord_StatusSDKType: typeof _159.DepositRecord_Status;
        DepositRecord_StatusAmino: typeof _159.DepositRecord_Status;
        DepositRecord_Source: typeof _159.DepositRecord_Source;
        DepositRecord_SourceSDKType: typeof _159.DepositRecord_Source;
        DepositRecord_SourceAmino: typeof _159.DepositRecord_Source;
        HostZoneUnbonding_Status: typeof _159.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusSDKType: typeof _159.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusAmino: typeof _159.HostZoneUnbonding_Status;
        LSMTokenDeposit_Status: typeof _159.LSMTokenDeposit_Status;
        LSMTokenDeposit_StatusSDKType: typeof _159.LSMTokenDeposit_Status;
        LSMTokenDeposit_StatusAmino: typeof _159.LSMTokenDeposit_Status;
        UserRedemptionRecord: {
            typeUrl: string;
            encode(message: _159.UserRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.UserRedemptionRecord;
            fromPartial(object: Partial<_159.UserRedemptionRecord>): _159.UserRedemptionRecord;
            fromAmino(object: _159.UserRedemptionRecordAmino): _159.UserRedemptionRecord;
            toAmino(message: _159.UserRedemptionRecord): _159.UserRedemptionRecordAmino;
            fromAminoMsg(object: _159.UserRedemptionRecordAminoMsg): _159.UserRedemptionRecord;
            fromProtoMsg(message: _159.UserRedemptionRecordProtoMsg): _159.UserRedemptionRecord;
            toProto(message: _159.UserRedemptionRecord): Uint8Array;
            toProtoMsg(message: _159.UserRedemptionRecord): _159.UserRedemptionRecordProtoMsg;
        };
        DepositRecord: {
            typeUrl: string;
            encode(message: _159.DepositRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.DepositRecord;
            fromPartial(object: Partial<_159.DepositRecord>): _159.DepositRecord;
            fromAmino(object: _159.DepositRecordAmino): _159.DepositRecord;
            toAmino(message: _159.DepositRecord): _159.DepositRecordAmino;
            fromAminoMsg(object: _159.DepositRecordAminoMsg): _159.DepositRecord;
            fromProtoMsg(message: _159.DepositRecordProtoMsg): _159.DepositRecord;
            toProto(message: _159.DepositRecord): Uint8Array;
            toProtoMsg(message: _159.DepositRecord): _159.DepositRecordProtoMsg;
        };
        HostZoneUnbonding: {
            typeUrl: string;
            encode(message: _159.HostZoneUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.HostZoneUnbonding;
            fromPartial(object: Partial<_159.HostZoneUnbonding>): _159.HostZoneUnbonding;
            fromAmino(object: _159.HostZoneUnbondingAmino): _159.HostZoneUnbonding;
            toAmino(message: _159.HostZoneUnbonding): _159.HostZoneUnbondingAmino;
            fromAminoMsg(object: _159.HostZoneUnbondingAminoMsg): _159.HostZoneUnbonding;
            fromProtoMsg(message: _159.HostZoneUnbondingProtoMsg): _159.HostZoneUnbonding;
            toProto(message: _159.HostZoneUnbonding): Uint8Array;
            toProtoMsg(message: _159.HostZoneUnbonding): _159.HostZoneUnbondingProtoMsg;
        };
        EpochUnbondingRecord: {
            typeUrl: string;
            encode(message: _159.EpochUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.EpochUnbondingRecord;
            fromPartial(object: Partial<_159.EpochUnbondingRecord>): _159.EpochUnbondingRecord;
            fromAmino(object: _159.EpochUnbondingRecordAmino): _159.EpochUnbondingRecord;
            toAmino(message: _159.EpochUnbondingRecord): _159.EpochUnbondingRecordAmino;
            fromAminoMsg(object: _159.EpochUnbondingRecordAminoMsg): _159.EpochUnbondingRecord;
            fromProtoMsg(message: _159.EpochUnbondingRecordProtoMsg): _159.EpochUnbondingRecord;
            toProto(message: _159.EpochUnbondingRecord): Uint8Array;
            toProtoMsg(message: _159.EpochUnbondingRecord): _159.EpochUnbondingRecordProtoMsg;
        };
        LSMTokenDeposit: {
            typeUrl: string;
            encode(message: _159.LSMTokenDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.LSMTokenDeposit;
            fromPartial(object: Partial<_159.LSMTokenDeposit>): _159.LSMTokenDeposit;
            fromAmino(object: _159.LSMTokenDepositAmino): _159.LSMTokenDeposit;
            toAmino(message: _159.LSMTokenDeposit): _159.LSMTokenDepositAmino;
            fromAminoMsg(object: _159.LSMTokenDepositAminoMsg): _159.LSMTokenDeposit;
            fromProtoMsg(message: _159.LSMTokenDepositProtoMsg): _159.LSMTokenDeposit;
            toProto(message: _159.LSMTokenDeposit): Uint8Array;
            toProtoMsg(message: _159.LSMTokenDeposit): _159.LSMTokenDepositProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _158.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryParamsRequest;
            fromPartial(_: Partial<_158.QueryParamsRequest>): _158.QueryParamsRequest;
            fromAmino(_: _158.QueryParamsRequestAmino): _158.QueryParamsRequest;
            toAmino(_: _158.QueryParamsRequest): _158.QueryParamsRequestAmino;
            fromAminoMsg(object: _158.QueryParamsRequestAminoMsg): _158.QueryParamsRequest;
            fromProtoMsg(message: _158.QueryParamsRequestProtoMsg): _158.QueryParamsRequest;
            toProto(message: _158.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _158.QueryParamsRequest): _158.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _158.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryParamsResponse;
            fromPartial(object: Partial<_158.QueryParamsResponse>): _158.QueryParamsResponse;
            fromAmino(object: _158.QueryParamsResponseAmino): _158.QueryParamsResponse;
            toAmino(message: _158.QueryParamsResponse): _158.QueryParamsResponseAmino;
            fromAminoMsg(object: _158.QueryParamsResponseAminoMsg): _158.QueryParamsResponse;
            fromProtoMsg(message: _158.QueryParamsResponseProtoMsg): _158.QueryParamsResponse;
            toProto(message: _158.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _158.QueryParamsResponse): _158.QueryParamsResponseProtoMsg;
        };
        QueryGetDepositRecordRequest: {
            typeUrl: string;
            encode(message: _158.QueryGetDepositRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryGetDepositRecordRequest;
            fromPartial(object: Partial<_158.QueryGetDepositRecordRequest>): _158.QueryGetDepositRecordRequest;
            fromAmino(object: _158.QueryGetDepositRecordRequestAmino): _158.QueryGetDepositRecordRequest;
            toAmino(message: _158.QueryGetDepositRecordRequest): _158.QueryGetDepositRecordRequestAmino;
            fromAminoMsg(object: _158.QueryGetDepositRecordRequestAminoMsg): _158.QueryGetDepositRecordRequest;
            fromProtoMsg(message: _158.QueryGetDepositRecordRequestProtoMsg): _158.QueryGetDepositRecordRequest;
            toProto(message: _158.QueryGetDepositRecordRequest): Uint8Array;
            toProtoMsg(message: _158.QueryGetDepositRecordRequest): _158.QueryGetDepositRecordRequestProtoMsg;
        };
        QueryGetDepositRecordResponse: {
            typeUrl: string;
            encode(message: _158.QueryGetDepositRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryGetDepositRecordResponse;
            fromPartial(object: Partial<_158.QueryGetDepositRecordResponse>): _158.QueryGetDepositRecordResponse;
            fromAmino(object: _158.QueryGetDepositRecordResponseAmino): _158.QueryGetDepositRecordResponse;
            toAmino(message: _158.QueryGetDepositRecordResponse): _158.QueryGetDepositRecordResponseAmino;
            fromAminoMsg(object: _158.QueryGetDepositRecordResponseAminoMsg): _158.QueryGetDepositRecordResponse;
            fromProtoMsg(message: _158.QueryGetDepositRecordResponseProtoMsg): _158.QueryGetDepositRecordResponse;
            toProto(message: _158.QueryGetDepositRecordResponse): Uint8Array;
            toProtoMsg(message: _158.QueryGetDepositRecordResponse): _158.QueryGetDepositRecordResponseProtoMsg;
        };
        QueryAllDepositRecordRequest: {
            typeUrl: string;
            encode(message: _158.QueryAllDepositRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryAllDepositRecordRequest;
            fromPartial(object: Partial<_158.QueryAllDepositRecordRequest>): _158.QueryAllDepositRecordRequest;
            fromAmino(object: _158.QueryAllDepositRecordRequestAmino): _158.QueryAllDepositRecordRequest;
            toAmino(message: _158.QueryAllDepositRecordRequest): _158.QueryAllDepositRecordRequestAmino;
            fromAminoMsg(object: _158.QueryAllDepositRecordRequestAminoMsg): _158.QueryAllDepositRecordRequest;
            fromProtoMsg(message: _158.QueryAllDepositRecordRequestProtoMsg): _158.QueryAllDepositRecordRequest;
            toProto(message: _158.QueryAllDepositRecordRequest): Uint8Array;
            toProtoMsg(message: _158.QueryAllDepositRecordRequest): _158.QueryAllDepositRecordRequestProtoMsg;
        };
        QueryAllDepositRecordResponse: {
            typeUrl: string;
            encode(message: _158.QueryAllDepositRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryAllDepositRecordResponse;
            fromPartial(object: Partial<_158.QueryAllDepositRecordResponse>): _158.QueryAllDepositRecordResponse;
            fromAmino(object: _158.QueryAllDepositRecordResponseAmino): _158.QueryAllDepositRecordResponse;
            toAmino(message: _158.QueryAllDepositRecordResponse): _158.QueryAllDepositRecordResponseAmino;
            fromAminoMsg(object: _158.QueryAllDepositRecordResponseAminoMsg): _158.QueryAllDepositRecordResponse;
            fromProtoMsg(message: _158.QueryAllDepositRecordResponseProtoMsg): _158.QueryAllDepositRecordResponse;
            toProto(message: _158.QueryAllDepositRecordResponse): Uint8Array;
            toProtoMsg(message: _158.QueryAllDepositRecordResponse): _158.QueryAllDepositRecordResponseProtoMsg;
        };
        QueryDepositRecordByHostRequest: {
            typeUrl: string;
            encode(message: _158.QueryDepositRecordByHostRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryDepositRecordByHostRequest;
            fromPartial(object: Partial<_158.QueryDepositRecordByHostRequest>): _158.QueryDepositRecordByHostRequest;
            fromAmino(object: _158.QueryDepositRecordByHostRequestAmino): _158.QueryDepositRecordByHostRequest;
            toAmino(message: _158.QueryDepositRecordByHostRequest): _158.QueryDepositRecordByHostRequestAmino;
            fromAminoMsg(object: _158.QueryDepositRecordByHostRequestAminoMsg): _158.QueryDepositRecordByHostRequest;
            fromProtoMsg(message: _158.QueryDepositRecordByHostRequestProtoMsg): _158.QueryDepositRecordByHostRequest;
            toProto(message: _158.QueryDepositRecordByHostRequest): Uint8Array;
            toProtoMsg(message: _158.QueryDepositRecordByHostRequest): _158.QueryDepositRecordByHostRequestProtoMsg;
        };
        QueryDepositRecordByHostResponse: {
            typeUrl: string;
            encode(message: _158.QueryDepositRecordByHostResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryDepositRecordByHostResponse;
            fromPartial(object: Partial<_158.QueryDepositRecordByHostResponse>): _158.QueryDepositRecordByHostResponse;
            fromAmino(object: _158.QueryDepositRecordByHostResponseAmino): _158.QueryDepositRecordByHostResponse;
            toAmino(message: _158.QueryDepositRecordByHostResponse): _158.QueryDepositRecordByHostResponseAmino;
            fromAminoMsg(object: _158.QueryDepositRecordByHostResponseAminoMsg): _158.QueryDepositRecordByHostResponse;
            fromProtoMsg(message: _158.QueryDepositRecordByHostResponseProtoMsg): _158.QueryDepositRecordByHostResponse;
            toProto(message: _158.QueryDepositRecordByHostResponse): Uint8Array;
            toProtoMsg(message: _158.QueryDepositRecordByHostResponse): _158.QueryDepositRecordByHostResponseProtoMsg;
        };
        QueryGetUserRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _158.QueryGetUserRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryGetUserRedemptionRecordRequest;
            fromPartial(object: Partial<_158.QueryGetUserRedemptionRecordRequest>): _158.QueryGetUserRedemptionRecordRequest;
            fromAmino(object: _158.QueryGetUserRedemptionRecordRequestAmino): _158.QueryGetUserRedemptionRecordRequest;
            toAmino(message: _158.QueryGetUserRedemptionRecordRequest): _158.QueryGetUserRedemptionRecordRequestAmino;
            fromAminoMsg(object: _158.QueryGetUserRedemptionRecordRequestAminoMsg): _158.QueryGetUserRedemptionRecordRequest;
            fromProtoMsg(message: _158.QueryGetUserRedemptionRecordRequestProtoMsg): _158.QueryGetUserRedemptionRecordRequest;
            toProto(message: _158.QueryGetUserRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _158.QueryGetUserRedemptionRecordRequest): _158.QueryGetUserRedemptionRecordRequestProtoMsg;
        };
        QueryGetUserRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _158.QueryGetUserRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryGetUserRedemptionRecordResponse;
            fromPartial(object: Partial<_158.QueryGetUserRedemptionRecordResponse>): _158.QueryGetUserRedemptionRecordResponse;
            fromAmino(object: _158.QueryGetUserRedemptionRecordResponseAmino): _158.QueryGetUserRedemptionRecordResponse;
            toAmino(message: _158.QueryGetUserRedemptionRecordResponse): _158.QueryGetUserRedemptionRecordResponseAmino;
            fromAminoMsg(object: _158.QueryGetUserRedemptionRecordResponseAminoMsg): _158.QueryGetUserRedemptionRecordResponse;
            fromProtoMsg(message: _158.QueryGetUserRedemptionRecordResponseProtoMsg): _158.QueryGetUserRedemptionRecordResponse;
            toProto(message: _158.QueryGetUserRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _158.QueryGetUserRedemptionRecordResponse): _158.QueryGetUserRedemptionRecordResponseProtoMsg;
        };
        QueryAllUserRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _158.QueryAllUserRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryAllUserRedemptionRecordRequest;
            fromPartial(object: Partial<_158.QueryAllUserRedemptionRecordRequest>): _158.QueryAllUserRedemptionRecordRequest;
            fromAmino(object: _158.QueryAllUserRedemptionRecordRequestAmino): _158.QueryAllUserRedemptionRecordRequest;
            toAmino(message: _158.QueryAllUserRedemptionRecordRequest): _158.QueryAllUserRedemptionRecordRequestAmino;
            fromAminoMsg(object: _158.QueryAllUserRedemptionRecordRequestAminoMsg): _158.QueryAllUserRedemptionRecordRequest;
            fromProtoMsg(message: _158.QueryAllUserRedemptionRecordRequestProtoMsg): _158.QueryAllUserRedemptionRecordRequest;
            toProto(message: _158.QueryAllUserRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _158.QueryAllUserRedemptionRecordRequest): _158.QueryAllUserRedemptionRecordRequestProtoMsg;
        };
        QueryAllUserRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _158.QueryAllUserRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryAllUserRedemptionRecordResponse;
            fromPartial(object: Partial<_158.QueryAllUserRedemptionRecordResponse>): _158.QueryAllUserRedemptionRecordResponse;
            fromAmino(object: _158.QueryAllUserRedemptionRecordResponseAmino): _158.QueryAllUserRedemptionRecordResponse;
            toAmino(message: _158.QueryAllUserRedemptionRecordResponse): _158.QueryAllUserRedemptionRecordResponseAmino;
            fromAminoMsg(object: _158.QueryAllUserRedemptionRecordResponseAminoMsg): _158.QueryAllUserRedemptionRecordResponse;
            fromProtoMsg(message: _158.QueryAllUserRedemptionRecordResponseProtoMsg): _158.QueryAllUserRedemptionRecordResponse;
            toProto(message: _158.QueryAllUserRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _158.QueryAllUserRedemptionRecordResponse): _158.QueryAllUserRedemptionRecordResponseProtoMsg;
        };
        QueryAllUserRedemptionRecordForUserRequest: {
            typeUrl: string;
            encode(message: _158.QueryAllUserRedemptionRecordForUserRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryAllUserRedemptionRecordForUserRequest;
            fromPartial(object: Partial<_158.QueryAllUserRedemptionRecordForUserRequest>): _158.QueryAllUserRedemptionRecordForUserRequest;
            fromAmino(object: _158.QueryAllUserRedemptionRecordForUserRequestAmino): _158.QueryAllUserRedemptionRecordForUserRequest;
            toAmino(message: _158.QueryAllUserRedemptionRecordForUserRequest): _158.QueryAllUserRedemptionRecordForUserRequestAmino;
            fromAminoMsg(object: _158.QueryAllUserRedemptionRecordForUserRequestAminoMsg): _158.QueryAllUserRedemptionRecordForUserRequest;
            fromProtoMsg(message: _158.QueryAllUserRedemptionRecordForUserRequestProtoMsg): _158.QueryAllUserRedemptionRecordForUserRequest;
            toProto(message: _158.QueryAllUserRedemptionRecordForUserRequest): Uint8Array;
            toProtoMsg(message: _158.QueryAllUserRedemptionRecordForUserRequest): _158.QueryAllUserRedemptionRecordForUserRequestProtoMsg;
        };
        QueryAllUserRedemptionRecordForUserResponse: {
            typeUrl: string;
            encode(message: _158.QueryAllUserRedemptionRecordForUserResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryAllUserRedemptionRecordForUserResponse;
            fromPartial(object: Partial<_158.QueryAllUserRedemptionRecordForUserResponse>): _158.QueryAllUserRedemptionRecordForUserResponse;
            fromAmino(object: _158.QueryAllUserRedemptionRecordForUserResponseAmino): _158.QueryAllUserRedemptionRecordForUserResponse;
            toAmino(message: _158.QueryAllUserRedemptionRecordForUserResponse): _158.QueryAllUserRedemptionRecordForUserResponseAmino;
            fromAminoMsg(object: _158.QueryAllUserRedemptionRecordForUserResponseAminoMsg): _158.QueryAllUserRedemptionRecordForUserResponse;
            fromProtoMsg(message: _158.QueryAllUserRedemptionRecordForUserResponseProtoMsg): _158.QueryAllUserRedemptionRecordForUserResponse;
            toProto(message: _158.QueryAllUserRedemptionRecordForUserResponse): Uint8Array;
            toProtoMsg(message: _158.QueryAllUserRedemptionRecordForUserResponse): _158.QueryAllUserRedemptionRecordForUserResponseProtoMsg;
        };
        QueryGetEpochUnbondingRecordRequest: {
            typeUrl: string;
            encode(message: _158.QueryGetEpochUnbondingRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryGetEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_158.QueryGetEpochUnbondingRecordRequest>): _158.QueryGetEpochUnbondingRecordRequest;
            fromAmino(object: _158.QueryGetEpochUnbondingRecordRequestAmino): _158.QueryGetEpochUnbondingRecordRequest;
            toAmino(message: _158.QueryGetEpochUnbondingRecordRequest): _158.QueryGetEpochUnbondingRecordRequestAmino;
            fromAminoMsg(object: _158.QueryGetEpochUnbondingRecordRequestAminoMsg): _158.QueryGetEpochUnbondingRecordRequest;
            fromProtoMsg(message: _158.QueryGetEpochUnbondingRecordRequestProtoMsg): _158.QueryGetEpochUnbondingRecordRequest;
            toProto(message: _158.QueryGetEpochUnbondingRecordRequest): Uint8Array;
            toProtoMsg(message: _158.QueryGetEpochUnbondingRecordRequest): _158.QueryGetEpochUnbondingRecordRequestProtoMsg;
        };
        QueryGetEpochUnbondingRecordResponse: {
            typeUrl: string;
            encode(message: _158.QueryGetEpochUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryGetEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_158.QueryGetEpochUnbondingRecordResponse>): _158.QueryGetEpochUnbondingRecordResponse;
            fromAmino(object: _158.QueryGetEpochUnbondingRecordResponseAmino): _158.QueryGetEpochUnbondingRecordResponse;
            toAmino(message: _158.QueryGetEpochUnbondingRecordResponse): _158.QueryGetEpochUnbondingRecordResponseAmino;
            fromAminoMsg(object: _158.QueryGetEpochUnbondingRecordResponseAminoMsg): _158.QueryGetEpochUnbondingRecordResponse;
            fromProtoMsg(message: _158.QueryGetEpochUnbondingRecordResponseProtoMsg): _158.QueryGetEpochUnbondingRecordResponse;
            toProto(message: _158.QueryGetEpochUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _158.QueryGetEpochUnbondingRecordResponse): _158.QueryGetEpochUnbondingRecordResponseProtoMsg;
        };
        QueryAllEpochUnbondingRecordRequest: {
            typeUrl: string;
            encode(message: _158.QueryAllEpochUnbondingRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryAllEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_158.QueryAllEpochUnbondingRecordRequest>): _158.QueryAllEpochUnbondingRecordRequest;
            fromAmino(object: _158.QueryAllEpochUnbondingRecordRequestAmino): _158.QueryAllEpochUnbondingRecordRequest;
            toAmino(message: _158.QueryAllEpochUnbondingRecordRequest): _158.QueryAllEpochUnbondingRecordRequestAmino;
            fromAminoMsg(object: _158.QueryAllEpochUnbondingRecordRequestAminoMsg): _158.QueryAllEpochUnbondingRecordRequest;
            fromProtoMsg(message: _158.QueryAllEpochUnbondingRecordRequestProtoMsg): _158.QueryAllEpochUnbondingRecordRequest;
            toProto(message: _158.QueryAllEpochUnbondingRecordRequest): Uint8Array;
            toProtoMsg(message: _158.QueryAllEpochUnbondingRecordRequest): _158.QueryAllEpochUnbondingRecordRequestProtoMsg;
        };
        QueryAllEpochUnbondingRecordResponse: {
            typeUrl: string;
            encode(message: _158.QueryAllEpochUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryAllEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_158.QueryAllEpochUnbondingRecordResponse>): _158.QueryAllEpochUnbondingRecordResponse;
            fromAmino(object: _158.QueryAllEpochUnbondingRecordResponseAmino): _158.QueryAllEpochUnbondingRecordResponse;
            toAmino(message: _158.QueryAllEpochUnbondingRecordResponse): _158.QueryAllEpochUnbondingRecordResponseAmino;
            fromAminoMsg(object: _158.QueryAllEpochUnbondingRecordResponseAminoMsg): _158.QueryAllEpochUnbondingRecordResponse;
            fromProtoMsg(message: _158.QueryAllEpochUnbondingRecordResponseProtoMsg): _158.QueryAllEpochUnbondingRecordResponse;
            toProto(message: _158.QueryAllEpochUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _158.QueryAllEpochUnbondingRecordResponse): _158.QueryAllEpochUnbondingRecordResponseProtoMsg;
        };
        QueryLSMDepositRequest: {
            typeUrl: string;
            encode(message: _158.QueryLSMDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryLSMDepositRequest;
            fromPartial(object: Partial<_158.QueryLSMDepositRequest>): _158.QueryLSMDepositRequest;
            fromAmino(object: _158.QueryLSMDepositRequestAmino): _158.QueryLSMDepositRequest;
            toAmino(message: _158.QueryLSMDepositRequest): _158.QueryLSMDepositRequestAmino;
            fromAminoMsg(object: _158.QueryLSMDepositRequestAminoMsg): _158.QueryLSMDepositRequest;
            fromProtoMsg(message: _158.QueryLSMDepositRequestProtoMsg): _158.QueryLSMDepositRequest;
            toProto(message: _158.QueryLSMDepositRequest): Uint8Array;
            toProtoMsg(message: _158.QueryLSMDepositRequest): _158.QueryLSMDepositRequestProtoMsg;
        };
        QueryLSMDepositResponse: {
            typeUrl: string;
            encode(message: _158.QueryLSMDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryLSMDepositResponse;
            fromPartial(object: Partial<_158.QueryLSMDepositResponse>): _158.QueryLSMDepositResponse;
            fromAmino(object: _158.QueryLSMDepositResponseAmino): _158.QueryLSMDepositResponse;
            toAmino(message: _158.QueryLSMDepositResponse): _158.QueryLSMDepositResponseAmino;
            fromAminoMsg(object: _158.QueryLSMDepositResponseAminoMsg): _158.QueryLSMDepositResponse;
            fromProtoMsg(message: _158.QueryLSMDepositResponseProtoMsg): _158.QueryLSMDepositResponse;
            toProto(message: _158.QueryLSMDepositResponse): Uint8Array;
            toProtoMsg(message: _158.QueryLSMDepositResponse): _158.QueryLSMDepositResponseProtoMsg;
        };
        QueryLSMDepositsRequest: {
            typeUrl: string;
            encode(message: _158.QueryLSMDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryLSMDepositsRequest;
            fromPartial(object: Partial<_158.QueryLSMDepositsRequest>): _158.QueryLSMDepositsRequest;
            fromAmino(object: _158.QueryLSMDepositsRequestAmino): _158.QueryLSMDepositsRequest;
            toAmino(message: _158.QueryLSMDepositsRequest): _158.QueryLSMDepositsRequestAmino;
            fromAminoMsg(object: _158.QueryLSMDepositsRequestAminoMsg): _158.QueryLSMDepositsRequest;
            fromProtoMsg(message: _158.QueryLSMDepositsRequestProtoMsg): _158.QueryLSMDepositsRequest;
            toProto(message: _158.QueryLSMDepositsRequest): Uint8Array;
            toProtoMsg(message: _158.QueryLSMDepositsRequest): _158.QueryLSMDepositsRequestProtoMsg;
        };
        QueryLSMDepositsResponse: {
            typeUrl: string;
            encode(message: _158.QueryLSMDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryLSMDepositsResponse;
            fromPartial(object: Partial<_158.QueryLSMDepositsResponse>): _158.QueryLSMDepositsResponse;
            fromAmino(object: _158.QueryLSMDepositsResponseAmino): _158.QueryLSMDepositsResponse;
            toAmino(message: _158.QueryLSMDepositsResponse): _158.QueryLSMDepositsResponseAmino;
            fromAminoMsg(object: _158.QueryLSMDepositsResponseAminoMsg): _158.QueryLSMDepositsResponse;
            fromProtoMsg(message: _158.QueryLSMDepositsResponseProtoMsg): _158.QueryLSMDepositsResponse;
            toProto(message: _158.QueryLSMDepositsResponse): Uint8Array;
            toProtoMsg(message: _158.QueryLSMDepositsResponse): _158.QueryLSMDepositsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _157.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.Params;
            fromPartial(_: Partial<_157.Params>): _157.Params;
            fromAmino(_: _157.ParamsAmino): _157.Params;
            toAmino(_: _157.Params): _157.ParamsAmino;
            fromAminoMsg(object: _157.ParamsAminoMsg): _157.Params;
            fromProtoMsg(message: _157.ParamsProtoMsg): _157.Params;
            toProto(message: _157.Params): Uint8Array;
            toProtoMsg(message: _157.Params): _157.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _156.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.GenesisState;
            fromPartial(object: Partial<_156.GenesisState>): _156.GenesisState;
            fromAmino(object: _156.GenesisStateAmino): _156.GenesisState;
            toAmino(message: _156.GenesisState): _156.GenesisStateAmino;
            fromAminoMsg(object: _156.GenesisStateAminoMsg): _156.GenesisState;
            fromProtoMsg(message: _156.GenesisStateProtoMsg): _156.GenesisState;
            toProto(message: _156.GenesisState): Uint8Array;
            toProtoMsg(message: _156.GenesisState): _156.GenesisStateProtoMsg;
        };
        TransferCallback: {
            typeUrl: string;
            encode(message: _155.TransferCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.TransferCallback;
            fromPartial(object: Partial<_155.TransferCallback>): _155.TransferCallback;
            fromAmino(object: _155.TransferCallbackAmino): _155.TransferCallback;
            toAmino(message: _155.TransferCallback): _155.TransferCallbackAmino;
            fromAminoMsg(object: _155.TransferCallbackAminoMsg): _155.TransferCallback;
            fromProtoMsg(message: _155.TransferCallbackProtoMsg): _155.TransferCallback;
            toProto(message: _155.TransferCallback): Uint8Array;
            toProtoMsg(message: _155.TransferCallback): _155.TransferCallbackProtoMsg;
        };
        TransferLSMTokenCallback: {
            typeUrl: string;
            encode(message: _155.TransferLSMTokenCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.TransferLSMTokenCallback;
            fromPartial(object: Partial<_155.TransferLSMTokenCallback>): _155.TransferLSMTokenCallback;
            fromAmino(object: _155.TransferLSMTokenCallbackAmino): _155.TransferLSMTokenCallback;
            toAmino(message: _155.TransferLSMTokenCallback): _155.TransferLSMTokenCallbackAmino;
            fromAminoMsg(object: _155.TransferLSMTokenCallbackAminoMsg): _155.TransferLSMTokenCallback;
            fromProtoMsg(message: _155.TransferLSMTokenCallbackProtoMsg): _155.TransferLSMTokenCallback;
            toProto(message: _155.TransferLSMTokenCallback): Uint8Array;
            toProtoMsg(message: _155.TransferLSMTokenCallback): _155.TransferLSMTokenCallbackProtoMsg;
        };
    };
    const stakedym: {
        MsgClientImpl: typeof _293.MsgClientImpl;
        QueryClientImpl: typeof _286.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            hostZone(request?: _161.QueryHostZoneRequest): Promise<_161.QueryHostZoneResponse>;
            delegationRecords(request: _161.QueryDelegationRecordsRequest): Promise<_161.QueryDelegationRecordsResponse>;
            unbondingRecords(request: _161.QueryUnbondingRecordsRequest): Promise<_161.QueryUnbondingRecordsResponse>;
            redemptionRecord(request: _161.QueryRedemptionRecordRequest): Promise<_161.QueryRedemptionRecordResponse>;
            redemptionRecords(request: _161.QueryRedemptionRecordsRequest): Promise<_161.QueryRedemptionRecordsResponse>;
            slashRecords(request?: _161.QuerySlashRecordsRequest): Promise<_161.QuerySlashRecordsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _163.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _163.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmDelegation(value: _163.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUndelegation(value: _163.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUnbondedTokenSweep(value: _163.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                adjustDelegatedBalance(value: _163.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _163.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _163.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                refreshRedemptionRate(value: _163.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteDelegationRecord(value: _163.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteUnbondingRecord(value: _163.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteRedemptionRecord(value: _163.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOperatorAddress(value: _163.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _163.MsgLiquidStake): {
                    typeUrl: string;
                    value: _163.MsgLiquidStake;
                };
                redeemStake(value: _163.MsgRedeemStake): {
                    typeUrl: string;
                    value: _163.MsgRedeemStake;
                };
                confirmDelegation(value: _163.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _163.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _163.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _163.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _163.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _163.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _163.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _163.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _163.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _163.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _163.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _163.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _163.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _163.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _163.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _163.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _163.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _163.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _163.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _163.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _163.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _163.MsgSetOperatorAddress;
                };
            };
            fromPartial: {
                liquidStake(value: _163.MsgLiquidStake): {
                    typeUrl: string;
                    value: _163.MsgLiquidStake;
                };
                redeemStake(value: _163.MsgRedeemStake): {
                    typeUrl: string;
                    value: _163.MsgRedeemStake;
                };
                confirmDelegation(value: _163.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _163.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _163.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _163.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _163.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _163.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _163.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _163.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _163.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _163.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _163.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _163.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _163.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _163.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _163.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _163.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _163.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _163.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _163.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _163.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _163.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _163.MsgSetOperatorAddress;
                };
            };
        };
        AminoConverter: {
            "/stride.stakedym.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _163.MsgLiquidStake) => _163.MsgLiquidStakeAmino;
                fromAmino: (object: _163.MsgLiquidStakeAmino) => _163.MsgLiquidStake;
            };
            "/stride.stakedym.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _163.MsgRedeemStake) => _163.MsgRedeemStakeAmino;
                fromAmino: (object: _163.MsgRedeemStakeAmino) => _163.MsgRedeemStake;
            };
            "/stride.stakedym.MsgConfirmDelegation": {
                aminoType: string;
                toAmino: (message: _163.MsgConfirmDelegation) => _163.MsgConfirmDelegationAmino;
                fromAmino: (object: _163.MsgConfirmDelegationAmino) => _163.MsgConfirmDelegation;
            };
            "/stride.stakedym.MsgConfirmUndelegation": {
                aminoType: string;
                toAmino: (message: _163.MsgConfirmUndelegation) => _163.MsgConfirmUndelegationAmino;
                fromAmino: (object: _163.MsgConfirmUndelegationAmino) => _163.MsgConfirmUndelegation;
            };
            "/stride.stakedym.MsgConfirmUnbondedTokenSweep": {
                aminoType: string;
                toAmino: (message: _163.MsgConfirmUnbondedTokenSweep) => _163.MsgConfirmUnbondedTokenSweepAmino;
                fromAmino: (object: _163.MsgConfirmUnbondedTokenSweepAmino) => _163.MsgConfirmUnbondedTokenSweep;
            };
            "/stride.stakedym.MsgAdjustDelegatedBalance": {
                aminoType: string;
                toAmino: (message: _163.MsgAdjustDelegatedBalance) => _163.MsgAdjustDelegatedBalanceAmino;
                fromAmino: (object: _163.MsgAdjustDelegatedBalanceAmino) => _163.MsgAdjustDelegatedBalance;
            };
            "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _163.MsgUpdateInnerRedemptionRateBounds) => _163.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _163.MsgUpdateInnerRedemptionRateBoundsAmino) => _163.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.stakedym.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _163.MsgResumeHostZone) => _163.MsgResumeHostZoneAmino;
                fromAmino: (object: _163.MsgResumeHostZoneAmino) => _163.MsgResumeHostZone;
            };
            "/stride.stakedym.MsgRefreshRedemptionRate": {
                aminoType: string;
                toAmino: (message: _163.MsgRefreshRedemptionRate) => _163.MsgRefreshRedemptionRateAmino;
                fromAmino: (object: _163.MsgRefreshRedemptionRateAmino) => _163.MsgRefreshRedemptionRate;
            };
            "/stride.stakedym.MsgOverwriteDelegationRecord": {
                aminoType: string;
                toAmino: (message: _163.MsgOverwriteDelegationRecord) => _163.MsgOverwriteDelegationRecordAmino;
                fromAmino: (object: _163.MsgOverwriteDelegationRecordAmino) => _163.MsgOverwriteDelegationRecord;
            };
            "/stride.stakedym.MsgOverwriteUnbondingRecord": {
                aminoType: string;
                toAmino: (message: _163.MsgOverwriteUnbondingRecord) => _163.MsgOverwriteUnbondingRecordAmino;
                fromAmino: (object: _163.MsgOverwriteUnbondingRecordAmino) => _163.MsgOverwriteUnbondingRecord;
            };
            "/stride.stakedym.MsgOverwriteRedemptionRecord": {
                aminoType: string;
                toAmino: (message: _163.MsgOverwriteRedemptionRecord) => _163.MsgOverwriteRedemptionRecordAmino;
                fromAmino: (object: _163.MsgOverwriteRedemptionRecordAmino) => _163.MsgOverwriteRedemptionRecord;
            };
            "/stride.stakedym.MsgSetOperatorAddress": {
                aminoType: string;
                toAmino: (message: _163.MsgSetOperatorAddress) => _163.MsgSetOperatorAddressAmino;
                fromAmino: (object: _163.MsgSetOperatorAddressAmino) => _163.MsgSetOperatorAddress;
            };
        };
        overwritableRecordTypeFromJSON(object: any): _163.OverwritableRecordType;
        overwritableRecordTypeToJSON(object: _163.OverwritableRecordType): string;
        OverwritableRecordType: typeof _163.OverwritableRecordType;
        OverwritableRecordTypeSDKType: typeof _163.OverwritableRecordType;
        OverwritableRecordTypeAmino: typeof _163.OverwritableRecordType;
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _163.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgLiquidStake;
            fromPartial(object: Partial<_163.MsgLiquidStake>): _163.MsgLiquidStake;
            fromAmino(object: _163.MsgLiquidStakeAmino): _163.MsgLiquidStake;
            toAmino(message: _163.MsgLiquidStake): _163.MsgLiquidStakeAmino;
            fromAminoMsg(object: _163.MsgLiquidStakeAminoMsg): _163.MsgLiquidStake;
            toAminoMsg(message: _163.MsgLiquidStake): _163.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _163.MsgLiquidStakeProtoMsg): _163.MsgLiquidStake;
            toProto(message: _163.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _163.MsgLiquidStake): _163.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _163.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_163.MsgLiquidStakeResponse>): _163.MsgLiquidStakeResponse;
            fromAmino(object: _163.MsgLiquidStakeResponseAmino): _163.MsgLiquidStakeResponse;
            toAmino(message: _163.MsgLiquidStakeResponse): _163.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _163.MsgLiquidStakeResponseAminoMsg): _163.MsgLiquidStakeResponse;
            fromProtoMsg(message: _163.MsgLiquidStakeResponseProtoMsg): _163.MsgLiquidStakeResponse;
            toProto(message: _163.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _163.MsgLiquidStakeResponse): _163.MsgLiquidStakeResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _163.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgRedeemStake;
            fromPartial(object: Partial<_163.MsgRedeemStake>): _163.MsgRedeemStake;
            fromAmino(object: _163.MsgRedeemStakeAmino): _163.MsgRedeemStake;
            toAmino(message: _163.MsgRedeemStake): _163.MsgRedeemStakeAmino;
            fromAminoMsg(object: _163.MsgRedeemStakeAminoMsg): _163.MsgRedeemStake;
            toAminoMsg(message: _163.MsgRedeemStake): _163.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _163.MsgRedeemStakeProtoMsg): _163.MsgRedeemStake;
            toProto(message: _163.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _163.MsgRedeemStake): _163.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(message: _163.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgRedeemStakeResponse;
            fromPartial(object: Partial<_163.MsgRedeemStakeResponse>): _163.MsgRedeemStakeResponse;
            fromAmino(object: _163.MsgRedeemStakeResponseAmino): _163.MsgRedeemStakeResponse;
            toAmino(message: _163.MsgRedeemStakeResponse): _163.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _163.MsgRedeemStakeResponseAminoMsg): _163.MsgRedeemStakeResponse;
            fromProtoMsg(message: _163.MsgRedeemStakeResponseProtoMsg): _163.MsgRedeemStakeResponse;
            toProto(message: _163.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _163.MsgRedeemStakeResponse): _163.MsgRedeemStakeResponseProtoMsg;
        };
        MsgConfirmDelegation: {
            typeUrl: string;
            encode(message: _163.MsgConfirmDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgConfirmDelegation;
            fromPartial(object: Partial<_163.MsgConfirmDelegation>): _163.MsgConfirmDelegation;
            fromAmino(object: _163.MsgConfirmDelegationAmino): _163.MsgConfirmDelegation;
            toAmino(message: _163.MsgConfirmDelegation): _163.MsgConfirmDelegationAmino;
            fromAminoMsg(object: _163.MsgConfirmDelegationAminoMsg): _163.MsgConfirmDelegation;
            toAminoMsg(message: _163.MsgConfirmDelegation): _163.MsgConfirmDelegationAminoMsg;
            fromProtoMsg(message: _163.MsgConfirmDelegationProtoMsg): _163.MsgConfirmDelegation;
            toProto(message: _163.MsgConfirmDelegation): Uint8Array;
            toProtoMsg(message: _163.MsgConfirmDelegation): _163.MsgConfirmDelegationProtoMsg;
        };
        MsgConfirmDelegationResponse: {
            typeUrl: string;
            encode(_: _163.MsgConfirmDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgConfirmDelegationResponse;
            fromPartial(_: Partial<_163.MsgConfirmDelegationResponse>): _163.MsgConfirmDelegationResponse;
            fromAmino(_: _163.MsgConfirmDelegationResponseAmino): _163.MsgConfirmDelegationResponse;
            toAmino(_: _163.MsgConfirmDelegationResponse): _163.MsgConfirmDelegationResponseAmino;
            fromAminoMsg(object: _163.MsgConfirmDelegationResponseAminoMsg): _163.MsgConfirmDelegationResponse;
            fromProtoMsg(message: _163.MsgConfirmDelegationResponseProtoMsg): _163.MsgConfirmDelegationResponse;
            toProto(message: _163.MsgConfirmDelegationResponse): Uint8Array;
            toProtoMsg(message: _163.MsgConfirmDelegationResponse): _163.MsgConfirmDelegationResponseProtoMsg;
        };
        MsgConfirmUndelegation: {
            typeUrl: string;
            encode(message: _163.MsgConfirmUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgConfirmUndelegation;
            fromPartial(object: Partial<_163.MsgConfirmUndelegation>): _163.MsgConfirmUndelegation;
            fromAmino(object: _163.MsgConfirmUndelegationAmino): _163.MsgConfirmUndelegation;
            toAmino(message: _163.MsgConfirmUndelegation): _163.MsgConfirmUndelegationAmino;
            fromAminoMsg(object: _163.MsgConfirmUndelegationAminoMsg): _163.MsgConfirmUndelegation;
            toAminoMsg(message: _163.MsgConfirmUndelegation): _163.MsgConfirmUndelegationAminoMsg;
            fromProtoMsg(message: _163.MsgConfirmUndelegationProtoMsg): _163.MsgConfirmUndelegation;
            toProto(message: _163.MsgConfirmUndelegation): Uint8Array;
            toProtoMsg(message: _163.MsgConfirmUndelegation): _163.MsgConfirmUndelegationProtoMsg;
        };
        MsgConfirmUndelegationResponse: {
            typeUrl: string;
            encode(_: _163.MsgConfirmUndelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgConfirmUndelegationResponse;
            fromPartial(_: Partial<_163.MsgConfirmUndelegationResponse>): _163.MsgConfirmUndelegationResponse;
            fromAmino(_: _163.MsgConfirmUndelegationResponseAmino): _163.MsgConfirmUndelegationResponse;
            toAmino(_: _163.MsgConfirmUndelegationResponse): _163.MsgConfirmUndelegationResponseAmino;
            fromAminoMsg(object: _163.MsgConfirmUndelegationResponseAminoMsg): _163.MsgConfirmUndelegationResponse;
            fromProtoMsg(message: _163.MsgConfirmUndelegationResponseProtoMsg): _163.MsgConfirmUndelegationResponse;
            toProto(message: _163.MsgConfirmUndelegationResponse): Uint8Array;
            toProtoMsg(message: _163.MsgConfirmUndelegationResponse): _163.MsgConfirmUndelegationResponseProtoMsg;
        };
        MsgConfirmUnbondedTokenSweep: {
            typeUrl: string;
            encode(message: _163.MsgConfirmUnbondedTokenSweep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgConfirmUnbondedTokenSweep;
            fromPartial(object: Partial<_163.MsgConfirmUnbondedTokenSweep>): _163.MsgConfirmUnbondedTokenSweep;
            fromAmino(object: _163.MsgConfirmUnbondedTokenSweepAmino): _163.MsgConfirmUnbondedTokenSweep;
            toAmino(message: _163.MsgConfirmUnbondedTokenSweep): _163.MsgConfirmUnbondedTokenSweepAmino;
            fromAminoMsg(object: _163.MsgConfirmUnbondedTokenSweepAminoMsg): _163.MsgConfirmUnbondedTokenSweep;
            toAminoMsg(message: _163.MsgConfirmUnbondedTokenSweep): _163.MsgConfirmUnbondedTokenSweepAminoMsg;
            fromProtoMsg(message: _163.MsgConfirmUnbondedTokenSweepProtoMsg): _163.MsgConfirmUnbondedTokenSweep;
            toProto(message: _163.MsgConfirmUnbondedTokenSweep): Uint8Array;
            toProtoMsg(message: _163.MsgConfirmUnbondedTokenSweep): _163.MsgConfirmUnbondedTokenSweepProtoMsg;
        };
        MsgConfirmUnbondedTokenSweepResponse: {
            typeUrl: string;
            encode(_: _163.MsgConfirmUnbondedTokenSweepResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgConfirmUnbondedTokenSweepResponse;
            fromPartial(_: Partial<_163.MsgConfirmUnbondedTokenSweepResponse>): _163.MsgConfirmUnbondedTokenSweepResponse;
            fromAmino(_: _163.MsgConfirmUnbondedTokenSweepResponseAmino): _163.MsgConfirmUnbondedTokenSweepResponse;
            toAmino(_: _163.MsgConfirmUnbondedTokenSweepResponse): _163.MsgConfirmUnbondedTokenSweepResponseAmino;
            fromAminoMsg(object: _163.MsgConfirmUnbondedTokenSweepResponseAminoMsg): _163.MsgConfirmUnbondedTokenSweepResponse;
            fromProtoMsg(message: _163.MsgConfirmUnbondedTokenSweepResponseProtoMsg): _163.MsgConfirmUnbondedTokenSweepResponse;
            toProto(message: _163.MsgConfirmUnbondedTokenSweepResponse): Uint8Array;
            toProtoMsg(message: _163.MsgConfirmUnbondedTokenSweepResponse): _163.MsgConfirmUnbondedTokenSweepResponseProtoMsg;
        };
        MsgAdjustDelegatedBalance: {
            typeUrl: string;
            encode(message: _163.MsgAdjustDelegatedBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgAdjustDelegatedBalance;
            fromPartial(object: Partial<_163.MsgAdjustDelegatedBalance>): _163.MsgAdjustDelegatedBalance;
            fromAmino(object: _163.MsgAdjustDelegatedBalanceAmino): _163.MsgAdjustDelegatedBalance;
            toAmino(message: _163.MsgAdjustDelegatedBalance): _163.MsgAdjustDelegatedBalanceAmino;
            fromAminoMsg(object: _163.MsgAdjustDelegatedBalanceAminoMsg): _163.MsgAdjustDelegatedBalance;
            toAminoMsg(message: _163.MsgAdjustDelegatedBalance): _163.MsgAdjustDelegatedBalanceAminoMsg;
            fromProtoMsg(message: _163.MsgAdjustDelegatedBalanceProtoMsg): _163.MsgAdjustDelegatedBalance;
            toProto(message: _163.MsgAdjustDelegatedBalance): Uint8Array;
            toProtoMsg(message: _163.MsgAdjustDelegatedBalance): _163.MsgAdjustDelegatedBalanceProtoMsg;
        };
        MsgAdjustDelegatedBalanceResponse: {
            typeUrl: string;
            encode(_: _163.MsgAdjustDelegatedBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgAdjustDelegatedBalanceResponse;
            fromPartial(_: Partial<_163.MsgAdjustDelegatedBalanceResponse>): _163.MsgAdjustDelegatedBalanceResponse;
            fromAmino(_: _163.MsgAdjustDelegatedBalanceResponseAmino): _163.MsgAdjustDelegatedBalanceResponse;
            toAmino(_: _163.MsgAdjustDelegatedBalanceResponse): _163.MsgAdjustDelegatedBalanceResponseAmino;
            fromAminoMsg(object: _163.MsgAdjustDelegatedBalanceResponseAminoMsg): _163.MsgAdjustDelegatedBalanceResponse;
            fromProtoMsg(message: _163.MsgAdjustDelegatedBalanceResponseProtoMsg): _163.MsgAdjustDelegatedBalanceResponse;
            toProto(message: _163.MsgAdjustDelegatedBalanceResponse): Uint8Array;
            toProtoMsg(message: _163.MsgAdjustDelegatedBalanceResponse): _163.MsgAdjustDelegatedBalanceResponseProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _163.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_163.MsgUpdateInnerRedemptionRateBounds>): _163.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _163.MsgUpdateInnerRedemptionRateBoundsAmino): _163.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _163.MsgUpdateInnerRedemptionRateBounds): _163.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _163.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _163.MsgUpdateInnerRedemptionRateBounds;
            toAminoMsg(message: _163.MsgUpdateInnerRedemptionRateBounds): _163.MsgUpdateInnerRedemptionRateBoundsAminoMsg;
            fromProtoMsg(message: _163.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _163.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _163.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _163.MsgUpdateInnerRedemptionRateBounds): _163.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _163.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_163.MsgUpdateInnerRedemptionRateBoundsResponse>): _163.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _163.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _163.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _163.MsgUpdateInnerRedemptionRateBoundsResponse): _163.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _163.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _163.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _163.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _163.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _163.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _163.MsgUpdateInnerRedemptionRateBoundsResponse): _163.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _163.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgResumeHostZone;
            fromPartial(object: Partial<_163.MsgResumeHostZone>): _163.MsgResumeHostZone;
            fromAmino(object: _163.MsgResumeHostZoneAmino): _163.MsgResumeHostZone;
            toAmino(message: _163.MsgResumeHostZone): _163.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _163.MsgResumeHostZoneAminoMsg): _163.MsgResumeHostZone;
            toAminoMsg(message: _163.MsgResumeHostZone): _163.MsgResumeHostZoneAminoMsg;
            fromProtoMsg(message: _163.MsgResumeHostZoneProtoMsg): _163.MsgResumeHostZone;
            toProto(message: _163.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _163.MsgResumeHostZone): _163.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _163.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_163.MsgResumeHostZoneResponse>): _163.MsgResumeHostZoneResponse;
            fromAmino(_: _163.MsgResumeHostZoneResponseAmino): _163.MsgResumeHostZoneResponse;
            toAmino(_: _163.MsgResumeHostZoneResponse): _163.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _163.MsgResumeHostZoneResponseAminoMsg): _163.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _163.MsgResumeHostZoneResponseProtoMsg): _163.MsgResumeHostZoneResponse;
            toProto(message: _163.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _163.MsgResumeHostZoneResponse): _163.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgRefreshRedemptionRate: {
            typeUrl: string;
            encode(message: _163.MsgRefreshRedemptionRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgRefreshRedemptionRate;
            fromPartial(object: Partial<_163.MsgRefreshRedemptionRate>): _163.MsgRefreshRedemptionRate;
            fromAmino(object: _163.MsgRefreshRedemptionRateAmino): _163.MsgRefreshRedemptionRate;
            toAmino(message: _163.MsgRefreshRedemptionRate): _163.MsgRefreshRedemptionRateAmino;
            fromAminoMsg(object: _163.MsgRefreshRedemptionRateAminoMsg): _163.MsgRefreshRedemptionRate;
            toAminoMsg(message: _163.MsgRefreshRedemptionRate): _163.MsgRefreshRedemptionRateAminoMsg;
            fromProtoMsg(message: _163.MsgRefreshRedemptionRateProtoMsg): _163.MsgRefreshRedemptionRate;
            toProto(message: _163.MsgRefreshRedemptionRate): Uint8Array;
            toProtoMsg(message: _163.MsgRefreshRedemptionRate): _163.MsgRefreshRedemptionRateProtoMsg;
        };
        MsgRefreshRedemptionRateResponse: {
            typeUrl: string;
            encode(_: _163.MsgRefreshRedemptionRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgRefreshRedemptionRateResponse;
            fromPartial(_: Partial<_163.MsgRefreshRedemptionRateResponse>): _163.MsgRefreshRedemptionRateResponse;
            fromAmino(_: _163.MsgRefreshRedemptionRateResponseAmino): _163.MsgRefreshRedemptionRateResponse;
            toAmino(_: _163.MsgRefreshRedemptionRateResponse): _163.MsgRefreshRedemptionRateResponseAmino;
            fromAminoMsg(object: _163.MsgRefreshRedemptionRateResponseAminoMsg): _163.MsgRefreshRedemptionRateResponse;
            fromProtoMsg(message: _163.MsgRefreshRedemptionRateResponseProtoMsg): _163.MsgRefreshRedemptionRateResponse;
            toProto(message: _163.MsgRefreshRedemptionRateResponse): Uint8Array;
            toProtoMsg(message: _163.MsgRefreshRedemptionRateResponse): _163.MsgRefreshRedemptionRateResponseProtoMsg;
        };
        MsgOverwriteDelegationRecord: {
            typeUrl: string;
            encode(message: _163.MsgOverwriteDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgOverwriteDelegationRecord;
            fromPartial(object: Partial<_163.MsgOverwriteDelegationRecord>): _163.MsgOverwriteDelegationRecord;
            fromAmino(object: _163.MsgOverwriteDelegationRecordAmino): _163.MsgOverwriteDelegationRecord;
            toAmino(message: _163.MsgOverwriteDelegationRecord): _163.MsgOverwriteDelegationRecordAmino;
            fromAminoMsg(object: _163.MsgOverwriteDelegationRecordAminoMsg): _163.MsgOverwriteDelegationRecord;
            toAminoMsg(message: _163.MsgOverwriteDelegationRecord): _163.MsgOverwriteDelegationRecordAminoMsg;
            fromProtoMsg(message: _163.MsgOverwriteDelegationRecordProtoMsg): _163.MsgOverwriteDelegationRecord;
            toProto(message: _163.MsgOverwriteDelegationRecord): Uint8Array;
            toProtoMsg(message: _163.MsgOverwriteDelegationRecord): _163.MsgOverwriteDelegationRecordProtoMsg;
        };
        MsgOverwriteDelegationRecordResponse: {
            typeUrl: string;
            encode(_: _163.MsgOverwriteDelegationRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgOverwriteDelegationRecordResponse;
            fromPartial(_: Partial<_163.MsgOverwriteDelegationRecordResponse>): _163.MsgOverwriteDelegationRecordResponse;
            fromAmino(_: _163.MsgOverwriteDelegationRecordResponseAmino): _163.MsgOverwriteDelegationRecordResponse;
            toAmino(_: _163.MsgOverwriteDelegationRecordResponse): _163.MsgOverwriteDelegationRecordResponseAmino;
            fromAminoMsg(object: _163.MsgOverwriteDelegationRecordResponseAminoMsg): _163.MsgOverwriteDelegationRecordResponse;
            fromProtoMsg(message: _163.MsgOverwriteDelegationRecordResponseProtoMsg): _163.MsgOverwriteDelegationRecordResponse;
            toProto(message: _163.MsgOverwriteDelegationRecordResponse): Uint8Array;
            toProtoMsg(message: _163.MsgOverwriteDelegationRecordResponse): _163.MsgOverwriteDelegationRecordResponseProtoMsg;
        };
        MsgOverwriteUnbondingRecord: {
            typeUrl: string;
            encode(message: _163.MsgOverwriteUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgOverwriteUnbondingRecord;
            fromPartial(object: Partial<_163.MsgOverwriteUnbondingRecord>): _163.MsgOverwriteUnbondingRecord;
            fromAmino(object: _163.MsgOverwriteUnbondingRecordAmino): _163.MsgOverwriteUnbondingRecord;
            toAmino(message: _163.MsgOverwriteUnbondingRecord): _163.MsgOverwriteUnbondingRecordAmino;
            fromAminoMsg(object: _163.MsgOverwriteUnbondingRecordAminoMsg): _163.MsgOverwriteUnbondingRecord;
            toAminoMsg(message: _163.MsgOverwriteUnbondingRecord): _163.MsgOverwriteUnbondingRecordAminoMsg;
            fromProtoMsg(message: _163.MsgOverwriteUnbondingRecordProtoMsg): _163.MsgOverwriteUnbondingRecord;
            toProto(message: _163.MsgOverwriteUnbondingRecord): Uint8Array;
            toProtoMsg(message: _163.MsgOverwriteUnbondingRecord): _163.MsgOverwriteUnbondingRecordProtoMsg;
        };
        MsgOverwriteUnbondingRecordResponse: {
            typeUrl: string;
            encode(_: _163.MsgOverwriteUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgOverwriteUnbondingRecordResponse;
            fromPartial(_: Partial<_163.MsgOverwriteUnbondingRecordResponse>): _163.MsgOverwriteUnbondingRecordResponse;
            fromAmino(_: _163.MsgOverwriteUnbondingRecordResponseAmino): _163.MsgOverwriteUnbondingRecordResponse;
            toAmino(_: _163.MsgOverwriteUnbondingRecordResponse): _163.MsgOverwriteUnbondingRecordResponseAmino;
            fromAminoMsg(object: _163.MsgOverwriteUnbondingRecordResponseAminoMsg): _163.MsgOverwriteUnbondingRecordResponse;
            fromProtoMsg(message: _163.MsgOverwriteUnbondingRecordResponseProtoMsg): _163.MsgOverwriteUnbondingRecordResponse;
            toProto(message: _163.MsgOverwriteUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _163.MsgOverwriteUnbondingRecordResponse): _163.MsgOverwriteUnbondingRecordResponseProtoMsg;
        };
        MsgOverwriteRedemptionRecord: {
            typeUrl: string;
            encode(message: _163.MsgOverwriteRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgOverwriteRedemptionRecord;
            fromPartial(object: Partial<_163.MsgOverwriteRedemptionRecord>): _163.MsgOverwriteRedemptionRecord;
            fromAmino(object: _163.MsgOverwriteRedemptionRecordAmino): _163.MsgOverwriteRedemptionRecord;
            toAmino(message: _163.MsgOverwriteRedemptionRecord): _163.MsgOverwriteRedemptionRecordAmino;
            fromAminoMsg(object: _163.MsgOverwriteRedemptionRecordAminoMsg): _163.MsgOverwriteRedemptionRecord;
            toAminoMsg(message: _163.MsgOverwriteRedemptionRecord): _163.MsgOverwriteRedemptionRecordAminoMsg;
            fromProtoMsg(message: _163.MsgOverwriteRedemptionRecordProtoMsg): _163.MsgOverwriteRedemptionRecord;
            toProto(message: _163.MsgOverwriteRedemptionRecord): Uint8Array;
            toProtoMsg(message: _163.MsgOverwriteRedemptionRecord): _163.MsgOverwriteRedemptionRecordProtoMsg;
        };
        MsgOverwriteRedemptionRecordResponse: {
            typeUrl: string;
            encode(_: _163.MsgOverwriteRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgOverwriteRedemptionRecordResponse;
            fromPartial(_: Partial<_163.MsgOverwriteRedemptionRecordResponse>): _163.MsgOverwriteRedemptionRecordResponse;
            fromAmino(_: _163.MsgOverwriteRedemptionRecordResponseAmino): _163.MsgOverwriteRedemptionRecordResponse;
            toAmino(_: _163.MsgOverwriteRedemptionRecordResponse): _163.MsgOverwriteRedemptionRecordResponseAmino;
            fromAminoMsg(object: _163.MsgOverwriteRedemptionRecordResponseAminoMsg): _163.MsgOverwriteRedemptionRecordResponse;
            fromProtoMsg(message: _163.MsgOverwriteRedemptionRecordResponseProtoMsg): _163.MsgOverwriteRedemptionRecordResponse;
            toProto(message: _163.MsgOverwriteRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _163.MsgOverwriteRedemptionRecordResponse): _163.MsgOverwriteRedemptionRecordResponseProtoMsg;
        };
        MsgSetOperatorAddress: {
            typeUrl: string;
            encode(message: _163.MsgSetOperatorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgSetOperatorAddress;
            fromPartial(object: Partial<_163.MsgSetOperatorAddress>): _163.MsgSetOperatorAddress;
            fromAmino(object: _163.MsgSetOperatorAddressAmino): _163.MsgSetOperatorAddress;
            toAmino(message: _163.MsgSetOperatorAddress): _163.MsgSetOperatorAddressAmino;
            fromAminoMsg(object: _163.MsgSetOperatorAddressAminoMsg): _163.MsgSetOperatorAddress;
            toAminoMsg(message: _163.MsgSetOperatorAddress): _163.MsgSetOperatorAddressAminoMsg;
            fromProtoMsg(message: _163.MsgSetOperatorAddressProtoMsg): _163.MsgSetOperatorAddress;
            toProto(message: _163.MsgSetOperatorAddress): Uint8Array;
            toProtoMsg(message: _163.MsgSetOperatorAddress): _163.MsgSetOperatorAddressProtoMsg;
        };
        MsgSetOperatorAddressResponse: {
            typeUrl: string;
            encode(_: _163.MsgSetOperatorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgSetOperatorAddressResponse;
            fromPartial(_: Partial<_163.MsgSetOperatorAddressResponse>): _163.MsgSetOperatorAddressResponse;
            fromAmino(_: _163.MsgSetOperatorAddressResponseAmino): _163.MsgSetOperatorAddressResponse;
            toAmino(_: _163.MsgSetOperatorAddressResponse): _163.MsgSetOperatorAddressResponseAmino;
            fromAminoMsg(object: _163.MsgSetOperatorAddressResponseAminoMsg): _163.MsgSetOperatorAddressResponse;
            fromProtoMsg(message: _163.MsgSetOperatorAddressResponseProtoMsg): _163.MsgSetOperatorAddressResponse;
            toProto(message: _163.MsgSetOperatorAddressResponse): Uint8Array;
            toProtoMsg(message: _163.MsgSetOperatorAddressResponse): _163.MsgSetOperatorAddressResponseProtoMsg;
        };
        delegationRecordStatusFromJSON(object: any): _162.DelegationRecordStatus;
        delegationRecordStatusToJSON(object: _162.DelegationRecordStatus): string;
        unbondingRecordStatusFromJSON(object: any): _162.UnbondingRecordStatus;
        unbondingRecordStatusToJSON(object: _162.UnbondingRecordStatus): string;
        DelegationRecordStatus: typeof _162.DelegationRecordStatus;
        DelegationRecordStatusSDKType: typeof _162.DelegationRecordStatus;
        DelegationRecordStatusAmino: typeof _162.DelegationRecordStatus;
        UnbondingRecordStatus: typeof _162.UnbondingRecordStatus;
        UnbondingRecordStatusSDKType: typeof _162.UnbondingRecordStatus;
        UnbondingRecordStatusAmino: typeof _162.UnbondingRecordStatus;
        HostZone: {
            typeUrl: string;
            encode(message: _162.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.HostZone;
            fromPartial(object: Partial<_162.HostZone>): _162.HostZone;
            fromAmino(object: _162.HostZoneAmino): _162.HostZone;
            toAmino(message: _162.HostZone): _162.HostZoneAmino;
            fromAminoMsg(object: _162.HostZoneAminoMsg): _162.HostZone;
            fromProtoMsg(message: _162.HostZoneProtoMsg): _162.HostZone;
            toProto(message: _162.HostZone): Uint8Array;
            toProtoMsg(message: _162.HostZone): _162.HostZoneProtoMsg;
        };
        DelegationRecord: {
            typeUrl: string;
            encode(message: _162.DelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.DelegationRecord;
            fromPartial(object: Partial<_162.DelegationRecord>): _162.DelegationRecord;
            fromAmino(object: _162.DelegationRecordAmino): _162.DelegationRecord;
            toAmino(message: _162.DelegationRecord): _162.DelegationRecordAmino;
            fromAminoMsg(object: _162.DelegationRecordAminoMsg): _162.DelegationRecord;
            fromProtoMsg(message: _162.DelegationRecordProtoMsg): _162.DelegationRecord;
            toProto(message: _162.DelegationRecord): Uint8Array;
            toProtoMsg(message: _162.DelegationRecord): _162.DelegationRecordProtoMsg;
        };
        UnbondingRecord: {
            typeUrl: string;
            encode(message: _162.UnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.UnbondingRecord;
            fromPartial(object: Partial<_162.UnbondingRecord>): _162.UnbondingRecord;
            fromAmino(object: _162.UnbondingRecordAmino): _162.UnbondingRecord;
            toAmino(message: _162.UnbondingRecord): _162.UnbondingRecordAmino;
            fromAminoMsg(object: _162.UnbondingRecordAminoMsg): _162.UnbondingRecord;
            fromProtoMsg(message: _162.UnbondingRecordProtoMsg): _162.UnbondingRecord;
            toProto(message: _162.UnbondingRecord): Uint8Array;
            toProtoMsg(message: _162.UnbondingRecord): _162.UnbondingRecordProtoMsg;
        };
        RedemptionRecord: {
            typeUrl: string;
            encode(message: _162.RedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.RedemptionRecord;
            fromPartial(object: Partial<_162.RedemptionRecord>): _162.RedemptionRecord;
            fromAmino(object: _162.RedemptionRecordAmino): _162.RedemptionRecord;
            toAmino(message: _162.RedemptionRecord): _162.RedemptionRecordAmino;
            fromAminoMsg(object: _162.RedemptionRecordAminoMsg): _162.RedemptionRecord;
            fromProtoMsg(message: _162.RedemptionRecordProtoMsg): _162.RedemptionRecord;
            toProto(message: _162.RedemptionRecord): Uint8Array;
            toProtoMsg(message: _162.RedemptionRecord): _162.RedemptionRecordProtoMsg;
        };
        SlashRecord: {
            typeUrl: string;
            encode(message: _162.SlashRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.SlashRecord;
            fromPartial(object: Partial<_162.SlashRecord>): _162.SlashRecord;
            fromAmino(object: _162.SlashRecordAmino): _162.SlashRecord;
            toAmino(message: _162.SlashRecord): _162.SlashRecordAmino;
            fromAminoMsg(object: _162.SlashRecordAminoMsg): _162.SlashRecord;
            fromProtoMsg(message: _162.SlashRecordProtoMsg): _162.SlashRecord;
            toProto(message: _162.SlashRecord): Uint8Array;
            toProtoMsg(message: _162.SlashRecord): _162.SlashRecordProtoMsg;
        };
        QueryHostZoneRequest: {
            typeUrl: string;
            encode(_: _161.QueryHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.QueryHostZoneRequest;
            fromPartial(_: Partial<_161.QueryHostZoneRequest>): _161.QueryHostZoneRequest;
            fromAmino(_: _161.QueryHostZoneRequestAmino): _161.QueryHostZoneRequest;
            toAmino(_: _161.QueryHostZoneRequest): _161.QueryHostZoneRequestAmino;
            fromAminoMsg(object: _161.QueryHostZoneRequestAminoMsg): _161.QueryHostZoneRequest;
            fromProtoMsg(message: _161.QueryHostZoneRequestProtoMsg): _161.QueryHostZoneRequest;
            toProto(message: _161.QueryHostZoneRequest): Uint8Array;
            toProtoMsg(message: _161.QueryHostZoneRequest): _161.QueryHostZoneRequestProtoMsg;
        };
        QueryHostZoneResponse: {
            typeUrl: string;
            encode(message: _161.QueryHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.QueryHostZoneResponse;
            fromPartial(object: Partial<_161.QueryHostZoneResponse>): _161.QueryHostZoneResponse;
            fromAmino(object: _161.QueryHostZoneResponseAmino): _161.QueryHostZoneResponse;
            toAmino(message: _161.QueryHostZoneResponse): _161.QueryHostZoneResponseAmino;
            fromAminoMsg(object: _161.QueryHostZoneResponseAminoMsg): _161.QueryHostZoneResponse;
            fromProtoMsg(message: _161.QueryHostZoneResponseProtoMsg): _161.QueryHostZoneResponse;
            toProto(message: _161.QueryHostZoneResponse): Uint8Array;
            toProtoMsg(message: _161.QueryHostZoneResponse): _161.QueryHostZoneResponseProtoMsg;
        };
        QueryDelegationRecordsRequest: {
            typeUrl: string;
            encode(message: _161.QueryDelegationRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.QueryDelegationRecordsRequest;
            fromPartial(object: Partial<_161.QueryDelegationRecordsRequest>): _161.QueryDelegationRecordsRequest;
            fromAmino(object: _161.QueryDelegationRecordsRequestAmino): _161.QueryDelegationRecordsRequest;
            toAmino(message: _161.QueryDelegationRecordsRequest): _161.QueryDelegationRecordsRequestAmino;
            fromAminoMsg(object: _161.QueryDelegationRecordsRequestAminoMsg): _161.QueryDelegationRecordsRequest;
            fromProtoMsg(message: _161.QueryDelegationRecordsRequestProtoMsg): _161.QueryDelegationRecordsRequest;
            toProto(message: _161.QueryDelegationRecordsRequest): Uint8Array;
            toProtoMsg(message: _161.QueryDelegationRecordsRequest): _161.QueryDelegationRecordsRequestProtoMsg;
        };
        QueryDelegationRecordsResponse: {
            typeUrl: string;
            encode(message: _161.QueryDelegationRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.QueryDelegationRecordsResponse;
            fromPartial(object: Partial<_161.QueryDelegationRecordsResponse>): _161.QueryDelegationRecordsResponse;
            fromAmino(object: _161.QueryDelegationRecordsResponseAmino): _161.QueryDelegationRecordsResponse;
            toAmino(message: _161.QueryDelegationRecordsResponse): _161.QueryDelegationRecordsResponseAmino;
            fromAminoMsg(object: _161.QueryDelegationRecordsResponseAminoMsg): _161.QueryDelegationRecordsResponse;
            fromProtoMsg(message: _161.QueryDelegationRecordsResponseProtoMsg): _161.QueryDelegationRecordsResponse;
            toProto(message: _161.QueryDelegationRecordsResponse): Uint8Array;
            toProtoMsg(message: _161.QueryDelegationRecordsResponse): _161.QueryDelegationRecordsResponseProtoMsg;
        };
        QueryUnbondingRecordsRequest: {
            typeUrl: string;
            encode(message: _161.QueryUnbondingRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.QueryUnbondingRecordsRequest;
            fromPartial(object: Partial<_161.QueryUnbondingRecordsRequest>): _161.QueryUnbondingRecordsRequest;
            fromAmino(object: _161.QueryUnbondingRecordsRequestAmino): _161.QueryUnbondingRecordsRequest;
            toAmino(message: _161.QueryUnbondingRecordsRequest): _161.QueryUnbondingRecordsRequestAmino;
            fromAminoMsg(object: _161.QueryUnbondingRecordsRequestAminoMsg): _161.QueryUnbondingRecordsRequest;
            fromProtoMsg(message: _161.QueryUnbondingRecordsRequestProtoMsg): _161.QueryUnbondingRecordsRequest;
            toProto(message: _161.QueryUnbondingRecordsRequest): Uint8Array;
            toProtoMsg(message: _161.QueryUnbondingRecordsRequest): _161.QueryUnbondingRecordsRequestProtoMsg;
        };
        QueryUnbondingRecordsResponse: {
            typeUrl: string;
            encode(message: _161.QueryUnbondingRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.QueryUnbondingRecordsResponse;
            fromPartial(object: Partial<_161.QueryUnbondingRecordsResponse>): _161.QueryUnbondingRecordsResponse;
            fromAmino(object: _161.QueryUnbondingRecordsResponseAmino): _161.QueryUnbondingRecordsResponse;
            toAmino(message: _161.QueryUnbondingRecordsResponse): _161.QueryUnbondingRecordsResponseAmino;
            fromAminoMsg(object: _161.QueryUnbondingRecordsResponseAminoMsg): _161.QueryUnbondingRecordsResponse;
            fromProtoMsg(message: _161.QueryUnbondingRecordsResponseProtoMsg): _161.QueryUnbondingRecordsResponse;
            toProto(message: _161.QueryUnbondingRecordsResponse): Uint8Array;
            toProtoMsg(message: _161.QueryUnbondingRecordsResponse): _161.QueryUnbondingRecordsResponseProtoMsg;
        };
        QueryRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _161.QueryRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.QueryRedemptionRecordRequest;
            fromPartial(object: Partial<_161.QueryRedemptionRecordRequest>): _161.QueryRedemptionRecordRequest;
            fromAmino(object: _161.QueryRedemptionRecordRequestAmino): _161.QueryRedemptionRecordRequest;
            toAmino(message: _161.QueryRedemptionRecordRequest): _161.QueryRedemptionRecordRequestAmino;
            fromAminoMsg(object: _161.QueryRedemptionRecordRequestAminoMsg): _161.QueryRedemptionRecordRequest;
            fromProtoMsg(message: _161.QueryRedemptionRecordRequestProtoMsg): _161.QueryRedemptionRecordRequest;
            toProto(message: _161.QueryRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _161.QueryRedemptionRecordRequest): _161.QueryRedemptionRecordRequestProtoMsg;
        };
        QueryRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _161.QueryRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.QueryRedemptionRecordResponse;
            fromPartial(object: Partial<_161.QueryRedemptionRecordResponse>): _161.QueryRedemptionRecordResponse;
            fromAmino(object: _161.QueryRedemptionRecordResponseAmino): _161.QueryRedemptionRecordResponse;
            toAmino(message: _161.QueryRedemptionRecordResponse): _161.QueryRedemptionRecordResponseAmino;
            fromAminoMsg(object: _161.QueryRedemptionRecordResponseAminoMsg): _161.QueryRedemptionRecordResponse;
            fromProtoMsg(message: _161.QueryRedemptionRecordResponseProtoMsg): _161.QueryRedemptionRecordResponse;
            toProto(message: _161.QueryRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _161.QueryRedemptionRecordResponse): _161.QueryRedemptionRecordResponseProtoMsg;
        };
        QueryRedemptionRecordsRequest: {
            typeUrl: string;
            encode(message: _161.QueryRedemptionRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.QueryRedemptionRecordsRequest;
            fromPartial(object: Partial<_161.QueryRedemptionRecordsRequest>): _161.QueryRedemptionRecordsRequest;
            fromAmino(object: _161.QueryRedemptionRecordsRequestAmino): _161.QueryRedemptionRecordsRequest;
            toAmino(message: _161.QueryRedemptionRecordsRequest): _161.QueryRedemptionRecordsRequestAmino;
            fromAminoMsg(object: _161.QueryRedemptionRecordsRequestAminoMsg): _161.QueryRedemptionRecordsRequest;
            fromProtoMsg(message: _161.QueryRedemptionRecordsRequestProtoMsg): _161.QueryRedemptionRecordsRequest;
            toProto(message: _161.QueryRedemptionRecordsRequest): Uint8Array;
            toProtoMsg(message: _161.QueryRedemptionRecordsRequest): _161.QueryRedemptionRecordsRequestProtoMsg;
        };
        QueryRedemptionRecordsResponse: {
            typeUrl: string;
            encode(message: _161.QueryRedemptionRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.QueryRedemptionRecordsResponse;
            fromPartial(object: Partial<_161.QueryRedemptionRecordsResponse>): _161.QueryRedemptionRecordsResponse;
            fromAmino(object: _161.QueryRedemptionRecordsResponseAmino): _161.QueryRedemptionRecordsResponse;
            toAmino(message: _161.QueryRedemptionRecordsResponse): _161.QueryRedemptionRecordsResponseAmino;
            fromAminoMsg(object: _161.QueryRedemptionRecordsResponseAminoMsg): _161.QueryRedemptionRecordsResponse;
            fromProtoMsg(message: _161.QueryRedemptionRecordsResponseProtoMsg): _161.QueryRedemptionRecordsResponse;
            toProto(message: _161.QueryRedemptionRecordsResponse): Uint8Array;
            toProtoMsg(message: _161.QueryRedemptionRecordsResponse): _161.QueryRedemptionRecordsResponseProtoMsg;
        };
        QuerySlashRecordsRequest: {
            typeUrl: string;
            encode(_: _161.QuerySlashRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.QuerySlashRecordsRequest;
            fromPartial(_: Partial<_161.QuerySlashRecordsRequest>): _161.QuerySlashRecordsRequest;
            fromAmino(_: _161.QuerySlashRecordsRequestAmino): _161.QuerySlashRecordsRequest;
            toAmino(_: _161.QuerySlashRecordsRequest): _161.QuerySlashRecordsRequestAmino;
            fromAminoMsg(object: _161.QuerySlashRecordsRequestAminoMsg): _161.QuerySlashRecordsRequest;
            fromProtoMsg(message: _161.QuerySlashRecordsRequestProtoMsg): _161.QuerySlashRecordsRequest;
            toProto(message: _161.QuerySlashRecordsRequest): Uint8Array;
            toProtoMsg(message: _161.QuerySlashRecordsRequest): _161.QuerySlashRecordsRequestProtoMsg;
        };
        QuerySlashRecordsResponse: {
            typeUrl: string;
            encode(message: _161.QuerySlashRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.QuerySlashRecordsResponse;
            fromPartial(object: Partial<_161.QuerySlashRecordsResponse>): _161.QuerySlashRecordsResponse;
            fromAmino(object: _161.QuerySlashRecordsResponseAmino): _161.QuerySlashRecordsResponse;
            toAmino(message: _161.QuerySlashRecordsResponse): _161.QuerySlashRecordsResponseAmino;
            fromAminoMsg(object: _161.QuerySlashRecordsResponseAminoMsg): _161.QuerySlashRecordsResponse;
            fromProtoMsg(message: _161.QuerySlashRecordsResponseProtoMsg): _161.QuerySlashRecordsResponse;
            toProto(message: _161.QuerySlashRecordsResponse): Uint8Array;
            toProtoMsg(message: _161.QuerySlashRecordsResponse): _161.QuerySlashRecordsResponseProtoMsg;
        };
        RedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _161.RedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.RedemptionRecordResponse;
            fromPartial(object: Partial<_161.RedemptionRecordResponse>): _161.RedemptionRecordResponse;
            fromAmino(object: _161.RedemptionRecordResponseAmino): _161.RedemptionRecordResponse;
            toAmino(message: _161.RedemptionRecordResponse): _161.RedemptionRecordResponseAmino;
            fromAminoMsg(object: _161.RedemptionRecordResponseAminoMsg): _161.RedemptionRecordResponse;
            fromProtoMsg(message: _161.RedemptionRecordResponseProtoMsg): _161.RedemptionRecordResponse;
            toProto(message: _161.RedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _161.RedemptionRecordResponse): _161.RedemptionRecordResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _160.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.Params;
            fromPartial(_: Partial<_160.Params>): _160.Params;
            fromAmino(_: _160.ParamsAmino): _160.Params;
            toAmino(_: _160.Params): _160.ParamsAmino;
            fromAminoMsg(object: _160.ParamsAminoMsg): _160.Params;
            fromProtoMsg(message: _160.ParamsProtoMsg): _160.Params;
            toProto(message: _160.Params): Uint8Array;
            toProtoMsg(message: _160.Params): _160.ParamsProtoMsg;
        };
        TransferInProgressRecordIds: {
            typeUrl: string;
            encode(message: _160.TransferInProgressRecordIds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.TransferInProgressRecordIds;
            fromPartial(object: Partial<_160.TransferInProgressRecordIds>): _160.TransferInProgressRecordIds;
            fromAmino(object: _160.TransferInProgressRecordIdsAmino): _160.TransferInProgressRecordIds;
            toAmino(message: _160.TransferInProgressRecordIds): _160.TransferInProgressRecordIdsAmino;
            fromAminoMsg(object: _160.TransferInProgressRecordIdsAminoMsg): _160.TransferInProgressRecordIds;
            fromProtoMsg(message: _160.TransferInProgressRecordIdsProtoMsg): _160.TransferInProgressRecordIds;
            toProto(message: _160.TransferInProgressRecordIds): Uint8Array;
            toProtoMsg(message: _160.TransferInProgressRecordIds): _160.TransferInProgressRecordIdsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _160.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.GenesisState;
            fromPartial(object: Partial<_160.GenesisState>): _160.GenesisState;
            fromAmino(object: _160.GenesisStateAmino): _160.GenesisState;
            toAmino(message: _160.GenesisState): _160.GenesisStateAmino;
            fromAminoMsg(object: _160.GenesisStateAminoMsg): _160.GenesisState;
            fromProtoMsg(message: _160.GenesisStateProtoMsg): _160.GenesisState;
            toProto(message: _160.GenesisState): Uint8Array;
            toProtoMsg(message: _160.GenesisState): _160.GenesisStateProtoMsg;
        };
    };
    const stakeibc: {
        MsgClientImpl: typeof _294.MsgClientImpl;
        QueryClientImpl: typeof _287.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _173.QueryParamsRequest): Promise<_173.QueryParamsResponse>;
            validators(request: _173.QueryGetValidatorsRequest): Promise<_173.QueryGetValidatorsResponse>;
            hostZone(request: _173.QueryGetHostZoneRequest): Promise<_173.QueryGetHostZoneResponse>;
            hostZoneAll(request?: _173.QueryAllHostZoneRequest): Promise<_173.QueryAllHostZoneResponse>;
            moduleAddress(request: _173.QueryModuleAddressRequest): Promise<_173.QueryModuleAddressResponse>;
            interchainAccountFromAddress(request: _173.QueryInterchainAccountFromAddressRequest): Promise<_173.QueryInterchainAccountFromAddressResponse>;
            epochTracker(request: _173.QueryGetEpochTrackerRequest): Promise<_173.QueryGetEpochTrackerResponse>;
            epochTrackerAll(request?: _173.QueryAllEpochTrackerRequest): Promise<_173.QueryAllEpochTrackerResponse>;
            nextPacketSequence(request: _173.QueryGetNextPacketSequenceRequest): Promise<_173.QueryGetNextPacketSequenceResponse>;
            addressUnbondings(request: _173.QueryAddressUnbondings): Promise<_173.QueryAddressUnbondingsResponse>;
            allTradeRoutes(request?: _173.QueryAllTradeRoutes): Promise<_173.QueryAllTradeRoutesResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _175.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lSMLiquidStake(value: _175.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _175.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                registerHostZone(value: _175.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimUndelegatedTokens(value: _175.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                rebalanceValidators(value: _175.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addValidators(value: _175.MsgAddValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                changeValidatorWeight(value: _175.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteValidator(value: _175.MsgDeleteValidator): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreInterchainAccount(value: _175.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                closeDelegationChannel(value: _175.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateValidatorSharesExchRate(value: _175.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                calibrateDelegation(value: _175.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                clearBalance(value: _175.MsgClearBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _175.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _175.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createTradeRoute(value: _175.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteTradeRoute(value: _175.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateTradeRoute(value: _175.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setCommunityPoolRebate(value: _175.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                toggleTradeController(value: _175.MsgToggleTradeController): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateHostZoneParams(value: _175.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _175.MsgLiquidStake): {
                    typeUrl: string;
                    value: _175.MsgLiquidStake;
                };
                lSMLiquidStake(value: _175.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: _175.MsgLSMLiquidStake;
                };
                redeemStake(value: _175.MsgRedeemStake): {
                    typeUrl: string;
                    value: _175.MsgRedeemStake;
                };
                registerHostZone(value: _175.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _175.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _175.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _175.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _175.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _175.MsgRebalanceValidators;
                };
                addValidators(value: _175.MsgAddValidators): {
                    typeUrl: string;
                    value: _175.MsgAddValidators;
                };
                changeValidatorWeight(value: _175.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: _175.MsgChangeValidatorWeights;
                };
                deleteValidator(value: _175.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _175.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _175.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _175.MsgRestoreInterchainAccount;
                };
                closeDelegationChannel(value: _175.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: _175.MsgCloseDelegationChannel;
                };
                updateValidatorSharesExchRate(value: _175.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _175.MsgUpdateValidatorSharesExchRate;
                };
                calibrateDelegation(value: _175.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: _175.MsgCalibrateDelegation;
                };
                clearBalance(value: _175.MsgClearBalance): {
                    typeUrl: string;
                    value: _175.MsgClearBalance;
                };
                updateInnerRedemptionRateBounds(value: _175.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _175.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _175.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _175.MsgResumeHostZone;
                };
                createTradeRoute(value: _175.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: _175.MsgCreateTradeRoute;
                };
                deleteTradeRoute(value: _175.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: _175.MsgDeleteTradeRoute;
                };
                updateTradeRoute(value: _175.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: _175.MsgUpdateTradeRoute;
                };
                setCommunityPoolRebate(value: _175.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: _175.MsgSetCommunityPoolRebate;
                };
                toggleTradeController(value: _175.MsgToggleTradeController): {
                    typeUrl: string;
                    value: _175.MsgToggleTradeController;
                };
                updateHostZoneParams(value: _175.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: _175.MsgUpdateHostZoneParams;
                };
            };
            fromPartial: {
                liquidStake(value: _175.MsgLiquidStake): {
                    typeUrl: string;
                    value: _175.MsgLiquidStake;
                };
                lSMLiquidStake(value: _175.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: _175.MsgLSMLiquidStake;
                };
                redeemStake(value: _175.MsgRedeemStake): {
                    typeUrl: string;
                    value: _175.MsgRedeemStake;
                };
                registerHostZone(value: _175.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _175.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _175.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _175.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _175.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _175.MsgRebalanceValidators;
                };
                addValidators(value: _175.MsgAddValidators): {
                    typeUrl: string;
                    value: _175.MsgAddValidators;
                };
                changeValidatorWeight(value: _175.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: _175.MsgChangeValidatorWeights;
                };
                deleteValidator(value: _175.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _175.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _175.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _175.MsgRestoreInterchainAccount;
                };
                closeDelegationChannel(value: _175.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: _175.MsgCloseDelegationChannel;
                };
                updateValidatorSharesExchRate(value: _175.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _175.MsgUpdateValidatorSharesExchRate;
                };
                calibrateDelegation(value: _175.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: _175.MsgCalibrateDelegation;
                };
                clearBalance(value: _175.MsgClearBalance): {
                    typeUrl: string;
                    value: _175.MsgClearBalance;
                };
                updateInnerRedemptionRateBounds(value: _175.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _175.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _175.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _175.MsgResumeHostZone;
                };
                createTradeRoute(value: _175.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: _175.MsgCreateTradeRoute;
                };
                deleteTradeRoute(value: _175.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: _175.MsgDeleteTradeRoute;
                };
                updateTradeRoute(value: _175.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: _175.MsgUpdateTradeRoute;
                };
                setCommunityPoolRebate(value: _175.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: _175.MsgSetCommunityPoolRebate;
                };
                toggleTradeController(value: _175.MsgToggleTradeController): {
                    typeUrl: string;
                    value: _175.MsgToggleTradeController;
                };
                updateHostZoneParams(value: _175.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: _175.MsgUpdateHostZoneParams;
                };
            };
        };
        AminoConverter: {
            "/stride.stakeibc.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _175.MsgLiquidStake) => _175.MsgLiquidStakeAmino;
                fromAmino: (object: _175.MsgLiquidStakeAmino) => _175.MsgLiquidStake;
            };
            "/stride.stakeibc.MsgLSMLiquidStake": {
                aminoType: string;
                toAmino: (message: _175.MsgLSMLiquidStake) => _175.MsgLSMLiquidStakeAmino;
                fromAmino: (object: _175.MsgLSMLiquidStakeAmino) => _175.MsgLSMLiquidStake;
            };
            "/stride.stakeibc.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _175.MsgRedeemStake) => _175.MsgRedeemStakeAmino;
                fromAmino: (object: _175.MsgRedeemStakeAmino) => _175.MsgRedeemStake;
            };
            "/stride.stakeibc.MsgRegisterHostZone": {
                aminoType: string;
                toAmino: (message: _175.MsgRegisterHostZone) => _175.MsgRegisterHostZoneAmino;
                fromAmino: (object: _175.MsgRegisterHostZoneAmino) => _175.MsgRegisterHostZone;
            };
            "/stride.stakeibc.MsgClaimUndelegatedTokens": {
                aminoType: string;
                toAmino: (message: _175.MsgClaimUndelegatedTokens) => _175.MsgClaimUndelegatedTokensAmino;
                fromAmino: (object: _175.MsgClaimUndelegatedTokensAmino) => _175.MsgClaimUndelegatedTokens;
            };
            "/stride.stakeibc.MsgRebalanceValidators": {
                aminoType: string;
                toAmino: (message: _175.MsgRebalanceValidators) => _175.MsgRebalanceValidatorsAmino;
                fromAmino: (object: _175.MsgRebalanceValidatorsAmino) => _175.MsgRebalanceValidators;
            };
            "/stride.stakeibc.MsgAddValidators": {
                aminoType: string;
                toAmino: (message: _175.MsgAddValidators) => _175.MsgAddValidatorsAmino;
                fromAmino: (object: _175.MsgAddValidatorsAmino) => _175.MsgAddValidators;
            };
            "/stride.stakeibc.MsgChangeValidatorWeights": {
                aminoType: string;
                toAmino: (message: _175.MsgChangeValidatorWeights) => _175.MsgChangeValidatorWeightsAmino;
                fromAmino: (object: _175.MsgChangeValidatorWeightsAmino) => _175.MsgChangeValidatorWeights;
            };
            "/stride.stakeibc.MsgDeleteValidator": {
                aminoType: string;
                toAmino: (message: _175.MsgDeleteValidator) => _175.MsgDeleteValidatorAmino;
                fromAmino: (object: _175.MsgDeleteValidatorAmino) => _175.MsgDeleteValidator;
            };
            "/stride.stakeibc.MsgRestoreInterchainAccount": {
                aminoType: string;
                toAmino: (message: _175.MsgRestoreInterchainAccount) => _175.MsgRestoreInterchainAccountAmino;
                fromAmino: (object: _175.MsgRestoreInterchainAccountAmino) => _175.MsgRestoreInterchainAccount;
            };
            "/stride.stakeibc.MsgCloseDelegationChannel": {
                aminoType: string;
                toAmino: (message: _175.MsgCloseDelegationChannel) => _175.MsgCloseDelegationChannelAmino;
                fromAmino: (object: _175.MsgCloseDelegationChannelAmino) => _175.MsgCloseDelegationChannel;
            };
            "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
                aminoType: string;
                toAmino: (message: _175.MsgUpdateValidatorSharesExchRate) => _175.MsgUpdateValidatorSharesExchRateAmino;
                fromAmino: (object: _175.MsgUpdateValidatorSharesExchRateAmino) => _175.MsgUpdateValidatorSharesExchRate;
            };
            "/stride.stakeibc.MsgCalibrateDelegation": {
                aminoType: string;
                toAmino: (message: _175.MsgCalibrateDelegation) => _175.MsgCalibrateDelegationAmino;
                fromAmino: (object: _175.MsgCalibrateDelegationAmino) => _175.MsgCalibrateDelegation;
            };
            "/stride.stakeibc.MsgClearBalance": {
                aminoType: string;
                toAmino: (message: _175.MsgClearBalance) => _175.MsgClearBalanceAmino;
                fromAmino: (object: _175.MsgClearBalanceAmino) => _175.MsgClearBalance;
            };
            "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _175.MsgUpdateInnerRedemptionRateBounds) => _175.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _175.MsgUpdateInnerRedemptionRateBoundsAmino) => _175.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.stakeibc.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _175.MsgResumeHostZone) => _175.MsgResumeHostZoneAmino;
                fromAmino: (object: _175.MsgResumeHostZoneAmino) => _175.MsgResumeHostZone;
            };
            "/stride.stakeibc.MsgCreateTradeRoute": {
                aminoType: string;
                toAmino: (message: _175.MsgCreateTradeRoute) => _175.MsgCreateTradeRouteAmino;
                fromAmino: (object: _175.MsgCreateTradeRouteAmino) => _175.MsgCreateTradeRoute;
            };
            "/stride.stakeibc.MsgDeleteTradeRoute": {
                aminoType: string;
                toAmino: (message: _175.MsgDeleteTradeRoute) => _175.MsgDeleteTradeRouteAmino;
                fromAmino: (object: _175.MsgDeleteTradeRouteAmino) => _175.MsgDeleteTradeRoute;
            };
            "/stride.stakeibc.MsgUpdateTradeRoute": {
                aminoType: string;
                toAmino: (message: _175.MsgUpdateTradeRoute) => _175.MsgUpdateTradeRouteAmino;
                fromAmino: (object: _175.MsgUpdateTradeRouteAmino) => _175.MsgUpdateTradeRoute;
            };
            "/stride.stakeibc.MsgSetCommunityPoolRebate": {
                aminoType: string;
                toAmino: (message: _175.MsgSetCommunityPoolRebate) => _175.MsgSetCommunityPoolRebateAmino;
                fromAmino: (object: _175.MsgSetCommunityPoolRebateAmino) => _175.MsgSetCommunityPoolRebate;
            };
            "/stride.stakeibc.MsgToggleTradeController": {
                aminoType: string;
                toAmino: (message: _175.MsgToggleTradeController) => _175.MsgToggleTradeControllerAmino;
                fromAmino: (object: _175.MsgToggleTradeControllerAmino) => _175.MsgToggleTradeController;
            };
            "/stride.stakeibc.MsgUpdateHostZoneParams": {
                aminoType: string;
                toAmino: (message: _175.MsgUpdateHostZoneParams) => _175.MsgUpdateHostZoneParamsAmino;
                fromAmino: (object: _175.MsgUpdateHostZoneParamsAmino) => _175.MsgUpdateHostZoneParams;
            };
        };
        Validator: {
            typeUrl: string;
            encode(message: _176.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.Validator;
            fromPartial(object: Partial<_176.Validator>): _176.Validator;
            fromAmino(object: _176.ValidatorAmino): _176.Validator;
            toAmino(message: _176.Validator): _176.ValidatorAmino;
            fromAminoMsg(object: _176.ValidatorAminoMsg): _176.Validator;
            fromProtoMsg(message: _176.ValidatorProtoMsg): _176.Validator;
            toProto(message: _176.Validator): Uint8Array;
            toProtoMsg(message: _176.Validator): _176.ValidatorProtoMsg;
        };
        authzPermissionChangeFromJSON(object: any): _175.AuthzPermissionChange;
        authzPermissionChangeToJSON(object: _175.AuthzPermissionChange): string;
        AuthzPermissionChange: typeof _175.AuthzPermissionChange;
        AuthzPermissionChangeSDKType: typeof _175.AuthzPermissionChange;
        AuthzPermissionChangeAmino: typeof _175.AuthzPermissionChange;
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _175.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_175.MsgUpdateInnerRedemptionRateBounds>): _175.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _175.MsgUpdateInnerRedemptionRateBoundsAmino): _175.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _175.MsgUpdateInnerRedemptionRateBounds): _175.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _175.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _175.MsgUpdateInnerRedemptionRateBounds;
            fromProtoMsg(message: _175.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _175.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _175.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _175.MsgUpdateInnerRedemptionRateBounds): _175.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _175.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_175.MsgUpdateInnerRedemptionRateBoundsResponse>): _175.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _175.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _175.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _175.MsgUpdateInnerRedemptionRateBoundsResponse): _175.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _175.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _175.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _175.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _175.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _175.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _175.MsgUpdateInnerRedemptionRateBoundsResponse): _175.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _175.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgLiquidStake;
            fromPartial(object: Partial<_175.MsgLiquidStake>): _175.MsgLiquidStake;
            fromAmino(object: _175.MsgLiquidStakeAmino): _175.MsgLiquidStake;
            toAmino(message: _175.MsgLiquidStake): _175.MsgLiquidStakeAmino;
            fromAminoMsg(object: _175.MsgLiquidStakeAminoMsg): _175.MsgLiquidStake;
            toAminoMsg(message: _175.MsgLiquidStake): _175.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _175.MsgLiquidStakeProtoMsg): _175.MsgLiquidStake;
            toProto(message: _175.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _175.MsgLiquidStake): _175.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _175.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_175.MsgLiquidStakeResponse>): _175.MsgLiquidStakeResponse;
            fromAmino(object: _175.MsgLiquidStakeResponseAmino): _175.MsgLiquidStakeResponse;
            toAmino(message: _175.MsgLiquidStakeResponse): _175.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _175.MsgLiquidStakeResponseAminoMsg): _175.MsgLiquidStakeResponse;
            fromProtoMsg(message: _175.MsgLiquidStakeResponseProtoMsg): _175.MsgLiquidStakeResponse;
            toProto(message: _175.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _175.MsgLiquidStakeResponse): _175.MsgLiquidStakeResponseProtoMsg;
        };
        MsgLSMLiquidStake: {
            typeUrl: string;
            encode(message: _175.MsgLSMLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgLSMLiquidStake;
            fromPartial(object: Partial<_175.MsgLSMLiquidStake>): _175.MsgLSMLiquidStake;
            fromAmino(object: _175.MsgLSMLiquidStakeAmino): _175.MsgLSMLiquidStake;
            toAmino(message: _175.MsgLSMLiquidStake): _175.MsgLSMLiquidStakeAmino;
            fromAminoMsg(object: _175.MsgLSMLiquidStakeAminoMsg): _175.MsgLSMLiquidStake;
            toAminoMsg(message: _175.MsgLSMLiquidStake): _175.MsgLSMLiquidStakeAminoMsg;
            fromProtoMsg(message: _175.MsgLSMLiquidStakeProtoMsg): _175.MsgLSMLiquidStake;
            toProto(message: _175.MsgLSMLiquidStake): Uint8Array;
            toProtoMsg(message: _175.MsgLSMLiquidStake): _175.MsgLSMLiquidStakeProtoMsg;
        };
        MsgLSMLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _175.MsgLSMLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgLSMLiquidStakeResponse;
            fromPartial(object: Partial<_175.MsgLSMLiquidStakeResponse>): _175.MsgLSMLiquidStakeResponse;
            fromAmino(object: _175.MsgLSMLiquidStakeResponseAmino): _175.MsgLSMLiquidStakeResponse;
            toAmino(message: _175.MsgLSMLiquidStakeResponse): _175.MsgLSMLiquidStakeResponseAmino;
            fromAminoMsg(object: _175.MsgLSMLiquidStakeResponseAminoMsg): _175.MsgLSMLiquidStakeResponse;
            fromProtoMsg(message: _175.MsgLSMLiquidStakeResponseProtoMsg): _175.MsgLSMLiquidStakeResponse;
            toProto(message: _175.MsgLSMLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _175.MsgLSMLiquidStakeResponse): _175.MsgLSMLiquidStakeResponseProtoMsg;
        };
        MsgClearBalance: {
            typeUrl: string;
            encode(message: _175.MsgClearBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgClearBalance;
            fromPartial(object: Partial<_175.MsgClearBalance>): _175.MsgClearBalance;
            fromAmino(object: _175.MsgClearBalanceAmino): _175.MsgClearBalance;
            toAmino(message: _175.MsgClearBalance): _175.MsgClearBalanceAmino;
            fromAminoMsg(object: _175.MsgClearBalanceAminoMsg): _175.MsgClearBalance;
            toAminoMsg(message: _175.MsgClearBalance): _175.MsgClearBalanceAminoMsg;
            fromProtoMsg(message: _175.MsgClearBalanceProtoMsg): _175.MsgClearBalance;
            toProto(message: _175.MsgClearBalance): Uint8Array;
            toProtoMsg(message: _175.MsgClearBalance): _175.MsgClearBalanceProtoMsg;
        };
        MsgClearBalanceResponse: {
            typeUrl: string;
            encode(_: _175.MsgClearBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgClearBalanceResponse;
            fromPartial(_: Partial<_175.MsgClearBalanceResponse>): _175.MsgClearBalanceResponse;
            fromAmino(_: _175.MsgClearBalanceResponseAmino): _175.MsgClearBalanceResponse;
            toAmino(_: _175.MsgClearBalanceResponse): _175.MsgClearBalanceResponseAmino;
            fromAminoMsg(object: _175.MsgClearBalanceResponseAminoMsg): _175.MsgClearBalanceResponse;
            fromProtoMsg(message: _175.MsgClearBalanceResponseProtoMsg): _175.MsgClearBalanceResponse;
            toProto(message: _175.MsgClearBalanceResponse): Uint8Array;
            toProtoMsg(message: _175.MsgClearBalanceResponse): _175.MsgClearBalanceResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _175.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgRedeemStake;
            fromPartial(object: Partial<_175.MsgRedeemStake>): _175.MsgRedeemStake;
            fromAmino(object: _175.MsgRedeemStakeAmino): _175.MsgRedeemStake;
            toAmino(message: _175.MsgRedeemStake): _175.MsgRedeemStakeAmino;
            fromAminoMsg(object: _175.MsgRedeemStakeAminoMsg): _175.MsgRedeemStake;
            toAminoMsg(message: _175.MsgRedeemStake): _175.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _175.MsgRedeemStakeProtoMsg): _175.MsgRedeemStake;
            toProto(message: _175.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _175.MsgRedeemStake): _175.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(_: _175.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgRedeemStakeResponse;
            fromPartial(_: Partial<_175.MsgRedeemStakeResponse>): _175.MsgRedeemStakeResponse;
            fromAmino(_: _175.MsgRedeemStakeResponseAmino): _175.MsgRedeemStakeResponse;
            toAmino(_: _175.MsgRedeemStakeResponse): _175.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _175.MsgRedeemStakeResponseAminoMsg): _175.MsgRedeemStakeResponse;
            fromProtoMsg(message: _175.MsgRedeemStakeResponseProtoMsg): _175.MsgRedeemStakeResponse;
            toProto(message: _175.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _175.MsgRedeemStakeResponse): _175.MsgRedeemStakeResponseProtoMsg;
        };
        MsgRegisterHostZone: {
            typeUrl: string;
            encode(message: _175.MsgRegisterHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgRegisterHostZone;
            fromPartial(object: Partial<_175.MsgRegisterHostZone>): _175.MsgRegisterHostZone;
            fromAmino(object: _175.MsgRegisterHostZoneAmino): _175.MsgRegisterHostZone;
            toAmino(message: _175.MsgRegisterHostZone): _175.MsgRegisterHostZoneAmino;
            fromAminoMsg(object: _175.MsgRegisterHostZoneAminoMsg): _175.MsgRegisterHostZone;
            toAminoMsg(message: _175.MsgRegisterHostZone): _175.MsgRegisterHostZoneAminoMsg;
            fromProtoMsg(message: _175.MsgRegisterHostZoneProtoMsg): _175.MsgRegisterHostZone;
            toProto(message: _175.MsgRegisterHostZone): Uint8Array;
            toProtoMsg(message: _175.MsgRegisterHostZone): _175.MsgRegisterHostZoneProtoMsg;
        };
        MsgRegisterHostZoneResponse: {
            typeUrl: string;
            encode(_: _175.MsgRegisterHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgRegisterHostZoneResponse;
            fromPartial(_: Partial<_175.MsgRegisterHostZoneResponse>): _175.MsgRegisterHostZoneResponse;
            fromAmino(_: _175.MsgRegisterHostZoneResponseAmino): _175.MsgRegisterHostZoneResponse;
            toAmino(_: _175.MsgRegisterHostZoneResponse): _175.MsgRegisterHostZoneResponseAmino;
            fromAminoMsg(object: _175.MsgRegisterHostZoneResponseAminoMsg): _175.MsgRegisterHostZoneResponse;
            fromProtoMsg(message: _175.MsgRegisterHostZoneResponseProtoMsg): _175.MsgRegisterHostZoneResponse;
            toProto(message: _175.MsgRegisterHostZoneResponse): Uint8Array;
            toProtoMsg(message: _175.MsgRegisterHostZoneResponse): _175.MsgRegisterHostZoneResponseProtoMsg;
        };
        MsgClaimUndelegatedTokens: {
            typeUrl: string;
            encode(message: _175.MsgClaimUndelegatedTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgClaimUndelegatedTokens;
            fromPartial(object: Partial<_175.MsgClaimUndelegatedTokens>): _175.MsgClaimUndelegatedTokens;
            fromAmino(object: _175.MsgClaimUndelegatedTokensAmino): _175.MsgClaimUndelegatedTokens;
            toAmino(message: _175.MsgClaimUndelegatedTokens): _175.MsgClaimUndelegatedTokensAmino;
            fromAminoMsg(object: _175.MsgClaimUndelegatedTokensAminoMsg): _175.MsgClaimUndelegatedTokens;
            toAminoMsg(message: _175.MsgClaimUndelegatedTokens): _175.MsgClaimUndelegatedTokensAminoMsg;
            fromProtoMsg(message: _175.MsgClaimUndelegatedTokensProtoMsg): _175.MsgClaimUndelegatedTokens;
            toProto(message: _175.MsgClaimUndelegatedTokens): Uint8Array;
            toProtoMsg(message: _175.MsgClaimUndelegatedTokens): _175.MsgClaimUndelegatedTokensProtoMsg;
        };
        MsgClaimUndelegatedTokensResponse: {
            typeUrl: string;
            encode(_: _175.MsgClaimUndelegatedTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgClaimUndelegatedTokensResponse;
            fromPartial(_: Partial<_175.MsgClaimUndelegatedTokensResponse>): _175.MsgClaimUndelegatedTokensResponse;
            fromAmino(_: _175.MsgClaimUndelegatedTokensResponseAmino): _175.MsgClaimUndelegatedTokensResponse;
            toAmino(_: _175.MsgClaimUndelegatedTokensResponse): _175.MsgClaimUndelegatedTokensResponseAmino;
            fromAminoMsg(object: _175.MsgClaimUndelegatedTokensResponseAminoMsg): _175.MsgClaimUndelegatedTokensResponse;
            fromProtoMsg(message: _175.MsgClaimUndelegatedTokensResponseProtoMsg): _175.MsgClaimUndelegatedTokensResponse;
            toProto(message: _175.MsgClaimUndelegatedTokensResponse): Uint8Array;
            toProtoMsg(message: _175.MsgClaimUndelegatedTokensResponse): _175.MsgClaimUndelegatedTokensResponseProtoMsg;
        };
        MsgRebalanceValidators: {
            typeUrl: string;
            encode(message: _175.MsgRebalanceValidators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgRebalanceValidators;
            fromPartial(object: Partial<_175.MsgRebalanceValidators>): _175.MsgRebalanceValidators;
            fromAmino(object: _175.MsgRebalanceValidatorsAmino): _175.MsgRebalanceValidators;
            toAmino(message: _175.MsgRebalanceValidators): _175.MsgRebalanceValidatorsAmino;
            fromAminoMsg(object: _175.MsgRebalanceValidatorsAminoMsg): _175.MsgRebalanceValidators;
            toAminoMsg(message: _175.MsgRebalanceValidators): _175.MsgRebalanceValidatorsAminoMsg;
            fromProtoMsg(message: _175.MsgRebalanceValidatorsProtoMsg): _175.MsgRebalanceValidators;
            toProto(message: _175.MsgRebalanceValidators): Uint8Array;
            toProtoMsg(message: _175.MsgRebalanceValidators): _175.MsgRebalanceValidatorsProtoMsg;
        };
        MsgRebalanceValidatorsResponse: {
            typeUrl: string;
            encode(_: _175.MsgRebalanceValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgRebalanceValidatorsResponse;
            fromPartial(_: Partial<_175.MsgRebalanceValidatorsResponse>): _175.MsgRebalanceValidatorsResponse;
            fromAmino(_: _175.MsgRebalanceValidatorsResponseAmino): _175.MsgRebalanceValidatorsResponse;
            toAmino(_: _175.MsgRebalanceValidatorsResponse): _175.MsgRebalanceValidatorsResponseAmino;
            fromAminoMsg(object: _175.MsgRebalanceValidatorsResponseAminoMsg): _175.MsgRebalanceValidatorsResponse;
            fromProtoMsg(message: _175.MsgRebalanceValidatorsResponseProtoMsg): _175.MsgRebalanceValidatorsResponse;
            toProto(message: _175.MsgRebalanceValidatorsResponse): Uint8Array;
            toProtoMsg(message: _175.MsgRebalanceValidatorsResponse): _175.MsgRebalanceValidatorsResponseProtoMsg;
        };
        MsgAddValidators: {
            typeUrl: string;
            encode(message: _175.MsgAddValidators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgAddValidators;
            fromPartial(object: Partial<_175.MsgAddValidators>): _175.MsgAddValidators;
            fromAmino(object: _175.MsgAddValidatorsAmino): _175.MsgAddValidators;
            toAmino(message: _175.MsgAddValidators): _175.MsgAddValidatorsAmino;
            fromAminoMsg(object: _175.MsgAddValidatorsAminoMsg): _175.MsgAddValidators;
            fromProtoMsg(message: _175.MsgAddValidatorsProtoMsg): _175.MsgAddValidators;
            toProto(message: _175.MsgAddValidators): Uint8Array;
            toProtoMsg(message: _175.MsgAddValidators): _175.MsgAddValidatorsProtoMsg;
        };
        MsgAddValidatorsResponse: {
            typeUrl: string;
            encode(_: _175.MsgAddValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgAddValidatorsResponse;
            fromPartial(_: Partial<_175.MsgAddValidatorsResponse>): _175.MsgAddValidatorsResponse;
            fromAmino(_: _175.MsgAddValidatorsResponseAmino): _175.MsgAddValidatorsResponse;
            toAmino(_: _175.MsgAddValidatorsResponse): _175.MsgAddValidatorsResponseAmino;
            fromAminoMsg(object: _175.MsgAddValidatorsResponseAminoMsg): _175.MsgAddValidatorsResponse;
            fromProtoMsg(message: _175.MsgAddValidatorsResponseProtoMsg): _175.MsgAddValidatorsResponse;
            toProto(message: _175.MsgAddValidatorsResponse): Uint8Array;
            toProtoMsg(message: _175.MsgAddValidatorsResponse): _175.MsgAddValidatorsResponseProtoMsg;
        };
        ValidatorWeight: {
            typeUrl: string;
            encode(message: _175.ValidatorWeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.ValidatorWeight;
            fromPartial(object: Partial<_175.ValidatorWeight>): _175.ValidatorWeight;
            fromAmino(object: _175.ValidatorWeightAmino): _175.ValidatorWeight;
            toAmino(message: _175.ValidatorWeight): _175.ValidatorWeightAmino;
            fromAminoMsg(object: _175.ValidatorWeightAminoMsg): _175.ValidatorWeight;
            fromProtoMsg(message: _175.ValidatorWeightProtoMsg): _175.ValidatorWeight;
            toProto(message: _175.ValidatorWeight): Uint8Array;
            toProtoMsg(message: _175.ValidatorWeight): _175.ValidatorWeightProtoMsg;
        };
        MsgChangeValidatorWeights: {
            typeUrl: string;
            encode(message: _175.MsgChangeValidatorWeights, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgChangeValidatorWeights;
            fromPartial(object: Partial<_175.MsgChangeValidatorWeights>): _175.MsgChangeValidatorWeights;
            fromAmino(object: _175.MsgChangeValidatorWeightsAmino): _175.MsgChangeValidatorWeights;
            toAmino(message: _175.MsgChangeValidatorWeights): _175.MsgChangeValidatorWeightsAmino;
            fromAminoMsg(object: _175.MsgChangeValidatorWeightsAminoMsg): _175.MsgChangeValidatorWeights;
            fromProtoMsg(message: _175.MsgChangeValidatorWeightsProtoMsg): _175.MsgChangeValidatorWeights;
            toProto(message: _175.MsgChangeValidatorWeights): Uint8Array;
            toProtoMsg(message: _175.MsgChangeValidatorWeights): _175.MsgChangeValidatorWeightsProtoMsg;
        };
        MsgChangeValidatorWeightsResponse: {
            typeUrl: string;
            encode(_: _175.MsgChangeValidatorWeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgChangeValidatorWeightsResponse;
            fromPartial(_: Partial<_175.MsgChangeValidatorWeightsResponse>): _175.MsgChangeValidatorWeightsResponse;
            fromAmino(_: _175.MsgChangeValidatorWeightsResponseAmino): _175.MsgChangeValidatorWeightsResponse;
            toAmino(_: _175.MsgChangeValidatorWeightsResponse): _175.MsgChangeValidatorWeightsResponseAmino;
            fromAminoMsg(object: _175.MsgChangeValidatorWeightsResponseAminoMsg): _175.MsgChangeValidatorWeightsResponse;
            fromProtoMsg(message: _175.MsgChangeValidatorWeightsResponseProtoMsg): _175.MsgChangeValidatorWeightsResponse;
            toProto(message: _175.MsgChangeValidatorWeightsResponse): Uint8Array;
            toProtoMsg(message: _175.MsgChangeValidatorWeightsResponse): _175.MsgChangeValidatorWeightsResponseProtoMsg;
        };
        MsgDeleteValidator: {
            typeUrl: string;
            encode(message: _175.MsgDeleteValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgDeleteValidator;
            fromPartial(object: Partial<_175.MsgDeleteValidator>): _175.MsgDeleteValidator;
            fromAmino(object: _175.MsgDeleteValidatorAmino): _175.MsgDeleteValidator;
            toAmino(message: _175.MsgDeleteValidator): _175.MsgDeleteValidatorAmino;
            fromAminoMsg(object: _175.MsgDeleteValidatorAminoMsg): _175.MsgDeleteValidator;
            toAminoMsg(message: _175.MsgDeleteValidator): _175.MsgDeleteValidatorAminoMsg;
            fromProtoMsg(message: _175.MsgDeleteValidatorProtoMsg): _175.MsgDeleteValidator;
            toProto(message: _175.MsgDeleteValidator): Uint8Array;
            toProtoMsg(message: _175.MsgDeleteValidator): _175.MsgDeleteValidatorProtoMsg;
        };
        MsgDeleteValidatorResponse: {
            typeUrl: string;
            encode(_: _175.MsgDeleteValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgDeleteValidatorResponse;
            fromPartial(_: Partial<_175.MsgDeleteValidatorResponse>): _175.MsgDeleteValidatorResponse;
            fromAmino(_: _175.MsgDeleteValidatorResponseAmino): _175.MsgDeleteValidatorResponse;
            toAmino(_: _175.MsgDeleteValidatorResponse): _175.MsgDeleteValidatorResponseAmino;
            fromAminoMsg(object: _175.MsgDeleteValidatorResponseAminoMsg): _175.MsgDeleteValidatorResponse;
            fromProtoMsg(message: _175.MsgDeleteValidatorResponseProtoMsg): _175.MsgDeleteValidatorResponse;
            toProto(message: _175.MsgDeleteValidatorResponse): Uint8Array;
            toProtoMsg(message: _175.MsgDeleteValidatorResponse): _175.MsgDeleteValidatorResponseProtoMsg;
        };
        MsgRestoreInterchainAccount: {
            typeUrl: string;
            encode(message: _175.MsgRestoreInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgRestoreInterchainAccount;
            fromPartial(object: Partial<_175.MsgRestoreInterchainAccount>): _175.MsgRestoreInterchainAccount;
            fromAmino(object: _175.MsgRestoreInterchainAccountAmino): _175.MsgRestoreInterchainAccount;
            toAmino(message: _175.MsgRestoreInterchainAccount): _175.MsgRestoreInterchainAccountAmino;
            fromAminoMsg(object: _175.MsgRestoreInterchainAccountAminoMsg): _175.MsgRestoreInterchainAccount;
            toAminoMsg(message: _175.MsgRestoreInterchainAccount): _175.MsgRestoreInterchainAccountAminoMsg;
            fromProtoMsg(message: _175.MsgRestoreInterchainAccountProtoMsg): _175.MsgRestoreInterchainAccount;
            toProto(message: _175.MsgRestoreInterchainAccount): Uint8Array;
            toProtoMsg(message: _175.MsgRestoreInterchainAccount): _175.MsgRestoreInterchainAccountProtoMsg;
        };
        MsgRestoreInterchainAccountResponse: {
            typeUrl: string;
            encode(_: _175.MsgRestoreInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgRestoreInterchainAccountResponse;
            fromPartial(_: Partial<_175.MsgRestoreInterchainAccountResponse>): _175.MsgRestoreInterchainAccountResponse;
            fromAmino(_: _175.MsgRestoreInterchainAccountResponseAmino): _175.MsgRestoreInterchainAccountResponse;
            toAmino(_: _175.MsgRestoreInterchainAccountResponse): _175.MsgRestoreInterchainAccountResponseAmino;
            fromAminoMsg(object: _175.MsgRestoreInterchainAccountResponseAminoMsg): _175.MsgRestoreInterchainAccountResponse;
            fromProtoMsg(message: _175.MsgRestoreInterchainAccountResponseProtoMsg): _175.MsgRestoreInterchainAccountResponse;
            toProto(message: _175.MsgRestoreInterchainAccountResponse): Uint8Array;
            toProtoMsg(message: _175.MsgRestoreInterchainAccountResponse): _175.MsgRestoreInterchainAccountResponseProtoMsg;
        };
        MsgCloseDelegationChannel: {
            typeUrl: string;
            encode(message: _175.MsgCloseDelegationChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgCloseDelegationChannel;
            fromPartial(object: Partial<_175.MsgCloseDelegationChannel>): _175.MsgCloseDelegationChannel;
            fromAmino(object: _175.MsgCloseDelegationChannelAmino): _175.MsgCloseDelegationChannel;
            toAmino(message: _175.MsgCloseDelegationChannel): _175.MsgCloseDelegationChannelAmino;
            fromAminoMsg(object: _175.MsgCloseDelegationChannelAminoMsg): _175.MsgCloseDelegationChannel;
            fromProtoMsg(message: _175.MsgCloseDelegationChannelProtoMsg): _175.MsgCloseDelegationChannel;
            toProto(message: _175.MsgCloseDelegationChannel): Uint8Array;
            toProtoMsg(message: _175.MsgCloseDelegationChannel): _175.MsgCloseDelegationChannelProtoMsg;
        };
        MsgCloseDelegationChannelResponse: {
            typeUrl: string;
            encode(_: _175.MsgCloseDelegationChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgCloseDelegationChannelResponse;
            fromPartial(_: Partial<_175.MsgCloseDelegationChannelResponse>): _175.MsgCloseDelegationChannelResponse;
            fromAmino(_: _175.MsgCloseDelegationChannelResponseAmino): _175.MsgCloseDelegationChannelResponse;
            toAmino(_: _175.MsgCloseDelegationChannelResponse): _175.MsgCloseDelegationChannelResponseAmino;
            fromAminoMsg(object: _175.MsgCloseDelegationChannelResponseAminoMsg): _175.MsgCloseDelegationChannelResponse;
            fromProtoMsg(message: _175.MsgCloseDelegationChannelResponseProtoMsg): _175.MsgCloseDelegationChannelResponse;
            toProto(message: _175.MsgCloseDelegationChannelResponse): Uint8Array;
            toProtoMsg(message: _175.MsgCloseDelegationChannelResponse): _175.MsgCloseDelegationChannelResponseProtoMsg;
        };
        MsgUpdateValidatorSharesExchRate: {
            typeUrl: string;
            encode(message: _175.MsgUpdateValidatorSharesExchRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgUpdateValidatorSharesExchRate;
            fromPartial(object: Partial<_175.MsgUpdateValidatorSharesExchRate>): _175.MsgUpdateValidatorSharesExchRate;
            fromAmino(object: _175.MsgUpdateValidatorSharesExchRateAmino): _175.MsgUpdateValidatorSharesExchRate;
            toAmino(message: _175.MsgUpdateValidatorSharesExchRate): _175.MsgUpdateValidatorSharesExchRateAmino;
            fromAminoMsg(object: _175.MsgUpdateValidatorSharesExchRateAminoMsg): _175.MsgUpdateValidatorSharesExchRate;
            toAminoMsg(message: _175.MsgUpdateValidatorSharesExchRate): _175.MsgUpdateValidatorSharesExchRateAminoMsg;
            fromProtoMsg(message: _175.MsgUpdateValidatorSharesExchRateProtoMsg): _175.MsgUpdateValidatorSharesExchRate;
            toProto(message: _175.MsgUpdateValidatorSharesExchRate): Uint8Array;
            toProtoMsg(message: _175.MsgUpdateValidatorSharesExchRate): _175.MsgUpdateValidatorSharesExchRateProtoMsg;
        };
        MsgUpdateValidatorSharesExchRateResponse: {
            typeUrl: string;
            encode(_: _175.MsgUpdateValidatorSharesExchRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgUpdateValidatorSharesExchRateResponse;
            fromPartial(_: Partial<_175.MsgUpdateValidatorSharesExchRateResponse>): _175.MsgUpdateValidatorSharesExchRateResponse;
            fromAmino(_: _175.MsgUpdateValidatorSharesExchRateResponseAmino): _175.MsgUpdateValidatorSharesExchRateResponse;
            toAmino(_: _175.MsgUpdateValidatorSharesExchRateResponse): _175.MsgUpdateValidatorSharesExchRateResponseAmino;
            fromAminoMsg(object: _175.MsgUpdateValidatorSharesExchRateResponseAminoMsg): _175.MsgUpdateValidatorSharesExchRateResponse;
            fromProtoMsg(message: _175.MsgUpdateValidatorSharesExchRateResponseProtoMsg): _175.MsgUpdateValidatorSharesExchRateResponse;
            toProto(message: _175.MsgUpdateValidatorSharesExchRateResponse): Uint8Array;
            toProtoMsg(message: _175.MsgUpdateValidatorSharesExchRateResponse): _175.MsgUpdateValidatorSharesExchRateResponseProtoMsg;
        };
        MsgCalibrateDelegation: {
            typeUrl: string;
            encode(message: _175.MsgCalibrateDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgCalibrateDelegation;
            fromPartial(object: Partial<_175.MsgCalibrateDelegation>): _175.MsgCalibrateDelegation;
            fromAmino(object: _175.MsgCalibrateDelegationAmino): _175.MsgCalibrateDelegation;
            toAmino(message: _175.MsgCalibrateDelegation): _175.MsgCalibrateDelegationAmino;
            fromAminoMsg(object: _175.MsgCalibrateDelegationAminoMsg): _175.MsgCalibrateDelegation;
            fromProtoMsg(message: _175.MsgCalibrateDelegationProtoMsg): _175.MsgCalibrateDelegation;
            toProto(message: _175.MsgCalibrateDelegation): Uint8Array;
            toProtoMsg(message: _175.MsgCalibrateDelegation): _175.MsgCalibrateDelegationProtoMsg;
        };
        MsgCalibrateDelegationResponse: {
            typeUrl: string;
            encode(_: _175.MsgCalibrateDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgCalibrateDelegationResponse;
            fromPartial(_: Partial<_175.MsgCalibrateDelegationResponse>): _175.MsgCalibrateDelegationResponse;
            fromAmino(_: _175.MsgCalibrateDelegationResponseAmino): _175.MsgCalibrateDelegationResponse;
            toAmino(_: _175.MsgCalibrateDelegationResponse): _175.MsgCalibrateDelegationResponseAmino;
            fromAminoMsg(object: _175.MsgCalibrateDelegationResponseAminoMsg): _175.MsgCalibrateDelegationResponse;
            fromProtoMsg(message: _175.MsgCalibrateDelegationResponseProtoMsg): _175.MsgCalibrateDelegationResponse;
            toProto(message: _175.MsgCalibrateDelegationResponse): Uint8Array;
            toProtoMsg(message: _175.MsgCalibrateDelegationResponse): _175.MsgCalibrateDelegationResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _175.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgResumeHostZone;
            fromPartial(object: Partial<_175.MsgResumeHostZone>): _175.MsgResumeHostZone;
            fromAmino(object: _175.MsgResumeHostZoneAmino): _175.MsgResumeHostZone;
            toAmino(message: _175.MsgResumeHostZone): _175.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _175.MsgResumeHostZoneAminoMsg): _175.MsgResumeHostZone;
            fromProtoMsg(message: _175.MsgResumeHostZoneProtoMsg): _175.MsgResumeHostZone;
            toProto(message: _175.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _175.MsgResumeHostZone): _175.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _175.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_175.MsgResumeHostZoneResponse>): _175.MsgResumeHostZoneResponse;
            fromAmino(_: _175.MsgResumeHostZoneResponseAmino): _175.MsgResumeHostZoneResponse;
            toAmino(_: _175.MsgResumeHostZoneResponse): _175.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _175.MsgResumeHostZoneResponseAminoMsg): _175.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _175.MsgResumeHostZoneResponseProtoMsg): _175.MsgResumeHostZoneResponse;
            toProto(message: _175.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _175.MsgResumeHostZoneResponse): _175.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgCreateTradeRoute: {
            typeUrl: string;
            encode(message: _175.MsgCreateTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgCreateTradeRoute;
            fromPartial(object: Partial<_175.MsgCreateTradeRoute>): _175.MsgCreateTradeRoute;
            fromAmino(object: _175.MsgCreateTradeRouteAmino): _175.MsgCreateTradeRoute;
            toAmino(message: _175.MsgCreateTradeRoute): _175.MsgCreateTradeRouteAmino;
            fromAminoMsg(object: _175.MsgCreateTradeRouteAminoMsg): _175.MsgCreateTradeRoute;
            toAminoMsg(message: _175.MsgCreateTradeRoute): _175.MsgCreateTradeRouteAminoMsg;
            fromProtoMsg(message: _175.MsgCreateTradeRouteProtoMsg): _175.MsgCreateTradeRoute;
            toProto(message: _175.MsgCreateTradeRoute): Uint8Array;
            toProtoMsg(message: _175.MsgCreateTradeRoute): _175.MsgCreateTradeRouteProtoMsg;
        };
        MsgCreateTradeRouteResponse: {
            typeUrl: string;
            encode(_: _175.MsgCreateTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgCreateTradeRouteResponse;
            fromPartial(_: Partial<_175.MsgCreateTradeRouteResponse>): _175.MsgCreateTradeRouteResponse;
            fromAmino(_: _175.MsgCreateTradeRouteResponseAmino): _175.MsgCreateTradeRouteResponse;
            toAmino(_: _175.MsgCreateTradeRouteResponse): _175.MsgCreateTradeRouteResponseAmino;
            fromAminoMsg(object: _175.MsgCreateTradeRouteResponseAminoMsg): _175.MsgCreateTradeRouteResponse;
            fromProtoMsg(message: _175.MsgCreateTradeRouteResponseProtoMsg): _175.MsgCreateTradeRouteResponse;
            toProto(message: _175.MsgCreateTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _175.MsgCreateTradeRouteResponse): _175.MsgCreateTradeRouteResponseProtoMsg;
        };
        MsgDeleteTradeRoute: {
            typeUrl: string;
            encode(message: _175.MsgDeleteTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgDeleteTradeRoute;
            fromPartial(object: Partial<_175.MsgDeleteTradeRoute>): _175.MsgDeleteTradeRoute;
            fromAmino(object: _175.MsgDeleteTradeRouteAmino): _175.MsgDeleteTradeRoute;
            toAmino(message: _175.MsgDeleteTradeRoute): _175.MsgDeleteTradeRouteAmino;
            fromAminoMsg(object: _175.MsgDeleteTradeRouteAminoMsg): _175.MsgDeleteTradeRoute;
            toAminoMsg(message: _175.MsgDeleteTradeRoute): _175.MsgDeleteTradeRouteAminoMsg;
            fromProtoMsg(message: _175.MsgDeleteTradeRouteProtoMsg): _175.MsgDeleteTradeRoute;
            toProto(message: _175.MsgDeleteTradeRoute): Uint8Array;
            toProtoMsg(message: _175.MsgDeleteTradeRoute): _175.MsgDeleteTradeRouteProtoMsg;
        };
        MsgDeleteTradeRouteResponse: {
            typeUrl: string;
            encode(_: _175.MsgDeleteTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgDeleteTradeRouteResponse;
            fromPartial(_: Partial<_175.MsgDeleteTradeRouteResponse>): _175.MsgDeleteTradeRouteResponse;
            fromAmino(_: _175.MsgDeleteTradeRouteResponseAmino): _175.MsgDeleteTradeRouteResponse;
            toAmino(_: _175.MsgDeleteTradeRouteResponse): _175.MsgDeleteTradeRouteResponseAmino;
            fromAminoMsg(object: _175.MsgDeleteTradeRouteResponseAminoMsg): _175.MsgDeleteTradeRouteResponse;
            fromProtoMsg(message: _175.MsgDeleteTradeRouteResponseProtoMsg): _175.MsgDeleteTradeRouteResponse;
            toProto(message: _175.MsgDeleteTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _175.MsgDeleteTradeRouteResponse): _175.MsgDeleteTradeRouteResponseProtoMsg;
        };
        MsgUpdateTradeRoute: {
            typeUrl: string;
            encode(message: _175.MsgUpdateTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgUpdateTradeRoute;
            fromPartial(object: Partial<_175.MsgUpdateTradeRoute>): _175.MsgUpdateTradeRoute;
            fromAmino(object: _175.MsgUpdateTradeRouteAmino): _175.MsgUpdateTradeRoute;
            toAmino(message: _175.MsgUpdateTradeRoute): _175.MsgUpdateTradeRouteAmino;
            fromAminoMsg(object: _175.MsgUpdateTradeRouteAminoMsg): _175.MsgUpdateTradeRoute;
            toAminoMsg(message: _175.MsgUpdateTradeRoute): _175.MsgUpdateTradeRouteAminoMsg;
            fromProtoMsg(message: _175.MsgUpdateTradeRouteProtoMsg): _175.MsgUpdateTradeRoute;
            toProto(message: _175.MsgUpdateTradeRoute): Uint8Array;
            toProtoMsg(message: _175.MsgUpdateTradeRoute): _175.MsgUpdateTradeRouteProtoMsg;
        };
        MsgUpdateTradeRouteResponse: {
            typeUrl: string;
            encode(_: _175.MsgUpdateTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgUpdateTradeRouteResponse;
            fromPartial(_: Partial<_175.MsgUpdateTradeRouteResponse>): _175.MsgUpdateTradeRouteResponse;
            fromAmino(_: _175.MsgUpdateTradeRouteResponseAmino): _175.MsgUpdateTradeRouteResponse;
            toAmino(_: _175.MsgUpdateTradeRouteResponse): _175.MsgUpdateTradeRouteResponseAmino;
            fromAminoMsg(object: _175.MsgUpdateTradeRouteResponseAminoMsg): _175.MsgUpdateTradeRouteResponse;
            fromProtoMsg(message: _175.MsgUpdateTradeRouteResponseProtoMsg): _175.MsgUpdateTradeRouteResponse;
            toProto(message: _175.MsgUpdateTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _175.MsgUpdateTradeRouteResponse): _175.MsgUpdateTradeRouteResponseProtoMsg;
        };
        MsgSetCommunityPoolRebate: {
            typeUrl: string;
            encode(message: _175.MsgSetCommunityPoolRebate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgSetCommunityPoolRebate;
            fromPartial(object: Partial<_175.MsgSetCommunityPoolRebate>): _175.MsgSetCommunityPoolRebate;
            fromAmino(object: _175.MsgSetCommunityPoolRebateAmino): _175.MsgSetCommunityPoolRebate;
            toAmino(message: _175.MsgSetCommunityPoolRebate): _175.MsgSetCommunityPoolRebateAmino;
            fromAminoMsg(object: _175.MsgSetCommunityPoolRebateAminoMsg): _175.MsgSetCommunityPoolRebate;
            toAminoMsg(message: _175.MsgSetCommunityPoolRebate): _175.MsgSetCommunityPoolRebateAminoMsg;
            fromProtoMsg(message: _175.MsgSetCommunityPoolRebateProtoMsg): _175.MsgSetCommunityPoolRebate;
            toProto(message: _175.MsgSetCommunityPoolRebate): Uint8Array;
            toProtoMsg(message: _175.MsgSetCommunityPoolRebate): _175.MsgSetCommunityPoolRebateProtoMsg;
        };
        MsgSetCommunityPoolRebateResponse: {
            typeUrl: string;
            encode(_: _175.MsgSetCommunityPoolRebateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgSetCommunityPoolRebateResponse;
            fromPartial(_: Partial<_175.MsgSetCommunityPoolRebateResponse>): _175.MsgSetCommunityPoolRebateResponse;
            fromAmino(_: _175.MsgSetCommunityPoolRebateResponseAmino): _175.MsgSetCommunityPoolRebateResponse;
            toAmino(_: _175.MsgSetCommunityPoolRebateResponse): _175.MsgSetCommunityPoolRebateResponseAmino;
            fromAminoMsg(object: _175.MsgSetCommunityPoolRebateResponseAminoMsg): _175.MsgSetCommunityPoolRebateResponse;
            fromProtoMsg(message: _175.MsgSetCommunityPoolRebateResponseProtoMsg): _175.MsgSetCommunityPoolRebateResponse;
            toProto(message: _175.MsgSetCommunityPoolRebateResponse): Uint8Array;
            toProtoMsg(message: _175.MsgSetCommunityPoolRebateResponse): _175.MsgSetCommunityPoolRebateResponseProtoMsg;
        };
        MsgToggleTradeController: {
            typeUrl: string;
            encode(message: _175.MsgToggleTradeController, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgToggleTradeController;
            fromPartial(object: Partial<_175.MsgToggleTradeController>): _175.MsgToggleTradeController;
            fromAmino(object: _175.MsgToggleTradeControllerAmino): _175.MsgToggleTradeController;
            toAmino(message: _175.MsgToggleTradeController): _175.MsgToggleTradeControllerAmino;
            fromAminoMsg(object: _175.MsgToggleTradeControllerAminoMsg): _175.MsgToggleTradeController;
            toAminoMsg(message: _175.MsgToggleTradeController): _175.MsgToggleTradeControllerAminoMsg;
            fromProtoMsg(message: _175.MsgToggleTradeControllerProtoMsg): _175.MsgToggleTradeController;
            toProto(message: _175.MsgToggleTradeController): Uint8Array;
            toProtoMsg(message: _175.MsgToggleTradeController): _175.MsgToggleTradeControllerProtoMsg;
        };
        MsgToggleTradeControllerResponse: {
            typeUrl: string;
            encode(_: _175.MsgToggleTradeControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgToggleTradeControllerResponse;
            fromPartial(_: Partial<_175.MsgToggleTradeControllerResponse>): _175.MsgToggleTradeControllerResponse;
            fromAmino(_: _175.MsgToggleTradeControllerResponseAmino): _175.MsgToggleTradeControllerResponse;
            toAmino(_: _175.MsgToggleTradeControllerResponse): _175.MsgToggleTradeControllerResponseAmino;
            fromAminoMsg(object: _175.MsgToggleTradeControllerResponseAminoMsg): _175.MsgToggleTradeControllerResponse;
            fromProtoMsg(message: _175.MsgToggleTradeControllerResponseProtoMsg): _175.MsgToggleTradeControllerResponse;
            toProto(message: _175.MsgToggleTradeControllerResponse): Uint8Array;
            toProtoMsg(message: _175.MsgToggleTradeControllerResponse): _175.MsgToggleTradeControllerResponseProtoMsg;
        };
        MsgUpdateHostZoneParams: {
            typeUrl: string;
            encode(message: _175.MsgUpdateHostZoneParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgUpdateHostZoneParams;
            fromPartial(object: Partial<_175.MsgUpdateHostZoneParams>): _175.MsgUpdateHostZoneParams;
            fromAmino(object: _175.MsgUpdateHostZoneParamsAmino): _175.MsgUpdateHostZoneParams;
            toAmino(message: _175.MsgUpdateHostZoneParams): _175.MsgUpdateHostZoneParamsAmino;
            fromAminoMsg(object: _175.MsgUpdateHostZoneParamsAminoMsg): _175.MsgUpdateHostZoneParams;
            toAminoMsg(message: _175.MsgUpdateHostZoneParams): _175.MsgUpdateHostZoneParamsAminoMsg;
            fromProtoMsg(message: _175.MsgUpdateHostZoneParamsProtoMsg): _175.MsgUpdateHostZoneParams;
            toProto(message: _175.MsgUpdateHostZoneParams): Uint8Array;
            toProtoMsg(message: _175.MsgUpdateHostZoneParams): _175.MsgUpdateHostZoneParamsProtoMsg;
        };
        MsgUpdateHostZoneParamsResponse: {
            typeUrl: string;
            encode(_: _175.MsgUpdateHostZoneParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgUpdateHostZoneParamsResponse;
            fromPartial(_: Partial<_175.MsgUpdateHostZoneParamsResponse>): _175.MsgUpdateHostZoneParamsResponse;
            fromAmino(_: _175.MsgUpdateHostZoneParamsResponseAmino): _175.MsgUpdateHostZoneParamsResponse;
            toAmino(_: _175.MsgUpdateHostZoneParamsResponse): _175.MsgUpdateHostZoneParamsResponseAmino;
            fromAminoMsg(object: _175.MsgUpdateHostZoneParamsResponseAminoMsg): _175.MsgUpdateHostZoneParamsResponse;
            fromProtoMsg(message: _175.MsgUpdateHostZoneParamsResponseProtoMsg): _175.MsgUpdateHostZoneParamsResponse;
            toProto(message: _175.MsgUpdateHostZoneParamsResponse): Uint8Array;
            toProtoMsg(message: _175.MsgUpdateHostZoneParamsResponse): _175.MsgUpdateHostZoneParamsResponseProtoMsg;
        };
        TradeConfig: {
            typeUrl: string;
            encode(message: _174.TradeConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.TradeConfig;
            fromPartial(object: Partial<_174.TradeConfig>): _174.TradeConfig;
            fromAmino(object: _174.TradeConfigAmino): _174.TradeConfig;
            toAmino(message: _174.TradeConfig): _174.TradeConfigAmino;
            fromAminoMsg(object: _174.TradeConfigAminoMsg): _174.TradeConfig;
            fromProtoMsg(message: _174.TradeConfigProtoMsg): _174.TradeConfig;
            toProto(message: _174.TradeConfig): Uint8Array;
            toProtoMsg(message: _174.TradeConfig): _174.TradeConfigProtoMsg;
        };
        TradeRoute: {
            typeUrl: string;
            encode(message: _174.TradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.TradeRoute;
            fromPartial(object: Partial<_174.TradeRoute>): _174.TradeRoute;
            fromAmino(object: _174.TradeRouteAmino): _174.TradeRoute;
            toAmino(message: _174.TradeRoute): _174.TradeRouteAmino;
            fromAminoMsg(object: _174.TradeRouteAminoMsg): _174.TradeRoute;
            fromProtoMsg(message: _174.TradeRouteProtoMsg): _174.TradeRoute;
            toProto(message: _174.TradeRoute): Uint8Array;
            toProtoMsg(message: _174.TradeRoute): _174.TradeRouteProtoMsg;
        };
        QueryInterchainAccountFromAddressRequest: {
            typeUrl: string;
            encode(message: _173.QueryInterchainAccountFromAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryInterchainAccountFromAddressRequest;
            fromPartial(object: Partial<_173.QueryInterchainAccountFromAddressRequest>): _173.QueryInterchainAccountFromAddressRequest;
            fromAmino(object: _173.QueryInterchainAccountFromAddressRequestAmino): _173.QueryInterchainAccountFromAddressRequest;
            toAmino(message: _173.QueryInterchainAccountFromAddressRequest): _173.QueryInterchainAccountFromAddressRequestAmino;
            fromAminoMsg(object: _173.QueryInterchainAccountFromAddressRequestAminoMsg): _173.QueryInterchainAccountFromAddressRequest;
            fromProtoMsg(message: _173.QueryInterchainAccountFromAddressRequestProtoMsg): _173.QueryInterchainAccountFromAddressRequest;
            toProto(message: _173.QueryInterchainAccountFromAddressRequest): Uint8Array;
            toProtoMsg(message: _173.QueryInterchainAccountFromAddressRequest): _173.QueryInterchainAccountFromAddressRequestProtoMsg;
        };
        QueryInterchainAccountFromAddressResponse: {
            typeUrl: string;
            encode(message: _173.QueryInterchainAccountFromAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryInterchainAccountFromAddressResponse;
            fromPartial(object: Partial<_173.QueryInterchainAccountFromAddressResponse>): _173.QueryInterchainAccountFromAddressResponse;
            fromAmino(object: _173.QueryInterchainAccountFromAddressResponseAmino): _173.QueryInterchainAccountFromAddressResponse;
            toAmino(message: _173.QueryInterchainAccountFromAddressResponse): _173.QueryInterchainAccountFromAddressResponseAmino;
            fromAminoMsg(object: _173.QueryInterchainAccountFromAddressResponseAminoMsg): _173.QueryInterchainAccountFromAddressResponse;
            fromProtoMsg(message: _173.QueryInterchainAccountFromAddressResponseProtoMsg): _173.QueryInterchainAccountFromAddressResponse;
            toProto(message: _173.QueryInterchainAccountFromAddressResponse): Uint8Array;
            toProtoMsg(message: _173.QueryInterchainAccountFromAddressResponse): _173.QueryInterchainAccountFromAddressResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _173.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryParamsRequest;
            fromPartial(_: Partial<_173.QueryParamsRequest>): _173.QueryParamsRequest;
            fromAmino(_: _173.QueryParamsRequestAmino): _173.QueryParamsRequest;
            toAmino(_: _173.QueryParamsRequest): _173.QueryParamsRequestAmino;
            fromAminoMsg(object: _173.QueryParamsRequestAminoMsg): _173.QueryParamsRequest;
            fromProtoMsg(message: _173.QueryParamsRequestProtoMsg): _173.QueryParamsRequest;
            toProto(message: _173.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _173.QueryParamsRequest): _173.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _173.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryParamsResponse;
            fromPartial(object: Partial<_173.QueryParamsResponse>): _173.QueryParamsResponse;
            fromAmino(object: _173.QueryParamsResponseAmino): _173.QueryParamsResponse;
            toAmino(message: _173.QueryParamsResponse): _173.QueryParamsResponseAmino;
            fromAminoMsg(object: _173.QueryParamsResponseAminoMsg): _173.QueryParamsResponse;
            fromProtoMsg(message: _173.QueryParamsResponseProtoMsg): _173.QueryParamsResponse;
            toProto(message: _173.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _173.QueryParamsResponse): _173.QueryParamsResponseProtoMsg;
        };
        QueryGetValidatorsRequest: {
            typeUrl: string;
            encode(message: _173.QueryGetValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryGetValidatorsRequest;
            fromPartial(object: Partial<_173.QueryGetValidatorsRequest>): _173.QueryGetValidatorsRequest;
            fromAmino(object: _173.QueryGetValidatorsRequestAmino): _173.QueryGetValidatorsRequest;
            toAmino(message: _173.QueryGetValidatorsRequest): _173.QueryGetValidatorsRequestAmino;
            fromAminoMsg(object: _173.QueryGetValidatorsRequestAminoMsg): _173.QueryGetValidatorsRequest;
            fromProtoMsg(message: _173.QueryGetValidatorsRequestProtoMsg): _173.QueryGetValidatorsRequest;
            toProto(message: _173.QueryGetValidatorsRequest): Uint8Array;
            toProtoMsg(message: _173.QueryGetValidatorsRequest): _173.QueryGetValidatorsRequestProtoMsg;
        };
        QueryGetValidatorsResponse: {
            typeUrl: string;
            encode(message: _173.QueryGetValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryGetValidatorsResponse;
            fromPartial(object: Partial<_173.QueryGetValidatorsResponse>): _173.QueryGetValidatorsResponse;
            fromAmino(object: _173.QueryGetValidatorsResponseAmino): _173.QueryGetValidatorsResponse;
            toAmino(message: _173.QueryGetValidatorsResponse): _173.QueryGetValidatorsResponseAmino;
            fromAminoMsg(object: _173.QueryGetValidatorsResponseAminoMsg): _173.QueryGetValidatorsResponse;
            fromProtoMsg(message: _173.QueryGetValidatorsResponseProtoMsg): _173.QueryGetValidatorsResponse;
            toProto(message: _173.QueryGetValidatorsResponse): Uint8Array;
            toProtoMsg(message: _173.QueryGetValidatorsResponse): _173.QueryGetValidatorsResponseProtoMsg;
        };
        QueryGetHostZoneRequest: {
            typeUrl: string;
            encode(message: _173.QueryGetHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryGetHostZoneRequest;
            fromPartial(object: Partial<_173.QueryGetHostZoneRequest>): _173.QueryGetHostZoneRequest;
            fromAmino(object: _173.QueryGetHostZoneRequestAmino): _173.QueryGetHostZoneRequest;
            toAmino(message: _173.QueryGetHostZoneRequest): _173.QueryGetHostZoneRequestAmino;
            fromAminoMsg(object: _173.QueryGetHostZoneRequestAminoMsg): _173.QueryGetHostZoneRequest;
            fromProtoMsg(message: _173.QueryGetHostZoneRequestProtoMsg): _173.QueryGetHostZoneRequest;
            toProto(message: _173.QueryGetHostZoneRequest): Uint8Array;
            toProtoMsg(message: _173.QueryGetHostZoneRequest): _173.QueryGetHostZoneRequestProtoMsg;
        };
        QueryGetHostZoneResponse: {
            typeUrl: string;
            encode(message: _173.QueryGetHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryGetHostZoneResponse;
            fromPartial(object: Partial<_173.QueryGetHostZoneResponse>): _173.QueryGetHostZoneResponse;
            fromAmino(object: _173.QueryGetHostZoneResponseAmino): _173.QueryGetHostZoneResponse;
            toAmino(message: _173.QueryGetHostZoneResponse): _173.QueryGetHostZoneResponseAmino;
            fromAminoMsg(object: _173.QueryGetHostZoneResponseAminoMsg): _173.QueryGetHostZoneResponse;
            fromProtoMsg(message: _173.QueryGetHostZoneResponseProtoMsg): _173.QueryGetHostZoneResponse;
            toProto(message: _173.QueryGetHostZoneResponse): Uint8Array;
            toProtoMsg(message: _173.QueryGetHostZoneResponse): _173.QueryGetHostZoneResponseProtoMsg;
        };
        QueryAllHostZoneRequest: {
            typeUrl: string;
            encode(message: _173.QueryAllHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryAllHostZoneRequest;
            fromPartial(object: Partial<_173.QueryAllHostZoneRequest>): _173.QueryAllHostZoneRequest;
            fromAmino(object: _173.QueryAllHostZoneRequestAmino): _173.QueryAllHostZoneRequest;
            toAmino(message: _173.QueryAllHostZoneRequest): _173.QueryAllHostZoneRequestAmino;
            fromAminoMsg(object: _173.QueryAllHostZoneRequestAminoMsg): _173.QueryAllHostZoneRequest;
            fromProtoMsg(message: _173.QueryAllHostZoneRequestProtoMsg): _173.QueryAllHostZoneRequest;
            toProto(message: _173.QueryAllHostZoneRequest): Uint8Array;
            toProtoMsg(message: _173.QueryAllHostZoneRequest): _173.QueryAllHostZoneRequestProtoMsg;
        };
        QueryAllHostZoneResponse: {
            typeUrl: string;
            encode(message: _173.QueryAllHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryAllHostZoneResponse;
            fromPartial(object: Partial<_173.QueryAllHostZoneResponse>): _173.QueryAllHostZoneResponse;
            fromAmino(object: _173.QueryAllHostZoneResponseAmino): _173.QueryAllHostZoneResponse;
            toAmino(message: _173.QueryAllHostZoneResponse): _173.QueryAllHostZoneResponseAmino;
            fromAminoMsg(object: _173.QueryAllHostZoneResponseAminoMsg): _173.QueryAllHostZoneResponse;
            fromProtoMsg(message: _173.QueryAllHostZoneResponseProtoMsg): _173.QueryAllHostZoneResponse;
            toProto(message: _173.QueryAllHostZoneResponse): Uint8Array;
            toProtoMsg(message: _173.QueryAllHostZoneResponse): _173.QueryAllHostZoneResponseProtoMsg;
        };
        QueryModuleAddressRequest: {
            typeUrl: string;
            encode(message: _173.QueryModuleAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryModuleAddressRequest;
            fromPartial(object: Partial<_173.QueryModuleAddressRequest>): _173.QueryModuleAddressRequest;
            fromAmino(object: _173.QueryModuleAddressRequestAmino): _173.QueryModuleAddressRequest;
            toAmino(message: _173.QueryModuleAddressRequest): _173.QueryModuleAddressRequestAmino;
            fromAminoMsg(object: _173.QueryModuleAddressRequestAminoMsg): _173.QueryModuleAddressRequest;
            fromProtoMsg(message: _173.QueryModuleAddressRequestProtoMsg): _173.QueryModuleAddressRequest;
            toProto(message: _173.QueryModuleAddressRequest): Uint8Array;
            toProtoMsg(message: _173.QueryModuleAddressRequest): _173.QueryModuleAddressRequestProtoMsg;
        };
        QueryModuleAddressResponse: {
            typeUrl: string;
            encode(message: _173.QueryModuleAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryModuleAddressResponse;
            fromPartial(object: Partial<_173.QueryModuleAddressResponse>): _173.QueryModuleAddressResponse;
            fromAmino(object: _173.QueryModuleAddressResponseAmino): _173.QueryModuleAddressResponse;
            toAmino(message: _173.QueryModuleAddressResponse): _173.QueryModuleAddressResponseAmino;
            fromAminoMsg(object: _173.QueryModuleAddressResponseAminoMsg): _173.QueryModuleAddressResponse;
            fromProtoMsg(message: _173.QueryModuleAddressResponseProtoMsg): _173.QueryModuleAddressResponse;
            toProto(message: _173.QueryModuleAddressResponse): Uint8Array;
            toProtoMsg(message: _173.QueryModuleAddressResponse): _173.QueryModuleAddressResponseProtoMsg;
        };
        QueryGetEpochTrackerRequest: {
            typeUrl: string;
            encode(message: _173.QueryGetEpochTrackerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryGetEpochTrackerRequest;
            fromPartial(object: Partial<_173.QueryGetEpochTrackerRequest>): _173.QueryGetEpochTrackerRequest;
            fromAmino(object: _173.QueryGetEpochTrackerRequestAmino): _173.QueryGetEpochTrackerRequest;
            toAmino(message: _173.QueryGetEpochTrackerRequest): _173.QueryGetEpochTrackerRequestAmino;
            fromAminoMsg(object: _173.QueryGetEpochTrackerRequestAminoMsg): _173.QueryGetEpochTrackerRequest;
            fromProtoMsg(message: _173.QueryGetEpochTrackerRequestProtoMsg): _173.QueryGetEpochTrackerRequest;
            toProto(message: _173.QueryGetEpochTrackerRequest): Uint8Array;
            toProtoMsg(message: _173.QueryGetEpochTrackerRequest): _173.QueryGetEpochTrackerRequestProtoMsg;
        };
        QueryGetEpochTrackerResponse: {
            typeUrl: string;
            encode(message: _173.QueryGetEpochTrackerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryGetEpochTrackerResponse;
            fromPartial(object: Partial<_173.QueryGetEpochTrackerResponse>): _173.QueryGetEpochTrackerResponse;
            fromAmino(object: _173.QueryGetEpochTrackerResponseAmino): _173.QueryGetEpochTrackerResponse;
            toAmino(message: _173.QueryGetEpochTrackerResponse): _173.QueryGetEpochTrackerResponseAmino;
            fromAminoMsg(object: _173.QueryGetEpochTrackerResponseAminoMsg): _173.QueryGetEpochTrackerResponse;
            fromProtoMsg(message: _173.QueryGetEpochTrackerResponseProtoMsg): _173.QueryGetEpochTrackerResponse;
            toProto(message: _173.QueryGetEpochTrackerResponse): Uint8Array;
            toProtoMsg(message: _173.QueryGetEpochTrackerResponse): _173.QueryGetEpochTrackerResponseProtoMsg;
        };
        QueryAllEpochTrackerRequest: {
            typeUrl: string;
            encode(_: _173.QueryAllEpochTrackerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryAllEpochTrackerRequest;
            fromPartial(_: Partial<_173.QueryAllEpochTrackerRequest>): _173.QueryAllEpochTrackerRequest;
            fromAmino(_: _173.QueryAllEpochTrackerRequestAmino): _173.QueryAllEpochTrackerRequest;
            toAmino(_: _173.QueryAllEpochTrackerRequest): _173.QueryAllEpochTrackerRequestAmino;
            fromAminoMsg(object: _173.QueryAllEpochTrackerRequestAminoMsg): _173.QueryAllEpochTrackerRequest;
            fromProtoMsg(message: _173.QueryAllEpochTrackerRequestProtoMsg): _173.QueryAllEpochTrackerRequest;
            toProto(message: _173.QueryAllEpochTrackerRequest): Uint8Array;
            toProtoMsg(message: _173.QueryAllEpochTrackerRequest): _173.QueryAllEpochTrackerRequestProtoMsg;
        };
        QueryAllEpochTrackerResponse: {
            typeUrl: string;
            encode(message: _173.QueryAllEpochTrackerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryAllEpochTrackerResponse;
            fromPartial(object: Partial<_173.QueryAllEpochTrackerResponse>): _173.QueryAllEpochTrackerResponse;
            fromAmino(object: _173.QueryAllEpochTrackerResponseAmino): _173.QueryAllEpochTrackerResponse;
            toAmino(message: _173.QueryAllEpochTrackerResponse): _173.QueryAllEpochTrackerResponseAmino;
            fromAminoMsg(object: _173.QueryAllEpochTrackerResponseAminoMsg): _173.QueryAllEpochTrackerResponse;
            fromProtoMsg(message: _173.QueryAllEpochTrackerResponseProtoMsg): _173.QueryAllEpochTrackerResponse;
            toProto(message: _173.QueryAllEpochTrackerResponse): Uint8Array;
            toProtoMsg(message: _173.QueryAllEpochTrackerResponse): _173.QueryAllEpochTrackerResponseProtoMsg;
        };
        QueryGetNextPacketSequenceRequest: {
            typeUrl: string;
            encode(message: _173.QueryGetNextPacketSequenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryGetNextPacketSequenceRequest;
            fromPartial(object: Partial<_173.QueryGetNextPacketSequenceRequest>): _173.QueryGetNextPacketSequenceRequest;
            fromAmino(object: _173.QueryGetNextPacketSequenceRequestAmino): _173.QueryGetNextPacketSequenceRequest;
            toAmino(message: _173.QueryGetNextPacketSequenceRequest): _173.QueryGetNextPacketSequenceRequestAmino;
            fromAminoMsg(object: _173.QueryGetNextPacketSequenceRequestAminoMsg): _173.QueryGetNextPacketSequenceRequest;
            fromProtoMsg(message: _173.QueryGetNextPacketSequenceRequestProtoMsg): _173.QueryGetNextPacketSequenceRequest;
            toProto(message: _173.QueryGetNextPacketSequenceRequest): Uint8Array;
            toProtoMsg(message: _173.QueryGetNextPacketSequenceRequest): _173.QueryGetNextPacketSequenceRequestProtoMsg;
        };
        QueryGetNextPacketSequenceResponse: {
            typeUrl: string;
            encode(message: _173.QueryGetNextPacketSequenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryGetNextPacketSequenceResponse;
            fromPartial(object: Partial<_173.QueryGetNextPacketSequenceResponse>): _173.QueryGetNextPacketSequenceResponse;
            fromAmino(object: _173.QueryGetNextPacketSequenceResponseAmino): _173.QueryGetNextPacketSequenceResponse;
            toAmino(message: _173.QueryGetNextPacketSequenceResponse): _173.QueryGetNextPacketSequenceResponseAmino;
            fromAminoMsg(object: _173.QueryGetNextPacketSequenceResponseAminoMsg): _173.QueryGetNextPacketSequenceResponse;
            fromProtoMsg(message: _173.QueryGetNextPacketSequenceResponseProtoMsg): _173.QueryGetNextPacketSequenceResponse;
            toProto(message: _173.QueryGetNextPacketSequenceResponse): Uint8Array;
            toProtoMsg(message: _173.QueryGetNextPacketSequenceResponse): _173.QueryGetNextPacketSequenceResponseProtoMsg;
        };
        QueryAddressUnbondings: {
            typeUrl: string;
            encode(message: _173.QueryAddressUnbondings, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryAddressUnbondings;
            fromPartial(object: Partial<_173.QueryAddressUnbondings>): _173.QueryAddressUnbondings;
            fromAmino(object: _173.QueryAddressUnbondingsAmino): _173.QueryAddressUnbondings;
            toAmino(message: _173.QueryAddressUnbondings): _173.QueryAddressUnbondingsAmino;
            fromAminoMsg(object: _173.QueryAddressUnbondingsAminoMsg): _173.QueryAddressUnbondings;
            fromProtoMsg(message: _173.QueryAddressUnbondingsProtoMsg): _173.QueryAddressUnbondings;
            toProto(message: _173.QueryAddressUnbondings): Uint8Array;
            toProtoMsg(message: _173.QueryAddressUnbondings): _173.QueryAddressUnbondingsProtoMsg;
        };
        QueryAddressUnbondingsResponse: {
            typeUrl: string;
            encode(message: _173.QueryAddressUnbondingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryAddressUnbondingsResponse;
            fromPartial(object: Partial<_173.QueryAddressUnbondingsResponse>): _173.QueryAddressUnbondingsResponse;
            fromAmino(object: _173.QueryAddressUnbondingsResponseAmino): _173.QueryAddressUnbondingsResponse;
            toAmino(message: _173.QueryAddressUnbondingsResponse): _173.QueryAddressUnbondingsResponseAmino;
            fromAminoMsg(object: _173.QueryAddressUnbondingsResponseAminoMsg): _173.QueryAddressUnbondingsResponse;
            fromProtoMsg(message: _173.QueryAddressUnbondingsResponseProtoMsg): _173.QueryAddressUnbondingsResponse;
            toProto(message: _173.QueryAddressUnbondingsResponse): Uint8Array;
            toProtoMsg(message: _173.QueryAddressUnbondingsResponse): _173.QueryAddressUnbondingsResponseProtoMsg;
        };
        QueryAllTradeRoutes: {
            typeUrl: string;
            encode(_: _173.QueryAllTradeRoutes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryAllTradeRoutes;
            fromPartial(_: Partial<_173.QueryAllTradeRoutes>): _173.QueryAllTradeRoutes;
            fromAmino(_: _173.QueryAllTradeRoutesAmino): _173.QueryAllTradeRoutes;
            toAmino(_: _173.QueryAllTradeRoutes): _173.QueryAllTradeRoutesAmino;
            fromAminoMsg(object: _173.QueryAllTradeRoutesAminoMsg): _173.QueryAllTradeRoutes;
            fromProtoMsg(message: _173.QueryAllTradeRoutesProtoMsg): _173.QueryAllTradeRoutes;
            toProto(message: _173.QueryAllTradeRoutes): Uint8Array;
            toProtoMsg(message: _173.QueryAllTradeRoutes): _173.QueryAllTradeRoutesProtoMsg;
        };
        QueryAllTradeRoutesResponse: {
            typeUrl: string;
            encode(message: _173.QueryAllTradeRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryAllTradeRoutesResponse;
            fromPartial(object: Partial<_173.QueryAllTradeRoutesResponse>): _173.QueryAllTradeRoutesResponse;
            fromAmino(object: _173.QueryAllTradeRoutesResponseAmino): _173.QueryAllTradeRoutesResponse;
            toAmino(message: _173.QueryAllTradeRoutesResponse): _173.QueryAllTradeRoutesResponseAmino;
            fromAminoMsg(object: _173.QueryAllTradeRoutesResponseAminoMsg): _173.QueryAllTradeRoutesResponse;
            fromProtoMsg(message: _173.QueryAllTradeRoutesResponseProtoMsg): _173.QueryAllTradeRoutesResponse;
            toProto(message: _173.QueryAllTradeRoutesResponse): Uint8Array;
            toProtoMsg(message: _173.QueryAllTradeRoutesResponse): _173.QueryAllTradeRoutesResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _172.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.Params;
            fromPartial(object: Partial<_172.Params>): _172.Params;
            fromAmino(object: _172.ParamsAmino): _172.Params;
            toAmino(message: _172.Params): _172.ParamsAmino;
            fromAminoMsg(object: _172.ParamsAminoMsg): _172.Params;
            fromProtoMsg(message: _172.ParamsProtoMsg): _172.Params;
            toProto(message: _172.Params): Uint8Array;
            toProtoMsg(message: _172.Params): _172.ParamsProtoMsg;
        };
        StakeibcPacketData: {
            typeUrl: string;
            encode(message: _171.StakeibcPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.StakeibcPacketData;
            fromPartial(object: Partial<_171.StakeibcPacketData>): _171.StakeibcPacketData;
            fromAmino(object: _171.StakeibcPacketDataAmino): _171.StakeibcPacketData;
            toAmino(message: _171.StakeibcPacketData): _171.StakeibcPacketDataAmino;
            fromAminoMsg(object: _171.StakeibcPacketDataAminoMsg): _171.StakeibcPacketData;
            fromProtoMsg(message: _171.StakeibcPacketDataProtoMsg): _171.StakeibcPacketData;
            toProto(message: _171.StakeibcPacketData): Uint8Array;
            toProtoMsg(message: _171.StakeibcPacketData): _171.StakeibcPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _171.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.NoData;
            fromPartial(_: Partial<_171.NoData>): _171.NoData;
            fromAmino(_: _171.NoDataAmino): _171.NoData;
            toAmino(_: _171.NoData): _171.NoDataAmino;
            fromAminoMsg(object: _171.NoDataAminoMsg): _171.NoData;
            fromProtoMsg(message: _171.NoDataProtoMsg): _171.NoData;
            toProto(message: _171.NoData): Uint8Array;
            toProtoMsg(message: _171.NoData): _171.NoDataProtoMsg;
        };
        iCAAccountTypeFromJSON(object: any): _170.ICAAccountType;
        iCAAccountTypeToJSON(object: _170.ICAAccountType): string;
        ICAAccountType: typeof _170.ICAAccountType;
        ICAAccountTypeSDKType: typeof _170.ICAAccountType;
        ICAAccountTypeAmino: typeof _170.ICAAccountType;
        ICAAccount: {
            typeUrl: string;
            encode(message: _170.ICAAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.ICAAccount;
            fromPartial(object: Partial<_170.ICAAccount>): _170.ICAAccount;
            fromAmino(object: _170.ICAAccountAmino): _170.ICAAccount;
            toAmino(message: _170.ICAAccount): _170.ICAAccountAmino;
            fromAminoMsg(object: _170.ICAAccountAminoMsg): _170.ICAAccount;
            fromProtoMsg(message: _170.ICAAccountProtoMsg): _170.ICAAccount;
            toProto(message: _170.ICAAccount): Uint8Array;
            toProtoMsg(message: _170.ICAAccount): _170.ICAAccountProtoMsg;
        };
        CommunityPoolRebate: {
            typeUrl: string;
            encode(message: _169.CommunityPoolRebate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.CommunityPoolRebate;
            fromPartial(object: Partial<_169.CommunityPoolRebate>): _169.CommunityPoolRebate;
            fromAmino(object: _169.CommunityPoolRebateAmino): _169.CommunityPoolRebate;
            toAmino(message: _169.CommunityPoolRebate): _169.CommunityPoolRebateAmino;
            fromAminoMsg(object: _169.CommunityPoolRebateAminoMsg): _169.CommunityPoolRebate;
            fromProtoMsg(message: _169.CommunityPoolRebateProtoMsg): _169.CommunityPoolRebate;
            toProto(message: _169.CommunityPoolRebate): Uint8Array;
            toProtoMsg(message: _169.CommunityPoolRebate): _169.CommunityPoolRebateProtoMsg;
        };
        HostZone: {
            typeUrl: string;
            encode(message: _169.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.HostZone;
            fromPartial(object: Partial<_169.HostZone>): _169.HostZone;
            fromAmino(object: _169.HostZoneAmino): _169.HostZone;
            toAmino(message: _169.HostZone): _169.HostZoneAmino;
            fromAminoMsg(object: _169.HostZoneAminoMsg): _169.HostZone;
            fromProtoMsg(message: _169.HostZoneProtoMsg): _169.HostZone;
            toProto(message: _169.HostZone): Uint8Array;
            toProtoMsg(message: _169.HostZone): _169.HostZoneProtoMsg;
        };
        AddValidatorsProposal: {
            typeUrl: string;
            encode(message: _168.AddValidatorsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.AddValidatorsProposal;
            fromPartial(object: Partial<_168.AddValidatorsProposal>): _168.AddValidatorsProposal;
            fromAmino(object: _168.AddValidatorsProposalAmino): _168.AddValidatorsProposal;
            toAmino(message: _168.AddValidatorsProposal): _168.AddValidatorsProposalAmino;
            fromAminoMsg(object: _168.AddValidatorsProposalAminoMsg): _168.AddValidatorsProposal;
            fromProtoMsg(message: _168.AddValidatorsProposalProtoMsg): _168.AddValidatorsProposal;
            toProto(message: _168.AddValidatorsProposal): Uint8Array;
            toProtoMsg(message: _168.AddValidatorsProposal): _168.AddValidatorsProposalProtoMsg;
        };
        ToggleLSMProposal: {
            typeUrl: string;
            encode(message: _168.ToggleLSMProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.ToggleLSMProposal;
            fromPartial(object: Partial<_168.ToggleLSMProposal>): _168.ToggleLSMProposal;
            fromAmino(object: _168.ToggleLSMProposalAmino): _168.ToggleLSMProposal;
            toAmino(message: _168.ToggleLSMProposal): _168.ToggleLSMProposalAmino;
            fromAminoMsg(object: _168.ToggleLSMProposalAminoMsg): _168.ToggleLSMProposal;
            fromProtoMsg(message: _168.ToggleLSMProposalProtoMsg): _168.ToggleLSMProposal;
            toProto(message: _168.ToggleLSMProposal): Uint8Array;
            toProtoMsg(message: _168.ToggleLSMProposal): _168.ToggleLSMProposalProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _167.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.GenesisState;
            fromPartial(object: Partial<_167.GenesisState>): _167.GenesisState;
            fromAmino(object: _167.GenesisStateAmino): _167.GenesisState;
            toAmino(message: _167.GenesisState): _167.GenesisStateAmino;
            fromAminoMsg(object: _167.GenesisStateAminoMsg): _167.GenesisState;
            fromProtoMsg(message: _167.GenesisStateProtoMsg): _167.GenesisState;
            toProto(message: _167.GenesisState): Uint8Array;
            toProtoMsg(message: _167.GenesisState): _167.GenesisStateProtoMsg;
        };
        EpochTracker: {
            typeUrl: string;
            encode(message: _166.EpochTracker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.EpochTracker;
            fromPartial(object: Partial<_166.EpochTracker>): _166.EpochTracker;
            fromAmino(object: _166.EpochTrackerAmino): _166.EpochTracker;
            toAmino(message: _166.EpochTracker): _166.EpochTrackerAmino;
            fromAminoMsg(object: _166.EpochTrackerAminoMsg): _166.EpochTracker;
            fromProtoMsg(message: _166.EpochTrackerProtoMsg): _166.EpochTracker;
            toProto(message: _166.EpochTracker): Uint8Array;
            toProtoMsg(message: _166.EpochTracker): _166.EpochTrackerProtoMsg;
        };
        SplitDelegation: {
            typeUrl: string;
            encode(message: _165.SplitDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.SplitDelegation;
            fromPartial(object: Partial<_165.SplitDelegation>): _165.SplitDelegation;
            fromAmino(object: _165.SplitDelegationAmino): _165.SplitDelegation;
            toAmino(message: _165.SplitDelegation): _165.SplitDelegationAmino;
            fromAminoMsg(object: _165.SplitDelegationAminoMsg): _165.SplitDelegation;
            fromProtoMsg(message: _165.SplitDelegationProtoMsg): _165.SplitDelegation;
            toProto(message: _165.SplitDelegation): Uint8Array;
            toProtoMsg(message: _165.SplitDelegation): _165.SplitDelegationProtoMsg;
        };
        SplitUndelegation: {
            typeUrl: string;
            encode(message: _165.SplitUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.SplitUndelegation;
            fromPartial(object: Partial<_165.SplitUndelegation>): _165.SplitUndelegation;
            fromAmino(object: _165.SplitUndelegationAmino): _165.SplitUndelegation;
            toAmino(message: _165.SplitUndelegation): _165.SplitUndelegationAmino;
            fromAminoMsg(object: _165.SplitUndelegationAminoMsg): _165.SplitUndelegation;
            fromProtoMsg(message: _165.SplitUndelegationProtoMsg): _165.SplitUndelegation;
            toProto(message: _165.SplitUndelegation): Uint8Array;
            toProtoMsg(message: _165.SplitUndelegation): _165.SplitUndelegationProtoMsg;
        };
        DelegateCallback: {
            typeUrl: string;
            encode(message: _165.DelegateCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.DelegateCallback;
            fromPartial(object: Partial<_165.DelegateCallback>): _165.DelegateCallback;
            fromAmino(object: _165.DelegateCallbackAmino): _165.DelegateCallback;
            toAmino(message: _165.DelegateCallback): _165.DelegateCallbackAmino;
            fromAminoMsg(object: _165.DelegateCallbackAminoMsg): _165.DelegateCallback;
            fromProtoMsg(message: _165.DelegateCallbackProtoMsg): _165.DelegateCallback;
            toProto(message: _165.DelegateCallback): Uint8Array;
            toProtoMsg(message: _165.DelegateCallback): _165.DelegateCallbackProtoMsg;
        };
        ClaimCallback: {
            typeUrl: string;
            encode(message: _165.ClaimCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.ClaimCallback;
            fromPartial(object: Partial<_165.ClaimCallback>): _165.ClaimCallback;
            fromAmino(object: _165.ClaimCallbackAmino): _165.ClaimCallback;
            toAmino(message: _165.ClaimCallback): _165.ClaimCallbackAmino;
            fromAminoMsg(object: _165.ClaimCallbackAminoMsg): _165.ClaimCallback;
            fromProtoMsg(message: _165.ClaimCallbackProtoMsg): _165.ClaimCallback;
            toProto(message: _165.ClaimCallback): Uint8Array;
            toProtoMsg(message: _165.ClaimCallback): _165.ClaimCallbackProtoMsg;
        };
        ReinvestCallback: {
            typeUrl: string;
            encode(message: _165.ReinvestCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.ReinvestCallback;
            fromPartial(object: Partial<_165.ReinvestCallback>): _165.ReinvestCallback;
            fromAmino(object: _165.ReinvestCallbackAmino): _165.ReinvestCallback;
            toAmino(message: _165.ReinvestCallback): _165.ReinvestCallbackAmino;
            fromAminoMsg(object: _165.ReinvestCallbackAminoMsg): _165.ReinvestCallback;
            fromProtoMsg(message: _165.ReinvestCallbackProtoMsg): _165.ReinvestCallback;
            toProto(message: _165.ReinvestCallback): Uint8Array;
            toProtoMsg(message: _165.ReinvestCallback): _165.ReinvestCallbackProtoMsg;
        };
        UndelegateCallback: {
            typeUrl: string;
            encode(message: _165.UndelegateCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.UndelegateCallback;
            fromPartial(object: Partial<_165.UndelegateCallback>): _165.UndelegateCallback;
            fromAmino(object: _165.UndelegateCallbackAmino): _165.UndelegateCallback;
            toAmino(message: _165.UndelegateCallback): _165.UndelegateCallbackAmino;
            fromAminoMsg(object: _165.UndelegateCallbackAminoMsg): _165.UndelegateCallback;
            fromProtoMsg(message: _165.UndelegateCallbackProtoMsg): _165.UndelegateCallback;
            toProto(message: _165.UndelegateCallback): Uint8Array;
            toProtoMsg(message: _165.UndelegateCallback): _165.UndelegateCallbackProtoMsg;
        };
        RedemptionCallback: {
            typeUrl: string;
            encode(message: _165.RedemptionCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.RedemptionCallback;
            fromPartial(object: Partial<_165.RedemptionCallback>): _165.RedemptionCallback;
            fromAmino(object: _165.RedemptionCallbackAmino): _165.RedemptionCallback;
            toAmino(message: _165.RedemptionCallback): _165.RedemptionCallbackAmino;
            fromAminoMsg(object: _165.RedemptionCallbackAminoMsg): _165.RedemptionCallback;
            fromProtoMsg(message: _165.RedemptionCallbackProtoMsg): _165.RedemptionCallback;
            toProto(message: _165.RedemptionCallback): Uint8Array;
            toProtoMsg(message: _165.RedemptionCallback): _165.RedemptionCallbackProtoMsg;
        };
        Rebalancing: {
            typeUrl: string;
            encode(message: _165.Rebalancing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.Rebalancing;
            fromPartial(object: Partial<_165.Rebalancing>): _165.Rebalancing;
            fromAmino(object: _165.RebalancingAmino): _165.Rebalancing;
            toAmino(message: _165.Rebalancing): _165.RebalancingAmino;
            fromAminoMsg(object: _165.RebalancingAminoMsg): _165.Rebalancing;
            fromProtoMsg(message: _165.RebalancingProtoMsg): _165.Rebalancing;
            toProto(message: _165.Rebalancing): Uint8Array;
            toProtoMsg(message: _165.Rebalancing): _165.RebalancingProtoMsg;
        };
        RebalanceCallback: {
            typeUrl: string;
            encode(message: _165.RebalanceCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.RebalanceCallback;
            fromPartial(object: Partial<_165.RebalanceCallback>): _165.RebalanceCallback;
            fromAmino(object: _165.RebalanceCallbackAmino): _165.RebalanceCallback;
            toAmino(message: _165.RebalanceCallback): _165.RebalanceCallbackAmino;
            fromAminoMsg(object: _165.RebalanceCallbackAminoMsg): _165.RebalanceCallback;
            fromProtoMsg(message: _165.RebalanceCallbackProtoMsg): _165.RebalanceCallback;
            toProto(message: _165.RebalanceCallback): Uint8Array;
            toProtoMsg(message: _165.RebalanceCallback): _165.RebalanceCallbackProtoMsg;
        };
        DetokenizeSharesCallback: {
            typeUrl: string;
            encode(message: _165.DetokenizeSharesCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.DetokenizeSharesCallback;
            fromPartial(object: Partial<_165.DetokenizeSharesCallback>): _165.DetokenizeSharesCallback;
            fromAmino(object: _165.DetokenizeSharesCallbackAmino): _165.DetokenizeSharesCallback;
            toAmino(message: _165.DetokenizeSharesCallback): _165.DetokenizeSharesCallbackAmino;
            fromAminoMsg(object: _165.DetokenizeSharesCallbackAminoMsg): _165.DetokenizeSharesCallback;
            fromProtoMsg(message: _165.DetokenizeSharesCallbackProtoMsg): _165.DetokenizeSharesCallback;
            toProto(message: _165.DetokenizeSharesCallback): Uint8Array;
            toProtoMsg(message: _165.DetokenizeSharesCallback): _165.DetokenizeSharesCallbackProtoMsg;
        };
        LSMLiquidStake: {
            typeUrl: string;
            encode(message: _165.LSMLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.LSMLiquidStake;
            fromPartial(object: Partial<_165.LSMLiquidStake>): _165.LSMLiquidStake;
            fromAmino(object: _165.LSMLiquidStakeAmino): _165.LSMLiquidStake;
            toAmino(message: _165.LSMLiquidStake): _165.LSMLiquidStakeAmino;
            fromAminoMsg(object: _165.LSMLiquidStakeAminoMsg): _165.LSMLiquidStake;
            fromProtoMsg(message: _165.LSMLiquidStakeProtoMsg): _165.LSMLiquidStake;
            toProto(message: _165.LSMLiquidStake): Uint8Array;
            toProtoMsg(message: _165.LSMLiquidStake): _165.LSMLiquidStakeProtoMsg;
        };
        ValidatorSharesToTokensQueryCallback: {
            typeUrl: string;
            encode(message: _165.ValidatorSharesToTokensQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.ValidatorSharesToTokensQueryCallback;
            fromPartial(object: Partial<_165.ValidatorSharesToTokensQueryCallback>): _165.ValidatorSharesToTokensQueryCallback;
            fromAmino(object: _165.ValidatorSharesToTokensQueryCallbackAmino): _165.ValidatorSharesToTokensQueryCallback;
            toAmino(message: _165.ValidatorSharesToTokensQueryCallback): _165.ValidatorSharesToTokensQueryCallbackAmino;
            fromAminoMsg(object: _165.ValidatorSharesToTokensQueryCallbackAminoMsg): _165.ValidatorSharesToTokensQueryCallback;
            fromProtoMsg(message: _165.ValidatorSharesToTokensQueryCallbackProtoMsg): _165.ValidatorSharesToTokensQueryCallback;
            toProto(message: _165.ValidatorSharesToTokensQueryCallback): Uint8Array;
            toProtoMsg(message: _165.ValidatorSharesToTokensQueryCallback): _165.ValidatorSharesToTokensQueryCallbackProtoMsg;
        };
        DelegatorSharesQueryCallback: {
            typeUrl: string;
            encode(message: _165.DelegatorSharesQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.DelegatorSharesQueryCallback;
            fromPartial(object: Partial<_165.DelegatorSharesQueryCallback>): _165.DelegatorSharesQueryCallback;
            fromAmino(object: _165.DelegatorSharesQueryCallbackAmino): _165.DelegatorSharesQueryCallback;
            toAmino(message: _165.DelegatorSharesQueryCallback): _165.DelegatorSharesQueryCallbackAmino;
            fromAminoMsg(object: _165.DelegatorSharesQueryCallbackAminoMsg): _165.DelegatorSharesQueryCallback;
            fromProtoMsg(message: _165.DelegatorSharesQueryCallbackProtoMsg): _165.DelegatorSharesQueryCallback;
            toProto(message: _165.DelegatorSharesQueryCallback): Uint8Array;
            toProtoMsg(message: _165.DelegatorSharesQueryCallback): _165.DelegatorSharesQueryCallbackProtoMsg;
        };
        CommunityPoolBalanceQueryCallback: {
            typeUrl: string;
            encode(message: _165.CommunityPoolBalanceQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.CommunityPoolBalanceQueryCallback;
            fromPartial(object: Partial<_165.CommunityPoolBalanceQueryCallback>): _165.CommunityPoolBalanceQueryCallback;
            fromAmino(object: _165.CommunityPoolBalanceQueryCallbackAmino): _165.CommunityPoolBalanceQueryCallback;
            toAmino(message: _165.CommunityPoolBalanceQueryCallback): _165.CommunityPoolBalanceQueryCallbackAmino;
            fromAminoMsg(object: _165.CommunityPoolBalanceQueryCallbackAminoMsg): _165.CommunityPoolBalanceQueryCallback;
            fromProtoMsg(message: _165.CommunityPoolBalanceQueryCallbackProtoMsg): _165.CommunityPoolBalanceQueryCallback;
            toProto(message: _165.CommunityPoolBalanceQueryCallback): Uint8Array;
            toProtoMsg(message: _165.CommunityPoolBalanceQueryCallback): _165.CommunityPoolBalanceQueryCallbackProtoMsg;
        };
        TradeRouteCallback: {
            typeUrl: string;
            encode(message: _165.TradeRouteCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.TradeRouteCallback;
            fromPartial(object: Partial<_165.TradeRouteCallback>): _165.TradeRouteCallback;
            fromAmino(object: _165.TradeRouteCallbackAmino): _165.TradeRouteCallback;
            toAmino(message: _165.TradeRouteCallback): _165.TradeRouteCallbackAmino;
            fromAminoMsg(object: _165.TradeRouteCallbackAminoMsg): _165.TradeRouteCallback;
            fromProtoMsg(message: _165.TradeRouteCallbackProtoMsg): _165.TradeRouteCallback;
            toProto(message: _165.TradeRouteCallback): Uint8Array;
            toProtoMsg(message: _165.TradeRouteCallback): _165.TradeRouteCallbackProtoMsg;
        };
        AddressUnbonding: {
            typeUrl: string;
            encode(message: _164.AddressUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.AddressUnbonding;
            fromPartial(object: Partial<_164.AddressUnbonding>): _164.AddressUnbonding;
            fromAmino(object: _164.AddressUnbondingAmino): _164.AddressUnbonding;
            toAmino(message: _164.AddressUnbonding): _164.AddressUnbondingAmino;
            fromAminoMsg(object: _164.AddressUnbondingAminoMsg): _164.AddressUnbonding;
            fromProtoMsg(message: _164.AddressUnbondingProtoMsg): _164.AddressUnbonding;
            toProto(message: _164.AddressUnbonding): Uint8Array;
            toProtoMsg(message: _164.AddressUnbonding): _164.AddressUnbondingProtoMsg;
        };
    };
    const staketia: {
        MsgClientImpl: typeof _295.MsgClientImpl;
        QueryClientImpl: typeof _288.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            hostZone(request?: _178.QueryHostZoneRequest): Promise<_178.QueryHostZoneResponse>;
            delegationRecords(request: _178.QueryDelegationRecordsRequest): Promise<_178.QueryDelegationRecordsResponse>;
            unbondingRecords(request: _178.QueryUnbondingRecordsRequest): Promise<_178.QueryUnbondingRecordsResponse>;
            redemptionRecord(request: _178.QueryRedemptionRecordRequest): Promise<_178.QueryRedemptionRecordResponse>;
            redemptionRecords(request: _178.QueryRedemptionRecordsRequest): Promise<_178.QueryRedemptionRecordsResponse>;
            slashRecords(request?: _178.QuerySlashRecordsRequest): Promise<_178.QuerySlashRecordsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _180.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _180.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmDelegation(value: _180.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUndelegation(value: _180.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUnbondedTokenSweep(value: _180.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                adjustDelegatedBalance(value: _180.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _180.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _180.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                refreshRedemptionRate(value: _180.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteDelegationRecord(value: _180.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteUnbondingRecord(value: _180.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteRedemptionRecord(value: _180.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOperatorAddress(value: _180.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _180.MsgLiquidStake): {
                    typeUrl: string;
                    value: _180.MsgLiquidStake;
                };
                redeemStake(value: _180.MsgRedeemStake): {
                    typeUrl: string;
                    value: _180.MsgRedeemStake;
                };
                confirmDelegation(value: _180.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _180.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _180.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _180.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _180.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _180.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _180.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _180.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _180.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _180.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _180.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _180.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _180.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _180.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _180.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _180.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _180.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _180.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _180.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _180.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _180.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _180.MsgSetOperatorAddress;
                };
            };
            fromPartial: {
                liquidStake(value: _180.MsgLiquidStake): {
                    typeUrl: string;
                    value: _180.MsgLiquidStake;
                };
                redeemStake(value: _180.MsgRedeemStake): {
                    typeUrl: string;
                    value: _180.MsgRedeemStake;
                };
                confirmDelegation(value: _180.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _180.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _180.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _180.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _180.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _180.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _180.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _180.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _180.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _180.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _180.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _180.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _180.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _180.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _180.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _180.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _180.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _180.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _180.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _180.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _180.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _180.MsgSetOperatorAddress;
                };
            };
        };
        AminoConverter: {
            "/stride.staketia.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _180.MsgLiquidStake) => _180.MsgLiquidStakeAmino;
                fromAmino: (object: _180.MsgLiquidStakeAmino) => _180.MsgLiquidStake;
            };
            "/stride.staketia.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _180.MsgRedeemStake) => _180.MsgRedeemStakeAmino;
                fromAmino: (object: _180.MsgRedeemStakeAmino) => _180.MsgRedeemStake;
            };
            "/stride.staketia.MsgConfirmDelegation": {
                aminoType: string;
                toAmino: (message: _180.MsgConfirmDelegation) => _180.MsgConfirmDelegationAmino;
                fromAmino: (object: _180.MsgConfirmDelegationAmino) => _180.MsgConfirmDelegation;
            };
            "/stride.staketia.MsgConfirmUndelegation": {
                aminoType: string;
                toAmino: (message: _180.MsgConfirmUndelegation) => _180.MsgConfirmUndelegationAmino;
                fromAmino: (object: _180.MsgConfirmUndelegationAmino) => _180.MsgConfirmUndelegation;
            };
            "/stride.staketia.MsgConfirmUnbondedTokenSweep": {
                aminoType: string;
                toAmino: (message: _180.MsgConfirmUnbondedTokenSweep) => _180.MsgConfirmUnbondedTokenSweepAmino;
                fromAmino: (object: _180.MsgConfirmUnbondedTokenSweepAmino) => _180.MsgConfirmUnbondedTokenSweep;
            };
            "/stride.staketia.MsgAdjustDelegatedBalance": {
                aminoType: string;
                toAmino: (message: _180.MsgAdjustDelegatedBalance) => _180.MsgAdjustDelegatedBalanceAmino;
                fromAmino: (object: _180.MsgAdjustDelegatedBalanceAmino) => _180.MsgAdjustDelegatedBalance;
            };
            "/stride.staketia.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _180.MsgUpdateInnerRedemptionRateBounds) => _180.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _180.MsgUpdateInnerRedemptionRateBoundsAmino) => _180.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.staketia.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _180.MsgResumeHostZone) => _180.MsgResumeHostZoneAmino;
                fromAmino: (object: _180.MsgResumeHostZoneAmino) => _180.MsgResumeHostZone;
            };
            "/stride.staketia.MsgRefreshRedemptionRate": {
                aminoType: string;
                toAmino: (message: _180.MsgRefreshRedemptionRate) => _180.MsgRefreshRedemptionRateAmino;
                fromAmino: (object: _180.MsgRefreshRedemptionRateAmino) => _180.MsgRefreshRedemptionRate;
            };
            "/stride.staketia.MsgOverwriteDelegationRecord": {
                aminoType: string;
                toAmino: (message: _180.MsgOverwriteDelegationRecord) => _180.MsgOverwriteDelegationRecordAmino;
                fromAmino: (object: _180.MsgOverwriteDelegationRecordAmino) => _180.MsgOverwriteDelegationRecord;
            };
            "/stride.staketia.MsgOverwriteUnbondingRecord": {
                aminoType: string;
                toAmino: (message: _180.MsgOverwriteUnbondingRecord) => _180.MsgOverwriteUnbondingRecordAmino;
                fromAmino: (object: _180.MsgOverwriteUnbondingRecordAmino) => _180.MsgOverwriteUnbondingRecord;
            };
            "/stride.staketia.MsgOverwriteRedemptionRecord": {
                aminoType: string;
                toAmino: (message: _180.MsgOverwriteRedemptionRecord) => _180.MsgOverwriteRedemptionRecordAmino;
                fromAmino: (object: _180.MsgOverwriteRedemptionRecordAmino) => _180.MsgOverwriteRedemptionRecord;
            };
            "/stride.staketia.MsgSetOperatorAddress": {
                aminoType: string;
                toAmino: (message: _180.MsgSetOperatorAddress) => _180.MsgSetOperatorAddressAmino;
                fromAmino: (object: _180.MsgSetOperatorAddressAmino) => _180.MsgSetOperatorAddress;
            };
        };
        overwritableRecordTypeFromJSON(object: any): _180.OverwritableRecordType;
        overwritableRecordTypeToJSON(object: _180.OverwritableRecordType): string;
        OverwritableRecordType: typeof _180.OverwritableRecordType;
        OverwritableRecordTypeSDKType: typeof _180.OverwritableRecordType;
        OverwritableRecordTypeAmino: typeof _180.OverwritableRecordType;
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _180.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.MsgLiquidStake;
            fromPartial(object: Partial<_180.MsgLiquidStake>): _180.MsgLiquidStake;
            fromAmino(object: _180.MsgLiquidStakeAmino): _180.MsgLiquidStake;
            toAmino(message: _180.MsgLiquidStake): _180.MsgLiquidStakeAmino;
            fromAminoMsg(object: _180.MsgLiquidStakeAminoMsg): _180.MsgLiquidStake;
            toAminoMsg(message: _180.MsgLiquidStake): _180.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _180.MsgLiquidStakeProtoMsg): _180.MsgLiquidStake;
            toProto(message: _180.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _180.MsgLiquidStake): _180.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _180.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_180.MsgLiquidStakeResponse>): _180.MsgLiquidStakeResponse;
            fromAmino(object: _180.MsgLiquidStakeResponseAmino): _180.MsgLiquidStakeResponse;
            toAmino(message: _180.MsgLiquidStakeResponse): _180.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _180.MsgLiquidStakeResponseAminoMsg): _180.MsgLiquidStakeResponse;
            fromProtoMsg(message: _180.MsgLiquidStakeResponseProtoMsg): _180.MsgLiquidStakeResponse;
            toProto(message: _180.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _180.MsgLiquidStakeResponse): _180.MsgLiquidStakeResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _180.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.MsgRedeemStake;
            fromPartial(object: Partial<_180.MsgRedeemStake>): _180.MsgRedeemStake;
            fromAmino(object: _180.MsgRedeemStakeAmino): _180.MsgRedeemStake;
            toAmino(message: _180.MsgRedeemStake): _180.MsgRedeemStakeAmino;
            fromAminoMsg(object: _180.MsgRedeemStakeAminoMsg): _180.MsgRedeemStake;
            toAminoMsg(message: _180.MsgRedeemStake): _180.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _180.MsgRedeemStakeProtoMsg): _180.MsgRedeemStake;
            toProto(message: _180.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _180.MsgRedeemStake): _180.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(message: _180.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.MsgRedeemStakeResponse;
            fromPartial(object: Partial<_180.MsgRedeemStakeResponse>): _180.MsgRedeemStakeResponse;
            fromAmino(object: _180.MsgRedeemStakeResponseAmino): _180.MsgRedeemStakeResponse;
            toAmino(message: _180.MsgRedeemStakeResponse): _180.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _180.MsgRedeemStakeResponseAminoMsg): _180.MsgRedeemStakeResponse;
            fromProtoMsg(message: _180.MsgRedeemStakeResponseProtoMsg): _180.MsgRedeemStakeResponse;
            toProto(message: _180.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _180.MsgRedeemStakeResponse): _180.MsgRedeemStakeResponseProtoMsg;
        };
        MsgConfirmDelegation: {
            typeUrl: string;
            encode(message: _180.MsgConfirmDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.MsgConfirmDelegation;
            fromPartial(object: Partial<_180.MsgConfirmDelegation>): _180.MsgConfirmDelegation;
            fromAmino(object: _180.MsgConfirmDelegationAmino): _180.MsgConfirmDelegation;
            toAmino(message: _180.MsgConfirmDelegation): _180.MsgConfirmDelegationAmino;
            fromAminoMsg(object: _180.MsgConfirmDelegationAminoMsg): _180.MsgConfirmDelegation;
            toAminoMsg(message: _180.MsgConfirmDelegation): _180.MsgConfirmDelegationAminoMsg;
            fromProtoMsg(message: _180.MsgConfirmDelegationProtoMsg): _180.MsgConfirmDelegation;
            toProto(message: _180.MsgConfirmDelegation): Uint8Array;
            toProtoMsg(message: _180.MsgConfirmDelegation): _180.MsgConfirmDelegationProtoMsg;
        };
        MsgConfirmDelegationResponse: {
            typeUrl: string;
            encode(_: _180.MsgConfirmDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.MsgConfirmDelegationResponse;
            fromPartial(_: Partial<_180.MsgConfirmDelegationResponse>): _180.MsgConfirmDelegationResponse;
            fromAmino(_: _180.MsgConfirmDelegationResponseAmino): _180.MsgConfirmDelegationResponse;
            toAmino(_: _180.MsgConfirmDelegationResponse): _180.MsgConfirmDelegationResponseAmino;
            fromAminoMsg(object: _180.MsgConfirmDelegationResponseAminoMsg): _180.MsgConfirmDelegationResponse;
            fromProtoMsg(message: _180.MsgConfirmDelegationResponseProtoMsg): _180.MsgConfirmDelegationResponse;
            toProto(message: _180.MsgConfirmDelegationResponse): Uint8Array;
            toProtoMsg(message: _180.MsgConfirmDelegationResponse): _180.MsgConfirmDelegationResponseProtoMsg;
        };
        MsgConfirmUndelegation: {
            typeUrl: string;
            encode(message: _180.MsgConfirmUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.MsgConfirmUndelegation;
            fromPartial(object: Partial<_180.MsgConfirmUndelegation>): _180.MsgConfirmUndelegation;
            fromAmino(object: _180.MsgConfirmUndelegationAmino): _180.MsgConfirmUndelegation;
            toAmino(message: _180.MsgConfirmUndelegation): _180.MsgConfirmUndelegationAmino;
            fromAminoMsg(object: _180.MsgConfirmUndelegationAminoMsg): _180.MsgConfirmUndelegation;
            toAminoMsg(message: _180.MsgConfirmUndelegation): _180.MsgConfirmUndelegationAminoMsg;
            fromProtoMsg(message: _180.MsgConfirmUndelegationProtoMsg): _180.MsgConfirmUndelegation;
            toProto(message: _180.MsgConfirmUndelegation): Uint8Array;
            toProtoMsg(message: _180.MsgConfirmUndelegation): _180.MsgConfirmUndelegationProtoMsg;
        };
        MsgConfirmUndelegationResponse: {
            typeUrl: string;
            encode(_: _180.MsgConfirmUndelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.MsgConfirmUndelegationResponse;
            fromPartial(_: Partial<_180.MsgConfirmUndelegationResponse>): _180.MsgConfirmUndelegationResponse;
            fromAmino(_: _180.MsgConfirmUndelegationResponseAmino): _180.MsgConfirmUndelegationResponse;
            toAmino(_: _180.MsgConfirmUndelegationResponse): _180.MsgConfirmUndelegationResponseAmino;
            fromAminoMsg(object: _180.MsgConfirmUndelegationResponseAminoMsg): _180.MsgConfirmUndelegationResponse;
            fromProtoMsg(message: _180.MsgConfirmUndelegationResponseProtoMsg): _180.MsgConfirmUndelegationResponse;
            toProto(message: _180.MsgConfirmUndelegationResponse): Uint8Array;
            toProtoMsg(message: _180.MsgConfirmUndelegationResponse): _180.MsgConfirmUndelegationResponseProtoMsg;
        };
        MsgConfirmUnbondedTokenSweep: {
            typeUrl: string;
            encode(message: _180.MsgConfirmUnbondedTokenSweep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.MsgConfirmUnbondedTokenSweep;
            fromPartial(object: Partial<_180.MsgConfirmUnbondedTokenSweep>): _180.MsgConfirmUnbondedTokenSweep;
            fromAmino(object: _180.MsgConfirmUnbondedTokenSweepAmino): _180.MsgConfirmUnbondedTokenSweep;
            toAmino(message: _180.MsgConfirmUnbondedTokenSweep): _180.MsgConfirmUnbondedTokenSweepAmino;
            fromAminoMsg(object: _180.MsgConfirmUnbondedTokenSweepAminoMsg): _180.MsgConfirmUnbondedTokenSweep;
            toAminoMsg(message: _180.MsgConfirmUnbondedTokenSweep): _180.MsgConfirmUnbondedTokenSweepAminoMsg;
            fromProtoMsg(message: _180.MsgConfirmUnbondedTokenSweepProtoMsg): _180.MsgConfirmUnbondedTokenSweep;
            toProto(message: _180.MsgConfirmUnbondedTokenSweep): Uint8Array;
            toProtoMsg(message: _180.MsgConfirmUnbondedTokenSweep): _180.MsgConfirmUnbondedTokenSweepProtoMsg;
        };
        MsgConfirmUnbondedTokenSweepResponse: {
            typeUrl: string;
            encode(_: _180.MsgConfirmUnbondedTokenSweepResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.MsgConfirmUnbondedTokenSweepResponse;
            fromPartial(_: Partial<_180.MsgConfirmUnbondedTokenSweepResponse>): _180.MsgConfirmUnbondedTokenSweepResponse;
            fromAmino(_: _180.MsgConfirmUnbondedTokenSweepResponseAmino): _180.MsgConfirmUnbondedTokenSweepResponse;
            toAmino(_: _180.MsgConfirmUnbondedTokenSweepResponse): _180.MsgConfirmUnbondedTokenSweepResponseAmino;
            fromAminoMsg(object: _180.MsgConfirmUnbondedTokenSweepResponseAminoMsg): _180.MsgConfirmUnbondedTokenSweepResponse;
            fromProtoMsg(message: _180.MsgConfirmUnbondedTokenSweepResponseProtoMsg): _180.MsgConfirmUnbondedTokenSweepResponse;
            toProto(message: _180.MsgConfirmUnbondedTokenSweepResponse): Uint8Array;
            toProtoMsg(message: _180.MsgConfirmUnbondedTokenSweepResponse): _180.MsgConfirmUnbondedTokenSweepResponseProtoMsg;
        };
        MsgAdjustDelegatedBalance: {
            typeUrl: string;
            encode(message: _180.MsgAdjustDelegatedBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.MsgAdjustDelegatedBalance;
            fromPartial(object: Partial<_180.MsgAdjustDelegatedBalance>): _180.MsgAdjustDelegatedBalance;
            fromAmino(object: _180.MsgAdjustDelegatedBalanceAmino): _180.MsgAdjustDelegatedBalance;
            toAmino(message: _180.MsgAdjustDelegatedBalance): _180.MsgAdjustDelegatedBalanceAmino;
            fromAminoMsg(object: _180.MsgAdjustDelegatedBalanceAminoMsg): _180.MsgAdjustDelegatedBalance;
            toAminoMsg(message: _180.MsgAdjustDelegatedBalance): _180.MsgAdjustDelegatedBalanceAminoMsg;
            fromProtoMsg(message: _180.MsgAdjustDelegatedBalanceProtoMsg): _180.MsgAdjustDelegatedBalance;
            toProto(message: _180.MsgAdjustDelegatedBalance): Uint8Array;
            toProtoMsg(message: _180.MsgAdjustDelegatedBalance): _180.MsgAdjustDelegatedBalanceProtoMsg;
        };
        MsgAdjustDelegatedBalanceResponse: {
            typeUrl: string;
            encode(_: _180.MsgAdjustDelegatedBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.MsgAdjustDelegatedBalanceResponse;
            fromPartial(_: Partial<_180.MsgAdjustDelegatedBalanceResponse>): _180.MsgAdjustDelegatedBalanceResponse;
            fromAmino(_: _180.MsgAdjustDelegatedBalanceResponseAmino): _180.MsgAdjustDelegatedBalanceResponse;
            toAmino(_: _180.MsgAdjustDelegatedBalanceResponse): _180.MsgAdjustDelegatedBalanceResponseAmino;
            fromAminoMsg(object: _180.MsgAdjustDelegatedBalanceResponseAminoMsg): _180.MsgAdjustDelegatedBalanceResponse;
            fromProtoMsg(message: _180.MsgAdjustDelegatedBalanceResponseProtoMsg): _180.MsgAdjustDelegatedBalanceResponse;
            toProto(message: _180.MsgAdjustDelegatedBalanceResponse): Uint8Array;
            toProtoMsg(message: _180.MsgAdjustDelegatedBalanceResponse): _180.MsgAdjustDelegatedBalanceResponseProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _180.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_180.MsgUpdateInnerRedemptionRateBounds>): _180.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _180.MsgUpdateInnerRedemptionRateBoundsAmino): _180.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _180.MsgUpdateInnerRedemptionRateBounds): _180.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _180.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _180.MsgUpdateInnerRedemptionRateBounds;
            toAminoMsg(message: _180.MsgUpdateInnerRedemptionRateBounds): _180.MsgUpdateInnerRedemptionRateBoundsAminoMsg;
            fromProtoMsg(message: _180.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _180.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _180.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _180.MsgUpdateInnerRedemptionRateBounds): _180.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _180.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_180.MsgUpdateInnerRedemptionRateBoundsResponse>): _180.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _180.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _180.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _180.MsgUpdateInnerRedemptionRateBoundsResponse): _180.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _180.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _180.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _180.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _180.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _180.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _180.MsgUpdateInnerRedemptionRateBoundsResponse): _180.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _180.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.MsgResumeHostZone;
            fromPartial(object: Partial<_180.MsgResumeHostZone>): _180.MsgResumeHostZone;
            fromAmino(object: _180.MsgResumeHostZoneAmino): _180.MsgResumeHostZone;
            toAmino(message: _180.MsgResumeHostZone): _180.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _180.MsgResumeHostZoneAminoMsg): _180.MsgResumeHostZone;
            toAminoMsg(message: _180.MsgResumeHostZone): _180.MsgResumeHostZoneAminoMsg;
            fromProtoMsg(message: _180.MsgResumeHostZoneProtoMsg): _180.MsgResumeHostZone;
            toProto(message: _180.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _180.MsgResumeHostZone): _180.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _180.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_180.MsgResumeHostZoneResponse>): _180.MsgResumeHostZoneResponse;
            fromAmino(_: _180.MsgResumeHostZoneResponseAmino): _180.MsgResumeHostZoneResponse;
            toAmino(_: _180.MsgResumeHostZoneResponse): _180.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _180.MsgResumeHostZoneResponseAminoMsg): _180.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _180.MsgResumeHostZoneResponseProtoMsg): _180.MsgResumeHostZoneResponse;
            toProto(message: _180.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _180.MsgResumeHostZoneResponse): _180.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgRefreshRedemptionRate: {
            typeUrl: string;
            encode(message: _180.MsgRefreshRedemptionRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.MsgRefreshRedemptionRate;
            fromPartial(object: Partial<_180.MsgRefreshRedemptionRate>): _180.MsgRefreshRedemptionRate;
            fromAmino(object: _180.MsgRefreshRedemptionRateAmino): _180.MsgRefreshRedemptionRate;
            toAmino(message: _180.MsgRefreshRedemptionRate): _180.MsgRefreshRedemptionRateAmino;
            fromAminoMsg(object: _180.MsgRefreshRedemptionRateAminoMsg): _180.MsgRefreshRedemptionRate;
            toAminoMsg(message: _180.MsgRefreshRedemptionRate): _180.MsgRefreshRedemptionRateAminoMsg;
            fromProtoMsg(message: _180.MsgRefreshRedemptionRateProtoMsg): _180.MsgRefreshRedemptionRate;
            toProto(message: _180.MsgRefreshRedemptionRate): Uint8Array;
            toProtoMsg(message: _180.MsgRefreshRedemptionRate): _180.MsgRefreshRedemptionRateProtoMsg;
        };
        MsgRefreshRedemptionRateResponse: {
            typeUrl: string;
            encode(_: _180.MsgRefreshRedemptionRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.MsgRefreshRedemptionRateResponse;
            fromPartial(_: Partial<_180.MsgRefreshRedemptionRateResponse>): _180.MsgRefreshRedemptionRateResponse;
            fromAmino(_: _180.MsgRefreshRedemptionRateResponseAmino): _180.MsgRefreshRedemptionRateResponse;
            toAmino(_: _180.MsgRefreshRedemptionRateResponse): _180.MsgRefreshRedemptionRateResponseAmino;
            fromAminoMsg(object: _180.MsgRefreshRedemptionRateResponseAminoMsg): _180.MsgRefreshRedemptionRateResponse;
            fromProtoMsg(message: _180.MsgRefreshRedemptionRateResponseProtoMsg): _180.MsgRefreshRedemptionRateResponse;
            toProto(message: _180.MsgRefreshRedemptionRateResponse): Uint8Array;
            toProtoMsg(message: _180.MsgRefreshRedemptionRateResponse): _180.MsgRefreshRedemptionRateResponseProtoMsg;
        };
        MsgOverwriteDelegationRecord: {
            typeUrl: string;
            encode(message: _180.MsgOverwriteDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.MsgOverwriteDelegationRecord;
            fromPartial(object: Partial<_180.MsgOverwriteDelegationRecord>): _180.MsgOverwriteDelegationRecord;
            fromAmino(object: _180.MsgOverwriteDelegationRecordAmino): _180.MsgOverwriteDelegationRecord;
            toAmino(message: _180.MsgOverwriteDelegationRecord): _180.MsgOverwriteDelegationRecordAmino;
            fromAminoMsg(object: _180.MsgOverwriteDelegationRecordAminoMsg): _180.MsgOverwriteDelegationRecord;
            toAminoMsg(message: _180.MsgOverwriteDelegationRecord): _180.MsgOverwriteDelegationRecordAminoMsg;
            fromProtoMsg(message: _180.MsgOverwriteDelegationRecordProtoMsg): _180.MsgOverwriteDelegationRecord;
            toProto(message: _180.MsgOverwriteDelegationRecord): Uint8Array;
            toProtoMsg(message: _180.MsgOverwriteDelegationRecord): _180.MsgOverwriteDelegationRecordProtoMsg;
        };
        MsgOverwriteDelegationRecordResponse: {
            typeUrl: string;
            encode(_: _180.MsgOverwriteDelegationRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.MsgOverwriteDelegationRecordResponse;
            fromPartial(_: Partial<_180.MsgOverwriteDelegationRecordResponse>): _180.MsgOverwriteDelegationRecordResponse;
            fromAmino(_: _180.MsgOverwriteDelegationRecordResponseAmino): _180.MsgOverwriteDelegationRecordResponse;
            toAmino(_: _180.MsgOverwriteDelegationRecordResponse): _180.MsgOverwriteDelegationRecordResponseAmino;
            fromAminoMsg(object: _180.MsgOverwriteDelegationRecordResponseAminoMsg): _180.MsgOverwriteDelegationRecordResponse;
            fromProtoMsg(message: _180.MsgOverwriteDelegationRecordResponseProtoMsg): _180.MsgOverwriteDelegationRecordResponse;
            toProto(message: _180.MsgOverwriteDelegationRecordResponse): Uint8Array;
            toProtoMsg(message: _180.MsgOverwriteDelegationRecordResponse): _180.MsgOverwriteDelegationRecordResponseProtoMsg;
        };
        MsgOverwriteUnbondingRecord: {
            typeUrl: string;
            encode(message: _180.MsgOverwriteUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.MsgOverwriteUnbondingRecord;
            fromPartial(object: Partial<_180.MsgOverwriteUnbondingRecord>): _180.MsgOverwriteUnbondingRecord;
            fromAmino(object: _180.MsgOverwriteUnbondingRecordAmino): _180.MsgOverwriteUnbondingRecord;
            toAmino(message: _180.MsgOverwriteUnbondingRecord): _180.MsgOverwriteUnbondingRecordAmino;
            fromAminoMsg(object: _180.MsgOverwriteUnbondingRecordAminoMsg): _180.MsgOverwriteUnbondingRecord;
            toAminoMsg(message: _180.MsgOverwriteUnbondingRecord): _180.MsgOverwriteUnbondingRecordAminoMsg;
            fromProtoMsg(message: _180.MsgOverwriteUnbondingRecordProtoMsg): _180.MsgOverwriteUnbondingRecord;
            toProto(message: _180.MsgOverwriteUnbondingRecord): Uint8Array;
            toProtoMsg(message: _180.MsgOverwriteUnbondingRecord): _180.MsgOverwriteUnbondingRecordProtoMsg;
        };
        MsgOverwriteUnbondingRecordResponse: {
            typeUrl: string;
            encode(_: _180.MsgOverwriteUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.MsgOverwriteUnbondingRecordResponse;
            fromPartial(_: Partial<_180.MsgOverwriteUnbondingRecordResponse>): _180.MsgOverwriteUnbondingRecordResponse;
            fromAmino(_: _180.MsgOverwriteUnbondingRecordResponseAmino): _180.MsgOverwriteUnbondingRecordResponse;
            toAmino(_: _180.MsgOverwriteUnbondingRecordResponse): _180.MsgOverwriteUnbondingRecordResponseAmino;
            fromAminoMsg(object: _180.MsgOverwriteUnbondingRecordResponseAminoMsg): _180.MsgOverwriteUnbondingRecordResponse;
            fromProtoMsg(message: _180.MsgOverwriteUnbondingRecordResponseProtoMsg): _180.MsgOverwriteUnbondingRecordResponse;
            toProto(message: _180.MsgOverwriteUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _180.MsgOverwriteUnbondingRecordResponse): _180.MsgOverwriteUnbondingRecordResponseProtoMsg;
        };
        MsgOverwriteRedemptionRecord: {
            typeUrl: string;
            encode(message: _180.MsgOverwriteRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.MsgOverwriteRedemptionRecord;
            fromPartial(object: Partial<_180.MsgOverwriteRedemptionRecord>): _180.MsgOverwriteRedemptionRecord;
            fromAmino(object: _180.MsgOverwriteRedemptionRecordAmino): _180.MsgOverwriteRedemptionRecord;
            toAmino(message: _180.MsgOverwriteRedemptionRecord): _180.MsgOverwriteRedemptionRecordAmino;
            fromAminoMsg(object: _180.MsgOverwriteRedemptionRecordAminoMsg): _180.MsgOverwriteRedemptionRecord;
            toAminoMsg(message: _180.MsgOverwriteRedemptionRecord): _180.MsgOverwriteRedemptionRecordAminoMsg;
            fromProtoMsg(message: _180.MsgOverwriteRedemptionRecordProtoMsg): _180.MsgOverwriteRedemptionRecord;
            toProto(message: _180.MsgOverwriteRedemptionRecord): Uint8Array;
            toProtoMsg(message: _180.MsgOverwriteRedemptionRecord): _180.MsgOverwriteRedemptionRecordProtoMsg;
        };
        MsgOverwriteRedemptionRecordResponse: {
            typeUrl: string;
            encode(_: _180.MsgOverwriteRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.MsgOverwriteRedemptionRecordResponse;
            fromPartial(_: Partial<_180.MsgOverwriteRedemptionRecordResponse>): _180.MsgOverwriteRedemptionRecordResponse;
            fromAmino(_: _180.MsgOverwriteRedemptionRecordResponseAmino): _180.MsgOverwriteRedemptionRecordResponse;
            toAmino(_: _180.MsgOverwriteRedemptionRecordResponse): _180.MsgOverwriteRedemptionRecordResponseAmino;
            fromAminoMsg(object: _180.MsgOverwriteRedemptionRecordResponseAminoMsg): _180.MsgOverwriteRedemptionRecordResponse;
            fromProtoMsg(message: _180.MsgOverwriteRedemptionRecordResponseProtoMsg): _180.MsgOverwriteRedemptionRecordResponse;
            toProto(message: _180.MsgOverwriteRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _180.MsgOverwriteRedemptionRecordResponse): _180.MsgOverwriteRedemptionRecordResponseProtoMsg;
        };
        MsgSetOperatorAddress: {
            typeUrl: string;
            encode(message: _180.MsgSetOperatorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.MsgSetOperatorAddress;
            fromPartial(object: Partial<_180.MsgSetOperatorAddress>): _180.MsgSetOperatorAddress;
            fromAmino(object: _180.MsgSetOperatorAddressAmino): _180.MsgSetOperatorAddress;
            toAmino(message: _180.MsgSetOperatorAddress): _180.MsgSetOperatorAddressAmino;
            fromAminoMsg(object: _180.MsgSetOperatorAddressAminoMsg): _180.MsgSetOperatorAddress;
            toAminoMsg(message: _180.MsgSetOperatorAddress): _180.MsgSetOperatorAddressAminoMsg;
            fromProtoMsg(message: _180.MsgSetOperatorAddressProtoMsg): _180.MsgSetOperatorAddress;
            toProto(message: _180.MsgSetOperatorAddress): Uint8Array;
            toProtoMsg(message: _180.MsgSetOperatorAddress): _180.MsgSetOperatorAddressProtoMsg;
        };
        MsgSetOperatorAddressResponse: {
            typeUrl: string;
            encode(_: _180.MsgSetOperatorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.MsgSetOperatorAddressResponse;
            fromPartial(_: Partial<_180.MsgSetOperatorAddressResponse>): _180.MsgSetOperatorAddressResponse;
            fromAmino(_: _180.MsgSetOperatorAddressResponseAmino): _180.MsgSetOperatorAddressResponse;
            toAmino(_: _180.MsgSetOperatorAddressResponse): _180.MsgSetOperatorAddressResponseAmino;
            fromAminoMsg(object: _180.MsgSetOperatorAddressResponseAminoMsg): _180.MsgSetOperatorAddressResponse;
            fromProtoMsg(message: _180.MsgSetOperatorAddressResponseProtoMsg): _180.MsgSetOperatorAddressResponse;
            toProto(message: _180.MsgSetOperatorAddressResponse): Uint8Array;
            toProtoMsg(message: _180.MsgSetOperatorAddressResponse): _180.MsgSetOperatorAddressResponseProtoMsg;
        };
        delegationRecordStatusFromJSON(object: any): _179.DelegationRecordStatus;
        delegationRecordStatusToJSON(object: _179.DelegationRecordStatus): string;
        unbondingRecordStatusFromJSON(object: any): _179.UnbondingRecordStatus;
        unbondingRecordStatusToJSON(object: _179.UnbondingRecordStatus): string;
        DelegationRecordStatus: typeof _179.DelegationRecordStatus;
        DelegationRecordStatusSDKType: typeof _179.DelegationRecordStatus;
        DelegationRecordStatusAmino: typeof _179.DelegationRecordStatus;
        UnbondingRecordStatus: typeof _179.UnbondingRecordStatus;
        UnbondingRecordStatusSDKType: typeof _179.UnbondingRecordStatus;
        UnbondingRecordStatusAmino: typeof _179.UnbondingRecordStatus;
        HostZone: {
            typeUrl: string;
            encode(message: _179.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.HostZone;
            fromPartial(object: Partial<_179.HostZone>): _179.HostZone;
            fromAmino(object: _179.HostZoneAmino): _179.HostZone;
            toAmino(message: _179.HostZone): _179.HostZoneAmino;
            fromAminoMsg(object: _179.HostZoneAminoMsg): _179.HostZone;
            fromProtoMsg(message: _179.HostZoneProtoMsg): _179.HostZone;
            toProto(message: _179.HostZone): Uint8Array;
            toProtoMsg(message: _179.HostZone): _179.HostZoneProtoMsg;
        };
        DelegationRecord: {
            typeUrl: string;
            encode(message: _179.DelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.DelegationRecord;
            fromPartial(object: Partial<_179.DelegationRecord>): _179.DelegationRecord;
            fromAmino(object: _179.DelegationRecordAmino): _179.DelegationRecord;
            toAmino(message: _179.DelegationRecord): _179.DelegationRecordAmino;
            fromAminoMsg(object: _179.DelegationRecordAminoMsg): _179.DelegationRecord;
            fromProtoMsg(message: _179.DelegationRecordProtoMsg): _179.DelegationRecord;
            toProto(message: _179.DelegationRecord): Uint8Array;
            toProtoMsg(message: _179.DelegationRecord): _179.DelegationRecordProtoMsg;
        };
        UnbondingRecord: {
            typeUrl: string;
            encode(message: _179.UnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.UnbondingRecord;
            fromPartial(object: Partial<_179.UnbondingRecord>): _179.UnbondingRecord;
            fromAmino(object: _179.UnbondingRecordAmino): _179.UnbondingRecord;
            toAmino(message: _179.UnbondingRecord): _179.UnbondingRecordAmino;
            fromAminoMsg(object: _179.UnbondingRecordAminoMsg): _179.UnbondingRecord;
            fromProtoMsg(message: _179.UnbondingRecordProtoMsg): _179.UnbondingRecord;
            toProto(message: _179.UnbondingRecord): Uint8Array;
            toProtoMsg(message: _179.UnbondingRecord): _179.UnbondingRecordProtoMsg;
        };
        RedemptionRecord: {
            typeUrl: string;
            encode(message: _179.RedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.RedemptionRecord;
            fromPartial(object: Partial<_179.RedemptionRecord>): _179.RedemptionRecord;
            fromAmino(object: _179.RedemptionRecordAmino): _179.RedemptionRecord;
            toAmino(message: _179.RedemptionRecord): _179.RedemptionRecordAmino;
            fromAminoMsg(object: _179.RedemptionRecordAminoMsg): _179.RedemptionRecord;
            fromProtoMsg(message: _179.RedemptionRecordProtoMsg): _179.RedemptionRecord;
            toProto(message: _179.RedemptionRecord): Uint8Array;
            toProtoMsg(message: _179.RedemptionRecord): _179.RedemptionRecordProtoMsg;
        };
        SlashRecord: {
            typeUrl: string;
            encode(message: _179.SlashRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.SlashRecord;
            fromPartial(object: Partial<_179.SlashRecord>): _179.SlashRecord;
            fromAmino(object: _179.SlashRecordAmino): _179.SlashRecord;
            toAmino(message: _179.SlashRecord): _179.SlashRecordAmino;
            fromAminoMsg(object: _179.SlashRecordAminoMsg): _179.SlashRecord;
            fromProtoMsg(message: _179.SlashRecordProtoMsg): _179.SlashRecord;
            toProto(message: _179.SlashRecord): Uint8Array;
            toProtoMsg(message: _179.SlashRecord): _179.SlashRecordProtoMsg;
        };
        QueryHostZoneRequest: {
            typeUrl: string;
            encode(_: _178.QueryHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryHostZoneRequest;
            fromPartial(_: Partial<_178.QueryHostZoneRequest>): _178.QueryHostZoneRequest;
            fromAmino(_: _178.QueryHostZoneRequestAmino): _178.QueryHostZoneRequest;
            toAmino(_: _178.QueryHostZoneRequest): _178.QueryHostZoneRequestAmino;
            fromAminoMsg(object: _178.QueryHostZoneRequestAminoMsg): _178.QueryHostZoneRequest;
            fromProtoMsg(message: _178.QueryHostZoneRequestProtoMsg): _178.QueryHostZoneRequest;
            toProto(message: _178.QueryHostZoneRequest): Uint8Array;
            toProtoMsg(message: _178.QueryHostZoneRequest): _178.QueryHostZoneRequestProtoMsg;
        };
        QueryHostZoneResponse: {
            typeUrl: string;
            encode(message: _178.QueryHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryHostZoneResponse;
            fromPartial(object: Partial<_178.QueryHostZoneResponse>): _178.QueryHostZoneResponse;
            fromAmino(object: _178.QueryHostZoneResponseAmino): _178.QueryHostZoneResponse;
            toAmino(message: _178.QueryHostZoneResponse): _178.QueryHostZoneResponseAmino;
            fromAminoMsg(object: _178.QueryHostZoneResponseAminoMsg): _178.QueryHostZoneResponse;
            fromProtoMsg(message: _178.QueryHostZoneResponseProtoMsg): _178.QueryHostZoneResponse;
            toProto(message: _178.QueryHostZoneResponse): Uint8Array;
            toProtoMsg(message: _178.QueryHostZoneResponse): _178.QueryHostZoneResponseProtoMsg;
        };
        QueryDelegationRecordsRequest: {
            typeUrl: string;
            encode(message: _178.QueryDelegationRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryDelegationRecordsRequest;
            fromPartial(object: Partial<_178.QueryDelegationRecordsRequest>): _178.QueryDelegationRecordsRequest;
            fromAmino(object: _178.QueryDelegationRecordsRequestAmino): _178.QueryDelegationRecordsRequest;
            toAmino(message: _178.QueryDelegationRecordsRequest): _178.QueryDelegationRecordsRequestAmino;
            fromAminoMsg(object: _178.QueryDelegationRecordsRequestAminoMsg): _178.QueryDelegationRecordsRequest;
            fromProtoMsg(message: _178.QueryDelegationRecordsRequestProtoMsg): _178.QueryDelegationRecordsRequest;
            toProto(message: _178.QueryDelegationRecordsRequest): Uint8Array;
            toProtoMsg(message: _178.QueryDelegationRecordsRequest): _178.QueryDelegationRecordsRequestProtoMsg;
        };
        QueryDelegationRecordsResponse: {
            typeUrl: string;
            encode(message: _178.QueryDelegationRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryDelegationRecordsResponse;
            fromPartial(object: Partial<_178.QueryDelegationRecordsResponse>): _178.QueryDelegationRecordsResponse;
            fromAmino(object: _178.QueryDelegationRecordsResponseAmino): _178.QueryDelegationRecordsResponse;
            toAmino(message: _178.QueryDelegationRecordsResponse): _178.QueryDelegationRecordsResponseAmino;
            fromAminoMsg(object: _178.QueryDelegationRecordsResponseAminoMsg): _178.QueryDelegationRecordsResponse;
            fromProtoMsg(message: _178.QueryDelegationRecordsResponseProtoMsg): _178.QueryDelegationRecordsResponse;
            toProto(message: _178.QueryDelegationRecordsResponse): Uint8Array;
            toProtoMsg(message: _178.QueryDelegationRecordsResponse): _178.QueryDelegationRecordsResponseProtoMsg;
        };
        QueryUnbondingRecordsRequest: {
            typeUrl: string;
            encode(message: _178.QueryUnbondingRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryUnbondingRecordsRequest;
            fromPartial(object: Partial<_178.QueryUnbondingRecordsRequest>): _178.QueryUnbondingRecordsRequest;
            fromAmino(object: _178.QueryUnbondingRecordsRequestAmino): _178.QueryUnbondingRecordsRequest;
            toAmino(message: _178.QueryUnbondingRecordsRequest): _178.QueryUnbondingRecordsRequestAmino;
            fromAminoMsg(object: _178.QueryUnbondingRecordsRequestAminoMsg): _178.QueryUnbondingRecordsRequest;
            fromProtoMsg(message: _178.QueryUnbondingRecordsRequestProtoMsg): _178.QueryUnbondingRecordsRequest;
            toProto(message: _178.QueryUnbondingRecordsRequest): Uint8Array;
            toProtoMsg(message: _178.QueryUnbondingRecordsRequest): _178.QueryUnbondingRecordsRequestProtoMsg;
        };
        QueryUnbondingRecordsResponse: {
            typeUrl: string;
            encode(message: _178.QueryUnbondingRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryUnbondingRecordsResponse;
            fromPartial(object: Partial<_178.QueryUnbondingRecordsResponse>): _178.QueryUnbondingRecordsResponse;
            fromAmino(object: _178.QueryUnbondingRecordsResponseAmino): _178.QueryUnbondingRecordsResponse;
            toAmino(message: _178.QueryUnbondingRecordsResponse): _178.QueryUnbondingRecordsResponseAmino;
            fromAminoMsg(object: _178.QueryUnbondingRecordsResponseAminoMsg): _178.QueryUnbondingRecordsResponse;
            fromProtoMsg(message: _178.QueryUnbondingRecordsResponseProtoMsg): _178.QueryUnbondingRecordsResponse;
            toProto(message: _178.QueryUnbondingRecordsResponse): Uint8Array;
            toProtoMsg(message: _178.QueryUnbondingRecordsResponse): _178.QueryUnbondingRecordsResponseProtoMsg;
        };
        QueryRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _178.QueryRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryRedemptionRecordRequest;
            fromPartial(object: Partial<_178.QueryRedemptionRecordRequest>): _178.QueryRedemptionRecordRequest;
            fromAmino(object: _178.QueryRedemptionRecordRequestAmino): _178.QueryRedemptionRecordRequest;
            toAmino(message: _178.QueryRedemptionRecordRequest): _178.QueryRedemptionRecordRequestAmino;
            fromAminoMsg(object: _178.QueryRedemptionRecordRequestAminoMsg): _178.QueryRedemptionRecordRequest;
            fromProtoMsg(message: _178.QueryRedemptionRecordRequestProtoMsg): _178.QueryRedemptionRecordRequest;
            toProto(message: _178.QueryRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _178.QueryRedemptionRecordRequest): _178.QueryRedemptionRecordRequestProtoMsg;
        };
        QueryRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _178.QueryRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryRedemptionRecordResponse;
            fromPartial(object: Partial<_178.QueryRedemptionRecordResponse>): _178.QueryRedemptionRecordResponse;
            fromAmino(object: _178.QueryRedemptionRecordResponseAmino): _178.QueryRedemptionRecordResponse;
            toAmino(message: _178.QueryRedemptionRecordResponse): _178.QueryRedemptionRecordResponseAmino;
            fromAminoMsg(object: _178.QueryRedemptionRecordResponseAminoMsg): _178.QueryRedemptionRecordResponse;
            fromProtoMsg(message: _178.QueryRedemptionRecordResponseProtoMsg): _178.QueryRedemptionRecordResponse;
            toProto(message: _178.QueryRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _178.QueryRedemptionRecordResponse): _178.QueryRedemptionRecordResponseProtoMsg;
        };
        QueryRedemptionRecordsRequest: {
            typeUrl: string;
            encode(message: _178.QueryRedemptionRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryRedemptionRecordsRequest;
            fromPartial(object: Partial<_178.QueryRedemptionRecordsRequest>): _178.QueryRedemptionRecordsRequest;
            fromAmino(object: _178.QueryRedemptionRecordsRequestAmino): _178.QueryRedemptionRecordsRequest;
            toAmino(message: _178.QueryRedemptionRecordsRequest): _178.QueryRedemptionRecordsRequestAmino;
            fromAminoMsg(object: _178.QueryRedemptionRecordsRequestAminoMsg): _178.QueryRedemptionRecordsRequest;
            fromProtoMsg(message: _178.QueryRedemptionRecordsRequestProtoMsg): _178.QueryRedemptionRecordsRequest;
            toProto(message: _178.QueryRedemptionRecordsRequest): Uint8Array;
            toProtoMsg(message: _178.QueryRedemptionRecordsRequest): _178.QueryRedemptionRecordsRequestProtoMsg;
        };
        QueryRedemptionRecordsResponse: {
            typeUrl: string;
            encode(message: _178.QueryRedemptionRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryRedemptionRecordsResponse;
            fromPartial(object: Partial<_178.QueryRedemptionRecordsResponse>): _178.QueryRedemptionRecordsResponse;
            fromAmino(object: _178.QueryRedemptionRecordsResponseAmino): _178.QueryRedemptionRecordsResponse;
            toAmino(message: _178.QueryRedemptionRecordsResponse): _178.QueryRedemptionRecordsResponseAmino;
            fromAminoMsg(object: _178.QueryRedemptionRecordsResponseAminoMsg): _178.QueryRedemptionRecordsResponse;
            fromProtoMsg(message: _178.QueryRedemptionRecordsResponseProtoMsg): _178.QueryRedemptionRecordsResponse;
            toProto(message: _178.QueryRedemptionRecordsResponse): Uint8Array;
            toProtoMsg(message: _178.QueryRedemptionRecordsResponse): _178.QueryRedemptionRecordsResponseProtoMsg;
        };
        QuerySlashRecordsRequest: {
            typeUrl: string;
            encode(_: _178.QuerySlashRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QuerySlashRecordsRequest;
            fromPartial(_: Partial<_178.QuerySlashRecordsRequest>): _178.QuerySlashRecordsRequest;
            fromAmino(_: _178.QuerySlashRecordsRequestAmino): _178.QuerySlashRecordsRequest;
            toAmino(_: _178.QuerySlashRecordsRequest): _178.QuerySlashRecordsRequestAmino;
            fromAminoMsg(object: _178.QuerySlashRecordsRequestAminoMsg): _178.QuerySlashRecordsRequest;
            fromProtoMsg(message: _178.QuerySlashRecordsRequestProtoMsg): _178.QuerySlashRecordsRequest;
            toProto(message: _178.QuerySlashRecordsRequest): Uint8Array;
            toProtoMsg(message: _178.QuerySlashRecordsRequest): _178.QuerySlashRecordsRequestProtoMsg;
        };
        QuerySlashRecordsResponse: {
            typeUrl: string;
            encode(message: _178.QuerySlashRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QuerySlashRecordsResponse;
            fromPartial(object: Partial<_178.QuerySlashRecordsResponse>): _178.QuerySlashRecordsResponse;
            fromAmino(object: _178.QuerySlashRecordsResponseAmino): _178.QuerySlashRecordsResponse;
            toAmino(message: _178.QuerySlashRecordsResponse): _178.QuerySlashRecordsResponseAmino;
            fromAminoMsg(object: _178.QuerySlashRecordsResponseAminoMsg): _178.QuerySlashRecordsResponse;
            fromProtoMsg(message: _178.QuerySlashRecordsResponseProtoMsg): _178.QuerySlashRecordsResponse;
            toProto(message: _178.QuerySlashRecordsResponse): Uint8Array;
            toProtoMsg(message: _178.QuerySlashRecordsResponse): _178.QuerySlashRecordsResponseProtoMsg;
        };
        RedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _178.RedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.RedemptionRecordResponse;
            fromPartial(object: Partial<_178.RedemptionRecordResponse>): _178.RedemptionRecordResponse;
            fromAmino(object: _178.RedemptionRecordResponseAmino): _178.RedemptionRecordResponse;
            toAmino(message: _178.RedemptionRecordResponse): _178.RedemptionRecordResponseAmino;
            fromAminoMsg(object: _178.RedemptionRecordResponseAminoMsg): _178.RedemptionRecordResponse;
            fromProtoMsg(message: _178.RedemptionRecordResponseProtoMsg): _178.RedemptionRecordResponse;
            toProto(message: _178.RedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _178.RedemptionRecordResponse): _178.RedemptionRecordResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _177.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.Params;
            fromPartial(_: Partial<_177.Params>): _177.Params;
            fromAmino(_: _177.ParamsAmino): _177.Params;
            toAmino(_: _177.Params): _177.ParamsAmino;
            fromAminoMsg(object: _177.ParamsAminoMsg): _177.Params;
            fromProtoMsg(message: _177.ParamsProtoMsg): _177.Params;
            toProto(message: _177.Params): Uint8Array;
            toProtoMsg(message: _177.Params): _177.ParamsProtoMsg;
        };
        TransferInProgressRecordIds: {
            typeUrl: string;
            encode(message: _177.TransferInProgressRecordIds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.TransferInProgressRecordIds;
            fromPartial(object: Partial<_177.TransferInProgressRecordIds>): _177.TransferInProgressRecordIds;
            fromAmino(object: _177.TransferInProgressRecordIdsAmino): _177.TransferInProgressRecordIds;
            toAmino(message: _177.TransferInProgressRecordIds): _177.TransferInProgressRecordIdsAmino;
            fromAminoMsg(object: _177.TransferInProgressRecordIdsAminoMsg): _177.TransferInProgressRecordIds;
            fromProtoMsg(message: _177.TransferInProgressRecordIdsProtoMsg): _177.TransferInProgressRecordIds;
            toProto(message: _177.TransferInProgressRecordIds): Uint8Array;
            toProtoMsg(message: _177.TransferInProgressRecordIds): _177.TransferInProgressRecordIdsProtoMsg;
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
    };
    const vesting: {
        BaseVestingAccount: {
            typeUrl: string;
            encode(message: _182.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.BaseVestingAccount;
            fromPartial(object: Partial<_182.BaseVestingAccount>): _182.BaseVestingAccount;
            fromAmino(object: _182.BaseVestingAccountAmino): _182.BaseVestingAccount;
            toAmino(message: _182.BaseVestingAccount): _182.BaseVestingAccountAmino;
            fromAminoMsg(object: _182.BaseVestingAccountAminoMsg): _182.BaseVestingAccount;
            fromProtoMsg(message: _182.BaseVestingAccountProtoMsg): _182.BaseVestingAccount;
            toProto(message: _182.BaseVestingAccount): Uint8Array;
            toProtoMsg(message: _182.BaseVestingAccount): _182.BaseVestingAccountProtoMsg;
        };
        Period: {
            typeUrl: string;
            encode(message: _182.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.Period;
            fromPartial(object: Partial<_182.Period>): _182.Period;
            fromAmino(object: _182.PeriodAmino): _182.Period;
            toAmino(message: _182.Period): _182.PeriodAmino;
            fromAminoMsg(object: _182.PeriodAminoMsg): _182.Period;
            fromProtoMsg(message: _182.PeriodProtoMsg): _182.Period;
            toProto(message: _182.Period): Uint8Array;
            toProtoMsg(message: _182.Period): _182.PeriodProtoMsg;
        };
        StridePeriodicVestingAccount: {
            typeUrl: string;
            encode(message: _182.StridePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.StridePeriodicVestingAccount;
            fromPartial(object: Partial<_182.StridePeriodicVestingAccount>): _182.StridePeriodicVestingAccount;
            fromAmino(object: _182.StridePeriodicVestingAccountAmino): _182.StridePeriodicVestingAccount;
            toAmino(message: _182.StridePeriodicVestingAccount): _182.StridePeriodicVestingAccountAmino;
            fromAminoMsg(object: _182.StridePeriodicVestingAccountAminoMsg): _182.StridePeriodicVestingAccount;
            fromProtoMsg(message: _182.StridePeriodicVestingAccountProtoMsg): _182.StridePeriodicVestingAccount;
            toProto(message: _182.StridePeriodicVestingAccount): Uint8Array;
            toProtoMsg(message: _182.StridePeriodicVestingAccount): _182.StridePeriodicVestingAccountProtoMsg;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
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
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            stride: {
                airdrop: _289.MsgClientImpl;
                claim: _290.MsgClientImpl;
                icaoracle: _291.MsgClientImpl;
                interchainquery: {
                    v1: _292.MsgClientImpl;
                };
                stakedym: _293.MsgClientImpl;
                stakeibc: _294.MsgClientImpl;
                staketia: _295.MsgClientImpl;
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
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
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                        tokenizeShareRecordReward(request: import("../cosmos/distribution/v1beta1/query").QueryTokenizeShareRecordRewardRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryTokenizeShareRecordRewardResponse>;
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
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
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
                        tokenizeShareRecordById(request: import("../cosmos/staking/v1beta1/query").QueryTokenizeShareRecordByIdRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryTokenizeShareRecordByIdResponse>;
                        tokenizeShareRecordByDenom(request: import("../cosmos/staking/v1beta1/query").QueryTokenizeShareRecordByDenomRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryTokenizeShareRecordByDenomResponse>;
                        tokenizeShareRecordsOwned(request: import("../cosmos/staking/v1beta1/query").QueryTokenizeShareRecordsOwnedRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryTokenizeShareRecordsOwnedResponse>;
                        allTokenizeShareRecords(request?: import("../cosmos/staking/v1beta1/query").QueryAllTokenizeShareRecordsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryAllTokenizeShareRecordsResponse>;
                        lastTokenizeShareRecordId(request?: import("../cosmos/staking/v1beta1/query").QueryLastTokenizeShareRecordIdRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryLastTokenizeShareRecordIdResponse>;
                        totalTokenizeSharedAssets(request?: import("../cosmos/staking/v1beta1/query").QueryTotalTokenizeSharedAssetsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryTotalTokenizeSharedAssetsResponse>;
                        totalLiquidStaked(request?: import("../cosmos/staking/v1beta1/query").QueryTotalLiquidStaked): Promise<import("../cosmos/staking/v1beta1/query").QueryTotalLiquidStakedResponse>;
                        tokenizeShareLockInfo(request: import("../cosmos/staking/v1beta1/query").QueryTokenizeShareLockInfo): Promise<import("../cosmos/staking/v1beta1/query").QueryTokenizeShareLockInfoResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                    };
                };
            };
            stride: {
                airdrop: {
                    airdrop(request: _125.QueryAirdropRequest): Promise<_125.QueryAirdropResponse>;
                    allAirdrops(request?: _125.QueryAllAirdropsRequest): Promise<_125.QueryAllAirdropsResponse>;
                    userAllocation(request: _125.QueryUserAllocationRequest): Promise<_125.QueryUserAllocationResponse>;
                    userAllocations(request: _125.QueryUserAllocationsRequest): Promise<_125.QueryUserAllocationsResponse>;
                    allAllocations(request: _125.QueryAllAllocationsRequest): Promise<_125.QueryAllAllocationsResponse>;
                    userSummary(request: _125.QueryUserSummaryRequest): Promise<_125.QueryUserSummaryResponse>;
                };
                autopilot: {
                    params(request?: _129.QueryParamsRequest): Promise<_129.QueryParamsResponse>;
                };
                claim: {
                    distributorAccountBalance(request: _133.QueryDistributorAccountBalanceRequest): Promise<_133.QueryDistributorAccountBalanceResponse>;
                    params(request?: _133.QueryParamsRequest): Promise<_133.QueryParamsResponse>;
                    claimRecord(request: _133.QueryClaimRecordRequest): Promise<_133.QueryClaimRecordResponse>;
                    claimableForAction(request: _133.QueryClaimableForActionRequest): Promise<_133.QueryClaimableForActionResponse>;
                    totalClaimable(request: _133.QueryTotalClaimableRequest): Promise<_133.QueryTotalClaimableResponse>;
                    userVestings(request: _133.QueryUserVestingsRequest): Promise<_133.QueryUserVestingsResponse>;
                    claimStatus(request: _133.QueryClaimStatusRequest): Promise<_133.QueryClaimStatusResponse>;
                    claimMetadata(request?: _133.QueryClaimMetadataRequest): Promise<_133.QueryClaimMetadataResponse>;
                };
                epochs: {
                    epochInfos(request?: _136.QueryEpochsInfoRequest): Promise<_136.QueryEpochsInfoResponse>;
                    currentEpoch(request: _136.QueryCurrentEpochRequest): Promise<_136.QueryCurrentEpochResponse>;
                    epochInfo(request: _136.QueryEpochInfoRequest): Promise<_136.QueryEpochInfoResponse>;
                };
                icacallbacks: {
                    params(request?: _141.QueryParamsRequest): Promise<_141.QueryParamsResponse>;
                    callbackData(request: _141.QueryGetCallbackDataRequest): Promise<_141.QueryGetCallbackDataResponse>;
                    callbackDataAll(request?: _141.QueryAllCallbackDataRequest): Promise<_141.QueryAllCallbackDataResponse>;
                };
                icaoracle: {
                    oracle(request: _147.QueryOracleRequest): Promise<_147.QueryOracleResponse>;
                    allOracles(request?: _147.QueryAllOraclesRequest): Promise<_147.QueryAllOraclesResponse>;
                    activeOracles(request: _147.QueryActiveOraclesRequest): Promise<_147.QueryActiveOraclesResponse>;
                    metrics(request: _147.QueryMetricsRequest): Promise<_147.QueryMetricsResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _154.QueryParamsRequest): Promise<_154.QueryParamsResponse>;
                        epochProvisions(request?: _154.QueryEpochProvisionsRequest): Promise<_154.QueryEpochProvisionsResponse>;
                    };
                };
                records: {
                    params(request?: _158.QueryParamsRequest): Promise<_158.QueryParamsResponse>;
                    userRedemptionRecord(request: _158.QueryGetUserRedemptionRecordRequest): Promise<_158.QueryGetUserRedemptionRecordResponse>;
                    userRedemptionRecordAll(request?: _158.QueryAllUserRedemptionRecordRequest): Promise<_158.QueryAllUserRedemptionRecordResponse>;
                    userRedemptionRecordForUser(request: _158.QueryAllUserRedemptionRecordForUserRequest): Promise<_158.QueryAllUserRedemptionRecordForUserResponse>;
                    epochUnbondingRecord(request: _158.QueryGetEpochUnbondingRecordRequest): Promise<_158.QueryGetEpochUnbondingRecordResponse>;
                    epochUnbondingRecordAll(request?: _158.QueryAllEpochUnbondingRecordRequest): Promise<_158.QueryAllEpochUnbondingRecordResponse>;
                    depositRecord(request: _158.QueryGetDepositRecordRequest): Promise<_158.QueryGetDepositRecordResponse>;
                    depositRecordAll(request?: _158.QueryAllDepositRecordRequest): Promise<_158.QueryAllDepositRecordResponse>;
                    depositRecordByHost(request: _158.QueryDepositRecordByHostRequest): Promise<_158.QueryDepositRecordByHostResponse>;
                    lSMDeposit(request: _158.QueryLSMDepositRequest): Promise<_158.QueryLSMDepositResponse>;
                    lSMDeposits(request: _158.QueryLSMDepositsRequest): Promise<_158.QueryLSMDepositsResponse>;
                };
                stakedym: {
                    hostZone(request?: _161.QueryHostZoneRequest): Promise<_161.QueryHostZoneResponse>;
                    delegationRecords(request: _161.QueryDelegationRecordsRequest): Promise<_161.QueryDelegationRecordsResponse>;
                    unbondingRecords(request: _161.QueryUnbondingRecordsRequest): Promise<_161.QueryUnbondingRecordsResponse>;
                    redemptionRecord(request: _161.QueryRedemptionRecordRequest): Promise<_161.QueryRedemptionRecordResponse>;
                    redemptionRecords(request: _161.QueryRedemptionRecordsRequest): Promise<_161.QueryRedemptionRecordsResponse>;
                    slashRecords(request?: _161.QuerySlashRecordsRequest): Promise<_161.QuerySlashRecordsResponse>;
                };
                stakeibc: {
                    params(request?: _173.QueryParamsRequest): Promise<_173.QueryParamsResponse>;
                    validators(request: _173.QueryGetValidatorsRequest): Promise<_173.QueryGetValidatorsResponse>;
                    hostZone(request: _173.QueryGetHostZoneRequest): Promise<_173.QueryGetHostZoneResponse>;
                    hostZoneAll(request?: _173.QueryAllHostZoneRequest): Promise<_173.QueryAllHostZoneResponse>;
                    moduleAddress(request: _173.QueryModuleAddressRequest): Promise<_173.QueryModuleAddressResponse>;
                    interchainAccountFromAddress(request: _173.QueryInterchainAccountFromAddressRequest): Promise<_173.QueryInterchainAccountFromAddressResponse>;
                    epochTracker(request: _173.QueryGetEpochTrackerRequest): Promise<_173.QueryGetEpochTrackerResponse>;
                    epochTrackerAll(request?: _173.QueryAllEpochTrackerRequest): Promise<_173.QueryAllEpochTrackerResponse>;
                    nextPacketSequence(request: _173.QueryGetNextPacketSequenceRequest): Promise<_173.QueryGetNextPacketSequenceResponse>;
                    addressUnbondings(request: _173.QueryAddressUnbondings): Promise<_173.QueryAddressUnbondingsResponse>;
                    allTradeRoutes(request?: _173.QueryAllTradeRoutes): Promise<_173.QueryAllTradeRoutesResponse>;
                };
                staketia: {
                    hostZone(request?: _178.QueryHostZoneRequest): Promise<_178.QueryHostZoneResponse>;
                    delegationRecords(request: _178.QueryDelegationRecordsRequest): Promise<_178.QueryDelegationRecordsResponse>;
                    unbondingRecords(request: _178.QueryUnbondingRecordsRequest): Promise<_178.QueryUnbondingRecordsResponse>;
                    redemptionRecord(request: _178.QueryRedemptionRecordRequest): Promise<_178.QueryRedemptionRecordResponse>;
                    redemptionRecords(request: _178.QueryRedemptionRecordsRequest): Promise<_178.QueryRedemptionRecordsResponse>;
                    slashRecords(request?: _178.QuerySlashRecordsRequest): Promise<_178.QuerySlashRecordsResponse>;
                };
            };
        }>;
    };
}
